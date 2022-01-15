import React, {useState} from "react";
import "./App.css";
import Axios from "axios";

function App() {

    // store all pass and username 
    const  {usernameReg, setUsernameReg} = useState("")
    const  {passwordReg, setPasswordReg} = useState("")

    // 
    const  {username   , setUsername} = useState("")
    const  {password,   setPassword } = useState("")
    
    const register = () =>{
        Axios.post("http://localhost3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
                console.log(response);
        }); }

    const login = () =>{
        Axios.post("http://localhost3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
        }); }

  return (
      <html>
      <div className="App">
          <div className="registration">
              <h1> registration </h1>
              <label>Username</label>
              <input type="text" onChange={(e) => {
                  setUsernameReg(e.target.value); }}
                  />
            
              <label>Password</label>
              <input type="text" onChange={(e) => {
                  setPasswordReg(e.target.value); }}
              />
              <button onClick={ register}> Register</button>
          </div>



          <div className="login">
              <h1> Login </h1>
              <input type="text" onChange={(e) => {
                  setUsername(e.target.value); }}
                     placeholder="Username"/>
              <input type="password" onChange={(e) => {
                  setPassword(e.target.value); }}placeholder="Password"/>
              <button onClick={login}>Login </button>
          </div>
      </div>

      </html>
  );
}

export default App;
