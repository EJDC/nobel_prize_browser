import PrizeEntry from "./PrizeEntry";

const PrizeList = ({ prizes, selectedCategory, selectedYear }) => {
  const prizeEntries = prizes.map((prize, index) => {
    if (selectedCategory === "" && selectedYear === "") {
      return <PrizeEntry prize={prize} key={index} />;
    } else if (selectedCategory !== "" && selectedYear === "") {
      return prize.category.en === selectedCategory ? (
        <PrizeEntry prize={prize} key={index} />
      ) : null;
    } else if (selectedCategory === "" && selectedYear !== "") {
      return prize.awardYear === selectedYear ? (
        <PrizeEntry prize={prize} key={index} />
      ) : null;
    } else {
      return prize.awardYear === selectedYear &&
        prize.category.en === selectedCategory ? (
        <PrizeEntry prize={prize} key={index} />
      ) : null;
    }
  });

  return <ul className="prize-list">{prizeEntries}</ul>;
};

export default PrizeList;
