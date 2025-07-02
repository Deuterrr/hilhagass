import { useEffect, useRef, useState } from "react";

export default function AnimatedWords({ text, orange = false }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {text.split(" ").map((word, idx) => (
        <span
        key={idx}
        className={`word ${visible ? "show" : ""}`}
        style={{
            transitionDelay: `${idx * 0.04}s`,
            backgroundColor: orange ? "#feb86b" : "transparent",
        }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
}