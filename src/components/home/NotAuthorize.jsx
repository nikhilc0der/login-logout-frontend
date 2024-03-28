import React from "react";

function NotAuthorize() {
  return (
    <div className="m-auto text-center">
      <div className="text-4xl font-bold">Not Authorize User Homepage</div>
      <p className="my-5">Please Login First</p>
      <button className="bg-blue-500 text-white p-2 px-5 cursor-pointer">
        <a href="/login">Login</a>
      </button>
    </div>
  );
}

export default NotAuthorize;
