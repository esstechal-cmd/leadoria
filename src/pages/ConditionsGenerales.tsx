import SEOHead from '../components/SEOHead';

export default function ConditionsGenerales() {
  return (
    <>
      <SEOHead title="Conditions générales — LeadFlow Agency" description="Conditions générales d'utilisation du site LeadFlow Agency." canonical="https://leadflow-agency.fr/conditions-generales" />
      <div className="pt-28 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Conditions générales d'utilisation</h1>
        </div>
      </div>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6 leading-relaxed">
            Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site leadflow-agency.fr. En accédant au site, vous acceptez sans réserve les présentes CGU.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">1. Objet</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Le site leadflow-agency.fr a pour objet la présentation de solutions d'assurance et la mise en relation entre les personnes recherchant une assurance et des professionnels de l'assurance. Le site permet de demander des devis de manière gratuite et sans engagement.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">2. Nature du service</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            LeadFlow Agency est une plateforme de présentation et de mise en relation. LeadFlow Agency n'est pas un assureur et ne souscrit pas de contrat d'assurance. Les devis obtenus via la plateforme sont établis par des professionnels de l'assurance partenaires et n'engagent pas LeadFlow Agency. La souscription d'un contrat d'assurance se fait directement entre l'utilisateur et l'assureur retenu.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">3. Demande de devis</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            La demande de devis via le site est gratuite et sans engagement. Le fait de demander un devis ne crée aucune obligation de souscription. Les informations fournies doivent être exactes et sincères. Toute fausse déclaration peut entraîner l'annulation du devis ou, le cas échéant, du contrat d'assurance.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">4. Utilisation des données</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Les données personnelles collectées dans le cadre des demandes de devis sont traitées conformément à notre <a href="/politique-confidentialite" className="text-blue underline">politique de confidentialité</a>. Elles sont utilisées pour traiter votre demande et vous mettre en relation avec un conseiller. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">5. Responsabilité</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            LeadFlow Agency ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder. LeadFlow Agency ne garantit pas que les informations fournies sur le site sont exemptes d'erreurs. Les tarifs, garanties et conditions des devis sont sous la responsabilité exclusive des assureurs partenaires.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">6. Liens hypertextes</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Le site peut contenir des liens vers des sites externes. LeadFlow Agency ne saurait être tenu responsable du contenu de ces sites. La création de liens vers le site leadflow-agency.fr est soumise à l'accord préalable d'LeadFlow Agency.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">7. Modification des CGU</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            LeadFlow Agency se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site. Il est recommandé de consulter régulièrement cette page.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">8. Droit applicable et juridiction</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
          </p>

          <p className="text-sm text-slate-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </section>
    </>
  );
}