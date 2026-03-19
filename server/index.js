import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3001;
const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD || 'admin2025';
const MONGODB_URI = process.env.MONGODB_URI;
app.use(cors({
  origin: [
    'https://www.mutuelleseniorcomparatif.fr',
    'https://mutuelleseniorcomparatif.fr',
    'https://leadoria-git-main-leadoria.vercel.app',
    'https://leadoria-bpczxed5y-leadoria.vercel.app',
    'http://localhost:5173',
  ]
}));
app.use(express.json());

let db;
async function connectDB() {
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI manquant !');
    process.exit(1);
  }
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  db = client.db('leadoria');
  console.log('✅ Connecté à MongoDB Atlas');
}

function getLeads() {
  return db.collection('leads');
}

app.post('/api/leads', async (req, res) => {
  const { nom, prenom, age, codePostal, telephone, email, couverture, regime } = req.body;
  if (!telephone || !email) {
    return res.status(400).json({ error: 'Téléphone et email requis' });
  }
const lead = {
  nom, prenom, age, codePostal, telephone, email, couverture, regime,
  date: new Date().toISOString(),
  statut: 'Nouveau',
};
  const result = await getLeads().insertOne(lead);
  console.log(`✅ Nouveau lead: ${email}`);
  res.json({ success: true, id: result.insertedId });
});

app.post('/api/auth', (req, res) => {
  const { password } = req.body;
  if (password === DASHBOARD_PASSWORD) {
    res.json({ success: true, token: Buffer.from(DASHBOARD_PASSWORD).toString('base64') });
  } else {
    res.status(401).json({ error: 'Mot de passe incorrect' });
  }
});

function checkAuth(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const expected = Buffer.from(DASHBOARD_PASSWORD).toString('base64');
  if (token !== expected) { res.status(401).json({ error: 'Non autorisé' }); return false; }
  return true;
}

app.get('/api/leads', async (req, res) => {
  if (!checkAuth(req, res)) return;
  const leads = await getLeads().find({}).sort({ date: -1 }).toArray();
  res.json(leads.map(l => ({ ...l, id: l._id.toString() })));
});

app.patch('/api/leads/:id', async (req, res) => {
  if (!checkAuth(req, res)) return;
  const { _id, id, ...update } = req.body;
  await getLeads().updateOne({ _id: new ObjectId(req.params.id) }, { $set: update });
  res.json({ success: true });
});

app.delete('/api/leads/:id', async (req, res) => {
  if (!checkAuth(req, res)) return;
  await getLeads().deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ success: true });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  });
});
