"use client";
import "tailwindcss";

import "./globals.css"
import "./navigation.css"

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
    const el = useRef(null);
    const [init, setInit] = useState(false);
    const [section, setSection] = useState(0);
    const [prevSection, setPrevSection] = useState(-1);

    let docActive = false;

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
        <div className="relative w-full min-h-screen overflow-hidden font">
            {/* NAVIGATION BAR */}
            <header className="boxDetails fixed top-0 left-0 w-full h-[7.5%] flex items-center justify-start text-white font-bold z-15 fadeIn">
                <nav className="flex items-center gap-4 px-4 text-3xl w-full">
                    <img
                        src="/images/rcLogo.png"
                        alt="portfolioLogo"
                        className="w-auto max-h-18 mr-2 align-middle hover hover:cursor-pointer"
                        id="scrollToTop" title="Return to Top"
                    />
                    <a href="#home" className="hover:text-blue-300 mr-2 hover">Home</a>
                    <a href="#about" className="hover:text-blue-300 mr-2 hover">About</a>
                    <a href="#projects" className="hover:text-blue-300 mr-2 hover">Projects</a>
                    <a href="#experience" className="hover:text-blue-300 mr-2 hover">Experience</a>
                    <a href="#contact" className="hover:text-blue-300 mr-2 hover">Contact</a>

                    <div className="flex items-center ml-auto">
                        <MdEmail
                            size={64}
                            color="rgba(40,40,40,1)"
                            className="bg-white rounded-full p-0.75 mt-0.75 mr-0.75 hover:bg-blue-300 hover:cursor-pointer hover"
                            title="ryanpcoveny@gmail.com"
                            onClick={() => window.open("mailto:ryanpcoveny@gmail.com")}
                        />
                        <FaLinkedin
                            size={72}
                            className="mx-3 text-white hover:text-blue-300 hover:cursor-pointer hover"
                            title="linkedin.com/in/ryan-coveny/"
                            onClick={() => window.open("https://www.linkedin.com/in/ryan-coveny/")}
                        />
                        <GrGithub
                            size={70}
                            className="text-white hover:text-blue-300 hover:cursor-pointer hover"
                            title="github.com/Nqnt41/"
                            onClick={() => window.open("https://www.github.com/Nqnt41/")}
                        />
                    </div>
                </nav>
            </header>

            <div className="fadeIn text-white">
                {/* HOME */}
                <Home init={init} setInit={setInit} el={el}/>

                <div className="background">
                    {/* ABOUT */}
                    <About section={section} setSection={setSection} prevSection={prevSection} setPrevSection={setPrevSection} />

                    {/* PROJECTS */}
                    <Projects/>

                    {/* EXPERIENCE */}
                    <Experience/>

                    {/* CONTACT */}
                    <Contact/>

                    {/* RETURN */}
                    <Return/>
                </div>
            </div>
        </div>
    );
}