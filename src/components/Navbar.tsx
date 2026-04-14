import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "AI Chat", path: "/chat" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-purple-600' : 'text-slate-600 hover:text-purple-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/auth"
            className="bg-slate-900 hover:bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Login / Signup
          </Link>
        </div>

        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-medium py-2 ${isActive(link.path) ? 'text-purple-600' : 'text-slate-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/auth"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium w-full mt-2 text-center"
            onClick={() => setIsOpen(false)}
          >
            Login / Signup
          </Link>
        </div>
      )}
    </nav>
  );
};
