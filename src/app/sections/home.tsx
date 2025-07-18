import React, {useEffect, useMemo} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import Typed from "typed.js";

interface HomeProps {
    init: boolean;
    setInit: React.Dispatch<React.SetStateAction<boolean>>;
    el: any;
}

export default function Home({init, setInit, el} : HomeProps) {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            await loadPolygonMaskPlugin(engine);
        }).then(() => {
            setInit(true);
            console.log("init true");
        });
    }, []);

    const pdfDownload = () => {
        const link = document.createElement("a");
        link.href = "Ryan_Coveny_Resume.pdf";
        link.download = "Ryan_Coveny_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const options : any = useMemo(() => ({
        "autoPlay": true,
        "background": {
        "color": {
            "value": "#000000"
        },
        "image": "",
            "position": "",
            "repeat": "",
            "size": "",
            "opacity": 1
    },
        "backgroundMask": {
        "composite": "destination-out",
            "cover": {
            "opacity": 1,
                "color": {
                "value": ""
            }
        },
        "enable": false
    },
        "clear": true,
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
        "enable": true,
            "zIndex": 0
    },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
        "interactivity": {
        "detectsOn": "window",
            "events": {
            "onClick": {
                "enable": true,
                    "mode": "repulse"
            },
            "onDiv": {
                "selectors": "",
                    "enable": false,
                    "mode": {},
                "type": "star"
            },
            "onHover": {
                "enable": true,
                    "mode": "attract",
                    "parallax": {
                    "enable": true,
                        "force": 500,
                        "smooth": 10
                }
            },
            "resize": {
                "delay": 0.5,
                    "enable": true
            }
        },
        "modes": {
            "trail": {
                "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
            },
            "attract": {
                "distance": 200,
                    "duration": 1,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 25,
                    "speed": 0.5
            },
            "bounce": {
                "distance": 200
            },
            "bubble": {
                "distance": 400,
                    "duration": 2,
                    "mix": true,
                    "opacity": 0.8,
                    "size": 40,
                    "divs": {
                    "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "selectors": ""
                }
            },
            "connect": {
                "distance": 80,
                    "links": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 400,
                    "links": {
                    "blink": false,
                        "consent": false,
                        "opacity": 1
                }
            },
            "push": {
                "default": true,
                    "groups": [],
                    "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "divs": {
                    "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "selectors": ""
                }
            },
            "slow": {
                "factor": 3,
                    "radius": 200
            },
            "particle": {
                "replaceCursor": false,
                    "pauseOnStop": false,
                    "stopDelay": 0
            },
            "light": {
                "area": {
                    "gradient": {
                        "start": {
                            "value": "#494949ff"
                        },
                        "stop": {
                            "value": "#000000"
                        }
                    },
                    "radius": 100
                },
                "shadow": {
                    "color": {
                        "value": "#000000"
                    },
                    "length": 200
                }
            }
        }
    },
        "manualParticles": [],
        "particles": {
        "bounce": {
            "horizontal": {
                "value": 1
            },
            "vertical": {
                "value": 1
            }
        },
        "collisions": {
            "absorb": {
                "speed": 3
            },
            "bounce": {
                "horizontal": {
                    "value": 1
                },
                "vertical": {
                    "value": 1
                }
            },
            "enable": true,
                "maxSpeed": 3,
                "mode": "bounce",
                "overlap": {
                "enable": true,
                    "retries": 0
            }
        },
        "color": {
            "value": "#ffffff",
                "animation": {
                "h": {
                    "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                },
                "s": {
                    "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                },
                "l": {
                    "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                }
            }
        },
        "effect": {
            "close": true,
                "fill": true,
                "options": {},
            "type": {}
        },
        "groups": [],
            "move": {
            "angle": {
                "offset": 0,
                    "value": 90
            },
            "attract": {
                "distance": 200,
                    "enable": false,
                    "rotate": {
                    "x": 3000,
                        "y": 3000
                }
            },
            "center": {
                "x": 50,
                    "y": 50,
                    "mode": "percent",
                    "radius": 0
            },
            "decay": 0,
                "distance": {},
            "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
            },
            "path": {
                "clamp": true,
                    "delay": {
                    "value": 0
                },
                "enable": false,
                    "options": {}
            },
            "outModes": {
                "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
            },
            "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                "acceleration": 0,
                    "enable": false
            },
            "straight": false,
                "trail": {
                "enable": false,
                    "length": 10,
                    "fill": {}
            },
            "vibrate": false,
                "warp": false
        },
        "number": {
            "density": {
                "enable": true,
                    "width": 1920,
                    "height": 1080
            },
            "limit": {
                "mode": "delete",
                    "value": 0
            },
            "value": 250
        },
        "opacity": {
            "value": {
                "min": 0.5,
                    "max": 1
            },
            "animation": {
                "count": 0,
                    "enable": true,
                    "speed": 2,
                    "decay": 1,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
            }
        },
        "reduceDuplicates": false,
            "shadow": {
            "blur": 0,
                "color": {
                "value": "#000"
            },
            "enable": false,
                "offset": {
                "x": 0,
                    "y": 0
            }
        },
        "shape": {
            "close": true,
                "fill": true,
                "options": {},
            "type": "circle"
        },
        "size": {
            "value": {
                "min": 0.5,
                    "max": 8
            },
            "animation": {
                "count": 0,
                    "enable": true,
                    "speed": 20,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
            }
        },
        "stroke": {
            "width": 3
        },
        "zIndex": {
            "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
        },
        "destroy": {
            "bounds": {},
            "mode": "none",
                "split": {
                "count": 1,
                    "factor": {
                    "value": 3
                },
                "rate": {
                    "value": {
                        "min": 4,
                            "max": 9
                    }
                },
                "sizeOffset": true,
                    "particles": {}
            }
        },
        "roll": {
            "darken": {
                "enable": false,
                    "value": 0
            },
            "enable": false,
                "enlighten": {
                "enable": false,
                    "value": 0
            },
            "mode": "vertical",
                "speed": 25
        },
        "tilt": {
            "value": 0,
                "animation": {
                "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
            },
            "direction": "clockwise",
                "enable": false
        },
        "twinkle": {
            "lines": {
                "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
            },
            "particles": {
                "enable": true,
                    "frequency": 0.01,
                    "opacity": 0.5
            }
        },
        "wobble": {
            "distance": 5,
                "enable": false,
                "speed": {
                "angle": 50,
                    "move": 10
            }
        },
        "life": {
            "count": 0,
                "delay": {
                "value": 0,
                    "sync": false
            },
            "duration": {
                "value": 0,
                    "sync": false
            }
        },
        "rotate": {
            "value": 0,
                "animation": {
                "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
            },
            "direction": "clockwise",
                "path": false
        },
        "orbit": {
            "animation": {
                "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": false
            },
            "enable": false,
                "opacity": 1,
                "rotation": {
                "value": 45
            },
            "width": 1
        },
        "links": {
            "blink": false,
                "color": {
                "value": "#ffffff"
            },
            "consent": false,
                "distance": 150,
                "enable": true,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                "blur": 5,
                    "color": {
                    "value": "#000"
                },
                "enable": false
            },
            "triangles": {
                "enable": false,
                    "frequency": 1
            },
            "width": 1,
                "warp": false
        },
        "repulse": {
            "value": 0,
                "enabled": true,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
        }
        },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "smooth": false,
            "style": {},
            "themes": [],
            "zLayers": 100,
            "key": "parallax",
            "name": "Parallax",
            "motion": {
            "disable": false,
                "reduce": {
                "factor": 4,
                    "value": true
            }
        }
    }), []);

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

    return (
        <div id="home" className="fadeHidden relative w-[100vw] h-[100vh] z-0 m-0">
            <Particles
                id='tsparticles'
                options={options}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white text-4xl whitespace-pre">
                <span ref={el} />
                <br/>
                <button className="text-2xl mt-3 mb-8 border-black border-solid border-1 bg-white hover:bg-gray-400 border-3 p-1 cursor-pointer rounded-md text-black font-bold" onClick={() => pdfDownload()}>Download Resume</button>
                <button className="text-2xl ml-2 mt-1 mb-8 border-black border-solid border-1 bg-white hover:bg-gray-400 border-3 p-1 cursor-pointer rounded-md text-black font-bold" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact Me</button>
            </div>
        </div>
    )
}