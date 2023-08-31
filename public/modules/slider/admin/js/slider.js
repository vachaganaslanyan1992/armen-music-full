/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Modules/Slider/Resources/assets/admin/js/Slide.js":
/*!***********************************************************!*\
  !*** ./Modules/Slider/Resources/assets/admin/js/Slide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar _default = /*#__PURE__*/function () {\n  function _default(data) {\n    _classCallCheck(this, _default);\n    this.slidePanelHtml = this.getSlidePanelHtml(data);\n  }\n  _createClass(_default, [{\n    key: \"getSlidePanelHtml\",\n    value: function getSlidePanelHtml(data) {\n      data.slide.options = data.slide.options || this.getDefaultOptions();\n      var template = _.template($('#slide-template').html());\n      return $(template(data));\n    }\n  }, {\n    key: \"getDefaultOptions\",\n    value: function getDefaultOptions() {\n      return {\n        caption_1: {},\n        caption_2: {},\n        direction: 'left',\n        call_to_action: {}\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.attachEventListeners();\n      this.showSelectedOptionBlock();\n      return this.slidePanelHtml;\n    }\n  }, {\n    key: \"attachEventListeners\",\n    value: function attachEventListeners() {\n      var _this = this;\n      this.slidePanelHtml.find('.delete-slide').on('click', function () {\n        _this.slidePanelHtml.remove();\n      });\n      this.slidePanelHtml.find('.change-option-block').on('change', function (e) {\n        _this.slidePanelHtml.find('.slide-options').hide();\n        _this.slidePanelHtml.find(\".\".concat(e.currentTarget.value)).show();\n      });\n    }\n  }, {\n    key: \"showSelectedOptionBlock\",\n    value: function showSelectedOptionBlock() {\n      var _this2 = this;\n      setTimeout(function () {\n        _this2.slidePanelHtml.find('.change-option-block').trigger('change');\n      });\n    }\n  }]);\n  return _default;\n}();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1NsaWRlci9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL1NsaWRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0VBQ0ksU0FBQUEsU0FBWUMsSUFBSSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNkLElBQUksQ0FBQ0csY0FBYyxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNILElBQUksQ0FBQztFQUN0RDtFQUFDSSxZQUFBLENBQUFMLFFBQUE7SUFBQU0sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsa0JBQWtCSCxJQUFJLEVBQUU7TUFDcEJBLElBQUksQ0FBQ08sS0FBSyxDQUFDQyxPQUFPLEdBQUdSLElBQUksQ0FBQ08sS0FBSyxDQUFDQyxPQUFPLElBQUksSUFBSSxDQUFDQyxpQkFBaUIsRUFBRTtNQUVuRSxJQUFJQyxRQUFRLEdBQUdDLENBQUMsQ0FBQ0QsUUFBUSxDQUFDRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7TUFFdEQsT0FBT0QsQ0FBQyxDQUFDRixRQUFRLENBQUNWLElBQUksQ0FBQyxDQUFDO0lBQzVCO0VBQUM7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUcsa0JBQUEsRUFBb0I7TUFDaEIsT0FBTztRQUFFSyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQUVDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFBRUMsU0FBUyxFQUFFLE1BQU07UUFBRUMsY0FBYyxFQUFFLENBQUM7TUFBRSxDQUFDO0lBQ2xGO0VBQUM7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVksT0FBQSxFQUFTO01BQ0wsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtNQUMzQixJQUFJLENBQUNDLHVCQUF1QixFQUFFO01BRTlCLE9BQU8sSUFBSSxDQUFDbEIsY0FBYztJQUM5QjtFQUFDO0lBQUFHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFhLHFCQUFBLEVBQXVCO01BQUEsSUFBQUUsS0FBQTtNQUNuQixJQUFJLENBQUNuQixjQUFjLENBQUNvQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUN4REYsS0FBSSxDQUFDbkIsY0FBYyxDQUFDc0IsTUFBTSxFQUFFO01BQ2hDLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ3RCLGNBQWMsQ0FBQ29CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUNFLENBQUMsRUFBSztRQUNqRUosS0FBSSxDQUFDbkIsY0FBYyxDQUFDb0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUNJLElBQUksRUFBRTtRQUNqREwsS0FBSSxDQUFDbkIsY0FBYyxDQUFDb0IsSUFBSSxLQUFBSyxNQUFBLENBQUtGLENBQUMsQ0FBQ0csYUFBYSxDQUFDdEIsS0FBSyxFQUFHLENBQUN1QixJQUFJLEVBQUU7TUFDaEUsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBeEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWMsd0JBQUEsRUFBMEI7TUFBQSxJQUFBVSxNQUFBO01BQ3RCQyxVQUFVLENBQUMsWUFBTTtRQUNiRCxNQUFJLENBQUM1QixjQUFjLENBQUNvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ1UsT0FBTyxDQUFDLFFBQVEsQ0FBQztNQUN0RSxDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQWpDLFFBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsZWV0Y2FydC8uL01vZHVsZXMvU2xpZGVyL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvU2xpZGUuanM/OTI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZVBhbmVsSHRtbCA9IHRoaXMuZ2V0U2xpZGVQYW5lbEh0bWwoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2xpZGVQYW5lbEh0bWwoZGF0YSkge1xyXG4gICAgICAgIGRhdGEuc2xpZGUub3B0aW9ucyA9IGRhdGEuc2xpZGUub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJCgnI3NsaWRlLXRlbXBsYXRlJykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICQodGVtcGxhdGUoZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7IGNhcHRpb25fMToge30sIGNhcHRpb25fMjoge30sIGRpcmVjdGlvbjogJ2xlZnQnLCBjYWxsX3RvX2FjdGlvbjoge30gfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkT3B0aW9uQmxvY2soKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpZGVQYW5lbEh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZVBhbmVsSHRtbC5maW5kKCcuZGVsZXRlLXNsaWRlJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlUGFuZWxIdG1sLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlUGFuZWxIdG1sLmZpbmQoJy5jaGFuZ2Utb3B0aW9uLWJsb2NrJykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVQYW5lbEh0bWwuZmluZCgnLnNsaWRlLW9wdGlvbnMnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVQYW5lbEh0bWwuZmluZChgLiR7ZS5jdXJyZW50VGFyZ2V0LnZhbHVlfWApLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWRPcHRpb25CbG9jaygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZVBhbmVsSHRtbC5maW5kKCcuY2hhbmdlLW9wdGlvbi1ibG9jaycpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfZGVmYXVsdCIsImRhdGEiLCJfY2xhc3NDYWxsQ2hlY2siLCJzbGlkZVBhbmVsSHRtbCIsImdldFNsaWRlUGFuZWxIdG1sIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzbGlkZSIsIm9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInRlbXBsYXRlIiwiXyIsIiQiLCJodG1sIiwiY2FwdGlvbl8xIiwiY2FwdGlvbl8yIiwiZGlyZWN0aW9uIiwiY2FsbF90b19hY3Rpb24iLCJyZW5kZXIiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsInNob3dTZWxlY3RlZE9wdGlvbkJsb2NrIiwiX3RoaXMiLCJmaW5kIiwib24iLCJyZW1vdmUiLCJlIiwiaGlkZSIsImNvbmNhdCIsImN1cnJlbnRUYXJnZXQiLCJzaG93IiwiX3RoaXMyIiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Modules/Slider/Resources/assets/admin/js/Slide.js\n");

/***/ }),

/***/ "./Modules/Slider/Resources/assets/admin/js/Slider.js":
/*!************************************************************!*\
  !*** ./Modules/Slider/Resources/assets/admin/js/Slider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide */ \"./Modules/Slider/Resources/assets/admin/js/Slide.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n    this.slideCount = 0;\n    this.addSlides(FleetCart.data['slider.slides']);\n    if (this.slideCount === 0) {\n      this.addSlide();\n    }\n    this.attachEventListeners();\n    this.makeSlidesSortable();\n  }\n  _createClass(_default, [{\n    key: \"addSlides\",\n    value: function addSlides(slides) {\n      var _iterator = _createForOfIteratorHelper(slides),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var attributes = _step.value;\n          this.addSlide(attributes);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addSlide\",\n    value: function addSlide() {\n      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var slide = new _Slide__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        slideNumber: this.slideCount++,\n        slide: attributes\n      });\n      $('#slides-wrapper').append(slide.render());\n    }\n  }, {\n    key: \"attachEventListeners\",\n    value: function attachEventListeners() {\n      var _this = this;\n      $('.add-slide').on('click', function () {\n        _this.addSlide();\n      });\n      this.attachImagePickerEventListener();\n    }\n  }, {\n    key: \"attachImagePickerEventListener\",\n    value: function attachImagePickerEventListener() {\n      $('#slides-wrapper').on('click', '.slide-image', function (e) {\n        var picker = new MediaPicker({\n          type: 'image'\n        });\n        picker.on('select', function (file) {\n          var html = \"\\n                    <img src=\\\"\".concat(file.path, \"\\\">\\n                    <input type=\\\"hidden\\\" name=\\\"slides[\").concat(e.currentTarget.dataset.slideNumber, \"][file_id]\\\" value=\\\"\").concat(file.id, \"\\\">\\n                \");\n          $(e.currentTarget).html(html);\n        });\n      });\n    }\n  }, {\n    key: \"makeSlidesSortable\",\n    value: function makeSlidesSortable() {\n      Sortable.create(document.getElementById('slides-wrapper'), {\n        handle: '.slide-drag',\n        animation: 150\n      });\n    }\n  }]);\n  return _default;\n}();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1NsaWRlci9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL1NsaWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUFBLElBQUFDLFFBQUE7RUFHeEIsU0FBQUEsU0FBQSxFQUFjO0lBQUFDLGVBQUEsT0FBQUQsUUFBQTtJQUNWLElBQUksQ0FBQ0UsVUFBVSxHQUFHLENBQUM7SUFFbkIsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRS9DLElBQUksSUFBSSxDQUFDSCxVQUFVLEtBQUssQ0FBQyxFQUFFO01BQ3ZCLElBQUksQ0FBQ0ksUUFBUSxFQUFFO0lBQ25CO0lBRUEsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtJQUMzQixJQUFJLENBQUNDLGtCQUFrQixFQUFFO0VBQzdCO0VBQUNDLFlBQUEsQ0FBQVQsUUFBQTtJQUFBVSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixVQUFVUyxNQUFNLEVBQUU7TUFBQSxJQUFBQyxTQUFBLEdBQUFDLDBCQUFBLENBQ1NGLE1BQU07UUFBQUcsS0FBQTtNQUFBO1FBQTdCLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQStCO1VBQUEsSUFBdEJDLFVBQVUsR0FBQUosS0FBQSxDQUFBSixLQUFBO1VBQ2YsSUFBSSxDQUFDTCxRQUFRLENBQUNhLFVBQVUsQ0FBQztRQUM3QjtNQUFDLFNBQUFDLEdBQUE7UUFBQVAsU0FBQSxDQUFBUSxDQUFBLENBQUFELEdBQUE7TUFBQTtRQUFBUCxTQUFBLENBQUFTLENBQUE7TUFBQTtJQUNMO0VBQUM7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsU0FBQSxFQUEwQjtNQUFBLElBQWpCYSxVQUFVLEdBQUFJLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNwQixJQUFJRyxLQUFLLEdBQUcsSUFBSTNCLDhDQUFLLENBQUM7UUFBRTRCLFdBQVcsRUFBRSxJQUFJLENBQUN6QixVQUFVLEVBQUU7UUFBRXdCLEtBQUssRUFBRVA7TUFBVyxDQUFDLENBQUM7TUFFNUVTLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQ0ksTUFBTSxFQUFFLENBQUM7SUFDL0M7RUFBQztJQUFBcEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUoscUJBQUEsRUFBdUI7TUFBQSxJQUFBd0IsS0FBQTtNQUNuQkgsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDOUJELEtBQUksQ0FBQ3pCLFFBQVEsRUFBRTtNQUNuQixDQUFDLENBQUM7TUFFRixJQUFJLENBQUMyQiw4QkFBOEIsRUFBRTtJQUN6QztFQUFDO0lBQUF2QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0IsK0JBQUEsRUFBaUM7TUFDN0JMLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFDWCxDQUFDLEVBQUs7UUFDcEQsSUFBSWEsTUFBTSxHQUFHLElBQUlDLFdBQVcsQ0FBQztVQUFFQyxJQUFJLEVBQUU7UUFBUSxDQUFDLENBQUM7UUFFL0NGLE1BQU0sQ0FBQ0YsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDSyxJQUFJLEVBQUs7VUFDMUIsSUFBSUMsSUFBSSx1Q0FBQUMsTUFBQSxDQUNRRixJQUFJLENBQUNHLElBQUksb0VBQUFELE1BQUEsQ0FDZWxCLENBQUMsQ0FBQ29CLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDZixXQUFXLDJCQUFBWSxNQUFBLENBQXNCRixJQUFJLENBQUNNLEVBQUUsMEJBQ3ZHO1VBRURmLENBQUMsQ0FBQ1AsQ0FBQyxDQUFDb0IsYUFBYSxDQUFDLENBQUNILElBQUksQ0FBQ0EsSUFBSSxDQUFDO1FBQ2pDLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTVCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILG1CQUFBLEVBQXFCO01BQ2pCb0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDdkRDLE1BQU0sRUFBRSxhQUFhO1FBQ3JCQyxTQUFTLEVBQUU7TUFDZixDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQWpELFFBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsZWV0Y2FydC8uL01vZHVsZXMvU2xpZGVyL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvU2xpZGVyLmpzPzEzOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTbGlkZXMoRmxlZXRDYXJ0LmRhdGFbJ3NsaWRlci5zbGlkZXMnXSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNsaWRlQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRTbGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMubWFrZVNsaWRlc1NvcnRhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2xpZGVzKHNsaWRlcykge1xyXG4gICAgICAgIGZvciAobGV0IGF0dHJpYnV0ZXMgb2Ygc2xpZGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2xpZGUoYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNsaWRlKGF0dHJpYnV0ZXMgPSB7fSkge1xyXG4gICAgICAgIGxldCBzbGlkZSA9IG5ldyBTbGlkZSh7IHNsaWRlTnVtYmVyOiB0aGlzLnNsaWRlQ291bnQrKywgc2xpZGU6IGF0dHJpYnV0ZXMgfSk7XHJcblxyXG4gICAgICAgICQoJyNzbGlkZXMtd3JhcHBlcicpLmFwcGVuZChzbGlkZS5yZW5kZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1zbGlkZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRTbGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaEltYWdlUGlja2VyRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaEltYWdlUGlja2VyRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICAkKCcjc2xpZGVzLXdyYXBwZXInKS5vbignY2xpY2snLCAnLnNsaWRlLWltYWdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBpY2tlciA9IG5ldyBNZWRpYVBpY2tlcih7IHR5cGU6ICdpbWFnZScgfSk7XHJcblxyXG4gICAgICAgICAgICBwaWNrZXIub24oJ3NlbGVjdCcsIChmaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZmlsZS5wYXRofVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNsaWRlc1ske2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnNsaWRlTnVtYmVyfV1bZmlsZV9pZF1cIiB2YWx1ZT1cIiR7ZmlsZS5pZH1cIj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTbGlkZXNTb3J0YWJsZSgpIHtcclxuICAgICAgICBTb3J0YWJsZS5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcy13cmFwcGVyJyksIHtcclxuICAgICAgICAgICAgaGFuZGxlOiAnLnNsaWRlLWRyYWcnLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2xpZGUiLCJfZGVmYXVsdCIsIl9jbGFzc0NhbGxDaGVjayIsInNsaWRlQ291bnQiLCJhZGRTbGlkZXMiLCJGbGVldENhcnQiLCJkYXRhIiwiYWRkU2xpZGUiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsIm1ha2VTbGlkZXNTb3J0YWJsZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwic2xpZGVzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImF0dHJpYnV0ZXMiLCJlcnIiLCJlIiwiZiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNsaWRlIiwic2xpZGVOdW1iZXIiLCIkIiwiYXBwZW5kIiwicmVuZGVyIiwiX3RoaXMiLCJvbiIsImF0dGFjaEltYWdlUGlja2VyRXZlbnRMaXN0ZW5lciIsInBpY2tlciIsIk1lZGlhUGlja2VyIiwidHlwZSIsImZpbGUiLCJodG1sIiwiY29uY2F0IiwicGF0aCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJTb3J0YWJsZSIsImNyZWF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGUiLCJhbmltYXRpb24iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Modules/Slider/Resources/assets/admin/js/Slider.js\n");

