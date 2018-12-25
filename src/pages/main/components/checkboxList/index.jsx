import React, { Component } from "react";
import _ from "lodash";
import styles from "./index.module.scss";
import Checkbox from "../checkboxItem";

class CheckboxList extends Component {
  onChange = (e) => {
    const {name} = e.target;
    const {onChange, value} = this.props;
    const newValue = _.xor(value, [name]);
    onChange({
      target: {
        name: this.props.name,
        value: newValue
      }
    })
  }
  render = () => {
    const {title, items, value} = this.props;
    return (
      <fieldset className={styles.fieldset}>
        <legend>{title}</legend>
        <div className={styles.boxlist}>
          {items.map((i, k) => (
            <Checkbox key={k} title={i} checked={value.indexOf(i) >= 0} onChange={this.onChange}/>
          ))}
        </div>
      </fieldset>
    );
  };
}

export default CheckboxList;
