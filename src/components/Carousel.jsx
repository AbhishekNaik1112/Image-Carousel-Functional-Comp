import React, { useState } from "react";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const increaseCount = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const decreaseCount = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center items-center w-full h-screen relative">
    <h1 className="text-3xl font-bold mb-4">Carousel</h1>
    <div className="carousel-container flex items-center overflow-hidden relative">
      <div className="leftArrow arrowDiv flex cursor-pointer" onClick={decreaseCount}>
        <ArrowBackIosIcon className="text-2xl" />
      </div>
      <div className="flex flex-col items-center relative">
        <img
          src={images[currentIndex].img}
          alt=""
          className="mb-2 max-w-full max-h-full"
          style={{ maxWidth: 'calc(100% - 30px)', maxHeight: 'calc(100% - 30px)' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="title text-xl font-semibold mb-2 text-red-600 font-bold">{images[currentIndex].title}</h2>
          <h4 className="caption text-sm text-blue-600 font-bold">{images[currentIndex].subtitle}</h4>
        </div>
      </div>
      <div className="rightArrow arrowDiv flex cursor-pointer" onClick={increaseCount}>
        <ArrowForwardIosIcon className="text-2xl" />
      </div>
    </div>
  </div>
  
  );
}

export default Carousel;