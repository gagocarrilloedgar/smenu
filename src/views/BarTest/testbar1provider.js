import React, { createContext, useState } from "react";

export const TestBarContext = createContext();

export const TestBarContextProvider = (props) => {
  const [mesas, setMesas] = useState([]);

  const handleChange = (mesa) => {
    setMesas((prevmesas) => [...prevmesas, mesa]);
  };

  const mesasProvider = {
    mesas,
    setMesas,
    handleChange,
  };
  return (
    <TestBarContext.Provider value={mesasProvider}>
      {props.children}
    </TestBarContext.Provider>
  );
};
