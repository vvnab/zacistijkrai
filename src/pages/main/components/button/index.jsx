import React from "react";
import styles from "./index.module.scss";

export default ({onClick, title}) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {title}
    </div>
  )
}