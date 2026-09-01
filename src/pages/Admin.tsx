import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Filter, Download, Trash2, Eye, Edit3,
  ChevronLeft, ChevronRight, Shield, ArrowLeft,
  Building2, Car, HeartPulse, StickyNote, X, Check, Loader2,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

type LeadStatus = 'Nouveau' | 'Contacté' | 'Qualifié' | 'Converti' | 'Non qualifié';
const STATUSES: LeadStatus[] = ['Nouveau', 'Contacté', 'Qualifié', 'Converti', 'Non qualifié'];

const statusColors: Record<LeadStatus, string> = {
  'Nouveau': 'bg-blue-100 text-blue-800',
  'Contacté': 'bg-yellow-100 text-yellow-800',
  'Qualifié': 'bg-green-100 text-green-800',
  'Converti': 'bg-emerald-100 text-emerald-800',
  'Non qualifié': 'bg-slate-100 text-slate-600',
};

const typeIcons: Record<string, any> = { decennale: Building2, auto: Car, mutuelle: HeartPulse };
const typeLabels: Record<string, string> = { decennale: 'Décennale', auto: 'Auto', mutuelle: 'Mutuelle' };

interface Lead {
  id: number;
  type: string;
  form_data: Record<string, string>;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  status: LeadStatus;
  notes: string | null;
  created_at: string;
}

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const limit = 20;

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page), limit: String(limit) });
      if (typeFilter !== 'all') params.set('type', typeFilter);
      if (statusFilter !== 'all') params.set('status', statusFilter);
      if (search) params.set('search', search);
      const res = await fetch(`/api/leads?${params}`);
      const data = await res.json();
      setLeads(data.data || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLeads(); }, [page, typeFilter, statusFilter]);
  useEffect(() => { if (!search) fetchLeads(); }, [search]);

  const handleSearch = () => { setPage(1); fetchLeads(); };

  const updateStatus = async (id: number, status: LeadStatus) => {
    await fetch('/api/leads', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchLeads();
  };

  const updateNotes = async () => {
    if (!selected) return;
    setSaving(true);
    await fetch('/api/leads', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: selected.id, notes: editNotes }),
    });
    setSaving(false);
    setSelected({ ...selected, notes: editNotes });
  };

  const deleteLead = async (id: number) => {
    if (!confirm('Supprimer ce lead ?')) return;
    await fetch(`/api/leads?id=${id}`, { method: 'DELETE' });
    fetchLeads();
    setSelected(null);
  };

  const exportCSV = () => {
    const headers = ['ID', 'Type', 'Nom', 'Prénom', 'Email', 'Téléphone', 'Statut', 'Date', 'Notes'];
    const rows = leads.map(l => [l.id, l.type, l.nom, l.prenom, l.email, l.telephone, l.status, l.created_at, l.notes || '']);
    const csv = [headers.join(';'), ...rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(';'))].join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_leadflow_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <SEOHead title="Administration — LeadFlow Agency" description="Espace d'administration LeadFlow Agency" />
      <div className="min-h-screen bg-slate-50">
        <div className="bg-navy py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-gold" />
              <h1 className="text-2xl font-bold text-white">Administration</h1>
            </div>
            <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Retour au site
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher par nom, email, téléphone..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue outline-none text-sm"
                />
              </div>
              <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }} className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white">
                <option value="all">Tous les types</option>
                <option value="decennale">Décennale</option>
                <option value="auto">Auto</option>
                <option value="mutuelle">Mutuelle</option>
              </select>
              <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white">
                <option value="all">Tous les statuts</option>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy text-white text-sm font-medium hover:bg-navy-light transition-colors">
                <Download className="w-4 h-4" /> Export CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-500">Total leads</p>
              <p className="text-2xl font-bold text-navy">{total}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-500">Nouveaux</p>
              <p className="text-2xl font-bold text-blue">{leads.filter(l => l.status === 'Nouveau').length}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-500">Qualifiés</p>
              <p className="text-2xl font-bold text-green-600">{leads.filter(l => l.status === 'Qualifié').length}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-500">Convertis</p>
              <p className="text-2xl font-bold text-emerald-600">{leads.filter(l => l.status === 'Converti').length}</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Type</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Contact</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Email</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Statut</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={6} className="text-center py-12"><Loader2 className="w-6 h-6 animate-spin text-blue mx-auto" /></td></tr>
                  ) : leads.length === 0 ? (
                    <tr><td colSpan={6} className="text-center py-12 text-slate-400">Aucun lead trouvé</td></tr>
                  ) : leads.map((lead) => {
                    const Icon = typeIcons[lead.type] || Building2;
                    return (
                      <tr key={lead.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium text-navy">{typeLabels[lead.type] || lead.type}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-slate-800">{lead.prenom} {lead.nom}</p>
                          <p className="text-xs text-slate-400">{lead.telephone}</p>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">{lead.email}</td>
                        <td className="px-4 py-3">
                          <select
                            value={lead.status}
                            onChange={(e) => updateStatus(lead.id, e.target.value as LeadStatus)}
                            className={`text-xs font-medium px-2.5 py-1 rounded-full border-0 cursor-pointer ${statusColors[lead.status]}`}
                          >
                            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500">
                          {new Date(lead.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <button onClick={() => { setSelected(lead); setEditNotes(lead.notes || ''); }} className="p-1.5 text-slate-400 hover:text-blue transition-colors" title="Voir">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button onClick={() => deleteLead(lead.id)} className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="Supprimer">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  {(page - 1) * limit + 1} - {Math.min(page * limit, total)} sur {total}
                </p>
                <div className="flex items-center gap-2">
                  <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detail modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelected(null)}>
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-navy">Détail du lead #{selected.id}</h3>
                <button onClick={() => setSelected(null)} className="p-1 text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-xs text-slate-500">Type</p><p className="font-medium text-navy">{typeLabels[selected.type]}</p></div>
                  <div><p className="text-xs text-slate-500">Statut</p><span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[selected.status]}`}>{selected.status}</span></div>
                  <div><p className="text-xs text-slate-500">Nom</p><p className="font-medium text-navy">{selected.prenom} {selected.nom}</p></div>
                  <div><p className="text-xs text-slate-500">Téléphone</p><p className="font-medium text-navy">{selected.telephone}</p></div>
                  <div><p className="text-xs text-slate-500">Email</p><p className="font-medium text-navy">{selected.email}</p></div>
                  <div><p className="text-xs text-slate-500">Date</p><p className="font-medium text-navy text-sm">{new Date(selected.created_at).toLocaleDateString('fr-FR')}</p></div>
                </div>

                {selected.form_data && Object.keys(selected.form_data).length > 0 && (
                  <div>
                    <p className="text-xs text-slate-500 mb-2">Données du formulaire</p>
                    <div className="bg-slate-50 rounded-lg p-3 space-y-1">
                      {Object.entries(selected.form_data).map(([k, v]) => (
                        <div key={k} className="flex justify-between text-sm">
                          <span className="text-slate-500 capitalize">{k.replace(/_/g, ' ')}</span>
                          <span className="text-navy font-medium text-right max-w-[60%] truncate">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Notes</label>
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-blue outline-none resize-none"
                  />
                  <button
                    onClick={updateNotes}
                    disabled={saving}
                    className="mt-2 flex items-center gap-1 text-sm text-blue hover:text-navy font-medium disabled:opacity-50"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                    Sauvegarder
                  </button>
                </div>

                <button
                  onClick={() => deleteLead(selected.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-red-200 text-red-600 text-sm hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" /> Supprimer ce lead
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}