import { React, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function OtpVerification() {
  // input animation

  // controlled input
  const [num, setNum] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  // controled input value change with auto focus
  function handleChange(e) {
    let v = e.target.value;
    if (v.length > 0) {
      let next = e.target.nextElementSibling;
      if (next) {
        setNum({ ...num, [e.target.id]: v });
        next.focus();
      } else {
        setNum({ ...num, [e.target.id]: v });
        e.target.blur();
      }
    }
  }

  const inputAnimate = {
    y: [0, -50, -20],
    scale: [1, 1.1, 1],
  };
  return (
    <Wrapper>
      {Object.keys(num).map((item, index) => (
        <motion.input
          key={index}
          type="number"
          id={item}
          animate={inputAnimate}
          transition={{ delay: (index * 10) / 80 }}
          onChange={handleChange}
          value={num[item]}
        />
      ))}
    </Wrapper>
  );
}
export default OtpVerification;
const Wrapper = styled.div`
  padding-top: 50px;
  text-align: center;
  input {
    width: 45px;
    height: 55px;
    border: 1px solid #cdcdd0;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    outline: none;
    :focus {
      border: 1px solid #36b27d;
    }
    :not(:first-child) {
      margin-left: 10px;
    }
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
