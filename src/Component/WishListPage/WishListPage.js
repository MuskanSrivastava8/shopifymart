import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ProductPage/ItemCard";
import "./WishListPage.scss";
import { Navigate } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { updateRenderComponent } from "../../Store/store";

function WishListPage() {
  const dispatch = useDispatch();
  const showWishListResp = useSelector((store) => store.STORE.wishlist);
  const itemData = useSelector((store) => store.STORE.itemData);
  let wishListDetails = showWishListResp.map((i) => {
    return itemData.filter((data) => {
      return data.id === i;
    });
  });
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showCartPageComponentResp = useSelector(
    (store) => store.STORE.showCartPageComponent
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const moveToTopBtnClicked = () => {
    window.scrollTo(0, 0);
  };
  const moveToHomePage = () => {
    dispatch(updateRenderComponent("/"));
  };
  return (
    <>
      {showHomePageComponentResp ? (
        <Navigate to="/ProductPage" replace={true} />
      ) : null}
      {showCartPageComponentResp ? (
        <Navigate to="/CartPage" replace={true} />
      ) : null}
      <div className="Wishlist_main_div">
        {wishListDetails.length > 0 ? (
          wishListDetails.map((i) => {
            return i.map((item) => {
              return <ItemCard itemsData={item} />;
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
                <i>Oops wishlist is empty. Go and explore .....</i>
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        className="moveToTop"
        onClick={moveToTopBtnClicked}
        style={{ cursor: "pointer" }}
      >
        Move to top
      </div>
    </>
  );
}

export default WishListPage;
