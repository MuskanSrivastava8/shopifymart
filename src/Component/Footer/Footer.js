import React from "react";
import "./footer.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  const darkModeRes = true;

  return (
    <React.Fragment>
    <div className="moveToTop"> Home </div>
      <div className="subfooter">
        <div className="footer_catagory">
          <div>Smartphone</div>
          <div>Laptops</div>
          <div>Fragnance</div>
          <div>Skincare</div>
          <div>Grocery</div>
          <div>Home Decoration</div>
        </div>
        <div className="footer_links">
          <div>Wishlist</div>
          <div>Help</div>
          <div>Cart</div>
          <div>Profile</div>
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
