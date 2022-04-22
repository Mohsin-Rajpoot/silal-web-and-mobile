import React from 'react'
import PinInput from "react-pin-input"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import {
    HeadingStyled,
    Button,
    ThemeModal,
} from '../Style'

const CodeModal = ({ showCodeModal, handleClose }) => {
    return (

        <Modal show={showCodeModal} onHide={handleClose} centered className="modal-width-420 modal-title-center">
            <ThemeModal>
                <Wrapper>
                    <Modal.Header closeButton>
                        <Modal.Title>Change admin code for «Seller’s name»</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <HeadingStyled
                            className="text-center lato"
                            size="15px"
                            weight="500"
                            color="#4C6870"
                            margin="0 0 15px 0">
                            Enter your new code
                        </HeadingStyled>
                        <div className="center">
                            <PinInput
                                length={4}
                                // initialValue=""
                                // secret
                                // onChange={(value, index) => { }}
                                type="numeric"
                                inputMode="number"
                                inputStyle={{ borderColor: '#CDCDD0' }}
                                inputFocusStyle={{ borderColor: '#5AB3A8' }}
                                // onComplete={(value, index) => { }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </div>
                        <HeadingStyled
                            className="text-center lato"
                            size="15px"
                            weight="500"
                            color="#4C6870"
                            margin="30px 0 15px 0">
                            Repeat code
                        </HeadingStyled>
                        <div className="center">
                            <PinInput
                                length={4}
                                type="numeric"
                                inputMode="number"
                                inputStyle={{ borderColor: '#CDCDD0' }}
                                inputFocusStyle={{ borderColor: '#5AB3A8' }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </div>
                        <Button mt="40px" width="329px" onClick={handleClose}>
                            Submit new admin code
                        </Button>
                    </Modal.Body>
                </Wrapper>
            </ThemeModal>
        </Modal>
    )
}
const Wrapper = styled.div`
    .modal-header {
        padding: 30px 50px 28px 50px;
        .btn-close {
            position: absolute;
            top: 24px;
            right: 24px;
        }
    }
    .modal-body {
        padding: 0 50px 40px 50px;
        
    }
    .pincode-input-container {
        .pincode-input-text {
            padding:0 !important;
            margin:0 5px !important;
            width: 45px !important;
            height: 45px !important;
            border-radius: 5px;
            background: rgba(241, 242, 243, 0.5) !important;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 25px;
            line-height: 22px;
            color: #4C6870;

        }
    }
`;

export default CodeModal