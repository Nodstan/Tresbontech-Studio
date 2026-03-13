import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './StudioLogo';

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

  const isActive = (path: string) => location.pathname === path;

  const headerBg = isOpen 
    ? 'bg-primary bg-[url("/bg-pattern.png")] bg-repeat border-transparent' 
    : isScrolled 
      ? 'bg-white/90 backdrop-blur-md border-b border-secondary' 
      : 'bg-transparent border-transparent';
  const logoColor = (isScrolled && !isOpen) ? 'text-primary' : 'text-white';
  const navLinkColor = (path: string) => {
    if (isActive(path)) return (isScrolled && !isOpen) ? 'text-primary font-medium' : 'text-white font-medium';
    return (isScrolled && !isOpen) ? 'text-neutral-dark hover:text-primary' : 'text-white/90 hover:text-white';
  };
  const btnClass = (isScrolled && !isOpen)
    ? 'bg-primary text-white hover:bg-primary/90' 
    : 'bg-white text-primary hover:bg-neutral-light';
  const menuIconColor = (isScrolled && !isOpen) ? 'text-neutral-dark' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <Logo textColor={logoColor} />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${navLinkColor('/')} transition-colors`}>Home</Link>
            <Link to="/about" className={`${navLinkColor('/about')} transition-colors`}>About</Link>
            <Link to="/academy" className={`${navLinkColor('/academy')} transition-colors`}>Academy</Link>
            <Link to="/studio" className={`${navLinkColor('/studio')} transition-colors`}>Studio</Link>
            <Link to="/contact" className={`${navLinkColor('/contact')} transition-colors`}>Contact</Link>
          </nav>
          <div className="hidden md:flex">
            <button className={`px-6 py-2 rounded-full font-medium transition-colors shadow-md ${btnClass}`}>
              Book a Discovery Call
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors ${menuIconColor}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 shadow-xl"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">About</Link>
            <Link to="/academy" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Academy</Link>
            <Link to="/studio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Studio</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white/90 hover:text-white">Contact</Link>
            <button className="w-full text-left px-3 py-2 text-accent-yellow font-medium">
              Book a Discovery Call
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
