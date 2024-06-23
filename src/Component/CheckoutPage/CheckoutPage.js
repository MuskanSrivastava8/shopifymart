import React from "react";
import { useSelector } from "react-redux";
import { updateRenderComponent } from "../../Store/store";
import { useDispatch } from "react-redux";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const profileCreatedResp = useSelector((store) => store.STORE.profileCreated);
  const userDetailResp = useSelector((store) => store.STORE.userDetail);
  const dispatch = useDispatch();
  const moveToUserProfilePage = () => {
    dispatch(updateRenderComponent("UserPage"));
  };
  const [checked, setChecked] = React.useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  console.log("checked", checked);
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
              Review the Adrress
            </div>
            <div className="AdressReview">
              <div className="checkOutName">{userDetailResp.firstName} {userDetailResp.lastName}</div>
              <div className="checkOutDetails">{userDetailResp.address}</div>
              <div className="checkOutDetails">{userDetailResp.phoneNumber}</div>
              <div>Pay on delivery Available</div>
              <div>Edit details</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input value="test" type="checkbox" onChange={handleChange} />
              </div>
              <div>
                {checked ? (
                  <div> Address is selected </div>
                ) : (
                  <div>Select an address</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;
