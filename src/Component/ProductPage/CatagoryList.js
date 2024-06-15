import React, { useState } from "react";
import SingleItem from "./SingleItem";
import "./catagoryList.scss";
import ImageRes from "../../Data Response/Image";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CatagoryList() {
  const catagoryRes = ImageRes;
  const catagorySelectedResp = useSelector(
    (store) => store.STORE.catagorySelected
  );
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  return (
    <div className="main_catagoryList">
    {/* {showWishListComponentResp ? <Navigate to="/WishListPage" replace={true} /> : null}
          {showHomePageComponentResp ? <Navigate to="/ProductPage" replace={true} /> : null} */}
      {catagoryRes.map((i) => {
        return (
          <React.Fragment>
            <SingleItem
              key={i.imgLink}
              catagoryName={i.catagoryName}
              catagoryImageURL={i.imgLink}
            />
            
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default CatagoryList;
