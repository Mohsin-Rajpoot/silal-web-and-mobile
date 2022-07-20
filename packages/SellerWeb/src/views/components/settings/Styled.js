import styled from "styled-components";

const Wrapper = styled.div``;

const SettingBtn = styled.button`
  background: #ffffff;
  border-radius: 5px;
  border: none;
  text-align: left;
  height: 35px;
  width: 317px;
  padding: 8px 10px;
  font-family: "Lato";
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #002733;
  margin-bottom: 10px;

  .icon {
    margin-right: 10px;
  }
  .input {
    position: absolute;
    z-index: 2;
    right: 20px;
    position: relative;
  }
  &.red {
    color: #de350b;
  }
  .arrow {
    path {
      fill: #4c687080;
    }
  }
  span {
    color: #4c687080;
  }
`;

export { Wrapper, SettingBtn };
