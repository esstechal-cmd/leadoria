import { useState, useEffect } from 'react';
import { Phone, Shield } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className={`font-heading font-bold text-lg leading-tight ${
              scrolled ? 'text-[#1a56db]' : 'text-white'
            }`}>
              MutuelleSenior
            </div>
            <div className={`text-xs font-body ${
              scrolled ? 'text-[#64748b]' : 'text-blue-200'
            }`}>
              Comparatif
            </div>
          </div>
        </div>

        {/* Nav - desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {['Comparer', 'Garanties', 'Avis', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-body font-500 text-sm transition-colors hover:text-[#1a56db] ${
                scrolled ? 'text-[#475569]' : 'text-blue-100'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+33180200000"
            className={`hidden md:flex items-center gap-2 font-body font-semibold text-sm ${
              scrolled ? 'text-[#1a56db]' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            01 80 20 00 00
          </a>
          <button
            onClick={scrollToForm}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-body font-bold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-md btn-pulse"
          >
            Devis Gratuit
          </button>
        </div>
      </div>
    </header>
  );
}
