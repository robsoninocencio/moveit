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
      completeChallenge: completeChallenge,
      closeLevelUpModal: closeLevelUpModal
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNEJPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDO0FBRUEsU0FBU0Msa0JBQVQsT0FHb0I7QUFBQTs7QUFBQTs7QUFBQSxNQUZ6QkMsUUFFeUIsUUFGekJBLFFBRXlCO0FBQUEsTUFEdEJDLElBQ3NCOztBQUFBLGtC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bUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0UsU0FBSyxFQUFFO0FBQ0xKLFdBQUssRUFBTEEsS0FESztBQUVMRSx1QkFBaUIsRUFBakJBLGlCQUZLO0FBR0xRLDJCQUFxQixFQUFyQkEscUJBSEs7QUFJTE4seUJBQW1CLEVBQW5CQSxtQkFKSztBQUtMZSxhQUFPLEVBQVBBLE9BTEs7QUFNTEUsdUJBQWlCLEVBQWpCQSxpQkFOSztBQU9MZixxQkFBZSxFQUFmQSxlQVBLO0FBUUwyQixvQkFBYyxFQUFkQSxjQVJLO0FBU0xDLHVCQUFpQixFQUFqQkEsaUJBVEs7QUFVTGQsdUJBQWlCLEVBQWpCQTtBQVZLLEtBRFQ7QUFBQSxlQWNHdkIsUUFkSCxFQWdCR1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQTlGZVosa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5NDQwZWI2NmYxZGMxNmQ4MDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbFwiO1xuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZUNvbnRleHREYXRhIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZUNvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59OiBDaGFsbGVuZ2VQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcbiAgICByZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDBcbiAgKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoXG4gICAgcmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDBcbiAgKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxVcE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIFN0cmluZyhsZXZlbCkpO1xuICAgIENvb2tpZXMuc2V0KFwiY3VycmVudEV4cGVyaWVuY2VcIiwgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgQ29va2llcy5zZXQoXCJjaGFsbGVuZ2VzQ29tcGxldGVkXCIsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkKSk7XG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcblxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKSB7XG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XG5cbiAgICBuZXcgQXVkaW8oXCIvbm90aWZpY2F0aW9uLm1wM1wiKS5wbGF5KCk7XG5cbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICBuZXcgTm90aWZpY2F0aW9uKFwiTm92byBkZXNhZmlvIPCfmoAgXCIsIHtcbiAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcbiAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG5cbiAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XG5cbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgbGV2ZWxVcCgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxuICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXG4gICAgICAgIGxldmVsVXAsXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcbiAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxuICAgIDwvQ2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=