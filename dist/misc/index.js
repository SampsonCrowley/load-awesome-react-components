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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/misc/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/load-awesome-relative/css/cog.css":
/*!********************************************************!*\
  !*** ./node_modules/load-awesome-relative/css/cog.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./node_modules/load-awesome-relative/css/cog.css?");

/***/ }),

/***/ "./node_modules/load-awesome-relative/css/cube-transition.css":
/*!********************************************************************!*\
  !*** ./node_modules/load-awesome-relative/css/cube-transition.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./node_modules/load-awesome-relative/css/cube-transition.css?");

/***/ }),

/***/ "./node_modules/load-awesome-relative/css/fire.css":
/*!*********************************************************!*\
  !*** ./node_modules/load-awesome-relative/css/fire.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./node_modules/load-awesome-relative/css/fire.css?");

/***/ }),

/***/ "./node_modules/load-awesome-relative/css/pacman.css":
/*!***********************************************************!*\
  !*** ./node_modules/load-awesome-relative/css/pacman.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./node_modules/load-awesome-relative/css/pacman.css?");

/***/ }),

/***/ "./node_modules/load-awesome-relative/css/timer.css":
/*!**********************************************************!*\
  !*** ./node_modules/load-awesome-relative/css/timer.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./node_modules/load-awesome-relative/css/timer.css?");

/***/ }),

/***/ "./src/misc/cog.js":
/*!*************************!*\
  !*** ./src/misc/cog.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_awesome_relative_css_cog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-awesome-relative/css/cog.css */ \"./node_modules/load-awesome-relative/css/cog.css\");\n/* harmony import */ var load_awesome_relative_css_cog_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_awesome_relative_css_cog_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar Cog = function (_Component) {\n  babelHelpers.inherits(Cog, _Component);\n\n  function Cog() {\n    babelHelpers.classCallCheck(this, Cog);\n    return babelHelpers.possibleConstructorReturn(this, (Cog.__proto__ || Object.getPrototypeOf(Cog)).apply(this, arguments));\n  }\n\n  babelHelpers.createClass(Cog, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          props = babelHelpers.objectWithoutProperties(_props, ['className']);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        babelHelpers.extends({ className: 'la-cog ' + (className || '') }, props),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null)\n      );\n    }\n  }]);\n  return Cog;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nCog.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cog);\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/misc/cog.js?");

/***/ }),

/***/ "./src/misc/cube-transition.js":
/*!*************************************!*\
  !*** ./src/misc/cube-transition.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_awesome_relative_css_cube_transition_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-awesome-relative/css/cube-transition.css */ \"./node_modules/load-awesome-relative/css/cube-transition.css\");\n/* harmony import */ var load_awesome_relative_css_cube_transition_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_awesome_relative_css_cube_transition_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar CubeTransition = function (_Component) {\n  babelHelpers.inherits(CubeTransition, _Component);\n\n  function CubeTransition() {\n    babelHelpers.classCallCheck(this, CubeTransition);\n    return babelHelpers.possibleConstructorReturn(this, (CubeTransition.__proto__ || Object.getPrototypeOf(CubeTransition)).apply(this, arguments));\n  }\n\n  babelHelpers.createClass(CubeTransition, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          props = babelHelpers.objectWithoutProperties(_props, ['className']);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        babelHelpers.extends({ className: 'la-cube-transition ' + (className || '') }, props),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null)\n      );\n    }\n  }]);\n  return CubeTransition;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nCubeTransition.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CubeTransition);\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/misc/cube-transition.js?");

/***/ }),

/***/ "./src/misc/fire.js":
/*!**************************!*\
  !*** ./src/misc/fire.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_awesome_relative_css_fire_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-awesome-relative/css/fire.css */ \"./node_modules/load-awesome-relative/css/fire.css\");\n/* harmony import */ var load_awesome_relative_css_fire_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_awesome_relative_css_fire_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar Fire = function (_Component) {\n  babelHelpers.inherits(Fire, _Component);\n\n  function Fire() {\n    babelHelpers.classCallCheck(this, Fire);\n    return babelHelpers.possibleConstructorReturn(this, (Fire.__proto__ || Object.getPrototypeOf(Fire)).apply(this, arguments));\n  }\n\n  babelHelpers.createClass(Fire, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          props = babelHelpers.objectWithoutProperties(_props, ['className']);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        babelHelpers.extends({ className: 'la-fire ' + (className || '') }, props),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null)\n      );\n    }\n  }]);\n  return Fire;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nFire.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fire);\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/misc/fire.js?");

/***/ }),

/***/ "./src/misc/index.js":
/*!***************************!*\
  !*** ./src/misc/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cog.js */ \"./src/misc/cog.js\");\n/* harmony import */ var _cube_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube-transition.js */ \"./src/misc/cube-transition.js\");\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire.js */ \"./src/misc/fire.js\");\n/* harmony import */ var _pacman_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pacman.js */ \"./src/misc/pacman.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer.js */ \"./src/misc/timer.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Cog: _cog_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  CubeTransition: _cube_transition_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Fire: _fire_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Pacman: _pacman_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Timer: _timer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/misc/index.js?");

/***/ }),

/***/ "./src/misc/pacman.js":
/*!****************************!*\
  !*** ./src/misc/pacman.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_awesome_relative_css_pacman_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-awesome-relative/css/pacman.css */ \"./node_modules/load-awesome-relative/css/pacman.css\");\n/* harmony import */ var load_awesome_relative_css_pacman_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_awesome_relative_css_pacman_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar Pacman = function (_Component) {\n  babelHelpers.inherits(Pacman, _Component);\n\n  function Pacman() {\n    babelHelpers.classCallCheck(this, Pacman);\n    return babelHelpers.possibleConstructorReturn(this, (Pacman.__proto__ || Object.getPrototypeOf(Pacman)).apply(this, arguments));\n  }\n\n  babelHelpers.createClass(Pacman, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          props = babelHelpers.objectWithoutProperties(_props, ['className']);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        babelHelpers.extends({ className: 'la-pacman ' + (className || '') }, props),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null)\n      );\n    }\n  }]);\n  return Pacman;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nPacman.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pacman);\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/misc/pacman.js?");

/***/ }),

/***/ "./src/misc/timer.js":
/*!***************************!*\
  !*** ./src/misc/timer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_awesome_relative_css_timer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-awesome-relative/css/timer.css */ \"./node_modules/load-awesome-relative/css/timer.css\");\n/* harmony import */ var load_awesome_relative_css_timer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_awesome_relative_css_timer_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar Timer = function (_Component) {\n  babelHelpers.inherits(Timer, _Component);\n\n  function Timer() {\n    babelHelpers.classCallCheck(this, Timer);\n    return babelHelpers.possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));\n  }\n\n  babelHelpers.createClass(Timer, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          props = babelHelpers.objectWithoutProperties(_props, ['className']);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        babelHelpers.extends({ className: 'la-timer ' + (className || '') }, props),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null)\n      );\n    }\n  }]);\n  return Timer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nTimer.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack://loadAwesomeReactComponents/./src/misc/timer.js?");

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