import React, { useState } from "react";
// import Tab1 from "./Tab1";
// import Tab2 from "./Tab2";
import Tabs from "./Tabs";

const Data = () => {
  const [name, setName] = useState([]);

  console.log(name);

  return (
    <>
        <div>
            <Tabs name={name} setName={setName} />
        </div>
      
    </>
  );
};

export default Data;
