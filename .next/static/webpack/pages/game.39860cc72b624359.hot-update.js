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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_1620189167_33_phonoteka_org_p_fon_pustinya_dlya_detei_38_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/1620189167_33-phonoteka_org-p-fon-pustinya-dlya-detei-38.jpg */ \"./img/1620189167_33-phonoteka_org-p-fon-pustinya-dlya-detei-38.jpg\");\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ParseRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ParseRow */ \"./components/ParseRow.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\\\u04461\\\\Desktop\\\\trainer_order\\\\pages\\\\game.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar PlayGround = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"game__PlayGround\",\n  componentId: \"sc-gfme3h-0\"\n})([\"max-width:600px;max-height:600px;width:100%;height:calc(100% - 30px);border-radius:15px;background-color:rgba(255,255,255,0.75);padding:15px;\"]);\n_c = PlayGround;\nvar ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"game__ItemWrapper\",\n  componentId: \"sc-gfme3h-1\"\n})([\"display:flex;justify-content:center;align-items:center;\"]);\n_c2 = ItemWrapper;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"game__Item\",\n  componentId: \"sc-gfme3h-2\"\n})([\"width:60px;height:60px;background-color:red;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:700;color:white;font-size:30px;cursor:pointer;\"]);\n_c3 = Item;\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"game__Box\",\n  componentId: \"sc-gfme3h-3\"\n})([\"width:60px;height:60px;background-color:white;display:flex;justify-content:center;align-items:center;border:1px solid black;\"]);\n_c4 = Box;\n\nvar Game = function Game(_ref) {\n  _s();\n\n  var amount = _ref.amount,\n      values = _ref.values,\n      increasing = _ref.increasing;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      amountRow = _useState[0],\n      setAmountRow = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setAmountRow((0,_components_ParseRow__WEBPACK_IMPORTED_MODULE_3__.ParseRow)(values, amount));\n  }, []);\n  console.log(amountRow);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      currentItem = _useState2[0],\n      setCurrentItem = _useState2[1];\n\n  var dragOverHandler = function dragOverHandler(e) {\n    e.preventDefault();\n    e.target.style.background = 'red';\n  };\n\n  var dragEndHandler = function dragEndHandler(e) {\n    e.target.style.background = 'white';\n  };\n\n  var dragLeaveHandler = function dragLeaveHandler(e) {\n    e.target.style.background = 'white';\n  };\n\n  var dragHandler = function dragHandler(item) {};\n\n  var dragStartHandler = function dragStartHandler(item) {\n    setCurrentItem(item);\n    console.log(item);\n    console.log(currentItem);\n  };\n\n  var dropHandler = function dropHandler(e, item) {\n    e.preventDefault();\n    setBoxValue(item);\n    console.log(boxValue);\n    console.log('we are here');\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      boxValue = _useState3[0],\n      setBoxValue = _useState3[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    img: _img_1620189167_33_phonoteka_org_p_fon_pustinya_dlya_detei_38_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PlayGround, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ItemWrapper, {\n        children: amountRow === null || amountRow === void 0 ? void 0 : amountRow.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Item, {\n            draggable: true,\n            onDragStart: function onDragStart() {\n              return dragStartHandler(item.value);\n            },\n            children: item\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 32\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ItemWrapper, {\n        children: amountRow.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Box, {\n            onDragOver: dragOverHandler,\n            onDrop: function onDrop(e) {\n              return dropHandler(e, currentItem);\n            },\n            onDragEnd: dragEndHandler,\n            onDragLeave: dragLeaveHandler,\n            children: boxValue\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 32\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Game, \"Gt4mVofxo2OTY1M0XBFxgN6rwPU=\");\n\n_c5 = Game;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"PlayGround\");\n$RefreshReg$(_c2, \"ItemWrapper\");\n$RefreshReg$(_c3, \"Item\");\n$RefreshReg$(_c4, \"Box\");\n$RefreshReg$(_c5, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO2NBQUEsT0FBTUMsZ0JBQWdCLENBQUNELElBQUksQ0FBQ00sS0FBTixDQUF0QjtZQUFBLENBRG5CO1lBQUEsVUFHRk47VUFIRSxHQUVXQSxJQUFJLENBQUNPLEVBRmhCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FBUDtRQUtILENBTkE7TUFETDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREosZUFVSSw4REFBQyxXQUFEO1FBQUEsVUFDS3RCLFNBQVMsQ0FBQ29CLEdBQVYsQ0FBYyxVQUFDTCxJQUFELEVBQVU7VUFDckIsb0JBQU8sOERBQUMsR0FBRDtZQUNILFVBQVUsRUFBRVQsZUFEVDtZQUVILE1BQU0sRUFBRSxnQkFBQ0MsQ0FBRDtjQUFBLE9BQU9VLFdBQVcsQ0FBQ1YsQ0FBRCxFQUFJSCxXQUFKLENBQWxCO1lBQUEsQ0FGTDtZQUdILFNBQVMsRUFBRVEsY0FIUjtZQUlILFdBQVcsRUFBRUMsZ0JBSlY7WUFBQSxVQUtZTTtVQUxaLEdBS0VKLElBQUksQ0FBQ08sRUFMUDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQVA7UUFPSCxDQVJBO01BREw7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVZKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURKO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQTBCSCxDQW5FRDs7R0FBTTFCOztNQUFBQTs7QUFpRk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcz9lZTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGltZyBmcm9tIFwiLi4vaW1nLzE2MjAxODkxNjdfMzMtcGhvbm90ZWthX29yZy1wLWZvbi1wdXN0aW55YS1kbHlhLWRldGVpLTM4LmpwZ1wiO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7UGFyc2VSb3d9IGZyb20gXCIuLi9jb21wb25lbnRzL1BhcnNlUm93XCI7XHJcblxyXG5jb25zdCBQbGF5R3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbmBcclxuXHJcbmNvbnN0IEdhbWUgPSAoe2Ftb3VudCwgdmFsdWVzLCBpbmNyZWFzaW5nfSkgPT4ge1xyXG4gICAgY29uc3QgW2Ftb3VudFJvdywgc2V0QW1vdW50Um93XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBbW91bnRSb3coUGFyc2VSb3codmFsdWVzLCBhbW91bnQpKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGFtb3VudFJvdylcclxuXHJcbiAgICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEN1cnJlbnRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgZHJhZ092ZXJIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyYWdFbmRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcmFnTGVhdmVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IChpdGVtKSA9PiB7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHJhZ1N0YXJ0SGFuZGxlciA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SXRlbSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkcm9wSGFuZGxlciA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0Qm94VmFsdWUoaXRlbSlcclxuICAgICAgICBjb25zb2xlLmxvZyhib3hWYWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnd2UgYXJlIGhlcmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtib3hWYWx1ZSwgc2V0Qm94VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkNvbnRhaW5lciBpbWc9e2ltZ30+XHJcbiAgICAgICAgICAgIDxQbGF5R3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRSb3c/Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW0gZHJhZ2dhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IGRyYWdTdGFydEhhbmRsZXIoaXRlbS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8SXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudFJvdy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpID0+IGRyb3BIYW5kbGVyKGUsIGN1cnJlbnRJdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17ZHJhZ0VuZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0+e2JveFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvUGxheUdyb3VuZD5cclxuICAgICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY29udGV4dC5xdWVyeSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYW1vdW50OiBjb250ZXh0LnF1ZXJ5LmFtb3VudCxcclxuICAgICAgICAgICAgdmFsdWVzOiBjb250ZXh0LnF1ZXJ5LnZhbHVlcyxcclxuICAgICAgICAgICAgaW5jcmVhc2luZzogY29udGV4dC5xdWVyeS5pbmNyZWFzaW5nLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImltZyIsIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJQYXJzZVJvdyIsIlBsYXlHcm91bmQiLCJkaXYiLCJJdGVtV3JhcHBlciIsIkl0ZW0iLCJCb3giLCJHYW1lIiwiYW1vdW50IiwidmFsdWVzIiwiaW5jcmVhc2luZyIsImFtb3VudFJvdyIsInNldEFtb3VudFJvdyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SXRlbSIsInNldEN1cnJlbnRJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZHJhZ0VuZEhhbmRsZXIiLCJkcmFnTGVhdmVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJpdGVtIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyb3BIYW5kbGVyIiwic2V0Qm94VmFsdWUiLCJib3hWYWx1ZSIsIm1hcCIsInZhbHVlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.js\n"));

/***/ })

});