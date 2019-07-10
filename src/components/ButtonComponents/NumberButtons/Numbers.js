import React from "react";
import {numbers} from '../../../data'
import NumberButton from "./NumberButton";
import styles from '../../../calculator.module.css';




const Numbers = (props) => {
  return (
    <div className={styles.calcButtons}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map(num => <NumberButton number={num}  addExpression={props.addExpression }/>)}
    </div>
  );
};

export default Numbers;