import React from "react";
import styles from '../../../calculator.module.css';


const SpecialButton = (props) => {
  return (
    <>
    <button className={styles.specials} onClick={props.special === "C" && props.clearDisplay}>{props.special}</button>
    </>
  );
};

export default SpecialButton;