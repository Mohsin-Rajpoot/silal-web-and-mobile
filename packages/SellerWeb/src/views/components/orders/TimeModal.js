import React from 'react'
import { Modal } from "react-bootstrap"
import { RangeSlider, Button } from "../Style"

const TimeModal = ({ handleClosePeakTimeModal, showPeakTimeModal }) => {
    return (
        <Modal
            show={showPeakTimeModal}
            onHide={() => handleClosePeakTimeModal(false)}
            centered
            dialogClassName="modal-546"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Order will be ready in: <span>7 minutes</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RangeSlider className="mt-4">
                    <input type="range" min="0" max="100" step="14" className="slider-range" />
                    <ul className="mb-0 p-0 list-unstyled d-flex justify-content-around">
                        <li>20 min</li>
                        <li>30 min</li>
                        <li>40 min</li>
                        <li>50 min</li>
                        <li>60 min</li>
                        <li>90 min</li>
                        <li>120 min</li>
                    </ul>
                </RangeSlider>
                <div className="d-flex mt-4 align-items-center">
                    <label className="me-3 f-semibold lato">Add manually</label>
                    <input
                        type="number"
                        placeholder="+30 min"
                        className="border px-3 number-apperance"
                        style={{ height: "34px", width: "100px", borderRadius: "5px" }}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-50 m-0 pe-2">
                    <Button className="w-100 m-0" style={{ background: "#CCD4D6", color: "rgba(0, 39, 51, 0.5)" }} onClick={() => handleClosePeakTimeModal(false)}>
                        Cancel
                    </Button>
                </div>
                <Button className="w-50 m-0" onClick={() => handleClosePeakTimeModal(false)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TimeModal