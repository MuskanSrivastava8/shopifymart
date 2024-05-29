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
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";

const Menu = () => {
  const dispatch = useDispatch();
  const [showWishListPage, setshowWishListPage] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const navigate = useNavigate();

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
          <NavLink
            to={"/ProductPage"}
            style={({ isActive }) => ({
              color: isActive ? "#1c6cfb" : "Black",
            })}
          >
            IMDb clone
          </NavLink>
          <div>
            <FaUser style={{ fontSize: "1.4rem", cursor: "pointer" }} />
          </div>
          <div onClick={homeBtnClicked}>
            <MdHome style={{ fontSize: "1.8rem", cursor: "pointer" }} />
          </div>
          <div onClick={wishListBtnClicked}>
            <FaHeart
              style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
            />
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
