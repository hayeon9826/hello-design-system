import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as C$1 from 'react';
import C__default, { useMemo, useState, useRef, useEffect, useLayoutEffect, forwardRef, Fragment as Fragment$1, isValidElement, cloneElement, createElement, createContext, useContext, useReducer, createRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

var _a$1;
var ButtonType;
(function (ButtonType) {
    ButtonType["PRIMARY_LARGE"] = "PRIMARY_LARGE";
    ButtonType["PRIMARY_SMALL"] = "PRIMARY_SMALL";
    ButtonType["PRIMARY_LARGE_OUTLINE"] = "PRIMARY_LARGE_OUTLINE";
    ButtonType["PRIMARY_SMALL_OUTLINE"] = "PRIMARY_SMALL_OUTLINE";
    ButtonType["PRIMARY_LARGE_ROUNDED"] = "PRIMARY_LARGE_ROUNDED";
    ButtonType["PRIMARY_SMALL_ROUNDED"] = "PRIMARY_SMALL_ROUNDED";
    ButtonType["BLACK_LARGE"] = "BLACK_LARGE";
    ButtonType["BLACK_LARGE_OUTLINE"] = "BLACK_LARGE_OUTLINE";
    ButtonType["BLACK_SMALL_ROUNDED"] = "BLACK_SMALL_ROUNDED";
    ButtonType["GRAY_LARGE"] = "GRAY_LARGE";
})(ButtonType || (ButtonType = {}));
var ButtonVariable = {
    Large: "w-full py-2.5",
    Small: "py-2 px-3 text-sm",
    Rounded: "rounded-full",
    RoundedMd: "rounded-md",
    Primay: "bg-rose-500 hover:bg-rose-600 text-white disabled:bg-gray-300",
    PrimaryOutline: "bg-white border-rose-500 border hover:bg-rose-500/5 text-rose-500 disabled:bg-gray-300",
    Black: "bg-black hover:bg-black/60 text-white disabled:bg-gray-300",
    BlackOutline: "bg-white border border-black hover:bg-black/5 text-black disabled:bg-gray-300",
    Gray: "bg-gray-400 hover:bg-gray-500 text-white disabled:bg-gray-200",
};
var ButtonTypeStyle = (_a$1 = {},
    _a$1[ButtonType.PRIMARY_LARGE] = cn(ButtonVariable.Primay, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a$1[ButtonType.PRIMARY_SMALL] = cn(ButtonVariable.Primay, ButtonVariable.Small, ButtonVariable.RoundedMd),
    _a$1[ButtonType.PRIMARY_LARGE_OUTLINE] = cn(ButtonVariable.PrimaryOutline, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a$1[ButtonType.PRIMARY_SMALL_OUTLINE] = cn(ButtonVariable.PrimaryOutline, ButtonVariable.Small, ButtonVariable.RoundedMd),
    _a$1[ButtonType.PRIMARY_LARGE_ROUNDED] = cn(ButtonVariable.Primay, ButtonVariable.Large, ButtonVariable.Rounded),
    _a$1[ButtonType.PRIMARY_SMALL_ROUNDED] = cn(ButtonVariable.Primay, ButtonVariable.Small, ButtonVariable.Rounded),
    _a$1[ButtonType.BLACK_LARGE] = cn(ButtonVariable.Black, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a$1[ButtonType.BLACK_LARGE_OUTLINE] = cn(ButtonVariable.BlackOutline, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a$1[ButtonType.BLACK_SMALL_ROUNDED] = cn(ButtonVariable.Black, ButtonVariable.Small, ButtonVariable.Rounded),
    _a$1[ButtonType.GRAY_LARGE] = cn(ButtonVariable.Gray, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a$1);

var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? ButtonType.PRIMARY_LARGE : _c, label = _a.label, className = _a.className, disabled = _a.disabled, props = __rest(_a, ["primary", "type", "label", "className", "disabled"]);
    var ButtonStyle = useMemo(function () {
        if (primary) {
            return ButtonTypeStyle.PRIMARY_LARGE;
        }
        if (type) {
            return ButtonTypeStyle[type];
        }
        return "";
    }, [type, primary, ButtonTypeStyle]);
    return (jsx("button", __assign({ type: "button", disabled: disabled, className: cn(ButtonStyle, className) }, props, { children: label })));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = C__default.createContext && /*#__PURE__*/C__default.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/C__default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/C__default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/C__default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/C__default.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/C__default.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaAngleLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},"child":[]}]})(props);
}function FaAngleRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},"child":[]}]})(props);
}

function Carousel(_a) {
    var className = _a.className, imageUrls = _a.imageUrls, _b = _a.showArrows, showArrows = _b === void 0 ? false : _b, _c = _a.autoplay, autoplay = _c === void 0 ? false : _c, _d = _a.autoplayInterval, autoplayInterval = _d === void 0 ? 3000 : _d;
    var _e = useState(0), currentIndex = _e[0], setCurrentIndex = _e[1];
    var autoplayRef = useRef(null);
    // 다음 슬라이드로 이동
    var nextSlide = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex + 1) % imageUrls.length; });
    };
    // 이전 슬라이드로 이동
    var prevSlide = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex - 1 + imageUrls.length) % imageUrls.length; });
    };
    // 자동 재생 시작
    var startAutoplay = function () {
        if (autoplay) {
            autoplayRef.current = setInterval(nextSlide, autoplayInterval);
        }
    };
    // 자동 재생 정지
    var stopAutoplay = function () {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
    };
    useEffect(function () {
        startAutoplay();
        return function () { return stopAutoplay(); };
    }, [autoplay, autoplayInterval]);
    return (jsxs("div", { id: "default-carousel", className: cn("relative w-full", className), "data-carousel": "slide", children: [jsx("div", { className: "relative overflow-hidden rounded-lg h-56 md:h-96", children: jsx("div", { className: "flex transition-transform duration-700 ease-in-out", style: { transform: "translateX(-".concat(currentIndex * 100, "%)") }, children: imageUrls.map(function (url, index) { return (jsx("div", { className: "flex-shrink-0 w-full h-full flex items-center justify-center" // 수직 및 수평 중앙 정렬
                        , children: jsx("img", { src: url, className: "block max-h-full max-w-full h-auto w-auto object-cover object-center" // 이미지 중앙 정렬 및 크기 제한
                            , style: { objectPosition: "center" }, alt: "Slide ".concat(index) }) }, index)); }) }) }), jsx("div", { className: "absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse", children: imageUrls.map(function (_, index) { return (jsx("button", { type: "button", className: "w-2 h-2 rounded-full ".concat(index === currentIndex ? "bg-rose-500" : "bg-gray-400"), "aria-current": index === currentIndex, "aria-label": "Slide ".concat(index + 1), onClick: function () { return setCurrentIndex(index); } }, index)); }) }), showArrows && (jsxs(Fragment, { children: [jsx("button", { type: "button", className: "absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none", onClick: prevSlide, children: jsxs("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none", children: [jsx(FaAngleLeft, { className: "w-4 h-4 text-white" }), jsx("span", { className: "sr-only", children: "Previous" })] }) }), jsx("button", { type: "button", className: "absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none", onClick: nextSlide, children: jsxs("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none", children: [jsx(FaAngleRight, { className: "w-4 h-4 text-white" }), jsx("span", { className: "sr-only", children: "Next" })] }) })] }))] }));
}

