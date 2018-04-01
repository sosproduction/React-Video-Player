webpackHotUpdate(0,{

/***/ "./js/ClapprPlayer.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _clappr = __webpack_require__("./node_modules/clappr/dist/clappr.js");

var _clappr2 = _interopRequireDefault(_clappr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
  displayName: '_default',

  propTypes: {
    source: _react2.default.PropTypes.string
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    var changed = nextProps.source !== this.props.source;
    this.props = nextProps;
    this.state = nextState;
    if (changed) {
      this.change(nextProps.source);
    }
    return false;
  },
  componentDidMount: function componentDidMount() {
    this.change(this.props.source);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.destroyPlayer();
  },
  destroyPlayer: function destroyPlayer() {
    if (this.player) {
      this.player.destroy();
    }
    this.player = null;
  },
  change: function change(source) {
    if (this.player) {
      this.destroyPlayer();
    }
    this.player = new _clappr2.default.Player({
      parent: this.refs.player,
      source: { source: source },
      width: '100%',
      height: '100%',
      hlsjsConfig: {
        enableWorker: true
      }
    });
  },
  render: function render() {
    return +_react2.default.createElement(_clappr2.default, null);
  }
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/theblackcube/blockchains/js/ClapprPlayer.jsx');
}();

;

/***/ })

})