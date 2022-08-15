import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Line,
  Bar,
  Vehicles,
  Attractions,
  Login,
  Register,
  ResetPassword,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentUser,
    setCurrentUser,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    const currentActiveUser = localStorage.getItem("currentUser");
    if (currentThemeColor && currentThemeMode && currentUser) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
      setCurrentUser(currentActiveUser);
    }
  }, [currentUser, setCurrentColor, setCurrentMode, setCurrentUser]);

  const loggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {loggedIn && (
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <Tooltip title="Settings" placement="top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </Tooltip>
            </div>
          )}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              {loggedIn && <Sidebar />}
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {loggedIn && <Sidebar />}
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              {loggedIn && <Navbar />}
            </div>
            <div>
              {loggedIn && themeSettings && <ThemeSettings />}
              <Routes>
                {/* login and register */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                {/* dashboard  */}
                {loggedIn && (
                  <Route path="/ecommerce" element={<Ecommerce />} />
                )}
                {/* pages  */}
                {loggedIn && <Route path="/orders" element={<Orders />} />}
                {loggedIn && <Route path="/vehicles" element={<Vehicles />} />}
                {loggedIn && (
                  <Route path="/activities" element={<Attractions />} />
                )}
                {loggedIn && (
                  <Route path="/employees" element={<Employees />} />
                )}
                {loggedIn && (
                  <Route path="/customers" element={<Customers />} />
                )}
                {/* apps  */}
                {loggedIn && <Route path="/calendar" element={<Calendar />} />}
                {/* charts  */}
                {loggedIn && <Route path="/earnings" element={<Line />} />}
                {loggedIn && <Route path="/statistics" element={<Bar />} />}
              </Routes>
            </div>
            {loggedIn && <Footer />}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