function TextInput(_a) {
    var label = _a.label, message = _a.message, _b = _a.type, type = _b === void 0 ? "default" : _b, props = __rest(_a, ["label", "message", "type"]);
    return (jsxs("div", { children: [!!label && (jsx("label", { htmlFor: "price", className: "block text-sm font-medium leading-6 text-gray-900", children: label })), jsx("div", { className: "relative mt-2 rounded-md", children: jsx("input", __assign({}, props, { className: cn("block w-full text-sm rounded-md border py-1.5 px-2.5 text-gray-900 outline-none placeholder:text-gray-400 placeholder:text-sm  focus:border-rose-300 sm:text-sm sm:leading-6", {
                        "border-rose-500": type === "error",
                    }) })) }), message && (jsx("div", { className: cn("mt-2 text-xs text-gray-500", {
                    "!text-green-600": type === "success",
                }, {
                    "!text-rose-700": type === "error",
                }), children: message }))] }));
}

var _a;
var TextType;
(function (TextType) {
    TextType["TITLE_LARGE"] = "TITLE_LARGE";
    TextType["TITLE"] = "TITLE";
    TextType["SUBTITLE"] = "SUBTITLE";
    TextType["DESC"] = "DESC";
    TextType["GRAY_DESC"] = "GRAY_DESC";
    TextType["PRIMARY_DESC"] = "PRIMARY_DESC";
    TextType["SMALL"] = "SMALL";
    TextType["GRAY_SMALL"] = "GRAY_SMALL";
    TextType["PRIMARY_SMALL"] = "PRIMARY_SMALL";
})(TextType || (TextType = {}));
var TextTypeStyle = (_a = {},
    _a[TextType.TITLE_LARGE] = "text-2xl md:text-3xl font-semibold",
    _a[TextType.TITLE] = "text-xl md:text-2xl font-semibold",
    _a[TextType.SUBTITLE] = "text-lg font-semibold md:text-xl",
    _a[TextType.DESC] = "text-sm md:text-base",
    _a[TextType.GRAY_DESC] = "text-sm md:text-base text-gray-500",
    _a[TextType.PRIMARY_DESC] = "text-sm md:text-base text-rose-500",
    _a[TextType.SMALL] = "text-xs",
    _a[TextType.GRAY_SMALL] = "text-xs text-gray-500",
    _a[TextType.PRIMARY_SMALL] = "text-xs text-rose-500",
    _a);

var Text = function (_a) {
    var _b = _a.type, type = _b === void 0 ? TextType.DESC : _b, label = _a.label, className = _a.className;
    var TextClassName = useMemo(function () {
        if (type) {
            return TextTypeStyle[type];
        }
        return "";
    }, [type]);
    return jsx("div", { className: cn(TextClassName, className), children: label });
};

function GridLayout(_a) {
    var children = _a.children;
    return (jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 mt-16 max-w-7xl mx-auto px-4", children: children }));
}
function Loader(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b;
    return (jsx("div", { className: "flex gap-3 justify-center mt-10 ".concat(className), children: __spreadArray([], Array(count), true).map(function (e, i) { return (jsx("div", { className: "w-1 h-1 animate-ping rounded-full bg-gray-600" }, i)); }) }));
}
function GridLoader(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 12 : _b;
    return (jsx(GridLayout, { children: __spreadArray([], Array(count), true).map(function (e, i) { return (jsx("div", { className: "rounded-md w-full h-80 md:h-56 object-fit bg-gray-200 animate-pulse ".concat(className) }, i)); }) }));
}
function ListLoader(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 8 : _b;
    return (jsx("div", { className: "grid grid-cols-1 gap-4 ".concat(className), children: __spreadArray([], Array(count), true).map(function (e, i) { return (jsx("div", { className: "rounded-md w-full h-20 md:h-16 object-fit bg-gray-200 animate-pulse" }, i)); }) }));
}
function FullPageLoader() {
    return (jsx("div", { className: "fixed w-full top-0 inset-x-0 h-screen flex flex-col justify-center bg-black/60 z-50", children: jsx("div", { className: "animate-spin w-10 h-10 text-rose-400 rounded-full border-[4px] m-auto border-t-transparent border-current" }) }));
}
function ColorLoader(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b;
    return (jsx("div", { className: "min-h-screen flex flex-col justify-center z-50", children: jsx("div", { className: "flex gap-5 items-center justify-center ".concat(className), children: __spreadArray([], Array(count), true).map(function (e, i) { return (jsx("div", { className: "w-2 h-2 animate-ping rounded-full bg-rose-600" }, i)); }) }) }));
}

var i$3=Object.defineProperty;var d$5=(t,e,n)=>e in t?i$3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r$3=(t,e,n)=>(d$5(t,typeof e!="symbol"?e+"":e,n),n);let o$5 = class o{constructor(){r$3(this,"current",this.detect());r$3(this,"handoffState","pending");r$3(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$8=new o$5;

let l$5=(e,f)=>{s$8.isServer?useEffect(e,f):useLayoutEffect(e,f);};

function s$7(e){let r=useRef(e);return l$5(()=>{r.current=e;},[e]),r}

let o$4=function(t){let e=s$7(t);return C__default.useCallback((...r)=>e.current(...r),[e])};

function t$6(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

function o$3(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return t$6(()=>{t.current&&e[0]();}),r.add(()=>{t.current=!1;})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a});})},group(e){let t=o$3();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s();}},dispose(){for(let e of n.splice(0))e();}};return r}

