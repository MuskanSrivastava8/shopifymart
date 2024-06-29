import React from "react";
import { Carousel } from "antd";
import img1 from "./Slider_1.JPG";
import img2 from "./Slider_2.JPG";
import img3 from "./Slider_3.JPG";
import img4 from "./Slider_4.JPG";

const contentStyle = {
  height: "220px",
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
  const onChange = (currentSlide) => {};
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img alt="example" src={img1} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img alt="example1" src={img2} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img alt="example" src={img3} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img alt="example" src={img4} />
        </h3>
      </div>
    </Carousel>
  );
};
export default Slider;
