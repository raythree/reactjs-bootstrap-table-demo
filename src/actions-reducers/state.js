import objectAssign from 'object-assign';
import { dataService } from '../services/dataService';

// This is a hack to force a resize when options are changed via checkboxes.
// Normally this is not needed when the options are configured as on
// or off via the table properties.
function forceResize() {
  setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
  }, 500);
}

const initialState = {
  items: dataService.getData(),
  options: {
    tableClass: "table table-bordered table-hover",
    activeClass: "info",
    resize: true,
    headers: true,
    select: 'single'
  },
  selected: {},
  selectedCount: 0,
  pending: false
};

const constants = {};

const actions = {
  reloadData: (size) => {
    size = 500; // currently forcing it to 500
    return { type: 'RELOAD_DATA', size };
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
  },
  setTableClass: (value) => {
    return { type: 'SET_TABLE_CLASS', value };
  },
  setActiveClass: (value) => {
    return { type: 'SET_ACTIVE_CLASS', value };
  },
  clearSelection: () => {
    return { type: 'CLEAR_SELECTION' };
  },
  setSelectType: (select) => {
    return { type: 'SET_SELECT_TYPE', select };
  }
};

const reducer = (state = initialState, action) => {
  let newOpts;
  switch (action.type) {
    case 'RELOAD_DATA':
      dataService.reloadData(action.size);
      return objectAssign({}, state, {selected:{}, selectedCount: 0,
          items: dataService.getData()});

    case 'SET_SELECTED':
      return objectAssign({}, state, {selected: action.selected,
          selectedCount: Object.keys(action.selected).length });

    case 'CLEAR_SELECTION':
      return objectAssign({}, state, {selected: {}, selectedCount: 0});

    case 'DELETE_SELECTED':
      dataService.reloadData(action.size);
      return objectAssign({}, state, {selected:{}, selectedCount: 0, items: dataService.getData()});

    case 'SHOW_HEADER':
      forceResize();
      newOpts = objectAssign({}, state.options, {headers: action.show});
      return objectAssign({}, state, {options: newOpts});

    case 'SET_TABLE_CLASS':
      forceResize();
      newOpts = objectAssign({}, state.options, {tableClass: action.value});
      return objectAssign({}, state, {options: newOpts});

    case 'SET_ACTIVE_CLASS':
      newOpts = objectAssign({}, state.options, {activeClass: action.value});
      return objectAssign({}, state, {options: newOpts});

    case 'AUTO_RESIZE':
      forceResize();
      newOpts = objectAssign({}, state.options, {resize: action.value});
      return objectAssign({}, state, {options: newOpts});

    case 'SET_SELECT_TYPE':
      forceResize();
      newOpts = objectAssign({}, state.options, {select: action.select});
      return objectAssign({}, state, {selected: {}, selectedCount: 0, options: newOpts});

    default:
      return state;
  }
};

module.exports = {
  constants,
  actions,
  reducer
};
