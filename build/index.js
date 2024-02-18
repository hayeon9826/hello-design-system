import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';

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
/* global Reflect, Promise, SuppressedError, Symbol */


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

var _a;
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
    Gray: "bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200",
};
var ButtonTypeStyle = (_a = {},
    _a[ButtonType.PRIMARY_LARGE] = cn(ButtonVariable.Primay, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a[ButtonType.PRIMARY_SMALL] = cn(ButtonVariable.Primay, ButtonVariable.Small, ButtonVariable.RoundedMd),
    _a[ButtonType.PRIMARY_LARGE_OUTLINE] = cn(ButtonVariable.PrimaryOutline, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a[ButtonType.PRIMARY_SMALL_OUTLINE] = cn(ButtonVariable.PrimaryOutline, ButtonVariable.Small, ButtonVariable.RoundedMd),
    _a[ButtonType.PRIMARY_LARGE_ROUNDED] = cn(ButtonVariable.Primay, ButtonVariable.Large, ButtonVariable.Rounded),
    _a[ButtonType.PRIMARY_SMALL_ROUNDED] = cn(ButtonVariable.Primay, ButtonVariable.Small, ButtonVariable.Rounded),
    _a[ButtonType.BLACK_LARGE] = cn(ButtonVariable.Black, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a[ButtonType.BLACK_LARGE_OUTLINE] = cn(ButtonVariable.BlackOutline, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a[ButtonType.BLACK_SMALL_ROUNDED] = cn(ButtonVariable.Black, ButtonVariable.Small, ButtonVariable.Rounded),
    _a[ButtonType.GRAY_LARGE] = cn(ButtonVariable.Gray, ButtonVariable.Large, ButtonVariable.RoundedMd),
    _a);

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

export { Button };
//# sourceMappingURL=index.js.map
