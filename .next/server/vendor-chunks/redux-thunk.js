"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/redux-thunk";
exports.ids = ["vendor-chunks/redux-thunk"];
exports.modules = {

/***/ "(ssr)/./node_modules/redux-thunk/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-thunk/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n/** A function that accepts a potential \"extra argument\" value to be injected later,\r\n * and returns an instance of the thunk middleware that uses that value\r\n */\nfunction createThunkMiddleware(extraArgument) {\n  // Standard Redux middleware definition pattern:\n  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware\n  var middleware = function middleware(_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        // The thunk middleware looks for any functions that were passed to `store.dispatch`.\n        // If this \"action\" is really a function, call it and return the result.\n        if (typeof action === 'function') {\n          // Inject the store's `dispatch` and `getState` methods, as well as any \"extra arg\"\n          return action(dispatch, getState, extraArgument);\n        } // Otherwise, pass the action down the middleware chain as usual\n\n\n        return next(action);\n      };\n    };\n  };\n\n  return middleware;\n}\n\nvar thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version\n// with whatever \"extra arg\" they want to inject into their thunks\n\nthunk.withExtraArgument = createThunkMiddleware;\nvar _default = thunk;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fob28tcHJlZGljdC8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanM/YWM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgcG90ZW50aWFsIFwiZXh0cmEgYXJndW1lbnRcIiB2YWx1ZSB0byBiZSBpbmplY3RlZCBsYXRlcixcclxuICogYW5kIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIHRodW5rIG1pZGRsZXdhcmUgdGhhdCB1c2VzIHRoYXQgdmFsdWVcclxuICovXG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICAvLyBTdGFuZGFyZCBSZWR1eCBtaWRkbGV3YXJlIGRlZmluaXRpb24gcGF0dGVybjpcbiAgLy8gU2VlOiBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSN3cml0aW5nLWN1c3RvbS1taWRkbGV3YXJlXG4gIHZhciBtaWRkbGV3YXJlID0gZnVuY3Rpb24gbWlkZGxld2FyZShfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgLy8gVGhlIHRodW5rIG1pZGRsZXdhcmUgbG9va3MgZm9yIGFueSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCB0byBgc3RvcmUuZGlzcGF0Y2hgLlxuICAgICAgICAvLyBJZiB0aGlzIFwiYWN0aW9uXCIgaXMgcmVhbGx5IGEgZnVuY3Rpb24sIGNhbGwgaXQgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIEluamVjdCB0aGUgc3RvcmUncyBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIG1ldGhvZHMsIGFzIHdlbGwgYXMgYW55IFwiZXh0cmEgYXJnXCJcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCBwYXNzIHRoZSBhY3Rpb24gZG93biB0aGUgbWlkZGxld2FyZSBjaGFpbiBhcyB1c3VhbFxuXG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gbWlkZGxld2FyZTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7IC8vIEF0dGFjaCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBzbyB1c2VycyBjYW4gY3JlYXRlIGEgY3VzdG9taXplZCB2ZXJzaW9uXG4vLyB3aXRoIHdoYXRldmVyIFwiZXh0cmEgYXJnXCIgdGhleSB3YW50IHRvIGluamVjdCBpbnRvIHRoZWlyIHRodW5rc1xuXG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcbnZhciBfZGVmYXVsdCA9IHRodW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/redux-thunk/lib/index.js\n");

/***/ })

};
;