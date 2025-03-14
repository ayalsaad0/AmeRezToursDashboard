import React from "react";

// The header component
const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-lg text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
