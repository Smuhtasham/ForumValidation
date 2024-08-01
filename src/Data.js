import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Data = () => {
  const [showTab1, setShowTab1] = useState(false);
  const [showTab2, setShowTab2] = useState(false);
  const [name, setName] = useState("");

  const showtab1 = () => {
    if (showTab1 == true) {
      setShowTab1(false);
    } else {
      setShowTab1(true);
    }
  };
  const showtab2 = () => {
    if (showTab2 == true) {
      setShowTab2(false);
    } else {
      setShowTab2(true);
    }
  };

  console.log(name)

  return (
    <>
      <div className="flex px-40 py-6 w-[90%] ">
        <div className="w-[60%]">
          <button className="bg-sky-500 my-2 w-[100px]" onClick={showtab1}>
            Show Tab 1
          </button>
          <div>{showTab1 && <Tab1  setName={setName} />}</div>
        </div>
        <div className="w-[50%]">
          <button className="bg-sky-500 my-2 w-[100px]" onClick={showtab2}>
            Show Tab 2
          </button>
          <div>{showTab2 && <Tab2 name={name}/>}</div>
        </div>
      </div>
    </>
  );
};

export default Data;
