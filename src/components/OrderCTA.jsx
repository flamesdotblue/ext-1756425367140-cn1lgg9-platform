import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Timer } from 'lucide-react';

const flavorOptions = ['Vanilla Sky', 'Choco Lift', 'Mint Momentum', 'Berry Sprint'];

export default function OrderCTA() {
  const [zip, setZip] = useState('');
  const [flavor, setFlavor] = useState(flavorOptions[0]);
  const [qty, setQty] = useState(4);

  const estimate = useMemo(() => {
    const base = 22;
    const variance = 8;
    const offset = zip.length >= 5 ? -2 : 0;
    const min = Math.max(12, base + offset);
    const max = min + variance;
    return `${min}–${max} min`;
  }, [zip]);

  return (
    <section id="order" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-[0_24px_80px_-40px_rgba(2,6,23,0.4)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your order, on ice.</h2>
            <p className="text-slate-600 mt-2">Pick a flavor, drop your ZIP, and we’ll sprint it to your door.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600">
              <Timer className="size-4 text-violet-600" /> Est. delivery: <span className="font-medium text-slate-900">{estimate}</span>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">ZIP Code</label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
                placeholder="12345"
                inputMode="numeric"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Flavor</label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                {flavorOptions.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Quantity</label>
              <input
                type="number"
                min={2}
                max={12}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors"
                aria-label={`Order ${qty} ${flavor}`}
              >
                <Rocket className="size-4" /> Place Order
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
