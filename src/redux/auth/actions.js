import {
    SET_TOKEN,
    SET_USER,
    GET_USER,
    LOGOUT
  } from '../constants/constants';
  
  export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: {
      token
    }
  });
  
  export const getUser = () => ({
    type: GET_USER
  });
  
  export const setUser = (user) => ({
    type: SET_USER,
    payload: {
      user
    }
  });
  
  export const logoutUser = () => ({
    type: LOGOUT,
  });
  