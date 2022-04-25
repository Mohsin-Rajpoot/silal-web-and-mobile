import styled from 'styled-components'
import { ImgIcon, XIcon } from '../AllImages'

const Wrapper = styled.div`
    
`;

const AttachedFiles = ({ name }) => {
    return (
        <AttachedFilesSyled>
            <div className="d-flex">
                <ImgIcon />
                <p>{name}</p>
            </div>
            <XIcon className="del" />
        </AttachedFilesSyled>
    )
}

const AttachedFilesSyled = styled.div`
    background: #F2F4F5;
    border-radius: 8px;
    padding: 12px 12px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        margin-right: 8px;
    }
    p {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.408px;
        color: #4C6870;
        margin: 0;
    }
    .del {
        cursor: pointer;
        path {
            fill: #FB5C5C;
        }
    }
`;

export {
    Wrapper,
    AttachedFiles,
}