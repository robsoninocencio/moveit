webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengeContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeContext", function() { return ChallengeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


var _jsxFileName = "/home/robson/projetos/rocketseat/nlw4/react/moveit-next/src/contexts/ChallengesContext.tsx",
    _s = $RefreshSig$();



var ChallengeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengeContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      challengesCompleted: challengesCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "lIgE7IFKF0067ZYEERnSVPjxmqw=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBNEJPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDO0FBRUEsU0FBU0Msa0JBQVQsT0FBa0U7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DOztBQUFBLGtCQUM3Q0Msc0RBQVEsQ0FBQyxDQUFELENBRHFDO0FBQUEsTUFDaEVDLEtBRGdFO0FBQUEsTUFDekRDLFFBRHlEOztBQUFBLG1CQUVyQkYsc0RBQVEsQ0FBQyxDQUFELENBRmE7QUFBQSxNQUVoRUcsaUJBRmdFO0FBQUEsTUFFN0NDLG9CQUY2Qzs7QUFBQSxtQkFHakJKLHNEQUFRLENBQUMsQ0FBRCxDQUhTO0FBQUEsTUFHaEVLLG1CQUhnRTtBQUFBLE1BRzNDQyxzQkFIMkM7O0FBS3ZFLFdBQVNDLE9BQVQsR0FBbUI7QUFDakJMLFlBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNEOztBQUVELFdBQVNPLGlCQUFULEdBQTZCO0FBQzNCLFFBQU1DLG9CQUFvQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0osb0JBQUQsQ0FBNUI7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUNFLFNBQUssRUFBRTtBQUNMUixXQUFLLEVBQUxBLEtBREs7QUFFTEUsdUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMRSx5QkFBbUIsRUFBbkJBLG1CQUhLO0FBSUxFLGFBQU8sRUFBUEEsT0FKSztBQUtMQyx1QkFBaUIsRUFBakJBO0FBTEssS0FEVDtBQUFBLGNBU0dUO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBM0JlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTk2YjQ3NDhjYzI1YTRiMzdlZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZVByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=