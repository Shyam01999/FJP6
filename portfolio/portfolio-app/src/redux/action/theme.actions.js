import { SET_THEME, TOGGLE_THEME } from "../actionTypes/theme.actionTypes";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});