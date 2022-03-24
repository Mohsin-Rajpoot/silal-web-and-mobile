import React from "react"
import styled from "styled-components"
import {
    FilterIcon,
    XIcon,
    SearchIcon,
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
            <p className="f-medium lato">{location}</p>
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
        text-transform: uppercase;
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
    min-height: 17px;
    display: block;
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
    &.theme-clr {
        background-color: var(--theme-clr);
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
    classes
}) => {
    return (
        <DetailTextStyled className={classes}>
            <span>{title}</span>
            <span>{detail}</span>
        </DetailTextStyled>
    )
}

const DetailTextStyled = styled.div`
    display: flex;
    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        margin-bottom: 10px;
        min-width: 105px;
        display: block;
        &:first-of-type {
            color: #CCD4D6;
            margin-right: 10px;
        }
        &:last-of-type {
            color: #002733;
            flex: 1;
        }
    }
`;

const QtyDetail = ({
    qty,
    detail
}) => {
    return (
        <QtyDetailStyled>
            <span>{qty}</span>
            <XIcon />
            <span>{detail}</span>
        </QtyDetailStyled>
    )
}

const QtyDetailStyled = styled.div`
    display: flex;
    span {
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        letter-spacing: -0.408px;
        color: #002733;
        margin: 0 0 10px 0;
        &:last-of-type {
            flex: 1;
        }
    }
    svg {
        margin: 6px 13px 10px 13px;
    }
`;

const SearchWindow = ({
    classN,
    ID,
}) => {
    return (
        <SearchWindowStyled className={classN}>
            <SearchIcon />
            <input
                type="text"
                id={ID}
                placeholder="Search"
            />
        </SearchWindowStyled>
    )
}

const SearchWindowStyled = styled.div`
    width: 100%;
    height: 30px;
    padding: 7px 0 7px 10px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border: 1px solid rgba(204, 212, 214, 0.5);
    border-radius: 5px;
    display: flex;
    align-items: center;
    svg {
        width: 17px;
        height: 17px;
    }
    input {
        border: none;
        padding-left: 11px;
        height: 28px;
        flex: 1;
        font-weight: 500;
        font-size: 13px;
        line-height: 125%;
        color: #002733;
        &::placeholder {
            color: #B3BEC2;
        }
    }
`;

export {
    RestaurantHeading,
    TableSpan,
    FilterBtn,
    DetailText,
    QtyDetail,
    SearchWindow,
}