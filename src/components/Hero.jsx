import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Disponible para nuevos proyectos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Desarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">páginas web</span> y sistemas para negocios locales.
          </h1>
          
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            Ayudo a gimnasios y comercios a tener presencia online y organizar su día a día sin complicaciones técnicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-gold-500 text-slate-900 rounded-lg font-bold hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            >
              Trabajemos juntos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 border border-gold-500/30 text-gold-500 rounded-lg font-bold hover:bg-gold-500/10 transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:border-gold-500"
            >
              Ver ejemplos
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gold-500/10 border border-slate-800 group hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Web Development" 
              className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 z-20 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 flex items-center gap-4"
            >
              <div className="p-3 bg-gold-500/20 rounded-lg text-gold-500">
                <Code size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Especialidad</p>
                <p className="font-semibold text-white">Sistemas a medida & Landing Pages</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
