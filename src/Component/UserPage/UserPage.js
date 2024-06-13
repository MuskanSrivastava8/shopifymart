import React, { useState } from "react";
import "./UserPage.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UserPage = () => {
  const [showForm, setshowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [landMark, setLandMark] = useState("");
  const [address, setAddress] = useState("");
  const [remark, setRemark] = useState("");
  const addNewUser = () => {
    setshowForm(true);
  };
  console.log("firstName", firstName);
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
        {showForm && (
          <div className="UserPage_Form_div">
            Form
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    label="First Name"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    label="Phone number"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                    label="Pin Code"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    label="Address"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    label="LandMark"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={landMark}
                    onChange={(e) => setLandMark(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    label="State"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <TextField
                    label="Remark"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                  />
                </div>
                <div>
                  <Button variant="contained" size="small" onClick={addNewUser}>
                    Create Profile
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
