import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  font-family: "Lato", sans-serif;
  position: relative;
  max-width: 700px;
  width: 100%;
  margin: auto;
  .top-row {
    text-align: center;
    .title {
      padding: 50px 0;
      font-size: 25px;
      font-weight: bold;
    }
    .otp-code {
      h2 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      p {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.4;
        :last-child {
          margin-bottom: 50px;
        }
      }
    }
    .resend-otp {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      button {
        font-size: 15px;
        font-weight: 500;
        color: #4c6870;
        border: none;
        background: transparent;
        padding-bottom: 3px;
        border-bottom: 1px solid #000000;
        cursor: pointer;
      }
    }
  }
  .bottom-row {
    text-align: center;
    position: absolute;
    bottom: 68px;
    width: 100%;
    position: static;
    margin-top: 50px;
    // @media (max-height: 620px) {
    // }
  }
`;

export default Wrapper;
