import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./CartPage.scss";
import CartAddeditem from "./CartAddeditem";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { updateRenderComponent, createOrder } from "../../Store/store";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

function CartPage() {
  const dispatch = useDispatch();
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const CartResp = useSelector((store) => store.STORE.cart);
  const itemData = useSelector((store) => store.STORE.itemData);
  const userDetailData = useSelector((store) => store.STORE.userDetail);

  let CartDetails = CartResp.map((i) => {
    return itemData.filter((data) => {
      return data.id === i;
    });
  });
  let priceSum = 0;
  CartDetails.map((itemList) => {
    return itemList.map((individualItem) => {
      return (priceSum += individualItem.price);
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moveToTopBtnClicked = () => {
    window.scrollTo(0, 0);
  };
  const moveToHomePage = () => {
    dispatch(updateRenderComponent("/"));
  };
  const moveToCheckoutPage = () => {
    dispatch(updateRenderComponent("CheckoutPage"));
    const id = uuidv4();
    const dateOfOrder = new Date().toISOString().slice(0, 10);
    const numberOfDaysToAdd = Math.floor(Math.random() * 10);
    let dateOfArrival = new Date(Date.now() + numberOfDaysToAdd * 86400000).toISOString().slice(0, 10);
    const orderDetail = {
      orderId: id,
      items: CartResp,
      address: userDetailData.address,
      firstName: userDetailData.firstName,
      phoneNumber: userDetailData.phoneNumber,
      dateOfOrder:dateOfOrder,
      dateOfArrival:dateOfArrival
    };
    dispatch(createOrder(orderDetail));
  };
  return (
    <>
      {showHomePageComponentResp ? (
        <Navigate to="/ProductPage" replace={true} />
      ) : null}
      {showWishListComponentResp ? (
        <Navigate to="/WishListPage" replace={true} />
      ) : null}
      <div className="cart_main_div">
        {CartDetails.length > 0 ? (
          CartDetails.map((i) => {
            return i.map((item) => {
              return <CartAddeditem itemsData={item} />;
            });
          })
        ) : (
          <div className="No_Item_Found_main">
            <GiShoppingCart style={{ fontSize: "10rem" }} />
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
            <div className="No_Item_Found_text">
              <span style={{ fontSize: "0.8rem", color: "rgb(135, 135, 135)" }}>
                <i>Oops cart is empty. Go and explore .....</i>
              </span>
            </div>
          </div>
        )}
        <div className="cart_price_div">
          <div>
            <span style={{ color: "gray", fontWeight: "400" }}>
              Subtotal ({CartDetails.length} items) :{" "}
            </span>
            <span> Rs {priceSum}</span>
          </div>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          {CartDetails.length > 0 ? (
            <div>
              <Button
                variant="contained"
                size="small"
                onClick={moveToCheckoutPage}
              >
                Place Order
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div
          className="moveToTop"
          onClick={moveToTopBtnClicked}
          style={{ cursor: "pointer" }}
        >
          Move to top
        </div>
      </div>
    </>
  );
}

export default CartPage;
