import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Droplet, Zap, Wheat, Cog, Factory, ArrowRight } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Sectors() {
  useDocumentTitle("Sectores", "Atendemos a la industria de Oil & Gas, Energía, Azucarera, Procesos y Manufactura Pesada.");

  const sectors = [
    {
      id: "oil-gas",
      icon: <Droplet size={40} />,
      title: "Oil & Gas y Refinación",
      challenges: "Ambientes corrosivos, altas presiones, cumplimiento estricto de normativas API y ASME, y necesidad de operación continua sin fallas.",
      support: "Suministro de equipos de proceso críticos, válvulas de alta especificación y sistemas de bombeo bajo norma. Soporte documental exhaustivo para EPCistas.",
      equipment: "Bombas API, intercambiadores de calor especiales, sistemas de filtración, patines de medición y regulación.",
      relevance: "Soluciones alineadas con estándares API para la industria de oil & gas y refinación."
    },
    {
      id: "energia",
      icon: <Zap size={40} />,
      title: "Generación de Energía",
      challenges: "Eficiencia térmica, disponibilidad de planta, integración a la red y transición hacia fuentes más limpias o cogeneración.",
      support: "Ingeniería conceptual para ciclos combinados o cogeneración, selección de turbomaquinaria y equipos auxiliares de balance de planta (BOP).",
      equipment: "Turbinas de vapor, generadores, calderas de recuperación (HRSG), condensadores y sistemas de control.",
      relevance: "Representamos marcas líderes en turbinas y equipos térmicos, ofreciendo soluciones desde la viabilidad hasta el comisionamiento."
    },
    {
      id: "azucarera",
      icon: <Wheat size={40} />,
      title: "Industria Azucarera",
      challenges: "Estacionalidad de la zafra (cero tolerancia a paros), modernización de ingenios antiguos y maximización de la cogeneración de energía.",
      support: "Actualización tecnológica de molinos, optimización del balance térmico y modernización de accionamientos.",
      equipment: "Reductores planetarios para molinos, turbinas de vapor de contrapresión, centrífugas y sistemas de evaporación.",
      relevance: "Experiencia comprobada en la modernización de ingenios en México y Centroamérica, aumentando la eficiencia de extracción y generación."
    },
    {
      id: "procesos",
      icon: <Cog size={40} />,
      title: "Procesos Industriales (Química, Alimentos)",
      challenges: "Manejo de fluidos complejos, control estricto de temperatura/presión, normativas sanitarias o de seguridad (ATEX).",
      support: "Selección de materiales especiales, dimensionamiento de equipos de separación y mezcla, e integración de líneas de proceso.",
      equipment: "Reactores, separadores centrífugos, sistemas de secado, bombas sanitarias y válvulas de control.",
      relevance: "Capacidad para entender el diagrama de flujo de proceso (PFD) y proponer el equipo exacto para la aplicación."
    },
    {
      id: "manufactura",
      icon: <Factory size={40} />,
      title: "Manufactura y Minería",
      challenges: "Manejo de materiales a granel, desgaste extremo, automatización de final de línea y control de emisiones.",
      support: "Soluciones robustas para transmisión de potencia pesada y sistemas automatizados de empaque para alta producción.",
      equipment: "Sistemas de ensacado y paletizado, reductores de gran tamaño, transportadores y equipos de control de polvo.",
      relevance: "Alianzas con fabricantes europeos de maquinaria pesada y sistemas de empaque de alta confiabilidad."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Sectores Industriales
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Conocemos de cerca los retos operativos, normativos y técnicos de cada industria. Por eso, cada solución se desarrolla en función de su proceso y condiciones reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {sectors.map((sector, index) => (
              <motion.div 
                key={sector.id}
                id={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-4 sticky top-32">
                  <div className="w-20 h-20 bg-taviga-blue/10 text-taviga-darkblue rounded-sm flex items-center justify-center mb-6">
                    {sector.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{sector.title}</h2>
                  <p className="text-lg text-slate-600 font-medium mb-6">
                    {sector.relevance}
                  </p>
                  <Link to="/contacto" className="inline-flex items-center gap-2 text-taviga-blue font-semibold hover:text-taviga-darkblue transition-colors group">
                    Consultar para este sector
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="lg:col-span-8 space-y-8">
                  <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Retos Principales</h3>
                    <p className="text-slate-800 leading-relaxed">{sector.challenges}</p>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Modelo de Soporte Taviga</h3>
                    <p className="text-slate-800 leading-relaxed">{sector.support}</p>
                  </div>
                  
                  <div className="bg-taviga-darkblue text-white p-8 rounded-sm">
                    <h3 className="text-sm font-bold text-taviga-blue uppercase tracking-wider mb-3">Equipos y Soluciones Típicas</h3>
                    <p className="text-white/90 leading-relaxed">{sector.equipment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
