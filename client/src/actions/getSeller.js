import axios from "axios";
import URL from "../backendURL";

export const getSeller = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/sellerData", {
      params: {
        name,
      },
    });

    dispatch({ type: "GETSELLER", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
