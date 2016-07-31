import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actions} from '../actions-reducers';

import PageOne from '../components/PageOne';

export const Container = (props) => {
  return (
    <PageOne {...props} />
  );
};

function mapStateToProps(state) {
  return {
    data: state.data.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
