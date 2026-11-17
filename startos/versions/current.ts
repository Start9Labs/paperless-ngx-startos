import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.5.0:0',
  releaseNotes: {
    en_US: `Updated Paperless-ngx to 3.5.0.

- New: run workflows manually from the document view
- New: document notes render as markdown
- New: custom fields in workflow title templates and relative-date custom field queries
- New: upload button in the navigation bar and an upload tray with progress
- Bulk edits run in the background instead of blocking the page
- Faster tag handling on large libraries; the first start after updating upgrades the database and may take longer than usual
- Many interface and workflow fixes

[Full release notes](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.0)`,
    es_ES: `Paperless-ngx actualizado a 3.5.0.

- Nuevo: ejecución manual de flujos de trabajo desde la vista del documento
- Nuevo: las notas de los documentos se muestran como markdown
- Nuevo: campos personalizados en las plantillas de título de los flujos de trabajo y consultas de fechas relativas en campos personalizados
- Nuevo: botón de subida en la barra de navegación y una bandeja de subidas con progreso
- Las ediciones masivas se ejecutan en segundo plano en lugar de bloquear la página
- Gestión de etiquetas más rápida en bibliotecas grandes; el primer inicio tras la actualización actualiza la base de datos y puede tardar más de lo habitual
- Numerosas correcciones en la interfaz y los flujos de trabajo

[Notas completas](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.0)`,
    de_DE: `Paperless-ngx auf 3.5.0 aktualisiert.

- Neu: Workflows lassen sich in der Dokumentansicht manuell ausführen
- Neu: Dokumentnotizen werden als Markdown dargestellt
- Neu: benutzerdefinierte Felder in Workflow-Titelvorlagen und relative Datumsabfragen für benutzerdefinierte Felder
- Neu: Upload-Schaltfläche in der Navigationsleiste und eine Upload-Ablage mit Fortschrittsanzeige
- Massenbearbeitungen laufen im Hintergrund, statt die Seite zu blockieren
- Schnellere Tag-Verarbeitung in großen Bibliotheken; der erste Start nach dem Update aktualisiert die Datenbank und kann länger als üblich dauern
- Zahlreiche Fehlerbehebungen in Oberfläche und Workflows

[Vollständige Versionshinweise](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.0)`,
    pl_PL: `Zaktualizowano Paperless-ngx do wersji 3.5.0.

- Nowość: ręczne uruchamianie przepływów pracy z widoku dokumentu
- Nowość: notatki do dokumentów wyświetlane jako markdown
- Nowość: pola niestandardowe w szablonach tytułów przepływów pracy i zapytania o daty względne w polach niestandardowych
- Nowość: przycisk przesyłania na pasku nawigacji i panel przesyłania z postępem
- Edycje zbiorcze działają w tle zamiast blokować stronę
- Szybsza obsługa tagów w dużych bibliotekach; pierwsze uruchomienie po aktualizacji aktualizuje bazę danych i może potrwać dłużej niż zwykle
- Wiele poprawek interfejsu i przepływów pracy

[Pełne informacje o wydaniu](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.0)`,
    fr_FR: `Paperless-ngx mis à jour vers 3.5.0.

- Nouveau : exécution manuelle des workflows depuis la vue du document
- Nouveau : les notes des documents s'affichent en markdown
- Nouveau : champs personnalisés dans les modèles de titre des workflows et requêtes de dates relatives sur les champs personnalisés
- Nouveau : bouton d'envoi dans la barre de navigation et un panneau d'envoi avec progression
- Les modifications groupées s'exécutent en arrière-plan au lieu de bloquer la page
- Gestion des étiquettes plus rapide sur les grandes bibliothèques ; le premier démarrage après la mise à jour met à niveau la base de données et peut prendre plus de temps que d'habitude
- Nombreuses corrections de l'interface et des workflows

[Notes de version complètes](https://github.com/paperless-ngx/paperless-ngx/releases/tag/v3.5.0)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
