import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Navigate } from "react-router-dom";
import "./detailPage.scss";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { PiKeyReturnThin } from "react-icons/pi";
import ItemCard from "../ProductPage/ItemCard";
import { useDispatch } from "react-redux";
import {
  updateCart,
  updateWishList,
  removeFromCart,
  addToCart,
} from "../../Store/store";
import {
  setShowWishListComponent,
  setShowCartPageComponent,
  updateRenderComponent,
} from "../../Store/store";

const DetailPage = (catagoryName) => {
  const [showCatagoryPage, setshowCatagoryPage] = useState(false);
  const [addtoCart, setaddtoCart] = useState(false);

  const navigateToCatagoryPage = () => {
    dispatch(
      updateRenderComponent(catagorySelectedResp ? "CatagoryDetail" : "/")
    );
    console.log("btn clicked............");
  };
  const productDataResp = useSelector((store) => store.STORE.itemData);
  const itemSelectedResp = useSelector((store) => store.STORE.itemSelected);
  const dispatch = useDispatch();

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

  const catagorySelectedResp = useSelector(
    (store) => store.STORE.catagorySelected
  );
  const itemData = useSelector((store) => store.STORE.itemData);
  const catagoryFilterItems = itemData.filter((i) => {
    return i.category === catagorySelectedResp;
  });
  dispatch(setShowWishListComponent(true));
  dispatch(setShowCartPageComponent(false));

  useEffect(() => {
    document.getElementById("detail_page_Main").scrollIntoView();
  }, [itemSelectedResp]);

  const AddToCartFunction = () => {
    dispatch(addToCart(itemSelectedResult[0].id));
    setaddtoCart(true);
  };
  const RemoveFromCartFunction = () => {
    dispatch(removeFromCart(itemSelectedResult[0].id));
    setaddtoCart(false);
  };
  const AddToWishListFunction = () => {
    dispatch(updateWishList(itemSelectedResult[0].id));
  };
  const MoveToCartPageFunction = () => {
    dispatch(updateCart(itemSelectedResult[0].id));
    dispatch(updateRenderComponent("CartPage"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const moveToTopBtnClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      <div className="detailPage_btn">
        <Button
          variant="contained"
          size="small"
          onClick={navigateToCatagoryPage}
        >
          <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
        </Button>
      </div>
      {itemSelectedResp && (
        <div id="detail_page_Main">
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
                  <div style={{ fontSize: "small" }}>
                    "<i>{itemSelectedResult[0].description}</i>"
                  </div>
                  <div style={{ fontSize: "1rem" }}>
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "0.8rem",
                        color: "#878787",
                      }}
                    >
                      From Seller
                    </span>{" "}
                    {itemSelectedResult[0].brand}
                  </div>

                  <div
                    style={{ fontSize: "1rem", textTransform: "capitalize" }}
                  >
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "0.8rem",
                        color: "#878787",
                      }}
                    >
                      Catagory
                    </span>{" "}
                    {itemSelectedResult[0].category}
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
                    <div className="details_extra_info_div">
                      <CiSquareCheck />
                      100% Original Products
                    </div>
                    <div className="details_extra_info_div">
                      <FaMoneyCheckAlt />
                      Pay on delivery might be available
                    </div>
                    <div className="details_extra_info_div">
                      <PiKeyReturnThin />
                      Easy 14 days returns and exchanges
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: ".2rem" }}>
                    <div>
                      <CiDeliveryTruck
                        style={{ fontSize: "1rem", color: "#ff006f" }}
                      />
                    </div>
                    <div
                      style={{
                        color: "#ff006f",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      Free delivery available
                    </div>
                  </div>
                  <div className="detailPage_btn_set">
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={AddToWishListFunction}
                      >
                        WishList
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={RemoveFromCartFunction}
                        disabled={!addtoCart}
                      >
                        Remove
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={AddToCartFunction}
                        disabled={addtoCart}
                      >
                        Add
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={MoveToCartPageFunction}
                      >
                        Buy now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {catagorySelectedResp && (
        <div className="similar_product_text"> SIMILAR PRODUCTS</div>
      )}
      <div className="catagoryDetail_div">
        {catagorySelectedResp &&
          catagoryFilterItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
      </div>

      <div
        className="moveToTop"
        onClick={moveToTopBtnClicked}
        style={{ cursor: "pointer" }}
      >
        Move to top
      </div>
    </React.Fragment>
  );
};

export default DetailPage;
