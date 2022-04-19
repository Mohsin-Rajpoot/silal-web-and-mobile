import React from 'react'
import styled from 'styled-components'
import { Offcanvas } from 'react-bootstrap'
import { Radio } from '../Style'
import { englishFlag, arabicFlag, jewFlag } from '../AllImages'

const LanguageCanvas = ({ canvasShow, setCanvasShow, setLanguage, language }) => {

    return (
        <Wrapper>
            <Offcanvas show={canvasShow} onHide={() => setCanvasShow(false)} placement="end" style={{ width: '350px' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Language</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Language>
                        <input
                            type="radio"
                            name="language"
                            defaultChecked={true}
                            onChange={() => setLanguage('English')}
                        />
                        <span className="checkmark"></span>
                        <img src={englishFlag} alt="flag" />
                        English
                    </Language>
                    <Language>
                        <input
                            type="radio"
                            name="language"
                            onChange={() => setLanguage('Arabic')}
                        />
                        <span className="checkmark"></span>
                        <img src={arabicFlag} alt="flag" />
                        Arabic
                    </Language>
                    <Language>
                        <input
                            type="radio"
                            name="language"
                            onChange={() => setLanguage('Hebrew')}
                        />
                        <span className="checkmark"></span>
                        <img src={jewFlag} alt="flag" />
                        Hebrew
                    </Language>
                </Offcanvas.Body>
            </Offcanvas>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const Language = styled(Radio)`
    font-weight: 500;
    font-size: 15px;
    color: black;
    padding: 12px 12px 12px 50px;
    background: #F1F2F3;
    border: 1px solid #5AB3A8;
    box-sizing: border-box;
    border-radius: 8px;
    height: 58px;
    display: flex;
    align-items: center;
    .checkmark {
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        border: 2px solid rgba(76, 104, 112, 0.5);
        background-color: white;
        &::after {
            background: white;
        }
    }
    &:hover input ~ .checkmark {
        background-color: white;
    }
    input:checked ~ .checkmark {
        border-width: 5px;
    }
    img {
        margin-right: 10px;
        border-radius: 3px;
    }
`;

export default LanguageCanvas