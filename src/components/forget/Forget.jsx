import React from "react";

function Forget({ onUpdateField, rest, onBlurField, errors }) {
  return (
    <>
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
    </>
  );
}

export default Forget;
