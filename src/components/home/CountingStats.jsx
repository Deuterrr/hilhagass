import { useEffect, useRef, useState } from "react";

export default function CountingStats() {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountingAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCountingAnimation = () => {
    let p = 0, e = 0;
    const animate = () => {
      let stillRunning = false;
      if (p < 5) {
        p += 0.1;
        setProjects(Math.floor(p));
        stillRunning = true;
      }
      if (e < 1) {
        e += 0.1;
        setExperience(Math.floor(e));
        stillRunning = true;
      }
      if (stillRunning) requestAnimationFrame(animate);
    };
    animate();
  };

  return (
    <div ref={countRef} className="flex w-full gap-20 mt-16">
      <div className="flex flex-col flex-1">
        <h2 className="mb-2"
          style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
          PROJECTS
        </h2>
        <p style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)"}}>
          +{projects}
        </p>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="mb-2"
          style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
          YEARS OF EXPERIENCE
        </h2>
        <p style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)"}}>
          +{experience}
        </p>
      </div>
    </div>
  );
}
