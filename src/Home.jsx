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

function ProjectCard({ project }) {
  return (
    <div className="relative flex gap-5 bg-[#FFEBFD] dark:bg-[#2a2a3a] p-5 rounded-xl shadow hover:-translate-y-1 transition text-black dark:text-[#E6F1F7]">
      <small className="absolute top-3 right-3 text-sm">{project.date}</small>
      <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
        <img src={project.image} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold mb-2">{project.title}</h4>
        <p className="font-bold text-sm mb-1 dark:text-gray-300">
          {project.names}
        </p>
        <p className="text-sm mb-2 dark:text-gray-300">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          className="text-[#7630CC] dark:text-[#B4E0F7] font-semibold hover:underline"
        >
          {project.title}
        </a>
        <br />
        <small className="text-gray-500 dark:text-gray-400">
          {project.details}
        </small>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-screen relative bg-[url('/Online-Portfolio/bg.png')] dark:bg-[url('/Online-Portfolio/newdark-bg.png')] bg-cover bg-center bg-no-repeat z-10">
      <ParticleBackground />
      <Navbar />

      <section className="pt-24 text-center">
        <p className="text-7xl font-bold font-nunito text-black dark:text-[#E6F1F7]">
          Ariana
        </p>
        <p className="text-7xl font-bold font-nunito text-black dark:text-[#E6F1F7]">
          Saromo
        </p>
      </section>

      <section className="px-6 pt-10 space-y-8">
        <p className="boxed bg-[#FFEBFD] dark:bg-[#2a2a3a] text-black dark:text-[#E6F1F7]">
          <div className="window-titlebar"></div>
          <div className="window-controls">
            <div className="window-icon">─</div>
            <div className="window-icon">□</div>
            <div className="window-icon">✕</div>
          </div>
          <h3>Hi, I'm Ari!</h3>
          <p className="mt-2">
            I am a Computer Science student passionate about full-stack
            development and creative design.
          </p>
        </p>
      </section>
    </div>
  );
}

export default Home;
