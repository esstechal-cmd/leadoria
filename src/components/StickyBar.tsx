import { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-white text-center sm:text-left">
          <p className="font-body font-bold text-sm md:text-base">
            🔴 Comparez maintenant — Économisez jusqu'à 40%
          </p>
          <p className="font-body text-blue-200 text-xs">Devis gratuit · Sans engagement · 2 minutes</p>
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+33180200000"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-body font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">01 80 20 00 00</span>
          </a>
          <button
            onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-body font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-lg"
          >
            Devis Gratuit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
