import React, { useState } from "react";
import "./menu.scss";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  setShowWishListComponent,
  setShowHomePageComponent,
} from "../../Store/store";
import { MdHome } from "react-icons/md";
import { useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const [showWishListPage, setshowWishListPage] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const wishlistResp = useSelector((store) => store.STORE.wishlist);
  const wishlistRespLength = wishlistResp.length;
  const wishListBtnClicked = () => {
    dispatch(setShowWishListComponent(showWishListPage));
    setshowWishListPage(!showWishListPage);
    dispatch(setShowHomePageComponent(showWishListPage));
    setShowHomePage(false);
  };
  const homeBtnClicked = () => {
    setShowHomePage(true);
    dispatch(setShowHomePageComponent(true));
    setshowWishListPage(false);
    dispatch(setShowWishListComponent(true));
  };
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
          <div>
            <FaUser style={{ fontSize: "1.4rem", cursor: "pointer" }} />
          </div>
          <div onClick={homeBtnClicked}>
            <MdHome style={{ fontSize: "1.8rem", cursor: "pointer" }} />
          </div>
          <div className="wishListIcon_main" onClick={wishListBtnClicked}>
            <FaHeart
              style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
            />
            <div className="wishListIcon_count">
              <strong>{wishlistRespLength}</strong>
            </div>{" "}
          </div>
          <div>
            <IoCart style={{ fontSize: "1.5rem", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
