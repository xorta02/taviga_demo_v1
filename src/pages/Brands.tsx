import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowRight, X, CheckCircle2, ChevronRight } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { cn } from "../lib/utils";

interface Brand {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  products: string[];
  benefits: string[];
  applications: string[];
}

const brands: Brand[] = [
  {
    id: "triveni-turbines",
    name: "Triveni Turbines",
    logo: "/triveni.png",
    shortDescription: "Soluciones avanzadas de turbinas de vapor de alta eficiencia y confiabilidad para generación de energía y accionamiento mecánico.",
    longDescription: "Con más de 60 años de experiencia y presencia en más de 80 países, Triveni Turbine Limited es un líder global en el diseño y fabricación de turbinas de vapor industriales. Ofrece soluciones personalizadas desde 5 kW hasta 100 MW, optimizando procesos industriales con tecnología de vanguardia y cumplimiento de estándares internacionales.",
    technologies: ["Tecnología de impulso y reacción", "Diseño modular y robusto", "Cumplimiento de estándares API 611 y 612"],
    products: ["Turbinas de vapor de contrapresión", "Turbinas de vapor de condensación", "Turbinas API para sector petroquímico", "Turbinas SMART modulares"],
    benefits: ["Alta eficiencia energética y operativa", "Durabilidad y resistencia excepcionales", "Soluciones a medida para cada cliente", "Soporte técnico 24/7 y servicios de modernización"],
    applications: ["Industria Azucarera y Destilerías", "Plantas de Energía (Biomasa, Residuos)", "Industria Química y Petroquímica"]
  },
  {
    id: "triveni-gears",
    name: "Triveni Gears",
    logo: "/triveni_gears.png",
    shortDescription: "Diseño y fabricación de engranajes y cajas reductoras de alta velocidad y precisión para aplicaciones industriales exigentes.",
    longDescription: "División de transmisión de potencia de Triveni Engineering & Industries Ltd., con más de 90 años de herencia industrial. Fabricamos cajas de engranajes de hasta 50 MW y 40,000 RPM, incorporando tecnología de vanguardia que cumple con las normativas AGMA, ISO, DIN y API para garantizar máxima confiabilidad.",
    technologies: ["Ingeniería de alta velocidad (hasta 40,000 RPM)", "Aceros aleados cementados y rectificados", "Cumplimiento normativo internacional (AGMA, API)"],
    products: ["Cajas de engranajes de alta velocidad (HSG/HDG/HTG)", "Cajas para compresores y sopladores", "Cajas de engranajes integrales", "Servicios de reingeniería"],
    benefits: ["Rendimiento óptimo en condiciones extremas", "Larga vida útil y confiabilidad", "Personalización y diseño a medida", "Soporte global y disponibilidad de repuestos"],
    applications: ["Refinerías y Petroquímica", "Industria Azucarera y Destilerías", "Generación de Energía", "Defensa y Marina"]
  },
  {
    id: "isgec",
    name: "ISGEC",
    logo: "/isgec.png",
    shortDescription: "Soluciones integrales de ingeniería pesada, equipos de proceso, calderas y proyectos EPC a nivel global.",
    longDescription: "ISGEC Heavy Engineering Ltd. cuenta con más de 90 años de experiencia proveyendo soluciones de ingeniería pesada en más de 91 países. Su portafolio abarca desde el diseño y fabricación de equipos de proceso críticos hasta la ejecución de proyectos llave en mano (EPC), manteniendo un compromiso inquebrantable con la excelencia y la innovación.",
    technologies: ["Fabricación avanzada de equipos a presión", "Ingeniería de calderas y recuperación de calor", "Sistemas de control de emisiones (DeNOx, desulfuración)"],
    products: ["Equipos de proceso (reactores, intercambiadores)", "Calderas industriales y generadores de vapor", "Prensas mecánicas e hidráulicas", "Proyectos EPC", "Equipos de control de contaminación"],
    benefits: ["Soluciones integrales llave en mano", "Cumplimiento de los más altos estándares internacionales", "Innovación tecnológica continua", "Soporte global y mantenimiento preventivo"],
    applications: ["Sector Energético", "Industria Petroquímica y Refinación", "Industria del Azúcar y Destilerías", "Sector Automotriz y Siderurgia"]
  },
  {
    id: "dinamic-oil",
    name: "Dinamic Oil",
    logo: "/dinamic_oil.jpg",
    shortDescription: "Sistemas de transmisión de potencia y elevación, especializados en reductores planetarios y cabrestantes de alto torque.",
    longDescription: "Fundada en 1970 en Italia, Dinamic Oil es un fabricante global de soluciones de elevación y transmisión de potencia. Con un enfoque de 'pensamiento flexible', diseña reductores y cabrestantes personalizados para aplicaciones móviles, marinas e industriales, respaldados por certificaciones internacionales y una red de soporte mundial.",
    technologies: ["Reductores planetarios de alto torque (hasta 2,500,000 Nm)", "Cabrestantes con motores orbitales o de pistones", "Frenos multidisco negativos"],
    products: ["Reductores planetarios", "Cabrestantes hidráulicos y eléctricos (hasta 30 ton)", "Accionamientos de giro y de rueda", "Soluciones a medida"],
    benefits: ["Transmisiones compactas y altamente confiables", "Adaptabilidad a requerimientos específicos", "Certificaciones DNV-GL, ABS y Lloyd's Register", "Soporte técnico y mantenimiento global"],
    applications: ["Industria Azucarera y Acerías", "Minería y Perforación", "Aplicaciones Marinas y Offshore", "Maquinaria Móvil y Grúas"]
  },
  {
    id: "durtek",
    name: "DurTek",
    logo: "/durtek.png",
    shortDescription: "Aleaciones resistentes al desgaste y equipos especializados para industrias críticas como minería, energía, azúcar y cemento.",
    longDescription: "Con más de tres décadas de experiencia, DurTek fusiona ciencia de materiales avanzada e ingeniería de precisión para resolver el desgaste prematuro de maquinaria. Sus tecnologías patentadas ofrecen componentes hasta un 50% más duraderos y un 30% más ligeros, garantizando operaciones continuas y sostenibles.",
    technologies: ["Unión por difusión en vacío de cerámica a acero", "Aleaciones con resistencia térmica (-50°C a 1,200°C)", "Sensores IoT integrados para monitoreo predictivo"],
    products: ["Blindaje DurTek® (carburo sinterizado)", "Rodillos Segmentados ProSeries", "Soldaduras y recubrimientos DurShield®", "Equipos Rotatorios SmartDur®"],
    benefits: ["Componentes 50% más duraderos", "Reducción de costos de mantenimiento hasta un 40%", "Ahorro energético con piezas 30% más ligeras", "Soporte técnico 365 días y repuestos en México"],
    applications: ["Industria Azucarera (molinos)", "Minería (trituradoras)", "Energía (turbinas y válvulas)", "Cemento"]
  },
  {
    id: "cordoba",
    name: "Córdoba",
    logo: "/cordoba.jpg",
    shortDescription: "Soluciones avanzadas de filtración industrial con equipos de alta eficiencia para los sectores azucarero, papelero y tratamiento de aguas.",
    longDescription: "Empresa brasileña dedicada al diseño y fabricación de sistemas de filtración industrial. Córdoba proporciona equipos modulares y duraderos en acero inoxidable que optimizan procesos críticos, garantizando máxima eficiencia, adaptabilidad y un menor consumo de recursos en la separación de fluidos.",
    technologies: ["Succión por vacío y gravedad", "Construcción en acero inoxidable de alta resistencia", "Diseño modular adaptable"],
    products: ["Filtros Banda", "Filtros de Agua Serie WF", "Generadores de Vacío Serie GV", "Prensas de Vacío VPB-260", "Filtros Monobelt MFE-150"],
    benefits: ["Máxima eficiencia operativa y productividad", "Larga vida útil gracias a materiales de alta calidad", "Integración flexible en sistemas existentes", "Soporte técnico y amplio stock de repuestos"],
    applications: ["Industria Azucarera (clarificación de jugos)", "Tratamiento de aguas residuales", "Industria Papelera", "Refinerías"]
  },
  {
    id: "jpma",
    name: "JPMA",
    logo: "/jpma_logo.png",
    shortDescription: "Consultoría e ingeniería integral para la industria azucarera, destilerías y sistemas de cogeneración.",
    longDescription: "J.P. Mukherji & Associates Pvt. Ltd. (JPMA) es pionero en servicios de consultoría tecnológica desde 1972. Con más de 250 proyectos ejecutados en más de 30 países, JPMA lidera el diseño, optimización y puesta en marcha de plantas azucareras, destilerías de etanol y proyectos de bioenergía, garantizando eficiencia y cumplimiento normativo.",
    technologies: ["Ingeniería básica y de detalle", "Auditorías energéticas avanzadas", "Optimización de procesos industriales"],
    products: ["Diseño de plantas de azúcar", "Desarrollo de destilerías de etanol", "Sistemas de cogeneración (bagazo/biomasa)", "Estudios de viabilidad y gestión de proyectos"],
    benefits: ["Más de 50 años de experiencia comprobada", "Reducción de costos operativos y mejora de productividad", "Soluciones modulares y escalables", "Cumplimiento estricto de normativas ambientales"],
    applications: ["Industria Azucarera", "Producción de Etanol y Biocombustibles", "Generación de Energía (Cogeneración)"]
  },
  {
    id: "statec-binder",
    name: "Statec Binder",
    logo: "/statec.png",
    shortDescription: "Especialistas austriacos en sistemas de ensacado y paletizado de alto rendimiento.",
    longDescription: "STATEC BINDER es líder mundial en el envasado de materiales a granel. Con sede en Austria, desarrolla y fabrica máquinas de ensacado y sistemas de paletizado innovadores y de máxima fiabilidad para una amplia variedad de industrias a nivel global.",
    technologies: ["Automatización de alto rendimiento", "Sistemas de pesaje de precisión", "Paletizado robótico y convencional"],
    products: ["Máquinas de ensacado de boca abierta", "Sistemas FFS (Form-Fill-Seal)", "Paletizadores de alto nivel y robóticos", "Sistemas de pesaje neto"],
    benefits: ["Máxima fiabilidad y disponibilidad de la planta", "Alta velocidad de envasado", "Soluciones adaptadas a las necesidades del cliente", "Soporte técnico global"],
    applications: ["Petroquímica (Pellets)", "Fertilizantes", "Azúcar y Alimentos", "Minería y Minerales"]
  },
  {
    id: "praj",
    name: "Praj Industries",
    logo: "/praj.png",
    shortDescription: "Soluciones de ingeniería para bioprocesos y sistemas de cero descarga de líquidos (ZLD).",
    longDescription: "Praj Industries es una empresa global impulsada por la innovación que ofrece soluciones integrales para la bioenergía, la ingeniería de alta pureza y el tratamiento de aguas críticas. Su enfoque en la sostenibilidad permite a las industrias reducir su huella ambiental.",
    technologies: ["Tecnología de fermentación y destilación", "Sistemas ZLD (Zero Liquid Discharge)", "Ingeniería de bioprocesos avanzados"],
    products: ["Plantas de etanol (1G y 2G)", "Sistemas de tratamiento de efluentes", "Equipos de proceso críticos", "Soluciones para cervecerías"],
    benefits: ["Reducción de la huella de carbono", "Cumplimiento de normativas ambientales estrictas", "Optimización del uso del agua", "Tecnología probada a nivel mundial"],
    applications: ["Bioenergía y Biocombustibles", "Industria Química y Farmacéutica", "Bebidas y Cervecerías", "Tratamiento de Aguas Industriales"]
  },
  {
    id: "enviropol",
    name: "Enviropol",
    logo: "/enviropol.png",
    shortDescription: "Tecnología avanzada para el control de emisiones y manejo de gases industriales.",
    longDescription: "Enviropol Engineers proporciona soluciones integrales de ingeniería para el control de la contaminación del aire. Diseñan, fabrican e instalan sistemas de alta eficiencia que ayudan a las industrias a cumplir con las regulaciones ambientales más exigentes.",
    technologies: ["Precipitación electrostática", "Filtración de gases de alta temperatura", "Sistemas de desulfuración"],
    products: ["Precipitadores electrostáticos (ESP)", "Filtros de mangas (Baghouses)", "Sistemas de manejo de cenizas", "Sistemas de depuración de gases"],
    benefits: ["Alta eficiencia en la recolección de partículas", "Cumplimiento normativo ambiental", "Diseños robustos para operación continua", "Bajos costos de mantenimiento"],
    applications: ["Generación de Energía", "Industria del Cemento", "Siderurgia y Metalurgia", "Calderas Industriales"]
  },
  {
    id: "dinamo",
    name: "Dínamo Automação",
    logo: "/dinamo.png",
    shortDescription: "Sistemas avanzados de monitoreo y automatización para la industria azucarera.",
    longDescription: "Dínamo Automação Industrial se especializa en el desarrollo de soluciones tecnológicas para el control y monitoreo de procesos industriales. Su enfoque principal es la optimización de la molienda en la industria azucarera mediante sistemas inteligentes.",
    technologies: ["Sensores de precisión para molienda", "Sistemas SCADA y control PLC", "Análisis de datos en tiempo real"],
    products: ["Sistemas de monitoreo de molinos", "Paneles de control industrial", "Software de supervisión", "Instrumentación de campo"],
    benefits: ["Aumento en la extracción de jugo", "Prevención de fallas mecánicas", "Optimización del consumo energético", "Toma de decisiones basada en datos"],
    applications: ["Industria Azucarera (Molienda)", "Generación de Energía", "Manufactura General", "Procesos Continuos"]
  }
];

