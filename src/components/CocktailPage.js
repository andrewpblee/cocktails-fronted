import React from "react";
import cocktails from "../cocktails";
import alcohol from "../alcohol.png";
import glass from "../glass.png";
import garnish from "../garnish.png";
import type from "../type.png";
import placeholder from "../placeholder.png";
import timing from "../timing.png";

const CocktailPage = (props) => {
  const name = props.match.params.cocktailParam;
  // There should only ever be one cocktail returned
  // This is not a great solution, but as I'm controlling the array input - no unexpected results should be returned
  const cocktail = cocktails.filter((c) => c.title === name)[0];
  const image = cocktail.image.match(/svg.png/, "g")
    ? placeholder
    : "https:" + cocktail.image;
  const ingredients = cocktail.ingredients.map((i) => <li>{i}</li>);
  console.log(cocktail);
  return (
    <div className="cocktailPageContainer">
      <h1>{cocktail.title}</h1>
      <img className="cocktailImg" src={image} />
      <div className="cocktailDetails">
        <img src={alcohol} />
        <h5>Alcohol</h5>
        <h6>{cocktail.alcohol.join(", ")}</h6>
        <h5>Glassware</h5>
        <img src={glass} />
        <h6>{cocktail.drinkware}</h6>
        <img
          style={
            cocktail["standard-garnish"] === undefined
              ? { display: "none" }
              : { display: "visible" }
          }
          src={garnish}
        />
        <h5
          style={
            cocktail["standard-garnish"] === undefined
              ? { display: "none" }
              : { display: "visible" }
          }
        >
          Garnish
        </h5>
        <h6
          style={
            cocktail["standard-garnish"] === undefined
              ? { display: "none" }
              : { display: "visible" }
          }
        >
          {cocktail["standard-garnish"]}
        </h6>
        <img src={type} />
        <h5>Type</h5>
        <h6>{cocktail.type}</h6>
        <img
          style={
            cocktail.timing === undefined
              ? { display: "none" }
              : { display: "visible" }
          }
          src={timing}
        />
        <h5
          style={
            cocktail.timing === undefined
              ? { display: "none" }
              : { display: "visible" }
          }
        >
          Timing
        </h5>
        <h6
          style={
            cocktail.timing === undefined
              ? { display: "none" }
              : { display: "visible" }
          }
        >
          {cocktail.timing}
        </h6>
      </div>
      <div className="ingredientsAndPrep">
        <h5 className="ingredients">Ingredients</h5>
        <ul className="ingredients">{ingredients}</ul>
        <h5 className="prep">Preparation</h5>
        <p className="prep">{cocktail.preparation}</p>
        <p className="prep served">{cocktail.served}</p>
      </div>
    </div>
  );
};

export default CocktailPage;
