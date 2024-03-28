import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import axios from "axios";
import { useLoginFormValidator } from "./components/useLoginFormValidator";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import HistoryItem from "./utils/HistoryItem";
function App() {
  let location = window.location.pathname.replace("/", "");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);
  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const token = window.location.href.split("?token=")[1];

  console.log(token, "token");
  let action =
    location === "register"
      ? "/api/vi/users/register"
      : location === "forget"
      ? "/api/vi/users/forgotPassword"
      : location === "update"
      ? "/api/vi/users/resetpassword?token=" + token
      : "/api/vi/users/login";
  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(form, "form");
    try {
      if (location === "update") {
        const data = await axios.patch(action, form);
        alert(data.data.message);
        HistoryItem(data.data.data.user, "historyItems");
        setForm({
          username: "",
          email: "",
          password: "",
        });
      } else {
        const data = await axios.post(action, form);
        alert(data.data.message);
        HistoryItem(data.data.data.user, "historyItems");
        setForm({
          username: "",
          email: "",
          password: "",
        });
      }
      location === "register"
        ? (window.location.href = `/login`)
        : location === "forget"
        ? (window.location.href = `/login`)
        : (window.location.href = `/`);
    } catch (error) {
      console.error(error);
    }
  };

  const [user, setUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.error("Login Failed:", error),
  });
  let isuser = Array.isArray(user) ? user.length > 0 : user;
  useEffect(() => {
    if (isuser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          HistoryItem(res.data, "historyItems");
          window.location.href = "/";
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    localStorage.clear();
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home logOut={logOut} />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              onSubmitForm={onSubmitForm}
              location={location}
              onUpdateField={onUpdateField}
              rest={form}
              onBlurField={onBlurField}
              errors={errors}
              login={login}
            />
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Login
              onSubmitForm={onSubmitForm}
              location={location}
              onUpdateField={onUpdateField}
              rest={form}
              onBlurField={onBlurField}
              errors={errors}
              login={login}
            />
          }
        />
        <Route
          exact
          path="/forget"
          element={
            <Login
              onSubmitForm={onSubmitForm}
              location={location}
              onUpdateField={onUpdateField}
              rest={form}
              onBlurField={onBlurField}
              errors={errors}
              login={login}
            />
          }
        />
        <Route
          exact
          path="/update"
          element={
            <Login
              onSubmitForm={onSubmitForm}
              location={location}
              onUpdateField={onUpdateField}
              rest={form}
              onBlurField={onBlurField}
              errors={errors}
              login={login}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
