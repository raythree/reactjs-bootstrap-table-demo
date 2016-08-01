# reactjs-bootstrap-table demo

This is a demo for reactjs-bootstrap-table. This project was based on [this fork of react-slingshot](https://github.com/raythree/react-slingshot).

A live [demo is here](http://bst.ray3.io).

Usage:

```
git clone https://github.com/raythree/reactjs-bootstrap-table-demo
cd reactjs-bootstrap-table-demo
npm install
npm start -s
```

### Notes for IE
The table component was tested on IE Edge and IE 11, and seems to work fine. However, with the demo functions changing some of the features on the fly mess up the layout (like toggling auto-resize). However the features work fine when either configured on or off when actually using the table in your code. Also, disabling text select, then SHIFT-CLICK to select will still show selected text in the table. This is because that option adds these properties to the table:

```javascript
if (this.props.disableSelectText) {
  ['WebkitUserSelect', 'MozUserSelect', 'msUserSelect'].forEach(key => { style[key] = 'none'; });
}
```
which works in other browsers, but in IE you need to add this on top-level elements in your document, otherwise the text selection is triggered from above.
