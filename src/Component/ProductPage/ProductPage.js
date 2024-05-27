import React, { useEffect, useState } from "react";
import OrderData from "../../Data Response/OrderData";
import CatagoryList from "./CatagoryList";
import "./productPage.scss";
import Slider from "./Slider";
import { updateItemDataAction } from "../../Store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import WishListPage from "../WishListPage/WishListPage";

const ProductPage = () => {
  const OrderDataRes = OrderData;
  const dispatch = useDispatch();
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );

  useEffect(() => {
    dispatch(updateItemDataAction(OrderDataRes));
  }, [OrderDataRes]);

  return (
    <>
      {showWishListComponentResp ? (
        <WishListPage />
      ) : (
        <div>
          <div>{<Slider />}</div>
          <div className="Main_headings">Shop By Catagory > </div>
          <div>{<CatagoryList />}</div>

          <div>
            {OrderDataRes.map((i) => {
              return <li>{i.category}</li>;
            })}
            {OrderDataRes.map((i) => {
              return <li>{i.category}</li>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
