const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./wordRelayHooks');

ReactDom.render(<WordRelay/>, document.querySelector('#root'));