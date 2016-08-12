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

	;__weex_define__("@weex-component/365955474b146125ba0d74b3cc61a23d", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		__weex_module__.exports = {
			data:function () {return {
				size: 80,
				title: {
					size: 90,
					value: '不记得也没有关系'
				},
				firstName: '许',
				lastName: '有红',
				show:true
			}},
			computed:{
				fullName:{
					get: function () {
						// body...
						return this.firstName + ' ' +this.lastName
					},
					set: function (v) {
						var s = v.split(' ')
						this.firstName = s[0]
						this.lastName = s[1]
					}
				}
			},
			methods:{
				changeName: function () {
					this.fullName = 'empty walker'
				},
				toggle: function () {
					this.show = !this.show
				}
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "fontSize": function () {return this.size}
	      },
	      "attr": {
	        "value": function () {return this.title.value}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.fullName}
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "changeName"
	      },
	      "style": {
	        "aligment": "center"
	      },
	      "attr": {
	        "value": "CHANGE NAME"
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "toggle"
	      },
	      "attr": {
	        "value": "Toggle"
	      }
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "http://pic.iqshw.com/d/file/gexingqqziyuan/touxiang/2016/03/17/a3fda1b619e70245d9ffc12e54c673e0.jpg"
	      },
	      "shown": function () {return this.show},
	      "style": {
	        "width": 200,
	        "height": 200
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/365955474b146125ba0d74b3cc61a23d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);