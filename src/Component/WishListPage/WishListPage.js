import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ProductPage/ItemCard";
import "./WishListPage.scss";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setShowWishListComponent } from "../../Store/store";
import { useNavigate } from "react-router-dom";


function WishListPage() {
  const showWishListResp = useSelector((store) => store.STORE.wishlist);
  const itemData = useSelector((store) => store.STORE.itemData);
  const showWishListComponentResp = useSelector((store) => store.STORE.showWishListComponent);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let wishListDetails = showWishListResp.map((i) => {
    return itemData.filter((data) => {
      return data.id === i;
    });
  });
  const [showHomePage, setshowHomePage] = useState(false);
  const navigatetoHomePage = () => {
    dispatch(setShowWishListComponent(true));   
    // setshowHomePage(true);
    // if(setshowHomePage){
    //   navigate("/ProductPage");
    // }
    navigate("/ProductPage");
  };

  return (
    <>
      {/* {!showWishListComponentResp ? <Navigate to="/ProductPage" replace={true} /> : null} */}
      <div className="wishList_btn_div">
          <Button variant="contained" size="small" onClick={navigatetoHomePage}>
            <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          </Button>
        </div>
      <div className="Wishlist_main_div">
        
        {wishListDetails &&
          wishListDetails.map((i) => {
            return i.map((item) => {
              return <ItemCard itemsData={item} />;
            });
          })}
      </div>
    </>
  );
}

export default WishListPage;
