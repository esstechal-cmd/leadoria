import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  icon?: React.ReactNode;
}

export default function PageHero({ title, subtitle, breadcrumb, icon }: PageHeroProps) {
  return (
    <section className="bg-navy pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">{breadcrumb}</span>
        </nav>
        <div className="flex items-start gap-4">
          {icon && <div className="hidden sm:block mt-1">{icon}</div>}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}