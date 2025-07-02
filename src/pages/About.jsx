import { useEffect, useRef, useState } from "react";

import AnimatedWords from "../components/AnimatedWords.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import pic1 from "../assets/images/about/pic-2.jpg";

export default function About() {
    const [projects, setProjects] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        let p = 0, e = 0;
        const animate = () => {
            if (p < 11) {
                p += 0.13;
                setProjects(Math.floor(p));
            }
            if (e < 2) {
                e += 0.05;
                setExperience(Math.floor(e));
            }
            if (p < 11 || e < 2) requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <div className="flex flex-col w-full">
            <Navbar />
            {/* Overview */}
            <div className="flex flex-col box-border px-20 py-14 h-[72vh] w-[60%] gap-10 justify-end">
                <div className="">
                    <p className="leading-[110px] tracking-[-1px]"
                    style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)"}}>
                        <AnimatedWords
                            text="AUTHOR."
                        />
                    </p>
                </div>
            </div>
            <div className="flex flex-row h-auto"
                style={{borderTop: "1px solid var(--light-grey)"}}>
                    {/* Left */}
                    <div className="flex flex-1 flex-col box-border py-0 pl-22 bg-orange-300 items-end"
                    style={{borderRight: "1px solid var(--light-grey)"}}>
                        <img
                            src={pic1}
                            data-full={pic1}
                            className="blur-sm transition"
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
                    <div className="flex flex-col box-border px-20 py-14 h-auto w-[60%]">
                        <p className="mb-3"
                        style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>HIS WORDS</p>
                        <p className="leading-[52px] tracking-[-1px]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-medium-text-size)"}}>
                            <AnimatedWords
                                text="I'm passionate about technology and system architecture, driven by a deep curiosity for understanding the principles behind building robust software, applications, and machine learning systems."
                            />
                        </p>
                    </div>
                </div>
            {/* Author Section */}
            <div className="flex flex-row min-h-display justify-center items-start animate-fadeIn">
                {/* Details */}
                <div className="flex w-full px-20"
                    style={{border: "1px solid var(--light-grey)"}}>
                    <div className="py-10 w-full pr-10"
                        style={{borderRight: "1px solid var(--light-grey)"}}>
                        <h2 className="mb-3"
                        style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                            <AnimatedWords
                                text="MISSION"
                            />
                        </h2>
                        <p className="leading-[34px] tracking-[-1px]"
                        style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}>
                            <AnimatedWords
                                text="My mission is to leveraging technology to"
                            />
                            <AnimatedWords
                                text="create scalable, efficient, and user-centric solutions"
                            orange/>
                            <AnimatedWords
                                text="that make a tangible impact."
                            />
                        </p>
                    </div>
                    <div className="py-10 w-full px-10"
                        style={{borderRight: "1px solid var(--light-grey)"}}>
                        <h2 className="mb-3"
                        style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                            <AnimatedWords
                                text="VALUES & BELIEVE"
                            />
                        </h2>
                        <p className="leading-[34px] tracking-[-1px]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                <AnimatedWords
                                    text="Clarity, Curiosity, and Collaboration."
                                orange />
                            <AnimatedWords
                                text="I love exploring how different pieces come together to create a complete system, and I believe the best results happen when we share knowledge, experiment fearlessly, and refine ideas collaboratively."
                            />
                            
                        </p>
                    </div>
                    <div className="py-10 w-full pl-10">
                        <h2 className="mb-3"
                            style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>EDUCATION & WORK</h2>
                        <p className="leading-[34px] tracking-[-1px]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                            <AnimatedWords
                                text="I’m currently pursuing a degree in"
                            />
                            <AnimatedWords
                                text="Computer Science,"
                            orange />
                            <AnimatedWords
                                text="where I’m expanding my skills in programming, AI, and system design. Outside formal studies, I’m constantly learning through"
                            />                            
                            <AnimatedWords
                                text="side projects, contracts, research,"
                            orange/>
                            <AnimatedWords
                                text="and talks with fellow tech enthusiasts."
                            />
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Skills Section */}
            <div className="flex flex-col justify-center items-start px-20 py-40 animate-fadeIn min-h-screen gap-20">
                <div className="">
                    <p className="font-mono text-[16px] mb-3"
                        style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>TECH, TOOLS & FRAMEWORK</p>
                    <div className="flex flex-col">
                        <p className="leading-[72px] tracking-[-2px] p-[16px_0]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)", borderBottom: "1px solid var(--light-grey)"}}>
                            <AnimatedWords
                                text="・Git・Figma・RoboFlow・Hugging Face・Docker・Kali Linux・Flet"
                            />
                        </p>
                        <p className="leading-[72px] tracking-[-2px] p-[16px_0]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)", borderBottom: "1px solid var(--light-grey)"}}>
                            <AnimatedWords
                                text="・PHP・JavaScript・Python・Dart・Java"
                            />
                        </p>
                        <p className="leading-[72px] tracking-[-2px] p-[16px_0]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)", borderBottom: "1px solid var(--light-grey)"}}>
                            <AnimatedWords
                                text="・Laravel・NodeJS・ReactJS・Flutter・Tailwind・Vite・Flet"
                            />
                        </p>
                        <p className="leading-[72px] tracking-[-2px] p-[16px_0]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)"}}>
                            <AnimatedWords
                                text="・Tensorflow・Ultralytics・YOLO・GPT・BERT"
                            />
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
