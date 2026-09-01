import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { type, search, status, page, limit } = req.query;
      let query = supabase.from('leads').select('*', { count: 'exact' });
      if (type && type !== 'all') query = query.eq('type', type);
      if (status && status !== 'all') query = query.eq('status', status);
      if (search) {
        query = query.or(`nom.ilike.%${search}%,prenom.ilike.%${search}%,email.ilike.%${search}%,telephone.ilike.%${search}%`);
      }
      const p = parseInt(page) || 1;
      const l = parseInt(limit) || 50;
      const from = (p - 1) * l;
      const to = from + l - 1;
      query = query.range(from, to).order('created_at', { ascending: false });
      const { data, error, count } = await query;
      if (error) throw error;
      return res.status(200).json({ data, total: count });
    }

    if (req.method === 'POST') {
      const { type, form_data, nom, prenom, email, telephone } = req.body;
      const { data, error } = await supabase
        .from('leads')
        .insert({ type, form_data, nom, prenom, email, telephone, status: 'Nouveau' })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    if (req.method === 'PUT') {
      const { id, status, notes } = req.body;
      const updateData = {};
      if (status !== undefined) updateData.status = status;
      if (notes !== undefined) updateData.notes = notes;
      const { data, error } = await supabase
        .from('leads')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      const { error } = await supabase.from('leads').delete().eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}