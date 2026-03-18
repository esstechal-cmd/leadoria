import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const tableData = [
  {
    garantie: 'Hospitalisation',
    actuelle: '80%',
    optimisee: '100%',
    gain: '+20%',
    good: true,
  },
  {
    garantie: 'Dentaire (prothèse)',
    actuelle: '150€/an',
    optimisee: '800€/an',
    gain: '+533€',
    good: true,
  },
  {
    garantie: 'Optique (montures)',
    actuelle: '100€/2ans',
    optimisee: '250€/an',
    gain: '+150€',
    good: true,
  },
  {
    garantie: 'Médecines douces',
    actuelle: 'Non couvert',
    optimisee: '400€/an',
    gain: '+400€',
    good: true,
  },
  {
    garantie: 'Cotisation mensuelle',
    actuelle: '185€/mois',
    optimisee: '112€/mois',
    gain: '-73€/mois',
    good: true,
  },
];

const comparators = [
  { name: 'Mutuelle A', price: '112€/mois', note: '4.9/5', highlight: true, badge: 'Meilleur rapport' },
  { name: 'Mutuelle B', price: '124€/mois', note: '4.7/5', highlight: false, badge: null },
  { name: 'Mutuelle C', price: '138€/mois', note: '4.5/5', highlight: false, badge: null },
  { name: 'Votre mutuelle actuelle', price: '185€/mois', note: '3.2/5', highlight: false, badge: 'Trop chère' },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-[#1a56db] font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            📊 Comparatif mutuelle senior
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0f172a] mb-4">
            Pourquoi comparer permet
            <span className="text-[#16a34a]"> d'économiser jusqu'à 40%</span>
          </h2>
          <p className="font-body text-[#64748b] text-lg max-w-2xl mx-auto">
            Voici un exemple concret de ce que nos utilisateurs obtiennent après comparaison.
            Les résultats varient selon votre profil.
          </p>
        </motion.div>

        {/* Before/After table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 overflow-x-auto rounded-2xl shadow-sm border border-[#e2e8f0]"
        >
          <table className="w-full comparison-table">
            <thead>
              <tr>
                <th className="rounded-tl-2xl">Garantie</th>
                <th className="bg-red-600">Mutuelle actuelle</th>
                <th className="bg-[#16a34a] rounded-tr-2xl">Mutuelle optimisée</th>
                <th className="bg-[#16a34a] hidden md:table-cell">Gain</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td className="font-body font-semibold text-[#0f172a]">{row.garantie}</td>
                  <td className="font-body text-red-600 font-semibold">
                    <span className="flex items-center gap-1">
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      {row.actuelle}
                    </span>
                  </td>
                  <td className="font-body text-green-700 font-bold">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      {row.optimisee}
                    </span>
                  </td>
                  <td className="hidden md:table-cell">
                    <span className="bg-green-100 text-green-700 font-body font-bold text-sm px-3 py-1 rounded-full">
                      {row.gain}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Comparator cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {comparators.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-5 text-center relative border-2 transition-all ${
                c.highlight
                  ? 'border-[#16a34a] bg-green-50 shadow-lg scale-105'
                  : i === 3
                  ? 'border-red-200 bg-red-50'
                  : 'border-[#e2e8f0] bg-white'
              }`}
            >
              {c.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-body font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                  c.highlight ? 'bg-[#16a34a] text-white' : 'bg-red-500 text-white'
                }`}>
                  {c.badge}
                </div>
              )}
              <div className={`font-heading font-bold text-base mb-2 ${
                c.highlight ? 'text-[#16a34a]' : i === 3 ? 'text-red-600' : 'text-[#0f172a]'
              }`}>
                {c.name}
              </div>
              <div className={`font-heading font-bold text-2xl mb-1 ${
                c.highlight ? 'text-[#16a34a]' : i === 3 ? 'text-red-500' : 'text-[#1a56db]'
              }`}>
                {c.price}
              </div>
              <div className="font-body text-[#64748b] text-sm">★ {c.note}</div>
            </motion.div>
          ))}
        </div>

        {/* Savings highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white"
        >
          <div>
            <p className="font-heading font-bold text-2xl">Économie totale potentielle :</p>
            <p className="font-body text-green-100">Sur l'exemple ci-dessus (profil 67 ans, Île-de-France)</p>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-5xl text-yellow-300">876€</div>
            <div className="font-body text-green-100 text-sm">par an d'économie</div>
          </div>
          <button
            onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white text-green-700 font-body font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors shadow-md whitespace-nowrap"
          >
            Calculer mon économie
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
