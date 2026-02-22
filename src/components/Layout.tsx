import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone, MapPin, Mail, Instagram, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import { cn } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-xs py-3 px-4 hidden lg:flex justify-between items-center relative overflow-hidden">
        <div className="flex items-center gap-8 z-10">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-lime" />
            <span>(000) 000-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-brand-lime" />
            <span>example@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-brand-lime" />
            <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
          </div>
        </div>

        {/* Right side with Lime background shape */}
        <div className="absolute top-0 right-0 bottom-0 w-[300px] bg-brand-lime skew-x-[-20deg] translate-x-10 z-0" />
        
        <div className="flex items-center gap-4 relative z-10 pr-8">
          <a href="#" className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors">
            <Facebook size={12} />
          </a>
          <a href="#" className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors">
            <Twitter size={12} />
          </a>
          <a href="#" className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors">
            <Linkedin size={12} />
          </a>
          <a href="#" className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors">
            <Instagram size={12} />
          </a>
          <a href="#" className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors">
            <Youtube size={12} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center relative overflow-hidden">
               <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-brand-dark/20" />
               <span className="font-bold text-brand-dark relative z-10">IS</span>
            </div>
            <span className="font-bold text-xl text-brand-dark tracking-tight">IKHLAS SUCI</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-brand-dark/70 hover:text-brand-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-brand-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-dark/90 transition-colors shadow-lg shadow-brand-dark/20">
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden bg-white border-t border-brand-gray mt-4"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-brand-dark py-2 border-b border-brand-gray/50 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-dark text-white px-6 py-3 rounded-full font-bold text-sm w-full mt-2">
                Get A Quote
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center">
                <span className="text-brand-dark font-bold text-xl">IS</span>
              </div>
              <span className="font-bold text-xl tracking-tight">IKHLAS SUCI</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Bringing intelligence to facility analysis, territorial management, and socio-environmental solutions with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-colors cursor-pointer">
                <Linkedin size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-brand-lime text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">Institutional</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-lime text-xs uppercase tracking-widest">Solutions For</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">Financial Institutions</li>
              <li className="hover:text-white cursor-pointer">Public Sector</li>
              <li className="hover:text-white cursor-pointer">Industrial Plants</li>
              <li className="hover:text-white cursor-pointer">Legal Offices</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-lime text-xs uppercase tracking-widest">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Address</p>
                <p className="text-sm text-white/80">
                  Lot 123, Industrial Park,<br />
                  Kuala Lumpur, Malaysia
                </p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Phone</p>
                <p className="text-sm text-white/80">+60 3-1234 5678</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Email</p>
                <p className="text-sm text-white/80">contact@isikhlassuci.com.my</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest">
          <p>© 2024 IS Ikhlas Suci Sdn Bhd. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
