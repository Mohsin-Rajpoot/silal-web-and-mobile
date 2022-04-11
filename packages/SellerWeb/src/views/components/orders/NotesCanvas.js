import React, { useState } from 'react'
import { Offcanvas, } from "react-bootstrap"
import { notesData } from './NotesData'
import {
    Notes,
    AddNoteButton,
    CheckNote,
} from './Components'
import {
    HeadingStyled,
    Button,
} from '../Style'
import { PlusIcon } from '../AllImages'

const NotesCanvas = ({ handleCloseNotes, showNotes }) => {
    const [addNote, setAddNote] = useState(false)

    return (
        <Offcanvas show={showNotes} onHide={handleCloseNotes} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Notes</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="position-relative">
                {addNote ?
                    <div className="h-100 d-flex flex-column justify-content-between">
                        <div>
                            <HeadingStyled className="lato" color="#5AB3A8" size="25px" weight="500" margin="0 0 25px 0">21 November 2021</HeadingStyled>
                            <CheckNote>
                                <div className="checkbox-main">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <textarea className="note"></textarea>
                            </CheckNote>
                        </div>
                        <Button className="w-100 save-note-hover" color="#5AB3A8" bg="rgba(90, 179, 168, 0.2)"
                            onClick={() => setAddNote(false)}>
                            Save note
                        </Button>
                    </div>
                    :
                    <>
                        <div>
                            {notesData.map((note, index) => (
                                <Notes
                                    key={index}
                                    date={note.date}
                                    note={note.note}
                                />
                            ))}
                        </div>
                        <AddNoteButton
                            className="center"
                            onClick={() => setAddNote(true)}>
                            <PlusIcon />
                        </AddNoteButton>
                    </>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default NotesCanvas