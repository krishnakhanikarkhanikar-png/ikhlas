/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Sparkles, 
  Zap, 
  Building2, 
  ShieldCheck, 
  Users, 
  BarChart3,
  ChevronRight,
  Phone,
  MapPin,
  Award,
  FileText,
  Target,
  Search,
  Plus,
  Minus,
  ArrowUpRight,
  Globe
} from 'lucide-react';
import { Navbar, Footer } from './components/Layout';
import { SITE_CONTENT, cn } from './constants';

const IconMap: Record<string, any> = {
  Settings,
  Sparkles,
  Zap,
  Building2
};

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState(SITE_CONTENT.services[0].id);
  const [activeAboutTab, setActiveAboutTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark font-sans selection:bg-brand-lime selection:text-brand-dark">
      <Navbar />
      
      <main>
        {/* Hero Section - Redesigned (Full Width Image) */}
        <section className="relative min-h-[90vh] w-full flex items-center pt-32 pb-32 overflow-visible">
           {/* Background Image */}
           <div className="absolute inset-0 z-0">
             <img
               src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=2000"
               alt="Kuala Lumpur Skyline"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
             {/* Gradient Overlay for text readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
           </div>

           <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-heading font-bold text-brand-dark leading-[1.1] mb-8"
                >
                  Building Confidence, <br />
                  Delivering <span className="inline-block bg-brand-dark text-brand-lime px-6 py-2 rounded-2xl transform -rotate-1 shadow-xl">Reliability.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-2xl text-brand-dark/80 mb-12 leading-relaxed max-w-2xl font-medium"
                >
                  Optimize your building's performance with AI-driven maintenance, energy efficiency, and integrated infrastructure services.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white text-brand-dark text-lg font-bold pl-8 pr-2 py-2 rounded-full shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform group"
                >
                  Get Your Free Scaling Audit
                  <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={24} className="text-brand-dark" />
                  </div>
                </motion.button>
              </div>
           </div>

           {/* Stats Bar - Floating at bottom */}
           <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-6 z-20">
             <div className="max-w-7xl mx-auto bg-brand-dark rounded-[2.5rem] p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               
               <div className="flex flex-wrap justify-center lg:justify-start gap-12 md:gap-20 relative z-10">
                 <div>
                   <div className="text-5xl md:text-6xl font-heading font-bold mb-2">15+</div>
                   <div className="text-lg text-white/80 font-medium">Years of Excellence</div>
                 </div>
                 <div>
                   <div className="text-5xl md:text-6xl font-heading font-bold mb-2">500+</div>
                   <div className="text-lg text-white/80 font-medium">Projects Delivered</div>
                 </div>
                 <div>
                   <div className="text-5xl md:text-6xl font-heading font-bold mb-2">98%</div>
                   <div className="text-lg text-white/80 font-medium">Client Retention</div>
                 </div>
               </div>

               <div className="hidden lg:block w-px h-24 bg-white/10" />

               <div className="text-xl text-white/80 max-w-md font-light leading-relaxed text-center lg:text-left relative z-10">
                 Trusted by Fortune 500 companies for critical infrastructure management.
               </div>
             </div>
           </div>
        </section>

        {/* Most Popular Services - Redesigned */}
        <section className="py-32 px-6 bg-brand-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                  <span className="text-brand-lime font-bold text-xs uppercase tracking-widest">Trending Now</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                  Most Popular<br />Services
                </h2>
              </div>
              <a href="#services" className="group flex items-center gap-2 text-white/70 hover:text-brand-lime transition-colors">
                <span className="text-sm font-bold uppercase tracking-widest">View All Services</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SITE_CONTENT.services.map((service: any, idx: number) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors duration-500"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors">
                      <ArrowUpRight size={20} />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-brand-dark mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                         <Plus size={20} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">{service.title}</h3>
                      <p className="text-white/60 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggestions / Filter Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-6">Service suggestions you might like</h3>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-4 overflow-x-auto pb-2">
                <button className="btn-pill-outline border-brand-dark bg-brand-dark text-white">Newly Added</button>
                <button className="btn-pill-outline">High Efficiency</button>
                <button className="btn-pill-outline">Cost Saving</button>
                <button className="btn-pill-outline">Eco-Friendly</button>
              </div>
              <button className="btn-lime px-6 py-2 text-sm">
                Get a Quote <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Our Services - Redesigned */}
        <section id="services" className="py-32 px-6 bg-white border-t border-brand-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-label mb-4 inline-block">Our Expertise</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">
                Protect Your Facility with<br />Our Specialized Services
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Service List */}
              <div className="lg:col-span-4 space-y-4">
                {SITE_CONTENT.services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={cn(
                      "w-full text-left px-6 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 border",
                      activeServiceId === service.id
                        ? "bg-brand-dark text-white border-brand-dark shadow-lg scale-105"
                        : "bg-white text-brand-dark/70 border-brand-gray hover:border-brand-dark/30 hover:bg-brand-cream"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                      activeServiceId === service.id ? "bg-brand-lime text-brand-dark" : "bg-brand-gray/50 text-brand-dark/50"
                    )}>
                      {(() => {
                        const Icon = IconMap[service.icon] || Settings;
                        return <Icon size={20} />;
                      })()}
                    </div>
                    <span className="font-bold text-lg">{service.title}</span>
                    {activeServiceId === service.id && (
                      <motion.div layoutId="active-indicator" className="ml-auto">
                        <ChevronRight size={20} className="text-brand-lime" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>

              {/* Service Detail Card */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {SITE_CONTENT.services.map((service) => (
                    service.id === activeServiceId && (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-brand-cream rounded-[2.5rem] p-8 md:p-12 border border-brand-gray shadow-xl relative overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                          <div className="image-mask h-[400px] md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
                            <img 
                              src={service.image} 
                              alt={service.title} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          <div className="space-y-6">
                            <h4 className="text-3xl font-heading font-bold text-brand-dark">{service.title}</h4>
                            <p className="text-brand-dark/70 leading-relaxed">
                              {service.description}
                            </p>
                            
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-dark/80">
                                  <CheckCircle2 size={18} className="text-brand-lime fill-brand-lime/20" />
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <div className="pt-6">
                              <button className="btn-lime w-full md:w-auto shadow-lg shadow-brand-lime/20">
                                Learn More <ArrowUpRight size={18} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Redesigned based on reference */}
        <section id="process" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Top Bar */}
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-brand-dark/30 mb-24 border-b border-brand-dark/5 pb-6">
              <span>004</span>
              <span>Process</span>
              <span>Scroll Down</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Headline */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <span className="inline-block bg-brand-lime text-brand-dark font-bold px-4 py-2 text-xs uppercase tracking-wider transform -rotate-3 shadow-lg">
                      What You Get
                    </span>
                  </div>
                  <h2 className="text-6xl md:text-7xl font-heading font-bold leading-[0.9] mb-8">
                    <span className="text-brand-dark/20 block">GETTING</span>
                    <span className="text-brand-dark/20 block">STARTED</span>
                    <span className="text-brand-dark block">IS EASY<span className="text-brand-lime">.</span></span>
                  </h2>
                </motion.div>
              </div>

              {/* Right Column: Steps */}
              <div className="lg:col-span-7 space-y-12">
                {SITE_CONTENT.process.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-baseline border-b border-brand-dark/5 pb-12 hover:border-brand-dark/20 transition-colors">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-cream text-brand-dark/40 font-bold text-sm border border-brand-dark/5 group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors shrink-0">
                        0{idx + 1}
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        <h4 className="text-2xl md:text-3xl font-bold text-brand-dark uppercase tracking-tight group-hover:text-brand-lime transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-brand-dark/60 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Sites Across Malaysia Section - Redesigned */}
        <section className="py-32 px-6 bg-brand-dark text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.1]">
                Expanding Reach<br />
                <span className="text-brand-lime">Across Malaysia.</span>
              </h2>
              <div className="flex flex-col justify-end">
                <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                  IS Ikhlas Suci partners with major industrial and commercial hubs, delivering smarter building solutions from Kuala Lumpur to Kuching.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-t border-white/10 pt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-lime mb-2">
                  <Globe size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Nationwide Coverage</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Active projects in all 13 states and 3 federal territories, ensuring comprehensive service delivery.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-lime mb-2">
                  <Zap size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Rapid Deployment</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Mobilize expert teams to any site within 24 hours for emergency maintenance and support.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-lime mb-2">
                  <ShieldCheck size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Local Compliance</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Fully compliant with local state regulations, environmental standards, and safety protocols.
                </p>
              </div>
            </div>

            {/* Malaysia Map Visualization */}
            <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] flex items-center justify-center">
               <svg viewBox="0 0 800 400" className="w-full h-full max-w-5xl drop-shadow-2xl">
                 <defs>
                   <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                     <circle cx="2" cy="2" r="1.5" className="fill-white/20" />
                   </pattern>
                   <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="5" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                 </defs>
                 
                 {/* Map Group */}
                 <g className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    {/* Peninsular Malaysia Path */}
                    <path 
                      d="M150,100 L170,110 L185,130 L195,180 L200,220 L190,245 L170,235 L155,190 L145,150 L140,120 Z" 
                      fill="url(#dot-pattern)" 
                      stroke="none"
                      className="hover:fill-white/30 transition-all duration-500"
                    />
                    
                    {/* East Malaysia Path */}
                    <path 
                      d="M300,220 L320,200 L360,190 L400,185 L440,180 L460,170 L480,150 L510,145 L530,150 L540,160 L530,180 L500,190 L450,200 L400,215 L350,230 Z" 
                      fill="url(#dot-pattern)" 
                      stroke="none"
                      className="hover:fill-white/30 transition-all duration-500"
                    />
                 </g>

                 {/* Connecting Lines (Abstract) */}
                 <path d="M 180 180 Q 250 150 330 210" stroke="url(#gradient-line)" strokeWidth="1" fill="none" strokeDasharray="4 4" className="opacity-20" />
                 <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#D4F846" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                 </defs>

                 {/* Active Locations */}
                 {/* KL */}
                 <g className="group cursor-pointer" transform="translate(170, 190)">
                   <circle r="8" className="fill-brand-lime/20 animate-ping" />
                   <circle r="3" className="fill-brand-lime relative z-10" />
                   <text y="-15" x="0" textAnchor="middle" className="fill-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">Kuala Lumpur</text>
                 </g>

                 {/* Kuching */}
                 <g className="group cursor-pointer" transform="translate(330, 220)">
                   <circle r="6" className="fill-brand-lime/20 animate-ping delay-300" />
                   <circle r="2.5" className="fill-brand-lime relative z-10" />
                   <text y="-15" x="0" textAnchor="middle" className="fill-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Kuching</text>
                 </g>

                 {/* Kota Kinabalu */}
                 <g className="group cursor-pointer" transform="translate(510, 155)">
                   <circle r="6" className="fill-brand-lime/20 animate-ping delay-700" />
                   <circle r="2.5" className="fill-brand-lime relative z-10" />
                   <text y="-15" x="0" textAnchor="middle" className="fill-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Kota Kinabalu</text>
                 </g>
                 
                 {/* Penang */}
                 <g className="group cursor-pointer" transform="translate(155, 130)">
                   <circle r="2" className="fill-brand-lime/50 animate-pulse delay-500" />
                 </g>
                 
                 {/* Johor Bahru */}
                 <g className="group cursor-pointer" transform="translate(190, 235)">
                   <circle r="2" className="fill-brand-lime/50 animate-pulse delay-200" />
                 </g>
                 
                 {/* Kuantan */}
                 <g className="group cursor-pointer" transform="translate(195, 170)">
                   <circle r="2" className="fill-brand-lime/50 animate-pulse delay-100" />
                 </g>

               </svg>
            </div>
          </div>
        </section>

        {/* Case Studies Section - Our Work */}
        <section id="work" className="py-32 px-6 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="section-label mb-4 inline-block">Our Work</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">
                Work That Drives Results
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SITE_CONTENT.caseStudies.map((study: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer bg-white p-4 rounded-[2.5rem] border border-brand-gray hover:border-brand-dark/20 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="rounded-[2rem] overflow-hidden h-[300px] mb-6 relative">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  <div className="px-4 pb-4">
                    <div className="mb-4">
                      <span className="inline-block bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        {study.category || "Case Study"}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-end gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-brand-dark mb-2 leading-tight group-hover:text-brand-lime transition-colors">
                          {study.title}
                        </h4>
                        <p className="text-sm text-brand-dark/60 font-medium">
                          {study.result}
                        </p>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center text-brand-dark transform group-hover:rotate-45 transition-transform duration-300 shrink-0">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="btn-pill-outline border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-8 py-4">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Grid Layout */}
        <section className="py-32 px-6 bg-brand-cream relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="section-label mb-4 inline-block">Voices</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">
                Trusted by Industry Leaders
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Summary Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 lg:row-span-2 bg-brand-dark text-white p-10 rounded-[2.5rem] flex flex-col justify-between h-full min-h-[500px] relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-7xl font-heading font-bold tracking-tighter">4.9</span>
                    <span className="text-2xl text-white/60">/5</span>
                  </div>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    Based on <strong className="text-white">500+ successful projects</strong> for industrial, commercial, and residential clients.
                  </p>
                  
                  <div className="flex -space-x-4 mb-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-dark bg-brand-gray overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/150?u=${i + 20}`} 
                          alt="Client" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-brand-dark bg-brand-lime flex items-center justify-center text-brand-dark font-bold text-xs">
                      50+
                    </div>
                  </div>

                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} size={20} className="text-brand-lime fill-brand-lime" />
                    ))}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">Trusted Worldwide</p>
                </div>

                <div className="relative z-10 mt-12">
                  <button className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl hover:bg-brand-lime transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Book a Consultation <ArrowUpRight size={18} />
                  </button>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </motion.div>

              {/* Testimonial Cards */}
              {SITE_CONTENT.testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-brand-dark/5 hover:border-brand-dark/10 transition-colors flex flex-col justify-between h-full min-h-[300px]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Sparkles key={i} size={14} className="text-brand-lime fill-brand-lime" />
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark/20">
                        <Plus size={16} />
                      </div>
                    </div>
                    <p className="text-lg text-brand-dark font-medium leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover bg-brand-gray" 
                      referrerPolicy="no-referrer" 
                    />
                    <div>
                      <div className="font-bold text-brand-dark text-base">{testimonial.name}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section - Redesigned */}
        <section id="about" className="py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="lg:col-span-4">
                <span className="section-label mb-6 inline-block">About Us</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-[1.1]">
                  Transforming Facilities with Quality Solutions
                </h2>
                <p className="text-brand-dark/60 mb-8 leading-relaxed">
                  {SITE_CONTENT.about.story}
                </p>
                <button className="btn-lime shadow-lg shadow-brand-lime/20">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>

              {/* Center Column: Image */}
              <div className="lg:col-span-4 h-full min-h-[400px]">
                <div className="rounded-[2.5rem] overflow-hidden h-full shadow-2xl border-4 border-white relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                    alt="Our Team" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                </div>
              </div>

              {/* Right Column: Accordion */}
              <div className="lg:col-span-4 space-y-4">
                {['Mission', 'Vision', 'Values'].map((item) => {
                  const key = item.toLowerCase() as keyof typeof SITE_CONTENT.about;
                  const isActive = activeAboutTab === key;
                  
                  return (
                    <div 
                      key={key}
                      className={cn(
                        "rounded-3xl overflow-hidden transition-all duration-300 border",
                        isActive 
                          ? "bg-brand-dark border-brand-dark shadow-xl" 
                          : "bg-white border-brand-gray hover:border-brand-dark/20"
                      )}
                    >
                      <button
                        onClick={() => setActiveAboutTab(key)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className={cn(
                          "font-bold text-lg",
                          isActive ? "text-white" : "text-brand-dark"
                        )}>
                          Our {item}
                        </span>
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                          isActive ? "bg-brand-lime text-brand-dark" : "bg-brand-gray text-brand-dark/50"
                        )}>
                          {isActive ? <ArrowUpRight size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-8 pt-0">
                              <p className="text-white/70 text-sm leading-relaxed">
                                {Array.isArray(SITE_CONTENT.about[key]) 
                                  ? (SITE_CONTENT.about[key] as string[]).join(', ') 
                                  : SITE_CONTENT.about[key] as string}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Essence Section - Why Choose Us Grid */}
        <section className="py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="section-label mb-4 inline-block">Why Choose Us</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">
                {SITE_CONTENT.brandEssence.headline}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Visuals */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="rounded-[2.5rem] overflow-hidden h-[400px] relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply" />
                  
                  {/* Decorative Sparkles */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-8 left-8 text-brand-lime"
                  >
                    <Sparkles size={48} fill="currentColor" />
                  </motion.div>
                </div>
                
                <div className="bg-brand-lime rounded-[2.5rem] p-8 h-[200px] relative overflow-hidden flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute inset-0 text-brand-dark/10">
                    <path d="M0 50 Q 50 0 100 50 T 200 50" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M0 30 Q 50 -20 100 30 T 200 30" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M0 70 Q 50 20 100 70 T 200 70" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                  <div className="text-brand-dark font-heading font-bold text-4xl relative z-10 text-center leading-tight">
                    We Build<br />Differently
                  </div>
                </div>
              </div>

              {/* Right Column: Feature Grid */}
              <div className="lg:col-span-7 bg-brand-dark rounded-[2.5rem] p-8 md:p-12 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 h-full content-center">
                  {SITE_CONTENT.brandEssence.pillars.map((pillar: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col items-start"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-lime flex items-center justify-center text-brand-dark mb-6 shadow-lg shadow-brand-lime/20">
                        {idx === 0 && <Users size={32} />}
                        {idx === 1 && <CheckCircle2 size={32} />}
                        {idx === 2 && <Award size={32} />}
                        {idx === 3 && <BarChart3 size={32} />}
                      </div>
                      <h4 className="text-xl font-bold mb-3">{pillar.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 px-6 bg-white border-y border-brand-dark/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md">
                <span className="section-label mb-2 inline-block">Accreditations</span>
                <h3 className="text-3xl font-heading font-bold text-brand-dark mb-4">Certified Excellence</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">We maintain the highest industry standards to ensure safety and quality in every project.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-grow">
                {SITE_CONTENT.certifications.map((cert: any, idx: number) => (
                  <div key={idx} className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/5 group hover:border-brand-lime transition-colors">
                    <Award className="text-brand-lime mb-4 group-hover:scale-110 transition-transform" size={24} />
                    <div className="font-bold text-brand-dark text-sm mb-1">{cert.name}</div>
                    <div className="text-[10px] text-brand-dark/40 font-bold uppercase tracking-wider">{cert.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section - Did You Know */}
        <section className="py-32 px-6 bg-brand-cream overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-brand-lime" />
                  <div className="w-3 h-3 rounded-l-full bg-brand-dark" />
                  <span className="font-bold text-brand-dark ml-2">Industry Insights</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark leading-tight">
                  Did You Know?
                </h2>
              </div>
              <p className="text-brand-dark/60 max-w-md text-lg leading-relaxed">
                Understanding the impact of facility management on your bottom line is the first step to optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SITE_CONTENT.insights.map((insight: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full relative group"
                >
                  <div className="p-8 flex-grow relative z-10">
                    <div className="absolute top-4 right-4 text-9xl font-bold text-brand-gray/30 opacity-50 select-none pointer-events-none">
                      0{idx + 1}
                    </div>
                    <h4 className="text-2xl font-bold text-brand-dark mb-4 relative z-10">{insight.title}</h4>
                    <p className="text-brand-dark/60 leading-relaxed relative z-10">
                      {insight.description}
                    </p>
                  </div>
                  
                  <div className="bg-brand-dark text-white p-6 flex justify-between items-center relative overflow-hidden">
                    {/* Diagonal lines pattern */}
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 12px)' }} 
                    />
                    
                    <span className="font-bold text-sm tracking-widest relative z-10">FACT</span>
                    <span className="font-bold text-sm tracking-widest relative z-10">0{idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Redesigned */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-xs font-bold uppercase tracking-widest">
                    / FAQS
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                  Frequently asked question
                </h2>
                <p className="text-brand-dark/60 text-lg leading-relaxed max-w-lg">
                  Here's everything you need to know to get started, manage your account, and troubleshoot the most frequent issues.
                </p>
              </div>
              
              <button className="btn-secondary bg-brand-blue text-white hover:bg-brand-blue/90 border-transparent px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-blue/20 transition-all transform hover:scale-105">
                View all
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {SITE_CONTENT.faqs.slice(0, 3).map((faq: any, idx: number) => {
                  const isActive = activeFaq === idx;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={cn(
                        "rounded-[2rem] p-8 transition-all duration-300 cursor-pointer border",
                        isActive 
                          ? "bg-white shadow-xl border-brand-dark/5" 
                          : "bg-brand-gray/30 border-transparent hover:bg-brand-gray/50"
                      )}
                      onClick={() => setActiveFaq(isActive ? null : idx)}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <h4 className={cn("text-lg font-bold pr-8", isActive ? "text-brand-dark" : "text-brand-dark/80")}>
                          {faq.question}
                        </h4>
                        <div className="shrink-0 text-brand-dark/50">
                          {isActive ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-brand-dark/60 leading-relaxed text-sm">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {SITE_CONTENT.faqs.slice(3, 6).map((faq: any, idx: number) => {
                  const actualIdx = idx + 3;
                  const isActive = activeFaq === actualIdx;
                  return (
                    <motion.div 
                      key={actualIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: actualIdx * 0.1 }}
                      className={cn(
                        "rounded-[2rem] p-8 transition-all duration-300 cursor-pointer border",
                        isActive 
                          ? "bg-white shadow-xl border-brand-dark/5" 
                          : "bg-brand-gray/30 border-transparent hover:bg-brand-gray/50"
                      )}
                      onClick={() => setActiveFaq(isActive ? null : actualIdx)}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <h4 className={cn("text-lg font-bold pr-8", isActive ? "text-brand-dark" : "text-brand-dark/80")}>
                          {faq.question}
                        </h4>
                        <div className="shrink-0 text-brand-dark/50">
                          {isActive ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-brand-dark/60 leading-relaxed text-sm">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blogs" className="py-32 px-6 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-brand-lime mix-blend-multiply" />
                    <div className="w-6 h-6 rounded-full bg-white mix-blend-overlay" />
                  </div>
                  <span className="text-white/80 font-medium ml-2">News & Blogs</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                  Our Latest<br />News & Blogs
                </h2>
              </div>
              
              <button className="bg-white text-brand-dark hover:bg-brand-lime hover:text-brand-dark px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 group">
                View All Blogs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SITE_CONTENT.blogs.map((blog: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#1A2C24] rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-white/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-brand-lime text-brand-dark text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-brand-lime transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">
                      {blog.description}
                    </p>
                    
                    <a href={blog.link} className="inline-flex items-center gap-2 text-brand-lime font-bold text-sm hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-brand-blue rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Optimize Your Facility?</h2>
              <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
                Join hundreds of corporate clients who trust IS Ikhlas Suci for their facility management and MEP needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-10 py-4">Request a Free Audit</button>
                <button className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-lg transition-all">Contact Sales</button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-8 text-slate-400 text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-yellow" /> 24/7 Support</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-yellow" /> Certified Engineers</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-yellow" /> Data-Driven Insights</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
