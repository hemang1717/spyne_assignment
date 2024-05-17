import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import CaptionInput from "./components/CaptionInput";
import CaptionDisplay from "./components/CaptionDisplay";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoDuration, setVideoDuration] = useState();

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div>
      <div className="appHeading">
        <h2>CaptionTube</h2>
        <p>Enter captions for your video</p>
      </div>
      <div className="videoAndCaption">
        <div className="videoAndCaptionContent">
          <div>
            <div className="videoUrl">
              <p>Enter video url: </p>
              <input
                type="text"
                placeholder="Enter video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="videoUrlInput"
              />
            </div>
            {videoUrl.length>0 && !isVideoLoaded && <div className="invalidUrlText">Enter Correct video url</div>}
            <VideoPlayer
              videoUrl={videoUrl}
              captions={captions}
              setIsVideoLoaded={setIsVideoLoaded}
              isVideoLoaded={isVideoLoaded}
              setVideoDurtion={setVideoDuration}
            />
            <CaptionInput
              onAddCaption={handleAddCaption}
              isVideoLoaded={isVideoLoaded}
              videoDuration={videoDuration}
            />
          </div>
          <div>
            <CaptionDisplay captions={captions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
// https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4
