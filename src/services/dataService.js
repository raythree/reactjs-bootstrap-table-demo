//import Promise from 'bluebird';

function DataService() {
  let data = [];

  function createData(size) {
      data = [];
      for (let i = 0; i < size; i++) {
        data.push({
          id: i + 1,
          col1: 'Column One row ' + i,
          col2: 'Column Two row ' + i,
          col3: 'Column Three row ' + i,
          rand: Math.floor(Math.random() * 5000)
        });
      }
      return data;
  }

  data = createData(500);

  this.reloadData = function(size) {
    data = createData(size);
  }

  this.delete = function(selection) {
    let newData = [];
    data.forEach(function (row) {
      if (!selection[row.id]) {
        newData.push(row);
      }
    });
    data = newData;
  }

  this.sort = function (col, dir) {
    if (col === 'rand') {
      data.sort(function (first, second) {
        if (dir === 'asc') {
          return first.rand - second.rand;
        }
        else if (dir === 'desc') {
          return second.rand - first.rand;
        }
        else {
          return first.id - second.id;
        }
      });
    }
    return data;
  };

  this.getData = function (col, dir) {
    return data;
  };
}

const dataService = new DataService();

export { dataService };
