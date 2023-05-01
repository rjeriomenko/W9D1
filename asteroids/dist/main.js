/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import MovingObject from \"./moving_object.js\";\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    console.log(\"Webpack is working!\")\n\n    const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n    const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n\n\n//////TESTING CODE\n    let mobject = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    })\n    mobject.draw(ctx)\n    mobject.move()\n    // console.log(mobject)\n\n    // window.MovingObject = MovingObject;\n    window.Vector = Util.randomVec\n});\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("class MovingObject {\n    constructor(obj) {\n        this.pos = obj.pos;\n        this.vel = obj.vel;\n        this.radius = obj.radius;\n        this.color = obj.color;\n        this.draw = function(ctx) {\n            ctx.beginPath();\n            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n            ctx.stroke()\n            ctx.fillStyle = this.color\n            ctx.fill()\n        }\n        this.move = function() {\n            this.pos[0] += this.vel[0] \n            this.pos[1] += this.vel[1]\n        }\n    }\n    \n}\n\nmodule.exports = MovingObject\n// export default MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> export randomVec(length) {\\n|     const deg = 2 * Math.PI * Math.random();\\n|     return scale([Math.sin(deg), Math.cos(deg)], length);\");\n\n//# sourceURL=webpack://asteroids/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;