import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './projects.css';
import {
    AnacondaOriginal, ApachesparkOriginal, AzuresqldatabasePlain, BlenderOriginal, ClionOriginal, COriginal,
    CplusplusOriginal, CsharpOriginal, Css3Original, ElectronOriginal, FigmaOriginal, FirebaseOriginal, GithubOriginal,
    Html5Original, IntellijOriginal, JavaOriginal, JavascriptOriginal, JsonOriginal, JupyterOriginal, KerasOriginal,
    MatplotlibOriginal, MysqlOriginal, NextjsOriginal, PandasOriginal, PythonOriginal, ReactnativeOriginal,
    ReactOriginal, TailwindcssOriginal, TensorflowOriginal, TypescriptOriginal, UnityOriginal, VisualstudioOriginal
} from "devicons-react";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";

interface Logo {
    name: string;
    call: any;
}

interface Project {
    name: string;
    link: string;
    image: string;
    description: string;
    tech: Logo[];
}

const projectData: Project[] = [
    {
        name: "Joey and Kimmy's Sticker Label Printer",
        link: "https://github.com/Nqnt41/casual-pkmn-team-builder",
        image: "/images/carousel/stickerPrinter.JPG",
        description: "Developed a full-stack Electron.js app used by local restaurant staff to print and organize takeout label data. Built a responsive React.js front-end backed by a Java server managing object data using both JSON and SQL. Used Apache Spark as a custom API layer for smooth communication between the front-end and back-end.",
        tech: [
            { name: "React.js", call: ReactOriginal },
            { name: "JavaScript", call: JavascriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original },
            { name: "Java", call: JavaOriginal },
            { name: "SQL", call: AzuresqldatabasePlain },
            { name: "MySQL", call: MysqlOriginal },
            { name: "JSON", call: JsonOriginal },
            { name: "Apache Spark", call: ApachesparkOriginal },
            { name: "Electron", call: ElectronOriginal },
            { name: "GitHub", call: GithubOriginal },
            { name: "Figma", call: FigmaOriginal }
        ]
    },
    {
        name: "PokéAPI Team Builder",
        link: "https://github.com/Nqnt41/Sticker-Label-Printer",
        image: "/images/carousel/teamBuilder.JPG",
        description: "A custom team builder for the Pokémon series of video games using data from an open source Web API. Designed to help users design and visualize their ideal teams.",
        tech: [
            { name: "React.js", call: ReactOriginal },
            { name: "JavaScript", call: JavascriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original },
            { name: "Google Firebase", call: FirebaseOriginal },
            { name: "GitHub", call: GithubOriginal },
            { name: "Figma", call: FigmaOriginal }
        ]
    },
    {
        name: "Portfolio Website",
        link: "https://github.com/Nqnt41/portfolioWebsite",
        image: "/images/carousel/portfolioWebsite.JPG",
        description: "This very website, built using Typescript, Next.js, and Tailwind, available at covenyr.com.",
        tech: [
            { name: "Next.js", call: NextjsOriginal },
            { name: "React.js", call: ReactOriginal },
            { name: "TypeScript", call: TypescriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original },
            { name: "Tailwind", call: TailwindcssOriginal },
            { name: "GitHub", call: GithubOriginal },
            { name: "Figma", call: FigmaOriginal }
        ]
    },
    {
        name: "CaSMM Research Project",
        link: "https://github.com/UFGroup4b/Sapphire-Project03-4b",
        image: "/images/carousel/casmm.JPG",
        description: "Worked as part of a six member Agile-Scrum team to develop React.js resources for the CaSMM development project at https://github.com/STEM-C/CaSMM. Planned and built the front-end React.js interface and styling for the student and teacher assignment views.",
        tech: [
            { name: "React.js", call: ReactOriginal },
            { name: "JavaScript", call: JavascriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original },
            { name: "GitHub", call: GithubOriginal },
            { name: "Figma", call: FigmaOriginal }
        ]
    },
    {
        name: "Hive Mind",
        link: "https://github.com/zingenzombie/HiveMind",
        image: "/images/carousel/hiveMind.JPG",
        description: "A custom Unity game consisting of a single shared world made up of moduler user-defined tiles, with users being able to walk between server tiles at will. Developed project's user interface.",
        tech: [
            { name: "C#", call: CsharpOriginal },
            { name: "Unity", call: UnityOriginal },
            { name: "SQL", call: AzuresqldatabasePlain },
            { name: "MySQL", call: MysqlOriginal },
            { name: "GitHub", call: GithubOriginal },
            { name: "Visual Studio", call: VisualstudioOriginal },
            { name: "Figma", call: FigmaOriginal }
        ]
    },
    {
        name: "Loan Approval Prediction Application",
        link: "https://github.com/Nqnt41/loan-approval-prediction-app",
        image: "/images/carousel/loanApproval.JPG",
        description: "Led a team of five in creating a Python machine learning application used to predict loan approval odds. Combines several machine learning algorithms, including Neural Networks, Logistic Regression, KNN, SVM, Decision Trees, and Ensemble Learning Methods.",
        tech: [
            { name: "Python", call: PythonOriginal },
            { name: "Pandas", call: PandasOriginal },
            { name: "Keras", call: KerasOriginal },
            { name: "Tensorflow", call: TensorflowOriginal },
            { name: "Matplotlib", call: MatplotlibOriginal },
            { name: "Anaconda", call: AnacondaOriginal },
            { name: "Jupyter", call: JupyterOriginal },
            { name: "GitHub", call: GithubOriginal }
        ]
    },
    {
        name: "Music Sorter and Organizer",
        link: "https://github.com/Nqnt41/Music-Sorter-and-Organizer",
        image: "/images/carousel/musicSorter.JPG",
        description: "Worked in a pair to develop a music organization program utilizing the large-scale open-source Million Song Dataset. Manipulates, stores, accesses, searches, and efficiently displays data using the Splay Tree data structure.",
        tech: [
            { name: "C++", call: CplusplusOriginal },
            { name: "C", call: COriginal },
            { name: "CLion", call: ClionOriginal },
            { name: "GitHub", call: GithubOriginal }
        ]
    },
    {
        name: "Society of Software Developers Website",
        link: "https://github.com/ufssd/ufssd-website",
        image: "/images/carousel/ufssd.JPG",
        description: "Collaborated in a seven-member Agile-Scrum team to develop the organization’s website at ufssd.org. Designed and constructed website home page and continuously managed project dependencies.",
        tech: [
            { name: "React.js", call: ReactOriginal },
            { name: "JavaScript", call: JavascriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original },
            { name: "GitHub", call: GithubOriginal },
            { name: "Figma", call: FigmaOriginal }
        ]
    },
    {
        name: "UF Open Source Club'\s Echologator",
        link: "https://github.com/ufosc/Echo-Chat",
        image: "/images/carousel/echologator.JPG",
        description: "Joined the development of a Firestore back-end open source proximity-based chat application, Echologator. Aided the development of the application’s front-end chat communication and user profile display.",
        tech: [
            { name: "React Native", call: ReactnativeOriginal },
            { name: "JavaScript", call: JavascriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original },
            { name: "GitHub", call: GithubOriginal },
        ]
    },
];

