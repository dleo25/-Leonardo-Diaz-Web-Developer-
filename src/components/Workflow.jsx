import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileText, PenTool, Globe, Settings, ArrowDown } from 'lucide-react';

const steps = [
  { icon: <MessageSquare size={24} />, title: "Hablamos", desc: "Entiendo tus necesidades" },
  { icon: <FileText size={24} />, title: "Propuesta", desc: "Planifico la solución" },
  { icon: <PenTool size={24} />, title: "Borrador", desc: "Te muestro el diseño" },
  { icon: <Globe size={24} />, title: "Online", desc: "Lanzamos tu web" },
  { icon: <Settings size={24} />, title: "Soporte", desc: "Mantenimiento continuo" },
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [visibleArrows, setVisibleArrows] = useState([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && activeStep === -1) {
      runSequence();
    }
  }, [isInView]);

  const runSequence = async () => {
    setActiveStep(0);
    
    for (let i = 0; i < steps.length - 1; i++) {
      await new Promise(r => setTimeout(r, 2000));
      setVisibleArrows(prev => [...prev, i]);
      await new Promise(r => setTimeout(r, 1000)); // Esperar un poco más para que se dibuje la flecha
      setActiveStep(i + 1);
    }
  };

  return (
    <section id="workflow" className="py-24 bg-slate-800 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo <span className="text-gold-500">Trabajamos?</span>
          </h2>
          <p className="text-slate-400">Un proceso paso a paso.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center relative gap-4 md:gap-0 min-h-[400px] md:min-h-[200px]">
          
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isVisible = index <= activeStep;

            return (
              <React.Fragment key={index}>
                {/* Paso Individual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    scale: isActive ? 1.3 : (isVisible ? 1 : 0.8),
                    filter: isActive ? "drop-shadow(0 0 15px rgba(212, 175, 55, 0.3))" : "none",
                    y: isVisible ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative z-10 flex flex-col items-center text-center w-full md:w-40 transition-colors duration-500 ${isActive ? 'text-gold-400' : 'text-slate-400'}`}
                >
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-500 shadow-lg ${
                    isActive 
                      ? 'bg-slate-900 border-gold-500 text-gold-500 shadow-gold-500/20' 
                      : (isVisible ? 'bg-slate-900 border-slate-700 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-600')
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-1 ${isActive || isVisible ? 'text-white' : 'text-slate-600'}`}>{step.title}</h3>
                  <p className="text-sm">{step.desc}</p>
                </motion.div>

                {/* Flecha Animada (Solo si no es el último elemento) */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center text-gold-500 z-0 my-4 md:my-0 relative w-full md:w-auto md:flex-1">
                    {/* Flecha Desktop (Larga y dibujada) */}
                    <div className="hidden md:block w-full px-2">
                       <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <motion.path
                            d="M0,10 L95,10"
                            fill="transparent"
                            strokeWidth="2"
                            stroke="#D4AF37"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: visibleArrows.includes(index) ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          />
                          <motion.path
                            d="M90,5 L100,10 L90,15"
                            fill="transparent"
                            strokeWidth="2"
                            stroke="#D4AF37"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: visibleArrows.includes(index) ? 1 : 0 }}
                            transition={{ delay: 0.7, duration: 0.2 }}
                          />
                       </svg>
                    </div>

                    {/* Flecha Móvil (Vertical) */}
                    <motion.div 
                       initial={{ opacity: 0, scale: 0 }}
                       animate={{ 
                         opacity: visibleArrows.includes(index) ? 1 : 0,
                         scale: visibleArrows.includes(index) ? 1 : 0,
                       }}
                       className="md:hidden drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                    >
                       <ArrowDown size={32} strokeWidth={3} />
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
