import React, { useEffect, useState } from "react";
// icons
import Wrapper from "./Customselect.styled";
import { AnimatePresence, motion } from "framer-motion";

function Customselect({ options, dropdownIcon, className, style }) {
  const [screen, setScreen] = useState({
    label: "",
    value: "",
  });
  const [dropdown, setDropdown] = useState(false);
  //   set default value
  useEffect(() => {
    options.forEach((option) => {
      if (option.default === true) {
        setScreen({ ...options, label: option.label, value: option.value });
      }
    });
  }, [options]);

  // set display value
  function handleClick(optionValue) {
    options.forEach((item) => {
      item.default = false;
      if (item.value === optionValue) {
        item.default = true;
        setScreen({
          ...screen,
          label: item.label,
          value: item.value,
        });
      }
    });
    setDropdown(false);
  }
  // set blur function
  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const variants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      y: [50, 0],
      opacity: [0, 1],
      transition: { duration: 0.5 },
    },
    exit: {
      y: [0, 50],
      opacity: [1, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <Wrapper>
      <div className="select lato-font" onBlur={handleBlur}>
        <button
          className={`value-container ${className}`}
          onClick={() => setDropdown(!dropdown)}
          style={style}
        >
          <p className="value">{screen.label}</p>
          <p className="icon">{dropdownIcon}</p>
        </button>
        <AnimatePresence>
          {dropdown && (
            <motion.div
              className="dropdown"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={variants}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleClick(option.value)}
                  className={option.default ? "selected" : ""}
                  style={{ margin: "5px", fontFamily: "Lato" }}
                >
                  <span style={option.style}>{option.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}

export default Customselect;