export default function Projects() {
    const NextArrow = ({ onClick }: { onClick?: () => void }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <IoArrowForwardCircleOutline color="white" className="w-10 h-10 hover"/>
            </div>
        )
    }

    const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
        return (
            <div className="arrow prev hover" onClick={onClick}>
                <IoArrowBackCircleOutline color="white" className="w-10 h-10 hover"/>
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    // Workaround for weird carousel issue. Sometimes is needed, sometimes is not, keeping just in case.
    const chooseIndex = (next : number) => {
        if (next + 1 === projectData.length) {
            return 0;
        }
        return next + 1;
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0",
        swipe: false,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (old : number, next : number) => setImageIndex(() => next),
    }

    //https://react-slick.neostack.com/docs/example/center-mode

    return (
        <div id="projects" className="justify-center w-[100vw] pb-20 overflow-visible">
            <h1 className="fadeHidden text-6xl mb-0 text-center z-0 overflow-visible">Projects</h1>

            <div className='fadeHidden w-[95%] mt-9 m-auto h-auto z-10 overflow-visible'>
                <Slider {...settings}>
                    {projectData.map((project, index) => (
                        <div key={index} className={index === imageIndex ? "slide activeSlide" : index < imageIndex || (imageIndex == 0 && index == projectData.length - 1) ? "slide leftRotate" : "slide rightRotate"}>
                            <Image
                                className="p-0 m-0 cursor-pointer"
                                key={index}
                                src={project.image}
                                alt={`image-${index}`}
                                title={project.link}
                                width={2560}
                                height={1440}
                                onClick={() => window.open(project.link, "_blank")}
                            />
                            <div className={`p-2 bg-gray-700 w-[100%] transitionDetails ${index === imageIndex ? "activeDetails" : index < imageIndex || (imageIndex === 0 && index === projectData.length - 1) ? "leftDetails" : "rightDetails"}`}>
                                <h2 className="text-2xl font-bold underline cursor-pointer hover:text-blue-400 pb-2" onClick={() => window.open(project.link, "_blank")} title={project.link}>
                                    {project.name}
                                </h2>
                                <div className="text-lg">{project.description}</div>
                                <div className="flex justify-end space-x-1 mt-2 flex-wrap">
                                    {project.tech.map((tech, index2) => {
                                        const Icon = tech.call;

                                        return (
                                            <div key={tech.name} title={tech.name}>
                                                <Icon size={40}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}