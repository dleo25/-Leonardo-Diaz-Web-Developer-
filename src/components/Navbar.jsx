import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', to: 'services' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Proceso', to: 'workflow' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-gold-500/50 overflow-hidden group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300">
            <img src="/logo-ld.png" alt="Logo Leonardo Díaz" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold-100 transition-colors">
            Leonardo <span className="text-gold-500 group-hover:text-gold-400">Díaz</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-slate-300 hover:text-gold-400 cursor-pointer transition-all duration-300 text-sm font-medium tracking-wide hover:scale-110 hover:shadow-[0_0_10px_rgba(212,175,55,0.3)] px-2 py-1 rounded"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-2 border border-gold-500 text-gold-500 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all duration-300 font-semibold text-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          >
            Hablemos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-gold-400 text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 border border-gold-500 text-gold-500 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all font-semibold"
              >
                Hablemos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
