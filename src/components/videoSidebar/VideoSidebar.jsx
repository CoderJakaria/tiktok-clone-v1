import React, { useState } from "react";
import "./VideoSidebar.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videSidebar__option">
        {isLiked ? (
          <FavoriteIcon fontSize="large" onClick={() => setIsLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => setIsLiked(true)}
          />
        )}
        <p>{isLiked ? likes + 1 : likes}</p>
      </div>
      <div className="videSidebar__option">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videSidebar__option">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
