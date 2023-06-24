import React, { useState } from "react";
import "./Videos.css";
import mainVideo from "../../assets/videos/Main Video.jpg";
import video from "../../assets/videos/video.mp4";

function Videos(props) {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  function stopVideo() {
    setVideoPlaying(false);
  }

  return (
    <div>
      <section className="video">
        <img
          src={mainVideo}
          alt="play-icon"
          onClick={() => setVideoPlaying(true)}
        />

        {isVideoPlaying ? (
          <>
            <video className="player" src={video} autoPlay loop muted />
            <button className="close" onClick={() => stopVideo()}>
              <i className="fas fa-times" />
            </button>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}

export default Videos;
