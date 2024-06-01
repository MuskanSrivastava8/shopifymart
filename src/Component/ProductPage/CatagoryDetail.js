import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import "./catagoryDetail.scss";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCatagorySelected } from "../../Store/store";
import { IoIosArrowRoundBack } from "react-icons/io";

const CatagoryDetail = () => {
  const catagorySelectedResp = useSelector(
    (store) => store.STORE.catagorySelected
  );
  const itemData = useSelector((store) => store.STORE.itemData);
  const catagoryFilterItems = itemData.filter((i) => {
    return i.category === catagorySelectedResp;
  });
  const showWishListComponentResp = useSelector(
    (store) => store.STORE.showWishListComponent
  );
  const showHomePageComponentResp = useSelector(
    (store) => store.STORE.showHomePageComponent
  );
  const showCartPageComponentResp = useSelector(
    (store) => store.STORE.showCartPageComponent
  );
  const [showHomePage, setshowHomePage] = useState(false);
  const dispatch = useDispatch();

  const navigateToHomePage = () => {
    setshowHomePage(true);
    dispatch(updateCatagorySelected(""));
  };
  return (
    <React.Fragment>
      {showHomePage ? <Navigate to="/ProductPage" replace={true} /> : null}
      {showWishListComponentResp ? (
        <Navigate to="/WishListPage" replace={true} />
      ) : null}
      {showHomePageComponentResp ? (
        <Navigate to="/ProductPage" replace={true} />
      ) : null}
      {showCartPageComponentResp ? (
        <Navigate to="/CartPage" replace={true} />
      ) : null}
      <div className="main_catagoryDetail">
        <div className="catagoryDetail_btn_div">
          <Button variant="contained" size="small" onClick={navigateToHomePage}>
            <IoIosArrowRoundBack style={{ fontSize: "2rem" }} />
          </Button>
        </div>
        <div className="catagoryDetail_div">
          {catagorySelectedResp &&
            catagoryFilterItems.map((i) => {
              return <ItemCard itemsData={i} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CatagoryDetail;
