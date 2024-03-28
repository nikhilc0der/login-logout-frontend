import React, { useState, useEffect } from "react";
import NotAuthorize from "../components/home/NotAuthorize";
import Authorize from "../components/home/Authorize";

function Home({ logOut }) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const items =
          JSON.parse(await localStorage.getItem("historyItems")) === null
            ? []
            : JSON.parse(await localStorage.getItem("historyItems"));
        setUserInfo(items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let isuser = Array.isArray(userInfo) ? userInfo.length > 0 : userInfo;

  return (
    <>
      {isuser ? (
        <Authorize userInfo={userInfo} logOut={logOut} />
      ) : (
        <NotAuthorize />
      )}
    </>
  );
}

export default Home;
