"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

require("./App.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// // data is passed in as JSON like:
// const data = {
//   "id": "value1",
//   "id": "value2"
// }
function GridComp(props) {
  // passed in JSON
  var data = props.data; // default data if nothing is passed in

  var initialGrid = {
    0: {
      1: "",
      2: "",
      3: ""
    },
    1: {
      4: "",
      5: "",
      6: ""
    },
    2: {
      7: "",
      8: "",
      9: ""
    }
  };

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(initialGrid),
      _useState4 = _slicedToArray(_useState3, 2),
      grid = _useState4[0],
      setGrid = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1]; // checks to see if data is passed in, If it is it inputs it into our grid


  (0, _react.useEffect)(function () {
    if (Object.entries(data).length) {
      var dataArray = Object.values(data);
      dataArray.forEach(function (val, i) {
        setGrid(function (prevState) {
          return _objectSpread({}, prevState, _defineProperty({}, Math.ceil((i + 1) / 3 - 1), _objectSpread({}, prevState[Math.ceil((i + 1) / 3 - 1)], _defineProperty({}, i + 1, val))));
        });
      });
    }
  }, []);

  var handleClose = function handleClose() {
    setOpen(false);
  }; // our input handler


  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setGrid(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, Math.ceil(name / 3 - 1), _objectSpread({}, prevState[Math.ceil(name / 3 - 1)], _defineProperty({}, name, value))));
    });
  }; // our search handler


  var handleSearch = function handleSearch(event) {
    setSearch(event.target.value);
    console.log('search: ', search);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Dialog, {
    onClose: handleClose,
    "aria-labelledby": "simple-dialog-title",
    open: open
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: "popUp"
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    label: "Search",
    className: "searchBar",
    onChange: handleSearch
  }), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true
  }, Object.values(grid).map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      container: true,
      className: "listItems",
      direction: "row",
      key: i
    }, Object.entries(e).filter(function (elem) {
      return elem[1].includes(search);
    }).map(function (innerElem) {
      return /*#__PURE__*/_react.default.createElement(_core.Grid, {
        item: true,
        key: innerElem[0]
      }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
        value: innerElem[1],
        name: innerElem[0],
        onChange: handleInputChange,
        variant: "outlined",
        className: "listItem"
      }));
    }));
  })))));
}

;
var _default = GridComp;
exports.default = _default;

//# sourceMappingURL=App.js.map