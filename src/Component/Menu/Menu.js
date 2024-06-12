import React, { useState } from "react";
import "./menu.scss";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  setShowWishListComponent,
  setShowHomePageComponent,
  setShowCartPageComponent,
  updateRenderComponent,
} from "../../Store/store";
import { MdHome } from "react-icons/md";
import { useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const showWishListComponentRes = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const showHomePageComponentRes = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showCartPageComponentRes = useSelector(
    (store) => store.STORE.showCartPageComponent
  );

  const [showWishListPage, setshowWishListPage] = useState(
    showWishListComponentRes
  );
  const [showHomePage, setShowHomePage] = useState(showHomePageComponentRes);
  const [showCartPage, setShowCartPage] = useState(showCartPageComponentRes);

  const wishlistResp = useSelector((store) => store.STORE.wishlist);
  const wishlistRespLength = wishlistResp.length;
  const cartResp = useSelector((store) => store.STORE.cart);
  const cartRespLength = cartResp.length;
  const wishListBtnClicked = () => {
    // if (showCartPageComponentRes) {
    //   dispatch(setShowWishListComponent(false));
    //   dispatch(setShowCartPageComponent(false));
    //   dispatch(setShowHomePageComponent(false));
    // } else {
    //   dispatch(setShowWishListComponent(showWishListPage));
    //   setshowWishListPage(!showWishListPage);
    //   dispatch(setShowHomePageComponent(showWishListPage));
    //   setShowHomePage(false);
    // }
    
    dispatch(updateRenderComponent('WishListPage'));
  };
  const cartBtnClicked = () => {
    // if (showWishListPage) {
    //   dispatch(setShowWishListComponent(showWishListPage));
    //   dispatch(setShowCartPageComponent(true));
    //   dispatch(setShowHomePageComponent(false));
    // } else {
    //   setShowCartPage(!showCartPage);
    //   dispatch(setShowCartPageComponent(showCartPage));
    //   setShowHomePage(showCartPage);
    //   dispatch(setShowHomePageComponent(showHomePage));
    // }
    dispatch(updateRenderComponent('CartPage'));
  };
  const UserBtnClicked = ()=> {
    dispatch(updateRenderComponent('UserPage'));
  }
  const homeBtnClicked = () => {
    // setShowHomePage(true);
    // dispatch(setShowHomePageComponent(true));
    // setshowWishListPage(false);
    // dispatch(setShowWishListComponent(true));
    // dispatch(setShowCartPageComponent(false));
    // setShowCartPage(false);
    dispatch(updateRenderComponent('/'));
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
          <div onClick={UserBtnClicked}>
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
          <div className="cart_main" onClick={cartBtnClicked}>
            <div>
              <IoCart style={{ fontSize: "1.5rem", cursor: "pointer" }} />
            </div>
            <div className="cart_count">
              <strong>{cartRespLength}</strong>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
