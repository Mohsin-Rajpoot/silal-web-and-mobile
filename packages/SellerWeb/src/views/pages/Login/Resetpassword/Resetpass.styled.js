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
      font-size: 17px;
      font-weight: bold;
    }
    .form {
      margin-top: 20px;
      label {
        font-size: 15px;
        font-weight: 700;
        color: #4c6870;
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
