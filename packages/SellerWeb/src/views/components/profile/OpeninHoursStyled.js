import styled from 'styled-components'

const Wrapper = styled.div`
    .hours-select {
        width: 150px;
        font-family: 'Lato';
        .css-1s2u09g-control,
        .css-1pahdxg-control {
            background-color: #F2F4F5;
            border: none;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #002733;
            .css-1okebmr-indicatorSeparator {
                display: none;
            }
        }
    }
`;

const ToLabel = styled.h5`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.408px;
    color: #002733;
    margin: 0 20px;
`;

export {
    Wrapper,
    ToLabel
}