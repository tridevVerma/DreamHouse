import axios from "axios";
import URL from "../backendURL";

export const filterByProperties = (filters) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/projects/filters`, {
      params: {
        filtersQuery: filters,
      },
    });

    dispatch({ type: "FILTERBYPROPERTIES", payload: data });
  } catch (error) {
    console.log(error);
  }
};
