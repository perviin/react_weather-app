# Weather App en React - https://perviin-weather-app.netlify.app/

## Technologies utilisées

-   **React.js** : Framework JavaScript pour construire l'interface utilisateur
-   **Vite** : Outil de build rapide pour React
-   **OpenWeather API** : Récupération des données météorologiques
-   **Axios** : Requêtes HTTP vers l'API météo

## Description

Cette application affiche la météo en temps réel pour une ville donnée. L'utilisateur peut rechercher une ville et obtenir des informations telles que la température, l'humidité et les conditions météorologiques.

## Installation & Exécution

```sh
npm install
npm run dev

```

Par défaut, ouvrez **[http://localhost:5173](http://localhost:5173/)** dans votre navigateur.

## Structure du projet

```
weather-app/
├── src/
│   ├── components/  # Composants React
│   ├── hooks/       # Hooks personnalisés
│   ├── services/    # Appels API
│   ├── App.jsx      # Composant principal
│   ├── main.jsx     # Point d'entrée React
│
├── public/         # Assets publics
├── index.html      # Fichier HTML principal
├── package.json    # Gestion des dépendances
├── vite.config.js  # Configuration Vite
