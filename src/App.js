import { useState } from "react";
import "./styles.css";

export default function App() {
  let [message, setMessage] = useState("");
  let [firstPassword, setFirstPassword] = useState("");
  let [scndPassword, setScndPassword] = useState("");
  let [color, setColor] = useState();
  
  


  let passwordOne = (e) =>{
    firstPassword = e.target.value;
  }
  let passwordTwo = (e) =>{
    scndPassword = e.target.value;
  }
  let clickHandler = () => {
    if(firstPassword === scndPassword){
      setMessage("success");
      setColor("green")
    }else{
      setMessage("password does not match");
      setColor("red")
    }
    
  };

  return (
    <div>
      <input onChange = {passwordOne} type="password"></input>
      <input onChange = {passwordTwo} type="password"></input>
      <button onClick={clickHandler} >submit</button> 
      <div>
      <small style={{borderColor: color}}>{message}</small>
      </div>
       
    </div>
  );
}
