import React, { useState, useEffect } from "react";
import PrizeSelector from "../components/PrizeSelector";
import PrizeView from "../components/PrizeView";
import PrizeList from "../components/PrizeList";

const MainContainer = () => {
  const [allPrizes, setAllPrizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLaureate, setSelectedLaureate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getPrizes();
  }, []);

  const getPrizes = function () {
    fetch("https://api.nobelprize.org/2.1/nobelPrizes?limit=1000")
      .then((response) => response.json())
      .then((allPrizes) => setAllPrizes(allPrizes.nobelPrizes));
  };

  const onCategorySelected = function (category) {
    setSelectedCategory(category);
  };

  const onYearSelected = function (year) {
    setSelectedYear(year);
  };

  const onLaureateSelected = function (laureate) {
    fetch(laureate)
      .then((response) => response.json())
      .then((selectedLaureate) => setSelectedLaureate(selectedLaureate[0]))
      .then(() => togglePopup());
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section>
        <PrizeSelector
          prizes={allPrizes}
          onCategorySelected={onCategorySelected}
          onYearSelected={onYearSelected}
        />
      </section>
      <div id="maincontent">
        <section id="prizelist">
          <PrizeList
            prizes={allPrizes}
            selectedCategory={selectedCategory}
            selectedYear={selectedYear}
            onLaureateSelected={onLaureateSelected}
          />
        </section>
      </div>
      <div>
        {isOpen && (
          <PrizeView
            selectedLaureate={selectedLaureate}
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
};

export default MainContainer;
