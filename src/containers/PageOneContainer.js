import React from 'react';
import {connect} from 'react-redux';

import {getBoundActionCreators} from '../actions-reducers';

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
    selected: state.state.selected,
    selectedCount: state.state.selectedCount,
    alerts: state.state.alerts
  };
}

function mapDispatchToProps(dispatch) {
  return getBoundActionCreators(dispatch, ['state']);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
