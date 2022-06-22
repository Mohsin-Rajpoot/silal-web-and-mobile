import styled from "styled-components";
import { SettingBtn } from "../settings/Styled";

const Wrapper = styled.div`
  .logo {
    width: 107px;
    height: 107px;
    background: #05ae4b;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  h1 {
    font-family: "Lato";
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
    color: #002733;
    margin-bottom: 5px;
  }
  h6 {
    font-family: "Lato";
    font-weight: 500;
    font-size: 13px;
    line-height: 125%;
    color: rgba(76, 104, 112, 0.5);
    margin-bottom: 30px;
  }
`;

const ButtonLink = styled(SettingBtn)``;

export { Wrapper, ButtonLink };
