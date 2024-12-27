/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/userContext";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(userContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username" value={username}
      onChange={(e) => setUsername(e.target.value)}/>

      <input type="password" placeholder="password" 
        value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
