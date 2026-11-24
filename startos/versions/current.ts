import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.5.1:1',
  releaseNotes: {
    en_US: `Updated Paperless-ngx to 3.5.1. Fixes AI chat answers not streaming, background tasks failing when the audit log is disabled, and the bulk edit selection being cleared after queuing an operation. [Full release notes](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.1)`,
    es_ES: `Paperless-ngx actualizado a 3.5.1. Corrige que las respuestas del chat de IA no se transmitieran progresivamente, los fallos de tareas en segundo plano con el registro de auditoría desactivado y la pérdida de la selección de edición masiva tras poner una operación en cola. [Notas completas](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.1)`,
    de_DE: `Paperless-ngx auf 3.5.1 aktualisiert. Behebt, dass KI-Chat-Antworten nicht gestreamt wurden, dass Hintergrundaufgaben bei deaktiviertem Audit-Log fehlschlugen und dass die Auswahl für Massenbearbeitungen nach dem Einreihen eines Vorgangs verloren ging. [Vollständige Versionshinweise](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.1)`,
    pl_PL: `Zaktualizowano Paperless-ngx do wersji 3.5.1. Naprawia brak strumieniowania odpowiedzi czatu AI, błędy zadań w tle przy wyłączonym dzienniku audytu oraz utratę zaznaczenia edycji zbiorczej po dodaniu operacji do kolejki. [Pełne informacje o wydaniu](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.1)`,
    fr_FR: `Paperless-ngx mis à jour vers 3.5.1. Corrige les réponses du chat IA qui ne s'affichaient pas en continu, l'échec des tâches en arrière-plan lorsque le journal d'audit est désactivé et la perte de la sélection de modification groupée après la mise en file d'une opération. [Notes de version complètes](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.1)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
