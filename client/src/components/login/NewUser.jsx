import React, { useState } from "react";
import axios from "axios";
import URL from "../../backendURL";
import {
  TextField,
  Button,
  Typography,
  Box,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";

const NewUser = (props) => {
  const [User, setUser] = useState({
    name: "",
    email: "",
    mobileno: "",
    PWD: "",
    confirmPWD: "",
    signupAs: "user",
    officePhno: "",
    officeAddress: "",
    title: "",
    image: "",
  });
  const [UserExistError, setUserExistError] = useState("");
  const [PasswordMatchError, setPasswordMatchError] = useState("");

  const createNewUser = async (e) => {
    e.preventDefault();
    setUserExistError("");
    setPasswordMatchError("");
    if (User.PWD === User.confirmPWD) {
      const { confirmPWD, ...userData } = User;
      try {
        console.log("userDATA");
        console.log(userData);
        await axios.post(URL + "/newUser", userData);
        props.setUserExist(true);
        alert("New User Created");
      } catch (error) {
        if (error.response.status === 401) {
          setUserExistError("User Already Exists");
        } else {
          setUserExistError(error.response.data);
        }
      }
    } else {
      setPasswordMatchError("Password and Confirm Password should match");
    }
  };

  return (
    <>
      <form onSubmit={(e) => createNewUser(e)}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Your Name"
          value={User.name}
          onChange={(e) => setUser({ ...User, name: e.target.value })}
        />
        {UserExistError ? (
          <Typography
            variant="subtitle2"
            style={{ fontSize: "0.7rem" }}
            color="secondary"
          >
            {UserExistError}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          required
          fullWidth
          margin="normal"
          type="email"
          label="Enter Your Email"
          value={User.email}
          onChange={(e) => setUser({ ...User, email: e.target.value })}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Mobile number"
          type="number"
          value={User.mobileno}
          onChange={(e) => setUser({ ...User, mobileno: e.target.value })}
        />
        <FormControl margin="normal">
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={User.signupAs}
            onChange={(e) => setUser({ ...User, signupAs: e.target.value })}
          >
            <FormControlLabel
              value="user"
              control={<Radio />}
              label="user/buyer"
            />
            <FormControlLabel
              value="seller"
              control={<Radio />}
              label="seller"
            />
          </RadioGroup>
        </FormControl>
        {User.signupAs === "seller" ? (
          <>
            <TextField
              required
              fullWidth
              margin="normal"
              label="Office Phone no"
              type="number"
              value={User.officePhno}
              onChange={(e) => setUser({ ...User, officePhno: e.target.value })}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Office Address"
              value={User.officeAddress}
              onChange={(e) =>
                setUser({ ...User, officeAddress: e.target.value })
              }
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Title"
              value={User.title}
              onChange={(e) => setUser({ ...User, title: e.target.value })}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Image"
              value={User.image}
              onChange={(e) => setUser({ ...User, image: e.target.value })}
            />
          </>
        ) : (
          ""
        )}

        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Password"
          type="password"
          value={User.PWD}
          onChange={(e) => setUser({ ...User, PWD: e.target.value })}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Confirm Password"
          type="password"
          value={User.confirmPWD}
          onChange={(e) => setUser({ ...User, confirmPWD: e.target.value })}
        />

        {PasswordMatchError ? (
          <Typography
            variant="subtitle2"
            style={{ fontSize: "0.7rem" }}
            color="secondary"
          >
            {PasswordMatchError}
          </Typography>
        ) : (
          ""
        )}
        <Typography
          variant="caption"
          component={Box}
          style={{
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            color: "#878787",
          }}
        >
          By continuing, you agree to our{" "}
          <span style={{ color: "#2874f0" }}> Terms of Use </span>and
          <span style={{ color: "#2874f0" }}> Privacy Policy.</span>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "2px",
          }}
          type="submit"
        >
          Continue
        </Button>
        <Typography
          variant="subtitle2"
          style={{
            color: "#878787",
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          OR
        </Typography>
        <Button
          variant="contained"
          fullWidth
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "2px",
            backgroundColor: "white",
            color: "#2874f0",
            marginTop: "auto",
          }}
          onClick={() => props.setUserExist(true)}
        >
          Existing User? Log in
        </Button>
      </form>
    </>
  );
};

export default NewUser;
