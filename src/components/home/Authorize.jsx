import axios from "axios";
import React from "react";

function Authorize({ userInfo, logOut }) {
  async function logoutHandler() {
    if (userInfo.verified_email) {
      logOut();
      window.location.reload();
    } else {
      try {
        const data = await axios.post("/api/vi/users/logout");
        alert(data.data.message);
        if (data.data.message === "User logged Out") {
          localStorage.clear();
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <>
      <div className="m-auto text-center">
        <div className="text-4xl font-bold">Authorize User Homepage</div>
        <div className="my-5">
          <p>
            user name :- {userInfo.username ? userInfo.username : userInfo.name}
          </p>
          <p>user email :- {userInfo.email}</p>
        </div>
        <button
          className="bg-blue-500  text-white p-2 px-5 cursor-pointer"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Authorize;
