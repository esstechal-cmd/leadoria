import { Building2, HardHat, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

export default function Decennale() {
  return (
    <>
      <SEOHead
        title="Assurance Décennale pour professionnels du BTP | LeadFlow Agency"
        description="L'assurance décennale est obligatoire pour les professionnels du bâtiment. Découvrez comment protéger votre activité et demandez votre devis gratuitement."
        canonical="https://leadflow-agency.fr/decennale"
      />
      <PageHero
        title="Assurance Décennale"
        subtitle="Une couverture obligatoire pour les professionnels du bâtiment. Protégez votre activité et vos clients avec une solution adaptée à votre métier."
        breadcrumb="Assurance Décennale"
        icon={<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center"><Building2 className="w-7 h-7 text-gold" /></div>}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-navy mb-4">Qu'est-ce que l'assurance décennale ?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              L'assurance décennale est une garantie obligatoire pour tous les professionnels du bâtiment en France. Instaurée par la loi Spinetta de 1978, elle a pour objectif de protéger le maître d'ouvrage (le client) contre les dommages qui pourraient compromettre la solidité de l'ouvrage ou le rendre impropre à sa destination pendant une période de dix ans après la réception des travaux.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Tout professionnel exerçant une activité de construction, de rénovation ou d'aménagement doit souscrire cette assurance avant le début des travaux. Son absence peut entraîner des sanctions sévères, notamment pénales.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">Qui est concerné par l'assurance décennale ?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              L'assurance décennale s'adresse à tous les professionnels du secteur du bâtiment et des travaux publics, notamment :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Maçons et entreprises de gros œuvre',
                'Couvreurs et charpentiers',
                'Plombiers et chauffagistes',
                'Électriciens',
                'Peintres et plâtriers',
                'Carreleurs et revêteurs',
                'Menuisiers',
                'Entreprises de terrassement',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Que couvre l'assurance décennale ?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              La garantie décennale couvre les dommages qui affectent la solidité de l'ouvrage et le rendent inhabitable ou impropre à l'usage pour lequel il a été conçu. Cela inclut :
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Les fissures compromettant la structure du bâtiment',
                'Les défauts de fondation affectant la stabilité',
                "Les problèmes d\u2019étanchéité rendant le bien impropre à l\u2019habitation",
                'Les défauts de mise en œuvre des équipements indissociables',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <ShieldAlert className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Les critères qui influencent le tarif</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Le coût de l'assurance décennale dépend de plusieurs facteurs propres à votre activité :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: HardHat, title: "Votre métier", desc: "Certaines activités présentent plus de risques que d\u2019autres." },
                { icon: FileText, title: "Chiffre d\u2019affaires", desc: "Le volume d\u2019activité influence le calcul de la prime." },
                { icon: Building2, title: "Ancienneté", desc: "L\u2019expérience et l\u2019historique de sinistralité sont pris en compte." },
                { icon: ShieldAlert, title: "Nombre de salariés", desc: "La taille de l\u2019entreprise peut impacter la tarification." },
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
              <h3 className="font-bold text-navy mb-2">Bon à savoir</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                L'assurance décennale doit être souscrite avant le début des travaux. Il est important de conserver votre attestation d'assurance et de la présenter à vos clients, qui sont en droit de la réclamer. La garantie s'applique pendant 10 ans à compter de la réception de l'ouvrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Protégez votre activité dès aujourd'hui"
        desc="Demandez votre devis d'assurance décennale gratuitement. Un conseiller spécialisé BTP vous recontactera."
        type="decennale"
      />
    </>
  );
}