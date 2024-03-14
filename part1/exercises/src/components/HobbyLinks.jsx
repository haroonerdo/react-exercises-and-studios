import React from 'react';
import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
   render() {
      const hobbyLinks = ["Reading", "TASOM"];
      

    return (
        <div>
           <h3 className = {classes.hobbyHeading}>My Hobbies</h3>
           <a href = {hobbyLinks[0]}>https://www.goodreads.com/ </a>
           <br />
           <a href = {hobbyLinks[1]}>https://tasom.org/</a>
        </div>      
     );
}
}
export default HobbyLinks;