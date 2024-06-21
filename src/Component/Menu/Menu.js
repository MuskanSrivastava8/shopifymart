import React, { useState } from "react";
import "./menu.scss";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateRenderComponent } from "../../Store/store";
import { MdHome } from "react-icons/md";
import { useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const wishlistResp = useSelector((store) => store.STORE.wishlist);
  const wishlistRespLength = wishlistResp.length;
  const cartResp = useSelector((store) => store.STORE.cart);
  const cartRespLength = cartResp.length;
  const wishListBtnClicked = () => {
    dispatch(updateRenderComponent("WishListPage"));
  };
  const cartBtnClicked = () => {
    dispatch(updateRenderComponent("CartPage"));
  };
  const UserBtnClicked = () => {
    dispatch(updateRenderComponent("UserPage"));
  };
  const homeBtnClicked = () => {
    dispatch(updateRenderComponent("/"));
  };
  const userDetailResp = useSelector((store) => store.STORE.userDetail);
  const profileCreatedResp = useSelector((store) => store.STORE.profileCreated);

  let firstNameRes;
  if (profileCreatedResp == true && userDetailResp !== undefined) {
    firstNameRes = userDetailResp.firstName;
  }
  return (
    <>
      <div className="main">
        <div className="main_left">
          <div
            style={{
              marginLeft: "1rem",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            ShopifyMart
          </div>
        </div>
        <div className="main_right">
          <div className="main_right_icons">
            <div onClick={homeBtnClicked}>
              <MdHome style={{ fontSize: "1.8rem", cursor: "pointer" }} />
            </div>
            <div onClick={UserBtnClicked}>
              <FaUser style={{ fontSize: "1.4rem", cursor: "pointer" }} />
            </div>
            <div className="wishListIcon_main" onClick={wishListBtnClicked}>
              <FaHeart
                style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
              />
              <div className="wishListIcon_count">
                <strong>{wishlistRespLength}</strong>
              </div>{" "}
            </div>
            <div className="cart_main" onClick={cartBtnClicked}>
              <div>
                <IoCart style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              </div>
              <div className="cart_count">
                <strong>{cartRespLength}</strong>
              </div>{" "}
            </div>
          </div>
          <div className="main_right_UserName">
            Hey {profileCreatedResp ? firstNameRes : "Anonymous"} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
