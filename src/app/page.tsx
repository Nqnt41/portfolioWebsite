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
            <header className="boxDetails fixed top-0 left-0 w-full h-16 flex items-center justify-end text-white text-xl z-15">
                <nav className="flex gap-4 px-4">
                    <a href="#home" className="hover:text-blue-200" >Home</a>
                    <a href="#about" className="hover:text-blue-200">About</a>
                    <a href="#projects" className="hover:text-blue-200">Projects</a>
                    <a href="#experience" className="hover:text-blue-200">Experience</a>
                    <a href="#contact" className="hover:text-blue-200">Contact</a>
                    </nav>
            </header>

            <div className="fadeIn">
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