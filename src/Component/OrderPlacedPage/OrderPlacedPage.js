import React from "react";
import "./orderPlacedPage.scss";
import { useDispatch } from "react-redux";
import { updateRenderComponent } from "../../Store/store";

const OrderPlacedPage = () => {
  const dispatch = useDispatch();
  const moveToHomePage = () => {
    dispatch(updateRenderComponent("/"));
  };
  return (
    <>
      <div className="main_OrderPlacedPage_div">
        <div style={{ fontSize: "2.5rem", color: "#5fdc0e" }}>
          Congratulation
        </div>
        <div style={{ fontSize: ".8rem", color: "#a29a9a" }}>
          <i>your order have been placed</i>
        </div>
        <div
              style={{
                fontSize: "0.8rem",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={moveToHomePage}
            >
              <i>Go to Home</i>
            </div>
      </div>
    </>
  );
};

export default OrderPlacedPage;
