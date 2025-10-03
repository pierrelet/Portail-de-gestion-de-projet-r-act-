# Portail de Gestion de Projets - Épreuve E2

## 📋 Description du Projet

Application web React développée pour l'épreuve E2 du BTS SIO. Cette application permet aux collaborateurs d'une ESN (Entreprise de Services Numériques) de visualiser et gérer les projets en cours.

## 🎯 Fonctionnalités

### ✅ Fonctionnalités Principales
- **Consultation des utilisateurs** : Liste complète des collaborateurs avec leurs informations
- **Détail utilisateur** : Page dédiée pour chaque utilisateur avec ses tâches
- **Gestion des tâches** : Ajout, modification et suivi des tâches (todos)
- **Recherche et filtrage** : Recherche par nom, email ou entreprise
- **Navigation intuitive** : Interface utilisateur moderne et responsive

### 🔧 Fonctionnalités Techniques
- **Architecture composants** : Structure modulaire et réutilisable
- **Gestion d'état** : Utilisation des hooks React (useState, useEffect)
- **Navigation dynamique** : React Router pour la navigation SPA
- **Validation de formulaires** : Validation côté client avec feedback visuel
- **Design responsive** : Compatible mobile, tablette et desktop
- **Gestion d'erreurs** : Gestion des erreurs API et états de chargement

## 🛠️ Technologies Utilisées

- **React 18** : Framework JavaScript pour l'interface utilisateur
- **Vite** : Outil de build et serveur de développement
- **React Router DOM** : Navigation et routage
- **CSS3** : Styles responsive et animations
- **JSONPlaceholder API** : API REST pour les données de test

## 📁 Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── Header.jsx       # En-tête et navigation
│   ├── SearchBar.jsx    # Barre de recherche
│   ├── UserCard.jsx     # Carte utilisateur
│   ├── UserList.jsx     # Liste des utilisateurs
│   ├── TodoItem.jsx     # Item de todo
│   ├── TodoList.jsx     # Liste des todos
│   ├── TodoForm.jsx     # Formulaire d'ajout de todo
│   └── Loader.jsx       # Indicateur de chargement
├── pages/               # Pages principales
│   ├── Home.jsx         # Page d'accueil
│   └── UserDetail.jsx   # Page détail utilisateur
├── services/            # Services API
│   └── api.js           # Fonctions d'appel API
├── App.jsx              # Composant principal
└── index.jsx            # Point d'entrée
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>

# Se déplacer dans le dossier
cd Portail-de-gestion-de-projet-r-act-

# Installer les dépendances
npm install
```

### Lancement en développement
```bash
# Démarrer le serveur de développement
npm run dev

# L'application sera accessible sur http://localhost:5173
```

### Build de production
```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📱 Utilisation de l'Application

### Page d'Accueil (`/`)
- **Liste des utilisateurs** : Affichage de tous les collaborateurs
- **Recherche** : Filtrage par nom, email ou entreprise
- **Navigation** : Clic sur une carte pour accéder au détail

### Page Détail Utilisateur (`/user/:userId`)
- **Informations utilisateur** : Nom, email, entreprise, site web
- **Liste des tâches** : Tâches en cours et terminées
- **Ajout de tâches** : Formulaire avec validation
- **Modification d'état** : Coche/décoche des tâches
- **Recherche de tâches** : Filtrage par titre

## 🔌 API Utilisée

### JSONPlaceholder
- **Base URL** : `https://jsonplaceholder.typicode.com`
- **Endpoints** :
  - `GET /users` : Récupérer tous les utilisateurs
  - `GET /users/{id}` : Récupérer un utilisateur par ID
  - `GET /todos?userId={id}` : Récupérer les todos d'un utilisateur
  - `POST /todos` : Créer une nouvelle tâche
  - `PUT /todos/{id}` : Modifier une tâche
  - `DELETE /todos/{id}` : Supprimer une tâche

## 🎨 Design et Responsive

### Breakpoints
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

### Couleurs Principales
- **Primaire** : Gradient bleu-violet (#667eea → #764ba2)
- **Succès** : Vert (#48bb78)
- **Erreur** : Rouge (#e53e3e)
- **Texte** : Gris foncé (#2d3748)
- **Arrière-plan** : Gris clair (#f5f7fa)

## 🧪 Fonctionnalités de Validation

### Formulaire d'Ajout de Tâche
- **Titre obligatoire** : Minimum 5 caractères
- **Feedback visuel** : Bordures colorées selon l'état
- **Désactivation du bouton** : Si formulaire invalide
- **Messages d'erreur** : Affichage des erreurs de validation

## 📊 Architecture des Composants

### Composants Présentiels
- `UserCard` : Affichage des informations utilisateur
- `TodoItem` : Affichage d'une tâche individuelle
- `Loader` : Indicateur de chargement

### Composants Conteneurs
- `UserList` : Gestion de la liste des utilisateurs
- `TodoList` : Gestion de la liste des tâches
- `Home` : Page d'accueil avec logique métier
- `UserDetail` : Page détail avec gestion des données

### Composants Utilitaires
- `SearchBar` : Barre de recherche réutilisable
- `TodoForm` : Formulaire avec validation
- `Header` : Navigation principale

## 🔧 Hooks React Utilisés

- **useState** : Gestion de l'état local des composants
- **useEffect** : Effets de bord (appels API, souscriptions)
- **useParams** : Récupération des paramètres d'URL
- **useNavigate** : Navigation programmatique

## 🚨 Gestion des Erreurs

- **Erreurs API** : Affichage de messages d'erreur utilisateur
- **États de chargement** : Indicateurs visuels pendant les requêtes
- **Page 404** : Gestion des routes inexistantes
- **Validation** : Messages d'erreur pour les formulaires

## 📈 Optimisations

- **Éviter les re-renders** : Utilisation appropriée des dépendances useEffect
- **Lazy loading** : Chargement des composants à la demande
- **Mémoisation** : Optimisation des calculs coûteux
- **Code splitting** : Séparation du code par fonctionnalité

## 🧪 Tests et Qualité

- **Pas d'erreurs de linting** : Code conforme aux standards
- **Validation des types** : Utilisation de PropTypes (optionnel)
- **Gestion des cas limites** : Gestion des états d'erreur
- **Accessibilité** : Attributs ARIA et navigation clavier

## 📝 Conformité Épreuve E2

### ✅ Critères Respectés
- **Architecture en composants** : Structure modulaire et réutilisable
- **Utilisation des hooks** : useState, useEffect, useParams, useNavigate
- **Navigation fonctionnelle** : React Router avec routes dynamiques
- **Validation de formulaire** : Validation côté client efficace
- **Code réutilisable** : Composants modulaires et maintenables
- **Bonnes pratiques React** : Conventions et patterns recommandés

## 🔮 Améliorations Futures

- **Tests unitaires** : Ajout de tests Jest/React Testing Library
- **TypeScript** : Migration vers TypeScript pour la sécurité des types
- **État global** : Utilisation de Context API ou Redux
- **PWA** : Transformation en Progressive Web App
- **Authentification** : Système de connexion utilisateur
- **Cache** : Mise en cache des données API

## 👨‍💻 Développement

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification du code
```

### Structure des Données

#### Utilisateur
```javascript
{
  id: number,
  name: string,
  email: string,
  company: {
    name: string
  },
  website: string
}
```

#### Tâche (Todo)
```javascript
{
  id: number,
  userId: number,
  title: string,
  completed: boolean
}
```

## 📞 Support

Pour toute question ou problème :
1. Vérifier la console du navigateur pour les erreurs
2. S'assurer que l'API JSONPlaceholder est accessible
3. Vérifier la compatibilité du navigateur

---

**Développé pour l'Épreuve E2 - BTS SIO**  
*Portail de Gestion de Projets avec React*