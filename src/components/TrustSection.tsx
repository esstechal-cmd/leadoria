import { Gift, Clock, Users, Lock } from 'lucide-react';

export default function TrustSection() {
  const items = [
    {
      icon: Gift,
      title: 'Demande gratuite',
      desc: 'Votre demande de devis est entièrement gratuite et sans engagement.',
    },
    {
      icon: Clock,
      title: 'Réponse rapide',
      desc: 'Un conseiller vous recontacte dans les meilleurs délais.',
    },
    {
      icon: Users,
      title: 'Accompagnement personnalisé',
      desc: 'Un suivi adapté à votre situation et à vos besoins spécifiques.',
    },
    {
      icon: Lock,
      title: 'Données protégées',
      desc: 'Vos informations sont traitées de façon confidentielle et sécurisée.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Pourquoi faire appel à nos services ?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nous vous accompagnons à chaque étape de votre démarche, en toute transparence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}