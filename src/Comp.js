import React, { useState } from "react";

export default function Comp() {
  let text;
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return email.includes("@") && email.includes('.com');
  };

  const validatePassword = (password) => {
    let hasCapital=false;
    let hasNumber=false;
    let hasSymbol=false;

    for (let char of password) {
      if (char >= 'A' && char <= 'Z') {
        hasCapital = true;
      } else if (char >= '0' && char <= '9') {
        hasNumber = true;
      } else if (char.includes('!'&&'@'&&'#'&&'$'&&'%'&&'&')) {
        hasSymbol = true;
      }
    }
    return { hasCapital, hasNumber, hasSymbol };
  };

  const passwordValidation = validatePassword(password);
 
  return (
    <div className="App">
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
