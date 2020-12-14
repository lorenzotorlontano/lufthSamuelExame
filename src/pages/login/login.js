import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  return <div onClick={() => history.push("/home")}>login</div>;
}

export default Login;
