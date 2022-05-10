import React from "react";
import Wrapper from "./Gobackbutton.styled";
import { useNavigate } from "react-router-dom";
// import icons
import { Icon } from "@iconify/react";

function Gobackbuton({ primaryIcon }) {
  const Navigate = useNavigate();
  function handleClick() {
    Navigate(-1);
  }

  return (
    <Wrapper onClick={handleClick}>
      {primaryIcon ? (
        <Icon icon="akar-icons:chevron-left" />
      ) : (
        <Icon icon="bi:arrow-left" />
      )}
    </Wrapper>
  );
}

export default Gobackbuton;
