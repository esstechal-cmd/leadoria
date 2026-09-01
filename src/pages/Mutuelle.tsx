import { HeartPulse, Users, Stethoscope, Eye, Smile, ShieldPlus } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

export default function Mutuelle() {
  return (
    <>
      <SEOHead
        title="Mutuelle Santé — Complémentaire santé sur mesure | LeadFlow Agency"
        description="Trouvez une mutuelle santé adaptée à vos besoins et à votre famille. Comparez les niveaux de couverture et demandez votre devis gratuit."
        canonical="https://leadflow-agency.fr/mutuelle"
      />
      <PageHero
        title="Mutuelle Santé"
        subtitle="Une complémentaire santé adaptée à vos besoins et à ceux de votre famille. Comparez les solutions et demandez votre devis gratuitement."
        breadcrumb="Mutuelle Santé"
        icon={<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center"><HeartPulse className="w-7 h-7 text-gold" /></div>}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-navy mb-4">Qu'est-ce qu'une mutuelle santé ?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La mutuelle santé, ou complémentaire santé, est un contrat qui vient compléter les remboursements de l'Assurance Maladie (Sécurité sociale). Elle permet de couvrir tout ou partie des frais de santé qui ne sont pas pris en charge par le régime obligatoire, comme le ticket modérateur, les dépassements d'honoraires ou certains soins peu ou pas remboursés.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Souscrire une mutuelle santé vous permet de limiter votre reste à charge lors de vos dépenses de santé et d'accéder à une meilleure prise en charge de vos soins, pour vous et votre famille.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">Les principaux postes de dépense couverts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Stethoscope, title: 'Soins courants', desc: 'Consultations chez le médecin, généraliste ou spécialiste.' },
                { icon: Eye, title: 'Optique', desc: 'Lunettes, lentilles, montures et verres correcteurs.' },
                { icon: Smile, title: 'Dentaire', desc: 'Soins dentaires, prothèses, couronnes et orthodontie.' },
                { icon: ShieldPlus, title: "Hospitalisation", desc: "Frais d\u2019hospitalisation, chambre particulière, forfait journalier." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 border border-slate-100 rounded-lg p-4">
                  <item.icon className="w-6 h-6 text-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Les niveaux de couverture</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Les mutuelles santé proposent généralement plusieurs niveaux de garantie pour s'adapter aux besoins et aux budgets de chacun :
            </p>
            <div className="space-y-4 mb-8">
              <div className="border border-slate-100 rounded-lg p-5">
                <h3 className="font-bold text-navy mb-2">Niveau économique</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Une couverture essentielle qui complète la Sécurité sociale sur les soins courants. Idéale pour les personnes en bonne santé qui consultent peu et souhaitent limiter leur reste à charge de base.
                </p>
              </div>
              <div className="border border-slate-100 rounded-lg p-5">
                <h3 className="font-bold text-navy mb-2">Niveau confort</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Un équilibre entre prix et couverture. Inclut une bonne prise en charge des soins courants, de l'optique et du dentaire. Convient à la plupart des profils, y compris les familles.
                </p>
              </div>
              <div className="border border-slate-100 rounded-lg p-5">
                <h3 className="font-bold text-navy mb-2">Niveau premium</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Une couverture haut de gamme avec des remboursements élevés sur tous les postes, y compris les médecines douces, l'audition et l'hospitalisation en chambre particulière. Recommandée pour les personnes ayant des besoins de soins importants.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Comment choisir sa mutuelle ?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Le choix d'une mutuelle santé dépend de plusieurs facteurs personnels :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, title: 'Votre situation familiale', desc: 'Seul, en couple, avec enfants — les besoins varient selon la composition du foyer.' },
                { icon: HeartPulse, title: 'Votre état de santé', desc: 'Vos besoins en soins, en médicaments et en consultations régulières.' },
                { icon: Eye, title: 'Vos besoins spécifiques', desc: 'Port de lunettes, soins dentaires réguliers, traitements particuliers.' },
                { icon: Stethoscope, title: "Votre âge", desc: "Les besoins évoluent avec l\u2019âge : prévention chez les jeunes, soins plus fréquents chez les seniors." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 border border-slate-100 rounded-lg p-4">
                  <item.icon className="w-6 h-6 text-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue rounded-lg p-6 mb-8">
              <h3 className="font-bold text-navy mb-2">Le 100% Santé</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Depuis 2021, le dispositif 100% Santé permet à tous les assurés disposant d'une mutuelle responsable d'accéder à des équipements en optique, dentaire et audition sans aucun reste à charge. Ce dispositif garantit l'accès à des soins de qualité pour tous, quel que soit le niveau de couverture choisi.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">La mutuelle d'entreprise</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Si vous êtes salarié du secteur privé, votre employeur a l'obligation de vous proposer une mutuelle d'entreprise (complémentaire santé collective). L'employeur prend en charge au moins 50% du coût de la cotisation. Vous pouvez toutefois choisir une mutuelle individuelle si celle proposée ne correspond pas à vos besoins, ou pour couvrir des membres de votre famille.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Trouvez la mutuelle qui vous correspond"
        desc="Comparez les solutions et demandez votre devis gratuit. Un conseiller vous aidera à choisir la couverture adaptée à vos besoins."
        type="mutuelle"
      />
    </>
  );
}