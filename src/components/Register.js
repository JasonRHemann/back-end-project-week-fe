import React from "react";
import { useForm } from "react-hook-form";
import "./formStyles.css";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          name="Username"
          ref={register({ required: true, maxLength: 12 })}
        />
        <input
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, max: 20, min: 5 })}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          name="Confirm Password"
          ref={register({ required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
