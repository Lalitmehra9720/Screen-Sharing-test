// "use client";

// import React from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   disabled?: boolean;
//   variant?: "primary" | "secondary" | "danger";
// }

// export const Button: React.FC<ButtonProps> = ({
//   children,
//   onClick,
//   disabled,
//   variant = "primary",
// }) => {
//   const base =
//     "px-4 py-2 rounded-md font-medium transition disabled:opacity-50";

//   const styles = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700",
//     secondary: "bg-gray-200 hover:bg-gray-300",
//     danger: "bg-red-500 text-white hover:bg-red-600",
//   };

//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`${base} ${styles[variant]}`}
//     >
//       {children}
//     </button>
//   );
// };

"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition duration-200 text-sm cursor-pointer";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-slate-700 text-white hover:bg-slate-600",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} disabled:opacity-50`}
    >
      {children}
    </button>
  );
};