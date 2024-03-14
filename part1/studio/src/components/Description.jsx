import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    let authorLink= "https://justamumnz.com/2021/01/12/the-best-waffle-recipe/";
    let authorPhoto="https://justamumnz.com/wp-content/uploads/2021/03/CD-Easter-Cake-2020-4.png";
    let authorName="ANNA ~ JUST A MUM";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "ANNA ~ JUST A MUM" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>JUST A MUM'S KITCHEN</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){
        return(
            <div>
                <div>
                <h1>"The Best Waffle Recipe"</h1>
                <p>Simple and delicious, this is the best waffle recipe, no need for any other! </p>
                </div>
                <RecipeAuthor/>
            </div>
       );
     }
    }
export default RecipeDescription; 
    