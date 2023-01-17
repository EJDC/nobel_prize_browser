import React from "react";
const PrizeView = ({
  selectedLaureate,
  selectedLaureateWikiData,
  handleClose,
}) => {
  return (
    <>
      {!selectedLaureate || !selectedLaureateWikiData ? null : (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={handleClose}>
              x
            </span>
            {!selectedLaureateWikiData.thumbnail ? (
              <></>
            ) : (
              <img src={selectedLaureateWikiData.thumbnail.source} />
            )}
            <div className="information" />
            <br></br>
            {!selectedLaureate.knownName ? (
              <h2> {selectedLaureate.orgName.en} </h2>
            ) : (
              <h2>{selectedLaureate.knownName.en}</h2>
            )}
            <br></br>
            <div
              dangerouslySetInnerHTML={{__html: selectedLaureateWikiData.extract_html}}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PrizeView;
