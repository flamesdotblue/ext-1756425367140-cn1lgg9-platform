import { motion } from 'framer-motion';

const flavors = [
  {
    name: 'Vanilla Sky',
    color: 'from-sky-100 to-sky-50',
    nutrition: '90 kcal • 10g protein • 0g sugar',
    badge: 'Guilt-Free',
  },
  {
    name: 'Choco Lift',
    color: 'from-amber-100 to-amber-50',
    nutrition: '100 kcal • 11g protein • 0g sugar',
    badge: 'Protein-Packed',
  },
  {
    name: 'Mint Momentum',
    color: 'from-emerald-100 to-emerald-50',
    nutrition: '80 kcal • 12g protein • 0g sugar',
    badge: 'Sugar-Free',
  },
  {
    name: 'Berry Sprint',
    color: 'from-fuchsia-100 to-fuchsia-50',
    nutrition: '95 kcal • 10g protein • 0g sugar',
    badge: 'Low-Cal',
  },
];

export default function FlavorGallery() {
  return (
    <section id="flavors" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Flavor Gallery</h2>
          <p className="text-slate-600 mt-2">3D-inspired minis designed to delight — choose your vibe.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flavors.map((f, i) => (
          <TiltCard key={f.name} index={i} flavor={f} />
        ))}
      </div>
    </section>
  );
}

function TiltCard({ flavor, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${flavor.color} p-5 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.25)]`}
    >
      <div className="relative z-10">
        <span className="inline-flex text-[10px] uppercase tracking-wide font-semibold text-slate-700 bg-white/70 backdrop-blur rounded-full px-2 py-1 border border-slate-200">
          {flavor.badge}
        </span>
        <h3 className="mt-3 text-xl font-semibold">{flavor.name}</h3>
        <p className="text-slate-600 text-sm mt-1">{flavor.nutrition}</p>
        <div className="mt-6 flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="h-8 w-8 rounded-lg bg-white/70 border border-white/80 shadow" />
          ))}
        </div>
      </div>
      <motion.div
        className="absolute -right-6 -bottom-6 size-28 rounded-3xl bg-white/60 border border-white/70"
        animate={{ rotate: [0, 6, 0], y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-6 -top-6 size-12 rounded-2xl bg-white/60 border border-white/70"
        animate={{ rotate: [0, -8, 0], y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.article>
  );
}
