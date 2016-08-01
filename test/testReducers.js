import { actions, reducer } from '../src/actions-reducers';
import { assert } from 'chai';
import configureStore from '../src/store/configureStore';

describe('reducer tests', function () {
  let store, state;

  beforeEach(() => {
    store = configureStore();
  });

  it('should export the correct state', function () {
    state = store.getState();
    assert(state.state);
    assert(state.state.options);
    assert(state.state.items.length === 500);
  });

});
