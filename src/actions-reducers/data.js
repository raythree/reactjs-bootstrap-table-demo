import objectAssign from 'object-assign';
import { dataService } from '../services/dataService';

const initialState = {
  items: dataService.getData(),
  pending: false
};

const constants = {};

const actions = {
  generateData: (size) => {
    return { type: 'GENERATE_DATA ', size: size };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_DATA':
      dataService.generateData(action.size);
      return objectAssign({}, state, {items: dataService.getData()});

    default:
      return state;
  }
};

module.exports = {
  constants,
  actions,
  reducer
};
