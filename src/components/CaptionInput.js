import React, { useState } from "react";
const CaptionInput = ({ onAddCaption, isVideoLoaded, videoDuration }) => {
  const [caption, setCaption] = useState("");
  const [time, setTime] = useState("");

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = () => {
    if (caption.length == 0) {
      alert("Caption cannot be empty");
      return;
    }
    if (time.length == 0) {
      alert("Time cannot be empty");
      return;
    }
    if (!/^\d+$/.test(time)) {
      alert("Time should be a number");
      return;
    }
    if (time > videoDuration) {
      alert("Time entered is greater than video duration");
      return;
    }

    onAddCaption({ caption, time });
    setCaption("");
    setTime("");
  };

  return (
    <div className="captionBox">
      <div className="captionAndTimeInputFields">
        <div className="captionInput">
          <p>Enter Caption: </p>
          <input
            type="text"
            placeholder="Enter caption"
            value={caption}
            onChange={handleCaptionChange}
            className="inputBox"
          />
        </div>
        <div className="timeInput">
          <p>Enter time:</p>
          <input
            type="text"
            placeholder="Enter time (in seconds)"
            value={time}
            onChange={handleTimeChange}
            className="inputBox"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="addCaptionButton"
        disabled={!isVideoLoaded}
      >
        Add Caption
      </button>
    </div>
  );
};
export default CaptionInput;
