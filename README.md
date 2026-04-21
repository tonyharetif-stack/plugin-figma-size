# Multi-Format KV Generator (Figma Plugin)

Base professionnelle pour générer des déclinaisons marketing multi-formats à partir d'une frame master.

## Architecture

- `src/main.ts`: point d'entrée du plugin (sélection, exécution, reporting).
- `src/modules/generator.ts`: orchestrateur de génération multi-format.
- `src/modules/design-system-parser.ts`: validation du JSON design system.
- `src/modules/component-role-detection.ts`: détection des rôles (headline, CTA, logo...).
- `src/modules/frame-duplication.ts`: duplication du master + section de sortie.
- `src/modules/layout-engine.ts`: placement par contraintes (safe zones + rôle).
- `src/modules/typography-fitting.ts`: auto-fit typographique.
- `src/modules/image-fitting.ts`: adaptation visuels / logo (ratio).
- `src/modules/validation-engine.ts`: QA post-génération (safe zone, collisions, overflow...).
- `src/config/default-design-system.ts`: formats et règles par défaut.

## Pipeline de génération

1. L'utilisateur sélectionne une frame master.
2. Le plugin détecte les rôles de composants via conventions de naming + heuristiques.
3. Le design system est parsé et validé.
4. Pour chaque format:
   - Duplication de la frame master.
   - Mapping des nœuds clonés avec les rôles détectés.
   - Recomposition via contraintes de layout.
   - Fallbacks progressifs (resize/reposition/font/image/hide décoratif).
   - Validation post-génération.
5. Les frames générées sont regroupées en section dédiée.

## Structure JSON recommandée

```json
{
  "version": "1.0.0",
  "formatOrder": ["desktop_banner", "slider", "mobile_category_banner"],
  "priorities": ["headline", "hero_image", "promo_badge", "cta", "logo"],
  "formats": {
    "desktop_banner": {
      "width": 1200,
      "height": 250,
      "layout": "horizontal",
      "safeZone": { "top": 24, "right": 24, "bottom": 24, "left": 24 },
      "roleConstraints": {
        "headline": {
          "anchor": "top-left",
          "box": { "x": 0.04, "y": 0.12, "width": 0.28, "height": 0.28 },
          "minWidth": 120,
          "minHeight": 32
        }
      },
      "typography": {
        "headline": { "minFontSize": 18, "maxFontSize": 44, "maxLines": 2 }
      }
    }
  }
}
```

> Les `box` sont exprimées en ratio de la zone utile (safe zone) pour garder un moteur extensible quel que soit le format.

## Fonctions critiques (priorité de dev)

1. Détection robuste des rôles + score de confiance.
2. Moteur de placement par contraintes + priorités.
3. Auto-fit typographique multi-lignes maîtrisé.
4. Recadrage image/focal point.
5. Validation post-génération et boucle de correction.

## Fallbacks

Ordre d'application conseillé:
1. Resize proportionnel.
2. Repositionnement dans safe zone.
3. Réduction typographique contrôlée (min/max).
4. Recadrage intelligent image.
5. Masquage décoratifs non prioritaires.

Les rôles stratégiques (`headline`, `hero_image`, `promo_badge`, `cta`) ne doivent jamais être supprimés.

## Build

```bash
npm install
npm run build
```

Puis chargez `manifest.json` dans Figma (Development plugin).
