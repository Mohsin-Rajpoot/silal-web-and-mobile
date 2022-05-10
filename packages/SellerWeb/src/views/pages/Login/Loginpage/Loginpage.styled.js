import styled from "styled-components";

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
    .buttonGroups {
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 3px;
      background: #f5f5f5;
      border-radius: 5px;
      button {
        width: 50%;
        transition: 0.3s ease;
        :hover {
          box-shadow: 1px 3px 18px rgba(0, 0, 0, 0.11);
        }
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
  .bottom-row {
    text-align: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
    @media (max-height: 620px) {
      position: static;
      margin-top: 50px;
    }
    .forgot-pass-text {
      font-size: 15px;
      font-weight: 500;
      margin-top: 15px;
      margin-bottom: 20px;
      a {
        text-decoration: none;
        margin-left: 10px;
        font-weight: bold;
        color: #5ab3a8;
      }
    }
  }
`;

export default Wrapper;
