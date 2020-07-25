module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VX+f");


/***/ }),

/***/ "18nn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const BuyMe = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1372401867"
}, [".bmc-button.jsx-1372401867 .taco.jsx-1372401867{margin-bottom:1px !important;box-shadow:none !important;border:none !important;vertical-align:middle !important;font-size:1.5em;line-height:1em;}", ".bmc-button.jsx-1372401867{padding:7px 10px 7px 10px !important;-webkit-text-decoration:none !important;text-decoration:none !important;display:-webkit-inline-box !important;display:-webkit-inline-flex !important;display:-ms-inline-flexbox !important;display:inline-flex !important;color:#ffffff !important;background-color:#ff813f !important;border-radius:5px !important;border:1px solid transparent !important;padding:7px 10px 7px 10px !important;box-shadow:0px 1px 2px rgba(190,190,190,0.5) !important;-webkit-box-shadow:0px 1px 2px 2px rgba(190,190,190,0.5) !important;margin:0.5em 0.3em 0;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;-o-transition:0.3s all linear !important;-webkit-transition:0.3s all linear !important;-moz-transition:0.3s all linear !important;-ms-transition:0.3s all linear !important;-webkit-transition:0.3s all linear !important;transition:0.3s all linear !important;width:99%;font-size:0.85em;}", ".bmc-button.jsx-1372401867:hover,.bmc-button.jsx-1372401867:active,.bmc-button.jsx-1372401867:focus{-webkit-box-shadow:0px 1px 2px 2px rgba(190,190,190,0.5) !important;-webkit-text-decoration:none !important;text-decoration:none !important;box-shadow:0px 1px 2px 2px rgba(190,190,190,0.5) !important;opacity:0.85 !important;color:#ffffff !important;}"]), __jsx("a", {
  target: "_blank",
  href: "https://www.buymeacoffee.com/tannerkrewson",
  rel: "noopener noreferrer",
  className: "jsx-1372401867" + " " + "bmc-button"
}, __jsx("span", {
  src: "https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",
  alt: "Buy me a taco",
  className: "jsx-1372401867" + " " + "taco"
}, "\uD83C\uDF2E"), __jsx("span", {
  style: {
    marginLeft: "15px",
    fontWeight: "bold"
  },
  className: "jsx-1372401867"
}, "Buy me a taco")));

/* unused harmony default export */ var _unused_webpack_default_export = (BuyMe);

/***/ }),

/***/ "4JyM":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

const allLanguages = __webpack_require__("qKf3");

const allLangCodes = Object.keys(allLanguages);
module.exports = new NextI18Next({
  otherLanguages: allLangCodes,
  localeStructure: "{{lng}}.i18n",
  strictMode: false
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "CBiN":
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "VFWX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Loading = () => __jsx("div", {
  style: {
    marginTop: "3em"
  }
}, "Loading...");

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "VX+f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__("CBiN");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// EXTERNAL MODULE: ./utils/i18n.js
var utils_i18n = __webpack_require__("4JyM");

// CONCATENATED MODULE: ./components/NameEntry.js
var __jsx = external_react_default.a.createElement;




const NameEntry = ({
  t,
  onNameEntry,
  gameCode,
  socket
}) => {
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])(""); // if dev game, pick random name and submit

  Object(external_react_["useEffect"])(() => {
    if (gameCode === "ffff") {
      const randFourDig = Math.floor(1000 + Math.random() * 9000);
      onNameEntry(String(randFourDig));
    }
  }, []);

  const handleNameChange = ({
    target: {
      value
    }
  }) => setName(value);

  const handleJoin = e => {
    if (e) e.preventDefault();
    onNameEntry(name);
  };

  const handleBack = e => {
    e.preventDefault(); //prevents a redirect back to /[gameCode]

    socket.off("disconnect");
    router_default.a.push("/");
  };

  const onEnter = e => {
    if (e.key !== "Enter") return;
    handleJoin();
  };

  return __jsx("div", {
    className: "main-menu"
  }, __jsx("h3", null, t("ui.waiting for players")), __jsx("hr", null), __jsx("div", null, __jsx("label", {
    htmlFor: "player-name"
  }, t("ui.enter your name")), __jsx("input", {
    type: "text",
    id: "player-name",
    placeholder: "Use your real name!",
    value: name,
    onChange: handleNameChange,
    autoFocus: true,
    onKeyDown: onEnter,
    maxLength: 24
  }), __jsx("div", {
    className: "button-container"
  }, __jsx("button", {
    className: "btn-leave",
    onClick: handleBack
  }, t("ui.back")), __jsx("button", {
    type: "submit",
    onClick: handleJoin
  }, t("ui.join")))));
};

