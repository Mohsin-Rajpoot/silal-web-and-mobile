import styled from "styled-components";

const Wrapper = styled.button`
  padding: 11px 15px;
  color: ${(props) => (props.textcolor ? "#ffffff" : "#4C6870")};
  background: ${(props) => (props.primary ? "#05AE4B" : "#F5F5F5")};
  background-color: ${(props) => props.bg};
  width: ${(props) => props.width};
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  font-family: "Lato", sans-serif;
  border: none;
  outline: none;
  border-radius: 4px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Wrapper;
