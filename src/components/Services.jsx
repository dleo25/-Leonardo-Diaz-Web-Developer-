import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Database, Search, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: "Páginas Web Profesionales",
    description: "Landing pages modernas y optimizadas para convertir visitantes en clientes. Diseño adaptado a tu marca."
  },
  {
    icon: <Database size={32} />,
    title: "Sistemas Web a Medida",
    description: "Plataformas de gestión para gimnasios, comercios o inventarios. Controla tu negocio desde cualquier lugar."
  },
  {
    icon: <Search size={32} />,
    title: "SEO Básico & Presencia",
    description: "Optimización para que aparezcas en Google y configuración de Google My Business para negocios locales."
  },
  {
    icon: <Wrench size={32} />,
    title: "Mantenimiento y Soporte",
    description: "Actualizaciones, copias de seguridad y resolución de problemas para que tu web siempre funcione perfecta."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-gold-500">Servicios</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones digitales enfocadas en resultados reales para tu negocio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
            >
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-slate-900 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
