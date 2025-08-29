import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Timer } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[86vh] md:h-[92vh] w-full" aria-label="FedEx Ice Cream hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NkcnsJpx2b5y-eA7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_10%,rgba(255,255,255,0.9),rgba(255,255,255,0.5)_40%,rgba(255,255,255,0))]" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                <Timer className="size-4 text-violet-600" /> Delivered in under 30 minutes
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Guilt‑Free Ice Cream. Protein‑Packed. Lightning‑Fast.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-4 text-slate-600 md:text-lg">
              Mini-sized, sugar-free scoops that satisfy like the real thing. Powered by FedEx for icy-cold delivery straight to your door.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex items-center gap-3">
              <a href="#order" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors">
                <Rocket className="size-4" /> Order Now
              </a>
              <a href="#flavors" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                Explore Flavors
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
