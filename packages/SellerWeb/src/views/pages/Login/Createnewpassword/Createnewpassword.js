import React, { useState } from "react";
import Wrapper from "./Createnewpassword.styled";
import Linktag from "@SilalApp/sellerweb/src/views/Components/auth/Linktag/Linktag";
import FormControl from "@SilalApp/sellerweb/src/views/Components/auth/FormControl/FormControl";
import Gobackbuton from "@SilalApp/sellerweb/src/views/Components/auth/Gobackbutton/Gobackbuton";
import { motion } from "framer-motion";
// import icons
import { Icon } from "@iconify/react";

function Createnewpassword() {
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [password, setPassword] = useState({
    pass: "",
    cpass: "",
  });
  // password validation states
  const [char, setChar] = useState(false);
  const [letter, setLetter] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  // password validation
  function handleKeyup() {
    // characters validation 8 -- 20
    let v = password.pass.length;
    if (v >= 8 && v <= 20) {
      setChar(true);
    } else {
      setChar(false);
    }
    // letter validation upper or lower case
    let l = /[a-zA-z]/g;
    if (password.pass.match(l)) {
      setLetter(true);
    } else {
      setLetter(false);
    }
    // number validation 0-9
    let n = /[0-9]/g;
    if (password.pass.match(n)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    // special characters validation
    var s = /[!@#$%^&*)(+=._-]/g;
    if (password.pass.match(s)) {
      setSpecialChar(true);
    } else {
      setSpecialChar(false);
    }
  }

  // setting the input value to the state
  function handleChange(e) {
    setPassword({ ...password, [e.target.id]: e.target.value });
  }

  // input field animate
  const animate = {
    y: [100, 0],
    opacity: [0, 1],
    transition: { duration: 1 },
  };
  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="top-row">
        <div className="title">
          <h2 className="poppins-font">Create a new password</h2>
        </div>
        <motion.div className="form lato-font" animate={animate}>
          <FormControl
            labelValue="Password"
            htmlFor="pass"
            input={true}
            inputValue={password.pass}
            type={showPassword ? "password" : "text"}
            onChange={handleChange}
            onKeyUp={handleKeyup}
            placeholder="Enter password"
            passwordType={true}
            onClick={() => setShowPassword(!showPassword)}
          />
          <FormControl
            labelValue="Confirm Password"
            htmlFor="cpass"
            input={true}
            inputValue={password.cpass}
            type={showPassword2 ? "password" : "text"}
            onChange={handleChange}
            placeholder="Enter password"
            passwordType={true}
            onClick={() => setShowPassword2(!showPassword2)}
          />
        </motion.div>
        {/* password restriction section  */}
        <div className="password-restriction">
          <h3 className="lato-font">Your password should contain:</h3>
          <p className="restriction1">
            <span>
              <Icon icon="akar-icons:circle-check" />
            </span>
            <span className={char ? "contains" : ""}>8 to 20 characters</span>
          </p>
          <p className="restriction1">
            <span>
              <Icon icon="akar-icons:circle-check" />
            </span>
            <span className={letter ? "contains" : ""}>Letters</span>,
            <span className={number ? "contains" : ""}> numbers,</span>
            <span className={specialChar ? "contains" : ""}>
              special characters
            </span>
          </p>
        </div>
      </div>
      <div className="bottom-row">
        <div className="form-submit">
          <Linktag
            text="Change password"
            primary={true}
            textcolor={true}
            blockitem={true}
            to="/emailverifycode"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Createnewpassword;
