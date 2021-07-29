const initialState = { data: [] };

const allNews = (state = initialState, action) => {
  switch (action.type) {
    case "LOADALLNEWS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default allNews;
