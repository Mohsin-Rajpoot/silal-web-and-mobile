import React from "react";
import Wrapper from "./Gobackbutton.styled";
import { useHistory } from "react-router-dom";
// import icons
import { Icon } from "@iconify/react";

function Gobackbuton({ primaryIcon }) {
  const history = useHistory();
  function handleClick() {
    history.goBack();
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
