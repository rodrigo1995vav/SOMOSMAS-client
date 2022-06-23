import React, { useEffect } from "react";
import { useState } from "react";
import { loginUser} from "./apiServices";

function ApiTest() {
  const [json,setJson] = useState([])

  useEffect(() => {
    postData();
  },[]);
    

  const postData =  () => {
    const res =  loginUser(
      "http://localhost:3000/api/auth/login",{
        "name": 'hola',
        "email": "rodri@gmail.com",
        "password":"123456789"
      }
    );
    console.log(res)
    console.log(localStorage.getItem("token"))
    setJson(res);
  };
  

  return <div>access token {localStorage.getItem("token")}</div>;
}

export default ApiTest;
