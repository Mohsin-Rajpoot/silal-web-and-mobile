import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";

function UploadImg() {
  const [images, setImages] = useState([]);
  const maxNumber = 9;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <wrapper>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            // onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <h5>my ui is going here</h5>
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </wrapper>
  );
}
export default UploadImg;

const wrapper = styled.div`
  .App {
    font-family: sans-serif;
    /* text-align: center; */
    background-color: #f6f9fe;
    height: 100vh;
  }
  .image-item {
    display: flex;
    margin: 10px 0;
  }
  .image-item__btn-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  button {
    height: 40px;
  }
`;
