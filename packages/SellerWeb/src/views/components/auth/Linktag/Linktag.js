import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Linktag.styled";

const Linktag = ({
  text,
  primary,
  textcolor,
  onClick,
  blockitem,
  to,
  className,
}) => {
  return (
    <Wrapper
      primary={primary}
      textcolor={textcolor}
      onClick={onClick}
      blockitem={blockitem}
      className={className}
    >
      <Link to={to}>{text}</Link>
    </Wrapper>
  );
};

export default Linktag;
