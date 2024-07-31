import React, { useState } from "react";

export default function Arrays() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "Muhtasham",
      email: "muhtasham00@gmail.com",
      age: "23",
      address: "123 house street Fsd.",
    },
    {
      id: 2,
      name: "Muhtasham",
      email: "muhtasham00@gmail.com",
      age: "23",
      address: "123 house street Fsd.",
    },
  ]);
  console.log({userData})

  const Submit = () => {
   

    setUserData([
      ...userData,
      { id:userData.length+1,
        name,
        email,
        age,
        address,
      },
    ]);
    
    setAddress("");
    setName("");
    setEmail("");
    setAge("");
  };
  const HandleDelete = (id) => {
    const filtered = userData.filter((val) => val.id !== id);
    setUserData(filtered);
  };
  return (
    <>
      <div>
        <div className="flex flex-col w-[90%] m-auto justify-center items-center gap-2">
          <p>Enter Your Name:</p>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black"
            type="text"
            value={name}
          />
          <p>Enter your email:</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-black"
            type="email"
            value={email}
          />
          <p>Enter your Age:</p>
          <input
            onChange={(e) => setAge(e.target.value)}
            className="border-2 border-black"
            type="number"
            value={age}
          />
          <p>Enter your address:</p>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="border-2 border-black"
            value={address}
            type="text"
          />
          <button className="bg-sky-300 py-2 px-4" onClick={Submit}>
            Submit
          </button>
          <div id="data">
            {userData.map((val) => (
              <div key={val.id}>
                <span>{val.id}</span>
                <span>{val.name}</span> <span>{val.email}</span>{" "}
                <span onClick={() => HandleDelete(val.id)}>X</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
