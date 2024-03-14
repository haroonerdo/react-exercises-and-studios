import React from 'react';
import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
const ingredients=["White Flour", "Sugar", "Baking Powder", "Baking Soda ", 
"Salt", "Eggs", "Milk", "Vanilla Essence", "Butter"]
return(
   <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
         <li>{ingredients[5]}</li>
         <li>{ingredients[6]}</li>
         <li>{ingredients[7]}</li>
         <li>{ingredients[8]}</li>
         <li>{ingredients[9]}</li>
      </ul>
   </div>
)
}
