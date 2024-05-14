/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addingAssignments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addingAssignments */ "./src/modules/addingAssignments.js");
/* harmony import */ var _modules_loadingAssignments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadingAssignments */ "./src/modules/loadingAssignments.js");


var addForm = document.querySelector('#addData');
addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  (0,_modules_addingAssignments__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
(0,_modules_loadingAssignments__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/addingAssignments.js":
/*!******************************************!*\
  !*** ./src/modules/addingAssignments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var tableBody = document.querySelector('#tableBody');
var savedTables = JSON.parse(localStorage.getItem('savedTables')) || [];
var addSubjects = function addSubjects() {
  var tableRow = document.createElement('tr');
  if (document.querySelector('#addSubject').value.length > 0 && document.querySelector('#addPriority').value.length > 0 && document.querySelector('#addDueDate').value.length > 0) {
    tableBody.appendChild(tableRow);
    var subjectCell = document.createElement('td');
    subjectCell.textContent = document.querySelector('#addSubject').value;
    var priorityCell = document.createElement('td');
    priorityCell.textContent = document.querySelector('#addPriority').value;
    var dueDateCell = document.createElement('td');
    dueDateCell.textContent = document.querySelector('#addDueDate').value;
    var statusCell = document.createElement('td');
    statusCell.classList.add('tableStatus');
    statusCell.textContent = 'Incomplete';
    var removeCell = document.createElement('td');
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      tableBody.removeChild(tableRow);
      savedTables = savedTables.filter(function (entry) {
        return entry.subject !== subjectCell.textContent;
      });
      localStorage.setItem('savedTables', JSON.stringify(savedTables));
    });
    var currStatus = document.createElement('td');
    var newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newCheck.setAttribute('id', 'compCheckbox');
    newCheck.addEventListener('change', function () {
      if (newCheck.checked) {
        statusCell.textContent = 'Complete';
        subjectCell.classList.add('subjComplete');
        localStorage.setItem('savedTables', JSON.stringify(savedTables));
      } else {
        statusCell.textContent = 'Incomplete';
        subjectCell.classList.remove('subjComplete');
      }
    });
    currStatus.appendChild(newCheck);
    tableRow.appendChild(subjectCell);
    tableRow.appendChild(priorityCell);
    tableRow.appendChild(dueDateCell);
    tableRow.appendChild(statusCell);
    tableRow.appendChild(currStatus);
    tableRow.appendChild(removeCell);
    var newTable = {
      subject: subjectCell.textContent,
      priority: priorityCell.textContent,
      dueDate: dueDateCell.textContent,
      status: 'Incomplete',
      checkbox: currStatus
    };
    if (savedTables.length > 0) {
      savedTables.push(newTable);
    } else {
      savedTables = [newTable];
    }
    ;
    localStorage.setItem('savedTables', JSON.stringify(savedTables));
  }
  console.log(JSON.parse(localStorage.getItem('savedTables')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addSubjects);

/***/ }),

/***/ "./src/modules/loadingAssignments.js":
/*!*******************************************!*\
  !*** ./src/modules/loadingAssignments.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var tableBody = document.querySelector('#tableBody');
var loadSubjects = function loadSubjects() {
  var savedTables = JSON.parse(localStorage.getItem('savedTables')) || [];
  if (savedTables.length > 0) {
    savedTables.forEach(function (savedTable) {
      var tableRow = document.createElement('tr');
      var subjectCell = document.createElement('td');
      subjectCell.textContent = savedTable.subject;
      var priorityCell = document.createElement('td');
      priorityCell.textContent = savedTable.priority;
      var dueDateCell = document.createElement('td');
      dueDateCell.textContent = savedTable.dueDate;
      var statusCell = document.createElement('td');
      statusCell.classList.add('tableStatus');
      statusCell.textContent = savedTable.status;
      var currStatus = document.createElement('td');
      var newCheck = document.createElement('input');
      newCheck.type = 'checkbox';
      newCheck.addEventListener('change', function () {
        savedTable.status = newCheck.checked ? 'Complete' : 'Incomplete';
        statusCell.textContent = savedTable.status;
        localStorage.setItem('savedTables', JSON.stringify(savedTables));
      });
      newCheck.checked = savedTable.status === 'Complete';
      if (statusCell.textContent === 'Complete') {
        subjectCell.classList.add('subjComplete');
      } else {
        subjectCell.classList.remove('subjComplete');
      }
      ;
      var removeCell = document.createElement('td');
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function () {
        tableBody.removeChild(tableRow);
        savedTables = savedTables.filter(function (entry) {
          return entry.subject !== subjectCell.textContent;
        });
        localStorage.setItem('savedTables', JSON.stringify(savedTables));
      });
      currStatus.appendChild(newCheck);
      tableRow.appendChild(subjectCell);
      tableRow.appendChild(priorityCell);
      tableRow.appendChild(dueDateCell);
      tableRow.appendChild(statusCell);
      tableRow.appendChild(currStatus);
      tableRow.appendChild(removeCell);
      tableBody.appendChild(tableRow);
    });
  } else {
    console.log('No more data to display');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSubjects);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstudents_database"] = self["webpackChunkstudents_database"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;