import React from "react";
import unforgettable from "./unforgettable.png";
import newEra from "./newera.png";
import contemporaries from "./contemporaries.png";
import placeholder from "./placeholder.png";

const CocktailItem = ({ title, category, image }) => {
  const root = "https:";
  const imageVar = image.match(/.svg.png/, "g") ? placeholder : root + image;
  return (
    <div className="cocktailContainer">
      <img className="cocktailImage" src={imageVar}></img>
      <div
        className="categoryContainer"
        style={
          category === "The Unforgettables"
            ? { backgroundColor: "#CBEEF3" }
            : category === "New Era"
            ? { backgroundColor: "#F6BDD1" }
            : { backgroundColor: "#FFF5AD" }
        }
      >
        <img
          className="categoryLogo"
          src={
            category === "The Unforgettables"
              ? unforgettable
              : category === "New Era"
              ? newEra
              : contemporaries
          }
        ></img>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default CocktailItem;
