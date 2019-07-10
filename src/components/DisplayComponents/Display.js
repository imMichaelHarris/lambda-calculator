import React from "react";
import styles from "../../calculator.module.css";

const Display = (props) => {
  return (
    <div>
      <h2 className={styles.display}>{props.expression}</h2>
    </div>
  );
};
export default Display;
