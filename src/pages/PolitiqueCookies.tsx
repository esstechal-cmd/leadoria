import SEOHead from '../components/SEOHead';

export default function PolitiqueCookies() {
  return (
    <>
      <SEOHead title="Politique de cookies — LeadFlow Agency" description="Informations sur l'utilisation des cookies sur le site LeadFlow Agency." canonical="https://leadflow-agency.fr/politique-cookies" />
      <div className="pt-28 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Politique de cookies</h1>
        </div>
      </div>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6 leading-relaxed">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de mémoriser certaines informations relatives à votre visite.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">1. Cookies utilisés</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Le site leadflow-agency.fr utilise les catégories de cookies suivantes :
          </p>

          <div className="mb-8 overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-4 py-3 border-b border-slate-200">Catégorie</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">Finalité</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">Durée</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">Consentement</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium">Cookies essentiels</td>
                  <td className="px-4 py-3">Fonctionnement du site, sécurité</td>
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Non requis</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium">Cookies de performance</td>
                  <td className="px-4 py-3">Analyse de fréquentation, performance</td>
                  <td className="px-4 py-3">13 mois max</td>
                  <td className="px-4 py-3">Requis</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-navy mb-3">2. Cookies essentiels</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Ces cookies sont strictement nécessaires au fonctionnement du site. Ils permettent de sécuriser la navigation et de mémoriser vos préférences de consentement. Ils ne nécessitent pas votre consentement.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">3. Cookies de performance et d'analyse</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Ces cookies permettent de comprendre comment les visiteurs interagissent avec le site (pages visitées, temps passé, etc.) afin d'en améliorer le fonctionnement et le contenu. Ils sont déposés uniquement avec votre consentement.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">4. Gestion des cookies</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Vous pouvez gérer vos préférences en matière de cookies de plusieurs façons :<br /><br />
            • Via les paramètres de votre navigateur, qui permettent de bloquer ou supprimer les cookies<br />
            • En utilisant la plateforme de gestion des cookies (si disponible)<br /><br />
            La désactivation de certains cookies peut affecter le fonctionnement du site.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">5. Droit d'opposition</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Conformément à l'article 82 de la loi Informatique et Libertés, vous pouvez vous opposer à l'utilisation de cookies non essentiels. Pour exercer ce droit, vous pouvez nous contacter à <strong>contact@leadflow-agency.fr</strong> ou configurer votre navigateur.
          </p>

          <p className="text-sm text-slate-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </section>
    </>
  );
}