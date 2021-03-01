webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Countdown_CountdownContainer__2EVoX {\n  display: flex;\n  align-items: center;\n  font-family: Rajdhani;\n  font-weight: 600;\n  color: var(--title);\n}\n\n.Countdown_CountdownContainer__2EVoX > div {\n  flex: 1 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  background-color: var(--white);\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  font-size: 7.5rem;\n  text-align: center;\n}\n\n.Countdown_CountdownContainer__2EVoX > div span {\n  flex: 1 1;\n}\n\n.Countdown_CountdownContainer__2EVoX > div span:first-child {\n  border-right: 1px solid #f0f1f3;\n}\n\n.Countdown_CountdownContainer__2EVoX > div span:last-child {\n  border-left: 1px solid #f0f1f3;\n}\n\n.Countdown_CountdownContainer__2EVoX > span {\n  font-size: 6.25rem;\n  margin: 0 0.5rem;\n}\n\n.Countdown_countdownButton__2cSHU {\n  width: 100%;\n  height: 4rem;\n  margin-top: 2rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 0;\n  border-radius: 5px;\n\n  background-color: var(--blue);\n  color: var(--white);\n\n  font-size: 1.2rem;\n  font-weight: 600;\n\n  transition: background-color 0.2s;\n}\n\n.Countdown_countdownButton__2cSHU svg {\n  margin-left: 0.5rem;\n}\n\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\n  background-color: var(--blue-dark);\n}\n\n.Countdown_countdownButtonActive__37GOc {\n  background-color: var(--white);\n  color: var(--title);\n}\n\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover {\n  background-color: var(--red);\n  color: var(--white);\n}\n\n.Countdown_countdownButton__2cSHU:disabled {\n  background-color: var(--white);\n  color: var(--text);\n  cursor: not-allowed;\n}\n", "",{"version":3,"sources":["webpack://src/styles/components/Countdown.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAO;;EAEP,aAAa;EACb,mBAAmB;EACnB,6BAA6B;;EAE7B,8BAA8B;EAC9B,wCAAwC;EACxC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;;EAEhB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,SAAS;EACT,kBAAkB;;EAElB,6BAA6B;EAC7B,mBAAmB;;EAEnB,iBAAiB;EACjB,gBAAgB;;EAEhB,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":[".CountdownContainer {\n  display: flex;\n  align-items: center;\n  font-family: Rajdhani;\n  font-weight: 600;\n  color: var(--title);\n}\n\n.CountdownContainer > div {\n  flex: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  background-color: var(--white);\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  font-size: 7.5rem;\n  text-align: center;\n}\n\n.CountdownContainer > div span {\n  flex: 1;\n}\n\n.CountdownContainer > div span:first-child {\n  border-right: 1px solid #f0f1f3;\n}\n\n.CountdownContainer > div span:last-child {\n  border-left: 1px solid #f0f1f3;\n}\n\n.CountdownContainer > span {\n  font-size: 6.25rem;\n  margin: 0 0.5rem;\n}\n\n.countdownButton {\n  width: 100%;\n  height: 4rem;\n  margin-top: 2rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 0;\n  border-radius: 5px;\n\n  background-color: var(--blue);\n  color: var(--white);\n\n  font-size: 1.2rem;\n  font-weight: 600;\n\n  transition: background-color 0.2s;\n}\n\n.countdownButton svg {\n  margin-left: 0.5rem;\n}\n\n.countdownButton:not(:disabled):hover {\n  background-color: var(--blue-dark);\n}\n\n.countdownButtonActive {\n  background-color: var(--white);\n  color: var(--title);\n}\n\n.countdownButtonActive:not(:disabled):hover {\n  background-color: var(--red);\n  color: var(--white);\n}\n\n.countdownButton:disabled {\n  background-color: var(--white);\n  color: var(--text);\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"CountdownContainer": "Countdown_CountdownContainer__2EVoX",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/robson/projetos/rocketseat/nlw4/react/moveit-next/src/components/Countdown.tsx";

function Countdown() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countdownContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: ":"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/robson/projetos/rocketseat/nlw4/react/moveit-next/src/pages/index.tsx";





function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__["ExperienceBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["Profile"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_1__["CompletedChallenges"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_2__["Countdown"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Countdown.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Countdown.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Countdown.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3M/MGEwMCJdLCJuYW1lcyI6WyJDb3VudGRvd24iLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJIb21lIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMseUNBQXlDLGtCQUFrQix3QkFBd0IsMEJBQTBCLHFCQUFxQix3QkFBd0IsR0FBRyxnREFBZ0QsY0FBYyxvQkFBb0Isd0JBQXdCLGtDQUFrQyxxQ0FBcUMsNkNBQTZDLHVCQUF1QixzQkFBc0IsdUJBQXVCLEdBQUcscURBQXFELGNBQWMsR0FBRyxpRUFBaUUsb0NBQW9DLEdBQUcsZ0VBQWdFLG1DQUFtQyxHQUFHLGlEQUFpRCx1QkFBdUIscUJBQXFCLEdBQUcsdUNBQXVDLGdCQUFnQixpQkFBaUIscUJBQXFCLG9CQUFvQix3QkFBd0IsNEJBQTRCLGdCQUFnQix1QkFBdUIsb0NBQW9DLHdCQUF3Qix3QkFBd0IscUJBQXFCLHdDQUF3QyxHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRyw0REFBNEQsdUNBQXVDLEdBQUcsNkNBQTZDLG1DQUFtQyx3QkFBd0IsR0FBRyxrRUFBa0UsaUNBQWlDLHdCQUF3QixHQUFHLGdEQUFnRCxtQ0FBbUMsdUJBQXVCLHdCQUF3QixHQUFHLFNBQVMsMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEs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O0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHlWQUF3TDtBQUM5TDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHlWQUF3TDs7QUFFbE47O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zY2EwNTdhYjBiOWZjODlmMDJmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25fQ291bnRkb3duQ29udGFpbmVyX18yRVZvWCA+IGRpdiB7XFxuICBmbGV4OiAxIDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogNy41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uQ291bnRkb3duX0NvdW50ZG93bkNvbnRhaW5lcl9fMkVWb1ggPiBkaXYgc3BhbiB7XFxuICBmbGV4OiAxIDE7XFxufVxcblxcbi5Db3VudGRvd25fQ291bnRkb3duQ29udGFpbmVyX18yRVZvWCA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudGRvd25fQ291bnRkb3duQ29udGFpbmVyX18yRVZvWCA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duX0NvdW50ZG93bkNvbnRhaW5lcl9fMkVWb1ggPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFUgc3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFU6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFPOztFQUVQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCOztFQUU3Qiw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBTztBQUNUOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsU0FBUztFQUNULGtCQUFrQjs7RUFFbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7RUFFaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQ291bnRkb3duQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25Db250YWluZXIgPiBkaXYge1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiA3LjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Db3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uQ291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duQ29udGFpbmVyID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b24gc3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5jb3VudGRvd25CdXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uQWN0aXZlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFVcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4+Mjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+NTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuPjI8L3NwYW4+XG4gICAgICAgIDxzcGFuPjU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IENvbXBsZXRlZENoYWxsZW5nZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzXCI7XG5pbXBvcnQgeyBDb3VudGRvd24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGRvd25cIjtcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxFeHBlcmllbmNlQmFyIC8+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UHJvZmlsZSAvPlxuICAgICAgICAgIDxDb21wbGV0ZWRDaGFsbGVuZ2VzIC8+XG4gICAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vQ291bnRkb3duLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0NvdW50ZG93bi5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vQ291bnRkb3duLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==