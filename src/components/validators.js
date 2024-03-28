export const usernameValidator = (username) => {
  if (!username) {
    return "Username is required";
  } else if (username.length < 4) {
    return "Incorrect username format";
  }
  return "";
};

export const emailValidator = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  }
  return "";
};

export const passwordValidator = (password) => {
  if (!password) {
    return "password is required";
  } else if (password.length < 6) {
    return "password must have a minimum 6 Number";
  }
  return "";
};
