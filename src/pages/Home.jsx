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
    return (
        <div className="flex flex-col w-full gap-28"
            style={{backgroundColor: "var(--white)", color: "var(--black)"}}>
            {/* Navbar */}
            <Navbar />
            {/* Overview */}
            <div className="flex flex-col w-full h-screen max-h-screen">
                <div className="flex flex-col w-full h-full max-h-screen pl-20 pt-32 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="leading-[110px] tracking-[-1px]" 
                        style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)"}}>    
                            <AnimatedWords text="ILHAM"/>
                            <AnimatedWords text="PRIAMBODO"/>
                        </h1>
                    </div>
                    <div className="flex w-full h-full items-end justify-end">
                        <div className="flex max-w-[48vh] box-border py-0 pr-22 bg-orange-300"
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
                <div className="flex w-full justify-around p-4">
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

                <div className="flex flex-row w-full px-20"
                style={{border: "1px solid var(--light-grey)"}}>
                    <Link to="/works?project=hilhagas"  className="hoverable">
                        <div className="flex flex-1 flex-col py-4 px-4"
                            style={{borderRight: "1px solid var(--light-grey)"}}>
                            <div className="flex w-[48vh] h-[48vh] box-border bg-orange-300"
                                style={{border: "1px solid var(--light-grey)", cursor: "pointer", overflow: "hidden"}}>
                                <img
                                    src={hilhagas}
                                    data-full={hilhagas}
                                    className="blur-sm transition w-full h-full object-cover"
                                    onLoad={(e) => {
                                        const img = new Image();
                                        img.src = e.target.dataset.full;
                                        img.onload = () => {
                                            e.target.src = img.src;
                                            e.target.classList.remove("blur-sm");
                                        };
                                    }}
                                    alt="Hilhagas"
                                />
                            </div>
                            <h2 className="leading-[52px] tracking-[-1px]"
                            style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}>
                                <AnimatedWords text="Hilhagas" />                                
                            </h2>
                            <p className="mb-3"
                            style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                                <AnimatedWords text="・WEB DEVELOPMENT・UI-UX DESIGNER" />                                
                            </p>
                        </div>
                    </Link>
                    <Link to="/works?project=grahakost" className="hoverable">
                        <div className="flex flex-1 flex-col py-4 px-4"
                            style={{borderRight: "1px solid var(--light-grey)"}}>
                            <div className="flex w-[48vh] h-[48vh] box-border bg-orange-300"
                                style={{border: "1px solid var(--light-grey)", cursor: "pointer", overflow: "hidden"}}>
                                <img
                                    src={grahakost}
                                    data-full={grahakost}
                                    className="blur-sm transition w-full h-full object-cover"
                                    onLoad={(e) => {
                                        const img = new Image();
                                        img.src = e.target.dataset.full;
                                        img.onload = () => {
                                            e.target.src = img.src;
                                            e.target.classList.remove("blur-sm");
                                        };
                                    }}
                                    alt="GrahaKost"
                                />
                            </div>
                            <h2 className="leading-[52px] tracking-[-1px]"
                            style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                <AnimatedWords text="GrahaKost" />
                            </h2>
                            <p className="mb-3"
                            style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                                <AnimatedWords text="・WEB DEVELOPMENT・UI-UX DESIGNER" />                                
                            </p>
                        </div>
                    </Link>
                    <Link to="/works?project=vehiscan" className="hoverable">
                        <div className="flex flex-1 flex-col py-4 px-4">
                            <div className="flex w-[48vh] h-[48vh] box-border bg-orange-300"
                                style={{border: "1px solid var(--light-grey)", cursor: "pointer", overflow: "hidden"}}>
                                <img
                                    src={vehiscan}
                                    data-full={vehiscan}
                                    className="blur-sm transition w-full h-full object-cover"
                                    onLoad={(e) => {
                                        const img = new Image();
                                        img.src = e.target.dataset.full;
                                        img.onload = () => {
                                            e.target.src = img.src;
                                            e.target.classList.remove("blur-sm");
                                        };
                                    }}
                                    alt="VehiScan"
                                />
                            </div>
                            <h2 className="leading-[52px] tracking-[-1px]"
                            style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)" }}>
                                <AnimatedWords text="VehiScan" />
                            </h2>
                            <p className="mb-3"
                            style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                                <AnimatedWords text="・COMPUTER VISION・SOFTWARE DEVELOPMENT" />                                
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex w-full justify-end">
                    <Link to="/works" className="hoverable">
                        <div className="pl-4 pr-50 bg-orange-300"
                        style={{border: "1px solid var(--light-grey)", borderTop: "none"}}>
                            <p className="leading-[52px] tracking-[-1px]"
                            style={{fontFamily: "var(--font-text)", fontSize: "var(--font-small-text-size)"}}>
                                Explore Further 
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bio Section */}
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-start p-20 animate-fadeIn h-screen max-w-[58%] min-w-[62%]">
                    <div>
                        <h2 className="mb-3"
                        style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}
                        >
                            <AnimatedWords text="BIO" />                            
                        </h2>
                        <div className="leading-[62px] tracking-[-2px]"
                        style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)"}}
                        >
                            <AnimatedWords text="Bridging website, software, and AI to craft intelligent solutions and drive innovation" />                            
                        </div>
                    </div>
                <CountingStats />
                </div>

                {/* right section */}
                {/* <div className="flex flex-col justify-center items-start animate-fadeIn h-screen">
                    <div className="flex flex-col h-full p-[260px_0]">
                    </div>
                </div> */}
            </div>

            {/* Services Section */}
            <div className="flex flex-col justify-center items-start p-20 animate-fadeIn mb-16">
                <div className="flex flex-col gap-3">
                    <h2 className="font-mono text-[16px]"
                    style={{fontFamily: "var(--font-alt)", fontSize: "var(--font-alt-size)"}}>
                        <AnimatedWords text="SERVICES" />
                    </h2>
                    <p className="leading-[78px] tracking-[-2px]"
                    style={{fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)"}}>
                        <AnimatedWords text="・Web Development・Android App Development・Machine Learning・Computer Vision・LLM・UI-UX Designer" />
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}