import * as t from './actionTypes';

export const initialState = {
  values: {},
  errors: {},
  suggestions: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SUGGEST_SET:
      return {
        ...state,
        error: action.error,
        loading: action.loading,
        payload: {
          ...state.payload,
          suggestions: action.payload || []
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