const initialState = { data: [] };

const sellerProperties = (state = initialState, action) => {
  switch (action.type) {
    case "SELLERPROPERTIES": {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

export default sellerProperties;
