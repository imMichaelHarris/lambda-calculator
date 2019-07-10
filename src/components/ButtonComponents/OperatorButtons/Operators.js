import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
import styles from '../../../calculator.module.css';


//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className={styles.operatorList}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map(operator => (
        <OperatorButton operator={operator} addExpression={props.addExpression} evaluate={props.evaluate} />
      ))}
    </div>
  );
};

export default Operators;
