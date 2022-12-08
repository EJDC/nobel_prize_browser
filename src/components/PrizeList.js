import PrizeEntry from "./PrizeEntry";

const PrizeList = ({ prizes }) => {
  const prizeEntries = prizes.map((prize, index) => {
    return <PrizeEntry prize={prize} key={index} />;
  });
  return <ul className="prize-list">{prizeEntries}</ul>;
};

export default PrizeList;
