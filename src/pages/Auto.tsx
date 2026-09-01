import { Car, FileText, ShieldCheck, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

export default function Auto() {
  return (
    <>
      <SEOHead
        title="Assurance Auto — Devis gratuit et personnalisé | LeadFlow Agency"
        description="Trouvez une assurance auto adaptée à votre profil et à votre véhicule. Comparez les solutions et demandez votre devis gratuit en quelques minutes."
        canonical="https://leadflow-agency.fr/auto"
      />
      <PageHero
        title="Assurance Auto"
        subtitle="Une couverture adaptée à votre profil, votre véhicule et votre usage. Comparez les solutions disponibles et demandez votre devis gratuitement."
        breadcrumb="Assurance Auto"
        icon={<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center"><Car className="w-7 h-7 text-gold" /></div>}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-navy mb-4">L'assurance automobile en France</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              L'assurance auto est une obligation légale en France pour tout propriétaire d'un véhicule terrestre à moteur. Elle a pour but de protéger le conducteur, les passagers et les tiers en cas d'accident. Au-delà de l'obligation légale, une bonne assurance auto vous permet de rouler en toute sérénité et de faire face aux imprévus.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Le choix d'une assurance auto dépend de nombreux critères : votre profil de conducteur, votre véhicule, votre usage et votre historique. Il est essentiel de bien comprendre les différentes formules pour choisir celle qui correspond le mieux à vos besoins.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">Les différents niveaux de garantie</h2>
            <div className="space-y-4 mb-8">
              <div className="border border-slate-100 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-blue" />
                  <h3 className="font-bold text-navy">La garantie au tiers</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  C'est le niveau minimum obligatoire. Elle couvre les dommages causés aux tiers (personnes et véhicules) en cas d'accident responsable. Elle ne couvre pas les dommages subis par votre propre véhicule.
                </p>
              </div>
              <div className="border border-slate-100 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-blue" />
                  <h3 className="font-bold text-navy">La garantie intermédiaire (tiers étendu)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Elle inclut la garantie au tiers et ajoute des protections complémentaires comme le bris de glace, le vol, l'incendie ou les catastrophes naturelles. Un bon compromis pour de nombreux conducteurs.
                </p>
              </div>
              <div className="border border-slate-100 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-blue" />
                  <h3 className="font-bold text-navy">La garantie tous risques</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  C'est la formule la plus complète. Elle couvre tous les dommages, y compris ceux causés à votre propre véhicule, que vous soyez responsable ou non de l'accident. Idéale pour les véhicules récents ou de valeur.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Les critères qui influencent le tarif</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Car, title: 'Le véhicule', desc: 'Marque, modèle, puissance, ancienneté et valeur du véhicule.' },
                { icon: FileText, title: 'Le profil du conducteur', desc: 'Âge, ancienneté du permis, historique de conduite.' },
                { icon: TrendingUp, title: 'Le bonus-malus', desc: 'Votre coefficient de réduction-majoration influence directement le tarif.' },
                { icon: ShieldCheck, title: "L\u2019usage", desc: "Usage privé, professionnel, trajet travail ou commercial." },
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

            <h2 className="text-2xl font-bold text-navy mb-4">Le système de bonus-malus</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Le bonus-malus, ou coefficient de réduction-majoration, est un système qui récompense les bons conducteurs et pénalise ceux qui causent des accidents. Chaque année sans accident responsable fait baisser votre coefficient (bonus), tandis qu'un accident responsable l'augmente (malus).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue rounded-lg p-6 mb-8">
              <h3 className="font-bold text-navy mb-2">Bon à savoir</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Le coefficient maximum de bonus est de 0,50 (soit 50% de réduction sur la prime de référence). Il faut 13 ans de conduite sans accident responsable pour atteindre ce niveau. Le malus maximum est de 3,50 (soit une majoration de 250%).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Les garanties complémentaires utiles</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Au-delà des garanties de base, certaines options peuvent s'avérer très utiles selon votre situation :
            </p>
            <ul className="space-y-2 mb-8">
              {[
                'Assistance panne 0 km (dépannage même à domicile)',
                "Véhicule de prêt en cas d\u2019immobilisation",
                'Protection du conducteur (bodily injuries)',
                'Garantie des effets personnels',
                'Indemnisation valeur à neuf (pour les véhicules récents)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Trouvez l'assurance auto qui vous correspond"
        desc="Comparez les solutions et demandez votre devis gratuit. Un conseiller vous proposera une offre adaptée à votre profil."
        type="auto"
      />
    </>
  );
}