function p$3(){let[e]=useState(o$3);return useEffect(()=>()=>e.dispose(),[e]),e}

function s$6(){let r=typeof document=="undefined";return "useSyncExternalStore"in C$1?(o=>o.useSyncExternalStore)(C$1)(()=>()=>{},()=>!1,()=>!r):!1}function l$4(){let r=s$6(),[e,n]=C$1.useState(s$8.isHandoffComplete);return e&&s$8.isHandoffComplete===!1&&n(!1),C$1.useEffect(()=>{e!==!0&&n(!0);},[e]),C$1.useEffect(()=>s$8.handoff(),[]),r?!1:e}

var o$2;let I$5=(o$2=C__default.useId)!=null?o$2:function(){let n=l$4(),[e,u]=C__default.useState(n?()=>s$8.nextId():null);return l$5(()=>{e===null&&u(s$8.nextId());},[e]),e!=null?""+e:void 0};

function u$5(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$5),t}

function o$1(r){return s$8.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

let c$4=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M$2=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M$2||{}),N$2=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N$2||{}),F$2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F$2||{});function f$4(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$4)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var T$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T$1||{});function h$2(e,r=0){var t;return e===((t=o$1(e))==null?void 0:t.body)?!1:u$5(r,{[0](){return e.matches(c$4)},[1](){let l=e;for(;l!==null;){if(l.matches(c$4))return !0;l=l.parentElement;}return !1}})}var w$1=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w$1||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},!0));function y$3(e){e==null||e.focus({preventScroll:!0});}let S$5=["textarea","input"].join(",");function H(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,S$5))!=null?t:!1}function I$4(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O$1(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I$4(e):e:f$4(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else {if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E;}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}

function t$5(){return /iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i$2(){return /Android/gi.test(window.navigator.userAgent)}function n$3(){return t$5()||i$2()}

function d$4(e,r,n){let o=s$7(r);useEffect(()=>{function t(u){o.current(u);}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n]);}

function s$5(e,r,n){let o=s$7(r);useEffect(()=>{function t(i){o.current(i);}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n]);}

function y$2(s,m,a=!0){let i=useRef(!1);useEffect(()=>{requestAnimationFrame(()=>{i.current=a;});},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return !h$2(t,T$1.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=useRef(null);d$4("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},!0),d$4("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},!0),d$4("click",e=>{n$3()||o.current&&(c(e,()=>o.current),o.current=null);},!0),d$4("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),!0),s$5("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

function n$2(...e){return useMemo(()=>o$1(...e),[...e])}

let u$4=Symbol();function T(t,n=!0){return Object.assign(t,{[u$4]:n})}function y$1(...t){let n=useRef(t);useEffect(()=>{n.current=t;},[t]);let c=o$4(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$4]))?void 0:c}

function m$2(u,t){let e=useRef([]),r=o$4(u);useEffect(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t]);}

function t$4(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

var O=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(O||{}),v$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(v$1||{});function C({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=!0,name:f,mergeRefs:l}){l=l!=null?l:k;let s=R(t,r);if(a)return m$1(s,e,n,f,l);let y=o!=null?o:0;if(y&2){let{static:u=!1,...d}=s;if(u)return m$1(d,e,n,f,l)}if(y&1){let{unmount:u=!0,...d}=s;return u$5(u?0:1,{[0](){return null},[1](){return m$1({...d,hidden:!0,style:{display:"none"}},e,n,f,l)}})}return m$1(s,e,n,f,l)}function m$1(r,t={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F$1(r,["unmount","static"]),y=r.ref!==void 0?{[l]:r.ref}:{},u=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let i=!1,c=[];for(let[T,p]of Object.entries(t))typeof p=="boolean"&&(i=!0),p===!0&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "));}if(a===Fragment$1&&Object.keys(x$1(s)).length>0){if(!isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let i=u.props,c=typeof(i==null?void 0:i.className)=="function"?(...p)=>t$4(i==null?void 0:i.className(...p),s.className):t$4(i==null?void 0:i.className,s.className),T=c?{className:c}:{};return cloneElement(u,Object.assign({},R(u.props,x$1(F$1(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return createElement(a,Object.assign({},F$1(s,["ref"]),a!==Fragment$1&&y,a!==Fragment$1&&d),u)}function k(...r){return r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}function R(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&typeof o[a]=="function"?((e[a])!=null||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f);}}});return t}function U$2(r){var t;return Object.assign(forwardRef(r),{displayName:(t=r.displayName)!=null?t:r.name})}function x$1(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function F$1(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}

let p$2="div";var s$4=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s$4||{});function l$3(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":(t&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,hidden:(t&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return C({ourProps:r,theirProps:e,slot:{},defaultTag:p$2,name:"Hidden"})}let u$3=U$2(l$3);

let n$1=createContext(null);n$1.displayName="OpenClosedContext";var d$3=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d$3||{});function u$2(){return useContext(n$1)}function s$3({value:o,children:r}){return C__default.createElement(n$1.Provider,{value:o},r)}

function t$3(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e));}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e());}

let t$2=[];t$3(()=>{function e(n){n.target instanceof HTMLElement&&n.target!==document.body&&t$2[0]!==n.target&&(t$2.unshift(n.target),t$2=t$2.filter(r=>r!=null&&r.isConnected),t$2.splice(10));}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0});});

