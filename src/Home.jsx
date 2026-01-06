import { useState, useEffect, useRef } from "react";
import Navbar from "./components/NavBar";

function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} style={{
        transform: isVisible ? 'none' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}>
      {children}
    </div>
  );
}

function ParticleBackground({ color = '#dc84c0', particleCount = 50 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
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
        if (this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
    }
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount]);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

const projects = [
  {
    title: "Exploring Forecast-based Financing (FbF) and Flood Risk Prediction (FUNES)",
    date: "September 2025",
    names: "by: Ashley May Barisoro, Gwyneth Cataylo, and Ariana May Saromo",
    description: `A research study analyzing flood risk prediction. Created a simplified Python implementation for flood prone communities.`,
    link: "/Online-Portfolio/DESALGIRLS_FinalProject_DESALGO.pdf",
    details: "Research Study | Data Analysis | Language: Python",
    image: "/Online-Portfolio/DESALGIRLS_FinalProject_DESALGO.png"
  },
  {
    title: "Proposed Database Design for Sertfit Athletics Gym & Sports Hub",
    date: "September 2025",
    names: "by: Christian Gabriel Agot, Roycee Hugh Lacuesta, June Benedict Malabanan, and Ariana May Saromo",
    description: `The design includes an business rules and processes, ERD, data dictionary, and commands used in MariaDB.`,
    link: "/Online-Portfolio/ARINALITY_Finals_Project.pdf",
    details: "Database Design | SQL | DBMS: MariaDB",
    image: "/Online-Portfolio/ARINALITY_Finals_Project.png"
  }
];

function ProjectCard({ project, darkMode }) {
  return (
    <div className="relative flex gap-5 p-5 rounded-xl shadow hover:shadow-sm transform hover:-translate-y-1 transition"
         style={{ backgroundColor: darkMode ? "#342E37" : "#FFEBFD" }}>
      <small className="absolute top-3 right-3 text-sm" style={{ color: darkMode ? "#9ca3af" : "#666" }}>{project.date}</small>
      <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
      </div>
      <div className="flex-1 text-left">
        <h4 className="font-bold text-sm md:text-base mb-2" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>{project.title}</h4>
        <p className="font-bold text-sm mb-1" style={{ color: darkMode ? "#d1d5db" : "#374151" }}>{project.names}</p><br/>
        <p className="text-medium mb-1" style={{ color: darkMode ? "#E6F1F7" : "#374151" }}>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold hover:underline mb-2" style={{ color: darkMode ? "#B4E0F7" : "#7630CC" }}>
            View Document
        </a><br/>
        <small style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}>{project.details}</small>
      </div>
    </div>
  );
}

function Home({ darkMode }) {
  return (
    <div className="min-h-screen w-screen relative" style={{
        backgroundImage: darkMode ? 'url(/Online-Portfolio/newdark-bg.png)' : 'url(/Online-Portfolio/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }}>
      <ParticleBackground color={darkMode ? "#E6F1F7" : "#dc84c0"} particleCount={50} />
      <div className="relative" style={{ zIndex: 10 }}>
        <div id="home" className="pt-20 px-4 flex gap-4 items-center">
          <div className="flex-1 flex flex-col justify-center items-center text-center">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold font-nunito" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>Ariana</p>
              <p className="text-6xl md:text-7xl lg:text-8xl mb-4 font-bold font-nunito" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>Saromo</p>
              <div className="flex gap-2 mt-2 justify-center">
                <p className="text-lg px-6 py-2 bg-[#FD9EF6] text-white rounded-full">Computer Science Student</p>
              </div>
          </div>
          <div style={{ width: '600px', height: '680px' }}>
            <img src="/Online-Portfolio/Me.png" alt="Hero" className="w-full h-full object-cover"/>
          </div>
        </div>
        <article id="about" className="pt-8 px-4 md:px-8">
          <ScrollReveal>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="boxed">
                  <div className="window-titlebar" style={{ backgroundColor: darkMode ? "#A6427C" : "#FD9EF6" }}></div>
                  <h3 style={{ color: darkMode ? "#E6F1F7" : "black" }}><b>Hi, I'm Ari!</b></h3>
                  <div className="text-lg" style={{ color: darkMode ? "#E6F1F7" : "black" }}>
                    I am a 2nd-year Computer Science student at Asia Pacific College...
                  </div>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </article>
        <section id="projects" className="pt-8 px-4 md:px-8 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left" style={{ color: darkMode ? "#E6F1F7" : "inherit" }}>Projects</h2>
            <div className="flex flex-col gap-3">
                {projects.map((p, i) => <ProjectCard key={i} project={p} darkMode={darkMode} />)}
            </div>
        </section>
      </div>
    </div>
  );
}
export default Home;