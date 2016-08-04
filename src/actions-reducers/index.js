import { combineReducers, bindActionCreators } from 'redux';
import { routerReducer } from 'react-router-redux';

const actionReducers = {};
actionReducers['state'] = require('./state');

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

function getBoundActionCreators(dispatch, which) {
  // if which parameter is provided make sure it's an array
  if (which) {
    if (typeof which.indexOf !== 'function') {
      throw new Error('getBoundActionCreators second parameter must be an array');
    }
  }
  const boundCreators = {};
  Object.keys(actionReducers).forEach((name) => {
    let actions = actionReducers[name].actions;
    let bound = {};
    if (!which) {
      // we want all of them
      bound = bindActionCreators(actions, dispatch);
    }
    else {
      if (which.length) {
        if (which.indexOf(name) >= 0) bound = bindActionCreators(actions, dispatch);
      }
    }
    // copy the selected set into the result
    Object.keys(bound).forEach(name => {
      boundCreators[name] = bound[name];
    });
  });
  return boundCreators;
}

reducers.routing = routerReducer;

let reducer = combineReducers(reducers);

export {
  action,
  actions,
  reducer,
  getBoundActionCreators
};
