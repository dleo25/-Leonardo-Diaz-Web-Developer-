import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 border-2 border-gold-500 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <img
                src="/leonardo-profile.png"
                alt="Leonardo Díaz"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 relative z-10 shadow-xl group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre <span className="text-gold-500">Mí</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Soy Leonardo Díaz, desarrollador web apasionado por crear soluciones que funcionen. 
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Empecé creando un sistema completo para un gimnasio local, donde aprendí que la tecnología 
              solo es útil si resuelve problemas reales. Hoy ayudo a otros negocios a tener su propia 
              presencia web y a simplificar su gestión digital sin dolores de cabeza.
            </p>
            
            <div className="flex justify-center md:justify-start gap-8 text-center md:text-left">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">+3</span>
                <span className="text-xs text-gold-500 uppercase tracking-wider">Años Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">100%</span>
                <span className="text-xs text-gold-500 uppercase tracking-wider">Compromiso</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
