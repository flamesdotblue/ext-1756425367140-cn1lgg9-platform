import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava R.',
    body: 'Tastes like the real thing. I can fit dessert into my macros — and it arrives colder than my freezer!',
    rating: 5,
  },
  {
    name: 'Jordan P.',
    body: 'The portion size is perfect. Love the protein boost and the 20-minute delivery blew my mind.',
    rating: 5,
  },
  {
    name: 'Sam K.',
    body: 'Mint Momentum is my go-to post-workout treat. Zero sugar, zero guilt, all vibes.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Customer Love</h2>
          <p className="text-slate-600 mt-2">Real scoops from happy snackers.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(2,6,23,0.3)]"
          >
            <div className="flex items-center gap-1 text-amber-500 mb-3" aria-label={`${t.rating} star rating`}>
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-700">“{t.body}”</p>
            <footer className="mt-4 text-sm text-slate-500">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
