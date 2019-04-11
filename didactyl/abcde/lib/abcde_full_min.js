/* abcDE_full_min.js v6.0.67 */
!function(e, t) {
 "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
  if (!e.document) throw new Error("jQuery requires a window with a document");
  return t(e);
 } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
 var n = [], r = e.document, i = n.slice, s = n.concat, a = n.push, o = n.indexOf, c = {}, u = c.toString, l = c.hasOwnProperty, f = {}, p = "1.12.0", d = function(e, t) {
  return new d.fn.init(e, t);
 }, h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, m = /^-ms-/, v = /-([\da-z])/gi, g = function(e, t) {
  return t.toUpperCase();
 };
 function y(e) {
  var t = !!e && "length" in e && e.length, n = d.type(e);
  return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
 }
 d.fn = d.prototype = {
  jquery: p,
  constructor: d,
  selector: "",
  length: 0,
  toArray: function() {
   return i.call(this);
  },
  get: function(e) {
   return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this);
  },
  pushStack: function(e) {
   var t = d.merge(this.constructor(), e);
   return t.prevObject = this, t.context = this.context, t;
  },
  each: function(e) {
   return d.each(this, e);
  },
  map: function(e) {
   return this.pushStack(d.map(this, function(t, n) {
    return e.call(t, n, t);
   }));
  },
  slice: function() {
   return this.pushStack(i.apply(this, arguments));
  },
  first: function() {
   return this.eq(0);
  },
  last: function() {
   return this.eq(-1);
  },
  eq: function(e) {
   var t = this.length, n = +e + (0 > e ? t : 0);
   return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
  },
  end: function() {
   return this.prevObject || this.constructor();
  },
  push: a,
  sort: n.sort,
  splice: n.splice
 }, d.extend = d.fn.extend = function() {
  var e, t, n, r, i, s, a = arguments[0] || {}, o = 1, c = arguments.length, u = !1;
  for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || d.isFunction(a) || (a = {}), 
  o === c && (a = this, o--); c > o; o++) if (null != (i = arguments[o])) for (r in i) e = a[r], 
  a !== (n = i[r]) && (u && n && (d.isPlainObject(n) || (t = d.isArray(n))) ? (t ? (t = !1, 
  s = e && d.isArray(e) ? e : []) : s = e && d.isPlainObject(e) ? e : {}, a[r] = d.extend(u, s, n)) : void 0 !== n && (a[r] = n));
  return a;
 }, d.extend({
  expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function(e) {
   throw new Error(e);
  },
  noop: function() {},
  isFunction: function(e) {
   return "function" === d.type(e);
  },
  isArray: Array.isArray || function(e) {
   return "array" === d.type(e);
  },
  isWindow: function(e) {
   return null != e && e == e.window;
  },
  isNumeric: function(e) {
   var t = e && e.toString();
   return !d.isArray(e) && t - parseFloat(t) + 1 >= 0;
  },
  isEmptyObject: function(e) {
   var t;
   for (t in e) return !1;
   return !0;
  },
  isPlainObject: function(e) {
   var t;
   if (!e || "object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
   try {
    if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype, "isPrototypeOf")) return !1;
   } catch (e) {
    return !1;
   }
   if (!f.ownFirst) for (t in e) return l.call(e, t);
   for (t in e) ;
   return void 0 === t || l.call(e, t);
  },
  type: function(e) {
   return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e;
  },
  globalEval: function(t) {
   t && d.trim(t) && (e.execScript || function(t) {
    e.eval.call(e, t);
   })(t);
  },
  camelCase: function(e) {
   return e.replace(m, "ms-").replace(v, g);
  },
  nodeName: function(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  },
  each: function(e, t) {
   var n, r = 0;
   if (y(e)) for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
   return e;
  },
  trim: function(e) {
   return null == e ? "" : (e + "").replace(h, "");
  },
  makeArray: function(e, t) {
   var n = t || [];
   return null != e && (y(Object(e)) ? d.merge(n, "string" == typeof e ? [ e ] : e) : a.call(n, e)), 
   n;
  },
  inArray: function(e, t, n) {
   var r;
   if (t) {
    if (o) return o.call(t, e, n);
    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
   }
   return -1;
  },
  merge: function(e, t) {
   for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
   if (n != n) for (;void 0 !== t[r]; ) e[i++] = t[r++];
   return e.length = i, e;
  },
  grep: function(e, t, n) {
   for (var r = [], i = 0, s = e.length, a = !n; s > i; i++) !t(e[i], i) !== a && r.push(e[i]);
   return r;
  },
  map: function(e, t, n) {
   var r, i, a = 0, o = [];
   if (y(e)) for (r = e.length; r > a; a++) null != (i = t(e[a], a, n)) && o.push(i); else for (a in e) null != (i = t(e[a], a, n)) && o.push(i);
   return s.apply([], o);
  },
  guid: 1,
  proxy: function(e, t) {
   var n, r, s;
   return "string" == typeof t && (s = e[t], t = e, e = s), d.isFunction(e) ? (n = i.call(arguments, 2), 
   (r = function() {
    return e.apply(t || this, n.concat(i.call(arguments)));
   }).guid = e.guid = e.guid || d.guid++, r) : void 0;
  },
  now: function() {
   return +new Date();
  },
  support: f
 }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), 
 d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
  c["[object " + t + "]"] = t.toLowerCase();
 });
 var _ = function(e) {
  var t, n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g, y, _, b = "sizzle" + 1 * new Date(), x = e.document, w = 0, k = 0, E = se(), C = se(), T = se(), S = function(e, t) {
   return e === t && (f = !0), 0;
  }, O = 1 << 31, A = {}.hasOwnProperty, N = [], B = N.pop, R = N.push, P = N.push, L = N.slice, I = function(e, t) {
   for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
   return -1;
  }, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", D = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", V = "\\[" + D + "*(" + j + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + D + "*\\]", F = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + V + ")*)|.*)\\)|)", q = new RegExp(D + "+", "g"), z = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"), H = new RegExp("^" + D + "*," + D + "*"), U = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"), $ = new RegExp("=" + D + "*([^\\]'\"]*?)" + D + "*\\]", "g"), Q = new RegExp(F), W = new RegExp("^" + j + "$"), J = {
   ID: new RegExp("^#(" + j + ")"),
   CLASS: new RegExp("^\\.(" + j + ")"),
   TAG: new RegExp("^(" + j + "|[*])"),
   ATTR: new RegExp("^" + V),
   PSEUDO: new RegExp("^" + F),
   CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
   bool: new RegExp("^(?:" + M + ")$", "i"),
   needsContext: new RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", "i")
  }, X = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + D + "?|(" + D + ")|.)", "ig"), ne = function(e, t, n) {
   var r = "0x" + t - 65536;
   return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
  }, re = function() {
   p();
  };
  try {
   P.apply(N = L.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType;
  } catch (e) {
   P = {
    apply: N.length ? function(e, t) {
     R.apply(e, L.call(t));
    } : function(e, t) {
     for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
     e.length = n - 1;
    }
   };
  }
  function ie(e, t, r, i) {
   var s, o, u, l, f, h, g, y, w = t && t.ownerDocument, k = t ? t.nodeType : 9;
   if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
   if (!i && ((t ? t.ownerDocument || t : x) !== d && p(t), t = t || d, m)) {
    if (11 !== k && (h = Y.exec(e))) if (s = h[1]) {
     if (9 === k) {
      if (!(u = t.getElementById(s))) return r;
      if (u.id === s) return r.push(u), r;
     } else if (w && (u = w.getElementById(s)) && _(t, u) && u.id === s) return r.push(u), 
     r;
    } else {
     if (h[2]) return P.apply(r, t.getElementsByTagName(e)), r;
     if ((s = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(s)), 
     r;
    }
    if (n.qsa && !T[e + " "] && (!v || !v.test(e))) {
     if (1 !== k) w = t, y = e; else if ("object" !== t.nodeName.toLowerCase()) {
      for ((l = t.getAttribute("id")) ? l = l.replace(ee, "\\$&") : t.setAttribute("id", l = b), 
      o = (g = a(e)).length, f = W.test(l) ? "#" + l : "[id='" + l + "']"; o--; ) g[o] = f + " " + me(g[o]);
      y = g.join(","), w = Z.test(e) && de(t.parentNode) || t;
     }
     if (y) try {
      return P.apply(r, w.querySelectorAll(y)), r;
     } catch (e) {} finally {
      l === b && t.removeAttribute("id");
     }
    }
   }
   return c(e.replace(z, "$1"), t, r, i);
  }
  function se() {
   var e = [];
   return function t(n, i) {
    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
   };
  }
  function ae(e) {
   return e[b] = !0, e;
  }
  function oe(e) {
   var t = d.createElement("div");
   try {
    return !!e(t);
   } catch (e) {
    return !1;
   } finally {
    t.parentNode && t.parentNode.removeChild(t), t = null;
   }
  }
  function ce(e, t) {
   for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
  }
  function ue(e, t) {
   var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || O) - (~e.sourceIndex || O);
   if (r) return r;
   if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
   return e ? 1 : -1;
  }
  function le(e) {
   return function(t) {
    return "input" === t.nodeName.toLowerCase() && t.type === e;
   };
  }
  function fe(e) {
   return function(t) {
    var n = t.nodeName.toLowerCase();
    return ("input" === n || "button" === n) && t.type === e;
   };
  }
  function pe(e) {
   return ae(function(t) {
    return t = +t, ae(function(n, r) {
     for (var i, s = e([], n.length, t), a = s.length; a--; ) n[i = s[a]] && (n[i] = !(r[i] = n[i]));
    });
   });
  }
  function de(e) {
   return e && void 0 !== e.getElementsByTagName && e;
  }
  for (t in n = ie.support = {}, s = ie.isXML = function(e) {
   var t = e && (e.ownerDocument || e).documentElement;
   return !!t && "HTML" !== t.nodeName;
  }, p = ie.setDocument = function(e) {
   var t, i, a = e ? e.ownerDocument || e : x;
   return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, 
   m = !s(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
   n.attributes = oe(function(e) {
    return e.className = "i", !e.getAttribute("className");
   }), n.getElementsByTagName = oe(function(e) {
    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
   }), n.getElementsByClassName = G.test(d.getElementsByClassName), n.getById = oe(function(e) {
    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
   }), n.getById ? (r.find.ID = function(e, t) {
    if (void 0 !== t.getElementById && m) {
     var n = t.getElementById(e);
     return n ? [ n ] : [];
    }
   }, r.filter.ID = function(e) {
    var t = e.replace(te, ne);
    return function(e) {
     return e.getAttribute("id") === t;
    };
   }) : (delete r.find.ID, r.filter.ID = function(e) {
    var t = e.replace(te, ne);
    return function(e) {
     var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
     return n && n.value === t;
    };
   }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
   } : function(e, t) {
    var n, r = [], i = 0, s = t.getElementsByTagName(e);
    if ("*" === e) {
     for (;n = s[i++]; ) 1 === n.nodeType && r.push(n);
     return r;
    }
    return s;
   }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
    return void 0 !== t.getElementsByClassName && m ? t.getElementsByClassName(e) : void 0;
   }, g = [], v = [], (n.qsa = G.test(d.querySelectorAll)) && (oe(function(e) {
    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + D + "*(?:''|\"\")"), 
    e.querySelectorAll("[selected]").length || v.push("\\[" + D + "*(?:value|" + M + ")"), 
    e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), 
    e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
   }), oe(function(e) {
    var t = d.createElement("input");
    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + D + "*[*^$|!~]?="), 
    e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
    v.push(",.*:");
   })), (n.matchesSelector = G.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && oe(function(e) {
    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", F);
   }), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), 
   t = G.test(h.compareDocumentPosition), _ = t || G.test(h.contains) ? function(e, t) {
    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
   } : function(e, t) {
    if (t) for (;t = t.parentNode; ) if (t === e) return !0;
    return !1;
   }, S = t ? function(e, t) {
    if (e === t) return f = !0, 0;
    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === x && _(x, e) ? -1 : t === d || t.ownerDocument === x && _(x, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & r ? -1 : 1);
   } : function(e, t) {
    if (e === t) return f = !0, 0;
    var n, r = 0, i = e.parentNode, s = t.parentNode, a = [ e ], o = [ t ];
    if (!i || !s) return e === d ? -1 : t === d ? 1 : i ? -1 : s ? 1 : l ? I(l, e) - I(l, t) : 0;
    if (i === s) return ue(e, t);
    for (n = e; n = n.parentNode; ) a.unshift(n);
    for (n = t; n = n.parentNode; ) o.unshift(n);
    for (;a[r] === o[r]; ) r++;
    return r ? ue(a[r], o[r]) : a[r] === x ? -1 : o[r] === x ? 1 : 0;
   }, d) : d;
  }, ie.matches = function(e, t) {
   return ie(e, null, null, t);
  }, ie.matchesSelector = function(e, t) {
   if ((e.ownerDocument || e) !== d && p(e), t = t.replace($, "='$1']"), n.matchesSelector && m && !T[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
    var r = y.call(e, t);
    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
   } catch (e) {}
   return ie(t, d, null, [ e ]).length > 0;
  }, ie.contains = function(e, t) {
   return (e.ownerDocument || e) !== d && p(e), _(e, t);
  }, ie.attr = function(e, t) {
   (e.ownerDocument || e) !== d && p(e);
   var i = r.attrHandle[t.toLowerCase()], s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
   return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
  }, ie.error = function(e) {
   throw new Error("Syntax error, unrecognized expression: " + e);
  }, ie.uniqueSort = function(e) {
   var t, r = [], i = 0, s = 0;
   if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), f) {
    for (;t = e[s++]; ) t === e[s] && (i = r.push(s));
    for (;i--; ) e.splice(r[i], 1);
   }
   return l = null, e;
  }, i = ie.getText = function(e) {
   var t, n = "", r = 0, s = e.nodeType;
   if (s) {
    if (1 === s || 9 === s || 11 === s) {
     if ("string" == typeof e.textContent) return e.textContent;
     for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
    } else if (3 === s || 4 === s) return e.nodeValue;
   } else for (;t = e[r++]; ) n += i(t);
   return n;
  }, (r = ie.selectors = {
   cacheLength: 50,
   createPseudo: ae,
   match: J,
   attrHandle: {},
   find: {},
   relative: {
    ">": {
     dir: "parentNode",
     first: !0
    },
    " ": {
     dir: "parentNode"
    },
    "+": {
     dir: "previousSibling",
     first: !0
    },
    "~": {
     dir: "previousSibling"
    }
   },
   preFilter: {
    ATTR: function(e) {
     return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
     "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
    },
    CHILD: function(e) {
     return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), 
     e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), 
     e;
    },
    PSEUDO: function(e) {
     var t, n = !e[6] && e[2];
     return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
     e[2] = n.slice(0, t)), e.slice(0, 3));
    }
   },
   filter: {
    TAG: function(e) {
     var t = e.replace(te, ne).toLowerCase();
     return "*" === e ? function() {
      return !0;
     } : function(e) {
      return e.nodeName && e.nodeName.toLowerCase() === t;
     };
    },
    CLASS: function(e) {
     var t = E[e + " "];
     return t || (t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && E(e, function(e) {
      return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
     });
    },
    ATTR: function(e, t, n) {
     return function(r) {
      var i = ie.attr(r, e);
      return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
     };
    },
    CHILD: function(e, t, n, r, i) {
     var s = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), o = "of-type" === t;
     return 1 === r && 0 === i ? function(e) {
      return !!e.parentNode;
     } : function(t, n, c) {
      var u, l, f, p, d, h, m = s !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = o && t.nodeName.toLowerCase(), y = !c && !o, _ = !1;
      if (v) {
       if (s) {
        for (;m; ) {
         for (p = t; p = p[m]; ) if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
         h = m = "only" === e && !h && "nextSibling";
        }
        return !0;
       }
       if (h = [ a ? v.firstChild : v.lastChild ], a && y) {
        for (_ = (d = (u = (l = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], 
        p = d && v.childNodes[d]; p = ++d && p && p[m] || (_ = d = 0) || h.pop(); ) if (1 === p.nodeType && ++_ && p === t) {
         l[e] = [ w, d, _ ];
         break;
        }
       } else if (y && (_ = d = (u = (l = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === w && u[1]), 
       !1 === _) for (;(p = ++d && p && p[m] || (_ = d = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++_ || (y && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ w, _ ]), 
       p !== t)); ) ;
       return (_ -= i) === r || _ % r == 0 && _ / r >= 0;
      }
     };
    },
    PSEUDO: function(e, t) {
     var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
     return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
      for (var r, s = i(e, t), a = s.length; a--; ) e[r = I(e, s[a])] = !(n[r] = s[a]);
     }) : function(e) {
      return i(e, 0, n);
     }) : i;
    }
   },
   pseudos: {
    not: ae(function(e) {
     var t = [], n = [], r = o(e.replace(z, "$1"));
     return r[b] ? ae(function(e, t, n, i) {
      for (var s, a = r(e, null, i, []), o = e.length; o--; ) (s = a[o]) && (e[o] = !(t[o] = s));
     }) : function(e, i, s) {
      return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop();
     };
    }),
    has: ae(function(e) {
     return function(t) {
      return ie(e, t).length > 0;
     };
    }),
    contains: ae(function(e) {
     return e = e.replace(te, ne), function(t) {
      return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
     };
    }),
    lang: ae(function(e) {
     return W.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
     function(t) {
      var n;
      do {
       if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
      } while ((t = t.parentNode) && 1 === t.nodeType);
      return !1;
     };
    }),
    target: function(t) {
     var n = e.location && e.location.hash;
     return n && n.slice(1) === t.id;
    },
    root: function(e) {
     return e === h;
    },
    focus: function(e) {
     return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
    },
    enabled: function(e) {
     return !1 === e.disabled;
    },
    disabled: function(e) {
     return !0 === e.disabled;
    },
    checked: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && !!e.checked || "option" === t && !!e.selected;
    },
    selected: function(e) {
     return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
    },
    empty: function(e) {
     for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
     return !0;
    },
    parent: function(e) {
     return !r.pseudos.empty(e);
    },
    header: function(e) {
     return K.test(e.nodeName);
    },
    input: function(e) {
     return X.test(e.nodeName);
    },
    button: function(e) {
     var t = e.nodeName.toLowerCase();
     return "input" === t && "button" === e.type || "button" === t;
    },
    text: function(e) {
     var t;
     return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
    },
    first: pe(function() {
     return [ 0 ];
    }),
    last: pe(function(e, t) {
     return [ t - 1 ];
    }),
    eq: pe(function(e, t, n) {
     return [ 0 > n ? n + t : n ];
    }),
    even: pe(function(e, t) {
     for (var n = 0; t > n; n += 2) e.push(n);
     return e;
    }),
    odd: pe(function(e, t) {
     for (var n = 1; t > n; n += 2) e.push(n);
     return e;
    }),
    lt: pe(function(e, t, n) {
     for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
     return e;
    }),
    gt: pe(function(e, t, n) {
     for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
     return e;
    })
   }
  }).pseudos.nth = r.pseudos.eq, {
   radio: !0,
   checkbox: !0,
   file: !0,
   password: !0,
   image: !0
  }) r.pseudos[t] = le(t);
  for (t in {
   submit: !0,
   reset: !0
  }) r.pseudos[t] = fe(t);
  function he() {}
  function me(e) {
   for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
   return r;
  }
  function ve(e, t, n) {
   var r = t.dir, i = n && "parentNode" === r, s = k++;
   return t.first ? function(t, n, s) {
    for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, s);
   } : function(t, n, a) {
    var o, c, u, l = [ w, s ];
    if (a) {
     for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
    } else for (;t = t[r]; ) if (1 === t.nodeType || i) {
     if ((o = (c = (u = t[b] || (t[b] = {}))[t.uniqueID] || (u[t.uniqueID] = {}))[r]) && o[0] === w && o[1] === s) return l[2] = o[2];
     if (c[r] = l, l[2] = e(t, n, a)) return !0;
    }
   };
  }
  function ge(e) {
   return e.length > 1 ? function(t, n, r) {
    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
    return !0;
   } : e[0];
  }
  function ye(e, t, n, r, i) {
   for (var s, a = [], o = 0, c = e.length, u = null != t; c > o; o++) (s = e[o]) && (!n || n(s, r, i)) && (a.push(s), 
   u && t.push(o));
   return a;
  }
  function _e(e, t, n, r, i, s) {
   return r && !r[b] && (r = _e(r)), i && !i[b] && (i = _e(i, s)), ae(function(s, a, o, c) {
    var u, l, f, p = [], d = [], h = a.length, m = s || function(e, t, n) {
     for (var r = 0, i = t.length; i > r; r++) ie(e, t[r], n);
     return n;
    }(t || "*", o.nodeType ? [ o ] : o, []), v = !e || !s && t ? m : ye(m, p, e, o, c), g = n ? i || (s ? e : h || r) ? [] : a : v;
    if (n && n(v, g, o, c), r) for (u = ye(g, d), r(u, [], o, c), l = u.length; l--; ) (f = u[l]) && (g[d[l]] = !(v[d[l]] = f));
    if (s) {
     if (i || e) {
      if (i) {
       for (u = [], l = g.length; l--; ) (f = g[l]) && u.push(v[l] = f);
       i(null, g = [], u, c);
      }
      for (l = g.length; l--; ) (f = g[l]) && (u = i ? I(s, f) : p[l]) > -1 && (s[u] = !(a[u] = f));
     }
    } else g = ye(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, c) : P.apply(a, g);
   });
  }
  function be(e) {
   for (var t, n, i, s = e.length, a = r.relative[e[0].type], o = a || r.relative[" "], c = a ? 1 : 0, l = ve(function(e) {
    return e === t;
   }, o, !0), f = ve(function(e) {
    return I(t, e) > -1;
   }, o, !0), p = [ function(e, n, r) {
    var i = !a && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
    return t = null, i;
   } ]; s > c; c++) if (n = r.relative[e[c].type]) p = [ ve(ge(p), n) ]; else {
    if ((n = r.filter[e[c].type].apply(null, e[c].matches))[b]) {
     for (i = ++c; s > i && !r.relative[e[i].type]; i++) ;
     return _e(c > 1 && ge(p), c > 1 && me(e.slice(0, c - 1).concat({
      value: " " === e[c - 2].type ? "*" : ""
     })).replace(z, "$1"), n, i > c && be(e.slice(c, i)), s > i && be(e = e.slice(i)), s > i && me(e));
    }
    p.push(n);
   }
   return ge(p);
  }
  function xe(e, t) {
   var n = t.length > 0, i = e.length > 0, s = function(s, a, o, c, l) {
    var f, h, v, g = 0, y = "0", _ = s && [], b = [], x = u, k = s || i && r.find.TAG("*", l), E = w += null == x ? 1 : Math.random() || .1, C = k.length;
    for (l && (u = a === d || a || l); y !== C && null != (f = k[y]); y++) {
     if (i && f) {
      for (h = 0, a || f.ownerDocument === d || (p(f), o = !m); v = e[h++]; ) if (v(f, a || d, o)) {
       c.push(f);
       break;
      }
      l && (w = E);
     }
     n && ((f = !v && f) && g--, s && _.push(f));
    }
    if (g += y, n && y !== g) {
     for (h = 0; v = t[h++]; ) v(_, b, a, o);
     if (s) {
      if (g > 0) for (;y--; ) _[y] || b[y] || (b[y] = B.call(c));
      b = ye(b);
     }
     P.apply(c, b), l && !s && b.length > 0 && g + t.length > 1 && ie.uniqueSort(c);
    }
    return l && (w = E, u = x), _;
   };
   return n ? ae(s) : s;
  }
  return he.prototype = r.filters = r.pseudos, r.setFilters = new he(), a = ie.tokenize = function(e, t) {
   var n, i, s, a, o, c, u, l = C[e + " "];
   if (l) return t ? 0 : l.slice(0);
   for (o = e, c = [], u = r.preFilter; o; ) {
    for (a in (!n || (i = H.exec(o))) && (i && (o = o.slice(i[0].length) || o), c.push(s = [])), 
    n = !1, (i = U.exec(o)) && (n = i.shift(), s.push({
     value: n,
     type: i[0].replace(z, " ")
    }), o = o.slice(n.length)), r.filter) !(i = J[a].exec(o)) || u[a] && !(i = u[a](i)) || (n = i.shift(), 
    s.push({
     value: n,
     type: a,
     matches: i
    }), o = o.slice(n.length));
    if (!n) break;
   }
   return t ? o.length : o ? ie.error(e) : C(e, c).slice(0);
  }, o = ie.compile = function(e, t) {
   var n, r = [], i = [], s = T[e + " "];
   if (!s) {
    for (t || (t = a(e)), n = t.length; n--; ) (s = be(t[n]))[b] ? r.push(s) : i.push(s);
    (s = T(e, xe(i, r))).selector = e;
   }
   return s;
  }, c = ie.select = function(e, t, i, s) {
   var c, u, l, f, p, d = "function" == typeof e && e, h = !s && a(e = d.selector || e);
   if (i = i || [], 1 === h.length) {
    if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && m && r.relative[u[1].type]) {
     if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return i;
     d && (t = t.parentNode), e = e.slice(u.shift().value.length);
    }
    for (c = J.needsContext.test(e) ? 0 : u.length; c-- && (l = u[c], !r.relative[f = l.type]); ) if ((p = r.find[f]) && (s = p(l.matches[0].replace(te, ne), Z.test(u[0].type) && de(t.parentNode) || t))) {
     if (u.splice(c, 1), !(e = s.length && me(u))) return P.apply(i, s), i;
     break;
    }
   }
   return (d || o(e, h))(s, t, !m, i, !t || Z.test(e) && de(t.parentNode) || t), i;
  }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, 
  p(), n.sortDetached = oe(function(e) {
   return 1 & e.compareDocumentPosition(d.createElement("div"));
  }), oe(function(e) {
   return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
  }) || ce("type|href|height|width", function(e, t, n) {
   return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
  }), n.attributes && oe(function(e) {
   return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
  }) || ce("value", function(e, t, n) {
   return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
  }), oe(function(e) {
   return null == e.getAttribute("disabled");
  }) || ce(M, function(e, t, n) {
   var r;
   return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
  }), ie;
 }(e);
 d.find = _, d.expr = _.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = _.uniqueSort, 
 d.text = _.getText, d.isXMLDoc = _.isXML, d.contains = _.contains;
 var b = function(e, t, n) {
  for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
   if (i && d(e).is(n)) break;
   r.push(e);
  }
  return r;
 }, x = function(e, t) {
  for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
  return n;
 }, w = d.expr.match.needsContext, k = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, E = /^.[^:#\[\.,]*$/;
 function C(e, t, n) {
  if (d.isFunction(t)) return d.grep(e, function(e, r) {
   return !!t.call(e, r, e) !== n;
  });
  if (t.nodeType) return d.grep(e, function(e) {
   return e === t !== n;
  });
  if ("string" == typeof t) {
   if (E.test(t)) return d.filter(t, e, n);
   t = d.filter(t, e);
  }
  return d.grep(e, function(e) {
   return d.inArray(e, t) > -1 !== n;
  });
 }
 d.filter = function(e, t, n) {
  var r = t[0];
  return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [ r ] : [] : d.find.matches(e, d.grep(t, function(e) {
   return 1 === e.nodeType;
  }));
 }, d.fn.extend({
  find: function(e) {
   var t, n = [], r = this, i = r.length;
   if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
    for (t = 0; i > t; t++) if (d.contains(r[t], this)) return !0;
   }));
   for (t = 0; i > t; t++) d.find(e, r[t], n);
   return (n = this.pushStack(i > 1 ? d.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, 
   n;
  },
  filter: function(e) {
   return this.pushStack(C(this, e || [], !1));
  },
  not: function(e) {
   return this.pushStack(C(this, e || [], !0));
  },
  is: function(e) {
   return !!C(this, "string" == typeof e && w.test(e) ? d(e) : e || [], !1).length;
  }
 });
 var T, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
 (d.fn.init = function(e, t, n) {
  var i, s;
  if (!e) return this;
  if (n = n || T, "string" == typeof e) {
   if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : S.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
   if (i[1]) {
    if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), 
    k.test(i[1]) && d.isPlainObject(t)) for (i in t) d.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
    return this;
   }
   if ((s = r.getElementById(i[2])) && s.parentNode) {
    if (s.id !== i[2]) return T.find(e);
    this.length = 1, this[0] = s;
   }
   return this.context = r, this.selector = e, this;
  }
  return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, 
  this.context = e.context), d.makeArray(e, this));
 }).prototype = d.fn, T = d(r);
 var O = /^(?:parents|prev(?:Until|All))/, A = {
  children: !0,
  contents: !0,
  next: !0,
  prev: !0
 };
 function N(e, t) {
  do {
   e = e[t];
  } while (e && 1 !== e.nodeType);
  return e;
 }
 d.fn.extend({
  has: function(e) {
   var t, n = d(e, this), r = n.length;
   return this.filter(function() {
    for (t = 0; r > t; t++) if (d.contains(this, n[t])) return !0;
   });
  },
  closest: function(e, t) {
   for (var n, r = 0, i = this.length, s = [], a = w.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
    s.push(n);
    break;
   }
   return this.pushStack(s.length > 1 ? d.uniqueSort(s) : s);
  },
  index: function(e) {
   return e ? "string" == typeof e ? d.inArray(this[0], d(e)) : d.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  },
  add: function(e, t) {
   return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))));
  },
  addBack: function(e) {
   return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }
 }), d.each({
  parent: function(e) {
   var t = e.parentNode;
   return t && 11 !== t.nodeType ? t : null;
  },
  parents: function(e) {
   return b(e, "parentNode");
  },
  parentsUntil: function(e, t, n) {
   return b(e, "parentNode", n);
  },
  next: function(e) {
   return N(e, "nextSibling");
  },
  prev: function(e) {
   return N(e, "previousSibling");
  },
  nextAll: function(e) {
   return b(e, "nextSibling");
  },
  prevAll: function(e) {
   return b(e, "previousSibling");
  },
  nextUntil: function(e, t, n) {
   return b(e, "nextSibling", n);
  },
  prevUntil: function(e, t, n) {
   return b(e, "previousSibling", n);
  },
  siblings: function(e) {
   return x((e.parentNode || {}).firstChild, e);
  },
  children: function(e) {
   return x(e.firstChild);
  },
  contents: function(e) {
   return d.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : d.merge([], e.childNodes);
  }
 }, function(e, t) {
  d.fn[e] = function(n, r) {
   var i = d.map(this, t, n);
   return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = d.filter(r, i)), 
   this.length > 1 && (A[e] || (i = d.uniqueSort(i)), O.test(e) && (i = i.reverse())), 
   this.pushStack(i);
  };
 });
 var B, R, P = /\S+/g;
 function L() {
  r.addEventListener ? (r.removeEventListener("DOMContentLoaded", I), e.removeEventListener("load", I)) : (r.detachEvent("onreadystatechange", I), 
  e.detachEvent("onload", I));
 }
 function I() {
  (r.addEventListener || "load" === e.event.type || "complete" === r.readyState) && (L(), 
  d.ready());
 }
 for (R in d.Callbacks = function(e) {
  e = "string" == typeof e ? function(e) {
   var t = {};
   return d.each(e.match(P) || [], function(e, n) {
    t[n] = !0;
   }), t;
  }(e) : d.extend({}, e);
  var t, n, r, i, s = [], a = [], o = -1, c = function() {
   for (i = e.once, r = t = !0; a.length; o = -1) for (n = a.shift(); ++o < s.length; ) !1 === s[o].apply(n[0], n[1]) && e.stopOnFalse && (o = s.length, 
   n = !1);
   e.memory || (n = !1), t = !1, i && (s = n ? [] : "");
  }, u = {
   add: function() {
    return s && (n && !t && (o = s.length - 1, a.push(n)), function t(n) {
     d.each(n, function(n, r) {
      d.isFunction(r) ? e.unique && u.has(r) || s.push(r) : r && r.length && "string" !== d.type(r) && t(r);
     });
    }(arguments), n && !t && c()), this;
   },
   remove: function() {
    return d.each(arguments, function(e, t) {
     for (var n; (n = d.inArray(t, s, n)) > -1; ) s.splice(n, 1), o >= n && o--;
    }), this;
   },
   has: function(e) {
    return e ? d.inArray(e, s) > -1 : s.length > 0;
   },
   empty: function() {
    return s && (s = []), this;
   },
   disable: function() {
    return i = a = [], s = n = "", this;
   },
   disabled: function() {
    return !s;
   },
   lock: function() {
    return i = !0, n || u.disable(), this;
   },
   locked: function() {
    return !!i;
   },
   fireWith: function(e, n) {
    return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || c()), 
    this;
   },
   fire: function() {
    return u.fireWith(this, arguments), this;
   },
   fired: function() {
    return !!r;
   }
  };
  return u;
 }, d.extend({
  Deferred: function(e) {
   var t = [ [ "resolve", "done", d.Callbacks("once memory"), "resolved" ], [ "reject", "fail", d.Callbacks("once memory"), "rejected" ], [ "notify", "progress", d.Callbacks("memory") ] ], n = "pending", r = {
    state: function() {
     return n;
    },
    always: function() {
     return i.done(arguments).fail(arguments), this;
    },
    then: function() {
     var e = arguments;
     return d.Deferred(function(n) {
      d.each(t, function(t, s) {
       var a = d.isFunction(e[t]) && e[t];
       i[s[1]](function() {
        var e = a && a.apply(this, arguments);
        e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === r ? n.promise() : this, a ? [ e ] : arguments);
       });
      }), e = null;
     }).promise();
    },
    promise: function(e) {
     return null != e ? d.extend(e, r) : r;
    }
   }, i = {};
   return r.pipe = r.then, d.each(t, function(e, s) {
    var a = s[2], o = s[3];
    r[s[1]] = a.add, o && a.add(function() {
     n = o;
    }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
     return i[s[0] + "With"](this === i ? r : this, arguments), this;
    }, i[s[0] + "With"] = a.fireWith;
   }), r.promise(i), e && e.call(i, i), i;
  },
  when: function(e) {
   var t, n, r, s = 0, a = i.call(arguments), o = a.length, c = 1 !== o || e && d.isFunction(e.promise) ? o : 0, u = 1 === c ? e : d.Deferred(), l = function(e, n, r) {
    return function(s) {
     n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : s, r === t ? u.notifyWith(n, r) : --c || u.resolveWith(n, r);
    };
   };
   if (o > 1) for (t = new Array(o), n = new Array(o), r = new Array(o); o > s; s++) a[s] && d.isFunction(a[s].promise) ? a[s].promise().progress(l(s, n, t)).done(l(s, r, a)).fail(u.reject) : --c;
   return c || u.resolveWith(r, a), u.promise();
  }
 }), d.fn.ready = function(e) {
  return d.ready.promise().done(e), this;
 }, d.extend({
  isReady: !1,
  readyWait: 1,
  holdReady: function(e) {
   e ? d.readyWait++ : d.ready(!0);
  },
  ready: function(e) {
   (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (B.resolveWith(r, [ d ]), 
   d.fn.triggerHandler && (d(r).triggerHandler("ready"), d(r).off("ready"))));
  }
 }), d.ready.promise = function(t) {
  if (!B) if (B = d.Deferred(), "complete" === r.readyState) e.setTimeout(d.ready); else if (r.addEventListener) r.addEventListener("DOMContentLoaded", I), 
  e.addEventListener("load", I); else {
   r.attachEvent("onreadystatechange", I), e.attachEvent("onload", I);
   var n = !1;
   try {
    n = null == e.frameElement && r.documentElement;
   } catch (e) {}
   n && n.doScroll && function t() {
    if (!d.isReady) {
     try {
      n.doScroll("left");
     } catch (n) {
      return e.setTimeout(t, 50);
     }
     L(), d.ready();
    }
   }();
  }
  return B.promise(t);
 }, d.ready.promise(), d(f)) break;
 f.ownFirst = "0" === R, f.inlineBlockNeedsLayout = !1, d(function() {
  var e, t, n, i;
  (n = r.getElementsByTagName("body")[0]) && n.style && (t = r.createElement("div"), 
  (i = r.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
  n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
  f.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i));
 }), function() {
  var e = r.createElement("div");
  f.deleteExpando = !0;
  try {
   delete e.test;
  } catch (e) {
   f.deleteExpando = !1;
  }
  e = null;
 }();
 var M = function(e) {
  var t = d.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
  return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
 }, D = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, j = /([A-Z])/g;
 function V(e, t, n) {
  if (void 0 === n && 1 === e.nodeType) {
   var r = "data-" + t.replace(j, "-$1").toLowerCase();
   if ("string" == typeof (n = e.getAttribute(r))) {
    try {
     n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : D.test(n) ? d.parseJSON(n) : n);
    } catch (e) {}
    d.data(e, t, n);
   } else n = void 0;
  }
  return n;
 }
 function F(e) {
  var t;
  for (t in e) if (("data" !== t || !d.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
  return !0;
 }
 function q(e, t, r, i) {
  if (M(e)) {
   var s, a, o = d.expando, c = e.nodeType, u = c ? d.cache : e, l = c ? e[o] : e[o] && o;
   if (l && u[l] && (i || u[l].data) || void 0 !== r || "string" != typeof t) return l || (l = c ? e[o] = n.pop() || d.guid++ : o), 
   u[l] || (u[l] = c ? {} : {
    toJSON: d.noop
   }), ("object" == typeof t || "function" == typeof t) && (i ? u[l] = d.extend(u[l], t) : u[l].data = d.extend(u[l].data, t)), 
   a = u[l], i || (a.data || (a.data = {}), a = a.data), void 0 !== r && (a[d.camelCase(t)] = r), 
   "string" == typeof t ? null == (s = a[t]) && (s = a[d.camelCase(t)]) : s = a, s;
  }
 }
 function z(e, t, n) {
  if (M(e)) {
   var r, i, s = e.nodeType, a = s ? d.cache : e, o = s ? e[d.expando] : d.expando;
   if (a[o]) {
    if (t && (r = n ? a[o] : a[o].data)) {
     d.isArray(t) ? t = t.concat(d.map(t, d.camelCase)) : t in r ? t = [ t ] : t = (t = d.camelCase(t)) in r ? [ t ] : t.split(" "), 
     i = t.length;
     for (;i--; ) delete r[t[i]];
     if (n ? !F(r) : !d.isEmptyObject(r)) return;
    }
    (n || (delete a[o].data, F(a[o]))) && (s ? d.cleanData([ e ], !0) : f.deleteExpando || a != a.window ? delete a[o] : a[o] = void 0);
   }
  }
 }
 d.extend({
  cache: {},
  noData: {
   "applet ": !0,
   "embed ": !0,
   "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
  },
  hasData: function(e) {
   return !!(e = e.nodeType ? d.cache[e[d.expando]] : e[d.expando]) && !F(e);
  },
  data: function(e, t, n) {
   return q(e, t, n);
  },
  removeData: function(e, t) {
   return z(e, t);
  },
  _data: function(e, t, n) {
   return q(e, t, n, !0);
  },
  _removeData: function(e, t) {
   return z(e, t, !0);
  }
 }), d.fn.extend({
  data: function(e, t) {
   var n, r, i, s = this[0], a = s && s.attributes;
   if (void 0 === e) {
    if (this.length && (i = d.data(s), 1 === s.nodeType && !d._data(s, "parsedAttrs"))) {
     for (n = a.length; n--; ) a[n] && (0 === (r = a[n].name).indexOf("data-") && V(s, r = d.camelCase(r.slice(5)), i[r]));
     d._data(s, "parsedAttrs", !0);
    }
    return i;
   }
   return "object" == typeof e ? this.each(function() {
    d.data(this, e);
   }) : arguments.length > 1 ? this.each(function() {
    d.data(this, e, t);
   }) : s ? V(s, e, d.data(s, e)) : void 0;
  },
  removeData: function(e) {
   return this.each(function() {
    d.removeData(this, e);
   });
  }
 }), d.extend({
  queue: function(e, t, n) {
   var r;
   return e ? (t = (t || "fx") + "queue", r = d._data(e, t), n && (!r || d.isArray(n) ? r = d._data(e, t, d.makeArray(n)) : r.push(n)), 
   r || []) : void 0;
  },
  dequeue: function(e, t) {
   t = t || "fx";
   var n = d.queue(e, t), r = n.length, i = n.shift(), s = d._queueHooks(e, t);
   "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
   delete s.stop, i.call(e, function() {
    d.dequeue(e, t);
   }, s)), !r && s && s.empty.fire();
  },
  _queueHooks: function(e, t) {
   var n = t + "queueHooks";
   return d._data(e, n) || d._data(e, n, {
    empty: d.Callbacks("once memory").add(function() {
     d._removeData(e, t + "queue"), d._removeData(e, n);
    })
   });
  }
 }), d.fn.extend({
  queue: function(e, t) {
   var n = 2;
   return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function() {
    var n = d.queue(this, e, t);
    d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e);
   });
  },
  dequeue: function(e) {
   return this.each(function() {
    d.dequeue(this, e);
   });
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", []);
  },
  promise: function(e, t) {
   var n, r = 1, i = d.Deferred(), s = this, a = this.length, o = function() {
    --r || i.resolveWith(s, [ s ]);
   };
   for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = d._data(s[a], e + "queueHooks")) && n.empty && (r++, 
   n.empty.add(o));
   return o(), i.promise(t);
  }
 }), function() {
  var e;
  f.shrinkWrapBlocks = function() {
   return null != e ? e : (e = !1, (n = r.getElementsByTagName("body")[0]) && n.style ? (t = r.createElement("div"), 
   (i = r.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
   n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
   t.appendChild(r.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), 
   n.removeChild(i), e) : void 0);
   var t, n, i;
  };
 }();
 var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"), $ = [ "Top", "Right", "Bottom", "Left" ], Q = function(e, t) {
  return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e);
 };
 function W(e, t, n, r) {
  var i, s = 1, a = 20, o = r ? function() {
   return r.cur();
  } : function() {
   return d.css(e, t, "");
  }, c = o(), u = n && n[3] || (d.cssNumber[t] ? "" : "px"), l = (d.cssNumber[t] || "px" !== u && +c) && U.exec(d.css(e, t));
  if (l && l[3] !== u) {
   u = u || l[3], n = n || [], l = +c || 1;
   do {
    l /= s = s || ".5", d.style(e, t, l + u);
   } while (s !== (s = o() / c) && 1 !== s && --a);
  }
  return n && (l = +l || +c || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, 
  r.start = l, r.end = i)), i;
 }
 var J = function(e, t, n, r, i, s, a) {
  var o = 0, c = e.length, u = null == n;
  if ("object" === d.type(n)) for (o in i = !0, n) J(e, t, o, n[o], !0, s, a); else if (void 0 !== r && (i = !0, 
  d.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
   return u.call(d(e), n);
  })), t)) for (;c > o; o++) t(e[o], n, a ? r : r.call(e[o], o, t(e[o], n)));
  return i ? e : u ? t.call(e) : c ? t(e[0], n) : s;
 }, X = /^(?:checkbox|radio)$/i, K = /<([\w:-]+)/, G = /^$|\/(?:java|ecma)script/i, Y = /^\s+/, Z = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
 function ee(e) {
  var t = Z.split("|"), n = e.createDocumentFragment();
  if (n.createElement) for (;t.length; ) n.createElement(t.pop());
  return n;
 }
 !function() {
  var e = r.createElement("div"), t = r.createDocumentFragment(), n = r.createElement("input");
  e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
  f.leadingWhitespace = 3 === e.firstChild.nodeType, f.tbody = !e.getElementsByTagName("tbody").length, 
  f.htmlSerialize = !!e.getElementsByTagName("link").length, f.html5Clone = "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML, 
  n.type = "checkbox", n.checked = !0, t.appendChild(n), f.appendChecked = n.checked, 
  e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, 
  t.appendChild(e), (n = r.createElement("input")).setAttribute("type", "radio"), 
  n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), 
  f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, f.noCloneEvent = !!e.addEventListener, 
  e[d.expando] = 1, f.attributes = !e.getAttribute(d.expando);
 }();
 var te = {
  option: [ 1, "<select multiple='multiple'>", "</select>" ],
  legend: [ 1, "<fieldset>", "</fieldset>" ],
  area: [ 1, "<map>", "</map>" ],
  param: [ 1, "<object>", "</object>" ],
  thead: [ 1, "<table>", "</table>" ],
  tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
  td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  _default: f.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
 };
 function ne(e, t) {
  var n, r, i = 0, s = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
  if (!s) for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || d.nodeName(r, t) ? s.push(r) : d.merge(s, ne(r, t));
  return void 0 === t || t && d.nodeName(e, t) ? d.merge([ e ], s) : s;
 }
 function re(e, t) {
  for (var n, r = 0; null != (n = e[r]); r++) d._data(n, "globalEval", !t || d._data(t[r], "globalEval"));
 }
 te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, 
 te.th = te.td;
 var ie = /<|&#?\w+;/, se = /<tbody/i;
 function ae(e) {
  X.test(e.type) && (e.defaultChecked = e.checked);
 }
 function oe(e, t, n, r, i) {
  for (var s, a, o, c, u, l, p, h = e.length, m = ee(t), v = [], g = 0; h > g; g++) if ((a = e[g]) || 0 === a) if ("object" === d.type(a)) d.merge(v, a.nodeType ? [ a ] : a); else if (ie.test(a)) {
   for (c = c || m.appendChild(t.createElement("div")), u = (K.exec(a) || [ "", "" ])[1].toLowerCase(), 
   p = te[u] || te._default, c.innerHTML = p[1] + d.htmlPrefilter(a) + p[2], s = p[0]; s--; ) c = c.lastChild;
   if (!f.leadingWhitespace && Y.test(a) && v.push(t.createTextNode(Y.exec(a)[0])), 
   !f.tbody) for (s = (a = "table" !== u || se.test(a) ? "<table>" !== p[1] || se.test(a) ? 0 : c : c.firstChild) && a.childNodes.length; s--; ) d.nodeName(l = a.childNodes[s], "tbody") && !l.childNodes.length && a.removeChild(l);
   for (d.merge(v, c.childNodes), c.textContent = ""; c.firstChild; ) c.removeChild(c.firstChild);
   c = m.lastChild;
  } else v.push(t.createTextNode(a));
  for (c && m.removeChild(c), f.appendChecked || d.grep(ne(v, "input"), ae), g = 0; a = v[g++]; ) if (r && d.inArray(a, r) > -1) i && i.push(a); else if (o = d.contains(a.ownerDocument, a), 
  c = ne(m.appendChild(a), "script"), o && re(c), n) for (s = 0; a = c[s++]; ) G.test(a.type || "") && n.push(a);
  return c = null, m;
 }
 !function() {
  var t, n, i = r.createElement("div");
  for (t in {
   submit: !0,
   change: !0,
   focusin: !0
  }) n = "on" + t, (f[t] = n in e) || (i.setAttribute(n, "t"), f[t] = !1 === i.attributes[n].expando);
  i = null;
 }();
 var ce = /^(?:input|select|textarea)$/i, ue = /^key/, le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fe = /^(?:focusinfocus|focusoutblur)$/, pe = /^([^.]*)(?:\.(.+)|)/;
 function de() {
  return !0;
 }
 function he() {
  return !1;
 }
 function me() {
  try {
   return r.activeElement;
  } catch (e) {}
 }
 function ve(e, t, n, r, i, s) {
  var a, o;
  if ("object" == typeof t) {
   for (o in "string" != typeof n && (r = r || n, n = void 0), t) ve(e, o, n, r, t[o], s);
   return e;
  }
  if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
  r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = he; else if (!i) return e;
  return 1 === s && (a = i, (i = function(e) {
   return d().off(e), a.apply(this, arguments);
  }).guid = a.guid || (a.guid = d.guid++)), e.each(function() {
   d.event.add(this, t, i, r, n);
  });
 }
 d.event = {
  global: {},
  add: function(e, t, n, r, i) {
   var s, a, o, c, u, l, f, p, h, m, v, g = d._data(e);
   if (g) {
    for (n.handler && (n = (c = n).handler, i = c.selector), n.guid || (n.guid = d.guid++), 
    (a = g.events) || (a = g.events = {}), (l = g.handle) || ((l = g.handle = function(e) {
     return void 0 === d || e && d.event.triggered === e.type ? void 0 : d.event.dispatch.apply(l.elem, arguments);
    }).elem = e), o = (t = (t || "").match(P) || [ "" ]).length; o--; ) h = v = (s = pe.exec(t[o]) || [])[1], 
    m = (s[2] || "").split(".").sort(), h && (u = d.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, 
    u = d.event.special[h] || {}, f = d.extend({
     type: h,
     origType: v,
     data: r,
     handler: n,
     guid: n.guid,
     selector: i,
     needsContext: i && d.expr.match.needsContext.test(i),
     namespace: m.join(".")
    }, c), (p = a[h]) || ((p = a[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, m, l) || (e.addEventListener ? e.addEventListener(h, l, !1) : e.attachEvent && e.attachEvent("on" + h, l))), 
    u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) : p.push(f), 
    d.event.global[h] = !0);
    e = null;
   }
  },
  remove: function(e, t, n, r, i) {
   var s, a, o, c, u, l, f, p, h, m, v, g = d.hasData(e) && d._data(e);
   if (g && (l = g.events)) {
    for (u = (t = (t || "").match(P) || [ "" ]).length; u--; ) if (h = v = (o = pe.exec(t[u]) || [])[1], 
    m = (o[2] || "").split(".").sort(), h) {
     for (f = d.event.special[h] || {}, p = l[h = (r ? f.delegateType : f.bindType) || h] || [], 
     o = o[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = s = p.length; s--; ) a = p[s], 
     !i && v !== a.origType || n && n.guid !== a.guid || o && !o.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(s, 1), 
     a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
     c && !p.length && (f.teardown && !1 !== f.teardown.call(e, m, g.handle) || d.removeEvent(e, h, g.handle), 
     delete l[h]);
    } else for (h in l) d.event.remove(e, h + t[u], n, r, !0);
    d.isEmptyObject(l) && (delete g.handle, d._removeData(e, "events"));
   }
  },
  trigger: function(t, n, i, s) {
   var a, o, c, u, f, p, h, m = [ i || r ], v = l.call(t, "type") ? t.type : t, g = l.call(t, "namespace") ? t.namespace.split(".") : [];
   if (c = p = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !fe.test(v + d.event.triggered) && (v.indexOf(".") > -1 && (v = (g = v.split(".")).shift(), 
   g.sort()), o = v.indexOf(":") < 0 && "on" + v, (t = t[d.expando] ? t : new d.Event(v, "object" == typeof t && t)).isTrigger = s ? 2 : 3, 
   t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
   t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : d.makeArray(n, [ t ]), 
   f = d.event.special[v] || {}, s || !f.trigger || !1 !== f.trigger.apply(i, n))) {
    if (!s && !f.noBubble && !d.isWindow(i)) {
     for (u = f.delegateType || v, fe.test(u + v) || (c = c.parentNode); c; c = c.parentNode) m.push(c), 
     p = c;
     p === (i.ownerDocument || r) && m.push(p.defaultView || p.parentWindow || e);
    }
    for (h = 0; (c = m[h++]) && !t.isPropagationStopped(); ) t.type = h > 1 ? u : f.bindType || v, 
    (a = (d._data(c, "events") || {})[t.type] && d._data(c, "handle")) && a.apply(c, n), 
    (a = o && c[o]) && a.apply && M(c) && (t.result = a.apply(c, n), !1 === t.result && t.preventDefault());
    if (t.type = v, !s && !t.isDefaultPrevented() && (!f._default || !1 === f._default.apply(m.pop(), n)) && M(i) && o && i[v] && !d.isWindow(i)) {
     (p = i[o]) && (i[o] = null), d.event.triggered = v;
     try {
      i[v]();
     } catch (e) {}
     d.event.triggered = void 0, p && (i[o] = p);
    }
    return t.result;
   }
  },
  dispatch: function(e) {
   e = d.event.fix(e);
   var t, n, r, s, a, o = [], c = i.call(arguments), u = (d._data(this, "events") || {})[e.type] || [], l = d.event.special[e.type] || {};
   if (c[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
    for (o = d.event.handlers.call(this, e, u), t = 0; (s = o[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = s.elem, 
    n = 0; (a = s.handlers[n++]) && !e.isImmediatePropagationStopped(); ) (!e.rnamespace || e.rnamespace.test(a.namespace)) && (e.handleObj = a, 
    e.data = a.data, void 0 !== (r = ((d.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, c)) && !1 === (e.result = r) && (e.preventDefault(), 
    e.stopPropagation()));
    return l.postDispatch && l.postDispatch.call(this, e), e.result;
   }
  },
  handlers: function(e, t) {
   var n, r, i, s, a = [], o = t.delegateCount, c = e.target;
   if (o && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;c != this; c = c.parentNode || this) if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
    for (r = [], n = 0; o > n; n++) void 0 === r[i = (s = t[n]).selector + " "] && (r[i] = s.needsContext ? d(i, this).index(c) > -1 : d.find(i, this, null, [ c ]).length), 
    r[i] && r.push(s);
    r.length && a.push({
     elem: c,
     handlers: r
    });
   }
   return o < t.length && a.push({
    elem: this,
    handlers: t.slice(o)
   }), a;
  },
  fix: function(e) {
   if (e[d.expando]) return e;
   var t, n, i, s = e.type, a = e, o = this.fixHooks[s];
   for (o || (this.fixHooks[s] = o = le.test(s) ? this.mouseHooks : ue.test(s) ? this.keyHooks : {}), 
   i = o.props ? this.props.concat(o.props) : this.props, e = new d.Event(a), t = i.length; t--; ) e[n = i[t]] = a[n];
   return e.target || (e.target = a.srcElement || r), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
   e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e;
  },
  props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
  fixHooks: {},
  keyHooks: {
   props: "char charCode key keyCode".split(" "),
   filter: function(e, t) {
    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
    e;
   }
  },
  mouseHooks: {
   props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
   filter: function(e, t) {
    var n, i, s, a = t.button, o = t.fromElement;
    return null == e.pageX && null != t.clientX && (s = (i = e.target.ownerDocument || r).documentElement, 
    n = i.body, e.pageX = t.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), 
    e.pageY = t.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), 
    !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
    e;
   }
  },
  special: {
   load: {
    noBubble: !0
   },
   focus: {
    trigger: function() {
     if (this !== me() && this.focus) try {
      return this.focus(), !1;
     } catch (e) {}
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function() {
     return this === me() && this.blur ? (this.blur(), !1) : void 0;
    },
    delegateType: "focusout"
   },
   click: {
    trigger: function() {
     return d.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
     !1) : void 0;
    },
    _default: function(e) {
     return d.nodeName(e.target, "a");
    }
   },
   beforeunload: {
    postDispatch: function(e) {
     void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
    }
   }
  },
  simulate: function(e, t, n) {
   var r = d.extend(new d.Event(), n, {
    type: e,
    isSimulated: !0
   });
   d.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
  }
 }, d.removeEvent = r.removeEventListener ? function(e, t, n) {
  e.removeEventListener && e.removeEventListener(t, n);
 } : function(e, t, n) {
  var r = "on" + t;
  e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
 }, d.Event = function(e, t) {
  return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
  this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? de : he) : this.type = e, 
  t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), void (this[d.expando] = !0)) : new d.Event(e, t);
 }, d.Event.prototype = {
  constructor: d.Event,
  isDefaultPrevented: he,
  isPropagationStopped: he,
  isImmediatePropagationStopped: he,
  preventDefault: function() {
   var e = this.originalEvent;
   this.isDefaultPrevented = de, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
  },
  stopPropagation: function() {
   var e = this.originalEvent;
   this.isPropagationStopped = de, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), 
   e.cancelBubble = !0);
  },
  stopImmediatePropagation: function() {
   var e = this.originalEvent;
   this.isImmediatePropagationStopped = de, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
   this.stopPropagation();
  }
 }, d.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, function(e, t) {
  d.event.special[e] = {
   delegateType: t,
   bindType: t,
   handle: function(e) {
    var n, r = e.relatedTarget, i = e.handleObj;
    return (!r || r !== this && !d.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), 
    e.type = t), n;
   }
  };
 }), f.submit || (d.event.special.submit = {
  setup: function() {
   return !d.nodeName(this, "form") && void d.event.add(this, "click._submit keypress._submit", function(e) {
    var t = e.target, n = d.nodeName(t, "input") || d.nodeName(t, "button") ? d.prop(t, "form") : void 0;
    n && !d._data(n, "submit") && (d.event.add(n, "submit._submit", function(e) {
     e._submitBubble = !0;
    }), d._data(n, "submit", !0));
   });
  },
  postDispatch: function(e) {
   e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && d.event.simulate("submit", this.parentNode, e));
  },
  teardown: function() {
   return !d.nodeName(this, "form") && void d.event.remove(this, "._submit");
  }
 }), f.change || (d.event.special.change = {
  setup: function() {
   return ce.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (d.event.add(this, "propertychange._change", function(e) {
    "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
   }), d.event.add(this, "click._change", function(e) {
    this._justChanged && !e.isTrigger && (this._justChanged = !1), d.event.simulate("change", this, e);
   })), !1) : void d.event.add(this, "beforeactivate._change", function(e) {
    var t = e.target;
    ce.test(t.nodeName) && !d._data(t, "change") && (d.event.add(t, "change._change", function(e) {
     !this.parentNode || e.isSimulated || e.isTrigger || d.event.simulate("change", this.parentNode, e);
    }), d._data(t, "change", !0));
   });
  },
  handle: function(e) {
   var t = e.target;
   return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
  },
  teardown: function() {
   return d.event.remove(this, "._change"), !ce.test(this.nodeName);
  }
 }), f.focusin || d.each({
  focus: "focusin",
  blur: "focusout"
 }, function(e, t) {
  var n = function(e) {
   d.event.simulate(t, e.target, d.event.fix(e));
  };
  d.event.special[t] = {
   setup: function() {
    var r = this.ownerDocument || this, i = d._data(r, t);
    i || r.addEventListener(e, n, !0), d._data(r, t, (i || 0) + 1);
   },
   teardown: function() {
    var r = this.ownerDocument || this, i = d._data(r, t) - 1;
    i ? d._data(r, t, i) : (r.removeEventListener(e, n, !0), d._removeData(r, t));
   }
  };
 }), d.fn.extend({
  on: function(e, t, n, r) {
   return ve(this, e, t, n, r);
  },
  one: function(e, t, n, r) {
   return ve(this, e, t, n, r, 1);
  },
  off: function(e, t, n) {
   var r, i;
   if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
   this;
   if ("object" == typeof e) {
    for (i in e) this.off(i, t, e[i]);
    return this;
   }
   return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = he), 
   this.each(function() {
    d.event.remove(this, e, n, t);
   });
  },
  trigger: function(e, t) {
   return this.each(function() {
    d.event.trigger(e, t, this);
   });
  },
  triggerHandler: function(e, t) {
   var n = this[0];
   return n ? d.event.trigger(e, t, n, !0) : void 0;
  }
 });
 var ge = / jQuery\d+="(?:null|\d+)"/g, ye = new RegExp("<(?:" + Z + ")[\\s/>]", "i"), _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, be = /<script|<style|<link/i, xe = /checked\s*(?:[^=]|=\s*.checked.)/i, we = /^true\/(.*)/, ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ee = ee(r).appendChild(r.createElement("div"));
 function Ce(e, t) {
  return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
 }
 function Te(e) {
  return e.type = (null !== d.find.attr(e, "type")) + "/" + e.type, e;
 }
 function Se(e) {
  var t = we.exec(e.type);
  return t ? e.type = t[1] : e.removeAttribute("type"), e;
 }
 function Oe(e, t) {
  if (1 === t.nodeType && d.hasData(e)) {
   var n, r, i, s = d._data(e), a = d._data(t, s), o = s.events;
   if (o) for (n in delete a.handle, a.events = {}, o) for (r = 0, i = o[n].length; i > r; r++) d.event.add(t, n, o[n][r]);
   a.data && (a.data = d.extend({}, a.data));
  }
 }
 function Ae(e, t) {
  var n, r, i;
  if (1 === t.nodeType) {
   if (n = t.nodeName.toLowerCase(), !f.noCloneEvent && t[d.expando]) {
    for (r in (i = d._data(t)).events) d.removeEvent(t, r, i.handle);
    t.removeAttribute(d.expando);
   }
   "script" === n && t.text !== e.text ? (Te(t).text = e.text, Se(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
   f.html5Clone && e.innerHTML && !d.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && X.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
   t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }
 }
 function Ne(e, t, n, r) {
  t = s.apply([], t);
  var i, a, o, c, u, l, p = 0, h = e.length, m = h - 1, v = t[0], g = d.isFunction(v);
  if (g || h > 1 && "string" == typeof v && !f.checkClone && xe.test(v)) return e.each(function(i) {
   var s = e.eq(i);
   g && (t[0] = v.call(this, i, s.html())), Ne(s, t, n, r);
  });
  if (h && (i = (l = oe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === l.childNodes.length && (l = i), 
  i || r)) {
   for (o = (c = d.map(ne(l, "script"), Te)).length; h > p; p++) a = l, p !== m && (a = d.clone(a, !0, !0), 
   o && d.merge(c, ne(a, "script"))), n.call(e[p], a, p);
   if (o) for (u = c[c.length - 1].ownerDocument, d.map(c, Se), p = 0; o > p; p++) a = c[p], 
   G.test(a.type || "") && !d._data(a, "globalEval") && d.contains(u, a) && (a.src ? d._evalUrl && d._evalUrl(a.src) : d.globalEval((a.text || a.textContent || a.innerHTML || "").replace(ke, "")));
   l = i = null;
  }
  return e;
 }
 function Be(e, t, n) {
  for (var r, i = t ? d.filter(t, e) : e, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || d.cleanData(ne(r)), 
  r.parentNode && (n && d.contains(r.ownerDocument, r) && re(ne(r, "script")), r.parentNode.removeChild(r));
  return e;
 }
 d.extend({
  htmlPrefilter: function(e) {
   return e.replace(_e, "<$1></$2>");
  },
  clone: function(e, t, n) {
   var r, i, s, a, o, c = d.contains(e.ownerDocument, e);
   if (f.html5Clone || d.isXMLDoc(e) || !ye.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ee.innerHTML = e.outerHTML, 
   Ee.removeChild(s = Ee.firstChild)), !(f.noCloneEvent && f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e))) for (r = ne(s), 
   o = ne(e), a = 0; null != (i = o[a]); ++a) r[a] && Ae(i, r[a]);
   if (t) if (n) for (o = o || ne(e), r = r || ne(s), a = 0; null != (i = o[a]); a++) Oe(i, r[a]); else Oe(e, s);
   return (r = ne(s, "script")).length > 0 && re(r, !c && ne(e, "script")), r = o = i = null, 
   s;
  },
  cleanData: function(e, t) {
   for (var r, i, s, a, o = 0, c = d.expando, u = d.cache, l = f.attributes, p = d.event.special; null != (r = e[o]); o++) if ((t || M(r)) && (a = (s = r[c]) && u[s])) {
    if (a.events) for (i in a.events) p[i] ? d.event.remove(r, i) : d.removeEvent(r, i, a.handle);
    u[s] && (delete u[s], l || void 0 === r.removeAttribute ? r[c] = void 0 : r.removeAttribute(c), 
    n.push(s));
   }
  }
 }), d.fn.extend({
  domManip: Ne,
  detach: function(e) {
   return Be(this, e, !0);
  },
  remove: function(e) {
   return Be(this, e);
  },
  text: function(e) {
   return J(this, function(e) {
    return void 0 === e ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e));
   }, null, e, arguments.length);
  },
  append: function() {
   return Ne(this, arguments, function(e) {
    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ce(this, e).appendChild(e);
   });
  },
  prepend: function() {
   return Ne(this, arguments, function(e) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var t = Ce(this, e);
     t.insertBefore(e, t.firstChild);
    }
   });
  },
  before: function() {
   return Ne(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this);
   });
  },
  after: function() {
   return Ne(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
   });
  },
  empty: function() {
   for (var e, t = 0; null != (e = this[t]); t++) {
    for (1 === e.nodeType && d.cleanData(ne(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
    e.options && d.nodeName(e, "select") && (e.options.length = 0);
   }
   return this;
  },
  clone: function(e, t) {
   return e = null != e && e, t = null == t ? e : t, this.map(function() {
    return d.clone(this, e, t);
   });
  },
  html: function(e) {
   return J(this, function(e) {
    var t = this[0] || {}, n = 0, r = this.length;
    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ge, "") : void 0;
    if ("string" == typeof e && !be.test(e) && (f.htmlSerialize || !ye.test(e)) && (f.leadingWhitespace || !Y.test(e)) && !te[(K.exec(e) || [ "", "" ])[1].toLowerCase()]) {
     e = d.htmlPrefilter(e);
     try {
      for (;r > n; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(ne(t, !1)), 
      t.innerHTML = e);
      t = 0;
     } catch (e) {}
    }
    t && this.empty().append(e);
   }, null, e, arguments.length);
  },
  replaceWith: function() {
   var e = [];
   return Ne(this, arguments, function(t) {
    var n = this.parentNode;
    d.inArray(this, e) < 0 && (d.cleanData(ne(this)), n && n.replaceChild(t, this));
   }, e);
  }
 }), d.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(e, t) {
  d.fn[e] = function(e) {
   for (var n, r = 0, i = [], s = d(e), o = s.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), 
   d(s[r])[t](n), a.apply(i, n.get());
   return this.pushStack(i);
  };
 });
 var Re, Pe = {
  HTML: "block",
  BODY: "block"
 };
 function Le(e, t) {
  var n = d(t.createElement(e)).appendTo(t.body), r = d.css(n[0], "display");
  return n.detach(), r;
 }
 function Ie(e) {
  var t = r, n = Pe[e];
  return n || ("none" !== (n = Le(e, t)) && n || ((t = ((Re = (Re || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Re[0].contentDocument).document).write(), 
  t.close(), n = Le(e, t), Re.detach()), Pe[e] = n), n;
 }
 var Me = /^margin/, De = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"), je = function(e, t, n, r) {
  var i, s, a = {};
  for (s in t) a[s] = e.style[s], e.style[s] = t[s];
  for (s in i = n.apply(e, r || []), t) e.style[s] = a[s];
  return i;
 }, Ve = r.documentElement;
 !function() {
  var t, n, i, s, a, o, c = r.createElement("div"), u = r.createElement("div");
  if (u.style) {
   function l() {
    var l, f, p = r.documentElement;
    p.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
    t = i = o = !1, n = a = !0, e.getComputedStyle && (f = e.getComputedStyle(u), t = "1%" !== (f || {}).top, 
    o = "2px" === (f || {}).marginLeft, i = "4px" === (f || {
     width: "4px"
    }).width, u.style.marginRight = "50%", n = "4px" === (f || {
     marginRight: "4px"
    }).marginRight, (l = u.appendChild(r.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
    l.style.marginRight = l.style.width = "0", u.style.width = "1px", a = !parseFloat((e.getComputedStyle(l) || {}).marginRight), 
    u.removeChild(l)), u.style.display = "none", (s = 0 === u.getClientRects().length) && (u.style.display = "", 
    u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
    (s = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", 
    s = 0 === l[0].offsetHeight)), p.removeChild(c);
   }
   u.style.cssText = "float:left;opacity:.5", f.opacity = "0.5" === u.style.opacity, 
   f.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", 
   f.clearCloneStyle = "content-box" === u.style.backgroundClip, (c = r.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
   u.innerHTML = "", c.appendChild(u), f.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, 
   d.extend(f, {
    reliableHiddenOffsets: function() {
     return null == t && l(), s;
    },
    boxSizingReliable: function() {
     return null == t && l(), i;
    },
    pixelMarginRight: function() {
     return null == t && l(), n;
    },
    pixelPosition: function() {
     return null == t && l(), t;
    },
    reliableMarginRight: function() {
     return null == t && l(), a;
    },
    reliableMarginLeft: function() {
     return null == t && l(), o;
    }
   });
  }
 }();
 var Fe, qe, ze = /^(top|right|bottom|left)$/;
 function He(e, t) {
  return {
   get: function() {
    return e() ? void delete this.get : (this.get = t).apply(this, arguments);
   }
  };
 }
 e.getComputedStyle ? (Fe = function(t) {
  var n = t.ownerDocument.defaultView;
  return n.opener || (n = e), n.getComputedStyle(t);
 }, qe = function(e, t, n) {
  var r, i, s, a, o = e.style;
  return a = (n = n || Fe(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || d.contains(e.ownerDocument, e) || (a = d.style(e, t)), 
  !f.pixelMarginRight() && De.test(a) && Me.test(t) && (r = o.width, i = o.minWidth, 
  s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = r, 
  o.minWidth = i, o.maxWidth = s)), void 0 === a ? a : a + "";
 }) : Ve.currentStyle && (Fe = function(e) {
  return e.currentStyle;
 }, qe = function(e, t, n) {
  var r, i, s, a, o = e.style;
  return null == (a = (n = n || Fe(e)) ? n[t] : void 0) && o && o[t] && (a = o[t]), 
  De.test(a) && !ze.test(t) && (r = o.left, (s = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), 
  o.left = "fontSize" === t ? "1em" : a, a = o.pixelLeft + "px", o.left = r, s && (i.left = s)), 
  void 0 === a ? a : a + "" || "auto";
 });
 var Ue = /alpha\([^)]*\)/i, $e = /opacity\s*=\s*([^)]*)/i, Qe = /^(none|table(?!-c[ea]).+)/, We = new RegExp("^(" + H + ")(.*)$", "i"), Je = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
 }, Xe = {
  letterSpacing: "0",
  fontWeight: "400"
 }, Ke = [ "Webkit", "O", "Moz", "ms" ], Ge = r.createElement("div").style;
 function Ye(e) {
  if (e in Ge) return e;
  for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ke.length; n--; ) if ((e = Ke[n] + t) in Ge) return e;
 }
 function Ze(e, t) {
  for (var n, r, i, s = [], a = 0, o = e.length; o > a; a++) (r = e[a]).style && (s[a] = d._data(r, "olddisplay"), 
  n = r.style.display, t ? (s[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Q(r) && (s[a] = d._data(r, "olddisplay", Ie(r.nodeName)))) : (i = Q(r), 
  (n && "none" !== n || !i) && d._data(r, "olddisplay", i ? n : d.css(r, "display"))));
  for (a = 0; o > a; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[a] || "" : "none"));
  return e;
 }
 function et(e, t, n) {
  var r = We.exec(t);
  return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
 }
 function tt(e, t, n, r, i) {
  for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === n && (a += d.css(e, n + $[s], !0, i)), 
  r ? ("content" === n && (a -= d.css(e, "padding" + $[s], !0, i)), "margin" !== n && (a -= d.css(e, "border" + $[s] + "Width", !0, i))) : (a += d.css(e, "padding" + $[s], !0, i), 
  "padding" !== n && (a += d.css(e, "border" + $[s] + "Width", !0, i)));
  return a;
 }
 function nt(t, n, i) {
  var s = !0, a = "width" === n ? t.offsetWidth : t.offsetHeight, o = Fe(t), c = f.boxSizing && "border-box" === d.css(t, "boxSizing", !1, o);
  if (r.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 
  0 >= a || null == a) {
   if ((0 > (a = qe(t, n, o)) || null == a) && (a = t.style[n]), De.test(a)) return a;
   s = c && (f.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0;
  }
  return a + tt(t, n, i || (c ? "border" : "content"), s, o) + "px";
 }
 function rt(e, t, n, r, i) {
  return new rt.prototype.init(e, t, n, r, i);
 }
 d.extend({
  cssHooks: {
   opacity: {
    get: function(e, t) {
     if (t) {
      var n = qe(e, "opacity");
      return "" === n ? "1" : n;
     }
    }
   }
  },
  cssNumber: {
   animationIterationCount: !0,
   columnCount: !0,
   fillOpacity: !0,
   flexGrow: !0,
   flexShrink: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   order: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   float: f.cssFloat ? "cssFloat" : "styleFloat"
  },
  style: function(e, t, n, r) {
   if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
    var i, s, a, o = d.camelCase(t), c = e.style;
    if (t = d.cssProps[o] || (d.cssProps[o] = Ye(o) || o), a = d.cssHooks[t] || d.cssHooks[o], 
    void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
    if ("string" === (s = typeof n) && (i = U.exec(n)) && i[1] && (n = W(e, t, i), s = "number"), 
    null != n && n == n && ("number" === s && (n += i && i[3] || (d.cssNumber[o] ? "" : "px")), 
    f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
    !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
     c[t] = n;
    } catch (e) {}
   }
  },
  css: function(e, t, n, r) {
   var i, s, a, o = d.camelCase(t);
   return t = d.cssProps[o] || (d.cssProps[o] = Ye(o) || o), (a = d.cssHooks[t] || d.cssHooks[o]) && "get" in a && (s = a.get(e, !0, n)), 
   void 0 === s && (s = qe(e, t, r)), "normal" === s && t in Xe && (s = Xe[t]), "" === n || n ? (i = parseFloat(s), 
   !0 === n || isFinite(i) ? i || 0 : s) : s;
  }
 }), d.each([ "height", "width" ], function(e, t) {
  d.cssHooks[t] = {
   get: function(e, n, r) {
    return n ? Qe.test(d.css(e, "display")) && 0 === e.offsetWidth ? je(e, Je, function() {
     return nt(e, t, r);
    }) : nt(e, t, r) : void 0;
   },
   set: function(e, n, r) {
    var i = r && Fe(e);
    return et(0, n, r ? tt(e, t, r, f.boxSizing && "border-box" === d.css(e, "boxSizing", !1, i), i) : 0);
   }
  };
 }), f.opacity || (d.cssHooks.opacity = {
  get: function(e, t) {
   return $e.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
  },
  set: function(e, t) {
   var n = e.style, r = e.currentStyle, i = d.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", s = r && r.filter || n.filter || "";
   n.zoom = 1, (t >= 1 || "" === t) && "" === d.trim(s.replace(Ue, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
   "" === t || r && !r.filter) || (n.filter = Ue.test(s) ? s.replace(Ue, i) : s + " " + i);
  }
 }), d.cssHooks.marginRight = He(f.reliableMarginRight, function(e, t) {
  return t ? je(e, {
   display: "inline-block"
  }, qe, [ e, "marginRight" ]) : void 0;
 }), d.cssHooks.marginLeft = He(f.reliableMarginLeft, function(e, t) {
  return t ? (parseFloat(qe(e, "marginLeft")) || (d.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - je(e, {
   marginLeft: 0
  }, function() {
   return e.getBoundingClientRect().left;
  }) : 0)) + "px" : void 0;
 }), d.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(e, t) {
  d.cssHooks[e + t] = {
   expand: function(n) {
    for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + $[r] + t] = s[r] || s[r - 2] || s[0];
    return i;
   }
  }, Me.test(e) || (d.cssHooks[e + t].set = et);
 }), d.fn.extend({
  css: function(e, t) {
   return J(this, function(e, t, n) {
    var r, i, s = {}, a = 0;
    if (d.isArray(t)) {
     for (r = Fe(e), i = t.length; i > a; a++) s[t[a]] = d.css(e, t[a], !1, r);
     return s;
    }
    return void 0 !== n ? d.style(e, t, n) : d.css(e, t);
   }, e, t, arguments.length > 1);
  },
  show: function() {
   return Ze(this, !0);
  },
  hide: function() {
   return Ze(this);
  },
  toggle: function(e) {
   return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
    Q(this) ? d(this).show() : d(this).hide();
   });
  }
 }), d.Tween = rt, rt.prototype = {
  constructor: rt,
  init: function(e, t, n, r, i, s) {
   this.elem = e, this.prop = n, this.easing = i || d.easing._default, this.options = t, 
   this.start = this.now = this.cur(), this.end = r, this.unit = s || (d.cssNumber[n] ? "" : "px");
  },
  cur: function() {
   var e = rt.propHooks[this.prop];
   return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
  },
  run: function(e) {
   var t, n = rt.propHooks[this.prop];
   return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
   this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
   n && n.set ? n.set(this) : rt.propHooks._default.set(this), this;
  }
 }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
  _default: {
   get: function(e) {
    var t;
    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
   },
   set: function(e) {
    d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit);
   }
  }
 }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
  }
 }, d.easing = {
  linear: function(e) {
   return e;
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2;
  },
  _default: "swing"
 }, d.fx = rt.prototype.init, d.fx.step = {};
 var it, st, at = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
 function ct() {
  return e.setTimeout(function() {
   it = void 0;
  }), it = d.now();
 }
 function ut(e, t) {
  var n, r = {
   height: e
  }, i = 0;
  for (t = t ? 1 : 0; 4 > i; i += 2 - t) r["margin" + (n = $[i])] = r["padding" + n] = e;
  return t && (r.opacity = r.width = e), r;
 }
 function lt(e, t, n) {
  for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), s = 0, a = i.length; a > s; s++) if (r = i[s].call(n, t, e)) return r;
 }
 function ft(e, t, n) {
  var r, i, s = 0, a = ft.prefilters.length, o = d.Deferred().always(function() {
   delete c.elem;
  }), c = function() {
   if (i) return !1;
   for (var t = it || ct(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), s = 0, a = u.tweens.length; a > s; s++) u.tweens[s].run(r);
   return o.notifyWith(e, [ u, r, n ]), 1 > r && a ? n : (o.resolveWith(e, [ u ]), 
   !1);
  }, u = o.promise({
   elem: e,
   props: d.extend({}, t),
   opts: d.extend(!0, {
    specialEasing: {},
    easing: d.easing._default
   }, n),
   originalProperties: t,
   originalOptions: n,
   startTime: it || ct(),
   duration: n.duration,
   tweens: [],
   createTween: function(t, n) {
    var r = d.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
    return u.tweens.push(r), r;
   },
   stop: function(t) {
    var n = 0, r = t ? u.tweens.length : 0;
    if (i) return this;
    for (i = !0; r > n; n++) u.tweens[n].run(1);
    return t ? (o.notifyWith(e, [ u, 1, 0 ]), o.resolveWith(e, [ u, t ])) : o.rejectWith(e, [ u, t ]), 
    this;
   }
  }), l = u.props;
  for (function(e, t) {
   var n, r, i, s, a;
   for (n in e) if (i = t[r = d.camelCase(n)], s = e[n], d.isArray(s) && (i = s[1], 
   s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), (a = d.cssHooks[r]) && "expand" in a) for (n in s = a.expand(s), 
   delete e[r], s) n in e || (e[n] = s[n], t[n] = i); else t[r] = i;
  }(l, u.opts.specialEasing); a > s; s++) if (r = ft.prefilters[s].call(u, e, l, u.opts)) return d.isFunction(r.stop) && (d._queueHooks(u.elem, u.opts.queue).stop = d.proxy(r.stop, r)), 
  r;
  return d.map(l, lt, u), d.isFunction(u.opts.start) && u.opts.start.call(e, u), d.fx.timer(d.extend(c, {
   elem: e,
   anim: u,
   queue: u.opts.queue
  })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
 }
 d.Animation = d.extend(ft, {
  tweeners: {
   "*": [ function(e, t) {
    var n = this.createTween(e, t);
    return W(n.elem, e, U.exec(t), n), n;
   } ]
  },
  tweener: function(e, t) {
   d.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
   for (var n, r = 0, i = e.length; i > r; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], 
   ft.tweeners[n].unshift(t);
  },
  prefilters: [ function(e, t, n) {
   var r, i, s, a, o, c, u, l = this, p = {}, h = e.style, m = e.nodeType && Q(e), v = d._data(e, "fxshow");
   for (r in n.queue || (null == (o = d._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, 
   c = o.empty.fire, o.empty.fire = function() {
    o.unqueued || c();
   }), o.unqueued++, l.always(function() {
    l.always(function() {
     o.unqueued--, d.queue(e, "fx").length || o.empty.fire();
    });
   })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
   "inline" === ("none" === (u = d.css(e, "display")) ? d._data(e, "olddisplay") || Ie(e.nodeName) : u) && "none" === d.css(e, "float") && (f.inlineBlockNeedsLayout && "inline" !== Ie(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), 
   n.overflow && (h.overflow = "hidden", f.shrinkWrapBlocks() || l.always(function() {
    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
   })), t) if (i = t[r], at.exec(i)) {
    if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
     if ("show" !== i || !v || void 0 === v[r]) continue;
     m = !0;
    }
    p[r] = v && v[r] || d.style(e, r);
   } else u = void 0;
   if (d.isEmptyObject(p)) "inline" === ("none" === u ? Ie(e.nodeName) : u) && (h.display = u); else for (r in v ? "hidden" in v && (m = v.hidden) : v = d._data(e, "fxshow", {}), 
   s && (v.hidden = !m), m ? d(e).show() : l.done(function() {
    d(e).hide();
   }), l.done(function() {
    var t;
    for (t in d._removeData(e, "fxshow"), p) d.style(e, t, p[t]);
   }), p) a = lt(m ? v[r] : 0, r, l), r in v || (v[r] = a.start, m && (a.end = a.start, 
   a.start = "width" === r || "height" === r ? 1 : 0));
  } ],
  prefilter: function(e, t) {
   t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
  }
 }), d.speed = function(e, t, n) {
  var r = e && "object" == typeof e ? d.extend({}, e) : {
   complete: n || !n && t || d.isFunction(e) && e,
   duration: e,
   easing: n && t || t && !d.isFunction(t) && t
  };
  return r.duration = d.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in d.fx.speeds ? d.fx.speeds[r.duration] : d.fx.speeds._default, 
  (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
   d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue);
  }, r;
 }, d.fn.extend({
  fadeTo: function(e, t, n, r) {
   return this.filter(Q).css("opacity", 0).show().end().animate({
    opacity: t
   }, e, n, r);
  },
  animate: function(e, t, n, r) {
   var i = d.isEmptyObject(e), s = d.speed(t, n, r), a = function() {
    var t = ft(this, d.extend({}, e), s);
    (i || d._data(this, "finish")) && t.stop(!0);
   };
   return a.finish = a, i || !1 === s.queue ? this.each(a) : this.queue(s.queue, a);
  },
  stop: function(e, t, n) {
   var r = function(e) {
    var t = e.stop;
    delete e.stop, t(n);
   };
   return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
   this.each(function() {
    var t = !0, i = null != e && e + "queueHooks", s = d.timers, a = d._data(this);
    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
    for (i = s.length; i--; ) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), 
    t = !1, s.splice(i, 1));
    (t || !n) && d.dequeue(this, e);
   });
  },
  finish: function(e) {
   return !1 !== e && (e = e || "fx"), this.each(function() {
    var t, n = d._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = d.timers, a = r ? r.length : 0;
    for (n.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
    t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), 
    s.splice(t, 1));
    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
    delete n.finish;
   });
  }
 }), d.each([ "toggle", "show", "hide" ], function(e, t) {
  var n = d.fn[t];
  d.fn[t] = function(e, r, i) {
   return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
  };
 }), d.each({
  slideDown: ut("show"),
  slideUp: ut("hide"),
  slideToggle: ut("toggle"),
  fadeIn: {
   opacity: "show"
  },
  fadeOut: {
   opacity: "hide"
  },
  fadeToggle: {
   opacity: "toggle"
  }
 }, function(e, t) {
  d.fn[e] = function(e, n, r) {
   return this.animate(t, e, n, r);
  };
 }), d.timers = [], d.fx.tick = function() {
  var e, t = d.timers, n = 0;
  for (it = d.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
  t.length || d.fx.stop(), it = void 0;
 }, d.fx.timer = function(e) {
  d.timers.push(e), e() ? d.fx.start() : d.timers.pop();
 }, d.fx.interval = 13, d.fx.start = function() {
  st || (st = e.setInterval(d.fx.tick, d.fx.interval));
 }, d.fx.stop = function() {
  e.clearInterval(st), st = null;
 }, d.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, d.fn.delay = function(t, n) {
  return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
   var i = e.setTimeout(n, t);
   r.stop = function() {
    e.clearTimeout(i);
   };
  });
 }, function() {
  var e, t = r.createElement("input"), n = r.createElement("div"), i = r.createElement("select"), s = i.appendChild(r.createElement("option"));
  (n = r.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
  e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), 
  (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", f.getSetAttribute = "t" !== n.className, 
  f.style = /top/.test(e.getAttribute("style")), f.hrefNormalized = "/a" === e.getAttribute("href"), 
  f.checkOn = !!t.value, f.optSelected = s.selected, f.enctype = !!r.createElement("form").enctype, 
  i.disabled = !0, f.optDisabled = !s.disabled, (t = r.createElement("input")).setAttribute("value", ""), 
  f.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), 
  f.radioValue = "t" === t.value;
 }();
 var pt = /\r/g;
 d.fn.extend({
  val: function(e) {
   var t, n, r, i = this[0];
   return arguments.length ? (r = d.isFunction(e), this.each(function(n) {
    var i;
    1 === this.nodeType && (null == (i = r ? e.call(this, n, d(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : d.isArray(i) && (i = d.map(i, function(e) {
     return null == e ? "" : e + "";
    })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
   })) : i ? (t = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(pt, "") : null == n ? "" : n : void 0;
  }
 }), d.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = d.find.attr(e, "value");
     return null != t ? t : d.trim(d.text(e));
    }
   },
   select: {
    get: function(e) {
     for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, a = s ? null : [], o = s ? i + 1 : r.length, c = 0 > i ? o : s ? i : 0; o > c; c++) if (((n = r[c]).selected || c === i) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
      if (t = d(n).val(), s) return t;
      a.push(t);
     }
     return a;
    },
    set: function(e, t) {
     for (var n, r, i = e.options, s = d.makeArray(t), a = i.length; a--; ) if (r = i[a], 
     d.inArray(d.valHooks.option.get(r), s) >= 0) try {
      r.selected = n = !0;
     } catch (e) {
      r.scrollHeight;
     } else r.selected = !1;
     return n || (e.selectedIndex = -1), i;
    }
   }
  }
 }), d.each([ "radio", "checkbox" ], function() {
  d.valHooks[this] = {
   set: function(e, t) {
    return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) > -1 : void 0;
   }
  }, f.checkOn || (d.valHooks[this].get = function(e) {
   return null === e.getAttribute("value") ? "on" : e.value;
  });
 });
 var dt, ht, mt = d.expr.attrHandle, vt = /^(?:checked|selected)$/i, gt = f.getSetAttribute, yt = f.input;
 d.fn.extend({
  attr: function(e, t) {
   return J(this, d.attr, e, t, arguments.length > 1);
  },
  removeAttr: function(e) {
   return this.each(function() {
    d.removeAttr(this, e);
   });
  }
 }), d.extend({
  attr: function(e, t, n) {
   var r, i, s = e.nodeType;
   if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === s && d.isXMLDoc(e) || (t = t.toLowerCase(), 
   i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? ht : dt)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
   n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = d.find.attr(e, t)) ? void 0 : r);
  },
  attrHooks: {
   type: {
    set: function(e, t) {
     if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t;
     }
    }
   }
  },
  removeAttr: function(e, t) {
   var n, r, i = 0, s = t && t.match(P);
   if (s && 1 === e.nodeType) for (;n = s[i++]; ) r = d.propFix[n] || n, d.expr.match.bool.test(n) ? yt && gt || !vt.test(n) ? e[r] = !1 : e[d.camelCase("default-" + n)] = e[r] = !1 : d.attr(e, n, ""), 
   e.removeAttribute(gt ? n : r);
  }
 }), ht = {
  set: function(e, t, n) {
   return !1 === t ? d.removeAttr(e, n) : yt && gt || !vt.test(n) ? e.setAttribute(!gt && d.propFix[n] || n, n) : e[d.camelCase("default-" + n)] = e[n] = !0, 
   n;
  }
 }, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
  var n = mt[t] || d.find.attr;
  yt && gt || !vt.test(t) ? mt[t] = function(e, t, r) {
   var i, s;
   return r || (s = mt[t], mt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, 
   mt[t] = s), i;
  } : mt[t] = function(e, t, n) {
   return n ? void 0 : e[d.camelCase("default-" + t)] ? t.toLowerCase() : null;
  };
 }), yt && gt || (d.attrHooks.value = {
  set: function(e, t, n) {
   return d.nodeName(e, "input") ? void (e.defaultValue = t) : dt && dt.set(e, t, n);
  }
 }), gt || (dt = {
  set: function(e, t, n) {
   var r = e.getAttributeNode(n);
   return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", 
   "value" === n || t === e.getAttribute(n) ? t : void 0;
  }
 }, mt.id = mt.name = mt.coords = function(e, t, n) {
  var r;
  return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
 }, d.valHooks.button = {
  get: function(e, t) {
   var n = e.getAttributeNode(t);
   return n && n.specified ? n.value : void 0;
  },
  set: dt.set
 }, d.attrHooks.contenteditable = {
  set: function(e, t, n) {
   dt.set(e, "" !== t && t, n);
  }
 }, d.each([ "width", "height" ], function(e, t) {
  d.attrHooks[t] = {
   set: function(e, n) {
    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
   }
  };
 })), f.style || (d.attrHooks.style = {
  get: function(e) {
   return e.style.cssText || void 0;
  },
  set: function(e, t) {
   return e.style.cssText = t + "";
  }
 });
 var _t = /^(?:input|select|textarea|button|object)$/i, bt = /^(?:a|area)$/i;
 d.fn.extend({
  prop: function(e, t) {
   return J(this, d.prop, e, t, arguments.length > 1);
  },
  removeProp: function(e) {
   return e = d.propFix[e] || e, this.each(function() {
    try {
     this[e] = void 0, delete this[e];
    } catch (e) {}
   });
  }
 }), d.extend({
  prop: function(e, t, n) {
   var r, i, s = e.nodeType;
   if (3 !== s && 8 !== s && 2 !== s) return 1 === s && d.isXMLDoc(e) || (t = d.propFix[t] || t, 
   i = d.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var t = d.find.attr(e, "tabindex");
     return t ? parseInt(t, 10) : _t.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
    }
   }
  },
  propFix: {
   for: "htmlFor",
   class: "className"
  }
 }), f.hrefNormalized || d.each([ "href", "src" ], function(e, t) {
  d.propHooks[t] = {
   get: function(e) {
    return e.getAttribute(t, 4);
   }
  };
 }), f.optSelected || (d.propHooks.selected = {
  get: function(e) {
   var t = e.parentNode;
   return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
  }
 }), d.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
  d.propFix[this.toLowerCase()] = this;
 }), f.enctype || (d.propFix.enctype = "encoding");
 var xt = /[\t\r\n\f]/g;
 function wt(e) {
  return d.attr(e, "class") || "";
 }
 d.fn.extend({
  addClass: function(e) {
   var t, n, r, i, s, a, o, c = 0;
   if (d.isFunction(e)) return this.each(function(t) {
    d(this).addClass(e.call(this, t, wt(this)));
   });
   if ("string" == typeof e && e) for (t = e.match(P) || []; n = this[c++]; ) if (i = wt(n), 
   r = 1 === n.nodeType && (" " + i + " ").replace(xt, " ")) {
    for (a = 0; s = t[a++]; ) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
    i !== (o = d.trim(r)) && d.attr(n, "class", o);
   }
   return this;
  },
  removeClass: function(e) {
   var t, n, r, i, s, a, o, c = 0;
   if (d.isFunction(e)) return this.each(function(t) {
    d(this).removeClass(e.call(this, t, wt(this)));
   });
   if (!arguments.length) return this.attr("class", "");
   if ("string" == typeof e && e) for (t = e.match(P) || []; n = this[c++]; ) if (i = wt(n), 
   r = 1 === n.nodeType && (" " + i + " ").replace(xt, " ")) {
    for (a = 0; s = t[a++]; ) for (;r.indexOf(" " + s + " ") > -1; ) r = r.replace(" " + s + " ", " ");
    i !== (o = d.trim(r)) && d.attr(n, "class", o);
   }
   return this;
  },
  toggleClass: function(e, t) {
   var n = typeof e;
   return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function(n) {
    d(this).toggleClass(e.call(this, n, wt(this), t), t);
   }) : this.each(function() {
    var t, r, i, s;
    if ("string" === n) for (r = 0, i = d(this), s = e.match(P) || []; t = s[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (void 0 === e || "boolean" === n) && ((t = wt(this)) && d._data(this, "__className__", t), 
    d.attr(this, "class", t || !1 === e ? "" : d._data(this, "__className__") || ""));
   });
  },
  hasClass: function(e) {
   var t, n, r = 0;
   for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + wt(n) + " ").replace(xt, " ").indexOf(t) > -1) return !0;
   return !1;
  }
 }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
  d.fn[t] = function(e, n) {
   return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
  };
 }), d.fn.extend({
  hover: function(e, t) {
   return this.mouseenter(e).mouseleave(t || e);
  }
 });
 var kt = e.location, Et = d.now(), Ct = /\?/, Tt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
 d.parseJSON = function(t) {
  if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
  var n, r = null, i = d.trim(t + "");
  return i && !d.trim(i.replace(Tt, function(e, t, i, s) {
   return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "");
  })) ? Function("return " + i)() : d.error("Invalid JSON: " + t);
 }, d.parseXML = function(t) {
  var n;
  if (!t || "string" != typeof t) return null;
  try {
   e.DOMParser ? n = new e.DOMParser().parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", 
   n.loadXML(t));
  } catch (e) {
   n = void 0;
  }
  return n && n.documentElement && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), 
  n;
 };
 var St = /#.*$/, Ot = /([?&])_=[^&]*/, At = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nt = /^(?:GET|HEAD)$/, Bt = /^\/\//, Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Pt = {}, Lt = {}, It = "*/".concat("*"), Mt = kt.href, Dt = Rt.exec(Mt.toLowerCase()) || [];
 function jt(e) {
  return function(t, n) {
   "string" != typeof t && (n = t, t = "*");
   var r, i = 0, s = t.toLowerCase().match(P) || [];
   if (d.isFunction(n)) for (;r = s[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", 
   (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
  };
 }
 function Vt(e, t, n, r) {
  var i = {}, s = e === Lt;
  function a(o) {
   var c;
   return i[o] = !0, d.each(e[o] || [], function(e, o) {
    var u = o(t, n, r);
    return "string" != typeof u || s || i[u] ? s ? !(c = u) : void 0 : (t.dataTypes.unshift(u), 
    a(u), !1);
   }), c;
  }
  return a(t.dataTypes[0]) || !i["*"] && a("*");
 }
 function Ft(e, t) {
  var n, r, i = d.ajaxSettings.flatOptions || {};
  for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
  return n && d.extend(!0, e, n), e;
 }
 function qt(e) {
  return e.style && e.style.display || d.css(e, "display");
 }
 d.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: Mt,
   type: "GET",
   isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt[1]),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": It,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /\bxml\b/,
    html: /\bhtml/,
    json: /\bjson\b/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
   },
   converters: {
    "* text": String,
    "text html": !0,
    "text json": d.parseJSON,
    "text xml": d.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(e, t) {
   return t ? Ft(Ft(e, d.ajaxSettings), t) : Ft(d.ajaxSettings, e);
  },
  ajaxPrefilter: jt(Pt),
  ajaxTransport: jt(Lt),
  ajax: function(t, n) {
   "object" == typeof t && (n = t, t = void 0), n = n || {};
   var r, i, s, a, o, c, u, l, f = d.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? d(p) : d.event, m = d.Deferred(), v = d.Callbacks("once memory"), g = f.statusCode || {}, y = {}, _ = {}, b = 0, x = "canceled", w = {
    readyState: 0,
    getResponseHeader: function(e) {
     var t;
     if (2 === b) {
      if (!l) for (l = {}; t = At.exec(a); ) l[t[1].toLowerCase()] = t[2];
      t = l[e.toLowerCase()];
     }
     return null == t ? null : t;
    },
    getAllResponseHeaders: function() {
     return 2 === b ? a : null;
    },
    setRequestHeader: function(e, t) {
     var n = e.toLowerCase();
     return b || (e = _[n] = _[n] || e, y[e] = t), this;
    },
    overrideMimeType: function(e) {
     return b || (f.mimeType = e), this;
    },
    statusCode: function(e) {
     var t;
     if (e) if (2 > b) for (t in e) g[t] = [ g[t], e[t] ]; else w.always(e[w.status]);
     return this;
    },
    abort: function(e) {
     var t = e || x;
     return u && u.abort(t), k(0, t), this;
    }
   };
   if (m.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || Mt) + "").replace(St, "").replace(Bt, Dt[1] + "//"), 
   f.type = n.method || n.type || f.method || f.type, f.dataTypes = d.trim(f.dataType || "*").toLowerCase().match(P) || [ "" ], 
   null == f.crossDomain && (r = Rt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Dt[1] && r[2] === Dt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), 
   f.data && f.processData && "string" != typeof f.data && (f.data = d.param(f.data, f.traditional)), 
   Vt(Pt, f, n, w), 2 === b) return w;
   for (i in (c = d.event && f.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), 
   f.type = f.type.toUpperCase(), f.hasContent = !Nt.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (Ct.test(s) ? "&" : "?") + f.data, 
   delete f.data), !1 === f.cache && (f.url = Ot.test(s) ? s.replace(Ot, "$1_=" + Et++) : s + (Ct.test(s) ? "&" : "?") + "_=" + Et++)), 
   f.ifModified && (d.lastModified[s] && w.setRequestHeader("If-Modified-Since", d.lastModified[s]), 
   d.etag[s] && w.setRequestHeader("If-None-Match", d.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && w.setRequestHeader("Content-Type", f.contentType), 
   w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + It + "; q=0.01" : "") : f.accepts["*"]), 
   f.headers) w.setRequestHeader(i, f.headers[i]);
   if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === b)) return w.abort();
   for (i in x = "abort", {
    success: 1,
    error: 1,
    complete: 1
   }) w[i](f[i]);
   if (u = Vt(Lt, f, n, w)) {
    if (w.readyState = 1, c && h.trigger("ajaxSend", [ w, f ]), 2 === b) return w;
    f.async && f.timeout > 0 && (o = e.setTimeout(function() {
     w.abort("timeout");
    }, f.timeout));
    try {
     b = 1, u.send(y, k);
    } catch (e) {
     if (!(2 > b)) throw e;
     k(-1, e);
    }
   } else k(-1, "No Transport");
   function k(t, n, r, i) {
    var l, y, _, x, k, E = n;
    2 !== b && (b = 2, o && e.clearTimeout(o), u = void 0, a = i || "", w.readyState = t > 0 ? 4 : 0, 
    l = t >= 200 && 300 > t || 304 === t, r && (x = function(e, t, n) {
     for (var r, i, s, a, o = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
     void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
     if (i) for (a in o) if (o[a] && o[a].test(i)) {
      c.unshift(a);
      break;
     }
     if (c[0] in n) s = c[0]; else {
      for (a in n) {
       if (!c[0] || e.converters[a + " " + c[0]]) {
        s = a;
        break;
       }
       r || (r = a);
      }
      s = s || r;
     }
     return s ? (s !== c[0] && c.unshift(s), n[s]) : void 0;
    }(f, w, r)), x = function(e, t, n, r) {
     var i, s, a, o, c, u = {}, l = e.dataTypes.slice();
     if (l[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
     for (s = l.shift(); s; ) if (e.responseFields[s] && (n[e.responseFields[s]] = t), 
     !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = s, s = l.shift()) if ("*" === s) s = c; else if ("*" !== c && c !== s) {
      if (!(a = u[c + " " + s] || u["* " + s])) for (i in u) if ((o = i.split(" "))[1] === s && (a = u[c + " " + o[0]] || u["* " + o[0]])) {
       !0 === a ? a = u[i] : !0 !== u[i] && (s = o[0], l.unshift(o[1]));
       break;
      }
      if (!0 !== a) if (a && e.throws) t = a(t); else try {
       t = a(t);
      } catch (e) {
       return {
        state: "parsererror",
        error: a ? e : "No conversion from " + c + " to " + s
       };
      }
     }
     return {
      state: "success",
      data: t
     };
    }(f, x, w, l), l ? (f.ifModified && ((k = w.getResponseHeader("Last-Modified")) && (d.lastModified[s] = k), 
    (k = w.getResponseHeader("etag")) && (d.etag[s] = k)), 204 === t || "HEAD" === f.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, 
    y = x.data, l = !(_ = x.error))) : (_ = E, (t || !E) && (E = "error", 0 > t && (t = 0))), 
    w.status = t, w.statusText = (n || E) + "", l ? m.resolveWith(p, [ y, E, w ]) : m.rejectWith(p, [ w, E, _ ]), 
    w.statusCode(g), g = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [ w, f, l ? y : _ ]), 
    v.fireWith(p, [ w, E ]), c && (h.trigger("ajaxComplete", [ w, f ]), --d.active || d.event.trigger("ajaxStop")));
   }
   return w;
  },
  getJSON: function(e, t, n) {
   return d.get(e, t, n, "json");
  },
  getScript: function(e, t) {
   return d.get(e, void 0, t, "script");
  }
 }), d.each([ "get", "post" ], function(e, t) {
  d[t] = function(e, n, r, i) {
   return d.isFunction(n) && (i = i || r, r = n, n = void 0), d.ajax(d.extend({
    url: e,
    type: t,
    dataType: i,
    data: n,
    success: r
   }, d.isPlainObject(e) && e));
  };
 }), d._evalUrl = function(e) {
  return d.ajax({
   url: e,
   type: "GET",
   dataType: "script",
   cache: !0,
   async: !1,
   global: !1,
   throws: !0
  });
 }, d.fn.extend({
  wrapAll: function(e) {
   if (d.isFunction(e)) return this.each(function(t) {
    d(this).wrapAll(e.call(this, t));
   });
   if (this[0]) {
    var t = d(e, this[0].ownerDocument).eq(0).clone(!0);
    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
     for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
     return e;
    }).append(this);
   }
   return this;
  },
  wrapInner: function(e) {
   return d.isFunction(e) ? this.each(function(t) {
    d(this).wrapInner(e.call(this, t));
   }) : this.each(function() {
    var t = d(this), n = t.contents();
    n.length ? n.wrapAll(e) : t.append(e);
   });
  },
  wrap: function(e) {
   var t = d.isFunction(e);
   return this.each(function(n) {
    d(this).wrapAll(t ? e.call(this, n) : e);
   });
  },
  unwrap: function() {
   return this.parent().each(function() {
    d.nodeName(this, "body") || d(this).replaceWith(this.childNodes);
   }).end();
  }
 }), d.expr.filters.hidden = function(e) {
  return f.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
   for (;e && 1 === e.nodeType; ) {
    if ("none" === qt(e) || "hidden" === e.type) return !0;
    e = e.parentNode;
   }
   return !1;
  }(e);
 }, d.expr.filters.visible = function(e) {
  return !d.expr.filters.hidden(e);
 };
 var zt = /%20/g, Ht = /\[\]$/, Ut = /\r?\n/g, $t = /^(?:submit|button|image|reset|file)$/i, Qt = /^(?:input|select|textarea|keygen)/i;
 function Wt(e, t, n, r) {
  var i;
  if (d.isArray(t)) d.each(t, function(t, i) {
   n || Ht.test(e) ? r(e, i) : Wt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
  }); else if (n || "object" !== d.type(t)) r(e, t); else for (i in t) Wt(e + "[" + i + "]", t[i], n, r);
 }
 d.param = function(e, t) {
  var n, r = [], i = function(e, t) {
   t = d.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
  };
  if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
   i(this.name, this.value);
  }); else for (n in e) Wt(n, e[n], t, i);
  return r.join("&").replace(zt, "+");
 }, d.fn.extend({
  serialize: function() {
   return d.param(this.serializeArray());
  },
  serializeArray: function() {
   return this.map(function() {
    var e = d.prop(this, "elements");
    return e ? d.makeArray(e) : this;
   }).filter(function() {
    var e = this.type;
    return this.name && !d(this).is(":disabled") && Qt.test(this.nodeName) && !$t.test(e) && (this.checked || !X.test(e));
   }).map(function(e, t) {
    var n = d(this).val();
    return null == n ? null : d.isArray(n) ? d.map(n, function(e) {
     return {
      name: t.name,
      value: e.replace(Ut, "\r\n")
     };
    }) : {
     name: t.name,
     value: n.replace(Ut, "\r\n")
    };
   }).get();
  }
 }), d.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
  return this.isLocal ? Yt() : r.documentMode > 8 ? Gt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Gt() || Yt();
 } : Gt;
 var Jt = 0, Xt = {}, Kt = d.ajaxSettings.xhr();
 function Gt() {
  try {
   return new e.XMLHttpRequest();
  } catch (e) {}
 }
 function Yt() {
  try {
   return new e.ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {}
 }
 e.attachEvent && e.attachEvent("onunload", function() {
  for (var e in Xt) Xt[e](void 0, !0);
 }), f.cors = !!Kt && "withCredentials" in Kt, (Kt = f.ajax = !!Kt) && d.ajaxTransport(function(t) {
  var n;
  if (!t.crossDomain || f.cors) return {
   send: function(r, i) {
    var s, a = t.xhr(), o = ++Jt;
    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), 
    r) void 0 !== r[s] && a.setRequestHeader(s, r[s] + "");
    a.send(t.hasContent && t.data || null), n = function(e, r) {
     var s, c, u;
     if (n && (r || 4 === a.readyState)) if (delete Xt[o], n = void 0, a.onreadystatechange = d.noop, 
     r) 4 !== a.readyState && a.abort(); else {
      u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
      try {
       c = a.statusText;
      } catch (e) {
       c = "";
      }
      s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404;
     }
     u && i(s, c, u, a.getAllResponseHeaders());
    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = Xt[o] = n : n();
   },
   abort: function() {
    n && n(void 0, !0);
   }
  };
 }), d.ajaxPrefilter(function(e) {
  e.crossDomain && (e.contents.script = !1);
 }), d.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function(e) {
    return d.globalEval(e), e;
   }
  }
 }), d.ajaxPrefilter("script", function(e) {
  void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
 }), d.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var t, n = r.head || d("head")[0] || r.documentElement;
   return {
    send: function(i, s) {
     (t = r.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), 
     t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
      (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, 
      t.parentNode && t.parentNode.removeChild(t), t = null, n || s(200, "success"));
     }, n.insertBefore(t, n.firstChild);
    },
    abort: function() {
     t && t.onload(void 0, !0);
    }
   };
  }
 });
 var Zt = [], en = /(=)\?(?=&|$)|\?\?/;
 d.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var e = Zt.pop() || d.expando + "_" + Et++;
   return this[e] = !0, e;
  }
 }), d.ajaxPrefilter("json jsonp", function(t, n, r) {
  var i, s, a, o = !1 !== t.jsonp && (en.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
  return o || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
  o ? t[o] = t[o].replace(en, "$1" + i) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
  t.converters["script json"] = function() {
   return a || d.error(i + " was not called"), a[0];
  }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
   a = arguments;
  }, r.always(function() {
   void 0 === s ? d(e).removeProp(i) : e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, 
   Zt.push(i)), a && d.isFunction(s) && s(a[0]), a = s = void 0;
  }), "script") : void 0;
 }), f.createHTMLDocument = function() {
  if (!r.implementation.createHTMLDocument) return !1;
  var e = r.implementation.createHTMLDocument("");
  return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length;
 }(), d.parseHTML = function(e, t, n) {
  if (!e || "string" != typeof e) return null;
  "boolean" == typeof t && (n = t, t = !1), t = t || (f.createHTMLDocument ? r.implementation.createHTMLDocument("") : r);
  var i = k.exec(e), s = !n && [];
  return i ? [ t.createElement(i[1]) ] : (i = oe([ e ], t, s), s && s.length && d(s).remove(), 
  d.merge([], i.childNodes));
 };
 var tn = d.fn.load;
 function nn(e) {
  return d.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
 }
 d.fn.load = function(e, t, n) {
  if ("string" != typeof e && tn) return tn.apply(this, arguments);
  var r, i, s, a = this, o = e.indexOf(" ");
  return o > -1 && (r = d.trim(e.slice(o, e.length)), e = e.slice(0, o)), d.isFunction(t) ? (n = t, 
  t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && d.ajax({
   url: e,
   type: i || "GET",
   dataType: "html",
   data: t
  }).done(function(e) {
   s = arguments, a.html(r ? d("<div>").append(d.parseHTML(e)).find(r) : e);
  }).always(n && function(e, t) {
   a.each(function() {
    n.apply(a, s || [ e.responseText, t, e ]);
   });
  }), this;
 }, d.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
  d.fn[t] = function(e) {
   return this.on(t, e);
  };
 }), d.expr.filters.animated = function(e) {
  return d.grep(d.timers, function(t) {
   return e === t.elem;
  }).length;
 }, d.offset = {
  setOffset: function(e, t, n) {
   var r, i, s, a, o, c, u = d.css(e, "position"), l = d(e), f = {};
   "static" === u && (e.style.position = "relative"), o = l.offset(), s = d.css(e, "top"), 
   c = d.css(e, "left"), ("absolute" === u || "fixed" === u) && d.inArray("auto", [ s, c ]) > -1 ? (a = (r = l.position()).top, 
   i = r.left) : (a = parseFloat(s) || 0, i = parseFloat(c) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, o))), 
   null != t.top && (f.top = t.top - o.top + a), null != t.left && (f.left = t.left - o.left + i), 
   "using" in t ? t.using.call(e, f) : l.css(f);
  }
 }, d.fn.extend({
  offset: function(e) {
   if (arguments.length) return void 0 === e ? this : this.each(function(t) {
    d.offset.setOffset(this, e, t);
   });
   var t, n, r = {
    top: 0,
    left: 0
   }, i = this[0], s = i && i.ownerDocument;
   return s ? (t = s.documentElement, d.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), 
   n = nn(s), {
    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
   }) : r) : void 0;
  },
  position: function() {
   if (this[0]) {
    var e, t, n = {
     top: 0,
     left: 0
    }, r = this[0];
    return "fixed" === d.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
    t = this.offset(), d.nodeName(e[0], "html") || (n = e.offset()), n.top += d.css(e[0], "borderTopWidth", !0) - e.scrollTop(), 
    n.left += d.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
     top: t.top - n.top - d.css(r, "marginTop", !0),
     left: t.left - n.left - d.css(r, "marginLeft", !0)
    };
   }
  },
  offsetParent: function() {
   return this.map(function() {
    for (var e = this.offsetParent; e && !d.nodeName(e, "html") && "static" === d.css(e, "position"); ) e = e.offsetParent;
    return e || Ve;
   });
  }
 }), d.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(e, t) {
  var n = /Y/.test(t);
  d.fn[e] = function(r) {
   return J(this, function(e, r, i) {
    var s = nn(e);
    return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void (s ? s.scrollTo(n ? d(s).scrollLeft() : i, n ? i : d(s).scrollTop()) : e[r] = i);
   }, e, r, arguments.length, null);
  };
 }), d.each([ "top", "left" ], function(e, t) {
  d.cssHooks[t] = He(f.pixelPosition, function(e, n) {
   return n ? (n = qe(e, t), De.test(n) ? d(e).position()[t] + "px" : n) : void 0;
  });
 }), d.each({
  Height: "height",
  Width: "width"
 }, function(e, t) {
  d.each({
   padding: "inner" + e,
   content: t,
   "": "outer" + e
  }, function(n, r) {
   d.fn[r] = function(r, i) {
    var s = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" : "border");
    return J(this, function(t, n, r) {
     var i;
     return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
     Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? d.css(t, n, a) : d.style(t, n, r, a);
    }, t, s ? r : void 0, s, null);
   };
  });
 }), d.fn.extend({
  bind: function(e, t, n) {
   return this.on(e, null, t, n);
  },
  unbind: function(e, t) {
   return this.off(e, null, t);
  },
  delegate: function(e, t, n, r) {
   return this.on(t, e, n, r);
  },
  undelegate: function(e, t, n) {
   return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
  }
 }), d.fn.size = function() {
  return this.length;
 }, d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
  return d;
 });
 var rn = e.jQuery, sn = e.$;
 return d.noConflict = function(t) {
  return e.$ === d && (e.$ = sn), t && e.jQuery === d && (e.jQuery = rn), d;
 }, t || (e.jQuery = e.$ = d), d;
}), function() {
 "use strict";
 /**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */ function e(t, r) {
  var i;
  if (r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
  this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, 
  this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, 
  !e.notNeeded(t)) {
   for (var s = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], a = 0, o = s.length; a < o; a++) this[s[a]] = c(this[s[a]], this);
   n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), 
   t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), 
   t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), 
   t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), 
   Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
    var i = Node.prototype.removeEventListener;
    "click" === e ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r);
   }, t.addEventListener = function(e, n, r) {
    var i = Node.prototype.addEventListener;
    "click" === e ? i.call(t, e, n.hijacked || (n.hijacked = function(e) {
     e.propagationStopped || n(e);
    }), r) : i.call(t, e, n, r);
   }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(e) {
    i(e);
   }, !1), t.onclick = null);
  }
  function c(e, t) {
   return function() {
    return e.apply(t, arguments);
   };
  }
 }
 var t = navigator.userAgent.indexOf("Windows Phone") >= 0, n = navigator.userAgent.indexOf("Android") > 0 && !t, r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t, i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent), s = r && /OS [6-7]_\d/.test(navigator.userAgent), a = navigator.userAgent.indexOf("BB10") > 0;
 e.prototype.needsClick = function(e) {
  switch (e.nodeName.toLowerCase()) {
  case "button":
  case "select":
  case "textarea":
   if (e.disabled) return !0;
   break;

  case "input":
   if (r && "file" === e.type || e.disabled) return !0;
   break;

  case "label":
  case "iframe":
  case "video":
   return !0;
  }
  return /\bneedsclick\b/.test(e.className);
 }, e.prototype.needsFocus = function(e) {
  switch (e.nodeName.toLowerCase()) {
  case "textarea":
   return !0;

  case "select":
   return !n;

  case "input":
   switch (e.type) {
   case "button":
   case "checkbox":
   case "file":
   case "image":
   case "radio":
   case "submit":
    return !1;
   }
   return !e.disabled && !e.readOnly;

  default:
   return /\bneedsfocus\b/.test(e.className);
  }
 }, e.prototype.sendClick = function(e, t) {
  var n, r;
  document.activeElement && document.activeElement !== e && document.activeElement.blur(), 
  r = t.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), 
  n.forwardedTouchEvent = !0, e.dispatchEvent(n);
 }, e.prototype.determineEventType = function(e) {
  return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click";
 }, e.prototype.focus = function(e) {
  var t;
  r && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, 
  e.setSelectionRange(t, t)) : e.focus();
 }, e.prototype.updateScrollParent = function(e) {
  var t, n;
  if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
   n = e;
   do {
    if (n.scrollHeight > n.offsetHeight) {
     t = n, e.fastClickScrollParent = n;
     break;
    }
    n = n.parentElement;
   } while (n);
  }
  t && (t.fastClickLastScrollTop = t.scrollTop);
 }, e.prototype.getTargetElementFromEventTarget = function(e) {
  return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
 }, e.prototype.onTouchStart = function(e) {
  var t, n, s;
  if (e.targetTouches.length > 1) return !0;
  if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], 
  r) {
   if ((s = window.getSelection()).rangeCount && !s.isCollapsed) return !0;
   if (!i) {
    if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), 
    !1;
    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t);
   }
  }
  return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, 
  this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), 
  !0;
 }, e.prototype.touchHasMoved = function(e) {
  var t = e.changedTouches[0], n = this.touchBoundary;
  return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n;
 }, e.prototype.onTouchMove = function(e) {
  return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, 
  this.targetElement = null), !0);
 }, e.prototype.findControl = function(e) {
  return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
 }, e.prototype.onTouchEnd = function(e) {
  var t, a, o, c, u, l = this.targetElement;
  if (!this.trackingClick) return !0;
  if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, 
  !0;
  if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
  if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, a = this.trackingClickStart, 
  this.trackingClick = !1, this.trackingClickStart = 0, s && (u = e.changedTouches[0], 
  (l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l).fastClickScrollParent = this.targetElement.fastClickScrollParent), 
  "label" === (o = l.tagName.toLowerCase())) {
   if (t = this.findControl(l)) {
    if (this.focus(l), n) return !1;
    l = t;
   }
  } else if (this.needsFocus(l)) return e.timeStamp - a > 100 || r && window.top !== window && "input" === o ? (this.targetElement = null, 
  !1) : (this.focus(l), this.sendClick(l, e), r && "select" === o || (this.targetElement = null, 
  e.preventDefault()), !1);
  return !(!r || i || !(c = l.fastClickScrollParent) || c.fastClickLastScrollTop === c.scrollTop) || (this.needsClick(l) || (e.preventDefault(), 
  this.sendClick(l, e)), !1);
 }, e.prototype.onTouchCancel = function() {
  this.trackingClick = !1, this.targetElement = null;
 }, e.prototype.onMouse = function(e) {
  return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, 
  e.stopPropagation(), e.preventDefault(), !1))));
 }, e.prototype.onClick = function(e) {
  var t;
  return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
  !0) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null), 
  t);
 }, e.prototype.destroy = function() {
  var e = this.layer;
  n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), 
  e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), 
  e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), 
  e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1);
 }, e.notNeeded = function(e) {
  var t, r, i;
  if (void 0 === window.ontouchstart) return !0;
  if (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1]) {
   if (!n) return !0;
   if (t = document.querySelector("meta[name=viewport]")) {
    if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
    if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
   }
  }
  if (a && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]"))) {
   if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
   if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
  }
  return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction));
 }, e.attach = function(t, n) {
  return new e(t, n);
 }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
  return e;
 }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, 
 module.exports.FastClick = e) : window.FastClick = e;
}();

const abc2svg = {
 version: "1.4.9",
 vdate: "2016-01-18"
};

function Abc(user) {
 var wpsobj, svgobj;
 this.user = user;
 const BAR = 0, CLEF = 1, CUSTOS = 2, FORMAT = 3, GRACE = 4, KEY = 5, METER = 6, MREST = 7, NOTE = 8, PART = 9, REST = 10, SPACE = 11, STAVES = 12, STBRK = 13, TEMPO = 14, TUPLET = 15, BLOCK = 16;
 SL_ABOVE = 1, SL_BELOW = 2, SL_AUTO = 3, SL_HIDDEN = 4, SL_DOTTED = 8, OPEN_BRACE = 1, 
 CLOSE_BRACE = 2, OPEN_BRACKET = 4, CLOSE_BRACKET = 8, OPEN_PARENTH = 16, CLOSE_PARENTH = 32, 
 STOP_BAR = 64, FL_VOICE = 128, OPEN_BRACE2 = 256, CLOSE_BRACE2 = 512, OPEN_BRACKET2 = 1024, 
 CLOSE_BRACKET2 = 2048, MASTER_VOICE = 4096, BASE_LEN = 1536, CM = 37.8, IN = 96, 
 YSTEP = 128;
 var glovar = {
  clef: {
   type: CLEF,
   clef_auto: !0,
   clef_type: "a"
  },
  meter: {
   type: METER,
   wmeasure: 1,
   a_meter: []
  }
 }, info = {}, parse = {
  ctx: {},
  prefix: "%",
  state: 0
 };
 function clone(e) {
  if (!e) return e;
  var t = new e.constructor();
  for (var n in e) t[n] = e[n];
  return t;
 }
 function errbld(e, t, n, r) {
  var i, s, a, o, c;
  if (user.errbld) {
   switch (e) {
   case 0:
    e = "warn";
    break;

   case 1:
    e = "error";
    break;

   default:
    e = "fatal";
   }
   user.errbld(e, t, n, r);
  } else {
   if (void 0 != r && r >= 0) {
    for (a = 0, i = -1, o = 0; ;) {
     if ((s = parse.file.indexOf("\n", i + 1)) < 0) {
      i = parse.file.length - 1;
      break;
     }
     if (s > r) break;
     a++, i = s;
    }
    o = r - i;
   }
   switch (c = "", n && (c = n, a && (c += ":" + (a + 1) + ":" + (o + 1)), c += " "), 
   e) {
   case 0:
    c += "Warning: ";
    break;

   case 1:
    c += "Error: ";
    break;

   default:
    c += "Internal bug: ";
   }
   t = (t = (t = t.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), 
   user.errmsg(c + t, a, o);
  }
 }
 function error(e, t, n) {
  t && t.ctx ? errbld(e, n, t.ctx.fname, t.istart) : errbld(e, n);
 }
 function scanBuf() {
  this.index = 0, this.char = function() {
   if (!(this.index >= this.buffer.length)) return this.buffer[this.index];
  }, this.next_char = function() {
   if (!(this.index >= this.buffer.length)) return this.buffer[++this.index];
  }, this.advance = function() {
   this.index < this.buffer.length && this.index++;
  }, this.get_int = function() {
   for (var e = 0, t = this.buffer[this.index]; t >= "0" && t <= "9"; ) e = 10 * e + Number(t), 
   t = this.next_char();
   return e;
  }, this.get_float = function() {
   for (var e, t = ""; e = this.buffer[this.index], !("0123456789.-".indexOf(e) < 0); ) t += e, 
   this.index++;
   return parseFloat(t);
  }, this.error = function(e) {
   errbld(1, e, parse.ctx.fname, this.index + parse.bol - 1);
  };
 }
 function syntax(e, t) {
  errbld(e, t, parse.ctx.fname, parse.istart);
 }
 function abc2svg_init() {
  font_init(), init_tune();
 }
 var dd_tb = {}, a_de = [];
 const std_deco_tb = [ "dot 0 stc 5 1 1", "tenuto 0 emb 5 2 2", "slide 1 sld 3 7 0", "arpeggio 2 arp 12 10 0", "roll 3 cpu 7 6 6", "fermata 3 hld 12 7 7", "emphasis 3 accent 7 4 4", "lowermordent 3 lmrd 10 2 2", "coda 3 coda 24 10 10", "uppermordent 3 umrd 10 2 2", "segno 3 sgno 20 4 4", "trill 3 trl 14 4 4", "upbow 3 upb 10 5 5", "downbow 3 dnb 9 5 5", "gmark 3 grm 6 5 5", "wedge 3 wedge 8 1 1", "turnx 3 turnx 10 0 5", "breath 3 brth 0 1 20", "longphrase 3 lphr 0 1 1", "mediumphrase 3 mphr 0 1 1", "shortphrase 3 sphr 0 1 1", "invertedfermata 3 hld 12 7 7", "invertedturn 3 turn 10 0 5", "invertedturnx 3 turnx 10 0 5", "0 3 fng 8 3 3 0", "1 3 fng 8 3 3 1", "2 3 fng 8 3 3 2", "3 3 fng 8 3 3 3", "4 3 fng 8 3 3 4", "5 3 fng 8 3 3 5", "plus 3 dplus 7 3 3", "+ 3 dplus 7 3 3", "accent 3 accent 6 4 4", "> 3 accent 6 4 4", "marcato 3 marcato 9 3 3", "^ 3 marcato 9 3 3", "mordent 3 lmrd 10 2 2", "open 3 opend 10 2 2", "snap 3 snap 14 3 3", "thumb 3 thumb 14 2 2", "D.C. 3 dacs 16 10 10 D.C.", "D.S. 3 dacs 16 10 10 D.S.", "fine 3 dacs 16 10 10 FINE", "f 6 pf 18 1 7", "ff 6 pf 18 2 10", "fff 6 pf 18 4 13", "ffff 6 pf 18 6 16", "mf 6 pf 18 6 13", "mp 6 pf 18 6 16", "p 6 pf 18 2 8", "pp 6 pf 18 5 14", "ppp 6 pf 18 8 20", "pppp 6 pf 18 10 25", "pralltriller 3 umrd 10 2 2", 'sfz 6 sfz 18 4 10 ""', "turn 3 turn 10 0 5", "trill( 5 ltr 8 0 0", "trill) 5 ltr 8 0 0", "crescendo( 7 cresc 18 0 0", "crescendo) 7 cresc 18 0 0", "<( 7 cresc 18 0 0", "<) 7 cresc 18 0 0", "diminuendo( 7 dim 18 0 0", "diminuendo) 7 dim 18 0 0", ">( 7 dim 18 0 0", ">) 7 dim 18 0 0", "invisible 32 0 0 0 0", "beamon 33 0 0 0 0", "trem1 34 0 0 0 0", "trem2 34 0 0 0 0", "trem3 34 0 0 0 0", "trem4 34 0 0 0 0", "xstem 35 0 0 0 0", "beambr1 36 0 0 0 0", "beambr2 36 0 0 0 0", "rbstop 37 0 0 0 0", "/ 38 0 0 6 6", "// 38 0 0 6 6", "/// 38 0 0 6 6", "beam-accel 39 0 0 0 0", "beam-rall 39 0 0 0 0", "stemless 40 0 0 0 0", "rbend 41 0 0 0 0" ];
 var user_deco_tb, first_note;
 function y_get(e, t, n, r) {
  var i, s = staff_tb[e], a = Math.floor(n / realwidth * YSTEP), o = Math.floor((n + r) / realwidth * YSTEP);
  if (a < 0 && (a = 0), o >= YSTEP && a > (o = YSTEP - 1) && (a = o), t) for (i = s.top[a++]; a <= o; ) i < s.top[a] && (i = s.top[a]), 
  a++; else for (i = s.bot[a++]; a <= o; ) i > s.bot[a] && (i = s.bot[a]), a++;
  return i;
 }
 function y_set(e, t, n, r, i) {
  var s = staff_tb[e], a = Math.floor(n / realwidth * YSTEP), o = Math.floor((n + r) / realwidth * YSTEP);
  if (a < 0 && (a = 0), o >= YSTEP && a > (o = YSTEP - 1) && (a = o), t) for (;a <= o; ) s.top[a] < i && (s.top[a] = i), 
  a++; else for (;a <= o; ) s.bot[a] > i && (s.bot[a] = i), a++;
 }
 function set_str(e, t) {
  var n = t.match(/^@([0-9.-]+),([0-9.-]+)/);
  n ? (e.x += Number(n[1]), e.dy = Number(n[2]), e.str = t.replace(n[0], "")) : (e.str = t, 
  e.dy = 0);
 }
 function up_p(e, t) {
  switch (t) {
  case SL_ABOVE:
   return !0;

  case SL_BELOW:
   return !1;
  }
  return e.multi && 0 != e.multi ? e.multi > 0 : !!voice_tb[e.v].have_ly && e.pos.voc != SL_ABOVE;
 }
 function d_arp(e) {
  var t, n, r, i = e.s, s = e.dd, a = 0;
  for (t = 0; t <= i.nhd; t++) {
   if (i.notes[t].acc) r = 5 + i.notes[t].shac; else switch (r = 6 - i.notes[t].shhd, 
   i.head) {
   case "square":
   case "oval":
    r += 2.5;
   }
   r > a && (a = r);
  }
  (n = 3 * (i.notes[i.nhd].pit - i.notes[0].pit) + 4) < (t = s.h) && (n = t), e.flags.val = !0, 
  e.val = n, e.x = i.x - a, e.y = 3 * (i.notes[0].pit - 18) - 3;
 }
 function d_cresc(e) {
  if (!e.flags.ldst) {
   var t, n, r, i, s, a, o, c, u = e.s, l = e.start;
   l ? (i = (t = l.s).x + 3, (o = l.ix) > 0 && (c = a_de[o - 1])) : i = (t = first_note).x - t.wl - 4, 
   e.st = u.st, e.flags.lden = !1, e.flags.val = !0, (r = up_p(u, u.pos.dyn)) && (e.flags.up = !0), 
   c && c.s == t && (e.flags.up && !c.flags.up || !e.flags.up && c.flags.up) && c.dd.func >= 6 && (a = c.x + c.val + 4) > i && (i = a), 
   e.defl.noen ? (s = e.x - i) < 20 && (i = e.x - 20 - 3, s = 20) : (a = u.x, e.next && e.next.s == t && (e.flags.up && !e.next.flags.up || !e.flags.up && e.next.flags.up) && e.next.dd.func >= 6 && (a -= 5), 
   (s = a - i - 4) < 20 && (i -= .5 * (20 - s), e.start || (i -= .5 * (20 - s)), s = 20)), 
   e.val = s, e.x = i, n = e.dd, e.y = y_get(e.st, r, i, s), r || (e.y -= n.h);
  }
 }
 function d_near(e) {
  var t, n, r = e.s, i = e.dd;
  if (i.str) return e.x = r.x, e.y = r.y, void set_str(e, i.str);
  (t = (n = r.multi ? r.multi > 0 : r.stem < 0) ? Math.floor(r.ymx) : Math.floor(r.ymn - i.h)) > -6 && t < 24 && (n && (t += 3), 
  t = 6 * Math.floor((t + 6) / 6) - 6), n ? r.ymx = t + i.h : r.ymn = t, e.y = t, 
  e.x = r.x + r.notes[r.stem >= 0 ? 0 : r.nhd].shhd, "d" == i.name[0] && r.nflags >= -1 && (n ? r.stem > 0 && (e.x += 3.5) : r.stem < 0 && (e.x -= 3.5));
 }
 function d_pf(e) {
  var t, n, r, i, s = e.s, a = e.dd;
  e.val = a.wl + a.wr, (r = up_p(s, s.pos.vol)) && (e.flags.up = !0), n = s.x - a.wl, 
  e.ix > 0 && (i = a_de[e.ix - 1]).s == s && (e.flags.up && !i.flags.up || !e.flags.up && i.flags.up) && i.dd.func >= 6 && (t = i.x + i.val + 4) > n && (n = t), 
  e.x = n, e.y = y_get(s.st, r, n, e.val), r || (e.y -= a.h), a.str ? set_str(e, a.str) : "sfz" != a.name && (e.str = a.name);
 }
 function d_slide(e) {
  var t, n, r = e.s, i = r.notes[0].pit, s = 5;
  for (t = 0; t <= r.nhd; t++) {
   if (r.notes[t].acc) n = 4 + r.notes[t].shac; else switch (n = 5 - r.notes[t].shhd, 
   r.head) {
   case "square":
   case "oval":
    n += 2.5;
   }
   r.notes[t].pit <= i + 3 && n > s && (s = n);
  }
  e.x = r.x - s, e.y = 3 * (i - 18);
 }
 function d_trill(e) {
  if (!e.flags.ldst) {
   var t, n, r, i, s, a, o, c = e.s;
   if (e.start ? (s = (t = e.start.s).x, t.type == NOTE && t.a_dd && t.a_dd.length > 1 && (s += 10)) : s = (t = first_note).x - t.wl - 4, 
   e.st = r = c.st, i = c.multi >= 0, e.defl.noen ? (o = e.x - s) < 20 && (s = e.x - 20 - 3, 
   o = 20) : (o = c.x - s - 6, c.type == NOTE && (o -= 6), o < 20 && (s -= .5 * (20 - o), 
   e.start || (s -= .5 * (20 - o)), o = 20)), n = e.dd, a = y_get(r, i, s, o), i) {
    var u = staff_tb[t.st].topbar + 2;
    a < u && (a = u);
   } else {
    a -= n.h;
    var l = staff_tb[t.st].botbar - 2;
    a > l && (a = l);
   }
   e.flags.lden = void 0, e.flags.val = !0, e.val = o, e.x = s, e.y = a, i && (a += n.h), 
   y_set(r, i, s, o, a), i ? t.ymx = c.ymx = a : t.ymn = c.ymn = a;
  }
 }
 function d_upstaff(e) {
  var t, n, r, i = e.s, s = e.dd, a = i.x, o = s.wl + s.wr, c = staff_tb[i.st].topbar + 2, u = staff_tb[i.st].botbar - 2;
  if (i.nhd && (a += i.notes[i.stem >= 0 ? 0 : i.nhd].shhd), n = -1, 4 != s.func) switch (i.pos.orn) {
  case SL_ABOVE:
   n = 1;
   break;

  case SL_BELOW:
   n = 0;
  }
  switch (s.glyph) {
  case "accent":
  case "cpu":
   !n || n < 0 && (i.multi < 0 || !i.multi && i.stem > 0) ? ((t = y_get(i.st, !1, i.x - s.wl, o)) > u && (t = u), 
   t -= s.h, y_set(i.st, !1, i.x, 0, t), r = !0, i.ymn = t) : ((t = y_get(i.st, !0, i.x, 0)) < c && (t = c), 
   y_set(i.st, !0, i.x - s.wl, o, t + s.h), i.ymx = t + s.h);
   break;

  case "brth":
  case "lphr":
  case "mphr":
  case "sphr":
   for (t = c + 1, i = i.ts_next; i && !i.shrink; i = i.ts_next) ;
   a += i ? .4 * (i.x - a) : .4 * (realwidth - a);
   break;

  default:
   0 == s.name.indexOf("invert") && (r = !0), "invertedfermata" != s.name && (n > 0 || n < 0 && i.multi >= 0) ? ((t = y_get(i.st, !0, i.x - s.wl, o)) < c && (t = c), 
   y_set(i.st, !0, i.x - s.wl, o, t + s.h), i.ymx = t + s.h) : ((t = y_get(i.st, !1, i.x - s.wl, o)) > u && (t = u), 
   t -= s.h, y_set(i.st, !1, i.x - s.wl, o, t), "fermata" == s.name && (r = !0), i.ymn = t);
  }
  r && (t += s.h, e.flags.inv = !0), e.x = a, e.y = t, s.str && set_str(e, s.str);
 }
 const func_tb = [ d_near, d_slide, d_arp, d_upstaff, d_upstaff, d_trill, d_pf, d_cresc ];
 function deco_add(e) {
  user_deco_tb || (user_deco_tb = []), user_deco_tb.push(e);
 }
 function deco_build(e) {
  var t, n, r, i;
  if (a = e.match(/(.+)\s+(\d+)\s+(.+?)\s+([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)/), a) {
   var s = Number(a[2]), o = parseFloat(a[4]), c = parseFloat(a[5]), u = parseFloat(a[6]);
   if (isNaN(s)) error(1, null, "%%deco: bad C function value '" + a[2] + "'"); else if ((s < 0 || s >= func_tb.length) && (s < 32 || s > 41)) error(1, null, "%%deco: bad C function index '" + s + "'"); else if (o < 0 || c < 0 || u < 0) error(1, null, "%%deco: cannot have a negative value '" + e + "'"); else {
    if (!(o > 50 || c > 80 || u > 80)) return (t = dd_tb[a[1]]) || (t = {
     name: a[1]
    }, dd_tb[a[1]] = t), t.func = s, t.glyph = a[3], t.h = o, t.wl = c, t.wr = u, (i = e.replace(a[0], "").trim()) && ('"' == i[0] && (i = i.slice(1, -1)), 
    t.str = i), ("(" == (r = t.name[t.name.length - 1]) || ")" == r && t.name.indexOf("(") < 0) && ("(" == r ? t.ldst = !0 : t.lden = !0, 
    name2 = t.name.slice(0, -1) + ("(" == r ? ")" : "("), (n = dd_tb[name2]) && ("(" == r ? t.ld_en_dd = n : n.ld_en_dd = t)), 
    t;
    error(1, null, "%%deco: abnormal h/wl/wr value " + e + "'");
   }
  } else error(1, null, "Invalid decoration '" + e + "'");
 }
 function deco_cnv(e, t, n) {
  var r, i, s, a, o, c = e.length;
  for (r = 0; r < c; r++) if (a = e[r], (s = dd_tb[a]) || (s = deco_def(a))) switch (s.func) {
  default:
   if ("head-" == s.name.slice(0, 5)) {
    if (!t.notes) {
     error(1, t, "!" + s.name + "! must be on a note or rest");
     break;
    }
    for (i = 0; i <= t.nhd; i++) (o = t.notes[i]).a_dcn || (o.a_dcn = []), o.a_dcn.push(s.name);
   } else t.a_dd || (t.a_dd = []), t.a_dd.push(s);
   break;

  case 32:
   t.invisible = !0;
   break;

  case 33:
   if (t.type != BAR) {
    error(1, t, "!beamon! must be on a bar");
    break;
   }
   t.beam_on = !0;
   break;

  case 34:
   if (t.type != NOTE || !n || n.type != NOTE) {
    error(1, t, "!" + s.name + "! must be on the last of a couple of notes");
    break;
   }
   for (t.trem2 = !0, t.beam_end = !0, n.trem2 = !0, n.beam_st = !0, t.ntrem = n.ntrem = Number(s.name[4]), 
   t.nflags--, n.nflags--, t.nflags > 0 ? (t.nflags += t.ntrem, n.nflags += t.ntrem) : (t.nflags <= -2 && (t.stemless = !0, 
   n.stemless = !0), t.nflags = t.ntrem, n.nflags = t.ntrem), i = 0; i <= t.nhd; i++) t.notes[i].dur *= 2;
   for (i = 0; i <= n.nhd; i++) n.notes[i].dur *= 2;
   break;

  case 35:
   if (t.type != NOTE) {
    error(1, t, "!xstem! must be on a note");
    break;
   }
   t.xstem = !0, t.nflags = 0;
   break;

  case 36:
   if (t.type != NOTE) {
    error(1, t, "!" + s.name + "! must be on a note");
    break;
   }
   "1" == s.name[6] ? t.beam_br1 = !0 : t.beam_br2 = !0;
   break;

  case 37:
   t.rbstop = 1;
   break;

  case 38:
   if (t.type != NOTE) {
    error(1, t, "!" + s.name + "! must be on a note");
    break;
   }
   t.trem1 = !0, t.ntrem = s.name.length, t.nflags > 0 ? t.nflags += t.ntrem : t.nflags = t.ntrem;
   break;

  case 39:
   if (t.type != NOTE) {
    error(1, t, "!" + s.name + "! must be on a note");
    break;
   }
   t.feathered_beam = "a" == s.name[5] ? 1 : -1;
   break;

  case 40:
   t.stemless = !0;
   break;

  case 41:
   t.rbstop = 2;
  } else cfmt.decoerr && error(1, t, "Unknown decoration '" + a + "'");
 }
 function deco_def(e) {
  var t, n, r = e + " ";
  if (user_deco_tb) for (n = user_deco_tb.length, t = 0; t < n; t++) if (0 == user_deco_tb[t].indexOf(r)) return deco_build(user_deco_tb[t]);
  for (n = std_deco_tb.length, t = 0; t < n; t++) if (0 == std_deco_tb[t].indexOf(r)) return deco_build(std_deco_tb[t]);
 }
 function deco_update(e, t) {
  var n, r, i = a_de.length;
  for (n = 0; n < i; n++) (r = a_de[n]).s == e && (r.x += t);
 }
 function deco_width(e) {
  var t, n = 0, r = e.a_dd, i = r.length;
  for (t = t = 0; t < i; t++) switch (r[t].func) {
  case 1:
   n < 7 && (n = 7);
   break;

  case 2:
   n < 14 && (n = 14);
  }
  return 0 != n && e.prev && e.prev.type == BAR && (n -= 3), n;
 }
 function draw_all_deco() {
  if (0 != a_de.length) {
   var e, t, n, r, i, s, a, o, c, u, l = [];
   if (!cfmt.dynalign) for (r = nstaff, s = staff_tb[r].y; --r >= 0; ) a = staff_tb[r].y, 
   l[r] = .5 * (s + 24 + a), s = a;
   for (;e = a_de.shift(); ) (t = e.dd).ldst && t.ld_en_dd || ((u = (n = t.glyph).indexOf("/")) > 0 && (n = e.s.stem >= 0 ? n.slice(0, u) : n.slice(u + 1)), 
   r = e.st, s = e.y + staff_tb[r].y, t.func >= 6 && !cfmt.dynalign && (e.flags.up && r > 0 || !e.flags.up && r < nstaff) && (o = e.flags.up ? l[--r] : l[r++], 
   o -= .5 * t.h, (e.flags.up && s < o || !e.flags.up && s > o) && (a = y_get(r, !e.flags.up, e.x, e.val) + staff_tb[r].y, 
   e.flags.up && (a -= t.h), (e.flags.up && a > o || !e.flags.up && a < o) && (s = o, 
   y_set(r, e.flags.up, e.x, e.val, (e.flags.up ? s + t.h : s) - staff_tb[r].y)))), 
   set_scale(e.s), i = e.x, (c = user[n]) && "function" == typeof c ? c(i, s, e) : psdeco(n, i, s, e) || (e.flags.grace ? (output.push('<g transform="translate('), 
   out_sxsy(i, ",", s), e.flags.inv ? output.push(') scale(0.7, -0.7)">\n') : output.push(') scale(0.7)">\n'), 
   stv_g.trans = !0, i = s = 0) : e.flags.inv && (output.push('<g transform="translate('), 
   out_sxsy(i, ",", s), output.push(') scale(1, -1)">\n'), stv_g.trans = !0, i = s = 0), 
   e.flags.val ? 2 != t.func || stv_g.st < 0 ? out_deco_val(i, s, n, e.val / stv_g.scale, e.defl) : out_deco_val(i, s, n, e.val, e.defl) : e.str ? out_deco_str(i, s + e.dy + .2 * t.h, n, e.str) : xygl(i, s, n), 
   stv_g.trans && (stv_g.trans = !1, output.push("</g>\n"))));
  }
 }
 function draw_deco_head(e, t, n, r) {
  var i, s, a = dd_tb[e];
  if (!a && !(a = deco_def(e))) return error(1, null, "Unknown decoration '" + e + "'"), 
  !1;
  if (pshdeco(i = a.glyph, t, n, a)) return 0 == a.name.indexOf("head-");
  if (a.str) set_str(s = {
   x: t
  }, a.str), out_deco_str(s.x, n + s.dy, i, s.str); else switch (a.func) {
  default:
   xygl(t, n, i);
   break;

  case 2:
  case 5:
  case 7:
   error(1, null, "Cannot have !" + a.name + "! on a head");
   break;

  case 3:
  case 4:
   xygl(t, n, i);
  }
  return 0 == a.name.indexOf("head-");
 }
 function create_deco(e) {
  var t, n, r, i, s = e.a_dd.length;
  for (n = 0; n < s; n++) {
   switch ((t = e.a_dd[n]).func) {
   default:
    r = 0;
    break;

   case 3:
   case 4:
   case 5:
    r = e.pos.orn;
    break;

   case 6:
    r = e.pos.vol;
    break;

   case 7:
    r = e.pos.dyn;
   }
   if (r != SL_HIDDEN) if (0 != t.name.indexOf("head-")) i = {
    s: e,
    dd: t,
    st: e.st,
    ix: a_de.length,
    flags: {},
    defl: {},
    dy: 0
   }, a_de.push(i), e.grace && (i.flags.grace = !0), t.ldst ? i.flags.ldst = !0 : t.lden && (i.flags.lden = !0, 
   i.defl.nost = !0), t.func >= 3 || (e.type == NOTE ? func_tb[t.func](i) : error(1, e, "Cannot have !" + t.name + "! on a rest or a bar")); else switch (e.type) {
   case NOTE:
   case REST:
    break;

   default:
    error(1, e, "Cannot have !" + t.name + "! on a bar");
   }
  }
 }
 function draw_deco_near() {
  var e, t, n;
  for (e = tsfirst; e; e = e.ts_next) {
   switch (e.type) {
   case BAR:
   case MREST:
    break;

   case NOTE:
   case REST:
   case SPACE:
    n || (n = e);
    break;

   case GRACE:
    for (t = e.extra; t; t = t.next) t.a_dd && create_deco(t);
    continue;

   default:
    continue;
   }
   e.a_dd && create_deco(e);
  }
  first_note = n;
 }
 function draw_deco_note() {
  var e, t, n, r, i, s, a, o;
  for (n_de = a_de.length, e = 0; e < n_de; e++) if (de = a_de[e], de.flags.ldst) {
   for ((i = (r = de.dd).ld_en_dd) || (i = {
    name: r.name.slice(0, -1) + ")",
    func: r.func,
    glyph: r.glyph,
    h: r.h
   }, r.ld_en_dd = i), o = de.s.v, t = e + 1; t < n_de && ((n = a_de[t]).dd != i || n.s.v != o); t++) ;
   if (t == n_de) for (a = de.s.st, t = e + 1; t < n_de && ((n = a_de[t]).dd != i || n.s.st != a); t++) ;
   t == n_de && (n = {
    s: de.s,
    st: de.st,
    dd: i,
    ix: a_de.length - 1,
    x: realwidth - 6,
    y: de.s.y,
    flags: {
     lden: !0
    },
    defl: {
     noen: !0
    }
   }, a_de.push(n)), n.start = de, delete n.defl.nost;
  }
  for (e = 0; e < n_de; e++) de = a_de[e], (s = (r = de.dd).func) < 3 || s >= 6 || func_tb[s](de);
 }
 function draw_deco_staff() {
  var e, t, n, r, i, s, a, o, c, u, l, f, p, d, h = new Array(nstaff);
  function m(e) {
   var t, n, i, s, a, o;
   for (i = staff_tb[e.st].topbar + 6 + 20, t = e.sym; t; t = t.next) if (t.type == BAR && t.rbstart && !t.norepbra) {
    if (!t.next) break;
    for (o || (o = t), n = t; t.next && !(t = t.next).rbstop; ) ;
    i < (s = y_get(e.st, !0, n.x, t.x - n.x)) && (i = s), n.text && (a = strw(n.text), 
    s = y_get(e.st, !0, n.x + 4, a), i < (s += gene.curfont.size + 2) && (i = s)), t.rbstart && (t = t.prev);
   }
   if (t = o) for (set_dscale(e.st), set_font("repeat"), s = i * staff_tb[e.st].staffscale; t; t = t.next) if (t.rbstart && !t.norepbra) {
    for (n = t; t.next && !(t = t.next).rbstop; ) ;
    if (n == t) break;
    r = n.x, a = t.type != BAR ? t.rbstop ? 0 : t.x - realwidth + 4 : t.bar_type.length > 1 && "[]" != t.bar_type || "]" == t.bar_type ? n.st > 0 && !(cur_sy.staves[n.st - 1].flags & STOP_BAR) ? t.wl : ":" == t.bar_type[t.bar_type.length - 1] ? 12 : ":" != t.bar_type[0] || "]" == t.bar_type ? 0 : 8 : 8, 
    a = (t.x - r - a) / staff_tb[e.st].staffscale, t.next || t.rbstop || e.bar_start || (e.bar_start = clone(t), 
    e.bar_start.bar_type = "[", e.bar_start.text = void 0, e.bar_start.rbstart = 1, 
    delete e.bar_start.a_gch), n.text && xy_str(r + 4, s - .9 * gene.curfont.size, n.text), 
    xypath(r, s), 2 == n.rbstart && output.push("m0 20v-20"), output.push("h"), output.push(a.toFixed(2)), 
    2 == t.rbstop && output.push("v20"), output.push('"/>\n'), y_set(n.st, !0, r, a, i + 2), 
    t.rbstart && (t = t.prev);
   }
  }
  for (a = 0; a <= nstaff; a++) h[a] = {
   ymin: 0,
   ymax: 24
  };
  for (e = tsfirst; e; e = e.ts_next) if (e.a_gch) {
   for (t || (t = e), o = e.a_gch.length, d = 0; d < o && !("g" == (f = e.a_gch[d]).type && (p = f, 
   f.y < 0)); d++) ;
   p && (s = p.w, p.y >= 0 ? (i = y_get(e.st, !0, e.x, s)) > h[e.st].ymax && (h[e.st].ymax = i) : (i = y_get(e.st, !1, e.x, s)) < h[e.st].ymin && (h[e.st].ymin = i));
  }
  if (t) {
   for (a = 0; a <= nstaff; a++) {
    var v = staff_tb[a].botbar;
    h[a].ymin -= 3, h[a].ymin > v - 10 && (h[a].ymin = v - 10);
    var g = staff_tb[a].topbar;
    h[a].ymax += 3, h[a].ymax < g + 10 && (h[a].ymax = g + 10);
   }
   for (set_sscale(-1), e = t; e; e = e.ts_next) if (e.a_gch) {
    switch (e.type) {
    case NOTE:
    case REST:
    case SPACE:
    case MREST:
     break;

    case BAR:
     if (void 0 == e.text) break;

    default:
     continue;
    }
    draw_gchord(e, h[e.st].ymin, h[e.st].ymax);
   }
  }
  for (o = voice_tb.length, c = 0; c < o; c++) !(n = voice_tb[c]).second && n.sym && m(n);
  for (a = 0; a <= nstaff; a++) h[a] = {
   ymin: 0,
   ymax: 0
  };
  for (o = a_de.length, a = 0; a < o; a++) (l = (u = a_de[a]).dd).func < 6 || (func_tb[l.func](u), 
  l.ldst || cfmt.dynalign && (u.flags.up ? u.y > h[u.st].ymax && (h[u.st].ymax = u.y) : u.y < h[u.st].ymin && (h[u.st].ymin = u.y)));
  for (a = 0; a < o; a++) (l = (u = a_de[a]).dd).ldst || l.func < 6 || (cfmt.dynalign ? (i = u.flags.up ? h[u.st].ymax : h[u.st].ymin, 
  u.y = i) : i = u.y, u.flags.up && (i += l.h), y_set(u.st, u.flags.up, u.x, u.val, i));
 }
 function draw_measnb() {
  var e, t, n, r, i, s, a, o, c, u = cur_sy;
  for (t = 0; t <= nstaff && u.staves[t].empty; t++) ;
  if (!(t > nstaff)) {
   if (set_dscale(t), 1 != staff_tb[t].staffscale && param_set_font("measurefont", "* " + ((c = get_font("measure").size) / staff_tb[t].staffscale).toString()), 
   set_font("measure"), e = tsfirst, (n = gene.nbar) > 1) if (0 == cfmt.measurenb) o = !0, 
   (i = y_get(t, !0, 0, 20)) < staff_tb[t].topbar + 14 && (i = staff_tb[t].topbar + 14), 
   xy_str(0, i, n.toString()), y_set(t, !0, 0, 20, i + gene.curfont.size + 2); else if (n % cfmt.measurenb == 0) {
    for (;;e = e.ts_next) {
     switch (e.type) {
     case METER:
     case CLEF:
     case KEY:
     case FORMAT:
     case STBRK:
      continue;
     }
     break;
    }
    for (;e.st != t; ) e = e.ts_next;
    e.prev.type != CLEF && (e = e.prev), r = e.x - e.wl, o = !0, s = cwid("0") * gene.curfont.swfac, 
    n >= 10 && (s *= n >= 100 ? 3 : 2), cfmt.measurebox && (s += 4), (i = y_get(t, !0, r, s)) < staff_tb[t].topbar + 6 && (i = staff_tb[t].topbar + 6), 
    xy_str(r, i += 2, n.toString()), cfmt.measurebox && xybox(r - 1, i - 3 + (a = gene.curfont.size + 3), s += 3, a), 
    y_set(t, !0, r, s, i += gene.curfont.size), e.ymx = i;
   }
   for (;e; e = e.ts_next) {
    if (e.new_sy) {
     for (u = u.next, t = 0; t < nstaff && u.staves[t].empty; t++) ;
     set_sscale(t);
    }
    e.type == BAR && e.bar_num && (n = e.bar_num, 0 != cfmt.measurenb && n % cfmt.measurenb == 0 && e.next && (o || (o = !0), 
    s = cwid("0") * gene.curfont.swfac, n >= 10 && (s *= n >= 100 ? 3 : 2), cfmt.measurebox && (s += 4), 
    (i = y_get(t, !0, r = e.x - .4 * s, s)) < staff_tb[t].topbar + 6 && (i = staff_tb[t].topbar + 6), 
    e.next.type == NOTE && (e.next.stem > 0 ? i < e.next.ys - gene.curfont.size && (i = e.next.ys - gene.curfont.size) : i < e.next.y && (i = e.next.y)), 
    xy_str(r, i += 2, n.toString()), cfmt.measurebox && xybox(r - 1, i - 3 + (a = gene.curfont.size + 3), s += 3, a), 
    y_set(t, !0, r, s, i += gene.curfont.size), e.ymx = i));
   }
   gene.nbar = n, c && param_set_font("measurefont", "* " + c.toString());
  }
 }
 function draw_notempo(e, t, n, r, i) {
  var s, a, o, c = identify_note(e, r), u = c[0], l = c[1], f = c[2];
  switch (stv_g.started && (output.push("</g>\n"), stv_g.started = !1), output.push('<g transform="translate('), 
  out_sxsy(t + 8, ",", n + 3), output.push(") scale(" + i + ')">\n'), u) {
  case "oval":
   a = "HD";
   break;

  case "empty":
   a = "Hd";
   break;

  default:
   a = "hd";
  }
  if (xygl(-posx, posy, a), s = 4, l) {
   switch (o = 8, f > 0 && (o += 4), u) {
   case "square":
   case "oval":
    o += 2;
    break;

   case "empty":
    o += 1;
   }
   for (s = o * l, o -= posx; --l >= 0; ) out_dot(o, posy), o += 3.5;
  }
  return r < BASE_LEN && (f <= 0 ? out_stem(-posx, posy, 21) : (out_stem(-posx, posy, 21, !1, f), 
  s < 6 && (s = 6))), output.push("\n</g>\n"), (s + 15) * i;
 }
 function tempo_width(e) {
  var t, n, r = 0;
  if (set_font("tempo"), e.tempo_str1 && (r = strw(e.tempo_str1)), e.tempo_value) {
   for (t = 1, n = e.tempo_notes.length; t < n; ) r += 10, t++;
   r += 6 + cwid(" ") * gene.curfont.swfac * 6 + 10 + 10;
  }
  return e.tempo_str2 && (r += strw(e.tempo_str2)), r;
 }
 function write_tempo(e, t, n, r) {
  var i, s, a, o;
  if (set_font("tempo"), e.tempo_str1 && (xy_str(t, n, e.tempo_str1), t += strw(e.tempo_str1) + 6), 
  e.tempo_value) {
   for (r *= .7 * gene.curfont.size / 15, s = e.tempo_notes.length, i = 0; i < s; i++) t += draw_notempo(e, t, n, e.tempo_notes[i], r);
   xy_str(t += 5, n, "="), t += strw("= ") + 5, e.tempo_value.indexOf("/") < 0 ? (xy_str(t, n, e.tempo_value.toString()), 
   t += (a = cwid("0") * gene.curfont.swfac) + 5, e.tempo_value >= 10 && (t += a, e.tempo_value >= 100 && (t += a))) : 2 == (o = e.tempo_value.split("/")).length && Number(o[1]) > 0 && draw_notempo(e, t, n, o[0] * BASE_LEN / o[1], r);
  }
  e.tempo_str2 && xy_str(t, n, e.tempo_str2);
 }
 function draw_partempo(e, t) {
  var n, r, i, s, a, o, c, u = 0, l = 0, f = staff_tb[e].topbar + 12, p = 0, d = 1, h = 0;
  for (n = tsfirst; n; n = n.ts_next) if (r = n.extra) {
   for (;r && r.type != TEMPO; r = r.next) ;
   r && (s || (s = !0), o = tempo_width(r), (c = y_get(e, !0, n.x - 5, o) + 2) > f && (f = c), 
   h >= n.x - 5 && !(p & d >> 1) && (p |= d), d <<= 1, h = n.x - 5 + o);
  }
  if (s) for (set_font("tempo"), a = (c = 2 - (l = gene.curfont.size + 2 + 2)) - l, 
  0 != p && (l *= 2), t < f + l && (u = f + l - t), n = tsfirst; n; n = n.ts_next) if (n.seqst) {
   for (r = n.extra; r && (r.type != TEMPO || r.deleted); r = r.next) ;
   r && ((user.anno_start || user.anno_stop) && (r.x = n.x, r.wl = 5, r.wr = 40, r.ymn = 1 & p ? a : c, 
   r.ymx = r.ymn + 14, user.anno_start && anno_start(r)), write_tempo(r, n.x - 5, 1 & p ? a : c, 1), 
   user.anno_stop && anno_stop(r), p >>= 1);
  }
  for (f = staff_tb[e].topbar + 14, n = tsfirst; n; n = n.ts_next) if (r = n.extra) {
   for (;r && r.type != PART; r = r.next) ;
   r && (i || (i = !0, set_font("parts"), a = gene.curfont.size + 2 + 2), o = strw(r.text), 
   f < (c = y_get(e, !0, n.x - 10, o + 15) + 5) && (f = c));
  }
  if (i) for (t < f + a + l && (u = f + a + l - t), n = tsfirst; n; n = n.ts_next) if (r = n.extra) {
   for (;r && r.type != PART; r = r.next) ;
   r && ((user.anno_start || user.anno_stop) && (r.x = n.x - 10, o = strw(r.text), 
   r.wl = 0, r.wr = o, r.ymn = 2 - l - a, r.ymx = r.ymn + a, user.anno_start && anno_start(r)), 
   xy_str(n.x - 10, 2 - l - a, r.text), cfmt.partsbox && (o = strw(r.text) + 4, xybox(n.x - 10 - 2, 2 - l - 4, o, a)), 
   user.anno_stop && anno_stop(r));
  }
  return u;
 }
 const STEM_MIN = 16, STEM_MIN2 = 14, STEM_MIN3 = 12, STEM_MIN4 = 10, STEM_CH_MIN = 14, STEM_CH_MIN2 = 10, STEM_CH_MIN3 = 9, STEM_CH_MIN4 = 9, BEAM_DEPTH = 3.2, BEAM_OFFSET = .25, BEAM_SHIFT = 5, BEAM_FLATFAC = .6, BEAM_THRESH = .06, BEAM_SLOPE = .5, BEAM_STUB = 6, SLUR_SLOPE = 1, GSTEM = 14, GSTEM_XOFF = 1.6;
 function b_pos(e, t, n, r) {
  var i, s, a, o, c = e ? 3 : BEAM_SHIFT, u = e ? 1.7 : BEAM_DEPTH;
  function l(e) {
   return 6 * Math.round((e + 12) / 6) - 12 - e;
  }
  if (t > 0) {
   if ((s = r - (n - 1) * c - u) > 26) return 0;
   i = r;
  } else {
   if ((i = r + (n - 1) * c + u) < -2) return 0;
   s = r;
  }
  return (a = l(i - BEAM_OFFSET)) * a > (o = l(s + BEAM_OFFSET)) * o ? o : a;
 }
 function sym_dup(e) {
  var t, n = clone(e);
  for (n.invisible = !0, delete n.text, delete n.a_gch, delete n.a_ly, delete n.a_dd, 
  n.notes = clone(e.notes), t = 0; t <= n.nhd; t++) delete (n.notes[t] = clone(e.notes[t])).a_dcn;
  return n;
 }
 const min_tb = [ [ STEM_MIN, STEM_MIN, STEM_MIN2, STEM_MIN3, STEM_MIN4, STEM_MIN4 ], [ STEM_CH_MIN, STEM_CH_MIN, STEM_CH_MIN2, STEM_CH_MIN3, STEM_CH_MIN4, STEM_CH_MIN4 ] ];
 function calculate_beam(e, t) {
  var n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g, y, _, b, x, w, k, E, C;
  for (t.beam_st || ((n = sym_dup(t)).prev = t.prev, n.prev ? n.prev.next = n : voice_tb[n.v].sym = n, 
  t.prev = n, n.next = t, t.ts_prev.ts_next = n, n.ts_prev = t.ts_prev, t.ts_prev = n, 
  n.ts_next = t, n.x -= 12, n.x > t.prev.x + 12 && (n.x = t.prev.x + 12), n.beam_st = !0, 
  delete n.beam_end, n.tmp = !0, n.slur_start = 0, delete n.slur_end, t = n), i = s = 0, 
  c = u = !1, a = t.st, o = t.v, E = t.grace ? GSTEM_XOFF : 3.5, r = t; r.type != NOTE || (r.nflags > s && (s = r.nflags), 
  i++, r.st != a && (c = !0), r.stem != t.stem && (u = !0), !r.beam_end); r = r.next) if (!r.next) {
   for (;r.type != NOTE; r = r.prev) ;
   (n = sym_dup(r)).next = r.next, n.next && (n.next.prev = n), r.next = n, n.prev = r, 
   n.ts_next = r.ts_next, n.ts_next && (n.ts_next.ts_prev = n), r.ts_next = n, n.ts_prev = r, 
   delete n.beam_st, n.beam_end = !0, n.tmp = !0, delete n.slur_start, delete n.slur_end, 
   n.x += 12, n.x < realwidth - 12 && (n.x = realwidth - 12), r = n, i++;
   break;
  }
  if (e.s2 = r, 0 == staff_tb[a].y) {
   if (c) return !1;
  } else if (!c) return e.s1 = t, e.a = (t.ys - r.ys) / (t.xs - r.xs), e.b = t.ys - t.xs * e.a + staff_tb[a].y, 
  e.nflags = s, !0;
  for (y = _ = b = x = w = 0, n = t; n.type != NOTE || (1 == (C = voice_tb[n.v].scale) && (C = staff_tb[n.st].staffscale), 
  f = n.stem >= 0 ? E + n.notes[0].shhd : -E + n.notes[n.nhd].shhd, f *= C, f += n.x, 
  n.xs = f, y += f, _ += p = n.ys + staff_tb[n.st].y, b += f * f, x += f * p, w += p * p, 
  n != r); n = n.next) ;
  if (m = (_ - (h = (x * i - y * _) / (b * i - y * y)) * y) / i, t.grace ? h > BEAM_SLOPE ? h = BEAM_SLOPE : h < -BEAM_SLOPE && (h = -BEAM_SLOPE) : (i >= 3 && (l = w - h * x - m * _) > 0 && l / (i - 2) > .5 && (h *= BEAM_FLATFAC), 
  h = h >= 0 ? BEAM_SLOPE * h / (BEAM_SLOPE + h) : BEAM_SLOPE * h / (BEAM_SLOPE - h)), 
  (k = h * (r.xs - t.xs) / (20 * (i - 1))) * k < BEAM_THRESH * BEAM_THRESH && (h = 0), 
  m = (_ - h * y) / i, cfmt.flatbeams && (m = t.grace ? 35 + staff_tb[a].y : -11 + staff_tb[a].y, 
  h = 0), g = 0, n = t, u) d = t.grace ? 3 : BEAM_SHIFT, d *= s - 1, d += BEAM_DEPTH, 
  d *= .5, t.stem != r.stem && t.nflags < r.nflags ? d *= r.stem : d *= t.stem, m += d; else if (t.grace) for (;d = h * n.xs + m - staff_tb[n.st].y, 
  v = GSTEM - 2, n.stem > 0 ? v -= d - 3 * (n.notes[n.nhd].pit - 18) : v += d - 3 * (n.notes[0].pit - 18), 
  (v += 3 * (n.nflags - 1)) > g && (g = v), n != r; n = n.next) ; else {
   for (var T = BEAM_DEPTH + BEAM_SHIFT * (s - 1); n.ts_prev && n.ts_prev.type == NOTE && n.ts_prev.time == n.time && n.ts_prev.x > t.xs; ) n = n.ts_prev;
   for (;n && n.time <= r.time; n = n.ts_next) if (!(n.type != NOTE || n.invisible || n.st != a && n.v != o)) {
    if (d = h * (f = n.v == o ? n.xs : n.x) + m - staff_tb[n.st].y, n.v == o) v = 0 == n.nhd ? min_tb[0][n.nflags] : min_tb[1][n.nflags], 
    n.stem > 0 ? (n.notes[n.nhd].pit > 26 && (v -= 2, n.notes[n.nhd].pit > 28 && (v -= 2)), 
    v -= d - 3 * (n.notes[n.nhd].pit - 18)) : (n.notes[0].pit < 18 && (v -= 2, n.notes[0].pit < 16 && (v -= 2)), 
    v -= 3 * (n.notes[0].pit - 18) - d), v += BEAM_DEPTH + BEAM_SHIFT * (n.nflags - 1); else {
     if (t.stem > 0) if (n.stem > 0) {
      if (n.ymn > d + 4 || n.ymx < d - T - 2) continue;
      v = n.v > o ? n.ymx - d : n.ymn + 8 - d;
     } else v = n.ymx - d; else if (n.stem < 0) {
      if (n.ymx < d - 4 || n.ymn > d - T - 2) continue;
      v = n.v < o ? d - n.ymn : d - n.ymx + 8;
     } else v = d - n.ymn;
     v += 2 + T;
    }
    v > g && (g = v);
   }
  }
  if (g > 0 && (m += t.stem * g), !c && !u) for (n = t.next; ;n = n.next) {
   var S;
   switch (n.type) {
   case REST:
    if (!(S = n.ts_next) || S.st != a || S.type != NOTE && S.type != REST) break;

   case BAR:
    if (n.invisible) break;

   case CLEF:
    p = h * n.x + m, t.stem > 0 ? (p = n.ymx - p + BEAM_DEPTH + BEAM_SHIFT * (s - 1) + 2) > 0 && (m += p) : (p = n.ymn - p - BEAM_DEPTH - BEAM_SHIFT * (s - 1) - 2) < 0 && (m += p);
    break;

   case GRACE:
    for (S = n.extra; S; S = S.next) S.type == NOTE && (p = h * S.x + m, t.stem > 0 ? (p = S.ymx - p + BEAM_DEPTH + BEAM_SHIFT * (s - 1) + 2) > 0 && (m += p) : (p = S.ymn - p - BEAM_DEPTH - BEAM_SHIFT * (s - 1) - 2) < 0 && (m += p));
   }
   if (n == r) break;
  }
  for (0 == h && (m += b_pos(t.grace, t.stem, s, m - staff_tb[a].y)), n = t; ;n = n.next) {
   var O;
   switch (n.type) {
   case NOTE:
    n.ys = h * n.xs + m - staff_tb[n.st].y, n.stem > 0 ? (n.ymx = n.ys + 2.5, n.ts_prev && n.ts_prev.stem > 0 && n.ts_prev.st == n.st && n.ts_prev.ymn < n.ymx && n.ts_prev.x == n.x && 0 == n.notes[0].shhd && (n.ts_prev.x -= 5, 
    n.ts_prev.xs -= 5)) : n.ymn = n.ys - 2.5;
    break;

   case REST:
    if (p = h * n.x + m - staff_tb[n.st].y, O = BEAM_DEPTH + BEAM_SHIFT * (s - 1) + ("full" != n.head ? 4 : 9), 
    t.stem > 0) {
     if (p -= O, 0 == t.multi && p > 12 && (p = 12), n.y <= p) break;
    } else if (p += O, 0 == t.multi && p < 12 && (p = 12), n.y >= p) break;
    "full" != n.head && (p = 6 * Math.floor((p + 3 + 12) / 6) - 12), n.y = p;
   }
   if (n == r) break;
  }
  return 0 != staff_tb[a].y && (e.s1 = t, e.a = h, e.b = m, e.nflags = s, !0);
 }
 function draw_beams(e) {
  var t, n, r, i, s, a, o, c, u, l, f, p, d = e.s1, h = e.s2;
  function m(e, t, n, r, i, s) {
   var a, o, c = i.s1, u = c.nflags;
   c.ntrem && (u -= c.ntrem), c.trem2 && s > u && (c.dur >= BASE_LEN / 2 ? (e = c.x + 6, 
   t = i.s2.x - 6) : c.dur < BASE_LEN / 4 && (e += 5, t -= 6)), a = i.a * e + i.b - n, 
   t -= e, t /= stv_g.scale, o = i.a * t * stv_g.scale, xypath(e, a, !0), output.push("l" + t.toFixed(2) + " " + (-o).toFixed(2) + "v" + r.toFixed(2) + "l" + (-t).toFixed(2) + " " + o.toFixed(2) + '"/>\n');
  }
  for (d.grace ? (s = 3, a = 3.2, i = .29, o = 1.6) : (s = BEAM_SHIFT, a = BEAM_STUB, 
  i = .34, o = BEAM_DEPTH), r = d.stem, d.stem != h.stem && d.nflags < h.nflags && (r = h.stem), 
  r < 0 && (o = -o), m(d.xs - i, h.xs + i, 0, o, e, 1), c = 0, t = d; t.type == NOTE && t.stem != r && (t.ys = e.a * t.xs + e.b - staff_tb[t.st].y + s * (t.nflags - 1) * t.stem - o), 
  t != h; t = t.next) ;
  for (d.feathered_beam && (c = s / (h.xs - d.xs), s = d.feathered_beam > 0 ? (c = -c) * d.xs : c * h.xs, 
  c *= r), i = 0, n = 2; n <= e.nflags; n++) for (i += s, 0 != c && (e.a += c), t = d; ;t = t.next) if (t.type != NOTE || t.nflags < n) {
   if (t == h) break;
  } else if (t.trem1 && n > t.nflags - t.ntrem) {
   if (m((p = t.dur >= BASE_LEN / 2 ? t.x : t.xs) - 5, p + 5, (i + 2.5) * r, o, e, n), 
   t == h) break;
  } else {
   for (l = t; t != h; ) {
    if ((u = t.next).type == NOTE || u.type == REST) if (u.trem1) {
     if (u.nflags - u.ntrem < n) break;
    } else if (u.nflags < n) break;
    if (u.beam_br1 || u.beam_br2 && n > 2) break;
    t = u;
   }
   for (f = t; f.type != NOTE; ) f = f.prev;
   if (p = l.xs, l == f) if (l == d) p += a; else if (l == h) p -= a; else if (l.beam_br1 || l.beam_br2 && n > 2) p += a; else {
    for (u = l.next; u.type != NOTE; ) u = u.next;
    if (u.beam_br1 || u.beam_br2 && n > 2) p -= a; else {
     for (l = l.prev; l.type != NOTE; ) l = l.prev;
     l.nflags < u.nflags || l.nflags == u.nflags && l.dots < u.dots ? p += a : p -= a;
    }
   }
   if (m(p, f.xs, i * r, o, e, n), t == h) break;
  }
  d.tmp ? unlksym(d) : h.tmp && unlksym(h);
 }
 function draw_lstaff(e) {
  if (!cfmt.alignbars) {
   var t, n, r, i, s = cur_sy.nstaff, a = 0;
   for (t = 0; (cur_sy.staves[t].flags & (OPEN_BRACE | OPEN_BRACKET) && a++, cur_sy.staves[t].empty) && (cur_sy.staves[t].flags & (CLOSE_BRACE | CLOSE_BRACKET) && a--, 
   t != s); t++) ;
   for (n = s; n > t && cur_sy.staves[n].empty; n--) ;
   if (t != n || 0 != a) for (r = staff_tb[n].y + staff_tb[n].botbar * staff_tb[n].staffscale, 
   i = staff_tb[t].y + staff_tb[t].topbar * staff_tb[t].staffscale - r, xypath(e, r), 
   output.push("v" + (-i).toFixed(2) + '"/>\n'), t = 0; t <= s; t++) cur_sy.staves[t].flags & OPEN_BRACE && o(e, t, CLOSE_BRACE), 
   cur_sy.staves[t].flags & OPEN_BRACKET && o(e, t, CLOSE_BRACKET), cur_sy.staves[t].flags & OPEN_BRACE2 && o(e - 6, t, CLOSE_BRACE2), 
   cur_sy.staves[t].flags & OPEN_BRACKET2 && o(e - 6, t, CLOSE_BRACKET2);
  }
  function o(e, t, n) {
   for (var r, i, s, a; cur_sy.staves[t].empty; ) {
    if (cur_sy.staves[t].flags & n) return;
    t++;
   }
   for (r = i = t; cur_sy.staves[r].empty || (i = r), !(cur_sy.staves[r].flags & n); ) r++;
   s = staff_tb[t].y + staff_tb[t].topbar * staff_tb[t].staffscale, a = staff_tb[i].y + staff_tb[i].botbar * staff_tb[i].staffscale, 
   n & (CLOSE_BRACE | CLOSE_BRACE2) ? out_brace(e, a, s - a) : out_bracket(e, s, s - a);
  }
 }
 function draw_meter(e, t) {
  if (t.a_meter) {
   var n, r, i = t.st, s = staff_tb[i].y;
   for (e -= t.wl, r = 0; r < t.a_meter.length; r++) {
    var a, o = t.a_meter[r];
    if (n = "C|" == o.top ? 13 : 13 * o.top.length, o.bot) o.bot.length > o.top.length && (n = 13 * o.bot.length), 
    output.push('<g style="font:bold 16px serif"\n\ttransform="translate('), out_sxsy(e + .5 * n, ",", s), 
    output.push(') scale(1.2,1)">\n\t<text y="-12" text-anchor="middle">' + o.top + '</text>\n\t<text text-anchor="middle">' + o.bot + "</text>\n</g>\n"); else switch (o.top[0]) {
    case "C":
     a = "|" != o.top[1] ? "csig" : "ctsig", e -= 5, s += 12;
     break;

    case "c":
     a = "." != o.top[1] ? "imsig" : "iMsig";
     break;

    case "o":
     a = "." != o.top[1] ? "pmsig" : "pMsig";
     break;

    default:
     output.push('<g style="font:bold 18px serif"\n\ttransform="translate('), out_sxsy(e + .5 * n, ",", s), 
     output.push(') scale(1.2,1)">\n\t<text y="-6" text-anchor="middle">' + o.top + "</text>\n</g>\n");
    }
    a && xygl(e + .5 * n, s, a), e += n;
   }
  }
 }
 function draw_acc(e, t, n, r, i) {
  if (r) if (r == i) n = -1 == n ? -2 : 2; else if (2 * r != i) return void xygl(e, t, "acc" + n + "_" + r + "_" + i);
  xygl(e, t, "acc" + n);
 }
 function draw_hl(e, t, n, r, i) {
  var s = staff_tb[r], a = s.y, o = 2 * (s.stafflines.length - 1) * 3;
  if (!(o - s.botline < 4)) {
   for (t = 6 * Math.ceil(t / 6); t < s.botline; t += 6) xygl(e, a + t, i);
   for (n -= n % 6; n > o; n -= 6) xygl(e, a + n, i);
  }
 }
 const sharp_cl = [ 24, 9, 15, 21, 6, 12, 18 ], flat_cl = [ 12, 18, 24, 9, 15, 21, 6 ], sharp1 = [ -9, 12, -9, -9, 12, -9 ], sharp2 = [ 12, -9, 12, -9, 12, -9 ], flat1 = [ 9, -12, 9, -12, 9, -12 ], flat2 = [ -12, 9, -12, 9, -12, 9 ];
 function draw_keysig(e, t, n) {
  if (!n.k_none) {
   var r, i, s, a = n.k_old_sf, o = e.st, c = staff_tb[o].y, u = n.k_y_clef;
   for (1 & u && (u += 7), u /= 2; u < 0; ) u += 7;
   if (u %= 7, n.k_a_acc) {
    var l, f = n.k_a_acc[0].acc, p = 100;
    for (r = 0; r < n.k_a_acc.length; r++) l = n.k_a_acc[r], i = 3 * (n.k_y_clef + l.pit - 18), 
    0 != r && (i > p + 18 || i < p - 18) ? t -= 5.5 : l.acc != f && (t += 3), f = l.acc, 
    draw_hl(t, i, i, o, "hl"), p = i, draw_acc(t, c + i, l.acc, l.micro_n, l.micro_d), 
    t += 5.5;
   } else {
    if ((cfmt.cancelkey || 0 == n.k_sf) && (0 == n.k_sf || a * n.k_sf < 0)) {
     for (s = (i = sharp_cl[u]) > 9 ? sharp1 : sharp2, r = 0; r < a; r++) xygl(t, c + i, "acc3"), 
     i += s[r], t += 5.5;
     for (s = (i = flat_cl[u]) < 18 ? flat1 : flat2, r = 0; r > a; r--) xygl(t, c + i, "acc3"), 
     i += s[-r], t += 5.5;
     0 != n.k_sf && (t += 3);
    }
    if (n.k_sf > 0) {
     for (s = (i = sharp_cl[u]) > 9 ? sharp1 : sharp2, r = 0; r < n.k_sf; r++) xygl(t, c + i, "acc1"), 
     i += s[r], t += 5.5;
     if (cfmt.cancelkey && r < a) for (t += 2; r < a; r++) xygl(t, c + i, "acc3"), i += s[r], 
     t += 5.5;
    }
    if (n.k_sf < 0) {
     for (s = (i = flat_cl[u]) < 18 ? flat1 : flat2, r = 0; r > n.k_sf; r--) xygl(t, c + i, "acc-1"), 
     i += s[-r], t += 5.5;
     if (cfmt.cancelkey && n.k_sf > a) for (t += 2; r > a; r--) xygl(t, c + i, "acc3"), 
     i += s[-r], t += 5.5;
    }
   }
  }
 }
 function bar_cnv(e) {
  switch (e) {
  case "[":
  case "[]":
   return "";

  case ":":
   return "|";

  case "|:":
  case "|::":
  case "|:::":
   return "[" + e;

  case ":|":
  case "::|":
  case ":::|":
   return e + "]";

  case "::":
   return cfmt.dblrepbar;
  }
  return e;
 }
 function draw_bar(e, t, n) {
  var r, i, s = e.st, a = e.x;
  if (e.bar_mrep) if (i = staff_tb[s].y, set_scale(e), 1 == e.bar_mrep) {
   for (var o = e.prev; o.type != REST; o = o.prev) ;
   xygl(o.x, i, "mrep");
  } else xygl(a, i, "mrep2"), e.v == cur_sy.top_voice && (set_font("annotation"), 
  xy_str(a, i + staff_tb[s].topbar + 4, e.bar_mrep.toString(), "c"));
  0 == s || !e.ts_prev || e.ts_prev.type == BAR && e.ts_prev.st == s - 1 || (n = staff_tb[s].topbar * staff_tb[s].staffscale);
  var c = e.bar_dotted || ":" == e.bar_type, u = bar_cnv(e.bar_type);
  if (u) for (r = u.length; --r >= 0; ) {
   switch (u[r]) {
   case "|":
    set_sscale(-1), c ? out_dotbar(a, t, n) : out_bar(a, t, n);
    break;

   default:
    a -= 3, set_sscale(-1), out_thbar(a, t, n);
    break;

   case ":":
    a -= 2, set_sscale(s), xygl(a + 1, staff_tb[s].y, "rdots");
   }
   a -= 3;
  }
 }
 const rest_tb = [ "r128", "r64", "r32", "r16", "r8", "r4", "r2", "r1", "r0", "r00" ];
 function draw_rest(e) {
  var t, n, r, i, s, a, o, c = staff_tb[e.st];
  if (!c.empty) {
   if (e.dur == voice_tb[e.v].meter.wmeasure) {
    for (t = e.ts_next; t && t.time != e.time + e.dur; ) t = t.ts_next;
    for (s = t ? t.x : realwidth, t = e; !t.seqst; ) t = t.ts_prev;
    s = (s + (t = t.ts_prev).x) / 2, e.a_dd && deco_update(e, s - e.x), e.x = s;
   } else s = e.x, e.notes[0].shhd && (s += e.notes[0].shhd * stv_g.scale);
   if (!e.invisible) if (o = c.y, e.repeat_n) e.repeat_n < 0 ? xygl(s, o, "srep") : (xygl(s, o, "mrep"), 
   e.repeat_n > 2 && e.v == cur_sy.top_voice && (set_font("annotation"), xy_str(s, o + 24 + 4, e.repeat_n.toString(), "c"))); else if (a = e.y, 
   e.notes[0].a_dcn) for (i = 0; i < note.a_dcn.length; i++) draw_deco_head(e.notes[0].a_dcn[i], s, a + o, e.stem); else {
    if (7 == (n = 5 - e.nflags) && 12 == a && c.stafflines.length <= 2 && (a -= 6), 
    xygl(s, a + o, rest_tb[n]), n >= 6) switch (r = a / 6, n) {
    case 6:
     "|" != c.stafflines[r] && xygl(s, a + o, "hl");
     break;

    case 7:
     "|" != c.stafflines[r + 1] && xygl(s, a + 6 + o, "hl");
     break;

    default:
     "|" != c.stafflines[r + 1] && xygl(s, a + 6 + o, "hl"), 9 == n && (a -= 6, r--), 
     "|" != c.stafflines[r] && xygl(s, a + o, "hl");
    }
    for (s += 8, a += o - 3, n = 0; n < e.dots; n++) out_dot(s, a), s += 3.5;
   }
  }
 }
 function draw_gracenotes(e) {
  var t, n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g = {};
  for (h = e.extra; h && (h.type != NOTE || (user.anno_start && anno_start(e), h.beam_st && !h.beam_end && calculate_beam(g, h) && draw_beams(g), 
  draw_note(h, !g.s2), h == g.s2 && (g.s2 = void 0), h.sappo && (h.next ? (i = .5 * (h.next.x - h.x) + 4, 
  s = .5 * (h.ys + h.next.ys) - h.y, h.stem > 0 ? s -= 1 : s += 1) : (i = 9, s = h.stem > 0 ? 5 : -5), 
  out_acciac(x_head(h, v = h.notes[h.stem < 0 ? 0 : h.nhd]), y_head(h, v), i, s, h.stem > 0)), 
  user.anno_stop && anno_stop(e), h.next)); h = h.next) ;
  if (!voice_tb[e.v].key.k_bagpipe && cfmt.graceslurs && !e.slur_start && e.next && e.next.type == NOTE) {
   if ((m = h).stem >= 0) {
    for (t = 127, h = e.extra; h; h = h.next) h.type == NOTE && h.y < t && (t = h.y, 
    m = h);
    n = m.x, r = m.y - 5, e.extra != m && (n -= 4, r += 1), c = (e = e.next).x - 1, 
    e.stem < 0 && (c -= 4), u = 3 * (e.notes[0].pit - 18) - 5, (p = .4 * (c - n)) > 3 && (p = 3), 
    d = p, l = .2, f = .8, r > u + 7 ? (n = m.x - 1, r += .5, u += 6.5, c = e.x - 5.5, 
    p = .8 * (r - u), d = .2 * (r - u), l = 0) : u > r + 4 && (u = r + 4, n = m.x + 2, 
    r = m.y - 4);
   } else {
    for (t = -127, h = e.extra; h; h = h.next) h.type == NOTE && h.y > t && (t = h.y, 
    m = h);
    n = m.x, r = m.y + 5, e.extra != m && (n -= 4, r -= 1), c = (e = e.next).x - 1, 
    e.stem >= 0 && (c -= 2), u = 3 * (e.notes[e.nhd].pit - 18) + 5, (p = .4 * (n - c)) < -3 && (p = -3), 
    d = p, l = .2, f = .8, r < u - 7 ? (n = m.x - 1, r -= .5, u -= 6.5, c = e.x - 5.5, 
    p = .8 * (r - u), d = .2 * (r - u), l = 0) : u < r - 4 && (u = r - 4, n = m.x + 2, 
    r = m.y + 4);
   }
   i = l * c + (1 - l) * n - n, s = l * u + (1 - l) * r - p - r, a = f * c + (1 - f) * n - n, 
   o = f * u + (1 - f) * r - d - r, xypath(n, r + staff_tb[e.st].y), output.push("c" + i.toFixed(2) + " " + (-s).toFixed(2) + " " + a.toFixed(2) + " " + (-o).toFixed(2) + " " + (c - n).toFixed(2) + " " + (-u + r).toFixed(2) + '"/>\n');
  }
 }
 function setdoty(e, t) {
  var n, r, i;
  for (n = 0; n <= e.nhd; n++) (i = 3 * (e.notes[n].pit - 18)) % 6 == 0 && (e.dot_low ? i -= 3 : i += 3), 
  t[n] = i;
  for (n = 0; n < e.nhd; n++) if (!(t[n + 1] > t[n])) {
   for (r = n; r > 0 && !(t[r] > t[r - 1] + 6); ) r--;
   if (3 * (e.notes[r].pit - 18) - t[r] < t[n + 1] - 3 * (e.notes[n + 1].pit - 18)) for (;r <= n; ) t[r++] -= 6; else t[n + 1] = t[n] + 6;
  }
 }
 function x_head(e, t) {
  return e.x + t.shhd;
 }
 function y_head(e, t) {
  return staff_tb[e.st].y + 3 * (t.pit - 18);
 }
 function draw_basic_note(e, t, n, r) {
  var i, s, a, o, c, u, l, f, p = !1, d = t.notes[n];
  if (staffb = staff_tb[t.st].y, a = 3 * (d.pit - 18), shhd = d.shhd * stv_g.scale, 
  x_note = e + shhd, y_note = a + staffb, u = 0, d.a_dcn) for (s = 0; s < d.a_dcn.length; s++) u |= draw_deco_head(d.a_dcn[s], e + shhd, a + staffb, t.stem);
  if (!(t.invisible || void 0 != t.nohdi1 && n >= t.nohdi1 && n < t.nohdi2)) {
   var h = identify_note(t, d.dur), m = h[0], v = h[1];
   h[2];
   if (a % 6 == 0 && shhd != (t.stem > 0 ? t.notes[0].shhd : t.notes[t.nhd].shhd) && (c = 0, 
   a >= 30 ? (c = a) % 6 && (c -= 3) : a <= -6 && (c = a) % 6 && (c += 3), c && xygl(x_note, c + staffb, "hl")), 
   u) ; else if (d.map && d.map[0]) (i = -t.nflags) < 0 && (i = 0), (o = d.map[0][i]) || (o = d.map[0][d.map[0].length - 1]), 
   (i = o.indexOf("/")) >= 0 && (o = t.stem >= 0 ? o.slice(0, i) : o.slice(i + 1)); else if (t.grace) o = "ghd", 
   x_note -= 4.5 * stv_g.scale; else if (t.type == CUSTOS) o = "custos"; else switch (m) {
   case "oval":
    if (d.dur < 2 * BASE_LEN) {
     o = "HD";
     break;
    }
    if ("square" != t.head) {
     o = "HDD";
     break;
    }

   case "square":
    o = d.dur < 4 * BASE_LEN ? "breve" : "longa", tsnext || !t.next || t.next.type != BAR || t.next.next || (v = 0);
    break;

   case "empty":
    o = "Hd";
    break;

   default:
    o = "hd";
   }
   if (d.map && d.map[2] && (p = set_color(d.map[2])), o && xygl(x_note, y_note, o), 
   v) for (l = e + (7.7 + t.xmx) * stv_g.scale, void 0 == r[n] && (r[n] = 3 * (t.notes[n].pit - 18), 
   0 == (1 & t.notes[n].pit) && (r[n] += 3)), f = r[n] + staffb; --v >= 0; ) out_dot(l, f), 
   l += 3.5;
   d.acc && (e -= d.shac * stv_g.scale, t.grace ? (output.push('<g transform="translate('), 
   out_sxsy(e, ",", a + staffb), output.push(') scale(.7)">\n'), stv_g.trans = !0, 
   draw_acc(0, 0, d.acc, d.micro_n, d.micro_d), stv_g.trans = !1, output.push("</g>\n")) : draw_acc(e, a + staffb, d.acc, d.micro_n, d.micro_d)), 
   0 != p && set_color(p);
  }
 }
 function draw_note(e, t) {
  var n, r, i, s, a, o, c, u, l, f = new Array(e.nhd + 1);
  if (e.dots && setdoty(e, f), c = x_head(e, l = e.notes[e.stem < 0 ? e.nhd : 0]), 
  i = staff_tb[e.st].y, !e.invisible) {
   if (e.grace) a = "ghl"; else switch (e.head) {
   default:
    a = "hl";
    break;

   case "oval":
    a = "hl1";
    break;

   case "square":
    a = "hl2";
   }
   draw_hl(c, 3 * (e.notes[0].pit - 18), 3 * (e.notes[e.nhd].pit - 18), e.st, a);
  }
  if (u = y_head(e, l), e.invisible || e.stemless ? e.xstem && (s = ((n = e.ts_prev).stem > 0 ? n.y : n.ys) - e.y, 
  s += staff_tb[n.st].y - i, out_stem(c, u, s /= voice_tb[e.v].scale)) : (s = e.ys - e.y, 
  o = e.nflags, e.ntrem && (o -= e.ntrem), !t || o <= 0 ? (e.nflags > 0 && (e.stem >= 0 ? s -= 1 : s += 1), 
  out_stem(c, u, s, e.grace)) : out_stem(c, u, s, e.grace, o, cfmt.straightflags)), 
  !e.invisible && t && e.trem1) {
   var p = e.ntrem ? e.ntrem : 0, d = c;
   s = 3 * (e.notes[e.stem > 0 ? e.nhd : 0].pit - 18), "full" == e.head || "empty" == e.head ? (d += (e.grace ? GSTEM_XOFF : 3.5) * e.stem, 
   e.stem > 0 ? s += 6 + 5.4 * p : s -= 11.4) : e.stem > 0 ? s += 5 + 5.4 * p : s -= 10.4, 
   out_trem(d, i + (s /= voice_tb[e.v].scale), p);
  }
  for (c = e.x, r = 0; r <= e.nhd; r++) draw_basic_note(c, e, r, f);
 }
 function next_scut(e) {
  var t = e;
  for (e = e.next; e; e = e.next) {
   if (e.type == BAR && (":" == e.bar_type[0] || "|]" == e.bar_type || "[|" == e.bar_type || e.text && "1" != e.text[0])) return e;
   t = e;
  }
  return t;
 }
 function prev_scut(e) {
  for (;e.prev; ) if ((e = e.prev).type == BAR && (":" == e.bar_type[0] || "|]" == e.bar_type || "[|" == e.bar_type || e.text && "1" != e.text[0])) return e;
  for (e = voice_tb[e.v].sym; e.type != CLEF; ) e = e.ts_prev;
  return e.next.type == KEY && (e = e.next), e.next.type == METER ? e.next : e;
 }
 function slur_direction(e, t) {
  var n, r, i;
  for (n = e; ;n = n.next) {
   if (n.type == NOTE) {
    if (!n.stemless) {
     if (n.stem < 0) return 1;
     r = !0;
    }
    n.notes[0].pit < 22 && (i = !0);
   }
   if (n == t) break;
  }
  return r || i ? -1 : 1;
 }
 function slur_out(e, t, n, r, i, s, a) {
  var o, c, u, l = .3;
  (c = r - t) < 0 && (c = -c), (o = n - e) > 40 && c / o < .7 && (l = .3 + .002 * (o - 40)) > .7 && (l = .7);
  var f = .5 * (e + n), p = .5 * (t + r), d = f + l * (e - f), h = p + l * (t - p) + s;
  d = e + .45 * (d - e), h = t + .45 * (h - t);
  var m = f + l * (n - f), v = p + l * (r - p) + s;
  m = n + .45 * (m - n), v = r + .45 * (v - r), o = .03 * (n - e), c = 2 * i, (u = .2 + .001 * (n - e)) > .6 && (u = .6), 
  u *= i;
  var g = stv_g.v ? stv_g.scale : 1;
  a ? output.push('<path class="stroke" stroke-dasharray="5,5" d="M') : output.push('<path class="fill" d="M'), 
  out_sxsy(e, " ", t), output.push("c" + ((d - e) / stv_g.scale).toFixed(2) + " " + ((t - h) / g).toFixed(2) + " " + ((m - e) / stv_g.scale).toFixed(2) + " " + ((t - v) / g).toFixed(2) + " " + ((n - e) / stv_g.scale).toFixed(2) + " " + ((t - r) / g).toFixed(2)), 
  a || output.push("\n\tv" + (-u).toFixed(2) + "c" + ((m - o - n) / stv_g.scale).toFixed(2) + " " + ((r + u - v - c) / g).toFixed(2) + " " + ((d + o - n) / stv_g.scale).toFixed(2) + " " + ((r + u - h - c) / g).toFixed(2) + " " + ((e - n) / stv_g.scale).toFixed(2) + " " + ((r + u - t) / g).toFixed(2)), 
  output.push('"/>\n');
 }
 function slur_multi(e, t) {
  for (;;) {
   if (e.multi) return e.multi;
   if (e == t) break;
   e = e.next;
  }
  return 0;
 }
 function draw_slur(e, t, n, r, i) {
  for (var s, a, o, c, u, l, f, p, d, h, m, v, g, y, _, b = e; b.v != t.v; ) b = b.ts_next;
  switch (7 & i) {
  case SL_ABOVE:
   _ = 1;
   break;

  case SL_BELOW:
   _ = -1;
   break;

  default:
   (_ = slur_multi(b, t)) || (_ = slur_direction(b, t));
  }
  var x = 1, w = b.st, k = !1;
  if (b != t) for (s = b.next; s.type != NOTE && s.type != REST || (x++, s.st != w && (k = !0, 
  s.st < w && (w = s.st))), s != t; ) s = s.next;
  if (k && error(2, b, "*** multi-staves slurs not treated yet"), o = e.x, e.notes && e.notes[0].shhd && (o += e.notes[0].shhd), 
  e != t) u = t.x, t.notes && (u += t.notes[0].shhd); else {
   for (s = t.ts_next; s && !s.new_sy; s = s.ts_next) ;
   u = s ? s.x : realwidth;
  }
  if (n >= 0 ? c = 3 * (b.notes[n].pit - 18) + 5 * _ : (c = _ > 0 ? b.ymx + 2 : b.ymn - 2, 
  b.type == NOTE && (_ > 0 ? b.stem > 0 ? (o += 5, b.beam_end && b.nflags >= -1 && !b.in_tuplet ? b.nflags > 0 ? (o += 2, 
  c = b.ys - 3) : c = b.ys - 6 : c = b.ys + 3) : c = b.y + 8 : b.stem < 0 ? (o -= 1, 
  b.beam_end && b.nflags >= -1 && (!b.in_tuplet || b.ys < c + 3) ? b.nflags > 0 ? (o += 2, 
  c = b.ys + 3) : c = b.ys + 6 : c = b.ys - 3) : c = b.y - 8)), r >= 0 ? l = 3 * (t.notes[r].pit - 18) + 5 * _ : (l = _ > 0 ? t.ymx + 2 : t.ymn - 2, 
  t.type == NOTE && (_ > 0 ? t.stem > 0 ? (u += 1, l = t.beam_st && t.nflags >= -1 && !t.in_tuplet ? t.ys - 6 : t.ys + 3) : l = t.y + 8 : t.stem < 0 ? (u -= 5, 
  l = t.beam_st && t.nflags >= -1 && !t.in_tuplet ? t.ys + 6 : t.ys - 3) : l = t.y - 8)), 
  b.type != NOTE && (c = l + 1.2 * _, (o = b.x + .5 * b.wr) > u - 12 && (o = u - 12)), 
  t.type != NOTE && (l = b.type == NOTE ? c + 1.2 * _ : c, b != t && (u = t.x - .3 * t.wl)), 
  x >= 3 && (b.next.type != BAR && b.next.x < o + 48 && (_ > 0 ? c < (h = b.next.ymx - 2) && (c = h) : c > (h = b.next.ymn + 2) && (c = h)), 
  t.prev && t.prev.type != BAR && t.prev.x > u - 48 && (_ > 0 ? l < (h = t.prev.ymx - 2) && (l = h) : l > (h = t.prev.ymn + 2) && (l = h))), 
  ((d = (l - c) / (u - o)) > SLUR_SLOPE || d < -SLUR_SLOPE) && ((d = d > SLUR_SLOPE ? SLUR_SLOPE : -SLUR_SLOPE) * _ > 0 ? c = l - d * (u - o) : l = c + d * (u - o)), 
  (h = l - c) > 8 ? h = 8 : h < -8 && (h = -8), (m = h) < 0 && (m = -m), g = .5 * m, 
  y = .3 * h, h * _ > 0 ? (u -= g, l -= y) : (o += g, c += y), b.grace && (o = b.x - .5 * GSTEM_XOFF), 
  t.grace && (u = t.x + 1.5 * GSTEM_XOFF), v = 0, d = (l - c) / (u - o), b != t && b.v == t.v) {
   for (p = c - d * o, s = b.next; s != t; s = s.next) if (s.st == w) switch (s.type) {
   case NOTE:
   case REST:
    _ > 0 ? ((h = 3 * (s.notes[s.nhd].pit - 18) + 6) < s.ymx && (h = s.ymx), (h -= d * s.x + p) > v && (v = h)) : ((h = 3 * (s.notes[0].pit - 18) - 6) > s.ymn && (h = s.ymn), 
    (h -= d * s.x + p) < v && (v = h));
    break;

   case GRACE:
    for (a = s.extra; a; a = a.next) a.type == NOTE && (_ > 0 ? ((h = 3 * (a.notes[a.nhd].pit - 18) + 6) < a.ymx && (h = a.ymx), 
    (h -= d * a.x + p) > v && (v = h)) : ((h = 3 * (a.notes[0].pit - 18) - 6) > a.ymn && (h = a.ymn), 
    (h -= d * a.x + p) < v && (v = h)));
   }
   c += .45 * v, l += .45 * v, v *= .65;
  }
  if (f = x > 3 ? (.08 * (u - o) + 12) * _ : (.03 * (u - o) + 8) * _, _ > 0 ? (f < 3 * v && (f = 3 * v), 
  f > 40 && (f = 40)) : (f > 3 * v && (f = 3 * v), f < -40 && (f = -40)), (h = l - c) < 0 && (h = -h), 
  _ > 0 ? f < .8 * h && (f = .8 * h) : f > -.8 * h && (f = -.8 * h), slur_out(o, c, u, l, _, f *= cfmt.slurheight, i & SL_DOTTED), 
  p = c - (d = (l - c) / (g = u - o)) * o + .4 * f, b.v == t.v) for (s = b; s != t; s = s.next) s.st == w && (h = d * s.x + p, 
  s.ymx < h ? s.ymx = h : s.ymn > h && (s.ymn = h), s.next == t ? (g = u, t.sl1 && (g -= 5)) : g = s.next.x, 
  s != b && (o = s.x), y_set(w, _ > 0, o, g -= o, h));
  return (_ > 0 ? SL_ABOVE : SL_BELOW) | i & SL_DOTTED;
 }
 function draw_slurs(e, t) {
  for (var n, r, i, s, a, o, c, u, l = e; ;) {
   if (!l || l == t) {
    if (!i || !(l = i.next) || l == t) break;
    i = null;
   }
   if (l.type != GRACE) if (l.type != NOTE && l.type != REST && l.type != SPACE || !l.slur_start && !l.sl1) l = l.next; else {
    r = null, n = l.next;
    for (var f = !1; ;) if (n) if (n.type != GRACE) {
     if (n.type == BAR && (":" == n.bar_type[0] || "|]" == n.bar_type || "[|" == n.bar_type || n.text && "1" != n.text[0])) {
      r = n;
      break;
     }
     if (n.type == NOTE || n.type == REST || n.type == SPACE) {
      if (n.slur_end || n.sl2) {
       r = n;
       break;
      }
      if (n.slur_start || n.sl1) {
       if (s) {
        for (r = n; r.next; r = r.next) ;
        r.next = s.next, s.next && (s.next.prev = r), r = null;
       }
       draw_slurs(n, t), s && s.next && (delete s.next.prev.next, s.next.prev = s);
      }
      if (n == t) break;
      n = n.next;
     } else n = n.next;
    } else s = n, n = n.extra; else {
     if (s) {
      n = s.next, s = null;
      continue;
     }
     if (!i || f) break;
     n = i.next, f = !0;
    }
    if (n) {
     if (!r) {
      if ((l = n) == t) break;
      continue;
     }
    } else r = next_scut(l);
    if (i) {
     for (n = l; n.next; n = n.next) ;
     n.next = i.next, i.next && (i.next.prev = n), i.slur_start = SL_AUTO;
    }
    if (s && (s.prev.next = s.extra, s.extra.prev = s.prev, s.slur_start = SL_AUTO), 
    l.slur_start) c = 15 & l.slur_start, l.slur_start >>= 4, a = -1; else {
     for (a = 0; a <= l.nhd && !l.notes[a].sl1; a++) ;
     c = 15 & l.notes[a].sl1, l.notes[a].sl1 >>= 4, l.sl1--;
    }
    if (o = -1, u = 0, r.type != NOTE && r.type != REST && r.type != SPACE || !r.slur_end && !r.sl2) r.type == BAR && (":" == r.bar_type[0] || "|]" == r.bar_type || "[|" == r.bar_type || r.text && "1" != r.text[0]) || (u = 1); else if (r.slur_end) r.slur_end--; else {
     for (o = 0; o <= r.nhd && !r.notes[o].sl2; o++) ;
     r.notes[o].sl2--, r.sl2--;
    }
    if (c = draw_slur(l, r, a, o, c), u && (voice_tb[r.v].slur_start <<= 4, voice_tb[r.v].slur_start += c), 
    i && i.next && (delete i.next.prev.next, i.next.prev = i), s && (s.prev.next = s, 
    delete s.extra.prev), !l.slur_start && !l.sl1) {
     if (l == t) break;
     l = l.next;
    }
   } else i = l, l = l.extra;
  }
 }
 function draw_tuplet(e, t) {
  var n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g, y, _, b, x, w = t;
  if (1 == e.tuplet_f[0]) return w;
  for (s = e.next; s; s = s.next) s.type == TUPLET && (i = draw_tuplet(s, t)).time > w.time && (w = i);
  for (a = e.tuplet_r, o = t.st, r = t; r; r = r.next) {
   if (r != t && r.in_tuplet) for (s = r.extra; s; s = s.next) s.type == TUPLET && (i = draw_tuplet(s, r)).time > w.time && (w = i);
   if (r.type == NOTE || r.type == REST) {
    if ((r.slur_start || r.slur_end || r.sl1 || r.sl2) && (u = !0), r.st < o && (o = r.st), 
    n || (n = r), --a <= 0) break;
   } else if (r.type == GRACE) for (s = r.extra; s; s = s.next) s.type == NOTE && (s.slur_start || s.sl1) && (u = !0);
  }
  if (!r) return w;
  if (r.time > w.time && (w = r), n == r) c = !0; else if (1 == e.tuplet_f[1]) c = !0, 
  draw_slur(n, r, -1, -1, n.stem > 0 ? SL_ABOVE : SL_BELOW); else if (2 == e.tuplet_f[0] || n.type != NOTE || r.type != NOTE) c = !1; else {
   for (c = !0, i = n; ;i = i.next) {
    if (i.type != NOTE && i.type != REST) {
     if (i.type == GRACE || i.type == SPACE) continue;
     c = !1;
     break;
    }
    if (i == r) break;
    if (i.beam_end) {
     c = !1;
     break;
    }
   }
   if (c && !n.beam_st && !n.beam_br1 && !n.beam_br2) for (i = n.prev; i; i = i.prev) if (i.type == NOTE || i.type == REST) {
    i.nflags >= n.nflags && (c = !1);
    break;
   }
   if (c && !r.beam_end) for (i = r.next; i; i = i.next) if (i.type == NOTE || i.type == REST) {
    !i.beam_br1 && !i.beam_br2 && i.nflags >= r.nflags && (c = !1);
    break;
   }
  }
  if (c) {
   if (1 == e.tuplet_f[2]) return w;
   for (h = .5 * (r.x + n.x), g = (b = n == r ? 0 : (r.ys - n.ys) / (r.x - n.x)) * h + (x = n.ys - b * n.x), 
   n.stem > 0 ? ((m = y_get(o, 1, h - 3, 6)) > g && (x += m - g), x += 2) : ((m = y_get(o, 0, h - 3, 6)) < g && (x += m - g), 
   x -= 10), i = n; !(i.x >= h); i = i.next) ;
   return n.stem * r.stem > 0 && (n.stem > 0 ? h += 1.5 : h -= 1.5), m = b * h + x, 
   0 == e.tuplet_f[2] ? out_bnum(h, m, e.tuplet_p) : out_bnum(h, m, e.tuplet_p + ":" + e.tuplet_q), 
   n.stem > 0 ? (m += 10, i.ymx < m && (i.ymx = m), y_set(o, !0, h - 3, 6, m)) : (i.ymn > m && (i.ymn = m), 
   y_set(o, !1, h - 3, 6, m)), t.in_tuplet = !1, w;
  }
  if (u) {
   if (draw_slurs(n, r), n.slur_start || n.sl1) return w;
   for (i = n.next; i != r; i = i.next) if (i.slur_start || i.slur_end || i.sl1 || i.sl2) return w;
   if (r.slur_end || r.sl2) return w;
  }
  if (0 != e.tuplet_f[1] && error(2, e, "'what' value of %%tuplets not yet coded"), 
  n.multi >= 0) {
   if (l = n.x - 4, p = 24, n.st == o) {
    if ((i = n).type != NOTE) for (i = i.next; i != r && i.type != NOTE; i = i.next) ;
    (m = y_get(o, 1, i.x, 0)) > p && (p = m), n.stem > 0 && (l += 3);
   }
   if (d = 24, r.st == o) {
    if ((i = r).type != NOTE) for (i = i.prev; i != n && i.type != NOTE; i = i.prev) ;
    (m = y_get(o, 1, i.x, 0)) > d && (d = m);
   }
   for (r.dur > r.prev.dur ? f = r.next ? r.next.x - r.next.wl - 5 : realwidth - 6 : (f = r.x + 4, 
   a = r.stem >= 0 ? 0 : r.nhd, r.notes[a].shhd > 0 && (f += r.notes[a].shhd), r.st == o && r.stem > 0 && (f += 3.5)), 
   h = .5 * (l + f), m = .5 * (p + d), b = (d - p) / (f - l), (v = 3 * (r.notes[r.nhd].pit - n.notes[n.nhd].pit) / (f - l)) > 0 ? b < 0 ? b = 0 : b > v && (b = v) : b > 0 ? b = 0 : b < v && (b = v), 
   b * b < .1 * .1 && (b = 0), _ = 0, i = n; ;i = i.next) if (i.dur && i.st == o) {
    if (g = m + (i.x - h) * b, (y = y_get(o, 1, i.x, 0)) - g > _ && (_ = y - g), i == r) break;
   } else if (i == r) break;
   for (out_tubr(l, (p = (m += _ + 2) + b * (l - h)) + 4, f - l, (d = m + b * (f - h)) - p, !0), 
   m += 8, i = n; ;i = i.next) if (i.st == o) {
    if (g = m + (i.x - h) * b, i.ymx < g && (i.ymx = g), i == r) break;
    y_set(o, !0, i.x, i.next.x - i.x, g);
   } else if (i == r) break;
  } else {
   if (l = n.x - 7, r.dur > r.prev.dur ? f = r.next ? r.next.x - r.next.wl - 8 : realwidth - 6 : (f = r.x + 2, 
   r.notes[r.nhd].shhd > 0 && (f += r.notes[r.nhd].shhd)), n.st == o) {
    if ((i = n).type != NOTE) for (i = i.next; i != r && i.type != NOTE; i = i.next) ;
    p = y_get(o, 0, i.x, 0);
   } else p = 0;
   if (r.st == o) {
    if ((i = r).type != NOTE) for (i = i.prev; i != n && i.type != NOTE; i = i.prev) ;
    d = y_get(o, 0, i.x, 0);
   } else d = 0;
   for (h = .5 * (l + f), m = .5 * (p + d), b = (d - p) / (f - l), (v = 3 * (r.notes[0].pit - n.notes[0].pit) / (f - l)) > 0 ? b < 0 ? b = 0 : b > v && (b = v) : b > 0 ? b = 0 : b < v && (b = v), 
   b * b < .1 * .1 && (b = 0), _ = 0, i = n; ;i = i.next) if (i.dur && i.st == o) {
    if (g = m + (i.x - h) * b, (y = y_get(o, 0, i.x, 0)) - g < _ && (_ = y - g), i == r) break;
   } else if (i == r) break;
   for (out_tubr(l, (p = (m += _ - 10) + b * (l - h)) + 4, f - l, (d = m + b * (f - h)) - p), 
   m -= 2, i = n; ;i = i.next) {
    if (i.st == o) {
     if (i == r) break;
     g = m + (i.x - h) * b, i.ymn > g && (i.ymn = g), y_set(o, !1, i.x, i.next.x - i.x, g);
    }
    if (i == r) break;
   }
  }
  return 1 == e.tuplet_f[2] ? (t.in_tuplet = !1, w) : (g = .5 * (p + d), 0 == e.tuplet_f[2] ? out_bnum(h, g, e.tuplet_p, !0) : out_bnum(h, g, e.tuplet_p + ":" + e.tuplet_q, !0), 
  n.multi >= 0 ? y_set(o, !0, h - 3, 6, g += 9) : y_set(o, !1, h - 3, 6, g), t.in_tuplet = !1, 
  w);
 }
 function draw_note_ties(e, t, n, r, i) {
  var s, a, o, c, u, l, f, p, d, h, m, v, g, y;
  for (s = 0; s < n.length; s++) {
   switch (o = n[s], l = e.notes[o].pit, c = r[s], f = t.notes[c].pit, a = (7 & e.notes[o].ti1) == SL_ABOVE ? 1 : -1, 
   m = e.x, y = e.notes[o].shhd, a > 0 ? o < e.nhd && l + 1 == e.notes[o + 1].pit && e.notes[o + 1].shhd > y && (y = e.notes[o + 1].shhd) : o > 0 && l == e.notes[o - 1].pit + 1 && e.notes[o - 1].shhd > y && (y = e.notes[o - 1].shhd), 
   m += .6 * y, v = t.x, y = t.notes[c].shhd, a > 0 ? c < t.nhd && f + 1 == t.notes[c + 1].pit && t.notes[c + 1].shhd < y && (y = t.notes[c + 1].shhd) : c > 0 && f == t.notes[c - 1].pit + 1 && t.notes[c - 1].shhd < y && (y = t.notes[c - 1].shhd), 
   v += .6 * y, d = e.st, i) {
   case 0:
    u = l == f || 1 & l ? l : f;
    break;

   case 1:
   case 3:
    (m = e.x) > v - 20 && (m = v - 20), u = f, d = t.st, 3 == i && (a = -a);
    break;

   default:
    if (e != t) v -= t.wl; else {
     for (h = t.ts_next; h && !h.new_sy; h = h.ts_next) ;
     v = h ? h.x : realwidth;
    }
    v < m + 16 && (v = m + 16), u = l;
   }
   v - m > 20 && (m += 3.5, v -= 3.5), p = 3 * (u - 18), 1 != i && 3 != i ? (1 & u && (p += 2 * a), 
   a > 0 && !(1 & u) && e.dots > 0 && (p = 3 * (u - 18) + 6)) : 1 & u && (p += 2 * a), 
   g = (.04 * (v - m) + 10) * a, slur_out(m, staff_tb[d].y + p, v, staff_tb[d].y + p, a, g, e.notes[o].ti1 & SL_DOTTED);
  }
 }
 function draw_ties(e, t, n) {
  var r, i, s, a, o, c, u = [], l = [], f = [], p = e.nhd, d = e.time + e.dur;
  if (e.type == GRACE) for (r = e.extra; r; ) r.type == NOTE && (e = r), r = r.next;
  if (t && t.type == GRACE) for (r = t.extra; r; ) {
   if (r.type == NOTE) {
    t = r, 2 == n && (n = 0);
    break;
   }
   r = r.next;
  }
  if (2 != n) {
   for (i = 0; i <= p; i++) if (e.notes[i].ti1) {
    for (c = -1, o = e.notes[i].apit, a = t.nhd; a >= 0; a--) {
     switch (t.notes[a].apit - o) {
     case 1:
     case -1:
      e.notes[i].acc != t.notes[a].acc && (c = a);

     default:
      continue;

     case 0:
      c = a;
     }
     break;
    }
    c >= 0 ? (u.push(i), l.push(c)) : f.push(i);
   }
   if (draw_note_ties(e, t, u, l, n), 0 != f.length) {
    for (r = e.ts_next; r && r.time < d; ) r = r.ts_next;
    for (;r && r.time == d; ) if (r.type == NOTE && r.st == e.st) {
     for (u.length = 0, l.length = 0, i = f.length; --i >= 0; ) for (s = f[i], o = e.notes[s].apit, 
     a = r.nhd; a >= 0; a--) if (r.notes[a].apit == o) {
      u.push(s), l.push(a), f[i] = f.pop();
      break;
     }
     if (u.length > 0 && (draw_note_ties(e, r, u, l, 1 == n ? 1 : 0), 0 == f.length)) return;
     r = r.ts_next;
    } else r = r.ts_next;
    0 != f.length && error(1, e, "Bad tie");
   }
  } else {
   for (i = 0; i <= p; i++) e.notes[i].ti1 && f.push(i);
   draw_note_ties(e, t || e, f, f, n);
  }
 }
 function tie_comb(e) {
  var t, n, r;
  for (n = e.time + e.dur, r = e.st, t = e.ts_next; t; t = t.ts_next) if (t.st == r) if (t.time != n) {
   if (t.time > n) return e;
  } else if (t.type == NOTE) return t;
  return null;
 }
 function draw_all_ties(e) {
  var t, n, r, i, s, a, o, c, u;
  for (t = e.sym; t; t = t.next) {
   switch (t.type) {
   case CLEF:
   case KEY:
   case METER:
    continue;
   }
   break;
  }
  for (a = e.s_rtie, n = t; n && (!n.dur && n.type != GRACE); n = n.next) n.type == BAR && n.text && ("1" == n.text[0] ? a = e.s_tie : e.s_tie = a);
  if (n) {
   for (e.s_tie && (e.s_tie.x = t.x + t.wr, t = e.s_tie, delete e.s_tie, t.st = n.st, 
   t.ts_next = n.ts_next, t.time = n.time - t.dur, draw_ties(t, n, 1)); ;) {
    for (t = n; t && !t.ti1; t = t.next) if (a && t.type == BAR && t.text) if ("1" != t.text[0]) {
     if ("|" != t.bar_type) {
      for (n = t.next; n && n.type != NOTE; n = n.next) ;
      if (!n) {
       t = null;
       break;
      }
      (o = clone(a)).x = t.x + t.wr, o.next = n, o.st = n.st, o.time = n.time - o.dur, 
      draw_ties(o, n, 1);
     }
    } else a = null;
    if (!t) break;
    for (s = t.time + t.dur, n = t.next; n && !n.dur; n = n.next) ;
    if (n) {
     if (n.type != NOTE) {
      error(1, t, "Bad tie");
      continue;
     }
     n.time != s && (n = tie_comb(t));
    } else {
     for (n = t.ts_next; n; n = n.ts_next) if (n.st == t.st && !(n.time < s)) {
      if (n.time > s) {
       n = null;
       break;
      }
      if (n.dur) break;
     }
     if (!n) {
      draw_ties(t, null, 2), e.s_tie = t;
      break;
     }
    }
    for (r = t.ts_next; r; r = r.ts_next) if (r.st == t.st) {
     if (r.time > s) break;
     if (r.type != CLEF) {
      if (r.type == BAR) {
       if (":" == r.bar_type[0] || "|]" == r.bar_type || "[|" == r.bar_type) {
        n = r;
        break;
       }
       if (!r.text) continue;
       if ("1" != r.text[0]) {
        n = r;
        break;
       }
       a = t;
      }
     } else i = !0;
    }
    i || t.st != n.st ? (i = !1, u = .4 * (n.x - t.x), c = n.x, n.x -= u, n.x > t.x + 32 && (n.x = t.x + 32), 
    draw_ties(t, n, 2), n.x = c, c = t.x, t.x += u, t.x < n.x - 24 && (t.x = n.x - 24), 
    draw_ties(t, n, 3), t.x = c) : draw_ties(t, n, n.type == NOTE ? 0 : 2);
   }
   e.s_rtie = a;
  }
 }
 function draw_all_slurs(e) {
  var t, n, r, i = e.sym;
  if (i) {
   var s = 0;
   if (r = e.slur_start) for (;0 != r; ) s <<= 4, s |= 15 & r, r >>= 4;
   for (delete e.slur_start, draw_slurs(i, void 0); i; i = i.next) if (i.type == NOTE || i.type == REST || i.type == SPACE) for (;i.slur_end || i.sl2; ) {
    if (i.slur_end) i.slur_end--, n = -1; else {
     for (n = 0; n <= i.nhd && !i.notes[n].sl2; n++) ;
     i.notes[n].sl2--, i.sl2--;
    }
    r = 15 & s, draw_slur(t = prev_scut(i), i, -1, n, r), t.type == BAR && (":" == t.bar_type[0] || "|]" == t.bar_type || "[|" == t.bar_type || t.text && "1" != t.text[0]) || (s >>= 4);
   }
   for (i = e.sym; 0 != s; ) r = 15 & s, s >>= 4, draw_slur(i, t = next_scut(i), -1, -1, r), 
   t.type == BAR && (":" == t.bar_type[0] || "|]" == t.bar_type || "[|" == t.bar_type || t.text && "1" != t.text[0]) || (e.slur_start <<= 4, 
   e.slur_start += r);
  }
 }
 function draw_sym_near() {
  var e, t, n, r, i, s, a, o, c, u;
  for (r = 0; r < voice_tb.length; r++) {
   var l = {}, f = !0;
   for (n = (e = voice_tb[r]).sym; n; n = n.next) {
    for (s = n.extra; s; s = s.next) s.type == NOTE && s.beam_st && !s.beam_end && calculate_beam(l, s);
    n.type == NOTE && ((n.beam_st && !n.beam_end || f && !n.beam_st) && (f = !1, calculate_beam(l, n)));
   }
  }
  for (u = 0; u <= nstaff; u++) for ((t = staff_tb[u]).top || (t.top = [], t.bot = []), 
  c = 0; c < YSTEP; c++) t.top[c] = 0, t.bot[c] = 24;
  for (set_tie_room(), draw_deco_near(), n = tsfirst; n; n = n.ts_next) if (!n.invisible) if (n.type != GRACE) n.type != MREST ? (y_set(n.st, !0, n.x - n.wl, n.wl + n.wr, n.ymx + 2), 
  y_set(n.st, !1, n.x - n.wl, n.wl + n.wr, n.ymn - 2)) : y_set(n.st, !0, n.x - 16, 32, n.ymx + 2), 
  n.type == NOTE && (n.notes[n.nhd].acc && (i = n.y + 8, n.ymx < i && (n.ymx = i), 
  y_set(n.st, !0, n.x, 0, i)), n.notes[0].acc && (i = n.y, 1 == n.notes[0].acc || 3 == n.notes[0].acc ? i -= 7 : i -= 5, 
  n.ymn > i && (n.ymn = i), y_set(n.st, !1, n.x, 0, i))); else for (s = n.extra; s; s = s.next) y_set(n.st, !0, s.x - 2, 4, s.ymx + 1), 
  y_set(n.st, !1, s.x - 2, 4, s.ymn - 1);
  for (cfmt.measurenb >= 0 && draw_measnb(), draw_deco_note(), r = 0; r < voice_tb.length; r++) if (n = (e = voice_tb[r]).sym) {
   for (set_dscale(u = e.st); n; n = n.next) if (n.in_tuplet) for (s = n.extra; s; s = s.next) if (s.type == TUPLET) {
    n = draw_tuplet(s, n);
    break;
   }
   for (draw_all_slurs(e), n = e.sym; n; n = n.next) if (n.in_tuplet) for (s = n.extra; s; s = s.next) if (s.type == TUPLET) {
    n = draw_tuplet(s, n);
    break;
   }
  }
  for (u = 0; u <= nstaff; u++) for (a = (t = staff_tb[u]).topbar + 2, o = t.botbar - 2, 
  c = 0; c < YSTEP; c++) a > t.top[c] && (t.top[c] = a), o < t.bot[c] && (t.bot[c] = o);
  for (r = 0; r < voice_tb.length; r++) if ((e = voice_tb[r]).have_ly) {
   draw_all_lyrics();
   break;
  }
  draw_deco_staff(), set_sscale(-1);
 }
 function draw_vname(e) {
  var t, n, r, i, s, a, o, c = [];
  for (r = cur_sy.nstaff; r >= 0 && cur_sy.staves[r].empty; r--) ;
  if (!(r < 0)) {
   for (i = 0; i < voice_tb.length; i++) if ((t = voice_tb[i]).sym && (r = cur_sy.voices[i].st, 
   cur_sy.staves[r] && !cur_sy.staves[r].empty && (t.new_name ? (delete t.new_name, 
   a = t.nm) : a = t.snm, a))) {
    if (cur_sy.staves[r].flags & CLOSE_BRACE2) for (;!(cur_sy.staves[r].flags & OPEN_BRACE2); ) r--; else if (cur_sy.staves[r].flags & CLOSE_BRACE) for (;!(cur_sy.staves[r].flags & OPEN_BRACE); ) r--;
    c[r] ? c[r] += "\\n" + a : c[r] = a;
   }
   if (0 != c.length) for (set_font("voice"), e = .5 * -e, r = 0; r < c.length; r++) if (c[r]) {
    if (s = c[r].split("\\n"), o = staff_tb[r].y + .5 * staff_tb[r].topbar * staff_tb[r].staffscale + 9 * (s.length - 1) - .3 * gene.curfont.size, 
    n = r, cur_sy.staves[r].flags & OPEN_BRACE2) for (;!(cur_sy.staves[n].flags & CLOSE_BRACE2); ) n++; else if (cur_sy.staves[r].flags & OPEN_BRACE) for (;!(cur_sy.staves[n].flags & CLOSE_BRACE); ) n++;
    for (n != r && (o -= .5 * (staff_tb[r].y - staff_tb[n].y)), n = 0; n < s.length; n++) xy_str(e, o, a = s[n], "c"), 
    o -= 18;
   }
  }
 }
 function set_staff() {
  var e, t, n, r, i, s, a, o, c, u, l, f, p, d, h = [];
  for (r = 0; r <= nstaff; r++) staff_tb[r].empty = !1, h[r] = !0;
  for (t = cur_sy, r = 0; r < t.staves.length; r++) t.staves[r].empty || (h[r] = !1);
  for (e = tsfirst; e; e = e.ts_next) if (e.new_sy) for (t = t.next, r = 0; r < t.staves.length; r++) t.staves[r].empty || (h[r] = !1);
  for (s = 0; s < voice_tb.length; s++) 1 != (p = voice_tb[s]).scale && (p.scale_str = 'transform="scale(' + p.scale.toFixed(2) + ')"');
  for (r = 0; r <= nstaff && h[r]; r++) staff_tb[r].empty = !0;
  if (a = 0, r > nstaff) r--; else for (d = staff_tb[r], n = 0; n < YSTEP; n++) a < (f = d.top[n]) && (a = f);
  if (a += draw_partempo(r, a), h[r]) return a;
  a < (o = .5 * cfmt.staffsep + staff_tb[r].topbar * staff_tb[r].staffscale) && (a = o), 
  d.y = -a, i = r;
  var m = t.staves[i];
  for (r++; r <= nstaff; r++) if (d = staff_tb[r], h[r]) d.empty = !0; else {
   if (o = m.sep ? m.sep : cfmt.sysstaffsep, u = m.maxsep ? m.maxsep : cfmt.maxsysstaffsep, 
   c = 0, d.staffscale == staff_tb[i].staffscale) {
    for (n = 0; n < YSTEP; n++) c < (f = d.top[n] - staff_tb[i].bot[n]) && (c = f);
    c *= d.staffscale;
   } else for (n = 0; n < YSTEP; n++) c < (f = d.top[n] * d.staffscale - staff_tb[i].bot[n] * staff_tb[i].staffscale) && (c = f);
   c < (o += d.topbar * d.staffscale) && (c = o), c > (u += d.topbar * d.staffscale) && (c = u), 
   a += c, d.y = -a, i = r, m = t.staves[i];
  }
  for (l = 0, n = 0; n < YSTEP; n++) l > (f = staff_tb[i].bot[n]) && (l = f);
  for (l *= staff_tb[i].staffscale, r = 0; r <= nstaff; r++) c = (d = staff_tb[r]).y, 
  1 != d.staffscale ? (d.scale_str = 'transform="translate(0,' + (posy - c).toFixed(2) + ") scale(" + d.staffscale.toFixed(2) + ')"', 
  d.y_delayed = 0) : d.y_delayed = posy - c;
  if (0 == l) {
   for (r = nstaff; r >= 0 && h[r]; r--) ;
   if (r < 0) return a;
  }
  return (c = -l) < (o = .5 * cfmt.staffsep) && (c = o), c > (u = .5 * cfmt.maxstaffsep) && (c = u), 
  (a += c) > cfmt.maxstaffsep && (a = cfmt.maxstaffsep), a;
 }
 function bar_set(e, t) {
  var n, r, i, s, a = 0;
  for (n = 0; n <= cur_sy.nstaff; n++) cur_sy.staves[n].empty ? e[n] = t[n] = 0 : (r = staff_tb[n].staffscale, 
  i = staff_tb[n].topbar * r, s = staff_tb[n].botbar * r, 0 == a && (a = staff_tb[n].y + i), 
  t[n] = a - staff_tb[n].y - s, e[n] = staff_tb[n].y + s, a = cur_sy.staves[n].flags & STOP_BAR ? 0 : e[n]);
 }
 function draw_systems(e) {
  var t, n, r, i, s, a, o, c = [], u = [], l = [];
  function f(e, t, n) {
   var r, i, s = staff_tb[e].y, a = staff_tb[e].stafflines;
   if ("." != a[a.length - 1]) {
    for (set_sscale(e), r = (n - t) / stv_g.scale, i = 0; i < a.length && "." == a[i]; i++) s += 6;
    for (xypath(t, s), output.push("h" + r.toFixed(2)), s = 0, i++; i < a.length; i++) s -= 6, 
    "." != a[i] && (output.push("m-" + r.toFixed(2) + " " + s), output.push("h" + r.toFixed(2)), 
    s = 0);
    output.push('"/>\n');
   }
  }
  for (draw_vname(e), i = 0; i <= nstaff; i++) c[i] = !cur_sy.staves[i] || cur_sy.staves[i].empty ? -1 : 0;
  for (bar_set(u, l), draw_lstaff(0), n = tsfirst; n; n = n.ts_next) {
   if (n.new_sy) {
    for (t = cur_sy.next, i = 0; i <= nstaff; i++) if ((s = c[i]) < 0) t.staves[i] && !t.staves[i].empty && (n.type == BAR ? c[i] = n.x : c[i] = n.x - n.wl - 2); else {
     if (a = n.ts_prev.type == BAR ? n.ts_prev.x : n.x - n.wl - 2, !t.staves[i] || t.staves[i].empty) c[i] = -1; else {
      if (t.staves[i].stafflines == cur_sy.staves[i].stafflines) continue;
      c[i] = a;
     }
     f(i, s, a);
    }
    cur_sy = t, u = (o = bar_set())[0], l = o[1];
   }
   switch (i = n.st, n.type) {
   case BAR:
    if ((n.second || cur_sy.staves[i].empty) && (n.invisible = !0), n.invisible) break;
    user.anno_start && anno_start(n), draw_bar(n, u[i], l[i]), user.anno_stop && anno_stop(n);
    break;

   case STBRK:
    if (0 == cur_sy.voices[n.v].range && n.xmx > 14) {
     for (var p = 0, d = 0; d < voice_tb.length; d++) cur_sy.voices[d].range > 0 && p++;
     for (r = n.ts_next; r && r.type == STBRK; r = r.ts_next) p--;
     0 == p && draw_lstaff(n.x);
    }
    if (!(r = n.prev)) break;
    if (a = r.x, r.type != BAR && (a += r.wr), (s = c[i = n.st]) >= 0) {
     if (s >= a) continue;
     f(i, s, a);
    }
    c[i] = n.x;
   }
  }
  for (i = 0; i <= nstaff; i++) (s = c[i]) < 0 || f(i, s, realwidth);
 }
 function draw_symbols(e) {
  var t, n, r, i, s, a, o = {};
  for (a = !0, t = e.sym; t; t = t.next) {
   if (t.extra) for (n = t.extra; n; n = n.next) n.type == FORMAT && "voicecolor" == n.fmt_type && (e.color = n.color, 
   set_color(e.color));
   if (!t.invisible || t.type == NOTE || t.type == REST || t.type == GRACE) switch (r = t.x, 
   t.type) {
   case NOTE:
    set_color(e.color), set_scale(t), (t.beam_st && !t.beam_end || a && !t.beam_st) && (a = !1, 
    calculate_beam(o, t) && draw_beams(o)), user.anno_start && anno_start(t), draw_note(t, !o.s2), 
    user.anno_stop && anno_stop(t), t == o.s2 && (o.s2 = null);
    break;

   case REST:
    set_color(e.color), set_scale(t), user.anno_start && anno_start(t), draw_rest(t), 
    user.anno_stop && anno_stop(t);
    break;

   case BAR:
    break;

   case CLEF:
    if (s = t.st, t.second) break;
    if (t.invisible || staff_tb[s].empty) break;
    set_color(void 0), set_sscale(s), user.anno_start && anno_start(t), i = staff_tb[s].y, 
    t.clef_name ? xygl(r, i + t.y, t.clef_name) : t.clef_small ? xygl(r, i + t.y, "s" + t.clef_type + "clef") : xygl(r, i + t.y, t.clef_type + "clef"), 
    t.clef_octave && (t.clef_octave > 0 ? (i += t.ymx - 10, t.clef_small && (i -= 1)) : (i += t.ymn + 2, 
    t.clef_small && (i += 1)), xygl(r - 2, i, "oct")), user.anno_stop && anno_stop(t);
    break;

   case METER:
    if (e.meter = t, t.second || staff_tb[t.st].empty) break;
    if (cfmt.alignbars && 0 != t.st) break;
    set_color(void 0), set_sscale(t.st), user.anno_start && anno_start(t), draw_meter(r, t), 
    user.anno_stop && anno_stop(t);
    break;

   case KEY:
    if (e.key = t, t.second || staff_tb[t.st].empty) break;
    set_color(void 0), set_sscale(t.st), user.anno_start && anno_start(t), draw_keysig(e, r, t), 
    user.anno_stop && anno_stop(t);
    break;

   case MREST:
    set_color(e.color), set_scale(t), xygl(r, staff_tb[t.st].y + 12, "mrest"), output.push('<text style="font:bold 15px serif"\n\tx ="'), 
    out_sxsy(r, '" y="', staff_tb[t.st].y + 28), output.push('" text-anchor="middle">' + t.nmes + "</text>\n");
    break;

   case GRACE:
    set_color(e.color), set_scale(t), draw_gracenotes(t);
    break;

   case SPACE:
   case STBRK:
   case FORMAT:
    break;

   case CUSTOS:
    set_color(e.color), set_scale(t), t.stemless = !0, draw_note(t, 0);
    break;

   default:
    error(2, t, "draw_symbols - Cannot draw symbol " + t.type);
   }
  }
  set_color(e.color), set_scale(e.sym), draw_all_ties(e), set_color(void 0);
 }
 function draw_all_sym() {
  var e, t, n, r = voice_tb.length;
  for (n = 0; n < r; n++) (e = voice_tb[n]).sym && draw_symbols(e);
  for (t = tsfirst; t; t = t.ts_next) t.type == CLEF && (staff_tb[t.st].clef = t);
 }
 function set_tie_dir(e) {
  var t, n, r, i, s, a, o;
  for (t = e; t; t = t.next) if (t.ti1) if (0 == t.multi) {
   for (s = r = 0, a = 128, n = 0; n <= t.nhd; n++) t.notes[n].ti1 && (r++, a < 128 && t.notes[n].pit <= a + 1 && s++, 
   a = t.notes[n].pit);
   if (r <= 1) {
    for (i = t.stem < 0 ? SL_ABOVE : SL_BELOW, n = 0; n <= t.nhd; n++) if (o = t.notes[n].ti1) {
     (7 & o) == SL_AUTO && (t.notes[n].ti1 = o & SL_DOTTED | i);
     break;
    }
   } else if (0 != s) {
    for (a = 128, n = 0; n <= t.nhd; n++) if (t.notes[n].ti1) {
     if (a < 128 && t.notes[n].pit <= a + 1) {
      r = n;
      break;
     }
     a = t.notes[n].pit;
    }
    for (i = SL_BELOW, n = 0; n <= t.nhd; n++) 0 != (o = t.notes[n].ti1) && (r == n && (i = SL_ABOVE), 
    (7 & o) == SL_AUTO && (t.notes[n].ti1 = o & SL_DOTTED | i));
   } else {
    if (1 & r) {
     for (r = (r - 1) / 2, i = SL_BELOW, n = 0; n <= t.nhd; n++) 0 != (o = t.notes[n].ti1) && (0 == r && t.notes[n].pit >= 22 && (i = SL_ABOVE), 
     (7 & o) == SL_AUTO && (t.notes[n].ti1 = o & SL_DOTTED | i), 0 == r-- && (i = SL_ABOVE));
     continue;
    }
    for (r /= 2, i = SL_BELOW, n = 0; n <= t.nhd; n++) 0 != (o = t.notes[n].ti1) && ((7 & o) == SL_AUTO && (t.notes[n].ti1 = o & SL_DOTTED | i), 
    0 == --r && (i = SL_ABOVE));
   }
  } else for (i = t.multi > 0 ? SL_ABOVE : SL_BELOW, n = 0; n <= t.nhd; n++) (7 & (o = t.notes[n].ti1)) == SL_AUTO && (t.notes[n].ti1 = o & SL_DOTTED | i);
 }
 function set_tie_room() {
  var e, t, n, r, i, s;
  for (n = 0; n < voice_tb.length; n++) if ((e = voice_tb[n].sym) && (e = e.next)) for (set_tie_dir(e); e; e = e.next) if (e.ti1) {
   if (e.notes[0].pit < 20 && (7 & e.notes[0].ti1) == SL_BELOW) ; else if (!(e.notes[e.nhd].pit > 24 && (7 & e.notes[e.nhd].ti1) == SL_ABOVE)) continue;
   for (t = e.next; t && t.type != NOTE; ) t = t.next;
   if (t) {
    if (t.st != e.st) continue;
    r = t.x - e.x - 10;
   } else r = realwidth - e.x - 10;
   s = r < 100 ? 9 : r < 300 ? 12 : 16, e.notes[e.nhd].pit > 24 && (i = 3 * (e.notes[e.nhd].pit - 18) + s, 
   e.ymx < i && (e.ymx = i), t && t.ymx < i && (t.ymx = i), y_set(e.st, !0, e.x + 5, r, i)), 
   e.notes[0].pit < 20 && (i = 3 * (e.notes[0].pit - 18) - s, e.ymn > i && (e.ymn = i), 
   t && t.ymn > i && (t.ymn = i), y_set(e.st, !1, e.x + 5, r, i));
  }
 }
 var defined_font = {}, font_tb = {}, fid = 1, font_scale_tb = {
  serif: 1.05,
  serifBold: 1.05,
  "sans-serif": 1.1,
  "sans-serifBold": 1.15,
  Palatino: 1.1,
  Mono: 1.35
 }, lock = {}, cfmt = {
  aligncomposer: 1,
  breaklimit: .7,
  breakoneoln: !0,
  composerspace: 6,
  dblrepbar: ":][:",
  decoerr: !0,
  dynalign: !0,
  fullsvg: "",
  gracespace: [ 6.5, 8, 12 ],
  graceslurs: !0,
  hyphencont: !0,
  indent: 0,
  infoname: 'R "Rhythm: "\nB "Book: "\nS "Source: "\nD "Discography: "\nN "Notes: "\nZ "Transcription: "\nH "History: "',
  infospace: 0,
  keywarn: !0,
  leftmargin: .7 * IN,
  lineskipfac: 1.1,
  linewarn: !0,
  maxshrink: .65,
  maxstaffsep: 2e3,
  maxsysstaffsep: 2e3,
  measurefirst: 1,
  measurenb: -1,
  musicspace: 6,
  parskipfac: .4,
  partsspace: 8,
  pagewidth: 21 * CM,
  pos: {
   dyn: 0,
   gch: 0,
   gst: 0,
   orn: 0,
   ste: 0,
   voc: 0,
   vol: 0
  },
  rightmargin: .7 * IN,
  rbmax: 4,
  rbmin: 2,
  scale: 1,
  slurheight: 1,
  staffnonote: 1,
  staffsep: 46,
  stemheight: 21,
  stretchlast: .25,
  stretchstaff: !0,
  subtitlespace: 3,
  sysstaffsep: 34,
  textspace: 14,
  titlespace: 6,
  titletrim: !0,
  transpose: 0,
  topspace: 22,
  tuplets: [ 0, 0, 0 ],
  vocalspace: 23,
  voicecombine: 0,
  voicescale: 1,
  writefields: "CMOPQTWw",
  wordsspace: 5
 };
 function get_bool(e) {
  return !e.match(/^(0|n|f)/i);
 }
 function get_int(e) {
  var t = parseInt(e);
  return isNaN(t) && (parse.line.error("Bad integer value\n"), t = 1), t;
 }
 function get_font_scale(e) {
  var t = e.split(/\s+/);
  if (!(t.length <= 1)) {
   var n = parseFloat(t[t.length - 1]);
   if (isNaN(n) || t <= 0) parse.line.error("Bad scale value in %%font"); else for (var r in font_scale_tb[t[0]] = n, 
   font_tb) {
    var i = font_tb[r];
    i.name == t[0] && (i.swfac = i.size * n);
   }
  }
 }
 function param_set_font(e, t) {
  var n, r, i, s, a, o, c, u, l;
  if ("-" == e[e.length - 2]) {
   if ((s = e[e.length - 1]) < "1" || s > "9") return;
   e = "u" + s + "font";
  }
  (r = cfmt[e]) && (n = font_tb[r]) && (i = n.name + "." + n.size), o = "*" == (o = (a = t.split(/\s+/))[0]) && n ? n.name : (o = (o = (o = o.replace("Times-Roman", "serif")).replace("Times", "serif")).replace("Helvetica", "sans-serif")).replace("Courier", "monospace"), 
  a.length > 1 ? "*" == (u = a[a.length - 1]) && (u = n.size) : u = n.size, (c = o + "." + u) != i && ((n = font_tb[c]) || ((l = font_scale_tb[o]) || (l = 1.1), 
  n = {
   name: o,
   size: Number(u),
   swfac: u * l
  }, font_tb[c] = n), cfmt[e] = c);
 }
 function get_unit(e) {
  var t = parseFloat(e);
  switch (e.slice(-2)) {
  case "CM":
  case "cm":
   t *= 28.35;
   break;

  case "IN":
  case "in":
   t *= 72;
  }
  return t;
 }
 function get_unitp(e) {
  var t = parseFloat(e);
  switch (e.slice(-2)) {
  case "CM":
  case "cm":
   t *= CM;
   break;

  case "IN":
  case "in":
   t *= IN;
  }
  return t;
 }
 function set_infoname(e) {
  for (var t = cfmt.infoname.split("\n"), n = e[0], r = 0; r < t.length; r++) {
   if (t[r][0] == n) return 1 == e.length ? t.splice(r, 1) : t[r] = e, void (cfmt.infoname = t.join("\n"));
  }
  cfmt.infoname += "\n" + e;
 }
 const textopt = {
  align: "j",
  center: "c",
  fill: "f",
  justify: "j",
  ragged: "f",
  right: "r",
  skip: "s"
 };
 function get_textopt(e) {
  return textopt[e];
 }
 const posval = {
  above: SL_ABOVE,
  below: SL_BELOW,
  down: SL_BELOW,
  hidden: SL_HIDDEN,
  opposite: SL_HIDDEN,
  up: SL_ABOVE
 };
 function set_pos(e, t) {
  var n, r;
  switch (r = t[0] >= "0" && t[0] <= "3" ? parseInt(t) : posval[t] || 0, e[0]) {
  case "d":
   e = "dyn";
   break;

  case "g":
   e = "c" == e[1] ? "gch" : "gst";
   break;

  case "o":
   e = "orn";
   break;

  case "s":
   e = "ste";
   break;

  case "v":
   e = "c" == e[2] ? "voc" : "vol";
   break;

  default:
   return;
  }
  if ((curvoice ? curvoice.pos : cfmt.pos)[e] = r, !curvoice) for (n = 0; n < voice_tb.length; n++) voice_tb[n].pos[e] = r;
 }
 function set_writefields(e) {
  var t, n, r = e.split(/\s+/);
  if (get_bool(r[1])) for (n = 0; n < r[0].length; n++) t = r[0][n], cfmt.writefields.indexOf(t) < 0 && (cfmt.writefields += t); else for (n = 0; n < r[0].length; n++) t = r[0][n], 
  cfmt.writefields.indexOf(t) >= 0 && (cfmt.writefields = cfmt.writefields.replace(t, ""));
 }
 function set_format(e, t, n) {
  var r, s, a, o;
  function c(e, t) {
   curvoice ? curvoice[e] = t : 0 != parse.state ? (parse.voice_param || (parse.voice_param = {}), 
   parse.voice_param[e] = t) : cfmt["voice" + e] = t;
  }
  if (n) n[e] = !0; else if (n[e]) return;
  if (e.match(/.+font$/) || e.match(/.+font-[\d]$/)) {
   if (" box" == t.slice(-4) && (o = !0, t = t.slice(0, -4)), param_set_font(e, t), 
   o) switch (e) {
   case "gchordfont":
    cfmt.gchordbox = o;
    break;

   case "measurefont":
    cfmt.measurebox = o;
    break;

   case "partsfont":
    cfmt.partsbox = o;
   }
  } else switch (e) {
  case "aligncomposer":
  case "barsperstaff":
  case "infoline":
  case "measurefirst":
  case "measurenb":
  case "rbmax":
  case "rbmin":
  case "shiftunison":
  case "staffnonote":
   cfmt[e] = get_int(t);
   break;

  case "microscale":
   if ((r = get_int(t)) < 4 || r > 256 || r % 1) {
    parse.line.error("Bad value for " + e);
    break;
   }
   if (cfmt.microscale = r, 0 == parse.state) break;
   if (1 == parse.state) for (a = 0; a < voice_tb.length; a++) voice_tb[a].microscale = cfmt.microscale; else 2 == parse.state && goto_tune(), 
   curvoice.microscale = cfmt.microscale;
   break;

  case "bgcolor":
  case "dblrepbar":
  case "titleformat":
   cfmt[e] = t;
   break;

  case "breaklimit":
  case "lineskipfac":
  case "maxshrink":
  case "pagescale":
  case "parskipfac":
  case "scale":
  case "slurheight":
  case "stemheight":
  case "stretchlast":
   if (!(r = parseFloat(t))) {
    parse.line.error("Bad value for " + e);
    break;
   }
   "scale" == e ? r /= .75 : "pagescale" == e && (e = "scale"), cfmt[e] = r;
   break;

  case "bstemdown":
  case "breakoneoln":
  case "cancelkey":
  case "custos":
  case "decoerr":
  case "dynalign":
  case "flatbeams":
  case "gchordbox":
  case "graceslurs":
  case "hyphencont":
  case "keywarn":
  case "linewarn":
  case "measurebox":
  case "partsbox":
  case "singleline":
  case "squarebreve":
  case "straightflags":
  case "stretchstaff":
  case "timewarn":
  case "titlecaps":
  case "titleleft":
  case "titletrim":
   cfmt[e] = get_bool(t);
   break;

  case "composerspace":
  case "indent":
  case "infospace":
  case "maxstaffsep":
  case "maxsysstaffsep":
  case "musicspace":
  case "partsspace":
  case "staffsep":
  case "subtitlespace":
  case "sysstaffsep":
  case "textspace":
  case "titlespace":
  case "topspace":
  case "vocalspace":
  case "wordsspace":
   cfmt[e] = get_unit(t);
   break;

  case "leftmargin":
  case "pagewidth":
  case "rightmargin":
   cfmt[e] = get_unitp(t);
   break;

  case "contbarnb":
   cfmt.contbarnb = get_int(t);
   break;

  case "writefields":
   set_writefields(t);
   break;

  case "dynamic":
  case "gchord":
  case "gstemdir":
  case "ornament":
  case "stemdir":
  case "vocal":
  case "volume":
   set_pos(e, t);
   break;

  case "font":
   get_font_scale(t);
   break;

  case "fullsvg":
   if (0 != parse.state) {
    parse.line.error("Cannot have 'fullsvg' inside a tune");
    break;
   }
   cfmt[e] = t;
   break;

  case "gracespace":
  case "tuplets":
   cfmt[e] = t.split(/\s+/);
   break;

  case "infoname":
   set_infoname(t);
   break;

  case "notespacingfactor":
   if (!(r = parseFloat(t)) || r < 1 || r > 2) {
    parse.line.error("Bad value for notespacingfactor");
    break;
   }
   for (i = 5, s = space_tb[i]; --i >= 0; ) s /= r, space_tb[i] = s;
   for (i = 5, s = space_tb[i]; ++i < space_tb.length; ) s *= r, space_tb[i] = s;
   break;

  case "pos":
   set_pos(e = (e = t.match(/(\w|-)+/))[0], t = t.replace(e, "").trim());
   break;

  case "staffwidth":
   (a = cfmt.pagewidth - get_unitp(t) - cfmt.leftmargin) < 0 ? parse.line.error("'staffwidth' too big") : cfmt.rightmargin = a;
   break;

  case "textoption":
   cfmt[e] = get_textopt(t);
   break;

  case "combinevoices":
  case "voicecombine":
   if (a = parseInt(t), isNaN(a) || a < -1 || a > 2) return void parse.line.error("Bad value in %%voicecombine");
   if (curvoice && "combinevoices" == e) for (r = 0; r < voice_tb.length; r++) voice_tb[r].combine = a;
   c("combine", a);
   break;

  case "voicemap":
   c("map", t);
   break;

  case "voicescale":
   if (a = parseFloat(t), isNaN(a) || a < .6 || a > 1.5) return void parse.line.error("Bad %%voicescale value");
   c("scale", a);
  }
 }
 function font_init() {
  param_set_font("annotationfont", "sans-serif 12"), param_set_font("composerfont", "serifItalic 14"), 
  param_set_font("gchordfont", "sans-serif 12"), param_set_font("historyfont", "serif 16"), 
  param_set_font("infofont", "serifItalic 14"), param_set_font("measurefont", "serifItalic 14"), 
  param_set_font("partsfont", "serif 15"), param_set_font("repeatfont", "serif 13"), 
  param_set_font("subtitlefont", "serif 16"), param_set_font("tempofont", "serifBold 15"), 
  param_set_font("textfont", "serif 16"), param_set_font("titlefont", "serif 20"), 
  param_set_font("vocalfont", "serifBold 13"), param_set_font("voicefont", "serifBold 13"), 
  param_set_font("wordsfont", "serif 16");
 }
 function style_add_font(e) {
  var t = e.name, n = t.indexOf("Italic"), r = 100, i = t.indexOf("Oblique"), s = t.indexOf("Bold");
  font_style += "\n.f" + e.fid + cfmt.fullsvg + " {font:", s > 0 && (font_style += "bold ", 
  r = s), (n > 0 || i > 0) && (n > 0 && (font_style += "italic ", n < r && (r = n)), 
  i > 0 && (font_style += "oblique ", i < r && (r = i))), 100 != r && ("-" == t[r - 1] && r--, 
  t = t.slice(0, r)), font_style += e.size + "px " + t + "}";
 }
 function use_font(e) {
  defined_font[e.fid] || (defined_font[e.fid] = !0, style_add_font(e));
 }
 function get_font(e) {
  var t = cfmt[e += "font"], n = font_tb[t];
  return n ? (n.fid || (n.fid = fid++), use_font(n), n) : (parse.line.error("Unknown font " + e), 
  null);
 }
 var abc_utf = {
  "`A": "Ã€",
  "`E": "Ãˆ",
  "`I": "ÃŒ",
  "`O": "Ã’",
  "`U": "Ã™",
  "`a": "Ã ",
  "`e": "Ã¨",
  "`i": "Ã¬",
  "`o": "Ã²",
  "`u": "Ã¹",
  "'A": "Ã",
  "'E": "Ã‰",
  "'I": "Ã",
  "'O": "Ã“",
  "'U": "Ãš",
  "'Y": "Ã",
  "'a": "Ã¡",
  "'e": "Ã©",
  "'i": "Ã­",
  "'o": "Ã³",
  "'u": "Ãº",
  "'y": "Ã½",
  "'S": "Åš",
  "'Z": "Å¹",
  "'s": "Å›",
  "'z": "Åº",
  "'R": "Å”",
  "'L": "Ä¹",
  "'C": "Ä†",
  "'N": "Åƒ",
  "'r": "Å•",
  "'l": "Äº",
  "'c": "Ä‡",
  "'n": "Å„",
  "^A": "Ã‚",
  "^E": "ÃŠ",
  "^I": "ÃŽ",
  "^O": "Ã”",
  "^U": "Ã›",
  "^a": "Ã¢",
  "^e": "Ãª",
  "^i": "Ã®",
  "^o": "Ã´",
  "^u": "Ã»",
  "^H": "Ä¤",
  "^J": "Ä´",
  "^h": "Ä¥",
  "^j": "Äµ",
  "^C": "Äˆ",
  "^G": "Äœ",
  "^S": "Åœ",
  "^c": "Ä‰",
  "^g": "Ä",
  "^s": "Å",
  ",C": "Ã‡",
  ",c": "Ã§",
  ",S": "Åž",
  ",s": "ÅŸ",
  ",T": "Å¢",
  ",t": "Å£",
  ",R": "Å–",
  ",L": "Ä»",
  ",G": "Ä¢",
  ",r": "Å—",
  ",l": "Ä¼",
  ",g": "Ä£",
  ",N": "Å…",
  ",K": "Ä¶",
  ",n": "Å†",
  ",k": "Ä·",
  '"A': "Ã„",
  '"E': "Ã‹",
  '"I': "Ã",
  '"O': "Ã–",
  '"U': "Ãœ",
  '"Y': "Å¸",
  '"a': "Ã¤",
  '"e': "Ã«",
  '"i': "Ã¯",
  '"o': "Ã¶",
  '"u': "Ã¼",
  '"y': "Ã¿",
  "~A": "Ãƒ",
  "~N": "Ã‘",
  "~O": "Ã•",
  "~a": "Ã£",
  "~n": "Ã±",
  "~o": "Ãµ",
  "~I": "Ä¨",
  "~i": "Ä©",
  "~U": "Å¨",
  "~u": "Å©",
  oA: "Ã…",
  oa: "Ã¥",
  oU: "Å®",
  ou: "Å¯",
  "=A": "Ä€",
  "=D": "Ä",
  "=E": "Ä’",
  "=H": "Ä¦",
  "=I": "Äª",
  "=O": "ÅŒ",
  "=T": "Å¦",
  "=U": "Åª",
  "=a": "Ä",
  "=d": "Ä‘",
  "=e": "Ä“",
  "=h": "Ä§",
  "=i": "Ä«",
  "=o": "Å",
  "=t": "Å§",
  "=u": "Å«",
  "/O": "Ã˜",
  "/o": "Ã¸",
  "/D": "Ä",
  "/d": "Ä‘",
  "/L": "Å",
  "/l": "Å‚",
  ";A": "Ä„",
  ";E": "Ä˜",
  ";I": "Ä®",
  ";U": "Å²",
  ";a": "Ä…",
  ";e": "Ä™",
  ";i": "Ä¯",
  ";u": "Å³",
  vL: "Ä½",
  vS: "Å ",
  vT: "Å¤",
  vZ: "Å½",
  vl: "Ä¾",
  vs: "Å¡",
  vt: "Å¥",
  vz: "Å¾",
  vC: "ÄŒ",
  vE: "Äš",
  vD: "ÄŽ",
  vN: "Å‡",
  vR: "Å˜",
  vc: "Ä",
  ve: "Ä›",
  vd: "Ä",
  vn: "Åˆ",
  vr: "Å™",
  uA: "Ä‚",
  ua: "Äƒ",
  uE: "Ä”",
  ue: "Ä•",
  uG: "Äž",
  ug: "ÄŸ",
  uI: "Ä¬",
  ui: "Ä­",
  uO: "ÅŽ",
  uo: "Å",
  uU: "Å¬",
  uu: "Å­",
  ":O": "Å",
  ":U": "Å°",
  ":o": "Å‘",
  ":u": "Å±",
  ".Z": "Å»",
  ".z": "Å¼",
  ".I": "Ä°",
  ".i": "Ä±",
  ".C": "ÄŠ",
  ".c": "Ä‹",
  ".G": "Ä ",
  ".g": "Ä¡",
  ".E": "Ä–",
  ".e": "Ä—",
  AA: "Ã…",
  aa: "Ã¥",
  AE: "Ã†",
  ae: "Ã¦",
  cc: "Ã§",
  cC: "Ã‡",
  DH: "Ã",
  dh: "Ã°",
  ng: "Å‹",
  OE: "Å’",
  oe: "Å“",
  ss: "ÃŸ",
  TH: "Ãž",
  th: "Ã¾"
 };
 function cnv_escape(e) {
  for (var t, n, r, i, s = "", a = 0; !((r = e.indexOf("\\", a)) < 0); ) {
   if (s += e.slice(a, r), void 0 == (t = e[++r])) return s + "\\";
   switch (t) {
   case "0":
   case "2":
    if ("0" == e[r + 1]) switch (e[r + 2]) {
    case "1":
     s += "â™¯", a = r + 3;
     continue;

    case "2":
     s += "â™­", a = r + 3;
     continue;

    case "3":
     s += "â™®", a = r + 3;
     continue;

    case "4":
     i = [ 55348, 56618 ], s += String.fromCharCode.apply(null, i), a = r + 3;
     continue;

    case "5":
     i = [ 55348, 56619 ], s += String.fromCharCode.apply(null, i), a = r + 3;
     continue;
    }

   case "1":
   case "3":
    if (e[r + 1] >= "0" && e[r + 1] <= "7" && e[r + 2] >= "0" && e[r + 2] <= "7") {
     a = parseInt(e.slice(r, r + 3), 8), s += String.fromCharCode(a), a = r + 3;
     continue;
    }
    break;

   case "u":
    i = [], a = parseInt(e.slice(r + 1, r + 5), 16), i.push(a), a >= 55296 && a <= 57343 ? (a = parseInt(e.slice(r + 7, r + 11), 16), 
    i.push(a), a = r + 11) : a = r + 5, s += String.fromCharCode.apply(null, i);
    continue;

   default:
    if (n = abc_utf[e.slice(r, r + 2)]) {
     s += n, a = r + 2;
     continue;
    }
   }
   s += "\\" + t, a = r + 1;
  }
  return s + e.slice(a);
 }
 var include = 2, gene, staff_tb, tsnext, realwidth, insert_meter, beta_last;
 function do_include(e) {
  var t, n;
  user.read_file ? include <= 0 ? syntax(1, "Too many include levels") : (include--, 
  (t = user.read_file(e)) ? (n = clone(parse), tosvg(e, t), parse = n, include++) : error(1, void 0, "Cannot read file '" + e + "'")) : syntax(1, "No read_file support");
 }
 function tosvg(e, t) {
  var n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g, y, _, b, x, w, k, E = "\n", C = t.length;
  function T() {
   for (a = i; a < s && (" " == (r = t[a]) || "\t" == r); ) a++;
  }
  function S() {
   for (o = s - 1; o > i && (" " == (r = t[o]) || "\t" == r); ) o--;
   o++;
  }
  function O() {
   var e = t.indexOf("K:", i);
   return !(e < 0) && (e = t.indexOf("\n", e), !!parse.select.test(t.slice(i, e)) || ((s = t.indexOf("\n\n", e)) < 0 ? s = C - 1 : s++, 
   !1));
  }
  function A(e, t) {
   var n, r, i;
   for (t && e.indexOf("\\") >= 0 && (e = cnv_escape(e)), i = e.length, n = 0; n < i; n++) {
    switch (e[n]) {
    case "\\":
     n++;
     continue;

    case "%":
     return e.slice(0, n).replace(/\s+$/, "");

    case '"':
     break;

    default:
     continue;
    }
    for (r = n + 1; !((r = e.indexOf('"', r)) < 0) && "\\" == e[r - 1]; ) ;
    if (r < 0) break;
    n = r;
   }
   return (e = e.replace(/\s+$/, "")).replace(/\\%/g, "%");
  }
  function N() {
   gen_ly(!1), put_history(), blk_out(), blk_flush(), parse.state = 0, posx = (cfmt = y).leftmargin / cfmt.scale, 
   info = _, char_tb = b, glovar = x, maps = w, init_tune();
  }
  for (parse.file = t, parse.ctx = {
   fname: e
  }, line = new scanBuf(), parse.line = line, line.buffer = t, line.index = 0, i = 0, 
  i = 0; !(i >= C); i = s + 1) if ((s = t.indexOf("\n", i)) < 0 && (s = C), s != i) {
   if (parse.istart = parse.bol = i, parse.iend = parse.eol = s, f = t[i], p = t[i + 1], 
   "%" == f) {
    if (parse.prefix.indexOf(p) < 0) continue;
    "a" == t[i + 2] && "b" == t[i + 3] && "c" == t[i + 4] && " " == t[i + 5] ? (f = t[i += 6], 
    p = t[i + 1]) : k = !0;
   } else "I" == f && ":" == p && (k = !0);
   if (k) {
    if (k = !1, i += 2, T(), S(), !(m = t.slice(a, o)) || "%" == m[0]) continue;
    switch ((v = m.split(/\s+/, 2))[0] || v.shift(), v[0]) {
    case "abcm2ps":
     parse.prefix = v[1];
     continue;

    case "abc-include":
     if (!(u = v[1].match(/.*\.(.*)/))) continue;
     switch (u[1]) {
     case "abc":
      do_include(v[1]);
     }
     continue;
    }
    if (g = v[0].match(/begin(.*)/)) {
     if (c = "\n" + f + p + "end" + g[1], (n = t.indexOf(c, s)) < 0) {
      syntax(1, "No " + c.slice(1) + " after %%" + g[0]), s = C;
      continue;
     }
     do_begin_end(g[1], v[1], parse.file.slice(s + 1, n).replace(new RegExp("^" + f + p, "gm"), "")), 
     (s = t.indexOf("\n", n + 6)) < 0 && (s = C);
     continue;
    }
    switch (v[0]) {
    case "select":
     if (0 != parse.state) {
      syntax(1, "%%select ignored");
      continue;
     }
     '"' == (l = A(m.slice(7).trim(), !1))[0] && (l = l.slice(1, -1)), l = (l = l.replace(/\(/g, "\\(")).replace(/\)/g, "\\)"), 
     parse.select = new RegExp(l, "m");
     continue;

    case "tune":
     syntax(1, "%%tune not treated yet");
     continue;

    case "voice":
     if (0 != parse.state) {
      syntax(1, "%%voice ignored");
      continue;
     }
     if (!(l = A(m.slice(6).trim(), !1))) {
      parse.cur_tune_opts ? parse.cur_tune_opts.voice_opts = null : parse.voice_opts = null;
      continue;
     }
     if ("end" == l) continue;
     for (parse.cur_tune_opts ? (parse.cur_tune_opts.voice_opts || (parse.cur_tune_opts.voice_opts = {}), 
     h = parse.cur_tune_opts.voice_opts) : (parse.voice_opts || (parse.voice_opts = {}), 
     h = parse.voice_opts), h[l] = []; i = ++s, "%" == t[i]; ) if (s = t.indexOf("\n", s), 
     t[i + 1] == p) {
      switch (i += 2, (v = (m = s < 0 ? t.slice(i) : t.slice(i, s)).split(/\s+/, 1))[0]) {
      default:
       h[l].push(A(m.trim(), !0));
       continue;

      case "score":
      case "staves":
      case "tune":
      case "voice":
       i -= 2;
      }
      break;
     }
     s = i - 1;
     continue;
    }
    do_pscom(A(m.trim(), !0));
   } else if (":" == p) {
    if (m = A((m = t.slice(i + 2, s)).trim(), !0), "+" == f && ":" == p) {
     if (!d) {
      syntax(1, "No previous info field");
      continue;
     }
     E = " ", f = d;
    }
    switch (f) {
    case "X":
     if (0 != parse.state) {
      syntax(1, "X: found in tune - ignored");
      continue;
     }
     if (parse.select && !O()) continue;
     y = clone(cfmt), cfmt.pos = clone(cfmt.pos), _ = clone(info), b = clone(char_tb), 
     x = clone(glovar), w = maps, info.X = m, parse.state = 1;
     continue;

    case "T":
     if (0 == parse.state) continue;
     if (!(curvoice = voice_tb[0])) {
      void 0 == info.T ? info.T = m : info.T += "\n" + m;
      continue;
     }
     sym_link({
      type: BLOCK,
      subtype: "title",
      text: m
     });
     continue;

    case "K":
     if (0 == parse.state) continue;
     if (1 == parse.state ? info.K = m : 2 == parse.state && goto_tune(), parse.line.buffer = m, 
     parse.line.index = 0, do_info(f, m), 1 != parse.state) continue;
     parse.state = 2, glovar.ulen || (glovar.ulen = BASE_LEN / 8);
     continue;

    case "W":
     if (0 == parse.state || cfmt.writefields.indexOf("W") < 0) break;
     info.W ? info.W += E + m : info.W = m;
     break;

    case "s":
     if (3 != parse.state) break;
     break;

    case "w":
     if (3 != parse.state || cfmt.writefields.indexOf("w") < 0) break;
     if (get_lyrics(m, " " == E), "\\" == m[m.length - 1]) {
      E = " ", d = f;
      continue;
     }
     break;

    case "|":
     if (3 != parse.state) {
      if (2 != parse.state) continue;
      goto_tune();
     }
     parse_music_line();
     continue;

    default:
     if ("ABCDFGHOSZ".indexOf(f) >= 0) {
      if (parse.state >= 2) {
       syntax(1, f + ": in tune - ignored");
       continue;
      }
      info[f] ? info[f] += E + m : info[f] = m;
      break;
     }
     parse.line.buffer = m, parse.line.index = 0, do_info(f, m);
     continue;
    }
    E = "\n", d = f;
   } else {
    if (d = void 0, 3 != parse.state) {
     if (2 != parse.state) continue;
     goto_tune();
    }
    parse_music_line();
   }
  } else 1 == parse.state ? (parse.istart = i, syntax(1, "Empty line in tune header - ignored")) : parse.state >= 2 && N();
  parse.state >= 2 && N(), blk_flush(), parse.state = 0;
 }
 Abc.prototype.tosvg = tosvg;
 var space_tb = [ 7, 10, 14.15, 20, 28.3, 40, 56.6, 80, 113, 150 ], smallest_duration;
 const dx_tb = {
  full: 9,
  empty: 10,
  oval: 12,
  square: 15.3
 };
 function set_head_shift(e) {
  var t, n, r, i, s, a, o = dx_tb[e.head], c = e.stem, u = e.nhd;
  if (e.dur >= 2 * BASE_LEN && "oval" == e.head && (o = 15.8), 0 != u) {
   a = .78 * o, e.grace && (a *= .5), c >= 0 ? (n = 1, r = u + 1, s = e.notes[0].pit) : (a = -a, 
   n = u - 1, r = -1, s = e.notes[u].pit);
   var l = !1, f = 0;
   for (t = n; t != r; t += c) {
    if (i = e.notes[t].pit - s, s = e.notes[t].pit, 0 == i) {
     if (l) {
      var p = e.notes[t].shhd = e.notes[t - c].shhd + a;
      f < p && (f = p);
      continue;
     }
     if (t + c != r && s + c == e.notes[t + c].pit) {
      e.notes[t].shhd = -a, f < -a && (f = -a);
      continue;
     }
    }
    i < 0 && (i = -i), i > 3 || i >= 2 && "square" != e.head ? l = !1 : (l = !l) && (e.notes[t].shhd = a, 
    f < a && (f = a));
   }
   e.xmx = f;
  } else e.notes[0].acc && (e.grace && (o *= .7), e.notes[0].shac = o);
 }
 function set_acc_shft() {
  var e, t, n, r, i, s, a;
  function o(e, t) {
   var n, r, i, s, a, o, c, u = e.length;
   for (n = u - 1; --n >= 0; ) if ((i = e[n].shhd) && !(i > 0)) for (i = t - i, a = e[n].pit, 
   r = u; --r >= 0; ) if (e[r].acc) {
    if ((o = e[r].pit) < a - 3) break;
    o > a + 3 || e[r].shac < i && (e[r].shac = i);
   }
   for (n = u; --n >= 0; ) if (c = e[n].acc) {
    for ((i = e[n].shac) || (i = (i = e[n].shhd) < 0 ? t - i : t), a = e[n].pit, r = u; --r > n; ) e[r].acc && ((o = e[r].pit) >= a + 4 && (o > a + 4 || c < 0 || e[r].acc < 0) || i > e[r].shac - 6 && (s = e[r].shac + 7) > i && (i = s));
    e[n].shac = i;
   }
  }
  for (e = tsfirst; e; ) if (e.type != NOTE || e.invisible) e = e.ts_next; else {
   for (i = e.st, s = e.time, r = !1, t = e; t && (t.time == s && t.type == NOTE && t.st == i); t = t.ts_next) if (!r) for (n = 0; n <= t.nhd; n++) if (t.notes[n].acc) {
    r = !0;
    break;
   }
   if (r) {
    for (a = dx_tb[e.head], e.dur >= 2 * BASE_LEN && "oval" == e.head && (a = 15.8), 
    i = {
     notes: []
    }; e != t; e = e.ts_next) i.notes = i.notes.concat(e.notes);
    sort_pitch(i), o(i.notes, a);
   } else e = t;
  }
 }
 function unlksym(e) {
  if (e.next) {
   if (e.next.prev = e.prev, e.extra) {
    var t = e.next.extra;
    if (t) {
     for (;t.next; t = t.next) ;
     t.next = e.extra;
    } else e.next.extra = e.extra;
   }
  } else if (e.extra) return e.type = FORMAT, void (e.fmt_type = void 0);
  e.prev ? e.prev.next = e.next : voice_tb[e.v].sym = e.next, e.ts_next && (e.seqst && !e.ts_next.seqst && (e.ts_next.seqst = !0, 
  e.ts_next.shrink = e.shrink, e.ts_next.space = e.space), e.new_sy && (e.ts_next.new_sy = !0), 
  e.ts_next.ts_prev = e.ts_prev), e.ts_prev && (e.ts_prev.ts_next = e.ts_next), tsfirst == e && (tsfirst = e.ts_next), 
  tsnext == e && (tsnext = e.ts_next);
 }
 function may_combine(e) {
  var t, n = e.ts_next;
  return !(!n || n.type != NOTE && n.type != REST) && (n.v != e.v && n.st == e.st && n.time == e.time && n.dur == e.dur && (!(e.combine <= 0 && n.type != e.type) && ((!e.a_gch || !n.a_gch) && (e.type == REST ? !(e.type == n.type && e.invisible && !n.invisible) : !(n.a_ly || n.sl1 || n.sl2 || n.slur_start || n.slur_end) && (n.beam_st == e.beam_st && n.beam_end == e.beam_end && (t = n.nhd, 
  !(e.combine <= 1 && e.notes[0].pit <= n.notes[t].pit + 1)))))));
 }
 function combine_notes(e, t) {
  var n, r, i;
  if (e.notes = e.notes.concat(t.notes), e.nhd = n = e.notes.length - 1, sort_pitch(e), 
  e.combine >= 3) {
   for (i = n; i > 0; i--) e.notes[i].pit == e.notes[i - 1].pit && e.notes[i].acc == e.notes[i - 1].acc && e.notes.splice(i, 1);
   e.nhd = n = e.notes.length - 1;
  }
  e.ymx = 3 * (e.notes[n].pit - 18) + 4, e.ymn = 3 * (e.notes[0].pit - 18) - 4, e.yav = (e.ymx + e.ymn) / 2, 
  e.a_dd ? t.a_dd && (e.a_dd = e.a_dd.concat(t.a_dd)) : e.a_dd = t.a_dd, (15 & (r = e.notes[0].ti1)) == SL_AUTO && (e.notes[0].ti1 = SL_BELOW | r & ~SL_DOTTED), 
  (15 & (r = e.notes[n].ti1)) == SL_AUTO && (e.notes[n].ti1 = SL_ABOVE | r & ~SL_DOTTED);
 }
 function do_combine(e) {
  for (var t; e.nhd, (t = e.ts_next).nhd, delete t.extra, e.type != t.type ? t.type != REST && (e = (t = e).ts_next) : e.type == REST ? e.invisible && !t.invisible && delete e.invisible : combine_notes(e, t), 
  t.text && !e.text && (e.text = t.text, e.a_gch = t.a_gch), unlksym(t), !e.in_tuplet && may_combine(e); ) ;
 }
 function combine_voices() {
  var e, t, n, r, i;
  for (e = tsfirst; e.ts_next; e = e.ts_next) if (!(e.combine < 0 || 0 == e.combine && e.type != REST)) if (e.in_tuplet) {
   if (!(n = e.extra)) continue;
   for (i = 0; n; n = n.next) n.type == TUPLET && n.tuplet_r > i && (i = n.tuplet_r);
   if (0 == i) continue;
   for (r = i, t = e; t && t.ts_next; t = t.next) if (t.type == NOTE || t.type == REST) {
    if (!may_combine(t)) break;
    if (--r <= 0) break;
   }
   if (r > 0) continue;
   for (t = e; t.type != NOTE && t.type != REST || (do_combine(t), !(--i <= 0)); t = t.next) ;
  } else if (e.type == NOTE) {
   if (e.beam_st) if (e.beam_end) may_combine(e) && do_combine(e); else {
    for (t = e; ;) {
     if (!may_combine(t)) {
      t = null;
      break;
     }
     if (t.beam_end) break;
     do {
      t = t.next;
     } while (t.type != NOTE && t.type != REST);
    }
    if (t) for (t = e; do_combine(t), !t.beam_end; ) do {
     t = t.next;
    } while (t.type != NOTE && t.type != REST);
   }
  } else e.type == REST && may_combine(e) && do_combine(e);
 }
 function insert_clef(e, t, n) {
  var r, i = voice_tb[e.v], s = e.st;
  for (e.type == BAR && e.prev && e.prev.type == BAR && (e = e.prev), i.last_sym = e.prev, 
  i.last_sym || (i.sym = null), i.time = e.time, (r = sym_add(i)).type = CLEF, r.next = e, 
  e.prev = r, r.clef_type = t, r.clef_line = n, r.st = s, r.clef_small = !0, r.second = void 0, 
  r.notes = [], r.notes[0] = {
   pit: e.notes[0].pit
  }, r.nhd = 0; !e.seqst; ) e = e.ts_prev;
  return e.ts_prev.type != CLEF && (r.seqst = !0), r.ts_prev = e.ts_prev, r.ts_prev.ts_next = r, 
  r.ts_next = e, e.ts_prev = r, r;
 }
 function set_float() {
  var e, t, n, r, i, s, a, o;
  for (r = 0; r < voice_tb.length; r++) if ((e = voice_tb[r]).floating) for (n = !1, 
  t = e.st, i = e.sym; i; i = i.next) if (i.type == NOTE) if (i.floating) if (i.notes[0].pit >= 19) n = !1; else if (i.notes[i.nhd].pit <= 12) n = !0, 
  i.st++; else {
   for (a = 127, s = i.ts_prev; s && (s.st == t && s.v != i.v); s = s.ts_prev) s.type == NOTE && s.notes[0].pit < a && (a = s.notes[0].pit);
   if (127 != a) if (i.notes[i.nhd].pit > a - 3) n = !1; else {
    for (o = -127, s = i.ts_next; s && (s.st == t + 1 && s.v != i.v); s = s.ts_next) s.type == NOTE && s.notes[s.nhd].pit > o && (o = s.notes[s.nhd].pit);
    if (-127 != o) if (i.notes[0].pit < o + 3) n = !0, i.st++; else {
     if (a -= i.notes[i.nhd].pit, o = i.notes[0].pit - o, n) {
      if (a < o - 3) {
       n = !1;
       continue;
      }
     } else {
      if (a < o + 3) continue;
      n = !0;
     }
     i.st++;
    } else n && i.st++;
   } else n && i.st++;
  } else n = !1; else n && i.st++;
 }
 function set_graceoffs(e) {
  var t, n, r, i, s, a, o;
  for (s = Number(cfmt.gracespace[0]), a = Number(cfmt.gracespace[1]), o = Number(cfmt.gracespace[2]), 
  i = 0, t = e.extra; t.type != NOTE; t = t.next) ;
  for (t.beam_st = !0; ;t = t.next) if (t.type == NOTE) {
   for (set_head_shift(t), r = t.nhd; r >= 0; r--) if (t.notes[r].acc) {
    i += 5, t.notes[r].micro && (i += 2);
    break;
   }
   if (t.x = i, t.nflags <= 0 && (t.beam_st = !0, t.beam_end = !0), !(n = t.next)) {
    t.beam_end = !0;
    break;
   }
   n.nflags <= 0 && (t.beam_end = !0), t.beam_end && (n.beam_st = !0, i += a / 4), 
   t.nflags <= 0 && (i += a / 4), t.y > n.y + 8 && (i -= 1.5), i += a;
  } else if (!t.next) break;
  return i += s + o, (n = e.next) && n.type == NOTE && (t.y >= 3 * (n.notes[n.nhd].pit - 18) ? i -= 1 : t.beam_st && t.y < 3 * (n.notes[0].pit - 18) - 7 && (i += 2)), 
  i;
 }
 function gchord_width(e, t, n) {
  for (var r, i, s, a, o = 0, c = 0, u = 0; u < e.a_gch.length; u++) switch ((i = e.a_gch[u]).type) {
  default:
   (a = -i.x) > o && (o = a), (s = i.w + 2 - a) > c && (c = s);
   break;

  case "<":
   (s = i.w + t) > o && (o = s);
   break;

  case ">":
   (s = i.w + e.wr) > c && (c = s);
  }
  if ((r = e.prev) && r.a_gch) for (r = e.ts_prev; ;r = r.ts_prev) {
   if (r == e.prev) {
    n < o && (n = o);
    break;
   }
   r.seqst && (o -= r.shrink);
  }
  if ((r = e.next) && r.a_gch) for (r = e.ts_next; ;r = r.ts_next) {
   if (r == e.next) {
    e.wr < c && (e.wr = c);
    break;
   }
   r.seqst && (c -= 8);
  }
  return n;
 }
 function set_width(e) {
  var t, n, r, i, s, a, o, c;
  switch (e.type) {
  case NOTE:
  case REST:
   switch (e.head) {
   default:
    a = 8;
    break;

   case "oval":
    a = 6;
    break;

   case "empty":
    a = 5;
    break;

   case "full":
    a = 4.5;
   }
   if (e.wr = a, e.xmx > 0 && (e.wr += e.xmx + 4), t = e.prev) switch (t.type) {
   case BAR:
   case CLEF:
   case KEY:
   case METER:
    a += 3;
   }
   for (r = 0; r <= e.nhd; r++) if ((i = e.notes[r].shhd) < 0 && a < 5 - i && (a = 5 - i), 
   e.notes[r].acc) {
    var u = e.notes[r].shac + (e.notes[r].micro ? 6.5 : 4.5);
    a < u && (a = u);
   }
   if (t) switch (t.type) {
   case BAR:
   case CLEF:
   case KEY:
   case METER:
    a -= 3;
   }
   if (e.a_dd && (a += deco_width(e)), e.beam_st && e.beam_end && e.stem > 0 && e.nflags > 0 && e.wr < e.xmx + 9 && (e.wr = e.xmx + 9), 
   e.dots > 0) {
    switch (e.head) {
    case "square":
    case "oval":
     e.xmx += 2;
     break;

    case "empty":
     e.xmx += 1;
    }
    e.wr < e.xmx + 12 && (e.wr = e.xmx + 12), e.dots >= 2 && (e.wr += 3.5 * (e.dots - 1));
   }
   if (e.trem2 && e.beam_end && a < 20 && (a = 20), o = a, t) switch (t.type) {
   case NOTE:
    t.stem > 0 && e.stem < 0 && o < 7 && (o = 7), (e.y > 27 && t.y > 27 || e.y < -3 && t.y < -3) && o < 6 && (o = 6), 
    t.ti1 && o < 14 && (o = 14);
    break;

   case CLEF:
    if (t.second || t.clef_small) break;
    o += 8;
    break;

   case KEY:
    o += 4;
   }
   return e.a_gch && (o = gchord_width(e, a, o)), e.a_ly && (o = ly_width(e, o)), void (t && t.type == GRACE ? e.wl = a - 4.5 : e.wl = o);

  case SPACE:
   return i = e.width / 2, e.wr = i, e.a_gch && (i = gchord_width(e, i, i)), e.a_dd && (i += deco_width(e)), 
   void (e.wl = i);

  case BAR:
   if (e.norepbra) break;
   if (e.invisible) e.wl = e.wr = 0; else {
    var l = e.bar_type;
    switch (l) {
    case "|":
     s = 8;
     break;

    case "|:":
    case ":|":
     s = 16;
     break;

    case "::":
     s = 24;
     break;

    default:
     if (!l) break;
     for (s = 5 + 3 * l.length, n = 0; n < l.length; n++) switch (l[n]) {
     case "[":
     case "]":
      s += 3;
      break;

     case ":":
      s += 2;
     }
    }
    e.wl = s, e.next && e.next.type != METER ? e.wr = 8 : e.wr = 5;
   }
   return e.a_dd && (e.wl += deco_width(e)), void (e.a_gch && e.a_gch[0].text.length < 4 && (e.wl = gchord_width(e, e.wl, e.wl)));

  case CLEF:
   if (e.invisible) break;
   return e.wl = 12, void (e.wr = e.clef_small ? 10 : 12);

  case KEY:
   var f, p, d;
   if (e.wl = 3, d = 4, e.k_a_acc) {
    f = p = e.k_a_acc.length;
    var h = e.k_a_acc[0].acc;
    for (n = 1; n < p; n++) (c = e.k_a_acc[n]).pit > e.k_a_acc[n - 1].pit + 6 || c.pit < e.k_a_acc[n - 1].pit - 6 ? f-- : c.acc != h && (d += 3), 
    h = c.acc;
   } else (f = e.k_sf) * (p = e.k_old_sf && (cfmt.cancelkey || 0 == f) ? e.k_old_sf : 0) >= 0 ? (f < 0 && (f = -f), 
   p < 0 && (p = -p), p > f && (f = p)) : ((f -= p) < 0 && (f = -f), d += 3);
   return void (e.wr = 5.5 * f + d);

  case METER:
   for (s = 0, n = 0; n < e.a_meter.length; n++) {
    var m = e.a_meter[n];
    "C|" == m.top ? s += 6.5 : !m.bot || m.top.length > m.bot.length ? s += 6.5 * m.top.length : s += 6.5 * m.bot.length;
   }
   return e.wl = s, void (e.wr = s + 7);

  case MREST:
   return e.wl = 36, void (e.wr = 36);

  case GRACE:
   return e.wl = set_graceoffs(e), void (e.wr = 0);

  case STBRK:
   return e.wl = e.xmx, void (e.next && e.next.type == CLEF ? (e.wr = 2, delete e.next.clef_small) : e.wr = 8);

  case FORMAT:
   return e.wl = 6, void (e.wr = 0);

  default:
   error(2, e, "set_width - Cannot set width for symbol " + e.type);
  }
  e.wl = e.wr = 0;
 }
 function set_space(e) {
  var t, n, r, i, s = e.ts_prev.time, a = e.time - s;
  if (0 == a) {
   switch (e.type) {
   case MREST:
    return e.wl + 16;

   case NOTE:
   case REST:
    if (e.ts_prev.type == BAR) return e.nflags < -2 ? space_tb[0] : space_tb[2];
   }
   return 0;
  }
  if (e.ts_prev.type == MREST) return e.ts_prev.wr + 16 + 3;
  if (smallest_duration >= BASE_LEN / 2 && (smallest_duration >= BASE_LEN ? a /= 4 : a /= 2), 
  n = a >= BASE_LEN / 4 ? a < BASE_LEN / 2 ? 5 : a < BASE_LEN ? 6 : a < 2 * BASE_LEN ? 7 : a < 4 * BASE_LEN ? 8 : 9 : a >= BASE_LEN / 8 ? 4 : a >= BASE_LEN / 16 ? 3 : a >= BASE_LEN / 32 ? 2 : a >= BASE_LEN / 64 ? 1 : 0, 
  r = a - (BASE_LEN / 16 / 8 << n), i = space_tb[n], 0 != r && (r < 0 ? i = space_tb[0] * a / (BASE_LEN / 16 / 8) : (n >= 9 && (n = 8), 
  i += (space_tb[n + 1] - space_tb[n]) * r / a)), !e.dur) {
   switch (e.type) {
   case BAR:
    e.bar_type.length > 1 ? i *= .8 : i *= .7;
    break;

   case CLEF:
    i -= e.wl;
   }
   return i;
  }
  if (e.beam_st || (i *= .9), e.type == NOTE && e.nflags >= -1 && e.stem > 0) {
   var o = !0;
   for (t = e.ts_prev; t && t.time == s; t = t.ts_prev) if (t.type == NOTE && (t.nflags < -1 || t.stem > 0)) {
    o = !1;
    break;
   }
   if (o) {
    for (t = e.ts_next; t && t.time == e.time; t = t.ts_next) if (t.type == NOTE && (t.nflags < -1 || t.stem < 0)) {
     o = !1;
     break;
    }
    o && (i *= .9);
   }
  }
  return i;
 }
 function set_allsymwidth(e) {
  for (var t, n, r, i, s = 0, a = tsfirst; set_width(a), s < a.wl && (s = a.wl), (a = a.ts_next) != e && !a.seqst; ) ;
  if (tsfirst.shrink = s, tsfirst.space = 0, a != e) for (;;) {
   t = a, r = i = 0;
   do {
    var o, c, u, l, f;
    for (set_width(t), t.type == BAR ? (o = 50, c = -50) : (o = t.ymx, c = t.ymn), f = t.wl, 
    s = 0, n = a.ts_prev; n; n = n.ts_prev) {
     if (!(s < n.wr) || n.type != NOTE && n.type != REST || t.type != NOTE && t.type != REST || (s = n.wr), 
     n.st == t.st && (!n.invisible || n.v == t.v) && s < n.wr + f) switch (n.type) {
     case NOTE:
     case REST:
      if (t.type == NOTE || t.type == REST) {
       s = n.wr + f;
       break;
      }

     default:
      if (u = n.ymx, l = n.ymn, c > u || o < l) break;

     case SPACE:
     case BAR:
     case CLEF:
     case METER:
     case KEY:
      s = n.wr + f;
     }
     if (n.seqst) {
      if (0 != s) break;
      if ((f -= n.shrink) < 0) break;
     }
    }
    if (r < s && (r = s), i < (s = set_space(t)) && (i = s), (t = t.ts_next) == e) break;
   } while (!t.seqst);
   if (0 == r && 0 == i && a.type == CLEF && (delete a.seqst, a.time = a.ts_prev.time), 
   a.shrink = r, a.space = i, (a = t) == e) break;
  }
 }
 function to_rest(e) {
  e.type = REST, delete e.in_tuplet, delete e.sl1, delete e.sl2, delete e.a_dd, delete e.a_gch, 
  delete e.extra, e.slur_start = e.slur_end = 0;
 }
 function set_repeat(e, t) {
  var n, r, i, s, a, o, c = t.st, u = t.v;
  if ((a = e.repeat_n) < 0) {
   for (i = a = -a, r = t.prev; r; r = r.prev) if (r.dur) {
    if (--i <= 0) break;
   } else if (r.type == BAR) return error(1, r, "Bar in sequence to repeat"), void (e.fmt_type = void 0);
   if (!r) return error(1, t, "Not enough symbols to repeat"), void (e.fmt_type = void 0);
   for (i = e.repeat_k * a, n = t; n; n = n.next) if (n.dur) {
    if (--i <= 0) break;
   } else if (n.type == BAR) return error(1, n, "Bar in repeat sequence"), void (e.fmt_type = void 0);
   if (!n || !n.next) return error(1, t, "Not enough symbols after repeat sequence"), 
   void (e.fmt_type = void 0);
   for (n = t.prev; n != r; n = n.prev) if (n.type == NOTE) {
    n.beam_end = !0;
    break;
   }
   for (r = t, s = e.repeat_k; --s >= 0; ) {
    for (i = a, r.dur && i--, n = r.ts_next; i > 0; ) n.st == c && (n.v == u && n.dur && i--, 
    delete n.extra, unlksym(n), n = n.ts_next);
    to_rest(r), r.dur = r.notes[0].dur = n.time - r.time, r.repeat_n = -1, r.beam_st = !0, 
    set_width(r), r.seqst && (r.space = set_space(r)), r.head = "square", r = n;
   }
   e.fmt_type = void 0;
  } else {
   for (i = a, n = t.prev.prev; n && (n.type != BAR && n.time != tsfirst.time || !(--i <= 0)); n = n.prev) ;
   if (!n) return error(1, t, "Not enough measures to repeat"), void (e.fmt_type = void 0);
   for (o = t.time - n.time, i = 1 == a ? e.repeat_k : a, n = t; n && !(n.type == BAR && --i <= 0); n = n.next) ;
   if (!n) return error(1, t, "Not enough bars after repeat measure"), void (e.fmt_type = void 0);
   if (i = e.repeat_k, 2 == a && i > 1) {
    if (!(n = n.next)) return error(1, t, "Not enough bars after repeat measure"), void (e.fmt_type = void 0);
    e.repeat_k = 1, (t = clone(e)).next = n.extra, t.next && (t.next.prev = t), delete t.prev, 
    n.extra = t, t.repeat_k = --i;
   }
   if (o /= a, 2 == a) {
    for (r = t, n = t.ts_next; ;n = n.ts_next) if (n.st == c) {
     if (n.v == u && n.type == BAR) break;
     delete n.extra, unlksym(n);
    }
    for (to_rest(r), r.dur = r.notes[0].dur = o, r.invisible = !0, r.seqst && (r.space = set_space(r)), 
    n.bar_mrep = 2, n.seqst && (n.space = set_space(n)), n = (r = n.next).next; n.type != BAR && n.type != CLEF; ) delete n.extra, 
    unlksym(n), n = n.next;
    return to_rest(r), r.dur = r.notes[0].dur = o, r.invisible = !0, set_width(r), r.seqst && (r.space = set_space(r)), 
    void (n.seqst && (n.space = set_space(n)));
   }
   for (r = t, s = e.repeat_k; --s >= 0; ) {
    for (n = r.ts_next; ;n = n.ts_next) if (n.st == c) {
     if (n.v == u && n.type == BAR) break;
     delete n.extra, unlksym(n);
    }
    if (to_rest(r), r.dur = r.notes[0].dur = o, r.beam_st = !0, r.seqst && (r.space = set_space(r)), 
    n.seqst && (n.space = set_space(n)), 1 == e.repeat_k) {
     r.repeat_n = 1;
     break;
    }
    r.repeat_n = e.repeat_k - s + 1, r = n.next;
   }
  }
 }
 function custos_add(e) {
  for (var t, n, r, i = e; i.type != NOTE; ) if (!(i = i.next)) return;
  for ((t = voice_tb[e.v]).last_sym = e.prev, t.time = e.time, (n = sym_add(t)).type = CUSTOS, 
  n.next = e, e.prev = n, n.ts_prev = e.ts_prev, n.ts_prev.ts_next = n, n.ts_next = e, 
  e.ts_prev = n, n.seqst = !0, n.wl = 8, n.wr = 4, n.shrink = e.shrink, n.shrink < 12 && (n.shrink = 12), 
  n.space = i.space, n.nhd = i.nhd, n.notes = [], r = 0; r < e.notes.length; r++) n.notes[r] = {
   pit: i.notes[r].pit,
   shhd: 0,
   dur: BASE_LEN / 4
  };
  n.stemless = !0;
 }
 function set_nl(e) {
  var t, n, r, i, s, a;
  function o(e) {
   if (cfmt.custos && 1 == voice_tb.length) custos_add(e); else switch ((t = e.ts_prev).type) {
   case BAR:
   case FORMAT:
   case CLEF:
   case KEY:
   case METER:
    break;

   default:
    (n = voice_tb[t.v]).last_sym = t, n.time = e.time, t = t.next, (s = sym_add(n)).type = FORMAT, 
    s.next = t, t && (t.prev = s), s.ts_prev = s.prev, s.ts_prev.ts_next = s, s.ts_next = e, 
    e.ts_prev = s, s.seqst = !0, s.wl = 6, s.shrink = e.shrink, s.space = e.space, e.x && (s.x = e.x);
   }
   e.nl = !0;
  }
  function c(e) {
   if (!(e = e.next)) return e;
   for (;!e.seqst; ) e = e.ts_prev;
   return o(e), e;
  }
  if (e.eoln && !cfmt.keywarn && !cfmt.timewarn) return c(e);
  switch (e.type) {
  case CLEF:
  case BAR:
   break;

  case KEY:
   if (cfmt.keywarn && !e.k_none) break;
   return c(e);

  case METER:
   if (cfmt.timewarn) break;
   return c(e);

  case GRACE:
   if (!(e = e.next)) return e;

  default:
   return c(e);
  }
  for (;e; e = e.ts_prev) if (e.seqst) {
   switch (e.type) {
   case KEY:
   case CLEF:
   case METER:
    continue;
   }
   break;
  }
  for (a = 0; ;e = e.ts_next) {
   if (!e) return e;
   if (e.new_sy && (i = !0, e.new_sy = !1), e.seqst) {
    if (a < 0) break;
    switch (e.type) {
    case BAR:
     a || !e.bar_num && e.next && ":" == e.bar_type[e.bar_type.length - 1] && ":" != e.bar_type[0] ? r = !0 : a = 1;
     break;

    case STBRK:
     if (!e.stbrk_forced) {
      unlksym(e);
      break;
     }
     a = -1;
     break;

    case METER:
     cfmt.timewarn || (r = !0);
     break;

    case CLEF:
     a && (r = !0);
     break;

    case KEY:
     cfmt.keywarn && !e.k_none || (r = !0);
     break;

    default:
     if (!a || e.prev && e.prev.type == GRACE) break;
     r = !0;
    }
    if (r) break;
    e.extra && (s ? error(2, e, "Extra symbol may be misplaced") : s = e);
   }
  }
  if (s && s != e) {
   for (t = s.extra; t.next; ) t = t.next;
   t.next = e.extra, e.extra = s.extra, delete s.extra;
  }
  return i && (e.new_sy = !0), o(e), e;
 }
 function get_ck_width() {
  var e, t, n = voice_tb.length;
  for (e = 0; e < n && !(t = voice_tb[e]).clef; e++) ;
  return set_width(t.clef), set_width(t.key), cfmt.singleline ? (set_width(t.meter), 
  t.clef.wl + t.clef.wr + t.key.wl + t.key.wr + t.meter.wl + t.meter.wr) : t.clef.wl + t.clef.wr + t.key.wl + t.key.wr;
 }
 function get_width(e, t, n) {
  var r, i, s, a = 1 - cfmt.maxshrink;
  for (r = e; r != t; r = r.ts_next) r.seqst && (r.x = n, i = r.shrink, (s = r.space) < i ? n += i : n += i * cfmt.maxshrink + s * a);
  return n;
 }
 function set_lines(e, t, n, r) {
  var i, s, a, o, c, u, l, f, p;
  for (l = get_width(e, t, r), i = e; ;) {
   if ((f = Math.ceil(l / n)) <= 1) return t && (t = set_nl(t)), t;
   for (s = e = i, c = i.x + l / f * cfmt.breaklimit, u = i.x + n, p = !1; i != t; i = i.ts_next) if (o = i.x) {
    if (o > u) break;
    if (i.type == BAR) {
     if (o > c) {
      p = !0;
      break;
     }
     s = i;
    }
   }
   if (i == t) return t;
   if (!p) {
    var d = !s.dur || s.beam_st || s.beam_end ? 0 : 1, h = s.time;
    for (i = s, s = a = null, u -= 6; i != t; i = i.ts_next) {
     if (i.beam_st) {
      if (!i.beam_end) {
       d++;
       continue;
      }
     } else i.beam_end && d--;
     if ((o = i.x) && !(o < c)) {
      if (o + o.shrink >= u) break;
      0 == d && (s = i, (i.time - h) % (BASE_LEN / 8) == 0 && (a = i));
     }
    }
    for (a && (s = a), s && (i = s); !i.x || i.x + 2 * i.shrink >= u; ) i = i.ts_prev;
   }
   if (i.nl) for (error(0, i, "Line split problem - adjust maxshrink and/or breaklimit"), 
   f = 2, i = i.ts_next; i != t && !(i.x && --f <= 0); i = i.ts_next) ;
   if (!(i = set_nl(i)) || t && i.time >= t.time) break;
   l -= i.x - e.x;
  }
  return i;
 }
 function cut_tune(e, t) {
  var n, r, i, s = tsfirst;
  if (e -= get_ck_width(), cfmt.custos && 1 == voice_tb.length && (e -= 12), cfmt.barsperstaff) {
   for (r = cfmt.barsperstaff, n = s; s; s = s.ts_next) s.type == BAR && s.bar_num && (--r > 0 || (s.eoln = !0, 
   r = cfmt.barsperstaff));
   s = n;
  }
  for (i = t, n = s; s; s = s.ts_next) if (s.seqst || s.eoln) if ((i += s.shrink) > e) {
   for (;s && !s.eoln; s = s.ts_next) ;
   if (!(s = n = set_lines(n, s, e, t))) break;
   i = s.shrink, t = 0;
  } else if (s.eoln) {
   if (n = set_nl(s), delete s.eoln, !(s = n)) break;
   i = s.shrink, t = 0;
  }
 }
 function set_yval(e) {
  switch (e.type) {
  case CLEF:
   if (e.second || e.invisible) {
    e.ymx = e.ymn = 12;
    break;
   }
   switch (e.y = 6 * (e.clef_line - 1), e.clef_type) {
   default:
    e.ymx = e.y + 28, e.ymn = e.y - 14;
    break;

   case "c":
    e.ymx = e.y + 13, e.ymn = e.y - 11;
    break;

   case "b":
    e.ymx = e.y + 7, e.ymn = e.y - 12;
   }
   e.clef_small && (e.ymx -= 2, e.ymn += 2), e.ymx < 26 && (e.ymx = 26), e.ymn > -1 && (e.ymn = -1), 
   e.clef_octave && (e.clef_octave > 0 ? e.ymx += 12 : e.ymn -= 12);
   break;

  case KEY:
   e.k_sf > 2 ? e.ymx = 34 : e.k_sf > 0 ? e.ymx = 30 : e.ymx = 26, e.ymn = -2;
   break;

  default:
   e.ymx = 26, e.ymn = -2;
  }
 }
 function set_auto_clef(e, t, n) {
  var r, i, s, a, o, c;
  for (s = 12, i = 20, r = t; r && (!r.new_sy || r == t); r = r.ts_next) if (r.st == e) if (r.type == NOTE) r.notes[0].pit < i ? i = r.notes[0].pit : r.notes[r.nhd].pit > s && (s = r.notes[r.nhd].pit); else if (r.type == CLEF) {
   if ("a" != r.clef_type) break;
   unlksym(r);
  }
  if (i >= 19 || i >= 13 && "b" != n) return "t";
  if (s <= 13 || s <= 19 && "t" != n) return "b";
  "a" == n && (n = (s + i) / 2 >= 16 ? "t" : "b");
  var u = n, l = r, f = null;
  for (r = t; r != l && (!r.new_sy || r == t); r = r.ts_next) if (r.st == e && r.type == NOTE) {
   if (a = r.time, "t" == u) {
    if (r.notes[0].pit > 12 || r.notes[r.nhd].pit > 20) {
     r.notes[0].pit > 20 && (f = r);
     continue;
    }
    if ((o = r.ts_prev) && o.time == a && o.st == e && o.type == NOTE && o.notes[0].pit >= 19) continue;
    if ((o = r.ts_next) && o.st == e && o.time == a && o.type == NOTE && o.notes[0].pit >= 19) continue;
   } else {
    if (r.notes[0].pit < 12 || r.notes[r.nhd].pit < 20) {
     r.notes[r.nhd].pit < 12 && (f = r);
     continue;
    }
    if ((o = r.ts_prev) && o.time == a && o.st == e && o.type == NOTE && o.notes[0].pit <= 13) continue;
    if ((o = r.ts_next) && o.st == e && o.time == a && o.type == NOTE && o.notes[0].pit <= 13) continue;
   }
   if (f) {
    for (c = r, o = r.ts_prev; o != f; o = o.ts_prev) if (o.st == e) {
     if (o.type == BAR && o.v == r.v) {
      c = o;
      break;
     }
     o.type == NOTE && o.beam_st && !voice_tb[o.v].second && (c = o);
    }
    c.time != f.time ? (f = r, (o = insert_clef(c, u = "t" == u ? "b" : "t", "t" == u ? 2 : 4)).clef_auto = !0) : f = r;
   } else u = n = "t" == u ? "b" : "t", f = r;
  }
  return n;
 }
 function set_clefs() {
  var e, t, n, r, i, s, a, o, c = new Array(nstaff), u = cur_sy;
  for (staff_tb = new Array(nstaff), n = 0; n <= nstaff; n++) c[n] = {
   autoclef: !0
  }, staff_tb[n] = {
   output: []
  };
  for (r = 0; r < voice_tb.length; r++) i = voice_tb[r], u.voices[r].range < 0 || (n = u.voices[r].st, 
  u.voices[r].second || (void 0 != i.stafflines && (u.staves[n].stafflines = i.stafflines), 
  i.staffscale && (u.staves[n].staffscale = i.staffscale), u.voices[r].sep && (u.staves[n].sep = u.voices[r].sep), 
  u.voices[r].maxsep && (u.staves[n].maxsep = u.voices[r].maxsep)), u.voices[r].second || i.clef.clef_auto || (c[n].autoclef = !1));
  for (r = 0; r < voice_tb.length; r++) i = voice_tb[r], u.voices[r].range < 0 || u.voices[r].second || (n = u.voices[r].st, 
  e = i.clef, c[n].autoclef && (e.clef_type = set_auto_clef(n, tsfirst, e.clef_type), 
  e.clef_line = "t" == e.clef_type ? 2 : 4), c[n].clef = staff_tb[n].clef = e);
  for (e = tsfirst; e; e = e.ts_next) {
   for (s = e.extra; s; s = s.next) if (s.type == FORMAT && "repeat" == s.fmt_type) {
    set_repeat(s, e);
    break;
   }
   if (e.new_sy) {
    for (u = u.next, n = 0; n <= nstaff; n++) c[n].autoclef = !0;
    for (r = 0; r < voice_tb.length; r++) u.voices[r].range < 0 || (i = voice_tb[r], 
    n = u.voices[r].st, u.voices[r].second || (void 0 != i.stafflines && (u.staves[n].stafflines = i.stafflines), 
    i.staffscale && (u.staves[n].staffscale = i.staffscale), u.voices[r].sep && (u.staves[n].sep = u.voices[r].sep), 
    u.voices[r].maxsep && (u.staves[n].maxsep = u.voices[r].maxsep)), (t = i.clef).clef_auto || (c[n].autoclef = !1));
    for (r = 0; r < voice_tb.length; r++) if (!(u.voices[r].range < 0 || u.voices[r].second)) if (i = voice_tb[r], 
    n = u.voices[r].st, (t = i.clef).clef_auto ? o = "t" == (a = set_auto_clef(n, e, c[n].clef ? c[n].clef.clef_type : "a")) ? 2 : 4 : (a = t.clef_type, 
    o = t.clef_line), c[n].clef) {
     if (a != c[n].clef.clef_type || o != c[n].clef.clef_line) {
      for (s = e; s.v != r; ) s = s.ts_next;
      s.type != CLEF && (s = insert_clef(s, a, o), t.clef_auto && (s.clef_auto = !0)), 
      c[n].clef = i.clef = s;
     }
    } else t.clef_auto && ("a" != t.type && (i.clef = clone(i.clef)), i.clef.clef_type = a, 
    i.clef.clef_line = o), staff_tb[n].clef = c[n].clef = i.clef;
   }
   if (e.type == CLEF) if ((i = voice_tb[e.v]).clef = e, e.second) unlksym(e); else {
    if (c[n = e.st].clef) {
     if (e.clef_type == c[n].clef.clef_type && e.clef_line == c[n].clef.clef_line && !e.new_sy) continue;
    } else staff_tb[n].clef = e;
    c[n].clef = e;
   }
  }
  for (u = cur_sy, r = 0; r < voice_tb.length; r++) if (!(u.voices[r].range < 0) && (t = voice_tb[r].sym) && 127 == t.notes[0].pit) {
   switch (n = u.voices[r].st, staff_tb[n].clef.clef_type) {
   default:
    pitch = 22;
    break;

   case "c":
    pitch = 16;
    break;

   case "b":
    pitch = 10;
   }
   for (e = t; e; e = e.next) e.notes[0].pit = pitch;
  }
 }
 const delta_tb = {
  t: -4,
  c: 0,
  b: 4,
  p: -6
 }, rest_sp = [ [ 18, 18 ], [ 12, 18 ], [ 12, 12 ], [ 8, 12 ], [ 6, 8 ], [ 10, 10 ], [ 6, 4 ], [ 10, 0 ], [ 10, 4 ], [ 10, 10 ] ];
 function set_pitch(e) {
  var t, n, r, i, s, a, o = new Array(nstaff);
  for (r = 0; r <= nstaff; r++) t = staff_tb[r].clef, o[r] = delta_tb[t.clef_type] + 2 * t.clef_line, 
  t.clef_oct_transp && (o[r] -= t.clef_octave);
  for (a = BASE_LEN, t = tsfirst; t != e; t = t.ts_next) switch (r = t.st, t.type) {
  case CLEF:
   o[r] = delta_tb[t.clef_type] + 2 * t.clef_line, t.clef_oct_transp && (o[r] -= t.clef_octave), 
   set_yval(t);
   break;

  case GRACE:
   for (n = t.extra; n; n = n.next) if (n.type == NOTE) {
    if (0 != (i = o[n.st]) && !voice_tb[t.v].key.k_drum) for (s = 0; s <= n.nhd; s++) n.notes[s].pit += i;
    n.ymn = 3 * (n.notes[0].pit - 18) - 2, n.ymx = 3 * (n.notes[n.nhd].pit - 18) + 2;
   }
   set_yval(t);
   break;

  case KEY:
   t.k_y_clef = o[r];

  default:
   set_yval(t);
   break;

  case MREST:
   if (t.invisible) break;
   t.y = 12, t.ymx = 39, t.ymn = -2;
   break;

  case REST:
   if (1 == voice_tb.length) {
    t.y = 12, t.ymx = 24, t.ymn = 0;
    break;
   }

  case NOTE:
   if (0 != (i = o[r]) && !voice_tb[t.v].key.k_drum) for (s = t.nhd; s >= 0; s--) t.notes[s].pit += i;
   t.type == NOTE ? (t.ymx = 3 * (t.notes[t.nhd].pit - 18) + 4, t.ymn = 3 * (t.notes[0].pit - 18) - 4, 
   t.yav = (t.ymx + t.ymn) / 2) : (t.y = 6 * Math.floor((t.notes[0].pit - 18) / 2), 
   t.ymx = t.y + rest_sp[5 - t.nflags][0], t.ymn = t.y - rest_sp[5 - t.nflags][1]), 
   t.dur < a && (a = t.dur);
  }
  smallest_duration = a;
 }
 function set_stem_dir() {
  for (var e, t, n, r, i, s, a, o, c, u = [], l = tsfirst, f = cur_sy, p = f.nstaff; l; ) {
   for (r = 0; r <= p; r++) u[r] = [];
   for (c = [], t = l; t && t.type != BAR; t = t.ts_next) {
    if (t.new_sy) {
     if (t != l) break;
     for (f = f.next, r = p; r <= f.nstaff; r++) u[r] = [];
     p = f.nstaff;
    }
    if (!(t.type != NOTE && t.type != REST || t.invisible)) {
     if ((r = t.st) > p) {
      var d = "*** fatal set_stem_dir(): bad staff number " + r + " max " + p;
      throw error(2, null, d), new Error(d);
     }
     for (s = t.v, v_st = c[s], v_st || (v_st = {
      st1: -1,
      st2: -1
     }, c[s] = v_st), v_st.st1 < 0 ? v_st.st1 = r : v_st.st1 != r && (r > v_st.st1 ? r > v_st.st2 && (v_st.st2 = r) : (v_st.st1 > v_st.st2 && (v_st.st2 = v_st.st1), 
     v_st.st1 = r)), a = u[r], i = f.voices[s].range, n = a.length; --n >= 0 && (o = a[n]).v != i; ) ;
     if (n < 0) {
      for (o = {
       v: i,
       ymx: 0,
       ymn: 24
      }, n = 0; n < a.length; n++) if (i < a[n].v) {
       a.splice(n, 0, o);
       break;
      }
      n == a.length && a.push(o);
     }
     t.type == NOTE && (t.ymx > o.ymx && (o.ymx = t.ymx), t.ymn < o.ymn && (o.ymn = t.ymn), 
     t.xstem && (t.ts_prev.st != r - 1 || t.ts_prev.type != NOTE ? (error(1, l, "Bad +xstem+"), 
     delete t.xstem) : (t.ts_prev.multi = 1, t.multi = 1, t.stemless = !0)));
    }
   }
   for (;l != t; l = l.ts_next) if (!l.multi && (l.type == NOTE || l.type == REST || l.type == GRACE)) if (r = l.st, 
   s = l.v, v_st = c[s], a = u[r], v_st && v_st.st2 >= 0) r == v_st.st1 ? l.multi = -1 : r == v_st.st2 && (l.multi = 1); else if (a.length <= 1) l.floating && (r == voice_tb[s].st ? l.multi = -1 : l.multi = 1); else {
    for (i = f.voices[s].range, n = a.length; --n >= 0 && a[n].v != i; ) ;
    n < 0 || (n == a.length - 1 ? l.multi = -1 : (l.multi = 1, 0 != n && n + 2 == a.length && (a[n].ymn - cfmt.stemheight > a[n + 1].ymx && (l.multi = -1), 
    e = l.ts_next, l.ts_prev && l.ts_prev.time == l.time && l.ts_prev.st == l.st && l.notes[l.nhd].pit == l.ts_prev.notes[0].pit && l.beam_st && l.beam_end && (!e || e.st != l.st || e.time != l.time) && (l.multi = -1))));
   }
   for (;l && l.type == BAR; ) l.new_sy && (p = (f = f.next).nstaff), l = l.ts_next;
  }
 }
 function set_rest_offset() {
  var e, t, n, r, i, s, a, o, c, u, l, f = [], p = cur_sy;
  for (e = tsfirst; e; e = e.ts_next) if (!e.invisible) {
   switch (e.new_sy && (p = p.next), e.type) {
   default:
    continue;

   case NOTE:
   case REST:
   }
   if ((s = f[e.v]) || (s = {}, f[e.v] = s), s.s = e, s.st = e.st, s.end_time = e.time + e.dur, 
   e.type == REST) {
    for (o = -127, a = 127, i = u = !1, n = 0; n <= f.length; n++) (s = f[n]) && s.s && s.st == e.st && n != e.v && (s.end_time <= e.time || (i = !0, 
    t = s.s, p.voices[n].range < p.voices[e.v].range ? t.ymn < a && (t.time == e.time ? (a = t.ymn, 
    t.dots && (u = !0)) : a = (t.ymx + t.ymn) / 2) : t.ymx > o && (t.time == e.time ? (o = t.ymx, 
    t.dots && (u = !0)) : o = (t.ymx + t.ymn) / 2)));
    for (r = e.time + e.dur, t = e.ts_next; t && !(t.time >= r); t = t.ts_next) t.st != e.st || t.type != NOTE && t.type != REST || t.invisible || (i = !0, 
    p.voices[t.v].range < p.voices[e.v].range ? t.ymn < a && (t.time == e.time ? (a = t.ymn, 
    t.dots && (u = !0)) : a = (t.ymx + t.ymn) / 2) : t.ymx > o && (t.time == e.time ? (o = t.ymx, 
    t.dots && (u = !0)) : o = (t.ymx + t.ymn) / 2));
    if ((c = a - e.ymx) < 0) {
     if (c = 6 * Math.ceil(-c / 6), e.ymn - c >= o) {
      e.y -= c, e.ymx -= c, e.ymn -= c;
      continue;
     }
     l = u ? 15 : 10, e.notes[0].shhd = l, e.xmx = l;
    } else if ((c = o - e.ymn) > 0) {
     if (c = 6 * Math.ceil(c / 6), e.ymx + c <= a) {
      e.y += c, e.ymx += c, e.ymn += c;
      continue;
     }
     l = u ? 15 : 10, e.notes[0].shhd = l, e.xmx = l;
    } else i || (e.y = 12, e.ymx = 24, e.ymn = 0);
   }
  }
 }
 function new_sym(e, t, n) {
  return s = {
   type: e,
   ctx: n.ctx,
   v: t.v,
   st: t.st,
   time: n.time,
   next: t.last_sym.next
  }, s.next && (s.next.prev = s), t.last_sym.next = s, s.prev = t.last_sym, t.last_sym = s, 
  s.ts_next = n, s.ts_prev = n.ts_prev, s.ts_prev.ts_next = s, s.ts_prev.type != e && (s.seqst = !0), 
  n.ts_prev = s, n.type == e && s.v != n.v && (delete n.seqst, n.shrink = 0), s;
 }
 function init_music_line() {
  var e, t, n, r, i, s = voice_tb.length;
  for (r = 0; r < s; r++) if (e = voice_tb[r], !(cur_sy.voices[r].range < 0)) {
   for (e.second = cur_sy.voices[r].second, i = cur_sy.voices[r].st; i < nstaff && cur_sy.staves[i].empty; ) i++;
   e.st = i;
  }
  for (t = (n = tsfirst).extra; t; t = t.next) if (t.type == BLOCK) switch (t.subtype) {
  case "center":
   write_text(t.text, "c");
   break;

  case "sep":
   vskip(t.sk1), output.push('<path class="stroke"\n\td="M'), out_sxsy(t.x, " ", 0), 
   output.push("h" + t.l.toFixed(2) + '"/>\n'), vskip(t.sk2), blk_out();
   break;

  case "ml":
   svg_flush(), user.img_out(t.text);
   break;

  case "text":
   write_text(t.text, t.opt);
   break;

  case "title":
   write_title(t.text, !0);
   break;

  case "vskip":
   vskip(t.sk), blk_out();
  }
  for (;n.type == CLEF; ) r = n.v, e = voice_tb[r], cur_sy.voices[r].range >= 0 && !cur_sy.voices[r].second && (delete n.clef_small, 
  e.last_sym = e.sym = n), n = n.ts_next;
  for (r = 0; r < s; r++) (e = voice_tb[r]).sym && e.sym.type == CLEF || cur_sy.voices[r].range < 0 || cur_sy.voices[r].second && !e.bar_start || (i = cur_sy.voices[r].st, 
  staff_tb[i] && staff_tb[i].clef && ((t = clone(staff_tb[i].clef)).v = r, t.st = i, 
  t.time = n.time, t.prev = null, t.next = e.sym, t.next && (t.next.prev = t), e.sym = t, 
  e.last_sym = t, t.ts_next = n, t.ts_prev = n.ts_prev, t.ts_prev ? (t.ts_prev.ts_next = t, 
  delete t.seqst) : (tsfirst = t, t.seqst = !0), n.ts_prev = t, n.type == CLEF && delete n.seqst, 
  delete t.clef_small, t.second = cur_sy.voices[r].second, cur_sy.staves[i].empty && (t.invisible = !0)));
  for (r = 0; r < s; r++) cur_sy.voices[r].range < 0 || cur_sy.voices[r].second || cur_sy.staves[cur_sy.voices[r].st].empty || (e = voice_tb[r], 
  n.v != r || n.type != KEY ? (e.key.k_sf || e.key.k_a_acc) && ((t = new_sym(KEY, e, n)).k_sf = e.key.k_sf, 
  t.k_old_sf = e.key.k_sf, t.k_a_acc = e.key.k_a_acc, t.istart = e.key.istart, t.iend = e.key.iend, 
  e.key.k_bagpipe && (t.k_bagpipe = e.key.k_bagpipe, "p" == t.k_bagpipe && (t.k_old_sf = 3))) : (e.last_sym = n, 
  n = n.ts_next));
  if (1 & insert_meter) for (r = 0; r < s; r++) e = voice_tb[r], cur_sy.voices[r].range < 0 || cur_sy.voices[r].second || cur_sy.staves[cur_sy.voices[r].st].empty || 0 == e.meter.a_meter.length || (n.v != r || n.type != METER ? ((t = new_sym(METER, e, n)).istart = e.meter.istart, 
  t.iend = e.meter.iend, t.wmeasure = e.meter.wmeasure, t.a_meter = e.meter.a_meter) : (e.last_sym = n, 
  n = n.ts_next));
  for (r = 0; r < s; r++) !(e = voice_tb[r]).bar_start || cur_sy.voices[r].range < 0 || cur_sy.staves[cur_sy.voices[r].st].empty || ((t = new_sym(BAR, e, n)).istart = e.bar_start.istart, 
  t.iend = e.bar_start.iend, t.bar_type = e.bar_start.bar_type, e.bar_start.invisible && (t.invisible = !0), 
  e.bar_start.norepbra && (t.norepbra = !0), t.text = e.bar_start.text, t.a_gch = e.bar_start.a_gch, 
  e.bar_start.rbstart && (t.rbstart = e.bar_start.rbstart), delete e.bar_start);
  if (set_pitch(n), t = n) for (;t && !t.seqst; t = t.ts_next) ;
  if (t) for (t = t.ts_next; t && !t.seqst; t = t.ts_next) ;
  set_allsymwidth(t);
 }
 function set_words(e) {
  var t, n, r, i, s;
  for (t = e.sym; t; t = t.next) if (t.type == NOTE) {
   n = t.notes[0].pit;
   break;
  }
  for (t || (n = 127), r = !0, t = e.sym; t; t = t.next) {
   switch (t.type) {
   case MREST:
    r = !0;
    break;

   case BAR:
    t.beam_on || (r = !0), !t.next && t.prev && t.prev.type == NOTE && t.prev.dur >= 2 * BASE_LEN && (t.prev.head = "square");
    break;

   case NOTE:
   case REST:
    if (t.trem2) break;
    i = t.nflags, t.ntrem && (i += t.ntrem), t.type == REST && t.beam_end && (t.beam_end = !1, 
    r = !0), (r || i <= 0) && (s && (s.beam_end = !0, s = null), i <= 0 ? (t.beam_st = !0, 
    t.beam_end = !0) : t.type == NOTE && (t.beam_st = !0, r = !1)), t.beam_end && (r = !0), 
    t.type == NOTE && (s = t);
   }
   t.type == NOTE ? (0 != t.nhd && sort_pitch(t), n = t.notes[0].pit, t.prev && t.prev.type != NOTE && (t.prev.notes[0].pit = (t.prev.notes[0].pit + n) / 2)) : (t.notes || (t.notes = [], 
   t.notes[0] = {}, t.nhd = 0), t.notes[0].pit = n);
  }
  s && (s.beam_end = !0);
 }
 function set_rb(e) {
  for (var t, n, r, i = e.sym; i; ) if (i.type == BAR && i.rbstart) {
   if (n = cfmt.rbmax, i.text && "1" == i.text[0]) {
    for (r = 0, t = null, i = i.next; i; i = i.next) if (i.type == BAR) {
     if (r++, i.rbstop) {
      r <= cfmt.rbmax && (n = r, t = null);
      break;
     }
     r == cfmt.rbmin && (t = i);
    }
    t && (t.rbstop = 1, n = cfmt.rbmin);
   }
   for (;i; ) {
    if (2 != i.rbstart) {
     if (!(i = i.next)) break;
     if (2 != i.rbstart) {
      if (!(i = i.next)) break;
      if (2 != i.rbstart) break;
     }
    }
    for (r = 0, t = null, i = i.next; i; i = i.next) if (i.type == BAR) {
     if (r++, i.rbstop) break;
     r == n && (i.rbstop = 1);
    }
   }
  } else i = i.next;
 }
 const delpit = [ 0, -7, -14, 0 ];
 function set_global() {
  var e, t, n, r, i = cur_sy;
  for (t = i.nstaff; i = i.next; ) i.nstaff > t && (t = i.nstaff);
  for (nstaff = t, r = voice_tb.length, n = 0; n < r; n++) set_words(e = voice_tb[n]), 
  e.second || e.norepbra || set_rb(e);
  set_float(), set_clefs(), set_pitch(null);
 }
 function set_indent() {
  var e, t, n, r, i, s, a, o, c = voice_tb.length, u = 0;
  for (t = 0; t < c; t++) if (r = voice_tb[t], !(cur_sy.voices[t].range < 0) && (e = cur_sy.voices[t].st, 
  !cur_sy.staves[e].empty && (i = r.new_name ? r.nm : r.snm))) for (o || (o = get_font("voice"), 
  gene.curfont = gene.deffont = o), s = 0; (n = strw((a = i.indexOf("\\n", s)) < 0 ? i.slice(s) : i.slice(s, a))) > u && (u = n), 
  !(a < 0); ) s = a + 1;
  if (0 != u) {
   for (n = 0, e = 0; e <= cur_sy.nstaff; e++) {
    if (cur_sy.staves[e].flags & (OPEN_BRACE2 | OPEN_BRACKET2)) {
     n = 20;
     break;
    }
    cur_sy.staves[e].flags & (OPEN_BRACE | OPEN_BRACKET) && 0 == n && (n = 10);
   }
   u += 4 * cwid(" ") * o.swfac + n;
  }
  return 2 & insert_meter && (u += cfmt.indent), u;
 }
 function set_beams(e) {
  var t, n, r, i, s, a, o = -1, c = 0;
  for (t = e; t; t = t.next) if (t.type == NOTE) {
   if (t.stem || 0 != (t.stem = t.multi)) t.beam_st && !t.beam_end && (i = !0); else if (i) t.stem = o; else if (t.beam_st && !t.beam_end) {
    var u = t.yav, l = 12;
    for (n = t.next; n; n = n.next) {
     if (n.type == NOTE) {
      if (n.multi) {
       u = l - n.multi;
       break;
      }
      u += n.yav, l += 12;
     }
     if (n.beam_end) break;
    }
    u < l ? o = 1 : (u > l || cfmt.bstemdown) && (o = -1), i = !0, t.stem = o;
   } else if (t.stem = t.yav >= 12 ? -1 : 1, 12 == t.yav && !cfmt.bstemdown) if (t.prev && t.prev.type != BAR) (a = t.yav - c) > -7 && a < 7 && (t.stem = o); else {
    for (n = t.next; n && (n.type != NOTE && n.type != BAR); n = n.next) ;
    n && n.type == NOTE && n.yav < 12 && (t.stem = 1);
   }
   if (t.beam_end && (i = !1), o = t.stem, c = t.yav, s) {
    for (r = s.extra; r; r = r.next) r.stem = -o;
    s.stem = -o, s = null;
   }
  } else {
   if (t.type != GRACE) continue;
   for (r = t.extra; r.type != NOTE; ) r = r.next;
   if (2 == r.stem) {
    s = t;
    continue;
   }
   for (t.stem || 0 != (t.stem = t.multi) || (t.stem = 1); r; r = r.next) r.stem = t.stem, 
   r.multi = t.multi;
  }
 }
 function same_head(e, t) {
  var n, r, i, s, a, o, c, u, l, f, p;
  if (e.shiftunison && e.shiftunison >= 3) return !1;
  if ((i = e.dur) >= BASE_LEN) return !1;
  if ((s = t.dur) >= BASE_LEN) return !1;
  if (e.stemless && t.stemless) return !1;
  if (e.dots != t.dots && (e.shiftunison && 1 & e.shiftunison || e.dots * t.dots != 0)) return !1;
  if (e.stem * t.stem > 0) return !1;
  if (n = r = 0, e.notes[0].pit > t.notes[0].pit) {
   if (e.stem < 0) return !1;
   for (;t.notes[r].pit != e.notes[0].pit; ) if (++r > t.nhd) return !1;
  } else if (e.notes[0].pit < t.notes[0].pit) {
   if (t.stem < 0) return !1;
   for (;t.notes[0].pit != e.notes[n].pit; ) if (++n > e.nhd) return !1;
  }
  if (t.notes[r].acc != e.notes[n].acc) return !1;
  o = n, u = r, f = e.notes[n].shhd, p = t.notes[r].shhd;
  do {
   if (r++, ++n > e.nhd) break;
   if (r > t.nhd) break;
   if (t.notes[r].acc != e.notes[n].acc) return !1;
   f < e.notes[n].shhd && (f = e.notes[n].shhd), p < t.notes[r].shhd && (p = t.notes[r].shhd);
  } while (t.notes[r].pit == e.notes[n].pit);
  if (n <= e.nhd) {
   if (r <= t.nhd) return !1;
   if (t.stem > 0) return !1;
  } else if (r <= t.nhd && e.stem > 0) return !1;
  if (c = n, l = r, a = 0, i != s) if (i < s && (i = s, s = e.dur), i < BASE_LEN / 2) t.dots > 0 ? a = 2 : e.dots > 0 && (a = 1); else {
   if (!(s < BASE_LEN / 4)) return !1;
   if (e.shiftunison && 2 & e.shiftunison) return !1;
   a = t.dur >= BASE_LEN / 2 ? 2 : 1;
  }
  if (0 == a && (a = voice_tb[e.v].scale < voice_tb[t.v].scale ? 2 : 1), 1 == a) {
   for (t.nohdi1 = u, t.nohdi2 = l, r = u; r < l; r++) delete t.notes[r].acc;
   for (r = 0; r <= t.nhd; r++) t.notes[r].shhd += f;
  } else {
   for (e.nohdi1 = o, e.nohdi2 = c, n = o; n < c; n++) delete e.notes[n].acc;
   for (n = 0; n <= e.nhd; n++) e.notes[n].shhd += p;
  }
  return !0;
 }
 const w_note = {
  full: 3.5,
  empty: 3.7,
  oval: 5,
  square: 7
 };
 function unison_acc(e, t, n, r) {
  var i, s;
  if (t.notes[r].acc) {
   for (s = 2 * w_note[e.head] + e.xmx + t.notes[r].shac + 2, t.notes[r].micro && (s += 2), 
   e.dots && (s += 6), i = 0; i <= t.nhd; i++) t.notes[i].shhd += s, t.notes[i].shac -= s;
   t.xmx += s;
  } else {
   for (s = 2 * w_note[t.head] + t.xmx + e.notes[n].shac + 2, e.notes[n].micro && (s += 2), 
   t.dots && (s += 6), i = 0; i <= e.nhd; i++) e.notes[i].shhd += s, e.notes[i].shac -= s;
   e.xmx += s;
  }
 }
 const MAXPIT = 96;
 function set_left(e, t) {
  var n, r, i, s, a, o = w_note[e.head];
  for (r = 0; r < MAXPIT; r++) t[r] = -100;
  for (s = o, e.stem > 0 ? (s = -s, r = 2 * e.notes[0].pit, i = 2 * (Math.ceil((e.ymx - 2) / 3) + 18)) : (r = 2 * (Math.ceil((e.ymn + 2) / 3) + 18), 
  i = 2 * e.notes[e.nhd].pit), r < 0 && (r = 0); r < MAXPIT && r <= i; r++) t[r] = s;
  for (a = e.notes[e.stem > 0 ? 0 : e.nhd].shhd, n = 0; n <= e.nhd; n++) s = -e.notes[n].shhd + o + a, 
  (r = 2 * e.notes[n].pit) < 0 ? r = 0 : r >= MAXPIT - 1 && (r = MAXPIT - 2), s > t[r] && (t[r] = s), 
  "square" != e.head && (s -= 1), s > t[r - 1] && (t[r - 1] = s), s > t[r + 1] && (t[r + 1] = s);
 }
 function set_right(e, t) {
  var n, r, i, s, a, o, c, u = w_note[e.head];
  for (r = 0; r < MAXPIT; r++) t[r] = -100;
  for (a = e.nflags > 0 && e.beam_st && e.beam_end, o = u, e.stem < 0 ? (o = -o, r = 2 * (Math.ceil((e.ymn + 2) / 3) + 18), 
  i = 2 * e.notes[e.nhd].pit, s = r + 4) : (r = 2 * e.notes[0].pit, i = 2 * (Math.ceil((e.ymx - 2) / 3) + 18)), 
  r < 0 && (r = 0); r < MAXPIT && r < i; r++) t[r] = o;
  if (a) if (e.stem > 0) for (r = 0 == e.xmx ? 2 * e.notes[e.nhd].pit : 2 * e.notes[0].pit, 
  (r += 4) < 0 && (r = 0); r < MAXPIT && r <= i - 4; r++) t[r] = 11; else for ((r = s) < 0 && (r = 0); r < MAXPIT && r <= 2 * e.notes[0].pit - 4; r++) t[r] = 3.5;
  for (c = e.notes[e.stem > 0 ? 0 : e.nhd].shhd, n = 0; n <= e.nhd; n++) o = e.notes[n].shhd + u - c, 
  (r = 2 * e.notes[n].pit) < 0 ? r = 0 : r >= MAXPIT - 1 && (r = MAXPIT - 2), o > t[r] && (t[r] = o), 
  "square" != e.head && (o -= 1), o > t[r - 1] && (t[r - 1] = o), o > t[r + 1] && (t[r + 1] = o);
 }
 function set_overlap() {
  var e, t, n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g = [], y = [], _ = [], b = [];
  for (e = tsfirst; e; e = e.ts_next) if (e.type == NOTE && !e.invisible) {
   if (e.xstem && e.ts_prev.stem < 0) {
    for (n = e.ts_prev, a = 0; a <= n.nhd; a++) n.notes[a].shhd += 7, n.notes[a].shac -= 7;
    n.xmx += 7;
   }
   for (n = e; n = n.ts_next; ) {
    if (n.time != e.time) {
     n = null;
     break;
    }
    if (n.type == NOTE && !n.invisible && n.st == e.st) break;
   }
   if (n && (t = e, cur_sy.voices[t.v].range < cur_sy.voices[n.v].range ? n.dot_low = !0 : t.dot_low = !0, 
   !(t.ymn > n.ymx || t.ymx < n.ymn || same_head(t, n)))) {
    for (set_right(t, y), set_left(n, _), l = -10, r = 0; r < MAXPIT; r++) _[r] + y[r] > l && (l = _[r] + y[r]);
    if (!(l < -3 && (!t.dots || !n.dots || !n.dot_low || t.stem > 0 || n.stem < 0 || t.notes[t.nhd].pit + 2 != n.notes[0].pit || 1 & n.notes[0].pit))) {
     for (set_right(n, b), set_left(t, g), f = p = d = -100, r = 0; r < MAXPIT; r++) g[r] + b[r] > f && (f = g[r] + b[r]), 
     b[r] > d && (d = b[r]), y[r] > p && (p = y[r]);
     for (c = 0, i = t.nhd, s = n.nhd; ;) {
      switch (u = t.notes[i].pit - n.notes[s].pit) {
      case 0:
       if (t.notes[i].acc != n.notes[s].acc) {
        c = -1;
        break;
       }
       n.notes[s].acc && (n.notes[s].acc = 0), t.dots && n.dots && 1 & t.notes[i].pit && (c = 1);
       break;

      case -1:
       t.dots && n.dots && (1 & t.notes[i].pit ? (t.dot_low = !1, n.dot_low = !1) : (t.dot_low = !0, 
       n.dot_low = !0));
       break;

      case -2:
       if (t.dots && n.dots && !(1 & t.notes[i].pit)) {
        t.dot_low = !1, n.dot_low = !1;
        break;
       }
      }
      if (c < 0) break;
      if (u >= 0 && --i < 0) break;
      if (u <= 0 && --s < 0) break;
     }
     if (c < 0) unison_acc(t, n, i, s); else {
      if (o = 0, t.dots ? n.dots && (c || (o = 1)) : n.dots && f + p < l + d && (o = 1), 
      m = _, v = b, f + p < l + d && (t = n, n = e, l = f, m = g, v = y, d = p), (l += 3) < 0 && (l = 0), 
      a = t.stem >= 0 ? 0 : t.nhd, l += t.notes[a].shhd, a = n.stem >= 0 ? 0 : n.nhd, 
      l -= n.notes[a].shhd, t.dots) if (h = 7.7 + t.xmx + 3.5 * t.dots - 3.5 + 3, o) {
       if (h < l + d + n.xmx) {
        for (f = 0, i = 0; i <= t.nhd; i++) 1 & (r = t.notes[i].pit) || (t.dot_low ? r-- : r++), 
        (r *= 2) < 1 ? r = 1 : r >= MAXPIT - 1 && (r = MAXPIT - 2), v[r] > f && (f = v[r]), 
        v[r - 1] + 1 > f && (f = v[r - 1] = 1), v[r + 1] + 1 > f && (f = v[r + 1] + 1);
        f > 4.5 && 7.7 + t.xmx + 2 < l + f + n.xmx && (n.xmx = f + 3 - 7.7);
       }
      } else {
       for (f = -100, i = 0; i <= t.nhd; i++) 1 & (r = t.notes[i].pit) || (t.dot_low ? r-- : r++), 
       (r *= 2) < 1 ? r = 1 : r >= MAXPIT - 1 && (r = MAXPIT - 2), m[r] > f && (f = m[r]), 
       m[r - 1] + 1 > f && (f = m[r - 1] + 1), m[r + 1] + 1 > f && (f = m[r + 1] + 1);
       h + f + 2 > l && (l = h + f + 2);
      }
      for (a = n.nhd; a >= 0; a--) n.notes[a].shhd += l;
      n.xmx += l, o && (t.xmx = n.xmx);
     }
    }
   }
  }
 }
 function set_stems() {
  var e, t, n, r, i, s, a, o, c, u;
  for (e = tsfirst; e; e = e.ts_next) if (e.type == NOTE) {
   if (set_head_shift(e), o = e.nflags, e.beam_st && !e.beam_end) {
    for (e.feathered_beam && (o = ++e.nflags), t = e.next; t.type != NOTE || (e.feathered_beam && t.nflags++, 
    !t.beam_end); t = t.next) ;
    t.nflags > o && (o = t.nflags);
   } else if (!e.beam_st && e.beam_end) {
    for (t = e.prev; !t.beam_st; t = t.prev) ;
    t.nflags > o && (o = t.nflags);
   }
   switch (r = cfmt.stemheight, o) {
   case 2:
    r += 2;
    break;

   case 3:
    r += 5;
    break;

   case 4:
    r += 10;
    break;

   case 5:
    r += 16;
   }
   1 != (i = voice_tb[e.v].scale) && (r *= .5 * (i + 1)), s = 3 * (e.notes[0].pit - 18), 
   e.nhd > 0 ? (r -= 2, a = 3 * (e.notes[e.nhd].pit - 18)) : a = s, e.ntrem && (r += 2 * e.ntrem), 
   e.stemless ? (e.stem >= 0 ? (e.y = s, e.ys = a) : (e.ys = s, e.y = a), -4 == o && (s -= 6), 
   e.ymx = a + 4, e.ymn = s - 4) : e.stem >= 0 ? (o >= 2 && (r -= 1), e.notes[e.nhd].pit > 26 && (o <= 0 || !e.beam_st || !e.beam_end) && (r -= 2, 
   e.notes[e.nhd].pit > 28 && (r -= 2)), e.y = s, e.notes[0].ti1 && (s -= 3), e.ymn = s - 4, 
   e.ys = a + r, e.ys < 12 && (e.ys = 12), e.ymx = e.ys + 2.5) : (e.notes[0].pit < 18 && (o <= 0 || !e.beam_st || !e.beam_end) && (r -= 2, 
   e.notes[0].pit < 16 && (r -= 2)), e.ys = s - r, e.ys > 12 && (e.ys = 12), e.ymn = e.ys - 2.5, 
   e.y = a, e.notes[e.nhd].ti1 && (a += 3), e.ymx = a + 4);
  } else {
   if (e.type != GRACE) continue;
   for (c = u = 12, n = e.extra; n; n = n.next) n.type == NOTE && (r = GSTEM, n.nflags > 1 && (r += 1.2 * (n.nflags - 1)), 
   s = 3 * (n.notes[0].pit - 18), a = 3 * (n.notes[n.nhd].pit - 18), e.stem >= 0 ? (n.y = s, 
   n.ys = a + r, a = Math.round(n.ys)) : (n.y = a, n.ys = s - r, s = Math.round(n.ys)), 
   a += 2, (s -= 2) < c ? c = s : a > u && (u = a), n.ymx = a, n.ymn = s);
   e.ymx = u, e.ymn = c;
  }
 }
 function check_bar(e) {
  for (var t, n, r = voice_tb[e.v]; e.type == CLEF || e.type == KEY || e.type == METER; ) if (e.type == METER && e.time > r.sym.time && (insert_meter |= 1), 
  !(e = e.prev)) return;
  if (e.type == BAR && (void 0 != e.text && (r.bar_start = clone(e), r.bar_start.bar_type = "[", 
  delete e.text, delete e.a_gch), ":" != (t = e.bar_type) && ":" == t[t.length - 1])) {
   if (r.bar_start || (r.bar_start = clone(e)), ":" != t[0]) return r.bar_start.bar_type = t, 
   void (e.prev && e.prev.type == BAR ? unlksym(e) : e.bar_type = "|");
   if ("::" == t) return r.bar_start.bar_type = "|:", void (e.bar_type = ":|");
   for (n = 0; ":" == t[n]; ) n++;
   if (n < t.length) {
    for (e.bar_type = t.slice(0, n) + "|", n = t.length - 1; ":" == t[n]; ) n--;
    r.bar_start.bar_type = "|" + t.slice(n + 1);
   } else n = Math.floor(t.length / 2), e.bar_type = t.slice(0, n) + "|", r.bar_start.bar_type = "|" + t.slice(n);
  }
 }
 function sym_staff_move(e, t, n) {
  for (;t.st == e && t.type != CLEF && (t.st++, t.invisible = !0), (t = t.ts_next) != tsnext && !t.new_sy; ) ;
 }
 function set_piece() {
  var e, t, n, r, i, s = [], a = cur_sy;
  function o(e) {
   var t = staff_tb[e], n = a.staves[e];
   t || (t = staff_tb[e] = {}), t.y = 0, t.stafflines = n.stafflines, t.staffscale = n.staffscale, 
   s[e] = !0;
  }
  function c(e) {
   var t, n, r, i = e.staves.length;
   for (t = 0; t < i; t++) if (e.staves[t].flags & (OPEN_BRACE | OPEN_BRACE2)) {
    for (r = 0, n = t; t < i && (r |= e.staves[t].empty ? 1 : 2, !(e.staves[t].flags & (CLOSE_BRACE | CLOSE_BRACE2))); ) t++;
    if (3 == r) for (;n <= t; ) e.staves[n++].empty = !1;
   }
  }
  for (nstaff = r = a.nstaff, t = 0; t <= r; t++) o(t);
  for (e = tsfirst; e && !e.nl; e = e.ts_next) {
   if (e.new_sy) {
    for (t = 0; t <= nstaff; t++) a.staves[t].empty = s[t], s[t] = !0;
    for (c(a); t <= r; t++) a.staves[t].empty = !0;
    for ((r = (a = a.next).nstaff) > nstaff && (nstaff = r); t <= r; t++) o(t);
   }
   if (e.st > nstaff) unlksym(e); else if (s[e.st]) switch (e.type) {
   case GRACE:
    s[e.st] = !1;
    break;

   case NOTE:
   case REST:
   case SPACE:
   case MREST:
    cfmt.staffnonote > 1 ? s[e.st] = !1 : e.invisible || 0 == cfmt.staffnonote && e.type != NOTE || (s[e.st] = !1);
   }
  }
  for (tsnext = e, t = 0; t <= nstaff; t++) a.staves[t].empty = s[t];
  for (c(a), function() {
   var e, t, n, r;
   for (e = 0; e <= nstaff; e++) if (t = staff_tb[e], s[e]) t.botbar = t.topbar = 0; else {
    for (r = t.stafflines.length, t.topbar = 6 * (r - 1), n = 0; n < r - 1 && "." == t.stafflines[n]; n++) ;
    t.botline = t.botbar = 6 * n, n >= r - 2 && (t.botbar -= 6, t.topbar += 6);
   }
  }(), a = cur_sy, t = 0; t < nstaff; t++) a.staves[t].empty && sym_staff_move(t, tsfirst, a);
  if (a.next) for (e = tsfirst; e && !e.nl; e = e.ts_next) if (e.new_sy) {
   for (a = a.next, t = 0; t < a.nstaff; t++) a.staves[t].empty && sym_staff_move(t, e, a);
   if (!a.next) break;
  }
  if (s[nstaff] && (staff_tb[nstaff].topbar = 0), init_music_line(), s[nstaff] || (insert_meter &= -2), 
  tsnext) for ((e = tsnext).nl = !1, (e = e.ts_prev).ts_next = null, i = voice_tb.length, 
  n = 0; n < i; n++) {
   if (voice_tb[n].sym && voice_tb[n].sym.time <= tsnext.time) {
    for (e = tsnext.ts_prev; e; e = e.ts_prev) if (e.v == n) {
     voice_tb[n].s_next = e.next, e.next = null, check_bar(e);
     break;
    }
    if (e) continue;
   }
   voice_tb[n].s_next = voice_tb[n].sym, voice_tb[n].sym = null;
  }
 }
 function set_sym_glue(e) {
  for (var t, n, r, i, s, a, o, c = tsfirst, u = 0, l = 0, f = 0; c.type == GRACE && (o = !0), 
  c.seqst && (t = c.space, u += c.shrink, t < c.shrink && (t = c.shrink), l += t), 
  c.ts_next; ) c = c.ts_next;
  for (f = l, cfmt.stretchstaff && (f *= 1.8), 1, tsnext ? l >= e ? beta_last = 0 : (beta_last = (e - l) / (f - l)) > 1 && (cfmt.stretchstaff ? cfmt.linewarn && error(0, c, "Line underfull (" + (1 * f + 0 * l).toFixed(2) + "pt of " + e.toFixed(2) + "pt)") : (e = l, 
  beta_last = 0)) : l < e && (r = (e - l) / (f - l)) >= beta_last && (r = beta_last * f + (1 - beta_last) * l) < e * (1 - cfmt.stretchlast) && (e = r), 
  a = e / l, l = f = 0, c = tsfirst; c.seqst && (t = c.shrink, 0 != c.space && (t < c.space * a && (t = c.space * a), 
  f += c.space * a * 1.8), l += t, f += t, c.x = l, c.xmax = f), c.ts_next; ) c = c.ts_next;
  switch (c.type) {
  case BAR:
  case FORMAT:
   break;

  case CUSTOS:
   l += c.wr, u += c.wr, f += c.wr;
   break;

  default:
   for (i = c.wr; !c.seqst; ) (c = c.ts_prev).wr > i && (i = c.wr);
   u += i + 3, tsnext && .8 * tsnext.space > c.wr + 4 ? (l += .8 * tsnext.space * a, 
   f += .8 * tsnext.space * a * 1.8) : (l += i + 4, f += i + 4);
  }
  if (l >= e ? (r = 0, l == u ? n = 1 : (n = (l - e) / (l - u)) > 1 && error(0, c, "Line too much shrunk " + u.toFixed(2) + " " + l.toFixed(2) + " " + e.toFixed(2)), 
  realwidth = u * n + l * (1 - n)) : (n = 0, (r = f > l ? (e - l) / (f - l) : 1) > 1 && (cfmt.stretchstaff || (r = 0)), 
  realwidth = f * r + l * (1 - r)), c = tsfirst, 0 != n) if (n < 1) for (l = u = 0; c; c = c.ts_next) c.seqst && (l = (u += c.shrink * n) + c.x * (1 - n)), 
  c.x = l; else for (n = realwidth / l, l = 0; c; c = c.ts_next) c.seqst && (l = c.x * n), 
  c.x = l; else for (l = 0; c; c = c.ts_next) c.seqst && (l = c.xmax * r + c.x * (1 - r)), 
  c.x = l;
  if (o) for (c = tsfirst; c; c = c.ts_next) if (c.type == GRACE) for (l = c.x - c.wl + Number(cfmt.gracespace[0]), 
  s = c.extra; s; s = s.next) s.type == NOTE && (s.x += l);
 }
 function new_music_line() {
  var e, t, n, r = voice_tb.length;
  for (n = 0; n < r; n++) t = (e = voice_tb[n]).s_next, e.sym = t, t && (t.prev = null);
 }
 function gen_init() {
  for (var e = tsfirst; e; e = e.ts_next) {
   switch (e.new_sy && (e.new_sy = !1, cur_sy = cur_sy.next), e.type) {
   case CLEF:
   case KEY:
   case METER:
    continue;

   case FORMAT:
    if (!e.extra && (unlksym(e), !tsfirst)) return;
   }
   return;
  }
  tsfirst = null;
 }
 function output_music() {
  var e, t, n, r, i;
  if (user.get_abcmodel && user.get_abcmodel(tsfirst, voice_tb, anno_type, info), 
  user.img_out && (gen_init(), tsfirst)) {
   for (set_global(), voice_tb.length > 1 && (combine_voices(), set_stem_dir()), t = 0; t < voice_tb.length; t++) set_beams(voice_tb[t].sym);
   for (set_stems(), voice_tb.length > 1 && (set_rest_offset(), set_overlap()), set_acc_shft(), 
   set_allsymwidth(null), r = set_indent(), cfmt.singleline ? (n = get_ck_width() + get_width(tsfirst, null, r), 
   cfmt.pagewidth = (n + cfmt.leftmargin + cfmt.rightmargin) * cfmt.scale) : ((n = (cfmt.pagewidth - cfmt.leftmargin - cfmt.rightmargin) / cfmt.scale) < 50 && (error(1, null, "Bad page width " + n), 
   n = 10 * CM), cut_tune(n, r)), beta_last = 0; set_piece(), set_sym_glue(n - (r = set_indent())), 
   0 != r && (posx += r), e = output, output = void 0, draw_sym_near(), output = e, 
   i = set_staff(), delayed_update(), draw_systems(r), draw_all_sym(), draw_all_deco(), 
   set_sscale(-1), vskip(i), 0 != r && (posx -= r, insert_meter &= -3), tsfirst = tsnext, 
   tsnext && (gen_init(), tsfirst); ) blk_out(), tsfirst.ts_prev = null, new_music_line();
  }
 }
 function reset_gen() {
  insert_meter = cfmt.writefields.indexOf("M") >= 0 ? 3 : 2;
 }
 var gchord, a_dcn, multicol, maps;
 const not_ascii = "Not an ASCII character";
 function new_clef(e) {
  var t = {
   type: CLEF,
   ctx: parse.ctx,
   istart: parse.istart,
   iend: parse.iend,
   clef_line: 2,
   clef_type: "t"
  }, n = 1;
  switch (e[0]) {
  case '"':
   n = e.indexOf('"'), t.clef_name = e.slice(1, n), n++;
   break;

  case "a":
   if ("u" == e[1]) {
    t.clef_type = "a", t.clef_auto = !0, n = 4;
    break;
   }
   n = 4;

  case "C":
   t.clef_type = "c", t.clef_line = 3;
   break;

  case "b":
   n = 4;

  case "F":
   t.clef_type = "b", t.clef_line = 4;
   break;

  case "n":
   n = 4, t.invisible = !0;
   break;

  case "t":
   if ("e" == e[1]) {
    t.clef_type = "c", t.clef_line = 4;
    break;
   }
   n = 6;

  case "G":
   break;

  case "p":
   n = 4;

  case "P":
   t.clef_type = "p", t.clef_line = 3;
   break;

  default:
   return parse.line.error("unknown clef '" + e + "'"), void delete t;
  }
  if (e[n] >= "1" && e[n] <= "9" && (t.clef_line = Number(e[n]), n++), "8" != e[n + 1]) return t;
  switch (e[n]) {
  case "^":
   t.clef_oct_transp = !0;

  case "+":
   t.clef_octave = 7;
   break;

  case "_":
   t.clef_oct_transp = !0;

  case "-":
   t.clef_octave = -7;
   break;

  default:
   return t;
  }
  return t;
 }
 var pit_st = [ 0, 2, 4, 5, 7, 9, 11 ];
 function get_transp(e) {
  var t, n, r, s = [];
  if ("0" == e[0]) return 0;
  if ("123456789-+".indexOf(e[0]) >= 0) {
   if (t = 3 * parseInt(e), isNaN(t) || t < -108 || t > 108) return void parse.line.error("Bad %%transpose value");
   switch (e[e.length - 1]) {
   default:
    return t;

   case "#":
    t++;
    break;

   case "b":
    t += 2;
   }
   return t > 0 ? t : t - 3;
  }
  for ((n = new scanBuf()).buffer = e, n.index = 0, n.ctx = parse.ctx, i = 0; i < 2; i++) {
   if (!(r = parse_acc_pit(n))) return void parse.line.error("Bad %%transpose value");
   r.pit += 124, t = 12 * Math.floor(r.pit / 7) + pit_st[r.pit % 7], r.acc && 3 != r.acc && (t += r.acc), 
   s[i] = t;
  }
  switch (t = 3 * (s[1] - s[0]), r.acc) {
  default:
   return t;

  case 2:
  case 1:
   t++;
   break;

  case -1:
  case -2:
   t += 2;
  }
  return t > 0 ? t : t - 3;
 }
 function set_linebreak(e) {
  var t, n;
  for (t = 0; t < 128; t++) if ("\n" == char_tb[t]) {
   char_tb[t] = nil;
   break;
  }
  for (e = e.split(/\s+/), t = 0; t < e.length; t++) {
   switch (n = e[t]) {
   case "!":
   case "$":
   case "*":
   case ";":
   case "?":
   case "@":
    break;

   case "<none>":
    continue;

   case "<EOL>":
    n = "\n";
    break;

   default:
    parse.line.error("Bad value '" + n + "' in %%linebreak - ignored");
    continue;
   }
   char_tb[n.charCodeAt(0)] = "\n";
  }
 }
 function set_user(e) {
  var t, n, r, i = e[0], s = "!", a = e.indexOf("!");
  if (a < 0) {
   if ((a = e.indexOf('"')) < 0) return void parse.line.error('Lack of starting ! or " in U:/%%user');
   s = '"';
  }
  if ((t = e.indexOf(s, a + 1)) < 0) parse.line.error("Lack of ending " + s + " in U:/%%user"); else if ("\\" == i && "t" == (i = e[1]) && (i = "\t"), 
  (n = i.charCodeAt(0)) >= 128) parse.line.error(not_ascii); else {
   switch (char_tb[n][0]) {
   case "0":
   case "d":
   case "i":
   case " ":
    break;

   case '"':
   case "!":
    if (char_tb[n].length > 1) break;

   default:
    return void parse.line.error("Bad user character '" + i + "'");
   }
   switch (r = e.slice(a, t + 1)) {
   case "!beambreak!":
    r = " ";
    break;

   case "!ignore!":
    r = "i";
    break;

   case "!nil!":
   case "!none!":
    r = "d";
   }
   char_tb[n] = r;
  }
 }
 function get_st_lines(e) {
  var t, n;
  if ("|" == e[0] || "." == e[0]) return e;
  switch (t = parseInt(e)) {
  case 0:
   return "...";

  case 1:
   return "..|";

  case 2:
   return ".||";

  case 3:
   return "|||.";
  }
  if (!(isNaN(t) || t < 0 || t > 16)) {
   for (n = "|"; --t > 0; ) n += "|";
   return n;
  }
 }
 function new_block(e) {
  2 == parse.state && goto_tune();
  var t = {
   type: BLOCK,
   subtype: e
  };
  return (curvoice = voice_tb[0]).last_sym && (curvoice.last_sym.eoln = !0), sym_link(t), 
  t;
 }
 function do_pscom(e) {
  var t, n, r, i, s, a, o, c = !1;
  if (e.match(/ lock$/) && (c = !0, e = e.slice(0, -5).trim()), i = e.match(/(\w|-)+/)) {
   switch (i = i[0], s = e.replace(i, "").trim(), i) {
   case "break":
    return;

   case "center":
    return parse.state >= 2 ? void ((r = new_block("center")).text = cnv_escape(s)) : void write_text(cnv_escape(s), "c");

   case "clef":
    return void (parse.state >= 2 && (2 == parse.state && goto_tune(), (r = new_clef(s)) && get_clef(r)));

   case "clip":
    return;

   case "deco":
    return void deco_add(s);

   case "linebreak":
    return void set_linebreak(s);

   case "map":
    return void get_map(s);

   case "maxsysstaffsep":
    if (3 == parse.state) return void (par_sy.voices[curvoice.v].maxsep = get_unit(s));
    break;

   case "multicol":
    switch (generate(), s) {
    case "start":
     blk_out(), multicol = {
      posy: posy,
      maxy: posy,
      lmarg: cfmt.leftmargin,
      rmarg: cfmt.rightmargin,
      state: parse.state
     };
     break;

    case "new":
     if (!multicol) {
      parse.line.error("%%multicol new without start");
      break;
     }
     posy > multicol.maxy && (multicol.maxy = posy), cfmt.leftmargin = multicol.lmarg, 
     posx = cfmt.leftmargin / cfmt.scale, cfmt.rightmargin = multicol.rmarg, posy = multicol.posy;
     break;

    case "end":
     if (!multicol) {
      parse.line.error("%%multicol end without start");
      break;
     }
     cfmt.leftmargin = multicol.lmarg, posx = cfmt.leftmargin / cfmt.scale, cfmt.rightmargin = multicol.rmarg, 
     posy < multicol.maxy && (posy = multicol.maxy), multicol = void 0, blk_out();
     break;

    default:
     parse.line.error("Unknown keyword '" + s + "' in %%multicol");
    }
    return;

   case "repbra":
    return void (parse.state >= 2 && (2 == parse.state && goto_tune(), curvoice.norepbra = !get_bool(s)));

   case "repeat":
    if (3 != parse.state) {
     if (2 != parse.state) return;
     goto_tune();
    }
    if (!curvoice.last_sym) return void parse.line.error("%%repeat cannot start a tune");
    if (s.length) {
     var u = s.split(/\s+/);
     if (a = parseInt(u[0]), o = parseInt(u[1]), isNaN(a) || a < 1 || curvoice.last_sym.type == BAR && a > 2) return void parse.line.error("Incorrect 1st value in %%repeat");
     if (isNaN(o)) o = 1; else if (o < 1) return void parse.line.error("Incorrect 2nd value in repeat");
    } else a = 1, o = 1;
    return r = {
     type: FORMAT,
     fmt_type: "repeat",
     repeat_k: o
    }, curvoice.last_sym.type == BAR ? r.repeat_n = a : r.repeat_n = -a, void sym_link(r);

   case "sep":
    var l, f;
    if (lwidth = cfmt.pagewidth - cfmt.leftmargin - cfmt.rightmargin, t = l = f = 0, 
    s) {
     var p = s.split(/\s+/);
     t = get_unit(p[0]), p[1] && (l = get_unit(p[1]), p[2] && (f = get_unit(p[2])));
    }
    return t < 1 && (t = 14), l < 1 && (l = t), f < 1 && (f = 90), parse.state >= 2 ? ((r = new_block("sep")).x = (lwidth - f) / 2 / cfmt.scale, 
    r.l = f / cfmt.scale, r.sk1 = t, void (r.sk2 = l)) : (vskip(t), output.push('<path class="stroke"\n\td="M'), 
    out_sxsy((lwidth - f) / 2 / cfmt.scale, " ", 0), output.push("h" + (f / cfmt.scale).toFixed(2) + '"/>\n'), 
    vskip(l), void blk_out());

   case "setbarnb":
    return n = parseInt(s), isNaN(n) ? void parse.line.error("Bad %%setbarnb value") : void (parse.state >= 2 ? glovar.new_nbar = n : cfmt.measurefirst = n);

   case "staff":
    if (3 != parse.state) {
     if (2 != parse.state) return;
     goto_tune();
    }
    return n = parseInt(s), isNaN(n) ? void parse.line.error("Bad %%staff value '" + s + "'") : (d = "+" == s[0] || "-" == s[0] ? curvoice.cst + n : n - 1) < 0 || d > nstaff ? void parse.line.error("Bad %%staff number " + d + " cur " + curvoice.cst + " max " + nstaff) : (delete curvoice.floating, 
    void (curvoice.cst = d));
    var d;

   case "staffbreak":
    if (3 != parse.state) {
     if (2 != parse.state) return;
     goto_tune();
    }
    return r = {
     type: STBRK
    }, s[0] >= "0" && s[0] <= "9" ? (r.xmx = get_unit(s), "f" == s[s.length - 1] && (r.stbrk_forced = !0)) : (r.xmx = 14, 
    "f" == s[0] && (r.stbrk_forced = !0)), void sym_link(r);

   case "stafflines":
    return (n = get_st_lines(s)) ? curvoice ? void (curvoice.stafflines = n) : void (glovar.stafflines = n) : void parse.line.error("Bad %%stafflines value");

   case "staffscale":
    return n = parseFloat(s), isNaN(n) || n < .3 || n > 2 ? void parse.line.error("Bad %%staffscale value") : curvoice ? void (curvoice.staffscale = n) : void (glovar.staffscale = n);

   case "staves":
   case "score":
    if (0 == parse.state) return;
    return void get_staves(i, s);

   case "sysstaffsep":
    if (3 == parse.state) return void (par_sy.voices[curvoice.v].sep = get_unit(s));
    break;

   case "text":
    return parse.state >= 2 ? ((r = new_block("text")).text = cnv_escape(s), void (r.opt = cfmt.textoption)) : void write_text(cnv_escape(s), cfmt.textoption);

   case "transpose":
    if (2 == parse.state && goto_tune(), n = get_transp(s), !curvoice) return void (0 == parse.state ? cfmt.transpose = n : cfmt.transpose += n);
    if (curvoice.ckey.k_bagpipe || curvoice.ckey.k_drum) return;
    if (curvoice.transpose = n + cfmt.transpose, !(r = curvoice.sym)) return curvoice.key = clone(curvoice.okey), 
    key_transp(curvoice.key, curvoice.transpose), curvoice.ckey = clone(curvoice.key), 
    void (curvoice.key.k_none && (curvoice.key.k_sf = 0));
    for (;r.type != KEY; ) if (r.time != curvoice.time || !(r = r.prev)) {
     (r = sym_add(curvoice)).type = KEY, r.k_old_sf = curvoice.key.k_sf;
     break;
    }
    return r.k_sf = curvoice.okey.k_sf, curvoice.okey.k_none && (r.k_none = curvoice.okey.k_none), 
    curvoice.okey.k_a_acc && (r.k_a_acc = curvoice.okey.k_a_acc), key_transp(r, curvoice.transpose), 
    curvoice.ckey = clone(r), void (curvoice.key.k_none && (r.k_sf = 0));

   case "tune":
    return;

   case "user":
    return void set_user(s);

   case "voicecolor":
    if (parse.state < 2) return;
    return 2 == parse.state && goto_tune(), r = {
     type: FORMAT,
     fmt_type: "voicecolor"
    }, "#000000" != s && "black" != s && (r.color = s), void sym_link(r);

   case "vskip":
    return (n = get_unit(s)) < 0 ? void parse.line.error("%%vskip cannot be negative") : parse.state >= 2 ? void ((r = new_block("vskip")).sk = n) : (vskip(n), 
    void blk_out());

   case "newpage":
   case "leftmargin":
   case "rightmargin":
   case "scale":
    return 2 == parse.state && goto_tune(), 3 == parse.state && (generate(), blk_out()), 
    "newpage" == i ? void (block.newpage = !0) : (set_format(i, s, c), void (posx = cfmt.leftmargin / cfmt.scale));
   }
   set_format(i, s, c);
  }
 }
 function do_begin_end(type, opt, text) {
  var i, j, action, s;
  switch (type) {
  default:
  case "ps":
   wpsobj && (wpsobj.parse(text), output.push(svgbuf));
   break;

  case "js":
   eval(text);
   break;

  case "ml":
   parse.state >= 2 ? (s = new_block("ml"), s.text = text) : (svg_flush(), user.img_out(text));
   break;

  case "svg":
   for (j = 0; ;) if (i = text.indexOf('<style type="text/css">\n', j), i >= 0) {
    if (j = text.indexOf("</style>", i), j < 0) {
     parse.line.error("No </style> in %%beginsvg sequence");
     break;
    }
    style += text.slice(i + 23, j);
   } else {
    if (i = text.indexOf("<defs>", j), !(i >= 0)) break;
    if (j = text.indexOf("</defs>", i), j < 0) {
     parse.line.error("No </defs> in %%beginsvg sequence");
     break;
    }
    defs_add(text.slice(i + 6, j));
   }
   break;

  case "text":
   if (action = get_textopt(opt), parse.state >= 2) {
    s = new_block("text"), s.text = text, s.opt = get_textopt(opt);
    break;
   }
   write_text(text, action);
  }
 }
 function next_word(e, t) {
  for (;e[t] && " " != e[t]; ) t++;
  for (;" " == e[t]; ) t++;
  return t;
 }
 function parse_kv_args(e) {
  var t, n, r = curvoice;
  for (r || (r = parse.voice_param = {}); n = e.shift(); ) switch (n) {
  case "clef=":
   t = new_clef(e.shift());
   break;

  case "octave=":
   r.octave = Number(e.shift());
   break;

  case "map=":
   r.map = e.shift();
   break;

  case "cue=":
   r.scale = "on" == e.shift() ? .7 : 1;
   break;

  case "stafflines=":
   if (!(n = get_st_lines(e.shift()))) {
    parse.line.error("Bad stafflines= value");
    break;
   }
   r.stafflines = n;
   break;

  default:
   switch (n.slice(0, 4)) {
   case "treb":
   case "bass":
   case "alto":
   case "teno":
   case "perc":
    t = new_clef(n);
    break;

   default:
    "GFC".indexOf(n[0]) >= 0 ? t = new_clef(n) : "=" == n[n.length - 1] && e.shift();
   }
  }
  return t;
 }
 function new_key(e) {
  var t, n, r, i, s = {
   type: KEY,
   ctx: parse.ctx,
   istart: parse.istart,
   iend: parse.iend,
   k_delta: 0
  };
  if (!e.length) return [ s, null ];
  switch (t = 1, e[0]) {
  case "A":
   s.k_sf = 3;
   break;

  case "B":
   s.k_sf = 5;
   break;

  case "C":
   s.k_sf = 0;
   break;

  case "D":
   s.k_sf = 2;
   break;

  case "E":
   s.k_sf = 4;
   break;

  case "F":
   s.k_sf = -1;
   break;

  case "G":
   s.k_sf = 1;
   break;

  case "H":
   switch (e[1]) {
   case "P":
    s.k_bagpipe = "P", t++;
    break;

   case "p":
    s.k_bagpipe = "p", s.k_sf = 2, t++;
    break;

   default:
    parse.line.error("Unknown bagpipe-like key");
   }
   n = !0;
   break;

  case "P":
   s.k_drum = !0, n = !0;
   break;

  case "n":
   "none" == e.slice(0, 4) && (s.k_sf = 0, s.k_none = !0, t = 4);

  default:
   n = !0;
  }
  if (!n) {
   switch (e[t]) {
   case "#":
    s.k_sf += 7, t++;
    break;

   case "b":
    s.k_sf -= 7, t++;
   }
   switch ((e = e.slice(t).trim()).slice(0, 3).toLowerCase()) {
   case "aeo":
   case "m":
   case "min":
    s.k_sf -= 3;
    break;

   case "dor":
    s.k_sf -= 2;
    break;

   case "ion":
   case "maj":
    break;

   case "loc":
    s.k_sf -= 5;
    break;

   case "lyd":
    s.k_sf += 1;
    break;

   case "mix":
    s.k_sf -= 1;
    break;

   case "phr":
    s.k_sf -= 4;
    break;

   default:
    if ("m" == e[0] && (" " == e[1] || "\t" == e[1] || "\n" == e[1])) {
     s.k_sf -= 3;
     break;
    }
    n = !0;
   }
   if (n || (e = e.replace(/\w+\s*/, "")), "exp " == e.slice(0, 4) && ((e = e.replace(/\w+\s*/, "")) || parse.line.error("no accidental after 'exp'"), 
   s.k_exp = !0), "^" == (r = e[0]) || "_" == r || "=" == r) {
    s.k_a_acc = [], (i = new scanBuf()).buffer = e, i.index = 0, i.ctx = parse.ctx;
    do {
     var a = parse_acc_pit(i);
     if (!a) return [ s, null ];
     var o = {
      pit: a.pit,
      acc: a.acc
     };
     for (s.k_a_acc.push(o), r = i.char(); " " == r; ) r = i.next_char();
    } while ("^" == r || "_" == r || "=" == r);
    e = e.slice(i.index);
   } else s.k_exp && "none" == e.slice(0, 4) && (s.k_sf = 0, e = e.replace(/\w+\s*/, ""));
  }
  return s.k_delta = (cgd2cde[(s.k_sf + 7) % 7] + 14) % 7, e ? [ s, parse_kv_args(info_split(e, 0)) ] : [ s, null ];
 }
 function get_map(e) {
  if (e) {
   var t, n, r, i, s, a, o = info_split(e, 2);
   if (o.length < 3) parse.line.error("Not enough parameters"); else {
    if ("octave," == (a = o[1]).slice(0, 7) || "key," == a.slice(0, 4)) "k" == (a = a.replace(/[,']+$/m, "").toLowerCase())[0] && (a = a.replace(/[_=^]+/, "")); else if ("*" == a[0] || "all" == a.slice(0, 3)) a = "all"; else {
     if ((s = new scanBuf()).buffer = o[1], s.index = 0, s.ctx = parse.ctx, !(n = parse_acc_pit(s))) return void parse.line.error("Bad note in %%map");
     for (a = "abcdefg"[(n.pit + 77) % 7], n.acc && (a = [ "__", "_", "", "^", "^^", "=" ][n.acc + 2] + a), 
     t = n.pit; t >= 28; t -= 7) a += "'";
     for (t = n.pit; t < 21; t += 7) a += ",";
    }
    if (maps || (maps = {}), (r = maps[o[0]]) || (maps[o[0]] = r = {}), (i = r[a]) || (r[a] = i = []), 
    o[2]) {
     if (t = 2, o[2].indexOf("=") < 0) {
      if ("*" != o[2][0] && ((s = new scanBuf()).buffer = o[2], s.index = 0, s.ctx = parse.ctx, 
      i[1] = parse_acc_pit(s)), !o[3]) return;
      t++, o[3].indexOf("=") < 0 && (i[0] = o[3].split(","), t++);
     }
     for (;t < o.length; t++) switch (o[t]) {
     case "heads=":
      i[0] = o[++t].split(",");
      break;

     case "print=":
      (s = new scanBuf()).buffer = o[++t], s.index = 0, s.ctx = parse.ctx, i[1] = parse_acc_pit(s);
      break;

     case "color=":
      i[2] = o[++t];
     }
    }
   }
  }
 }
 function new_meter(text) {
  var s = {
   type: METER,
   ctx: parse.ctx,
   istart: parse.istart,
   iend: parse.iend,
   a_meter: []
  }, meter = {}, val, v, m1 = 0, m2, i = 0, j, wmeasure, p = text, in_parenth;
  if (0 == p.indexOf("none")) i = 4, wmeasure = 1; else for (wmeasure = 0; i < text.length && "=" != p[i]; ) {
   switch (p[i]) {
   case "C":
    meter.top = p[i++], "|" == p[i] && (meter.top += p[i++]), m1 = 4, m2 = 4;
    break;

   case "c":
   case "o":
    m1 = "c" == p[i] ? 4 : 3, m2 = 4, meter.top = p[i++], "." == p[i] && (meter.top += p[i++]);
    break;

   case "(":
    for ("(" == p[i + 1] && (in_parenth = !0, meter.top = p[i++], s.a_meter.push(meter), 
    meter = {}), j = i + 1; j < text.length && ")" != p[j] && "/" != p[j]; ) j++;
    if (")" == p[j] && "/" == p[j + 1]) {
     i++;
     continue;
    }

   case ")":
    in_parenth = "(" == p[i], meter.top = p[i++], s.a_meter.push(meter), meter = {};
    continue;

   default:
    if (p[i] <= "0" || p[i] > "9") return void parse.line.error("Bad char '" + p[i] + "' in M:");
    for (m2 = 2, meter.top = p[i++]; ;) {
     for (;p[i] >= "0" && p[i] <= "9"; ) meter.top += p[i++];
     if (")" == p[i]) {
      if ("/" != p[i + 1]) break;
      i++;
     }
     if ("/" == p[i]) {
      if (i++, p[i] <= "0" || p[i] > "9") return void parse.line.error("Bad char '" + p[i] + "' in M:");
      for (meter.bot = p[i++]; p[i] >= "0" && p[i] <= "9"; ) meter.bot += p[i++];
      break;
     }
     if (" " != p[i] && "+" != p[i]) break;
     if (i >= text.length || "(" == p[i + 1]) break;
     meter.top += p[i++];
    }
    m1 = parseInt(meter.top);
   }
   for (in_parenth || (meter.bot && (m2 = parseInt(meter.bot)), wmeasure += m1 * BASE_LEN / m2), 
   s.a_meter.push(meter), meter = {}; " " == p[i]; ) i++;
   "+" == p[i] && (meter.top = p[i++], s.a_meter.push(meter), meter = {});
  }
  if ("=" == p[i]) {
   if (val = p.substring(++i), !val.match(/^(\d|\/)+$/)) return void parse.line.error("Bad duration '" + val + "' in M:");
   wmeasure = BASE_LEN * eval(val);
  }
  if (s.wmeasure = wmeasure, 3 != parse.state) {
   if (info.M = text, glovar.meter = s, parse.state >= 1) for (glovar.ulen || (wmeasure <= 1 || wmeasure >= 3 * BASE_LEN / 4 ? glovar.ulen = BASE_LEN / 8 : glovar.ulen = BASE_LEN / 16), 
   v = 0; v < voice_tb.length; v++) voice_tb[v].meter = s, voice_tb[v].wmeasure = wmeasure;
  } else curvoice.wmeasure = wmeasure, is_voice_sig() ? (curvoice.meter = s, reset_gen()) : sym_link(s);
 }
 function new_tempo(e) {
  if (!(cfmt.writefields.indexOf("Q") < 0)) {
   var t, n, r, i = 0, s = {
    type: TEMPO,
    ctx: parse.ctx,
    istart: parse.istrt,
    iend: parse.iend
   };
   if ('"' == e[0]) {
    if ((i = e.indexOf('"', 1)) < 0) return void parse.line.error("Unterminated string in Q:");
    for (s.tempo_str1 = e.slice(1, i), i++; " " == e[i]; ) i++;
   }
   for ((r = new scanBuf()).buffer = e, r.index = i; !(void 0 == (t = r.char()) || t <= "0" || t > "9"); ) for (n = parse_dur(r), 
   s.tempo_notes || (s.tempo_notes = []), s.tempo_notes.push(BASE_LEN * n[0] / n[1]); " " == (t = r.char()); ) r.advance();
   if ("=" == t) {
    for (t = r.next_char(); " " == t; ) t = r.next_char();
    for (s.tempo_value = ""; t && '"' != t; ) s.tempo_value += t, t = r.next_char();
    s.tempo_value = s.tempo_value.replace(/\s+$/, "");
   }
   if ('"' == t) {
    if (r.advance(), (i = e.indexOf('"', r.index + 1)) < 0) return void parse.line.error("Unterminated string in Q:");
    s.tempo_str2 = e.slice(r.index, i);
   }
   if (3 != parse.state) {
    if (1 == parse.state) return info.Q = e, void (glovar.tempo = s);
    goto_tune();
   }
   curvoice.v == par_sy.top_voice && sym_link(s);
  }
 }
 function do_info(info_type, text) {
  switch (info_type) {
  case "I":
   do_pscom(text);
   break;

  case "L":
   if (text.match(/^\d*\/\d*$/)) text = BASE_LEN * eval(text); else {
    if ("auto" != text) {
     parse.line.error("Bad L: value");
     break;
    }
    text = -1;
   }
   2 == parse.state && goto_tune(), 3 != parse.state ? glovar.ulen = Number(text) : curvoice.ulen = Number(text);
   break;

  case "M":
   new_meter(text);
   break;

  case "U":
   set_user(text);
   break;

  case "P":
   if (0 == parse.state) break;
   if (1 == parse.state) {
    info.P = text;
    break;
   }
   if (2 == parse.state && goto_tune(), cfmt.writefields.indexOf("P") < 0) break;
   var s = {
    type: PART,
    ctx: parse.ctx,
    istart: parse.istart,
    iend: parse.iend,
    text: text
   }, p_voice = voice_tb[par_sy.top_voice];
   if (curvoice.v != p_voice.v) {
    if (curvoice.time != p_voice.time) break;
    if (p_voice.last_sym && p_voice.last_sym.type == PART) break;
    var curvoice_sav = curvoice;
    curvoice = p_voice, sym_link(s), curvoice = curvoice_sav;
   } else sym_link(s);
   break;

  case "Q":
   if (0 == parse.state) break;
   new_tempo(text);
   break;

  case "V":
   if (0 == parse.state) break;
   2 == parse.state && goto_tune(), get_voice(text), !curvoice.last_sym && parse.voice_opts && voice_filter();
   break;

  case "K":
   get_key_clef(new_key(text));
   break;

  case "k":
   parse.line.error("k: is obsolete - use %%map instead"), get_map(text);
   break;

  case "N":
  case "R":
   info[info_type] ? info[info_type] += "\n" + text : info[info_type] = text;
   break;

  default:
   parse.line.error("'" + info_type + ":' line ignored");
  }
 }
 function adjust_dur(e) {
  var t, n, r, i, s;
  if ((t = curvoice.last_sym) && t.type != MREST && t.type != BAR) {
   for (;t.type != BAR && t.prev; ) t = t.prev;
   if (n = t.time, r = curvoice.time - n, 0 == n) {
    for (;t && !t.dur; ) t = t.next;
    t && t.type == REST && t.invisible && (n += t.dur * curvoice.wmeasure / r, t.prev ? t.prev.next = t.next : curvoice.sym = t.next, 
    t.next && (t.next.prev = t.prev), t = t.next);
   }
   if (curvoice.wmeasure != r) {
    for (;t; t = t.next) if (t.time = n, t.dur && !t.grace && (t.dur = t.dur * curvoice.wmeasure / r, 
    t.dur_orig = t.dur_orig * curvoice.wmeasure / r, n += t.dur, t.type == NOTE || t.type == REST)) {
     for (i = 0; i <= t.nhd; i++) t.notes[i].dur = t.notes[i].dur * curvoice.wmeasure / r;
     s = identify_note(t, t.dur_orig), t.head = s[0], t.dots = s[1], t.nflags = s[2], 
     t.nflags <= -2 ? t.stemless = !0 : delete t.stemless;
    }
    curvoice.time = e.time = n;
   }
  }
 }
 function new_bar() {
  var e, t, n, r = parse.line, i = {
   type: BAR,
   ctx: parse.ctx,
   multi: 0
  };
  for (i.istart = parse.bol + r.index, vover && vover.bar && get_vover("|"), glovar.new_nbar && (i.bar_num = glovar.new_nbar, 
  delete glovar.new_nbar), ":" == (n = r.char()) && (i.rbstop = 2); ;) {
   switch (t = r.next_char()) {
   case "|":
   case "[":
   case "]":
   case ":":
    n += t;
    continue;
   }
   break;
  }
  if (gchord && (gch_build(i), gchord = null), a_dcn && (deco_cnv(a_dcn, i), a_dcn = null), 
  t > "0" && t <= "9") {
   for (i.text = t; t = r.next_char(), !("0123456789,.-".indexOf(t) < 0); ) i.text += t;
   i.rbstop = 2, i.rbstart = 2;
  } else if ('"' == t && "[" == n) {
   for (i.text = ""; ;) {
    if (!(t = r.next_char())) return void r.error("No end of repeat string");
    if ('"' == t) {
     r.advance();
     break;
    }
    "\\" == t && (t = r.next_char()), i.text += t;
   }
   i.text = cnv_escape(i.text), i.rbstop = 2, i.rbstart = 2;
  }
  switch (n[n.length - 1]) {
  case "[":
   i.rbstart || (n = n.slice(0, -1), r.index--);
   break;

  case ":":
   i.rbstop = 2;
  }
  if ("]" == n[0] && (i.rbstop = 2, 1 != n.length ? n = n.slice(1) : i.invisible = !0), 
  i.iend = parse.bol + r.index, i.rbstart && curvoice.norepbra && !curvoice.second && (i.norepbra = !0), 
  curvoice.ulen < 0 && adjust_dur(i), (e = curvoice.last_sym) && e.type == BAR) {
   if ("[" == n && !e.text && !e.a_gch && (0 == curvoice.st || par_sy.staves[curvoice.st - 1].flags & STOP_BAR || i.norepbra)) return i.text && (e.text = i.text), 
   i.a_gch && (e.a_gch = i.a_gch), i.norepbra && (e.norepbra = i.norepbra), i.rbstart && (e.rbstart = i.rbstart), 
   void (i.rbstop && (e.rbstop = i.rbstop));
   if ("|:" == n && !i.text && ":|" == e.bar_type) return e.bar_type = "::", void (e.rbstop = 2);
  }
  switch (n) {
  case "[":
   i.rbstop = 2;

  case "[]":
  case "[|]":
   i.invisible = !0, n = "[]";
   break;

  case ":|:":
  case ":||:":
   n = "::";
  }
  i.bar_type = n, curvoice.lyric_restart || (curvoice.lyric_restart = i), e && e.type == KEY ? (curvoice.last_sym = e.prev, 
  curvoice.last_sym || (curvoice.sym = null), sym_link(i), i.next = e, e.prev = i, 
  curvoice.last_sym = e) : sym_link(i), i.st = curvoice.st, i.rbstart && !curvoice.norepbra && curvoice.st > 0 && !(par_sy.staves[curvoice.st - 1].flags & STOP_BAR) && (sym_link(e = {
   type: BAR,
   ctx: i.ctx,
   istart: i.istart,
   iend: i.iend,
   bar_type: "[",
   multi: 0,
   invisible: !0,
   text: i.text,
   rbstart: 2
  }), e.st = curvoice.st, i.text = void 0, i.rbstart = 0);
 }
 function parse_staves(e) {
  for (var t, n = [], r = !1, i = 0, s = 0, a = 0, o = 0, c = 0, u = e, l = 0; l < u.length; ) {
   switch (u[l]) {
   case " ":
   case "\t":
    break;

   case "[":
    if (o || s + a >= 2) {
     parse.line.error("Misplaced '[' in %%staves"), r = !0;
     break;
    }
    i |= s + a == 0 ? OPEN_BRACKET : OPEN_BRACKET2, a++, c <<= 8, c |= OPEN_BRACKET;
    break;

   case "{":
    if (o || s || a >= 2) {
     parse.line.error("Misplaced '{' in %%staves"), r = !0;
     break;
    }
    i |= 0 == a ? OPEN_BRACE : OPEN_BRACE2, s++, c <<= 8, c |= OPEN_BRACE;
    break;

   case "(":
    if (o) {
     parse.line.error("Misplaced '(' in %%staves"), r = !0;
     break;
    }
    i |= OPEN_PARENTH, o++, c <<= 8, c |= OPEN_PARENTH;
    break;

   case "*":
    !s || o || i & (OPEN_BRACE | OPEN_BRACE2) || (i |= FL_VOICE);
    break;

   case "+":
    i |= MASTER_VOICE;
    break;

   default:
    if (!u[l].match(/\w/)) {
     parse.line.error("Bad voice ID in %%staves"), r = !0;
     break;
    }
    for (var f = ""; l < u.length && !(" \t()[]{}|*".indexOf(u[l]) >= 0); ) f += u[l++];
    for (t = {
     v: new_voice(f).v
    }; l < u.length; l++) {
     switch (u[l]) {
     case " ":
     case "\t":
      continue;

     case "]":
      if (!(c & OPEN_BRACKET)) {
       parse.line.error("Misplaced ']' in %%staves"), r = !0;
       break;
      }
      i |= s + --a == 0 ? CLOSE_BRACKET : CLOSE_BRACKET2, c >>= 8;
      continue;

     case "}":
      if (!(c & OPEN_BRACE)) {
       parse.line.error("Misplaced '}' in %%staves"), r = !0;
       break;
      }
      s--, i |= 0 == a ? CLOSE_BRACE : CLOSE_BRACE2, i &= ~FL_VOICE, c >>= 8;
      continue;

     case ")":
      if (!(c & OPEN_PARENTH)) {
       parse.line.error("Misplaced ')' in %%staves"), r = !0;
       break;
      }
      o--, i |= CLOSE_PARENTH, c >>= 8;
      continue;

     case "|":
      i |= STOP_BAR;
      continue;
     }
     break;
    }
    t.flags = i, n.push(t), i = 0;
    continue;
   }
   l++;
  }
  return 0 != c && (parse.line.error("'}', ')' or ']' missing in %%staves"), r = !0), 
  r && (n = null), n;
 }
 function info_split(e, t) {
  var n, r, i = [], s = "", a = e.length;
  for (n = 0; n < a; n++) switch (e[n]) {
  case "=":
   if (!s) {
    s = "=";
    break;
   }
   if (s += "=", i.length < t) break;
   i.push(s), s = "";
   break;

  case " ":
  case "\t":
   if (!s) break;
   i.push(s), s = "";
   break;

  case '"':
   for (s && (i.push(s), s = ""), r = ++n; n < a && '"' != e[n]; ) "\\" == e[n] && n++, 
   n++;
   if ('"' != e[n]) {
    parse.line.error("Unterminated string");
    break;
   }
   i.push(e.slice(r, n));
   break;

  case "\\":
   s += e[n++];

  default:
   s += e[n];
  }
  return s && i.push(s), i;
 }
 function parse_voice(e) {
  var t, n = info_split(e, 1), r = n.shift();
  void 0 == (curvoice = new_voice(r)).time && (curvoice.time = 0, 3 == parse.state && staves_found < 0 && (t = curvoice.v, 
  curvoice.st = curvoice.cst = ++nstaff, par_sy.nstaff = nstaff, par_sy.voices[t].st = nstaff, 
  par_sy.voices[t].range = t, par_sy.staves[nstaff] = {
   stafflines: "|||||",
   staffscale: 1
  }));
  for (var i = 0; i < n.length; i++) switch (n[i]) {
  case "name=":
  case "nm=":
   curvoice.nm = n[++i], curvoice.new_name = !0;
   break;

  case "subname=":
  case "sname=":
  case "snm=":
   curvoice.snm = n[++i];
   break;

  case "stem=":
   set_pos("stem", n[++i]);
   break;

  default:
   "=" == n[i][n[i].length - 1] && i++;
  }
  return parse_kv_args(n);
 }
 function identify_note(e, t) {
  var n, r, i;
  for (t % 12 != 0 && parse.line.error("Invalid note duration " + t), 0 == (t /= 12) && parse.line.error("Note too short"), 
  i = 5; 0 != t && !(1 & t); t >>= 1, i--) ;
  switch (t >>= 1) {
  case 0:
   r = 0;
   break;

  case 1:
   r = 1;
   break;

  case 3:
   r = 2;
   break;

  case 7:
  default:
   r = 3;
  }
  if ((i -= r) >= 0) n = "full"; else switch (i) {
  default:
   parse.line.error("Note too long"), i = -4;

  case -4:
   n = "square";
   break;

  case -3:
   n = cfmt.squarebreve ? "square" : "oval";
   break;

  case -2:
   n = "oval";
   break;

  case -1:
   n = "empty";
  }
  return [ n, r, i ];
 }
 function parse_dur(e) {
  var t, n;
  if (c = e.char(), c > "0" && c <= "9" ? (t = e.get_int(), c = e.char()) : t = 1, 
  "/" == c) if (n = 2, c = e.next_char(), "/" == c) do {
   n *= 2, c = e.next_char();
  } while ("/" == c); else c > "0" && c <= "9" && (n = e.get_int()); else n = 1;
  return [ t, n ];
 }
 function parse_acc_pit(e) {
  var t, n, r, i, s = e.char();
  switch (s) {
  case "^":
   "^" == (s = e.next_char()) ? (t = 2, s = e.next_char()) : t = 1;
   break;

  case "=":
   t = 3, s = e.next_char();
   break;

  case "_":
   "_" == (s = e.next_char()) ? (t = -2, s = e.next_char()) : t = -1;
  }
  if ((t && s >= "1" && s <= "9" || "/" == s) && (nd = parse_dur(e), n = nd[0], 1 == (r = nd[1]) ? r = curvoice.microscale : r *= 2, 
  s = e.char()), i = "CDEFGABcdefgab".indexOf(s) + 16, s = e.next_char(), !(i < 16)) {
   for (;"'" == s; ) i += 7, s = e.next_char();
   for (;"," == s; ) i -= 7, s = e.next_char();
   return note = {
    pit: i,
    apit: i,
    shhd: 0,
    shac: 0,
    ti1: 0
   }, t && (note.acc = t, n && (note.micro_n = n, note.micro_d = r)), note;
  }
  e.error("'" + e.buffer[e.index - 1] + "' is not a note");
 }
 function set_map(e) {
  var t, n, r, i, s = maps[curvoice.map];
  for (t = "abcdefg"[(e.pit + 77) % 7], r = (n = e.acc ? [ "__", "_", "", "^", "^^", "=" ][e.acc + 2] : "") + t, 
  i = e.pit; i >= 28; i -= 7) r += "'";
  for (i = e.pit; i < 21; i += 7) r += ",";
  if (s[r]) e.map = s[r], e.map[1] && (e.apit = e.pit = e.map[1].pit, e.acc = e.map[1].acc); else {
   if (!s[r = "octave," + n + t] && !s[r = "key," + n + "abcdefg"[(e.pit + 77 - curvoice.ckey.k_delta) % 7]] && !s[r = "all"]) return;
   e.map = s[r];
  }
 }
 function parse_basic_note(e, t) {
  var n, r = parse_acc_pit(e);
  return r ? ("0" == e.char() && (parse.stemless = !0, e.advance()), n = parse_dur(e), 
  r.dur = t * n[0] / n[1], r) : null;
 }
 function parse_vpos() {
  var e, t = parse.line, n = 0;
  return "." != t.buffer[t.index - 1] || a_dcn || (n = SL_DOTTED), "'" == (e = t.next_char()) ? (n += SL_ABOVE, 
  t.index++) : "," == e ? (n += SL_BELOW, t.index++) : n += SL_AUTO, n;
 }
 function sort_pitch(e) {
  e.notes = e.notes.sort(function(e, t) {
   return e.pit - t.pit;
  });
 }
 function new_note(e, t) {
  var n, r, i, s, a, o, c, u, l, f, p, d, h = 0, m = parse.line, v = a_dcn;
  switch (a_dcn = void 0, parse.stemless = !1, (r = {
   type: NOTE,
   ctx: parse.ctx,
   stem: 0,
   multi: 0,
   nhd: 0,
   xmx: 0
  }).istart = parse.bol + m.index, e ? r.grace = !0 : gchord && (gch_build(r), gchord = void 0), 
  s = m.char()) {
  case "X":
   r.invisible = !0;

  case "Z":
   if (r.type = MREST, s = m.next_char(), r.nmes = s > "0" && s <= "9" ? m.get_int() : 1, 
   r.dur = curvoice.wmeasure * r.nmes, curvoice.second) return curvoice.time += r.dur, 
   null;
   break;

  case "y":
   r.type = SPACE, r.invisible = !0, s = m.next_char(), r.width = s >= "0" && s <= "9" ? m.get_int() : 10;
   break;

  case "x":
   r.invisible = !0;

  case "z":
   r.type = REST, m.advance(), l = parse_dur(m), r.dur = r.dur_orig = (curvoice.ulen < 0 ? BASE_LEN / 4 : curvoice.ulen) * l[0] / l[1], 
   r.notes = [ {
    pit: 18,
    dur: r.dur
   } ];
   break;

  case "[":
   i = !0, s = m.next_char();

  default:
   for (curvoice.microscale && (r.microscale = curvoice.microscale), r.notes = []; ;) {
    if (i) for (;s; ) {
     if ((o = s.charCodeAt(0)) >= 128) return m.error(not_ascii), null;
     switch (type = char_tb[o], type[0]) {
     case "(":
      h <<= 4, h += parse_vpos(), s = m.char();
      continue;

     case "!":
      if (a_dcn || (a_dcn = []), type.length > 1) a_dcn.push(type.slice(1, -1)); else {
       for (a = ""; "!" != (s = m.next_char()); ) a += s;
       a_dcn.push(a);
      }
      s = m.next_char();
      continue;
     }
     break;
    }
    if (!(n = parse_basic_note(m, r.grace || curvoice.ulen < 0 ? BASE_LEN / 4 : curvoice.ulen))) return null;
    if (curvoice.octave && (n.apit = n.pit += 7 * curvoice.octave), h && (n.sl1 = h, 
    r.sl1 ? r.sl1++ : r.sl1 = 1, h = 0), a_dcn && (n.a_dcn = a_dcn, a_dcn = null), r.notes.push(n), 
    !i) break;
    for (s = m.char(); ;) {
     switch (s) {
     case ")":
      n.sl2 ? n.sl2++ : n.sl2 = 1, r.sl2 ? r.sl2++ : r.sl2 = 1, s = m.next_char();
      continue;

     case "-":
      n.ti1 = parse_vpos(), r.ti1 = !0, s = m.char();
      continue;

     case ".":
      if ("-" != (s = m.next_char())) {
       m.error("Misplaced dot");
       break;
      }
      continue;
     }
     break;
    }
    if ("]" == s) {
     for (m.advance(), l = parse_dur(m), r.nhd = r.notes.length - 1, o = 0; o <= r.nhd; o++) (n = r.notes[o]).dur = n.dur * l[0] / l[1];
     break;
    }
   }
   r.dur = r.dur_orig = r.notes[0].dur;
  }
  if (r.grace && r.type != NOTE) return m.error("Not a note in grace note sequence"), 
  null;
  if (r.notes) {
   if (r.type == NOTE && curvoice.transpose && note_transp(r), r.grace) {
    var g = curvoice.key.k_bagpipe ? 8 : 4;
    for (o = 0; o <= r.nhd; o++) r.notes[o].dur /= g;
    switch (r.dur /= g, r.dur_orig /= g, curvoice.pos.gst) {
    case SL_ABOVE:
     r.stem = 1;
     break;

    case SL_BELOW:
     r.stem = -1;
     break;

    case SL_HIDDEN:
     r.stem = 2;
    }
   } else {
    switch (curvoice.pos.ste) {
    case SL_ABOVE:
     r.stem = 1;
     break;

    case SL_BELOW:
     r.stem = -1;
    }
    if (r.combine = curvoice.combine, t && (r.dur *= t), p = curvoice.brk_rhythm) {
     if (u = curvoice.last_note, p > 0) {
      for (c = 2 * p - 1, r.dur = r.dur * c / p, r.dur_orig = r.dur_orig * c / p, o = 0; o <= r.nhd; o++) r.notes[o].dur = r.notes[o].dur * c / p;
      for (u.dur /= p, u.dur_orig /= p, o = 0; o <= u.nhd; o++) u.notes[o].dur /= p;
     } else {
      for (c = 2 * (p = -p) - 1, r.dur /= p, r.dur_orig /= p, o = 0; o <= r.nhd; o++) r.notes[o].dur /= p;
      for (u.dur = u.dur * c / p, u.dur_orig = u.dur_orig * c / p, o = 0; o <= u.nhd; o++) u.notes[o].dur = u.notes[o].dur * c / p;
     }
     curvoice.time = u.time + u.dur, f = identify_note(u, u.dur_orig), u.head = f[0], 
     u.dots = f[1], u.nflags = f[2], curvoice.brk_rhythm = 0, u.nflags <= -2 ? u.stemless = !0 : delete u.stemless;
    }
   }
   if (r.type == NOTE) {
    if (f = identify_note(r, r.dur_orig), r.head = f[0], r.dots = f[1], r.nflags = f[2], 
    r.xstem && (r.nflags = 0), r.nflags <= -2 && (r.stemless = !0), curvoice.map && maps[curvoice.map]) for (o = 0; o <= r.nhd; o++) set_map(r.notes[o]);
   } else (d = r.dur_orig) == curvoice.wmeasure && (d = d < 2 * BASE_LEN ? BASE_LEN : d < 4 * BASE_LEN ? 2 * BASE_LEN : 4 * BASE_LEN), 
   f = identify_note(r, d), r.head = f[0], r.dots = f[1], r.nflags = f[2];
   curvoice.last_note = r;
  }
  return sym_link(r), cfmt.shiftunison && (r.shiftunison = cfmt.shiftunison), curvoice.lyric_restart || (curvoice.lyric_restart = r), 
  v && deco_cnv(v, r, r.prev), parse.stemless && (r.stemless = !0), r.iend = parse.bol + m.index, 
  r;
 }
 var nil = "0", char_tb = [ nil, nil, nil, nil, nil, nil, nil, nil, nil, " ", "\n", nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, " ", "!", '"', nil, "\n", nil, "&", nil, "(", ")", nil, nil, nil, "-", "!dot!", nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, "|", nil, "<", "n", "<", nil, nil, "n", "n", "n", "n", "n", "n", "n", "!fermata!", "d", "d", "d", "!emphasis!", "!lowermordent!", "d", "!coda!", "!uppermordent!", "d", "d", "!segno!", "!trill!", "d", "d", "d", "n", "d", "n", "[", "\\", "|", "n", "n", "i", "n", "n", "n", "n", "n", "n", "n", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "!upbow!", "!downbow!", "d", "n", "n", "n", "{", "|", "}", "!roll!", nil ];
 function parse_music_line() {
  var e, t, n, r, i, s, a, o, c, u, l, f, p = 0, d = 1, h = parse.line;
  for (h.buffer = parse.file.slice(parse.bol, parse.eol), h.index = 0; (m = h.char()) && "%" != m; ) {
   if ("." == m) switch (h.buffer[h.index + 1]) {
   case "(":
   case "-":
   case "|":
    m = h.next_char();
   }
   if ((s = m.charCodeAt(0)) >= 128) h.error(not_ascii), h.advance(); else {
    switch ((a = char_tb[s])[0]) {
    case " ":
     curvoice.last_note && (curvoice.last_note.beam_end = !0);
     break;

    case "\n":
     if (cfmt.barsperstaff) break;
     0 == par_sy.voices[curvoice.v].range && curvoice.last_sym && (curvoice.last_sym.eoln = !0);
     break;

    case "&":
     if (")" == (m = h.next_char())) {
      get_vover(")");
      break;
     }
     get_vover("&");
     continue;

    case "(":
     if ((m = h.next_char()) > "0" && m <= "9") {
      var m, v = h.get_int(), g = [ 0, 1, 3, 2, 3, 0, 2, 0, 3, 0 ][v], y = v;
      if (":" == (m = h.char())) {
       if ((m = h.next_char()) > "0" && m <= "9" && (g = h.get_int(), m = h.char()), ":" == m) {
        if (!((m = h.next_char()) > "0" && m <= "9")) {
         h.error("Invalid 'r' in tuplet");
         continue;
        }
        y = h.get_int(), m = h.char();
       }
      } else 0 == g && (g = curvoice.wmeasure % 9 == 0 ? 3 : 2);
      sym_link(e = {
       type: TUPLET,
       tuplet_p: v,
       tuplet_q: g,
       tuplet_r: y,
       tuplet_n: y,
       tuplet_f: clone(cfmt.tuplets)
      }), l = u, f = d, u = e, d *= g / v;
      continue;
     }
     if ("&" == m) {
      get_vover("(");
      break;
     }
     p <<= 4, h.index--, p += parse_vpos();
     continue;

    case ")":
     if (curvoice.ignore) break;
     if (e = curvoice.last_sym) switch (e.type) {
     case NOTE:
     case REST:
     case SPACE:
      break;

     default:
      e = null;
     }
     if (!e) {
      h.error("Bad character ')'");
      break;
     }
     e.slur_end ? e.slur_end++ : e.slur_end = 1;
     break;

    case "!":
     if (a_dcn || (a_dcn = []), a.length > 1) {
      a_dcn.push(a.slice(1, -1));
      break;
     }
     for (r = "", i = h.index; (m = h.next_char()) && "!" != m; ) r += m;
     if (!m) {
      h.index = i, h.error("No end of decoration");
      break;
     }
     a_dcn.push(r);
     break;

    case '"':
     parse_gchord(a);
     break;

    case "-":
     var _;
     if (!curvoice.last_note || curvoice.last_note.type != NOTE) {
      h.error("No note before '-'");
      break;
     }
     for (_ = parse_vpos(), e = curvoice.last_note, i = 0; i <= e.nhd; i++) e.notes[i].ti1 ? 0 == e.nhd && h.error("Too many ties") : e.notes[i].ti1 = _;
     e.ti1 = !0;
     continue;

    case "[":
     var b = h.buffer[h.index + 1];
     if ('|[]: "'.indexOf(b) >= 0 || b >= "1" && b <= "9") {
      if (t) {
       h.error("Cannot have a bar in grace notes");
       break;
      }
      new_bar();
      continue;
     }
     if (":" == h.buffer[h.index + 2]) {
      if (parse.istart = parse.bol + h.index, h.index++, (i = h.buffer.indexOf("]", h.index)) < 0) {
       h.error("Lack of ']'");
       break;
      }
      var x = h.buffer.slice(h.index + 2, i).trim();
      h.index = i + 1, parse.iend = parse.bol + h.index;
      var w = do_info(b, x);
      w && h.error(w);
      continue;
     }

    case "n":
     if (!(e = new_note(t, d))) continue;
     e.type == NOTE && (e.slur_start = p, p = 0, n && (e.sappo = !0, n = !1)), t ? u && (e.in_tuplet = !0) : u && e.notes && (e.in_tuplet = !0, 
     u.tuplet_n--, l && l.tuplet_n--, 0 == u.tuplet_n && (d = f, (u = l) ? (l = null, 
     f = 1, 0 == u.tuplet_n && (u = null, d = 1, curvoice.time = Math.round(curvoice.time), 
     e.dur = curvoice.time - e.time)) : (curvoice.time = Math.round(curvoice.time), e.dur = curvoice.time - e.time)));
     continue;

    case "<":
     if (!curvoice.last_note) {
      h.error("No note before '" + m + "'");
      break;
     }
     for (var k = "<" == m ? 1 : -1; "<" == m || ">" == m; ) k *= 2, m = h.next_char();
     curvoice.brk_rhythm = k;
     continue;

    case "d":
     h.error("Bad character '" + m + "'");
     break;

    case "i":
     break;

    case "{":
     if (t) {
      h.error("'{' in grace note");
      break;
     }
     if (o = curvoice.last_note, curvoice.last_note = null, c = a_dcn, a_dcn = void 0, 
     t = !0, "/" == (m = h.next_char())) {
      n = !0;
      break;
     }
     continue;

    case "|":
     m = h.buffer[h.index - 1], new_bar(), "." == m && (curvoice.last_sym.bar_dotted = !0);
     continue;

    case "}":
     if (e = curvoice.last_note, !t || !e) {
      h.error("Bad character '}'");
      break;
     }
     if (e.gr_end = !0, t = !1, !(e.prev && e.prev.grace || curvoice.key.k_bagpipe)) {
      for (i = 0; i <= e.nhd; i++) e.notes[i].dur *= 2;
      e.dur *= 2, e.dur_orig *= 2;
      var E = identify_note(e, e.dur_orig);
      e.head = E[0], e.dots = E[1], e.nflags = E[2];
     }
     curvoice.last_note = o, a_dcn = c;
     break;

    case "\\":
     if (h.index == h.buffer.length - 1) return;
     for (i = h.index + 1; ;i++) {
      if (!(m = h.buffer[i]) || "%" == m) return;
      if (" " != m && "\t" != m) break;
     }

    default:
     h.error("Bad character '" + m + "'");
    }
    h.advance();
   }
  }
  cfmt.breakoneoln && curvoice.last_note && (curvoice.last_note.beam_end = !0), cfmt.barsperstaff || "\n" == char_tb["\n".charCodeAt(0)] && 0 == par_sy.voices[curvoice.v].range && curvoice.last_sym && (curvoice.last_sym.eoln = !0);
 }
 var cw_tb = [ .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .25, .333, .408, .5, .5, .833, .778, .333, .333, .333, .5, .564, .25, .564, .25, .278, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .278, .278, .564, .564, .564, .444, .921, .722, .667, .667, .722, .611, .556, .722, .722, .333, .389, .722, .611, .889, .722, .722, .556, .722, .667, .556, .611, .722, .722, .944, .722, .722, .611, .333, .278, .333, .469, .5, .333, .444, .5, .444, .5, .444, .333, .5, .5, .278, .278, .5, .278, .778, .5, .5, .5, .5, .333, .389, .278, .5, .5, .722, .5, .5, .444, .48, .2, .48, .541, .5 ];
 function cwid(e) {
  var t = e.charCodeAt(0);
  return t >= 128 && (t = 97), cw_tb[t];
 }
 function strw(e) {
  var t, n, r, i = gene.curfont.swfac, s = 0, a = e.length;
  for (t = 0; t < a; t++) {
   switch (r = e[t]) {
   case "$":
    if ("0" == (r = e[t + 1])) gene.curfont = gene.deffont; else {
     if (!(r >= "1" && r <= "9")) {
      s += cwid("$") * i;
      break;
     }
     gene.curfont = get_font("u" + r);
    }
    t++, i = gene.curfont.swfac;
    continue;

   case "&":
    (n = e.indexOf(";", t)) > 0 && n - t < 10 && (t = n, r = "a");
   }
   s += cwid(r) * i;
  }
  return s;
 }
 function set_font(e) {
  gene.curfont = gene.deffont = get_font(e);
 }
 function out_str(e) {
  var t, n, r, i = gene.curfont, s = i;
  for (t = 0; t < e.length; t++) {
   switch (n = e[t]) {
   case "<":
    n = "&lt;";
    break;

   case ">":
    n = "&gt;";
    break;

   case "'":
    n = "&apos;";
    break;

   case '"':
    n = "&quot;";
    break;

   case "&":
    if ("#" == e[t + 1]) break;
    if ("t" == e[t + 2] && ";" == e[t + 3] && ("l" == e[t + 1] || "g" == e[t + 1])) break;
    if ("a" == e[t + 1] && "p" == e[t + 2] && "o" == e[t + 3] && "s" == e[t + 4] && ";" == e[t + 5]) break;
    if ("q" == e[t + 1] && "u" == e[t + 2] && "o" == e[t + 3] && "t" == e[t + 4] && ";" == e[t + 5]) break;
    if ("a" == e[t + 1] && "m" == e[t + 2] && "p" == e[t + 3] && ";" == e[t + 4]) break;
    n = "&amp;";
    break;

   case "$":
    if ("0" == (n = e[++t])) r = gene.deffont; else {
     if (!(n >= "1" && n <= "9")) {
      output.push("$" + n);
      continue;
     }
     if (!(r = get_font("u" + n))) {
      output.push("$" + n);
      continue;
     }
    }
    if (r == s) continue;
    if (s != i && output.push("</tspan>"), (s = r) == i) continue;
    n = '<tspan\n\tclass="f' + r.fid + cfmt.fullsvg + '">';
   }
   output.push(n);
  }
  s != i && output.push("</tspan>");
 }
 function xy_str(e, t, n, r, i) {
  output.push('<text class="f' + gene.curfont.fid + cfmt.fullsvg + '" x="'), out_sxsy(e, '" y="', t), 
  "c" == r ? output.push('" text-anchor="middle">') : "j" == r ? output.push('" textLength="' + i.toFixed(2) + '">') : "r" == r ? output.push('" text-anchor="end">') : output.push('">'), 
  out_str(n), output.push("</text>\n");
 }
 function trim_title(e, t) {
  var n;
  return cfmt.titletrim && ((n = e.lastIndexOf(", ")) < 0 || e[n + 2] < "A" || e[n + 2] > "Z" || n < e.length - 7 || e.indexOf(" ", n + 3) >= 0) && (n = 0), 
  !t && cfmt.writefields.indexOf("X") >= 0 && (e = info.X + ".  " + e), n && (e = e.slice(n + 2).trim() + " " + e.slice(0, n)), 
  cfmt.titlecaps ? e.toUpperCase() : e;
 }
 function write_title(e, t) {
  var n;
  e && (e = trim_title(e, t), t ? (set_font("subtitle"), n = gene.curfont.size, vskip(cfmt.subtitlespace + n)) : (set_font("title"), 
  n = gene.curfont.size, vskip(cfmt.titlespace + n)), cfmt.titleleft ? xy_str(0, .2 * n, e) : xy_str((cfmt.pagewidth - cfmt.leftmargin - cfmt.rightmargin) / 2 / cfmt.scale, .2 * n, e, "c"));
 }
 function put_inf2r(e, t, n, r, i) {
  n || (n = r, r = null), xy_str(e, t, r ? n + " (" + r + ")" : n, i);
 }
 function write_text(e, t) {
  if ("s" != t) {
   set_font("text");
   var n, r, i, s = (cfmt.pagewidth - cfmt.leftmargin - cfmt.rightmargin) / cfmt.scale, a = gene.curfont.size * cfmt.lineskipfac, o = gene.curfont.size * cfmt.parskipfac;
   switch (t) {
   default:
    switch (t) {
    case "c":
     i = s / 2;
     break;

    case "r":
     i = s;
     break;

    default:
     i = 0;
    }
    for (r = 0; ;) {
     if ((n = e.indexOf("\n", r)) < 0) {
      vskip(a), xy_str(i, 0, e.slice(r), t);
      break;
     }
     if (n == r) {
      for (vskip(o), blk_out(); "\n" == e[n + 1]; ) vskip(a), n++;
      if (n == e.length) break;
     } else vskip(a), xy_str(i, 0, e.slice(r, n), t);
     r = n + 1;
    }
    vskip(o), blk_out();
    break;

   case "f":
   case "j":
    var c;
    for (r = 0; ;) {
     c = (c = (n = e.indexOf("\n\n", r)) < 0 ? e.slice(r) : e.slice(r, n)).split(/\s+/);
     var u = 0, l = 0;
     for (r = 0; r < c.length; r++) (u += strw(c[r] + " ")) >= s && (vskip(a), xy_str(0, 0, c.slice(l, r).join(" "), t, s), 
     l = r, u = 0);
     if (0 != u && (vskip(a), xy_str(0, 0, c.slice(l).join(" "))), vskip(o), blk_out(), 
     n < 0) break;
     for (;"\n" == e[n + 2]; ) vskip(a), n++;
     if (n == e.length) break;
     r = n + 2;
    }
   }
  }
 }
 function put_wline(e, t, n) {
  for (var r, i, s = 0; " " == e[s]; ) s++;
  if ("$" == e[s] && e[s + 1] >= "0" && e[s + 1] <= "9" && (s += 2), i = 0, r = s, 
  e[s] >= "0" && e[s] <= "9" || "." == e[s + 1]) {
   for (;s < e.length && " " != e[++s] && ":" != e[s - 1] && "." != e[s - 1]; ) ;
   for (i = s; " " == e[s]; ) s++;
  }
  return 0 != i && xy_str(t, 0, e.slice(r, i), "r"), s < e.length && xy_str(t + 5, 0, e.slice(s), "l"), 
  s > e.length && 0 == i;
 }
 function put_words(e) {
  var t, n, r, i, s, a, o, c;
  blk_out(), set_font("words");
  var u = .5 * (cfmt.pagewidth - cfmt.leftmargin - cfmt.rightmargin) / cfmt.scale, l = (u - 45) / (cwid("a") * gene.curfont.swfac);
  for (i = 0, s = (e = e.split("\n")).length, n = 0; n < s; n++) {
   if ((t = e[n]).length > l) {
    i = 0;
    break;
   }
   t ? c = !0 : c && (i++, c = !1);
  }
  if (i > 0) {
   for (i++, n = i /= 2, c = !1, o = 0; o < s; o++) {
    for (t = e[o], r = 0; " " == t[r]; ) r++;
    if (r == t.length) {
     if (c && --n <= 0) break;
     c = !1;
    } else c = !0;
   }
   a = o + 1;
  } else a = o = s;
  for (vskip(cfmt.wordsspace), n = 0; n < o || a < s; n++) {
   var f = .2 * gene.curfont.size;
   n < o && 0 == e[n].length && blk_out(), vskip(cfmt.lineskipfac * gene.curfont.size - f), 
   n < o && put_wline(e[n], 45, 0), a < s && (put_wline(e[a], 20 + u, 1) && 0 == --i && (n < o ? i++ : a < e.length - 1 && (u *= .6)), 
   a++), vskip(f);
  }
 }
 function put_history() {
  var e, t, n, r, i, s, a, o = cfmt.infoname.split("\n"), c = o.length;
  for (e = 0; e < c; e++) if (n = o[e][0], !(cfmt.writefields.indexOf(n) < 0) && (r = info[n])) {
   for (i || (i = !0, set_font("history"), vskip(cfmt.textspace), s = gene.curfont.size * cfmt.lineskipfac), 
   head = o[e].slice(2), (head[0] = '"') && (head = head.slice(1, -1)), vskip(s), xy_str(0, 0, head), 
   xy_str(a = strw(head), 0, (r = r.split("\n"))[0]), t = 1; t < r.length; t++) vskip(s), 
   xy_str(a, 0, r[t]);
   vskip(.3 * s), blk_out();
  }
 }
 var info_font_init = {
  A: "info",
  C: "composer",
  O: "composer",
  P: "parts",
  Q: "tempo",
  R: "info",
  T: "title",
  X: "title"
 };
 function write_headform(e) {
  for (var t, n, r, i, s, a, o = {}, c = clone(info_font_init), u = {
   A: cfmt.infospace,
   C: cfmt.composerspace,
   O: cfmt.composerspace,
   R: cfmt.infospace
  }, l = {}, f = "", p = cfmt.titleformat, d = 0, h = 0; ;) {
   for (;" " == p[h]; ) h++;
   if (h >= p.length) break;
   if ((t = p[h++]) < "A" || t > "Z") if ("+" == t) {
    if (0 == f.lenth || "+" == f[f.length - 1]) continue;
    f = f.slice(0, -1) + "+";
   } else "," == t && ("+" == f[f.length - 1] && (f = f.slice(0, -1) + "l"), f += "\n"); else {
    if (o[t]) l[t]++; else {
     if (!info[t]) continue;
     o[t] = info[t].split("\n"), l[t] = 1;
    }
    switch (f += t, p[h]) {
    case "-":
     f += "l", h++;
     break;

    case "0":
     f += "c", h++;
     break;

    case "1":
     f += "r", h++;
     break;

    default:
     f += "c";
    }
   }
  }
  "+" == f[f.length - 1] && (f = f.slice(0, -1) + "l"), f += "\n";
  var m, v = {
   l: cfmt.titlespace,
   c: cfmt.titlespace,
   r: cfmt.titlespace
  }, g = {
   l: 0,
   c: .5 * e,
   r: e
  }, y = {};
  for (p = f, h = 0; ;) {
   for (y.l = y.c = y.r = s = 0, d = h; "\n" != (t = p[d++]); ) {
    if ("+" == (r = p[d++])) r = p[d + 1]; else if (0 != y[r]) continue;
    (m = o[t]) && ((n = c[t]) || (n = "history"), a = 1.1 * get_font(n).size, u[t] && (a += u[t]), 
    s < a && (s = a), y[r] = a);
   }
   for (v.l += s - y.l, v.c += s - y.c, v.r += s - y.r; "\n" != (t = p[h++]); ) if (r = p[h++], 
   0 != o[t].length) {
    if (m = o[t].shift(), "+" == r && (l[t]--, t = p[h++], r = p[h++], o[t].length > 0 && (m ? m += " " + o[t].shift() : m = " " + o[t].shift())), 
    (n = c[t]) || (n = "history"), a = 1.1 * get_font(n).size, u[t] && (a += u[t]), 
    set_font(n), i = g[r], s = v[r] + a, "Q" == t) {
     if ("l" != r) {
      var _ = tempo_width(glovar.tempo);
      "c" == r && (_ *= .5), i -= _;
     }
     write_tempo(glovar.tempo, i, -s, .75), glovar.tempo.deleted = !0;
    } else m && xy_str(i, -s, m, r);
    if ("T" == t && (n = c.T = "subtitle", u.T = cfmt.subtitlespace), l[t] <= 1) for ("T" == t && (a = 1.1 * get_font(n).size, 
    u[t] && (a += u[t]), set_font(n)); o[t].length > 0; ) xy_str(i, -(s += a), m = o[t].shift(), r);
    l[t]--, v[r] = s;
   }
   if (v.c > v.l && (v.l = v.c), v.r > v.l && (v.l = v.r), h >= f.length) break;
   v.c = v.r = v.l;
  }
  vskip(v.l);
 }
 function write_heading() {
  var e, t, n, r, i, s, a, o, c = (cfmt.pagewidth - cfmt.leftmargin - cfmt.rightmargin) / cfmt.scale;
  if (cfmt.titleformat && cfmt.titleformat.length > 0) return write_headform(c), void vskip(cfmt.musicspace);
  if (info.T && cfmt.writefields.indexOf("T") >= 0) for (e = 0; ;) {
   if ((t = info.T.indexOf("\n", e)) < 0) {
    write_title(info.T.substring(e), 0 != e);
    break;
   }
   write_title(info.T.slice(e, t), 0 != e), e = t + 1;
  }
  if (set_font("composer"), a = cfmt.composerspace + gene.curfont.size, parse.ckey.k_bagpipe && !cfmt.infoline && cfmt.writefields.indexOf("R") >= 0 && (s = info.R), 
  s && (xy_str(0, -cfmt.composerspace, s), a = cfmt.composerspace), n = info.A, cfmt.writefields.indexOf("C") >= 0 && (r = info.C), 
  cfmt.writefields.indexOf("O") >= 0 && (i = info.O), r || i || cfmt.infoline) {
   var u, l;
   if (vskip(cfmt.composerspace), cfmt.aligncomposer < 0 ? (u = 0, l = " ") : 0 == cfmt.aligncomposer ? (u = .5 * c, 
   l = "c") : (u = c, l = "r"), o = a, r || i) {
    for (cfmt.aligncomposer >= 0 && a != o && vskip(a - o), e = 0; ;) {
     if (vskip(gene.curfont.size), (t = r ? r.indexOf("\n", e) : -1) < 0) {
      put_inf2r(u, 0, r ? r.substring(e) : null, i, l);
      break;
     }
     xy_str(u, 0, r.slice(e, t), l), a += gene.curfont.size, e = t + 1;
    }
    o > a && vskip(o - a);
   }
   ((s = s ? null : info.R) || n) && cfmt.infoline && (set_font("info"), vskip(gene.curfont.size + cfmt.infospace), 
   put_inf2r(c, 0, s, n, "r"), a += gene.curfont.size + cfmt.infospace), o = 0;
  } else o = cfmt.composerspace;
  info.P && cfmt.writefields.indexOf("P") >= 0 && (set_font("parts"), (a = cfmt.partsspace + gene.curfont.size - a) > 0 && (o += a), 
  o > .01 && vskip(o), xy_str(0, 0, info.P), o = 0), vskip(o + cfmt.musicspace);
 }
 var output = [], style = "\n.fill {fill: currentColor}\n.stroke {stroke: currentColor; fill: none}", font_style = "", posy = 0, posx = cfmt.leftmargin / cfmt.scale, defined_glyph = {}, defs = "", stv_g = {
  scale: 1,
  dy: 0,
  st: -1,
  v: 0
 }, block = {}, glyphs = {
  brace: '<path id="brace" class="fill" transform="scale(0.0235)"\n\td="M-20 -515v-2\n\tc35 -16 53 -48 53 -91\n\tc0 -34 -11 -84 -35 -150\n\tc-13 -41 -18 -76 -18 -109\n\tc0 -69 29 -121 87 -160\n\tc-44 35 -63 77 -63 125\n\tc0 26 8 56 21 91\n\tc27 71 37 130 37 174\n\tc0 62 -26 105 -77 121\n\tc52 16 77 63 77 126\n\tc0 46 -10 102 -37 172\n\tc-13 35 -21 68 -21 94\n\tc0 48 19 89 63 124\n\tc-58 -39 -87 -91 -87 -160\n\tc0 -33 5 -68 18 -109\n\tc24 -66 35 -116 35 -150\n\tc0 -44 -18 -80 -53 -96z"/>',
  utclef: '<path id="utclef" class="fill" transform="scale(0.045)"\n\td="m-50 44\n\tc-72 -41 -72 -158 52 -188\n\t150 -10 220 188 90 256\n\t-114 52 -275 0 -293 -136\n\t-15 -181 93 -229 220 -334\n\t88 -87 79 -133 62 -210\n\t-51 33 -94 105 -89 186\n\t17 267 36 374 49 574\n\t6 96 -19 134 -77 135\n\t-80 1 -126 -93 -61 -133\n\t85 -41 133 101 31 105\n\t23 17 92 37 90 -92\n\t-10 -223 -39 -342 -50 -617\n\t0 -90 0 -162 96 -232\n\t56 72 63 230 22 289\n\t-74 106 -257 168 -255 316\n\t9 153 148 185 252 133\n\t86 -65 29 -192 -80 -176\n\t-71 12 -105 67 -59 124"/>',
  tclef: '<use id="tclef" xlink:href="#utclef"/>',
  stclef: '<use id="stclef" transform="scale(0.8)"\n\txlink:href="#utclef"/>',
  ubclef: '<path id="ubclef" class="fill" transform="scale(0.045)"\n\td="m-200 312\n\tc124 -35 222 -78 254 -236\n\t43 -228 -167 -246 -192 -103\n\t59 -80 157 22 92 78\n\t-62 47 -115 -22 -106 -88\n\t21 -141 270 -136 274 52\n\t-1 175 -106 264 -322 297\n\tm357 -250\n\tc0 -36 51 -34 51 0\n\t0 37 -51 36 -51 0\n\tm-2 -129\n\tc0 -36 51 -34 51 0\n\t0 38 -51 37 -51 0"/>',
  bclef: '<use id="bclef" xlink:href="#ubclef"/>',
  sbclef: '<use id="sbclef" transform="scale(0.8)"\n\txlink:href="#ubclef"/>',
  ucclef: '<path id="ucclef" class="fill" transform="scale(0.045)"\n\td="m-51 3\n\tv262\n\th-13\n\tv-529\n\th13\n\tv256\n\tc25 -20 41 -36 63 -109\n\t14 31 13 51 56 70\n\t90 34 96 -266 -41 -185\n\t52 19 27 80 -11 77\n\t-90 -38 33 -176 139 -69\n\t72 79 1 241 -134 186\n\tl-16 39 16 38\n\tc135 -55 206 107 134 186\n\t-106 108 -229 -31 -139 -69\n\t38 -3 63 58 11 77\n\t137 81 131 -219 41 -185\n\t-43 19 -45 30 -56 64\n\t-22 -73 -38 -89 -63 -109\n\tm-99 -267\n\th57\n\tv529\n\th-57\n\tv-529"/>',
  cclef: '<use id="cclef" xlink:href="#ucclef"/>',
  scclef: '<use id="scclef" transform="scale(0.8)"\n\txlink:href="#ucclef"/>',
  pclef: '<path id="pclef" class="stroke" stroke-width="1.4"\n\td="m-4 10h5.4v-20h-5.4v20"/>',
  hd: '<ellipse id="hd" rx="4.1" ry="2.9"\n\ttransform="rotate(-20)" class="fill"/>',
  Hd: '<path id="Hd" class="fill" d="m3 -1.6\n\tc-1 -1.8 -7 1.4 -6 3.2\n\t1 1.8 7 -1.4 6 -3.2\n\tm0.5 -0.3\n\tc2 3.8 -5 7.6 -7 3.8\n\t-2 -3.8 5 -7.6 7 -3.8"/>',
  HD: '<path id="HD" class="fill" d="m-2.7 -1.4\n\tc1.5 -2.8 6.9 0 5.3 2.7\n\t-1.5 2.8 -6.9 0 -5.3 -2.7\n\tm8.3 1.4\n\tc0 -1.5 -2.2 -3 -5.6 -3\n\t-3.4 0 -5.6 1.5 -5.6 3\n\t0 1.5 2.2 3 5.6 3\n\t3.4 0 5.6 -1.5 5.6 -3"/>',
  HDD: '<g id="HDD">\n\t<use xlink:href="#HD"/>\n\t<path d="m-6 -4v8m12 0v-8" class="stroke"/>\n</g>',
  breve: '<g id="breve" class="stroke">\n\t<path d="m-6 -2.7h12m0 5.4h-12" stroke-width="2.5"/>\n\t<path d="m-6 -5v10m12 0v-10"/>\n</g>',
  longa: '<g id="longa" class="stroke">\n\t<path d="m-6 2.7h12m0 -5.4h-12" stroke-width="2.5"/>\n\t<path d="m-6 5v-10m12 0v16"/>\n</g>',
  ghd: '<use id="ghd" transform="translate(4.5,0) scale(0.5)" xlink:href="#hd"/>',
  r00: '<rect id="r00" class="fill"\n\tx="-1.6" y="-6" width="3" height="12"/>',
  r0: '<rect id="r0" class="fill"\n\tx="-1.6" y="-6" width="3" height="6"/>',
  r1: '<rect id="r1" class="fill"\n\tx="-3.5" y="-6" width="7" height="3"/>',
  r2: '<rect id="r2" class="fill"\n\tx="-3.5" y="-3" width="7" height="3"/>',
  r4: '<path id="r4" class="fill" d="m-1 -8.5\n\tl3.6 5.1 -2.1 5.2 2.2 4.3\n\tc-2.6 -2.3 -5.1 0 -2.4 2.6\n\t-4.8 -3 -1.5 -6.9 1.4 -4.1\n\tl-3.1 -4.5 1.9 -5.1 -1.5 -3.5"/>',
  r8e: '<path id="r8e" class="fill" d="m 0 0\n\tc-1.5 1.5 -2.4 2 -3.6 2\n\t2.4 -2.8 -2.8 -4 -2.8 -1.2\n\t0 2.7 4.3 2.4 5.9 0.6"/>',
  r8: '<g id="r8">\n\t<path d="m3.3 -4l-3.4 9.6" class="stroke"/>\n\t<use x="3.4" y="-4" xlink:href="#r8e"/>\n</g>',
  r16: '<g id="r16">\n\t<path d="m3.3 -4l-4 15.6" class="stroke"/>\n\t<use x="3.4" y="-4" xlink:href="#r8e"/>\n\t<use x="1.9" y="2" xlink:href="#r8e"/>\n</g>',
  r32: '<g id="r32">\n\t<path d="m4.8 -10l-5.5 21.6" class="stroke"/>\n\t<use x="4.9" y="-10" xlink:href="#r8e"/>\n\t<use x="3.4" y="-4" xlink:href="#r8e"/>\n\t<use x="1.9" y="2" xlink:href="#r8e"/>\n</g>',
  r64: '<g id="r64">\n\t<path d="m4.8 -10 l-7 27.6" class="stroke"/>\n\t<use x="4.9" y="-10" xlink:href="#r8e"/>\n\t<use x="3.4" y="-4" xlink:href="#r8e"/>\n\t<use x="1.9" y="2" xlink:href="#r8e"/>\n\t<use x="0.4" y="8" xlink:href="#r8e"/>\n</g>',
  r128: '<g id="r128">\n\t<path d="m5.8 -16 l-8.5 33.6" class="stroke"/>\n\t<use x="5.9" y="-16" xlink:href="#r8e"/>\n\t<use x="4.4" y="-10" xlink:href="#r8e"/>\n\t<use x="2.9" y="-4" xlink:href="#r8e"/>\n\t<use x="1.4" y="2" xlink:href="#r8e"/>\n\t<use x="0.1" y="8" xlink:href="#r8e"/>\n</g>',
  mrest: '<g id="mrest" class="stroke">\n\t<path d="m-10 6v-12m20 0v12"/>\n\t<path d="m-10 0h20" stroke-width="5"/>\n</g>',
  usharp: '<path id="usharp" class="fill" d="m136 -702\n\tv890\n\th32\n\tv-890\n\tm128 840\n\th32\n\tv-888\n\th-32\n\tm-232 286\n\tv116\n\tl338 -96\n\tv-116\n\tm-338 442\n\tv116\n\tl338 -98\n\tv-114"/>',
  uflat: '<path id="uflat" class="fill" d="m100 -746\n\th32\n\tv734\n\tl-32 4\n\tm32 -332\n\tc46 -72 152 -90 208 -20\n\t100 110 -120 326 -208 348\n\tm0 -28\n\tc54 0 200 -206 130 -290\n\t-50 -60 -130 -4 -130 34"/>',
  unat: '<path id="unat" class="fill" d="m96 -750\n\th-32\n\tv716\n\tl32 -8\n\tl182 -54\n\tv282\n\th32\n\tv-706\n\tl-34 10\n\tl-180 50\n\tv-290\n\tm0 592\n\tv-190\n\tl182 -52\n\tv188"/>',
  udblesharp: '<path id="udblesharp" class="fill" d="m240 -282\n\tc40 -38 74 -68 158 -68\n\tv-96\n\th-96\n\tc0 84 -30 118 -68 156\n\t-40 -38 -70 -72 -70 -156\n\th-96\n\tv96\n\tc86 0 120 30 158 68\n\t-38 38 -72 68 -158 68\n\tv96\n\th96\n\tc0 -84 30 -118 70 -156\n\t38 38 68 72 68 156\n\th96\n\tv-96\n\tc-84 0 -118 -30 -158 -68"/>',
  udbleflat: '<path id="udbleflat" class="fill" d="m20 -746\n\th24\n\tv734\n\tl-24 4\n\tm24 -332\n\tc34 -72 114 -90 156 -20\n\t75 110 -98 326 -156 348\n\tm0 -28\n\tc40 0 150 -206 97 -290\n\t-37 -60 -97 -4 -97 34\n\tm226 -450\n\th24\n\tv734\n\tl-24 4\n\tm24 -332\n\tc34 -72 114 -90 156 -20\n\t75 110 -98 326 -156 348\n\tm0 -28\n\tc40 0 150 -206 97 -290\n\t-37 -60 -97 -4 -97 34"/>',
  acc1: '<use id="acc1" transform="translate(-4,5) scale(0.018)" xlink:href="#usharp"/>',
  "acc-1": '<use id="acc-1" transform="translate(-3.5,3.5) scale(0.018)" xlink:href="#uflat"/>',
  acc3: '<use id="acc3" transform="translate(-3,5) scale(0.018)" xlink:href="#unat"/>',
  acc2: '<use id="acc2" transform="translate(-4,5) scale(0.018)"\n\txlink:href="#udblesharp"/>',
  "acc-2": '<use id="acc-2" transform="translate(-4,3.5) scale(0.018)"\n\txlink:href="#udbleflat"/>',
  acc1_1_4: '<g id="acc1_1_4">\n\t<path d="m0 7.8v-15.4" class="stroke"/>\n\t<path class="fill" d="M-1.8 2.7l3.6 -1.1v2.2l-3.6 1.1v-2.2z\n\t\tM-1.8 -3.7l3.6 -1.1v2.2l-3.6 1.1v-2.2"/>\n</g>',
  acc1_3_4: '<g id="acc1_3_4">\n\t<path d="m-2.5 8.7v-15.4M0 7.8v-15.4M2.5 6.9v-15.4" class="stroke"/>\n\t<path class="fill" d="m-3.7 3.1l7.4 -2.2v2.2l-7.4 2.2v-2.2z\n\t\tM-3.7 -3.2l7.4 -2.2v2.2l-7.4 2.2v-2.2"/>\n</g>',
  "acc-1_1_4": '<g id="acc-1_1_4" transform="scale(-1,1)">\n\t<use xlink:href="#acc-1"/>\n</g>',
  "acc-1_3_4": '<g id="acc-1_3_4">\n    <path class="fill" d="m0.6 -2.7\n\tc-5.7 -3.1 -5.7 3.6 0 6.7c-3.9 -4 -4 -7.6 0 -5.8\n\tM1 -2.7c5.7 -3.1 5.7 3.6 0 6.7c3.9 -4 4 -7.6 0 -5.8"/>\n    <path d="m1.6 3.5v-13M0 3.5v-13" class="stroke" stroke-width=".6"/>\n</g>',
  pshhd: '<use id="pshhd" xlink:href="#acc2"/>',
  pfthd: '<g id="pfthd">\n\t<use xlink:href="#acc2"/>\n\t<circle r="4" class="stroke"/>\n</g>',
  csig: '<path id="csig" class="fill" transform="scale(0.0235, 0.0235)"\n\td="M303 -161\n\tc8 1 12 2 18 3\n\tc3 -4 4 -9 4 -13\n\tc0 -28 -52 -54 -91 -54\n\tc-61 2 -115 58 -115 210\n\tc0 76 7 151 39 193\n\tc23 29 49 42 81 42\n\tc26 0 55 -10 83 -34\n\ts47 -64 70 -112\n\tc0 3 18 6 17 9\n\tc-33 103 -76 164 -198 166\n\tc-50 0 -100 -20 -138 -57\n\tc-39 -38 -60 -91 -63 -159\n\tc0 -4 -1 -43 -1 -47\n\tc0 -168 88 -231 219 -232\n\tc52 0 97 27 117 50\n\ts34 49 34 75\n\tc0 47 -25 94 -64 94\n\tc-45 0 -73 -39 -73 -74\n\tc2 -26 23 -60 60 -60h1z"/>',
  ctsig: '<g id="ctsig">\n\t<use xlink:href="#csig"/>\n\t<path d="m5 8v-16" class="stroke"/>\n</g>',
  pmsig: '<path id="pmsig" class="stroke" stroke-width="0.8"\n\td="m0 -7a5 5 0 0 1 0 -10a5 5 0 0 1 0 10"/>',
  pMsig: '<g id="pMsig">\n\t<use xlink:href="#pmsig"/>\n\t<path class="fill" d="m0 -10a2 2 0 0 1 0 -4a2 2 0 0 1 0 4"/>\n</g>',
  imsig: '<path id="imsig" class="stroke" stroke-width="0.8"\n\td="m0 -7a5 5 0 1 1 0 -10"/>',
  iMsig: '<g id="iMsig">\n\t<use xlink:href="#imsig"/>\n\t<path class="fill" d="m0 -10a2 2 0 0 1 0 -4a2 2 0 0 1 0 4"/>\n</g>',
  hl: '<path id="hl" class="stroke" d="m-6 0h12"/>',
  hl1: '<path id="hl1" class="stroke" d="m-7 0h14"/>',
  hl2: '<path id="hl2" class="stroke" d="m-9 0h18"/>',
  ghl: '<path id="ghl" class="stroke" d="m-3 0h6"/>',
  rdots: '<g id="rdots" class="fill">\n\t<circle cx="0" cy="-9" r="1.2"/>\n\t<circle cx="0" cy="-15" r="1.2"/>\n</g>',
  srep: '<path id="srep" class="fill" d="m-1 -6l11 -12h3l-11 12h-3"/>',
  mrep: '<path id="mrep" class="fill"\n    d="m-5 -16.5a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 -3\n\tM4.5 -10a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 -3\n\tM-7 -6l11 -12h3l-11 12h-3"/>',
  mrep2: '<g id="mrep2">\n    <path d="m-5.5 -19.5a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 -3\n\tM5 -7.5a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 -3" class="fill"/>\n    <path d="m-7 -4l14 -10m-14 4l14 -10" class="stroke" stroke-width="1.8"/>\n</g>',
  accent: '<g id="accent" class="stroke">\n\t<path d="m-4 0l8 -2l-8 -2" stroke-width="1.2"/>\n</g>',
  marcato: '<path id="marcato" d="m-3 0l3 -7l3 7l-1.5 0l-1.8 -4.2l-1.7 4.2"/>',
  umrd: '<path id="umrd" class="fill" d="m0 -4\n\tl2.2 -2.2 2.1 2.9 0.7 -0.7 0.2 0.2\n\t-2.2 2.2 -2.1 -2.9 -0.7 0.7\n\t-2.2 2.2 -2.1 -2.9 -0.7 0.7 -0.2 -0.2\n\t2.2 -2.2 2.1 2.9 0.7 -0.7"/>',
  lmrd: '<g id="lmrd">\n\t<use xlink:href="#umrd"/>\n\t<line x1="0" y1="0" x2="0" y2="-8" class="stroke" stroke-width=".6"/>\n</g>',
  grm: '<path id="grm" class="fill" d="m-5 -2.5\n\tc5 -8.5 5.5 4.5 10 -2\n\t-5 8.5 -5.5 -4.5 -10 2"/>',
  stc: '<circle id="stc" class="fill" cx="0" cy="-3" r="1.2"/>',
  sld: '<path id="sld" class="fill" d="m-7.2 4.8\n\tc1.8 0.7 4.5 -0.2 7.2 -4.8\n\t-2.1 5 -5.4 6.8 -7.6 6"/>',
  emb: '<path id="emb" class="stroke" stroke-width="1.2" stroke-linecap="round"\n\td="m-2.5 -3h5"/>',
  hld: '<g id="hld" class="fill">\n    <circle cx="0" cy="-3" r="1.3"/>\n    <path d="m-7.5 -1.5\n\tc0 -11.5 15 -11.5 15 0\n\th-0.25\n\tc-1.25 -9 -13.25 -9 -14.5 0"/>\n</g>',
  brth: '<text id="brth" y="-6" style="font:bold italic 30px serif">,</text>',
  cpu: '<path id="cpu" class="fill" d="m-6 0\n\tc0.4 -7.3 11.3 -7.3 11.7 0\n\t-1.3 -6 -10.4 -6 -11.7 0"/>',
  upb: '<path id="upb" class="stroke" d="m-2.6 -9.4\n\tl2.6 8.8\n\tl2.6 -8.8"/>',
  dnb: '<g id="dnb">\n\t<path d="M-3.2 -2v-7.2m6.4 0v7.2" class="stroke"/>\n\t<path d="M-3.2 -6.8v-2.4l6.4 0v2.4" class="fill"/>\n</g>',
  sgno: '<g id="sgno">\n    <path class="fill" d="m0 -3\n\tc1.5 1.7 6.4 -0.3 3 -3.7\n\t-10.4 -7.8 -8 -10.6 -6.5 -11.9\n\t4 -1.9 5.9 1.7 4.2 2.6\n\t-1.3 0.7 -2.9 -1.3 -0.7 -2\n\t-1.5 -1.7 -6.4 0.3 -3 3.7\n\t10.4 7.8 8 10.6 6.5 11.9\n\t-4 1.9 -5.9 -1.7 -4.2 -2.6\n\t1.3 -0.7 2.9 1.3 0.7 2"/>\n    <line x1="-6" y1="-4.2" x2="6.6" y2="-16.8" class="stroke"/>\n    <circle cx="-6" cy="-10" r="1.2"/>\n    <circle cx="6" cy="-11" r="1.2"/>\n</g>',
  coda: '<g id="coda" class="stroke">\n\t<path d="m0 -2v-20m-10 10h20"/>\n\t<circle cx="0" cy="-12" r="6" stroke-width="1.7"/>\n</g>',
  dplus: '<path id="dplus" class="stroke" stroke-width="1.7"\n\td="m0 -0.5v-6m-3 3h6"/>',
  lphr: '<path id="lphr" class="stroke" stroke-width="1.2"\n\td="m0 0v18"/>',
  mphr: '<path id="mphr" class="stroke" stroke-width="1.2"\n\td="m0 0v12"/>',
  sphr: '<path id="sphr" class="stroke" stroke-width="1.2"\n\td="m0 0v6"/>',
  sfz: '<text id="sfz" x="-5" y="-7" style="font:italic 14px serif">\n\ts<tspan font-size="16" font-weight="bold">f</tspan>z</text>',
  trl: '<text id="trl" x="-2" y="-4"\n\tstyle="font:bold italic 16px serif">tr</text>',
  opend: '<circle id="opend" class="stroke"\n\tcx="0" cy="-3" r="2.5"/>',
  snap: '<path id="snap" class="stroke" d="m-3 -6\n\tc0 -5 6 -5 6 0\n\t0 5 -6 5 -6 0\n\tM0 -5v6"/>',
  thumb: '<path id="thumb" class="stroke" d="m-2.5 -7\n\tc0 -6 5 -6 5 0\n\t0 6 -5 6 -5 0\n\tM-2.5 -9v4"/>',
  turn: '<path id="turn" class="fill" d="m5.2 -8\n\tc1.4 0.5 0.9 4.8 -2.2 2.8\n\tl-4.8 -3.5\n\tc-3 -2 -5.8 1.8 -3.6 4.4\n\t1 1.1 2 0.8 2.1 -0.1\n\t0.1 -0.9 -0.7 -1.2 -1.9 -0.6\n\t-1.4 -0.5 -0.9 -4.8 2.2 -2.8\n\tl4.8 3.5\n\tc3 2 5.8 -1.8 3.6 -4.4\n\t-1 -1.1 -2 -0.8 -2.1 0.1\n\t-0.1 0.9 0.7 1.2 1.9 0.6"/>',
  turnx: '<g id="turnx">\n\t<use xlink:href="#turn"/>\n\t<path d="m0 -1.5v-9" class="stroke"/>\n</g>',
  wedge: '<path id="wedge" class="fill" d="m0 -1l-1.5 -5h3l-1.5 5"/>',
  ltr: '<path id="ltr" class="fill"\n\td="m0 -0.4c2 -1.5 3.4 -1.9 3.9 0.4\n\tc0.2 0.8 0.7 0.7 2.1 -0.4\n\tv0.8c-2 1.5 -3.4 1.9 -3.9 -0.4\n\tc-0.2 -0.8 -0.7 -0.7 -2.1 0.4z"/>',
  custos: '<g id="custos">\n\t<path d="m-4 0l2 2.5 2 -2.5 2 2.5 2 -2.5\n\t\t-2 -2.5 -2 2.5 -2 -2.5 -2 2.5" class="fill"/>\n\t<path d="m3.5 0l5 -7" class="stroke"/>\n</g>',
  oct: '<text id="oct" style="font:12px serif">8</text>i'
 };
 function def_use(e) {
  var t, n, r;
  if (!defined_glyph[e]) if (defined_glyph[e] = !0, r = glyphs[e]) {
   for (n = 0; !((t = r.indexOf('xlink:href="#', n)) < 0); ) t += 13, n = r.indexOf('"', t), 
   def_use(r.slice(t, n));
   defs += "\n" + r;
  } else error(1, null, "unknown glyph: " + e);
 }
 function defs_add(e) {
  for (var t, n, r, i, s, a = 0; !((s = e.indexOf("<", a)) < 0); ) if ("\x3c!--" != e.slice(s, s + 4)) {
   if ((t = e.indexOf('id="', s)) < 0) break;
   if (t += 4, (n = e.indexOf('"', t)) < 0) break;
   if (r = e.slice(t, n), (a = e.indexOf(">", n)) < 0) break;
   if ("/" == e[a - 1]) a++; else {
    if ((t = e.indexOf(" ", s)) < 0) break;
    if (i = e.slice(s + 1, t), (a = e.indexOf("</" + i + ">", a)) < 0) break;
    a += 3 + i.length;
   }
   glyphs[r] = e.slice(s, a);
  } else if ((a = e.indexOf("--\x3e", s + 4)) < 0) break;
 }
 function set_g() {
  stv_g.started && (stv_g.started = !1, output.push("</g>\n")), (1 != stv_g.scale || stv_g.color) && (output.push("<g "), 
  1 != stv_g.scale && (stv_g.st >= 0 ? 0 == staff_tb[stv_g.st].y ? output.push("!S" + stv_g.st + "!") : output.push(staff_tb[stv_g.st].scale_str) : 0 == staff_tb[0].y ? output.push("!V" + stv_g.v + "!") : output.push(voice_tb[stv_g.v].scale_str)), 
  stv_g.color && (1 != stv_g.scale && output.push(" "), output.push('style="color:' + stv_g.color + '"')), 
  output.push(">\n"), stv_g.started = !0);
 }
 function set_color(e) {
  var t = stv_g.color;
  return e != stv_g.color && (stv_g.color = e, set_g()), t;
 }
 function set_sscale(e) {
  var t, n;
  e != stv_g.st && 1 != stv_g.scale && (stv_g.scale = 0), t = e >= 0 ? staff_tb[e].staffscale : 1, 
  n = e >= 0 && 1 != t ? staff_tb[e].y : posy, t == stv_g.scale && n == stv_g.dy || (stv_g.scale = t, 
  stv_g.dy = n, stv_g.st = e, set_g());
 }
 function set_scale(e) {
  var t = voice_tb[e.v].scale;
  1 != t ? t == stv_g.scale && stv_g.dy == posy || (stv_g.scale = t, stv_g.dy = posy, 
  stv_g.st = -1, stv_g.v = e.v, set_g()) : set_sscale(e.st);
 }
 function set_dscale(e) {
  output = staff_tb[e].output, stv_g.scale = staff_tb[e].staffscale, stv_g.st = -1;
 }
 function delayed_update() {
  var e;
  function t(e) {
   for (var t, n, r, i = 0; !((t = e.indexOf("!", i)) < 0); ) output.push(e.slice(i, t)), 
   "S" == e[t + 1] ? (n = e.indexOf("!", t + 2), r = Number(e.slice(t + 2, n)), output.push(staff_tb[r].scale_str), 
   i = n + 1) : "V" == e[t + 1] ? (n = e.indexOf("!", t + 2), r = Number(e.slice(t + 2, n)), 
   output.push(voice_tb[r].scale_str), i = n + 1) : (output.push("!"), i = t + 1);
   output.push(e.slice(i));
  }
  for (e = 0; e <= nstaff; e++) 0 != staff_tb[e].output.length && (output.push('<g transform="translate(0,' + (-staff_tb[e].y).toFixed(2)), 
  1 != staff_tb[e].staffscale && output.push(") scale(" + staff_tb[e].staffscale.toFixed(2)), 
  output.push(')">\n'), t(staff_tb[e].output.join("")), output.push("</g>\n"), staff_tb[e].output = []);
 }
 var anno_type = [ "bar", "clef", "custos", "format", "grace", "key", "meter", "Zrest", "note", "part", "rest", "yspace", "staves", "Break", "tempo", "tuplet", "block" ];
 function anno_start(e) {
  if (void 0 != e.istart) {
   e.type;
   var t = e.ymx - e.ymn + 4;
   e.grace && GRACE, stv_g.started && (stv_g.started = !1, output.push("</g>\n")), 
   user.anno_start(anno_type[e.type], e.istart, e.iend, e.x - e.wl - 2, staff_tb[e.st].y + e.ymn + t - 2, e.wl + e.wr + 4, e.ymx - e.ymn + 4), 
   set_g();
  }
 }
 function anno_stop(e) {
  if (void 0 != e.istart) {
   e.type;
   var t = e.ymx - e.ymn + 4;
   e.grace && GRACE, stv_g.started && (stv_g.started = !1, output.push("</g>\n")), 
   user.anno_stop(anno_type[e.type], e.istart, e.iend, e.x - e.wl - 2, staff_tb[e.st].y + e.ymn + t - 2, e.wl + e.wr + 4, e.ymx - e.ymn + 4), 
   set_g();
  }
 }
 function out_svg(e) {
  output.push(e);
 }
 function sx(e) {
  return (e + posx) / stv_g.scale;
 }
 function sy(e) {
  return 1 == stv_g.scale ? posy - e : stv_g.st < 0 ? (posy - e) / stv_g.scale : stv_g.dy - e;
 }
 function out_sxsy(e, t, n) {
  stv_g.trans || (e = (posx + e) / stv_g.scale, n = 1 != stv_g.scale ? stv_g.st < 0 ? (posy - n) / stv_g.scale : stv_g.dy - n : posy - n), 
  output.push(e.toFixed(2) + t + n.toFixed(2));
 }
 function xypath(e, t, n) {
  n ? output.push('<path class="fill" d="m') : output.push('<path class="stroke" d="m'), 
  out_sxsy(e, " ", t), output.push("\n");
 }
 function xybox(e, t, n, r) {
  output.push('<rect class="stroke" stroke-width="0.6"\n\tx="'), out_sxsy(e, '" y="', t), 
  output.push('" width="' + n.toFixed(2) + '" height="' + r.toFixed(2) + '"/>\n');
 }
 function xygl(e, t, n) {
  psxygl(e, t, n) || (def_use(n), output.push('<use x="'), out_sxsy(e, '" y="', t), 
  output.push('" xlink:href="#' + n + '"/>\n'));
 }
 function out_acciac(e, t, n, r, i) {
  i ? (e -= 1, t += 4) : (e -= 5, t -= 4), output.push('<path class="stroke" d="m'), 
  out_sxsy(e, " ", t), output.push("l" + n.toFixed(2) + " " + (-r).toFixed(2) + '"/>\n');
 }
 function out_bar(e, t, n) {
  e += posx, t = posy - t, output.push('<path class="stroke" stroke-width="1" d="m' + e.toFixed(2) + " " + t.toFixed(2) + "v" + (-n).toFixed(2) + '"/>\n');
 }
 function out_bnum(e, t, n, r) {
  if (n = n.toString(), r) {
   var i, s = .6;
   for (i = 0; i < n.length; i++) s += cwid(n[i]);
   s *= 12, output.push('<rect fill="white" x="'), out_sxsy(e - s / 2, '" y="', t + 10), 
   output.push('" width="' + s.toFixed(2) + '" height="12"/>\n');
  }
  output.push('<text style="font:italic 12px serif"\n\tx="'), out_sxsy(e, '" y="', t), 
  output.push('" text-anchor="middle">' + n + '</text>\n"');
 }
 function out_brace(e, t, n) {
  def_use("brace"), e += posx - 6, t = posy - t, n /= 24, output.push('<use transform="translate(' + e.toFixed(2) + "," + t.toFixed(2) + ") scale(2.5," + n.toFixed(2) + ')" xlink:href="#brace"/>');
 }
 function out_bracket(e, t, n) {
  e += posx - 5, t = posy - t - 3, n += 2, output.push('<path class="fill"\n\td="m' + e.toFixed(2) + " " + t.toFixed(2) + "\n\tc10.5 1 12 -4.5 12 -3.5c0 1 -3.5 5.5 -8.5 5.5\n\tv" + n.toFixed(2) + '\n\tc5 0 8.5 4.5 8.5 5.5c0 1 -1.5 -4.5 -12 -3.5"/>\n');
 }
 function out_dot(e, t) {
  output.push('<circle class="fill" cx="'), out_sxsy(e, '" cy="', t), output.push('" r="1.2"/>\n');
 }
 function out_dotbar(e, t, n) {
  e += posx, t = posy - t, output.push('<path class="stroke" stroke-dasharray="5,5"\n\td="m' + e.toFixed(2) + " " + t.toFixed(2) + "v" + (-n).toFixed(2) + '"/>\n');
 }
 function out_hyph(e, t, n) {
  var r, i = 25 + 3 * Math.floor(n / 20);
  e += (n - i * (r = n > 15 ? Math.floor((n - 15) / i) : 0) - 5) / 2, output.push('<path class="stroke" stroke-width="1.2"\n\tstroke-dasharray="5,'), 
  output.push(Math.round((i - 5) / stv_g.scale)), output.push('"\n\td="m'), out_sxsy(e, " ", t + 3), 
  output.push("h" + (i * r + 5).toFixed(2) + '"/>\n');
 }
 function out_stem(e, t, n, r, i, s) {
  var a = r ? GSTEM_XOFF : 3.5, o = -n;
  if (n < 0 && (a = -a), e += a * stv_g.scale, output.push('<path class="stroke" d="m'), 
  out_sxsy(e, " ", t), stv_g.st < 0 && (o /= stv_g.scale), output.push("v" + o.toFixed(2) + '"/>\n'), 
  i) {
   if (output.push('<path class="fill"\n\td="'), t += n, n > 0) if (s) if (r) for (;--i >= 0; ) output.push("M"), 
   out_sxsy(e, " ", t), output.push("l3 1.5 0 2 -3 -1.5z\n"), t -= 3; else for (t += 1; --i >= 0; ) output.push("M"), 
   out_sxsy(e, " ", t), output.push("l7 3.2 0 3.2 -7 -3.2z\n"), t -= 5.4; else if (r) if (1 == i) output.push("M"), 
   out_sxsy(e, " ", t), output.push("c0.6 3.4 5.6 3.8 3 10\n\tc1.2 -4.4 -1.4 -7 -3 -7\n"); else for (;--i >= 0; ) output.push("M"), 
   out_sxsy(e, " ", t), output.push("c1 3.2 5.6 2.8 3.2 8\n\tc1.4 -4.8 -2.4 -5.4 -3.2 -5.2\n"), 
   t -= 3.5; else if (1 == i) output.push("M"), out_sxsy(e, " ", t), output.push("c0.6 5.6 9.6 9 5.6 18.4\n\tc1.6 -6 -1.3 -11.6 -5.6 -12.8\n"); else for (;--i >= 0; ) output.push("M"), 
   out_sxsy(e, " ", t), output.push("c0.9 3.7 9.1 6.4 6 12.4\n\tc1 -5.4 -4.2 -8.4 -6 -8.4\n"), 
   t -= 5.4; else if (s) {
    if (!r) for (t += 1; --i >= 0; ) output.push("M"), out_sxsy(e, " ", t), output.push("l7 -3.2 0 -3.2 -7 3.2z\n"), 
    t += 5.4;
   } else if (r) if (1 == i) output.push("M"), out_sxsy(e, " ", t), output.push("c0.6 -3.4 5.6 -3.8 3 -10\n\tc1.2 4.4 -1.4 7 -3 7\n"); else for (;--i >= 0; ) output.push("M"), 
   out_sxsy(e, " ", t), output.push("c1 -3.2 5.6 -2.8 3.2 -8\n\tc1.4 4.8 -2.4 5.4 -3.2 5.2\n"), 
   t += 3.5; else if (1 == i) output.push("M"), out_sxsy(e, " ", t), output.push("c0.6 -5.6 9.6 -9 5.6 -18.4\n\tc1.6 6 -1.3 11.6 -5.6 12.8\n"); else for (;--i >= 0; ) output.push("M"), 
   out_sxsy(e, " ", t), output.push("c0.9 -3.7 9.1 -6.4 6 -12.4\n\tc1 5.4 -4.2 8.4 -6 8.4\n"), 
   t += 5.4;
   output.push('"/>\n');
  }
 }
 function out_thbar(e, t, n) {
  e += posx + 1.5, t = posy - t, output.push('<path class="stroke" stroke-width="3"\n\td="m' + e.toFixed(2) + " " + t.toFixed(2) + "v" + (-n).toFixed(2) + '"/>\n');
 }
 function out_trem(e, t, n) {
  for (output.push('<path class="fill" d="m'), out_sxsy(e - 4.5, " ", t), output.push("\n\t"); output.push("l9 -3v3l-9 3z"), 
  !(--n <= 0); ) output.push("m0 5.4");
  output.push('"/>\n');
 }
 function out_tubr(e, t, n, r, i) {
  var s;
  i ? (s = -3, t -= 3) : (s = 3, t += 3), n /= stv_g.scale, output.push('<path class="stroke" d="m'), 
  out_sxsy(e, " ", t), output.push("v" + s.toFixed(2) + "l" + n.toFixed(2) + " " + (-r).toFixed(2) + "v" + (-s).toFixed(2) + '"/>\n');
 }
 function out_wln(e, t, n) {
  output.push('<path class="stroke" stroke-width="0.8"\n\td="m'), out_sxsy(e, " ", t), 
  output.push("h" + n.toFixed(2) + '"/>\n');
 }
 Abc.prototype.out_svg = out_svg, Abc.prototype.sx = sx, Abc.prototype.sy = sy, Abc.prototype.out_sxsy = out_sxsy, 
 Abc.prototype.xypath = xypath;
 const deco_str_style = {
  crdc: {
   dx: 0,
   dy: 5,
   style: 'style="font:italic 14px serif"'
  },
  dacs: {
   dx: 0,
   dy: 3,
   style: 'style="font:16px serif" text-anchor="middle"'
  },
  fng: {
   dx: -3,
   dy: 1,
   style: 'style="font:8px Bookman"'
  },
  pf: {
   dx: 0,
   dy: 5,
   style: 'style="font:bold italic 16px serif"'
  }
 };
 function out_deco_str(e, t, n, r) {
  var i = deco_str_style[n];
  i || (i = {
   dx: 0,
   dy: 0,
   style: 'style="font:14px serif"'
  }), e += i.dx, t += i.dy, output.push("<text " + i.style + '\n\tx="'), out_sxsy(e, '" y="', t), 
  output.push('">'), set_font("annotation"), out_str(r), output.push("</text>\n");
 }
 function out_arp(e, t, n) {
  for (output.push('<g transform="translate('), out_sxsy(e, ",", t), output.push(') rotate(270)">\n'), 
  stv_g.trans = !0, e = 0, t = -4, n = Math.ceil(n / 6); --n >= 0; ) xygl(e, t, "ltr"), 
  e += 6;
  stv_g.trans = !1, output.push("</g>\n");
 }
 function out_cresc(e, t, n, r) {
  output.push('<path class="stroke" d="m'), r.nost ? (out_sxsy(e, " ", t + 3.2), output.push("l" + n.toFixed(2) + " -2.2m0 8l" + (-n).toFixed(2) + ' -2.2"/>\n')) : (out_sxsy(e, " ", t + 5), 
  output.push("l" + n.toFixed(2) + " -4m0 8l" + (-n).toFixed(2) + ' -4"/>\n'));
 }
 function out_dim(e, t, n, r) {
  output.push('<path class="stroke"\n\td="m'), out_sxsy(e, " ", t + 5), output.push("l" + n.toFixed(2)), 
  r.noen ? output.push(" -2.2m0 -3.6l" + (-n).toFixed(2) + ' -2.2"/>\n') : output.push(" -4l" + (-n).toFixed(2) + ' -4"/>\n');
 }
 function out_ltr(e, t, n) {
  for (t += 4, n = Math.ceil(n / 6); --n >= 0; ) xygl(e, t, "ltr"), e += 6;
 }
 var deco_val_tb = {
  arp: out_arp,
  cresc: out_cresc,
  dim: out_dim,
  ltr: out_ltr
 }, block_started, par_sy, cur_sy, voice_tb, curvoice, staves_found, vover, tsfirst;
 function out_deco_val(e, t, n, r, i) {
  deco_val_tb[n] ? deco_val_tb[n](e, t, r, i) : error(1, null, "No function for decoration '" + n + "'");
 }
 function vskip(e) {
  posy += e;
 }
 function svg_flush() {
  var e;
  !multicol && output && user.img_out && (info.X ? (e = info.X + ".", info.T && (e += " " + info.T.split("\n")[0]), 
  e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")) : e = "noname", 
  posy *= cfmt.scale, user.imagesize ? user.img_out('<svg xmlns="http://www.w3.org/2000/svg" version="1.1"\n\txmlns:xlink="http://www.w3.org/1999/xlink"\n\txml:space="preserve" color="black"\n' + user.imagesize + ' viewBox="0 0 ' + cfmt.pagewidth.toFixed(0) + " " + posy.toFixed(0) + '">\n<title>abc2svg - ' + e + "</title>") : user.img_out('<svg xmlns="http://www.w3.org/2000/svg" version="1.1"\n\txmlns:xlink="http://www.w3.org/1999/xlink"\n\txml:space="preserve" color="black"\n\twidth="' + cfmt.pagewidth.toFixed(0) + 'px" height="' + posy.toFixed(0) + 'px">\n<title>abc2svg - ' + e + "</title>"), 
  (style || font_style) && user.img_out('<style type="text/css">' + style + font_style + "\n</style>"), 
  defs && user.img_out("<defs>" + defs + "\n</defs>"), cfmt.bgcolor && user.img_out('<rect width="100%" height="100%" fill="' + cfmt.bgcolor + '"/>'), 
  1 == cfmt.scale ? user.img_out('<g stroke-width=".7">') : user.img_out('<g stroke-width=".7"> transform="scale(' + cfmt.scale.toFixed(2) + ')">'), 
  svgobj && (svgobj.setg(0), output.push(svgbuf), svgbuf = ""), user.img_out(output.join("") + "</g>\n</svg>"), 
  output = [], font_style = "", cfmt.fullsvg ? (defined_glyph = {}, defined_font = {}) : (style = "", 
  defs = ""), posy = 0);
 }
 function blk_out() {
  !multicol && output && user.img_out && (user.page_format && !block.started && (block.started = !0, 
  block.newpage ? (block.newpage = !1, user.img_out('<div class="nobrk newpage">')) : user.img_out('<div class="nobrk">')), 
  svg_flush());
 }
 function blk_flush() {
  block.started && user.img_out && (block.started = !1, user.img_out("</div>"));
 }
 Abc.prototype.blk_out = blk_out, Abc.prototype.blk_flush = blk_flush;
 const weight_tb = [ 3, 1, 6, 0, 2, 4, 5, 9, 9, 0, 9, 2, 0, 6, 0, 7, 0 ];
 function voice_filter() {
  var e, t, n;
  for (e in parse.voice_opts) if ((t = new RegExp(e)).test(curvoice.id) || t.test(curvoice.nm)) for (n = 0; n < parse.voice_opts[e].length; n++) do_pscom(parse.voice_opts[e][n]);
 }
 function sym_link(e) {
  curvoice.ignore || (parse.last_sym = e, e.prev = curvoice.last_sym, curvoice.last_sym ? curvoice.last_sym.next = e : curvoice.sym = e, 
  curvoice.last_sym = e), e.v = curvoice.v, e.st = curvoice.cst, e.time = curvoice.time, 
  e.dur && !e.grace && (curvoice.time += e.dur), e.pos = clone(curvoice.pos), curvoice.second && (e.second = !0), 
  curvoice.floating && (e.floating = !0);
 }
 function sym_add(e) {
  var t, n = {}, r = curvoice;
  return curvoice = e, sym_link(n), curvoice = r, (t = n.prev) || (t = n.next), t && (n.ctx = t.ctx, 
  n.istart = t.istart, n.iend = t.iend), n;
 }
 function mrest_expand(e) {
  var t, n, r, i = e.nmes, s = e.dur / i, a = e.a_dd;
  for (e.type = REST, e.dur = s, e.head = "full", e.nflags = -2, r = e.next, (t = voice_tb[e.v]).last_sym = e, 
  t.time = e.time + s, t.cst = e.st, n = e; --i > 0; ) (n = sym_add(t)).type = BAR, 
  n.bar_type = "|", (n = sym_add(t)).type = REST, e.invisible && (n.invisible = !0), 
  n.dur = s, n.head = "full", n.nflags = -2, t.time += s;
  n.next = r, r && (r.prev = n), n.a_dd = a;
 }
 function sort_all() {
  var e, t, n, r, i, s, a, o, c, u, l, f, p, d = voice_tb.length, h = [], m = [], v = -1;
  for (r = 0; r < d; r++) h.push(voice_tb[r].sym);
  for (var g = cur_sy, y = !0; ;) {
   if (y) for (y = !1, f = 1, c = -1, r = 0; r < d; r++) g.voices[r] ? (o = g.voices[r].range) < 0 || (m[o] = r, 
   c++) : g.voices[r] = {
    range: -1
   };
   for (a = i = 1e6, o = 0; o < m.length && void 0 != (r = m[o]); o++) !(e = h[r]) || e.time > i || (s = weight_tb[e.type], 
   e.time < i ? (i = e.time, a = s) : s < a && (a = s), e.type == MREST && (1 == e.nmes ? mrest_expand(e) : c > 0 && (v = i)));
   if (a > 127) break;
   if (i == v) {
    for (p = 0, o = 0; o < m.length && void 0 != (r = m[o]); o++) if ((e = h[r]) && e.time == i && weight_tb[e.type] == a) {
     if (e.type != MREST) {
      v = -1;
      break;
     }
     if (0 == p) p = e.nmes; else if (p != e.nmes) {
      v = -1;
      break;
     }
    }
    if (v < 0) for (o = 0; o < m.length && void 0 != (r = m[o]); o++) (e = h[r]) && e.type == MREST && mrest_expand(e);
   }
   for (o = 0; o < m.length && void 0 != (r = m[o]); o++) (e = h[r]) && e.time == i && weight_tb[e.type] == a && (e.type == STAVES ? (g = g.next, 
   y = l = !0, e.prev ? e.prev.next = e.next : voice_tb[r].sym = e.next, e.next && (e.next.prev = e.prev)) : (f && (f = 0, 
   e.seqst = !0), l && (l = !1, e.new_sy = !0), e.ts_prev = u, u ? u.ts_next = e : tsfirst = e, 
   u = e), h[r] = e.next);
   f = a;
  }
  if (u) {
   if (u.type != BAR && u.type != FORMAT || l) for ((n = voice_tb[u.v]).last_sym = u, 
   (e = sym_add(n)).type = FORMAT, e.time = u.time + u.dur, e.seqst = !0, l && (e.new_sy = !0), 
   u.ts_next = e, e.ts_prev = u; delete u.eoln, !u.seqst; ) u = u.ts_prev;
   if (t = glovar.tempo) {
    for (e = tsfirst.extra; e; ) {
     if (e.type == TEMPO) return;
     e = e.next;
    }
    e = tsfirst, t.v = e.v, t.st = e.st, t.time = e.time, e.extra && (t.next = e.extra, 
    t.next.prev = t), e.extra = t;
   }
  }
 }
 function compr_voice() {
  var e, t, n, r, i;
  function s(e) {
   var t, n, r, i, s, a, o = e.dur, c = 1;
   for (t = e; t && (!t.beam_end && t.next); t = t.next) c++;
   if (c <= 1) delete e.feathered_beam; else {
    if (n = t, i = o / 2, a = o / (c - 1), r = e.time, e.feathered_beam > 0) for (t = e, 
    s = c - 1; t != n; t = t.next, s--) o = Math.floor(a * s) + i, t.dur = o, t.time = r, 
    r += o; else for (t = e, s = 0; t != n; t = t.next, s++) o = Math.floor(a * s) + i, 
    t.dur = o, t.time = r, r += o;
    t.dur = t.time + t.dur - r, t.time = r;
   }
  }
  for (i = 0; i < voice_tb.length; i++) {
   for ((e = voice_tb[i]).ignore && (e.ignore = !1), t = e.sym; t && !(t.time >= staves_found); t = t.next) ;
   for (r = null; t; t = t.next) {
    switch (t.type) {
    case FORMAT:
     if (n = t.extra) {
      if (r || (r = n), t.prev && (t.prev.next = n, n.prev = t.prev), !t.next) {
       r = null;
       break;
      }
      for (;n.next; ) n = n.next;
      t.next.prev = n, n.next = t.next;
     }

    case TEMPO:
    case PART:
    case TUPLET:
    case BLOCK:
     r || (r = t);
     continue;

    case MREST:
     if (!r) continue;
     (n = {
      type: SPACE,
      width: -1,
      invisible: !0,
      v: t.v,
      st: t.st,
      time: t.time
     }).next = t, n.prev = t.prev, n.prev.next = n, t.prev = n, t = n;
    }
    if (t.feathered_beam && s(t), t.grace) {
     for (r || (r = t); !t.gr_end; ) t = t.next;
     (n = clone(t)).type = GRACE, n.dur = 0, delete n.notes, n.next = t.next, n.next ? n.next.prev = n : e.last_sym = n, 
     n.prev = t, t.next = n, t = n;
    }
    r && (t.extra = r, delete t.prev.next, t.prev = r.prev, t.prev ? t.prev.next = t : e.sym = t, 
    delete r.prev, r = null);
   }
   r && ((t = sym_add(e)).type = FORMAT, t.extra = r, delete t.prev.next, t.prev = r.prev, 
   t.prev ? t.prev.next = t : e.sym = t, delete r.prev);
  }
 }
 function dupl_voice() {
  var e, t, n, r, i, s, a, o;
  for (a = 0; a < voice_tb.length; a++) if (t = (e = voice_tb[a]).clone) {
   for (e.clone = null, n = e.sym; n && !(n.time >= staves_found); n = n.next) ;
   for (t.clef = clone(e.clef), curvoice = t; n; n = n.next) {
    if (r = clone(n), n.notes) for (r.notes = [], o = 0; o <= n.nhd; o++) r.notes.push(clone(n.notes[o]));
    if (sym_link(r), t.second ? r.second = !0 : delete r.second, t.floating ? r.floating = !0 : delete r.floating, 
    delete r.a_ly, i = r.extra) for (s = clone(i), r.extra = s, (r = s).v = a, r.st = t.st, 
    i = i.next; i; i = i.next) {
     if (s = clone(i), i.notes) for (s.notes = [], o = 0; o <= i.nhd; o++) s.notes.push(clone(i.notes[o]));
     r.next = s, s.prev = r, (r = s).v = a, r.st = t.st;
    }
   }
  }
 }
 function new_system() {
  var e, t, n = {
   voices: [],
   staves: [],
   top_voice: 0
  };
  if (par_sy) {
   for (t = 0; t < voice_tb.length; t++) {
    e = par_sy.voices[t].st;
    var r = par_sy.staves[e], i = voice_tb[t];
    void 0 != i.stafflines && (r.stafflines = i.stafflines), i.staffscale && (r.staffscale = i.staffscale), 
    n.voices[t] = clone(par_sy.voices[t]), n.voices[t].range = -1, delete n.voices[t].second;
   }
   for (e = 0; e < par_sy.staves.length; e++) n.staves[e] = clone(par_sy.staves[e]), 
   n.staves[e].flags = 0;
   par_sy.next = n, par_sy = n;
  } else cur_sy = par_sy = n;
 }
 function go_global_time(e, t) {
  var n, r, i;
  if (t.bar <= 1) {
   if (1 == t.bar) {
    for (n = e; n && (n.type != BAR || 0 == n.time); n = n.ts_next) ;
    n.time < voice_tb[cur_sy.top_voice].meter.wmeasure && (e = n);
   }
  } else {
   for (;e && !(e.type == BAR && e.bar_num >= t.bar); e = e.ts_next) ;
   if (!e) return null;
   if (0 != t.seq) {
    for (i = t.seq, e = e.ts_next; e && (e.type != BAR || e.bar_num != t.bar || 0 != --i); e = e.ts_next) ;
    if (!e) return null;
   }
  }
  if (0 == t.time) return e;
  for (r = e.time + t.time; e.time < r; ) if (!(e = e.ts_next)) return e;
  do {
   e = e.ts_prev;
  } while (!e.seqst);
  return e;
 }
 function do_clip() {
  var e, t, n, r, i;
  if (e = tsfirst, clip_start.bar > 0 || clip_start.time > 0) {
   if (!(e = go_global_time(e, clip_start))) return void (tsfirst = null);
   for (n = cur_sy, t = tsfirst; t != e; t = t.ts_next) switch (t.new_sy && (n = n.next), 
   t.type) {
   case CLEF:
    voice_tb[t.v].clef = t;
    break;

   case KEY:
    voice_tb[t.v].key = clone(t.as.u.key);
    break;

   case METER:
    voice_tb[t.v].meter = clone(t.as.u.meter);
   }
   for (cur_sy = n, i = 0; i < voice_tb.length; i++) {
    for (r = voice_tb[i], t = e; t; t = t.ts_next) if (t.v == i) {
     delete t.prev;
     break;
    }
    r.sym = t;
   }
   tsfirst = e, delete e.ts_prev;
  }
  if (e = go_global_time(e, clip_end)) {
   do {
    if (!(e = e.ts_next)) return;
   } while (!e.seqst);
   for (i = 0; i < voice_tb.length; i++) {
    for (r = voice_tb[i], t = e.ts_prev; t; t = t.ts_prev) if (t.v == i) {
     delete t.next;
     break;
    }
    t || (r.sym = null);
   }
   delete e.ts_prev.ts_next;
  }
 }
 function set_bar_num() {
  var e, t, n, r, i = cur_sy.top_voice, s = voice_tb[i].meter.wmeasure, a = gene.nbar;
  for (e = tsfirst; ;e = e.ts_next) {
   if (!e) return;
   switch (e.type) {
   case METER:
   case CLEF:
   case KEY:
   case FORMAT:
   case STBRK:
    continue;

   case BAR:
    if (e.bar_num) {
     gene.nbar = e.bar_num;
     break;
    }
    e.text && !cfmt.contbarnb && ("1" == e.text[0] ? a = gene.nbar : (gene.nbar = a, 
    e.bar_num = gene.nbar));
   }
   break;
  }
  for (var o = e.time + s, c = gene.nbar; e; e = e.ts_next) switch (e.type) {
  case CLEF:
   if (e.new_sy) break;
   for (t = e.ts_prev; t; t = t.ts_prev) {
    if (t.new_sy) {
     t = void 0;
     break;
    }
    switch (t.type) {
    case BAR:
     if (t.seqst) break;
     continue;

    case MREST:
    case NOTE:
    case REST:
    case SPACE:
    case STBRK:
    case TUPLET:
     t = void 0;
     break;

    default:
     continue;
    }
    break;
   }
   if (!t) break;
   if (e.next.prev = e.prev, e.prev.next = e.next, e.ts_next.ts_prev = e.ts_prev, e.ts_prev.ts_next = e.ts_next, 
   e.next = t, e.prev = t.prev, e.prev.next = e, t.prev = e, e.ts_next = t, e.ts_prev = t.ts_prev, 
   e.ts_prev.ts_next = e, t.ts_prev = e, n = e.extra) {
    if (e.ts_next.extra) {
     for (;n.next; ) n = n.next;
     n.next = e.ts_next.extra, e.ts_next.extra = e.extra;
    } else e.ts_next.extra = n;
    e.extra = void 0;
   }
   e = t;
   break;

  case METER:
   s = e.wmeasure, e.time < o && (o = e.time + s);
   break;

  case MREST:
   for (c += e.nmes - 1; e.ts_next && e.ts_next.type != BAR; ) e = e.ts_next;
   break;

  case BAR:
   if (e.bar_num) {
    if (c = e.bar_num, e.time < o) {
     delete e.bar_num;
     break;
    }
   } else {
    if (e.time < o) break;
    c++;
   }
   r = e.time, t = e;
   do {
    if (t.type == BAR && t.text && !cfmt.contbarnb) {
     "1" == t.text[0] ? a = c : c = a;
     break;
    }
    t = t.next;
   } while (t && t.time == r);
   e.bar_num = c, o = e.time + s;
  }
  cfmt.measurenb < 0 && (gene.nbar = c);
 }
 function generate() {
  var e, t;
  if (compr_voice(), dupl_voice(), sort_all(), tsfirst && (set_bar_num(), tsfirst)) {
   for (output_music(), e = 0; e < voice_tb.length; e++) (t = voice_tb[e]).time = 0, 
   t.sym = t.last_sym = null, t.st = cur_sy.voices[e].st, t.second = cur_sy.voices[e].second, 
   t.clef.time = 0, delete t.have_ly, t.hy_st = 0, delete t.bar_start, delete t.slur_st, 
   delete t.s_tie, delete t.s_rtie;
   staves_found = 0;
  }
 }
 function gen_ly(e) {
  generate(), info.W && (put_words(info.W), delete info.W), e && blk_out();
 }
 function key_transp(e, t) {
  var n, r;
  switch (n = (-2 & (r = t > 0 ? Math.floor(t / 3) : -Math.floor(-t / 3))) + 7 * (1 & r) + e.k_sf, 
  (t + 210) % 3) {
  case 1:
   n = (n + 4 + 48) % 12 - 4;
   break;

  case 2:
   n = (n + 7 + 48) % 12 - 7;
   break;

  default:
   n = (n + 5 + 48) % 12 - 5;
  }
  e.k_sf = n;
 }
 function set_k_acc(e) {
  var t, n, r, i, s, a = [], o = [];
  if (e.k_sf > 0) for (i = 0; i < e.k_sf; i++) a[i] = 1, o[i] = [ 26, 23, 27, 24, 21, 25, 22 ][i]; else for (i = 0; i < -e.k_sf; i++) a[i] = -1, 
  o[i] = [ 22, 25, 21, 24, 20, 23, 26 ][i];
  for (r = e.k_a_acc.length, t = 0; t < r; t++) {
   for (s = e.k_a_acc[t], n = 0; n < i; n++) if (o[n] == s.pit) {
    a[n] = s.acc;
    break;
   }
   n == i && (a[n] = s.acc, o[n] = s.pit, i++);
  }
  for (t = 0; t < i; t++) (s = e.k_a_acc[t]) || (s = e.k_a_acc[t] = {}), s.acc = a[t], 
  s.pit = o[t];
 }
 function acc_same_pitch(e) {
  var t, n;
  if (s = curvoice.last_sym, s) for (n = s.time; s; s = s.prev) switch (s.type) {
  case BAR:
   if (s.time < n) return;
   for (;;) {
    if (s = s.prev, !s) return;
    if (s.type == NOTE) {
     if (s.time + s.dur == n) break;
     return;
    }
    if (s.time < n) return;
   }
   for (t = 0; t <= s.nhd; t++) if (s.notes[t].pit == e && s.notes[t].ti1) return s.notes[t].acc;
   return;

  case NOTE:
   for (t = 0; t <= s.nhd; t++) if (s.notes[t].pit == e) return s.notes[t].acc;
  }
 }
 const cde2fcg = [ 0, 2, 4, -1, 1, 3, 5 ], cgd2cde = [ 0, 4, 1, 5, 2, 6, 3 ], acc2 = [ -2, -1, 3, 1, 2 ];
 function note_transp(e) {
  var t, n, r, i, s, a, o, c, u, l, f = e.nhd, p = curvoice.okey.k_sf, d = curvoice.ckey.k_sf - p, h = cgd2cde[(d + 28) % 7], m = curvoice.transpose;
  for (m > 0 ? h += 7 * Math.floor(m / 3 / 12) : (0 != h && (h -= 7), h -= 7 * Math.floor(-m / 3 / 12)), 
  t = 0; t <= f; t++) {
   if (r = (l = e.notes[t]).pit, l.pit += h, l.apit = l.pit, o = cde2fcg[(r + 5 + 112) % 7], 
   !(s = l.acc)) if (curvoice.okey.a_acc) {
    for (n = 0; n < curvoice.okey.a_acc.length; n++) if ((r + 112 - (a = curvoice.okey.a_acc[n]).pit) % 7 == 0) {
     s = a.acc;
     break;
    }
   } else p > 0 ? o < p - 1 && (s = 1) : p < 0 && o >= p + 6 && (s = -1);
   if (c = o + d, s && 3 != s && (c += 7 * s), o = (Math.floor((c + 1 + 21) / 7) + 2 - 3 + 160) % 5, 
   s = acc2[o], l.acc) ; else if (curvoice.ckey.k_none) {
    if (3 == s || acc_same_pitch(l.pit)) continue;
   } else {
    if (!curvoice.ckey.a_acc) continue;
    for (u = cgd2cde[(c + 112) % 7], n = 0; n < curvoice.ckey.a_acc.length && (u + 112 - curvoice.ckey.a_acc[n].pits) % 7 != 0; n++) ;
    if (n < curvoice.ckey.a_acc.length) continue;
   }
   if (o = l.acc, (i = l.micro_d) && o != s) switch (r = l.micro_n, s) {
   case 3:
    r > i / 2 ? (r -= i / 2, l.micro_n = r, s = o) : s = -o;
    break;

   case 2:
    r > i / 2 ? (l.pit += 1, l.apit = l.pit, r -= i / 2) : r += i / 2, s = o, l.micro_n = r;
    break;

   case -2:
    r >= i / 2 ? (l.pit -= 1, l.apit = l.pit, r -= i / 2) : r += i / 2, s = o, l.micro_n = r;
   }
   l.acc = s;
  }
 }
 function get_staves(e, t) {
  var n, r, i, s, a, o, c, u, l;
  compr_voice(), dupl_voice();
  var f = 0, p = !0;
  for (a = 0; a < voice_tb.length; a++) (n = voice_tb[a]).time > f && (f = n.time), 
  n.sym && (p = !1);
  if (p || 0 == f && staves_found < 0) for (a = 0; a < par_sy.voices.length; a++) par_sy.voices[a].range = -1; else if (staves_found != f) {
   for (a = 0; a < par_sy.voices.length; a++) if (par_sy.voices[a].range >= 0) {
    curvoice = voice_tb[a];
    break;
   }
   curvoice.time = f, sym_link({
    type: STAVES
   }), par_sy.nstaff = nstaff, new_system();
  }
  if (staves_found = f, u = parse_staves(t)) {
   for (a = 0; a < voice_tb.length; a++) delete (n = voice_tb[a]).second, delete n.ignore, 
   n.time = f;
   for (l = 0, par_sy.top_voice = u[0].v, i = 0; i < u.length; i++) {
    if (a = (c = u[i]).v, n = voice_tb[a], par_sy.voices[a].range >= 0) {
     for (r = clone(n), par_sy.voices[voice_tb.length] = clone(par_sy.voices[a]), a = voice_tb.length, 
     r.v = a, r.sym = r.last_sym = null, r.time = f, voice_tb.push(r), delete r.clone; n.clone; ) n = n.clone;
     n.clone = r, n = r, c.v = a;
    }
    par_sy.voices[a].range = l++;
   }
   if ("t" == e[1]) for (i = 0; i < u.length; i++) (s = (c = u[i]).flags) & (OPEN_BRACE | OPEN_BRACE2) && (s & (OPEN_BRACE | CLOSE_BRACE)) != (OPEN_BRACE | CLOSE_BRACE) && (s & (OPEN_BRACE2 | CLOSE_BRACE2)) != (OPEN_BRACE2 | CLOSE_BRACE2) && 0 == u[i + 1].flags && (s & OPEN_PARENTH || u[i + 2].flags & OPEN_PARENTH || (u[i + 2].flags & (CLOSE_BRACE | CLOSE_BRACE2) ? u[i + 1].flags |= FL_VOICE : 0 == u[i + 2].flags && u[i + 3].flags & (CLOSE_BRACE | CLOSE_BRACE2) && (c.flags |= OPEN_PARENTH, 
   u[i + 1].flags |= CLOSE_PARENTH, u[i + 2].flags |= OPEN_PARENTH, u[i + 3].flags |= CLOSE_PARENTH)));
   for (o = -1, i = 0; i < u.length; i++) if (((s = (c = u[i]).flags) & (OPEN_PARENTH | CLOSE_PARENTH)) == (OPEN_PARENTH | CLOSE_PARENTH) && (s &= ~(OPEN_PARENTH | CLOSE_PARENTH), 
   c.flags = s), a = c.v, n = voice_tb[a], s & FL_VOICE ? (n.floating = !0, n.second = !0) : (o++, 
   par_sy.staves[o] || (par_sy.staves[o] = {
    stafflines: "|||||",
    staffscale: 1
   }), par_sy.staves[o].flags = 0), n.st = n.cst = par_sy.voices[a].st = o, par_sy.staves[o].flags |= s, 
   s & OPEN_PARENTH) {
    for (r = n; i < u.length - 1 && (a = (c = u[++i]).v, n = voice_tb[a], c.flags & MASTER_VOICE ? (r.second = !0, 
    r = n) : n.second = !0, n.st = n.cst = par_sy.voices[a].st = o, !(c.flags & CLOSE_PARENTH)); ) ;
    par_sy.staves[o].flags |= c.flags;
   }
   if (o < 0 && (o = 0), par_sy.nstaff = nstaff = o, "c" == e[1]) for (o = 0; o <= nstaff; o++) par_sy.staves[o].flags ^= STOP_BAR;
   for (a = 0; a < voice_tb.length; a++) par_sy.voices[a].range < 0 || (n = voice_tb[a], 
   par_sy.voices[a].second = n.second, !((o = n.st) > 0) || n.norepbra || par_sy.staves[o - 1].flags & STOP_BAR || (n.norepbra = !0));
   curvoice = voice_tb[par_sy.top_voice];
  }
 }
 function get_vover(e) {
  function t(e) {
   var t, n;
   for (t = 0; t < voice_tb.length; t++) if ((n = voice_tb[t]).id == e) return n;
   return (n = clone(curvoice)).v = voice_tb.length, n.id = e, n.pos = clone(curvoice.pos), 
   n.sym = n.last_sym = null, n.nm = null, n.snm = null, n.lyric_restart = n.lyric_restart = n.lyric_cont = null, 
   voice_tb.push(n), n;
  }
  var n, r, i, a, o, c, u = parse.line;
  if (!curvoice.ignore) {
   if ("|" == e || ")" == e) return curvoice.last_sym.beam_end = !0, vover ? (curvoice.time != vover.mxtime && u.error("Wrong duration in voice overlay"), 
   curvoice = vover.p_voice, void (vover = null)) : void u.error("Erroneous end of voice overlap");
   if ("(" == e) return vover ? void u.error("Voice overlay already started") : void (vover = {
    time: curvoice.time
   });
   if (curvoice.last_note) {
    if (curvoice.last_note.beam_end = !0, !(n = curvoice.voice_down)) {
     n = t(curvoice.id + "o"), curvoice.voice_down = n, n.time = 0, n.second = !0, o = n.v, 
     par_sy.voices[o] = {
      st: curvoice.st,
      second: !0,
      scale: curvoice.scale,
      transpose: curvoice.transpose,
      key: curvoice.key,
      ckey: curvoice.ckey,
      okey: curvoice.okey,
      pos: n.pos
     };
     var l = void 0 != curvoice.clone ? 1 : 0;
     for (i = par_sy.voices[curvoice.v].range, a = 0; a < par_sy.voices.length; a++) par_sy.voices[a].range > i && (par_sy.voices[a].range += l + 1);
     par_sy.voices[o].range = i + 1, l && ((r = t(n.id + "c")).second = !0, c = r.v, 
     par_sy.voices[c] = {
      second: !0,
      scale: curvoice.clone.scale,
      range: i + 2
     }, n.clone = r);
    }
    if (n.ulen = curvoice.ulen, curvoice.microscale && (n.microscale = curvoice.microscale), 
    vover) vover.p_voice ? curvoice.time != vover.mxtime && u.error("Wrong duration in voice overlay") : (vover.mxtime = curvoice.time, 
    vover.p_voice = curvoice); else {
     vover = {
      bar: !0,
      mxtime: curvoice.time,
      p_voice: curvoice
     };
     var f = n.time;
     for (s = curvoice.last_sym; !(s.type == BAR || s.time <= f); s = s.prev) ;
     vover.time = s.time;
    }
    n.time = vover.time, curvoice = n;
   } else u.error("No note before start of voice overlay");
  }
 }
 function is_voice_sig() {
  if (!curvoice.sym) return !0;
  if (0 != curvoice.time) return !1;
  for (s = curvoice.sym; s; s = s.next) switch (s.type) {
  case TEMPO:
  case PART:
  case FORMAT:
   break;

  default:
   return !1;
  }
  return !0;
 }
 function get_clef(e) {
  if (is_voice_sig()) curvoice.clef = e; else {
   if (s2 = curvoice.last_sym, s2 && s2.prev && (s2.type == KEY && !s2.k_none || s2.type == BAR)) {
    for (s3 = s2; s3.prev; s3 = s3.prev) {
     switch (s3.prev.type) {
     case KEY:
     case BAR:
      continue;
     }
     break;
    }
    curvoice.last_sym = s3.prev, sym_link(e), e.next = s3, s3.prev = e, curvoice.last_sym = s2;
   } else sym_link(e);
   e.clef_small = !0;
  }
 }
 function set_voice_param(e) {
  var t;
  for (t in cfmt.microscale && (e.microscale = cfmt.microscale), void 0 != glovar.stafflines && void 0 == e.stafflines && (e.stafflines = glovar.stafflines), 
  glovar.staffscale && (e.staffscale = glovar.staffscale), cfmt.transpose && !e.transpose && (e.transpose = cfmt.transpose), 
  parse.voice_param) e[t] = parse.voice_param[t];
  e.wmeasure || (e.wmeasure = e.meter.wmeasure);
 }
 function get_key_clef(e) {
  var t, n, r, i = e[0], s = clone(i), a = e[1];
  if (i.k_sf && !i.k_exp && i.k_a_acc && set_k_acc(i), 1 == parse.state) {
   for (void 0 != i.k_sf || i.k_a_acc || (i.k_sf = 0), cfmt.transpose && key_transp(i, cfmt.transpose), 
   t = 0; t < voice_tb.length; t++) (n = voice_tb[t]).ckey = i, n.key = clone(i), n.okey = s, 
   n.clef = a || clone(glovar.clef), i.k_none && (n.key.k_sf = 0);
   return parse.okey = s, parse.ckey = i, a ? glovar.clef = a : (glovar.clef.ctx = i.ctx, 
   glovar.clef.istart = i.istart, glovar.clef.iend = i.iend), vskip(cfmt.topspace), 
   write_heading(), reset_gen(), void (gene.nbar = cfmt.measurefirst);
  }
  if (curvoice.transpose && key_transp(i, curvoice.transpose), a && get_clef(a), is_voice_sig()) return (void 0 != i.k_sf || i.k_a_acc) && (curvoice.ckey = i, 
  curvoice.key = clone(i), i.k_none && (curvoice.key.k_sf = 0)), void (curvoice.okey = s);
  (void 0 != i.k_sf || i.k_a_acc) && (i.k_old_sf = curvoice.ckey.k_sf, curvoice.okey = s, 
  curvoice.ckey = i, (r = curvoice.last_sym) && r.type == METER ? (curvoice.last_sym = r.prev, 
  curvoice.last_sym || (curvoice.sym = null), sym_link(i), i.next = r, r.prev = i, 
  curvoice.last_sym = r) : sym_link(i));
 }
 function new_voice(e) {
  var t, n, r = voice_tb.length;
  if (1 == r && voice_tb[0].default && (delete voice_tb[0].default, !voice_tb[0].last_sym)) return (t = voice_tb[0]).id = e, 
  t;
  for (n = 0; n < r; n++) if ((t = voice_tb[n]).id == e) return t;
  return t = {
   v: n,
   id: e,
   pos: clone(cfmt.pos),
   scale: cfmt.voicescale,
   combine: cfmt.voicecombine,
   ulen: glovar.ulen,
   key: clone(parse.ckey),
   ckey: clone(parse.ckey),
   okey: clone(parse.okey),
   meter: clone(glovar.meter),
   clef: clone(glovar.clef),
   hy_st: 0
  }, cfmt.voicemap && (t.map = cfmt.voicemap), 3 == parse.state && set_voice_param(t), 
  voice_tb.push(t), par_sy.voices[n] = {
   range: -1
  }, t;
 }
 function init_tune() {
  nstaff = -1, voice_tb = [], curvoice = null, par_sy = null, new_system(), staves_found = -1, 
  parse.voice_param = null, gene = {};
 }
 function get_voice(e) {
  var t = parse_voice(e), n = curvoice.v;
  par_sy.voices[n].range < 0 && (cfmt.alignbars && parse.line.error("V: does not work with %%alignbars"), 
  staves_found >= 0 && (curvoice.ignore = !0)), t && get_clef(t);
 }
 function goto_tune() {
  var e, t;
  for (0 == voice_tb.length ? ((curvoice = new_voice("1")).clef.istart = curvoice.key.istart, 
  curvoice.clef.iend = curvoice.key.iend, nstaff = 0, curvoice.time = 0, curvoice.default = !0) : curvoice = staves_found < 0 ? voice_tb[0] : voice_tb[par_sy.top_voice], 
  e = 0; e < voice_tb.length; e++) (t = voice_tb[e]).ulen = glovar.ulen, t.key.k_bagpipe && 0 == t.pos.ste && (t.pos.ste = SL_BELOW), 
  t.key.k_none && (t.key.k_sf = 0), set_voice_param(t);
  if (staves_found < 0) {
   for (nstaff = voice_tb.length - 1, e = 0; e <= nstaff; e++) (t = voice_tb[e]).st = t.cst = e, 
   par_sy.voices[e].st = e, par_sy.voices[e].range = e, par_sy.staves[e] = {
    stafflines: "|||||",
    staffscale: 1
   };
   par_sy.nstaff = nstaff;
  }
  parse.state = 3, !curvoice.last_sym && parse.voice_opts && voice_filter();
 }
 function get_lyrics(e, t) {
  var n, r, i, s, a;
  if (!curvoice.ignore) {
   if (curvoice.pos.voc != SL_HIDDEN && (curvoice.have_ly = !0), t) {
    if (!(n = curvoice.lyric_cont)) return void parse.line.error("+: lyric without music");
   } else if (set_font("vocal"), curvoice.lyric_restart ? (curvoice.lyric_start = n = curvoice.lyric_restart, 
   curvoice.lyric_restart = null, curvoice.lyric_line = 0) : (curvoice.lyric_line++, 
   n = curvoice.lyric_start), n || (n = curvoice.sym), !n) return void parse.line.error("w: without music");
   for (i = e, s = 0; ;) {
    for (;" " == i[s] || "\t" == i[s]; ) s++;
    if (!i[s]) break;
    switch (i[s]) {
    case "|":
     for (;n && n.type != BAR; ) n = n.next;
     if (!n) return void parse.line.error("Not enough bar lines for lyric line");
     n = n.next, s++;
     continue;

    case "-":
     r = "-\n";
     break;

    case "_":
     r = "_\n";
     break;

    case "*":
     r = null;
     break;

    default:
     if ("\\" == i[s] && s == i.length - 1) return void (curvoice.lyric_cont = n);
     for (r = ""; i[s]; ) {
      switch (i[s]) {
      case "_":
      case "*":
      case "|":
       s--;

      case " ":
      case "\t":
       break;

      case "~":
       r += " ", s++;
       continue;

      case "-":
       r += "\n";
       break;

      case "\\":
       r += i[++s], s++;
       continue;

      default:
       r += i[s], s++;
       continue;
      }
      break;
     }
    }
    for (;n && (n.type != NOTE || n.grace); ) n = n.next;
    if (!n) return void parse.line.error("Too many words in lyric line");
    r && n.pos.voc != SL_HIDDEN && (r.match(/^\$\d/) && ("0" == r[1] ? set_font("vocal") : set_font("u" + r[1]), 
    r = r.slice(2)), a = {
     t: r,
     font: gene.curfont,
     w: strw(r)
    }, n.a_ly || (n.a_ly = []), n.a_ly[curvoice.lyric_line] = a), n = n.next, s++;
   }
   curvoice.lyric_cont = n;
  }
 }
 function ly_width(e, t) {
  var n, r, i, s, a, o, c, u, l, f, p, d = e.a_ly;
  for (s = 0, c = 0; c < d.length; c++) if (n = d[c]) {
   for (p = n.t, o = n.w, i = n.font.swfac, a = o + 2 * cwid(" ") * i, p[0] >= "0" && p[0] <= "9" && p.length > 2 || ":" == p[1] || "(" == p[0] || ")" == p[0] ? ("(" == p[0] ? r = cwid("(") * i : (u = p.indexOf(" "), 
   gene.curfont = gene.deffont = n.font, r = u > 0 ? strw(p.slice(0, u)) : o), (f = .4 * (o - r + 2 * cwid(" ") * i)) > 20 && (f = 20), 
   f += r, n.t[0] >= "0" && n.t[0] <= "9" && f > s && (s = f)) : "-\n" == p || "_\n" == p ? f = 0 : (f = .4 * a) > 20 && (f = 20), 
   n.shift = f, t < f && (t = f), a -= f, f = 2 * cwid(" ") * i, l = e.next; l; l = l.next) {
    switch (l.type) {
    case NOTE:
    case REST:
     if (l.a_ly && l.a_ly[c] && 0 != l.a_ly[c].w) {
      if ("-\n" != l.a_ly[c].t && "_\n" != l.a_ly[c].t) break;
      a -= f;
     } else a -= 9;
     if (a <= 0) break;
     continue;

    case CLEF:
    case METER:
    case KEY:
     a -= 10;
     continue;

    default:
     a -= 5;
    }
    break;
   }
   a > e.wr && (e.wr = a);
  }
  if (s > 0) for (c = 0; c < d.length; c++) (n = d[c]).t[0] >= "0" && n.t[0] <= "9" && (n.shift = s);
  return t;
 }
 function draw_lyrics(e, t, n, r) {
  var i, s, a, o, c, u, l, f, p, d, h, m, v, g, y, _;
  for (set_font("vocal"), g = gene.curfont, r > 0 ? (i = 0, (n -= g.size) > -cfmt.vocalspace && (n = -cfmt.vocalspace)) : (i = t - 1, 
  t = -1, n < (v = staff_tb[e.st].topbar) + cfmt.vocalspace - g.size && (n = v + cfmt.vocalspace - g.size)), 
  _ = .25 * g.size; i != t; i += r) {
   for (m = n + _, e.hy_st & 1 << i && (p = !0, e.hy_st &= ~(1 << i)), l = e.sym; l.type == CLEF || l.type == KEY || l.type == METER; l = l.next) ;
   for (l.prev ? o = l.prev.x : tsfirst.x, h = 0, u = 1.1 * g.size; l; l = l.next) if (f = l.a_ly ? l.a_ly[i] : null) f.font != g && (gene.curfont = g = f.font, 
   u < 1.1 * g.size && (u = 1.1 * g.size)), a = f.t, c = f.w, y = f.shift, p && ("_\n" == a ? a = "-\n" : "-\n" != a && (out_hyph(o, m, l.x - y - o), 
   p = !1, o = l.x + l.wr)), d && "_\n" != a && (out_wln(o + 3, m, h - o + 3), d = !1, 
   o = l.x + l.wr), "-\n" != a && "_\n" != a ? (h = l.x - y, "\n" == a[s = a.length - 1] && (a = a.slice(0, s), 
   p = !0), xy_str(h, m, a), o = h + c) : (0 == h && o > l.x - 18 && (o = l.x - 18), 
   "-" == a[0] ? p = !0 : d = !0, h = l.x - y); else switch (l.type) {
   case REST:
   case MREST:
    d && (out_wln(o + 3, m, h - o), d = !1, o = l.x + l.wr);
   }
   for (p && (p = !1, (h = realwidth - 10) < o + 10 && (h = o + 10), out_hyph(o, m, h - o), 
   cfmt.hyphencont && (e.hy_st |= 1 << i)), e.s_next; l; l = l.next) if (l.type == NOTE) {
    if (!l.a_ly) break;
    (f = l.a_ly[i]) && "_\n" == f.t && (d = !0, (h = realwidth - 15) < o + 12 && (h = o + 12));
    break;
   }
   d && (out_wln(o + 3, m, h - o + 3), d = !1), r > 0 ? n -= u : n += u;
  }
  return r > 0 && (n += u), n;
 }
 function draw_all_lyrics() {
  var e, t, n, r, i, s, a, o, c = new Array(nstaff), u = new Array(voice_tb.length), l = new Array(voice_tb.length), f = new Array(voice_tb.length), p = 0, d = 0, h = -1;
  for (n = 0; n < voice_tb.length; n++) if ((e = voice_tb[n]).sym) {
   if (e.st != h && (p = 0, d = 0, h = e.st), r = 0, e.have_ly) for (t = e.sym; t; t = t.next) {
    var m = t.a_ly;
    m && m[0] && (s = t.x, 0 != m[0].w ? (s -= m[0].shift, o = m[0].w) : o = 10, p < (a = y_get(e.st, 1, s, o)) && (p = a), 
    d > (a = y_get(e.st, 0, s, o)) && (d = a), r < m.length && (r = m.length));
   } else p < (a = y_get(e.st, 1, 0, realwidth)) && (p = a), d > (a = y_get(e.st, 0, 0, realwidth)) && (d = a);
   c[h] || (c[h] = {}), c[h].top = p, c[h].bot = d, u[n] = r, 0 != r && (0 != e.pos.voc ? l[n] = e.pos.voc == SL_ABOVE : voice_tb[e.v + 1] && voice_tb[e.v + 1].st == h && voice_tb[e.v + 1].have_ly ? l[n] = !0 : l[n] = !1, 
   l[n] ? c[h].a = !0 : c[h].b = !0);
  }
  for (i = 0, n = 0; n < voice_tb.length; n++) (e = voice_tb[n]).sym && e.have_ly && (l[n] ? f[i++] = n : (set_dscale(h = e.st), 
  u[n] > 0 && (c[h].bot = draw_lyrics(e, u[n], c[h].bot, 1))));
  for (;--i >= 0; ) n = f[i], set_dscale(h = (e = voice_tb[n]).st), c[h].top = draw_lyrics(e, u[n], c[h].top, -1);
  for (n = 0; n < voice_tb.length; n++) if ((e = voice_tb[n]).sym) {
   if (c[h = e.st].a) for (p = c[h].top + 2, t = e.sym.next; t; t = t.next) t.a_ly && y_set(h, 1, t.x - 2, 10, p);
   if (c[h].b) if (d = c[h].bot - 2, u[e.v] > 0) for (t = e.sym.next; t; t = t.next) t.a_ly && y_set(h, 0, t.x - 2, 10, d); else y_set(h, 0, 0, realwidth, d);
  }
 }
 function parse_gchord(e) {
  var t, n, r = parse.line;
  if (e.length > 1) n = e.slice(1, -1); else for (n = ""; ;) {
   if (void 0 == (t = r.next_char())) return void r.error("No end of guitar chord");
   if ('"' == t) break;
   n += t;
  }
  gchord ? gchord += "\n" + cnv_escape(n) : gchord = cnv_escape(n);
 }
 function gch_acc(e, t, n) {
  for (var r = 1; !((r = e.indexOf(t, r)) < 0); ) "\\" == e[r - 1] ? e = 2 == r || "/" == e[r - 3] ? e.slice(0, r - 1) + e.slice(r) : e.slice(0, r - 1) + n + e.slice(r + 1) : 1 != r && "/" != e[r - 2] || (e = e.slice(0, r) + n + e.slice(r + 1)), 
  r++;
  return e;
 }
 const note_names = "CDEFGAB", latin_names = [ "Do", "RÃ©", "Mi", "Fa", "Sol", "La", "Si" ], acc_name = [ "bb", "b", "", "#", "##" ];
 function gch_tr1(e) {
  var t, n, r, i, s, a, o, c, u, l;
  switch (n = 0, e[0]) {
  case "A":
  case "B":
   r = e.charCodeAt(0) - "A".charCodeAt(0) + 5;
   break;

  case "C":
  case "E":
  case "G":
   r = e.charCodeAt(0) - "C".charCodeAt(0);
   break;

  case "D":
   if ("o" == e[1]) {
    n = 1, r = 0;
    break;
   }
   r = 1;
   break;

  case "F":
   "a" == e[1] && (n = 1), r = 3;
   break;

  case "L":
   n = 1, r = 5;
   break;

  case "M":
   n = 1, r = 2;
   break;

  case "R":
   n = 1, "e" != e[1] && n++, r = 1;
   break;

  case "S":
   n = 1, "o" == e[1] ? (n++, r = 4) : r = 6;
   break;

  default:
   return e;
  }
  return c = 0, "#" == e[u = n + 1] ? (c++, "#" == e[++u] && (c++, u++)) : "b" == e[u] ? (c--, 
  "b" == e[++u] && (c--, u++)) : "=" == e[u] && u++, s = curvoice.ckey.k_sf - curvoice.okey.k_sf, 
  a = cde2fcg[r] + s + 7 * c, o = cgd2cde[(a + 112) % 7], i = (Math.floor((a + 1 + 21) / 7) + 2 - 3 + 160) % 5, 
  t = n ? latin_names[o] + acc_name[i] : note_names[o] + acc_name[i], (l = e.indexOf("/", u)) < 0 ? t + e.slice(u) : (r = note_names.indexOf(e[++l])) < 0 ? t + e.slice(u) : (t += e.slice(u, l), 
  "#" == e[++l] ? (c = 1, l++) : "b" == e[l] ? (c = -1, l++) : c = 0, a = cde2fcg[r] + s + 7 * c, 
  o = cgd2cde[(a + 112) % 7], i = (Math.floor((a + 1 + 21) / 7) + 2 - 3 + 160) % 5, 
  note_names[o] + acc_name[i] + e.slice(l));
 }
 function gch_transp(e) {
  for (var t, n, r = 0; ;) {
   if (!(t = e.a_gch[r++])) return;
   if ("g" == t.type) break;
  }
  (r = (n = t.text).indexOf("\t")) >= 0 && (r++, n = n.slice(0, r) + gch_tr1(n.slice(r))), 
  t.text = gch_tr1(n, 0);
 }
 function gch_build(e) {
  if (curvoice.pos.gch == SL_HIDDEN) return;
  var t, n, r, i, s, a, o, u, l = curvoice.pos.gch == SL_BELOW ? -1 : 1, f = get_font("gchord"), p = get_font("annotation"), d = f.size, h = p.size, m = 0, v = 0, g = 0, y = 0, _ = cfmt.gchordbox, b = "\n";
  for (e.a_gch = [], (t = new scanBuf()).buffer = gchord, t.index = 0; c = t.char(), 
  c; ) {
   switch (n = {
    text: ""
   }, "n" != b && "^_<>@".indexOf(c) >= 0 ? (antype = c, c = t.next_char(), "@" == antype && (s = t.get_float(), 
   c = t.char(), "," != c ? (error(1, e, 'Error in annotation "@"'), a = 0) : (t.advance(), 
   a = t.get_float(), c = t.char(), " " == c && (c = t.next_char())))) : "\n" == b && (antype = "g"), 
   "g" == antype ? (n.font = f, n.box = _) : n.font = p, n.type = antype, antype) {
   default:
    if (l < 0) break;
    m += d, _ && (m += 2);
    break;

   case "^":
    m += h;
    break;

   case "_":
    break;

   case "<":
    g += .5 * h;
    break;

   case ">":
    y += .5 * h;
    break;

   case "@":
    n.x = s, n.y = a, a -= h;
   }
   for (;;) {
    switch (c) {
    case "\\":
     if (c = t.next_char(), "n" == c) break;
     n.text += "\\";

    default:
     n.text += c, c = t.next_char();
     continue;

    case "&":
     for (;;) {
      switch (n.text += c, c = t.next_char(), c) {
      default:
       continue;

      case ";":
      case void 0:
      case "\n":
      case "\\":
      }
      break;
     }
     if (";" == c) {
      n.text += c, c = t.next_char();
      continue;
     }
     break;

    case void 0:
    case ";":
    case "\n":
    }
    break;
   }
   if (e.a_gch.push(n), !c) break;
   b = c, t.advance();
  }
  curvoice.transpose && gch_transp(e);
  for (u = e.a_gch.length, o = 0; o < u; o++) if ("g" == (n = e.a_gch[o]).type && (n.text.indexOf("#") && (n.text = gch_acc(n.text, "#", "â™¯")), 
  n.text.indexOf("b") && (n.text = gch_acc(n.text, "b", "â™­")), n.text.indexOf("=") && (n.text = gch_acc(n.text, "=", "â™®"))), 
  "@" != n.type || user.anno_start) switch (gene.curfont = n.font, r = strw(n.text), 
  n.w = r, n.type) {
  case "@":
   break;

  case "_":
   (i = .4 * r) > 8 && (i = 8), n.x = -i, v -= h, n.y = v;
   break;

  case "^":
   (i = .4 * r) > 8 && (i = 8), n.x = -i, m -= h, n.y = m;
   break;

  default:
   (i = .4 * r) > 8 && (i = 8), n.x = -i, l < 0 ? (v -= d, n.y = v, _ && (v -= 2, n.y -= 1)) : (m -= d, 
   n.y = m, _ && (m -= 2, n.y -= 1));
   break;

  case "<":
   n.x = -(r + 6), g -= h, n.y = g;
   break;

  case ">":
   n.x = 6, y -= h, n.y = y;
  }
 }
 function draw_gchord(e, t, n) {
  var r, i, s, a, o, c, u, l, f, p, d, m, v, g = e.a_gch[0].w, y = y_get(e.st, 1, e.x - 2, g), _ = y_get(e.st, 0, e.x - 2, g), b = e.a_gch.length, x = e.yav || 0;
  for (a = 0; a < b && !("g" == (r = e.a_gch[a]).type && (i = r, r.y < 0)); a++) ;
  for (i && (i.y >= 0 ? y < n && (y = n) : _ > t && (_ = t)), set_dscale(e.st), d = p = e.x, 
  m = -100, v = 100, 0, a = 0; a < b; a++) {
   switch (use_font((r = e.a_gch[a]).font), gene.curfont = gene.deffont = r.font, h = r.font.size, 
   g = r.w, o = e.x + r.x, s = r.text, r.type) {
   case "_":
    c = r.y + _, y_set(e.st, 0, o, g, c - .2 * h - 2);
    break;

   case "^":
    c = r.y + y, y_set(e.st, 1, o, g, c + .8 * h + 2);
    break;

   default:
    if (f = r.box ? 3 : 2, r.y >= 0 ? (c = r.y + y, y_set(e.st, !0, o, g, c + h + f)) : (c = r.y + _, 
    y_set(e.st, !1, o, g, c - f)), r.box && (p > o && (p = o), d < (g += o) && (d = g), 
    v > c && (v = c), m < c + h && (m = c + h), 0), (u = s.indexOf("\t")) >= 0) {
     o = realwidth;
     for (var w = e.next; w; w = w.next) {
      switch (w.type) {
      default:
       continue;

      case NOTE:
      case REST:
      case BAR:
       o = w.x;
      }
      break;
     }
     for (l = 2; !((u = s.indexOf("\t", u + 1)) < 0); ) l++;
     var k = (o - e.x) / l;
     for (o = e.x, user.anno_start && user.anno_start("gchord", e.istart, e.iend, o - 2, c + h + 2, g + 4, h + 4), 
     l = u = 0; !((u = s.indexOf("\t", l)) < 0); ) xy_str(o, c + .2 * h, s.slice(l, u), "c"), 
     o += k, l = u + 1;
     xy_str(o, c + .2 * h, s.slice(l), "c"), user.anno_stop && user.anno_stop("annot", e.istart, e.iend, e.x - 2, c + h + 2, g + 4, h + 4);
     continue;
    }
    break;

   case "<":
    e.notes[0].acc && (o -= e.notes[0].shac), c = r.y + x;
    break;

   case ">":
    o += e.xmx, e.dots > 0 && (o += 1.5 + 3.5 * e.dots), c = r.y + x;
    break;

   case "@":
    (c = r.y + x) > 0 ? y_set(e.st, 1, o, 1, c + .8 * h + 3) : y_set(e.st, 0, o, 1, c - .2 * h);
   }
   user.anno_start && user.anno_start("annot", e.istart, e.iend, o - 2, c + h + 2, g + 4, h + 4), 
   xy_str(o, c + .2 * h, s), user.anno_stop && user.anno_stop("annot", e.istart, e.iend, o - 2, c + h + 2, g + 4, h + 4);
  }
  d != p && (g = d - (p -= 2), h = m - v + 3, xybox(p, v - 1 + h, g, h));
 }
 function psdeco(e, t, n, r) {
  return !1;
 }
 function pshdeco(e, t, n, r) {
  return !1;
 }
 function psxygl(e, t, n) {
  return !1;
 }
 return abc2svg_init(), this;
}

var Abcdf_Parser = function() {
 "use strict";
 function e(t, n, r, i) {
  this.message = t, this.expected = n, this.found = r, this.location = i, this.name = "SyntaxError", 
  "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
 }
 return function(e, t) {
  function n() {
   this.constructor = e;
  }
  n.prototype = t.prototype, e.prototype = new n();
 }(e, Error), e.buildMessage = function(e, t) {
  var n = {
   literal: function(e) {
    return '"' + i(e.text) + '"';
   },
   class: function(e) {
    var t, n = "";
    for (t = 0; t < e.parts.length; t++) n += e.parts[t] instanceof Array ? s(e.parts[t][0]) + "-" + s(e.parts[t][1]) : s(e.parts[t]);
    return "[" + (e.inverted ? "^" : "") + n + "]";
   },
   any: function(e) {
    return "any character";
   },
   end: function(e) {
    return "end of input";
   },
   other: function(e) {
    return e.description;
   }
  };
  function r(e) {
   return e.charCodeAt(0).toString(16).toUpperCase();
  }
  function i(e) {
   return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
    return "\\x0" + r(e);
   }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
    return "\\x" + r(e);
   });
  }
  function s(e) {
   return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
    return "\\x0" + r(e);
   }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
    return "\\x" + r(e);
   });
  }
  return "Expected " + function(e) {
   var t, r, i, s = new Array(e.length);
   for (t = 0; t < e.length; t++) s[t] = (i = e[t], n[i.type](i));
   if (s.sort(), s.length > 0) {
    for (t = 1, r = 1; t < s.length; t++) s[t - 1] !== s[t] && (s[r] = s[t], r++);
    s.length = r;
   }
   switch (s.length) {
   case 1:
    return s[0];

   case 2:
    return s[0] + " or " + s[1];

   default:
    return s.slice(0, -1).join(", ") + ", or " + s[s.length - 1];
   }
  }(e) + " but " + function(e) {
   return e ? '"' + i(e) + '"' : "end of input";
  }(t) + " found.";
 }, {
  SyntaxError: e,
  parse: function(t, n) {
   n = void 0 !== n ? n : {};
   var r, i = {}, s = {
    sequence: Z
   }, a = Z, o = "@", c = W("@", !1), u = function(e, t) {
    var n = {
     upper: e
    };
    return t && (n.lower = t[1]), n;
   }, l = "&", f = W("&", !1), p = "", d = function(e) {
    return {
     score_fingerings: e
    };
   }, h = "/", m = W("/", !1), v = function(e, t, n) {
    var r = {
     first: e,
     last: null,
     segmenter: n
    };
    return t && (r.last = t[1]), r;
   }, g = function(e, t, n) {
    var r = {
     first: e,
     last: null,
     segmenter: n
    };
    return t && (r.last = t[1]), r;
   }, y = function(e, t, n) {
    var r = {
     first: e,
     last: null,
     segmenter: n
    };
    return t && (r.last = t[1]), r;
   }, _ = "(", b = W("(", !1), x = ")", w = W(")", !1), k = function(e) {
    return {
     ornaments: e[1]
    };
   }, E = function(e, t, n) {
    return {
     soft: e,
     fingering: t,
     damper: n
    };
   }, C = "x", T = W("x", !1), S = function(e, t) {
    return {
     soft: e,
     fingering: {
      strike: null,
      release: null
     },
     damper: t
    };
   }, O = "-", A = W("-", !1), N = function(e, t) {
    var n = {
     strike: e,
     release: null
    };
    return t && (n.release = t[1]), n;
   }, B = function(e, t) {
    return {
     hand: e,
     digit: t
    };
   }, R = /^[_\^]/, P = J([ "_", "^" ], !1, !1), L = /^[,;.]/, I = J([ ",", ";", "." ], !1, !1), M = /^[pf]/, D = J([ "p", "f" ], !1, !1), j = /^[<>]/, V = J([ "<", ">" ], !1, !1), F = /^[1-5]/, q = J([ [ "1", "5" ] ], !1, !1), z = 0, H = [ {
    line: 1,
    column: 1
   } ], U = 0, $ = [], Q = 0;
   if ("startRule" in n) {
    if (!(n.startRule in s)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
    a = s[n.startRule];
   }
   function W(e, t) {
    return {
     type: "literal",
     text: e,
     ignoreCase: t
    };
   }
   function J(e, t, n) {
    return {
     type: "class",
     parts: e,
     inverted: t,
     ignoreCase: n
    };
   }
   function X(e) {
    var n, r = H[e];
    if (r) return r;
    for (n = e - 1; !H[n]; ) n--;
    for (r = {
     line: (r = H[n]).line,
     column: r.column
    }; n < e; ) 10 === t.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
    return H[e] = r, r;
   }
   function K(e, t) {
    var n = X(e), r = X(t);
    return {
     start: {
      offset: e,
      line: n.line,
      column: n.column
     },
     end: {
      offset: t,
      line: r.line,
      column: r.column
     }
    };
   }
   function G(e) {
    z < U || (z > U && (U = z, $ = []), $.push(e));
   }
   function Y(t, n, r) {
    return new e(e.buildMessage(t, n), t, n, r);
   }
   function Z() {
    var e, n, r, s, a;
    return e = z, (n = ee()) !== i ? (r = z, 64 === t.charCodeAt(z) ? (s = o, z++) : (s = i, 
    0 === Q && G(c)), s !== i && (a = ee()) !== i ? r = s = [ s, a ] : (z = r, r = i), 
    r === i && (r = null), r !== i ? e = n = u(n, r) : (z = e, e = i)) : (z = e, e = i), 
    e;
   }
   function ee() {
    var e, n, r, s;
    return e = z, (n = te()) !== i ? (38 === t.charCodeAt(z) ? (r = l, z++) : (r = i, 
    0 === Q && G(f)), r !== i && (s = ee()) !== i ? e = n = [ n, r, s ] : (z = e, e = i)) : (z = e, 
    e = i), e === i && (e = te()) === i && (e = p), e;
   }
   function te() {
    var e, t;
    for (z, e = [], t = ne(); t !== i; ) e.push(t), t = ne();
    return e !== i && (e = d(e)), e;
   }
   function ne() {
    var e, n, r, s, a;
    return e = z, (n = re()) !== i ? (r = z, 47 === t.charCodeAt(z) ? (s = h, z++) : (s = i, 
    0 === Q && G(m)), s !== i && (a = re()) !== i ? r = s = [ s, a ] : (z = r, r = i), 
    r === i && (r = null), r !== i ? ((s = ce()) === i && (s = null), s !== i ? e = n = v(n, r, s) : (z = e, 
    e = i)) : (z = e, e = i)) : (z = e, e = i), e === i && (e = z, (n = ie()) !== i ? (r = z, 
    47 === t.charCodeAt(z) ? (s = h, z++) : (s = i, 0 === Q && G(m)), s !== i && (a = ie()) !== i ? r = s = [ s, a ] : (z = r, 
    r = i), r === i && (r = null), r !== i ? ((s = ce()) === i && (s = null), s !== i ? e = n = g(n, r, s) : (z = e, 
    e = i)) : (z = e, e = i)) : (z = e, e = i), e === i && (e = z, (n = se()) !== i ? (r = z, 
    47 === t.charCodeAt(z) ? (s = h, z++) : (s = i, 0 === Q && G(m)), s !== i && (a = se()) !== i ? r = s = [ s, a ] : (z = r, 
    r = i), r === i && (r = null), r !== i ? ((s = ce()) === i && (s = null), s !== i ? e = n = y(n, r, s) : (z = e, 
    e = i)) : (z = e, e = i)) : (z = e, e = i))), e;
   }
   function re() {
    var e, n, r, s;
    if (z, e = z, 40 === t.charCodeAt(z) ? (n = _, z++) : (n = i, 0 === Q && G(b)), 
    n !== i) {
     if (r = [], (s = ie()) !== i) for (;s !== i; ) r.push(s), s = ie(); else r = i;
     r !== i ? (41 === t.charCodeAt(z) ? (s = x, z++) : (s = i, 0 === Q && G(w)), s !== i ? e = n = [ n, r, s ] : (z = e, 
     e = i)) : (z = e, e = i);
    } else z = e, e = i;
    return e !== i && (e = k(e)), e;
   }
   function ie() {
    var e, n, r, s;
    return e = z, (n = ue()) === i && (n = null), n !== i && (r = function() {
     var e, n, r, s, a;
     return e = z, (n = ae()) !== i ? (r = z, 45 === t.charCodeAt(z) ? (s = O, z++) : (s = i, 
     0 === Q && G(A)), s !== i && (a = ae()) !== i ? r = s = [ s, a ] : (z = r, r = i), 
     r === i && (r = null), r !== i ? (n = N(n, r), e = n) : (z = e, e = i)) : (z = e, 
     e = i), e;
    }()) !== i ? ((s = oe()) === i && (s = null), s !== i ? e = n = E(n, r, s) : (z = e, 
    e = i)) : (z = e, e = i), e;
   }
   function se() {
    var e, n, r, s;
    return e = z, (n = ue()) === i && (n = null), n !== i ? (120 === t.charCodeAt(z) ? (r = C, 
    z++) : (r = i, 0 === Q && G(T)), r !== i ? ((s = oe()) === i && (s = null), s !== i ? e = n = S(n, s) : (z = e, 
    e = i)) : (z = e, e = i)) : (z = e, e = i), e;
   }
   function ae() {
    var e, n, r;
    return e = z, (n = function() {
     var e;
     return j.test(t.charAt(z)) ? (e = t.charAt(z), z++) : (e = i, 0 === Q && G(V)), 
     e;
    }()) === i && (n = null), n !== i && (r = function() {
     var e;
     return F.test(t.charAt(z)) ? (e = t.charAt(z), z++) : (e = i, 0 === Q && G(q)), 
     e;
    }()) !== i ? e = n = B(n, r) : (z = e, e = i), e;
   }
   function oe() {
    var e;
    return R.test(t.charAt(z)) ? (e = t.charAt(z), z++) : (e = i, 0 === Q && G(P)), 
    e;
   }
   function ce() {
    var e;
    return L.test(t.charAt(z)) ? (e = t.charAt(z), z++) : (e = i, 0 === Q && G(I)), 
    e;
   }
   function ue() {
    var e;
    return M.test(t.charAt(z)) ? (e = t.charAt(z), z++) : (e = i, 0 === Q && G(D)), 
    e;
   }
   if ((r = a()) !== i && z === t.length) return r;
   throw r !== i && z < t.length && G({
    type: "end"
   }), Y($, U < t.length ? t.charAt(U) : null, U < t.length ? K(U, U + 1) : K(U, U));
  }
 };
}(), AbcdfRaw_Parser = function() {
 "use strict";
 function e(t, n, r, i) {
  this.message = t, this.expected = n, this.found = r, this.location = i, this.name = "SyntaxError", 
  "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
 }
 return function(e, t) {
  function n() {
   this.constructor = e;
  }
  n.prototype = t.prototype, e.prototype = new n();
 }(e, Error), e.buildMessage = function(e, t) {
  var n = {
   literal: function(e) {
    return '"' + i(e.text) + '"';
   },
   class: function(e) {
    var t, n = "";
    for (t = 0; t < e.parts.length; t++) n += e.parts[t] instanceof Array ? s(e.parts[t][0]) + "-" + s(e.parts[t][1]) : s(e.parts[t]);
    return "[" + (e.inverted ? "^" : "") + n + "]";
   },
   any: function(e) {
    return "any character";
   },
   end: function(e) {
    return "end of input";
   },
   other: function(e) {
    return e.description;
   }
  };
  function r(e) {
   return e.charCodeAt(0).toString(16).toUpperCase();
  }
  function i(e) {
   return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
    return "\\x0" + r(e);
   }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
    return "\\x" + r(e);
   });
  }
  function s(e) {
   return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
    return "\\x0" + r(e);
   }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
    return "\\x" + r(e);
   });
  }
  return "Expected " + function(e) {
   var t, r, i, s = new Array(e.length);
   for (t = 0; t < e.length; t++) s[t] = (i = e[t], n[i.type](i));
   if (s.sort(), s.length > 0) {
    for (t = 1, r = 1; t < s.length; t++) s[t - 1] !== s[t] && (s[r] = s[t], r++);
    s.length = r;
   }
   switch (s.length) {
   case 1:
    return s[0];

   case 2:
    return s[0] + " or " + s[1];

   default:
    return s.slice(0, -1).join(", ") + ", or " + s[s.length - 1];
   }
  }(e) + " but " + function(e) {
   return e ? '"' + i(e) + '"' : "end of input";
  }(t) + " found.";
 }, {
  SyntaxError: e,
  parse: function(t, n) {
   n = void 0 !== n ? n : {};
   var r, i = {}, s = {
    sequence: H
   }, a = H, o = "@", c = D("@", !1), u = "&", l = D("&", !1), f = "", p = "/", d = D("/", !1), h = "(", m = D("(", !1), v = ")", g = D(")", !1), y = "x", _ = D("x", !1), b = "-", x = D("-", !1), w = /^[_\^]/, k = j([ "_", "^" ], !1, !1), E = /^[,;.]/, C = j([ ",", ";", "." ], !1, !1), T = /^[pf]/, S = j([ "p", "f" ], !1, !1), O = /^[<>]/, A = j([ "<", ">" ], !1, !1), N = /^[1-5]/, B = j([ [ "1", "5" ] ], !1, !1), R = 0, P = [ {
    line: 1,
    column: 1
   } ], L = 0, I = [], M = 0;
   if ("startRule" in n) {
    if (!(n.startRule in s)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
    a = s[n.startRule];
   }
   function D(e, t) {
    return {
     type: "literal",
     text: e,
     ignoreCase: t
    };
   }
   function j(e, t, n) {
    return {
     type: "class",
     parts: e,
     inverted: t,
     ignoreCase: n
    };
   }
   function V(e) {
    var n, r = P[e];
    if (r) return r;
    for (n = e - 1; !P[n]; ) n--;
    for (r = {
     line: (r = P[n]).line,
     column: r.column
    }; n < e; ) 10 === t.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
    return P[e] = r, r;
   }
   function F(e, t) {
    var n = V(e), r = V(t);
    return {
     start: {
      offset: e,
      line: n.line,
      column: n.column
     },
     end: {
      offset: t,
      line: r.line,
      column: r.column
     }
    };
   }
   function q(e) {
    R < L || (R > L && (L = R, I = []), I.push(e));
   }
   function z(t, n, r) {
    return new e(e.buildMessage(t, n), t, n, r);
   }
   function H() {
    var e, n, r, s, a;
    return e = R, (n = U()) !== i ? (r = R, 64 === t.charCodeAt(R) ? (s = o, R++) : (s = i, 
    0 === M && q(c)), s !== i && (a = U()) !== i ? r = s = [ s, a ] : (R = r, r = i), 
    r === i && (r = null), r !== i ? e = n = [ n, r ] : (R = e, e = i)) : (R = e, e = i), 
    e;
   }
   function U() {
    var e, n, r, s;
    return e = R, (n = $()) !== i ? (38 === t.charCodeAt(R) ? (r = u, R++) : (r = i, 
    0 === M && q(l)), r !== i && (s = U()) !== i ? e = n = [ n, r, s ] : (R = e, e = i)) : (R = e, 
    e = i), e === i && (e = $()) === i && (e = f), e;
   }
   function $() {
    var e, t;
    for (e = [], t = Q(); t !== i; ) e.push(t), t = Q();
    return e;
   }
   function Q() {
    var e, n, r, s, a;
    return e = R, (n = W()) !== i ? (r = R, 47 === t.charCodeAt(R) ? (s = p, R++) : (s = i, 
    0 === M && q(d)), s !== i && (a = W()) !== i ? r = s = [ s, a ] : (R = r, r = i), 
    r === i && (r = null), r !== i ? ((s = Y()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (R = e, 
    e = i)) : (R = e, e = i)) : (R = e, e = i), e === i && (e = R, (n = J()) !== i ? (r = R, 
    47 === t.charCodeAt(R) ? (s = p, R++) : (s = i, 0 === M && q(d)), s !== i && (a = J()) !== i ? r = s = [ s, a ] : (R = r, 
    r = i), r === i && (r = null), r !== i ? ((s = Y()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (R = e, 
    e = i)) : (R = e, e = i)) : (R = e, e = i), e === i && (e = R, (n = X()) !== i ? (r = R, 
    47 === t.charCodeAt(R) ? (s = p, R++) : (s = i, 0 === M && q(d)), s !== i && (a = X()) !== i ? r = s = [ s, a ] : (R = r, 
    r = i), r === i && (r = null), r !== i ? ((s = Y()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (R = e, 
    e = i)) : (R = e, e = i)) : (R = e, e = i))), e;
   }
   function W() {
    var e, n, r, s;
    if (e = R, 40 === t.charCodeAt(R) ? (n = h, R++) : (n = i, 0 === M && q(m)), n !== i) {
     if (r = [], (s = J()) !== i) for (;s !== i; ) r.push(s), s = J(); else r = i;
     r !== i ? (41 === t.charCodeAt(R) ? (s = v, R++) : (s = i, 0 === M && q(g)), s !== i ? e = n = [ n, r, s ] : (R = e, 
     e = i)) : (R = e, e = i);
    } else R = e, e = i;
    return e;
   }
   function J() {
    var e, n, r, s;
    return e = R, (n = Z()) === i && (n = null), n !== i && (r = function() {
     var e, n, r, s, a;
     return e = R, (n = K()) !== i ? (r = R, 45 === t.charCodeAt(R) ? (s = b, R++) : (s = i, 
     0 === M && q(x)), s !== i && (a = K()) !== i ? r = s = [ s, a ] : (R = r, r = i), 
     r === i && (r = null), r !== i ? e = n = [ n, r ] : (R = e, e = i)) : (R = e, e = i), 
     e;
    }()) !== i ? ((s = G()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (R = e, 
    e = i)) : (R = e, e = i), e;
   }
   function X() {
    var e, n, r, s;
    return e = R, (n = Z()) === i && (n = null), n !== i ? (120 === t.charCodeAt(R) ? (r = y, 
    R++) : (r = i, 0 === M && q(_)), r !== i ? ((s = G()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (R = e, 
    e = i)) : (R = e, e = i)) : (R = e, e = i), e;
   }
   function K() {
    var e, n, r;
    return e = R, (n = function() {
     var e;
     return O.test(t.charAt(R)) ? (e = t.charAt(R), R++) : (e = i, 0 === M && q(A)), 
     e;
    }()) === i && (n = null), n !== i && (r = function() {
     var e;
     return N.test(t.charAt(R)) ? (e = t.charAt(R), R++) : (e = i, 0 === M && q(B)), 
     e;
    }()) !== i ? e = n = [ n, r ] : (R = e, e = i), e;
   }
   function G() {
    var e;
    return w.test(t.charAt(R)) ? (e = t.charAt(R), R++) : (e = i, 0 === M && q(k)), 
    e;
   }
   function Y() {
    var e;
    return E.test(t.charAt(R)) ? (e = t.charAt(R), R++) : (e = i, 0 === M && q(C)), 
    e;
   }
   function Z() {
    var e;
    return T.test(t.charAt(R)) ? (e = t.charAt(R), R++) : (e = i, 0 === M && q(S)), 
    e;
   }
   if ((r = a()) !== i && R === t.length) return r;
   throw r !== i && R < t.length && q({
    type: "end"
   }), z(I, L < t.length ? t.charAt(L) : null, L < t.length ? F(L, L + 1) : F(L, L));
  }
 };
}();

Downloadify = window.Downloadify = {
 queue: {},
 uid: new Date().getTime(),
 getTextForSave: function(e) {
  var t = Downloadify.queue[e];
  return t ? t.getData() : "";
 },
 getFileNameForSave: function(e) {
  var t = Downloadify.queue[e];
  return t ? t.getFilename() : "";
 },
 getDataTypeForSave: function(e) {
  var t = Downloadify.queue[e];
  return t ? t.getDataType() : "";
 },
 saveComplete: function(e) {
  var t = Downloadify.queue[e];
  return t && t.complete(), !0;
 },
 saveCancel: function(e) {
  var t = Downloadify.queue[e];
  return t && t.cancel(), !0;
 },
 saveError: function(e) {
  var t = Downloadify.queue[e];
  return t && t.error(), !0;
 },
 addToQueue: function(e) {
  Downloadify.queue[e.queue_name] = e;
 },
 getUID: function(e) {
  return "" == e.id && (e.id = "downloadify_" + Downloadify.uid++), e.id;
 }
}, Downloadify.create = function(e, t) {
 var n = "string" == typeof e ? document.getElementById(e) : e;
 return new Downloadify.Container(n, t);
}, Downloadify.Container = function(e, t) {
 var n = this;
 n.el = e, n.enabled = !0, n.dataCallback = null, n.filenameCallback = null, n.data = null, 
 n.filename = null, n.enable = function() {
  document.getElementById(n.flashContainer.id).setEnabled(!0), n.enabled = !0;
 }, n.disable = function() {
  document.getElementById(n.flashContainer.id).setEnabled(!1), n.enabled = !1;
 }, n.getData = function() {
  return n.enabled ? n.dataCallback ? n.dataCallback() : n.data ? n.data : "" : "";
 }, n.getFilename = function() {
  return n.filenameCallback ? n.filenameCallback() : n.filename ? n.filename : "";
 }, n.getDataType = function() {
  return n.options.dataType ? n.options.dataType : "string";
 }, n.complete = function() {
  "function" == typeof n.options.onComplete && n.options.onComplete();
 }, n.cancel = function() {
  "function" == typeof n.options.onCancel && n.options.onCancel();
 }, n.error = function() {
  "function" == typeof n.options.onError && n.options.onError();
 }, function() {
  n.options = t, n.options.append || (n.el.innerHTML = ""), n.flashContainer = document.createElement("span"), 
  n.el.appendChild(n.flashContainer), n.queue_name = Downloadify.getUID(n.flashContainer), 
  "function" == typeof n.options.filename ? n.filenameCallback = n.options.filename : n.options.filename && (n.filename = n.options.filename), 
  "function" == typeof n.options.data ? n.dataCallback = n.options.data : n.options.data && (n.data = n.options.data);
  var e = {
   queue_name: n.queue_name,
   width: n.options.width,
   height: n.options.height
  }, r = {
   allowScriptAccess: "always"
  }, i = {
   id: n.flashContainer.id,
   name: n.flashContainer.id
  };
  !1 === n.options.enabled && (n.enabled = !1), !0 === n.options.transparent && (r.wmode = "transparent"), 
  n.options.downloadImage && (e.downloadImage = n.options.downloadImage), swfobject.embedSWF(n.options.swf, n.flashContainer.id, n.options.width, n.options.height, "10", null, e, r, i), 
  Downloadify.addToQueue(n);
 }();
}, Downloadify.defaultOptions = {
 swf: "media/downloadify.swf",
 downloadImage: "images/download.png",
 width: 100,
 height: 30,
 transparent: !0,
 append: !1,
 dataType: "string"
}, "undefined" != typeof jQuery && function(e) {
 e.fn.downloadify = function(t) {
  return this.each(function() {
   t = e.extend({}, Downloadify.defaultOptions, t);
   var n = Downloadify.create(this, t);
   e(this).data("Downloadify", n);
  });
 };
}(jQuery), "undefined" != typeof MooTools && Element.implement({
 downloadify: function(e) {
  return e = $merge(Downloadify.defaultOptions, e), this.store("Downloadify", Downloadify.create(this, e));
 }
}), function(e) {
 if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
  var t;
  "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), 
  t.JSZip = e();
 }
}(function() {
 return function e(t, n, r) {
  function i(a, o) {
   if (!n[a]) {
    if (!t[a]) {
     var c = "function" == typeof require && require;
     if (!o && c) return c(a, !0);
     if (s) return s(a, !0);
     throw new Error("Cannot find module '" + a + "'");
    }
    var u = n[a] = {
     exports: {}
    };
    t[a][0].call(u.exports, function(e) {
     var n = t[a][1][e];
     return i(n || e);
    }, u, u.exports, e, t, n, r);
   }
   return n[a].exports;
  }
  for (var s = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
  return i;
 }({
  1: [ function(e, t, n) {
   "use strict";
   var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   n.encode = function(e, t) {
    for (var n, i, s, a, o, c, u, l = "", f = 0; f < e.length; ) a = (n = e.charCodeAt(f++)) >> 2, 
    o = (3 & n) << 4 | (i = e.charCodeAt(f++)) >> 4, c = (15 & i) << 2 | (s = e.charCodeAt(f++)) >> 6, 
    u = 63 & s, isNaN(i) ? c = u = 64 : isNaN(s) && (u = 64), l = l + r.charAt(a) + r.charAt(o) + r.charAt(c) + r.charAt(u);
    return l;
   }, n.decode = function(e, t) {
    var n, i, s, a, o, c, u = "", l = 0;
    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length; ) n = r.indexOf(e.charAt(l++)) << 2 | (a = r.indexOf(e.charAt(l++))) >> 4, 
    i = (15 & a) << 4 | (o = r.indexOf(e.charAt(l++))) >> 2, s = (3 & o) << 6 | (c = r.indexOf(e.charAt(l++))), 
    u += String.fromCharCode(n), 64 != o && (u += String.fromCharCode(i)), 64 != c && (u += String.fromCharCode(s));
    return u;
   };
  }, {} ],
  2: [ function(e, t, n) {
   "use strict";
   function r() {
    this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, 
    this.compressedContent = null;
   }
   r.prototype = {
    getContent: function() {
     return null;
    },
    getCompressedContent: function() {
     return null;
    }
   }, t.exports = r;
  }, {} ],
  3: [ function(e, t, n) {
   "use strict";
   n.STORE = {
    magic: "\0\0",
    compress: function(e, t) {
     return e;
    },
    uncompress: function(e) {
     return e;
    },
    compressInputType: null,
    uncompressInputType: null
   }, n.DEFLATE = e("./flate");
  }, {
   "./flate": 8
  } ],
  4: [ function(e, t, n) {
   "use strict";
   var r = e("./utils"), i = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
   t.exports = function(e, t) {
    if (void 0 === e || !e.length) return 0;
    var n = "string" !== r.getTypeOf(e);
    void 0 === t && (t = 0);
    var s = 0;
    t ^= -1;
    for (var a = 0, o = e.length; a < o; a++) s = n ? e[a] : e.charCodeAt(a), t = t >>> 8 ^ i[255 & (t ^ s)];
    return -1 ^ t;
   };
  }, {
   "./utils": 21
  } ],
  5: [ function(e, t, n) {
   "use strict";
   var r = e("./utils");
   function i(e) {
    this.data = null, this.length = 0, this.index = 0;
   }
   i.prototype = {
    checkOffset: function(e) {
     this.checkIndex(this.index + e);
    },
    checkIndex: function(e) {
     if (this.length < e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
    },
    setIndex: function(e) {
     this.checkIndex(e), this.index = e;
    },
    skip: function(e) {
     this.setIndex(this.index + e);
    },
    byteAt: function(e) {},
    readInt: function(e) {
     var t, n = 0;
     for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) n = (n << 8) + this.byteAt(t);
     return this.index += e, n;
    },
    readString: function(e) {
     return r.transformTo("string", this.readData(e));
    },
    readData: function(e) {},
    lastIndexOfSignature: function(e) {},
    readDate: function() {
     var e = this.readInt(4);
     return new Date(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1);
    }
   }, t.exports = i;
  }, {
   "./utils": 21
  } ],
  6: [ function(e, t, n) {
   "use strict";
   n.base64 = !1, n.binary = !1, n.dir = !1, n.createFolders = !1, n.date = null, n.compression = null, 
   n.compressionOptions = null, n.comment = null, n.unixPermissions = null, n.dosPermissions = null;
  }, {} ],
  7: [ function(e, t, n) {
   "use strict";
   var r = e("./utils");
   n.string2binary = function(e) {
    return r.string2binary(e);
   }, n.string2Uint8Array = function(e) {
    return r.transformTo("uint8array", e);
   }, n.uint8Array2String = function(e) {
    return r.transformTo("string", e);
   }, n.string2Blob = function(e) {
    var t = r.transformTo("arraybuffer", e);
    return r.arrayBuffer2Blob(t);
   }, n.arrayBuffer2Blob = function(e) {
    return r.arrayBuffer2Blob(e);
   }, n.transformTo = function(e, t) {
    return r.transformTo(e, t);
   }, n.getTypeOf = function(e) {
    return r.getTypeOf(e);
   }, n.checkSupport = function(e) {
    return r.checkSupport(e);
   }, n.MAX_VALUE_16BITS = r.MAX_VALUE_16BITS, n.MAX_VALUE_32BITS = r.MAX_VALUE_32BITS, 
   n.pretty = function(e) {
    return r.pretty(e);
   }, n.findCompression = function(e) {
    return r.findCompression(e);
   }, n.isRegExp = function(e) {
    return r.isRegExp(e);
   };
  }, {
   "./utils": 21
  } ],
  8: [ function(e, t, n) {
   "use strict";
   var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako");
   n.uncompressInputType = r ? "uint8array" : "array", n.compressInputType = r ? "uint8array" : "array", 
   n.magic = "\b\0", n.compress = function(e, t) {
    return i.deflateRaw(e, {
     level: t.level || -1
    });
   }, n.uncompress = function(e) {
    return i.inflateRaw(e);
   };
  }, {
   pako: 24
  } ],
  9: [ function(e, t, n) {
   "use strict";
   var r = e("./base64");
   function i(e, t) {
    if (!(this instanceof i)) return new i(e, t);
    this.files = {}, this.comment = null, this.root = "", e && this.load(e, t), this.clone = function() {
     var e = new i();
     for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
     return e;
    };
   }
   i.prototype = e("./object"), i.prototype.load = e("./load"), i.support = e("./support"), 
   i.defaults = e("./defaults"), i.utils = e("./deprecatedPublicUtils"), i.base64 = {
    encode: function(e) {
     return r.encode(e);
    },
    decode: function(e) {
     return r.decode(e);
    }
   }, i.compressions = e("./compressions"), t.exports = i;
  }, {
   "./base64": 1,
   "./compressions": 3,
   "./defaults": 6,
   "./deprecatedPublicUtils": 7,
   "./load": 10,
   "./object": 13,
   "./support": 17
  } ],
  10: [ function(e, t, n) {
   "use strict";
   var r = e("./base64"), i = e("./zipEntries");
   t.exports = function(e, t) {
    var n, s, a, o;
    for ((t = t || {}).base64 && (e = r.decode(e)), n = (s = new i(e, t)).files, a = 0; a < n.length; a++) o = n[a], 
    this.file(o.fileName, o.decompressed, {
     binary: !0,
     optimizedBinaryString: !0,
     date: o.date,
     dir: o.dir,
     comment: o.fileComment.length ? o.fileComment : null,
     unixPermissions: o.unixPermissions,
     dosPermissions: o.dosPermissions,
     createFolders: t.createFolders
    });
    return s.zipComment.length && (this.comment = s.zipComment), this;
   };
  }, {
   "./base64": 1,
   "./zipEntries": 22
  } ],
  11: [ function(e, t, n) {
   (function(e) {
    "use strict";
    t.exports = function(t, n) {
     return new e(t, n);
    }, t.exports.test = function(t) {
     return e.isBuffer(t);
    };
   }).call(this, "undefined" != typeof Buffer ? Buffer : void 0);
  }, {} ],
  12: [ function(e, t, n) {
   "use strict";
   var r = e("./uint8ArrayReader");
   function i(e) {
    this.data = e, this.length = this.data.length, this.index = 0;
   }
   i.prototype = new r(), i.prototype.readData = function(e) {
    this.checkOffset(e);
    var t = this.data.slice(this.index, this.index + e);
    return this.index += e, t;
   }, t.exports = i;
  }, {
   "./uint8ArrayReader": 18
  } ],
  13: [ function(e, t, n) {
   "use strict";
   var r = e("./support"), i = e("./utils"), s = e("./crc32"), a = e("./signature"), o = e("./defaults"), c = e("./base64"), u = e("./compressions"), l = e("./compressedObject"), f = e("./nodeBuffer"), p = e("./utf8"), d = e("./stringWriter"), h = e("./uint8ArrayWriter"), m = function(e) {
    if (e._data instanceof l && (e._data = e._data.getContent(), e.options.binary = !0, 
    e.options.base64 = !1, "uint8array" === i.getTypeOf(e._data))) {
     var t = e._data;
     e._data = new Uint8Array(t.length), 0 !== t.length && e._data.set(t, 0);
    }
    return e._data;
   }, v = function(e) {
    var t = m(e);
    return "string" === i.getTypeOf(t) ? !e.options.binary && r.nodebuffer ? f(t, "utf-8") : e.asBinary() : t;
   }, g = function(e) {
    var t = m(this);
    return null === t || void 0 === t ? "" : (this.options.base64 && (t = c.decode(t)), 
    t = e && this.options.binary ? S.utf8decode(t) : i.transformTo("string", t), e || this.options.binary || (t = i.transformTo("string", S.utf8encode(t))), 
    t);
   }, y = function(e, t, n) {
    this.name = e, this.dir = n.dir, this.date = n.date, this.comment = n.comment, this.unixPermissions = n.unixPermissions, 
    this.dosPermissions = n.dosPermissions, this._data = t, this.options = n, this._initialMetadata = {
     dir: n.dir,
     date: n.date
    };
   };
   y.prototype = {
    asText: function() {
     return g.call(this, !0);
    },
    asBinary: function() {
     return g.call(this, !1);
    },
    asNodeBuffer: function() {
     var e = v(this);
     return i.transformTo("nodebuffer", e);
    },
    asUint8Array: function() {
     var e = v(this);
     return i.transformTo("uint8array", e);
    },
    asArrayBuffer: function() {
     return this.asUint8Array().buffer;
    }
   };
   var _ = function(e, t) {
    var n, r = "";
    for (n = 0; n < t; n++) r += String.fromCharCode(255 & e), e >>>= 8;
    return r;
   }, b = function() {
    var e, t, n = {};
    for (e = 0; e < arguments.length; e++) for (t in arguments[e]) arguments[e].hasOwnProperty(t) && void 0 === n[t] && (n[t] = arguments[e][t]);
    return n;
   }, x = function(e, t, n) {
    var r, s = i.getTypeOf(t);
    if ("string" == typeof (n = function(e) {
     return !0 !== (e = e || {}).base64 || null !== e.binary && void 0 !== e.binary || (e.binary = !0), 
     (e = b(e, o)).date = e.date || new Date(), null !== e.compression && (e.compression = e.compression.toUpperCase()), 
     e;
    }(n)).unixPermissions && (n.unixPermissions = parseInt(n.unixPermissions, 8)), n.unixPermissions && 16384 & n.unixPermissions && (n.dir = !0), 
    n.dosPermissions && 16 & n.dosPermissions && (n.dir = !0), n.dir && (e = k(e)), 
    n.createFolders && (r = w(e)) && E.call(this, r, !0), n.dir || null === t || void 0 === t) n.base64 = !1, 
    n.binary = !1, t = null, s = null; else if ("string" === s) n.binary && !n.base64 && !0 !== n.optimizedBinaryString && (t = i.string2binary(t)); else {
     if (n.base64 = !1, n.binary = !0, !(s || t instanceof l)) throw new Error("The data of '" + e + "' is in an unsupported format !");
     "arraybuffer" === s && (t = i.transformTo("uint8array", t));
    }
    var a = new y(e, t, n);
    return this.files[e] = a, a;
   }, w = function(e) {
    "/" == e.slice(-1) && (e = e.substring(0, e.length - 1));
    var t = e.lastIndexOf("/");
    return t > 0 ? e.substring(0, t) : "";
   }, k = function(e) {
    return "/" != e.slice(-1) && (e += "/"), e;
   }, E = function(e, t) {
    return t = void 0 !== t && t, e = k(e), this.files[e] || x.call(this, e, null, {
     dir: !0,
     createFolders: t
    }), this.files[e];
   }, C = function(e, t, n) {
    var r, a = new l();
    return e._data instanceof l ? (a.uncompressedSize = e._data.uncompressedSize, a.crc32 = e._data.crc32, 
    0 === a.uncompressedSize || e.dir ? (t = u.STORE, a.compressedContent = "", a.crc32 = 0) : e._data.compressionMethod === t.magic ? a.compressedContent = e._data.getCompressedContent() : (r = e._data.getContent(), 
    a.compressedContent = t.compress(i.transformTo(t.compressInputType, r), n))) : ((r = v(e)) && 0 !== r.length && !e.dir || (t = u.STORE, 
    r = ""), a.uncompressedSize = r.length, a.crc32 = s(r), a.compressedContent = t.compress(i.transformTo(t.compressInputType, r), n)), 
    a.compressedSize = a.compressedContent.length, a.compressionMethod = t.magic, a;
   }, T = function(e, t, n, r, o) {
    n.compressedContent;
    var c, u, l, f, d = i.transformTo("string", p.utf8encode(t.name)), h = t.comment || "", m = i.transformTo("string", p.utf8encode(h)), v = d.length !== t.name.length, g = m.length !== h.length, y = t.options, b = "", x = "", w = "";
    l = t._initialMetadata.dir !== t.dir ? t.dir : y.dir, f = t._initialMetadata.date !== t.date ? t.date : y.date;
    var k, E, C = 0, T = 0;
    l && (C |= 16), "UNIX" === o ? (T = 798, C |= (k = t.unixPermissions, E = k, k || (E = l ? 16893 : 33204), 
    (65535 & E) << 16)) : (T = 20, C |= 63 & (t.dosPermissions || 0)), c = f.getHours(), 
    c <<= 6, c |= f.getMinutes(), c <<= 5, c |= f.getSeconds() / 2, u = f.getFullYear() - 1980, 
    u <<= 4, u |= f.getMonth() + 1, u <<= 5, u |= f.getDate(), v && (x = _(1, 1) + _(s(d), 4) + d, 
    b += "up" + _(x.length, 2) + x), g && (w = _(1, 1) + _(this.crc32(m), 4) + m, b += "uc" + _(w.length, 2) + w);
    var S = "";
    return S += "\n\0", S += v || g ? "\0\b" : "\0\0", S += n.compressionMethod, S += _(c, 2), 
    S += _(u, 2), S += _(n.crc32, 4), S += _(n.compressedSize, 4), S += _(n.uncompressedSize, 4), 
    S += _(d.length, 2), S += _(b.length, 2), {
     fileRecord: a.LOCAL_FILE_HEADER + S + d + b,
     dirRecord: a.CENTRAL_FILE_HEADER + _(T, 2) + S + _(m.length, 2) + "\0\0\0\0" + _(C, 4) + _(r, 4) + d + b + m,
     compressedObject: n
    };
   }, S = {
    load: function(e, t) {
     throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
    },
    filter: function(e) {
     var t, n, r, i, s = [];
     for (t in this.files) this.files.hasOwnProperty(t) && (r = this.files[t], i = new y(r.name, r._data, b(r.options)), 
     n = t.slice(this.root.length, t.length), t.slice(0, this.root.length) === this.root && e(n, i) && s.push(i));
     return s;
    },
    file: function(e, t, n) {
     if (1 === arguments.length) {
      if (i.isRegExp(e)) {
       var r = e;
       return this.filter(function(e, t) {
        return !t.dir && r.test(e);
       });
      }
      return this.filter(function(t, n) {
       return !n.dir && t === e;
      })[0] || null;
     }
     return e = this.root + e, x.call(this, e, t, n), this;
    },
    folder: function(e) {
     if (!e) return this;
     if (i.isRegExp(e)) return this.filter(function(t, n) {
      return n.dir && e.test(t);
     });
     var t = this.root + e, n = E.call(this, t), r = this.clone();
     return r.root = n.name, r;
    },
    remove: function(e) {
     e = this.root + e;
     var t = this.files[e];
     if (t || ("/" != e.slice(-1) && (e += "/"), t = this.files[e]), t && !t.dir) delete this.files[e]; else for (var n = this.filter(function(t, n) {
      return n.name.slice(0, e.length) === e;
     }), r = 0; r < n.length; r++) delete this.files[n[r].name];
     return this;
    },
    generate: function(e) {
     e = b(e || {}, {
      base64: !0,
      compression: "STORE",
      compressionOptions: null,
      type: "base64",
      platform: "DOS",
      comment: null,
      mimeType: "application/zip"
     }), i.checkSupport(e.type), "darwin" !== e.platform && "freebsd" !== e.platform && "linux" !== e.platform && "sunos" !== e.platform || (e.platform = "UNIX"), 
     "win32" === e.platform && (e.platform = "DOS");
     var t, n, r = [], s = 0, o = 0, l = i.transformTo("string", this.utf8encode(e.comment || this.comment || ""));
     for (var f in this.files) if (this.files.hasOwnProperty(f)) {
      var p = this.files[f], m = p.options.compression || e.compression.toUpperCase(), v = u[m];
      if (!v) throw new Error(m + " is not a valid compression method !");
      var g = p.options.compressionOptions || e.compressionOptions || {}, y = C.call(this, p, v, g), x = T.call(this, f, p, y, s, e.platform);
      s += x.fileRecord.length + y.compressedSize, o += x.dirRecord.length, r.push(x);
     }
     var w;
     w = a.CENTRAL_DIRECTORY_END + "\0\0\0\0" + _(r.length, 2) + _(r.length, 2) + _(o, 4) + _(s, 4) + _(l.length, 2) + l;
     var k = e.type.toLowerCase();
     for (t = "uint8array" === k || "arraybuffer" === k || "blob" === k || "nodebuffer" === k ? new h(s + o + w.length) : new d(s + o + w.length), 
     n = 0; n < r.length; n++) t.append(r[n].fileRecord), t.append(r[n].compressedObject.compressedContent);
     for (n = 0; n < r.length; n++) t.append(r[n].dirRecord);
     t.append(w);
     var E = t.finalize();
     switch (e.type.toLowerCase()) {
     case "uint8array":
     case "arraybuffer":
     case "nodebuffer":
      return i.transformTo(e.type.toLowerCase(), E);

     case "blob":
      return i.arrayBuffer2Blob(i.transformTo("arraybuffer", E), e.mimeType);

     case "base64":
      return e.base64 ? c.encode(E) : E;

     default:
      return E;
     }
    },
    crc32: function(e, t) {
     return s(e, t);
    },
    utf8encode: function(e) {
     return i.transformTo("string", p.utf8encode(e));
    },
    utf8decode: function(e) {
     return p.utf8decode(e);
    }
   };
   t.exports = S;
  }, {
   "./base64": 1,
   "./compressedObject": 2,
   "./compressions": 3,
   "./crc32": 4,
   "./defaults": 6,
   "./nodeBuffer": 11,
   "./signature": 14,
   "./stringWriter": 16,
   "./support": 17,
   "./uint8ArrayWriter": 19,
   "./utf8": 20,
   "./utils": 21
  } ],
  14: [ function(e, t, n) {
   "use strict";
   n.LOCAL_FILE_HEADER = "PK", n.CENTRAL_FILE_HEADER = "PK", n.CENTRAL_DIRECTORY_END = "PK", 
   n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", n.ZIP64_CENTRAL_DIRECTORY_END = "PK", 
   n.DATA_DESCRIPTOR = "PK\b";
  }, {} ],
  15: [ function(e, t, n) {
   "use strict";
   var r = e("./dataReader"), i = e("./utils");
   function s(e, t) {
    this.data = e, t || (this.data = i.string2binary(this.data)), this.length = this.data.length, 
    this.index = 0;
   }
   s.prototype = new r(), s.prototype.byteAt = function(e) {
    return this.data.charCodeAt(e);
   }, s.prototype.lastIndexOfSignature = function(e) {
    return this.data.lastIndexOf(e);
   }, s.prototype.readData = function(e) {
    this.checkOffset(e);
    var t = this.data.slice(this.index, this.index + e);
    return this.index += e, t;
   }, t.exports = s;
  }, {
   "./dataReader": 5,
   "./utils": 21
  } ],
  16: [ function(e, t, n) {
   "use strict";
   var r = e("./utils"), i = function() {
    this.data = [];
   };
   i.prototype = {
    append: function(e) {
     e = r.transformTo("string", e), this.data.push(e);
    },
    finalize: function() {
     return this.data.join("");
    }
   }, t.exports = i;
  }, {
   "./utils": 21
  } ],
  17: [ function(e, t, n) {
   (function(e) {
    "use strict";
    if (n.base64 = !0, n.array = !0, n.string = !0, n.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, 
    n.nodebuffer = void 0 !== e, n.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) n.blob = !1; else {
     var t = new ArrayBuffer(0);
     try {
      n.blob = 0 === new Blob([ t ], {
       type: "application/zip"
      }).size;
     } catch (e) {
      try {
       var r = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
       r.append(t), n.blob = 0 === r.getBlob("application/zip").size;
      } catch (e) {
       n.blob = !1;
      }
     }
    }
   }).call(this, "undefined" != typeof Buffer ? Buffer : void 0);
  }, {} ],
  18: [ function(e, t, n) {
   "use strict";
   var r = e("./dataReader");
   function i(e) {
    e && (this.data = e, this.length = this.data.length, this.index = 0);
   }
   i.prototype = new r(), i.prototype.byteAt = function(e) {
    return this.data[e];
   }, i.prototype.lastIndexOfSignature = function(e) {
    for (var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; s >= 0; --s) if (this.data[s] === t && this.data[s + 1] === n && this.data[s + 2] === r && this.data[s + 3] === i) return s;
    return -1;
   }, i.prototype.readData = function(e) {
    if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
    var t = this.data.subarray(this.index, this.index + e);
    return this.index += e, t;
   }, t.exports = i;
  }, {
   "./dataReader": 5
  } ],
  19: [ function(e, t, n) {
   "use strict";
   var r = e("./utils"), i = function(e) {
    this.data = new Uint8Array(e), this.index = 0;
   };
   i.prototype = {
    append: function(e) {
     0 !== e.length && (e = r.transformTo("uint8array", e), this.data.set(e, this.index), 
     this.index += e.length);
    },
    finalize: function() {
     return this.data;
    }
   }, t.exports = i;
  }, {
   "./utils": 21
  } ],
  20: [ function(e, t, n) {
   "use strict";
   for (var r = e("./utils"), i = e("./support"), s = e("./nodeBuffer"), a = new Array(256), o = 0; o < 256; o++) a[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
   a[254] = a[254] = 1;
   var c = function(e, t) {
    var n;
    for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
    return n < 0 ? t : 0 === n ? t : n + a[e[n]] > t ? n : t;
   }, u = function(e) {
    var t, n, i, s, o = e.length, c = new Array(2 * o);
    for (n = 0, t = 0; t < o; ) if ((i = e[t++]) < 128) c[n++] = i; else if ((s = a[i]) > 4) c[n++] = 65533, 
    t += s - 1; else {
     for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && t < o; ) i = i << 6 | 63 & e[t++], 
     s--;
     s > 1 ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, 
     c[n++] = 56320 | 1023 & i);
    }
    return c.length !== n && (c.subarray ? c = c.subarray(0, n) : c.length = n), r.applyFromCharCode(c);
   };
   n.utf8encode = function(e) {
    return i.nodebuffer ? s(e, "utf-8") : function(e) {
     var t, n, r, s, a, o = e.length, c = 0;
     for (s = 0; s < o; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (r = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), 
     s++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
     for (t = i.uint8array ? new Uint8Array(c) : new Array(c), a = 0, s = 0; a < c; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (r = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), 
     s++), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | 63 & n) : n < 65536 ? (t[a++] = 224 | n >>> 12, 
     t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n) : (t[a++] = 240 | n >>> 18, 
     t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n);
     return t;
    }(e);
   }, n.utf8decode = function(e) {
    if (i.nodebuffer) return r.transformTo("nodebuffer", e).toString("utf-8");
    for (var t = [], n = 0, s = (e = r.transformTo(i.uint8array ? "uint8array" : "array", e)).length; n < s; ) {
     var a = c(e, Math.min(n + 65536, s));
     i.uint8array ? t.push(u(e.subarray(n, a))) : t.push(u(e.slice(n, a))), n = a;
    }
    return t.join("");
   };
  }, {
   "./nodeBuffer": 11,
   "./support": 17,
   "./utils": 21
  } ],
  21: [ function(e, t, n) {
   "use strict";
   var r = e("./support"), i = e("./compressions"), s = e("./nodeBuffer");
   function a(e) {
    return e;
   }
   function o(e, t) {
    for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
    return t;
   }
   function c(e) {
    var t = 65536, r = [], i = e.length, a = n.getTypeOf(e), o = 0, c = !0;
    try {
     switch (a) {
     case "uint8array":
      String.fromCharCode.apply(null, new Uint8Array(0));
      break;

     case "nodebuffer":
      String.fromCharCode.apply(null, s(0));
     }
    } catch (e) {
     c = !1;
    }
    if (!c) {
     for (var u = "", l = 0; l < e.length; l++) u += String.fromCharCode(e[l]);
     return u;
    }
    for (;o < i && t > 1; ) try {
     "array" === a || "nodebuffer" === a ? r.push(String.fromCharCode.apply(null, e.slice(o, Math.min(o + t, i)))) : r.push(String.fromCharCode.apply(null, e.subarray(o, Math.min(o + t, i)))), 
     o += t;
    } catch (e) {
     t = Math.floor(t / 2);
    }
    return r.join("");
   }
   function u(e, t) {
    for (var n = 0; n < e.length; n++) t[n] = e[n];
    return t;
   }
   n.string2binary = function(e) {
    for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(255 & e.charCodeAt(n));
    return t;
   }, n.arrayBuffer2Blob = function(e, t) {
    n.checkSupport("blob"), t = t || "application/zip";
    try {
     return new Blob([ e ], {
      type: t
     });
    } catch (n) {
     try {
      var r = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
      return r.append(e), r.getBlob(t);
     } catch (e) {
      throw new Error("Bug : can't construct the Blob.");
     }
    }
   }, n.applyFromCharCode = c;
   var l = {};
   l.string = {
    string: a,
    array: function(e) {
     return o(e, new Array(e.length));
    },
    arraybuffer: function(e) {
     return l.string.uint8array(e).buffer;
    },
    uint8array: function(e) {
     return o(e, new Uint8Array(e.length));
    },
    nodebuffer: function(e) {
     return o(e, s(e.length));
    }
   }, l.array = {
    string: c,
    array: a,
    arraybuffer: function(e) {
     return new Uint8Array(e).buffer;
    },
    uint8array: function(e) {
     return new Uint8Array(e);
    },
    nodebuffer: function(e) {
     return s(e);
    }
   }, l.arraybuffer = {
    string: function(e) {
     return c(new Uint8Array(e));
    },
    array: function(e) {
     return u(new Uint8Array(e), new Array(e.byteLength));
    },
    arraybuffer: a,
    uint8array: function(e) {
     return new Uint8Array(e);
    },
    nodebuffer: function(e) {
     return s(new Uint8Array(e));
    }
   }, l.uint8array = {
    string: c,
    array: function(e) {
     return u(e, new Array(e.length));
    },
    arraybuffer: function(e) {
     return e.buffer;
    },
    uint8array: a,
    nodebuffer: function(e) {
     return s(e);
    }
   }, l.nodebuffer = {
    string: c,
    array: function(e) {
     return u(e, new Array(e.length));
    },
    arraybuffer: function(e) {
     return l.nodebuffer.uint8array(e).buffer;
    },
    uint8array: function(e) {
     return u(e, new Uint8Array(e.length));
    },
    nodebuffer: a
   }, n.transformTo = function(e, t) {
    if (t || (t = ""), !e) return t;
    n.checkSupport(e);
    var r = n.getTypeOf(t);
    return l[r][e](t);
   }, n.getTypeOf = function(e) {
    return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : r.nodebuffer && s.test(e) ? "nodebuffer" : r.uint8array && e instanceof Uint8Array ? "uint8array" : r.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
   }, n.checkSupport = function(e) {
    if (!r[e.toLowerCase()]) throw new Error(e + " is not supported by this browser");
   }, n.MAX_VALUE_16BITS = 65535, n.MAX_VALUE_32BITS = -1, n.pretty = function(e) {
    var t, n, r = "";
    for (n = 0; n < (e || "").length; n++) r += "\\x" + ((t = e.charCodeAt(n)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
    return r;
   }, n.findCompression = function(e) {
    for (var t in i) if (i.hasOwnProperty(t) && i[t].magic === e) return i[t];
    return null;
   }, n.isRegExp = function(e) {
    return "[object RegExp]" === Object.prototype.toString.call(e);
   };
  }, {
   "./compressions": 3,
   "./nodeBuffer": 11,
   "./support": 17
  } ],
  22: [ function(e, t, n) {
   "use strict";
   var r = e("./stringReader"), i = e("./nodeBufferReader"), s = e("./uint8ArrayReader"), a = e("./utils"), o = e("./signature"), c = e("./zipEntry"), u = e("./support"), l = e("./object");
   function f(e, t) {
    this.files = [], this.loadOptions = t, e && this.load(e);
   }
   f.prototype = {
    checkSignature: function(e) {
     var t = this.reader.readString(4);
     if (t !== e) throw new Error("Corrupted zip or bug : unexpected signature (" + a.pretty(t) + ", expected " + a.pretty(e) + ")");
    },
    readBlockEndOfCentral: function() {
     this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), 
     this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), 
     this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), 
     this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength), 
     this.zipComment = l.utf8decode(this.zipComment);
    },
    readBlockZip64EndOfCentral: function() {
     this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), 
     this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), 
     this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), 
     this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), 
     this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
     for (var e, t, n, r = this.zip64EndOfCentralSize - 44; 0 < r; ) e = this.reader.readInt(2), 
     t = this.reader.readInt(4), n = this.reader.readString(t), this.zip64ExtensibleData[e] = {
      id: e,
      length: t,
      value: n
     };
    },
    readBlockZip64EndOfCentralLocator: function() {
     if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), 
     this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported");
    },
    readLocalFiles: function() {
     var e, t;
     for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), 
     this.checkSignature(o.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), 
     t.processAttributes();
    },
    readCentralDir: function() {
     var e;
     for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === o.CENTRAL_FILE_HEADER; ) (e = new c({
      zip64: this.zip64
     }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
    },
    readEndOfCentral: function() {
     var e = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
     if (-1 === e) {
      var t = !0;
      try {
       this.reader.setIndex(0), this.checkSignature(o.LOCAL_FILE_HEADER), t = !1;
      } catch (e) {}
      throw t ? new Error("Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip : can't find end of central directory");
     }
     if (this.reader.setIndex(e), this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), 
     this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
      if (this.zip64 = !0, -1 === (e = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
      this.reader.setIndex(e), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), 
      this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), 
      this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
     }
    },
    prepareReader: function(e) {
     var t = a.getTypeOf(e);
     "string" !== t || u.uint8array ? this.reader = "nodebuffer" === t ? new i(e) : new s(a.transformTo("uint8array", e)) : this.reader = new r(e, this.loadOptions.optimizedBinaryString);
    },
    load: function(e) {
     this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
    }
   }, t.exports = f;
  }, {
   "./nodeBufferReader": 12,
   "./object": 13,
   "./signature": 14,
   "./stringReader": 15,
   "./support": 17,
   "./uint8ArrayReader": 18,
   "./utils": 21,
   "./zipEntry": 23
  } ],
  23: [ function(e, t, n) {
   "use strict";
   var r = e("./stringReader"), i = e("./utils"), s = e("./compressedObject"), a = e("./object");
   function o(e, t) {
    this.options = e, this.loadOptions = t;
   }
   o.prototype = {
    isEncrypted: function() {
     return 1 == (1 & this.bitFlag);
    },
    useUTF8: function() {
     return 2048 == (2048 & this.bitFlag);
    },
    prepareCompressedContent: function(e, t, n) {
     return function() {
      var r = e.index;
      e.setIndex(t);
      var i = e.readData(n);
      return e.setIndex(r), i;
     };
    },
    prepareContent: function(e, t, n, r, s) {
     return function() {
      var e = i.transformTo(r.uncompressInputType, this.getCompressedContent()), t = r.uncompress(e);
      if (t.length !== s) throw new Error("Bug : uncompressed data size mismatch");
      return t;
     };
    },
    readLocalPart: function(e) {
     var t, n;
     if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readString(this.fileNameLength), 
     e.skip(n), -1 == this.compressedSize || -1 == this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
     if (null === (t = i.findCompression(this.compressionMethod))) throw new Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
     if (this.decompressed = new s(), this.decompressed.compressedSize = this.compressedSize, 
     this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, 
     this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(e, e.index, this.compressedSize, t), 
     this.decompressed.getContent = this.prepareContent(e, e.index, this.compressedSize, t, this.uncompressedSize), 
     this.loadOptions.checkCRC32 && (this.decompressed = i.transformTo("string", this.decompressed.getContent()), 
     a.crc32(this.decompressed) !== this.crc32)) throw new Error("Corrupted zip : CRC32 mismatch");
    },
    readCentralPart: function(e) {
     if (this.versionMadeBy = e.readInt(2), this.versionNeeded = e.readInt(2), this.bitFlag = e.readInt(2), 
     this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), 
     this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4), this.fileNameLength = e.readInt(2), 
     this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), 
     this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), 
     this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
     this.fileName = e.readString(this.fileNameLength), this.readExtraFields(e), this.parseZIP64ExtraField(e), 
     this.fileComment = e.readString(this.fileCommentLength);
    },
    processAttributes: function() {
     this.unixPermissions = null, this.dosPermissions = null;
     var e = this.versionMadeBy >> 8;
     this.dir = !!(16 & this.externalFileAttributes), 0 === e && (this.dosPermissions = 63 & this.externalFileAttributes), 
     3 === e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileName.slice(-1) || (this.dir = !0);
    },
    parseZIP64ExtraField: function(e) {
     if (this.extraFields[1]) {
      var t = new r(this.extraFields[1].value);
      this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)), 
      this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)), 
      this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)), 
      this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4));
     }
    },
    readExtraFields: function(e) {
     var t, n, r, i = e.index;
     for (this.extraFields = this.extraFields || {}; e.index < i + this.extraFieldsLength; ) t = e.readInt(2), 
     n = e.readInt(2), r = e.readString(n), this.extraFields[t] = {
      id: t,
      length: n,
      value: r
     };
    },
    handleUTF8: function() {
     if (this.useUTF8()) this.fileName = a.utf8decode(this.fileName), this.fileComment = a.utf8decode(this.fileComment); else {
      var e = this.findExtraFieldUnicodePath();
      null !== e && (this.fileName = e);
      var t = this.findExtraFieldUnicodeComment();
      null !== t && (this.fileComment = t);
     }
    },
    findExtraFieldUnicodePath: function() {
     var e = this.extraFields[28789];
     if (e) {
      var t = new r(e.value);
      return 1 !== t.readInt(1) ? null : a.crc32(this.fileName) !== t.readInt(4) ? null : a.utf8decode(t.readString(e.length - 5));
     }
     return null;
    },
    findExtraFieldUnicodeComment: function() {
     var e = this.extraFields[25461];
     if (e) {
      var t = new r(e.value);
      return 1 !== t.readInt(1) ? null : a.crc32(this.fileComment) !== t.readInt(4) ? null : a.utf8decode(t.readString(e.length - 5));
     }
     return null;
    }
   }, t.exports = o;
  }, {
   "./compressedObject": 2,
   "./object": 13,
   "./stringReader": 15,
   "./utils": 21
  } ],
  24: [ function(e, t, n) {
   "use strict";
   var r = {};
   (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), 
   t.exports = r;
  }, {
   "./lib/deflate": 25,
   "./lib/inflate": 26,
   "./lib/utils/common": 27,
   "./lib/zlib/constants": 30
  } ],
  25: [ function(e, t, n) {
   "use strict";
   var r = e("./zlib/deflate.js"), i = e("./utils/common"), s = e("./utils/strings"), a = e("./zlib/messages"), o = e("./zlib/zstream"), c = function(e) {
    this.options = i.assign({
     level: -1,
     method: 8,
     chunkSize: 16384,
     windowBits: 15,
     memLevel: 8,
     strategy: 0,
     to: ""
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), 
    this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o(), 
    this.strm.avail_out = 0;
    var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
    if (0 !== n) throw new Error(a[n]);
    t.header && r.deflateSetHeader(this.strm, t.header);
   };
   function u(e, t) {
    var n = new c(t);
    if (n.push(e, !0), n.err) throw n.msg;
    return n.result;
   }
   c.prototype.push = function(e, t) {
    var n, a, o = this.strm, c = this.options.chunkSize;
    if (this.ended) return !1;
    a = t === ~~t ? t : !0 === t ? 4 : 0, o.input = "string" == typeof e ? s.string2buf(e) : e, 
    o.next_in = 0, o.avail_in = o.input.length;
    do {
     if (0 === o.avail_out && (o.output = new i.Buf8(c), o.next_out = 0, o.avail_out = c), 
     1 !== (n = r.deflate(o, a)) && 0 !== n) return this.onEnd(n), this.ended = !0, !1;
     (0 === o.avail_out || 0 === o.avail_in && 4 === a) && ("string" === this.options.to ? this.onData(s.buf2binstring(i.shrinkBuf(o.output, o.next_out))) : this.onData(i.shrinkBuf(o.output, o.next_out)));
    } while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== n);
    return 4 !== a || (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, 
    0 === n);
   }, c.prototype.onData = function(e) {
    this.chunks.push(e);
   }, c.prototype.onEnd = function(e) {
    0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), 
    this.chunks = [], this.err = e, this.msg = this.strm.msg;
   }, n.Deflate = c, n.deflate = u, n.deflateRaw = function(e, t) {
    return (t = t || {}).raw = !0, u(e, t);
   }, n.gzip = function(e, t) {
    return (t = t || {}).gzip = !0, u(e, t);
   };
  }, {
   "./utils/common": 27,
   "./utils/strings": 28,
   "./zlib/deflate.js": 32,
   "./zlib/messages": 37,
   "./zlib/zstream": 39
  } ],
  26: [ function(e, t, n) {
   "use strict";
   var r = e("./zlib/inflate.js"), i = e("./utils/common"), s = e("./utils/strings"), a = e("./zlib/constants"), o = e("./zlib/messages"), c = e("./zlib/zstream"), u = e("./zlib/gzheader"), l = function(e) {
    this.options = i.assign({
     chunkSize: 16384,
     windowBits: 0,
     to: ""
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 
    0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 
    t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), 
    this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), 
    this.strm.avail_out = 0;
    var n = r.inflateInit2(this.strm, t.windowBits);
    if (n !== a.Z_OK) throw new Error(o[n]);
    this.header = new u(), r.inflateGetHeader(this.strm, this.header);
   };
   function f(e, t) {
    var n = new l(t);
    if (n.push(e, !0), n.err) throw n.msg;
    return n.result;
   }
   l.prototype.push = function(e, t) {
    var n, o, c, u, l, f = this.strm, p = this.options.chunkSize;
    if (this.ended) return !1;
    o = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH, f.input = "string" == typeof e ? s.binstring2buf(e) : e, 
    f.next_in = 0, f.avail_in = f.input.length;
    do {
     if (0 === f.avail_out && (f.output = new i.Buf8(p), f.next_out = 0, f.avail_out = p), 
     (n = r.inflate(f, a.Z_NO_FLUSH)) !== a.Z_STREAM_END && n !== a.Z_OK) return this.onEnd(n), 
     this.ended = !0, !1;
     f.next_out && (0 === f.avail_out || n === a.Z_STREAM_END || 0 === f.avail_in && o === a.Z_FINISH) && ("string" === this.options.to ? (c = s.utf8border(f.output, f.next_out), 
     u = f.next_out - c, l = s.buf2string(f.output, c), f.next_out = u, f.avail_out = p - u, 
     u && i.arraySet(f.output, f.output, c, u, 0), this.onData(l)) : this.onData(i.shrinkBuf(f.output, f.next_out)));
    } while (f.avail_in > 0 && n !== a.Z_STREAM_END);
    return n === a.Z_STREAM_END && (o = a.Z_FINISH), o !== a.Z_FINISH || (n = r.inflateEnd(this.strm), 
    this.onEnd(n), this.ended = !0, n === a.Z_OK);
   }, l.prototype.onData = function(e) {
    this.chunks.push(e);
   }, l.prototype.onEnd = function(e) {
    e === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), 
    this.chunks = [], this.err = e, this.msg = this.strm.msg;
   }, n.Inflate = l, n.inflate = f, n.inflateRaw = function(e, t) {
    return (t = t || {}).raw = !0, f(e, t);
   }, n.ungzip = f;
  }, {
   "./utils/common": 27,
   "./utils/strings": 28,
   "./zlib/constants": 30,
   "./zlib/gzheader": 33,
   "./zlib/inflate.js": 35,
   "./zlib/messages": 37,
   "./zlib/zstream": 39
  } ],
  27: [ function(e, t, n) {
   "use strict";
   var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
   n.assign = function(e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
     var n = t.shift();
     if (n) {
      if ("object" != typeof n) throw new TypeError(n + "must be non-object");
      for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
     }
    }
    return e;
   }, n.shrinkBuf = function(e, t) {
    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
   };
   var i = {
    arraySet: function(e, t, n, r, i) {
     if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i); else for (var s = 0; s < r; s++) e[i + s] = t[n + s];
    },
    flattenChunks: function(e) {
     var t, n, r, i, s, a;
     for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
     for (a = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) s = e[t], a.set(s, i), 
     i += s.length;
     return a;
    }
   }, s = {
    arraySet: function(e, t, n, r, i) {
     for (var s = 0; s < r; s++) e[i + s] = t[n + s];
    },
    flattenChunks: function(e) {
     return [].concat.apply([], e);
    }
   };
   n.setTyped = function(e) {
    e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, i)) : (n.Buf8 = Array, 
    n.Buf16 = Array, n.Buf32 = Array, n.assign(n, s));
   }, n.setTyped(r);
  }, {} ],
  28: [ function(e, t, n) {
   "use strict";
   var r = e("./common"), i = !0, s = !0;
   try {
    String.fromCharCode.apply(null, [ 0 ]);
   } catch (e) {
    i = !1;
   }
   try {
    String.fromCharCode.apply(null, new Uint8Array(1));
   } catch (e) {
    s = !1;
   }
   for (var a = new r.Buf8(256), o = 0; o < 256; o++) a[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
   function c(e, t) {
    if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
    for (var n = "", a = 0; a < t; a++) n += String.fromCharCode(e[a]);
    return n;
   }
   a[254] = a[254] = 1, n.string2buf = function(e) {
    var t, n, i, s, a, o = e.length, c = 0;
    for (s = 0; s < o; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), 
    s++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    for (t = new r.Buf8(c), a = 0, s = 0; a < c; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), 
    s++), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | 63 & n) : n < 65536 ? (t[a++] = 224 | n >>> 12, 
    t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n) : (t[a++] = 240 | n >>> 18, 
    t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n);
    return t;
   }, n.buf2binstring = function(e) {
    return c(e, e.length);
   }, n.binstring2buf = function(e) {
    for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
    return t;
   }, n.buf2string = function(e, t) {
    var n, r, i, s, o = t || e.length, u = new Array(2 * o);
    for (r = 0, n = 0; n < o; ) if ((i = e[n++]) < 128) u[r++] = i; else if ((s = a[i]) > 4) u[r++] = 65533, 
    n += s - 1; else {
     for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && n < o; ) i = i << 6 | 63 & e[n++], 
     s--;
     s > 1 ? u[r++] = 65533 : i < 65536 ? u[r++] = i : (i -= 65536, u[r++] = 55296 | i >> 10 & 1023, 
     u[r++] = 56320 | 1023 & i);
    }
    return c(u, r);
   }, n.utf8border = function(e, t) {
    var n;
    for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
    return n < 0 ? t : 0 === n ? t : n + a[e[n]] > t ? n : t;
   };
  }, {
   "./common": 27
  } ],
  29: [ function(e, t, n) {
   "use strict";
   t.exports = function(e, t, n, r) {
    for (var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== n; ) {
     n -= a = n > 2e3 ? 2e3 : n;
     do {
      s = s + (i = i + t[r++] | 0) | 0;
     } while (--a);
     i %= 65521, s %= 65521;
    }
    return i | s << 16 | 0;
   };
  }, {} ],
  30: [ function(e, t, n) {
   t.exports = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
   };
  }, {} ],
  31: [ function(e, t, n) {
   "use strict";
   var r = function() {
    for (var e, t = [], n = 0; n < 256; n++) {
     e = n;
     for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
     t[n] = e;
    }
    return t;
   }();
   t.exports = function(e, t, n, i) {
    var s = r, a = i + n;
    e ^= -1;
    for (var o = i; o < a; o++) e = e >>> 8 ^ s[255 & (e ^ t[o])];
    return -1 ^ e;
   };
  }, {} ],
  32: [ function(e, t, n) {
   "use strict";
   var r = e("../utils/common"), i = e("./trees"), s = e("./adler32"), a = e("./crc32"), o = e("./messages"), c = 0, u = 1, l = 3, f = 4, p = 5, d = 0, h = 1, m = -2, v = -3, g = -5, y = -1, _ = 1, b = 2, x = 3, w = 4, k = 0, E = 2, C = 8, T = 9, S = 15, O = 8, A = 286, N = 30, B = 19, R = 2 * A + 1, P = 15, L = 3, I = 258, M = I + L + 1, D = 32, j = 42, V = 69, F = 73, q = 91, z = 103, H = 113, U = 666, $ = 1, Q = 2, W = 3, J = 4, X = 3;
   function K(e, t) {
    return e.msg = o[t], t;
   }
   function G(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
   }
   function Y(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
   }
   function Z(e) {
    var t = e.state, n = t.pending;
    n > e.avail_out && (n = e.avail_out), 0 !== n && (r.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), 
    e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 
    0 === t.pending && (t.pending_out = 0));
   }
   function ee(e, t) {
    i._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), 
    e.block_start = e.strstart, Z(e.strm);
   }
   function te(e, t) {
    e.pending_buf[e.pending++] = t;
   }
   function ne(e, t) {
    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
   }
   function re(e, t) {
    var n, r, i = e.max_chain_length, s = e.strstart, a = e.prev_length, o = e.nice_match, c = e.strstart > e.w_size - M ? e.strstart - (e.w_size - M) : 0, u = e.window, l = e.w_mask, f = e.prev, p = e.strstart + I, d = u[s + a - 1], h = u[s + a];
    e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
    do {
     if (u[(n = t) + a] === h && u[n + a - 1] === d && u[n] === u[s] && u[++n] === u[s + 1]) {
      s += 2, n++;
      do {} while (u[++s] === u[++n] && u[++s] === u[++n] && u[++s] === u[++n] && u[++s] === u[++n] && u[++s] === u[++n] && u[++s] === u[++n] && u[++s] === u[++n] && u[++s] === u[++n] && s < p);
      if (r = I - (p - s), s = p - I, r > a) {
       if (e.match_start = t, a = r, r >= o) break;
       d = u[s + a - 1], h = u[s + a];
      }
     }
    } while ((t = f[t & l]) > c && 0 != --i);
    return a <= e.lookahead ? a : e.lookahead;
   }
   function ie(e) {
    var t, n, i, o, c, u, l, f, p, d, h = e.w_size;
    do {
     if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= h + (h - M)) {
      r.arraySet(e.window, e.window, h, h, 0), e.match_start -= h, e.strstart -= h, e.block_start -= h, 
      t = n = e.hash_size;
      do {
       i = e.head[--t], e.head[t] = i >= h ? i - h : 0;
      } while (--n);
      t = n = h;
      do {
       i = e.prev[--t], e.prev[t] = i >= h ? i - h : 0;
      } while (--n);
      o += h;
     }
     if (0 === e.strm.avail_in) break;
     if (u = e.strm, l = e.window, f = e.strstart + e.lookahead, p = o, d = void 0, (d = u.avail_in) > p && (d = p), 
     n = 0 === d ? 0 : (u.avail_in -= d, r.arraySet(l, u.input, u.next_in, d, f), 1 === u.state.wrap ? u.adler = s(u.adler, l, d, f) : 2 === u.state.wrap && (u.adler = a(u.adler, l, d, f)), 
     u.next_in += d, u.total_in += d, d), e.lookahead += n, e.lookahead + e.insert >= L) for (c = e.strstart - e.insert, 
     e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + L - 1]) & e.hash_mask, 
     e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < L)); ) ;
    } while (e.lookahead < M && 0 !== e.strm.avail_in);
   }
   function se(e, t) {
    for (var n, r; ;) {
     if (e.lookahead < M) {
      if (ie(e), e.lookahead < M && t === c) return $;
      if (0 === e.lookahead) break;
     }
     if (n = 0, e.lookahead >= L && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask, 
     n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 
     0 !== n && e.strstart - n <= e.w_size - M && (e.match_length = re(e, n)), e.match_length >= L) if (r = i._tr_tally(e, e.strstart - e.match_start, e.match_length - L), 
     e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= L) {
      e.match_length--;
      do {
       e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask, 
       n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
      } while (0 != --e.match_length);
      e.strstart++;
     } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], 
     e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask; else r = i._tr_tally(e, 0, e.window[e.strstart]), 
     e.lookahead--, e.strstart++;
     if (r && (ee(e, !1), 0 === e.strm.avail_out)) return $;
    }
    return e.insert = e.strstart < L - 1 ? e.strstart : L - 1, t === f ? (ee(e, !0), 
    0 === e.strm.avail_out ? W : J) : e.last_lit && (ee(e, !1), 0 === e.strm.avail_out) ? $ : Q;
   }
   function ae(e, t) {
    for (var n, r, s; ;) {
     if (e.lookahead < M) {
      if (ie(e), e.lookahead < M && t === c) return $;
      if (0 === e.lookahead) break;
     }
     if (n = 0, e.lookahead >= L && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask, 
     n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 
     e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = L - 1, 
     0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - M && (e.match_length = re(e, n), 
     e.match_length <= 5 && (e.strategy === _ || e.match_length === L && e.strstart - e.match_start > 4096) && (e.match_length = L - 1)), 
     e.prev_length >= L && e.match_length <= e.prev_length) {
      s = e.strstart + e.lookahead - L, r = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - L), 
      e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do {
       ++e.strstart <= s && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + L - 1]) & e.hash_mask, 
       n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      } while (0 != --e.prev_length);
      if (e.match_available = 0, e.match_length = L - 1, e.strstart++, r && (ee(e, !1), 
      0 === e.strm.avail_out)) return $;
     } else if (e.match_available) {
      if ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])) && ee(e, !1), e.strstart++, 
      e.lookahead--, 0 === e.strm.avail_out) return $;
     } else e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (r = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), 
    e.insert = e.strstart < L - 1 ? e.strstart : L - 1, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? W : J) : e.last_lit && (ee(e, !1), 
    0 === e.strm.avail_out) ? $ : Q;
   }
   var oe, ce = function(e, t, n, r, i) {
    this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, 
    this.func = i;
   };
   function ue(e) {
    var t;
    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = E, (t = e.state).pending = 0, 
    t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? j : H, 
    e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = c, i._tr_init(t), d) : K(e, m);
   }
   function le(e) {
    var t, n = ue(e);
    return n === d && ((t = e.state).window_size = 2 * t.w_size, Y(t.head), t.max_lazy_match = oe[t.level].max_lazy, 
    t.good_match = oe[t.level].good_length, t.nice_match = oe[t.level].nice_length, 
    t.max_chain_length = oe[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, 
    t.insert = 0, t.match_length = t.prev_length = L - 1, t.match_available = 0, t.ins_h = 0), 
    n;
   }
   function fe(e, t, n, i, s, a) {
    if (!e) return m;
    var o = 1;
    if (t === y && (t = 6), i < 0 ? (o = 0, i = -i) : i > 15 && (o = 2, i -= 16), s < 1 || s > T || n !== C || i < 8 || i > 15 || t < 0 || t > 9 || a < 0 || a > w) return K(e, m);
    8 === i && (i = 9);
    var c = new function() {
     this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, 
     this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, 
     this.method = C, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, 
     this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, 
     this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, 
     this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, 
     this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, 
     this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, 
     this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new r.Buf16(2 * R), this.dyn_dtree = new r.Buf16(2 * (2 * N + 1)), 
     this.bl_tree = new r.Buf16(2 * (2 * B + 1)), Y(this.dyn_ltree), Y(this.dyn_dtree), 
     Y(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new r.Buf16(P + 1), 
     this.heap = new r.Buf16(2 * A + 1), Y(this.heap), this.heap_len = 0, this.heap_max = 0, 
     this.depth = new r.Buf16(2 * A + 1), Y(this.depth), this.l_buf = 0, this.lit_bufsize = 0, 
     this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, 
     this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }();
    return e.state = c, c.strm = e, c.wrap = o, c.gzhead = null, c.w_bits = i, c.w_size = 1 << c.w_bits, 
    c.w_mask = c.w_size - 1, c.hash_bits = s + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, 
    c.hash_shift = ~~((c.hash_bits + L - 1) / L), c.window = new r.Buf8(2 * c.w_size), 
    c.head = new r.Buf16(c.hash_size), c.prev = new r.Buf16(c.w_size), c.lit_bufsize = 1 << s + 6, 
    c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new r.Buf8(c.pending_buf_size), 
    c.d_buf = c.lit_bufsize >> 1, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = a, 
    c.method = n, le(e);
   }
   oe = [ new ce(0, 0, 0, 0, function(e, t) {
    var n = 65535;
    for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
     if (e.lookahead <= 1) {
      if (ie(e), 0 === e.lookahead && t === c) return $;
      if (0 === e.lookahead) break;
     }
     e.strstart += e.lookahead, e.lookahead = 0;
     var r = e.block_start + n;
     if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, 
     ee(e, !1), 0 === e.strm.avail_out)) return $;
     if (e.strstart - e.block_start >= e.w_size - M && (ee(e, !1), 0 === e.strm.avail_out)) return $;
    }
    return e.insert = 0, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? W : J) : (e.strstart > e.block_start && (ee(e, !1), 
    e.strm.avail_out), $);
   }), new ce(4, 4, 8, 4, se), new ce(4, 5, 16, 8, se), new ce(4, 6, 32, 32, se), new ce(4, 4, 16, 16, ae), new ce(8, 16, 32, 32, ae), new ce(8, 16, 128, 128, ae), new ce(8, 32, 128, 256, ae), new ce(32, 128, 258, 1024, ae), new ce(32, 258, 258, 4096, ae) ], 
   n.deflateInit = function(e, t) {
    return fe(e, t, C, S, O, k);
   }, n.deflateInit2 = fe, n.deflateReset = le, n.deflateResetKeep = ue, n.deflateSetHeader = function(e, t) {
    return e && e.state ? 2 !== e.state.wrap ? m : (e.state.gzhead = t, d) : m;
   }, n.deflate = function(e, t) {
    var n, r, s, o;
    if (!e || !e.state || t > p || t < 0) return e ? K(e, m) : m;
    if (r = e.state, !e.output || !e.input && 0 !== e.avail_in || r.status === U && t !== f) return K(e, 0 === e.avail_out ? g : m);
    if (r.strm = e, n = r.last_flush, r.last_flush = t, r.status === j) if (2 === r.wrap) e.adler = 0, 
    te(r, 31), te(r, 139), te(r, 8), r.gzhead ? (te(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), 
    te(r, 255 & r.gzhead.time), te(r, r.gzhead.time >> 8 & 255), te(r, r.gzhead.time >> 16 & 255), 
    te(r, r.gzhead.time >> 24 & 255), te(r, 9 === r.level ? 2 : r.strategy >= b || r.level < 2 ? 4 : 0), 
    te(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (te(r, 255 & r.gzhead.extra.length), 
    te(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = a(e.adler, r.pending_buf, r.pending, 0)), 
    r.gzindex = 0, r.status = V) : (te(r, 0), te(r, 0), te(r, 0), te(r, 0), te(r, 0), 
    te(r, 9 === r.level ? 2 : r.strategy >= b || r.level < 2 ? 4 : 0), te(r, X), r.status = H); else {
     var v = C + (r.w_bits - 8 << 4) << 8;
     v |= (r.strategy >= b || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6, 
     0 !== r.strstart && (v |= D), v += 31 - v % 31, r.status = H, ne(r, v), 0 !== r.strstart && (ne(r, e.adler >>> 16), 
     ne(r, 65535 & e.adler)), e.adler = 1;
    }
    if (r.status === V) if (r.gzhead.extra) {
     for (s = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), 
     Z(e), s = r.pending, r.pending !== r.pending_buf_size)); ) te(r, 255 & r.gzhead.extra[r.gzindex]), 
     r.gzindex++;
     r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), 
     r.gzindex === r.gzhead.extra.length && (r.gzindex = 0, r.status = F);
    } else r.status = F;
    if (r.status === F) if (r.gzhead.name) {
     s = r.pending;
     do {
      if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), 
      Z(e), s = r.pending, r.pending === r.pending_buf_size)) {
       o = 1;
       break;
      }
      o = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0, 
      te(r, o);
     } while (0 !== o);
     r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), 
     0 === o && (r.gzindex = 0, r.status = q);
    } else r.status = q;
    if (r.status === q) if (r.gzhead.comment) {
     s = r.pending;
     do {
      if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), 
      Z(e), s = r.pending, r.pending === r.pending_buf_size)) {
       o = 1;
       break;
      }
      o = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0, 
      te(r, o);
     } while (0 !== o);
     r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), 
     0 === o && (r.status = z);
    } else r.status = z;
    if (r.status === z && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && Z(e), 
    r.pending + 2 <= r.pending_buf_size && (te(r, 255 & e.adler), te(r, e.adler >> 8 & 255), 
    e.adler = 0, r.status = H)) : r.status = H), 0 !== r.pending) {
     if (Z(e), 0 === e.avail_out) return r.last_flush = -1, d;
    } else if (0 === e.avail_in && G(t) <= G(n) && t !== f) return K(e, g);
    if (r.status === U && 0 !== e.avail_in) return K(e, g);
    if (0 !== e.avail_in || 0 !== r.lookahead || t !== c && r.status !== U) {
     var y = r.strategy === b ? function(e, t) {
      for (var n; ;) {
       if (0 === e.lookahead && (ie(e), 0 === e.lookahead)) {
        if (t === c) return $;
        break;
       }
       if (e.match_length = 0, n = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, 
       e.strstart++, n && (ee(e, !1), 0 === e.strm.avail_out)) return $;
      }
      return e.insert = 0, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? W : J) : e.last_lit && (ee(e, !1), 
      0 === e.strm.avail_out) ? $ : Q;
     }(r, t) : r.strategy === x ? function(e, t) {
      for (var n, r, s, a, o = e.window; ;) {
       if (e.lookahead <= I) {
        if (ie(e), e.lookahead <= I && t === c) return $;
        if (0 === e.lookahead) break;
       }
       if (e.match_length = 0, e.lookahead >= L && e.strstart > 0 && (r = o[s = e.strstart - 1]) === o[++s] && r === o[++s] && r === o[++s]) {
        a = e.strstart + I;
        do {} while (r === o[++s] && r === o[++s] && r === o[++s] && r === o[++s] && r === o[++s] && r === o[++s] && r === o[++s] && r === o[++s] && s < a);
        e.match_length = I - (a - s), e.match_length > e.lookahead && (e.match_length = e.lookahead);
       }
       if (e.match_length >= L ? (n = i._tr_tally(e, 1, e.match_length - L), e.lookahead -= e.match_length, 
       e.strstart += e.match_length, e.match_length = 0) : (n = i._tr_tally(e, 0, e.window[e.strstart]), 
       e.lookahead--, e.strstart++), n && (ee(e, !1), 0 === e.strm.avail_out)) return $;
      }
      return e.insert = 0, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? W : J) : e.last_lit && (ee(e, !1), 
      0 === e.strm.avail_out) ? $ : Q;
     }(r, t) : oe[r.level].func(r, t);
     if (y !== W && y !== J || (r.status = U), y === $ || y === W) return 0 === e.avail_out && (r.last_flush = -1), 
     d;
     if (y === Q && (t === u ? i._tr_align(r) : t !== p && (i._tr_stored_block(r, 0, 0, !1), 
     t === l && (Y(r.head), 0 === r.lookahead && (r.strstart = 0, r.block_start = 0, 
     r.insert = 0))), Z(e), 0 === e.avail_out)) return r.last_flush = -1, d;
    }
    return t !== f ? d : r.wrap <= 0 ? h : (2 === r.wrap ? (te(r, 255 & e.adler), te(r, e.adler >> 8 & 255), 
    te(r, e.adler >> 16 & 255), te(r, e.adler >> 24 & 255), te(r, 255 & e.total_in), 
    te(r, e.total_in >> 8 & 255), te(r, e.total_in >> 16 & 255), te(r, e.total_in >> 24 & 255)) : (ne(r, e.adler >>> 16), 
    ne(r, 65535 & e.adler)), Z(e), r.wrap > 0 && (r.wrap = -r.wrap), 0 !== r.pending ? d : h);
   }, n.deflateEnd = function(e) {
    var t;
    return e && e.state ? (t = e.state.status) !== j && t !== V && t !== F && t !== q && t !== z && t !== H && t !== U ? K(e, m) : (e.state = null, 
    t === H ? K(e, v) : d) : m;
   }, n.deflateInfo = "pako deflate (from Nodeca project)";
  }, {
   "../utils/common": 27,
   "./adler32": 29,
   "./crc32": 31,
   "./messages": 37,
   "./trees": 38
  } ],
  33: [ function(e, t, n) {
   "use strict";
   t.exports = function() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, 
    this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
   };
  }, {} ],
  34: [ function(e, t, n) {
   "use strict";
   t.exports = function(e, t) {
    var n, r, i, s, a, o, c, u, l, f, p, d, h, m, v, g, y, _, b, x, w, k, E, C, T;
    n = e.state, r = e.next_in, C = e.input, i = r + (e.avail_in - 5), s = e.next_out, 
    T = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), c = n.dmax, 
    u = n.wsize, l = n.whave, f = n.wnext, p = n.window, d = n.hold, h = n.bits, m = n.lencode, 
    v = n.distcode, g = (1 << n.lenbits) - 1, y = (1 << n.distbits) - 1;
    e: do {
     h < 15 && (d += C[r++] << h, h += 8, d += C[r++] << h, h += 8), _ = m[d & g];
     t: for (;;) {
      if (d >>>= b = _ >>> 24, h -= b, 0 === (b = _ >>> 16 & 255)) T[s++] = 65535 & _; else {
       if (!(16 & b)) {
        if (0 == (64 & b)) {
         _ = m[(65535 & _) + (d & (1 << b) - 1)];
         continue t;
        }
        if (32 & b) {
         n.mode = 12;
         break e;
        }
        e.msg = "invalid literal/length code", n.mode = 30;
        break e;
       }
       x = 65535 & _, (b &= 15) && (h < b && (d += C[r++] << h, h += 8), x += d & (1 << b) - 1, 
       d >>>= b, h -= b), h < 15 && (d += C[r++] << h, h += 8, d += C[r++] << h, h += 8), 
       _ = v[d & y];
       n: for (;;) {
        if (d >>>= b = _ >>> 24, h -= b, !(16 & (b = _ >>> 16 & 255))) {
         if (0 == (64 & b)) {
          _ = v[(65535 & _) + (d & (1 << b) - 1)];
          continue n;
         }
         e.msg = "invalid distance code", n.mode = 30;
         break e;
        }
        if (w = 65535 & _, h < (b &= 15) && (d += C[r++] << h, (h += 8) < b && (d += C[r++] << h, 
        h += 8)), (w += d & (1 << b) - 1) > c) {
         e.msg = "invalid distance too far back", n.mode = 30;
         break e;
        }
        if (d >>>= b, h -= b, w > (b = s - a)) {
         if ((b = w - b) > l && n.sane) {
          e.msg = "invalid distance too far back", n.mode = 30;
          break e;
         }
         if (k = 0, E = p, 0 === f) {
          if (k += u - b, b < x) {
           x -= b;
           do {
            T[s++] = p[k++];
           } while (--b);
           k = s - w, E = T;
          }
         } else if (f < b) {
          if (k += u + f - b, (b -= f) < x) {
           x -= b;
           do {
            T[s++] = p[k++];
           } while (--b);
           if (k = 0, f < x) {
            x -= b = f;
            do {
             T[s++] = p[k++];
            } while (--b);
            k = s - w, E = T;
           }
          }
         } else if (k += f - b, b < x) {
          x -= b;
          do {
           T[s++] = p[k++];
          } while (--b);
          k = s - w, E = T;
         }
         for (;x > 2; ) T[s++] = E[k++], T[s++] = E[k++], T[s++] = E[k++], x -= 3;
         x && (T[s++] = E[k++], x > 1 && (T[s++] = E[k++]));
        } else {
         k = s - w;
         do {
          T[s++] = T[k++], T[s++] = T[k++], T[s++] = T[k++], x -= 3;
         } while (x > 2);
         x && (T[s++] = T[k++], x > 1 && (T[s++] = T[k++]));
        }
        break;
       }
      }
      break;
     }
    } while (r < i && s < o);
    r -= x = h >> 3, d &= (1 << (h -= x << 3)) - 1, e.next_in = r, e.next_out = s, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), 
    e.avail_out = s < o ? o - s + 257 : 257 - (s - o), n.hold = d, n.bits = h;
   };
  }, {} ],
  35: [ function(e, t, n) {
   "use strict";
   var r = e("../utils/common"), i = e("./adler32"), s = e("./crc32"), a = e("./inffast"), o = e("./inftrees"), c = 0, u = 1, l = 2, f = 4, p = 5, d = 6, h = 0, m = 1, v = 2, g = -2, y = -3, _ = -4, b = -5, x = 8, w = 1, k = 2, E = 3, C = 4, T = 5, S = 6, O = 7, A = 8, N = 9, B = 10, R = 11, P = 12, L = 13, I = 14, M = 15, D = 16, j = 17, V = 18, F = 19, q = 20, z = 21, H = 22, U = 23, $ = 24, Q = 25, W = 26, J = 27, X = 28, K = 29, G = 30, Y = 31, Z = 32, ee = 852, te = 592, ne = 15;
   function re(e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
   }
   function ie(e) {
    var t;
    return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", 
    t.wrap && (e.adler = 1 & t.wrap), t.mode = w, t.last = 0, t.havedict = 0, t.dmax = 32768, 
    t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(ee), t.distcode = t.distdyn = new r.Buf32(te), 
    t.sane = 1, t.back = -1, h) : g;
   }
   function se(e) {
    var t;
    return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, ie(e)) : g;
   }
   function ae(e, t) {
    var n, r;
    return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), 
    t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? g : (null !== r.window && r.wbits !== t && (r.window = null), 
    r.wrap = n, r.wbits = t, se(e))) : g;
   }
   function oe(e, t) {
    var n, i;
    return e ? (i = new function() {
     this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, 
     this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, 
     this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, 
     this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, 
     this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, 
     this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), 
     this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }(), e.state = i, i.window = null, (n = ae(e, t)) !== h && (e.state = null), n) : g;
   }
   var ce, ue, le = !0;
   function fe(e) {
    if (le) {
     var t;
     for (ce = new r.Buf32(512), ue = new r.Buf32(32), t = 0; t < 144; ) e.lens[t++] = 8;
     for (;t < 256; ) e.lens[t++] = 9;
     for (;t < 280; ) e.lens[t++] = 7;
     for (;t < 288; ) e.lens[t++] = 8;
     for (o(u, e.lens, 0, 288, ce, 0, e.work, {
      bits: 9
     }), t = 0; t < 32; ) e.lens[t++] = 5;
     o(l, e.lens, 0, 32, ue, 0, e.work, {
      bits: 5
     }), le = !1;
    }
    e.lencode = ce, e.lenbits = 9, e.distcode = ue, e.distbits = 5;
   }
   n.inflateReset = se, n.inflateReset2 = ae, n.inflateResetKeep = ie, n.inflateInit = function(e) {
    return oe(e, ne);
   }, n.inflateInit2 = oe, n.inflate = function(e, t) {
    var n, ee, te, ne, ie, se, ae, oe, ce, ue, le, pe, de, he, me, ve, ge, ye, _e, be, xe, we, ke, Ee, Ce = 0, Te = new r.Buf8(4), Se = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return g;
    (n = e.state).mode === P && (n.mode = L), ie = e.next_out, te = e.output, ae = e.avail_out, 
    ne = e.next_in, ee = e.input, se = e.avail_in, oe = n.hold, ce = n.bits, ue = se, 
    le = ae, we = h;
    e: for (;;) switch (n.mode) {
    case w:
     if (0 === n.wrap) {
      n.mode = L;
      break;
     }
     for (;ce < 16; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     if (2 & n.wrap && 35615 === oe) {
      n.check = 0, Te[0] = 255 & oe, Te[1] = oe >>> 8 & 255, n.check = s(n.check, Te, 2, 0), 
      oe = 0, ce = 0, n.mode = k;
      break;
     }
     if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & oe) << 8) + (oe >> 8)) % 31) {
      e.msg = "incorrect header check", n.mode = G;
      break;
     }
     if ((15 & oe) !== x) {
      e.msg = "unknown compression method", n.mode = G;
      break;
     }
     if (ce -= 4, xe = 8 + (15 & (oe >>>= 4)), 0 === n.wbits) n.wbits = xe; else if (xe > n.wbits) {
      e.msg = "invalid window size", n.mode = G;
      break;
     }
     n.dmax = 1 << xe, e.adler = n.check = 1, n.mode = 512 & oe ? B : P, oe = 0, ce = 0;
     break;

    case k:
     for (;ce < 16; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     if (n.flags = oe, (255 & n.flags) !== x) {
      e.msg = "unknown compression method", n.mode = G;
      break;
     }
     if (57344 & n.flags) {
      e.msg = "unknown header flags set", n.mode = G;
      break;
     }
     n.head && (n.head.text = oe >> 8 & 1), 512 & n.flags && (Te[0] = 255 & oe, Te[1] = oe >>> 8 & 255, 
     n.check = s(n.check, Te, 2, 0)), oe = 0, ce = 0, n.mode = E;

    case E:
     for (;ce < 32; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     n.head && (n.head.time = oe), 512 & n.flags && (Te[0] = 255 & oe, Te[1] = oe >>> 8 & 255, 
     Te[2] = oe >>> 16 & 255, Te[3] = oe >>> 24 & 255, n.check = s(n.check, Te, 4, 0)), 
     oe = 0, ce = 0, n.mode = C;

    case C:
     for (;ce < 16; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     n.head && (n.head.xflags = 255 & oe, n.head.os = oe >> 8), 512 & n.flags && (Te[0] = 255 & oe, 
     Te[1] = oe >>> 8 & 255, n.check = s(n.check, Te, 2, 0)), oe = 0, ce = 0, n.mode = T;

    case T:
     if (1024 & n.flags) {
      for (;ce < 16; ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      n.length = oe, n.head && (n.head.extra_len = oe), 512 & n.flags && (Te[0] = 255 & oe, 
      Te[1] = oe >>> 8 & 255, n.check = s(n.check, Te, 2, 0)), oe = 0, ce = 0;
     } else n.head && (n.head.extra = null);
     n.mode = S;

    case S:
     if (1024 & n.flags && ((pe = n.length) > se && (pe = se), pe && (n.head && (xe = n.head.extra_len - n.length, 
     n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, ee, ne, pe, xe)), 
     512 & n.flags && (n.check = s(n.check, ee, pe, ne)), se -= pe, ne += pe, n.length -= pe), 
     n.length)) break e;
     n.length = 0, n.mode = O;

    case O:
     if (2048 & n.flags) {
      if (0 === se) break e;
      pe = 0;
      do {
       xe = ee[ne + pe++], n.head && xe && n.length < 65536 && (n.head.name += String.fromCharCode(xe));
      } while (xe && pe < se);
      if (512 & n.flags && (n.check = s(n.check, ee, pe, ne)), se -= pe, ne += pe, xe) break e;
     } else n.head && (n.head.name = null);
     n.length = 0, n.mode = A;

    case A:
     if (4096 & n.flags) {
      if (0 === se) break e;
      pe = 0;
      do {
       xe = ee[ne + pe++], n.head && xe && n.length < 65536 && (n.head.comment += String.fromCharCode(xe));
      } while (xe && pe < se);
      if (512 & n.flags && (n.check = s(n.check, ee, pe, ne)), se -= pe, ne += pe, xe) break e;
     } else n.head && (n.head.comment = null);
     n.mode = N;

    case N:
     if (512 & n.flags) {
      for (;ce < 16; ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      if (oe !== (65535 & n.check)) {
       e.msg = "header crc mismatch", n.mode = G;
       break;
      }
      oe = 0, ce = 0;
     }
     n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, 
     n.mode = P;
     break;

    case B:
     for (;ce < 32; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     e.adler = n.check = re(oe), oe = 0, ce = 0, n.mode = R;

    case R:
     if (0 === n.havedict) return e.next_out = ie, e.avail_out = ae, e.next_in = ne, 
     e.avail_in = se, n.hold = oe, n.bits = ce, v;
     e.adler = n.check = 1, n.mode = P;

    case P:
     if (t === p || t === d) break e;

    case L:
     if (n.last) {
      oe >>>= 7 & ce, ce -= 7 & ce, n.mode = J;
      break;
     }
     for (;ce < 3; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     switch (n.last = 1 & oe, ce -= 1, 3 & (oe >>>= 1)) {
     case 0:
      n.mode = I;
      break;

     case 1:
      if (fe(n), n.mode = q, t === d) {
       oe >>>= 2, ce -= 2;
       break e;
      }
      break;

     case 2:
      n.mode = j;
      break;

     case 3:
      e.msg = "invalid block type", n.mode = G;
     }
     oe >>>= 2, ce -= 2;
     break;

    case I:
     for (oe >>>= 7 & ce, ce -= 7 & ce; ce < 32; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     if ((65535 & oe) != (oe >>> 16 ^ 65535)) {
      e.msg = "invalid stored block lengths", n.mode = G;
      break;
     }
     if (n.length = 65535 & oe, oe = 0, ce = 0, n.mode = M, t === d) break e;

    case M:
     n.mode = D;

    case D:
     if (pe = n.length) {
      if (pe > se && (pe = se), pe > ae && (pe = ae), 0 === pe) break e;
      r.arraySet(te, ee, ne, pe, ie), se -= pe, ne += pe, ae -= pe, ie += pe, n.length -= pe;
      break;
     }
     n.mode = P;
     break;

    case j:
     for (;ce < 14; ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     if (n.nlen = 257 + (31 & oe), oe >>>= 5, ce -= 5, n.ndist = 1 + (31 & oe), oe >>>= 5, 
     ce -= 5, n.ncode = 4 + (15 & oe), oe >>>= 4, ce -= 4, n.nlen > 286 || n.ndist > 30) {
      e.msg = "too many length or distance symbols", n.mode = G;
      break;
     }
     n.have = 0, n.mode = V;

    case V:
     for (;n.have < n.ncode; ) {
      for (;ce < 3; ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      n.lens[Se[n.have++]] = 7 & oe, oe >>>= 3, ce -= 3;
     }
     for (;n.have < 19; ) n.lens[Se[n.have++]] = 0;
     if (n.lencode = n.lendyn, n.lenbits = 7, ke = {
      bits: n.lenbits
     }, we = o(c, n.lens, 0, 19, n.lencode, 0, n.work, ke), n.lenbits = ke.bits, we) {
      e.msg = "invalid code lengths set", n.mode = G;
      break;
     }
     n.have = 0, n.mode = F;

    case F:
     for (;n.have < n.nlen + n.ndist; ) {
      for (;ve = (Ce = n.lencode[oe & (1 << n.lenbits) - 1]) >>> 16 & 255, ge = 65535 & Ce, 
      !((me = Ce >>> 24) <= ce); ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      if (ge < 16) oe >>>= me, ce -= me, n.lens[n.have++] = ge; else {
       if (16 === ge) {
        for (Ee = me + 2; ce < Ee; ) {
         if (0 === se) break e;
         se--, oe += ee[ne++] << ce, ce += 8;
        }
        if (oe >>>= me, ce -= me, 0 === n.have) {
         e.msg = "invalid bit length repeat", n.mode = G;
         break;
        }
        xe = n.lens[n.have - 1], pe = 3 + (3 & oe), oe >>>= 2, ce -= 2;
       } else if (17 === ge) {
        for (Ee = me + 3; ce < Ee; ) {
         if (0 === se) break e;
         se--, oe += ee[ne++] << ce, ce += 8;
        }
        ce -= me, xe = 0, pe = 3 + (7 & (oe >>>= me)), oe >>>= 3, ce -= 3;
       } else {
        for (Ee = me + 7; ce < Ee; ) {
         if (0 === se) break e;
         se--, oe += ee[ne++] << ce, ce += 8;
        }
        ce -= me, xe = 0, pe = 11 + (127 & (oe >>>= me)), oe >>>= 7, ce -= 7;
       }
       if (n.have + pe > n.nlen + n.ndist) {
        e.msg = "invalid bit length repeat", n.mode = G;
        break;
       }
       for (;pe--; ) n.lens[n.have++] = xe;
      }
     }
     if (n.mode === G) break;
     if (0 === n.lens[256]) {
      e.msg = "invalid code -- missing end-of-block", n.mode = G;
      break;
     }
     if (n.lenbits = 9, ke = {
      bits: n.lenbits
     }, we = o(u, n.lens, 0, n.nlen, n.lencode, 0, n.work, ke), n.lenbits = ke.bits, 
     we) {
      e.msg = "invalid literal/lengths set", n.mode = G;
      break;
     }
     if (n.distbits = 6, n.distcode = n.distdyn, ke = {
      bits: n.distbits
     }, we = o(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, ke), n.distbits = ke.bits, 
     we) {
      e.msg = "invalid distances set", n.mode = G;
      break;
     }
     if (n.mode = q, t === d) break e;

    case q:
     n.mode = z;

    case z:
     if (se >= 6 && ae >= 258) {
      e.next_out = ie, e.avail_out = ae, e.next_in = ne, e.avail_in = se, n.hold = oe, 
      n.bits = ce, a(e, le), ie = e.next_out, te = e.output, ae = e.avail_out, ne = e.next_in, 
      ee = e.input, se = e.avail_in, oe = n.hold, ce = n.bits, n.mode === P && (n.back = -1);
      break;
     }
     for (n.back = 0; ve = (Ce = n.lencode[oe & (1 << n.lenbits) - 1]) >>> 16 & 255, 
     ge = 65535 & Ce, !((me = Ce >>> 24) <= ce); ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     if (ve && 0 == (240 & ve)) {
      for (ye = me, _e = ve, be = ge; ve = (Ce = n.lencode[be + ((oe & (1 << ye + _e) - 1) >> ye)]) >>> 16 & 255, 
      ge = 65535 & Ce, !(ye + (me = Ce >>> 24) <= ce); ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      oe >>>= ye, ce -= ye, n.back += ye;
     }
     if (oe >>>= me, ce -= me, n.back += me, n.length = ge, 0 === ve) {
      n.mode = W;
      break;
     }
     if (32 & ve) {
      n.back = -1, n.mode = P;
      break;
     }
     if (64 & ve) {
      e.msg = "invalid literal/length code", n.mode = G;
      break;
     }
     n.extra = 15 & ve, n.mode = H;

    case H:
     if (n.extra) {
      for (Ee = n.extra; ce < Ee; ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      n.length += oe & (1 << n.extra) - 1, oe >>>= n.extra, ce -= n.extra, n.back += n.extra;
     }
     n.was = n.length, n.mode = U;

    case U:
     for (;ve = (Ce = n.distcode[oe & (1 << n.distbits) - 1]) >>> 16 & 255, ge = 65535 & Ce, 
     !((me = Ce >>> 24) <= ce); ) {
      if (0 === se) break e;
      se--, oe += ee[ne++] << ce, ce += 8;
     }
     if (0 == (240 & ve)) {
      for (ye = me, _e = ve, be = ge; ve = (Ce = n.distcode[be + ((oe & (1 << ye + _e) - 1) >> ye)]) >>> 16 & 255, 
      ge = 65535 & Ce, !(ye + (me = Ce >>> 24) <= ce); ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      oe >>>= ye, ce -= ye, n.back += ye;
     }
     if (oe >>>= me, ce -= me, n.back += me, 64 & ve) {
      e.msg = "invalid distance code", n.mode = G;
      break;
     }
     n.offset = ge, n.extra = 15 & ve, n.mode = $;

    case $:
     if (n.extra) {
      for (Ee = n.extra; ce < Ee; ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      n.offset += oe & (1 << n.extra) - 1, oe >>>= n.extra, ce -= n.extra, n.back += n.extra;
     }
     if (n.offset > n.dmax) {
      e.msg = "invalid distance too far back", n.mode = G;
      break;
     }
     n.mode = Q;

    case Q:
     if (0 === ae) break e;
     if (pe = le - ae, n.offset > pe) {
      if ((pe = n.offset - pe) > n.whave && n.sane) {
       e.msg = "invalid distance too far back", n.mode = G;
       break;
      }
      pe > n.wnext ? (pe -= n.wnext, de = n.wsize - pe) : de = n.wnext - pe, pe > n.length && (pe = n.length), 
      he = n.window;
     } else he = te, de = ie - n.offset, pe = n.length;
     pe > ae && (pe = ae), ae -= pe, n.length -= pe;
     do {
      te[ie++] = he[de++];
     } while (--pe);
     0 === n.length && (n.mode = z);
     break;

    case W:
     if (0 === ae) break e;
     te[ie++] = n.length, ae--, n.mode = z;
     break;

    case J:
     if (n.wrap) {
      for (;ce < 32; ) {
       if (0 === se) break e;
       se--, oe |= ee[ne++] << ce, ce += 8;
      }
      if (le -= ae, e.total_out += le, n.total += le, le && (e.adler = n.check = n.flags ? s(n.check, te, le, ie - le) : i(n.check, te, le, ie - le)), 
      le = ae, (n.flags ? oe : re(oe)) !== n.check) {
       e.msg = "incorrect data check", n.mode = G;
       break;
      }
      oe = 0, ce = 0;
     }
     n.mode = X;

    case X:
     if (n.wrap && n.flags) {
      for (;ce < 32; ) {
       if (0 === se) break e;
       se--, oe += ee[ne++] << ce, ce += 8;
      }
      if (oe !== (4294967295 & n.total)) {
       e.msg = "incorrect length check", n.mode = G;
       break;
      }
      oe = 0, ce = 0;
     }
     n.mode = K;

    case K:
     we = m;
     break e;

    case G:
     we = y;
     break e;

    case Y:
     return _;

    case Z:
    default:
     return g;
    }
    return e.next_out = ie, e.avail_out = ae, e.next_in = ne, e.avail_in = se, n.hold = oe, 
    n.bits = ce, (n.wsize || le !== e.avail_out && n.mode < G && (n.mode < J || t !== f)) && function(e, t, n, i) {
     var s, a = e.state;
     return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new r.Buf8(a.wsize)), 
     i >= a.wsize ? (r.arraySet(a.window, t, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((s = a.wsize - a.wnext) > i && (s = i), 
     r.arraySet(a.window, t, n - i, s, a.wnext), (i -= s) ? (r.arraySet(a.window, t, n - i, i, 0), 
     a.wnext = i, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), 
     a.whave < a.wsize && (a.whave += s))), 0;
    }(e, e.output, e.next_out, le - e.avail_out) ? (n.mode = Y, _) : (ue -= e.avail_in, 
    le -= e.avail_out, e.total_in += ue, e.total_out += le, n.total += le, n.wrap && le && (e.adler = n.check = n.flags ? s(n.check, te, le, e.next_out - le) : i(n.check, te, le, e.next_out - le)), 
    e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === P ? 128 : 0) + (n.mode === q || n.mode === M ? 256 : 0), 
    (0 === ue && 0 === le || t === f) && we === h && (we = b), we);
   }, n.inflateEnd = function(e) {
    if (!e || !e.state) return g;
    var t = e.state;
    return t.window && (t.window = null), e.state = null, h;
   }, n.inflateGetHeader = function(e, t) {
    var n;
    return e && e.state ? 0 == (2 & (n = e.state).wrap) ? g : (n.head = t, t.done = !1, 
    h) : g;
   }, n.inflateInfo = "pako inflate (from Nodeca project)";
  }, {
   "../utils/common": 27,
   "./adler32": 29,
   "./crc32": 31,
   "./inffast": 34,
   "./inftrees": 36
  } ],
  36: [ function(e, t, n) {
   "use strict";
   var r = e("../utils/common"), i = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ], s = [ 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78 ], a = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0 ], o = [ 16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64 ];
   t.exports = function(e, t, n, c, u, l, f, p) {
    var d, h, m, v, g, y, _, b, x, w = p.bits, k = 0, E = 0, C = 0, T = 0, S = 0, O = 0, A = 0, N = 0, B = 0, R = 0, P = null, L = 0, I = new r.Buf16(16), M = new r.Buf16(16), D = null, j = 0;
    for (k = 0; k <= 15; k++) I[k] = 0;
    for (E = 0; E < c; E++) I[t[n + E]]++;
    for (S = w, T = 15; T >= 1 && 0 === I[T]; T--) ;
    if (S > T && (S = T), 0 === T) return u[l++] = 20971520, u[l++] = 20971520, p.bits = 1, 
    0;
    for (C = 1; C < T && 0 === I[C]; C++) ;
    for (S < C && (S = C), N = 1, k = 1; k <= 15; k++) if (N <<= 1, (N -= I[k]) < 0) return -1;
    if (N > 0 && (0 === e || 1 !== T)) return -1;
    for (M[1] = 0, k = 1; k < 15; k++) M[k + 1] = M[k] + I[k];
    for (E = 0; E < c; E++) 0 !== t[n + E] && (f[M[t[n + E]]++] = E);
    if (0 === e ? (P = D = f, y = 19) : 1 === e ? (P = i, L -= 257, D = s, j -= 257, 
    y = 256) : (P = a, D = o, y = -1), R = 0, E = 0, k = C, g = l, O = S, A = 0, m = -1, 
    v = (B = 1 << S) - 1, 1 === e && B > 852 || 2 === e && B > 592) return 1;
    for (;;) {
     0, _ = k - A, f[E] < y ? (b = 0, x = f[E]) : f[E] > y ? (b = D[j + f[E]], x = P[L + f[E]]) : (b = 96, 
     x = 0), d = 1 << k - A, C = h = 1 << O;
     do {
      u[g + (R >> A) + (h -= d)] = _ << 24 | b << 16 | x | 0;
     } while (0 !== h);
     for (d = 1 << k - 1; R & d; ) d >>= 1;
     if (0 !== d ? (R &= d - 1, R += d) : R = 0, E++, 0 == --I[k]) {
      if (k === T) break;
      k = t[n + f[E]];
     }
     if (k > S && (R & v) !== m) {
      for (0 === A && (A = S), g += C, N = 1 << (O = k - A); O + A < T && !((N -= I[O + A]) <= 0); ) O++, 
      N <<= 1;
      if (B += 1 << O, 1 === e && B > 852 || 2 === e && B > 592) return 1;
      u[m = R & v] = S << 24 | O << 16 | g - l | 0;
     }
    }
    return 0 !== R && (u[g + R] = k - A << 24 | 64 << 16 | 0), p.bits = S, 0;
   };
  }, {
   "../utils/common": 27
  } ],
  37: [ function(e, t, n) {
   "use strict";
   t.exports = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
   };
  }, {} ],
  38: [ function(e, t, n) {
   "use strict";
   var r = e("../utils/common"), i = 4, s = 0, a = 1, o = 2;
   function c(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
   }
   var u = 0, l = 1, f = 2, p = 29, d = 256, h = d + 1 + p, m = 30, v = 19, g = 2 * h + 1, y = 15, _ = 16, b = 7, x = 256, w = 16, k = 17, E = 18, C = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ], T = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], S = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ], O = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], A = new Array(2 * (h + 2));
   c(A);
   var N = new Array(2 * m);
   c(N);
   var B = new Array(512);
   c(B);
   var R = new Array(256);
   c(R);
   var P = new Array(p);
   c(P);
   var L = new Array(m);
   c(L);
   var I, M, D, j = function(e, t, n, r, i) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, 
    this.max_length = i, this.has_stree = e && e.length;
   }, V = function(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
   };
   function F(e) {
    return e < 256 ? B[e] : B[256 + (e >>> 7)];
   }
   function q(e, t) {
    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
   }
   function z(e, t, n) {
    e.bi_valid > _ - n ? (e.bi_buf |= t << e.bi_valid & 65535, q(e, e.bi_buf), e.bi_buf = t >> _ - e.bi_valid, 
    e.bi_valid += n - _) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
   }
   function H(e, t, n) {
    z(e, n[2 * t], n[2 * t + 1]);
   }
   function U(e, t) {
    var n = 0;
    do {
     n |= 1 & e, e >>>= 1, n <<= 1;
    } while (--t > 0);
    return n >>> 1;
   }
   function $(e, t, n) {
    var r, i, s = new Array(y + 1), a = 0;
    for (r = 1; r <= y; r++) s[r] = a = a + n[r - 1] << 1;
    for (i = 0; i <= t; i++) {
     var o = e[2 * i + 1];
     0 !== o && (e[2 * i] = U(s[o]++, o));
    }
   }
   function Q(e) {
    var t;
    for (t = 0; t < h; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < m; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < v; t++) e.bl_tree[2 * t] = 0;
    e.dyn_ltree[2 * x] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
   }
   function W(e) {
    e.bi_valid > 8 ? q(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), 
    e.bi_buf = 0, e.bi_valid = 0;
   }
   function J(e, t, n, r) {
    var i = 2 * t, s = 2 * n;
    return e[i] < e[s] || e[i] === e[s] && r[t] <= r[n];
   }
   function X(e, t, n) {
    for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && J(t, e.heap[i + 1], e.heap[i], e.depth) && i++, 
    !J(t, r, e.heap[i], e.depth)); ) e.heap[n] = e.heap[i], n = i, i <<= 1;
    e.heap[n] = r;
   }
   function K(e, t, n) {
    var r, i, s, a, o = 0;
    if (0 !== e.last_lit) do {
     r = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], i = e.pending_buf[e.l_buf + o], 
     o++, 0 === r ? H(e, i, t) : (H(e, (s = R[i]) + d + 1, t), 0 !== (a = C[s]) && z(e, i -= P[s], a), 
     H(e, s = F(--r), n), 0 !== (a = T[s]) && z(e, r -= L[s], a));
    } while (o < e.last_lit);
    H(e, x, t);
   }
   function G(e, t) {
    var n, r, i, s = t.dyn_tree, a = t.stat_desc.static_tree, o = t.stat_desc.has_stree, c = t.stat_desc.elems, u = -1;
    for (e.heap_len = 0, e.heap_max = g, n = 0; n < c; n++) 0 !== s[2 * n] ? (e.heap[++e.heap_len] = u = n, 
    e.depth[n] = 0) : s[2 * n + 1] = 0;
    for (;e.heap_len < 2; ) s[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, 
    e.depth[i] = 0, e.opt_len--, o && (e.static_len -= a[2 * i + 1]);
    for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) X(e, s, n);
    i = c;
    do {
     n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], X(e, s, 1), r = e.heap[1], e.heap[--e.heap_max] = n, 
     e.heap[--e.heap_max] = r, s[2 * i] = s[2 * n] + s[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, 
     s[2 * n + 1] = s[2 * r + 1] = i, e.heap[1] = i++, X(e, s, 1);
    } while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1], function(e, t) {
     var n, r, i, s, a, o, c = t.dyn_tree, u = t.max_code, l = t.stat_desc.static_tree, f = t.stat_desc.has_stree, p = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, h = t.stat_desc.max_length, m = 0;
     for (s = 0; s <= y; s++) e.bl_count[s] = 0;
     for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < g; n++) (s = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && (s = h, 
     m++), c[2 * r + 1] = s, r > u || (e.bl_count[s]++, a = 0, r >= d && (a = p[r - d]), 
     o = c[2 * r], e.opt_len += o * (s + a), f && (e.static_len += o * (l[2 * r + 1] + a)));
     if (0 !== m) {
      do {
       for (s = h - 1; 0 === e.bl_count[s]; ) s--;
       e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[h]--, m -= 2;
      } while (m > 0);
      for (s = h; 0 !== s; s--) for (r = e.bl_count[s]; 0 !== r; ) (i = e.heap[--n]) > u || (c[2 * i + 1] !== s && (e.opt_len += (s - c[2 * i + 1]) * c[2 * i], 
      c[2 * i + 1] = s), r--);
     }
    }(e, t), $(s, u, e.bl_count);
   }
   function Y(e, t, n) {
    var r, i, s = -1, a = t[1], o = 0, c = 7, u = 4;
    for (0 === a && (c = 138, u = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = a, 
    a = t[2 * (r + 1) + 1], ++o < c && i === a || (o < u ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, 
    e.bl_tree[2 * w]++) : o <= 10 ? e.bl_tree[2 * k]++ : e.bl_tree[2 * E]++, o = 0, 
    s = i, 0 === a ? (c = 138, u = 3) : i === a ? (c = 6, u = 3) : (c = 7, u = 4));
   }
   function Z(e, t, n) {
    var r, i, s = -1, a = t[1], o = 0, c = 7, u = 4;
    for (0 === a && (c = 138, u = 3), r = 0; r <= n; r++) if (i = a, a = t[2 * (r + 1) + 1], 
    !(++o < c && i === a)) {
     if (o < u) do {
      H(e, i, e.bl_tree);
     } while (0 != --o); else 0 !== i ? (i !== s && (H(e, i, e.bl_tree), o--), H(e, w, e.bl_tree), 
     z(e, o - 3, 2)) : o <= 10 ? (H(e, k, e.bl_tree), z(e, o - 3, 3)) : (H(e, E, e.bl_tree), 
     z(e, o - 11, 7));
     o = 0, s = i, 0 === a ? (c = 138, u = 3) : i === a ? (c = 6, u = 3) : (c = 7, u = 4);
    }
   }
   var ee = !1;
   function te(e, t, n, i) {
    z(e, (u << 1) + (i ? 1 : 0), 3), function(e, t, n, i) {
     W(e), i && (q(e, n), q(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), 
     e.pending += n;
    }(e, t, n, !0);
   }
   n._tr_init = function(e) {
    ee || (function() {
     var e, t, n, r, i, s = new Array(y + 1);
     for (n = 0, r = 0; r < p - 1; r++) for (P[r] = n, e = 0; e < 1 << C[r]; e++) R[n++] = r;
     for (R[n - 1] = r, i = 0, r = 0; r < 16; r++) for (L[r] = i, e = 0; e < 1 << T[r]; e++) B[i++] = r;
     for (i >>= 7; r < m; r++) for (L[r] = i << 7, e = 0; e < 1 << T[r] - 7; e++) B[256 + i++] = r;
     for (t = 0; t <= y; t++) s[t] = 0;
     for (e = 0; e <= 143; ) A[2 * e + 1] = 8, e++, s[8]++;
     for (;e <= 255; ) A[2 * e + 1] = 9, e++, s[9]++;
     for (;e <= 279; ) A[2 * e + 1] = 7, e++, s[7]++;
     for (;e <= 287; ) A[2 * e + 1] = 8, e++, s[8]++;
     for ($(A, h + 1, s), e = 0; e < m; e++) N[2 * e + 1] = 5, N[2 * e] = U(e, 5);
     I = new j(A, C, d + 1, h, y), M = new j(N, T, 0, m, y), D = new j(new Array(0), S, 0, v, b);
    }(), ee = !0), e.l_desc = new V(e.dyn_ltree, I), e.d_desc = new V(e.dyn_dtree, M), 
    e.bl_desc = new V(e.bl_tree, D), e.bi_buf = 0, e.bi_valid = 0, Q(e);
   }, n._tr_stored_block = te, n._tr_flush_block = function(e, t, n, r) {
    var c, u, p = 0;
    e.level > 0 ? (e.strm.data_type === o && (e.strm.data_type = function(e) {
     var t, n = 4093624447;
     for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return s;
     if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return a;
     for (t = 32; t < d; t++) if (0 !== e.dyn_ltree[2 * t]) return a;
     return s;
    }(e)), G(e, e.l_desc), G(e, e.d_desc), p = function(e) {
     var t;
     for (Y(e, e.dyn_ltree, e.l_desc.max_code), Y(e, e.dyn_dtree, e.d_desc.max_code), 
     G(e, e.bl_desc), t = v - 1; t >= 3 && 0 === e.bl_tree[2 * O[t] + 1]; t--) ;
     return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
    }(e), c = e.opt_len + 3 + 7 >>> 3, (u = e.static_len + 3 + 7 >>> 3) <= c && (c = u)) : c = u = n + 5, 
    n + 4 <= c && -1 !== t ? te(e, t, n, r) : e.strategy === i || u === c ? (z(e, (l << 1) + (r ? 1 : 0), 3), 
    K(e, A, N)) : (z(e, (f << 1) + (r ? 1 : 0), 3), function(e, t, n, r) {
     var i;
     for (z(e, t - 257, 5), z(e, n - 1, 5), z(e, r - 4, 4), i = 0; i < r; i++) z(e, e.bl_tree[2 * O[i] + 1], 3);
     Z(e, e.dyn_ltree, t - 1), Z(e, e.dyn_dtree, n - 1);
    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, p + 1), K(e, e.dyn_ltree, e.dyn_dtree)), 
    Q(e), r && W(e);
   }, n._tr_tally = function(e, t, n) {
    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, 
    e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, 
    t--, e.dyn_ltree[2 * (R[n] + d + 1)]++, e.dyn_dtree[2 * F(t)]++), e.last_lit === e.lit_bufsize - 1;
   }, n._tr_align = function(e) {
    z(e, l << 1, 3), H(e, x, A), function(e) {
     16 === e.bi_valid ? (q(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, 
     e.bi_buf >>= 8, e.bi_valid -= 8);
    }(e);
   };
  }, {
   "../utils/common": 27
  } ],
  39: [ function(e, t, n) {
   "use strict";
   t.exports = function() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, 
    this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, 
    this.data_type = 2, this.adler = 0;
   };
  }, {} ]
 }, {}, [ 9 ])(9);
}), function() {
 function e(e, t) {
  for (var n = []; e; ) n.push(t), --e;
  return n;
 }
 function t(e, t) {
  for (var n = 0, r = {}; n < e.length; ++n) r[e[n]] = t[n];
  return r;
 }
 function n(e, t) {
  var n = e.split(/%[ds]/);
  return n.length > t.length && t.push(""), t.map(function(e, t) {
   return n[t] + e;
  }).join("");
 }
 function r(e, t) {
  C.info(n(e, t));
 }
 function i(e, t) {
  return -1 !== e.indexOf(t, e.length - t.length);
 }
 function s(e) {
  return Object.keys(e).map(function(e) {
   return parseInt(e);
  });
 }
 function a(e, t) {
  var n, r = [];
  if (Array.isArray(e)) for (n = 0; n < e.length; ++n) n in e && r.push([ n, e[n] ]); else for (n in e) r.push([ n, e[n] ]);
  return r.sort(t ? function(e, t) {
   return e[0] - t[0];
  } : function(e, t) {
   return e[1] - t[1] || t[0] - e[0];
  }), r;
 }
 function o(e) {
  this.reset(), this.ixp = e, this.divs = this.mdur = this.ixm = 0;
 }
 function c(e, t) {
  this.tijd = 0, this.dur = e, this.fact = null, this.tup = [ "" ], this.tupabc = "", 
  this.grace = this.beam = 0, this.after = this.before = "", this.ns = t ? [ t ] : [], 
  this.lyrs = {}, this.pos = 0;
 }
 function u(e) {
  this.tijd = 0, this.str = e, this.pos = 0;
 }
 function l() {}
 function f(e) {
  this.maxtime = this.tijd = 0, this.gMaten = [], this.gLyrics = [], this.vnums = {}, 
  this.cnt = new l(), this.vceCnt = 1, this.lastnote = null, this.bpl = e.b, this.cpl = e.n, 
  this.repbra = 0, this.nvlt = e.v;
 }
 function p(e, t, n, r) {
  this.fnmext = e, this.outlist = [], this.infolist = [], this.title = "T:Title", 
  this.key = "none", this.clefs = {}, this.mtr = "none", this.tempo = 0, this.pad = t, 
  this.X = n + 1, this.denL = r.d, this.volpan = r.m, this.cmpL = [], this.rightmargin = this.leftmargin = this.pagewidth = this.scale = "", 
  4 == r.p.length && (this.scale = "" != r.p[0] ? parseFloat(r.p[0]) : "", this.pagewidth = "" != r.p[1] ? parseFloat(r.p[1]) : "", 
  this.leftmargin = "" != r.p[2] ? parseFloat(r.p[2]) : "", this.rightmargin = "" != r.p[3] ? parseFloat(r.p[3]) : "");
 }
 function d(e, t) {
  if (!e.join("")) return [ "", 0 ];
  for (var n = [], r = 0; r < e.length; ++r) {
   var s = e[r];
   "" == s ? s = t ? "_" : "*" : i(s, "_") && !i(s, "\\_") ? (s = s.replace("_", ""), 
   t = 1) : t = 0, n.push(s);
  }
  return [ n.join(" "), t ];
 }
 function h(e, t) {
  for (var n, r = e, i = t; t; ) n = e % t, e = t, t = n;
  return [ r / e, i / e ];
 }
 function m(e, t, n) {
  return 0 == e.dur ? "" : (t = (i = h(n * e.dur, 4 * t))[0], n = i[1], e.fact && (t = (i = h(t * (i = e.fact[0]), n * (e = e.fact[1])))[0], 
  n = i[1]), 64 < n && (r("denominator too small: %d/%d rounded to %d/%d", [ t, n, (i = h(Math.round(64 * t / n) || 1, 64))[0], i[1] ]), 
  t = i[0], n = i[1]), 1 == t ? 1 == n ? "" : 2 == n ? "/" : "/" + n : 1 == n ? "" + t : t + "/" + n);
  var i;
 }
 function v(e) {
  if (!(r = e.match(/([_^]*)([A-Ga-g])([',]*)/))) return -1;
  e = r[1];
  var t, n = r[2], r = r[3];
  return t = n.toUpperCase(), n = 60 + [ 0, 2, 4, 5, 7, 9, 11 ]["CDEFGAB".indexOf(t)] + (t != n ? 12 : 0), 
  e && (n += ("^" == e[0] ? 1 : -1) * e.length), r && (n += ("'" == r[0] ? 12 : -12) * r.length), 
  n;
 }
 function g(e, t, r) {
  var i, s, a = 0, o = t[e];
  -1 < (s = o.tup.indexOf("start")) && o.tup.splice(s, 1);
  var c = e;
  for (r = [ o.fact[0] / r[0], o.fact[1] / r[1] ]; e < t.length; ) {
   if (!((o = t[e]) instanceof u || o.grace)) {
    if (-1 < o.tup.indexOf("start") ? (e = (s = g(e, t, r))[0], a += s = s[1]) : o.fact && (a += 1), 
    -1 < (s = o.tup.indexOf("stop"))) {
     o.tup.splice(s, 1);
     break;
    }
    if (!o.fact) {
     e = i;
     break;
    }
    i = e;
   }
   e += 1;
  }
  return i = "3,2,3" == (i = [ r[0], r[1], a ]).toString() ? "(3" : n("(%d:%d:%d", i), 
  t[c].tupabc = i + t[c].tupabc, [ e, a ];
 }
 function y(e) {
  e = e.filter(function(e) {
   return e instanceof c;
  });
  for (var t = 0; t < e.length - 1; ) {
   var n = e[t], r = e[t + 1];
   !n.fact && !r.fact && 0 < n.dur && r.beam && (3 * n.dur == r.dur ? (r.dur = 2 * r.dur / 3, 
   n.dur *= 2, n.after = "<" + n.after, t += 1) : 3 * r.dur == n.dur && (n.dur = 2 * n.dur / 3, 
   r.dur *= 2, n.after = ">" + n.after, t += 1)), t += 1;
  }
 }
 function _(e, t, n, r, s) {
  for (r = 0; r < e.length; ) (n = e[r]) instanceof c && n.fact && (r = (n = g(r, e, [ 1, 1 ]))[0]), 
  r += 1;
  r = [];
  for (var a, o = 0; o < e.length; ++o) {
   if ((n = e[o]) instanceof c) {
    var u = m(n, t, s), l = 1 < n.ns.length;
    a = (a = n.ns.filter(function(e) {
     return i(e, "-");
    })).map(function(e) {
     return e.slice(0, -1);
    });
    var f = "";
    l && a.length == n.ns.length && (n.ns = a, f = "-"), a = n.tupabc + n.before, l && (a += "["), 
    a += n.ns.join(""), l && (a += "]" + f), i(a, "-") && (a = a.slice(0, -1), f = "-"), 
    a += u + f, a += n.after, n = n.beam;
   } else a = n.str, n = 1;
   n ? r.push(a) : r.push(" " + a);
  }
  return r.join("");
 }
 function b(e, t) {
  e.map(function(e, t) {
   e.pos = t;
  }), e.sort(function(e, t) {
   return e.tijd - t.tijd || e.pos - t.pos;
  });
  for (var n = 0, i = [], s = 0; s < e.length; ++s) {
   var a = e[s];
   if (a.tijd > n && i.push(new c(a.tijd - n, "x")), a instanceof u) a.tijd < n && (a.tijd = n), 
   i.push(a), n = a.tijd; else {
    if (a.tijd < n) {
     if ("z" == a.ns[0]) continue;
     var o = i[i.length - 1];
     if (!(o.tijd <= a.tijd)) {
      r("overlapping notes in one voice! part %d, measure %d, note %s discarded", [ t.ixp + 1, t.ixm + 1, a instanceof c ? a.ns : a.str ]);
      continue;
     }
     if ("z" == o.ns[0]) o.dur = a.tijd - o.tijd, 0 == o.dur && pop(i), r("overlap in part %d, measure %d: rest shortened", [ t.ixp + 1, t.ixm + 1 ]); else {
      if (o.ns = o.ns.concat(a.ns), r("overlap in part %d, measure %d: added chord", [ t.ixp + 1, t.ixm + 1 ]), 
      a.dur = a.tijd + a.dur - n, 0 >= a.dur) continue;
      a.tijd = n;
     }
    }
    i.push(a), n = a.tijd + a.dur;
   }
  }
  return 0 == n && r("empty measure in part %d, measure %d, it should contain at least a rest to advance the time!", [ t.ixp + 1, t.ixm + 1 ]), 
  i;
 }
 function x(e) {
  var t, n, r, i;
  if (0 == e.length) return [];
  for (t = [], r = 0; r < e.length; ++r) {
   if (1 == (n = e[r]).length) t.push("" + n[0]); else {
    for (t.push("("), i = 0; i < n.length; ++i) t.push("" + n[i]);
    t.push(")");
   }
   t.push("|");
  }
  return t.splice(-1, 1), 1 < e.length && (t = [ "{" ].concat(t).concat([ "}" ])), 
  t;
 }
 function w(e, t, n, r, i, s) {
  if ("name_tuple" == e[0]) r = r.shift(), t[0] && (e[1] = t[0] + ":" + e[1], e[2] = t[1] + ":" + e[2]), 
  i.push(e), s.push.apply(s, x(r)); else if (2 == e.length) r = r.shift(), (n = [ "name_tuple", "", "" ])[1] = e[0][1] + ":" + e[1][2], 
  n[2] = e[0][2] + ":" + e[1][3], i.push(n), s.push.apply(s, x(r)); else {
   var a, o, c;
   for (t = (c = e[e.length - 1])[0], a = c[1], o = c[2], c = c[3], a = "yes" == a || n, 
   s.push("brace" == t ? "{" : "["), n = 0; n < e.length - 1; ++n) w(e[n], [ o, c ], a, r, i, s), 
   a && s.push("|");
   a && s.splice(-1, 1), s.push("brace" == t ? "}" : "]");
  }
 }
 function k(e) {
  for (var t = "", n = e.children(), r = 0; r < n.length; ++r) {
   var i = n[r];
   switch (i.nodeName) {
   case "elision":
    t += "~";
    break;

   case "text":
    t += $(i).text().replace(/_/g, "\\_").replace(/-/g, "\\-").replace(/ /g, "~");
   }
  }
  return t ? ("begin" != (n = e.find("syllabic").text()) && "middle" != n || (t += "-"), 
  e.find("extend").length && (t += "_"), t) : t;
 }
 function E(e) {
  this.slurBuf = {}, this.wedge_type = "", this.ingrace = 0, this.msc = new f(e), 
  this.unfold = e.u, this.ctf = e.c, this.gStfMap = [], this.midiMap = [], this.drumInst = {}, 
  this.drumNotes = {}, this.instMid = [], this.midDflt = [ -1, -1, -1, -91 ], this.msralts = {}, 
  this.curalts = {}, this.stfMap = {}, this.clefMap = {}, this.curClef = {}, this.clefOct = {}, 
  this.curStf = {}, this.nolbrk = e.x, this.doPageFmt = 1 == e.p.length, this.tstep = e.t;
 }
 var C, T = Math.pow(2, 53), S = {
  "ornaments>trill-mark": "T",
  "ornaments>mordent": "M",
  "ornaments>inverted-mordent": "P",
  "ornaments>turn": "!turn!",
  "ornaments>inverted-turn": "!invertedturn!",
  "ornaments>tremolo": "!///!",
  "technical>up-bow": "u",
  "technical>down-bow": "v",
  "technical>harmonic": "!open!",
  "technical>open-string": "!open!",
  "technical>stopped": "!plus!",
  "articulations>accent": "!>!",
  "articulations>strong-accent": "!>!",
  "articulations>staccato": ".",
  "articulations>staccatissimo": "!wedge!",
  fermata: "!fermata!",
  arpeggiate: "!arpeggio!",
  "articulations>tenuto": "!tenuto!",
  "articulations>staccatissimo": "!wedge!",
  "articulations>spiccato": "!wedge!",
  "articulations>breath-mark": "!breath!",
  "articulations>detached-legato": "!tenuto!."
 }, O = {
  p: "!p!",
  pp: "!pp!",
  ppp: "!ppp!",
  f: "!f!",
  ff: "!ff!",
  fff: "!fff!",
  mp: "!mp!",
  mf: "!mf!",
  sfz: "!sfz!"
 };
 xml2abc_VERSION = 62, o.prototype.reset = function() {
  this.lline = this.attr = "", this.rline = "|", this.lnum = "";
 }, l.prototype.inc = function(e, t) {
  this.counters[e][t] = (this.counters[e][t] || 0) + 1;
 }, l.prototype.clear = function(n) {
  var r = e((n = Object.keys(n)).length, 0);
  this.counters = {
   note: t(n, r),
   nopr: t(n, r),
   nopt: t(n, r)
  };
 }, l.prototype.getv = function(e, t) {
  return this.counters[e][t];
 }, l.prototype.prcnt = function(e) {
  for (var t in this.counters.note) 0 != this.getv("nopr", t) && r("part %d, voice %d has %d skipped non printable notes", [ e, t, this.getv("nopr", t) ]), 
  0 != this.getv("nopt", t) && r("part %d, voice %d has %d notes without pitch", [ e, t, this.getv("nopt", t) ]), 
  0 == this.getv("note", t) && r("part %d, skipped empty voice %d", [ e, t ]);
 }, f.prototype.initVoices = function(e) {
  for (var t in this.vtimes = {}, this.voices = {}, this.lyrics = {}, this.vnums) this.vtimes[t] = 0, 
  this.voices[t] = [], this.lyrics[t] = [];
  e && this.cnt.clear(this.vnums);
 }, f.prototype.incTime = function(e) {
  this.tijd += e, this.tijd > this.maxtime && (this.maxtime = this.tijd);
 }, f.prototype.appendElemCv = function(e, t) {
  for (var n in e) this.appendElem(n, t);
 }, f.prototype.insertElem = function(e, t) {
  var n = new u(t);
  n.tijd = 0, this.voices[e].unshift(n);
 }, f.prototype.appendObj = function(e, t, n) {
  t.tijd = this.tijd, this.voices[e].push(t), this.incTime(n), this.tijd > this.vtimes[e] && (this.vtimes[e] = this.tijd);
 }, f.prototype.appendElem = function(e, t) {
  this.appendObj(e, new u(t), 0);
 }, f.prototype.appendNote = function(e, t, n) {
  t.ns.push(n), this.appendObj(e, t, parseInt(t.dur)), "z" != n && (this.lastnote = t, 
  this.cnt.inc("note", e), t.grace || this.lyrics[e].push(t.lyrs));
 }, f.prototype.getLastRec = function(e) {
  return this.gMaten.length ? (e = this.gMaten[this.gMaten.length - 1][e])[e.length - 1] : null;
 }, f.prototype.getLastMelis = function(e, t) {
  if (this.gLyrics.length) {
   var n = this.gLyrics[this.gLyrics.length - 1][e];
   if (t in n) return n[t][1];
  }
  return 0;
 }, f.prototype.addChord = function(e) {
  this.lastnote.ns.push(e);
 }, f.prototype.addBar = function(e, t) {
  for (var n in t.mdur && this.maxtime > t.mdur && r("measure %d in part %d longer than metre", [ t.ixm + 1, t.ixp + 1 ]), 
  this.tijd = this.maxtime, this.vnums) {
   if (t.lline || t.lnum) if (a = this.getLastRec(n)) {
    var i = a.str;
    t.lline && (i = (i + t.lline).replace(/:\|:/g, "::").replace(/\|\|/g, "|")), 3 == this.nvlt ? t.ixp + parseInt(n) == Math.min.apply(null, s(this.vnums)) && (i += t.lnum) : 4 == this.nvlt ? parseInt(n) == Math.min.apply(null, s(this.vnums)) && (i += t.lnum) : t.lnum && (i += t.lnum, 
    this.repbra = 1), a.str = i;
   } else t.lline && this.insertElem(n, "|:");
   e && (a = this.getLastRec(n)) && (a.str += e), t.attr && this.insertElem(n, "" + t.attr), 
   this.appendElem(n, " " + t.rline), this.voices[n] = b(this.voices[n], t);
   i = {};
   for (var a, o = (a = this.lyrics[n]).reduce(function(e, t) {
    return e.concat(s(t));
   }, []), c = Math.max.apply(null, o.concat([ 0 ])); 0 < c; --c) {
    o = a.map(function(e) {
     return e[c] || "";
    });
    var u = this.getLastMelis(n, c);
    i[c] = d(o, u);
   }
   this.lyrics[n] = i, y(this.voices[n]);
  }
  this.gMaten.push(this.voices), this.gLyrics.push(this.lyrics), this.tijd = this.maxtime = 0, 
  this.initVoices();
 }, f.prototype.outVoices = function(t, n) {
  var r, i, o, l, f, p, d, h, v;
  for (h in f = {}, d = Math.min.apply(null, s(this.vnums)), this.vnums) if (0 != this.cnt.getv("note", h)) {
   if (C.denL) p = C.denL; else {
    var g = h, y = this.gMaten;
    p = t, v = 0, l = T, i = r = void 0;
    for (var b = [ 4, 8, 16 ]; b.length; ) {
     var x = b.shift(), w = 0;
     for (r = 0; r < y.length; ++r) {
      var k = y[r][g];
      for (i = 0; i < k.length; ++i) {
       var E = k[i];
       E instanceof u || 0 == E.dur || (w += m(E, p, x).length);
      }
     }
     w < l && (v = x, l = w);
    }
    p = v;
   }
   for (C.cmpL.push(p), g = [], y = {}, v = 0; v < this.gMaten.length; ++v) {
    if (l = this.gMaten[v][h], g.push(_(l, t, v, n, p)), i = this.gLyrics, 0 != v) for (b in l = this.gMaten[v][h], 
    r = i[v][h], x = x = b = void 0, i = i[v - 1][h]) if (x = i[b][1], !(b in r) && x) {
     for (x = l, w = [], k = 0; k < x.length; ++k) if ((E = x[k]) instanceof c && !E.grace) {
      if ("z" == E.ns[0]) break;
      w.push("_");
     }
     (x = w.join(" ")) && (r[b] = [ x, 0 ]);
    }
    for (o in r = this.gLyrics[v][h]) if (l = (l = r[o])[0], o in y) {
     for (;y[o].length < v; ) y[o].push("");
     y[o].push(l);
    } else y[o] = e(v, "").concat([ l ]);
   }
   for (o in y) l = y[o], p = g.length - l.length, y[o] = l.concat(e(p, ""));
   for (C.add("V:" + this.vceCnt), this.repbra && (1 == this.nvlt && 1 < this.vceCnt && C.add("I:repbra 0"), 
   2 == this.nvlt && parseInt(h) > d && C.add("I:repbra 0")), 0 < this.cpl ? this.bpl = 0 : 0 == this.bpl && (this.cpl = 100), 
   p = 0; g.length; ) {
    for (v = 1, l = g[0]; v < g.length && !(0 < this.cpl && l.length + g[v].length >= this.cpl) && !(0 < this.bpl && v >= this.bpl); ) l += g[v], 
    v += 1;
    for (p += v, C.add(l + " %" + p), g.splice(0, v), r = a(y, 1), i = 0; i < r.length; ++i) o = (l = r[i])[0], 
    l = l[1], C.add("w: " + l.slice(0, v).join("|") + "|"), l.splice(0, v);
   }
   f[h] = this.vceCnt, this.vceCnt += 1;
  }
  return this.gMaten = [], this.gLyrics = [], this.cnt.prcnt(n + 1), f;
 }, p.prototype.add = function(e) {
  this.outlist.push(e + "\n");
 }, p.prototype.info = function(e, t) {
  this.infolist.push((void 0 === t || t ? "-- " : "") + e);
 }, p.prototype.mkHeader = function(e, t, i) {
  var s, o, c, u, l, f, p = [], d = [];
  for (u = e.slice(), f = 0; f < t.length; ++f) {
   s = t[f];
   try {
    w(s, [ "", "" ], "", e, p, d);
   } catch (e) {
    r("lousy musicxml: error in part-list", []);
   }
  }
  for (t = d.join(" "), e = {}, f = 0; f < u.length; ++f) o = u[f], c = (s = p[f])[1], 
  s = s[2], 0 != o.length && (o = o[0][0], c = c.replace(/\n/g, "\\n").replace(/\.:/g, ".").replace(/^:|:$/g, ""), 
  s = s.replace(/\n/g, "\\n").replace(/\.:/g, ".").replace(/^:|:$/g, ""), e[o] = (c ? 'nm="' + c + '"' : "") + (s ? ' snm="' + s + '"' : ""));
  for (p = [ n("X:%d\n%s\n", [ this.X, this.title ]) ], "" !== this.scale && p.push("%%scale " + this.scale + "\n"), 
  "" !== this.pagewidth && p.push("%%pagewidth " + this.pagewidth + "cm\n"), "" !== this.leftmargin && p.push("%%leftmargin " + this.leftmargin + "cm\n"), 
  "" !== this.rightmargin && p.push("%%rightmargin " + this.rightmargin + "cm\n"), 
  t && 1 < d.length && p.push("%%score " + t + "\n"), u = this.tempo ? "Q:1/4=" + this.tempo + "\n" : "", 
  d = [], f = 0; f < this.cmpL.length; ++f) d[s = this.cmpL[f]] = (d[s] || 0) + 1;
  for (l in d = (d = a(d))[d.length - 1][0], d = this.denL ? this.denL : d, p.push(n("L:1/%d\n%sM:%s\n", [ d, u, this.mtr ])), 
  p.push(n("I:linebreak $\nK:%s\n", [ this.key ])), this.clefs) {
   for (f = (s = i[l - 1])[0], t = s[1], c = s[1], o = s[3], u = s.slice(4), s = this.clefs[l], 
   u.length && 0 > s.indexOf("perc") && (s = (s + " map=perc").trim()), p.push(n("V:%d %s %s\n", [ l, s, e[l] || "" ])), 
   1 < this.volpan ? (0 < f && f != l && p.push("%%MIDI channel " + f + "\n"), 0 < t && p.push("%%MIDI program " + (t - 1) + "\n"), 
   0 <= c && p.push("%%MIDI control 7 " + c + "\n"), 0 <= o && p.push("%%MIDI control 10 " + o + "\n")) : 0 < this.volpan && (u.length && 0 < f && p.push("%%MIDI channel " + f + "\n"), 
   0 < t && p.push("%%MIDI program " + (t - 1) + "\n")), f = 0; f < u.length; ++f) s = u[f].nt, 
   c = u[f].step, t = u[f].midi, (o = u[f].nhd) || (o = "normal"), (v(s) != t || s != c) && (0 < this.volpan && p.push("%%MIDI drummap " + s + " " + t + "\n"), 
   p.push("I:percmap " + s + " " + c + " " + t + " " + o + "\n"));
   d != this.cmpL[l - 1] && p.push("L:1/" + this.cmpL[l - 1] + "\n");
  }
  this.outlist = p.concat(this.outlist);
 }, E.prototype.matchSlur = function(e, t, n, i, s, a) {
  if (-1 != [ "start", "stop" ].indexOf(e)) if (t || (t = "1"), t in this.slurBuf) {
   var o = (l = this.slurBuf[t])[0], c = l[1], u = l[2], l = l[3];
   e != o ? (n != c || "start" != o || l && a || (u.before = "(" + u.before, i.after += ")"), 
   delete this.slurBuf[t]) : (r("double slur numbers %s-%s in part %d, measure %d, voice %d note %s, first discarded", [ e, t, this.msr.ixp + 1, this.msr.ixm + 1, n, i.ns ]), 
   this.slurBuf[t] = [ e, n, i, s ]);
  } else this.slurBuf[t] = [ e, n, i, s ];
 }, E.prototype.doNotations = function(e, t) {
  for (var n = Object.keys(S).sort(), r = 0; r < n.length; ++r) {
   var i = n[r], s = S[i];
   t.find(i).length && (e.before += s);
  }
  if ((n = t.find("technical>fingering")).length && (e.before += "!" + n.text() + "!"), 
  (n = t.find("ornaments>wavy-line")).length) switch (n.attr("type")) {
  case "start":
   e.before = "!trill(!" + e.before;
   break;

  case "stop":
   e.after += "!trill)!";
  }
 }, E.prototype.ntAbc = function(e, t, n, i) {
  var s = e;
  4 < (t += this.clefOct[this.curStf[i]] || 0) && (s = e.toLowerCase()), 5 < t && (s += Array(t - 5 + 1).join("'")), 
  4 > t && (s += Array(4 - t + 1).join(",")), t = n.find("accidental").text();
  var a = n.find("pitch>alter").text();
  !a && this.msralts[e] && (a = 0);
  var o = s + "#" + i;
  if ("" === t && "" === a) return s;
  if ("" != t) a = {
   "double-flat": -2,
   "flat-flat": -2,
   flat: -1,
   natural: 0,
   sharp: 1,
   "sharp-sharp": 2,
   "double-sharp": 2
  }[t]; else {
   if (a = parseInt(a), o in this.curalts) {
    if (a == this.curalts[o]) return s;
   } else if (a == (this.msralts[e] || 0)) return s;
   if (n.find("tie").map(function() {
    return $(this).attr("type");
   }).get().some(function(e) {
    return "stop" == e;
   })) return s;
   r("accidental %d added in part %d, measure %d, voice %d note %s", [ a, this.msr.ixp + 1, this.msr.ixm + 1, i + 1, s ]);
  }
  return this.curalts[o] = a, [ "__", "_", "=", "^", "^^" ][a + 2] + s;
 }, E.prototype.doNote = function(e) {
  var t = new c(0, null), n = parseInt(e.find("voice").text() || "1");
  this.isSib && (n += 100 * (e.find("staff").text() || 1));
  var r = 0 < e.find("chord").length, i = e.find("pitch>step").text() || e.find("unpitched>display-step").text(), s = e.find("pitch>octave").text() || e.find("unpitched>display-octave").text(), a = 0 < e.find("rest").length, o = e.find("time-modification>actual-notes").text();
  if (o) {
   var u = e.find("time-modification>normal-notes").text();
   t.fact = [ parseInt(o), parseInt(u) ];
  }
  if (t.tup = e.find("notations>tuplet").map(function() {
   return $(this).attr("type");
  }).get(), u = e.find("duration").text(), o = e.find("grace"), t.grace = 0 < o.length, 
  t.before = "", t.after = "", t.grace && !this.ingrace && (this.ingrace = 1, t.before = "{", 
  "yes" == o.attr("slash") && (t.before += "/")), (o = !t.grace && this.ingrace) && (this.ingrace = 0, 
  this.msc.lastnote.after += "}"), a || "no" != e.attr("print-object")) {
   if (u && !t.grace || (u = 0), t.dur = parseInt(u), a || i && s || (this.msc.cnt.inc("nopt", n), 
   s = 5, i = "E"), (u = e.find("notations")).length && this.doNotations(t, u), a = a ? "z" : this.ntAbc(i, parseInt(s), e, n), 
   e.find("unpitched").length) {
    u = this.curClef[this.curStf[n]], i = function(e, t, n, r) {
     var i;
     return i = 0, 0 <= n.indexOf("stafflines=1") && (i += 4), !r && 0 <= n.indexOf("bass") && (i += 12), 
     i && (e = (n = "CDEFGAB".split(""))[(i = n.indexOf(e) + i) % 7], t += Math.floor(i / 7)), 
     4 < t && (e = e.toLowerCase()), 5 < t && (e += Array(t - 5 + 1).join("'")), 4 > t && (e += Array(4 - t + 1).join(",")), 
     e;
    }(i, parseInt(s), u, this.tstep), s = (s = e.find("instrument")).length ? s.attr("id") : "dummyId", 
    s = this.drumInst[s] || v(a);
    var l = (u = e.find("notehead")).text().replace(" ", "-");
    "yes" == u.attr("filled") && (l += "+"), "x" == l && (a = "^" + a.replace(/\^/g, "").replace(/_/g, "")), 
    "circle-x" != l && "diamond" != l || (a = "_" + a.replace(/\^/g, "").replace(/_/g, "")), 
    this.drumNotes[n + ";" + a] = [ i, s, l ];
   }
   for (-1 < (i = e.find("tie").map(function() {
    return $(this).attr("type");
   }).get()).indexOf("start") && (a += "-"), i = e.find("beam").map(function() {
    return $(this).text();
   }).get(), t.beam = -1 < i.indexOf("continue") || -1 < i.indexOf("end") || t.grace, 
   i = e.find("lyric"), s = u = 0; s < i.length; ++s) {
    l = $(i[s]);
    var f = parseInt((l.attr("number") || "1").replace(/^.*verse/, ""));
    0 == f ? f = u + 1 : u = f, t.lyrs[f] = k(l);
   }
   for (r ? this.msc.addChord(a) : (r = parseInt(e.find("staff").text() || "1"), this.curStf[n] != r && (i = r - this.curStf[n], 
   this.curStf[n] = r, this.msc.appendElem(n, "[I:staff " + (0 < i ? "+" : "") + i + "]")), 
   this.msc.appendNote(n, t, a)), i = e.find("notations>slur"), s = 0; s < i.length; ++s) e = $(i[s]), 
   this.matchSlur(e.attr("type"), e.attr("number"), n, this.msc.lastnote, t.grace, o);
  } else this.msc.cnt.inc("nopr", n);
 }, E.prototype.doAttr = function(n) {
  var r, i, s, a, o, c, u, l, f, p, d, h;
  for (r = {
   C1: "alto1",
   C2: "alto2",
   C3: "alto",
   C4: "tenor",
   F4: "bass",
   F3: "bass3",
   G2: "treble",
   TAB: "",
   percussion: "perc"
  }, (i = n.find("divisions").text()) && (this.msr.divs = parseInt(i)), i = parseInt(n.find("transpose>chromatic").text() || "0"), 
  s = n.find("key>fifths").first().text(), a = 0 == this.msc.tijd && 0 == this.msr.ixm, 
  s && (o = parseInt(s), c = n.find("key>mode").first().text() || "major", f = "FCGDAEB".split(""), 
  l = "Cb Gb Db Ab Eb Bb F C G D A E B F# C#".split(" "), u = "Ab Eb Bb F C G D A E B F# C# G# D# A#".split(" "), 
  s = "", "major" == c && (s = l[7 + o]), "minor" == c && (s = u[7 + o] + "min"), 
  s = (o = [ s, o = 0 <= o ? t(f.slice(0, o), e(o, 1)) : t(f.slice(o), e(-o, -1)) ])[0], 
  this.msralts = o[1], a && !i && "none" == C.key ? C.key = s : s == C.key && a || (this.msr.attr += "[K:" + s + "]")), 
  (s = n.find("time>beats").text()) && (c = s + "/" + (o = n.find("time>beat-type").text()), 
  a ? C.mtr = c : this.msr.attr += "[M:" + c + "]", this.msr.mdur = this.msr.divs * parseInt(s) * 4 / parseInt(o)), 
  (s = n.find("transpose>octave-change").text() || "") && (i += 12 * parseInt(s)), 
  c = n.find("clef"), o = 0; o < c.length; o++) if (u = $(c[o]), s = parseInt(u.attr("number") || "1"), 
  f = r[(l = u.find("sign").text()) + (f = "percussion" != l && u.find("line").text() || "")] || "", 
  f += {
   "-2": "-15",
   "-1": "-8",
   1: "+8",
   2: "+15"
  }[l = u.find("clef-octave-change").text() || "0"] || "", this.clefOct[s] = -parseInt(l), 
  i && (f += " transpose=" + i), (l = n.find("staff-details>staff-lines").text()) && (f += " stafflines=" + l), 
  this.curClef[s] = f, a) this.clefMap[s] = f; else for (u = this.stfMap[s], h = 0; h < u.length; ++h) p = u[h], 
  s != this.curStf[p] && (d = s - this.curStf[p], this.curStf[p] = s, l = 0 < d ? "+" : "", 
  this.msc.appendElem(p, "[I:staff " + l + d + "]")), this.msc.appendElem(p, "[K:" + f + "]");
 }, E.prototype.doDirection = function(e) {
  var t, n, r, i, s, a, o, c, u;
  if (r = parseInt(e.find("staff").first().text() || "1"), r = this.stfMap[r][0], 
  t = e.attr("placement"), (n = e.find("sound")).length) {
   if (a = n.find("midi-instrument")) {
    for (u in o = n.find("midi-instrument>midi-program").text(), c = n.find("midi-instrument>midi-channel").text(), 
    this.vceInst) this.vceInst[u] == a.attr("id") && (r = u);
    (u = (o ? o - 1 : c) + "") && 0 < C.volpan && this.msc.appendElem(r, "[I:MIDI= " + (o ? "program" : "channel") + " " + u + "]");
   }
   (n = n.attr("tempo")) && (n = -1 < n.indexOf(".") ? parseFloat(n).toFixed(2) : parseInt(n), 
   0 == this.msc.tijd && 0 == this.msr.ixm ? C.tempo = n : this.msc.appendElem(r, "[Q:1/4=" + n + "]"));
  }
  if ((e = e.children("direction-type")).length) {
   if ((n = e.find("wedge")).length) {
    switch (n.attr("type")) {
    case "crescendo":
     i = "!<(!", this.wedge_type = "<";
     break;

    case "diminuendo":
     i = "!>(!", this.wedge_type = ">";
     break;

    case "stop":
     i = "<" == this.wedge_type ? "!<)!" : "!>)!";
     break;

    default:
     raise("wrong wedge type");
    }
    this.msc.appendElem(r, i);
   }
   for (s in (i = e.find("words").eq(0)).length && (t = "below" == t ? "_" : "^", 0 > parseFloat(i.attr("default-y") || "0") && (t = "_"), 
   (i = i.text().replace(/"/g, '\\"').replace(/\n/g, " ").trim()) && this.msc.appendElem(r, '"' + t + i + '"')), 
   O) t = O[s], e.find("dynamics>" + s).length && this.msc.appendElem(r, t);
   e.find("coda").length && this.msc.appendElem(r, "O"), e.find("segno").length && this.msc.appendElem(r, "S");
  }
 }, E.prototype.doHarmony = function(e) {
  var t, n, r, i, s, a, o, c, u;
  t = parseInt(e.children("staff").text() || "1"), t = this.stfMap[t][0], n = {
   major: "",
   minor: "m",
   augmented: "+",
   diminished: "dim",
   dominant: "7",
   "half-diminished": "m7b5"
  }, r = {
   major: "maj",
   dominant: "",
   minor: "m",
   diminished: "dim",
   augmented: "+",
   suspended: "sus"
  }, i = {
   second: "2",
   fourth: "4",
   seventh: "7",
   sixth: "6",
   ninth: "9",
   "11th": "11",
   "13th": "13"
  }, s = {
   1: "#",
   0: "",
   "-1": "b"
  }, a = e.find("root>root-step", "").text(), o = s[e.find("root>root-alter").text()] || "", 
  c = "", (u = e.find("kind").text()) in n ? u = n[u] : -1 < u.indexOf("-") ? (u = (n = u.split("-"))[0], 
  n = n[1], 0 == (u = (r[u] || "") + (i[n] || "")).indexOf("sus") && (c = u, u = "")) : "none" == u && (u = e.find("kind").attr("text")), 
  r = e.find("degree");
  for (i = 0; i < r.length; ++i) u += (s[(n = $(r[i])).find("degree-alter").text()] || "") + n.find("degree-value").text();
  u = u.replace("79", "9").replace("713", "13").replace("maj6", "6"), e = e.find("bass>bass-step").text() + (s[e.find("bass>bass-alter").text()] || ""), 
  this.msc.appendElem(t, '"' + a + o + u + c + (e && "/" + e) + '"');
 }, E.prototype.doBarline = function(e) {
  var t = e.find("repeat"), n = 0;
  return t.length && (n = t.attr("direction")), this.unfold ? n ? "forward" == n ? 1 : 2 : 0 : ("right" == e.attr("location") && ("light-light" == (t = e.find("bar-style").text()) ? this.msr.rline = "||" : "light-heavy" == t && (this.msr.rline = "|]")), 
  n && ("forward" == n ? this.msr.lline = ":" : this.msr.rline = ":|"), (e = e.find("ending")).length && ("start" == e.attr("type") ? (e = (e.attr("number") || "1").replace(/\./g, "").replace(/ /g, ""), 
  /^[\d,]+$/.test(e) || (e = '"' + e.trim() + '"'), this.msr.lnum = e) : "|" == this.msr.rline && (this.msr.rline = "||")), 
  0);
 }, E.prototype.doPrint = function(e) {
  if ("yes" == e.attr("new-system") || "yes" == e.attr("new-page")) return this.nolbrk ? "" : "$";
 }, E.prototype.doPartList = function(e) {
  var t, r, i, s, a, o, c, u, l, f;
  for (s = e.find("part-list>score-part"), t = 0; t < s.length; ++t) {
   for (r = s[t], a = {}, o = $(r).find("midi-instrument"), r = 0; r < o.length; ++r) {
    for (c = $(o[r]), l = [ "midi-channel", "midi-program", "volume", "pan" ], u = [], 
    i = 0; i < l.length; ++i) f = l[i], u.push(c.find(f).text() || this.midDflt[i]);
    -90 <= (i = u[3]) && 90 >= i && (i = (i + 90) / 180 * 127), a[c.attr("id")] = [ parseInt(u[0]), parseInt(u[1]), parseFloat(u[2]), i ], 
    (u = c.find("midi-unpitched").text()) && (this.drumInst[c.attr("id")] = u - 1);
   }
   this.instMid.push(a);
  }
  return function e(t, n, r) {
   var i, s, a, o;
   if (0 == t.length) return [ [], [] ];
   if ("part-group" == (i = t.shift())[0].nodeName) {
    if (s = i.attr("number"), "start" == (a = i.attr("type"))) {
     for (o in a = [], {
      "group-symbol": 0,
      "group-barline": 0,
      "group-name": 0,
      "group-abbreviation": 0
     }) a.push(i.find(o).text() || "");
     return n[s] = a, r.push(s), t = (o = e(t, n, r))[0], n = (o = e(i = o[1], n, r))[0], 
     r = o[1], [ [ t ].concat(n), r ];
    }
    return r = r.pop(), t.length && "stop" == t[0].attr("type") && s != r && (o = n[r], 
    n[r] = n[s], n[s] = o), [ [ n = n[s] ], t ];
   }
   return n = (o = e(t, n, r))[0], t = o[1], [ [ [ "name_tuple", i.find("part-name").text() || "", i.find("part-abbreviation").text() || "" ] ].concat(n), t ];
  }(u = function(e) {
   function t(e) {
    return e = n('<part-group number="%d" type="%s"></part-group>', [ e, "stop" ]), 
    e = $.parseXML(e).firstChild, $(e);
   }
   var r, i, s, a, o, c, u;
   for (r = [], i = [], c = e.children(), o = 0; o < c.length; o++) "part-group" == (e = $(c[o]))[0].nodeName ? (s = e.attr("number"), 
   a = e.attr("type"), u = i.indexOf(s), "start" == a ? -1 < u ? (r.push(t(s)), r.push(e)) : (r.push(e), 
   i.push(s)) : -1 < u && (i.splice(u, 1), r.push(e))) : r.push(e);
   for (o = i.length - 1; 0 <= o; --o) s = i[o], r.push(t(s));
   return r;
  }(e = e.find("part-list")), {}, [])[0];
 }, E.prototype.mkTitle = function(e) {
  var t, n, i, s, a, o, c, u = [], l = [], f = [];
  for (t = e.find("work>work-title").text().trim(), n = e.find("movement-title").text().trim(), 
  i = e.find("identification>creator"), s = 0; s < i.length; ++s) o = (a = $(i[s])).text(), 
  a = a.attr("type"), o && (o = o.split("\n").map(function(e) {
   return e.trim();
  }), "composer" == a ? u.push.apply(u, o) : "lyricist" != a && "transcriber" != a || l.push.apply(l, o));
  for (i = e.find("identification>rights"), s = 0; s < i.length; ++s) o = (o = $(i[s]).text()).split("\n").map(function(e) {
   return e.trim();
  }), l.push.apply(l, o);
  for (i = e.find("credit"), s = 0; s < i.length; ++s) {
   for (o = "", a = $(i[s]).find("credit-words"), c = 0; c < a.length; ++c) o += $(a[c]).text();
   f.push(o.replace(/\s*[\r\n]\s*/g, " "));
  }
  f = function(e) {
   function r(e) {
    return e && -1 < i.indexOf(e);
   }
   var i, s, a = [];
   for (s = 0; s < f.length; ++s) i = f[s], 6 > e && (i && -1 < t.indexOf(i) || i && -1 < n.indexOf(i)) || 5 > e && (i && -1 < u.indexOf(i) || i && -1 < l.indexOf(i)) || 4 > e && (t && -1 < i.indexOf(t) || n && -1 < i.indexOf(n)) || 3 > e && (u.some(r) || l.some(r)) || 2 > e && /^[\d\W]*$/.test(i) || a.push(i);
   return 0 == e && t + n && (a = ""), a;
  }(this.ctf), t && (t = "T:" + t.replace(/\n/g, "\nT:") + "\n"), n && (t += "T:" + n.replace(/\n/g, "\nT:") + "\n"), 
  f.length && (t += f.map(function(e) {
   return "T:" + e;
  }).join("\n") + "\n"), u.length && (t += u.map(function(e) {
   return "C:" + e;
  }).join("\n") + "\n"), l.length && (t += l.map(function(e) {
   return "Z:" + e;
  }).join("\n") + "\n"), t && (C.title = t.substr(0, t.length - 1)), (this.isSib = 0 <= e.find("identification>encoding>software").text().indexOf("Sibelius")) && r("Sibelius MusicXMl is unreliable", []);
 }, E.prototype.doDefaults = function(e) {
  var t, n, r, i;
  this.doPageFmt && ((t = e.find("defaults")).length && (n = (e = t.find("scaling>millimeters").text()) / (n = t.find("scaling>tenths").text()) / 10, 
  e = t.find("page-layout>page-width").text() * n, t = (r = t.find("page-layout>page-margins").first()).find("left-margin").text(), 
  r = r.find("right-margin").text(), i = 10 * n / .2117, !C.scale && i && (C.scale = i.toFixed(2)), 
  !C.pagewidth && e && (C.pagewidth = e.toFixed(2)), C.leftmargin || "" == t || (C.leftmargin = (t * n).toFixed(2)), 
  C.rightmargin || "" == r || (C.rightmargin = (r * n).toFixed(2))));
 }, E.prototype.locStaffMap = function(e) {
  var t = {};
  this.vceInst = {}, this.msc.vnums = {}, e = e.find("measure>note");
  for (var n = 0; n < e.length; n++) {
   var r = $(e[n]), i = parseInt(r.find("voice").text() || "1");
   this.isSib && (i += 100 * (r.find("staff").text() || 1)), this.msc.vnums[i] = 1;
   var s = parseInt(r.find("staff").text() || "1");
   if (i in t) {
    var a = t[i];
    a[s] = (a[s] || 0) + 1;
   } else (a = {})[s] = 1, t[i] = a;
   (a = r.find("instrument")).length && (this.vceInst[i] = $(a).attr("id"));
  }
  for (i in this.stfMap = {}, this.clefMap = {}, t) {
   for (s in e = [], n = t[i]) e.push([ n[s], s ]);
   e.sort(function(e, t) {
    return t[0] - e[0];
   }), e = e[0][1], this.stfMap[e] = (this.stfMap[e] || []).concat([ i ]), this.curStf[i] = e;
  }
 }, E.prototype.addStaffMap = function(e) {
  var t, n, r, i, s, a, o = [], c = Object.keys(this.stfMap).sort();
  for (n = 0; n < c.length; ++n) {
   for (s = c[n], i = this.stfMap[s], a = [], t = 0; t < i.length; ++t) (r = i[t]) in e && a.push(e[r]);
   if (a.length) for ((o.push(a.sort()), i = s in this.clefMap ? this.clefMap[s] : "treble", 
   t = 0); t < a.length; ++t) r = a[t], C.clefs[r] = i;
  }
  this.gStfMap.push(o);
 }, E.prototype.addMidiMap = function(e, t) {
  var n, r = this.instMid[e], i = Object.keys(r);
  n = i.length ? r[i[0]] : this.midDflt;
  var s, a, o, c = [], u = this;
  for (s in t) o = (i = Object.keys(this.drumNotes).sort().filter(function(e) {
   return e.split(";")[0] == s;
  })).map(function(e) {
   return {
    nt: e.split(";")[1],
    step: u.drumNotes[e][0],
    midi: u.drumNotes[e][1],
    nhd: u.drumNotes[e][2]
   };
  }), i = t[s], (a = this.vceInst[s] || "") in r ? c.push([ i, r[a].concat(o) ]) : c.push([ i, n.concat(o) ]);
  for (c.sort(function(e, t) {
   return e[0] - t[0];
  }), r = 0; r < c.length; ++r) i = c[r][0], n = c[r][1], this.midiMap.push(n);
 }, E.prototype.parse = function(e) {
  var t = $(e);
  this.mkTitle(t), this.doDefaults(t), partlist = this.doPartList(t), e = t.find("part");
  for (var n = 0; n < e.length; ++n) {
   var i = (t = $(e[n])).find("measure");
   this.locStaffMap(t), this.drumNotes = {}, this.clefOct = {}, this.msc.initVoices(1);
   var s = 0, a = 0;
   for (this.msr = new o(n); this.msr.ixm < i.length; ) {
    var c = $(i[this.msr.ixm]), u = 0, l = "";
    this.msr.reset(), this.curalts = {};
    for (var f = c.children(), p = 0; p < f.length; p++) {
     var d = f[p];
     t = $(d);
     switch (d.nodeName) {
     case "note":
      this.doNote(t);
      break;

     case "attributes":
      this.doAttr(t);
      break;

     case "direction":
      this.doDirection(t);
      break;

     case "sound":
      this.doDirection(c);
      break;

     case "harmony":
      this.doHarmony(t);
      break;

     case "barline":
      u = this.doBarline(t);
      break;

     case "backup":
      t = parseInt(t.find("duration").text()), this.msc.incTime(-t);
      break;

     case "forward":
      t = parseInt(t.find("duration").text()), this.msc.incTime(t);
      break;

     case "print":
      l = this.doPrint(t);
     }
    }
    this.msc.addBar(l, this.msr), 1 == u ? (a = this.msr.ixm, this.msr.ixm += 1) : 2 == u ? 1 > s ? (this.msr.ixm = a, 
    s += 1) : (s = 0, this.msr.ixm += 1) : this.msr.ixm += 1;
   }
   i = this.msc.outVoices(this.msr.divs, n), this.addStaffMap(i), this.addMidiMap(n, i);
  }
  Object.keys(i).length ? C.mkHeader(this.gStfMap, partlist, this.midiMap) : r("nothing written, %s has no notes ...", [ C.fnmext ]);
 }, vertaal = function(e, t) {
  var n, i = {
   u: 0,
   b: 0,
   n: 0,
   c: 0,
   v: 0,
   d: 0,
   m: 0,
   x: 0,
   t: 0,
   p: "f"
  };
  for (n in t) i[n] = t[n];
  i.p = i.p ? i.p.split(",") : [], C = new p(".abc", "", 0, i), i = new E(i);
  try {
   i.parse(e);
  } catch (e) {
   r("** exception occurred: %s", [ e ]);
  }
  return [ C.outlist.join(""), C.infolist.join("\n") ];
 };
}(), function(e) {
 "use strict";
 function t(e, t) {
  var n = (65535 & e) + (65535 & t);
  return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
 }
 function n(e, n, r, i, s, a) {
  return t(function(e, t) {
   return e << t | e >>> 32 - t;
  }(t(t(n, e), t(i, a)), s), r);
 }
 function r(e, t, r, i, s, a, o) {
  return n(t & r | ~t & i, e, t, s, a, o);
 }
 function i(e, t, r, i, s, a, o) {
  return n(t & i | r & ~i, e, t, s, a, o);
 }
 function s(e, t, r, i, s, a, o) {
  return n(t ^ r ^ i, e, t, s, a, o);
 }
 function a(e, t, r, i, s, a, o) {
  return n(r ^ (t | ~i), e, t, s, a, o);
 }
 function o(e, n) {
  e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
  var o, c, u, l, f, p = 1732584193, d = -271733879, h = -1732584194, m = 271733878;
  for (o = 0; o < e.length; o += 16) c = p, u = d, l = h, f = m, d = a(d = a(d = a(d = a(d = s(d = s(d = s(d = s(d = i(d = i(d = i(d = i(d = r(d = r(d = r(d = r(d, h = r(h, m = r(m, p = r(p, d, h, m, e[o], 7, -680876936), d, h, e[o + 1], 12, -389564586), p, d, e[o + 2], 17, 606105819), m, p, e[o + 3], 22, -1044525330), h = r(h, m = r(m, p = r(p, d, h, m, e[o + 4], 7, -176418897), d, h, e[o + 5], 12, 1200080426), p, d, e[o + 6], 17, -1473231341), m, p, e[o + 7], 22, -45705983), h = r(h, m = r(m, p = r(p, d, h, m, e[o + 8], 7, 1770035416), d, h, e[o + 9], 12, -1958414417), p, d, e[o + 10], 17, -42063), m, p, e[o + 11], 22, -1990404162), h = r(h, m = r(m, p = r(p, d, h, m, e[o + 12], 7, 1804603682), d, h, e[o + 13], 12, -40341101), p, d, e[o + 14], 17, -1502002290), m, p, e[o + 15], 22, 1236535329), h = i(h, m = i(m, p = i(p, d, h, m, e[o + 1], 5, -165796510), d, h, e[o + 6], 9, -1069501632), p, d, e[o + 11], 14, 643717713), m, p, e[o], 20, -373897302), h = i(h, m = i(m, p = i(p, d, h, m, e[o + 5], 5, -701558691), d, h, e[o + 10], 9, 38016083), p, d, e[o + 15], 14, -660478335), m, p, e[o + 4], 20, -405537848), h = i(h, m = i(m, p = i(p, d, h, m, e[o + 9], 5, 568446438), d, h, e[o + 14], 9, -1019803690), p, d, e[o + 3], 14, -187363961), m, p, e[o + 8], 20, 1163531501), h = i(h, m = i(m, p = i(p, d, h, m, e[o + 13], 5, -1444681467), d, h, e[o + 2], 9, -51403784), p, d, e[o + 7], 14, 1735328473), m, p, e[o + 12], 20, -1926607734), h = s(h, m = s(m, p = s(p, d, h, m, e[o + 5], 4, -378558), d, h, e[o + 8], 11, -2022574463), p, d, e[o + 11], 16, 1839030562), m, p, e[o + 14], 23, -35309556), h = s(h, m = s(m, p = s(p, d, h, m, e[o + 1], 4, -1530992060), d, h, e[o + 4], 11, 1272893353), p, d, e[o + 7], 16, -155497632), m, p, e[o + 10], 23, -1094730640), h = s(h, m = s(m, p = s(p, d, h, m, e[o + 13], 4, 681279174), d, h, e[o], 11, -358537222), p, d, e[o + 3], 16, -722521979), m, p, e[o + 6], 23, 76029189), h = s(h, m = s(m, p = s(p, d, h, m, e[o + 9], 4, -640364487), d, h, e[o + 12], 11, -421815835), p, d, e[o + 15], 16, 530742520), m, p, e[o + 2], 23, -995338651), h = a(h, m = a(m, p = a(p, d, h, m, e[o], 6, -198630844), d, h, e[o + 7], 10, 1126891415), p, d, e[o + 14], 15, -1416354905), m, p, e[o + 5], 21, -57434055), h = a(h, m = a(m, p = a(p, d, h, m, e[o + 12], 6, 1700485571), d, h, e[o + 3], 10, -1894986606), p, d, e[o + 10], 15, -1051523), m, p, e[o + 1], 21, -2054922799), h = a(h, m = a(m, p = a(p, d, h, m, e[o + 8], 6, 1873313359), d, h, e[o + 15], 10, -30611744), p, d, e[o + 6], 15, -1560198380), m, p, e[o + 13], 21, 1309151649), h = a(h, m = a(m, p = a(p, d, h, m, e[o + 4], 6, -145523070), d, h, e[o + 11], 10, -1120210379), p, d, e[o + 2], 15, 718787259), m, p, e[o + 9], 21, -343485551), 
  p = t(p, c), d = t(d, u), h = t(h, l), m = t(m, f);
  return [ p, d, h, m ];
 }
 function c(e) {
  var t, n = "";
  for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
  return n;
 }
 function u(e) {
  var t, n = [];
  for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
  for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
  return n;
 }
 function l(e) {
  var t, n, r = "0123456789abcdef", i = "";
  for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
  return i;
 }
 function f(e) {
  return unescape(encodeURIComponent(e));
 }
 function p(e) {
  return function(e) {
   return c(o(u(e), 8 * e.length));
  }(f(e));
 }
 function d(e, t) {
  return function(e, t) {
   var n, r, i = u(e), s = [], a = [];
   for (s[15] = a[15] = void 0, i.length > 16 && (i = o(i, 8 * e.length)), n = 0; 16 > n; n += 1) s[n] = 909522486 ^ i[n], 
   a[n] = 1549556828 ^ i[n];
   return r = o(s.concat(u(t)), 512 + 8 * t.length), c(o(a.concat(r), 640));
  }(f(e), f(t));
 }
 function h(e, t, n) {
  return t ? n ? d(t, e) : function(e, t) {
   return l(d(e, t));
  }(t, e) : n ? p(e) : function(e) {
   return l(p(e));
  }(e);
 }
 "function" == typeof define && define.amd ? define(function() {
  return h;
 }) : "object" == typeof module && module.exports ? module.exports = h : e.md5 = h;
}(this), function(e) {
 function t() {
  var e = arguments[0], n = t.cache;
  return n[e] && n.hasOwnProperty(e) || (n[e] = t.parse(e)), t.format.call(null, n[e], arguments);
 }
 function n(e) {
  return "number" == typeof e ? "number" : "string" == typeof e ? "string" : Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
 }
 function r(e, t) {
  return t >= 0 && 7 >= t && a[e] ? a[e][t] : Array(t + 1).join(e);
 }
 var i = {
  not_string: /[^s]/,
  not_bool: /[^t]/,
  not_type: /[^T]/,
  not_primitive: /[^v]/,
  number: /[diefg]/,
  numeric_arg: /bcdiefguxX/,
  json: /[j]/,
  not_json: /[^j]/,
  text: /^[^\x25]+/,
  modulo: /^\x25{2}/,
  placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
  key: /^([a-z_][a-z_\d]*)/i,
  key_access: /^\.([a-z_][a-z_\d]*)/i,
  index_access: /^\[(\d+)\]/,
  sign: /^[\+\-]/
 };
 t.format = function(e, s) {
  var a, o, c, u, l, f, p, d = 1, h = e.length, m = "", v = [], g = !0, y = "";
  for (o = 0; h > o; o++) if ("string" === (m = n(e[o]))) v[v.length] = e[o]; else if ("array" === m) {
   if ((u = e[o])[2]) for (a = s[d], c = 0; c < u[2].length; c++) {
    if (!a.hasOwnProperty(u[2][c])) throw new Error(t('[sprintf] property "%s" does not exist', u[2][c]));
    a = a[u[2][c]];
   } else a = u[1] ? s[u[1]] : s[d++];
   if (i.not_type.test(u[8]) && i.not_primitive.test(u[8]) && "function" == n(a) && (a = a()), 
   i.numeric_arg.test(u[8]) && "number" != n(a) && isNaN(a)) throw new TypeError(t("[sprintf] expecting number but found %s", n(a)));
   switch (i.number.test(u[8]) && (g = a >= 0), u[8]) {
   case "b":
    a = parseInt(a, 10).toString(2);
    break;

   case "c":
    a = String.fromCharCode(parseInt(a, 10));
    break;

   case "d":
   case "i":
    a = parseInt(a, 10);
    break;

   case "j":
    a = JSON.stringify(a, null, u[6] ? parseInt(u[6]) : 0);
    break;

   case "e":
    a = u[7] ? parseFloat(a).toExponential(u[7]) : parseFloat(a).toExponential();
    break;

   case "f":
    a = u[7] ? parseFloat(a).toFixed(u[7]) : parseFloat(a);
    break;

   case "g":
    a = u[7] ? parseFloat(a).toPrecision(u[7]) : parseFloat(a);
    break;

   case "o":
    a = a.toString(8);
    break;

   case "s":
    a = String(a), a = u[7] ? a.substring(0, u[7]) : a;
    break;

   case "t":
    a = String(!!a), a = u[7] ? a.substring(0, u[7]) : a;
    break;

   case "T":
    a = n(a), a = u[7] ? a.substring(0, u[7]) : a;
    break;

   case "u":
    a = parseInt(a, 10) >>> 0;
    break;

   case "v":
    a = a.valueOf(), a = u[7] ? a.substring(0, u[7]) : a;
    break;

   case "x":
    a = parseInt(a, 10).toString(16);
    break;

   case "X":
    a = parseInt(a, 10).toString(16).toUpperCase();
   }
   i.json.test(u[8]) ? v[v.length] = a : (!i.number.test(u[8]) || g && !u[3] ? y = "" : (y = g ? "+" : "-", 
   a = a.toString().replace(i.sign, "")), f = u[4] ? "0" === u[4] ? "0" : u[4].charAt(1) : " ", 
   p = u[6] - (y + a).length, l = u[6] && p > 0 ? r(f, p) : "", v[v.length] = u[5] ? y + a + l : "0" === f ? y + l + a : l + y + a);
  }
  return v.join("");
 }, t.cache = {}, t.parse = function(e) {
  for (var t = e, n = [], r = [], s = 0; t; ) {
   if (null !== (n = i.text.exec(t))) r[r.length] = n[0]; else if (null !== (n = i.modulo.exec(t))) r[r.length] = "%"; else {
    if (null === (n = i.placeholder.exec(t))) throw new SyntaxError("[sprintf] unexpected placeholder");
    if (n[2]) {
     s |= 1;
     var a = [], o = n[2], c = [];
     if (null === (c = i.key.exec(o))) throw new SyntaxError("[sprintf] failed to parse named argument key");
     for (a[a.length] = c[1]; "" !== (o = o.substring(c[0].length)); ) if (null !== (c = i.key_access.exec(o))) a[a.length] = c[1]; else {
      if (null === (c = i.index_access.exec(o))) throw new SyntaxError("[sprintf] failed to parse named argument key");
      a[a.length] = c[1];
     }
     n[2] = a;
    } else s |= 2;
    if (3 === s) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
    r[r.length] = n;
   }
   t = t.substring(n[0].length);
  }
  return r;
 };
 var s = function(e, n, r) {
  return (r = (n || []).slice(0)).splice(0, 0, e), t.apply(null, r);
 }, a = {
  0: [ "", "0", "00", "000", "0000", "00000", "000000", "0000000" ],
  " ": [ "", " ", "  ", "   ", "    ", "     ", "      ", "       " ],
  _: [ "", "_", "__", "___", "____", "_____", "______", "_______" ]
 };
 "undefined" != typeof exports ? (exports.sprintf = t, exports.vsprintf = s) : (e.sprintf = t, 
 e.vsprintf = s, "function" == typeof define && define.amd && define(function() {
  return {
   sprintf: t,
   vsprintf: s
  };
 }));
}("undefined" == typeof window ? this : window);

var swfobject = function() {
 var e, t, n, r, i, s, a = "undefined", o = "object", c = "Shockwave Flash", u = "application/x-shockwave-flash", l = "SWFObjectExprInst", f = "onreadystatechange", p = window, d = document, h = navigator, m = !1, v = [ function() {
  m ? function() {
   var e = d.getElementsByTagName("body")[0], t = D(o);
   t.setAttribute("type", u);
   var n = e.appendChild(t);
   if (n) {
    var r = 0;
    !function() {
     if (typeof n.GetVariable != a) {
      var i = n.GetVariable("$version");
      i && (i = i.split(" ")[1].split(","), k.pv = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]);
     } else if (r < 10) return r++, void setTimeout(arguments.callee, 10);
     e.removeChild(t), n = null, S();
    }();
   } else S();
  }() : S();
 } ], g = [], y = [], _ = [], b = !1, x = !1, w = !0, k = function() {
  var e = typeof d.getElementById != a && typeof d.getElementsByTagName != a && typeof d.createElement != a, t = h.userAgent.toLowerCase(), n = h.platform.toLowerCase(), r = /win/.test(n || t), i = /mac/.test(n || t), s = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")), l = !1, f = [ 0, 0, 0 ], v = null;
  if (typeof h.plugins != a && typeof h.plugins[c] == o) !(v = h.plugins[c].description) || typeof h.mimeTypes != a && h.mimeTypes[u] && !h.mimeTypes[u].enabledPlugin || (m = !0, 
  l = !1, v = v.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), f[0] = parseInt(v.replace(/^(.*)\..*$/, "$1"), 10), 
  f[1] = parseInt(v.replace(/^.*\.(.*)\s.*$/, "$1"), 10), f[2] = /[a-zA-Z]/.test(v) ? parseInt(v.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof p.ActiveXObject != a) try {
   var g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
   g && (v = g.GetVariable("$version")) && (l = !0, v = v.split(" ")[1].split(","), 
   f = [ parseInt(v[0], 10), parseInt(v[1], 10), parseInt(v[2], 10) ]);
  } catch (e) {}
  return {
   w3: e,
   pv: f,
   wk: s,
   ie: l,
   win: r,
   mac: i
  };
 }();
 k.w3 && ((typeof d.readyState != a && "complete" == d.readyState || typeof d.readyState == a && (d.getElementsByTagName("body")[0] || d.body)) && E(), 
 b || (typeof d.addEventListener != a && d.addEventListener("DOMContentLoaded", E, !1), 
 k.ie && k.win && (d.attachEvent(f, function() {
  "complete" == d.readyState && (d.detachEvent(f, arguments.callee), E());
 }), p == top && function() {
  if (!b) {
   try {
    d.documentElement.doScroll("left");
   } catch (e) {
    return void setTimeout(arguments.callee, 0);
   }
   E();
  }
 }()), k.wk && function() {
  b || (/loaded|complete/.test(d.readyState) ? E() : setTimeout(arguments.callee, 0));
 }(), T(E)));
 function E() {
  if (!b) {
   try {
    var e = d.getElementsByTagName("body")[0].appendChild(D("span"));
    e.parentNode.removeChild(e);
   } catch (e) {
    return;
   }
   b = !0;
   for (var t = v.length, n = 0; n < t; n++) v[n]();
  }
 }
 function C(e) {
  b ? e() : v[v.length] = e;
 }
 function T(e) {
  if (typeof p.addEventListener != a) p.addEventListener("load", e, !1); else if (typeof d.addEventListener != a) d.addEventListener("load", e, !1); else if (typeof p.attachEvent != a) !function(e, t, n) {
   e.attachEvent(t, n), _[_.length] = [ e, t, n ];
  }(p, "onload", e); else if ("function" == typeof p.onload) {
   var t = p.onload;
   p.onload = function() {
    t(), e();
   };
  } else p.onload = e;
 }
 function S() {
  var e = g.length;
  if (e > 0) for (var t = 0; t < e; t++) {
   var n = g[t].id, r = g[t].callbackFn, i = {
    success: !1,
    id: n
   };
   if (k.pv[0] > 0) {
    var s = M(n);
    if (s) if (!j(g[t].swfVersion) || k.wk && k.wk < 312) if (g[t].expressInstall && A()) {
     var o = {};
     o.data = g[t].expressInstall, o.width = s.getAttribute("width") || "0", o.height = s.getAttribute("height") || "0", 
     s.getAttribute("class") && (o.styleclass = s.getAttribute("class")), s.getAttribute("align") && (o.align = s.getAttribute("align"));
     for (var c = {}, u = s.getElementsByTagName("param"), l = u.length, f = 0; f < l; f++) "movie" != u[f].getAttribute("name").toLowerCase() && (c[u[f].getAttribute("name")] = u[f].getAttribute("value"));
     N(o, c, n, r);
    } else B(s), r && r(i); else F(n, !0), r && (i.success = !0, i.ref = O(n), r(i));
   } else if (F(n, !0), r) {
    var p = O(n);
    p && typeof p.SetVariable != a && (i.success = !0, i.ref = p), r(i);
   }
  }
 }
 function O(e) {
  var t = null, n = M(e);
  if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != a) t = n; else {
   var r = n.getElementsByTagName(o)[0];
   r && (t = r);
  }
  return t;
 }
 function A() {
  return !x && j("6.0.65") && (k.win || k.mac) && !(k.wk && k.wk < 312);
 }
 function N(i, s, o, c) {
  x = !0, n = c || null, r = {
   success: !1,
   id: o
  };
  var u = M(o);
  if (u) {
   "OBJECT" == u.nodeName ? (e = R(u), t = null) : (e = u, t = o), i.id = l, (typeof i.width == a || !/%$/.test(i.width) && parseInt(i.width, 10) < 310) && (i.width = "310"), 
   (typeof i.height == a || !/%$/.test(i.height) && parseInt(i.height, 10) < 137) && (i.height = "137"), 
   d.title = d.title.slice(0, 47) + " - Flash Player Installation";
   var f = k.ie && k.win ? "ActiveX" : "PlugIn", h = "MMredirectURL=" + p.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + d.title;
   if (typeof s.flashvars != a ? s.flashvars += "&" + h : s.flashvars = h, k.ie && k.win && 4 != u.readyState) {
    var m = D("div");
    o += "SWFObjectNew", m.setAttribute("id", o), u.parentNode.insertBefore(m, u), u.style.display = "none", 
    function() {
     4 == u.readyState ? u.parentNode.removeChild(u) : setTimeout(arguments.callee, 10);
    }();
   }
   P(i, s, o);
  }
 }
 function B(e) {
  if (k.ie && k.win && 4 != e.readyState) {
   var t = D("div");
   e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(R(e), t), e.style.display = "none", 
   function() {
    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
   }();
  } else e.parentNode.replaceChild(R(e), e);
 }
 function R(e) {
  var t = D("div");
  if (k.win && k.ie) t.innerHTML = e.innerHTML; else {
   var n = e.getElementsByTagName(o)[0];
   if (n) {
    var r = n.childNodes;
    if (r) for (var i = r.length, s = 0; s < i; s++) 1 == r[s].nodeType && "PARAM" == r[s].nodeName || 8 == r[s].nodeType || t.appendChild(r[s].cloneNode(!0));
   }
  }
  return t;
 }
 function P(e, t, n) {
  var r, i = M(n);
  if (k.wk && k.wk < 312) return r;
  if (i) if (typeof e.id == a && (e.id = n), k.ie && k.win) {
   var s = "";
   for (var c in e) e[c] != Object.prototype[c] && ("data" == c.toLowerCase() ? t.movie = e[c] : "styleclass" == c.toLowerCase() ? s += ' class="' + e[c] + '"' : "classid" != c.toLowerCase() && (s += " " + c + '="' + e[c] + '"'));
   var l = "";
   for (var f in t) t[f] != Object.prototype[f] && (l += '<param name="' + f + '" value="' + t[f] + '" />');
   i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + l + "</object>", 
   y[y.length] = e.id, r = M(e.id);
  } else {
   var p = D(o);
   for (var d in p.setAttribute("type", u), e) e[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? p.setAttribute("class", e[d]) : "classid" != d.toLowerCase() && p.setAttribute(d, e[d]));
   for (var h in t) t[h] != Object.prototype[h] && "movie" != h.toLowerCase() && L(p, h, t[h]);
   i.parentNode.replaceChild(p, i), r = p;
  }
  return r;
 }
 function L(e, t, n) {
  var r = D("param");
  r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r);
 }
 function I(e) {
  var t = M(e);
  t && "OBJECT" == t.nodeName && (k.ie && k.win ? (t.style.display = "none", function() {
   4 == t.readyState ? function(e) {
    var t = M(e);
    if (t) {
     for (var n in t) "function" == typeof t[n] && (t[n] = null);
     t.parentNode.removeChild(t);
    }
   }(e) : setTimeout(arguments.callee, 10);
  }()) : t.parentNode.removeChild(t));
 }
 function M(e) {
  var t = null;
  try {
   t = d.getElementById(e);
  } catch (e) {}
  return t;
 }
 function D(e) {
  return d.createElement(e);
 }
 function j(e) {
  var t = k.pv, n = e.split(".");
  return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, 
  t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2];
 }
 function V(e, t, n, r) {
  if (!k.ie || !k.mac) {
   var c = d.getElementsByTagName("head")[0];
   if (c) {
    var u = n && "string" == typeof n ? n : "screen";
    if (r && (i = null, s = null), !i || s != u) {
     var l = D("style");
     l.setAttribute("type", "text/css"), l.setAttribute("media", u), i = c.appendChild(l), 
     k.ie && k.win && typeof d.styleSheets != a && d.styleSheets.length > 0 && (i = d.styleSheets[d.styleSheets.length - 1]), 
     s = u;
    }
    k.ie && k.win ? i && typeof i.addRule == o && i.addRule(e, t) : i && typeof d.createTextNode != a && i.appendChild(d.createTextNode(e + " {" + t + "}"));
   }
  }
 }
 function F(e, t) {
  if (w) {
   var n = t ? "visible" : "hidden";
   b && M(e) ? M(e).style.visibility = n : V("#" + e, "visibility:" + n);
  }
 }
 function q(e) {
  return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != a ? encodeURIComponent(e) : e;
 }
 k.ie && k.win && window.attachEvent("onunload", function() {
  for (var e = _.length, t = 0; t < e; t++) _[t][0].detachEvent(_[t][1], _[t][2]);
  for (var n = y.length, r = 0; r < n; r++) I(y[r]);
  for (var i in k) k[i] = null;
  for (var s in k = null, swfobject) swfobject[s] = null;
  swfobject = null;
 });
 return {
  registerObject: function(e, t, n, r) {
   if (k.w3 && e && t) {
    var i = {};
    i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, g[g.length] = i, 
    F(e, !1);
   } else r && r({
    success: !1,
    id: e
   });
  },
  getObjectById: function(e) {
   if (k.w3) return O(e);
  },
  embedSWF: function(e, t, n, r, i, s, c, u, l, f) {
   var p = {
    success: !1,
    id: t
   };
   k.w3 && !(k.wk && k.wk < 312) && e && t && n && r && i ? (F(t, !1), C(function() {
    n += "", r += "";
    var d = {};
    if (l && typeof l === o) for (var h in l) d[h] = l[h];
    d.data = e, d.width = n, d.height = r;
    var m = {};
    if (u && typeof u === o) for (var v in u) m[v] = u[v];
    if (c && typeof c === o) for (var g in c) typeof m.flashvars != a ? m.flashvars += "&" + g + "=" + c[g] : m.flashvars = g + "=" + c[g];
    if (j(i)) {
     var y = P(d, m, t);
     d.id == t && F(t, !0), p.success = !0, p.ref = y;
    } else {
     if (s && A()) return d.data = s, void N(d, m, t, f);
     F(t, !0);
    }
    f && f(p);
   })) : f && f(p);
  },
  switchOffAutoHideShow: function() {
   w = !1;
  },
  ua: k,
  getFlashPlayerVersion: function() {
   return {
    major: k.pv[0],
    minor: k.pv[1],
    release: k.pv[2]
   };
  },
  hasFlashPlayerVersion: j,
  createSWF: function(e, t, n) {
   return k.w3 ? P(e, t, n) : void 0;
  },
  showExpressInstall: function(e, t, n, r) {
   k.w3 && A() && N(e, t, n, r);
  },
  removeSWF: function(e) {
   k.w3 && I(e);
  },
  createCSS: function(e, t, n, r) {
   k.w3 && V(e, t, n, r);
  },
  addDomLoadEvent: C,
  addLoadEvent: T,
  getQueryParamValue: function(e) {
   var t = d.location.search || d.location.hash;
   if (t) {
    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return q(t);
    for (var n = t.split("&"), r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return q(n[r].substring(n[r].indexOf("=") + 1));
   }
   return "";
  },
  expressInstallCallback: function() {
   if (x) {
    var i = M(l);
    i && e && (i.parentNode.replaceChild(e, i), t && (F(t, !0), k.ie && k.win && (e.style.display = "block")), 
    n && n(r)), x = !1;
   }
  }
 };
}(), Survey, Survey, Survey;

!function(e) {
 if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
  ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e();
 }
}(function() {
 return function e(t, n, r) {
  function i(a, o) {
   if (!n[a]) {
    if (!t[a]) {
     var c = "function" == typeof require && require;
     if (!o && c) return c(a, !0);
     if (s) return s(a, !0);
     var u = new Error("Cannot find module '" + a + "'");
     throw u.code = "MODULE_NOT_FOUND", u;
    }
    var l = n[a] = {
     exports: {}
    };
    t[a][0].call(l.exports, function(e) {
     var n = t[a][1][e];
     return i(n || e);
    }, l, l.exports, e, t, n, r);
   }
   return n[a].exports;
  }
  for (var s = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
  return i;
 }({
  1: [ function(e, t, n) {
   var r = e("matches-selector");
   t.exports = function(e, t, n) {
    for (var i = n ? e : e.parentNode; i && i !== document; ) {
     if (r(i, t)) return i;
     i = i.parentNode;
    }
   };
  }, {
   "matches-selector": 5
  } ],
  2: [ function(e, t, n) {
   function r(e, t, n, r) {
    return function(n) {
     n.delegateTarget = i(n.target, t, !0), n.delegateTarget && r.call(e, n);
    };
   }
   var i = e("closest");
   t.exports = function(e, t, n, i, s) {
    var a = r.apply(this, arguments);
    return e.addEventListener(n, a, s), {
     destroy: function() {
      e.removeEventListener(n, a, s);
     }
    };
   };
  }, {
   closest: 1
  } ],
  3: [ function(e, t, n) {
   n.node = function(e) {
    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
   }, n.nodeList = function(e) {
    var t = Object.prototype.toString.call(e);
    return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]));
   }, n.string = function(e) {
    return "string" == typeof e || e instanceof String;
   }, n.fn = function(e) {
    return "[object Function]" === Object.prototype.toString.call(e);
   };
  }, {} ],
  4: [ function(e, t, n) {
   var r = e("./is"), i = e("delegate");
   t.exports = function(e, t, n) {
    if (!e && !t && !n) throw new Error("Missing required arguments");
    if (!r.string(t)) throw new TypeError("Second argument must be a String");
    if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
    if (r.node(e)) return function(e, t, n) {
     return e.addEventListener(t, n), {
      destroy: function() {
       e.removeEventListener(t, n);
      }
     };
    }(e, t, n);
    if (r.nodeList(e)) return function(e, t, n) {
     return Array.prototype.forEach.call(e, function(e) {
      e.addEventListener(t, n);
     }), {
      destroy: function() {
       Array.prototype.forEach.call(e, function(e) {
        e.removeEventListener(t, n);
       });
      }
     };
    }(e, t, n);
    if (r.string(e)) return function(e, t, n) {
     return i(document.body, e, t, n);
    }(e, t, n);
    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
   };
  }, {
   "./is": 3,
   delegate: 2
  } ],
  5: [ function(e, t, n) {
   var r = Element.prototype, i = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
   t.exports = function(e, t) {
    if (i) return i.call(e, t);
    for (var n = e.parentNode.querySelectorAll(t), r = 0; r < n.length; ++r) if (n[r] == e) return !0;
    return !1;
   };
  }, {} ],
  6: [ function(e, t, n) {
   t.exports = function(e) {
    var t;
    if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), 
    t = e.value; else {
     e.hasAttribute("contenteditable") && e.focus();
     var n = window.getSelection(), r = document.createRange();
     r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), t = n.toString();
    }
    return t;
   };
  }, {} ],
  7: [ function(e, t, n) {
   function r() {}
   r.prototype = {
    on: function(e, t, n) {
     var r = this.e || (this.e = {});
     return (r[e] || (r[e] = [])).push({
      fn: t,
      ctx: n
     }), this;
    },
    once: function(e, t, n) {
     function r() {
      i.off(e, r), t.apply(n, arguments);
     }
     var i = this;
     return r._ = t, this.on(e, r, n);
    },
    emit: function(e) {
     for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; i > r; r++) n[r].fn.apply(n[r].ctx, t);
     return this;
    },
    off: function(e, t) {
     var n = this.e || (this.e = {}), r = n[e], i = [];
     if (r && t) for (var s = 0, a = r.length; a > s; s++) r[s].fn !== t && r[s].fn._ !== t && i.push(r[s]);
     return i.length ? n[e] = i : delete n[e], this;
    }
   }, t.exports = r;
  }, {} ],
  8: [ function(e, t, n) {
   "use strict";
   n.__esModule = !0;
   var r = function() {
    function e(e, t) {
     for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
      Object.defineProperty(e, r.key, r);
     }
    }
    return function(t, n, r) {
     return n && e(t.prototype, n), r && e(t, r), t;
    };
   }(), i = function(e) {
    return e && e.__esModule ? e : {
     default: e
    };
   }(e("select")), s = function() {
    function e(t) {
     (function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, e), this.resolveOptions(t), this.initSelection();
    }
    return e.prototype.resolveOptions = function() {
     var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
     this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, 
     this.trigger = e.trigger, this.selectedText = "";
    }, e.prototype.initSelection = function() {
     if (this.text && this.target) throw new Error('Multiple attributes declared, use either "target" or "text"');
     if (this.text) this.selectFake(); else {
      if (!this.target) throw new Error('Missing required attributes, use either "target" or "text"');
      this.selectTarget();
     }
    }, e.prototype.selectFake = function() {
     var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
     this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function() {
      return e.removeFake();
     }), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
     this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
     this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px", 
     this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", 
     this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), 
     this.selectedText = i.default(this.fakeElem), this.copyText();
    }, e.prototype.removeFake = function() {
     this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), 
     this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null);
    }, e.prototype.selectTarget = function() {
     this.selectedText = i.default(this.target), this.copyText();
    }, e.prototype.copyText = function() {
     var e = void 0;
     try {
      e = document.execCommand(this.action);
     } catch (t) {
      e = !1;
     }
     this.handleResult(e);
    }, e.prototype.handleResult = function(e) {
     e ? this.emitter.emit("success", {
      action: this.action,
      text: this.selectedText,
      trigger: this.trigger,
      clearSelection: this.clearSelection.bind(this)
     }) : this.emitter.emit("error", {
      action: this.action,
      trigger: this.trigger,
      clearSelection: this.clearSelection.bind(this)
     });
    }, e.prototype.clearSelection = function() {
     this.target && this.target.blur(), window.getSelection().removeAllRanges();
    }, e.prototype.destroy = function() {
     this.removeFake();
    }, r(e, [ {
     key: "action",
     set: function() {
      var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
      if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
     },
     get: function() {
      return this._action;
     }
    }, {
     key: "target",
     set: function(e) {
      if (void 0 !== e) {
       if (!e || "object" != typeof e || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
       this._target = e;
      }
     },
     get: function() {
      return this._target;
     }
    } ]), e;
   }();
   n.default = s, t.exports = n.default;
  }, {
   select: 6
  } ],
  9: [ function(e, t, n) {
   "use strict";
   function r(e) {
    return e && e.__esModule ? e : {
     default: e
    };
   }
   function i(e, t) {
    var n = "data-clipboard-" + e;
    if (t.hasAttribute(n)) return t.getAttribute(n);
   }
   n.__esModule = !0;
   var s = r(e("./clipboard-action")), a = r(e("tiny-emitter")), o = r(e("good-listener")), c = function(e) {
    function t(n, r) {
     (function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, t), e.call(this), this.resolveOptions(r), this.listenClick(n);
    }
    return function(e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
     e.prototype = Object.create(t && t.prototype, {
      constructor: {
       value: e,
       enumerable: !1,
       writable: !0,
       configurable: !0
      }
     }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), t.prototype.resolveOptions = function() {
     var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
     this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, 
     this.text = "function" == typeof e.text ? e.text : this.defaultText;
    }, t.prototype.listenClick = function(e) {
     var t = this;
     this.listener = o.default(e, "click", function(e) {
      return t.onClick(e);
     });
    }, t.prototype.onClick = function(e) {
     var t = e.delegateTarget || e.currentTarget;
     this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
      action: this.action(t),
      target: this.target(t),
      text: this.text(t),
      trigger: t,
      emitter: this
     });
    }, t.prototype.defaultAction = function(e) {
     return i("action", e);
    }, t.prototype.defaultTarget = function(e) {
     var t = i("target", e);
     return t ? document.querySelector(t) : void 0;
    }, t.prototype.defaultText = function(e) {
     return i("text", e);
    }, t.prototype.destroy = function() {
     this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), 
     this.clipboardAction = null);
    }, t;
   }(a.default);
   n.default = c, t.exports = n.default;
  }, {
   "./clipboard-action": 8,
   "good-listener": 4,
   "tiny-emitter": 7
  } ]
 }, {}, [ 9 ])(9);
}), function(e) {
 var t = function() {
  function e(e, t) {
   void 0 === t && (t = null), this.text = t, this.value = e;
  }
  return e.setData = function(t, n) {
   t.length = 0;
   for (var r = 0; r < n.length; r++) {
    var i = n[r], s = new e(null);
    void 0 !== i.value ? (s.text = i.text, s.value = i.value) : s.value = i, t.push(s);
   }
  }, e.getData = function(e) {
   for (var t = new Array(), n = 0; n < e.length; n++) {
    var r = e[n];
    r.hasText ? t.push({
     value: r.value,
     text: r.text
    }) : t.push(r.value);
   }
   return t;
  }, e.prototype.getType = function() {
   return "itemvalue";
  }, Object.defineProperty(e.prototype, "value", {
   get: function() {
    return this.itemValue;
   },
   set: function(t) {
    if (this.itemValue = t, this.itemValue) {
     var n = this.itemValue.toString(), r = n.indexOf(e.Separator);
     r > -1 && (this.itemValue = n.slice(0, r), this.text = n.slice(r + 1));
    }
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(e.prototype, "hasText", {
   get: function() {
    return !!this.itemText;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(e.prototype, "text", {
   get: function() {
    return this.hasText ? this.itemText : this.value ? this.value.toString() : null;
   },
   set: function(e) {
    this.itemText = e;
   },
   enumerable: !0,
   configurable: !0
  }), e.Separator = "|", e;
 }();
 e.ItemValue = t;
 var n = function() {
  function e() {}
  return e.prototype.getType = function() {
   throw new Error("This method is abstract");
  }, e;
 }();
 e.Base = n;
 var r = function() {
  function e() {}
  return e.prototype.getText = function() {
   throw new Error("This method is abstract");
  }, e;
 }();
 e.SurveyError = r;
 var i = function() {
  function e() {}
  return Object.defineProperty(e.prototype, "isEmpty", {
   get: function() {
    return null == this.callbacks || 0 == this.callbacks.length;
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.fire = function(e, t) {
   if (null != this.callbacks) for (var n = 0; n < this.callbacks.length; n++) this.callbacks[n](e, t);
  }, e.prototype.add = function(e) {
   null == this.callbacks && (this.callbacks = new Array()), this.callbacks.push(e);
  }, e.prototype.remove = function(e) {
   if (null != this.callbacks) {
    var t = this.callbacks.indexOf(e, 0);
    void 0 != t && this.callbacks.splice(t, 1);
   }
  }, e;
 }();
 e.Event = i;
}(Survey || (Survey = {})), function(e) {
 var t = function() {
  function e() {}
  return e.prototype.loadSurvey = function(t, n) {
   var r = new XMLHttpRequest();
   r.open("GET", e.serviceUrl + "/getSurvey?surveyId=" + t), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
   r.onload = function() {
    var e = JSON.parse(r.response);
    n(200 == r.status, e, r.response);
   }, r.send();
  }, e.prototype.sendResult = function(t, n, r, i, s) {
   void 0 === i && (i = null), void 0 === s && (s = !1);
   var a = new XMLHttpRequest();
   a.open("POST", e.serviceUrl + "/post/"), a.setRequestHeader("Content-Type", "application/json; charset=utf-8");
   var o = {
    postId: t,
    surveyResult: JSON.stringify(n)
   };
   i && (o.clientId = i), s && (o.isPartialCompleted = !0);
   var c = JSON.stringify(o);
   a.setRequestHeader("Content-Length", c.length.toString());
   a.onload = function() {
    r(200 == a.status, a.response);
   }, a.send(c);
  }, e.prototype.getResult = function(t, n, r) {
   var i = new XMLHttpRequest(), s = "resultId=" + t + "&name=" + n;
   i.open("GET", e.serviceUrl + "/getResult?" + s), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   i.onload = function() {
    var e = null, t = null;
    if (200 == i.status) for (var n in t = [], (e = JSON.parse(i.response)).QuestionResult) {
     var s = {
      name: n,
      value: e.QuestionResult[n]
     };
     t.push(s);
    }
    r(200 == i.status, e, t, i.response);
   }, i.send();
  }, e.prototype.isCompleted = function(t, n, r) {
   var i = new XMLHttpRequest(), s = "resultId=" + t + "&clientId=" + n;
   i.open("GET", e.serviceUrl + "/isCompleted?" + s), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   i.onload = function() {
    var e = null;
    200 == i.status && (e = JSON.parse(i.response)), r(200 == i.status, e, i.response);
   }, i.send();
  }, e.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey", e;
 }();
 e.dxSurveyService = t;
}(Survey || (Survey = {})), function(e) {
 e.surveyLocalization = {
  currentLocale: "",
  locales: {},
  getString: function(t) {
   var n = this.currentLocale ? this.locales[this.currentLocale] : e.surveyStrings;
   return n && n[t] || (n = e.surveyStrings), n[t];
  },
  getLocales: function() {
   var e = [];
   for (var t in e.push(""), this.locales) e.push(t);
   return e;
  }
 }, e.surveyStrings = {
  pagePrevText: "Previous",
  pageNextText: "Next",
  completeText: "Complete",
  otherItemText: "Other (describe)",
  progressText: "Page {0} of {1}",
  optionsCaption: "Choose...",
  requiredError: "Please answer the question.",
  numericError: "The value should be a numeric.",
  textMinLength: "Please enter at least {0} symbols.",
  minSelectError: "Please select at least {0} variants.",
  maxSelectError: "Please select not more than {0} variants.",
  numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
  numericMin: "The '{0}' should be equal or more than {1}",
  numericMax: "The '{0}' should be equal or less than {1}"
 }, e.surveyLocalization.locales.en = e.surveyStrings, String.prototype.format || (String.prototype.format = function() {
  var e = arguments;
  return this.replace(/{(\d+)}/g, function(t, n) {
   return void 0 !== e[n] ? e[n] : t;
  });
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n() {
   t.call(this);
  }
  return __extends(n, t), n.prototype.getText = function() {
   return e.surveyLocalization.getString("requiredError");
  }, n;
 }(e.SurveyError);
 e.AnswerRequiredError = t;
 var n = function(t) {
  function n() {
   t.call(this);
  }
  return __extends(n, t), n.prototype.getText = function() {
   return e.surveyLocalization.getString("numericError");
  }, n;
 }(e.SurveyError);
 e.RequreNumericError = n;
 var r = function(e) {
  function t(t) {
   e.call(this), this.text = t;
  }
  return __extends(t, e), t.prototype.getText = function() {
   return this.text;
  }, t;
 }(e.SurveyError);
 e.CustomError = r;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function() {
  function e(e) {
   this.name = e, this.typeValue = null, this.choicesValue = null, this.choicesfunc = null, 
   this.className = null, this.classNamePart = null, this.baseClassName = null, this.defaultValue = null, 
   this.onGetValue = null;
  }
  return Object.defineProperty(e.prototype, "type", {
   get: function() {
    return this.typeValue ? this.typeValue : "string";
   },
   set: function(e) {
    this.typeValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(e.prototype, "hasToUseGetValue", {
   get: function() {
    return this.onGetValue;
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.isDefaultValue = function(e) {
   return this.defaultValue ? this.defaultValue == e : !e;
  }, e.prototype.getValue = function(e) {
   return this.onGetValue ? this.onGetValue(e) : null;
  }, Object.defineProperty(e.prototype, "hasToUseSetValue", {
   get: function() {
    return this.onSetValue;
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.setValue = function(e, t, n) {
   this.onSetValue && this.onSetValue(e, t, n);
  }, e.prototype.getObjType = function(e) {
   return this.classNamePart ? e.replace(this.classNamePart, "") : e;
  }, e.prototype.getClassName = function(e) {
   return this.classNamePart && e.indexOf(this.classNamePart) < 0 ? e + this.classNamePart : e;
  }, Object.defineProperty(e.prototype, "choices", {
   get: function() {
    return null != this.choicesValue ? this.choicesValue : null != this.choicesfunc ? this.choicesfunc() : null;
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.setChoices = function(e, t) {
   this.choicesValue = e, this.choicesfunc = t;
  }, e;
 }();
 e.JsonObjectProperty = t;
 var n = function() {
  function e(n, r, i, s) {
   void 0 === i && (i = null), void 0 === s && (s = null), this.name = n, this.creator = i, 
   this.parentName = s, this.properties = null, this.requiredProperties = null, this.properties = new Array();
   for (var a = 0; a < r.length; a++) {
    var o = null, c = (u = r[a]).indexOf(e.typeSymbol);
    c > -1 && (o = u.substring(c + 1), u = u.substring(0, c));
    var u = this.getPropertyName(u), l = new t(u);
    o && (l.type = o), this.properties.push(l);
   }
  }
  return e.prototype.find = function(e) {
   for (var t = 0; t < this.properties.length; t++) if (this.properties[t].name == e) return this.properties[t];
   return null;
  }, e.prototype.getPropertyName = function(t) {
   return 0 == t.length || t[0] != e.requiredSymbol ? t : (t = t.slice(1), this.requiredProperties || (this.requiredProperties = new Array()), 
   this.requiredProperties.push(t), t);
  }, e.requiredSymbol = "!", e.typeSymbol = ":", e;
 }();
 e.JsonMetadataClass = n;
 var r = function() {
  function e() {
   this.classes = {}, this.childrenClasses = {}, this.classProperties = {}, this.classRequiredProperties = {};
  }
  return e.prototype.addClass = function(e, t, r, i) {
   void 0 === r && (r = null), void 0 === i && (i = null);
   var s = new n(e, t, r, i);
   (this.classes[e] = s, i) && (this.childrenClasses[i] || (this.childrenClasses[i] = []), 
   this.childrenClasses[i].push(s));
   return s;
  }, e.prototype.overrideClassCreatore = function(e, t) {
   var n = this.findClass(e);
   n && (n.creator = t);
  }, e.prototype.setPropertyValues = function(e, t, n, r, i, s) {
   void 0 === r && (r = null), void 0 === i && (i = null), void 0 === s && (s = null);
   var a = this.findProperty(e, t);
   a && (a.className = n, a.defaultValue = r, a.onGetValue = i, a.onSetValue = s);
  }, e.prototype.setPropertyChoices = function(e, t, n, r) {
   void 0 === r && (r = null);
   var i = this.findProperty(e, t);
   i && i.setChoices(n, r);
  }, e.prototype.setPropertyClassInfo = function(e, t, n, r) {
   void 0 === r && (r = null);
   var i = this.findProperty(e, t);
   i && (i.baseClassName = n, i.classNamePart = r);
  }, e.prototype.getProperties = function(e) {
   var t = this.classProperties[e];
   return t || (t = new Array(), this.fillProperties(e, t), this.classProperties[e] = t), 
   t;
  }, e.prototype.createClass = function(e) {
   var t = this.findClass(e);
   return t ? t.creator() : null;
  }, e.prototype.getChildrenClasses = function(e, t) {
   void 0 === t && (t = !1);
   var n = [];
   return this.fillChildrenClasses(e, t, n), n;
  }, e.prototype.getRequiredProperties = function(e) {
   var t = this.classRequiredProperties[e];
   return t || (t = new Array(), this.fillRequiredProperties(e, t), this.classRequiredProperties[e] = t), 
   t;
  }, e.prototype.fillChildrenClasses = function(e, t, n) {
   var r = this.childrenClasses[e];
   if (r) for (var i = 0; i < r.length; i++) t && !r[i].creator || n.push(r[i]), this.fillChildrenClasses(r[i].name, t, n);
  }, e.prototype.findClass = function(e) {
   return this.classes[e];
  }, e.prototype.findProperty = function(e, t) {
   var n = this.findClass(e);
   return n ? n.find(t) : null;
  }, e.prototype.fillProperties = function(e, t) {
   var n = this.findClass(e);
   if (n) {
    n.parentName && this.fillProperties(n.parentName, t);
    for (var r = 0; r < n.properties.length; r++) this.addProperty(n.properties[r], t, t.length);
   }
  }, e.prototype.addProperty = function(e, t, n) {
   for (var r = -1, i = 0; i < n; i++) if (t[i].name == e.name) {
    r = i;
    break;
   }
   r < 0 ? t.push(e) : t[r] = e;
  }, e.prototype.fillRequiredProperties = function(e, t) {
   var n = this.findClass(e);
   n && (n.requiredProperties && Array.prototype.push.apply(t, n.requiredProperties), 
   n.parentName && this.fillRequiredProperties(n.parentName, t));
  }, e;
 }();
 e.JsonMetadata = r;
 var i = function() {
  function e(e, t) {
   this.type = e, this.message = t, this.description = "", this.at = -1;
  }
  return e.prototype.getFullDescription = function() {
   return this.message + (this.description ? "\n" + this.description : "");
  }, e;
 }();
 e.JsonError = i;
 var s = function(e) {
  function t(t, n) {
   e.call(this, "unknownproperty", "The property '" + t + "' in class '" + n + "' is unknown."), 
   this.propertyName = t, this.className = n;
   var r = l.metaData.getProperties(n);
   if (r) {
    this.description = "The list of available properties are: ";
    for (var i = 0; i < r.length; i++) i > 0 && (this.description += ", "), this.description += r[i].name;
    this.description += ".";
   }
  }
  return __extends(t, e), t;
 }(i);
 e.JsonUnknownPropertyError = s;
 var a = function(e) {
  function t(t, n, r) {
   e.call(this, n, r), this.baseClassName = t, this.type = n, this.message = r, this.description = "The following types are available: ";
   for (var i = l.metaData.getChildrenClasses(t, !0), s = 0; s < i.length; s++) s > 0 && (this.description += ", "), 
   this.description += "'" + i[s].name + "'";
   this.description += ".";
  }
  return __extends(t, e), t;
 }(i);
 e.JsonMissingTypeErrorBase = a;
 var o = function(e) {
  function t(t, n) {
   e.call(this, n, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + t + "'."), 
   this.propertyName = t, this.baseClassName = n;
  }
  return __extends(t, e), t;
 }(a);
 e.JsonMissingTypeError = o;
 var c = function(e) {
  function t(t, n) {
   e.call(this, n, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + t + "'."), 
   this.propertyName = t, this.baseClassName = n;
  }
  return __extends(t, e), t;
 }(a);
 e.JsonIncorrectTypeError = c;
 var u = function(e) {
  function t(t, n) {
   e.call(this, "requiredproperty", "The property '" + t + "' is required in class '" + n + "'."), 
   this.propertyName = t, this.className = n;
  }
  return __extends(t, e), t;
 }(i);
 e.JsonRequiredPropertyError = u;
 var l = function() {
  function e() {
   this.errors = new Array();
  }
  return Object.defineProperty(e, "metaData", {
   get: function() {
    return e.metaDataValue;
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.toJsonObject = function(e) {
   return this.toJsonObjectCore(e, null);
  }, e.prototype.toObject = function(t, n) {
   if (t) {
    var r = null;
    if (n.getType && (r = e.metaData.getProperties(n.getType())), r) for (var i in t) if (i != e.typePropertyName) if (i != e.positionPropertyName) {
     var a = this.findProperty(r, i);
     a ? this.valueToObj(t[i], n, i, a) : this.addNewError(new s(i.toString(), n.getType()), t);
    } else n[i] = t[i];
   }
  }, e.prototype.toJsonObjectCore = function(t, n) {
   if (!t.getType) return t;
   var r = {};
   null == n || n.className || (r[e.typePropertyName] = n.getObjType(t.getType()));
   for (var i = e.metaData.getProperties(t.getType()), s = 0; s < i.length; s++) this.valueToJson(t, r, i[s]);
   return r;
  }, e.prototype.valueToJson = function(e, t, n) {
   var r = null;
   if (r = n.hasToUseGetValue ? n.getValue(e) : e[n.name], !n.isDefaultValue(r)) {
    if (this.isValueArray(r)) {
     for (var i = [], s = 0; s < r.length; s++) i.push(this.toJsonObjectCore(r[s], n));
     r = i.length > 0 ? i : null;
    } else r = this.toJsonObjectCore(r, n);
    n.isDefaultValue(r) || (t[n.name] = r);
   }
  }, e.prototype.valueToObj = function(e, t, n, r) {
   if (null != r && r.hasToUseSetValue) r.setValue(t, e, this); else if (this.isValueArray(e)) this.valueToArray(e, t, n, r); else {
    var i = this.createNewObj(e, r);
    i.newObj && (this.toObject(e, i.newObj), e = i.newObj), i.error || (t[n] = e);
   }
  }, e.prototype.isValueArray = function(e) {
   return e.constructor.toString().indexOf("Array") > -1;
  }, e.prototype.createNewObj = function(t, n) {
   var r = {
    newObj: null,
    error: null
   }, i = t[e.typePropertyName];
   return !i && null != n && n.className && (i = n.className), i = n.getClassName(i), 
   r.newObj = i ? e.metaData.createClass(i) : null, r.error = this.checkNewObjectOnErrors(r.newObj, t, n, i), 
   r;
  }, e.prototype.checkNewObjectOnErrors = function(t, n, r, i) {
   var s = null;
   if (t) {
    var a = e.metaData.getRequiredProperties(i);
    if (a) for (var l = 0; l < a.length; l++) if (!n[a[l]]) {
     s = new u(a[l], i);
     break;
    }
   } else r.baseClassName && (s = i ? new c(r.name, r.baseClassName) : new o(r.name, r.baseClassName));
   return s && this.addNewError(s, n), s;
  }, e.prototype.addNewError = function(t, n) {
   n && n[e.positionPropertyName] && (t.at = n[e.positionPropertyName].start), this.errors.push(t);
  }, e.prototype.valueToArray = function(e, t, n, r) {
   this.isValueArray(t[n]) || (t[n] = []);
   for (var i = 0; i < e.length; i++) {
    var s = this.createNewObj(e[i], r);
    s.newObj ? (t[n].push(s.newObj), this.toObject(e[i], s.newObj)) : s.error || t[n].push(e[i]);
   }
  }, e.prototype.findProperty = function(e, t) {
   if (!e) return null;
   for (var n = 0; n < e.length; n++) if (e[n].name == t) return e[n];
   return null;
  }, e.typePropertyName = "type", e.positionPropertyName = "pos", e.metaDataValue = new r(), 
  e;
 }();
 e.JsonObject = l;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this), this.name = t, this.visibleValue = !0, this.visibleIndexValue = -1, 
   this.width = "100%", this.onCreating();
  }
  return __extends(t, e), Object.defineProperty(t.prototype, "visible", {
   get: function() {
    return this.visibleValue;
   },
   set: function(e) {
    e != this.visible && (this.visibleValue = e, this.fireCallback(this.visibilityChangedCallback), 
    this.data && this.data.questionVisibilityChanged(this, this.visible));
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(t.prototype, "visibleIndex", {
   get: function() {
    return this.visibleIndexValue;
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.hasErrors = function() {
   return !1;
  }, Object.defineProperty(t.prototype, "hasTitle", {
   get: function() {
    return !1;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(t.prototype, "hasComment", {
   get: function() {
    return !1;
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.setData = function(e) {
   this.data = e, this.onSetData();
  }, t.prototype.fireCallback = function(e) {
   e && e();
  }, t.prototype.onSetData = function() {}, t.prototype.onCreating = function() {}, 
  t.prototype.onSurveyValueChanged = function(e) {}, t.prototype.setVisibleIndex = function(e) {
   this.visibleIndexValue != e && (this.visibleIndexValue = e, this.fireCallback(this.visibleIndexChangedCallback));
  }, t;
 }(e.Base);
 e.QuestionBase = t, e.JsonObject.metaData.addClass("questionbase", [ "!name", "visible:boolean", "width" ]), 
 e.JsonObject.metaData.setPropertyValues("questionbase", "visible", null, !0), e.JsonObject.metaData.setPropertyValues("questionbase", "width", null, "100%");
}(Survey || (Survey = {})), function(e) {
 var t = function() {
  function e() {
   this.creatorHash = {};
  }
  return e.prototype.registerQuestion = function(e, t) {
   this.creatorHash[e] = t;
  }, e.prototype.getAllTypes = function() {
   var e = new Array();
   for (var t in this.creatorHash) e.push(t);
   return e.sort();
  }, e.prototype.createQuestion = function(e, t) {
   var n = this.creatorHash[e];
   return null == n ? null : n(t);
  }, e.Instance = new e(), e.DefaultChoices = [ "one", "two|second value", {
   value: 3,
   text: "third value"
  } ], e;
 }();
 e.QuestionFactory = t;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(e) {
   void 0 === e && (e = ""), t.call(this), this.name = e, this.questions = new Array(), 
   this.data = null, this.title = "", this.visibleIndex = -1, this.numValue = -1, this.visibleValue = !0;
   var n = this;
   this.questions.push = function(e) {
    return null != n.data && e.setData(n.data), Array.prototype.push.call(this, e);
   };
  }
  return __extends(n, t), Object.defineProperty(n.prototype, "num", {
   get: function() {
    return this.numValue;
   },
   set: function(e) {
    this.numValue != e && (this.numValue = e, this.onNumChanged(e));
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "visible", {
   get: function() {
    return this.visibleValue;
   },
   set: function(e) {
    e !== this.visible && (this.visibleValue = e, null != this.data && this.data.pageVisibilityChanged(this, this.visible));
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.getType = function() {
   return "page";
  }, Object.defineProperty(n.prototype, "isVisible", {
   get: function() {
    if (!this.visible) return !1;
    for (var e = 0; e < this.questions.length; e++) if (this.questions[e].visible) return !0;
    return !1;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.addQuestion = function(e, t) {
   void 0 === t && (t = -1), null != e && (t < 0 || t >= this.questions.length ? this.questions.push(e) : this.questions.splice(t, 0, e), 
   null != this.data && (e.setData(this.data), this.data.questionAdded(e, t)));
  }, n.prototype.addNewQuestion = function(t, n) {
   var r = e.QuestionFactory.Instance.createQuestion(t, n);
   return this.addQuestion(r), r;
  }, n.prototype.removeQuestion = function(e) {
   var t = this.questions.indexOf(e);
   t < 0 || (this.questions.splice(t, 1), null != this.data && this.data.questionRemoved(e));
  }, n.prototype.hasErrors = function() {
   for (var e = !1, t = 0; t < this.questions.length; t++) this.questions[t].visible && this.questions[t].hasErrors() && (e = !0);
   return e;
  }, n.prototype.addQuestionsToList = function(e, t) {
   if (void 0 === t && (t = !1), !t || this.visible) for (var n = 0; n < this.questions.length; n++) t && !this.questions[n].visible || e.push(this.questions[n]);
  }, n.prototype.onNumChanged = function(e) {}, n;
 }(e.Base);
 e.PageModel = t, e.JsonObject.metaData.addClass("page", [ "name", "questions", "visible:boolean", "title" ], function() {
  return new t();
 }), e.JsonObject.metaData.setPropertyValues("page", "visible", null, !0), e.JsonObject.metaData.setPropertyClassInfo("page", "questions", "question");
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function() {
  return function(e, t) {
   void 0 === t && (t = null), this.value = e, this.error = t;
  };
 }();
 e.ValidatorResult = t;
 var n = function(e) {
  function t() {
   e.call(this), this.text = null;
  }
  return __extends(t, e), t.prototype.getErrorText = function(e) {
   return this.text ? this.text : this.getDefaultErrorText(e);
  }, t.prototype.getDefaultErrorText = function(e) {
   return "";
  }, t.prototype.validate = function(e, t) {
   return void 0 === t && (t = null), null;
  }, t;
 }(e.Base);
 e.SurveyValidator = n;
 var r = function() {
  function e() {}
  return e.prototype.run = function(e) {
   for (var t = 0; t < e.validators.length; t++) {
    var n = e.validators[t].validate(e.value, e.getValidatorTitle());
    if (null != n) {
     if (n.error) return n.error;
     n.value && (e.value = n.value);
    }
   }
   return null;
  }, e;
 }();
 e.ValidatorRunner = r;
 var i = function(n) {
  function r(e, t) {
   void 0 === e && (e = null), void 0 === t && (t = null), n.call(this), this.minValue = e, 
   this.maxValue = t;
  }
  return __extends(r, n), r.prototype.getType = function() {
   return "numericvalidator";
  }, r.prototype.validate = function(n, r) {
   if (void 0 === r && (r = null), !n || !this.isNumber(n)) return new t(null, new e.RequreNumericError());
   var i = new t(parseFloat(n));
   return this.minValue && this.minValue > i.value ? (i.error = new e.CustomError(this.getErrorText(r)), 
   i) : this.maxValue && this.maxValue < i.value ? (i.error = new e.CustomError(this.getErrorText(r)), 
   i) : "number" == typeof n ? null : i;
  }, r.prototype.getDefaultErrorText = function(t) {
   var n = t || "value";
   return this.minValue && this.maxValue ? e.surveyLocalization.getString("numericMinMax").format(n, this.minValue, this.maxValue) : this.minValue ? e.surveyLocalization.getString("numericMin").format(n, this.minValue) : e.surveyLocalization.getString("numericMax").format(n, this.maxValue);
  }, r.prototype.isNumber = function(e) {
   return !isNaN(parseFloat(e)) && isFinite(e);
  }, r;
 }(n);
 e.NumericValidator = i;
 var s = function(n) {
  function r(e) {
   void 0 === e && (e = 0), n.call(this), this.minLength = e;
  }
  return __extends(r, n), r.prototype.getType = function() {
   return "textvalidator";
  }, r.prototype.validate = function(n, r) {
   if (void 0 === r && (r = null), !(this.minLength <= 0)) return n.length < this.minLength ? new t(null, new e.CustomError(this.getErrorText(r))) : null;
  }, r.prototype.getDefaultErrorText = function(t) {
   return e.surveyLocalization.getString("textMinLength").format(this.minLength);
  }, r;
 }(n);
 e.TextValidator = s;
 var a = function(n) {
  function r(e, t) {
   void 0 === e && (e = null), void 0 === t && (t = null), n.call(this), this.minCount = e, 
   this.maxCount = t;
  }
  return __extends(r, n), r.prototype.getType = function() {
   return "answercountvalidator";
  }, r.prototype.validate = function(n, r) {
   if (void 0 === r && (r = null), null == n || n.constructor != Array) return null;
   var i = n.length;
   return this.minCount && i < this.minCount ? new t(null, new e.CustomError(this.getErrorText(e.surveyLocalization.getString("minSelectError").format(this.minCount)))) : this.maxCount && i > this.maxCount ? new t(null, new e.CustomError(this.getErrorText(e.surveyLocalization.getString("maxSelectError").format(this.maxCount)))) : null;
  }, r.prototype.getDefaultErrorText = function(e) {
   return e;
  }, r;
 }(n);
 e.AnswerCountValidator = a, e.JsonObject.metaData.addClass("surveyvalidator", [ "text" ]), 
 e.JsonObject.metaData.addClass("numericvalidator", [ "minValue:number", "maxValue:number" ], function() {
  return new i();
 }, "surveyvalidator"), e.JsonObject.metaData.addClass("textvalidator", [ "minLength:number" ], function() {
  return new s();
 }, "surveyvalidator"), e.JsonObject.metaData.addClass("answercountvalidator", [ "minCount:number", "maxCount:number" ], function() {
  return new a();
 }, "surveyvalidator");
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(e) {
   t.call(this, e), this.name = e, this.titleValue = null, this.isRequiredValue = !1, 
   this.hasCommentValue = !1, this.hasOtherValue = !1, this.errors = [], this.validators = new Array(), 
   this.isValueChangedInSurvey = !1;
  }
  return __extends(n, t), Object.defineProperty(n.prototype, "hasTitle", {
   get: function() {
    return !0;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "title", {
   get: function() {
    return this.titleValue ? this.titleValue : this.name;
   },
   set: function(e) {
    this.titleValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.supportComment = function() {
   return !1;
  }, n.prototype.supportOther = function() {
   return !1;
  }, Object.defineProperty(n.prototype, "isRequired", {
   get: function() {
    return this.isRequiredValue;
   },
   set: function(e) {
    this.isRequiredValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "hasComment", {
   get: function() {
    return this.hasCommentValue;
   },
   set: function(e) {
    this.supportComment() && (this.hasCommentValue = e, this.hasComment && (this.hasOther = !1));
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "hasOther", {
   get: function() {
    return this.hasOtherValue;
   },
   set: function(e) {
    this.supportOther() && (this.hasOtherValue = e, this.hasOther && (this.hasComment = !1));
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.onSetData = function() {
   t.prototype.onSetData.call(this), this.onSurveyValueChanged(this.value);
  }, Object.defineProperty(n.prototype, "value", {
   get: function() {
    return null != this.data ? this.data.getValue(this.name) : this.questionValue;
   },
   set: function(e) {
    this.setNewValue(e), this.fireCallback(this.valueChangedCallback);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "comment", {
   get: function() {
    return null != this.data ? this.data.getComment(this.name) : "";
   },
   set: function(e) {
    this.setNewComment(e), this.fireCallback(this.commentChangedCallback);
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.isEmpty = function() {
   return null == this.value;
  }, n.prototype.hasErrors = function() {
   return this.checkForErrors(), this.errors.length > 0;
  }, n.prototype.checkForErrors = function() {
   var e, t = this.errors ? this.errors.length : 0;
   (this.errors = [], this.onCheckForErrors(this.errors), 0 == this.errors.length) && ((e = this.runValidators()) && this.errors.push(e));
   this.data && 0 == this.errors.length && ((e = this.data.validateQuestion(this.name)) && this.errors.push(e));
   (t != this.errors.length || t > 0) && this.fireCallback(this.errorsChangedCallback);
  }, n.prototype.onCheckForErrors = function(t) {
   this.isRequired && this.isEmpty() && this.errors.push(new e.AnswerRequiredError());
  }, n.prototype.runValidators = function() {
   return new e.ValidatorRunner().run(this);
  }, n.prototype.setNewValue = function(e) {
   this.isValueChangedInSurvey || null == this.data || this.data.setValue(this.name, e), 
   this.questionValue = e, this.onValueChanged();
  }, n.prototype.onValueChanged = function() {}, n.prototype.setNewComment = function(e) {
   null != this.data && this.data.setComment(this.name, e);
  }, n.prototype.onSurveyValueChanged = function(e) {
   this.isValueChangedInSurvey = !0, this.value = e, this.isValueChangedInSurvey = !1;
  }, n.prototype.getValidatorTitle = function() {
   return null;
  }, n;
 }(e.QuestionBase);
 e.Question = t, e.JsonObject.metaData.addClass("question", [ "title", "isRequired:boolean", "validators:validators" ], null, "questionbase"), 
 e.JsonObject.metaData.setPropertyValues("question", "title", null, null, function(e) {
  return e.titleValue;
 }), e.JsonObject.metaData.setPropertyClassInfo("question", "validators", "surveyvalidator", "validator");
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n) {
   t.call(this, n), this.otherItem = new e.ItemValue("other", e.surveyLocalization.getString("otherItemText")), 
   this.choicesValues = new Array(), this.otherErrorText = null, this.choicesOrderValue = "none";
  }
  return __extends(n, t), Object.defineProperty(n.prototype, "isOtherSelected", {
   get: function() {
    return this.value == this.otherItem.value;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "choices", {
   get: function() {
    return this.choicesValues;
   },
   set: function(t) {
    e.ItemValue.setData(this.choicesValues, t);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "choicesOrder", {
   get: function() {
    return this.choicesOrderValue;
   },
   set: function(e) {
    e != this.choicesOrderValue && (this.choicesOrderValue = e);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "otherText", {
   get: function() {
    return this.otherItem.text;
   },
   set: function(e) {
    this.otherItem.text = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "visibleChoices", {
   get: function() {
    if (!this.hasOther && "none" == this.choicesOrder) return this.choices;
    var e = this.sortVisibleChoices(this.choices.slice());
    return this.hasOther && e.push(this.otherItem), e;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.supportComment = function() {
   return !0;
  }, n.prototype.supportOther = function() {
   return !0;
  }, n.prototype.onCheckForErrors = function(n) {
   if (t.prototype.onCheckForErrors.call(this, n), this.isOtherSelected && !this.comment) {
    var r = this.otherErrorText;
    r || (r = "Please enter the others value."), n.push(new e.CustomError(r));
   }
  }, n.prototype.sortVisibleChoices = function(e) {
   var t = this.choicesOrder.toLowerCase();
   return "asc" == t ? this.sortArray(e, 1) : "desc" == t ? this.sortArray(e, -1) : "random" == t ? this.randomizeArray(e) : e;
  }, n.prototype.sortArray = function(e, t) {
   return e.sort(function(e, n) {
    return e.text < n.text ? -1 * t : e.text > n.text ? 1 * t : 0;
   });
  }, n.prototype.randomizeArray = function(e) {
   for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)), r = e[t];
    e[t] = e[n], e[n] = r;
   }
   return e;
  }, n;
 }(e.Question);
 e.QuestionSelectBase = t;
 var n = function(e) {
  function t(t) {
   e.call(this, t), this.name = t, this.colCountValue = 1;
  }
  return __extends(t, e), Object.defineProperty(t.prototype, "colCount", {
   get: function() {
    return this.colCountValue;
   },
   set: function(e) {
    e < 0 || e > 4 || (this.colCountValue = e, this.fireCallback(this.colCountChangedCallback));
   },
   enumerable: !0,
   configurable: !0
  }), t;
 }(t);
 e.QuestionCheckboxBase = n, e.JsonObject.metaData.addClass("selectbase", [ "hasComment:boolean", "hasOther:boolean", "!choices:itemvalues", "choicesOrder", "otherText", "otherErrorText" ], null, "question"), 
 e.JsonObject.metaData.setPropertyValues("selectbase", "choices", null, null, function(t) {
  return e.ItemValue.getData(t.choices);
 }, function(t, n) {
  e.ItemValue.setData(t.choices, n);
 }), e.JsonObject.metaData.setPropertyValues("selectbase", "choicesOrder", null, "none"), 
 e.JsonObject.metaData.setPropertyChoices("selectbase", "choicesOrder", [ "none", "asc", "desc", "random" ]), 
 e.JsonObject.metaData.setPropertyValues("selectbase", "otherText", null, e.surveyLocalization.getString("otherItemText")), 
 e.JsonObject.metaData.addClass("checkboxbase", [ "colCount:number" ], null, "selectbase"), 
 e.JsonObject.metaData.setPropertyValues("checkboxbase", "colCount", null, 1), e.JsonObject.metaData.setPropertyChoices("checkboxbase", "colCount", [ 0, 1, 2, 3, 4 ]);
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.name = t;
  }
  return __extends(t, e), Object.defineProperty(t.prototype, "isOtherSelected", {
   get: function() {
    return !!this.value && this.value.indexOf(this.otherItem.value) >= 0;
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.getType = function() {
   return "checkbox";
  }, t;
 }(e.QuestionCheckboxBase);
 e.QuestionCheckboxModel = t, e.JsonObject.metaData.addClass("checkbox", [], function() {
  return new t("");
 }, "checkboxbase"), e.QuestionFactory.Instance.registerQuestion("checkbox", function(n) {
  var r = new t(n);
  return r.choices = e.QuestionFactory.DefaultChoices, r;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.name = t, this.rows = 4, this.cols = 50;
  }
  return __extends(t, e), t.prototype.getType = function() {
   return "comment";
  }, t.prototype.isEmpty = function() {
   return e.prototype.isEmpty.call(this) || "" == this.value;
  }, t;
 }(e.Question);
 e.QuestionCommentModel = t, e.JsonObject.metaData.addClass("comment", [ "cols:number", "rows:number" ], function() {
  return new t("");
 }, "question"), e.JsonObject.metaData.setPropertyValues("comment", "cols", null, 50), 
 e.JsonObject.metaData.setPropertyValues("comment", "rows", null, 4), e.QuestionFactory.Instance.registerQuestion("comment", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(e) {
   t.call(this, e), this.name = e;
  }
  return __extends(n, t), Object.defineProperty(n.prototype, "optionsCaption", {
   get: function() {
    return this.optionsCaptionValue ? this.optionsCaptionValue : e.surveyLocalization.getString("optionsCaption");
   },
   set: function(e) {
    this.optionsCaptionValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.getType = function() {
   return "dropdown";
  }, n;
 }(e.QuestionSelectBase);
 e.QuestionDropdownModel = t, e.JsonObject.metaData.addClass("dropdown", [ "optionsCaption" ], function() {
  return new t("");
 }, "selectbase"), e.JsonObject.metaData.setPropertyValues("dropdown", "optionsCaption", null, null, function(e) {
  return e.optionsCaptionValue;
 }), e.QuestionFactory.Instance.registerQuestion("dropdown", function(n) {
  var r = new t(n);
  return r.choices = e.QuestionFactory.DefaultChoices, r;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.name = t;
  }
  return __extends(t, e), t.prototype.getType = function() {
   return "html";
  }, Object.defineProperty(t.prototype, "html", {
   get: function() {
    return this.htmlValue;
   },
   set: function(e) {
    this.htmlValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), t;
 }(e.QuestionBase);
 e.QuestionHtmlModel = t, e.JsonObject.metaData.addClass("html", [ "html" ], function() {
  return new t("");
 }, "questionbase"), e.QuestionFactory.Instance.registerQuestion("html", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t, n, r, i, s) {
   e.call(this), this.name = t, this.text = n, this.fullName = r, this.data = i, this.rowValue = s;
  }
  return __extends(t, e), Object.defineProperty(t.prototype, "value", {
   get: function() {
    return this.rowValue;
   },
   set: function(e) {
    this.rowValue = e, this.data && this.data.onMatrixRowChanged(this), this.onValueChanged();
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.onValueChanged = function() {}, t;
 }(e.Base);
 e.MatrixRowModel = t;
 var n = function(n) {
  function r(e) {
   n.call(this, e), this.name = e, this.columnsValue = [], this.rowsValue = [], this.isRowChanging = !1;
  }
  return __extends(r, n), r.prototype.getType = function() {
   return "matrix";
  }, Object.defineProperty(r.prototype, "hasRows", {
   get: function() {
    return this.rowsValue.length > 0;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(r.prototype, "columns", {
   get: function() {
    return this.columnsValue;
   },
   set: function(t) {
    e.ItemValue.setData(this.columnsValue, t);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(r.prototype, "rows", {
   get: function() {
    return this.rowsValue;
   },
   set: function(t) {
    e.ItemValue.setData(this.rowsValue, t);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(r.prototype, "visibleRows", {
   get: function() {
    var e = new Array(), t = this.value;
    t || (t = {});
    for (var n = 0; n < this.rows.length; n++) this.rows[n].value && e.push(this.createMatrixRow(this.rows[n].value, this.rows[n].text, this.name + "_" + this.rows[n].value.toString(), t[this.rows[n].value]));
    return 0 == e.length && e.push(this.createMatrixRow(null, "", this.name, t)), this.generatedVisibleRows = e, 
    e;
   },
   enumerable: !0,
   configurable: !0
  }), r.prototype.createMatrixRow = function(e, n, r, i) {
   return new t(e, n, r, this, i);
  }, r.prototype.onValueChanged = function() {
   if (!this.isRowChanging && this.generatedVisibleRows && 0 != this.generatedVisibleRows.length) {
    this.isRowChanging = !0;
    var e = this.value;
    if (e || (e = {}), 0 == this.rows.length) this.generatedVisibleRows[0].value = e; else for (var t = 0; t < this.generatedVisibleRows.length; t++) {
     var n = this.generatedVisibleRows[t], r = e[n.name] ? e[n.name] : null;
     this.generatedVisibleRows[t].value = r;
    }
    this.isRowChanging = !1;
   }
  }, r.prototype.onMatrixRowChanged = function(e) {
   if (!this.isRowChanging) {
    if (this.isRowChanging = !0, this.hasRows) {
     var t = this.value;
     t || (t = {}), t[e.name] = e.value, this.setNewValue(t);
    } else this.setNewValue(e.value);
    this.isRowChanging = !1;
   }
  }, r;
 }(e.Question);
 e.QuestionMatrixModel = n, e.JsonObject.metaData.addClass("matrix", [ "columns:itemvalues", "rows:itemvalues" ], function() {
  return new n("");
 }, "question"), e.JsonObject.metaData.setPropertyValues("matrix", "columns", null, null, function(t) {
  return e.ItemValue.getData(t.columns);
 }, function(e, t) {
  e.columns = t;
 }), e.JsonObject.metaData.setPropertyValues("matrix", "rows", null, null, function(t) {
  return e.ItemValue.getData(t.rows);
 }, function(e, t) {
  e.rows = t;
 }), e.QuestionFactory.Instance.registerQuestion("matrix", function(e) {
  var t = new n(e);
  return t.rows = [ "Row 1", "Row 2" ], t.columns = [ "Column 1", "Column 2", "Column 3" ], 
  t;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(e, n) {
   void 0 === n && (n = null), t.call(this), this.name = e, this.choicesValue = [];
  }
  return __extends(n, t), n.prototype.getType = function() {
   return "matrixdropdowncolumn";
  }, Object.defineProperty(n.prototype, "title", {
   get: function() {
    return this.titleValue ? this.titleValue : this.name;
   },
   set: function(e) {
    this.titleValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "choices", {
   get: function() {
    return this.choicesValue;
   },
   set: function(t) {
    e.ItemValue.setData(this.choicesValue, t);
   },
   enumerable: !0,
   configurable: !0
  }), n;
 }(e.Base);
 e.MatrixDropdownColumn = t;
 var n = function() {
  function e(e, t, n, r) {
   this.column = e, this.row = t, this.data = n, this.cellValue = r;
  }
  return Object.defineProperty(e.prototype, "choices", {
   get: function() {
    return this.column.choices && this.column.choices.length > 0 ? this.column.choices : this.data.choices;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(e.prototype, "optionsCaption", {
   get: function() {
    return this.column.optionsCaption ? this.column.optionsCaption : this.data.optionsCaption;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(e.prototype, "value", {
   get: function() {
    return this.cellValue;
   },
   set: function(e) {
    this.cellValue = e, this.data.onCellChanged(this), this.onValueChanged();
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.onValueChanged = function() {}, e;
 }();
 e.MatrixDropdownCellModel = n;
 var r = function() {
  function e(e, t, n, r) {
   this.name = e, this.text = t, this.cells = [], this.data = n, this.rowValue = r, 
   this.buildCells();
  }
  return Object.defineProperty(e.prototype, "value", {
   get: function() {
    return this.rowValue;
   },
   set: function(e) {
    this.rowValue = e;
    for (var t = 0; t < this.cells.length; t++) this.cells[t].value = this.getCellValue(this.cells[t].column);
   },
   enumerable: !0,
   configurable: !0
  }), e.prototype.buildCells = function() {
   for (var e = this.data.columns, t = 0; t < e.length; t++) {
    var n = e[t];
    this.cells.push(this.createCell(n, this.getCellValue(n)));
   }
  }, e.prototype.createCell = function(e, t) {
   return new n(e, this, this.data, t);
  }, e.prototype.getCellValue = function(e) {
   return this.rowValue ? this.rowValue[e.name] : null;
  }, e;
 }();
 e.MatrixDropdownRowModel = r;
 var i = function(n) {
  function i(e) {
   n.call(this, e), this.name = e, this.columnsValue = [], this.rowsValue = [], this.choicesValue = [], 
   this.isRowChanging = !1;
  }
  return __extends(i, n), i.prototype.getType = function() {
   return "matrixdropdown";
  }, Object.defineProperty(i.prototype, "columns", {
   get: function() {
    return this.columnsValue;
   },
   set: function(e) {
    this.columnsValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(i.prototype, "rows", {
   get: function() {
    return this.rowsValue;
   },
   set: function(t) {
    e.ItemValue.setData(this.rowsValue, t);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(i.prototype, "choices", {
   get: function() {
    return this.choicesValue;
   },
   set: function(t) {
    e.ItemValue.setData(this.choicesValue, t);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(i.prototype, "optionsCaption", {
   get: function() {
    return this.optionsCaptionValue ? this.optionsCaptionValue : e.surveyLocalization.getString("optionsCaption");
   },
   set: function(e) {
    this.optionsCaptionValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), i.prototype.addColumn = function(e, n) {
   void 0 === n && (n = null);
   var r = new t(e, n);
   return this.columnsValue.push(r), r;
  }, Object.defineProperty(i.prototype, "visibleRows", {
   get: function() {
    var e = new Array();
    if (!this.rows || 0 === this.rows.length) return e;
    var t = this.value;
    t || (t = {});
    for (var n = 0; n < this.rows.length; n++) this.rows[n].value && e.push(this.createMatrixRow(this.rows[n].value, this.rows[n].text, t[this.rows[n].value]));
    return this.generatedVisibleRows = e, e;
   },
   enumerable: !0,
   configurable: !0
  }), i.prototype.createMatrixRow = function(e, t, n) {
   return new r(e, t, this, n);
  }, i.prototype.onValueChanged = function() {
   if (!this.isRowChanging && this.generatedVisibleRows && 0 != this.generatedVisibleRows.length) {
    this.isRowChanging = !0;
    var e = this.value;
    e || (e = {});
    for (var t = 0; t < this.generatedVisibleRows.length; t++) {
     var n = this.generatedVisibleRows[t], r = e[n.name] ? e[n.name] : null;
     this.generatedVisibleRows[t].value = r;
    }
    this.isRowChanging = !1;
   }
  }, i.prototype.onCellChanged = function(e) {
   var t = this.value;
   t || (t = {});
   var n = t[e.row.name];
   n || (n = {}, t[e.row.name] = n), e.value ? n[e.column.name] = e.value : (delete n[e.column.name], 
   0 == Object.keys(n).length && (delete t[e.row.name], 0 == Object.keys(t).length && (t = null))), 
   this.isRowChanging = !0, this.setNewValue(t), this.isRowChanging = !1;
  }, i;
 }(e.Question);
 e.QuestionMatrixDropdownModel = i, e.JsonObject.metaData.addClass("matrixdropdowncolumn", [ "name", "title", "choices:itemvalues", "optionsCaption" ], function() {
  return new t("");
 }), e.JsonObject.metaData.setPropertyValues("matrixdropdowncolumn", "title", null, null, function(e) {
  return e.titleValue;
 }), e.JsonObject.metaData.setPropertyValues("matrixdropdowncolumn", "choices", null, null, function(t) {
  return e.ItemValue.getData(t.choices);
 }, function(e, t) {
  e.choices = t;
 }), e.JsonObject.metaData.addClass("matrixdropdown", [ "columns:matrixdropdowncolumns", "rows:itemvalues", "choices:itemvalues", "optionsCaption" ], function() {
  return new i("");
 }, "question"), e.JsonObject.metaData.setPropertyValues("matrixdropdown", "columns", "matrixdropdowncolumn"), 
 e.JsonObject.metaData.setPropertyValues("matrixdropdown", "choices", null, null, function(t) {
  return e.ItemValue.getData(t.choices);
 }, function(e, t) {
  e.choices = t;
 }), e.JsonObject.metaData.setPropertyValues("matrixdropdown", "rows", null, null, function(t) {
  return e.ItemValue.getData(t.rows);
 }, function(e, t) {
  e.rows = t;
 }), e.JsonObject.metaData.setPropertyValues("matrixdropdown", "optionsCaption", null, null, function(e) {
  return e.optionsCaptionValue;
 }), e.QuestionFactory.Instance.registerQuestion("matrixdropdown", function(e) {
  var t = new i(e);
  return t.choices = [ 1, 2, 3, 4, 5 ], t.rows = [ "Row 1", "Row 2" ], t.addColumn("Column 1"), 
  t.addColumn("Column 2"), t.addColumn("Column 3"), t;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t, n) {
   void 0 === t && (t = null), void 0 === n && (n = null), e.call(this), this.name = t, 
   this.validators = new Array(), this.title = n;
  }
  return __extends(t, e), t.prototype.getType = function() {
   return "multipletextitem";
  }, t.prototype.setData = function(e) {
   this.data = e;
  }, Object.defineProperty(t.prototype, "title", {
   get: function() {
    return this.titleValue ? this.titleValue : this.name;
   },
   set: function(e) {
    this.titleValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(t.prototype, "value", {
   get: function() {
    return this.data ? this.data.getMultipleTextValue(this.name) : null;
   },
   set: function(e) {
    null != this.data && this.data.setMultipleTextValue(this.name, e);
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.onValueChanged = function(e) {}, t.prototype.getValidatorTitle = function() {
   return this.title;
  }, t;
 }(e.Base);
 e.MultipleTextItemModel = t;
 var n = function(n) {
  function r(e) {
   n.call(this, e), this.name = e, this.itemSize = 25, this.items = new Array(), this.isMultipleItemValueChanging = !1;
   var t = this;
   this.items.push = function(e) {
    return e.setData(t), Array.prototype.push.call(this, e);
   };
  }
  return __extends(r, n), r.prototype.getType = function() {
   return "multipletext";
  }, r.prototype.AddItem = function(e, t) {
   void 0 === t && (t = null);
   var n = this.createTextItem(e, t);
   return this.items.push(n), n;
  }, r.prototype.onValueChanged = function() {
   n.prototype.onValueChanged.call(this), this.onItemValueChanged();
  }, r.prototype.createTextItem = function(e, n) {
   return new t(e, n);
  }, r.prototype.onItemValueChanged = function() {
   if (!this.isMultipleItemValueChanging) for (var e = 0; e < this.items.length; e++) {
    var t = null;
    this.value && this.items[e].name in this.value && (t = this.value[this.items[e].name]), 
    this.items[e].onValueChanged(t);
   }
  }, r.prototype.runValidators = function() {
   var t = n.prototype.runValidators.call(this);
   if (null != t) return t;
   for (var r = 0; r < this.items.length; r++) if (null != (t = new e.ValidatorRunner().run(this.items[r]))) return t;
   return null;
  }, r.prototype.getMultipleTextValue = function(e) {
   return this.value ? this.value[e] : null;
  }, r.prototype.setMultipleTextValue = function(e, t) {
   this.isMultipleItemValueChanging = !0;
   var n = this.value;
   n || (n = {}), n[e] = t, this.setNewValue(n), this.isMultipleItemValueChanging = !1;
  }, r;
 }(e.Question);
 e.QuestionMultipleTextModel = n, e.JsonObject.metaData.addClass("multipletextitem", [ "name", "title", "validators:validators" ], function() {
  return new t("");
 }), e.JsonObject.metaData.setPropertyClassInfo("multipletextitem", "validators", "surveyvalidator", "validator"), 
 e.JsonObject.metaData.setPropertyValues("multipletextitem", "title", null, null, function(e) {
  return e.titleValue;
 }), e.JsonObject.metaData.addClass("multipletext", [ "!items:textitems", "itemSize:number" ], function() {
  return new n("");
 }, "question"), e.JsonObject.metaData.setPropertyValues("multipletext", "items", "multipletextitem"), 
 e.JsonObject.metaData.setPropertyValues("multipletext", "itemSize", null, 25), e.QuestionFactory.Instance.registerQuestion("multipletext", function(e) {
  var t = new n(e);
  return t.AddItem("text1"), t.AddItem("text2"), t;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.name = t;
  }
  return __extends(t, e), t.prototype.getType = function() {
   return "radiogroup";
  }, t;
 }(e.QuestionCheckboxBase);
 e.QuestionRadiogroupModel = t, e.JsonObject.metaData.addClass("radiogroup", [], function() {
  return new t("");
 }, "checkboxbase"), e.QuestionFactory.Instance.registerQuestion("radiogroup", function(n) {
  var r = new t(n);
  return r.choices = e.QuestionFactory.DefaultChoices, r;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(e) {
   t.call(this, e), this.name = e, this.rates = [], this.mininumRateDescription = null, 
   this.maximumRateDescription = null;
  }
  return __extends(n, t), Object.defineProperty(n.prototype, "rateValues", {
   get: function() {
    return this.rates;
   },
   set: function(t) {
    e.ItemValue.setData(this.rates, t), this.fireCallback(this.rateValuesChangedCallback);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "visibleRateValues", {
   get: function() {
    return this.rateValues.length > 0 ? this.rateValues : n.defaultRateValues;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.getType = function() {
   return "rating";
  }, n.prototype.supportComment = function() {
   return !0;
  }, n.prototype.supportOther = function() {
   return !0;
  }, n.defaultRateValues = [], n;
 }(e.Question);
 e.QuestionRatingModel = t, e.ItemValue.setData(t.defaultRateValues, [ 1, 2, 3, 4, 5 ]), 
 e.JsonObject.metaData.addClass("rating", [ "hasComment:boolean", "rateValues:itemvalues", "mininumRateDescription", "maximumRateDescription" ], function() {
  return new t("");
 }, "question"), e.JsonObject.metaData.setPropertyValues("rating", "rateValues", null, null, function(t) {
  return e.ItemValue.getData(t.rateValues);
 }, function(e, t) {
  e.rateValues = t;
 }), e.QuestionFactory.Instance.registerQuestion("rating", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.name = t, this.size = 25;
  }
  return __extends(t, e), t.prototype.getType = function() {
   return "text";
  }, t.prototype.isEmpty = function() {
   return e.prototype.isEmpty.call(this) || "" == this.value;
  }, t;
 }(e.Question);
 e.QuestionTextModel = t, e.JsonObject.metaData.addClass("text", [ "size:number" ], function() {
  return new t("");
 }, "question"), e.JsonObject.metaData.setPropertyValues("text", "size", null, 25), 
 e.QuestionFactory.Instance.registerQuestion("text", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t() {
   e.call(this), this.opValue = "equal";
  }
  return __extends(t, e), Object.defineProperty(t, "operators", {
   get: function() {
    return null != t.operatorsValue ? t.operatorsValue : (t.operatorsValue = {
     empty: function(e, t) {
      return !e;
     },
     notempty: function(e, t) {
      return !!e;
     },
     equal: function(e, t) {
      return e == t;
     },
     notequal: function(e, t) {
      return e != t;
     },
     contains: function(e, t) {
      return e && e.indexOf && e.indexOf(t) > -1;
     },
     notcontains: function(e, t) {
      return !e || !e.indexOf || -1 == e.indexOf(t);
     },
     greater: function(e, t) {
      return e > t;
     },
     less: function(e, t) {
      return e < t;
     },
     greaterorequal: function(e, t) {
      return e >= t;
     },
     lessorequal: function(e, t) {
      return e <= t;
     }
    }, t.operatorsValue);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(t.prototype, "operator", {
   get: function() {
    return this.opValue;
   },
   set: function(e) {
    e && (e = e.toLowerCase(), t.operators[e] && (this.opValue = e));
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.check = function(e) {
   t.operators[this.operator](e, this.value) ? this.onSuccess() : this.onFailure();
  }, t.prototype.onSuccess = function() {}, t.prototype.onFailure = function() {}, 
  t.operatorsValue = null, t;
 }(e.Base);
 e.Trigger = t;
 var n = function(e) {
  function t() {
   e.call(this), this.pages = [], this.questions = [], this.owner = null;
  }
  return __extends(t, e), t.prototype.setOwner = function(e) {
   this.owner = e;
  }, t.prototype.onSuccess = function() {
   this.onTrigger(this.onItemSuccess);
  }, t.prototype.onFailure = function() {
   this.onTrigger(this.onItemFailure);
  }, t.prototype.onTrigger = function(e) {
   if (this.owner) for (var t = this.owner.getObjects(this.pages, this.questions), n = 0; n < t.length; n++) e(t[n]);
  }, t.prototype.onItemSuccess = function(e) {}, t.prototype.onItemFailure = function(e) {}, 
  t;
 }(t);
 e.SurveyTrigger = n;
 var r = function(e) {
  function t() {
   e.call(this);
  }
  return __extends(t, e), t.prototype.getType = function() {
   return "visibletrigger";
  }, t.prototype.onItemSuccess = function(e) {
   e.visible = !0;
  }, t.prototype.onItemFailure = function(e) {
   e.visible = !1;
  }, t;
 }(n);
 e.SurveyTriggerVisible = r, e.JsonObject.metaData.addClass("trigger", [ "operator", "!value" ]), 
 e.JsonObject.metaData.addClass("surveytrigger", [ "!name", "pages", "questions" ], null, "trigger"), 
 e.JsonObject.metaData.addClass("visibletrigger", [], function() {
  return new r();
 }, "surveytrigger");
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n, r) {
   void 0 === n && (n = null), void 0 === r && (r = null), t.call(this), this.surveyId = null, 
   this.surveyPostId = null, this.clientId = null, this.sendResultOnPageNext = !1, 
   this.commentPrefix = "-Comment", this.title = "", this.showNavigationButtons = !0, 
   this.showTitle = !0, this.showPageTitles = !0, this.requiredText = "* ", this.showProgressBar = "off", 
   this.pages = new Array(), this.triggers = new Array(), this.currentPageValue = null, 
   this.valuesHash = {}, this.showPageNumbersValue = !1, this.showQuestionNumbersValue = "on", 
   this.localeValue = "", this.onComplete = new e.Event(), this.onCurrentPageChanged = new e.Event(), 
   this.onValueChanged = new e.Event(), this.onVisibleChanged = new e.Event(), this.onPageVisibleChanged = new e.Event(), 
   this.onQuestionAdded = new e.Event(), this.onQuestionRemoved = new e.Event(), this.onValidateQuestion = new e.Event(), 
   this.onSendResult = new e.Event(), this.onGetResult = new e.Event(), this.jsonErrors = null, 
   this.mode = "normal";
   var i = this;
   this.pages.push = function(e) {
    return e.data = i, Array.prototype.push.call(this, e);
   }, this.triggers.push = function(e) {
    return e.setOwner(i), Array.prototype.push.call(this, e);
   }, this.onBeforeCreating(), n && (this.setJsonObject(n), this.surveyId && this.loadSurveyFromService(this.surveyId, r)), 
   this.onCreating();
  }
  return __extends(n, t), n.prototype.getType = function() {
   return "survey";
  }, Object.defineProperty(n.prototype, "locale", {
   get: function() {
    return this.localeValue;
   },
   set: function(t) {
    this.localeValue = t, e.surveyLocalization.currentLocale = t;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "pagePrevText", {
   get: function() {
    return this.pagePrevTextValue ? this.pagePrevTextValue : e.surveyLocalization.getString("pagePrevText");
   },
   set: function(e) {
    this.pagePrevTextValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "pageNextText", {
   get: function() {
    return this.pageNextTextValue ? this.pageNextTextValue : e.surveyLocalization.getString("pageNextText");
   },
   set: function(e) {
    this.pageNextTextValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "completeText", {
   get: function() {
    return this.completeTextValue ? this.completeTextValue : e.surveyLocalization.getString("completeText");
   },
   set: function(e) {
    this.completeTextValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "showPageNumbers", {
   get: function() {
    return this.showPageNumbersValue;
   },
   set: function(e) {
    e !== this.showPageNumbers && (this.showPageNumbersValue = e, this.updateVisibleIndexes());
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "showQuestionNumbers", {
   get: function() {
    return this.showQuestionNumbersValue;
   },
   set: function(e) {
    e !== this.showQuestionNumbers && (this.showQuestionNumbersValue = e, this.updateVisibleIndexes());
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "data", {
   get: function() {
    var e = {};
    for (var t in this.valuesHash) e[t] = this.valuesHash[t];
    return e;
   },
   set: function(e) {
    if (this.valuesHash = {}, e) for (var t in e) this.valuesHash[t] = e[t], this.checkTriggers(t, e[t]);
    this.notifyAllQuestionsOnValueChanged();
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "comments", {
   get: function() {
    var e = {};
    for (var t in this.valuesHash) t.indexOf(this.commentPrefix) > 0 && (e[t] = this.valuesHash[t]);
    return e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "visiblePages", {
   get: function() {
    if (this.isDesignMode) return this.pages;
    for (var e = new Array(), t = 0; t < this.pages.length; t++) this.pages[t].isVisible && e.push(this.pages[t]);
    return e;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "isEmpty", {
   get: function() {
    return 0 == this.pages.length;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "PageCount", {
   get: function() {
    return this.pages.length;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "visiblePageCount", {
   get: function() {
    return this.visiblePages.length;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "currentPage", {
   get: function() {
    var e = this.visiblePages;
    return null != this.currentPageValue && e.indexOf(this.currentPageValue) < 0 && (this.currentPage = null), 
    null == this.currentPageValue && e.length > 0 && (this.currentPage = e[0]), this.currentPageValue;
   },
   set: function(e) {
    var t = this.visiblePages;
    if (!(null != e && t.indexOf(e) < 0) && e != this.currentPageValue) {
     var n = this.currentPageValue;
     this.currentPageValue = e, this.currentPageChanged(e, n);
    }
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.currentPageChanged = function(e, t) {
   this.onCurrentPageChanged.fire(this, {
    oldCurrentPage: t,
    newCurrentPage: e
   });
  }, Object.defineProperty(n.prototype, "isDesignMode", {
   get: function() {
    return "designer" == this.mode;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.nextPage = function() {
   if (this.isLastPage) return !1;
   if (this.isCurrentPageHasErrors) return !1;
   this.sendResultOnPageNext && this.clientId && this.sendResult(this.surveyPostId, this.clientId, !0);
   var e = this.visiblePages, t = e.indexOf(this.currentPage);
   return this.currentPage = e[t + 1], !0;
  }, Object.defineProperty(n.prototype, "isCurrentPageHasErrors", {
   get: function() {
    return null == this.currentPage || this.currentPage.hasErrors();
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.prevPage = function() {
   if (this.isFirstPage) return !1;
   var e = this.visiblePages, t = e.indexOf(this.currentPage);
   this.currentPage = e[t - 1];
  }, n.prototype.completeLastPage = function() {
   return !this.isCurrentPageHasErrors && (this.onComplete.fire(this, null), this.surveyPostId && this.sendResult(), 
   !0);
  }, Object.defineProperty(n.prototype, "isFirstPage", {
   get: function() {
    return null == this.currentPage || 0 == this.visiblePages.indexOf(this.currentPage);
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "isLastPage", {
   get: function() {
    if (null == this.currentPage) return !0;
    var e = this.visiblePages;
    return e.indexOf(this.currentPage) == e.length - 1;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "progressText", {
   get: function() {
    if (null == this.currentPage) return "";
    var t = this.visiblePages, n = t.indexOf(this.currentPage) + 1;
    return e.surveyLocalization.getString("progressText").format(n, t.length);
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.getPage = function(e) {
   return this.pages[e];
  }, n.prototype.addPage = function(e) {
   null != e && (this.pages.push(e), this.updateVisibleIndexes());
  }, n.prototype.addNewPage = function(e) {
   var t = this.createNewPage(e);
   return this.addPage(t), t;
  }, n.prototype.removePage = function(e) {
   var t = this.pages.indexOf(e);
   t < 0 || (this.pages.splice(t, 1), this.currentPageValue == e && (this.currentPage = this.pages.length > 0 ? this.pages[0] : null), 
   this.updateVisibleIndexes());
  }, n.prototype.getQuestionByName = function(e) {
   for (var t = this.getAllQuestions(), n = 0; n < t.length; n++) if (t[n].name == e) return t[n];
   return null;
  }, n.prototype.getQuestionsByNames = function(e) {
   var t = [];
   if (!e) return t;
   for (var n = 0; n < e.length; n++) if (e[n]) {
    var r = this.getQuestionByName(e[n]);
    r && t.push(r);
   }
   return t;
  }, n.prototype.getPageByQuestion = function(e) {
   for (var t = 0; t < this.pages.length; t++) {
    var n = this.pages[t];
    if (n.questions.indexOf(e) > -1) return n;
   }
   return null;
  }, n.prototype.getPageByName = function(e) {
   for (var t = 0; t < this.pages.length; t++) if (this.pages[t].name == e) return this.pages[t];
   return null;
  }, n.prototype.getPagesByNames = function(e) {
   var t = [];
   if (!e) return t;
   for (var n = 0; n < e.length; n++) if (e[n]) {
    var r = this.getPageByName(e[n]);
    r && t.push(r);
   }
   return t;
  }, n.prototype.getAllQuestions = function(e) {
   void 0 === e && (e = !1);
   for (var t = new Array(), n = 0; n < this.pages.length; n++) this.pages[n].addQuestionsToList(t, e);
   return t;
  }, n.prototype.createNewPage = function(t) {
   return new e.PageModel(t);
  }, n.prototype.notifyQuestionOnValueChanged = function(e, t) {
   for (var n = this.getAllQuestions(), r = 0; r < n.length; r++) n[r].name == e && n[r].onSurveyValueChanged(t);
   this.onValueChanged.fire(this, {
    name: e,
    value: t
   });
  }, n.prototype.notifyAllQuestionsOnValueChanged = function() {
   for (var e = this.getAllQuestions(), t = 0; t < e.length; t++) e[t].onSurveyValueChanged(this.getValue(e[t].name));
  }, n.prototype.checkTriggers = function(e, t) {
   for (var n = 0; n < this.triggers.length; n++) this.triggers[n].name == e && this.triggers[n].check(t);
  }, n.prototype.sendResult = function(t, n, r) {
   if (void 0 === t && (t = null), void 0 === n && (n = null), void 0 === r && (r = !1), 
   !t && this.surveyPostId && (t = this.surveyPostId), t) {
    n && (this.clientId = n);
    var i = this;
    new e.dxSurveyService().sendResult(t, this.data, function(e, t) {
     i.onSendResult.fire(i, {
      success: e,
      response: t
     });
    }, this.clientId, r);
   }
  }, n.prototype.getResult = function(t, n) {
   var r = this;
   new e.dxSurveyService().getResult(t, n, function(e, t, n, i) {
    r.onGetResult.fire(r, {
     success: e,
     data: t,
     dataList: n,
     response: i
    });
   });
  }, n.prototype.loadSurveyFromService = function(t, n) {
   void 0 === t && (t = null), void 0 === n && (n = null), t && (this.surveyId = t);
   var r = this;
   new e.dxSurveyService().loadSurvey(this.surveyId, function(e, t, i) {
    e && t && (r.setJsonObject(t), r.onLoadSurveyFromService(n));
   });
  }, n.prototype.onLoadSurveyFromService = function(e) {}, n.prototype.updateVisibleIndexes = function() {
   if (this.updatePageVisibleIndexes(this.showPageNumbers), "onPage" == this.showQuestionNumbers) for (var e = this.visiblePages, t = 0; t < e.length; t++) this.updateQuestionVisibleIndexes(e[t].questions, !0); else this.updateQuestionVisibleIndexes(this.getAllQuestions(!1), "on" == this.showQuestionNumbers);
  }, n.prototype.updatePageVisibleIndexes = function(e) {
   for (var t = 0, n = 0; n < this.pages.length; n++) this.pages[n].visibleIndex = this.pages[n].visible ? t++ : -1, 
   this.pages[n].num = e && this.pages[n].visible ? this.pages[n].visibleIndex + 1 : -1;
  }, n.prototype.updateQuestionVisibleIndexes = function(e, t) {
   for (var n = 0, r = 0; r < e.length; r++) e[r].setVisibleIndex(t && e[r].visible && e[r].hasTitle ? n++ : -1);
  }, n.prototype.setJsonObject = function(t) {
   if (t) {
    this.jsonErrors = null;
    var n = new e.JsonObject();
    n.toObject(t, this), n.errors.length > 0 && (this.jsonErrors = n.errors), this.updateVisibleIndexes();
   }
  }, n.prototype.onBeforeCreating = function() {}, n.prototype.onCreating = function() {}, 
  n.prototype.getValue = function(e) {
   return e && 0 != e.length ? this.valuesHash[e] : null;
  }, n.prototype.setValue = function(e, t) {
   "" == t || null == t ? delete this.valuesHash[e] : this.valuesHash[e] = t, this.notifyQuestionOnValueChanged(e, t), 
   this.checkTriggers(e, t);
  }, n.prototype.getComment = function(e) {
   var t = this.data[e + this.commentPrefix];
   return null == t && (t = ""), t;
  }, n.prototype.setComment = function(e, t) {
   e += this.commentPrefix, "" == t || null == t ? delete this.valuesHash[e] : this.valuesHash[e] = t;
  }, n.prototype.questionVisibilityChanged = function(e, t) {
   this.updateVisibleIndexes(), this.onVisibleChanged.fire(this, {
    question: e,
    name: e.name,
    visible: t
   });
  }, n.prototype.pageVisibilityChanged = function(e, t) {
   this.updateVisibleIndexes(), this.onPageVisibleChanged.fire(this, {
    page: e,
    visible: t
   });
  }, n.prototype.questionAdded = function(e, t) {
   this.updateVisibleIndexes(), this.onQuestionAdded.fire(this, {
    question: e,
    name: e.name,
    index: t
   });
  }, n.prototype.questionRemoved = function(e) {
   this.updateVisibleIndexes(), this.onQuestionRemoved.fire(this, {
    question: e,
    name: e.name
   });
  }, n.prototype.validateQuestion = function(t) {
   if (this.onValidateQuestion.isEmpty) return null;
   var n = {
    name: t,
    value: this.getValue(t),
    error: null
   };
   return this.onValidateQuestion.fire(this, n), n.error ? new e.CustomError(n.error) : null;
  }, n.prototype.getObjects = function(e, t) {
   var n = [];
   return Array.prototype.push.apply(n, this.getPagesByNames(e)), Array.prototype.push.apply(n, this.getQuestionsByNames(t)), 
   n;
  }, n;
 }(e.Base);
 e.SurveyModel = t, e.JsonObject.metaData.addClass("survey", [ "locale", "title", "pages", "questions", "triggers:triggers", "surveyId", "surveyPostId", "sendResultOnPageNext:boolean", "showNavigationButtons:boolean", "showTitle:boolean", "showPageTitles:boolean", "showPageNumbers:boolean", "showQuestionNumbers", "showProgressBar", "requiredText", "pagePrevText", "pageNextText", "completeText" ]), 
 e.JsonObject.metaData.setPropertyValues("survey", "pages", "page"), e.JsonObject.metaData.setPropertyValues("survey", "questions", null, null, function(e) {
  return null;
 }, function(e, t, n) {
  var r = e.addNewPage("");
  n.toObject({
   questions: t
  }, r);
 }), e.JsonObject.metaData.setPropertyValues("survey", "showNavigationButtons", null, !0), 
 e.JsonObject.metaData.setPropertyValues("survey", "showTitle", null, !0), e.JsonObject.metaData.setPropertyValues("survey", "showPageTitles", null, !0), 
 e.JsonObject.metaData.setPropertyValues("survey", "showQuestionNumbers", null, "on"), 
 e.JsonObject.metaData.setPropertyChoices("survey", "showQuestionNumbers", [ "on", "onPage", "off" ]), 
 e.JsonObject.metaData.setPropertyValues("survey", "showProgressBar", null, "off"), 
 e.JsonObject.metaData.setPropertyChoices("survey", "showProgressBar", [ "off", "top", "bottom" ]), 
 e.JsonObject.metaData.setPropertyValues("survey", "requiredText", null, "* "), e.JsonObject.metaData.setPropertyValues("survey", "pagePrevText", null, null, function(e) {
  return e.pagePrevTextValue;
 }), e.JsonObject.metaData.setPropertyValues("survey", "pageNextText", null, null, function(e) {
  return e.pageNextTextValue;
 }), e.JsonObject.metaData.setPropertyValues("survey", "completeText", null, null, function(e) {
  return e.completeTextValue;
 }), e.JsonObject.metaData.setPropertyClassInfo("survey", "triggers", "surveytrigger", "trigger"), 
 e.JsonObject.metaData.setPropertyClassInfo("survey", "questions", "question"), e.JsonObject.metaData.setPropertyChoices("survey", "locale", null, function() {
  return e.surveyLocalization.getLocales();
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey, Survey;

!function(e) {
 var t = function(t) {
  function n(e) {
   t.call(this), this.surveyValue = this.createSurvey(e), this.surveyValue.showTitle = !1, 
   this.windowElement = document.createElement("div");
  }
  return __extends(n, t), n.prototype.getType = function() {
   return "window";
  }, Object.defineProperty(n.prototype, "survey", {
   get: function() {
    return this.surveyValue;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "isShowing", {
   get: function() {
    return this.isShowingValue;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "isExpanded", {
   get: function() {
    return this.isExpandedValue;
   },
   enumerable: !0,
   configurable: !0
  }), Object.defineProperty(n.prototype, "title", {
   get: function() {
    return this.titleValue ? this.titleValue : this.survey.title;
   },
   set: function(e) {
    this.titleValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.expand = function() {
   this.expandcollapse(!0);
  }, n.prototype.collapse = function() {
   this.expandcollapse(!1);
  }, n.prototype.createSurvey = function(t) {
   return new e.SurveyModel(t);
  }, n.prototype.expandcollapse = function(e) {
   this.isExpandedValue = e;
  }, n.surveyElementName = "windowSurveyJS", n;
 }(e.Base);
 e.SurveyWindowModel = t;
}(Survey || (Survey = {})), function(e) {
 e.surveyLocalization.locales.de = {
  pagePrevText: "Zurück",
  pageNextText: "Weiter",
  completeText: "Fertig",
  progressText: "Seite {0} von {1}",
  otherItemText: "Andere (beschreiben)",
  optionsCaption: "Wählen...",
  requiredError: "Bitte antworten Sie auf die Frage.",
  numericError: "Der Wert sollte eine Zahl sein.",
  textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
  minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
  maxSelectError: "Bitte wählen Sie nicth mehr als {0} Varianten.",
  numericMinMax: "'{0}' solte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
  numericMin: "'{0}' solte gleich oder größer sein als {1}",
  numericMax: "'{0}' solte gleich oder kleiner als {1}"
 };
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   void 0 === t && (t = ""), e.call(this, t), this.koNo = ko.observable(""), this.onCreating();
  }
  return __extends(t, e), t.prototype.onCreating = function() {}, t.prototype.onNumChanged = function(e) {
   this.koNo(e > 0 ? e + ". " : "");
  }, t;
 }(e.PageModel);
 e.Page = t, e.JsonObject.metaData.overrideClassCreatore("page", function() {
  return new t();
 });
}(Survey || (Survey = {})), function(e) {
 var t = function() {
  function e(e) {
   this.question = e;
   var t = this;
   e.visibilityChangedCallback = function() {
    t.onVisibilityChanged();
   }, e.visibleIndexChangedCallback = function() {
    t.onVisibleIndexChanged();
   }, this.koVisible = ko.observable(this.question.visible), this.koErrors = ko.observableArray(), 
   this.koNo = ko.observable(this.getNo()), this.question.koVisible = this.koVisible, 
   this.question.koNo = this.koNo, this.question.koErrors = this.koErrors;
  }
  return e.prototype.onVisibilityChanged = function() {
   this.koVisible(this.question.visible);
  }, e.prototype.onVisibleIndexChanged = function() {
   this.koNo(this.getNo());
  }, e.prototype.getNo = function() {
   return this.question.visibleIndex > -1 ? this.question.visibleIndex + 1 + ". " : "";
  }, e;
 }();
 e.QuestionImplementorBase = t;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.question = t, this.isUpdating = !1;
   var n = this;
   t.valueChangedCallback = function() {
    n.onValueChanged();
   }, t.commentChangedCallback = function() {
    n.onCommentChanged();
   }, t.errorsChangedCallback = function() {
    n.onErrorsChanged();
   }, this.koValue = this.createkoValue(), this.koComment = ko.observable(this.question.comment), 
   this.koErrors(this.question.errors), this.koValue.subscribe(function(e) {
    n.updateValue(e);
   }), this.koComment.subscribe(function(e) {
    n.updateComment(e);
   }), this.question.koValue = this.koValue, this.question.koComment = this.koComment;
  }
  return __extends(t, e), t.prototype.onValueChanged = function() {
   this.isUpdating || this.setkoValue(this.question.value);
  }, t.prototype.onCommentChanged = function() {
   this.isUpdating || this.koComment(this.question.comment);
  }, t.prototype.onVisibilityChanged = function() {
   this.koVisible(this.question.visible);
  }, t.prototype.onVisibleIndexChanged = function() {
   this.koNo(this.getNo());
  }, t.prototype.onErrorsChanged = function() {
   this.koErrors(this.question.errors);
  }, t.prototype.createkoValue = function() {
   return ko.observable(this.question.value);
  }, t.prototype.setkoValue = function(e) {
   this.koValue(e);
  }, t.prototype.updateValue = function(e) {
   this.isUpdating = !0, this.question.value = e, this.isUpdating = !1;
  }, t.prototype.updateComment = function(e) {
   this.isUpdating = !0, this.question.comment = e, this.isUpdating = !1;
  }, t.prototype.getNo = function() {
   return this.question.visibleIndex > -1 ? this.question.visibleIndex + 1 + ". " : "";
  }, t;
 }(e.QuestionImplementorBase);
 e.QuestionImplementor = t;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t);
   var n = this;
   this.koOtherVisible = ko.computed(function() {
    return n.koValue(), n.isOtherSelected;
   }), this.question.koOtherVisible = this.koOtherVisible;
  }
  return __extends(t, e), Object.defineProperty(t.prototype, "isOtherSelected", {
   get: function() {
    return this.question.isOtherSelected;
   },
   enumerable: !0,
   configurable: !0
  }), t;
 }(e.QuestionImplementor);
 e.QuestionSelectBaseImplementor = t;
 var n = function(e) {
  function t(t) {
   e.call(this, t), this.koWidth = ko.observable(this.colWidth), this.question.koWidth = this.koWidth, 
   this.question.koAfterRender = this.koAfterRender;
   var n = this;
   this.question.colCountChangedCallback = function() {
    n.onColCountChanged();
   };
  }
  return __extends(t, e), t.prototype.onColCountChanged = function() {
   this.question.koWidth = ko.observable(this.colWidth);
  }, Object.defineProperty(t.prototype, "colWidth", {
   get: function() {
    var e = this.question.colCount;
    return e > 0 ? 100 / e + "%" : "";
   },
   enumerable: !0,
   configurable: !0
  }), t.prototype.koAfterRender = function(e, t) {
   var n = e[0];
   "#text" == n.nodeName && (n.data = ""), "#text" == (n = e[e.length - 1]).nodeName && (n.data = "");
  }, t;
 }(t);
 e.QuestionCheckboxBaseImplementor = n;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t);
  }
  return __extends(t, e), t.prototype.createkoValue = function() {
   return this.question.value ? ko.observableArray(this.question.value) : ko.observableArray();
  }, t.prototype.setkoValue = function(e) {
   e ? this.koValue([].concat(e)) : this.koValue([]);
  }, t;
 }(e.QuestionCheckboxBaseImplementor), n = function(e) {
  function n(n) {
   e.call(this, n), this.name = n, new t(this);
  }
  return __extends(n, e), n;
 }(e.QuestionCheckboxModel);
 e.QuestionCheckbox = n, e.JsonObject.metaData.overrideClassCreatore("checkbox", function() {
  return new n("");
 }), e.QuestionFactory.Instance.registerQuestion("checkbox", function(t) {
  var r = new n(t);
  return r.choices = e.QuestionFactory.DefaultChoices, r;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n) {
   t.call(this, n), this.name = n, new e.QuestionImplementor(this);
  }
  return __extends(n, t), n;
 }(e.QuestionCommentModel);
 e.QuestionComment = t, e.JsonObject.metaData.overrideClassCreatore("comment", function() {
  return new t("");
 }), e.QuestionFactory.Instance.registerQuestion("comment", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n) {
   t.call(this, n), this.name = n, new e.QuestionSelectBaseImplementor(this);
  }
  return __extends(n, t), n;
 }(e.QuestionDropdownModel);
 e.QuestionDropdown = t, e.JsonObject.metaData.overrideClassCreatore("dropdown", function() {
  return new t("");
 }), e.QuestionFactory.Instance.registerQuestion("dropdown", function(n) {
  var r = new t(n);
  return r.choices = e.QuestionFactory.DefaultChoices, r;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n) {
   t.call(this, n), this.name = n, new e.QuestionImplementorBase(this);
  }
  return __extends(n, t), n;
 }(e.QuestionHtmlModel);
 e.QuestionHtml = t, e.JsonObject.metaData.overrideClassCreatore("html", function() {
  return new t("");
 }), e.QuestionFactory.Instance.registerQuestion("html", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t, n, r, i, s) {
   e.call(this, t, n, r, i, s), this.name = t, this.text = n, this.fullName = r, this.isValueUpdating = !1, 
   this.koValue = ko.observable(this.value);
   var a = this;
   this.koValue.subscribe(function(e) {
    a.isValueUpdating, a.value = e;
   });
  }
  return __extends(t, e), t.prototype.onValueChanged = function() {
   this.isValueUpdating = !0, this.koValue(this.value), this.isValueUpdating = !1;
  }, t;
 }(e.MatrixRowModel);
 e.MatrixRow = t;
 var n = function(n) {
  function r(t) {
   n.call(this, t), this.name = t, new e.QuestionImplementor(this);
  }
  return __extends(r, n), r.prototype.createMatrixRow = function(e, n, r, i) {
   return new t(e, n, r, this, i);
  }, r;
 }(e.QuestionMatrixModel);
 e.QuestionMatrix = n, e.JsonObject.metaData.overrideClassCreatore("matrix", function() {
  return new n("");
 }), e.QuestionFactory.Instance.registerQuestion("matrix", function(e) {
  var t = new n(e);
  return t.rows = [ "Row 1", "Row 2" ], t.columns = [ "Column 1", "Column 2", "Column 3" ], 
  t;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t, n, r, i) {
   e.call(this, t, n, r, i), this.column = t, this.row = n, this.isValueUpdating = !1, 
   this.koValue = ko.observable(this.value);
   var s = this;
   this.koValue.subscribe(function(e) {
    s.isValueUpdating || (s.value = e);
   });
  }
  return __extends(t, e), t.prototype.onValueChanged = function() {
   this.isValueUpdating = !0, this.koValue(this.value), this.isValueUpdating = !1;
  }, t;
 }(e.MatrixDropdownCellModel);
 e.MatrixDropdownCell = t;
 var n = function(e) {
  function n(t, n, r, i) {
   e.call(this, t, n, r, i), this.name = t, this.text = n;
  }
  return __extends(n, e), n.prototype.createCell = function(e, n) {
   return new t(e, this, this.data, n);
  }, n;
 }(e.MatrixDropdownRowModel);
 e.MatrixDropdownRow = n;
 var r = function(t) {
  function r(n) {
   t.call(this, n), this.name = n, new e.QuestionImplementor(this);
  }
  return __extends(r, t), r.prototype.createMatrixRow = function(e, t, r) {
   return new n(e, t, this, r);
  }, r;
 }(e.QuestionMatrixDropdownModel);
 e.QuestionMatrixDropdown = r, e.JsonObject.metaData.overrideClassCreatore("matrixdropdown", function() {
  return new r("");
 }), e.QuestionFactory.Instance.registerQuestion("matrixdropdown", function(e) {
  var t = new r(e);
  return t.choices = [ 1, 2, 3, 4, 5 ], t.rows = [ "Row 1", "Row 2" ], t.addColumn("Column 1"), 
  t.addColumn("Column 2"), t.addColumn("Column 3"), t;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t, n) {
   void 0 === t && (t = null), void 0 === n && (n = null), e.call(this, t, n), this.name = t, 
   this.isKOValueUpdating = !1, this.koValue = ko.observable(this.value);
   var r = this;
   this.koValue.subscribe(function(e) {
    r.isKOValueUpdating || (r.value = e);
   });
  }
  return __extends(t, e), t.prototype.onValueChanged = function(e) {
   this.isKOValueUpdating = !0, this.koValue(e), this.isKOValueUpdating = !1;
  }, t;
 }(e.MultipleTextItemModel);
 e.MultipleTextItem = t;
 var n = function(n) {
  function r(t) {
   n.call(this, t), this.name = t, new e.QuestionImplementor(this);
  }
  return __extends(r, n), r.prototype.createTextItem = function(e, n) {
   return new t(e, n);
  }, r;
 }(e.QuestionMultipleTextModel);
 e.QuestionMultipleText = n, e.JsonObject.metaData.overrideClassCreatore("multipletextitem", function() {
  return new t("");
 }), e.JsonObject.metaData.overrideClassCreatore("multipletext", function() {
  return new n("");
 }), e.QuestionFactory.Instance.registerQuestion("multipletext", function(e) {
  var t = new n(e);
  return t.AddItem("text1"), t.AddItem("text2"), t;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n) {
   t.call(this, n), this.name = n, new e.QuestionCheckboxBaseImplementor(this);
  }
  return __extends(n, t), n;
 }(e.QuestionRadiogroupModel);
 e.QuestionRadiogroup = t, e.JsonObject.metaData.overrideClassCreatore("radiogroup", function() {
  return new t("");
 }), e.QuestionFactory.Instance.registerQuestion("radiogroup", function(n) {
  var r = new t(n);
  return r.choices = e.QuestionFactory.DefaultChoices, r;
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t) {
   e.call(this, t), this.koVisibleRateValues = ko.observableArray(this.question.visibleRateValues), 
   this.question.koVisibleRateValues = this.koVisibleRateValues;
   var n = this;
   this.koChange = function(e) {
    n.koValue(e.itemValue);
   }, this.question.koChange = this.koChange, this.question.rateValuesChangedCallback = function() {
    n.onRateValuesChanged();
   };
  }
  return __extends(t, e), t.prototype.onRateValuesChanged = function() {
   this.koVisibleRateValues(this.question.visibleRateValues);
  }, t;
 }(e.QuestionImplementor), n = function(e) {
  function n(n) {
   e.call(this, n), this.name = n, new t(this);
  }
  return __extends(n, e), n;
 }(e.QuestionRatingModel);
 e.QuestionRating = n, e.JsonObject.metaData.overrideClassCreatore("rating", function() {
  return new n("");
 }), e.QuestionFactory.Instance.registerQuestion("rating", function(e) {
  return new n(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n) {
   t.call(this, n), this.name = n, new e.QuestionImplementor(this);
  }
  return __extends(n, t), n;
 }(e.QuestionTextModel);
 e.QuestionText = t, e.JsonObject.metaData.overrideClassCreatore("text", function() {
  return new t("");
 }), e.QuestionFactory.Instance.registerQuestion("text", function(e) {
  return new t(e);
 });
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(t) {
  function n(n, r) {
   if (void 0 === n && (n = null), void 0 === r && (r = null), t.call(this, n, r), 
   this.onRendered = new e.Event(), "undefined" == typeof ko) throw new Error("knockoutjs library is not loaded.");
   this.render(r);
  }
  return __extends(n, t), n.prototype.render = function(e) {
   void 0 === e && (e = null);
   e && "string" == typeof e && (e = document.getElementById(e)), e && (this.renderedElement = e), 
   (e = this.renderedElement) && !this.isEmpty && (e.innerHTML = this.getTemplate(), 
   this.applyBinding(), this.onRendered.fire(this, {}));
  }, n.prototype.createNewPage = function(t) {
   return new e.Page(t);
  }, n.prototype.getTemplate = function() {
   throw new Error("Please override this method");
  }, n.prototype.onBeforeCreating = function() {
   var e = this;
   this.dummyObservable = ko.observable(0), this.koCurrentPage = ko.computed(function() {
    return e.dummyObservable(), e.currentPage;
   }), this.koIsFirstPage = ko.computed(function() {
    return e.dummyObservable(), e.isFirstPage;
   }), this.koIsLastPage = ko.computed(function() {
    return e.dummyObservable(), e.isLastPage;
   }), this.koProgressText = ko.computed(function() {
    return e.dummyObservable(), e.progressText;
   }), this.koProgress = ko.computed(function() {
    return e.dummyObservable(), e.getProgress();
   });
  }, n.prototype.currentPageChanged = function(e, n) {
   this.updateKoCurrentPage(), t.prototype.currentPageChanged.call(this, e, n);
  }, n.prototype.onLoadSurveyFromService = function(e) {
   this.render(e);
  }, n.prototype.applyBinding = function() {
   this.renderedElement && (this.updateKoCurrentPage(), ko.cleanNode(this.renderedElement), 
   ko.applyBindings(this, this.renderedElement));
  }, n.prototype.updateKoCurrentPage = function() {
   this.dummyObservable(this.dummyObservable() + 1);
  }, n.prototype.getProgress = function() {
   if (null == this.currentPage) return 0;
   var e = this.visiblePages.indexOf(this.currentPage) + 1;
   return Math.ceil(100 * e / this.visiblePageCount);
  }, n;
 }(e.SurveyModel);
 e.SurveyBase = t;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey, Survey, template;

!function(e) {
 var t = function(t) {
  function n(e) {
   t.call(this, e), this.koExpanded = ko.observable(!1);
   var n = this;
   this.doExpand = function() {
    n.changeExpanded();
   }, this.survey.onComplete.add(function(e) {
    n.onComplete();
   });
  }
  return __extends(n, t), n.prototype.createSurvey = function(t) {
   return new e.SurveyBase(t);
  }, n.prototype.expandcollapse = function(e) {
   t.prototype.expandcollapse.call(this, e), this.koExpanded(this.isExpandedValue);
  }, Object.defineProperty(n.prototype, "template", {
   get: function() {
    return this.templateValue ? this.templateValue : this.getDefaultTemplate();
   },
   set: function(e) {
    this.templateValue = e;
   },
   enumerable: !0,
   configurable: !0
  }), n.prototype.show = function() {
   this.windowElement.innerHTML = this.template, ko.cleanNode(this.windowElement), 
   ko.applyBindings(this, this.windowElement), document.body.appendChild(this.windowElement), 
   this.survey.render(e.SurveyWindow.surveyElementName), this.isShowingValue = !0;
  }, n.prototype.getDefaultTemplate = function() {
   throw new Error("Please override this method");
  }, n.prototype.hide = function() {
   document.body.removeChild(this.windowElement), this.windowElement.innerHTML = "", 
   this.isShowingValue = !1;
  }, n.prototype.changeExpanded = function() {
   this.expandcollapse(!this.isExpanded);
  }, n.prototype.onComplete = function() {
   this.hide();
  }, n;
 }(e.SurveyWindowModel);
 e.SurveyWindowBase = t;
}(Survey || (Survey = {})), function(e) {
 var t = function() {
  function e() {}
  return e.prototype.replaceText = function(e, t, n) {
   void 0 === n && (n = null), t = this.getId(t, n);
   var r = this.text.indexOf(t);
   if (!(r < 0 || (r = this.text.indexOf(">", r)) < 0)) {
    var i = r + 1;
    (r = this.text.indexOf("<\/script>", i)) < 0 || (this.text = this.text.substr(0, i) + e + this.text.substr(r));
   }
  }, e.prototype.getId = function(e, t) {
   var n = 'id="survey-' + e;
   return t && (n += "-" + t), n + '"';
  }, Object.defineProperty(e.prototype, "text", {
   get: function() {
    return "";
   },
   set: function(e) {},
   enumerable: !0,
   configurable: !0
  }), e;
 }();
 e.SurveyTemplateTextBase = t;
}(Survey || (Survey = {})), function(e) {
 !function(e) {
  e.html = '<script type="text/html" id="survey-comment">  <input data-bind="value:$data.question.koComment, visible:$data.visible" /><\/script><div class="sv_main">    <h2 data-bind="visible: (title.length > 0) && showTitle, text: title"></h2>    \x3c!-- ko if: koCurrentPage() --\x3e    <div data-bind="visible: showProgressBar ==\'top\', text:koProgressText"></div>    <div data-bind="template: { name: \'survey-page\', data: koCurrentPage }"></div>    <div data-bind="visible: showProgressBar ==\'bottom\', text:koProgressText"></div>    <p />    <div class="sv_nav" data-bind="visible: showNavigationButtons && !isDesignMode">        <input type="button" data-bind="value: pagePrevText, click: prevPage, visible: !koIsFirstPage()" />  <input type="button" value="Next" data-bind="value: pageNextText, click: nextPage, visible: !koIsLastPage()" />  <input type="button" value="Submit" data-bind="value: completeText, click: completeLastPage, visible: koIsLastPage()" />    </div>    \x3c!-- /ko --\x3e    \x3c!-- ko if: koCurrentPage() == null --\x3e    There is no any visible page or visible question in the survey.    \x3c!-- /ko --\x3e</div><script type="text/html" id="survey-page">    <div class="sv_p_title" data-bind="visible: (title.length > 0) && data.showPageTitles, text: koNo() + title"></div>    \x3c!-- ko foreach: { data: questions, as: \'question\' } --\x3e        \x3c!-- ko template: { name: \'survey-question\', data: question } --\x3e        \x3c!-- /ko --\x3e    \x3c!-- /ko --\x3e<\/script><script type="text/html" id="survey-question-checkbox">    \x3c!-- ko foreach: { data: question.visibleChoices, as: \'item\', afterRender: question.koAfterRender}  --\x3e    <div class="sv_qcbc"  data-bind="style:{width: question.koWidth}">            <label class="sv_q_checkbox">                <input type="checkbox"                       data-bind="value: item.value, checked: question.koValue" />                <span data-bind="text: item.text"></span>            </label>    </div>    \x3c!-- /ko --\x3e    <div data-bind="if:question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div>    </div><\/script><script type="text/html" id="survey-question-comment">    <textarea type="text" data-bind="attr: {cols: question.cols, rows: question.rows}, value:question.koValue" /><\/script><script type="text/html" id="survey-question-dropdown">    <select data-bind="options: question.visibleChoices, optionsText: \'text\', optionsValue: \'value\', value: question.koValue, optionsCaption: question.optionsCaption"></select>    <div data-bind="visible: question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div>    </div><\/script><script type="text/html" id="survey-question-html">    <div data-bind="html: question.html"></div><\/script><script type="text/html" id="survey-question-matrix">    <table class="sv_q_matrix">        <thead>            <tr>                <th data-bind="visible: question.hasRows"></th>                \x3c!-- ko foreach: question.columns --\x3e                <th data-bind="text:$data.text"></th>                \x3c!-- /ko --\x3e            </tr>        </thead>        <tbody>            \x3c!-- ko foreach: { data: question.visibleRows, as: \'row\' } --\x3e            <tr>                <td data-bind="visible: question.hasRows, text:row.text"></td>                \x3c!-- ko foreach: question.columns --\x3e                <td>                    <input type="radio" data-bind="attr: {name: row.fullName, value: $data.value}, checked: row.koValue"/>                </td>                \x3c!-- /ko --\x3e            </tr>            \x3c!-- /ko --\x3e        </tbody>    </table><\/script><script type="text/html" id="survey-question-matrixdropdown">    <table  class="sv_q_matrix">        <thead>            <tr>                <th></th>                \x3c!-- ko foreach: question.columns --\x3e                <th data-bind="text:$data.title"></th>                \x3c!-- /ko --\x3e            </tr>        </thead>        <tbody>            \x3c!-- ko foreach: { data: question.visibleRows, as: \'row\' } --\x3e            <tr>                <td data-bind="text:row.text"></td>                \x3c!-- ko foreach: row.cells--\x3e                <td>                    <select data-bind="options: $data.choices, optionsText: \'text\', optionsValue: \'value\', value: $data.koValue, optionsCaption: $data.optionsCaption"></select>                </td>                \x3c!-- /ko --\x3e            </tr>            \x3c!-- /ko --\x3e        </tbody>    </table><\/script><script type="text/html" id="survey-question-multipletext">    <table data-bind="foreach: { data:  question.items, as: \'item\' }">        <tr>            <td data-bind="text: item.title"></td>            <td><input type="text" data-bind="attr: {size: question.itemSize}, value: item.koValue" /></td>        </tr>    </table><\/script><script type="text/html" id="survey-question-radiogroup">    \x3c!-- ko foreach: { data: question.visibleChoices, as: \'item\', afterRender: question.koAfterRender}  --\x3e    <div class="sv_qcbc"  data-bind="style:{width: question.koWidth}">        <label class="sv_q_radiogroup">            <input type="radio" data-bind="name: question.name, attr: {value: item.value}, checked: question.koValue" />            <span data-bind="text: item.text"></span>        </label>    </div>    \x3c!-- /ko --\x3e    <div data-bind="if:question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div>    </div><\/script><script type="text/html" id="survey-question-rating">    <table class="sv_q_rating">        <thead>            <tr>                <th></th>                \x3c!-- ko foreach: question.koVisibleRateValues --\x3e                <th data-bind="text:$data.text"></th>                \x3c!-- /ko --\x3e                <th></th>            </tr>        </thead>        <tbody>            <tr>                <td data-bind="text:question.mininumRateDescription"></td>                \x3c!-- ko foreach: question.koVisibleRateValues --\x3e                <td>                    <input type="radio" data-bind="attr: {name: question.name, value: $data.value}, checked: question.koValue" />                </td>                \x3c!-- /ko --\x3e                <td data-bind="text:question.maximumRateDescription"></td>            </tr>        </tbody>    </table>    <div data-bind="visible: question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question } }"></div>    </div><\/script><script type="text/html" id="survey-question-text">    <input type="text" data-bind="attr: {size: question.size}, value:question.koValue"/><\/script><script type="text/html" id="survey-question">    <div class="sv_q" data-bind="visible: question.koVisible()">        <div class="sv_q_erbox" data-bind="visible: koErrors().length > 0, foreach: koErrors">            <div data-bind="text:$data.getText()"></div>        </div>        \x3c!-- ko if: question.hasTitle --\x3e        <div class="sv_q_title" data-bind="text: question.koNo() +  (question.isRequired ? question.data.requiredText : \'\') + question.title"></div>        \x3c!-- /ko --\x3e        \x3c!-- ko template: { name: \'survey-question-\' + question.getType(), data: question } --\x3e        \x3c!-- /ko --\x3e        <div data-bind="visible: question.hasComment">            Other (please describe)            <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': true } }"></div>        </div>    </div><\/script>';
 }(e.ko || (e.ko = {}));
}(template || (template = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

!function(e) {
 var t = function(e) {
  function t(t, n) {
   void 0 === t && (t = null), void 0 === n && (n = null), e.call(this, t, n);
  }
  return __extends(t, e), t.prototype.getTemplate = function() {
   return template.ko.html;
  }, t;
 }(e.SurveyBase);
 e.Survey = t;
}(Survey || (Survey = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey, template;

!function(e) {
 var t = function(t) {
  function n(e) {
   t.call(this, e);
  }
  return __extends(n, t), n.prototype.createSurvey = function(t) {
   return new e.Survey(t);
  }, n.prototype.getDefaultTemplate = function() {
   return template.window.ko.html;
  }, n;
 }(e.SurveyWindowBase);
 e.SurveyWindow = t;
}(Survey || (Survey = {})), function(e) {
 !function(e) {
  !function(e) {
   e.html = '<div class="sv_window">    <div class="sv_window_title"><a href="#" data-bind="click:doExpand" style="width:100%"><span data-bind="text:title"></span></a></div>    <div data-bind="visible:koExpanded">        <div class="sv_window_content" id="windowSurveyJS"></div>    </div></div>';
  }(e.ko || (e.ko = {}));
 }(e.window || (e.window = {}));
}(template || (template = {}));

var __extends = this && this.__extends || function(e, t) {
 for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
 function r() {
  this.constructor = e;
 }
 e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}, Survey;

/** @license
 *
 * Copyright (c) 2015, 2016 David A. Randolph.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ****************************************************************************
 * Created by David A. Randolph on 8/18/15, on top of the abc2svg
 * example script by Jef Moine.
 */
function AbcDE() {
 "use strict";
 var t, n, r, i, s, a, o, c, u = [], l = [], f = "", p = !1, d = 1, h = {}, m = [], v = void 0, g = "", y = "noname.abc", _ = 0, b = [], x = !1, w = [], k = 0, E = [], C = [], T = {}, S = {}, O = [], A = !1, N = {}, B = {}, R = [], P = 0, L = !1, I = [], M = !1, D = !1, j = "../../corpora", V = "./abcde_help.html", F = "../image", q = "../lib/media", z = 5, H = /\s/g, U = /</g, Q = />/g, W = /[><]/g, J = /([,;\.])/, X = /&/g, K = /.*([<>])[^<>]+$/, G = /^% abcDidactyl v([\d\.]+)$/, Y = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x,;\.]+)$/, Z = /^% abcDidactyl END$/, ee = /^% Authority: (.*)\s+\((\d\d\d\d)\)$/, te = /^% Transcriber: (.*)$/, ne = /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/, re = /^% (.*)$/, ie = 300, se = 4e3, ae = "abcde", oe = "abc_source", ce = "source", ue = "abcde_prefs", le = "abcde_controls", fe = "abcde_metadata", pe = "abcde_keypad", de = "abcde_rendering", he = "abcde_target", me = "abcde_error", ve = .1, ge = 3, ye = .3, _e = 90, be = 89, xe = 13, we = 8, ke = 9, Ee = 37, Ce = 39, Te = "%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11", Se = "%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";
 function Oe() {
  v && clearInterval(v), u = [], l = [], g = "", p = !1, y = "noname.abc", n = void 0, 
  i = "", s = void 0, b = [], x = !1, w = [], a = void 0, k = 0, E = [], C = [], T = {}, 
  S = {}, O = [], A = !1, N = {}, B = {}, R = [], P = 0, o = void 0, c = void 0, I = [];
 }
 function Ae(e) {
  var t, n = N[e], r = [];
  for (t in n) n.hasOwnProperty(t) && r.push(t);
  return r.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), r;
 }
 function Ne(e, t) {
  if (!e) return console.log("MISSING fingers have no hands."), "";
  if ("x" === e) return e;
  for (var n = t, r = [], i = e.split(""), s = 0; s < i.length; s++) {
   var a = i[s];
   "<" === a || ">" === a ? n = a : a.match(/\d/) ? r.push(n + a) : r.push(a);
  }
  return r.join("");
 }
 function Be() {
  return "undefined" != typeof Storage;
 }
 function Re(e, n) {
  g || (g = md5(i));
  var r = e + "_" + n + "_" + g;
  return t.experiment_id && (r = t.experiment_id + "_" + r), r;
 }
 function Pe(e) {
  if (!Be()) return {};
  var t = {
   sequence: ""
  }, n = Re("sequence", e), r = localStorage.getItem(n) || "";
  r.match(/[^x&@]/) && (t.sequence = r), n = Re("authority", e);
  var i = localStorage.getItem(n) || "";
  t.authority = i, n = Re("authority_year", e);
  var s = localStorage.getItem(n) || "";
  t.authority_year = s, n = Re("transcriber", e);
  var a = localStorage.getItem(n) || "";
  t.transcriber = a, n = Re("comments", e);
  var o = localStorage.getItem(n) || "";
  return t.comments = o, t;
 }
 function Le(e) {
  var t = document.getElementById(e);
  return t.value ? t.value : "";
 }
 function Ie(e) {
  var t = new Date(), n = t.getFullYear() + "-" + sprintf("%02d", t.getMonth() + 1) + "-" + sprintf("%02d", t.getDate()) + " " + sprintf("%02d", t.getHours()) + ":" + sprintf("%02d", t.getMinutes()) + ":" + sprintf("%02d", t.getSeconds()), r = "", i = "";
  return (e || qe("include_pii")) && (r = Le("authority"), i = Le("transcriber")), 
  {
   sequence: Nn(),
   authority: r,
   authority_year: Le("authority_year"),
   transcriber: i,
   transcription_date: n,
   comments: Le("comments")
  };
 }
 function Me(e, t) {
  var n = document.getElementById(e).value, r = Re(e, t);
  localStorage.setItem(r, n);
 }
 function De(e) {
  for (var t = document.getElementsByName(e), n = 0; n < t.length; n++) {
   var r = t[n];
   if (r.checked) return r.id;
  }
 }
 function je(e) {
  var t = "";
  "preset" === e || "output" === e || "keypad" === e || "restore" == e ? t = De(e) : t = document.getElementById(e).value;
  h[e] = t, localStorage.setItem(e, t);
 }
 function Ve() {
  var e = document.getElementById("sequence_spinner");
  return e ? e.value : (alert("Sequence DOM element has gone missing."), "1");
 }
 function Fe() {
  if (Be()) if (document.getElementById("sequence_spinner")) {
   var e = Ve(), t = Re("sequence", e), n = Nn();
   localStorage.setItem(t, n), Me("authority", e), Me("authority_year", e), Me("transcriber", e), 
   Me("comments", e);
  } else clearInterval(v); else clearInterval(v);
 }
 function qe(e) {
  if (t && t[e]) return t[e];
  if ("measure_number_interval" === e) return document.getElementById(e).value;
  var n = De(e);
  return n || "";
 }
 function ze() {
  var e = {};
  return e.authority = Le("default_authority"), e.authority_year = Le("default_authority_year"), 
  e.transcriber = Le("default_transcriber"), e.sequence = "x", e.comments = "", e;
 }
 function He(e) {
  for (var t, n = e.split("\n"), r = !1, i = {}, s = [], a = "", o = 0; o < n.length; o++) {
   var c = n[o];
   if (!a && (t = G.exec(c)) && t[1]) a = t[1], r = !0; else if (r) if ((t = Y.exec(c)) && t[1] && t[2]) i = {
    sequence: t[2],
    comments: ""
   }, s.push(i); else {
    if (t = Z.exec(c)) break;
    if ((t = ee.exec(c)) && t[1]) {
     i.authority = t[1], t[2] && (i.authority_year = t[2]);
     continue;
    }
    if ((t = te.exec(c)) && t[1]) {
     i.transcriber = t[1];
     continue;
    }
    if ((t = ne.exec(c)) && t[1]) {
     i.transcription_date = t[1];
     continue;
    }
    (t = re.exec(c)) && t[1] && (i.comments += t[1] + "\n");
   }
  }
  return s;
 }
 function Ue() {
  var e = document.getElementById("sequence_spinner");
  e.min = 1, e.max = m.length || 1;
  var t, n = (t = 1, "last" === qe("preset") && (t = m.length || 1), t);
  e.value = n;
 }
 function $e(e) {
  if (e) {
   var t = e - 1;
   return parseInt(e) <= m.length ? m[t] : ze();
  }
  return (n = qe("preset")) && "none" !== n ? "first" === n ? m[0] : "last" === n ? m[m.length - 1] : "" : ze();
  var n;
 }
 function Qe(e, t) {
  for (var n = document.getElementsByName(e), r = 0; r < n.length; r++) {
   var i = n[r];
   i.id === t && (i.checked = !0);
  }
 }
 function We(e, t) {
  var n = document.getElementById(e);
  n.value = void 0 !== t ? t : "";
 }
 function Je(e) {
  We("authority", e.authority), We("authority_year", e.authority_year), We("transcriber", e.transcriber), 
  We("comments", e.comments);
 }
 function Xe(e, t) {
  for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
  return !1;
 }
 function Ke(e, t) {
  for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
  return null;
 }
 function Ge(e, t) {
  if (e) {
   console.log("Setting fingers: ", e);
   var n, r, i, s = {}, a = e.split("@");
   for (n = 0; n < a.length; n++) {
    var o = Zt(n);
    s = [];
    var c = a[n].split("&");
    for (r = 0; r < c.length; r++) {
     var u = it(c[r]);
     s = s.concat(u);
    }
    for (var l = Ae(n), f = 0; f < l.length; f++) {
     var p = l[f], d = N[n][p];
     d.sort(It);
     for (var h = 0; d[h].grace; ) {
      var m = "";
      d[h][t] = "";
      for (var v = 0; v < d[h].size; v++) (i = s.shift()) || (console.log(t + " MISSING for grace note:"), 
      Rt(t + " grace note", d[h])), o = En(i = Ne(i, o), o), m += i;
      "fingering" === t ? d[h].set_fingering(m) : "preset_fingering" === t && d[h].set_preset_fingering(m), 
      h++;
     }
     var g = zt(d), y = qt(g), _ = [], b = [], x = null;
     for (v = 0; v < y.length; v++) for (var w = y[v], k = 0; k < g[w].length; k++) if (!(x = g[w][k]).grace) {
      Xe(b, x) || (_.push(""), b.push(x));
      var E = Ke(b, x);
      (i = s.shift()) || (console.log(t + " MISSING for note:"), Rt(t + " pit note", x)), 
      o = En(i = Ne(i, o), o), _[E] += i;
     }
     for (v = 0; v < _.length; v++) i = _[v], console.log("FingerING " + i), x = b[v], 
     "fingering" === t ? x.set_fingering(i) : "preset_fingering" === t && x.set_preset_fingering(i);
    }
   }
  }
 }
 function Ye(e, t) {
  var n = t.sequence, r = t.sequence, i = !0, s = qe("preset");
  s && "none" !== s || (i = !1, n = "");
  var a = !1;
  if (e && e.sequence && e.sequence !== n) {
   var o = qe("restore");
   (a = "always" === o || "never" !== o && confirm("You have previously entered data for this piece (or sequence). Do you want to restore them?")) && (n = e.sequence);
  }
  a ? Je(e) : i && Je(t), Ge(n, "fingering"), Ge(r, "preset_fingering"), v = setInterval(function() {
   Fe();
  }, se);
 }
 function Ze() {
  var e = Ve();
  Ye(Pe(e), $e(e)), function() {
   var e = Le("authority"), t = Le("default_authority");
   !e && t && We("authority", t);
   var n = Le("authority_year"), r = Le("default_authority_year");
   !n && r && We("authority_year", r);
   var i = Le("transcriber"), s = Le("default_transcriber");
   !i && s && We("transcriber", s);
  }();
 }
 function et(e) {
  return Cn();
 }
 function tt() {
  var e = window.prompt("Please enter a fingering string for the current piece.", "");
  null !== e && (Ge(e, "fingering"), Kt());
 }
 function nt() {
  i && (confirm("All changes you have made to this fingering sequence will be discarded, and the initial sequence will be restored. Are you sure you want to proceed?") && (Ye(void 0, $e(Ve())), 
  Kt(), yn(a = C[0][0][0])));
 }
 function rt(e) {
  return function e(t, n) {
   if (null == t) return n;
   for (var r = 0; r < t.length; r++) t[r] instanceof Array ? e(t[r], n) : t[r] && n.push(t[r]);
   return n;
  }(e, []).join("");
 }
 function it(e, t = 0) {
  if (!e) return [];
  console.log("abcdf string: " + e);
  var n = function(e, t = 0, n = !1) {
   var r = [];
   if (n) {
    for (var i = 0; i < e[t].length; i++) for (var s = 0; s < e[t][i].length; s++) if ((o = e[t][i][s]) instanceof Array) {
     var a = rt(o);
     r.push(a);
    }
   } else for (s = 0; s < e[t].length; s++) {
    var o;
    (o = e[t][s]) instanceof Array && (a = rt(o), r.push(a));
   }
   return r;
  }(AbcdfRaw_Parser.parse(e), t, X.exec(line));
  return n = n.filter(function(e) {
   return "&" != e && "@" != e;
  });
 }
 function st() {
  window.open(V, "_blank").focus();
 }
 function at(e) {
  ln();
  var t = document.getElementById("prefs_modal_wrapper"), n = document.getElementById("prefs_modal_window");
  t.className = "overlay";
  var r = n.offsetHeight - document.documentElement.clientHeight;
  r > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - r + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ot(e) {
  ln();
  var t = document.getElementById("metadata_modal_wrapper"), n = document.getElementById("metadata_modal_window");
  t.className = "overlay";
  var r = n.offsetHeight - document.documentElement.clientHeight;
  r > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - r + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ct(e) {
  document.getElementById("metadata_modal_wrapper").className = "", Fe(), bt(), un(), 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ut() {
  d > ye && (d -= ve, Kt());
 }
 function lt() {
  d < ge && (d += ve, Kt());
 }
 function ft(e) {
  je("preset"), je("output"), je("restore"), je("keypad"), je("measure_number_interval"), 
  je("default_authority"), je("default_authority_year"), je("default_transcriber"), 
  document.getElementById("prefs_modal_wrapper").className = "", i && (Kt(), yn(a)), 
  bt(), un(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function pt(e) {
  var t = e.slice(0, 100);
  if (-1 == t.indexOf("<?xml")) return !1;
  var n = t.match(/encoding="([^"]+)"/), r = "utf-8";
  return n && 2 == n.length && (r = n[1]), r;
 }
 function dt(e) {
  var t = $.parseXML(e), n = vertaal(t, {}), r = n[0], i = n[1];
  return i && console.log("xml2abc ERROR: " + i), r || alert("Unable to open MusicXML file: " + i), 
  r;
 }
 function ht(e) {
  var t = e.split(".");
  return t[t.length - 1];
 }
 function mt(e) {
  var t = ht(e), n = 'The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.', r = function(e, t) {
   var n = new XMLHttpRequest();
   return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest()).open(e, t) : n = null, 
   n;
  }("GET", e);
  r ? ("mxl" === t && (r.responseType = "arraybuffer"), r.onload = function() {
   console.log("File has been retrieved.");
   var n = "";
   if ("mxl" === t) {
    if (!(n = function(e) {
     var t = "";
     try {
      var n = new JSZip(e);
      $.each(n.files, function(e, n) {
       t = n.asText();
      });
     } catch (e) {
      return alert("Could not open compressed MusicXML file: " + e.message), "";
     }
     return "UTF-8" !== pt(t) ? (alert("Input mxl is not UTF-8 encoded. Cannot open."), 
     "") : t = dt(t);
    }(r.response))) return;
   } else {
    var i = pt(n = r.responseText);
    if (i) {
     if (!/^utf/i.test(i)) return void alert("Input xml is not UTF-8 encoded. Cannot open.");
     n = dt(n);
    }
   }
   n && (f = e, document.getElementById(oe).value = n, fn());
  }, r.onerror = function() {
   alert(n);
  }, r.send()) : alert(n);
 }
 function vt() {
  var e = j + "/clementi/11.abc";
  if (f) e = f; else {
   var t = qe("default_url");
   t && (e = t);
  }
  var n = window.prompt("Please enter URL to open.", e);
  n && mt(n);
 }
 function gt() {
  var e = document.getElementById("file_input").files;
  if (e.length) {
   var t = e[0];
   if ("mxl" !== ht(t.name)) {
    var n = !1, r = new FileReader();
    r.onload = function(e) {
     var i = pt(r.result), s = new FileReader();
     i ? n = !0 : i = "UTF-8", s.onload = function(e) {
      var t = "";
      t = n ? dt(s.result) : e.target.result, document.getElementById(oe).value = t, fn();
     }, s.readAsText(t, i);
    }, r.readAsText(t, "UTF-8");
   } else !function(e) {
    var t = new FileReader(), n = "";
    t.onload = function(e) {
     try {
      var t = new JSZip(e.target.result);
      $.each(t.files, function(e, t) {
       n = t.asText();
      });
     } catch (e) {
      return void alert("Could not open compressed MusicXML file: " + e.message);
     }
     "UTF-8" === pt(n) ? (n = dt(n), document.getElementById(oe).value = n, fn()) : alert("Input xml is not UTF-8 encoded. Cannot open.");
    }, t.readAsArrayBuffer(e);
   }(t);
  } else alert("Please select a valid abc file.");
 }
 function yt() {
  M = !M;
 }
 function _t(e, t) {
  for (var n = e.children, r = 0; r < n.length; r++) n[r].style.display = t;
 }
 function bt() {
  var e = document.getElementById(pe), t = document.getElementById("number_div"), n = document.getElementById("symbol_div");
  if ("show" === qe("keypad")) e.style.display = "block", t.style.display = "block", 
  n.style.display = "block", _t(t, "inline"), _t(n, "inline"); else {
   _t(n, "none"), _t(t, "none");
   var r = qe("qualtrics"), i = qe("submit_button_id");
   if (r) {
    document.getElementById("q_next").style.display = "inline";
    var s = document.getElementById("q_back");
    s && (s.style.display = "inline");
   } else if (i) {
    document.getElementById(i).style.display = "inline";
   } else t.style.display = "block", n.style.display = "block", e.style.display = "none";
  }
 }
 function xt(e) {
  var t = e.keyCode || e.which;
  t = String.fromCharCode(t);
  /[0-9]/.test(t) || (e.returnValue = !1, e.preventDefault && e.preventDefault());
 }
 function wt(e, t, n, r, i, s) {
  var a = document.createElement("input");
  a.type = "text", a.class = r, a.id = t, i && (a.onkeypress = i), "year" === r && (a.size = "4");
  var o = document.createElement("label");
  o.htmlFor = t, o.appendChild(document.createTextNode(n)), e.appendChild(o), e.appendChild(a), 
  s && e.appendChild(document.createElement("br"));
 }
 function kt(e, t, n) {
  var r = document.createElement("label");
  r.class = n;
  var i = document.createTextNode(t);
  r.appendChild(i), e.appendChild(r);
 }
 function Et(e, t, n, r, i, s, a) {
  var o = document.createElement("div");
  o.class = "radio_div", kt(e, t, "prompt");
  for (var c = 0; c < r.length; c++) {
   var u = document.createElement("input");
   u.type = "radio", u.id = r[c], u.id === s && (u.checked = !0), u.name = n, o.appendChild(u), 
   kt(o, i[c], "radio_label");
   var l = document.createElement("span");
   l.innerHTML = "&nbsp;&nbsp", o.appendChild(l);
  }
  return e.appendChild(o), a && e.appendChild(document.createElement("br")), o;
 }
 function Ct() {
  var e = document.getElementById(fe), t = document.createElement("div");
  t.id = "metadata_modal_wrapper", e.appendChild(t);
  var n = document.createElement("div");
  n.id = "metadata_modal_window", t.appendChild(n);
  var r = document.createElement("div");
  r.style.textAlign = "right";
  var i = document.createElement("a");
  i.id = "metadata_modal_close", i.href = "#", i.innerHTML = "Close <b>X</b>", r.appendChild(i), 
  i.addEventListener("click", ct, !1), n.appendChild(r), wt(n, "authority", "Authority", "name", void 0, !1), 
  wt(n, "authority_year", "Year", "year", xt, !0), wt(n, "transcriber", "Transcriber", "name", void 0, !0), 
  function(e, t, n, r, i, s) {
   var a = document.createElement("textarea");
   a.class = r, a.id = t, a.rows = i, a.cols = s;
   var o = document.createElement("label");
   o.htmlFor = t, o.appendChild(document.createTextNode(n)), e.appendChild(o), e.appendChild(a);
  }(n, "comments", "Comments", "comments", 10, 50);
 }
 function Tt() {
  var e = document.getElementById(ue), n = document.createElement("div");
  n.id = "prefs_modal_wrapper", e.appendChild(n);
  var r = document.createElement("div");
  r.id = "prefs_modal_window", n.appendChild(r);
  var i = document.createElement("div");
  i.style.textAlign = "right";
  var s = document.createElement("a");
  s.id = "prefs_modal_close", s.href = "#", s.innerHTML = "Close <b>X</b>", i.appendChild(s), 
  s.addEventListener("click", ft, !1), r.appendChild(i);
  var a = document.createElement("h3");
  a.innerText = "Preferences", r.appendChild(a);
  var o = "restore", c = [ "always", "never", "ask" ], u = [ "Always", "Never", "Ask" ];
  t && t[o] || Et(r, "Restore Data", o, c, u, "ask", !0), o = "output", t && t[o] || Et(r, "Output", o, c = [ "append", "replace" ], u = [ "Append", "Replace" ], "append", !0), 
  o = "preset", t && t[o] || Et(r, "Preset", o, c = [ "first", "last", "none" ], u = [ "First", "Last", "None" ], "first", !0), 
  o = "keypad", c = [ "show", "hide" ], u = [ "Show", "Hide" ];
  var l = "hide";
  "ontouchstart" in window && (l = "show"), Et(r, "Keypad", o, c, u, l, !0), function(e, t, n, r, i, s, a, o) {
   var c = document.createElement("div");
   c.class = "spinner_div", kt(c, t, "prompt");
   var u = document.createElement("input");
   u.id = n, u.min = r, u.max = i, u.size = s, u.type = "number", u.value = a, c.appendChild(u), 
   e.appendChild(c), o && e.appendChild(document.createElement("br"));
  }(r, "Measure Number Interval", "measure_number_interval", 0, 20, 2, 5, !0), wt(r, "default_authority", "Default Authority", "name", void 0, !0), 
  wt(r, "default_authority_year", "Year", "year", xt, !0), wt(r, "default_transcriber", "Transcriber Name", "name", void 0, !0);
 }
 function St(e, t, n) {
  var r = document.createElement("input");
  r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, r.onclick = function() {
   an(n);
  }, e.appendChild(r);
 }
 function Ot(e) {
  var t = qe("qualtrics"), n = _n(i), r = "abcDF_" + n, s = "abcD_" + n, a = Nn();
  Qualtrics.SurveyEngine.setEmbeddedData(r, a);
  var o = Rn();
  Qualtrics.SurveyEngine.setEmbeddedData(s, o), Fe(), "q_next" === e ? (Oe(), Kt(), 
  function() {
   for (var e = document.getElementById(ae); e.firstChild; ) e.removeChild(e.firstChild);
   e.remove(), D = !1, v && clearInterval(v);
  }(), p = !1, t.enableNextButton(), t.enablePreviousButton(), t.clickNextButton()) : (t.enableNextButton(), 
  t.enablePreviousButton(), t.clickPreviousButton());
 }
 function At(e, t, n) {
  var r = document.createElement("input");
  r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, r.onclick = function() {
   Ot(t);
  }, e.appendChild(r);
 }
 function Nt(t, n, r, i) {
  var s = document.createElement("input");
  s.id = n, s.class = "keypad_button", s.type = "image", s.src = F + "/" + r, s.alt = i, 
  s.onclick = function() {
   !function(t) {
    var n = ke;
    switch (t) {
    case "previous":
     n = Ee;
     break;

    case "next":
     n = Ce;
     break;

    case "backspace":
     n = we;
     break;

    case "pencil":
     n = xe;
     break;

    case "undo":
     n = _e;
     break;

    case "redo":
     n = be;
    }
    var r = Gt(n);
    r && e.preventDefault();
   }(n);
  }, t.appendChild(s);
 }
 function Bt() {
  var e = document.getElementById(pe), t = document.createElement("number_div");
  t.id = "number_div";
  var n = document.createElement("symbol_div");
  n.id = "symbol_div", e.appendChild(n), e.appendChild(document.createElement("br")), 
  e.appendChild(t), Nt(t, "undo", "action-undo.svg", "undo"), Nt(t, "redo", "action-redo.svg", "redo"), 
  St(t, "one", "1"), St(t, "two", "2"), St(t, "three", "3"), St(t, "four", "4"), St(t, "five", "5"), 
  St(t, "toggle", "T"), Nt(t, "previous", "arrow-circle-left.svg", "<-"), Nt(t, "next", "arrow-circle-right.svg", "->"), 
  qe("qualtrics") && (qe("qualtrics_back") && At(t, "q_back", "BACK"), At(t, "q_next", "NEXT"));
  var r, i, s, a, o = qe("submit_button_id");
  if (o) {
   var c = qe("submit_button_label");
   c || (c = "NEXT"), r = t, i = o, s = c, (a = document.createElement("input")).type = "button", 
   a.class = "keypad-button", a.id = i, a.value = s, r.appendChild(a);
  }
  Nt(n, "pencil", "target.svg", "..."), St(n, "hyphen", "-"), St(n, "slash", "/"), 
  St(n, "open_paren", "("), St(n, "close_paren", ")"), St(n, "short_phrase", ","), 
  St(n, "medium_phrase", ";"), St(n, "long_phrase", "."), Nt(n, "backspace", "delete.svg", "<]");
 }
 function Rt(e, t) {
  console.log(e + " Line: " + t.line + " Start: " + t.start + " Time: " + t.time + " String: " + t.string + " Size: " + t.size + " Pitch: " + t.pitches.join(",") + " Voice: " + t.voice + " Staff: " + t.staff + " Grace: " + t.grace);
 }
 function Pt(e, t) {
  if ("note" != e[t.type] && "grace" != e[t.type]) return {};
  if (this.fingering = "", this.preset_fingering = "", this.prior_note = null, this.next_note = null, 
  this.line = -1, this.grace = !1, this.anno_start = t.istart, this.size = 0, this.pitches = [], 
  this.start = -1, this.end = -1, this.starts = [], this.stops = [], this.phrase_break = "", 
  this.preset_phrase_break = "", "note" === e[t.type]) {
   this.size = t.notes.length;
   for (var n = 0; n < this.size; n++) this.pitches.push(t.notes[n].pit);
   this.pitches.sort(function(e, t) {
    return parseInt(e) - parseInt(t);
   }), this.start = t.istart, this.end = t.iend;
  } else {
   this.grace = !0, this.start = t.extra.istart, this.size = 1;
   var r = t.extra;
   if (!r.notes) return alert("Who turned off the notes?!"), {};
   for (;;) {
    if (r.notes.length > 1 && alert('Chords not supported in a grace "note."'), this.starts.push(r.istart), 
    this.stops.push(r.iend), this.pitches.push(r.notes[0].pit), !r.next) {
     this.end = r.iend;
     break;
    }
    r = r.next, this.size++;
   }
  }
  return this.istart = t.istart, this.time = t.time, this.string = i.substring(this.start, this.end), 
  this.voice = t.v, this.staff = t.st, this.prior_fingerings = [], this.undone_fingerings = [], 
  this.init = function() {
   this.fingering = "";
   for (var e = 0; e < this.size; e++) this.fingering += "x";
   this.phrase_break = "";
  }, this.preset_init = function() {
   this.preset_fingering = "";
   for (var e = 0; e < this.size; e++) this.preset_fingering += "x";
   this.preset_phrase_break = "";
  }, this.init(), this.set_fingering = function(e) {
   if (function() {
    for (var e = 0; e < E.length; e++) E[e].undone_fingerings = [];
    u = [];
   }(), "x" != this.fingering && this.prior_fingerings.push(this.fingering), e) {
    var t = J.exec(e);
    t ? (this.phrase_break = t[1], this.fingering = e.replace(J, "")) : this.fingering = e;
   } else this.init();
   l.push(this);
  }, this.set_preset_fingering = function(e) {
   if (e) {
    var t = J.exec(e);
    t ? (this.preset_phrase_break = t[1], this.preset_fingering = e.replace(J, "")) : this.preset_fingering = e;
   } else this.preset_init();
  }, this.get_pitch_fingering = function(e) {
   var t = function(e) {
    if (L) return 0 == e.staff ? "<" : ">";
    return Zt(e.staff);
   }(this);
   if (!e.fingering.strike) return "x";
   var n = e.fingering.strike.hand || t, r = n + e.fingering.strike.digit;
   return e.fingering.release && (r += "-" + (n = e.fingering.release.hand || t) + e.fingering.release.digit), 
   r;
  }, this.get_fingering_from_score_fingering = function(e) {
   var t, n, r = "", i = [];
   if (e.first.ornaments) {
    for (i = e.first.ornaments, r += "(", n = 0; n < i.length; n++) t = i[n], r += this.get_pitch_fingering(t);
    r += ")";
   } else r += this.get_pitch_fingering(e.first);
   if (e.last && e.last.ornaments) {
    for (i = e.last.ornaments, r += "(", n = 0; n < i.length; n++) t = e.last.ornaments[n], 
    r += "/" + this.get_pitch_fingering(t);
    r += ")";
   } else e.last && (r += "/" + this.get_pitch_fingering(e.last));
   return r;
  }, this.update_from_score_fingerings = function(e) {
   this.init();
   for (var t = "", n = 0; n < this.size; ) {
    var r = e.shift(), i = this.get_fingering_from_score_fingering(r);
    if (r.segmenter && (this.phrase_break = r.segmenter || ""), t += i, n++, 0 === e.length) break;
   }
   if (n === this.size) return this.set_fingering(t), !0;
   for (;n < this.size; n++) t += "x";
   return this.set_fingering(t), !1;
  }, this.undo_fingering_change = function() {
   this.prior_fingerings.length > 0 && (this.undone_fingerings.push(this.fingering), 
   this.fingering = this.prior_fingerings.pop()), u.push(this);
  }, this.redo_fingering_change = function() {
   this.undone_fingerings.length > 0 && (this.fingering && this.prior_fingerings.push(this.fingering), 
   this.fingering = this.undone_fingerings.pop()), l.push(this);
  }, this.get_fingering = function() {
   if (this.fingering) return this.fingering;
  }, this.get_preset_fingering = function() {
   if (this.preset_fingering) return this.preset_fingering;
  }, this.get_abcdf = function() {
   return this.phrase_break ? this.fingering ? this.fingering + this.phrase_break : "x" + this.phrase_break : this.fingering;
  }, this.get_preset_abcdf = function() {
   return this.preset_phrase_break ? this.preset_fingering ? this.preset_fingering + this.preset_phrase_break : "x" + this.preset_phrase_break : this.preset_fingering;
  }, this.get_phrase_break = function() {
   return this.phrase_break;
  }, this.get_preset_phrase_break = function() {
   return this.preset_phrase_break;
  }, this;
 }
 function Lt() {
  var e;
  this.read_file = function(e) {
   return "";
  }, this.errmsg = function(e, t, n) {
   var r = document.getElementById(me);
   r.innerHTML += t ? '<b onclick="gotoabc(' + t + "," + n + ')" style="cursor: pointer; display: inline-block">' + e + "</b><br/>\n" : e + "<br/>\n";
  }, this.img_out = function(e) {
   var t = /<svg /;
   e.match(t) && (e = e.replace(t, '<svg id="line_' + k + '" '), k++), r += e;
  }, this.anno_start = function(e, t, n, r, i, a, o) {
   !A && t in T ? T[t].line = k : "grace" === e && console.log(e + " ANNO_START start: " + t + " stop: " + n), 
   R.push([ t, n ]), s.out_svg('<g class="e_' + t + '">\n');
  }, this.anno_stop = function(e, t, n, r, i, a, o) {
   "grace" === e && console.log(e + " ANNO_STOP start: " + t + " stop: " + n), s.out_svg("</g>\n"), 
   s.out_svg('<rect class="abcr _' + t + '" x="'), s.out_sxsy(r, '" y="', i), s.out_svg('" width="' + a.toFixed(2) + '" height="' + o.toFixed(2) + '"/>\n');
  }, this.get_abcmodel = function(e, t, n) {
   if (!A) {
    console.log(n);
    for (var r = 0; r < t.length; r++) {
     console.log("Voice: " + r);
     var i = t[r].st;
     B[r] = i;
    }
    for (var s = e; s; ) {
     var a = new Pt(n, s);
     a.istart && (E.push(a), T[a.istart] = a, a.staff in N || (N[a.staff] = {}), a.time in N[a.staff] || (N[a.staff][a.time] = []), 
     N[a.staff][a.time].push(a)), s = s.ts_next;
    }
   }
  }, this.page_format = !1, this.imagesize = (e = 8.5, 1 !== d && (e *= d), 'width="' + e + 'in"');
 }
 function It(e, t) {
  var n = parseInt(e.time) - parseInt(t.time);
  return 0 !== n ? n : e.grace && !t.grace ? -1 : t.grace && !e.grace ? 1 : e.pitches[e.pitches.length - 1] < t.pitches[0] ? -1 : e.pitches[0] > t.pitches[t.pitches.length - 1] ? 1 : e.voice < t.voice ? (console.log("NOTES SORTED BY VOICE!"), 
  -1) : 1;
 }
 function Mt(e) {
  var t = "$1";
  return e.match(Q) && (t = "$1"), e.match(U) && (t = "$2"), t;
 }
 function Dt(e) {
  var t = "^";
  return /^</.test(e) && (t = "_"), t;
 }
 function jt(e) {
  for (var t = Mt("<"), n = Mt(">"), r = e.replace(/[\)\(]/g, ""), i = it(r), s = "", a = 0; a < i.length; a++) i[a] = i[a].replace(U, t), 
  i[a] = i[a].replace(Q, n), s += i[a];
  return s += '"', s = '"' + Dt(r) + s;
 }
 function Vt(e, t, n) {
  for (var r = !1, i = Mt("<"), s = Mt(">"), a = [], o = 0; o < e.length; o++) {
   var c = "", u = "x";
   if (e[o] && "x" !== e[o]) r = !0, u = e[o]; else {
    if (!n) break;
    if (!e[o] || e[o] && "x" === e[o]) continue;
   }
   if (u.match(/^\(/)) c = jt(u); else c = '"' + Dt(u) + (u = (u = u.replace(U, i)).replace(Q, s)) + '"';
   c = c.replace(J, ""), a.unshift(c);
  }
  var l = "";
  return r && (l = a.join("")), l;
 }
 function Ft(e) {
  var t = e.fingering;
  return "x" === t ? "" : Vt(it(t = t.replace(H, "")), e.staff, !1);
 }
 function qt(e) {
  var t = [];
  for (var n in e) e.hasOwnProperty(n) && t.push(n);
  return t.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), t;
 }
 function zt(e) {
  for (var t = [], n = {}, r = 0; r < e.length; r++) {
   var i = e[r];
   if (!i.grace) for (var s = 0; s < i.pitches.length; s++) {
    var a = i.pitches[s];
    t.push(a), a in n || (n[a] = []), n[a].push(i);
   }
  }
  for (r = 0; r < n.length; r++) n[r].sort(It);
  return n;
 }
 function Ht(e) {
  for (var t = zt(e), n = qt(t), r = [], i = 0; i < n.length; i++) for (var s = n[i], a = 0; a < t[s].length; a++) for (var o = t[s][a], c = it(o.fingering), u = 0; u < o.pitches.length; u++) {
   o.pitches[u] === parseInt(s) && ("x" !== c[u] ? r.push(c[u]) : r.push(""));
  }
  return r;
 }
 function Ut(e) {
  for (var t = 0, n = 0; n < e.length; n++) e[n].grace && t++;
  return t;
 }
 function $t(e) {
  if (e.size > 1 && console.log("BIGGIE"), e.grace) return Ft(e);
  var t = N[e.staff][e.time], n = Ut(t);
  if (t.length - n < 2) return Ft(e);
  t.sort(It);
  for (var r = 0, i = t[0]; i.grace; ) i = t[++r];
  return e !== i ? "" : Vt(Ht(t), e.staff, !0);
 }
 function Qt(e) {
  var t = "{", n = function(e) {
   for (var t = [], n = e.string, r = e.starts, i = e.stops, s = [], a = [], o = 0; o < r.length; o++) s.push(r[o] - r[0]), 
   a.push(i[o] - r[0]);
   for (var c = 0; c < s.length; c++) {
    var u = n.substring(s[c], a[c]);
    t.push(u);
   }
   return t;
  }(e), r = [];
  e.fingering && (r = it(e.fingering));
  for (var i = 0; i < n.length; i++) {
   if (r[i]) {
    var s = r[i];
    "x" !== (s = s.replace(W, "")) && (t += "!" + s + "!");
   }
   t += n[i];
  }
  return t += "}";
 }
 function Wt(e) {
  if (e.fingering) return !0;
  for (var t = N[e.staff][e.time], n = 0; n < t.length; n++) if (!t[n].grace && t[n].fingering) return !0;
  return !1;
 }
 function Jt(e) {
  var t = "";
  switch (e.get_phrase_break()) {
  case ",":
   t = "!shortphrase!";
   break;

  case ";":
   t = "!mediumphrase!";
   break;

  case ".":
   t = "!longphrase!";
  }
  return t;
 }
 function Xt() {
  var e = "";
  if (function() {
   if (void 0 !== o) return o;
   o = !1;
   for (var e = !1, t = !1, n = i.split("\n"), r = 0; r < n.length; r++) {
    var s = n[r];
    if (s.match(/^%%setfont-1/) && (e = !0), s.match(/^%%setfont-2/) && (t = !0), e && t) {
     o = !0;
     break;
    }
   }
   return o;
  }() || (e += Te + "\n", function() {
   if (void 0 !== n) return n;
   n = !1;
   for (var e = 0; e < O.length; e++) {
    var t = O[e];
    if (T[t].grace) {
     n = !0;
     break;
    }
   }
   return n;
  }() && (e += Se + "\n")), !function() {
   if (void 0 !== c) return c;
   c = !1;
   for (var e = i.split("\n"), t = 0; t < e.length; t++) if (e[t].match(/^%%measurenb\s+\d+/)) {
    c = !0;
    break;
   }
   return c;
  }()) {
   var t = qe("measure_number_interval");
   t && (e += "%%measurenb " + t + "\n");
  }
  for (var r = 0, s = 0; s < O.length; s++) {
   var a = O[s], u = T[a], l = "";
   if (u.grace) {
    if (l = i.substring(parseInt(r), parseInt(u.start - 1)), r = u.end + 1, e += l, 
    u.fingered_start = e.length + u.anno_start - u.start + 1, u.fingering && "x" !== u.fingering) {
     var f = it(u.fingering);
     u.fingered_start += 3 * f.length;
    }
    e += Qt(u);
   } else {
    var p = parseInt(u.start), d = parseInt(u.end);
    l = i.substring(parseInt(r), p), e += l += Jt(u), r = d, Wt(u) && (e += $t(u)), 
    u.fingered_start = e.length, e += u.string;
   }
   S[u.fingered_start] = u;
  }
  return e += i.substring(r);
 }
 function Kt() {
  p = !0, P++, console.log("RERENDERING NUMBER " + P);
  var e = new Date().getTime(), t = document.getElementById(he), n = document.getElementById(me), i = new Lt();
  s = new Abc(i);
  var a = Xt(), o = new Date().getTime(), c = o - e;
  console.log("MY LAG: " + c), document.getElementById(oe).value = a, e = new Date().getTime(), 
  r = "", s.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  k = 0, n.innerHTML = "", R = [];
  try {
   s.tosvg(y, document.getElementById(oe).value);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   t.innerHTML = r;
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
  setTimeout(function() {
   for (var e, t = document.getElementsByClassName("abcr"), n = t.length; --n >= 0; ) (e = t[n]).onclick = function() {
    pn(this);
   }, e.ondblclick = function() {
    hn(this);
   };
  }, 300), c = (o = new Date().getTime()) - e, console.log("LIB LAG: " + c), bt();
 }
 function Gt(e) {
  if (console.log(String.fromCharCode(e) + " --\x3e " + e), e === we) {
   tn();
   var t = nn();
   t.length > 0 && t[0] ? (a.set_fingering(""), a.phrase_break = "", Kt()) : a.prior_note && ((a = a.prior_note).set_fingering(""), 
   Kt()), yn(a);
  } else if (e == ke || e == Ce) sn(), w = [], a.next_note && (a = a.next_note); else if (e == Ee) sn(), 
  w = [], a.prior_note && (a = a.prior_note); else if (e == xe) dn(); else if (e == _e) !function() {
   tn();
   var e = l.pop();
   e && (e.undo_fingering_change(), a = e, Kt(), yn(a));
  }(); else {
   if (e != be) return !1;
   !function() {
    tn();
    var e = u.pop();
    e && (e.redo_fingering_change(), a = e.next_note ? e.next_note : e, Kt(), yn(a));
   }();
  }
  return yn(a), !0;
 }
 function Yt(e) {
  var t = Gt(e.keyCode);
  return t && e.preventDefault(), t;
 }
 function Zt(e) {
  return 0 == e ? ">" : "<";
 }
 function en(e) {
  for (var t = e.upper.score_fingerings; t.length > 0; ) a.update_from_score_fingerings(t) && a.next_note && (a = a.next_note);
  x && (a = a.prior_note);
 }
 function tn() {
  x = !1, b = [], w = [], Kt(), yn(a);
 }
 function nn() {
  for (var e = [], t = a.get_fingering().split(""), n = 0; n < t.length; n++) {
   var r = t[n];
   "x" === r ? e.push("") : e.push(r);
  }
  return e;
 }
 function rn() {
  for (var e = nn(); e.length; ) {
   var t = e.pop();
   t && b.unshift(t);
  }
 }
 function sn() {
  var e = !1;
  w.length > 0 && (Array.prototype.unshift.apply(b, w), function() {
   for (var e = 0; e < w.length; e++) if ("(" === w[e]) return !0;
   return !1;
  }() || (e = !0)), w = [];
  for (var t = b.length - 1; t >= 0 && /[\-\/\(]/.test(b[t]); t--) w.unshift(b.pop());
  if (0 !== b.length) {
   if (/[\-\/]/.test(b[0]) && (e = !0), x) {
    var n = nn();
    ")" === n[n.length - 1] ? n.pop() : (alert("Something wonky with parentheses."), 
    tn()), Array.prototype.unshift.apply(b, n), x = !1;
   }
   e ? a.prior_note ? (a = a.prior_note, rn()) : b.pop() : a.fingering && a.fingering.match(/x/) && rn();
   for (var r = b.join(""), i = 1; ;) try {
    var s = Abcdf_Parser.parse(r);
    x = !1, 2 === i && (x = !0), en(s);
    break;
   } catch (e) {
    if (1 === i ? b.push(")") : 2 === i ? (b.pop(), b.pop(), 0) : 3 === i && (i = 0), 
    0 == b.length) break;
    r = b.join(""), i++;
   }
   b = [], Kt(), yn(a);
  }
 }
 function an(e) {
  clearTimeout(_);
  var t = !1;
  return /[\(\)\/\-1-5]/.test(e) && (b.push(e), t = !0), "t" !== e && "T" !== e || (sn(), 
  L ? (L = !1, p && (document.body.style.backgroundColor = "white")) : (L = !0, p && (document.body.style.backgroundColor = "black")), 
  yn(a), t = !0), "," !== e && ";" !== e && "." !== e || (sn(), function(e) {
   a.phrase_break = e;
  }(e), Kt(), t = !0), _ = setTimeout(sn, ie), console.log("Done " + _), t;
 }
 function on(e) {
  var t;
  return an((t = e, null == t.which ? String.fromCharCode(t.keyCode) : 0 != t.which && 0 != t.charCode ? String.fromCharCode(t.which) : null).toLowerCase());
 }
 function cn(e, t) {
  var n = [], r = [];
  r.push("% abcDidactyl v6");
  for (var i, s = He(e), a = e.split("\n"), o = "", c = !1, u = 0; u < a.length; u++) {
   var l = a[u];
   o ? c ? n.push(l) : (i = Z.exec(l)) && (c = !0) : (i = G.exec(l)) && i[1] ? o = i[1] : n.push(l);
  }
  var f, p, d, h, m, v = Ve(), g = Ie(t);
  "replace" === qe("output") ? s[v - 1] = g : s.push(g);
  for (u = 0; u < s.length; u++) {
   var y = u + 1;
   try {
    Abcdf_Parser.parse(s[u].sequence);
   } catch (e) {
    alert("Bad abcDF parse of fingering string: " + e.message);
   }
   f = "% abcD fingering " + y + ": " + s[u].sequence, r.push(f), s[u].authority && (p = "% Authority: " + s[u].authority, 
   s[u].authority_year && (p += " (" + s[u].authority_year + ")"), r.push(p)), s[u].transcriber && (d = "% Transcriber: " + s[u].transcriber, 
   r.push(d)), s[u].transcription_date && (h = "% Transcription date: " + s[u].transcription_date, 
   r.push(h)), m = s[u].comments.split("\n");
   for (var _ = 0; _ < m.length; _++) (_ !== m.length - 1 || m[_]) && r.push("% " + m[_]);
  }
  return r.push("% abcDidactyl END"), r.join("\n") + "\n" + n.join("\n");
 }
 function un() {
  document.body.addEventListener("keydown", Yt), document.body.addEventListener("keypress", on);
 }
 function ln() {
  document.body.removeEventListener("keydown", Yt), document.body.removeEventListener("keypress", on);
 }
 function fn() {
  if (function() {
   if (!D) {
    var e = document.getElementById(ae);
    e.align = "center";
    var t = document.getElementById(oe);
    t || ((t = document.createElement("div")).id = oe, t.style.display = "none", e.appendChild(t)), 
    t.class = ce;
    var n = document.createElement(ue);
    n.id = ue, e.appendChild(n);
    var r = document.createElement(le);
    r.id = le, e.appendChild(r);
    var i = document.createElement(fe);
    i.id = fe, e.appendChild(i);
    var s = document.createElement(de);
    s.id = de, e.appendChild(s);
    var a = document.createElement(he);
    a.id = he, s.appendChild(a);
    var o = document.createElement(me);
    o.id = me, s.appendChild(o);
    for (var c = 0; c < 7; c++) s.appendChild(document.createElement("br"));
    var u = document.createElement(pe);
    u.id = pe, e.appendChild(u);
   }
  }(), Oe(), function() {
   if (!D) {
    Tt(), Ct();
    var e = F + "/download_36_x4.png", n = document.getElementById(le), r = document.createElement("table"), i = document.createElement("tbody"), s = document.createElement("tr");
    n.appendChild(r), r.appendChild(i), r.style.backgroundColor = "LightGray", r.align = "center", 
    i.appendChild(s);
    var a = document.createElement("p");
    a.setAttribute("id", "downloadify"), (u = document.createElement("td")).appendChild(a), 
    s.appendChild(u);
    var o = document.createElement("input");
    o.id = "sequence_spinner", o.min = "1", o.max = "999", o.size = 3, o.type = "number", 
    o.alt = "fingering_number", o.value = 1, o.onchange = Sn, kt(u = document.createElement("td"), "Suggestion", "sequence_prompt"), 
    u.appendChild(o), s.appendChild(u), t.preset_select || (u.style.display = "none"), 
    t.sequence && (o.value = t.sequence);
    var c = document.createElement("input");
    c.type = "image", c.src = F + "/eye.svg", c.width = "36", c.alt = "View", c.onclick = An, 
    (u = document.createElement("td")).appendChild(c), s.appendChild(u), t.hide_view && (u.style.display = "none");
    var u, l = document.createElement("input");
    l.type = "image", l.src = F + "/print.svg", l.width = "36", l.alt = "Print...", 
    l.onclick = Tn, (u = document.createElement("td")).appendChild(l), s.appendChild(u), 
    t.hide_print && (u.style.display = "none"), u = document.createElement("td");
    var f = document.createElement("input");
    f.type = "checkbox", f.value = "annotated", f.checked = M, f.id = "view_annotated", 
    f.onclick = yt;
    var p = document.createElement("label");
    p.htmlFor = "view_annotated", p.appendChild(document.createTextNode("Annotated")), 
    u.appendChild(f), t.hide_annotated && (u.style.display = "none"), u.appendChild(p), 
    s.appendChild(u), t.hide_annotated && (u.style.display = "none");
    var d = document.createElement("input");
    d.type = "image", d.src = F + "/reload.svg", d.width = "36", d.alt = "reset", d.onclick = nt, 
    (u = document.createElement("td")).appendChild(d), s.appendChild(u), t.hide_reset && (u.style.display = "none");
    var h = document.createElement("input");
    h.id = "copy_fingerings_button", h.type = "image", h.src = F + "/clipboard.svg", 
    h.width = "36", h.alt = "copy", (u = document.createElement("td")).appendChild(h), 
    s.appendChild(u), t.hide_copy ? h.style.display = "none" : new Clipboard("#copy_fingerings_button", {
     text: et
    });
    var m = document.createElement("input");
    m.type = "image", m.src = F + "/paperclip.svg", m.width = "36", m.alt = "paste", 
    m.onclick = tt, (u = document.createElement("td")).appendChild(m), s.appendChild(u), 
    t.hide_paste && (m.style.display = "none");
    var v = document.createElement("input");
    v.type = "image", v.src = F + "/globe.svg", v.width = "36", v.alt = "URL", v.onclick = vt, 
    (u = document.createElement("td")).appendChild(v), s.appendChild(u), t.url_input || (v.style.display = "none");
    var g = document.createElement("input");
    g.setAttribute("type", "file"), g.setAttribute("accept", "text/vnd.abc"), g.onchange = gt, 
    g.setAttribute("id", "file_input"), (u = document.createElement("td")).appendChild(g), 
    s.appendChild(u), t.file_input || (g.style.display = "none");
    var _ = document.createElement("input");
    _.type = "image", _.src = F + "/tags.svg", _.alt = "Metadata...", _.width = "36", 
    _.onclick = ot, (u = document.createElement("td")).appendChild(_), s.appendChild(u), 
    t.hide_metadata && (_.style.display = "none");
    var b = document.createElement("input");
    b.type = "image", b.src = F + "/zoom-out.svg", b.alt = "Zoom In", b.width = "36", 
    b.onclick = ut, (u = document.createElement("td")).appendChild(b), s.appendChild(u);
    var x = document.createElement("input");
    x.type = "image", x.src = F + "/zoom-in.svg", x.alt = "Zoom In", x.width = "36", 
    x.onclick = lt, (u = document.createElement("td")).appendChild(x), s.appendChild(u);
    var w = document.createElement("input");
    w.type = "image", w.src = F + "/cog.svg", w.alt = "Preferences...", w.width = "36", 
    w.onclick = at, (u = document.createElement("td")).appendChild(w), s.appendChild(u), 
    t.hide_prefs && (w.style.display = "none");
    var k = document.createElement("input");
    k.type = "image", k.src = F + "/info.svg", k.alt = "Help", k.width = "36", k.onclick = st, 
    (u = document.createElement("td")).appendChild(k), s.appendChild(u), Downloadify.create("downloadify", {
     filename: function() {
      return y;
     },
     data: On,
     onComplete: function() {
      alert("Your file has been saved.");
     },
     onCancel: function() {
      alert("File save has been cancelled.");
     },
     onError: function() {
      alert("File save failed!");
     },
     transparent: !1,
     swf: q + "/downloadify.swf",
     downloadImage: e,
     width: "36",
     height: "36",
     append: !1
    }), Bt(), D = !0;
   }
  }(), function() {
   Qe("preset", localStorage.getItem("preset")), Qe("output", localStorage.getItem("output")), 
   Qe("restore", localStorage.getItem("restore")), Qe("keypad", localStorage.getItem("keypad"));
   var e = localStorage.getItem("measure_number_interval");
   void 0 !== e && "" !== e || (e = z), We("measure_number_interval", e), We("default_authority", localStorage.getItem("default_authority")), 
   We("default_authority_year", localStorage.getItem("default_authority_year")), We("default_transcriber", localStorage.getItem("default_transcriber"));
  }(), !(i = document.getElementById(oe).value)) {
   var e = qe("default_url");
   e && (mt(e), i = document.getElementById(oe).value);
  }
  p = !0, i && (m = He(i), Ue(), mn(), yn(a = C[0][0][0]), un()), bt(), $(function() {
   FastClick.attach(document.body);
  });
 }
 function pn(e) {
  console.log("Processing note click....");
  var t = e.getAttribute("class");
  console.log("Click " + t);
  var n = t.split("_")[1];
  if (n in S) {
   var r = S[n];
   Rt("process_note_click", r), yn(r), a = r;
  }
 }
 function dn() {
  tn();
  var e = "";
  a.preset_fingering && (e += "Preset (recommended) fingering: " + a.get_preset_fingering() + "\n\n"), 
  e += "Please enter a fingering string for the selected note.";
  var t = a.fingering, n = window.prompt(e, t);
  try {
   if (null === n) return;
   n = (n = n.replace(X, "")).replace(H, ""), en(Abcdf_Parser.parse(n)), Kt(), yn(a);
  } catch (e) {
   alert("Bad abcDF parse of fingering string: " + e.message + e.stack);
  }
 }
 function hn(e) {
  console.log("Processing note double-click...."), pn(e), dn();
 }
 function mn() {
  var e = new Lt(), t = document.getElementById(he), n = document.getElementById(me);
  t.align = "center", s = new Abc(e), r = "", s.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  n.innerHTML = "", R = [];
  try {
   i && s.tosvg(y, i);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   i && (t.innerHTML = r, function() {
    for (var e, t, n, r, i, s = 0; s < E.length; s++) t = (e = E[s]).line, n = e.staff, 
    t in C || (C[t] = [], C[t][0] = [], C[t][1] = []), C[t][n].push(e);
    for (t = 0; t < C.length; t++) for (n = 0; n < 2; n++) (a = C[t][n]).sort(It);
    for (n = 0; n < 2; n++) for (t = 0; t < C.length; t++) {
     var a = C[t][n];
     for (s = 0; s < a.length; s++) r = a[s], i ? (i.next_note = r, r.prior_note = i, 
     i = r) : (i = r, r.prior_note = void 0);
    }
    r.next_note = void 0;
   }(), function() {
    var e;
    for (e in T) T.hasOwnProperty(e) && O.push(e);
    O.sort(function(e, t) {
     return parseInt(e) - parseInt(t);
    });
   }(), A = !0, k = 0, Ze(), Kt());
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
 }
 function vn(e, t) {
  for (var n = document.getElementsByClassName(e), r = n.length; --r >= 0; ) n[r].setAttribute("color", t);
 }
 function gn(e) {
  var t, n = I.length;
  for (t = 0; t < n; t++) vn(I[t], e);
 }
 function yn(e) {
  var t = e.fingered_start;
  0 != I.length && (gn("black"), I = []), I.push("e_" + t), L ? 0 === e.staff ? gn("dodgerblue") : gn("red") : 1 === e.staff ? gn("dodgerblue") : gn("red");
  var n = "line_" + e.line, r = document.getElementById(n);
  if (!function(e) {
   var t = $(e), n = $(window), r = document.getElementById(pe), i = n.scrollTop(), s = i + n.height() - r.offsetHeight, a = t.offset().top;
   return a + t.height() <= s && a >= i;
  }(r)) {
   r.scrollIntoView(!1);
   var i = document.getElementById(pe), s = document.body.scrollTop;
   window.scrollTo(0, s + i.offsetHeight);
  }
 }
 function _n(e) {
  e || (e = i);
  for (var t = e.split("\n"), n = 0; n < t.length; n++) {
   var r = t[n];
   if (/^\s*X:/.test(r)) {
    var s = r.split(":");
    return 2 != s.length ? "" : s[1].trim();
   }
  }
  return "";
 }
 function bn(e) {
  var t = [];
  e.fingering && (t = it(e.fingering));
  for (var n = e.fingering || "", r = t.length; r < e.size; r++) n += "x";
  return n += e.phrase_break;
 }
 function xn(e) {
  if (e.grace) return bn(e);
  var t = N[e.staff][e.time], n = Ut(t);
  if (t.length - n < 2) return bn(e);
  t.sort(It);
  for (var r = 0, i = t[0]; i.grace; ) i = t[++r];
  if (e !== i) return "";
  var s = Ht(t), a = "";
  for (r = 0; r < s.length; r++) s[r] ? a += s[r] : a += "x";
  return a;
 }
 function wn(e, t) {
  for (var n = [], r = t, i = e.split(""), s = 0; s < i.length; s++) {
   var a = i[s];
   a.match(W) ? a !== r && (n.push(a), r = a) : n.push(a);
  }
  return n.join("");
 }
 function kn(e, t) {
  for (var n = C[t][e], r = "", i = 0; i < n.length; i++) {
   r += xn(n[i]);
  }
  return r;
 }
 function En(e, t) {
  let n = K.exec(e);
  return n && n[1] ? n[1] : t;
 }
 function Cn() {
  for (var e = "", t = "", n = Zt(0), r = Zt(1), i = 0; i < C.length; i++) {
   var s = kn(0, i);
   if (s && (n = En(s = wn(s, n), n), e += s, i < C.length - 1 && (e += "&")), C[i][1]) {
    var a = kn(1, i);
    a && (r = En(a = wn(a, r), r), t += a, i < C.length - 1 && (t += "&"));
   }
  }
  return e + "@" + t;
 }
 function Tn() {
  console.log("Print that score.");
  var e = window.open("", "print_window");
  e.document.write(r), e.document.close(), e.focus(), e.print(), e.close();
 }
 function Sn() {
  document.getElementById(oe).value = i, Oe(), i = document.getElementById(oe).value, 
  mn(), yn(a = C[0][0][0]), un();
 }
 function On() {
  return cn(M ? Xt() : i, !0);
 }
 function An() {
  var e = On();
  window.open().document.write("<pre>" + e + "</pre>");
 }
 function Nn() {
  return Cn();
 }
 function Bn(e) {
  var t = function(e) {
   try {
    Abcdf_Parser.parse(e);
   } catch (e) {
    return "Bad abcDF parse of string: " + e.message + e.stack;
   }
   var t = 0, n = qe("validate");
   if ("complete" === n) t = e.split("x").length - 1; else if ("none" === n) t = 0; else if ("auto" === n) return "Validation of autofill is not yet implemented.";
   return 1 === t ? "One note is missing a fingering annotation." : t > 1 ? t + " notes are missing fingering annotations." : "";
  }(e);
  return !t || (alert(t), !1);
 }
 function Rn() {
  var e = M;
  M = !1;
  var t = On();
  return M = e, t;
 }
 return this.renderUI = function(e) {
  !function(e) {
   t || (t = e).experiment_id || (t.experiment_id = "");
  }(e), fn();
  var n = qe("qualtrics");
  n && (n.disableNextButton(), n.disablePreviousButton());
 }, this.getXValue = _n, this.getAuthority = function() {
  return qe("include_pii") ? Le("authority") : "";
 }, this.getAuthorityYear = function() {
  return Le("authority_year");
 }, this.getTranscriber = function() {
  return qe("include_pii") ? Le("transcriber") : "";
 }, this.getComments = function() {
  return Le("comments");
 }, this.getEnteredCollection = Nn, this.getEnteredAbcDF = Nn, this.getEnteredAbcD = Rn, 
 this.getValidatedCollection = function() {
  var e = Cn();
  return Bn(e) ? e : "";
 }, this.getValidatedAbcD = function() {
  if (Bn(Cn())) {
   var e = On();
   return /^\s*X:/m.test(e) ? /^% abcDidactyl/m.test(e) ? e : (alert("File is not valid abcD."), 
   "") : (alert("File is not valid abc."), "");
  }
  return "";
 }, this.setEnteredCollection = function(e) {
  a = C[0][0][0];
  var t = Ve(), n = Ie(!0);
  n.sequence = e, Ye(Pe(t), n), Kt(), yn(a);
 }, this.handleKeys = un, this.unhandleKeys = ln, this;
}

!function(e) {
 var t = function(e) {
  function t() {
   e.apply(this, arguments);
  }
  return __extends(t, e), Object.defineProperty(t.prototype, "text", {
   get: function() {
    return template.ko.html;
   },
   set: function(e) {
    template.ko.html = e;
   },
   enumerable: !0,
   configurable: !0
  }), t;
 }(e.SurveyTemplateTextBase);
 e.SurveyTemplateText = t;
}(Survey || (Survey = {})), function(e) {
 var t = this || (0, eval)("this"), n = t.document, r = t.navigator, i = t.jQuery, s = t.JSON;
 !function(e) {
  "function" == typeof define && define.amd ? define([ "exports", "require" ], e) : "object" == typeof exports && "object" == typeof module ? e(module.exports || exports) : e(t.ko = {});
 }(function(a, o) {
  function c(e, t) {
   return (null === e || typeof e in w) && e === t;
  }
  function u(t, n) {
   var r;
   return function() {
    r || (r = x.a.setTimeout(function() {
     r = e, t();
    }, n));
   };
  }
  function l(e, t) {
   var n;
   return function() {
    clearTimeout(n), n = x.a.setTimeout(e, t);
   };
  }
  function f(e, t) {
   t && t !== k ? "beforeChange" === t ? this.Kb(e) : this.Ha(e, t) : this.Lb(e);
  }
  function p(e, t) {
   null !== t && t.k && t.k();
  }
  function d(e, t) {
   var n = this.Hc, r = n[O];
   r.R || (this.lb && this.Ma[t] ? (n.Pb(t, e, this.Ma[t]), this.Ma[t] = null, --this.lb) : r.r[t] || n.Pb(t, e, r.s ? {
    ia: e
   } : n.uc(e)));
  }
  function h(e, t, n, r) {
   x.d[e] = {
    init: function(e, i, s, a, o) {
     var c, u;
     return x.m(function() {
      var s = x.a.c(i()), a = !n != !s, l = !u;
      (l || t || a !== c) && (l && x.va.Aa() && (u = x.a.ua(x.f.childNodes(e), !0)), a ? (l || x.f.da(e, x.a.ua(u)), 
      x.eb(r ? r(o, s) : o, e)) : x.f.xa(e), c = a);
     }, null, {
      i: e
     }), {
      controlsDescendantBindings: !0
     };
    }
   }, x.h.ta[e] = !1, x.f.Z[e] = !0;
  }
  var m, v, g, y, _, b, x = void 0 !== a ? a : {};
  x.b = function(e, t) {
   for (var n = e.split("."), r = x, i = 0; i < n.length - 1; i++) r = r[n[i]];
   r[n[n.length - 1]] = t;
  }, x.G = function(e, t, n) {
   e[t] = n;
  }, x.version = "3.4.0", x.b("version", x.version), x.options = {
   deferUpdates: !1,
   useOnlyNativeEvents: !1
  }, x.a = function() {
   function a(e, t) {
    for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
   }
   function o(e, t) {
    if (t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
   }
   function c(e, t) {
    return e.__proto__ = t, e;
   }
   function u(e, t, n, r) {
    var i = e[t].match(v) || [];
    x.a.q(n.match(v), function(e) {
     x.a.pa(i, e, r);
    }), e[t] = i.join(" ");
   }
   var l = {
    __proto__: []
   } instanceof Array, f = "function" == typeof Symbol, p = {}, d = {};
   p[r && /Firefox\/2/i.test(r.userAgent) ? "KeyboardEvent" : "UIEvents"] = [ "keyup", "keydown", "keypress" ], 
   p.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), 
   a(p, function(e, t) {
    if (t.length) for (var n = 0, r = t.length; n < r; n++) d[t[n]] = e;
   });
   var h = {
    propertychange: !0
   }, m = n && function() {
    for (var t = 3, r = n.createElement("div"), i = r.getElementsByTagName("i"); r.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e", 
    i[0]; ) ;
    return 4 < t ? t : e;
   }(), v = /\S+/g;
   return {
    cc: [ "authenticity_token", /^__RequestVerificationToken(_.*)?$/ ],
    q: function(e, t) {
     for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
    },
    o: function(e, t) {
     if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);
     for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
     return -1;
    },
    Sb: function(e, t, n) {
     for (var r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r)) return e[r];
     return null;
    },
    La: function(e, t) {
     var n = x.a.o(e, t);
     0 < n ? e.splice(n, 1) : 0 === n && e.shift();
    },
    Tb: function(e) {
     for (var t = [], n = 0, r = (e = e || []).length; n < r; n++) 0 > x.a.o(t, e[n]) && t.push(e[n]);
     return t;
    },
    fb: function(e, t) {
     for (var n = [], r = 0, i = (e = e || []).length; r < i; r++) n.push(t(e[r], r));
     return n;
    },
    Ka: function(e, t) {
     for (var n = [], r = 0, i = (e = e || []).length; r < i; r++) t(e[r], r) && n.push(e[r]);
     return n;
    },
    ra: function(e, t) {
     if (t instanceof Array) e.push.apply(e, t); else for (var n = 0, r = t.length; n < r; n++) e.push(t[n]);
     return e;
    },
    pa: function(e, t, n) {
     var r = x.a.o(x.a.zb(e), t);
     0 > r ? n && e.push(t) : n || e.splice(r, 1);
    },
    ka: l,
    extend: o,
    Xa: c,
    Ya: l ? c : o,
    D: a,
    Ca: function(e, t) {
     if (!e) return e;
     var n, r = {};
     for (n in e) e.hasOwnProperty(n) && (r[n] = t(e[n], n, e));
     return r;
    },
    ob: function(e) {
     for (;e.firstChild; ) x.removeNode(e.firstChild);
    },
    jc: function(e) {
     for (var t = ((e = x.a.V(e))[0] && e[0].ownerDocument || n).createElement("div"), r = 0, i = e.length; r < i; r++) t.appendChild(x.$(e[r]));
     return t;
    },
    ua: function(e, t) {
     for (var n = 0, r = e.length, i = []; n < r; n++) {
      var s = e[n].cloneNode(!0);
      i.push(t ? x.$(s) : s);
     }
     return i;
    },
    da: function(e, t) {
     if (x.a.ob(e), t) for (var n = 0, r = t.length; n < r; n++) e.appendChild(t[n]);
    },
    qc: function(e, t) {
     var n = e.nodeType ? [ e ] : e;
     if (0 < n.length) {
      for (var r = n[0], i = r.parentNode, s = 0, a = t.length; s < a; s++) i.insertBefore(t[s], r);
      for (s = 0, a = n.length; s < a; s++) x.removeNode(n[s]);
     }
    },
    za: function(e, t) {
     if (e.length) {
      for (t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t; ) e.splice(0, 1);
      for (;1 < e.length && e[e.length - 1].parentNode !== t; ) e.length--;
      if (1 < e.length) {
       var n = e[0], r = e[e.length - 1];
       for (e.length = 0; n !== r; ) e.push(n), n = n.nextSibling;
       e.push(r);
      }
     }
     return e;
    },
    sc: function(e, t) {
     7 > m ? e.setAttribute("selected", t) : e.selected = t;
    },
    $a: function(t) {
     return null === t || t === e ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
    nd: function(e, t) {
     return e = e || "", !(t.length > e.length) && e.substring(0, t.length) === t;
    },
    Mc: function(e, t) {
     if (e === t) return !0;
     if (11 === e.nodeType) return !1;
     if (t.contains) return t.contains(3 === e.nodeType ? e.parentNode : e);
     if (t.compareDocumentPosition) return 16 == (16 & t.compareDocumentPosition(e));
     for (;e && e != t; ) e = e.parentNode;
     return !!e;
    },
    nb: function(e) {
     return x.a.Mc(e, e.ownerDocument.documentElement);
    },
    Qb: function(e) {
     return !!x.a.Sb(e, x.a.nb);
    },
    A: function(e) {
     return e && e.tagName && e.tagName.toLowerCase();
    },
    Wb: function(e) {
     return x.onError ? function() {
      try {
       return e.apply(this, arguments);
      } catch (e) {
       throw x.onError && x.onError(e), e;
      }
     } : e;
    },
    setTimeout: function(e, t) {
     return setTimeout(x.a.Wb(e), t);
    },
    $b: function(e) {
     setTimeout(function() {
      throw x.onError && x.onError(e), e;
     }, 0);
    },
    p: function(e, t, n) {
     var r = x.a.Wb(n);
     if (n = m && h[t], x.options.useOnlyNativeEvents || n || !i) if (n || "function" != typeof e.addEventListener) {
      if (void 0 === e.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
      var s = function(t) {
       r.call(e, t);
      }, a = "on" + t;
      e.attachEvent(a, s), x.a.F.oa(e, function() {
       e.detachEvent(a, s);
      });
     } else e.addEventListener(t, r, !1); else i(e).bind(t, r);
    },
    Da: function(e, r) {
     if (!e || !e.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
     var s;
     if (s = !("input" !== x.a.A(e) || !e.type || "click" != r.toLowerCase()) && ("checkbox" == (s = e.type) || "radio" == s), 
     x.options.useOnlyNativeEvents || !i || s) if ("function" == typeof n.createEvent) {
      if ("function" != typeof e.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
      (s = n.createEvent(d[r] || "HTMLEvents")).initEvent(r, !0, !0, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), 
      e.dispatchEvent(s);
     } else if (s && e.click) e.click(); else {
      if (void 0 === e.fireEvent) throw Error("Browser doesn't support triggering events");
      e.fireEvent("on" + r);
     } else i(e).trigger(r);
    },
    c: function(e) {
     return x.H(e) ? e() : e;
    },
    zb: function(e) {
     return x.H(e) ? e.t() : e;
    },
    bb: function(e, t, n) {
     var r;
     t && ("object" == typeof e.classList ? (r = e.classList[n ? "add" : "remove"], x.a.q(t.match(v), function(t) {
      r.call(e.classList, t);
     })) : "string" == typeof e.className.baseVal ? u(e.className, "baseVal", t, n) : u(e, "className", t, n));
    },
    Za: function(t, n) {
     var r = x.a.c(n);
     null !== r && r !== e || (r = "");
     var i = x.f.firstChild(t);
     !i || 3 != i.nodeType || x.f.nextSibling(i) ? x.f.da(t, [ t.ownerDocument.createTextNode(r) ]) : i.data = r, 
     x.a.Rc(t);
    },
    rc: function(e, t) {
     if (e.name = t, 7 >= m) try {
      e.mergeAttributes(n.createElement("<input name='" + e.name + "'/>"), !1);
     } catch (e) {}
    },
    Rc: function(e) {
     9 <= m && (e = 1 == e.nodeType ? e : e.parentNode).style && (e.style.zoom = e.style.zoom);
    },
    Nc: function(e) {
     if (m) {
      var t = e.style.width;
      e.style.width = 0, e.style.width = t;
     }
    },
    hd: function(e, t) {
     e = x.a.c(e), t = x.a.c(t);
     for (var n = [], r = e; r <= t; r++) n.push(r);
     return n;
    },
    V: function(e) {
     for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
     return t;
    },
    Yb: function(e) {
     return f ? Symbol(e) : e;
    },
    rd: 6 === m,
    sd: 7 === m,
    C: m,
    ec: function(e, t) {
     for (var n = x.a.V(e.getElementsByTagName("input")).concat(x.a.V(e.getElementsByTagName("textarea"))), r = "string" == typeof t ? function(e) {
      return e.name === t;
     } : function(e) {
      return t.test(e.name);
     }, i = [], s = n.length - 1; 0 <= s; s--) r(n[s]) && i.push(n[s]);
     return i;
    },
    ed: function(e) {
     return "string" == typeof e && (e = x.a.$a(e)) ? s && s.parse ? s.parse(e) : new Function("return " + e)() : null;
    },
    Eb: function(e, t, n) {
     if (!s || !s.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
     return s.stringify(x.a.c(e), t, n);
    },
    fd: function(e, t, r) {
     var i = (r = r || {}).params || {}, s = r.includeFields || this.cc, o = e;
     if ("object" == typeof e && "form" === x.a.A(e)) {
      o = e.action;
      for (var c = s.length - 1; 0 <= c; c--) for (var u = x.a.ec(e, s[c]), l = u.length - 1; 0 <= l; l--) i[u[l].name] = u[l].value;
     }
     t = x.a.c(t);
     var f = n.createElement("form");
     for (var p in f.style.display = "none", f.action = o, f.method = "post", t) (e = n.createElement("input")).type = "hidden", 
     e.name = p, e.value = x.a.Eb(x.a.c(t[p])), f.appendChild(e);
     a(i, function(e, t) {
      var r = n.createElement("input");
      r.type = "hidden", r.name = e, r.value = t, f.appendChild(r);
     }), n.body.appendChild(f), r.submitter ? r.submitter(f) : f.submit(), setTimeout(function() {
      f.parentNode.removeChild(f);
     }, 0);
    }
   };
  }(), x.b("utils", x.a), x.b("utils.arrayForEach", x.a.q), x.b("utils.arrayFirst", x.a.Sb), 
  x.b("utils.arrayFilter", x.a.Ka), x.b("utils.arrayGetDistinctValues", x.a.Tb), x.b("utils.arrayIndexOf", x.a.o), 
  x.b("utils.arrayMap", x.a.fb), x.b("utils.arrayPushAll", x.a.ra), x.b("utils.arrayRemoveItem", x.a.La), 
  x.b("utils.extend", x.a.extend), x.b("utils.fieldsIncludedWithJsonPost", x.a.cc), 
  x.b("utils.getFormFields", x.a.ec), x.b("utils.peekObservable", x.a.zb), x.b("utils.postJson", x.a.fd), 
  x.b("utils.parseJson", x.a.ed), x.b("utils.registerEventHandler", x.a.p), x.b("utils.stringifyJson", x.a.Eb), 
  x.b("utils.range", x.a.hd), x.b("utils.toggleDomNodeCssClass", x.a.bb), x.b("utils.triggerEvent", x.a.Da), 
  x.b("utils.unwrapObservable", x.a.c), x.b("utils.objectForEach", x.a.D), x.b("utils.addOrRemoveItem", x.a.pa), 
  x.b("utils.setTextContent", x.a.Za), x.b("unwrap", x.a.c), Function.prototype.bind || (Function.prototype.bind = function(e) {
   var t = this;
   if (1 === arguments.length) return function() {
    return t.apply(e, arguments);
   };
   var n = Array.prototype.slice.call(arguments, 1);
   return function() {
    var r = n.slice(0);
    return r.push.apply(r, arguments), t.apply(e, r);
   };
  }), x.a.e = new function() {
   function t(t, s) {
    var a = t[r];
    if (!a || "null" === a || !i[a]) {
     if (!s) return e;
     a = t[r] = "ko" + n++, i[a] = {};
    }
    return i[a];
   }
   var n = 0, r = "__ko__" + new Date().getTime(), i = {};
   return {
    get: function(n, r) {
     var i = t(n, !1);
     return i === e ? e : i[r];
    },
    set: function(n, r, i) {
     i === e && t(n, !1) === e || (t(n, !0)[r] = i);
    },
    clear: function(e) {
     var t = e[r];
     return !!t && (delete i[t], e[r] = null, !0);
    },
    I: function() {
     return n++ + r;
    }
   };
  }(), x.b("utils.domData", x.a.e), x.b("utils.domData.clear", x.a.e.clear), x.a.F = new function() {
   function t(t, n) {
    var i = x.a.e.get(t, r);
    return i === e && n && (i = [], x.a.e.set(t, r, i)), i;
   }
   function n(e) {
    if (r = t(e, !1)) for (var r = r.slice(0), i = 0; i < r.length; i++) r[i](e);
    if (x.a.e.clear(e), x.a.F.cleanExternalData(e), a[e.nodeType]) for (r = e.firstChild; e = r; ) r = e.nextSibling, 
    8 === e.nodeType && n(e);
   }
   var r = x.a.e.I(), s = {
    1: !0,
    8: !0,
    9: !0
   }, a = {
    1: !0,
    9: !0
   };
   return {
    oa: function(e, n) {
     if ("function" != typeof n) throw Error("Callback must be a function");
     t(e, !0).push(n);
    },
    pc: function(n, i) {
     var s = t(n, !1);
     s && (x.a.La(s, i), 0 == s.length && x.a.e.set(n, r, e));
    },
    $: function(e) {
     if (s[e.nodeType] && (n(e), a[e.nodeType])) {
      var t = [];
      x.a.ra(t, e.getElementsByTagName("*"));
      for (var r = 0, i = t.length; r < i; r++) n(t[r]);
     }
     return e;
    },
    removeNode: function(e) {
     x.$(e), e.parentNode && e.parentNode.removeChild(e);
    },
    cleanExternalData: function(e) {
     i && "function" == typeof i.cleanData && i.cleanData([ e ]);
    }
   };
  }(), x.$ = x.a.F.$, x.removeNode = x.a.F.removeNode, x.b("cleanNode", x.$), x.b("removeNode", x.removeNode), 
  x.b("utils.domNodeDisposal", x.a.F), x.b("utils.domNodeDisposal.addDisposeCallback", x.a.F.oa), 
  x.b("utils.domNodeDisposal.removeDisposeCallback", x.a.F.pc), m = [ 0, "", "" ], 
  _ = {
   thead: v = [ 1, "<table>", "</table>" ],
   tbody: v,
   tfoot: v,
   tr: [ 2, "<table><tbody>", "</tbody></table>" ],
   td: g = [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
   th: g,
   option: y = [ 1, "<select multiple='multiple'>", "</select>" ],
   optgroup: y
  }, b = 8 >= x.a.C, x.a.ma = function(e, r) {
   var s;
   if (i) {
    if (i.parseHTML) s = i.parseHTML(e, r) || []; else if ((s = i.clean([ e ], r)) && s[0]) {
     for (var a = s[0]; a.parentNode && 11 !== a.parentNode.nodeType; ) a = a.parentNode;
     a.parentNode && a.parentNode.removeChild(a);
    }
   } else {
    (s = r) || (s = n), a = s.parentWindow || s.defaultView || t;
    var o, c = x.a.$a(e).toLowerCase(), u = s.createElement("div");
    for (o = (c = c.match(/^<([a-z]+)[ >]/)) && _[c[1]] || m, c = o[0], o = "ignored<div>" + o[1] + e + o[2] + "</div>", 
    "function" == typeof a.innerShiv ? u.appendChild(a.innerShiv(o)) : (b && s.appendChild(u), 
    u.innerHTML = o, b && u.parentNode.removeChild(u)); c--; ) u = u.lastChild;
    s = x.a.V(u.lastChild.childNodes);
   }
   return s;
  }, x.a.Cb = function(t, n) {
   if (x.a.ob(t), null !== (n = x.a.c(n)) && n !== e) if ("string" != typeof n && (n = n.toString()), 
   i) i(t).html(n); else for (var r = x.a.ma(n, t.ownerDocument), s = 0; s < r.length; s++) t.appendChild(r[s]);
  }, x.b("utils.parseHtmlFragment", x.a.ma), x.b("utils.setHtml", x.a.Cb), x.M = function() {
   var t = {};
   return {
    wb: function(e) {
     if ("function" != typeof e) throw Error("You can only pass a function to ko.memoization.memoize()");
     var n = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
     return t[n] = e, "\x3c!--[ko_memo:" + n + "]--\x3e";
    },
    xc: function(n, r) {
     var i = t[n];
     if (i === e) throw Error("Couldn't find any memo with ID " + n + ". Perhaps it's already been unmemoized.");
     try {
      return i.apply(null, r || []), !0;
     } finally {
      delete t[n];
     }
    },
    yc: function(e, t) {
     var n = [];
     !function e(t, n) {
      if (t) if (8 == t.nodeType) null != (r = x.M.lc(t.nodeValue)) && n.push({
       Lc: t,
       cd: r
      }); else if (1 == t.nodeType) for (var r = 0, i = t.childNodes, s = i.length; r < s; r++) e(i[r], n);
     }(e, n);
     for (var r = 0, i = n.length; r < i; r++) {
      var s = n[r].Lc, a = [ s ];
      t && x.a.ra(a, t), x.M.xc(n[r].cd, a), s.nodeValue = "", s.parentNode && s.parentNode.removeChild(s);
     }
    },
    lc: function(e) {
     return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null;
    }
   };
  }(), x.b("memoization", x.M), x.b("memoization.memoize", x.M.wb), x.b("memoization.unmemoize", x.M.xc), 
  x.b("memoization.parseMemoText", x.M.lc), x.b("memoization.unmemoizeDomNodeAndDescendants", x.M.yc), 
  x.Y = function() {
   function e() {
    if (s) for (var e, t = s, n = 0; o < s; ) if (e = i[o++]) {
     if (o > t) {
      if (5e3 <= ++n) {
       o = s, x.a.$b(Error("'Too much recursion' after processing " + n + " task groups."));
       break;
      }
      t = s;
     }
     try {
      e();
     } catch (e) {
      x.a.$b(e);
     }
    }
   }
   function r() {
    e(), o = s = i.length = 0;
   }
   var i = [], s = 0, a = 1, o = 0;
   return {
    scheduler: t.MutationObserver ? function(e) {
     var t = n.createElement("div");
     return new MutationObserver(e).observe(t, {
      attributes: !0
     }), function() {
      t.classList.toggle("foo");
     };
    }(r) : n && "onreadystatechange" in n.createElement("script") ? function(e) {
     var t = n.createElement("script");
     t.onreadystatechange = function() {
      t.onreadystatechange = null, n.documentElement.removeChild(t), t = null, e();
     }, n.documentElement.appendChild(t);
    } : function(e) {
     setTimeout(e, 0);
    },
    Wa: function(e) {
     return s || x.Y.scheduler(r), i[s++] = e, a++;
    },
    cancel: function(e) {
     (e -= a - s) >= o && e < s && (i[e] = null);
    },
    resetForTesting: function() {
     var e = s - o;
     return o = s = i.length = 0, e;
    },
    md: e
   };
  }(), x.b("tasks", x.Y), x.b("tasks.schedule", x.Y.Wa), x.b("tasks.runEarly", x.Y.md), 
  x.ya = {
   throttle: function(e, t) {
    e.throttleEvaluation = t;
    var n = null;
    return x.B({
     read: e,
     write: function(r) {
      clearTimeout(n), n = x.a.setTimeout(function() {
       e(r);
      }, t);
     }
    });
   },
   rateLimit: function(e, t) {
    var n, r, i;
    "number" == typeof t ? n = t : (n = t.timeout, r = t.method), e.cb = !1, i = "notifyWhenChangesStop" == r ? l : u, 
    e.Ta(function(e) {
     return i(e, n);
    });
   },
   deferred: function(t, n) {
    if (!0 !== n) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
    t.cb || (t.cb = !0, t.Ta(function(n) {
     var r;
     return function() {
      x.Y.cancel(r), r = x.Y.Wa(n), t.notifySubscribers(e, "dirty");
     };
    }));
   },
   notify: function(e, t) {
    e.equalityComparer = "always" == t ? null : c;
   }
  };
  var w = {
   undefined: 1,
   boolean: 1,
   number: 1,
   string: 1
  };
  x.b("extenders", x.ya), x.vc = function(e, t, n) {
   this.ia = e, this.gb = t, this.Kc = n, this.R = !1, x.G(this, "dispose", this.k);
  }, x.vc.prototype.k = function() {
   this.R = !0, this.Kc();
  }, x.J = function() {
   x.a.Ya(this, E), E.rb(this);
  };
  var k = "change", E = {
   rb: function(e) {
    e.K = {}, e.Nb = 1;
   },
   X: function(e, t, n) {
    var r = this;
    n = n || k;
    var i = new x.vc(r, t ? e.bind(t) : e, function() {
     x.a.La(r.K[n], i), r.Ia && r.Ia(n);
    });
    return r.sa && r.sa(n), r.K[n] || (r.K[n] = []), r.K[n].push(i), i;
   },
   notifySubscribers: function(e, t) {
    if ((t = t || k) === k && this.zc(), this.Pa(t)) try {
     x.l.Ub();
     for (var n, r = this.K[t].slice(0), i = 0; n = r[i]; ++i) n.R || n.gb(e);
    } finally {
     x.l.end();
    }
   },
   Na: function() {
    return this.Nb;
   },
   Uc: function(e) {
    return this.Na() !== e;
   },
   zc: function() {
    ++this.Nb;
   },
   Ta: function(e) {
    var t, n, r, i = this, s = x.H(i);
    i.Ha || (i.Ha = i.notifySubscribers, i.notifySubscribers = f);
    var a = e(function() {
     i.Mb = !1, s && r === i && (r = i()), t = !1, i.tb(n, r) && i.Ha(n = r);
    });
    i.Lb = function(e) {
     i.Mb = t = !0, r = e, a();
    }, i.Kb = function(e) {
     t || (n = e, i.Ha(e, "beforeChange"));
    };
   },
   Pa: function(e) {
    return this.K[e] && this.K[e].length;
   },
   Sc: function(e) {
    if (e) return this.K[e] && this.K[e].length || 0;
    var t = 0;
    return x.a.D(this.K, function(e, n) {
     "dirty" !== e && (t += n.length);
    }), t;
   },
   tb: function(e, t) {
    return !this.equalityComparer || !this.equalityComparer(e, t);
   },
   extend: function(e) {
    var t = this;
    return e && x.a.D(e, function(e, n) {
     var r = x.ya[e];
     "function" == typeof r && (t = r(t, n) || t);
    }), t;
   }
  };
  x.G(E, "subscribe", E.X), x.G(E, "extend", E.extend), x.G(E, "getSubscriptionsCount", E.Sc), 
  x.a.ka && x.a.Xa(E, Function.prototype), x.J.fn = E, x.hc = function(e) {
   return null != e && "function" == typeof e.X && "function" == typeof e.notifySubscribers;
  }, x.b("subscribable", x.J), x.b("isSubscribable", x.hc), x.va = x.l = function() {
   function e(e) {
    r.push(n), n = e;
   }
   function t() {
    n = r.pop();
   }
   var n, r = [], i = 0;
   return {
    Ub: e,
    end: t,
    oc: function(e) {
     if (n) {
      if (!x.hc(e)) throw Error("Only subscribable things can act as dependencies");
      n.gb.call(n.Gc, e, e.Cc || (e.Cc = ++i));
     }
    },
    w: function(n, r, i) {
     try {
      return e(), n.apply(r, i || []);
     } finally {
      t();
     }
    },
    Aa: function() {
     if (n) return n.m.Aa();
    },
    Sa: function() {
     if (n) return n.Sa;
    }
   };
  }(), x.b("computedContext", x.va), x.b("computedContext.getDependenciesCount", x.va.Aa), 
  x.b("computedContext.isInitial", x.va.Sa), x.b("ignoreDependencies", x.qd = x.l.w);
  var C = x.a.Yb("_latestValue");
  x.N = function(e) {
   function t() {
    return 0 < arguments.length ? (t.tb(t[C], arguments[0]) && (t.ga(), t[C] = arguments[0], 
    t.fa()), this) : (x.l.oc(t), t[C]);
   }
   return t[C] = e, x.a.ka || x.a.extend(t, x.J.fn), x.J.fn.rb(t), x.a.Ya(t, T), x.options.deferUpdates && x.ya.deferred(t, !0), 
   t;
  };
  var T = {
   equalityComparer: c,
   t: function() {
    return this[C];
   },
   fa: function() {
    this.notifySubscribers(this[C]);
   },
   ga: function() {
    this.notifySubscribers(this[C], "beforeChange");
   }
  };
  x.a.ka && x.a.Xa(T, x.J.fn);
  var S = x.N.gd = "__ko_proto__";
  T[S] = x.N, x.Oa = function(t, n) {
   return null !== t && t !== e && t[S] !== e && (t[S] === n || x.Oa(t[S], n));
  }, x.H = function(e) {
   return x.Oa(e, x.N);
  }, x.Ba = function(e) {
   return !!("function" == typeof e && e[S] === x.N || "function" == typeof e && e[S] === x.B && e.Vc);
  }, x.b("observable", x.N), x.b("isObservable", x.H), x.b("isWriteableObservable", x.Ba), 
  x.b("isWritableObservable", x.Ba), x.b("observable.fn", T), x.G(T, "peek", T.t), 
  x.G(T, "valueHasMutated", T.fa), x.G(T, "valueWillMutate", T.ga), x.la = function(e) {
   if ("object" != typeof (e = e || []) || !("length" in e)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
   return e = x.N(e), x.a.Ya(e, x.la.fn), e.extend({
    trackArrayChanges: !0
   });
  }, x.la.fn = {
   remove: function(e) {
    for (var t = this.t(), n = [], r = "function" != typeof e || x.H(e) ? function(t) {
     return t === e;
    } : e, i = 0; i < t.length; i++) {
     var s = t[i];
     r(s) && (0 === n.length && this.ga(), n.push(s), t.splice(i, 1), i--);
    }
    return n.length && this.fa(), n;
   },
   removeAll: function(t) {
    if (t === e) {
     var n = this.t(), r = n.slice(0);
     return this.ga(), n.splice(0, n.length), this.fa(), r;
    }
    return t ? this.remove(function(e) {
     return 0 <= x.a.o(t, e);
    }) : [];
   },
   destroy: function(e) {
    var t = this.t(), n = "function" != typeof e || x.H(e) ? function(t) {
     return t === e;
    } : e;
    this.ga();
    for (var r = t.length - 1; 0 <= r; r--) n(t[r]) && (t[r]._destroy = !0);
    this.fa();
   },
   destroyAll: function(t) {
    return t === e ? this.destroy(function() {
     return !0;
    }) : t ? this.destroy(function(e) {
     return 0 <= x.a.o(t, e);
    }) : [];
   },
   indexOf: function(e) {
    var t = this();
    return x.a.o(t, e);
   },
   replace: function(e, t) {
    var n = this.indexOf(e);
    0 <= n && (this.ga(), this.t()[n] = t, this.fa());
   }
  }, x.a.ka && x.a.Xa(x.la.fn, x.N.fn), x.a.q("pop push reverse shift sort splice unshift".split(" "), function(e) {
   x.la.fn[e] = function() {
    var t = this.t();
    this.ga(), this.Vb(t, e, arguments);
    var n = t[e].apply(t, arguments);
    return this.fa(), n === t ? this : n;
   };
  }), x.a.q([ "slice" ], function(e) {
   x.la.fn[e] = function() {
    var t = this();
    return t[e].apply(t, arguments);
   };
  }), x.b("observableArray", x.la), x.ya.trackArrayChanges = function(e, t) {
   function n() {
    if (!i) {
     i = !0;
     var t = e.notifySubscribers;
     e.notifySubscribers = function(e, n) {
      return n && n !== k || ++a, t.apply(this, arguments);
     };
     var n = [].concat(e.t() || []);
     s = null, r = e.X(function(t) {
      var r;
      t = [].concat(t || []), e.Pa("arrayChange") && ((!s || 1 < a) && (s = x.a.ib(n, t, e.hb)), 
      r = s), n = t, s = null, a = 0, r && r.length && e.notifySubscribers(r, "arrayChange");
     });
    }
   }
   if (e.hb = {}, t && "object" == typeof t && x.a.extend(e.hb, t), e.hb.sparse = !0, 
   !e.Vb) {
    var r, i = !1, s = null, a = 0, o = e.sa, c = e.Ia;
    e.sa = function(t) {
     o && o.call(e, t), "arrayChange" === t && n();
    }, e.Ia = function(t) {
     c && c.call(e, t), "arrayChange" !== t || e.Pa("arrayChange") || (r.k(), i = !1);
    }, e.Vb = function(e, t, n) {
     function r(e, t, n) {
      return o[o.length] = {
       status: e,
       value: t,
       index: n
      };
     }
     if (i && !a) {
      var o = [], c = e.length, u = n.length, l = 0;
      switch (t) {
      case "push":
       l = c;

      case "unshift":
       for (t = 0; t < u; t++) r("added", n[t], l + t);
       break;

      case "pop":
       l = c - 1;

      case "shift":
       c && r("deleted", e[l], l);
       break;

      case "splice":
       t = Math.min(Math.max(0, 0 > n[0] ? c + n[0] : n[0]), c), c = 1 === u ? c : Math.min(t + (n[1] || 0), c), 
       u = t + u - 2, l = Math.max(c, u);
       for (var f = [], p = [], d = 2; t < l; ++t, ++d) t < c && p.push(r("deleted", e[t], t)), 
       t < u && f.push(r("added", n[d], t));
       x.a.dc(p, f);
       break;

      default:
       return;
      }
      s = o;
     }
    };
   }
  };
  var O = x.a.Yb("_state");
  x.m = x.B = function(t, n, r) {
   function i() {
    if (0 < arguments.length) {
     if ("function" != typeof s) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
     return s.apply(a.pb, arguments), this;
    }
    return x.l.oc(i), (a.S || a.s && i.Qa()) && i.aa(), a.T;
   }
   if ("object" == typeof t ? r = t : (r = r || {}, t && (r.read = t)), "function" != typeof r.read) throw Error("Pass a function that returns the value of the ko.computed");
   var s = r.write, a = {
    T: e,
    S: !0,
    Ra: !1,
    Fb: !1,
    R: !1,
    Va: !1,
    s: !1,
    jd: r.read,
    pb: n || r.owner,
    i: r.disposeWhenNodeIsRemoved || r.i || null,
    wa: r.disposeWhen || r.wa,
    mb: null,
    r: {},
    L: 0,
    bc: null
   };
   return i[O] = a, i.Vc = "function" == typeof s, x.a.ka || x.a.extend(i, x.J.fn), 
   x.J.fn.rb(i), x.a.Ya(i, A), r.pure ? (a.Va = !0, a.s = !0, x.a.extend(i, N)) : r.deferEvaluation && x.a.extend(i, B), 
   x.options.deferUpdates && x.ya.deferred(i, !0), a.i && (a.Fb = !0, a.i.nodeType || (a.i = null)), 
   a.s || r.deferEvaluation || i.aa(), a.i && i.ba() && x.a.F.oa(a.i, a.mb = function() {
    i.k();
   }), i;
  };
  var A = {
   equalityComparer: c,
   Aa: function() {
    return this[O].L;
   },
   Pb: function(e, t, n) {
    if (this[O].Va && t === this) throw Error("A 'pure' computed must not be called recursively");
    this[O].r[e] = n, n.Ga = this[O].L++, n.na = t.Na();
   },
   Qa: function() {
    var e, t, n = this[O].r;
    for (e in n) if (n.hasOwnProperty(e) && (t = n[e]).ia.Uc(t.na)) return !0;
   },
   bd: function() {
    this.Fa && !this[O].Ra && this.Fa();
   },
   ba: function() {
    return this[O].S || 0 < this[O].L;
   },
   ld: function() {
    this.Mb || this.ac();
   },
   uc: function(e) {
    if (e.cb && !this[O].i) {
     var t = e.X(this.bd, this, "dirty"), n = e.X(this.ld, this);
     return {
      ia: e,
      k: function() {
       t.k(), n.k();
      }
     };
    }
    return e.X(this.ac, this);
   },
   ac: function() {
    var e = this, t = e.throttleEvaluation;
    t && 0 <= t ? (clearTimeout(this[O].bc), this[O].bc = x.a.setTimeout(function() {
     e.aa(!0);
    }, t)) : e.Fa ? e.Fa() : e.aa(!0);
   },
   aa: function(e) {
    var t = this[O], n = t.wa;
    if (!t.Ra && !t.R) {
     if (t.i && !x.a.nb(t.i) || n && n()) {
      if (!t.Fb) return void this.k();
     } else t.Fb = !1;
     t.Ra = !0;
     try {
      this.Qc(e);
     } finally {
      t.Ra = !1;
     }
     t.L || this.k();
    }
   },
   Qc: function(t) {
    var n = this[O], r = n.Va ? e : !n.L, i = {
     Hc: this,
     Ma: n.r,
     lb: n.L
    };
    x.l.Ub({
     Gc: i,
     gb: d,
     m: this,
     Sa: r
    }), n.r = {}, n.L = 0, i = this.Pc(n, i), this.tb(n.T, i) && (n.s || this.notifySubscribers(n.T, "beforeChange"), 
    n.T = i, n.s ? this.zc() : t && this.notifySubscribers(n.T)), r && this.notifySubscribers(n.T, "awake");
   },
   Pc: function(e, t) {
    try {
     var n = e.jd;
     return e.pb ? n.call(e.pb) : n();
    } finally {
     x.l.end(), t.lb && !e.s && x.a.D(t.Ma, p), e.S = !1;
    }
   },
   t: function() {
    var e = this[O];
    return (e.S && !e.L || e.s && this.Qa()) && this.aa(), e.T;
   },
   Ta: function(e) {
    x.J.fn.Ta.call(this, e), this.Fa = function() {
     this.Kb(this[O].T), this[O].S = !0, this.Lb(this);
    };
   },
   k: function() {
    var e = this[O];
    !e.s && e.r && x.a.D(e.r, function(e, t) {
     t.k && t.k();
    }), e.i && e.mb && x.a.F.pc(e.i, e.mb), e.r = null, e.L = 0, e.R = !0, e.S = !1, 
    e.s = !1, e.i = null;
   }
  }, N = {
   sa: function(e) {
    var t = this, n = t[O];
    if (!n.R && n.s && "change" == e) {
     if (n.s = !1, n.S || t.Qa()) n.r = null, n.L = 0, n.S = !0, t.aa(); else {
      var r = [];
      x.a.D(n.r, function(e, t) {
       r[t.Ga] = e;
      }), x.a.q(r, function(e, r) {
       var i = n.r[e], s = t.uc(i.ia);
       s.Ga = r, s.na = i.na, n.r[e] = s;
      });
     }
     n.R || t.notifySubscribers(n.T, "awake");
    }
   },
   Ia: function(t) {
    var n = this[O];
    n.R || "change" != t || this.Pa("change") || (x.a.D(n.r, function(e, t) {
     t.k && (n.r[e] = {
      ia: t.ia,
      Ga: t.Ga,
      na: t.na
     }, t.k());
    }), n.s = !0, this.notifySubscribers(e, "asleep"));
   },
   Na: function() {
    var e = this[O];
    return e.s && (e.S || this.Qa()) && this.aa(), x.J.fn.Na.call(this);
   }
  }, B = {
   sa: function(e) {
    "change" != e && "beforeChange" != e || this.t();
   }
  };
  x.a.ka && x.a.Xa(A, x.J.fn);
  var R = x.N.gd;
  x.m[R] = x.N, A[R] = x.m, x.Xc = function(e) {
   return x.Oa(e, x.m);
  }, x.Yc = function(e) {
   return x.Oa(e, x.m) && e[O] && e[O].Va;
  }, x.b("computed", x.m), x.b("dependentObservable", x.m), x.b("isComputed", x.Xc), 
  x.b("isPureComputed", x.Yc), x.b("computed.fn", A), x.G(A, "peek", A.t), x.G(A, "dispose", A.k), 
  x.G(A, "isActive", A.ba), x.G(A, "getDependenciesCount", A.Aa), x.nc = function(e, t) {
   return "function" == typeof e ? x.m(e, t, {
    pure: !0
   }) : ((e = x.a.extend({}, e)).pure = !0, x.m(e, t));
  }, x.b("pureComputed", x.nc), function() {
   function t(r, i, s) {
    if (s = s || new n(), "object" != typeof (r = i(r)) || null === r || r === e || r instanceof RegExp || r instanceof Date || r instanceof String || r instanceof Number || r instanceof Boolean) return r;
    var a = r instanceof Array ? [] : {};
    return s.save(r, a), function(e, t) {
     if (e instanceof Array) {
      for (var n = 0; n < e.length; n++) t(n);
      "function" == typeof e.toJSON && t("toJSON");
     } else for (n in e) t(n);
    }(r, function(n) {
     var o = i(r[n]);
     switch (typeof o) {
     case "boolean":
     case "number":
     case "string":
     case "function":
      a[n] = o;
      break;

     case "object":
     case "undefined":
      var c = s.get(o);
      a[n] = c !== e ? c : t(o, i, s);
     }
    }), a;
   }
   function n() {
    this.keys = [], this.Ib = [];
   }
   x.wc = function(e) {
    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
    return t(e, function(e) {
     for (var t = 0; x.H(e) && 10 > t; t++) e = e();
     return e;
    });
   }, x.toJSON = function(e, t, n) {
    return e = x.wc(e), x.a.Eb(e, t, n);
   }, n.prototype = {
    save: function(e, t) {
     var n = x.a.o(this.keys, e);
     0 <= n ? this.Ib[n] = t : (this.keys.push(e), this.Ib.push(t));
    },
    get: function(t) {
     return 0 <= (t = x.a.o(this.keys, t)) ? this.Ib[t] : e;
    }
   };
  }(), x.b("toJS", x.wc), x.b("toJSON", x.toJSON), x.j = {
   u: function(t) {
    switch (x.a.A(t)) {
    case "option":
     return !0 === t.__ko__hasDomDataOptionValue__ ? x.a.e.get(t, x.d.options.xb) : 7 >= x.a.C ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;

    case "select":
     return 0 <= t.selectedIndex ? x.j.u(t.options[t.selectedIndex]) : e;

    default:
     return t.value;
    }
   },
   ha: function(t, n, r) {
    switch (x.a.A(t)) {
    case "option":
     switch (typeof n) {
     case "string":
      x.a.e.set(t, x.d.options.xb, e), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__, 
      t.value = n;
      break;

     default:
      x.a.e.set(t, x.d.options.xb, n), t.__ko__hasDomDataOptionValue__ = !0, t.value = "number" == typeof n ? n : "";
     }
     break;

    case "select":
     "" !== n && null !== n || (n = e);
     for (var i, s = -1, a = 0, o = t.options.length; a < o; ++a) if ((i = x.j.u(t.options[a])) == n || "" == i && n === e) {
      s = a;
      break;
     }
     (r || 0 <= s || n === e && 1 < t.size) && (t.selectedIndex = s);
     break;

    default:
     null !== n && n !== e || (n = ""), t.value = n;
    }
   }
  }, x.b("selectExtensions", x.j), x.b("selectExtensions.readValue", x.j.u), x.b("selectExtensions.writeValue", x.j.ha), 
  x.h = function() {
   function e(e) {
    123 === (e = x.a.$a(e)).charCodeAt(0) && (e = e.slice(1, -1));
    var t, n = [], a = e.match(r), o = [], c = 0;
    if (a) {
     a.push(",");
     for (var u, l = 0; u = a[l]; ++l) {
      var f = u.charCodeAt(0);
      if (44 === f) {
       if (0 >= c) {
        n.push(t && o.length ? {
         key: t,
         value: o.join("")
        } : {
         unknown: t || o.join("")
        }), t = c = 0, o = [];
        continue;
       }
      } else if (58 === f) {
       if (!c && !t && 1 === o.length) {
        t = o.pop();
        continue;
       }
      } else 47 === f && l && 1 < u.length ? (f = a[l - 1].match(i)) && !s[f[0]] && ((a = (e = e.substr(e.indexOf(u) + 1)).match(r)).push(","), 
      l = -1, u = "/") : 40 === f || 123 === f || 91 === f ? ++c : 41 === f || 125 === f || 93 === f ? --c : t || o.length || 34 !== f && 39 !== f || (u = u.slice(1, -1));
      o.push(u);
     }
    }
    return n;
   }
   var t = [ "true", "false", "null", "undefined" ], n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, r = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), i = /[\])"'A-Za-z0-9_$]+$/, s = {
    in: 1,
    return: 1,
    typeof: 1
   }, a = {};
   return {
    ta: [],
    ea: a,
    yb: e,
    Ua: function(r, i) {
     function s(e, r) {
      var i;
      if (!l) {
       var f = x.getBindingHandler(e);
       if (f && f.preprocess && !(r = f.preprocess(r, e, s))) return;
       (f = a[e]) && (i = r, i = !(0 <= x.a.o(t, i)) && (null !== (f = i.match(n)) && (f[1] ? "Object(" + f[1] + ")" + f[2] : i)), 
       f = i), f && c.push("'" + e + "':function(_z){" + i + "=_z}");
      }
      u && (r = "function(){return " + r + " }"), o.push("'" + e + "':" + r);
     }
     var o = [], c = [], u = (i = i || {}).valueAccessors, l = i.bindingParams, f = "string" == typeof r ? e(r) : r;
     return x.a.q(f, function(e) {
      s(e.key || e.unknown, e.value);
     }), c.length && s("_ko_property_writers", "{" + c.join(",") + " }"), o.join(",");
    },
    ad: function(e, t) {
     for (var n = 0; n < e.length; n++) if (e[n].key == t) return !0;
     return !1;
    },
    Ea: function(e, t, n, r, i) {
     e && x.H(e) ? !x.Ba(e) || i && e.t() === r || e(r) : (e = t.get("_ko_property_writers")) && e[n] && e[n](r);
    }
   };
  }(), x.b("expressionRewriting", x.h), x.b("expressionRewriting.bindingRewriteValidators", x.h.ta), 
  x.b("expressionRewriting.parseObjectLiteral", x.h.yb), x.b("expressionRewriting.preProcessBindings", x.h.Ua), 
  x.b("expressionRewriting._twoWayBindings", x.h.ea), x.b("jsonExpressionRewriting", x.h), 
  x.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", x.h.Ua), function() {
   function e(e) {
    return 8 == e.nodeType && a.test(s ? e.text : e.nodeValue);
   }
   function t(e) {
    return 8 == e.nodeType && o.test(s ? e.text : e.nodeValue);
   }
   function r(n, r) {
    for (var i = n, s = 1, a = []; i = i.nextSibling; ) {
     if (t(i) && 0 == --s) return a;
     a.push(i), e(i) && s++;
    }
    if (!r) throw Error("Cannot find closing comment tag to match: " + n.nodeValue);
    return null;
   }
   function i(e, t) {
    var n = r(e, t);
    return n ? 0 < n.length ? n[n.length - 1].nextSibling : e.nextSibling : null;
   }
   var s = n && "\x3c!--test--\x3e" === n.createComment("test").text, a = s ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, o = s ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, c = {
    ul: !0,
    ol: !0
   };
   x.f = {
    Z: {},
    childNodes: function(t) {
     return e(t) ? r(t) : t.childNodes;
    },
    xa: function(t) {
     if (e(t)) for (var n = 0, r = (t = x.f.childNodes(t)).length; n < r; n++) x.removeNode(t[n]); else x.a.ob(t);
    },
    da: function(t, n) {
     if (e(t)) {
      x.f.xa(t);
      for (var r = t.nextSibling, i = 0, s = n.length; i < s; i++) r.parentNode.insertBefore(n[i], r);
     } else x.a.da(t, n);
    },
    mc: function(t, n) {
     e(t) ? t.parentNode.insertBefore(n, t.nextSibling) : t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
    },
    gc: function(t, n, r) {
     r ? e(t) ? t.parentNode.insertBefore(n, r.nextSibling) : r.nextSibling ? t.insertBefore(n, r.nextSibling) : t.appendChild(n) : x.f.mc(t, n);
    },
    firstChild: function(n) {
     return e(n) ? !n.nextSibling || t(n.nextSibling) ? null : n.nextSibling : n.firstChild;
    },
    nextSibling: function(n) {
     return e(n) && (n = i(n)), n.nextSibling && t(n.nextSibling) ? null : n.nextSibling;
    },
    Tc: e,
    pd: function(e) {
     return (e = (s ? e.text : e.nodeValue).match(a)) ? e[1] : null;
    },
    kc: function(n) {
     if (c[x.a.A(n)]) {
      var r = n.firstChild;
      if (r) do {
       if (1 === r.nodeType) {
        var s, a = null;
        if (s = r.firstChild) do {
         if (a) a.push(s); else if (e(s)) {
          var o = i(s, !0);
          o ? s = o : a = [ s ];
         } else t(s) && (a = [ s ]);
        } while (s = s.nextSibling);
        if (s = a) for (a = r.nextSibling, o = 0; o < s.length; o++) a ? n.insertBefore(s[o], a) : n.appendChild(s[o]);
       }
      } while (r = r.nextSibling);
     }
    }
   };
  }(), x.b("virtualElements", x.f), x.b("virtualElements.allowedBindings", x.f.Z), 
  x.b("virtualElements.emptyNode", x.f.xa), x.b("virtualElements.insertAfter", x.f.gc), 
  x.b("virtualElements.prepend", x.f.mc), x.b("virtualElements.setDomNodeChildren", x.f.da), 
  x.Q = function() {
   this.Fc = {};
  }, x.a.extend(x.Q.prototype, {
   nodeHasBindings: function(e) {
    switch (e.nodeType) {
    case 1:
     return null != e.getAttribute("data-bind") || x.g.getComponentNameForNode(e);

    case 8:
     return x.f.Tc(e);

    default:
     return !1;
    }
   },
   getBindings: function(e, t) {
    var n = (n = this.getBindingsString(e, t)) ? this.parseBindingsString(n, t, e) : null;
    return x.g.Ob(n, e, t, !1);
   },
   getBindingAccessors: function(e, t) {
    var n = (n = this.getBindingsString(e, t)) ? this.parseBindingsString(n, t, e, {
     valueAccessors: !0
    }) : null;
    return x.g.Ob(n, e, t, !0);
   },
   getBindingsString: function(e) {
    switch (e.nodeType) {
    case 1:
     return e.getAttribute("data-bind");

    case 8:
     return x.f.pd(e);

    default:
     return null;
    }
   },
   parseBindingsString: function(e, t, n, r) {
    try {
     var i, s = this.Fc, a = e + (r && r.valueAccessors || "");
     if (!(i = s[a])) {
      var o, c = "with($context){with($data||{}){return{" + x.h.Ua(e, r) + "}}}";
      o = new Function("$context", "$element", c), i = s[a] = o;
     }
     return i(t, n);
    } catch (t) {
     throw t.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + t.message, 
     t;
    }
   }
  }), x.Q.instance = new x.Q(), x.b("bindingProvider", x.Q), function() {
   function n(e) {
    return function() {
     return e;
    };
   }
   function r(e) {
    return e();
   }
   function s(e) {
    return x.a.Ca(x.l.w(e), function(t, n) {
     return function() {
      return e()[n];
     };
    });
   }
   function a(e, t, r) {
    return "function" == typeof e ? s(e.bind(null, t, r)) : x.a.Ca(e, n);
   }
   function o(e, t) {
    return s(this.getBindings.bind(this, e, t));
   }
   function c(e, t, n) {
    var r, i = x.f.firstChild(t), s = x.Q.instance, a = s.preprocessNode;
    if (a) {
     for (;r = i; ) i = x.f.nextSibling(r), a.call(s, r);
     i = x.f.firstChild(t);
    }
    for (;r = i; ) i = x.f.nextSibling(r), u(e, r, n);
   }
   function u(e, t, n) {
    var r = !0, i = 1 === t.nodeType;
    i && x.f.kc(t), (i && n || x.Q.instance.nodeHasBindings(t)) && (r = l(t, null, e, n).shouldBindDescendants), 
    r && !p[x.a.A(t)] && c(e, t, !i);
   }
   function l(t, n, i, s) {
    var a, c, u = x.a.e.get(t, d);
    if (!n) {
     if (u) throw Error("You cannot apply bindings multiple times to the same element.");
     x.a.e.set(t, d, !0);
    }
    if (!u && s && x.tc(t, i), n && "function" != typeof n) a = n; else {
     var l = x.Q.instance, f = l.getBindingAccessors || o, p = x.B(function() {
      return (a = n ? n(i, t) : f.call(l, t, i)) && i.P && i.P(), a;
     }, null, {
      i: t
     });
     a && p.ba() || (p = null);
    }
    if (a) {
     var h = p ? function(e) {
      return function() {
       return r(p()[e]);
      };
     } : function(e) {
      return a[e];
     }, m = function() {
      return x.a.Ca(p ? p() : a, r);
     };
     m.get = function(e) {
      return a[e] && r(h(e));
     }, m.has = function(e) {
      return e in a;
     }, s = function(e) {
      var t = [], n = {}, r = [];
      return x.a.D(e, function i(s) {
       if (!n[s]) {
        var a = x.getBindingHandler(s);
        a && (a.after && (r.push(s), x.a.q(a.after, function(t) {
         if (e[t]) {
          if (-1 !== x.a.o(r, t)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + r.join(", "));
          i(t);
         }
        }), r.length--), t.push({
         key: s,
         fc: a
        })), n[s] = !0;
       }
      }), t;
     }(a), x.a.q(s, function(n) {
      var r = n.fc.init, s = n.fc.update, o = n.key;
      if (8 === t.nodeType && !x.f.Z[o]) throw Error("The binding '" + o + "' cannot be used with virtual elements");
      try {
       "function" == typeof r && x.l.w(function() {
        var n = r(t, h(o), m, i.$data, i);
        if (n && n.controlsDescendantBindings) {
         if (c !== e) throw Error("Multiple bindings (" + c + " and " + o + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
         c = o;
        }
       }), "function" == typeof s && x.B(function() {
        s(t, h(o), m, i.$data, i);
       }, null, {
        i: t
       });
      } catch (e) {
       throw e.message = 'Unable to process binding "' + o + ": " + a[o] + '"\nMessage: ' + e.message, 
       e;
      }
     });
    }
    return {
     shouldBindDescendants: c === e
    };
   }
   function f(e) {
    return e && e instanceof x.U ? e : new x.U(e);
   }
   x.d = {};
   var p = {
    script: !0,
    textarea: !0,
    template: !0
   };
   x.getBindingHandler = function(e) {
    return x.d[e];
   }, x.U = function(t, n, r, i) {
    var s, a = this, o = "function" == typeof t && !x.H(t), c = x.B(function() {
     var e = o ? t() : t, s = x.a.c(e);
     return n ? (n.P && n.P(), x.a.extend(a, n), c && (a.P = c)) : (a.$parents = [], 
     a.$root = s, a.ko = x), a.$rawData = e, a.$data = s, r && (a[r] = s), i && i(a, n, s), 
     a.$data;
    }, null, {
     wa: function() {
      return s && !x.a.Qb(s);
     },
     i: !0
    });
    c.ba() && (a.P = c, c.equalityComparer = null, s = [], c.Ac = function(t) {
     s.push(t), x.a.F.oa(t, function(t) {
      x.a.La(s, t), s.length || (c.k(), a.P = c = e);
     });
    });
   }, x.U.prototype.createChildContext = function(e, t, n) {
    return new x.U(e, this, t, function(e, t) {
     e.$parentContext = t, e.$parent = t.$data, e.$parents = (t.$parents || []).slice(0), 
     e.$parents.unshift(e.$parent), n && n(e);
    });
   }, x.U.prototype.extend = function(e) {
    return new x.U(this.P || this.$data, this, null, function(t, n) {
     t.$rawData = n.$rawData, x.a.extend(t, "function" == typeof e ? e() : e);
    });
   };
   var d = x.a.e.I(), h = x.a.e.I();
   x.tc = function(e, t) {
    if (2 != arguments.length) return x.a.e.get(e, h);
    x.a.e.set(e, h, t), t.P && t.P.Ac(e);
   }, x.Ja = function(e, t, n) {
    return 1 === e.nodeType && x.f.kc(e), l(e, t, f(n), !0);
   }, x.Dc = function(e, t, n) {
    return n = f(n), x.Ja(e, a(t, n, e), n);
   }, x.eb = function(e, t) {
    1 !== t.nodeType && 8 !== t.nodeType || c(f(e), t, !0);
   }, x.Rb = function(e, n) {
    if (!i && t.jQuery && (i = t.jQuery), n && 1 !== n.nodeType && 8 !== n.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
    n = n || t.document.body, u(f(e), n, !0);
   }, x.kb = function(t) {
    switch (t.nodeType) {
    case 1:
    case 8:
     var n = x.tc(t);
     if (n) return n;
     if (t.parentNode) return x.kb(t.parentNode);
    }
    return e;
   }, x.Jc = function(t) {
    return (t = x.kb(t)) ? t.$data : e;
   }, x.b("bindingHandlers", x.d), x.b("applyBindings", x.Rb), x.b("applyBindingsToDescendants", x.eb), 
   x.b("applyBindingAccessorsToNode", x.Ja), x.b("applyBindingsToNode", x.Dc), x.b("contextFor", x.kb), 
   x.b("dataFor", x.Jc);
  }(), function(e) {
   function t(t, r) {
    var a, o = i.hasOwnProperty(t) ? i[t] : e;
    o ? o.X(r) : ((o = i[t] = new x.J()).X(r), n(t, function(e, n) {
     var r = !(!n || !n.synchronous);
     s[t] = {
      definition: e,
      Zc: r
     }, delete i[t], a || r ? o.notifySubscribers(e) : x.Y.Wa(function() {
      o.notifySubscribers(e);
     });
    }), a = !0);
   }
   function n(e, t) {
    r("getConfig", [ e ], function(n) {
     n ? r("loadComponent", [ e, n ], function(e) {
      t(e, n);
     }) : t(null, null);
    });
   }
   function r(t, n, i, s) {
    s || (s = x.g.loaders.slice(0));
    var a = s.shift();
    if (a) {
     var o = a[t];
     if (o) {
      var c = !1;
      if (o.apply(a, n.concat(function(e) {
       c ? i(null) : null !== e ? i(e) : r(t, n, i, s);
      })) !== e && (c = !0, !a.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
     } else r(t, n, i, s);
    } else i(null);
   }
   var i = {}, s = {};
   x.g = {
    get: function(n, r) {
     var i = s.hasOwnProperty(n) ? s[n] : e;
     i ? i.Zc ? x.l.w(function() {
      r(i.definition);
     }) : x.Y.Wa(function() {
      r(i.definition);
     }) : t(n, r);
    },
    Xb: function(e) {
     delete s[e];
    },
    Jb: r
   }, x.g.loaders = [], x.b("components", x.g), x.b("components.get", x.g.get), x.b("components.clearCachedDefinition", x.g.Xb);
  }(), function() {
   function e(e, t, n, r) {
    function i() {
     0 == --o && r(a);
    }
    var a = {}, o = 2, c = n.template;
    n = n.viewModel, c ? s(t, c, function(t) {
     x.g.Jb("loadTemplate", [ e, t ], function(e) {
      a.template = e, i();
     });
    }) : i(), n ? s(t, n, function(t) {
     x.g.Jb("loadViewModel", [ e, t ], function(e) {
      a[u] = e, i();
     });
    }) : i();
   }
   function r(e) {
    switch (x.a.A(e)) {
    case "script":
     return x.a.ma(e.text);

    case "textarea":
     return x.a.ma(e.value);

    case "template":
     if (i(e.content)) return x.a.ua(e.content.childNodes);
    }
    return x.a.ua(e.childNodes);
   }
   function i(e) {
    return t.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType;
   }
   function s(e, n, r) {
    "string" == typeof n.require ? o || t.require ? (o || t.require)([ n.require ], r) : e("Uses require, but no AMD loader is present") : r(n);
   }
   function a(e) {
    return function(t) {
     throw Error("Component '" + e + "': " + t);
    };
   }
   var c = {};
   x.g.register = function(e, t) {
    if (!t) throw Error("Invalid configuration for " + e);
    if (x.g.ub(e)) throw Error("Component " + e + " is already registered");
    c[e] = t;
   }, x.g.ub = function(e) {
    return c.hasOwnProperty(e);
   }, x.g.od = function(e) {
    delete c[e], x.g.Xb(e);
   }, x.g.Zb = {
    getConfig: function(e, t) {
     t(c.hasOwnProperty(e) ? c[e] : null);
    },
    loadComponent: function(t, n, r) {
     var i = a(t);
     s(i, n, function(n) {
      e(t, i, n, r);
     });
    },
    loadTemplate: function(e, s, o) {
     if (e = a(e), "string" == typeof s) o(x.a.ma(s)); else if (s instanceof Array) o(s); else if (i(s)) o(x.a.V(s.childNodes)); else if (s.element) if (s = s.element, 
     t.HTMLElement ? s instanceof HTMLElement : s && s.tagName && 1 === s.nodeType) o(r(s)); else if ("string" == typeof s) {
      var c = n.getElementById(s);
      c ? o(r(c)) : e("Cannot find element with ID " + s);
     } else e("Unknown element type: " + s); else e("Unknown template value: " + s);
    },
    loadViewModel: function(e, t, n) {
     !function e(t, n, r) {
      if ("function" == typeof n) r(function(e) {
       return new n(e);
      }); else if ("function" == typeof n[u]) r(n[u]); else if ("instance" in n) {
       var i = n.instance;
       r(function() {
        return i;
       });
      } else "viewModel" in n ? e(t, n.viewModel, r) : t("Unknown viewModel value: " + n);
     }(a(e), t, n);
    }
   };
   var u = "createViewModel";
   x.b("components.register", x.g.register), x.b("components.isRegistered", x.g.ub), 
   x.b("components.unregister", x.g.od), x.b("components.defaultLoader", x.g.Zb), x.g.loaders.push(x.g.Zb), 
   x.g.Bc = c;
  }(), function() {
   function e(e, n) {
    if (r = e.getAttribute("params")) {
     var r = t.parseBindingsString(r, n, e, {
      valueAccessors: !0,
      bindingParams: !0
     }), i = (r = x.a.Ca(r, function(t) {
      return x.m(t, null, {
       i: e
      });
     }), x.a.Ca(r, function(t) {
      var n = t.t();
      return t.ba() ? x.m({
       read: function() {
        return x.a.c(t());
       },
       write: x.Ba(n) && function(e) {
        t()(e);
       },
       i: e
      }) : n;
     }));
     return i.hasOwnProperty("$raw") || (i.$raw = r), i;
    }
    return {
     $raw: {}
    };
   }
   x.g.getComponentNameForNode = function(e) {
    var t = x.a.A(e);
    if (x.g.ub(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= x.a.C && e.tagName === t)) return t;
   }, x.g.Ob = function(t, n, r, i) {
    if (1 === n.nodeType) {
     var s = x.g.getComponentNameForNode(n);
     if (s) {
      if ((t = t || {}).component) throw Error('Cannot use the "component" binding on a custom element matching a component');
      var a = {
       name: s,
       params: e(n, r)
      };
      t.component = i ? function() {
       return a;
      } : a;
     }
    }
    return t;
   };
   var t = new x.Q();
   9 > x.a.C && (x.g.register = function(e) {
    return function(t) {
     return n.createElement(t), e.apply(this, arguments);
    };
   }(x.g.register), n.createDocumentFragment = function(e) {
    return function() {
     var t, n = e(), r = x.g.Bc;
     for (t in r) r.hasOwnProperty(t) && n.createElement(t);
     return n;
    };
   }(n.createDocumentFragment));
  }(), function(e) {
   var t = 0;
   x.d.component = {
    init: function(e, n, r, i, s) {
     function a() {
      var e = o && o.dispose;
      "function" == typeof e && e.call(o), c = o = null;
     }
     var o, c, u = x.a.V(x.f.childNodes(e));
     return x.a.F.oa(e, a), x.m(function() {
      var r, i, l = x.a.c(n());
      if ("string" == typeof l ? r = l : (r = x.a.c(l.name), i = x.a.c(l.params)), !r) throw Error("No component name specified");
      var f = c = ++t;
      x.g.get(r, function(t) {
       if (c === f) {
        if (a(), !t) throw Error("Unknown component '" + r + "'");
        !function(e, t, n) {
         if (!(t = t.template)) throw Error("Component '" + e + "' has no template");
         e = x.a.ua(t), x.f.da(n, e);
        }(r, t, e);
        var n = function(e, t, n, r) {
         var i = e.createViewModel;
         return i ? i.call(e, r, {
          element: t,
          templateNodes: n
         }) : r;
        }(t, e, u, i);
        t = s.createChildContext(n, void 0, function(e) {
         e.$component = n, e.$componentTemplateNodes = u;
        }), o = n, x.eb(t, e);
       }
      });
     }, null, {
      i: e
     }), {
      controlsDescendantBindings: !0
     };
    }
   }, x.f.Z.component = !0;
  }();
  var P = {
   class: "className",
   for: "htmlFor"
  };
  x.d.attr = {
   update: function(t, n) {
    var r = x.a.c(n()) || {};
    x.a.D(r, function(n, r) {
     var i = !1 === (r = x.a.c(r)) || null === r || r === e;
     i && t.removeAttribute(n), 8 >= x.a.C && n in P ? (n = P[n], i ? t.removeAttribute(n) : t[n] = r) : i || t.setAttribute(n, r.toString()), 
     "name" === n && x.a.rc(t, i ? "" : r.toString());
    });
   }
  }, x.d.checked = {
   after: [ "value", "attr" ],
   init: function(t, n, r) {
    function i() {
     var e = t.checked, i = p ? s() : e;
     if (!x.va.Sa() && (!o || e)) {
      var a = x.l.w(n);
      if (u) {
       var c = l ? a.t() : a;
       f !== i ? (e && (x.a.pa(c, i, !0), x.a.pa(c, f, !1)), f = i) : x.a.pa(c, i, e), 
       l && x.Ba(a) && a(c);
      } else x.h.Ea(a, r, "checked", i, !0);
     }
    }
    var s = x.nc(function() {
     return r.has("checkedValue") ? x.a.c(r.get("checkedValue")) : r.has("value") ? x.a.c(r.get("value")) : t.value;
    }), a = "checkbox" == t.type, o = "radio" == t.type;
    if (a || o) {
     var c = n(), u = a && x.a.c(c) instanceof Array, l = !(u && c.push && c.splice), f = u ? s() : e, p = o || u;
     o && !t.name && x.d.uniqueName.init(t, function() {
      return !0;
     }), x.m(i, null, {
      i: t
     }), x.a.p(t, "click", i), x.m(function() {
      var e = x.a.c(n());
      t.checked = u ? 0 <= x.a.o(e, s()) : a ? e : s() === e;
     }, null, {
      i: t
     }), c = e;
    }
   }
  }, x.h.ea.checked = !0, x.d.checkedValue = {
   update: function(e, t) {
    e.value = x.a.c(t());
   }
  }, x.d.css = {
   update: function(e, t) {
    var n = x.a.c(t());
    null !== n && "object" == typeof n ? x.a.D(n, function(t, n) {
     n = x.a.c(n), x.a.bb(e, t, n);
    }) : (n = x.a.$a(String(n || "")), x.a.bb(e, e.__ko__cssValue, !1), e.__ko__cssValue = n, 
    x.a.bb(e, n, !0));
   }
  }, x.d.enable = {
   update: function(e, t) {
    var n = x.a.c(t());
    n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled = !0);
   }
  }, x.d.disable = {
   update: function(e, t) {
    x.d.enable.update(e, function() {
     return !x.a.c(t());
    });
   }
  }, x.d.event = {
   init: function(e, t, n, r, i) {
    var s = t() || {};
    x.a.D(s, function(s) {
     "string" == typeof s && x.a.p(e, s, function(e) {
      var a, o = t()[s];
      if (o) {
       try {
        var c = x.a.V(arguments);
        r = i.$data, c.unshift(r), a = o.apply(r, c);
       } finally {
        !0 !== a && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
       }
       !1 === n.get(s + "Bubble") && (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation());
      }
     });
    });
   }
  }, x.d.foreach = {
   ic: function(e) {
    return function() {
     var t = e(), n = x.a.zb(t);
     return n && "number" != typeof n.length ? (x.a.c(t), {
      foreach: n.data,
      as: n.as,
      includeDestroyed: n.includeDestroyed,
      afterAdd: n.afterAdd,
      beforeRemove: n.beforeRemove,
      afterRender: n.afterRender,
      beforeMove: n.beforeMove,
      afterMove: n.afterMove,
      templateEngine: x.W.sb
     }) : {
      foreach: t,
      templateEngine: x.W.sb
     };
    };
   },
   init: function(e, t) {
    return x.d.template.init(e, x.d.foreach.ic(t));
   },
   update: function(e, t, n, r, i) {
    return x.d.template.update(e, x.d.foreach.ic(t), n, r, i);
   }
  }, x.h.ta.foreach = !1, x.f.Z.foreach = !0, x.d.hasfocus = {
   init: function(e, t, n) {
    function r(r) {
     e.__ko_hasfocusUpdating = !0;
     var i = e.ownerDocument;
     if ("activeElement" in i) {
      var s;
      try {
       s = i.activeElement;
      } catch (e) {
       s = i.body;
      }
      r = s === e;
     }
     i = t(), x.h.Ea(i, n, "hasfocus", r, !0), e.__ko_hasfocusLastValue = r, e.__ko_hasfocusUpdating = !1;
    }
    var i = r.bind(null, !0), s = r.bind(null, !1);
    x.a.p(e, "focus", i), x.a.p(e, "focusin", i), x.a.p(e, "blur", s), x.a.p(e, "focusout", s);
   },
   update: function(e, t) {
    var n = !!x.a.c(t());
    e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(), 
    !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), x.l.w(x.a.Da, null, [ e, n ? "focusin" : "focusout" ]));
   }
  }, x.h.ea.hasfocus = !0, x.d.hasFocus = x.d.hasfocus, x.h.ea.hasFocus = !0, x.d.html = {
   init: function() {
    return {
     controlsDescendantBindings: !0
    };
   },
   update: function(e, t) {
    x.a.Cb(e, t());
   }
  }, h("if"), h("ifnot", !1, !0), h("with", !0, !1, function(e, t) {
   return e.createChildContext(t);
  });
  var L = {};
  x.d.options = {
   init: function(e) {
    if ("select" !== x.a.A(e)) throw Error("options binding applies only to SELECT elements");
    for (;0 < e.length; ) e.remove(0);
    return {
     controlsDescendantBindings: !0
    };
   },
   update: function(t, n, r) {
    function i() {
     return x.a.Ka(t.options, function(e) {
      return e.selected;
     });
    }
    function s(e, t, n) {
     var r = typeof t;
     return "function" == r ? t(e) : "string" == r ? e[t] : n;
    }
    function a(e, n) {
     if (h && l) x.j.ha(t, x.a.c(r.get("value")), !0); else if (d.length) {
      var i = 0 <= x.a.o(d, x.j.u(n[0]));
      x.a.sc(n[0], i), h && !i && x.l.w(x.a.Da, null, [ t, "change" ]);
     }
    }
    var o = t.multiple, c = 0 != t.length && o ? t.scrollTop : null, u = x.a.c(n()), l = r.get("valueAllowUnset") && r.has("value"), f = r.get("optionsIncludeDestroyed");
    n = {};
    var p, d = [];
    l || (o ? d = x.a.fb(i(), x.j.u) : 0 <= t.selectedIndex && d.push(x.j.u(t.options[t.selectedIndex]))), 
    u && (void 0 === u.length && (u = [ u ]), p = x.a.Ka(u, function(t) {
     return f || t === e || null === t || !x.a.c(t._destroy);
    }), r.has("optionsCaption") && null !== (u = x.a.c(r.get("optionsCaption"))) && u !== e && p.unshift(L));
    var h = !1;
    n.beforeRemove = function(e) {
     t.removeChild(e);
    }, u = a, r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (u = function(t, n) {
     a(0, n), x.l.w(r.get("optionsAfterRender"), null, [ n[0], t !== L ? t : e ]);
    }), x.a.Bb(t, p, function(n, i, a) {
     return a.length && (d = !l && a[0].selected ? [ x.j.u(a[0]) ] : [], h = !0), i = t.ownerDocument.createElement("option"), 
     n === L ? (x.a.Za(i, r.get("optionsCaption")), x.j.ha(i, e)) : (a = s(n, r.get("optionsValue"), n), 
     x.j.ha(i, x.a.c(a)), n = s(n, r.get("optionsText"), a), x.a.Za(i, n)), [ i ];
    }, n, u), x.l.w(function() {
     l ? x.j.ha(t, x.a.c(r.get("value")), !0) : (o ? d.length && i().length < d.length : d.length && 0 <= t.selectedIndex ? x.j.u(t.options[t.selectedIndex]) !== d[0] : d.length || 0 <= t.selectedIndex) && x.a.Da(t, "change");
    }), x.a.Nc(t), c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c);
   }
  }, x.d.options.xb = x.a.e.I(), x.d.selectedOptions = {
   after: [ "options", "foreach" ],
   init: function(e, t, n) {
    x.a.p(e, "change", function() {
     var r = t(), i = [];
     x.a.q(e.getElementsByTagName("option"), function(e) {
      e.selected && i.push(x.j.u(e));
     }), x.h.Ea(r, n, "selectedOptions", i);
    });
   },
   update: function(e, t) {
    if ("select" != x.a.A(e)) throw Error("values binding applies only to SELECT elements");
    var n = x.a.c(t()), r = e.scrollTop;
    n && "number" == typeof n.length && x.a.q(e.getElementsByTagName("option"), function(e) {
     var t = 0 <= x.a.o(n, x.j.u(e));
     e.selected != t && x.a.sc(e, t);
    }), e.scrollTop = r;
   }
  }, x.h.ea.selectedOptions = !0, x.d.style = {
   update: function(t, n) {
    var r = x.a.c(n() || {});
    x.a.D(r, function(n, r) {
     null !== (r = x.a.c(r)) && r !== e && !1 !== r || (r = ""), t.style[n] = r;
    });
   }
  }, x.d.submit = {
   init: function(e, t, n, r, i) {
    if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
    x.a.p(e, "submit", function(n) {
     var r, s = t();
     try {
      r = s.call(i.$data, e);
     } finally {
      !0 !== r && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
     }
    });
   }
  }, x.d.text = {
   init: function() {
    return {
     controlsDescendantBindings: !0
    };
   },
   update: function(e, t) {
    x.a.Za(e, t());
   }
  }, x.f.Z.text = !0, function() {
   if (t && t.navigator) var n = function(e) {
    if (e) return parseFloat(e[1]);
   }, r = t.opera && t.opera.version && parseInt(t.opera.version()), i = t.navigator.userAgent, s = n(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), a = n(i.match(/Firefox\/([^ ]*)/));
   if (10 > x.a.C) var o = x.a.e.I(), c = x.a.e.I(), u = function(e) {
    var t = this.activeElement;
    (t = t && x.a.e.get(t, c)) && t(e);
   }, l = function(e, t) {
    var n = e.ownerDocument;
    x.a.e.get(n, o) || (x.a.e.set(n, o, !0), x.a.p(n, "selectionchange", u)), x.a.e.set(e, c, t);
   };
   x.d.textInput = {
    init: function(t, n, i) {
     function o(e, n) {
      x.a.p(t, e, n);
     }
     function c() {
      f || (p = t.value, f = x.a.setTimeout(u, 4));
     }
     function u() {
      clearTimeout(f), p = f = e;
      var r = t.value;
      d !== r && (d = r, x.h.Ea(n(), i, "textInput", r));
     }
     var f, p, d = t.value, h = 9 == x.a.C ? c : u;
     10 > x.a.C ? (o("propertychange", function(e) {
      "value" === e.propertyName && h(e);
     }), 8 == x.a.C && (o("keyup", u), o("keydown", u)), 8 <= x.a.C && (l(t, h), o("dragend", c))) : (o("input", u), 
     5 > s && "textarea" === x.a.A(t) ? (o("keydown", c), o("paste", c), o("cut", c)) : 11 > r ? o("keydown", c) : 4 > a && (o("DOMAutoComplete", u), 
     o("dragdrop", u), o("drop", u))), o("change", u), x.m(function r() {
      var i = x.a.c(n());
      null !== i && i !== e || (i = ""), p !== e && i === p ? x.a.setTimeout(r, 4) : t.value !== i && (d = i, 
      t.value = i);
     }, null, {
      i: t
     });
    }
   }, x.h.ea.textInput = !0, x.d.textinput = {
    preprocess: function(e, t, n) {
     n("textInput", e);
    }
   };
  }(), x.d.uniqueName = {
   init: function(e, t) {
    if (t()) {
     var n = "ko_unique_" + ++x.d.uniqueName.Ic;
     x.a.rc(e, n);
    }
   }
  }, x.d.uniqueName.Ic = 0, x.d.value = {
   after: [ "options", "foreach" ],
   init: function(e, t, n) {
    if ("input" != e.tagName.toLowerCase() || "checkbox" != e.type && "radio" != e.type) {
     var r = [ "change" ], i = n.get("valueUpdate"), s = !1, a = null;
     i && ("string" == typeof i && (i = [ i ]), x.a.ra(r, i), r = x.a.Tb(r));
     var o = function() {
      a = null, s = !1;
      var r = t(), i = x.j.u(e);
      x.h.Ea(r, n, "value", i);
     };
     !x.a.C || "input" != e.tagName.toLowerCase() || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != x.a.o(r, "propertychange") || (x.a.p(e, "propertychange", function() {
      s = !0;
     }), x.a.p(e, "focus", function() {
      s = !1;
     }), x.a.p(e, "blur", function() {
      s && o();
     })), x.a.q(r, function(t) {
      var n = o;
      x.a.nd(t, "after") && (n = function() {
       a = x.j.u(e), x.a.setTimeout(o, 0);
      }, t = t.substring(5)), x.a.p(e, t, n);
     });
     var c = function() {
      var r = x.a.c(t()), i = x.j.u(e);
      if (null !== a && r === a) x.a.setTimeout(c, 0); else if (r !== i) if ("select" === x.a.A(e)) {
       var s = n.get("valueAllowUnset");
       (i = function() {
        x.j.ha(e, r, s);
       })(), s || r === x.j.u(e) ? x.a.setTimeout(i, 0) : x.l.w(x.a.Da, null, [ e, "change" ]);
      } else x.j.ha(e, r);
     };
     x.m(c, null, {
      i: e
     });
    } else x.Ja(e, {
     checkedValue: t
    });
   },
   update: function() {}
  }, x.h.ea.value = !0, x.d.visible = {
   update: function(e, t) {
    var n = x.a.c(t()), r = "none" != e.style.display;
    n && !r ? e.style.display = "" : !n && r && (e.style.display = "none");
   }
  }, function(e) {
   x.d[e] = {
    init: function(t, n, r, i, s) {
     return x.d.event.init.call(this, t, function() {
      var t = {};
      return t[e] = n(), t;
     }, r, i, s);
    }
   };
  }("click"), x.O = function() {}, x.O.prototype.renderTemplateSource = function() {
   throw Error("Override renderTemplateSource");
  }, x.O.prototype.createJavaScriptEvaluatorBlock = function() {
   throw Error("Override createJavaScriptEvaluatorBlock");
  }, x.O.prototype.makeTemplateSource = function(e, t) {
   if ("string" == typeof e) {
    var r = (t = t || n).getElementById(e);
    if (!r) throw Error("Cannot find template with ID " + e);
    return new x.v.n(r);
   }
   if (1 == e.nodeType || 8 == e.nodeType) return new x.v.qa(e);
   throw Error("Unknown template type: " + e);
  }, x.O.prototype.renderTemplate = function(e, t, n, r) {
   return e = this.makeTemplateSource(e, r), this.renderTemplateSource(e, t, n, r);
  }, x.O.prototype.isTemplateRewritten = function(e, t) {
   return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten");
  }, x.O.prototype.rewriteTemplate = function(e, t, n) {
   t = t((e = this.makeTemplateSource(e, n)).text()), e.text(t), e.data("isRewritten", !0);
  }, x.b("templateEngine", x.O), x.Gb = function() {
   function e(e, t, n, r) {
    e = x.h.yb(e);
    for (var i = x.h.ta, s = 0; s < e.length; s++) {
     var a = e[s].key;
     if (i.hasOwnProperty(a)) {
      var o = i[a];
      if ("function" == typeof o) {
       if (a = o(e[s].value)) throw Error(a);
      } else if (!o) throw Error("This template engine does not support the '" + a + "' binding within its templates");
     }
    }
    return n = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + x.h.Ua(e, {
     valueAccessors: !0
    }) + " } })()},'" + n.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(n) + t;
   }
   var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
   return {
    Oc: function(e, t, n) {
     t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
      return x.Gb.dd(e, t);
     }, n);
    },
    dd: function(r, i) {
     return r.replace(t, function(t, n, r, s, a) {
      return e(a, n, r, i);
     }).replace(n, function(t, n) {
      return e(n, "\x3c!-- ko --\x3e", "#comment", i);
     });
    },
    Ec: function(e, t) {
     return x.M.wb(function(n, r) {
      var i = n.nextSibling;
      i && i.nodeName.toLowerCase() === t && x.Ja(i, e, r);
     });
    }
   };
  }(), x.b("__tr_ambtns", x.Gb.Ec), function() {
   x.v = {}, x.v.n = function(e) {
    if (this.n = e) {
     var t = x.a.A(e);
     this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4;
    }
   }, x.v.n.prototype.text = function() {
    var e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
    if (0 == arguments.length) return this.n[e];
    var t = arguments[0];
    "innerHTML" === e ? x.a.Cb(this.n, t) : this.n[e] = t;
   };
   var t = x.a.e.I() + "_";
   x.v.n.prototype.data = function(e) {
    if (1 === arguments.length) return x.a.e.get(this.n, t + e);
    x.a.e.set(this.n, t + e, arguments[1]);
   };
   var n = x.a.e.I();
   x.v.n.prototype.nodes = function() {
    var t = this.n;
    if (0 == arguments.length) return (x.a.e.get(t, n) || {}).jb || (3 === this.ab ? t.content : 4 === this.ab ? t : e);
    x.a.e.set(t, n, {
     jb: arguments[0]
    });
   }, x.v.qa = function(e) {
    this.n = e;
   }, x.v.qa.prototype = new x.v.n(), x.v.qa.prototype.text = function() {
    if (0 == arguments.length) {
     var t = x.a.e.get(this.n, n) || {};
     return t.Hb === e && t.jb && (t.Hb = t.jb.innerHTML), t.Hb;
    }
    x.a.e.set(this.n, n, {
     Hb: arguments[0]
    });
   }, x.b("templateSources", x.v), x.b("templateSources.domElement", x.v.n), x.b("templateSources.anonymousTemplate", x.v.qa);
  }(), function() {
   function t(e, t, n) {
    var r;
    for (t = x.f.nextSibling(t); e && (r = e) !== t; ) n(r, e = x.f.nextSibling(r));
   }
   function n(e, n) {
    if (e.length) {
     var r = e[0], i = e[e.length - 1], s = r.parentNode, a = x.Q.instance, o = a.preprocessNode;
     if (o) {
      if (t(r, i, function(e, t) {
       var n = e.previousSibling, s = o.call(a, e);
       s && (e === r && (r = s[0] || t), e === i && (i = s[s.length - 1] || n));
      }), e.length = 0, !r) return;
      r === i ? e.push(r) : (e.push(r, i), x.a.za(e, s));
     }
     t(r, i, function(e) {
      1 !== e.nodeType && 8 !== e.nodeType || x.Rb(n, e);
     }), t(r, i, function(e) {
      1 !== e.nodeType && 8 !== e.nodeType || x.M.yc(e, [ n ]);
     }), x.a.za(e, s);
    }
   }
   function r(e) {
    return e.nodeType ? e : 0 < e.length ? e[0] : null;
   }
   function i(e, t, i, s, o) {
    o = o || {};
    var c = (e && r(e) || i || {}).ownerDocument, u = o.templateEngine || a;
    if (x.Gb.Oc(i, u, c), "number" != typeof (i = u.renderTemplate(i, s, o, c)).length || 0 < i.length && "number" != typeof i[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
    switch (c = !1, t) {
    case "replaceChildren":
     x.f.da(e, i), c = !0;
     break;

    case "replaceNode":
     x.a.qc(e, i), c = !0;
     break;

    case "ignoreTargetNode":
     break;

    default:
     throw Error("Unknown renderMode: " + t);
    }
    return c && (n(i, s), o.afterRender && x.l.w(o.afterRender, null, [ i, s.$data ])), 
    i;
   }
   function s(e, t, n) {
    return x.H(e) ? e() : "function" == typeof e ? e(t, n) : e;
   }
   var a;
   x.Db = function(t) {
    if (t != e && !(t instanceof x.O)) throw Error("templateEngine must inherit from ko.templateEngine");
    a = t;
   }, x.Ab = function(t, n, o, c, u) {
    if (((o = o || {}).templateEngine || a) == e) throw Error("Set a template engine before calling renderTemplate");
    if (u = u || "replaceChildren", c) {
     var l = r(c);
     return x.B(function() {
      var e = n && n instanceof x.U ? n : new x.U(x.a.c(n)), a = s(t, e.$data, e);
      e = i(c, u, a, e, o), "replaceNode" == u && (l = r(c = e));
     }, null, {
      wa: function() {
       return !l || !x.a.nb(l);
      },
      i: l && "replaceNode" == u ? l.parentNode : l
     });
    }
    return x.M.wb(function(e) {
     x.Ab(t, n, o, e, "replaceNode");
    });
   }, x.kd = function(t, r, a, o, c) {
    function u(e, t) {
     n(t, f), a.afterRender && a.afterRender(t, e), f = null;
    }
    function l(e, n) {
     return f = c.createChildContext(e, a.as, function(e) {
      e.$index = n;
     }), i(null, "ignoreTargetNode", s(t, e, f), f, a);
    }
    var f;
    return x.B(function() {
     var t = x.a.c(r) || [];
     void 0 === t.length && (t = [ t ]), t = x.a.Ka(t, function(t) {
      return a.includeDestroyed || t === e || null === t || !x.a.c(t._destroy);
     }), x.l.w(x.a.Bb, null, [ o, t, l, a, u ]);
    }, null, {
     i: o
    });
   };
   var o = x.a.e.I();
   x.d.template = {
    init: function(e, t) {
     var n = x.a.c(t());
     if ("string" == typeof n || n.name) x.f.xa(e); else {
      if ("nodes" in n) {
       if (n = n.nodes || [], x.H(n)) throw Error('The "nodes" option must be a plain, non-observable array.');
      } else n = x.f.childNodes(e);
      n = x.a.jc(n), new x.v.qa(e).nodes(n);
     }
     return {
      controlsDescendantBindings: !0
     };
    },
    update: function(t, n, r, i, s) {
     var a, c = n();
     r = !0, i = null, "string" == typeof (n = x.a.c(c)) ? n = {} : (c = n.name, "if" in n && (r = x.a.c(n.if)), 
     r && "ifnot" in n && (r = !x.a.c(n.ifnot)), a = x.a.c(n.data)), "foreach" in n ? i = x.kd(c || t, r && n.foreach || [], n, t, s) : r ? (s = "data" in n ? s.createChildContext(a, n.as) : s, 
     i = x.Ab(c || t, s, n, t)) : x.f.xa(t), s = i, (a = x.a.e.get(t, o)) && "function" == typeof a.k && a.k(), 
     x.a.e.set(t, o, s && s.ba() ? s : e);
    }
   }, x.h.ta.template = function(e) {
    return 1 == (e = x.h.yb(e)).length && e[0].unknown || x.h.ad(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
   }, x.f.Z.template = !0;
  }(), x.b("setTemplateEngine", x.Db), x.b("renderTemplate", x.Ab), x.a.dc = function(e, t, n) {
   var r, i, s, a, o;
   if (e.length && t.length) for (r = i = 0; (!n || r < n) && (a = e[i]); ++i) {
    for (s = 0; o = t[s]; ++s) if (a.value === o.value) {
     a.moved = o.index, o.moved = a.index, t.splice(s, 1), r = s = 0;
     break;
    }
    r += s;
   }
  }, x.a.ib = function() {
   function e(e, t, n, r, i) {
    var s, a, o, c, u, l = Math.min, f = Math.max, p = [], d = e.length, h = t.length, m = h - d || 1, v = d + h + 1;
    for (s = 0; s <= d; s++) for (c = o, p.push(o = []), u = l(h, s + m), a = f(0, s - 1); a <= u; a++) o[a] = a ? s ? e[s - 1] === t[a - 1] ? c[a - 1] : l(c[a] || v, o[a - 1] || v) + 1 : a + 1 : s + 1;
    for (l = [], f = [], m = [], s = d, a = h; s || a; ) h = p[s][a] - 1, a && h === p[s][a - 1] ? f.push(l[l.length] = {
     status: n,
     value: t[--a],
     index: a
    }) : s && h === p[s - 1][a] ? m.push(l[l.length] = {
     status: r,
     value: e[--s],
     index: s
    }) : (--a, --s, i.sparse || l.push({
     status: "retained",
     value: t[a]
    }));
    return x.a.dc(m, f, !i.dontLimitMoves && 10 * d), l.reverse();
   }
   return function(t, n, r) {
    return r = "boolean" == typeof r ? {
     dontLimitMoves: r
    } : r || {}, t = t || [], n = n || [], t.length < n.length ? e(t, n, "added", "deleted", r) : e(n, t, "deleted", "added", r);
   };
  }(), x.b("utils.compareArrays", x.a.ib), function() {
   function t(t, n, r, i, s) {
    var a = [], o = x.B(function() {
     var e = n(r, s, x.a.za(a, t)) || [];
     0 < a.length && (x.a.qc(a, e), i && x.l.w(i, null, [ r, e, s ])), a.length = 0, 
     x.a.ra(a, e);
    }, null, {
     i: t,
     wa: function() {
      return !x.a.Qb(a);
     }
    });
    return {
     ca: a,
     B: o.ba() ? o : e
    };
   }
   var n = x.a.e.I(), r = x.a.e.I();
   x.a.Bb = function(i, s, a, o, c) {
    function u(e, t) {
     w = d[t], y !== t && (C[e] = w), w.qb(y++), x.a.za(w.ca, i), v.push(w), b.push(w);
    }
    function l(e, t) {
     if (e) for (var n = 0, r = t.length; n < r; n++) t[n] && x.a.q(t[n].ca, function(r) {
      e(r, n, t[n].ja);
     });
    }
    s = s || [], o = o || {};
    var f, p = x.a.e.get(i, n) === e, d = x.a.e.get(i, n) || [], h = x.a.fb(d, function(e) {
     return e.ja;
    }), m = x.a.ib(h, s, o.dontLimitMoves), v = [], g = 0, y = 0, _ = [], b = [];
    s = [];
    for (var w, k, E, C = [], T = (h = [], 0); k = m[T]; T++) switch (E = k.moved, k.status) {
    case "deleted":
     E === e && ((w = d[g]).B && (w.B.k(), w.B = e), x.a.za(w.ca, i).length && (o.beforeRemove && (v.push(w), 
     b.push(w), w.ja === r ? w = null : s[T] = w), w && _.push.apply(_, w.ca))), g++;
     break;

    case "retained":
     u(T, g++);
     break;

    case "added":
     E !== e ? u(T, E) : (w = {
      ja: k.value,
      qb: x.N(y++)
     }, v.push(w), b.push(w), p || (h[T] = w));
    }
    for (x.a.e.set(i, n, v), l(o.beforeMove, C), x.a.q(_, o.beforeRemove ? x.$ : x.removeNode), 
    T = 0, p = x.f.firstChild(i); w = b[T]; T++) {
     for (w.ca || x.a.extend(w, t(i, a, w.ja, c, w.qb)), g = 0; m = w.ca[g]; p = m.nextSibling, 
     f = m, g++) m !== p && x.f.gc(i, m, f);
     !w.Wc && c && (c(w.ja, w.ca, w.qb), w.Wc = !0);
    }
    for (l(o.beforeRemove, s), T = 0; T < s.length; ++T) s[T] && (s[T].ja = r);
    l(o.afterMove, C), l(o.afterAdd, h);
   };
  }(), x.b("utils.setDomNodeChildrenFromArrayMapping", x.a.Bb), x.W = function() {
   this.allowTemplateRewriting = !1;
  }, x.W.prototype = new x.O(), x.W.prototype.renderTemplateSource = function(e, t, n, r) {
   return (t = 9 > x.a.C || !e.nodes ? null : e.nodes()) ? x.a.V(t.cloneNode(!0).childNodes) : (e = e.text(), 
   x.a.ma(e, r));
  }, x.W.sb = new x.W(), x.Db(x.W.sb), x.b("nativeTemplateEngine", x.W), function() {
   x.vb = function() {
    var e = this.$c = function() {
     if (!i || !i.tmpl) return 0;
     try {
      if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
     } catch (e) {}
     return 1;
    }();
    this.renderTemplateSource = function(t, r, s, a) {
     if (a = a || n, s = s || {}, 2 > e) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
     var o = t.data("precompiled");
     return o || (o = t.text() || "", o = i.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), 
     t.data("precompiled", o)), t = [ r.$data ], r = i.extend({
      koBindingContext: r
     }, s.templateOptions), (r = i.tmpl(o, t, r)).appendTo(a.createElement("div")), i.fragments = {}, 
     r;
    }, this.createJavaScriptEvaluatorBlock = function(e) {
     return "{{ko_code ((function() { return " + e + " })()) }}";
    }, this.addTemplate = function(e, t) {
     n.write("<script type='text/html' id='" + e + "'>" + t + "<\/script>");
    }, 0 < e && (i.tmpl.tag.ko_code = {
     open: "__.push($1 || '');"
    }, i.tmpl.tag.ko_with = {
     open: "with($1) {",
     close: "} "
    });
   }, x.vb.prototype = new x.O();
   var e = new x.vb();
   0 < e.$c && x.Db(e), x.b("jqueryTmplTemplateEngine", x.vb);
  }();
 });
}();