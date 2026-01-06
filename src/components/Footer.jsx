import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
      const checkDarkMode = () => {
        setIsDark(document.body.classList.contains('dark'));
      };
      
      checkDarkMode();
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      
      return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSectionClick = (section) => {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

  return (
    <footer
      style={{
        backgroundColor: isDark ? '#A5489E' : '#F8CBFE',
        padding: '40px 20px 20px',
        position: 'relative',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={scrollToTop}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: isDark ? '#262363' : '#C295F3',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B4E0F7';
            e.currentTarget.style.color = isDark ? '#342E37' : 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isDark ? '#262363' : '#C295F3';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Back to Top
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src={isDark ? "/Online-Portfolio/White Logo.png" : "/Online-Portfolio/Black Logo.png"} 
              alt="Logo" 
              className="h-10" 
            />
            <h3 className="text-xl font-bold" style={{
              color: isDark ? '#E6F1F7' : 'inherit'
            }}>Ariana Saromo</h3>
          </div>
          <p style={{
            color: isDark ? '#d1d5db' : '#374151',
            marginBottom: '16px'
          }}>Passionate about developing innovative solutions, done the Ari way.</p>
          <div className="flex gap-4">
            <a href="mailto:afsaromo@student.apc.edu.ph"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: isDark ? '#262363' : '#C295F3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B4E0F7';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#262363' : '#C295F3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src="/Online-Portfolio/Email.png" alt="Email" className="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: isDark ? '#262363' : '#C295F3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B4E0F7';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#262363' : '#C295F3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src="/Online-Portfolio/LinkedIn.png" alt="LinkedIn" className="w-5 h-5" />
            </a>

            <a href="https://github.com/pinkcutieee"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: isDark ? '#262363' : '#C295F3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B4E0F7';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#262363' : '#C295F3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src="/Online-Portfolio/GitHub.png" alt="GitHub" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-sm transition-colors hover:underline" style={{ color: isDark ? "#B4E0F7" : "#7630CC"}}>
                Home
              </Link>
            </li>
            <li>
              <button onClick={() => handleSectionClick('about')} className="text-sm transition-colors hover:underline" style={{ color: isDark ? "#B4E0F7" : "#7630CC"}}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('projects')} className="text-sm transition-colors hover:underline" style={{ color: isDark ? "#B4E0F7" : "#7630CC"}}>
                Projects
              </button>
            </li>
            <li>
              <Link to="/certificates" className="text-sm transition-colors hover:underline" style={{ color: isDark ? "#B4E0F7" : "#7630CC"}}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-sm transition-colors hover:underline" style={{ color: isDark ? "#B4E0F7" : "#7630CC"}}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{paddingTop: '5px', textAlign: 'center'}}>
        <p className="text-sm" style={{
          color: isDark ? '#d1d5db' : '#374151'
        }}>
          © 2026 Ariana Saromo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}