import React from 'react';
import {connect} from 'react-redux';
import Logger from 'simple-console-logger';

const log = Logger.getLogger('PageOneContainer');

//import {bindActionCreators} from 'redux';

import {actions} from '../actions-reducers';

import PageOne from '../components/PageOne';

export const Container = (props) => {
  return (
    <PageOne {...props} />
  );
};

function mapStateToProps(state) {
  return {
    data: state.state.items,
    options: state.state.options,
    selected: state.state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: function (newSelection) {
      dispatch(actions.setSelected(newSelection));
    },
    showHeader: function (show) {
      log.debug('showHeader: ' + show);
      dispatch(actions.showHeader(show));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
