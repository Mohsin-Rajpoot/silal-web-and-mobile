import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import {
    HeadingStyled,
    Button,
    ThemeModal,
} from '../Style'
import { DangerVector } from '../AllImages'

const AccountFreezedModal = ({ showModal, handleClose }) => {
    return (
        <Modal show={showModal} onHide={handleClose} centered className="modal-width-420">
            <ThemeModal>
                <Wrapper>
                    <Modal.Body>
                        <div className="text-center">
                            <DangerVector className="vector" />
                            <HeadingStyled className="poppins" size="18px" weight="700" margin="0 0 20px 0">Account is freezed</HeadingStyled>
                            <p>It seems that your account was deactivated because it violated the <Link>Terms of Use</Link> or our <Link>Community Guideline</Link>.</p>
                            <p>If you believe this was by mistake, please <Link>contact us</Link>.</p>
                        </div>
                        <div className="note">
                            <h6><span>Note from Silal:</span> account freezed for 30 days due to leaving inappropriate reviews on products.</h6>
                        </div>
                        <Button width="100%" onClick={handleClose}>
                            Ok
                        </Button>
                    </Modal.Body>
                </Wrapper>
            </ThemeModal>
        </Modal>
    )
}

const Wrapper = styled.div`
    .modal-body {
        padding: 45px 50px 40px 50px;
        .vector {
            margin-bottom: 40px;
            opacity: 0.4;
        }
        p {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 15px;
            line-height: 140%;
            color: #002733;
            margin-bottom: 15px;
            &:last-of-type { 
                margin-bottom: 25px;
                padding: 0 40px;
            }
            a {
                color: var(--theme-clr);
                text-decoration: none;
            }
        }
        .note {
            background: rgba(90, 179, 168, 0.1);
            border: 1px solid rgba(90, 179, 168, 0.3);
            border-radius: 5px;
            padding: 7px 12px;
            margin-bottom: 25px;
            h6 {
                font-family: 'Lato';
                font-weight: 600;
                font-size: 13px;
                line-height: 150%;
                color: #4c6870;
                margin: 0;
                span {
                    color: #5AB3A8;
                }
            }
        }
    }
`;

export default AccountFreezedModal