import React from "react";
import styles from '../../../calculator.module.css';


const SpecialButton = (props) => {
  return (
    <>
    <button className={styles.specials}>{props.special}</button>
    </>
  );
};

export default SpecialButton;