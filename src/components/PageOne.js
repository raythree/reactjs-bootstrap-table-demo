import React from 'react';
import { DropdownList } from 'react-widgets';
import BootstrapTable from 'reactjs-bootstrap-table';
import Logger from 'simple-console-logger';

const log = Logger.getLogger("PageOne");

function noop() {} // get rid of warnings about checkbox change handler

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onShowHeader = this.onShowHeader.bind(this);
    this.onAutoResize = this.onAutoResize.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.changeTableClass = this.changeTableClass.bind(this);
    this.changeActiveClass = this.changeActiveClass.bind(this);
  }

  changeTableClass(val) {
    this.props.setTableClass(val);
  }

  changeActiveClass(val) {
    this.props.setActiveClass(val);
  }

  setSelected(e) {
    if (this.refs.selectedInput) {
      log.debug('setSelected: ' + this.refs.selectedInput.value);
    }
  }

  onShowHeader(e) {
    log.debug('onShowHeader: ' + e.target.checked);
    this.props.showHeader(e.target.checked);
  }

  onAutoResize(e) {
    log.debug('onAutoResize: ' + e.target.checked);
    this.props.autoResize(e.target.checked);
  }

  onChange(newSelection) {
    this.props.setSelected(newSelection);
  }

  render() {
    let resize = null;
    if (this.props.options.resize) {
      resize = {extra: 0, minSize: 200, elements: ['header', 'footer']};
    }
    log.debug('resize option is ' + resize);

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

    let columns = [
      { name: 'id', display: 'ID', width: 1 },
      { name: 'col1', display: 'Column One' },
      { name: 'col2', display: 'Column Two' },
      { name: 'col3', display: 'Column Three' },
      { name: 'rand', display: 'Random (sortable)', sort: true }
    ];

    return (
      <div>
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
                <DropdownList data={tableClass} defaultValue={this.props.options.tableClass}
                    onChange={this.changeTableClass}/>
              </div>
              <div className="col-md-4">
                <label>activeClass</label>
                <DropdownList data={activeClass} defaultValue={this.props.options.activeClass}
                  onChange={this.changeActiveClass}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" checked={this.props.options.headers}
                      onClick={this.onShowHeader} onChange={noop}/>
                    Show Column Headers
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" checked={this.props.options.resize}
                      onClick={this.onAutoResize} onChange={noop}/>
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
                <div style={{marginTop: '1em', marginBottom: '1em', fontWeight: 'bold'}}>Programmatic Selection: </div>
                <div className="input-group">
                  <input type="text" className="form-control" ref="selectedInput"
                    placeholder="Enter ID values separated by spaces ..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" onClick={this.setSelected} type="button">Select</button>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-12">

            <BootstrapTable data={this.props.data}
              headers={this.props.options.headers}
              select="multiple"
              tableClass={this.props.options.tableClass}
              resize={resize}
              activeClass={this.props.options.activeClass}
              selected={this.props.selected}
              onChange={this.onChange}
              columns={columns}/>

            <div className="well" id="footer" style={{marginTop: '-20px', fontWeight: 'bold', color: 'green'}}>
                Selected: {'1'}
              <button className="btn btn-primary pull-right" style={{display: 'inline-block', marginTop: -5}}>
                Clear Selection
              </button>
              <div style={{height: 1}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageOne.propTypes = { data: React.PropTypes.array };
PageOne.defaultProps = { data: [] };

export default PageOne;
