const initialState = false;
const loginDialog = (state = initialState, action) => {
  switch (action.type) {
    case "OPENLOGINDIALOG":
      return true;
    case "CLOSELOGINDIALOG":
      return false;
    default:
      return false;
  }
};

export default loginDialog;
