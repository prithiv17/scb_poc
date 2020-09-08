export function customerDetails(data) {
  return {
    type: "CUSTOMER_DETAILS",
    data: data,
  };
}

export function authenticate(data) {
  if (data.type === "LOGIN")
    return {
      type: "LOGIN",
    };
  else
    return {
      type: "LOGOUT",
    };
}
