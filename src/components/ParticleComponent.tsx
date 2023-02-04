import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            className="body-particles"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    number: {
                        value: 161,
                        density: {
                            enable: false,
                            value_area: 2840.9315098761817,
                        },
                    },
                    color: {
                        value: "#8FCECE",
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000",
                        },
                        polygon: {
                            nb_sides: 7,
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100,
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0,
                            sync: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 4.872463273808071,
                            size_min: 0.3,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: false,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600,
                        },
                    },
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onclick: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 150,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.1,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}