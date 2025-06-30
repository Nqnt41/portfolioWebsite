import React, {useEffect, useRef, useState} from "react";
import Typed from "typed.js";

import {
    JavascriptOriginal,
    TypescriptOriginal,
    Html5Original,
    Css3Original,
    NodejsOriginal,
    JunitOriginal,
    JavaOriginal,
    AzuresqldatabasePlain,
    PythonOriginal,
    CplusplusOriginal,
    CsharpOriginal,
    COriginal,
    ROriginal,
    GitOriginal,
    GithubOriginal,
    MysqlOriginal,
    PostgresqlOriginal,
    MariadbOriginal,
    FirebaseOriginal,
    ApachesparkOriginal,
    ElectronOriginal,
    JsonOriginal,
    PowershellOriginal,
    BashOriginal,
    UnityOriginal,
    IntellijOriginal,
    ClionOriginal,
    VisualstudioOriginal,
    AnacondaOriginal,
    JupyterOriginalWordmark,
    PandasOriginal,
    KerasOriginal,
    TensorflowOriginal,
    NpmOriginal,
    NextjsOriginal,
    ReactOriginal,
    PhotoshopOriginal,
    MayaOriginal,
    FigmaOriginal,
    TailwindcssOriginal,
    ReactnativeOriginal,
    MatplotlibOriginal,
    AftereffectsOriginal,
    BlenderOriginal,
    SlackOriginal,
    PremiereproOriginal,
    JupyterOriginal
} from 'devicons-react';

export default function About( {init, el, section, setSection} ) {
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

    const currentRows = section === 0 ? languages : section === 1 ? frameworks : section === 2 ? technologies : [];

    useEffect(() => {
        if (!init || !el.current) { return }

        const typed = new Typed(el.current, {
            strings: ["Hello, my name is Ryan Coveny!\nI am an Entry-Level Software Engineer."],
            typeSpeed: 15,
            smartBackspace: true,
            backDelay: 5,
        });

        return () => {
            typed.destroy();
        };
    }, [init]);

    const pdfDownload = () => {
        const link = document.createElement("a");
        link.href = "Ryan_Coveny_Resume.pdf";
        link.download = "Ryan_Coveny_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div id="about" className="justify-center bg-gray-800 w-[100vw] min-h-screen p-7 pb-10">
            <h1 className="fadeHidden text-6xl mb-5 text-center">About</h1>

            <div className="fadeHidden flex justify-center items-center text-lg gap-10 w-full">
                <div className="inline-block bg-blue-950 rounded-xl w-[25%] h-[95%] whitespace-pre-wrap pb-3">
                    <img
                        src="/images/profileTransparent.png"
                        alt="Profile Image"
                        className="m-auto mt-[2%] mb-[2%] border-4 border-blue-500 rounded-3xl w-[60%]"
                    />
                    <div className="text-justify p-3">{
                        "\"With over four years of practical experience in web development, software engineering and coding, I am an engineer fully committed to development best practices." +
                        "\n\nGraduating cum laude in Computer Science with a 3.7 GPA, I have poured countless hours into perfecting my craft as a developer through coursework, extracurricular activities, group projects, research, personal projects, and business commissioned software solutions." +
                        "\n\nI am eager to contribute my skills in creating websites and software to a team creating unique and innovative solutions!\""
                    }</div>
                    <span className="text-blue-400 underline cursor-pointer hover:text-blue-600 text-justify pl-3" onClick={() => pdfDownload()}>
                        Resume Download
                    </span>
                </div>

                <div className="fadeHidden inline-block bg-blue-950 rounded-xl w-auto overflow-hidden">
                    <div className="flex flex-col justify-center h-full">
                        {currentRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`grid ${row.length === 3 ? 'grid-cols-3' : row.length === 4 ? 'grid-cols-4' : 'grid-cols-5'} fadeHiddenX`}
                            >
                                {row.map((unit, index) => {
                                    const Icon = unit.call;

                                    return (
                                        <div key={index} className="flex flex-col items-center ml-2 mr-2 font-bold">
                                            <Icon size={125}/>
                                            <span className="text-white">{unit.name.toUpperCase()}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center border-black text-black">
                        <button className={`${section === 0 ? 'bg-gray-500' : 'bg-white'} hover:bg-gray-300 border-4 p-1 cursor-pointer`} onClick={() => setSection(0) }>Languages</button>
                        <button className={`${section === 1 ? 'bg-gray-500' : 'bg-white'} hover:bg-gray-300 border-4 border-l-0 p-1 cursor-pointer`} onClick={() => setSection(1) }>Frameworks</button>
                        <button className={`${section === 2 ? 'bg-gray-500' : 'bg-white'} hover:bg-gray-300 border-4 border-l-0 p-1 cursor-pointer`} onClick={() => setSection(2) }>Technologies</button>
                    </div>
                </div>
            </div>
        </div>
    );
}