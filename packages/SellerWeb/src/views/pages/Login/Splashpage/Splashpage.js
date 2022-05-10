import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "./Splashpage.styled";
// import hooks
function Splashpage() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    let goto = setTimeout(() => {
      setAuth(false);
    }, 3000);
    return () => {
      clearTimeout(goto);
    };
  }, []);

  return auth ? (
    <Wrapper>
      <div className="title">
        <div className="whitebox"></div>
        <h2>Silal</h2>
        <p>Management</p>
      </div>
    </Wrapper>
  ) : (
    <Navigate to="/dashboard" />
  );
}

export default Splashpage;
