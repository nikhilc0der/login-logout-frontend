import React from "react";
import MainComp from "../components/form/MainComp";

function Login({
  onSubmitForm,
  location,
  onUpdateField,
  rest,
  onBlurField,
  errors,
  login,
}) {
  return (
    <>
      <MainComp
        onSubmitForm={onSubmitForm}
        location={location}
        onUpdateField={onUpdateField}
        rest={rest}
        onBlurField={onBlurField}
        errors={errors}
        login={login}
      />
    </>
  );
}

export default Login;
