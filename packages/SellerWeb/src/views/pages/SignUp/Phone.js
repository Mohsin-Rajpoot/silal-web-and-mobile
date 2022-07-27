import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import FormControl from "../../components/auth/FormControl/FormControl";
import Gobackbuton from "../../components/auth/Gobackbutton/Gobackbuton";
import * as userAction from "@SilalApp/common/Store/SellerReducers/User/actions";
import { useDispatch } from "react-redux";
import CountrySelectForm from "../../components/CountrySelectForm/CountrySelectForm";

function Loginpage() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const state = useSelector
  const [formValue, setFormValue] = useState("");
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // animation phone number field
  const animate1 = {
    x: [-100, 0],
    opacity: [0, 1],
    transition: { duration: 1 },
  };

  const setPhone = (e) => {
    if (!isNaN(e.target.value)) {
      setFormValue(e.target.value);
    }
  };

  const sendToOtp = () => {
    if (!formValue) {
      setError("Please Enter Phone Number!");
      return;
    }
    let data = selectedCountry.value + formValue;
    let payload = {
      data,
      cb: (res) => {
        console.log("---------------------------");
        console.log(res);
        if (res.code === 201) {
          if (res.success) {
            setTimeout(() => {
              setError(data.msg);
            }, 1000);
            history.push({
              pathname: "/otp",
              state: {
                phoneNo: selectedCountry.value + formValue,
                previousPage: "signup",
              },
            });
          } else {
            setError(data.msg);
          }
        } else {
          setError("SomeThing Went Wrong!");
        }
      },
      failure: (err) => {
        setError(err.msg);
        console.log("Failure Error: ", err);
        if (err.code === 429) {
          setTimeout(() => {
            history.push({
              pathname: "/otp",
              state: { phoneNo: "+92" + formValue, previousPage: "signup" },
            });
          }, 2000);
        }
      },
    };
    dispatch(userAction.userSignUpSaga(payload));
  };
  // animation email input field

  return (
    <Wrapper>
      <div className="go-back-button">
        <Gobackbuton primaryIcon={true} />
      </div>
      <div className="text-center">
        <div className="top-row">
          <div className="title">
            <h1>Sign Up</h1>
          </div>
          <Button className="btn2">Phone Number</Button>
          <div className="form">
            <motion.div className="form-control-mobile" animate={animate1}>
              <FormControl labelValue="Phone Number" htmlFor="PhoneNumber" />
              <div className="row ">
                <div className="col1 col">
                  <CountrySelectForm setSelectedCountry={setSelectedCountry} />
                </div>
                <div className="col2 col">
                  <FormControl
                    style={{ border: "none" }}
                    input={true}
                    inputValue={formValue}
                    type="text"
                    htmlFor="PhoneNumber"
                    onChange={(e) => setPhone(e)}
                  />
                </div>
                {error !== "" ? (
                  <span className="text-danger">{error}</span>
                ) : null}
              </div>
            </motion.div>
          </div>
        </div>
        {/* <Link to="/otp"> */}
        <Button onClick={sendToOtp} className="btn3 next">
          Next
        </Button>
        {/* </Link> */}
        <div>
          <h6>
            By signing up, you agree to the{" "}
            <span className="colored">Terms of Service</span> and
            <span className="colored"> Privacy Policy </span>
          </h6>
        </div>
      </div>
    </Wrapper>
  );
}

export default Loginpage;

const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;
  font-family: "Lato", sans-serif;
  position: relative;
  margin: auto;
  .top-row {
    .title {
      padding: 50px 0;
      h1 {
        text-align: center;
        font-size: 25px;
        font-weight: bold;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .form-control-mobile {
        margin-top: 20px;
        label {
          font-size: 15px;
          font-weight: 700;
          color: #4c6870;
        }
        .row {
          border: 1px solid #ededed;
          border-radius: 10px;
          margin-top: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          .col1 {
            max-width: 150px;
            width: 100%;
            .value-container {
              border-right: none;
              border-radius: 5px 0px 0px 5px;
            }
          }
          .col2 {
            width: 100%;
            input {
              border-radius: 0px 5px 5px 0px;
            }
          }
        }
      }
      /* email form design  */
      .form-control-email {
        .row {
          margin-top: 20px;
          label {
            font-size: 15px;
            font-weight: 700;
            color: #4c6870;
          }
        }
      }
    }
  }

  .next {
    margin-top: 200px;
  }
  .btn2 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 60%;
  }
  .btn3 {
    background: #05ae4b;
    color: #ffffff;
    border: none;
    margin: 5px;
    width: 80%;
    margin-top: 300px;
  }
  h6 {
    margin: 5px;
    font-weight: 500;
    font-size: 15px;
    color: #4c7061;
  }
  .colored {
    font-weight: 500;

    color: #05ae4b;
  }
`;
