import React from "react";
import styles from '../../calculator.module.css';


const Display = () => {
  return <div>{/* Display any props data here */}
    <input className={styles.display} type="number" placeholder="0"/>
  </div>;
};
export default Display;