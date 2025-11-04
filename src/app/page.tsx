"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import * as fonts from "@/src/styles/fonts";
import Link from "next/link";
import AnimatedWords from "@/src/components/AnimatedWords"
import CustomUnderlineText from "@/src/components/CustomUnderlineText"
import Footer from "@/src/components/Footer"

const Landing = () => {
    return (
        <>
            <section className="max-h-screen h-screen max-w-screen flex flex-col box-border">
                <div className="grid grid-cols-13 w-fit h-fit pt-40.5">
                    {/* left */}
                    <div className="col-span-7 h-full pl-16 flex items-end">
                        <p className={`${fonts.altSection} text-(--dark-grey)`}>
                            [START HERE]
                        </p>
                    </div>
                    {/* right */}
                    <div className="col-span-6 h-full pr-16 pt-0 flex flex-col justify-between gap-4 box-border">
                        <h1 className={`${fonts.pageHeader1} text-(--black)`}>Ilham Priambodo</h1>
                        <div className="flex flex-col gap-2">
                            <p className={`${fonts.pageBodyThin} text-(--dark-grey)`}><span className="text-(--black)">Developer</span> . Engineer . Designer</p>
                            {/* <p className={`${fonts.alttext} text-(--dark-grey)`}>For service and software businesses.</p> */}
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-13 w-full h-full box-border pb-8">
                    {/* left */}
                    <div className="box-border items-end col-span-7 grid grid-cols-9 pl-16">
                        <img className="col-span-4 aspect-square rounded-sm" src={`images/about/pic-2.jpg`} alt="testing" />
                    </div>
                    {/* right */}
                    <div className="col-span-6 h-full pr-16 flex flex-row items-end justify-between">
                        {/* <div className="flex gap-1">
                            <p className={`${fonts.navbarText} text-(--dark-grey)`}>
                                MY WORK
                            </p>
                        </div> */}
                        {["JOURNEY", "SPECIALTY"].map((label) => (
                            <div
                            key={label}
                            className="flex items-end group cursor-pointer h-fit"
                            >
                                <p className={`${fonts.navbarText} text-(--dark-grey) leading-none pb-[2.4px]`}>
                                    {label}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--dark-grey)"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="
                                    h-[1.4em] w-[1.4em]
                                    transition-transform duration-250 ease-in-out group-hover:translate-y-2.5"
                                >
                                    <path d="M12 5v14m0 0l5-5m-5 5l-5-5" />
                                </svg>
                            </div>
                        ))}
                        <div
                        className="flex items-end gap-1 group cursor-pointer h-fit"
                        >
                            <p className={`${fonts.navbarText} text-(--dark-grey) leading-none pb-[2.4px]`}>
                                SHOWCASE
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--dark-grey)"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                h-[1.4em] w-[1.4em]
                                transition-transform duration-250 ease-in-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5"
                            >
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </div>
                        <div className="flex gap-1">
                            <p className={`${fonts.pageBody} text-(--dark-grey)`}>.</p>
                        </div>
                    </div>
                </div>
            </section>     
        </>
    );
} 

