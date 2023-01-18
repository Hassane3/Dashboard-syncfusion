import React, { useState, useContext } from "react";

const initialState = {
  chat: false,
  cart: false,
  notification: false,
  userProfil: false,
};

const StateContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleCloseClick = (clicked) => {
    setIsClicked({ clicked: false });
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("themeColor", color);
    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,

        currentMode,
        currentColor,
        themeSettings,
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        setMode,
        setColor,
        handleCloseClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
