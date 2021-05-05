import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";
import "./Video.css";

const Video = ({
  url,
  account,
  description,
  songTitle,
  likes,
  messages,
  shares,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={onVideoPress}
        className="video__player"
        controls={false}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter
        account={account}
        description={description}
        songTitle={songTitle}
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
