import React from 'react';
import { DropdownList } from 'react-widgets';
import BootstrapTable from 'reactjs-bootstrap-table';
import Logger from 'simple-console-logger';

const log = Logger.getLogger("PageOne");

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onShowHeader = this.onShowHeader.bind(this);
  }

  onShowHeader(e) {
    log.debug('onShowHeader: ' + e.target.checked)
    this.props.showHeader(e.target.checked);
  }

  onChange(newSelection) {
    this.props.setSelected(newSelection);
  }

  render() {
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

    let checkHeaders = this.props.options.headers ? 'checked' : '';

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
                    <input type="checkbox" value={checkHeaders} onClick={this.onShowHeader}/>
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
                <div style={{marginTop: '1em', marginBottom: '1em', fontWeight: 'bold'}}>Programmatic Selection: </div>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Space separated IDs of records to select ..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Select</button>
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
              tableClass="table table-bordered"
              resize={{extra: 0, minSize: 200, elements: ['header', 'footer']}}
              activeClass={this.props.activeClass}
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
