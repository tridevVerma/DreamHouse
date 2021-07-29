import axios from "axios";
import URL from "../backendURL";

export const getAllProperties = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/projects");
    dispatch({ type: "LOADALLPROPERTIES", payload: data });
  } catch (error) {
    console.log(error);
  }
};
