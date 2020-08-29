/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Component/Form/form.js":
/*!************************************!*\
  !*** ./src/Component/Form/form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils */ \"./src/Utils/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (containerId, _ref) {\n  var id = _ref.id,\n      fields = _ref.fields,\n      event = _ref.event;\n  var container = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(containerId);\n  var formFields = fields.map(function (field) {\n    return \"<div>\\n          <label>\".concat(field.name, \"</label>\\n          <input type=\\\"\").concat(field.type, \"\\\" name=\\\"\").concat(field.name, \"\\\" placeholder=\\\"\").concat(field.placeholder, \"\\\" \").concat(field.required ? 'required' : '', \"></input>\\n        </div>\");\n  });\n  var formElement = \"\\n        <form id=\\\"\".concat(id, \"\\\">\\n            \").concat(formFields.join(''), \"\\n            <button type=\\\"submit\\\">Submit</button>\\n        </form>\\n    \");\n  container.innerHTML += formElement;\n\n  this.init = function () {\n    var form = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#\".concat(id));\n    return form.addEventListener('submit', event);\n  };\n});\n\n//# sourceURL=webpack:///./src/Component/Form/form.js?");

/***/ }),

/***/ "./src/Component/Form/index.js":
/*!*************************************!*\
  !*** ./src/Component/Form/index.js ***!
  \*************************************/
/*! exports provided: AwesomeForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/Component/Form/form.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AwesomeForm\", function() { return _form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/Component/Form/index.js?");

/***/ }),

/***/ "./src/Utils/index.js":
/*!****************************!*\
  !*** ./src/Utils/index.js ***!
  \****************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\nfunction $(seletor) {\n  return document.querySelector(seletor);\n}\nfunction $$(seletor) {\n  return document.querySelectorAll(seletor);\n}\n\n//# sourceURL=webpack:///./src/Utils/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/Form */ \"./src/Component/Form/index.js\");\n\nvar cepAPI = 'https://api.postmon.com.br/v1/cep';\nvar cepFormOptions = {\n  id: 'cepForm',\n  fields: [{\n    id: 'input-cep',\n    type: 'text',\n    name: 'cep',\n    placeholder: 'Digite o cep',\n    required: true\n  }],\n  event: function event(evt) {\n    evt.preventDefault();\n    var value = this.cep.value;\n    return !value ? console.log('cep vazio') : fetch(\"\".concat(cepAPI, \"/\").concat(value)).then(function (resp) {\n      return resp.json();\n    }).then(function (resp) {\n      console.log(resp);\n    });\n  }\n};\nvar cepForm = new _Component_Form__WEBPACK_IMPORTED_MODULE_0__[\"AwesomeForm\"]('#cep-component', cepFormOptions);\ncepForm.init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });