# 🚀 Guide de démarrage — MutuelleSenior avec Dashboard Leads

## Structure du projet

```
agon-site/
├── src/                    → Code React (frontend)
│   ├── pages/Dashboard.tsx → Dashboard de gestion des leads
│   ├── components/LeadForm.tsx → Formulaire (envoie au backend)
│   └── App.tsx             → Routes: / et /dashboard
├── server/                 → Backend Node.js
│   ├── index.js            → Serveur Express (API)
│   ├── package.json
│   └── leads.json          → Fichier de stockage des leads (créé auto)
└── package.json
```

---

## ▶️ Démarrage (2 terminaux nécessaires)

### Terminal 1 — Backend (serveur des leads)
```bash
cd server
npm install
npm start
# → Tourne sur http://localhost:3001
```

### Terminal 2 — Frontend (votre site)
```bash
npm install
npm run dev
# → Tourne sur http://localhost:5173
```

---

## 🌐 URLs

| URL | Description |
|-----|-------------|
| `http://localhost:5173/` | Votre site (landing page) |
| `http://localhost:5173/dashboard` | Dashboard leads |
| `http://localhost:3001/api/leads` | API REST (protégée) |

---

## 🔐 Accès dashboard

- **URL :** `http://localhost:5173/dashboard`
- **Mot de passe :** `admin2025`

⚠️ Pour changer le mot de passe, modifiez `server/index.js` ligne 10 :
```js
const DASHBOARD_PASSWORD = 'VotreNouveauMotDePasse';
```

---

## 📊 Fonctionnalités du dashboard

- **Vue tableau** de tous les leads reçus
- **Statistiques** : total, nouveaux, convertis, aujourd'hui
- **Recherche** par email, téléphone, code postal
- **Filtre** par statut (Nouveau / Contacté / En cours / Converti / Perdu)
- **Changement de statut** directement dans le tableau
- **Panneau détail** : voir toutes les infos, appeler, envoyer un email
- **Export CSV** de tous les leads
- **Suppression** de leads

---

## 🚢 Mise en production

Pour déployer en production, utilisez **Railway** :

1. Créez un compte sur [railway.app](https://railway.app)
2. Déployez le dossier `server/` comme service Node.js
3. Dans `LeadForm.tsx` et `Dashboard.tsx`, remplacez `http://localhost:3001` par votre URL Railway
4. Déployez le frontend sur **Vercel** ou **Netlify**

---

## 📡 API endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/leads` | Créer un lead (depuis le formulaire) |
| GET | `/api/leads` | Lister tous les leads (auth requise) |
| PATCH | `/api/leads/:id` | Modifier un lead (statut…) |
| DELETE | `/api/leads/:id` | Supprimer un lead |
| POST | `/api/auth` | Obtenir un token d'accès |
