import styled from 'styled-components'
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

export {
    ProfileBanner,
}