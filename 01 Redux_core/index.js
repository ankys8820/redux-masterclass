import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// store
const store = createStore(reducer, applyMiddleware(logger.default));

// history for the states
const history = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    // immutability
    // {state.amount = state.amount + 1;}
    return { amount: state.amount + 1 };
  }
  return state;
}

//global state
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// call the reducer in every 5 sec.
setInterval(() => {
  store.dispatch({
    type: "increment",
  });
}, 5000);
