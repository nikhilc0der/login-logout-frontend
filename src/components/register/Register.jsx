import React from "react";

function Register({ onUpdateField, rest, onBlurField, errors }) {
  return (
    <>
      <input
        placeholder="Enter Your Name"
        type="text"
        name="username"
        id="username"
        value={rest.username}
        onChange={onUpdateField}
        onBlur={onBlurField}
      />
      {errors.username.dirty && errors.username.error ? (
        <p className="my-[2px] text-red-500">{errors.username.message}</p>
      ) : null}
      <input
        placeholder="Enter Your Email"
        type="email"
        name="email"
        id="email"
        value={rest.email}
        onChange={onUpdateField}
        onBlur={onBlurField}
      />
      {errors.email.dirty && errors.email.error ? (
        <p className="my-[2px] text-red-500">{errors.email.message}</p>
      ) : null}
      <input
        placeholder="Enter Your Password"
        type="password"
        name="password"
        id="password"
        value={rest.password}
        onChange={onUpdateField}
        onBlur={onBlurField}
      />
      {errors.password.dirty && errors.password.error ? (
        <p className="my-[2px] text-red-500">{errors.password.message}</p>
      ) : null}
    </>
  );
}

export default Register;
