import React from 'react';
import Logger from 'simple-console-logger';

Logger.configure({level: 'debug'});

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('react-widgets/dist/css/react-widgets.css');

const App = (props) => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
