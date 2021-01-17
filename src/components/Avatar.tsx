import React from "react";
import Image from "react-bootstrap/Image";

export interface AvatarProps {
  size: number;
  src: string;
  alt: string;
}
const Avatar: React.FC<AvatarProps> = (props) => {
  const { size, ...otherProps } = props;

  return (
    <Image
      {...otherProps}
      roundedCircle={true}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Avatar;
