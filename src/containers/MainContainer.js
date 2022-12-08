import React, { useState, useEffect } from "react";
import PrizeSelector from "../components/PrizeSelector";
import PrizeView from "../components/PrizeView";
import PrizeList from "../components/PrizeList";

const MainContainer = () => {
  const [allPrizes, setAllPrizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);

  useEffect(() => {
    getPrizes();
  }, []);

  const getPrizes = function () {
    fetch("https://api.nobelprize.org/2.1/nobelPrizes?limit=1000")
      .then(response => response.json())
      .then(allPrizes => setAllPrizes(allPrizes.nobelPrizes));
    console.log(allPrizes);
  };

  const onCategorySelected = function(category) {
    setSelectedCategory(category)
  }

const onYearSelected = function(year) {
    setSelectedYear(year)
}

  return (
    <>
      <section><PrizeSelector prizes={allPrizes} onCategorySelected={onCategorySelected} onYearSelected={onYearSelected}/></section>
      <section><PrizeList prizes={allPrizes} /></section>
      <section><PrizeView /></section>
    </>
  );
};

export default MainContainer;
