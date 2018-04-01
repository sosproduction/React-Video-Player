webpackHotUpdate(0,{

/***/ "./js/Details.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _Header = __webpack_require__("./js/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Spinner = __webpack_require__("./js/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _ClapprPlayer = __webpack_require__("./js/ClapprPlayer.jsx");

var _ClapprPlayer2 = _interopRequireDefault(_ClapprPlayer);

var _actionCreators = __webpack_require__("./js/actionCreators.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Details.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  };

  Details.prototype.render = function render() {
    var _props$show = this.props.show,
        title = _props$show.title,
        description = _props$show.description,
        year = _props$show.year,
        poster = _props$show.poster,
        trailer = _props$show.trailer;

    var rating = void 0;
    if (this.props.rating) {
      rating = _react2.default.createElement(
        'h3',
        null,
        this.props.rating
      );
    } else {
      rating = _react2.default.createElement(_Spinner2.default, null);
    }
    return _react2.default.createElement(
      'div',
      { className: 'details' },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'h2',
          null,
          '(',
          year,
          ')'
        ),
        rating,
        _react2.default.createElement('img', { src: '/public/img/posters/' + poster, alt: 'Poster for ' + title }),
        _react2.default.createElement(
          'p',
          null,
          description
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ClapprPlayer2.default, { source: '' + trailer, width: '640', height: '360' })
      )
    );
  };

  return Details;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    getAPIData: function getAPIData() {
      dispatch((0, _actionCreators.getAPIDetails)(ownProps.show.imdbID));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Details);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Details, 'Details', '/home/theblackcube/blockchains/js/Details.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/theblackcube/blockchains/js/Details.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/home/theblackcube/blockchains/js/Details.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/theblackcube/blockchains/js/Details.jsx');
}();

;

/***/ })

})