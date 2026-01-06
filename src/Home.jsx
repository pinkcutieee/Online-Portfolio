import { useState, useEffect, useRef } from "react";
import Navbar from "./components/NavBar";

function ParticleBackground({ color = "#dc84c0", particleCount = 50 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(this.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark') || document.body.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const bgImage = isDark 
    ? "url('/Online-Portfolio/newdark-bg.png')" 
    : "url('/Online-Portfolio/bg.png')";

  return (
    <div 
      className="min-h-screen w-screen relative bg-cover bg-center bg-no-repeat z-10 transition-all duration-500"
      style={{ backgroundImage: bgImage }}
    >
      <ParticleBackground color={isDark ? "#B4E0F7" : "#dc84c0"} />
      
      <section className="pt-24 text-center">
        <p className="text-7xl font-bold font-nunito text-black dark:text-[#E6F1F7]">
          Ariana
        </p>
        <p className="text-7xl font-bold font-nunito text-black dark:text-[#E6F1F7]">
          Saromo
        </p>
      </section>

      <section className="px-6 pt-10 space-y-8">
        <div className="boxed bg-[#FFEBFD] dark:bg-[#2a2a3a] text-black dark:text-[#E6F1F7] relative">
          <div className="window-titlebar"></div>
          <div className="window-controls">
            <div className="window-icon">─</div>
            <div className="window-icon">□</div>
            <div className="window-icon">✕</div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Hi, I'm Ari!</h3>
            <p className="mt-2">
              I am a Computer Science student passionate about full-stack
              development and creative design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;