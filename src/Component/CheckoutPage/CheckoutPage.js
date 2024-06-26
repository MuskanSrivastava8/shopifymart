import React from "react";
import { useSelector } from "react-redux";
import { updateRenderComponent } from "../../Store/store";
import { useDispatch } from "react-redux";
import "./CheckoutPage.scss";
import Button from "@mui/material/Button";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";

const CheckoutPage = () => {
  const profileCreatedResp = useSelector((store) => store.STORE.profileCreated);
  const userDetailResp = useSelector((store) => store.STORE.userDetail);
  const dispatch = useDispatch();
  const moveToUserProfilePage = () => {
    dispatch(updateRenderComponent("UserPage"));
  };
  const moveToOrderPlacedPagePage = () => {
    dispatch(updateRenderComponent("OrderPlacedPage"));
  };
  const [checked, setChecked] = React.useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  return (
    <>
      <div className="main_checkoutPage_div">
        {profileCreatedResp === false ? (
          <div>
            <div>Please create profile and add Adrress to continue</div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={moveToUserProfilePage}
            >
              <i>Go to UserProfile</i>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
              Review the Address
            </div>
            <div className="AdressReview">
              <div className="checkOutName">
                {userDetailResp.firstName} {userDetailResp.lastName}
              </div>
              <div className="checkOutDetails">{userDetailResp.address}</div>
              <div className="checkOutDetails">
                {userDetailResp.phoneNumber}
              </div>
              <div style={{ display: "flex", gap: ".2rem" }}>
                <div>
                  <CiDeliveryTruck
                    style={{ fontSize: "1rem", color: "#ff006f" }}
                  />
                </div>
                <div
                  style={{
                    color: "#ff006f",
                    fontWeight: "700",
                    fontSize: "0.8rem",
                  }}
                >
                  Free delivery available
                </div>
              </div>
              <div style={{ display: "flex", gap: ".2rem" }}>
                <div>
                  <GiMoneyStack
                    style={{ fontSize: "1rem", color: "#ff006f" }}
                  />
                </div>
                <div
                  style={{
                    color: "#ff006f",
                    fontWeight: "700",
                    fontSize: "0.8rem",
                  }}
                >
                  Pay on delivery available
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  size="small"
                  onClick={moveToUserProfilePage}
                  disabled={checked}
                >
                  Edit details
                </Button>
              </div>
                          <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input value="test" type="checkbox" onChange={handleChange} />
              </div>
              <div style={{ fontSize: "1rem", fontWeight: "100" }}>
                <i>{checked ? (
                  <div > Order will be delivered at selected address</div>
                ) : (
                  <div>Select an address</div>
                )}</i>
              </div>
            </div>
            </div>
            <div>
              <Button
                variant="contained"
                size="small"
                disabled={!checked}
                onClick={moveToOrderPlacedPagePage}
              >
                Place Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;
