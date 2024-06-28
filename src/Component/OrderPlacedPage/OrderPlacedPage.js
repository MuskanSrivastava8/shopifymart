import React from "react";
import "./orderPlacedPage.scss";
import { useDispatch } from "react-redux";
import { updateRenderComponent } from "../../Store/store";
import { useSelector } from "react-redux";

const OrderPlacedPage = () => {
  const dispatch = useDispatch();
  const moveToHomePage = () => {
    dispatch(updateRenderComponent("/"));
  };
  const OrderDetailResp = useSelector((store) => store.STORE.OrderDetail);
  return (
    <>
      <div className="main_OrderPlacedPage_div">
        <div style={{ fontSize: "2.5rem", color: "#5fdc0e" }}>
          Congratulation
        </div>
        <div style={{ fontSize: ".8rem", color: "#a29a9a" }}>
          <i>your order has been placed</i>
        </div>
        <div className="div_OrderPlacedPage_heading">Order Detail</div>
        <hr></hr>
        <div className="OrderDetail_main">
          <div>
            <span style={{ color: "gray", fontSize: ".8rem" }}>Name : </span>
            {OrderDetailResp.firstName}
          </div>
          <div>
            <span style={{ color: "gray", fontSize: ".8rem" }}>
              Contact Number :{" "}
            </span>
            {OrderDetailResp.phoneNumber}
          </div>
          <div>
            <span style={{ color: "gray", fontSize: ".8rem" }}>Address : </span>
            {OrderDetailResp.address}
          </div>
          <div>
            <span style={{ color: "gray", fontSize: ".8rem" }}>
              Date of purchase :{" "}
            </span>
            {OrderDetailResp.dateOfOrder}
          </div>
          <div>
            <span style={{ color: "gray", fontSize: ".8rem" }}>
              Date of arrival :{" "}
            </span>
            {OrderDetailResp.dateOfArrival}
          </div>
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
