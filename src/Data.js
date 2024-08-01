import React, { useState } from "react";
import Tabs from "./Tabs";

const Data = () => {

    const [name, setName] = useState([]);

  return (
    <>
        <div>
            <Tabs name={name} setName={setName} />
        </div>
      
    </>
  );
};

export default Data;
