import React from 'react';
const DropdownList = require('react-widgets').DropdownList;

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('react-widgets/dist/css/react-widgets.css');

const App = (props) => {

  let select = [
    'none',
    'single',
    'multiple'
  ];

  let tableClass = [
    'table',
    'table table-hover',
    'table table-bordered table-hover',
    'table table-bordered table-hover table-condensed',
  ];

  let activeClass = [
    'active',
    'info'
  ];

  return (
    <div className="container-fluid">
      <div className="row" id="header">
        <div className="col-md-12 well">

          <h3>Demo for <span style={{color:'green'}}>reactjs-bootstrap-table</span></h3>
          <div className="row">
            <div className="col-md-4">
              <label>select</label>
              <DropdownList data={select} defaultValue={"none"} style={{maxWidth: 400}}/>
            </div>
            <div className="col-md-4">
              <label>tableClass</label>
              <DropdownList data={tableClass} defaultValue={"table table-bordered table-hover"} style={{maxWidth: 400}}/>
            </div>
            <div className="col-md-4">
              <label>activeClass</label>
              <DropdownList data={activeClass} defaultValue={"info"} style={{maxWidth: 400}}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Show Column Headers
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Auto Resize to fit
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Disable Text Select
                </label>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{color: 'green', fontWeight: 'bold', marginTop: '1em', marginBottom: '1em'}}>Selected: </div>
              <div>
                <button className="btn btn-primary" style={{marginRight:'1em'}}>Clear Selection</button>
                <button className="btn btn-warning">
                  <span className="glyphicon glyphicon-remove"></span> Delete Selected
                </button>
              </div>
            </div>

            <div className="col-md-4" style={{padingRight: 30}}>
              <div style={{marginTop: '1em', marginBottom: '1em'}}>Enter IDs of records to select: </div>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter space separated IDs..."/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Select</button>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

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
