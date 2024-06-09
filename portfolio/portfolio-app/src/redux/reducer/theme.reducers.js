import { SET_THEME, TOGGLE_THEME } from "../actionTypes/theme.actionTypes";

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
};

const themeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case TOGGLE_THEME:
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    case SET_THEME:
      localStorage.setItem('theme', payload);
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default themeReducer;