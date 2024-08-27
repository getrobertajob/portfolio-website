import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          line_linked: {
            enable: false,
            opacity: .1,
          },
          move: {
            direction: "top-left",
            enable: true,
            // outModes: {
            //     default: "none",
            // },
            random: true,
            speed: 6,
            straight: true,
        },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: .3,
            },
          },
        },
        interactivity: {
          events: {
            // onclick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
