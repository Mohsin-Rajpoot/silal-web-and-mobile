import React from "react";
import Wrapper from "./Snackbar.styled";
// import icons
import { Icon } from "@iconify/react";

function Snackbar({ text, onClick }) {
  return (
    <Wrapper>
      <span>
        <Icon icon="akar-icons:circle-check-fill" />
      </span>
      <p>{text}</p>
      <button onClick={onClick}>OK</button>
    </Wrapper>
  );
}

export default Snackbar;
