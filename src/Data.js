import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Data = () => {
  const [name, setName] = useState([]);
  const [toggle, setToggle] = useState("tab1");

  console.log(name);

  return (
    <>
      <div className="flex px-40 py-6 w-[90%] flex-col ">
        <div className="flex items-center gap-4">
          <div onClick={() => setToggle("tab1")}>Tab1</div>
          <div onClick={() => setToggle("tab2")}>Tab2</div>
        </div>{" "}
        <br />
        <div>
          {toggle === "tab1" && <Tab1 name={name} setName={setName} />}
          {toggle === "tab2" && <Tab2 name={name} />}
        </div>
      </div>
    </>
  );
};

export default Data;