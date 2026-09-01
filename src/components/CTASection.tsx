import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  desc?: string;
  type?: string;
  href?: string;
}

export default function CTASection({
  title = 'Prêt à obtenir votre devis ?',
  desc = 'La demande est gratuite et sans engagement. Recevez une proposition adaptée à votre profil.',
  type,
  href,
}: CTASectionProps) {
  // If a direct href is provided, use it; otherwise build from type
  const link = href || (type ? `/devis?type=${type}` : '/devis');

  // For décennale, always route to the dedicated external form page
  const finalLink = type === 'decennale' ? '/devis-decennale' : link;

  return (
    <section className="py-16 bg-gradient-to-r from-navy to-navy-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">{desc}</p>
        <Link
          to={finalLink}
          className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors text-lg"
        >
          Demander mon devis gratuit
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
