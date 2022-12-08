const PrizeEntry = ({ prize }) => {
  let laureates = "";

  const noWinner = () => {
    return <li>{prize.topMotivation.en}</li>;
  };

  //   Handle no winner
  if (!prize.laureates) {
    laureates = noWinner();
  } else {
    laureates = prize.laureates.map((laureate, index) => {
      let laureateName;
      //   Handle person name or org name
      if (!laureate.knownName) {
        laureateName = laureate.orgName.en;
      } else {
        laureateName = laureate.knownName.en;
      }
      return (
        <li key={index}>
          {laureateName} (ID: {laureate.id}) {laureate.motivation.en}
        </li>
      );
    });
  }

  return (
    <>
      <p className="single-entry">
        {prize.awardYear} {prize.category.en}
      </p>
      <ul>{laureates}</ul>
      <p></p>
    </>
  );
};

export default PrizeEntry;
