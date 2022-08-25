import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";

// The user profile component
const UserProfile = () => {
  const navigate = useNavigate();
  const { currentColor, setUser, currentUser, handleClick, setActiveMenu } =
    useStateContext();

  // A function which handles the event of the logout button
  const handleLogout = (e) => {
    handleClick(e.target);
    setUser({});
    setActiveMenu(false);
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          onClick={handleClick}
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            {currentUser.full_name}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            {currentUser.role}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            {currentUser.email}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default UserProfile;
