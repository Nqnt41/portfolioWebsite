"use client";
import "tailwindcss";

import "./globals.css"
import "./navigation.css"

import Background from "./sections/home.tsx";
import About from "./sections/about.tsx";

import Projects from "./sections/projects.tsx";

import {useEffect, useRef, useState} from "react";

export default function Home() {
    const el = useRef(null);
    const [init, setInit] = useState(false);
    const [section, setSection] = useState(0);

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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.fadeHidden, .fadeHiddenX');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [section]);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* NAVIGATION BAR */}
            <header className="boxDetails fixed top-0 left-0 w-full h-16 flex items-center justify-end text-white text-xl z-15">
                <a href="#home" className="px-4 py-2 hover:text-blue-200" >Home</a>
                <a href="#about" className="px-4 py-2 hover:text-blue-200">About</a>
                <a href="#projects" className="px-4 py-2 hover:text-blue-200">Projects</a>
                <a href="#experience" className="px-4 py-2 hover:text-blue-200">Experience</a>
                <a href="#contact" className="px-4 py-2 hover:text-blue-200">Contact</a>
            </header>

            <div className="fadeHidden">
                {/* HOME */}
                <Background setInit={setInit} el={el}/>

                {/* ABOUT */}
                <About init={init} el={el} section={section} setSection={setSection} />

                {/* PROJECTS */}
                <Projects/>
            </div>
        </div>
    );
}