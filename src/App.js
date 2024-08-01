import { useState } from "react";
// import Arrays from "./Arrays";
// import Comp from "./Comp";
// import DataShow from "./DataShow";
import Data from "./Data";

function App() {
  const [count, setCount] = useState(5)
  return (
    <>
      {/* <Comp/> */}
      <Data/>

      {/* <Arrays /> */}
    </>
  );
}
export default App;
