import styled from "styled-components"

const CardStyled = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 5px 10px -2px rgba(196, 214, 220, 0.25);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    &.bg-grey {
        background-color: #E5EAEB;
    }
    &.bg-blue {
        background-color: #4C6870;
    }
    &.current-order-card-height {
        min-height: 600px;
        height: calc(100vh - 100px);
        overflow-y: auto;
    }
`;

const Heading = styled.h1`
    margin-bottom: 13px;
    font-weight: bold;
    font-size: 18px;
    color: #002733;
`;

const Button = styled.button`
    background: #5AB3A8;
    border-radius: 5px;
    border: none;
    padding: 0 20px;
    min-width: 100px;
    height: 40px;
    white-space: nowrap;
    color: white;
    font-weight: 600;
    font-size: 15px;
    transition: 0.2s all;
    &:hover {
        background: rgba(90, 179, 169, 0.9);
    }
`;

const ButtonText = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    height: 40px;
    white-space: nowrap;
    color: var(--theme-clr);
    font-weight: 600;
    font-size: 15px;
    transition: 0.2s all;
`;

const TableStyled = styled.div`
    .rdt_Table {
        padding: 20px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    .rdt_TableHeadRow {
        background: #F2F4F5;
        box-shadow: 0px 1px 1px rgba(0, 39, 51, 0.25);
    }
    .rdt_TableRow {
        border-color: rgba(0, 39, 51, 0.08);
        &:hover {
            background: rgba(90, 179, 168, 0.15);
        }
    }
    .rdt_TableCell {
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .rdt_Pagination {
        background-color: #F4F7F8;
        border-top: 0;
        font-size: 15px;
        color: #4C6870;
        button {
            &:disabled {
                pointer-events: none;
            }
            &:hover {
                background-color: #4C6870;
                svg {
                    fill: white;
                }
            }
        }
    }
    .stock-status {
        padding: 3px 9px;
        border-radius: 5px;
        font-weight: 500;
        font-size: 11px;
        color: white;
        &.low {
            background: #FFAB00;
        }
        &.out {
            background: #FF5630;
        }
    }
    .action-btn {
        border: none;
        background-color: transparent;
        padding: 0 10px;
        margin: 0  10px;
        &:hover {
            svg, path {
                fill: var(--theme-clr);
            }
        }
    }
`;

export {
    CardStyled,
    Heading,
    Button,
    ButtonText,
    TableStyled
}