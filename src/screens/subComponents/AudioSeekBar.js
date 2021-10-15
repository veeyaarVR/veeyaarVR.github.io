import { useAudioPosition } from "react-use-audio-player";
import ProgressBar from "./ProgressBar";

const AudioSeekBar = () => {
  const { percentComplete } = useAudioPosition({
    highRefreshRate: true,
  });

  // can be used to move position of seekbar
  // const goToPosition = React.useCallback(
  //   (percentage) => {
  //     seek(duration * percentage);
  //   },
  //   [duration, seek]
  // );

  return (
    <ProgressBar
      completed={percentComplete}
    />
  );
};

export default AudioSeekBar;
