import React from 'react';
import './Recipe.css';

export const Recipe = ({ recipes }) => {
  return recipes.map((recipe, index) => {
    return (
      <div key={index} className="recipe">
        <h2 className="recipe-title">{recipe.recipe.label}</h2>
        <span className="calories">Calories: {recipe.recipe.calories}</span>
        <ol className="ingredients">
          {recipe.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ol>
        <img className="food-image" src={recipe.recipe.image} alt="recipe" />
      </div>
    );
  });
};
