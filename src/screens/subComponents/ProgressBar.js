const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <div className="progressContainer">
      <div
        className="progressFiller"
        style={{
          width: `${completed}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
