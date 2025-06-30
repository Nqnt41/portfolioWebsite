import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './projects.css';
import {
    AnacondaOriginal,
    ApachesparkOriginal,
    AzuresqldatabasePlain,
    BlenderOriginal,
    CsharpOriginal,
    Css3Original,
    ElectronOriginal,
    FigmaOriginal,
    FirebaseOriginal,
    GithubOriginal,
    Html5Original,
    JavaOriginal,
    JavascriptOriginal,
    JsonOriginal,
    JupyterOriginal,
    KerasOriginal, MatplotlibOriginal,
    MysqlOriginal,
    NextjsOriginal,
    PandasOriginal, PythonOriginal,
    ReactOriginal,
    TailwindcssOriginal, TensorflowOriginal,
    TypescriptOriginal,
    UnityOriginal,
    VisualstudioOriginal
} from "devicons-react";

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
        description: "This very website, built using Typescript, Next.js, and Tailwind.",
        tech: [
            { name: "Next.js", call: NextjsOriginal },
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
    // TODO: Etc lmao. million song dataset, ufssd, echologator, etc.
];

export default function Projects() {
    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    // Workaround for weird carousel issue. Sometimes is needed, sometimes is not, keep just in case.
    const chooseIndex = (next) => {
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
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (old, next) => setImageIndex(() => next),
    }

    //https://react-slick.neostack.com/docs/example/center-mode

    return (
        <div id="projects" className="justify-center bg-gray-800 w-[100vw] min-h-screen">
            <h1 className="fadeHidden text-6xl mb-5 pb-10 text-center">Projects</h1>

            <div className='fadeHidden w-[80%] m-auto h-auto'>
                <Slider {...settings}>
                    {projectData.map((project, index) => (
                        <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
                            <Image
                                className="p-0 m-0 cursor-pointer"
                                key={index}
                                src={project.image}
                                alt={`image-${index}`}
                                width={2560}
                                height={1440}
                                onClick={() => window.open(project.link, "_blank")}
                            />
                            <div className={index === imageIndex ? "p-2 bg-gray-700 w-[100%] transition-opacity-100" : "opacity-0"}>
                                <h2 className="text-xl font-bold underline cursor-pointer hover:text-blue-400" onClick={() => window.open(project.link, "_blank")}>
                                    {project.name}
                                </h2>
                                <div>{project.description}</div>
                                <div className="flex justify-end space-x-1 mt-2">
                                    {project.tech.map((tech, index2) => {
                                        const Icon = tech.call;

                                        return (
                                            <div title={tech.name}>
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