import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 459px;
  width: 100%;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 5px 10px -2px rgba(195, 204, 207, 0.25);
  span {
    color: #36b27d;
    font-size: 15px;
    font-weight: 500;
  }
  p {
    margin: 0 15px;
    font-size: 15px;
    font-weight: 500;
    color: #002733;
  }
  button {
    font-size: 15px;
    font-weight: 700;
    color: #018ffb;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
`;

export default Wrapper;
