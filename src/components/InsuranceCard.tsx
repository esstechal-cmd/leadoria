import { Link } from 'react-router-dom';
import { Building2, Car, HeartPulse, ArrowRight } from 'lucide-react';

interface InsuranceCardProps {
  type: 'decennale' | 'auto' | 'mutuelle';
}

const config = {
  decennale: {
    icon: Building2,
    title: 'Assurance Décennale',
    desc: 'Protégez votre activité avec une solution adaptée aux professionnels du bâtiment.',
    link: '/devis-decennale',
  },
  auto: {
    icon: Car,
    title: 'Assurance Auto',
    desc: 'Trouvez une solution adaptée à votre profil et à votre véhicule.',
    link: '/devis?type=auto',
  },
  mutuelle: {
    icon: HeartPulse,
    title: 'Mutuelle Santé',
    desc: 'Trouvez une complémentaire santé adaptée à vos besoins.',
    link: '/devis?type=mutuelle',
  },
};

export default function InsuranceCard({ type }: InsuranceCardProps) {
  const item = config[type];
  const Icon = item.icon;

  return (
    <div className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-blue transition-colors">
        <Icon className="w-7 h-7 text-gold" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
      <p className="text-slate-600 mb-6 flex-1 leading-relaxed">{item.desc}</p>
      <Link
        to={item.link}
        className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all"
      >
        Obtenir mon devis
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
