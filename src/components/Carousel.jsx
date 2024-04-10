import Images from "../data/Images";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { getImageUrl } from "../utils/image-util";

export default function Carousel({ handleImageSelect }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="container mx-auto overflow-hidden">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {Images.map((image, index) => (
          <motion.div key={index} className="min-h-auto min-w-80 p-3">
            <button onClick={() => handleImageSelect(image.url)}>
              <img
                className="w-full h-full aspect-video object-contain rounded-md block"
                src={getImageUrl(image.url)}
                alt={image.alt}                
              />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

Carousel.propTypes = {
  handleImageSelect: PropTypes.func.isRequired,
};