/* harmony default export */ var components_NameEntry = (Object(utils_i18n["withTranslation"])("common")(NameEntry));
// EXTERNAL MODULE: ./utils/analytics.js
var analytics = __webpack_require__("slGX");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Settings.js

var Settings_jsx = external_react_default.a.createElement;


const Settings = ({
  gameState,
  socket
}) => {
  const {
    settings,
    AVAILABLE_LOCATION_PACKS
  } = gameState;
  const {
    timeLimit: serverMinutes,
    locationPack: serverPackId,
    includeAllSpy: serverIncludeAllSpy
  } = settings;
  return Settings_jsx("div", null, Settings_jsx(TimeLimit, {
    onSetMinutes: minutes => socket.emit("setTimeLimit", minutes),
    serverMinutes: serverMinutes
  }), Settings_jsx("br", null), Settings_jsx(LocationPack, {
    onSetLocationPack: packId => socket.emit("setLocationPack", packId),
    serverPackId: serverPackId,
    locationPackList: AVAILABLE_LOCATION_PACKS
  }), Settings_jsx(IncludeAllSpy, {
    onSetIncludeAllSpy: includeAllSpy => socket.emit("setIncludeAllSpy", includeAllSpy),
    serverIncludeAllSpy: serverIncludeAllSpy
  }));
};

const TimeLimit = ({
  onSetMinutes,
  serverMinutes
}) => {
  const minLength = 0;
  const maxLength = 60;
  const {
    0: minutes,
    1: setMinutes
  } = Object(external_react_["useState"])(serverMinutes);

  const handleChange = change => () => {
    const newMinutes = minutes + change;

    if (newMinutes >= minLength && newMinutes <= maxLength) {
      setMinutes(newMinutes);
      onSetMinutes(newMinutes);
    }
  };

  Object(external_react_["useEffect"])(() => {
    setMinutes(serverMinutes);
  }, [serverMinutes]);
  return Settings_jsx("div", null, Settings_jsx("label", null, "Time Limit:"), Settings_jsx("div", {
    style: {
      margin: "-.5em 0 -1em"
    },
    className: "jsx-4245920973"
  }, Settings_jsx("button", {
    onClick: handleChange(-1),
    disabled: minutes <= minLength,
    className: "jsx-4245920973" + " " + "btn-small"
  }, "-"), Settings_jsx("span", {
    className: "jsx-4245920973"
  }, minutes, " minute", minutes !== 1 ? "s" : ""), Settings_jsx("button", {
    onClick: handleChange(1),
    disabled: minutes >= maxLength,
    className: "jsx-4245920973" + " " + "btn-small"
  }, "+"), Settings_jsx(style_default.a, {
    id: "4245920973"
  }, ["button.jsx-4245920973{margin:1em,0;font-size:1.5em;}"])));
};

const LocationPack = ({
  onSetLocationPack,
  locationPackList,
  serverPackId
}) => {
  const {
    0: selectedPackId,
    1: setSelectedPackId
  } = Object(external_react_["useState"])(serverPackId);

  const handleChange = newPackId => {
    setSelectedPackId(newPackId);
    onSetLocationPack(newPackId);
  };

  Object(external_react_["useEffect"])(() => {
    setSelectedPackId(serverPackId);
  }, [serverPackId]);
  return Settings_jsx("div", null, Settings_jsx("label", {
    htmlFor: "location-pack"
  }, "Location Pack:"), Settings_jsx("select", {
    className: "u-full-width",
    id: "location-pack",
    value: selectedPackId,
    onChange: ({
      target: {
        value
      }
    }) => handleChange(value),
    style: {
      maxWidth: "10em"
    }
  }, locationPackList.map(({
    id,
    name
  }) => Settings_jsx("option", {
    key: id,
    value: id
  }, name))));
};

