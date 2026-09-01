import SEOHead from '../components/SEOHead';

export default function MentionsLegales() {
  return (
    <>
      <SEOHead title="Mentions légales — LeadFlow Agency" description="Mentions légales du site LeadFlow Agency. Informations sur l'éditeur, l'hébergement et les conditions d'utilisation." canonical="https://leadflow-agency.fr/mentions-legales" />
      <div className="pt-28 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Mentions légales</h1>
        </div>
      </div>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2 className="text-xl font-bold text-navy mb-3">Éditeur du site</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Le site leadflow-agency.fr est édité par LeadFlow Agency, société à responsabilité limitée (SARL) au capital de 10 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro XXX XXX XXX, dont le siège social est situé au 12 Rue de la Paix, 75002 Paris.<br />
            Directeur de la publication : [Nom du directeur]<br />
            Email : contact@leadflow-agency.fr | Téléphone : 01 80 00 00 00
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">Hébergement</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">Activité de courtage</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            LeadFlow Agency exerce une activité de présentation de services d'assurance. LeadFlow Agency n'est pas un assureur et ne souscrit pas de contrat d'assurance en son nom propre. LeadFlow Agency met en relation les personnes souhaitant obtenir un devis avec des professionnels de l'assurance habilités à proposer des solutions adaptées.<br /><br />
            Conformément à la réglementation française, LeadFlow Agency peut être enregistré en tant que courtier d'assurance ou agent général d'assurance auprès de l'ORIAS (Organisme pour le Registre des Intermédiaires en Assurance) sous le numéro [numéro ORIAS].
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">Propriété intellectuelle</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive d'LeadFlow Agency ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable d'LeadFlow Agency.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">Limitation de responsabilité</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Les informations contenues sur ce site sont fournies à titre indicatif et informatif. LeadFlow Agency s'efforce de fournir des informations exactes et à jour, mais ne saurait être tenu responsable des erreurs, omissions ou résultats qui seraient obtenus par l'usage de ces informations. Les devis obtenus via le site n'engagent pas LeadFlow Agency et sont soumis à l'acceptation de l'assureur concerné.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">Liens hypertextes</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Le site peut contenir des liens vers d'autres sites. LeadFlow Agency n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu ou aux dommages éventuels résultant de leur consultation.
          </p>

          <h2 className="text-xl font-bold text-navy mb-3">Droit applicable</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
          </p>
        </div>
      </section>
    </>
  );
}