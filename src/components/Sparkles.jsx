import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const SparklesCore = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className = "",
  particleColor = "#FFF",
}) => {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleArray = [];
    for (let i = 0; i < particleDensity; i++) {
      particleArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(particleArray);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particleArray.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleDensity, minSize, maxSize, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0", className)}
      style={{ background }}
    />
  );
};