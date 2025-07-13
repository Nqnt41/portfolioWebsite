import { FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import {useEffect} from "react";

export default function Return() {
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

    return (
        <div id="contact" className="relative flex flex-col bg-black w-[100%] mt-15 fadeHidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MdKeyboardDoubleArrowUp size={64} color="black" className="bg-white rounded-lg hover:bg-gray-400 hover:cursor-pointer hover" id="scrollToTop" title="Return to Top" />
            </div>

            <div className="flex justify-center mb-5 pt-15">
                <MdEmail
                    size={64}
                    color="black"
                    className="bg-white rounded-full p-0.75 mt-0.75 mr-0.75 hover:bg-gray-400 hover:cursor-pointer hover"
                    title="ryanpcoveny@gmail.com"
                    onClick={() => window.open("mailto:ryanpcoveny@gmail.com")}
                />
                <FaLinkedin
                    size={72}
                    className="mx-3 text-white hover:text-gray-400 hover:cursor-pointer hover"
                    title="linkedin.com/in/ryan-coveny/"
                    onClick={() => window.open("https://www.linkedin.com/in/ryan-coveny/")}
                />
                <GrGithub
                    size={70}
                    className="text-white hover:text-gray-400 hover:cursor-pointer hover"
                    title="github.com/Nqnt41/"
                    onClick={() => window.open("https://www.github.com/Nqnt41/")}
                />
            </div>
            <div className="text-lg text-center pb-9">
                RYAN COVENY, PUBLISHED 2025
            </div>
        </div>
    )
}