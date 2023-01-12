const PrizeView = ({ selectedLaureate, handleClose }) => {
  return (
    <>
      {!selectedLaureate ? null : (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={handleClose}>
              x
            </span>
            <div className="information" />
            <br></br>
            {!selectedLaureate.knownName ? (
              <h2> {selectedLaureate.orgName.en} </h2>
            ) : (
              <h2>{selectedLaureate.knownName.en}</h2>
            )}
            <br></br>
          </div>
        </div>
      )}
    </>
  );
};

export default PrizeView;
