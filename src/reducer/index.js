const reducer = (state = 0, action) => {
  switch (action.type) {
    case "CUSTOMER_DETAILS":
      return { ...state, customer_details: action.data };
    case "LOGIN":
      return { ...state, authentication: true };
    case "LOGOUT":
      return { ...state, authentication: false };
    default:
      return state;
  }
};
export default reducer;
