/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/f95ce1b827e5ac43f68771bb05505c3a", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		__weex_module__.exports = {
			data: function () {return {
				list: [
					{nickName:'zhangsan', gender:'male', avatar:'http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg'},
					{nickName:'lisi', gender:'female', avatar:'http://img4.duitang.com/uploads/item/201503/22/20150322084933_ymtAN.thumb.700_0.jpeg'},
					{nickName:'wangwu', gender:'male', avatar:'http://cdn.duitang.com/uploads/item/201510/24/20151024123439_zrSsB.thumb.700_0.jpeg'},
					{nickName:'zhaoqi', gender:'female', avatar:'http://cdn.duitang.com/uploads/blog/201511/02/20151102231635_Hm8Vn.thumb.700_0.jpeg'},
				]
			}}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "container",
	      "repeat": function () {return this.list},
	      "classList": function () {return [this.gender]},
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.avatar}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.nickName}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "male": {
	    "color": "#FF0000"
	  },
	  "female": {
	    "color": "#0000FF"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/f95ce1b827e5ac43f68771bb05505c3a", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);