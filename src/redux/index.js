import { createStore } from "redux";
const reducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "SET_LOGIN_USER22":
      return { ...state, ...{ userInfo: action.userInfo } };
    case "increase2":
      return { ...state, ...{ count: state.count + 1 } };
    default:
      return { ...state, ...{ userInfo: {} } };
  }
};

export const store = createStore(reducers);
