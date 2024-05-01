import React from "react";
import "./menu.scss";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const Menu = () => {
  return (
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
          <FaUser style={{ fontSize: "1.5rem" }} />
        </div>
        <div>
          <FaHeart style={{ color: "red", fontSize: "1.5rem" }} />
        </div>
        <div>
          <IoCart style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
