
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function NavButton({ to, children, isActive, isRoute }) {
  const activeStyle = isActive ? '#FD9EF6' : '#C295F3';

  const style = {
    backgroundColor: activeStyle,
    color: 'white',
    padding: '8px 18px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block',
    transition: 'all 0.3s ease',
  };

  const MouseHover = (e) => {
    e.target.style.backgroundColor = '#B4E0F7';
    e.target.style.transform = 'translateY(-2px)';
  };

  const MouseLeave = (e) => {
    e.target.style.backgroundColor = activeStyle;
    e.target.style.transform = 'translateY(0)';
  };

  if (isRoute) {
    return (
      <Link
        to={to}
        style={style}
        onMouseEnter={MouseHover}
        onMouseLeave={MouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={to}
      style={style}
      onMouseEnter={MouseHover}
      onMouseLeave={MouseLeave}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/certificates') {
      setActiveSection('certificates');
      return;
    }
    if (location.pathname === '/contacts') {
      setActiveSection('contacts');
      return;
    }

    const Scroll = () => {
      const sections = ['home', 'about', 'projects'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', Scroll);
    Scroll();

    return () => window.removeEventListener('scroll', Scroll);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="bg-[#F8CBFE] rounded-full shadow-sm">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="flex items-center space-x-5">
            <img src="/Online-Portfolio/Black%20Logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold">
              Ariana Saromo's Portfolio
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <NavButton to="/Online-Portfolio/#home"   isActive={activeSection === 'home'}    isRoute={false}>Home</NavButton>
            <NavButton to="/Online-Portfolio/#about"  isActive={activeSection === 'about'}   isRoute={false}>About</NavButton>
            <NavButton to="/Online-Portfolio/#projects" isActive={activeSection === 'projects'} isRoute={false}>Projects</NavButton>
            <NavButton to="/certificates" isActive={activeSection === 'certificates'} isRoute={true}>Certificates</NavButton>
            <NavButton to="/contacts"     isActive={activeSection === 'contacts'}     isRoute={true}>Contact</NavButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