/***/ }),

/***/ "./Modules/Slider/Resources/assets/admin/js/main.js":
/*!**********************************************************!*\
  !*** ./Modules/Slider/Resources/assets/admin/js/main.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./Modules/Slider/Resources/assets/admin/js/Slider.js\");\n\nnew _Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n$('#autoplay').on('change', function (e) {\n  $('.autoplay-speed-field').toggleClass('hide');\n});\nwindow.admin.removeSubmitButtonOffsetOn('#slides');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1NsaWRlci9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEI7QUFFOUIsSUFBSUEsK0NBQU0sRUFBRTtBQUVaQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0VBQy9CRixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0csV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUNsRCxDQUFDLENBQUM7QUFFRkMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsZWV0Y2FydC8uL01vZHVsZXMvU2xpZGVyL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbWFpbi5qcz9jODczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSAnLi9TbGlkZXInO1xyXG5cclxubmV3IFNsaWRlcigpO1xyXG5cclxuJCgnI2F1dG9wbGF5Jykub24oJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAkKCcuYXV0b3BsYXktc3BlZWQtZmllbGQnKS50b2dnbGVDbGFzcygnaGlkZScpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZG1pbi5yZW1vdmVTdWJtaXRCdXR0b25PZmZzZXRPbignI3NsaWRlcycpO1xyXG4iXSwibmFtZXMiOlsiU2xpZGVyIiwiJCIsIm9uIiwiZSIsInRvZ2dsZUNsYXNzIiwid2luZG93IiwiYWRtaW4iLCJyZW1vdmVTdWJtaXRCdXR0b25PZmZzZXRPbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Modules/Slider/Resources/assets/admin/js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Modules/Slider/Resources/assets/admin/js/main.js");
/******/ 	
/******/ })()
;