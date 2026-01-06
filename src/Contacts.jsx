import { useState, useEffect } from "react";

export function Contacts() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen w-screen"
      style={{
        backgroundImage: isDark
          ? "url(/Online-Portfolio/dark-bg.png)"
          : "url(/Online-Portfolio/bg1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-40 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: isDark ? "#E6F1F7" : "inherit" }}
          >
            Connect with Me
          </h1>
          <p
            className="text-lg mb-8"
            style={{ color: isDark ? "#d1d5db" : "inherit" }}
          >
            Feel free to reach out and connect with me me through any of the
            following:
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="mb-6"
            style={{
              backgroundColor: isDark ? "#2a2a3a" : "#FFEBFD",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <p
                  className="text-sm mb-1"
                  style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
                >
                  Name
                </p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: isDark ? "#E6F1F7" : "inherit" }}
                >
                  Ariana May F. Saromo
                </p>
              </div>
              <div>
                <p
                  className="text-sm mb-1"
                  style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
                >
                  Course
                </p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: isDark ? "#E6F1F7" : "inherit" }}
                >
                  Bachelor of Science in Computer Science
                </p>
              </div>
              <div>
                <p
                  className="text-sm mb-1"
                  style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
                >
                  School
                </p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: isDark ? "#E6F1F7" : "inherit" }}
                >
                  Asia Pacific College
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Email",
                img: "/Online-Portfolio/BunEmail.png",
                content: (
                  <>
                    <p
                      className="text-xs mb-1"
                      style={{
                        color: isDark ? "#9ca3af" : "#4b5563",
                      }}
                    >
                      Primary
                    </p>
                    <a
                      href="mailto:afsaromo@student.apc.edu.ph"
                      style={{
                        color: isDark ? "#B4E0F7" : "#A6427C",
                        fontSize: "13px",
                        display: "block",
                      }}
                    >
                      afsaromo@student.apc.edu.ph
                    </a>
                    <p
                      className="text-xs mt-2 mb-1"
                      style={{
                        color: isDark ? "#9ca3af" : "#4b5563",
                      }}
                    >
                      Secondary
                    </p>
                    <a
                      href="mailto:ririariii15@gmail.com"
                      style={{
                        color: isDark ? "#B4E0F7" : "#A6427C",
                        fontSize: "13px",
                        display: "block",
                      }}
                    >
                      ririariii15@gmail.com
                    </a>
                  </>
                ),
              },
              {
                title: "Phone",
                img: "/Online-Portfolio/BunPhone.png",
                content: (
                  <a
                    href="tel:+639957757988"
                    style={{
                      color: isDark ? "#B4E0F7" : "#A6427C",
                      fontSize: "16px",
                    }}
                  >
                    +63 995 775 7988
                  </a>
                ),
              },
              {
                title: "LinkedIn",
                img: "/Online-Portfolio/BunLI.png",
                content: (
                  <a
                    href="https://www.linkedin.com/in/ariana-may-s-6a6ba6328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: isDark ? "#B4E0F7" : "#A6427C",
                      fontSize: "14px",
                    }}
                  >
                    Ariana May Saromo
                  </a>
                ),
              },
              {
                title: "GitHub",
                img: "/Online-Portfolio/BunGH.png",
                content: (
                  <a
                    href="https://github.com/pinkcutieee"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: isDark ? "#B4E0F7" : "#A6427C",
                      fontSize: "14px",
                    }}
                  >
                    pinkcutieee
                  </a>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  backgroundColor: isDark ? "#2a2a3a" : "#FFEBFD",
                  borderRadius: "15px",
                  padding: "25px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[200px] h-[200px]"
                  />
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: isDark ? "#E6F1F7" : "inherit" }}
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
