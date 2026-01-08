import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

// Navigation button component
function NavButton({ children, isActive, onClick, to, darkMode, mobile }) {
  const activeStyle = darkMode 
    ? (isActive ? "#A6427C" : "#6A337E") 
    : (isActive ? "#FD9EF6" : "#C295F3");

  const hoverColor = darkMode ? "#262363" : "#B4E0F7";

  const style = {
    backgroundColor: activeStyle,
    color: "white",
    padding: mobile ? "12px 24px" : "8px 18px",
    borderRadius: "25px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: mobile ? "block" : "inline-block",
    width: mobile ? "100%" : "auto",
    textAlign: "center"
  };

  const handleEnter = (e) => {
    e.currentTarget.style.backgroundColor = hoverColor;
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.backgroundColor = activeStyle;
    e.currentTarget.style.transform = "translateY(0)";
  };

  if (to) {
    return (
      <Link
        to={to}
        style={style}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={style}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}


export default function Navbar({ darkMode, setDarkMode }) {
  // Track active section
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSectionClick = (section) => {
    navigate("/");
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    }, 100);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Update active section based on scroll or route
  useEffect(() => {
    if (location.pathname === "/certificates") {
      setActiveSection("certificates");
      return;
    }

    if (location.pathname === "/contacts") {
      setActiveSection("contacts");
      return;
    }

    if (location.pathname === "/") {
      const onScroll = () => {
        const sections = ["home", "about", "projects"];
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", onScroll);
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 px-2 sm:px-4 lg:px-8 pt-2 sm:pt-4">
      <div className="rounded-full shadow-sm" style={{
        backgroundColor: darkMode ? "#A5489E" : "#F8CBFE"
      }}>
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 max-w-7xl mx-auto px-3 sm:px-6 md:px-12">
          {/* Logo, title, and navigation buttons */}
          <div className="flex items-center space-x-2 sm:space-x-5">
            <img
              src={darkMode ? "/Online-Portfolio/White Logo.png" : "/Online-Portfolio/Black Logo.png"}
              alt="Logo"
              className="h-6 sm:h-10 md:h-12"
            />
            <span className="text-sm sm:text-lg md:text-2xl font-semibold" style={{
              color: darkMode ? "#E6F1F7" : "inherit"
            }}>
              <span className="hidden sm:inline">Ariana Saromo's Portfolio</span>
              <span className="sm:hidden">Portfolio</span>
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavButton to="/" isActive={activeSection === "home"} darkMode={darkMode}>
              Home
            </NavButton>

            <NavButton
              onClick={() => handleSectionClick("about")}
              isActive={activeSection === "about"}
              darkMode={darkMode}
            >
              About
            </NavButton>

            <NavButton
              onClick={() => handleSectionClick("projects")}
              isActive={activeSection === "projects"}
              darkMode={darkMode}
            >
              Projects
            </NavButton>

            <NavButton
              to="/certificates"
              isActive={activeSection === "certificates"}
              darkMode={darkMode}
            >
              Certificates
            </NavButton>

            <NavButton
              to="/contacts"
              isActive={activeSection === "contacts"}
              darkMode={darkMode}
            >
              Contact
            </NavButton>
            
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                backgroundColor: darkMode ? "#C295F3" : "#6A337E",
                color: "white",
                padding: "8px 12px",
                borderRadius: "25px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? "#262363" : "#B4E0F7";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? "#C295F3" : "#6A337E";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                backgroundColor: darkMode ? "#C295F3" : "#6A337E",
                color: "white",
                padding: "6px 10px",
                borderRadius: "25px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                backgroundColor: darkMode ? "#C295F3" : "#6A337E",
                color: "white",
                padding: "6px 10px",
                borderRadius: "25px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden mt-2 rounded-3xl shadow-lg p-4"
          style={{
            backgroundColor: darkMode ? "#A5489E" : "#F8CBFE"
          }}
        >
          <div className="flex flex-col gap-3">
            <div onClick={handleLinkClick}>
              <NavButton to="/" isActive={activeSection === "home"} darkMode={darkMode} mobile>
                Home
              </NavButton>
            </div>
            <NavButton
              onClick={() => handleSectionClick("about")}
              isActive={activeSection === "about"}
              darkMode={darkMode}
              mobile
            >
              About
            </NavButton>
            <NavButton
              onClick={() => handleSectionClick("projects")}
              isActive={activeSection === "projects"}
              darkMode={darkMode}
              mobile
            >
              Projects
            </NavButton>
            <div onClick={handleLinkClick}>
              <NavButton
                to="/certificates"
                isActive={activeSection === "certificates"}
                darkMode={darkMode}
                mobile
              >
                Certificates
              </NavButton>
            </div>
            <div onClick={handleLinkClick}>
              <NavButton
                to="/contacts"
                isActive={activeSection === "contacts"}
                darkMode={darkMode}
                mobile
              >
                Contact
              </NavButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}