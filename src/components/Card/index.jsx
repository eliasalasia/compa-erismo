import React from "react";

const Img = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export const Cards = ({ variant }) => {
  const Icons = {
    img1: { src: "./src/image/icon-supervisor.svg", alt: "Supervisor" },
    img2: { src: "./src/image/icon-team-builder.svg", alt: "Team Builder" },
    img3: { src: "./src/image/icon-calculator.svg", alt: "Calculator" },
    img4: { src: "./src/image/icon-karma.svg", alt: "Karma" },
  };

  const { src, alt } = Icons[variant];

  return (
    <article>
      <h2>{alt}</h2>
      <p>
        {alt === "Supervisor"
          ? "Monitors activity to identify project roadblocks"
          : alt === "Team Builder"
          ? "Scans our talent network to create the optimal team for your project"
          : alt === "Karma"
          ? "Regularly evaluates our talent to ensure quality"
          : "Uses data from past projects to provide better delivery estimates"}
      </p>
      <Img src={src} alt={alt} />
    </article>
  );
};

export default Cards;


