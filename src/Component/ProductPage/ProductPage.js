import React, { useEffect, useState } from "react";
import OrderData from "../../Data Response/OrderData";
import CatagoryList from "./CatagoryList";
import "./productPage.scss";
import Slider from "./Slider";
import { updateItemDataAction } from "../../Store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const OrderDataRes = OrderData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showCartPageComponentResp = useSelector(
    (store) => store.STORE.showCartPageComponent
  );
  const renderedComponentResp = useSelector(
    (store) => store.STORE.renderedComponent
  );
  useEffect(() => {
    dispatch(updateItemDataAction(OrderDataRes));
    // navigate(renderedComponentResp);
  }, [OrderDataRes]);
  // useEffect(() => {
  //   navigate(renderedComponentResp);
  // }, [renderedComponentResp]);
  const userDetailResp = useSelector((store) => store.STORE.userDetail);

  return (
    <>
      {/* {showWishListComponentResp ? <Navigate to="/WishListPage" replace={true} /> : null}
          {showHomePageComponentResp ? <Navigate to="/ProductPage" replace={true} /> : null}
          {showCartPageComponentResp ? <Navigate to="/CartPage" replace={true} /> : null} */}

      <div>
        <div>{<Slider />}</div>
        <div className="Main_headings">{userDetailResp ? "Hey" : "" } {userDetailResp ? userDetailResp.firstName : "" } , Shop By Catagory >  </div>
        <div>{<CatagoryList />}</div>
      </div>
    </>
  );
};

export default ProductPage;
