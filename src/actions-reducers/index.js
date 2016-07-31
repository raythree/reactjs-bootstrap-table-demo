import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const actionReducers = {};
actionReducers['data'] = require('./data');

const action = {}; // action constants
const actions = {};
const reducers = {};

Object.keys(actionReducers).forEach((name) => {
  let acts = actionReducers[name].actions;
  Object.keys(acts).forEach((key) => {
    actions[key] = acts[key];
  });
  let constants = actionReducers[name].constants;
  if (constants) {
    Object.keys(constants).forEach((key) => {
      action[key] = constants[key];
    });
  }
  reducers[name] = actionReducers[name].reducer;
});

reducers.routing = routerReducer;

let reducer = combineReducers(reducers);

export {
  action,
  actions,
  reducer
};
