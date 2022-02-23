# Bataille de mots (Wordle Wars en français)

[![Netlify Status](https://api.netlify.com/api/v1/badges/049849ed-d2cf-470a-89eb-0c16da01efc2/deploy-status)](https://app.netlify.com/sites/bataille-de-mots/deploys)

Basé sur https://github.com/CTNicholas/wordle-wars, forké sur https://github.com/yyx990803/vue-wordle

## Stack
- [Vue](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Liveblocks](https://liveblocks.io) (WebSocket)
- [Netlify](https://www.netlify.com/) (déploiement)

## Comment lancer le projet en local ? 

- Installez les dépendances grâce à la commande `npm install`

- Créez un compte sur [liveblocks.io](https://liveblocks.io/dashboard)

- Copiez votre clef publique depuis le menu [administration](https://liveblocks.io/dashboard/apikeys) de Liveblocks

- Créez un fichier `.env.local` à la racine du projet et ajoutez la variable d'environnement suivante : `VITE_LIVEBLOCKS_PUBLIC_KEY=sk_test_yourkey`

## Comment déployer l'application ?

J'ai utilisé Netlify pour mon déploiement : https://bataille-de-mots.netlify.app/?room=992b30eff3acd1363322a
Vous pouvez retrouver d'autres tutoriels de déploiement sur la documentation de [Vite](https://vitejs.dev/guide/static-deploy.html)

- Forkez ce projet et clonez le en local

- Installez Netlify CLI (Command Line Interface / Interface de ligne de commande) grâce à la commande `npm install -g netlify-cli`

- Créez un nouveau projet de site sur Netlify grâce à la commande `ntl init`

- Déployez grâce à la commande `ntl deploy --prod`

## Paramétrer Netlify pour le déploiement (menu "Site settings" sur Netlify) : 

#### Dans l'onglet "Build & Deploy", rubrique "Continuous Deployment" :

- "Build command" : `vite build`

- "Publish directory" : `dist`

#### Dans la rubrique "Environment"

- Ajoutez `VITE_LIVEBLOCKS_PUBLIC_KEY` en variable d'environnement Netlify, avec la clef Liveblocks précédemment utilisée
