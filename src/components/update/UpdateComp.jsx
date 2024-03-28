import React from "react";

function UpdateComp({ onUpdateField, rest, onBlurField, errors }) {
  return (
    <>
      <input
        placeholder="Enter New Password"
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

export default UpdateComp;
