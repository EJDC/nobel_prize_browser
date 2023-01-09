const PrizeEntry = ({ prize, onLaureateSelected }) => {
  let laureates = "";
  let sharedMotivation = false;
  let laureatesMotivation;

  const noWinner = () => {
    return <li>{prize.topMotivation.en}</li>;
  };

  const handleLaureateSelect = function (event) {
    const chosenLaureate = ![event.target.value] ? "" : [event.target.value][0];
    onLaureateSelected(chosenLaureate);
  };

  //  Determine if no winner
  if (!prize.laureates) {
    laureates = noWinner();
  } else {
    //  Determine if motivation is shared between all laureates.
    laureatesMotivation = prize.laureates[0].motivation.en;
    for (let i = 0; i < prize.laureates.length; i++) {
      let currentMotivation = prize.laureates[i].motivation.en;
      if (laureatesMotivation === currentMotivation) {
        sharedMotivation = true;
      } else {
        sharedMotivation = false;
      }
    }
    laureates = prize.laureates.map((laureate, index) => {
      let laureateName;
      //   Handle person name or org name
      if (!laureate.knownName) {
        laureateName = laureate.orgName.en;
      } else {
        laureateName = laureate.knownName.en;
      }
      // If motivation not shared, display names and motivations for each.
      if (sharedMotivation === false) {
        return (
          <ul key={index}>
            <li className="laureate-name">
              <button
                value={laureate.links[0].href}
                onClick={handleLaureateSelect}
              >
                {laureateName}
              </button>
            </li>
            <br></br>
            <li className="laureate-motivation">{laureate.motivation.en}</li>
          </ul>
        );
      } else {
        // If motivation not shared, display name followed by motivation.
        return (
          <ul key={index}>
            <li className="laureate-name">{laureateName}</li>
          </ul>
        );
      }
    });
  }
  return (
    <div className="prize">
      <p className="prize-title">
        {prize.awardYear} {prize.category.en}
      </p>
      <br></br>
      <ul className="laureates">{laureates}</ul>
      <br></br>
      {sharedMotivation ? (
        <li className="laureate-motivation">{laureatesMotivation}</li>
      ) : null}
      <br></br>
    </div>
  );
};

export default PrizeEntry;
