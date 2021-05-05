import React, { useEffect, useState } from "react";
import "./Tiktok.css";
import Video from "../../components/video/Video";
import { db } from "../../firebase";

const Tiktok = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="tiktok">
      <div className="tiktok__videos">
        {videos.map(
          (
            { url, account, description, songTitle, likes, messages, shares },
            idx
          ) => (
            <Video
              key={idx}
              url={url}
              account={account}
              description={description}
              songTitle={songTitle}
              likes={parseInt(likes)}
              messages={parseInt(messages)}
              shares={parseInt(shares)}
            />
          )
        )}
      </div>
    </div>
  );
};
//
export default Tiktok;
