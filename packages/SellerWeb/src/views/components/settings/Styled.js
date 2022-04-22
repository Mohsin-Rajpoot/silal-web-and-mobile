import styled from 'styled-components'

const Wrapper = styled.div`
`;

const SettingBtn = styled.button`
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    text-align: left;
    height: 35px;
    width: 317px;
    padding: 8px 10px;
    font-family: 'Lato';
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #002733;
    margin-bottom: 10px;
    .icon {
        margin-right: 10px;
    }
    &.red {
        color: #DE350B;
    }
    .arrow {
        path {
            fill: #4C687080;
        }
    }
    span {
        color: #4C687080;
    }
`;

export {
    Wrapper,
    SettingBtn,
}