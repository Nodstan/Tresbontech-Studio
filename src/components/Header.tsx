import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeaderConfig = () => {
    const path = location.pathname;
    // Changed Academy to use white background when scrolled
    if (path.includes('academy')) {
      return { label: "ACADEMY", scrolledBg: "bg-white/95 backdrop-blur-md" };
    }
    if (path.includes('studio')) {
      return { label: "STUDIO", scrolledBg: "bg-neutral-dark/95 backdrop-blur-md" };
    }
    return { label: "TRESBONTECH", scrolledBg: "bg-white/90 backdrop-blur-md" };
  };

  const config = getHeaderConfig();
  const path = location.pathname;
  const isStudio = path.includes('studio');
  const isAcademy = path.includes('academy');

  const headerBg = isOpen 
    ? 'bg-primary' 
    : isScrolled 
      ? `${config.scrolledBg} border-b border-neutral-200/50` 
      : 'bg-transparent';

  // Logic for Logo and Nav text color:
  // It should be white if: Not scrolled OR on Studio page (dark bg) OR mobile menu open
  // It should be dark if: Scrolled on Academy/Home/About (white bg)
  const isDarkTextNeeded = isScrolled && !isOpen && !isStudio;
  const textColor = isDarkTextNeeded ? 'text-neutral-dark' : 'text-white';

  const navLinkColor = () => {
    if (isDarkTextNeeded) {
      return "text-neutral-dark hover:text-primary";
    }
    return "text-white/90 hover:text-white";
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <Logo textColor={textColor} label={config.label} />
          </Link>

          <nav className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <Link to="/" className={`${navLinkColor()} transition-colors`}>Home</Link>
            <Link to="/about" className={`${navLinkColor()} transition-colors`}>About</Link>
            <Link to="/academy" className={`${navLinkColor()} transition-colors`}>Academy</Link>
            <Link to="/studio" className={`${navLinkColor()} transition-colors`}>Studio</Link>
            <Link to="/contact" className={`${navLinkColor()} transition-colors`}>Contact</Link>
            <Link to="/login" className={`${navLinkColor()} transition-colors`}>Login</Link>
          </nav>

          <div className="hidden md:flex">
            <button className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
              isDarkTextNeeded ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}>
              Get in Touch
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={textColor}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 rounded-md">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 rounded-md">About</Link>
            <Link to="/academy" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 rounded-md">Academy</Link>
            <Link to="/studio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 rounded-md">Studio</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 rounded-md">Contact</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 rounded-md">Login</Link>
            <div className="pt-4 px-3">
              <button className="w-full bg-white text-primary px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}