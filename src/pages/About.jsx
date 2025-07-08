import { useEffect, useRef, useState } from "react";

import AnimatedWords from "../components/AnimatedWords.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import pic1 from "../assets/images/about/pic-2.jpg";

export default function About() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [emojiPosition, setEmojiPosition] = useState({});
    const [rotateMap, setRotateMap] = useState({});
    const [colorMap, setColorMap] = useState({});
    const [activeSkillIdx, setActiveSkillIdx] = useState(0);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const sectionRef = useRef();

    const skillsData = [
        "Git", "Figma", "Roboflow", "Docker",
        "PHP", "JavaScript", "Python", "Dart", "Java",
        "Laravel", "NodeJS", "ReactJS", "Flutter", "Tailwind", "Vite", "Flet",
        "Tensorflow", "YOLO", "GPT", "BERT"
    ];

    const skillDescriptions = {
        "Git": "Version control system for tracking code changes.",
        "Figma": "UI design and prototyping tool.",
        "Roboflow": "Dataset & annotation tool for computer vision.",
        "Docker": "Container platform for consistent environments.",
        "PHP": "Server-side scripting language.",
        "JavaScript": "Frontend & backend scripting language.",
        "Python": "General-purpose language, popular for ML.",
        "Dart": "Language for Flutter apps.",
        "Java": "OOP language for cross-platform apps.",
        "Laravel": "PHP framework.",
        "NodeJS": "JavaScript runtime for server-side.",
        "ReactJS": "JS library for building UIs.",
        "Flutter": "Framework for cross-platform apps.",
        "Tailwind": "Utility-first CSS framework.",
        "Vite": "Frontend build tool.",
        "Flet": "Python framework for UIs.",
        "Tensorflow": "ML framework by Google.",
        "YOLO": "Real-time object detection model.",
        "GPT": "Large language model by OpenAI.",
        "BERT": "Google's transformer model for NLP."
    };

    const emojiMap = {
        "Git": "🐙",
        "Figma": "🎨",
        "Roboflow": "📸",
        "Docker": "🐳",
        "PHP": "🐘",
        "JavaScript": "✨",
        "Python": "🐍",
        "Dart": "🎯",
        "Java": "☕",
        "Laravel": "🚀",
        "NodeJS": "🌲",
        "ReactJS": "⚛️",
        "Flutter": "💙",
        "Tailwind": "🌬️",
        "Vite": "⚡",
        "Flet": "🪁",
        "Tensorflow": "🔶",
        "YOLO": "🎯",
        "GPT": "🧠",
        "BERT": "📚"
    };
    useEffect(() => {
        const skill = skillsData[0];
        const positions = ["top-0 right-0", "bottom-0 right-0"];
        const randomPos = positions[Math.floor(Math.random() * positions.length)];
        const randomRotate = Math.floor(Math.random() * 41) - 20;
        const colors = ["var(--orange)", "var(--white)"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        setEmojiPosition(prev => ({ ...prev, [skill]: randomPos }));
        setRotateMap(prev => ({ ...prev, [skill]: randomRotate }));
        setColorMap(prev => ({ ...prev, [skill]: randomColor }));
    }, []);

    // Watch scroll for small screens
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            // check if middle of screen is inside section
            const viewportMiddle = window.innerHeight / 1.4;
            const visible = rect.top <= viewportMiddle && rect.bottom >= viewportMiddle;
            setIsSectionVisible(visible);

            // update activeSkillIdx for small screens
            if (window.innerWidth < 768 && visible) {
                const sectionHeight = rect.height;
                const scrolledInSection = Math.min(Math.max(0, viewportMiddle - rect.top), sectionHeight);
                const percentage = scrolledInSection / sectionHeight;
                const idx = Math.min(skillsData.length - 1, Math.floor(percentage * skillsData.length));
                setActiveSkillIdx(idx);

                // ensure random visuals for this skill
                const skill = skillsData[idx];
                if (!rotateMap[skill]) {
                    const positions = ["top-0 right-0", "bottom-0 right-0"];
                    const randomPos = positions[Math.floor(Math.random() * positions.length)];
                    const randomRotate = Math.floor(Math.random() * 41) - 20;
                    const colors = ["var(--orange)", "var(--white)"];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];

                    setEmojiPosition(prev => ({ ...prev, [skill]: randomPos }));
                    setRotateMap(prev => ({ ...prev, [skill]: randomRotate }));
                    setColorMap(prev => ({ ...prev, [skill]: randomColor }));
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // add resize support
        handleScroll(); // run once on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [skillsData.length, rotateMap, colorMap, emojiPosition]);

    return (
        <div className="flex flex-col w-full">
            <Navbar />
            {/* Overview */}
            <div
            className="flex flex-col box-border justify-end
                md:px-20 px-10
                md:py-14 py-6
                md:h-[72vh] h-[60vh] 
            ">
                <div className="">
                    <p className="leading-[var(--leading-header1-size)] tracking-[-1px]"
                    style={{fontFamily: "var(--font-title)", fontSize: "var(--font-header1-size)"}}>
                        <AnimatedWords
                            text="AUTHOR."
                        />
                    </p>
                </div>
            </div>
            <div
            className="flex h-auto
                md:flex-row flex-col
            "
            style={{borderTop: "1px solid var(--light-grey)"}}>
                {/* Image */}
                <div 
                className="flex flex-1 flex-col box-border py-0 pl-22 bg-orange-300 items-end
                    md:border-solid border-solid
                    md:border-b-0 border-b
                    md:border-r
                "
                style={{borderColor: "var(--light-grey)"}}>
                    <img
                        src={pic1}
                        data-full={pic1}
                        className="blur-sm transition
                        md:h-fit h-[40vh]
                        "
                        onLoad={(e) => {
                            const img = new Image();
                            img.src = e.target.dataset.full;
                            img.onload = () => {
                                e.target.src = img.src;
                                e.target.classList.remove("blur-sm");
                            };
                        }}
                        alt="About"
                    />
                </div>
                {/* Right */}
                <div 
                className="flex flex-col box-border py-14 h-auto 
                    md:px-20 px-10
                    md:w-[60%] w-full
                ">
                    <p className="mb-3"
                    style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>HIS WORDS</p>
                    <p className="leading-[var(--leading-small-text-size)] tracking-[-1px]"
                    style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                        <AnimatedWords
                            text="I'm passionate about technology and system architecture, driven by a deep curiosity"
                        />
                        <AnimatedWords
                            text="for understanding the principles behind building robust software, applications, and machine learning systems."
                        />
                    </p>
                </div>
            </div>

            {/* Author Section */}
            <div className="flex min-h-display justify-center items-start animate-fadeIn">
                <div
                className="
                    flex w-full px-0
                    md:flex-row flex-col
                    border border-solid
                "
                style={{ borderColor: "var(--light-grey)" }}
                >
                    {/* Mission */}
                    <div
                    className="
                        py-10 w-full md:w-1/3
                        px-10
                        border-b border-solid md:border-b-0
                        md:border-r
                    "
                    style={{ borderColor: "var(--light-grey)" }}
                    >
                        <h2 className="mb-3"
                            style={{ fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)" }}>
                            <AnimatedWords text="MISSION" />
                        </h2>
                        <p
                            className="leading-[var(--leading-small-text-size)] tracking-[-1px]"
                            style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}
                        >
                            <AnimatedWords text="My mission is to leveraging technology to" />
                            <AnimatedWords text="create scalable, efficient, and user-centric solutions" orange />
                            <AnimatedWords text="that make a tangible impact." />
                        </p>
                    </div>

                    {/* Values & Believe */}
                    <div
                    className="
                        py-10 w-full md:w-1/3 px-10
                        border-b border-solid md:border-b-0
                        md:border-r
                    "
                    style={{ borderColor: "var(--light-grey)" }}
                    >
                        <h2 className="mb-3"
                            style={{ fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)" }}>
                            <AnimatedWords text="VALUES & BELIEVE" />
                        </h2>
                        <p
                            className="leading-[var(--leading-small-text-size)] tracking-[-1px]"
                            style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}
                        >
                            <AnimatedWords text="Clarity, Curiosity, and Collaboration." orange />
                            <br />
                            <AnimatedWords text="I love exploring how different pieces come together to create a complete system." />
                            <br />
                            <AnimatedWords text="Additionally, I believe the best results happen when we share knowledge, experiment fearlessly, and refine ideas collaboratively." />
                        </p>
                    </div>

                    {/* Education & Work */}
                    <div
                    className="
                        py-10 w-full md:w-1/3 px-10
                    "
                    >
                    <h2 className="mb-3"
                        style={{ fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)" }}>
                        EDUCATION & WORK
                    </h2>
                    <p
                        className="leading-[var(--leading-small-text-size)] tracking-[-1px]"
                        style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}
                    >
                        <AnimatedWords text="I’m currently pursuing a degree in" />
                        <AnimatedWords text="Computer Science," orange />
                        <AnimatedWords text="where I’m expanding my skills in programming, AI, and system design. Outside formal studies, I’m constantly" />
                        <AnimatedWords text="learning through side projects, contracts, research," orange />
                        <AnimatedWords text="and talks with fellow tech enthusiasts." />
                    </p>
                    </div>
                </div>
            </div>
            
            {/* Skills Section */}
            <div 
                className="relative flex flex-col justify-center items-start md:px-20 px-10 md:py-40 pt-20 pb-60 animate-fadeIn min-h-screen gap-20 overflow-hidden"
                ref={sectionRef}
            >
                <div>
                    <p className="font-mono text-[16px] mb-3"
                        style={{ fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)" }}>
                        TECH, TOOLS & FRAMEWORK
                    </p>
                    <div className="flex gap-4 flex-col
                    md:flex-wrap md:flex-row md:gap-0
                    ">
                        {skillsData.map((skill, idx) => (
                            <div
                                key={idx}
                                className="relative hoverable"
                                onMouseEnter={() => {
                                    if (window.innerWidth < 768) return;

                                    setHoveredSkill(skill);

                                    // random sticker position
                                    const positions = ["top-0 right-0", "bottom-0 right-0"];
                                    const randomPos = positions[Math.floor(Math.random() * positions.length)];
                                    setEmojiPosition(prev => ({ ...prev, [skill]: randomPos }));

                                    // random rotation
                                    const randomRotate = Math.floor(Math.random() * 41) - 20;
                                    setRotateMap(prev => ({ ...prev, [skill]: randomRotate }));

                                    // random color
                                    const colors = ["var(--orange)", "var(--white)"];
                                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                                    setColorMap(prev => ({ ...prev, [skill]: randomColor }));
                                }}
                                onMouseMove={(e) => {
                                    if (window.innerWidth < 768) return;

                                    let x = e.clientX + 20;
                                    let y = e.clientY + 20;

                                    const panelWidth = 320;
                                    const panelHeight = 100;

                                    if (x + panelWidth > window.innerWidth) {
                                        x = e.clientX - panelWidth - 20;
                                    }
                                    if (y + panelHeight > window.innerHeight) {
                                        y = e.clientY - panelHeight - 20;
                                    }

                                    setMousePos({ x, y });
                                }}
                                onMouseLeave={() => {
                                    if (window.innerWidth < 768) return;
                                    setHoveredSkill(null)
                                }}
                            >
                                <span
                                className={`leading-[var(--leading-text-size)] tracking-[-2px] transition duration-160 pr-4
                                    ${hoveredSkill === skill ? "bg-[var(--orange)]" : ""}`}
                                style={{
                                    fontFamily: "var(--font-text)",
                                    fontSize: "var(--font-text-size)",
                                }}
                                >
                                    ・{skill}
                                </span>

                                <div
                                className={`fixed z-50 pointer-events-none 
                                    transition-all duration-[100ms] ease-out transform
                                    ${hoveredSkill === skill ? "opacity-100 scale-160" : "opacity-0 scale-95"}
                                `}
                                style={{
                                    top: mousePos.y,
                                    left: mousePos.x
                                }}
                                >
                                    <div
                                        className="relative flex w-64 text-[var(--black)] px-8 py-6 shadow"
                                        style={{
                                        background: colorMap[skill] ?? "var(--white)",
                                        fontFamily: "var(--font-alt)",
                                        fontSize: "var(--font-small-text-size)",
                                        transform: `rotate(${(rotateMap[skill] ?? 0) / 3}deg)`,
                                        }}
                                    >
                                        {/* Sticker emoji */}
                                        <div
                                        className={`absolute text-2xl 
                                            transition-transform duration-300 
                                            ${hoveredSkill === skill ? "scale-320" : "scale-0"}
                                            ${emojiPosition[skill] ?? "top-0 right-0"}
                                        `}
                                        style={{
                                            transform: `rotate(${rotateMap[skill] ?? 0}deg)`,
                                        }}
                                        >
                                            {emojiMap[skill] ?? "❓"}
                                        </div>
                                        <div
                                            className={`absolute text-2xl scale-100 left-0 bottom-0 mb-[-1rem] ml-[-1rem] bg-blue-300 px-2`}
                                            style={{
                                                transform: `rotate(${(rotateMap[skill] ?? 0) / 2}deg)`,
                                            }}
                                        >
                                            {skill ?? "❓"}
                                        </div>
                                        {/* Text */}
                                        {skillDescriptions[skill] ?? "No description available."}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Fixed panel for below md */}
                    {isSectionVisible && (
                        <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none md:hidden scale-110 sm:scale-120">
                            <div
                                className="relative w-64 px-8 py-6 shadow"
                                style={{
                                    background: `${colorMap[skillsData[activeSkillIdx]] ?? "var(--white)"}`,
                                    fontFamily: "var(--font-alt)",
                                    fontSize: "var(--font-small-text-size)",
                                    transform: `rotate(${(rotateMap[skillsData[activeSkillIdx]] ?? 0) / 3}deg)`,
                                    border: "1px solid var(--light-grey)",
                                }}
                            >
                                <div
                                    className={`absolute text-2xl scale-260 ${emojiPosition[skillsData[activeSkillIdx]] ?? "top-0 right-0"}`}
                                    style={{
                                        transform: `rotate(${rotateMap[skillsData[activeSkillIdx]] ?? 0}deg)`,
                                    }}
                                >
                                    {emojiMap[skillsData[activeSkillIdx]] ?? "❓"}
                                </div>
                                <div
                                    className={`absolute text-2xl scale-100 left-0 top-0 px-1 mt-[-1rem] ml-[-1rem] bg-blue-300`}
                                    style={{
                                        transform: `rotate(${(rotateMap[skillsData[activeSkillIdx]] ?? 0) / 2}deg)`,
                                    }}
                                >
                                    {skillsData[activeSkillIdx] ?? "❓"}
                                </div>
                                {skillDescriptions[skillsData[activeSkillIdx]] ?? "No description available."}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
