import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/decennale', label: 'Décennale' },
    { to: '/auto', label: 'Auto' },
    { to: '/mutuelle', label: 'Mutuelle Santé' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center group-hover:bg-navy-light transition-colors">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-navy leading-none">LeadFlow</span>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase">Agency — Assurance & Devis</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-navy bg-blue-50'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/devis"
              className="ml-2 px-5 py-2.5 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
            >
              Demander un devis
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4 pb-2 flex flex-col gap-1 border-t border-slate-100 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-navy bg-blue-50'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/devis"
              className="mt-2 px-5 py-3 rounded-lg bg-navy text-white text-sm font-semibold text-center hover:bg-navy-light transition-colors"
            >
              Demander un devis
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}