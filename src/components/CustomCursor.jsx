import { useEffect, useRef } from "react";
import "../styles/components/CustomCursor.css";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const fadeTimeoutRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const startFadeTimer = () => {
            clearTimeout(fadeTimeoutRef.current);
            fadeTimeoutRef.current = setTimeout(() => {
                cursor.style.opacity = 0;
            }, 1000);
        };

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            cursor.style.opacity = 0.8;

            startFadeTimer();

            if (e.target.closest('.hoverable, a, button, input, textarea, select')) {
                cursor.classList.add("cursor-hover");
            } else {
                cursor.classList.remove("cursor-hover");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        startFadeTimer();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(fadeTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleTouchStart = () => {
            cursor.style.display = "none";
        };

        window.addEventListener("touchstart", handleTouchStart);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor"></div>;
}
