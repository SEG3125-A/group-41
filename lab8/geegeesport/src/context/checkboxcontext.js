"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    console.log("isChecked: ", isChecked);
  }, [isChecked]);

  return (
    <CheckboxContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </CheckboxContext.Provider>
  );
};
export const useCheckbox = () => useContext(CheckboxContext);
