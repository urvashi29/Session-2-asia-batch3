import React from "react";
import data from "./data.js";

const App = () => {
  console.log(data.recipe);

  //   list
  const recipeList = data.recipe.map((recipe) => {
    return (
      <React.Fragment key={recipe.idCategory}>
        <h3 style={{ color: "teal", textAlign: "center", fontSize: "30px" }}>
          {recipe.strCategory}
        </h3>
        <img src={recipe.strCategoryThumb} />
        <p style={{ color: "orange" }}>{recipe.strCategoryDescription}</p>
      </React.Fragment>
    );
  });

  return <>{recipeList}</>;
};

export default App;

//in html
{
  /* <p style="color: red; text-align: center; font-size: 20px"></p> */
}
