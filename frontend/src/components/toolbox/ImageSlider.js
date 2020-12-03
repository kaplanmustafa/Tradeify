import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageSlider = (props) => {
  const [index, setIndex] = useState(0);

  const { images } = props;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="text-primary bg-primary"
      >
        {images.map((image, index) => {
          return (
            <Carousel.Item key={image.name} className="text-primary bg-primary">
              <img
                className="d-block w-100"
                src={"images/attachments/" + image.name}
                alt="First slide"
              />
              <Carousel.Caption className="text-primary">
                {/* <h3>{image.id}. slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
