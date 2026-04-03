import { motion } from "motion/react";
import { Target, Compass, Users, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("Nosotros", "Conozca a Taviga Representaciones Industriales, su socio estratégico en integración de tecnología e ingeniería.");
  
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
              Nosotros
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Taviga Representaciones Industriales es una empresa mexicana dedicada a la integración de tecnología, ingeniería y soporte comercial para los sectores industriales más exigentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 lg:col-start-3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Visión Industrial, Ejecución Precisa
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Nacimos con el objetivo de cerrar la brecha entre los fabricantes de tecnología de clase mundial y las necesidades operativas de la industria en México. Entendemos que un proyecto industrial no termina con la compra de un equipo; requiere acompañamiento técnico, entendimiento del proceso y soporte durante la ejecución.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Nuestro enfoque se basa en la confiabilidad. Actuamos como el brazo técnico y comercial de marcas internacionales líderes, asegurando que nuestros clientes reciban soluciones que cumplan con normativas estrictas (API, ASME, ISO) y que aporten rentabilidad a sus operaciones.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Estructura Regional</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Taviga opera exclusivamente en México, brindando atención directa y especializada al mercado nacional. Para operaciones en el resto de LATAM y Estados Unidos, trabajamos a través de nuestra empresa hermana <a href="http://mhusaenterprise.com/" target="_blank" rel="noopener noreferrer" className="text-taviga-blue hover:text-taviga-darkblue underline font-medium">M&H USA</a>, asegurando una cobertura regional completa con el mismo nivel de excelencia técnica.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Nuestro Enfoque de Trabajo</h3>
                <ul className="space-y-4 mt-6">
                  {[
                    "Análisis profundo de los requerimientos técnicos del cliente.",
                    "Selección de la tecnología óptima en conjunto con nuestros representados.",
                    "Estructuración de ofertas comerciales competitivas y transparentes.",
                    "Soporte continuo desde la ingeniería conceptual hasta la puesta en marcha.",
                    "Coordinación efectiva entre el usuario final, el EPCista y el fabricante."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-taviga-green shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Esencia */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nuestra Esencia</h2>
            <p className="text-lg text-slate-600">
              Los pilares que fundamentan nuestro compromiso con la industria y el éxito de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Misión */}
            <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-taviga-orange/10 text-taviga-orange rounded-sm flex items-center justify-center">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Proveer equipos industriales de alta calidad y servicios de instalación confiables. Somos el aliado estratégico de nuestros clientes, ofreciendo repuestos críticos y un soporte postventa excepcional para optimizar sus operaciones y asegurar su éxito en el mercado.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-taviga-blue/10 text-taviga-blue rounded-sm flex items-center justify-center">
                  <Compass size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ser líderes indiscutibles en la provisión de tecnología y servicios de valor agregado para sectores clave. Buscamos consolidar nuestra excelencia en México y expandir nuestra presencia en América Latina, destacando por nuestra competitividad y agilidad ante los desafíos dinámicos de la industria.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-taviga-darkblue rounded-sm p-10 md:p-16 text-white text-center shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-white/10 text-white rounded-sm flex items-center justify-center">
                <Users size={28} />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Nuestros Valores</h3>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Estos principios guían nuestra forma de trabajar y relacionarnos con cada cliente y socio estratégico.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                "Honestidad",
                "Lealtad",
                "Servicio",
                "Respeto",
                "Responsabilidad",
                "Calidad",
                "Confianza"
              ].map((valor, idx) => (
                <div key={idx} className="px-6 py-3 bg-white/10 hover:bg-taviga-orange border border-white/20 rounded-full font-medium transition-colors cursor-default shadow-sm">
                  {valor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conecta con nosotros */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Nuestra Ubicación</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestras oficinas centrales se encuentran estratégicamente ubicadas en el puerto de Tampico, Tamaulipas, lo que nos permite atender con agilidad a la industria nacional y coordinar operaciones logísticas de manera eficiente.
              </p>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-taviga-blue/10 text-taviga-darkblue rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900 mb-1">Tampico, Tamaulipas</p>
                  <p className="text-slate-600 mb-3">México</p>
                  <a 
                    href="https://www.google.com/maps?q=Tampico,+Tamaulipas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-taviga-blue font-semibold hover:text-taviga-darkblue transition-colors group"
                  >
                    Ver ubicación en Google Maps
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-sm overflow-hidden border border-slate-200 shadow-sm h-[320px] w-full bg-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.08808169994!2d-97.948839!3d22.2781734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7f772551a37c1%3A0x8e8201b1b114d50!2sTampico%2C%20Tamps.!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Taviga en Tampico, Tamaulipas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
