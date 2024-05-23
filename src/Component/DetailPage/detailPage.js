import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Navigate } from "react-router-dom";
import "./detailPage.scss";

const DetailPage = (catagoryName) => {
  const [showCatagoryPage, setshowCatagoryPage] = useState(false);
  const navigateToCatagoryPage = () => {
    setshowCatagoryPage(true);
  };

  return (
    <React.Fragment>
      {showCatagoryPage ? (
        <Navigate to="/CatagoryDetail" replace={true} />
      ) : null}
      
      <div className="detail_page_Main">
        <div className="detailPage_btn">
          <Button
            variant="contained"
            size="small"
            onClick={navigateToCatagoryPage}
          >
            <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          </Button>
        </div>
        <div className="detailPage_data_main">
          <div className="detailPage_Address">
            <div>Adress</div>
            <div>Edit Address</div>
          </div>
          <div className="detailPage_image_data">
            <div>Image</div>
            <div>details</div>
          </div>
          <div className="detailPage_btn">
            <div>Remove</div>
            <div>Save</div>
            <div>Buy</div>
          </div>
          <div className="detailPage_">Price details</div>
          <div className="detailPage_">Place order</div>
        </div>
        </div>
     
    </React.Fragment>
  );
};

export default DetailPage;
