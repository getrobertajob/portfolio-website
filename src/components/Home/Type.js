import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Back-End Developer",
          "Tier 1 Tech Support",
          "Tier 2 Tech Support",
          "Senior Application Support",
          "Development & Dev Ops Support",
          "QA Test Tech",
          "Database Administrator",
          "Server Maintenance Technician",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
