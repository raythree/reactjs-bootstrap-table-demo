import React from 'react';
import BootstrapTable from 'reactjs-bootstrap-table';

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected:{}}
    this.onChange = this.onChange.bind(this);
  }

  onChange(newSelection) {
    this.setState({selected: newSelection});
  }

  render() {
    let columns = [
      { name: 'id', display: 'ID', width: 1 },
      { name: 'col1', display: 'Column One' },
      { name: 'col2', display: 'Column Two' },
      { name: 'col3', display: 'Column Three' },
      { name: 'rand', display: 'Random (sortable)', sort: true }
    ];

    return (
      <div className="row">
        <div className="col-md-12">
          <BootstrapTable data={this.props.data}
            headers={true}
            select="multiple"
            tableClass="table table-bordered"
            resize={{extra: 160, minSize: 200, elements: ['header', 'footer']}}
            activeClass="info"
            selected={this.state.selected}
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
    );
  }
}

PageOne.propTypes = { data: React.PropTypes.array };
PageOne.defaultProps = { data: [] };

export default PageOne;
