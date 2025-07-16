import React, {useEffect, useRef, useState} from "react";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";

import {
    JavascriptOriginal, TypescriptOriginal, Html5Original, Css3Original, NodejsOriginal, JunitOriginal, JavaOriginal,
    AzuresqldatabasePlain, PythonOriginal, CplusplusOriginal, CsharpOriginal, COriginal, ROriginal, GitOriginal,
    GithubOriginal, MysqlOriginal, PostgresqlOriginal, MariadbOriginal, FirebaseOriginal, ApachesparkOriginal, ElectronOriginal,
    JsonOriginal, PowershellOriginal, BashOriginal, UnityOriginal, IntellijOriginal, ClionOriginal, VisualstudioOriginal,
    AnacondaOriginal, PandasOriginal, KerasOriginal, TensorflowOriginal, NpmOriginal, NextjsOriginal, ReactOriginal,
    PhotoshopOriginal, MayaOriginal, FigmaOriginal, TailwindcssOriginal, ReactnativeOriginal, MatplotlibOriginal,
    AftereffectsOriginal, BlenderOriginal, SlackOriginal, PremiereproOriginal, JupyterOriginal, LinkedinOriginal
} from 'devicons-react';

interface AboutProps {
    section: number;
    setSection: React.Dispatch<React.SetStateAction<number>>;
    prevSection: number;
    setPrevSection: React.Dispatch<React.SetStateAction<number>>;
}

