import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import axios from "axios";
const initialState = {
  password: "",
  email: "",
  error: "",
  LoggedOn: false
};
const GET_SESSION = "GET_SESSION";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export function login(email, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { email, password })
  };
}

export function getSession() {
  return {
    type: GET_SESSION,
    payload: axios.get("/auth/cookie")
  };
}
export function logout() {
  return {
    type: LOGOUT,
    payload: axios.delete("/auth/logout")
  };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        email: action.payload.data.email
      };
    case `${LOGIN}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        email: action.payload.data,
        password: action.payload.data
      };
    case `${LOGOUT}_FULFILLED`:
      return {
        ...state,
        email: ""
      };

    default:
      return state;
  }
}
export default createStore(reducer, applyMiddleware(promise));
