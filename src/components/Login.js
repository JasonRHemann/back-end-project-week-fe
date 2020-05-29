import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axiosWithAuth()
      .post("auth/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("test");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          name="Username"
          ref={register({ required: true })}
        />
        <input
          type="text"
          placeholder="Password"
          name="Password"
          ref={register}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
