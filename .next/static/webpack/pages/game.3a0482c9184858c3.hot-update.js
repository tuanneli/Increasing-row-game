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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _img_winBg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/winBg.svg */ \"./img/winBg.svg\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\\\u04461\\\\Desktop\\\\trainer_order\\\\components\\\\CheckCorrect.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar WinBg = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__WinBg\",\n  componentId: \"sc-1wvc1z3-0\"\n})([\"width:100vw;height:100vh;position:absolute;background-color:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;\"]);\n_c = WinBg;\nvar WinMenu = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__WinMenu\",\n  componentId: \"sc-1wvc1z3-1\"\n})([\"max-width:600px;max-height:400px;width:100%;height:100%;position:absolute;background-image:url(\", \");background-size:contain;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:center;align-items:center;\"], _img_winBg_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src);\n_c2 = WinMenu;\nvar WinTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__WinTitle\",\n  componentId: \"sc-1wvc1z3-2\"\n})([\"font-family:'Circe Rounded Alt ';font-style:normal;font-weight:600;font-size:92px;display:flex;align-items:center;text-shadow:0 0 15px green;color:#FFE44F;\"]);\n_c3 = WinTitle;\nvar CongratulationText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"CheckCorrect__CongratulationText\",\n  componentId: \"sc-1wvc1z3-3\"\n})([\"width:250px;font-family:'Circe Rounded';font-style:normal;font-weight:400;font-size:25px;line-height:51px;display:flex;align-items:center;text-align:center;color:#5F40A1;margin:15px 0;\"]);\n_c4 = CongratulationText;\nvar AgainButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"CheckCorrect__AgainButton\",\n  componentId: \"sc-1wvc1z3-4\"\n})([\"background:#2BD600;box-shadow:0px 4px 10px rgba(0,0,0,0.1);border-radius:15px;font-family:'Circe Rounded Alt ';font-style:normal;font-weight:400;font-size:30px;display:flex;align-items:center;color:#FFFFFF;border:none;padding:5px 25px;cursor:pointer;&:hover{background:rgba(43,214,0,0.5);}&:active{background:rgba(134,224,111,0.7);}\"]);\n_c5 = AgainButton;\n\nvar CheckCorrect = function CheckCorrect(_ref) {\n  _s();\n\n  var resultRow = _ref.resultRow;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var againHandler = function againHandler(e) {\n    e.preventDefault();\n    router.push('/');\n  };\n\n  var isCorrect = resultRow.reduce(function (first, curr) {\n    if (curr.value < first.value) {\n      return false;\n    }\n\n    first = curr; // console.log(curr);\n    // console.log(first)\n  }, resultRow[0]);\n  console.log(isCorrect);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WinBg, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WinMenu, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WinTitle, {\n        children: \"\\u041F\\u043E\\u0431\\u0435\\u0434\\u0430!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CongratulationText, {\n        children: \"\\u041C\\u043E\\u043B\\u043E\\u0434\\u0435\\u0446! \\u0422\\u044B \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u0441\\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0441\\u044F \\u0441 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0435\\u043C!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(AgainButton, {\n        onClick: againHandler,\n        children: \"\\u0417\\u0430\\u043D\\u043E\\u0432\\u043E\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CheckCorrect, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c6 = CheckCorrect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckCorrect);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"WinBg\");\n$RefreshReg$(_c2, \"WinMenu\");\n$RefreshReg$(_c3, \"WinTitle\");\n$RefreshReg$(_c4, \"CongratulationText\");\n$RefreshReg$(_c5, \"AgainButton\");\n$RefreshReg$(_c6, \"CheckCorrect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrQ29ycmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksS0FBSyxHQUFHSCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwySUFBWDtLQUFNRztBQVVOLElBQU1FLE9BQU8sR0FBR0wsd0VBQUg7RUFBQTtFQUFBO0FBQUEsK09BTWFDLDBEQU5iLENBQWI7TUFBTUk7QUFlTixJQUFNRSxRQUFRLEdBQUdQLHdFQUFIO0VBQUE7RUFBQTtBQUFBLG1LQUFkO01BQU1PO0FBWU4sSUFBTUMsa0JBQWtCLEdBQUdSLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGdNQUF4QjtNQUFNUTtBQWNOLElBQU1DLFdBQVcsR0FBR1QsMkVBQUg7RUFBQTtFQUFBO0FBQUEsb1ZBQWpCO01BQU1TOztBQXdCTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtFQUFBOztFQUFBLElBQWZDLFNBQWUsUUFBZkEsU0FBZTtFQUVsQyxJQUFNQyxNQUFNLEdBQUdYLHNEQUFTLEVBQXhCOztFQUVBLElBQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztJQUN4QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7RUFDSCxDQUhEOztFQUtBLElBQU1DLFNBQVMsR0FBR04sU0FBUyxDQUFDTyxNQUFWLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtJQUNoRCxJQUFJQSxJQUFJLENBQUNDLEtBQUwsR0FBYUYsS0FBSyxDQUFDRSxLQUF2QixFQUE4QjtNQUMxQixPQUFPLEtBQVA7SUFDSDs7SUFDREYsS0FBSyxHQUFHQyxJQUFSLENBSmdELENBS2hEO0lBQ0E7RUFDSCxDQVBpQixFQU9mVCxTQUFTLENBQUMsQ0FBRCxDQVBNLENBQWxCO0VBU0FXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0VBRUEsb0JBQ0ksOERBQUMsS0FBRDtJQUFBLHVCQUNJLDhEQUFDLE9BQUQ7TUFBQSx3QkFDSSw4REFBQyxRQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREosZUFFSSw4REFBQyxrQkFBRDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZKLGVBR0ksOERBQUMsV0FBRDtRQUFhLE9BQU8sRUFBRUosWUFBdEI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FISjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFTSCxDQTdCRDs7R0FBTUg7VUFFYVQ7OztNQUZiUztBQStCTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoZWNrQ29ycmVjdC5qcz85YWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB3aW5CZ0ltZyBmcm9tIFwiLi4vaW1nL3dpbkJnLnN2Z1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBXaW5CZyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFdpbk1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt3aW5CZ0ltZy5zcmN9KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgV2luVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtZmFtaWx5OiAnQ2lyY2UgUm91bmRlZCBBbHQgJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDkycHg7XHJcbiAgLy9saW5lLWhlaWdodDogMTYzcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCBncmVlbjtcclxuICBjb2xvcjogI0ZGRTQ0RjtcclxuYFxyXG5cclxuY29uc3QgQ29uZ3JhdHVsYXRpb25UZXh0ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdDaXJjZSBSb3VuZGVkJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzVGNDBBMTtcclxuICBtYXJnaW46IDE1cHggMDtcclxuYFxyXG5cclxuY29uc3QgQWdhaW5CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6ICMyQkQ2MDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2lyY2UgUm91bmRlZCBBbHQgJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0MywgMjE0LCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzQsIDIyNCwgMTExLCAwLjcpO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ2hlY2tDb3JyZWN0ID0gKHtyZXN1bHRSb3d9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgYWdhaW5IYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSByZXN1bHRSb3cucmVkdWNlKChmaXJzdCwgY3VycikgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyLnZhbHVlIDwgZmlyc3QudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdCA9IGN1cnJcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdClcclxuICAgIH0sIHJlc3VsdFJvd1swXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpc0NvcnJlY3QpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2luQmc+XHJcbiAgICAgICAgICAgIDxXaW5NZW51PlxyXG4gICAgICAgICAgICAgICAgPFdpblRpdGxlPtCf0L7QsdC10LTQsCE8L1dpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENvbmdyYXR1bGF0aW9uVGV4dD7QnNC+0LvQvtC00LXRhiEg0KLRiyDRg9GB0L/QtdGI0L3QviDRgdC/0YDQsNCy0LjQu9GB0Y8g0YEg0LfQsNC00LDQvdC40LXQvCE8L0NvbmdyYXR1bGF0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIDxBZ2FpbkJ1dHRvbiBvbkNsaWNrPXthZ2FpbkhhbmRsZXJ9PtCX0LDQvdC+0LLQvjwvQWdhaW5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvV2luTWVudT5cclxuICAgICAgICA8L1dpbkJnPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrQ29ycmVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJ3aW5CZ0ltZyIsInVzZVJvdXRlciIsIldpbkJnIiwiZGl2IiwiV2luTWVudSIsInNyYyIsIldpblRpdGxlIiwiQ29uZ3JhdHVsYXRpb25UZXh0IiwiQWdhaW5CdXR0b24iLCJidXR0b24iLCJDaGVja0NvcnJlY3QiLCJyZXN1bHRSb3ciLCJyb3V0ZXIiLCJhZ2FpbkhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaXNDb3JyZWN0IiwicmVkdWNlIiwiZmlyc3QiLCJjdXJyIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CheckCorrect.js\n"));

/***/ })

});