import React, { useRef, useState, useEffect } from "react";
import "../styles/TestimonialsSection.css";

const testimonials = [
  {
    name: "Jack F",
    title: "Ex Blackrock PM",
    content:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge",
    content:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends without it. I'm addicted!",
  },
  {
    name: "Sarah M",
    title: "Portfolio Manager",
    content:
      "The insights from whale movements have completely changed how I approach crypto investments.",
  },
  {
    name: "Sarah S",
    title: "Portfolio Manager",
    content:
      "The insights from whale movements have completely changed how I approach crypto investments.",
  },
  {
    name: "Sarah A",
    title: "Portfolio Manager",
    content:
      "The insights from whale movements have completely changed how I approach crypto investments.",
  },
  {
    name: "Sarah B",
    title: "Portfolio Manager",
    content:
      "The insights from whale movements have completely changed how I approach crypto investments.",
  },
  {
    name: "Sarah C",
    title: "Portfolio Manager",
    content:
      "The insights from whale movements have completely changed how I approach crypto investments.",
  },
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;

    // Infinite scroll reset
    const maxScroll = containerRef.current.scrollWidth / 2;
    if (containerRef.current.scrollLeft >= maxScroll) {
      containerRef.current.scrollLeft -= maxScroll;
    } else if (containerRef.current.scrollLeft <= 0) {
      containerRef.current.scrollLeft += maxScroll;
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-header">
        <h3 className="testimonials-title">Testimonials</h3>
      </div>

      <div className="testimonials-slider-container">
        <div
          ref={containerRef}
          className={`testimonials-slider ${isDragging ? "dragging" : ""}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-card-content">
                <div className="testimonial-header-line">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <p className="testimonial-title">{t.title}</p>
                </div>
                <p className="testimonial-text">"{t.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
