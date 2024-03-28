import React from "react";
import Login from "../login/Login";
import Forget from "../forget/Forget";
import Register from "../register/Register";
import UpdateComp from "../update/UpdateComp";
function FormArea({
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
      <div className="modal">
        <div className="bg-white p-4">
          <form action="" method="POST" onSubmit={onSubmitForm}>
            <h1>
              {location === "register"
                ? "Register"
                : location === "forget"
                ? "Forget Password"
                : location === "update"
                ? "Update Password"
                : "Login"}
            </h1>

            {location === "register" ? (
              <Register
                onUpdateField={onUpdateField}
                rest={rest}
                onBlurField={onBlurField}
                errors={errors}
              />
            ) : location === "forget" ? (
              <Forget
                onUpdateField={onUpdateField}
                rest={rest}
                onBlurField={onBlurField}
                errors={errors}
              />
            ) : location === "update" ? (
              <UpdateComp
                onUpdateField={onUpdateField}
                rest={rest}
                onBlurField={onBlurField}
                errors={errors}
              />
            ) : (
              <Login
                onUpdateField={onUpdateField}
                rest={rest}
                onBlurField={onBlurField}
                errors={errors}
              />
            )}

            <div
              className={`${
                location === "register"
                  ? "grid-cols-2"
                  : location === "forget"
                  ? "grid-cols-2"
                  : "grid-cols-3"
              } grid gap-5 w-[90%]`}
            >
              <button
                className="bg-blue-500 text-white p-2 px-5 cursor-pointer"
                type="submit"
              >
                Submit
              </button>

              {location === "register" ? (
                <></>
              ) : location === "forget" ? (
                <></>
              ) : (
                <button className="bg-blue-500 text-white p-2 px-5 cursor-pointer">
                  <a href="/forget">Forget Password</a>
                </button>
              )}

              {location === "register" ? (
                <>
                  <button className="bg-blue-500 text-white p-2 px-5 cursor-pointer">
                    <a href="/login">Login</a>
                  </button>
                </>
              ) : location === "forget" ? (
                <>
                  <button className="bg-blue-500 text-white p-2 px-5 cursor-pointer">
                    <a href="/login">Login</a>
                  </button>
                </>
              ) : (
                <button className="bg-blue-500 text-white p-2 px-5 cursor-pointer">
                  <a href="/register">Register</a>
                </button>
              )}
            </div>
            {location === "login" && (
              <button
                className="border-blue-500 border-2 text-blue-500 p-2 px-5 cursor-pointer"
                onClick={login}
              >
                Sign With Google
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default FormArea;
