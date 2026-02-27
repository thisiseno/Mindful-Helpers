/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Users, 
  FileText, 
  RefreshCcw, 
  Home, 
  Plane, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  MessageCircle,
  Star,
  ShieldCheck,
  Clock,
  DollarSign,
  Brain,
  Award,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-border-subtle">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-blue-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-primary/20 group-hover:scale-105 transition-transform">
          <Home size={22} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg text-navy leading-none">Mindful Helpers</span>
          <span className="text-[10px] text-blue-primary font-bold tracking-widest uppercase mt-0.5">Singapore</span>
        </div>
      </a>
      
      <div className="hidden lg:flex items-center gap-10">
        {['Services', 'How It Works', 'Why Us', 'Reviews'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
            className="text-sm font-semibold text-navy/70 hover:text-blue-primary transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-primary transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <a href="tel:+6584168169" className="hidden sm:flex items-center gap-2 text-sm font-bold text-navy hover:text-blue-primary transition-colors">
          <Phone size={16} /> 8416 8169
        </a>
        <a href="#lead-form" className="btn-primary py-2.5 px-6 text-sm">
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-cream">
    {/* Background Accents */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
    <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs font-bold uppercase tracking-widest mb-8">
          <Award size={14} /> MOM-Licensed Agency · Trusted Since 2015
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-navy leading-[1.05] mb-8">
          Your Home <br />
          <span className="text-blue-primary italic font-serif">Deserves</span> <br />
          the Best Care.
        </h1>
        <p className="text-xl text-navy/60 mb-10 max-w-xl leading-relaxed">
          Singapore's premier domestic helper agency. We match your family with vetted, compassionate helpers who bring peace of mind to your household.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#lead-form" className="btn-primary px-10 py-4 text-lg group">
            Find Your Helper <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://wa.me/6584168169" className="btn-outline px-10 py-4 text-lg">
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-navy/10 flex flex-wrap gap-8 opacity-60">
          {['MOM Licensed', '4.9/5 Rating', 'Transparent Fees', 'Fast Processing'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-bold text-navy">
              <CheckCircle2 size={16} className="text-blue-primary" /> {text}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5"
      >
        <div id="lead-form" className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-navy/5 border border-border-subtle relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-primary to-blue-sky"></div>
          <h3 className="text-2xl font-bold text-navy mb-2">Free Consultation</h3>
          <p className="text-sm text-navy/50 mb-8">No obligations. We'll find your perfect match.</p>
          
          <form className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-navy/40 uppercase tracking-widest ml-1">Full Name</label>
              <input type="text" placeholder="Sarah Tan" className="w-full bg-cream border border-border-subtle rounded-xl px-4 py-3.5 text-navy outline-none focus:border-blue-primary transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-navy/40 uppercase tracking-widest ml-1">Mobile Number</label>
              <input type="tel" placeholder="+65 9XXX XXXX" className="w-full bg-cream border border-border-subtle rounded-xl px-4 py-3.5 text-navy outline-none focus:border-blue-primary transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-navy/40 uppercase tracking-widest ml-1">Service Needed</label>
              <select className="w-full bg-cream border border-border-subtle rounded-xl px-4 py-3.5 text-navy outline-none focus:border-blue-primary transition-colors appearance-none">
                <option>New Hiring (FDW)</option>
                <option>Transfer Maid</option>
                <option>Work Permit Renewal</option>
                <option>Replacement Support</option>
              </select>
            </div>
            <button type="submit" className="btn-gold w-full py-4 mt-4">
              Get My Free Match
            </button>
          </form>
          <p className="text-[10px] text-navy/30 text-center mt-6 italic">Your information is secure and will never be shared.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-navy py-16">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
      {[
        { num: "800+", label: "Families Served" },
        { num: "10+", label: "Years Experience" },
        { num: "97%", label: "Success Rate" },
        { num: "4.9★", label: "Google Rating" },
      ].map((stat, i) => (
        <div key={i} className="text-center group">
          <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{stat.num}</div>
          <div className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const WhyUs = () => (
  <section id="why-us" className="section-container bg-white">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="rounded-[3rem] overflow-hidden aspect-[4/5] relative shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800" 
            alt="Happy family" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="text-white text-sm italic leading-relaxed">
              "Mindful Helpers SG supports families with clear guidance, ethical hiring practices, and dependable follow-up."
            </p>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold rounded-full flex flex-col items-center justify-center text-navy shadow-2xl rotate-12">
          <span className="text-3xl font-bold leading-none">MOM</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Licensed</span>
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        <span className="text-xs font-bold text-blue-primary uppercase tracking-[0.2em] mb-4 block">Why Choose Us</span>
        <h2 className="text-5xl md:text-6xl font-bold text-navy mb-8 leading-tight">A Partner in Your <br />Family's Wellbeing.</h2>
        <p className="text-lg text-navy/60 mb-12 leading-relaxed">
          We don't just fill positions — we build relationships. Every placement is backed by ethical hiring, honest communication, and long-term support.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: <DollarSign size={24} />, title: "Transparent Fees", desc: "No hidden costs. Full breakdown before you commit." },
            { icon: <Brain size={24} />, title: "Mindful Matching", desc: "We profile household needs and lifestyle compatibility." },
            { icon: <Clock size={24} />, title: "Fast Processing", desc: "Efficient MOM paperwork handled by our experts." },
            { icon: <ShieldCheck size={24} />, title: "Post-Placement", desc: "Ongoing support to ensure a smooth transition." },
          ].map((pillar, i) => (
            <div key={i} className="p-6 rounded-2xl bg-cream border border-border-subtle group hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h4 className="font-bold text-navy mb-2">{pillar.title}</h4>
              <p className="text-xs text-navy/50 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="section-container bg-cream rounded-[4rem] my-10">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div className="max-w-2xl">
        <span className="text-xs font-bold text-blue-primary uppercase tracking-[0.2em] mb-4 block">Our Services</span>
        <h2 className="text-5xl md:text-6xl font-bold text-navy leading-tight">Everything Your <br />Household Requires.</h2>
      </div>
      <a href="#lead-form" className="btn-outline group">
        View All Services <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { icon: "🌟", title: "New Hiring", desc: "Source trained domestic workers from Indonesia and Myanmar through ethical partners." },
        { icon: "📄", title: "Work Permits", desc: "Complete support for applications, renewals, and all MOM compliance matters." },
        { icon: "🔄", title: "Transfer Maids", desc: "Pre-experienced helpers in Singapore ready for immediate deployment." },
        { icon: "🤝", title: "Replacement", desc: "Quick and stress-free replacement matching when arrangements don't work out." },
        { icon: "✈️", title: "Home Leave", desc: "End-to-end assistance with documentation, travel, and MOM applications." },
        { icon: "🏠", title: "Repatriation", desc: "Compassionate end-of-employment services including official documentation." },
      ].map((s, i) => (
        <div key={i} className="card-modern group">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</div>
          <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
          <p className="text-sm text-navy/50 leading-relaxed mb-6">{s.desc}</p>
          <a href="#lead-form" className="text-xs font-bold text-blue-primary flex items-center gap-1.5 hover:gap-3 transition-all">
            Learn more <ArrowRight size={14} />
          </a>
        </div>
      ))}
    </div>
  </section>
);

const Process = () => (
  <section id="how-it-works" className="section-container bg-white">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-xs font-bold text-blue-primary uppercase tracking-[0.2em] mb-4 block">The Journey</span>
      <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">Placed in 4 Simple Steps.</h2>
      <p className="text-lg text-navy/50">From initial consultation to your helper's first day — we guide you every step of the way.</p>
    </div>
    
    <div className="grid md:grid-cols-4 gap-12 relative">
      <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-navy/5"></div>
      {[
        { num: "01", title: "Consultation", desc: "Tell us your household needs and preferences." },
        { num: "02", title: "Matching", desc: "We handpick candidates based on personality and skills.", active: true },
        { num: "03", title: "Interview", desc: "Meet shortlisted helpers via video or in-person." },
        { num: "04", title: "Placement", desc: "We handle all paperwork and onboarding." },
      ].map((step, i) => (
        <div key={i} className="text-center relative z-10">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 border-2 transition-all duration-500 ${step.active ? 'bg-blue-primary border-blue-primary text-white shadow-2xl shadow-blue-primary/30 scale-110' : 'bg-white border-navy/5 text-navy/20'}`}>
            {step.num}
          </div>
          <h4 className="text-lg font-bold text-navy mb-3">{step.title}</h4>
          <p className="text-xs text-navy/40 leading-relaxed px-4">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="section-container bg-cream rounded-[4rem] my-10">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-xs font-bold text-blue-primary uppercase tracking-[0.2em] mb-4 block">Testimonials</span>
      <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">Trusted by Families.</h2>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Sarah Lim", meta: "Mother of 3 · Bishan", text: "Mindful Helpers found us the perfect fit for our family. The whole process was smooth and professional. Our helper has been with us for 3 years now." },
        { name: "Marcus Teo", meta: "Working Dad · Tampines", text: "Completely upfront about every cost from the start. No surprises. They also followed up to make sure we were happy with the placement." },
        { name: "Jessica Wong", meta: "Sandwich Generation · Bukit Timah", text: "I needed a transfer maid quickly. They found a great match in under a week and handled all the MOM paperwork efficiently." },
      ].map((testi, i) => (
        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-border-subtle relative">
          <div className="flex gap-1 text-gold mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/70 text-sm italic leading-relaxed mb-8">"{testi.text}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">{testi.name[0]}</div>
            <div>
              <div className="text-sm font-bold text-navy">{testi.name}</div>
              <div className="text-[10px] text-navy/40 font-bold uppercase tracking-widest mt-0.5">{testi.meta}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CTABand = () => (
  <section className="section-container">
    <div className="bg-blue-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Ready to Find Your <br />Perfect Match?</h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">Join 800+ Singapore families who trust Mindful Helpers. Start with a free consultation today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#lead-form" className="btn-gold px-12 py-5 text-lg">Get Started Now</a>
          <a href="https://wa.me/6584168169" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-xl font-bold hover:bg-white/20 transition-all">WhatsApp Us</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-10 px-6 border-t border-border-subtle">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white">
              <Home size={22} />
            </div>
            <span className="font-bold text-xl text-navy">Mindful Helpers</span>
          </div>
          <p className="text-navy/50 text-sm leading-relaxed mb-8 max-w-sm">Singapore's ethical, MOM-licensed domestic helper agency. Caring hands — for your home and your heart.</p>
          <div className="flex gap-4">
            {[Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl border border-border-subtle flex items-center justify-center text-navy hover:bg-blue-primary hover:text-white hover:border-blue-primary transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-navy uppercase tracking-[0.2em] mb-8">Services</h4>
          <ul className="space-y-4 text-sm text-navy/60">
            {['New Hiring', 'Transfer Maids', 'Work Permits', 'Replacement', 'Home Leave'].map((item) => (
              <li key={item}><a href="#" className="hover:text-blue-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-navy uppercase tracking-[0.2em] mb-8">Contact</h4>
          <ul className="space-y-4 text-sm text-navy/60">
            <li className="flex items-center gap-3"><Phone size={16} className="text-blue-primary" /> +65 8416 8169</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-blue-primary" /> mindfulhelpersg@gmail.com</li>
            <li className="flex items-center gap-3"><Star size={16} className="text-blue-primary" /> MOM License 25C0181</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-border-subtle flex flex-col md:row justify-between items-center gap-4 text-[10px] font-bold text-navy/30 uppercase tracking-widest">
        <span>© 2026 Mindful Helpers SG. All rights reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-primary selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Services />
      <Process />
      <Testimonials />
      <CTABand />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6584168169" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform z-50 text-3xl"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
