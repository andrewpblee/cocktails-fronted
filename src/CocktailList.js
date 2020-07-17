import React, { useState } from "react";
import CocktailItem from "./CocktailItem";
import cocktails from "./cocktails";

import { Link, Route } from "react-router-dom";

const CocktailList = () => {
  const [term, setTerm] = useState("");
  const [cocktailArr, filterCocktailArr] = useState(cocktails);

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
      <form
        className="searchBar"
        onSubmit={(e) => {
          let pattern = new RegExp(term, "gi");
          e.preventDefault();
          let filtered = cocktails.filter((x) =>
            x.title.concat(x.ingredients.join(""), x.category).match(pattern)
          );
          filterCocktailArr(filtered);
        }}
      >
        <input type="text" onChange={(e) => setTerm(e.target.value)} />
      </form>
      <div className="wrapper">{arrOfCocktails}</div>
    </>
  );
};

export default CocktailList;
