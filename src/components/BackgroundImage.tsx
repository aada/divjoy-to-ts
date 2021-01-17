import React from "react";
import "./BackgroundImage.scss";
export interface BackgroundProps {
  image: string;
  repeat?: boolean;
  opacity?: number;
}

const BackgroundImage: React.FC<BackgroundProps> = (props) => {
  return (
    <div
      className={"BackgroundImage" + (props.repeat ? " repeat" : "")}
      style={{
        backgroundImage: `url(${props.image})`,
        opacity: props.opacity,
      }}
    />
  );
};

export default BackgroundImage;
