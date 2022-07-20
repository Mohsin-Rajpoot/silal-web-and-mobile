import styled from "styled-components";
import { Button } from "react-bootstrap";
import Gobackbuton from "../../components/auth/Gobackbutton/Gobackbuton";
import FormInput from "../settings/Common/FormInput";
import { useHistory } from "react-router-dom";

function SignUpPassword() {
  // animation email input field
  // const history = useHistory();
  // console.log(history);
  // alert(3);
  // console.log("hi there");
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
          <Button className="btn2">Phone no</Button>
        </div>

        <div className="inputs">
          <FormInput label={"Email"} placeholder={"email.example@gmail.com"} />
          <FormInput
            label={"Password"}
            type={"password"}
            placeholder={"Enter password"}
          />
          <FormInput
            label={"Confirm password"}
            placeholder={"Enter password  again"}
          />
        </div>

        <Button className="btn1">Skip</Button>
        <Button className="btn3 next">Next</Button>
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

export default SignUpPassword;

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
          border-radius:10px;
          margin-top:5px;
          display: flex;ededed
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
}
.btn1{
    //   margin-top: 300px;
    color: #05ae4b;
      margin: 5px;
    width: 80%;
    border:none;
    // margin-top: 300px;
    background:none;

  }
  
  h6{
    margin:5px;
font-weight: 500;
font-size: 15px;
color: #4C7061;
  }
  .colored{
font-weight: 500;

    color:#05AE4B;
  }

  .inputs{
    
  }
`;
