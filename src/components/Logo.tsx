import { Network } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
    <svg width="0" height="0" className="absolute">
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#9333ea" offset="0%" /> {/* purple-600 */}
        <stop stopColor="#3b82f6" offset="100%" /> {/* blue-500 */}
      </linearGradient>
    </svg>
    <Network style={{ stroke: "url(#logoGradient)" }} className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} />
    <div className="flex flex-col justify-center font-heading text-[1rem] sm:text-[1.1rem] font-bold leading-[1.1] tracking-tight text-slate-900">
      <span>Digital</span>
      <span>Empowerment</span>
      <span>Collective</span>
    </div>
  </Link>
);
