import { Carousel } from "flowbite-react";
import React from "react";

function HeroSection() {
  return (
    <div className="h-56 sm:h-64 xl:h-96">
      <Carousel slideInterval={2000}>
        <img src="../posterImages/metalCableTrays.jpg" alt="..." />
        <img src="../posterImages/giEarthingStrips.jpg" alt="..." />
        <img src="../posterImages/msCableTrayTee.jpg" alt="..." />
        <img src="../posterImages/cableTrayCover.jpg" alt="..." />
        <img src="../posterImages/cableTrayReducer.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default HeroSection;
