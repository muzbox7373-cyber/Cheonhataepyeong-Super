import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg group-hover:rotate-12 transition-transform">
                천
             </div>
             <span className="font-serif font-bold text-xl sm:text-2xl tracking-widest text-secondary">천하태평 슈퍼</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`font-serif text-lg transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary underline underline-offset-4 decoration-2' : 'text-secondary'}`}
              >
                {item.label}
              </Link>
            ))}
            <button className="p-2 hover:text-primary transition-colors">
                <ShoppingBag className="w-6 h-6" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-secondary/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-lg font-serif text-center hover:text-primary hover:bg-secondary/5 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};