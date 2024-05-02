import React from "react";
import OrderData from "../../Data Response/OrderData";
import CatagoryList from "./CatagoryList";
import "./productPage.scss"
import Slider from "./Slider";

const ProductPage = () => {
  const OrderDataRes = OrderData;

  return (
    <>
      <div className="Main_headings">Shop By Catagory > </div>
      <div>
        <CatagoryList />
      </div>
      <div>
        <Slider/>
      </div>
      <div>
        {OrderDataRes.map((i) => {
          return <li>{i.category}</li>;
        })}
        {OrderDataRes.map((i) => {
          return <li>{i.category}</li>;
        })}
      </div>
    </>
  );
};

export default ProductPage;