const IncludeAllSpy = ({
  onSetIncludeAllSpy,
  serverIncludeAllSpy
}) => {
  const {
    0: includeAllSpy,
    1: setIncludeAllSpy
  } = Object(external_react_["useState"])(serverIncludeAllSpy);

  const handleChange = checked => {
    setIncludeAllSpy(checked);
    onSetIncludeAllSpy(checked);
  };

  Object(external_react_["useEffect"])(() => {
    setIncludeAllSpy(serverIncludeAllSpy);
  }, [serverIncludeAllSpy]);
  return Settings_jsx("label", null, Settings_jsx("input", {
    type: "checkbox",
    onChange: ({
      target: {
        checked
      }
    }) => handleChange(checked),
    checked: includeAllSpy
  }), Settings_jsx("span", {
    className: "label-body"
  }, "Enable ~2% chance all players are spies"));
};

/* harmony default export */ var components_Settings = (Settings);
// EXTERNAL MODULE: ./components/BuyMe.js
var BuyMe = __webpack_require__("18nn");

// CONCATENATED MODULE: ./components/ThanksForPlaying.js


var ThanksForPlaying_jsx = external_react_default.a.createElement;


const ThanksForPlaying = () => ThanksForPlaying_jsx(external_react_default.a.Fragment, null, ThanksForPlaying_jsx("div", {
  className: "jsx-1973102956" + " " + "card"
}, ThanksForPlaying_jsx("div", {
  className: "jsx-1973102956" + " " + "text"
}, "Thanks for playing SpyGame!")), ThanksForPlaying_jsx(style_default.a, {
  id: "1973102956"
}, [".card.jsx-1973102956{margin:2em auto 0;border:2px solid #ddd;padding:1em;max-width:18em;font-size:0.9em;}", ".text.jsx-1973102956{font-size:0.9em;}", "button.jsx-1973102956{margin:0.8em 0 1.1em;}"]));

/* harmony default export */ var components_ThanksForPlaying = (ThanksForPlaying);
// CONCATENATED MODULE: ./components/AccessCode.js

var AccessCode_jsx = external_react_default.a.createElement;


const AccessCode = ({
  t,
  code
}) => AccessCode_jsx(external_react_default.a.Fragment, null, AccessCode_jsx("div", {
  className: "access-code"
}, t("ui.access code"), ": ", AccessCode_jsx("span", null, code)), AccessCode_jsx("style", null, `
            .access-code {
                margin: .8em;
            }
            .access-code > span {
                font-family: monospace;
                box-shadow: 0 0 10pt 1pt #d3d3d3;
                padding: .4em;
            }
        `));

/* harmony default export */ var components_AccessCode = (Object(utils_i18n["withTranslation"])("common")(AccessCode));
// CONCATENATED MODULE: ./components/HideableContainer.js
var HideableContainer_jsx = external_react_default.a.createElement;



const HideableContainer = ({
  t,
  children,
  initialHidden,
  title
}) => {
  console.log("initialHidden", initialHidden);
  const {
    0: showContent,
    1: setShowContent
  } = Object(external_react_["useState"])(!initialHidden);
  return HideableContainer_jsx(external_react_default.a.Fragment, null, HideableContainer_jsx("div", {
    className: "status-container"
  }, HideableContainer_jsx("button", {
    className: "btn-toggle-status btn-toggle-status-left",
    onClick: () => setShowContent(!showContent)
  }, title), HideableContainer_jsx("button", {
    className: "btn-toggle-status btn-toggle-status-right",
    onClick: () => setShowContent(!showContent)
  }, t("ui.show hide")), showContent && children), HideableContainer_jsx("style", null, `
                .status-container {
                    border-top: 1px solid #e1e1e1;
                    border-bottom: 1px solid #e1e1e1;
                    position: relative;
                    min-height: 14px;
                    margin-bottom: 1em;
                }
                
                .status-container-content {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                .btn-toggle-status-left {
                    left: -10px;
                }

                .btn-toggle-status-right {
                    right: -10px;
                }
                
                .btn-toggle-status {
                    position: absolute;
                    top: -5px;
                    padding: 2px 10px;
                    line-height: 1em;
                    height: 16px;
                    border: none;
                    font-size: 10px;
                    text-transform: none;
                    color: #999;
                }
            `));
};

