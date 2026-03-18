import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Marie-Claude D.',
    age: 67,
    location: 'Lyon (69)',
    saving: '423€/an',
    rating: 5,
    text: "J'étais sceptique au début, mais en 3 minutes j'ai reçu 4 devis bien moins chers que ma mutuelle actuelle. J'ai économisé 423€ sur l'année, c'est incroyable ! Le conseiller m'a très bien expliqué les différences.",
    image: '/images/testimonial-1.jpg',
    date: 'Janvier 2025',
  },
  {
    name: 'Jean-Pierre M.',
    age: 72,
    location: 'Bordeaux (33)',
    saving: '612€/an',
    rating: 5,
    text: "Après 15 ans avec la même mutuelle, j'avais peur de changer. Grâce à ce comparateur, j'ai trouvé une mutuelle avec de meilleures garanties dentaires ET moins chère. 612€ d'économie par an, c'est ma pension de janvier !",
    image: '/images/testimonial-2.jpg',
    date: 'Décembre 2024',
  },
  {
    name: 'Françoise & René L.',
    age: 69,
    location: 'Nantes (44)',
    saving: '890€/an',
    rating: 5,
    text: "On a comparé pour nous deux en même temps. Le service est vraiment adapté aux seniors, simple et clair. On a économisé presque 900€ à deux, on s'en serait voulu de ne pas avoir essayé plus tôt !",
    image: '/images/testimonial-3.jpg',
    date: 'Novembre 2024',
  },
];

const stats = [
  { value: '47 382', label: 'Devis réalisés en 2024', icon: '📋' },
  { value: '4.8/5', label: 'Note moyenne clients', icon: '⭐' },
  { value: '487€', label: 'Économie moyenne/an', icon: '💰' },
  { value: '98%', label: 'Clients satisfaits', icon: '✅' },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white" id="avis">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-yellow-100 text-yellow-700 font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            ⭐ Avis vérifiés
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0f172a] mb-4">
            Ce que disent nos
            <span className="text-[#1a56db]"> 47 000+ seniors</span>
          </h2>
          <p className="font-body text-[#64748b] text-lg max-w-2xl mx-auto">
            Des témoignages réels de seniors qui ont comparé et économisé grâce à notre service.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#f8fafc] rounded-2xl p-5 text-center border border-[#e2e8f0]"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-heading font-bold text-2xl text-[#1a56db]">{s.value}</div>
              <div className="font-body text-[#64748b] text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Saving badge */}
              <div className="inline-block bg-green-100 text-green-700 font-body font-bold text-sm px-3 py-1 rounded-full mb-3">
                💰 Économie : {t.saving}
              </div>

              <p className="font-body text-[#475569] text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#e2e8f0] pt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-body font-bold text-[#0f172a] text-sm">{t.name}</div>
                  <div className="font-body text-[#94a3b8] text-xs">{t.age} ans · {t.location}</div>
                  <div className="font-body text-[#94a3b8] text-xs">{t.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust logos row */}
        <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]">
          <p className="font-body text-center text-[#64748b] text-sm font-semibold mb-5">
            Nous comparons les offres des meilleures mutuelles françaises
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['Harmonie Mutuelle', 'MGEN', 'Malakoff Humanis', 'AG2R La Mondiale', 'Swiss Life', 'Allianz'].map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-lg px-4 py-2 shadow-sm border border-[#e2e8f0] font-body font-semibold text-[#475569] text-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
