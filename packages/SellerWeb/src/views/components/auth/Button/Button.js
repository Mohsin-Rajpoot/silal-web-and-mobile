import React from "react";
import Wrapper from "./Button.styled";

function Button({ text, primary, textcolor, onClick, className, bg, width }) {
  return (
    <Wrapper
      primary={primary}
      textcolor={textcolor}
      bg={bg}
      onClick={onClick}
      className={className}
      width={width}
    >
      {text}
    </Wrapper>
  );
}

export default Button;
