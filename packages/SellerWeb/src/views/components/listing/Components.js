import React from "react"
import Styled from "styled-components"
import { selectArrow } from '../AllImages'

const SelectDiv = ({ text, click }) => {
    return (
        <SelectDivStyled onClick={click}>
            {text}
        </SelectDivStyled>
    )
}

const SelectDivStyled = Styled.div`
    background-image: url(${selectArrow});
    background-repeat: no-repeat;
    background-position: right 15px center;
    appearance: none;
    padding: 9px 10px 8px;
    width: 100%;
    height: 39px;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.408px;
    color: #00273333;
    font-family: 'lato';
    cursor: pointer;
`;

export {
    SelectDiv
}