import React from "react";

const sizeClasses = {
  txtRobotoMedium18: "font-medium font-roboto",
  txtLatoSemibold22: "font-lato font-semibold",
  txtLatoBold24WhiteA700: "font-bold font-lato",
  txtLatoRegular14Gray800: "font-lato font-normal",
  txtLatoHeavy36: "font-extrabold font-lato",
  txtLatoHeavy24: "font-extrabold font-lato",
  txtLatoHeavy24WhiteA700: "font-extrabold font-lato",
  txtLatoBold18: "font-bold font-lato",
  txtLatoBold64: "font-bold font-lato",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoSemibold18: "font-lato font-semibold",
  txtLatoBold24: "font-bold font-lato",
  txtLatoBold13: "font-bold font-lato",
  txtLatoBlack48Indigo90001: "font-black font-lato",
  txtLatoBlack48: "font-black font-lato",
  txtLatoRegular20: "font-lato font-normal",
  txtLatoLight18: "font-lato font-light",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoMedium20: "font-lato font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
