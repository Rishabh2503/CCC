import React, { useState } from "react";
import { useRouter } from "next/router";
const CustomButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    margin: "0em",
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "0.625em",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",
    width: "202px",
    height: "64px",
    padding: "11px 21px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexShrink: "0",
    transition: "color 0.5s",
  };

  const transformStyle = {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "white",
    transform: isHovered
      ? "skewX(-45deg) scale(1, 1)"
      : "skewX(-45deg) scale(0, 1)",
    transition: "all 0.5s",
    zIndex: "-1",
  };
  const handleClick = () => {
    router.push("/register");
  };
  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onClick={handleClick}>
      Register Now!
      <span style={transformStyle}></span>
    </button>
  );
};

export default CustomButton;
