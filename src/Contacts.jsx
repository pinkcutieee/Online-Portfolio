import { useState, useEffect } from "react";

export function Contacts() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.body.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen w-screen"
      style={{
        backgroundImage: isDark ? 'url(/Online-Portfolio/dark-bg.png)' : 'url(/Online-Portfolio/bg1.png)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="pt-40 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
          color: isDark ? '#E6F1F7' : 'inherit'
        }}>Connect with Me</h1>
        <p className="text-lg mb-8" style={{
          color: isDark ? '#d1d5db' : 'inherit'
        }}>
          Feel free to reach out and connect with me me through any of the following:
        </p>
      </div>
    </div>

    <div className="px-4 md:px-8 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6"
          style={{
            backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-sm mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>Name</p>
              <p className="font-semibold text-lg" style={{
                color: isDark ? '#E6F1F7' : 'inherit'
              }}>Ariana May F. Saromo</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>Course</p>
              <p className="font-semibold text-lg" style={{
                color: isDark ? '#E6F1F7' : 'inherit'
              }}>Bachelor of Science in Computer Science</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>School</p>
              <p className="font-semibold text-lg" style={{
                color: isDark ? '#E6F1F7' : 'inherit'
              }}>Asia Pacific College</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            style={{
              backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/Online-Portfolio/BunEmail.png" alt="Email Icon" style={{ width: '200px', height: '200px' }}/>
          </div>
            <h3 className="font-bold text-lg mb-3" style={{
              color: isDark ? '#E6F1F7' : 'inherit'
            }}>Email</h3>
            <div style={{ marginBottom: '10px' }}>
              <p className="text-xs mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>Primary</p>
              <a href="mailto:afsaromo@student.apc.edu.ph"
                style={{
                  color: isDark ? '#B4E0F7' : '#7630CC',
                  textDecoration: 'none',
                  fontSize: '13px',
                  wordBreak: 'break-all',
                  display: 'block'
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                afsaromo@student.apc.edu.ph
              </a>
            </div>
            <div>
              <p className="text-xs mb-1" style={{
                color: isDark ? '#9ca3af' : '#4b5563'
              }}>Secondary</p>
              <a href="mailto:ririariii15@gmail.com"
                  style={{
                    color: isDark ? '#B4E0F7' : '#7630CC',
                    textDecoration: 'none',
                    fontSize: '13px',
                    wordBreak: 'break-all',
                    display: 'block'
                  }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                ririariii15@gmail.com
              </a>
            </div>
          </div>

          <div 
            style={{
              backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/Online-Portfolio/BunPhone.png" alt="Phone Icon" style={{ width: '200px', height: '200px' }}/>
          </div>
          <h3 className="font-bold text-lg mb-2" style={{
            color: isDark ? '#E6F1F7' : 'inherit'
          }}>Phone</h3>
            <a href="tel:+63 995 775 7988"
              style={{
                color: isDark ? '#B4E0F7' : '#7630CC',
                textDecoration: 'none',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              +63 995 775 7988
            </a>
          </div>

          <div 
            style={{
              backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <img src="/Online-Portfolio/BunLI.png" alt="LinkedIn Icon" style={{ width: '200px', height: '200px' }}/>
          </div>
          <h3 className="font-bold text-lg mb-2" style={{
            color: isDark ? '#E6F1F7' : 'inherit'
          }}>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDark ? '#B4E0F7' : '#7630CC',
                textDecoration: 'none',
                fontSize: '14px',
                wordBreak: 'break-all'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Ariana May Saromo
            </a>
          </div>

          <div 
            style={{
              backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/Online-Portfolio/BunGH.png" alt="GitHub Icon" style={{ width: '200px', height: '200px' }}/>
          </div>
            <h3 className="font-bold text-lg mb-2" style={{
              color: isDark ? '#E6F1F7' : 'inherit'
            }}>GitHub</h3>
            <a href="https://github.com/pinkcutieee"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDark ? '#B4E0F7' : '#7630CC',
                textDecoration: 'none',
                fontSize: '14px',
                wordBreak: 'break-all'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              pinkcutieee
            </a>
          </div>

          <div 
            style={{
              backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/Online-Portfolio/BunTH.png" alt="Trailhead Icon" style={{ width: '200px', height: '200px' }}/>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{
              color: isDark ? '#E6F1F7' : 'inherit'
            }}>Trailhead</h3>
            <a href="https://www.salesforce.com/trailblazer/xne2vyi84ilms2r1b8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDark ? '#B4E0F7' : '#7630CC',
                textDecoration: 'none',
                fontSize: '14px',
                wordBreak: 'break-all'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Ariana May Saromo
            </a>
          </div>

          <div 
            style={{
              backgroundColor: isDark ? '#2a2a3a' : '#FFEBFD',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/Online-Portfolio/BunML.png" alt="Microsoft Learn Icon" style={{ width: '200px', height: '200px' }}/>
          </div>
          <h3 className="font-bold text-lg mb-2" style={{
            color: isDark ? '#E6F1F7' : 'inherit'
          }}>Microsoft Learn</h3>
          <a href="https://learn.microsoft.com/en-us/users/arianamaysaromo-1068/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDark ? '#B4E0F7' : '#7630CC',
                textDecoration: 'none',
                fontSize: '14px',
                wordBreak: 'break-all'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            Ariana May Saromo
          </a>
        </div>
            

        </div>
      </div>
    </div>
  </div>
  );
}
export default Contacts;