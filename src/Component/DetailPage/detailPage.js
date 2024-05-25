import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Navigate } from "react-router-dom";
import "./detailPage.scss";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import { CiDeliveryTruck } from "react-icons/ci";

const DetailPage = (catagoryName) => {
  const [showCatagoryPage, setshowCatagoryPage] = useState(false);
  const navigateToCatagoryPage = () => {
    setshowCatagoryPage(true);
  };
  const productDataResp = useSelector((store) => store.STORE.itemData);
  const itemSelectedResp = useSelector((store) => store.STORE.itemSelected);
  const itemSelectedResult = productDataResp.filter((i) => {
    return i.id === itemSelectedResp;
  });
  let priceBeforeDiscount;
  if (itemSelectedResult) {
    priceBeforeDiscount = (
      ((itemSelectedResult[0].discountPercentage + 100) *
        itemSelectedResult[0].price) /
      100
    ).toFixed(2);
  }
  const [value, setValue] = React.useState(itemSelectedResult[0].rating);

  console.log(itemSelectedResult && itemSelectedResult[0]);

  return (
    <React.Fragment>
      {showCatagoryPage ? (
        <Navigate to="/CatagoryDetail" replace={true} />
      ) : null}

      {itemSelectedResp && (
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
          <div className="detailPage_main_div">
            <div className="detailPage_image_main">
              <img
                src={itemSelectedResult[0].images[0]}
                alt="productImage"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="detailPage_data_main">
              <div className="detailPage_image_data">
                <div className="details_data">
                  <div style={{ fontWeight: "700", fontSize: "1rem" }}>
                    {itemSelectedResult[0].title}
                  </div>
                  <div style={{ fontSize: "small", color: "gray" }}>
                    {itemSelectedResult[0].brand}
                  </div>
                  <div style={{ fontSize: "1rem",textTransform: "capitalize" }}>
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "0.8rem",
                        color:"#878787",
                      }}
                    >
                      Catagory 
                    </span>{" "}
                    {itemSelectedResult[0].category}
                  </div>
                  <div style={{ fontSize: "1rem" }}>
                    {itemSelectedResult[0].description}
                  </div>
                  <div
                    style={{
                      color: "red",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    Hurry Up only {itemSelectedResult[0].stock} left
                  </div>
                  <div
                    style={{
                      color: "green",
                      fontWeight: "700",
                      fontSize: ".8rem",
                    }}
                  >
                    Special price
                  </div>
                  <div style={{ display: "flex", gap: ".5rem" }}>
                    <div style={{ fontWeight: "700", fontSize: ".8rem" }}>
                      Rs {itemSelectedResult[0].price}
                    </div>
                    <div
                      style={{
                        fontWeight: "200",
                        fontSize: "small",
                        color: "gray",
                        textDecoration: "line-through",
                      }}
                    >
                      ({priceBeforeDiscount})
                    </div>
                    <div
                      style={{
                        fontWeight: "100",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      ({itemSelectedResult[0].discountPercentage} % OFF)
                    </div>
                  </div>
                  <div>
                    <Rating name="read-only" value={value} readOnly />
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#878787",
                      fontSize: "0.8rem",
                    }}
                  >
                    {Math.trunc(Math.random() * 500)} Ratings &{" "}
                    {Math.trunc(Math.random() * 50)} Reviews
                  </div>
                  <div className="detail_extra_info">
                    <div>100% Original Products</div>
                    <div>Pay on delivery might be available</div>
                    <div>Easy 14 days returns and exchanges</div>
                  </div>
                  <div className="detailPage_btn_set">
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={navigateToCatagoryPage}
                      >
                        Remove
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={navigateToCatagoryPage}
                      >
                        Save
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={navigateToCatagoryPage}
                      >
                        Buy
                      </Button>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: ".2rem" }}>
                    <div
                      style={{
                        color: "#ff006f",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      Free delivery
                    </div>
                    <div>
                      <CiDeliveryTruck
                        style={{ fontSize: "1rem", color: "#ff006f" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default DetailPage;
