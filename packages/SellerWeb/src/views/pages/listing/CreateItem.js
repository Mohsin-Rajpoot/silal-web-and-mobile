import React from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper } from '../../components/listing/Style'
import {
    HeadingStyled,
    ButtonText,
    Button,
    FlexContainer,
} from '../../components/Style'
import {
    BackArrow,
} from "../../components/AllImages"

const CreateItem = () => {
    const history = useHistory()

    return (
        <Wrapper>
            <FlexContainer className="mt-20 justify-content-between flex-wrap">
                <div className="d-flex align-items-center">
                    <button onClick={history.goBack} className="back-arrow mb-26">
                        <BackArrow />
                    </button>
                    <HeadingStyled size="25px" weight="700" className="mb-26">
                        Create new item
                    </HeadingStyled>
                </div>
                <div className="d-flex align-items-center">
                    <ButtonText className="mb-26">Preview</ButtonText>
                    <Button
                        disabled
                        className="me-3 ms-4 w-148 mb-26">
                        Save as draft
                    </Button>
                    <Button className="w-148 mb-26">Publish</Button>
                </div>
            </FlexContainer>
        </Wrapper>
    )
}

export default CreateItem