function r$2(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i$1(l)?!1:t}function i$1(n){if(!n)return !1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return !1;e=e.previousElementSibling;}return !0}

var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});

function E(n,e,a,t){let i=s$7(a);useEffect(()=>{n=n!=null?n:window;function r(o){i.current(o);}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t]);}

function f$3(){let e=useRef(!1);return l$5(()=>(e.current=!0,()=>{e.current=!1;}),[]),e}

function c$3(t){let r=o$4(t),e=useRef(!1);useEffect(()=>(e.current=!1,()=>{e.current=!0,t$6(()=>{e.current&&r();});}),[r]);}

var s$2=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s$2||{});function n(){let e=useRef(0);return s$5("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0);},!0),e}

function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let n=new Set;for(let e of t.current)e.current instanceof HTMLElement&&n.add(e.current);return n}let X="div";var _$1=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(_$1||{});function z(t,n$1){let e=useRef(null),o=y$1(e,n$1),{initialFocus:l,containers:c,features:r=30,...s}=t;l$4()||(r=1);let i=n$2(e);Y({ownerDocument:i},Boolean(r&16));let u=Z({ownerDocument:i,container:e,initialFocus:l},Boolean(r&2));$({ownerDocument:i,container:e,containers:c,previousActiveElement:u},Boolean(r&8));let y=n(),R=o$4(a=>{let m=e.current;if(!m)return;(B=>B())(()=>{u$5(y.current,{[s$2.Forwards]:()=>{O$1(m,M$2.First,{skipElements:[a.relatedTarget]});},[s$2.Backwards]:()=>{O$1(m,M$2.Last,{skipElements:[a.relatedTarget]});}});});}),h=p$3(),H=useRef(!1),j={ref:o,onKeyDown(a){a.key=="Tab"&&(H.current=!0,h.requestAnimationFrame(()=>{H.current=!1;}));},onBlur(a){let m=P(c);e.current instanceof HTMLElement&&m.add(e.current);let T=a.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(S$4(m,T)||(H.current?O$1(e.current,u$5(y.current,{[s$2.Forwards]:()=>M$2.Next,[s$2.Backwards]:()=>M$2.Previous})|M$2.WrapAround,{relativeTo:a.target}):a.target instanceof HTMLElement&&y$3(a.target)));}};return C__default.createElement(C__default.Fragment,null,Boolean(r&4)&&C__default.createElement(u$3,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:s$4.Focusable}),C({ourProps:j,theirProps:s,defaultTag:X,name:"FocusTrap"}),Boolean(r&4)&&C__default.createElement(u$3,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:s$4.Focusable}))}let D$2=U$2(z),de=Object.assign(D$2,{features:_$1});function Q(t=!0){let n=useRef(t$2.slice());return m$2(([e],[o])=>{o===!0&&e===!1&&t$6(()=>{n.current.splice(0);}),o===!1&&e===!0&&(n.current=t$2.slice());},[t,t$2,n]),o$4(()=>{var e;return (e=n.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Y({ownerDocument:t},n){let e=Q(n);m$2(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&y$3(e());},[n]),c$3(()=>{n&&y$3(e());});}function Z({ownerDocument:t,container:n,initialFocus:e},o){let l=useRef(null),c=f$3();return m$2(()=>{if(!o)return;let r=n.current;r&&t$6(()=>{if(!c.current)return;let s=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===s){l.current=s;return}}else if(r.contains(s)){l.current=s;return}e!=null&&e.current?y$3(e.current):O$1(r,M$2.First)===N$2.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=t==null?void 0:t.activeElement;});},[o]),l}function $({ownerDocument:t,container:n,containers:e,previousActiveElement:o},l){let c=f$3();E(t==null?void 0:t.defaultView,"focus",r=>{if(!l||!c.current)return;let s=P(e);n.current instanceof HTMLElement&&s.add(n.current);let i=o.current;if(!i)return;let u=r.target;u&&u instanceof HTMLElement?S$4(s,u)?(o.current=u,y$3(u)):(r.preventDefault(),r.stopPropagation(),y$3(i)):y$3(o.current);},!0);}function S$4(t,n){for(let e of t)if(e.contains(n))return !0;return !1}

let e=createContext(!1);function a$4(){return useContext(e)}function l$2(o){return C__default.createElement(e.Provider,{value:o.force},o.children)}

function F(p){let n=a$4(),l=useContext(_),e=n$2(p),[a,o]=useState(()=>{if(!n&&l!==null||s$8.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return useEffect(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a));},[a,e]),useEffect(()=>{n||l!==null&&o(l.current);},[l,o,n]),a}let U$1=Fragment$1;function N$1(p,n){let l=p,e=useRef(null),a=y$1(T(u=>{e.current=u;}),n),o=n$2(e),t=F(e),[r]=useState(()=>{var u;return s$8.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=useContext(f$2),v=l$4();return l$5(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r));},[t,r]),l$5(()=>{if(r&&i)return i.register(r)},[i,r]),c$3(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)));}),v?!t||!r?null:createPortal(C({ourProps:{ref:a},theirProps:l,defaultTag:U$1,name:"Portal"}),r):null}let S$3=Fragment$1,_=createContext(null);function j(p,n){let{target:l,...e}=p,o={ref:y$1(n)};return C__default.createElement(_.Provider,{value:l},C({ourProps:o,theirProps:e,defaultTag:S$3,name:"Popover.Group"}))}let f$2=createContext(null);function ee(){let p=useContext(f$2),n=useRef([]),l=o$4(o=>(n.current.push(o),p&&p.register(o),()=>e(o))),e=o$4(o=>{let t=n.current.indexOf(o);t!==-1&&n.current.splice(t,1),p&&p.unregister(o);}),a=useMemo(()=>({register:l,unregister:e,portals:n}),[l,e,n]);return [n,useMemo(()=>function({children:t}){return C__default.createElement(f$2.Provider,{value:a},t)},[a])]}let D$1=U$2(N$1),I$3=U$2(j),te=Object.assign(D$1,{Group:I$3});

