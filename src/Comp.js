import React, { useState } from "react";

export default function Comp() {
  let text;
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const hasCapital = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return { hasCapital, hasNumber, hasSymbol };
  };

  const passwordValidation = validatePassword(password);
  // const Add = () => {
  //   setCounter((prev) => prev + 5);
  // };
  // const Sub = () => {
  //   setCounter((prev) => prev - 5);
  // };
  // const Mul = () => {
  //   setCounter((prev) => prev * 5);
  // };
  // const Div = () => {
  //   setCounter((prev) => prev / 5);
  // };
  return (
    <div className="App">
      {/* <button onClick={Add}>Add bg 5</button>
      <button onClick={Div}>Divide by 5</button>
      <p> {counter} </p>
      <button onClick={Sub}>Subtract by 5</button>
      <button onClick={Mul}>Multiply by 5</button> */}
      <p>Enter Your Name:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value.length > 10 && <p>You add more than 10 characters.</p>}
      <p>Enter your Email:</p>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      {!validateEmail(email) && email.length > 0 && <p>Please enter a valid email.</p>}
      <p>Enter your Password:</p>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      {console.log(password)}
      <div>
        <p>Password must contain:</p>
        <p>
          {passwordValidation.hasCapital ? "✅" : "❌"} At least one capital letter
        </p>
        <p>
          {passwordValidation.hasNumber ? "✅" : "❌"} At least one number
        </p>
        <p>
          {passwordValidation.hasSymbol ? "✅" : "❌"} At least one symbol
        </p>
      </div>
    </div>
  );
}
