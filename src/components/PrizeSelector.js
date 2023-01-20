const PrizeSelector = ({ prizes, onCategorySelected, onYearSelected }) => {
  
  const handleYearChange = function (event) {
    const chosenYear = !prizes[event.target.value]
      ? ""
      : prizes[event.target.value].awardYear;
    onYearSelected(chosenYear);
  };

  const handleCategoryChange = function (event) {
    const chosenCategory = !prizes[event.target.value]
      ? ""
      : prizes[event.target.value].category.en;
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
        <option value={index} key={index}> 
          {prize.awardYear}
        </option>
      );
    }
    return <></>
  });

  const awardCategoryTracker = [];
  const prizeCategories = prizes.map((prize, index) => {
    if (!awardCategoryTracker.includes(prize.category.en)) {
      awardCategoryTracker.push(prize.category.en);
      return (
        <option value={index} key={index}>
          {prize.category.en}
        </option>
      );
    }
    return <></>
  });

  return (
    <div>
      <ul className="selectorlist">
        <li>
          <select defaultValue="" onChange={handleYearChange}>
            <option value="">Choose a year?</option>
            <option value="">All</option>
            {prizeYears}
          </select>
        </li>
        {/* <li>and/or</li> */}
        <li>
          <select defaultValue="" onChange={handleCategoryChange}>
            <option value="">Choose a prize category?</option>
            <option value="">All</option>
            {prizeCategories}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default PrizeSelector;
