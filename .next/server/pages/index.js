module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/dev/youtube_downloader/pages/index.js\";\n\n // import VideoInfo from './models/VideoInfo';\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: \"ID do V\\xEDdeo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      id: \"videoId\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => getVideoInfo(),\n      children: \"Informa\\xE7\\xF5es do v\\xEDdeo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      id: \"json\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      title: \"formato de v\\xEDdeo: 720\",\n      download: \"PARTE 2 - TER\\xC7A FEIRA - 20h - CRIANDO O AMBIENTE NA NUVEM.mp4\",\n      \"data-quality\": \"720\",\n      \"data-type\": \"mp4\",\n      href: \"https://r7---sn-8p8v-bg0l.googlevideo.com/videoplayback?expire=1612390933&ei=tc0aYLLPIYy0wATdwq3gCA&ip=2804%3A431%3Ac7eb%3A4e64%3A9abd%3Af223%3A4295%3A577d&id=o-AMgtCUUHCOdsCrhOS0cYNkEj7-LHQ28tIygXAqfbN5XT&itag=18&source=youtube&requiressl=yes&mh=_3&mm=31%2C29&mn=sn-8p8v-bg0l%2Csn-bg0ezn7y&ms=au%2Crdu&mv=m&mvi=7&pcm2cms=yes&pl=47&initcwndbps=487500&vprv=1&mime=video%2Fmp4&ns=78ocSwZS8LB6mZedwr_cxGUF&gir=yes&clen=321643417&ratebypass=yes&dur=9390.056&lmt=1612344648579492&mt=1612368778&fvip=1&beids=23886210&c=WEB&txp=5310224&n=eJul8k2Km1otVAZPZZHJm4&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOHQSqo28eurAWTA0tNW3shNQ05bVJQ4FtR2Mxl97UygAiEA8G7Nrkws0BiXDQ9-0WKye2Vp6jGqNO8YR6m3QahUyDk%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMb8kXeWX7XK9-gRprkgH619TtUT5UIRyInOslOgXJ6UAiEA00Td7iKO93ALmEcdV3Gtg4E_y_2UYYN4V9SXsoYBsAA%3D&title=PARTE%202%20-%20TER%C3%87A%20FEIRA%20-%2020h%20-%20CRIANDO%20O%20AMBIENTE%20NA%20NUVEM\",\n      \"data-ga-event\": \"send;event;result;click;101\",\n      children: \"Download Receipt\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      title: \"formato de v\\xEDdeo: 720\",\n      download: \"PARTE 2 - TER\\xC7A FEIRA - 20h - CRIANDO O AMBIENTE NA NUVEM.mp4\",\n      \"data-quality\": \"720\",\n      \"data-type\": \"mp4\",\n      href: \"https://r7---sn-n02xgoxufvg3-2gbl.googlevideo.com/videoplayback?expire=1612384603&ei=-7QaYLOoIJrj1wKlmqXAAw&ip=212.102.39.131&id=o-AIZ8lpUQaGrsbon6yfRYxVjgfobaMGYONi5d5cOZxFP8&itag=22&source=youtube&requiressl=yes&mh=_3&mm=31%2C29&mn=sn-n02xgoxufvg3-2gbl%2Csn-2gb7sn7s&ms=au%2Crdu&mv=m&mvi=7&pl=26&initcwndbps=528750&vprv=1&mime=video%2Fmp4&ns=9J_65NE8WtzAEMzCNW_J4xIF&ratebypass=yes&dur=9390.080&lmt=1612346561851943&mt=1612362785&fvip=1&c=WEB&txp=5311224&n=BU2FVuWHkHZVgLobQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgItmHHmACCCRKuWFmiN3RK5MkuUP6kYdHqhxZ8iMwj7gCICeGjDAkwnm1LErqaR1yvgcYpbKWWDO_8eRx9J_6QIgB&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANWObdSpM48FS5HFId741JGs4bre_sshCmW4q9N5MzmzAiEA3g2lsXTub9Pi04MG3Po9xkYJ3EbT4tRb9M6ZXHAAXDE%3D&title=PARTE%202%20-%20TER%C3%87A%20FEIRA%20-%2020h%20-%20CRIANDO%20O%20AMBIENTE%20NA%20NUVEM\",\n      \"data-ga-event\": \"send;event;result;click;101\",\n      children: [\"MP4 \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        class: \"subname\",\n        children: \"720\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getVideoInfo() {\n  const videoIdRegex = /^[\\w_-]+$/;\n  const videoId = \"jks4D01cF_k\";\n  const eurl = `https://youtube.googleapis.com/v/${videoId}`;\n\n  if (!videoIdRegex.test(videoId)) {\n    throw new Error(\"Invalid videoId.\");\n  }\n\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://www.youtube.com/get_video_info?video_id=${videoId}&el=embedded&eurl=${eurl}&sts=18333`, {\n    headers: {\n      Accept: \"application/json\"\n    }\n  });\n  console.log(\"aqui \", eurl);\n  response.headers[\"content-type\"];\n  const {\n    data\n  } = response; //   console.log(\"1....: \", qsToJson(data));\n  // const parsedResponse = response.data;\n  // const jsonResponse = JSON.parse(parsedResponse.player_response);\n\n  document.getElementById(\"json\").innerHTML = qsToJson(data); //   console.log('2....: ', JSON.stringify(data));\n  //   console.log(\"2....: \", qsToJson(data));\n\n  const stream = qsToJson(data);\n  const player_response = JSON.parse(stream.player_response);\n  console.log(\"-------- \", player_response.streamingData.formats[0]);\n  downloadURI(player_response.streamingData.formats[0].url, \"bla\"); // window.location.href = player_response.streamingData.formats[0].url;\n  // const { playabilityStatus, videoDetails, streamingData } = jsonResponse;\n  // const videoInfo = { playabilityStatus, videoDetails, streamingData };\n  // return videoInfo;\n\n  return \"\";\n}\n\nfunction downloadURI(uri, name) {\n  var link = document.createElement(\"a\");\n  link.download = name;\n  link.href = uri; // link.setAttribute('href', 'video/mp4' + encodeURIComponent(uri));\n  // 'video/mp4;+codecs=\"avc1.42001E,+mp4a.40.2\"'\n  // link.setAttribute('target', '_parent');\n\n  link.setAttribute(\"data-type\", \"mp4\");\n  document.body.appendChild(link);\n  link.click(); // document.body.removeChild(link);\n  // delete link;\n}\n\nfunction qsToJson(qs) {\n  var res = {};\n  var pars = qs.split(\"&\");\n  var kv, k, v;\n  var obj = {}; //   pars.map((e) => {\n  //     kv = e.split(\"=\");\n  //     k = kv[0];\n  //     v = kv[1];\n  //     console.log('res...:', res);\n  //     res[k] = decodeURIComponent(v);\n  //     console.log(\"res[k] \", res);\n  //   });\n\n  pars.map(e => {\n    kv = e.split(\"=\");\n    k = kv[0];\n    v = kv[1];\n\n    if (k === \"player_response\") {\n      res[k] = decodeURIComponent(v); // console.log('-------- ', JSON.parse(res[k]).streamingData)\n    }\n  }); //   console.log(\"-------- \", JSON.parse(res.player_response));\n\n  return res;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJnZXRWaWRlb0luZm8iLCJ2aWRlb0lkUmVnZXgiLCJ2aWRlb0lkIiwiZXVybCIsInRlc3QiLCJFcnJvciIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQWNjZXB0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicXNUb0pzb24iLCJzdHJlYW0iLCJwbGF5ZXJfcmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJzdHJlYW1pbmdEYXRhIiwiZm9ybWF0cyIsImRvd25sb2FkVVJJIiwidXJsIiwidXJpIiwibmFtZSIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJxcyIsInJlcyIsInBhcnMiLCJzcGxpdCIsImt2IiwiayIsInYiLCJvYmoiLCJtYXAiLCJlIiwiZGVjb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtDQUdBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFRLGFBQU8sRUFBRSxNQUFNQyxZQUFZLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFNLFFBQUUsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQ0MsV0FBSyxFQUFDLDBCQURQO0FBRUMsY0FBUSxFQUFDLGtFQUZW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QUcsRUFBVixDQUpvQixDQU1wQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBTCxNQUFJLENBQUNNLEdBQUwsQ0FBVUMsQ0FBRCxJQUFPO0FBQ2RMLE1BQUUsR0FBR0ssQ0FBQyxDQUFDTixLQUFGLENBQVEsR0FBUixDQUFMO0FBQ0FFLEtBQUMsR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FBTjtBQUNBRSxLQUFDLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQU47O0FBQ0EsUUFBSUMsQ0FBQyxLQUFLLGlCQUFWLEVBQTZCO0FBQzNCSixTQUFHLENBQUNJLENBQUQsQ0FBSCxHQUFTSyxrQkFBa0IsQ0FBQ0osQ0FBRCxDQUEzQixDQUQyQixDQUUzQjtBQUNEO0FBQ0YsR0FSRCxFQWZvQixDQXdCcEI7O0FBQ0EsU0FBT0wsR0FBUDtBQUNEOztBQUVjdEMsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gXCJ1cmxcIjtcblxuLy8gaW1wb3J0IFZpZGVvSW5mbyBmcm9tICcuL21vZGVscy9WaWRlb0luZm8nO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+SUQgZG8gVsOtZGVvPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidmlkZW9JZFwiPjwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldFZpZGVvSW5mbygpfT5JbmZvcm1hw6fDtWVzIGRvIHbDrWRlbzwvYnV0dG9uPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8c3BhbiBpZD1cImpzb25cIj48L3NwYW4+XG4gICAgICA8YVxuICAgICAgIHRpdGxlPVwiZm9ybWF0byBkZSB2w61kZW86IDcyMFwiXG4gICAgICAgZG93bmxvYWQ9XCJQQVJURSAyIC0gVEVSw4dBIEZFSVJBIC0gMjBoIC0gQ1JJQU5ETyBPIEFNQklFTlRFIE5BIE5VVkVNLm1wNFwiXG4gICAgICAgZGF0YS1xdWFsaXR5PVwiNzIwXCJcbiAgICAgICBkYXRhLXR5cGU9XCJtcDRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9yNy0tLXNuLThwOHYtYmcwbC5nb29nbGV2aWRlby5jb20vdmlkZW9wbGF5YmFjaz9leHBpcmU9MTYxMjM5MDkzMyZlaT10YzBhWUxMUElZeTB3QVRkd3EzZ0NBJmlwPTI4MDQlM0E0MzElM0FjN2ViJTNBNGU2NCUzQTlhYmQlM0FmMjIzJTNBNDI5NSUzQTU3N2QmaWQ9by1BTWd0Q1VVSENPZHNDcmhPUzBjWU5rRWo3LUxIUTI4dEl5Z1hBcWZiTjVYVCZpdGFnPTE4JnNvdXJjZT15b3V0dWJlJnJlcXVpcmVzc2w9eWVzJm1oPV8zJm1tPTMxJTJDMjkmbW49c24tOHA4di1iZzBsJTJDc24tYmcwZXpuN3kmbXM9YXUlMkNyZHUmbXY9bSZtdmk9NyZwY20yY21zPXllcyZwbD00NyZpbml0Y3duZGJwcz00ODc1MDAmdnBydj0xJm1pbWU9dmlkZW8lMkZtcDQmbnM9NzhvY1N3WlM4TEI2bVplZHdyX2N4R1VGJmdpcj15ZXMmY2xlbj0zMjE2NDM0MTcmcmF0ZWJ5cGFzcz15ZXMmZHVyPTkzOTAuMDU2JmxtdD0xNjEyMzQ0NjQ4NTc5NDkyJm10PTE2MTIzNjg3NzgmZnZpcD0xJmJlaWRzPTIzODg2MjEwJmM9V0VCJnR4cD01MzEwMjI0Jm49ZUp1bDhrMkttMW90VkFaUFpaSEptNCZzcGFyYW1zPWV4cGlyZSUyQ2VpJTJDaXAlMkNpZCUyQ2l0YWclMkNzb3VyY2UlMkNyZXF1aXJlc3NsJTJDdnBydiUyQ21pbWUlMkNucyUyQ2dpciUyQ2NsZW4lMkNyYXRlYnlwYXNzJTJDZHVyJTJDbG10JnNpZz1BT3EwUUo4d1JnSWhBT0hRU3FvMjhldXJBV1RBMHROVzNzaE5RMDViVkpRNEZ0UjJNeGw5N1V5Z0FpRUE4RzdOcmt3czBCaVhEUTktMFdLeWUyVnA2akdxTk84WVI2bTNRYWhVeURrJTNEJmxzcGFyYW1zPW1oJTJDbW0lMkNtbiUyQ21zJTJDbXYlMkNtdmklMkNwY20yY21zJTJDcGwlMkNpbml0Y3duZGJwcyZsc2lnPUFHM0NfeEF3UmdJaEFNYjhrWGVXWDdYSzktZ1JwcmtnSDYxOVR0VVQ1VUlSeUluT3NsT2dYSjZVQWlFQTAwVGQ3aUtPOTNBTG1FY2RWM0d0ZzRFX3lfMlVZWU40VjlTWHNvWUJzQUElM0QmYW1wO3RpdGxlPVBBUlRFJTIwMiUyMC0lMjBURVIlQzMlODdBJTIwRkVJUkElMjAtJTIwMjBoJTIwLSUyMENSSUFORE8lMjBPJTIwQU1CSUVOVEUlMjBOQSUyME5VVkVNXCJcbiAgICAgICAgICAgICAgICBkYXRhLWdhLWV2ZW50PVwic2VuZDtldmVudDtyZXN1bHQ7Y2xpY2s7MTAxXCJcbiAgICAgID5cbiAgICAgICAgRG93bmxvYWQgUmVjZWlwdFxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgdGl0bGU9XCJmb3JtYXRvIGRlIHbDrWRlbzogNzIwXCJcbiAgICAgICAgZG93bmxvYWQ9XCJQQVJURSAyIC0gVEVSw4dBIEZFSVJBIC0gMjBoIC0gQ1JJQU5ETyBPIEFNQklFTlRFIE5BIE5VVkVNLm1wNFwiXG4gICAgICAgIGRhdGEtcXVhbGl0eT1cIjcyMFwiXG4gICAgICAgIGRhdGEtdHlwZT1cIm1wNFwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL3I3LS0tc24tbjAyeGdveHVmdmczLTJnYmwuZ29vZ2xldmlkZW8uY29tL3ZpZGVvcGxheWJhY2s/ZXhwaXJlPTE2MTIzODQ2MDMmYW1wO2VpPS03UWFZTE9vSUpyajF3S2xtcVhBQXcmYW1wO2lwPTIxMi4xMDIuMzkuMTMxJmFtcDtpZD1vLUFJWjhscFVRYUdyc2JvbjZ5ZlJZeFZqZ2ZvYmFNR1lPTmk1ZDVjT1p4RlA4JmFtcDtpdGFnPTIyJmFtcDtzb3VyY2U9eW91dHViZSZhbXA7cmVxdWlyZXNzbD15ZXMmYW1wO21oPV8zJmFtcDttbT0zMSUyQzI5JmFtcDttbj1zbi1uMDJ4Z294dWZ2ZzMtMmdibCUyQ3NuLTJnYjdzbjdzJmFtcDttcz1hdSUyQ3JkdSZhbXA7bXY9bSZhbXA7bXZpPTcmYW1wO3BsPTI2JmFtcDtpbml0Y3duZGJwcz01Mjg3NTAmYW1wO3ZwcnY9MSZhbXA7bWltZT12aWRlbyUyRm1wNCZhbXA7bnM9OUpfNjVORThXdHpBRU16Q05XX0o0eElGJmFtcDtyYXRlYnlwYXNzPXllcyZhbXA7ZHVyPTkzOTAuMDgwJmFtcDtsbXQ9MTYxMjM0NjU2MTg1MTk0MyZhbXA7bXQ9MTYxMjM2Mjc4NSZhbXA7ZnZpcD0xJmFtcDtjPVdFQiZhbXA7dHhwPTUzMTEyMjQmYW1wO249QlUyRlZ1V0hrSFpWZ0xvYlEmYW1wO3NwYXJhbXM9ZXhwaXJlJTJDZWklMkNpcCUyQ2lkJTJDaXRhZyUyQ3NvdXJjZSUyQ3JlcXVpcmVzc2wlMkN2cHJ2JTJDbWltZSUyQ25zJTJDcmF0ZWJ5cGFzcyUyQ2R1ciUyQ2xtdCZhbXA7c2lnPUFPcTBRSjh3UkFJZ0l0bUhIbUFDQ0NSS3VXRm1pTjNSSzVNa3VVUDZrWWRIcWh4WjhpTXdqN2dDSUNlR2pEQWt3bm0xTEVycWFSMXl2Z2NZcGJLV1dET184ZVJ4OUpfNlFJZ0ImYW1wO2xzcGFyYW1zPW1oJTJDbW0lMkNtbiUyQ21zJTJDbXYlMkNtdmklMkNwbCUyQ2luaXRjd25kYnBzJmFtcDtsc2lnPUFHM0NfeEF3UmdJaEFOV09iZFNwTTQ4RlM1SEZJZDc0MUpHczRicmVfc3NoQ21XNHE5TjVNem16QWlFQTNnMmxzWFR1YjlQaTA0TUczUG85eGtZSjNFYlQ0dFJiOU02WlhIQUFYREUlM0QmYW1wO3RpdGxlPVBBUlRFJTIwMiUyMC0lMjBURVIlQzMlODdBJTIwRkVJUkElMjAtJTIwMjBoJTIwLSUyMENSSUFORE8lMjBPJTIwQU1CSUVOVEUlMjBOQSUyME5VVkVNXCJcbiAgICAgICAgZGF0YS1nYS1ldmVudD1cInNlbmQ7ZXZlbnQ7cmVzdWx0O2NsaWNrOzEwMVwiXG4gICAgICA+XG4gICAgICAgIE1QNCA8c3BhbiBjbGFzcz1cInN1Ym5hbWVcIj43MjA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFZpZGVvSW5mbygpIHtcbiAgY29uc3QgdmlkZW9JZFJlZ2V4ID0gL15bXFx3Xy1dKyQvO1xuICBjb25zdCB2aWRlb0lkID0gXCJqa3M0RDAxY0Zfa1wiO1xuICBjb25zdCBldXJsID0gYGh0dHBzOi8veW91dHViZS5nb29nbGVhcGlzLmNvbS92LyR7dmlkZW9JZH1gO1xuICBpZiAoIXZpZGVvSWRSZWdleC50ZXN0KHZpZGVvSWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2aWRlb0lkLlwiKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9nZXRfdmlkZW9faW5mbz92aWRlb19pZD0ke3ZpZGVvSWR9JmVsPWVtYmVkZGVkJmV1cmw9JHtldXJsfSZzdHM9MTgzMzNgLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH1cbiAgKTtcbiAgY29uc29sZS5sb2coXCJhcXVpIFwiLCBldXJsKTtcbiAgcmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiMS4uLi46IFwiLCBxc1RvSnNvbihkYXRhKSk7XG5cbiAgLy8gY29uc3QgcGFyc2VkUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xuICAvLyBjb25zdCBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHBhcnNlZFJlc3BvbnNlLnBsYXllcl9yZXNwb25zZSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc29uXCIpLmlubmVySFRNTCA9IHFzVG9Kc29uKGRhdGEpO1xuICAvLyAgIGNvbnNvbGUubG9nKCcyLi4uLjogJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiMi4uLi46IFwiLCBxc1RvSnNvbihkYXRhKSk7XG4gIGNvbnN0IHN0cmVhbSA9IHFzVG9Kc29uKGRhdGEpO1xuICBjb25zdCBwbGF5ZXJfcmVzcG9uc2UgPSBKU09OLnBhcnNlKHN0cmVhbS5wbGF5ZXJfcmVzcG9uc2UpO1xuXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0gXCIsIHBsYXllcl9yZXNwb25zZS5zdHJlYW1pbmdEYXRhLmZvcm1hdHNbMF0pO1xuICBkb3dubG9hZFVSSShwbGF5ZXJfcmVzcG9uc2Uuc3RyZWFtaW5nRGF0YS5mb3JtYXRzWzBdLnVybCwgXCJibGFcIik7XG4gIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGxheWVyX3Jlc3BvbnNlLnN0cmVhbWluZ0RhdGEuZm9ybWF0c1swXS51cmw7XG4gIC8vIGNvbnN0IHsgcGxheWFiaWxpdHlTdGF0dXMsIHZpZGVvRGV0YWlscywgc3RyZWFtaW5nRGF0YSB9ID0ganNvblJlc3BvbnNlO1xuICAvLyBjb25zdCB2aWRlb0luZm8gPSB7IHBsYXlhYmlsaXR5U3RhdHVzLCB2aWRlb0RldGFpbHMsIHN0cmVhbWluZ0RhdGEgfTtcblxuICAvLyByZXR1cm4gdmlkZW9JbmZvO1xuICByZXR1cm4gXCJcIjtcbn1cblxuZnVuY3Rpb24gZG93bmxvYWRVUkkodXJpLCBuYW1lKSB7XG4gIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICBsaW5rLmhyZWYgPSB1cmk7XG5cbiAgLy8gbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAndmlkZW8vbXA0JyArIGVuY29kZVVSSUNvbXBvbmVudCh1cmkpKTtcbiAgLy8gJ3ZpZGVvL21wNDsrY29kZWNzPVwiYXZjMS40MjAwMUUsK21wNGEuNDAuMlwiJ1xuICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19wYXJlbnQnKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgXCJtcDRcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gIGxpbmsuY2xpY2soKTtcbiAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgLy8gZGVsZXRlIGxpbms7XG59XG5cbmZ1bmN0aW9uIHFzVG9Kc29uKHFzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIHBhcnMgPSBxcy5zcGxpdChcIiZcIik7XG4gIHZhciBrdiwgaywgdjtcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIC8vICAgcGFycy5tYXAoKGUpID0+IHtcbiAgLy8gICAgIGt2ID0gZS5zcGxpdChcIj1cIik7XG4gIC8vICAgICBrID0ga3ZbMF07XG4gIC8vICAgICB2ID0ga3ZbMV07XG4gIC8vICAgICBjb25zb2xlLmxvZygncmVzLi4uOicsIHJlcyk7XG4gIC8vICAgICByZXNba10gPSBkZWNvZGVVUklDb21wb25lbnQodik7XG5cbiAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVzW2tdIFwiLCByZXMpO1xuICAvLyAgIH0pO1xuICBwYXJzLm1hcCgoZSkgPT4ge1xuICAgIGt2ID0gZS5zcGxpdChcIj1cIik7XG4gICAgayA9IGt2WzBdO1xuICAgIHYgPSBrdlsxXTtcbiAgICBpZiAoayA9PT0gXCJwbGF5ZXJfcmVzcG9uc2VcIikge1xuICAgICAgcmVzW2tdID0gZGVjb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tICcsIEpTT04ucGFyc2UocmVzW2tdKS5zdHJlYW1pbmdEYXRhKVxuICAgIH1cbiAgfSk7XG4gIC8vICAgY29uc29sZS5sb2coXCItLS0tLS0tLSBcIiwgSlNPTi5wYXJzZShyZXMucGxheWVyX3Jlc3BvbnNlKSk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ });