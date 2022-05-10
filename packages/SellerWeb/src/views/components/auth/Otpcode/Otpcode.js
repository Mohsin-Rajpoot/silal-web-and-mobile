import React from "react";
import Wrapper from "./Otpcode.styled";
import { motion } from "framer-motion";

function Otpcode({ num, onChange }) {
  // input animation
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
          onChange={onChange}
          value={num[item]}
        />
      ))}
    </Wrapper>
  );
}

export default Otpcode;
