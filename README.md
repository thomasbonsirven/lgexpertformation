# LG Expert Formation — prototype GitHub Pages

Évolution visuelle du site [lgexpertformation.fr](https://www.lgexpertformation.fr/), conçue pour être prévisualisée sur GitHub Pages puis reconstruite dans WordPress / Elementor.

## Prévisualiser

Après activation de GitHub Pages (Settings → Pages → Deploy from a branch `main` / dossier `/`, ou via le workflow Actions) :

`https://thomasbonsirven.github.io/lgexpertformation/`

En local :

```bash
python3 -m http.server 8080
```

## Correspondance Elementor

Voir `elementor-widgets.json` : chaque bloc de la page d’accueil est tagué `data-el-widget` (heading, button, tabs, alert, image-box, counter, testimonial, call-to-action, etc.).
