import React from "react";
import styles from '../../../calculator.module.css';


const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={styles.numbers}>{props.number}</button>
    </>
  );
};

export default NumberButton;