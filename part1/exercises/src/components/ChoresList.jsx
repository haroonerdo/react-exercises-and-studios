import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores=["Dishes", "Laundry", "Vacuum", "Cook"]
   return (
      <div>
         <h3 className={classes.choresHeading}>Daily Chores List</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ol>
      </div>
   );
}
