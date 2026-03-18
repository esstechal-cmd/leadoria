import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;
const LEADS_FILE = path.join(__dirname, 'leads.json');
const DASHBOARD_PASSWORD = 'admin2025'; // Changez ce mot de passe !

app.use(cors());
app.use(express.json());

// Init leads file
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

function readLeads() {
  return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
}

function writeLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// POST /api/leads — reçoit un nouveau lead depuis le formulaire
app.post('/api/leads', (req, res) => {
  const { age, codePostal, telephone, email, couverture, regime } = req.body;

  if (!telephone || !email) {
    return res.status(400).json({ error: 'Téléphone et email requis' });
  }

  const lead = {
    id: Date.now().toString(),
    age,
    codePostal,
    telephone,
    email,
    couverture,
    regime,
    date: new Date().toISOString(),
    statut: 'Nouveau',
  };

  const leads = readLeads();
  leads.unshift(lead); // plus récent en premier
  writeLeads(leads);

  console.log(`✅ Nouveau lead: ${email} (${telephone})`);
  res.json({ success: true, id: lead.id });
});

// POST /api/auth — vérification mot de passe dashboard
app.post('/api/auth', (req, res) => {
  const { password } = req.body;
  if (password === DASHBOARD_PASSWORD) {
    res.json({ success: true, token: Buffer.from(DASHBOARD_PASSWORD).toString('base64') });
  } else {
    res.status(401).json({ error: 'Mot de passe incorrect' });
  }
});

// GET /api/leads — récupère tous les leads (protégé)
app.get('/api/leads', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const expected = Buffer.from(DASHBOARD_PASSWORD).toString('base64');
  if (token !== expected) {
    return res.status(401).json({ error: 'Non autorisé' });
  }
  const leads = readLeads();
  res.json(leads);
});

// PATCH /api/leads/:id — met à jour le statut d'un lead
app.patch('/api/leads/:id', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const expected = Buffer.from(DASHBOARD_PASSWORD).toString('base64');
  if (token !== expected) return res.status(401).json({ error: 'Non autorisé' });

  const leads = readLeads();
  const idx = leads.findIndex(l => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Lead introuvable' });

  leads[idx] = { ...leads[idx], ...req.body };
  writeLeads(leads);
  res.json(leads[idx]);
});

// DELETE /api/leads/:id — supprime un lead
app.delete('/api/leads/:id', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const expected = Buffer.from(DASHBOARD_PASSWORD).toString('base64');
  if (token !== expected) return res.status(401).json({ error: 'Non autorisé' });

  const leads = readLeads();
  const filtered = leads.filter(l => l.id !== req.params.id);
  writeLeads(filtered);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:5173/dashboard`);
  console.log(`🔑 Mot de passe dashboard: ${DASHBOARD_PASSWORD}`);
});
