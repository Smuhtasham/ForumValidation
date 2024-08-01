import React, { useState } from "react";

const DataShow = (props) => {
    
  return (
    <div>
        <button>Show</button>
      <p>{props.data}</p>
    </div>
  );
};

export default DataShow;
