import * as Wt from "react";
import Le, { Children as Re, useState as te, useEffect as J, isValidElement as ut, cloneElement as Pe, forwardRef as _t, useRef as Q, useId as Ct, useMemo as Oe, useLayoutEffect as uo, useCallback as je, createContext as dt, memo as La, useReducer as fo, useContext as Se, createElement as Os } from "react";
import * as Ts from "react-dom";
import ja, { unstable_batchedUpdates as hn, createPortal as Fa } from "react-dom";
var Zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Es(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var a = [null];
        a.push.apply(a, arguments);
        var i = Function.bind.apply(t, a);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Dn = {}, Ss = {
  get exports() {
    return Dn;
  },
  set exports(e) {
    Dn = e;
  }
}, gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Cs() {
  if (Lo)
    return gn;
  Lo = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, d, f) {
    var l, u = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (h = d.ref);
    for (l in d)
      r.call(d, l) && !i.hasOwnProperty(l) && (u[l] = d[l]);
    if (s && s.defaultProps)
      for (l in d = s.defaultProps, d)
        u[l] === void 0 && (u[l] = d[l]);
    return { $$typeof: t, type: s, key: v, ref: h, props: u, _owner: a.current };
  }
  return gn.Fragment = n, gn.jsx = c, gn.jsxs = c, gn;
}
var mn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Ps() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var $ = m && g[m] || g[b];
      return typeof $ == "function" ? $ : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(g) {
      {
        for (var $ = arguments.length, W = new Array($ > 1 ? $ - 1 : 0), ae = 1; ae < $; ae++)
          W[ae - 1] = arguments[ae];
        P("error", g, W);
      }
    }
    function P(g, $, W) {
      {
        var ae = _.ReactDebugCurrentFrame, fe = ae.getStackAddendum();
        fe !== "" && ($ += "%s", W = W.concat([fe]));
        var he = W.map(function(ce) {
          return String(ce);
        });
        he.unshift("Warning: " + $), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var R = !1, w = !1, k = !1, O = !1, A = !1, z;
    z = Symbol.for("react.module.reference");
    function Z(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || A || g === a || g === f || g === l || O || g === h || R || w || k || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === u || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === z || g.getModuleId !== void 0));
    }
    function j(g, $, W) {
      var ae = g.displayName;
      if (ae)
        return ae;
      var fe = $.displayName || $.name || "";
      return fe !== "" ? W + "(" + fe + ")" : W;
    }
    function Y(g) {
      return g.displayName || "Context";
    }
    function U(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var $ = g;
            return Y($) + ".Consumer";
          case c:
            var W = g;
            return Y(W._context) + ".Provider";
          case d:
            return j(g, g.render, "ForwardRef");
          case u:
            var ae = g.displayName || null;
            return ae !== null ? ae : U(g.type) || "Memo";
          case v: {
            var fe = g, he = fe._payload, ce = fe._init;
            try {
              return U(ce(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, oe = 0, X, K, le, ne, E, L, y;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function C() {
      {
        if (oe === 0) {
          X = console.log, K = console.info, le = console.warn, ne = console.error, E = console.group, L = console.groupCollapsed, y = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        oe++;
      }
    }
    function D() {
      {
        if (oe--, oe === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, g, {
              value: X
            }),
            info: G({}, g, {
              value: K
            }),
            warn: G({}, g, {
              value: le
            }),
            error: G({}, g, {
              value: ne
            }),
            group: G({}, g, {
              value: E
            }),
            groupCollapsed: G({}, g, {
              value: L
            }),
            groupEnd: G({}, g, {
              value: y
            })
          });
        }
        oe < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = _.ReactCurrentDispatcher, M;
    function q(g, $, W) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (fe) {
            var ae = fe.stack.trim().match(/\n( *(at )?)/);
            M = ae && ae[1] || "";
          }
        return `
` + M + g;
      }
    }
    var H = !1, V;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      V = new de();
    }
    function F(g, $) {
      if (!g || H)
        return "";
      {
        var W = V.get(g);
        if (W !== void 0)
          return W;
      }
      var ae;
      H = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = S.current, S.current = null, C();
      try {
        if ($) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Et) {
              ae = Et;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Et) {
              ae = Et;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            ae = Et;
          }
          g();
        }
      } catch (Et) {
        if (Et && ae && typeof Et.stack == "string") {
          for (var se = Et.stack.split(`
`), qe = ae.stack.split(`
`), Ee = se.length - 1, Ce = qe.length - 1; Ee >= 1 && Ce >= 0 && se[Ee] !== qe[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (se[Ee] !== qe[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || se[Ee] !== qe[Ce]) {
                    var ot = `
` + se[Ee].replace(" at new ", " at ");
                    return g.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", g.displayName)), typeof g == "function" && V.set(g, ot), ot;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        H = !1, S.current = he, D(), Error.prepareStackTrace = fe;
      }
      var Kt = g ? g.displayName || g.name : "", ko = Kt ? q(Kt) : "";
      return typeof g == "function" && V.set(g, ko), ko;
    }
    function B(g, $, W) {
      return F(g, !1);
    }
    function ee(g) {
      var $ = g.prototype;
      return !!($ && $.isReactComponent);
    }
    function ie(g, $, W) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return F(g, ee(g));
      if (typeof g == "string")
        return q(g);
      switch (g) {
        case f:
          return q("Suspense");
        case l:
          return q("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case d:
            return B(g.render);
          case u:
            return ie(g.type, $, W);
          case v: {
            var ae = g, fe = ae._payload, he = ae._init;
            try {
              return ie(he(fe), $, W);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ae = {}, ft = _.ReactDebugCurrentFrame;
    function Fe(g) {
      if (g) {
        var $ = g._owner, W = ie(g.type, g._source, $ ? $.type : null);
        ft.setExtraStackFrame(W);
      } else
        ft.setExtraStackFrame(null);
    }
    function we(g, $, W, ae, fe) {
      {
        var he = Function.call.bind(ge);
        for (var ce in g)
          if (he(g, ce)) {
            var se = void 0;
            try {
              if (typeof g[ce] != "function") {
                var qe = Error((ae || "React class") + ": " + W + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              se = g[ce]($, ce, ae, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (Fe(fe), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", W, ce, typeof se), Fe(null)), se instanceof Error && !(se.message in Ae) && (Ae[se.message] = !0, Fe(fe), N("Failed %s type: %s", W, se.message), Fe(null));
          }
      }
    }
    var Ve = Array.isArray;
    function Xe(g) {
      return Ve(g);
    }
    function kt(g) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, W = $ && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return W;
      }
    }
    function Pt(g) {
      try {
        return Lt(g), !1;
      } catch {
        return !0;
      }
    }
    function Lt(g) {
      return "" + g;
    }
    function jt(g) {
      if (Pt(g))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(g)), Lt(g);
    }
    var Be = _.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, pn, nt;
    nt = {};
    function Yn(g) {
      if (ge.call(g, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(g, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Tr(g) {
      if (ge.call(g, "key")) {
        var $ = Object.getOwnPropertyDescriptor(g, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Er(g, $) {
      if (typeof g.ref == "string" && Be.current && $ && Be.current.stateNode !== $) {
        var W = U(Be.current.type);
        nt[W] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Be.current.type), g.ref), nt[W] = !0);
      }
    }
    function zn(g, $) {
      {
        var W = function() {
          Rt || (Rt = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        W.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function Sr(g, $) {
      {
        var W = function() {
          pn || (pn = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        W.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var Wn = function(g, $, W, ae, fe, he, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: $,
        ref: W,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Cr(g, $, W, ae, fe) {
      {
        var he, ce = {}, se = null, qe = null;
        W !== void 0 && (jt(W), se = "" + W), Tr($) && (jt($.key), se = "" + $.key), Yn($) && (qe = $.ref, Er($, fe));
        for (he in $)
          ge.call($, he) && !pt.hasOwnProperty(he) && (ce[he] = $[he]);
        if (g && g.defaultProps) {
          var Ee = g.defaultProps;
          for (he in Ee)
            ce[he] === void 0 && (ce[he] = Ee[he]);
        }
        if (se || qe) {
          var Ce = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && zn(ce, Ce), qe && Sr(ce, Ce);
        }
        return Wn(g, se, qe, fe, ae, Be.current, ce);
      }
    }
    var vn = _.ReactCurrentOwner, Un = _.ReactDebugCurrentFrame;
    function ye(g) {
      if (g) {
        var $ = g._owner, W = ie(g.type, g._source, $ ? $.type : null);
        Un.setExtraStackFrame(W);
      } else
        Un.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Me(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function vt() {
      {
        if (vn.current) {
          var g = U(vn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Ye(g) {
      {
        if (g !== void 0) {
          var $ = g.fileName.replace(/^.*[\\\/]/, ""), W = g.lineNumber;
          return `

Check your code at ` + $ + ":" + W + ".";
        }
        return "";
      }
    }
    var ze = {};
    function rt(g) {
      {
        var $ = vt();
        if (!$) {
          var W = typeof g == "string" ? g : g.displayName || g.name;
          W && ($ = `

Check the top-level render call using <` + W + ">.");
        }
        return $;
      }
    }
    function Tt(g, $) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var W = rt($);
        if (ze[W])
          return;
        ze[W] = !0;
        var ae = "";
        g && g._owner && g._owner !== vn.current && (ae = " It was passed a child from " + U(g._owner.type) + "."), ye(g), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, ae), ye(null);
      }
    }
    function We(g, $) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var W = 0; W < g.length; W++) {
            var ae = g[W];
            Me(ae) && Tt(ae, $);
          }
        else if (Me(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var fe = x(g);
          if (typeof fe == "function" && fe !== g.entries)
            for (var he = fe.call(g), ce; !(ce = he.next()).done; )
              Me(ce.value) && Tt(ce.value, $);
        }
      }
    }
    function Ft(g) {
      {
        var $ = g.type;
        if ($ == null || typeof $ == "string")
          return;
        var W;
        if (typeof $ == "function")
          W = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === u))
          W = $.propTypes;
        else
          return;
        if (W) {
          var ae = U($);
          we(W, g.props, "prop", ae, g);
        } else if ($.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var fe = U($);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(g) {
      {
        for (var $ = Object.keys(g.props), W = 0; W < $.length; W++) {
          var ae = $[W];
          if (ae !== "children" && ae !== "key") {
            ye(g), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), ye(null);
            break;
          }
        }
        g.ref !== null && (ye(g), N("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qt(g, $, W, ae, fe, he) {
      {
        var ce = Z(g);
        if (!ce) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ye(fe);
          qe ? se += qe : se += vt();
          var Ee;
          g === null ? Ee = "null" : Xe(g) ? Ee = "array" : g !== void 0 && g.$$typeof === t ? (Ee = "<" + (U(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var Ce = Cr(g, $, W, fe, he);
        if (Ce == null)
          return Ce;
        if (ce) {
          var ot = $.children;
          if (ot !== void 0)
            if (ae)
              if (Xe(ot)) {
                for (var Kt = 0; Kt < ot.length; Kt++)
                  We(ot[Kt], g);
                Object.freeze && Object.freeze(ot);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(ot, g);
        }
        return g === r ? Bt(Ce) : Ft(Ce), Ce;
      }
    }
    function Xt(g, $, W) {
      return qt(g, $, W, !0);
    }
    function Hn(g, $, W) {
      return qt(g, $, W, !1);
    }
    var Vt = Hn, Yt = Xt;
    mn.Fragment = r, mn.jsx = Vt, mn.jsxs = Yt;
  }()), mn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Cs() : e.exports = Ps();
})(Ss);
const st = Dn.Fragment, p = Dn.jsx, I = Dn.jsxs;
var o = {}, Fo = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, nr = {}, Rs = {
  get exports() {
    return nr;
  },
  set exports(e) {
    nr = e;
  }
}, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Ds() {
  if (Bo)
    return pe;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function P(w) {
    if (typeof w == "object" && w !== null) {
      var k = w.$$typeof;
      switch (k) {
        case t:
          switch (w = w.type, w) {
            case d:
            case f:
            case r:
            case i:
            case a:
            case u:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case l:
                case m:
                case h:
                case c:
                  return w;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function R(w) {
    return P(w) === f;
  }
  return pe.AsyncMode = d, pe.ConcurrentMode = f, pe.ContextConsumer = s, pe.ContextProvider = c, pe.Element = t, pe.ForwardRef = l, pe.Fragment = r, pe.Lazy = m, pe.Memo = h, pe.Portal = n, pe.Profiler = i, pe.StrictMode = a, pe.Suspense = u, pe.isAsyncMode = function(w) {
    return R(w) || P(w) === d;
  }, pe.isConcurrentMode = R, pe.isContextConsumer = function(w) {
    return P(w) === s;
  }, pe.isContextProvider = function(w) {
    return P(w) === c;
  }, pe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, pe.isForwardRef = function(w) {
    return P(w) === l;
  }, pe.isFragment = function(w) {
    return P(w) === r;
  }, pe.isLazy = function(w) {
    return P(w) === m;
  }, pe.isMemo = function(w) {
    return P(w) === h;
  }, pe.isPortal = function(w) {
    return P(w) === n;
  }, pe.isProfiler = function(w) {
    return P(w) === i;
  }, pe.isStrictMode = function(w) {
    return P(w) === a;
  }, pe.isSuspense = function(w) {
    return P(w) === u;
  }, pe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === f || w === i || w === a || w === u || w === v || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === h || w.$$typeof === c || w.$$typeof === s || w.$$typeof === l || w.$$typeof === x || w.$$typeof === _ || w.$$typeof === N || w.$$typeof === b);
  }, pe.typeOf = P, pe;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function Ns() {
  return qo || (qo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function P(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === f || F === i || F === a || F === u || F === v || typeof F == "object" && F !== null && (F.$$typeof === m || F.$$typeof === h || F.$$typeof === c || F.$$typeof === s || F.$$typeof === l || F.$$typeof === x || F.$$typeof === _ || F.$$typeof === N || F.$$typeof === b);
    }
    function R(F) {
      if (typeof F == "object" && F !== null) {
        var B = F.$$typeof;
        switch (B) {
          case t:
            var ee = F.type;
            switch (ee) {
              case d:
              case f:
              case r:
              case i:
              case a:
              case u:
                return ee;
              default:
                var ie = ee && ee.$$typeof;
                switch (ie) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case c:
                    return ie;
                  default:
                    return B;
                }
            }
          case n:
            return B;
        }
      }
    }
    var w = d, k = f, O = s, A = c, z = t, Z = l, j = r, Y = m, U = h, G = n, oe = i, X = a, K = u, le = !1;
    function ne(F) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(F) || R(F) === d;
    }
    function E(F) {
      return R(F) === f;
    }
    function L(F) {
      return R(F) === s;
    }
    function y(F) {
      return R(F) === c;
    }
    function T(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function C(F) {
      return R(F) === l;
    }
    function D(F) {
      return R(F) === r;
    }
    function S(F) {
      return R(F) === m;
    }
    function M(F) {
      return R(F) === h;
    }
    function q(F) {
      return R(F) === n;
    }
    function H(F) {
      return R(F) === i;
    }
    function V(F) {
      return R(F) === a;
    }
    function de(F) {
      return R(F) === u;
    }
    ve.AsyncMode = w, ve.ConcurrentMode = k, ve.ContextConsumer = O, ve.ContextProvider = A, ve.Element = z, ve.ForwardRef = Z, ve.Fragment = j, ve.Lazy = Y, ve.Memo = U, ve.Portal = G, ve.Profiler = oe, ve.StrictMode = X, ve.Suspense = K, ve.isAsyncMode = ne, ve.isConcurrentMode = E, ve.isContextConsumer = L, ve.isContextProvider = y, ve.isElement = T, ve.isForwardRef = C, ve.isFragment = D, ve.isLazy = S, ve.isMemo = M, ve.isPortal = q, ve.isProfiler = H, ve.isStrictMode = V, ve.isSuspense = de, ve.isValidElementType = P, ve.typeOf = R;
  }()), ve;
}
var Vo;
function Ba() {
  return Vo || (Vo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ds() : e.exports = Ns();
  }(Rs)), nr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pr, Yo;
function As() {
  if (Yo)
    return Pr;
  Yo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var d = Object.getOwnPropertyNames(c).map(function(l) {
        return c[l];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Pr = a() ? Object.assign : function(i, c) {
    for (var s, d = r(i), f, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var u in s)
        t.call(s, u) && (d[u] = s[u]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (d[f[v]] = s[f[v]]);
      }
    }
    return d;
  }, Pr;
}
var Rr, zo;
function po() {
  if (zo)
    return Rr;
  zo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rr = e, Rr;
}
var Dr, Wo;
function qa() {
  return Wo || (Wo = 1, Dr = Function.call.bind(Object.prototype.hasOwnProperty)), Dr;
}
var Nr, Uo;
function Is() {
  if (Uo)
    return Nr;
  Uo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = po(), n = {}, r = qa();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(i, c, s, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (r(i, l)) {
          var u;
          try {
            if (typeof i[l] != "function") {
              var v = Error(
                (d || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            u = i[l](c, l, d, s, null, t);
          } catch (m) {
            u = m;
          }
          if (u && !(u instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + s + " type: " + u.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Nr = a, Nr;
}
var Ar, Ho;
function Ms() {
  if (Ho)
    return Ar;
  Ho = 1;
  var e = Ba(), t = As(), n = po(), r = qa(), a = Is(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var d = "Warning: " + s;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Ar = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function u(E) {
      var L = E && (f && E[f] || E[l]);
      if (typeof L == "function")
        return L;
    }
    var v = "<<anonymous>>", h = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: N(),
      arrayOf: P,
      element: R(),
      elementType: w(),
      instanceOf: k,
      node: Z(),
      objectOf: A,
      oneOf: O,
      oneOfType: z,
      shape: Y,
      exact: U
    };
    function m(E, L) {
      return E === L ? E !== 0 || 1 / E === 1 / L : E !== E && L !== L;
    }
    function b(E, L) {
      this.message = E, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(E) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, y = 0;
      function T(D, S, M, q, H, V, de) {
        if (q = q || v, V = V || M, de !== n) {
          if (d) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var B = q + ":" + M;
            !L[B] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[B] = !0, y++);
          }
        }
        return S[M] == null ? D ? S[M] === null ? new b("The " + H + " `" + V + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + H + " `" + V + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : E(S, M, q, H, V);
      }
      var C = T.bind(null, !1);
      return C.isRequired = T.bind(null, !0), C;
    }
    function _(E) {
      function L(y, T, C, D, S, M) {
        var q = y[T], H = X(q);
        if (H !== E) {
          var V = K(q);
          return new b(
            "Invalid " + D + " `" + S + "` of type " + ("`" + V + "` supplied to `" + C + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return x(L);
    }
    function N() {
      return x(c);
    }
    function P(E) {
      function L(y, T, C, D, S) {
        if (typeof E != "function")
          return new b("Property `" + S + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var M = y[T];
        if (!Array.isArray(M)) {
          var q = X(M);
          return new b("Invalid " + D + " `" + S + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected an array."));
        }
        for (var H = 0; H < M.length; H++) {
          var V = E(M, H, C, D, S + "[" + H + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return x(L);
    }
    function R() {
      function E(L, y, T, C, D) {
        var S = L[y];
        if (!s(S)) {
          var M = X(S);
          return new b("Invalid " + C + " `" + D + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(E);
    }
    function w() {
      function E(L, y, T, C, D) {
        var S = L[y];
        if (!e.isValidElementType(S)) {
          var M = X(S);
          return new b("Invalid " + C + " `" + D + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(E);
    }
    function k(E) {
      function L(y, T, C, D, S) {
        if (!(y[T] instanceof E)) {
          var M = E.name || v, q = ne(y[T]);
          return new b("Invalid " + D + " `" + S + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return x(L);
    }
    function O(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function L(y, T, C, D, S) {
        for (var M = y[T], q = 0; q < E.length; q++)
          if (m(M, E[q]))
            return null;
        var H = JSON.stringify(E, function(de, F) {
          var B = K(F);
          return B === "symbol" ? String(F) : F;
        });
        return new b("Invalid " + D + " `" + S + "` of value `" + String(M) + "` " + ("supplied to `" + C + "`, expected one of " + H + "."));
      }
      return x(L);
    }
    function A(E) {
      function L(y, T, C, D, S) {
        if (typeof E != "function")
          return new b("Property `" + S + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var M = y[T], q = X(M);
        if (q !== "object")
          return new b("Invalid " + D + " `" + S + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected an object."));
        for (var H in M)
          if (r(M, H)) {
            var V = E(M, H, C, D, S + "." + H, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return x(L);
    }
    function z(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var L = 0; L < E.length; L++) {
        var y = E[L];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(y) + " at index " + L + "."
          ), c;
      }
      function T(C, D, S, M, q) {
        for (var H = [], V = 0; V < E.length; V++) {
          var de = E[V], F = de(C, D, S, M, q, n);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && H.push(F.data.expectedType);
        }
        var B = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new b("Invalid " + M + " `" + q + "` supplied to " + ("`" + S + "`" + B + "."));
      }
      return x(T);
    }
    function Z() {
      function E(L, y, T, C, D) {
        return G(L[y]) ? null : new b("Invalid " + C + " `" + D + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return x(E);
    }
    function j(E, L, y, T, C) {
      return new b(
        (E || "React class") + ": " + L + " type `" + y + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function Y(E) {
      function L(y, T, C, D, S) {
        var M = y[T], q = X(M);
        if (q !== "object")
          return new b("Invalid " + D + " `" + S + "` of type `" + q + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var H in E) {
          var V = E[H];
          if (typeof V != "function")
            return j(C, D, S, H, K(V));
          var de = V(M, H, C, D, S + "." + H, n);
          if (de)
            return de;
        }
        return null;
      }
      return x(L);
    }
    function U(E) {
      function L(y, T, C, D, S) {
        var M = y[T], q = X(M);
        if (q !== "object")
          return new b("Invalid " + D + " `" + S + "` of type `" + q + "` " + ("supplied to `" + C + "`, expected `object`."));
        var H = t({}, y[T], E);
        for (var V in H) {
          var de = E[V];
          if (r(E, V) && typeof de != "function")
            return j(C, D, S, V, K(de));
          if (!de)
            return new b(
              "Invalid " + D + " `" + S + "` key `" + V + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(y[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var F = de(M, V, C, D, S + "." + V, n);
          if (F)
            return F;
        }
        return null;
      }
      return x(L);
    }
    function G(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(G);
          if (E === null || s(E))
            return !0;
          var L = u(E);
          if (L) {
            var y = L.call(E), T;
            if (L !== E.entries) {
              for (; !(T = y.next()).done; )
                if (!G(T.value))
                  return !1;
            } else
              for (; !(T = y.next()).done; ) {
                var C = T.value;
                if (C && !G(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(E, L) {
      return E === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function X(E) {
      var L = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : oe(L, E) ? "symbol" : L;
    }
    function K(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var L = X(E);
      if (L === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function le(E) {
      var L = K(E);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function ne(E) {
      return !E.constructor || !E.constructor.name ? v : E.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Ar;
}
var Ir, Zo;
function $s() {
  if (Zo)
    return Ir;
  Zo = 1;
  var e = po();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ir = function() {
    function r(c, s, d, f, l, u) {
      if (u !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ir;
}
if (process.env.NODE_ENV !== "production") {
  var ks = Ba(), Ls = !0;
  Fo.exports = Ms()(ks.isElement, Ls);
} else
  Fo.exports = $s()();
const js = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ze = (e, t) => Re.toArray(e).filter((n) => t.indexOf(js(n)) !== -1), Fs = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = te(), c = (d) => {
    t ? a.includes(d) ? i(a.filter((f) => f !== d)) : i([...a, d]) : i(d);
  };
  J(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = Re.map(e, (d, f) => ut(d) ? Pe(d, { ...d.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : Ze(s, ["AccordionItem"]) });
};
Fs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Qr = {}, Bs = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var c = typeof i;
          if (c === "string" || c === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (c === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var d in i)
              t.call(i, d) && i[d] && r.push(d);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Bs);
const re = Qr, be = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, rr = {
  "c-accordion__item": "_c-accordion__item_s7jwr_1",
  "c-accordion__button": "_c-accordion__button_s7jwr_10",
  "c-accordion__panel": "_c-accordion__panel_s7jwr_29",
  "c-accordion__panel-content": "_c-accordion__panel-content_s7jwr_48"
}, Va = ({
  children: e,
  id: t,
  onExpanded: n,
  isExpanded: r,
  expanded: a,
  addClass: i,
  icon: c,
  defaultStyle: s,
  __TYPE: d,
  ...f
}) => /* @__PURE__ */ I(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: re({
      [`${rr["c-accordion__button"]} u-flex`]: !s,
      [i]: i,
      [r]: a
    }),
    onClick: n,
    "data-type": d,
    ...f,
    children: [
      e,
      c && c(r)
    ]
  }
);
Va.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  onExpanded: o.func,
  isExpanded: o.bool,
  expanded: o.string,
  addClass: o.string,
  icon: o.func,
  defaultStyle: o.bool,
  __TYPE: be("AccordionButton")
};
Va.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ya = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), d = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = Re.map(e, (l) => ut(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: d() }) : Pe(l, { ...l.props, id: t, isExpanded: d() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [rr["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : Ze(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
Ya.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: be("AccordionItem")
};
Ya.defaultProps = {
  __TYPE: "AccordionItem"
};
const za = ({
  children: e,
  id: t,
  isExpanded: n,
  addClass: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => /* @__PURE__ */ p(
  "div",
  {
    id: `accordion-panel-${t}`,
    role: "region",
    "aria-hidden": !n,
    "aria-labelledby": `accordion-button-${t}`,
    "data-type": i,
    className: re(rr["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: re({
          [rr["c-accordion__panel-content"]]: !a
        }),
        children: e
      }
    )
  }
);
za.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  isExpanded: o.bool,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("AccordionPanel")
};
za.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Gn = {
  "c-icon": "_c-icon_13de5_1",
  "c-small": "_c-small_13de5_10",
  "c-normal": "_c-normal_13de5_14",
  "c-big": "_c-big_13de5_18"
}, qs = /\w+\.svg/gi, xe = ({
  children: e,
  path: t,
  size: n,
  addClass: r,
  viewBox: a,
  width: i,
  height: c,
  __TYPE: s,
  ...d
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (Re.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const f = t && t.match(qs).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
  return e ? Pe(e, {
    ...e.props,
    className: `${Gn["c-icon"]} ${Gn[`c-${n}`]} ${r ?? ""}`,
    "aria-hidden": !0,
    "data-testid": f,
    "data-component": s
  }) : /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: c,
      viewBox: a,
      className: `${Gn["c-icon"]} ${Gn[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": f,
      "data-component": s,
      ...d,
      children: /* @__PURE__ */ p("use", { xlinkHref: l })
    }
  );
};
xe.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  viewBox: o.string,
  height: o.string,
  width: o.string,
  __TYPE: be("Icon")
};
xe.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const bn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Ut = _t((e, t) => {
  const {
    label: n,
    size: r,
    icon: a,
    type: i,
    variant: c,
    hasAriaLabel: s,
    disabled: d,
    onClick: f,
    children: l,
    addClass: u,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ I(
    "button",
    {
      ref: t,
      className: re({
        [`${bn["c-button"]} ${bn[`c-${c}`]} ${bn[`c-${r}`]}`]: !v,
        [bn["c-round"]]: a && a.path && s,
        [bn["c-reverse"]]: a && a.position === "right",
        [u]: u
      }),
      disabled: d,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        l,
        a && /* @__PURE__ */ p(xe, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
Ut.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  label: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  variant: o.oneOf(["primary", "secondary", "no-line"]),
  type: o.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: o.bool,
  icon: o.shape({
    path: o.string,
    size: o.oneOf(["small", "normal", "big"]),
    position: o.oneOf(["left", "right"])
  }),
  disabled: o.bool,
  onClick: o.func,
  addClass: o.string,
  defaultStyle: o.bool
};
Ut.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Wa = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: n
}) => {
  const a = Q({
    isPointerDown: !1,
    // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart: n,
    onInteractionOutside: t
  }).current;
  a.onInteractionOutside = t, a.onInteractionOutsideStart = n, J(() => {
    const i = (s) => {
      Go(s, e) && a.onInteractionOutside && (a.onInteractionOutsideStart && a.onInteractionOutsideStart(s), a.isPointerDown = !0);
    }, c = (s) => {
      a.isPointerDown && a.onInteractionOutside && Go(s, e) && (a.onInteractionOutside(s), a.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", c, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", c, !0);
    };
  }, [e, a]);
};
function Go(e, t) {
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const Vs = "_scrubber_1x5l1_142", ht = {
  "c-audio": "_c-audio_1x5l1_1",
  "c-audio--small": "_c-audio--small_1x5l1_15",
  "c-audio--hidden": "_c-audio--hidden_1x5l1_29",
  "c-button": "_c-button_1x5l1_33",
  "is-button-paused": "_is-button-paused_1x5l1_66",
  "is-button-playing": "_is-button-playing_1x5l1_74",
  "audio-bar": "_audio-bar_1x5l1_82",
  "volume-control": "_volume-control_1x5l1_129",
  scrubber: Vs,
  "volume-btn": "_volume-btn_1x5l1_147",
  "hidden-description": "_hidden-description_1x5l1_151"
}, Ys = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), Qt = Object.freeze({
  play: /* @__PURE__ */ p("path", { id: "play", d: "M306-184v-598l471 299-471 299Z" }),
  pause: /* @__PURE__ */ p("path", { id: "pause", d: "M550-186v-590h201v590H550Zm-340 0v-590h201v590H210Z" }),
  volume_on: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_on",
      d: "M552-94v-75q108-28 176-115t68-198q0-110-68-196.5T552-793v-75q139 28 228 136.5T869-482q0 143-88.5 252T552-94ZM91-350v-260h167l214-215v690L258-350H91Zm441 44v-348q57 18 91.5 66T658-480q0 60-34.5 108T532-306Z"
    }
  ),
  volume_down: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_down",
      d: "M173-337v-287h173l233-231v750L346-337H173Zm466 33v-353q55 18 92 67.5T768-480q0 60-37 108t-92 68Z"
    }
  ),
  volume_off: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_off",
      d: "M821-37 697-160q-34 23-72.5 40T543-94v-75q27-7 52.5-17t48.5-27L463-395v260L249-350H82v-260h165L27-831l52-52L873-90l-52 53Zm-14-247-54-54q18-33 26-69t8-75q0-112-67.5-200.5T543-793v-75q139 28 228 136.5T860-482q0 53-13.5 103T807-284ZM644-447 543-548v-99q49 23 77.5 68t28.5 99q0 9-1 17t-4 16ZM463-628l-98-99 98-98v197Z"
    }
  ),
  a11y: /* @__PURE__ */ I(st, { children: [
    /* @__PURE__ */ p(
      "path",
      {
        fill: "currentColor",
        d: "M23 14v-2H9v2h5v2.734l-3.868 6.77 1.736.992L15.58 18h.84l3.712 6.496 1.736-.992L18 16.734V14h5z"
      }
    ),
    /* @__PURE__ */ p("circle", { cx: "16", cy: "9", r: "2", fill: "currentColor" }),
    /* @__PURE__ */ p(
      "path",
      {
        fill: "currentColor",
        d: "M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
      }
    )
  ] })
}), Ua = ({
  id: e,
  src: t,
  format: n,
  a11y: r,
  size: a,
  type: i,
  addClass: c,
  defaultStyle: s,
  hasDescription: d = !1,
  description: f,
  ...l
}) => {
  const u = Ct(), v = e ?? u, [h, m] = te(!1), [b, x] = te(!1), [_, N] = te(0), [P, R] = te(0), [w, k] = te(0), O = Q(), A = Q(null), z = Q(null), Z = (ne, E) => ne === E.current;
  Wa({ ref: z, onInteractionOutside: (ne) => {
    Z(ne.target, A) || (x(!1), ne.stopPropagation(), ne.preventDefault());
  } });
  const Y = () => {
    document.querySelectorAll("audio").forEach((E) => {
      !E.paused && E !== O.current && E.pause();
    });
  }, U = () => {
    O.current && (Y(), O.current.paused ? O.current.play() : O.current.pause(), m(!h));
  }, G = window.matchMedia(
    "(any-hover: none) and (any-pointer: coarse)"
  ).matches, oe = () => {
    R(Math.round(O.current.duration)), k(G ? 1 : O.current.volume);
  }, X = () => {
    N(Math.round(O.current.currentTime));
  }, K = (ne) => {
    k(ne.target.volume);
  }, le = (ne) => {
    const E = parseFloat(ne.target.value);
    N(E), O.current.currentTime = E;
  };
  return i === Ys.BAR ? /* @__PURE__ */ I(st, { children: [
    /* @__PURE__ */ I(
      "div",
      {
        className: `${ht["audio-bar"]} ${c ?? ""}`,
        role: "group",
        "aria-labelledby": `description${v}`,
        "data-a11y": r,
        "data-class": "c-audio-bar",
        children: [
          d ? /* @__PURE__ */ p("span", { id: `description${v}`, className: ht["hidden-description"], children: r ? "Audio description" : `Barra de audio ${f}` }) : /* @__PURE__ */ p("span", { id: `description${v}`, hidden: !0, children: r ? "Audio description" : "Barra de audio" }),
          r ? /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: Qt.a11y }) }) : null,
          /* @__PURE__ */ I("button", { type: "button", onClick: U, children: [
            /* @__PURE__ */ p("div", { className: "u-sr-only", children: h ? "Pausar" : "Reproducir" }),
            /* @__PURE__ */ p(xe, { size: "big", children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 -960 960 960",
                children: h ? Qt.pause : Qt.play
              }
            ) })
          ] }),
          /* @__PURE__ */ I("small", { "aria-hidden": "true", children: [
            String(Math.floor(_ / 60)).padStart(2, "0"),
            ":",
            String(_ - 60 * Math.floor(_ / 60)).padStart(2, "0"),
            " ",
            "/ ",
            String(Math.floor(P / 60)).padStart(2, "0"),
            ":",
            String(P - 60 * Math.floor(P / 60)).padStart(2, "0")
          ] }),
          /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `time${v}`, children: "Tiempo transcurrido" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: ht.scrubber,
              id: `time${v}`,
              value: _,
              min: 0,
              max: P,
              "aria-valuetext": `${_} seconds`,
              onChange: le,
              type: "range"
            }
          ),
          /* @__PURE__ */ I(
            "button",
            {
              type: "button",
              ref: A,
              "aria-expanded": b,
              className: ht["volume-btn"],
              onClick: () => x(!b),
              children: [
                /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
                /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "48",
                    height: "48",
                    viewBox: "0 -960 960 960",
                    children: w === 0 ? Qt.volume_off : w <= 0.25 ? Qt.volume_down : Qt.volume_on
                  }
                ) })
              ]
            }
          ),
          b ? /* @__PURE__ */ I("div", { className: ht["volume-control"], ref: z, children: [
            /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `volume${v}`, children: "Volumen" }),
            /* @__PURE__ */ p(
              "input",
              {
                id: `volume${v}`,
                value: w,
                min: 0,
                max: 1,
                step: 0.05,
                type: "range",
                "aria-valuetext": w * 100,
                "aria-orientation": "vertical",
                orient: "vertical",
                onChange: (ne) => {
                  k(ne.target.value), O.current.volume = ne.target.value;
                }
              }
            )
          ] }) : null
        ]
      }
    ),
    /* @__PURE__ */ p(
      "audio",
      {
        id: v,
        ref: O,
        preload: "metadata",
        controls: !0,
        className: re({
          [ht["c-audio"]]: !s,
          [ht[`c-audio--${a}`]]: a,
          [c]: c
        }),
        onLoadedMetadata: oe,
        onTimeUpdate: X,
        onPlay: () => m(!0),
        onPause: () => m(!1),
        onVolumeChange: (ne) => K(ne),
        "data-a11y": r,
        hidden: !0,
        children: /* @__PURE__ */ p("source", { src: t, type: n })
      }
    )
  ] }) : /* @__PURE__ */ I(st, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        id: v,
        ref: O,
        src: t,
        type: n,
        onPlay: () => m(!0),
        onPause: () => m(!1),
        onEnded: () => m(!1),
        className: ht["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      Ut,
      {
        type: "button",
        label: h ? "Pausar" : "Reproduccir",
        "data-a11y": r,
        "data-class": "c-audio-button",
        addClass: re({
          [ht["c-button"]]: !s,
          [ht["is-button-playing"]]: h,
          [ht["is-button-paused"]]: !h,
          [c]: c
        }),
        onClick: U,
        hasAriaLabel: !0,
        ...s && { defaultStyle: s },
        ...r && { disabled: r },
        ...l
      }
    )
  ] });
};
Ua.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Ua.propTypes = {
  id: o.string,
  src: o.string,
  a11y: o.bool,
  format: o.string,
  size: o.oneOf(["small"]),
  type: o.oneOf(["Bar", "Button"]),
  hasDescription: o.bool,
  description: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
var zs = typeof Zn == "object" && Zn && Zn.Object === Object && Zn, Ws = zs, Us = Ws, Hs = typeof self == "object" && self && self.Object === Object && self, Zs = Us || Hs || Function("return this")(), Gs = Zs, Xs = Gs, Ks = Xs.Symbol, vo = Ks;
function Qs(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Js = Qs, el = Array.isArray, tl = el, Xo = vo, Ha = Object.prototype, nl = Ha.hasOwnProperty, rl = Ha.toString, yn = Xo ? Xo.toStringTag : void 0;
function ol(e) {
  var t = nl.call(e, yn), n = e[yn];
  try {
    e[yn] = void 0;
    var r = !0;
  } catch {
  }
  var a = rl.call(e);
  return r && (t ? e[yn] = n : delete e[yn]), a;
}
var al = ol, il = Object.prototype, sl = il.toString;
function ll(e) {
  return sl.call(e);
}
var cl = ll, Ko = vo, ul = al, dl = cl, fl = "[object Null]", pl = "[object Undefined]", Qo = Ko ? Ko.toStringTag : void 0;
function vl(e) {
  return e == null ? e === void 0 ? pl : fl : Qo && Qo in Object(e) ? ul(e) : dl(e);
}
var hl = vl;
function gl(e) {
  return e != null && typeof e == "object";
}
var ml = gl, bl = hl, yl = ml, _l = "[object Symbol]";
function wl(e) {
  return typeof e == "symbol" || yl(e) && bl(e) == _l;
}
var xl = wl, Jo = vo, Ol = Js, Tl = tl, El = xl, Sl = 1 / 0, ea = Jo ? Jo.prototype : void 0, ta = ea ? ea.toString : void 0;
function Za(e) {
  if (typeof e == "string")
    return e;
  if (Tl(e))
    return Ol(e, Za) + "";
  if (El(e))
    return ta ? ta.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Sl ? "-0" : t;
}
var Cl = Za, Pl = Cl;
function Rl(e) {
  return e == null ? "" : Pl(e);
}
var Dl = Rl, Nl = Dl, Al = 0;
function Il(e) {
  var t = ++Al;
  return Nl(e) + t;
}
var Ga = Il;
const Jt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, Ml = (e) => {
  const t = /* @__PURE__ */ p(
    "path",
    {
      id: "done_all",
      d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z"
    }
  ), n = /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }), r = /* @__PURE__ */ p(
    "path",
    {
      id: "close",
      d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
    }
  );
  return e === "checkbox" ? {
    right: t,
    wrong: r,
    normal: n
  } : {
    right: n,
    wrong: r,
    normal: null
  };
}, Xa = _t(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: d, onChange: f, __TYPE: l, inherit: u, ...v }, h) => {
    const m = Oe(() => e || Ga(`ui-${n}`), [e, n]), b = Object.freeze(Ml(n)), x = ({ target: _ }) => {
      if (f) {
        if (_.checked) {
          f({ id: _.id, value: _.value });
          return;
        }
        f({ id: _.id, value: "" });
      }
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: m,
        className: `c-input-radio ${Jt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!u && { ...v },
        children: [
          /* @__PURE__ */ I("div", { className: Jt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: m,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Jt["c-input__check"],
                onChange: x,
                ...s && { disabled: !0 },
                ...u && { ...v },
                ...d && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Jt["c-input__icon"]} ${d ? Jt["c-input-defaultChecked"] : ""} `, children: b[a] && /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", children: b[a] }) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Jt["c-input__label"], children: r })
        ]
      }
    );
  }
);
Xa.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
Xa.propTypes = {
  id: o.string,
  name: o.string,
  type: o.oneOf(["radio", "checkbox"]),
  label: o.string.isRequired,
  state: o.oneOf(["normal", "right", "wrong"]),
  value: o.oneOfType([o.string, o.number, o.bool]),
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  inherit: o.bool,
  onChange: o.func,
  __TYPE: be("CheckBox")
};
const $l = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = te([]), c = Q(), s = (u) => {
    c.current = u || "";
  }, d = (u) => c.current === "radio" ? [{ ...u }] : a.filter((h) => h.id === u.id).length ? [...a.filter((h) => h.id !== u.id)] : [...a, { ...u }], f = (u) => {
    const v = d(u);
    n && n(v), i(v);
  }, l = Re.map(t, (u) => ut(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Pe(u, { ...u.props, onChange: f })) : u : null);
  return /* @__PURE__ */ I("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Ze(l, ["CheckBox"]) })
  ] });
};
$l.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const kl = "_col_wu095_1", Ll = {
  col: kl
}, jl = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Ll.col} ${e ?? ""}`, ...t }));
jl.propTypes = {
  addClass: o.string
};
const Fl = {
  "c-content": "_c-content_u325r_1"
}, Bl = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: re({
      [Fl["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
Bl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const dr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function un(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ho(e) {
  return "nodeType" in e;
}
function Ge(e) {
  var t, n;
  return e ? un(e) ? e : ho(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function go(e) {
  const {
    Document: t
  } = Ge(e);
  return e instanceof t;
}
function jn(e) {
  return un(e) ? !1 : e instanceof Ge(e).HTMLElement;
}
function ql(e) {
  return e instanceof Ge(e).SVGElement;
}
function dn(e) {
  return e ? un(e) ? e.document : ho(e) ? go(e) ? e : jn(e) ? e.ownerDocument : document : document : document;
}
const St = dr ? uo : J;
function mo(e) {
  const t = Q(e);
  return St(() => {
    t.current = e;
  }), je(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Vl() {
  const e = Q(null), t = je((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = je(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Nn(e, t) {
  t === void 0 && (t = [e]);
  const n = Q(e);
  return St(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Fn(e, t) {
  const n = Q();
  return Oe(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function or(e) {
  const t = mo(e), n = Q(null), r = je(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Jr(e) {
  const t = Q();
  return J(() => {
    t.current = e;
  }, [e]), t.current;
}
let Mr = {};
function fr(e, t) {
  return Oe(() => {
    if (t)
      return t;
    const n = Mr[e] == null ? 0 : Mr[e] + 1;
    return Mr[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ka(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return r.reduce((i, c) => {
      const s = Object.entries(c);
      for (const [d, f] of s) {
        const l = i[d];
        l != null && (i[d] = l + e * f);
      }
      return i;
    }, {
      ...t
    });
  };
}
const nn = /* @__PURE__ */ Ka(1), ar = /* @__PURE__ */ Ka(-1);
function Yl(e) {
  return "clientX" in e && "clientY" in e;
}
function Qa(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function zl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function eo(e) {
  if (zl(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return Yl(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const to = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [to.Translate.toString(e), to.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), na = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Wl(e) {
  return e.matches(na) ? e : e.querySelector(na);
}
const Ul = {
  display: "none"
};
function Hl(e) {
  let {
    id: t,
    value: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Ul
  }, n);
}
const Zl = {
  position: "fixed",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(100%)",
  whiteSpace: "nowrap"
};
function Gl(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Zl,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Xl() {
  const [e, t] = te("");
  return {
    announce: je((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Ja = /* @__PURE__ */ dt(null);
function Kl(e) {
  const t = Se(Ja);
  J(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ql() {
  const [e] = te(() => /* @__PURE__ */ new Set()), t = je((r) => (e.add(r), () => e.delete(r)), [e]);
  return [je((r) => {
    let {
      type: a,
      event: i
    } = r;
    e.forEach((c) => {
      var s;
      return (s = c[a]) == null ? void 0 : s.call(c, i);
    });
  }, [e]), t];
}
const Jl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ec = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function tc(e) {
  let {
    announcements: t = ec,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Jl
  } = e;
  const {
    announce: i,
    announcement: c
  } = Xl(), s = fr("DndLiveRegion"), [d, f] = te(!1);
  if (J(() => {
    f(!0);
  }, []), Kl(Oe(() => ({
    onDragStart(u) {
      let {
        active: v
      } = u;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(u) {
      let {
        active: v,
        over: h
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [i, t])), !d)
    return null;
  const l = Le.createElement(Le.Fragment, null, Le.createElement(Hl, {
    id: r,
    value: a.draggable
  }), Le.createElement(Gl, {
    id: s,
    announcement: c
  }));
  return n ? Fa(l, n) : l;
}
var De;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function ir() {
}
function $r(e, t) {
  return Oe(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function nc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Oe(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const bt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function rc(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function oc(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function ac(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function ra(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: a
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + a,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + a,
    y: n + r
  }];
}
function ei(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const ic = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = ra(t), i = [];
  for (const c of r) {
    const {
      id: s
    } = c, d = n.get(s);
    if (d) {
      const f = ra(d), l = a.reduce((v, h, m) => v + rc(f[m], h), 0), u = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return i.sort(oc);
};
function sc(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const d = t.width * t.height, f = e.width * e.height, l = c * s, u = l / (d + f - l);
    return Number(u.toFixed(4));
  }
  return 0;
}
const lc = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = [];
  for (const i of r) {
    const {
      id: c
    } = i, s = n.get(c);
    if (s) {
      const d = sc(s, t);
      d > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return a.sort(ac);
};
function cc(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function ti(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : bt;
}
function uc(e) {
  return function(n) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      a[i - 1] = arguments[i];
    return a.reduce((c, s) => ({
      ...c,
      top: c.top + e * s.y,
      bottom: c.bottom + e * s.y,
      left: c.left + e * s.x,
      right: c.right + e * s.x
    }), {
      ...n
    });
  };
}
const dc = /* @__PURE__ */ uc(1);
function fc(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function pc(e, t, n) {
  const r = fc(t);
  if (!r)
    return e;
  const {
    scaleX: a,
    scaleY: i,
    x: c,
    y: s
  } = r, d = e.left - c - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = a ? e.width / a : e.width, u = i ? e.height / i : e.height;
  return {
    width: l,
    height: u,
    top: f,
    right: d + l,
    bottom: f + u,
    left: d
  };
}
const vc = {
  ignoreTransform: !1
};
function Bn(e, t) {
  t === void 0 && (t = vc);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ge(e).getComputedStyle(e);
    f && (n = pc(n, f, l));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: d
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: d
  };
}
function oa(e) {
  return Bn(e, {
    ignoreTransform: !0
  });
}
function hc(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function gc(e, t) {
  return t === void 0 && (t = Ge(e).getComputedStyle(e)), t.position === "fixed";
}
function mc(e, t) {
  t === void 0 && (t = Ge(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function bo(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (go(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!jn(a) || ql(a) || n.includes(a))
      return n;
    const i = Ge(e).getComputedStyle(a);
    return a !== e && mc(a, i) && n.push(a), gc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function ni(e) {
  const [t] = bo(e, 1);
  return t ?? null;
}
function kr(e) {
  return !dr || !e ? null : un(e) ? e : ho(e) ? go(e) || e === dn(e).scrollingElement ? window : jn(e) ? e : null : null;
}
function ri(e) {
  return un(e) ? e.scrollX : e.scrollLeft;
}
function oi(e) {
  return un(e) ? e.scrollY : e.scrollTop;
}
function no(e) {
  return {
    x: ri(e),
    y: oi(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function ai(e) {
  return !dr || !e ? !1 : e === document.scrollingElement;
}
function ii(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ai(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, a = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, c = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: a,
    isLeft: i,
    isBottom: c,
    isRight: s,
    maxScroll: r,
    minScroll: t
  };
}
const bc = {
  x: 0.2,
  y: 0.2
};
function yc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: d
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = bc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: u,
    isRight: v
  } = ii(e), h = {
    x: 0,
    y: 0
  }, m = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + b.height ? (h.y = Ne.Backward, m.y = r * Math.abs((t.top + b.height - i) / b.height)) : !l && d >= t.bottom - b.height && (h.y = Ne.Forward, m.y = r * Math.abs((t.bottom - b.height - d) / b.height)), !v && s >= t.right - b.width ? (h.x = Ne.Forward, m.x = r * Math.abs((t.right - b.width - s) / b.width)) : !u && c <= t.left + b.width && (h.x = Ne.Backward, m.x = r * Math.abs((t.left + b.width - c) / b.width)), {
    direction: h,
    speed: m
  };
}
function _c(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: c
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: c,
      width: i,
      height: c
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: a
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: a,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function si(e) {
  return e.reduce((t, n) => nn(t, no(n)), bt);
}
function wc(e) {
  return e.reduce((t, n) => t + ri(n), 0);
}
function xc(e) {
  return e.reduce((t, n) => t + oi(n), 0);
}
function Oc(e, t) {
  if (t === void 0 && (t = Bn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  ni(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Tc = [["x", ["left", "right"], wc], ["y", ["top", "bottom"], xc]];
class yo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = bo(n), a = si(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of Tc)
      for (const d of c)
        Object.defineProperty(this, d, {
          get: () => {
            const f = s(r), l = a[i] - f;
            return this.rect[d] + l;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Tn {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var a;
    (a = this.target) == null || a.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function Ec(e) {
  const {
    EventTarget: t
  } = Ge(e);
  return e instanceof t ? e : dn(e);
}
function Lr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var it;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(it || (it = {}));
function aa(e) {
  e.preventDefault();
}
function Sc(e) {
  e.stopPropagation();
}
var ue;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ue || (ue = {}));
const li = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter]
}, Cc = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ue.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ue.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ue.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ue.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class _o {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Tn(dn(n)), this.windowListeners = new Tn(Ge(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Oc(r), n(bt);
  }
  handleKeyDown(t) {
    if (Qa(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = li,
        coordinateGetter: c = Cc,
        scrollBehavior: s = "smooth"
      } = a, {
        code: d
      } = t;
      if (i.end.includes(d)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(d)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = r.current, l = f ? {
        x: f.left,
        y: f.top
      } : bt;
      this.referenceCoordinates || (this.referenceCoordinates = l);
      const u = c(t, {
        active: n,
        context: r.current,
        currentCoordinates: l
      });
      if (u) {
        const v = ar(u, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const b of m) {
          const x = t.code, {
            isTop: _,
            isRight: N,
            isLeft: P,
            isBottom: R,
            maxScroll: w,
            minScroll: k
          } = ii(b), O = _c(b), A = {
            x: Math.min(x === ue.Right ? O.right - O.width / 2 : O.right, Math.max(x === ue.Right ? O.left : O.left + O.width / 2, u.x)),
            y: Math.min(x === ue.Down ? O.bottom - O.height / 2 : O.bottom, Math.max(x === ue.Down ? O.top : O.top + O.height / 2, u.y))
          }, z = x === ue.Right && !N || x === ue.Left && !P, Z = x === ue.Down && !R || x === ue.Up && !_;
          if (z && A.x !== u.x) {
            const j = b.scrollLeft + v.x, Y = x === ue.Right && j <= w.x || x === ue.Left && j >= k.x;
            if (Y && !v.y) {
              b.scrollTo({
                left: j,
                behavior: s
              });
              return;
            }
            Y ? h.x = b.scrollLeft - j : h.x = x === ue.Right ? b.scrollLeft - w.x : b.scrollLeft - k.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (Z && A.y !== u.y) {
            const j = b.scrollTop + v.y, Y = x === ue.Down && j <= w.y || x === ue.Up && j >= k.y;
            if (Y && !v.x) {
              b.scrollTo({
                top: j,
                behavior: s
              });
              return;
            }
            Y ? h.y = b.scrollTop - j : h.y = x === ue.Down ? b.scrollTop - w.y : b.scrollTop - k.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, nn(ar(u, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
_o.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = li,
      onActivation: a
    } = t, {
      active: i
    } = n;
    const {
      code: c
    } = e.nativeEvent;
    if (r.start.includes(c)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), a == null || a({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ia(e) {
  return !!(e && "distance" in e);
}
function sa(e) {
  return !!(e && "delay" in e);
}
class wo {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = Ec(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = dn(c), this.documentListeners = new Tn(this.document), this.listeners = new Tn(r), this.windowListeners = new Tn(Ge(c)), this.initialCoordinates = (a = eo(i)) != null ? a : bt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.DragStart, aa), this.windowListeners.add(it.VisibilityChange, this.handleCancel), this.windowListeners.add(it.ContextMenu, aa), this.documentListeners.add(it.Keydown, this.handleKeydown), n) {
      if (ia(n))
        return;
      if (sa(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(it.Click, Sc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(it.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: a,
      props: i
    } = this, {
      onMove: c,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!a)
      return;
    const d = (n = eo(t)) != null ? n : bt, f = ar(a, d);
    if (!r && s) {
      if (sa(s))
        return Lr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (ia(s))
        return s.tolerance != null && Lr(f, s.tolerance) ? this.handleCancel() : Lr(f, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), c(d);
  }
  handleEnd() {
    const {
      onEnd: t
    } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const {
      onCancel: t
    } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Pc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ci extends wo {
  constructor(t) {
    const {
      event: n
    } = t, r = dn(n.target);
    super(t, Pc, r);
  }
}
ci.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Rc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ro;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ro || (ro = {}));
class ui extends wo {
  constructor(t) {
    super(t, Rc, dn(t.event.target));
  }
}
ui.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === ro.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const jr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class di extends wo {
  constructor(t) {
    super(t, jr);
  }
  static setup() {
    return window.addEventListener(jr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(jr.move.name, t);
    };
    function t() {
    }
  }
}
di.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: a
    } = n;
    return a.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var En;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(En || (En = {}));
var sr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(sr || (sr = {}));
function Dc(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = sr.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: u,
    threshold: v
  } = e;
  const h = Ac({
    delta: u,
    disabled: !i
  }), [m, b] = Vl(), x = Q({
    x: 0,
    y: 0
  }), _ = Q({
    x: 0,
    y: 0
  }), N = Oe(() => {
    switch (n) {
      case En.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case En.DraggableRect:
        return a;
    }
  }, [n, a, d]), P = Q(null), R = je(() => {
    const k = P.current;
    if (!k)
      return;
    const O = x.current.x * _.current.x, A = x.current.y * _.current.y;
    k.scrollBy(O, A);
  }, []), w = Oe(() => s === sr.TreeOrder ? [...f].reverse() : f, [s, f]);
  J(
    () => {
      if (!i || !f.length || !N) {
        b();
        return;
      }
      for (const k of w) {
        if ((r == null ? void 0 : r(k)) === !1)
          continue;
        const O = f.indexOf(k), A = l[O];
        if (!A)
          continue;
        const {
          direction: z,
          speed: Z
        } = yc(k, A, N, t, v);
        for (const j of ["x", "y"])
          h[j][z[j]] || (Z[j] = 0, z[j] = 0);
        if (Z.x > 0 || Z.y > 0) {
          b(), P.current = k, m(R, c), x.current = Z, _.current = z;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, _.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      R,
      r,
      b,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      m,
      f,
      w,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const Nc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Ac(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Jr(t);
  return Fn((a) => {
    if (n || !r || !a)
      return Nc;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ne.Backward]: a.x[Ne.Backward] || i.x === -1,
        [Ne.Forward]: a.x[Ne.Forward] || i.x === 1
      },
      y: {
        [Ne.Backward]: a.y[Ne.Backward] || i.y === -1,
        [Ne.Forward]: a.y[Ne.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function Ic(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Fn((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Mc(e, t) {
  return Oe(() => e.reduce((n, r) => {
    const {
      sensor: a
    } = r, i = a.activators.map((c) => ({
      eventName: c.eventName,
      handler: t(c.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var An;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(An || (An = {}));
var oo;
(function(e) {
  e.Optimized = "optimized";
})(oo || (oo = {}));
const la = /* @__PURE__ */ new Map();
function $c(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = te(null), {
    frequency: s,
    measure: d,
    strategy: f
  } = a, l = Q(e), u = x(), v = Nn(u), h = je(function(_) {
    _ === void 0 && (_ = []), !v.current && c((N) => N === null ? _ : N.concat(_.filter((P) => !N.includes(P))));
  }, [v]), m = Q(null), b = Fn((_) => {
    if (u && !n)
      return la;
    if (!_ || _ === la || l.current !== e || i != null) {
      const N = /* @__PURE__ */ new Map();
      for (let P of e) {
        if (!P)
          continue;
        if (i && i.length > 0 && !i.includes(P.id) && P.rect.current) {
          N.set(P.id, P.rect.current);
          continue;
        }
        const R = P.node.current, w = R ? new yo(d(R), R) : null;
        P.rect.current = w, w && N.set(P.id, w);
      }
      return N;
    }
    return _;
  }, [e, i, n, u, d]);
  return J(() => {
    l.current = e;
  }, [e]), J(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), J(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), J(
    () => {
      u || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
        h(), m.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, h, ...r]
  ), {
    droppableRects: b,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function x() {
    switch (f) {
      case An.Always:
        return !1;
      case An.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function fi(e, t) {
  return Fn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function kc(e, t) {
  return fi(e, t);
}
function Lc(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = mo(t), a = Oe(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function pr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = mo(t), a = Oe(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function jc(e) {
  return new yo(Bn(e), e);
}
function ca(e, t, n) {
  t === void 0 && (t = jc);
  const [r, a] = fo(s, null), i = Lc({
    callback(d) {
      if (e)
        for (const f of d) {
          const {
            type: l,
            target: u
          } = f;
          if (l === "childList" && u instanceof HTMLElement && u.contains(e)) {
            a();
            break;
          }
        }
    }
  }), c = pr({
    callback: a
  });
  return St(() => {
    a(), e ? (c == null || c.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), i == null || i.disconnect());
  }, [e]), r;
  function s(d) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = d ?? n) != null ? f : null;
    }
    const l = t(e);
    return JSON.stringify(d) === JSON.stringify(l) ? d : l;
  }
}
function Fc(e) {
  const t = fi(e);
  return ti(e, t);
}
const ua = [];
function Bc(e) {
  const t = Q(e), n = Fn((r) => e ? r && r !== ua && e && t.current && e.parentNode === t.current.parentNode ? r : bo(e) : ua, [e]);
  return J(() => {
    t.current = e;
  }, [e]), n;
}
function qc(e) {
  const [t, n] = te(null), r = Q(e), a = je((i) => {
    const c = kr(i.target);
    c && n((s) => s ? (s.set(c, no(c)), new Map(s)) : null);
  }, []);
  return J(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((d) => {
        const f = kr(d);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, no(f)]) : null;
      }).filter((d) => d != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      c(e), c(i);
    };
    function c(s) {
      s.forEach((d) => {
        const f = kr(d);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), Oe(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => nn(i, c), bt) : si(e) : bt, [e, t]);
}
function da(e, t) {
  t === void 0 && (t = []);
  const n = Q(null);
  return J(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), J(() => {
    const r = e !== bt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? ar(e, n.current) : bt;
}
function Vc(e) {
  J(
    () => {
      if (!dr)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n == null || n();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function Yc(e, t) {
  return Oe(() => e.reduce((n, r) => {
    let {
      eventName: a,
      handler: i
    } = r;
    return n[a] = (c) => {
      i(c, t);
    }, n;
  }, {}), [e, t]);
}
function pi(e) {
  return Oe(() => e ? hc(e) : null, [e]);
}
const Fr = [];
function zc(e, t) {
  t === void 0 && (t = Bn);
  const [n] = e, r = pi(n ? Ge(n) : null), [a, i] = fo(s, Fr), c = pr({
    callback: i
  });
  return e.length > 0 && a === Fr && i(), St(() => {
    e.length ? e.forEach((d) => c == null ? void 0 : c.observe(d)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((d) => ai(d) ? r : new yo(t(d), d)) : Fr;
  }
}
function Wc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return jn(t) ? t : e;
}
function Uc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = te(null), a = je((f) => {
    for (const {
      target: l
    } of f)
      if (jn(l)) {
        r((u) => {
          const v = t(l);
          return u ? {
            ...u,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = pr({
    callback: a
  }), c = je((f) => {
    const l = Wc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, d] = or(c);
  return Oe(() => ({
    nodeRef: s,
    rect: n,
    setRef: d
  }), [n, s, d]);
}
const Hc = [{
  sensor: ci,
  options: {}
}, {
  sensor: _o,
  options: {}
}], Zc = {
  current: {}
}, Qn = {
  draggable: {
    measure: oa
  },
  droppable: {
    measure: oa,
    strategy: An.WhileDragging,
    frequency: oo.Optimized
  },
  dragOverlay: {
    measure: Bn
  }
};
class Sn extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const Gc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Sn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ir
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Qn,
  measureDroppableContainers: ir,
  windowRect: null,
  measuringScheduled: !1
}, Xc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ir,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ir
}, vr = /* @__PURE__ */ dt(Xc), Kc = /* @__PURE__ */ dt(Gc);
function Qc() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Sn()
    }
  };
}
function Jc(e, t) {
  switch (t.type) {
    case De.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case De.DragMove:
      return e.draggable.active ? {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      } : e;
    case De.DragEnd:
    case De.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case De.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, a = new Sn(e.droppable.containers);
      return a.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case De.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: a
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const c = new Sn(e.droppable.containers);
      return c.set(n, {
        ...i,
        disabled: a
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: c
        }
      };
    }
    case De.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new Sn(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function eu(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Se(vr), i = Jr(r), c = Jr(n == null ? void 0 : n.id);
  return J(() => {
    if (!t && !r && i && c != null) {
      if (!Qa(i) || document.activeElement === i.target)
        return;
      const s = a.get(c);
      if (!s)
        return;
      const {
        activatorNode: d,
        node: f
      } = s;
      if (!d.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const l of [d.current, f.current]) {
          if (!l)
            continue;
          const u = Wl(l);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function tu(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function nu(e) {
  return Oe(
    () => ({
      draggable: {
        ...Qn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Qn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Qn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function ru(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = Q(!1), {
    x: c,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  St(() => {
    if (!c && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const l = n(f), u = ti(l, r);
    if (c || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = ni(f);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, r, n]);
}
const vi = /* @__PURE__ */ dt({
  ...bt,
  scaleX: 1,
  scaleY: 1
});
var It;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(It || (It = {}));
const ou = /* @__PURE__ */ La(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: d = !0,
    children: f,
    sensors: l = Hc,
    collisionDetection: u = lc,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const b = fo(Jc, void 0, Qc), [x, _] = b, [N, P] = Ql(), [R, w] = te(It.Uninitialized), k = R === It.Initialized, {
    draggable: {
      active: O,
      nodes: A,
      translate: z
    },
    droppable: {
      containers: Z
    }
  } = x, j = O ? A.get(O) : null, Y = Q({
    initial: null,
    translated: null
  }), U = Oe(() => {
    var ye;
    return O != null ? {
      id: O,
      // It's possible for the active node to unmount while dragging
      data: (ye = j == null ? void 0 : j.data) != null ? ye : Zc,
      rect: Y
    } : null;
  }, [O, j]), G = Q(null), [oe, X] = te(null), [K, le] = te(null), ne = Nn(m, Object.values(m)), E = fr("DndDescribedBy", c), L = Oe(() => Z.getEnabled(), [Z]), y = nu(v), {
    droppableRects: T,
    measureDroppableContainers: C,
    measuringScheduled: D
  } = $c(L, {
    dragging: k,
    dependencies: [z.x, z.y],
    config: y.droppable
  }), S = Ic(A, O), M = Oe(() => K ? eo(K) : null, [K]), q = Un(), H = kc(S, y.draggable.measure);
  ru({
    activeNode: O ? A.get(O) : null,
    config: q.layoutShiftCompensation,
    initialRect: H,
    measure: y.draggable.measure
  });
  const V = ca(S, y.draggable.measure, H), de = ca(S ? S.parentElement : null), F = Q({
    activatorEvent: null,
    active: null,
    activeNode: S,
    collisionRect: null,
    collisions: null,
    droppableRects: T,
    draggableNodes: A,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: Z,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), B = Z.getNodeFor((n = F.current.over) == null ? void 0 : n.id), ee = Uc({
    measure: y.dragOverlay.measure
  }), ie = (r = ee.nodeRef.current) != null ? r : S, ge = k ? (a = ee.rect) != null ? a : V : null, Ae = !!(ee.nodeRef.current && ee.rect), ft = Fc(Ae ? null : V), Fe = pi(ie ? Ge(ie) : null), we = Bc(k ? B ?? S : null), Ve = zc(we), Xe = tu(h, {
    transform: {
      x: z.x - ft.x,
      y: z.y - ft.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: U,
    activeNodeRect: V,
    containerNodeRect: de,
    draggingNodeRect: ge,
    over: F.current.over,
    overlayNodeRect: ee.rect,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve,
    windowRect: Fe
  }), kt = M ? nn(M, z) : null, Pt = qc(we), Lt = da(Pt), jt = da(Pt, [V]), Be = nn(Xe, Lt), pt = ge ? dc(ge, Xe) : null, Rt = U && pt ? u({
    active: U,
    collisionRect: pt,
    droppableRects: T,
    droppableContainers: L,
    pointerCoordinates: kt
  }) : null, pn = ei(Rt, "id"), [nt, Yn] = te(null), Tr = Ae ? Xe : nn(Xe, jt), Er = cc(Tr, (i = nt == null ? void 0 : nt.rect) != null ? i : null, V), zn = je(
    (ye, Ie) => {
      let {
        sensor: Me,
        options: vt
      } = Ie;
      if (G.current == null)
        return;
      const Ye = A.get(G.current);
      if (!Ye)
        return;
      const ze = ye.nativeEvent, rt = new Me({
        active: G.current,
        activeNode: Ye,
        event: ze,
        options: vt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: F,
        onStart(We) {
          const Ft = G.current;
          if (Ft == null)
            return;
          const Bt = A.get(Ft);
          if (!Bt)
            return;
          const {
            onDragStart: qt
          } = ne.current, Xt = {
            active: {
              id: Ft,
              data: Bt.data,
              rect: Y
            }
          };
          hn(() => {
            qt == null || qt(Xt), w(It.Initializing), _({
              type: De.DragStart,
              initialCoordinates: We,
              active: Ft
            }), N({
              type: "onDragStart",
              event: Xt
            });
          });
        },
        onMove(We) {
          _({
            type: De.DragMove,
            coordinates: We
          });
        },
        onEnd: Tt(De.DragEnd),
        onCancel: Tt(De.DragCancel)
      });
      hn(() => {
        X(rt), le(ye.nativeEvent);
      });
      function Tt(We) {
        return async function() {
          const {
            active: Bt,
            collisions: qt,
            over: Xt,
            scrollAdjustedTranslate: Hn
          } = F.current;
          let Vt = null;
          if (Bt && Hn) {
            const {
              cancelDrop: Yt
            } = ne.current;
            Vt = {
              activatorEvent: ze,
              active: Bt,
              collisions: qt,
              delta: Hn,
              over: Xt
            }, We === De.DragEnd && typeof Yt == "function" && await Promise.resolve(Yt(Vt)) && (We = De.DragCancel);
          }
          G.current = null, hn(() => {
            _({
              type: We
            }), w(It.Uninitialized), Yn(null), X(null), le(null);
            const Yt = We === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Vt) {
              const g = ne.current[Yt];
              g == null || g(Vt), N({
                type: Yt,
                event: Vt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [A]
  ), Sr = je((ye, Ie) => (Me, vt) => {
    const Ye = Me.nativeEvent, ze = A.get(vt);
    if (
      // Another sensor is already instantiating
      G.current !== null || // No active draggable
      !ze || // Event has already been captured
      Ye.dndKit || Ye.defaultPrevented
    )
      return;
    const rt = {
      active: ze
    };
    ye(Me, Ie.options, rt) === !0 && (Ye.dndKit = {
      capturedBy: Ie.sensor
    }, G.current = vt, zn(Me, Ie));
  }, [A, zn]), Wn = Mc(l, Sr);
  Vc(l), St(() => {
    V && R === It.Initializing && w(It.Initialized);
  }, [V, R]), J(
    () => {
      const {
        onDragMove: ye
      } = ne.current, {
        active: Ie,
        activatorEvent: Me,
        collisions: vt,
        over: Ye
      } = F.current;
      if (!Ie || !Me)
        return;
      const ze = {
        active: Ie,
        activatorEvent: Me,
        collisions: vt,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: Ye
      };
      hn(() => {
        ye == null || ye(ze), N({
          type: "onDragMove",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Be.x, Be.y]
  ), J(
    () => {
      const {
        active: ye,
        activatorEvent: Ie,
        collisions: Me,
        droppableContainers: vt,
        scrollAdjustedTranslate: Ye
      } = F.current;
      if (!ye || G.current == null || !Ie || !Ye)
        return;
      const {
        onDragOver: ze
      } = ne.current, rt = vt.get(pn), Tt = rt && rt.rect.current ? {
        id: rt.id,
        rect: rt.rect.current,
        data: rt.data,
        disabled: rt.disabled
      } : null, We = {
        active: ye,
        activatorEvent: Ie,
        collisions: Me,
        delta: {
          x: Ye.x,
          y: Ye.y
        },
        over: Tt
      };
      hn(() => {
        Yn(Tt), ze == null || ze(We), N({
          type: "onDragOver",
          event: We
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pn]
  ), St(() => {
    F.current = {
      activatorEvent: K,
      active: U,
      activeNode: S,
      collisionRect: pt,
      collisions: Rt,
      droppableRects: T,
      draggableNodes: A,
      draggingNode: ie,
      draggingNodeRect: ge,
      droppableContainers: Z,
      over: nt,
      scrollableAncestors: we,
      scrollAdjustedTranslate: Be
    }, Y.current = {
      initial: ge,
      translated: pt
    };
  }, [U, S, Rt, pt, A, ie, ge, T, Z, nt, we, Be]), Dc({
    ...q,
    delta: z,
    draggingRect: pt,
    pointerCoordinates: kt,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve
  });
  const Cr = Oe(() => ({
    active: U,
    activeNode: S,
    activeNodeRect: V,
    activatorEvent: K,
    collisions: Rt,
    containerNodeRect: de,
    dragOverlay: ee,
    draggableNodes: A,
    droppableContainers: Z,
    droppableRects: T,
    over: nt,
    measureDroppableContainers: C,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve,
    measuringConfiguration: y,
    measuringScheduled: D,
    windowRect: Fe
  }), [U, S, V, K, Rt, de, ee, A, Z, T, nt, C, we, Ve, y, D, Fe]), vn = Oe(() => ({
    activatorEvent: K,
    activators: Wn,
    active: U,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: E
    },
    dispatch: _,
    draggableNodes: A,
    over: nt,
    measureDroppableContainers: C
  }), [K, Wn, U, V, _, E, A, nt, C]);
  return Le.createElement(Ja.Provider, {
    value: P
  }, Le.createElement(vr.Provider, {
    value: vn
  }, Le.createElement(Kc.Provider, {
    value: Cr
  }, Le.createElement(vi.Provider, {
    value: Er
  }, f)), Le.createElement(eu, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Le.createElement(tc, {
    ...s,
    hiddenTextDescribedById: E
  }));
  function Un() {
    const ye = (oe == null ? void 0 : oe.autoScrollEnabled) === !1, Ie = typeof d == "object" ? d.enabled === !1 : d === !1, Me = k && !ye && !Ie;
    return typeof d == "object" ? {
      ...d,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), au = /* @__PURE__ */ dt(null), fa = "button", iu = "Droppable";
function su(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = fr(iu), {
    activators: c,
    activatorEvent: s,
    active: d,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: u,
    over: v
  } = Se(vr), {
    role: h = fa,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, x = (d == null ? void 0 : d.id) === t, _ = Se(x ? vi : au), [N, P] = or(), [R, w] = or(), k = Yc(c, t), O = Nn(n);
  St(
    () => (u.set(t, {
      id: t,
      key: i,
      node: N,
      activatorNode: R,
      data: O
    }), () => {
      const z = u.get(t);
      z && z.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const A = Oe(() => ({
    role: h,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": x && h === fa ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, b, x, m, l.draggable]);
  return {
    active: d,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: A,
    isDragging: x,
    listeners: r ? void 0 : k,
    node: N,
    over: v,
    setNodeRef: P,
    setActivatorNodeRef: w,
    transform: _
  };
}
const lu = "Droppable", cu = {
  timeout: 25
};
function hi(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = fr(lu), {
    active: c,
    dispatch: s,
    over: d,
    measureDroppableContainers: f
  } = Se(vr), l = Q({
    disabled: n
  }), u = Q(!1), v = Q(null), h = Q(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: x
  } = {
    ...cu,
    ...a
  }, _ = Nn(b ?? r), N = je(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(_.current) ? _.current : [_.current]), h.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), P = pr({
    callback: N,
    disabled: m || !c
  }), R = je((A, z) => {
    P && (z && (P.unobserve(z), u.current = !1), A && P.observe(A));
  }, [P]), [w, k] = or(R), O = Nn(t);
  return J(() => {
    !P || !w.current || (P.disconnect(), u.current = !1, P.observe(w.current));
  }, [w, P]), St(
    () => (s({
      type: De.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: w,
        rect: v,
        data: O
      }
    }), () => s({
      type: De.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), J(() => {
    n !== l.current.disabled && (s({
      type: De.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), l.current.disabled = n);
  }, [r, i, n, s]), {
    active: c,
    rect: v,
    isOver: (d == null ? void 0 : d.id) === r,
    node: w,
    over: d,
    setNodeRef: k
  };
}
const uu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, du = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, fu = [ue.Down, ue.Right, ue.Up, ue.Left], pu = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (fu.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((l) => {
      if (!l || l != null && l.disabled)
        return;
      const u = n.get(l.id);
      if (u)
        switch (e.code) {
          case ue.Down:
            a.top < u.top && s.push(l);
            break;
          case ue.Up:
            a.top > u.top + c && s.push(l);
            break;
          case ue.Left:
            a.left >= u.left + u.width && s.push(l);
            break;
          case ue.Right:
            a.left + a.width <= u.left && s.push(l);
            break;
        }
    });
    const d = ic({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = ei(d, "id");
    if (f != null) {
      const l = r.get(f), u = l == null ? void 0 : l.node.current, v = l == null ? void 0 : l.rect.current;
      if (u && v)
        return ((i = l.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, gi = dt(), On = (e, t) => Re.map(e, (n) => {
  var r;
  if (ut(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return On(n.props.children, t);
  }
}), vu = {
  onDragStart({ active: e }) {
    return `Se ha agarrado el elemento arrastrable ${e.data.current.label}.`;
  },
  onDragOver({ active: e, over: t }) {
    return t ? `El elemento arrastrable ${e.data.current.label} se movió sobre la área desplegable ${t.data.current.label}.` : `El elemento arrastrable ${e.data.current.label} ya no está sobre una área desplegable.`;
  },
  onDragEnd({ active: e, over: t }) {
    return t ? `El elemento arrastrable ${e.data.current.label} se soltó sobre la área desplegable ${t.data.current.label}.` : `El elemento arrastrable item ${e.data.current.label} se eliminó.`;
  },
  onDragCancel({ active: e }) {
    return `Se cancelo el arrastre. El elemento arrastrable ${e.data.current.label} se eliminó.`;
  }
}, mi = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: r,
  reboot: a,
  propValidate: i,
  modifiers: c,
  screenReaderInstructions: s,
  announcements: d,
  defaultState: f,
  defaultValidate: l,
  onState: u,
  id: v
}) => {
  const [h, m] = te([]), [b, x] = te(null), [_, N] = te(
    () => Object.keys(f).length > 0 ? f : R()
  ), P = Q(!1);
  function R() {
    return [
      ...On(e, "droppable"),
      ...On(e, "general-draggable")
    ].reduce(
      (j, Y) => ({
        ...j,
        [Y.props.id]: Y.props.children ? [
          ...On(Y.props.children, "draggable").map(
            (U) => U.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const w = Object.freeze({
    restrictToVerticalAxis: du,
    restrictToHorizontalAxis: uu
  }), k = nc(
    $r(ui),
    $r(di),
    $r(_o, {
      coordinateGetter: pu
    })
  ), O = (j, Y) => {
    const U = Object.keys(_).pop();
    let G = [...h];
    if (U === j.id && h.includes(Y) && (G = h.filter((oe) => oe !== Y)), U !== j.id && (G = [
      ...h.filter((oe) => oe !== Y),
      j.data.current.validate.includes(Y) ? Y : ""
    ].filter((oe) => !!oe)), !t) {
      const oe = _[j.id][0];
      G = oe ? G.filter((X) => X !== oe) : G;
    }
    n && n({ validate: [...G], active: !0 }), m(G);
  }, A = (j) => j in _ ? j : Object.keys(_).find((Y) => _[Y].includes(j)), z = ({ active: j, over: Y }) => {
    if (!Y)
      return;
    x(null);
    const U = Object.keys(_).pop(), G = A(Y.id), oe = A(j.id);
    oe !== G && (O(Y, j.id), N((X) => {
      P.current = !0;
      const K = X[oe].filter(
        (E) => E !== j.id
      ), le = [...X[G]];
      return t ? {
        ...X,
        [oe]: K,
        [G]: [...le, j.id]
      } : {
        ...{
          ...X,
          [oe]: K,
          [G]: G === U ? [...le, j.id] : [j.id]
        },
        ...G !== U && X[G].length > 0 && {
          [U]: [
            ...X[U].filter((E) => E !== j.id),
            ...X[G]
          ]
        }
      };
    }));
  }, Z = (j) => Re.map(j, (Y) => {
    if (!Y.props)
      return Y;
    if (Y.props.__TYPE !== "draggable")
      return Y.props.id in _ && _[Y.props.id].length > 0 ? Pe(Y, { ...Y.props }, [
        ..._[Y.props.id].map(
          (U) => On(e, "draggable").filter(
            (G) => G.props.id === U
          )
        ).flat()
      ]) : Y.props.children ? Pe(Y, {
        ...Y.props,
        children: Z(Y.props.children)
      }) : Y;
  });
  return J(() => {
    a && (N(() => R()), m([]), n && n({ validate: [], active: !1 }));
  }, [a]), J(() => {
    Object.keys(f).length !== 0 && N(f);
  }, [f]), J(() => {
    l.length !== 0 && m(l);
  }, [l]), J(() => {
    u && P.current && (P.current = !1, u({
      state: { key: v, newObjectState: { ..._ }, validateId: h }
    }));
  }, [u, _]), /* @__PURE__ */ p(
    gi.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: b
      },
      children: /* @__PURE__ */ p(
        ou,
        {
          sensors: k,
          accessibility: {
            announcements: d,
            screenReaderInstructions: {
              draggable: s
            }
          },
          onDragStart: ({ active: j }) => x(j.id),
          onDragEnd: z,
          onDragCancel: () => x(null),
          ...c && { modifiers: [w[c]] },
          children: Z(e)
        }
      )
    }
  );
};
mi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: vu,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar."
};
mi.propTypes = {
  children: o.oneOfType([
    o.element,
    o.arrayOf(o.element),
    o.node,
    o.arrayOf(o.node)
  ]),
  multipleDrags: o.bool,
  onValidate: o.func,
  reboot: o.bool,
  validate: o.bool.isRequired,
  propValidate: o.string.isRequired,
  modifiers: o.oneOf([
    "restrictToVerticalAxis",
    "restrictToHorizontalAxis"
  ]),
  screenReaderInstructions: o.string.isRequired,
  announcements: o.object.isRequired,
  defaultState: o.object,
  defaultValidate: o.array,
  onState: o.func,
  id: o.string
};
const hu = "_pop_1elvh_1", rn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: hu
}, bi = ({
  children: e,
  id: t,
  addClass: n,
  dragging: r,
  label: a,
  attribute: i,
  disabledDefaultAttributes: c,
  element: s,
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = s || "div", { listId: v, propValidate: h, validate: m, isDragging: b } = Se(gi), { attributes: x, listeners: _, setNodeRef: N, transform: P } = su({
    id: t,
    disabled: m,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    u,
    {
      id: t,
      ref: N,
      "data-type": f,
      className: re({
        [rn["c-draggable"]]: !d,
        [`${r} ${rn["is-draggable--active-animation"]}`]: b === t && !d,
        [n]: n
      }),
      style: { transform: to.Translate.toString(P) },
      ...m && { [h]: !!v.includes(t) },
      ...!c && { ...x },
      ..._,
      ...l,
      children: e
    }
  );
};
bi.defaultProps = {
  __TYPE: "draggable",
  dragging: rn["c-draggable--active"],
  disabledDefaultAttributes: !1
};
bi.propTypes = {
  children: o.oneOfType([o.node, o.element]),
  id: o.string.isRequired,
  addClass: o.string,
  dragging: o.string,
  label: o.string.isRequired,
  attribute: o.shape({
    role: o.string,
    roleDescription: o.string,
    tabIndex: o.number
  }),
  disabledDefaultAttributes: o.bool,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: be("draggable")
};
const yi = ({
  children: e,
  id: t,
  validate: n,
  addClass: r,
  over: a,
  label: i,
  element: c,
  defaultStyle: s,
  __TYPE: d,
  ...f
}) => {
  const l = c || "div", { isOver: u, setNodeRef: v } = hi({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    l,
    {
      ref: v,
      "data-type": d,
      className: re({
        [rn["c-droppable"]]: !s,
        [a]: u && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
yi.defaultProps = {
  __TYPE: "droppable",
  over: rn["c-droppable--active"]
};
yi.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  id: o.string.isRequired,
  validate: o.array.isRequired,
  addClass: o.string,
  over: o.string,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: be("droppable")
};
const _i = ({
  children: e,
  addClass: t,
  over: n,
  id: r,
  label: a,
  element: i,
  defaultStyle: c,
  __TYPE: s,
  ...d
}) => {
  const f = i || "div", { isOver: l, setNodeRef: u } = hi({
    id: r,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    f,
    {
      id: r,
      ref: u,
      "data-type": s,
      className: re({
        [rn["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...d,
      children: e
    }
  );
};
_i.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  over: o.string,
  id: o.string.isRequired,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: be("general-draggable")
};
_i.defaultProps = {
  __TYPE: "general-draggable",
  id: Ga("unique-id-general-"),
  label: "contendor inicial"
};
const Op = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ I("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" })
  ] }) }),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_highcontrast",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3.0" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3.0" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3.0" })
      ] })
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_highcontrast_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_grayscale",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          }
        ),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_grayscale_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_invert",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
        ] }),
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_red_on_white",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.97 0.52" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.03" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0.06" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_green_on_blue",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.09 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_blue",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0.99 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_white_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  )
] }) }) }), pa = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, xo = _t(({
  url: e,
  alt: t,
  title: n,
  width: r,
  addClass: a,
  noCaption: i,
  defaultStyle: c,
  lazySize: s,
  ...d
}, f) => {
  const [l, u] = te(!1), v = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, h = (b) => u(b), m = l ? v : `${e}`;
  return /* @__PURE__ */ I(
    "figure",
    {
      className: re({
        [pa["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p(
          "img",
          {
            ref: f,
            src: m,
            onError: h,
            alt: t,
            ...s && { ...s },
            ...d
          }
        ),
        !i && /* @__PURE__ */ p("figcaption", { className: pa["c-image__figcaption"], children: /* @__PURE__ */ I("p", { children: [
          /* @__PURE__ */ I("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
});
xo.displayName = "Image";
xo.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
xo.propTypes = {
  url: o.string,
  alt: o.string,
  title: o.string,
  width: o.string,
  addClass: o.string,
  noCaption: o.bool,
  defaultStyle: o.bool,
  lazySize: o.shape({
    width: o.string,
    height: o.string
  })
};
const In = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, wi = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: d, isReadOnly: f, defaultStyle: l, onValue: u }, v) => {
  const h = e || Ct(), m = ({ target: b }) => {
    u && u({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ I(
    "label",
    {
      htmlFor: h,
      className: re({
        [In["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
          " ",
          a,
          " "
        ] }),
        /* @__PURE__ */ p(
          "input",
          {
            id: h,
            ref: v,
            type: t,
            name: h,
            value: n,
            disabled: s,
            required: d,
            placeholder: r,
            autoComplete: "off",
            onChange: m,
            className: re({
              [In["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
wi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
wi.propTypes = {
  id: o.string,
  type: o.oneOf(["text", "email", "password", "date"]),
  value: o.oneOfType([o.string, o.number]),
  placeholder: o.string,
  label: o.string.isRequired,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  isReadOnly: o.bool,
  defaultStyle: o.bool,
  onValue: o.func,
  __TYPE: be("Input")
};
const gu = ({ children: e, onAllValue: t }) => {
  const [n, r] = te([]), a = (s) => r([...n.filter((d) => d.id !== s.id), { ...s }]);
  J(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, d, f) => Re.toArray(s).map((l) => l.props.__TYPE === d ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var d, f;
    return ut(s) ? ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
gu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const xi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [In["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Ze(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
xi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputStyle")
};
xi.defaultProps = {
  __TYPE: "InputStyle"
};
const Oi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [In["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
Oi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputLeftAddon")
};
Oi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Ti = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [In["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
Ti.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputRightAddon")
};
Ti.defaultProps = {
  __TYPE: "InputRightAddon"
};
const mu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, bu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: re({
      [mu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
bu.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const Ei = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
  "a",
  {
    "aria-label": a,
    href: t,
    ...n && { className: `${n}` },
    ...r && { target: "_blank", rel: "noopener" },
    ...i,
    children: e
  }
);
Ei.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Ei.propTypes = {
  children: o.oneOfType([
    o.string,
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  link: o.string,
  isExternal: o.bool,
  label: o.string.isRequired
};
const Si = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, yu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: re({
      [Si["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: Ze(e, ["ListItem"])
  }
);
yu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Ci = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Si["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Ci.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: be("ListItem")
};
Ci.defaultProps = {
  __TYPE: "ListItem"
};
const _u = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Ze(e, ["ListItem"]) });
_u.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const wu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Ze(e, ["ListItem"]) });
wu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var Br = function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}();
function qr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
    function f(l, u) {
      qr(this, f), this._inertManager = u, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Br(f, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(u) {
          this._unmanageNode(u.node);
        }, this), this._observer = /** @type {?} */
        null, this._rootElement = /** @type {?} */
        null, this._managedNodes = /** @type {?} */
        null, this._inertManager = /** @type {?} */
        null;
      }
      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */
    }, {
      key: "_makeSubtreeUnfocusable",
      /**
       * @param {!Node} startNode
       */
      value: function(u) {
        var v = this;
        c(u, function(x) {
          return v._visitNode(x);
        });
        var h = document.activeElement;
        if (!document.body.contains(u)) {
          for (var m = u, b = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          b && (h = b.activeElement);
        }
        u.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(u) {
        if (u.nodeType === Node.ELEMENT_NODE) {
          var v = (
            /** @type {!HTMLElement} */
            u
          );
          v !== this._rootElement && v.hasAttribute("inert") && this._adoptInertRoot(v), (t.call(v, n) || v.hasAttribute("tabindex")) && this._manageNode(v);
        }
      }
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_manageNode",
      value: function(u) {
        var v = this._inertManager.register(u, this);
        this._managedNodes.add(v);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(u) {
        var v = this._inertManager.deregister(u, this);
        v && this._managedNodes.delete(v);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(u) {
        var v = this;
        c(u, function(h) {
          return v._unmanageNode(h);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(u) {
        var v = this._inertManager.getInertRoot(u);
        v || (this._inertManager.setInert(u, !0), v = this._inertManager.getInertRoot(u)), v.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
        }, this);
      }
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_onMutation",
      value: function(u, v) {
        u.forEach(function(h) {
          var m = (
            /** @type {!HTMLElement} */
            h.target
          );
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(x) {
              this._makeSubtreeUnfocusable(x);
            }, this), e.call(h.removedNodes).forEach(function(x) {
              this._unmanageSubtree(x);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && h.attributeName === "inert" && m.hasAttribute("inert")) {
              this._adoptInertRoot(m);
              var b = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(x) {
                m.contains(x.node) && b._manageNode(x.node);
              });
            }
          }
        }, this);
      }
    }, {
      key: "managedNodes",
      get: function() {
        return new Set(this._managedNodes);
      }
      /** @return {boolean} */
    }, {
      key: "hasSavedAriaHidden",
      get: function() {
        return this._savedAriaHidden !== null;
      }
      /** @param {?string} ariaHidden */
    }, {
      key: "savedAriaHidden",
      set: function(u) {
        this._savedAriaHidden = u;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), f;
  }(), a = function() {
    function f(l, u) {
      qr(this, f), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Br(f, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var u = (
            /** @type {!HTMLElement} */
            this._node
          );
          this._savedTabIndex !== null ? u.setAttribute("tabindex", this._savedTabIndex) : u.removeAttribute("tabindex"), this._overrodeFocusMethod && delete u.focus;
        }
        this._node = /** @type {?} */
        null, this._inertRoots = /** @type {?} */
        null, this._destroyed = !0;
      }
      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */
    }, {
      key: "_throwIfDestroyed",
      /**
       * Throw if user tries to access destroyed InertNode.
       */
      value: function() {
        if (this.destroyed)
          throw new Error("Trying to access destroyed InertNode");
      }
      /** @return {boolean} */
    }, {
      key: "ensureUntabbable",
      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      value: function() {
        if (this.node.nodeType === Node.ELEMENT_NODE) {
          var u = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (t.call(u, n)) {
            if (
              /** @type {!HTMLElement} */
              u.tabIndex === -1 && this.hasSavedTabIndex
            )
              return;
            u.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            u.tabIndex), u.setAttribute("tabindex", "-1"), u.nodeType === Node.ELEMENT_NODE && (u.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            u.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            u.tabIndex, u.removeAttribute("tabindex"));
        }
      }
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "addInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.add(u);
      }
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "removeInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.delete(u), this._inertRoots.size === 0 && this.destructor();
      }
    }, {
      key: "destroyed",
      get: function() {
        return (
          /** @type {!InertNode} */
          this._destroyed
        );
      }
    }, {
      key: "hasSavedTabIndex",
      get: function() {
        return this._savedTabIndex !== null;
      }
      /** @return {!Node} */
    }, {
      key: "node",
      get: function() {
        return this._throwIfDestroyed(), this._node;
      }
      /** @param {?number} tabIndex */
    }, {
      key: "savedTabIndex",
      set: function(u) {
        this._throwIfDestroyed(), this._savedTabIndex = u;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), f;
  }(), i = function() {
    function f(l) {
      if (qr(this, f), !l)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Br(f, [{
      key: "setInert",
      value: function(u, v) {
        if (v) {
          if (this._inertRoots.has(u))
            return;
          var h = new r(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, h), !this._document.body.contains(u))
            for (var m = u.parentNode; m; )
              m.nodeType === 11 && s(m), m = m.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var b = this._inertRoots.get(u);
          b.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
        }
      }
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
    }, {
      key: "getInertRoot",
      value: function(u) {
        return this._inertRoots.get(u);
      }
      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */
    }, {
      key: "register",
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h !== void 0 ? h.addInertRoot(v) : h = new a(u, v), this._managedNodes.set(u, h), h;
      }
      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */
    }, {
      key: "deregister",
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(u), h) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var u = e.call(this._document.querySelectorAll("[inert]"));
        u.forEach(function(v) {
          this.setInert(v, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_watchForInert",
      value: function(u, v) {
        var h = this;
        u.forEach(function(m) {
          switch (m.type) {
            case "childList":
              e.call(m.addedNodes).forEach(function(_) {
                if (_.nodeType === Node.ELEMENT_NODE) {
                  var N = e.call(_.querySelectorAll("[inert]"));
                  t.call(_, "[inert]") && N.unshift(_), N.forEach(function(P) {
                    this.setInert(P, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (m.attributeName !== "inert")
                return;
              var b = (
                /** @type {!HTMLElement} */
                m.target
              ), x = b.hasAttribute("inert");
              h.setInert(b, x);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, l, u) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = (
        /** @type {!HTMLElement} */
        f
      );
      l && l(v);
      var h = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (h) {
        c(h, l);
        return;
      }
      if (v.localName == "content") {
        for (var m = (
          /** @type {!HTMLContentElement} */
          v
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], x = 0; x < b.length; x++)
          c(b[x], l);
        return;
      }
      if (v.localName == "slot") {
        for (var _ = (
          /** @type {!HTMLSlotElement} */
          v
        ), N = _.assignedNodes ? _.assignedNodes({ flatten: !0 }) : [], P = 0; P < N.length; P++)
          c(N[P], l);
        return;
      }
    }
    for (var R = f.firstChild; R != null; )
      c(R, l), R = R.nextSibling;
  }
  function s(f) {
    if (!f.querySelector("style#inert-style, link#inert-style")) {
      var l = document.createElement("style");
      l.setAttribute("id", "inert-style"), l.textContent = `
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`, f.appendChild(l);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var d = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(l) {
        d.setInert(this, l);
      }
    });
  }
})();
const hr = dt(), xu = Object.freeze({
  ESC: 27
}), Ou = "section[data-type='Section']:not([hidden]), div:not([hidden])", Pi = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = Q(), i = Q(!1), c = (v) => {
    const h = document.querySelector("#root");
    h.inert = v;
  }, s = (v) => {
    (v.keyCode || v.which) === xu.ESC && u();
  }, d = (v, h) => {
    a.current.classList.replace(v, h);
  }, f = (v) => {
    document.querySelectorAll(v).forEach((m) => {
      m.closest(Ou) && !m.disabled && m.focus();
    });
  }, l = async (v) => {
    try {
      d("animate__fadeIn", "animate__fadeOut"), await new Promise((h) => setTimeout(h, 500)), d("animate__fadeOut", "animate__fadeIn"), c(!1), typeof v == "function" && v(), typeof r == "string" || Array.isArray(r) ? f(r) : typeof r == "object" && r.current.focus();
    } catch (h) {
      console.error("An error occurred:", h);
    }
  }, u = () => {
    l(n(!t));
  };
  return J(() => {
    const v = async () => {
      t || !i.current || (i.current = !1, c(!1), await l());
    };
    return t && (c(!0), i.current = !0, a.current && a.current.focus()), v(), () => {
      document.querySelector("#root").hasAttribute("inert") && c(!1);
    };
  }, [t]), /* @__PURE__ */ p(
    hr.Provider,
    {
      value: { isOpen: t, onKeyDown: s, onCloseModal: u, refModal: a },
      children: /* @__PURE__ */ p(fn, { id: "js-modal", children: Ze(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Pi.defaultProps = {
  isOpen: !1
};
Pi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  finalFocusRef: o.oneOfType([
    o.object,
    o.string,
    o.arrayOf(o.string)
  ]).isRequired
};
const Jn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Ri = ({
  addClass: e,
  children: t,
  onClick: n,
  onKeyDown: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const {
    isOpen: s,
    onKeyDown: d,
    onCloseModal: f,
    refModal: l
  } = Se(hr), u = (h) => {
    n && typeof n == "function" && n(h), f();
  };
  return /* @__PURE__ */ I(
    "div",
    {
      ref: l,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (h) => {
        r && typeof r == "function" && r(h), d(h);
      },
      className: re(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
        {
          [`${Jn["c-modal"]} u-px-3 u-py-3`]: !a,
          [e]: e
        }
      ),
      ...c,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: re({ [Jn["c-modal-container"]]: !a }),
            "data-class": "c-modal__container",
            children: s ? t : null
          }
        ),
        /* @__PURE__ */ p(
          Ut,
          {
            addClass: re({ [Jn["c-close-button"]]: !a }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: u,
            ...a && { defaultStyle: a },
            children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: /* @__PURE__ */ p(
                  "path",
                  {
                    id: "close",
                    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                  }
                )
              }
            ) })
          }
        )
      ]
    }
  );
};
Ri.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  onClick: o.func,
  onKeyDown: o.func,
  defaultStyle: o.bool,
  __TYPE: be("ModalContent")
};
Ri.defaultProps = {
  __TYPE: "ModalContent"
};
const Di = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Se(hr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Jn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !r
    }
  );
};
Di.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: be("ModalOverlay")
};
Di.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Tu = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Se(hr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
Tu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const on = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, gr = dt(), Ni = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [d, f] = te(r || 0), l = () => {
    if (n && d > i)
      return f(i);
    f((m) => m + c);
  }, u = () => {
    if (n && d < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && d === m;
  return J(() => {
    s && s(d);
  }, [d, s]), /* @__PURE__ */ p(
    gr.Provider,
    {
      value: {
        counter: d,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: h,
        onChangeValue: v,
        onIncrementValue: l,
        onDecrementValue: u
      },
      children: /* @__PURE__ */ p("div", { className: `${on["c-number-input"]} ${t ?? ""}`, children: Ze(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
Ni.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
Ni.defaultProps = {
  step: 1
};
const Ai = _t(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: d,
      onIncrementValue: f,
      onDecrementValue: l,
      min: u,
      max: v
    } = Se(gr), h = e || Ct(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: _ }) => {
      if (!isNaN(_.value) && _.value)
        return d(parseInt(_.value));
      d(0);
    }, x = (_) => {
      switch (_.keyCode || _.which) {
        case m.UP:
          f();
          break;
        case m.DOWN:
          l();
          break;
        case m.END:
          d(v);
          break;
        case m.HOME:
          d(u);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: `${on["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ I("span", { className: `${!i && "u-sr-only"}`, children: [
            " ",
            n,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: c,
              type: "text",
              name: t,
              role: "spinbutton",
              inputMode: "decimal",
              pattern: r,
              autoCorrect: "off",
              autoComplete: "off",
              className: on["c-number-input__input"],
              onChange: b,
              onKeyDown: x,
              ...s || s === 0 ? {
                value: s,
                "aria-valuemax": v,
                "aria-valuemin": u,
                "aria-valuenow": s,
                "aria-valuetext": `${s}`
              } : { value: "" }
            }
          )
        ]
      }
    );
  }
);
Ai.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Ai.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: be("NumberInputField")
};
const Ii = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${on["c-number-input__stepper"]} ${t ?? ""}`, children: Ze(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Ii.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberInputStepper")
};
Ii.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Mi = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Se(gr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${on["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Mi.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberDecrementStepper"),
  label: o.string
};
Mi.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const $i = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Se(gr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${on["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
$i.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberIncrementStepper"),
  label: o.string
};
$i.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const Eu = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: r,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: d = !1,
    showLastButton: f = !1,
    siblingCount: l = 1,
    ...u
  } = e, [v, h] = te(r || 1);
  J(() => {
    r && h(r);
  }, [r]);
  const m = (O, A) => {
    h(A), s && s(O, A);
  }, b = (O, A) => {
    const z = A - O + 1;
    return Array.from({ length: z }, (Z, j) => O + j);
  }, x = b(1, Math.min(t, n)), _ = b(
    Math.max(n - t + 1, t + 1),
    n
  ), N = Math.max(
    Math.min(
      // Inicio natural
      v - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), P = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    _.length > 0 ? _[0] - 2 : n - 1
  ), R = [
    ...d ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...x,
    // Comienza el ellipsis
    ...N > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(N, P),
    // Finaliza el ellipsis
    ...P < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ..._,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], w = (O) => {
    switch (O) {
      case "first":
        return 1;
      case "previous":
        return v - 1;
      case "next":
        return v + 1;
      case "last":
        return n;
      default:
        return null;
    }
  };
  return {
    items: R.map((O) => typeof O == "number" ? {
      onClick: (A) => {
        m(A, O);
      },
      type: "page",
      page: O,
      selected: O === v,
      disabled: a,
      "aria-current": O === v ? "page" : void 0
    } : {
      onClick: (A) => {
        m(A, w(O));
      },
      type: O,
      page: w(O),
      selected: !1,
      disabled: a || O.indexOf("ellipsis") === -1 && (O === "next" || O === "last" ? v >= n : v <= 1)
    }),
    ...u
  };
}, Cn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, Su = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), Cu = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${Su[e]} página`, ki = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = Eu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: re({
        [Cn["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: re({
            [Cn["c-pagination__ul"]]: !r
          }),
          "data-class": "c-pagination__ul",
          children: i.map((c, s) => /* @__PURE__ */ p("li", { "data-class": "c-pagination__ul-li", children: e({
            ...c,
            "aria-label": t(
              c.type,
              c.page,
              c.selected
            ),
            ...r && { defaultStyle: r }
          }) }, `pagination-item-${s}`))
        }
      )
    }
  );
};
ki.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(Oo, { ...e }),
  getItemAriaLabel: Cu
};
ki.propTypes = {
  addClass: o.string,
  boundaryCount: o.number,
  count: o.number,
  defaultPage: o.number,
  disabled: o.bool,
  hideNextButton: o.bool,
  hidePrevButton: o.bool,
  onChange: o.func,
  showFirstButton: o.bool,
  showLastButton: o.bool,
  siblingCount: o.number,
  renderItem: o.func,
  getItemAriaLabel: o.func,
  defaultStyle: o.bool
};
const Oo = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...d }) => {
  const l = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: Cn["c-pagination-item__ellipsis"], children: "..." })
  ) : Pe(
    a,
    {
      disabled: r,
      className: re({
        [Cn["c-pagination-item"]]: !s,
        [Cn["c-pagination-item--selected"]]: !s && c,
        [n]: n
      }),
      ...a.props,
      ...d
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      l ? i ? /* @__PURE__ */ p(xe, { path: l }, t) : /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: l }) }, t) : null
    ]
  );
};
Oo.propTypes = {
  page: o.number,
  type: o.string,
  addClass: o.string,
  disabled: o.bool,
  selected: o.bool,
  element: o.oneOfType([o.element, o.node, o.string]),
  defaultStyle: o.bool,
  icons: o.shape({
    first: o.string,
    last: o.string,
    next: o.string,
    previous: o.string
  })
};
Oo.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const en = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, mr = dt(), Pu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = te(null), s = Q([]), d = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, u = () => [...s.current].reduce((h, m, b) => [...h, b + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return J(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    mr.Provider,
    {
      value: {
        validation: l,
        onToggle: f,
        listId: u(),
        currentSection: v(i),
        getIndexById: v,
        addNewIdToSection: d,
        type: r
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          className: re("video-interpreter-ui-panel", {
            [en["c-panel"]]: !a,
            [n]: n
          }),
          "data-value": i,
          ...r === "carrousel" && {
            role: "group",
            "aria-roledescription": "Slider"
          },
          children: e
        }
      )
    }
  );
};
Pu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element,
    o.arrayOf(o.node),
    o.node,
    o.string
  ]),
  defaultIndex: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  type: o.string
};
const Li = _t(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: d, type: f } = Se(mr), l = Ct(), u = () => {
      document.querySelectorAll("audio").forEach((m) => {
        m.paused || m.pause();
      });
    }, v = Oe(() => {
      const h = c(l);
      return h && u(), h;
    }, [l, c]);
    return J(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ I(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !v,
        "data-type": r,
        "aria-hidden": !v,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: re({
          [en["c-section"]]: !n,
          "video-interpreter-ui-section": "video-interpreter-ui-section",
          [t]: t
        }),
        ...f === "carrousel" && {
          "aria-roledescription": "Sección"
        },
        ...a,
        children: [
          /* @__PURE__ */ I("span", { id: `section-${l}`, className: "u-sr-only", children: [
            "Sección ",
            d(l)
          ] }),
          e
        ]
      }
    );
  }
);
Li.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("Section")
};
Li.defaultProps = {
  __TYPE: "Section"
};
const Ru = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), va = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Du = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Ru[e]} sección`, ji = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: n,
  icons: r,
  label: a,
  orientation: i,
  onValue: c,
  addClass: s,
  getItemAriaLabel: d,
  defaultStyle: f
}) => {
  const { validation: l, onToggle: u, listId: v, currentSection: h } = Se(mr), m = Q([]), b = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), x = {
    previous: (r == null ? void 0 : r.previous) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_before",
        d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
      }
    ),
    next: (r == null ? void 0 : r.next) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_next",
        d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
      }
    )
  }, [_, N] = te([]);
  J(() => {
    v.length !== 0 && N([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const P = (O) => !m.current.includes(O) && O ? m.current = [...m.current, O] : m.current, R = (O) => {
    const A = m.current[0], z = m.current[m.current.length - 1];
    if ((O.keyCode || O.which) === va.LEFT)
      if (O.target === A)
        z.focus();
      else {
        const Z = m.current.indexOf(O.target) - 1;
        m.current[Z].focus();
      }
    else if ((O.keyCode || O.which) === va.RIGHT)
      if (O.target === z)
        A.focus();
      else {
        const Z = m.current.indexOf(O.target) + 1;
        m.current[Z].focus();
      }
  }, w = (O) => {
    u(v.findIndex((A) => A === O)), c !== void 0 && c(O, v.length);
  }, k = _.map((O) => {
    let A = [...v];
    return A = A.pop(), typeof O == "number" ? {
      onClick: (z) => {
        w(O);
      },
      type: "section",
      section: O,
      selected: l(O),
      ref: P,
      onKeyDown: R
    } : {
      onClick: () => {
        w(b[O]);
      },
      type: O,
      section: b[O],
      selected: !1,
      disabled: O === "next" ? h >= A : h <= v[0]
    };
  });
  return J(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ I(st, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: re({
          [en["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(k) : k.map(({ section: O, type: A, selected: z, ...Z }, j) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: re({
              [en["c-navigation__item"]]: !f
            }),
            children: A === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${O}`,
                role: "tab",
                tabIndex: `${z ? 0 : -1}`,
                "aria-selected": z,
                "data-class": "c-navigation__section",
                className: re({
                  [en["c-navigation__section"]]: !f
                }),
                "aria-label": d(A, O, z),
                ...Z
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: re({
                  [en["c-navigation__button"]]: !f
                }),
                "aria-label": d(A, O, z),
                ...Z,
                children: x[A] ? r ? /* @__PURE__ */ p(xe, { path: x[A] }, A) : /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: x[A]
                  }
                ) }, A) : null
              }
            )
          },
          `navigation-section-item-${j}`
        ))
      }
    )
  ] });
};
ji.propTypes = {
  renderItem: o.func,
  showNextButton: o.bool,
  showPrevButton: o.bool,
  icons: o.shape({
    next: o.string,
    previous: o.string
  }),
  label: o.string,
  orientation: o.string,
  onValue: o.func,
  addClass: o.string,
  getItemAriaLabel: o.func,
  defaultStyle: o.bool
};
ji.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Du
};
const Nu = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Se(mr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Nu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Au = {
  "c-paper": "_c-paper_1sbf6_1"
}, Iu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = Q(null);
  return uo(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Au["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Iu.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const Mu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, $u = (e) => {
  document.body.append(e);
}, ku = (e) => {
  const t = Q(null);
  J(() => {
    const r = document.querySelector(`#${e}`), a = r || Mu(e);
    return r || $u(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, fn = ({ children: e, id: t }) => {
  const n = ku(t);
  return Fa(e, n);
};
fn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Lu = "_row_1adiy_1", ju = {
  row: Lu
}, Fu = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${ju.row} ${e ?? ""}`, ...t }));
Fu.propTypes = {
  addClass: o.string
};
const _n = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, Fi = _t(
  ({
    children: e,
    id: t,
    placeholder: n,
    label: r,
    icon: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: d,
    onChoise: f,
    defaultValue: l,
    defaultStyle: u
  }, v) => {
    const h = t || Ct(), m = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: re({
          [_n["c-select-label"]]: !u,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ I("div", { className: _n["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ I(
              "select",
              {
                id: h,
                ref: v,
                name: h,
                defaultValue: l,
                className: re({
                  [_n["c-select"]]: !u
                }),
                "data-class": "c-select",
                onChange: m,
                disabled: s,
                required: d,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  Ze(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              xe,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: re({ [_n["c-select__icon"]]: !u })
              }
            ) : /* @__PURE__ */ p(
              xe,
              {
                "data-class": "c-select__icon",
                addClass: re({ [_n["c-select__icon"]]: !u }),
                children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" })
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
Fi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Fi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node
  ]),
  id: o.string,
  placeholder: o.string,
  label: o.string.isRequired,
  icon: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  onChoise: o.func,
  defaultValue: o.string,
  defaultStyle: o.bool,
  __TYPE: be("Select")
};
const Bu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = te([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return J(() => {
    t && t(n);
  }, [n, t]), Re.map(e, (c) => {
    var s;
    return ut(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
Bu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const Vr = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, ha = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Bi = _t(
  ({
    id: e,
    name: t,
    size: n,
    value: r,
    label: a,
    addClass: i,
    isDisabled: c,
    defaultChecked: s,
    isLabelVisible: d,
    onChange: f
  }, l) => {
    const [u, v] = te(!1), h = e || Ct(), m = ({ target: x }) => {
      if (v(x.checked), !!f) {
        if (x.checked) {
          f({ id: x.id, value: x.value });
          return;
        }
        f({ id: x.id, value: "" });
      }
    }, b = (x) => {
      ((x.keyCode || x.which) === ha.SPACE || (x.keyCode || x.which) === ha.ENTER) && v((_) => (f && f(_ ? { id: h, value: "" } : { id: h, value: `${r}` }), !_));
    };
    return J(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: `${Vr["c-label"]} ${Vr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ I("span", { className: `${!d && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: l,
              role: "switch",
              type: "checkbox",
              name: t,
              value: r,
              checked: u,
              "aria-disabled": c,
              className: `${Vr["c-switch"]} ${i ?? ""}`,
              onChange: m,
              onKeyDown: b,
              ...c && { disabled: !0 }
            }
          )
        ]
      }
    );
  }
);
Bi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Bi.propTypes = {
  id: o.string,
  name: o.string,
  size: o.string.isRequired,
  value: o.oneOfType([
    o.string,
    o.number,
    o.bool
  ]),
  label: o.string,
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  isLabelVisible: o.bool,
  onChange: o.func
};
const To = dt(), qu = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = te(0), c = (d) => i(d), s = (d) => a === d;
  return J(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(To.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Ze(e, ["TabList", "TabPanels"]) }) });
};
qu.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const Mn = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, qi = ({
  children: e,
  id: t,
  selected: n,
  addClass: r,
  icon: a,
  addNewRef: i,
  onNavigation: c,
  onClick: s,
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = Q(), { validation: v, onToggle: h } = Se(To), m = v(t), b = (x) => {
    s && s(x), h(t);
  };
  return J(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ I(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: u,
      "data-type": f,
      tabIndex: `${m ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": m,
      onKeyDown: c,
      onClick: b,
      className: re({
        [`${Mn["c-tab__button"]} u-flex`]: !d,
        [r]: r,
        [m]: n
      }),
      ...l,
      children: [
        e,
        a && a(m)
      ]
    }
  );
};
qi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  selected: o.string,
  addClass: o.string,
  icon: o.func,
  addNewRef: o.func,
  onClick: o.func,
  onNavigation: o.func,
  defaultStyle: o.bool,
  __TYPE: be("Tab")
};
qi.defaultProps = {
  __TYPE: "Tab"
};
const ga = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Vi = ({
  children: e,
  addClass: t,
  label: n,
  orientation: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const s = Q([]), d = (u) => s.current = [...s.current, u], f = (u) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((u.keyCode || u.which) === ga.LEFT)
      if (u.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(u.target) - 1;
        s.current[m].focus();
      }
    else if ((u.keyCode || u.which) === ga.RIGHT)
      if (u.target === h)
        v.focus();
      else {
        const m = s.current.indexOf(u.target) + 1;
        s.current[m].focus();
      }
  }, l = Re.map(e, (u, v) => ut(u) ? Pe(u, {
    ...u.props,
    id: v,
    addNewRef: d,
    onNavigation: f
  }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": i,
      "aria-label": n,
      "aria-orientation": r,
      className: re({
        [Mn["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: Ze(l, ["Tab"])
    }
  );
};
Vi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabList")
};
Vi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Yi = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
  const { validation: c } = Se(To), s = c(t);
  return /* @__PURE__ */ p(
    "div",
    {
      id: `panel-${t}`,
      role: "tabpanel",
      tabIndex: 0,
      "data-type": a,
      "aria-hidden": !s,
      hidden: !s,
      "aria-labelledby": `tab-${t}`,
      className: re({
        [Mn["c-tab__panel--active"]]: !r && s,
        [Mn["c-tab__panel"]]: !r && !s,
        ["video-interpreter-ui-tabpanel"]: "video-interpreter-ui-tabpanel",
        [n]: n
      }),
      ...i,
      children: e
    }
  );
};
Yi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabPanel")
};
Yi.defaultProps = {
  __TYPE: "TabPanel"
};
const zi = ({
  children: e,
  addClass: t,
  defaultStyle: n,
  __TYPE: r,
  ...a
}) => {
  const i = Re.map(e, (c, s) => ut(c) ? Pe(c, { ...c.props, id: s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Mn["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: Ze(i, ["TabPanel"])
    }
  );
};
zi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabPanels")
};
zi.defaultProps = {
  __TYPE: "TabPanels"
};
const Yr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Wi = _t(
  ({
    id: e,
    value: t,
    resize: n,
    placeholder: r,
    label: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: d,
    defaultStyle: f,
    onValue: l,
    ...u
  }, v) => {
    const h = e || Ct(), m = ({ target: b }) => {
      l && l({ id: h, value: b.value });
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: re({
          [Yr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "textarea",
            {
              id: h,
              ref: v,
              defaultValue: t,
              disabled: s,
              required: d,
              placeholder: r,
              autoComplete: "off",
              onChange: m,
              "data-class": "c-textarea",
              className: re({
                [`${Yr["c-textarea"]} ${Yr[`c-textarea--${n}`]}`]: !f
              }),
              ...u
            }
          )
        ]
      }
    );
  }
);
Wi.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
Wi.propTypes = {
  id: o.string,
  value: o.string,
  resize: o.oneOf(["none", "horizontal", "vertical"]),
  placeholder: o.string,
  label: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  defaultStyle: o.bool,
  onValue: o.func
};
const Vu = La(({ children: e, theme: t = {} }) => {
  const n = (r) => {
    const a = document.createElement("style");
    document.head.append(a);
    const i = a.sheet;
    let c = "";
    for (const s in r)
      c += `--clr-${s}: ${r[s]};
`;
    i.insertRule(`:root{${c}}`);
  };
  return J(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
Vu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var ma = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ba = typeof window < "u" && window.document && window.document.createElement ? Wt.useLayoutEffect : Wt.useEffect, Ue = "top", lt = "bottom", ct = "right", He = "left", br = "auto", qn = [Ue, lt, ct, He], an = "start", $n = "end", Yu = "clippingParents", Ui = "viewport", wn = "popper", zu = "reference", ya = /* @__PURE__ */ qn.reduce(function(e, t) {
  return e.concat([t + "-" + an, t + "-" + $n]);
}, []), Hi = /* @__PURE__ */ [].concat(qn, [br]).reduce(function(e, t) {
  return e.concat([t, t + "-" + an, t + "-" + $n]);
}, []), Wu = "beforeRead", Uu = "read", Hu = "afterRead", Zu = "beforeMain", Gu = "main", Xu = "afterMain", Ku = "beforeWrite", Qu = "write", Ju = "afterWrite", ao = [Wu, Uu, Hu, Zu, Gu, Xu, Ku, Qu, Ju];
function wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zt(e) {
  var t = tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Je(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ed(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Je(i) || !wt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function td(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], i = t.attributes[r] || {}, c = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = c.reduce(function(d, f) {
        return d[f] = "", d;
      }, {});
      !Je(a) || !wt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(d) {
        a.removeAttribute(d);
      }));
    });
  };
}
const nd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ed,
  effect: td,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var Ht = Math.max, lr = Math.min, sn = Math.round;
function io() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Zi() {
  return !/^((?!chrome|android).)*safari/i.test(io());
}
function ln(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Je(e) && (a = e.offsetWidth > 0 && sn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && sn(r.height) / e.offsetHeight || 1);
  var c = Zt(e) ? tt(e) : window, s = c.visualViewport, d = !Zi() && n, f = (r.left + (d && s ? s.offsetLeft : 0)) / a, l = (r.top + (d && s ? s.offsetTop : 0)) / i, u = r.width / a, v = r.height / i;
  return {
    width: u,
    height: v,
    top: l,
    right: f + u,
    bottom: l + v,
    left: f,
    x: f,
    y: l
  };
}
function So(e) {
  var t = ln(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Gi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Eo(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function yt(e) {
  return tt(e).getComputedStyle(e);
}
function rd(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function $t(e) {
  return ((Zt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function yr(e) {
  return wt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Eo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function _a(e) {
  return !Je(e) || // https://github.com/popperjs/popper-core/issues/837
  yt(e).position === "fixed" ? null : e.offsetParent;
}
function od(e) {
  var t = /firefox/i.test(io()), n = /Trident/i.test(io());
  if (n && Je(e)) {
    var r = yt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = yr(e);
  for (Eo(a) && (a = a.host); Je(a) && ["html", "body"].indexOf(wt(a)) < 0; ) {
    var i = yt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Vn(e) {
  for (var t = tt(e), n = _a(e); n && rd(n) && yt(n).position === "static"; )
    n = _a(n);
  return n && (wt(n) === "html" || wt(n) === "body" && yt(n).position === "static") ? t : n || od(e) || t;
}
function Co(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pn(e, t, n) {
  return Ht(e, lr(t, n));
}
function ad(e, t, n) {
  var r = Pn(e, t, n);
  return r > n ? n : r;
}
function Xi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ki(e) {
  return Object.assign({}, Xi(), e);
}
function Qi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var id = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ki(typeof t != "number" ? t : Qi(t, qn));
};
function sd(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = mt(n.placement), d = Co(s), f = [He, ct].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var u = id(a.padding, n), v = So(i), h = d === "y" ? Ue : He, m = d === "y" ? lt : ct, b = n.rects.reference[l] + n.rects.reference[d] - c[d] - n.rects.popper[l], x = c[d] - n.rects.reference[d], _ = Vn(i), N = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, P = b / 2 - x / 2, R = u[h], w = N - v[l] - u[m], k = N / 2 - v[l] / 2 + P, O = Pn(R, k, w), A = d;
    n.modifiersData[r] = (t = {}, t[A] = O, t.centerOffset = O - k, t);
  }
}
function ld(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Je(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Gi(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const cd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sd,
  effect: ld,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cn(e) {
  return e.split("-")[1];
}
var ud = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function dd(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sn(n * a) / a || 0,
    y: sn(r * a) / a || 0
  };
}
function wa(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, d = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, u = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, b = m === void 0 ? 0 : m, x = typeof l == "function" ? l({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = x.x, b = x.y;
  var _ = c.hasOwnProperty("x"), N = c.hasOwnProperty("y"), P = He, R = Ue, w = window;
  if (f) {
    var k = Vn(n), O = "clientHeight", A = "clientWidth";
    if (k === tt(n) && (k = $t(n), yt(k).position !== "static" && s === "absolute" && (O = "scrollHeight", A = "scrollWidth")), k = k, a === Ue || (a === He || a === ct) && i === $n) {
      R = lt;
      var z = u && k === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[O]
      );
      b -= z - r.height, b *= d ? 1 : -1;
    }
    if (a === He || (a === Ue || a === lt) && i === $n) {
      P = ct;
      var Z = u && k === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      h -= Z - r.width, h *= d ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: s
  }, f && ud), Y = l === !0 ? dd({
    x: h,
    y: b
  }, tt(n)) : {
    x: h,
    y: b
  };
  if (h = Y.x, b = Y.y, d) {
    var U;
    return Object.assign({}, j, (U = {}, U[R] = N ? "0" : "", U[P] = _ ? "0" : "", U.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", U));
  }
  return Object.assign({}, j, (t = {}, t[R] = N ? b + "px" : "", t[P] = _ ? h + "px" : "", t.transform = "", t));
}
function fd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, d = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = yt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return f.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var l = {
    placement: mt(t.placement),
    variation: cn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wa(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wa(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const pd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fd,
  data: {}
};
var Xn = {
  passive: !0
};
function vd(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, d = tt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Xn);
  }), s && d.addEventListener("resize", n.update, Xn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Xn);
    }), s && d.removeEventListener("resize", n.update, Xn);
  };
}
const hd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vd,
  data: {}
};
var gd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function er(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gd[t];
  });
}
var md = {
  start: "end",
  end: "start"
};
function xa(e) {
  return e.replace(/start|end/g, function(t) {
    return md[t];
  });
}
function Po(e) {
  var t = tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ro(e) {
  return ln($t(e)).left + Po(e).scrollLeft;
}
function bd(e, t) {
  var n = tt(e), r = $t(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Zi();
    (f || !f && t === "fixed") && (s = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + Ro(e),
    y: d
  };
}
function yd(e) {
  var t, n = $t(e), r = Po(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ht(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ht(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Ro(e), d = -r.scrollTop;
  return yt(a || n).direction === "rtl" && (s += Ht(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: d
  };
}
function Do(e) {
  var t = yt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Ji(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Do(e) ? e : Ji(yr(e));
}
function Rn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ji(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = tt(r), c = a ? [i].concat(i.visualViewport || [], Do(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Rn(yr(c)))
  );
}
function so(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _d(e, t) {
  var n = ln(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Oa(e, t, n) {
  return t === Ui ? so(bd(e, n)) : Zt(t) ? _d(t, n) : so(yd($t(e)));
}
function wd(e) {
  var t = Rn(yr(e)), n = ["absolute", "fixed"].indexOf(yt(e).position) >= 0, r = n && Je(e) ? Vn(e) : e;
  return Zt(r) ? t.filter(function(a) {
    return Zt(a) && Gi(a, r) && wt(a) !== "body";
  }) : [];
}
function xd(e, t, n, r) {
  var a = t === "clippingParents" ? wd(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(d, f) {
    var l = Oa(e, f, r);
    return d.top = Ht(l.top, d.top), d.right = lr(l.right, d.right), d.bottom = lr(l.bottom, d.bottom), d.left = Ht(l.left, d.left), d;
  }, Oa(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function es(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? mt(r) : null, i = r ? cn(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, d;
  switch (a) {
    case Ue:
      d = {
        x: c,
        y: t.y - n.height
      };
      break;
    case lt:
      d = {
        x: c,
        y: t.y + t.height
      };
      break;
    case ct:
      d = {
        x: t.x + t.width,
        y: s
      };
      break;
    case He:
      d = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      d = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? Co(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case an:
        d[f] = d[f] - (t[l] / 2 - n[l] / 2);
        break;
      case $n:
        d[f] = d[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return d;
}
function kn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, d = s === void 0 ? Yu : s, f = n.rootBoundary, l = f === void 0 ? Ui : f, u = n.elementContext, v = u === void 0 ? wn : u, h = n.altBoundary, m = h === void 0 ? !1 : h, b = n.padding, x = b === void 0 ? 0 : b, _ = Ki(typeof x != "number" ? x : Qi(x, qn)), N = v === wn ? zu : wn, P = e.rects.popper, R = e.elements[m ? N : v], w = xd(Zt(R) ? R : R.contextElement || $t(e.elements.popper), d, l, c), k = ln(e.elements.reference), O = es({
    reference: k,
    element: P,
    strategy: "absolute",
    placement: a
  }), A = so(Object.assign({}, P, O)), z = v === wn ? A : k, Z = {
    top: w.top - z.top + _.top,
    bottom: z.bottom - w.bottom + _.bottom,
    left: w.left - z.left + _.left,
    right: z.right - w.right + _.right
  }, j = e.modifiersData.offset;
  if (v === wn && j) {
    var Y = j[a];
    Object.keys(Z).forEach(function(U) {
      var G = [ct, lt].indexOf(U) >= 0 ? 1 : -1, oe = [Ue, lt].indexOf(U) >= 0 ? "y" : "x";
      Z[U] += Y[oe] * G;
    });
  }
  return Z;
}
function Od(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, d = n.allowedAutoPlacements, f = d === void 0 ? Hi : d, l = cn(r), u = l ? s ? ya : ya.filter(function(m) {
    return cn(m) === l;
  }) : qn, v = u.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(m, b) {
    return m[b] = kn(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[mt(b)], m;
  }, {});
  return Object.keys(h).sort(function(m, b) {
    return h[m] - h[b];
  });
}
function Td(e) {
  if (mt(e) === br)
    return [];
  var t = er(e);
  return [xa(e), t, xa(t)];
}
function Ed(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, d = n.fallbackPlacements, f = n.padding, l = n.boundary, u = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, x = t.options.placement, _ = mt(x), N = _ === x, P = d || (N || !m ? [er(x)] : Td(x)), R = [x].concat(P).reduce(function(C, D) {
      return C.concat(mt(D) === br ? Od(t, {
        placement: D,
        boundary: l,
        rootBoundary: u,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : D);
    }, []), w = t.rects.reference, k = t.rects.popper, O = /* @__PURE__ */ new Map(), A = !0, z = R[0], Z = 0; Z < R.length; Z++) {
      var j = R[Z], Y = mt(j), U = cn(j) === an, G = [Ue, lt].indexOf(Y) >= 0, oe = G ? "width" : "height", X = kn(t, {
        placement: j,
        boundary: l,
        rootBoundary: u,
        altBoundary: v,
        padding: f
      }), K = G ? U ? ct : He : U ? lt : Ue;
      w[oe] > k[oe] && (K = er(K));
      var le = er(K), ne = [];
      if (i && ne.push(X[Y] <= 0), s && ne.push(X[K] <= 0, X[le] <= 0), ne.every(function(C) {
        return C;
      })) {
        z = j, A = !1;
        break;
      }
      O.set(j, ne);
    }
    if (A)
      for (var E = m ? 3 : 1, L = function(D) {
        var S = R.find(function(M) {
          var q = O.get(M);
          if (q)
            return q.slice(0, D).every(function(H) {
              return H;
            });
        });
        if (S)
          return z = S, "break";
      }, y = E; y > 0; y--) {
        var T = L(y);
        if (T === "break")
          break;
      }
    t.placement !== z && (t.modifiersData[r]._skip = !0, t.placement = z, t.reset = !0);
  }
}
const Sd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ed,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ta(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Ea(e) {
  return [Ue, ct, lt, He].some(function(t) {
    return e[t] >= 0;
  });
}
function Cd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = kn(t, {
    elementContext: "reference"
  }), s = kn(t, {
    altBoundary: !0
  }), d = Ta(c, r), f = Ta(s, a, i), l = Ea(d), u = Ea(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": u
  });
}
const Pd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Cd
};
function Rd(e, t, n) {
  var r = mt(e), a = [He, Ue].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [He, ct].indexOf(r) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Dd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Hi.reduce(function(l, u) {
    return l[u] = Rd(u, t.rects, i), l;
  }, {}), s = c[t.placement], d = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const Nd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Dd
};
function Ad(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = es({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Id = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ad,
  data: {}
};
function Md(e) {
  return e === "x" ? "y" : "x";
}
function $d(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, d = n.boundary, f = n.rootBoundary, l = n.altBoundary, u = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, b = m === void 0 ? 0 : m, x = kn(t, {
    boundary: d,
    rootBoundary: f,
    padding: u,
    altBoundary: l
  }), _ = mt(t.placement), N = cn(t.placement), P = !N, R = Co(_), w = Md(R), k = t.modifiersData.popperOffsets, O = t.rects.reference, A = t.rects.popper, z = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, Z = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var U, G = R === "y" ? Ue : He, oe = R === "y" ? lt : ct, X = R === "y" ? "height" : "width", K = k[R], le = K + x[G], ne = K - x[oe], E = h ? -A[X] / 2 : 0, L = N === an ? O[X] : A[X], y = N === an ? -A[X] : -O[X], T = t.elements.arrow, C = h && T ? So(T) : {
        width: 0,
        height: 0
      }, D = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xi(), S = D[G], M = D[oe], q = Pn(0, O[X], C[X]), H = P ? O[X] / 2 - E - q - S - Z.mainAxis : L - q - S - Z.mainAxis, V = P ? -O[X] / 2 + E + q + M + Z.mainAxis : y + q + M + Z.mainAxis, de = t.elements.arrow && Vn(t.elements.arrow), F = de ? R === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, B = (U = j == null ? void 0 : j[R]) != null ? U : 0, ee = K + H - B - F, ie = K + V - B, ge = Pn(h ? lr(le, ee) : le, K, h ? Ht(ne, ie) : ne);
      k[R] = ge, Y[R] = ge - K;
    }
    if (s) {
      var Ae, ft = R === "x" ? Ue : He, Fe = R === "x" ? lt : ct, we = k[w], Ve = w === "y" ? "height" : "width", Xe = we + x[ft], kt = we - x[Fe], Pt = [Ue, He].indexOf(_) !== -1, Lt = (Ae = j == null ? void 0 : j[w]) != null ? Ae : 0, jt = Pt ? Xe : we - O[Ve] - A[Ve] - Lt + Z.altAxis, Be = Pt ? we + O[Ve] + A[Ve] - Lt - Z.altAxis : kt, pt = h && Pt ? ad(jt, we, Be) : Pn(h ? jt : Xe, we, h ? Be : kt);
      k[w] = pt, Y[w] = pt - we;
    }
    t.modifiersData[r] = Y;
  }
}
const kd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $d,
  requiresIfExists: ["offset"]
};
function Ld(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function jd(e) {
  return e === tt(e) || !Je(e) ? Po(e) : Ld(e);
}
function Fd(e) {
  var t = e.getBoundingClientRect(), n = sn(t.width) / e.offsetWidth || 1, r = sn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Bd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Je(t), a = Je(t) && Fd(t), i = $t(t), c = ln(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Do(i)) && (s = jd(t)), Je(t) ? (d = ln(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Ro(i))), {
    x: c.left + s.scrollLeft - d.x,
    y: c.top + s.scrollTop - d.y,
    width: c.width,
    height: c.height
  };
}
function qd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(s) {
      if (!n.has(s)) {
        var d = t.get(s);
        d && a(d);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function Vd(e) {
  var t = qd(e);
  return ao.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Yd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var zt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', zd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Sa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Wd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Sa).filter(function(n, r, a) {
      return a.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Dt(zt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Dt(zt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          ao.indexOf(t.phase) < 0 && console.error(Dt(zt, t.name, '"phase"', "either " + ao.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Dt(zt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Dt(zt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Dt(zt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Dt(zt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Sa.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(Dt(zd, String(t.name), r, r));
      });
    });
  });
}
function Ud(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Hd(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ca = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Zd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Pa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ra() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Gd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Pa : a;
  return function(s, d, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pa, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: d
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, h = {
      state: l,
      setOptions: function(_) {
        var N = typeof _ == "function" ? _(l.options) : _;
        b(), l.options = Object.assign({}, i, l.options, N), l.scrollParents = {
          reference: Zt(s) ? Rn(s) : s.contextElement ? Rn(s.contextElement) : [],
          popper: Rn(d)
        };
        var P = Vd(Hd([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = P.filter(function(j) {
          return j.enabled;
        }), process.env.NODE_ENV !== "production") {
          var R = Ud([].concat(P, l.options.modifiers), function(j) {
            var Y = j.name;
            return Y;
          });
          if (Wd(R), mt(l.options.placement) === br) {
            var w = l.orderedModifiers.find(function(j) {
              var Y = j.name;
              return Y === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = yt(d), O = k.marginTop, A = k.marginRight, z = k.marginBottom, Z = k.marginLeft;
          [O, A, z, Z].some(function(j) {
            return parseFloat(j);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var _ = l.elements, N = _.reference, P = _.popper;
          if (!Ra(N, P)) {
            process.env.NODE_ENV !== "production" && console.error(Ca);
            return;
          }
          l.rects = {
            reference: Bd(N, Vn(P), l.options.strategy === "fixed"),
            popper: So(P)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(j) {
            return l.modifiersData[j.name] = Object.assign({}, j.data);
          });
          for (var R = 0, w = 0; w < l.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && (R += 1, R > 100)) {
              console.error(Zd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, w = -1;
              continue;
            }
            var k = l.orderedModifiers[w], O = k.fn, A = k.options, z = A === void 0 ? {} : A, Z = k.name;
            typeof O == "function" && (l = O({
              state: l,
              options: z,
              name: Z,
              instance: h
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Yd(function() {
        return new Promise(function(x) {
          h.forceUpdate(), x(l);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Ra(s, d))
      return process.env.NODE_ENV !== "production" && console.error(Ca), h;
    h.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function m() {
      l.orderedModifiers.forEach(function(x) {
        var _ = x.name, N = x.options, P = N === void 0 ? {} : N, R = x.effect;
        if (typeof R == "function") {
          var w = R({
            state: l,
            name: _,
            instance: h,
            options: P
          }), k = function() {
          };
          u.push(w || k);
        }
      });
    }
    function b() {
      u.forEach(function(x) {
        return x();
      }), u = [];
    }
    return h;
  };
}
var Xd = [hd, Id, pd, nd, Nd, Sd, kd, cd, Pd], Kd = /* @__PURE__ */ Gd({
  defaultModifiers: Xd
}), Qd = typeof Element < "u", Jd = typeof Map == "function", ef = typeof Set == "function", tf = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function tr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, a;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!tr(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Jd && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!tr(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (ef && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (tf && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[r]))
        return !1;
    if (Qd && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !tr(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var nf = function(t, n) {
  try {
    return tr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, rf = [], _r = function(t, n, r) {
  r === void 0 && (r = {});
  var a = Wt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || rf
  }, c = Wt.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = c[0], d = c[1], f = Wt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var m = h.state, b = Object.keys(m.elements);
        Ts.flushSync(function() {
          d({
            styles: ma(b.map(function(x) {
              return [x, m.styles[x] || {}];
            })),
            attributes: ma(b.map(function(x) {
              return [x, m.attributes[x]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), l = Wt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return nf(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), u = Wt.useRef();
  return ba(function() {
    u.current && u.current.setOptions(l);
  }, [l]), ba(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Kd, h = v(t, n, l);
      return u.current = h, function() {
        h.destroy(), u.current = null;
      };
    }
  }, [t, n, r.createPopper]), {
    state: u.current ? u.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: u.current ? u.current.update : null,
    forceUpdate: u.current ? u.current.forceUpdate : null
  };
};
const zr = {
  "c-toggletip": "_c-toggletip_7t6cz_1",
  "c-toggletip--active": "_c-toggletip--active_7t6cz_17",
  "c-toggletip__arrow": "_c-toggletip__arrow_7t6cz_21"
}, of = Object.freeze({
  ESC: 27
}), ts = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s,
  isVisible: d,
  onClick: f
}) => {
  const [l, u] = te(!1), v = Q(null), h = Q(null), m = t || Ct(), b = (w) => u(!1), x = (w) => {
    u(!l), l && document.activeElement === v.current && !d && setTimeout(() => {
      u((k) => !k);
    }, 100), f && f(w);
  }, _ = (w) => {
    (w.keyCode | w.which) === of.ESC && l && u(!l);
  }, N = Re.map(e, (w) => ut(w) ? Pe(w, {
    ...w.props,
    "aria-describedby": t,
    ref: v,
    onClick: x,
    "data-open": l,
    ...d ? {} : { onBlur: b, onKeyDown: _ }
  }) : null), { styles: P, attributes: R } = _r(
    v.current,
    h.current,
    {
      placement: r,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, c || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: l }
      ]
    }
  );
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(st, { children: e }) : /* @__PURE__ */ I(st, { children: [
    N,
    /* @__PURE__ */ p(fn, { id: "js-toggletip-portal", children: /* @__PURE__ */ I(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${zr["c-toggletip"]} ${l && zr["c-toggletip--active"]} ${a ?? ""}`,
        style: P.popper,
        ...R.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: zr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: P.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
ts.defaultProps = {
  placement: "auto"
};
ts.propTypes = {
  children: o.oneOfType([
    o.node,
    o.element,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  id: o.string,
  label: o.string.isRequired,
  addClass: o.string,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  onClick: o.func,
  isVisible: o.bool,
  placement: o.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ])
};
const Wr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, af = Object.freeze({
  ESC: 27
}), ns = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [d, f] = te(!1), l = Q(null), u = Q(null), v = Q(), h = t || Ct(), m = (O) => {
    d || f(!d);
  }, b = (O) => f(!1), x = (O) => {
    (!d || document.activeElement !== l.current) && f(!d);
  }, _ = () => {
    window.clearTimeout(v.current);
  }, N = (O) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, P = (O) => {
    (O.keyCode | O.which) === af.ESC && d && f(!d);
  }, R = Re.map(e, (O) => ut(O) ? Pe(O, {
    ...O.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: x,
    onMouseLeave: N,
    onKeyDown: P
  }) : null), { styles: w, attributes: k } = _r(
    l.current,
    u.current,
    {
      placement: r,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, c || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: d }
      ]
    }
  );
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(st, { children: e }) : /* @__PURE__ */ I(st, { children: [
    R,
    /* @__PURE__ */ p(fn, { id: "js-tooltip-portal", children: /* @__PURE__ */ I(
      "div",
      {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": d,
        onMouseEnter: _,
        onMouseLeave: N,
        className: `${Wr["c-tooltip"]} ${d && Wr["c-tooltip--active"]} ${a ?? ""}`,
        style: w.popper,
        ...k.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Wr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: w.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
ns.defaultProps = {
  placement: "auto"
};
ns.propTypes = {
  children: o.oneOfType([
    o.node,
    o.element,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  id: o.string,
  label: o.string.isRequired,
  addClass: o.string,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  placement: o.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ])
};
const No = dt(), rs = ({
  steps: e,
  isOpen: t,
  onClose: n,
  finalFocusRef: r,
  hideCloseButton: a,
  hideBackButton: i,
  ariaAttributes: c,
  defaultStyle: s,
  addClass: d
}) => {
  const [f, l] = te(null), u = [
    ...e.reduce(
      (_, N, P) => [
        ..._,
        document.querySelector(N.target) ? { id: P + 1, ...N } : null
      ],
      []
    ).filter((_) => _ !== null)
  ], v = (_) => u.filter((N) => N.id === _).reduce((N, P) => ({ ...N, ...P }), {}), h = (_) => {
    const N = document.querySelector("#root");
    N.inert = _;
  }, m = () => {
    l((_) => _ < u.length ? _ + 1 : _);
  }, b = () => {
    l((_) => _ > 0 + 1 ? _ - 1 : _);
  }, x = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return J(() => {
    t && (l(u.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    No.Provider,
    {
      value: {
        isOpen: t,
        lastId: u.length,
        ...v(f),
        methods: {
          onNext: m,
          onPrev: b,
          onClose: x
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(fn, { id: "js-tour", children: t && /* @__PURE__ */ I(st, { children: [
        /* @__PURE__ */ p(sf, {}),
        /* @__PURE__ */ p(
          os,
          {
            ariaAttributes: c,
            hideCloseButton: a,
            hideBackButton: i,
            addClass: d
          }
        )
      ] }) })
    }
  );
};
rs.defaultProps = {
  isOpen: !1,
  hideCloseButton: !1,
  hideBackButton: !1,
  ariaAttributes: {
    role: "dialog",
    tabIndex: -1,
    "aria-label": "Tour por la plataforma",
    "aria-modal": !0
  },
  defaultStyle: !1
};
rs.propTypes = {
  steps: o.arrayOf(
    o.shape({
      target: o.string.isRequired,
      content: o.oneOfType([o.string, o.element]),
      placement: o.oneOf([
        "auto",
        "auto-start",
        "auto-end",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end"
      ]),
      distance: o.number,
      elementClass: o.string,
      helpLayerClass: o.string
    })
  ),
  isOpen: o.bool,
  onClose: o.func,
  finalFocusRef: o.any.isRequired,
  hideCloseButton: o.bool,
  hideBackButton: o.bool,
  defaultStyle: o.bool,
  addClass: o.string,
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  })
};
const Mt = {
  "c-layout": "_c-layout_15ivg_1",
  "c-tour-content": "_c-tour-content_15ivg_9",
  "c-tour-progress": "_c-tour-progress_15ivg_30",
  "c-tour-progress-bar": "_c-tour-progress-bar_15ivg_38",
  "c-tour-button-container": "_c-tour-button-container_15ivg_49",
  "c-tour-help": "_c-tour-help_15ivg_91",
  "c-tour-number": "_c-tour-number_15ivg_101"
}, os = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: n,
  addClass: r
}) => {
  const {
    isOpen: a,
    lastId: i,
    methods: c,
    id: s,
    target: d,
    content: f,
    placement: l,
    distance: u,
    defaultStyle: v
  } = Se(No), h = Q(), { onClose: m, onPrev: b, onNext: x } = c, { styles: _, attributes: N } = _r(
    document.querySelector(d),
    h.current,
    {
      placement: l,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, u || 8]
          }
        },
        {
          name: "computeStyles",
          options: {
            adaptive: !1
          }
        },
        { name: "eventListeners", enabled: a }
      ]
    }
  ), P = () => ut(f) ? f : Os("p", { role: "status", "aria-live": "polite", className: Mt["tour-description"] }, [
    f
  ]), R = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), x();
  };
  return /* @__PURE__ */ I(st, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: re({ [Mt["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ I(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: _.popper,
        className: re({
          [Mt["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...N.popper,
        children: [
          /* @__PURE__ */ I("span", { className: "u-sr-only", children: [
            "Parte ",
            s,
            " de ",
            i,
            "."
          ] }),
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": !0,
              className: re({ [Mt["c-tour-progress"]]: !v }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: Mt["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${s / i})` }
                }
              )
            }
          ),
          P(),
          /* @__PURE__ */ I(
            "div",
            {
              className: re({
                [Mt["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  Ut,
                  {
                    hasAriaLabel: !0,
                    label: "Salir",
                    "data-class": "c-button__close",
                    onClick: m,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/close.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                !n && /* @__PURE__ */ p(
                  Ut,
                  {
                    disabled: s === 1,
                    hasAriaLabel: !0,
                    label: "Anterior",
                    "data-class": "c-button__before",
                    onClick: b,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_before.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                /* @__PURE__ */ p(
                  Ut,
                  {
                    disabled: s === i,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: R,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_next.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
os.propTypes = {
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  }),
  hideCloseButton: o.bool,
  hideBackButton: o.bool,
  addClass: o.string
};
const sf = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Se(No), [i, c] = te({}), s = () => {
    const {
      x: d,
      y: f,
      width: l,
      height: u
    } = document.querySelector(n).getBoundingClientRect();
    c({
      width: `${l}px`,
      height: `${u}px`,
      top: `${f}px`,
      left: `${d}px`
    });
  };
  return J(() => (n && s(), () => {
    c({});
  }), [n]), J(() => {
    if (!e || !n)
      return;
    const d = (f) => {
      s();
    };
    return e && window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d);
    };
  }, [e, n]), /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Mt["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: Mt["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, lf = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), cf = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || lf, [a, i] = te(!1), [c, s] = te(null);
  return J(() => {
    if (!c) {
      i(!1);
      return;
    }
    const d = new window.IntersectionObserver(
      ([f]) => {
        i(f.isIntersecting);
      },
      {
        /**
             * configuraciones del la IntersectionObserver API.
             */
        root: t,
        rootMargin: n,
        threshold: r
      }
    );
    return d.observe(c), () => {
      d.unobserve(c);
    };
  }, [r, n, t, c]), [s, a];
}, uf = "_active_yhx5o_91", df = "_iconPulse_yhx5o_1", _e = {
  "c-vid": "_c-vid_yhx5o_1",
  "c-vid__caption": "_c-vid__caption_yhx5o_19",
  "c-vid__container": "_c-vid__container_yhx5o_24",
  "c-vid__video": "_c-vid__video_yhx5o_45",
  "no-captions": "_no-captions_yhx5o_57",
  "c-vid__wrapper": "_c-vid__wrapper_yhx5o_61",
  "c-vid__icon-container": "_c-vid__icon-container_yhx5o_71",
  "c-vid__icon": "_c-vid__icon_yhx5o_71",
  active: uf,
  iconPulse: df,
  "c-vid__progress-bg": "_c-vid__progress-bg_yhx5o_113",
  "c-vid__progress-bar": "_c-vid__progress-bar_yhx5o_135",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_yhx5o_141",
  "c-vid__controls": "_c-vid__controls_yhx5o_151",
  "c-vid__button": "_c-vid__button_yhx5o_166",
  "c-vid__volume": "_c-vid__volume_yhx5o_181",
  "c-vid__volume-item": "_c-vid__volume-item_yhx5o_192",
  "c-vid__time": "_c-vid__time_yhx5o_203",
  "c-vid__subtitles": "_c-vid__subtitles_yhx5o_209"
}, as = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...c }) => {
  const [s, d] = te({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, l] = te({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, v] = te({
    state: !1,
    label: "Reproducir video"
  }), [h, m] = te({
    state: !0,
    label: "Volumen"
  }), [b, x] = te(100), [_, N] = te({
    state: !1,
    label: "Ver en pantalla completa"
  }), [P, R] = te(!1), [w, k] = te(100), O = Q(null), A = Q(null), z = Q(null), Z = Q(null), j = Q(null), Y = Q(null), U = Q(null), G = Q(null), [oe, X] = te(!1), [K, le] = cf({
    rootMargin: "20px 10px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }), ne = (B) => {
    B.classList.add(`${_e.active}`), setTimeout(() => {
      B.classList.remove(`${_e.active}`);
    }, 650);
  };
  function E() {
    const B = A.current;
    u.state ? (B.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (B.play(), v({
      state: !0,
      label: "Pausar video"
    })), ne(Y.current);
  }
  function L() {
    const B = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, ee = O.current;
    B ? (N({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (N({
      state: !0,
      label: "Salir de pantalla completa"
    }), ee.requestFullscreen ? ee.requestFullscreen() : ee.mozRequestFullScreen ? ee.mozRequestFullScreen() : ee.webkitRequestFullScreen ? ee.webkitRequestFullScreen() : ee.msRequestFullscreen && ee.msRequestFullscreen());
  }
  function y(B) {
    const ee = parseInt(B, 10), ie = ee >= 3600 ? Math.floor(ee / 3600) : 0, ge = Math.floor((ee - ie * 3600) / 60), Ae = ee - ie * 3600 - ge * 60, ft = S(D(ie)), Fe = S(D(ge)), we = S(D(Ae));
    return {
      hours: ft,
      minutes: Fe,
      seconds: we
    };
  }
  function T(B) {
    const ee = C(B.duration), ie = C(B.currentTime);
    l({
      totalSeconds: B.currentTime,
      hours: parseInt(y(B.currentTime).hours),
      minutes: parseInt(y(B.currentTime).minutes),
      seconds: parseInt(y(B.currentTime).seconds),
      string: ie
    }), d({
      totalSeconds: Math.floor(B.duration),
      hours: parseInt(y(B.duration).hours),
      minutes: parseInt(y(B.duration).minutes),
      seconds: parseInt(y(B.duration).seconds),
      string: ee
    });
  }
  function C(B) {
    return parseInt(B, 10) <= 3600 ? `${y(B).minutes}:${y(B).seconds}` : `${y(B).hours}:${y(B).minutes}:${y(B).seconds}`;
  }
  function D(B) {
    return B < 10 ? B = "0" + B : B;
  }
  function S(B) {
    return isNaN(B) ? "00" : B;
  }
  function M(B) {
    const ee = Z.current, ie = A.current, Ae = B.nativeEvent.offsetX / ee.offsetWidth * ie.duration;
    ie.currentTime = Ae;
  }
  function q(B) {
    const ee = A.current, ie = B.target.value, ge = ie / 100;
    k(ie), x(ie), ee.volume = ge, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const H = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const B = A.current, ee = 0, ie = ee;
      k(ee), B.volume = ie;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const B = A.current, ee = b, ie = ee / 100;
      k(ee), B.volume = ie;
    }
  }, V = function(B) {
    (B.keyCode || B.which) === 32 && E();
  }, de = function(B) {
    const ee = Math.floor(Z.current.getAttribute("aria-valuenow"));
    if (document.activeElement === j.current)
      return null;
    if ((B.keyCode || B.which) === 37) {
      const ie = ee - 5;
      ie >= 0 ? A.current.currentTime = ie : A.current.currentTime = 0, ne(G.current);
    }
    if ((B.keyCode || B.which) === 39) {
      const ie = ee + 5;
      ie >= A.current.duration ? A.current.currentTime = A.current.duration : A.current.currentTime = ie, ne(U.current);
    }
  }, F = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return J(() => {
    const B = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(B, "caption") && X(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(B, "volume") && k(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), J(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: oe, volume: w }));
  }, [oe, w]), J(() => (z.current ? z.current.addEventListener("error", () => {
    R(!0);
  }) : R(!0), e.caption && R(!1), () => {
    z.current && z.current.removeEventListener("error", () => {
      R(!0);
    });
  }), [e.caption]), J(() => {
    u.state && !le && E();
  }, [le]), uo(() => {
    A.current && K(A.current);
  }, [A]), /* @__PURE__ */ I(
    "figure",
    {
      className: `${_e["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (B) => de(B),
      ...c,
      children: [
        /* @__PURE__ */ I("div", { className: `${_e["c-vid__container"]} ${a}`, "data-video-full-screen": _.state, ref: O, children: [
          /* @__PURE__ */ I("div", { className: _e["c-vid__wrapper"], children: [
            /* @__PURE__ */ I(
              "video",
              {
                preload: "none",
                ref: A,
                onTimeUpdate: (B) => T(B.target),
                onLoadedData: (B) => T(B.target),
                onClick: E,
                className: `${_e["c-vid__video"]} ${oe ? "" : _e["no-captions"]}`,
                ...i && { poster: i },
                children: [
                  /* @__PURE__ */ p("source", { src: e.video }),
                  e.caption ? /* @__PURE__ */ p(
                    "track",
                    {
                      ref: z,
                      src: e.caption,
                      label: "Subtítulos en español",
                      kind: "subtitles",
                      srcLang: "es",
                      default: !0
                    }
                  ) : ""
                ]
              }
            ),
            /* @__PURE__ */ I("div", { className: _e["c-vid__icon-container"], children: [
              /* @__PURE__ */ p("div", { ref: G, className: _e["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: Y, className: _e["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: U, className: _e["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: _e["progress-container"], children: /* @__PURE__ */ I(
            "div",
            {
              role: "slider",
              "aria-label": "Progreso del video",
              "aria-valuemin": "0",
              "aria-valuenow": Math.round(f.totalSeconds),
              "aria-valuemax": Math.round(s.totalSeconds),
              "aria-valuetext": F(),
              tabIndex: "0",
              onKeyDown: V,
              className: _e["c-vid__progress-bg"],
              onClick: M,
              ref: Z,
              children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: _e["c-vid__progress-bar"],
                    style: {
                      transform: `scaleX(${isNaN(f.totalSeconds / s.totalSeconds) ? 0 : f.totalSeconds / s.totalSeconds})`
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ I("div", { className: `controls ${_e["c-vid__controls"]}`, children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${_e["c-vid__button"]} js-button-video-play`,
                "aria-label": u.label,
                onClick: E,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${_e["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: H,
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p(
                  "path",
                  {
                    id: "volume_on",
                    d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z"
                  }
                ) : /* @__PURE__ */ p(
                  "path",
                  {
                    id: "volume_off",
                    d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z"
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ I("label", { className: _e["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: _e["c-vid__volume-item"],
                  ref: j,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: w,
                  onChange: q,
                  "aria-valuetext": `${w}%`
                }
              )
            ] }),
            /* @__PURE__ */ I("p", { className: _e["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: P,
                "aria-pressed": P ? void 0 : oe,
                onClick: () => X(!oe),
                "aria-label": "Subtítulos",
                className: `${_e["c-vid__button"]} ${_e["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: P ? /* @__PURE__ */ p(
                  "path",
                  {
                    id: "closed_caption_disabled",
                    d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z"
                  }
                ) : /* @__PURE__ */ p(
                  "path",
                  {
                    id: "closed_caption",
                    d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z"
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ p("button", { className: _e["c-vid__button"], "aria-label": _.label, onClick: L, children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: _.state ? /* @__PURE__ */ p(
              "path",
              {
                id: "fullscreen_exit",
                d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z"
              }
            ) : /* @__PURE__ */ p(
              "path",
              {
                id: "fullscreen",
                d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z"
              }
            ) }) }) })
          ] })
        ] }),
        n && /* @__PURE__ */ I("figcaption", { className: _e["c-vid__caption"], children: [
          /* @__PURE__ */ p("strong", { children: r.title }),
          " ",
          r.content
        ] })
      ]
    }
  );
};
as.propTypes = {
  src: o.shape({
    video: o.string.isRequired,
    caption: o.string
  }),
  width: o.string,
  addClass: o.string,
  hasDescription: o.bool,
  description: o.shape({
    title: o.string,
    content: o.string
  }),
  poster: o.string
};
as.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var Ln = {}, ff = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
}, is = {};
function ss(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ss(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Da() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ss(e)) && (r && (r += " "), r += t);
  return r;
}
const pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Da,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), vf = /* @__PURE__ */ Es(pf);
var Te = {}, xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.dontSetMe = yf;
xt.findInArray = hf;
xt.int = bf;
xt.isFunction = gf;
xt.isNum = mf;
function hf(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function gf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function mf(e) {
  return typeof e == "number" && !isNaN(e);
}
function bf(e) {
  return parseInt(e, 10);
}
function yf(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.browserPrefixToKey = cs;
Gt.browserPrefixToStyle = _f;
Gt.default = void 0;
Gt.getPrefix = ls;
var Ur = ["Moz", "Webkit", "O", "ms"];
function ls() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Ur.length; a++)
    if (cs(n, Ur[a]) in r)
      return Ur[a];
  return "";
}
function cs(e, t) {
  return t ? "".concat(t).concat(wf(e)) : e;
}
function _f(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function wf(e) {
  for (var t = "", n = !0, r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
var xf = ls();
Gt.default = xf;
function lo(e) {
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e);
}
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.addClassName = vs;
Te.addEvent = Ef;
Te.addUserSelectStyles = kf;
Te.createCSSTransform = Af;
Te.createSVGTransform = If;
Te.getTouch = Mf;
Te.getTouchIdentifier = $f;
Te.getTranslation = Ao;
Te.innerHeight = Rf;
Te.innerWidth = Df;
Te.matchesSelector = ps;
Te.matchesSelectorAndParentsTo = Tf;
Te.offsetXYFromParent = Nf;
Te.outerHeight = Cf;
Te.outerWidth = Pf;
Te.removeClassName = hs;
Te.removeEvent = Sf;
Te.removeUserSelectStyles = Lf;
var et = xt, Na = Of(Gt);
function us(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (us = function(a) {
    return a ? n : t;
  })(e);
}
function Of(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || lo(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = us(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Aa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Aa(Object(n), !0).forEach(function(r) {
      fs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kn = "";
function ps(e, t) {
  return Kn || (Kn = (0, et.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, et.isFunction)(e[n]);
  })), (0, et.isFunction)(e[Kn]) ? e[Kn](t) : !1;
}
function Tf(e, t, n) {
  var r = e;
  do {
    if (ps(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function Ef(e, t, n, r) {
  if (e) {
    var a = ds({
      capture: !0
    }, r);
    e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
  }
}
function Sf(e, t, n, r) {
  if (e) {
    var a = ds({
      capture: !0
    }, r);
    e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
  }
}
function Cf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderTopWidth), t += (0, et.int)(n.borderBottomWidth), t;
}
function Pf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderLeftWidth), t += (0, et.int)(n.borderRightWidth), t;
}
function Rf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingTop), t -= (0, et.int)(n.paddingBottom), t;
}
function Df(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingLeft), t -= (0, et.int)(n.paddingRight), t;
}
function Nf(e, t, n) {
  var r = t === t.ownerDocument.body, a = r ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function Af(e, t) {
  var n = Ao(e, t, "px");
  return fs({}, (0, Na.browserPrefixToKey)("transform", Na.default), n);
}
function If(e, t) {
  var n = Ao(e, t, "");
  return n;
}
function Ao(e, t, n) {
  var r = e.x, a = e.y, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (t) {
    var c = "".concat(typeof t.x == "string" ? t.x : t.x + n), s = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    i = "translate(".concat(c, ", ").concat(s, ")") + i;
  }
  return i;
}
function Mf(e, t) {
  return e.targetTouches && (0, et.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, et.findInArray)(e.changedTouches, function(n) {
    return t === n.identifier;
  });
}
function $f(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function kf(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && vs(e.body, "react-draggable-transparent-selection");
  }
}
function Lf(e) {
  if (e)
    try {
      if (e.body && hs(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function vs(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function hs(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var Ot = {};
Object.defineProperty(Ot, "__esModule", {
  value: !0
});
Ot.canDragX = Bf;
Ot.canDragY = qf;
Ot.createCoreData = Yf;
Ot.createDraggableData = zf;
Ot.getBoundPosition = jf;
Ot.getControlPosition = Vf;
Ot.snapToGrid = Ff;
var Qe = xt, tn = Te;
function jf(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  var r = e.props.bounds;
  r = typeof r == "string" ? r : Wf(r);
  var a = Io(e);
  if (typeof r == "string") {
    var i = a.ownerDocument, c = i.defaultView, s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var d = s, f = c.getComputedStyle(a), l = c.getComputedStyle(d);
    r = {
      left: -a.offsetLeft + (0, Qe.int)(l.paddingLeft) + (0, Qe.int)(f.marginLeft),
      top: -a.offsetTop + (0, Qe.int)(l.paddingTop) + (0, Qe.int)(f.marginTop),
      right: (0, tn.innerWidth)(d) - (0, tn.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(l.paddingRight) - (0, Qe.int)(f.marginRight),
      bottom: (0, tn.innerHeight)(d) - (0, tn.outerHeight)(a) - a.offsetTop + (0, Qe.int)(l.paddingBottom) - (0, Qe.int)(f.marginBottom)
    };
  }
  return (0, Qe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Qe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Qe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Qe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Ff(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function Bf(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function qf(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Vf(e, t, n) {
  var r = typeof t == "number" ? (0, tn.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = Io(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, tn.offsetXYFromParent)(r || e, i, n.props.scale);
}
function Yf(e, t, n) {
  var r = e.state, a = !(0, Qe.isNum)(r.lastX), i = Io(e);
  return a ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: n,
    x: t,
    y: n
  } : {
    node: i,
    deltaX: t - r.lastX,
    deltaY: n - r.lastY,
    lastX: r.lastX,
    lastY: r.lastY,
    x: t,
    y: n
  };
}
function zf(e, t) {
  var n = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / n,
    y: e.state.y + t.deltaY / n,
    deltaX: t.deltaX / n,
    deltaY: t.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Wf(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Io(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var wr = {}, xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.default = Uf;
function Uf() {
}
function cr(e) {
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(e);
}
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = void 0;
var Hr = Zf(Le), Ke = Mo(o), Hf = Mo(ja), $e = Te, Nt = Ot, Zr = xt, xn = Mo(xr);
function Mo(e) {
  return e && e.__esModule ? e : { default: e };
}
function gs(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (gs = function(a) {
    return a ? n : t;
  })(e);
}
function Zf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || cr(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = gs(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Ia(e, t) {
  return Qf(e) || Kf(e, t) || Xf(e, t) || Gf();
}
function Gf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ma(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ma(e, t);
  }
}
function Ma(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Kf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, c, s;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      i = !0, s = d;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function Qf(e) {
  if (Array.isArray(e))
    return e;
}
function Jf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ep(e, t, n) {
  return t && $a(e.prototype, t), n && $a(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function np(e) {
  var t = op();
  return function() {
    var r = ur(e), a;
    if (t) {
      var i = ur(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return rp(this, a);
  };
}
function rp(e, t) {
  if (t && (cr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ke(e);
}
function ke(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function op() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ur(e) {
  return ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ur(e);
}
function at(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gt = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, At = gt.mouse, Or = /* @__PURE__ */ function(e) {
  tp(n, e);
  var t = np(n);
  function n() {
    var r;
    Jf(this, n);
    for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
      i[c] = arguments[c];
    return r = t.call.apply(t, [this].concat(i)), at(ke(r), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), at(ke(r), "mounted", !1), at(ke(r), "handleDragStart", function(s) {
      if (r.props.onMouseDown(s), !r.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var d = r.findDOMNode();
      if (!d || !d.ownerDocument || !d.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var f = d.ownerDocument;
      if (!(r.props.disabled || !(s.target instanceof f.defaultView.Node) || r.props.handle && !(0, $e.matchesSelectorAndParentsTo)(s.target, r.props.handle, d) || r.props.cancel && (0, $e.matchesSelectorAndParentsTo)(s.target, r.props.cancel, d))) {
        s.type === "touchstart" && s.preventDefault();
        var l = (0, $e.getTouchIdentifier)(s);
        r.setState({
          touchIdentifier: l
        });
        var u = (0, Nt.getControlPosition)(s, l, ke(r));
        if (u != null) {
          var v = u.x, h = u.y, m = (0, Nt.createCoreData)(ke(r), v, h);
          (0, xn.default)("DraggableCore: handleDragStart: %j", m), (0, xn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, $e.addEvent)(f, At.move, r.handleDrag), (0, $e.addEvent)(f, At.stop, r.handleDragStop));
        }
      }
    }), at(ke(r), "handleDrag", function(s) {
      var d = (0, Nt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
      if (d != null) {
        var f = d.x, l = d.y;
        if (Array.isArray(r.props.grid)) {
          var u = f - r.state.lastX, v = l - r.state.lastY, h = (0, Nt.snapToGrid)(r.props.grid, u, v), m = Ia(h, 2);
          if (u = m[0], v = m[1], !u && !v)
            return;
          f = r.state.lastX + u, l = r.state.lastY + v;
        }
        var b = (0, Nt.createCoreData)(ke(r), f, l);
        (0, xn.default)("DraggableCore: handleDrag: %j", b);
        var x = r.props.onDrag(s, b);
        if (x === !1 || r.mounted === !1) {
          try {
            r.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var _ = document.createEvent("MouseEvents");
            _.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.handleDragStop(_);
          }
          return;
        }
        r.setState({
          lastX: f,
          lastY: l
        });
      }
    }), at(ke(r), "handleDragStop", function(s) {
      if (r.state.dragging) {
        var d = (0, Nt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
        if (d != null) {
          var f = d.x, l = d.y;
          if (Array.isArray(r.props.grid)) {
            var u = f - r.state.lastX || 0, v = l - r.state.lastY || 0, h = (0, Nt.snapToGrid)(r.props.grid, u, v), m = Ia(h, 2);
            u = m[0], v = m[1], f = r.state.lastX + u, l = r.state.lastY + v;
          }
          var b = (0, Nt.createCoreData)(ke(r), f, l), x = r.props.onStop(s, b);
          if (x === !1 || r.mounted === !1)
            return !1;
          var _ = r.findDOMNode();
          _ && r.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(_.ownerDocument), (0, xn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), _ && ((0, xn.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(_.ownerDocument, At.move, r.handleDrag), (0, $e.removeEvent)(_.ownerDocument, At.stop, r.handleDragStop));
        }
      }
    }), at(ke(r), "onMouseDown", function(s) {
      return At = gt.mouse, r.handleDragStart(s);
    }), at(ke(r), "onMouseUp", function(s) {
      return At = gt.mouse, r.handleDragStop(s);
    }), at(ke(r), "onTouchStart", function(s) {
      return At = gt.touch, r.handleDragStart(s);
    }), at(ke(r), "onTouchEnd", function(s) {
      return At = gt.touch, r.handleDragStop(s);
    }), r;
  }
  return ep(n, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var a = this.findDOMNode();
      a && (0, $e.addEvent)(a, gt.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.findDOMNode();
      if (a) {
        var i = a.ownerDocument;
        (0, $e.removeEvent)(i, gt.mouse.move, this.handleDrag), (0, $e.removeEvent)(i, gt.touch.move, this.handleDrag), (0, $e.removeEvent)(i, gt.mouse.stop, this.handleDragStop), (0, $e.removeEvent)(i, gt.touch.stop, this.handleDragStop), (0, $e.removeEvent)(a, gt.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(i);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var a, i, c;
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : Hf.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Hr.cloneElement(Hr.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), n;
}(Hr.Component);
wr.default = Or;
at(Or, "displayName", "DraggableCore");
at(Or, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Ke.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Ke.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Ke.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, n) {
    if (t[n] && t[n].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Ke.default.arrayOf(Ke.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: Ke.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: Ke.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: Ke.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Ke.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Ke.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Ke.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Ke.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Ke.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Zr.dontSetMe,
  style: Zr.dontSetMe,
  transform: Zr.dontSetMe
});
at(Or, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  function t(y) {
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
      return typeof T;
    } : function(T) {
      return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
    }, t(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), e.default = void 0;
  var n = m(Le), r = v(o), a = v(ja), i = v(vf), c = Te, s = Ot, d = xt, f = v(wr), l = v(xr), u = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function h(y) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (h = function(S) {
      return S ? C : T;
    })(y);
  }
  function m(y, T) {
    if (!T && y && y.__esModule)
      return y;
    if (y === null || t(y) !== "object" && typeof y != "function")
      return { default: y };
    var C = h(T);
    if (C && C.has(y))
      return C.get(y);
    var D = {}, S = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in y)
      if (M !== "default" && Object.prototype.hasOwnProperty.call(y, M)) {
        var q = S ? Object.getOwnPropertyDescriptor(y, M) : null;
        q && (q.get || q.set) ? Object.defineProperty(D, M, q) : D[M] = y[M];
      }
    return D.default = y, C && C.set(y, D), D;
  }
  function b() {
    return b = Object.assign || function(y) {
      for (var T = 1; T < arguments.length; T++) {
        var C = arguments[T];
        for (var D in C)
          Object.prototype.hasOwnProperty.call(C, D) && (y[D] = C[D]);
      }
      return y;
    }, b.apply(this, arguments);
  }
  function x(y, T) {
    if (y == null)
      return {};
    var C = _(y, T), D, S;
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(y);
      for (S = 0; S < M.length; S++)
        D = M[S], !(T.indexOf(D) >= 0) && Object.prototype.propertyIsEnumerable.call(y, D) && (C[D] = y[D]);
    }
    return C;
  }
  function _(y, T) {
    if (y == null)
      return {};
    var C = {}, D = Object.keys(y), S, M;
    for (M = 0; M < D.length; M++)
      S = D[M], !(T.indexOf(S) >= 0) && (C[S] = y[S]);
    return C;
  }
  function N(y, T) {
    var C = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols(y);
      T && (D = D.filter(function(S) {
        return Object.getOwnPropertyDescriptor(y, S).enumerable;
      })), C.push.apply(C, D);
    }
    return C;
  }
  function P(y) {
    for (var T = 1; T < arguments.length; T++) {
      var C = arguments[T] != null ? arguments[T] : {};
      T % 2 ? N(Object(C), !0).forEach(function(D) {
        E(y, D, C[D]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C)) : N(Object(C)).forEach(function(D) {
        Object.defineProperty(y, D, Object.getOwnPropertyDescriptor(C, D));
      });
    }
    return y;
  }
  function R(y, T) {
    return z(y) || A(y, T) || k(y, T) || w();
  }
  function w() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function k(y, T) {
    if (y) {
      if (typeof y == "string")
        return O(y, T);
      var C = Object.prototype.toString.call(y).slice(8, -1);
      if (C === "Object" && y.constructor && (C = y.constructor.name), C === "Map" || C === "Set")
        return Array.from(y);
      if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
        return O(y, T);
    }
  }
  function O(y, T) {
    (T == null || T > y.length) && (T = y.length);
    for (var C = 0, D = new Array(T); C < T; C++)
      D[C] = y[C];
    return D;
  }
  function A(y, T) {
    var C = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (C != null) {
      var D = [], S = !0, M = !1, q, H;
      try {
        for (C = C.call(y); !(S = (q = C.next()).done) && (D.push(q.value), !(T && D.length === T)); S = !0)
          ;
      } catch (V) {
        M = !0, H = V;
      } finally {
        try {
          !S && C.return != null && C.return();
        } finally {
          if (M)
            throw H;
        }
      }
      return D;
    }
  }
  function z(y) {
    if (Array.isArray(y))
      return y;
  }
  function Z(y, T) {
    if (!(y instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function j(y, T) {
    for (var C = 0; C < T.length; C++) {
      var D = T[C];
      D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(y, D.key, D);
    }
  }
  function Y(y, T, C) {
    return T && j(y.prototype, T), C && j(y, C), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function U(y, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(T && T.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), T && G(y, T);
  }
  function G(y, T) {
    return G = Object.setPrototypeOf || function(D, S) {
      return D.__proto__ = S, D;
    }, G(y, T);
  }
  function oe(y) {
    var T = le();
    return function() {
      var D = ne(y), S;
      if (T) {
        var M = ne(this).constructor;
        S = Reflect.construct(D, arguments, M);
      } else
        S = D.apply(this, arguments);
      return X(this, S);
    };
  }
  function X(y, T) {
    if (T && (t(T) === "object" || typeof T == "function"))
      return T;
    if (T !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return K(y);
  }
  function K(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function le() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function ne(y) {
    return ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    }, ne(y);
  }
  function E(y, T, C) {
    return T in y ? Object.defineProperty(y, T, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : y[T] = C, y;
  }
  var L = /* @__PURE__ */ function(y) {
    U(C, y);
    var T = oe(C);
    function C(D) {
      var S;
      return Z(this, C), S = T.call(this, D), E(K(S), "onDragStart", function(M, q) {
        (0, l.default)("Draggable: onDragStart: %j", q);
        var H = S.props.onStart(M, (0, s.createDraggableData)(K(S), q));
        if (H === !1)
          return !1;
        S.setState({
          dragging: !0,
          dragged: !0
        });
      }), E(K(S), "onDrag", function(M, q) {
        if (!S.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", q);
        var H = (0, s.createDraggableData)(K(S), q), V = {
          x: H.x,
          y: H.y
        };
        if (S.props.bounds) {
          var de = V.x, F = V.y;
          V.x += S.state.slackX, V.y += S.state.slackY;
          var B = (0, s.getBoundPosition)(K(S), V.x, V.y), ee = R(B, 2), ie = ee[0], ge = ee[1];
          V.x = ie, V.y = ge, V.slackX = S.state.slackX + (de - V.x), V.slackY = S.state.slackY + (F - V.y), H.x = V.x, H.y = V.y, H.deltaX = V.x - S.state.x, H.deltaY = V.y - S.state.y;
        }
        var Ae = S.props.onDrag(M, H);
        if (Ae === !1)
          return !1;
        S.setState(V);
      }), E(K(S), "onDragStop", function(M, q) {
        if (!S.state.dragging)
          return !1;
        var H = S.props.onStop(M, (0, s.createDraggableData)(K(S), q));
        if (H === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", q);
        var V = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, de = !!S.props.position;
        if (de) {
          var F = S.props.position, B = F.x, ee = F.y;
          V.x = B, V.y = ee;
        }
        S.setState(V);
      }), S.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: D.position ? D.position.x : D.defaultPosition.x,
        y: D.position ? D.position.y : D.defaultPosition.y,
        prevPropsPosition: P({}, D.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, D.position && !(D.onDrag || D.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), S;
    }
    return Y(C, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var S, M, q;
        return (S = (M = this.props) === null || M === void 0 || (q = M.nodeRef) === null || q === void 0 ? void 0 : q.current) !== null && S !== void 0 ? S : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var S, M = this.props;
        M.axis, M.bounds;
        var q = M.children, H = M.defaultPosition, V = M.defaultClassName, de = M.defaultClassNameDragging, F = M.defaultClassNameDragged, B = M.position, ee = M.positionOffset;
        M.scale;
        var ie = x(M, u), ge = {}, Ae = null, ft = !!B, Fe = !ft || this.state.dragging, we = B || H, Ve = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Fe ? this.state.x : we.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Fe ? this.state.y : we.y
        };
        this.state.isElementSVG ? Ae = (0, c.createSVGTransform)(Ve, ee) : ge = (0, c.createCSSTransform)(Ve, ee);
        var Xe = (0, i.default)(q.props.className || "", V, (S = {}, E(S, de, this.state.dragging), E(S, F, this.state.dragged), S));
        return /* @__PURE__ */ n.createElement(f.default, b({}, ie, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(q), {
          className: Xe,
          style: P(P({}, q.props.style), ge),
          transform: Ae
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(S, M) {
          var q = S.position, H = M.prevPropsPosition;
          return q && (!H || q.x !== H.x || q.y !== H.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
            position: q,
            prevPropsPosition: H
          }), {
            x: q.x,
            y: q.y,
            prevPropsPosition: P({}, q)
          }) : null;
        }
      )
    }]), C;
  }(n.Component);
  e.default = L, E(L, "displayName", "Draggable"), E(L, "propTypes", P(P({}, f.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: d.dontSetMe,
    style: d.dontSetMe,
    transform: d.dontSetMe
  })), E(L, "defaultProps", P(P({}, f.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(is);
var ms = is, bs = ms.default, ap = ms.DraggableCore;
ff.exports = bs;
Ln.default = bs;
Ln.DraggableCore = ap;
const ip = (e, t, n) => {
  const [r, a] = te({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (l, u = 0) => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const v = t.filter((h) => h.to === l);
      if (v.length > 0) {
        const { slides: h } = v[0], m = h[u < 0 ? 0 : u];
        a(m || i);
      } else
        a(i);
    } else
      a(i);
  }, d = (l, u = 0, v = "") => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const h = t.filter((m) => m.to === l);
      if (h.length > 0) {
        const { slides: m } = h[0], { modals: b } = m[u < 0 ? 0 : u], _ = (b || []).filter((N) => N.id === v)[0];
        a(_ || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const u = [...l].findIndex((x) => !x.hasAttribute("hidden"));
      s(n, u < 0 ? 0 : u);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const x = [...v].findIndex((_) => !_.hasAttribute("hidden"));
        s(n, x < 0 ? 0 : x);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && d(n, u, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && d(n, u, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && d(n, u, b.id);
    }
  };
  return J(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, sp = "_interpreter_gxnug_1", lp = "_close_gxnug_122", cp = "_hide_gxnug_128", up = "_progress_gxnug_219", dp = "_flex_gxnug_229", fp = "_gap_gxnug_286", me = {
  interpreter: sp,
  "interpreter-active": "_interpreter-active_gxnug_23",
  "interpreter-btn": "_interpreter-btn_gxnug_29",
  "interpreter-btn--close": "_interpreter-btn--close_gxnug_44",
  "interpreter-btn--video": "_interpreter-btn--video_gxnug_48",
  "interpreter-btn-disable": "_interpreter-btn-disable_gxnug_61",
  "interpreter-btn-switch": "_interpreter-btn-switch_gxnug_67",
  "interpreter-btn-switch-svg": "_interpreter-btn-switch-svg_gxnug_72",
  "interpreter-dropdown": "_interpreter-dropdown_gxnug_79",
  "interpreter-dropdown-content": "_interpreter-dropdown-content_gxnug_87",
  "interpreter-btndrop": "_interpreter-btndrop_gxnug_121",
  close: lp,
  hide: cp,
  "image-Video": "_image-Video_gxnug_132",
  "c-vid-container": "_c-vid-container_gxnug_136",
  "c-vid": "_c-vid_gxnug_136",
  "c-vid-controls": "_c-vid-controls_gxnug_169",
  "c-vid-controls-text": "_c-vid-controls-text_gxnug_209",
  progress: up,
  flex: dp,
  "progress-bar": "_progress-bar_gxnug_235",
  "c-vid-controls-volume": "_c-vid-controls-volume_gxnug_242",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_gxnug_263",
  "no-captions": "_no-captions_gxnug_274",
  gap: fp
}, ys = ({
  width: e,
  addClass: t,
  image: n,
  pathVideo: r,
  pathname: a
}) => {
  const [i, c] = te("00:00"), [s, d] = te(!1), [f, l] = te(!1), [u, v] = te(!1), { video1: h, video2: m } = ip("body", r, a), [b, x] = te({
    state: !1,
    icon: Gr,
    label: "Reproducir video"
  }), [_, N] = te({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: P } = _;
  function R() {
    const X = s ? Y.current : U.current;
    b.state ? (X.pause(), x({
      state: !1,
      icon: Gr,
      label: "Reproducir video"
    })) : (X.play(), x({
      state: !0,
      icon: gp,
      label: "Pausar video"
    }));
  }
  function w() {
    const X = s ? Y.current : U.current, K = oe.current, le = X.currentTime / X.duration * 100;
    K.style.flexBasis = `${le}%`;
  }
  function k() {
    const X = s ? Y.current : U.current;
    K(X);
    function K(L) {
      const y = le(L.currentTime);
      c(y);
    }
    function le(L) {
      const y = parseInt(L, 10), T = Math.floor(y / 3600), C = Math.floor((y - T * 3600) / 60), D = y - T * 3600 - C * 60, S = E(ne(T)), M = E(ne(C)), q = E(ne(D));
      return `${S}:${M}:${q}`;
    }
    function ne(L) {
      return L < 10 ? L = "0" + L : L;
    }
    function E(L) {
      return isNaN(L) ? "00" : L;
    }
  }
  function O(X) {
    const K = G.current, le = s ? Y.current : U.current, E = X.nativeEvent.offsetX / K.offsetWidth * le.duration;
    le.currentTime = E;
  }
  const A = (X, K) => {
    d(!1), l(!1), K(X), z();
  }, z = () => {
    const X = oe.current;
    X.style.flexBasis = "0%", x({
      state: !1,
      icon: Gr,
      label: "Reproducir video"
    });
  }, Z = (X, K) => {
    const { x: le, y: ne } = _.deltaPosition;
    N({
      ..._,
      deltaPosition: {
        x: le + K.deltaX,
        y: ne + K.deltaY
      }
    });
  };
  J(() => {
    z();
  }, [h, m]);
  const j = Q(null), Y = Q(), U = Q(), G = Q(), oe = Q();
  return /* @__PURE__ */ p(
    Ln,
    {
      nodeRef: j,
      handle: "strong",
      position: P,
      onDrag: Z,
      children: /* @__PURE__ */ I(
        "div",
        {
          ref: j,
          className: `${me.interpreter} ${t ?? ""} ${(s || f) && me["interpreter-active"]}`,
          children: [
            /* @__PURE__ */ I("div", { className: me["interpreter-dropdown"], children: [
              (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ I(
                "button",
                {
                  ...!u && !s && !f && { "data-interpreter-primary-button": !0 },
                  onClick: () => {
                    u || (A(!0, d), v(!0));
                  },
                  className: `${me["interpreter-btn"]} ${me["interpreter-btn-switch"]} ${!s && !f && me["interpreter-btn-disable"]}`,
                  "aria-label": "Intérprete de lenguaje de señas",
                  children: [
                    !s && !f && (n ? /* @__PURE__ */ p("img", { className: me["image-Video"], src: n, alt: "" }) : /* @__PURE__ */ I(
                      "svg",
                      {
                        id: "Capa_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: 0,
                        y: 0,
                        viewBox: "0 0 157.39 157.39",
                        className: me["interpreter-btn-switch-svg"],
                        style: {
                          enableBackground: "new 0 0 157.39 157.39"
                        },
                        xmlSpace: "preserve",
                        "aria-hidden": "true",
                        children: [
                          /* @__PURE__ */ p(
                            "path",
                            {
                              className: "st0",
                              d: "M76.31 74.62s9.79 5.59 11.53 7.69c1.75 2.1 2.45 5.59 0 6.64C85.4 90 48.7 82.31 45.9 81.79c-2.8-.52-4.89 5.61 0 7.26s14.68 2.35 17.83 3.75 4.89 4.89.7 4.54c-4.19-.35-22.02-2.45-25.86-2.8-3.84-.35-6.29 4.89-2.1 6.29 4.19 1.4 22.56 2.1 23.86 2.8s4.94 4.89.5 5.24c-4.44.35-18.07-.7-20.52 0-2.45.7-5.94 6.64 2.1 7.34s19.57 0 22.02 0c2.45 0 4.54 2.45.7 3.15s-11.18 2.1-13.98 3.15c-2.8 1.05-5.59 6.99 2.45 6.29 8.04-.7 43.69-5.59 47.53-5.94 3.84-.35 4.19-2.8 5.59-8.39s2.8-13.98 2.8-16.78-1.4-5.24-3.5-7.69-6.64-7.69-12.93-12.93c-6.29-5.24-11.03-7.09-12.93-8.04-3.5-1.74-6.84 3.83-3.85 5.59z"
                            }
                          ),
                          /* @__PURE__ */ p(
                            "path",
                            {
                              className: "st0",
                              d: "M119.84 50.55c-.52-3.87-7.01-3.51-6.79-.04 0 0 .87 11.24.12 13.86-.75 2.62-3.25 5.17-5.49 3.73-2.24-1.43-16.5-36.11-17.64-38.72-1.14-2.61-7.39-.89-6.01 4.08 1.39 4.97 6.31 13.46 6.92 16.85s-1.3 6.8-3.37 3.13-10.34-19.58-12.22-22.96-7.58-2.45-6.38 1.8c1.2 4.25 10.94 19.84 11.1 21.31.15 1.47-1.27 6.83-4.06 3.36-2.78-3.48-9.58-15.34-11.53-16.97-1.95-1.63-8.83-1.18-4.89 5.86s11 16.19 12.37 18.21c1.37 2.02.53 5.13-2.21 2.35-2.74-2.79-8.02-8.07-10.46-9.8s-8.92-.7-3.83 5.56c2.89 3.55 11.88 13.68 19.57 22.33 4.28.22 10.16.41 9.83-.26-.52-1.05-10.31-6.82-12.06-8.91-1.75-2.1-1.05-6.64 1.05-8.74 2.1-2.1 6.47-1.92 9.26-.7 2.8 1.22 16.78 10.49 19.75 13.98 1.89 2.22 6.31 7.68 9.29 11.37.17-.11.33-.21.47-.3 2.31-1.57 3.55-4.1 4.4-7.21s2.63-9.81 3.43-17.96c.8-8.14-.34-13.1-.62-15.21z"
                            }
                          ),
                          /* @__PURE__ */ p(
                            "path",
                            {
                              className: "st0",
                              d: "M78.7 157.39C35.3 157.39 0 122.09 0 78.7 0 35.3 35.3 0 78.7 0c43.39 0 78.69 35.3 78.69 78.7 0 43.39-35.3 78.69-78.69 78.69zm0-145.13c-36.63 0-66.44 29.8-66.44 66.44s29.8 66.44 66.44 66.44 66.44-29.8 66.44-66.44-29.81-66.44-66.44-66.44z"
                            }
                          )
                        ]
                      }
                    )),
                    /* @__PURE__ */ p(pp, {}),
                    (s || f) && (s ? "1" : "2")
                  ]
                }
              ),
              (s || f) && /* @__PURE__ */ I(st, { children: [
                /* @__PURE__ */ I(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${me["interpreter-btn"]} ${me["interpreter-btn--video"]}`,
                    onClick: () => {
                      f && A(!0, d);
                    },
                    children: [
                      "1",
                      /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(ka, {}) })
                    ]
                  }
                ),
                /* @__PURE__ */ I(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${me["interpreter-btn"]} ${me["interpreter-btn--video"]}`,
                    onClick: () => {
                      s && A(!0, l);
                    },
                    children: [
                      "2",
                      /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(ka, {}) })
                    ]
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${me["interpreter-btn"]}`,
                    onClick: () => !1,
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1),
                    "aria-label": "Arrastrar video",
                    children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(hp, {}) })
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    className: `${me["interpreter-btn"]} ${me["interpreter-btn--close"]}`,
                    onClick: () => {
                      d(!1), l(!1), N({
                        deltaPosition: {
                          x: 0,
                          y: 0
                        }
                      }), v(!1);
                    },
                    onFocus: () => v(!0),
                    onBlur: () => v(!0),
                    "aria-label": "Cerrar",
                    children: /* @__PURE__ */ p(vp, {})
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ p(
              "div",
              {
                className: me["c-vid-container"],
                display: s || f ? "true" : "false",
                children: /* @__PURE__ */ I("div", { className: me["c-vid"], style: { maxWidth: `${e}px` }, children: [
                  s && /* @__PURE__ */ p(
                    "video",
                    {
                      src: h,
                      ref: Y,
                      onTimeUpdate: () => {
                        w(), k();
                      },
                      className: `${me["no-captions"]}`
                    }
                  ),
                  f && /* @__PURE__ */ p(
                    "video",
                    {
                      src: m,
                      ref: U,
                      onTimeUpdate: () => {
                        w(), k();
                      },
                      className: `${me["no-captions"]}`
                    }
                  ),
                  /* @__PURE__ */ I("div", { className: me["c-vid-controls"], children: [
                    /* @__PURE__ */ p("button", { "aria-label": b.label, onClick: R, children: b.icon }),
                    /* @__PURE__ */ p("div", { className: me.flex, children: /* @__PURE__ */ I(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "48",
                        height: "48",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: [
                          /* @__PURE__ */ p("path", { fill: "none", d: "M0 0h24v24H0z" }),
                          /* @__PURE__ */ p("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ p("p", { className: me["c-vid-controls-text"], children: /* @__PURE__ */ p("span", { children: i }) }),
                    /* @__PURE__ */ p("div", { className: me["progress-content"], children: /* @__PURE__ */ p(
                      "div",
                      {
                        ref: G,
                        className: me.progress,
                        onClick: O,
                        children: /* @__PURE__ */ p(
                          "div",
                          {
                            ref: oe,
                            className: me["progress-bar"],
                            onChange: w
                          }
                        )
                      }
                    ) })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    }
  );
};
ys.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
ys.defaultProps = {
  width: "210"
};
const pp = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48",
    viewBox: "0 96 960 960",
    width: "48",
    children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" })
  }
), vp = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p(
      "path",
      {
        id: "close",
        d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
      }
    )
  }
), hp = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p(
      "path",
      {
        id: "open_with",
        d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
      }
    )
  }
), ka = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 96 960 960",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" })
  }
), Gr = /* @__PURE__ */ I(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false",
    children: [
      /* @__PURE__ */ p("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ p("path", { d: "M8 5v14l11-7z" })
    ]
  }
), gp = /* @__PURE__ */ I(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48px",
    viewBox: "0 0 24 24",
    width: "48px",
    fill: "#000000",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false",
    children: [
      /* @__PURE__ */ p("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ p("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
    ]
  }
), $o = dt(), _s = ({ children: e, isVisible: t }) => {
  const [n, r] = te(!1), a = Q(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return J(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p($o.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
_s.defaultProps = {
  isVisible: !1
};
_s.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const mp = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Se($o);
  if (Re.count(e) > 1)
    return null;
  const c = (l) => {
    n(), t && t(l);
  }, s = (l) => {
    var u;
    return !!(l && !((u = l.dataset) != null && u.popper) && l !== a.current);
  }, d = (l) => {
    i && s(l.relatedTarget) && n();
  }, f = (l) => {
    if (!ut(l))
      return null;
    const { onBlur: u, ...v } = l.props;
    return Pe(l, {
      ...v,
      ref: r,
      onClick: c,
      onBlur: (h) => {
        u == null || u(h), d(h);
      }
    });
  };
  return Re.map(e, f);
};
mp.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const Xr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Kr = Object.freeze({
  ESC: 27,
  TAB: 9
}), bp = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', ws = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  disabledInteractOutside: s,
  noA11y: d,
  defaultStyle: f
}) => {
  const { isOpen: l, onOpen: u, refButton: v } = Se($o), h = Q(), m = Q(), b = (R, w) => R === w.current;
  Wa({ ref: m, onInteractionOutside: (R) => {
    !s && !b(R.target, v) && (u(), R.stopPropagation(), R.preventDefault());
  } });
  const _ = (R) => {
    const w = h.current.querySelectorAll(bp), k = v.current, O = w[0], A = w[w.length - 1];
    if ((R.keyCode || R.which) === Kr.TAB && document.activeElement === A)
      return k.focus(), R.preventDefault();
    R.shiftKey && (R.keyCode || R.which) === Kr.TAB && document.activeElement === O && (k.focus(), R.preventDefault()), (R.keyCode || R.which) === Kr.ESC && k.focus();
  }, { styles: N, attributes: P } = _r(
    v.current,
    h.current,
    {
      placement: c,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, i || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: l }
      ]
    }
  );
  return J(() => {
    const R = h.current;
    l ? (R.focus(), m.current = R) : m.current = null;
  }, [l, h]), a ? /* @__PURE__ */ p(st, { children: t }) : /* @__PURE__ */ p(fn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ I(
    "div",
    {
      id: e,
      ref: h,
      role: "status",
      tabIndex: -1,
      className: re({
        [Xr["c-popover-modal"]]: !f,
        [Xr["c-popover-modal--active"]]: !f && l,
        "video-interpreter-ui-popover": !d,
        [n]: n
      }),
      style: N.popper,
      onKeyDown: _,
      "data-hidden": !l,
      "data-popper": !0,
      ...!l && { hidden: !0 },
      ...P.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: re({
              [Xr["c-popover-modal__arrow"]]: !f
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: N.arrow
          }
        )
      ]
    }
  ) });
};
ws.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.arrayOf(o.node),
    o.element,
    o.node
  ]),
  id: o.string,
  addClass: o.string,
  noA11y: o.bool,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  defaultStyle: o.bool,
  disabledInteractOutside: o.bool,
  placement: o.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ])
};
ws.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1,
  noA11y: !1
};
const yp = (e, t) => {
  const [n, r] = te(() => {
    if (typeof window > "u")
      return t;
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.warn(`Error in useLocalStorage: ${i}`), t;
    }
  });
  return [n, (i) => {
    try {
      const c = i instanceof Function ? i(n) : i;
      r(c), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(c));
    } catch (c) {
      console.warn(`Error in useLocalStorage: ${c}`);
    }
  }];
}, _p = (e, t, n) => {
  const [r, a] = te(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((d) => d.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return J(() => {
    a(c);
    const s = (d) => a(c);
    return i.forEach((d) => d.addEventListener("change", s)), () => {
      i.forEach((d) => d.removeEventListener("change", s));
    };
  }, []), r;
}, Tp = () => {
  const [e, t] = yp("dark-mode-enabled"), n = _p(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return J(() => {
    t(n);
  }, [n]), J(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, xs = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = xs(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, Ep = (e) => xs(e);
export {
  Fs as Accordion,
  Va as AccordionButton,
  Ya as AccordionItem,
  za as AccordionPanel,
  Ua as Audio,
  Ut as Button,
  Nu as ButtonSection,
  Xa as CheckBox,
  $l as CheckBoxGroup,
  jl as Col,
  Bl as Content,
  mi as DragAndDrop,
  gi as DragAndDropContext,
  bi as Draggable,
  yi as Droppable,
  Op as Filter,
  _i as GeneralDraggable,
  xe as Icon,
  xo as Image,
  wi as Input,
  gu as InputGroup,
  Oi as InputLeftAddon,
  Ti as InputRightAddon,
  xi as InputStyle,
  ys as Interpreter,
  bu as Kbd,
  Ei as Link,
  yu as List,
  Ci as ListItem,
  Pi as Modal,
  Tu as ModalCloseButton,
  Ri as ModalContent,
  hr as ModalContext,
  Di as ModalOverlay,
  ji as NavSection,
  Mi as NumberDecrementStepper,
  $i as NumberIncrementStepper,
  Ni as NumberInput,
  gr as NumberInputContext,
  Ai as NumberInputField,
  Ii as NumberInputStepper,
  _u as OrderedList,
  ki as Pagination,
  Oo as PaginationItem,
  Pu as Panel,
  mr as PanelContext,
  Iu as Paper,
  _s as PopoverModal,
  mp as PopoverModalButton,
  ws as PopoverModalContent,
  $o as PopoverModalContext,
  fn as Portal,
  Fu as Row,
  Li as Section,
  Fi as Select,
  Bu as SelectGroup,
  Bi as Switch,
  qi as Tab,
  Vi as TabList,
  Yi as TabPanel,
  zi as TabPanels,
  qu as Tabs,
  To as TabsContext,
  Wi as TextArea,
  Vu as ThemeProvider,
  ts as Toggletip,
  ns as Tooltip,
  rs as Tour,
  No as TourContext,
  os as TourElement,
  sf as TourHelpLayer,
  wu as UnorderedList,
  as as Video,
  Ep as createTheme,
  Tp as useDarkMode,
  Wa as useInteractOutside,
  yp as useLocalStorage,
  _p as useMedia,
  cf as useOnScreen,
  Eu as usePagination,
  ku as usePortal,
  ip as useVideo
};
