import React, { useState } from "react";
import SingleItem from "./SingleItem";
import "./catagoryList.scss";
import ImageRes from "../../Data Response/Image";

function CatagoryList() {
  const catagoryRes = ImageRes;

  return (
    <div className="main_catagoryList">
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
