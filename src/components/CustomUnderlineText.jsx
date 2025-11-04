import { useEffect, useState } from "react";

export default function CustomUnderlineText({ children, className = "" }) {
    useEffect(() => {
        const el = document.querySelector(".clone-mask");
        const contentRow = el?.closest(".content-row");
        let bgColor = contentRow?.dataset.bgcolor || "transparent";

        if (bgColor && bgColor.toLowerCase() !== "transparent") {
        el.style.webkitTextStroke = `0.8rem ${bgColor}`;
        el.style.textStroke = `0.8rem ${bgColor}`;
        }
    }, []);

    const [state, setState] = useState("idle");

    // re-hover state
    const handleMouseEnter = () => {
        setState("hover");
    };

    // mouse leave, and long enough to be in idle state
    const handleMouseLeave = () => {
        setState("leave");
        setTimeout(() => {
            setState("idle");
        }, 700);
    };

  return (
    <div className="content-row" data-bgcolor="var(--white)">
        <a
            href="#"
            data-type="page-transition"
            className={`has-underline relative inline-block overflow-hidden group ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* main text */}
            <span className="clone-text relative z-10 text-(--black) transition-all duration-300">
                See all projects
            </span>

            {/* underline base */}
            <span className="absolute left-0 bottom-0 h-1 w-full bg-(--light-grey)" />

            {/* animated overlay underline */}
            <span
            className={`clone-underline absolute left-0 bottom-0 h-1 w-full bg-(--black)
                ${state === "idle" ? "-translate-x-full" : ""}
                ${state === "hover" ? "translate-x-0 transition-transform duration-500 ease-in-out" : ""}
                ${state === "leave" ? "translate-x-full transition-transform duration-500 ease-in-out" : ""}`}
            />

            {/* masked version of text */}
            <span
            className={`underline clone-mask absolute inset-0 text-(--black) z-0 ${className}`}
            data-hover="See all projects"
            >
                {children}
            </span>
        </a>
    </div>
  );
}
