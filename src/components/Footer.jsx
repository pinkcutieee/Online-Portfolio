export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer
      style={{
        backgroundColor: '#F8CBFE',
        padding: '40px 20px 20px',
        position: 'relative',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={scrollToTop}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#C295F3',
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
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#C295F3';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Back to Top
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/Black Logo.png" alt="Logo" className="h-10" />
            <h3 className="text-xl font-bold">Ariana Saromo</h3>
          </div>
          <p className="text-gray-700 mb-4">Passionate about developing innovative solutions, done the Ari way.</p>
          <div className="flex gap-4">
            <a href="mailto:afsaromo@student.apc.edu.ph"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: '#C295F3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <img src="/Email.png" alt="Email" className="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: '#C295F3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <img src="/LinkedIn.png" alt="LinkedIn" className="w-5 h-5" />
            </a>

            <a href="https://github.com/pinkcutieee"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: '#C295F3',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <img src="/GitHub.png" alt="GitHub" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/#home" className="text-sm transition-colors" style={{ color: "#7630CC"}}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="text-sm transition-colors" style={{ color: "#7630CC"}}>
                About
              </a>
            </li>
            <li>
              <a href="/#projects" className="text-sm transition-colors" style={{ color: "#7630CC"}}>
                Projects
              </a>
            </li>
            <li>
              <a href="/certificates" className="text-sm transition-colors" style={{ color: "#7630CC"}}>
                Certificates
              </a>
            </li>
            <li>
              <a href="/contacts" className="text-sm transition-colors" style={{ color: "#7630CC"}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{paddingTop: '5px', textAlign: 'center'}}>
        <p className="text-sm text-gray-700">
          © 2026 Ariana Saromo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
