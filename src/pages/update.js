import React from "react";

function Update() {
  return (
    <>
      <div className="modal">
        <div className="bg-white p-4">
          <form action="" method="POST">
            <h1>Update Password</h1>
            <div className="grid-cols-2 grid gap-5 w-[90%]">
              <button
                className="bg-blue-500 text-white p-2 px-5 cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
