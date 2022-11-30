import React from "react";
import styled from "styled-components";
import RecipeTiles from "./recipe/RecipeTiles";

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <RecipeHeader>Recipe</RecipeHeader>
      </HeaderContainer>

      <AppBody>
        <RecipeTiles />
      </AppBody>
    </AppContainer>
  );
}

const AppBody = styled.div``

const AppContainer = styled.div`
  min-height: 100vh;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

const RecipeHeader = styled.h1``;

export default App;
