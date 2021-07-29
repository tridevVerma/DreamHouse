const initialState = { value: "" };

const tag = (state = initialState, action) => {
  switch (action.type) {
    case "FILTERBYTAG": {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export default tag;
