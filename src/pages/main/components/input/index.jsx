import React, { Component } from "react";
import MaskedInput from "react-text-mask";

import styles from "./index.module.scss";

class Input extends Component {
  state = { inFocus: true };
  onClick = value => {
    const { onChange, name } = this.props;
    onChange({
      target: {
        name,
        value
      }
    });
    this.input.focus();
  };
  render = () => {
    const { onChange, name, title, error, mask, value, suggestions } = this.props;
    const props = {
      className: `${styles.input} ${error && styles.errored}`,
      type: "text",
      name: name,
      placeholder: title,
      value: value,
      onChange: (e) => {
        onChange(e);
        this.setState({ inFocus: true });
      },
      ref : (el) => this.input = el,
      onBlur: () => {
        setTimeout(() => this.setState({ inFocus: false }), 100);
      },
      onFocus: () => {
        this.setState({ inFocus: true });
      }
    }
    return (
      <div className={styles.container}>
        {!mask ? <input {...props}/> : <MaskedInput {...props} mask={mask}/>}
        {value && <div className={styles.label}>{title}</div>}
        {this.state.inFocus && suggestions && suggestions.length > 0 && (
          <div className={styles.suggestionsList}>
            {suggestions.map((i, k) => (
              <div
                className={styles.suggestion}
                key={k}
                onClick={() => this.onClick(i)}
              >
                {i}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
}

export default Input;
