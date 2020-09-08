import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../actions/index";

export const Authentication = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authenticate({ type: "LOGIN" }));
    },
    validate: (values) => {
      let errors = {};
      if (!values.userId) {
        errors.userId = "User Id is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
  });

  const [state, setState] = useState({
    auth: false,
  });

  // const handleChange=(event)=>{
  //     const {name,value}=event.target
  //     setState({
  //         [name]:value
  //     })
  // }

  const loginDisplay = () => {
    setState({
      auth: true,
    });
  };

  return (
    <div>
      <div className="login">
        <h3>Login</h3>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className="login-input"
            placeholder="Email or UserId"
            name="userId"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.userId ? (
            <div className="errorDisplay">{formik.errors.userId}</div>
          ) : null}
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            name="password"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div className="errorDisplay">{formik.errors.password}</div>
          ) : null}
          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
