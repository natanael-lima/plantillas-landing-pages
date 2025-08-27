import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border shadow-sm bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
};
