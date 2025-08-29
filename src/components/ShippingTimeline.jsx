import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Timer } from 'lucide-react';

const steps = [
  { title: 'Order Placed', note: 'You pick flavors', time: '00:00' },
  { title: 'Packed Cold', note: 'Ice-cold insulated', time: '00:05' },
  { title: 'Out for Delivery', note: 'FedEx courier on route', time: '00:10' },
  { title: 'At Your Door', note: 'Frosty & ready', time: '< 00:30' },
];

export default function ShippingTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="shipping" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Delivered in a Flash</h2>
          <p className="text-slate-600 mt-2">Track the sprint from our freezer to your door.</p>
        </div>
      </div>

      <div ref={ref} className="relative">
        <div className="absolute left-4 top-8 bottom-8 w-1 rounded bg-slate-200 hidden md:block" />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? '100%' : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute left-4 top-8 w-1 rounded bg-violet-500 origin-top hidden md:block"
          style={{ bottom: '2rem' }}
        />
        <ul className="space-y-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="md:pl-16">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_-16px_rgba(2,6,23,0.25)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {i < steps.length - 1 ? (
                        <Truck className="size-5 text-violet-600" />
                      ) : (
                        <Timer className="size-5 text-violet-600" />
                      )}
                      <h3 className="font-semibold">{s.title}</h3>
                    </div>
                    <span className="text-xs text-slate-500">{s.time}</span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">{s.note}</p>
                </motion.div>
              </div>
              <div className="hidden md:block absolute left-[14px] top-8 size-4 rounded-full border-2 border-white bg-violet-500 shadow" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
