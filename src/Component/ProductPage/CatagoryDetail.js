import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import "./catagoryDetail.scss";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updateRenderComponent } from "../../Store/store";
import { IoIosArrowRoundBack } from "react-icons/io";

const CatagoryDetail = () => {
  const catagorySelectedResp = useSelector(
    (store) => store.STORE.catagorySelected
  );
  const itemData = useSelector((store) => store.STORE.itemData);
  const catagoryFilterItems = itemData.filter((i) => {
    return i.category === catagorySelectedResp;
  });
  const dispatch = useDispatch();
  const navigateToHomePage = () => {
    dispatch(updateRenderComponent("/"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const moveToTopBtnClicked = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
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
        <div
          className="moveToTop"
          onClick={moveToTopBtnClicked}
          style={{ cursor: "pointer" }}
        >
          Move to top
        </div>
      </div>
    </React.Fragment>
  );
};

export default CatagoryDetail;
