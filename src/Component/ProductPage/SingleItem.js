import React from "react";
import { useDispatch } from "react-redux";
import {
  updateCatagorySelected,
  setShowHomePageComponent,
  updateRenderComponent,
} from "../../Store/store";
import "./singleItem.scss";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleItem = (catagoryName) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cardClicked = () => {
    dispatch(updateCatagorySelected(catagoryName.catagoryName));
    dispatch(setShowHomePageComponent(false));
    dispatch(updateRenderComponent("CatagoryDetail"));
  };
  return (
    <>
      <div className="main_singleItem" onClick={cardClicked}>
        <div>
          {
            <img
              alt="example"
              src={catagoryName.catagoryImageURL}
              style={{ height: "8rem", width: "16rem", borderRadius: ".5rem" }}
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

export default SingleItem;
