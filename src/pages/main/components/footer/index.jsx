import React, { Component } from "react";
import styles from "./index.module.scss";

class Footer extends Component {
  render() {
    return <div className={styles.footer}>
      Отправляя данную формы вы даёте согласие на обработку ваших персональных данных в соответствии с положениями и условиями Политики обработки персональных данных.
    </div>
  }
}

export default Footer;