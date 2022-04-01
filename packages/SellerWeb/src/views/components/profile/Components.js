import styled from 'styled-components'

const ProfileBanner = ({
    bgImg,
    location,
    rName,
    slogan,
}) => {
    return (
        <ProfileBannerStyled style={{ backgroundImage: `url(${bgImg})` }}>
            <span className="location lato">{location}</span>
            <h1 className="poppins">{rName}</h1>
            <p className="lato">{slogan}</p>
        </ProfileBannerStyled>
    )
}

const ProfileBannerStyled = styled.div`
    position: relative;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    padding: 10px 20px 20px 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 250px;
        background: linear-gradient(180deg, rgba(34, 38, 39, 0) 65.1%, #222627 100%);
        border-radius: 6px;
    }
    .location {
        z-index: 10;
        position: absolute;
        top: 10px;
        right: 20px;
        padding: 5px 10px;
        position: absolute;
        background: linear-gradient(92.09deg, rgba(0, 0, 0, 0.3) -5.21%, rgba(255, 255, 255, 0) 105.91%, rgba(0, 0, 0, 0) 105.91%);
        backdrop-filter: blur(20px);
        border-radius: 5px;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.35px;
        color: #FFFFFF;
    }
    h1 {
        position: relative;
        z-index: 10;
        font-weight: 700;
        font-size: 25px;
        line-height: 38px;
        color: #FFFFFF;
        margin: 0;
    }
    p {
        position: relative;
        z-index: 10;
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        color: #FFFFFF;
        margin: 0;
    }
`;

export {
    ProfileBanner,
}