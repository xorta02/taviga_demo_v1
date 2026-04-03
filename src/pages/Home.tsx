import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Factory, Zap, ShieldCheck, ChevronRight, ChevronLeft, Building2, Globe2, Handshake, MapPin } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const slides = [
  "/slide1.jpg",
  "/slide2.webp",
  "/slide3.jpg",
  "/slide4.jpg",
  "/slide5.jpg"
];

export default function Home() {
  useDocumentTitle("Inicio", "Soluciones industriales y representación técnica para proyectos de alto impacto en México.");
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative bg-slate-950 text-white overflow-hidden min-h-[90vh] flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 8, ease: "linear" }
              }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide]} 
                alt={`Industrial background ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                loading={currentSlide === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40 z-10"></div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute z-20 inset-y-0 left-0 flex items-center px-2 md:px-6 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/10 text-white/40 hover:bg-black/40 hover:text-white transition-all backdrop-blur-sm opacity-0 md:opacity-100 group-hover:opacity-100"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute z-20 inset-y-0 right-0 flex items-center px-2 md:px-6 pointer-events-none">
          <button 
            onClick={nextSlide}
            className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/10 text-white/40 hover:bg-black/40 hover:text-white transition-all backdrop-blur-sm opacity-0 md:opacity-100 group-hover:opacity-100"
            aria-label="Siguiente slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute z-20 bottom-8 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-taviga-orange w-8" : "bg-white/40 hover:bg-white/70 w-2"
              }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-32 md:pt-32 md:pb-40 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-taviga-darkblue/40 border border-taviga-darkblue/60 text-taviga-blue text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-taviga-blue animate-pulse"></span>
              Socio estratégico en México
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white drop-shadow-lg">
              Soluciones industriales y representación técnica para proyectos de alto impacto.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Integramos tecnología de clase mundial, ingeniería especializada y soporte comercial para los sectores de energía, refinación, industria azucarera y manufactura pesada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contacto" 
                className="inline-flex justify-center items-center px-6 py-3.5 bg-taviga-orange hover:bg-taviga-orange-hover text-white font-medium rounded-sm transition-colors shadow-lg"
              >
                Hablemos de su proyecto
              </Link>
              <Link 
                to="/soluciones" 
                className="inline-flex justify-center items-center px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-medium rounded-sm transition-colors border border-slate-700 backdrop-blur-sm shadow-lg"
              >
                Conocer capacidades
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-taviga-darkblue py-12 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-taviga-blue/30">
            
            <div className="px-6 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-taviga-orange-light/15 transition-colors duration-300">
                <Building2 size={28} className="text-taviga-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-taviga-orange-light transition-colors">Proyectos EPC</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Soporte a integradores y desarrolladores</p>
            </div>

            <div className="px-6 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-taviga-orange-light/15 transition-colors duration-300">
                <Globe2 size={28} className="text-taviga-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-taviga-orange-light transition-colors">Tecnología de Marcas Globales</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Representación de fabricantes internacionales</p>
            </div>

            <div className="px-6 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-taviga-orange-light/15 transition-colors duration-300">
                <Handshake size={28} className="text-taviga-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-taviga-orange-light transition-colors">Acompañamiento Integral</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Soporte técnico y comercial en todo el proyecto</p>
            </div>

            <div className="px-6 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-taviga-orange-light/15 transition-colors duration-300">
                <MapPin size={28} className="text-taviga-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-taviga-orange-light transition-colors">México</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">Cobertura nacional</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Conectamos la mejor tecnología global con la realidad industrial de México.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Taviga Representaciones Industriales no es solo un proveedor de equipos. Somos un aliado técnico-comercial que entiende la complejidad de las operaciones en planta y los requerimientos de proyectos EPC.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Acompañamiento desde la detección de la oportunidad hasta la ejecución.",
                  "Respaldo directo de fabricantes internacionales líderes.",
                  "Visión de ingeniería aplicada a la rentabilidad del proyecto."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-taviga-green shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/nosotros" className="inline-flex items-center gap-2 text-taviga-blue font-semibold hover:text-taviga-darkblue transition-colors group">
                Conoce más sobre nosotros
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="aspect-square md:aspect-[4/3] bg-slate-100 rounded-sm overflow-hidden relative">
                <img 
                  src="/taka.png" 
                  alt="Soporte en sitio y consultoría especializada" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-white font-medium text-lg drop-shadow-md">Soporte en sitio y consultoría especializada</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-sm -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-50 rounded-sm -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Capacidades Core</h2>
            <p className="text-lg text-slate-600">
              Estructuramos soluciones integrales para los desafíos más exigentes de la industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={32} className="text-taviga-darkblue" />,
                title: "Representación de Marcas",
                desc: "Comercialización y soporte local para fabricantes internacionales de equipos de proceso, generación y transmisión de potencia."
              },
              {
                icon: <Zap size={32} className="text-taviga-darkblue" />,
                title: "Integración de Proyectos",
                desc: "Desarrollo de soluciones llave en mano, coordinando ingeniería, suministro de equipos y soporte en la ejecución."
              },
              {
                icon: <Factory size={32} className="text-taviga-darkblue" />,
                title: "Asesoría Técnica",
                desc: "Consultoría de ingeniería y procesos para optimización de plantas, selección de tecnología y viabilidad de proyectos."
              }
            ].map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-6 bg-taviga-blue/10 w-16 h-16 rounded-sm flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {cap.desc}
                </p>
                <Link to="/soluciones" className="inline-flex items-center text-sm font-semibold text-taviga-blue hover:text-taviga-darkblue transition-colors">
                  Ver detalles <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Sectores que Atendemos</h2>
              <p className="text-slate-400 text-lg">
                Entendemos los estándares, normativas y exigencias operativas de las industrias clave en la región.
              </p>
            </div>
            <Link to="/sectores" className="inline-flex items-center gap-2 text-white font-medium hover:text-taviga-orange transition-colors shrink-0">
              Ver todos los sectores <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Oil & Gas y Refinación", desc: "Soluciones alineadas con estándares API para la industria de oil & gas y refinación." },
              { name: "Generación de Energía", desc: "Turbinas de vapor, cogeneración y transmisión de potencia." },
              { name: "Industria Azucarera", desc: "Optimización de molienda, vapor y automatización de procesos." },
              { name: "Manufactura Pesada", desc: "Soluciones de empaque, paletizado y control de emisiones." }
            ].map((sector, i) => (
              <div key={i} className="group relative overflow-hidden bg-slate-900 rounded-sm border border-slate-800 p-6 hover:border-taviga-blue/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-taviga-darkblue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{sector.name}</h3>
                <p className="text-sm text-slate-400 relative z-10">{sector.desc}</p>
                <div className="mt-6 flex justify-end relative z-10">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-taviga-orange transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-taviga-darkblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">¿Tiene un requerimiento técnico o comercial?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Nuestro equipo de ingeniería está listo para analizar su proyecto, proponer la tecnología adecuada y estructurar una oferta competitiva.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contacto" 
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-taviga-darkblue font-bold rounded-sm hover:bg-slate-50 transition-colors shadow-lg"
            >
              Contactar a un asesor
            </Link>
            <a 
              href="mailto:sales@taviga.com.mx" 
              className="inline-flex justify-center items-center px-8 py-4 bg-taviga-orange text-white font-bold rounded-sm hover:bg-taviga-orange-hover transition-colors border border-taviga-orange"
            >
              Enviar correo directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
