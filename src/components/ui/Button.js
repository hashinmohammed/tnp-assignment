"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary", // 'primary' or 'secondary'
  motionVariants,
  className = "",
  onClick,
  type = "button",
}) => {
  // Base styles shared by all buttons
  const baseStyles =
    "backdrop-blur-[8px] my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 text-white lg:w-[340px] transition-all duration-300";

  // Specific styles for variants
  const variantStyles = {
    primary: "bg-[#3368ff]", // Blue button (View Inventory)
    secondary: "bg-tesla-gray", // Gray button (Custom Order)
  };

  return (
    <motion.button
      variants={motionVariants}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;
