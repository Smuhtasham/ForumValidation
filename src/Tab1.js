import React, { useState } from "react";

const Tab1 = ({setName}) => {

    const[InputName,setInputName] = useState()

    const handleSubmit=()=>{
        setName(InputName)

    }

  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="font-bold px-16">Input Feild Tab</div>
        <form>
        <p className="py-3">Enter Your Name:</p>
        <input className="border-2 border-black w-[70%]" type="text" onChange={(e)=>setInputName(e.target.value)}/>
        <button  className="bg-sky-500 my-2 w-[100px]"
        onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Tab1;
