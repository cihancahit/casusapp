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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WjJS");
/* harmony import */ var next_dark_mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dark_mode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F1wk");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4JyM");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("slGX");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









function MyApp({
  Component,
  pageProps
}) {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(next_dark_mode__WEBPACK_IMPORTED_MODULE_3__["NextDarkModeContext"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_6__[/* initGA */ "a"])();
    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_6__[/* logPageView */ "c"])();

    const loadingStart = () => setLoading(true);

    const loadingStop = () => {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_6__[/* logPageView */ "c"])();
      setLoading(false);
    };

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeStart", loadingStart);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeComplete", loadingStop);
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off("routeChangeStart", loadingStart);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off("routeChangeComplete", loadingStop);
    };
  }, []);

  const onThemeToggle = () => darkModeActive ? switchToLightMode() : switchToDarkMode();

  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    onThemeToggle: onThemeToggle,
    darkModeActive: darkModeActive
  }, __jsx(Component, _extends({}, pageProps, {
    loading: loading,
    onThemeToggle: onThemeToggle
  })), darkModeActive && __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "364031621"
  }, ["body{background-color:#121212;color:white;-webkit-transition:background-color 0.2s linear;transition:background-color 0.2s linear;}", ".footer,.language-list{color:#ddd;}", "button:hover,button:active,button:focus{color:white;}", "button:active{background-color:#555;}", "button{background-color:#222;color:white;border-color:#aaa;-webkit-transition:background-color 0.2s linear;transition:background-color 0.2s linear;}", "input[type=\"text\"],select,.box,.lobby-player-list>.player-box{border-color:#aaa !important;background-color:#333 !important;color:white !important;}", ".game-countdown{color:#ddd;}", ".spyfall-back{-webkit-filter:invert(1);filter:invert(1);}", ".access-code,.access-code>span{color:#fff;}", ".box-striked{background-color:#333 !important;color:grey !important;}"]));
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (next_dark_mode__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_5__["appWithTranslation"])(MyApp)));

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

/***/ "A20A":
/***/ (function(module, exports) {



/***/ }),

/***/ "F1wk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/sanitize.css
var sanitize = __webpack_require__("lQf+");

// EXTERNAL MODULE: ./node_modules/skeleton-css/css/skeleton.css
var skeleton = __webpack_require__("OTSh");

// EXTERNAL MODULE: ./styles/styles.less
var styles = __webpack_require__("A20A");

// EXTERNAL MODULE: ./utils/i18n.js
var i18n = __webpack_require__("4JyM");

// EXTERNAL MODULE: ./public/static/locales/_all_languages.json
var _all_languages = __webpack_require__("qKf3");

// CONCATENATED MODULE: ./components/LanguageSelector.js
var __jsx = external_react_default.a.createElement;




const LanguageSelector = ({
  t
}) => {
  const {
    0: lang,
    1: setLang
  } = Object(external_react_["useState"])("en");

  const onLanguageChange = langCode => {
    setLang(langCode);
    i18n["i18n"].changeLanguage(langCode);
  };

  return __jsx("div", {
    dir: "ltr",
    className: "languages"
  }, __jsx("select", {
    className: "language-select",
    value: lang,
    onChange: e => onLanguageChange(e.target.value)
  }, Object.keys(_all_languages).map(code => __jsx("option", {
    key: code,
    value: code
  }, _all_languages[code]))), __jsx("ul", {
    className: "language-list"
  }, Object.keys(_all_languages).map(code => __jsx("li", {
    key: code
  }, __jsx("a", {
    className: "btn-set-language",
    href: "#",
    "data-language": "code",
    onClick: () => onLanguageChange(code)
  }, _all_languages[code])))));
};

/* harmony default export */ var components_LanguageSelector = (Object(i18n["withTranslation"])("common")(LanguageSelector));
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;


const Footer = () => Footer_jsx("div", {
  className: "footer"
}, "SpyGame by ", Footer_jsx("a", {
  href: "https://www.m3.com.tr/"
}, "M3WORKS"));

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Page.js
var Page_jsx = external_react_default.a.createElement;









const Page = ({
  children,
  onThemeToggle,
  darkModeActive,
  t
}) => {
  return Page_jsx(external_react_default.a.Fragment, null, Page_jsx(head_default.a, null, Page_jsx("meta", {
    charSet: "utf-8"
  }), Page_jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), Page_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1"
  }), Page_jsx("meta", {
    name: "description",
    content: "By M3WORKS"
  }), Page_jsx("meta", {
    name: "keywords",
    content: "spygame"
  }), Page_jsx("meta", {
    name: "google-site-verification",
    content: "RjPwvAWbCuLI-PVrf0kdrN4cMCwTcy7nx85lTXTZsao"
  }), Page_jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "SpyGame"
  }), Page_jsx("meta", {
    name: "application-name",
    content: "SpyGame"
  }), Page_jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), Page_jsx("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), Page_jsx("title", null, "SpyGame"), Page_jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }), Page_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), Page_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), Page_jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }), Page_jsx("link", {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#555555"
  })), Page_jsx("div", {
    dir: "ltr",
    className: "container dir-ltr lang-en"
  }, Page_jsx("div", {
    className: "main-content"
  }, children, Page_jsx("hr", null), Page_jsx("button", {
    className: "btn-small",
    onClick: onThemeToggle,
    style: {
      marginBottom: "1.5em"
    }
  }, darkModeActive ? "Light" : "Dark", " ", t("ui.mode")), Page_jsx(components_LanguageSelector, null), Page_jsx(components_Footer, null))));
};

/* harmony default export */ var components_Page = __webpack_exports__["a"] = (Object(i18n["withTranslation"])("common")(Page));

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "OTSh":
/***/ (function(module, exports) {



/***/ }),

/***/ "WjJS":
/***/ (function(module, exports) {

module.exports = require("next-dark-mode");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "lQf+":
/***/ (function(module, exports) {



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

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });