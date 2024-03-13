import React from 'react';
import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
   render() {
      const hobbyLinks = ["Readig", "TASOM"];
      

    return (
        <div>
           <h3 className = {classes.hobbyHeading}>My Hobies</h3>
           <a href = {hobbyLinks[0]}>https://www.goodreads.com/ </a>
           <a href = {hobbyLinks[1]}>https://tasom.org/</a>
        </div>      
     );
}
}
export default HobbyLinks;