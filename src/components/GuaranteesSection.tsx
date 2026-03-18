import { Hospital, Smile, Eye, Leaf, Stethoscope, Pill } from 'lucide-react';
import { motion } from 'framer-motion';

const guarantees = [
  {
    icon: Hospital,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    title: 'Hospitalisation',
    subtitle: 'Prise en charge complète',
    items: [
      'Chambre particulière 100% prise en charge',
      'Dépassements honoraires couverts',
      'Forfait journalier hospitalier remboursé',
      'Transport médicalisé inclus',
      'Accompagnant pris en charge',
    ],
    coverage: '100%',
  },
  {
    icon: Smile,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    title: 'Soins Dentaires',
    subtitle: 'Prothèses & implants',
    items: [
      'Prothèses dentaires jusqu\'à 1 200€/an',
      'Implants dentaires remboursés',
      'Orthodontie adulte couverte',
      'Soins courants 100%',
      'Devis dentaire gratuit',
    ],
    coverage: '800€',
  },
  {
    icon: Eye,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    title: 'Optique',
    subtitle: 'Lunettes & lentilles',
    items: [
      'Montures jusqu\'à 250€/an',
      'Verres progressifs couverts',
      'Lentilles de contact remboursées',
      'Chirurgie laser prise en charge',
      'Bilan visuel annuel inclus',
    ],
    coverage: '250€',
  },
  {
    icon: Leaf,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    title: 'Médecines Douces',
    subtitle: 'Bien-être & prévention',
    items: [
      'Ostéopathie 6 séances/an',
      'Acupuncture remboursée',
      'Homéopathie prise en charge',
      'Diététique & nutrition',
      'Psychologue remboursé',
    ],
    coverage: '400€',
  },
  {
    icon: Stethoscope,
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    title: 'Consultations',
    subtitle: 'Médecins & spécialistes',
    items: [
      'Généraliste 100% remboursé',
      'Spécialistes sans avance',
      'Téléconsultation 24h/24',
      'Médecin à domicile',
      'Deuxième avis médical',
    ],
    coverage: '100%',
  },
  {
    icon: Pill,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    title: 'Médicaments & Prévention',
    subtitle: 'Traitement & bien-être',
    items: [
      'Médicaments sur ordonnance',
      'Vaccins pris en charge',
      'Bilan de santé annuel',
      'Dépistages remboursés',
      'Aide auditive couverte',
    ],
    coverage: '100%',
  },
];

export default function GuaranteesSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f8fafc]" id="garanties">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-[#1a56db] font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            🏥 Garanties incluses
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0f172a] mb-4">
            Les garanties essentielles
            <span className="text-[#1a56db]"> pour votre santé senior</span>
          </h2>
          <p className="font-body text-[#64748b] text-lg max-w-2xl mx-auto">
            Les meilleures mutuelles senior que nous comparons couvrent tous les postes de dépenses
            importants après 60 ans.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-white rounded-2xl p-6 border-2 ${g.border} hover:shadow-lg transition-all group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${g.bg} rounded-xl p-3`}>
                  <g.icon className={`w-6 h-6 ${g.color}`} />
                </div>
                <div className={`font-heading font-bold text-xl ${g.color}`}>
                  {g.coverage}
                </div>
              </div>
              <h3 className="font-heading font-bold text-[#0f172a] text-lg mb-1">{g.title}</h3>
              <p className={`font-body text-sm mb-4 ${g.color} font-semibold`}>{g.subtitle}</p>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`${g.color} mt-0.5 flex-shrink-0`}>✓</span>
                    <span className="font-body text-[#475569] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1a56db] hover:bg-[#1e3a8a] text-white font-body font-bold text-lg px-10 py-4 rounded-xl transition-all shadow-lg"
          >
            Trouver la mutuelle avec ces garanties →
          </button>
          <p className="font-body text-[#94a3b8] text-sm mt-3">Gratuit · Sans engagement · Réponse en 24h</p>
        </motion.div>
      </div>
    </section>
  );
}
