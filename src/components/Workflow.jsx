import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileText, PenTool, Globe, Settings, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { icon: <MessageSquare size={24} />, title: "Hablamos", desc: "Entiendo tus necesidades" },
  { icon: <FileText size={24} />, title: "Propuesta", desc: "Planifico la solución" },
  { icon: <PenTool size={24} />, title: "Borrador", desc: "Te muestro el diseño" },
  { icon: <Globe size={24} />, title: "Online", desc: "Lanzamos tu web" },
  { icon: <Settings size={24} />, title: "Soporte", desc: "Mantenimiento continuo" },
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(-1); // -1 means animation hasn't started
  const [visibleArrows, setVisibleArrows] = useState([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && activeStep === -1) {
      // Start the sequence
      runSequence();
    }
  }, [isInView]);

  const runSequence = async () => {
    // Step 0
    setActiveStep(0);
    
    for (let i = 0; i < steps.length - 1; i++) {
      // Wait 2 seconds with current step active
      await new Promise(r => setTimeout(r, 2000));
      
      // Show arrow
      setVisibleArrows(prev => [...prev, i]);
      
      // Wait 0.5 seconds for arrow animation
      await new Promise(r => setTimeout(r, 500));
      
      // Activate next step (this will shrink previous one via React state)
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
            const isVisible = index <= activeStep; // Steps remain visible after being active

            return (
              <React.Fragment key={index}>
                {/* Paso Individual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    scale: isActive ? 1.3 : (isVisible ? 1 : 0.8), // Big when active, normal when passed
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
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: visibleArrows.includes(index) ? 1 : 0,
                      scale: visibleArrows.includes(index) ? 1.5 : 0, // Flecha más grande (1.5x)
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex items-center justify-center text-gold-500 z-0 my-4 md:my-0 relative"
                  >
                    {/* Glow effect background */}
                    <div className={`absolute inset-0 bg-gold-500/20 blur-xl rounded-full transition-opacity duration-500 ${visibleArrows.includes(index) ? 'opacity-100' : 'opacity-0'}`} />
                    
                    {/* Flecha Desktop (Horizontal) */}
                    <div className="hidden md:block drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                       <ArrowRight size={32} strokeWidth={3} />
                    </div>
                    {/* Flecha Móvil (Vertical) */}
                    <div className="md:hidden drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                       <ArrowDown size={32} strokeWidth={3} />
                    </div>
                  </motion.div>
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
