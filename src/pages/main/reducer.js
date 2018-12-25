import * as t from './actionTypes';

export const initialState = {
  payload: {
    docCount: 0
  },
  form: {
    values: {},
    errors: {},
    suggestions: {}
  },
  message: {
    text: "",
    type: "error",
    show: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SUGGEST_SET:
      return {
        ...state,
        form: {
          ...state.form,
          suggestions: {
            ...state.form.suggestions,
            [action.name]: action.suggestions || []
          }
        }
      }
    case t.VALUE_SET:
      const {name, value, valid} = action.payload;
      return {
        ...state,
        form: {
          ...state.form,
          values: {
            ...state.form.values,
            [name]: value
          },
          errors: {
            ...state.form.errors,
            [name]: !valid
          }
        }
      }
    case t.FORM_CLEAR:
      return {
        ...state,
        form: {
          ...state.form,
          values: {},
          errors: {}
        }
      }
    case t.MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          ...action.payload
        }
      }
    case t.DOC_COUNT:
      return {
        ...state,
        error: action.error || null,
        loading: action.loading || false,
        payload: {
          ...state.payload,
          docCount: action.payload
        }
      }
    default:
      return state
  }
}