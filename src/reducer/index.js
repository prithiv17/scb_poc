const reducer = (state = 0, action) => {
  switch (action.type) {
    case "CUSTOMER_DETAILS":
      return { ...state, customer_details: action.data };
    default:
      return state;
  }
};
export default reducer;
