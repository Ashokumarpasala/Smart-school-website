import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[11px]" };
const variants = {
  outline: {
    deep_purple_A200:
      "border border-deep_purple-A200 border-solid text-indigo-900_01",
  },
  fill: {
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const sizes = { xs: "p-px", sm: "p-[5px]", md: "p-[15px]", lg: "p-6 sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["deep_purple_A200", "white_A700"]),
};

export { Button };
