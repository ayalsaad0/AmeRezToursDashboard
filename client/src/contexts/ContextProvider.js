import React, { createContext, useContext, useState } from "react";
import { FetchVehicles } from "../data/Vehicles";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentUser, setCurrentUser] = useState({});
  const [activePopup, setActivePopup] = useState(false);
  const [activeEditPopup, setActiveEditPopup] = useState(false);
  const [activeAddPopup, setActiveAddPopup] = useState(false);
  const [vehicles, setVehicles] = useState(FetchVehicles());

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const setUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", user);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        currentUser,
        setCurrentUser,
        setUser,
        activePopup,
        setActivePopup,
        activeAddPopup,
        setActiveAddPopup,
        activeEditPopup,
        setActiveEditPopup,
        vehicles,
        setVehicles,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
