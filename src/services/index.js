const apiUrl = `http://127.0.0.1:8000/`;

export const getCustomerDetails = () => {
  return fetch(apiUrl + "customerdetails/");
};

export const addCustomerDetails = (data) => {
  return fetch(apiUrl + "customerdetails/", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
