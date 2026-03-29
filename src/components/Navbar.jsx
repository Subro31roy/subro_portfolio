import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#0d1117d9] backdrop-blur-md border-b border-[#00b4d826] h-[60px] flex items-center justify-between px-4 md:px-8">
      {/* LEFT - Brand */}
      <Link to="/" className="font-syne font-bold text-[1.1rem] text-text-primary">
        Subroto Roy
      </Link>

      {/* CENTER - Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`font-satoshi text-[0.9rem] tracking-wide uppercase transition-colors duration-200 ${
              location.pathname === link.path
                ? 'text-accent-cyan border-b border-accent-cyan'
                : 'text-text-muted hover:text-accent-cyan'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* RIGHT - Resume (Desktop) */}
      <div className="hidden md:block">
        <a
          href="/resume.pdf"
          download
          className="bg-transparent border border-accent-cyan text-accent-cyan px-4 py-1.5 rounded text-[0.85rem] font-satoshi hover:bg-accent-cyan hover:text-[#0D1117] transition-all duration-200"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-4 md:hidden">
        <a
          href="/resume.pdf"
          download
          className="text-accent-cyan border border-accent-cyan p-1.5 rounded hover:bg-accent-cyan hover:text-bg-primary transition-colors"
        >
          <Download size={18} />
        </a>
        <button onClick={toggleMenu} className="text-text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#0d1117f2] backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-[9998] md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-satoshi text-xl tracking-wide uppercase ${
                location.pathname === link.path
                  ? 'text-accent-cyan'
                  : 'text-text-muted hover:text-accent-cyan'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
