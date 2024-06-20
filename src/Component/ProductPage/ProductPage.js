import React, { useEffect, useState } from "react";
import OrderData from "../../Data Response/OrderData";
import CatagoryList from "./CatagoryList";
import "./productPage.scss";
import Slider from "./Slider";
import { updateItemDataAction } from "../../Store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const ProductPage = () => {
  const OrderDataRes = OrderData;
  const dispatch = useDispatch();
  const itemData = useSelector((store) => store.STORE.itemData);
  const userDetailResp = useSelector((store) => store.STORE.userDetail);

  const homeDecorationItems = itemData.filter((i) => {
    return i.category === "home-decoration";
  });
  const smartphonesItems = itemData.filter((i) => {
    return i.category === "smartphones";
  });
  const groceriesItems = itemData.filter((i) => {
    return i.category === "groceries";
  });
  const skincareItems = itemData.filter((i) => {
    return i.category === "skincare";
  });
  const fragrancesItems = itemData.filter((i) => {
    return i.category === "fragrances";
  });
  const laptopsItems = itemData.filter((i) => {
    return i.category === "laptops";
  });

  useEffect(() => {
    dispatch(updateItemDataAction(OrderDataRes));
  }, [OrderDataRes, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moveToTopBtnClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div>
        <div>{<Slider />}</div>
        <div className="Main_headings">
          {userDetailResp ? "Hey" : ""}{" "}
          {userDetailResp ? userDetailResp.firstName : ""} , Shop By Catagory >{" "}
        </div>
        <div>{<CatagoryList />}</div>
        <div className="Main_headings">Smartphones</div>
        <div className="HomePagecatagoryDetail_div">
          {smartphonesItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
        </div>
        <div className="Main_headings">Home Decoration</div>
        <div className="HomePagecatagoryDetail_div">
          {homeDecorationItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
        </div>
        <div className="Main_headings">Groceries</div>
        <div className="HomePagecatagoryDetail_div">
          {groceriesItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
        </div>
        <div className="Main_headings">Skincare</div>
        <div className="HomePagecatagoryDetail_div">
          {skincareItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
        </div>
        <div className="Main_headings">Fragrances</div>
        <div className="HomePagecatagoryDetail_div">
          {fragrancesItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
        </div>
        <div className="Main_headings">laptops</div>
        <div className="HomePagecatagoryDetail_div">
          {laptopsItems.map((i) => {
            return <ItemCard itemsData={i} />;
          })}
        </div>
        <div className="moveToTop"  onClick={moveToTopBtnClicked} style={{ cursor: "pointer" }}> Move to top </div>
      </div>
    </>
  );
};

export default ProductPage;
