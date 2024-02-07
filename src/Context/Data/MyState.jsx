import React, { useState } from "react";
import MyContext from "./MyContext";

export const MyState = (props) => {
  //  theme mode
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <>
      <MyContext.Provider
        value={{
          mode,
          toggleMode,
          searchKey,
          setSearchKey,
          filterType,
          setFilterType,
          filterPrice,
          setFilterPrice,
        }}
      >
        {props.children}
      </MyContext.Provider>
      ;
    </>
  );
};
