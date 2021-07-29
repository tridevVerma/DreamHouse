const initialState = { data: {} };

const detailedProperty = (state = initialState, action) => {
  switch (action.type) {
    case "PROPERTYDETAILS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default detailedProperty;
