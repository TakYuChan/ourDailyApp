import React from "react";
import "./commentsConverterPage.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  inputOnChange,
  setVideoIdInput,
  setStep2ToFalse,
  setStep2ToTrue,
} from "../../redux/commentsConverter/commentsConverter.actions";
import {
  selectVideoIdInputValue,
  selectStep2Show,
} from "../../redux/commentsConverter/commentsConverter.selectors";

import { Form } from "react-bootstrap";

const CommentsConverterPage = ({
  videoIdInputValue,
  step2Show,
  inputOnChange,
  setVideoIdInput,
  setStep2ToFalse,
  setStep2ToTrue,
}) => (
  <div className="commentsConverter-page">
    {/* ====================================== Introduction ====================================== */}
    <section className="introduction">
      {/* ============= intro left ============= */}
      <div className="intro-left">
        <h1>YouTube Comments To PNG Converter</h1>
        <div className="img-wrapper">
          <img
            src="https://i.imgur.com/j9rSZOk.png"
            alt="a camera between the hands"
            className="img--camera"
          />
        </div>
        <h3>Features: </h3>
        <ul className="feature-list">
          <li>Unlimited Comments allowed</li>
          <li>Customized border radius</li>
          <li>ZIP file for download</li>
          <li>Comments content is the PNG file name</li>
        </ul>
      </div>

      {/* ============= intro right ============= */}
      <div className="intro-right">
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/416381401"
            frameBorder="0"
            className="youtubeVideo"
            title="youtube video"
            allowFullScreen
          ></iframe>
        </div>
        <img
          className="copy-example"
          src="https://i.imgur.com/l0owWvo.gif"
          alt=""
        />
        <p>
          This converter is developed by Franky Chan, it can capture all the
          comments of a youtube video and convert them into PNG file.
        </p>
      </div>
      <hr />
    </section>

    {/* ====================================== implementation ====================================== */}
    <section className="implementation">
      <p>
        Example:{" "}
        <button
          className="exampleButton"
          onClick={() => setVideoIdInput("gCxsW2DXK0Y")}
        >
          gCxsW2DXK0Y
        </button>
      </p>
      <form>
        <Form.Control
          className="input--videoId"
          type="text"
          placeholder="Step1: Paste the video ID"
          aria-label="step1"
          data-id="videoIdInputValue"
          value={videoIdInputValue}
          onChange={(event) => {
            inputOnChange(event.target.value, event.target.dataset.id);
            if (step2Show === true && event.target.value === "")
              setStep2ToFalse();
            if (step2Show === false && event.target.value !== "")
              setStep2ToTrue();
          }}
        />
      </form>

      {step2Show && <button className="btn--step2">Step2: Get Comments</button>}
    </section>
  </div>
);

const mapStateToProps = createStructuredSelector({
  videoIdInputValue: selectVideoIdInputValue,
  step2Show: selectStep2Show,
});

const mapDispatchToProps = (dispatch) => ({
  inputOnChange: (value, target) => dispatch(inputOnChange(value, target)),
  setStep2ToTrue: (targetValue) => dispatch(setStep2ToTrue(targetValue)),
  setStep2ToFalse: (targetValue) => dispatch(setStep2ToFalse(targetValue)),
  setVideoIdInput: (value) => dispatch(setVideoIdInput(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsConverterPage);
