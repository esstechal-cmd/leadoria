import { Target, Eye, HeartHandshake, ShieldCheck, Users, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <>
      <SEOHead
        title="À propos de LeadFlow Agency — Notre mission et nos valeurs"
        description="LeadFlow Agency est une plateforme dédiée à la mise en relation entre les particuliers et professionnels et des solutions d'assurance adaptées. Découvrez notre approche."
        canonical="https://leadflow-agency.fr/a-propos"
      />
      <PageHero
        title="À propos de LeadFlow Agency"
        subtitle="Une plateforme dédiée à l'accompagnement des particuliers et des professionnels dans leurs démarches d'assurance."
        breadcrumb="À propos"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-navy mb-4">Notre mission</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              LeadFlow Agency a pour mission de simplifier l'accès aux solutions d'assurance pour les particuliers et les professionnels. Nous savons que le monde de l'assurance peut paraître complexe, avec ses termes techniques, ses multiples formules et ses garanties parfois difficiles à comparer. Notre objectif est de rendre ce parcours plus clair, plus transparent et plus accessible.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Nous mettons à votre disposition une plateforme qui vous permet de découvrir les différentes solutions d'assurance disponibles, de comprendre leurs spécificités et de demander un devis gratuitement et sans engagement. Notre approche est centrée sur vos besoins réels, sans pression commerciale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Target, title: "Notre mission", desc: "Faciliter l\u2019accès à des solutions d\u2019assurance claires et adaptées à chaque profil." },
                { icon: Eye, title: "Notre vision", desc: "Devenir une référence de confiance dans l\u2019accompagnement des démarches d\u2019assurance." },
                { icon: HeartHandshake, title: "Nos valeurs", desc: "Transparence, écoute et accompagnement personnalisé au cœur de notre démarche." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Notre approche</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nous croyons qu'une bonne décision d'assurance commence par une bonne information. C'est pourquoi nous nous engageons à vous fournir un contenu clair, objectif et à jour sur les différentes solutions d'assurance disponibles. Nous ne faisons pas de promesses trompeuses : nous ne prétendons pas proposer « le meilleur prix » ou « l'assurance la moins chère », car nous savons que le choix d'une assurance dépend de critères propres à chaque situation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Notre rôle est de vous présenter les options disponibles, de vous aider à comprendre leurs différences et de vous mettre en relation avec un conseiller qui pourra vous proposer une solution adaptée à votre profil et à vos besoins spécifiques.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4">Nos engagements</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: ShieldCheck, title: 'Transparence totale', desc: 'Nous ne cachons aucune information. Les conditions et les limites de nos services sont clairement indiquées.' },
                { icon: Users, title: 'Accompagnement personnalisé', desc: 'Chaque demande est traitée individuellement, en tenant compte de votre situation et de vos besoins.' },
                { icon: Award, title: "Gratuité et sans engagement", desc: "La demande de devis est entièrement gratuite. Vous n\u2019avez aucune obligation de souscription." },
                { icon: HeartHandshake, title: 'Respect de vos données', desc: 'Vos informations personnelles sont traitées de façon confidentielle, conformément au RGPD.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border border-slate-100 rounded-lg p-5">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Une question sur nos services ?</h3>
              <p className="text-slate-300 mb-6">Notre équipe est à votre écoute pour vous renseigner et vous accompagner.</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}