export default function Brands() {
  useDocumentTitle("Marcas Representadas", "Conozca las marcas globales que representamos: Triveni Turbines, Statec Binder, Dynamic Oil, Praj y Enviropol.");

  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return (
    <div className="w-full relative">
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
              Marcas Representadas
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Nos asociamos con fabricantes globales de primer nivel para asegurar que nuestros clientes en México tengan acceso a tecnología confiable, eficiente y con soporte local garantizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div 
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-sm border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setSelectedBrand(brand)}
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="h-28 w-full flex items-center justify-center mb-6 p-2">
                    <img 
                      src={brand.logo} 
                      alt={`Logo de ${brand.name}`} 
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image is not found
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        (e.target as HTMLImageElement).nextElementSibling?.classList.add('flex');
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center w-full h-full text-center">
                      <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center text-slate-400 border border-slate-200 mb-2">
                        <span className="text-xs font-medium">Logo</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 tracking-tight">{brand.name}</h2>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 mt-1">
                        Pendiente
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed flex-grow">{brand.shortDescription}</p>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center group-hover:bg-taviga-blue/5 transition-colors">
                  <span className="text-sm font-semibold text-taviga-blue flex items-center gap-1">
                    Ver detalles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Expansion Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: brands.length * 0.05 }}
              className="bg-slate-100 rounded-sm border border-slate-200 border-dashed flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
                <ExternalLink size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-2">Expansión Continua</h3>
              <p className="text-sm text-slate-500">
                Constantemente evaluamos nuevas tecnologías para integrar a nuestro portafolio de soluciones.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Detail Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedBrand(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="h-20 w-48 flex items-center justify-center p-2">
                  <img 
                    src={selectedBrand.logo} 
                    alt={`Logo de ${selectedBrand.name}`} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      (e.target as HTMLImageElement).nextElementSibling?.classList.add('flex');
                    }}
                  />
                  <div className="hidden flex-col items-start w-full">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center text-slate-400 border border-slate-200">
                        <span className="text-xs font-medium">Logo</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">{selectedBrand.name}</h2>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 mt-1">
                          Pendiente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Main Content Column */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Sobre {selectedBrand.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{selectedBrand.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-taviga-blue rounded-full"></span>
                        Tecnologías Clave
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedBrand.technologies.map((tech, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 size={16} className="text-taviga-green shrink-0 mt-0.5" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-taviga-orange rounded-full"></span>
                        Beneficios
                      </h3>
                      <ul className="space-y-2">
                        {selectedBrand.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <ChevronRight size={16} className="text-taviga-orange shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar Column */}
                  <div className="space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                    <div className="bg-slate-50 p-5 rounded-sm border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Líneas de Producto</h4>
                      <ul className="space-y-2">
                        {selectedBrand.products.map((product, i) => (
                          <li key={i} className="text-sm font-medium text-slate-800 pb-2 border-b border-slate-200/60 last:border-0 last:pb-0">
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-sm border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Aplicaciones Industriales</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedBrand.applications.map((app, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                <Link 
                  to={`/contacto?marca=${encodeURIComponent(selectedBrand.name)}`}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-taviga-blue hover:bg-taviga-darkblue transition-colors rounded-sm shadow-sm gap-2"
                >
                  Solicitar cotización de {selectedBrand.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