export default function About( {section, setSection, prevSection, setPrevSection} : AboutProps ) {
    interface Logo {
        name: string;
        call: any;
    }

    const languages : Logo[][] = [
        [
            { name: "JavaScript", call: JavascriptOriginal },
            { name: "TypeScript", call: TypescriptOriginal },
            { name: "HTML", call: Html5Original },
            { name: "CSS", call: Css3Original }
        ],
        [
            { name: "Java", call: JavaOriginal },
            { name: "SQL", call: AzuresqldatabasePlain },
            { name: "Python", call: PythonOriginal }
        ],
        [
            { name: "C++", call: CplusplusOriginal },
            { name: "C#", call: CsharpOriginal },
            { name: "C", call: COriginal },
            { name: "R", call: ROriginal }
        ]
    ]

    const frameworks : Logo[][] = [
        [
            { name: "React.js", call: ReactOriginal },
            { name: "Node.js", call: NodejsOriginal },
            { name: "Next.js", call: NextjsOriginal },
            { name: "Tailwind", call: TailwindcssOriginal },
            { name: "React Native", call: ReactnativeOriginal }
        ],
        [
            { name: "MySQL", call: MysqlOriginal },
            { name: "PostgreSQL", call: PostgresqlOriginal },
            { name: "MariaDB", call: MariadbOriginal },
            { name: "Google Firebase", call: FirebaseOriginal }
        ],
        [
            { name: "Apache Spark", call: ApachesparkOriginal },
            { name: "Electron", call: ElectronOriginal },
            { name: "JUnit", call: JunitOriginal },
            { name: "Powershell", call: PowershellOriginal },
            { name: "Bash", call: BashOriginal }
        ],
        [
            { name: "Pandas", call: PandasOriginal },
            { name: "Keras", call: KerasOriginal },
            { name: "Tensorflow", call: TensorflowOriginal },
            { name: "Matplotlib", call: MatplotlibOriginal }
        ]
    ]

    const technologies : Logo[][] = [
        [
            { name: "Git", call: GitOriginal },
            { name: "GitHub", call: GithubOriginal },
            { name: "IntelliJ", call: IntellijOriginal },
            { name: "CLion", call: ClionOriginal },
            { name: "Visual Studio", call: VisualstudioOriginal }
        ],
        [
            { name: "Figma", call: FigmaOriginal },
            { name: "Slack", call: SlackOriginal },
            { name: "JSON", call: JsonOriginal },
            { name: "Unity", call: UnityOriginal }
        ],
        [
            { name: "Anaconda", call: AnacondaOriginal },
            { name: "Jupyter", call: JupyterOriginal },
            { name: "Adobe Suite", call: PhotoshopOriginal },
            { name: "Blender", call: BlenderOriginal },
            { name: "Maya", call: MayaOriginal }
        ]
    ]

    const [direction, setDirection] = useState('right');

    const updateSection = (next : number, useButtons : boolean) => {
        setPrevSection(section);

        if (useButtons) {
            setDirection(next > prevSection ? 'right' : 'left');
        }
        else {
            setDirection((next - section + 3) % 3 === 1 ? 'right' : 'left');
        }

        setTimeout(() => {
            setSection(next);
        }, 10)
    };

    const useArrow = (left : boolean) => {
        if (left) {
            if (section === 0) {
                updateSection(2, false);
            }
            else {
                updateSection(section - 1, false);
            }
        }
        else {
            if (section === 2) {
                updateSection(0, false);
            }
            else {
                updateSection(section + 1, false);
            }
        }
    }

    const ShowIcons = ({row, value} : { row: Logo[]; value: number }) => {
        return (
            <div
                className={`
                    ${section === value ? 'flex' : 'hidden'} 
                    ${prevSection === -1 ? '' : direction === 'left' ? 'fadeHiddenLeft' : 'fadeHiddenRight'} 
                    grid ${row.length === 3 ? 'grid-cols-3' : row.length === 4 ? 'grid-cols-4' : 'grid-cols-5'}
                `}
            >
                {row.map((unit, index) => {
                    const Icon = unit.call;

                    return (
                        <div key={index} className="flex flex-col items-center mx-3 font-bold" title={unit.name}>
                            <Icon size={125}/>
                            <span className="text-white">{unit.name.toUpperCase()}</span>
                        </div>
                    )
                })}
            </div>
        );
    }

    return (
        <div id="about" className="justify-center w-[100vw]">
            <h1 className="fadeHidden text-6xl py-12 text-center font-bold">About</h1>

            <div className="fadeHidden flex justify-center items-center text-lg gap-10 w-full overflow-hidden">
                <div className="inline-block bg-gray-700 rounded-xl w-[45%] h-[95%] whitespace-pre-wrap p-2">
                    <h1 className="text-5xl my-4 text-center font-bold">About Me</h1>

                    <img
                        src="/images/profileTransparent.png"
                        alt="Profile Image"
                        className="m-auto mt-[2%] mb-[2%] rounded-4xl w-[60%] fadeHidden"
                    />

                    <div className="flex justify-left px-5 py-2 items-center fadeHiddenLeftNoDelay">
                        <img
                            src="/images/experiences/jk.PNG"
                            alt="Joey and Kimmy's Logo"
                            className="rounded-lg w-13 h-13 mr-2 align-middle"
                        />
                        <div className="text-xl font-normal">
                            <b>Joey and Kimmy's Seafood Market and Restaurant</b><br/>
                            Software Engineer, Customer Service Staff
                        </div>
                    </div>

                    <div className="flex justify-left px-5 pt-2 items-center fadeHiddenLeftNoDelay">
                        <img
                            src="/images/experiences/uf.PNG"
                            alt="UF Logo"
                            className="rounded-lg w-13 h-13 mr-2 align-middle"
                        />
                        <div className="text-xl font-normal">
                            <b>University of Florida</b> - 3.70 GPA<br/>
                            Bachelor of Science in Computer Science
                        </div>
                    </div>

                    <div className="text-justify p-3 text-xl fadeHidden">{
                        "\"With over four years of practical experience in web development, software engineering and coding, I am an engineer fully committed to development best practices." +
                        "\n\nGraduating cum laude in Computer Science with a 3.7 GPA, I have poured countless hours into perfecting my craft as a developer through coursework, extracurricular activities, group projects, research, personal projects, and business commissioned software solutions." +
                        "\n\nI am eager to contribute my skills in creating websites and software to a team creating unique and innovative solutions!\""
                    }</div>
                </div>

                <div className="fadeHidden inline-block bg-gray-700 rounded-xl w-[45%] overflow-hidden p-3">
                    <h1 className="text-5xl my-4 text-center font-bold">{section === 0 ? "Languages" : section === 1 ? "Frameworks" : "Technologies"}</h1>
                    <div className="flex flex-col justify-center h-full fadeHidden">
                        {languages.map((row, index) => (
                            <ShowIcons key={index} row={row} value={0} />
                        ))}
                        {frameworks.map((row, index) => (
                            <ShowIcons key={index} row={row} value={1} />
                        ))}
                        {technologies.map((row, index) => (
                            <ShowIcons key={index} row={row} value={2} />
                        ))}
                    </div>

                    <button className="absolute top-1/2 left-0 w-10 h-10 mx-3 cursor-pointer hover" onClick={() => useArrow(true)}><IoArrowBackCircleOutline color="white" className="w-10 h-10"/></button>
                    <button className="absolute top-1/2 right-0 w-10 h-10 mx-3 cursor-pointer hover" onClick={() => useArrow(false)}> <IoArrowForwardCircleOutline color="white" className="w-10 h-10"/> </button>

                    <div className="flex justify-center border-black text-black font-bold mt-4">
                        <button
                            className={`${section === 0 ? 'bg-gray-600' : 'bg-white'} hover:bg-gray-400 border-3 p-1 cursor-pointer rounded-md`}
                            onClick={() => updateSection(0, true)}
                        >
                            Languages
                        </button>
                        <button
                            className={`${section === 1 ? 'bg-gray-600' : 'bg-white'} hover:bg-gray-400 border-3 border-l-0 p-1 cursor-pointer rounded-md`}
                            onClick={() => updateSection(1, true)}
                        >
                            Frameworks
                        </button>
                        <button
                            className={`${section === 2 ? 'bg-gray-600' : 'bg-white'} hover:bg-gray-400 border-3 border-l-0 p-1 cursor-pointer rounded-md`}
                            onClick={() => updateSection(2, true)}
                        >
                            Technologies
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}