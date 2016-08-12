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

	;__weex_define__("@weex-component/031c4807a724721b4712480ebed10756", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		var dom = __weex_require__('@weex-module/dom')
		__weex_module__.exports = {

			data:function () {return {
				ID:1,
				images:[
					{imageUrl:'http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg', imageId: 1},
					{imageUrl:'http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg', imageId: 2},
					{imageUrl:'http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg', imageId: 3},
					{imageUrl:'http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg', imageId: 4},
				]
			}},

			methods:{
				back2Top: function () {
					// body...
					var top = this.$el('top')
					dom.scrollToElement(top)
				},

				imageClick:function (e){
					// this.ID = e.target.id
				}
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "scr": function () {return this.imageUrl}
	      },
	      "id": function () {return this.imageId},
	      "events": {
	        "click": "imageClick"
	      },
	      "repeat": function () {return this.images},
	      "style": {
	        "width": 120,
	        "height": 200
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.ID}
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/031c4807a724721b4712480ebed10756", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);