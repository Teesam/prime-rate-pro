import {
    SET_TOKEN,
    LOGOUT,
    SET_USER,
  } from '../constants/constants';
  
  const initialState = {
    token: null,
    user: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_TOKEN:
        return { ...state, token: action.payload.token };
      case SET_USER:
        return { ...state, user: action.payload.user };
      case LOGOUT:
        return { ...state };
      default:
        return { ...state };
    }
  }
