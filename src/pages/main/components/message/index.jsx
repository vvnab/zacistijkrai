import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import styles from "./index.module.scss";

class Message extends Component {
  onClick = () => {
    this.props.putMessage({show: false});
  }
  render() {
    const { message } = this.props;
    const type =
      message.type === "info"
        ? styles.info
        : message.type === "error"
        ? styles.error
        : "";
    return (
      <div className={styles.container} onClick={this.onClick}>
        {message.show && (
          <div className={`${styles.message} ${type}`}>{message.text}</div>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  message: state.main.message
}), {
  putMessage: actions.putMessage
})(Message);