/* harmony default export */ var components_HideableContainer = (Object(utils_i18n["withTranslation"])("common")(HideableContainer));
// CONCATENATED MODULE: ./components/Lobby.js

var Lobby_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Lobby = ({
  t,
  gameState,
  socket
}) => {
  const playerList = gameState.players.map(player => _objectSpread({}, player, {
    isMe: player.name === gameState.me.name
  }));

  const handleStartGame = () => {
    socket.emit("startGame");
    Object(analytics["b" /* logEvent */])("lobby-numberOfPlayers", gameState.players.length);
    Object(analytics["b" /* logEvent */])("lobby-locationPack", gameState.settings.locationPack);
    Object(analytics["b" /* logEvent */])("lobby-timeLimit", gameState.settings.timeLimit);
  };

  return Lobby_jsx(external_react_default.a.Fragment, null, Lobby_jsx("h4", null, t("ui.waiting for players")), Lobby_jsx(components_AccessCode, {
    code: gameState.code
  }), Lobby_jsx("hr", null), Lobby_jsx("ol", {
    className: "lobby-player-list"
  }, playerList.map((player, i) => Lobby_jsx("li", {
    key: i,
    className: "player-box"
  }, player.name, !player.name && Lobby_jsx("i", null, "Joining..."), player.isMe && Lobby_jsx("a", {
    href: "#",
    className: "btn-edit-player",
    "data-player-id": "{{ _id }}",
    onClick: () => socket.emit("clearName")
  }, "Edit name"), !player.isMe && Lobby_jsx("a", {
    href: "#",
    className: "btn-remove-player",
    "data-player-id": "{{ _id }}",
    onClick: () => socket.emit("removePlayer", player.name)
  }, "Remove player")))), Lobby_jsx("br", null), Lobby_jsx(components_HideableContainer, {
    title: "Game Settings",
    initialHidden: true
  }, Lobby_jsx(components_Settings, {
    gameState: gameState,
    socket: socket
  })), Lobby_jsx("div", {
    className: "button-container"
  }, Lobby_jsx("button", {
    className: "btn-start",
    onClick: handleStartGame,
    disabled: gameState.status !== "lobby-ready"
  }, t("ui.start game")), Lobby_jsx("button", {
    className: "btn-leave",
    onClick: () => {
      //prevents a redirect back to /[gameCode]
      socket.off("disconnect");
      router_default.a.push("/");
    }
  }, t("ui.leave game"))), gameState.currentRoundNum > 1 && Lobby_jsx(components_ThanksForPlaying, null));
};

/* harmony default export */ var components_Lobby = (Object(utils_i18n["withTranslation"])("common")(Lobby));
// CONCATENATED MODULE: ./components/StrikeableBox.js
var StrikeableBox_jsx = external_react_default.a.createElement;


const StrikeableBox = ({
  children
}) => {
  const {
    0: striked,
    1: setStriked
  } = Object(external_react_["useState"])(false);
  return StrikeableBox_jsx("li", null, StrikeableBox_jsx("div", {
    className: "box" + (striked ? "-striked" : ""),
    onClick: () => setStriked(!striked)
  }, children));
};

/* harmony default export */ var components_StrikeableBox = (StrikeableBox);
// CONCATENATED MODULE: ./components/InGame.js
var InGame_jsx = external_react_default.a.createElement;









