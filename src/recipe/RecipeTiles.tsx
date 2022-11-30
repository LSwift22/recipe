import React from "react";
import styled from "styled-components";
import RecipeTile from "./RecipeTile";

// @ts-ignore
const data = require("../recipes.json");

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface Recipe {
  id: string;
  name: string;
  ingredients: Array<Ingredient>;
}

function RecipeTiles() {
  return (
    <RecipeTileContainer>
      {data.map((recipe: Recipe) => {
        return (
          <RecipeTile
            key={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        );
      })}
    </RecipeTileContainer>
  );
}

const RecipeTileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default RecipeTiles;
