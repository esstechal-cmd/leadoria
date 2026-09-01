import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">LeadFlow</span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase">Agency — Assurance & Devis</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Plateforme de mise en relation pour vos besoins en assurance.
              Comparez les solutions et demandez votre devis gratuitement.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Assurances</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/decennale" className="hover:text-gold transition-colors">Assurance Décennale</Link></li>
              <li><Link to="/auto" className="hover:text-gold transition-colors">Assurance Auto</Link></li>
              <li><Link to="/mutuelle" className="hover:text-gold transition-colors">Mutuelle Santé</Link></li>
              <li><Link to="/devis" className="hover:text-gold transition-colors">Demander un devis</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="hover:text-gold transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-gold transition-colors">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-gold transition-colors">Confidentialité</Link></li>
              <li><Link to="/politique-cookies" className="hover:text-gold transition-colors">Cookies</Link></li>
              <li><Link to="/conditions-generales" className="hover:text-gold transition-colors">Conditions générales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>12 Rue de la Paix<br />75002 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+33180000000" className="hover:text-gold transition-colors">01 80 00 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:contact@leadflow-agency.fr" className="hover:text-gold transition-colors">contact@leadflow-agency.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} LeadFlow Agency. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500 text-center md:text-right max-w-2xl">
            LeadFlow Agency est une plateforme de présentation de solutions d'assurance. Les informations fournies ne constituent pas une offre de contrat. Les garanties et tarifs sont soumis à l'acceptation de l'assureur.
          </p>
        </div>
      </div>
    </footer>
  );
}