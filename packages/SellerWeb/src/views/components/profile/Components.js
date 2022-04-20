import styled from 'styled-components'
import { Switch } from '../Style'
import { BannerEditIcon, AddPhoto } from '../AllImages'

const ProfileBanner = ({
    edit,
    bgImg,
    avatar,
}) => {
    return (
        <ProfileBannerStyled style={{ backgroundImage: `url(${bgImg})` }} className={edit && 'edit'}>
            {edit ?
                <>
                    <div className="edit-avatar center">
                        <img src={avatar} alt="avatar" />
                        <input type="file" />
                        <AddPhoto className="add-icon" />
                    </div>
                    <div className="edit-button-container">
                        <BannerEditIcon />
                        <input type="file" />
                    </div>
                </> :
                <img src={avatar} alt="avatar" className="avatar" />
            }
        </ProfileBannerStyled>
    )
}

const ProfileBannerStyled = styled.div`
    position: relative;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: -20px -20px 70px -20px;
    padding: 10px 20px 20px 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &.edit {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .edit-button-container {
        position: relative;
        z-index: 10;
        width: max-content;
        input {
            position: absolute;
            opacity: 0;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
    }
    .avatar {
        position: absolute;
        bottom: -50px;
        left: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 5px solid #FFFFFF;
        background-color: #FFFFFF;
        object-fit: cover;
    }
    .edit-avatar {
        position: absolute;
        bottom: -50px;
        left: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 5px solid #FFFFFF;
        background-color: #FFFFFF;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        input {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
        }
        .add-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }
    }
`;

const ToggleBtn = ({ name, onchange, checked, label }) => {
    return (
        <div className="d-flex align-items-center">
            <ToggleBtnStyled>
                <input
                    type="checkbox"
                    name={name}
                    onChange={onchange}
                    defaultChecked={checked}
                />
                <span className="slider"></span>
            </ToggleBtnStyled>
            <ToggleLabel>{label}</ToggleLabel>
        </div>
    )
}

const ToggleBtnStyled = styled(Switch)`
    z-index: 10;
    width: 51px;
    height: 31px;
    .slider {
        background-color: #78788029;
        &::before {
            bottom: 1.5px;
        }
    }
    input:checked + .slider {
        background-color: #34C759;
    }
    input:checked + .slider:before {
        transform: translateX(19px);
    }
`;

const ToggleLabel = styled.label`
    width: 46px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
    color: #4C6870;
    margin-left: 12px;
`;

export {
    ProfileBanner,
    ToggleBtn,
}