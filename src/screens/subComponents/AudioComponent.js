import React from "react";
import { useAudioPlayer } from "react-use-audio-player";
import Pause from "../../customViews/pause";
import Play from "../../customViews/play";

export default function AudioComponent({ url }) {
  const { togglePlayPause, playing } = useAudioPlayer({
    src: url,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("sound has ended!"),
  });

  return (
    <div>
      {playing ? (
        <Pause onPlayerClick={togglePlayPause} />
      ) : (
        <Play onPlayerClick={togglePlayPause} />
      )}
    </div>
  );
}
