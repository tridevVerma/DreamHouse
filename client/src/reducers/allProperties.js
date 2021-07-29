const initialState = { data: [] };

const allProperties = (state = initialState, action) => {
  switch (action.type) {
    case "LOADALLPROPERTIES":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default allProperties;