function i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const d$2=typeof Object.is=="function"?Object.is:i,{useState:u$1,useEffect:h$1,useLayoutEffect:f$1,useDebugValue:p$1}=C$1;function y(e,t,c){const a=t(),[{inst:n},o]=u$1({inst:{value:a,getSnapshot:t}});return f$1(()=>{n.value=a,n.getSnapshot=t,r$1(n)&&o({inst:n});},[e,a,t]),h$1(()=>(r$1(n)&&o({inst:n}),e(()=>{r$1(n)&&o({inst:n});})),[e]),p$1(a),a}function r$1(e){const t=e.getSnapshot,c=e.value;try{const a=t();return !d$2(c,a)}catch{return !0}}

function t$1(r,e,n){return e()}

const r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",s$1=!r,c$2=s$1?t$1:y,a$3="useSyncExternalStore"in C$1?(n=>n.useSyncExternalStore)(C$1):c$2;

function S$2(t){return a$3(t.subscribe,t.getSnapshot,t.getSnapshot)}

function a$2(o,r){let t=o(),n=new Set;return {getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()));}}}

function c$1(){let o;return {before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth;},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`);}}}

function d$1(){return t$5()?{before({doc:r,d:l,meta:c}){function o(a){return c.containers.flatMap(n=>n()).some(n=>n.contains(a))}l.microTask(()=>{var s;if(window.getComputedStyle(r.documentElement).scrollBehavior!=="auto"){let t=o$3();t.style(r.documentElement,"scrollBehavior","auto"),l.add(()=>l.microTask(()=>t.dispose()));}let a=(s=window.scrollY)!=null?s:window.pageYOffset,n=null;l.addEventListener(r,"click",t=>{if(t.target instanceof HTMLElement)try{let e=t.target.closest("a");if(!e)return;let{hash:f}=new URL(e.href),i=r.querySelector(f);i&&!o(i)&&(n=i);}catch{}},!0),l.addEventListener(r,"touchstart",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&o(e.parentElement);)e=e.parentElement;l.style(e,"overscrollBehavior","contain");}else l.style(t.target,"touchAction","none");}),l.addEventListener(r,"touchmove",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault();}else t.preventDefault();},{passive:!1}),l.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null);});});}}:{}}

function l$1(){return {before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden");}}}

function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a$1=a$2(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:o$3(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[d$1(),c$1(),l$1()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o));},SCROLL_ALLOW({d:e}){e.dispose();},TEARDOWN({doc:e}){this.delete(e);}});a$1.subscribe(()=>{let e=a$1.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a$1.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a$1.dispatch("TEARDOWN",t);}});

function p(e,r,n){let f=S$2(a$1),o=e?f.get(e):void 0,i=o?o.count>0:!1;return l$5(()=>{if(!(!e||!r))return a$1.dispatch("PUSH",e,n),()=>a$1.dispatch("POP",e,n)},[r,e]),i}

let u=new Map,t=new Map;function b$3(r,l=!0){l$5(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=t.get(e))!=null?d:1;if(i===1?t.delete(e):t.set(e,i-1),i!==1)return;let n=u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,u.delete(e));}let f=(o=t.get(e))!=null?o:0;return t.set(e,f+1),f!==0||(u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l]);}

function N({defaultContainers:o=[],portals:r,mainTreeNodeRef:u}={}){var f;let t=useRef((f=u==null?void 0:u.current)!=null?f:null),l=n$2(t),c=o$4(()=>{var i,s,a;let n=[];for(let e of o)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(r!=null&&r.current)for(let e of r.current)n.push(e);for(let e of (i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||e.contains((a=(s=t.current)==null?void 0:s.getRootNode())==null?void 0:a.host)||n.some(L=>e.contains(L))||n.push(e));return n});return {resolveContainers:c,contains:o$4(n=>c().some(i=>i.contains(n))),mainTreeNodeRef:t,MainTreeNode:useMemo(()=>function(){return u!=null?null:C__default.createElement(u$3,{features:s$4.Hidden,ref:t})},[t,u])}}

let a=createContext(()=>{});a.displayName="StackContext";var s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s||{});function x(){return useContext(a)}function b$2({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=o$4((...t)=>{r==null||r(...t),l(...t);});return l$5(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n);}},[o,e,n,u]),C__default.createElement(a.Provider,{value:o},i)}

let d=createContext(null);function f(){let r=useContext(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function w(){let[r,t]=useState([]);return [r.length>0?r.join(" "):void 0,useMemo(()=>function(e){let i=o$4(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=useMemo(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return C__default.createElement(d.Provider,{value:n},e.children)},[t])]}let I$2="p";function S$1(r,t){let a=I$5(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=y$1(t);l$5(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return C({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:I$2,name:n.name||"Description"})}let h=U$2(S$1),G=Object.assign(h,{});

var Me=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(Me||{}),we=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(we||{});let He$1={[0](o,e){return o.titleId===e.id?o:{...o,titleId:e.id}}},I$1=createContext(null);I$1.displayName="DialogContext";function b$1(o){let e=useContext(I$1);if(e===null){let r=new Error(`<${o} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b$1),r}return e}function Be(o,e,r=()=>[document.body]){p(o,e,i=>{var n;return {containers:[...(n=i.containers)!=null?n:[],r]}});}function Ge(o,e){return u$5(e.type,He$1,o,e)}let Ne$1="div",Ue=O.RenderStrategy|O.Static;function We(o$1,e){let r=I$5(),{id:i=`headlessui-dialog-${r}`,open:n,onClose:l,initialFocus:s$1,role:a="dialog",__demoMode:T=!1,...m}=o$1,[M,f]=useState(0),U=useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(U.current||(U.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let E$1=u$2();n===void 0&&E$1!==null&&(n=(E$1&d$3.Open)===d$3.Open);let D=useRef(null),ee$1=y$1(D,e),g=n$2(D),W=o$1.hasOwnProperty("open")||E$1!==null,$=o$1.hasOwnProperty("onClose");if(!W&&!$)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!W)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!$)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let p=n?0:1,[h,te$1]=useReducer(Ge,{titleId:null,descriptionId:null,panelRef:createRef()}),P=o$4(()=>l(!1)),Y=o$4(t=>te$1({type:0,id:t})),S=l$4()?T?!1:p===0:!1,x=M>1,j=useContext(I$1)!==null,[oe,re]=ee(),ne={get current(){var t;return (t=h.panelRef.current)!=null?t:D.current}},{resolveContainers:w$1,mainTreeNodeRef:L,MainTreeNode:le}=N({portals:oe,defaultContainers:[ne]}),ae=x?"parent":"leaf",J=E$1!==null?(E$1&d$3.Closing)===d$3.Closing:!1,ie=(()=>j||J?!1:S)(),se=useCallback(()=>{var t,c;return (c=Array.from((t=g==null?void 0:g.querySelectorAll("body > *"))!=null?t:[]).find(d=>d.id==="headlessui-portal-root"?!1:d.contains(L.current)&&d instanceof HTMLElement))!=null?c:null},[L]);b$3(se,ie);let pe=(()=>x?!0:S)(),de$1=useCallback(()=>{var t,c;return (c=Array.from((t=g==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?t:[]).find(d=>d.contains(L.current)&&d instanceof HTMLElement))!=null?c:null},[L]);b$3(de$1,pe);let ue=(()=>!(!S||x))();y$2(w$1,t=>{t.preventDefault(),P();},ue);let fe=(()=>!(x||p!==0))();E(g==null?void 0:g.defaultView,"keydown",t=>{fe&&(t.defaultPrevented||t.key===o.Escape&&(t.preventDefault(),t.stopPropagation(),P()));});let ge=(()=>!(J||p!==0||j))();Be(g,ge,w$1),useEffect(()=>{if(p!==0||!D.current)return;let t=new ResizeObserver(c=>{for(let d of c){let F=d.target.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&P();}});return t.observe(D.current),()=>t.disconnect()},[p,D,P]);let[Te,ce]=w(),De=useMemo(()=>[{dialogState:p,close:P,setTitleId:Y},h],[p,h,P,Y]),X=useMemo(()=>({open:p===0}),[p]),me={ref:ee$1,id:i,role:a,"aria-modal":p===0?!0:void 0,"aria-labelledby":h.titleId,"aria-describedby":Te};return C__default.createElement(b$2,{type:"Dialog",enabled:p===0,element:D,onUpdate:o$4((t,c)=>{c==="Dialog"&&u$5(t,{[s.Add]:()=>f(d=>d+1),[s.Remove]:()=>f(d=>d-1)});})},C__default.createElement(l$2,{force:!0},C__default.createElement(te,null,C__default.createElement(I$1.Provider,{value:De},C__default.createElement(te.Group,{target:D},C__default.createElement(l$2,{force:!1},C__default.createElement(ce,{slot:X,name:"Dialog.Description"},C__default.createElement(de,{initialFocus:s$1,containers:w$1,features:S?u$5(ae,{parent:de.features.RestoreFocus,leaf:de.features.All&~de.features.FocusLock}):de.features.None},C__default.createElement(re,null,C({ourProps:me,theirProps:m,slot:X,defaultTag:Ne$1,features:Ue,visible:p===0,name:"Dialog"}))))))))),C__default.createElement(le,null))}let $e="div";function Ye(o,e){let r=I$5(),{id:i=`headlessui-dialog-overlay-${r}`,...n}=o,[{dialogState:l,close:s}]=b$1("Dialog.Overlay"),a=y$1(e),T=o$4(f=>{if(f.target===f.currentTarget){if(r$2(f.currentTarget))return f.preventDefault();f.preventDefault(),f.stopPropagation(),s();}}),m=useMemo(()=>({open:l===0}),[l]);return C({ourProps:{ref:a,id:i,"aria-hidden":!0,onClick:T},theirProps:n,slot:m,defaultTag:$e,name:"Dialog.Overlay"})}let je="div";function Je(o,e){let r=I$5(),{id:i=`headlessui-dialog-backdrop-${r}`,...n}=o,[{dialogState:l},s]=b$1("Dialog.Backdrop"),a=y$1(e);useEffect(()=>{if(s.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let T=useMemo(()=>({open:l===0}),[l]);return C__default.createElement(l$2,{force:!0},C__default.createElement(te,null,C({ourProps:{ref:a,id:i,"aria-hidden":!0},theirProps:n,slot:T,defaultTag:je,name:"Dialog.Backdrop"})))}let Xe="div";function Ke(o,e){let r=I$5(),{id:i=`headlessui-dialog-panel-${r}`,...n}=o,[{dialogState:l},s]=b$1("Dialog.Panel"),a=y$1(e,s.panelRef),T=useMemo(()=>({open:l===0}),[l]),m=o$4(f=>{f.stopPropagation();});return C({ourProps:{ref:a,id:i,onClick:m},theirProps:n,slot:T,defaultTag:Xe,name:"Dialog.Panel"})}let Ve="h2";function qe$1(o,e){let r=I$5(),{id:i=`headlessui-dialog-title-${r}`,...n}=o,[{dialogState:l,setTitleId:s}]=b$1("Dialog.Title"),a=y$1(e);useEffect(()=>(s(i),()=>s(null)),[i,s]);let T=useMemo(()=>({open:l===0}),[l]);return C({ourProps:{ref:a,id:i},theirProps:n,slot:T,defaultTag:Ve,name:"Dialog.Title"})}let ze=U$2(We),Qe=U$2(Je),Ze=U$2(Ke),et=U$2(Ye),tt=U$2(qe$1),_t=Object.assign(ze,{Backdrop:Qe,Panel:Ze,Overlay:et,Title:tt,Description:G});

function c(a=0){let[l,r]=useState(a),t=f$3(),o=useCallback(e=>{t.current&&r(u=>u|e);},[l,t]),m=useCallback(e=>Boolean(l&e),[l]),s=useCallback(e=>{t.current&&r(u=>u&~e);},[r,t]),g=useCallback(e=>{t.current&&r(u=>u^e);},[r]);return {flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}

function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

function g(t,...e){t&&e.length>0&&t.classList.add(...e);}function v(t,...e){t&&e.length>0&&t.classList.remove(...e);}function b(t,e){let n=o$3();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:a}=getComputedStyle(t),[u,p]=[m,a].map(l=>{let[r=0]=l.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,T)=>T-i);return r}),o=u+p;if(o!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose();},o),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose();});});let l=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),l());});}else e();return n.add(()=>e()),n.dispose}function M$1(t,e,n,m){let a=n?"enter":"leave",u=o$3(),p=m!==void 0?l(m):()=>{};a==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let o=u$5(a,{enter:()=>e.enter,leave:()=>e.leave}),l$1=u$5(a,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=u$5(a,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),g(t,...e.base,...o,...r),u.nextFrame(()=>{v(t,...e.base,...o,...r),g(t,...e.base,...o,...l$1),b(t,()=>(v(t,...e.base,...o),g(t,...e.base,...e.entered),p()));}),u.dispose}

function D({immediate:t,container:s,direction:n,classes:u,onStart:a,onStop:c}){let l=f$3(),d=p$3(),e=s$7(n);l$5(()=>{t&&(e.current="enter");},[t]),l$5(()=>{let r=o$3();d.add(r.dispose);let i=s.current;if(i&&e.current!=="idle"&&l.current)return r.dispose(),a.current(e.current),r.add(M$1(i,u.current,e.current==="enter",()=>{r.dispose(),c.current(e.current);})),r.dispose},[n]);}

function S(t=""){return t.split(/\s+/).filter(n=>n.length>1)}let I=createContext(null);I.displayName="TransitionContext";var Se=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Se||{});function ye(){let t=useContext(I);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function xe(){let t=useContext(M);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let M=createContext(null);M.displayName="NestingContext";function U(t){return "children"in t?U(t.children):t.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function se(t,n){let r=s$7(t),s=useRef([]),R=f$3(),D=p$3(),p=o$4((i,e=v$1.Hidden)=>{let a=s.current.findIndex(({el:o})=>o===i);a!==-1&&(u$5(e,{[v$1.Unmount](){s.current.splice(a,1);},[v$1.Hidden](){s.current[a].state="hidden";}}),D.microTask(()=>{var o;!U(s)&&R.current&&((o=r.current)==null||o.call(r));}));}),x=o$4(i=>{let e=s.current.find(({el:a})=>a===i);return e?e.state!=="visible"&&(e.state="visible"):s.current.push({el:i,state:"visible"}),()=>p(i,v$1.Unmount)}),h=useRef([]),v=useRef(Promise.resolve()),u=useRef({enter:[],leave:[],idle:[]}),g=o$4((i,e,a)=>{h.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter(([o])=>o!==i)),n==null||n.chains.current[e].push([i,new Promise(o=>{h.current.push(o);})]),n==null||n.chains.current[e].push([i,new Promise(o=>{Promise.all(u.current[e].map(([f,N])=>N)).then(()=>o());})]),e==="enter"?v.current=v.current.then(()=>n==null?void 0:n.wait.current).then(()=>a(e)):a(e);}),d=o$4((i,e,a)=>{Promise.all(u.current[e].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=h.current.shift())==null||o();}).then(()=>a(e));});return useMemo(()=>({children:s,register:x,unregister:p,onStart:g,onStop:d,wait:v,chains:u}),[x,p,s,g,d,u,v])}function Ne(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(t){var r;let n={};for(let s of Pe)n[s]=(r=t[s])!=null?r:Ne;return n}function Re(t){let n=useRef(ae(t));return useEffect(()=>{n.current=ae(t);},[t]),n}let De="div",le=O.RenderStrategy;function He(t,n){var Q,Y;let{beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1,enter:p,enterFrom:x,enterTo:h,entered:v,leave:u,leaveFrom:g,leaveTo:d,...i}=t,e=useRef(null),a=y$1(e,n),o=(Q=i.unmount)==null||Q?v$1.Unmount:v$1.Hidden,{show:f,appear:N,initial:T}=ye(),[l,j]=useState(f?"visible":"hidden"),z=xe(),{register:L,unregister:O}=z;useEffect(()=>L(e),[L,e]),useEffect(()=>{if(o===v$1.Hidden&&e.current){if(f&&l!=="visible"){j("visible");return}return u$5(l,{["hidden"]:()=>O(e),["visible"]:()=>L(e)})}},[l,e,L,O,f,o]);let k=s$7({base:S(i.className),enter:S(p),enterFrom:S(x),enterTo:S(h),entered:S(v),leave:S(u),leaveFrom:S(g),leaveTo:S(d)}),V=Re({beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1}),G=l$4();useEffect(()=>{if(G&&l==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,l,G]);let Te=T&&!N,K=N&&f&&T,de=(()=>!G||Te?"idle":f?"enter":"leave")(),H=c(0),fe=o$4(C=>u$5(C,{enter:()=>{H.addFlag(d$3.Opening),V.current.beforeEnter();},leave:()=>{H.addFlag(d$3.Closing),V.current.beforeLeave();},idle:()=>{}})),me=o$4(C=>u$5(C,{enter:()=>{H.removeFlag(d$3.Opening),V.current.afterEnter();},leave:()=>{H.removeFlag(d$3.Closing),V.current.afterLeave();},idle:()=>{}})),w=se(()=>{j("hidden"),O(e);},z),B=useRef(!1);D({immediate:K,container:e,classes:k,direction:de,onStart:s$7(C=>{B.current=!0,w.onStart(e,C,fe);}),onStop:s$7(C=>{B.current=!1,w.onStop(e,C,me),C==="leave"&&!U(w)&&(j("hidden"),O(e));})});let P=i,ce={ref:a};return K?P={...P,className:t$4(i.className,...k.current.enter,...k.current.enterFrom)}:B.current&&(P.className=t$4(i.className,(Y=e.current)==null?void 0:Y.className),P.className===""&&delete P.className),C__default.createElement(M.Provider,{value:w},C__default.createElement(s$3,{value:u$5(l,{["visible"]:d$3.Open,["hidden"]:d$3.Closed})|H.flags},C({ourProps:ce,theirProps:P,defaultTag:De,features:le,visible:l==="visible",name:"Transition.Child"})))}function Fe(t,n){let{show:r,appear:s=!1,unmount:R=!0,...D}=t,p=useRef(null),x=y$1(p,n);l$4();let h=u$2();if(r===void 0&&h!==null&&(r=(h&d$3.Open)===d$3.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,u]=useState(r?"visible":"hidden"),g=se(()=>{u("hidden");}),[d,i]=useState(!0),e=useRef([r]);l$5(()=>{d!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),i(!1));},[e,r]);let a=useMemo(()=>({show:r,appear:s,initial:d}),[r,s,d]);useEffect(()=>{if(r)u("visible");else if(!U(g))u("hidden");else {let T=p.current;if(!T)return;let l=T.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&u("hidden");}},[r,g]);let o={unmount:R},f=o$4(()=>{var T;d&&i(!1),(T=t.beforeEnter)==null||T.call(t);}),N=o$4(()=>{var T;d&&i(!1),(T=t.beforeLeave)==null||T.call(t);});return C__default.createElement(M.Provider,{value:g},C__default.createElement(I.Provider,{value:a},C({ourProps:{...o,as:Fragment$1,children:C__default.createElement(ue,{ref:x,...o,...D,beforeEnter:f,beforeLeave:N})},theirProps:{},defaultTag:Fragment$1,features:le,visible:v==="visible",name:"Transition"})))}function _e(t,n){let r=useContext(I)!==null,s=u$2()!==null;return C__default.createElement(C__default.Fragment,null,!r&&s?C__default.createElement(q,{ref:n,...t}):C__default.createElement(ue,{ref:n,...t}))}let q=U$2(Fe),ue=U$2(He),Le=U$2(_e),qe=Object.assign(q,{Child:Le,Root:q});

// THIS FILE IS AUTO GENERATED
function AiOutlineClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024","fill":"currentColor","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},"child":[]}]})(props);
}

