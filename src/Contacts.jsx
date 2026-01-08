import { useState, useEffect } from "react";

export function Contacts() {
  const [isDark, setIsDark] = useState(false);
  // Dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.body.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  // Render contacts component
  return (
    <div
      className="min-h-screen w-screen overflow-x-hidden"
      style={{
        backgroundColor: isDark ? '#342E37' : '#FFC0CB',
        backgroundImage: isDark ? 'url(/Online-Portfolio/newdark-bg1.png)' : 'url(/Online-Portfolio/bg1.png)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="pt-32 md:pt-40 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{
          color: isDark ? '#E6F1F7' : 'inherit'
        }}>Connect with Me</h1>
        <p className="text-sm md:text-lg mb-8" style={{
          color: isDark ? '#d1d5db' : 'inherit'
        }}>
          Feel free to reach out and connect with me through any of the following:
        </p>
      </div>
    </div>
    {/* // Contact details section */}
    <div className="px-4 md:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6"
          style={{
            backgroundColor: isDark ? '#342E37' : '#FFEBFD',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: isDark ? '1px solid #A6427C' : 'none'
          }}
        >
          {/* My details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-xs mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>Name</p>
              <p className="font-semibold text-base md:text-lg" style={{
                color: isDark ? '#E6F1F7' : 'inherit'
              }}>Ariana May F. Saromo</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>Course</p>
              <p className="font-semibold text-base md:text-lg" style={{
                color: isDark ? '#E6F1F7' : 'inherit'
              }}>Bachelor of Science in Computer Science</p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>School</p>
              <p className="font-semibold text-base md:text-lg" style={{
                color: isDark ? '#E6F1F7' : 'inherit'
              }}>Asia Pacific College</p>
            </div>
          </div>
        </div>
        {/* Contact details section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Card */}
          <div 
            style={{
              backgroundColor: isDark ? '#342E37' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: isDark ? '1px solid #A6427C' : 'none'
            }}
          >
            <div className="flex justify-center mb-4">
              <img src="/Online-Portfolio/BunEmail.png" alt="Email Icon" className="w-32 h-32 md:w-40 md:h-40 object-contain"/>
            </div>
            <h3 className="font-bold text-lg mb-3" style={{ color: isDark ? '#E6F1F7' : 'inherit' }}>Email</h3>
            <a href="mailto:afsaromo@student.apc.edu.ph" className="block text-xs md:text-sm mb-1 break-all" style={{ color: isDark ? '#B4E0F7' : '#A6427C' }}>afsaromo@student.apc.edu.ph</a>
            <a href="mailto:ririariii15@gmail.com" className="block text-xs md:text-sm break-all" style={{ color: isDark ? '#B4E0F7' : '#A6427C' }}>ririariii15@gmail.com</a>
          </div>

          {/* LinkedIn Card */}
          <div 
            style={{
              backgroundColor: isDark ? '#342E37' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: isDark ? '1px solid #A6427C' : 'none'
            }}
          >
            <div className="flex justify-center mb-4">
              <img src="/Online-Portfolio/BunLI.png" alt="LinkedIn Icon" className="w-32 h-32 md:w-40 md:h-40 object-contain"/>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: isDark ? '#E6F1F7' : 'inherit' }}>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base break-all" style={{ color: isDark ? '#B4E0F7' : '#A6427C' }}>Ariana May Saromo</a>
          </div>

          {/* GitHub Card */}
          <div 
            style={{
              backgroundColor: isDark ? '#342E37' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: isDark ? '1px solid #A6427C' : 'none'
            }}
          >
            <div className="flex justify-center mb-4">
              <img src="/Online-Portfolio/BunGH.png" alt="GitHub Icon" className="w-32 h-32 md:w-40 md:h-40 object-contain"/>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: isDark ? '#E6F1F7' : 'inherit' }}>GitHub</h3>
            <a href="https://github.com/pinkcutieee" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base break-all" style={{ color: isDark ? '#B4E0F7' : '#A6427C' }}>pinkcutieee</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Contacts;