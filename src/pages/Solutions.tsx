import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Settings, Wrench, BarChart3, Zap, Factory, Cpu } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Solutions() {
  useDocumentTitle("Soluciones", "Capacidades core de Taviga: representación de marcas, integración de proyectos, asesoría técnica y más.");

  const capabilities = [
    {
      icon: <Settings size={32} />,
      title: "Representación de Marcas Industriales",
      summary: "Comercialización oficial y soporte local para fabricantes internacionales de equipos de alta especificación.",
      need: "Acceso a tecnología global con respaldo y garantías locales.",
      contribution: "Gestionamos la relación comercial, importación, soporte técnico y refaccionamiento, actuando como la oficina local del fabricante."
    },
    {
      icon: <Wrench size={32} />,
      title: "Integración y Desarrollo de Proyectos",
      summary: "Estructuración de soluciones llave en mano o paquetes de equipos integrados para proyectos EPC.",
      need: "Un solo punto de contacto para múltiples equipos que deben operar en conjunto.",
      contribution: "Coordinamos la ingeniería de integración, asegurando compatibilidad, cumplimiento normativo y sincronización de entregas."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Asesoría Técnica y Comercial",
      summary: "Acompañamiento desde la etapa conceptual para definir la mejor ruta tecnológica y financiera.",
      need: "Definir especificaciones técnicas viables antes de salir a licitación o compra.",
      contribution: "Aportamos conocimiento de mercado, presupuestos preliminares (CAPEX/OPEX) y revisión de bases de diseño."
    },
    {
      icon: <Factory size={32} />,
      title: "Consultoría de Ingeniería y Proceso",
      summary: "Análisis de procesos industriales para optimización, aumento de capacidad o reducción de emisiones.",
      need: "Mejorar la eficiencia de una planta existente o resolver cuellos de botella.",
      contribution: "Estudios técnicos, simulaciones y propuestas de mejora basadas en equipos de última generación."
    },
    {
      icon: <Zap size={32} />,
      title: "Soporte para Proyectos de Energía y Vapor",
      summary: "Soluciones especializadas en generación eléctrica, cogeneración y manejo de vapor industrial.",
      need: "Equipos confiables para generación continua y cumplimiento de códigos ASME.",
      contribution: "Suministro e integración de turbinas de vapor, calderas, válvulas especiales y sistemas de control asociados."
    },
    {
      icon: <Cpu size={32} />,
      title: "Automatización y Equipos Auxiliares",
      summary: "Sistemas de control, instrumentación y equipos periféricos necesarios para la operación principal.",
      need: "Modernizar controles o integrar equipos nuevos a sistemas DCS/SCADA existentes.",
      contribution: "Ingeniería de control, tableros, instrumentación de campo y protocolos de comunicación industrial."
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
              Soluciones y Capacidades
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Estructuramos respuestas técnicas y comerciales para los desafíos más complejos de la industria, desde el suministro de un equipo crítico hasta la integración de sistemas completos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-200 flex flex-col h-full"
              >
                <div className="mb-6 text-taviga-darkblue bg-taviga-blue/10 w-16 h-16 rounded-sm flex items-center justify-center">
                  {cap.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{cap.title}</h2>
                <p className="text-slate-600 mb-6 text-lg">
                  {cap.summary}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Necesidad Típica</span>
                    <span className="text-sm text-slate-700">{cap.need}</span>
                  </div>
                  <div className="bg-taviga-blue/5 p-4 rounded-sm border border-taviga-blue/20">
                    <span className="block text-xs font-bold text-taviga-darkblue uppercase tracking-wider mb-1">Aporte Taviga</span>
                    <span className="text-sm text-slate-800">{cap.contribution}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">¿Requiere apoyo en la definición de su proyecto?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Nuestro equipo técnico está disponible para revisar sus bases de diseño, diagramas de flujo o requerimientos específicos.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex justify-center items-center px-8 py-4 bg-taviga-orange text-white font-bold rounded-sm hover:bg-taviga-orange-hover transition-colors"
          >
            Solicitar consulta técnica
          </Link>
        </div>
      </section>
    </div>
  );
}
