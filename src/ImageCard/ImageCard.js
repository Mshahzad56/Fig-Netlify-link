import React from "react";
import '../ImageCard/ImageCard.css'
import img1 from '../Images/image 15.png';
import img2 from '../Images/figma.png';
import img3 from '../Images/Vector.png';
import img4 from '../Images/Report1.png';

const ImageCard = () => {
  return (
    <>
      <div class="image-container mb-3">
        <img src={img1} alt="Image" />
        <div class="overlay-buttons">
          <button class="button">
            Copy <img src={img2} alt="uifn" className="imag-icon" />{" "}
          </button>
          <button class="button">
            Download <img src={img3} alt="kcdm" className="imag-icon" />{" "}
          </button>
          <button class="button">
            Report <img src={img4} alt="wjkcdn" className="imag-icon3" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCard;