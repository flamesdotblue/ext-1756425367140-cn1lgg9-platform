import { useEffect } from 'react';
import Hero from './components/Hero';
import FlavorGallery from './components/FlavorGallery';
import Testimonials from './components/Testimonials';
import ShippingTimeline from './components/ShippingTimeline';
import OrderCTA from './components/OrderCTA';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <ValueProps />
        <FlavorGallery />
        <Testimonials />
        <ShippingTimeline />
        <OrderCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
          <span className="text-lg font-semibold tracking-tight">FedEx Ice Cream</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="#flavors">Flavors</a>
          <a className="hover:text-slate-900" href="#testimonials">Love</a>
          <a className="hover:text-slate-900" href="#shipping">Delivery</a>
          <a className="hover:text-slate-900" href="#order">Order</a>
        </nav>
      </div>
    </header>
  );
}

function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-12px_rgba(2,6,23,0.1)]">
        <h3 className="text-slate-900 font-semibold mb-2">Guilt-Free Indulgence</h3>
        <p className="text-slate-600">Mini-sized, sugar-free, and low-calorie so you can savor every bite — without the compromise.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-12px_rgba(2,6,23,0.1)]">
        <h3 className="text-slate-900 font-semibold mb-2">Packed with Protein</h3>
        <p className="text-slate-600">High-protein recipes to fuel your day and curb cravings, crafted for feel-good snacking.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-12px_rgba(2,6,23,0.1)]">
        <h3 className="text-slate-900 font-semibold mb-2">Delivered in a Flash</h3>
        <p className="text-slate-600">FedEx powered delivery gets your treats to your door in under 30 minutes — cold and ready.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} FedEx Ice Cream — Guilt-free joy, delivered fast.</p>
        <div className="text-slate-400 text-xs">Built with love and a sprinkle of 3D.</div>
      </div>
    </footer>
  );
}