const InGame = ({
  t,
  i18n,
  gameState,
  socket
}) => {
  const {
    me,
    location,
    locationList,
    players,
    timeLeft: latestServerTimeLeft,
    timePaused,
    settings
  } = gameState;
  const {
    0: timeLeft,
    1: setTimeLeft
  } = Object(external_react_["useState"])(latestServerTimeLeft);
  Object(external_react_["useEffect"])(() => {
    Object(analytics["b" /* logEvent */])("player-roundCount", gameState.currentRoundNum + 1);
    Object(analytics["b" /* logEvent */])("player-language", i18n.language);
  }, []);
  Object(external_react_["useEffect"])(() => {
    let interval = null;

    if (!timePaused) {
      interval = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(interval);
          setTimeLeft(0);

          if (gameState.players[0].name === me.name) {
            Object(analytics["b" /* logEvent */])("timerExpired", true);
          }

          return;
        }

        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timePaused && timeLeft !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timePaused, timeLeft]);
  Object(external_react_["useEffect"])(() => setTimeLeft(latestServerTimeLeft), [latestServerTimeLeft]);
  const isSpy = me.role === "spy";
  const firstPlayer = players.find(player => player.isFirst);
  const timeExpired = timeLeft <= 0;
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = (timeLeft % 60 + "").padStart(2, "0");
  const showTapToPause = !timePaused && timeLeft > 0;

  const handleTogglePause = () => {
    if (timeExpired) return;
    socket.emit("togglePause");
    Object(analytics["b" /* logEvent */])("togglePause", true);
  };

  return InGame_jsx("div", {
    name: "gameView",
    style: {
      userSelect: "none"
    }
  }, settings.timeLimit !== 0 && InGame_jsx("div", {
    style: {
      marginBottom: "1em"
    },
    onClick: handleTogglePause
  }, InGame_jsx("h4", {
    className: "game-countdown " + (timeExpired ? "finished " : " ") + (timePaused ? "paused" : ""),
    style: {
      marginBottom: "0.25em"
    }
  }, minutesLeft, ":", secondsLeft), InGame_jsx("div", null, timePaused && InGame_jsx("div", {
    className: "red-text"
  }, "Game paused"), showTapToPause && InGame_jsx("div", {
    className: "subtitle"
  }, "Tap to pause"))), InGame_jsx(components_AccessCode, {
    code: gameState.code
  }), InGame_jsx(components_HideableContainer, {
    title: "Your Role",
    initialHidden: false
  }, InGame_jsx("div", {
    className: "status-container-content"
  }, isSpy && InGame_jsx("div", {
    className: "player-status player-status-spy"
  }, t("ui.you are the spy")), !isSpy && InGame_jsx(external_react_default.a.Fragment, null, InGame_jsx("div", {
    className: "player-status player-status-not-spy",
    dangerouslySetInnerHTML: {
      __html: t("ui.you are not the spy")
    }
  }), InGame_jsx("div", {
    className: "current-location"
  }, InGame_jsx("div", {
    className: "current-location-header"
  }, t("ui.the location"), ":", " "), InGame_jsx("div", {
    className: "current-location-name"
  }, t(location.name))), InGame_jsx("div", {
    className: "current-role"
  }, InGame_jsx("div", {
    className: "current-role-header"
  }, t("ui.your role"), ": "), InGame_jsx("div", {
    className: "current-role-name"
  }, t(me.role)))))), me.isFirst && InGame_jsx("div", {
    className: "red-text"
  }, "You will ask the first question."), !me.isFirst && InGame_jsx("div", null, "The first question will be asked by ", firstPlayer.name, "."), InGame_jsx("h5", null, t("ui.players")), InGame_jsx("ul", {
    className: "ingame-player-list"
  }, players.map((player, i) => InGame_jsx(components_StrikeableBox, {
    key: i
  }, player.name && player.name, !player.name && InGame_jsx("i", null, "Joining..."), player.isFirst && InGame_jsx("div", {
    className: "first-player-indicator",
    dangerouslySetInnerHTML: {
      __html: t("ui.first")
    }
  }), !player.connected && InGame_jsx("i", null, " (Disconnected)")))), InGame_jsx("div", {
    className: "u-cf"
  }), InGame_jsx("h5", null, t("ui.location reference")), InGame_jsx("ul", {
    className: "location-list"
  }, locationList.map((name, i) => InGame_jsx(components_StrikeableBox, {
    key: i
  }, t(name)))), InGame_jsx("div", {
    className: "button-container"
  }, InGame_jsx("button", {
    className: "btn-end",
    onClick: () => popup(t("ui.end game"), t("ui.back"), () => socket.emit("endGame"))
  }, t("ui.end game")), InGame_jsx("button", {
    className: "btn-leave",
    onClick: () => popup(t("ui.leave game"), t("ui.back"), () => {
      //prevents a redirect back to /[gameCode]
      socket.off("disconnect");
      router_default.a.push("/");
    })
  }, t("ui.leave game"))));
};

const popup = (yesText, noText, onYes) => external_sweetalert2_default.a.fire({
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: yesText,
  cancelButtonText: noText
}).then(result => {
  if (result.value) {
    onYes();
  }
});

