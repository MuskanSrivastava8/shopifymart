import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ProductPage/ItemCard";
import { Navigate } from "react-router-dom";
import "./CartPage.scss";
import CartAddeditem from "./CartAddeditem";
function CartPage() {
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const CartResp = useSelector((store) => store.STORE.cart);
  const itemData = useSelector((store) => store.STORE.itemData);

  let CartDetails = CartResp.map((i) => {
    return itemData.filter((data) => {
      return data.id === i;
    });
  });
  let priceSum = 0;
  CartDetails.map((itemList) => {
    itemList.map((individualItem) => {
      priceSum += individualItem.price;
    });
  });
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
      </div>
    </>
  );
}

export default CartPage;
