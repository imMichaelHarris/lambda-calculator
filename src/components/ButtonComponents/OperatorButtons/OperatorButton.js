import React from "react";
import styles from '../../../calculator.module.css';


const OperatorButton = (props) => {
  return (
    <>
    <button className={styles.operators} onClick={() => props.addExpression(props.operator.value)}>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;