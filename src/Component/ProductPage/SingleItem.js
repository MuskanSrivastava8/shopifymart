import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const SingleItem = (catagoryName) => {
  const cardClicked = ()=> {
    console.log("hii", catagoryName.catagoryName)
  }
  return (
    <>
      <span className="main_singleItem" onClick={cardClicked} style={{backgroundColor:"pink"}}>
        <div>
          {
            <img
              alt="example"
              src={catagoryName.catagoryImageURL}
              style={{ height: "6rem" }}
            />
          }
        </div>
        <div style={{ height: "2rem", fontSize: "12px" }}> {catagoryName.catagoryName.toUpperCase()}</div>
      </span>
    </>
  );
};
// const SingleItem = (catagoryName) => (
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={
// <img
//   alt="example"
//   src={catagoryName.catagoryImageURL}
//   style={{ height: "6rem" }}
// />
//     }
//   >
//     <Meta
//       title={catagoryName.catagoryName.toUpperCase()}
//       style={{ height: "2rem", fontSize: "12px" }}
//     />
//   </Card>
// );
export default SingleItem;
