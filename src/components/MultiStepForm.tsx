import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Car, HeartPulse, Check, ChevronLeft, ChevronRight,
  ShieldCheck, Loader2, AlertCircle,
} from 'lucide-react';

type InsuranceType = 'decennale' | 'auto' | 'mutuelle';

interface FormData {
  [key: string]: string;
}

const typeConfig = {
  decennale: { icon: Building2, label: 'Décennale', title: 'Assurance Décennale' },
  auto: { icon: Car, label: 'Auto', title: 'Assurance Auto' },
  mutuelle: { icon: HeartPulse, label: 'Mutuelle Santé', title: 'Mutuelle Santé' },
};

const fieldConfig: Record<InsuranceType, { step: number; fields: any[] }[]> = {
  decennale: [
    {
      step: 2,
      fields: [
        { name: 'activite', label: 'Quelle est votre activité ?', type: 'select', required: true,
          options: ['Maçonnerie', 'Charpente / Couverture', 'Plomberie / Chauffage', 'Électricité', 'Peinture / Plâtrerie', 'Carrelage / Revêtement', 'Menuiserie', 'Terrassement / Gros œuvre', 'Autre'] },
        { name: 'code_postal', label: 'Code postal', type: 'text', required: true, placeholder: '75001', maxLength: 5 },
        { name: 'date_debut_activite', label: 'Date de début d\'activité', type: 'date', required: true },
        { name: 'chiffre_affaires', label: 'Chiffre d\'affaires annuel', type: 'select', required: true,
          options: ['Moins de 100 000 €', '100 000 € - 300 000 €', '300 000 € - 500 000 €', '500 000 € - 1 000 000 €', 'Plus de 1 000 000 €'] },
        { name: 'nombre_salaries', label: 'Nombre de salariés', type: 'select', required: true,
          options: ['Aucun (artisan seul)', '1 à 5', '6 à 10', '11 à 20', 'Plus de 20'] },
      ],
    },
  ],
  auto: [
    {
      step: 2,
      fields: [
        { name: 'marque_modele', label: 'Marque et modèle du véhicule', type: 'text', required: true, placeholder: 'Ex : Renault Clio V' },
        { name: 'annee_vehicule', label: 'Année du véhicule', type: 'select', required: true,
          options: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016 ou antérieur'] },
        { name: 'usage', label: 'Usage du véhicule', type: 'select', required: true,
          options: ['Usage privé', 'Usage privé et trajet travail', 'Usage professionnel', 'Usage commercial'] },
        { name: 'date_permis', label: 'Date d\'obtention du permis', type: 'date', required: true },
        { name: 'bonus_malus', label: 'Votre bonus / malus actuel', type: 'select', required: true,
          options: ['Bonus 50% (maximum)', 'Bonus entre 40% et 49%', 'Bonus entre 20% et 39%', 'Bonus entre 0% et 19%', 'Ni bonus ni malus (0%)', 'Malus (supérieur à 100%)'] },
        { name: 'assurance_actuelle', label: 'Êtes-vous actuellement assuré ?', type: 'select', required: true,
          options: ['Oui, chez un autre assureur', 'Oui, pour la première fois', 'Non, pas actuellement assuré'] },
        { name: 'code_postal', label: 'Code postal', type: 'text', required: true, placeholder: '75001', maxLength: 5 },
      ],
    },
  ],
  mutuelle: [
    {
      step: 2,
      fields: [
        { name: 'nombre_personnes', label: 'Nombre de personnes à couvrir', type: 'select', required: true,
          options: ['1 personne (seul)', '2 personnes (couple)', '3 personnes', '4 personnes ou plus'] },
        { name: 'situation_familiale', label: 'Situation familiale', type: 'select', required: true,
          options: ['Célibataire', 'En couple', 'Marié(e)', 'Pacsé(e)', 'Divorcé(e)', 'Veuf/Veuve'] },
        { name: 'age', label: 'Âge de l\'assuré principal', type: 'select', required: true,
          options: ['Moins de 30 ans', '30 - 39 ans', '40 - 49 ans', '50 - 59 ans', '60 ans et plus'] },
        { name: 'niveau_couverture', label: 'Niveau de couverture souhaité', type: 'select', required: true,
          options: ['Économique (essentiel)', 'Confort (équilibré)', 'Premium (haut de gamme)', 'Je ne sais pas encore'] },
        { name: 'besoins_principaux', label: 'Besoins principaux', type: 'multiselect', required: true,
          options: ['Soins courants (dentiste, médecin)', 'Optique', 'Dentaire', 'Hospitalisation', 'Médecines douces', 'Audition', 'Maternité'] },
        { name: 'code_postal', label: 'Code postal', type: 'text', required: true, placeholder: '75001', maxLength: 5 },
      ],
    },
  ],
};

const contactFields = [
  { name: 'nom', label: 'Nom', type: 'text', required: true, placeholder: 'Dupont' },
  { name: 'prenom', label: 'Prénom', type: 'text', required: true, placeholder: 'Jean' },
  { name: 'telephone', label: 'Téléphone', type: 'tel', required: true, placeholder: '06 12 34 56 78' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'jean.dupont@email.fr' },
];

export default function MultiStepForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialType = searchParams.get('type') as InsuranceType | null;

  const [step, setStep] = useState(1);
  const [insuranceType, setInsuranceType] = useState<InsuranceType | null>(
    initialType && ['decennale', 'auto', 'mutuelle'].includes(initialType) ? initialType : null
  );
  const [formData, setFormData] = useState<FormData>({});
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [multiSelect, setMultiSelect] = useState<string[]>([]);

  useEffect(() => {
    if (insuranceType) setStep(2);
  }, [insuranceType]);

  const totalSteps = 4;

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleMultiSelect = (value: string) => {
    setMultiSelect(prev => {
      const next = prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value];
      handleChange('besoins_principaux', next.join(', '));
      return next;
    });
  };

  const validateStep = (): boolean => {
    setError('');
    if (step === 1 && !insuranceType) {
      setError('Veuillez sélectionner un type d\'assurance.');
      return false;
    }
    if (step === 2 && insuranceType) {
      const fields = fieldConfig[insuranceType][0].fields;
      for (const field of fields) {
        if (field.required && !formData[field.name]) {
          setError(`Veuillez renseigner : ${field.label}`);
          return false;
        }
      }
    }
    if (step === 3) {
      for (const field of contactFields) {
        if (field.required && !formData[field.name]) {
          setError(`Veuillez renseigner : ${field.label}`);
          return false;
        }
      }
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError('Veuillez saisir une adresse email valide.');
        return false;
      }
      if (formData.telephone && formData.telephone.replace(/\s/g, '').length < 10) {
        setError('Veuillez saisir un numéro de téléphone valide.');
        return false;
      }
      if (formData.code_postal && formData.code_postal.length !== 5) {
        setError('Le code postal doit comporter 5 chiffres.');
        return false;
      }
    }
    if (step === 4 && !consent) {
      setError('Vous devez accepter les conditions pour envoyer votre demande.');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setError('');
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: insuranceType,
          form_data: formData,
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
        }),
      });
      if (!res.ok) throw new Error('Erreur lors de l\'envoi de la demande');
      setSuccess(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: any) => {
    const value = formData[field.name] || '';

    if (field.type === 'select') {
      return (
        <div key={field.name} className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <select
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all bg-white text-slate-900"
          >
            <option value="">Sélectionnez...</option>
            {field.options.map((opt: string) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      );
    }

    if (field.type === 'multiselect') {
      return (
        <div key={field.name} className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {field.options.map((opt: string) => (
              <label
                key={opt}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                  multiSelect.includes(opt)
                    ? 'border-blue bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={multiSelect.includes(opt)}
                  onChange={() => toggleMultiSelect(opt)}
                  className="w-4 h-4 accent-blue"
                />
                <span className="text-sm text-slate-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div key={field.name} className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={field.type}
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all text-slate-900"
        />
      </div>
    );
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-slate-100"
        >
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Votre demande a été enregistrée
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Merci pour votre confiance. Nous avons bien reçu votre demande de devis pour une{' '}
            <strong className="text-navy">{insuranceType && typeConfig[insuranceType].title}</strong>.
            Un conseiller vous recontactera dans les meilleurs délais pour vous proposer une solution adaptée.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-slate-600">
              <strong className="text-navy">Prochaine étape :</strong> Un conseiller analysera votre demande et vous contactera par téléphone ou par email. Pensez à vérifier votre boîte mail (y compris les courriers indésirables).
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  const progress = (step / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Progress bar */}
        <div className="bg-navy px-6 py-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-bold text-lg">Demande de devis</h2>
            <span className="text-slate-300 text-sm">Étape {step} / {totalSteps}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-gold h-2 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Type selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-navy mb-2">Quel type d'assurance recherchez-vous ?</h3>
                <p className="text-slate-600 mb-6 text-sm">Sélectionnez la solution qui correspond à votre besoin.</p>
                <div className="space-y-3">
                  {(Object.keys(typeConfig) as InsuranceType[]).map((type) => {
                    const cfg = typeConfig[type];
                    const Icon = cfg.icon;
                    return (
                      <button
                        key={type}
                        onClick={() => {
                          setInsuranceType(type);
                          setStep(2);
                        }}
                        className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                          insuranceType === type
                            ? 'border-blue bg-blue-50'
                            : 'border-slate-200 hover:border-blue/50 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          insuranceType === type ? 'bg-navy' : 'bg-slate-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${insuranceType === type ? 'text-gold' : 'text-slate-500'}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-navy">{cfg.title}</p>
                          <p className="text-sm text-slate-500">{cfg.label}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Product-specific fields */}
            {step === 2 && insuranceType && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-navy mb-2">
                  {typeConfig[insuranceType].title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm">Renseignez les informations relatives à votre demande.</p>
                {fieldConfig[insuranceType][0].fields.map(renderField)}
              </motion.div>
            )}

            {/* Step 3: Contact info */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-navy mb-2">Vos coordonnées</h3>
                <p className="text-slate-600 mb-6 text-sm">Nous avons besoin de vos informations pour vous recontacter.</p>
                {contactFields.map(renderField)}
              </motion.div>
            )}

            {/* Step 4: Consent & submit */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-navy mb-2">Vérification et consentement</h3>
                <p className="text-slate-600 mb-6 text-sm">Vérifiez vos informations avant l'envoi.</p>

                <div className="bg-slate-50 rounded-xl p-5 mb-6">
                  <h4 className="font-semibold text-navy mb-3 text-sm">Récapitulatif de votre demande</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Type d'assurance</span>
                      <span className="font-medium text-navy text-right">{insuranceType && typeConfig[insuranceType].title}</span>
                    </div>
                    {Object.entries(formData).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-4">
                        <span className="text-slate-500 capitalize">{key.replace(/_/g, ' ')}</span>
                        <span className="font-medium text-navy text-right truncate max-w-[60%]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-5 h-5 mt-0.5 accent-blue flex-shrink-0"
                  />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    J'accepte que mes données personnelles soient traitées dans le cadre de ma demande de devis. Je comprends que mes informations seront transmises à un conseiller qui me recontactera. Je dispose d'un droit d'accès, de rectification et de suppression de mes données, conformément au RGPD. Pour plus d'informations, consultez notre{' '}
                    <a href="/politique-confidentialite" className="text-blue underline hover:text-navy">politique de confidentialité</a>.
                  </span>
                </label>

                <div className="flex items-start gap-3 text-sm text-slate-500 bg-blue-50 rounded-lg p-4">
                  <ShieldCheck className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                  <p>Vos données sont traitées de façon confidentielle et sécurisée. La demande de devis est gratuite et sans engagement.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div className="mt-4 flex items-start gap-2 text-sm text-red-600 bg-red-50 rounded-lg p-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            {step > 1 ? (
              <button
                onClick={prevStep}
                disabled={loading}
                className="inline-flex items-center gap-1 px-5 py-3 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour
              </button>
            ) : <div />}

            {step < totalSteps ? (
              <button
                onClick={nextStep}
                className="inline-flex items-center gap-1 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
              >
                Continuer
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Envoyer ma demande
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
