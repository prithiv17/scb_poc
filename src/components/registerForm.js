import React, { useEffect, useState } from "react";

import { accountType } from "../data";
import { addCustomerDetails, getCustomerDetails } from "../services";
import { customerDetails } from "../actions";

import { useDispatch } from "react-redux";
import {CountiresData,IdTypes} from '../Common/CountiresData'

const RegisterForm = (props) => {
  let { close } = props;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
            register_as: "Person",
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
            countires:[],
            states:[],
            cities:[],
            formErrors:{
              first_name_error: "",
              last_name_error: "",
              mail_id_error: "",
              contact_number_error: "",
              country_error: "",
              state_error: "",
              city_error: "",
              street_error: "",
              gender_error: "",
              marital_status_error: "",
              date_of_birth_error: null,
              id_proof_type_error: "",
              id_proof_detail_error: "",
            }
  });

  //Added useEffect for initial loading of countires data into countires array
  useEffect(()=>{
        setFormData({
          ...formData,
          countires:CountiresData
        })
  },[])

  const handleChanges = (event) => {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Added this method to trigger an event while Country Changes
  const changeCountry=(event)=>{    
    setFormData({
      ...formData,
      country:event.target.value,
      states:formData.countires.find(cntry=>cntry.country===event.target.value).states
    })   
  }

  //Added this method to trigger an event while State Changes

  const changeState=(event)=>{
    setFormData({
      ...formData,
      state:event.target.value,
      cities:formData.countires.find(cntry=>cntry.country===formData.country).states.find(state=>state.name===event.target.value).city
      })
  }

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
    console.log(formData.state)
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
      <table className="RegisterFormTable">
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
              <label>{register_as==='Person'?'First name:' :'Organization Name:'} </label>
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
        <tr hidden={register_as==='Business'}>
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
              type="email"
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
           <select name='country' value={country} onChange={changeCountry}>
             <option>--Choose Country--</option>
             {CountiresData.map((cntry,index)=><option key={index}>{cntry.country}</option>)}
           </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>State : </label>
          </td>
          <td>
            <select name='state' value={state} onChange={changeState}>
             <option>--Choose State--</option>
                {formData.states.map((state,index)=><option key={index}>{state.name}</option>)}
           </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>City : </label>{" "}
          </td>
          <td>
          <select name='city' value={city} onChange={handleChanges}>
              <option>--Choose City--</option>
               {formData.cities.map((city,index)=><option key={index}>{city}</option>)} 
          </select>            
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
        <tr hidden={register_as==='Business'}>
          <td>
            <label>Gender : </label>
          </td>
          <td>
            <input
              type="radio"
              className="gender"
              name="gender"
              value='male'
              onChange={handleChanges}
              checked={gender==='male'}
            />
            <label>M</label>
            <input
              type="radio"
              className="gender"
              name="gender"
              value='female'
              onChange={handleChanges}
              checked={gender==='female'}
            />
            <label>F</label>
          </td>
        </tr>
        <tr hidden={register_as==='Business'}>
          <td>
            <label>Marital status : </label>
          </td>
          <td>
            <input
              type="radio"
              className="marital_status"
              name="marital_status"
              value='single'
              onChange={handleChanges}
              checked={marital_status==='single'}
            />
            <label>Single</label>
            <input
              type="radio"
              className="marital_status"
              name="marital_status"
              value='married'
              onChange={handleChanges}
              checked={marital_status==='married'}
            />
            <label>Married</label>
          </td>
        </tr>
        <tr hidden={register_as==='Business'}>
          <td>
            <label>Date of birth : </label>
          </td>
          <td>
            <input
              type="date"
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
          <select name='id_proof_type' value={id_proof_type} onChange={handleChanges}>
             {IdTypes.map((idType,index)=><option key={index}>{idType}</option>)}
           </select>
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
