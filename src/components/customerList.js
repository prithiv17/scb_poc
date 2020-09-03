import React, { useState, useEffect } from "react";
import { accountType } from "../data";

const CustomerList = (props) => {
  const [rowData, setRowData] = useState({ ...props, editMode: false });
  useEffect(() => {
    setRowData(props);
  }, [props]);

  let { editMode } = rowData;
  const handleChanges = (event) => {
    let { name, value } = event.target;
    setRowData({
      ...rowData.data,
      [name]: value,
    });
  };

  return (
    <table align="center">
      <tr>
        <th>REGISTER AS</th>
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th> MAIL ID</th>
        <th> CONTACT NUMBER</th>
        <th> COUNTRY</th>
        <th> STATE</th>
        <th> CITY</th>
        <th> STREET</th>
        <th> GENDER</th>
        <th> MARITAL STATUS</th>
        <th> DATE OF BIRTH</th>
        <th> ID PROOF TYPE</th>
        <th> ID PROOF DETAIL</th>
      </tr>
      {rowData.cust_list.length ? (
        rowData.cust_list.map((cust_data) => (
          <tr key={cust_data.mail_id.toString()}>
            <td>
              {editMode == true ? (
                <select
                  className="register_as"
                  name="register_as"
                  value={cust_data.register_as}
                  onChange={handleChanges}
                >
                  {accountType.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </select>
              ) : (
                cust_data.register_as
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="first_name"
                  name="first_name"
                  value={cust_data.first_name}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.first_name
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="last_name"
                  name="last_name"
                  value={cust_data.last_name}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.last_name
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="mail_id"
                  name="mail_id"
                  value={cust_data.mail_id}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.mail_id
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="contact_number"
                  name="contact_number"
                  value={cust_data.contact_number}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.contact_number
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="country"
                  name="country"
                  value={cust_data.country}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.country
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="state"
                  name="state"
                  value={cust_data.state}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.state
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="city"
                  name="city"
                  value={cust_data.city}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.city
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="street"
                  name="street"
                  value={cust_data.street}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.street
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="gender"
                  name="gender"
                  value={cust_data.gender}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.gender
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="marital_status"
                  name="marital_status"
                  value={cust_data.marital_status}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.marital_status
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="date_of_birth"
                  name="date_of_birth"
                  value={cust_data.date_of_birth}
                  onChange={handleChanges}
                />
              ) : (
                new Date(cust_data.date_of_birth).toLocaleDateString()
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="id_proof_type"
                  name="id_proof_type"
                  value={cust_data.id_proof_type}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.id_proof_type
              )}
            </td>
            <td>
              {editMode == true ? (
                <input
                  type="text"
                  className="id_proof_detail"
                  name="id_proof_detail"
                  value={cust_data.id_proof_detail}
                  onChange={handleChanges}
                />
              ) : (
                cust_data.id_proof_detail
              )}
            </td>
          </tr>
        ))
      ) : (
        <h3>No record</h3>
      )}
    </table>
  );
};

export default CustomerList;
