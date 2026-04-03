import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contacto", "Contacte a nuestro equipo de ingeniería para consultas técnicas, solicitudes de cotización y propuestas de integración.");

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

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
              Contacto Comercial y Técnico
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Nuestro equipo de ingeniería está listo para analizar su requerimiento. Consultas técnicas, solicitudes de cotización y propuestas de integración son bienvenidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Información Directa</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-taviga-blue/20 text-taviga-darkblue rounded flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">Correo Electrónico</p>
                      <a href="mailto:sales@taviga.com.mx" className="text-slate-600 hover:text-taviga-darkblue transition-colors">sales@taviga.com.mx</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-taviga-blue/20 text-taviga-darkblue rounded flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">Teléfono</p>
                      <a href="tel:+528119948300" className="text-slate-600 hover:text-taviga-darkblue transition-colors">+52 81 1994 8300</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-taviga-blue/20 text-taviga-darkblue rounded flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">Ubicación</p>
                      <p className="text-slate-600">Tampico, Tamaulipas.<br/>Atención a nivel nacional.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-sm">
                <h3 className="text-lg font-bold mb-4">¿Qué sucede después?</h3>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-taviga-blue font-bold">1.</span>
                    Un ingeniero especialista revisará su solicitud.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-taviga-blue font-bold">2.</span>
                    Le contactaremos en menos de 24 horas hábiles.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-taviga-blue font-bold">3.</span>
                    De ser necesario, agendaremos una reunión técnica (virtual o en sitio).
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíenos su requerimiento</h2>
                
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-taviga-green/10 border border-taviga-green/20 p-8 rounded-sm text-center"
                  >
                    <div className="w-16 h-16 bg-taviga-green/20 text-taviga-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Solicitud Enviada</h3>
                    <p className="text-slate-700">
                      Hemos recibido su información correctamente. Un especialista se pondrá en contacto a la brevedad.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 px-6 py-2 bg-taviga-green text-white font-medium rounded-sm hover:bg-taviga-green-hover transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo *</label>
                        <input required type="text" id="nombre" className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-bold text-slate-700 mb-2">Empresa *</label>
                        <input required type="text" id="empresa" className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="correo" className="block text-sm font-bold text-slate-700 mb-2">Correo Corporativo *</label>
                        <input required type="email" id="correo" className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-bold text-slate-700 mb-2">Teléfono</label>
                        <input type="tel" id="telefono" className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="sector" className="block text-sm font-bold text-slate-700 mb-2">Sector Industrial</label>
                        <select id="sector" className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors bg-white">
                          <option value="">Seleccione un sector...</option>
                          <option value="oil-gas">Oil & Gas / Refinación</option>
                          <option value="energia">Generación de Energía</option>
                          <option value="azucarera">Industria Azucarera</option>
                          <option value="manufactura">Manufactura / Industria Pesada</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tipo" className="block text-sm font-bold text-slate-700 mb-2">Tipo de Requerimiento</label>
                        <select id="tipo" className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors bg-white">
                          <option value="">Seleccione un tipo...</option>
                          <option value="cotizacion">Solicitud de Cotización</option>
                          <option value="asesoria">Asesoría Técnica / Ingeniería</option>
                          <option value="proyecto">Integración de Proyecto</option>
                          <option value="reunion">Agendar Reunión</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-bold text-slate-700 mb-2">Detalles del Proyecto o Requerimiento *</label>
                      <textarea required id="mensaje" rows={5} className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:border-taviga-blue focus:ring-1 focus:ring-taviga-blue outline-none transition-colors resize-y" placeholder="Describa brevemente las condiciones operativas, equipos requeridos o el desafío técnico que enfrenta..."></textarea>
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        disabled={formStatus === "submitting"}
                        className="w-full md:w-auto px-8 py-4 bg-taviga-orange text-white font-bold rounded-sm hover:bg-taviga-orange-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                            Enviando...
                          </>
                        ) : (
                          "Enviar Solicitud"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
