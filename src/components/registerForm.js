import React, { useEffect, useState } from "react";

import { accountType } from "../data";
import { addCustomerDetails, getCustomerDetails } from "../services";
import { customerDetails } from "../actions";

import { useDispatch } from "react-redux";

const RegisterForm = (props) => {
  let { close } = props;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    register_as: "",
    first_name: "",
    last_name: "",
    mail_id: "",
    contact_number: "",
    country: "",
    state: "",
    city: "",
    street: "",
    gender: "",
    marital_status: "",
    date_of_birth: null,
    id_proof_type: "",
    id_proof_detail: "",
  });
  const handleChanges = (event) => {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = () => {
    addCustomerDetails(formData).then((response) => {
      //do something awesome that makes the world a better place
      if (response.status === 201) {
        getCustomerDetails()
          .then((res) => res.json())
          .then((repos) => {
            dispatch(customerDetails(repos));
          });
      }
    });
    close();
  };
  let {
    register_as,
    first_name,
    last_name,
    mail_id,
    contact_number,
    country,
    state,
    city,
    street,
    gender,
    marital_status,
    date_of_birth,
    id_proof_type,
    id_proof_detail,
  } = formData;
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            <label>Register as : </label>
          </td>
          <td>
            <select
              className="register_as"
              name="register_as"
              value={register_as}
              onChange={handleChanges}
            >
              {accountType.map((val) => (
                <option value={val}>{val}</option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>First name : </label>
          </td>
          <td>
            <input
              type="text"
              className="first_name"
              name="first_name"
              value={first_name}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Last name : </label>
          </td>
          <td>
            <input
              type="text"
              className="last_name"
              name="last_name"
              value={last_name}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Mail id : </label>
          </td>
          <td>
            <input
              type="text"
              className="mail_id"
              name="mail_id"
              value={mail_id}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Contact number : </label>
          </td>
          <td>
            <input
              type="text"
              className="contact_number"
              name="contact_number"
              value={contact_number}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Country : </label>
          </td>
          <td>
            <input
              type="text"
              className="country"
              name="country"
              value={country}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>State : </label>
          </td>
          <td>
            <input
              type="text"
              className="state"
              name="state"
              value={state}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>City : </label>{" "}
          </td>
          <td>
            <input
              type="text"
              className="city"
              name="city"
              value={city}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Street : </label>
          </td>
          <td>
            <input
              type="text"
              className="street"
              name="street"
              value={street}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Gender : </label>
          </td>
          <td>
            <input
              type="text"
              className="gender"
              name="gender"
              value={gender}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Marital status : </label>
          </td>
          <td>
            <input
              type="text"
              className="marital_status"
              name="marital_status"
              value={marital_status}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Date of birth : </label>
          </td>
          <td>
            <input
              type="text"
              className="date_of_birth"
              name="date_of_birth"
              value={date_of_birth}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Id proof type : </label>{" "}
          </td>
          <td>
            <input
              type="text"
              className="id_proof_type"
              name="id_proof_type"
              value={id_proof_type}
              onChange={handleChanges}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Id proof detail : </label>{" "}
          </td>
          <td>
            <input
              type="text"
              className="id_proof_detail"
              name="id_proof_detail"
              value={id_proof_detail}
              onChange={handleChanges}
            />
          </td>
        </tr>
      </table>
      <input type="button" onClick={onSubmit} value="Submit" />
    </React.Fragment>
  );
};

export default RegisterForm;
