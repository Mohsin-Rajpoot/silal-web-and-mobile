import React from "react"
import styled from "styled-components"

const RestaurantHeading = ({
    heading,
    hours,
    location
}) => {
    return (
        <RestHeadStyled>
            <div className="d-flex align-items-center">
                <h1 className="dark-clr">{heading}</h1>
                <span className="text-white">{hours}</span>
            </div>
            <p className="f-medium">{location}</p>
        </RestHeadStyled>
    )
}

const RestHeadStyled = styled.div`
    h1 {
        font-weight: bold;
        font-size: 25px;
        color: #002733;
        margin: 0 12px 5px 0;
    }
    span {
        background: #8777D9;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 12px;
    }
    p {
        font-size: 13px;
        color: #809399;
        margin-bottom: 20px;
    }
`;

export {
    RestaurantHeading,
}