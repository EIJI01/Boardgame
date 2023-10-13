import React from "react";
type ButtonProps = {
  actionLabel: string;
  onclick?: () => void;
  disabled?: boolean;
  outline?: boolean;
};
const Button = ({ actionLabel, onclick, disabled, outline }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`${!outline ? "bg-green-500 " : "border-4 border-green-500"}`}
    >
      {actionLabel}
    </button>
  );
};

export default Button;
