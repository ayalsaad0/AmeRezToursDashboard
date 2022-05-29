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
  Kanban,
  Line,
  Bar,
  Vehicles,
  Activities,
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
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
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
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              {currentUser !== null && <Sidebar />}
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {currentUser !== null && <Sidebar />}
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
              {currentUser !== null && <Navbar />}
            </div>
            <div>
              {currentUser !== null && themeSettings && <ThemeSettings />}
              <Routes>
                {/* login and register */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                {/* dashboard  */}
                {currentUser !== null && (
                  <Route path="/ecommerce" element={<Ecommerce />} />
                )}
                {/* pages  */}
                {currentUser !== null && (
                  <Route path="/orders" element={<Orders />} />
                )}
                {currentUser !== null && (
                  <Route path="/vehicles" element={<Vehicles />} />
                )}
                {currentUser !== null && (
                  <Route path="/activities" element={<Activities />} />
                )}
                {currentUser !== null && (
                  <Route path="/employees" element={<Employees />} />
                )}
                {currentUser !== null && (
                  <Route path="/customers" element={<Customers />} />
                )}
                {/* apps  */}
                {currentUser !== null && (
                  <Route path="/calendar" element={<Calendar />} />
                )}
                {currentUser !== null && (
                  <Route path="/kanban" element={<Kanban />} />
                )}
                {/* charts  */}
                {currentUser !== null && (
                  <Route path="/line" element={<Line />} />
                )}
                {currentUser !== null && (
                  <Route path="/bar" element={<Bar />} />
                )}
              </Routes>
            </div>
            {currentUser !== null && <Footer />}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
