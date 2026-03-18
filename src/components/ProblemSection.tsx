import { TrendingUp, AlertTriangle, HeartPulse, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: TrendingUp,
    color: 'text-red-500',
    bg: 'bg-red-50',
    title: 'Les cotisations augmentent chaque année',
    desc: 'Depuis 2020, les mutuelles santé senior ont augmenté en moyenne de +8% par an. Votre contrat actuel vous coûte probablement bien plus cher que nécessaire.',
    stat: '+8%/an',
    statLabel: 'hausse moyenne',
  },
  {
    icon: HeartPulse,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    title: 'Remboursements insuffisants',
    desc: 'Lunettes, prothèses dentaires, hospitalisation… Les dépenses de santé après 60 ans explosent. Mais votre mutuelle actuelle rembourse-t-elle vraiment assez ?',
    stat: '2 800€',
    statLabel: 'dépenses moy. senior/an',
  },
  {
    icon: Wallet,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    title: 'La retraite fragilise votre budget',
    desc: 'Avec une pension moyenne de 1 400€/mois, payer une mutuelle trop chère représente une part disproportionnée de vos revenus. Chaque euro compte.',
    stat: '1 400€',
    statLabel: 'pension moyenne France',
  },
  {
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-50',
    title: 'Vous payez pour des garanties inutiles',
    desc: "La plupart des seniors sur-cotisent pour des garanties inadaptées. Un comparatif personnalisé permet d'identifier exactement ce dont vous avez besoin.",
    stat: '487€',
    statLabel: 'économie moyenne/an',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f8fafc]" id="comparer">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-red-100 text-red-700 font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            ⚠️ Êtes-vous concerné ?
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0f172a] mb-4">
            Pourquoi votre mutuelle actuelle
            <span className="text-[#dc2626]"> vous coûte trop cher</span>
          </h2>
          <p className="font-body text-[#64748b] text-lg max-w-2xl mx-auto">
            Des millions de seniors en France paient une mutuelle inadaptée à leur situation réelle.
            Voici pourquoi il est urgent de comparer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`${p.bg} rounded-xl p-3 flex-shrink-0`}>
                  <p.icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-[#0f172a] text-lg mb-2">{p.title}</h3>
                  <p className="font-body text-[#64748b] text-sm leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-heading font-bold text-2xl ${p.color}`}>{p.stat}</span>
                    <span className="font-body text-[#94a3b8] text-sm">{p.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotional callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#1e3a8a] to-[#1a56db] rounded-2xl p-8 text-white text-center"
        >
          <p className="font-heading font-bold text-2xl md:text-3xl mb-3">
            💡 La bonne nouvelle ?
          </p>
          <p className="font-body text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            En seulement <strong className="text-white">2 minutes</strong>, notre comparateur analyse
            +30 mutuelles et vous trouve la meilleure offre pour votre profil et votre budget.
            <strong className="text-yellow-400"> Entièrement gratuit, sans engagement.</strong>
          </p>
          <button
            onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-body font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg btn-pulse"
          >
            🔴 Je veux économiser maintenant
          </button>
        </motion.div>
      </div>
    </section>
  );
}
