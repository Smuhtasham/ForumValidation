import React from "react";

const Tab2 = ({ name }) => {
  return (
    <>
      <div>
        <div>
          {name.map((name) => (
            <div>
              <span>{name}</span></div> ))}
        </div>
      </div>
    </>
  );
};

export default Tab2;
