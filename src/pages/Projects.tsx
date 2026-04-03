import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Proyectos", "Ejemplos de aplicaciones y proyectos industriales en los que aportamos valor.");

  const experience = [
    {
      category: "Generación de Energía",
      equipment: "Turbogeneradores",
      capacity: "Capacidades en MW",
      description: "Suministro e integración de turbinas de vapor para cogeneración e independencia energética."
    },
    {
      category: "Generación de Vapor",
      equipment: "Calderas",
      capacity: "Capacidades en TPH",
      description: "Equipos para generación de vapor de proceso cumpliendo con normativas ASME."
    },
    {
      category: "Transmisión Mecánica",
      equipment: "Reductores",
      capacity: "Capacidades en HP",
      description: "Accionamientos de alta confiabilidad para molinos y equipos pesados."
    },
    {
      category: "Procesos y Separación",
      equipment: "Filtros",
      capacity: "Alta eficiencia",
      description: "Sistemas de filtración industrial para procesos críticos."
    }
  ];

  const clients = [
    "Ingenio La Gloria",
    "Ingenio Pánuco",
    "Ingenio Tamazula",
    "Ingenio Mante",
    "Ingenio Tala"
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
              Proyectos / Experiencia
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Proyectos y aplicaciones en los que hemos participado, aportando valor mediante la integración de tecnología, ingeniería y gestión comercial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight border-b border-slate-200 pb-4">Equipos Suministrados e Integrados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm shadow-sm border border-slate-200"
                >
                  <span className="text-taviga-blue font-bold text-sm uppercase tracking-wider mb-2 block">{exp.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.equipment}</h3>
                  <p className="text-taviga-green font-medium mb-4">{exp.capacity}</p>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight border-b border-slate-200 pb-4">Clientes Destacados</h2>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-200">
              <p className="text-slate-600 mb-6">Hemos colaborado exitosamente con múltiples instalaciones industriales, incluyendo:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-taviga-blue shrink-0" />
                    <span className="text-slate-800 font-medium">{client}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-taviga-blue shrink-0" />
                  <span className="text-slate-800 font-medium">Entre otros...</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
