import React from "react";
type ButtonProps = {
  actionLabel: string;
  onclick: () => void;
  disabled?: boolean;
  outline?: boolean;
  customStyle?: string;
};
const Button = ({
  actionLabel,
  onclick,
  disabled,
  outline,
  customStyle,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`${
        !outline ? "bg-green-500 " : "border-4 border-green-500"
      } ${customStyle} rounded-lg`}
    >
      {actionLabel}
    </button>
  );
};

export default Button;
