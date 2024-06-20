import React from "react";
import "./footer.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateRenderComponent, updateCatagorySelected } from "../../Store/store";

export default function Footer() {
  const dispatch = useDispatch();
  const darkModeRes = true;
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
  const SmartphoneBtnClicked = () => {
    dispatch(updateRenderComponent("CatagoryDetail"));
    dispatch(updateCatagorySelected("smartphones"));
  };
  const LaptopsBtnClicked = () => {
    dispatch(updateRenderComponent("CatagoryDetail"));
    dispatch(updateCatagorySelected("laptops"));
  };
  const FragnanceBtnClicked = () => {
    dispatch(updateRenderComponent("CatagoryDetail"));
    dispatch(updateCatagorySelected("fragrances"));
  };
  const SkincareBtnClicked = () => {
    dispatch(updateRenderComponent("CatagoryDetail"));
    dispatch(updateCatagorySelected("skincare"));
  };
  const GroceryBtnClicked = () => {
    dispatch(updateRenderComponent("CatagoryDetail"));
    dispatch(updateCatagorySelected("groceries"));
  };
  const HomeDecorationBtnClicked = () => {
    dispatch(updateRenderComponent("CatagoryDetail"));
    dispatch(updateCatagorySelected("home-decoration"));
  };
  
  return (
    <React.Fragment>
      <div className="subfooter">
        <div className="footer_catagory">
          <div onClick={SmartphoneBtnClicked} style={{ cursor: "pointer" }}>
            Smartphone
          </div>
          <div onClick={LaptopsBtnClicked} style={{ cursor: "pointer" }}>
            Laptops
          </div>
          <div onClick={FragnanceBtnClicked} style={{ cursor: "pointer" }}>
            Fragnance
          </div>
          <div onClick={SkincareBtnClicked} style={{ cursor: "pointer" }}>
            Skincare
          </div>
          <div onClick={GroceryBtnClicked} style={{ cursor: "pointer" }}>
            Grocery
          </div>
          <div onClick={HomeDecorationBtnClicked} style={{ cursor: "pointer" }}>
            Home Decoration
          </div>
        </div>
        <div className="footer_links">
          <div onClick={wishListBtnClicked} style={{ cursor: "pointer" }}>
            Wishlist
          </div>
          <div onClick={homeBtnClicked} style={{ cursor: "pointer" }}>
            Home
          </div>
          <div onClick={cartBtnClicked} style={{ cursor: "pointer" }}>
            Cart
          </div>
          <div onClick={UserBtnClicked} style={{ cursor: "pointer" }}>
            Profile
          </div>
        </div>
      </div>
      <div className={darkModeRes ? "Intro_footer_dark" : "Intro_footer_light"}>
        <div className="footer_contact">
          <div className="footer_address">
            <div className="footer_menu_item_contact">
              <a
                href="https://www.linkedin.com/in/muskan-srivastava-123b23199"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedinOption
                  style={{ color: "blue", fontSize: "1.5em" }}
                />
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail style={{ color: "red", fontSize: "1.5em" }} />
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a href="tel:8756719954" target="_blank" rel="noreferrer">
                <FiPhoneCall style={{ color: "green", fontSize: "1.5em" }} />
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a
                href="https://github.com/MuskanSrivastava8"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  style={{
                    color: darkModeRes ? "white" : "black",
                    fontSize: "1.5em",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_message">
          © 2024 Company, Inc. All rights reserved.
        </div>
        <div className="footer_messages">
          Made by Muskan with{" "}
          <BsFillSuitHeartFill style={{ color: "red", fontSize: "1.2em" }} />
        </div>
      </div>
    </React.Fragment>
  );
}
