import React, { useState, useEffect } from "react";
import PrizeSelector from "../components/PrizeSelector";
import PrizeView from "../components/PrizeView";
import PrizeList from "../components/PrizeList";
import wiki from "wikipedia";

const MainContainer = () => {
  const [allPrizes, setAllPrizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLaureate, setSelectedLaureate] = useState("");
  const [selectedLaureateWikiData, setSelectedLaureateWikiData] = useState("")
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
      .then((foundLaureate) =>  {
        setSelectedLaureate(foundLaureate[0])
        wikipediaData(foundLaureate[0])
      })
      togglePopup()
  };

  const wikipediaData = function (laureate) {
    console.log(laureate);
    const wiki = require("wikipedia");
    (async () => {
      try {
        const summary = await wiki.summary(laureate.wikipedia.slug);
        console.log(summary);
        setSelectedLaureateWikiData(summary)
      } catch (error) {
        console.log(error);
      }
    })();
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
            selectedLaureateWikiData={selectedLaureateWikiData}
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
};

export default MainContainer;
