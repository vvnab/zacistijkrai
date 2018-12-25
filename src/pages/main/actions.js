import _ from "lodash";
import * as api from '../../api';
import * as t from './actionTypes';
import { store } from "../../store";

export const putMessage = (payload) => {
  if (payload && payload.show) {
    setTimeout(() => store.dispatch(putMessage({
      show: false
    })), payload.timeout || 5000);
  }
  return {
    type: t.MESSAGE,
    payload: {
      ...payload
    }
  }
};

export const suggestSet = (name, suggestions) => {
  return {
    type: t.SUGGEST_SET,
    name,
    suggestions
  }
};

export const suggestGet = (name, text) => async (dispatch, getState) => {
  try {
    const result = await api.getSuggestions(text);
    if (result) {
      // const suggestions = _.map(result.suggestions, "unrestricted_value");
      const suggestions = _.map(result.suggestions, "value");
      dispatch(suggestSet(name, suggestions));
    }
  } catch (error) {
    console.error(error.message);
  }
};



export const updateValue = (payload) => ({
  type: t.VALUE_SET,
  payload: {
    name: payload.name,
    value: payload.value,
    valid: payload.valid
  }
});

export const clearForm = () => ({
  type: t.FORM_CLEAR
});

export const submitForm = (formData) => async (dispatch, getState) => {
  try {
    await api.submitForm(formData);
    dispatch(clearForm());
    window.location = "#root";
    dispatch(putMessage({
      type: "info",
      show: true,
      text: "Спасибо! Скоро мы свяжемся с вами и обсудим дальнейшие шаги.",
      timeout: 1000 * 30
    }));
  } catch (error) {
    console.error(error.message);
  }
};