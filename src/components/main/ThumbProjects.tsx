import React from "react";
import "../../style/ThumbProjects.css";

const ThumbProjects: React.FC<{ src: string, alt: string, }> = ({src, alt}) => {
  return (
    <div className="thumbContainer">
      <img className="thumbImage" src={src} alt={alt} />
    </div>
  );
}

export default ThumbProjects;