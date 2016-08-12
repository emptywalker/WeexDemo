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

	;__weex_define__("@weex-component/cc69c1268e727823a3ace80db62a8a32", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "foo",
	      "attr": {
	        "title": "我是公用组件",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "话不多说 再来一波",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "我是公用组件",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "话不多说 再来一波",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "我是公用组件",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "话不多说 再来一波",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "我是公用组件",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "title": "话不多说 再来一波",
	        "image": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/cc69c1268e727823a3ace80db62a8a32", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
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
	        "height": 100
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