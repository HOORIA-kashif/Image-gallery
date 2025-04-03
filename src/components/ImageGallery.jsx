import { useState } from "react";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import Button from "@mui/material/Button";
import image1 from "../assets/8.jpg";
import image2 from "../assets/18.jpg";
import image3 from "../assets/17.jpg";
import image4 from "../assets/14.jpg";
import image5 from "../assets/15.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: image1,
    thumbnail: image1,
    title: "Landscapes",
    description: "Explore breathtaking landscapes from around the world.",
  },
  {
    src: image2,
    thumbnail:image2,
    title: "Cityscapes",
    description: "Discover stunning city views and urban architecture.",
  },
  {
    src: image3,
    thumbnail: image3,
    title: "Technology",
    description: "See the latest in innovation and futuristic designs.",
  },
  {
    src: image4,
    thumbnail: image4,
    title: "Abstract Art",
    description: "Dive into mesmerizing abstract art and designs.",
  },
  {
    src:image5,
    thumbnail: image5,
    title: "Outer Space",
    description: "Explore the beauty of the cosmos and beyond.",
  },
  {
    src: image1,
    thumbnail:image1,
    title: "Nature",
    description: "Experience the serenity of nature.",
  },
  {
    src:image2,
    thumbnail: image2,
    title: "Ocean",
    description: "Dive into the depths of the ocean.",
  },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 5,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          
           
        }}
      >
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px", 
          height: "10px",
          borderRadius: "50%",
          backgroundColor: currentIndex === i ? "#FF5733" : "#CCCCCC", 
          transition: "all 0.4s ease", 
          marginTop: "40px", 
        }}
      ></div>
    ),
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Top Corner Title */}
      <div className="absolute top-4 left-4 z-20">
        <h1 className="text-2xl font-bold text-white">  My Image Gallery</h1>
      </div>

    
      <AnimatePresence mode="wait">
        <motion.div
          key={images[currentIndex].src}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

    
      <div className="relative z-10 text-center p-6 backdrop-blur-lg rounded-xl max-w-lg">
        <h1 className="text-6xl font-bold">{images[currentIndex].title}</h1>
        <p className="mt-2 text-gray-300">{images[currentIndex].description}</p>
        <Button className="mt-4 bg-green-600 hover:bg-green-700">
          Explore Now
        </Button>
      </div>

     
      <div className="relative z-10 mt-6 w-3/4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`px-2 transition-transform duration-400 ${
                currentIndex === index ? "transform -translate-y-8" : ""
              }`}
            >
              <img
                src={image.thumbnail}
                alt="Thumbnail"
                className={`w-50 h-60 object-cover rounded-lg cursor-pointer transition-all` }
              />
            </div>
          ))}
        </Slider>

      </div>
      <div className="absolute bottom-4 right-4 z-20">
        <h1 className="text-2xl font-bold text-white"> HOORIA</h1>
      </div>
    </div>
  );
}
