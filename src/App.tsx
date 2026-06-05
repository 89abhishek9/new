import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Zap, 
  Moon, 
  Sun, 
  Battery, 
  FlaskConical, 
  Leaf, 
  Quote,
  Truck,
  CreditCard,
  Lock,
  Headphones,
  Plus,
  Globe,
  Fingerprint,
  RefreshCw,
  AlertTriangle,
  Shield,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ingredients = [
  { name: "Saw Palmetto", desc: "Supports healthy urinary flow and prostate size." },
  { name: "Beta-Sitosterol", desc: "Clinically proven to improve urinary symptoms." },
  { name: "Zinc", desc: "Essential mineral for prostate cell health and immunity." },
  { name: "Pumpkin Seed Extract", desc: "Rich in antioxidants that reduce inflammation." },
  { name: "Pygeum Africanum", desc: "Traditionally used to support bladder health." },
  { name: "Lycopene", desc: "Powerful antioxidant found in tomatoes for cell protection." },
];

const AFFILIATE_LINK = "https://prostavive.org?&shield=d75090k7qs5z4n9f486fwa2lam";

const testimonials = [
  { 
    name: "John D.", 
    age: 58, 
    text: "I've tried everything, but ProstaVive is the only thing that stopped those 3 AM bathroom runs. I feel 10 years younger!", 
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop"
  },
  { 
    name: "Robert M.", 
    age: 64, 
    text: "Finally, a supplement that actually works. My energy is back, and I feel much more confident throughout the day.", 
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop"
  },
  { 
    name: "William S.", 
    age: 52, 
    text: "The breakthrough formula is no joke. I noticed a difference within the first two weeks. Highly recommend!", 
    rating: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop"
  },
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productWithIngredientsImage = "/images/prostavive-bottle-ingredients.png";
  const bottleImage = "/images/prostavive-bottle-ingredients.png";

  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy overflow-x-hidden">
      {/* Header */}
      <header className="bg-brand-navy text-white py-4 px-6 fixed w-full z-[100] flex justify-between items-center backdrop-blur-md bg-opacity-90 border-b border-white/5">
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-2xl font-black italic tracking-tighter uppercase hover:opacity-80 transition-opacity">
          <span className="text-blue-400">Prosta</span>
          <span className="text-white">Vive</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest items-center">
          <a href="#review" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('review')?.scrollIntoView({ behavior: 'smooth' }); }}>Does It Work?</a>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Science</a>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Ingredients</a>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Reviews</a>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-brand-navy px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors">Order Now</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-brand-navy border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-6 text-lg font-black uppercase tracking-widest text-center">
                <a href="#review" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('review')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="py-4 border-b border-white/5 text-white">Does It Work?</a>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-white/5 text-white">Science</a>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-white/5 text-white">Ingredients</a>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-white/5 text-white">Reviews</a>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-yellow-400 text-brand-navy py-4 rounded-2xl block">Order Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-navy rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-navy rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-brand-navy/40 border border-blue-50/30 px-4 py-2 rounded-full text-blue-300 text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Zap size={14} /> New Breakthrough Formula
            </div>
            <h1 className="text-4xl lg:text-7xl font-serif font-black leading-tight mb-8">
              Reclaim Your <span className="text-blue-400">Prostate Vitality</span> & Sleep Through The Night
            </h1>
            <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ProstaVive's proprietary blend addresses the root cause of prostate fatigue, helping you restore energy and confidence naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-2xl text-xl font-black hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 group uppercase tracking-tighter">
                Order Risk-Free Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img src={productWithIngredientsImage} alt="ProstaVive supplement bottle with natural ingredients illustration" className="relative z-20 w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(37,99,235,0.3)]" />
          </motion.div>
        </div>
      </section>

      {/* Energy Drain Section - "How prostate drains your energy?" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="bg-blue-50 rounded-[40px] p-12 relative overflow-hidden shadow-sm border border-blue-100">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Battery size={200} className="text-brand-navy" />
                </div>
                <h3 className="text-3xl font-serif font-black text-brand-navy mb-8 uppercase tracking-tighter">How Prostate Issues Drain Your Energy</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Moon className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 uppercase tracking-tight">Fragmented Sleep Cycle</h4>
                      <p className="text-slate-600 leading-relaxed">Waking up 3-4 times a night means you never reach deep REM sleep. This leaves your brain in a permanent state of "Survival Mode".</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Zap className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 uppercase tracking-tight">Chronic Adrenal Stress</h4>
                      <p className="text-slate-600 leading-relaxed text-[15.2px]">The constant urgency signals a "fight or flight" response in your body, exhausting your adrenal glands and lowering testosterone.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Battery className="text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 uppercase tracking-tight">Cellular Fatigue</h4>
                      <p className="text-slate-600 leading-relaxed text-[15.2px]">When the prostate is struggling, your entire reproductive system diverts energy away from your muscles and mind to manage inflammation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-serif font-black mb-8 leading-tight uppercase tracking-tighter italic">It's Not Just About Comfort... <br className="hidden lg:block"/> It's Your Vitality.</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Most men assume that frequent nightly visits are just "part of getting older." But the reality is far more serious. This cycle of poor sleep and internal stress literally **drains your battery**, making you feel aged, tired, and unmotivated.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-2xl">
                  <div className="text-4xl font-black text-brand-navy mb-1 tracking-tighter">68%</div>
                  <div className="text-xs font-black uppercase text-slate-500 tracking-widest">Better Sleep Reported</div>
                </div>
                <div className="p-6 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-2xl">
                  <div className="text-4xl font-black text-yellow-900 mb-1 tracking-tighter">2.4x</div>
                  <div className="text-xs font-black uppercase text-slate-500 tracking-widest">More Daily Energy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ProstaVive & Breakthrough Formula */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <div className="inline-block bg-brand-navy text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-4">Science First</div>
          <h2 className="text-4xl lg:text-6xl font-serif font-black mb-6 uppercase tracking-tighter italic">Why Choose ProstaVive?</h2>
          <p className="text-2xl text-brand-navy font-serif font-bold italic opacity-80">The First Breakthrough Formula Addressing "Energy-Drain" Biology.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div whileHover={{ y: -10 }} className="bg-white p-8 lg:p-10 rounded-[40px] shadow-xl border border-slate-100 text-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-navy rounded-3xl flex items-center justify-center text-white mb-6 lg:mb-8 mx-auto shadow-2xl shadow-brand-navy/30">
              <FlaskConical size={32} className="lg:scale-125" />
            </div>
            <h3 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight">Targeted Delivery</h3>
            <p className="text-slate-500 leading-relaxed text-[15.2px]">Generic pills are destroyed by stomach acids. ProstaVive uses a micronized delivery system to ensure nutrients actually reach the prostate tissue.</p>
          </motion.div>
          
          <motion.div whileHover={{ y: -10 }} className="bg-white p-8 lg:p-10 rounded-[40px] shadow-xl border border-slate-100 text-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-500 rounded-3xl flex items-center justify-center text-white mb-6 lg:mb-8 mx-auto shadow-2xl shadow-yellow-500/30">
              <Zap size={32} className="lg:scale-125" />
            </div>
            <h3 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight">Dual-Action Formula</h3>
            <p className="text-slate-500 leading-relaxed text-[15.2px]">We don't just support size; we restore energy. Our formula includes specific co-factors that recharge your body's energy reserves.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white p-8 lg:p-10 rounded-[40px] shadow-xl border border-slate-100 text-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-600 rounded-3xl flex items-center justify-center text-white mb-6 lg:mb-8 mx-auto shadow-2xl shadow-green-500/30">
              <ShieldCheck size={32} className="lg:scale-125" />
            </div>
            <h3 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight">Pure Potency</h3>
            <p className="text-slate-500 leading-relaxed text-[15.2px]">No fillers. No synthetic junk. Just 100% pure, lab-tested botanical extracts sourced from the most fertile regions on Earth.</p>
          </motion.div>
        </div>
      </section>

      {/* How it restore prostate health */}
      <section id="how-it-works" className="py-24 bg-brand-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl lg:text-7xl font-serif font-black mb-12 lg:mb-20 uppercase tracking-tighter italic">How It Restores Health</h2>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="relative group">
              <div className="text-[80px] lg:text-[120px] font-black text-white/5 absolute -top-8 lg:-top-16 left-1/2 -translate-x-1/2 group-hover:text-white/10 transition-colors">01</div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#11abdc] rounded-full flex items-center justify-center text-xl lg:text-2xl font-black mx-auto mb-6 lg:mb-10 relative z-10 shadow-2xl shadow-[#11abdc]/40">1</div>
              <h4 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight">Detoxification</h4>
              <p className="text-blue-100/60 leading-relaxed text-lg text-[15.2px]">Instantly begins flushing out hard-water minerals and toxins that build up in male reproductive tissues over time.</p>
            </div>
            <div className="relative group">
              <div className="text-[80px] lg:text-[120px] font-black text-white/5 absolute -top-8 lg:-top-16 left-1/2 -translate-x-1/2 group-hover:text-white/10 transition-colors">02</div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-500 rounded-full flex items-center justify-center text-xl lg:text-2xl font-black mx-auto mb-6 lg:mb-10 relative z-10 shadow-2xl shadow-yellow-500/40">2</div>
              <h4 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight">Cellular Support</h4>
              <p className="text-blue-100/60 leading-relaxed text-lg text-[15.2px]">Phyto-nutrients penetrate the cell wall to support healthy tissue structure and normal, healthy prostate size.</p>
            </div>
            <div className="relative group">
              <div className="text-[80px] lg:text-[120px] font-black text-white/5 absolute -top-8 lg:-top-16 left-1/2 -translate-x-1/2 group-hover:text-white/10 transition-colors">03</div>
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-600 rounded-full flex items-center justify-center text-xl lg:text-2xl font-black mx-auto mb-6 lg:mb-10 relative z-10 shadow-2xl shadow-green-500/40">3</div>
              <h4 className="text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight">Energy Recharge</h4>
              <p className="text-blue-100/60 leading-relaxed text-lg text-[15.2px]">With the system clear, your body naturally restores sleep patterns and metabolic energy, leaving you vital and refreshed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-7xl font-serif font-black mb-6 uppercase tracking-tighter italic">What Men Are Saying</h2>
              <p className="text-xl text-slate-500 italic">"I've tried everything. This is different."</p>
            </div>
            <div className="flex items-center gap-6 bg-brand-navy text-white px-10 py-5 rounded-[30px] shadow-2xl shrink-0">
              <div className="text-4xl font-black italic tracking-tighter">4.9/5</div>
              <div className="flex text-yellow-400 gap-1"><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-slate-50 p-8 lg:p-12 rounded-[32px] lg:rounded-[50px] relative shadow-sm border border-slate-100">
                <Quote size={40} className="text-blue-100 absolute top-8 right-8 lg:top-10 lg:right-10 lg:scale-125" />
                <div className="flex text-yellow-500 mb-8">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-xl text-slate-700 italic mb-10 leading-relaxed font-medium">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-navy shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-black text-brand-navy text-lg uppercase tracking-tight">{t.name}</div>
                    <div className="text-sm font-black text-blue-500 uppercase tracking-widest">{t.age} Years Old</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section id="pricing" className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-400/20">Limited Time Special</div>
          <h2 className="text-5xl lg:text-8xl font-serif font-black mb-8 uppercase tracking-tighter italic">Select Your Package</h2>
          <p className="text-2xl text-slate-500 italic max-w-2xl mx-auto">Click "Buy Now" below to take advantage of our wholesale pricing while supplies last.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-0 items-stretch">
            {/* 1 Bottle */}
            <div className="bg-[#f8fbff] p-8 lg:p-12 flex flex-col items-center text-center border border-blue-100 rounded-[40px] lg:rounded-none lg:rounded-l-[60px] lg:border-r-0">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Starter Pack</h3>
              <div className="text-4xl lg:text-6xl font-serif font-black text-brand-navy mb-1 leading-none tracking-tighter">1 BOTTLE</div>
              <div className="text-blue-500 font-black text-sm uppercase tracking-widest mb-10">30-day supply</div>
              
              <div className="relative mb-6 lg:mb-12 h-64 lg:h-72 flex items-center justify-center">
                <img src={productWithIngredientsImage} alt="ProstaVive Starter Pack - 1 Bottle" className="max-h-full w-auto" loading="lazy" />
              </div>
 
              <div className="flex items-baseline gap-1 mb-8 lg:mb-12 italic">
                <span className="text-6xl lg:text-8xl font-serif font-black text-brand-navy">$69</span>
                <span className="text-slate-500 text-xl lg:text-2xl font-bold">/ Bottle</span>
              </div>
 
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-[#5cb85c] text-white py-4 lg:py-6 rounded-2xl font-black text-2xl lg:text-4xl uppercase tracking-tighter hover:bg-[#4cae4c] transition-all shadow-xl active:scale-95 mb-8 group text-center flex items-center justify-center gap-2">
                BUY NOW! <span className="text-xl lg:text-2xl inline-block group-hover:translate-x-1 transition-transform">▶</span>
              </a>
 
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-black text-black uppercase tracking-widest flex items-center gap-2">
                   <Plus size={16} strokeWidth={4} /> Small Shipping Fee
                </div>
                <div className="flex gap-4 opacity-50">
                  <img src="/images/visa-card.jpg" alt="Visa" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                </div>
              </div>
            </div>

            {/* 6 Bottles */}
            <div className="bg-brand-navy flex flex-col items-center text-center relative z-10 border border-brand-navy rounded-[40px] lg:rounded-none shadow-2xl lg:scale-105">
              <div className="w-full bg-yellow-400 py-6 text-black font-black uppercase tracking-[0.4em] text-xl lg:text-2xl italic underline decoration-4 underline-offset-8 shadow-2xl z-20 rounded-t-[40px] lg:rounded-none">
                Most Popular
              </div>
              <div className="p-8 lg:p-12 flex flex-col items-center w-full grow pt-16">
                <div className="text-4xl lg:text-7xl font-serif font-black text-white mb-1 leading-none tracking-tighter">6 BOTTLES</div>
                <div className="text-blue-300 font-black text-sm uppercase tracking-widest mb-10">180-day supply</div>
                
                <div className="relative mb-6 lg:mb-12 h-64 lg:h-72 flex items-center justify-center">
                  <img src={productWithIngredientsImage} alt="ProstaVive Value Pack - 6 Bottles" className="max-h-full w-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]" loading="lazy" />
                  <div className="absolute top-0 right-[-10%] lg:right-[-20%] w-20 h-20 lg:w-28 lg:h-28 bg-red-600 text-white rounded-full flex flex-col items-center justify-center border-[4px] lg:border-[6px] border-brand-navy shadow-2xl rotate-12 scale-110">
                    <div className="text-sm lg:text-xl font-black leading-none">FREE</div>
                    <div className="text-[10px] lg:text-xs font-bold leading-none mt-1 uppercase">Shipping</div>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-8 lg:mb-12 italic text-white">
                  <span className="text-6xl lg:text-9xl font-serif font-black">$39</span>
                  <span className="text-xl lg:text-3xl font-bold opacity-60">/ Bottle</span>
                </div>

                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-[#5cb85c] text-white py-4 lg:py-8 rounded-2xl font-black text-2xl lg:text-5xl uppercase tracking-tighter hover:bg-[#4cae4c] transition-all shadow-[0_20px_50px_rgba(92,184,92,0.4)] active:scale-95 mb-8 group animate-pulse text-center flex items-center justify-center gap-2">
                  BUY NOW! <span className="text-xl lg:text-2xl inline-block group-hover:translate-x-1 transition-transform">▶</span>
                </a>

                <div className="flex flex-col items-center gap-6">
                  <div className="text-sm lg:text-lg font-black text-yellow-400 uppercase tracking-[0.2em] flex items-center gap-3">
                    <CheckCircle2 size={24} /> FREE US Shipping
                  </div>
                  <div className="mt-4 text-4xl lg:text-6xl font-serif font-black text-white tracking-tighter italic opacity-90">$234 Total</div>
                </div>
              </div>
            </div>

            {/* 3 Bottles */}
            <div className="bg-[#f8fbff] p-8 lg:p-12 flex flex-col items-center text-center border border-blue-100 rounded-[40px] lg:rounded-none lg:rounded-r-[60px] lg:border-l-0">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Great Value</h3>
              <div className="text-4xl lg:text-6xl font-serif font-black text-brand-navy mb-1 leading-none tracking-tighter">3 BOTTLES</div>
              <div className="text-blue-500 font-black text-sm uppercase tracking-widest mb-10">90-day supply</div>
              
              <div className="relative mb-6 lg:mb-12 h-64 lg:h-72 flex items-center justify-center">
                 <img src={productWithIngredientsImage} alt="ProstaVive Bundle Pack - 3 Bottles" className="max-h-full w-auto" loading="lazy" />
              </div>
 
              <div className="flex items-baseline gap-1 mb-8 lg:mb-12 italic">
                <span className="text-6xl lg:text-8xl font-serif font-black text-brand-navy">$59</span>
                <span className="text-slate-500 text-xl lg:text-2xl font-bold">/ Bottle</span>
              </div>
 
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-[#5cb85c] text-white py-4 lg:py-6 rounded-2xl font-black text-2xl lg:text-4xl uppercase tracking-tighter hover:bg-[#4cae4c] transition-all shadow-xl active:scale-95 mb-8 group text-center flex items-center justify-center gap-2">
                BUY NOW! <span className="text-xl lg:text-2xl inline-block group-hover:translate-x-1 transition-transform">▶</span>
              </a>
 
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-black text-black uppercase tracking-widest flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-[#5cb85c]" /> FREE US Shipping
                </div>
                <div className="mt-4 text-4xl font-serif font-black text-[#11243f] tracking-tighter italic">$177 Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Ingredients */}
      <section id="ingredients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-7xl font-serif font-black mb-8 uppercase tracking-tighter italic leading-none">Natural Potency</h2>
            <p className="text-xl lg:text-2xl text-slate-500 italic max-w-2xl mx-auto">No synthetic fillers. No harmful chemicals. Just pure botanical potency.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {ingredients.map((ing, i) => (
              <div key={i} className="group bg-slate-50 p-6 lg:p-10 rounded-[32px] lg:rounded-[40px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all text-center">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Leaf size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{ing.name}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money back guarantee */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#fffdf5] rounded-[40px] lg:rounded-[80px] p-8 lg:p-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border-2 lg:border-4 border-yellow-200 shadow-2xl relative overflow-hidden text-center lg:text-left">
            <div className="absolute top-0 right-0 p-12 opacity-5 hidden lg:block">
              <ShieldCheck size={400} />
            </div>
            <div className="relative shrink-0">
               <div className="w-48 h-48 lg:w-80 lg:h-80 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(234,179,8,0.3)] border-4 lg:border-8 border-yellow-400 rotate-[-5deg]">
                 <div className="text-6xl lg:text-9xl font-serif font-black text-black leading-none">180</div>
                 <div className="text-sm lg:text-lg font-black uppercase tracking-[0.3em] text-slate-500 leading-none mt-2">DAYS</div>
               </div>
               <div className="absolute -bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 lg:px-10 py-2 lg:py-3 rounded-full font-black text-lg lg:text-xl uppercase tracking-tighter shadow-xl italic rotate-6">IRONCLAD</div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-7xl font-serif font-black mb-6 lg:mb-10 uppercase tracking-tighter italic leading-none">Your Results Are <br className="hidden lg:block"/> <span className="text-yellow-600">GUARANTEED.</span></h2>
              <p className="text-lg lg:text-2xl text-slate-700 mb-8 lg:mb-10 leading-relaxed italic font-medium">
                Try ProstaVive for a full 180 days. If you don't sleep better, have more energy, and notice a significant improvement in your urinary health—simply return the bottles for a <span className="font-black text-black underline decoration-yellow-400 underline-offset-8">full refund.</span>
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#5cb85c]">
                   <ShieldCheck size={28} /> Authorized Retailer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How ProstaVive improve daily life */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <div className="text-blue-400 font-black uppercase tracking-[0.4em] mb-6 text-sm">Life Transformation</div>
            <h2 className="text-4xl lg:text-8xl font-serif font-black mb-12 leading-none uppercase tracking-tighter italic">Imagine Your <span className="text-yellow-400">New Life...</span></h2>
            <div className="space-y-10 text-left">
              {[
                { title: "Deep Restoration", desc: "Sleep through the night without a single interruption. Wake up feeling truly alive." },
                { title: "Absolute Confidence", desc: "No more mapping out bathrooms. No more social anxiety. Just you, in control." },
                { title: "Peak Performance", desc: "With restored prostate health, you'll feel a surge of youthful energy and vitality." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 lg:gap-8 group">
                  <div className="w-16 h-16 bg-brand-navy/20 rounded-3xl flex items-center justify-center shrink-0 border border-brand-navy/30 group-hover:bg-brand-navy transition-colors">
                    <CheckCircle2 className="text-blue-400 group-hover:text-white" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-blue-100/60 text-lg italic leading-relaxed text-[15.2px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
             <div className="aspect-[4/5] bg-gradient-to-t from-black to-brand-navy rounded-[40px] lg:rounded-[60px] overflow-hidden relative shadow-3xl border border-white/10">
                <img src="/images/active-healthy-older-man.png" alt="Healthy active older man enjoying life outdoors with high energy" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
                <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12">
                   <div className="text-3xl lg:text-5xl font-serif font-black text-white italic tracking-tighter mb-4 leading-none">"I haven't felt this strong in 20 years."</div>
                   <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">— Mark R., Age 61</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* What happen when you buy */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 lg:mb-20 italic">
            <h2 className="text-3xl lg:text-7xl font-serif font-black mb-6 lg:mb-8 uppercase tracking-tighter leading-none text-brand-navy">Instant Activation</h2>
            <p className="text-xl lg:text-2xl text-slate-500">What Happens The Moment You Click Order?</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl rotate-3">
                <Lock size={44} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-brand-navy">1. Secure Gateway</h4>
              <p className="text-slate-500 font-medium">Your data is secured by 256-bit SSL encryption. We never store credit card info.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl -rotate-3">
                <Truck size={44} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-brand-navy">2. Fast Dispatch</h4>
              <p className="text-slate-500 font-medium">Orders are picked and packed in 24 hours from our climate-controlled lab.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl rotate-6">
                <Zap size={44} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-brand-navy">3. Rapid Intake</h4>
              <p className="text-slate-500 font-medium">The formula begins bioavailability absorption the moment your first dose arrives.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl -rotate-6">
                <Headphones size={44} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-brand-navy">4. Expert Support</h4>
              <p className="text-slate-500 font-medium">Our medical support team is ready via email or phone to help you reach your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest 2026 Review Analysis Section */}
      <section id="review" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4">
              Honest 2026 Analysis
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif font-black uppercase tracking-tighter italic text-brand-navy mb-4">
              ProstaVive Review: <span className="text-blue-600">Does It Work?</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium italic">
              A comprehensive, ingredient-focused, and evidence-backed breakdown.
            </p>
          </div>

          {/* Article Container with beautiful editorial, high-contrast & high-readability styling for 50+ age group */}
          <div className="max-w-none text-slate-900 leading-relaxed text-lg md:text-[21px] space-y-10 font-medium">
            <p className="text-xl md:text-2xl text-slate-800 italic border-l-4 border-blue-500 pl-6 py-3 bg-blue-50/55 rounded-r-3xl pr-6 leading-relaxed">
              If you've been searching for an honest ProstaVive review, you're in the right place. With so many prostate supplements flooding the market in 2026, it's fair to ask: does ProstaVive actually work, or is it just another overhyped bottle of capsules? Let's break down exactly what ProstaVive is, what's inside it, what real users are saying, and whether it's worth your money.
            </p>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">What Is ProstaVive?</h3>
              <p className="leading-relaxed">
                ProstaVive is a natural prostate health supplement designed as a clean, daily support system for men seeking to maintain cellular prostate size, promote stronger urine flow, and reduce midnight waking.
              </p>
              <p className="leading-relaxed">
                Unlike standard, hard-to-absorb capsules that are easily destroyed by harsh digestive acids, ProstaVive is manufactured using a specialized micronized delivery format designed to yield complete cellular bioavailability, directly addressing:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 list-none mt-6">
                {[
                  "Healthy prostate size & structure",
                  "Stronger, continuous urine flow",
                  "Fewer nighttime trips (better sleep)",
                  "Enhanced male vitality & daily energy"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                    <span className="font-extrabold text-base md:text-lg text-brand-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed">
                It comes with an extraordinary <strong className="font-black text-brand-navy underline decoration-blue-500 underline-offset-4">180-day money-back guarantee</strong>, which is one of the longest coverage options in the wellness industry—a strong statement of confidence from the formulator.
              </p>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">ProstaVive Ingredients: What's Inside?</h3>
              <p className="leading-relaxed">
                The efficacy of any botanical formula relies purely on the purity and concentration of its active compounds. ProstaVive's synergistic recipe is built around several scientifically explored ingredients:
              </p>

              <div className="space-y-6 mt-8">
                {[
                  {
                    name: "Saw Palmetto Extract",
                    benefit: "Supports healthy testosterone metabolism",
                    desc: "Arguably the most robustly researched natural compound for prostate health. Multiple clinical analyses suggest saw palmetto inhibits 5-alpha-reductase, supporting healthy urinary frequencies and defending against age-related enlargement (BPH)."
                  },
                  {
                    name: "Beta-Sitosterol",
                    benefit: "Improves urinary flow rates",
                    desc: "A natural plant sterol repeatedly shown in clinical assessments to enhance bladder clearance, improve micro-circulation, and significantly decrease residual urine volume in men."
                  },
                  {
                    name: "Zinc",
                    benefit: "Foundational cellular immunity",
                    desc: "The natural prostate gland maintains higher concentrations of zinc than any other tissue in the human body. Because structural zinc depletion is highly linked to swelling, daily supplementation is absolutely critical."
                  },
                  {
                    name: "Pygeum Africanum Bark",
                    benefit: "Reduces nighttime bladder urgency",
                    desc: "Derived from the African cherry tree bark, pygeum is extensively integrated across European clinical frameworks to naturally soothe bladder spasms, decrease overnight wakefulness, and facilitate total bladder emptying."
                  },
                  {
                    name: "Lycopene",
                    benefit: "Powerful localized antioxidant",
                    desc: "A powerful skin and interior cellular antioxidant found abundantly in red ripe tomatoes. It targets and neutralizes oxidative cellular stress specifically localized within key prostate tissues."
                  },
                  {
                    name: "Vitamin D3",
                    benefit: "Supports healthy cellular development",
                    desc: "Clinical research shows that steady Vitamin D levels are tightly bound to long-term prostate health, metabolic vitality, and proper immune response within the glands."
                  }
                ].map((ing, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight">{ing.name}</h4>
                        <span className="text-xs md:text-sm font-bold text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full">{ing.benefit}</span>
                      </div>
                      <p className="text-base md:text-[18px] text-slate-700 leading-relaxed font-semibold">{ing.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">Does ProstaVive Actually Work? What Users Are Saying</h3>
              <p className="leading-relaxed">
                User feedback across digital spaces remains highly promising. Because it employs organic botanical extracts rather than synthetic forced biochemical compounds, the benefits compile systematically and progressively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#f0fdf4] p-8 rounded-[32px] border border-green-200">
                  <h4 className="font-extrabold text-green-900 uppercase tracking-wider text-sm md:text-base mb-4">Key Benefits Reported</h4>
                  <ul className="space-y-3">
                    {[
                      "Decreased immediate urgency and better stream flow",
                      "Substantial drop in middle-of-the-night waking schedules",
                      "Noticeable relief in bladder pressure and discomfort",
                      "Enhanced baseline daytime energy and endurance levels"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-sm md:text-base font-bold text-green-950">
                        <CheckCircle2 size={18} className="text-green-700 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#fefce8] p-8 rounded-[32px] border border-yellow-200">
                  <h4 className="font-extrabold text-yellow-900 uppercase tracking-wider text-sm md:text-base mb-4">Key Realistic Expectations</h4>
                  <ul className="space-y-3">
                    {[
                      "Requires consistent, daily intake (missing days sets back relief)",
                      "Results are cumulative; works gradually over weeks, not minutes",
                      "Individual responses might differ based on current body state"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-sm md:text-base font-bold text-yellow-950">
                        <CheckCircle2 size={18} className="text-yellow-700 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">How Long Does ProstaVive Take to Work?</h3>
              <p className="leading-relaxed">
                Based on extensive consumer feedback and the bio-absorption cycle of its active compounds, a standard realistic progression timeline is outlined below:
              </p>

              <div className="overflow-hidden border border-slate-200 rounded-3xl mt-6 shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-sm md:text-base font-black uppercase tracking-wider text-brand-navy">Timeframe</th>
                      <th className="px-6 py-4 text-sm md:text-base font-black uppercase tracking-wider text-brand-navy">What to Expect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { period: "Week 1–2", text: "Nutrients begin compiling systematic balance in tissue. No drastic changes; initial localized assimilation." },
                      { period: "Week 3–4", text: "Noticeable, gentle reduction in late-night urgency. Bladder control begins normalizing." },
                      { period: "Month 2", text: "Significantly stronger, smoother flow. Consistently fewer bathroom interruptions at night." },
                      { period: "Month 3+", text: "Full, consolidated botanical benefits. Gland comfort and natural male vitality optimized." }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="px-6 py-5 text-base md:text-lg font-black text-brand-navy whitespace-nowrap">{row.period}</td>
                        <td className="px-6 py-5 text-base md:text-lg text-slate-700 font-semibold leading-relaxed">{row.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs md:text-sm text-slate-500 italic mt-4 text-center">
                *Consistency is paramount. The formulator highly suggests completing a thorough 90 to 180 day protocol.
              </p>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight">Safety & Side Effects</h3>
              <p className="leading-relaxed">
                Crafted inside an FDA-registered and GMP-certified, state-of-the-art facility inside the United States, ProstaVive is formulated entirely around natural ingredients that possess high safety records. Severe side effects remain incredibly scarce.
              </p>
              <p className="leading-relaxed">
                A small minority may experience minor tummy adjustments during the initial stage as the bioactive extracts are introduced, which generally self-corrects inside a matter of days.
              </p>
              <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 mt-6">
                <span className="font-extrabold text-xs md:text-sm bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-wider">Medical Guidance</span>
                <p className="mt-4 text-base md:text-lg text-blue-900 font-semibold leading-relaxed">
                  Men currently diagnosed with prostate issues, undergoing cellular treatments, or actively taking prescription medications should always consult their personal healthcare doctor before commencing any wellness supplement program.
                </p>
              </div>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="bg-gradient-to-br from-brand-navy to-black p-8 md:p-12 lg:p-16 rounded-[40px] text-white space-y-6 text-center lg:text-left relative overflow-hidden border border-white/10 mt-12 bg-slate-950">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black italic tracking-tight text-white uppercase">The Final Verdict: Is It Worth It?</h3>
                <p className="text-blue-100/80 text-base md:text-lg lg:text-xl font-bold max-w-3xl leading-relaxed">
                  With premium researched dosages, an pristine clean clinical manufacturing lineage, and a completely risk-free 180-day money-back policy, ProstaVive represents a leading, high-value natural formula for active men.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <div className="text-yellow-400 font-extrabold uppercase tracking-widest text-sm">OFFICIAL STORE PRICING</div>
                  <div className="text-2xl md:text-3xl font-bold font-serif italic text-white leading-tight">Guaranteed Authentic & Verified Direct Stock</div>
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-10 py-5 rounded-2xl text-[20px] font-black hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/10 uppercase tracking-tighter shrink-0 text-center">
                  Secure Your Supply Direct
                  <ArrowRight size={22} />
                </a>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest pt-8">
              This review is compiled for informational study and is not composed as professional diagnostic advice.
            </p>
          </div>
        </div>
      </section>

      {/* Localized SEO Target Section - Council Bluffs, IA */}
      <section id="local-info" className="py-24 bg-blue-50/40 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-950 border border-yellow-200 px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wider mb-4">
              📍 Local Shipping Guide &amp; Availability
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif font-black uppercase tracking-tighter italic text-brand-navy mb-4 leading-none">
              ProstaVive in <span className="text-blue-600">Council Bluffs, Iowa</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium italic">
              Local store retail reports, shipping timelines, and direct home dispatch.
            </p>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 space-y-8 text-slate-900 leading-relaxed text-lg md:text-[21px] font-medium shadow-sm">
            <p className="leading-relaxed text-slate-800">
              For men over 50 residing in <strong>Council Bluffs, Iowa</strong> and neighboring Pottawattamie County, getting premium natural support should not involve endless trips to physical shops. Let's break down where you can obtain authentic ProstaVive stock with verified speed.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight">
                Can You Buy ProstaVive in Local Council Bluffs retail stores?
              </h3>
              <p className="leading-relaxed text-slate-700">
                As of <strong className="text-brand-navy font-extrabold">2026</strong>, authentic, clinically certified <strong>ProstaVive formula is not sold in local brick-and-mortar stores</strong> near Broadway, Metro Crossing, or Mall of the Bluffs. Major retailers like Walgreens, GNC, Walmart, or CVS do not carry the genuine proprietary formula. 
              </p>
              <p className="leading-relaxed text-slate-700">
                This is a deliberate safety decision by the manufacturer to:
              </p>
              <ul className="space-y-4 pl-0 list-none mt-4">
                <li className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <span className="shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <span><strong>Eliminate retail third-party markups</strong> to keep the individual bottle cost as low as $39.</span>
                </li>
                <li className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <span className="shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <span><strong>Prevent fraudulent counterfeits</strong> from leaking onto unauthorized third-party shelves.</span>
                </li>
                <li className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <span className="shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <span>Maintain the validity of the comprehensive <strong>180-day money-back guarantee</strong> through direct factory checkout records.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight">
                Council Bluffs &amp; Western Iowa Delivery Timelines
              </h3>
              <p className="leading-relaxed text-slate-700">
                When you initiate your order online from anywhere in the Council Bluffs, Iowa area, your shipment is routed via premium express courier networks (USPS, FedEx, or UPS direct):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                  <h4 className="font-extrabold text-blue-900 uppercase tracking-wider text-sm mb-2">🚚 Local Delivery Time</h4>
                  <p className="text-base md:text-lg font-bold text-slate-800 leading-normal">
                    3 to 5 business days from dispatch directly to your front porch.
                  </p>
                </div>
                <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
                  <h4 className="font-extrabold text-green-900 uppercase tracking-wider text-sm mb-2">🔒 Secure Packaging</h4>
                  <p className="text-base md:text-lg font-bold text-slate-800 leading-normal">
                    Delivered in fully discreet plain packaging to protect your personal privacy.
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-xs md:text-sm text-slate-500 italic mt-4">
                *Local distribution depots in Iowa and the Midwest region ensure rapid transit and package handoffs for localized postal routes.
              </p>
            </div>

            <hr className="border-slate-100 my-8" />

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight">
                Specially Tailored for Men 50+ seeking to stop Midnight waking
              </h3>
              <p className="leading-relaxed text-slate-800">
                Residents in Council Bluffs can easily begin their restoration protocol today. Just one daily scoop targets biological swelling, supporting easier flow and restful nights so you can sleep soundly through the night.
              </p>
              
              <div className="pt-6">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-2xl text-xl md:text-2xl font-black transition-all shadow-xl shadow-yellow-400/10 uppercase tracking-tighter">
                  Check Special local pricing
                  <ArrowRight size={22} className="shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed FAQ Section for SEO */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-serif font-black mb-6 uppercase tracking-tighter italic text-brand-navy">Common Questions</h2>
            <p className="text-xl text-slate-500 font-medium">Everything you need to know about ProstaVive.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Which medicine is best for prostate enlargement?",
                a: "The best medicine for prostate enlargement (BPH) depends on your specific symptoms, general health, and prostate size. Clinically, doctors prescribe two main categories of medications: Alpha-blockers (such as Tamsulosin, also known as Flomax) which relax bladder neck muscle fibers to improve urine flow and decrease stream pressure quickly; and 5-Alpha Reductase Inhibitors (such as Finasteride/Proscar or Dutasteride/Avodart) which work slowly over 3 to 6 months to shrink the actual physical size of the prostate gland. Many active men choose to supplement with a premium natural formula like ProstaVive to support healthy urinary flow and cellular prostate size without the potential side effects associated with prescription pharmaceuticals."
              },
              {
                q: "Can an enlarged prostate go back to normal size?",
                a: "Yes, an enlarged prostate is clinically capable of shrinking back toward a more normal size under the correct medical or nutritional protocol. Clinicians frequently use 5-alpha reductase inhibitors to reduce the prostate volume by blocking the conversion of testosterone into DHT, the primary hormone driver behind swelling. Many men over 50 also find success through targeted dietary supplementation using organic botanical compounds—such as the high-purity Saw Palmetto, Beta-Sitosterol, and Pygeum Africanum found inside ProstaVive—which help reduce cellular swelling, soothe bladder pressure, and promote natural, healthy prostate rejuvenation over a structured 90-to-180 day cycle."
              },
              {
                q: "What are the names of prostate tablets?",
                a: "The most commonly prescribed or recommended prostate tablets and wellness formulas in the United States include:\n• Tamsulosin (Flomax): A popular alpha-blocker pill taken daily for rapid flow relief.\n• Finasteride (Proscar) & Dutasteride (Avodart): Clinically tested tablets designed to block DHT and physically shrink the gland.\n• Silodosin (Rapaflo) & Alfuzosin (Uroxatral): Prescriptions targeting urinary retention comfort.\n• ProstaVive: The premier non-prescription, all-natural daily option formulated with high-potency micronized minerals, anti-inflammatory herbs, and raw tomato lycopene for complete high-bioavailability support."
              },
              {
                q: "What are the best prostate tablets?",
                a: "The 'best' prostate tablets depend heavily on what you are looking to achieve. For rapid, immediate relief from a blocked stream, medical doctors agree that prescription alpha-blockers like Tamsulosin are excellent. For true physical reduction of the gland's tissue over time, 5-alpha reductase inhibitors are the standard drug choice. However, for men seeking an all-natural, highly comprehensive daily formula with zero sexual side effects or dizziness, ProstaVive is regarded as the leading premium option in 2026. ProstaVive combines Saw Palmetto, Pygeum, Zinc, and Vitamin D3 to safely target urinary ease, overnight waking, and cellular tissue health in one daily scoop."
              },
              {
                q: "Is there a cure for enlarged prostate?",
                a: "There is no single permanent 'cure' for an enlarged prostate (Benign Prostatic Hyperplasia, or BPH) because prostate enlargement is a natural, progressive consequence of male hormonal shifts as we age. However, the condition can be extremely well-managed, reversed, or kept in check. Standard treatment plans include prescription medications to relieve flow resistance, advanced minimally-invasive outpatient procedures (like UroLift, Rezūm steam therapy, or laser TURP surgery), and clean daily nutritional therapy. Consistently utilizing premium natural formulas like ProstaVive alongside smart dietary habits is a highly effective way to manage bladder urgency, stop frequent midnight waking, and maintain active, long-term prostate gland comfort."
              },
              {
                q: "What is the best way to take ProstaVive?",
                a: "For optimal results, simply mix one scoop of ProstaVive into a glass of water, or your favorite beverage, once a day. This ensures the proprietary blend of ingredients is absorbed efficiently by your body."
              },
              {
                q: "How long will it take to see results?",
                a: "Most men report feeling a difference in energy levels and sleep patterns within the first 14 days. However, for long-term prostate tissue support, we recommend staying consistent for at least 90-180 days."
              },
              {
                q: "Is ProstaVive safe to take with other medications?",
                a: "ProstaVive is made from natural botanical extracts. However, we always recommend consulting with your primary healthcare provider before starting any new supplement to ensure it's right for your specific health profile."
              },
              {
                q: "Where is ProstaVive manufactured?",
                a: "ProstaVive is manufactured right here in the USA in an FDA-registered and GMP-certified facility. We adhere to the highest quality control standards for safety and potency."
              },
              {
                q: "Will I be billed more than once?",
                a: "Absolutely not. This is a one-time payment. There are no hidden subscription fees or auto-ship programs. You only pay for what you order today."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 md:py-8 text-left flex justify-between items-center hover:bg-slate-50 transition-colors gap-4"
                >
                  <span className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight leading-snug">{faq.q}</span>
                  <Plus className={`text-blue-500 transition-transform shrink-0 ${activeFaq === i ? 'rotate-45' : ''}`} size={24} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-slate-800 text-lg md:text-[20px] leading-relaxed font-semibold">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-7xl font-serif font-black mb-10 uppercase tracking-tighter italic">Ready to Reclaim Your <span className="text-blue-400">Vitality?</span></h2>
          <p className="text-xl md:text-2xl text-blue-100/85 mb-12 max-w-3xl mx-auto italic font-bold leading-relaxed">Join thousands of men who have restored their confidence and sleep with ProstaVive.</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-12 py-6 rounded-2xl text-2xl md:text-3xl font-black hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 group uppercase tracking-tighter">
            Get ProstaVive Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-8 flex items-center justify-center gap-8 opacity-60 grayscale brightness-200">
             <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest"><ShieldCheck size={18} /> 180-Day Guarantee</div>
             <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest"><Truck size={18} /> Fast US Shipping</div>
          </div>
        </div>
      </section>

      {/* Footer follow thhis */}
      <footer className="bg-black text-slate-500 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20 border-b border-white/5 pb-20">
             <div className="lg:col-span-1">
               <div className="text-4xl font-black italic mb-8 tracking-tighter uppercase">
                 <span className="text-blue-400">Prosta</span>
                 <span className="text-white">Vive</span>
               </div>
               <p className="text-sm leading-relaxed font-medium mb-10 italic">The breakthrough botanical solution for male vitality and prostate health restoration.</p>
               <div className="flex gap-4">
                 {[1,2,3].map(i => <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-navy transition-colors cursor-pointer text-white"><Star size={20} /></div>)}
               </div>
             </div>
             <div>
               <h5 className="text-white font-black uppercase text-xs tracking-widest mb-10">Product Links</h5>
               <ul className="space-y-6 font-bold text-sm">
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Home</a></li>
                 <li><a href="#review" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('review')?.scrollIntoView({ behavior: 'smooth' }); }}>Does It Work?</a></li>
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">How It Works</a></li>
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Ingredients</a></li>
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Reviews</a></li>
               </ul>
             </div>
             <div>
               <h5 className="text-white font-black uppercase text-xs tracking-widest mb-10">Legals</h5>
               <ul className="space-y-6 font-bold text-sm">
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Medical Disclaimer</a></li>
                 <li><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Shipping & Returns</a></li>
               </ul>
             </div>
             <div>
               <h5 className="text-white font-black uppercase text-xs tracking-widest mb-10">Contact Us</h5>
               <p className="text-lg font-black text-white mb-2">Support@ProstaVive.com</p>
               <p className="text-sm font-bold opacity-60">1-800-456-7890 (Mon-Fri 9am-6pm EST)</p>
               <div className="mt-8 pt-8 border-t border-white/5">
                 <div className="flex items-center gap-3">
                   <ShieldCheck size={20} className="text-blue-500" />
                   <span className="text-[10px] font-black uppercase tracking-widest">McAfee Secure Site</span>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="text-[10px] uppercase font-black leading-loose tracking-[0.2em] opacity-30 text-center max-w-5xl mx-auto space-y-8">
            <p>The content provided on this website is for informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. Always consult with a healthcare professional before starting any new dietary supplement program, especially if you have a pre-existing medical condition.</p>
            <p>PROSTAVIVE © 2026. ALL RIGHTS RESERVED WORLDWIDE. PROTECTED BY U.S. AND INTERNATIONAL COPYRIGHT LAWS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
