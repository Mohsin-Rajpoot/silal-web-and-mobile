import styled from "styled-components";

const Wrapper = styled.div`
  .select {
    width: 100%;
    position: relative;
    font-family: "Lato";
  }
  .icon {
    margin-left: 10px;
  }
  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    padding: 7px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid rgba(204, 212, 214, 0.5);
    border-radius: 5px;
    box-shadow: 0px 8px 12px rgba(0, 39, 51, 0.12);
    z-index: 99;
    font-family: "Lato";
  }
  button {
    width: 100%;
    border: none;
    background: #ffffff;
    color: rgba(17, 12, 12, 0.747);
    font-size: 13px;
    cursor: pointer;
    padding: 12px 0;
    border-radius: 5px;
    font-family: "Lato";
  }
  button:hover {
    background: #f2f4f5;
  }
  .value-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13x;
    background: #ffffff;
    padding: 15px;
    border: 1px solid #504f4f3d;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    font-family: "Lato";
  }
  .value-container:hover {
    background: transparent;
  }
  .selected {
    color: #05ae4b;
  }
`;

export default Wrapper;
