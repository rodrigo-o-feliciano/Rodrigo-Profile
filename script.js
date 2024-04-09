particlesJS.load('particles-container', 'particlesjs-config.json');

function toggleMode() {
    // Reset/destroy with Dom the previous particleJS instance to avoid accumulation and slowdowns
window.pJSDom = window.pJSDom.filter((pJSInstance, index) => {
    if (pJSInstance.pJS.canvas.el.parentNode.id === 'particles-container') {
        pJSInstance.pJS.fn.vendors.destroypJS();
        return false;
    }
    return true;
});
/*----------------------Start-----------------------*/ 
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    // Define the base configuration for particlesJS
    let particlesConfig = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 450
                }
            },
            color: {
                value: "#000000" // Default to light theme
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 3
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 8,
                    size_min: 0.4,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 112.08069810263392,
                color: "#000000", // Default to light theme
                opacity: 0.4,
                width: 0.9606916980225765
            },
            move: {
                enable: true,
                speed: 1.4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/Perfil1000.png");
        // Light theme configuration already set as default
    } else {
        img.setAttribute("src", "./assets/Profile3xpurple1000.png");
        // Adjust the configuration for the dark theme
        particlesConfig.particles.color.value = "#ffffff";
        particlesConfig.particles.line_linked.color = "#ffffff";
    }

    // Initialize or update particlesJS with the modified configuration
    particlesJS('particles-container', particlesConfig);
}
