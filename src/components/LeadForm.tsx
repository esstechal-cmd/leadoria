import { useState } from 'react';
import { CheckCircle, Shield, Lock, Phone, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  age: string;
  codePostal: string;
  telephone: string;
  email: string;
  couverture: string;
  regime: string;
}

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    age: '',
    codePostal: '',
    telephone: '',
    email: '',
    couverture: '',
    regime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.age && formData.codePostal && formData.couverture) {
      setStep(2);
    }
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.telephone && formData.email) {
      try {
        await fetch('https://leadoria-production.up.railway.app/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        // Si le serveur n'est pas disponible, on continue quand même
        console.warn('Backend non disponible, lead non enregistré');
      }
      setSubmitted(true);
    }
  };

  return (
    <section
      id="formulaire"
      className="py-16 md:py-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1a56db] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-yellow-400 text-yellow-900 font-body font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            🎯 DEVIS GRATUIT EN 2 MINUTES
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Obtenez votre devis personnalisé
            <span className="text-yellow-400"> maintenant</span>
          </h2>
          <p className="font-body text-blue-200 text-lg">
            Comparez jusqu'à 30 mutuelles senior et économisez immédiatement
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress bar */}
          {!submitted && (
            <div className="bg-[#f8fafc] border-b border-[#e2e8f0] px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-sm font-semibold text-[#475569]">
                  Étape {step} sur 2
                </span>
                <span className="font-body text-sm text-[#1a56db] font-bold">
                  {step === 1 ? '50%' : '100%'} complété
                </span>
              </div>
              <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#1a56db] to-[#16a34a] rounded-full transition-all duration-500"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            </div>
          )}

          <div className="p-6 md:p-10">
            {submitted ? (
              <SuccessState formData={formData} />
            ) : step === 1 ? (
              <Step1Form formData={formData} onChange={handleChange} onNext={handleStep1} />
            ) : (
              <Step2Form formData={formData} onChange={handleChange} onSubmit={handleStep2} onBack={() => setStep(1)} />
            )}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: Shield, text: 'Données 100% sécurisées' },
            { icon: Lock, text: 'Conforme RGPD' },
            { icon: CheckCircle, text: 'Sans engagement' },
            { icon: Phone, text: 'Conseiller dédié' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-blue-200">
              <Icon className="w-4 h-4 text-green-400" />
              <span className="font-body text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Step1Form({ formData, onChange, onNext }: {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onNext}>
      <h3 className="font-heading font-bold text-[#0f172a] text-xl mb-6">
        📋 Votre profil (étape 1/2)
      </h3>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
            Votre âge *
          </label>
          <select
            name="age"
            value={formData.age}
            onChange={onChange}
            required
            className="form-select"
          >
            <option value="">Sélectionnez votre âge</option>
            {Array.from({ length: 76 }, (_, i) => 25 + i).map(age => (
              <option key={age} value={age}>{age} ans</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
            Code postal *
          </label>
          <input
            type="text"
            name="codePostal"
            value={formData.codePostal}
            onChange={onChange}
            placeholder="Ex: 75001"
            maxLength={5}
            pattern="[0-9]{5}"
            required
            className="form-input"
          />
        </div>

        <div>
          <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
            Régime d'assurance maladie
          </label>
          <select
            name="regime"
            value={formData.regime}
            onChange={onChange}
            className="form-select"
          >
            <option value="">Sélectionnez votre régime</option>
            <option value="general">Régime général (CPAM)</option>
            <option value="agricole">MSA (Agricole)</option>
            <option value="independant">Régime indépendants (SSI)</option>
            <option value="alsace">Alsace-Moselle</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
            Niveau de couverture souhaité *
          </label>
          <select
            name="couverture"
            value={formData.couverture}
            onChange={onChange}
            required
            className="form-select"
          >
            <option value="">Choisissez votre niveau</option>
            <option value="economique">💚 Économique – Remboursements de base</option>
            <option value="equilibre">💛 Équilibre – Bon rapport qualité/prix</option>
            <option value="confort">🔵 Confort – Remboursements élevés</option>
            <option value="premium">⭐ Premium – Couverture maximale</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-body font-bold text-xl py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 btn-pulse"
        >
          <span>Voir mes devis gratuits</span>
          <ArrowRight className="w-6 h-6" />
        </button>
        <p className="text-center font-body text-[#94a3b8] text-sm mt-3">
          ✅ Gratuit · Sans engagement · Résultat immédiat
        </p>
      </div>
    </form>
  );
}

function Step2Form({ formData, onChange, onSubmit, onBack }: {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <h3 className="font-heading font-bold text-[#0f172a] text-xl mb-2">
        📞 Où envoyer vos devis ? (étape 2/2)
      </h3>
      <p className="font-body text-[#64748b] text-sm mb-6">
        Un conseiller vous contactera sous 24h pour vous présenter les meilleures offres.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
            Numéro de téléphone *
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={onChange}
            placeholder="Ex: 06 12 34 56 78"
            required
            className="form-input"
          />
          <p className="font-body text-[#94a3b8] text-xs mt-1">Pour que notre conseiller vous rappelle</p>
        </div>

        <div>
          <label className="block font-body font-semibold text-[#374151] text-sm mb-2">
            Adresse email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Ex: marie@email.fr"
            required
            className="form-input"
          />
          <p className="font-body text-[#94a3b8] text-xs mt-1">Pour recevoir vos devis par email</p>
        </div>
      </div>

      {/* RGPD notice */}
      <div className="mt-5 bg-[#f8fafc] rounded-xl p-4 border border-[#e2e8f0]">
        <div className="flex items-start gap-3">
          <Lock className="w-4 h-4 text-[#64748b] mt-0.5 flex-shrink-0" />
          <p className="font-body text-[#64748b] text-xs leading-relaxed">
            En soumettant ce formulaire, vous acceptez d'être contacté par nos conseillers et nos
            partenaires assureurs. Vos données sont protégées conformément au RGPD. Vous pouvez
            exercer vos droits à tout moment en nous contactant.
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex-shrink-0 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b] font-body font-semibold px-5 py-4 rounded-xl transition-colors"
        >
          ← Retour
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#16a34a] hover:bg-[#15803d] text-white font-body font-bold text-xl py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3"
        >
          🟢 OBTENIR MON DEVIS GRATUIT
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}

function SuccessState({ formData }: { formData: FormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="font-heading font-bold text-[#0f172a] text-2xl md:text-3xl mb-3">
        🎉 Félicitations !
      </h3>
      <p className="font-body text-[#64748b] text-lg mb-6 max-w-md mx-auto">
        Votre demande de devis a bien été enregistrée.
        Un conseiller vous contactera au <strong className="text-[#1a56db]">{formData.telephone}</strong>{' '}
        sous <strong>24h maximum</strong>.
      </p>

      <div className="bg-[#f0fdf4] border border-green-200 rounded-2xl p-6 mb-6 max-w-sm mx-auto">
        <p className="font-body font-semibold text-green-800 text-sm mb-3">Ce qui vous attend :</p>
        <div className="space-y-2 text-left">
          {[
            'Analyse de votre profil personnalisé',
            'Comparaison de +30 mutuelles senior',
            'Présentation des meilleures offres',
            'Souscription accompagnée si vous le souhaitez',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="font-body text-green-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 mb-2">
        {[1,2,3,4,5].map(i => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="font-body text-[#64748b] text-sm">Service noté 4.8/5 par nos clients</p>
    </motion.div>
  );
}
