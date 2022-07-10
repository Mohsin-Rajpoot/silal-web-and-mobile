import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Offcanvas } from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import cross from "../../../../src/assets/images/svg/cross.svg";
import imgloading from "../../../../src/assets/images/svg/imgloading.svg";
import { Button } from "../../components/Style";

const AddPhotoBar = ({ sideBar, SetBar }) => {
  const [images, setImages] = useState([]);
  const [cindex, setIndex] = useState();
  const [url, setUrl] = useState();
  const one = document.getElementsByClassName("item1");
  console.log(one[1]);

  const maxNumber = 9;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  //   const changeContent = () => {
  //     one[1].innerHTML = <h1>replaced </h1>;
  //   };
  return (
    <Offcanvas
      style={{ width: "60%" }}
      className="itsoffCanvas"
      show={sideBar}
      onHide={() => SetBar(false)}
      placement="end"
    >
      <Wrapper>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add photos to the item</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <button onClick={changeContent}> click here</button> */}
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
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="contain">
                <div className="grid-container">
                  <div className="item1 active" id="demo">
                    <img className="cross" src={cross} alt="..." />
                  </div>
                  <div className="item2 active">
                    <img className="cross" src={cross} alt="..." />
                  </div>
                  <div className="item3" id="demo"></div>
                  <div className="item4"></div>
                  <div className="item5"></div>
                  <div className="item6"></div>
                  <div className="item7"></div>
                  <div className="item8"></div>
                  <div className="item9"></div>
                  {/* {imageList.map((image, index) => (
                    <div className="item2 active">
                      <div key={index} className="image-item">
                        {setIndex(index)}
                        {setUrl(image.data_url)}
                        <img src={image.data_url} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <img
                            onClick={() => onImageRemove(index)}
                            className="cross"
                            src={cross}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>

                <div className="section text-center">
                  <img src={imgloading} alt="..." />
                  <h6
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Drag and drop images or upload files
                  </h6>
                  <p>Supported formats: PNG, JPG</p>
                </div>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Image URL"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text" id="basic-addon2">
                    Add
                  </span>
                </div>
                <div className="text-center wrap d-flex justify-content-between">
                  <div className="line"></div>
                  <div className="text">OR</div>
                  <div className="line"></div>
                </div>

                <button className="butn">Choose From Library</button>

                <div className="butn1">
                  <Button width={"20%"} bg={"#05AE4B"} color={"white"}>
                    {" "}
                    Save
                  </Button>
                </div>
              </div>
            )}
          </ImageUploading>
        </Offcanvas.Body>
      </Wrapper>
    </Offcanvas>
  );
};

const Wrapper = styled.div`
  .itsoffCanvas {
    width: 60%;
    overflow: auto
}
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 10px;
    padding: 25px 0px;
  }

  .grid-container > div {
    background-color: #f4f7f8;
    border-radius: 5px;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    padding: 52px;
  }

  .active {
    border: 1px solid #05ae4b;
    border-radius: 5px;

    .cross {
      margin-top: -133px;
      margin-right: -139px;
    }
  }
  .item1 {
    .cross {
      margin-right: -196px;
    }
  }

  .item1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .section {
    padding: 20px 0px;
    width: 100%;
    background: #f4f7f8;
    border: 2px dashed #82d6a5;
    border-radius: 4px;
    h6 {
      cursor: pointer;
    }
  }
  .input-group {
    padding-top: 31px;
    span {
      background: #05ae4b;
      color: white;
      border-radius: 5px;
    }
  }
  .wrap {
    color: #abb7bd;
    .line {
      width: 46%;
      border-bottom: 1px solid #e8e8e8;
      margin-bottom: 9px;
    }
    .text {
      padding-top: 7px;
    }
  }
  .butn {
    color: #05ae4b;
    background: #cdefdb;
    border-radius: 5px;
    width: 100%;
    border: none;
    padding: 14px;
    margin-top: 18px;
  }
  .butn1{
    float:right;
    padding-top:17px;
  }
`;

export default AddPhotoBar;
