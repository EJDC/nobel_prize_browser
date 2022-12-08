const PrizeSelector = ({ prizes, onCategorySelected, onYearSelected }) => {
  const handleYearChange = function (event) {
    const chosenYear = prizes[event.target.value];
    onYearSelected(chosenYear);
  };

  const handleCategoryChange = function (event) {
    const chosenCategory = prizes[event.target.value];
    onCategorySelected(chosenCategory);
  };

  // create an array (counter) for tracking awardYear
  const awardYearTracker = [];
  prizes.sort((a, b) => b.awardYear - a.awardYear);
  const prizeYears = prizes.map((prize, index) => {
    // if counter doesn't include prize.awardYear
    if (!awardYearTracker.includes(prize.awardYear)) {
      awardYearTracker.push(prize.awardYear);
      return (
        <option value={index} key={index}> {prize.awardYear} </option>
      );
    }
  });

  const awardCategoryTracker = []
  const prizeCategories = prizes.map((prize, index) => {
    if(!awardCategoryTracker.includes(prize.category.en)) {
      awardCategoryTracker.push(prize.category.en)
      return (
        <option value={index} key={index}>
          {prize.category.en}
        </option>
      );
    }
  });

  return (
    <>
      <select defaultValue="" onChange={handleYearChange}>
        <option value="" selected>
          Choose a year?
        </option>
        {prizeYears}
      </select>
      <select defaultValue="" onChange={handleCategoryChange}>
        <option value="" selected>
          Choose a prize category?
        </option>
        {prizeCategories}
      </select>
    </>
  );
};

export default PrizeSelector;
