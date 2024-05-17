const CaptionDisplay = ({ captions }) => {
  return (
    <div>
      <h2>Captions List: </h2>
      <div className="captionList">
      {
        captions.length>0?
        captions.map((caption, index) => (
          <p key={index} className="captions">
            {caption.time} second - {caption.caption}
          </p>
        )):<h4 className="noCaptionPresent">Your captions will be availabe here</h4>
    }
      </div>
    </div>
  );
};
export default CaptionDisplay;
