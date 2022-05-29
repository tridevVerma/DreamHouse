import axios from "axios";
import URL from "../backendURL";

export const removeProperty = (id) => async (dispatch) => {
  try {
    await axios.delete(URL + "/seller", {
      params: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
