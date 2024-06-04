import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./itemCard.scss";
import Rating from "@mui/material/Rating";
import { Navigate } from "react-router-dom";
import {
  updateItemSelected,
  updateWishList,
  updateCart,
} from "../../Store/store";
import { useDispatch, useSelector } from "react-redux";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";

function ItemCard(itemsData) {
  const itemsDataRes = itemsData.itemsData;
  const priceBeforeDiscount = (
    ((itemsDataRes.discountPercentage + 100) * itemsDataRes.price) /
    100
  ).toFixed(2);
  const [value, setValue] = React.useState(itemsDataRes.rating);
  const [showDetailPage, setshowDetailPage] = useState(false);
  const [wishlistBtnOnlyClicked, setWishlistBtnOnlyClicked] = useState(false);
  const [cartBtnOnlyClicked, setCartBtnOnlyClicked] = useState(false);
  const dispatch = useDispatch();
  const navigateToDetailPage = () => {
    dispatch(updateItemSelected(itemsDataRes.id));
    setshowDetailPage(true);
  };
  const addToWishList = () => {
    dispatch(updateWishList(itemsDataRes.id));
    setWishlistBtnOnlyClicked(true);
  };
  const showWishListResp = useSelector((store) => store.STORE.wishlist);
  const cartResp = useSelector((store) => store.STORE.cart);
  const wishlistBtnClicked = showWishListResp.includes(itemsDataRes.id);
  const cartBtnClicked = cartResp.includes(itemsDataRes.id);
  const AddToCartFunction = () => {
    console.log("itemSelectedResult", itemsDataRes.id);
    dispatch(updateCart(itemsDataRes.id));
    setCartBtnOnlyClicked(true);
  };
  return (
    <React.Fragment>
      {showDetailPage && !wishlistBtnOnlyClicked && !cartBtnOnlyClicked ? (
        <Navigate to="/DetailPage" replace={true} />
      ) : null}

      <div className="main_ItemCard" onClick={navigateToDetailPage}>
        <div>
          <img
            src={itemsDataRes.images[0]}
            alt="productImage"
            style={{ height: "10rem", width: "16rem" }}
          />
        </div>
        <div>
          <div className="ItemCard_info">
            <div className="ItemCard_info_data">
              <div style={{ fontWeight: "700", fontSize: "1rem" }}>
                {itemsDataRes.title}
              </div>
              <div style={{ fontSize: "small", color: "gray" }}>
                {itemsDataRes.brand}
              </div>
              <div style={{ display: "flex", gap: ".5rem" }}>
                <div style={{ fontWeight: "700", fontSize: ".8rem" }}>
                  Rs {itemsDataRes.price}
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
                  style={{ fontWeight: "100", fontSize: ".7rem", color: "red" }}
                >
                  ({itemsDataRes.discountPercentage} % OFF)
                </div>
              </div>
              <div>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </div>
            <div className="ItemCard_info_wishlist" onClick={addToWishList}>
              <div>
                {!wishlistBtnClicked ? (
                  <FaHeart
                    style={{
                      color: "red",
                      fontSize: "1.5rem",
                    }}
                  />
                ) : (
                  <IoHeartDislikeOutline
                    style={{
                      color: "red",
                      fontSize: "1.5rem",
                    }}
                  />
                )}
              </div>
            </div>
            <div onClick={AddToCartFunction}>
              {" "}
              {!cartBtnClicked ? (
                <MdShoppingCart
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <MdRemoveShoppingCart
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ItemCard;
