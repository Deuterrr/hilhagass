import { useEffect, useRef, useState } from "react";

import hilhagas from "../assets/images/works/hilhagas-1.png";
import grahakost from "../assets/images/works/grahakost-1.png";
import vehiscan from "../assets/images/works/vehiscan-1.jpeg";
import braintumorsegmentation from "../assets/images/works/braintumorsegmentation-1.png";
import cinematime from "../assets/images/works/cinematime-1.jpg";

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
                <AnimatedWords text="both to fulfill a college project requirement and as a personal playground for exploring new technologies and future opportunities." />
                <AnimatedWords text="Built with React for its component-based architecture and Tailwind CSS for its intuitive, utility-first approach, the site showcases my work in a responsive, well-structured design." />
            </>,
            tech: <><AnimatedWords text="・ReactJS・Tailwind・Figma" /></>,
            role: <><AnimatedWords text="・Full-Stack Developer & Engineer・UI-UX Designer" /></>,
            imageurl: hilhagas
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
                <AnimatedWords text="tailored for boarding house listings. I designed and implemented the server-side architecture, including the admin dashboard and database services, and created a responsive, clean user interface." />
                <AnimatedWords text="Throughout the project, I focused on meeting private client requirements with an emphasis on reliability, performance, and security." />
            </>
            ),
            tech: <><AnimatedWords text="・Laravel・Vite・Supabase・Figma" /></>,
            role: <><AnimatedWords text="・Full-Stack Developer & Engineer・UI-UX Designer" /></>,
            imageurl: grahakost
        },
        {
            id: "vehiscan",
            title: <><AnimatedWords text="VehiScan" /></>,
            category: <><AnimatedWords text="Computer Vision" orange /></>,
            purpose: <><AnimatedWords text="Contract, Project - Lapis AI, College" /></>,
            status: <><AnimatedWords text="Finish - July 2025" /></>,
            overview: (
            <>
                <AnimatedWords text="As part of a development team, I contributed to designing and implementing" />
                <AnimatedWords text="a real-time vehicle and license plate detection system." orange />
                <AnimatedWords text="I also helped develop a Flet-based application interface that processes live CCTV footage and classifies license plates as even or odd." />
                <AnimatedWords text="The system achieved strong performance metrics, with 92% precision and 91% recall in validation tests." />
            </>
            ),
            tech: <><AnimatedWords text="・YOLOv8 Nano・EasyOCR・Flet・Roboflow" /></>,
            role: <><AnimatedWords text="・AI Engineer・Image Annotator" /></>,
            imageurl: vehiscan
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
                <AnimatedWords text="using TensorFlow and the U-Net architecture." />
                <AnimatedWords text="This project objectives is to investigate how different architectural choices affect segmentation performance on medical imaging data." />
                <AnimatedWords text="It combined research-driven experimentation with practical model engineering to achieve accurate, reliable detection of tumor regions, while guiding the team to maintain a rigorous, results-focused approach." />
            </>
            ),
            tech: <><AnimatedWords text="・Tensorflow・U-Net・Jupyter Notebook" /></>,
            role: <><AnimatedWords text="・Team Leader・AI Research & Engineer" /></>,
            imageurl: braintumorsegmentation
        },
        {
            id: "cinematime",
            title: <><AnimatedWords text="Cinema Time" /></>,
            category: <><AnimatedWords text="Software Development" orange /></>,
            purpose: <><AnimatedWords text="Side Project - Enthusiast" /></>,
            status: <><AnimatedWords text="On Going" /></>,
            overview: (
            <>
                <AnimatedWords text="Cinema Time is a" />
                <AnimatedWords text="cinema mobile application" orange />
                <AnimatedWords text="that I developed as a solo project, expanding on my work from an Android app development course." />
                <AnimatedWords text="Driven by curiosity about how cinema companies structure seat reservations to enable fast data fetching and smooth rendering," />
                <AnimatedWords text="I designed and built the app end-to-end as a software engineer and developer." />
            </>
            ),
            tech: <><AnimatedWords text="・Flutter・Supabase・Figma" /></>,
            role: <><AnimatedWords text="・Software Engineer & Developer" /></>,
            imageurl: cinematime
        },
        {
            id: "blibliobook",
            title: <><AnimatedWords text="Blibliobook" /></>,
            category: <><AnimatedWords text="Website Development" orange /></>,
            purpose: <><AnimatedWords text="Side Project - Enthusiast" /></>,
            status: <><AnimatedWords text="On Going" /></>,
            overview: (
            <>
                <AnimatedWords text="Together with friends, I explored database structures capable of handling large-scale data and tested algorithm efficiency for fast, cost-effective operations." />
                <AnimatedWords text="As the team leader, I lead in developing" />
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
            setExpandedProjectId(project);
            const el = document.getElementById(project);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const [expandedProjectId, setExpandedProjectId] = useState(null);
    const toggleExpand = (id) => {
        setExpandedProjectId(prev => prev === id ? null : id);
    };

    return (
        <div className="flex flex-col w-full">
            {/* Navbar */}
            <Navbar />
            {/* Overview */}
            <div
            className="flex flex-col box-border justify-end
                md:px-20 px-10
                md:py-14 py-6
                md:h-[72vh] h-[60vh] 
            ">
                <div className="">
                    <h1 className="leading-[var(--leading-header1-size)] tracking-[-1px]"
                    style={{fontFamily: "var(--font-title)", fontSize: "var(--font-header1-size)"}}>
                        <AnimatedWords
                            text="PROJECTS."
                        />
                    </h1>
                </div>
            </div>

            {/* Projects Builder */}
            <div className=""
            style={{borderBottom: "1px solid var(--light-grey)"}}>
                {projects.map((project, index) => {
                    const isExpanded = expandedProjectId === project.id;
                    return (
                        <div id={project.id} key={project.id}
                        className={`flex w-full
                            md:flex-row flex-col
                            ${isExpanded ? "" : "hoverable"}
                        `}
                        onClick={() => toggleExpand(project.id)}
                        style={{border: "1px solid var(--light-grey)", borderBottom: "none"}}>
                            {/* Left Section */}
                            <div 
                            className="flex flex-col items-end gap-2 justify-between border-solid
                                md:pb-15 pb-0
                                md:w-[38%]
                                md:border-r border-r-0
                            "
                            style={{borderColor: "var(--light-grey)"}}>
                                <div className="flex flex-col w-full items-end gap-2">
                                    <div 
                                    className="flex flex-row py-1 w-full justify-end
                                        md:px-10 sm:px-6 px-4
                                    "
                                        style={{borderBottom: "1px solid var(--light-grey)"}}>
                                        <p style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)", color: "var(--light-grey)"}}>
                                            <AnimatedWords
                                                text="PROJECT"
                                            />
                                            #{index + 1}
                                        </p>
                                    </div>
                                    <div 
                                    className="flex flex-col gap-4 w-full px-10 py-9
                                        md:items-end
                                        sm:py-10
                                    ">
                                        <h2 
                                        className="
                                            leading-[var(--leading-header2-size)] tracking-[-1px] hyphens-auto
                                            md:text-end
                                            md:mr-[-14px] sm:mr-[-10px] mr-[-8px]
                                        "
                                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-header2-size)"}}>
                                            {project.title}
                                        </h2>
                                        <div
                                        className="leading-[var(--leading-small-text-size)] tracking-[-1px] 
                                            md:text-end
                                        " style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}>
                                            {project.category}
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex px-10 w-full h-[48vh] box-border
                                transition-all duration-500 ease-in-out overflow-hidden
                                ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                                `}>
                                    <img
                                        src={project.imageurl}
                                        data-full={project.imageurl}
                                        className="transition w-full h-full object-cover"
                                        style={{border: "1px solid var(--light-grey)", backgroundColor: "var(--light-grey)"}}
                                        onLoad={(e) => {
                                            const img = new Image();
                                            img.src = e.target.dataset.full;
                                            img.onload = () => {
                                                e.target.src = img.src;
                                                e.target.classList.remove("blur-sm");
                                            };
                                        }}
                                        // alt="Hilhagas"
                                    />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex flex-col items-end gap-2
                            md:w-[62%]
                            "
                            style={{borderRight: "1px solid var(--light-grey)"}}>
                                <div className="flex-row px-10 py-1 w-full justify-between
                                md:flex hidden
                                "
                                    style={{borderBottom: "1px solid var(--light-grey)"}}>
                                    <p style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)", color: "var(--light-grey)"}}>DESCRIPTION</p>
                                </div>
                                <div className="flex flex-col px-10
                                md:py-18 sm:py-12 py-8
                                ">
                                    {/* Purpose & Status */}
                                    <div className="flex flex-col mb-12">
                                        <div className="flex flex-row w-full
                                        md:gap-12 sm:gap-10 gap-8
                                        ">
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
                                    </div>

                                    {/* get Hides */}
                                    <div className={`flex flex-col
                                        transition-all duration-500 ease-in-out overflow-hidden
                                        ${isExpanded ? "max-h-[1000px] opacity-100 gap-12 mb-12" : "max-h-0 gap-0 mb-0 opacity-0"} 
                                    `}>
                                        {/* Overview */}
                                        <div className="flex flex-col gap-4">
                                            <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>OVERVIEW</h2>
                                            <div className="leading-[var(--leading-small-text-size)] tracking-[-1px] w-full" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
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
                                        {/* <div className="flex flex-col gap-4">
                                            <h2 style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>ROLE & IMPACT</h2>
                                            <div className="leading-[var(--leading-small-text-size)] tracking-[-1px]" style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                                {project.role}
                                            </div>
                                        </div> */}
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
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}