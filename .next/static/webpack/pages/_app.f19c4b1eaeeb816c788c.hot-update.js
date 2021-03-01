webpackHotUpdate_N_E("pages/_app",{

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio("/notification.mp3");

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🚀 ", {
        body: "Valendo ".concat(challenge.amount, "xp!")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengeContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      experienceToNextLevel: experienceToNextLevel,
      challengesCompleted: challengesCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      completeChallenge: completeChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "mXQLPpEuqfijIicM0DJuMSLmJHY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQTRCTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVBLFNBQVNDLGtCQUFULE9BQWtFO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQzs7QUFBQSxrQkFDN0NDLHNEQUFRLENBQUMsQ0FBRCxDQURxQztBQUFBLE1BQ2hFQyxLQURnRTtBQUFBLE1BQ3pEQyxRQUR5RDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFaEVHLGlCQUZnRTtBQUFBLE1BRTdDQyxvQkFGNkM7O0FBQUEsbUJBR2pCSixzREFBUSxDQUFDLENBQUQsQ0FIUztBQUFBLE1BR2hFSyxtQkFIZ0U7QUFBQSxNQUczQ0Msc0JBSDJDOztBQUFBLG1CQUt6Qk4sc0RBQVEsQ0FBQyxJQUFELENBTGlCO0FBQUEsTUFLaEVPLGVBTGdFO0FBQUEsTUFLL0NDLGtCQUwrQzs7QUFPdkUsTUFBTUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNWLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7QUFFQVcseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdCQUFZLENBQUNDLGlCQUFiO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCYixZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFFRCxXQUFTZSxpQkFBVCxHQUE2QjtBQUMzQixRQUFNQyxvQkFBb0IsR0FBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVdSLElBQUksQ0FBQ1MsTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFBdEMsQ0FBN0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDZDQUFVLENBQUNILG9CQUFELENBQTVCO0FBRUFULHNCQUFrQixDQUFDYyxTQUFELENBQWxCO0FBRUEsUUFBSUMsS0FBSixDQUFVLG1CQUFWOztBQUVBLFFBQUlWLFlBQVksQ0FBQ1csVUFBYixLQUE0QixTQUFoQyxFQUEyQztBQUN6QyxVQUFJWCxZQUFKLENBQWlCLGtCQUFqQixFQUFxQztBQUNuQ1ksWUFBSSxvQkFBYUgsU0FBUyxDQUFDSSxNQUF2QjtBQUQrQixPQUFyQztBQUdEO0FBQ0Y7O0FBRUQsV0FBU0MsY0FBVCxHQUEwQjtBQUN4Qm5CLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRDs7QUFFRCxXQUFTb0IsaUJBQVQsR0FBNkI7QUFDM0IsUUFBSSxDQUFDckIsZUFBTCxFQUFzQjtBQUNwQjtBQUNEOztBQUgwQixRQUtuQm1CLE1BTG1CLEdBS1JuQixlQUxRLENBS25CbUIsTUFMbUI7QUFPM0IsUUFBSUcsZUFBZSxHQUFHMUIsaUJBQWlCLEdBQUd1QixNQUExQzs7QUFFQSxRQUFJRyxlQUFlLElBQUlwQixxQkFBdkIsRUFBOEM7QUFDNUNvQixxQkFBZSxHQUFHQSxlQUFlLEdBQUdwQixxQkFBcEM7QUFDQU0sYUFBTztBQUNSOztBQUVEWCx3QkFBb0IsQ0FBQ3lCLGVBQUQsQ0FBcEI7QUFDQXJCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFDRSxTQUFLLEVBQUU7QUFDTEosV0FBSyxFQUFMQSxLQURLO0FBRUxFLHVCQUFpQixFQUFqQkEsaUJBRks7QUFHTE0sMkJBQXFCLEVBQXJCQSxxQkFISztBQUlMSix5QkFBbUIsRUFBbkJBLG1CQUpLO0FBS0xVLGFBQU8sRUFBUEEsT0FMSztBQU1MQyx1QkFBaUIsRUFBakJBLGlCQU5LO0FBT0xULHFCQUFlLEVBQWZBLGVBUEs7QUFRTG9CLG9CQUFjLEVBQWRBLGNBUks7QUFTTEMsdUJBQWlCLEVBQWpCQTtBQVRLLEtBRFQ7QUFBQSxjQWFHN0I7QUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBeEVlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMTljNGIxZWFlZWI4MTZjNzg4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG5cbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIG5ldyBBdWRpbyhcIi9ub3RpZmljYXRpb24ubXAzXCIpO1xuXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpbyDwn5qAIFwiLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxldmVsLFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9