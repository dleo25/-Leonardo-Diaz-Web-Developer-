import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para empezar?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Hablemos sobre tu proyecto. Sin compromisos.
          </p>

          <a 
            href="https://wa.me/5493584388093" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-slate-900 rounded-full font-bold text-lg hover:bg-gold-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            <MessageCircle size={24} />
            Contactar por WhatsApp
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 border-t border-slate-900 pt-12">
          <a href="https://instagram.com/leoddiazz_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-slate-900 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 text-pink-500 transition-colors group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              <Instagram size={28} />
            </div>
            <span className="text-slate-300 font-medium group-hover:text-gold-400 transition-colors">@leoddiazz_</span>
          </a>

          <a href="mailto:dleo22225@gmail.com" className="flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-slate-900 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 text-blue-400 transition-colors group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <Mail size={28} />
            </div>
            <span className="text-slate-300 font-medium group-hover:text-gold-400 transition-colors">dleo22225@gmail.com</span>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-slate-900 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 text-green-500 transition-colors group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <MessageCircle size={28} />
            </div>
            <span className="text-slate-300 font-medium group-hover:text-gold-400 transition-colors">+54 9 358 438-8093</span>
          </div>
        </div>

        <div className="text-slate-600 text-sm">
          <p>© {currentYear} Leonardo Díaz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
