import objectAssign from 'object-assign';
import { dataService } from '../services/dataService';

// This is a hack to force a resize when options are changed via checkboxes.
// Normally this is not needed when the options are configured as on
// or off via the table properties.
function forceResize() {
  console.log('setting resize');
  setTimeout(function () {
    console.log('resized');
    window.dispatchEvent(new Event('resize'));
  }, 500);
}

const initialState = {
  items: dataService.getData(),
  options: {
    tableClass: "table",
    activeClass: "info",
    resize: true,
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
  },
  autoResize: (value) => {
    return { type: 'AUTO_RESIZE', value };
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
      forceResize();
      newOpts = objectAssign({}, state.options, {headers: action.show});
      return objectAssign({}, state, {options: newOpts});

    case 'AUTO_RESIZE':
      forceResize();
      console.log('reducer setting resize to: ' + action.value);
      newOpts = objectAssign({}, state.options, {resize: action.value});
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
