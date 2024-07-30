import React, { useState } from "react";
import "./index.css";

export default function Comp() {
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [ShowPaswordOption, setShowPaswordOption] = useState(false);

  const emailValidate = (email) => {
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

  const isEmailValid = emailTouched && email.length > 0 && emailValidate(email);
  const passValidation = validatePassword(password);
  const isPasswordValid =
    passwordTouched &&
    password.length > 0 &&
    passwordValidation.hasCapital &&
    passwordValidation.hasNumber &&
    passwordValidation.hasSymbol;

  function Submit() {
    console.log("working");
  }

  return (
    <div className="">
      <div className="w-[20%] m-auto mt-10 gap-3 flex flex-col justify-center items-center py-6 border">
      <h3 className="text-lg font-bold">Enter Your Information</h3>
        <p className="">Enter Your Name:</p>
        <input
          className="border border-black"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value.length > 10 && <p>You add more than 10 characters.</p>}
        <p>Enter your Email:</p>
        <input
          className="border border-black"
          onFocus={() => setEmailTouched(false)}
          onBlur={() => setEmailTouched(true)}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailTouched && email.length === 0 && <p>Email cannot be empty.</p>}
        {!emailValidate(email) && emailTouched && email.length > 0 && (
          <p>Please enter a valid email.</p>
        )}
        <p>Enter your Password:</p>
        <input
          type="password"
          className="border border-black"
          value={password}
          onBlur={() => {
            setPasswordTouched(true);
          }}
          onFocus={() => {
            setPasswordTouched(false);
          }}
          onChange={(e) => {
            setPassword(e.target.value);
            setShowPaswordOption(true);
          }}
        />
        {passwordTouched && password.length === 0 && (
          <p>Password can not be Empty</p>
        )}
        {ShowPaswordOption && (
          <div className="ml-4">
            <p>Password must contain:</p>
            <p>
              {passwordValidation.hasCapital ? "✅" : "❌"} At least one capital
              letter
            </p>
            <p>
              {passwordValidation.hasNumber ? "✅" : "❌"} At least one number
            </p>
            <p>
              {passwordValidation.hasSymbol ? "✅" : "❌"} At least one symbol
            </p>
          </div>
        )}

        {isEmailValid && passValidation && isPasswordValid ? (
          <button
            disabled={false}
            className="border border-black px-6 bg-sky-600"
            onClick={Submit}
          >
            Submit
          </button>
        ) : (
          <button
            disabled={true}
            className="border border-black px-6 bg-sky-300"
            onClick={Submit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
