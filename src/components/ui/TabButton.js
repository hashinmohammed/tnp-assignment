"use client";
import React from "react";

const TabButton = ({
  isActive,
  onClick,
  children,
  activeClassName = "border-t-[2px] border-black",
  inactiveClassName = "border-t-[1px] border-black bg-white/60",
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white cursor-pointer relative mb-4 mr-2 px-2 py-4 flex-1 transition-all duration-300 overflow-hidden sm:px-6 ${
        isActive ? activeClassName : inactiveClassName
      } ${className}`}
    >
      {/* Overlay for inactive state */}
      {!isActive && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-white/60" />
      )}

      {/* Overlay for active state to darken slightly or add effect if needed */}
      {isActive && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-white/0" />
      )}

      {children}
    </div>
  );
};

export default TabButton;
