import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
`;
export default Wrapper;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.8;
  color: #002733;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #05ae4b;
  }
  .special {
    color: #ccd4d6;
    margin-left: 7px;
  }
`;

export const Input = styled.div`
  position: relative;
  input {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 13px;
    font-size: 17px;
    font-weight: 400;
    color: #002733;
    width: 100%;
    outline: none;
    ::placeholder {
      color: #ccd4d6;
    }
    :hover {
      border: 1px solid #05ae4b;
      box-shadow: -1px 0px 8px 3px rgb(90 179 168 / 62%);
    }
  }
  button {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    outline: none;
    font-size: 25px;
    background: transparent;
    cursor: pointer;
    color: #ccd4d6;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  min-height: 100px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  color: #002733;
  padding: 10px;
  font-family: "Times New Roman", Times, serif;
`;
