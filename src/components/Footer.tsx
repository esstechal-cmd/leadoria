import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-white">MutuelleSenior</div>
                <div className="text-xs text-blue-300">Comparatif</div>
              </div>
            </div>
            <p className="font-body text-[#94a3b8] text-sm leading-relaxed mb-4">
              Le comparateur de référence pour la mutuelle santé senior en France.
              Gratuit, indépendant, sans engagement.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+33180200000" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm font-body">
                <Phone className="w-4 h-4" />
                01 80 20 00 00
              </a>
              <a href="mailto:contact@mutuelleseniorcomparatif.fr" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm font-body">
                <Mail className="w-4 h-4" />
                contact@mutuelleseniorcomparatif.fr
              </a>
              <div className="flex items-center gap-2 text-blue-300 text-sm font-body">
                <MapPin className="w-4 h-4" />
                Paris, France
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Nos services</h4>
            <ul className="space-y-2">
              {[
                'Comparateur mutuelle senior',
                'Devis mutuelle santé',
                'Comparatif garanties',
                'Conseil personnalisé',
                'Aide à la souscription',
                'Résiliation mutuelle',
              ].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-[#94a3b8] hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mutuelles */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Mutuelles comparées</h4>
            <ul className="space-y-2">
              {[
                'Harmonie Mutuelle',
                'MGEN',
                'Malakoff Humanis',
                'AG2R La Mondiale',
                'Swiss Life',
                'Allianz Santé',
                'Groupama',
                'Matmut',
              ].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-[#94a3b8] hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Informations</h4>
            <ul className="space-y-2">
              {[
                'Mentions légales',
                'Politique de confidentialité',
                'Gestion des cookies',
                'Conditions générales',
                'Nous contacter',
                'Qui sommes-nous ?',
              ].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-[#94a3b8] hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* ORIAS */}
            <div className="mt-6 bg-white/10 rounded-xl p-4">
              <p className="font-body text-[#94a3b8] text-xs">
                Immatriculé à l'ORIAS sous le n°
                <strong className="text-white"> 25 000 000</strong>
              </p>
              <p className="font-body text-[#94a3b8] text-xs mt-1">
                Courtier en assurances – Autorité de contrôle :
                <strong className="text-white"> ACPR</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RGPD / Legal bar */}
      <div className="border-t border-white/10 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[#64748b] text-xs text-center md:text-left">
              © 2025 mutuelleseniorcomparatif.fr – Tous droits réservés.
              Service de comparaison gratuit. Résultats à titre indicatif. Tarifs susceptibles de varier.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-body text-[#64748b] text-xs">🔒 Site sécurisé SSL</span>
              <span className="font-body text-[#64748b] text-xs">🇫🇷 Service 100% français</span>
              <span className="font-body text-[#64748b] text-xs">✅ Conforme RGPD</span>
            </div>
          </div>
          <p className="font-body text-[#475569] text-xs mt-3 leading-relaxed">
            <strong>Avertissement :</strong> Les économies présentées sont basées sur des exemples réels mais varient selon le profil de chaque assuré.
            Les informations fournies sur ce site sont à titre informatif et ne constituent pas un conseil en assurance personnalisé.
            Avant toute souscription, nous vous recommandons de lire attentivement les conditions générales du contrat.
            Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
            de vos données personnelles en nous contactant à : dpo@mutuelleseniorcomparatif.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
