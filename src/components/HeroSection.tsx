import { useState, useEffect } from 'react';
import { CheckCircle, Star, Users, Clock, Phone, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [counter, setCounter] = useState(47382);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="hero-gradient min-h-screen relative overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Urgency bar */}
      <div className="relative z-10 bg-[#dc2626] text-white text-center py-2 px-4">
        <p className="font-body font-semibold text-sm md:text-base">
          ⚡ OFFRE LIMITÉE — Il reste{' '}
          <span className="font-bold bg-white text-[#dc2626] px-2 py-0.5 rounded mx-1 tick">
            {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </span>
          {' '}pour profiter des tarifs préférentiels 2025
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-body text-white text-sm font-semibold">4.8/5 · 2 847 avis vérifiés</span>
            </div>

            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Votre mutuelle senior vous coûte{' '}
              <span className="text-yellow-400">trop cher ?</span>{' '}
              Comparez et{' '}
              <span className="text-green-400">économisez immédiatement</span>
            </h1>

            <p className="font-body text-blue-100 text-lg md:text-xl mb-6 leading-relaxed">
              Plus de <strong className="text-white">{counter.toLocaleString('fr-FR')} seniors</strong> ont déjà comparé et économisé en moyenne{' '}
              <strong className="text-yellow-400">487€/an</strong> sur leur mutuelle santé.
            </p>

            {/* Bullet points */}
            <div className="space-y-3 mb-8">
              {[
                { text: 'Devis gratuit en 2 minutes', icon: Clock },
                { text: "Jusqu'à 40% d'économie garantie", icon: CheckCircle },
                { text: 'Sans engagement, 100% gratuit', icon: Shield },
                { text: 'Comparaison de +30 mutuelles', icon: Users },
              ].map(({ text, icon: Icon }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="font-body text-white font-semibold text-base md:text-lg">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-body font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-2xl shadow-red-900/40 btn-pulse"
              >
                🔴 JE COMPARE MAINTENANT
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+33180200000"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-body font-semibold text-base px-6 py-4 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                01 80 20 00 00
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1 text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Données sécurisées RGPD
              </span>
              <span className="flex items-center gap-1 text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Conseiller dédié
              </span>
              <span className="flex items-center gap-1 text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Réponse en 24h
              </span>
            </div>
          </motion.div>

          {/* Right: Image + floating elements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-seniors.jpg"
                alt="Couple de seniors heureux après avoir économisé sur leur mutuelle santé"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            {/* Floating badge 1 */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 float-anim">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-[#16a34a]">-40%</div>
                <div className="text-xs font-body text-[#64748b] font-semibold">d'économie</div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-heading font-bold text-[#0f172a] text-sm">{counter.toLocaleString('fr-FR')}</div>
                <div className="text-xs font-body text-[#64748b]">seniors comparés</div>
              </div>
            </div>

            {/* Live notification */}
            <LiveNotification />
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}

function LiveNotification() {
  const notifications = [
    { name: 'Marie D.', location: 'Lyon', saving: '423€', time: 'il y a 2 min' },
    { name: 'Jean-Pierre M.', location: 'Bordeaux', saving: '612€', time: 'il y a 5 min' },
    { name: 'Françoise L.', location: 'Marseille', saving: '389€', time: 'il y a 8 min' },
    { name: 'Robert B.', location: 'Toulouse', saving: '534€', time: 'il y a 11 min' },
    { name: 'Michèle P.', location: 'Nantes', saving: '478€', time: 'il y a 14 min' },
  ];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const notif = notifications[current];

  return (
    <div
      className={`absolute top-4 left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 max-w-xs transition-all duration-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-4 h-4 text-green-600" />
      </div>
      <div>
        <p className="font-body font-bold text-[#0f172a] text-xs">
          {notif.name} ({notif.location})
        </p>
        <p className="font-body text-green-600 text-xs font-semibold">
          a économisé <strong>{notif.saving}/an</strong>
        </p>
        <p className="font-body text-[#94a3b8] text-xs">{notif.time}</p>
      </div>
    </div>
  );
}
