import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  input {
    width: 45px;
    height: 55px;
    border: 1px solid #cdcdd0;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    outline: none;
    :focus {
      border: 1px solid #36b27d;
    }
    :not(:first-child) {
      margin-left: 10px;
    }
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default Wrapper;
