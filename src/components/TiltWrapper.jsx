import React from "react";
import Tilt from "react-parallax-tilt";

const TiltWrapper = ({
  children,
  className = "",
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  perspective = 1000,
  scale = 1.05,
  transitionSpeed = 2000,
  glareEnable = true,
  glareMaxOpacity = 0.4,
  glareColor = "#ffffff",
  glarePosition = "bottom",
  ...props
}) => {
  return (
    <Tilt
      className={`${className} transform-gpu`}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={perspective}
      scale={scale}
      transitionSpeed={transitionSpeed}
      glareEnable={glareEnable}
      glareMaxOpacity={glareMaxOpacity}
      glareColor={glareColor}
      glarePosition={glarePosition}
      {...props}
    >
      {children}
    </Tilt>
  );
};

export default TiltWrapper;
