import React from "react";
import styles from "./index.module.scss";

export default ({ title, name, checked, error, onChange }) => {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e =>
          onChange({
            target: { name: name || title, checked: e.target.checked }
          })
        }
      />
      <span className={styles.checkmark} />
      <span className={error ? styles.error : ""}>{title}</span>
    </label>
  );
};
