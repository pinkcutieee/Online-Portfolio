export default function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("home");
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
    } else if (location.pathname === "/contacts") {
      setActiveSection("contacts");
    } else if (location.pathname === "/") {
      const onScroll = () => {
        const sections = ["home", "about", "projects"];
        const scrollPosition = window.scrollY + 150;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      };
      window.addEventListener("scroll", onScroll);
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="rounded-full shadow-sm" style={{
        backgroundColor: darkMode ? "#A5489E" : "#F8CBFE"
      }}>
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex items-center space-x-5">
            <img
              src={darkMode ? "/Online-Portfolio/White Logo.png" : "/Online-Portfolio/Black Logo.png"}
              alt="Logo"
              className="h-8 sm:h-15 md:h-12"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold" style={{
              color: darkMode ? "#E6F1F7" : "inherit"
            }}>
              Ariana Saromo&apos;s Portfolio
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <NavButton to="/" isActive={activeSection === "home"} darkMode={darkMode}>Home</NavButton>
            <NavButton onClick={() => handleSectionClick("about")} isActive={activeSection === "about"} darkMode={darkMode}>About</NavButton>
            <NavButton onClick={() => handleSectionClick("projects")} isActive={activeSection === "projects"} darkMode={darkMode}>Projects</NavButton>
            <NavButton to="/certificates" isActive={activeSection === "certificates"} darkMode={darkMode}>Certificates</NavButton>
            <NavButton to="/contacts" isActive={activeSection === "contacts"} darkMode={darkMode}>Contact</NavButton>

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
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkMode ? "#262363" : "#B4E0F7"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = darkMode ? "#C295F3" : "#6A337E"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}