import React, { useContext, useEffect } from "react";
import { TestBarContext } from "./testbar1provider";

const ControlTestBar1 = () => {
  const testBarProvider = useContext(TestBarContext);
  var mesas = [];
  useEffect(() => {
    localStorage.setItem("mesas", testBarProvider.mesas);
    mesas = localStorage.getItem("mesas");
  }, [testBarProvider.mesas]);

  return (
    <div>
      <h1>Control Bar</h1>
      {mesas.map((mesa) => (
        <ul>{mesa}</ul>
      ))}
    </div>
  );
};

export default ControlTestBar1;
