function selectionFromString(str) {
  const selection = {};
  if (!str) return selection;

  const parts = str.split(' ');
  if (parts && parts.length) {
    parts.forEach(item => {
      try {
        let index = parseInt(item);
        if (index >= 1 && index <= 500) {
          selection[index] = true;
        }
      }
      catch(ex) {
      }
    });
  }
  return selection;
}

export { selectionFromString };
