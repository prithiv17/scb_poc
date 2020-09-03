import React, { useEffect, useState } from "react";
import "./App.css";
import CustomerList from "./components/customerList";
import Popup from "reactjs-popup";
import RegisterForm from "./components/registerForm";
import UploadUser from "./components/uploadUser";
import { useSelector, useDispatch } from "react-redux";
import { customerDetails } from "./actions";
import { getCustomerDetails } from "./services";

function App() {
  const [appData, setAppData] = useState({
    form_flag: false,
  });
  const { customer_details } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getCustomerDetails()
      .then((res) => res.json())
      .then((repos) => {
        dispatch(customerDetails(repos));
      });
  }, []);

  const handleFlagChanges = (event) => {
    setAppData((prevState) => ({
      ...prevState,
      form_flag: !prevState.form_flag,
    }));
  };

  return (
    <div className="App">
      <h1>Customer details</h1>
      <div className="register_btn">
        <Popup trigger={<a href="#"> Register </a>} modal>
          {(close) => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Upload customer details </div>
              <div className="content">
                Xls upload
                <input
                  type="checkbox"
                  className="form_flag"
                  name="form_flag"
                  checked={appData.form_flag}
                  onChange={handleFlagChanges}
                />
                {!appData.form_flag ? (
                  <RegisterForm close={close} />
                ) : (
                  <UploadUser close={close} />
                )}
              </div>
              <div className="actions"></div>
            </div>
          )}
        </Popup>
      </div>
      {customer_details.length > 0 ? (
        <CustomerList cust_list={customer_details} />
      ) : (
        <h3>No record</h3>
      )}
    </div>
  );
}

export default App;
