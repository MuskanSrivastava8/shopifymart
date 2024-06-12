import React, { useState } from "react";
import "./UserPage.scss";
import Button from "@mui/material/Button";

const UserPage = () => {
  const [showForm, setshowForm] = useState(false);
  const addNewUser = () => {
    setshowForm(true);
  };
  return (
    <div className="UserPage_Main">
      <div className="UserPage_Content_div">
        {!showForm && <div style={{ marginBottom: "1rem" }}>Hey Anonymous</div>}
        {!showForm && (
          <div>
            <Button variant="contained" size="small" onClick={addNewUser}>
              Add New User
            </Button>
          </div>
        )}
        {showForm && <div className="UserPage_Form_div">Form </div>}
      </div>
    </div>
  );
};

export default UserPage;
