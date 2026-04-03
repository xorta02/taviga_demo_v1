import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FileText, ArrowRight } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Insights() {
  useDocumentTitle("Insights Industriales", "Notas técnicas, aprendizajes de proyectos y actualizaciones sobre la tecnología que representamos.");

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
              Insights Industriales
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Notas técnicas, aprendizajes de proyectos y actualizaciones sobre la tecnología que representamos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-24 bg-slate-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Placeholder Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-sm border border-slate-200 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300">
                <FileText size={48} />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-bold text-taviga-blue uppercase tracking-wider mb-2">Nota Técnica</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Consideraciones para la selección de turbinas de contrapresión</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  Análisis de los factores críticos al dimensionar una turbina para cogeneración en la industria azucarera.
                </p>
                <span className="text-sm font-semibold text-slate-400 cursor-not-allowed flex items-center gap-1 mt-auto">
                  Próximamente <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

            {/* Placeholder Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-sm border border-slate-200 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300">
                <FileText size={48} />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-bold text-taviga-blue uppercase tracking-wider mb-2">Actualización</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Nuevas normativas de emisiones para calderas industriales</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  Cómo los precipitadores electrostáticos ayudan a cumplir con los límites más estrictos de material particulado.
                </p>
                <span className="text-sm font-semibold text-slate-400 cursor-not-allowed flex items-center gap-1 mt-auto">
                  Próximamente <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

            {/* Placeholder Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-sm border border-slate-200 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300">
                <FileText size={48} />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-bold text-taviga-blue uppercase tracking-wider mb-2">Caso de Estudio</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Automatización de final de línea en planta de fertilizantes</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  Integración de sistemas FFS y paletizado robótico para aumentar la capacidad de despacho en un 40%.
                </p>
                <span className="text-sm font-semibold text-slate-400 cursor-not-allowed flex items-center gap-1 mt-auto">
                  Próximamente <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-taviga-darkblue text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">¿Busca información técnica específica?</h2>
          <p className="text-white/80 text-lg mb-8">
            Nuestro equipo puede proporcionarle catálogos, hojas de datos y referencias de proyectos aplicables a su industria.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex justify-center items-center px-8 py-4 bg-taviga-orange text-white font-bold rounded-sm hover:bg-taviga-orange-hover transition-colors"
          >
            Contactar a ingeniería
          </Link>
        </div>
      </section>
    </div>
  );
}
