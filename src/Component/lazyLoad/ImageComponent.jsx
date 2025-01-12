import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ImageComponent = ({ src, className }) => {
  return (
    <div>
      <LazyLoadImage
        className={className || ""}
        src={src}
        // width={600}
        // height={400}
        alt="Back ground Image"
        effect="blur"
      />
    </div>
  );
};

export default ImageComponent;
