import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = [];

  for (const ing in props.ingredients) {
    for (let i = 0; i < props.ingredients[ing]; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={ing + i} type={ing} />
      );
    }
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
