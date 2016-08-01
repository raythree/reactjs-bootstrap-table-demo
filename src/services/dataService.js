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

  this.getData = function (col, dir) {
    if (col) {
      let sortedData = [];
      data.forEach(row => {
        if (data[col]) sortedData.push(row);
      });
      return sortedData.sort(() => {
        if (dir === 'asc') {
          return 1;
        }
        else if (dir === 'desc') {
          return 1;
        }
        else {
          return 1;
        }
      });
    }
    return data;
  };
}

const dataService = new DataService();

export { dataService };
