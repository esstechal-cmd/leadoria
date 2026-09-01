import SEOHead from '../components/SEOHead';
import MultiStepForm from '../components/MultiStepForm';

export default function Devis() {
  return (
    <>
      <SEOHead
        title="Demande de devis gratuit — LeadFlow Agency"
        description="Demandez gratuitement votre devis d'assurance : décennale, auto ou mutuelle santé. Formulaire simple et rapide, sans engagement."
        canonical="https://leadflow-agency.fr/devis"
      />
      <div className="pt-16">
        <MultiStepForm />
      </div>
    </>
  );
}