import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline" | "colorfull";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "default",
  size = "md",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

  const variants = {
    default: "bg-amber-500/85 text-white hover:bg-amber-600 focus:ring-blue-400",
    outline: "border border-gray-400/50 text-gray-200 hover:bg-gray-100/20 focus:ring-gray-400",
    colorfull: "bg-amber-100 hover:bg-amber-200 py-2 text-gray-700  focus:ring-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
