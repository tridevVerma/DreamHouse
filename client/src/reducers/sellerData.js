const initialState = { data: {} };

const sellerData = (state = initialState, action) => {
  switch (action.type) {
    case "GETSELLER":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default sellerData;
