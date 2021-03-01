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



var _jsxFileName = "/home/robson/projetos/rocketseat/nlw4/react/moveit-next/src/contexts/ChallengesContext.tsx",
    _s = $RefreshSig$();




var ChallengeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level;

  var children = _ref.children,
      rest = Object(_home_robson_projetos_rocketseat_nlw4_react_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

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
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "l1erB8MnstLyi7p47kikQFNSAZA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQTRCTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVBLFNBQVNDLGtCQUFULE9BR29CO0FBQUE7O0FBQUE7O0FBQUEsTUFGekJDLFFBRXlCLFFBRnpCQSxRQUV5QjtBQUFBLE1BRHRCQyxJQUNzQjs7QUFBQSxrQkFDQ0Msc0RBQVEsZ0JBQUNELElBQUksQ0FBQ0UsS0FBTixxREFBZSxDQUFmLENBRFQ7QUFBQSxNQUNsQkEsS0FEa0I7QUFB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VEssS0FEVDtBQUFBLGNBYUdsQztBQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0FqRmVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDFiOWU4ZmI3NDg3NjcxOWE1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIC4uLnJlc3Rcbn06IENoYWxsZW5nZVByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIFN0cmluZyhsZXZlbCkpO1xuICAgIENvb2tpZXMuc2V0KFwiY3VycmVudEV4cGVyaWVuY2VcIiwgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgQ29va2llcy5zZXQoXCJjaGFsbGVuZ2VzQ29tcGxldGVkXCIsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkKSk7XG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcblxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcblxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xuXG4gICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xuXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpbyDwn5qAIFwiLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxldmVsLFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9