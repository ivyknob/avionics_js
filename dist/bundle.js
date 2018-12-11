/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avionics_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_websocket_js__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "html, body, svg {\n  width: 100%; height: 100%;\n}\nsvg {\n  display: block;\n}\nbody {\n  margin: 0;\n}\n.airspeed-value {\n  font-size: 40px;\n  letter-spacing: 5px;\n}\n.altitude-value {\n  font-size:30px;\n  letter-spacing: 3px;\n}\n\n#ground_speed_value {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #c748a2;\n  text-anchor: end;\n}\n\n#selected_altitude_value {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #47cfe0;\n  text-anchor: end;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _prints_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


global.Avionics = {
  _rollValue: 0,
  _pitchValue: 0,
  _airspeed: 0,
  _altitube: 0,
  _currentHeading: 360,
  airspeedElem: airspeed_value,
  altitudeElem: altitude_value,
  rotor: rotor,
  horizont: horizont,
  pitchElem: pitch,
  roll_triangle: roll_triangle,
  horizontTransform: function() {
    if (this.pitch > 90) {
      return this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseInt(720 - this.pitch * 4)})`);
    } else if (this.pitch < -90) {
      return this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseInt(-720 - this.pitch * 4)})`);
    } else {
      return this.horizont.setAttribute("transform", `rotate(${this.roll}) translate(0 ${parseInt(this.pitch * 4)})`);
    }
  },
  _pad: function(number, n) {
    var arr;
    arr = number.toString().split("");
    return (new Array(n - arr.length)).fill('0').concat(arr).join("");
  }
};

Object.defineProperty(Avionics, 'airspeed', {
  set: function(value) {
    this._airspeed = value;
    return this.airspeedElem.textContent = this._pad(value, 3);
  }
});

Object.defineProperty(Avionics, 'altitude', {
  set: function(value) {
    this._altitude = value;
    return this.altitudeElem.textContent = this._pad(value, 5);
  }
});

Object.defineProperty(Avionics, 'roll', {
  set: function(value) {
    this._rollValue = parseInt(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute("transform", `translate(0 ${this._pitchValue * 8})`);
    return this.roll_triangle.setAttribute("transform", `rotate(${this._rollValue})`);
  },
  get: function() {
    return this._rollValue;
  }
});

Object.defineProperty(Avionics, 'pitch', {
  set: function(value) {
    this._pitchValue = parseInt(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    return this.pitchElem.setAttribute("transform", `translate(0 ${this._pitchValue * 8})`);
  },
  get: function() {
    return this._pitchValue;
  }
});

Object.defineProperty(Avionics, 'currentHeading', {
  set: function(value) {
    var delta;
    this._currentHeading = value === 0 ? 360 : value;
    heading_current_value.textContent = this._pad(this._currentHeading, 3);
    delta = this._currentHeading > 180 ? (360 - this._currentHeading) * 10 : -this._currentHeading * 10;
    return heading_scale.setAttribute("transform", `translate(${delta},22.5)`);
  }
});

Object.defineProperty(Avionics, 'groundSpeed', {
  set: function(value) {
    return ground_speed_value.textContent = value;
  }
});

Object.defineProperty(Avionics, 'selectedAltitude', {
  set: function(value) {
    return selected_altitude_value.textContent = value;
  }
});

document.onkeydown = (e) => {
  var new_pitch, new_roll;
  switch (e.keyCode) {
    case 37:
      new_roll = Avionics.roll - 2;
      if (new_roll < -180) {
        return Avionics.roll = new_roll + 360;
      } else {
        return Avionics.roll -= 2;
      }
      break;
    case 39:
      new_roll = Avionics.roll + 2;
      if (new_roll > 180) {
        return Avionics.roll = new_roll - 360;
      } else {
        return Avionics.roll += 2;
      }
      break;
    case 38:
      new_pitch = Avionics.pitch + 1;
      if (new_pitch > 180) {
        return Avionics.pitch = new_pitch - 360;
      } else if (new_pitch < -180) {
        return Avionics.pitch = new_pitch + 360;
      } else {
        return Avionics.pitch = new_pitch;
      }
      break;
    case 40:
      new_pitch = Avionics.pitch - 1;
      if (new_pitch < -180) {
        return Avionics.pitch = new_pitch + 360;
      } else if (new_pitch > 180) {
        return Avionics.pitch = new_pitch - 360;
      } else {
        return Avionics.pitch = new_pitch;
      }
  }
};

Object(_prints_coffee__WEBPACK_IMPORTED_MODULE_0__["printPitch"])();

Object(_prints_coffee__WEBPACK_IMPORTED_MODULE_0__["printHeading"])();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printPitch", function() { return printPitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printHeading", function() { return printHeading; });
var printHeading, printPitch;

printPitch = function() {
  var i, large, medium, results, small, textLeft, textRight, texts, use;
  large = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  large.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#large-pitch');
  medium = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  medium.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#medium-pitch');
  small = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  small.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#small-pitch');
  textLeft = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  textLeft.style.fill = 'white';
  textLeft.style.fontWeight = 'bold';
  textLeft.setAttribute('dy', 5);
  textRight = textLeft.cloneNode();
  textLeft.setAttribute('text-anchor', 'end');
  textLeft.setAttribute('x', -45);
  textRight.setAttribute('x', 45);
  i = -220;
  results = [];
  while (i <= 220) {
    if (i === 0) {
      i += 2.5;
      continue;
    } else if (i % 10 === 0) {
      use = large.cloneNode();
      texts = [textLeft.cloneNode(), textRight.cloneNode()];
      texts.forEach(function(text) {
        var value;
        value = Math.abs(i);
        text.textContent = value > 180 ? 360 - value : value;
        text.setAttribute('y', -i * 8);
        pitch.appendChild(text);
      });
    } else if (i % 5 === 0) {
      use = medium.cloneNode();
    } else if (i % 2.5 === 0) {
      use = small.cloneNode();
    }
    use.setAttribute('y', i * 8);
    pitch.appendChild(use);
    results.push(i += 2.5);
  }
  return results;
};

printHeading = function() {
  var clone, cloneText, i, large_marker, marker, results, text;
  marker = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_marker');
  large_marker = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  large_marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_large_marker');
  text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  text.style.fill = '#fff';
  text.style.fontSize = '16px';
  text.style.fontWeight = 'bold';
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('y', -10);
  i = -180;
  results = [];
  while (i <= 180) {
    if (i % 10 === 0) {
      clone = large_marker.cloneNode();
      cloneText = text.cloneNode();
      cloneText.setAttribute('x', i * 10);
      cloneText.textContent = i <= 0 ? 360 + i : i;
      heading_scale.appendChild(cloneText);
    } else if (i % 5 === 0) {
      clone = large_marker.cloneNode();
      cloneText = text.cloneNode();
    } else {
      clone = marker.cloneNode();
    }
    clone.setAttribute('x', i * 10);
    heading_scale.appendChild(clone);
    results.push(i += 1);
  }
  return results;
};




/***/ }),
/* 9 */
/***/ (function(module, exports) {

var websocket = new WebSocket('ws://'+location.hostname+'/');

websocket.onopen = function(evt) {
  console.log('WebSocket connection opened');
}

websocket.onmessage = function(evt) {
  console.log(evt.data);
  const data = JSON.parse(evt.data);
  Avionics.roll = data.roll;
  Avionics.pitch = data.pitch;
}

websocket.onclose = function(evt) {
  console.log('Websocket connection closed');
}

websocket.onerror = function(evt) {
  console.log('Websocket error: ' + evt);
}


/***/ })
/******/ ]);