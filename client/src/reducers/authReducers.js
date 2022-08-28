import {
    SET_CURRENT_USER,
    USER_LOADING
  } from "../actions/types";
  const isEmpty = require("is-empty");
  const user =JSON.parse(localStorage.getItem("user"))
  const initialState = user
  ? {isLoggedIn: true,
      isAuthenticated:true,
      user}
  : {isLoggedIn: false,
      isAuthenticated: false,
      user: null}

  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }