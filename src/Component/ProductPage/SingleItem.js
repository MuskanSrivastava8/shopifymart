import React from "react";
import { useDispatch } from "react-redux";
import { updateCatagorySelected } from "../../Store/store";
import "./singleItem.scss";

const SingleItem = (catagoryName) => {
  const dispatch = useDispatch();
  const cardClicked = () => {
    dispatch(updateCatagorySelected(catagoryName.catagoryName));
  };
  return (
    <>
      <div className="main_singleItem" onClick={cardClicked}>
        <div>
          {
            <img
              alt="example"
              src={catagoryName.catagoryImageURL}
              style={{ height: "10rem", width: "16rem", borderRadius: ".5rem" }}
            />
          }
        </div>
        <div style={{ height: "1rem", fontSize: "12px" }}>
          {catagoryName.catagoryName.toUpperCase()}
        </div>
      </div>
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
