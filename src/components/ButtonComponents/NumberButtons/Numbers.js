import React, {useState} from "react";
import {numbers as nums} from '../../../data'
import NumberButton from "./NumberButton";

import styles from '../../../calculator.module.css';


const Numbers = () => {
  const [numbers, setNumber] = useState(nums)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map(num => <NumberButton number={num}/>)}
    </div>
  );
};

export default Numbers;