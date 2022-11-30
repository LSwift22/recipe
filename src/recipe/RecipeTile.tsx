import React from "react";
import styled from "styled-components";
import { Ingredient } from "./RecipeTiles";

function RecipeTile({ name, ingredients }: { name: string, ingredients: Array<Ingredient> }) {
  return (
    <RecipeTileContainer>
      <div
        style={{
          alignItems: "center",
        }}
      >
        {name}
      </div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>{ingredient.name}</li>
        ))}
      </ul>
    </RecipeTileContainer>
  );
}

const RecipeTileContainer = styled.div`
  background-color: rgb(29, 139, 207);
  color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 270px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 10px grey;
`

export default RecipeTile;
