import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  max-width: 700px;
  width: 100%;
  margin: auto;
  .top-row {
    .title {
      padding: 50px 0;
      text-align: center;
      h2 {
        font-size: 25px;
        font-weight: 700;
        color: #002733;
      }
    }
    .form {
      label {
        font-size: 15px;
        font-weight: 700;
        color: #4c6870;
        margin-top: 20px;
      }
      button {
        margin-top: 2px;
      }
    }
    .password-restriction {
      margin-top: 40px;
      h3 {
        margin-bottom: 13px;
        font-size: 15px;
        font-weight: 500;
      }
      p {
        font-size: 15px;
        font-weight: 500;
        color: #8d8e96;
        display: flex;
        align-items: center;
        line-height: 1.5;
        :last-child {
          span {
            :not(:first-child) {
              margin-right: 7px;
            }
          }
        }
        span {
          :first-child {
            margin-right: 10px;
          }
        }
        .valid {
          color: #5ab3a8;
          font-weight: bold;
        }
      }
      .valid {
        color: #5ab3a8;
        font-weight: bold;
      }
    }
  }
  .bottom-row {
    text-align: center;
    position: absolute;
    bottom: 68px;
    width: 100%;
    @media (max-height: 620px) {
      position: static;
      margin-top: 50px;
    }
  }
  .contains {
    color: #5ab3a8;
    font-weight: bold;
  }
`;

export default Wrapper;
