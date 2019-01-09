import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import styles from "./index.module.scss";
import Input from "../input";
import CheckboxList from "../checkboxList";
import Checkbox from "../checkboxItem";
import Button from "../button";
import * as actions from "../../actions";
import formDescribe from "./formDescribe";

class Form extends Component {
  updateValues = e => {
    const { name, value } = e.target;
    const input = _.find(formDescribe, { name });
    const validator = input && input.validator;
    const valid = !validator || (validator && validator(value));
    this.props.dispatch(actions.updateValue({ name, value, valid }));
    if (input.suggest) {
      this.dispatch(input.suggest(name, value));
    }
  };
  dispatch = _.debounce(this.props.dispatch, 250);
  submitForm = () => {
    console.log(this.props.values);
    const { values } = this.props;
    _.each(formDescribe, i => {
      if (i.validator) {
        const name = i.name;
        const value = values[i.name];
        const valid = i.validator(value || "");
        if (!valid) {
          this.props.dispatch(actions.updateValue({ name, value, valid }));
        }
      }
    });
    process.nextTick(() => {
      const errors = _.pickBy(this.props.errors, i => i === true);
      if (_.keys(errors).length > 0) {
        console.log("error", errors);
        this.props.dispatch(actions.putMessage({
          text: "Заполните все необходимые поля формы",
          show: true,
          timeout: 1000 * 60
        }));
      } else {
        this.props.dispatch(actions.submitForm(this.props.values));
      }
    });
  };
  render = () => {
    const { values, suggestions, errors } = this.props;
    return (
      <form className={styles.form} id="form">
        {/* <h1 id="form" className={styles.h1}>
          Присоединиться
        </h1> */}
        {_(formDescribe)
          .filter({ type: "text" })
          .map(i => (
            <Input
              key={i.name}
              mask={i.mask}
              name={i.name}
              title={i.title}
              error={errors[i.name]}
              value={values[i.name] || ""}
              suggestions={suggestions[i.name]}
              onChange={this.updateValues}
            />
          ))
          .value()}
        <CheckboxList
          name="helper"
          title={_.find(formDescribe, { name: "helper" }).title}
          items={_.find(formDescribe, { name: "helper" }).items}
          value={values["helper"] || []}
          onChange={this.updateValues}
        />
        <Checkbox
          title={_.find(formDescribe, { name: "privacy" }).title}
          name="privacy"
          checked={this.props.values.privacy || false}
          error={errors.privacy}
          onChange={() =>
            this.updateValues({
              target: { name: "privacy", value: !this.props.values.privacy }
            })
          }
        />
        <Checkbox
          title={_.find(formDescribe, { name: "join" }).title}
          name="join"
          checked={this.props.values.join || false}
          error={errors.join}
          onChange={() =>
            this.updateValues({
              target: { name: "join", value: !this.props.values.join }
            })
          }
        />
        <Button onClick={this.submitForm} title="Отправить" />
      </form>
    );
  };
}

export default connect(state => ({
  ...state.main.form
}))(Form);
