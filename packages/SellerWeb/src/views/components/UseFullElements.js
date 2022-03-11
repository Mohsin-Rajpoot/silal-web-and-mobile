import React from "react"
import styled from "styled-components"
import {
    FilterIcon
} from './AllImages'

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

const TableSpan = ({
    text,
    classN
}) => {
    return (
        <TableSpanStyled className={classN}>
            {text}
        </TableSpanStyled>
    )
}

const TableSpanStyled = styled.span`
    border-radius: 5px;
    padding: 3px 10px;
    font-weight: 500;
    font-size: 11px;
    &.bank {
        background: #FFFAE6;
        color: #FF8B00;
    }
    &.credit {
        background: #E6FCFF;
        color: #008DA6;
    }
    &.delivery {
        background: #0065FF;
        color: white;
    }
    &.cash {
        background: #E3FCEF;
        color: #006644;
    }
    &.takeaway {
        background: #6554C0;
        color: white;
    }
    &.completed {
        background: #36B37E;
        color: white;
    }
    &.cancelled {
        background: #FF5630;
        color: white;
    }
`;

const FilterBtn = ({
    click
}) => {
    return (
        <FilterBtnStyled onClick={click}>
            <FilterIcon />
            Filters
        </FilterBtnStyled>
    )
}

const FilterBtnStyled = styled.button`
    display: flex;
    align-items: center;
    padding: 0 27px;
    height: 40px;
    font-weight: 500;
    font-size: 15px;
    color: #4C6870;
    background-color: white;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    svg {
        margin-right: 13px;
    }
`;

const DetailText = ({
    title,
    detail,
}) => {
    return(
        <DetailTextStyled>
            <span>{title}</span>
            <span>{detail}</span>
        </DetailTextStyled>
    )
}

const DetailTextStyled = styled.div`
    span {
        font-weight: 500;
        font-size: 15px;
        line-height: 120%;
        margin-bottom: 10px;
        margin-right: 10px;
        min-width: 105px;
        &:first-of-type {
            color: #CCD4D6;
        }
        &:last-of-type {
            color: #002733;
        }
    }
`;

export {
    RestaurantHeading,
    TableSpan,
    FilterBtn,
    DetailText,
}