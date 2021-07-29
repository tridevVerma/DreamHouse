import axios from "axios";
import URL from "../backendURL";

export const propertyDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/details", {
      params: {
        id,
      },
    });
    dispatch({ type: "PROPERTYDETAILS", payload: data[0] });
  } catch (error) {
    console.log(error);
  }
};
