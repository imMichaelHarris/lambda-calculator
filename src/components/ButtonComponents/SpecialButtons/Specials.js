import React from "react";
import {specials} from '../../../data'
import SpecialButton from "./SpecialButton";



const Specials = (props) => {

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map(special => <SpecialButton special={special} clearDisplay={props.clearDisplay} />)}
    </div>
  );
};

export default Specials;
