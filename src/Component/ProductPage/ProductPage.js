import React, { useEffect, useState } from "react";
import OrderData from "../../Data Response/OrderData";
import CatagoryList from "./CatagoryList";
import "./productPage.scss";
import Slider from "./Slider";
import { updateItemDataAction } from "../../Store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import WishListPage from "../WishListPage/WishListPage";
import { Navigate } from "react-router-dom";

const ProductPage = () => {
  const OrderDataRes = OrderData;
  const dispatch = useDispatch();
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );

  useEffect(() => {
    dispatch(updateItemDataAction(OrderDataRes));
  }, [OrderDataRes]);

  return (
    <>
          {showWishListComponentResp ? <Navigate to="/WishListPage" replace={true} /> : null}
          {showHomePageComponentResp ? <Navigate to="/ProductPage" replace={true} /> : null}

      <div>
        <div>{<Slider />}</div>
        <div className="Main_headings">Shop By Catagory > </div>
        <div>{<CatagoryList />}</div>
      </div>
    </>
  );
};

export default ProductPage;
