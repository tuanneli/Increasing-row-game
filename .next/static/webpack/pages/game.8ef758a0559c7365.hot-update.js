"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_1_Desktop_trainer_order_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_1620189167_33_phonoteka_org_p_fon_pustinya_dlya_detei_38_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/1620189167_33-phonoteka_org-p-fon-pustinya-dlya-detei-38.jpg */ \"./img/1620189167_33-phonoteka_org-p-fon-pustinya-dlya-detei-38.jpg\");\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ParseRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ParseRow */ \"./components/ParseRow.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\\\u04461\\\\Desktop\\\\trainer_order\\\\pages\\\\game.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar PlayGround = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"game__PlayGround\",\n  componentId: \"sc-gfme3h-0\"\n})([\"max-width:600px;max-height:600px;width:100%;height:calc(100% - 30px);border-radius:15px;background-color:rgba(255,255,255,0.75);padding:15px;\"]);\n_c = PlayGround;\nvar ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"game__ItemWrapper\",\n  componentId: \"sc-gfme3h-1\"\n})([\"display:flex;justify-content:center;align-items:center;\"]);\n_c2 = ItemWrapper;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"game__Item\",\n  componentId: \"sc-gfme3h-2\"\n})([\"width:60px;height:60px;background-color:red;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:700;color:white;font-size:30px;cursor:pointer;\"]);\n_c3 = Item;\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"game__Box\",\n  componentId: \"sc-gfme3h-3\"\n})([\"width:60px;height:60px;background-color:white;display:flex;justify-content:center;align-items:center;border:1px solid black;\"]);\n_c4 = Box;\n\nvar Game = function Game(_ref) {\n  _s();\n\n  var amount = _ref.amount,\n      values = _ref.values,\n      increasing = _ref.increasing;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      amountRow = _useState[0],\n      setAmountRow = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      resultRow = _useState2[0],\n      setResultRow = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setAmountRow((0,_components_ParseRow__WEBPACK_IMPORTED_MODULE_4__.ParseRow)(values, amount));\n\n    var _loop = function _loop(i) {\n      setResultRow(function (prev) {\n        return [].concat((0,C_Users_1_Desktop_trainer_order_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [{\n          id: i,\n          value: \"\"\n        }]);\n      });\n    };\n\n    for (var i = 1; i <= amount; i++) {\n      _loop(i);\n    }\n  }, []);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      currentItem = _useState3[0],\n      setCurrentItem = _useState3[1];\n\n  var dragOverHandler = function dragOverHandler(e) {\n    e.preventDefault();\n    e.target.style.background = 'red';\n  };\n\n  var dragEndHandler = function dragEndHandler(e) {\n    e.target.style.background = 'white';\n  };\n\n  var dragLeaveHandler = function dragLeaveHandler(e) {\n    e.target.style.background = 'white';\n  };\n\n  var dragHandler = function dragHandler(item) {};\n\n  var dragStartHandler = function dragStartHandler(item) {\n    setCurrentItem(item);\n  };\n\n  var dropHandler = function dropHandler(e, item) {\n    e.preventDefault();\n    setBoxValue(item);\n  };\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      boxValue = _useState4[0],\n      setBoxValue = _useState4[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    img: _img_1620189167_33_phonoteka_org_p_fon_pustinya_dlya_detei_38_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(PlayGround, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ItemWrapper, {\n        children: amountRow === null || amountRow === void 0 ? void 0 : amountRow.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Item, {\n            draggable: true,\n            onDragStart: function onDragStart() {\n              return dragStartHandler(item.value);\n            },\n            children: item.value\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 32\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ItemWrapper, {\n        children: resultRow.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Box, {\n            onDragOver: dragOverHandler,\n            onDrop: function onDrop(e) {\n              return dropHandler(e, currentItem);\n            },\n            onDragEnd: dragEndHandler,\n            onDragLeave: dragLeaveHandler,\n            children: resultRow.value\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 32\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Game, \"sDOZQhLa/Z/OAXBTMCg+dZyzCc0=\");\n\n_c5 = Game;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"PlayGround\");\n$RefreshReg$(_c2, \"ItemWrapper\");\n$RefreshReg$(_c3, \"Item\");\n$RefreshReg$(_c4, \"Box\");\n$RefreshReg$(_c5, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLFVBQVUsR0FBR0Ysd0VBQUg7RUFBQTtFQUFBO0FBQUEscUpBQWhCO0tBQU1FO0FBVU4sSUFBTUUsV0FBVyxHQUFHSix3RUFBSDtFQUFBO0VBQUE7QUFBQSwrREFBakI7TUFBTUk7QUFNTixJQUFNQyxJQUFJLEdBQUdMLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHVMQUFWO01BQU1LO0FBY04sSUFBTUMsR0FBRyxHQUFHTix3RUFBSDtFQUFBO0VBQUE7QUFBQSxvSUFBVDtNQUFNTTs7QUFVTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQztFQUFBOztFQUFBLElBQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7RUFBQSxJQUF4QkMsTUFBd0IsUUFBeEJBLE1BQXdCO0VBQUEsSUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7RUFDM0MsZ0JBQWtDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7RUFBQSxJQUFPYyxTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLGlCQUFrQ2YsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0VBQUEsSUFBT2dCLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBRUFsQixnREFBUyxDQUFDLFlBQU07SUFDWmdCLFlBQVksQ0FBQ1gsOERBQVEsQ0FBQ1EsTUFBRCxFQUFTRCxNQUFULENBQVQsQ0FBWjs7SUFEWSwyQkFFSE8sQ0FGRztNQUdSRCxZQUFZLENBQUMsVUFBQUUsSUFBSTtRQUFBLDRLQUFRQSxJQUFSLElBQWM7VUFBQ0MsRUFBRSxFQUFFRixDQUFMO1VBQVFHLEtBQUssRUFBRTtRQUFmLENBQWQ7TUFBQSxDQUFMLENBQVo7SUFIUTs7SUFFWixLQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlQLE1BQXJCLEVBQTZCTyxDQUFDLEVBQTlCLEVBQWtDO01BQUEsTUFBekJBLENBQXlCO0lBRWpDO0VBQ0osQ0FMUSxFQUtOLEVBTE0sQ0FBVDs7RUFPQSxpQkFBc0NsQiwrQ0FBUSxFQUE5QztFQUFBLElBQU9zQixXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0lBQzNCQSxDQUFDLENBQUNDLGNBQUY7SUFDQUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixLQUE1QjtFQUNILENBSEQ7O0VBS0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxDQUFELEVBQU87SUFDMUJBLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWVDLFVBQWYsR0FBNEIsT0FBNUI7RUFDSCxDQUZEOztFQUlBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ04sQ0FBRCxFQUFPO0lBQzVCQSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxVQUFmLEdBQTRCLE9BQTVCO0VBQ0gsQ0FGRDs7RUFJQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVUsQ0FDN0IsQ0FERDs7RUFHQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNELElBQUQsRUFBVTtJQUMvQlYsY0FBYyxDQUFDVSxJQUFELENBQWQ7RUFDSCxDQUZEOztFQUlBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNWLENBQUQsRUFBSVEsSUFBSixFQUFhO0lBQzdCUixDQUFDLENBQUNDLGNBQUY7SUFDQVUsV0FBVyxDQUFDSCxJQUFELENBQVg7RUFDSCxDQUhEOztFQUtBLGlCQUFnQ2pDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztFQUFBLElBQU9xQyxRQUFQO0VBQUEsSUFBaUJELFdBQWpCOztFQUVBLG9CQUNJLDhEQUFDLGlFQUFEO0lBQWUsR0FBRyxFQUFFbkMseUdBQXBCO0lBQUEsdUJBQ0ksOERBQUMsVUFBRDtNQUFBLHdCQUNJLDhEQUFDLFdBQUQ7UUFBQSxVQUNLYSxTQURMLGFBQ0tBLFNBREwsdUJBQ0tBLFNBQVMsQ0FBRXdCLEdBQVgsQ0FBZSxVQUFDTCxJQUFELEVBQVU7VUFDdEIsb0JBQU8sOERBQUMsSUFBRDtZQUFNLFNBQVMsRUFBRSxJQUFqQjtZQUNNLFdBQVcsRUFBRTtjQUFBLE9BQU1DLGdCQUFnQixDQUFDRCxJQUFJLENBQUNaLEtBQU4sQ0FBdEI7WUFBQSxDQURuQjtZQUFBLFVBR0ZZLElBQUksQ0FBQ1o7VUFISCxHQUVXWSxJQUFJLENBQUNiLEVBRmhCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FBUDtRQUtILENBTkE7TUFETDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREosZUFVSSw4REFBQyxXQUFEO1FBQUEsVUFDS0osU0FBUyxDQUFDc0IsR0FBVixDQUFjLFVBQUNMLElBQUQsRUFBVTtVQUNyQixvQkFBTyw4REFBQyxHQUFEO1lBQ0gsVUFBVSxFQUFFVCxlQURUO1lBRUgsTUFBTSxFQUFFLGdCQUFDQyxDQUFEO2NBQUEsT0FBT1UsV0FBVyxDQUFDVixDQUFELEVBQUlILFdBQUosQ0FBbEI7WUFBQSxDQUZMO1lBR0gsU0FBUyxFQUFFUSxjQUhSO1lBSUgsV0FBVyxFQUFFQyxnQkFKVjtZQUFBLFVBS1lmLFNBQVMsQ0FBQ0s7VUFMdEIsR0FLRVksSUFBSSxDQUFDYixFQUxQO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FBUDtRQU9ILENBUkE7TUFETDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBVko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREo7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBMEJILENBbEVEOztHQUFNVjs7TUFBQUE7O0FBZ0ZOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUuanM/ZWU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbWcgZnJvbSBcIi4uL2ltZy8xNjIwMTg5MTY3XzMzLXBob25vdGVrYV9vcmctcC1mb24tcHVzdGlueWEtZGx5YS1kZXRlaS0zOC5qcGdcIjtcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1BhcnNlUm93fSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXJzZVJvd1wiO1xyXG5cclxuY29uc3QgUGxheUdyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5gXHJcblxyXG5jb25zdCBJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5gXHJcblxyXG5jb25zdCBHYW1lID0gKHthbW91bnQsIHZhbHVlcywgaW5jcmVhc2luZ30pID0+IHtcclxuICAgIGNvbnN0IFthbW91bnRSb3csIHNldEFtb3VudFJvd10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtyZXN1bHRSb3csIHNldFJlc3VsdFJvd10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEFtb3VudFJvdyhQYXJzZVJvdyh2YWx1ZXMsIGFtb3VudCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdFJvdyhwcmV2ID0+IFsuLi5wcmV2LCB7aWQ6IGksIHZhbHVlOiBcIlwifV0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRDdXJyZW50SXRlbV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGRyYWdPdmVySGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcmFnRW5kSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHJhZ0xlYXZlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoaXRlbSkgPT4ge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyYWdTdGFydEhhbmRsZXIgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRJdGVtKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyb3BIYW5kbGVyID0gKGUsIGl0ZW0pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRCb3hWYWx1ZShpdGVtKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtib3hWYWx1ZSwgc2V0Qm94VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkNvbnRhaW5lciBpbWc9e2ltZ30+XHJcbiAgICAgICAgICAgIDxQbGF5R3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRSb3c/Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW0gZHJhZ2dhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IGRyYWdTdGFydEhhbmRsZXIoaXRlbS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8SXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdFJvdy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpID0+IGRyb3BIYW5kbGVyKGUsIGN1cnJlbnRJdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17ZHJhZ0VuZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0+e3Jlc3VsdFJvdy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICA8L1BsYXlHcm91bmQ+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQucXVlcnkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogY29udGV4dC5xdWVyeS5hbW91bnQsXHJcbiAgICAgICAgICAgIHZhbHVlczogY29udGV4dC5xdWVyeS52YWx1ZXMsXHJcbiAgICAgICAgICAgIGluY3JlYXNpbmc6IGNvbnRleHQucXVlcnkuaW5jcmVhc2luZyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWciLCJNYWluQ29udGFpbmVyIiwic3R5bGVkIiwiUGFyc2VSb3ciLCJQbGF5R3JvdW5kIiwiZGl2IiwiSXRlbVdyYXBwZXIiLCJJdGVtIiwiQm94IiwiR2FtZSIsImFtb3VudCIsInZhbHVlcyIsImluY3JlYXNpbmciLCJhbW91bnRSb3ciLCJzZXRBbW91bnRSb3ciLCJyZXN1bHRSb3ciLCJzZXRSZXN1bHRSb3ciLCJpIiwicHJldiIsImlkIiwidmFsdWUiLCJjdXJyZW50SXRlbSIsInNldEN1cnJlbnRJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZHJhZ0VuZEhhbmRsZXIiLCJkcmFnTGVhdmVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJpdGVtIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyb3BIYW5kbGVyIiwic2V0Qm94VmFsdWUiLCJib3hWYWx1ZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game.js\n"));

/***/ })

});