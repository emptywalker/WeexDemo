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

	;__weex_define__("@weex-component/c78a12f2acf30fba4873f59233344f20", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		__weex_module__.exports = {
			data: function () {return {
				title: 'Alibaba',
				datetime: null
			}},
			methods: {
				getTitle: function() {
					// body...
					return 'Weex Team'
				}
			},
			created: function() {
				this.datetime = new Date().toLocaleString()
			}
		}
		

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "width": 200,
	        "height": 200
	      },
	      "attr": {
	        "src": "http://gtms02.alicdn.com/tps/i2/TB1QHKjMXXXXXadXVXX20ySQVXX-512-512.png"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "Alibaba Weex Team"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 64
	      },
	      "attr": {
	        "value": "Alibaba"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "fontClass"
	      ],
	      "attr": {
	        "value": "Weex Team"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return 'The time is ' + (this.datetime)}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return '{% raw %}' + (this.getTitle()) + '{% endraw %}'}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "fontClass": {
	    "fontSize": 64
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/c78a12f2acf30fba4873f59233344f20", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);