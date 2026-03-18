import { useState, useEffect } from 'react';
import { 
  Users, TrendingUp, Phone, Mail, MapPin, Clock, 
  LogOut, RefreshCw, Trash2, CheckCircle, XCircle,
  Download, Search, Filter, Eye, Shield
} from 'lucide-react';

const API_URL = 'http://localhost:3001';

const STATUTS = ['Nouveau', 'Contacté', 'En cours', 'Converti', 'Perdu'];
const STATUT_COLORS: Record<string, string> = {
  'Nouveau':  'bg-blue-100 text-blue-700',
  'Contacté': 'bg-yellow-100 text-yellow-700',
  'En cours': 'bg-purple-100 text-purple-700',
  'Converti': 'bg-green-100 text-green-700',
  'Perdu':    'bg-red-100 text-red-700',
};

const COUVERTURE_LABELS: Record<string, string> = {
  economique: '💚 Économique',
  equilibre:  '💛 Équilibre',
  confort:    '🔵 Confort',
  premium:    '⭐ Premium',
};

interface Lead {
  id: string;
  age: string;
  codePostal: string;
  telephone: string;
  email: string;
  couverture: string;
  regime: string;
  date: string;
  statut: string;
}

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('dashboard_token')
  );
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatut, setFilterStatut] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('dashboard_token', data.token);
        setAuthError('');
      } else {
        setAuthError('Mot de passe incorrect');
      }
    } catch {
      setAuthError('Impossible de joindre le serveur. Vérifiez que le backend tourne.');
    }
  };

  const fetchLeads = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { logout(); return; }
      const data = await res.json();
      setLeads(data);
    } catch {
      console.error('Erreur chargement leads');
    } finally {
      setLoading(false);
    }
  };

  const updateStatut = async (id: string, statut: string) => {
    await fetch(`${API_URL}/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ statut }),
    });
    setLeads(prev => prev.map(l => l.id === id ? { ...l, statut } : l));
    if (selectedLead?.id === id) setSelectedLead(prev => prev ? { ...prev, statut } : null);
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Supprimer ce lead ?')) return;
    await fetch(`${API_URL}/api/leads/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setLeads(prev => prev.filter(l => l.id !== id));
    if (selectedLead?.id === id) setSelectedLead(null);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('dashboard_token');
    setLeads([]);
  };

  const exportCSV = () => {
    const headers = ['Date', 'Âge', 'Code Postal', 'Téléphone', 'Email', 'Couverture', 'Régime', 'Statut'];
    const rows = filteredLeads.map(l => [
      new Date(l.date).toLocaleString('fr-FR'),
      l.age, l.codePostal, l.telephone, l.email,
      l.couverture, l.regime, l.statut
    ]);
    const csv = [headers, ...rows].map(r => r.join(';')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'leads.csv'; a.click();
  };

  useEffect(() => { if (token) fetchLeads(); }, [token]);

  const filteredLeads = leads.filter(l => {
    const q = search.toLowerCase();
    const matchSearch = !q || l.email.toLowerCase().includes(q) || 
      l.telephone.includes(q) || l.codePostal.includes(q);
    const matchStatut = !filterStatut || l.statut === filterStatut;
    return matchSearch && matchStatut;
  });

  // Stats
  const stats = {
    total: leads.length,
    nouveaux: leads.filter(l => l.statut === 'Nouveau').length,
    convertis: leads.filter(l => l.statut === 'Converti').length,
    today: leads.filter(l => new Date(l.date).toDateString() === new Date().toDateString()).length,
  };

  // LOGIN SCREEN
  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1a56db] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#1a56db] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading font-bold text-2xl text-[#0f172a]">Dashboard Leads</h1>
            <p className="font-body text-[#64748b] text-sm mt-1">MutuelleSenior Comparatif</p>
          </div>

          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Entrez le mot de passe"
                className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 font-body text-[#0f172a] focus:outline-none focus:border-[#1a56db] transition-colors"
                required
              />
            </div>
            {authError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <p className="font-body text-red-600 text-sm">{authError}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#1a56db] hover:bg-[#1e3a8a] text-white font-body font-bold py-3 rounded-xl transition-colors"
            >
              Accéder au dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="bg-white border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-[#0f172a]">Dashboard Leads</h1>
            <p className="font-body text-[#64748b] text-xs">MutuelleSenior Comparatif</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            className="flex items-center gap-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] font-body font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Actualiser
          </button>
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-body font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-body font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total leads', value: stats.total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: "Aujourd'hui", value: stats.today, icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Nouveaux', value: stats.nouveaux, icon: TrendingUp, color: 'text-yellow-600', bg: 'bg-yellow-50' },
            { label: 'Convertis', value: stats.convertis, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          ].map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-[#e2e8f0] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-[#64748b] text-sm">{label}</span>
                <div className={`${bg} rounded-lg p-2`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
              </div>
              <div className={`font-heading font-bold text-3xl ${color}`}>{value}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          {/* Leads list */}
          <div className="flex-1">
            {/* Filters */}
            <div className="flex gap-3 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                <input
                  type="text"
                  placeholder="Rechercher email, téléphone, CP..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-[#e2e8f0] rounded-xl font-body text-sm text-[#0f172a] focus:outline-none focus:border-[#1a56db] bg-white"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                <select
                  value={filterStatut}
                  onChange={e => setFilterStatut(e.target.value)}
                  className="pl-9 pr-4 py-2.5 border border-[#e2e8f0] rounded-xl font-body text-sm text-[#475569] focus:outline-none focus:border-[#1a56db] bg-white"
                >
                  <option value="">Tous les statuts</option>
                  {STATUTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-16">
                  <Users className="w-12 h-12 text-[#cbd5e1] mx-auto mb-3" />
                  <p className="font-body text-[#94a3b8] font-semibold">
                    {leads.length === 0 ? 'Aucun lead pour le moment' : 'Aucun résultat'}
                  </p>
                  <p className="font-body text-[#cbd5e1] text-sm mt-1">
                    {leads.length === 0 ? 'Les leads apparaîtront ici dès la première soumission' : 'Modifiez vos filtres'}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                      <tr>
                        {['Date', 'Contact', 'Âge / CP', 'Couverture', 'Statut', 'Actions'].map(h => (
                          <th key={h} className="text-left font-body font-semibold text-[#64748b] text-xs uppercase tracking-wide px-4 py-3">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {filteredLeads.map(lead => (
                        <tr 
                          key={lead.id} 
                          className="hover:bg-[#f8fafc] transition-colors cursor-pointer"
                          onClick={() => setSelectedLead(lead)}
                        >
                          <td className="px-4 py-3">
                            <span className="font-body text-[#475569] text-xs">
                              {new Date(lead.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                            </span>
                            <br />
                            <span className="font-body text-[#94a3b8] text-xs">
                              {new Date(lead.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1 font-body text-[#0f172a] text-sm font-semibold">
                              <Mail className="w-3 h-3 text-[#94a3b8]" />
                              {lead.email}
                            </div>
                            <div className="flex items-center gap-1 font-body text-[#64748b] text-xs mt-0.5">
                              <Phone className="w-3 h-3" />
                              {lead.telephone}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="font-body text-[#0f172a] text-sm font-semibold">{lead.age} ans</span>
                            <div className="flex items-center gap-1 font-body text-[#64748b] text-xs">
                              <MapPin className="w-3 h-3" />
                              {lead.codePostal}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="font-body text-[#475569] text-xs">
                              {COUVERTURE_LABELS[lead.couverture] || lead.couverture || '—'}
                            </span>
                          </td>
                          <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                            <select
                              value={lead.statut}
                              onChange={e => updateStatut(lead.id, e.target.value)}
                              className={`text-xs font-body font-semibold px-2 py-1 rounded-lg border-0 cursor-pointer ${STATUT_COLORS[lead.statut]}`}
                            >
                              {STATUTS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </td>
                          <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="p-1.5 rounded-lg hover:bg-blue-50 text-[#64748b] hover:text-[#1a56db] transition-colors"
                                title="Voir détails"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteLead(lead.id)}
                                className="p-1.5 rounded-lg hover:bg-red-50 text-[#64748b] hover:text-red-500 transition-colors"
                                title="Supprimer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <p className="font-body text-[#94a3b8] text-xs mt-2 text-right">
              {filteredLeads.length} lead{filteredLeads.length > 1 ? 's' : ''} affiché{filteredLeads.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Detail panel */}
          {selectedLead && (
            <div className="w-80 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6 h-fit sticky top-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading font-bold text-[#0f172a]">Détail lead</h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-[#94a3b8] hover:text-[#475569]"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-body text-xs text-[#94a3b8] uppercase tracking-wide mb-1">Contact</p>
                  <div className="flex items-center gap-2 font-body text-[#0f172a] text-sm font-semibold">
                    <Mail className="w-4 h-4 text-[#1a56db]" />
                    <a href={`mailto:${selectedLead.email}`} className="hover:text-[#1a56db]">
                      {selectedLead.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 font-body text-[#0f172a] text-sm mt-1">
                    <Phone className="w-4 h-4 text-[#16a34a]" />
                    <a href={`tel:${selectedLead.telephone}`} className="hover:text-[#16a34a] font-semibold">
                      {selectedLead.telephone}
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#f1f5f9] pt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-body text-xs text-[#94a3b8]">Âge</p>
                    <p className="font-body font-bold text-[#0f172a]">{selectedLead.age} ans</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#94a3b8]">Code postal</p>
                    <p className="font-body font-bold text-[#0f172a]">{selectedLead.codePostal}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#94a3b8]">Couverture</p>
                    <p className="font-body text-[#0f172a] text-sm">{COUVERTURE_LABELS[selectedLead.couverture] || '—'}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#94a3b8]">Régime</p>
                    <p className="font-body text-[#0f172a] text-sm capitalize">{selectedLead.regime || '—'}</p>
                  </div>
                </div>

                <div className="border-t border-[#f1f5f9] pt-4">
                  <p className="font-body text-xs text-[#94a3b8] mb-2">Date de soumission</p>
                  <p className="font-body text-[#475569] text-sm">
                    {new Date(selectedLead.date).toLocaleString('fr-FR', {
                      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </p>
                </div>

                <div className="border-t border-[#f1f5f9] pt-4">
                  <p className="font-body text-xs text-[#94a3b8] mb-2">Statut</p>
                  <select
                    value={selectedLead.statut}
                    onChange={e => updateStatut(selectedLead.id, e.target.value)}
                    className={`w-full text-sm font-body font-semibold px-3 py-2 rounded-xl border-2 border-[#e2e8f0] cursor-pointer ${STATUT_COLORS[selectedLead.statut]}`}
                  >
                    {STATUTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1a56db] hover:bg-[#1e3a8a] text-white font-body font-semibold text-sm py-2.5 rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href={`tel:${selectedLead.telephone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-body font-semibold text-sm py-2.5 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler
  </a>
                </div>

                <button
                  onClick={() => deleteLead(selectedLead.id)}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-body font-semibold text-sm py-2.5 rounded-xl transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Supprimer ce lead
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
