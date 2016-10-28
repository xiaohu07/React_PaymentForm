var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);


