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
/* harmony import */ var _home_robson_projetos_rocketseat_nlw4_react_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



var _jsxFileName = "/home/robson/projetos/rocketseat/nlw4/react/moveit-next/src/contexts/ChallengesContext.tsx",
    _s = $RefreshSig$();





var ChallengeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  var children = _ref.children,
      rest = Object(_home_robson_projetos_rocketseat_nlw4_react_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("level", String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("currentExperience", String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio("/notification.mp3").play();

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
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "UqHVByiPLb7kVaLDO0z8bDhE3KM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNEJPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDO0FBRUEsU0FBU0Msa0JBQVQsT0FHb0I7QUFBQTs7QUFBQTs7QUFBQSxNQUZ6QkMsUUFFeUIsUUFGekJBLFFBRXlCO0FBQUEsTUFEdEJDLElBQ3NCOztBQUFBLGtC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bUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0UsU0FBSyxFQUFFO0FBQ0xKLFdBQUssRUFBTEEsS0FESztBQUVMRSx1QkFBaUIsRUFBakJBLGlCQUZLO0FBR0xRLDJCQUFxQixFQUFyQkEscUJBSEs7QUFJTE4seUJBQW1CLEVBQW5CQSxtQkFKSztBQUtMZSxhQUFPLEVBQVBBLE9BTEs7QUFNTEUsdUJBQWlCLEVBQWpCQSxpQkFOSztBQU9MZixxQkFBZSxFQUFmQSxlQVBLO0FBUUwyQixvQkFBYyxFQUFkQSxjQVJLO0FBU0xDLHVCQUFpQixFQUFqQkE7QUFUSyxLQURUO0FBQUEsZUFhR3JDLFFBYkgsRUFlR1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBN0ZlWixrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDkzNjkwODU4ZTI4ZjYxNmVkZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsXCI7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgLy8gY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIC4uLnJlc3Rcbn06IENoYWxsZW5nZVByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKFxuICAgIHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMFxuICApO1xuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShcbiAgICByZXN0LmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMFxuICApO1xuXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENvb2tpZXMuc2V0KFwibGV2ZWxcIiwgU3RyaW5nKGxldmVsKSk7XG4gICAgQ29va2llcy5zZXQoXCJjdXJyZW50RXhwZXJpZW5jZVwiLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcbiAgICBDb29raWVzLnNldChcImNoYWxsZW5nZXNDb21wbGV0ZWRcIiwgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcbiAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pO1xuXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpIHtcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG5cbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIG5ldyBBdWRpbyhcIi9ub3RpZmljYXRpb24ubXAzXCIpLnBsYXkoKTtcblxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24oXCJOb3ZvIGRlc2FmaW8g8J+agCBcIiwge1xuICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcblxuICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcblxuICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG4gICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XG4gICAgICBsZXZlbFVwKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBsZXZlbCxcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXG4gICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcbiAgICAgICAgbGV2ZWxVcCxcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cbiAgICA8L0NoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9