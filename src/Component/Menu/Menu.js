import React, { useState } from "react";
import "./menu.scss";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setShowWishListComponent } from "../../Store/store";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Menu = () => {
  const dispatch = useDispatch();
  const [showWishListPage, setshowWishListPage] = useState(false);
  const navigate = useNavigate();

  const wishListBtnClicked = () => {
    dispatch(setShowWishListComponent(showWishListPage));
    setshowWishListPage(!showWishListPage)
    if(showWishListPage){
      navigate("/ProductPage");
    }
  };
  return (
    <>{showWishListPage ? (
      <Navigate to="/WishListPage" replace={true} />
    ) : null}
    <div className="main">
      <div className="main_left">
        <div
          style={{ marginLeft: "1rem", fontSize: "1.2rem", fontWeight: "500" }}
        >
          ShopifyMart
        </div>
      </div>
      <div className="main_right">
        <div>
          <FaUser style={{ fontSize: "1.5rem", cursor: "pointer" }} />
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
