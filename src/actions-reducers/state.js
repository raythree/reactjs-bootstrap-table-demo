import objectAssign from 'object-assign';
import { dataService } from '../services/dataService';
//import Logger from 'simple-console-logger';
//const log = Logger.getLogger("reducer");

const initialState = {
  items: dataService.getData(),
  options: {
    tableClass: "table",
    activeClass: "info",
    resize: null,
    headers: true
  },
  selected: {},
  pending: false
};

const constants = {};

const actions = {
  generateData: (size) => {
    return { type: 'GENERATE_DATA ', size: size };
  },
  setSelected: (newSelection) => {
    return { type: 'SET_SELECTED', selected: newSelection };
  },
  deleteSelected: (selected) => {
    return { type: 'DELETE_SELECTED', selected };
  },
  showHeader: (show) => {
    return { type: 'SHOW_HEADER', show };
  }
};

const reducer = (state = initialState, action) => {
  let newOpts;
  switch (action.type) {
    case 'GENERATE_DATA':
      dataService.generateData(action.size);
      return objectAssign({}, state, {items: dataService.getData()});

    case 'SET_SELECTED':
      return objectAssign({}, state, {selected: action.selected});

    case 'DELETE_SELECTED':
      dataService.generateData(action.size);
      return objectAssign({}, state, {items: dataService.getData()});

    case 'SHOW_HEADER':
      newOpts = objectAssign({}, state.options, {headers: action.show});
      return objectAssign({}, state, {options: newOpts});

    default:
      return state;
  }
};

module.exports = {
  constants,
  actions,
  reducer
};
