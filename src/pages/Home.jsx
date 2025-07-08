import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import AnimatedWords from "../components/AnimatedWords.jsx";
import CountingStats from "../components/home/CountingStats.jsx";

import headerPic from "../assets/images/home/pic-1.jpg";
import hilhagas from "../assets/images/works/hilhagas-1.png";
import grahakost from "../assets/images/works/grahakost-1.png";
import vehiscan from "../assets/images/works/vehiscan-1.jpeg";

export default function Home() {
    const projects = [
        {
            name: 'Hilhagas',
            image: hilhagas,
            link: '/works?project=hilhagas',
            description: '・WEB DEVELOPMENT・UI-UX DESIGNER',
            alt: 'Hilhagas'
        },
        {
            name: 'GrahaKost',
            image: grahakost,
            link: '/works?project=grahakost',
            description: '・WEB DEVELOPMENT・UI-UX DESIGNER',
            alt: 'GrahaKost'
        },
        {
            name: 'VehiScan',
            image: vehiscan,
            link: '/works?project=vehiscan',
            description: '・COMPUTER VISION・SOFTWARE DEVELOPMENT',
            alt: 'VehiScan'
        }
    ];

    return (
        <div className="flex flex-col w-full min-w-[320px] 
        md:gap-28 gap-12
        "
            style={{backgroundColor: "var(--white)", color: "var(--black)"}}>
            {/* Navbar */}
            <Navbar />
            {/* Overview */}
            <div className="flex flex-col w-full h-screen max-h-screen">
                <div className="flex flex-col w-full h-full max-h-screen
                md:pl-20 pl-0
                md:pt-32 pt-22
                md:gap-4 gap-8
                ">
                    <div className="flex flex-col gap-2
                    md:pl-0 pl-10
                    md:items-start items-center
                    ">
                        <h1 className="leading-[var(--leading-header1-size)] tracking-[-1px]" 
                        style={{fontFamily: "var(--font-title)", fontSize: "var(--font-header1-size)"}}>    
                            <AnimatedWords text="ILHAM"/>
                            <AnimatedWords text="PRIAMBODO"/>
                        </h1>
                    </div>
                    <div className="flex w-full h-full 
                    md:items-end items-center
                    md:justify-end justify-center
                    ">
                        <div className="flex box-border py-0 bg-orange-300
                        md:pr-22 pr-0
                        md:max-w-[48vh] max-w-[70%]
                        "
                        style={{border: "1px solid var(--light-grey)", borderRight: "none"}}>
                            <img
                                src={headerPic}
                                data-full={headerPic}
                                className="blur-sm transition"
                                onLoad={(e) => {
                                    const img = new Image();
                                    img.src = e.target.dataset.full;
                                    img.onload = () => {
                                        e.target.src = img.src;
                                        e.target.classList.remove("blur-sm");
                                    };
                                }}
                                alt="Home"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-around p-4 gap-2 
                md:flex-nowrap flex-wrap
                ">
                    <p
                    style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                        <AnimatedWords text="DEVELOPMENT" />
                    </p>
                    <p
                    style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                        <AnimatedWords text="CREATIVE" />        
                    </p>
                    <p 
                    style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                        <AnimatedWords text="INCISIVE" />
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="flex flex-col">
                <div
                    className="flex flex-row w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide 
                    lg:px-10 px-4
                    lg:overflow-x-hidden lg:flex-grow
                    "
                    style={{ border: '1px solid var(--light-grey)' }}
                >
                    {projects.map((project, index) => (
                    <Link
                        to={project.link}
                        className="hoverable flex-shrink-0 snap-center
                        lg:min-w-0 min-w-[300px]
                        lg:flex-1"
                        key={project.name}
                    >
                        <div
                        class="flex flex-1 flex-col py-3 px-3 h-full"
                        style={{
                            borderRight: index < projects.length - 1 ? '1px solid var(--light-grey)' : 'none'
                        }}
                        >
                            <div
                                className="flex box-border bg-orange-400 relative overflow-hidden w-full
                                2xl:h-[720px] xl:h-[440px]  h-[300px]
                                2xl:min-h-[720px] xl:min-h-[440px] min-h-[300px]
                                min-w-[280px]
                                "
                                style={{ border: '1px solid var(--light-grey)' }}
                            >
                                <img
                                src={project.image}
                                data-full={project.image}
                                className="transition w-full h-full object-cover absolute top-0 left-0"
                                onLoad={(e) => {
                                    const img = new Image();
                                    img.src = e.target.dataset.full;
                                    img.onload = () => {
                                    e.target.src = img.src;
                                    e.target.classList.remove('blur-sm');
                                    };
                                }}
                                alt={project.alt}
                                />
                            </div>
                            <h2
                                className="leading-[var(--leading-medium-text-size)] tracking-[-1px]"
                                style={{
                                fontFamily: 'var(--font-header)',
                                fontSize: 'var(--font-small-text-size)'
                                }}
                            >
                                <AnimatedWords text={project.name} />
                            </h2>
                            <p
                                className="mb-3"
                                style={{
                                fontFamily: 'var(--font-alt)',
                                fontSize: 'var(--font-alt-size)'
                                }}
                            >
                                <AnimatedWords text={project.description} />
                            </p>
                        </div>
                    </Link>
                    ))}
                </div>
                <div className="flex w-full justify-end">
                    <Link to="/works" className="hoverable">
                        <div className="flex flex-row">
                            <div
                            className="flex bg-orange-300 w-full pl-4 pr-24"
                            style={{
                                border: '1px solid var(--light-grey)',
                                borderTop: 'none',
                                borderRight: 'none'
                            }}
                            >
                                <p
                                    className="leading-[var(--leading-medium-text-size)] tracking-[-1px]"
                                    style={{
                                    fontFamily: 'var(--font-header)',
                                    fontSize: 'var(--font-small-text-size)'
                                    }}
                                >
                                    Explore Further
                                </p>
                            </div>
                            <div
                            style={{
                                width: '5vh',
                                background: `linear-gradient(to top left, var(--white) 49%, var(--light-grey) 50%, #fdba74 51%)`
                            }}
                            ></div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bio Section */}
            <div className="flex flex-row py-0 h-screen
            ">
                <div className="flex flex-col justify-center items-start animate-fadeIn
                md:p-20 p-10
                md:max-w-[86%] max-w-screen
                ">
                    <div>
                        <h2 className="mb-3"
                        style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}
                        >
                            <AnimatedWords text="BIO" />                            
                        </h2>
                        <div className="leading-[var(--leading-text-size)] tracking-[-2px]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)"}}
                        >
                            <AnimatedWords text="Bridging website, software, and AI to craft intelligent solutions and drive innovation" />                            
                        </div>
                    </div>
                <CountingStats />
                </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col justify-center items-start animate-fadeIn mb-16
            md:p-20 p-10">
                <div className="flex flex-col gap-3">
                    <h2 className="font-mono text-[16px]"
                    style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                        <AnimatedWords text="SERVICES" />
                    </h2>
                    <p className="leading-[var(--leading-text-size)] tracking-[-2px]"
                    style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)"}}>
                        <AnimatedWords text="・Web Development" /><br />
                        <AnimatedWords text="・Android App Development" /><br />
                        <AnimatedWords text="・Machine Learning" /><br />
                        <AnimatedWords text="・Computer Vision" /><br />
                        <AnimatedWords text="・LLM" /><br />
                        <AnimatedWords text="・UI-UX Designer" /><br />
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}