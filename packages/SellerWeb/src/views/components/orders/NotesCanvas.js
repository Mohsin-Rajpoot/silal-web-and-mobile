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
    Margin,
} from '../Style'
import {
    PlusIcon,
    BackArrow,
} from '../AllImages'

const NotesCanvas = ({ handleCloseNotes, showNotes }) => {
    const [addNote, setAddNote] = useState(false)
    const [noteDetails, setNoteDetails] = useState(false)

    const noteDetail = () => {
        setNoteDetails(true)
    }
    const notesBack = () => {
        setNoteDetails(false)
        setAddNote(false)
    }

    return (
        <Offcanvas show={showNotes} onHide={handleCloseNotes} placement="end">
            <Offcanvas.Header closeButton>
                <div className="d-flex align-items-center">
                    {addNote || noteDetails ?
                        <Margin margin="0 14px 0 0">
                            <BackArrow
                                width="14px"
                                className="cursor-pointer"
                                onClick={notesBack} />
                        </Margin> : null
                    }
                    <Offcanvas.Title>Notes</Offcanvas.Title>
                </div>
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
                                <textarea className="note" spellCheck="false" autoFocus></textarea>
                            </CheckNote>
                        </div>
                        <Button className="w-100 save-note-hover" color="#5AB3A8" bg="rgba(90, 179, 168, 0.2)"
                            onClick={() => setAddNote(false)}>
                            Save note
                        </Button>
                    </div>
                    :
                    <>
                        {noteDetails ?
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
                                        <HeadingStyled
                                            className="lato"
                                            color="#002733"
                                            size="15px"
                                            weight="400"
                                            margin="0 0 8px 0">
                                            Conduct an inventory of ingredients
                                        </HeadingStyled>
                                    </CheckNote>
                                    <CheckNote>
                                        <div className="checkbox-main">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <HeadingStyled
                                            className="lato"
                                            color="#002733"
                                            size="15px"
                                            weight="400"
                                            margin="0 0 8px 0">
                                            Conduct an inventory of ingredients
                                        </HeadingStyled>
                                    </CheckNote>
                                </div>
                                <Button className="w-100 save-note-hover" color="#5AB3A8" bg="rgba(90, 179, 168, 0.2)"
                                    onClick={() => setNoteDetails(false)}>
                                    Save note
                                </Button>
                            </div>
                            :
                            <>
                                <div>
                                    {notesData.map((note, index) => (
                                        <Notes
                                            noteDetail={noteDetail}
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
                    </>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default NotesCanvas