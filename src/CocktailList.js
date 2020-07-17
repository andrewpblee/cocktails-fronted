import React, { useState } from "react";
import CocktailItem from "./CocktailItem";
import cocktails from "./cocktails";
import search from "./search.png";
import unforgettable from "./unforgettable.png";
import newEra from "./newera.png";
import contemporaries from "./contemporaries.png";

import { Link } from "react-router-dom";

const CocktailList = () => {
  const [term, setTerm] = useState("");
  const [cocktailArr, filterCocktailArr] = useState(cocktails);

  const handleArray = (word) => {
    let pattern = new RegExp(word, "gi");
    let filtered = cocktails.filter((c) =>
      c.title.concat(c.ingredients.join(""), c.category).match(pattern)
    );
    filterCocktailArr(filtered);
  };

  const arrOfCocktails = cocktailArr
    .sort((x, y) => x.title > y.title)
    .map((cocktail) => {
      return (
        <>
          <Link
            to={`/cocktails/${cocktail.title}`}
            style={{ textDecoration: "none" }}
          >
            <CocktailItem
              title={cocktail.title}
              category={cocktail.category}
              image={cocktail.image}
            />
          </Link>
        </>
      );
    });
  return (
    <>
      <h1>The Cocktail Compendium</h1>
      <div className="searchBar">
        <img src={search} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleArray(term);
          }}
        >
          <input type="text" onChange={(e) => setTerm(e.target.value)} />
        </form>
      </div>
      <div className="categoryButtons">
        <div className="catBlock" onClick={() => handleArray("unforgettables")}>
          <div
            className="categories"
            style={{
              backgroundColor: "#CBEEF3",
            }}
          >
            <img src={unforgettable}></img>
          </div>
          <h5>The Unforgettables</h5>
        </div>
        <div
          className="catBlock"
          onClick={() => handleArray("contemporary classics")}
        >
          <div
            className="categories"
            style={{
              backgroundColor: "#FFF5AD",
            }}
          >
            <img src={contemporaries}></img>
          </div>

          <h5>Contemporary Classics</h5>
        </div>
        <div className="catBlock" onClick={() => handleArray("new era")}>
          <div
            className="categories"
            style={{
              backgroundColor: "#F6BDD1",
            }}
          >
            <img src={newEra}></img>
          </div>
          <h5>New Era</h5>
        </div>
      </div>
      <div className="wrapper">{arrOfCocktails}</div>
    </>
  );
};

export default CocktailList;
