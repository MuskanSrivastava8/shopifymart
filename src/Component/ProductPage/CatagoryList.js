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

  const [showCatagoryDetailPage, setshowCatagoryDetailPage] = useState(false);

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
            {catagorySelectedResp ? (
              <Navigate to="/CatagoryDetail" replace={true} />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default CatagoryList;
