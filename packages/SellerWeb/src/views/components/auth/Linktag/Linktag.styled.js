import styled from "styled-components";

const Wrapper = styled.div`
  a {
    text-decoration: none;
    width: 100%;
    padding: 11px 15px;
    color: ${(props) => (props.textcolor ? "#ffffff" : "#4C6870")};
    background: ${(props) => (props.primary ? "#5ab3a8" : "#F5F5F5")};
    display: ${(props) => (props.blockitem ? "block" : "inline-block")};
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    font-family: "Lato", sans-serif;
    border: none;
    outline: none;
    border-radius: 4px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.3s ease;
    :hover {
      background: transparent;
      color: #5ab3a8;
      border: 1px solid #5ab3a8;
    }
  }
`;

export default Wrapper;
