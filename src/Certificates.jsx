import { useState, useEffect } from "react";

export function Certificates() {
  const [openCategory, setOpenCategory] = useState(null);
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

  const certificateCategories = [
    { id: "One",
      category: "Cisco",
      certificates: [
        {file: "/Online-Portfolio/NetworkingBasicsUpdate.pdf", preview: "/Online-Portfolio/NetworkingBasicsUpdate.png", title: "Networking Basics", date: "October 19, 2025", },
      ],
    },

    { id: "Two",
      category: "IBM",
      certificates: [
        { file: "/Online-Portfolio/ExploringEmergingTech.pdf", preview: "/Online-Portfolio/ExploringEmergingTech.png", title: "Exploring Emerging Tech", date: "September 15, 2024", },
        { file: "/Online-Portfolio/PythonForProgrammers.pdf", preview: "/Online-Portfolio/PythonForProgrammers.png", title: "Python for Programmers", date: "October 16, 2024", },
      ],
    },

    { id: "Three",
      category: "LinkedIn",
      certificates: [
        { file: "/Online-Portfolio/Advanced Algorithmic Thinking with Python.pdf", preview: "/Online-Portfolio/Advanced Algorithmic Thinking with Python.png", title: "Advanced Algorithmic Thinking with Python", date: "September 20, 2025" },
        { file: "/Online-Portfolio/Branding Strategy Define Your Creative Edge.pdf", preview: "/Online-Portfolio/Branding Strategy Define Your Creative Edge.png", title: "Branding Strategy Define Your Creative Edge", date: "January 17, 2025" },
        { file: "/Online-Portfolio/Computer Science Principles Digital Information.pdf", preview: "/Online-Portfolio/Computer Science Principles Digital Information.png", title: "Computer Science Principles Digital Information", date: "January 7, 2025" },
        { file: "/Online-Portfolio/Creating a Business Plan.pdf", preview: "/Online-Portfolio/Creating a Business Plan.png", title: "Creating a Business Plan", date: "January 8, 2025" },
        { file: "/Online-Portfolio/Cybersecurity Awareness Cybersecurity Terminology.pdf", preview: "/Online-Portfolio/Cybersecurity Awareness Cybersecurity Terminology.png", title: "Cybersecurity Awareness Cybersecurity Terminology", date: "October 24, 2024" },
        { file: "/Online-Portfolio/Electronics Foundations Basic Circuits.pdf", preview: "/Online-Portfolio/Electronics Foundations Basic Circuits.png", title: "Electronics Foundations: Basic Circuits", date: "December 5, 2025" },
        { file: "/Online-Portfolio/Electronics Foundations Fundamentals.pdf", preview: "/Online-Portfolio/Electronics Foundations Fundamentals.png", title: "Electronics Foundations: Fundamentals", date: "November 20, 2025" },
        { file: "/Online-Portfolio/Foundations of Algorithmic Thinking with Python.pdf", preview: "/Online-Portfolio/Foundations of Algorithmic Thinking with Python.png", title: "Foundations of Algorithmic Thinking with Python", date: "September 16, 2025" },
        { file: "/Online-Portfolio/Fundamentals of Dynamic Programming.pdf", preview: "/Online-Portfolio/Fundamentals of Dynamic Programming.png", title: "Fundamentals of Dynamic Programming", date: "October 13, 2025" },
        { file: "/Online-Portfolio/Learning Arduino Foundations.pdf", preview: "/Online-Portfolio/Learning Arduino Foundations.png", title: "Learning Arduino: Foundations", date: "November 18, 2025" },
        { file: "/Online-Portfolio/Learning Arduino Interfacing with Hardware.pdf", preview: "/Online-Portfolio/Learning Arduino Interfacing with Hardware.png", title: "Learning Arduino: Interfacing with Hardware", date: "November 27, 2025" },
        { file: "/Online-Portfolio/Managing Projects with Microsoft Teams.pdf", preview: "/Online-Portfolio/Managing Projects with Microsoft Teams.png", title: "Managing Projects with Microsoft Teams", date: "September 14, 2024" },
        { file: "/Online-Portfolio/Master Microsoft Teams.pdf", preview: "/Online-Portfolio/Master Microsoft Teams.png", title: "Master Microsoft Teams", date: "September 14, 2024" },
        { file: "/Online-Portfolio/Microsoft Teams Essential Training 2024.pdf", preview: "/Online-Portfolio/Microsoft Teams Essential Training 2024.png", title: "Microsoft Teams: Essential Training (2024)", date: "September 13, 2024" },
        { file: "/Online-Portfolio/Microsoft Teams Successful Meetings Webinars and Events.pdf", preview: "/Online-Portfolio/Microsoft Teams Successful Meetings Webinars and Events.png", title: "Microsoft Teams: Successful Meetings Webinars and Events", date: "September 13, 2024" },
        { file: "/Online-Portfolio/Microsoft Teams Tips and Tricks.pdf", preview: "/Online-Portfolio/Microsoft Teams Tips and Tricks.png", title: "Microsoft Teams: Tips and Tricks", date: "September 13, 2024" },
        { file: "/Online-Portfolio/Microsoft Teams Working with Files.pdf", preview: "/Online-Portfolio/Microsoft Teams Working with Files.png", title: "Microsoft Teams: Working with Files", date: "September 13, 2024" },
        { file: "/Online-Portfolio/Programming Foundations Databases.pdf", preview: "/Online-Portfolio/Programming Foundations Databases.png", title: "Programming Foundations: Databases", date: "December 16, 2025" },
        { file: "/Online-Portfolio/Python Data Structures Linked Lists.pdf", preview: "/Online-Portfolio/Python Data Structures Linked Lists.png", title: "Python Data Structures: Linked Lists", date: "May 14, 2025" },
        { file: "/Online-Portfolio/Python Data Structures Stacks Deques and Queues.pdf", preview: "/Online-Portfolio/Python Data Structures Stacks Deques and Queues.png", title: "Python Data Structures: Stacks Deques and Queues", date: "May 27, 2025" },
        { file: "/Online-Portfolio/Python Data Structures Trees.pdf", preview: "/Online-Portfolio/Python Data Structures Trees.png", title: "Python Data Structures: Trees", date: "June 6, 2025" },
        { file: "/Online-Portfolio/Python Recursion.pdf", preview: "/Online-Portfolio/Python Recursion.png", title: "Python: Recursion", date: "May 26, 2025" },
        { file: "/Online-Portfolio/Running a Design Business Creative Briefs.pdf", preview: "/Online-Portfolio/Running a Design Business Creative Briefs.png", title: "Running a Design Business: Creative Briefs", date: "January 8, 2025" },
        { file: "/Online-Portfolio/Running a Design Business Presentation Skills.pdf", preview: "/Online-Portfolio/Running a Design Business Presentation Skills.png", title: "Running a Design Business: Presentation Skills", date: "January 15, 2025" },
        { file: "/Online-Portfolio/Transition from Java to Python.pdf", preview: "/Online-Portfolio/Transition from Java to Python.png", title: "Transition from Java to Python", date: "March 24, 2025" }
      ],
    },

    { id: "Four",
      category: "Microsoft",
      certificates: [
        { file: "/Online-Portfolio/PythonForBeginners.pdf", preview: "/Online-Portfolio/PythonForBeginners.png", title: "Python for Beginners", date: "October 13, 2024" },
      ],
    },

    { id: "Five",
      category: "Others",
      certificates: [
        { file: "/Online-Portfolio/AgileTalks.pdf", preview: "/Online-Portfolio/AgileTalks.png", title: "Agile Talks: Understanding the Mindset Behind Modern Development", date: "May 7, 2025", },
        { file: "/Online-Portfolio/JPCS-APCMembership2024-2025.pdf", preview: "/Online-Portfolio/JPCS-APCMembership2024-2025.png", title: "Junior Philippine Computer Society - Asia Pacific College Chapter Membership", date: "2024-2025" },
        { file: "/Online-Portfolio/KrollJobExperienceDay.pdf", preview: "/Online-Portfolio/KrollJobExperienceDay.png", title: "Kroll Job Experience Day", date: "October 22, 2024" },
        { file: "/Online-Portfolio/OnePageWebDesign.pdf", preview: "/Online-Portfolio/OnePageWebDesign.png", title: "One Page Web Design Competition", date: "September 12, 2024" },
        { file: "/Online-Portfolio/ResearchForum2025.pdf", preview: "/Online-Portfolio/ResearchForum2025.png", title: "APC-SoCIT Research Forum: “Responsible AI for Sustainable Development: Aligning Research with Global Goals and Industry Standards.”", date: "October 18, 2025" },
        { file: "/Online-Portfolio/WebsiteAnimationWorkshop.pdf", preview: "/Online-Portfolio/WebsiteAnimationWorkshop.png", title: "Website Animation Workshop", date: "November 22, 2025" },
      ],
    },
  ];

  const CertificateClick = (cert) => {
    window.open(cert.file, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen w-screen" style={{
      backgroundImage: isDark ? 'url(/Online-Portfolio/dark-bg.png)' : 'url(/Online-Portfolio/bg1.png)',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      }}
    >
    <div className="pt-40 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
          color: isDark ? '#E6F1F7' : 'inherit'
        }}>My Certificates</h1>
        <p className="text-lg" style={{
          color: isDark ? '#d1d5db' : 'inherit'
        }}>
          A collection of my certifications and achievements.
        </p>
      </div>
    </div>
    <main className="px-4 md:px-8 pb-16">
      <div className="max-w-7xl mx-auto space-y-3">
        {certificateCategories.map((category) => {
          const isOpen = openCategory === category.id;
          return (
            <div key={category.id} className="rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() =>
                  setOpenCategory(isOpen ? null : category.id)
                }
                className="w-full flex justify-between items-center p-5 text-left"
                style={{
                  backgroundColor: isDark ? "#2a2a3a" : "#E6F1F7",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold" style={{
                  color: isDark ? '#E6F1F7' : 'inherit'
                }}>
                  {category.category}
                </h3>
                <span
                  style={{
                    fontSize: "24px",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    color: isDark ? '#E6F1F7' : 'inherit'
                  }}
                >
                ▼
                </span>
              </button>

              <div style={{
                overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.3s ease",
                maxHeight: isOpen ? "80vh" : "0",
                opacity: isOpen ? 1 : 0,
                overflowY: "auto",
                }}
              >
                
              <div style={{
                backgroundColor: isDark ? "#1a1a2a" : "#FFEBFD",
                padding: isOpen ? "20px" : "0 20px",
                transition: "padding 0.3s ease",
                }}
              >
              <div style={{
                display: "grid",
                gridTemplateColumns:
                "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px",
                }}
              >
              {category.certificates.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => CertificateClick(cert)}
                  style={{
                    backgroundColor: isDark ? "#2a2a3a" : "#FCFAF2",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    position: "relative",
                    transition: "transform 0.3s ease",
                    }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")}
                >
                <img src={cert.preview} alt={cert.title} style={{width: "100%", height: "180px", objectFit: "cover",}} />
                <div style={{ padding: "15px" }}>
                  <p style={{ 
                    fontWeight: 600, 
                    fontSize: "16px",
                    color: isDark ? '#E6F1F7' : 'inherit'
                  }}>
                    {cert.title}
                  </p>
                  {cert.date && (
                    <small style={{ color: isDark ? "#9ca3af" : "#505050" }}>
                      {cert.date}
                    </small>
                  )}
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      );
      })}
      </div>
    </main>
  </div>
  );
}