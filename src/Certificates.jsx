import { useState } from "react";

export function Certificates() {
  const [openCategory, setOpenCategory] = useState(null);
  const certificateCategories = [
    { id: "One",
      category: "Cisco",
      certificates: [
        {file: "/NetworkingBasicsUpdate.pdf", preview: "/NetworkingBasicsUpdate.png", title: "Networking Basics", date: "October 19, 2025", },
      ],
    },

    { id: "Two",
      category: "IBM",
      certificates: [
        { file: "/ExploringEmergingTech.pdf", preview: "/ExploringEmergingTech.png", title: "Exploring Emerging Tech", date: "September 15, 2024", },
        { file: "/PythonForProgrammers.pdf", preview: "/PythonForProgrammers.png", title: "Python for Programmers", date: "October 16, 2024", },
      ],
    },

    { id: "Three",
      category: "LinkedIn",
      certificates: [
        { file: "/Advanced Algorithmic Thinking with Python.pdf", preview: "/Advanced Algorithmic Thinking with Python.png", title: "Advanced Algorithmic Thinking with Python", date: "September 20, 2025" },
        { file: "/Branding Strategy Define Your Creative Edge.pdf", preview: "/Branding Strategy Define Your Creative Edge.png", title: "Branding Strategy Define Your Creative Edge", date: "January 17, 2025" },
        { file: "/Computer Science Principles Digital Information.pdf", preview: "/Computer Science Principles Digital Information.png", title: "Computer Science Principles Digital Information", date: "January 7, 2025" },
        { file: "/Creating a Business Plan.pdf", preview: "/Creating a Business Plan.png", title: "Creating a Business Plan", date: "January 8, 2025" },
        { file: "/Cybersecurity Awareness Cybersecurity Terminology.pdf", preview: "/Cybersecurity Awareness Cybersecurity Terminology.png", title: "Cybersecurity Awareness Cybersecurity Terminology", date: "October 24, 2024" },
        { file: "/Electronics Foundations Basic Circuits.pdf", preview: "/Electronics Foundations Basic Circuits.png", title: "Electronics Foundations: Basic Circuits", date: "December 5, 2025" },
        { file: "/Electronics Foundations Fundamentals.pdf", preview: "/Electronics Foundations Fundamentals.png", title: "Electronics Foundations: Fundamentals", date: "November 20, 2025" },
        { file: "/Foundations of Algorithmic Thinking with Python.pdf", preview: "/Foundations of Algorithmic Thinking with Python.png", title: "Foundations of Algorithmic Thinking with Python", date: "September 16, 2025" },
        { file: "/Fundamentals of Dynamic Programming.pdf", preview: "/Fundamentals of Dynamic Programming.png", title: "Fundamentals of Dynamic Programming", date: "October 13, 2025" },
        { file: "/Learning Arduino Foundations.pdf", preview: "/Learning Arduino Foundations.png", title: "Learning Arduino: Foundations", date: "November 18, 2025" },
        { file: "/Learning Arduino Interfacing with Hardware.pdf", preview: "/Learning Arduino Interfacing with Hardware.png", title: "Learning Arduino: Interfacing with Hardware", date: "November 27, 2025" },
        { file: "/Managing Projects with Microsoft Teams.pdf", preview: "/Managing Projects with Microsoft Teams.png", title: "Managing Projects with Microsoft Teams", date: "September 14, 2024" },
        { file: "/Master Microsoft Teams.pdf", preview: "/Master Microsoft Teams.png", title: "Master Microsoft Teams", date: "September 14, 2024" },
        { file: "/Microsoft Teams Essential Training 2024.pdf", preview: "/Microsoft Teams Essential Training 2024.png", title: "Microsoft Teams: Essential Training (2024)", date: "September 13, 2024" },
        { file: "/Microsoft Teams Successful Meetings Webinars and Events.pdf", preview: "/Microsoft Teams Successful Meetings Webinars and Events.png", title: "Microsoft Teams: Successful Meetings Webinars and Events", date: "September 13, 2024" },
        { file: "/Microsoft Teams Tips and Tricks.pdf", preview: "/Microsoft Teams Tips and Tricks.png", title: "Microsoft Teams: Tips and Tricks", date: "September 13, 2024" },
        { file: "/Microsoft Teams Working with Files.pdf", preview: "/Microsoft Teams Working with Files.png", title: "Microsoft Teams: Working with Files", date: "September 13, 2024" },
        { file: "/Programming Foundations Databases.pdf", preview: "/Programming Foundations Databases.png", title: "Programming Foundations: Databases", date: "December 16, 2025" },
        { file: "/Python Data Structures Linked Lists.pdf", preview: "/Python Data Structures Linked Lists.png", title: "Python Data Structures: Linked Lists", date: "May 14, 2025" },
        { file: "/Python Data Structures Stacks Deques and Queues.pdf", preview: "/Python Data Structures Stacks Deques and Queues.png", title: "Python Data Structures: Stacks Deques and Queues", date: "May 27, 2025" },
        { file: "/Python Data Structures Trees.pdf", preview: "/Python Data Structures Trees.png", title: "Python Data Structures: Trees", date: "June 6, 2025" },
        { file: "/Python Recursion.pdf", preview: "/Python Recursion.png", title: "Python: Recursion", date: "May 26, 2025" },
        { file: "/Running a Design Business Creative Briefs.pdf", preview: "/Running a Design Business Creative Briefs.png", title: "Running a Design Business: Creative Briefs", date: "January 8, 2025" },
        { file: "/Running a Design Business Presentation Skills.pdf", preview: "/Running a Design Business Presentation Skills.png", title: "Running a Design Business: Presentation Skills", date: "January 15, 2025" },
        { file: "/Transition from Java to Python.pdf", preview: "/Transition from Java to Python.png", title: "Transition from Java to Python", date: "March 24, 2025" }
      ],
    },

    { id: "Four",
      category: "Microsoft",
      certificates: [
        { file: "/PythonForBeginners.pdf", preview: "/PythonForBeginners.png", title: "Python for Beginners", date: "October 13, 2024" },
      ],
    },

    { id: "Five",
      category: "Others",
      certificates: [
        { file: "/AgileTalks.pdf", preview: "/AgileTalks.png", title: "Agile Talks: Understanding the Mindset Behind Modern Development", date: "May 7, 2025", },
        { file: "/JPCS-APCMembership2024-2025.pdf", preview: "/JPCS-APCMembership2024-2025.png", title: "Junior Philippine Computer Society - Asia Pacific College Chapter Membership", date: "2024-2025" },
        { file: "/KrollJobExperienceDay.pdf", preview: "/KrollJobExperienceDay.png", title: "Kroll Job Experience Day", date: "October 22, 2024" },
        { file: "/OnePageWebDesign.pdf", preview: "/OnePageWebDesign.png", title: "One Page Web Design Competition", date: "September 12, 2024" },
        { file: "/ResearchForum2025.pdf", preview: "/ResearchForum2025.png", title: "APC-SoCIT Research Forum: “Responsible AI for Sustainable Development: Aligning Research with Global Goals and Industry Standards.”", date: "October 18, 2025" },
        { file: "/WebsiteAnimationWorkshop.pdf", preview: "/WebsiteAnimationWorkshop.png", title: "Website Animation Workshop", date: "November 22, 2025" },
      ],
    },
  ];

  const CertificateClick = (cert) => {
    window.open(cert.file, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen w-screen bg-pink-200" style={{
      backgroundImage: "url(bg1.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      }}
    >
    <div className="pt-40 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Certificates</h1>
        <p className="text-lg">
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
                  backgroundColor: "#E6F1F7",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold">
                  {category.category}
                </h3>
                <span
                  style={{
                    fontSize: "24px",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                ❤︎
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
                backgroundColor: "#FFEBFD",
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
                    backgroundColor: "#FCFAF2",
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
                  <p style={{ fontWeight: 600, fontSize: "16px" }}>
                    {cert.title}
                  </p>
                  {cert.date && (
                    <small style={{ color: "#505050" }}>
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
