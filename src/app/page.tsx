"use client";
import "tailwindcss";

import "./globals.css"
import "./navigation.css"
import "./text-sizes.css"

import Home from "./sections/home";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Return from "./sections/return";

import {useEffect, useRef, useState} from "react";
import {MdEmail} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa6";
import {GrGithub} from "react-icons/gr";

export default function Page() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const el = useRef(null);
    const [init, setInit] = useState(false);
    const [section, setSection] = useState(0);
    const [prevSection, setPrevSection] = useState(-1);

    let docActive = false;

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

        return () => {
            window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
        };
    }, [])

    useEffect(() => {
        const body = document.body;
        let lastScroll: number = 0.0;

        window.addEventListener('scroll', () => {
            const currentScroll: number = window.pageYOffset;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
            }

            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }

            if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
            }

            lastScroll = currentScroll;
        })

        if (typeof document !== "undefined") {
            docActive = true;
        }
    })

    useEffect(() => {
        const scrollButton : any = document.getElementById("scrollToTop");

        if (scrollButton) {
            scrollButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }, [])

    useEffect(() => {
        if (docActive) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            });

            const hiddenElements = document.querySelectorAll('.fadeHidden, .fadeHiddenLeft, .fadeHiddenRight, .fadeHiddenX, .fadeHiddenLeftNoDelay');
            hiddenElements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }
    }, [docActive, section]);

    return (
        <div className="relative w-full overflow-hidden font h-[100%]">
            {/* NAVIGATION BAR */}
            <header className="boxDetails fixed top-0 left-0 w-full h-[9%] flex items-center justify-start text-white font-bold z-15 fadeIn object-contain">
                <nav className="flex items-center gap-4 px-4 h-[95%] w-full object-contain navbarText">
                    {windowWidth > 600 && <img
                        src="/images/rcLogo.png"
                        alt="portfolioLogo"
                        className="w-auto h-[100%] object-cover mr-2 align-middle hover hover:cursor-pointer"
                        id="scrollToTop" title="Return to Top"
                    />}
                    <a href="#home" className="flex items-center h-full hover:text-blue-300 mr-2 hover">Home</a>
                    <a href="#about" className="flex items-center h-full hover:text-blue-300 mr-2 hover">About</a>
                    <a href="#projects" className="flex items-center h-full hover:text-blue-300 mr-2 hover">Projects</a>
                    <a href="#experience" className="flex items-center h-full hover:text-blue-300 mr-2 hover">Experience</a>
                    <a href="#contact" className="flex items-center h-full hover:text-blue-300 mr-2 hover">Contact</a>

                        <MdEmail
                            color="rgba(40,40,40,1)"
                            className={windowWidth > 900 ? "w-auto h-[90%] ml-auto bg-white rounded-full p-0.75 hover:bg-blue-300 hover:cursor-pointer hover align-middle" : "hidden"}
                            title="ryanpcoveny@gmail.com"
                            onClick={() => window.open("mailto:ryanpcoveny@gmail.com")}
                        />
                        <FaLinkedin
                            className={windowWidth > 900 ? "w-auto h-[100%] text-white hover:text-blue-300 hover:cursor-pointer hover" : "hidden"}
                            title="linkedin.com/in/ryan-coveny/"
                            onClick={() => window.open("https://www.linkedin.com/in/ryan-coveny/")}
                        />
                        <GrGithub
                            className={windowWidth > 900 ? "w-auto h-[100%] text-white hover:text-blue-300 hover:cursor-pointer hover" : "hidden"}
                            title="github.com/Nqnt41/"
                            onClick={() => window.open("https://www.github.com/Nqnt41/")}
                        />
                </nav>
            </header>

            <div className="fadeIn text-white">
                {/* HOME */}
                <Home init={init} setInit={setInit} el={el}/>

                <div className="background">
                    {/* ABOUT */}
                    <About section={section} setSection={setSection} prevSection={prevSection} setPrevSection={setPrevSection} windowWidth={windowWidth} />

                    {/* PROJECTS */}
                    <Projects windowWidth={windowWidth} />

                    {/* EXPERIENCE */}
                    <Experience windowWidth={windowWidth}/>

                    {/* CONTACT */}
                    <Contact/>

                    {/* RETURN */}
                    <Return/>
                </div>
            </div>
        </div>
    );
}