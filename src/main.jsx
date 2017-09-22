'use strict'

require('bootstrap/dist/css/bootstrap.css');
require('./styles/main.scss');
require('font-awesome/css/font-awesome.css');

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('./router.jsx');

ReactDOM.render(<Router />, document.getElementById('container'));
