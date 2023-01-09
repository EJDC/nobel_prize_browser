import PrizeEntry from "./PrizeEntry";

const PrizeList = ({
  prizes,
  selectedCategory,
  selectedYear,
  onLaureateSelected,
}) => {
  const prizeEntries = prizes.map((prize, index) => {
    if (selectedCategory === "" && selectedYear === "") {
      return (
        <PrizeEntry
          prize={prize}
          onLaureateSelected={onLaureateSelected}
          key={index}
        />
      );
    } else if (selectedCategory !== "" && selectedYear === "") {
      return prize.category.en === selectedCategory ? (
        <PrizeEntry
          prize={prize}
          onLaureateSelected={onLaureateSelected}
          key={index}
        />
      ) : null;
    } else if (selectedCategory === "" && selectedYear !== "") {
      return prize.awardYear === selectedYear ? (
        <PrizeEntry
          prize={prize}
          onLaureateSelected={onLaureateSelected}
          key={index}
        />
      ) : null;
    } else {
      return prize.awardYear === selectedYear &&
        prize.category.en === selectedCategory ? (
        <PrizeEntry
          prize={prize}
          onLaureateSelected={onLaureateSelected}
          key={index}
        />
      ) : null;
    }
  });

  return <ul className="prize-entry">{prizeEntries}</ul>;
};

export default PrizeList;
