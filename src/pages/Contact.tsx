import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', sujet: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Erreur');
      setSubmitted(true);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contactez LeadFlow Agency — Notre équipe à votre écoute"
        description="Une question sur nos services d'assurance ? Contactez l'équipe LeadFlow Agency par téléphone, email ou via notre formulaire de contact."
        canonical="https://leadflow-agency.fr/contact"
      />
      <PageHero
        title="Contactez-nous"
        subtitle="Une question, un besoin d'information ? Notre équipe est à votre écoute pour vous accompagner."
        breadcrumb="Contact"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Adresse</h3>
                    <p className="text-slate-600 text-sm">12 Rue de la Paix<br />75002 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Téléphone</h3>
                    <a href="tel:+33180000000" className="text-slate-600 text-sm hover:text-blue transition-colors">01 80 00 00 00</a>
                    <p className="text-slate-400 text-xs mt-1">Du lundi au vendredi, 9h - 18h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a href="mailto:contact@leadflow-agency.fr" className="text-slate-600 text-sm hover:text-blue transition-colors">contact@leadflow-agency.fr</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-2">Horaires d'ouverture</h3>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li className="flex justify-between"><span>Lundi - Vendredi</span><span className="font-medium">9h00 - 18h00</span></li>
                  <li className="flex justify-between"><span>Samedi</span><span className="font-medium">9h00 - 12h00</span></li>
                  <li className="flex justify-between"><span>Dimanche</span><span className="font-medium">Fermé</span></li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Envoyez-nous un message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">Message envoyé !</h3>
                  <p className="text-slate-600 text-sm">Nous vous répondrons dans les meilleurs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nom *</label>
                      <input type="text" required value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Prénom *</label>
                      <input type="text" required value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone</label>
                    <input type="tel" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Sujet *</label>
                    <select required value={form.sujet} onChange={e => setForm({ ...form, sujet: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all bg-white">
                      <option value="">Sélectionnez...</option>
                      <option>Demande d'information générale</option>
                      <option>Assurance Décennale</option>
                      <option>Assurance Auto</option>
                      <option>Mutuelle Santé</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all resize-none" />
                  </div>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" required className="w-4 h-4 mt-1 accent-blue" />
                    <span className="text-xs text-slate-600">J'accepte que mes données soient traitées dans le cadre de ma demande, conformément à la <a href="/politique-confidentialite" className="text-blue underline">politique de confidentialité</a>.</span>
                  </label>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button type="submit" disabled={loading} className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors disabled:opacity-50">
                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
