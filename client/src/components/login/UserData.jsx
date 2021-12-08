import React, { useState } from "react";
import axios from "axios";
import URL from "../../backendURL";
import { userLogin } from "../../actions/userLogin";
import { useDispatch } from "react-redux";

import {
  Typography,
  InputAdornment,
  TextField,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0rem",
    },
  },
}));

const UserData = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    emailORPhone: "",
    pass: "",
  };
  const [loginData, setLoginData] = useState(initialState);

  const [userError, setuserError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const clearUser = () => setLoginData(initialState);

  const loginUser = async (e) => {
    setuserError("");
    setpasswordError("");
    e.preventDefault();
    try {
      const userResult = await axios.post(URL + "/login", loginData);
      dispatch(userLogin(userResult.data));
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setpasswordError("Wrong Password Entered");
      } else if (error.response && error.response.status === 404) {
        setuserError("User Don't Exist, Create Your New Account");
      } else {
        console.log("Internal Server Error");
      }
    }
    clearUser();
  };
  return (
    <>
      <form onSubmit={(e) => loginUser(e)} className={classes.form}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Enter Email/Mobile number"
          value={loginData.emailORPhone}
          onChange={(e) =>
            setLoginData({ ...loginData, emailORPhone: e.target.value })
          }
        />
        {userError ? (
          <Typography
            variant="subtitle2"
            style={{ fontSize: "0.7rem" }}
            color="secondary"
          >
            {userError}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          required
          fullWidth
          margin="normal"
          type="password"
          label="Enter Password"
          value={loginData.pass}
          onChange={(e) => setLoginData({ ...loginData, pass: e.target.value })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" component={Button}>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  style={{ fontWeight: "bold" }}
                >
                  Forget?
                </Typography>
              </InputAdornment>
            ),
          }}
        />
        {passwordError ? (
          <Typography
            variant="subtitle2"
            style={{ fontSize: "0.7rem" }}
            color="secondary"
          >
            {passwordError}
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
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "2px",
          }}
        >
          Login
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
          }}
        >
          Request OTP
        </Button>
      </form>
      <Typography
        variant="subtitle2"
        onClick={() => props.setUserExist(false)}
        style={{
          fontWeight: "bold",
          cursor: "pointer",
          color: "#2874f0",
          marginTop: "auto",
        }}
      >
        New Here? Create an account
      </Typography>
    </>
  );
};

export default UserData;
