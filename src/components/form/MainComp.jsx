import React from "react";
import FormArea from "./FormArea";

function MainComp({
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
      <FormArea
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

export default MainComp;
