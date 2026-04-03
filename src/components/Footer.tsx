import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Settings } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex bg-white p-2 rounded-sm">
              <img src="/image (2).png" alt="Taviga Representaciones Industriales" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-sm">
              Socio estratégico para la industria en México. Integramos tecnología de clase mundial, ingeniería y soporte comercial para proyectos de alto impacto.
            </p>
            <div className="mb-6">
              <p className="text-xs text-slate-500 mb-1">Taviga opera exclusivamente en México.</p>
              <p className="text-xs text-slate-500">
                Operaciones en LATAM y Estados Unidos a través de <a href="http://mhusaenterprise.com/" target="_blank" rel="noopener noreferrer" className="text-taviga-blue hover:text-taviga-blue/80 underline">M&H USA</a>.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/taviga/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-taviga-darkblue hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 tracking-tight">Empresa</h3>
            <ul className="space-y-4">
              <li><Link to="/nosotros" className="text-sm hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/soluciones" className="text-sm hover:text-white transition-colors">Soluciones</Link></li>
              <li><Link to="/proyectos" className="text-sm hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link to="/insights" className="text-sm hover:text-white transition-colors">Insights Industriales</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-tight">Sectores & Marcas</h3>
            <ul className="space-y-4">
              <li><Link to="/sectores" className="text-sm hover:text-white transition-colors">Oil & Gas y Refinación</Link></li>
              <li><Link to="/sectores" className="text-sm hover:text-white transition-colors">Generación de Energía</Link></li>
              <li><Link to="/sectores" className="text-sm hover:text-white transition-colors">Industria Azucarera</Link></li>
              <li><Link to="/marcas" className="text-sm hover:text-white transition-colors">Marcas Representadas</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-tight">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-taviga-blue shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Tampico, Tamaulipas.<br />
                  Atención a nivel nacional.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-taviga-blue shrink-0" />
                <a href="tel:+528119948300" className="text-sm hover:text-white transition-colors">+52 81 1994 8300</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-taviga-blue shrink-0" />
                <a href="mailto:sales@taviga.com.mx" className="text-sm hover:text-white transition-colors">sales@taviga.com.mx</a>
              </li>
            </ul>
            <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-taviga-orange hover:text-taviga-orange-hover transition-colors group">
              Hablemos de su proyecto
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Taviga Representaciones Industriales. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-slate-500 hover:text-slate-300">Aviso de Privacidad</Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-slate-300">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