function Modal(_a) {
    var isOpen = _a.isOpen, closeModal = _a.closeModal, title = _a.title, children = _a.children;
    return (jsx(qe, { appear: true, show: isOpen, as: Fragment$1, children: jsxs(_t, { as: "div", className: "relative z-10", onClose: closeModal, children: [jsx(qe.Child, { as: Fragment$1, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: jsx("div", { className: "fixed inset-0 bg-black/25" }) }), jsx("div", { className: "fixed inset-0 overflow-y-auto", children: jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: jsx(qe.Child, { as: Fragment$1, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: jsxs(_t.Panel, { className: "w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all", children: [jsx("button", { className: "rounded-full p-2 hover:bg-black/5 mb-4", onClick: closeModal, children: jsx(AiOutlineClose, {}) }), jsx(_t.Title, { as: "h3", className: "text-xl md:text-2xl font-medium leading-6 text-gray-900", children: title }), children] }) }) }) })] }) }));
}

// THIS FILE IS AUTO GENERATED
function FiPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"},"child":[]},{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"},"child":[]}]})(props);
}

var Accordion = function (_a) {
    var rightIcon = _a.rightIcon, title = _a.title, content = _a.content, id = _a.id, defaultOpen = _a.defaultOpen;
    var _b = useState(defaultOpen !== null && defaultOpen !== void 0 ? defaultOpen : false), isOpen = _b[0], setIsOpen = _b[1];
    return (jsxs("div", { className: "flex flex-wrap justify-start overflow-hidden text-gray-800 border-b border-gray-100 bg-white", children: [jsxs("div", { className: "flex gap-2 justify-between w-full cursor-pointer", onClick: function () { return setIsOpen(function (val) { return !val; }); }, children: [jsx("label", { className: "grow px-4 py-4 font-medium", htmlFor: id, children: title }), rightIcon !== null && rightIcon !== void 0 ? rightIcon : (jsx(FiPlus, { className: cn("mx-4 my-3 h-6 w-6 transition-transform duration-300 transform", {
                            "rotate-45": isOpen,
                        }) }))] }), isOpen && (jsx("div", { className: "scale-y-100 p-4 bg-gray-100 opacity-100 text-sm", children: content }))] }));
};

var ColorTypes = {
    Primary50: 'bg-rose-50',
    Primary300: 'bg-rose-300',
    Primary400: 'bg-rose-400',
    Primary: 'bg-rose-500',
    Primary600: 'bg-rose-600',
    Primary700: 'bg-rose-700',
    Primary800: 'bg-rose-800',
    BlackOpacity5: 'bg-black/5',
    BlackOpacity25: 'bg-black/25',
    Black: 'bg-black',
    Gray50: 'bg-gray-50',
    Gray100: 'bg-gray-100',
    Gray200: 'bg-gray-200',
    Gray300: 'bg-gray-300',
    Gray400: 'bg-gray-400',
    Gray: 'bg-gray-500',
    Gray700: 'bg-gray-700',
    Gray800: 'bg-gray-800',
    Gray900: 'bg-gray-900',
    White: 'bg-white',
};

export { Accordion, Button, ButtonType, ButtonTypeStyle, ButtonVariable, Carousel, ColorLoader, ColorTypes, FullPageLoader, GridLayout, GridLoader, ListLoader, Loader, Modal, Text, TextInput, TextType, TextTypeStyle };
//# sourceMappingURL=index.js.map
