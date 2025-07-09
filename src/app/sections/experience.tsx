import Image from "next/image";
import React from "react";

interface Experience {
    workplace: string;
    category: string;
    position: string;
    logo: string;
    years: string;
    location: string;
    description: string[];
    link: string;
}

const experienceData : Experience[] = [
    {
        workplace: "Joey and Kimmy's Seafood Market and Restaurant",
        category: "employment",
        position: "Software Engineer, Customer Service Staff",
        logo: "/images/experiences/jk.PNG",
        years: "May 2023 - Ongoing",
        location: "Vero Beach, FL",
        description: [
            "Spearheaded the development of a React.js frontend and Java backend Electron.js web application that streamlined restaurant operations. Uses JSON and MySQL for data management.",
            "Rebuilt the company’s business cards from scratch in Adobe Photoshop after original files were lost.",
            "Served guests, managed the front counter, and bussed tables during busy dinner nights, improving customer service and interpersonal skills.",
            "Help to manage restaurant paperwork and perform tech-support on the company computer."
        ],
        link: "https://github.com/Nqnt41/Sticker-Label-Printer"
    },
    {
        workplace: "University of Florida",
        category: "education",
        position: "Bachelor of Science in Computer Science - 3.70 GPA",
        logo: "/images/experiences/uf.PNG",
        years: "June 2021 - May 2025",
        location: "Vero Beach, FL",
        description: [
            "Coursework included Software Engineering, Enterprise Software Engineering, Software Verification and Testing, Data Structures and Algorithms, Operating Systems, Database Systems, Intro to Machine Learning, Natural Language Processing, Programming Language Concepts, and Algorithm Abstraction and Design.",
            "Exposed to the Agile-Scrum methodology, the MySQL database system, cloud databases, software architecture, data structures, and machine learning.",
            "Acted as a frontend engineer for the UF Society of Software Developers, where I managed the homepage and version control of the organization's official website at ufssd.org as part of a team of seven.",
            "Acted as a frontend developer with the UF Open Source Club, where I worked on their React Native proximity-based chat application, Echologator.",
            "Contributed to the frontend development of a large-scale research project known as CaSMM, available at https://github.com/STEM-C/CaSMM.",
            "Developed the C# UI/UX for Hive Mind via as my senior capstone project under Professor Alexandre Gomes de Siqueira. Project creates a shared-world experience made up of modular, user-defined tiles, with each tile represents a different individual server instance with different properties.",
            "Earned a minor in Digital Arts and Sciences, which focused on graphic design in Adobe Photoshop, 3D modeling in Autodesk Maya, and 2D animation in Adobe Animate."
        ],
        link: ""
    },
    {
        workplace: "Environmental Learning Center",
        category: "employment",
        position: "Assistant Aquarium Technician",
        logo: "/images/experiences/elc.PNG",
        years: "Dec. 2020 - May 2021",
        location: "Vero Beach, FL",
        description: [
            "Performed chemical tests and changed tank water as needed to maintain aquarium water quality and protect the fish living within.",
            "Fed aquarium fish as well as logged their conditions and behaviors daily.",
            "Transferred physical aquarium data to a cloud-based Microsoft Excel spreadsheet.",
            "Created a Microsoft PowerPoint presentation to teach new interns and employees about work at the Learning Center.",
            "Trusted to work and report out independently with little supervision.",
            "Earned a letter of recommendation from the Learning Center’s previous Senior Educator, Sara Piotter.",
        ],
        link: ""
    },
    {
        workplace: "Citrus Elementary School",
        category: "volunteer",
        position: "Reading Mentors Tutor",
        logo: "/images/experiences/readingMentors.PNG",
        years: "June 2019 - March 2020",
        location: "Vero Beach, FL",
        description: [
            "Assisted in tutoring three elementary school students in reading and writing.",
            "Worked alongside multiple fellow tutors and pupils across several months.",
            "Developed improved communication prowess and developed an ability to mentor others in valuable skills."
        ],
        link: ""
    },
]

export default function Experience() {
    return (
        <div id="experience" className="justify-center w-[100vw]">
            <h1 className="fadeHidden text-6xl pb-6 text-center">Experience</h1>

            <div className="flex flex-col items-center justify-center w-[100vw] h-auto">
                {experienceData.map((experience, index) => (
                    <div key={index} className="flex w-[90%] mb-5 fadeHiddenX items-start hoverLite">
                        <div className="flex flex-col w-[9%]">
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={experience.logo}
                                    alt={`image-${index}`}
                                    fill
                                    className="object-contain rounded-xl"
                                    sizes="100%"
                                />
                            </div>
                            <div className="mt-1 text-white text-center font-bold">
                                {experience.years}
                            </div>
                        </div>
                        <div className="bg-gray-700 rounded-xl border-l-3 border-gray-400 w-[88%] py-3 px-4 ml-6">
                            <h2 className="text-2xl"><b>{experience.workplace}</b> | <i>{experience.position}</i></h2>
                            <ul className="list-disc text-lg pl-5 pt-3">
                                {experience.description.map((bullet, index) => (
                                    <li key={index} className={index === experience.description.length - 1 ? "" : "pb-2"}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}