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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClapprComponent = function (_Component) {
    _inherits(ClapprComponent, _Component);

    function ClapprComponent() {
        var _temp, _this, _ret;

        _classCallCheck(this, ClapprComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.destroyPlayer = function () {
            var _this2;

            return (_this2 = _this).__destroyPlayer__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.change = function () {
            var _this3;

            return (_this3 = _this).__change__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    ClapprComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        var changed = nextProps.source != this.props.source;
        if (changed) {
            this.change(nextProps.source);
        }
        return false;
    };

    ClapprComponent.prototype.componentDidMount = function componentDidMount() {
        this.change(this.props.source);
    };

    ClapprComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        this.destroyPlayer();
    };

    ClapprComponent.prototype.__destroyPlayer__REACT_HOT_LOADER__ = function __destroyPlayer__REACT_HOT_LOADER__() {
        return this.__destroyPlayer__REACT_HOT_LOADER__.apply(this, arguments);
    };

    ClapprComponent.prototype.__destroyPlayer__REACT_HOT_LOADER__ = function __destroyPlayer__REACT_HOT_LOADER__() {
        if (this.player) {
            this.player.destroy();
        }
        this.player = null;
    };

    ClapprComponent.prototype.__change__REACT_HOT_LOADER__ = function __change__REACT_HOT_LOADER__() {
        return this.__change__REACT_HOT_LOADER__.apply(this, arguments);
    };

    ClapprComponent.prototype.__change__REACT_HOT_LOADER__ = function __change__REACT_HOT_LOADER__(source) {
        if (this.player) {
            this.player.load(source);
            return;
        }
        var _props = this.props,
            id = _props.id,
            width = _props.width,
            height = _props.height;

        this.player = new _clappr2.default.Player({
            baseUrl: "/assets/clappr",
            parent: '#' + id,
            source: source,
            autoPlay: true,
            width: width,
            height: height
        });
    };

    ClapprComponent.prototype.render = function render() {
        var id = this.props.id;

        return _react2.default.createElement('div', { id: id });
    };

    return ClapprComponent;
}(_react.Component);

var _default = ClapprComponent;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ClapprComponent, 'ClapprComponent', '/home/theblackcube/blockchains/js/ClapprPlayer.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/home/theblackcube/blockchains/js/ClapprPlayer.jsx');
}();

;

/***/ })

})