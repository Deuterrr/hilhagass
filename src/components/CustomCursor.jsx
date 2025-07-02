import { useEffect, useRef } from "react";
import "../styles/components/CustomCursor.css";

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            if (e.target.closest('.hoverable, a, button, input, textarea, select')) {
                cursor.classList.add("cursor-hover");
            } else {
                cursor.classList.remove("cursor-hover");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor"></div>;
}