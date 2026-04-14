import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-6 text-slate-500 max-w-sm">
              Equipping young people with the digital skills required to thrive in an increasingly technology-driven world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-500 hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="text-slate-500 hover:text-purple-600 transition-colors">Resources</Link></li>
              <li><Link to="/chat" className="text-slate-500 hover:text-purple-600 transition-colors">AI Chat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link to="/auth" className="text-slate-500 hover:text-purple-600 transition-colors">Login / Signup</Link></li>
              <li><Link to="/register" className="text-slate-500 hover:text-purple-600 transition-colors">Register as Tutor</Link></li>
              <li><a href="#" className="text-slate-500 hover:text-purple-600 transition-colors">Partner With Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Digital Empowerment Collective. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
