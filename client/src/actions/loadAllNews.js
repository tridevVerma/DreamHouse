import axios from "axios";
import URL from "../backendURL";

export const getAllNews = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/news");
    dispatch({ type: "LOADALLNEWS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
