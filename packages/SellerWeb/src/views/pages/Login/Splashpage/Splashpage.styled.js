import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #05ae4b;
  height: 100%;
  .title {
    text-align: center;
    color: #ffffff;
    .whitebox {
      width: 351px;
      height: 351px;
      border: none;
      border-radius: 30px;
      background: #ffffff;
    }
    h2 {
      font-size: 68px;
      font-weight: 700;
      font-family: "Poppins", sans-serif;
      margin-top: 132px;
      margin-bottom: 20px;
    }
    p {
      font-size: 38px;
      font-weight: 400;
      font-family: "Lato", sans-serif;
    }
  }
`;

export default Wrapper;
