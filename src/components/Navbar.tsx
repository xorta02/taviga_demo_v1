import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Settings } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Soluciones", path: "/soluciones" },
  { name: "Sectores", path: "/sectores" },
  { name: "Marcas", path: "/marcas" },
  { name: "Proyectos", path: "/proyectos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm py-3"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/image (2).png" alt="Taviga Representaciones Industriales" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-taviga-blue",
                  location.pathname === link.path
                    ? "text-taviga-darkblue"
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-taviga-orange hover:bg-taviga-orange-hover transition-colors rounded-sm shadow-sm"
            >
              Hablemos de su proyecto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-3 py-4 text-base font-medium border-b border-slate-100",
                  location.pathname === link.path
                    ? "text-taviga-darkblue"
                    : "text-slate-700"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="mt-6 flex items-center justify-between px-4 py-3 text-base font-medium text-white bg-taviga-orange rounded-sm"
            >
              Hablemos de su proyecto
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
