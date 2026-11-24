import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import {
  consumeMountpoint,
  dataMountpoint,
  exportMountpoint,
  mediaMountpoint,
  paperlessMounts,
  srcDir,
} from '../utils'

export const bootstrapDatabase = sdk.setupOnInit(
  async (effects, kind, progress) => {
    if (kind !== 'install') return

    const phase = progress.addPhase(i18n('Initializing Paperless-ngx database'))
    phase.start()
    // .once(): a .const() here would re-run the bootstrap on every store change.
    const secretKey = await storeJson.read((s) => s.secretKey).once()
    if (!secretKey) {
      throw new Error('store.json is missing the generated secret key')
    }
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'paperless' },
      paperlessMounts,
      'bootstrap-database',
      async (sub) => {
        await sub.execFail(
          [
            'chown',
            'paperless:paperless',
            dataMountpoint,
            mediaMountpoint,
            consumeMountpoint,
            exportMountpoint,
          ],
          { user: 'root' },
        )
        await sub.execFail(
          ['python3', 'manage.py', 'migrate', '--skip-checks', '--no-input'],
          {
            cwd: srcDir,
            user: 'paperless',
            timeout: 300_000,
            env: {
              PAPERLESS_SECRET_KEY: secretKey,
              // Redis is not running here; post-migrate signals write to the cache.
              PAPERLESS_CACHE_BACKEND:
                'django.core.cache.backends.locmem.LocMemCache',
            },
          },
        )
      },
    )
    phase.complete()
  },
)
