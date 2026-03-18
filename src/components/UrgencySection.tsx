import { useState, useEffect } from 'react';
import { Clock, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UrgencySection() {
  const [spotsLeft, setSpotsLeft] = useState(7);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => Math.max(3, prev - 1));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-12 bg-[#7f1d1d]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-400" />
            <span className="font-body font-bold text-yellow-400 text-lg uppercase tracking-wide">
              Offre à durée limitée
            </span>
            <AlertCircle className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
            Les tarifs préférentiels 2026 expirent dans :
          </h2>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-3 md:gap-6 mb-8">
            {[
              { value: pad(timeLeft.hours), label: 'Heures' },
              { value: pad(timeLeft.minutes), label: 'Minutes' },
              { value: pad(timeLeft.seconds), label: 'Secondes' },
            ].map(({ value, label }, i) => (
              <div key={i} className="text-center">
                <div className="bg-white text-[#7f1d1d] font-heading font-bold text-3xl md:text-5xl w-16 md:w-24 h-16 md:h-24 rounded-xl flex items-center justify-center shadow-lg tick">
                  {value}
                </div>
                <div className="font-body text-red-200 text-xs mt-2 font-semibold">{label}</div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            <div className="flex items-center gap-3 text-white">
              <Users className="w-5 h-5 text-yellow-400" />
              <span className="font-body">
                <strong className="text-yellow-400">{spotsLeft} places</strong> restantes aujourd'hui
              </span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="font-body">
                <strong className="text-yellow-400">+127 personnes</strong> consultent en ce moment
              </span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="font-body">
                Réponse en <strong className="text-yellow-400">moins de 24h</strong>
              </span>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-300 text-[#7f1d1d] font-body font-bold text-xl px-10 py-5 rounded-xl transition-all shadow-2xl btn-pulse"
          >
            ⚡ Je profite des tarifs 2026 maintenant
          </button>
          <p className="font-body text-red-300 text-sm mt-3">
            Offre valable uniquement pour les nouvelles demandes. Sans engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
