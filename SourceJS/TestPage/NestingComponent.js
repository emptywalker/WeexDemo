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
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/62bb52edf155aa2f61dc4b4259fb1df7", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);

	;
		__weex_module__.exports = {
			data:function () {return {
				list:[
				{title:'张三', image:'http://img4.duitang.com/uploads/item/201503/22/20150322084933_ymtAN.thumb.700_0.jpeg'},
				{title:'李四', image:'http://img4.duitang.com/uploads/item/201503/22/20150322084933_ymtAN.thumb.700_0.jpeg'},
				{title:'王五', image:'http://img4.duitang.com/uploads/item/201503/22/20150322084933_ymtAN.thumb.700_0.jpeg'},
				{title:'赵六', image:'http://img4.duitang.com/uploads/item/201503/22/20150322084933_ymtAN.thumb.700_0.jpeg'},
				]
			}}
			
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "foo-list",
	      "attr": {
	        "list": function () {return this.list},
	        "description": "就打你咋地"
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/62bb52edf155aa2f61dc4b4259fb1df7", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/foo-list", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(2);

	;
		__weex_module__.exports = {
			data:function () {return {
				description: ' ',
				list: []
			}}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.description}
	      }
	    },
	    {
	      "type": "foo",
	      "repeat": function () {return this.list},
	      "attr": {
	        "title": function () {return this.title},
	        "image": function () {return this.image}
	      }
	    }
	  ]
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/foo", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		__weex_module__.exports = {
			data:function () {return {
				image: null,
				title: null,
			}}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "style": {
	    "flexDirection": "row"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.image}
	      },
	      "style": {
	        "width": 100,
	        "height": 100,
	        "backgroundColor": "#FF0000"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	})

/***/ }
/******/ ]);