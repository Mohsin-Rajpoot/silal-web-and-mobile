import { createGlobalStyle } from "styled-components"
import { collpaseArrow } from "./AllImages"

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
    /* font-family: 'Lato', sans-serif; */
    font-weight: 400;
    font-size: 14px;
}
.lato {
    font-family: 'Lato', sans-serif;
}
.poppins {
    font-family: 'Poppins', sans-serif;
}
.theme-clr {
    color: var(--theme-clr);
}
.dark-clr {
    color: var(--dark-clr) !important;
}
.f-elight {
    font-weight: 200;
}
.f-light {
    font-weight: 300;
}
.f-regular {
    font-weight: 400 !important;
}
.f-medium {
    font-weight: 500 !important;
}
.f-semibold {
    font-weight: 600;
}
.f-bold {
    font-weight: 700 !important;
}
.f-ubold {
    font-weight: 800;
}
.f-15 {
    font-size: 15px !important;
}
button {
    cursor: pointer;
}
input::placeholder {
    color: #CCD4D6;
}
input, textarea, select, button {
    outline: none !important;
}
input, textarea, select {
    font-family: 'Lato', sans-serif;
}
button {
    font-family: 'poppins';
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
.end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    min-height: 301px;
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
.dasboard-card-height {
    overflow-y: auto;
    height: calc(100vh - 285px);
    /* min-height: 450px; */
}
.review-card-height {
    overflow-y: auto;
    height: calc(100vh - 175px);
    min-height: 450px;
}
.content-height {
    overflow-y: auto;
    height: calc(100vh - 100px);
}
.current-order-card-height {
    overflow-y: auto;
    height: calc(100vh - 100px);
    min-height: 450px;
}
.product-detail-height {
    overflow-y: auto;
    height: calc(100vh - 150px);
}
.archive-content {
    /* overflow-y: auto; */
    height: calc(100vh - 115px);
    /* min-height: 450px; */
}
.mb-10 {
    margin-bottom: 10px;
}
.mb-15 {
    margin-bottom: 15px;
}
.mb-20 {
    margin-bottom: 20px !important;
}
.mt-20 {
    margin-top: 20px;
}
.mb-5px {
    margin-bottom: 5px;
}
.px-20 {
    padding-left: 20px;
    padding-right: 20px;
}
.py-15 {
    padding-top: 15px;
    padding-bottom: 15px;
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
.btn_theme{
    background-color:var(--theme-clr);
    color:#fff;
    border:0;
    border-radius:5px;

}
.modal-546 {
    width:546px;
    max-width: inherit;
    .modal-header {
        border-bottom:0;
        padding-bottom:0;
    }
    .modal-title {
        font-size: 17px;
        font-weight:700;
        span {
            color:var(--theme-clr);
        }
    }
    .modal-footer {
        padding-top:0px;
        border-top:0;
    }
}
.btn,.btn-close{
    box-shadow:none !important;
}
.mb-26 {
    margin-bottom: 26px;
}
.back-arrow {
    background-color: transparent;
    border: none;
    margin-right: 16px;
}
.modal-content {
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
}
.charac-left {
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    text-align: right;
    letter-spacing: -0.408px;
    color: #CCD4D6;
    font-family: 'Lato', sans-serif;
    margin-bottom: 7px;
}
.form-check-input {
    width: 20px;
    height: 20px;
    border-color: #CCD4D6 !important;
    border-radius: 3px;
    box-shadow: none !important;
}
.form-check-label {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 120%;
    letter-spacing: -0.408px;
    color: #002733;
    margin: 4px 0 0 10px;
}
// custom checkbox styles
.checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    &.grey-blue {
        &:hover input ~ .checkmark {
            background-color: #ccc;
        }
        input:checked ~ .checkmark {
            background-color: #4C6870;
        }
        &:after {
            content: "";
            position: absolute;
            display: none;
        }
        input:checked ~ .checkmark:after {
            display: block;
        }
        .checkmark {
            border: 1px solid #CCD4D6;
        }
        .checkmark:after {
            left: 6px;
            top: 3px;
            width: 6px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 3px;
        background-color: transparent;
        border: 1px solid white;
    }
}
.checkbox:hover input ~ .checkmark {
    background-color: #ccc;
}
.checkbox input:checked ~ .checkmark {
    background-color: white;
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.checkbox input:checked ~ .checkmark:after {
    display: block;
}
.checkbox .checkmark:after {
    left: 6px;
    top: 3px;
    width: 6px;
    height: 10px;
    border: solid #002733;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.input-dollar-sign {
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    letter-spacing: -0.408px;
    color: #CCD4D6;
    font-family: 'Lato', sans-serif;
    position: absolute;
    top: 8px;
    left: 10px;
}
.info-sign {
    font-family: 'Poppins';
    width: 15px;
    height: 15px;
    background: #5AB3A8;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    border-radius: 50%;
    cursor: help;
}
.info-hover {
    &:hover {
        .info-div {
            display: block;
        }
    }
}
.info-div {
    display: none;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 11px;
    line-height: 120%;
    letter-spacing: -0.3px;
    position: absolute;
    padding: 6px 5px;
    background-color: #1a3d47;
    color: white;
    border-radius: 3px;
    top: 18px;
    width: 127px;
    height: 54px;
    left: -52px;
    z-index: 100;
    a {
        font-weight: 600;
        color: var(--theme-clr);
        text-decoration: none;
    }
}
/* Chrome, Safari, Edge, Opera */
.number-apperance::-webkit-outer-spin-button,
.number-apperance::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.number-apperance[type=number] {
  -moz-appearance: textfield;
}
.cursor-pointer {
    cursor: pointer;
}
.scale-hover {
    transition: 0.2s all;
    &:hover {
        transform: scale(1.03);
    }
}
.grey-text {
    color: rgba(76, 104, 112, 0.7);
}
.template-footer {
    padding: 15px 20px;
    margin: 34px -20px -20px -20px;
    border-top: 1px solid #E8E8E8;
    button {
        height: 28px;
    }
    .del {
        background: rgba(228, 42, 42, 0.15);   
        color: #E42A2A;
        margin-right: 13px;
        width: 84px;
        min-width: 84px;
        padding: 0 5px;
        svg {
            margin-right: 6px;
            margin-bottom: 2px;
        }
    }
    button:last-of-type {
        width: 71px;
        min-width: 71px;
    }
}
.radius-0 {
    border-radius:0;
}
.refusal-modal {
    .modal-dialog {
        max-width: 546px;
    }
}
.modal-title-center {
    .modal-title {
        margin-left: auto !important;
        text-align: center;
    }
}
.save-note-hover:hover {
    background: rgba(90, 179, 168, 0.2);
    color: #5AB3A8;
}
.detail-modal {
    .modal-dialog {
        max-width: 700px;
    }
    .modal-content {
        background-color: #FAFAFA;
    }
}
.file-input-none {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
.modal-width-420 {
    .modal-dialog {
        max-width: 420px;
    }
}
.category-canvas {
    width: 775px;
    overflow-y: auto;
}
`;

export default GlobalStyle