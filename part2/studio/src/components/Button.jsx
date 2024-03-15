import React from "react";
import "./styling.css";
import SaveButton from './SaveButton.jsx';
import ClickedButton from './ClickedButton.jsx'


function Button(props) {
  return props.saveButton ? <SaveButton /> : <ClickedButton />;
}
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 