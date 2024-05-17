import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = ({
  videoUrl = "",
  captions = "",
  setIsVideoLoaded,
  isVideoLoaded = "",
  setVideoDurtion,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCaption, setCurrentCaption] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current;
      if (isPlaying && video) {
        const currentTime = Math.floor(video.currentTime);
        const matchingCaption = captions.find(
          (caption) => Math.floor(caption.time) === currentTime
        );
        if (matchingCaption) {
          setCurrentCaption(matchingCaption.caption);
        } else {
          setCurrentCaption("");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, captions]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    setVideoDurtion(videoRef.current.duration);
  };

  const handleVideoError = () => {
    setIsVideoLoaded(false);
    setVideoDurtion("");
  };

  const handlePlayVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="videoPlayer">
      <h2>Video Player</h2>
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        onPlay={handlePlayVideo}
        onPause={handlePauseVideo}
        onLoadedMetadata={handleVideoLoaded}
        onError={handleVideoError}
        className="videoPlayer"
      ></video>
      {isVideoLoaded && (
        <div className="captionsContainer">
          {currentCaption && <p>{currentCaption}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
