import { useState, useEffect, useRef } from "react";

// Scroll reveal component/animation from react bit
function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'none' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

// Particle background component/animation from react bit
function ParticleBackground({ color = '#dc84c0' }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Reduce particle count on small screens for performance
    const particleCount = window.innerWidth < 768 ? 25 : 50;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 1 + 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `${color}${Math.floor((1 - distance / 150) * 0.2 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// Project data array
const projects = [
  {
    title: "Exploring Forecast-based Financing (FbF) and Flood Risk Prediction (FUNES) by Red Cross Red Crescent Climate Centre",
    date: "September 2025",
    names: "by: Ashley May Barisoro, Gwyneth Cataylo, and Ariana May Saromo",
    description: `A research study analyzing the algorithms: forecasting-based financing and flood risk prediction made by Red Cross Red Crescent Climate Centre. 
                By creating a simplified Python implementation for flood prone communities in the Philippines, the study aims to understand the effectiveness of 
                these algorithms in disaster risk reduction and management.`,
    link: "/Online-Portfolio/DESALGIRLS_FinalProject_DESALGO.pdf",
    details: "Research Study | Data Analysis | Report Writing | Course: Designing Algorithms | Language: Python",
    image: "/Online-Portfolio/DESALGIRLS_FinalProject_DESALGO.png"
  },
  {
    title: "Proposed Database Design for Sertfit Athletics Gym & Sports Hub",
    date: "September 2025",
    names: "by: Christian Gabriel Agot, Roycee Hugh Lacuesta, June Benedict Malabanan, and Ariana May Saromo",
    description: `A proposed database design for Sertfit Athletics Gym & Sports Hub, a fitness center in Brgy. 174, Malibay, Pasay City, Philippines.
                The design includes an business rules and processes, ERD, data dictionary, the commands used in MariaDB and the table contents.`,
    link: "/Online-Portfolio/ARINALITY_Finals_Project.pdf",
    details: "Database Design | Entity Relationship Diagram | Data Dictionary | SQL | Course: Database Management 1 | DBMS: MariaDB",
    image: "/Online-Portfolio/ARINALITY_Finals_Project.png"
  },
  {
    title: "CLEANI UI/UX Design",
    date: "September 2025",
    names: "by: Nathan Timothy Arcaya, Ashley May Barisoro, Gwyneth Cataylo, and Ariana May Saromo",
    description: "A prototype website design for CLEANI, an instant stain remover pen product that aims to provide users with an easy and convenient way to get rid of stains.",
    link: "https://www.figma.com/proto/qmaTRJ725rPMsa2QZtqR4N/CLEANI?node-id=1713-86&p=f&t=hrck687sUHsPCsMT-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1713%3A86",
    details: "UI/UX Design | Prototyping | User Research | Course: UI/UX Design and Programming | Tool: Figma",
    image: "/Online-Portfolio/CLEANI UIUX Design.png"
  },
  {
    title: "Taxency: Transparency Board Application",
    date: "June 2025",
    names: "by: Gwyneth Cataylo and Ariana May Saromo",
    description: `Taxency is an application to increase transparency in the Philippine tax system by tracking government projects 
        and fund allocation. Using a hash table to organize project data, the app aims to simplify access to information, promote accountability, 
        and support Sustainable Development Goal 16 on strong, transparent institutions.`,
    link: "/Online-Portfolio/Taxency.pdf",
    details: "Python Application | Hash Table | Data Organization | Course: Data Structures and Algorithms | Language: Python",
    image: "/Online-Portfolio/Taxency.png"
  },
  {
    title: "Direct Clothing Inc. Order Entry System",
    date: "February 2025",
    names: "by: Mar Joseph Bijer, Ethan Edgar Francisco, Clark Ken Guiraldo, Ariana May Saromo, and Juan Victor Gabriel Villocillo",
    description: `A proposed order entry system for Direct Clothing Inc.. Includes the option to manage customer information, orders, 
        and inventory of the company.`,
    link: "/Online-Portfolio/Direct Clothing Inc..pdf",
    details: "Order Entry System | System Analysis and Design | Course: Introduction to Programming Languages| Language: Java",
    image: "/Online-Portfolio/Direct Clothing Inc..png"
  },
  {
    title: "Berry Blast Game",
    date: "October 2024",
    names: "by: Ariana May Saromo",
    description: `Berry Blast is a Python mini-game where players catch five types of berries within a one-minute time limit. 
        Afterward, the collected berries are used in a personality test, with results determined by the type gathered the most.`,
    link: "/Online-Portfolio/Berry Blast.pdf",
    details: "Python Mini-Game | Game Development | Course: Programming Concepts and Logic | Language: Python",
    image: "/Online-Portfolio/Berry Blast.png"
  }
];

// Project card component
function ProjectCard({ project, darkMode }) {
  return (
    <div className="relative flex flex-col md:flex-row gap-5 p-5 rounded-xl shadow hover:shadow-sm transform hover:-translate-y-1 transition"
         style={{ backgroundColor: darkMode ? "#342E37" : "#FFEBFD" }}>
      <small className="absolute top-3 right-3 text-xs md:text-sm" style={{ color: darkMode ? "#9ca3af" : "#666" }}>{project.date}</small>
      <div className="w-full md:w-[300px] h-[200px] md:h-[300px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mt-6 md:mt-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"/>
      </div>

      <div className="flex-1 text-left">
        <h4 className="font-bold text-sm md:text-base mb-2" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>{project.title}</h4>
        <p className="font-bold text-sm mb-1" style={{ color: darkMode ? "#d1d5db" : "#374151" }}>{project.names}</p><br className="hidden md:block"/>
        <p className="text-sm mb-1" style={{ color: darkMode ? "#E6F1F7" : "#374151" }}>{project.description}</p>
        <a href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold hover:underline mb-2"
            style={{ color: darkMode ? "#B4E0F7" : "#7630CC" }}>
            {project.title}
        </a><br/>
        <small className="text-sm" style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}>{project.details}</small>
      </div>
    </div>
  );
}

function Home({ darkMode }) {
  return (
    <div className="min-h-screen w-screen relative overflow-x-hidden"
      style={{
        backgroundColor: darkMode ? '#342E37' : '#FFC0CB',
        backgroundImage: darkMode ? 'url(/Online-Portfolio/newdark-bg.png)' : 'url(/Online-Portfolio/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }}>
      <ParticleBackground color={darkMode ? "#A6427C" : "#dc84c0"} />
      
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Hero section */}
        <div id="home" className="pt-20 md:pt-24 px-4 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 flex flex-col justify-center items-center text-center">
              <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mr-0 md:mr-16 lg:mr-48 font-bold font-nunito" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>Ariana</p>
              <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 ml-0 md:ml-16 lg:ml-48 font-bold font-nunito" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>Saromo</p>
              
              <div className="block md:hidden w-full max-w-[250px] mb-4">
                <img src="/Online-Portfolio/Me.png" alt="Hero" className="w-full h-auto object-cover"/>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-2 justify-center flex-wrap">
                <p className="text-xs sm:text-lg px-6 py-2 bg-[#FD9EF6] text-white rounded-full whitespace-nowrap">
                  Computer Science Student
                </p>
                <p className="text-xs sm:text-lg px-6 py-2 bg-[#FD9EF6] text-white rounded-full whitespace-nowrap">
                  Aspiring Full-Stack Developer & Designer
                </p>
              </div>
              <a href="/Online-Portfolio/Resume.pdf" target="_blank" className="inline-block mt-4 px-6 py-2 bg-[#C295F3] text-white rounded-full hover:bg-[#B4E0F7] transition">
                View Resume
              </a>
          </div>
          <div className="hidden md:block md:w-[400px] lg:w-[600px]">
            <img src="/Online-Portfolio/Me.png" alt="Hero" className="w-full h-auto object-cover"/>
          </div>
        </div>

        {/* About me section */}
        <article id="about" className="pt-12 px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img src="/Online-Portfolio/Laptop.png" alt="Laptop" className="w-full max-w-[300px] md:w-[350px] h-auto object-cover rounded-lg"/>
              <div className="flex-1 w-full">
                <div className="boxed">
                  <div className="window-controls">
                    <div className="window-icon">─</div>
                    <div className="window-icon">□</div>
                    <div className="window-icon">✕</div>
                  </div>
                    <h3 className="font-bold mb-2">Hi, I'm Ari!</h3>
                    <div className="text-sm sm:text-lg">
                      I am a 2nd-year Computer Science student at Asia Pacific College with a passion for full-stack development and creative design. 
                      I constantly explore new technologies and techniques to enhance my skills and build innovative solutions that combine functionality 
                      with aesthetics. I enjoy experimenting with both frontend and backend development, creating projects that reflect my interest.
                      In addition to coding, I am passionate about digital art and design, which inspires the visuals I create in my projects.
                    </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </article>

        {/* Skills & Experience + Gear Image */}
        <article className="pt-12 px-4 md:px-8">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="boxed">
                  <div className="window-controls">
                    <div className="window-icon">─</div>
                    <div className="window-icon">□</div>
                    <div className="window-icon">✕</div>
                  </div>
                  <h3 className="font-bold mb-2">Skills</h3>
                  <ul className="text-sm sm:text-lg grid grid-cols-2">
                    <li>• HTML</li><li>• CSS</li><li>• Python</li><li>• Java</li>
                    <li>• JavaScript</li><li>• MySQL</li><li>• React</li><li>• Bootstrap</li>
                    <li>• Tailwind CSS</li><li>• GitHub</li>
                  </ul>
                </div>
                <div className="boxed">
                  <div className="window-controls">
                    <div className="window-icon">─</div>
                    <div className="window-icon">□</div>
                    <div className="window-icon">✕</div>
                  </div>
                  <h3 className="font-bold mb-2">Experience</h3>
                  <ul className="text-sm sm:text-lg">
                    <li>• <b>Marketing Officer</b> - Junior Philippine Computer Society - Asia Pacific College (September 2025 - Present)</li>
                    <li>• <b>President</b> - Information and Communications Technology Club (October 2022 - June 2024)</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <img src="/Online-Portfolio/Gear.png" alt="Gear" className="w-48 sm:w-56 md:w-[400px] h-auto object-contain rounded-lg"/>
              </div>
            </div>
          </ScrollReveal>
        </article>

        {/* Tools & Education + CLI Image */}
        <article className="pt-12 px-4 md:px-8">
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-auto flex justify-center order-last md:order-first">
                <img src="/Online-Portfolio/CLI.png" alt="CLI" className="w-48 sm:w-56 md:w-[350px] h-auto object-contain rounded-lg"/>
              </div>
              
              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="boxed">
                  <div className="window-controls">
                    <div className="window-icon">─</div>
                    <div className="window-icon">□</div>
                    <div className="window-icon">✕</div>
                  </div>
                  <h3 className="font-bold mb-2">Tools & Software Skills</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-4">
                    {[
                      { src: "Microsoft.png", name: "Microsoft Office" }, { src: "VSCode.png", name: "VS Code" },
                      { src: "JetBrains.png", name: "JetBrains" }, { src: "GitHubL.png", name: "GitHub" },
                      { src: "ChatGPT.png", name: "ChatGPT" }, { src: "Claude.png", name: "Claude" },
                      { src: "Procreate.png", name: "Procreate" }, { src: "Figma.png", name: "Figma" },
                      { src: "Canva.png", name: "Canva" }, { src: "Kali.png", name: "Kali Linux" },
                      { src: "Ubuntu.png", name: "Ubuntu" }, { src: "Mysql.png", name: "MySQL" },
                      { src: "XAMPP.png", name: "XAMPP" }, { src: "PacketTracer.png", name: "Packet Tracer" },
                      { src: "Tinkercad.png", name: "Tinkercad" }
                    ].map((tool, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <img src={`/Online-Portfolio/${tool.src}`} alt={tool.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-1" />
                        <span className="text-[8px] sm:text-[10px]">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="boxed">
                  <div className="window-controls">
                    <div className="window-icon">─</div>
                    <div className="window-icon">□</div>
                    <div className="window-icon">✕</div>
                  </div>
                  <h3 className="font-bold mb-2">Education</h3>
                  <ul className="text-sm sm:text-lg">
                    <li>• <b>BSCS</b> - Asia Pacific College (2024-2028)</li>
                    <li>• SHS - Conperey Integrated Learning School Inc. (2022-2024)</li>
                    <li>• JHS - Conperey Integrated Learning School Inc. (2018-2022)</li>
                    <li>• Elementary - Conperey Integrated Learning School Inc. (2012-2018)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </article>

        {/* Projects section */} 
        <section id="projects" className="pt-16 px-4 md:px-8 pb-12">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>Projects</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <ProjectCard project={project} darkMode={darkMode} />
                </ScrollReveal>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;