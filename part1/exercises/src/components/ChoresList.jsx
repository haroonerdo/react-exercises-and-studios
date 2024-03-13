import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores=["Dishes", "Laundry", "Vacuum", "Cook"]
   return (
      <div>
         <h3 className={clases.choresHeading}>Daily Chores List</h3>
         <ol>
            <li className={clases.choresText}>{chores[0]}</li>
            <li className={clases.choresText}>{chores[1]}</li>
            <li className={clases.choresText}>{chores[2]}</li>
            <li className={clases.choresText}>{chores[3]}</li>
         </ol>
      </div>
   );
}
