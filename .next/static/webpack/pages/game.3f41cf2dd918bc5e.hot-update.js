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

/***/ "./components/CheckCorrect.js":
/*!************************************!*\
  !*** ./components/CheckCorrect.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _img_winBg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/winBg.svg */ \"./img/winBg.svg\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\\\u04461\\\\Desktop\\\\trainer_order\\\\components\\\\CheckCorrect.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar WinBg = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__WinBg\",\n  componentId: \"sc-1wvc1z3-0\"\n})([\"width:100vw;height:100vh;position:absolute;background-color:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;\"]);\n_c = WinBg;\nvar WinMenu = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__WinMenu\",\n  componentId: \"sc-1wvc1z3-1\"\n})([\"max-width:600px;max-height:400px;width:100%;height:100%;position:absolute;background-image:url(\", \");background-size:contain;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:center;align-items:center;\"], _img_winBg_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src);\n_c2 = WinMenu;\nvar WinTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__WinTitle\",\n  componentId: \"sc-1wvc1z3-2\"\n})([\"font-family:'Circe Rounded Alt ';font-style:normal;font-weight:600;font-size:92px;display:flex;align-items:center;text-shadow:0 0 15px green;color:#FFE44F;\"]);\n_c3 = WinTitle;\nvar CongratulationText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__CongratulationText\",\n  componentId: \"sc-1wvc1z3-3\"\n})([\"width:250px;font-family:'Circe Rounded';font-style:normal;font-weight:400;font-size:25px;line-height:51px;display:flex;align-items:center;text-align:center;color:#5F40A1;margin:15px 0;\"]);\n_c4 = CongratulationText;\nvar AgainButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"CheckCorrect__AgainButton\",\n  componentId: \"sc-1wvc1z3-4\"\n})([\"background:#2BD600;box-shadow:0px 4px 10px rgba(0,0,0,0.1);border-radius:15px;font-family:'Circe Rounded Alt ';font-style:normal;font-weight:400;font-size:30px;display:flex;align-items:center;color:#FFFFFF;border:none;padding:5px 25px;cursor:pointer;&:hover{background:rgba(43,214,0,0.5);}&:active{background:rgba(134,224,111,0.7);}\"]);\n_c5 = AgainButton;\n\nvar CheckCorrect = function CheckCorrect(_ref) {\n  _s();\n\n  var resultRow = _ref.resultRow;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var againHandler = function againHandler(e) {\n    e.preventDefault();\n    router.push('/');\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isCorrect = _useState[0],\n      setIsCorrect = _useState[1];\n\n  var prev;\n  resultRow.map(function (item) {\n    if (prev && prev.value < item.value) {\n      setIsCorrect(false);\n    }\n\n    prev = item;\n  });\n  console.log(isCorrect);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WinBg, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WinMenu, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WinTitle, {\n        children: \"\\u041F\\u043E\\u0431\\u0435\\u0434\\u0430!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CongratulationText, {\n        children: \"\\u041C\\u043E\\u043B\\u043E\\u0434\\u0435\\u0446! \\u0422\\u044B \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u0441\\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0441\\u044F \\u0441 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0435\\u043C!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(AgainButton, {\n        onClick: againHandler,\n        children: \"\\u0417\\u0430\\u043D\\u043E\\u0432\\u043E\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CheckCorrect, \"HXhOKMjcY4Z4FS79HHt9H79lQ2U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c6 = CheckCorrect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckCorrect);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"WinBg\");\n$RefreshReg$(_c2, \"WinMenu\");\n$RefreshReg$(_c3, \"WinTitle\");\n$RefreshReg$(_c4, \"CongratulationText\");\n$RefreshReg$(_c5, \"AgainButton\");\n$RefreshReg$(_c6, \"CheckCorrect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrQ29ycmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssS0FBSyxHQUFHSCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwySUFBWDtLQUFNRztBQVVOLElBQU1FLE9BQU8sR0FBR0wsd0VBQUg7RUFBQTtFQUFBO0FBQUEsK09BTWFDLDBEQU5iLENBQWI7TUFBTUk7QUFlTixJQUFNRSxRQUFRLEdBQUdQLHdFQUFIO0VBQUE7RUFBQTtBQUFBLG1LQUFkO01BQU1PO0FBWU4sSUFBTUMsa0JBQWtCLEdBQUdSLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGdNQUF4QjtNQUFNUTtBQWNOLElBQU1DLFdBQVcsR0FBR1QsMkVBQUg7RUFBQTtFQUFBO0FBQUEsb1ZBQWpCO01BQU1TOztBQXdCTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtFQUFBOztFQUFBLElBQWZDLFNBQWUsUUFBZkEsU0FBZTtFQUVsQyxJQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCOztFQUVBLElBQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztJQUN4QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7RUFDSCxDQUhEOztFQUtBLGdCQUFrQ2xCLCtDQUFRLENBQUMsSUFBRCxDQUExQztFQUFBLElBQU9tQixTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUVBLElBQUlDLElBQUo7RUFDQVIsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0lBQ3BCLElBQUlGLElBQUksSUFBSUEsSUFBSSxDQUFDRyxLQUFMLEdBQWFELElBQUksQ0FBQ0MsS0FBOUIsRUFBcUM7TUFDakNKLFlBQVksQ0FBQyxLQUFELENBQVo7SUFDSDs7SUFDREMsSUFBSSxHQUFHRSxJQUFQO0VBQ0gsQ0FMRDtFQU9BRSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsU0FBWjtFQUVBLG9CQUNJLDhEQUFDLEtBQUQ7SUFBQSx1QkFDSSw4REFBQyxPQUFEO01BQUEsd0JBQ0ksOERBQUMsUUFBRDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURKLGVBRUksOERBQUMsa0JBQUQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGSixlQUdJLDhEQUFDLFdBQUQ7UUFBYSxPQUFPLEVBQUVKLFlBQXRCO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBSEo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREo7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBU0gsQ0E5QkQ7O0dBQU1IO1VBRWFUOzs7TUFGYlM7QUFnQ04sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja0NvcnJlY3QuanM/OWFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgd2luQmdJbWcgZnJvbSBcIi4uL2ltZy93aW5CZy5zdmdcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgV2luQmcgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBXaW5NZW51ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7d2luQmdJbWcuc3JjfSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFdpblRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogJ0NpcmNlIFJvdW5kZWQgQWx0ICc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiA5MnB4O1xyXG4gIC8vbGluZS1oZWlnaHQ6IDE2M3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggZ3JlZW47XHJcbiAgY29sb3I6ICNGRkU0NEY7XHJcbmBcclxuXHJcbmNvbnN0IENvbmdyYXR1bGF0aW9uVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2lyY2UgUm91bmRlZCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM1RjQwQTE7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IEFnYWluQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kOiAjMkJENjAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LWZhbWlseTogJ0NpcmNlIFJvdW5kZWQgQWx0ICc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDMsIDIxNCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM0LCAyMjQsIDExMSwgMC43KTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IENoZWNrQ29ycmVjdCA9ICh7cmVzdWx0Um93fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGFnYWluSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2lzQ29ycmVjdCwgc2V0SXNDb3JyZWN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGxldCBwcmV2O1xyXG4gICAgcmVzdWx0Um93Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2ICYmIHByZXYudmFsdWUgPCBpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldElzQ29ycmVjdChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXYgPSBpdGVtO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpc0NvcnJlY3QpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2luQmc+XHJcbiAgICAgICAgICAgIDxXaW5NZW51PlxyXG4gICAgICAgICAgICAgICAgPFdpblRpdGxlPtCf0L7QsdC10LTQsCE8L1dpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENvbmdyYXR1bGF0aW9uVGV4dD7QnNC+0LvQvtC00LXRhiEg0KLRiyDRg9GB0L/QtdGI0L3QviDRgdC/0YDQsNCy0LjQu9GB0Y8g0YEg0LfQsNC00LDQvdC40LXQvCE8L0NvbmdyYXR1bGF0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIDxBZ2FpbkJ1dHRvbiBvbkNsaWNrPXthZ2FpbkhhbmRsZXJ9PtCX0LDQvdC+0LLQvjwvQWdhaW5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvV2luTWVudT5cclxuICAgICAgICA8L1dpbkJnPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrQ29ycmVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIndpbkJnSW1nIiwidXNlUm91dGVyIiwiV2luQmciLCJkaXYiLCJXaW5NZW51Iiwic3JjIiwiV2luVGl0bGUiLCJDb25ncmF0dWxhdGlvblRleHQiLCJBZ2FpbkJ1dHRvbiIsImJ1dHRvbiIsIkNoZWNrQ29ycmVjdCIsInJlc3VsdFJvdyIsInJvdXRlciIsImFnYWluSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJpc0NvcnJlY3QiLCJzZXRJc0NvcnJlY3QiLCJwcmV2IiwibWFwIiwiaXRlbSIsInZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CheckCorrect.js\n"));

/***/ })

});