const Projects = () => {
    const projects = [
        {
            name: "Hilhagas",
            image: "images/works/hilhagas-1.png",
            link: "#",
            description: "・WEB DEVELOPMENT・UI-UX DESIGNER",
            alt: "Hilhagas",
        },
        {
            name: "GrahaKost",
            image: "images/works/grahakost-1.png",
            link: "#",
            description: "・WEB DEVELOPMENT・UI-UX DESIGNER",
            alt: "GrahaKost",
        },
        {
            name: "VehiScan",
            image: "images/works/vehiscan-1.jpeg",
            link: "#",
            description: "・COMPUTER VISION・SOFTWARE DEVELOPMENT",
            alt: "VehiScan",
        },
    ];

 

    return (
        <section className="flex flex-col pt-20 pb-44 gap-20 h-fit">
            {/* Top */}
            <div className="px-16 py-20">
                <p className={`${fonts.sectionBody}`}>
                    <span className={`text-start ${fonts.altSection} text-(--dark-grey)`}>
                        [MY WORK]
                    </span>{" "}
                    I helped businesses build intelligent web and software solutions,
                    combining AI-driven applications to scale, streamline operations, and
                    grow sustainably.
                </p>
            </div>

            {/* Bottom */}
            <div className="px-16 flex flex-col gap-4.5">
                <span className={`${fonts.altSection} text-(--dark-grey)`}>
                    [LATEST PROJECTS]
                </span>

                <div className="grid grid-cols-13 w-full h-fit">
                    {/* Left */}
                    <div className="col-span-7 flex box-border w-full aspect-3/2 rounded-sm">
                        <img
                        src={projects[0].image}
                        alt={projects[0].alt}
                        className="w-full h-full object-cover rounded-sm border-[.8px] border-(--light-grey) mr-6"
                        />
                    </div>
                    {/* Right */}
                    <div className="col-span-6 flex gap-6 h-fit">
                        {projects.slice(1).map((project) => (
                        <div
                            key={project.name}
                            className="col-span-7 flex box-border relative w-full aspect-3/2 rounded-sm"
                        >
                            <img
                            src={project.image}
                            alt={project.alt}
                            className="w-full h-full object-cover rounded-sm border-[.8px] border-(--light-grey)"
                            />
                        </div>
                        ))}
                    </div>
                </div>
                {/* Bottom */}
                <div className="grid grid-cols-13 w-full h-fit">
                    {/* Gap */}
                    <div className="col-span-7" />

                    {/* Right */}
                    <div className="col-span-6 flex items-center justify-center">
                        <Link href="#" className="group relative inline-block">
                            <div className="flex items-end gap-2">
                                

                                <CustomUnderlineText className={`${fonts.sectionBody} text-(--black)`}>
                                    See all projects
                                </CustomUnderlineText>
                                <img
                                    src="icons/arrow-top-right-black.svg"
                                    alt="arrow"
                                    className="pb-3 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Experience = () => {
    const experiences = [
        {
            id: "hpaihni",
            title: <><AnimatedWords text="HPAI - Halal Network International"/></>,
            job: <><AnimatedWords text="Full Stack Developer" /></>,
            category: <><AnimatedWords text="• Intership" /></>,
            purpose: <><AnimatedWords text="Project - College, Enthusiast" /></>,
            start: <><AnimatedWords text="Sep — Present" /></>,
            overview: [
                <>
                    <AnimatedWords text={'Developed "Halmall-Seller", a merchant dashboard for managing accounts, products, and sales.'} />
                </>,
                <>
                    <AnimatedWords text={'Engineered and designed app of "HNI-Hello", a greeting system for welcoming members, employees, and guests.'} />
                </>,
                <>
                    <AnimatedWords text={'Collaborated with the team on daily tasks, MVP goals, and version control - often over a morning coffee promo.'} />
                </>
            ],
            tech: [
                <AnimatedWords text="Laravel" />,
                <AnimatedWords text="Livewire" />,
                <AnimatedWords text="TailwindCSS" />,
                <AnimatedWords text="JavaScript" />,
                <AnimatedWords text="AlpineJs" />,
                <AnimatedWords text="JQuery" />,
                <AnimatedWords text="PostgreSQL" />,
                <AnimatedWords text="Docker" />,
                <AnimatedWords text="Redis" />
            ],
            role: <><AnimatedWords text="・Full-Stack Developer & Engineer・UI-UX Designer" /></>,
            worklinks: [
                {
                    title: <AnimatedWords text="HPAI - Halal Network International"/>,
                    link: "https://hni.net/"
                }
            ],
            projectlinks: [
                {
                    title: <AnimatedWords text="Halmall Seller"/>,
                    link: "",
                    live: "",
                },
                {
                    title: <AnimatedWords text="HNI Hello"/>,
                    link: "",
                    live: "",
                },
                {
                    title: <AnimatedWords text="Hal Label"/>,
                    link: "",
                    live: "",
                },
                {
                    title: <AnimatedWords text="OCRHal"/>,
                    link: "",
                    live: "",
                }
            ],
            logo: "/logo/hni-black-on-white.png"
        },
        {
            id: "selfempgrahakost",
            title: <><AnimatedWords text="Self-Employed" /></>,
            job: <><AnimatedWords text="Full Stack Developer" /></>,
            category: '',
            purpose: <><AnimatedWords text="Contract - Graha Kost" /></>,
            start: <><AnimatedWords text="May — July, 2025" /></>,
            overview: [
                <>
                    <AnimatedWords text={`Built and maintained "GrahaKost", a Laravel-based boarding house rental platform with full admin dashboard, backend architecture, and clean UI.`} />
                </>,
                <>
                    <AnimatedWords text={`Managed database design, security, and performance while delivering client-specific requirements through full-stack development and continuous learning.`} />
                </>
            ],
            tech: [
                <AnimatedWords text="Laravel" />,
                <AnimatedWords text="Supabase" />,
                <AnimatedWords text="Figma" />,
            ],
            role: <><AnimatedWords text="・Full-Stack Developer & Engineer・UI-UX Designer" /></>,
            worklinks: [
                {
                    title: <AnimatedWords text="Self-Employed" />,
                    link: undefined
                }
            ],
            projectlinks: [
            ]
        },
        {
            id: "lapisai",
            title: <><AnimatedWords text="Lapis AI" /></>,
            job: <><AnimatedWords text="Computer Vision" /></>,
            category: <><AnimatedWords text="• Internship" /></>,
            purpose: <><AnimatedWords text="Contract, Project - Lapis AI, College" /></>,
            start: <><AnimatedWords text="Mar — May, 2025" /></>,
            overview: [
                <>
                    <AnimatedWords text={`Designed and deployed "VehiScan", a real-time vehicle detection system identifying cars, trucks, buses, and vans, and extracting license plates from CCTV and video streams.`} />
                </>,
                <>
                    <AnimatedWords text={`Integrated license plate recognition and implemented a rule-based even/odd checker to support traffic control logic and automated monitoring.`} />
                </>
            ],
            tech: [
                <AnimatedWords text="YOLOv8 Nano" />,
                <AnimatedWords text="EasyOCR" />,
                <AnimatedWords text="Flet" />,
                <AnimatedWords text="Roboflow" />
            ],
            role: <><AnimatedWords text="・AI Engineer・Image Annotator" /></>,
            worklinks: [
                {
                    title: <AnimatedWords text="Lapis AI" />,
                    link: "https://lapisai.id/"
                }
            ],
            projectlinks: [
            ],
            logo: "/logo/lapis-ai-black-on-white.png"
        }
    ];

    const [expandedProjectId, setExpandedProjectId] = useState<String | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const project = params.get("project");
        if (project) {
            setExpandedProjectId(project);
            const el = document.getElementById(project);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const toggleExpand = (id: String | null) => {
        setExpandedProjectId(prev => prev === id ? null : id);
    };

    return (
        <>
            {/* Projects Builder */}
            <div className="bg-(--black) text-(--white) py-8">

                {/* Header Section */}
                <span className={`${fonts.altSection} text-(--light-grey) pl-16`}>
                    [JOURNEY]
                </span>

                {/* Content Section */}
                {experiences.map((experience, index) => {
                    const isExpanded = expandedProjectId === experience.id;

                    return (
                        <div id={experience.id} key={experience.id}
                        className={`flex w-full flex-col
                            ${isExpanded ? "" : "hoverable"}
                        `}
                        onClick={() => toggleExpand(experience.id)}>
                            
                            {/* Non-Expandable */}
                            <section className="grid grid-cols-13">
                                {/* Left Side */}
                                <div className="col-span-7 pl-16 py-12">
                                    <div 
                                    className="flex flex-col gap-4 w-full">
                                        {/* Work Links */}
                                        <div className="h-fit flex flex-col gap-6">
                                            {experience.worklinks.map((workItem, index) => (
                                                <a
                                                    key={index}
                                                    href={isExpanded ? workItem.link : undefined}
                                                    onClick={e => {
                                                    if (!isExpanded) {
                                                        e.preventDefault();
                                                    }
                                                    e.stopPropagation();
                                                    }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`group flex gap-0 items-end ${fonts.sectionBody}
                                                        ${(!isExpanded || !workItem.link) && `pointer-events-none `}`}
                                                >
                                                    {workItem.title}

                                                    <div className={`transition-all duration-800 ease-in-out h-full
                                                        ${isExpanded ? "opacity-100" : "max-h-0 opacity-0"}
                                                        `}>
                                                        {isExpanded && workItem.link && (
                                                            <img
                                                            src="icons/arrow-top-right-white.svg"
                                                            alt="arrow"
                                                            className="pb-3 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                                                            />
                                                        )}
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                        <div className={`${fonts.pageBody} text-(--light-grey) flex`}>
                                            <p>{experience.job}</p>
                                            <p>{experience.category}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Side */}
                                <div className="col-span-6 flex justify-end items-center w-full pr-16">
                                    <p className={`${fonts.pageBody} text-(--light-grey)`}>
                                        {experience.start}
                                    </p>
                                </div>
                            </section>

                            {/* Expandable Section */}
                            <section className={`
                                grid grid-cols-13 pt-4
                                transition-all duration-500 ease-in-out overflow-hidden
                                ${isExpanded ? "max-h-[1000px] opacity-100 pb-10" : "max-h-0 opacity-0"}
                            `}>
                                {/* Left Side */}
                                <div className="col-span-7 pl-16 flex flex-col justify-between gap-6">

                                    {/* Top */}
                                    <div className="h-fit">
                                        <div className="box-border items-start col-span-7 grid grid-cols-9">
                                            {experience.logo ? (
                                            <Image
                                                src={experience.logo}
                                                alt="logo"
                                                width={200}
                                                height={200}
                                                className="col-span-2 aspect-square transition rounded-sm bg-(--white) object-contain blur-sm"
                                                onLoadingComplete={(img) => img.classList.remove("blur-sm")}
                                            />
                                            ) : (
                                            <span></span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Bottom */}
                                    <div className="grid grid-cols-3 grid-flow-row auto-rows-max gap-4 h-fit">
                                    {experience.tech.map((techItem, index) => (
                                        <p key={index} className={`${fonts.alttext} text-(--light-grey)`}>
                                        {techItem}
                                        </p>
                                    ))}
                                    </div>
                                    
                                </div>
                                {/* Right Side */}
                                <div className="col-span-6 pr-16 flex flex-col h-fit">

                                    {/* Top */}
                                    <div className="flex flex-col gap-6 h-fit">
                                    {experience.overview.map((overviewItem, index) => (
                                        <p key={index} className={`${fonts.pageBody}`}>
                                        {overviewItem}
                                        </p>
                                    ))}
                                    </div>
                                    {/* Bottom */}
                                    <div className="h-fit flex flex-col">
                                        {/* Project Links */}
                                        <div
                                        className={`h-fit flex flex-col gap-6 ${
                                            experience.projectlinks.length > 0 ? "pt-14" : "pt-0"
                                        }`}>
                                            {experience.projectlinks.map((projectLink, index) => (
                                            <a key={index} className={`${fonts.pageBody}`}
                                                href={projectLink.link}target="_blank" rel="noopener noreferrer"
                                            >
                                            {projectLink.title || projectLink.link} {projectLink.live && `(Live: ${projectLink.live})`}
                                            </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

const Expertise = () => {
    const expertiseData = [
        {
            id: "fullstack",
            number: "01",
            title: "Full Stack",
            description:
                "Built complete web, software, and mobile applications with scalable architectures, integrating intuitive interfaces and robust backends for modern digital needs.",
            bullets: [
                "RESPONSIVE & CROSS PLATFORM",
                "PERFORMANCE OPTIMIZATION",
                "FRAMEWORK-BASED BACKEND",
                "DATABASE DESIGN & SCHEMA OPTIMIZATION",
                "API DEVELOPMENT & TESTING",
                "USER AUTHENTICATION & AUTHORIZATION",
                "DATA ENCRYPTION & SECURE STORAGE",
                "SQL & NO-SQL DATABASES",
            ],
            colorCls: "bg-white text-black",
        },
        {
            id: "ai",
            number: "02",
            title: "AI & Intelligent Solutions",
            description:
                "Designed and implemented AI-powered applications that transform data into actionable insights and automate processes for smarter decision-making.",
            bullets: [
                "MODEL DEVELOPMENT",
                "MACHINE LEARNING",
                "DEEP LEARNING",
                "NLP & TEXT GENERATION",
                "COMPUTER VISION",
                "SPEECH & AUDIO PROCESSING",
                "FEATURE ENGINEERING",
                "AI SOFTWARE INTEGRATION",
            ],
            colorCls: "bg-gray-900 text-white",
        },
        {
            id: "designdevops",
            number: "03",
            title: "Design & DevOps",
            description:
                "Created intuitive user experiences and maintain efficient development pipelines by combining UI/UX design principles with DevOps practices and collaboration tools.",
            bullets: [
                "UI/UX WIREFRAMING & PROTOTYPING",
                "VISUAL DESIGN & ILLUSTRATION",
                "RESPONSIVE LAYOUT DESIGN",
                "VERSION CONTROL & COLLABORATION",
                "CONTAINERIZATION",
                "CI/CD PIPELINES",
                "CLOUD HOSTING",
            ],
            colorCls: "bg-gray-900 text-white",
        },
    ];

    return (
        <section className="max-w-screen inline-flex flex-col">
            {expertiseData.map((item, i) => (
                <div
                key={item.id}
                className={`
                    sticky top-0 flex flex-col min-h-screen box-border gap-16 px-16 pt-20 bg-(--white)
                    ${  i > 0 ? "border-t-[0.4px] border-(--light-grey)" : ""}
                `}
                style={
                    i > 0
                        ? {
                            boxShadow: '0 -2rem 6rem rgba(0, 0, 0, 0.3)',
                            clipPath: 'polygon(0% -20%, 100% -20%, 100% 98%, 0% 98%)',
                        }
                        : {}
                }
                >
                    {/* Header */}
                    <span className={`${fonts.altSection} text-(--dark-grey) justify-center`}>[SPECIALTY]</span>
                    {/* Content */}
                    <div
                    key={item.id}
                    className="grid grid-cols-13 box-border">
                        {/* left */}
                        <div className="col-span-7 inline-flex flex-col">
                            <div className="inline-flex items-center gap-2.5">
                                <span className={`${fonts.pageBody} text-(--black)`}>{ item.number }</span>
                            </div>
                            <div className="justify-center">
                                <span className={`${fonts.pageHeader2} text-(--black)`}>{ item.title }</span>
                            </div>
                        </div>
                        {/* right */}
                        <div className="col-span-6 pt-2 pl-1.5 inline-flex flex-col">
                            <div className="h-7" />
                            <div className="pb-8 inline-flex justify-center items-center gap-2.5">
                                <p className={`${fonts.pageBody} text-(--black)`}>
                                    { item.description }
                                </p>
                            </div>
                            <div className="self-stretch py-8 border-t-[0.4px] border-(--light-grey) gap-10">
                                <div className="grid grid-cols-2 gap-2 pt-4">
                                    {item.bullets.map((b) => (
                                        <p
                                        key={b}
                                        className={`${fonts.alttext} text-(--dark-grey)`}
                                        >{b}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

const Biography = () => {
    return (
            <div className="
            grid grid-cols-13
            h-fit max-w-screen px-16 pt-20 pb-36">
                <div className="col-span-4 pr-12 h-full">
                    <div className="bg-(--light-grey) w-full h-full rounded-sm"></div>
                    {/* <img className="self-stretch flex-1 rounded" src="https://placehold.co/270x368" /> */}
                </div>
                <div className="col-span-9 inline-flex flex-col justify-start items-start gap-24">
                    <div className="self-stretch inline-flex justify-start items-start">
                        <div className="flex-1 self-stretch justify-center">
                            <span className={`${fonts.altSection} text-(--dark-grey)`}>[SUMMARY]</span>
                            <p className={`${fonts.sectionBody} text-(--black)`}>
                                My name is Ilham B. Priambodo. Sadly no radioactive spiders were involved, just a lot of coffee, code, and curiosity about how tech keeps moving faster every day.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-17">
                        <div className="col-span-6" />
                        <div className="col-span-11 inline-flex flex-col gap-6">
                            <div className="self-stretch justify-center">
                                <span className={`${fonts.altSection} text-(--dark-grey)`}>[MYSELF]</span>
                                <p className={`${fonts.pageBody} text-(--dark-grey)`}>
                                    I was born in 2005. I live in Indonesia. I’m still at uni. I like my laptop. I love watch anime. I like sketching. I like math. I avoid doing math.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default function Home() {
    return (
        <>
            <Landing />      
            <Projects />  
            {/* <Example />  */}
            <Experience /> 
            <Expertise />  
            <Biography />
            <Footer />
        </>
    );
}