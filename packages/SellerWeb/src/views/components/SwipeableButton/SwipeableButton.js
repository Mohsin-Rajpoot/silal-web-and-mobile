import React, { Component } from "react";
import styled from "styled-components";

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = "ontouchstart" in document.documentElement;

export default class SwipeableButton extends Component {
  state = {};

  componentDidMount() {
    if (isTouchDevice) {
      document.addEventListener("touchmove", this.onDrag);
      document.addEventListener("touchend", this.stopDrag);
    } else {
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    }
    this.containerWidth = container.current.clientWidth - 50;
  }

  onDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return;
    if (this.isDragging) {
      if (isTouchDevice) {
        this.sliderLeft = Math.min(
          Math.max(0, e.touches[0].clientX - this.startX),
          this.containerWidth
        );
      } else {
        this.sliderLeft = Math.min(
          Math.max(0, e.clientX - this.startX),
          this.containerWidth
        );
      }
      this.updateSliderStyle();
    }
  };

  updateSliderStyle = () => {
    if (this.unmounted || this.state.unlocked) return;
    slider.current.style.left = this.sliderLeft + 50 + "px";
  };

  stopDrag = () => {
    if (this.unmounted || this.state.unlocked) return;
    if (this.isDragging) {
      this.isDragging = false;
      if (this.sliderLeft > this.containerWidth * 0.9) {
        this.sliderLeft = this.containerWidth;
        if (this.props.onSuccess) {
          this.props.onSuccess();
          this.onSuccess();
        }
      } else {
        this.sliderLeft = 0;
        if (this.props.onFailure) {
          this.props.onFailure();
        }
      }
      this.updateSliderStyle();
    }
  };

  startDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return;
    this.isDragging = true;
    if (isTouchDevice) {
      this.startX = e.touches[0].clientX;
    } else {
      this.startX = e.clientX;
    }
  };

  onSuccess = () => {
    container.current.style.width = container.current.clientWidth + "px";
    this.setState({
      unlocked: true,
    });
  };

  getText = () => {
    return this.state.unlocked
      ? this.props.text_unlocked || "UNLOCKED"
      : this.props.text || "SLIDE";
  };

  reset = () => {
    if (this.unmounted) return;
    this.setState({ unlocked: false }, () => {
      this.sliderLeft = 0;
      this.updateSliderStyle();
    });
  };

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <SwipeButton>
        <div className="ReactSwipeButton">
          <div
            className={
              "rsbContainer " +
              (this.state.unlocked ? "rsbContainerUnlocked" : "")
            }
            ref={container}
          >
            <div
              className="rsbcSlider"
              ref={slider}
              onMouseDown={this.startDrag}
              style={{ background: this.props.color }}
              onTouchStart={this.startDrag}
            >
              <span className="rsbcSliderText">{this.getText()}</span>
              <span className="rsbcSliderArrow"></span>
              <span
                className="rsbcSliderCircle"
                style={{ background: this.props.color }}
              ></span>
            </div>
            <div className="rsbcText">{this.getText()}</div>
          </div>
        </div>
      </SwipeButton>
    );
  }
}

const SwipeButton = styled.div`
  .ReactSwipeButton {
    width: 100%;
    height: 40px;
    position: relative;
  }
  .ReactSwipeButton,
  .ReactSwipeButton * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
    ot supported by any browser */
  }
  .rsbContainer {
    float: left;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    border-radius: 5px;
    position: relative;
    /* box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1); */
    overflow: hidden;
  }
  .rsbContainerUnlocked {
    width: 50% !important;
    margin-left: 25%;
    transition: 0.5s;
    cursor: default;
  }
  .rsbContainerUnlocked .rsbcSlider {
    left: 100% !important;
    cursor: default;
    pointer-events: none;
  }
  .rsbContainerUnlocked .rsbcSliderArrow {
    transition: 0.5s;
    margin-right: -60px;
  }
  .rsbContainerUnlocked .rsbcSliderCircle {
    transition: 0.5s;
    margin-right: -60px;
  }
  .rsbcSlider {
    float: left;
    width: 100%;
    position: absolute;
    height: 40px;
    top: 0;
    left: 50px;
    margin-left: -100%;
    background: #333;
    z-index: 100;
    /* box-shadow: 1px 1px 5px rgba(0,0,0,0.3); */
    cursor: pointer;
  }
  .rsbcSliderText {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    line-height: 40px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
    font-size: 13px;
  }
  .rsbcSliderArrow {
    float: left;
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid #fff;
    height: 8px;
    width: 8px;
    top: 42%;
    right: 22px;
    border-left-color: transparent;
    border-bottom-color: transparent;
    transform-origin: center;
    z-index: 10;
  }
  .rsbcSliderCircle {
    position: absolute;
    right: 0;
    background: #444;
    top: 0;
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }
  .rsbcText {
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 2px;
    font-size: 13px;
    color: #aaa;
  }
`;
