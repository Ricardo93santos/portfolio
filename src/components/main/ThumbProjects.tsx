import React from "react";

const ThumbProjects: React.FC<{ src: string, alt: string, }> = ({src, alt}) => {
  return <img src={src} alt={alt} />;
}

export default ThumbProjects;