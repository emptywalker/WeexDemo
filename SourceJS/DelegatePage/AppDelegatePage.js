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

	;__weex_define__("@weex-component/52e4e7d6f32d3e75aef5955e0839b3b6", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		__weex_module__.exports = {
			data: function () {return {
				appeatMax: 1,
				appearMin: 1,
				appearIds: [],
				rowsData: [
					{id: 'BuiltInComponents'},
					{id: 'Test1'},
					{id: 'DataBinding'},
					{id: 'Repeat'},
					{id: 'ComposedComponent'},
					{id: 'NestingComponent'},
					{id: 'FindElement'},
				],
			}},
			methods:{
				onappear: function (e) {
					var appearId = this.rows[e.target.attr.index].id;
					var appearIds = this.appearIds;
					appearIds.push(appearId);
					this.getMinAndMaxIds(appearIds);
				},

				ondisappear: function (e) {
					var disappearId = this.rows[e.target.attr.index].id;
					var appearIds = this.appearIds;
					var index = appearIds.indexOf(disappearId);
					if (index > 1) {
						appearIds.splice(index, 1);
					}
					this.getMinAndMaxIds(appearIds);
				},

				getMinAndMaxIds: function (appearIds) {
					appearIds.sort(function (a, b) {
						return a - b;
					});
					this.appearIds = appearIds;
					this.appeatMax = appearIds[appearIds.length - 1];
					this.appearMin = appearIds[0];
				},

				rowDicSelected: function (e) {
					var eventModule = __weex_require__('@weex-module/event');
					var url = this.rowsData[e.target.attr.index].id;
					eventModule.openURL(url);
				}

			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "events": {
	            "appear": "onappear",
	            "disappear": "ondisappear",
	            "click": "rowDicSelected"
	          },
	          "classList": [
	            "row"
	          ],
	          "repeat": function () {return this.rowsData},
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.id}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "list": {
	    "padding": 0,
	    "marginBottom": 0
	  },
	  "count": {
	    "fontSize": 48,
	    "margin": 10
	  },
	  "row": {
	    "width": 750
	  },
	  "item": {
	    "justifyContent": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#c0c0c0",
	    "height": 100,
	    "padding": 20
	  },
	  "item-title": {
	    "textAlign": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/52e4e7d6f32d3e75aef5955e0839b3b6", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);