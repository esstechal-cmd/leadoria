import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Qu\'est-ce qu\'une mutuelle senior et pourquoi est-elle indispensable après 60 ans ?',
    answer: `Une mutuelle senior est un contrat de complémentaire santé spécialement conçu pour les personnes de 60 ans et plus, retraités ou proches de la retraite. Elle complète les remboursements de l'Assurance Maladie (Sécurité Sociale), qui ne couvre en moyenne que 70% des dépenses de santé.

Après 60 ans, les besoins de santé augmentent significativement : consultations chez les spécialistes, prothèses dentaires, lunettes, hospitalisations plus fréquentes. Sans mutuelle adaptée, le reste à charge peut atteindre plusieurs milliers d'euros par an. Une bonne mutuelle senior garantit votre tranquillité d'esprit et protège votre budget retraite.`,
  },
  {
    question: 'Comment fonctionne un comparatif mutuelle senior et est-ce vraiment gratuit ?',
    answer: `Notre comparateur de mutuelles senior est 100% gratuit et sans engagement. En renseignant votre âge, votre code postal et le niveau de couverture souhaité, notre outil analyse en temps réel les offres de plus de 30 compagnies d'assurance partenaires.

Vous recevez ensuite une sélection personnalisée des meilleures mutuelles correspondant à votre profil, avec un tableau comparatif clair des garanties et des tarifs. Un conseiller spécialisé peut également vous accompagner gratuitement dans votre choix. Nous sommes rémunérés par les compagnies d'assurance uniquement si vous souscrivez, ce qui garantit l'objectivité de notre comparatif.`,
  },
  {
    question: 'Peut-on vraiment économiser 40% sur sa mutuelle santé senior ?',
    answer: `Oui, c'est tout à fait possible ! L'économie réelle dépend de votre situation actuelle, mais nos données montrent que :

• 68% de nos utilisateurs économisent plus de 200€/an
• 43% économisent plus de 400€/an
• L'économie moyenne constatée est de 487€/an
• Les plus fortes économies atteignent 900€/an pour les couples

Ces économies sont possibles car le marché de la mutuelle senior est très concurrentiel, et les prix peuvent varier du simple au double pour des garanties équivalentes. De plus, si vous n'avez pas comparé depuis plus de 2 ans, vous payez très probablement trop cher.`,
  },
  {
    question: 'Quelles sont les garanties les plus importantes pour une mutuelle retraite ?',
    answer: `Pour une mutuelle senior bien adaptée, les garanties prioritaires sont :

1. **Hospitalisation** : chambre particulière, dépassements d'honoraires, transport
2. **Dentaire** : prothèses, implants, couronnes (poste de dépense n°1 après 65 ans)
3. **Optique** : lunettes progressives, lentilles (les besoins visuels augmentent)
4. **Audiologie** : appareils auditifs (1 senior sur 3 est concerné après 65 ans)
5. **Médecines douces** : ostéopathie, acupuncture pour le bien-être
6. **Consultations spécialistes** : remboursement des dépassements d'honoraires

Le bon niveau de couverture dépend de votre état de santé, de vos antécédents médicaux et de votre budget. Notre comparateur vous aide à trouver l'équilibre parfait.`,
  },
  {
    question: 'Peut-on changer de mutuelle senior facilement ? Quels sont les délais ?',
    answer: `Depuis la loi Hamon (2015) et la loi Châtel, changer de mutuelle est devenu beaucoup plus simple :

• **Résiliation à tout moment** après 1 an de contrat, sans frais ni pénalité
• **Préavis de 2 mois** pour les contrats collectifs
• **Résiliation immédiate** possible si votre tarif augmente
• **Continuité des soins** garantie : pas de délai de carence si vous changez de mutuelle

Notre service vous accompagne dans toutes les démarches administratives de résiliation et de souscription. Vous n'avez qu'à signer et nous nous occupons du reste. Le changement prend généralement 30 à 45 jours.`,
  },
  {
    question: 'Quelle est la meilleure mutuelle pour les seniors avec de petits revenus ?',
    answer: `Pour les seniors avec des revenus modestes, plusieurs solutions existent :

**La Complémentaire Santé Solidaire (CSS)** : si vos revenus sont inférieurs à environ 1 200€/mois, vous pouvez bénéficier d'une mutuelle gratuite ou très peu chère (moins de 30€/mois).

**Les mutuelles économiques** : notre comparateur identifie les offres à partir de 60-80€/mois avec de bonnes garanties de base.

**L'aide à la complémentaire santé** : certaines collectivités locales proposent des aides supplémentaires.

Notre conseiller peut vous orienter vers les dispositifs auxquels vous avez droit selon votre situation. N'hésitez pas à demander votre devis gratuit, même avec un budget serré.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-[#f8fafc]" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-[#1a56db] font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            ❓ Questions fréquentes
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0f172a] mb-4">
            Tout savoir sur la
            <span className="text-[#1a56db]"> mutuelle senior</span>
          </h2>
          <p className="font-body text-[#64748b] text-lg">
            Les réponses aux questions les plus posées par nos utilisateurs.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#f8fafc] transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3 className="font-body font-bold text-[#0f172a] text-base md:text-lg leading-snug">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-[#1a56db]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748b]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-[#e2e8f0]">
                      <div className="pt-4 font-body text-[#475569] text-sm leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100"
        >
          <p className="font-heading font-bold text-[#0f172a] text-xl mb-2">
            Vous avez d'autres questions ?
          </p>
          <p className="font-body text-[#64748b] mb-5">
            Nos conseillers spécialisés en mutuelle senior sont disponibles du lundi au vendredi, 9h-18h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33180200000"
              className="flex items-center justify-center gap-2 bg-[#1a56db] text-white font-body font-bold px-6 py-3 rounded-xl hover:bg-[#1e3a8a] transition-colors"
            >
              📞 01 80 20 00 00
            </a>
            <button
              onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 bg-white border-2 border-[#1a56db] text-[#1a56db] font-body font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Obtenir mon devis gratuit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
