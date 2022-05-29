import axios from "axios";
import URL from "../backendURL";

export const sellerProperties = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/seller", {
      params: {
        name,
      },
    });

    dispatch({ type: "SELLERPROPERTIES", payload: data });
  } catch (error) {
    console.log(error);
  }
};
