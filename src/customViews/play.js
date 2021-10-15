import React from "react";

const Play = ({ onPlayerClick }) => {
  return (
    <svg fill="#557571" viewBox="0 0 60 60" className="playPauseButton"  onClick={onPlayerClick}>
      <polygon points="0,0 50,30 0,60" />
    </svg>
  );
};

export default Play;
