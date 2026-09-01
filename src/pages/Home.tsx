import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, FileCheck, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import InsuranceCard from '../components/InsuranceCard';
import TrustSection from '../components/TrustSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <SEOHead
        title="LeadFlow Agency — Comparez et demandez votre devis d'assurance"
        description="LeadFlow Agency vous accompagne dans la recherche de votre assurance : décennale pour professionnels du BTP, assurance auto et mutuelle santé. Devis gratuit et sans engagement."
        canonical="https://leadflow-agency.fr/"
      />

      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-sm text-slate-200">Plateforme de courtage en assurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trouvez une assurance adaptée à vos besoins
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Comparez les solutions disponibles et demandez gratuitement votre devis en quelques minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/devis"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors text-lg"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg border border-white/20"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance cards */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsuranceCard type="decennale" />
            <InsuranceCard type="auto" />
            <InsuranceCard type="mutuelle" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Comment ça marche ?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Un parcours simple et transparent en trois étapes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: '1. Choisissez votre assurance', desc: 'Sélectionnez le produit qui correspond à votre besoin : décennale, auto ou mutuelle santé.' },
              { icon: FileCheck, title: '2. Remplissez le formulaire', desc: 'Renseignez vos informations en quelques minutes. Le formulaire est adapté à votre situation.' },
              { icon: ShieldCheck, title: '3. Recevez votre devis', desc: 'Un conseiller analyse votre demande et vous recontacte avec une proposition adaptée.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <CTASection />
    </>
  );
}