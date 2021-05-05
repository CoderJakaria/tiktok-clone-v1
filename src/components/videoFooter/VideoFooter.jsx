import React from "react";
import "./VideoFooter.css";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ account, description, songTitle }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{account}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p className="videoFooter__title">{songTitle}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__songLogo"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
