const PrizeView = ({ selectedLaureate }) => {
  return (
    <>
      {!selectedLaureate ? (
        <div>Click on a laureate from the list of prizes to learn more!</div>
      ) : (
        <div>{selectedLaureate.knownName.en}</div>
      )}
    </>
  );
};

export default PrizeView;
