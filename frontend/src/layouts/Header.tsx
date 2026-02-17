import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastScrolledState = { isScrolled: false, isVisible: true };
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only update state if values actually changed to avoid re-renders
          const newIsScrolled = currentScrollY > 100;
          if (newIsScrolled !== lastScrolledState.isScrolled) {
            setIsScrolled(newIsScrolled);
            lastScrolledState.isScrolled = newIsScrolled;
          }
          
          // Hide header when scrolling down past hero, show when scrolling up
          let newIsVisible = true;
          if (currentScrollY > 100) {
            newIsVisible = currentScrollY <= lastScrollY;
          }
          
          if (newIsVisible !== lastScrolledState.isVisible) {
            setIsVisible(newIsVisible);
            lastScrolledState.isVisible = newIsVisible;
          }
          
          lastScrollY = currentScrollY;
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header 
      style={{
        backgroundColor: '#ffffff',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        boxShadow: isScrolled ? '0 10px 15px -3px rgb(0 0 0 / 0.1)' : 'none',
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-shadow">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span style={{ color: '#111827' }} className="text-2xl font-bold transition-colors">
              Doctor<span className="text-teal-500">OnDoor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ 
                  color: location.pathname === item.to 
                    ? '#0d9488' 
                    : '#374151'
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === item.to
                    ? 'bg-teal-500/10'
                    : 'hover:text-teal-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              style={{ color: '#374151' }}
              className="flex items-center space-x-2 font-medium transition-colors hover:text-teal-600"
            >
              <FaPhone className="text-teal-500" />
              <span>03462239579</span>
            </a>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{ color: '#374151' }}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    location.pathname === item.to
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-2" />
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 font-medium"
              >
                <FaPhone className="text-teal-500" />
                <span>03462239579</span>
              </a>
              <Link
                to="/contact"
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;