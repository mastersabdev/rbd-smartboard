import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1320px] max-2xl:max-w-[90%] mx-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
