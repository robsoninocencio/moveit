webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");



var _jsxFileName = "/home/robson/projetos/rocketseat/nlw4/react/moveit-next/src/contexts/CountdownContext.tsx",
    _s = $RefreshSig$();



var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var countdownTimeout;
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengeContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var starInMinute = 25;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(starInMinute * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  var countdownTimeout;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(starInMinute * 60);
    setHasFinished(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
      value: {
        minutes: minutes,
        seconds: seconds,
        hasFinished: hasFinished,
        isActive: isActive,
        startCountdown: startCountdown,
        resetCountdown: resetCountdown
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(CountdownProvider, "LnQVsLQoy/0BkzCBBNk0pbbgmsQ=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50ZG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwic3RhckluTWludXRlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQWVPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDO0FBRVAsSUFBSUMsZ0JBQUo7QUFFTyxTQUFTQyxpQkFBVCxPQUFpRTtBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7O0FBQUEsb0JBQ3hDQyx3REFBVSxDQUFDQyxtRUFBRCxDQUQ4QjtBQUFBLE1BQzlEQyxpQkFEOEQsZUFDOURBLGlCQUQ4RDs7QUFHdEUsTUFBTUMsWUFBWSxHQUFHLEVBQXJCOztBQUhzRSxrQkFLOUNDLHNEQUFRLENBQUNELFlBQVksR0FBRyxFQUFoQixDQUxzQztBQUFBLE1BSy9ERSxJQUwrRDtBQUFBLE1BS3pEQyxPQUx5RDs7QUFBQSxtQkFNdENGLHNEQUFRLENBQUMsS0FBRCxDQU44QjtBQUFBLE1BTS9ERyxRQU4rRDtBQUFBLE1BTXJEQyxXQU5xRDs7QUFBQSxtQkFPaENKLHNEQUFRLENBQUMsS0FBRCxDQVB3QjtBQUFBLE1BTy9ESyxXQVArRDtBQUFBLE1BT2xEQyxjQVBrRDs7QUFTdEUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7QUFFQSxNQUFJUixnQkFBSjs7QUFFQSxXQUFTa0IsY0FBVCxHQUEwQjtBQUN4QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDeEJDLGdCQUFZLENBQUNwQixnQkFBRCxDQUFaO0FBQ0FXLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDSCxZQUFZLEdBQUcsRUFBaEIsQ0FBUDtBQUNBTyxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNEOztBQUVEUSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN4QlIsc0JBQWdCLEdBQUdzQixVQUFVLENBQUMsWUFBTTtBQUNsQ2IsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0QsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFHRCxLQUpELE1BSU8sSUFBSUUsUUFBUSxJQUFJRixJQUFJLElBQUksQ0FBeEIsRUFBMkI7QUFDaENLLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FGLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FOLHVCQUFpQjtBQUNsQjtBQUNGLEdBVlEsRUFVTixDQUFDSyxRQUFELEVBQVdGLElBQVgsQ0FWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUNFLFdBQUssRUFBRTtBQUNMTSxlQUFPLEVBQVBBLE9BREs7QUFFTEcsZUFBTyxFQUFQQSxPQUZLO0FBR0xMLG1CQUFXLEVBQVhBLFdBSEs7QUFJTEYsZ0JBQVEsRUFBUkEsUUFKSztBQUtMUSxzQkFBYyxFQUFkQSxjQUxLO0FBTUxDLHNCQUFjLEVBQWRBO0FBTkssT0FEVDtBQUFBLGdCQVVHakI7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFnQkQ7O0dBckRlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTRiMWQ0NThlNmIwZmFmYjU3OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlc0NvbnRleHRcIjtcblxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcbiAgbWludXRlczogbnVtYmVyO1xuICBzZWNvbmRzOiBudW1iZXI7XG4gIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XG4gIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSk7XG5cbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93blByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ291bnRkb3duUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZUNvbnRleHQpO1xuXG4gIGNvbnN0IHN0YXJJbk1pbnV0ZSA9IDI1O1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHN0YXJJbk1pbnV0ZSAqIDYwKTtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XG5cbiAgbGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIHNldElzQWN0aXZlKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRUaW1lKHN0YXJJbk1pbnV0ZSAqIDYwKTtcbiAgICBzZXRIYXNGaW5pc2hlZChmYWxzZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xuICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PSAwKSB7XG4gICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XG4gICAgfVxuICB9LCBbaXNBY3RpdmUsIHRpbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIG1pbnV0ZXMsXG4gICAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgICBoYXNGaW5pc2hlZCxcbiAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICBzdGFydENvdW50ZG93bixcbiAgICAgICAgICByZXNldENvdW50ZG93bixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==