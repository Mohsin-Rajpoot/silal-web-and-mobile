import { createGlobalStyle } from "styled-components"
import {
    collpaseArrow
} from './AllImages'

const GlobalStyle = createGlobalStyle`
:root {
    --dark-clr: #002733;
    --theme-clr: #5AB3A8;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    position: relative;
    background: #F4F7F8;
    color: var(--dark-clr);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
}
.theme-clr {
    color: var(--theme-clr);
}
.dark-clr {
    color: var(--dark-clr);
}
.f-elight {
    font-weight: 200;
}
.f-light {
    font-weight: 300;
}
.f-regular {
    font-weight: 400;
}
.f-medium {
    font-weight: 500;
}
.f-semibold {
    font-weight: 600;
}
.f-bold {
    font-weight: 700;
}
.f-ubold {
    font-weight: 800;
}
button {
    cursor: pointer;
}
input, textarea, select, button {
    outline: none !important;
}
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.flex-1 {
    flex: 1;
}
span {
    line-height: 1;
}
.react-date-picker__wrapper {
    min-width: 139px;
    height: 30px;
    padding: 0 10px;
    background: #F2F4F5;
    border: 1px solid #5AB3A8;
    border-radius: 5px;
    cursor: pointer;
    input {
        font-weight: 500;
        font-size: 13px;
        color: #4C6870;
        cursor: pointer;
    }
}
.react-calendar {
    width: 292px !important;
    height: 301px;
    padding: 28px 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 32, 51, 0.04), 0px 8px 24px rgba(0, 32, 51, 0.12);
    border-radius: 4px;
    border: none !important;
}
.react-calendar__year-view .react-calendar__tile, 
.react-calendar__decade-view .react-calendar__tile, 
.react-calendar__century-view .react-calendar__tile {
    padding: 16px 10px !important;
    border-radius: 5px;
}
.react-calendar__month-view__weekdays {
    font-size: 10px !important;
    color: #CCD4D6;
    text-decoration: none;
}
.react-calendar__tile {
    border-radius: 50%;
    color: #002733;
}
.react-calendar__tile--active {
    background-color: var(--theme-clr) !important;
    color: white !important;
}
.react-calendar__month-view__days__day--weekend {
    color: #002733 !important;
}
.hot-products-height {
    height: 600px;
    overflow-y: auto;
}
.mb-10 {
    margin-bottom: 10px;
}
.mb-5px {
    margin-bottom: 5px;
}
.offcanvas-header {
    padding: 30px 20px 18px 20px;
}
.offcanvas-body {
    padding: 0 20px 20px 20px;
}
.offcanvas-title {
    font-weight: 600;
    font-size: 19px;
    line-height: 28px;
    color: #002733;
}
hr {
    background-color: rgba(0, 39, 51, 0.4);
}
.accordion-button::after {
    background-image: url(${collpaseArrow}) !important;
    background-size: 13px;
    background-position: right center;
}
.offcanvas-end {
    width: 438px;
}
.offcanvas-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
        margin-left: 8px;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
    }
}
.btn-style {
    .react-date-picker__wrapper {
        padding: 0 10px;
        height: 40px;
        font-weight: 500;
        font-size: 15px;
        color: #4C6870;
        background-color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 10px;
    }
}
.react-date-picker__wrapper input {
    width: 100%;
}
`;

export default GlobalStyle;