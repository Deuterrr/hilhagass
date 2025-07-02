import { useEffect, useRef, useState } from "react";

import AnimatedWords from "../components/AnimatedWords.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";

export default function Works() {
    const projects = [
        {
            id: "hilhagas",
            title: <><AnimatedWords text="Hilhagas"/></>,
            category: <><AnimatedWords text="Web Development" orange/></>,
            purpose: <><AnimatedWords text="Project - College, Enthusiast" /></>,
            status: <><AnimatedWords text="Finish - July 2025" /></>,
            overview: <>
                <AnimatedWords text="I developed this" />
                <AnimatedWords text="portfolio website" orange/>
                <AnimatedWords text="both to fulfill a college project requirement and as a personal playground for exploring new technologies and future opportunities. Built with React for its component-based architecture and Tailwind CSS for its intuitive, utility-first approach, the site showcases my work in a responsive, well-structured design." />
            </>,
            tech: <><AnimatedWords text="・ReactJS・Tailwind・Figma" /></>,
            role: <><AnimatedWords text="・Full-Stack Developer & Engineer・UI-UX Designer" /></>
        },
        {
            id: "grahakost",
            title: <><AnimatedWords text="GrahaKost" /></>,
            category: <><AnimatedWords text="Web Development" orange /></>,
            purpose: <><AnimatedWords text="Contract - Graha Kost" /></>,
            status: <><AnimatedWords text="Finish - July 2025" /></>,
            overview: (
            <>
                <AnimatedWords text="I had the opportunity to develop and maintain" />
                <AnimatedWords text="a full-stack Laravel-based admin service for renting platform" orange />
                <AnimatedWords text="tailored for boarding house listings. I designed and implemented the server-side architecture, including the admin dashboard and database services, and created a responsive, clean user interface. Throughout the project, I focused on meeting private client requirements with an emphasis on reliability, performance, and security." />
            </>
            ),
            tech: <><AnimatedWords text="・Laravel・Vite・Supabase・Figma" /></>,
            role: <><AnimatedWords text="・Full-Stack Developer & Engineer・UI-UX Designer" /></>,
        },
        {
            id: "vehiscan",
            title: <><AnimatedWords text="VehiScan" /></>,
            category: <><AnimatedWords text="Web Development" orange /></>,
            purpose: <><AnimatedWords text="Project - College, Enthusiast" /></>,
            status: <><AnimatedWords text="Finish - July 2025" /></>,
            overview: (
            <>
                <AnimatedWords text="As part of a development team, I contributed to designing and implementing" />
                <AnimatedWords text="a real-time vehicle and license plate detection system." orange />
                <AnimatedWords text="I also helped develop a Flet-based application interface that processes live CCTV footage and classifies license plates as even or odd. The system achieved strong performance metrics, with 92% precision and 91% recall in validation tests." />
            </>
            ),
            tech: <><AnimatedWords text="・YOLOv8 Nano・EasyOCR・Flet・Roboflow" /></>,
            role: <><AnimatedWords text="・AI Engineer・Image Annotator" /></>,
        },
        {
            id: "braintumorsegmentation",
            title: <><AnimatedWords text="Brain Tumor Segmentation" /></>,
            category: <><AnimatedWords text="Computer Vision" orange /></>,
            purpose: <><AnimatedWords text="Project - College Bootcamp" /></>,
            status: <><AnimatedWords text="Finish - March 2025" /></>,
            overview: (
            <>
                <AnimatedWords text="As team leader, I spearheaded the development of a" />
                <AnimatedWords text="brain tumor segmentation system" orange />
                <AnimatedWords text="using TensorFlow and the U-Net architecture. This project objectives is to investigate how different architectural choices affect segmentation performance on medical imaging data. It combined research-driven experimentation with practical model engineering to achieve accurate, reliable detection of tumor regions, while guiding the team to maintain a rigorous, results-focused approach." />
            </>
            ),
            tech: <><AnimatedWords text="・Tensorflow・U-Net・Jupyter Notebook" /></>,
            role: <><AnimatedWords text="・Team Leader・AI Research & Engineer" /></>,
        },
        {
            id: "cinematime",
            title: <><AnimatedWords text="Cinema Time" /></>,
            category: <><AnimatedWords text="Software Development" orange /></>,
            purpose: <><AnimatedWords text="Side Project - Enthusiast" /></>,
            status: <><AnimatedWords text="On Going" /></>,
            overview: (
            <>
                <AnimatedWords text="Cinema alternation is a" />
                <AnimatedWords text="cinema mobile application" orange />
                <AnimatedWords text="that I developed as a solo project, expanding on my work from an Android app development course. Driven by curiosity about how cinema companies structure seat reservations to enable fast data fetching and smooth rendering, I designed and built the app end-to-end as a software engineer and developer." />
            </>
            ),
            tech: <><AnimatedWords text="・Flutter・Supabase・Figma" /></>,
            role: <><AnimatedWords text="・Software Engineer & Developer" /></>,
        },
        {
            id: "blibliobook",
            title: <><AnimatedWords text="Blibliobook" /></>,
            category: <><AnimatedWords text="Website Development" orange /></>,
            purpose: <><AnimatedWords text="Side Project - Enthusiast" /></>,
            status: <><AnimatedWords text="On Going" /></>,
            overview: (
            <>
                <AnimatedWords text="Together with friends, I explored database structures capable of handling large-scale data and tested algorithm efficiency for fast, cost-effective operations. As the team leader, I lead in developing" />
                <AnimatedWords text="a platform to help fellow students easily borrow books from the university library." orange />
            </>
            ),
            tech: <><AnimatedWords text="・ReactJS・NodeJS・Tailwind・Supabase・Figma" /></>,
            role: <><AnimatedWords text="・Team Leader・Full-Stack Engineer & Developer・UI-UX Designer" /></>,
        },
    ];

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const project = params.get("project");
        if (project) {
            const el = document.getElementById(project);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);


    return (
        <div className="">
            {/* Navbar */}
            <Navbar />
            {/* Overview */}
            <div className="flex flex-col box-border px-20 py-14 h-[72vh] w-[60%] gap-10 justify-end">
                <div className="">
                    <h1 className="leading-[110px] tracking-[-1px]"
                    style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)"}}>
                        <AnimatedWords
                            text="PROJECTS."
                        />
                    </h1>
                </div>
            </div>

            {/* Projects Builder */}
            <div className=""
            style={{borderBottom: "1px solid var(--light-grey)"}}>

                {projects.map((project, index) => (
                    <div id={project.id} key={project.id} className="flex w-full"
                        style={{border: "1px solid var(--light-grey)", borderBottom: "none"}}>
                        {/* Left Section */}
                        <div className="flex flex-col w-[38%] items-end gap-2"
                        style={{borderRight: "1px solid var(--light-grey)"}}>
                        <div className="flex flex-row px-10 py-1 w-full justify-between"
                            style={{borderBottom: "1px solid var(--light-grey)"}}>
                            <p style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)", color: "var(--black)"}}>
                                <AnimatedWords
                                    text="PROJECT"
                                />
                            </p>
                            <p style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)", color: "var(--black)"}}>
                                #{index + 1}
                            </p>
                        </div>
                        <div className="flex flex-col px-10 py-15 items-end gap-4">
                            <h2 className="leading-[var(--leading-header2-size)] tracking-[-1px] text-end"
                            style={{fontFamily: "var(--font-text)", fontSize: "var(--font-header2-size)"}}>
                                {project.title}
                            </h2>
                            <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}>
                                {project.category}
                            </div>
                        </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col w-[62%] items-end gap-2"
                        style={{borderRight: "1px solid var(--light-grey)"}}>
                        <div className="flex flex-row px-10 py-1 w-full justify-between"
                            style={{borderBottom: "1px solid var(--light-grey)"}}>
                            <p style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)", color: "var(--black)"}}>DESCRIPTION</p>
                        </div>

                        <div className="flex flex-col gap-16 px-10 py-24">
                            {/* Purpose & Status */}
                            <div className="flex flex-row w-full">
                                <div className="flex flex-1 flex-col gap-4">
                                    <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>PURPOSE</h2>
                                    <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                        {project.purpose}
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-4">
                                    <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>STATUS</h2>
                                    <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                        {project.status}
                                    </div>
                                </div>
                                </div>

                                {/* Overview */}
                                <div className="flex flex-col gap-4 max-w-[80%]">
                                    <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>OVERVIEW</h2>
                                    <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                        {project.overview}
                                    </div>
                                </div>

                                {/* Tech */}
                                <div className="flex flex-col gap-4">
                                    <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>TECH & TOOLS</h2>
                                    <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                        {project.tech}
                                    </div>
                                </div>

                                {/* Role */}
                                <div className="flex flex-col gap-4">
                                    <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>ROLE & IMPACT</h2>
                                    <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                        {project.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}