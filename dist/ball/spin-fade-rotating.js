(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("loadAwesomeReactComponents", ["PropTypes", "React"], factory);
	else if(typeof exports === 'object')
		exports["loadAwesomeReactComponents"] = factory(require("prop-types"), require("react"));
	else
		root["loadAwesomeReactComponents"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ball/spin-fade-rotating.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/load-awesome-relative/css/ball-spin-fade-rotating.css":
/*!****************************************************************************!*\
  !*** ./node_modules/load-awesome-relative/css/ball-spin-fade-rotating.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./node_modules/load-awesome-relative/css/ball-spin-fade-rotating.css?");

/***/ }),

/***/ "./src/ball/spin-fade-rotating.js":
/*!****************************************!*\
  !*** ./src/ball/spin-fade-rotating.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_awesome_relative_css_ball_spin_fade_rotating_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-awesome-relative/css/ball-spin-fade-rotating.css */ \"./node_modules/load-awesome-relative/css/ball-spin-fade-rotating.css\");\n/* harmony import */ var load_awesome_relative_css_ball_spin_fade_rotating_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_awesome_relative_css_ball_spin_fade_rotating_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar SpinFadeRotating = function (_Component) {\n  babelHelpers.inherits(SpinFadeRotating, _Component);\n\n  function SpinFadeRotating() {\n    babelHelpers.classCallCheck(this, SpinFadeRotating);\n    return babelHelpers.possibleConstructorReturn(this, (SpinFadeRotating.__proto__ || Object.getPrototypeOf(SpinFadeRotating)).apply(this, arguments));\n  }\n\n  babelHelpers.createClass(SpinFadeRotating, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          props = babelHelpers.objectWithoutProperties(_props, ['className']);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        babelHelpers.extends({ className: 'la-ball-spin-fade-rotating ' + (className || '') }, props),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null)\n      );\n    }\n  }]);\n  return SpinFadeRotating;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nSpinFadeRotating.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpinFadeRotating);\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/ball/spin-fade-rotating.js?");

/***/ }),

/***/ "prop-types":
/*!********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"PropTypes","root":"PropTypes"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://loadAwesomeReactComponents/external_%7B%22commonjs%22:%22prop-types%22,%22commonjs2%22:%22prop-types%22,%22amd%22:%22PropTypes%22,%22root%22:%22PropTypes%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://loadAwesomeReactComponents/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22React%22,%22root%22:%22React%22%7D?");

/***/ })

/******/ });
});