/* harmony default export */ var components_InGame = (Object(utils_i18n["withTranslation"])("common")(InGame));
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__("VFWX");

// EXTERNAL MODULE: ./utils/misc.js
var misc = __webpack_require__("in9h");

// CONCATENATED MODULE: ./pages/[gameCode].js
var _gameCode_jsx = external_react_default.a.createElement;











const _gameCode_socket = external_socket_io_client_default()();

const Game = ({
  t,
  loading
}) => {
  const router = Object(router_["useRouter"])();
  const {
    gameCode
  } = router.query;
  const {
    0: gameState,
    1: setGameState
  } = Object(external_react_["useState"])({
    status: "loading"
  });
  Object(external_react_["useEffect"])(() => {
    const {
      previousGameCode,
      previousName
    } = Object(external_nookies_["parseCookies"])();

    if (previousGameCode === gameCode && previousName) {
      _gameCode_socket.emit("joinGame", {
        gameCode,
        previousName
      });
    } else {
      _gameCode_socket.emit("joinGame", {
        gameCode
      });
    }

    _gameCode_socket.on("gameChange", newGameState => {
      setGameState(newGameState); // setting disconnect handler after game has been joined,
      // or else it will cause an infinite loop with the invalid handler

      if (gameCode !== "ffff") {
        _gameCode_socket.on("disconnect", () => router.push("/" + gameCode));
      }
    });
    _gameCode_socket.on("invalid", () => router.push("/join?invalid=" + gameCode));
    _gameCode_socket.on("badName", () => external_sweetalert2_default.a.fire("Name already in use"));
    _gameCode_socket.on("lockedWarning", minutes => external_sweetalert2_default.a.fire(Object(misc["a" /* lockedMessage */])(minutes)).then(() => router.push("/")));
    return function cleanup() {
      _gameCode_socket.close();
      setGameState({
        status: "loading"
      });
    };
  }, []);

  const onNameEntry = name => {
    _gameCode_socket.emit("name", name);
    Object(external_nookies_["setCookie"])(null, "previousGameCode", gameCode);
    Object(external_nookies_["setCookie"])(null, "previousName", name);
  };

  const {
    status,
    me
  } = gameState;
  const showLoading = status === "loading" || loading;
  const showNameEntry = !showLoading && !me.name;
  const showLobby = !showNameEntry && status.startsWith("lobby");
  const showGame = !showNameEntry && status === "ingame";
  return _gameCode_jsx(external_react_default.a.Fragment, null, showLoading && _gameCode_jsx(external_react_default.a.Fragment, null, _gameCode_jsx("h3", null, t("ui.waiting for players")), _gameCode_jsx(Loading["a" /* default */], null)), !showLoading && _gameCode_jsx(external_react_default.a.Fragment, null, showNameEntry && _gameCode_jsx(components_NameEntry, {
    onNameEntry: onNameEntry,
    gameCode: gameState.code,
    socket: _gameCode_socket
  }), showLobby && _gameCode_jsx(components_Lobby, {
    gameState: gameState,
    socket: _gameCode_socket
  }), showGame && _gameCode_jsx(components_InGame, {
    gameState: gameState,
    socket: _gameCode_socket
  })));
};

/* harmony default export */ var _gameCode_ = __webpack_exports__["default"] = (Object(utils_i18n["withTranslation"])("common")(Game));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "in9h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lockedMessage; });
const lockedMessage = minutes => ({
  icon: "error",
  title: "Oopsie woopsie",
  text: "The Spyfall server is pending an update, and will be restarted " + getTimeLeft(minutes) + ". Try again then!",
  footer: "If you're the techy type, check the update status " + '<a href="https://github.com/tannerkrewson/spyfall/actions" ' + 'target="_blank" rel="noopener noreferrer">here</a>.'
});

const getTimeLeft = minutes => {
  if (minutes <= 0) return "momentarily";
  return "in " + minutes + " minute" + (parseInt(minutes) !== 1 ? "s" : "");
};

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "qKf3":
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":\"English\",\"tr\":\"Türkçe\"}");

/***/ }),

/***/ "slGX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logEvent; });
/* unused harmony export logException */
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lJcc");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-82444397-11");
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = "", action = "") => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action: String(action)
    });
  }
};
const logException = (description = "", fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ })

/******/ });