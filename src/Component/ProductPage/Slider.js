import React from "react";
import { Carousel } from "antd";
const contentStyle = {

    height:"220px",
  color: "rgb(255, 255, 255)",
    lineHeight: "160px",
    textAlign: "center",
    background: "rgb(54, 77, 121)",
    margin: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img
            alt="example"
            src={"https://cdn.dummyjson.com/product-images/1/2.jpg"}          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            alt="example1"
            src={"https://cdn.dummyjson.com/product-images/8/2.jpg"}          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            alt="example"
            src={"https://cdn.dummyjson.com/product-images/13/2.png"}          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            alt="example"
            src={"https://cdn.dummyjson.com/product-images/16/4.jpg"}          />
        </h3>
      </div>
    </Carousel>
  );
};
export default Slider;
