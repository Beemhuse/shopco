import classNames from "classnames";
import React from "react";

export default function Button({
  title,
  onClick,
  size,
  className,
  children,
  ...props
}) {
  const buttonTitle = title || children || "Click Me";
  const buttonSize = {
    md: "px-10 py-3",
    lg: "px-14 py-4 text-lg",
    sm: "px-6 py-2 text-sm",

  }
  const defaultButtonStyle =
    "px-4 py-2 bg-blue-500  rounded hover:bg-blue-600 rounded-full transition";

  return (
    <button
      onClick={onClick}
      {...props}
      className={classNames(defaultButtonStyle, buttonSize[size], className)}
    >
      {buttonTitle}
    </button>
  );
}
