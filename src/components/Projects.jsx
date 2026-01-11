import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <span className="text-gold-500">Destacados</span>
          </h2>
          <p className="text-slate-400">
            Casos de éxito donde la tecnología resolvió problemas reales.
          </p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:scale-[1.02] transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10" />
              <img
                src="/gym-demo.png"
                alt="Sistema de Gestión Integral para Gimnasio - Explosive Quality"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-gold-500 font-bold tracking-wider text-sm mb-2 uppercase">Caso de Éxito</div>
              <h3 className="text-3xl font-bold mb-4">Sistema de Gestión Integral para Gimnasio</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Una plataforma completa diseñada para automatizar la administración diaria. 
                Permite el control de alumnos, gestión de pagos recurrentes, seguimiento de rutinas 
                y métricas de progreso. Eliminó el uso de papel y planillas de Excel desorganizadas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['Perfiles de Alumnos', 'Control de Pagos', 'Retos y Cronómetro', 'Gestión Interna'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle size={16} className="text-gold-500" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['React', 'Node.js', 'Database', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-fit flex items-center gap-2 text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors group">
                Ver detalles del proyecto
                <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
