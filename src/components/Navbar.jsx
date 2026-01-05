import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavButton({ children, isActive, onClick, to }) {
  const activeStyle = isActive ? "#FD9EF6" : "#C295F3";

  const style = {
    backgroundColor: activeStyle,
    color: "white",
    padding: "8px 18px",
    borderRadius: "25px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block"
  };

  const handleEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#B4E0F7";
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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    }, 100);
  };

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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="bg-[#F8CBFE] rounded-full shadow-sm">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex items-center space-x-5">
            <img
              src="/Online-Portfolio/Black Logo.png"
              alt="Logo"
              className="h-8 sm:h-15 md:h-12"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold">
              Ariana Saromo&apos;s Portfolio
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <NavButton to="/" isActive={activeSection === "home"}>
              Home
            </NavButton>

            <NavButton
              onClick={() => handleSectionClick("about")}
              isActive={activeSection === "about"}
            >
              About
            </NavButton>

            <NavButton
              onClick={() => handleSectionClick("projects")}
              isActive={activeSection === "projects"}
            >
              Projects
            </NavButton>

            <NavButton
              to="/certificates"
              isActive={activeSection === "certificates"}
            >
              Certificates
            </NavButton>

            <NavButton
              to="/contacts"
              isActive={activeSection === "contacts"}
            >
              Contact
            </NavButton>

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                backgroundColor: darkMode ? "#7630CC" : "#C295F3",
                color: "white",
                padding: "8px 12px",
                borderRadius: "25px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B4E0F7";
                e.currentTarget.style.transform = "translateY(-2px)";
                }
              }
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? "#7630CC" : "#C295F3";
                e.currentTarget.style.transform = "translateY(0)";
                }
              }
            >
              {darkMode ? "☀︎" : "☾"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
