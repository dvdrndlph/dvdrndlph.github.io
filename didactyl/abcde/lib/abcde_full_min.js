/* abcDE_full_min.js v6.0.101 */
!function(e, t) {
 "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
  if (!e.document) throw new Error("jQuery requires a window with a document");
  return t(e);
 } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
 var n = [], r = e.document, i = n.slice, s = n.concat, o = n.push, a = n.indexOf, c = {}, l = c.toString, u = c.hasOwnProperty, f = {}, d = "1.12.0", p = function(e, t) {
  return new p.fn.init(e, t);
 }, h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, m = /^-ms-/, g = /-([\da-z])/gi, y = function(e, t) {
  return t.toUpperCase();
 };
 function v(e) {
  var t = !!e && "length" in e && e.length, n = p.type(e);
  return "function" !== n && !p.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
 }
 p.fn = p.prototype = {
  jquery: d,
  constructor: p,
  selector: "",
  length: 0,
  toArray: function() {
   return i.call(this);
  },
  get: function(e) {
   return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this);
  },
  pushStack: function(e) {
   var t = p.merge(this.constructor(), e);
   return t.prevObject = this, t.context = this.context, t;
  },
  each: function(e) {
   return p.each(this, e);
  },
  map: function(e) {
   return this.pushStack(p.map(this, function(t, n) {
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
  push: o,
  sort: n.sort,
  splice: n.splice
 }, p.extend = p.fn.extend = function() {
  var e, t, n, r, i, s, o = arguments[0] || {}, a = 1, c = arguments.length, l = !1;
  for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == typeof o || p.isFunction(o) || (o = {}), 
  a === c && (o = this, a--); c > a; a++) if (null != (i = arguments[a])) for (r in i) e = o[r], 
  o !== (n = i[r]) && (l && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, 
  s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(l, s, n)) : void 0 !== n && (o[r] = n));
  return o;
 }, p.extend({
  expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function(e) {
   throw new Error(e);
  },
  noop: function() {},
  isFunction: function(e) {
   return "function" === p.type(e);
  },
  isArray: Array.isArray || function(e) {
   return "array" === p.type(e);
  },
  isWindow: function(e) {
   return null != e && e == e.window;
  },
  isNumeric: function(e) {
   var t = e && e.toString();
   return !p.isArray(e) && t - parseFloat(t) + 1 >= 0;
  },
  isEmptyObject: function(e) {
   var t;
   for (t in e) return !1;
   return !0;
  },
  isPlainObject: function(e) {
   var t;
   if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
   try {
    if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype, "isPrototypeOf")) return !1;
   } catch (e) {
    return !1;
   }
   if (!f.ownFirst) for (t in e) return u.call(e, t);
   for (t in e) ;
   return void 0 === t || u.call(e, t);
  },
  type: function(e) {
   return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[l.call(e)] || "object" : typeof e;
  },
  globalEval: function(t) {
   t && p.trim(t) && (e.execScript || function(t) {
    e.eval.call(e, t);
   })(t);
  },
  camelCase: function(e) {
   return e.replace(m, "ms-").replace(g, y);
  },
  nodeName: function(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  },
  each: function(e, t) {
   var n, r = 0;
   if (v(e)) for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
   return e;
  },
  trim: function(e) {
   return null == e ? "" : (e + "").replace(h, "");
  },
  makeArray: function(e, t) {
   var n = t || [];
   return null != e && (v(Object(e)) ? p.merge(n, "string" == typeof e ? [ e ] : e) : o.call(n, e)), 
   n;
  },
  inArray: function(e, t, n) {
   var r;
   if (t) {
    if (a) return a.call(t, e, n);
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
   for (var r = [], i = 0, s = e.length, o = !n; s > i; i++) !t(e[i], i) !== o && r.push(e[i]);
   return r;
  },
  map: function(e, t, n) {
   var r, i, o = 0, a = [];
   if (v(e)) for (r = e.length; r > o; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
   return s.apply([], a);
  },
  guid: 1,
  proxy: function(e, t) {
   var n, r, s;
   return "string" == typeof t && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = i.call(arguments, 2), 
   (r = function() {
    return e.apply(t || this, n.concat(i.call(arguments)));
   }).guid = e.guid = e.guid || p.guid++, r) : void 0;
  },
  now: function() {
   return +new Date();
  },
  support: f
 }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), 
 p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
  c["[object " + t + "]"] = t.toLowerCase();
 });
 var _ = function(e) {
  var t, n, r, i, s, o, a, c, l, u, f, d, p, h, m, g, y, v, _, A = "sizzle" + 1 * new Date(), b = e.document, x = 0, w = 0, C = se(), k = se(), E = se(), B = function(e, t) {
   return e === t && (f = !0), 0;
  }, T = 1 << 31, I = {}.hasOwnProperty, S = [], M = S.pop, N = S.push, O = S.push, D = S.slice, F = function(e, t) {
   for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
   return -1;
  }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Q = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", P = "\\[" + Q + "*(" + j + ")(?:" + Q + "*([*^$|!~]?=)" + Q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + Q + "*\\]", U = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", L = new RegExp(Q + "+", "g"), V = new RegExp("^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$", "g"), z = new RegExp("^" + Q + "*," + Q + "*"), H = new RegExp("^" + Q + "*([>+~]|" + Q + ")" + Q + "*"), Y = new RegExp("=" + Q + "*([^\\]'\"]*?)" + Q + "*\\]", "g"), q = new RegExp(U), J = new RegExp("^" + j + "$"), G = {
   ID: new RegExp("^#(" + j + ")"),
   CLASS: new RegExp("^\\.(" + j + ")"),
   TAG: new RegExp("^(" + j + "|[*])"),
   ATTR: new RegExp("^" + P),
   PSEUDO: new RegExp("^" + U),
   CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Q + "*(even|odd|(([+-]|)(\\d*)n|)" + Q + "*(?:([+-]|)" + Q + "*(\\d+)|))" + Q + "*\\)|)", "i"),
   bool: new RegExp("^(?:" + R + ")$", "i"),
   needsContext: new RegExp("^" + Q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Q + "*((?:-\\d)?\\d*)" + Q + "*\\)|)(?=[^-]|$)", "i")
  }, X = /^(?:input|select|textarea|button)$/i, W = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + Q + "?|(" + Q + ")|.)", "ig"), ne = function(e, t, n) {
   var r = "0x" + t - 65536;
   return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
  }, re = function() {
   d();
  };
  try {
   O.apply(S = D.call(b.childNodes), b.childNodes), S[b.childNodes.length].nodeType;
  } catch (e) {
   O = {
    apply: S.length ? function(e, t) {
     N.apply(e, D.call(t));
    } : function(e, t) {
     for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
     e.length = n - 1;
    }
   };
  }
  function ie(e, t, r, i) {
   var s, a, l, u, f, h, y, v, x = t && t.ownerDocument, w = t ? t.nodeType : 9;
   if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
   if (!i && ((t ? t.ownerDocument || t : b) !== p && d(t), t = t || p, m)) {
    if (11 !== w && (h = $.exec(e))) if (s = h[1]) {
     if (9 === w) {
      if (!(l = t.getElementById(s))) return r;
      if (l.id === s) return r.push(l), r;
     } else if (x && (l = x.getElementById(s)) && _(t, l) && l.id === s) return r.push(l), 
     r;
    } else {
     if (h[2]) return O.apply(r, t.getElementsByTagName(e)), r;
     if ((s = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(s)), 
     r;
    }
    if (n.qsa && !E[e + " "] && (!g || !g.test(e))) {
     if (1 !== w) x = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
      for ((u = t.getAttribute("id")) ? u = u.replace(ee, "\\$&") : t.setAttribute("id", u = A), 
      a = (y = o(e)).length, f = J.test(u) ? "#" + u : "[id='" + u + "']"; a--; ) y[a] = f + " " + me(y[a]);
      v = y.join(","), x = Z.test(e) && pe(t.parentNode) || t;
     }
     if (v) try {
      return O.apply(r, x.querySelectorAll(v)), r;
     } catch (e) {} finally {
      u === A && t.removeAttribute("id");
     }
    }
   }
   return c(e.replace(V, "$1"), t, r, i);
  }
  function se() {
   var e = [];
   return function t(n, i) {
    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
   };
  }
  function oe(e) {
   return e[A] = !0, e;
  }
  function ae(e) {
   var t = p.createElement("div");
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
  function le(e, t) {
   var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || T) - (~e.sourceIndex || T);
   if (r) return r;
   if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
   return e ? 1 : -1;
  }
  function ue(e) {
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
  function de(e) {
   return oe(function(t) {
    return t = +t, oe(function(n, r) {
     for (var i, s = e([], n.length, t), o = s.length; o--; ) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
    });
   });
  }
  function pe(e) {
   return e && void 0 !== e.getElementsByTagName && e;
  }
  for (t in n = ie.support = {}, s = ie.isXML = function(e) {
   var t = e && (e.ownerDocument || e).documentElement;
   return !!t && "HTML" !== t.nodeName;
  }, d = ie.setDocument = function(e) {
   var t, i, o = e ? e.ownerDocument || e : b;
   return o !== p && 9 === o.nodeType && o.documentElement ? (h = (p = o).documentElement, 
   m = !s(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
   n.attributes = ae(function(e) {
    return e.className = "i", !e.getAttribute("className");
   }), n.getElementsByTagName = ae(function(e) {
    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
   }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ae(function(e) {
    return h.appendChild(e).id = A, !p.getElementsByName || !p.getElementsByName(A).length;
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
   }, y = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (ae(function(e) {
    h.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
    e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + Q + "*(?:''|\"\")"), 
    e.querySelectorAll("[selected]").length || g.push("\\[" + Q + "*(?:value|" + R + ")"), 
    e.querySelectorAll("[id~=" + A + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), 
    e.querySelectorAll("a#" + A + "+*").length || g.push(".#.+[+~]");
   }), ae(function(e) {
    var t = p.createElement("input");
    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + Q + "*[*^$|!~]?="), 
    e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
    g.push(",.*:");
   })), (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae(function(e) {
    n.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), y.push("!=", U);
   }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), 
   t = K.test(h.compareDocumentPosition), _ = t || K.test(h.contains) ? function(e, t) {
    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
   } : function(e, t) {
    if (t) for (;t = t.parentNode; ) if (t === e) return !0;
    return !1;
   }, B = t ? function(e, t) {
    if (e === t) return f = !0, 0;
    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === b && _(b, e) ? -1 : t === p || t.ownerDocument === b && _(b, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & r ? -1 : 1);
   } : function(e, t) {
    if (e === t) return f = !0, 0;
    var n, r = 0, i = e.parentNode, s = t.parentNode, o = [ e ], a = [ t ];
    if (!i || !s) return e === p ? -1 : t === p ? 1 : i ? -1 : s ? 1 : u ? F(u, e) - F(u, t) : 0;
    if (i === s) return le(e, t);
    for (n = e; n = n.parentNode; ) o.unshift(n);
    for (n = t; n = n.parentNode; ) a.unshift(n);
    for (;o[r] === a[r]; ) r++;
    return r ? le(o[r], a[r]) : o[r] === b ? -1 : a[r] === b ? 1 : 0;
   }, p) : p;
  }, ie.matches = function(e, t) {
   return ie(e, null, null, t);
  }, ie.matchesSelector = function(e, t) {
   if ((e.ownerDocument || e) !== p && d(e), t = t.replace(Y, "='$1']"), n.matchesSelector && m && !E[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t))) try {
    var r = v.call(e, t);
    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
   } catch (e) {}
   return ie(t, p, null, [ e ]).length > 0;
  }, ie.contains = function(e, t) {
   return (e.ownerDocument || e) !== p && d(e), _(e, t);
  }, ie.attr = function(e, t) {
   (e.ownerDocument || e) !== p && d(e);
   var i = r.attrHandle[t.toLowerCase()], s = i && I.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
   return void 0 !== s ? s : n.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
  }, ie.error = function(e) {
   throw new Error("Syntax error, unrecognized expression: " + e);
  }, ie.uniqueSort = function(e) {
   var t, r = [], i = 0, s = 0;
   if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(B), f) {
    for (;t = e[s++]; ) t === e[s] && (i = r.push(s));
    for (;i--; ) e.splice(r[i], 1);
   }
   return u = null, e;
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
   createPseudo: oe,
   match: G,
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
     return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
     var t = C[e + " "];
     return t || (t = new RegExp("(^|" + Q + ")" + e + "(" + Q + "|$)")) && C(e, function(e) {
      return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
     });
    },
    ATTR: function(e, t, n) {
     return function(r) {
      var i = ie.attr(r, e);
      return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(L, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
     };
    },
    CHILD: function(e, t, n, r, i) {
     var s = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), a = "of-type" === t;
     return 1 === r && 0 === i ? function(e) {
      return !!e.parentNode;
     } : function(t, n, c) {
      var l, u, f, d, p, h, m = s !== o ? "nextSibling" : "previousSibling", g = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !c && !a, _ = !1;
      if (g) {
       if (s) {
        for (;m; ) {
         for (d = t; d = d[m]; ) if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
         h = m = "only" === e && !h && "nextSibling";
        }
        return !0;
       }
       if (h = [ o ? g.firstChild : g.lastChild ], o && v) {
        for (_ = (p = (l = (u = (f = (d = g)[A] || (d[A] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && l[1]) && l[2], 
        d = p && g.childNodes[p]; d = ++p && d && d[m] || (_ = p = 0) || h.pop(); ) if (1 === d.nodeType && ++_ && d === t) {
         u[e] = [ x, p, _ ];
         break;
        }
       } else if (v && (_ = p = (l = (u = (f = (d = t)[A] || (d[A] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && l[1]), 
       !1 === _) for (;(d = ++p && d && d[m] || (_ = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++_ || (v && ((u = (f = d[A] || (d[A] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [ x, _ ]), 
       d !== t)); ) ;
       return (_ -= i) === r || _ % r == 0 && _ / r >= 0;
      }
     };
    },
    PSEUDO: function(e, t) {
     var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
     return i[A] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, n) {
      for (var r, s = i(e, t), o = s.length; o--; ) e[r = F(e, s[o])] = !(n[r] = s[o]);
     }) : function(e) {
      return i(e, 0, n);
     }) : i;
    }
   },
   pseudos: {
    not: oe(function(e) {
     var t = [], n = [], r = a(e.replace(V, "$1"));
     return r[A] ? oe(function(e, t, n, i) {
      for (var s, o = r(e, null, i, []), a = e.length; a--; ) (s = o[a]) && (e[a] = !(t[a] = s));
     }) : function(e, i, s) {
      return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop();
     };
    }),
    has: oe(function(e) {
     return function(t) {
      return ie(e, t).length > 0;
     };
    }),
    contains: oe(function(e) {
     return e = e.replace(te, ne), function(t) {
      return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
     };
    }),
    lang: oe(function(e) {
     return J.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
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
     return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
     return W.test(e.nodeName);
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
    first: de(function() {
     return [ 0 ];
    }),
    last: de(function(e, t) {
     return [ t - 1 ];
    }),
    eq: de(function(e, t, n) {
     return [ 0 > n ? n + t : n ];
    }),
    even: de(function(e, t) {
     for (var n = 0; t > n; n += 2) e.push(n);
     return e;
    }),
    odd: de(function(e, t) {
     for (var n = 1; t > n; n += 2) e.push(n);
     return e;
    }),
    lt: de(function(e, t, n) {
     for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
     return e;
    }),
    gt: de(function(e, t, n) {
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
  }) r.pseudos[t] = ue(t);
  for (t in {
   submit: !0,
   reset: !0
  }) r.pseudos[t] = fe(t);
  function he() {}
  function me(e) {
   for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
   return r;
  }
  function ge(e, t, n) {
   var r = t.dir, i = n && "parentNode" === r, s = w++;
   return t.first ? function(t, n, s) {
    for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, s);
   } : function(t, n, o) {
    var a, c, l, u = [ x, s ];
    if (o) {
     for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, o)) return !0;
    } else for (;t = t[r]; ) if (1 === t.nodeType || i) {
     if ((a = (c = (l = t[A] || (t[A] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && a[0] === x && a[1] === s) return u[2] = a[2];
     if (c[r] = u, u[2] = e(t, n, o)) return !0;
    }
   };
  }
  function ye(e) {
   return e.length > 1 ? function(t, n, r) {
    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
    return !0;
   } : e[0];
  }
  function ve(e, t, n, r, i) {
   for (var s, o = [], a = 0, c = e.length, l = null != t; c > a; a++) (s = e[a]) && (!n || n(s, r, i)) && (o.push(s), 
   l && t.push(a));
   return o;
  }
  function _e(e, t, n, r, i, s) {
   return r && !r[A] && (r = _e(r)), i && !i[A] && (i = _e(i, s)), oe(function(s, o, a, c) {
    var l, u, f, d = [], p = [], h = o.length, m = s || function(e, t, n) {
     for (var r = 0, i = t.length; i > r; r++) ie(e, t[r], n);
     return n;
    }(t || "*", a.nodeType ? [ a ] : a, []), g = !e || !s && t ? m : ve(m, d, e, a, c), y = n ? i || (s ? e : h || r) ? [] : o : g;
    if (n && n(g, y, a, c), r) for (l = ve(y, p), r(l, [], a, c), u = l.length; u--; ) (f = l[u]) && (y[p[u]] = !(g[p[u]] = f));
    if (s) {
     if (i || e) {
      if (i) {
       for (l = [], u = y.length; u--; ) (f = y[u]) && l.push(g[u] = f);
       i(null, y = [], l, c);
      }
      for (u = y.length; u--; ) (f = y[u]) && (l = i ? F(s, f) : d[u]) > -1 && (s[l] = !(o[l] = f));
     }
    } else y = ve(y === o ? y.splice(h, y.length) : y), i ? i(null, o, y, c) : O.apply(o, y);
   });
  }
  function Ae(e) {
   for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], c = o ? 1 : 0, u = ge(function(e) {
    return e === t;
   }, a, !0), f = ge(function(e) {
    return F(t, e) > -1;
   }, a, !0), d = [ function(e, n, r) {
    var i = !o && (r || n !== l) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
    return t = null, i;
   } ]; s > c; c++) if (n = r.relative[e[c].type]) d = [ ge(ye(d), n) ]; else {
    if ((n = r.filter[e[c].type].apply(null, e[c].matches))[A]) {
     for (i = ++c; s > i && !r.relative[e[i].type]; i++) ;
     return _e(c > 1 && ye(d), c > 1 && me(e.slice(0, c - 1).concat({
      value: " " === e[c - 2].type ? "*" : ""
     })).replace(V, "$1"), n, i > c && Ae(e.slice(c, i)), s > i && Ae(e = e.slice(i)), s > i && me(e));
    }
    d.push(n);
   }
   return ye(d);
  }
  function be(e, t) {
   var n = t.length > 0, i = e.length > 0, s = function(s, o, a, c, u) {
    var f, h, g, y = 0, v = "0", _ = s && [], A = [], b = l, w = s || i && r.find.TAG("*", u), C = x += null == b ? 1 : Math.random() || .1, k = w.length;
    for (u && (l = o === p || o || u); v !== k && null != (f = w[v]); v++) {
     if (i && f) {
      for (h = 0, o || f.ownerDocument === p || (d(f), a = !m); g = e[h++]; ) if (g(f, o || p, a)) {
       c.push(f);
       break;
      }
      u && (x = C);
     }
     n && ((f = !g && f) && y--, s && _.push(f));
    }
    if (y += v, n && v !== y) {
     for (h = 0; g = t[h++]; ) g(_, A, o, a);
     if (s) {
      if (y > 0) for (;v--; ) _[v] || A[v] || (A[v] = M.call(c));
      A = ve(A);
     }
     O.apply(c, A), u && !s && A.length > 0 && y + t.length > 1 && ie.uniqueSort(c);
    }
    return u && (x = C, l = b), _;
   };
   return n ? oe(s) : s;
  }
  return he.prototype = r.filters = r.pseudos, r.setFilters = new he(), o = ie.tokenize = function(e, t) {
   var n, i, s, o, a, c, l, u = k[e + " "];
   if (u) return t ? 0 : u.slice(0);
   for (a = e, c = [], l = r.preFilter; a; ) {
    for (o in (!n || (i = z.exec(a))) && (i && (a = a.slice(i[0].length) || a), c.push(s = [])), 
    n = !1, (i = H.exec(a)) && (n = i.shift(), s.push({
     value: n,
     type: i[0].replace(V, " ")
    }), a = a.slice(n.length)), r.filter) !(i = G[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), 
    s.push({
     value: n,
     type: o,
     matches: i
    }), a = a.slice(n.length));
    if (!n) break;
   }
   return t ? a.length : a ? ie.error(e) : k(e, c).slice(0);
  }, a = ie.compile = function(e, t) {
   var n, r = [], i = [], s = E[e + " "];
   if (!s) {
    for (t || (t = o(e)), n = t.length; n--; ) (s = Ae(t[n]))[A] ? r.push(s) : i.push(s);
    (s = E(e, be(i, r))).selector = e;
   }
   return s;
  }, c = ie.select = function(e, t, i, s) {
   var c, l, u, f, d, p = "function" == typeof e && e, h = !s && o(e = p.selector || e);
   if (i = i || [], 1 === h.length) {
    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && n.getById && 9 === t.nodeType && m && r.relative[l[1].type]) {
     if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return i;
     p && (t = t.parentNode), e = e.slice(l.shift().value.length);
    }
    for (c = G.needsContext.test(e) ? 0 : l.length; c-- && (u = l[c], !r.relative[f = u.type]); ) if ((d = r.find[f]) && (s = d(u.matches[0].replace(te, ne), Z.test(l[0].type) && pe(t.parentNode) || t))) {
     if (l.splice(c, 1), !(e = s.length && me(l))) return O.apply(i, s), i;
     break;
    }
   }
   return (p || a(e, h))(s, t, !m, i, !t || Z.test(e) && pe(t.parentNode) || t), i;
  }, n.sortStable = A.split("").sort(B).join("") === A, n.detectDuplicates = !!f, 
  d(), n.sortDetached = ae(function(e) {
   return 1 & e.compareDocumentPosition(p.createElement("div"));
  }), ae(function(e) {
   return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
  }) || ce("type|href|height|width", function(e, t, n) {
   return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
  }), n.attributes && ae(function(e) {
   return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
  }) || ce("value", function(e, t, n) {
   return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
  }), ae(function(e) {
   return null == e.getAttribute("disabled");
  }) || ce(R, function(e, t, n) {
   var r;
   return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
  }), ie;
 }(e);
 p.find = _, p.expr = _.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = _.uniqueSort, 
 p.text = _.getText, p.isXMLDoc = _.isXML, p.contains = _.contains;
 var A = function(e, t, n) {
  for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
   if (i && p(e).is(n)) break;
   r.push(e);
  }
  return r;
 }, b = function(e, t) {
  for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
  return n;
 }, x = p.expr.match.needsContext, w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, C = /^.[^:#\[\.,]*$/;
 function k(e, t, n) {
  if (p.isFunction(t)) return p.grep(e, function(e, r) {
   return !!t.call(e, r, e) !== n;
  });
  if (t.nodeType) return p.grep(e, function(e) {
   return e === t !== n;
  });
  if ("string" == typeof t) {
   if (C.test(t)) return p.filter(t, e, n);
   t = p.filter(t, e);
  }
  return p.grep(e, function(e) {
   return p.inArray(e, t) > -1 !== n;
  });
 }
 p.filter = function(e, t, n) {
  var r = t[0];
  return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [ r ] : [] : p.find.matches(e, p.grep(t, function(e) {
   return 1 === e.nodeType;
  }));
 }, p.fn.extend({
  find: function(e) {
   var t, n = [], r = this, i = r.length;
   if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
    for (t = 0; i > t; t++) if (p.contains(r[t], this)) return !0;
   }));
   for (t = 0; i > t; t++) p.find(e, r[t], n);
   return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, 
   n;
  },
  filter: function(e) {
   return this.pushStack(k(this, e || [], !1));
  },
  not: function(e) {
   return this.pushStack(k(this, e || [], !0));
  },
  is: function(e) {
   return !!k(this, "string" == typeof e && x.test(e) ? p(e) : e || [], !1).length;
  }
 });
 var E, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
 (p.fn.init = function(e, t, n) {
  var i, s;
  if (!e) return this;
  if (n = n || E, "string" == typeof e) {
   if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : B.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
   if (i[1]) {
    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), 
    w.test(i[1]) && p.isPlainObject(t)) for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
    return this;
   }
   if ((s = r.getElementById(i[2])) && s.parentNode) {
    if (s.id !== i[2]) return E.find(e);
    this.length = 1, this[0] = s;
   }
   return this.context = r, this.selector = e, this;
  }
  return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, 
  this.context = e.context), p.makeArray(e, this));
 }).prototype = p.fn, E = p(r);
 var T = /^(?:parents|prev(?:Until|All))/, I = {
  children: !0,
  contents: !0,
  next: !0,
  prev: !0
 };
 function S(e, t) {
  do {
   e = e[t];
  } while (e && 1 !== e.nodeType);
  return e;
 }
 p.fn.extend({
  has: function(e) {
   var t, n = p(e, this), r = n.length;
   return this.filter(function() {
    for (t = 0; r > t; t++) if (p.contains(this, n[t])) return !0;
   });
  },
  closest: function(e, t) {
   for (var n, r = 0, i = this.length, s = [], o = x.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
    s.push(n);
    break;
   }
   return this.pushStack(s.length > 1 ? p.uniqueSort(s) : s);
  },
  index: function(e) {
   return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  },
  add: function(e, t) {
   return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))));
  },
  addBack: function(e) {
   return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }
 }), p.each({
  parent: function(e) {
   var t = e.parentNode;
   return t && 11 !== t.nodeType ? t : null;
  },
  parents: function(e) {
   return A(e, "parentNode");
  },
  parentsUntil: function(e, t, n) {
   return A(e, "parentNode", n);
  },
  next: function(e) {
   return S(e, "nextSibling");
  },
  prev: function(e) {
   return S(e, "previousSibling");
  },
  nextAll: function(e) {
   return A(e, "nextSibling");
  },
  prevAll: function(e) {
   return A(e, "previousSibling");
  },
  nextUntil: function(e, t, n) {
   return A(e, "nextSibling", n);
  },
  prevUntil: function(e, t, n) {
   return A(e, "previousSibling", n);
  },
  siblings: function(e) {
   return b((e.parentNode || {}).firstChild, e);
  },
  children: function(e) {
   return b(e.firstChild);
  },
  contents: function(e) {
   return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes);
  }
 }, function(e, t) {
  p.fn[e] = function(n, r) {
   var i = p.map(this, t, n);
   return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), 
   this.length > 1 && (I[e] || (i = p.uniqueSort(i)), T.test(e) && (i = i.reverse())), 
   this.pushStack(i);
  };
 });
 var M, N, O = /\S+/g;
 function D() {
  r.addEventListener ? (r.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F)) : (r.detachEvent("onreadystatechange", F), 
  e.detachEvent("onload", F));
 }
 function F() {
  (r.addEventListener || "load" === e.event.type || "complete" === r.readyState) && (D(), 
  p.ready());
 }
 for (N in p.Callbacks = function(e) {
  e = "string" == typeof e ? function(e) {
   var t = {};
   return p.each(e.match(O) || [], function(e, n) {
    t[n] = !0;
   }), t;
  }(e) : p.extend({}, e);
  var t, n, r, i, s = [], o = [], a = -1, c = function() {
   for (i = e.once, r = t = !0; o.length; a = -1) for (n = o.shift(); ++a < s.length; ) !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length, 
   n = !1);
   e.memory || (n = !1), t = !1, i && (s = n ? [] : "");
  }, l = {
   add: function() {
    return s && (n && !t && (a = s.length - 1, o.push(n)), function t(n) {
     p.each(n, function(n, r) {
      p.isFunction(r) ? e.unique && l.has(r) || s.push(r) : r && r.length && "string" !== p.type(r) && t(r);
     });
    }(arguments), n && !t && c()), this;
   },
   remove: function() {
    return p.each(arguments, function(e, t) {
     for (var n; (n = p.inArray(t, s, n)) > -1; ) s.splice(n, 1), a >= n && a--;
    }), this;
   },
   has: function(e) {
    return e ? p.inArray(e, s) > -1 : s.length > 0;
   },
   empty: function() {
    return s && (s = []), this;
   },
   disable: function() {
    return i = o = [], s = n = "", this;
   },
   disabled: function() {
    return !s;
   },
   lock: function() {
    return i = !0, n || l.disable(), this;
   },
   locked: function() {
    return !!i;
   },
   fireWith: function(e, n) {
    return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], o.push(n), t || c()), 
    this;
   },
   fire: function() {
    return l.fireWith(this, arguments), this;
   },
   fired: function() {
    return !!r;
   }
  };
  return l;
 }, p.extend({
  Deferred: function(e) {
   var t = [ [ "resolve", "done", p.Callbacks("once memory"), "resolved" ], [ "reject", "fail", p.Callbacks("once memory"), "rejected" ], [ "notify", "progress", p.Callbacks("memory") ] ], n = "pending", r = {
    state: function() {
     return n;
    },
    always: function() {
     return i.done(arguments).fail(arguments), this;
    },
    then: function() {
     var e = arguments;
     return p.Deferred(function(n) {
      p.each(t, function(t, s) {
       var o = p.isFunction(e[t]) && e[t];
       i[s[1]](function() {
        var e = o && o.apply(this, arguments);
        e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [ e ] : arguments);
       });
      }), e = null;
     }).promise();
    },
    promise: function(e) {
     return null != e ? p.extend(e, r) : r;
    }
   }, i = {};
   return r.pipe = r.then, p.each(t, function(e, s) {
    var o = s[2], a = s[3];
    r[s[1]] = o.add, a && o.add(function() {
     n = a;
    }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
     return i[s[0] + "With"](this === i ? r : this, arguments), this;
    }, i[s[0] + "With"] = o.fireWith;
   }), r.promise(i), e && e.call(i, i), i;
  },
  when: function(e) {
   var t, n, r, s = 0, o = i.call(arguments), a = o.length, c = 1 !== a || e && p.isFunction(e.promise) ? a : 0, l = 1 === c ? e : p.Deferred(), u = function(e, n, r) {
    return function(s) {
     n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : s, r === t ? l.notifyWith(n, r) : --c || l.resolveWith(n, r);
    };
   };
   if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > s; s++) o[s] && p.isFunction(o[s].promise) ? o[s].promise().progress(u(s, n, t)).done(u(s, r, o)).fail(l.reject) : --c;
   return c || l.resolveWith(r, o), l.promise();
  }
 }), p.fn.ready = function(e) {
  return p.ready.promise().done(e), this;
 }, p.extend({
  isReady: !1,
  readyWait: 1,
  holdReady: function(e) {
   e ? p.readyWait++ : p.ready(!0);
  },
  ready: function(e) {
   (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== e && --p.readyWait > 0 || (M.resolveWith(r, [ p ]), 
   p.fn.triggerHandler && (p(r).triggerHandler("ready"), p(r).off("ready"))));
  }
 }), p.ready.promise = function(t) {
  if (!M) if (M = p.Deferred(), "complete" === r.readyState) e.setTimeout(p.ready); else if (r.addEventListener) r.addEventListener("DOMContentLoaded", F), 
  e.addEventListener("load", F); else {
   r.attachEvent("onreadystatechange", F), e.attachEvent("onload", F);
   var n = !1;
   try {
    n = null == e.frameElement && r.documentElement;
   } catch (e) {}
   n && n.doScroll && function t() {
    if (!p.isReady) {
     try {
      n.doScroll("left");
     } catch (n) {
      return e.setTimeout(t, 50);
     }
     D(), p.ready();
    }
   }();
  }
  return M.promise(t);
 }, p.ready.promise(), p(f)) break;
 f.ownFirst = "0" === N, f.inlineBlockNeedsLayout = !1, p(function() {
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
 var R = function(e) {
  var t = p.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
  return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
 }, Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, j = /([A-Z])/g;
 function P(e, t, n) {
  if (void 0 === n && 1 === e.nodeType) {
   var r = "data-" + t.replace(j, "-$1").toLowerCase();
   if ("string" == typeof (n = e.getAttribute(r))) {
    try {
     n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Q.test(n) ? p.parseJSON(n) : n);
    } catch (e) {}
    p.data(e, t, n);
   } else n = void 0;
  }
  return n;
 }
 function U(e) {
  var t;
  for (t in e) if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
  return !0;
 }
 function L(e, t, r, i) {
  if (R(e)) {
   var s, o, a = p.expando, c = e.nodeType, l = c ? p.cache : e, u = c ? e[a] : e[a] && a;
   if (u && l[u] && (i || l[u].data) || void 0 !== r || "string" != typeof t) return u || (u = c ? e[a] = n.pop() || p.guid++ : a), 
   l[u] || (l[u] = c ? {} : {
    toJSON: p.noop
   }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = p.extend(l[u], t) : l[u].data = p.extend(l[u].data, t)), 
   o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[p.camelCase(t)] = r), 
   "string" == typeof t ? null == (s = o[t]) && (s = o[p.camelCase(t)]) : s = o, s;
  }
 }
 function V(e, t, n) {
  if (R(e)) {
   var r, i, s = e.nodeType, o = s ? p.cache : e, a = s ? e[p.expando] : p.expando;
   if (o[a]) {
    if (t && (r = n ? o[a] : o[a].data)) {
     p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [ t ] : t = (t = p.camelCase(t)) in r ? [ t ] : t.split(" "), 
     i = t.length;
     for (;i--; ) delete r[t[i]];
     if (n ? !U(r) : !p.isEmptyObject(r)) return;
    }
    (n || (delete o[a].data, U(o[a]))) && (s ? p.cleanData([ e ], !0) : f.deleteExpando || o != o.window ? delete o[a] : o[a] = void 0);
   }
  }
 }
 p.extend({
  cache: {},
  noData: {
   "applet ": !0,
   "embed ": !0,
   "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
  },
  hasData: function(e) {
   return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !U(e);
  },
  data: function(e, t, n) {
   return L(e, t, n);
  },
  removeData: function(e, t) {
   return V(e, t);
  },
  _data: function(e, t, n) {
   return L(e, t, n, !0);
  },
  _removeData: function(e, t) {
   return V(e, t, !0);
  }
 }), p.fn.extend({
  data: function(e, t) {
   var n, r, i, s = this[0], o = s && s.attributes;
   if (void 0 === e) {
    if (this.length && (i = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
     for (n = o.length; n--; ) o[n] && (0 === (r = o[n].name).indexOf("data-") && P(s, r = p.camelCase(r.slice(5)), i[r]));
     p._data(s, "parsedAttrs", !0);
    }
    return i;
   }
   return "object" == typeof e ? this.each(function() {
    p.data(this, e);
   }) : arguments.length > 1 ? this.each(function() {
    p.data(this, e, t);
   }) : s ? P(s, e, p.data(s, e)) : void 0;
  },
  removeData: function(e) {
   return this.each(function() {
    p.removeData(this, e);
   });
  }
 }), p.extend({
  queue: function(e, t, n) {
   var r;
   return e ? (t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), 
   r || []) : void 0;
  },
  dequeue: function(e, t) {
   t = t || "fx";
   var n = p.queue(e, t), r = n.length, i = n.shift(), s = p._queueHooks(e, t);
   "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
   delete s.stop, i.call(e, function() {
    p.dequeue(e, t);
   }, s)), !r && s && s.empty.fire();
  },
  _queueHooks: function(e, t) {
   var n = t + "queueHooks";
   return p._data(e, n) || p._data(e, n, {
    empty: p.Callbacks("once memory").add(function() {
     p._removeData(e, t + "queue"), p._removeData(e, n);
    })
   });
  }
 }), p.fn.extend({
  queue: function(e, t) {
   var n = 2;
   return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
    var n = p.queue(this, e, t);
    p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
   });
  },
  dequeue: function(e) {
   return this.each(function() {
    p.dequeue(this, e);
   });
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", []);
  },
  promise: function(e, t) {
   var n, r = 1, i = p.Deferred(), s = this, o = this.length, a = function() {
    --r || i.resolveWith(s, [ s ]);
   };
   for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--; ) (n = p._data(s[o], e + "queueHooks")) && n.empty && (r++, 
   n.empty.add(a));
   return a(), i.promise(t);
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
 var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, H = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"), Y = [ "Top", "Right", "Bottom", "Left" ], q = function(e, t) {
  return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e);
 };
 function J(e, t, n, r) {
  var i, s = 1, o = 20, a = r ? function() {
   return r.cur();
  } : function() {
   return p.css(e, t, "");
  }, c = a(), l = n && n[3] || (p.cssNumber[t] ? "" : "px"), u = (p.cssNumber[t] || "px" !== l && +c) && H.exec(p.css(e, t));
  if (u && u[3] !== l) {
   l = l || u[3], n = n || [], u = +c || 1;
   do {
    u /= s = s || ".5", p.style(e, t, u + l);
   } while (s !== (s = a() / c) && 1 !== s && --o);
  }
  return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
  r.start = u, r.end = i)), i;
 }
 var G = function(e, t, n, r, i, s, o) {
  var a = 0, c = e.length, l = null == n;
  if ("object" === p.type(n)) for (a in i = !0, n) G(e, t, a, n[a], !0, s, o); else if (void 0 !== r && (i = !0, 
  p.isFunction(r) || (o = !0), l && (o ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
   return l.call(p(e), n);
  })), t)) for (;c > a; a++) t(e[a], n, o ? r : r.call(e[a], a, t(e[a], n)));
  return i ? e : l ? t.call(e) : c ? t(e[0], n) : s;
 }, X = /^(?:checkbox|radio)$/i, W = /<([\w:-]+)/, K = /^$|\/(?:java|ecma)script/i, $ = /^\s+/, Z = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
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
  e[p.expando] = 1, f.attributes = !e.getAttribute(p.expando);
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
  if (!s) for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, ne(r, t));
  return void 0 === t || t && p.nodeName(e, t) ? p.merge([ e ], s) : s;
 }
 function re(e, t) {
  for (var n, r = 0; null != (n = e[r]); r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
 }
 te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, 
 te.th = te.td;
 var ie = /<|&#?\w+;/, se = /<tbody/i;
 function oe(e) {
  X.test(e.type) && (e.defaultChecked = e.checked);
 }
 function ae(e, t, n, r, i) {
  for (var s, o, a, c, l, u, d, h = e.length, m = ee(t), g = [], y = 0; h > y; y++) if ((o = e[y]) || 0 === o) if ("object" === p.type(o)) p.merge(g, o.nodeType ? [ o ] : o); else if (ie.test(o)) {
   for (c = c || m.appendChild(t.createElement("div")), l = (W.exec(o) || [ "", "" ])[1].toLowerCase(), 
   d = te[l] || te._default, c.innerHTML = d[1] + p.htmlPrefilter(o) + d[2], s = d[0]; s--; ) c = c.lastChild;
   if (!f.leadingWhitespace && $.test(o) && g.push(t.createTextNode($.exec(o)[0])), 
   !f.tbody) for (s = (o = "table" !== l || se.test(o) ? "<table>" !== d[1] || se.test(o) ? 0 : c : c.firstChild) && o.childNodes.length; s--; ) p.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
   for (p.merge(g, c.childNodes), c.textContent = ""; c.firstChild; ) c.removeChild(c.firstChild);
   c = m.lastChild;
  } else g.push(t.createTextNode(o));
  for (c && m.removeChild(c), f.appendChecked || p.grep(ne(g, "input"), oe), y = 0; o = g[y++]; ) if (r && p.inArray(o, r) > -1) i && i.push(o); else if (a = p.contains(o.ownerDocument, o), 
  c = ne(m.appendChild(o), "script"), a && re(c), n) for (s = 0; o = c[s++]; ) K.test(o.type || "") && n.push(o);
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
 var ce = /^(?:input|select|textarea)$/i, le = /^key/, ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fe = /^(?:focusinfocus|focusoutblur)$/, de = /^([^.]*)(?:\.(.+)|)/;
 function pe() {
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
 function ge(e, t, n, r, i, s) {
  var o, a;
  if ("object" == typeof t) {
   for (a in "string" != typeof n && (r = r || n, n = void 0), t) ge(e, a, n, r, t[a], s);
   return e;
  }
  if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
  r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = he; else if (!i) return e;
  return 1 === s && (o = i, (i = function(e) {
   return p().off(e), o.apply(this, arguments);
  }).guid = o.guid || (o.guid = p.guid++)), e.each(function() {
   p.event.add(this, t, i, r, n);
  });
 }
 p.event = {
  global: {},
  add: function(e, t, n, r, i) {
   var s, o, a, c, l, u, f, d, h, m, g, y = p._data(e);
   if (y) {
    for (n.handler && (n = (c = n).handler, i = c.selector), n.guid || (n.guid = p.guid++), 
    (o = y.events) || (o = y.events = {}), (u = y.handle) || ((u = y.handle = function(e) {
     return void 0 === p || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(u.elem, arguments);
    }).elem = e), a = (t = (t || "").match(O) || [ "" ]).length; a--; ) h = g = (s = de.exec(t[a]) || [])[1], 
    m = (s[2] || "").split(".").sort(), h && (l = p.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, 
    l = p.event.special[h] || {}, f = p.extend({
     type: h,
     origType: g,
     data: r,
     handler: n,
     guid: n.guid,
     selector: i,
     needsContext: i && p.expr.match.needsContext.test(i),
     namespace: m.join(".")
    }, c), (d = o[h]) || ((d = o[h] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, m, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), 
    l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), 
    p.event.global[h] = !0);
    e = null;
   }
  },
  remove: function(e, t, n, r, i) {
   var s, o, a, c, l, u, f, d, h, m, g, y = p.hasData(e) && p._data(e);
   if (y && (u = y.events)) {
    for (l = (t = (t || "").match(O) || [ "" ]).length; l--; ) if (h = g = (a = de.exec(t[l]) || [])[1], 
    m = (a[2] || "").split(".").sort(), h) {
     for (f = p.event.special[h] || {}, d = u[h = (r ? f.delegateType : f.bindType) || h] || [], 
     a = a[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = s = d.length; s--; ) o = d[s], 
     !i && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (d.splice(s, 1), 
     o.selector && d.delegateCount--, f.remove && f.remove.call(e, o));
     c && !d.length && (f.teardown && !1 !== f.teardown.call(e, m, y.handle) || p.removeEvent(e, h, y.handle), 
     delete u[h]);
    } else for (h in u) p.event.remove(e, h + t[l], n, r, !0);
    p.isEmptyObject(u) && (delete y.handle, p._removeData(e, "events"));
   }
  },
  trigger: function(t, n, i, s) {
   var o, a, c, l, f, d, h, m = [ i || r ], g = u.call(t, "type") ? t.type : t, y = u.call(t, "namespace") ? t.namespace.split(".") : [];
   if (c = d = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !fe.test(g + p.event.triggered) && (g.indexOf(".") > -1 && (g = (y = g.split(".")).shift(), 
   y.sort()), a = g.indexOf(":") < 0 && "on" + g, (t = t[p.expando] ? t : new p.Event(g, "object" == typeof t && t)).isTrigger = s ? 2 : 3, 
   t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
   t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : p.makeArray(n, [ t ]), 
   f = p.event.special[g] || {}, s || !f.trigger || !1 !== f.trigger.apply(i, n))) {
    if (!s && !f.noBubble && !p.isWindow(i)) {
     for (l = f.delegateType || g, fe.test(l + g) || (c = c.parentNode); c; c = c.parentNode) m.push(c), 
     d = c;
     d === (i.ownerDocument || r) && m.push(d.defaultView || d.parentWindow || e);
    }
    for (h = 0; (c = m[h++]) && !t.isPropagationStopped(); ) t.type = h > 1 ? l : f.bindType || g, 
    (o = (p._data(c, "events") || {})[t.type] && p._data(c, "handle")) && o.apply(c, n), 
    (o = a && c[a]) && o.apply && R(c) && (t.result = o.apply(c, n), !1 === t.result && t.preventDefault());
    if (t.type = g, !s && !t.isDefaultPrevented() && (!f._default || !1 === f._default.apply(m.pop(), n)) && R(i) && a && i[g] && !p.isWindow(i)) {
     (d = i[a]) && (i[a] = null), p.event.triggered = g;
     try {
      i[g]();
     } catch (e) {}
     p.event.triggered = void 0, d && (i[a] = d);
    }
    return t.result;
   }
  },
  dispatch: function(e) {
   e = p.event.fix(e);
   var t, n, r, s, o, a = [], c = i.call(arguments), l = (p._data(this, "events") || {})[e.type] || [], u = p.event.special[e.type] || {};
   if (c[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
    for (a = p.event.handlers.call(this, e, l), t = 0; (s = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = s.elem, 
    n = 0; (o = s.handlers[n++]) && !e.isImmediatePropagationStopped(); ) (!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, 
    e.data = o.data, void 0 !== (r = ((p.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, c)) && !1 === (e.result = r) && (e.preventDefault(), 
    e.stopPropagation()));
    return u.postDispatch && u.postDispatch.call(this, e), e.result;
   }
  },
  handlers: function(e, t) {
   var n, r, i, s, o = [], a = t.delegateCount, c = e.target;
   if (a && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;c != this; c = c.parentNode || this) if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
    for (r = [], n = 0; a > n; n++) void 0 === r[i = (s = t[n]).selector + " "] && (r[i] = s.needsContext ? p(i, this).index(c) > -1 : p.find(i, this, null, [ c ]).length), 
    r[i] && r.push(s);
    r.length && o.push({
     elem: c,
     handlers: r
    });
   }
   return a < t.length && o.push({
    elem: this,
    handlers: t.slice(a)
   }), o;
  },
  fix: function(e) {
   if (e[p.expando]) return e;
   var t, n, i, s = e.type, o = e, a = this.fixHooks[s];
   for (a || (this.fixHooks[s] = a = ue.test(s) ? this.mouseHooks : le.test(s) ? this.keyHooks : {}), 
   i = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(o), t = i.length; t--; ) e[n = i[t]] = o[n];
   return e.target || (e.target = o.srcElement || r), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
   e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
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
    var n, i, s, o = t.button, a = t.fromElement;
    return null == e.pageX && null != t.clientX && (s = (i = e.target.ownerDocument || r).documentElement, 
    n = i.body, e.pageX = t.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), 
    e.pageY = t.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), 
    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
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
     return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
     !1) : void 0;
    },
    _default: function(e) {
     return p.nodeName(e.target, "a");
    }
   },
   beforeunload: {
    postDispatch: function(e) {
     void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
    }
   }
  },
  simulate: function(e, t, n) {
   var r = p.extend(new p.Event(), n, {
    type: e,
    isSimulated: !0
   });
   p.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
  }
 }, p.removeEvent = r.removeEventListener ? function(e, t, n) {
  e.removeEventListener && e.removeEventListener(t, n);
 } : function(e, t, n) {
  var r = "on" + t;
  e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
 }, p.Event = function(e, t) {
  return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
  this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? pe : he) : this.type = e, 
  t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void (this[p.expando] = !0)) : new p.Event(e, t);
 }, p.Event.prototype = {
  constructor: p.Event,
  isDefaultPrevented: he,
  isPropagationStopped: he,
  isImmediatePropagationStopped: he,
  preventDefault: function() {
   var e = this.originalEvent;
   this.isDefaultPrevented = pe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
  },
  stopPropagation: function() {
   var e = this.originalEvent;
   this.isPropagationStopped = pe, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), 
   e.cancelBubble = !0);
  },
  stopImmediatePropagation: function() {
   var e = this.originalEvent;
   this.isImmediatePropagationStopped = pe, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
   this.stopPropagation();
  }
 }, p.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, function(e, t) {
  p.event.special[e] = {
   delegateType: t,
   bindType: t,
   handle: function(e) {
    var n, r = e.relatedTarget, i = e.handleObj;
    return (!r || r !== this && !p.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), 
    e.type = t), n;
   }
  };
 }), f.submit || (p.event.special.submit = {
  setup: function() {
   return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", function(e) {
    var t = e.target, n = p.nodeName(t, "input") || p.nodeName(t, "button") ? p.prop(t, "form") : void 0;
    n && !p._data(n, "submit") && (p.event.add(n, "submit._submit", function(e) {
     e._submitBubble = !0;
    }), p._data(n, "submit", !0));
   });
  },
  postDispatch: function(e) {
   e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e));
  },
  teardown: function() {
   return !p.nodeName(this, "form") && void p.event.remove(this, "._submit");
  }
 }), f.change || (p.event.special.change = {
  setup: function() {
   return ce.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
    "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
   }), p.event.add(this, "click._change", function(e) {
    this._justChanged && !e.isTrigger && (this._justChanged = !1), p.event.simulate("change", this, e);
   })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
    var t = e.target;
    ce.test(t.nodeName) && !p._data(t, "change") && (p.event.add(t, "change._change", function(e) {
     !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e);
    }), p._data(t, "change", !0));
   });
  },
  handle: function(e) {
   var t = e.target;
   return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
  },
  teardown: function() {
   return p.event.remove(this, "._change"), !ce.test(this.nodeName);
  }
 }), f.focusin || p.each({
  focus: "focusin",
  blur: "focusout"
 }, function(e, t) {
  var n = function(e) {
   p.event.simulate(t, e.target, p.event.fix(e));
  };
  p.event.special[t] = {
   setup: function() {
    var r = this.ownerDocument || this, i = p._data(r, t);
    i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1);
   },
   teardown: function() {
    var r = this.ownerDocument || this, i = p._data(r, t) - 1;
    i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t));
   }
  };
 }), p.fn.extend({
  on: function(e, t, n, r) {
   return ge(this, e, t, n, r);
  },
  one: function(e, t, n, r) {
   return ge(this, e, t, n, r, 1);
  },
  off: function(e, t, n) {
   var r, i;
   if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
   this;
   if ("object" == typeof e) {
    for (i in e) this.off(i, t, e[i]);
    return this;
   }
   return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = he), 
   this.each(function() {
    p.event.remove(this, e, n, t);
   });
  },
  trigger: function(e, t) {
   return this.each(function() {
    p.event.trigger(e, t, this);
   });
  },
  triggerHandler: function(e, t) {
   var n = this[0];
   return n ? p.event.trigger(e, t, n, !0) : void 0;
  }
 });
 var ye = / jQuery\d+="(?:null|\d+)"/g, ve = new RegExp("<(?:" + Z + ")[\\s/>]", "i"), _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, be = /checked\s*(?:[^=]|=\s*.checked.)/i, xe = /^true\/(.*)/, we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ce = ee(r).appendChild(r.createElement("div"));
 function ke(e, t) {
  return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
 }
 function Ee(e) {
  return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e;
 }
 function Be(e) {
  var t = xe.exec(e.type);
  return t ? e.type = t[1] : e.removeAttribute("type"), e;
 }
 function Te(e, t) {
  if (1 === t.nodeType && p.hasData(e)) {
   var n, r, i, s = p._data(e), o = p._data(t, s), a = s.events;
   if (a) for (n in delete o.handle, o.events = {}, a) for (r = 0, i = a[n].length; i > r; r++) p.event.add(t, n, a[n][r]);
   o.data && (o.data = p.extend({}, o.data));
  }
 }
 function Ie(e, t) {
  var n, r, i;
  if (1 === t.nodeType) {
   if (n = t.nodeName.toLowerCase(), !f.noCloneEvent && t[p.expando]) {
    for (r in (i = p._data(t)).events) p.removeEvent(t, r, i.handle);
    t.removeAttribute(p.expando);
   }
   "script" === n && t.text !== e.text ? (Ee(t).text = e.text, Be(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
   f.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && X.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
   t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }
 }
 function Se(e, t, n, r) {
  t = s.apply([], t);
  var i, o, a, c, l, u, d = 0, h = e.length, m = h - 1, g = t[0], y = p.isFunction(g);
  if (y || h > 1 && "string" == typeof g && !f.checkClone && be.test(g)) return e.each(function(i) {
   var s = e.eq(i);
   y && (t[0] = g.call(this, i, s.html())), Se(s, t, n, r);
  });
  if (h && (i = (u = ae(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === u.childNodes.length && (u = i), 
  i || r)) {
   for (a = (c = p.map(ne(u, "script"), Ee)).length; h > d; d++) o = u, d !== m && (o = p.clone(o, !0, !0), 
   a && p.merge(c, ne(o, "script"))), n.call(e[d], o, d);
   if (a) for (l = c[c.length - 1].ownerDocument, p.map(c, Be), d = 0; a > d; d++) o = c[d], 
   K.test(o.type || "") && !p._data(o, "globalEval") && p.contains(l, o) && (o.src ? p._evalUrl && p._evalUrl(o.src) : p.globalEval((o.text || o.textContent || o.innerHTML || "").replace(we, "")));
   u = i = null;
  }
  return e;
 }
 function Me(e, t, n) {
  for (var r, i = t ? p.filter(t, e) : e, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || p.cleanData(ne(r)), 
  r.parentNode && (n && p.contains(r.ownerDocument, r) && re(ne(r, "script")), r.parentNode.removeChild(r));
  return e;
 }
 p.extend({
  htmlPrefilter: function(e) {
   return e.replace(_e, "<$1></$2>");
  },
  clone: function(e, t, n) {
   var r, i, s, o, a, c = p.contains(e.ownerDocument, e);
   if (f.html5Clone || p.isXMLDoc(e) || !ve.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ce.innerHTML = e.outerHTML, 
   Ce.removeChild(s = Ce.firstChild)), !(f.noCloneEvent && f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e))) for (r = ne(s), 
   a = ne(e), o = 0; null != (i = a[o]); ++o) r[o] && Ie(i, r[o]);
   if (t) if (n) for (a = a || ne(e), r = r || ne(s), o = 0; null != (i = a[o]); o++) Te(i, r[o]); else Te(e, s);
   return (r = ne(s, "script")).length > 0 && re(r, !c && ne(e, "script")), r = a = i = null, 
   s;
  },
  cleanData: function(e, t) {
   for (var r, i, s, o, a = 0, c = p.expando, l = p.cache, u = f.attributes, d = p.event.special; null != (r = e[a]); a++) if ((t || R(r)) && (o = (s = r[c]) && l[s])) {
    if (o.events) for (i in o.events) d[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
    l[s] && (delete l[s], u || void 0 === r.removeAttribute ? r[c] = void 0 : r.removeAttribute(c), 
    n.push(s));
   }
  }
 }), p.fn.extend({
  domManip: Se,
  detach: function(e) {
   return Me(this, e, !0);
  },
  remove: function(e) {
   return Me(this, e);
  },
  text: function(e) {
   return G(this, function(e) {
    return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e));
   }, null, e, arguments.length);
  },
  append: function() {
   return Se(this, arguments, function(e) {
    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e);
   });
  },
  prepend: function() {
   return Se(this, arguments, function(e) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var t = ke(this, e);
     t.insertBefore(e, t.firstChild);
    }
   });
  },
  before: function() {
   return Se(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this);
   });
  },
  after: function() {
   return Se(this, arguments, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
   });
  },
  empty: function() {
   for (var e, t = 0; null != (e = this[t]); t++) {
    for (1 === e.nodeType && p.cleanData(ne(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
    e.options && p.nodeName(e, "select") && (e.options.length = 0);
   }
   return this;
  },
  clone: function(e, t) {
   return e = null != e && e, t = null == t ? e : t, this.map(function() {
    return p.clone(this, e, t);
   });
  },
  html: function(e) {
   return G(this, function(e) {
    var t = this[0] || {}, n = 0, r = this.length;
    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ye, "") : void 0;
    if ("string" == typeof e && !Ae.test(e) && (f.htmlSerialize || !ve.test(e)) && (f.leadingWhitespace || !$.test(e)) && !te[(W.exec(e) || [ "", "" ])[1].toLowerCase()]) {
     e = p.htmlPrefilter(e);
     try {
      for (;r > n; n++) 1 === (t = this[n] || {}).nodeType && (p.cleanData(ne(t, !1)), 
      t.innerHTML = e);
      t = 0;
     } catch (e) {}
    }
    t && this.empty().append(e);
   }, null, e, arguments.length);
  },
  replaceWith: function() {
   var e = [];
   return Se(this, arguments, function(t) {
    var n = this.parentNode;
    p.inArray(this, e) < 0 && (p.cleanData(ne(this)), n && n.replaceChild(t, this));
   }, e);
  }
 }), p.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(e, t) {
  p.fn[e] = function(e) {
   for (var n, r = 0, i = [], s = p(e), a = s.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), 
   p(s[r])[t](n), o.apply(i, n.get());
   return this.pushStack(i);
  };
 });
 var Ne, Oe = {
  HTML: "block",
  BODY: "block"
 };
 function De(e, t) {
  var n = p(t.createElement(e)).appendTo(t.body), r = p.css(n[0], "display");
  return n.detach(), r;
 }
 function Fe(e) {
  var t = r, n = Oe[e];
  return n || ("none" !== (n = De(e, t)) && n || ((t = ((Ne = (Ne || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ne[0].contentDocument).document).write(), 
  t.close(), n = De(e, t), Ne.detach()), Oe[e] = n), n;
 }
 var Re = /^margin/, Qe = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"), je = function(e, t, n, r) {
  var i, s, o = {};
  for (s in t) o[s] = e.style[s], e.style[s] = t[s];
  for (s in i = n.apply(e, r || []), t) e.style[s] = o[s];
  return i;
 }, Pe = r.documentElement;
 !function() {
  var t, n, i, s, o, a, c = r.createElement("div"), l = r.createElement("div");
  if (l.style) {
   function u() {
    var u, f, d = r.documentElement;
    d.appendChild(c), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
    t = i = a = !1, n = o = !0, e.getComputedStyle && (f = e.getComputedStyle(l), t = "1%" !== (f || {}).top, 
    a = "2px" === (f || {}).marginLeft, i = "4px" === (f || {
     width: "4px"
    }).width, l.style.marginRight = "50%", n = "4px" === (f || {
     marginRight: "4px"
    }).marginRight, (u = l.appendChild(r.createElement("div"))).style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
    u.style.marginRight = u.style.width = "0", l.style.width = "1px", o = !parseFloat((e.getComputedStyle(u) || {}).marginRight), 
    l.removeChild(u)), l.style.display = "none", (s = 0 === l.getClientRects().length) && (l.style.display = "", 
    l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (u = l.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
    (s = 0 === u[0].offsetHeight) && (u[0].style.display = "", u[1].style.display = "none", 
    s = 0 === u[0].offsetHeight)), d.removeChild(c);
   }
   l.style.cssText = "float:left;opacity:.5", f.opacity = "0.5" === l.style.opacity, 
   f.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
   f.clearCloneStyle = "content-box" === l.style.backgroundClip, (c = r.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
   l.innerHTML = "", c.appendChild(l), f.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, 
   p.extend(f, {
    reliableHiddenOffsets: function() {
     return null == t && u(), s;
    },
    boxSizingReliable: function() {
     return null == t && u(), i;
    },
    pixelMarginRight: function() {
     return null == t && u(), n;
    },
    pixelPosition: function() {
     return null == t && u(), t;
    },
    reliableMarginRight: function() {
     return null == t && u(), o;
    },
    reliableMarginLeft: function() {
     return null == t && u(), a;
    }
   });
  }
 }();
 var Ue, Le, Ve = /^(top|right|bottom|left)$/;
 function ze(e, t) {
  return {
   get: function() {
    return e() ? void delete this.get : (this.get = t).apply(this, arguments);
   }
  };
 }
 e.getComputedStyle ? (Ue = function(t) {
  var n = t.ownerDocument.defaultView;
  return n.opener || (n = e), n.getComputedStyle(t);
 }, Le = function(e, t, n) {
  var r, i, s, o, a = e.style;
  return o = (n = n || Ue(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)), 
  !f.pixelMarginRight() && Qe.test(o) && Re.test(t) && (r = a.width, i = a.minWidth, 
  s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = r, 
  a.minWidth = i, a.maxWidth = s)), void 0 === o ? o : o + "";
 }) : Pe.currentStyle && (Ue = function(e) {
  return e.currentStyle;
 }, Le = function(e, t, n) {
  var r, i, s, o, a = e.style;
  return null == (o = (n = n || Ue(e)) ? n[t] : void 0) && a && a[t] && (o = a[t]), 
  Qe.test(o) && !Ve.test(t) && (r = a.left, (s = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), 
  a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = r, s && (i.left = s)), 
  void 0 === o ? o : o + "" || "auto";
 });
 var He = /alpha\([^)]*\)/i, Ye = /opacity\s*=\s*([^)]*)/i, qe = /^(none|table(?!-c[ea]).+)/, Je = new RegExp("^(" + z + ")(.*)$", "i"), Ge = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
 }, Xe = {
  letterSpacing: "0",
  fontWeight: "400"
 }, We = [ "Webkit", "O", "Moz", "ms" ], Ke = r.createElement("div").style;
 function $e(e) {
  if (e in Ke) return e;
  for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = We.length; n--; ) if ((e = We[n] + t) in Ke) return e;
 }
 function Ze(e, t) {
  for (var n, r, i, s = [], o = 0, a = e.length; a > o; o++) (r = e[o]).style && (s[o] = p._data(r, "olddisplay"), 
  n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && q(r) && (s[o] = p._data(r, "olddisplay", Fe(r.nodeName)))) : (i = q(r), 
  (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
  for (o = 0; a > o; o++) (r = e[o]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
  return e;
 }
 function et(e, t, n) {
  var r = Je.exec(t);
  return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
 }
 function tt(e, t, n, r, i) {
  for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += p.css(e, n + Y[s], !0, i)), 
  r ? ("content" === n && (o -= p.css(e, "padding" + Y[s], !0, i)), "margin" !== n && (o -= p.css(e, "border" + Y[s] + "Width", !0, i))) : (o += p.css(e, "padding" + Y[s], !0, i), 
  "padding" !== n && (o += p.css(e, "border" + Y[s] + "Width", !0, i)));
  return o;
 }
 function nt(t, n, i) {
  var s = !0, o = "width" === n ? t.offsetWidth : t.offsetHeight, a = Ue(t), c = f.boxSizing && "border-box" === p.css(t, "boxSizing", !1, a);
  if (r.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 
  0 >= o || null == o) {
   if ((0 > (o = Le(t, n, a)) || null == o) && (o = t.style[n]), Qe.test(o)) return o;
   s = c && (f.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
  }
  return o + tt(t, n, i || (c ? "border" : "content"), s, a) + "px";
 }
 function rt(e, t, n, r, i) {
  return new rt.prototype.init(e, t, n, r, i);
 }
 p.extend({
  cssHooks: {
   opacity: {
    get: function(e, t) {
     if (t) {
      var n = Le(e, "opacity");
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
    var i, s, o, a = p.camelCase(t), c = e.style;
    if (t = p.cssProps[a] || (p.cssProps[a] = $e(a) || a), o = p.cssHooks[t] || p.cssHooks[a], 
    void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : c[t];
    if ("string" === (s = typeof n) && (i = H.exec(n)) && i[1] && (n = J(e, t, i), s = "number"), 
    null != n && n == n && ("number" === s && (n += i && i[3] || (p.cssNumber[a] ? "" : "px")), 
    f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
    !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
     c[t] = n;
    } catch (e) {}
   }
  },
  css: function(e, t, n, r) {
   var i, s, o, a = p.camelCase(t);
   return t = p.cssProps[a] || (p.cssProps[a] = $e(a) || a), (o = p.cssHooks[t] || p.cssHooks[a]) && "get" in o && (s = o.get(e, !0, n)), 
   void 0 === s && (s = Le(e, t, r)), "normal" === s && t in Xe && (s = Xe[t]), "" === n || n ? (i = parseFloat(s), 
   !0 === n || isFinite(i) ? i || 0 : s) : s;
  }
 }), p.each([ "height", "width" ], function(e, t) {
  p.cssHooks[t] = {
   get: function(e, n, r) {
    return n ? qe.test(p.css(e, "display")) && 0 === e.offsetWidth ? je(e, Ge, function() {
     return nt(e, t, r);
    }) : nt(e, t, r) : void 0;
   },
   set: function(e, n, r) {
    var i = r && Ue(e);
    return et(0, n, r ? tt(e, t, r, f.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0);
   }
  };
 }), f.opacity || (p.cssHooks.opacity = {
  get: function(e, t) {
   return Ye.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
  },
  set: function(e, t) {
   var n = e.style, r = e.currentStyle, i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", s = r && r.filter || n.filter || "";
   n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(s.replace(He, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
   "" === t || r && !r.filter) || (n.filter = He.test(s) ? s.replace(He, i) : s + " " + i);
  }
 }), p.cssHooks.marginRight = ze(f.reliableMarginRight, function(e, t) {
  return t ? je(e, {
   display: "inline-block"
  }, Le, [ e, "marginRight" ]) : void 0;
 }), p.cssHooks.marginLeft = ze(f.reliableMarginLeft, function(e, t) {
  return t ? (parseFloat(Le(e, "marginLeft")) || (p.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - je(e, {
   marginLeft: 0
  }, function() {
   return e.getBoundingClientRect().left;
  }) : 0)) + "px" : void 0;
 }), p.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(e, t) {
  p.cssHooks[e + t] = {
   expand: function(n) {
    for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + Y[r] + t] = s[r] || s[r - 2] || s[0];
    return i;
   }
  }, Re.test(e) || (p.cssHooks[e + t].set = et);
 }), p.fn.extend({
  css: function(e, t) {
   return G(this, function(e, t, n) {
    var r, i, s = {}, o = 0;
    if (p.isArray(t)) {
     for (r = Ue(e), i = t.length; i > o; o++) s[t[o]] = p.css(e, t[o], !1, r);
     return s;
    }
    return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
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
    q(this) ? p(this).show() : p(this).hide();
   });
  }
 }), p.Tween = rt, rt.prototype = {
  constructor: rt,
  init: function(e, t, n, r, i, s) {
   this.elem = e, this.prop = n, this.easing = i || p.easing._default, this.options = t, 
   this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px");
  },
  cur: function() {
   var e = rt.propHooks[this.prop];
   return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
  },
  run: function(e) {
   var t, n = rt.propHooks[this.prop];
   return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
   this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
   n && n.set ? n.set(this) : rt.propHooks._default.set(this), this;
  }
 }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
  _default: {
   get: function(e) {
    var t;
    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
   },
   set: function(e) {
    p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit);
   }
  }
 }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
  }
 }, p.easing = {
  linear: function(e) {
   return e;
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2;
  },
  _default: "swing"
 }, p.fx = rt.prototype.init, p.fx.step = {};
 var it, st, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
 function ct() {
  return e.setTimeout(function() {
   it = void 0;
  }), it = p.now();
 }
 function lt(e, t) {
  var n, r = {
   height: e
  }, i = 0;
  for (t = t ? 1 : 0; 4 > i; i += 2 - t) r["margin" + (n = Y[i])] = r["padding" + n] = e;
  return t && (r.opacity = r.width = e), r;
 }
 function ut(e, t, n) {
  for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), s = 0, o = i.length; o > s; s++) if (r = i[s].call(n, t, e)) return r;
 }
 function ft(e, t, n) {
  var r, i, s = 0, o = ft.prefilters.length, a = p.Deferred().always(function() {
   delete c.elem;
  }), c = function() {
   if (i) return !1;
   for (var t = it || ct(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), s = 0, o = l.tweens.length; o > s; s++) l.tweens[s].run(r);
   return a.notifyWith(e, [ l, r, n ]), 1 > r && o ? n : (a.resolveWith(e, [ l ]), 
   !1);
  }, l = a.promise({
   elem: e,
   props: p.extend({}, t),
   opts: p.extend(!0, {
    specialEasing: {},
    easing: p.easing._default
   }, n),
   originalProperties: t,
   originalOptions: n,
   startTime: it || ct(),
   duration: n.duration,
   tweens: [],
   createTween: function(t, n) {
    var r = p.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
    return l.tweens.push(r), r;
   },
   stop: function(t) {
    var n = 0, r = t ? l.tweens.length : 0;
    if (i) return this;
    for (i = !0; r > n; n++) l.tweens[n].run(1);
    return t ? (a.notifyWith(e, [ l, 1, 0 ]), a.resolveWith(e, [ l, t ])) : a.rejectWith(e, [ l, t ]), 
    this;
   }
  }), u = l.props;
  for (function(e, t) {
   var n, r, i, s, o;
   for (n in e) if (i = t[r = p.camelCase(n)], s = e[n], p.isArray(s) && (i = s[1], 
   s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), (o = p.cssHooks[r]) && "expand" in o) for (n in s = o.expand(s), 
   delete e[r], s) n in e || (e[n] = s[n], t[n] = i); else t[r] = i;
  }(u, l.opts.specialEasing); o > s; s++) if (r = ft.prefilters[s].call(l, e, u, l.opts)) return p.isFunction(r.stop) && (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(r.stop, r)), 
  r;
  return p.map(u, ut, l), p.isFunction(l.opts.start) && l.opts.start.call(e, l), p.fx.timer(p.extend(c, {
   elem: e,
   anim: l,
   queue: l.opts.queue
  })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
 }
 p.Animation = p.extend(ft, {
  tweeners: {
   "*": [ function(e, t) {
    var n = this.createTween(e, t);
    return J(n.elem, e, H.exec(t), n), n;
   } ]
  },
  tweener: function(e, t) {
   p.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(O);
   for (var n, r = 0, i = e.length; i > r; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], 
   ft.tweeners[n].unshift(t);
  },
  prefilters: [ function(e, t, n) {
   var r, i, s, o, a, c, l, u = this, d = {}, h = e.style, m = e.nodeType && q(e), g = p._data(e, "fxshow");
   for (r in n.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
   c = a.empty.fire, a.empty.fire = function() {
    a.unqueued || c();
   }), a.unqueued++, u.always(function() {
    u.always(function() {
     a.unqueued--, p.queue(e, "fx").length || a.empty.fire();
    });
   })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
   "inline" === ("none" === (l = p.css(e, "display")) ? p._data(e, "olddisplay") || Fe(e.nodeName) : l) && "none" === p.css(e, "float") && (f.inlineBlockNeedsLayout && "inline" !== Fe(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), 
   n.overflow && (h.overflow = "hidden", f.shrinkWrapBlocks() || u.always(function() {
    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
   })), t) if (i = t[r], ot.exec(i)) {
    if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
     if ("show" !== i || !g || void 0 === g[r]) continue;
     m = !0;
    }
    d[r] = g && g[r] || p.style(e, r);
   } else l = void 0;
   if (p.isEmptyObject(d)) "inline" === ("none" === l ? Fe(e.nodeName) : l) && (h.display = l); else for (r in g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), 
   s && (g.hidden = !m), m ? p(e).show() : u.done(function() {
    p(e).hide();
   }), u.done(function() {
    var t;
    for (t in p._removeData(e, "fxshow"), d) p.style(e, t, d[t]);
   }), d) o = ut(m ? g[r] : 0, r, u), r in g || (g[r] = o.start, m && (o.end = o.start, 
   o.start = "width" === r || "height" === r ? 1 : 0));
  } ],
  prefilter: function(e, t) {
   t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
  }
 }), p.speed = function(e, t, n) {
  var r = e && "object" == typeof e ? p.extend({}, e) : {
   complete: n || !n && t || p.isFunction(e) && e,
   duration: e,
   easing: n && t || t && !p.isFunction(t) && t
  };
  return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, 
  (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
   p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue);
  }, r;
 }, p.fn.extend({
  fadeTo: function(e, t, n, r) {
   return this.filter(q).css("opacity", 0).show().end().animate({
    opacity: t
   }, e, n, r);
  },
  animate: function(e, t, n, r) {
   var i = p.isEmptyObject(e), s = p.speed(t, n, r), o = function() {
    var t = ft(this, p.extend({}, e), s);
    (i || p._data(this, "finish")) && t.stop(!0);
   };
   return o.finish = o, i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
  },
  stop: function(e, t, n) {
   var r = function(e) {
    var t = e.stop;
    delete e.stop, t(n);
   };
   return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
   this.each(function() {
    var t = !0, i = null != e && e + "queueHooks", s = p.timers, o = p._data(this);
    if (i) o[i] && o[i].stop && r(o[i]); else for (i in o) o[i] && o[i].stop && at.test(i) && r(o[i]);
    for (i = s.length; i--; ) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), 
    t = !1, s.splice(i, 1));
    (t || !n) && p.dequeue(this, e);
   });
  },
  finish: function(e) {
   return !1 !== e && (e = e || "fx"), this.each(function() {
    var t, n = p._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = p.timers, o = r ? r.length : 0;
    for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
    t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), 
    s.splice(t, 1));
    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
    delete n.finish;
   });
  }
 }), p.each([ "toggle", "show", "hide" ], function(e, t) {
  var n = p.fn[t];
  p.fn[t] = function(e, r, i) {
   return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i);
  };
 }), p.each({
  slideDown: lt("show"),
  slideUp: lt("hide"),
  slideToggle: lt("toggle"),
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
  p.fn[e] = function(e, n, r) {
   return this.animate(t, e, n, r);
  };
 }), p.timers = [], p.fx.tick = function() {
  var e, t = p.timers, n = 0;
  for (it = p.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
  t.length || p.fx.stop(), it = void 0;
 }, p.fx.timer = function(e) {
  p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
 }, p.fx.interval = 13, p.fx.start = function() {
  st || (st = e.setInterval(p.fx.tick, p.fx.interval));
 }, p.fx.stop = function() {
  e.clearInterval(st), st = null;
 }, p.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, p.fn.delay = function(t, n) {
  return t = p.fx && p.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
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
 var dt = /\r/g;
 p.fn.extend({
  val: function(e) {
   var t, n, r, i = this[0];
   return arguments.length ? (r = p.isFunction(e), this.each(function(n) {
    var i;
    1 === this.nodeType && (null == (i = r ? e.call(this, n, p(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
     return null == e ? "" : e + "";
    })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
   })) : i ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(dt, "") : null == n ? "" : n : void 0;
  }
 }), p.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = p.find.attr(e, "value");
     return null != t ? t : p.trim(p.text(e));
    }
   },
   select: {
    get: function(e) {
     for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], a = s ? i + 1 : r.length, c = 0 > i ? a : s ? i : 0; a > c; c++) if (((n = r[c]).selected || c === i) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
      if (t = p(n).val(), s) return t;
      o.push(t);
     }
     return o;
    },
    set: function(e, t) {
     for (var n, r, i = e.options, s = p.makeArray(t), o = i.length; o--; ) if (r = i[o], 
     p.inArray(p.valHooks.option.get(r), s) >= 0) try {
      r.selected = n = !0;
     } catch (e) {
      r.scrollHeight;
     } else r.selected = !1;
     return n || (e.selectedIndex = -1), i;
    }
   }
  }
 }), p.each([ "radio", "checkbox" ], function() {
  p.valHooks[this] = {
   set: function(e, t) {
    return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0;
   }
  }, f.checkOn || (p.valHooks[this].get = function(e) {
   return null === e.getAttribute("value") ? "on" : e.value;
  });
 });
 var pt, ht, mt = p.expr.attrHandle, gt = /^(?:checked|selected)$/i, yt = f.getSetAttribute, vt = f.input;
 p.fn.extend({
  attr: function(e, t) {
   return G(this, p.attr, e, t, arguments.length > 1);
  },
  removeAttr: function(e) {
   return this.each(function() {
    p.removeAttr(this, e);
   });
  }
 }), p.extend({
  attr: function(e, t, n) {
   var r, i, s = e.nodeType;
   if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? p.prop(e, t, n) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), 
   i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? ht : pt)), void 0 !== n ? null === n ? void p.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
   n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = p.find.attr(e, t)) ? void 0 : r);
  },
  attrHooks: {
   type: {
    set: function(e, t) {
     if (!f.radioValue && "radio" === t && p.nodeName(e, "input")) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t;
     }
    }
   }
  },
  removeAttr: function(e, t) {
   var n, r, i = 0, s = t && t.match(O);
   if (s && 1 === e.nodeType) for (;n = s[i++]; ) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? vt && yt || !gt.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), 
   e.removeAttribute(yt ? n : r);
  }
 }), ht = {
  set: function(e, t, n) {
   return !1 === t ? p.removeAttr(e, n) : vt && yt || !gt.test(n) ? e.setAttribute(!yt && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, 
   n;
  }
 }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
  var n = mt[t] || p.find.attr;
  vt && yt || !gt.test(t) ? mt[t] = function(e, t, r) {
   var i, s;
   return r || (s = mt[t], mt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, 
   mt[t] = s), i;
  } : mt[t] = function(e, t, n) {
   return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null;
  };
 }), vt && yt || (p.attrHooks.value = {
  set: function(e, t, n) {
   return p.nodeName(e, "input") ? void (e.defaultValue = t) : pt && pt.set(e, t, n);
  }
 }), yt || (pt = {
  set: function(e, t, n) {
   var r = e.getAttributeNode(n);
   return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", 
   "value" === n || t === e.getAttribute(n) ? t : void 0;
  }
 }, mt.id = mt.name = mt.coords = function(e, t, n) {
  var r;
  return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
 }, p.valHooks.button = {
  get: function(e, t) {
   var n = e.getAttributeNode(t);
   return n && n.specified ? n.value : void 0;
  },
  set: pt.set
 }, p.attrHooks.contenteditable = {
  set: function(e, t, n) {
   pt.set(e, "" !== t && t, n);
  }
 }, p.each([ "width", "height" ], function(e, t) {
  p.attrHooks[t] = {
   set: function(e, n) {
    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
   }
  };
 })), f.style || (p.attrHooks.style = {
  get: function(e) {
   return e.style.cssText || void 0;
  },
  set: function(e, t) {
   return e.style.cssText = t + "";
  }
 });
 var _t = /^(?:input|select|textarea|button|object)$/i, At = /^(?:a|area)$/i;
 p.fn.extend({
  prop: function(e, t) {
   return G(this, p.prop, e, t, arguments.length > 1);
  },
  removeProp: function(e) {
   return e = p.propFix[e] || e, this.each(function() {
    try {
     this[e] = void 0, delete this[e];
    } catch (e) {}
   });
  }
 }), p.extend({
  prop: function(e, t, n) {
   var r, i, s = e.nodeType;
   if (3 !== s && 8 !== s && 2 !== s) return 1 === s && p.isXMLDoc(e) || (t = p.propFix[t] || t, 
   i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var t = p.find.attr(e, "tabindex");
     return t ? parseInt(t, 10) : _t.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1;
    }
   }
  },
  propFix: {
   for: "htmlFor",
   class: "className"
  }
 }), f.hrefNormalized || p.each([ "href", "src" ], function(e, t) {
  p.propHooks[t] = {
   get: function(e) {
    return e.getAttribute(t, 4);
   }
  };
 }), f.optSelected || (p.propHooks.selected = {
  get: function(e) {
   var t = e.parentNode;
   return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
  }
 }), p.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
  p.propFix[this.toLowerCase()] = this;
 }), f.enctype || (p.propFix.enctype = "encoding");
 var bt = /[\t\r\n\f]/g;
 function xt(e) {
  return p.attr(e, "class") || "";
 }
 p.fn.extend({
  addClass: function(e) {
   var t, n, r, i, s, o, a, c = 0;
   if (p.isFunction(e)) return this.each(function(t) {
    p(this).addClass(e.call(this, t, xt(this)));
   });
   if ("string" == typeof e && e) for (t = e.match(O) || []; n = this[c++]; ) if (i = xt(n), 
   r = 1 === n.nodeType && (" " + i + " ").replace(bt, " ")) {
    for (o = 0; s = t[o++]; ) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
    i !== (a = p.trim(r)) && p.attr(n, "class", a);
   }
   return this;
  },
  removeClass: function(e) {
   var t, n, r, i, s, o, a, c = 0;
   if (p.isFunction(e)) return this.each(function(t) {
    p(this).removeClass(e.call(this, t, xt(this)));
   });
   if (!arguments.length) return this.attr("class", "");
   if ("string" == typeof e && e) for (t = e.match(O) || []; n = this[c++]; ) if (i = xt(n), 
   r = 1 === n.nodeType && (" " + i + " ").replace(bt, " ")) {
    for (o = 0; s = t[o++]; ) for (;r.indexOf(" " + s + " ") > -1; ) r = r.replace(" " + s + " ", " ");
    i !== (a = p.trim(r)) && p.attr(n, "class", a);
   }
   return this;
  },
  toggleClass: function(e, t) {
   var n = typeof e;
   return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
    p(this).toggleClass(e.call(this, n, xt(this), t), t);
   }) : this.each(function() {
    var t, r, i, s;
    if ("string" === n) for (r = 0, i = p(this), s = e.match(O) || []; t = s[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (void 0 === e || "boolean" === n) && ((t = xt(this)) && p._data(this, "__className__", t), 
    p.attr(this, "class", t || !1 === e ? "" : p._data(this, "__className__") || ""));
   });
  },
  hasClass: function(e) {
   var t, n, r = 0;
   for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + xt(n) + " ").replace(bt, " ").indexOf(t) > -1) return !0;
   return !1;
  }
 }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
  p.fn[t] = function(e, n) {
   return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
  };
 }), p.fn.extend({
  hover: function(e, t) {
   return this.mouseenter(e).mouseleave(t || e);
  }
 });
 var wt = e.location, Ct = p.now(), kt = /\?/, Et = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
 p.parseJSON = function(t) {
  if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
  var n, r = null, i = p.trim(t + "");
  return i && !p.trim(i.replace(Et, function(e, t, i, s) {
   return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "");
  })) ? Function("return " + i)() : p.error("Invalid JSON: " + t);
 }, p.parseXML = function(t) {
  var n;
  if (!t || "string" != typeof t) return null;
  try {
   e.DOMParser ? n = new e.DOMParser().parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", 
   n.loadXML(t));
  } catch (e) {
   n = void 0;
  }
  return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), 
  n;
 };
 var Bt = /#.*$/, Tt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, St = /^(?:GET|HEAD)$/, Mt = /^\/\//, Nt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ot = {}, Dt = {}, Ft = "*/".concat("*"), Rt = wt.href, Qt = Nt.exec(Rt.toLowerCase()) || [];
 function jt(e) {
  return function(t, n) {
   "string" != typeof t && (n = t, t = "*");
   var r, i = 0, s = t.toLowerCase().match(O) || [];
   if (p.isFunction(n)) for (;r = s[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", 
   (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
  };
 }
 function Pt(e, t, n, r) {
  var i = {}, s = e === Dt;
  function o(a) {
   var c;
   return i[a] = !0, p.each(e[a] || [], function(e, a) {
    var l = a(t, n, r);
    return "string" != typeof l || s || i[l] ? s ? !(c = l) : void 0 : (t.dataTypes.unshift(l), 
    o(l), !1);
   }), c;
  }
  return o(t.dataTypes[0]) || !i["*"] && o("*");
 }
 function Ut(e, t) {
  var n, r, i = p.ajaxSettings.flatOptions || {};
  for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
  return n && p.extend(!0, e, n), e;
 }
 function Lt(e) {
  return e.style && e.style.display || p.css(e, "display");
 }
 p.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: Rt,
   type: "GET",
   isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Qt[1]),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": Ft,
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
    "text json": p.parseJSON,
    "text xml": p.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(e, t) {
   return t ? Ut(Ut(e, p.ajaxSettings), t) : Ut(p.ajaxSettings, e);
  },
  ajaxPrefilter: jt(Ot),
  ajaxTransport: jt(Dt),
  ajax: function(t, n) {
   "object" == typeof t && (n = t, t = void 0), n = n || {};
   var r, i, s, o, a, c, l, u, f = p.ajaxSetup({}, n), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? p(d) : p.event, m = p.Deferred(), g = p.Callbacks("once memory"), y = f.statusCode || {}, v = {}, _ = {}, A = 0, b = "canceled", x = {
    readyState: 0,
    getResponseHeader: function(e) {
     var t;
     if (2 === A) {
      if (!u) for (u = {}; t = It.exec(o); ) u[t[1].toLowerCase()] = t[2];
      t = u[e.toLowerCase()];
     }
     return null == t ? null : t;
    },
    getAllResponseHeaders: function() {
     return 2 === A ? o : null;
    },
    setRequestHeader: function(e, t) {
     var n = e.toLowerCase();
     return A || (e = _[n] = _[n] || e, v[e] = t), this;
    },
    overrideMimeType: function(e) {
     return A || (f.mimeType = e), this;
    },
    statusCode: function(e) {
     var t;
     if (e) if (2 > A) for (t in e) y[t] = [ y[t], e[t] ]; else x.always(e[x.status]);
     return this;
    },
    abort: function(e) {
     var t = e || b;
     return l && l.abort(t), w(0, t), this;
    }
   };
   if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || Rt) + "").replace(Bt, "").replace(Mt, Qt[1] + "//"), 
   f.type = n.method || n.type || f.method || f.type, f.dataTypes = p.trim(f.dataType || "*").toLowerCase().match(O) || [ "" ], 
   null == f.crossDomain && (r = Nt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Qt[1] && r[2] === Qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Qt[3] || ("http:" === Qt[1] ? "80" : "443")))), 
   f.data && f.processData && "string" != typeof f.data && (f.data = p.param(f.data, f.traditional)), 
   Pt(Ot, f, n, x), 2 === A) return x;
   for (i in (c = p.event && f.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), 
   f.type = f.type.toUpperCase(), f.hasContent = !St.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (kt.test(s) ? "&" : "?") + f.data, 
   delete f.data), !1 === f.cache && (f.url = Tt.test(s) ? s.replace(Tt, "$1_=" + Ct++) : s + (kt.test(s) ? "&" : "?") + "_=" + Ct++)), 
   f.ifModified && (p.lastModified[s] && x.setRequestHeader("If-Modified-Since", p.lastModified[s]), 
   p.etag[s] && x.setRequestHeader("If-None-Match", p.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && x.setRequestHeader("Content-Type", f.contentType), 
   x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]), 
   f.headers) x.setRequestHeader(i, f.headers[i]);
   if (f.beforeSend && (!1 === f.beforeSend.call(d, x, f) || 2 === A)) return x.abort();
   for (i in b = "abort", {
    success: 1,
    error: 1,
    complete: 1
   }) x[i](f[i]);
   if (l = Pt(Dt, f, n, x)) {
    if (x.readyState = 1, c && h.trigger("ajaxSend", [ x, f ]), 2 === A) return x;
    f.async && f.timeout > 0 && (a = e.setTimeout(function() {
     x.abort("timeout");
    }, f.timeout));
    try {
     A = 1, l.send(v, w);
    } catch (e) {
     if (!(2 > A)) throw e;
     w(-1, e);
    }
   } else w(-1, "No Transport");
   function w(t, n, r, i) {
    var u, v, _, b, w, C = n;
    2 !== A && (A = 2, a && e.clearTimeout(a), l = void 0, o = i || "", x.readyState = t > 0 ? 4 : 0, 
    u = t >= 200 && 300 > t || 304 === t, r && (b = function(e, t, n) {
     for (var r, i, s, o, a = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
     void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
     if (i) for (o in a) if (a[o] && a[o].test(i)) {
      c.unshift(o);
      break;
     }
     if (c[0] in n) s = c[0]; else {
      for (o in n) {
       if (!c[0] || e.converters[o + " " + c[0]]) {
        s = o;
        break;
       }
       r || (r = o);
      }
      s = s || r;
     }
     return s ? (s !== c[0] && c.unshift(s), n[s]) : void 0;
    }(f, x, r)), b = function(e, t, n, r) {
     var i, s, o, a, c, l = {}, u = e.dataTypes.slice();
     if (u[1]) for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
     for (s = u.shift(); s; ) if (e.responseFields[s] && (n[e.responseFields[s]] = t), 
     !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = s, s = u.shift()) if ("*" === s) s = c; else if ("*" !== c && c !== s) {
      if (!(o = l[c + " " + s] || l["* " + s])) for (i in l) if ((a = i.split(" "))[1] === s && (o = l[c + " " + a[0]] || l["* " + a[0]])) {
       !0 === o ? o = l[i] : !0 !== l[i] && (s = a[0], u.unshift(a[1]));
       break;
      }
      if (!0 !== o) if (o && e.throws) t = o(t); else try {
       t = o(t);
      } catch (e) {
       return {
        state: "parsererror",
        error: o ? e : "No conversion from " + c + " to " + s
       };
      }
     }
     return {
      state: "success",
      data: t
     };
    }(f, b, x, u), u ? (f.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (p.lastModified[s] = w), 
    (w = x.getResponseHeader("etag")) && (p.etag[s] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
    v = b.data, u = !(_ = b.error))) : (_ = C, (t || !C) && (C = "error", 0 > t && (t = 0))), 
    x.status = t, x.statusText = (n || C) + "", u ? m.resolveWith(d, [ v, C, x ]) : m.rejectWith(d, [ x, C, _ ]), 
    x.statusCode(y), y = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [ x, f, u ? v : _ ]), 
    g.fireWith(d, [ x, C ]), c && (h.trigger("ajaxComplete", [ x, f ]), --p.active || p.event.trigger("ajaxStop")));
   }
   return x;
  },
  getJSON: function(e, t, n) {
   return p.get(e, t, n, "json");
  },
  getScript: function(e, t) {
   return p.get(e, void 0, t, "script");
  }
 }), p.each([ "get", "post" ], function(e, t) {
  p[t] = function(e, n, r, i) {
   return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax(p.extend({
    url: e,
    type: t,
    dataType: i,
    data: n,
    success: r
   }, p.isPlainObject(e) && e));
  };
 }), p._evalUrl = function(e) {
  return p.ajax({
   url: e,
   type: "GET",
   dataType: "script",
   cache: !0,
   async: !1,
   global: !1,
   throws: !0
  });
 }, p.fn.extend({
  wrapAll: function(e) {
   if (p.isFunction(e)) return this.each(function(t) {
    p(this).wrapAll(e.call(this, t));
   });
   if (this[0]) {
    var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
     for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
     return e;
    }).append(this);
   }
   return this;
  },
  wrapInner: function(e) {
   return p.isFunction(e) ? this.each(function(t) {
    p(this).wrapInner(e.call(this, t));
   }) : this.each(function() {
    var t = p(this), n = t.contents();
    n.length ? n.wrapAll(e) : t.append(e);
   });
  },
  wrap: function(e) {
   var t = p.isFunction(e);
   return this.each(function(n) {
    p(this).wrapAll(t ? e.call(this, n) : e);
   });
  },
  unwrap: function() {
   return this.parent().each(function() {
    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
   }).end();
  }
 }), p.expr.filters.hidden = function(e) {
  return f.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
   for (;e && 1 === e.nodeType; ) {
    if ("none" === Lt(e) || "hidden" === e.type) return !0;
    e = e.parentNode;
   }
   return !1;
  }(e);
 }, p.expr.filters.visible = function(e) {
  return !p.expr.filters.hidden(e);
 };
 var Vt = /%20/g, zt = /\[\]$/, Ht = /\r?\n/g, Yt = /^(?:submit|button|image|reset|file)$/i, qt = /^(?:input|select|textarea|keygen)/i;
 function Jt(e, t, n, r) {
  var i;
  if (p.isArray(t)) p.each(t, function(t, i) {
   n || zt.test(e) ? r(e, i) : Jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
  }); else if (n || "object" !== p.type(t)) r(e, t); else for (i in t) Jt(e + "[" + i + "]", t[i], n, r);
 }
 p.param = function(e, t) {
  var n, r = [], i = function(e, t) {
   t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
  };
  if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
   i(this.name, this.value);
  }); else for (n in e) Jt(n, e[n], t, i);
  return r.join("&").replace(Vt, "+");
 }, p.fn.extend({
  serialize: function() {
   return p.param(this.serializeArray());
  },
  serializeArray: function() {
   return this.map(function() {
    var e = p.prop(this, "elements");
    return e ? p.makeArray(e) : this;
   }).filter(function() {
    var e = this.type;
    return this.name && !p(this).is(":disabled") && qt.test(this.nodeName) && !Yt.test(e) && (this.checked || !X.test(e));
   }).map(function(e, t) {
    var n = p(this).val();
    return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
     return {
      name: t.name,
      value: e.replace(Ht, "\r\n")
     };
    }) : {
     name: t.name,
     value: n.replace(Ht, "\r\n")
    };
   }).get();
  }
 }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
  return this.isLocal ? $t() : r.documentMode > 8 ? Kt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Kt() || $t();
 } : Kt;
 var Gt = 0, Xt = {}, Wt = p.ajaxSettings.xhr();
 function Kt() {
  try {
   return new e.XMLHttpRequest();
  } catch (e) {}
 }
 function $t() {
  try {
   return new e.ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {}
 }
 e.attachEvent && e.attachEvent("onunload", function() {
  for (var e in Xt) Xt[e](void 0, !0);
 }), f.cors = !!Wt && "withCredentials" in Wt, (Wt = f.ajax = !!Wt) && p.ajaxTransport(function(t) {
  var n;
  if (!t.crossDomain || f.cors) return {
   send: function(r, i) {
    var s, o = t.xhr(), a = ++Gt;
    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
    for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), 
    r) void 0 !== r[s] && o.setRequestHeader(s, r[s] + "");
    o.send(t.hasContent && t.data || null), n = function(e, r) {
     var s, c, l;
     if (n && (r || 4 === o.readyState)) if (delete Xt[a], n = void 0, o.onreadystatechange = p.noop, 
     r) 4 !== o.readyState && o.abort(); else {
      l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
      try {
       c = o.statusText;
      } catch (e) {
       c = "";
      }
      s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404;
     }
     l && i(s, c, l, o.getAllResponseHeaders());
    }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = Xt[a] = n : n();
   },
   abort: function() {
    n && n(void 0, !0);
   }
  };
 }), p.ajaxPrefilter(function(e) {
  e.crossDomain && (e.contents.script = !1);
 }), p.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function(e) {
    return p.globalEval(e), e;
   }
  }
 }), p.ajaxPrefilter("script", function(e) {
  void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
 }), p.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var t, n = r.head || p("head")[0] || r.documentElement;
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
 p.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var e = Zt.pop() || p.expando + "_" + Ct++;
   return this[e] = !0, e;
  }
 }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
  var i, s, o, a = !1 !== t.jsonp && (en.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
  return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
  a ? t[a] = t[a].replace(en, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
  t.converters["script json"] = function() {
   return o || p.error(i + " was not called"), o[0];
  }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
   o = arguments;
  }, r.always(function() {
   void 0 === s ? p(e).removeProp(i) : e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, 
   Zt.push(i)), o && p.isFunction(s) && s(o[0]), o = s = void 0;
  }), "script") : void 0;
 }), f.createHTMLDocument = function() {
  if (!r.implementation.createHTMLDocument) return !1;
  var e = r.implementation.createHTMLDocument("");
  return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length;
 }(), p.parseHTML = function(e, t, n) {
  if (!e || "string" != typeof e) return null;
  "boolean" == typeof t && (n = t, t = !1), t = t || (f.createHTMLDocument ? r.implementation.createHTMLDocument("") : r);
  var i = w.exec(e), s = !n && [];
  return i ? [ t.createElement(i[1]) ] : (i = ae([ e ], t, s), s && s.length && p(s).remove(), 
  p.merge([], i.childNodes));
 };
 var tn = p.fn.load;
 function nn(e) {
  return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
 }
 p.fn.load = function(e, t, n) {
  if ("string" != typeof e && tn) return tn.apply(this, arguments);
  var r, i, s, o = this, a = e.indexOf(" ");
  return a > -1 && (r = p.trim(e.slice(a, e.length)), e = e.slice(0, a)), p.isFunction(t) ? (n = t, 
  t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && p.ajax({
   url: e,
   type: i || "GET",
   dataType: "html",
   data: t
  }).done(function(e) {
   s = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
  }).always(n && function(e, t) {
   o.each(function() {
    n.apply(o, s || [ e.responseText, t, e ]);
   });
  }), this;
 }, p.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
  p.fn[t] = function(e) {
   return this.on(t, e);
  };
 }), p.expr.filters.animated = function(e) {
  return p.grep(p.timers, function(t) {
   return e === t.elem;
  }).length;
 }, p.offset = {
  setOffset: function(e, t, n) {
   var r, i, s, o, a, c, l = p.css(e, "position"), u = p(e), f = {};
   "static" === l && (e.style.position = "relative"), a = u.offset(), s = p.css(e, "top"), 
   c = p.css(e, "left"), ("absolute" === l || "fixed" === l) && p.inArray("auto", [ s, c ]) > -1 ? (o = (r = u.position()).top, 
   i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(c) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, a))), 
   null != t.top && (f.top = t.top - a.top + o), null != t.left && (f.left = t.left - a.left + i), 
   "using" in t ? t.using.call(e, f) : u.css(f);
  }
 }, p.fn.extend({
  offset: function(e) {
   if (arguments.length) return void 0 === e ? this : this.each(function(t) {
    p.offset.setOffset(this, e, t);
   });
   var t, n, r = {
    top: 0,
    left: 0
   }, i = this[0], s = i && i.ownerDocument;
   return s ? (t = s.documentElement, p.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), 
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
    return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
    t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0) - e.scrollTop(), 
    n.left += p.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
     top: t.top - n.top - p.css(r, "marginTop", !0),
     left: t.left - n.left - p.css(r, "marginLeft", !0)
    };
   }
  },
  offsetParent: function() {
   return this.map(function() {
    for (var e = this.offsetParent; e && !p.nodeName(e, "html") && "static" === p.css(e, "position"); ) e = e.offsetParent;
    return e || Pe;
   });
  }
 }), p.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(e, t) {
  var n = /Y/.test(t);
  p.fn[e] = function(r) {
   return G(this, function(e, r, i) {
    var s = nn(e);
    return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void (s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i);
   }, e, r, arguments.length, null);
  };
 }), p.each([ "top", "left" ], function(e, t) {
  p.cssHooks[t] = ze(f.pixelPosition, function(e, n) {
   return n ? (n = Le(e, t), Qe.test(n) ? p(e).position()[t] + "px" : n) : void 0;
  });
 }), p.each({
  Height: "height",
  Width: "width"
 }, function(e, t) {
  p.each({
   padding: "inner" + e,
   content: t,
   "": "outer" + e
  }, function(n, r) {
   p.fn[r] = function(r, i) {
    var s = arguments.length && (n || "boolean" != typeof r), o = n || (!0 === r || !0 === i ? "margin" : "border");
    return G(this, function(t, n, r) {
     var i;
     return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
     Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, o) : p.style(t, n, r, o);
    }, t, s ? r : void 0, s, null);
   };
  });
 }), p.fn.extend({
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
 }), p.fn.size = function() {
  return this.length;
 }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
  return p;
 });
 var rn = e.jQuery, sn = e.$;
 return p.noConflict = function(t) {
  return e.$ === p && (e.$ = sn), t && e.jQuery === p && (e.jQuery = rn), p;
 }, t || (e.jQuery = e.$ = p), p;
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
   for (var s = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], o = 0, a = s.length; o < a; o++) this[s[o]] = c(this[s[o]], this);
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
 var t = navigator.userAgent.indexOf("Windows Phone") >= 0, n = navigator.userAgent.indexOf("Android") > 0 && !t, r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t, i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent), s = r && /OS [6-7]_\d/.test(navigator.userAgent), o = navigator.userAgent.indexOf("BB10") > 0;
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
  var t, o, a, c, l, u = this.targetElement;
  if (!this.trackingClick) return !0;
  if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, 
  !0;
  if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
  if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, 
  this.trackingClick = !1, this.trackingClickStart = 0, s && (l = e.changedTouches[0], 
  (u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u).fastClickScrollParent = this.targetElement.fastClickScrollParent), 
  "label" === (a = u.tagName.toLowerCase())) {
   if (t = this.findControl(u)) {
    if (this.focus(u), n) return !1;
    u = t;
   }
  } else if (this.needsFocus(u)) return e.timeStamp - o > 100 || r && window.top !== window && "input" === a ? (this.targetElement = null, 
  !1) : (this.focus(u), this.sendClick(u, e), r && "select" === a || (this.targetElement = null, 
  e.preventDefault()), !1);
  return !(!r || i || !(c = u.fastClickScrollParent) || c.fastClickLastScrollTop === c.scrollTop) || (this.needsClick(u) || (e.preventDefault(), 
  this.sendClick(u, e)), !1);
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
  if (o && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]"))) {
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

var abc2svg = {
 C: {
  BLEN: 1536,
  BAR: 0,
  CLEF: 1,
  CUSTOS: 2,
  GRACE: 4,
  KEY: 5,
  METER: 6,
  MREST: 7,
  NOTE: 8,
  PART: 9,
  REST: 10,
  SPACE: 11,
  STAVES: 12,
  STBRK: 13,
  TEMPO: 14,
  BLOCK: 16,
  REMARK: 17,
  FULL: 0,
  EMPTY: 1,
  OVAL: 2,
  OVALBARS: 3,
  SQUARE: 4,
  SL_ABOVE: 1,
  SL_BELOW: 2,
  SL_AUTO: 3,
  SL_HIDDEN: 4,
  SL_DOTTED: 8
 },
 Abc: function(user) {
  "use strict";
  var C = abc2svg.C, require = empty_function, system = empty_function, write = empty_function, XMLHttpRequest = empty_function, OPEN_BRACE = 1, CLOSE_BRACE = 2, OPEN_BRACKET = 4, CLOSE_BRACKET = 8, OPEN_PARENTH = 16, CLOSE_PARENTH = 32, STOP_BAR = 64, FL_VOICE = 128, OPEN_BRACE2 = 256, CLOSE_BRACE2 = 512, OPEN_BRACKET2 = 1024, CLOSE_BRACKET2 = 2048, MASTER_VOICE = 4096, IN = 96, CM = 37.8, YSTEP = 256, errs = {
   bad_char: "Bad character '$1'",
   bad_val: "Bad value in $1",
   bar_grace: "Cannot have a bar in grace notes",
   ignored: "$1: inside tune - ignored",
   misplaced: "Misplaced '$1' in %%staves",
   must_note: "!$1! must be on a note",
   must_note_rest: "!$1! must be on a note or a rest",
   nonote_vo: "No note in voice overlay",
   not_ascii: "Not an ASCII character",
   not_enough_n: "Not enough notes/rests for %%repeat",
   not_enough_m: "Not enough measures for %%repeat",
   not_in_tune: "Cannot have '$1' inside a tune"
  }, self = this, glovar = {
   meter: {
    type: C.METER,
    wmeasure: 1,
    a_meter: []
   }
  }, info = {}, mac = {}, maci = new Int8Array(128), parse = {
   ctx: {},
   prefix: "%",
   state: 0,
   line: new scanBuf()
  }, psvg;
  function clone(e, t) {
   if (!e) return e;
   var n = new e.constructor();
   for (var r in e) e.hasOwnProperty(r) && (t && "object" == typeof e[r] ? n[r] = clone(e[r], t - 1) : n[r] = e[r]);
   return n;
  }
  function errbld(e, t, n, r) {
   var i, s, o, a, c;
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
     for (i = o = 0; !((s = parse.file.indexOf("\n", i)) < 0 || s > r); ) o++, i = s + 1;
     a = r - i;
    }
    switch (c = "", n && (c = n, o && (c += ":" + (o + 1) + ":" + (a + 1)), c += " "), 
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
    user.errmsg(c + t, o, a);
   }
  }
  function error(e, t, n, r, i, s, o) {
   var a;
   user.textrans && (a = user.textrans[n]) && (n = a), arguments.length > 3 && (n = n.replace(/\$./g, function(e) {
    switch (e) {
    case "$1":
     return r;

    case "$2":
     return i;

    case "$3":
     return s;

    default:
     return o;
    }
   })), t && t.fname ? errbld(e, n, t.fname, t.istart) : errbld(e, n);
  }
  function scanBuf() {
   this.index = 0, scanBuf.prototype.char = function() {
    return this.buffer[this.index];
   }, scanBuf.prototype.next_char = function() {
    return this.buffer[++this.index];
   }, scanBuf.prototype.get_int = function() {
    for (var e = 0, t = this.buffer[this.index]; t >= "0" && t <= "9"; ) e = 10 * e + Number(t), 
    t = this.next_char();
    return e;
   };
  }
  function syntax(e, t, n, r, i, s) {
   error(e, {
    fname: parse.fname,
    istart: parse.istart + parse.line.index
   }, t, n, r, i, s);
  }
  function js_inject(js) {
   /eval *\(|Function|setTimeout|setInterval/.test(js) ? syntax(1, "Unsecure code") : eval('"use strict"\n' + js);
  }
  var dd_tb = {}, a_de, decos = {
   dot: "0 stc 5 1 1",
   tenuto: "0 emb 5 3 3",
   slide: "1 sld 3 7 0",
   arpeggio: "2 arp 12 10 0",
   roll: "3 roll 7 6 6",
   fermata: "3 hld 12 7 7",
   emphasis: "3 accent 7 4 4",
   lowermordent: "3 lmrd 10 5 5",
   coda: "3 coda 24 10 10",
   uppermordent: "3 umrd 10 5 5",
   segno: "3 sgno 22 8 8",
   trill: "3 trl 14 5 5",
   upbow: "3 upb 10 5 5",
   downbow: "3 dnb 9 5 5",
   gmark: "3 grm 6 5 5",
   wedge: "3 wedge 8 3 3",
   turnx: "3 turnx 10 0 5",
   breath: "3 brth 0 1 20",
   longphrase: "3 lphr 0 1 1",
   mediumphrase: "3 mphr 0 1 1",
   shortphrase: "3 sphr 0 1 1",
   invertedfermata: "3 hld 12 7 7",
   invertedturn: "3 turn 10 0 5",
   invertedturnx: "3 turnx 10 0 5",
   0: "3 fng 8 3 3 0",
   1: "3 fng 8 3 3 1",
   2: "3 fng 8 3 3 2",
   3: "3 fng 8 3 3 3",
   4: "3 fng 8 3 3 4",
   5: "3 fng 8 3 3 5",
   plus: "3 dplus 7 3 3",
   "+": "3 dplus 7 3 3",
   accent: "3 accent 7 4 4",
   ">": "3 accent 7 4 4",
   marcato: "3 marcato 9 3 3",
   "^": "3 marcato 9 3 3",
   mordent: "3 lmrd 10 5 5",
   open: "3 opend 10 3 3",
   snap: "3 snap 14 3 3",
   thumb: "3 thumb 14 3 3",
   dacapo: "3 dacs 16 20 20 Da Capo",
   dacoda: "3 dacs 16 20 20 Da Coda",
   "D.C.": "3 dcap 16 10 10",
   "D.S.": "3 dsgn 16 10 10",
   "D.C.alcoda": "3 dacs 16 38 38 D.C. al Coda",
   "D.S.alcoda": "3 dacs 16 38 38 D.S. al Coda",
   "D.C.alfine": "3 dacs 16 38 38 D.C. al Fine",
   "D.S.alfine": "3 dacs 16 38 38 D.S. al Fine",
   fine: "3 dacs 16 10 10 Fine",
   turn: "3 turn 10 0 5",
   "trill(": "3 ltr 8 0 0",
   "trill)": "3 ltr 8 0 0",
   f: "6 f 18 1 7",
   ff: "6 ff 18 2 10",
   fff: "6 fff 18 4 13",
   ffff: "6 ffff 18 6 16",
   mf: "6 mf 18 6 13",
   mp: "6 mp 18 6 16",
   p: "6 p 18 2 8",
   pp: "6 pp 18 5 14",
   ppp: "6 ppp 18 8 20",
   pppp: "6 pppp 18 10 25",
   pralltriller: "3 umrd 10 5 5",
   sfz: "6 sfz 18 4 10",
   ped: "4 ped 18 8 8",
   "ped-up": "4 pedoff 18 8 8",
   "ped(": "4 lped 20 1 1",
   "ped)": "4 lped 20 1 1",
   "crescendo(": "6 cresc 18 0 0",
   "crescendo)": "6 cresc 18 0 0",
   "<(": "6 cresc 18 0 0",
   "<)": "6 cresc 18 0 0",
   "diminuendo(": "6 dim 18 0 0",
   "diminuendo)": "6 dim 18 0 0",
   ">(": "6 dim 18 0 0",
   ">)": "6 dim 18 0 0",
   "-(": "8 gliss 0 0 0",
   "-)": "8 gliss 0 0 0",
   "~(": "8 glisq 0 0 0",
   "~)": "8 glisq 0 0 0",
   "8va(": "3 8va 10 0 0",
   "8va)": "3 8va 10 0 0",
   "8vb(": "4 8vb 10 0 0",
   "8vb)": "4 8vb 10 0 0",
   "15ma(": "3 15ma 10 0 0",
   "15ma)": "3 15ma 10 0 0",
   "15mb(": "4 15mb 10 0 0",
   "15mb)": "4 15mb 10 0 0",
   invisible: "32 0 0 0 0",
   beamon: "33 0 0 0 0",
   trem1: "34 0 0 0 0",
   trem2: "34 0 0 0 0",
   trem3: "34 0 0 0 0",
   trem4: "34 0 0 0 0",
   xstem: "35 0 0 0 0",
   beambr1: "36 0 0 0 0",
   beambr2: "36 0 0 0 0",
   rbstop: "37 0 0 0 0",
   "/": "38 0 0 6 6",
   "//": "38 0 0 6 6",
   "///": "38 0 0 6 6",
   "beam-accel": "39 0 0 0 0",
   "beam-rall": "39 0 0 0 0",
   stemless: "40 0 0 0 0",
   rbend: "41 0 0 0 0"
  }, f_near = [ !0, !0, !0 ], f_note = [ !1, !1, !1, !0, !0, !0, !1, !1, !0 ], f_staff = [ !1, !1, !1, !1, !1, !1, !0, !0 ];
  function y_get(e, t, n, r) {
   var i, s = staff_tb[e], o = n / realwidth * YSTEP | 0, a = (n + r) / realwidth * YSTEP | 0;
   if (o < 0 && (o = 0), a >= YSTEP && o > (a = YSTEP - 1) && (o = a), t) for (i = s.top[o++]; o <= a; ) i < s.top[o] && (i = s.top[o]), 
   o++; else for (i = s.bot[o++]; o <= a; ) i > s.bot[o] && (i = s.bot[o]), o++;
   return i;
  }
  function y_set(e, t, n, r, i) {
   var s = staff_tb[e], o = n / realwidth * YSTEP | 0, a = (n + r) / realwidth * YSTEP | 0;
   if (o < 0 && (o = 0), a >= YSTEP && o > (a = YSTEP - 1) && (o = a), t) for (;o <= a; ) s.top[o] < i && (s.top[o] = i), 
   o++; else for (;o <= a; ) s.bot[o] > i && (s.bot[o] = i), o++;
  }
  function up_p(e, t) {
   switch (t) {
   case C.SL_ABOVE:
    return !0;

   case C.SL_BELOW:
    return !1;
   }
   return e.multi && 0 != e.multi ? e.multi > 0 : !!e.p_v.have_ly && e.pos.voc != C.SL_ABOVE;
  }
  function d_arp(e) {
   var t, n, r, i = e.s, s = e.dd, o = 5;
   if (i.type == C.NOTE) for (t = 0; t <= i.nhd; t++) {
    if (i.notes[t].acc) r = 5 + i.notes[t].shac; else switch (r = 6 - i.notes[t].shhd, 
    i.head) {
    case C.SQUARE:
     r += 3.5;
     break;

    case C.OVALBARS:
    case C.OVAL:
     r += 2;
    }
    r > o && (o = r);
   }
   (n = 3 * (i.notes[i.nhd].pit - i.notes[0].pit) + 4) < (t = s.h) && (n = t), e.has_val = !0, 
   e.val = n, e.x -= o, e.y = 3 * (i.notes[0].pit - 18) - 3;
  }
  function d_cresc(e) {
   if (!e.ldst) {
    var t, n, r, i, s, o, a, c, l, u, f = e.s, d = e.start;
    s = (t = d.s).x + 3, (c = d.ix) > 0 && (l = a_de[c - 1]), e.st = f.st, e.lden = !1, 
    e.has_val = !0, (i = up_p(f, f.pos.dyn)) && (e.up = !0), l && l.s == t && (e.up && !l.up || !e.up && l.up) && (r = l.dd, 
    f_staff[r.func] && (a = l.x + l.val + 4) > s && (s = a)), e.defl.noen ? (o = e.x - s) < 20 && (s = e.x - 20 - 3, 
    o = 20) : (a = f.x, (u = a_de[e.ix + 1]) && u.s == t && (e.up && !u.up || !e.up && u.up) && (r = u.dd, 
    f_staff[r.func] && (a -= 5)), (o = a - s - 4) < 20 && (s -= .5 * (20 - o), o = 20)), 
    e.val = o, e.x = s, e.y = y_get(e.st, i, s, o), i || (n = e.dd, e.y -= n.h);
   }
  }
  function d_near(e) {
   var t, n, r = e.s, i = e.dd;
   i.str || ((t = (n = r.multi ? r.multi > 0 : r.stem < 0) ? 0 | r.ymx : r.ymn - i.h | 0) > -6 && t < 24 && (n && (t += 3), 
   t = 6 * ((t + 6) / 6 | 0) - 6), n ? r.ymx = t + i.h : r.ymn = t, e.y = t, r.type == C.NOTE && (e.x += r.notes[r.stem >= 0 ? 0 : r.nhd].shhd), 
   "d" == i.name[0] && r.nflags >= -1 && (n ? r.stem > 0 && (e.x += 3.5) : r.stem < 0 && (e.x -= 3.5)));
  }
  function d_pf(e) {
   var t, n, r, i, s, o = e.s, a = e.dd;
   e.ldst || (e.start ? d_cresc(e) : (e.val = a.wl + a.wr, (i = up_p(o, o.pos.vol)) && (e.up = !0), 
   r = o.x - a.wl, e.ix > 0 && (s = a_de[e.ix - 1]).s == o && (e.up && !s.up || !e.up && s.up) && (t = s.dd, 
   f_staff[t.func] && (n = s.x + s.val + 4) > r && (r = n)), e.x = r, e.y = y_get(o.st, i, r, e.val), 
   i || (e.y -= a.h)));
  }
  function d_slide(e) {
   var t, n, r = e.s, i = r.notes[0].pit, s = 5;
   for (t = 0; t <= r.nhd; t++) {
    if (r.notes[t].acc) n = 4 + r.notes[t].shac; else switch (n = 5 - r.notes[t].shhd, 
    r.head) {
    case C.SQUARE:
     n += 3.5;
     break;

    case C.OVALBARS:
    case C.OVAL:
     n += 2;
    }
    r.notes[t].pit <= i + 3 && n > s && (s = n);
   }
   e.x -= s, e.y = 3 * (i - 18);
  }
  function d_trill(e) {
   if (!e.ldst) {
    var t, n, r, i, s = e.dd, o = e.s, a = o.st, c = e.start.s, l = c.x;
    if (e.prev && (l = e.prev.x + 10, n = e.prev.y), e.st = a, 4 != s.func) switch (s.glyph) {
    case "8va":
    case "15ma":
     t = 1;
     break;

    default:
     t = o.multi >= 0;
    }
    e.defl.noen ? (r = e.x - l) < 20 && (l = e.x - 20 - 3, r = 20) : (r = o.x - l - 6, 
    o.type == C.NOTE && (r -= 6), r < 20 && (l -= .5 * (20 - r), r = 20)), s = e.dd, 
    n || (n = y_get(a, t, l, r)), t ? n < (i = staff_tb[c.st].topbar + 2) && (n = i) : (n -= s.h) > (i = staff_tb[c.st].botbar - 2) && (n = i), 
    e.lden = !1, e.has_val = !0, e.val = r, e.x = l, e.y = n, t && (n += s.h), y_set(a, t, l, r, n), 
    t ? c.ymx = o.ymx = n : c.ymn = o.ymn = n;
   }
  }
  function d_upstaff(e) {
   if (!e.ldst) if (e.start) d_trill(e); else {
    var t, n, r, i = e.s, s = e.dd, o = i.x, a = s.wl + s.wr, c = staff_tb[i.st].topbar + 2, l = staff_tb[i.st].botbar - 2;
    if (i.nhd && (o += i.notes[i.stem >= 0 ? 0 : i.nhd].shhd), n = -1, 4 == s.func) n = 0; else if (i.pos) switch (i.pos.orn) {
    case C.SL_ABOVE:
     n = 1;
     break;

    case C.SL_BELOW:
     n = 0;
    }
    switch (s.glyph) {
    case "accent":
    case "roll":
     !n || n < 0 && (i.multi < 0 || !i.multi && i.stem > 0) ? ((t = y_get(i.st, !1, i.x - s.wl, a) - 2) > l && (t = l), 
     t -= s.h, y_set(i.st, !1, i.x, 0, t), r = !0, i.ymn = t) : ((t = y_get(i.st, !0, i.x - s.wl, a) + 2) < c && (t = c), 
     y_set(i.st, !0, i.x - s.wl, a, t + s.h), i.ymx = t + s.h);
     break;

    case "brth":
    case "lphr":
    case "mphr":
    case "sphr":
     for (t = c + 1, "brth" == s.glyph && t < i.ymx && (t = i.ymx), i = i.ts_next; i && !i.seqst; i = i.ts_next) ;
     o += .45 * ((i ? i.x : realwidth) - o);
     break;

    default:
     0 == s.name.indexOf("invert") && (r = !0), "invertedfermata" != s.name && (n > 0 || n < 0 && i.multi >= 0) ? ((t = y_get(i.st, !0, i.x - s.wl, a) + 2) < c && (t = c), 
     y_set(i.st, !0, i.x - s.wl, a, t + s.h), i.ymx = t + s.h) : ((t = y_get(i.st, !1, i.x - s.wl, a) - 2) > l && (t = l), 
     t -= s.h, y_set(i.st, !1, i.x - s.wl, a, t), "fermata" == s.name && (r = !0), i.ymn = t);
    }
    r && (t += s.h, e.inv = !0), e.x = o, e.y = t;
   }
  }
  var func_tb = [ d_near, d_slide, d_arp, d_upstaff, d_upstaff, d_trill, d_pf, d_cresc ];
  function deco_add(e) {
   var t = e.match(/(\S*)\s+(.*)/);
   decos[t[1]] = t[2];
  }
  function deco_def(e) {
   var t, n, r, i, s, o, a = decos[e];
   if (a) if (t = a.match(/(\d+)\s+(.+?)\s+([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)/)) {
    var c = Number(t[1]), l = parseFloat(t[3]), u = parseFloat(t[4]), f = parseFloat(t[5]);
    if (isNaN(c)) error(1, null, "%%deco: bad C function value '$1'", t[1]); else if ((c < 0 || c > 10) && (c < 32 || c > 41)) error(1, null, "%%deco: bad C function index '$1'", c); else if (5 == c && (c = 3), 
    7 == c && (c = 6), l < 0 || u < 0 || f < 0) error(1, null, "%%deco: cannot have a negative value '$1'", a); else {
     if (!(l > 50 || u > 80 || f > 80)) {
      if ((n = dd_tb[e]) || (n = {
       name: e
      }, dd_tb[e] = n), n.func = 0 == n.name.indexOf("head-") ? 9 : c, n.glyph = t[2], 
      n.h = l, n.wl = u, n.wr = f, (o = a.replace(t[0], "").trim()) && ('"' == o[0] && (o = o.slice(1, -1)), 
      n.str = o), 6 == n.func && void 0 == n.str && (n.str = n.name), "(" == (s = n.name.slice(-1)) || ")" == s && n.name.indexOf("(") < 0) if (n.str = null, 
      i = n.name.slice(0, -1) + ("(" == s ? ")" : "("), r = dd_tb[i]) "(" == s ? (n.dd_en = r, 
      r.dd_st = n) : (n.dd_st = r, r.dd_en = n); else if (!(r = deco_def(i))) return;
      return n;
     }
     error(1, null, "%%deco: abnormal h/wl/wr value '$1'", a);
    }
   } else error(1, null, "Invalid decoration '$1'", e); else cfmt.decoerr && error(1, null, "Unknown decoration '$1'", e);
  }
  function deco_cnv(e, t, n) {
   var r, i, s, o, a, c = e.length;
   for (r = 0; r < c; r++) if (o = e[r], (s = dd_tb[o]) || (s = deco_def(o))) {
    switch (s.func) {
    case 0:
     if (t.type == C.BAR && "dot" == s.name) {
      t.bar_dotted = !0;
      break;
     }

    case 1:
    case 2:
     if (!t.notes) {
      error(1, t, errs.must_note_rest, s.name);
      continue;
     }
     break;

    case 8:
     if (t.type != C.NOTE) {
      error(1, t, errs.must_note, s.name);
      continue;
     }
     (a = t.notes[t.nhd]).a_dcn || (a.a_dcn = []), a.a_dcn.push(s.name);
     continue;

    case 9:
     if (!t.notes) {
      error(1, t, errs.must_note_rest, s.name);
      continue;
     }
     for (i = 0; i <= t.nhd; i++) (a = t.notes[i]).a_dcn || (a.a_dcn = []), a.a_dcn.push(s.name);
     continue;

    default:
     break;

    case 10:
     if (t.notes) for (i = 0; i <= t.nhd; i++) t.notes[i].color = s.name; else t.color = s.name;
     continue;

    case 32:
     t.invis = !0;
     continue;

    case 33:
     if (t.type != C.BAR) {
      error(1, t, "!beamon! must be on a bar");
      continue;
     }
     t.beam_on = !0;
     continue;

    case 34:
     if (t.type != C.NOTE || !n || n.type != C.NOTE || t.dur != n.dur) {
      error(1, t, "!$1! must be on the last of a couple of notes", s.name);
      continue;
     }
     for (t.trem2 = !0, t.beam_end = !0, n.beam_st = !0, t.ntrem = n.ntrem = Number(s.name[4]), 
     i = 0; i <= t.nhd; i++) t.notes[i].dur *= 2;
     for (i = 0; i <= n.nhd; i++) n.notes[i].dur *= 2;
     continue;

    case 35:
     if (t.type != C.NOTE) {
      error(1, t, "!xstem! must be on a note");
      continue;
     }
     t.xstem = !0;
     continue;

    case 36:
     if (t.type != C.NOTE) {
      error(1, t, errs.must_note, s.name);
      continue;
     }
     "1" == s.name[6] ? t.beam_br1 = !0 : t.beam_br2 = !0;
     continue;

    case 37:
     t.rbstop = 1;
     continue;

    case 38:
     if (t.type != C.NOTE) {
      error(1, t, errs.must_note, s.name);
      continue;
     }
     t.trem1 = !0, t.ntrem = s.name.length;
     continue;

    case 39:
     if (t.type != C.NOTE) {
      error(1, t, errs.must_note, s.name);
      continue;
     }
     t.feathered_beam = "a" == s.name[5] ? 1 : -1;
     continue;

    case 40:
     t.stemless = !0;
     continue;

    case 41:
     t.rbstop = 2;
     continue;
    }
    t.a_dd || (t.a_dd = []), t.a_dd.push(s);
   }
  }
  function deco_update(e, t) {
   var n, r, i = a_de.length;
   for (n = 0; n < i; n++) (r = a_de[n]).s == e && (r.x += t);
  }
  function deco_width(e) {
   var t, n, r = 0, i = e.a_dd, s = i.length;
   for (n = 0; n < s; n++) switch ((t = i[n]).func) {
   case 1:
    r < 7 && (r = 7);
    break;

   case 2:
    r < 14 && (r = 14);
    break;

   case 3:
    switch (t.glyph) {
    case "brth":
    case "lphr":
    case "mphr":
    case "sphr":
     e.wr < 20 && (e.wr = 20);
    }
   }
   return 0 != r && e.prev && e.prev.type == C.BAR && (r -= 3), r;
  }
  function draw_all_deco() {
   if (0 != a_de.length) {
    var e, t, n, r, i, s, o, a, c, l, u, f, d, p = [], h = [];
    if (!cfmt.dynalign) for (o = staff_tb[i = nstaff].y; --i >= 0; ) a = staff_tb[i].y, 
    h[i] = .5 * (o + 24 + a), o = a;
    for (;e = a_de.shift(); ) (t = e.dd) && (t.dd_en || (n = e.s, (u = (r = t.glyph).indexOf("/")) > 0 && (r = n.stem >= 0 ? r.slice(0, u) : r.slice(u + 1)), 
    f_staff[t.func] ? set_sscale(n.st) : set_scale(n), i = e.st, staff_tb[i].topbar && (s = e.x, 
    o = e.y + staff_tb[i].y, void 0 != e.m ? s += n.notes[e.m].shhd * stv_g.scale : f_staff[t.func] && !cfmt.dynalign && (e.up && i > 0 || !e.up && i < nstaff) && (c = e.up ? h[--i] : h[i++], 
    c -= .5 * t.h, (e.up && o < c || !e.up && o > c) && (a = y_get(i, !e.up, e.x, e.val) + staff_tb[i].y, 
    e.up && (a -= t.h), (e.up && a > c || !e.up && a < c) && (o = c))), (l = user[r]) && "function" == typeof l ? l(s, o, e) : self.psdeco(r, s, o, e) || (anno_start(n, "deco"), 
    e.inv && (g_open(s, o, 0, 1, -1), s = o = 0), e.has_val ? (2 != t.func || stv_g.st < 0 ? out_deco_val(s, o, r, e.val / stv_g.scale, e.defl) : out_deco_val(s, o, r, e.val, e.defl), 
    e.defl.noen && p.push(e.start)) : void 0 != t.str ? ("@" == (f = t.str)[0] && (d = f.match(/^@([0-9.-]+),([0-9.-]+);?/), 
    s += Number(d[1]), o += Number(d[2]), f = f.replace(d[0], "")), out_deco_str(s, o, r, f)) : e.lden ? out_deco_long(s, o, e) : xygl(s, o, r), 
    stv_g.g && g_close(), anno_stop(n, "deco")))));
    a_de = p;
   }
  }
  function draw_deco_near() {
   var e, t;
   function n(e, t) {
    var n, r, i, s, o = e.notes[t], a = o.a_dcn.length;
    for (r = 0; r < a; r++) if (i = o.a_dcn[r], (s = dd_tb[i]) || (s = deco_def(i))) {
     switch (s.func) {
     case 0:
     case 1:
     case 3:
     case 4:
     case 8:
      break;

     default:
      error(1, null, "Cannot have !$1! on a head", s.name);
      continue;

     case 9:
      o.invis = !0;
      break;

     case 10:
      o.color = s.name;
      continue;

     case 32:
      o.invis = !0;
      continue;

     case 40:
      e.stemless = !0;
      continue;
     }
     n = {
      s: e,
      dd: s,
      st: e.st,
      m: t,
      ix: 0,
      defl: {},
      x: e.x,
      y: 3 * (o.pit - 18)
     }, a_de.push(n), s.dd_en ? n.ldst = !0 : s.dd_st && (n.lden = !0, n.defl.nost = !0);
    }
   }
   function r(e) {
    var t;
    if (e.a_dd && function(e) {
     var t, n, r, i, s = e.a_dd.length;
     for (n = 0; n < s; n++) {
      switch ((t = e.a_dd[n]).func) {
      default:
       r = 0;
       break;

      case 3:
      case 4:
       r = e.pos.orn;
       break;

      case 6:
       r = e.pos.vol;
       break;

      case 7:
       r = e.pos.dyn;
      }
      r != C.SL_HIDDEN && (i = {
       s: e,
       dd: t,
       st: e.st,
       ix: a_de.length,
       defl: {},
       x: e.x,
       y: e.y
      }, a_de.push(i), t.dd_en ? i.ldst = !0 : t.dd_st && (i.lden = !0, i.defl.nost = !0), 
      f_near[t.func] && func_tb[t.func](i));
     }
    }(e), e.notes) for (t = 0; t < e.notes.length; t++) e.notes[t].a_dcn && n(e, t);
   }
   for (e = tsfirst; e; e = e.ts_next) {
    switch (e.type) {
    case C.CLEF:
    case C.KEY:
    case C.METER:
     continue;
    }
    break;
   }
   for (0 != a_de.length && function(e) {
    var t, n, r = e.x - e.wl, i = a_de.length;
    for (t = 0; t < i; t++) (n = a_de[t]).ix = t, n.s.x = n.x = r, n.defl.nost = !0;
   }(e); e; e = e.ts_next) {
    switch (e.type) {
    case C.BAR:
    case C.MREST:
    case C.NOTE:
    case C.REST:
    case C.SPACE:
     break;

    case C.GRACE:
     for (t = e.extra; t; t = t.next) r(t);

    default:
     continue;
    }
    r(e);
   }
   !function() {
    var e, t, n, r, i, s, o, a, c, l = a_de.length;
    for (e = 0; e < l; e++) if ((n = a_de[e]).ldst) {
     for (s = (i = n.dd).dd_en, o = (a = n.s).v, t = e + 1; t < l && ((r = a_de[t]).start || r.dd != s || r.s.v != o); t++) ;
     if (t == l) for (c = a.st, t = e + 1; t < l && ((r = a_de[t]).start || r.dd != s || r.s.st != c); t++) ;
     t == l && ((r = {
      s: n.s,
      st: n.st,
      dd: s,
      ix: a_de.length - 1,
      x: realwidth - 6,
      y: n.s.y,
      lden: !0,
      defl: {
       noen: !0
      }
     }).x < a.x + 10 && (r.x = a.x + 10), void 0 != n.m && (r.m = n.m), a_de.push(r)), 
     r.start = n, r.defl.nost = n.defl.nost, "trill(" == i.name && e > 0 && "trill" == a_de[e - 1].dd.name && (r.prev = a_de[e - 1]);
    }
    for (e = 0; e < l; e++) (r = a_de[e]).lden && !r.start && ((n = {
     s: prev_scut(a = r.s),
     st: r.st,
     dd: r.dd.dd_st,
     ix: a_de.length - 1,
     y: a.y,
     ldst: !0
    }).x = n.s.x, void 0 != r.m && (n.m = r.m), a_de.push(n), r.start = n);
   }();
  }
  function draw_deco_note() {
   var e, t, n, r = a_de.length;
   for (e = 0; e < r; e++) n = (t = a_de[e]).dd.func, f_note[n] && void 0 == t.m && func_tb[n](t);
  }
  function draw_deco_staff() {
   var e, t, n, r, i, s, o, a, c, l, u, f, d, p, h, m = new Array(nstaff), g = a_de.length;
   function y(e) {
    var t, n, i, s, o, a, c;
    for (i = staff_tb[e.st].topbar + 25, t = e.sym; t; t = t.next) if (t.type == C.BAR && t.rbstart && !t.norepbra) {
     if (!t.next) break;
     for (c || (c = t, set_font("repeat")), n = t; t.next && !(t = t.next).rbstop; ) ;
     i < (s = y_get(e.st, !0, n.x, t.x - n.x)) && (i = s), n.text && (a = strwh(n.text), 
     s = y_get(e.st, !0, n.x + 4, a[0]), i < (s += a[1]) && (i = s)), t.rbstart && (t = t.prev);
    }
    if (t = c) for (set_dscale(e.st, !0), s = i * staff_tb[e.st].staffscale; t; t = t.next) if (t.rbstart && !t.norepbra) {
     for (n = t; t.next && !(t = t.next).rbstop; ) ;
     if (n == t) break;
     r = n.x, o = t.type != C.BAR ? t.rbstop ? 0 : t.x - realwidth + 4 : t.bar_type.length > 1 && "[]" != t.bar_type || "]" == t.bar_type ? n.st > 0 && !(cur_sy.staves[n.st - 1].flags & STOP_BAR) ? t.wl : ":" == t.bar_type.slice(-1) ? 12 : ":" != t.bar_type[0] ? 0 : 8 : t.rbstop ? 0 : 8, 
     o = t.x - r - o, t.next || t.rbstop || e.bar_start || (e.bar_start = clone(t), e.bar_start.type = C.BAR, 
     e.bar_start.bar_type = "", delete e.bar_start.text, e.bar_start.rbstart = 1, delete e.bar_start.a_gch), 
     n.text && xy_str(r + 4, s - gene.curfont.size - 3, n.text), xypath(r, s), 2 == n.rbstart && (output += "m0 20v-20"), 
     output += "h" + o.toFixed(1), 2 == t.rbstop && (output += "v20"), output += '"/>\n', 
     y_set(n.st, !0, r, o, i + 2), t.rbstart && (t = t.prev);
    }
   }
   for (o = 0; o <= nstaff; o++) m[o] = {
    ymin: 0,
    ymax: 0
   };
   for (o = 0; o < g; o++) (l = (c = a_de[o]).dd) && f_staff[l.func] && void 0 == c.m && (func_tb[l.func](c), 
   l.dd_en || cfmt.dynalign && (c.up ? c.y > m[c.st].ymax && (m[c.st].ymax = c.y) : c.y < m[c.st].ymin && (m[c.st].ymin = c.y)));
   for (o = 0; o < g; o++) (l = (c = a_de[o]).dd) && !l.dd_en && f_staff[l.func] && (cfmt.dynalign ? (i = c.up ? m[c.st].ymax : m[c.st].ymin, 
   c.y = i) : i = c.y, c.up && (i += l.h), y_set(c.st, c.up, c.x, c.val, i));
   for (o = 0; o <= nstaff; o++) m[o] = {
    ymin: 0,
    ymax: 24
   };
   for (e = tsfirst; e; e = e.ts_next) if (e.a_gch) {
    for (t || (t = e), f = null, d = 0; d < e.a_gch.length && !("g" == (u = e.a_gch[d]).type && (f = u, 
    u.y < 0)); d++) ;
    f && (s = f.wh[0], f.y >= 0 ? (i = y_get(e.st, !0, e.x, s)) > m[e.st].ymax && (m[e.st].ymax = i) : (i = y_get(e.st, !1, e.x, s)) < m[e.st].ymin && (m[e.st].ymin = i));
   }
   if (t) {
    for (o = 0; o <= nstaff; o++) h = staff_tb[o].botbar, m[o].ymin > h - 4 && (m[o].ymin = h - 4), 
    p = staff_tb[o].topbar, m[o].ymax < p + 4 && (m[o].ymax = p + 4);
    for (set_dscale(-1), e = t; e; e = e.ts_next) e.a_gch && self.draw_gchord(e, m[e.st].ymin, m[e.st].ymax);
   }
   for (a = 0; a < voice_tb.length; a++) !(n = voice_tb[a]).second && n.sym && y(n);
  }
  function draw_measnb() {
   var e, t, n, r, i, s, o, a, c, l = cur_sy;
   for (t = 0; t <= nstaff && !l.st_print[t]; t++) ;
   if (!(t > nstaff)) {
    if (set_dscale(t), 1 != staff_tb[t].staffscale && param_set_font("measurefont", "* " + ((a = get_font("measure").size) / staff_tb[t].staffscale).toString()), 
    set_font("measure"), c = cwidf("0"), e = tsfirst, (n = gene.nbar) > 1) if (0 == cfmt.measurenb) o = !0, 
    (i = y_get(t, !0, 0, 20)) < staff_tb[t].topbar + 14 && (i = staff_tb[t].topbar + 14), 
    xy_str(0, i, n.toString()), y_set(t, !0, 0, 20, i + gene.curfont.size + 2); else if (n % cfmt.measurenb == 0) {
     for (;;e = e.ts_next) {
      switch (e.type) {
      case C.TIMESIG:
      case C.CLEF:
      case C.KEYSIG:
      case C.FMTCHG:
      case C.STBRK:
       continue;
      }
      break;
     }
     e.type == C.BAR && e.bar_num || (e.prev && (e = e.prev), r = e.x + e.wr, o = !0, 
     s = c, n >= 10 && (s *= n >= 100 ? 3 : 2), gene.curfont.box && (s += 4), (i = y_get(t, !0, r, s)) < staff_tb[t].topbar + 6 && (i = staff_tb[t].topbar + 6), 
     xy_str(r, i += 2, n.toString()), gene.curfont.box && (i += 2, s += 3), y_set(t, !0, r, s, i += gene.curfont.size), 
     e.ymx = i);
    }
    for (;e; e = e.ts_next) {
     switch (e.type) {
     case C.STAVES:
      for (l = e.sy, t = 0; t < nstaff && !l.st_print[t]; t++) ;
      set_dscale(t);
      continue;

     default:
      continue;

     case C.BAR:
      if (!e.bar_num) continue;
     }
     n = e.bar_num, 0 != cfmt.measurenb && n % cfmt.measurenb == 0 && e.next && !e.bar_mrep && (o || (o = !0), 
     s = c, n >= 10 && (s *= n >= 100 ? 3 : 2), (i = y_get(t, !0, r = e.x - .4 * s, s)) < staff_tb[t].topbar + 3 && (i = staff_tb[t].topbar + 3), 
     e.next.type == C.NOTE && (e.next.stem > 0 ? i < e.next.ys - gene.curfont.size && (i = e.next.ys - gene.curfont.size) : i < e.next.y && (i = e.next.y)), 
     i += 2, gene.curfont.box && (i += 2, s += 3), xy_str(r, i, n.toString()), i += gene.curfont.size, 
     gene.curfont.box && (i += 2), y_set(t, !0, r, s, i), e.ymx = i);
    }
    gene.nbar = n, a && param_set_font("measurefont", "* " + a.toString());
   }
  }
  function draw_notempo(e, t, n, r, i) {
   var s, o, a, c = identify_note(e, r), l = c[0], u = c[1], f = c[2];
   switch (out_XYAB('<g transform="translate(X,Y) scale(F)">\n', t + 4, n + 4, i), 
   l) {
   case C.OVAL:
    o = "HD";
    break;

   case C.EMPTY:
    o = "Hd";
    break;

   default:
    o = "hd";
   }
   if (xygl(-posx, posy, o), s = 4, u) {
    switch (a = 9, f > 0 && (a += 4), l) {
    case C.SQUARE:
     a += 3;
     break;

    case C.OVALBARS:
    case C.OVAL:
     a += 2;
     break;

    case C.EMPTY:
     a += 1;
    }
    for (s = a * u, a -= posx; --u >= 0; ) xygl(a, posy, "dot"), a += 3.5;
   }
   return r < C.BLEN && (f <= 0 ? out_stem(-posx, posy, 21) : (out_stem(-posx, posy, 21, !1, f), 
   s < 6 && (s = 6))), output += "</g>\n", (s + 15) * i;
  }
  function tempo_width(e) {
   var t = 0;
   return e.tempo_wh1 && (t = e.tempo_wh1[0]), e.tempo_wh0 && (t += e.tempo_wh0[0]), 
   e.tempo_wh2 && (t += e.tempo_wh2[0]), t;
  }
  function write_tempo(e, t, n) {
   var r, i, s, o = .7 * gene.curfont.size / 12;
   if (set_font("tempo"), gene.curfont.box && (gene.curfont.box = !1, i = t), e.tempo_str1 && (xy_str(t, n, e.tempo_str1, null, null, e.tempo_wh1), 
   t += e.tempo_wh1[0] + 3), e.tempo_notes) {
    for (r = 0; r < e.tempo_notes.length; r++) t += draw_notempo(e, t, n, e.tempo_notes[r], o);
    xy_str(t, n, e.tempo_str0, null, null, e.tempo_wh0), t += e.tempo_wh0[0], e.tempo ? t += 5 : t += draw_notempo(e, t, n, e.new_beat, o);
   }
   e.tempo_str2 && xy_str(t, n, e.tempo_str2, null, null, e.tempo_wh2), i && (gene.curfont.box = !0, 
   e.tempo_str2 && (t += e.tempo_wh2[0] + 3), s = gene.curfont.size + 4, output += '<rect class="stroke" x="', 
   out_sxsy(i - 2, '" y="', n + s - 1), output += '" width="' + (t - i + 2).toFixed(1) + '" height="' + s.toFixed(1) + '"/>\n'), 
   e.del = !0;
  }
  function draw_partempo(e, t) {
   var n, r, i, s, o, a, c = 0, l = 0, u = staff_tb[e].topbar + 8, f = 0, d = 1, p = -100;
   for (n = tsfirst; n; n = n.ts_next) n.type != C.TEMPO || n.del || (i || (i = n), 
   o = tempo_width(n), 0 == n.time && n.x > 40 && (n.x = 40), (a = y_get(e, !0, n.x - 16, o)) > u && (u = a), 
   p >= n.x - 16 && !(f & d >> 1) && (f |= d), d <<= 1, p = n.x - 16 + o);
   if (i) for (set_sscale(-1), set_font("tempo"), s = (a = 2 - (l = gene.curfont.size + 8)) - l, 
   0 != f && (l *= 2), t < u + l && (c = u + l - t), n = i; n; n = n.ts_next) n.type != C.TEMPO || n.del || ((user.anno_start || user.anno_stop) && (n.wl = 16, 
   n.wr = 30, n.ymn = 1 & f ? s : a, n.ymx = n.ymn + 14, anno_start(n)), write_tempo(n, n.x - 16, 1 & f ? s : a), 
   anno_stop(n), f >>= 1);
   for (u = staff_tb[e].topbar + 6, n = tsfirst; n; n = n.ts_next) n.type == C.PART && (r || (r = n, 
   set_font("parts"), s = gene.curfont.size + 2), o = strwh(n.text)[0], u < (a = y_get(e, !0, n.x - 10, o + 3)) && (u = a));
   if (r) for (set_sscale(-1), gene.curfont.box && (s += 2), t < u + s + l && (c = u + s + l - t), 
   n = r; n; n = n.ts_next) n.type == C.PART && (n.x -= 10, (user.anno_start || user.anno_stop) && (o = strwh(n.text)[0], 
   n.wl = 0, n.wr = o, n.ymn = -l - s, n.ymx = n.ymn + s, anno_start(n)), xy_str(n.x, 2 - l - s, n.text), 
   anno_stop(n));
   return c;
  }
  var STEM_MIN = 16, STEM_MIN2 = 14, STEM_MIN3 = 12, STEM_MIN4 = 10, STEM_CH_MIN = 14, STEM_CH_MIN2 = 10, STEM_CH_MIN3 = 9, STEM_CH_MIN4 = 9, BEAM_DEPTH = 3.2, BEAM_OFFSET = .25, BEAM_SHIFT = 5, BEAM_SLOPE = .4, BEAM_STUB = 8, SLUR_SLOPE = .5, GSTEM = 15, GSTEM_XOFF = 2.3, cache;
  function b_pos(e, t, n, r) {
   var i, s, o, a, c = e ? 3.5 : BEAM_SHIFT, l = e ? 1.8 : BEAM_DEPTH;
   function u(e) {
    return 6 * Math.round((e + 12) / 6) - 12 - e;
   }
   if (t > 0) {
    if ((s = r - (n - 1) * c - l) > 26) return 0;
    i = r;
   } else {
    if ((i = r + (n - 1) * c + l) < -2) return 0;
    s = r;
   }
   return (o = u(i - BEAM_OFFSET)) * o > (a = u(s + BEAM_OFFSET)) * a ? a : o;
  }
  function sym_dup(e) {
   var t, n = clone(e);
   for (n.invis = !0, delete n.extra, delete n.text, delete n.a_gch, delete n.a_ly, 
   delete n.a_dd, n.notes = clone(e.notes), t = 0; t <= n.nhd; t++) delete (n.notes[t] = clone(e.notes[t])).a_dcn;
   return n;
  }
  var min_tb = [ [ STEM_MIN, STEM_MIN, STEM_MIN2, STEM_MIN3, STEM_MIN4, STEM_MIN4 ], [ STEM_CH_MIN, STEM_CH_MIN, STEM_CH_MIN2, STEM_CH_MIN3, STEM_CH_MIN4, STEM_CH_MIN4 ] ];
  function calculate_beam(e, t) {
   var n, r, i, s, o, a, c, l, u, f, d, p, h, m, g, y, v, _, A, b, x, w, k;
   for (t.beam_st || (lkvsym(n = sym_dup(t), t), lktsym(n, t), n.x -= 12, n.x > t.prev.x + 12 && (n.x = t.prev.x + 12), 
   n.beam_st = !0, delete n.beam_end, n.tmp = !0, delete n.slur_start, delete n.slur_end, 
   t = n), s = o = 0, l = u = !1, a = t.st, c = t.v, b = t.grace ? GSTEM_XOFF : 3.5, 
   r = t; r.type != C.NOTE || (r.nflags > o && (o = r.nflags), s++, r.st != a && (l = !0), 
   r.stem != t.stem && (u = !0), w || r.invis || r.stemless && !r.trem2 || (w = !0), 
   !r.beam_end); r = r.next) if (!r.next) {
    for (;r.type != C.NOTE; r = r.prev) ;
    (n = sym_dup(r)).next = r.next, n.next && (n.next.prev = n), r.next = n, n.prev = r, 
    n.ts_next = r.ts_next, n.ts_next && (n.ts_next.ts_prev = n), r.ts_next = n, n.ts_prev = r, 
    delete n.beam_st, n.beam_end = !0, n.tmp = !0, delete n.slur_start, delete n.slur_end, 
    n.x += 12, n.x < realwidth - 12 && (n.x = realwidth - 12), r = n, s++;
    break;
   }
   if (!w) return !1;
   if (e.s2 = r, 0 == staff_tb[a].y) {
    if (l) return !1;
   } else if (!l) return e.s1 = t, e.a = (t.ys - r.ys) / (t.xs - r.xs), e.b = t.ys - t.xs * e.a + staff_tb[a].y, 
   e.nflags = o, !0;
   for (A = t, v = 100, _ = 0, n = t; n.type != C.NOTE || (1 == (x = n.p_v.scale) && (x = staff_tb[n.st].staffscale), 
   n.stem >= 0 ? (f = b + n.notes[0].shhd, n.notes[n.nhd].pit > _ && (_ = n.notes[n.nhd].pit, 
   A = n)) : (f = -b + n.notes[n.nhd].shhd, n.notes[0].pit < v && (v = n.notes[0].pit, 
   A = n)), n.xs = n.x + f * x, n != r); n = n.next) ;
   if (cfmt.flatbeams ? h = 0 : !u && s >= 3 && A != t && A != r && (h = 0), d = t.ys + staff_tb[a].y, 
   void 0 == h && (h = (r.ys + staff_tb[r.st].y - d) / (r.xs - t.xs)), 0 != h && (h = h > 0 ? BEAM_SLOPE * h / (BEAM_SLOPE + h) : BEAM_SLOPE * h / (BEAM_SLOPE - h)), 
   m = (d + r.ys + staff_tb[r.st].y) / 2 - h * (r.xs + t.xs) / 2, y = 0, n = t, u) p = .5 * ((t.grace ? 3.5 : BEAM_SHIFT) * (o - 1) + BEAM_DEPTH), 
   t.stem != r.stem && t.nflags < r.nflags ? m += p * r.stem : m += p * t.stem; else if (t.grace) for (;p = h * n.xs + m - staff_tb[n.st].y, 
   g = GSTEM - 2, n.stem > 0 ? g -= p - 3 * (n.notes[n.nhd].pit - 18) : g += p - 3 * (n.notes[0].pit - 18), 
   (g += 3 * (n.nflags - 1)) > y && (y = g), n != r; n = n.next) ; else {
    for (var E = BEAM_DEPTH + BEAM_SHIFT * (o - 1); n.ts_prev && n.ts_prev.type == C.NOTE && n.ts_prev.time == n.time && n.ts_prev.x > t.xs; ) n = n.ts_prev;
    for (;n && n.time <= r.time; n = n.ts_next) if (!(n.type != C.NOTE || n.invis || n.st != a && n.v != c)) {
     if (p = h * (f = n.v == c ? n.xs : n.x) + m - staff_tb[n.st].y, n.v == c) g = min_tb[0 == n.nhd ? 0 : 1][n.nflags], 
     n.stem > 0 ? (n.notes[n.nhd].pit > 26 && (g -= 2, n.notes[n.nhd].pit > 28 && (g -= 2)), 
     g -= p - 3 * (n.notes[n.nhd].pit - 18)) : (n.notes[0].pit < 18 && (g -= 2, n.notes[0].pit < 16 && (g -= 2)), 
     g -= 3 * (n.notes[0].pit - 18) - p), g += BEAM_DEPTH + BEAM_SHIFT * (n.nflags - 1); else {
      if (t.stem > 0) if (n.stem > 0) {
       if (n.ymn > p + 4 || n.ymx < p - E - 2) continue;
       g = n.v > c ? n.ymx - p : n.ymn + 8 - p;
      } else g = n.ymx - p; else if (n.stem < 0) {
       if (n.ymx < p - 4 || n.ymn > p - E - 2) continue;
       g = n.v < c ? p - n.ymn : p - n.ymx + 8;
      } else g = p - n.ymn;
      g += 2 + E;
     }
     g > y && (y = g);
    }
   }
   if (y > 0 && (m += t.stem * y), !l && !u) for (n = t.next; ;n = n.next) {
    switch (n.type) {
    case C.REST:
     if (!(i = n.ts_next) || i.st != a || i.type != C.NOTE && i.type != C.REST) break;

    case C.BAR:
     if (n.invis) break;

    case C.CLEF:
     d = h * n.x + m, t.stem > 0 ? (d = n.ymx - d + BEAM_DEPTH + BEAM_SHIFT * (o - 1) + 2) > 0 && (m += d) : (d = n.ymn - d - BEAM_DEPTH - BEAM_SHIFT * (o - 1) - 2) < 0 && (m += d);
     break;

    case C.GRACE:
     for (i = n.extra; i; i = i.next) d = h * i.x + m, t.stem > 0 ? (d = i.ymx - d + BEAM_DEPTH + BEAM_SHIFT * (o - 1) + 2) > 0 && (m += d) : (d = i.ymn - d - BEAM_DEPTH - BEAM_SHIFT * (o - 1) - 2) < 0 && (m += d);
    }
    if (n == r) break;
   }
   for (0 == h && (m += b_pos(t.grace, t.stem, o, m - staff_tb[a].y)), n = t; ;n = n.next) {
    switch (n.type) {
    case C.NOTE:
     n.ys = h * n.xs + m - staff_tb[n.st].y, n.stem > 0 ? (n.ymx = n.ys + 2.5, n.ts_prev && n.ts_prev.stem > 0 && n.ts_prev.st == n.st && n.ts_prev.ymn < n.ymx && n.ts_prev.x == n.x && 0 == n.notes[0].shhd && (n.ts_prev.x -= 3, 
     n.ts_prev.xs -= 3)) : n.ymn = n.ys - 2.5;
     break;

    case C.REST:
     if (d = h * n.x + m - staff_tb[n.st].y, k = BEAM_DEPTH + BEAM_SHIFT * (o - 1) + (n.head != C.FULL ? 4 : 9), 
     t.stem > 0) {
      if (d -= k, 0 == t.multi && d > 12 && (d = 12), n.y <= d) break;
     } else if (d += k, 0 == t.multi && d < 12 && (d = 12), n.y >= d) break;
     n.head != C.FULL && (d = 6 * ((d + 3 + 12) / 6 | 0) - 12), n.y = d;
    }
    if (n == r) break;
   }
   return 0 != staff_tb[a].y && (e.s1 = t, e.a = h, e.b = m, e.nflags = o, !0);
  }
  function draw_beams(e) {
   var t, n, r, i, s, o, a, c, l, u, f, d, p = e.s1, h = e.s2;
   function m(e, t, n, r, i, s) {
    var o, a, c = i.s1, l = c.nflags;
    c.ntrem && (l -= c.ntrem), c.trem2 && s > l && (c.dur >= C.BLEN / 2 ? (e = c.x + 6, 
    t = i.s2.x - 6) : c.dur < C.BLEN / 4 && (e += 5, t -= 6)), o = i.a * e + i.b - n, 
    t -= e, t /= stv_g.scale, a = i.a * t * stv_g.scale, xypath(e, o, !0), output += "l" + t.toFixed(1) + " " + (-a).toFixed(1) + "v" + r.toFixed(1) + "l" + (-t).toFixed(1) + " " + a.toFixed(1) + 'z"/>\n';
   }
   for (anno_start(p, "beam"), p.grace ? (s = 3.5, o = 3.2, i = .29, a = 1.8) : (s = BEAM_SHIFT, 
   o = BEAM_STUB, i = .34, a = BEAM_DEPTH), r = p.stem, p.stem != h.stem && p.nflags < h.nflags && (r = h.stem), 
   r < 0 && (a = -a), m(p.xs - i, h.xs + i, 0, a, e, 1), c = 0, t = p; t.type == C.NOTE && t.stem != r && (t.ys = e.a * t.xs + e.b - staff_tb[t.st].y + s * (t.nflags - 1) * t.stem - a), 
   t != h; t = t.next) ;
   for (p.feathered_beam && (c = s / (h.xs - p.xs), s = p.feathered_beam > 0 ? (c = -c) * p.xs : c * h.xs, 
   c *= r), i = 0, n = 2; n <= e.nflags; n++) for (i += s, 0 != c && (e.a += c), t = p; ;t = t.next) if (t.type != C.NOTE || t.nflags < n) {
    if (t == h) break;
   } else if (t.trem1 && n > t.nflags - t.ntrem) {
    if (m((d = t.dur >= C.BLEN / 2 ? t.x : t.xs) - 5, d + 5, (i + 2.5) * r, a, e, n), 
    t == h) break;
   } else {
    for (u = t; t != h; ) {
     if ((l = t.next).type == C.NOTE || l.type == C.REST) if (l.trem1) {
      if (l.nflags - l.ntrem < n) break;
     } else if (l.nflags < n) break;
     if (l.beam_br1 || l.beam_br2 && n > 2) break;
     t = l;
    }
    for (f = t; f.type != C.NOTE; ) f = f.prev;
    if (d = u.xs, u == f) if (u == p) d += o; else if (u == h) d -= o; else if (u.beam_br1 || u.beam_br2 && n > 2) d += o; else {
     for (l = u.next; l.type != C.NOTE; ) l = l.next;
     if (l.beam_br1 || l.beam_br2 && n > 2) d -= o; else {
      for (u = u.prev; u.type != C.NOTE; ) u = u.prev;
      u.nflags < l.nflags || u.nflags == l.nflags && u.dots < l.dots ? d += o : d -= o;
     }
    }
    if (m(d, f.xs, i * r, a, e, n), t == h) break;
   }
   p.tmp ? unlksym(p) : h.tmp && unlksym(h), anno_stop(p, "beam");
  }
  function draw_lstaff(e) {
   var t, n, r, i, s = cur_sy.nstaff, o = 0;
   function a(e, t, n) {
    for (var r, i, s, o; !cur_sy.st_print[t]; ) {
     if (cur_sy.staves[t].flags & n) return;
     t++;
    }
    for (r = i = t; cur_sy.st_print[r] && (i = r), !(cur_sy.staves[r].flags & n); ) r++;
    s = staff_tb[t].y + staff_tb[t].topbar * staff_tb[t].staffscale, o = staff_tb[i].y + staff_tb[i].botbar * staff_tb[i].staffscale, 
    n & (CLOSE_BRACE | CLOSE_BRACE2) ? out_brace(e, o, s - o) : out_bracket(e, s, s - o);
   }
   for (t = 0; (cur_sy.staves[t].flags & (OPEN_BRACE | OPEN_BRACKET) && o++, !cur_sy.st_print[t]) && (cur_sy.staves[t].flags & (CLOSE_BRACE | CLOSE_BRACKET) && o--, 
   t != s); t++) ;
   for (n = s; n > t && !cur_sy.st_print[n]; n--) ;
   if (t != n || 0 != o) for (r = staff_tb[n].y + staff_tb[n].botbar * staff_tb[n].staffscale, 
   i = staff_tb[t].y + staff_tb[t].topbar * staff_tb[t].staffscale - r, xypath(e, r), 
   output += "v" + (-i).toFixed(1) + '"/>\n', t = 0; t <= s; t++) cur_sy.staves[t].flags & OPEN_BRACE && a(e, t, CLOSE_BRACE), 
   cur_sy.staves[t].flags & OPEN_BRACKET && a(e, t, CLOSE_BRACKET), cur_sy.staves[t].flags & OPEN_BRACE2 && a(e - 6, t, CLOSE_BRACE2), 
   cur_sy.staves[t].flags & OPEN_BRACKET2 && a(e - 6, t, CLOSE_BRACKET2);
  }
  function draw_meter(e, t) {
   if (t.a_meter) {
    var n, r, i = t.st, s = staff_tb[i], o = s.y;
    for ("|||||" != s.stafflines && (o += (s.topbar + s.botbar) / 2 - 12), n = 0; n < t.a_meter.length; n++) r = t.a_meter[n], 
    e = t.x + t.x_meter[n], r.bot ? out_XYAB('<g transform="translate(X,Y)" text-anchor="middle">\n <text y="-12">A</text>\n <text>B</text>\n</g>\n', e, o + 6, m_gl(r.top), m_gl(r.bot)) : out_XYAB('<text x="X" y="Y" text-anchor="middle">A</text>\n', e, o + 12, m_gl(r.top));
   }
  }
  function draw_acc(e, t, n, r, i) {
   if (r) if (r == i) n = -1 == n ? -2 : 2; else if (2 * r != i) return void xygl(e, t, "acc" + n + "_" + r + "_" + i);
   xygl(e, t, "acc" + n);
  }
  function draw_hl(e, t, n, r, i) {
   var s, o, a = staff_tb[r], c = a.y, l = a.stafflines, u = 6 * (l.length - 1), f = a.botline;
   if (/[\[|]/.test(l)) {
    if (t % 6 && (t += 3), n % 6 && (n -= 3), l.indexOf("-") >= 0 && (t > f && t < u || n > f && n < u || t <= f && n >= u)) {
     for (s = t, o = n; s > f && "-" == l[s / 6]; ) s -= 6;
     for (;o < u && "-" == l[o / 6]; ) o += 6;
     for (;s < o; s += 6) "-" == l[s / 6] && xygl(e, c + s, i);
    }
    for (;t < f; t += 6) xygl(e, c + t, i);
    for (;n > u; n -= 6) xygl(e, c + n, i);
   }
  }
  var sharp_cl = new Int8Array([ 24, 9, 15, 21, 6, 12, 18 ]), flat_cl = new Int8Array([ 12, 18, 24, 9, 15, 21, 6 ]), sharp1 = new Int8Array([ -9, 12, -9, -9, 12, -9 ]), sharp2 = new Int8Array([ 12, -9, 12, -9, 12, -9 ]), flat1 = new Int8Array([ 9, -12, 9, -12, 9, -12 ]), flat2 = new Int8Array([ -12, 9, -12, 9, -12, 9 ]);
  function draw_keysig(e, t) {
   if (!t.k_none) {
    var n, r, i, s = t.k_old_sf, o = t.st, a = staff_tb[o].y, c = t.k_y_clef;
    for (1 & c && (c += 7), c /= 2; c < 0; ) c += 7;
    if (c %= 7, t.k_a_acc) {
     if (t.k_a_acc.length) {
      var l, u = t.k_a_acc[0].acc, f = 100;
      for (n = 0; n < t.k_a_acc.length; n++) l = t.k_a_acc[n], r = 3 * (t.k_y_clef + l.pit - 18), 
      0 != n && (r > f + 18 || r < f - 18) ? e -= 5.5 : l.acc != u && (e += 3), u = l.acc, 
      draw_hl(e, r, r, o, "hl"), f = r, draw_acc(e, a + r, l.acc, l.micro_n, l.micro_d), 
      e += 5.5;
     }
    } else {
     if ((cfmt.cancelkey || 0 == t.k_sf) && (0 == t.k_sf || s * t.k_sf < 0)) {
      for (i = (r = sharp_cl[c]) > 9 ? sharp1 : sharp2, n = 0; n < s; n++) xygl(e, a + r, "acc3"), 
      r += i[n], e += 5.5;
      for (i = (r = flat_cl[c]) < 18 ? flat1 : flat2, n = 0; n > s; n--) xygl(e, a + r, "acc3"), 
      r += i[-n], e += 5.5;
      0 != t.k_sf && (e += 3);
     }
     if (t.k_sf > 0) {
      for (i = (r = sharp_cl[c]) > 9 ? sharp1 : sharp2, n = 0; n < t.k_sf; n++) xygl(e, a + r, "acc1"), 
      r += i[n], e += 5.5;
      if (cfmt.cancelkey && n < s) for (e += 2; n < s; n++) xygl(e, a + r, "acc3"), r += i[n], 
      e += 5.5;
     }
     if (t.k_sf < 0) {
      for (i = (r = flat_cl[c]) < 18 ? flat1 : flat2, n = 0; n > t.k_sf; n--) xygl(e, a + r, "acc-1"), 
      r += i[-n], e += 5.5;
      if (cfmt.cancelkey && n > s) for (e += 2; n > s; n--) xygl(e, a + r, "acc3"), r += i[-n], 
      e += 5.5;
     }
    }
   }
  }
  function bar_cnv(e) {
   switch (e) {
   case "[":
   case "[]":
    return "";

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
  var rest_tb = [ "r128", "r64", "r32", "r16", "r8", "r4", "r2", "r1", "r0", "r00" ];
  function draw_rest(e) {
   var t, n, r, i, s, o, a, c = staff_tb[e.st];
   if (e.dur_orig == e.p_v.meter.wmeasure || e.rep_nb && e.rep_nb >= 0) {
    for (e.dur < 2 * C.BLEN ? e.nflags = -2 : e.dur < 4 * C.BLEN ? e.nflags = -3 : e.nflags = -4, 
    e.dots = 0, t = e.ts_next; t && t.time != e.time + e.dur; ) t = t.ts_next;
    for (i = t ? t.x : realwidth, t = e; !t.seqst; ) t = t.ts_prev;
    i = (i + (t = t.ts_prev).x) / 2, e.a_dd && deco_update(e, i - e.x), e.x = i;
   } else i = e.x, e.notes[0].shhd && (i += e.notes[0].shhd * stv_g.scale);
   if (!e.invis) {
    if (o = c.y, e.rep_nb) return set_sscale(e.st), anno_start(e), "|||||" == c.stafflines ? o += 12 : o += (c.topbar + c.botbar) / 2, 
    e.rep_nb < 0 ? xygl(i, o, "srep") : (xygl(i, o, "mrep"), e.rep_nb > 2 && e.v == cur_sy.top_voice && (set_font("annotation"), 
    gene.curfont.box && (gene.curfont.box = !1, a = !0), xy_str(i, o + c.topbar - 9, e.rep_nb.toString(), "c"), 
    a && (gene.curfont.box = !0))), void anno_stop(e);
    if (set_scale(e), anno_start(e), s = e.y, 7 == (n = 5 - e.nflags) && 12 == s && c.stafflines.length <= 2 && (s -= 6), 
    xygl(i, s + o, e.notes[0].head || rest_tb[n]), n >= 6) {
     switch (r = s / 6, n) {
     default:
      switch (c.stafflines[r + 1]) {
      case "|":
      case "[":
       break;

      default:
       xygl(i, s + 6 + o, "hl1");
      }
      9 == n && (s -= 6, r--);
      break;

     case 7:
      s += 6, r++;

     case 6:
     }
     switch (c.stafflines[r]) {
     case "|":
     case "[":
      break;

     default:
      xygl(i, s + o, "hl1");
     }
    }
    if (e.dots) for (i += 8, s += o + 3, n = 0; n < e.dots; n++) xygl(i, s, "dot"), 
    i += 3.5;
    anno_stop(e);
   }
  }
  function draw_gracenotes(e) {
   var t, n, r, i, s, o, a, c, l, u, f, d, p, h, m, g, y = {};
   for (h = e.extra; h && (h.beam_st && !h.beam_end && self.calculate_beam(y, h) && draw_beams(y), 
   anno_start(h), draw_note(h, !y.s2), h == y.s2 && (y.s2 = null), anno_stop(h), h.next); h = h.next) ;
   if (e.sappo && ((h = e.extra).next ? (i = .5 * (h.next.x - h.x) + 4, s = .5 * (h.ys + h.next.ys) - h.y, 
   h.stem > 0 ? s -= 1 : s += 1) : (i = 9, s = h.stem > 0 ? 5 : -5), out_acciac(x_head(h, g = h.notes[h.stem < 0 ? 0 : h.nhd]), y_head(h, g), i, s, h.stem > 0)), 
   !e.p_v.key.k_bagpipe && cfmt.graceslurs && !e.slur_start && e.next && e.next.type == C.NOTE) {
    if ((m = h).stem >= 0) {
     for (t = 127, h = e.extra; h; h = h.next) h.y < t && (t = h.y, m = h);
     n = m.x, r = m.y - 5, e.extra != m && (n -= 4, r += 1), c = (e = e.next).x - 1, 
     e.stem < 0 && (c -= 4), l = 3 * (e.notes[0].pit - 18) - 5, (d = .4 * (c - n)) > 3 && (d = 3), 
     p = d, u = .2, f = .8, r > l + 7 ? (n = m.x - 1, r += .5, l += 6.5, c = e.x - 5.5, 
     d = .8 * (r - l), p = .2 * (r - l), u = 0) : l > r + 4 && (l = r + 4, n = m.x + 2, 
     r = m.y - 4);
    } else {
     for (t = -127, h = e.extra; h; h = h.next) h.y > t && (t = h.y, m = h);
     n = m.x, r = m.y + 5, e.extra != m && (n -= 4, r -= 1), c = (e = e.next).x - 1, 
     e.stem >= 0 && (c -= 2), l = 3 * (e.notes[e.nhd].pit - 18) + 5, (d = .4 * (n - c)) < -3 && (d = -3), 
     p = d, u = .2, f = .8, r < l - 7 ? (n = m.x - 1, r -= .5, l -= 6.5, c = e.x - 5.5, 
     d = .8 * (r - l), p = .2 * (r - l), u = 0) : l < r - 4 && (l = r - 4, n = m.x + 2, 
     r = m.y + 4);
    }
    i = u * c + (1 - u) * n - n, s = u * l + (1 - u) * r - d - r, o = f * c + (1 - f) * n - n, 
    a = f * l + (1 - f) * r - p - r, anno_start(e, "slur"), xypath(n, r + staff_tb[e.st].y), 
    output += "c" + i.toFixed(1) + " " + (-s).toFixed(1) + " " + o.toFixed(1) + " " + (-a).toFixed(1) + " " + (c - n).toFixed(1) + " " + (-l + r).toFixed(1) + '"/>\n', 
    anno_stop(e, "slur");
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
   return e.x + t.shhd * stv_g.scale;
  }
  function y_head(e, t) {
   return staff_tb[e.st].y + 3 * (t.pit - 18);
  }
  function draw_basic_note(e, t, n, r) {
   var i, s, o, a, c, l, u = !1, f = t.notes[n], d = staff_tb[t.st].y, p = 3 * (f.pit - 18), h = f.shhd * stv_g.scale, m = e + h, g = p + d, y = identify_note(t, f.dur), v = y[0], _ = y[1], A = y[2];
   if (p % 6 == 0 && h != (t.stem > 0 ? t.notes[0].shhd : t.notes[t.nhd].shhd) && (o = 0, 
   p >= 30 ? (o = p) % 6 && (o -= 3) : p <= -6 && (o = p) % 6 && (o += 3), o && xygl(m, o + d, "hl")), 
   f.invis) ; else if (t.grace) s = "ghd", m -= 4.5 * stv_g.scale; else if (f.map && f.map[0]) i = t.head, 
   (s = f.map[0][i]) || (s = f.map[0][f.map[0].length - 1]), (i = s.indexOf("/")) >= 0 && (s = t.stem >= 0 ? s.slice(0, i) : s.slice(i + 1)); else if (t.type == C.CUSTOS) s = "custos"; else switch (v) {
   case C.OVAL:
    s = "HD";
    break;

   case C.OVALBARS:
    if (t.head != C.SQUARE) {
     s = "HDD";
     break;
    }

   case C.SQUARE:
    A > -4 ? s = "breve" : (s = "longa", l = t.stem > 0), tsnext || !t.next || t.next.type != C.BAR || t.next.next || (_ = 0);
    break;

   case C.EMPTY:
    s = "Hd";
    break;

   default:
    s = "hd";
   }
   if (void 0 != f.color ? u = set_color(f.color) : f.map && f.map[2] && (u = set_color(f.map[2])), 
   s && (l && (g_open(m, g, 0, 1, -1), m = g = 0), self.psxygl(m, g, s) || xygl(m, g, s), 
   l && g_close()), _) for (a = e + (7.7 + t.xmx) * stv_g.scale, void 0 == r[n] && (r[n] = 3 * (t.notes[n].pit - 18), 
   0 == (1 & t.notes[n].pit) && (r[n] += 3)), c = r[n] + d; --_ >= 0; ) xygl(a, c, "dot"), 
   a += 3.5;
   f.acc && (e -= f.shac * stv_g.scale, t.grace ? (g_open(e, p + d, 0, .75), draw_acc(0, 0, f.acc, f.micro_n, f.micro_d), 
   g_close()) : draw_acc(e, p + d, f.acc, f.micro_n, f.micro_d)), 0 != u && set_color(u);
  }
  function draw_note(e, t) {
   var n, r, i, s, o, a, c, l, u, f, d = new Array(e.nhd + 1);
   if (e.dots && setdoty(e, d), f = c = x_head(e, u = e.notes[e.stem < 0 ? e.nhd : 0]), 
   i = staff_tb[e.st].y, e.grace) o = "ghl"; else switch (o = "hl", e.head) {
   case C.OVALBARS:
   case C.OVAL:
    f = c - .3, o = "hl1";
    break;

   case C.SQUARE:
    f = c - 2, o = "hl1";
   }
   if (draw_hl(f, 3 * (e.notes[0].pit - 18), 3 * (e.notes[e.nhd].pit - 18), e.st, o), 
   l = y_head(e, u), e.stemless ? e.xstem && (s = ((n = e.ts_prev).stem > 0 ? n.y : n.ys) - e.y, 
   s += staff_tb[n.st].y - i, out_stem(c, l, s /= e.p_v.scale)) : (s = e.ys - e.y, 
   a = e.nflags, e.ntrem && (a -= e.ntrem), !t || a <= 0 ? (e.nflags > 0 && (e.stem >= 0 ? s -= 1 : s += 1), 
   out_stem(c, l, s, e.grace)) : out_stem(c, l, s, e.grace, a, cfmt.straightflags)), 
   t && e.trem1) {
    var p = e.ntrem || 0, h = c;
    s = 3 * (e.notes[e.stem > 0 ? e.nhd : 0].pit - 18), e.head == C.FULL || e.head == C.EMPTY ? (h += (e.grace ? GSTEM_XOFF : 3.5) * e.stem, 
    e.stem > 0 ? s += 6 + 5.4 * p : s -= 11.4) : e.stem > 0 ? s += 5 + 5.4 * p : s -= 10.4, 
    out_trem(h, i + (s /= e.p_v.scale), p);
   }
   for (c = e.x, r = 0; r <= e.nhd; r++) draw_basic_note(c, e, r, d);
  }
  function next_scut(e) {
   var t = e;
   for (e = e.next; e; e = e.next) {
    if (e.rbstop) return e;
    t = e;
   }
   return t;
  }
  function prev_scut(e) {
   for (;e.prev; ) if ((e = e.prev).rbstart) return e;
   for (e = e.p_v.sym; e.type != C.CLEF; ) e = e.ts_prev;
   return e.next && e.next.type == C.KEY && (e = e.next), e.next && e.next.type == C.METER ? e.next : e;
  }
  function slur_direction(e, t) {
   var n, r, i;
   if (e.grace && e.stem > 0) return -1;
   for (n = e; ;n = n.next) {
    if (n.type == C.NOTE) {
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
  function slur_out(e, t, n, r, i, s, o) {
   var a, c, l, u = .3;
   (c = r - t) < 0 && (c = -c), (a = n - e) > 40 && c / a < .7 && (u = .3 + .002 * (a - 40)) > .7 && (u = .7);
   var f = .5 * (e + n), d = .5 * (t + r), p = f + u * (e - f), h = d + u * (t - d) + s;
   p = e + .45 * (p - e), h = t + .45 * (h - t);
   var m = f + u * (n - f), g = d + u * (r - d) + s;
   m = n + .45 * (m - n), g = r + .45 * (g - r), a = .03 * (n - e), c = 2 * i, (l = .2 + .001 * (n - e)) > .6 && (l = .6), 
   l *= i;
   var y = stv_g.v ? stv_g.scale : 1;
   output += o ? '<path class="stroke" stroke-dasharray="5,5" d="M' : '<path d="M', 
   out_sxsy(e, " ", t), output += "c" + ((p - e) / stv_g.scale).toFixed(1) + " " + ((t - h) / y).toFixed(1) + " " + ((m - e) / stv_g.scale).toFixed(1) + " " + ((t - g) / y).toFixed(1) + " " + ((n - e) / stv_g.scale).toFixed(1) + " " + ((t - r) / y).toFixed(1), 
   o || (output += "\n\tv" + (-l).toFixed(1) + "c" + ((m - a - n) / stv_g.scale).toFixed(1) + " " + ((r + l - g - c) / y).toFixed(1) + " " + ((p + a - n) / stv_g.scale).toFixed(1) + " " + ((r + l - h - c) / y).toFixed(1) + " " + ((e - n) / stv_g.scale).toFixed(1) + " " + ((r + l - t) / y).toFixed(1)), 
   output += '"/>\n';
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
   for (var s, o, a, c, l, u, f, d, p, h, m, g, y, v, _, A = e; A.v != t.v; ) A = A.ts_next;
   switch (7 & i) {
   case C.SL_ABOVE:
    _ = 1;
    break;

   case C.SL_BELOW:
    _ = -1;
    break;

   default:
    (_ = slur_multi(A, t)) || (_ = slur_direction(A, t));
   }
   var b = 1, x = A.st, w = !1;
   if (set_dscale(A.st), A != t) for (s = A.next; s.type != C.NOTE && s.type != C.REST || (b++, 
   s.st != x && (w = !0, s.st < x && (x = s.st))), s != t; ) s = s.next;
   if (w && error(2, A, "*** multi-staves slurs not treated yet"), a = e.x, e.notes && e.notes[0].shhd && (a += e.notes[0].shhd), 
   e != t) l = t.x, t.notes && (l += t.notes[0].shhd); else {
    for (s = t.ts_next; s && s.type != C.STAVES; s = s.ts_next) ;
    l = s ? s.x : realwidth;
   }
   if (n >= 0 ? c = 3 * (A.notes[n].pit - 18) + 5 * _ : (c = _ > 0 ? A.ymx + 2 : A.ymn - 2, 
   A.type == C.NOTE && (_ > 0 ? A.stem > 0 && (a += 5, A.beam_end && A.nflags >= -1 && !A.in_tuplet && (A.nflags > 0 ? (a += 2, 
   c = A.ys - 3) : c = A.ys - 6)) : A.stem < 0 && (a -= 1, t.grace ? c = A.y - 8 : A.beam_end && A.nflags >= -1 && (!A.in_tuplet || A.ys < c + 3) && (A.nflags > 0 ? (a += 2, 
   c = A.ys + 3) : c = A.ys + 6)))), r >= 0 ? u = 3 * (t.notes[r].pit - 18) + 5 * _ : (u = _ > 0 ? t.ymx + 2 : t.ymn - 2, 
   t.type == C.NOTE && (_ > 0 ? t.stem > 0 && (l += 1, t.beam_st && t.nflags >= -1 && !t.in_tuplet && (u = t.ys - 6)) : t.stem < 0 && (l -= 5, 
   t.beam_st && t.nflags >= -1 && !t.in_tuplet && (u = t.ys + 6)))), A.type != C.NOTE && (c = u + 1.2 * _, 
   (a = A.x + .5 * A.wr) > l - 12 && (a = l - 12)), t.type != C.NOTE && (u = A.type == C.NOTE ? c + 1.2 * _ : c, 
   A != t && (l = t.x - .3 * t.wl)), b >= 3 && (A.next.type != C.BAR && A.next.x < a + 48 && (_ > 0 ? c < (h = A.next.ymx - 2) && (c = h) : c > (h = A.next.ymn + 2) && (c = h)), 
   t.prev && t.prev.type != C.BAR && t.prev.x > l - 48 && (_ > 0 ? u < (h = t.prev.ymx - 2) && (u = h) : u > (h = t.prev.ymn + 2) && (u = h))), 
   ((p = (u - c) / (l - a)) > SLUR_SLOPE || p < -SLUR_SLOPE) && ((p = p > SLUR_SLOPE ? SLUR_SLOPE : -SLUR_SLOPE) * _ > 0 ? c = u - p * (l - a) : u = c + p * (l - a)), 
   (h = u - c) > 8 ? h = 8 : h < -8 && (h = -8), (m = h) < 0 && (m = -m), y = .5 * m, 
   v = .3 * h, h * _ > 0 ? (l -= y, u -= v) : (a += y, c += v), A.grace && (a = A.x - .5 * GSTEM_XOFF), 
   t.grace && (l = t.x + 1.5 * GSTEM_XOFF), g = 0, p = (u - c) / (l - a), A != t && A.v == t.v) {
    for (d = c - p * a, s = A.next; s != t; s = s.next) if (s.st == x) switch (s.type) {
    case C.NOTE:
    case C.REST:
     _ > 0 ? ((h = 3 * (s.notes[s.nhd].pit - 18) + 6) < s.ymx && (h = s.ymx), (h -= p * s.x + d) > g && (g = h)) : ((h = 3 * (s.notes[0].pit - 18) - 6) > s.ymn && (h = s.ymn), 
     (h -= p * s.x + d) < g && (g = h));
     break;

    case C.GRACE:
     for (o = s.extra; o; o = o.next) _ > 0 ? ((h = 3 * (o.notes[o.nhd].pit - 18) + 6) < o.ymx && (h = o.ymx), 
     (h -= p * o.x + d) > g && (g = h)) : ((h = 3 * (o.notes[0].pit - 18) - 6) > o.ymn && (h = o.ymn), 
     (h -= p * o.x + d) < g && (g = h));
    }
    c += .45 * g, u += .45 * g, g *= .65;
   }
   if (f = b > 3 ? (.08 * (l - a) + 12) * _ : (.03 * (l - a) + 8) * _, _ > 0 ? (f < 3 * g && (f = 3 * g), 
   f > 40 && (f = 40)) : (f > 3 * g && (f = 3 * g), f < -40 && (f = -40)), (h = u - c) < 0 && (h = -h), 
   _ > 0 ? f < .8 * h && (f = .8 * h) : f > -.8 * h && (f = -.8 * h), slur_out(a, c, l, u, _, f *= cfmt.slurheight, i & C.SL_DOTTED), 
   d = c - (p = (u - c) / (y = l - a)) * a + .4 * f, A.v == t.v) for (s = A; s != t; s = s.next) s.st == x && (h = p * s.x + d, 
   s.ymx < h ? s.ymx = h : s.ymn > h && (s.ymn = h), s.next == t ? (y = l, t.sl1 && (y -= 5)) : y = s.next.x, 
   s != A && (a = s.x), y_set(x, _ > 0, a, y -= a, h));
   return (_ > 0 ? C.SL_ABOVE : C.SL_BELOW) | i & C.SL_DOTTED;
  }
  function draw_slurs(e, t) {
   for (var n, r, i, s, o, a, c, l, u = e; ;) {
    if (!u || u == t) {
     if (!i || !(u = i.next) || u == t) break;
     i = null;
    }
    if (u.type != C.GRACE) if (u.type != C.NOTE && u.type != C.REST && u.type != C.SPACE || !u.slur_start && !u.sl1) u = u.next; else {
     r = null, n = u.next;
     for (var f = !1; ;) if (n) if (n.type != C.GRACE) {
      if (n.type == C.BAR && (":" == n.bar_type[0] || "|]" == n.bar_type || "[|" == n.bar_type || n.text && "1" != n.text[0])) {
       r = n;
       break;
      }
      if (n.type == C.NOTE || n.type == C.REST || n.type == C.SPACE) {
       if (n.slur_end || n.sl2) {
        r = n;
        break;
       }
       if (n.slur_start || n.sl1) {
        if (s) {
         for (r = n; r.next; r = r.next) ;
         r.next = s.next, s.next && (s.next.prev = r), r = null;
        }
        draw_slurs(n, t), s && s.next && (s.next.prev.next = null, s.next.prev = s);
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
       if ((u = n) == t) break;
       continue;
      }
     } else r = next_scut(u);
     if (i) {
      for (n = u; n.next; n = n.next) ;
      n.next = i.next, i.next && (i.next.prev = n), i.slur_start = C.SL_AUTO;
     }
     if (s && (s.prev.next = s.extra, s.extra.prev = s.prev, s.slur_start = C.SL_AUTO), 
     u.slur_start) c = 15 & u.slur_start, u.slur_start >>= 4, o = -1; else {
      for (o = 0; o <= u.nhd && !u.notes[o].sl1; o++) ;
      c = 15 & u.notes[o].sl1, u.notes[o].sl1 >>= 4, u.sl1--;
     }
     if (a = -1, l = 0, r.type != C.NOTE && r.type != C.REST && r.type != C.SPACE || !r.slur_end && !r.sl2) r.type == C.BAR && (":" == r.bar_type[0] || "|]" == r.bar_type || "[|" == r.bar_type || r.text && "1" != r.text[0]) || (l = 1); else if (r.slur_end) r.slur_end--; else {
      for (a = 0; a <= r.nhd && !r.notes[a].sl2; a++) ;
      r.notes[a].sl2--, r.sl2--;
     }
     if (c = draw_slur(u, r, o, a, c), l && (r.p_v.slur_start || (r.p_v.slur_start = 0), 
     r.p_v.slur_start <<= 4, r.p_v.slur_start += c), i && i.next && (i.next.prev.next = null, 
     i.next.prev = i), s && (s.prev.next = s, s.extra.prev = null, s = null), !u.slur_start && !u.sl1) {
      if (u == t) break;
      u = u.next;
     }
    } else i = u, u = u.extra;
   }
  }
  function draw_tuplet(e, t) {
   var n, r, i, s, o, a, c, l, u, f, d, p, h, m, g, y, v, _, A, b, x, w;
   for (s = e.st, set_dscale(e.st), n = e; n; n = n.next) if (n.type == C.NOTE || n.type == C.REST) {
    if ((n.slur_start || n.slur_end || n.sl1 || n.sl2) && (a = !0), n.st < s && (s = n.st), 
    0 == t) {
     if (n.tp1 && draw_tuplet(n, 1), n.te0) break;
    } else if (n.te1) break;
   } else if (n.type == C.GRACE) for (i = n.extra; i; i = i.next) (i.slur_start || i.sl1) && (a = !0);
   if (!n) return error(1, e, "No end of tuplet in this music line"), void (0 == t ? e.tp0 = 0 : e.tp1 = 0);
   if (a) {
    if (draw_slurs(e, n), e.slur_start || e.sl1) return;
    for (r = e.next; r != n; r = r.next) if (r.slur_start || r.slur_end || r.sl1 || r.sl2) return;
    if (n.slur_end || n.sl2) return;
   }
   if (0 == t ? (b = e.tp0, e.tp0 = 0, x = e.tq0) : (b = e.tp1, e.tp1 = 0, x = e.tq1), 
   1 != e.tf[0]) {
    if ((A = e.tf[3]) || (A = e.stem > 0 ? C.SL_ABOVE : C.SL_BELOW), e == n) o = !0; else if (1 == e.tf[1]) o = !0, 
    draw_slur(e, n, -1, -1, A); else if (2 == e.tf[0] || e.type != C.NOTE || n.type != C.NOTE) o = !1; else {
     for (o = !0, r = e; ;r = r.next) {
      if (r.type != C.NOTE && r.type != C.REST) {
       if (r.type == C.GRACE || r.type == C.SPACE) continue;
       o = !1;
       break;
      }
      if (r == n) break;
      if (r.beam_end) {
       o = !1;
       break;
      }
     }
     if (o && !e.beam_st && !e.beam_br1 && !e.beam_br2) for (r = e.prev; r; r = r.prev) if (r.type == C.NOTE || r.type == C.REST) {
      r.nflags >= e.nflags && (o = !1);
      break;
     }
     if (o && !n.beam_end) for (r = n.next; r; r = r.next) if (r.type == C.NOTE || r.type == C.REST) {
      !r.beam_br1 && !r.beam_br2 && r.nflags >= n.nflags && (o = !1);
      break;
     }
    }
    if (o) {
     if (1 == e.tf[2]) return;
     for (d = (n.x + e.x) / 2, m = (v = e == n ? 0 : (n.ys - e.ys) / (n.x - e.x)) * d + (_ = e.ys - v * e.x), 
     A == C.SL_ABOVE ? ((p = y_get(s, 1, d - 4, 8)) > m && (_ += p - m), _ += 2) : ((p = y_get(s, 0, d - 4, 8)) < m && (_ += p - m), 
     _ -= 10), r = e; !(r.x >= d); r = r.next) ;
     return e.stem * n.stem > 0 && (e.stem > 0 ? d += 1.5 : d -= 1.5), p = v * d + _, 
     0 == e.tf[2] ? out_bnum(d, p, b) : out_bnum(d, p, b + ":" + x), void (A == C.SL_ABOVE ? (p += 10, 
     r.ymx < p && (r.ymx = p), y_set(s, !0, d - 3, 6, p)) : (r.ymn > p && (r.ymn = p), 
     y_set(s, !1, d - 3, 6, p)));
    }
    if (0 != e.tf[1] && error(2, e, "'what' value of %%tuplets not yet coded"), (A = e.tf[3]) || (A = e.multi >= 0 ? C.SL_ABOVE : C.SL_BELOW), 
    A == C.SL_ABOVE) {
     if (e.st == n.st ? u = f = staff_tb[s].topbar + 4 : (u = e.ymx, f = n.ymx), c = e.x - 4, 
     e.st == s) {
      for (r = e; !r.dur; r = r.next) ;
      (p = y_get(s, 1, r.x - 4, 8)) > u && (u = p), e.stem > 0 && (c += 3);
     }
     if (n.st == s) {
      for (r = n; !r.dur; r = r.prev) ;
      (p = y_get(s, 1, r.x - 4, 8)) > f && (f = p);
     }
     for (n.dur > n.prev.dur ? l = n.next ? n.next.x - n.next.wl - 5 : realwidth - 6 : (l = n.x + 4, 
     w = n.stem >= 0 ? 0 : n.nhd, n.notes[w].shhd > 0 && (l += n.notes[w].shhd), n.st == s && n.stem > 0 && (l += 3.5)), 
     d = .5 * (c + l), p = .5 * (u + f), v = (f - u) / (l - c), (h = 3 * (n.notes[n.nhd].pit - e.notes[e.nhd].pit) / (l - c)) > 0 ? v < 0 ? v = 0 : v > h && (v = h) : v > 0 ? v = 0 : v < h && (v = h), 
     v * v < .1 * .1 && (v = 0), y = 0, r = e; ;r = r.next) if (r.dur && r.st == s) {
      if (m = p + (r.x - d) * v, (g = y_get(s, 1, r.x - 4, 8) + 2) - m > y && (y = g - m), 
      r == n) break;
     } else if (r == n) break;
     for (u = (p += y) + v * (c - d), f = p + v * (l - d), p += 8, r = e; ;r = r.next) if (r.st == s) {
      if (m = p + (r.x - d) * v, r.ymx < m && (r.ymx = m), r == n) break;
      y_set(s, !0, r.x, r.next.x - r.x, m);
     } else if (r == n) break;
    } else {
     if (c = e.x - 7, n.dur > n.prev.dur ? l = n.next ? n.next.x - n.next.wl - 8 : realwidth - 6 : (l = n.x + 2, 
     n.notes[n.nhd].shhd > 0 && (l += n.notes[n.nhd].shhd)), e.stem >= 0 && (c += 2, 
     l += 2), e.st == s) {
      for (r = e; !r.dur; r = r.next) ;
      u = y_get(s, 0, r.x - 4, 8);
     } else u = 0;
     if (n.st == s) {
      for (r = n; !r.dur; r = r.prev) ;
      f = y_get(s, 0, r.x - 4, 8);
     } else f = 0;
     for (d = .5 * (c + l), p = .5 * (u + f), v = (f - u) / (l - c), (h = 3 * (n.notes[0].pit - e.notes[0].pit) / (l - c)) > 0 ? v < 0 ? v = 0 : v > h && (v = h) : v > 0 ? v = 0 : v < h && (v = h), 
     v * v < .1 * .1 && (v = 0), y = 0, r = e; ;r = r.next) if (r.dur && r.st == s) {
      if (m = p + (r.x - d) * v, (g = y_get(s, 0, r.x - 4, 8)) - m < y && (y = g - m), 
      r == n) break;
     } else if (r == n) break;
     for (u = (p += y - 10) + v * (c - d), f = p + v * (l - d), p -= 2, r = e; ;r = r.next) {
      if (r.st == s) {
       if (r == n) break;
       m = p + (r.x - d) * v, r.ymn > m && (r.ymn = m), y_set(s, !1, r.x, r.next.x - r.x, m);
      }
      if (r == n) break;
     }
    }
    1 != e.tf[2] ? (out_tubrn(c, u, l - c, f - u, A == C.SL_ABOVE, 0 == e.tf[2] ? b.toString() : b + ":" + x), 
    m = .5 * (u + f), A == C.SL_ABOVE ? y_set(s, !0, d - 3, 6, m + 9) : y_set(s, !1, d - 3, 6, m)) : out_tubr(c, u + 4, l - c, f - u, A == C.SL_ABOVE);
   }
  }
  function draw_note_ties(e, t, n, r, i) {
   var s, o, a, c, l, u, f, d, p, h, m, g, y, v;
   for (s = 0; s < n.length; s++) {
    switch (a = n[s], l = e.notes[a].pit, c = r[s], u = 2 != i ? t.notes[c].pit : l, 
    o = (7 & e.notes[a].ti1) == C.SL_ABOVE ? 1 : -1, h = e.x, y = e.notes[a].shhd, o > 0 ? a < e.nhd && l + 1 == e.notes[a + 1].pit && e.notes[a + 1].shhd > y && (y = e.notes[a + 1].shhd) : a > 0 && l == e.notes[a - 1].pit + 1 && e.notes[a - 1].shhd > y && (y = e.notes[a - 1].shhd), 
    h += .6 * y, m = t.x, 2 != i && (y = t.notes[c].shhd, o > 0 ? c < t.nhd && u + 1 == t.notes[c + 1].pit && t.notes[c + 1].shhd < y && (y = t.notes[c + 1].shhd) : c > 0 && u == t.notes[c - 1].pit + 1 && t.notes[c - 1].shhd < y && (y = t.notes[c - 1].shhd), 
    m += .6 * y), d = e.st, i) {
    case 0:
     l == u || 1 & l || (l = u);
     break;

    case 3:
     o = -o;

    case 1:
     (h = e.x) > m - 20 && (h = m - 20), l = u, d = t.st;
     break;

    default:
     if (e != t) m -= t.wl, t.type == C.BAR && (m += 5); else {
      for (v = e.time + e.dur, p = e.ts_next; p && !(p.time > v); p = p.ts_next) ;
      m = p ? p.x : realwidth;
     }
     m < h + 16 && (m = h + 16);
    }
    m - h > 20 ? (h += 3.5, m -= 3.5) : (h += 1.5, m -= 1.5), f = 3 * (l - 18), g = (.04 * (m - h) + 10) * o, 
    slur_out(h, staff_tb[d].y + f, m, staff_tb[d].y + f, o, g, e.notes[a].ti1 & C.SL_DOTTED);
   }
  }
  function draw_ties(e, t, n) {
   var r, i, s, o, a, c, l = [], u = [], f = [], d = e.nhd, p = e.time + e.dur;
   if (2 != n) {
    for (i = 0; i <= d; i++) if (e.notes[i].ti1) {
     for (c = -1, a = e.notes[i].opit || e.notes[i].pit, o = t.nhd; o >= 0; o--) {
      switch ((t.notes[o].opit || t.notes[o].pit) - a) {
      case 1:
      case -1:
       e.notes[i].acc != t.notes[o].acc && (c = o);

      default:
       continue;

      case 0:
       c = o;
      }
      break;
     }
     c >= 0 ? (l.push(i), u.push(c)) : f.push(i);
    }
    if (draw_note_ties(e, t, l, u, n), f.length) {
     for (r = e.ts_next; r && r.time < p; ) r = r.ts_next;
     for (;r && r.time == p; ) if (r.type == C.NOTE && r.st == e.st) {
      for (l.length = 0, u.length = 0, i = f.length; --i >= 0; ) for (s = f[i], a = e.notes[s].opit || e.notes[s].pit, 
      o = r.nhd; o >= 0; o--) if ((r.notes[o].opit || r.notes[o].pit) == a) {
       l.push(s), u.push(o), f[i] = f.pop();
       break;
      }
      if (l.length > 0 && (draw_note_ties(e, r, l, u, 1 == n ? 1 : 0), 0 == f.length)) return;
      r = r.ts_next;
     } else r = r.ts_next;
     0 != f.length && error(1, e, "Bad tie");
    }
   } else {
    for (i = 0; i <= d; i++) e.notes[i].ti1 && f.push(i);
    draw_note_ties(e, t || e, f, f, n);
   }
  }
  function tie_comb(e) {
   var t, n, r;
   for (n = e.time + e.dur, r = e.st, t = e.ts_next; t; t = t.ts_next) if (t.st == r) if (t.time != n) {
    if (t.time > n) return e;
   } else if (t.type == C.NOTE) return t;
  }
  function draw_all_ties(e) {
   var t, n, r, i, s, o, a, c, l;
   function u(e, t, n) {
    var r;
    if (e.type == C.GRACE) for (r = e.extra; r; r = r.next) r.ti1 && draw_ties(r, t, n); else draw_ties(e, t, n);
   }
   for (t = e.sym; t; t = t.next) {
    switch (t.type) {
    case C.CLEF:
    case C.KEY:
    case C.METER:
     continue;
    }
    break;
   }
   for (o = e.s_rtie, n = t; n && (!n.dur && n.type != C.GRACE); n = n.next) n.type == C.BAR && n.text && ("1" == n.text[0] ? o = e.s_tie : e.s_tie = o);
   if (n) {
    for (e.s_tie && (e.s_tie.x = t.x + t.wr, t = e.s_tie, e.s_tie = null, t.st = n.st, 
    t.ts_next = n.ts_next, t.time = n.time - t.dur, draw_ties(t, n, 1)); ;) {
     for (t = n; t && !t.ti1; t = t.next) if (o && t.type == C.BAR && t.text) if ("1" != t.text[0]) {
      if ("|" != t.bar_type) {
       for (n = t.next; n && n.type != C.NOTE; n = n.next) ;
       if (!n) {
        t = null;
        break;
       }
       (a = clone(o)).x = t.x, a.next = n, a.st = n.st, a.time = n.time - a.dur, draw_ties(a, n, 1);
      }
     } else o = null;
     if (!t) break;
     for (s = t.time + t.dur, n = t.next; n && !n.dur; n = n.next) if (n.type == C.BAR && n.text) {
      if ("1" != n.text[0]) break;
      o = t;
     }
     if (n) {
      if (n.type != C.NOTE && n.type != C.BAR) {
       error(1, t, "Bad tie");
       continue;
      }
      if (n.time != s) {
       if ((r = tie_comb(t)) == t) {
        error(1, t, "Bad tie");
        continue;
       }
       n = r;
      }
     } else {
      for (n = t.ts_next; n; n = n.ts_next) if (n.st == t.st && !(n.time < s)) {
       if (n.time > s) {
        n = null;
        break;
       }
       if (n.dur) break;
      }
      if (!n) {
       u(t, null, 2), e.s_tie = t;
       break;
      }
     }
     for (r = t.ts_next; r; r = r.ts_next) if (r.st == t.st) {
      if (r.time > s) break;
      r.type != C.CLEF || (i = !0);
     }
     i || t.st != n.st ? (i = !1, l = .4 * (n.x - t.x), c = n.x, n.x -= l, n.x > t.x + 32 && (n.x = t.x + 32), 
     u(t, n, 2), n.x = c, c = t.x, t.x += l, t.x < n.x - 24 && (t.x = n.x - 24), draw_ties(t, n, 3), 
     t.x = c) : u(t, n, n.type == C.NOTE ? 0 : 2);
    }
    e.s_rtie = o;
   }
  }
  function draw_all_slurs(e) {
   var t, n, r = e.sym, i = e.slur_start, s = 0;
   if (r) {
    if (i) for (e.slur_start = 0; 0 != i; ) s <<= 4, s |= 15 & i, i >>= 4;
    for (draw_slurs(r, void 0); r; r = r.next) for (;r.slur_end || r.sl2; ) {
     if (r.slur_end) r.slur_end--, n = -1; else {
      for (n = 0; n <= r.nhd && !r.notes[n].sl2; n++) ;
      r.notes[n].sl2--, r.sl2--;
     }
     i = 15 & s, draw_slur(t = prev_scut(r), r, -1, n, i), t.type == C.BAR && (":" == t.bar_type[0] || "|]" == t.bar_type || "[|" == t.bar_type || t.text && "1" != t.text[0]) || (s >>= 4);
    }
    for (r = e.sym; 0 != s; ) i = 15 & s, s >>= 4, draw_slur(r, t = next_scut(r), -1, -1, i), 
    t.type == C.BAR && (":" == t.bar_type[0] || "|]" == t.bar_type || "[|" == t.bar_type || t.text && "1" != t.text[0]) || (e.slur_start || (e.slur_start = 0), 
    e.slur_start <<= 4, e.slur_start += i);
   }
  }
  function draw_sym_near() {
   var e, t, n, r, i, s, o, a, c, l, u, f, d = output;
   for (output = "", r = 0; r < voice_tb.length; r++) {
    var p = {}, h = !0;
    for (n = (e = voice_tb[r]).sym; n; n = n.next) switch (n.type) {
    case C.GRACE:
     for (s = n.extra; s; s = s.next) s.beam_st && !s.beam_end && self.calculate_beam(p, s);
     break;

    case C.NOTE:
     (n.beam_st && !n.beam_end || h && !n.beam_st) && (h = !1, self.calculate_beam(p, n));
    }
   }
   for (c = 0; c <= nstaff; c++) for ((t = staff_tb[c]).top || (t.top = new Float32Array(YSTEP), 
   t.bot = new Float32Array(YSTEP)), a = 0; a < YSTEP; a++) t.top[a] = 0, t.bot[a] = 24;
   for (set_tie_room(), draw_deco_near(), n = tsfirst; n; n = n.ts_next) if (!n.invis) {
    switch (n.type) {
    case C.GRACE:
     for (s = n.extra; s; s = s.next) y_set(n.st, !0, s.x - 2, 4, s.ymx + 1), y_set(n.st, !1, s.x - 2, 4, s.ymn - 1);
     continue;

    case C.MREST:
     y_set(n.st, !0, n.x + 16, 32, n.ymx + 2);
     continue;

    default:
     y_set(n.st, !0, n.x - n.wl, n.wl + n.wr, n.ymx + 2), y_set(n.st, !1, n.x - n.wl, n.wl + n.wr, n.ymn - 2);
     continue;

    case C.NOTE:
    }
    n.stem > 0 ? (n.stemless ? (l = -5, o = 10) : n.beam_st ? (l = 3, o = n.beam_end ? 4 : 10) : (l = -8, 
    o = n.beam_end ? 11 : 16), y_set(n.st, !0, n.x + l, o, n.ymx), y_set(n.st, !1, n.x - n.wl, n.wl + n.wr, n.ymn)) : (y_set(n.st, !0, n.x - n.wl, n.wl + n.wr, n.ymx), 
    n.stemless ? (l = -5, o = 10) : n.beam_st ? (l = -6, o = n.beam_end ? 4 : 10) : (l = -8, 
    o = n.beam_end ? 5 : 16), l += n.notes[0].shhd, y_set(n.st, !1, n.x + l, o, n.ymn)), 
    n.notes[n.nhd].acc && (i = n.y + 8, n.ymx < i && (n.ymx = i), y_set(n.st, !0, n.x, 0, i)), 
    n.notes[0].acc && (i = n.y, 1 == n.notes[0].acc || 3 == n.notes[0].acc ? i -= 7 : i -= 5, 
    n.ymn > i && (n.ymn = i), y_set(n.st, !1, n.x, 0, i));
   }
   for (r = 0; r < voice_tb.length; r++) if (n = (e = voice_tb[r]).sym) {
    for (set_color(n.color), c = e.st; n; n = n.next) n.tp0 && draw_tuplet(n, 0);
    for (draw_all_slurs(e), n = e.sym; n; n = n.next) n.tp0 && draw_tuplet(n, 0);
   }
   for (c = 0; c <= nstaff; c++) for (u = (t = staff_tb[c]).topbar + 2, f = t.botbar - 2, 
   a = 0; a < YSTEP; a++) u > t.top[a] && (t.top[a] = u), f < t.bot[a] && (t.bot[a] = f);
   for (set_color(), draw_deco_note(), cfmt.measurenb >= 0 && draw_measnb(), draw_deco_staff(), 
   set_dscale(-1), r = 0; r < voice_tb.length; r++) if ((e = voice_tb[r]).have_ly) {
    draw_all_lyrics();
    break;
   }
   set_dscale(-1), output = d;
  }
  function draw_vname(e) {
   var t, n, r, i, s, o, a, c, l = [];
   for (r = cur_sy.nstaff; r >= 0 && !cur_sy.st_print[r]; r--) ;
   if (!(r < 0)) {
    for (i = 0; i < voice_tb.length; i++) if ((t = voice_tb[i]).sym && (r = cur_sy.voices[i].st, 
    cur_sy.st_print[r])) {
     if (t.new_name) {
      c = 2;
      break;
     }
     t.snm && (c = 1);
    }
    if (c) {
     for (i = 0; i < voice_tb.length; i++) if ((t = voice_tb[i]).sym && (r = cur_sy.voices[i].st, 
     cur_sy.st_print[r] && (t.new_name && delete t.new_name, o = 2 == c ? t.nm : t.snm))) {
      if (cur_sy.staves[r].flags & CLOSE_BRACE2) for (;!(cur_sy.staves[r].flags & OPEN_BRACE2); ) r--; else if (cur_sy.staves[r].flags & CLOSE_BRACE) for (;!(cur_sy.staves[r].flags & OPEN_BRACE); ) r--;
      l[r] ? l[r] += "\\n" + o : l[r] = o;
     }
     if (0 != l.length) for (set_font("voice"), e = .5 * -e, r = 0; r < l.length; r++) if (l[r]) {
      if (s = l[r].split("\\n"), a = staff_tb[r].y + .5 * staff_tb[r].topbar * staff_tb[r].staffscale + 9 * (s.length - 1) - .3 * gene.curfont.size, 
      n = r, cur_sy.staves[r].flags & OPEN_BRACE2) for (;!(cur_sy.staves[n].flags & CLOSE_BRACE2); ) n++; else if (cur_sy.staves[r].flags & OPEN_BRACE) for (;!(cur_sy.staves[n].flags & CLOSE_BRACE); ) n++;
      for (n != r && (a -= .5 * (staff_tb[r].y - staff_tb[n].y)), n = 0; n < s.length; n++) xy_str(e, a, o = s[n], "c"), 
      a -= 18;
     }
    }
   }
  }
  function set_staff() {
   var e, t, n, r, i, s, o, a, c, l, u, f;
   for (r = 0; r < voice_tb.length; r++) 1 != (u = voice_tb[r]).scale && (u.scale_str = 'transform="scale(' + u.scale.toFixed(2) + ')"');
   for (t = 0; t <= nstaff && !gene.st_print[t]; t++) ;
   if (i = 0, t > nstaff) f = staff_tb[--t]; else for (f = staff_tb[t], e = 0; e < YSTEP; e++) i < (l = f.top[e]) && (i = l);
   if (i += draw_partempo(t, i), !gene.st_print[t]) return i;
   (i *= f.staffscale) < (s = .5 * cfmt.staffsep + f.topbar * f.staffscale) && (i = s), 
   i < f.ann_top && (i = f.ann_top), f.y = -i, n = t;
   var d = cur_sy.staves[n];
   for (t++; t <= nstaff; t++) if (f = staff_tb[t], gene.st_print[t]) {
    if (s = d.sep || cfmt.sysstaffsep, a = d.maxsep || cfmt.maxsysstaffsep, o = 0, f.staffscale == staff_tb[n].staffscale) {
     for (e = 0; e < YSTEP; e++) o < (l = f.top[e] - staff_tb[n].bot[e]) && (o = l);
     o *= f.staffscale;
    } else for (e = 0; e < YSTEP; e++) o < (l = f.top[e] * f.staffscale - staff_tb[n].bot[e] * staff_tb[n].staffscale) && (o = l);
    o < (s += f.topbar * f.staffscale) && (o = s), o > (a += f.topbar * f.staffscale) && (o = a), 
    i += o, f.y = -i, n = t, d = cur_sy.staves[n];
   }
   for (c = 0, e = 0; e < YSTEP; e++) c > (l = staff_tb[n].bot[e]) && (c = l);
   for (c > f.ann_bot && (c = f.ann_bot), c *= staff_tb[n].staffscale, t = 0; t <= nstaff; t++) o = (f = staff_tb[t]).y, 
   1 != f.staffscale && (f.scale_str = 'transform="translate(0,' + (posy - o).toFixed(1) + ") scale(" + f.staffscale.toFixed(2) + ')"');
   if (0 == c) {
    for (t = nstaff; t >= 0 && !gene.st_print[t]; t--) ;
    if (t < 0) return i;
   }
   return (o = -c) < (s = .5 * cfmt.staffsep) && (o = s), o > (a = .5 * cfmt.maxstaffsep) && (o = a), 
   i + o;
  }
  function draw_systems(e) {
   var t, n, r, i, s, o, a, c, l = [], u = [], f = [], d = [], p = [], h = [], m = [], g = [];
   function y() {
    var e, t, n, r, i = 0;
    for (e = 0; e <= cur_sy.nstaff; e++) l[e] < 0 ? u[e] = f[e] = 0 : (t = staff_tb[e].staffscale, 
    n = staff_tb[e].topbar * t, r = staff_tb[e].botbar * t, 0 == i && (i = staff_tb[e].y + n), 
    u[e] = staff_tb[e].y + r, f[e] = i - u[e], i = cur_sy.staves[e].flags & STOP_BAR ? 0 : u[e]);
   }
   function v(e, t, n) {
    var r, i, s, o, a, c = 0, l = "", u = cur_sy.staves[e].stafflines, f = u.length;
    if (/[\[|]/.test(u)) if (r = n - t, set_sscale(e), i = r / stv_g.scale, cache && cache.st_l == u && cache.st_ws == (0 | i)) xygl(t, staff_tb[e].y, "stdef" + cfmt.fullsvg); else {
     for (s = 0; s < f; s++, c -= 6) if ("." != u[s]) {
      for (o = 0; s < f; s++, c -= 6, o -= 6) {
       switch (u[s]) {
       case ".":
       case "-":
        continue;

       case a:
        l += "m-" + i.toFixed(1) + " " + o + "h" + i.toFixed(1), o = 0;
        continue;
       }
       void 0 != a && (l += '"/>\n'), l += '<path class="' + ("[" == (a = u[s]) ? "slthW" : "slW") + '" d="m0 ' + c + "h" + i.toFixed(1), 
       o = 0;
      }
      l += '"/>';
     }
     if (c = staff_tb[e].y, !cache && r > get_lwidth() - 10) return cache = {
      st_l: u,
      st_ws: 0 | i
     }, s = "stdef" + cfmt.fullsvg, glyphs[s] = l.replace("path", 'path id="' + s + '"'), 
     void xygl(t, c, s);
     out_XYAB('<g transform="translate(X, Y)">\n' + l + "\n</g>\n", t, c);
    }
   }
   function _(e, t, n) {
    var r, i, s, o = e.bar_type, a = e.st, c = staff_tb[a], l = e.x;
    if (0 != a && e.ts_prev && e.ts_prev.type != C.BAR && (n = c.topbar * c.staffscale), 
    e.ymx = e.ymn + n, set_sscale(-1), anno_start(e), s = c.y + 12, "|||||" != c.stafflines && (s += (c.topbar + c.botbar) / 2 - 12), 
    e.bar_mrep) if (set_sscale(a), 1 == e.bar_mrep) {
     for (i = e.prev; i.type != C.REST; i = i.prev) ;
     m.push([ i.x, s, a, "mrep" ]);
    } else m.push([ l, s, a, "mrep2" ]), e.v == cur_sy.top_voice && g.push([ l, s + c.topbar - 9, a, e.bar_mrep.toString() ]);
    for ("||:" == o && (o = "[|:"), r = o.length; --r >= 0; ) {
     switch (o[r]) {
     case "|":
      e.bar_dotted ? p.push(new Float32Array([ l, t, n, c.staffscale ])) : d.push(new Float32Array([ l, t, n ]));
      break;

     default:
      l -= 3, h.push(new Float32Array([ l + 1.5, t, n ]));
      break;

     case ":":
      l -= 2, m.push([ l + 1, s - 12, a, "rdots" ]);
     }
     l -= 3;
    }
    set_sscale(-1), anno_stop(e);
   }
   for (draw_vname(e), r = 0; r <= nstaff; r++) l[r] = cur_sy.st_print[r] ? 0 : -1;
   for (y(), draw_lstaff(0), t = tsfirst; t; t = t.ts_next) {
    if (c && t.time != c) {
     for (c = 0, r = 0; r <= nstaff; r++) cur_sy.st_print[r] || (l[r] = -1);
     y();
    }
    switch (t.type) {
    case C.STAVES:
     if (!(a = t.ts_prev.type == C.BAR ? t.ts_prev.x : 0)) {
      for (n = t.ts_next; n && n.time == t.time; n = n.ts_next) {
       switch (n.type) {
       case C.BAR:
       case C.CLEF:
       case C.KEY:
       case C.METER:
        a = n.x;
        continue;
       }
       break;
      }
      n || (a = realwidth);
     }
     for (o = t.sy, r = 0; r <= nstaff; r++) (i = l[r]) < 0 ? o.st_print[r] && (l[r] = a || t.x - t.wl - 2) : o.st_print[r] && o.staves[r].stafflines == cur_sy.staves[r].stafflines || (a ? (s = a, 
     c = t.time) : (s = t.x - t.wl - 2, l[r] = -1), v(r, i, s), o.st_print[r] && (l[r] = s));
     cur_sy = o, y();
     continue;

    case C.BAR:
     if (t.second || t.invis || !t.bar_type) break;
     r = t.st, _(t, u[r], f[r]);
     break;

    case C.STBRK:
     if (0 == cur_sy.voices[t.v].range && t.xmx > 14) {
      for (var A = 0, b = 0; b < voice_tb.length; b++) cur_sy.voices[b].range > 0 && A++;
      for (n = t.ts_next; n && n.type == C.STBRK; n = n.ts_next) A--;
      0 == A && draw_lstaff(t.x);
     }
     if (!(n = t.prev)) break;
     if (s = n.x, n.type != C.BAR && (s += n.wr), r = t.st, (i = l[r]) >= 0) {
      if (i >= s) continue;
      v(r, i, s);
     }
     l[r] = t.x;
    }
   }
   for (r = 0; r <= nstaff; r++) c && !cur_sy.st_print[r] || (i = l[r]) < 0 || i >= realwidth || v(r, i, realwidth);
   !function() {
    var e, t, n, r, i = d.length;
    if (set_sscale(-1), i) {
     for (output += '<path class="bW" d="', e = 0; e < i; e++) out_XYAB("MX Yv-F", (t = d[e])[0], t[1], t[2]);
     output += '"/>\n';
    }
    if (i = p.length) for (e = 0; e < i; e++) out_XYAB('<path class="bW" stroke-dasharray="' + (n = (5 * (t = p[e])[3]).toFixed(1)) + "," + n + '" d="MX Yv-F"/>\n', t[0], t[1], t[2]);
    if (i = h.length) {
     for (output += '<path class="bthW" d="', e = 0; e < i; e++) out_XYAB("MX Yv-F", (t = h[e])[0], t[1], t[2]);
     output += '"/>\n';
    }
    if (i = m.length) for (e = 0; e < i; e++) set_sscale((t = m[e])[2]), xygl(t[0], t[1], t[3]);
    if (i = g.length) {
     for (set_font("annotation"), gene.curfont.box && (gene.curfont.box = !1, r = !0), 
     e = 0; e < i; e++) set_sscale((t = g[e])[2]), xy_str(t[0], t[1], t[3], "c");
     r && (gene.curfont.box = !0);
    }
   }(), set_sscale(-1);
  }
  function draw_symbols(e) {
   var t, n, r, i, s = {};
   for (t = e.sym; t; t = t.next) {
    if (t.invis) switch (t.type) {
    case C.KEY:
     e.key = t;

    default:
     continue;

    case C.NOTE:
    }
    switch (i = t.st, n = t.x, set_color(t.color), t.type) {
    case C.NOTE:
     set_scale(t), t.beam_st && !t.beam_end && self.calculate_beam(s, t) && draw_beams(s), 
     t.invis || (anno_start(t), draw_note(t, !s.s2), anno_stop(t)), t == s.s2 && (s.s2 = null);
     break;

    case C.REST:
     if (t.invis || !staff_tb[i].topbar) break;
     draw_rest(t);
     break;

    case C.BAR:
     break;

    case C.CLEF:
     if (t.time >= staff_tb[i].clef.time && (staff_tb[i].clef = t), t.second || t.invis || !staff_tb[i].topbar) break;
     set_color(), set_sscale(i), anno_start(t), r = staff_tb[i].y, t.clef_name ? xygl(n, r + t.y, t.clef_name) : t.clef_small ? xygl(n, r + t.y, "s" + t.clef_type + "clef") : xygl(n, r + t.y, t.clef_type + "clef"), 
     t.clef_octave && (t.clef_octave > 0 ? (r += t.ymx - 10, t.clef_small && (r -= 1)) : (r += t.ymn + 6, 
     t.clef_small && (r += 1)), xygl(n - 2, r, "oct")), anno_stop(t);
     break;

    case C.METER:
     if (e.meter = t, t.second || !staff_tb[t.st].topbar) break;
     set_color(), set_sscale(t.st), anno_start(t), draw_meter(n, t), anno_stop(t);
     break;

    case C.KEY:
     if (e.key = t, t.second || t.invis || !staff_tb[t.st].topbar) break;
     set_color(), set_sscale(t.st), anno_start(t), draw_keysig(n, t), anno_stop(t);
     break;

    case C.MREST:
     set_scale(t), n += 32, anno_start(t), xygl(n, staff_tb[t.st].y + 12, "mrest"), out_XYAB('<text style="font:bold 15px serif"\n x ="X" y="Y" text-anchor="middle">A</text>\n', n, staff_tb[t.st].y + 28, t.nmes), 
     anno_stop(t);
     break;

    case C.GRACE:
     set_scale(t), draw_gracenotes(t);
     break;

    case C.SPACE:
    case C.STBRK:
     break;

    case C.CUSTOS:
     set_scale(t), draw_note(t, 0);
     break;

    case C.BLOCK:
    case C.PART:
    case C.REMARK:
    case C.STAVES:
    case C.TEMPO:
     break;

    default:
     error(2, t, "draw_symbols - Cannot draw symbol " + t.type);
    }
   }
   set_scale(e.sym), draw_all_ties(e), set_color();
  }
  function draw_all_sym() {
   var e, t, n = voice_tb.length;
   for (t = 0; t < n; t++) (e = voice_tb[t]).sym && void 0 != e.sym.x && self.draw_symbols(e);
   draw_all_deco(), set_sscale(-1);
  }
  function set_tie_dir(e) {
   var t, n, r, i, s, o, a;
   for (t = e; t; t = t.next) if (t.ti1) if (0 == t.multi) {
    for (s = r = 0, o = 128, n = 0; n <= t.nhd; n++) t.notes[n].ti1 && (r++, o < 128 && t.notes[n].pit <= o + 1 && s++, 
    o = t.notes[n].pit);
    if (r <= 1) {
     for (i = t.stem < 0 ? C.SL_ABOVE : C.SL_BELOW, n = 0; n <= t.nhd; n++) if (a = t.notes[n].ti1) {
      (7 & a) == C.SL_AUTO && (t.notes[n].ti1 = a & C.SL_DOTTED | i);
      break;
     }
    } else if (0 != s) {
     for (o = 128, n = 0; n <= t.nhd; n++) if (t.notes[n].ti1) {
      if (o < 128 && t.notes[n].pit <= o + 1) {
       r = n;
       break;
      }
      o = t.notes[n].pit;
     }
     for (i = C.SL_BELOW, n = 0; n <= t.nhd; n++) 0 != (a = t.notes[n].ti1) && (r == n && (i = C.SL_ABOVE), 
     (7 & a) == C.SL_AUTO && (t.notes[n].ti1 = a & C.SL_DOTTED | i));
    } else {
     if (1 & r) {
      for (r = (r - 1) / 2, i = C.SL_BELOW, n = 0; n <= t.nhd; n++) 0 != (a = t.notes[n].ti1) && (0 == r && t.notes[n].pit >= 22 && (i = C.SL_ABOVE), 
      (7 & a) == C.SL_AUTO && (t.notes[n].ti1 = a & C.SL_DOTTED | i), 0 == r-- && (i = C.SL_ABOVE));
      continue;
     }
     for (r /= 2, i = C.SL_BELOW, n = 0; n <= t.nhd; n++) 0 != (a = t.notes[n].ti1) && ((7 & a) == C.SL_AUTO && (t.notes[n].ti1 = a & C.SL_DOTTED | i), 
     0 == --r && (i = C.SL_ABOVE));
    }
   } else for (i = t.multi > 0 ? C.SL_ABOVE : C.SL_BELOW, n = 0; n <= t.nhd; n++) (7 & (a = t.notes[n].ti1)) == C.SL_AUTO && (t.notes[n].ti1 = a & C.SL_DOTTED | i);
  }
  function set_tie_room() {
   var e, t, n, r, i, s;
   for (n = 0; n < voice_tb.length; n++) if ((e = voice_tb[n].sym) && (e = e.next)) for (set_tie_dir(e); e; e = e.next) if (e.ti1) {
    if (e.notes[0].pit < 20 && (7 & e.notes[0].ti1) == C.SL_BELOW) ; else if (!(e.notes[e.nhd].pit > 24 && (7 & e.notes[e.nhd].ti1) == C.SL_ABOVE)) continue;
    for (t = e.next; t && t.type != C.NOTE; ) t = t.next;
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
  var musicfont = 'url("data:application/octet-stream;base64,AAEAAAAOAIAAAwBgRkZUTYIq6cIAAFMEAAAAHEdERUYAFQAUAABS6AAAABxPUy8yWLxbCQAAAWgAAABWY21hcM7xzSEAAAPMAAADKmN2dCAAIgKIAAAG+AAAAARnYXNw//8AAwAAUuAAAAAIZ2x5ZvUwoLYAAAgEAABCqGhlYWQNXJHdAAAA7AAAADZoaGVhCWn/CwAAASQAAAAkaG10eM2n+wQAAAHAAAACCmxvY2HVL+UYAAAG/AAAAQhtYXhwAMoBPQAAAUgAAAAgbmFtZWQ9AacAAEqsAAADEnBvc3TQFqwaAABNwAAABR8AAQAAAAEAADE4fZ1fDzz1AAsEAAAAAADRlyIXAAAAANgjLVL/OPzvBUsEiAAAAAgAAgAAAAAAAAABAAAEiPzvAFwEJf84/XQFSwABAAAAAAAAAAAAAAAAAAAAggABAAAAgwEMAAUAAAAAAAIAAAABAAEAAABAAC4AAAAAAAEBlwGQAAUACAKZAswAAACPApkCzAAAAesAMwEJAAACAAUDAAAAAAAAAAAAARAAAAAAAAAAAAAAAFBmRWQAQAAA6qQDM/8zAFwEiAMRAAAAAQAAAAAAAAF2ACIAAAAAAVUAAAGQAAACWAAAAFcAAAFK/7ACE/+wANL/sAAjAAAAIwAAACMAAABkAAAEIwAABCUAAAHg/9wDXgB6AwsAAALSAAACv/+6AdYAAAMLAAADDgAAAyf/yADIAAABrgAAASIAAAGQAAABfAAAAZAAAAGQAAABgQAAAZAAAAGQAAABgQAAAZkACQGYAAkB9AAAAQQAFAEEAAoCawAkAhIAAAHCAAABSQAAAUAAAAFK//4BLAAAAjAAAAFKAAABSgAAAGQAAAE7AAABOwAAATsAAAE7AAABOwAAATsAAAE7AAABOwAAATsAAAE7AAABDQAAAMgAAAD/AAABCwAUAW4AAAENADIBbv/1AKkAAAE6AAABQP/9AFAAAAFAAAABQAAAARgAAAJYAAAAtgAAAIIAAACCAAABLAAAASwAAADuAAAA/wAAAUkAAAGPAAAB2AAAAdgAAANTAAACM//wAyD/4QIz/7QBuP/bAV//fgIzAAACM//kAr//tAIz/7QCv/+0Ayv/2wFf/9sCaf9+AV//fgJp/34BXwAAAf0ABQG1AAABtQAAAkQADQJEAA0BGAAAATYAAAEs//8BLAAAAPoAAADIAAABGP84APoAAADIAAAEDQAAAhwADAH0AAAB9AAAAfQAAAH0AAAB9AAAAfQAAAB4AAAALQAAAhwAAAD6AAD/6gAAAAAAAwAAAAMAAAAcAAEAAAAAAiQAAwABAAAAHAAEAggAAAB+AEAABQA+AAAAIOAA4CTgMOA54EPgSOBQ4FzgYuBp4H3gjOCV4KTgqeCz4QHhueG74efiSeJk4oPkoOSi5KTkqOSs5MDkzuTq5O7lAeUi5SXlLeUx5TnlZ+Vp5W3lguXQ5eLmEOYS5hTmGOYk5jDmUOZV6RLpFekY6SDpJeld6gLqpP//AAAAAAAg4ADgIuAw4DjgQ+BF4FDgXOBi4GngeuCA4JTgoOCp4LPhAeG54bvh5+JA4mDigOSg5KLkpOSo5KzkwOTO5OHk7uUA5SDlJOUp5S/lOeVm5WnlbOWC5dDl4uYQ5hLmFOYY5iTmMOZQ5lXpEOkU6RjpIOkl6V3qAuqk//8AA//kIAUf5B/ZH9IfyR/IH8Efth+xH6sfmx+ZH5IfiB+EH3sfLh53HnYeSx3zHd0dwhumG6UbpBuhG54bixt+G2wbaRtYGzobORs2GzUbLhsCGwEa/xrrGp4ajRpgGl8aXhpbGlAaRRomGiIXaBdnF2UXXhdaFyMWfxXeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGAAADAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgKIAAAAKgAqACoANgA+AG4AfACKAJgApACwAL4A3AFQAawCHAJeAvADggPkA/gElAUmBX4FvAXeBfIGRAaUBrQG+gc6B3QHwAgACEYIoAi0CNoJAAkyCU4JcAmcCbIJzAoCChAKHAooCjoKVApuCqIK1gsqC3QL1AwyDKgNHA1CDVwNjA22Dg4ONA6ODq4O7A8UDygPNA9CD1IPeg+gD6wPuA/ED9AP8hAYEE4QnBD8EXARhhGsEdoSPhK2ExQTXBO4FRIWHhbYF5gYaBkEGeIa/hwAHEIchhzQHOodDh0iHTYdZh12HYgdpB26Hd4eDh7wH6wf1B/yICQgYiCUINYg6CD2IRIhLCFUAAIAIgAAATICqgADAAcALrEBAC88sgcEAO0ysQYF3DyyAwIA7TIAsQMALzyyBQQA7TKyBwYB/DyyAQIA7TIzESERJzMRIyIBEO7MzAKq/VYiAmYAAAEAAAAAAZEBkAADAAAxESERAZEBkP5wAAEAAAAAAAAAAAAAAAAxAAABAAAAAABXBAMAIAAAETU2NTQnJjU0NwYVFBcWFRQHFhUUBwYVFBcmNTQ3NjU0NSMSVz8VJU1NJRU/VxIjAgMCGEM2YDk0ZjoySyI5YU1hGBhmTGA5JUoyOmY0OWA2SAAB/7D/7AGaABQAAwAAJyEVIVAB6v4WFCgAAAAAAf+w/+wCYgAUAAMAACchFSFQArL9ThQoAAAAAAH/sP/sASIAFAADAAAnIRUhUAFy/o4UKAAAAAABAAAAAAAjA+gAAwAAETMRIyMjA+j8GAABAAAB9AAjA+gAAwAAETMRIyMjA+j+DAABAAAC+AAjBFYAAwAAETcRIyMjBEwK/qIAAAAAAgAAAUAAZAKeAAcADwAAEiImNDYyFhQCIiY0NjIWFEcqHR0qHR0qHR0qHQI6HSodHSr+6R0qHR0qAAAABQAAAAAEJAGuAC8ANwA/AEcAUwAAITUzHgEzMjY1NCcuBDU0NjMyFhc3MxcjLgEjIgYVFB4DFx4BFRQGIyInByAiJjQ2MhYUBCImNDYyFhQBETMyNjQmIwM1MxEjNTMyFhUUIwJOHhVPMik7lBkaKhYRWT0kJxkeHgceD0owHzkQIhkyCE5NW09FLiMBmyodHSod/eoqHR0qHf6JKDxGRjzcRkbccYn6oDxLICEtKAcIFBQjFUNNCw4ZmzpIKBsPFw8JCwIVNzM6TiAgHSodHSodHSodHSoBaf6YYaZh/noeAWgeZ2vSAAUAAAAABCQBrgAaACIAKgAyAD4AACEiJjU0NjMyFhc3MxcHJiMiBhQWMzI2NxcOATIiJjQ2MhYUBCImNDYyFhQBETMyNjQmIwM1MxEjNTMyFhUUIwMCZ3WCWiUpGx4eCCEkXjg2Njg2TREjFFmxKh0dKh396iodHSod/okoPEZGPNxGRtxxifprZ2V3DBIepgSMbZhtST4KSlEdKh0dKh0dKh0dKgFp/phhpmH+eh4BaB5na9IAAAAD/9wAAgHeArMABwAPAE0AAAAiJjQ2MhYUBCImNDYyFhQXNDYzMhYVFAcWMzI2NTQvAQMnEy4BNTQ+ATc2MzIWFRQGIyImNTQ3JiMiBhUUHwETFwMeARUUDgEHBiMiJgGeIBgYIBj+fiAYGCAYWxsUEx4sFykmNiZ7zyvRWkgcExQmMzA4GxQTHiwXKSY2JnrUK9VaSBwTFCYzMDgBUhggGBggVBggGBgg0xIcGhEdDhctJi0mZf7eIAElR3E4Fi0RERM4IRIcGhEdDhctJi0mZQEmH/7XR3I4Fi0RERM4AAUAev80A14CVAAXABsAHwAjACcAAAEzFR4BFzMVIw4BBxUjNS4BJyM1Mz4BNxEjFhc3FTY3JzMmJwc1BgcB2ChVeAeKigd4VShVeAeKigd4VXAFayhrBXBwBWsoawUCVIkIi2AoYIsIiYkIi2AoYokI/uW6DsjIDrooug7IyQ67AAAAAAQAAP1vAqcEiAALAEgAUgBnAAABBhUUFz4BNTQnDgETFxQVFAYjIiY1NDYzMhYUBgcWMzI2NTQ1JwYjIi4CNTQ3PgY/ASY1NDY3FhUUBgcXNjMyFhUUJzQmIyIGIxM+AScOARUUFhcuATU0NycOAQceATMyNwFsBwVIdTY5QksXT01SX0AyL0E/Ly0YLkEXFBVJhmc9Og0kIC4dMRIXFg1sSWJceRQQD3GITmJQAgcCIVtB4jZGJx09P6YRj2wBAqB6EBADUzYuF2YxlUhyDQde+2zsAQJMXFNBLUg7WDcBGT1FAgHpAjNbh0+FZhcwJS0aJw4REJZmjKEHOuWIqV/PAp1yzro9ZwH+nRJd8gtGMSBCEg5FR6kuvXKXZ42jAgAAAAACAAD9/ALSAgAAZABoAAABMjY1NCcmIyIHDgIHJicmJxEjETMRNjc2Nx4DFxYzMjY1NCcmIyIHFhcUFhUUBisBJjU0NzY3NjMyFxYXFRQGBwYjIicHFzYzMhYXFh0BBgcGIyImNTQ3MzIWFRQGFQYHFgEzESMB3j5KDRpJRjwCBgoEIhoeLhwcLh4aIgYUDBkPJyUxPRIkUi8xMg0CMyEFRAUaVScjXlU3CFpIHy00PyIiPzRCZh4oCDdWXUxyRAUhMwIPMDX+TXt7/iB4Si0tbEkFDhsKYicrH/4EBAD+ER8rJ2ILKhcdCRt7QjE2YhoQKAMNBB4rGTIUC0QZDU80UxJObxwNF0tKFz4sOUMSUzRQTjwyGSseBA4EJhAcA978AAAAA/+6/aUCwwD/ACsANwBDAAA3NDYzMhYXFhUUBgcOAQc+ATc+ATc2NTQmJy4BIyIGBz4BMzIWFRQHBiMiJgUiJjU0NjMyFhUUBiciJjU0NjMyFhUUBhOLZ1VrKy9CVWjVkXevSDEsEw4RHR80MD9iERcjHC49JyExM0UCghYdGhQVHhoaFxscFRQcGx1igDQ5PnJ/sE9iVQggVUgxVFA7akdQIyQdTE0dFEEvMiAeUYocFxYcHRUWHfIeGRUaGxQZHgAAAAIAAP8GAXIA+gADAAcAADczEyMDMxMj3JQCltyUApb6/gwB9P4MAAAEAAD+CgIfA6oACQAgAGIAbQAAJRYXPgE1NCYjIgMCJw4BFRQXLgE1NDY3JicOAQceATMyFx4BHwEdARQjIiY1NDYzMhYVFAYHFjMyNjU0LwEGIyImNTQ3PgE3PgI3JjU0NjceARUUBgceARc2MzIXFhUUBwYDBhUUFz4BNTQnBgFJEwZNR1ZCDg0YASw5HyAqTDsFCXFVAQVtggMiAwYCAno2UzMoJTUxJxUiIywBDQkVjZkuDkweBSMnEg5ZQC8ZSWECCAQSCFw5MmM2ZAMGN14pX3XEWxJPMzZW/uABCxAJNCcpJhJBKThOED5aWnlTcX4aIEAXFxsHf0gxJDM3JCIoAQwzNQ8JjQGSimpRHFAYBCAhDcIHbn8TM2JbbYdMEW4kAkM2YncwGwNWHiI5JCV7M0YmJgACAAD+YwJCAZoAYwBnAAABMjY1NCcmIyIHDgEHJicmJxEjETMRNjc2Nx4DFxYzMjY1NCcmIyIHFhcUFhUUBisBJjU0NzY3NjMyFxYXFRQGBwYjIicHFzYzMhYXFh0BBgcGIyImNTQ3MzIWFRQGFQYHFgEzESMBfjI7ChU6ODACDAQdExglFhYlGBMdBBEKEwwgHScxDhxDJScoCgIqGgQ2BBVEIxhJRi0GSDoYJSsxGxs0KDVSGCAGLUZJPVs2BBoqAgwmK/6jYmL+gGA7JCRXOwUdC1IcIhn+agMz/nQZIhxSCCISFwgWYjUrKE4VDSACCwMYIhQoEAk1FQtAK0EOPloWChI8OxMyIy41D0ErQD8wKBQjGAMLAx8NFgMY/M0AAAAAA//I/h4CNgDMACYALwA7AAA3NDYzMhcWFRQHDgEHNjc2NzY1NCcuASMiBgc+ATMyFhUUBwYjIiYFIiY0NjIWFAYnIiY1NDYzMhYVFAYPcFKCPCN4Q8ZpwF5HHgktGC0gMFIKEhYWJTkgGSUsOQICEhcUIhgVFRIWFRIRFhUhTV5XM1rGbDtXBjNkSowvKWYzGhRCNhcNPCYoGhhTdRckFhciGMIYFBEUFRATGQAAAAADAAAAAADIAPAACQATACkAADcGFRQWMzI2NTQnIgYVFBc2NTQmByImNTQ2Ny4BNTQ2MzIWFRQHFhUUBlAjGxARFAIOEyAjEzAlNSMiEQwoHiQ2PCg0dxQdFB4bERaGEQ4XGQshDxTcKB4XGgsPExAaIiAcIxAgGyAmAAAAAgAA/wYBrgD6AAsAFAAAMxQWMzI2NTQmIyIGBzQ2MhYUBiImiiojIisnJiUoin20fX20fWJ4eWFldXZhZ5CR0pGSAAABAAD/BgEiAPoACQAAMTczERcVIzU3EWR9QfBB+v4+HhQUHgEsAAAAAQAA/wYBjwD6ADwAADcyFRQHDgMHNjMyFjMyNz4CMw4CBwYHBiMiJiMiBiMiNTQnPgU1NCciBzIWFRQGIyI1ND4Bx8gFDTZAbzYTIBtkHBgeBRAMAQEFBQEHEBopGnQVH1YCBwECLD5HPChTThocKTceTDxY+n4aDiEuHUQtDCMOAw0LBRYWAykOGCcmEAECIUU4PDI4GGIBNSUeHylnKDkZAAABAAD/BgF1APoAOQAANzIWFRQGIyImNTQ3NjMyFxYVFAYHHgEVFAcGIyImJyY0NjMyFhUUBiMWMzI2NTQmJyY0Nz4BNCYjImYbIichGzIfM1lGJkRGPT5RSyRNJ1cYIzIgIiolGww/JCtILhYWL0spJDyqHBcbIysjLxoqEyJILkQLC0UtQycTFhQdTC4hGxkeKTEnJjoIBCIECTdQMAAAAQAA/wYBkAD6ABEAAAUXIzc1IzU2NTMBMz8BETMVIwFFMsgy4ZOj/vuwAWNLS9EpKTEo8oD+jpaR/tkoAAAAAAEAAP8HAX4A+gAvAAAXNjMyFhUUBiMWMzI3PgE1NCcmIyIHEyEOASsBBzYzMhceARUUBw4CIyInLgE1NBIcIRsqIBwaJDEcEwkeHChOSAoBYgs1JdUGOUJTMSErQxZAKyU8KxAeXyAgFxwgIR4UHyA5HBo1ASIkOnkeHxVBJU8vEBACFAkyEiMAAAAAAgAA/wYBgQD6AAkALAAAFzI2NTQmIyIHFhMWFRQGIyImNTQ2MyYjIgYVPgIzMhYVFAYjIiYnPgEzMhbIKS0qKCwwB90bIxgeIhsQFjc1LxUYLR5MT3FIYWYBAWxbMD/SRSwiMCWeAZ8aJhkoHhsMHiN4XwsKCUA2RFmCeGmREgABAAD/BgGQAPsAKAAANyIOAwc3PggzMhYzMjY3DgQVIzY3Njc2NwYjIiZhFBoUCREFCgEMAgsFCwkNEAkvdSMaOxEbRRoeCIIBCBFoHi0RHiVgoQUOCRsGdAELAgkBBgEDASYXDkOnQVxCK0UbNocnOQooAAMAAP8GAYQA+gAOABwANAAAFw4BFRQWMzI2NTQuAzc+ATU0JiIGFRQeAwcuATU0NjcyFhUUBgceARUUBiMiJjU0Npo2LFgsKj8PIB0xPjMjRFIzChwSMXAxKWZKS2UqMDoydU1MdjkqGSQbHTApHw4XEg0TWhoiHB0wKCAPFxMKFT8YPDUzTQFGMic0Fxo6NTdKSDAkNQAAAgAA/wYBgQD6AAkALAAANyIGFRQWMzI3JgMmNTQ2MzIWFRQGIxYzMjY1DgIjIiY1NDYzMhYXDgEjIia5KS0qKCwwB90bIxgeIhsQFjc1LxUYLR5MT3FIYWYBAWxbMD/SRSwiMCWe/mEaJhkoHhsMHiN4XwsKCUA2RFmCeGmREgABAAn/CgGZAPkAMAAAJTAXNjU0JiMOARUUFxYzMjc2NxQeARUOAQciJyYnNCY1NDcyFhcWFRQGIyImNT4BMwEvEgQ8HzJBJyEwKygcKgkIG1VWTzs7BAHbJEARIiQcICkCIBqkAwUIFCICZWuOMyoiGFgBBAMBVVABOTlmAisC5gIeFCckJTkuHBYmAAIACf6iAZkBXgA4AD8AACUwFzY1NCYjIgcRFjMyNzY3FB4BFQ4BByMVIzUmJyYnNCY1NDc1MxUyNjMyFhcWFRQGIyImNT4BMwMRBhUUFxYBLxIEPB8DEAwMKygcKgkIG1FVASM9LjsEAasjAwcDJEARIiQcICkCIBp6PScKpAMFCBQiBP5LBCIYWAEEAwFUUQFoawktOWYCKwLLGWlmAR4UJyQlOS4cFib+lwGWLpGOMw0AAAEAAP8GAfQA+gALAAA1MzUzFTMVIxUjNSPXRtfXRtcj19dG19cAAAABABT+BgDjAgAAEwAAExYHBicmAjU0Ejc2FxYHBgIVFBLcBw0JBUlra0kJCwYGPEZH/hYIBQMGVwEgfXwBIlYLBwYISf7niIb+5QAAAQAK/gIA3AH9ABMAABM2EjU0AicmNzYXFhIVFAIHBicmFDtHRjwJDAoHSWtrSQgLBv4WSQEbhogBGUkLBAQJVv7efH3+4FcJCQQAAAQAJP9WAkwAqgALAA8AEwAeAAAFNCYjIgYVFBYzMjY3MxEjATMRIyQUBiMiJjU0NjMyAahUPCA0Vz0hL3IyMv4KMjIB9XtmZXx5aGYgNU4nHzVLI+r+rAFU/qzmeEZJOT9DAAACAAD/JAISANwAAwAPAAA3FSE1JTMVITUzESM1IRUjHgHW/gweAdYeHv4qHkGCgps3N/5INzcAAAIAAP9/AcIAgQALABMAAAU0JiMiBhUUFjMyPgEUBiImNDYyAVFaNiA0XTchL3F9yH19yB40TycfNEwjdGxLS2xLAAAAAgAA/2wBSACUAA0AGwAAJSYjIgYVFBcWMzI2NTQ3FhUUBiMiJyY1NDYzMgEkDSU8lwYLJjyXEA9+SE8kD35IT0QXYSsKCRdhKwkXHh1DZ0MeHUNnAAAAAAEAAP95AUAAhwALAAAlFAYjIiY1NDYzMhYBQHlZMjx6WDI8KEZpOCdFajgAAf/+/28BTACRAAsAACc3FzcXBxcHJwcnNwIbjIwbhoYci4schnEgdnUgcHAhdXUhcAAAAAUAAP9qASwAlgAFAAsAEQAXAB8AABcHFjMyNy8BBhUUFz8BJiMiBx8BNjU0JwY0NjIWFAYilkcdKikfXUcdHVxIHykqHVxHHR3yWHxYWHwSSB0dWkkfKSodWEgdHVpIHykqHYV8WFh8WAAAAAEAAP8GAjAA+gADAAAVATMBAbh4/kf6AfT+DAABAAD/dAFKAIwAAwAAMTcXB6WlpYyMjAABAAD/dAFKAIwAAgAAFRsBpaWMARj+6AABAAD/zgBkADIABwAAFiImNDYyFhRHKh0dKh0yHSodHSoAAAABAAD87wE7AAAADwAAFTUzHgQVFAc2NTQmJx4GP1FQNy4SkXDv7zVwZWyJSWBpQUmP3yoAAQAAAAABOwMRAA8AADE1Mz4BNTQnFhUUDgMHHnCSEy43UFE/Bu8f4ZNHSGdeSIptZ3E1AAIAAP1EATwAAAAWACMAABkBMx4EFRQHFhUUBzY1NC4DIzUeAxc2NTQuAx4JQlBONBITHgUoPklAFglETVYVASk+SUD+qQFXJFBKT2IzKi0qKjU6HR03ZEUzGaskVENdKQsJOGRFNBgAAgAA//8BPAK8ABYAIwAAFREzMj4DNTQnFhUUBxYVFA4DBzUyPgM1NCcOAx4WQEk+KAUeExI0TlBCCRZAST4pARVWTUQBAVcZM0VkNx0dOjUqKi0qM2JPSlAkqxg0RWQ4CQopXUNTAAADAAD9KgE8AJEAGwArADsAABkBMx4GFRQHFhUUBxYVFAc2NTQuAiM1HgMXNDY1NCcmJyYjIiceAxc0NjU0JyYnJiMiHgYnMzs4LhwSEhITHgU9V1UcCURNVhUBckZABwUBAQlETVYVAXJGQAcFAf6QAgEbOTM3Oj1IJSwrJy0sKykrNjkZIUR3SCmpJFRBXSkEDQOIXzsIAaskU0JdKQQNA4hfOwgBAAADAAD/VgE8Ar0AGQAmADMAABEzMj4DNTQnFhUUBxYUBxYVFA4DByM3Mj4DNTQnDgMnMj4DNTQnDgMeFkBJPigFHhMSEhI0TlBCCR4eFkBJPikBFVZNRAkWQEk+KQEVVk1EAVcZM0VkNx0dOjUqKixVKi0qM2JPSlAkqhk0RWQ4CgopXUNUhhk0RWQ4CgopXUNUAAAABAAA/UIBPAFUABwAKQA2AEMAABkBMx4EFRQHFhQHFhQHFhUUBzY1NC4DIzUeAxc2NTQuAyceAxc2NTQuAyceAxc2NTQuAx4JQlBONBISEhISEx4FKD5JQBYJRE1WFQEpPklAFglETVYVASk+SUAWCURNVhUBKT5JQP6oAqwkUEpPYjMqLSpVLCpVLCoqNTodHTdkRTMZqyRUQ10pCwk4ZEU0GKskVENdKQsJOGRFNBirJFRDXSkLCThkRTQYAAAABAAA/o4BPAKgABwAKQA2AEMAABkBMzI+AzU0JxYVFAcWFAcWFAcWFRQOAwc1Mj4DNTQnDgMnMj4DNTQnDgMnMj4DNTQnDgMeFkBJPigFHhMSEhISEjROUEIJFkBJPikBFVZNRAkWQEk+KQEVVk1ECRZAST4pARVWTUT+jgKsGTNFZDcdHTo1KiosVSosVSotKjNiT0pQJKoZNEVkOAoKKV1DVIYZNEVkOAoKKV1DVIYZNEVkOAoKKV1DVAAFAAD9VQE8AhIAIAAtADoARwBUAAAZATMeBRUUBxYUBxYUBxYUBxYVFAc2NTQuAyM1HgMXNjU0LgMnHgMXNjU0LgMnHgMXNjU0LgMnHgMXNjU0LgMeBzI/RjolEhISEhISEhMeBSg+SUAWCURNVhUBKT5JQBYJRE1WFQEpPklAFglETVYVASk+SUAWCURNVhUBKT5JQP67A1cfQzpGQVQrKi0qVSwqVSwqVSwqKjU6HR03ZEUzGaskVENdKQsJOGRFNBirJFRDXSkLCThkRTQYqyRUQ10pCwk4ZEU0GKskVENdKQoKOGRFNBgAAAUAAP28ATwCeQAfACwAOQBGAFMAABkBMzI+AzU0JxYVFAcWFAcWFAcWFAcWFRQOAwc1Mj4DNTQnDgMnMj4DNTQnDgMnMj4DNTQnDgMnMj4DNTQnDgMeFkBJPigFHhMSEhISEhISNE5QQgkWQEk+KQEVVk1ECRZAST4pARVWTUQJFkBJPikBFVZNRAkWQEk+KQEVVk1E/bwDVxkzRWQ3HR06NSoqLFUqLFUqLFUqLSozYk9KUCSqGTRFZDgKCildQ1SGGTRFZDgKCildQ1SGGTRFZDgKCildQ1SGGTRFZDgKCildQ1QAAAACAAD/ZADhAbAACgAWAAA3IgYdATY3NjU0JjcyFhUUBwYjETMRNmcUKyImKx0HIzlLUkQoI3omE7kPODsvGyYmMiNJTFICTP68NAAAAgAA/oYAxQF6AAMADAAAFzc1BxEVNxEjNQcRNxyQkKkZrAFlLZYtAUnoNP3A4jMCQwEAAAIAAP6YAP8BaAADAB8AADcVNzUDIzUHNTc1BzU3NTMVNzUzFTcVBxU3FQcVIzUHU1paHjU1NTUeWh01NTU1HVpGpxun/jejD1wPpw9aD6ifHKujD1wPpw9aD6ifHAAAAAEAFP+EAQsAegAeAAAXNSYnBzAVIzUzNycwIzUzFRYXNzA1MxUjBgcXMDMVwygMM0g5MzM5SCESNEg5IRM0OXw7Jg0zO0oyMkg5IhEzOUciETRIAAQAAP9qAWwBsAAOABwAKwA6AAA3DgEdATI3Njc2NTQnJiM3MhYVFAcGBwYjETMRNhcOAR0BMjc2NzY1NCcmIzcyFhUUBwYHDgEjETMRNk4RHg4eHwwEChARGR0rCRgrNS8fGdERHRAeHQsGCxAPFh8qCxkoFjcWHht9AR4QxikrNA0ZHhQVJjkhEiA5NEACRv7BMiYBHRHGKS8wExMcFhUmNiQWHD4vGyUCRv7BMgAAAgAy/2QBDQGwAAoAFgAANyIGFRQXFhc1NCYnMhcRMxEiJyY1NDarFyAuLhoqMzojIzpSTzl6JhswRUIDyxIeJjQBRP20UlBFIzIAAAT/9f9qAWwBsAAOAB0ALAA7AAA3IyIHBhUUFxYXFjM1NCYnMhcRMxEiJicmJyY1NDYXDgEdATI3Njc2NTQnJiM3MhYVFAcGBw4BIxEzETZXAREQCgQMHx4OHiswGR8WNxcrGAkr6REdEB4dCwYLEA8WHyoLGSgWNxYeG30VFB4ZDTQrKcYQHicyAT/9uiUbNDkgEiE5JgEdEcYpLzATExwWFSY2JBYcPi8bJQJG/sEyAAAAAAEAAP7AAKkBQAATAAATMxU3FQcVNxUHFSM1BzU3NQc1N0QeR0dHRx5EREREAUCiDlwOfw5aD6iiDlwOfw5aDwADAAD+mAE6AWgAIwAnACsAADc1MxU3FQcVNxUHFSM1BxUjNQ8BIzUHNTc1BzU3NTMVNzUzFQM1BxU3FTc16R4zMzMzHj0ePAEeMzMzMx49Hh49Wz3AqJ4PXA+fD1oPtaoSrKQQqJ4PXA+fD1oPtaoSrKT+/Z4Rn7ieEZ8AAf/9AAABPwD0ABgAADcGIyImNTQ/ATYvASY1NDYzMjEXBRYVFAcSAgMHCQbPDg7NCAsHAQIBHw4OAQEQCAoDSQcGTwMLChIBawYODQUAAAABAAAAAABQAFAACQAANTQ2MhYUBiMiJhciFxcREBgoERcXIhcYAAAAAQAAAAABQAAoAAMAADE1IRUBQCgoAAAAAQAAAAAAZAEYAAMAADMDMwMoKGQoARj+6AAAAAEAAAAAARgBNQAFAAAxGwEjJweMjEFYWgE1/svGxgAAAgAAAAACWAFKAA4AGQAAMTQ2MzIeAhUjLgEiBgchIiY0NjMyFhUUBrN5OWtVMw8LouCiCwEcFyUlFxkjI5iyLFGATW6Ghm4kMCQkGBkjAAABAAAAAAC2AS0AFwAAEzIWFxYVFAcOASMnJjU0NjU0Iy4BNTQ2VhsbEBoyGUQQBgFHFBsoLQEtDBEdMD08HS0DAQIIaxMPASYcHjEAAQAA/wYAggD6AAMAADUzESOCgvr+DAAAAQAAAAAAggD6AAMAADUzFSOCgvr6AAAAAQAA/4MBLAAAAAMAADEhFSEBLP7UfQAAAQAAAAABLAB9AAMAADUhFSEBLP7UfX0AAQAA/n4A6wGHABMAABMXBxcmIyIGFRQXJjU0NjMyFyc3Kb1nbDI0HyY4eDQlIiKHZAGH5dnPLiQdNTRLTSMtFby0AAABAAD/DQEAAMAAFgAANw4CIyImNTQ2MhYVFAcyNjc2MhcDJ6sDGRoTKzcmOCkXIjMhAhUDljA8AQcEKSgfIB4ZHRshLAIC/m8QAAAAAQAA/gwBSADAACQAABcGIyImNTQ2MzIWFRQHMj8BBiMiJjU0NjMyFhUUBzI3NjIXAyerKCErNycbHCkXQQs8NhgrNycbHCkXSC4CFQPFLcQMKCggIB8ZHRsiygwpKB8gHhkdG00CAv1uDAAAAQAA/gwBjwHAADYAADcGIyImNTQ2MzIWFRQHMj8BIg4BIyImNTQ2MzIWFRQHMjc2MhcBJxMGIyImNTQ2MzIWFRQHMjf2KB8rNycbHCkXPws6ASAcEys3JxscKRdILgEWA/70LVUoISs3JxscKRdBCzwMKCggIB8ZHRsiywkEKSgfIB4ZHRtNAgL8bgwBJAwoKCAgHxkdGyIAAAAAAQAA/QwB2gHAAEUAABMGIyImNTQ2MzIWFRQHMj8BBiMiJjU0NjMyFhUUBzI/AQYjIiY1NDYzMhYVFAcyPwEiDgEjIiY1NDYyFhUUBzI3NjIXASerKCErNycbHCkXQQs6KCErNycbHCkXQQs6KB8rNycbHCkXPws6ASAcEys3JjgpF0guAhUD/qkt/jwMKCggIB8ZHRsiygwoKCAgHxkdGyLKDCgoICAfGR0bIssJBCkoHyAeGR0bTQIC+24MAAAAAQAA/QwCGQKuAFYAACUGIyImNTQ2MzIWFRQHMj8BBiMiJjU0NjMyFhUUBzI/ASIOASMiJjU0NjMyFhUUBzI3NjIXAScTBiMiJjU0NjMyFhUUBzI/AQYjIiY1NDYzMhYVFAcyNwE/KCErNycbHCkXQQs2KB8rNycbHCkXPws0ASAcEys3JxscKRdILgEWA/5qLVUoISs3JxscKRdBCzooISs3JxscKRdBCzQMKCggIB8ZHRsixAwoKCAgHxkdGyLHCQQpKB8gHhkdG00CAvqADAEkDCgoICAfGR0bIsgMKCggIB8ZHRsiAAEAAP8aA1IA5gALAAA1MxUhNTMRIzUhFSMZAyAZGfzgGeZ9ff40fX0AAAAAA//w/wYCJgD6AAcADwATAAA2IiY0NjIWFAAiJjQ2MhYUBQEzAVAyIyMyIwGIMiMjMiP90gG4fv5HSyMyIyMy/s8jMiMjMloB9P4MAAT/4f8GAwcA+gAHAA8AEwAXAAA2IiY0NjIWFAAiJjQ2MhYUBQEzATMBMwFBMiMjMiMCdzIjIzIj/OMBuHv+R3kBuHv+R0sjMiMjMv7PIzIjIzJaAfT+DAH0/gwAAv+0/4gBfAEYABkASAAANxYzMjY3PgU1NCYnJiMiBgcGFRQeARciJwczMhQrASI0OwETPgI1NC4CIyIOAwcGJjc2NzYzMhYXPgEzMhYVFAbFAwQSMg4CAwMDAQEHCAMDEzQLDwQHCBYZLTQLC+ELC0toAQMCAQIFAwgMDwsZCgUbBTEPGCQjJAcdJiMeLWsoATUkBQsMDAwMBhAXAwEzHCYlDBQNKiB6Hh4BHQIIDgYDBQUCBxQSLBAIDwlYEBkTGh4PNDBHbQAB/9v/9gG+ARgAVwAANwYHBisBIj8BNiYjIgYHBiY3PgMzMhc2MzIXPgEzMh4DFRQPAQYVFDMyNz4FNzYWBw4CIyImNTQ2PwI0IyIPAQYHJwYmPwE2NTQmIyIHUAcIBAQ1DQ1CBAYIDRYkBRUEFBAiHxI3CyQkLQkLKRMKEg8LBwUvBAgCAwULBwwDDQEGFQYSFy0fFRkCAzQBFRsIQQgPJg0IBEMBDAkbCBURAwEapw0PGjkIDAklGjASKCgoEBgGCw8TCg0NfQsJDgIDCQYPBRIBCQ0LHx8aFRQGDQeIBg4UqxYBAQEPCKsDAwYIFAAB/37/YAFeAbgASAAAByImNTQ2MzIWFRQHBhUUMzI+BzcjIiY1ND4DOwE+ATMyFhUUBiMiJjU0NzY0IyIOBwczMhYUBisBDgEyIDAXExIXEgoZCxAPCw0KDg0UCjUJCgEDBAYDQRRpNCAwFxMSFxIKGQcMCgcIBQYDBgE2CQoKCT8hdqAmIBoiFA8OCwcNDgYREyUkPDdVJwwJAwUFBAJLXyYgGiIUDw4LBhwFCwoUDRoNHgYMEAzFwQAAAAEAAAAAANoBGAA0AAAzIiY1NDYzMhYVFAcWMzI2NTQuAicmNTQ2MzIWFRQGIyIuATU0NyYjIgYVFB4CFx4BFRRQHjISDA4XDAYYFiEJCxgGPDctIjYWEAgQCwUQDg8ZERIeBRsXKxsQFg0LGAwSFhILDwcNBCYqIy0kGBAYCQ8KCAgUEQ0JEwwRAxIfFVoAAAH/5P//AOcBEAA/AAAnBi4BPwEuASMqASMiDgEHBicmNz4BNxYzMj4BMzIXFhQPAQ4BFRQeARcWNicuATU0NjMyFRQHBgciJiMuASMiCgYLAQWwCBcRBQwHBREUBQ8EAwgMCwEwIhkgEQcFCAsHngEBECwXCAwDAyQUDCYkERIDBQIXNAkSAwQIDQbBBAMbIQQNCwkSHjACAwMEAQERB6cDAwIFAQkLBA8JCAgUCxM3KhUJAQEDDQAF/7T/iAVLARgAGwA1ANkA8AELAAAlFjMyPgE3PgY1NCYnJiMiBgcOAhUUBRYzMjY3PgU1NCYnJiMiBgcGFRQeARciJwczMhQrASI0OwETPgI1NC4CIyIOAwcGJjc2NzYzMhYXPgEzMhc+ATMyFhc+ATMyFz4BMzIWFz4BMzIXPgEzMhYXPgEzMhYVFAYjIicHMzIUKwEiNDsBEz4CNTQmIyIGBxUUBiMiJwczMhQrASI0OwETPgI1NCYjIgYHFRQGIyInBzMyFCsBIjQ7ARM0PgM0NTQmIyIGBxUUBiUWMzI2Nz4ENTQmJyYjIgYHBhUUBRYzMjY3PgY1NCYnJiMiDgEHBhUUFgIKAwQMHx4JAgMCAgIBAQcIAwMTNAsFBwP+ywMEEjIOAgMDAwEBBwgDAxM0Cw8EBwgWGS00CwvhCwtLaAEDAgECBQMIDA8LGQoFGwUxDxgkIyQHHSYjLxMSIhsjJAcdJiMvExIiGyMkBx0mIy8TEiIbIyQHHSYjHi1rSRYZLTQLC+ELC0toAQMCBQYOFBRrSRYZLTQLC+ELC0toAQMCBQYOFBRrSRYZLTQLC+ELC0toAQIBAgUGDhQUawODAwQSMg4CBAMDAQcIAwMTNAsP/ssDBBIyDgIDAgICAQEHCAMDDCEeBw8JKAEYKhcECgkLCgoLBRAXAwEzHA0bGAsoBwE1JAULDAwMDAYQFwMBMxwmJQwUDSogeh4eAR0CCA4GAwUFAgcUEiwQCA8JWBAZExoeDzIcFhMaHg8yHBYTGh4PMhwWExoeDzQwR20geh4eAR0CCA4GBwgYIwFHbSB6Hh4BHQIIDgYHCBgjAUdtIHoeHgEdAQMFBQYHAwcIGCMBR20oATUkBg0PDg8HEBcDATMcJiUoBwE1JAQKCQsKCgsFEBcDARglEiYlEhoAAAT/tP+IBAYBGAB9AJgAtADOAAAhIicHMzIUKwEiNDsBEz4CNTQmIyIGBxUUBiMiJwczMhQrASI0OwETND4DNDU0JiMiBgcVFAYjIicHMzIUKwEiNDsBEz4CNTQuAiMiDgMHBiY3Njc2MzIWFz4BMzIXPgEzMhYXPgEzMhc+ATMyFhc+ATMyFhUUBicWMzI2Nz4GNTQmJyYjIg4BBwYVFBYFFjMyPgE3PgY1NCYnJiMiBgcOAhUUBRYzMjY3PgU1NCYnJiMiBgcGFRQeAQNSFhktNAsL4QsLS2gBAwIFBg4UFGtJFhktNAsL4QsLS2gBAgECBQYOFBRrSRYZLTQLC+ELC0toAQMCAQIFAwgMDwsZCgUbBTEPGCQjJAcdJiMvExIiGyMkBx0mIy8TEiIbIyQHHSYjHi1rTAMEEjIOAgMCAgIBAQcIAwMMIR4HDwn+wgMEDB8eCQIDAgICAQEHCAMDEzQLBQcD/ssDBBIyDgIDAwMBAQcIAwMTNAsPBAcgeh4eAR0CCA4GBwgYIwFHbSB6Hh4BHQEDBQUGBwMHCBgjAUdtIHoeHgEdAggOBgMFBQIHFBIsEAgPCVgQGRMaHg8yHBYTGh4PMhwWExoeDzQwR20oATUkBAoJCwoKCwUQFwMBGCUSJiUSGgMBGCoXBAoJCwoKCwUQFwMBMxwNGxgLKAcBNSQFCwwMDAwGEBcDATMcJiUMFA0AA/+0/4gCwQEYAFcAcQCNAAAzIicHMzIUKwEiNDsBEz4CNTQuAiMiDgMHBiY3Njc2MzIWFz4BMzIXPgEzMhYXPgEzMhYVFAYjIicHMzIUKwEiNDsBEzQ+AzQ1NCYjIgYHFRQGJxYzMjY3PgU1NCYnJiMiBgcGFRQeAQUWMzI+ATc+BjU0JicmIyIGBw4CFRTIFhktNAsL4QsLS2gBAwIBAgUDCAwPCxkKBRsFMQ8YJCMkBx0mIy8TEiIbIyQHHSYjHi1rSRYZLTQLC+ELC0toAQIBAgUGDhQUa0wDBBIyDgIDAwMBAQcIAwMTNAsPBAcBSgMEDB8eCQIDAgICAQEHCAMDEzQLBQcDIHoeHgEdAggOBgMFBQIHFBIsEAgPCVgQGRMaHg8yHBYTGh4PNDBHbSB6Hh4BHQEDBQUGBwMHCBgjAUdtKAE1JAULDAwMDAYQFwMBMxwmJQwUDQIBGCoXBAoJCwoKCwUQFwMBMxwNGxgLKAAAAv/b/4gDKwEYAHoAjwAAJTY3NjMyFhc+ATMyFhUUBiMiJwczMhQrASI0OwETPgM1NCYjIg4DBw4BIyImNTQ2PwI0IyIPAQYHJwYmPwE2NTQmIyIPAQYHBisBIj8BNiYjIgYHBiY3PgMzMhc2MzIXPgEzMh4DFRQPAQYVFDMyNz4BFxYzMjY3PgE1NCYnJiMiBgcGFRQWAa0xFBgiIyQHHSYjHi1rSRYZLTQLC+ELC0toAQEDAQUGBw8SDhgIGjwtFRkCAzQBFRsIQQgPJg0IBEMBDAkbCEQHCAQENQ0NQgQGCA0WJAUVBBQQIh8SNwskJC0JCykTChIPCwcFLwQIAgMPJdEDBBIyDgYHBwgDAxM0Cw8Jd2wYHRMaHg80MEdtIHoeHgEdAgUJCQUHCA0fGzUQNjgVFAYNB4gGDhSrFgEBAQ8IqwMDBggUrBEDARqnDQ8aOQgMCSUaMBIoKCgQGAYLDxMKDQ19CwkOAgg1OQE1JA8mERAXAwEzHCYlEhoAAv/b/2ADGQG4AFcAnwAANwYHBisBIj8BNiYjIgYHBiY3PgMzMhc2MzIXPgEzMh4DFRQPAQYVFDMyNz4FNzYWBw4CIyImNTQ2PwI0IyIPAQYHJwYmPwE2NTQmIyIHEyImNTQ2MzIWFRQHBhUUMzI+BzcjIiY1NDY7AT4BMzIWFRQGIyImNTQ3NjQjIg4HBzMyFhUUDgErAQ4BUAcIBAQ1DQ1CBAYIDRYkBRUEFBAiHxI3CyQkLQkLKRMKEg8LBwUvBAgCAwULBwwDDQEGFQYSFy0fFRkCAzQBFRsIQQgPJg0IBEMBDAkbCPUgMBcTEhcSChkLEA8LDQoODRQKNQkKCQhBFGk0IDAXExIXEgoZBwwKBwgFBgMGATYJCwUJBj8hdhURAwEapw0PGjkIDAklGjASKCgoEBgGCw8TCg0NfQsJDgIDCQYPBRIBCQ0LHx8aFRQGDQeIBg4UqxYBAQEPCKsDAwYIFP6fJiAaIhQPDgsHDQ4GERMlJDw3VScMCQgLS18mIBoiFA8OCwYcBQsKFA0aDR4GDAgFCQbFwQAAAAAB/37/YAJpAbgAewAAJSMOASMiJjU0NjMyFhUUBwYVFDMyPgc3IyImNTQ+AzsBPgEzMhYVFAYjIiY1NDc2NCMiBwYHFz4BMzIWFRQGIyImNTQ3NjQjIg4HBzMyFhQGKwEOASMiJjU0NjMyFhUUBwYVFDMyPgcBX5shdl8gMBcTEhcSChkLEA8LDQoODRQKNQkKAQMEBgNBFGk0IDAXExIXEgoZJhcDAZsUaTQgMBcTEhcSChkHDAoHCAUGAwYBNgkLCwk/IXZfIDAXExIXEgoZCxAPCw0KDw0U5sXBJiAaIhQPDgsHDQ4GERMlJDw3VScMCQMFBQQCS18mIBoiFA8OCwYccwwGAUtfJiAaIhQPDgsGHAULChQNGg0eBgwQDMXBJiAaIhQPDgsHDQ4GERMlJDw3VQAAAAAB/37/YAN0AbgAswAAEzM+ATMyFhUUBiMiJjU0NzY0IyIHBgcXPgEzMhYVFAYjIiY1NDc2NCMiDgcHMzIWFRQOASsBDgEjIiY1NDYzMhYVFAcGFRQzMj4HNyMOASMiJjU0NjMyFhUUBwYVFDMyPgc3Iw4BIyImNTQ2MzIWFRQHBhUUMzI+BzcjIiY1ND4DOwE+ATMyFhUUBiMiJjU0NzY0IyIOAgcGzJwUaTQgMBcTEhcSChkmFwMBmxRpNCAwFxMSFxIKGQcMCgcIBQYDBgE2CQoECQY/IXZfIDAXExIXEgoZCxAPCw0KDw0UCpshdl8gMBcTEhcSChkLEA8LDQoODRUKmyF2XyAwFxMSFxIKGQsQDwsNCg4NFAo1CQoBAwQGA0EUaTQgMBcTEhcSChkOFQ4IBgIBDktfJiAaIhQPDgsGHHMMBgFLXyYgGiIUDw4LBhwFCwoUDRoNHgYMCAUJBsXBJiAaIhQPDgsHDQ4GERMlJDw3VSfFwSYgGiIUDw4LBw0OBhETJSQ7OFUnxcEmIBoiFA8OCwcNDgYREyUkPDdVJwwJAwUFBAJLXyYgGiIUDw4LBhwTJyIbCgAB/37/YASAAbgA5wAAARc+ATMyFhUUBiMiJjU0NzY0IyIHBgcXPgEzMhYVFAYjIiY1NDc2NCMiDgcHMzIWFAYrAQ4BIyImNTQ2MzIWFRQHBhUUMzI+BzcjDgEjIiY1NDYzMhYVFAcGFRQzMj4HNyMOASMiJjU0NjMyFhUUBwYVFDMyPgc3Iw4BIyImNTQ2MzIWFRQHBhUUMzI+BzcjIiY1ND4DOwE+ATMyFhUUBiMiJjU0NzY0IyIHBgcXPgEzMhYVFAYjIiY1NDc2NCMiDgcB2JwUaTQgMBcTEhcSChkmFwMBmxRpNCAwFxMSFxIKGQcMCgcIBQYDBgE2CQoKCT8hdl8gMBcTEhcSChkLEA8LDQoPDRQKmyF2XyAwFxMSFxIKGQsQDwsNCg4NFAqbIXZfIDAXExIXEgoZCxAPCw0KDw0UCpshdl8gMBcTEhcSChkLEA8LDQoODRQKNQkKAQMEBgNBFGk0IDAXExIXEgoZJhcDAZsUaTQgMBcTEhcSChkHDAoHCAUGAwYBDwFLXyYgGiIUDw4LBhxzDAYBS18mIBoiFA8OCwYcBQsKFA0aDR4GDBAMxcEmIBoiFA8OCwcNDgYREyUkPDdVJ8XBJiAaIhQPDgsHDQ4GERMlIzw3VifFwSYgGiIUDw4LBw0OBhETJSQ8N1UnxcEmIBoiFA8OCwcNDgYREyUkPDdVJwwJAwUFBAJLXyYgGiIUDw4LBhxzDAYBS18mIBoiFA8OCwYcBQoLEw4ZDh0AAwAA/2AC3wG4ADcAewDFAAAzIiY1NDYzMhYVFAcWMzI2NTQuAycuAjU0NjMyFhUUBiMiLgE1NDcmIyIGFRQeAhceARUUJQYuAT8BLgIjIgYjIg4BBwYnJjc+ATceATMyNjMyFhcWFA8BDgEVFB4BFxY+AScuATU0NjMyFRQHBiMiIy4CIyIGBSImNTQ2MzIWFRQHDgEeARUUFjI+BzcjIi4BNTQ2OwE+ATMyFhUUBiMiJjU0NzY0IyIOBwczMhYUBisBDgFQHjISDA4XDAYYFiEDDAUXAxQYFDctIjYWEAgQCwUQDg8ZERIeBRsXASYGCwEFrgQJCgcGHAYFEBIFEAUDBwsMARglDiAoBwQLBwsHmgICGioNBQkFAgMkFAwmJhITAwMSIxgIChL+vSAwFxMSFxIEAQECBhYQDwsNCg4NFAo1BgkECQhBFGk0IDAXExIXEgoZBwwKBwgFBgMGATYJCgoJPyF2KxsQFg0LGAwSFhIJDA0EDgINEh4PIy0kGBAYCQ8KCAgUEQ0JEwwRAxIfFVoDBAgNBr8CAgEBGB8EDQsIEx4uBAIBCAEBAREHowMFAgcDBwsDBA0GCAgUCxM3KxQJAQgGB6smIBoiFA8OCwIFBAYDCAYGERMlJDw3VScGCQYIC0tfJiAaIhQPDgsGHAULChQNGg0eBgwQDMXBAAAAAgAF//sB/AGaAAkALAAAAQ8BBhUUMzI2NwcOASMiJjU0PwEjNTM/AQc3MhU2MzIWFRQGIiY1NDcGDwEjATZ/OQIUGEQSDCkyHyIiAzdpcxZZJpgZIDUYHRggFgk3EEJIAQkHuAgDFRcPKBkUJBoLC7MgSi54Ci0pHBUSGxEOEhMPJ9gAAQAA//0BtQDUAC8AACUyNTQnBiImNT4BMzIWFRQHBiMiLwEmIyIVFBc2MzIWFRQGByInJjU0NzYzFh8BFgFwLRoQHBQBFwkkLSkXHiYeohoRLhkQDw0VFA0dGBwoFiIqF6IcMTkgExAWDQ4WMzUzJBUVehI6IBIQFw4PEgIaIi0zJBMCEHoTAAEAAP/NAbUBAwA2AAAXIiY1NDc2MxYfATUzFRcWMzI2NTQnBiMiNT4BMzIWFRQHBiMiLwEVIzUnJiMiBhUUFzYzMhUUTSAtKBYgKBcuHlwiDxUcFhQSHAEPCSAtKRccJB4uHlwgDxYcFRQTHANDJjMkEwIQJGmARxcpHCcQDBsPFUImMyQVFSRsg0cWKB4nDwwdIAABAA0AAAJFAOAACwAANyc3FzcXNxcHJwcnIhWOZXhqTRaSaXRpLhmZfHx8VBehfHx8AAAAAQAN/8sCRQERABMAACUHJwcnNxc3NTMXNxc3FwcnBxUjARZAaUsVjmUWGwFGak8UkmkZG0ZGfE4ZmXwXlntKfFUYoXwblgAAAQAAAAABGAEYAAsAADM1IzUzNTMVMxUjFXt7eyJ7e3sie3siewAAAAEAAAAAATYBcgAKAAAxNT4ENzMUBiQxTDQ0Dx7APAcPKz1vSY7aAAAB//8AAAEtAKAAHQAANz4CMzIeARcWMzI3NhYHDgIjIi4BJyYjIgcGJgEJECkcGCYmDwkKHhgEDgIIESkcGCQlEgcIHR0FDUYZISAhMQoGJAYHBxkiHyExCgQjBggAAAABAAAAAAEsASwABwAAMREhESM1IxUBLCPmASz+1LS0AAEAAAAAAPoBwgAGAAAzAzMbATMDaWkoVVUoaQHC/pgBaP4+AAIAAAAAAMgAyAAHAA8AADYyNjQmIgYUFiImNDYyFhRFPiwsPix0Ujs7UjsZLD4sLD5FO1I7O1IAAf84AAAAyADIAAsAACM0NjIWFSM0JiIGFch2pHYeYJRgUnZ2UkpgYEoAAAACAAAAAAC0ASwABwAVAAA2MjY0JiIGFBc1LgE1NDYyFhUUBgcVSx4bGx4bGB0rN0Y3Kx14NTY1NTatZAg1Jyg8PCgnNQhkAAACAAAAAADIASwADwAfAAA3LgE1NDYyFhUUBgcdASM1Nz4BNTQmIgYVFBYXPQEzFVQkMDtSOzAkICAZIiw+LCIZIGYFOCUpOzspJTgFAWVlGQYqGh8sLB8aKgYBSUkAAAAEAAD//AP0An8AhwCRAJ0ApwAANz4BNTQuAScuATU0PgI/Ag4BFRQzMjcXDgEjIiY1ND4CMzIWFRQGIyImJzceATMyNTQuAicHBhUUHgIVFAYPAR4CMzoBMzI3JjU0NzYzMhYVFAcGBx4BMzI2NTQ2Ny4CPQEeARUUBiMiJwYjIi4BJw4BIiYnJiMiDgEHBiMiNTQ2BSImNDYzMhYUBiU+ATU0JyYjIgYVFAU2NTQmJw4BFRSYNkUBAgIDUgMEBQECPWJqIB4dGhUpJR4tHz5wSH1yMi4cNhIYERQUMwwcQC0bCR0iHR8QEA4pHwwDCAIQIyEcIkwbIwodPBMgGxYxQ10ggV66tFFCQSMkPCEzFg4sKCAbHBoSChQZBlohCjADXAsTEwsMEhH+DzMkBAUVHC4BPFoXEj8wWhg/IAQHBwQIdCIFDg4MBASlBGMsIzwNQi8mGiFHRCxRNzA1MCsOHhEyChoiGgJCJBseNiEsFSZPFBQKKRoeNSg1JS4rICETOTAXEioZUl8ZLFk0BgE8sWtGXzk6FRQSJhkWIC0LFQQ6Bw04TxIYEhIYEoAvLxsHDhI5Kx50BYEiSRUdWEQ/AAAAAAIADAAKAdMBzwAKAI8AACU0JiMiBhQWMzI2Jw4BIyImNDYzMhYXNjU0JyYjIiY0NjMyFx4BFxYzMjU0Jy4BNTQ2MzIWFRQGBxQzMjc+ATc2MzIWFRQGIyIGBwYVFDMyNjMyFhQGIyImIyIGFRQXHgEXFhUUBiMiJy4BJyYjIhUUFhUUBiMiJjQ2NTQjIgcOAQcGIyImNTQ3NjMyNzY1NAEWGA8QFRYPEBeJGSYOGRsaGQ0qGCUMFBgdHBkXEhALAxQLEhQBAiceFBIbIwEWEA0RAQ0MGhMeGxIbFQ0QIRsrDhwbHRkPJxQXEgsUOA0OGRcTFAwBExEKEiogExIdJhcNDhIDERIMFBoNDBYjEg3uEBQTIhYVCgElGSobJQIDFg4KExwoHQwLPhYNGA0IFycPFxobFhEjGSoQEzgPDhsUESMGCw4PFicdKBomCAoWChIDCw0ZExsOCzkVDx8eMBMUGBokMRckDhI9DAcWFBgODRINDBoAAAADAAD/BgH0APoABwAPABcAADYUFjI2NCYiAjQ2MhYUBiI2IiY0NjIWFC14qnh4qqWS0JKS0IEyIyMyI1WqeHiqeP7L0JKS0JK+IzIjIzIAAAIAAP8GAfQA+gAHAA8AADYUFjI2NCYiAjQ2MhYUBiIteKp4eKqlktCSktBVqnh4qnj+y9CSktCSAAAAAAMAAP6iAfQBXgARABcAHQAAEzMVHgEVFAYHFSM1LgE1NDY3GQEOARQWFz4BNCYn5C1gg4NgLWCEg2FNamp6TWlpTQFeZAqOYmGPCmRlCI9iY44I/jsBmAh1nnUICXSedAkAAAACAAD/BgHSAPoAIQApAAAlFhUUBwYjIicmIyIGFBYzMjc2MzIXFhUUBwYjIiY0NjMyAiImNDYyFhQBzwILBQYNCjN3VXh4VXgyBhIHAwwDQJVokpJolHsyIyMyI4IGBA8GAw5feKp4Xw0CBwwGBniS0JL+yiMyIyMyAAAAAQAA/wYB0gD6ACEAACUWFRQHBiMiJyYjIgYUFjMyNzYzMhcWFRQHBiMiJjQ2MzIBzwILBQYNCjN3VXh4VXgyBhIHAwwDQJVokpJolIIGBA8GAw5feKp4Xw0CBwwGBniS0JIAAAIAAP6iAdIBXgAkACoAACUWFxYVFAcGIyInJicRNjc2MzIXFhUUBwYHFSM1LgE1NDY3NTMDEQ4BFBYBEYQ6AgsFBg0KLWZlLgYSBwMMAzyCLWCEg2EtLU5pafkKbQYEDwYDDlQK/mgHVw0CBwwGBnAHZWUIj2Jjjghl/dYBmAh1nnUAAAEAAP/EAHgAPAAHAAAWIiY0NjIWFFUyIyMyIzwjMiMjMgAAAAEAAP6iAC0BXgADAAATESMRLS0BXv1EArwAAAACAAD9EgFKAL4AAwAPAAA3FSE1JTMVITUzESMRIRUjHgEO/tQeAQ4eHv7yHkaMjHgyMvxUAmIyAAEAAAAAAlYBcgALAAA1Nxc3FzcXAScHJweJVFZSryL+/FRWUzVBuXNzcekW/qR0dHBHAAAB/+oAvQEQATcAGQAAET4BMzIWMjc2MzIVFAcOASMiJiIHBiMiNTQYIRwUVSgUAwcMFhghHBRVKBQEBwsBDhgRPRQDCQwWGBE9FAQKDAAAAAAADgCuAAEAAAAAAAAAfgD+AAEAAAAAAAEABwGNAAEAAAAAAAIABwGlAAEAAAAAAAMAIgHzAAEAAAAAAAQABwImAAEAAAAAAAUACQJCAAEAAAAAAAYABwJcAAMAAQQJAAAA/AAAAAMAAQQJAAEADgF9AAMAAQQJAAIADgGVAAMAAQQJAAMARAGtAAMAAQQJAAQADgIWAAMAAQQJAAUAEgIuAAMAAQQJAAYADgJMAEMAbwBwAHkAcgBpAGcAaAB0ACAAXAAyADUAMQAgADIAMAAxADgAIABKAGUAYQBuAC0ARgByAGEAbgBjAG8AaQBzACAATQBvAGkAbgBlAC4AIABUAGgAaQBzACAAZgBvAG4AdAAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABcACgAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAFwAKQAuAABDb3B5cmlnaHQgXDI1MSAyMDE4IEplYW4tRnJhbmNvaXMgTW9pbmUuIFRoaXMgZm9udCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgU0lMIE9wZW4gRm9udCBMaWNlbnNlIFwoaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcKS4AAGEAYgBjADIAcwB2AGcAAGFiYzJzdmcAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAAYQBiAGMAMgBzAHYAZwAgADoAIAA4AC0AMwAtADIAMAAxADkAAEZvbnRGb3JnZSAyLjAgOiBhYmMyc3ZnIDogOC0zLTIwMTkAAGEAYgBjADIAcwB2AGcAAGFiYzJzdmcAAFYAZQByAHMAaQBvAG4AIAAgAABWZXJzaW9uICAAAGEAYgBjADIAcwB2AGcAAGFiYzJzdmcAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDAAAAAQACAQIAAwEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAYubm9kZWYHdW5pRTAwMAd1bmlFMDIyB3VuaUUwMjMHdW5pRTAyNAd1bmlFMDMwB3VuaUUwMzgHdW5pRTAzOQd1bmlFMDQzB3VuaUUwNDUHdW5pRTA0Ngd1bmlFMDQ3B3VuaUUwNDgHdW5pRTA1MAd1bmlFMDVDB3VuaUUwNjIHdW5pRTA2OQd1bmlFMDdBB3VuaUUwN0IHdW5pRTA3Qwd1bmlFMDdEB3VuaUUwODAHdW5pRTA4MQd1bmlFMDgyB3VuaUUwODMHdW5pRTA4NAd1bmlFMDg1B3VuaUUwODYHdW5pRTA4Nwd1bmlFMDg4B3VuaUUwODkHdW5pRTA4QQd1bmlFMDhCB3VuaUUwOEMHdW5pRTA5NAd1bmlFMDk1B3VuaUUwQTAHdW5pRTBBMQd1bmlFMEEyB3VuaUUwQTMHdW5pRTBBNAd1bmlFMEE5B3VuaUUwQjMHdW5pRTEwMQd1bmlFMUI5B3VuaUUxQkIHdW5pRTFFNwd1bmlFMjQwB3VuaUUyNDEHdW5pRTI0Mgd1bmlFMjQzB3VuaUUyNDQHdW5pRTI0NQd1bmlFMjQ2B3VuaUUyNDcHdW5pRTI0OAd1bmlFMjQ5B3VuaUUyNjAHdW5pRTI2MQd1bmlFMjYyB3VuaUUyNjMHdW5pRTI2NAd1bmlFMjgwB3VuaUUyODEHdW5pRTI4Mgd1bmlFMjgzB3VuaUU0QTAHdW5pRTRBMgd1bmlFNEE0B3VuaUU0QTgHdW5pRTRBQwd1bmlFNEMwB3VuaUU0Q0UHdW5pRTRFMQd1bmlFNEUyB3VuaUU0RTMHdW5pRTRFNAd1bmlFNEU1B3VuaUU0RTYHdW5pRTRFNwd1bmlFNEU4B3VuaUU0RTkHdW5pRTRFQQd1bmlFNEVFB3VuaUU1MDAHdW5pRTUwMQd1bmlFNTIwB3VuaUU1MjEHdW5pRTUyMgd1bmlFNTI0B3VuaUU1MjUHdW5pRTUyOQd1bmlFNTJBB3VuaUU1MkIHdW5pRTUyQwd1bmlFNTJEB3VuaUU1MkYHdW5pRTUzMAd1bmlFNTMxB3VuaUU1MzkHdW5pRTU2Ngd1bmlFNTY3B3VuaUU1NjkHdW5pRTU2Qwd1bmlFNTZEB3VuaUU1ODIHdW5pRTVEMAd1bmlFNUUyB3VuaUU2MTAHdW5pRTYxMgd1bmlFNjE0B3VuaUU2MTgHdW5pRTYyNAd1bmlFNjMwB3VuaUU2NTAHdW5pRTY1NQd1bmlFOTEwB3VuaUU5MTEHdW5pRTkxMgd1bmlFOTE0B3VuaUU5MTUHdW5pRTkxOAd1bmlFOTIwB3VuaUU5MjUHdW5pRTk1RAd1bmlFQTAyB3VuaUVBQTQAAAAAAf//AAIAAQAAAAAAAAAMABQABAAAAAIAAAABAAAAAQAAAAAAAQAAAADYcJpYAAAAANGXIhcAAAAA2CMtUg==") format("truetype")', font_tb = [], font_scale_tb = {
   serif: 1,
   serifBold: 1,
   "sans-serif": 1,
   "sans-serifBold": 1,
   Palatino: 1.1,
   monospace: 1.35
  }, fmt_lock = {}, cfmt = {
   annotationfont: {
    name: "sans-serif",
    size: 12
   },
   aligncomposer: 1,
   breaklimit: .7,
   breakoneoln: !0,
   cancelkey: !0,
   composerfont: {
    name: "serifItalic",
    size: 14
   },
   composerspace: 6,
   dblrepbar: ":][:",
   decoerr: !0,
   dynalign: !0,
   footerfont: {
    name: "serif",
    size: 16
   },
   fullsvg: "",
   gchordfont: {
    name: "sans-serif",
    size: 12
   },
   gracespace: new Float32Array([ 4, 8, 11 ]),
   graceslurs: !0,
   headerfont: {
    name: "serif",
    size: 16
   },
   historyfont: {
    name: "serif",
    size: 16
   },
   hyphencont: !0,
   indent: 0,
   infofont: {
    name: "serifItalic",
    size: 14
   },
   infoname: 'R "Rhythm: "\nB "Book: "\nS "Source: "\nD "Discography: "\nN "Notes: "\nZ "Transcription: "\nH "History: "',
   infospace: 0,
   keywarn: !0,
   leftmargin: 1.4 * CM,
   lineskipfac: 1.1,
   linewarn: !0,
   maxshrink: .65,
   maxstaffsep: 2e3,
   maxsysstaffsep: 2e3,
   measurefirst: 1,
   measurefont: {
    name: "serifItalic",
    size: 10
   },
   measurenb: -1,
   musicspace: 6,
   partsfont: {
    name: "serif",
    size: 15
   },
   parskipfac: .4,
   partsspace: 8,
   pagewidth: 21 * CM,
   printmargin: 0,
   rightmargin: 1.4 * CM,
   rbdbstop: !0,
   rbmax: 4,
   rbmin: 2,
   repeatfont: {
    name: "serif",
    size: 13
   },
   scale: 1,
   slurheight: 1,
   staffsep: 46,
   stemheight: 21,
   stretchlast: .25,
   stretchstaff: !0,
   subtitlefont: {
    name: "serif",
    size: 16
   },
   subtitlespace: 3,
   sysstaffsep: 34,
   tempofont: {
    name: "serifBold",
    size: 12
   },
   textfont: {
    name: "serif",
    size: 16
   },
   textspace: 14,
   titlefont: {
    name: "serif",
    size: 20
   },
   titlespace: 6,
   titletrim: !0,
   topspace: 22,
   tuplets: [ 0, 0, 0, 0 ],
   vocalfont: {
    name: "serifBold",
    size: 13
   },
   vocalspace: 10,
   voicefont: {
    name: "serifBold",
    size: 13
   },
   writefields: "CMOPQsTWw",
   wordsfont: {
    name: "serif",
    size: 16
   },
   wordsspace: 5
  };
  function get_bool(e) {
   return !e || !/^(0|n|f)/i.test(e);
  }
  function get_font_scale(e) {
   var t = info_split(e);
   if (!(t.length <= 1)) {
    var n = parseFloat(t[t.length - 1]);
    isNaN(n) || n <= .5 ? syntax(1, "Bad scale value in %%font") : font_scale_tb[t[0]] = n;
   }
  }
  function set_font_fac(e) {
   var t = font_scale_tb[e.name];
   t || (t = 1.1), e.swfac = e.size * t;
  }
  function param_set_font(e, t) {
   var n, r, i, s, o;
   if ("-" == e[e.length - 2]) {
    if ((r = e[e.length - 1]) < "1" || r > "9") return;
    e = "u" + r + "font";
   }
   if ((n = cfmt[e]) || (n = {
    name: "sans-serif",
    size: 12
   }), (n = Object.create(n)).fid = n.used = void 0, cfmt[e] = n, (i = t.match(/\s+(no)?box(\s|$)/)) && (i[1] ? n.box = !1 : n.box = !0, 
   t = t.replace(i[0], i[2])), (i = t.match(/\s+class=(.*?)(\s|$)/)) && (n.class = i[1], 
   t = t.replace(i[0], i[2])), i = t.match(/\s+wadj=(.*?)(\s|$)/)) {
    if ("undefined" == typeof document) switch (i[1]) {
    case "none":
     n.wadj = "";
     break;

    case "space":
     n.wadj = "spacing";
     break;

    case "glyph":
     n.wadj = "spacingAndGlyphs";
     break;

    default:
     syntax(1, errs.bad_val, "%%" + e);
    }
    t = t.replace(i[0], i[2]);
   }
   (i = info_split(t)) ? ("*" != (s = i[0]) && (s = (s = (s = (s = s.replace("Times-Roman", "serif")).replace("Times", "serif")).replace("Helvetica", "sans-serif")).replace("Courier", "monospace"), 
   n.name = s, n.swfac = 0), i.length > 1 && "*" != (o = i[i.length - 1]) && (o = Number(o), 
   isNaN(o) ? syntax(1, errs.bad_val, "%%" + e) : (n.size = o, n.swfac = 0))) : syntax(1, errs.bad_val, "%%" + e);
  }
  function get_unit(e) {
   var t = parseFloat(e);
   switch (e.slice(-2)) {
   case "CM":
   case "cm":
    t *= CM;
    break;

   case "IN":
   case "in":
    t *= IN;
    break;

   case "PT":
   case "pt":
    t *= .75;
   }
   return t;
  }
  function set_infoname(e) {
   for (var t = cfmt.infoname.split("\n"), n = e[0], r = 0; r < t.length; r++) {
    if (t[r][0] == n) return 1 == e.length ? t.splice(r, 1) : t[r] = e, void (cfmt.infoname = t.join("\n"));
   }
   cfmt.infoname += "\n" + e;
  }
  var textopt = {
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
  var posval = {
   above: C.SL_ABOVE,
   auto: 0,
   below: C.SL_BELOW,
   down: C.SL_BELOW,
   hidden: C.SL_HIDDEN,
   opposite: C.SL_HIDDEN,
   under: C.SL_BELOW,
   up: C.SL_ABOVE
  };
  function set_pos(e, t) {
   "ste" == (e = e.slice(0, 3)) && (e = "stm"), self.set_v_param("pos", e + " " + t);
  }
  function set_writefields(e) {
   var t, n, r = e.split(/\s+/);
   if (get_bool(r[1])) for (n = 0; n < r[0].length; n++) t = r[0][n], cfmt.writefields.indexOf(t) < 0 && (cfmt.writefields += t); else for (n = 0; n < r[0].length; n++) t = r[0][n], 
   cfmt.writefields.indexOf(t) >= 0 && (cfmt.writefields = cfmt.writefields.replace(t, ""));
  }
  function set_v_param(e, t) {
   if (curvoice) self.set_vp([ e + "=", t ]); else {
    e = [ e + "=", t ];
    info.V || (info.V = {}), info.V["*"] ? Array.prototype.push.apply(info.V["*"], e) : info.V["*"] = e;
   }
  }
  function set_page() {
   img.chg && (img.chg = !1, img.lm = cfmt.leftmargin - cfmt.printmargin, img.lm < 0 && (img.lm = 0), 
   img.rm = cfmt.rightmargin - cfmt.printmargin, img.rm < 0 && (img.rm = 0), img.width = cfmt.pagewidth - 2 * cfmt.printmargin, 
   img.width - img.lm - img.rm < 100 && (error(0, void 0, "Bad staff width"), img.width = img.lm + img.rm + 150), 
   set_posx());
  }
  function set_format(e, t) {
   var n, r, i, s;
   if (/.+font(-[\d])?$/.test(e)) param_set_font(e, t); else switch (e) {
   case "aligncomposer":
   case "barsperstaff":
   case "infoline":
   case "measurefirst":
   case "measurenb":
   case "rbmax":
   case "rbmin":
   case "shiftunison":
    if (i = parseInt(t), isNaN(i)) {
     syntax(1, "Bad integer value");
     break;
    }
    cfmt[e] = i;
    break;

   case "microscale":
    if (n = parseInt(t), isNaN(n) || n < 4 || n > 256 || n % 1) {
     syntax(1, errs.bad_val, "%%" + e);
     break;
    }
    self.set_v_param("uscale", n);
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
    if (n = parseFloat(t), isNaN(n)) {
     syntax(1, errs.bad_val, "%%" + e);
     break;
    }
    switch (e) {
    case "scale":
     n /= .75;

    case "pagescale":
     e = "scale", img.chg = !0;
    }
    cfmt[e] = n;
    break;

   case "annotationbox":
   case "gchordbox":
   case "measurebox":
   case "partsbox":
    cfmt[e.replace("box", "font")].box = get_bool(t);
    break;

   case "bstemdown":
   case "breakoneoln":
   case "cancelkey":
   case "contbarnb":
   case "custos":
   case "decoerr":
   case "dynalign":
   case "flatbeams":
   case "graceslurs":
   case "graceword":
   case "hyphencont":
   case "keywarn":
   case "linewarn":
   case "rbdbstop":
   case "singleline":
   case "squarebreve":
   case "splittune":
   case "straightflags":
   case "stretchstaff":
   case "timewarn":
   case "titlecaps":
   case "titleleft":
    cfmt[e] = get_bool(t);
    break;

   case "chordnames":
    for (i = t.split(","), cfmt.chordnames = {}, s = 0; s < i.length; s++) cfmt.chordnames["CDEFGAB"[s]] = i[s];
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
    n = get_unit(t), isNaN(n) ? syntax(1, errs.bad_val, "%%" + e) : cfmt[e] = n;
    break;

   case "print-leftmargin":
    syntax(0, "$1 is deprecated - use %%printmargin instead", "%%" + e), e = "printmargin";

   case "printmargin":
   case "leftmargin":
   case "pagewidth":
   case "rightmargin":
    if (n = get_unit(t), isNaN(n)) {
     syntax(1, errs.bad_val, "%%" + e);
     break;
    }
    cfmt[e] = n, img.chg = !0;
    break;

   case "concert-score":
    "play" != cfmt.sound && (cfmt.sound = "concert");
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
     syntax(1, errs.not_in_tune, "%%fullsvg");
     break;
    }
    cfmt[e] = t;
    break;

   case "gracespace":
    for (i = t.split(/\s+/), s = 0; s < 3; s++) if (isNaN(Number(i[s]))) {
     syntax(1, errs.bad_val, "%%gracespace");
     break;
    }
    for (s = 0; s < 3; s++) cfmt[e][s] = Number(i[s]);
    break;

   case "tuplets":
    cfmt[e] = t.split(/\s+/), (i = cfmt[e][3]) && posval[i] && (cfmt[e][3] = posval[i]);
    break;

   case "infoname":
    set_infoname(t);
    break;

   case "notespacingfactor":
    if (n = parseFloat(t), isNaN(n) || n < 1 || n > 2) {
     syntax(1, errs.bad_val, "%%" + e);
     break;
    }
    for (r = space_tb[s = 5]; --s >= 0; ) r /= n, space_tb[s] = r;
    for (r = space_tb[s = 5]; ++s < space_tb.length; ) r *= n, space_tb[s] = r;
    break;

   case "play":
    cfmt.sound = "play";
    break;

   case "pos":
    set_pos((e = t.split(/\s+/))[0], e[1]);
    break;

   case "sounding-score":
    "play" != cfmt.sound && (cfmt.sound = "sounding");
    break;

   case "staffwidth":
    if (i = get_unit(t), isNaN(i)) {
     syntax(1, errs.bad_val, "%%" + e);
     break;
    }
    if (i < 100) {
     syntax(1, "%%staffwidth too small");
     break;
    }
    if ((i = cfmt.pagewidth - i - cfmt.leftmargin) < 2) {
     syntax(1, "%%staffwidth too big");
     break;
    }
    cfmt.rightmargin = i, img.chg = !0;
    break;

   case "textoption":
    cfmt[e] = get_textopt(t);
    break;

   case "titletrim":
    i = Number(t), isNaN(i) ? cfmt[e] = get_bool(t) : cfmt[e] = i;
    break;

   case "combinevoices":
    syntax(1, "%%combinevoices is deprecated - use %%voicecombine instead");
    break;

   case "voicemap":
    self.set_v_param("map", t);
    break;

   case "voicescale":
    self.set_v_param("scale", t);
    break;

   default:
    0 == parse.state && (cfmt[e] = t);
   }
  }
  function style_font(e) {
   var t = e.name, n = "", r = t.match(/-?[bB]old/);
   return r && (n += "bold ", t = t.replace(r[0], "")), (r = t.match(/-?[iI]talic/)) && (n += "italic ", 
   t = t.replace(r[0], "")), (r = t.match(/-?[oO]blique/)) && (n += "oblique ", t = t.replace(r[0], "")), 
   "font:" + n + e.size.toFixed(1) + "px " + t;
  }
  function font_class(e) {
   return e.class ? "f" + e.fid + cfmt.fullsvg + " " + e.class : "f" + e.fid + cfmt.fullsvg;
  }
  function use_font(e) {
   e.used || (e.used = !0, void 0 == e.fid && (e.fid = font_tb.length, font_tb.push(e), 
   e.swfac || set_font_fac(e)), font_style += "\n.f" + e.fid + cfmt.fullsvg + " {" + style_font(e) + "}");
  }
  function get_font(e) {
   var t = cfmt[e += "font"];
   return t || (syntax(1, "Unknown font $1", "$" + e[1]), t = gene.curfont), use_font(t), 
   t;
  }
  Abc.prototype.style_font = style_font;
  var sav = {}, abc_utf = {
   "=D": "Ä",
   "=H": "Ä¦",
   "=T": "Å¦",
   "=d": "Ä‘",
   "=h": "Ä§",
   "=t": "Å§",
   "/O": "Ã˜",
   "/o": "Ã¸",
   "/L": "Å",
   "/l": "Å‚",
   vL: "Ä½",
   vl: "Ä¾",
   vd: "Ä",
   ".i": "Ä±",
   AA: "Ã…",
   aa: "Ã¥",
   AE: "Ã†",
   ae: "Ã¦",
   DH: "Ã",
   dh: "Ã°",
   OE: "Å’",
   oe: "Å“",
   ss: "ÃŸ",
   TH: "Ãž",
   th: "Ã¾"
  }, oct_acc = {
   1: "♯",
   2: "♭",
   3: "♮",
   4: "&#x1d12a;",
   5: "&#x1d12b;"
  };
  function cnv_escape(e) {
   for (var t, n, r, i = "", s = 0; !((r = e.indexOf("\\", s)) < 0); ) {
    if (i += e.slice(s, r), !(t = e[++r])) return i + "\\";
    switch (t) {
    case "0":
    case "2":
     if ("0" != e[r + 1]) break;
     if (n = oct_acc[e[r + 2]]) {
      i += n, s = r + 3;
      continue;
     }
     break;

    case "u":
     if (s = Number("0x" + e.slice(r + 1, r + 5)), isNaN(s) || s < 32) {
      i += e[++r] + "̆", s = r + 1;
      continue;
     }
     i += String.fromCharCode(s), s = r + 5;
     continue;

    case "t":
     i += " ", s = r + 1;
     continue;

    default:
     if (n = abc_utf[e.slice(r, r + 2)]) {
      i += n, s = r + 2;
      continue;
     }
     switch (t) {
     case "`":
      i += e[++r] + "̀", s = r + 1;
      continue;

     case "'":
      i += e[++r] + "́", s = r + 1;
      continue;

     case "^":
      i += e[++r] + "̂", s = r + 1;
      continue;

     case "~":
      i += e[++r] + "̃", s = r + 1;
      continue;

     case "=":
      i += e[++r] + "̄", s = r + 1;
      continue;

     case "_":
      i += e[++r] + "̅", s = r + 1;
      continue;

     case ".":
      i += e[++r] + "̇", s = r + 1;
      continue;

     case '"':
      i += e[++r] + "̈", s = r + 1;
      continue;

     case "o":
      i += e[++r] + "̊", s = r + 1;
      continue;

     case "H":
      i += e[++r] + "̋", s = r + 1;
      continue;

     case "v":
      i += e[++r] + "̌", s = r + 1;
      continue;

     case "c":
      i += e[++r] + "̧", s = r + 1;
      continue;

     case ";":
      i += e[++r] + "̨", s = r + 1;
      continue;
     }
    }
    i += "\\" + t, s = r + 1;
   }
   return i + e.slice(s);
  }
  var include = 0;
  function do_include(e) {
   var t, n;
   user.read_file ? include > 2 ? syntax(1, "Too many include levels") : (t = user.read_file(e)) ? (include++, 
   n = clone(parse), tosvg(e, t), n.state = parse.state, parse = n, include--) : syntax(1, "Cannot read file '$1'", e) : syntax(1, "No read_file support");
  }
  function tosvg(e, t, n, r) {
   var i, s, o, a, c, l, u, f, d, p, h, m, g = "\n";
   function y() {
    var e, i, o = t.indexOf("K:", n);
    return !(o < 0) && (o = t.indexOf("\n", o), !!parse.select.test(t.slice(parse.bol, o)) || ((e = /\n\w*\n/).lastIndex = o, 
    i = e.exec(t), s = i ? e.lastIndex : r, !1));
   }
   function v(e, t) {
    return e ? (e.indexOf("%") >= 0 && (e = e.replace(/([^\\])%.*/, "$1").replace(/\\%/g, "%")), 
    e = e.replace(/\s+$/, ""), t && e.indexOf("\\") >= 0 ? cnv_escape(e) : e) : e;
   }
   function _() {
    generate(), info.W && put_words(info.W), put_history(), blk_flush(), parse.state = 0, 
    cfmt = sav.cfmt, info = sav.info, char_tb = sav.char_tb, glovar = sav.glovar, maps = sav.maps, 
    mac = sav.mac, maci = sav.maci, parse.tune_v_opts = null, parse.scores = null, init_tune(), 
    img.chg = !0, set_page();
   }
   function A(e, n) {
    var r, i;
    if ("end" != e) {
     for (n ? (parse.tune_v_opts || (parse.tune_v_opts = {}), r = parse.tune_v_opts) : (parse.voice_opts || (parse.voice_opts = {}), 
     r = parse.voice_opts), r[e] = []; i = ++s, "%" == t[i]; ) if (s = t.indexOf("\n", s), 
     t[i + 1] == l) {
      switch (i += 2, d = s < 0 ? t.slice(i) : t.slice(i, s), (p = d.match(/\S+/))[0]) {
      default:
       r[e].push(v(d, !0));
       continue;

      case "score":
      case "staves":
      case "tune":
      case "voice":
       i -= 2;
      }
      break;
     }
     s = parse.eol = i - 1;
    }
   }
   function b() {
    var e, r, i, s, o = t.indexOf("K:", n);
    for (o in o = t.indexOf("\n", o), s = t.slice(parse.bol, o), parse.tune_opts) if (parse.tune_opts.hasOwnProperty(o) && new RegExp(o).test(s)) {
     for (e = parse.tune_opts[o], r = 0; r < e.t_opts.length; r++) switch ((i = e.t_opts[r]).match(/\S+/)[0]) {
     case "score":
     case "staves":
      parse.scores || (parse.scores = []), parse.scores.push(i);
      break;

     default:
      self.do_pscom(i);
     }
     if (e = e.v_opts) for (r in e) e.hasOwnProperty(r) && (parse.tune_v_opts || (parse.tune_v_opts = {}), 
     parse.tune_v_opts[r] ? parse.tune_v_opts[r] = parse.tune_v_opts[r].concat(e[r]) : parse.tune_v_opts[r] = e[r]);
    }
   }
   for (abc2svg.modules && (abc2svg.modules.hooks.length || abc2svg.modules.g_hooks.length) && set_hooks(), 
   parse.file = t, parse.fname = e, void 0 == n && (n = 0), r || (r = t.length); n < r; n = parse.eol + 1) {
    for (((s = t.indexOf("\n", n)) < 0 || s > r) && (s = r), parse.eol = s; ;) {
     switch (t[--s]) {
     case " ":
     case "\t":
      continue;
     }
     break;
    }
    if (++s != n) {
     if (parse.istart = parse.bol = n, parse.iend = s, parse.line.index = 0, c = t[n], 
     l = t[n + 1], "%" == c) {
      if (parse.prefix.indexOf(l) < 0) continue;
      "a" == t[n + 2] && "b" == t[n + 3] && "c" == t[n + 4] && " " == t[n + 5] ? (c = t[n += 6], 
      l = t[n + 1]) : m = !0;
     } else "I" == c && ":" == l && (m = !0);
     if (m) {
      if (m = !1, n += 2, d = t.slice(n, s), !(p = d.match(/([^\s]+)\s*(.*)/)) || "%" == p[1][0]) continue;
      switch (p[1]) {
      case "abcm2ps":
      case "ss-pref":
       parse.prefix = p[2];
       continue;

      case "abc-include":
       do_include(v(p[2]));
       continue;
      }
      if ("begin" == p[1].slice(0, 5)) {
       if (h = p[1].substr(5), o = "\n" + c + l + "end" + h, (i = t.indexOf(o, s)) < 0) {
        syntax(1, "No $1 after %%$2", o.slice(1), p[1]), parse.eol = r;
        continue;
       }
       self.do_begin_end(h, v(p[2]), t.slice(s + 1, i).replace(new RegExp("^" + c + l, "gm"), "")), 
       parse.eol = t.indexOf("\n", i + 6), parse.eol < 0 && (parse.eol = r);
       continue;
      }
      switch (p[1]) {
      case "select":
       if (0 != parse.state) {
        syntax(1, errs.not_in_tune, "%%select");
        continue;
       }
       if ('"' == (a = v(d.slice(7)))[0] && (a = a.slice(1, -1)), !a) {
        delete parse.select;
        continue;
       }
       a = (a = a.replace(/\(/g, "\\(")).replace(/\)/g, "\\)"), parse.select = new RegExp(a, "m");
       continue;

      case "tune":
       if (0 != parse.state) {
        syntax(1, errs.not_in_tune, "%%tune");
        continue;
       }
       if (!(a = v(p[2]))) {
        parse.tune_opts = {};
        continue;
       }
       if ("end" == a) continue;
       for (parse.tune_opts || (parse.tune_opts = {}), parse.tune_opts[a] = f = {
        t_opts: []
       }; n = ++s, "%" == t[n]; ) if (s = t.indexOf("\n", s), t[n + 1] == l) {
        switch (n += 2, d = s < 0 ? t.slice(n) : t.slice(n, s), (p = d.match(/([^\s]+)\s*(.*)/))[1]) {
        case "tune":
         break;

        case "voice":
         A(v(p[2], !0), !0);
         continue;

        default:
         f.t_opts.push(v(d, !0));
         continue;
        }
        break;
       }
       parse.tune_v_opts && (f.v_opts = parse.tune_v_opts, parse.tune_v_opts = null), parse.eol = n - 1;
       continue;

      case "voice":
       if (0 != parse.state) {
        syntax(1, errs.not_in_tune, "%%voice");
        continue;
       }
       if (!(a = v(p[2]))) {
        parse.voice_opts = null;
        continue;
       }
       A(a);
       continue;
      }
      self.do_pscom(v(d, !0));
     } else if (":" == l && /[A-Za-z+]/.test(c)) {
      for (n += 2; ;) {
       switch (t[n]) {
       case " ":
       case "\t":
        n++;
        continue;
       }
       break;
      }
      if (d = v(t.slice(n, s), !0), "+" == c) {
       if (!u) {
        syntax(1, "+: without previous info field");
        continue;
       }
       g = " ", c = u;
      }
      switch (c) {
      case "X":
       if (0 != parse.state) {
        syntax(1, errs.ignored, c);
        continue;
       }
       if (parse.select && !y()) {
        (s = t.indexOf("\nX:", parse.eol)) < 0 && (s = r), parse.eol = s;
        continue;
       }
       sav.cfmt = clone(cfmt), cfmt.pos = clone(cfmt.pos), sav.info = clone(info, 1), sav.char_tb = clone(char_tb), 
       sav.glovar = clone(glovar), sav.maps = clone(maps, 1), sav.mac = clone(mac), sav.maci = new Int8Array(maci), 
       info.X = d, parse.state = 1, parse.tune_opts && b();
       continue;

      case "T":
       switch (parse.state) {
       case 0:
        continue;

       case 1:
        void 0 == info.T ? info.T = d : info.T += "\n" + d;
        continue;
       }
       new_block("title").text = d;
       continue;

      case "K":
       switch (parse.state) {
       case 0:
        continue;

       case 1:
        info.K = d;
       }
       do_info(c, d);
       continue;

      case "W":
       if (0 == parse.state || cfmt.writefields.indexOf(c) < 0) break;
       void 0 == info.W ? info.W = d : info.W += g + d;
       break;

      case "m":
       if (parse.state >= 2) {
        syntax(1, errs.ignored, c);
        continue;
       }
       if ((!cfmt.sound || "play" != cfmt.sound) && cfmt.writefields.indexOf(c) < 0) break;
       if (!(p = d.match(/(.*?)[= ]+(.*)/)) || !p[2]) {
        syntax(1, errs.bad_val, "m:");
        continue;
       }
       mac[p[1]] = p[2], maci[p[1].charCodeAt(0)] = 1;
       break;

      case "s":
       if (3 != parse.state || cfmt.writefields.indexOf(c) < 0) break;
       get_sym(d, " " == g);
       break;

      case "w":
       if (3 != parse.state || cfmt.writefields.indexOf(c) < 0) break;
       if (get_lyrics(d, " " == g), "\\" == d.slice(-1)) {
        g = " ", u = c;
        continue;
       }
       break;

      case "|":
       if (parse.state < 2) continue;
       parse.line.buffer = v(t.slice(n, s), !0), parse_music_line();
       continue;

      default:
       if ("ABCDFGHNOSZ".indexOf(c) >= 0) {
        if (parse.state >= 2) {
         syntax(1, errs.ignored, c);
         continue;
        }
        info[c] ? info[c] += g + d : info[c] = d;
        break;
       }
       do_info(c, d);
       continue;
      }
      g = "\n", u = c;
     } else {
      if (u = void 0, parse.state < 2) continue;
      parse.line.buffer = v(t.slice(n, s), !0), parse_music_line();
     }
    } else 1 == parse.state ? (parse.istart = n, syntax(1, "Empty line in tune header - ignored")) : parse.state >= 2 && (_(), 
    parse.select && ((s = t.indexOf("\nX:", parse.eol)) < 0 && (s = r), parse.eol = s));
   }
   include || (parse.state >= 2 && _(), parse.state = 0);
  }
  Abc.prototype.tosvg = tosvg;
  var gene, staff_tb, nstaff, tsnext, realwidth, insert_meter, spf_last, space_tb = new Float32Array([ 7, 10, 14.15, 20, 28.3, 40, 56.6, 80, 100, 120 ]), smallest_duration, dx_tb = new Float32Array([ 10, 10, 11, 13, 13 ]), hw_tb = new Float32Array([ 4.5, 5, 6, 7, 8 ]), w_note = new Float32Array([ 3.5, 3.7, 5, 6, 7 ]);
  function set_head_shift(e) {
   var t, n, r, i, s, o, a = dx_tb[e.head], c = e.stem, l = e.nhd;
   if (0 != l) {
    o = .78 * a, e.grace && (o *= .5), c >= 0 ? (n = 1, r = l + 1, s = e.notes[0].pit) : (o = -o, 
    n = l - 1, r = -1, s = e.notes[l].pit);
    var u = !1, f = 0;
    for (t = n; t != r; t += c) {
     if (i = e.notes[t].pit - s, s = e.notes[t].pit, 0 == i) {
      if (u) {
       var d = e.notes[t].shhd = e.notes[t - c].shhd + o;
       f < d && (f = d);
       continue;
      }
      if (t + c != r && s + c == e.notes[t + c].pit) {
       e.notes[t].shhd = -o, f < -o && (f = -o);
       continue;
      }
     }
     i < 0 && (i = -i), i > 3 || i >= 2 && e.head != C.SQUARE ? u = !1 : (u = !u) && (e.notes[t].shhd = o, 
     f < o && (f = o));
    }
    e.xmx = f;
   }
  }
  function acc_shift(e, t) {
   var n, r, i, s, o, a, c, l = e.length;
   for (n = l - 1; --n >= 0; ) if ((i = e[n].shhd) && !(i > 0)) for (i = t - i, o = e[n].pit, 
   r = l; --r >= 0; ) if (e[r].acc) {
    if ((a = e[r].pit) < o - 3) break;
    a > o + 3 || e[r].shac < i && (e[r].shac = i);
   }
   for (n = l; --n >= 0; ) if (c = e[n].acc) {
    for ((i = e[n].shac) || (i = (i = e[n].shhd) < 0 ? t - i : t), o = e[n].pit, r = l; --r > n; ) e[r].acc && ((a = e[r].pit) >= o + 4 && (a > o + 4 || c < 0 || e[r].acc < 0) || i > e[r].shac - 6 && (s = e[r].shac + 7) > i && (i = s));
    e[n].shac = i;
   }
  }
  function set_acc_shft() {
   var e, t, n, r, i, s, o;
   for (e = tsfirst; e; ) if (e.type != C.NOTE || e.invis) e = e.ts_next; else {
    for (i = e.st, s = e.time, r = !1, t = e; t && (t.time == s && t.type == C.NOTE && t.st == i); t = t.ts_next) if (!r) for (n = 0; n <= t.nhd; n++) if (t.notes[n].acc) {
     r = !0;
     break;
    }
    if (r) {
     for (o = dx_tb[e.head], i = {
      notes: []
     }; e != t; e = e.ts_next) i.notes = i.notes.concat(e.notes);
     sort_pitch(i), acc_shift(i.notes, o);
    } else e = t;
   }
  }
  function lkvsym(e, t) {
   e.next = t, e.prev = t.prev, e.prev ? e.prev.next = e : e.p_v.sym = e, t.prev = e;
  }
  function lktsym(e, t) {
   t ? (e.ts_next = t, e.ts_prev = t.ts_prev, e.ts_prev && (e.ts_prev.ts_next = e), 
   t.ts_prev = e) : e.ts_next = e.ts_prev = null;
  }
  function unlksym(e) {
   e.next && (e.next.prev = e.prev), e.prev ? e.prev.next = e.next : e.p_v.sym = e.next, 
   e.ts_next && (e.seqst && (e.ts_next.seqst ? (e.ts_next.shrink += e.shrink, e.ts_next.space += e.space) : (e.ts_next.seqst = !0, 
   e.ts_next.shrink = e.shrink, e.ts_next.space = e.space)), e.ts_next.ts_prev = e.ts_prev), 
   e.ts_prev && (e.ts_prev.ts_next = e.ts_next), tsfirst == e && (tsfirst = e.ts_next), 
   tsnext == e && (tsnext = e.ts_next);
  }
  function insert_clef(e, t, n) {
   var r, i = e.p_v, s = e.st;
   for (e.type == C.BAR && e.prev && e.prev.type == C.BAR && ":" != e.prev.bar_type[0] && (e = e.prev), 
   i.last_sym = e.prev, i.last_sym || (i.sym = null), i.time = e.time, (r = sym_add(i, C.CLEF)).next = e, 
   e.prev = r, r.clef_type = t, r.clef_line = n, r.st = s, r.clef_small = !0, delete r.second, 
   r.notes = [], r.notes[0] = {
    pit: e.notes[0].pit
   }, r.nhd = 0; !e.seqst; ) e = e.ts_prev;
   return lktsym(r, e), r.ts_prev.type != C.CLEF && (r.seqst = !0), r;
  }
  function set_float() {
   var e, t, n, r, i, s, o, a;
   for (r = 0; r < voice_tb.length; r++) for (n = !1, t = (e = voice_tb[r]).st, i = e.sym; i; i = i.next) {
    if (!i.floating) {
     for (;i && !i.floating; ) i = i.next;
     if (!i) break;
     n = !1;
    }
    if (i.dur) if (i.notes[0].pit >= 19) n = !1; else if (i.notes[i.nhd].pit <= 12) n = !0, 
    i.st++; else {
     for (o = 127, s = i.ts_prev; s && (s.st == t && s.v != i.v); s = s.ts_prev) s.type == C.NOTE && s.notes[0].pit < o && (o = s.notes[0].pit);
     if (127 != o) if (i.notes[i.nhd].pit > o - 3) n = !1; else {
      for (a = -127, s = i.ts_next; s && (s.st == t + 1 && s.v != i.v); s = s.ts_next) s.type == C.NOTE && s.notes[s.nhd].pit > a && (a = s.notes[s.nhd].pit);
      if (-127 != a) if (i.notes[0].pit < a + 3) n = !0, i.st++; else {
       if (o -= i.notes[i.nhd].pit, a = i.notes[0].pit - a, n) {
        if (o < a - 3) {
         n = !1;
         continue;
        }
       } else {
        if (o < a + 3) continue;
        n = !0;
       }
       i.st++;
      } else n && i.st++;
     } else n && i.st++;
    } else n && i.st++;
   }
  }
  function set_graceoffs(e) {
   var t, n, r, i, s = cfmt.gracespace[0], o = cfmt.gracespace[1], a = cfmt.gracespace[2], c = e.extra;
   for (e.prev && e.prev.type == C.BAR && (s -= 3), i = s, c.beam_st = !0; ;c = c.next) {
    for (set_head_shift(c), acc_shift(c.notes, 7), r = 0, n = c.nhd; n >= 0; n--) c.notes[n].shac > r && (r = c.notes[n].shac);
    if (i += r, c.x = i, c.nflags <= 0 && (c.beam_st = !0, c.beam_end = !0), !(t = c.next)) {
     c.beam_end = !0;
     break;
    }
    t.nflags <= 0 && (c.beam_end = !0), c.beam_end && (t.beam_st = !0, i += o / 4), 
    c.nflags <= 0 && (i += o / 4), c.y > t.y + 8 && (i -= 1.5), i += o;
   }
   return (t = e.next) && t.type == C.NOTE && (c.y >= 3 * (t.notes[t.nhd].pit - 18) ? a -= 1 : c.beam_st && c.y < 3 * (t.notes[t.nhd].pit - 18) - 4 && (a += 2)), 
   i += a;
  }
  function set_w_chs(e) {
   for (var t, n, r, i, s, o = 0, a = 0; e; e = e.ts_next) if (e.shrink && (o += e.shrink, 
   a++), e.a_gch) for (t = 0; t < e.a_gch.length; t++) if (!("g" != (n = e.a_gch[t]).type || n.y < 0)) {
    if (r && r > o + n.x) for (s = (r - o - n.x) / a; (i = i.ts_next).shrink && (i.shrink += s), 
    i != e; ) ;
    i = e, r = n.wh[0], a = 0, o = 0;
    break;
   }
  }
  function gchord_width(e, t, n) {
   var r, i, s, o = 0;
   for (s = 0; s < e.a_gch.length; s++) switch ((r = e.a_gch[s]).type) {
   case "<":
    (i = r.wh[0] + t) > n && (n = i);
    break;

   case ">":
    (i = r.wh[0] + e.wr) > o && (o = i);
   }
   return e.wr < o && (e.wr = o), n;
  }
  function set_width(e) {
   var t, n, r, i, s, o, a, c, l, u, f, d, p, h, m;
   switch (e.type) {
   case C.NOTE:
   case C.REST:
    for (e.wr = o = hw_tb[e.head], e.xmx > 0 && (e.wr += e.xmx + 4), t = e.prev; t && 0 == w_tb[t.type]; t = t.prev) ;
    if (t) switch (t.type) {
    case C.BAR:
    case C.CLEF:
    case C.KEY:
    case C.METER:
     o += 3;
    }
    for (r = 0; r <= e.nhd; r++) (i = e.notes[r].shhd) < 0 && o < 5 - i && (o = 5 - i), 
    e.notes[r].acc && o < (m = e.notes[r].shac + (e.notes[r].micro ? 5.5 : 3.5)) && (o = m);
    if (t) switch (t.type) {
    case C.BAR:
    case C.CLEF:
    case C.KEY:
    case C.METER:
     o -= 3;
    }
    if (e.a_dd && (o += deco_width(e)), e.beam_st && e.beam_end && e.stem > 0 && e.nflags > 0 && e.wr < e.xmx + 9 && (e.wr = e.xmx + 9), 
    e.dots) {
     if (void 0 == e.wl) switch (e.head) {
     case C.SQUARE:
     case C.OVALBARS:
      e.xmx += 3;
      break;

     case C.OVAL:
      e.xmx += 1;
     }
     e.wr < e.xmx + 8 && (e.wr = e.xmx + 8), e.dots >= 2 && (e.wr += 3.5 * (e.dots - 1));
    }
    if (e.trem2 && e.beam_end && o < 20 && (o = 20), a = o, t) switch (t.type) {
    case C.NOTE:
     t.stem > 0 && e.stem < 0 && a < 7 && (a = 7), (e.y > 27 && t.y > 27 || e.y < -3 && t.y < -3) && a < 6 && (a = 6), 
     t.ti1 && a < 14 && (a = 14);
     break;

    case C.CLEF:
     if (t.second || t.clef_small) break;
     a += 8;
     break;

    case C.KEY:
     a += 4;
    }
    return e.a_gch && (a = gchord_width(e, o, a)), e.a_ly && (a = ly_width(e, a)), void (t && t.type == C.GRACE ? e.wl = o - 4.5 : e.wl = a);

   case C.SPACE:
    return i = e.width / 2, e.wr = i, e.a_gch && (i = gchord_width(e, i, i)), e.a_dd && (i += deco_width(e)), 
    void (e.wl = i);

   case C.BAR:
    if (e.norepbra) break;
    switch (l = e.bar_type) {
    case "|":
     s = 5;
     break;

    default:
     for (s = 2 + 2.8 * l.length, n = 0; n < l.length; n++) switch (l[n]) {
     case "[":
     case "]":
      s += 3;
      break;

     case ":":
      s += 2;
     }
    }
    for (e.wl = s, e.next && e.next.type != C.METER ? e.wr = 7 : e.wr = 5, t = e.prev; t; t = t.prev) if (0 != w_tb[t.type]) {
     t.type == C.GRACE && (e.wl -= 8);
     break;
    }
    return e.a_dd && (e.wl += deco_width(e)), void (e.text && e.text.length < 4 && e.next && e.next.a_gch && (set_font("repeat"), 
    e.wr += strwh(e.text)[0] + 2));

   case C.CLEF:
    return e.invis ? void (e.wl = e.wr = 1) : (e.wl = e.clef_small ? 9 : 12, void (e.wr = e.clef_small ? 7 : 12));

   case C.KEY:
    if (e.wl = 3, h = 4, e.k_a_acc) for (d = p = e.k_a_acc.length, p && (f = e.k_a_acc[0].acc), 
    n = 1; n < p; n++) (c = e.k_a_acc[n]).pit > e.k_a_acc[n - 1].pit + 6 || c.pit < e.k_a_acc[n - 1].pit - 6 ? d-- : c.acc != f && (h += 3), 
    f = c.acc; else (d = e.k_sf) * (p = e.k_old_sf && (cfmt.cancelkey || 0 == d) ? e.k_old_sf : 0) >= 0 ? (d < 0 && (d = -d), 
    p < 0 && (p = -p), p > d && (d = p)) : ((d -= p) < 0 && (d = -d), h += 3);
    return void (e.wr = 5.5 * d + h);

   case C.METER:
    for (a = 0, e.x_meter = [], n = 0; n < e.a_meter.length; n++) switch ((u = e.a_meter[n]).top[0]) {
    case "C":
    case "c":
    case "o":
     e.x_meter[n] = a + 6, a += 12;
     break;

    case ".":
    case "|":
     e.x_meter[n] = e.x_meter[n - 1];
     break;

    default:
     for (s = 0, u = !u.bot || u.top.length > u.bot.length ? u.top : u.bot, r = 0; r < u.length; r++) switch (u[r]) {
     case "(":
      a += 4;

     case ")":
     case "1":
      s += 4;
      break;

     default:
      s += 12;
     }
     e.x_meter[n] = a + s / 2, a += s;
    }
    return e.wl = 0, void (e.wr = a + 6);

   case C.MREST:
    return e.wl = 6, void (e.wr = 66);

   case C.GRACE:
    return e.wl = set_graceoffs(e), e.wr = 0, void (e.a_ly && ly_width(e, a));

   case C.STBRK:
    return e.wl = e.xmx, void (e.next && e.next.type == C.CLEF ? (e.wr = 2, delete e.next.clef_small) : e.wr = 8);

   case C.CUSTOS:
    return void (e.wl = e.wr = 4);

   case C.TEMPO:
    set_font("tempo"), e.tempo_str1 && (e.tempo_wh1 = strwh(e.tempo_str1)), e.tempo_notes && (e.tempo_str0 = "= ", 
    e.tempo_ca && (e.tempo_str0 += e.tempo_ca), e.tempo && (e.tempo_str0 += e.tempo), 
    e.tempo_wh0 = strwh(e.tempo_str0)), e.tempo_str2 && (e.tempo_wh2 = strwh(e.tempo_str2));
    break;

   case C.BLOCK:
   case C.PART:
   case C.REMARK:
   case C.STAVES:
    break;

   default:
    error(2, e, "set_width - Cannot set width for symbol $1", e.type);
   }
   e.wl = e.wr = 0;
  }
  function time2space(e, t) {
   var n, r, i;
   return smallest_duration >= C.BLEN / 2 ? smallest_duration >= C.BLEN ? t /= 4 : t /= 2 : !e.next && t >= C.BLEN && (t /= 2), 
   n = t >= C.BLEN / 4 ? t < C.BLEN / 2 ? 5 : t < C.BLEN ? 6 : t < 2 * C.BLEN ? 7 : t < 4 * C.BLEN ? 8 : 9 : t >= C.BLEN / 8 ? 4 : t >= C.BLEN / 16 ? 3 : t >= C.BLEN / 32 ? 2 : t >= C.BLEN / 64 ? 1 : 0, 
   r = t - (C.BLEN / 16 / 8 << n), i = space_tb[n], 0 != r && (r < 0 ? i = space_tb[0] * t / (C.BLEN / 16 / 8) : (n >= 9 && (n = 8), 
   i += (space_tb[n + 1] - space_tb[n]) * r / t)), i;
  }
  function set_space(e) {
   var t, n, r = e.ts_prev.time, i = e.time - r;
   if (0 == i) {
    switch (e.type) {
    case C.MREST:
     return e.wl;
    }
    return 0;
   }
   if (e.ts_prev.type == C.MREST) return 71;
   for (n = time2space(e, i); !e.dur; ) {
    switch (e.type) {
    case C.BAR:
     return .9 * n - 7;

    case C.CLEF:
     return n - e.wl - e.wr;

    case C.BLOCK:
    case C.PART:
    case C.REMARK:
    case C.STAVES:
    case C.TEMPO:
     if (!(e = e.ts_next)) return n;
     continue;
    }
    break;
   }
   if (e.beam_st || (n *= .9), e.type == C.NOTE && e.nflags >= -1 && e.stem > 0) {
    var s = !0;
    for (t = e.ts_prev; t && t.time == r; t = t.ts_prev) if (t.type == C.NOTE && (t.nflags < -1 || t.stem > 0)) {
     s = !1;
     break;
    }
    if (s) {
     for (t = e.ts_next; t && t.time == e.time; t = t.ts_next) if (t.type == C.NOTE && (t.nflags < -1 || t.stem < 0)) {
      s = !1;
      break;
     }
     s && (n *= .9);
    }
   }
   return n;
  }
  function set_sp_tup(e, t) {
   var n, r = e.time, i = t.time + t.dur - r, s = time2space(e, i / e.tq0) * e.tq0 / i;
   do {
    e = e.ts_next;
   } while (!e.seqst);
   do {
    t = t.ts_next ? t.ts_next : n = add_end_bar(t);
   } while (!t.seqst);
   for (n = e; n.dur && n.dur * s < n.shrink && (s = n.shrink / n.dur), n != t; ) n = n.ts_next;
   for (;e.seqst && (e.space = (e.time - r) * s, r = e.time), e != t; ) e = e.ts_next;
  }
  function add_end_bar(e) {
   var t = {
    type: C.BAR,
    bar_type: "|",
    fname: e.fname,
    istart: e.istart,
    iend: e.iend,
    v: e.v,
    p_v: e.p_v,
    st: e.st,
    dur: 0,
    seqst: !0,
    invis: !0,
    time: e.time + e.dur,
    nhd: 0,
    notes: [ {
     pit: e.notes[0].pit
    } ],
    wl: 0,
    wr: 0,
    prev: e,
    ts_prev: e,
    shrink: e.wr + 3
   };
   return e.next = e.ts_next = t, t;
  }
  function set_allsymwidth() {
   for (var e, t, n, r, i, s = tsfirst, o = s, a = 0, c = [], l = [], u = 0; ;) {
    e = a;
    do {
     s.a_gch && !i && (i = s), self.set_width(s), void 0 == c[r = s.st] && (c[r] = 0), 
     void 0 == l[r] && (l[r] = 0), (t = c[r] + l[r] + s.wl) > e && (e = t), s = s.ts_next;
    } while (s && !s.seqst);
    if (o.shrink = e - a, u || (o.space = o.ts_prev ? set_space(o) : 0), 0 == o.shrink && 0 == o.space && o.type == C.CLEF && (delete o.seqst, 
    o.time = o.ts_prev.time), !s) break;
    for (r = 0; r < l.length; r++) l[r] = 0;
    a = e;
    do {
     c[r = o.st] = a, o.wr > l[r] && (l[r] = o.wr), o.tp0 && 1 == ++u && !n && (n = o), 
     o.te0 && u--, o = o.ts_next;
    } while (!o.seqst);
   }
   if (i && set_w_chs(i), s = n) do {
    o = s, u = 1;
    do {
     (s = s.ts_next).tp0 && u++, s.te0 && u--;
    } while (0 != u);
    set_sp_tup(o, s);
    do {
     s = s.ts_next;
    } while (s && !s.tp0);
   } while (s);
  }
  function to_rest(e) {
   e.type = C.REST, delete e.in_tuplet, delete e.sl1, delete e.sl2, delete e.a_dd, 
   delete e.a_gch, e.slur_start = e.slur_end = 0;
  }
  function set_repeat(e) {
   var t, n, r, i, s, o = e.repeat_n, a = e.repeat_k, c = e.st, l = e.v;
   if (e.repeat_n = 0, o < 0) {
    for (r = o = -o, n = e.prev; n; n = n.prev) if (n.dur) {
     if (--r <= 0) break;
    } else if (n.type == C.BAR) return void error(1, n, "Bar in repeat sequence");
    if (!n) return void error(1, e, errs.not_enough_n);
    for (s = e.time - n.time, r = a * o, t = e; t; t = t.next) if (t.dur) {
     if (--r <= 0) break;
    } else if (t.type == C.BAR) return void error(1, t, "Bar in repeat sequence");
    if (!t || !t.next) return void error(1, e, errs.not_enough_n);
    for (t = e.prev; t != n; t = t.prev) if (t.type == C.NOTE) {
     t.beam_end = !0;
     break;
    }
    for (i = a; --i >= 0; ) {
     for (r = o, e.dur && r--, t = e.ts_next; r > 0; ) t.st == c && (unlksym(t), t.v == l && t.dur && r--), 
     t = t.ts_next;
     for (to_rest(e), e.dur = e.notes[0].dur = s, e.rep_nb = -1, e.beam_st = !0, self.set_width(e), 
     e.seqst && (e.space = set_space(e)), e.head = C.SQUARE, e = t; e && (e.st != c || e.v != l || !e.dur); e = e.ts_next) ;
    }
   } else {
    for (r = o, t = e.prev.prev; t && (t.type != C.BAR && t.time != tsfirst.time || !(--r <= 0)); t = t.prev) ;
    if (t) {
     for (s = e.time - t.time, r = 1 == o ? a : o, t = e; t && !(t.type == C.BAR && --r <= 0); t = t.next) ;
     if (t) {
      if (r = a, 2 == o && r > 1) {
       if (!(t = t.next)) return void error(1, e, errs.not_enough_m);
       t.repeat_n = o, t.repeat_k = --r;
      }
      if (s /= o, 2 == o) {
       for (n = e, t = e.ts_next; ;t = t.ts_next) if (t.st == c) {
        if (t.v == l && t.type == C.BAR) break;
        unlksym(t);
       }
       for (to_rest(n), n.dur = n.notes[0].dur = s, n.invis = !0, n.seqst && (n.space = set_space(n)), 
       t.bar_mrep = 2, t.seqst && (t.space = set_space(t)), t = (n = t.next).ts_next; ;t = t.ts_next) if (t.st == c) {
        if (t.v == l && t.type == C.BAR) break;
        unlksym(t);
       }
       return to_rest(n), n.dur = n.notes[0].dur = s, n.invis = !0, self.set_width(n), 
       n.seqst && (n.space = set_space(n)), void (t.seqst && (t.space = set_space(t)));
      }
      for (n = e, i = a; --i >= 0; ) {
       for (t = n.ts_next; ;t = t.ts_next) if (t.st == c) {
        if (t.v == l && t.type == C.BAR) break;
        unlksym(t);
       }
       if (to_rest(n), n.dur = n.notes[0].dur = s, n.beam_st = !0, n.seqst && (n.space = set_space(n)), 
       t.seqst && (t.space = set_space(t)), 1 == a) {
        n.rep_nb = 1;
        break;
       }
       n.rep_nb = a - i + 1, n = t.next;
      }
     } else error(1, e, errs.not_enough_m);
    } else error(1, e, errs.not_enough_m);
   }
  }
  function custos_add(e) {
   for (var t, n, r, i = e; i.type != C.NOTE; ) if (!(i = i.next)) return;
   for ((t = e.p_v).last_sym = e.prev, t.time = e.time, (n = sym_add(t, C.CUSTOS)).next = e, 
   e.prev = n, lktsym(n, e), n.seqst = !0, n.shrink = e.shrink, n.shrink < 12 && (n.shrink = 12), 
   n.space = i.space, n.wl = 0, n.wr = 4, n.nhd = i.nhd, n.notes = [], r = 0; r < e.notes.length; r++) n.notes[r] = {
    pit: i.notes[r].pit,
    shhd: 0,
    dur: C.BLEN / 4
   };
   n.stemless = !0;
  }
  function set_nl(e, t) {
   var n, r, i;
   function s(e) {
    cfmt.custos && 1 == voice_tb.length && custos_add(e), e.nl = !0;
   }
   function o(e) {
    if (!e.next) return s(e), e;
    for (e = e.ts_next; e; e = e.ts_next) if (e.seqst) {
     s(e);
     break;
    }
    return e;
   }
   for (;e; ) {
    if (!e.ts_next) return;
    if (e.ts_next.seqst) break;
    e = e.ts_next;
   }
   if (cfmt.keywarn || cfmt.timewarn) for (n = e.ts_next; n; n = n.ts_next) {
    switch (n.type) {
    case C.BAR:
    case C.CLEF:
     continue;

    case C.KEY:
     if (!cfmt.keywarn) continue;

    case C.METER:
     if (n.type == C.METER && !cfmt.timewarn) continue;
     if ((r = n.ts_prev) == e) {
      e = n;
      continue;
     }
     for (unlksym(n), lktsym(n, e.ts_next), e = n; ;) if ((n = n.ts_prev).v == e.v) {
      e.next = n.next, e.prev = n, e.next.prev = e, n.next = e;
      break;
     }
     e.type != e.ts_prev.type ? e.seqst || (e.seqst = !0, e.shrink = e.wl + e.prev.wr, 
     e.space = e.ts_next.space, e.ts_next.space = 0) : delete e.seqst, n = r;
     continue;
    }
    if (w_tb[n.type]) break;
   }
   if (t) return o(e);
   switch (e.type) {
   case C.CLEF:
   case C.BAR:
   case C.STAVES:
    break;

   case C.GRACE:
    if (!(e = e.next)) return e;

   default:
    return o(e);
   }
   for (;e && (!e.seqst || e.type == C.CLEF); e = e.ts_prev) ;
   for (i = 0; ;e = e.ts_next) {
    if (!e) return e;
    if (e.seqst) {
     if (i < 0) break;
     switch (e.type) {
     case C.STAVES:
      if (e.ts_prev && e.ts_prev.type == C.BAR) break;
      for (;e.ts_next && (0 == w_tb[e.ts_next.type] || e.ts_next.type == C.CLEF); ) e = e.ts_next;
      if (!e.ts_next || e.ts_next.type != C.BAR) continue;
      e = e.ts_next;

     case C.BAR:
      if (i) break;
      i = 1;
      continue;

     case C.STBRK:
      e.stbrk_forced ? i = -1 : unlksym(e);
      continue;

     case C.CLEF:
      if (i) break;
      continue;

     default:
      if (!i || e.prev && e.prev.type == C.GRACE) continue;
     }
     break;
    }
   }
   return s(e), e;
  }
  function get_ck_width() {
   var e = voice_tb[0];
   return self.set_width(e.clef), self.set_width(e.key), self.set_width(e.meter), [ e.clef.wl + e.clef.wr + e.key.wl + e.key.wr, e.meter.wl + e.meter.wr ];
  }
  function get_width(e, t) {
   var n, r, i = 0, s = 1 - cfmt.maxshrink;
   do {
    if (e.seqst && (n = e.shrink, (r = e.space) < n ? i += n : i += n * cfmt.maxshrink + r * s, 
    e.x = i), e == t) break;
    e = e.ts_next;
   } while (e);
   return i;
  }
  function set_lines(e, t, n, r) {
   for (var i, s, o, a, c, l, u, f, d, p; t && !t.eoln; t = t.ts_next) ;
   for (f = get_width(e, t) + r; ;) {
    if ((d = Math.ceil(f / n)) <= 1) return t && (t = set_nl(t)), t;
    for (s = i = e, u = (c = e.x - e.shrink - r) + n, l = c + f / d, c += f / d * cfmt.breaklimit, 
    e = e.ts_next; e != t && !(e.x && (e.type == C.BAR && (s = e), e.x >= c)); e = e.ts_next) ;
    if (e == t) return t && (t = set_nl(t)), t;
    for (p = !1, o = null; e != t; e = e.ts_next) if (a = e.x) {
     if (a > u) break;
     if (e.type == C.BAR) {
      if (!(a < l)) {
       (!o || a - l < l - o.x) && (o = e);
       break;
      }
      o = e;
     }
    }
    if (o && (e = o, p = !0), !p) {
     var h = 0, m = s.time;
     for (u -= 8, e = s, o = null; e != t; e = e.ts_next) if (e.beam_st && h++, e.beam_end && h > 0 && h--, 
     a = e.x) {
      if (a + e.wr >= u) break;
      if (!h && !e.in_tuplet) if ((e.time - m) % (C.BLEN / 4) != 0) {
       if (o && !(e.x < l)) {
        if (o > l) break;
        if (l - o.x < e.x - l) break;
        o = e;
        break;
       }
       o = e;
      } else o = e;
     }
     o && (e = o, p = !0);
    }
    if (!p) {
     for (o = e = s; e != t; e = e.ts_next) if (a = e.x) {
      if (!(e.x < l)) {
       if (o > l) break;
       if (l - o.x < e.x - l) break;
       o = e;
       break;
      }
      o = e;
     }
     e = o;
    }
    if (e.nl) for (error(0, e, "Line split problem - adjust maxshrink and/or breaklimit"), 
    d = 2, e = e.ts_next; e != t && !(e.x && --d <= 0); e = e.ts_next) ;
    if (!(e = set_nl(e)) || t && e.time >= t.time) break;
    f -= e.x - i.x, r = 0;
   }
   return e;
  }
  function cut_tune(e, t) {
   var n, r, i, s, o, a = tsfirst;
   if (0 != t && (e -= i = set_indent(), t -= i), e -= (i = get_ck_width())[0], t += i[1], 
   cfmt.custos && 1 == voice_tb.length && (e -= 12), cfmt.barsperstaff) for (i = cfmt.barsperstaff, 
   n = a; n; n = n.ts_next) n.type != C.BAR || !n.bar_num || --i > 0 || (n.eoln = !0, 
   i = cfmt.barsperstaff);
   for (s = t, o = e * cfmt.maxshrink, n = a; a; a = a.ts_next) if (a.seqst || a.eoln) {
    if ((s += a.shrink) > o) n = set_lines(n, a, e, t); else {
     if (!a.eoln) continue;
     if (delete a.eoln, a.dur) for (r = a.ts_next; r && !r.seqst; r = r.ts_next) if (r.dur < a.dur) {
      a = a.next ? a.next.ts_prev : n = null;
      break;
     }
     a && (n = set_nl(a, !0));
    }
    if (!n) break;
    n.ts_prev ? (s = n.shrink, a = n.ts_prev, t = 0) : delete n.nl;
   }
  }
  function set_yval(e) {
   switch (e.type) {
   case C.CLEF:
    if (e.second || e.invis) {
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

   case C.KEY:
    e.k_sf > 2 ? e.ymx = 34 : e.k_sf > 0 ? e.ymx = 30 : e.ymx = 26, e.ymn = -2;
    break;

   default:
    e.ymx = 24, e.ymn = 0;
   }
  }
  function set_ottava() {
   var e, t, n, r, i = nstaff + 1, s = new Int16Array(new Array(2 * i)), o = new Int8Array(new Array(i));
   function a(e, t, n) {
    deco_cnv([ (n ? [ "15mb(", "8vb(", null, "8va(", "15ma(" ] : [ "15mb)", "8vb)", null, "8va)", "15ma)" ])[2 + t] ], e);
   }
   for (t = 0; t <= nstaff; t++) s[t] = 0, o[t] = 0;
   for (e = tsfirst; e; e = e.ts_next) switch (t = e.st, void 0 != e.ottava && (e.ottava ? 0 == o[t]++ && (a(e, e.ottava, !0), 
   s[t] = 7 * -e.ottava) : 0 == --o[t] && (a(e, -s[t] / 7), s[t] = 0)), e.type) {
   case C.REST:
    if (1 == voice_tb.length) break;

   case C.NOTE:
    if (0 != (n = s[t]) && !e.p_v.key.k_drum) for (i = e.nhd; i >= 0; i--) (r = e.notes[i]).opit = r.pit, 
    r.pit += n;
   }
  }
  function set_auto_clef(e, t, n) {
   var r, i, s, o, a, c;
   for (s = 12, i = 20, r = t; r && (r.type != C.STAVES || r == t); r = r.ts_next) if (r.st == e) if (r.type == C.NOTE) r.notes[0].pit < i ? i = r.notes[0].pit : r.notes[r.nhd].pit > s && (s = r.notes[r.nhd].pit); else if (r.type == C.CLEF) {
    if ("a" != r.clef_type) break;
    unlksym(r);
   }
   if (i >= 19 || i >= 13 && "b" != n) return "t";
   if (s <= 13 || s <= 19 && "t" != n) return "b";
   "a" == n && (n = (s + i) / 2 >= 16 ? "t" : "b");
   var l = n, u = r, f = null;
   for (r = t; r != u && (r.type != C.STAVES || r == t); r = r.ts_next) if (r.st == e && r.type == C.NOTE) {
    if (o = r.time, "t" == l) {
     if (r.notes[0].pit > 12 || r.notes[r.nhd].pit > 20) {
      r.notes[0].pit > 20 && (f = r);
      continue;
     }
     if ((a = r.ts_prev) && a.time == o && a.st == e && a.type == C.NOTE && a.notes[0].pit >= 19) continue;
     if ((a = r.ts_next) && a.st == e && a.time == o && a.type == C.NOTE && a.notes[0].pit >= 19) continue;
    } else {
     if (r.notes[0].pit < 12 || r.notes[r.nhd].pit < 20) {
      r.notes[r.nhd].pit < 12 && (f = r);
      continue;
     }
     if ((a = r.ts_prev) && a.time == o && a.st == e && a.type == C.NOTE && a.notes[0].pit <= 13) continue;
     if ((a = r.ts_next) && a.st == e && a.time == o && a.type == C.NOTE && a.notes[0].pit <= 13) continue;
    }
    if (f) {
     for (c = r, a = r.ts_prev; a != f; a = a.ts_prev) if (a.st == e) {
      if (a.type == C.BAR && a.v == r.v) {
       c = ":" != a.bar_type[0] ? a : a.next;
       break;
      }
      a.type == C.NOTE && a.beam_st && !a.p_v.second && (c = a);
     }
     c.time != f.time ? (f = r, (a = insert_clef(c, l = "t" == l ? "b" : "t", "t" == l ? 2 : 4)).clef_auto = !0) : f = r;
    } else l = n = "t" == l ? "b" : "t", f = r;
   }
   return n;
  }
  function set_clefs() {
   var e, t, n, r, i, s, o, a, c, l = new Array(nstaff), u = cur_sy, f = [];
   for (staff_tb = new Array(nstaff), n = 0; n <= nstaff; n++) l[n] = {
    autoclef: !0
   }, staff_tb[n] = {
    output: "",
    sc_out: ""
   };
   for (r = 0; r < voice_tb.length; r++) i = voice_tb[r], u.voices[r].range < 0 || (n = u.voices[r].st, 
   u.voices[r].second || (void 0 != i.staffnonote && (u.staves[n].staffnonote = i.staffnonote), 
   i.staffscale && (u.staves[n].staffscale = i.staffscale), u.voices[r].sep && (u.staves[n].sep = u.voices[r].sep), 
   u.voices[r].maxsep && (u.staves[n].maxsep = u.voices[r].maxsep)), u.voices[r].second || i.clef.clef_auto || (l[n].autoclef = !1));
   for (r = 0; r < voice_tb.length; r++) i = voice_tb[r], u.voices[r].range < 0 || u.voices[r].second || (n = u.voices[r].st, 
   e = i.clef, l[n].autoclef && (e.clef_type = set_auto_clef(n, tsfirst, e.clef_type), 
   e.clef_line = "t" == e.clef_type ? 2 : 4), l[n].clef = staff_tb[n].clef = e);
   for (n = 0; n <= u.nstaff; n++) f[n] = 3 * (u.staves[n].stafflines.length - 1);
   for (e = tsfirst; e; e = e.ts_next) {
    switch (e.repeat_n && set_repeat(e), e.type) {
    case C.STAVES:
     for (u = e.sy, n = 0; n <= nstaff; n++) l[n].autoclef = !0;
     for (r = 0; r < voice_tb.length; r++) u.voices[r].range < 0 || (i = voice_tb[r], 
     n = u.voices[r].st, u.voices[r].second || (void 0 != i.staffnonote && (u.staves[n].staffnonote = i.staffnonote), 
     i.staffscale && (u.staves[n].staffscale = i.staffscale), u.voices[r].sep && (u.staves[n].sep = u.voices[r].sep), 
     u.voices[r].maxsep && (u.staves[n].maxsep = u.voices[r].maxsep)), (t = i.clef).clef_auto || (l[n].autoclef = !1));
     for (n = 0; n <= u.nstaff; n++) f[n] = 3 * (u.staves[n].stafflines.length - 1);
     for (r = 0; r < voice_tb.length; r++) if (!(u.voices[r].range < 0 || u.voices[r].second)) if (i = voice_tb[r], 
     n = u.voices[r].st, (t = i.clef).clef_auto ? a = "t" == (o = set_auto_clef(n, e, l[n].clef ? l[n].clef.clef_type : "a")) ? 2 : 4 : (o = t.clef_type, 
     a = t.clef_line), l[n].clef) {
      if (o != l[n].clef.clef_type || a != l[n].clef.clef_line) {
       for (s = e.ts_prev; s && s.time == e.time && (s.v != r || s.st != n); ) s = s.ts_prev;
       if (!s || s.time != e.time) {
        for (s = e.ts_next; s && (s.v != r || s.st != n); ) s = s.ts_next;
        s && s.time == e.time || (s = e);
       }
       s.type != C.CLEF && (s = insert_clef(s, o, a), t.clef_auto && (s.clef_auto = !0)), 
       l[n].clef = i.clef = s;
      }
     } else t.clef_auto && ("a" != t.type && (i.clef = clone(i.clef)), i.clef.clef_type = o, 
     i.clef.clef_line = a), staff_tb[n].clef = l[n].clef = i.clef;
     continue;

    default:
     e.mid = f[e.st];
     continue;

    case C.CLEF:
    }
    if ("a" == e.clef_type && (e.clef_type = set_auto_clef(e.st, e.ts_next, l[e.st].clef.clef_type), 
    e.clef_line = "t" == e.clef_type ? 2 : 4), (i = e.p_v).clef = e, e.second) unlksym(e); else {
     if (l[n = e.st].clef) {
      if (e.clef_type == l[n].clef.clef_type && e.clef_line == l[n].clef.clef_line) continue;
     } else staff_tb[n].clef = e;
     l[n].clef = e;
    }
   }
   for (u = cur_sy, r = 0; r < voice_tb.length; r++) if (!(u.voices[r].range < 0) && (t = voice_tb[r].sym) && 127 == t.notes[0].pit) {
    switch (n = u.voices[r].st, staff_tb[n].clef.clef_type) {
    default:
     c = 22;
     break;

    case "c":
     c = 16;
     break;

    case "b":
     c = 10;
    }
    for (e = t; e; e = e.next) e.notes[0].pit = c;
   }
  }
  var delta_tb = {
   t: -4,
   c: 0,
   b: 4,
   p: -6
  }, rest_sp = [ [ 18, 18 ], [ 12, 18 ], [ 12, 12 ], [ 0, 12 ], [ 6, 8 ], [ 10, 10 ], [ 6, 4 ], [ 10, 0 ], [ 10, 4 ], [ 10, 10 ] ];
  function set_pitch(e) {
   var t, n, r, i, s = C.BLEN, o = nstaff + 1, a = new Int16Array(new Array(2 * o));
   for (r = 0; r <= nstaff; r++) t = staff_tb[r].clef, a[r] = delta_tb[t.clef_type] + 2 * t.clef_line, 
   t.clefpit && (a[r] += t.clefpit), cfmt.sound ? t.clef_octave && !t.clef_oct_transp && (a[r] += t.clef_octave) : t.clef_oct_transp && (a[r] -= t.clef_octave);
   for (t = tsfirst; t != e; t = t.ts_next) switch (r = t.st, t.type) {
   case C.CLEF:
    a[r] = delta_tb[t.clef_type] + 2 * t.clef_line, t.clefpit && (a[r] += t.clefpit), 
    cfmt.sound ? t.clef_octave && !t.clef_oct_transp && (a[r] += t.clef_octave) : t.clef_oct_transp && (a[r] -= t.clef_octave), 
    set_yval(t);
    break;

   case C.GRACE:
    for (n = t.extra; n; n = n.next) {
     if (0 != (i = a[n.st]) && !t.p_v.key.k_drum) for (o = 0; o <= n.nhd; o++) n.notes[o].pit += i;
     n.ymn = 3 * (n.notes[0].pit - 18) - 2, n.ymx = 3 * (n.notes[n.nhd].pit - 18) + 2;
    }
    set_yval(t);
    break;

   case C.KEY:
    t.k_y_clef = a[r];

   default:
    set_yval(t);
    break;

   case C.MREST:
    if (t.invis) break;
    t.y = 12, t.ymx = 39, t.ymn = -2;
    break;

   case C.REST:
    if (1 == voice_tb.length) {
     t.y = 12, t.ymx = 24, t.ymn = 0;
     break;
    }

   case C.NOTE:
    if (0 != (i = a[r]) && !t.p_v.key.k_drum) for (o = t.nhd; o >= 0; o--) t.notes[o].opit = t.notes[o].pit, 
    t.notes[o].pit += i;
    t.type == C.NOTE ? (t.ymx = 3 * (t.notes[t.nhd].pit - 18) + 4, t.ymn = 3 * (t.notes[0].pit - 18) - 4) : (t.y = 6 * ((t.notes[0].pit - 18) / 2 | 0), 
    t.ymx = t.y + rest_sp[5 - t.nflags][0], t.ymn = t.y - rest_sp[5 - t.nflags][1]), 
    t.dur < s && (s = t.dur);
   }
   e || (smallest_duration = s);
  }
  function set_stem_dir() {
   for (var e, t, n, r, i, s, o, a, c, l, u = [], f = tsfirst, d = cur_sy, p = d.nstaff; f; ) {
    for (r = 0; r <= p; r++) u[r] = [];
    for (l = [], t = f; t && t.type != C.BAR; t = t.ts_next) if (t.type != C.STAVES) {
     if (!(t.type != C.NOTE && t.type != C.REST || t.invis)) {
      if ((r = t.st) > p) {
       var h = "*** fatal set_stem_dir(): bad staff number " + r + " max " + p;
       throw error(2, null, h), new Error(h);
      }
      for ((o = l[s = t.v]) || (o = {
       st1: -1,
       st2: -1
      }, l[s] = o), o.st1 < 0 ? o.st1 = r : o.st1 != r && (r > o.st1 ? r > o.st2 && (o.st2 = r) : (o.st1 > o.st2 && (o.st2 = o.st1), 
      o.st1 = r)), a = u[r], i = d.voices[s].range, n = a.length; --n >= 0 && (c = a[n]).v != i; ) ;
      if (n < 0) {
       for (c = {
        v: i,
        ymx: 0,
        ymn: 24
       }, n = 0; n < a.length; n++) if (i < a[n].v) {
        a.splice(n, 0, c);
        break;
       }
       n == a.length && a.push(c);
      }
      t.type == C.NOTE && (t.ymx > c.ymx && (c.ymx = t.ymx), t.ymn < c.ymn && (c.ymn = t.ymn), 
      t.xstem && (t.ts_prev.st != r - 1 || t.ts_prev.type != C.NOTE ? (error(1, f, "Bad !xstem!"), 
      t.xstem = !1) : (t.ts_prev.multi = 1, t.multi = 1, t.stemless = !0)));
     }
    } else {
     if (t != f) break;
     for (d = f.sy, r = p; r <= d.nstaff; r++) u[r] = [];
     p = d.nstaff;
    }
    for (;f != t; f = f.ts_next) if (!f.multi) {
     switch (f.type) {
     default:
      continue;

     case C.REST:
      if (void 0 != f.combine && f.combine < 0 || !f.ts_next || f.ts_next.type != C.REST || f.ts_next.st != f.st || f.time != f.ts_next.time || f.dur != f.ts_next.dur || f.a_gch && f.ts_next.a_gch || f.invis) break;
      f.ts_next.a_gch && (f.a_gch = f.ts_next.a_gch), unlksym(f.ts_next);
      break;

     case C.NOTE:
     case C.GRACE:
     }
     if (r = f.st, o = l[s = f.v], a = u[r], o && o.st2 >= 0) r == o.st1 ? f.multi = -1 : r == o.st2 && (f.multi = 1); else if (a.length <= 1) f.floating && (f.multi = r == voice_tb[s].st ? -1 : 1); else {
      for (i = d.voices[s].range, n = a.length; --n >= 0 && a[n].v != i; ) ;
      n < 0 || (n == a.length - 1 ? f.multi = -1 : (f.multi = 1, 0 != n && n + 2 == a.length && (a[n].ymn - cfmt.stemheight > a[n + 1].ymx && (f.multi = -1), 
      e = f.ts_next, f.ts_prev && f.ts_prev.time == f.time && f.ts_prev.st == f.st && f.notes[f.nhd].pit == f.ts_prev.notes[0].pit && f.beam_st && f.beam_end && (!e || e.st != f.st || e.time != f.time) && (f.multi = -1))));
     }
    }
    for (;f && f.type == C.BAR; ) f = f.ts_next;
   }
  }
  function set_rest_offset() {
   var e, t, n, r, i, s, o, a, c, l, u, f = [], d = cur_sy;
   for (e = tsfirst; e; e = e.ts_next) if (!e.invis && (e.type == C.STAVES && (d = e.sy), 
   e.dur && ((s = f[e.v]) || (s = {}, f[e.v] = s), s.s = e, s.st = e.st, s.end_time = e.time + e.dur, 
   e.type == C.REST))) {
    for (a = -127, o = 127, i = l = !1, n = 0; n <= f.length; n++) (s = f[n]) && s.s && s.st == e.st && n != e.v && (s.end_time <= e.time || (i = !0, 
    t = s.s, d.voices[n].range < d.voices[e.v].range ? t.time == e.time ? t.ymn < o && (o = t.ymn, 
    t.dots && (l = !0)) : t.y < o && (o = t.y) : t.time == e.time ? t.ymx > a && (a = t.ymx, 
    t.dots && (l = !0)) : t.y > a && (a = t.y)));
    for (r = e.time + e.dur, t = e.ts_next; t && !(t.time >= r); t = t.ts_next) t.st == e.st && t.dur && !t.invis && (i = !0, 
    d.voices[t.v].range < d.voices[e.v].range ? t.time == e.time ? t.ymn < o && (o = t.ymn, 
    t.dots && (l = !0)) : t.y < o && (o = t.y) : t.time == e.time ? t.ymx > a && (a = t.ymx, 
    t.dots && (l = !0)) : t.y > a && (a = t.y));
    if (i) if (127 == o && e.y < 12 && (c = 12 - e.y, e.y += c, e.ymx += c, e.ymn += c), 
    -127 == a && e.y > 12 && (c = e.y - 12, e.y -= c, e.ymx -= c, e.ymn -= c), (c = o - e.ymx) < 0) {
     if (c = 6 * Math.ceil(-c / 6), e.ymn - c >= a) {
      e.y -= c, e.ymx -= c, e.ymn -= c;
      continue;
     }
     u = l ? 15 : 10, e.notes[0].shhd = u, e.xmx = u;
    } else if ((c = a - e.ymn) > 0) {
     if (c = 6 * Math.ceil(c / 6), e.ymx + c <= o) {
      e.y += c, e.ymx += c, e.ymn += c;
      continue;
     }
     u = l ? 15 : 10, e.notes[0].shhd = u, e.xmx = u;
    } else ; else e.y = 12, e.ymx = 24, e.ymn = 0;
   }
  }
  function new_sym(e, t, n) {
   var r = {
    type: e,
    fname: n.fname,
    v: t.v,
    p_v: t,
    st: t.st,
    time: n.time,
    next: t.last_sym.next
   };
   return r.next && (r.next.prev = r), t.last_sym.next = r, r.prev = t.last_sym, t.last_sym = r, 
   lktsym(r, n), r.ts_prev.type != e && (r.seqst = !0), n.type == e && r.v != n.v && (delete n.seqst, 
   n.shrink = 0), r;
  }
  function init_music_line() {
   var e, t, n, r, i, s, o, a, c = voice_tb.length;
   for (i = 0; i < c; i++) if (!(cur_sy.voices[i].range < 0)) {
    for ((e = voice_tb[i]).second = cur_sy.voices[i].second, e.last_sym = e.sym, s = cur_sy.voices[i].st; s < nstaff && !cur_sy.st_print[s]; ) s++;
    e.st = s;
   }
   for (r = tsfirst; r && r.type == C.CLEF; ) i = r.v, cur_sy.voices[i].range >= 0 && !cur_sy.voices[i].second && (delete r.clef_small, 
   (e = r.p_v).last_sym = e.sym = r), r = r.ts_next;
   for (i = 0; i < c; i++) (e = voice_tb[i]).sym && e.sym.type == C.CLEF || cur_sy.voices[i].range < 0 || cur_sy.voices[i].second && !e.bar_start || (s = cur_sy.voices[i].st, 
   staff_tb[s] && staff_tb[s].clef && ((t = clone(staff_tb[s].clef)).v = i, t.p_v = e, 
   t.st = s, t.time = tsfirst.time, t.prev = null, t.next = e.sym, t.next && (t.next.prev = t), 
   e.sym = t, e.last_sym = t, t.ts_next = r, t.ts_prev = r ? r.ts_prev : null, t.ts_prev ? (t.ts_prev.ts_next = t, 
   delete t.seqst) : (tsfirst = t, t.seqst = !0), r && (r.ts_prev = t, r.type == C.CLEF && delete r.seqst), 
   delete t.clef_small, t.second = cur_sy.voices[i].second, cur_sy.st_print[s] || (t.invis = !0)));
   for (i = 0; i < c; i++) cur_sy.voices[i].range < 0 || cur_sy.voices[i].second || !cur_sy.st_print[cur_sy.voices[i].st] || (e = voice_tb[i], 
   r && r.v == i && r.type == C.KEY ? (e.last_sym = r, r.k_old_sf = r.k_sf, r = r.ts_next) : ((n = e.key).k_sf || n.k_a_acc) && ((t = new_sym(C.KEY, e, r)).k_sf = n.k_sf, 
   t.k_old_sf = n.k_sf, t.k_none = n.k_none, t.k_a_acc = n.k_a_acc, t.istart = n.istart, 
   t.iend = n.iend, n.k_bagpipe && (t.k_bagpipe = n.k_bagpipe, "p" == t.k_bagpipe && (t.k_old_sf = 3))));
   if (1 & insert_meter) {
    for (i = 0; i < c; i++) n = (e = voice_tb[i]).meter, cur_sy.voices[i].range < 0 || cur_sy.voices[i].second || !cur_sy.st_print[cur_sy.voices[i].st] || 0 == n.a_meter.length || (r && r.v == i && r.type == C.METER ? (e.last_sym = r, 
    r = r.ts_next) : ((t = new_sym(C.METER, e, r)).istart = n.istart, t.iend = n.iend, 
    t.wmeasure = n.wmeasure, t.a_meter = n.a_meter));
    insert_meter &= -2;
   }
   for (i = 0; i < c; i++) n = (e = voice_tb[i]).bar_start, e.bar_start = null, r && r.v == i && r.type == C.BAR ? (e.last_sym = r, 
   r = r.ts_next) : n && (cur_sy.voices[i].range < 0 || !cur_sy.st_print[cur_sy.voices[i].st] || (n.next = e.last_sym.next, 
   n.next && (n.next.prev = n), e.last_sym.next = n, n.prev = e.last_sym, e.last_sym = n, 
   lktsym(n, r), n.time = tsfirst.time, n.ts_prev.type != n.type && (n.seqst = !0), 
   r && r.type == n.type && n.v != r.v && delete r.seqst));
   for (self.set_pitch(r), t = tsfirst; ;) {
    n = t, a = 0;
    do {
     self.set_width(t), o = t.wl, t.prev && (o += t.prev.wr), o > a && (a = o), t = t.ts_next;
    } while (t != r && !t.seqst);
    if (n.shrink = a, n.space = 0, t == r) break;
   }
   if (t) {
    o = 0;
    do {
     self.set_width(t), o < t.wl && (o = t.wl), t = t.ts_next;
    } while (t && !t.seqst);
    r.shrink = n.wr + o;
   }
  }
  function set_words(e) {
   var t, n, r, i, s, o = !0, a = 127;
   for (t = e.sym; t; t = t.next) if (t.type == C.NOTE) {
    a = t.notes[0].pit;
    break;
   }
   for (t = e.sym; t; t = t.next) {
    switch (t.type) {
    case C.MREST:
     o = !0;
     break;

    case C.BAR:
     t.bar_type = bar_cnv(t.bar_type), t.beam_on || (o = !0), !t.next && t.prev && t.prev.head == C.OVALBARS && (t.prev.head = C.SQUARE);
     break;

    case C.NOTE:
    case C.REST:
     if (s = identify_note(t, t.dur_orig), t.head = s[0], t.dots = s[1], t.nflags = s[2], 
     t.nflags <= -2 && (t.stemless = !0), t.xstem && (t.nflags = 0), t.trem1 && (t.nflags > 0 ? t.nflags += t.ntrem : t.nflags = t.ntrem), 
     t.next && t.next.trem2) break;
     if (t.trem2) {
      t.prev.trem2 = !0, t.prev.nflags = --t.nflags, t.prev.head = ++t.head, t.nflags > 0 ? t.nflags += t.ntrem : (t.nflags <= -2 && (t.stemless = !0, 
      t.prev.stemless = !0), t.nflags = t.ntrem), t.prev.nflags = t.nflags;
      break;
     }
     r = t.nflags, t.ntrem && (r += t.ntrem), t.type == C.REST && t.beam_end && (t.beam_end = !1, 
     o = !0), (o || r <= 0) && (i && (i.beam_end = !0, i = null), r <= 0 ? (t.beam_st = !0, 
     t.beam_end = !0) : t.type == C.NOTE && (t.beam_st = !0, o = !1)), t.beam_end && (o = !0), 
     t.type == C.NOTE && (i = t);
    }
    if (t.type == C.NOTE) for (0 != t.nhd && sort_pitch(t), a = t.notes[0].pit, n = t.prev; n && n.type == C.REST; n = n.prev) n.notes[0].pit = a; else t.notes || (t.notes = [], 
    t.notes[0] = {}, t.nhd = 0), t.notes[0].pit = a;
   }
   i && (i.beam_end = !0);
  }
  function set_rb(e) {
   for (var t, n, r, i = e.sym; i; ) if (i.type == C.BAR && i.rbstart && !i.norepbra) {
    if (n = cfmt.rbmax, i.text && "1" == i.text[0]) {
     for (r = 0, t = null, i = i.next; i; i = i.next) if (i.type == C.BAR) {
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
     for (r = 0, t = null, i = i.next; i; i = i.next) if (i.type == C.BAR) {
      if (r++, i.rbstop) break;
      i.next ? r == n && (i.rbstop = 1) : i.rbstop = 2;
     }
    }
   } else i = i.next;
  }
  var delpit = [ 0, -7, -14, 0 ];
  function set_global() {
   var e, t, n, r, i;
   for (t = (i = cur_sy).nstaff; i = i.next; ) i.nstaff > t && (t = i.nstaff);
   for (nstaff = t, r = voice_tb.length, n = 0; n < r; n++) set_words(e = voice_tb[n]), 
   set_rb(e);
   set_float(), glovar.ottava && "play" != cfmt.sound && set_ottava(), set_clefs(), 
   self.set_pitch(null);
  }
  function set_indent(e) {
   var t, n, r, i, s, o, a, c, l = voice_tb.length, u = 0;
   for (n = 0; n < l; n++) if (i = voice_tb[n], !(cur_sy.voices[n].range < 0) && (t = cur_sy.voices[n].st, 
   s = (e || i.new_name) && i.nm ? i.nm : i.snm)) for (c || (set_font("voice"), c = gene.curfont), 
   o = 0; a = s.indexOf("\\n", o), (r = (r = strwh(a < 0 ? s.slice(o) : s.slice(o, a)))[0]) > u && (u = r), 
   !(a < 0); ) o = a + 1;
   for (c && (u += 4 * cwidf(" ")), r = .5, t = 0; t <= cur_sy.nstaff; t++) {
    if (cur_sy.staves[t].flags & (OPEN_BRACE2 | OPEN_BRACKET2)) {
     r = 12;
     break;
    }
    cur_sy.staves[t].flags & (OPEN_BRACE | OPEN_BRACKET) && (r = 6);
   }
   return u += r, e && (u += cfmt.indent), u;
  }
  function set_beams(e) {
   var t, n, r, i, s, o, a, c, l, u = -1;
   for (t = e; t; t = t.next) if (t.type == C.NOTE) {
    if (t.stem || 0 != (t.stem = t.multi)) t.beam_st && !t.beam_end && (r = !0); else if (a = t.mid / 3 + 18, 
    r) t.stem = u; else if (t.beam_st && !t.beam_end) {
     for (r = !0, c = t.notes[t.nhd].pit, l = t.notes[0].pit, n = t.next; n; n = n.next) if (n.type == C.NOTE) {
      if (n.stem || n.multi) {
       t.stem = n.stem || n.multi;
       break;
      }
      if (n.notes[n.nhd].pit > c && (c = n.notes[n.nhd].pit), n.notes[0].pit < l && (l = n.notes[0].pit), 
      n.beam_end) break;
     }
     n.beam_end && ((c + l) / 2 < a ? t.stem = 1 : (c + l) / 2 > a ? t.stem = -1 : cfmt.bstemdown && (t.stem = -1)), 
     t.stem || (t.stem = u);
    } else {
     if ((s = (t.notes[t.nhd].pit + t.notes[0].pit) / 2) == a) {
      for (s = 0, o = 0; o <= t.nhd; o++) s += t.notes[o].pit;
      s /= t.nhd + 1;
     }
     s < a ? t.stem = 1 : s > a ? t.stem = -1 : cfmt.bstemdown ? t.stem = -1 : t.stem = u;
    }
    if (t.beam_end && (r = !1), u = t.stem, i) {
     for (n = i.extra; n; n = n.next) n.stem = -u;
     i.stem = -u, i = null;
    }
   } else {
    if (t.type != C.GRACE) continue;
    if (2 == (n = t.extra).stem) {
     i = t;
     continue;
    }
    for (t.stem || 0 != (t.stem = t.multi) || (t.stem = 1); n; n = n.next) n.stem = t.stem, 
    n.multi = t.multi;
   }
  }
  function same_head(e, t) {
   var n, r, i, s, o, a, c, l, u, f, d;
   if (e.shiftunison && e.shiftunison >= 3) return !1;
   if ((i = e.dur) >= C.BLEN) return !1;
   if ((s = t.dur) >= C.BLEN) return !1;
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
   a = n, l = r, f = e.notes[n].shhd, d = t.notes[r].shhd;
   do {
    if (r++, ++n > e.nhd) break;
    if (r > t.nhd) break;
    if (t.notes[r].acc != e.notes[n].acc) return !1;
    f < e.notes[n].shhd && (f = e.notes[n].shhd), d < t.notes[r].shhd && (d = t.notes[r].shhd);
   } while (t.notes[r].pit == e.notes[n].pit);
   if (n <= e.nhd) {
    if (r <= t.nhd) return !1;
    if (t.stem > 0) return !1;
   } else if (r <= t.nhd && e.stem > 0) return !1;
   if (c = n, u = r, o = 0, i != s) if (i < s && (i = s, s = e.dur), i < C.BLEN / 2) t.dots ? o = 2 : e.dots && (o = 1); else {
    if (!(s < C.BLEN / 4)) return !1;
    if (e.shiftunison && 2 & e.shiftunison) return !1;
    o = t.dur >= C.BLEN / 2 ? 2 : 1;
   }
   if (0 == o && (o = e.p_v.scale < t.p_v.scale ? 2 : 1), 1 == o) {
    for (r = l; r < u; r++) t.notes[r].invis = !0, delete t.notes[r].acc;
    for (r = 0; r <= t.nhd; r++) t.notes[r].shhd += f;
   } else {
    for (n = a; n < c; n++) e.notes[n].invis = !0, delete e.notes[n].acc;
    for (n = 0; n <= e.nhd; n++) e.notes[n].shhd += d;
   }
   return !0;
  }
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
  var MAXPIT = 96;
  function set_left(e) {
   var t, n, r, i, s = w_note[e.head], o = s, a = [];
   for (n = 0; n < MAXPIT; n++) a.push(-100);
   if (e.nflags > -2) for (e.stem > 0 ? (o = -o, n = 2 * e.notes[0].pit, r = 2 * (Math.ceil((e.ymx - 2) / 3) + 18)) : (n = 2 * (Math.ceil((e.ymn + 2) / 3) + 18), 
   r = 2 * e.notes[e.nhd].pit), n < 0 && (n = 0), r >= MAXPIT && (r = MAXPIT - 1); n <= r; ) a[n++] = o;
   for (i = e.notes[e.stem > 0 ? 0 : e.nhd].shhd, t = 0; t <= e.nhd; t++) o = -e.notes[t].shhd + s + i, 
   (n = 2 * e.notes[t].pit) < 0 ? n = 0 : n >= MAXPIT - 1 && (n = MAXPIT - 2), o > a[n] && (a[n] = o), 
   e.head != C.SQUARE && (o -= 1), o > a[n - 1] && (a[n - 1] = o), o > a[n + 1] && (a[n + 1] = o);
   return a;
  }
  function set_right(e) {
   var t, n, r, i, s, o = w_note[e.head], a = o, c = e.nflags > 0 && e.beam_st && e.beam_end, l = [];
   for (n = 0; n < MAXPIT; n++) l.push(-100);
   if (e.nflags > -2) for (e.stem < 0 ? (a = -a, n = 2 * (Math.ceil((e.ymn + 2) / 3) + 18), 
   r = 2 * e.notes[e.nhd].pit, i = n + 4) : (n = 2 * e.notes[0].pit, r = 2 * (Math.ceil((e.ymx - 2) / 3) + 18)), 
   n < 0 && (n = 0), r > MAXPIT && (r = MAXPIT); n < r; ) l[n++] = a;
   if (c) if (e.stem > 0) for (n = 0 == e.xmx ? 2 * e.notes[e.nhd].pit : 2 * e.notes[0].pit, 
   (n += 4) < 0 && (n = 0); n < MAXPIT && n <= r - 4; n++) l[n] = 11; else for ((n = i) < 0 && (n = 0); n < MAXPIT && n <= 2 * e.notes[0].pit - 4; n++) l[n] = 3.5;
   for (s = e.notes[e.stem > 0 ? 0 : e.nhd].shhd, t = 0; t <= e.nhd; t++) a = e.notes[t].shhd + o - s, 
   (n = 2 * e.notes[t].pit) < 0 ? n = 0 : n >= MAXPIT - 1 && (n = MAXPIT - 2), a > l[n] && (l[n] = a), 
   e.head != C.SQUARE && (a -= 1), a > l[n - 1] && (l[n - 1] = a), a > l[n + 1] && (l[n + 1] = a);
   return l;
  }
  function set_overlap() {
   var e, t, n, r, i, s, o, a, c, l, u, f, d, p, h, m, g, y, v, _, A, b, x;
   for (e = tsfirst; e; e = e.ts_next) if (e.type == C.NOTE && !e.invis) {
    if (e.xstem && e.ts_prev.stem < 0) for (a = 0; a <= e.nhd; a++) e.notes[a].shhd -= 7, 
    e.notes[a].shac += 16;
    for (n = e; n = n.ts_next; ) {
     if (n.time != e.time) {
      n = null;
      break;
     }
     if (n.type == C.NOTE && !n.invis && n.st == e.st) break;
    }
    if (n && (t = e, cur_sy.voices[t.v].range < cur_sy.voices[n.v].range ? n.dot_low = !0 : t.dot_low = !0, 
    !(t.ymn > n.ymx || t.ymx < n.ymn || same_head(t, n)))) if (t.stem > 0 && n.stem < 0 && t.notes[0].pit == n.notes[n.nhd].pit + 1 || t.stem < 0 && n.stem > 0 && t.notes[t.nhd].pit + 1 == n.notes[0].pit) {
     for (t.stem < 0 && (t = n, n = e), a = 0; a <= n.nhd; a++) n.notes[a].shhd += 7;
     n.xmx += 7, t.xmx = n.xmx;
    } else {
     if (y = set_right(t), v = set_left(n), (r = t.ts_prev) && r.time == t.time && r.st == t.st && r.type == C.NOTE && !r.invis) for (A = set_right(r), 
     i = 0; i < MAXPIT; i++) A[i] > y[i] && (y[i] = A[i]); else r = null;
     for (f = -10, i = 0; i < MAXPIT; i++) v[i] + y[i] > f && (f = v[i] + y[i]);
     if (!(f < -3 && (!t.dots || !n.dots || !n.dot_low || t.stem > 0 || n.stem < 0 || t.notes[t.nhd].pit + 2 != n.notes[0].pit || 1 & n.notes[0].pit))) {
      if (_ = set_right(n), g = set_left(t), r) for (A = set_left(r), i = 0; i < MAXPIT; i++) A[i] > g[i] && (g[i] = A[i]);
      for (d = p = h = -100, i = 0; i < MAXPIT; i++) g[i] + _[i] > d && (d = g[i] + _[i]), 
      _[i] > h && (h = _[i]), y[i] > p && (p = y[i]);
      for (l = 0, s = t.nhd, o = n.nhd; ;) {
       switch (u = t.notes[s].pit - n.notes[o].pit) {
       case 0:
        if (t.notes[s].acc != n.notes[o].acc) {
         l = -1;
         break;
        }
        n.notes[o].acc && (n.notes[o].acc = 0), t.dots && n.dots && 1 & t.notes[s].pit && (l = 1);
        break;

       case -1:
        t.dots && n.dots && (1 & t.notes[s].pit ? (t.dot_low = !1, n.dot_low = !1) : (t.dot_low = !0, 
        n.dot_low = !0));
        break;

       case -2:
        if (t.dots && n.dots && !(1 & t.notes[s].pit)) {
         t.dot_low = !1, n.dot_low = !1;
         break;
        }
       }
       if (l < 0) break;
       if (u >= 0 && --s < 0) break;
       if (u <= 0 && --o < 0) break;
      }
      if (l < 0) unison_acc(t, n, s, o); else {
       if (c = 0, t.dots ? n.dots && (l || (c = 1)) : n.dots && d + p < f + h && (c = 1), 
       b = v, x = _, !r && d + p < f + h && (t = n, n = e, f = d, b = g, x = y, h = p), 
       (f += 3) < 0 && (f = 0), a = t.stem >= 0 ? 0 : t.nhd, f += t.notes[a].shhd, a = n.stem >= 0 ? 0 : n.nhd, 
       f -= n.notes[a].shhd, t.dots) if (m = 7.7 + t.xmx + 3.5 * t.dots - 3.5 + 3, c) {
        if (m < f + h + n.xmx) {
         for (d = 0, s = 0; s <= t.nhd; s++) 1 & (i = t.notes[s].pit) || (t.dot_low ? i-- : i++), 
         (i *= 2) < 1 ? i = 1 : i >= MAXPIT - 1 && (i = MAXPIT - 2), x[i] > d && (d = x[i]), 
         x[i - 1] + 1 > d && (d = x[i - 1] = 1), x[i + 1] + 1 > d && (d = x[i + 1] + 1);
         d > 4.5 && 7.7 + t.xmx + 2 < f + d + n.xmx && (n.xmx = d + 3 - 7.7);
        }
       } else {
        for (d = -100, s = 0; s <= t.nhd; s++) 1 & (i = t.notes[s].pit) || (t.dot_low ? i-- : i++), 
        (i *= 2) < 1 ? i = 1 : i >= MAXPIT - 1 && (i = MAXPIT - 2), b[i] > d && (d = b[i]), 
        b[i - 1] + 1 > d && (d = b[i - 1] + 1), b[i + 1] + 1 > d && (d = b[i + 1] + 1);
        m + d + 2 > f && (f = m + d + 2);
       }
       for (a = n.nhd; a >= 0; a--) n.notes[a].shhd += f;
       n.xmx += f, c && (t.xmx = n.xmx);
      }
     }
    }
   }
  }
  function set_stems() {
   var e, t, n, r, i, s, o, a, c, l, u;
   for (e = tsfirst; e; e = e.ts_next) if (e.type == C.NOTE) {
    if (set_head_shift(e), a = e.nflags, e.beam_st && !e.beam_end) {
     for (e.feathered_beam && (a = ++e.nflags), t = e.next; t.type != C.NOTE || (e.feathered_beam && t.nflags++, 
     !t.beam_end); t = t.next) ;
     t.nflags > a && (a = t.nflags);
    } else if (!e.beam_st && e.beam_end) {
     for (t = e.prev; !t.beam_st; t = t.prev) ;
     t.nflags > a && (a = t.nflags);
    }
    switch (r = cfmt.stemheight, a) {
    case 2:
     r += 0;
     break;

    case 3:
     r += 4;
     break;

    case 4:
     r += 8;
     break;

    case 5:
     r += 12;
    }
    1 != (i = e.p_v.scale) && (r *= .5 * (i + 1)), s = 3 * (e.notes[0].pit - 18), e.nhd > 0 ? (r -= 2, 
    o = 3 * (e.notes[e.nhd].pit - 18)) : o = s, e.ntrem && (r += 2 * e.ntrem), e.stemless ? (e.stem >= 0 ? (e.y = s, 
    e.ys = o) : (e.ys = s, e.y = o), -4 == a && (s -= 6), e.ymx = o + 4, e.ymn = s - 4) : e.stem >= 0 ? (e.notes[e.nhd].pit > 26 && (a <= 0 || !e.beam_st || !e.beam_end) && (r -= 2, 
    e.notes[e.nhd].pit > 28 && (r -= 2)), e.y = s, e.notes[0].ti1 && (s -= 3), e.ymn = s - 4, 
    e.ys = o + r, e.ys < e.mid && (e.ys = e.mid), e.ymx = e.ys + 2.5 | 0) : (e.notes[0].pit < 18 && (a <= 0 || !e.beam_st || !e.beam_end) && (r -= 2, 
    e.notes[0].pit < 16 && (r -= 2)), e.ys = s - r, e.ys > e.mid && (e.ys = e.mid), 
    e.ymn = e.ys - 2.5 | 0, e.y = o, e.notes[e.nhd].ti1 && (o += 3), e.ymx = o + 4);
   } else {
    if (e.type != C.GRACE) continue;
    for (c = l = e.mid, n = e.extra; n; n = n.next) u = identify_note(e, n.dur), n.head = u[0], 
    n.dots = u[1], n.nflags = u[2], r = GSTEM, n.nflags > 1 && (r += 1.2 * (n.nflags - 1)), 
    s = 3 * (n.notes[0].pit - 18), o = 3 * (n.notes[n.nhd].pit - 18), e.stem >= 0 ? (n.y = s, 
    n.ys = o + r, o = Math.round(n.ys)) : (n.y = o, n.ys = s - r, s = Math.round(n.ys)), 
    o += 2, (s -= 2) < c ? c = s : o > l && (l = o), n.ymx = o, n.ymn = s;
    e.ymx = l, e.ymn = c;
   }
  }
  function check_bar(e) {
   for (var t, n, r = e.p_v; e.type == C.CLEF || e.type == C.KEY || e.type == C.METER; ) if (e.type == C.METER && e.time > r.sym.time && (insert_meter |= 1), 
   !(e = e.prev)) return;
   if (e.type == C.BAR && (void 0 != e.text && (r.bar_start = clone(e), r.bar_start.bar_type = "", 
   delete e.text, delete e.a_gch), ":" != (t = e.bar_type) && ":" == t.slice(-1))) {
    if (r.bar_start || (r.bar_start = clone(e)), ":" != t[0]) return "||:" == t ? (r.bar_start.bar_type = "[|:", 
    e.bar_type = "||", !0) : (r.bar_start.bar_type = t, void (e.prev && e.prev.type == C.BAR ? unlksym(e) : e.bar_type = "|"));
    for (n = 0; ":" == t[n]; ) n++;
    if (n < t.length) {
     for (e.bar_type = t.slice(0, n) + "|]", n = t.length - 1; ":" == t[n]; ) n--;
     r.bar_start.bar_type = "[|" + t.slice(n + 1);
    } else n = t.length / 2 | 0, e.bar_type = t.slice(0, n) + "|]", r.bar_start.bar_type = "[|" + t.slice(n);
    return !0;
   }
  }
  function sym_staff_move(e) {
   for (var t = tsfirst; t && !t.nl; t = t.ts_next) t.st == e && t.type != C.CLEF && (t.st++, 
   t.invis = !0);
  }
  var blocks = [];
  function block_gen(e) {
   switch (e.subtype) {
   case "leftmargin":
   case "rightmargin":
   case "pagescale":
   case "pagewidth":
   case "scale":
   case "staffwidth":
    svg_flush(), self.set_format(e.subtype, e.param);
    break;

   case "ml":
    svg_flush(), user.img_out(e.text);
    break;

   case "newpage":
    blk_flush(), block.newpage = !0, blk_out();
    break;

   case "sep":
    set_page(), vskip(e.sk1), output += '<path class="stroke"\n\td="M', out_sxsy(e.x, " ", 0), 
    output += "h" + e.l.toFixed(1) + '"/>\n', vskip(e.sk2);
    break;

   case "text":
    write_text(e.text, e.opt);
    break;

   case "title":
    write_title(e.text, !0);
    break;

   case "vskip":
    vskip(e.sk);
    break;

   default:
    error(2, e, "Block $1 not treated", e.subtype);
   }
  }
  function set_piece() {
   var e, t, n, r, i, s, o, a, c = [], l = [], u = cur_sy;
   function f(e) {
    var t = staff_tb[e], n = u.staves[e];
    t || (t = staff_tb[e] = {}), t.y = 0, t.stafflines = n.stafflines, t.staffscale = n.staffscale, 
    t.ann_top = t.ann_bot = 0;
   }
   function d() {
    var e, t, n, r = u.staves.length;
    for (e = 0; e < r; e++) if (u.staves[e].flags & (OPEN_BRACE | OPEN_BRACE2)) {
     for (n = 0, t = e; e < r && (n |= c[e] ? 1 : 2, !(u.staves[e].flags & (CLOSE_BRACE | CLOSE_BRACE2))); ) e++;
     if (3 == n) for (;t <= e; ) c[t] = !0, l[t++] = !0;
    }
   }
   for (nstaff = s = u.nstaff, r = 0; r <= s; r++) f(r);
   for (e = tsfirst; e && !e.nl; e = e.ts_next) {
    switch (e.ts_next || (t = e), e.type) {
    case C.STAVES:
     if (d(), u.st_print = new Uint8Array(c), s = (u = e.sy).nstaff, nstaff < s) {
      for (r = nstaff + 1; r <= s; r++) f(r);
      nstaff = s;
     }
     c = [];
     continue;

    case C.BLOCK:
     blocks.push(e), unlksym(e), t && (t = e.ts_prev);
     continue;
    }
    if (r = e.st, !c[r]) {
     switch (e.type) {
     default:
      continue;

     case C.CLEF:
      r > nstaff && (staff_tb[r].clef = e, unlksym(e));
      continue;

     case C.BAR:
      if (e.bar_mrep || u.staves[r].staffnonote > 1) break;
      continue;

     case C.GRACE:
      break;

     case C.NOTE:
     case C.REST:
     case C.SPACE:
     case C.MREST:
      if (u.staves[r].staffnonote > 1) break;
      if (e.invis) continue;
      if (0 != u.staves[r].staffnonote || e.type == C.NOTE) break;
      continue;
     }
     l[r] = c[r] = !0;
    }
   }
   for (tsnext = e, d(), u.st_print = new Uint8Array(c), function() {
    var e, t, n, r;
    for (e = 0; e <= nstaff; e++) if (t = staff_tb[e], l[e]) {
     for (r = t.stafflines.length, t.topbar = 6 * (r - 1), n = 0; n < r - 1 && "." == t.stafflines[n]; n++) ;
     t.botline = t.botbar = 6 * n, n >= r - 2 && ("." != t.stafflines[n] ? (t.botbar -= 6, 
     t.topbar += 6) : (t.botbar -= 12, t.topbar += 12));
    } else t.botbar = t.topbar = 0;
   }(), r = 0; r < nstaff; r++) l[r] || sym_staff_move(r);
   if (l[nstaff] || (staff_tb[nstaff].topbar = 0), init_music_line(), gene.st_print = new Uint8Array(l), 
   tsnext) for (delete (e = tsnext).nl, (t = e.ts_prev).ts_next = null, o = voice_tb.length, 
   i = 0; i < o; i++) {
    if ((n = voice_tb[i]).sym && n.sym.time <= tsnext.time) {
     for (e = tsnext.ts_prev; e; e = e.ts_prev) if (e.v == i) {
      n.s_next = e.next, e.next = null, check_bar(e) && (a = e.wl, self.set_width(e), 
      e.shrink += e.wl - a);
      break;
     }
     if (e) continue;
    }
    n.s_next = n.sym, n.sym = null;
   }
   t.type != C.BAR && ((e = add_end_bar(t)).space = set_space(e), e.space < e.shrink && t.type != C.KEY && (e.space = e.shrink));
  }
  function set_sym_glue(e) {
   var t, n, r, i, s, o = 0, a = 0, c = 0, l = 0, u = 0;
   for (t = tsfirst; t; t = t.ts_next) t.type != C.GRACE || i || (i = t), t.seqst && (o += t.shrink, 
   t.space ? t.space < t.shrink ? (u += t.shrink, a += t.shrink) : a += t.space : l += t.shrink);
   if (0 != a) {
    if (r = !tsnext || tsnext.type == C.BLOCK || blocks.length, o >= e) {
     for (o > e && error(1, t, "Line too much shrunk $1 $2 $3", o.toFixed(1), a.toFixed(1), e.toFixed(1)), 
     c = 0, t = tsfirst; t; t = t.ts_next) t.seqst && (c += t.shrink), t.x = c;
     spf_last = 0;
    } else if (r && a + l > e * (1 - cfmt.stretchlast) || !r && (a + l > e || cfmt.stretchstaff)) {
     a == u && (a += 5);
     for (var f = 4; --f >= 0; ) {
      for (s = (e - l - u) / (a - u), a = 0, u = 0, c = 0, t = tsfirst; t; t = t.ts_next) t.seqst && (t.space ? t.space * s <= t.shrink ? (u += t.shrink, 
      a += t.shrink, c += t.shrink) : (a += t.space, c += t.space * s) : c += t.shrink), 
      t.x = c;
      if (Math.abs(c - e) < .1) break;
     }
     spf_last = s;
    } else for (spf_last < (s = (e - l - u) / a) && (s = spf_last), t = tsfirst; t; t = t.ts_next) t.seqst && (c += t.space * s <= t.shrink ? t.shrink : t.space * s), 
    t.x = c;
    for (realwidth = c, t = i; t; t = t.ts_next) if (t.type == C.GRACE) for (c = t.gr_shift ? t.prev.x + t.prev.wr : t.x - t.wl, 
    n = t.extra; n; n = n.next) n.x += c;
   } else realwidth = 0;
  }
  function set_sym_line() {
   var e, t, n, r = voice_tb.length;
   for (n = 0; n < r; n++) t = (e = voice_tb[n]).s_next, e.sym = t, t && (t.prev = null);
  }
  function set_posx() {
   posx = img.lm / cfmt.scale;
  }
  function gen_init() {
   for (var e = tsfirst, t = e.time; e; e = e.ts_next) {
    if (e.time != t) return void set_page();
    switch (e.type) {
    case C.NOTE:
    case C.REST:
    case C.MREST:
     return void set_page();

    default:
     continue;

    case C.STAVES:
     cur_sy = e.sy;
     break;

    case C.BLOCK:
     block_gen(e);
    }
    unlksym(e), e.p_v.s_next == e && (e.p_v.s_next = e.next);
   }
   tsfirst = null;
  }
  function output_music() {
   var e, t, n, r;
   if (gen_init(), tsfirst) {
    for (set_global(), voice_tb.length > 1 && self.set_stem_dir(), e = 0; e < voice_tb.length; e++) set_beams(voice_tb[e].sym);
    for (self.set_stems(), voice_tb.length > 1 && (set_rest_offset(), set_overlap()), 
    set_acc_shft(), set_allsymwidth(), n = set_indent(!0), cfmt.singleline ? (t = n + (e = get_ck_width())[0] + e[1] + get_width(tsfirst, null), 
    img.width = t * cfmt.scale + img.lm + img.rm + 2) : cut_tune(t = get_lwidth(), n), 
    spf_last = 1.2; ;) {
     if (set_piece(), self.set_sym_glue(t - n), 0 != realwidth) for (0 != n && (posx += n), 
     draw_sym_near(), r = set_staff(), draw_systems(n), draw_all_sym(), delayed_update(), 
     vskip(r), 0 != n && (posx -= n, insert_meter &= -3); 0 != blocks.length; ) block_gen(blocks.shift());
     if (tsfirst = tsnext, cfmt.splittune ? blk_flush() : svg_flush(), !tsnext) break;
     if (gen_init(), !tsfirst) break;
     tsfirst.ts_prev = null, set_sym_line(), t = get_lwidth(), n = set_indent();
    }
   }
  }
  function reset_gen() {
   insert_meter = cfmt.writefields.indexOf("M") >= 0 ? 3 : 2;
  }
  var a_gch, a_dcn, multicol, maps = {}, qplet_tb = new Int8Array([ 0, 1, 3, 2, 3, 0, 2, 0, 3, 0 ]), ntb = "CDEFGABcdefgab";
  function set_ref(e) {
   e.fname = parse.fname, e.istart = parse.istart, e.iend = parse.iend;
  }
  function new_clef(e) {
   var t = {
    type: C.CLEF,
    clef_line: 2,
    clef_type: "t",
    v: curvoice.v,
    p_v: curvoice,
    time: curvoice.time,
    dur: 0
   }, n = 1;
   switch (set_ref(t), e[0]) {
   case '"':
    n = e.indexOf('"', 1), t.clef_name = e.slice(1, n), n++;
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
    n = 4, t.invis = !0;
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
    t.clef_type = "p", t.clef_line = 3, curvoice.key.k_sf = 0, curvoice.ckey.k_drum = !0;
    break;

   default:
    return void syntax(1, "Unknown clef '$1'", e);
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
   }
   return t;
  }
  var note_pit = new Int8Array([ 0, 2, 4, 5, 7, 9, 11 ]);
  function get_transp(e, t) {
   var n, r, i, s, o = [];
   if ("0" == e[0]) return 0;
   if ("123456789-+".indexOf(e[0]) >= 0) {
    if (r = 3 * parseInt(e), isNaN(r) || r < -108 || r > 108) return void syntax(1, "Bad transpose value");
    switch (e.slice(-1)) {
    default:
     return r;

    case "#":
     r++;
     break;

    case "b":
     r += 2;
    }
    return r > 0 ? r : r - 3;
   }
   if ("instr" == t) if (i = e.indexOf("/"), cfmt.sound) e = i < 0 ? "c" + e : e.replace(/.*\//, "c"); else {
    if (i < 0) return 0;
    e = e.replace("/", "");
   }
   for ((i = new scanBuf()).buffer = e, n = 0; n < 2; n++) {
    if (!(s = i.buffer[i.index] ? parse_acc_pit(i) : null)) return void syntax(1, "Bad transpose value");
    s.pit += 124, r = 12 * (s.pit / 7 | 0) + note_pit[s.pit % 7], s.acc && 3 != s.acc && (r += s.acc), 
    o[n] = r;
   }
   if (r = 3 * (o[1] - o[0]), s) switch (s.acc) {
   default:
    return r;

   case 2:
   case 1:
    r++;
    break;

   case -1:
   case -2:
    r += 2;
   }
   return r > 0 ? r : r - 3;
  }
  function set_linebreak(e) {
   var t, n;
   for (t = 0; t < 128; t++) "\n" == char_tb[t] && (char_tb[t] = nil);
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
     syntax(1, "Bad value '$1' in %%linebreak - ignored", n);
     continue;
    }
    char_tb[n.charCodeAt(0)] = "\n";
   }
  }
  function set_user(e) {
   var t, n, r, i = e.match(/(.*?)[= ]*([!"].*[!"])/);
   if (i) if (n = i[1], (r = i[2]).slice(-1) == r[0]) if ("\\" == n[0] && ("t" == n[1] ? n = "\t" : n[1] || (n = " ")), 
   (t = n.charCodeAt(0)) >= 128) syntax(1, errs.not_ascii); else {
    switch (char_tb[t][0]) {
    case "0":
    case "d":
    case "i":
    case " ":
     break;

    case '"':
    case "!":
     if (char_tb[t].length > 1) break;

    default:
     return void syntax(1, "Bad user character '$1'", n);
    }
    switch (r) {
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
    char_tb[t] = r;
   } else syntax(1, "Lack of ending $1 in U:/%%user", r[0]); else syntax(1, 'Lack of starting ! or " in U: / %%user');
  }
  function get_st_lines(e) {
   if (e) {
    if (/^[\]\[|.-]+$/.test(e)) return e.replace(/\]/g, "[");
    var t = parseInt(e);
    switch (t) {
    case 0:
     return "...";

    case 1:
     return "..|";

    case 2:
     return ".||";

    case 3:
     return ".|||";
    }
    if (!(isNaN(t) || t < 0 || t > 16)) return "||||||||||||||||".slice(0, t);
   }
  }
  function new_block(e) {
   var t = {
    type: C.BLOCK,
    subtype: e,
    dur: 0
   };
   2 == parse.state && goto_tune();
   var n = curvoice;
   return curvoice = voice_tb[par_sy.top_voice], sym_link(t), curvoice = n, t;
  }
  function set_vp(e) {
   for (var t, n, r, i, s; n = e.shift(); ) {
    if ("=" == n[n.length - 1] && 0 == e.length) {
     syntax(1, errs.bad_val, n);
     break;
    }
    switch (n) {
    case "clef=":
     t = e.shift();
     break;

    case "clefpitch=":
     if ((n = e.shift()) && (i = ntb.indexOf(n[0])) >= 0) {
      switch (n[1]) {
      case "'":
       i += 7;
       break;

      case ",":
       i -= 7, "," == n[2] && (i -= 7);
      }
      s = 4 - i;
      break;
     }
     syntax(1, errs.bad_val, n);
     break;

    case "octave=":
    case "uscale=":
     i = parseInt(e.shift()), isNaN(i) ? syntax(1, errs.bad_val, n) : curvoice[n.slice(0, -1)] = i;
     break;

    case "cue=":
     curvoice.scale = "on" == e.shift() ? .7 : 1;
     break;

    case "instrument=":
     curvoice.transp = get_transp(e.shift(), "instr");
     break;

    case "map=":
     curvoice.map = e.shift();
     break;

    case "name=":
    case "nm=":
     curvoice.nm = e.shift(), '"' == curvoice.nm[0] && (curvoice.nm = curvoice.nm.slice(1, -1)), 
     curvoice.new_name = !0;
     break;

    case "stem=":
    case "pos=":
     if (n = "pos=" == n ? e.shift().split(" ") : [ "stm", e.shift() ], void 0 == (i = posval[n[1]])) {
      syntax(1, errs.bad_val, n[0]);
      break;
     }
     r || (r = {}), r[n[0]] = i;
     break;

    case "scale=":
     i = parseFloat(e.shift()), isNaN(i) || i < .6 || i > 1.5 ? syntax(1, errs.bad_val, "%%voicescale") : curvoice.scale = i;
     break;

    case "score=":
     if (cfmt.sound) break;
     (n = e.shift()).indexOf("/") < 0 && (n += "/c"), curvoice.transp = get_transp(n);
     break;

    case "shift=":
     curvoice.shift = get_transp(e.shift());
     break;

    case "sound=":
    case "transpose=":
     if (!cfmt.sound) break;
     curvoice.transp = get_transp(e.shift());
     break;

    case "subname=":
    case "sname=":
    case "snm=":
     curvoice.snm = e.shift(), '"' == curvoice.snm[0] && (curvoice.snm = curvoice.snm.slice(1, -1));
     break;

    case "stafflines=":
     void 0 == (i = get_st_lines(e.shift())) ? syntax(1, "Bad %%stafflines value") : void 0 != curvoice.st ? par_sy.staves[curvoice.st].stafflines = i : curvoice.stafflines = i;
     break;

    case "staffnonote=":
     i = parseInt(e.shift()), isNaN(i) ? syntax(1, "Bad %%staffnonote value") : curvoice.staffnonote = i;
     break;

    case "staffscale=":
     i = parseFloat(e.shift()), isNaN(i) || i < .3 || i > 2 ? syntax(1, "Bad %%staffscale value") : curvoice.staffscale = i;
     break;

    default:
     switch (n.slice(0, 4)) {
     case "treb":
     case "bass":
     case "alto":
     case "teno":
     case "perc":
      t = n;
      break;

     default:
      "GFC".indexOf(n[0]) >= 0 ? t = n : "=" == n.slice(-1) && e.shift();
     }
    }
   }
   if (r) for (n in curvoice.pos = clone(curvoice.pos), r) r.hasOwnProperty(n) && (curvoice.pos[n] = r[n]);
   t && (t = new_clef(t)) && (s && (t.clefpit = s), get_clef(t));
  }
  function set_kv_parm(e) {
   curvoice.init || (curvoice.init = !0, info.V && (info.V["*"] && (e = info.V["*"].concat(e)), 
   info.V[curvoice.id] && (e = info.V[curvoice.id].concat(e)))), 0 != e.length && self.set_vp(e);
  }
  function memo_kv_parm(e, t) {
   0 != t.length && (info.V || (info.V = {}), info.V[e] ? Array.prototype.push.apply(info.V[e], t) : info.V[e] = t);
  }
  function new_key(e) {
   var t, n, r, i, s = 0, o = {
    type: C.KEY,
    k_delta: 0,
    dur: 0
   };
   switch (set_ref(o), t = 1, e[0]) {
   case "A":
    o.k_sf = 3;
    break;

   case "B":
    o.k_sf = 5;
    break;

   case "C":
    o.k_sf = 0;
    break;

   case "D":
    o.k_sf = 2;
    break;

   case "E":
    o.k_sf = 4;
    break;

   case "F":
    o.k_sf = -1;
    break;

   case "G":
    o.k_sf = 1;
    break;

   case "H":
    switch (e[1]) {
    case "P":
    case "p":
     o.k_bagpipe = e[1], o.k_sf = "P" == e[1] ? 0 : 2, t++;
     break;

    default:
     syntax(1, "Unknown bagpipe-like key");
    }
    break;

   case "P":
    syntax(1, "K:P is deprecated"), o.k_drum = !0, n = !0;
    break;

   case "n":
    0 == e.indexOf("none") && (o.k_sf = 0, o.k_none = !0, t = 4);

   default:
    n = !0;
   }
   if (!n) {
    switch (e[t]) {
    case "#":
     o.k_sf += 7, t++;
     break;

    case "b":
     o.k_sf -= 7, t++;
    }
    switch ((e = e.slice(t).trim()).slice(0, 3).toLowerCase()) {
    default:
     if ("m" != e[0] || " " != e[1] && "\t" != e[1] && "\n" != e[1]) {
      n = !0;
      break;
     }

    case "aeo":
    case "m":
    case "min":
     o.k_sf -= 3, s = 5;
     break;

    case "dor":
     o.k_sf -= 2, s = 1;
     break;

    case "ion":
    case "maj":
     break;

    case "loc":
     o.k_sf -= 5, s = 6;
     break;

    case "lyd":
     o.k_sf += 1, s = 3;
     break;

    case "mix":
     o.k_sf -= 1, s = 4;
     break;

    case "phr":
     o.k_sf -= 4, s = 2;
    }
    if (n || (e = e.replace(/\w+\s*/, "")), 0 == e.indexOf("exp ") && ((e = e.replace(/\w+\s*/, "")) || syntax(1, "No accidental after 'exp'"), 
    o.k_exp = !0), "^" == (r = e[0]) || "_" == r || "=" == r) {
     o.k_a_acc = [], (i = new scanBuf()).buffer = e;
     do {
      var a = parse_acc_pit(i);
      if (!a) return [ o, null ];
      for (o.k_a_acc.push(a), r = e[i.index]; " " == r; ) r = e[++i.index];
     } while ("^" == r || "_" == r || "=" == r);
     e = e.slice(i.index);
    } else o.k_exp && 0 == e.indexOf("none") && (o.k_sf = 0, e = e.replace(/\w+\s*/, ""));
   }
   return o.k_delta = cgd2cde[(o.k_sf + 7) % 7], o.k_mode = s, [ o, info_split(e) ];
  }
  function new_meter(e) {
   var t, n, r, i, s, o, a = {
    type: C.METER,
    dur: 0,
    a_meter: []
   }, c = {}, l = 0, u = 0;
   if (set_ref(a), 0 == e.indexOf("none")) u = 4, s = 1; else for (s = 0; u < e.length && "=" != e[u]; ) {
    switch (e[u]) {
    case "C":
     c.top = e[u++], l || (l = 4, r = 4);
     break;

    case "c":
    case "o":
     if (c.top = e[u++], !l) switch ("c" == e[u - 1] ? (l = 2, r = 4) : (l = 3, r = 4), 
     e[u]) {
     case "|":
      r /= 2;
      break;

     case ".":
      l *= 3, r *= 2;
     }
     break;

    case ".":
    case "|":
     l = 0, c.top = e[u++];
     break;

    case "(":
     for ("(" == e[u + 1] && (o = !0, c.top = e[u++], a.a_meter.push(c), c = {}), i = u + 1; i < e.length && ")" != e[i] && "/" != e[i]; ) i++;
     if (")" == e[i] && "/" == e[i + 1]) {
      u++;
      continue;
     }

    case ")":
     o = "(" == e[u], c.top = e[u++], a.a_meter.push(c), c = {};
     continue;

    default:
     if (e[u] <= "0" || e[u] > "9") return void syntax(1, "Bad char '$1' in M:", e[u]);
     for (r = 2, c.top = e[u++]; ;) {
      for (;e[u] >= "0" && e[u] <= "9"; ) c.top += e[u++];
      if (")" == e[u]) {
       if ("/" != e[u + 1]) break;
       u++;
      }
      if ("/" == e[u]) {
       if (e[++u] <= "0" || e[u] > "9") return void syntax(1, "Bad char '$1' in M:", e[u]);
       for (c.bot = e[u++]; e[u] >= "0" && e[u] <= "9"; ) c.bot += e[u++];
       break;
      }
      if (" " != e[u] && "+" != e[u]) break;
      if (u >= e.length || "(" == e[u + 1]) break;
      c.top += e[u++];
     }
     l = parseInt(c.top);
    }
    for (o || (c.bot && (r = parseInt(c.bot)), s += l * C.BLEN / r), a.a_meter.push(c), 
    c = {}; " " == e[u]; ) u++;
    "+" == e[u] && (c.top = e[u++], a.a_meter.push(c), c = {});
   }
   if ("=" == e[u]) {
    if (!(t = e.substring(++u).match(/^(\d+)\/(\d+)$/))) return void syntax(1, "Bad duration '$1' in M:", e.substring(u));
    s = C.BLEN * t[1] / t[2];
   }
   if (a.wmeasure = s, cfmt.writefields.indexOf("M") < 0 && (a.a_meter = []), 3 != parse.state) {
    if (info.M = e, glovar.meter = a, parse.state >= 1) for (glovar.ulen || (s <= 1 || s >= 3 * C.BLEN / 4 ? glovar.ulen = C.BLEN / 8 : glovar.ulen = C.BLEN / 16), 
    n = 0; n < voice_tb.length; n++) voice_tb[n].meter = a, voice_tb[n].wmeasure = s;
   } else curvoice.wmeasure = s, is_voice_sig() ? (curvoice.meter = a, reset_gen()) : sym_link(a);
  }
  function new_tempo(e) {
   var t, n, r, i = 0, s = {
    type: C.TEMPO,
    dur: 0
   };
   if (set_ref(s), cfmt.writefields.indexOf("Q") < 0 && (s.del = !0), '"' == e[0]) {
    if ((i = e.indexOf('"', 1)) < 0) return void syntax(1, "Unterminated string in Q:");
    for (s.tempo_str1 = e.slice(1, i), i++; " " == e[i]; ) i++;
   }
   for ((r = new scanBuf()).buffer = e, r.index = i; !(void 0 == (t = e[r.index]) || t <= "0" || t > "9"); ) for (n = parse_dur(r), 
   s.tempo_notes || (s.tempo_notes = []), s.tempo_notes.push(C.BLEN * n[0] / n[1]); " " == (t = e[r.index]); ) r.index++;
   if ("=" == t) {
    for (t = e[++r.index]; " " == t; ) t = e[++r.index];
    for (i = r.index, "c" == t && "a" == e[i + 1] && "." == e[i + 2] && " " == e[i + 3] && (s.tempo_ca = "ca. ", 
    r.index += 4), "/" != e[r.index + 1] ? s.tempo = r.get_int() : (n = parse_dur(r), 
    s.new_beat = C.BLEN * n[0] / n[1]), t = e[r.index]; " " == t; ) t = e[++r.index];
   }
   if ('"' == t) {
    if (r.index++, (i = e.indexOf('"', r.index + 1)) < 0) return void syntax(1, "Unterminated string in Q:");
    s.tempo_str2 = e.slice(r.index, i);
   }
   if (3 != parse.state) {
    if (1 == parse.state) return info.Q = e, void (glovar.tempo = s);
    goto_tune();
   }
   curvoice.v == par_sy.top_voice && (sym_link(s), glovar.tempo && 0 == curvoice.time && (glovar.tempo.del = !0));
  }
  function do_info(e, t) {
   var n, r, i, s;
   switch (e) {
   case "I":
    self.do_pscom(t);
    break;

   case "L":
    if (2 == parse.state && goto_tune(), s = t.match(/^1\/(\d+)(=(\d+)\/(\d+))?$/)) {
     if (!(r = Number(s[1])) || 0 != (r & r - 1)) break;
     if (r = C.BLEN / r, s[2]) {
      if (!(i = Number(s[4])) || 0 != (i & i - 1)) {
       i = 0;
       break;
      }
      i = Number(s[3]) / i * C.BLEN;
     } else i = r;
    } else "auto" == t && (r = i = -1);
    if (!i) {
     syntax(1, "Bad L: value");
     break;
    }
    parse.state < 2 ? glovar.ulen = r : (curvoice.ulen = r, curvoice.dur_fact = i / r);
    break;

   case "M":
    new_meter(t);
    break;

   case "U":
    set_user(t);
    break;

   case "P":
    if (0 == parse.state) break;
    if (1 == parse.state) {
     info.P = t;
     break;
    }
    if (2 == parse.state && goto_tune(), cfmt.writefields.indexOf(e) < 0) break;
    n = {
     type: C.PART,
     text: t,
     dur: 0
    };
    var o = voice_tb[par_sy.top_voice];
    if (curvoice.v != o.v) {
     if (curvoice.time != o.time) break;
     if (o.last_sym && o.last_sym.type == C.PART) break;
     var a = curvoice;
     curvoice = o, sym_link(n), curvoice = a;
    } else sym_link(n);
    break;

   case "Q":
    if (0 == parse.state) break;
    new_tempo(t);
    break;

   case "V":
    get_voice(t);
    break;

   case "K":
    if (0 == parse.state) break;
    get_key(t);
    break;

   case "N":
   case "R":
    info[e] ? info[e] += "\n" + t : info[e] = t;
    break;

   case "r":
    if (!user.keep_remark || 3 != parse.state) break;
    sym_link(n = {
     type: C.REMARK,
     text: t,
     dur: 0
    });
    break;

   default:
    syntax(0, "'$1:' line ignored", e);
   }
  }
  function adjust_dur(e) {
   var t, n, r, i;
   if ((t = curvoice.last_sym) && t.type != C.MREST && t.type != C.BAR) {
    for (;t.type != C.BAR && t.prev; ) t = t.prev;
    if (n = t.time, r = curvoice.time - n, 0 == n) {
     for (;t && !t.dur; ) t = t.next;
     t && t.type == C.REST && t.invis && (n += t.dur * curvoice.wmeasure / r, t.prev ? t.prev.next = t.next : curvoice.sym = t.next, 
     t.next && (t.next.prev = t.prev), t = t.next);
    }
    if (curvoice.wmeasure != r) {
     for (;t; t = t.next) if (t.time = n, t.dur && !t.grace && (t.dur = t.dur * curvoice.wmeasure / r, 
     t.dur_orig = t.dur_orig * curvoice.wmeasure / r, n += t.dur, t.type == C.NOTE || t.type == C.REST)) for (i = 0; i <= t.nhd; i++) t.notes[i].dur = t.notes[i].dur * curvoice.wmeasure / r;
     curvoice.time = e.time = n;
    }
   }
  }
  function new_bar() {
   var e, t, n, r = parse.line, i = {
    type: C.BAR,
    fname: parse.fname,
    istart: parse.bol + r.index,
    dur: 0,
    multi: 0
   };
   for (vover && vover.bar && get_vover("|"), glovar.new_nbar && (i.bar_num = glovar.new_nbar, 
   glovar.new_nbar = 0), n = r.char(); ;) {
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
   switch (":" == n[0] && (1 == n.length ? (n = "|", i.bar_dotted = !0) : i.rbstop = 2), 
   a_gch && self.gch_build(i), a_dcn && (deco_cnv(a_dcn, i), a_dcn = null), void 0 != parse.ottava && (e = i, 
   curvoice.cst != curvoice.st && sym_link(e = {
    type: C.SPACE,
    fname: parse.fname,
    istart: parse.bol + r.index,
    dur: 0,
    multi: 0,
    invis: !0,
    width: 1
   }), e.ottava = parse.ottava, delete parse.ottava), n.slice(-1)) {
   case "[":
    if (/[0-9" ]/.test(t)) break;
    n = n.slice(0, -1), r.index--, t = "[";
    break;

   case ":":
    i.rbstop = 2;
   }
   if (t > "0" && t <= "9") {
    for ("[" == n.slice(-1) && (n = n.slice(0, -1)), i.text = t; t = r.next_char(), 
    !("0123456789,.-".indexOf(t) < 0); ) i.text += t;
    i.rbstop = 2, i.rbstart = 2;
   } else if ('"' == t && "[" == n.slice(-1)) {
    for (n = n.slice(0, -1), i.text = ""; ;) {
     if (!(t = r.next_char())) return void syntax(1, "No end of repeat string");
     if ('"' == t) {
      r.index++;
      break;
     }
     "\\" == t && (i.text += t, t = r.next_char()), i.text += t;
    }
    i.text = cnv_escape(i.text), i.rbstop = 2, i.rbstart = 2;
   }
   if ("]" == n[0] && (i.rbstop = 2, 1 != n.length ? n = n.slice(1) : i.invis = !0), 
   i.iend = parse.bol + r.index, i.rbstart && curvoice.norepbra && !curvoice.second && (i.norepbra = !0), 
   curvoice.ulen < 0 && adjust_dur(i), (e = curvoice.last_sym) && e.time == curvoice.time) if (e.type == C.SPACE) e.time--; else if ("[" == n || "|:" == n) {
    do {
     if (e.type == C.BAR) break;
     if (w_tb[e.type]) break;
     e = e.prev;
    } while (e);
    if (e && e.type == C.BAR) {
     if ("[" == n && !e.text && (0 == curvoice.st || par_sy.staves[curvoice.st - 1].flags & STOP_BAR || i.norepbra)) return i.text && (e.text = i.text), 
     i.a_gch && (e.a_gch = i.a_gch), i.norepbra && (e.norepbra = i.norepbra), i.rbstart && (e.rbstart = i.rbstart), 
     void (i.rbstop && (e.rbstop = i.rbstop));
     if (e.st == curvoice.st && "|:" == n) {
      if (":|" == e.bar_type) return e.bar_type = "::", void (e.rbstop = 2);
      if ("||" == e.bar_type) return e.bar_type = "||:", void (e.rbstop = 2);
     }
    }
   }
   switch (n) {
   case "[":
    i.rbstop = 2;

   case "[]":
   case "[|]":
    i.invis = !0, n = "[]";
    break;

   case ":|:":
   case ":||:":
    n = "::";
    break;

   case "||":
    if (!cfmt.rbdbstop) break;

   case "[|":
   case "|]":
    i.rbstop = 2;
   }
   i.bar_type = n, curvoice.lyric_restart || (curvoice.lyric_restart = i), curvoice.sym_restart || (curvoice.sym_restart = i), 
   sym_link(i), i.st = curvoice.st, i.rbstart && !curvoice.norepbra && curvoice.st > 0 && !(par_sy.staves[curvoice.st - 1].flags & STOP_BAR) && (sym_link(e = {
    type: C.BAR,
    fname: i.fname,
    istart: i.istart,
    iend: i.iend,
    bar_type: "[",
    multi: 0,
    invis: !0,
    text: i.text,
    rbstart: 2
   }), e.st = curvoice.st, delete i.text, i.rbstart = 0);
  }
  function parse_staves(e) {
   var t, n, r = [], i = !1, s = 0, o = 0, a = 0, c = 0, l = 0, u = e.match(/\w+|[^\s]/g);
   if (u) {
    for (;n = u.shift(); ) switch (n) {
    case "[":
     if (c || o + a >= 2) {
      syntax(1, errs.misplaced, "["), i = !0;
      break;
     }
     s |= o + a == 0 ? OPEN_BRACKET : OPEN_BRACKET2, a++, l <<= 8, l |= OPEN_BRACKET;
     break;

    case "{":
     if (c || o || a >= 2) {
      syntax(1, errs.misplaced, "{"), i = !0;
      break;
     }
     s |= a ? OPEN_BRACE2 : OPEN_BRACE, o++, l <<= 8, l |= OPEN_BRACE;
     break;

    case "(":
     if (c) {
      syntax(1, errs.misplaced, "("), i = !0;
      break;
     }
     s |= OPEN_PARENTH, c++, l <<= 8, l |= OPEN_PARENTH;
     break;

    case "*":
     !o || c || s & (OPEN_BRACE | OPEN_BRACE2) || (s |= FL_VOICE);
     break;

    case "+":
     s |= MASTER_VOICE;
     break;

    default:
     if (!/\w/.test(n)) {
      syntax(1, "Bad voice ID in %%staves"), i = !0;
      break;
     }
     for (t = n; n = u.shift(); ) {
      switch (n) {
      case "]":
       if (!(l & OPEN_BRACKET)) {
        syntax(1, errs.misplaced, "]"), i = !0;
        break;
       }
       s |= o + --a == 0 ? CLOSE_BRACKET : CLOSE_BRACKET2, l >>= 8;
       continue;

      case "}":
       if (!(l & OPEN_BRACE)) {
        syntax(1, errs.misplaced, "}"), i = !0;
        break;
       }
       o--, s |= a ? CLOSE_BRACE2 : CLOSE_BRACE, s &= ~FL_VOICE, l >>= 8;
       continue;

      case ")":
       if (!(l & OPEN_PARENTH)) {
        syntax(1, errs.misplaced, ")"), i = !0;
        break;
       }
       c--, s |= CLOSE_PARENTH, l >>= 8;
       continue;

      case "|":
       s |= STOP_BAR;
       continue;
      }
      break;
     }
     if (r.push([ t, s ]), s = 0, !n) break;
     u.unshift(n);
    }
    if (0 != l && (syntax(1, "'}', ')' or ']' missing in %%staves"), i = !0), !i && 0 != r.length) return r;
   } else syntax(1, errs.bad_val, "%%staves");
  }
  function info_split(e) {
   if (!e) return [];
   var t = e.match(/=?[^\s"=]+=?|".+?"/g);
   return t || (syntax(1, "Unterminated string"), []);
  }
  function identify_note(e, t) {
   var n, r, i = 0, s = t;
   for (s % 12 != 0 && error(1, e, "Invalid note duration $1", s), 0 == (s /= 12) && error(1, e, "Note too short"), 
   r = 5; 0 != s && !(1 & s); s >>= 1, r--) ;
   switch (s >>= 1) {
   case 0:
    break;

   case 1:
    i = 1;
    break;

   case 3:
    i = 2;
    break;

   case 7:
    i = 3;
    break;

   default:
    error(1, e, "Invalid note duration $1", t), r += (11 - s) / 4 | 0, i = 4;
   }
   if ((r -= i) >= 0) n = C.FULL; else switch (r) {
   default:
    error(1, e, "Note too long"), r = -4;

   case -4:
    n = C.SQUARE;
    break;

   case -3:
    n = cfmt.squarebreve ? C.SQUARE : C.OVALBARS;
    break;

   case -2:
    n = C.OVAL;
    break;

   case -1:
    n = C.EMPTY;
   }
   return [ n, i, r ];
  }
  var reg_dur = /(\d*)(\/*)(\d*)/g;
  function parse_dur(e) {
   var t, n, r;
   return reg_dur.lastIndex = e.index, (t = reg_dur.exec(e.buffer))[0] ? (n = t[1] || 1, 
   r = t[3] || 1, t[3] || (r *= 1 << t[2].length), e.index = reg_dur.lastIndex, [ n, r ]) : [ 1, 1 ];
  }
  function parse_acc_pit(e) {
   var t, n, r, i, s, o, a = e.char();
   switch (a) {
   case "^":
    "^" == (a = e.next_char()) ? (n = 2, a = e.next_char()) : n = 1;
    break;

   case "=":
    n = 3, a = e.next_char();
    break;

   case "_":
    "_" == (a = e.next_char()) ? (n = -2, a = e.next_char()) : n = -1;
   }
   if ((n && 3 != n && a >= "1" && a <= "9" || "/" == a) && (r = (o = parse_dur(e))[0], 
   1 == (i = o[1]) ? i = curvoice ? curvoice.uscale : 1 : i *= 2, a = e.char()), s = ntb.indexOf(a) + 16, 
   a = e.next_char(), !(s < 16)) {
    for (;"'" == a; ) s += 7, a = e.next_char();
    for (;"," == a; ) s -= 7, a = e.next_char();
    return t = {
     pit: s,
     shhd: 0,
     shac: 0,
     ti1: 0
    }, n && (t.acc = n, r && (t.micro_n = r, t.micro_d = i)), t;
   }
   syntax(1, "'$1' is not a note", e.buffer[e.index - 1]);
  }
  function note2abc(e) {
   var t, n = "abcdefg"[(e.pit + 77) % 7];
   for (e.acc && (n = [ "__", "_", "", "^", "^^", "=" ][e.acc + 2] + n), t = e.pit; t >= 30; t -= 7) n += "'";
   for (t = e.pit; t < 23; t += 7) n += ",";
   return n;
  }
  function set_map(e) {
   var t = maps[curvoice.map], n = note2abc(e);
   (t[n] || t[n = "octave," + n.replace(/[',]/g, "")] || t[n = "key," + "abcdefg"[(e.pit + 77 - curvoice.ckey.k_delta) % 7]] || t[n = "all"]) && (e.map = t[n], 
   e.map[1] && (e.pit = e.map[1].pit, e.acc = e.map[1].acc));
  }
  function parse_basic_note(e, t) {
   var n, r = parse_acc_pit(e);
   if (r) return "0" == e.char() && (parse.stemless = !0, e.index++), n = parse_dur(e), 
   r.dur = t * n[0] / n[1], r;
  }
  function parse_vpos() {
   var e = parse.line, t = 0;
   switch ("." != e.buffer[e.index - 1] || a_dcn || (t = C.SL_DOTTED), e.next_char()) {
   case "'":
    return e.index++, t + C.SL_ABOVE;

   case ",":
    return e.index++, t + C.SL_BELOW;
   }
   return t + C.SL_AUTO;
  }
  var cde2fcg = new Int8Array([ 0, 2, 4, -1, 1, 3, 5 ]), cgd2cde = new Int8Array([ 0, 4, 1, 5, 2, 6, 3 ]), acc2 = new Int8Array([ -2, -1, 3, 1, 2 ]);
  function note_transp(e) {
   var t, n, r, i, s, o, a, c, l, u, f = e.nhd, d = curvoice.okey.k_sf, p = curvoice.ckey.k_sf - d, h = cgd2cde[(p + 28) % 7], m = curvoice.vtransp;
   for (m < 0 && 0 != h && (h -= 7), h += 7 * (m / 3 / 12 | 0), t = 0; t <= f; t++) {
    if (r = (u = e.notes[t]).pit, u.pit += h, a = cde2fcg[(r + 5 + 112) % 7], !(s = u.acc)) if (curvoice.okey.a_acc) {
     for (n = 0; n < curvoice.okey.a_acc.length; n++) if ((r + 112 - (o = curvoice.okey.a_acc[n]).pit) % 7 == 0) {
      s = o.acc;
      break;
     }
    } else d > 0 ? a < d - 1 && (s = 1) : d < 0 && a >= d + 6 && (s = -1);
    if (c = a + p, s && 3 != s && (c += 7 * s), s = acc2[a = (2 + ((c + 1 + 21) / 7 | 0) - 3 + 160) % 5], 
    u.acc) ; else if (curvoice.ckey.k_none) {
     if (3 == s || acc_same_pitch(u.pit)) continue;
    } else {
     if (!curvoice.ckey.a_acc) continue;
     for (l = cgd2cde[(c + 112) % 7], n = 0; n < curvoice.ckey.a_acc.length && (l + 112 - curvoice.ckey.a_acc[n].pits) % 7 != 0; n++) ;
     if (n < curvoice.ckey.a_acc.length) continue;
    }
    if (a = u.acc, (i = u.micro_d) && a != s) switch (r = u.micro_n, s) {
    case 3:
     r > i / 2 ? (r -= i / 2, u.micro_n = r, s = a) : s = -a;
     break;

    case 2:
     r > i / 2 ? (u.pit += 1, r -= i / 2) : r += i / 2, s = a, u.micro_n = r;
     break;

    case -2:
     r >= i / 2 ? (u.pit -= 1, r -= i / 2) : r += i / 2, s = a, u.micro_n = r;
    }
    u.acc = s;
   }
  }
  function sort_pitch(e) {
   e.notes = e.notes.sort(function(e, t) {
    return e.pit - t.pit;
   });
  }
  function new_note(e, t) {
   var n, r, i, s, o, a, c, l, u, f, d, p = 0, h = parse.line, m = a_dcn;
   switch (a_dcn = null, parse.stemless = !1, (r = {
    type: C.NOTE,
    fname: parse.fname,
    stem: 0,
    multi: 0,
    nhd: 0,
    xmx: 0
   }).istart = parse.bol + h.index, curvoice.color && (r.color = curvoice.color), e ? r.grace = !0 : (a_gch && self.gch_build(r), 
   parse.repeat_n && (r.repeat_n = parse.repeat_n, r.repeat_k = parse.repeat_k, parse.repeat_n = 0)), 
   s = h.char()) {
   case "X":
    r.invis = !0;

   case "Z":
    if (r.type = C.MREST, s = h.next_char(), r.nmes = s > "0" && s <= "9" ? h.get_int() : 1, 
    r.dur = curvoice.wmeasure * r.nmes, curvoice.second) return void (curvoice.time += r.dur);
    1 == r.nmes && (r.type = C.REST, r.dur_orig = r.dur, r.notes = [ {
     pit: 18,
     dur: r.dur
    } ]);
    break;

   case "y":
    r.type = C.SPACE, r.invis = !0, r.dur = 0, s = h.next_char(), r.width = s >= "0" && s <= "9" ? h.get_int() : 10;
    break;

   case "x":
    r.invis = !0;

   case "z":
    r.type = C.REST, h.index++, f = parse_dur(h), r.dur_orig = (curvoice.ulen < 0 ? C.BLEN : curvoice.ulen) * f[0] / f[1], 
    r.dur = r.dur_orig * curvoice.dur_fact, r.notes = [ {
     pit: 18,
     dur: r.dur_orig
    } ];
    break;

   case "[":
    i = !0, s = h.next_char();

   default:
    for (curvoice.uscale && (r.uscale = curvoice.uscale), r.notes = []; ;) {
     if (i) for (;s; ) {
      if ((c = s.charCodeAt(0)) >= 128) return void syntax(1, errs.not_ascii);
      switch ((a = char_tb[c])[0]) {
      case "(":
       p <<= 4, p += parse_vpos(), s = h.char();
       continue;

      case "!":
       if (a_dcn || (a_dcn = []), a.length > 1) a_dcn.push(a.slice(1, -1)); else {
        for (o = ""; ;) {
         if (!(s = h.next_char())) return void syntax(1, "No end of decoration");
         if ("!" == s) break;
         o += s;
        }
        a_dcn.push(o);
       }
       s = h.next_char();
       continue;
      }
      break;
     }
     if (!(n = parse_basic_note(h, r.grace ? C.BLEN / 4 : curvoice.ulen < 0 ? C.BLEN : curvoice.ulen))) return;
     if (curvoice.octave && (n.pit += 7 * curvoice.octave), p && (n.sl1 = p, r.sl1 ? r.sl1++ : r.sl1 = 1, 
     p = 0), a_dcn && (n.a_dcn = a_dcn, a_dcn = null), r.notes.push(n), !i) break;
     for (s = h.char(); ;) {
      switch (s) {
      case ")":
       n.sl2 ? n.sl2++ : n.sl2 = 1, r.sl2 ? r.sl2++ : r.sl2 = 1, s = h.next_char();
       continue;

      case "-":
       n.ti1 = parse_vpos(), r.ti1 = !0, s = h.char();
       continue;

      case ".":
       if ("-" != (s = h.next_char())) {
        syntax(1, "Misplaced dot");
        break;
       }
       continue;
      }
      break;
     }
     if ("]" == s) {
      for (h.index++, f = parse_dur(h), r.nhd = r.notes.length - 1, c = 0; c <= r.nhd; c++) (n = r.notes[c]).dur = n.dur * f[0] / f[1];
      break;
     }
    }
    r.dur_orig = r.notes[0].dur, r.dur = r.notes[0].dur * curvoice.dur_fact;
   }
   if (!r.grace || r.type == C.NOTE) {
    if (r.notes) {
     if (r.grace) {
      var g = curvoice.ckey.k_bagpipe ? 8 : 4;
      for (c = 0; c <= r.nhd; c++) r.notes[c].dur /= g;
      r.dur /= g, r.dur_orig /= g, e.stem && (r.stem = e.stem);
     } else {
      switch (curvoice.pos.stm) {
      case C.SL_ABOVE:
       r.stem = 1;
       break;

      case C.SL_BELOW:
       r.stem = -1;
       break;

      case C.SL_HIDDEN:
       r.stemless = !0;
      }
      if (r.dur *= t, d = curvoice.brk_rhythm) {
       if (curvoice.brk_rhythm = 0, u = curvoice.last_note, d > 0) {
        for (l = 2 * d - 1, r.dur = r.dur * l / d, r.dur_orig = r.dur_orig * l / d, c = 0; c <= r.nhd; c++) r.notes[c].dur = r.notes[c].dur * l / d;
        for (u.dur /= d, u.dur_orig /= d, c = 0; c <= u.nhd; c++) u.notes[c].dur /= d;
       } else {
        for (l = 2 * (d = -d) - 1, r.dur /= d, r.dur_orig /= d, c = 0; c <= r.nhd; c++) r.notes[c].dur /= d;
        for (u.dur = u.dur * l / d, u.dur_orig = u.dur_orig * l / d, c = 0; c <= u.nhd; c++) u.notes[c].dur = u.notes[c].dur * l / d;
       }
       for (curvoice.time = u.time + u.dur, u = u.next; u; u = u.next) u.time = curvoice.time;
      }
     }
     curvoice.last_note = r;
    }
    if (sym_link(r), r.type == C.NOTE && (curvoice.vtransp && note_transp(r), curvoice.map && maps[curvoice.map])) for (c = 0; c <= r.nhd; c++) set_map(r.notes[c]);
    return cfmt.shiftunison && (r.shiftunison = cfmt.shiftunison), e || (curvoice.lyric_restart || (curvoice.lyric_restart = r), 
    curvoice.sym_restart || (curvoice.sym_restart = r)), m && deco_cnv(m, r, r.prev), 
    void 0 != parse.ottava && (r.ottava = parse.ottava, delete parse.ottava), parse.stemless && (r.stemless = !0), 
    r.iend = parse.bol + h.index, r;
   }
   syntax(1, "Not a note in grace note sequence");
  }
  var nil = [ "0" ], char_tb = [ nil, nil, nil, nil, nil, nil, nil, nil, nil, " ", "\n", nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, " ", "!", '"', "i", "\n", nil, "&", nil, "(", ")", "i", nil, nil, "-", "!dot!", nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, "|", "i", "<", "n", "<", "i", "i", "n", "n", "n", "n", "n", "n", "n", "!fermata!", "d", "d", "d", "!emphasis!", "!lowermordent!", "d", "!coda!", "!uppermordent!", "d", "d", "!segno!", "!trill!", "d", "d", "d", "n", "d", "n", "[", "\\", "|", "n", "n", "i", "n", "n", "n", "n", "n", "n", "n", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "!upbow!", "!downbow!", "d", "n", "n", "n", "{", "|", "}", "!gmark!", nil ], ottava = {
   "8va(": 1,
   "8va)": 0,
   "15ma(": 2,
   "15ma)": 0,
   "8vb(": -1,
   "8vb)": 0,
   "15mb(": -2,
   "15mb)": 0
  };
  function parse_music_line() {
   var e, t, n, r, s, o, a = [], c = -1, l = 1, u = 0, f = parse.line;
   function d(e) {
    var t, n, r;
    for (t = 1, n = f.index + 1; t < e.length; t++, n++) if (e[t] != f.buffer[n]) {
     if ("n" != e[t]) return;
     if ((r = ntb.indexOf(f.buffer[n])) < 0) return;
     for (;"'" == f.buffer[n + 1]; ) r += 7, n++;
     for (;"," == f.buffer[n + 1]; ) r -= 7, n++;
    }
    return f.index = n, r;
   }
   function p(e, t) {
    var n = f, r = parse.istart;
    parse.line = f = new scanBuf(), parse.istart += n.index, f.buffer = t ? function(e, t) {
     var n, r, s = "", o = e.length;
     for (i = 0; i < o; i++) if ((n = e[i]) >= "h" && n <= "z") {
      for (r = t + n.charCodeAt(0) - "n".charCodeAt(0), n = ""; r < 0; ) r += 7, n += ",";
      for (;r > 14; ) r -= 7, n += "'";
      s += ntb[r] + n;
     } else s += n;
     return s;
    }(e, t) : e, h(!0), parse.line = f = n, parse.istart = r;
   }
   function h(i) {
    for (var s, h, m, g, y, v, _, A; b = f.char(); ) {
     if ("." == b) switch (f.buffer[f.index + 1]) {
     case "(":
     case "-":
     case "|":
      b = f.next_char();
     }
     if ((s = b.charCodeAt(0)) >= 128) {
      syntax(1, errs.not_ascii), f.index++;
      break;
     }
     if (!i && maci[s]) {
      for (m in _ = 0, mac) if (mac.hasOwnProperty(m) && m[0] == b) {
       if (m.indexOf("n") < 0) {
        if (f.buffer.indexOf(m, f.index) != f.index) continue;
        f.index += m.length;
       } else if (!(_ = d(m))) continue;
       p(mac[m], _), _ = 1;
       break;
      }
      if (_) continue;
     }
     switch ((h = char_tb[s])[0]) {
     case " ":
      (g = curvoice.last_note) && (g.beam_end = !0, e && (e.gr_shift = !0));
      break;

     case "\n":
      if (cfmt.barsperstaff) break;
      0 == par_sy.voices[curvoice.v].range && curvoice.last_sym && (curvoice.last_sym.eoln = !0);
      break;

     case "&":
      if (e) {
       syntax(1, errs.bad_char, b);
       break;
      }
      if (")" == (b = f.next_char())) {
       get_vover(")");
       break;
      }
      get_vover("&");
      continue;

     case "(":
      if ((b = f.next_char()) > "0" && b <= "9") {
       var b, x = f.get_int(), w = qplet_tb[x], k = x;
       if (":" == (b = f.char()) && ((b = f.next_char()) > "0" && b <= "9" && (w = f.get_int(), 
       b = f.char()), ":" == b)) {
        if (!((b = f.next_char()) > "0" && b <= "9")) {
         syntax(1, "Invalid 'r' in tuplet");
         continue;
        }
        k = f.get_int(), b = f.char();
       }
       0 != w && void 0 != w || (w = curvoice.wmeasure % 9 == 0 ? 3 : 2), (o = a[++c]) || (a[c] = o = {}), 
       o.p = x, o.q = w, o.r = k, o.f = cfmt.tuplets, o.fact = l * w / x, l = o.fact;
       continue;
      }
      if ("&" == b) {
       if (e) {
        syntax(1, errs.bad_char, b);
        break;
       }
       get_vover("(");
       break;
      }
      u <<= 4, f.index--, u += parse_vpos();
      continue;

     case ")":
      if (curvoice.ignore) break;
      if (g = curvoice.last_sym) switch (g.type) {
      case C.NOTE:
      case C.REST:
      case C.SPACE:
       break;

      default:
       g = null;
      }
      if (!g) {
       syntax(1, errs.bad_char, b);
       break;
      }
      g.slur_end ? g.slur_end++ : g.slur_end = 1;
      break;

     case "!":
      if (a_dcn || (a_dcn = []), h.length > 1) y = h.slice(1, -1); else {
       for (y = "", v = f.index; (b = f.next_char()) && "!" != b; ) y += b;
       if (!b) {
        f.index = v, syntax(1, "No end of decoration");
        break;
       }
      }
      void 0 != ottava[y] ? (glovar.ottava = !0, parse.ottava = ottava[y]) : a_dcn.push(y);
      break;

     case '"':
      parse_gchord(h);
      break;

     case "-":
      var E;
      if (!curvoice.last_note || curvoice.last_note.type != C.NOTE) {
       syntax(1, "No note before '-'");
       break;
      }
      for (E = parse_vpos(), g = curvoice.last_note, v = 0; v <= g.nhd; v++) g.notes[v].ti1 ? 0 == g.nhd && syntax(1, "Too many ties") : g.notes[v].ti1 = E;
      g.ti1 = !0, e && (e.ti1 = !0);
      continue;

     case "[":
      var B = f.buffer[f.index + 1];
      if ('|[]: "'.indexOf(B) >= 0 || B >= "1" && B <= "9") {
       if (e) {
        syntax(1, errs.bar_grace);
        break;
       }
       new_bar();
       continue;
      }
      if (":" == f.buffer[f.index + 2]) {
       if ((v = f.buffer.indexOf("]", f.index + 1)) < 0) {
        syntax(1, "Lack of ']'");
        break;
       }
       A = f.buffer.slice(f.index + 3, v).trim(), parse.istart = parse.bol + f.index, parse.iend = parse.bol + ++v, 
       f.index = 0, do_info(B, A), f.index = v;
       continue;
      }

     case "n":
      if (!(g = self.new_note(e, l))) continue;
      if (g.type == C.NOTE && u && (g.slur_start = u, u = 0), e) {
       c >= 0 && (g.in_tuplet = !0);
       continue;
      }
      c >= 0 && g.notes && (g.in_tuplet = !0, c > 0 ? (a[0].p && (g.tp0 = a[0].p, g.tq0 = a[0].q, 
      g.tf = a[0].f, a[0].p = 0), a[0].r--, o.p && (g.tp1 = o.p, g.tq1 = o.q, g.tf = o.f, 
      o.p = 0)) : o.p && (g.tp0 = o.p, g.tq0 = o.q, g.tf = o.f, o.p = 0), o.r--, 0 == o.r && (0 == c-- ? (g.tp0 ? g.tp0 = !1 : g.te0 = !0, 
      l = 1, curvoice.time = Math.round(curvoice.time), g.dur = curvoice.time - g.time) : (g.tp1 ? g.tp1 = !1 : g.te1 = !0, 
      0 == (o = a[0]).r ? (c--, g.te0 = !0, l = 1, curvoice.time = Math.round(curvoice.time), 
      g.dur = curvoice.time - g.time) : l = o.fact)));
      continue;

     case "<":
      if (!curvoice.last_note) {
       syntax(1, "No note before '<'");
       break;
      }
      if (e) {
       syntax(1, "Cannot have a broken rhythm in grace notes");
       break;
      }
      for (_ = "<" == b ? 1 : -1; "<" == b || ">" == b; ) _ *= 2, b = f.next_char();
      curvoice.brk_rhythm = _;
      continue;

     case "i":
      break;

     case "{":
      if (e) {
       syntax(1, "'{' in grace note");
       break;
      }
      switch (t = curvoice.last_note, curvoice.last_note = null, n = a_dcn, a_dcn = void 0, 
      e = {
       type: C.GRACE,
       fname: parse.fname,
       istart: parse.bol + f.index,
       dur: 0,
       multi: 0
      }, curvoice.pos.gst) {
      case C.SL_ABOVE:
       e.stem = 1;
       break;

      case C.SL_BELOW:
       e.stem = -1;
       break;

      case C.SL_HIDDEN:
       e.stem = 2;
      }
      if (sym_link(e), "/" == (b = f.next_char())) {
       e.sappo = !0;
       break;
      }
      continue;

     case "|":
      if (e) {
       syntax(1, errs.bar_grace);
       break;
      }
      b = f.buffer[f.index - 1], new_bar(), "." == b && (curvoice.last_sym.bar_dotted = !0);
      continue;

     case "}":
      if (g = curvoice.last_note, !e || !g) {
       syntax(1, errs.bad_char, b);
       break;
      }
      if (a_dcn && syntax(1, "Decoration ignored"), g.gr_end = !0, e.extra = e.next, e.extra.prev = null, 
      e.next = null, curvoice.last_sym = e, e = null, !g.prev && !curvoice.ckey.k_bagpipe) {
       for (v = 0; v <= g.nhd; v++) g.notes[v].dur *= 2;
       g.dur *= 2, g.dur_orig *= 2;
      }
      curvoice.last_note = t, a_dcn = n;
      break;

     case "\\":
      if (!(b = f.buffer[f.index + 1])) {
       r = !0;
       break;
      }

     default:
      syntax(1, errs.bad_char, b);
     }
     f.index++;
    }
   }
   if (3 != parse.state) {
    if (2 != parse.state) return;
    goto_tune();
   }
   if (h(), c >= 0) for (syntax(1, "No end of tuplet"), s = curvoice.last_note; s; s = s.prev) if (s.tp1 && (s.tp1 = 0), 
   s.tp0) {
    s.tp0 = 0;
    break;
   }
   e && (syntax(1, "No end of grace note sequence"), curvoice.last_sym = e.prev, curvoice.last_note = t, 
   e.prev && (e.prev.next = null)), cfmt.breakoneoln && curvoice.last_note && (curvoice.last_note.beam_end = !0), 
   r || cfmt.barsperstaff || "\n" == char_tb["\n".charCodeAt(0)] && 0 == par_sy.voices[curvoice.v].range && curvoice.last_sym && (curvoice.last_sym.eoln = !0);
  }
  var sw_tb = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .25, .333, .408, .5, .5, .833, .778, .333, .333, .333, .5, .564, .25, .564, .25, .278, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .278, .278, .564, .564, .564, .444, .921, .722, .667, .667, .722, .611, .556, .722, .722, .333, .389, .722, .611, .889, .722, .722, .556, .722, .667, .556, .611, .722, .722, .944, .722, .722, .611, .333, .278, .333, .469, .5, .333, .444, .5, .444, .5, .444, .333, .5, .5, .278, .278, .5, .278, .778, .5, .5, .5, .5, .333, .389, .278, .5, .5, .722, .5, .5, .444, .48, .2, .48, .541, .5 ]), ssw_tb = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .278, .278, .355, .556, .556, .889, .667, .191, .333, .333, .389, .584, .278, .333, .278, .278, .556, .556, .556, .556, .556, .556, .556, .556, .556, .556, .278, .278, .584, .584, .584, .556, 1.015, .667, .667, .722, .722, .667, .611, .778, .722, .278, .5, .667, .556, .833, .722, .778, .667, .778, .722, .667, .611, .722, .667, .944, .667, .667, .611, .278, .278, .278, .469, .556, .333, .556, .556, .5, .556, .556, .278, .556, .556, .222, .222, .5, .222, .833, .556, .556, .556, .556, .333, .5, .278, .556, .5, .722, .5, .5, .5, .334, .26, .334, .584, .512 ]), cw_tb = sw_tb;
  function cwid(e) {
   var t = e.charCodeAt(0);
   if (t >= 128) {
    if (t >= 768 && t < 880) return 0;
    t = 97;
   }
   return cw_tb[t];
  }
  function cwidf(e) {
   return cwid(e) * gene.curfont.swfac;
  }
  var strwh = "undefined" != typeof document ? (el = document.createElement("div"), 
  el.style.position = "absolute", el.style.top = "-1000px", el.style.padding = "0", 
  document.body.appendChild(el), function(e) {
   var t, n = gene.curfont, r = n.size, i = 0, s = (e.length, 0), o = 0;
   for (el.style.font = style_font(n).slice(5), e = e.replace(/<|>|&[^&]*?;|&|  /g, function(e) {
    switch (e) {
    case "<":
     return "&lt;";

    case ">":
     return "&gt;";

    case "&":
     return "&amp;";

    case "  ":
     return " Â ";
    }
    return e;
   }); !((o = e.indexOf("$", o)) < 0); ) {
    if ("0" == (t = e[o + 1])) n = gene.deffont; else {
     if (!(t >= "1" && t <= "9")) {
      o++;
      continue;
     }
     n = get_font("u" + t);
    }
    el.innerHTML = e.slice(s, o), i += el.clientWidth, n.size > r && (r = n.size), el.style.font = style_font(n).slice(5), 
    s = o += 2;
   }
   return el.innerHTML = e.slice(s), i += el.clientWidth, gene.curfont = n, [ i, r ];
  }) : function(e) {
   var t, n, r, i = gene.curfont, s = i.swfac, o = i.size, a = 0, c = e.length;
   for (t = 0; t < c; t++) {
    switch (r = e[t]) {
    case "$":
     if ("0" == (r = e[t + 1])) i = gene.deffont; else {
      if (!(r >= "1" && r <= "9")) {
       r = "$";
       break;
      }
      i = get_font("u" + r);
     }
     t++, s = i.swfac, i.size > o && (o = i.size);
     continue;

    case "&":
     (n = e.indexOf(";", t)) > 0 && n - t < 10 && (t = n, r = "a");
    }
    a += cwid(r) * s;
   }
   return gene.curfont = i, [ a, o ];
  }, el;
  function set_font(e) {
   "string" == typeof e && (e = get_font(e)), cw_tb = "sans" == e.name.slice(0, 4) ? ssw_tb : sw_tb, 
   gene.curfont = gene.deffont = e;
  }
  function out_str(e) {
   var t, n = gene.curfont, r = n;
   output += e.replace(/<|>|&[^&]*?;|&|  |\$./g, function(e) {
    switch (e) {
    case "<":
     return "&lt;";

    case ">":
     return "&gt;";

    case "&":
     return "&amp;";

    case "  ":
     return " Â ";

    default:
     if ("$" != e[0]) break;
     if ("0" == e[1]) use_font(t = gene.deffont); else {
      if (!(e[1] >= "1" && e[1] <= "9")) break;
      t = get_font("u" + e[1]);
     }
     return e = "", t == r ? e : (r != n && (e = "</tspan>"), (r = t) == n ? e : e + '<tspan\n\tclass="' + font_class(t) + '">');
    }
    return e;
   }), r != n && (output += "</tspan>", gene.curfont = r);
  }
  function xy_str(e, t, n, r, i, s) {
   switch (s || (s = strwh(n)), output += '<text class="' + font_class(gene.curfont), 
   "j" != r && n.length > 5 && gene.curfont.wadj && (output += '" lengthAdjust="' + gene.curfont.wadj + '" textLength="' + s[0].toFixed(1)), 
   output += '" x="', out_sxsy(e, '" y="', t + .2 * s[1]), r) {
   case "c":
    e -= s[0] / 2, output += '" text-anchor="middle">';
    break;

   case "j":
    output += '" textLength="' + i.toFixed(1) + '">';
    break;

   case "r":
    e -= s[0], output += '" text-anchor="end">';
    break;

   default:
    output += '">';
   }
   out_str(n), output += "</text>\n", !i && gene.curfont.box && (output += '<rect class="stroke" x="', 
   out_sxsy(e - 2, '" y="', t + s[1]), output += '" width="' + (s[0] + 4).toFixed(1) + '" height="' + (s[1] + 2).toFixed(1) + '"/>\n');
  }
  function trim_title(e, t) {
   var n;
   return cfmt.titletrim && ((n = e.lastIndexOf(", ")) < 0 || e[n + 2] < "A" || e[n + 2] > "Z" ? n = 0 : 1 == cfmt.titletrim ? (n < e.length - 7 || e.indexOf(" ", n + 3) >= 0) && (n = 0) : n < e.length - cfmt.titletrim - 2 && (n = 0)), 
   !t && cfmt.writefields.indexOf("X") >= 0 && (e = info.X + ".  " + e), n && (e = e.slice(n + 2).trim() + " " + e.slice(0, n)), 
   cfmt.titlecaps ? e.toUpperCase() : e;
  }
  function get_lwidth() {
   return (img.width - img.lm - img.rm - 2) / cfmt.scale;
  }
  function write_title(e, t) {
   var n, r;
   e && (set_page(), e = trim_title(e, t), t ? (set_font("subtitle"), n = cfmt.subtitlespace) : (set_font("title"), 
   n = cfmt.titlespace), vskip((r = strwh(e))[1] + n), cfmt.titleleft ? xy_str(0, 0, e, null, null, r) : xy_str(get_lwidth() / 2, 0, e, "c", null, r));
  }
  function put_inf2r(e, t, n, r, i) {
   if (!n) {
    if (!r) return;
    n = r, r = null;
   }
   xy_str(e, t, r ? n + " (" + r + ")" : n, i);
  }
  function write_text(e, t) {
   if ("s" != t) {
    set_font("text"), set_page();
    var n, r, i, s, o, a, c, l, u, f, d = get_lwidth(), p = gene.curfont.size, h = p * cfmt.lineskipfac, m = p * cfmt.parskipfac, g = block.started ? function() {} : blk_out, y = block.started ? svg_flush : blk_flush;
    switch (g(), t) {
    default:
     switch (t) {
     case "c":
      o = d / 2;
      break;

     case "r":
      o = d;
      break;

     default:
      o = 0;
     }
     for (s = 0, r = gene.curfont; ;) {
      if ((i = e.indexOf("\n", s)) < 0) {
       f = e.slice(s), n = strwh(f), gene.curfont = r, vskip(n[1] * cfmt.lineskipfac), 
       xy_str(o, 0, f, t, null, n), r = gene.curfont;
       break;
      }
      if (i == s) {
       for (vskip(m), y(), use_font(gene.curfont); "\n" == e[i + 1]; ) vskip(h), i++;
       if (i == e.length) break;
       g();
      } else f = e.slice(s, i), n = strwh(f), gene.curfont = r, vskip(n[1] * cfmt.lineskipfac), 
      xy_str(o, 0, f, t, null, n), r = gene.curfont;
      s = i + 1;
     }
     vskip(m), y();
     break;

    case "f":
    case "j":
     for (s = 0; ;) {
      for (a = (a = (i = e.indexOf("\n\n", s)) < 0 ? e.slice(s) : e.slice(s, i)).split(/\s+/), 
      c = l = 0, r = gene.curfont, s = 0; s < a.length; s++) (c += u = strwh(a[s] + " ")[0]) >= d && (f = a.slice(l, s).join(" "), 
      gene.curfont = r, n = strwh(f), gene.curfont = r, vskip(n[1] * cfmt.lineskipfac), 
      xy_str(0, 0, f, t, d, n), r = gene.curfont, l = s, c = u);
      if (0 != c && (f = a.slice(l).join(" "), gene.curfont = r, n = strwh(f), gene.curfont = r, 
      vskip(n[1] * cfmt.lineskipfac), xy_str(0, 0, f, null, null, n)), vskip(m), y(), 
      i < 0) break;
      for (;"\n" == e[i + 2]; ) vskip(h), i++;
      if (i == e.length) break;
      g(), use_font(gene.curfont), s = i + 2;
     }
    }
   }
  }
  function put_words(e) {
   var t, n, r, i, s, o, a, c;
   function l(e, t, n) {
    var r, i, s = 0;
    if ("$" == e[s] && e[s + 1] >= "0" && e[s + 1] <= "9" && (s += 2), i = 0, r = s, 
    e[s] >= "0" && e[s] <= "9" || "." == e[s + 1]) {
     for (;s < e.length && " " != e[++s] && ":" != e[s - 1] && "." != e[s - 1]; ) ;
     for (i = s; " " == e[s]; ) s++;
    }
    return 0 != i && xy_str(t, 0, e.slice(r, i), "r"), s < e.length && xy_str(t + 5, 0, e.slice(s), "l"), 
    s >= e.length && 0 == i;
   }
   set_font("words");
   var u = get_lwidth() / 2, f = (u - 45) / cwidf("a");
   for (i = 0, s = (e = e.split("\n")).length, n = 0; n < s; n++) {
    if ((t = e[n]).length > f) {
     i = 0;
     break;
    }
    t ? c = !0 : c && (i++, c = !1);
   }
   if (i > 0) {
    for (n = i = (i + 1) / 2 | 0, c = !1, a = 0; a < s; a++) {
     for (t = e[a], r = 0; " " == t[r]; ) r++;
     if (r == t.length) {
      if (c && --n <= 0) break;
      c = !1;
     } else c = !0;
    }
    o = a + 1;
   } else o = a = s;
   for (vskip(cfmt.wordsspace), n = 0; n < a || o < s; n++) n < a && 0 == e[n].length && (blk_out(), 
   use_font(gene.curfont)), vskip(cfmt.lineskipfac * gene.curfont.size), n < a && l(e[n], 45), 
   o < s && (l(e[o], 20 + u) && 0 == --i && (n < a ? i++ : o < e.length - 1 && (u *= .6)), 
   o++);
  }
  function put_history() {
   var e, t, n, r, i, s, o, a, c, l = cfmt.infoname.split("\n"), u = l.length;
   for (e = 0; e < u; e++) if (n = l[e][0], !(cfmt.writefields.indexOf(n) < 0) && (r = info[n])) {
    for (i || (i = !0, set_font("history"), vskip(cfmt.textspace), s = gene.curfont.size * cfmt.lineskipfac), 
    '"' == (c = l[e].slice(2))[0] && (c = c.slice(1, -1)), vskip(s), xy_str(0, 0, c, null, null, a = strwh(c)), 
    xy_str(o = a[0], 0, (r = r.split("\n"))[0]), t = 1; t < r.length; t++) vskip(s), 
    xy_str(o, 0, r[t]);
    vskip(.3 * s), blk_out(), use_font(gene.curfont);
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
   for (var t, n, r, i, s, o, a, c = {}, l = clone(info_font_init), u = {
    A: cfmt.infospace,
    C: cfmt.composerspace,
    O: cfmt.composerspace,
    R: cfmt.infospace
   }, f = {}, d = "", p = cfmt.titleformat, h = 0, m = 0; ;) {
    for (;" " == p[m]; ) m++;
    if (m >= p.length) break;
    if ((t = p[m++]) < "A" || t > "Z") if ("+" == t) {
     if (0 == d.length || "+" == d.slice(-1)) continue;
     d = d.slice(0, -1) + "+";
    } else "," == t && ("+" == d.slice(-1) && (d = d.slice(0, -1) + "l"), d += "\n"); else {
     if (c[t]) f[t]++; else {
      if (!info[t]) continue;
      c[t] = info[t].split("\n"), f[t] = 1;
     }
     switch (d += t, p[m]) {
     case "-":
      d += "l", m++;
      break;

     case "0":
      d += "c", m++;
      break;

     case "1":
      d += "r", m++;
      break;

     default:
      d += "c";
     }
    }
   }
   "+" == d.slice(-1) && (d = d.slice(0, -1) + "l"), d += "\n";
   var g, y = {
    l: cfmt.titlespace,
    c: cfmt.titlespace,
    r: cfmt.titlespace
   }, v = {
    l: 0,
    c: .5 * e,
    r: e
   }, _ = {};
   for (p = d, m = 0; ;) {
    for (_.l = _.c = _.r = o = 0, h = m; "\n" != (t = p[h++]); ) {
     if ("+" == (i = p[h++])) i = p[h + 1]; else if (0 != _[i]) continue;
     (g = c[t]) && ((r = l[t]) || (r = "history"), a = 1.1 * (n = get_font(r)).size, 
     u[t] && (a += u[t]), o < a && (o = a), _[i] = a);
    }
    for (y.l += o - _.l, y.c += o - _.c, y.r += o - _.r; "\n" != (t = p[m++]); ) if (i = p[m++], 
    0 != c[t].length) {
     if (g = c[t].shift(), "+" == i && (f[t]--, t = p[m++], i = p[m++], c[t].length > 0 && (g ? g += " " + c[t].shift() : g = " " + c[t].shift())), 
     (r = l[t]) || (r = "history"), a = 1.1 * (n = get_font(r)).size, u[t] && (a += u[t]), 
     set_font(n), s = v[i], o = y[i] + a, "Q" == t) {
      if (set_width(glovar.tempo), !glovar.tempo.del) {
       if ("l" != i) {
        var A = tempo_width(glovar.tempo);
        "c" == i && (A *= .5), s -= A;
       }
       write_tempo(glovar.tempo, s, -o);
      }
     } else g && xy_str(s, -o, g, i);
     if ("T" == t && (r = l.T = "subtitle", u.T = cfmt.subtitlespace), f[t] <= 1) for ("T" == t && (a = 1.1 * (n = get_font(r)).size, 
     u[t] && (a += u[t]), set_font(n)); c[t].length > 0; ) xy_str(s, -(o += a), g = c[t].shift(), i);
     f[t]--, y[i] = o;
    }
    if (y.c > y.l && (y.l = y.c), y.r > y.l && (y.l = y.r), m >= d.length) break;
    y.c = y.r = y.l;
   }
   vskip(y.l);
  }
  function write_heading() {
   var e, t, n, r, i, s, o, a, c = get_lwidth();
   if (blk_out(), vskip(cfmt.topspace), cfmt.titleformat) return write_headform(c), 
   void vskip(cfmt.musicspace);
   if (info.T && cfmt.writefields.indexOf("T") >= 0) for (e = 0; ;) {
    if ((t = info.T.indexOf("\n", e)) < 0) {
     write_title(info.T.substring(e), 0 != e);
     break;
    }
    write_title(info.T.slice(e, t), 0 != e), e = t + 1;
   }
   if (o = a = 0, parse.ckey.k_bagpipe && !cfmt.infoline && cfmt.writefields.indexOf("R") >= 0 && (s = info.R), 
   s && (set_font("composer"), xy_str(0, -cfmt.composerspace, s), o = cfmt.composerspace), 
   n = info.A, cfmt.writefields.indexOf("C") >= 0 && (r = info.C), cfmt.writefields.indexOf("O") >= 0 && (i = info.O), 
   r || i || cfmt.infoline) {
    var l, u;
    if (set_font("composer"), vskip(cfmt.composerspace), cfmt.aligncomposer < 0 ? (l = 0, 
    u = " ") : 0 == cfmt.aligncomposer ? (l = .5 * c, u = "c") : (l = c, u = "r"), a = o, 
    r || i) {
     for (cfmt.aligncomposer >= 0 && o != a && vskip(o - a), e = 0; ;) {
      if (vskip(gene.curfont.size), (t = r ? r.indexOf("\n", e) : -1) < 0) {
       put_inf2r(l, 0, r ? r.substring(e) : null, i, u);
       break;
      }
      xy_str(l, 0, r.slice(e, t), u), o += gene.curfont.size, e = t + 1;
     }
     a > o && vskip(a - o);
    }
    ((s = s ? null : info.R) || n) && cfmt.infoline && (set_font("info"), vskip(gene.curfont.size + cfmt.infospace), 
    put_inf2r(c, 0, s, n, "r"), o += gene.curfont.size + cfmt.infospace);
   } else a = cfmt.composerspace;
   info.P && cfmt.writefields.indexOf("P") >= 0 && (set_font("parts"), (o = cfmt.partsspace + gene.curfont.size - o) > 0 && (a += o), 
   a > .01 && vskip(a), xy_str(0, 0, info.P), a = 0), vskip(a + cfmt.musicspace);
  }
  var output = "", style = "\ntext, tspan{fill:currentColor}\n.stroke{stroke:currentColor;fill:none}\n.bW{stroke:currentColor;fill:none;stroke-width:1}\n.bthW{stroke:currentColor;fill:none;stroke-width:3}\n.slW{stroke:currentColor;fill:none;stroke-width:.7}\n.slthW{stroke:currentColor;fill:none;stroke-width:1.5}\n.sW{stroke:currentColor;fill:none;stroke-width:.7}", font_style = "", posx = cfmt.leftmargin / cfmt.scale, posy = 0, img = {
   width: cfmt.pagewidth,
   lm: cfmt.leftmargin,
   rm: cfmt.rightmargin
  }, defined_glyph = {}, defs = "", fulldefs = "", stv_g = {
   scale: 1,
   dy: 0,
   st: -1,
   v: 0,
   g: 0
  }, block = {}, tgls = {
   "mtr ": {
    x: 0,
    y: 0,
    c: " "
   },
   brace: {
    x: 0,
    y: 0,
    c: ""
   },
   hl: {
    x: -4,
    y: 0,
    c: ""
   },
   hl1: {
    x: -6,
    y: 0,
    c: ""
   },
   ghl: {
    x: -4,
    y: 0,
    c: ""
   },
   lphr: {
    x: 0,
    y: 24,
    c: ""
   },
   mphr: {
    x: 0,
    y: 24,
    c: ""
   },
   sphr: {
    x: 0,
    y: 27,
    c: ""
   },
   rdots: {
    x: -1,
    y: 0,
    c: ""
   },
   dsgn: {
    x: -4,
    y: -4,
    c: ""
   },
   dcap: {
    x: -4,
    y: -4,
    c: ""
   },
   sgno: {
    x: -6,
    y: 0,
    c: ""
   },
   coda: {
    x: -12,
    y: -6,
    c: ""
   },
   tclef: {
    x: -8,
    y: 0,
    c: ""
   },
   cclef: {
    x: -8,
    y: 0,
    c: ""
   },
   bclef: {
    x: -8,
    y: 0,
    c: ""
   },
   pclef: {
    x: -6,
    y: 0,
    c: ""
   },
   spclef: {
    x: -6,
    y: 0,
    c: ""
   },
   stclef: {
    x: -8,
    y: 0,
    c: ""
   },
   scclef: {
    x: -8,
    y: 0,
    c: ""
   },
   sbclef: {
    x: -7,
    y: 0,
    c: ""
   },
   oct: {
    x: 0,
    y: 2,
    c: ""
   },
   mtr0: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr1: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr2: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr3: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr4: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr5: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr6: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr7: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr8: {
    x: 0,
    y: 0,
    c: ""
   },
   mtr9: {
    x: 0,
    y: 0,
    c: ""
   },
   mtrC: {
    x: 0,
    y: 0,
    c: ""
   },
   "mtr+": {
    x: 0,
    y: 0,
    c: ""
   },
   "mtr(": {
    x: 0,
    y: 0,
    c: ""
   },
   "mtr)": {
    x: 0,
    y: 0,
    c: ""
   },
   HDD: {
    x: -7,
    y: 0,
    c: ""
   },
   breve: {
    x: -7,
    y: 0,
    c: ""
   },
   HD: {
    x: -5.2,
    y: 0,
    c: ""
   },
   Hd: {
    x: -3.8,
    y: 0,
    c: ""
   },
   hd: {
    x: -3.7,
    y: 0,
    c: ""
   },
   ghd: {
    x: 2,
    y: 0,
    c: "",
    sc: .66
   },
   pshhd: {
    x: -3.7,
    y: 0,
    c: ""
   },
   pfthd: {
    x: -3.7,
    y: 0,
    c: ""
   },
   x: {
    x: -3.7,
    y: 0,
    c: ""
   },
   "circle-x": {
    x: -3.7,
    y: 0,
    c: ""
   },
   srep: {
    x: -5,
    y: 0,
    c: ""
   },
   diamond: {
    x: -4,
    y: 0,
    c: ""
   },
   triangle: {
    x: -4,
    y: 0,
    c: ""
   },
   dot: {
    x: -2,
    y: 0,
    c: ""
   },
   flu1: {
    x: -.3,
    y: 0,
    c: ""
   },
   fld1: {
    x: -.3,
    y: 0,
    c: ""
   },
   flu2: {
    x: -.3,
    y: 0,
    c: ""
   },
   fld2: {
    x: -.3,
    y: 0,
    c: ""
   },
   flu3: {
    x: -.3,
    y: 3.5,
    c: ""
   },
   fld3: {
    x: -.3,
    y: -4,
    c: ""
   },
   flu4: {
    x: -.3,
    y: 8,
    c: ""
   },
   fld4: {
    x: -.3,
    y: -9,
    c: ""
   },
   flu5: {
    x: -.3,
    y: 12.5,
    c: ""
   },
   fld5: {
    x: -.3,
    y: -14,
    c: ""
   },
   "acc-1": {
    x: -1,
    y: 0,
    c: ""
   },
   acc3: {
    x: -1,
    y: 0,
    c: ""
   },
   acc1: {
    x: -2,
    y: 0,
    c: ""
   },
   acc2: {
    x: -3,
    y: 0,
    c: ""
   },
   "acc-2": {
    x: -3,
    y: 0,
    c: ""
   },
   "acc-1_1_4": {
    x: -2,
    y: 0,
    c: ""
   },
   "acc-1_3_4": {
    x: -3,
    y: 0,
    c: ""
   },
   acc1_1_4: {
    x: -1,
    y: 0,
    c: ""
   },
   acc1_3_4: {
    x: -3,
    y: 0,
    c: ""
   },
   accent: {
    x: -3,
    y: 0,
    c: ""
   },
   stc: {
    x: -1,
    y: -2,
    c: ""
   },
   emb: {
    x: -4,
    y: -2,
    c: ""
   },
   wedge: {
    x: -1,
    y: 0,
    c: ""
   },
   marcato: {
    x: -3,
    y: 0,
    c: ""
   },
   hld: {
    x: -7,
    y: 0,
    c: ""
   },
   brth: {
    x: 0,
    y: 0,
    c: ""
   },
   r00: {
    x: -1.5,
    y: 0,
    c: ""
   },
   r0: {
    x: -1.5,
    y: 0,
    c: ""
   },
   r1: {
    x: -3.5,
    y: -6,
    c: ""
   },
   r2: {
    x: -3.2,
    y: 0,
    c: ""
   },
   r4: {
    x: -3,
    y: 0,
    c: ""
   },
   r8: {
    x: -3,
    y: 0,
    c: ""
   },
   r16: {
    x: -4,
    y: 0,
    c: ""
   },
   r32: {
    x: -4,
    y: 0,
    c: ""
   },
   r64: {
    x: -4,
    y: 0,
    c: ""
   },
   r128: {
    x: -4,
    y: 0,
    c: ""
   },
   mrest: {
    x: -10,
    y: 0,
    c: ""
   },
   mrep: {
    x: -6,
    y: 0,
    c: ""
   },
   mrep2: {
    x: -9,
    y: 0,
    c: ""
   },
   p: {
    x: -4,
    y: -6,
    c: ""
   },
   f: {
    x: -4,
    y: -6,
    c: ""
   },
   pppp: {
    x: -4,
    y: -6,
    c: ""
   },
   ppp: {
    x: -4,
    y: -6,
    c: ""
   },
   pp: {
    x: -4,
    y: -6,
    c: ""
   },
   mp: {
    x: -4,
    y: -6,
    c: ""
   },
   mf: {
    x: -4,
    y: -6,
    c: ""
   },
   ff: {
    x: -4,
    y: -6,
    c: ""
   },
   fff: {
    x: -4,
    y: -6,
    c: ""
   },
   ffff: {
    x: -4,
    y: -6,
    c: ""
   },
   sfz: {
    x: -4,
    y: -6,
    c: ""
   },
   trl: {
    x: -4,
    y: -4,
    c: ""
   },
   turn: {
    x: -5,
    y: -4,
    c: ""
   },
   turnx: {
    x: -5,
    y: -4,
    c: ""
   },
   umrd: {
    x: -7,
    y: -2,
    c: ""
   },
   lmrd: {
    x: -7,
    y: -2,
    c: ""
   },
   dplus: {
    x: -4,
    y: 10,
    c: ""
   },
   sld: {
    x: -8,
    y: 12,
    c: ""
   },
   grm: {
    x: -2,
    y: 0,
    c: ""
   },
   dnb: {
    x: -4,
    y: 0,
    c: ""
   },
   upb: {
    x: -3,
    y: 0,
    c: ""
   },
   opend: {
    x: -2,
    y: 0,
    c: ""
   },
   roll: {
    x: 0,
    y: 0,
    c: ""
   },
   thumb: {
    x: 0,
    y: 0,
    c: ""
   },
   snap: {
    x: -2,
    y: 0,
    c: ""
   },
   ped: {
    x: -10,
    y: 0,
    c: ""
   },
   pedoff: {
    x: -5,
    y: 0,
    c: ""
   },
   mtro: {
    x: 0,
    y: 0,
    c: ""
   },
   mtrc: {
    x: 0,
    y: 0,
    c: ""
   },
   "mtr.": {
    x: 0,
    y: 0,
    c: ""
   },
   "mtr|": {
    x: 0,
    y: 0,
    c: ""
   },
   longa: {
    x: -3.7,
    y: 0,
    c: ""
   },
   custos: {
    x: -4,
    y: 3,
    c: ""
   },
   ltr: {
    x: 2,
    y: 6,
    c: ""
   }
  }, glyphs = {};
  function m_gl(e) {
   return e.replace(/[Cco]\||[co]\.|./g, function(e) {
    var t = tgls["mtr" + e];
    return t.x || t.y ? '<tspan dx="' + t.x.toFixed(1) + '" dy="' + t.y.toFixed(1) + '">' + t.c + "</tspan>" : t.c;
   });
  }
  function def_use(e) {
   var t, n, r;
   if (!defined_glyph[e]) if (defined_glyph[e] = !0, r = glyphs[e]) {
    for (n = 0; !((t = r.indexOf('xlink:href="#', n)) < 0); ) t += 13, n = r.indexOf('"', t), 
    def_use(r.slice(t, n));
    defs += "\n" + r;
   } else error(1, null, "Unknown glyph: '$1'", e);
  }
  function defs_add(e) {
   var t, n, r, i, s, o = 0;
   for (e = e.replace(/<!--.*?-->/g, ""); !((s = e.indexOf("<", o)) < 0 || (t = e.indexOf('id="', s)) < 0 || (t += 4, 
   (n = e.indexOf('"', t)) < 0) || (r = e.slice(t, n), (o = e.indexOf(">", n)) < 0)); ) {
    if ("/" == e[o - 1]) o++; else {
     if ((t = e.indexOf(" ", s)) < 0) break;
     if (i = e.slice(s + 1, t), (o = e.indexOf("</" + i + ">", o)) < 0) break;
     o += 3 + i.length;
    }
    "<filter" == e.substr(s, 7) ? fulldefs += "\n" + e.slice(s, o) : glyphs[r] = e.slice(s, o);
   }
  }
  function set_g() {
   stv_g.started && (stv_g.started = !1, output += "</g>\n"), (1 != stv_g.scale || stv_g.color) && (output += "<g ", 
   1 != stv_g.scale && (stv_g.st >= 0 ? output += staff_tb[stv_g.st].scale_str : output += voice_tb[stv_g.v].scale_str), 
   stv_g.color && (1 != stv_g.scale && (output += " "), output += 'color="' + stv_g.color + '" fill="' + stv_g.color + '"'), 
   output += ">\n", stv_g.started = !0);
  }
  function set_color(e) {
   if (e != stv_g.color) {
    var t = stv_g.color;
    return stv_g.color = e, set_g(), t;
   }
  }
  function set_sscale(e) {
   var t, n;
   e != stv_g.st && 1 != stv_g.scale && (stv_g.scale = 0), t = e >= 0 ? staff_tb[e].staffscale : 1, 
   n = e >= 0 && 1 != t ? staff_tb[e].y : posy, t == stv_g.scale && n == stv_g.dy || (stv_g.scale = t, 
   stv_g.dy = n, stv_g.st = e, set_g());
  }
  function set_scale(e) {
   var t = e.p_v.scale;
   1 != t ? t == stv_g.scale && stv_g.dy == posy || (stv_g.scale = t, stv_g.dy = posy, 
   stv_g.st = -1, stv_g.v = e.v, set_g()) : set_sscale(e.st);
  }
  function set_dscale(e, t) {
   output && (stv_g.st < 0 ? staff_tb[0].output += output : 1 == stv_g.scale ? staff_tb[stv_g.st].output += output : staff_tb[stv_g.st].sc_out += output, 
   output = ""), stv_g.scale = e < 0 ? 1 : t ? 1 : staff_tb[e].staffscale, stv_g.st = e, 
   stv_g.dy = 0;
  }
  function delayed_update() {
   var e;
   for (e = 0; e <= nstaff; e++) staff_tb[e].sc_out && (output += '<g transform="translate(0,' + (posy - staff_tb[e].y).toFixed(1) + ") scale(" + staff_tb[e].staffscale.toFixed(2) + ')">\n' + staff_tb[e].sc_out + "</g>\n", 
   staff_tb[e].sc_out = ""), staff_tb[e].output && (output += '<g transform="translate(0,' + (-staff_tb[e].y).toFixed(1) + ')">\n' + staff_tb[e].output + "</g>\n", 
   staff_tb[e].output = "");
  }
  var anno_type = [ "bar", "clef", "custos", "", "grace", "key", "meter", "Zrest", "note", "part", "rest", "yspace", "staves", "Break", "tempo", "", "block", "remark" ];
  function anno_out(e, t, n) {
   if (void 0 != e.istart) {
    var r = e.type, i = e.ymx - e.ymn + 4, s = e.wl || 2, o = e.wr || 2;
    e.grace && (r = C.GRACE), n(t || anno_type[r], e.istart, e.iend, e.x - s - 2, staff_tb[e.st].y + e.ymn + i - 2, s + o + 4, i, e);
   }
  }
  function a_start(e, t) {
   anno_out(e, t, user.anno_start);
  }
  function a_stop(e, t) {
   anno_out(e, t, user.anno_stop);
  }
  function empty_function() {}
  var anno_start = user.anno_start ? a_start : empty_function, anno_stop = user.anno_stop ? a_stop : empty_function;
  function out_XYAB(e, t, n, r, i) {
   t = sx(t), n = sy(n), output += e.replace(/X|Y|A|B|F|G/g, function(e) {
    switch (e) {
    case "X":
     return t.toFixed(1);

    case "Y":
     return n.toFixed(1);

    case "A":
     return r;

    case "B":
     return i;

    case "F":
     return r.toFixed(1);

    default:
     return i.toFixed(1);
    }
   });
  }
  function g_open(e, t, n, r, i) {
   out_XYAB('<g transform="translate(X,Y', e, t), n && (output += ") rotate(" + n.toFixed(2)), 
   r && (output += i ? ") scale(" + r.toFixed(2) + ", " + i.toFixed(2) : ") scale(" + r.toFixed(2)), 
   output += ')">\n', stv_g.g++;
  }
  function g_close() {
   stv_g.g--, output += "</g>\n";
  }
  function sx(e) {
   return stv_g.g ? e : (e + posx) / stv_g.scale;
  }
  function sy(e) {
   return stv_g.g ? -e : 1 == stv_g.scale ? posy - e : stv_g.st < 0 ? (posy - e) / stv_g.scale : stv_g.dy - e;
  }
  function out_sxsy(e, t, n) {
   e = sx(e), n = sy(n), output += e.toFixed(1) + t + n.toFixed(1);
  }
  function xypath(e, t, n) {
   out_XYAB(n ? '<path d="mX Y' : '<path class="stroke" d="mX Y', e, t);
  }
  function xygl(e, t, n) {
   var r = tgls[n];
   if (r && !glyphs[n]) return e += r.x * stv_g.scale, t -= r.y, void (r.sc ? out_XYAB('<text transform="translate(X,Y) scale(A)">B</text>\n', e, t, r.sc, r.c) : out_XYAB('<text x="X" y="Y">A</text>\n', e, t, r.c));
   glyphs[n] ? (def_use(n), out_XYAB('<use x="X" y="Y" xlink:href="#A"/>\n', e, t, n)) : error(1, null, "no definition of $1", n);
  }
  function out_acciac(e, t, n, r, i) {
   i ? (e -= 1, t += 4) : (e -= 5, t -= 4), out_XYAB('<path class="stroke" d="mX YlF G"/>\n', e, t, n, -r);
  }
  function out_bnum(e, t, n) {
   out_XYAB('<text style="font:italic 12px serif"\n x="X" y="Y" text-anchor="middle">A</text>\n', e, t, n.toString());
  }
  function out_brace(e, t, n) {
   t = posy - t, n /= 24, output += '<text transform="translate(' + (e += posx - 6).toFixed(1) + "," + t.toFixed(1) + ") scale(2.5," + n.toFixed(2) + ')">' + tgls.brace.c + "</text>\n";
  }
  function out_bracket(e, t, n) {
   t = posy - t - 3, n += 2, output += '<path d="m' + (e += posx - 5).toFixed(1) + " " + t.toFixed(1) + "\n c10.5 1 12 -4.5 12 -3.5c0 1 -3.5 5.5 -8.5 5.5\n v" + n.toFixed(1) + '\n c5 0 8.5 4.5 8.5 5.5c0 1 -1.5 -4.5 -12 -3.5"/>\n';
  }
  function out_hyph(e, t, n) {
   var r, i = 25 + 3 * (n / 20 | 0);
   out_XYAB('<path class="stroke" stroke-width="1.2"\n stroke-dasharray="5,A"\n d="mX YhB"/>\n', e += (n - i * (r = n > 15 ? (n - 15) / i | 0 : 0) - 5) / 2, t + 6, Math.round((i - 5) / stv_g.scale), i * r + 5);
  }
  function out_stem(e, t, n, r, i, s) {
   var o = r ? GSTEM_XOFF : 3.5, a = -n;
   if (n < 0 && (o = -o), e += o * stv_g.scale, stv_g.st < 0 && (a /= stv_g.scale), 
   out_XYAB('<path class="sW" d="mX YvF"/>\n', e, t, a), i) {
    if (t += n, n > 0) if (s) if (output += '<path d="', r) for (;--i >= 0; ) out_XYAB("MX Yl3 1.5 0 2 -3 -1.5z\n", e, t), 
    t -= 3; else for (t += 1; --i >= 0; ) out_XYAB("MX Yl7 3.2 0 3.2 -7 -3.2z\n", e, t), 
    t -= 5.4; else {
     if (!r) return void xygl(e, t, "flu" + i);
     if (output += '<path d="', 1 == i) out_XYAB("MX Yc0.6 3.4 5.6 3.8 3 10\n 1.2 -4.4 -1.4 -7 -3 -7\n", e, t); else for (;--i >= 0; ) out_XYAB("MX Yc1 3.2 5.6 2.8 3.2 8\n 1.4 -4.8 -2.4 -5.4 -3.2 -5.2\n", e, t), 
     t -= 3.5;
    } else if (s) {
     if (output += '<path d="', !r) for (t += 1; --i >= 0; ) out_XYAB("MX Yl7 -3.2 0 -3.2 -7 3.2z\n", e, t), 
     t += 5.4;
    } else {
     if (!r) return void xygl(e, t, "fld" + i);
     if (output += '<path d="', 1 == i) out_XYAB("MX Yc0.6 -3.4 5.6 -3.8 3 -10\n 1.2 4.4 -1.4 7 -3 7\n", e, t); else for (;--i >= 0; ) out_XYAB("MX Yc1 -3.2 5.6 -2.8 3.2 -8\n 1.4 4.8 -2.4 5.4 -3.2 5.2\n", e, t), 
     t += 3.5;
    }
    output += '"/>\n';
   }
  }
  function out_trem(e, t, n) {
   for (out_XYAB('<path d="mX Y\n\t', e - 4.5, t); output += "l9 -3v3l-9 3z", !(--n <= 0); ) output += "m0 5.4";
   output += '"/>\n';
  }
  function out_tubr(e, t, n, r, i) {
   var s = i ? -3 : 3;
   t += s, n /= stv_g.scale, output += '<path class="stroke" d="m', out_sxsy(e, " ", t), 
   output += "v" + s.toFixed(1) + "l" + n.toFixed(1) + " " + (-r).toFixed(1) + "v" + (-s).toFixed() + '"/>\n';
  }
  function out_tubrn(e, t, n, r, i, s) {
   var o = 10 * s.length, a = i ? -3 : 3;
   out_XYAB('<text style="font:italic 12px serif"\n x="X" y="Y" text-anchor="middle">A</text>\n', e + n / 2, t + r / 2, s), 
   n /= stv_g.scale, i || (t += 6), output += '<path class="stroke" d="m', out_sxsy(e, " ", t), 
   output += "v" + a.toFixed(1) + "m" + n.toFixed(1) + " " + (-r).toFixed(1) + "v" + (-a).toFixed(1) + '"/>\n<path class="stroke" stroke-dasharray="' + ((n - o) / 2).toFixed(1) + " " + o.toFixed(1) + '" d="m', 
   out_sxsy(e, " ", t - a), output += "l" + n.toFixed(1) + " " + (-r).toFixed(1) + '"/>\n';
  }
  function out_wln(e, t, n) {
   out_XYAB('<path class="stroke" stroke-width="0.8" d="mX YhF"/>\n', e, t + 3, n);
  }
  Abc.prototype.out_svg = function(e) {
   output += e;
  }, Abc.prototype.sx = sx, Abc.prototype.sy = sy, Abc.prototype.sh = function(e) {
   return stv_g.st < 0 ? e / stv_g.scale : e;
  }, Abc.prototype.ax = function(e) {
   return e + posx;
  }, Abc.prototype.ay = function(e) {
   return stv_g.st < 0 ? posy - e : posy + (stv_g.dy - e) * stv_g.scale - stv_g.dy;
  }, Abc.prototype.ah = function(e) {
   return stv_g.st < 0 ? e : e * stv_g.scale;
  }, Abc.prototype.out_sxsy = out_sxsy, Abc.prototype.xypath = xypath;
  var deco_str_style = {
   crdc: {
    dx: 0,
    dy: 5,
    style: "font:italic 14px serif"
   },
   dacs: {
    dx: 0,
    dy: 3,
    style: "font:16px serif",
    anchor: ' text-anchor="middle"'
   },
   fng: {
    dx: 0,
    dy: 1,
    style: "font-family:Bookman; font-size:8px",
    anchor: ' text-anchor="middle"'
   },
   pf: {
    dx: 0,
    dy: 5,
    style: "font:italic bold 16px serif"
   },
   "@": {
    dx: 0,
    dy: 5,
    style: "font: 12px sans-serif"
   }
  };
  function out_deco_str(e, t, n, r) {
   var i = deco_str_style[n];
   i ? (e += i.dx, t += i.dy, i.def || (style += "\n." + n + " {" + i.style + "}", 
   i.def = !0), out_XYAB('<text x="X" y="Y" class="A"B>', e, t, n, i.anchor || ""), 
   set_font("annotation"), out_str(r), output += "</text>\n") : xygl(e, t, n);
  }
  function out_arp(e, t, n) {
   for (g_open(e, t, 270), e = 0, n = Math.ceil(n / 6); --n >= 0; ) xygl(e, 6, "ltr"), 
   e += 6;
   g_close();
  }
  function out_cresc(e, t, n, r) {
   out_XYAB('<path class="stroke"\n d="mX YlA ', e += n, t + 5, n = -n), r.nost ? output += "-2.2m0 -3.6l" + (-n).toFixed(1) + ' -2.2"/>\n' : output += "-4l" + (-n).toFixed(1) + ' -4"/>\n';
  }
  function out_dim(e, t, n, r) {
   out_XYAB('<path class="stroke"\n d="mX YlA ', e, t + 5, n), r.noen ? output += "-2.2m0 -3.6l" + (-n).toFixed(1) + ' -2.2"/>\n' : output += "-4l" + (-n).toFixed(1) + ' -4"/>\n';
  }
  function out_ltr(e, t, n) {
   for (t += 4, n = Math.ceil(n / 6); --n >= 0; ) xygl(e, t, "ltr"), e += 6;
  }
  function out_lped(e, t, n, r) {
   t += 4, r.nost || xygl(e, t, "ped"), r.noen || xygl(e + n, t, "pedoff");
  }
  function out_8va(e, t, n, r) {
   r.nost ? n -= 5 : (out_XYAB('<text x="X" y="Y" style="font:italic bold 12px serif">8<tspan dy="-4" style="font-size:10px">va</tspan></text>\n', e - 8, t), 
   e += 12, n -= 12), out_XYAB('<path class="stroke" stroke-dasharray="6,6" d="mX YhF"/>\n', e, t += 6, n), 
   r.noen || out_XYAB('<path class="stroke" d="mX Yv6"/>\n', e + n, t);
  }
  function out_8vb(e, t, n, r) {
   r.nost ? n -= 5 : (out_XYAB('<text x="X" y="Y" style="font:italic bold 12px serif">8<tspan dy="-4" style="font-size:10px">vb</tspan></text>\n', e - 8, t), 
   e += 4, n -= 4), out_XYAB('<path class="stroke" stroke-dasharray="6,6" d="mX YhF"/>\n', e, t, n), 
   r.noen || out_XYAB('<path class="stroke" d="mX Yv-6"/>\n', e + n, t);
  }
  function out_15ma(e, t, n, r) {
   r.nost ? n -= 5 : (out_XYAB('<text x="X" y="Y" style="font:italic bold 12px serif">15<tspan dy="-4" style="font-size:10px">ma</tspan></text>\n', e - 10, t), 
   e += 20, n -= 20), out_XYAB('<path class="stroke" stroke-dasharray="6,6" d="mX YhF"/>\n', e, t += 6, n), 
   r.noen || out_XYAB('<path class="stroke" d="mX Yv6"/>\n', e + n, t);
  }
  function out_15mb(e, t, n, r) {
   r.nost ? n -= 5 : (out_XYAB('<text x="X" y="Y" style="font:italic bold 12px serif">15<tspan dy="-4" style="font-size:10px">mb</tspan></text>\n', e - 10, t), 
   e += 7, n -= 7), out_XYAB('<path class="stroke" stroke-dasharray="6,6" d="mX YhF"/>\n', e, t, n), 
   r.noen || out_XYAB('<path class="stroke" d="mX Yv-6"/>\n', e + n, t);
  }
  var deco_val_tb = {
   arp: out_arp,
   cresc: out_cresc,
   dim: out_dim,
   ltr: out_ltr,
   lped: out_lped,
   "8va": out_8va,
   "8vb": out_8vb,
   "15ma": out_15ma,
   "15mb": out_15mb
  };
  function out_deco_val(e, t, n, r, i) {
   deco_val_tb[n] ? deco_val_tb[n](e, t, r, i) : error(1, null, "No function for decoration '$1'", n);
  }
  function out_glisq(e, t, n) {
   var r = n.start, i = r.x, s = r.y + staff_tb[r.st].y, o = Math.atan2(s - t, e - i), a = o / Math.PI * 180, c = (e - i) / Math.cos(o);
   for (g_open(i, s, a), (c = (c - (i = r.s.dots ? 13 + r.s.xmx : 8) - 6) / 6 | 0) < 1 && (c = 1); --c >= 0; ) xygl(i, 0, "ltr"), 
   i += 6;
   g_close();
  }
  function out_gliss(e, t, n) {
   var r = n.start, i = r.x, s = r.y + staff_tb[r.st].y, o = -Math.atan2(t - s, e - i), a = o / Math.PI * 180, c = (e - i) / Math.cos(o);
   g_open(i, s, a), c -= (i = r.s.dots ? 13 + r.s.xmx : 8) + 8, xypath(i, 0), output += "h" + c.toFixed(1) + '" stroke-width="1"/>\n', 
   g_close();
  }
  var deco_l_tb = {
   glisq: out_glisq,
   gliss: out_gliss
  }, par_sy, cur_sy, voice_tb, curvoice, staves_found, vover, tsfirst;
  function out_deco_long(e, t, n) {
   var r = n.dd.glyph;
   deco_l_tb[r] ? deco_l_tb[r](e, t, n) : error(1, null, "No function for decoration '$1'", r);
  }
  function vskip(e) {
   posy += e;
  }
  function svg_flush() {
   if (!multicol && output && user.img_out && 0 != posy) {
    var e = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"\n xmlns:xlink="http://www.w3.org/1999/xlink"\n color="black" class="music" stroke-width=".7"', t = "";
    if (cfmt.bgcolor && (e += ' style="background-color: ' + cfmt.bgcolor + '"'), posy *= cfmt.scale, 
    user.imagesize ? e += "\n" + user.imagesize + ' viewBox="0 0 ' + img.width.toFixed(0) + " " + posy.toFixed(0) + '">\n' : e += '\n\twidth="' + img.width.toFixed(0) + 'px" height="' + posy.toFixed(0) + 'px">\n', 
    (style || font_style || musicfont) && (e += '<style type="text/css">' + style + font_style, 
    musicfont && (musicfont.indexOf("(") > 0 ? e += '\n.music{font:24px music}\n@font-face {\n  font-family:"music";\n  src:' + musicfont + "}" : e += "\n.music{font:24px " + musicfont + "}"), 
    e += "\n</style>\n"), (defs += fulldefs) && (e += "<defs>" + defs + "\n</defs>\n"), 
    1 != cfmt.scale && (e += '<g class="g" transform="scale(' + cfmt.scale.toFixed(2) + ')">\n', 
    t = "</g>\n"), psvg && psvg.ps_flush(!0), user.img_out(e + output + t + "</svg>"), 
    output = "", font_style = "", cfmt.fullsvg) {
     defined_glyph = {};
     for (var n = 0; n < font_tb.length; n++) font_tb[n].used = !1;
    } else musicfont = "", style = "", fulldefs = "";
    defs = "", posy = 0;
   }
  }
  function blk_out() {
   !multicol && user.img_out && (blk_flush(), user.page_format && !block.started && (block.started = !0, 
   block.newpage ? (block.newpage = !1, user.img_out('<div class="nobrk newpage">')) : user.img_out('<div class="nobrk">')));
  }
  function blk_flush() {
   svg_flush(), block.started && (block.started = !1, user.img_out("</div>"));
  }
  function voice_filter() {
   var e;
   function t(e, t) {
    var n, r = new RegExp(t);
    if (r.test(curvoice.id) || r.test(curvoice.nm)) for (n = 0; n < e.length; n++) self.do_pscom(e[n]);
   }
   if (parse.voice_opts) for (e in parse.voice_opts) parse.voice_opts.hasOwnProperty(e) && t(parse.voice_opts[e], e);
   if (parse.tune_v_opts) for (e in parse.tune_v_opts) parse.tune_v_opts.hasOwnProperty(e) && t(parse.tune_v_opts[e], e);
  }
  function sym_link(e) {
   e.fname || set_ref(e), curvoice.ignore || (parse.last_sym = e, e.prev = curvoice.last_sym, 
   curvoice.last_sym ? curvoice.last_sym.next = e : curvoice.sym = e, curvoice.last_sym = e), 
   e.v = curvoice.v, e.p_v = curvoice, e.st = curvoice.cst, e.time = curvoice.time, 
   e.dur && !e.grace && (curvoice.time += e.dur), e.pos = curvoice.pos, curvoice.second && (e.second = !0), 
   curvoice.floating && (e.floating = !0);
  }
  function sym_add(e, t) {
   var n, r = {
    type: t,
    dur: 0
   }, i = curvoice;
   return curvoice = e, sym_link(r), curvoice = i, (n = r.prev) || (n = r.next), n && (r.fname = n.fname, 
   r.istart = n.istart, r.iend = n.iend), r;
  }
  function mrest_expand(e) {
   var t, n, r, i = e.nmes, s = e.dur / i, o = e.a_dd;
   for (e.type = C.REST, e.dur = e.dur_orig = s, r = e.next, (t = e.p_v).last_sym = e, 
   t.time = e.time + s, t.cst = e.st, n = e; --i > 0; ) (n = sym_add(t, C.BAR)).bar_type = "|", 
   n = sym_add(t, C.REST), e.invis && (n.invis = !0), n.dur = n.dur_orig = s, t.time += s;
   n.next = r, r && (r.prev = n), n.a_dd = o;
  }
  Abc.prototype.blk_out = blk_out, Abc.prototype.blk_flush = blk_flush;
  var w_tb = new Uint8Array([ 2, 1, 8, 0, 3, 5, 6, 9, 9, 0, 9, 3, 0, 7, 0, 0, 0, 0 ]);
  function sort_all() {
   var e, t, n, r, i, s, o, a, c, l, u, f, d = voice_tb.length, p = [], h = [], m = -1;
   for (t = 0; t < d; t++) p.push(voice_tb[t].sym);
   for (var g = 1, y = cur_sy; ;) {
    if (y && g) for (f = y, y = null, o = -1, h = [], t = 0; t < d; t++) f.voices[t] ? (s = f.voices[t].range) < 0 || (h[s] = t, 
    o++) : f.voices[t] = {
     range: -1
    };
    for (i = n = 1e6, s = 0; s < d && void 0 != (t = h[s]); s++) !(e = p[t]) || e.time > n || (r = w_tb[e.type], 
    e.time < n ? (n = e.time, i = r) : r < i && (i = r), e.type == C.MREST && (1 == e.nmes ? mrest_expand(e) : o > 0 && (m = n)));
    if (i > 127) break;
    if (n == m) {
     for (c = 0, s = 0; s < d && void 0 != (t = h[s]); s++) if ((e = p[t]) && e.time == n && w_tb[e.type] == i) {
      if (e.type != C.MREST) {
       m = -1;
       break;
      }
      if (0 == c) c = e.nmes; else if (c != e.nmes) {
       m = -1;
       break;
      }
     }
     if (m < 0) for (s = 0; s < d && void 0 != (t = h[s]); s++) (e = p[t]) && e.type == C.MREST && mrest_expand(e);
    }
    for (s = 0; s < d && void 0 != (t = h[s]); s++) if ((e = p[t]) && e.time == n && w_tb[e.type] == i) {
     if (e.type == C.STAVES) {
      for (y = e.sy, l = 0; l < d && void 0 != h[l]; l++) ;
      for (u = 0; u < d; u++) y.voices[u] && ((s = y.voices[u].range) < 0 || f.voices[u].range >= 0 || (h[l++] = u));
     }
     g && (g = 0, e.seqst = !0), e.ts_prev = a, a ? a.ts_next = e : tsfirst = e, a = e, 
     p[t] = e.next;
    }
    g = i;
   }
  }
  function voice_adj() {
   var e, t, n, r;
   function i(e) {
    var t, n, r, i, s, o, a = e.dur, c = 1;
    for (t = e; t && (!t.beam_end && t.next); t = t.next) c++;
    if (c <= 1) delete e.feathered_beam; else {
     if (n = t, i = a / 2, o = a / (c - 1), r = e.time, e.feathered_beam > 0) for (t = e, 
     s = c - 1; t != n; t = t.next, s--) a = (o * s | 0) + i, t.dur = a, t.time = r, 
     r += a; else for (t = e, s = 0; t != n; t = t.next, s++) a = (o * s | 0) + i, t.dur = a, 
     t.time = r, r += a;
     t.dur = t.time + t.dur - r, t.time = r;
    }
   }
   for ((t = glovar.tempo) && staves_found <= 0 && (r = par_sy.top_voice, (e = voice_tb[r]).sym && e.sym.type != C.TEMPO && ((t = clone(t)).v = r, 
   t.p_v = e, t.st = e.st, t.time = 0, t.next = e.sym, t.next && (t.next.prev = t), 
   e.sym = t)), r = 0; r < voice_tb.length; r++) {
    for ((e = voice_tb[r]).ignore && (e.ignore = !1), t = e.sym; t && !(t.time >= staves_found); t = t.next) ;
    for (;t; t = t.next) {
     switch (t.type) {
     case C.GRACE:
      if (t.next && t.next.type == C.BAR && t.time--, !cfmt.graceword) continue;
      for (n = t.next; n; n = n.next) {
       switch (n.type) {
       case C.SPACE:
        continue;

       case C.NOTE:
        if (!n.a_ly) break;
        t.a_ly = n.a_ly, n.a_ly = null;
       }
       break;
      }
      continue;
     }
     t.feathered_beam && i(t);
    }
   }
  }
  function dupl_voice() {
   var e, t, n, r, i, s, o, a, c = voice_tb.length;
   for (o = 0; o < c; o++) if (t = (e = voice_tb[o]).clone) {
    for (e.clone = null, n = e.sym; n && !(n.time >= staves_found); n = n.next) ;
    for (t.clef = clone(e.clef), curvoice = t; n; n = n.next) if (n.type != C.STAVES) {
     if (r = clone(n), n.notes) for (r.notes = [], a = 0; a <= n.nhd; a++) r.notes.push(clone(n.notes[a]));
     if (sym_link(r), t.second ? r.second = !0 : delete r.second, t.floating ? r.floating = !0 : delete r.floating, 
     delete r.a_ly, i = r.extra) for (s = clone(i), r.extra = s, (r = s).v = t.v, r.p_v = t, 
     r.st = t.st, i = i.next; i; i = i.next) {
      if (s = clone(i), i.notes) for (s.notes = [], a = 0; a <= i.nhd; a++) s.notes.push(clone(i.notes[a]));
      r.next = s, s.prev = r, (r = s).v = t.v, r.p_v = t, r.st = t.st;
     }
    }
   }
  }
  function new_syst(e) {
   var t, n, r = {
    voices: [],
    staves: [],
    top_voice: 0
   };
   if (e) cur_sy = par_sy = r; else {
    for (n = 0; n < voice_tb.length; n++) {
     if (par_sy.voices[n].range >= 0) {
      t = par_sy.voices[n].st;
      var i = par_sy.staves[t], s = voice_tb[n];
      void 0 != s.staffnonote && (i.staffnonote = s.staffnonote), s.staffscale && (i.staffscale = s.staffscale);
     }
     r.voices[n] = clone(par_sy.voices[n]), r.voices[n].range = -1, delete r.voices[n].second;
    }
    for (t = 0; t < par_sy.staves.length; t++) r.staves[t] = clone(par_sy.staves[t]), 
    r.staves[t].flags = 0;
    par_sy.next = r, par_sy = r;
   }
  }
  function set_bar_num() {
   var e, t, n, r, i, s, o = cur_sy.top_voice, a = voice_tb[o].meter.wmeasure, c = gene.nbar;
   for (e = tsfirst; ;e = e.ts_next) {
    if (!e) return;
    switch (e.type) {
    case C.METER:
     a = e.wmeasure;

    case C.CLEF:
    case C.KEY:
    case C.STBRK:
     continue;

    case C.BAR:
     if (e.bar_num) {
      gene.nbar = e.bar_num;
      break;
     }
     e.text && !cfmt.contbarnb && ("1" == e.text[0] ? c = gene.nbar : (gene.nbar = c, 
     e.bar_num = gene.nbar));
    }
    break;
   }
   if (r = e.time + a, 0 == e.time) for (t = e.ts_next; t; t = t.ts_next) if (t.type == C.BAR && t.time) {
    t.time < r && (r = (e = t).time + a);
    break;
   }
   for (i = gene.nbar; e; e = e.ts_next) switch (e.type) {
   case C.METER:
    a = e.wmeasure, e.time < r && (r = e.time + a);
    break;

   case C.MREST:
    for (i += e.nmes - 1; e.ts_next && e.ts_next.type != C.BAR; ) e = e.ts_next;
    break;

   case C.BAR:
    if (e.bar_num && (i = e.bar_num), e.time < r) {
     e.text && "1" == e.text[0] && (c = i, s = r - e.time);
     break;
    }
    n = e.time, t = e;
    do {
     if (t.dur) break;
     if (t.type == C.BAR && t.text) break;
     t = t.next;
    } while (t && t.time == n);
    if (i++, t && t.type == C.BAR && t.text) if ("1" == t.text[0]) s = 0, c = i; else if (cfmt.contbarnb || (i = c), 
    s) {
     cfmt.contbarnb && i--, r = n + s;
     break;
    }
    for (e.bar_num = i, r = n + a; e.ts_next && !e.ts_next.seqst; ) e = e.ts_next;
   }
   cfmt.measurenb < 0 && (gene.nbar = i);
  }
  function get_map(e) {
   if (e) {
    var t, n, r, i, s, o, a = info_split(e);
    if (a.length < 3) syntax(1, "Not enough parameters in %%map"); else {
     if (0 == (o = a[1]).indexOf("octave,") || 0 == o.indexOf("key,")) "k" == (o = o.replace(/[,']+$/m, "").toLowerCase())[0] && (o = o.replace(/[_=^]+/, "")); else if ("*" == o[0] || 0 == o.indexOf("all")) o = "all"; else {
      if ((s = new scanBuf()).buffer = a[1], !(n = parse_acc_pit(s))) return void syntax(1, "Bad note in %%map");
      o = note2abc(n);
     }
     if ((r = maps[a[0]]) || (maps[a[0]] = r = {}), (i = r[o]) || (r[o] = i = []), a[2]) {
      if (t = 2, a[2].indexOf("=") < 0) {
       if ("*" != a[2][0] && ((s = new scanBuf()).buffer = a[2], i[1] = parse_acc_pit(s)), 
       !a[3]) return;
       t++, a[3].indexOf("=") < 0 && (i[0] = a[3].split(","), t++);
      }
      for (;t < a.length; t++) switch (a[t]) {
      case "heads=":
       i[0] = a[++t].split(",");
       break;

      case "print=":
       if ("play" == cfmt.sound) break;
       (s = new scanBuf()).buffer = a[++t], i[1] = parse_acc_pit(s);
       break;

      case "color=":
       i[2] = a[++t];
      }
     }
    }
   }
  }
  function set_transp() {
   var e, t;
   if (!curvoice.ckey.k_bagpipe && !curvoice.ckey.k_drum && (cfmt.transp && curvoice.transp && syntax(0, "Mix of old and new transposition syntaxes"), 
   (t = (cfmt.transp || 0) + (curvoice.transp || 0) + (curvoice.shift || 0)) != (curvoice.vtransp || 0))) {
    if (curvoice.vtransp = t, !(e = curvoice.last_sym)) return curvoice.key = clone(curvoice.okey), 
    key_transp(curvoice.key), curvoice.ckey = clone(curvoice.key), void (curvoice.key.k_none && (curvoice.key.k_sf = 0));
    for (;e.type != C.KEY; ) {
     if (!e.prev) {
      e = curvoice.key;
      break;
     }
     e = e.prev;
    }
    key_transp(e), curvoice.ckey = clone(e), curvoice.key.k_none && (e.k_sf = 0);
   }
  }
  function do_pscom(e) {
   var t, n, r, i, s, o, a, c;
   if (i = e.match(/(\w|-)+/)) {
    if (i = i[0], " lock" == (s = e.replace(i, "").trim()).slice(-5)) fmt_lock[i] = !0, 
    s = s.slice(0, -5).trim(); else if (fmt_lock[i]) return;
    switch (i) {
    case "center":
     return parse.state >= 2 ? ((r = new_block("text")).text = cnv_escape(s), void (r.opt = "c")) : void write_text(cnv_escape(s), "c");

    case "clef":
     return void (parse.state >= 2 && (2 == parse.state && goto_tune(), (r = new_clef(s)) && get_clef(r)));

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
       syntax(1, "%%multicol new without start");
       break;
      }
      posy > multicol.maxy && (multicol.maxy = posy), cfmt.leftmargin = multicol.lmarg, 
      cfmt.rightmargin = multicol.rmarg, img.chg = !0, set_page(), posy = multicol.posy;
      break;

     case "end":
      if (!multicol) {
       syntax(1, "%%multicol end without start");
       break;
      }
      posy < multicol.maxy && (posy = multicol.maxy), cfmt.leftmargin = multicol.lmarg, 
      cfmt.rightmargin = multicol.rmarg, multicol = void 0, blk_flush(), img.chg = !0, 
      set_page();
      break;

     default:
      syntax(1, "Unknown keyword '$1' in %%multicol", s);
     }
     return;

    case "musicfont":
     return void (musicfont = s);

    case "ottava":
     if (3 != parse.state) {
      if (2 != parse.state) return;
      goto_tune();
     }
     return o = parseInt(s), isNaN(o) || o < -2 || o > 2 ? void syntax(1, errs.bad_val, "%%ottava") : (glovar.ottava = !0, 
     void (parse.ottava = o));

    case "repbra":
     return void (parse.state >= 2 && (2 == parse.state && goto_tune(), curvoice.norepbra = !get_bool(s)));

    case "repeat":
     if (3 != parse.state) return;
     if (!curvoice.last_sym) return void syntax(1, "%%repeat cannot start a tune");
     if (s.length) {
      if (c = s.split(/\s+/), o = parseInt(c[0]), a = parseInt(c[1]), isNaN(o) || o < 1 || curvoice.last_sym.type == C.BAR && o > 2) return void syntax(1, "Incorrect 1st value in %%repeat");
      if (isNaN(a)) a = 1; else if (a < 1) return void syntax(1, "Incorrect 2nd value in %%repeat");
     } else o = 1, a = 1;
     return parse.repeat_n = curvoice.last_sym.type == C.BAR ? o : -o, void (parse.repeat_k = a);

    case "sep":
     var l, u, f, d;
     return set_page(), d = img.width - img.lm - img.rm, t = l = u = 0, s && (t = get_unit((f = s.split(/\s+/))[0]), 
     f[1] && (l = get_unit(f[1]), f[2] && (u = get_unit(f[2])))), t < 1 && (t = 14), 
     l < 1 && (l = t), u < 1 && (u = 90), parse.state >= 2 ? ((r = new_block(i)).x = (d - u) / 2 / cfmt.scale, 
     r.l = u / cfmt.scale, r.sk1 = t, void (r.sk2 = l)) : (blk_out(), vskip(t), output += '<path class="stroke"\n\td="M', 
     out_sxsy((d - u) / 2 / cfmt.scale, " ", 0), output += "h" + (u / cfmt.scale).toFixed(1) + '"/>\n', 
     vskip(l), void blk_flush());

    case "setbarnb":
     return n = parseInt(s), void (isNaN(n) || n < 1 ? syntax(1, "Bad %%setbarnb value") : parse.state >= 2 ? glovar.new_nbar = n : cfmt.measurefirst = n);

    case "staff":
     if (3 != parse.state) {
      if (2 != parse.state) return;
      goto_tune();
     }
     return n = parseInt(s), isNaN(n) ? void syntax(1, "Bad %%staff value '$1'", s) : (p = "+" == s[0] || "-" == s[0] ? curvoice.cst + n : n - 1) < 0 || p > nstaff ? void syntax(1, "Bad %%staff number $1 (cur $2, max $3)", p, curvoice.cst, nstaff) : (delete curvoice.floating, 
     void (curvoice.cst = p));
     var p;

    case "staffbreak":
     if (3 != parse.state) {
      if (2 != parse.state) return;
      goto_tune();
     }
     return r = {
      type: C.STBRK,
      dur: 0
     }, s[0] >= "0" && s[0] <= "9" ? (r.xmx = get_unit(s), "f" == s.slice(-1) && (r.stbrk_forced = !0)) : (r.xmx = 14, 
     "f" == s[0] && (r.stbrk_forced = !0)), void sym_link(r);

    case "stafflines":
    case "staffscale":
    case "staffnonote":
     return void self.set_v_param(i, s);

    case "staves":
    case "score":
     if (0 == parse.state) return;
     return void (parse.scores && parse.scores.length > 0 ? get_staves((i = (e = parse.scores.shift()).match(/([^\s]+)\s*(.*)/))[1], i[2]) : get_staves(i, s));

    case "sysstaffsep":
     if (3 == parse.state) return void (par_sy.voices[curvoice.v].sep = get_unit(s));
     break;

    case "text":
     return parse.state >= 2 ? ((r = new_block(i)).text = cnv_escape(s), void (r.opt = cfmt.textoption)) : void write_text(cnv_escape(s), cfmt.textoption);

    case "transpose":
     if (cfmt.sound) return;
     switch (parse.state) {
     case 0:
      cfmt.transp = 0;

     case 1:
     case 2:
      return void (cfmt.transp = (cfmt.transp || 0) + get_transp(s));
     }
     for (r = curvoice.last_sym; r; r = r.prev) {
      switch (r.type) {
      case C.NOTE:
       (r = clone(curvoice.okey)).k_old_sf = curvoice.ckey.k_sf, sym_link(r);
       break;

      case C.KEY:
       break;

      default:
       continue;
      }
      break;
     }
     return void do_info("V", curvoice.id + " shift=" + s);

    case "tune":
     return;

    case "user":
     return void set_user(s);

    case "voicecolor":
     if (3 != parse.state) {
      if (2 != parse.state) return;
      goto_tune();
     }
     return void (curvoice.color = s);

    case "vskip":
     return (n = get_unit(s)) < 0 ? void syntax(1, "%%vskip cannot be negative") : parse.state >= 2 ? void ((r = new_block(i)).sk = n) : void vskip(n);

    case "newpage":
    case "leftmargin":
    case "rightmargin":
    case "pagescale":
    case "pagewidth":
    case "printmargin":
    case "scale":
    case "staffwidth":
     if (3 == parse.state) return void ((r = new_block(i)).param = s);
     if ("newpage" == i) return blk_flush(), void (block.newpage = !0);
    }
    self.set_format(i, s);
   }
  }
  function do_begin_end(e, t, n) {
   var r, i, s, o;
   switch (e) {
   case "js":
    js_inject(n);
    break;

   case "ml":
    parse.state >= 2 ? (o = new_block(e)).text = n : (svg_flush(), user.img_out && user.img_out(n));
    break;

   case "svg":
    for (i = 0; !((r = n.indexOf('<style type="text/css">\n', i)) < 0); ) {
     if ((i = n.indexOf("</style>", r)) < 0) {
      syntax(1, "No </style> in %%beginsvg sequence");
      break;
     }
     style += n.slice(r + 23, i).replace(/\s+$/, "");
    }
    for (i = 0; !((r = n.indexOf("<defs>\n", i)) < 0); ) {
     if ((i = n.indexOf("</defs>", r)) < 0) {
      syntax(1, "No </defs> in %%beginsvg sequence");
      break;
     }
     defs_add(n.slice(r + 6, i));
    }
    break;

   case "text":
    if ((s = get_textopt(t)) || (s = cfmt.textoption), parse.state >= 2) {
     (o = new_block(e)).text = cnv_escape(n), o.opt = s;
     break;
    }
    write_text(cnv_escape(n), s);
   }
  }
  function generate() {
   var e, t;
   if (vover && (syntax(1, "No end of voice overlay"), get_vover(vover.bar ? "|" : ")")), 
   0 != voice_tb.length && (voice_adj(), dupl_voice(), sort_all(), tsfirst && (self.set_bar_num(), 
   tsfirst))) {
    for (user.get_abcmodel && user.get_abcmodel(tsfirst, voice_tb, anno_type, info), 
    user.img_out && self.output_music(), e = 0; e < voice_tb.length; e++) (t = voice_tb[e]).time = 0, 
    t.sym = t.last_sym = null, t.st = cur_sy.voices[e].st, t.second = cur_sy.voices[e].second, 
    delete t.have_ly, t.hy_st = 0, delete t.bar_start, delete t.slur_st, delete t.s_tie, 
    delete t.s_rtie;
    staves_found = 0;
   }
  }
  function key_transp(e) {
   var t = curvoice.vtransp / 3 | 0, n = (-2 & t) + 7 * (1 & t) + e.k_sf;
   switch ((curvoice.vtransp + 210) % 3) {
   case 1:
    n = (n + 4 + 48) % 12 - 4;
    break;

   case 2:
    n = (n + 7 + 48) % 12 - 7;
    break;

   default:
    n = (n + 5 + 48) % 12 - 5;
   }
   e.k_sf = n, e.k_delta = cgd2cde[(n + 7) % 7];
  }
  function set_k_acc(e) {
   var t, n, r, i, s, o = [], a = [], c = [], l = [];
   if (e.k_sf > 0) for (i = 0; i < e.k_sf; i++) o[i] = 1, a[i] = [ 26, 23, 27, 24, 21, 25, 22 ][i]; else for (i = 0; i < -e.k_sf; i++) o[i] = -1, 
   a[i] = [ 22, 25, 21, 24, 20, 23, 26 ][i];
   for (r = e.k_a_acc.length, t = 0; t < r; t++) {
    for (s = e.k_a_acc[t], n = 0; n < i; n++) if (a[n] == s.pit) {
     o[n] = s.acc, s.micro_n && (c[n] = s.micro_n, l[n] = s.micro_d);
     break;
    }
    n == i && (o[n] = s.acc, a[n] = s.pit, s.micro_n && (c[n] = s.micro_n, l[n] = s.micro_d), 
    i++);
   }
   for (t = 0; t < i; t++) (s = e.k_a_acc[t]) || (s = e.k_a_acc[t] = {}), s.acc = o[t], 
   s.pit = a[t], c[t] ? (s.micro_n = c[t], s.micro_d = l[t]) : (delete s.micro_n, delete s.micro_d);
  }
  function acc_same_pitch(e) {
   var t, n, r = curvoice.last_sym.prev;
   if (r) for (n = r.time; r; r = r.prev) switch (r.type) {
   case C.BAR:
    if (r.time < n) return;
    for (;;) {
     if (!(r = r.prev)) return;
     if (r.type == C.NOTE) {
      if (r.time + r.dur == n) break;
      return;
     }
     if (r.time < n) return;
    }
    for (t = 0; t <= r.nhd; t++) if (r.notes[t].pit == e && r.notes[t].ti1) return r.notes[t].acc;
    return;

   case C.NOTE:
    for (t = 0; t <= r.nhd; t++) if (r.notes[t].pit == e) return r.notes[t].acc;
   }
  }
  function get_staves(e, t) {
   var n, r, i, s, o, a, c, l, u = parse_staves(t);
   if (u) {
    0 != voice_tb.length && (voice_adj(), dupl_voice());
    var f = 0, d = !0;
    for (a = 0; a < voice_tb.length; a++) (r = voice_tb[a]).time > f && (f = r.time), 
    r.sym && (d = !1);
    if (d || 0 == f && staves_found < 0) for (a = 0; a < par_sy.voices.length; a++) par_sy.voices[a].range = -1; else {
     for (a = 0; a < par_sy.voices.length; a++) if (par_sy.voices[a].range >= 0) {
      curvoice = voice_tb[a];
      break;
     }
     curvoice.time = f, sym_link(n = {
      type: C.STAVES,
      dur: 0
     }), par_sy.nstaff = nstaff, new_syst(), n.sy = par_sy;
    }
    for (staves_found = f, a = 0; a < voice_tb.length; a++) delete (r = voice_tb[a]).second, 
    delete r.ignore, delete r.floating;
    for (l = 0, s = 0; s < u.length; s++) {
     if ((r = new_voice(u[s][0])).time = f, a = r.v, 0 == s && (par_sy.top_voice = r.v), 
     par_sy.voices[a].range >= 0) {
      for (i = clone(r), par_sy.voices[voice_tb.length] = clone(par_sy.voices[a]), a = voice_tb.length, 
      i.v = a, i.sym = i.last_sym = null, i.time = f, voice_tb.push(i), delete i.clone; r.clone; ) r = r.clone;
      r.clone = i, r = i;
     }
     u[s][0] = r, par_sy.voices[a].range = l++;
    }
    if ("t" == e[1]) for (s = 0; s < u.length; s++) (o = u[s][1]) & (OPEN_BRACE | OPEN_BRACE2) && (o & (OPEN_BRACE | CLOSE_BRACE)) != (OPEN_BRACE | CLOSE_BRACE) && (o & (OPEN_BRACE2 | CLOSE_BRACE2)) != (OPEN_BRACE2 | CLOSE_BRACE2) && 0 == u[s + 1][1] && (o & OPEN_PARENTH || u[s + 2][1] & OPEN_PARENTH || (u[s + 2][1] & (CLOSE_BRACE | CLOSE_BRACE2) ? u[s + 1][1] |= FL_VOICE : 0 == u[s + 2][1] && u[s + 3][1] & (CLOSE_BRACE | CLOSE_BRACE2) && (u[s][1] |= OPEN_PARENTH, 
    u[s + 1][1] |= CLOSE_PARENTH, u[s + 2][1] |= OPEN_PARENTH, u[s + 3][1] |= CLOSE_PARENTH)));
    for (c = -1, s = 0; s < u.length; s++) if (((o = u[s][1]) & (OPEN_PARENTH | CLOSE_PARENTH)) == (OPEN_PARENTH | CLOSE_PARENTH) && (o &= ~(OPEN_PARENTH | CLOSE_PARENTH), 
    u[s][1] = o), r = u[s][0], o & FL_VOICE ? (r.floating = !0, r.second = !0) : (c++, 
    par_sy.staves[c] || (par_sy.staves[c] = {
     stafflines: "|||||",
     staffscale: 1
    }), par_sy.staves[c].flags = 0), a = r.v, r.st = r.cst = par_sy.voices[a].st = c, 
    par_sy.staves[c].flags |= o, o & OPEN_PARENTH) {
     for (i = r; s < u.length - 1 && (a = (r = u[++s][0]).v, u[s][1] & MASTER_VOICE ? (i.second = !0, 
     i = r) : r.second = !0, r.st = r.cst = par_sy.voices[a].st = c, !(u[s][1] & CLOSE_PARENTH)); ) ;
     par_sy.staves[c].flags |= u[s][1];
    }
    if (c < 0 && (c = 0), par_sy.nstaff = nstaff = c, "c" == e[1]) for (c = 0; c < nstaff; c++) par_sy.staves[c].flags ^= STOP_BAR;
    for (a = 0; a < voice_tb.length; a++) r = voice_tb[a], par_sy.voices[a].range < 0 ? r.ignore = !0 : (par_sy.voices[a].second = r.second, 
    !((c = r.st) > 0) || r.norepbra || par_sy.staves[c - 1].flags & STOP_BAR || (r.norepbra = !0));
    curvoice = parse.state >= 2 ? voice_tb[par_sy.top_voice] : null;
   }
  }
  function get_vover(e) {
   var t, n, r, i, s, o, a, c;
   parse.line;
   function l(e) {
    var t, n;
    for (t = 0; t < voice_tb.length; t++) if ((n = voice_tb[t]).id == e) return n;
    return (n = clone(curvoice)).v = voice_tb.length, n.id = e, n.sym = n.last_sym = null, 
    delete n.nm, delete n.snm, delete n.new_name, delete n.lyric_restart, delete n.lyric_cont, 
    delete n.ly_a_h, delete n.sym_restart, delete n.sym_cont, delete n.have_ly, voice_tb.push(n), 
    n;
   }
   if (!curvoice.ignore) {
    if ("|" == e || ")" == e) return curvoice.last_note ? (curvoice.last_note.beam_end = !0, 
    vover ? (curvoice.time != vover.p_voice.time && (syntax(1, "Wrong duration in voice overlay"), 
    curvoice.time > vover.p_voice.time && (vover.p_voice.time = curvoice.time)), curvoice = vover.p_voice, 
    void (vover = null)) : void syntax(1, "Erroneous end of voice overlay")) : void syntax(1, errs.nonote_vo);
    if ("(" == e) return vover ? void syntax(1, "Voice overlay already started") : void (vover = {
     p_voice: curvoice,
     time: curvoice.time
    });
    if (curvoice.last_note) {
     if (curvoice.last_note.beam_end = !0, !(t = curvoice.voice_down)) {
      t = l(curvoice.id + "o"), curvoice.voice_down = t, t.time = 0, t.second = !0, a = t.v, 
      par_sy.voices[a] = {
       st: curvoice.st,
       second: !0
      };
      var u = void 0 != curvoice.clone ? 1 : 0;
      for (r = par_sy.voices[curvoice.v].range, o = 0; o < par_sy.voices.length; o++) par_sy.voices[o].range > r && (par_sy.voices[o].range += u + 1);
      par_sy.voices[a].range = r + 1, u && ((n = l(t.id + "c")).second = !0, c = n.v, 
      par_sy.voices[c] = {
       second: !0,
       range: r + 2
      }, t.clone = n);
     }
     if (t.ulen = curvoice.ulen, t.dur_fact = curvoice.dur_fact, curvoice.uscale && (t.uscale = curvoice.uscale), 
     vover) curvoice != vover.p_voice && curvoice.time != vover.p_voice.time && (syntax(1, "Wrong duration in voice overlay"), 
     curvoice.time > vover.p_voice.time && (vover.p_voice.time = curvoice.time)); else {
      for (vover = {
       bar: !0,
       p_voice: curvoice
      }, s = t.time, i = curvoice.last_sym; !(i.type == C.BAR || i.time <= s); i = i.prev) ;
      vover.time = i.time;
     }
     t.time = vover.time, curvoice = t;
    } else syntax(1, errs.nonote_vo);
   }
  }
  function is_voice_sig() {
   var e;
   if (!curvoice.sym) return !0;
   if (0 != curvoice.time) return !1;
   for (e = curvoice.last_sym; e; e = e.prev) if (0 != w_tb[e.type]) return !1;
   return !0;
  }
  function get_clef(e) {
   is_voice_sig() ? curvoice.clef = e : (sym_link(e), e.clef_small = !0);
  }
  function get_key(e) {
   var t, n, r, i, s = new_key(e), o = s[0];
   switch (s = s[1], o.k_sf && !o.k_exp && o.k_a_acc && set_k_acc(o), parse.state) {
   case 1:
    for (void 0 != o.k_sf || o.k_a_acc || (o.k_sf = 0, o.k_none = !0), t = 0; t < voice_tb.length; t++) (n = voice_tb[t]).key = clone(o), 
    n.okey = clone(o), n.ckey = clone(o);
    return parse.ckey = o, 0 != s.length && memo_kv_parm("*", s), glovar.ulen || (glovar.ulen = C.BLEN / 8), 
    void (parse.state = 2);

   case 2:
    goto_tune(!0);
   }
   if (0 != s.length && set_kv_parm(s), curvoice.ckey.k_bagpipe || curvoice.ckey.k_drum || (i = (cfmt.transp || 0) + (curvoice.transp || 0) + (curvoice.shift || 0)), 
   void 0 == o.k_sf) {
    if (!o.k_a_acc && !i) return;
    o.k_sf = curvoice.okey.k_sf;
   }
   if (curvoice.okey = clone(o), i && (curvoice.vtransp = i, key_transp(o)), o.k_old_sf = curvoice.ckey.k_sf, 
   curvoice.ckey = o, is_voice_sig()) return curvoice.key = clone(o), void (o.k_none && (curvoice.key.k_sf = 0));
   (r = curvoice.last_sym) && r.type == C.METER ? (curvoice.last_sym = r.prev, curvoice.last_sym || (curvoice.sym = null), 
   sym_link(o), o.next = r, r.prev = o, curvoice.last_sym = r) : sym_link(o);
  }
  function new_voice(e) {
   var t, n, r, i = voice_tb.length;
   if (1 == i && voice_tb[0].default && (delete voice_tb[0].default, 0 == voice_tb[0].time)) return (t = voice_tb[0]).id = e, 
   cfmt.transp && parse.state >= 2 && (r = curvoice, curvoice = t, set_transp(), curvoice = r), 
   t;
   for (n = 0; n < i; n++) if ((t = voice_tb[n]).id == e) return t;
   return t = {
    v: n,
    id: e,
    time: 0,
    new: !0,
    pos: {
     dyn: 0,
     gch: 0,
     gst: 0,
     orn: 0,
     stm: 0,
     voc: 0,
     vol: 0
    },
    scale: 1,
    ulen: glovar.ulen,
    dur_fact: 1,
    key: clone(parse.ckey),
    ckey: clone(parse.ckey),
    okey: clone(parse.ckey),
    meter: clone(glovar.meter),
    wmeasure: glovar.meter.wmeasure,
    clef: {
     type: C.CLEF,
     clef_auto: !0,
     clef_type: "a",
     time: 0
    },
    hy_st: 0
   }, voice_tb.push(t), par_sy.voices[n] = {
    range: -1
   }, t;
  }
  function init_tune() {
   nstaff = -1, voice_tb = [], curvoice = null, new_syst(!0), staves_found = -1, gene = {}, 
   a_de = [];
  }
  function do_cloning(e) {
   for (var t, n, r = parse.file, i = parse.eol + 1, s = i; ;) {
    if ((n = r.indexOf("\n", s)) < 0) {
     n = 0;
     break;
    }
    if (/%.*|\n.*|.:.|\[.:/.test(r.slice(n + 1, n + 4))) break;
    s = n + 1;
   }
   for (include++, tosvg(parse.fname, r, i, n), t = 0; t < e.length; t++) get_voice(e[t]), 
   tosvg(parse.fname, r, i, n);
   include--;
  }
  function get_voice(e) {
   var t, n, r = info_split(e), i = r.shift();
   if (i) {
    if (i.indexOf(",") > 0 && (i = (n = i.split(",")).shift()), parse.state < 2) return 0 != r.length && memo_kv_parm(i, r), 
    void ("*" != i && 1 == parse.state && new_voice(i));
    "*" != i ? (curvoice = new_voice(i), set_kv_parm(r), 2 == parse.state && goto_tune(), 
    set_transp(), t = curvoice.v, curvoice.new && (delete curvoice.new, staves_found < 0 && (curvoice.st = curvoice.cst = ++nstaff, 
    par_sy.nstaff = nstaff, par_sy.voices[t].st = nstaff, par_sy.voices[t].range = t, 
    par_sy.staves[nstaff] = {
     stafflines: curvoice.stafflines || "|||||",
     staffscale: 1
    }), par_sy.voices[t].range < 0 && staves_found >= 0 && (curvoice.ignore = !0)), 
    curvoice.filtered || curvoice.ignore || !parse.voice_opts && !parse.tune_v_opts || (curvoice.filtered = !0, 
    voice_filter()), n && do_cloning(n)) : syntax(1, "Cannot have V:* in tune body");
   }
  }
  function goto_tune(e) {
   var t, n, r = {
    type: C.STAVES,
    dur: 0,
    sy: par_sy
   };
   for (set_page(), write_heading(), reset_gen(), gene.nbar = cfmt.measurefirst, parse.state = 3, 
   0 == voice_tb.length ? (get_voice("1"), curvoice.clef.istart = curvoice.key.istart, 
   curvoice.clef.iend = curvoice.key.iend, curvoice.default = !0) : curvoice || (curvoice = voice_tb[staves_found < 0 ? 0 : par_sy.top_voice]), 
   curvoice.init || e || (set_kv_parm([]), set_transp()), t = 0; t < voice_tb.length; t++) (n = voice_tb[t]).ulen = glovar.ulen, 
   n.ckey.k_bagpipe && !n.pos.stm && (n.pos = clone(n.pos), n.pos.stm = C.SL_BELOW);
   if (staves_found < 0) {
    for (nstaff = voice_tb.length - 1, t = 0; t <= nstaff; t++) delete (n = voice_tb[t]).new, 
    n.st = n.cst = par_sy.voices[t].st = par_sy.voices[t].range = t, par_sy.staves[t] = {
     stafflines: n.stafflines || "|||||",
     staffscale: 1
    };
    par_sy.nstaff = nstaff;
   }
   n = curvoice, curvoice = voice_tb[par_sy.top_voice], sym_link(r), curvoice = n;
  }
  function get_sym(e, t) {
   var n, r, i, s, o;
   if (!curvoice.ignore) {
    if (t) {
     if (!(n = curvoice.sym_cont)) return void syntax(1, "+: symbol line without music");
    } else if (curvoice.sym_restart ? (curvoice.sym_start = n = curvoice.sym_restart, 
    curvoice.sym_restart = null) : n = curvoice.sym_start, n || (n = curvoice.sym), 
    !n) return void syntax(1, "s: without music");
    for (i = 0; ;) {
     for (;" " == e[i] || "\t" == e[i]; ) i++;
     if (!(r = e[i])) break;
     switch (r) {
     case "|":
      for (;n && n.type != C.BAR; ) n = n.next;
      if (!n) return void syntax(1, "Not enough measure bars for symbol line");
      n = n.next, i++;
      continue;

     case "!":
     case '"':
      if (s = ++i, (i = e.indexOf(r, s)) < 0) {
       syntax(1, "!" == r ? "No end of decoration" : "No end of guitar chord"), i = e.length;
       continue;
      }
      o = e.slice(s - 1, i + 1);
      break;

     case "*":
      break;

     default:
      if ((o = r.charCodeAt(0)) < 128 && (o = char_tb[o]).length > 1 && ("!" == o[0] || '"' == o[0])) {
       r = o[0];
       break;
      }
      syntax(1, errs.bad_char, r);
     }
     for (;n && (n.type != C.NOTE || n.grace); ) n = n.next;
     if (!n) return void syntax(1, "Too many elements in symbol line");
     switch (r) {
     default:
      break;

     case "!":
      deco_cnv([ o.slice(1, -1) ], n, n.prev);
      break;

     case '"':
      a_gch = n.a_gch, parse_gchord(o), a_gch && self.gch_build(n);
     }
     n = n.next, i++;
    }
    curvoice.lyric_cont = n;
   }
  }
  function get_lyrics(e, t) {
   var n, r, i, s, o, a;
   if (!curvoice.ignore) {
    if (curvoice.pos.voc != C.SL_HIDDEN && (curvoice.have_ly = !0), t) {
     if (!(n = curvoice.lyric_cont)) return void syntax(1, "+: lyric without music");
    } else if (set_font("vocal"), curvoice.lyric_restart ? (curvoice.lyric_start = n = curvoice.lyric_restart, 
    curvoice.lyric_restart = null, curvoice.lyric_line = 0) : (curvoice.lyric_line++, 
    n = curvoice.lyric_start), n || (n = curvoice.sym), !n) return void syntax(1, "w: without music");
    for (i = e, s = 0; ;) {
     for (;" " == i[s] || "\t" == i[s]; ) s++;
     if (!i[s]) break;
     switch (o = parse.istart + s + 2, i[s]) {
     case "|":
      for (;n && n.type != C.BAR; ) n = n.next;
      if (!n) return void syntax(1, "Not enough measure bars for lyric line");
      n = n.next, s++;
      continue;

     case "-":
      r = "-\n";
      break;

     case "_":
      r = "_\n";
      break;

     case "*":
      r = "";
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
        r += "Â ", s++;
        continue;

       case "-":
        r += "\n";
        break;

       case "\\":
        r += i[++s], s++;
        continue;

       default:
        r += i[s++];
        continue;
       }
       break;
      }
     }
     for (;n && (n.type != C.NOTE || n.grace); ) n = n.next;
     if (!n) return void syntax(1, "Too many words in lyric line");
     r && n.pos.voc != C.SL_HIDDEN && (r.match(/^\$\d/) && ("0" == r[1] ? set_font("vocal") : set_font("u" + r[1]), 
     r = r.slice(2)), a = {
      t: r,
      font: gene.curfont,
      wh: strwh(r),
      istart: o,
      iend: o + r.length
     }, n.a_ly || (n.a_ly = []), n.a_ly[curvoice.lyric_line] = a), n = n.next, s++;
    }
    curvoice.lyric_cont = n;
   }
  }
  function ly_width(e, t) {
   var n, r, i, s, o, a, c, l, u, f, d, p = e.a_ly;
   for (s = 0, c = 0; c < p.length; c++) if (n = p[c]) if ("-\n" != (d = n.t) && "_\n" != d) {
    for (a = n.wh[0], i = n.font.swfac, o = a + 2 * cwid(" ") * i, e.type == C.GRACE ? f = e.wl : d[0] >= "0" && d[0] <= "9" && d.length > 2 || ":" == d[1] || "(" == d[0] || ")" == d[0] ? ("(" == d[0] ? r = cwid("(") * i : (l = d.indexOf("Â "), 
    set_font(n.font), r = l > 0 ? strwh(d.slice(0, l))[0] : .2 * a), (f = .4 * (a - r + 2 * cwid(" ") * i)) > 20 && (f = 20), 
    f += r, n.t[0] >= "0" && n.t[0] <= "9" && f > s && (s = f)) : (f = .4 * o) > 20 && (f = 20), 
    n.shift = f, t < f && (t = f), o -= f, f = 2 * cwid(" ") * i, u = e.next; u; u = u.next) {
     switch (u.type) {
     case C.NOTE:
     case C.REST:
      if (u.a_ly && u.a_ly[c]) {
       if ("-\n" != u.a_ly[c].t && "_\n" != u.a_ly[c].t) break;
       o -= f;
      } else o -= 9;
      if (o <= 0) break;
      continue;

     case C.CLEF:
     case C.METER:
     case C.KEY:
      o -= 10;
      continue;

     default:
      o -= 5;
     }
     break;
    }
    o > e.wr && (e.wr = o);
   } else n.shift = 0;
   if (s > 0) for (c = 0; c < p.length; c++) (n = p[c]) && n.t[0] >= "0" && n.t[0] <= "9" && (n.shift = s);
   return t;
  }
  function draw_lyric_line(e, t, n) {
   var r, i, s, o, a, c, l, u, f, d;
   for (e.hy_st & 1 << t && (l = !0, e.hy_st &= ~(1 << t)), o = e.sym; o.type == C.CLEF || o.type == C.KEY || o.type == C.METER; o = o.next) ;
   for (i = o.prev ? o.prev.x : tsfirst.x, f = 0; o; o = o.next) if (c = o.a_ly ? o.a_ly[t] : null) c.font != gene.curfont && (gene.curfont = c.font), 
   r = c.t, s = c.wh[0], d = c.shift, l && ("_\n" == r ? r = "-\n" : "-\n" != r && (out_hyph(i, n, o.x - d - i), 
   l = !1, i = o.x + o.wr)), u && "_\n" != r && (out_wln(i + 3, n, f - i + 3), u = !1, 
   i = o.x + o.wr), "-\n" != r && "_\n" != r ? (f = o.x - d, "\n" == r.slice(-1) && (r = r.slice(0, -1), 
   l = !0), (user.anno_start || user.anno_stop) && (a = {
    st: o.st,
    istart: c.istart,
    iend: c.iend,
    x: f,
    y: n,
    ymn: n,
    ymx: n + gene.curfont.size,
    wl: 0,
    wr: s
   }, anno_start(a, "lyrics")), xy_str(f, n, r, null, null, c.wh), anno_stop(a, "lyrics"), 
   i = f + s) : (0 == f && i > o.x - 18 && (i = o.x - 18), "-" == r[0] ? l = !0 : u = !0, 
   f = o.x - d); else switch (o.type) {
   case C.REST:
   case C.MREST:
    u && (out_wln(i + 3, n, f - i), u = !1, i = o.x + o.wr);
   }
   for (l && (l = !1, (f = realwidth - 10) < i + 10 && (f = i + 10), out_hyph(i, n, f - i), 
   cfmt.hyphencont && (e.hy_st |= 1 << t)), e.s_next; o; o = o.next) if (o.type == C.NOTE) {
    if (!o.a_ly) break;
    (c = o.a_ly[t]) && "_\n" == c.t && (u = !0, (f = realwidth - 15) < i + 12 && (f = i + 12));
    break;
   }
   u && (out_wln(i + 3, n, f - i + 3), u = !1);
  }
  function draw_lyrics(e, t, n, r, i) {
   var s, o, a = staff_tb[e.st].staffscale;
   if (set_font("vocal"), i > 0) {
    for (r > -cfmt.vocalspace && (r = -cfmt.vocalspace), r *= a, s = 0; s < t; s++) draw_lyric_line(e, s, r -= 1.1 * n[s]);
    return (r - n[s - 1] / 6) / a;
   }
   for (r < (o = staff_tb[e.st].topbar + cfmt.vocalspace) && (r = o), r *= a, s = t; --s >= 0; ) draw_lyric_line(e, s, r), 
   r += 1.1 * n[s];
   return r / a;
  }
  function draw_all_lyrics() {
   var e, t, n, r, i, s, o, a, c, l, u = new Array(nstaff), f = voice_tb.length, d = new Array(f), p = new Array(f), h = new Array(f), m = new Array(f), g = 0, y = 0, v = -1;
   for (n = 0; n < f; n++) if ((e = voice_tb[n]).sym) {
    if (e.st != v && (g = 0, y = 0, v = e.st), r = 0, e.have_ly) {
     for (d[n] || (d[n] = []), t = e.sym; t; t = t.next) if (c = t.a_ly) {
      for (s = t.x, a = 10, i = 0; i < c.length; i++) if (l = c[i]) {
       s -= l.shift, a = l.wh[0];
       break;
      }
      for (g < (o = y_get(e.st, 1, s, a)) && (g = o), y > (o = y_get(e.st, 0, s, a)) && (y = o); r < c.length; ) d[n][r++] = 0;
      for (i = 0; i < c.length; i++) (l = c[i]) && (!d[n][i] || l.font.size > d[n][i]) && (d[n][i] = l.font.size);
     }
    } else g < (o = y_get(e.st, 1, 0, realwidth)) && (g = o), y > (o = y_get(e.st, 0, 0, realwidth)) && (y = o);
    u[v] || (u[v] = {}), u[v].top = g, u[v].bot = y, p[n] = r, 0 != r && (e.pos.voc ? h[n] = e.pos.voc == C.SL_ABOVE : voice_tb[n + 1] && voice_tb[n + 1].st == v && voice_tb[n + 1].have_ly ? h[n] = !0 : h[n] = !1, 
    h[n] ? u[v].a = !0 : u[v].b = !0);
   }
   for (i = 0, n = 0; n < f; n++) (e = voice_tb[n]).sym && e.have_ly && (h[n] ? m[i++] = n : (set_dscale(v = e.st, !0), 
   p[n] > 0 && (u[v].bot = draw_lyrics(e, p[n], d[n], u[v].bot, 1))));
   for (;--i >= 0; ) n = m[i], set_dscale(v = (e = voice_tb[n]).st, !0), u[v].top = draw_lyrics(e, p[n], d[n], u[v].top, -1);
   for (n = 0; n < f; n++) if ((e = voice_tb[n]).sym) {
    if (u[v = e.st].a) for (g = u[v].top + 2, t = e.sym.next; t; t = t.next) t.a_ly && y_set(v, 1, t.x - 2, 10, g);
    if (u[v].b) if (y = u[v].bot - 2, p[e.v] > 0) for (t = e.sym.next; t; t = t.next) t.a_ly && y_set(v, 0, t.x - 2, 10, y); else y_set(v, 0, 0, realwidth, y);
   }
  }
  function parse_gchord(e) {
   var t, n, r, i, s, o, a, c, l = get_font("annotation"), u = l.size, f = parse.line;
   function d() {
    for (var e = ""; ;) {
     if (t = n[o++], "1234567890.-".indexOf(t) < 0) return parseFloat(e);
     e += t;
    }
   }
   if (a = parse.bol + f.index, e.length > 1) n = e.slice(1, -1), c = a + 1; else {
    for (n = ""; ;) {
     if (!(t = f.next_char())) return void syntax(1, "No end of guitar chord");
     if ('"' == t) break;
     "\\" == t && (n += t, t = f.next_char()), n += t;
    }
    c = parse.bol + f.index + 1;
   }
   if (curvoice.pos.gch != C.SL_HIDDEN) for (l.box && (u += 3), o = 0, e = "g"; t = n[o]; ) {
    switch (r = {
     text: "",
     istart: a,
     iend: c,
     font: l
    }, t) {
    case "@":
     e = t, o++, i = d(), "," != t ? (syntax(1, "',' lacking in annotation '@x,y'"), 
     s = 0) : (s = d(), " " != t && o--), r.x = i, r.y = s - u / 2;
     break;

    case "^":
    case "_":
    case "<":
    case ">":
     o++, e = t;
     break;

    default:
     switch (e) {
     case "g":
      r.font = get_font("gchord");
      break;

     case "@":
      r.x = i, s -= u, r.y = s - u / 2;
     }
    }
    for (r.type = e; t = n[o]; ) {
     switch (t) {
     case "\\":
      if (!(t = n[++o]) || "n" == t) break;
      r.text += "\\";

     default:
      r.text += t, o++;
      continue;

     case "&":
      for (;;) {
       switch (r.text += t, t = n[++o]) {
       default:
        continue;

       case ";":
       case void 0:
       case "\\":
       }
       break;
      }
      if (";" == t) {
       o++, r.text += t;
       continue;
      }
      break;

     case ";":
     }
     o++;
     break;
    }
    a_gch || (a_gch = []), a_gch.push(r);
   }
  }
  var note_names = "CDEFGAB", acc_name = [ "bb", "b", "", "#", "##" ], hook_init;
  function gch_tr1(e, t) {
   var n, r, i, s, o, a, c, l;
   if ((r = note_names.indexOf(e[0])) < 0 && "/" != e[0]) return e;
   if (c = 1, r >= 0) {
    for (a = 0; "#" == e[c]; ) a++, c++;
    for (;"b" == e[c]; ) a--, c++;
    s = cde2fcg[r] + t + 7 * a, o = cgd2cde[(s + 112) % 7], i = (159 + ((s + 22) / 7 | 0)) % 5, 
    n = note_names[o] + acc_name[i];
   }
   return (l = e.indexOf("/", c)) < 0 ? n + e.slice(c) : (r = note_names.indexOf(e[++l])) < 0 ? n + e.slice(c) : (n += e.slice(c, l), 
   a = 0, "#" == e[++l] ? (a++, "#" == e[++l] && (a++, l++)) : "b" == e[l] && (a--, 
   "b" == e[++l] && (a--, l++)), s = cde2fcg[r] + t + 7 * a, o = cgd2cde[(s + 112) % 7], 
   i = (159 + ((s + 22) / 7 | 0)) % 5, n + note_names[o] + acc_name[i] + e.slice(l));
  }
  function gch_transp(e) {
   var t, n = 0, r = curvoice.ckey.k_sf - curvoice.okey.k_sf;
   for (n = 0; n < e.a_gch.length; n++) "g" == (t = e.a_gch[n]).type && (t.text = gch_tr1(t.text, r));
  }
  function gch_build(e) {
   var t, n, r, i, s = curvoice.pos.gch == C.SL_BELOW ? -1 : 1, o = 0, a = 0, c = 0, l = 0;
   for (e.a_gch = a_gch, a_gch = null, curvoice.vtransp && gch_transp(e), i = 0; i < e.a_gch.length; i++) {
    if ("g" == (t = e.a_gch[i]).type) cfmt.chordnames && (t.otext = t.text, t.text = t.text.replace(/A|B|C|D|E|F|G/g, function(e) {
     return cfmt.chordnames[e];
    }), "H" == cfmt.chordnames.B && (t.text = t.text.replace(/Hb/g, "Bb"))), t.text = t.text.replace(/##|#|=|bb|b|  /g, function(e) {
     switch (e) {
     case "##":
      return "&#x1d12a;";

     case "#":
      return "♯";

     case "=":
      return "♮";

     case "b":
      return "♭";

     case "  ":
      return " Â ";
     }
     return "&#x1d12b;";
    }); else if (t.text = cnv_escape(t.text), "@" == t.type && !user.anno_start && !user.anno_stop) {
     t.wh = [ 0, 0 ];
     continue;
    }
    switch (set_font(t.font), n = strwh(t.text), t.wh = n, t.font.box && (n[1] += 4), 
    t.type) {
    case "@":
     break;

    case "^":
     (r = .4 * n[0]) > 8 && (r = 8), t.x = -r, o -= n[1], t.y = o;
     break;

    case "_":
     (r = .4 * n[0]) > 8 && (r = 8), t.x = -r, a -= n[1], t.y = a;
     break;

    case "<":
     t.x = -(n[0] + 6), c -= n[1], t.y = c + n[1] / 2;
     break;

    case ">":
     t.x = 6, l -= n[1], t.y = l + n[1] / 2;
     break;

    default:
     (r = .4 * n[0]) > 8 && (r = 8), t.x = -r, s < 0 ? (a -= n[1], t.y = a) : (o -= n[1], 
     t.y = o);
    }
   }
   for (c /= 2, l /= 2, i = 0; i < e.a_gch.length; i++) switch ((t = e.a_gch[i]).type) {
   case "^":
    t.y -= o;
    break;

   case "<":
    t.y -= c;
    break;

   case ">":
    t.y -= l;
    break;

   case "g":
    s > 0 && (t.y -= o);
   }
  }
  function draw_gchord(e, t, n) {
   var r, i, s, o, a, c, l, u, f, d, p = 0, h = e.dur ? 3 * ((e.notes[e.nhd].pit + e.notes[0].pit >> 1) - 18) : 12;
   for (s = 0; s < e.a_gch.length; s++) (r = e.a_gch[s]).wh[0] > p && (p = r.wh[0]);
   for (f = y_get(e.st, 1, e.x - 2, p), d = y_get(e.st, 0, e.x - 2, p), f < n && (f = n), 
   d > t && (d = t), set_dscale(e.st), s = 0; s < e.a_gch.length; s++) {
    switch (use_font((r = e.a_gch[s]).font), set_font(r.font), u = r.font.size, l = r.font.box ? 2 : 0, 
    p = r.wh[0], o = e.x + r.x, i = r.text, r.type) {
    case "_":
     a = r.y + d, y_set(e.st, 0, o, p, a - l);
     break;

    case "^":
     a = r.y + f + l, y_set(e.st, 1, o, p, a + u + l);
     break;

    case "<":
     e.notes[0].acc && (o -= e.notes[0].shac), a = r.y + h - u / 2;
     break;

    case ">":
     e.xmx && (o += e.xmx), e.dots && (o += 1.5 + 3.5 * e.dots), a = r.y + h - u / 2;
     break;

    default:
     r.y >= 0 ? (a = r.y + f + l, y_set(e.st, !0, o, p, a + u + l)) : (a = r.y + d, y_set(e.st, !1, o, p, a - l));
     break;

    case "@":
     (a = r.y + h) > 0 ? (c = a + u) > staff_tb[e.st].ann_top && (staff_tb[e.st].ann_top = c) : a < staff_tb[e.st].ann_bot && (staff_tb[e.st].ann_bot = a);
    }
    user.anno_start && user.anno_start("annot", r.istart, r.iend, o - 2, a + u + 2, p + 4, u + 4, e), 
    xy_str(o, a, i, null, null, r.wh), user.anno_stop && user.anno_stop("annot", r.istart, r.iend, o - 2, a + u + 2, p + 4, u + 4, e);
   }
  }
  function psdeco() {
   return !1;
  }
  function psxygl() {
   return !1;
  }
  function set_hooks() {
   var e = abc2svg.modules.hooks, t = abc2svg.modules.g_hooks;
   function n(e) {
    for (var t = 0; t < e.length; t++) e[t](self);
   }
   hook_init ? e.length && (n(e), t.push.apply(t, e), abc2svg.modules.hooks = []) : (e.length && (t.push.apply(t, e), 
   abc2svg.modules.hooks = []), n(t), hook_init = !0);
  }
  init_tune(), Abc.prototype.add_style = function(e) {
   style += e;
  }, Abc.prototype.calculate_beam = calculate_beam, Abc.prototype.cfmt = function() {
   return cfmt;
  }, Abc.prototype.clone = clone, Abc.prototype.deco_cnv = deco_cnv, Abc.prototype.do_pscom = do_pscom, 
  Abc.prototype.do_begin_end = do_begin_end, Abc.prototype.draw_gchord = draw_gchord, 
  Abc.prototype.draw_note = draw_note, Abc.prototype.draw_symbols = draw_symbols, 
  Abc.prototype.errs = errs, Abc.prototype.font_class = font_class, Abc.prototype.gch_build = gch_build, 
  Abc.prototype.gch_tr1 = gch_tr1, Abc.prototype.get_a_gch = function() {
   return a_gch;
  }, Abc.prototype.get_bool = get_bool, Abc.prototype.get_cur_sy = function() {
   return cur_sy;
  }, Abc.prototype.get_curvoice = function() {
   return curvoice;
  }, Abc.prototype.get_delta_tb = function() {
   return delta_tb;
  }, Abc.prototype.get_decos = function() {
   return decos;
  }, Abc.prototype.get_fname = function() {
   return parse.fname;
  }, Abc.prototype.get_font = get_font, Abc.prototype.get_font_style = function() {
   return font_style;
  }, Abc.prototype.get_glyphs = function() {
   return glyphs;
  }, Abc.prototype.get_img = function() {
   return img;
  }, Abc.prototype.get_maps = function() {
   return maps;
  }, Abc.prototype.get_multi = function() {
   return multicol;
  }, Abc.prototype.get_newpage = function() {
   if (block.newpage) return block.newpage = !1, !0;
  }, Abc.prototype.get_posy = function() {
   var e = posy;
   return posy = 0, e;
  }, Abc.prototype.get_staff_tb = function() {
   return staff_tb;
  }, Abc.prototype.get_top_v = function() {
   return par_sy.top_voice;
  }, Abc.prototype.get_tsfirst = function() {
   return tsfirst;
  }, Abc.prototype.get_unit = get_unit, Abc.prototype.get_voice_tb = function() {
   return voice_tb;
  }, Abc.prototype.goto_tune = goto_tune, Abc.prototype.info = function() {
   return info;
  }, Abc.prototype.new_block = new_block, Abc.prototype.new_note = new_note, Abc.prototype.out_arp = out_arp, 
  Abc.prototype.out_deco_str = out_deco_str, Abc.prototype.out_deco_val = out_deco_val, 
  Abc.prototype.out_ltr = out_ltr, Abc.prototype.output_music = output_music, Abc.prototype.param_set_font = param_set_font, 
  Abc.prototype.parse = parse, Abc.prototype.psdeco = psdeco, Abc.prototype.psxygl = psxygl, 
  Abc.prototype.set_bar_num = set_bar_num, Abc.prototype.set_cur_sy = function(e) {
   cur_sy = e;
  }, Abc.prototype.set_dscale = set_dscale, Abc.prototype.set_font = set_font, Abc.prototype.set_format = set_format, 
  Abc.prototype.set_pitch = set_pitch, Abc.prototype.set_scale = set_scale, Abc.prototype.set_stem_dir = set_stem_dir, 
  Abc.prototype.set_stems = set_stems, Abc.prototype.set_sym_glue = set_sym_glue, 
  Abc.prototype.set_tsfirst = function(e) {
   tsfirst = e;
  }, Abc.prototype.set_vp = set_vp, Abc.prototype.set_v_param = set_v_param, Abc.prototype.set_width = set_width, 
  Abc.prototype.sort_pitch = sort_pitch, Abc.prototype.strwh = strwh, Abc.prototype.stv_g = function() {
   return stv_g;
  }, Abc.prototype.svg_flush = svg_flush, Abc.prototype.syntax = syntax, Abc.prototype.unlksym = unlksym, 
  Abc.prototype.use_font = use_font, Abc.prototype.xy_str = xy_str, Abc.prototype.xygl = xygl;
 }
}, Abc = abc2svg.Abc;

"object" == typeof module && "object" == typeof exports && (exports.abc2svg = abc2svg, 
exports.Abc = Abc), abc2svg.loadjs = function(e, t, n) {
 n && n();
}, abc2svg.modules = {
 ambitus: {
  fn: "ambitus-1.js"
 },
 beginps: {
  fn: "psvg-1.js"
 },
 break: {
  fn: "break-1.js"
 },
 capo: {
  fn: "capo-1.js"
 },
 clip: {
  fn: "clip-1.js"
 },
 voicecombine: {
  fn: "combine-1.js"
 },
 diagram: {
  fn: "diag-1.js"
 },
 equalbars: {
  fn: "equalbars-1.js"
 },
 grid: {
  fn: "grid-1.js"
 },
 grid2: {
  fn: "grid2-1.js"
 },
 MIDI: {
  fn: "MIDI-1.js"
 },
 pageheight: {
  fn: "page-1.js"
 },
 percmap: {
  fn: "perc-1.js"
 },
 soloffs: {
  fn: "soloffs-1.js"
 },
 sth: {
  fn: "sth-1.js"
 },
 temperament: {
  fn: "temper-1.js"
 },
 nreq: 0,
 hooks: [],
 g_hooks: [],
 load: function(e, t, n) {
  var r, i = this.nreq, s = e.match(/(^|\n)(%%|I:).+?\b/g);
  if (!s) return !0;
  this.cbf = t || function() {}, this.errmsg = n || ("object" == typeof user && user.errmsg ? user.errmsg : "function" == typeof printErr ? printErr : "function" == typeof alert ? function(e) {
   alert(e);
  } : "object" == typeof console ? console.log : function() {});
  for (var o = 0; o < s.length; o++) (r = abc2svg.modules[s[o].replace(/\n?(%%|I:)/, "")]) && !r.loaded && (r.loaded = !0, 
  this.nreq++, abc2svg.loadjs(r.fn, function() {
   0 == --abc2svg.modules.nreq && abc2svg.modules.cbf();
  }, function() {
   abc2svg.modules.errmsg("error loading " + r.fn), 0 == --abc2svg.modules.nreq && abc2svg.modules.cbf();
  }));
  return this.nreq == i;
 }
}, abc2svg.version = "1.19.4", abc2svg.vdate = "2019-04-25";

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
   }, o = Z, a = "@", c = J("@", !1), l = function(e, t) {
    var n = {
     upper: e
    };
    return t && (n.lower = t[1]), n;
   }, u = "&", f = J("&", !1), d = "", p = function(e) {
    return {
     score_fingerings: e
    };
   }, h = "/", m = J("/", !1), g = function(e, t, n) {
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
   }, v = function(e, t, n) {
    var r = {
     first: e,
     last: null,
     segmenter: n
    };
    return t && (r.last = t[1]), r;
   }, _ = "(", A = J("(", !1), b = ")", x = J(")", !1), w = function(e) {
    return {
     ornaments: e[1]
    };
   }, C = function(e, t, n) {
    return {
     soft: e,
     fingering: t,
     damper: n
    };
   }, k = "x", E = J("x", !1), B = function(e, t) {
    return {
     soft: e,
     fingering: {
      strike: null,
      release: null
     },
     damper: t
    };
   }, T = "-", I = J("-", !1), S = function(e, t) {
    var n = {
     strike: e,
     release: null
    };
    return t && (n.release = t[1]), n;
   }, M = function(e, t) {
    return {
     hand: e,
     digit: t
    };
   }, N = /^[_\^]/, O = G([ "_", "^" ], !1, !1), D = /^[,;.]/, F = G([ ",", ";", "." ], !1, !1), R = /^[pf]/, Q = G([ "p", "f" ], !1, !1), j = /^[<>]/, P = G([ "<", ">" ], !1, !1), U = /^[1-5]/, L = G([ [ "1", "5" ] ], !1, !1), V = 0, z = [ {
    line: 1,
    column: 1
   } ], H = 0, Y = [], q = 0;
   if ("startRule" in n) {
    if (!(n.startRule in s)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
    o = s[n.startRule];
   }
   function J(e, t) {
    return {
     type: "literal",
     text: e,
     ignoreCase: t
    };
   }
   function G(e, t, n) {
    return {
     type: "class",
     parts: e,
     inverted: t,
     ignoreCase: n
    };
   }
   function X(e) {
    var n, r = z[e];
    if (r) return r;
    for (n = e - 1; !z[n]; ) n--;
    for (r = {
     line: (r = z[n]).line,
     column: r.column
    }; n < e; ) 10 === t.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
    return z[e] = r, r;
   }
   function W(e, t) {
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
   function K(e) {
    V < H || (V > H && (H = V, Y = []), Y.push(e));
   }
   function $(t, n, r) {
    return new e(e.buildMessage(t, n), t, n, r);
   }
   function Z() {
    var e, n, r, s, o;
    return e = V, (n = ee()) !== i ? (r = V, 64 === t.charCodeAt(V) ? (s = a, V++) : (s = i, 
    0 === q && K(c)), s !== i && (o = ee()) !== i ? r = s = [ s, o ] : (V = r, r = i), 
    r === i && (r = null), r !== i ? e = n = l(n, r) : (V = e, e = i)) : (V = e, e = i), 
    e;
   }
   function ee() {
    var e, n, r, s;
    return e = V, (n = te()) !== i ? (38 === t.charCodeAt(V) ? (r = u, V++) : (r = i, 
    0 === q && K(f)), r !== i && (s = ee()) !== i ? e = n = [ n, r, s ] : (V = e, e = i)) : (V = e, 
    e = i), e === i && (e = te()) === i && (e = d), e;
   }
   function te() {
    var e, t;
    for (V, e = [], t = ne(); t !== i; ) e.push(t), t = ne();
    return e !== i && (e = p(e)), e;
   }
   function ne() {
    var e, n, r, s, o;
    return e = V, (n = re()) !== i ? (r = V, 47 === t.charCodeAt(V) ? (s = h, V++) : (s = i, 
    0 === q && K(m)), s !== i && (o = re()) !== i ? r = s = [ s, o ] : (V = r, r = i), 
    r === i && (r = null), r !== i ? ((s = ce()) === i && (s = null), s !== i ? e = n = g(n, r, s) : (V = e, 
    e = i)) : (V = e, e = i)) : (V = e, e = i), e === i && (e = V, (n = ie()) !== i ? (r = V, 
    47 === t.charCodeAt(V) ? (s = h, V++) : (s = i, 0 === q && K(m)), s !== i && (o = ie()) !== i ? r = s = [ s, o ] : (V = r, 
    r = i), r === i && (r = null), r !== i ? ((s = ce()) === i && (s = null), s !== i ? e = n = y(n, r, s) : (V = e, 
    e = i)) : (V = e, e = i)) : (V = e, e = i), e === i && (e = V, (n = se()) !== i ? (r = V, 
    47 === t.charCodeAt(V) ? (s = h, V++) : (s = i, 0 === q && K(m)), s !== i && (o = se()) !== i ? r = s = [ s, o ] : (V = r, 
    r = i), r === i && (r = null), r !== i ? ((s = ce()) === i && (s = null), s !== i ? e = n = v(n, r, s) : (V = e, 
    e = i)) : (V = e, e = i)) : (V = e, e = i))), e;
   }
   function re() {
    var e, n, r, s;
    if (V, e = V, 40 === t.charCodeAt(V) ? (n = _, V++) : (n = i, 0 === q && K(A)), 
    n !== i) {
     if (r = [], (s = ie()) !== i) for (;s !== i; ) r.push(s), s = ie(); else r = i;
     r !== i ? (41 === t.charCodeAt(V) ? (s = b, V++) : (s = i, 0 === q && K(x)), s !== i ? e = n = [ n, r, s ] : (V = e, 
     e = i)) : (V = e, e = i);
    } else V = e, e = i;
    return e !== i && (e = w(e)), e;
   }
   function ie() {
    var e, n, r, s;
    return e = V, (n = le()) === i && (n = null), n !== i && (r = function() {
     var e, n, r, s, o;
     return e = V, (n = oe()) !== i ? (r = V, 45 === t.charCodeAt(V) ? (s = T, V++) : (s = i, 
     0 === q && K(I)), s !== i && (o = oe()) !== i ? r = s = [ s, o ] : (V = r, r = i), 
     r === i && (r = null), r !== i ? (n = S(n, r), e = n) : (V = e, e = i)) : (V = e, 
     e = i), e;
    }()) !== i ? ((s = ae()) === i && (s = null), s !== i ? e = n = C(n, r, s) : (V = e, 
    e = i)) : (V = e, e = i), e;
   }
   function se() {
    var e, n, r, s;
    return e = V, (n = le()) === i && (n = null), n !== i ? (120 === t.charCodeAt(V) ? (r = k, 
    V++) : (r = i, 0 === q && K(E)), r !== i ? ((s = ae()) === i && (s = null), s !== i ? e = n = B(n, s) : (V = e, 
    e = i)) : (V = e, e = i)) : (V = e, e = i), e;
   }
   function oe() {
    var e, n, r;
    return e = V, (n = function() {
     var e;
     return j.test(t.charAt(V)) ? (e = t.charAt(V), V++) : (e = i, 0 === q && K(P)), 
     e;
    }()) === i && (n = null), n !== i && (r = function() {
     var e;
     return U.test(t.charAt(V)) ? (e = t.charAt(V), V++) : (e = i, 0 === q && K(L)), 
     e;
    }()) !== i ? e = n = M(n, r) : (V = e, e = i), e;
   }
   function ae() {
    var e;
    return N.test(t.charAt(V)) ? (e = t.charAt(V), V++) : (e = i, 0 === q && K(O)), 
    e;
   }
   function ce() {
    var e;
    return D.test(t.charAt(V)) ? (e = t.charAt(V), V++) : (e = i, 0 === q && K(F)), 
    e;
   }
   function le() {
    var e;
    return R.test(t.charAt(V)) ? (e = t.charAt(V), V++) : (e = i, 0 === q && K(Q)), 
    e;
   }
   if ((r = o()) !== i && V === t.length) return r;
   throw r !== i && V < t.length && K({
    type: "end"
   }), $(Y, H < t.length ? t.charAt(H) : null, H < t.length ? W(H, H + 1) : W(H, H));
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
    sequence: z
   }, o = z, a = "@", c = Q("@", !1), l = "&", u = Q("&", !1), f = "", d = "/", p = Q("/", !1), h = "(", m = Q("(", !1), g = ")", y = Q(")", !1), v = "x", _ = Q("x", !1), A = "-", b = Q("-", !1), x = /^[_\^]/, w = j([ "_", "^" ], !1, !1), C = /^[,;.]/, k = j([ ",", ";", "." ], !1, !1), E = /^[pf]/, B = j([ "p", "f" ], !1, !1), T = /^[<>]/, I = j([ "<", ">" ], !1, !1), S = /^[1-5]/, M = j([ [ "1", "5" ] ], !1, !1), N = 0, O = [ {
    line: 1,
    column: 1
   } ], D = 0, F = [], R = 0;
   if ("startRule" in n) {
    if (!(n.startRule in s)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
    o = s[n.startRule];
   }
   function Q(e, t) {
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
   function P(e) {
    var n, r = O[e];
    if (r) return r;
    for (n = e - 1; !O[n]; ) n--;
    for (r = {
     line: (r = O[n]).line,
     column: r.column
    }; n < e; ) 10 === t.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
    return O[e] = r, r;
   }
   function U(e, t) {
    var n = P(e), r = P(t);
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
   function L(e) {
    N < D || (N > D && (D = N, F = []), F.push(e));
   }
   function V(t, n, r) {
    return new e(e.buildMessage(t, n), t, n, r);
   }
   function z() {
    var e, n, r, s, o;
    return e = N, (n = H()) !== i ? (r = N, 64 === t.charCodeAt(N) ? (s = a, N++) : (s = i, 
    0 === R && L(c)), s !== i && (o = H()) !== i ? r = s = [ s, o ] : (N = r, r = i), 
    r === i && (r = null), r !== i ? e = n = [ n, r ] : (N = e, e = i)) : (N = e, e = i), 
    e;
   }
   function H() {
    var e, n, r, s;
    return e = N, (n = Y()) !== i ? (38 === t.charCodeAt(N) ? (r = l, N++) : (r = i, 
    0 === R && L(u)), r !== i && (s = H()) !== i ? e = n = [ n, r, s ] : (N = e, e = i)) : (N = e, 
    e = i), e === i && (e = Y()) === i && (e = f), e;
   }
   function Y() {
    var e, t;
    for (e = [], t = q(); t !== i; ) e.push(t), t = q();
    return e;
   }
   function q() {
    var e, n, r, s, o;
    return e = N, (n = J()) !== i ? (r = N, 47 === t.charCodeAt(N) ? (s = d, N++) : (s = i, 
    0 === R && L(p)), s !== i && (o = J()) !== i ? r = s = [ s, o ] : (N = r, r = i), 
    r === i && (r = null), r !== i ? ((s = $()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (N = e, 
    e = i)) : (N = e, e = i)) : (N = e, e = i), e === i && (e = N, (n = G()) !== i ? (r = N, 
    47 === t.charCodeAt(N) ? (s = d, N++) : (s = i, 0 === R && L(p)), s !== i && (o = G()) !== i ? r = s = [ s, o ] : (N = r, 
    r = i), r === i && (r = null), r !== i ? ((s = $()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (N = e, 
    e = i)) : (N = e, e = i)) : (N = e, e = i), e === i && (e = N, (n = X()) !== i ? (r = N, 
    47 === t.charCodeAt(N) ? (s = d, N++) : (s = i, 0 === R && L(p)), s !== i && (o = X()) !== i ? r = s = [ s, o ] : (N = r, 
    r = i), r === i && (r = null), r !== i ? ((s = $()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (N = e, 
    e = i)) : (N = e, e = i)) : (N = e, e = i))), e;
   }
   function J() {
    var e, n, r, s;
    if (e = N, 40 === t.charCodeAt(N) ? (n = h, N++) : (n = i, 0 === R && L(m)), n !== i) {
     if (r = [], (s = G()) !== i) for (;s !== i; ) r.push(s), s = G(); else r = i;
     r !== i ? (41 === t.charCodeAt(N) ? (s = g, N++) : (s = i, 0 === R && L(y)), s !== i ? e = n = [ n, r, s ] : (N = e, 
     e = i)) : (N = e, e = i);
    } else N = e, e = i;
    return e;
   }
   function G() {
    var e, n, r, s;
    return e = N, (n = Z()) === i && (n = null), n !== i && (r = function() {
     var e, n, r, s, o;
     return e = N, (n = W()) !== i ? (r = N, 45 === t.charCodeAt(N) ? (s = A, N++) : (s = i, 
     0 === R && L(b)), s !== i && (o = W()) !== i ? r = s = [ s, o ] : (N = r, r = i), 
     r === i && (r = null), r !== i ? e = n = [ n, r ] : (N = e, e = i)) : (N = e, e = i), 
     e;
    }()) !== i ? ((s = K()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (N = e, 
    e = i)) : (N = e, e = i), e;
   }
   function X() {
    var e, n, r, s;
    return e = N, (n = Z()) === i && (n = null), n !== i ? (120 === t.charCodeAt(N) ? (r = v, 
    N++) : (r = i, 0 === R && L(_)), r !== i ? ((s = K()) === i && (s = null), s !== i ? e = n = [ n, r, s ] : (N = e, 
    e = i)) : (N = e, e = i)) : (N = e, e = i), e;
   }
   function W() {
    var e, n, r;
    return e = N, (n = function() {
     var e;
     return T.test(t.charAt(N)) ? (e = t.charAt(N), N++) : (e = i, 0 === R && L(I)), 
     e;
    }()) === i && (n = null), n !== i && (r = function() {
     var e;
     return S.test(t.charAt(N)) ? (e = t.charAt(N), N++) : (e = i, 0 === R && L(M)), 
     e;
    }()) !== i ? e = n = [ n, r ] : (N = e, e = i), e;
   }
   function K() {
    var e;
    return x.test(t.charAt(N)) ? (e = t.charAt(N), N++) : (e = i, 0 === R && L(w)), 
    e;
   }
   function $() {
    var e;
    return C.test(t.charAt(N)) ? (e = t.charAt(N), N++) : (e = i, 0 === R && L(k)), 
    e;
   }
   function Z() {
    var e;
    return E.test(t.charAt(N)) ? (e = t.charAt(N), N++) : (e = i, 0 === R && L(B)), 
    e;
   }
   if ((r = o()) !== i && N === t.length) return r;
   throw r !== i && N < t.length && L({
    type: "end"
   }), V(F, D < t.length ? t.charAt(D) : null, D < t.length ? U(D, D + 1) : U(D, D));
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
  function i(o, a) {
   if (!n[o]) {
    if (!t[o]) {
     var c = "function" == typeof require && require;
     if (!a && c) return c(o, !0);
     if (s) return s(o, !0);
     throw new Error("Cannot find module '" + o + "'");
    }
    var l = n[o] = {
     exports: {}
    };
    t[o][0].call(l.exports, function(e) {
     var n = t[o][1][e];
     return i(n || e);
    }, l, l.exports, e, t, n, r);
   }
   return n[o].exports;
  }
  for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
  return i;
 }({
  1: [ function(e, t, n) {
   "use strict";
   var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   n.encode = function(e, t) {
    for (var n, i, s, o, a, c, l, u = "", f = 0; f < e.length; ) o = (n = e.charCodeAt(f++)) >> 2, 
    a = (3 & n) << 4 | (i = e.charCodeAt(f++)) >> 4, c = (15 & i) << 2 | (s = e.charCodeAt(f++)) >> 6, 
    l = 63 & s, isNaN(i) ? c = l = 64 : isNaN(s) && (l = 64), u = u + r.charAt(o) + r.charAt(a) + r.charAt(c) + r.charAt(l);
    return u;
   }, n.decode = function(e, t) {
    var n, i, s, o, a, c, l = "", u = 0;
    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length; ) n = r.indexOf(e.charAt(u++)) << 2 | (o = r.indexOf(e.charAt(u++))) >> 4, 
    i = (15 & o) << 4 | (a = r.indexOf(e.charAt(u++))) >> 2, s = (3 & a) << 6 | (c = r.indexOf(e.charAt(u++))), 
    l += String.fromCharCode(n), 64 != a && (l += String.fromCharCode(i)), 64 != c && (l += String.fromCharCode(s));
    return l;
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
    for (var o = 0, a = e.length; o < a; o++) s = n ? e[o] : e.charCodeAt(o), t = t >>> 8 ^ i[255 & (t ^ s)];
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
    var n, s, o, a;
    for ((t = t || {}).base64 && (e = r.decode(e)), n = (s = new i(e, t)).files, o = 0; o < n.length; o++) a = n[o], 
    this.file(a.fileName, a.decompressed, {
     binary: !0,
     optimizedBinaryString: !0,
     date: a.date,
     dir: a.dir,
     comment: a.fileComment.length ? a.fileComment : null,
     unixPermissions: a.unixPermissions,
     dosPermissions: a.dosPermissions,
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
   var r = e("./support"), i = e("./utils"), s = e("./crc32"), o = e("./signature"), a = e("./defaults"), c = e("./base64"), l = e("./compressions"), u = e("./compressedObject"), f = e("./nodeBuffer"), d = e("./utf8"), p = e("./stringWriter"), h = e("./uint8ArrayWriter"), m = function(e) {
    if (e._data instanceof u && (e._data = e._data.getContent(), e.options.binary = !0, 
    e.options.base64 = !1, "uint8array" === i.getTypeOf(e._data))) {
     var t = e._data;
     e._data = new Uint8Array(t.length), 0 !== t.length && e._data.set(t, 0);
    }
    return e._data;
   }, g = function(e) {
    var t = m(e);
    return "string" === i.getTypeOf(t) ? !e.options.binary && r.nodebuffer ? f(t, "utf-8") : e.asBinary() : t;
   }, y = function(e) {
    var t = m(this);
    return null === t || void 0 === t ? "" : (this.options.base64 && (t = c.decode(t)), 
    t = e && this.options.binary ? B.utf8decode(t) : i.transformTo("string", t), e || this.options.binary || (t = i.transformTo("string", B.utf8encode(t))), 
    t);
   }, v = function(e, t, n) {
    this.name = e, this.dir = n.dir, this.date = n.date, this.comment = n.comment, this.unixPermissions = n.unixPermissions, 
    this.dosPermissions = n.dosPermissions, this._data = t, this.options = n, this._initialMetadata = {
     dir: n.dir,
     date: n.date
    };
   };
   v.prototype = {
    asText: function() {
     return y.call(this, !0);
    },
    asBinary: function() {
     return y.call(this, !1);
    },
    asNodeBuffer: function() {
     var e = g(this);
     return i.transformTo("nodebuffer", e);
    },
    asUint8Array: function() {
     var e = g(this);
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
   }, A = function() {
    var e, t, n = {};
    for (e = 0; e < arguments.length; e++) for (t in arguments[e]) arguments[e].hasOwnProperty(t) && void 0 === n[t] && (n[t] = arguments[e][t]);
    return n;
   }, b = function(e, t, n) {
    var r, s = i.getTypeOf(t);
    if ("string" == typeof (n = function(e) {
     return !0 !== (e = e || {}).base64 || null !== e.binary && void 0 !== e.binary || (e.binary = !0), 
     (e = A(e, a)).date = e.date || new Date(), null !== e.compression && (e.compression = e.compression.toUpperCase()), 
     e;
    }(n)).unixPermissions && (n.unixPermissions = parseInt(n.unixPermissions, 8)), n.unixPermissions && 16384 & n.unixPermissions && (n.dir = !0), 
    n.dosPermissions && 16 & n.dosPermissions && (n.dir = !0), n.dir && (e = w(e)), 
    n.createFolders && (r = x(e)) && C.call(this, r, !0), n.dir || null === t || void 0 === t) n.base64 = !1, 
    n.binary = !1, t = null, s = null; else if ("string" === s) n.binary && !n.base64 && !0 !== n.optimizedBinaryString && (t = i.string2binary(t)); else {
     if (n.base64 = !1, n.binary = !0, !(s || t instanceof u)) throw new Error("The data of '" + e + "' is in an unsupported format !");
     "arraybuffer" === s && (t = i.transformTo("uint8array", t));
    }
    var o = new v(e, t, n);
    return this.files[e] = o, o;
   }, x = function(e) {
    "/" == e.slice(-1) && (e = e.substring(0, e.length - 1));
    var t = e.lastIndexOf("/");
    return t > 0 ? e.substring(0, t) : "";
   }, w = function(e) {
    return "/" != e.slice(-1) && (e += "/"), e;
   }, C = function(e, t) {
    return t = void 0 !== t && t, e = w(e), this.files[e] || b.call(this, e, null, {
     dir: !0,
     createFolders: t
    }), this.files[e];
   }, k = function(e, t, n) {
    var r, o = new u();
    return e._data instanceof u ? (o.uncompressedSize = e._data.uncompressedSize, o.crc32 = e._data.crc32, 
    0 === o.uncompressedSize || e.dir ? (t = l.STORE, o.compressedContent = "", o.crc32 = 0) : e._data.compressionMethod === t.magic ? o.compressedContent = e._data.getCompressedContent() : (r = e._data.getContent(), 
    o.compressedContent = t.compress(i.transformTo(t.compressInputType, r), n))) : ((r = g(e)) && 0 !== r.length && !e.dir || (t = l.STORE, 
    r = ""), o.uncompressedSize = r.length, o.crc32 = s(r), o.compressedContent = t.compress(i.transformTo(t.compressInputType, r), n)), 
    o.compressedSize = o.compressedContent.length, o.compressionMethod = t.magic, o;
   }, E = function(e, t, n, r, a) {
    n.compressedContent;
    var c, l, u, f, p = i.transformTo("string", d.utf8encode(t.name)), h = t.comment || "", m = i.transformTo("string", d.utf8encode(h)), g = p.length !== t.name.length, y = m.length !== h.length, v = t.options, A = "", b = "", x = "";
    u = t._initialMetadata.dir !== t.dir ? t.dir : v.dir, f = t._initialMetadata.date !== t.date ? t.date : v.date;
    var w, C, k = 0, E = 0;
    u && (k |= 16), "UNIX" === a ? (E = 798, k |= (w = t.unixPermissions, C = w, w || (C = u ? 16893 : 33204), 
    (65535 & C) << 16)) : (E = 20, k |= 63 & (t.dosPermissions || 0)), c = f.getHours(), 
    c <<= 6, c |= f.getMinutes(), c <<= 5, c |= f.getSeconds() / 2, l = f.getFullYear() - 1980, 
    l <<= 4, l |= f.getMonth() + 1, l <<= 5, l |= f.getDate(), g && (b = _(1, 1) + _(s(p), 4) + p, 
    A += "up" + _(b.length, 2) + b), y && (x = _(1, 1) + _(this.crc32(m), 4) + m, A += "uc" + _(x.length, 2) + x);
    var B = "";
    return B += "\n\0", B += g || y ? "\0\b" : "\0\0", B += n.compressionMethod, B += _(c, 2), 
    B += _(l, 2), B += _(n.crc32, 4), B += _(n.compressedSize, 4), B += _(n.uncompressedSize, 4), 
    B += _(p.length, 2), B += _(A.length, 2), {
     fileRecord: o.LOCAL_FILE_HEADER + B + p + A,
     dirRecord: o.CENTRAL_FILE_HEADER + _(E, 2) + B + _(m.length, 2) + "\0\0\0\0" + _(k, 4) + _(r, 4) + p + A + m,
     compressedObject: n
    };
   }, B = {
    load: function(e, t) {
     throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
    },
    filter: function(e) {
     var t, n, r, i, s = [];
     for (t in this.files) this.files.hasOwnProperty(t) && (r = this.files[t], i = new v(r.name, r._data, A(r.options)), 
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
     return e = this.root + e, b.call(this, e, t, n), this;
    },
    folder: function(e) {
     if (!e) return this;
     if (i.isRegExp(e)) return this.filter(function(t, n) {
      return n.dir && e.test(t);
     });
     var t = this.root + e, n = C.call(this, t), r = this.clone();
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
     e = A(e || {}, {
      base64: !0,
      compression: "STORE",
      compressionOptions: null,
      type: "base64",
      platform: "DOS",
      comment: null,
      mimeType: "application/zip"
     }), i.checkSupport(e.type), "darwin" !== e.platform && "freebsd" !== e.platform && "linux" !== e.platform && "sunos" !== e.platform || (e.platform = "UNIX"), 
     "win32" === e.platform && (e.platform = "DOS");
     var t, n, r = [], s = 0, a = 0, u = i.transformTo("string", this.utf8encode(e.comment || this.comment || ""));
     for (var f in this.files) if (this.files.hasOwnProperty(f)) {
      var d = this.files[f], m = d.options.compression || e.compression.toUpperCase(), g = l[m];
      if (!g) throw new Error(m + " is not a valid compression method !");
      var y = d.options.compressionOptions || e.compressionOptions || {}, v = k.call(this, d, g, y), b = E.call(this, f, d, v, s, e.platform);
      s += b.fileRecord.length + v.compressedSize, a += b.dirRecord.length, r.push(b);
     }
     var x;
     x = o.CENTRAL_DIRECTORY_END + "\0\0\0\0" + _(r.length, 2) + _(r.length, 2) + _(a, 4) + _(s, 4) + _(u.length, 2) + u;
     var w = e.type.toLowerCase();
     for (t = "uint8array" === w || "arraybuffer" === w || "blob" === w || "nodebuffer" === w ? new h(s + a + x.length) : new p(s + a + x.length), 
     n = 0; n < r.length; n++) t.append(r[n].fileRecord), t.append(r[n].compressedObject.compressedContent);
     for (n = 0; n < r.length; n++) t.append(r[n].dirRecord);
     t.append(x);
     var C = t.finalize();
     switch (e.type.toLowerCase()) {
     case "uint8array":
     case "arraybuffer":
     case "nodebuffer":
      return i.transformTo(e.type.toLowerCase(), C);

     case "blob":
      return i.arrayBuffer2Blob(i.transformTo("arraybuffer", C), e.mimeType);

     case "base64":
      return e.base64 ? c.encode(C) : C;

     default:
      return C;
     }
    },
    crc32: function(e, t) {
     return s(e, t);
    },
    utf8encode: function(e) {
     return i.transformTo("string", d.utf8encode(e));
    },
    utf8decode: function(e) {
     return d.utf8decode(e);
    }
   };
   t.exports = B;
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
   for (var r = e("./utils"), i = e("./support"), s = e("./nodeBuffer"), o = new Array(256), a = 0; a < 256; a++) o[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
   o[254] = o[254] = 1;
   var c = function(e, t) {
    var n;
    for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
    return n < 0 ? t : 0 === n ? t : n + o[e[n]] > t ? n : t;
   }, l = function(e) {
    var t, n, i, s, a = e.length, c = new Array(2 * a);
    for (n = 0, t = 0; t < a; ) if ((i = e[t++]) < 128) c[n++] = i; else if ((s = o[i]) > 4) c[n++] = 65533, 
    t += s - 1; else {
     for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && t < a; ) i = i << 6 | 63 & e[t++], 
     s--;
     s > 1 ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, 
     c[n++] = 56320 | 1023 & i);
    }
    return c.length !== n && (c.subarray ? c = c.subarray(0, n) : c.length = n), r.applyFromCharCode(c);
   };
   n.utf8encode = function(e) {
    return i.nodebuffer ? s(e, "utf-8") : function(e) {
     var t, n, r, s, o, a = e.length, c = 0;
     for (s = 0; s < a; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (r = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), 
     s++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
     for (t = i.uint8array ? new Uint8Array(c) : new Array(c), o = 0, s = 0; o < c; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (r = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), 
     s++), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, 
     t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, 
     t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
     return t;
    }(e);
   }, n.utf8decode = function(e) {
    if (i.nodebuffer) return r.transformTo("nodebuffer", e).toString("utf-8");
    for (var t = [], n = 0, s = (e = r.transformTo(i.uint8array ? "uint8array" : "array", e)).length; n < s; ) {
     var o = c(e, Math.min(n + 65536, s));
     i.uint8array ? t.push(l(e.subarray(n, o))) : t.push(l(e.slice(n, o))), n = o;
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
   function o(e) {
    return e;
   }
   function a(e, t) {
    for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
    return t;
   }
   function c(e) {
    var t = 65536, r = [], i = e.length, o = n.getTypeOf(e), a = 0, c = !0;
    try {
     switch (o) {
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
     for (var l = "", u = 0; u < e.length; u++) l += String.fromCharCode(e[u]);
     return l;
    }
    for (;a < i && t > 1; ) try {
     "array" === o || "nodebuffer" === o ? r.push(String.fromCharCode.apply(null, e.slice(a, Math.min(a + t, i)))) : r.push(String.fromCharCode.apply(null, e.subarray(a, Math.min(a + t, i)))), 
     a += t;
    } catch (e) {
     t = Math.floor(t / 2);
    }
    return r.join("");
   }
   function l(e, t) {
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
   var u = {};
   u.string = {
    string: o,
    array: function(e) {
     return a(e, new Array(e.length));
    },
    arraybuffer: function(e) {
     return u.string.uint8array(e).buffer;
    },
    uint8array: function(e) {
     return a(e, new Uint8Array(e.length));
    },
    nodebuffer: function(e) {
     return a(e, s(e.length));
    }
   }, u.array = {
    string: c,
    array: o,
    arraybuffer: function(e) {
     return new Uint8Array(e).buffer;
    },
    uint8array: function(e) {
     return new Uint8Array(e);
    },
    nodebuffer: function(e) {
     return s(e);
    }
   }, u.arraybuffer = {
    string: function(e) {
     return c(new Uint8Array(e));
    },
    array: function(e) {
     return l(new Uint8Array(e), new Array(e.byteLength));
    },
    arraybuffer: o,
    uint8array: function(e) {
     return new Uint8Array(e);
    },
    nodebuffer: function(e) {
     return s(new Uint8Array(e));
    }
   }, u.uint8array = {
    string: c,
    array: function(e) {
     return l(e, new Array(e.length));
    },
    arraybuffer: function(e) {
     return e.buffer;
    },
    uint8array: o,
    nodebuffer: function(e) {
     return s(e);
    }
   }, u.nodebuffer = {
    string: c,
    array: function(e) {
     return l(e, new Array(e.length));
    },
    arraybuffer: function(e) {
     return u.nodebuffer.uint8array(e).buffer;
    },
    uint8array: function(e) {
     return l(e, new Uint8Array(e.length));
    },
    nodebuffer: o
   }, n.transformTo = function(e, t) {
    if (t || (t = ""), !e) return t;
    n.checkSupport(e);
    var r = n.getTypeOf(t);
    return u[r][e](t);
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
   var r = e("./stringReader"), i = e("./nodeBufferReader"), s = e("./uint8ArrayReader"), o = e("./utils"), a = e("./signature"), c = e("./zipEntry"), l = e("./support"), u = e("./object");
   function f(e, t) {
    this.files = [], this.loadOptions = t, e && this.load(e);
   }
   f.prototype = {
    checkSignature: function(e) {
     var t = this.reader.readString(4);
     if (t !== e) throw new Error("Corrupted zip or bug : unexpected signature (" + o.pretty(t) + ", expected " + o.pretty(e) + ")");
    },
    readBlockEndOfCentral: function() {
     this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), 
     this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), 
     this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), 
     this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength), 
     this.zipComment = u.utf8decode(this.zipComment);
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
     this.checkSignature(a.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), 
     t.processAttributes();
    },
    readCentralDir: function() {
     var e;
     for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === a.CENTRAL_FILE_HEADER; ) (e = new c({
      zip64: this.zip64
     }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
    },
    readEndOfCentral: function() {
     var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
     if (-1 === e) {
      var t = !0;
      try {
       this.reader.setIndex(0), this.checkSignature(a.LOCAL_FILE_HEADER), t = !1;
      } catch (e) {}
      throw t ? new Error("Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip : can't find end of central directory");
     }
     if (this.reader.setIndex(e), this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), 
     this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
      if (this.zip64 = !0, -1 === (e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
      this.reader.setIndex(e), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), 
      this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), 
      this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
     }
    },
    prepareReader: function(e) {
     var t = o.getTypeOf(e);
     "string" !== t || l.uint8array ? this.reader = "nodebuffer" === t ? new i(e) : new s(o.transformTo("uint8array", e)) : this.reader = new r(e, this.loadOptions.optimizedBinaryString);
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
   var r = e("./stringReader"), i = e("./utils"), s = e("./compressedObject"), o = e("./object");
   function a(e, t) {
    this.options = e, this.loadOptions = t;
   }
   a.prototype = {
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
     o.crc32(this.decompressed) !== this.crc32)) throw new Error("Corrupted zip : CRC32 mismatch");
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
     if (this.useUTF8()) this.fileName = o.utf8decode(this.fileName), this.fileComment = o.utf8decode(this.fileComment); else {
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
      return 1 !== t.readInt(1) ? null : o.crc32(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readString(e.length - 5));
     }
     return null;
    },
    findExtraFieldUnicodeComment: function() {
     var e = this.extraFields[25461];
     if (e) {
      var t = new r(e.value);
      return 1 !== t.readInt(1) ? null : o.crc32(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readString(e.length - 5));
     }
     return null;
    }
   }, t.exports = a;
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
   var r = e("./zlib/deflate.js"), i = e("./utils/common"), s = e("./utils/strings"), o = e("./zlib/messages"), a = e("./zlib/zstream"), c = function(e) {
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
    this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new a(), 
    this.strm.avail_out = 0;
    var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
    if (0 !== n) throw new Error(o[n]);
    t.header && r.deflateSetHeader(this.strm, t.header);
   };
   function l(e, t) {
    var n = new c(t);
    if (n.push(e, !0), n.err) throw n.msg;
    return n.result;
   }
   c.prototype.push = function(e, t) {
    var n, o, a = this.strm, c = this.options.chunkSize;
    if (this.ended) return !1;
    o = t === ~~t ? t : !0 === t ? 4 : 0, a.input = "string" == typeof e ? s.string2buf(e) : e, 
    a.next_in = 0, a.avail_in = a.input.length;
    do {
     if (0 === a.avail_out && (a.output = new i.Buf8(c), a.next_out = 0, a.avail_out = c), 
     1 !== (n = r.deflate(a, o)) && 0 !== n) return this.onEnd(n), this.ended = !0, !1;
     (0 === a.avail_out || 0 === a.avail_in && 4 === o) && ("string" === this.options.to ? this.onData(s.buf2binstring(i.shrinkBuf(a.output, a.next_out))) : this.onData(i.shrinkBuf(a.output, a.next_out)));
    } while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== n);
    return 4 !== o || (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, 
    0 === n);
   }, c.prototype.onData = function(e) {
    this.chunks.push(e);
   }, c.prototype.onEnd = function(e) {
    0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), 
    this.chunks = [], this.err = e, this.msg = this.strm.msg;
   }, n.Deflate = c, n.deflate = l, n.deflateRaw = function(e, t) {
    return (t = t || {}).raw = !0, l(e, t);
   }, n.gzip = function(e, t) {
    return (t = t || {}).gzip = !0, l(e, t);
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
   var r = e("./zlib/inflate.js"), i = e("./utils/common"), s = e("./utils/strings"), o = e("./zlib/constants"), a = e("./zlib/messages"), c = e("./zlib/zstream"), l = e("./zlib/gzheader"), u = function(e) {
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
    if (n !== o.Z_OK) throw new Error(a[n]);
    this.header = new l(), r.inflateGetHeader(this.strm, this.header);
   };
   function f(e, t) {
    var n = new u(t);
    if (n.push(e, !0), n.err) throw n.msg;
    return n.result;
   }
   u.prototype.push = function(e, t) {
    var n, a, c, l, u, f = this.strm, d = this.options.chunkSize;
    if (this.ended) return !1;
    a = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, f.input = "string" == typeof e ? s.binstring2buf(e) : e, 
    f.next_in = 0, f.avail_in = f.input.length;
    do {
     if (0 === f.avail_out && (f.output = new i.Buf8(d), f.next_out = 0, f.avail_out = d), 
     (n = r.inflate(f, o.Z_NO_FLUSH)) !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), 
     this.ended = !0, !1;
     f.next_out && (0 === f.avail_out || n === o.Z_STREAM_END || 0 === f.avail_in && a === o.Z_FINISH) && ("string" === this.options.to ? (c = s.utf8border(f.output, f.next_out), 
     l = f.next_out - c, u = s.buf2string(f.output, c), f.next_out = l, f.avail_out = d - l, 
     l && i.arraySet(f.output, f.output, c, l, 0), this.onData(u)) : this.onData(i.shrinkBuf(f.output, f.next_out)));
    } while (f.avail_in > 0 && n !== o.Z_STREAM_END);
    return n === o.Z_STREAM_END && (a = o.Z_FINISH), a !== o.Z_FINISH || (n = r.inflateEnd(this.strm), 
    this.onEnd(n), this.ended = !0, n === o.Z_OK);
   }, u.prototype.onData = function(e) {
    this.chunks.push(e);
   }, u.prototype.onEnd = function(e) {
    e === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), 
    this.chunks = [], this.err = e, this.msg = this.strm.msg;
   }, n.Inflate = u, n.inflate = f, n.inflateRaw = function(e, t) {
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
     var t, n, r, i, s, o;
     for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
     for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) s = e[t], o.set(s, i), 
     i += s.length;
     return o;
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
   for (var o = new r.Buf8(256), a = 0; a < 256; a++) o[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
   function c(e, t) {
    if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
    for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[o]);
    return n;
   }
   o[254] = o[254] = 1, n.string2buf = function(e) {
    var t, n, i, s, o, a = e.length, c = 0;
    for (s = 0; s < a; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), 
    s++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    for (t = new r.Buf8(c), o = 0, s = 0; o < c; s++) 55296 == (64512 & (n = e.charCodeAt(s))) && s + 1 < a && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), 
    s++), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, 
    t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, 
    t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
    return t;
   }, n.buf2binstring = function(e) {
    return c(e, e.length);
   }, n.binstring2buf = function(e) {
    for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
    return t;
   }, n.buf2string = function(e, t) {
    var n, r, i, s, a = t || e.length, l = new Array(2 * a);
    for (r = 0, n = 0; n < a; ) if ((i = e[n++]) < 128) l[r++] = i; else if ((s = o[i]) > 4) l[r++] = 65533, 
    n += s - 1; else {
     for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && n < a; ) i = i << 6 | 63 & e[n++], 
     s--;
     s > 1 ? l[r++] = 65533 : i < 65536 ? l[r++] = i : (i -= 65536, l[r++] = 55296 | i >> 10 & 1023, 
     l[r++] = 56320 | 1023 & i);
    }
    return c(l, r);
   }, n.utf8border = function(e, t) {
    var n;
    for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
    return n < 0 ? t : 0 === n ? t : n + o[e[n]] > t ? n : t;
   };
  }, {
   "./common": 27
  } ],
  29: [ function(e, t, n) {
   "use strict";
   t.exports = function(e, t, n, r) {
    for (var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, o = 0; 0 !== n; ) {
     n -= o = n > 2e3 ? 2e3 : n;
     do {
      s = s + (i = i + t[r++] | 0) | 0;
     } while (--o);
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
    var s = r, o = i + n;
    e ^= -1;
    for (var a = i; a < o; a++) e = e >>> 8 ^ s[255 & (e ^ t[a])];
    return -1 ^ e;
   };
  }, {} ],
  32: [ function(e, t, n) {
   "use strict";
   var r = e("../utils/common"), i = e("./trees"), s = e("./adler32"), o = e("./crc32"), a = e("./messages"), c = 0, l = 1, u = 3, f = 4, d = 5, p = 0, h = 1, m = -2, g = -3, y = -5, v = -1, _ = 1, A = 2, b = 3, x = 4, w = 0, C = 2, k = 8, E = 9, B = 15, T = 8, I = 286, S = 30, M = 19, N = 2 * I + 1, O = 15, D = 3, F = 258, R = F + D + 1, Q = 32, j = 42, P = 69, U = 73, L = 91, V = 103, z = 113, H = 666, Y = 1, q = 2, J = 3, G = 4, X = 3;
   function W(e, t) {
    return e.msg = a[t], t;
   }
   function K(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
   }
   function $(e) {
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
    var n, r, i = e.max_chain_length, s = e.strstart, o = e.prev_length, a = e.nice_match, c = e.strstart > e.w_size - R ? e.strstart - (e.w_size - R) : 0, l = e.window, u = e.w_mask, f = e.prev, d = e.strstart + F, p = l[s + o - 1], h = l[s + o];
    e.prev_length >= e.good_match && (i >>= 2), a > e.lookahead && (a = e.lookahead);
    do {
     if (l[(n = t) + o] === h && l[n + o - 1] === p && l[n] === l[s] && l[++n] === l[s + 1]) {
      s += 2, n++;
      do {} while (l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && s < d);
      if (r = F - (d - s), s = d - F, r > o) {
       if (e.match_start = t, o = r, r >= a) break;
       p = l[s + o - 1], h = l[s + o];
      }
     }
    } while ((t = f[t & u]) > c && 0 != --i);
    return o <= e.lookahead ? o : e.lookahead;
   }
   function ie(e) {
    var t, n, i, a, c, l, u, f, d, p, h = e.w_size;
    do {
     if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= h + (h - R)) {
      r.arraySet(e.window, e.window, h, h, 0), e.match_start -= h, e.strstart -= h, e.block_start -= h, 
      t = n = e.hash_size;
      do {
       i = e.head[--t], e.head[t] = i >= h ? i - h : 0;
      } while (--n);
      t = n = h;
      do {
       i = e.prev[--t], e.prev[t] = i >= h ? i - h : 0;
      } while (--n);
      a += h;
     }
     if (0 === e.strm.avail_in) break;
     if (l = e.strm, u = e.window, f = e.strstart + e.lookahead, d = a, p = void 0, (p = l.avail_in) > d && (p = d), 
     n = 0 === p ? 0 : (l.avail_in -= p, r.arraySet(u, l.input, l.next_in, p, f), 1 === l.state.wrap ? l.adler = s(l.adler, u, p, f) : 2 === l.state.wrap && (l.adler = o(l.adler, u, p, f)), 
     l.next_in += p, l.total_in += p, p), e.lookahead += n, e.lookahead + e.insert >= D) for (c = e.strstart - e.insert, 
     e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + D - 1]) & e.hash_mask, 
     e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < D)); ) ;
    } while (e.lookahead < R && 0 !== e.strm.avail_in);
   }
   function se(e, t) {
    for (var n, r; ;) {
     if (e.lookahead < R) {
      if (ie(e), e.lookahead < R && t === c) return Y;
      if (0 === e.lookahead) break;
     }
     if (n = 0, e.lookahead >= D && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask, 
     n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 
     0 !== n && e.strstart - n <= e.w_size - R && (e.match_length = re(e, n)), e.match_length >= D) if (r = i._tr_tally(e, e.strstart - e.match_start, e.match_length - D), 
     e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= D) {
      e.match_length--;
      do {
       e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask, 
       n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
      } while (0 != --e.match_length);
      e.strstart++;
     } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], 
     e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask; else r = i._tr_tally(e, 0, e.window[e.strstart]), 
     e.lookahead--, e.strstart++;
     if (r && (ee(e, !1), 0 === e.strm.avail_out)) return Y;
    }
    return e.insert = e.strstart < D - 1 ? e.strstart : D - 1, t === f ? (ee(e, !0), 
    0 === e.strm.avail_out ? J : G) : e.last_lit && (ee(e, !1), 0 === e.strm.avail_out) ? Y : q;
   }
   function oe(e, t) {
    for (var n, r, s; ;) {
     if (e.lookahead < R) {
      if (ie(e), e.lookahead < R && t === c) return Y;
      if (0 === e.lookahead) break;
     }
     if (n = 0, e.lookahead >= D && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask, 
     n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 
     e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = D - 1, 
     0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - R && (e.match_length = re(e, n), 
     e.match_length <= 5 && (e.strategy === _ || e.match_length === D && e.strstart - e.match_start > 4096) && (e.match_length = D - 1)), 
     e.prev_length >= D && e.match_length <= e.prev_length) {
      s = e.strstart + e.lookahead - D, r = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - D), 
      e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do {
       ++e.strstart <= s && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + D - 1]) & e.hash_mask, 
       n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      } while (0 != --e.prev_length);
      if (e.match_available = 0, e.match_length = D - 1, e.strstart++, r && (ee(e, !1), 
      0 === e.strm.avail_out)) return Y;
     } else if (e.match_available) {
      if ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])) && ee(e, !1), e.strstart++, 
      e.lookahead--, 0 === e.strm.avail_out) return Y;
     } else e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (r = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), 
    e.insert = e.strstart < D - 1 ? e.strstart : D - 1, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? J : G) : e.last_lit && (ee(e, !1), 
    0 === e.strm.avail_out) ? Y : q;
   }
   var ae, ce = function(e, t, n, r, i) {
    this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, 
    this.func = i;
   };
   function le(e) {
    var t;
    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = C, (t = e.state).pending = 0, 
    t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? j : z, 
    e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = c, i._tr_init(t), p) : W(e, m);
   }
   function ue(e) {
    var t, n = le(e);
    return n === p && ((t = e.state).window_size = 2 * t.w_size, $(t.head), t.max_lazy_match = ae[t.level].max_lazy, 
    t.good_match = ae[t.level].good_length, t.nice_match = ae[t.level].nice_length, 
    t.max_chain_length = ae[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, 
    t.insert = 0, t.match_length = t.prev_length = D - 1, t.match_available = 0, t.ins_h = 0), 
    n;
   }
   function fe(e, t, n, i, s, o) {
    if (!e) return m;
    var a = 1;
    if (t === v && (t = 6), i < 0 ? (a = 0, i = -i) : i > 15 && (a = 2, i -= 16), s < 1 || s > E || n !== k || i < 8 || i > 15 || t < 0 || t > 9 || o < 0 || o > x) return W(e, m);
    8 === i && (i = 9);
    var c = new function() {
     this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, 
     this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, 
     this.method = k, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, 
     this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, 
     this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, 
     this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, 
     this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, 
     this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, 
     this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new r.Buf16(2 * N), this.dyn_dtree = new r.Buf16(2 * (2 * S + 1)), 
     this.bl_tree = new r.Buf16(2 * (2 * M + 1)), $(this.dyn_ltree), $(this.dyn_dtree), 
     $(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new r.Buf16(O + 1), 
     this.heap = new r.Buf16(2 * I + 1), $(this.heap), this.heap_len = 0, this.heap_max = 0, 
     this.depth = new r.Buf16(2 * I + 1), $(this.depth), this.l_buf = 0, this.lit_bufsize = 0, 
     this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, 
     this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }();
    return e.state = c, c.strm = e, c.wrap = a, c.gzhead = null, c.w_bits = i, c.w_size = 1 << c.w_bits, 
    c.w_mask = c.w_size - 1, c.hash_bits = s + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, 
    c.hash_shift = ~~((c.hash_bits + D - 1) / D), c.window = new r.Buf8(2 * c.w_size), 
    c.head = new r.Buf16(c.hash_size), c.prev = new r.Buf16(c.w_size), c.lit_bufsize = 1 << s + 6, 
    c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new r.Buf8(c.pending_buf_size), 
    c.d_buf = c.lit_bufsize >> 1, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = o, 
    c.method = n, ue(e);
   }
   ae = [ new ce(0, 0, 0, 0, function(e, t) {
    var n = 65535;
    for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
     if (e.lookahead <= 1) {
      if (ie(e), 0 === e.lookahead && t === c) return Y;
      if (0 === e.lookahead) break;
     }
     e.strstart += e.lookahead, e.lookahead = 0;
     var r = e.block_start + n;
     if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, 
     ee(e, !1), 0 === e.strm.avail_out)) return Y;
     if (e.strstart - e.block_start >= e.w_size - R && (ee(e, !1), 0 === e.strm.avail_out)) return Y;
    }
    return e.insert = 0, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? J : G) : (e.strstart > e.block_start && (ee(e, !1), 
    e.strm.avail_out), Y);
   }), new ce(4, 4, 8, 4, se), new ce(4, 5, 16, 8, se), new ce(4, 6, 32, 32, se), new ce(4, 4, 16, 16, oe), new ce(8, 16, 32, 32, oe), new ce(8, 16, 128, 128, oe), new ce(8, 32, 128, 256, oe), new ce(32, 128, 258, 1024, oe), new ce(32, 258, 258, 4096, oe) ], 
   n.deflateInit = function(e, t) {
    return fe(e, t, k, B, T, w);
   }, n.deflateInit2 = fe, n.deflateReset = ue, n.deflateResetKeep = le, n.deflateSetHeader = function(e, t) {
    return e && e.state ? 2 !== e.state.wrap ? m : (e.state.gzhead = t, p) : m;
   }, n.deflate = function(e, t) {
    var n, r, s, a;
    if (!e || !e.state || t > d || t < 0) return e ? W(e, m) : m;
    if (r = e.state, !e.output || !e.input && 0 !== e.avail_in || r.status === H && t !== f) return W(e, 0 === e.avail_out ? y : m);
    if (r.strm = e, n = r.last_flush, r.last_flush = t, r.status === j) if (2 === r.wrap) e.adler = 0, 
    te(r, 31), te(r, 139), te(r, 8), r.gzhead ? (te(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), 
    te(r, 255 & r.gzhead.time), te(r, r.gzhead.time >> 8 & 255), te(r, r.gzhead.time >> 16 & 255), 
    te(r, r.gzhead.time >> 24 & 255), te(r, 9 === r.level ? 2 : r.strategy >= A || r.level < 2 ? 4 : 0), 
    te(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (te(r, 255 & r.gzhead.extra.length), 
    te(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = o(e.adler, r.pending_buf, r.pending, 0)), 
    r.gzindex = 0, r.status = P) : (te(r, 0), te(r, 0), te(r, 0), te(r, 0), te(r, 0), 
    te(r, 9 === r.level ? 2 : r.strategy >= A || r.level < 2 ? 4 : 0), te(r, X), r.status = z); else {
     var g = k + (r.w_bits - 8 << 4) << 8;
     g |= (r.strategy >= A || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6, 
     0 !== r.strstart && (g |= Q), g += 31 - g % 31, r.status = z, ne(r, g), 0 !== r.strstart && (ne(r, e.adler >>> 16), 
     ne(r, 65535 & e.adler)), e.adler = 1;
    }
    if (r.status === P) if (r.gzhead.extra) {
     for (s = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 
     Z(e), s = r.pending, r.pending !== r.pending_buf_size)); ) te(r, 255 & r.gzhead.extra[r.gzindex]), 
     r.gzindex++;
     r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 
     r.gzindex === r.gzhead.extra.length && (r.gzindex = 0, r.status = U);
    } else r.status = U;
    if (r.status === U) if (r.gzhead.name) {
     s = r.pending;
     do {
      if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 
      Z(e), s = r.pending, r.pending === r.pending_buf_size)) {
       a = 1;
       break;
      }
      a = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0, 
      te(r, a);
     } while (0 !== a);
     r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 
     0 === a && (r.gzindex = 0, r.status = L);
    } else r.status = L;
    if (r.status === L) if (r.gzhead.comment) {
     s = r.pending;
     do {
      if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 
      Z(e), s = r.pending, r.pending === r.pending_buf_size)) {
       a = 1;
       break;
      }
      a = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0, 
      te(r, a);
     } while (0 !== a);
     r.gzhead.hcrc && r.pending > s && (e.adler = o(e.adler, r.pending_buf, r.pending - s, s)), 
     0 === a && (r.status = V);
    } else r.status = V;
    if (r.status === V && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && Z(e), 
    r.pending + 2 <= r.pending_buf_size && (te(r, 255 & e.adler), te(r, e.adler >> 8 & 255), 
    e.adler = 0, r.status = z)) : r.status = z), 0 !== r.pending) {
     if (Z(e), 0 === e.avail_out) return r.last_flush = -1, p;
    } else if (0 === e.avail_in && K(t) <= K(n) && t !== f) return W(e, y);
    if (r.status === H && 0 !== e.avail_in) return W(e, y);
    if (0 !== e.avail_in || 0 !== r.lookahead || t !== c && r.status !== H) {
     var v = r.strategy === A ? function(e, t) {
      for (var n; ;) {
       if (0 === e.lookahead && (ie(e), 0 === e.lookahead)) {
        if (t === c) return Y;
        break;
       }
       if (e.match_length = 0, n = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, 
       e.strstart++, n && (ee(e, !1), 0 === e.strm.avail_out)) return Y;
      }
      return e.insert = 0, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? J : G) : e.last_lit && (ee(e, !1), 
      0 === e.strm.avail_out) ? Y : q;
     }(r, t) : r.strategy === b ? function(e, t) {
      for (var n, r, s, o, a = e.window; ;) {
       if (e.lookahead <= F) {
        if (ie(e), e.lookahead <= F && t === c) return Y;
        if (0 === e.lookahead) break;
       }
       if (e.match_length = 0, e.lookahead >= D && e.strstart > 0 && (r = a[s = e.strstart - 1]) === a[++s] && r === a[++s] && r === a[++s]) {
        o = e.strstart + F;
        do {} while (r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && r === a[++s] && s < o);
        e.match_length = F - (o - s), e.match_length > e.lookahead && (e.match_length = e.lookahead);
       }
       if (e.match_length >= D ? (n = i._tr_tally(e, 1, e.match_length - D), e.lookahead -= e.match_length, 
       e.strstart += e.match_length, e.match_length = 0) : (n = i._tr_tally(e, 0, e.window[e.strstart]), 
       e.lookahead--, e.strstart++), n && (ee(e, !1), 0 === e.strm.avail_out)) return Y;
      }
      return e.insert = 0, t === f ? (ee(e, !0), 0 === e.strm.avail_out ? J : G) : e.last_lit && (ee(e, !1), 
      0 === e.strm.avail_out) ? Y : q;
     }(r, t) : ae[r.level].func(r, t);
     if (v !== J && v !== G || (r.status = H), v === Y || v === J) return 0 === e.avail_out && (r.last_flush = -1), 
     p;
     if (v === q && (t === l ? i._tr_align(r) : t !== d && (i._tr_stored_block(r, 0, 0, !1), 
     t === u && ($(r.head), 0 === r.lookahead && (r.strstart = 0, r.block_start = 0, 
     r.insert = 0))), Z(e), 0 === e.avail_out)) return r.last_flush = -1, p;
    }
    return t !== f ? p : r.wrap <= 0 ? h : (2 === r.wrap ? (te(r, 255 & e.adler), te(r, e.adler >> 8 & 255), 
    te(r, e.adler >> 16 & 255), te(r, e.adler >> 24 & 255), te(r, 255 & e.total_in), 
    te(r, e.total_in >> 8 & 255), te(r, e.total_in >> 16 & 255), te(r, e.total_in >> 24 & 255)) : (ne(r, e.adler >>> 16), 
    ne(r, 65535 & e.adler)), Z(e), r.wrap > 0 && (r.wrap = -r.wrap), 0 !== r.pending ? p : h);
   }, n.deflateEnd = function(e) {
    var t;
    return e && e.state ? (t = e.state.status) !== j && t !== P && t !== U && t !== L && t !== V && t !== z && t !== H ? W(e, m) : (e.state = null, 
    t === z ? W(e, g) : p) : m;
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
    var n, r, i, s, o, a, c, l, u, f, d, p, h, m, g, y, v, _, A, b, x, w, C, k, E;
    n = e.state, r = e.next_in, k = e.input, i = r + (e.avail_in - 5), s = e.next_out, 
    E = e.output, o = s - (t - e.avail_out), a = s + (e.avail_out - 257), c = n.dmax, 
    l = n.wsize, u = n.whave, f = n.wnext, d = n.window, p = n.hold, h = n.bits, m = n.lencode, 
    g = n.distcode, y = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
    e: do {
     h < 15 && (p += k[r++] << h, h += 8, p += k[r++] << h, h += 8), _ = m[p & y];
     t: for (;;) {
      if (p >>>= A = _ >>> 24, h -= A, 0 === (A = _ >>> 16 & 255)) E[s++] = 65535 & _; else {
       if (!(16 & A)) {
        if (0 == (64 & A)) {
         _ = m[(65535 & _) + (p & (1 << A) - 1)];
         continue t;
        }
        if (32 & A) {
         n.mode = 12;
         break e;
        }
        e.msg = "invalid literal/length code", n.mode = 30;
        break e;
       }
       b = 65535 & _, (A &= 15) && (h < A && (p += k[r++] << h, h += 8), b += p & (1 << A) - 1, 
       p >>>= A, h -= A), h < 15 && (p += k[r++] << h, h += 8, p += k[r++] << h, h += 8), 
       _ = g[p & v];
       n: for (;;) {
        if (p >>>= A = _ >>> 24, h -= A, !(16 & (A = _ >>> 16 & 255))) {
         if (0 == (64 & A)) {
          _ = g[(65535 & _) + (p & (1 << A) - 1)];
          continue n;
         }
         e.msg = "invalid distance code", n.mode = 30;
         break e;
        }
        if (x = 65535 & _, h < (A &= 15) && (p += k[r++] << h, (h += 8) < A && (p += k[r++] << h, 
        h += 8)), (x += p & (1 << A) - 1) > c) {
         e.msg = "invalid distance too far back", n.mode = 30;
         break e;
        }
        if (p >>>= A, h -= A, x > (A = s - o)) {
         if ((A = x - A) > u && n.sane) {
          e.msg = "invalid distance too far back", n.mode = 30;
          break e;
         }
         if (w = 0, C = d, 0 === f) {
          if (w += l - A, A < b) {
           b -= A;
           do {
            E[s++] = d[w++];
           } while (--A);
           w = s - x, C = E;
          }
         } else if (f < A) {
          if (w += l + f - A, (A -= f) < b) {
           b -= A;
           do {
            E[s++] = d[w++];
           } while (--A);
           if (w = 0, f < b) {
            b -= A = f;
            do {
             E[s++] = d[w++];
            } while (--A);
            w = s - x, C = E;
           }
          }
         } else if (w += f - A, A < b) {
          b -= A;
          do {
           E[s++] = d[w++];
          } while (--A);
          w = s - x, C = E;
         }
         for (;b > 2; ) E[s++] = C[w++], E[s++] = C[w++], E[s++] = C[w++], b -= 3;
         b && (E[s++] = C[w++], b > 1 && (E[s++] = C[w++]));
        } else {
         w = s - x;
         do {
          E[s++] = E[w++], E[s++] = E[w++], E[s++] = E[w++], b -= 3;
         } while (b > 2);
         b && (E[s++] = E[w++], b > 1 && (E[s++] = E[w++]));
        }
        break;
       }
      }
      break;
     }
    } while (r < i && s < a);
    r -= b = h >> 3, p &= (1 << (h -= b << 3)) - 1, e.next_in = r, e.next_out = s, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), 
    e.avail_out = s < a ? a - s + 257 : 257 - (s - a), n.hold = p, n.bits = h;
   };
  }, {} ],
  35: [ function(e, t, n) {
   "use strict";
   var r = e("../utils/common"), i = e("./adler32"), s = e("./crc32"), o = e("./inffast"), a = e("./inftrees"), c = 0, l = 1, u = 2, f = 4, d = 5, p = 6, h = 0, m = 1, g = 2, y = -2, v = -3, _ = -4, A = -5, b = 8, x = 1, w = 2, C = 3, k = 4, E = 5, B = 6, T = 7, I = 8, S = 9, M = 10, N = 11, O = 12, D = 13, F = 14, R = 15, Q = 16, j = 17, P = 18, U = 19, L = 20, V = 21, z = 22, H = 23, Y = 24, q = 25, J = 26, G = 27, X = 28, W = 29, K = 30, $ = 31, Z = 32, ee = 852, te = 592, ne = 15;
   function re(e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
   }
   function ie(e) {
    var t;
    return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", 
    t.wrap && (e.adler = 1 & t.wrap), t.mode = x, t.last = 0, t.havedict = 0, t.dmax = 32768, 
    t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(ee), t.distcode = t.distdyn = new r.Buf32(te), 
    t.sane = 1, t.back = -1, h) : y;
   }
   function se(e) {
    var t;
    return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, ie(e)) : y;
   }
   function oe(e, t) {
    var n, r;
    return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), 
    t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? y : (null !== r.window && r.wbits !== t && (r.window = null), 
    r.wrap = n, r.wbits = t, se(e))) : y;
   }
   function ae(e, t) {
    var n, i;
    return e ? (i = new function() {
     this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, 
     this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, 
     this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, 
     this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, 
     this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, 
     this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), 
     this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }(), e.state = i, i.window = null, (n = oe(e, t)) !== h && (e.state = null), n) : y;
   }
   var ce, le, ue = !0;
   function fe(e) {
    if (ue) {
     var t;
     for (ce = new r.Buf32(512), le = new r.Buf32(32), t = 0; t < 144; ) e.lens[t++] = 8;
     for (;t < 256; ) e.lens[t++] = 9;
     for (;t < 280; ) e.lens[t++] = 7;
     for (;t < 288; ) e.lens[t++] = 8;
     for (a(l, e.lens, 0, 288, ce, 0, e.work, {
      bits: 9
     }), t = 0; t < 32; ) e.lens[t++] = 5;
     a(u, e.lens, 0, 32, le, 0, e.work, {
      bits: 5
     }), ue = !1;
    }
    e.lencode = ce, e.lenbits = 9, e.distcode = le, e.distbits = 5;
   }
   n.inflateReset = se, n.inflateReset2 = oe, n.inflateResetKeep = ie, n.inflateInit = function(e) {
    return ae(e, ne);
   }, n.inflateInit2 = ae, n.inflate = function(e, t) {
    var n, ee, te, ne, ie, se, oe, ae, ce, le, ue, de, pe, he, me, ge, ye, ve, _e, Ae, be, xe, we, Ce, ke = 0, Ee = new r.Buf8(4), Be = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return y;
    (n = e.state).mode === O && (n.mode = D), ie = e.next_out, te = e.output, oe = e.avail_out, 
    ne = e.next_in, ee = e.input, se = e.avail_in, ae = n.hold, ce = n.bits, le = se, 
    ue = oe, xe = h;
    e: for (;;) switch (n.mode) {
    case x:
     if (0 === n.wrap) {
      n.mode = D;
      break;
     }
     for (;ce < 16; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     if (2 & n.wrap && 35615 === ae) {
      n.check = 0, Ee[0] = 255 & ae, Ee[1] = ae >>> 8 & 255, n.check = s(n.check, Ee, 2, 0), 
      ae = 0, ce = 0, n.mode = w;
      break;
     }
     if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & ae) << 8) + (ae >> 8)) % 31) {
      e.msg = "incorrect header check", n.mode = K;
      break;
     }
     if ((15 & ae) !== b) {
      e.msg = "unknown compression method", n.mode = K;
      break;
     }
     if (ce -= 4, be = 8 + (15 & (ae >>>= 4)), 0 === n.wbits) n.wbits = be; else if (be > n.wbits) {
      e.msg = "invalid window size", n.mode = K;
      break;
     }
     n.dmax = 1 << be, e.adler = n.check = 1, n.mode = 512 & ae ? M : O, ae = 0, ce = 0;
     break;

    case w:
     for (;ce < 16; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     if (n.flags = ae, (255 & n.flags) !== b) {
      e.msg = "unknown compression method", n.mode = K;
      break;
     }
     if (57344 & n.flags) {
      e.msg = "unknown header flags set", n.mode = K;
      break;
     }
     n.head && (n.head.text = ae >> 8 & 1), 512 & n.flags && (Ee[0] = 255 & ae, Ee[1] = ae >>> 8 & 255, 
     n.check = s(n.check, Ee, 2, 0)), ae = 0, ce = 0, n.mode = C;

    case C:
     for (;ce < 32; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     n.head && (n.head.time = ae), 512 & n.flags && (Ee[0] = 255 & ae, Ee[1] = ae >>> 8 & 255, 
     Ee[2] = ae >>> 16 & 255, Ee[3] = ae >>> 24 & 255, n.check = s(n.check, Ee, 4, 0)), 
     ae = 0, ce = 0, n.mode = k;

    case k:
     for (;ce < 16; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     n.head && (n.head.xflags = 255 & ae, n.head.os = ae >> 8), 512 & n.flags && (Ee[0] = 255 & ae, 
     Ee[1] = ae >>> 8 & 255, n.check = s(n.check, Ee, 2, 0)), ae = 0, ce = 0, n.mode = E;

    case E:
     if (1024 & n.flags) {
      for (;ce < 16; ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      n.length = ae, n.head && (n.head.extra_len = ae), 512 & n.flags && (Ee[0] = 255 & ae, 
      Ee[1] = ae >>> 8 & 255, n.check = s(n.check, Ee, 2, 0)), ae = 0, ce = 0;
     } else n.head && (n.head.extra = null);
     n.mode = B;

    case B:
     if (1024 & n.flags && ((de = n.length) > se && (de = se), de && (n.head && (be = n.head.extra_len - n.length, 
     n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, ee, ne, de, be)), 
     512 & n.flags && (n.check = s(n.check, ee, de, ne)), se -= de, ne += de, n.length -= de), 
     n.length)) break e;
     n.length = 0, n.mode = T;

    case T:
     if (2048 & n.flags) {
      if (0 === se) break e;
      de = 0;
      do {
       be = ee[ne + de++], n.head && be && n.length < 65536 && (n.head.name += String.fromCharCode(be));
      } while (be && de < se);
      if (512 & n.flags && (n.check = s(n.check, ee, de, ne)), se -= de, ne += de, be) break e;
     } else n.head && (n.head.name = null);
     n.length = 0, n.mode = I;

    case I:
     if (4096 & n.flags) {
      if (0 === se) break e;
      de = 0;
      do {
       be = ee[ne + de++], n.head && be && n.length < 65536 && (n.head.comment += String.fromCharCode(be));
      } while (be && de < se);
      if (512 & n.flags && (n.check = s(n.check, ee, de, ne)), se -= de, ne += de, be) break e;
     } else n.head && (n.head.comment = null);
     n.mode = S;

    case S:
     if (512 & n.flags) {
      for (;ce < 16; ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      if (ae !== (65535 & n.check)) {
       e.msg = "header crc mismatch", n.mode = K;
       break;
      }
      ae = 0, ce = 0;
     }
     n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, 
     n.mode = O;
     break;

    case M:
     for (;ce < 32; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     e.adler = n.check = re(ae), ae = 0, ce = 0, n.mode = N;

    case N:
     if (0 === n.havedict) return e.next_out = ie, e.avail_out = oe, e.next_in = ne, 
     e.avail_in = se, n.hold = ae, n.bits = ce, g;
     e.adler = n.check = 1, n.mode = O;

    case O:
     if (t === d || t === p) break e;

    case D:
     if (n.last) {
      ae >>>= 7 & ce, ce -= 7 & ce, n.mode = G;
      break;
     }
     for (;ce < 3; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     switch (n.last = 1 & ae, ce -= 1, 3 & (ae >>>= 1)) {
     case 0:
      n.mode = F;
      break;

     case 1:
      if (fe(n), n.mode = L, t === p) {
       ae >>>= 2, ce -= 2;
       break e;
      }
      break;

     case 2:
      n.mode = j;
      break;

     case 3:
      e.msg = "invalid block type", n.mode = K;
     }
     ae >>>= 2, ce -= 2;
     break;

    case F:
     for (ae >>>= 7 & ce, ce -= 7 & ce; ce < 32; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     if ((65535 & ae) != (ae >>> 16 ^ 65535)) {
      e.msg = "invalid stored block lengths", n.mode = K;
      break;
     }
     if (n.length = 65535 & ae, ae = 0, ce = 0, n.mode = R, t === p) break e;

    case R:
     n.mode = Q;

    case Q:
     if (de = n.length) {
      if (de > se && (de = se), de > oe && (de = oe), 0 === de) break e;
      r.arraySet(te, ee, ne, de, ie), se -= de, ne += de, oe -= de, ie += de, n.length -= de;
      break;
     }
     n.mode = O;
     break;

    case j:
     for (;ce < 14; ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     if (n.nlen = 257 + (31 & ae), ae >>>= 5, ce -= 5, n.ndist = 1 + (31 & ae), ae >>>= 5, 
     ce -= 5, n.ncode = 4 + (15 & ae), ae >>>= 4, ce -= 4, n.nlen > 286 || n.ndist > 30) {
      e.msg = "too many length or distance symbols", n.mode = K;
      break;
     }
     n.have = 0, n.mode = P;

    case P:
     for (;n.have < n.ncode; ) {
      for (;ce < 3; ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      n.lens[Be[n.have++]] = 7 & ae, ae >>>= 3, ce -= 3;
     }
     for (;n.have < 19; ) n.lens[Be[n.have++]] = 0;
     if (n.lencode = n.lendyn, n.lenbits = 7, we = {
      bits: n.lenbits
     }, xe = a(c, n.lens, 0, 19, n.lencode, 0, n.work, we), n.lenbits = we.bits, xe) {
      e.msg = "invalid code lengths set", n.mode = K;
      break;
     }
     n.have = 0, n.mode = U;

    case U:
     for (;n.have < n.nlen + n.ndist; ) {
      for (;ge = (ke = n.lencode[ae & (1 << n.lenbits) - 1]) >>> 16 & 255, ye = 65535 & ke, 
      !((me = ke >>> 24) <= ce); ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      if (ye < 16) ae >>>= me, ce -= me, n.lens[n.have++] = ye; else {
       if (16 === ye) {
        for (Ce = me + 2; ce < Ce; ) {
         if (0 === se) break e;
         se--, ae += ee[ne++] << ce, ce += 8;
        }
        if (ae >>>= me, ce -= me, 0 === n.have) {
         e.msg = "invalid bit length repeat", n.mode = K;
         break;
        }
        be = n.lens[n.have - 1], de = 3 + (3 & ae), ae >>>= 2, ce -= 2;
       } else if (17 === ye) {
        for (Ce = me + 3; ce < Ce; ) {
         if (0 === se) break e;
         se--, ae += ee[ne++] << ce, ce += 8;
        }
        ce -= me, be = 0, de = 3 + (7 & (ae >>>= me)), ae >>>= 3, ce -= 3;
       } else {
        for (Ce = me + 7; ce < Ce; ) {
         if (0 === se) break e;
         se--, ae += ee[ne++] << ce, ce += 8;
        }
        ce -= me, be = 0, de = 11 + (127 & (ae >>>= me)), ae >>>= 7, ce -= 7;
       }
       if (n.have + de > n.nlen + n.ndist) {
        e.msg = "invalid bit length repeat", n.mode = K;
        break;
       }
       for (;de--; ) n.lens[n.have++] = be;
      }
     }
     if (n.mode === K) break;
     if (0 === n.lens[256]) {
      e.msg = "invalid code -- missing end-of-block", n.mode = K;
      break;
     }
     if (n.lenbits = 9, we = {
      bits: n.lenbits
     }, xe = a(l, n.lens, 0, n.nlen, n.lencode, 0, n.work, we), n.lenbits = we.bits, 
     xe) {
      e.msg = "invalid literal/lengths set", n.mode = K;
      break;
     }
     if (n.distbits = 6, n.distcode = n.distdyn, we = {
      bits: n.distbits
     }, xe = a(u, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, we), n.distbits = we.bits, 
     xe) {
      e.msg = "invalid distances set", n.mode = K;
      break;
     }
     if (n.mode = L, t === p) break e;

    case L:
     n.mode = V;

    case V:
     if (se >= 6 && oe >= 258) {
      e.next_out = ie, e.avail_out = oe, e.next_in = ne, e.avail_in = se, n.hold = ae, 
      n.bits = ce, o(e, ue), ie = e.next_out, te = e.output, oe = e.avail_out, ne = e.next_in, 
      ee = e.input, se = e.avail_in, ae = n.hold, ce = n.bits, n.mode === O && (n.back = -1);
      break;
     }
     for (n.back = 0; ge = (ke = n.lencode[ae & (1 << n.lenbits) - 1]) >>> 16 & 255, 
     ye = 65535 & ke, !((me = ke >>> 24) <= ce); ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     if (ge && 0 == (240 & ge)) {
      for (ve = me, _e = ge, Ae = ye; ge = (ke = n.lencode[Ae + ((ae & (1 << ve + _e) - 1) >> ve)]) >>> 16 & 255, 
      ye = 65535 & ke, !(ve + (me = ke >>> 24) <= ce); ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      ae >>>= ve, ce -= ve, n.back += ve;
     }
     if (ae >>>= me, ce -= me, n.back += me, n.length = ye, 0 === ge) {
      n.mode = J;
      break;
     }
     if (32 & ge) {
      n.back = -1, n.mode = O;
      break;
     }
     if (64 & ge) {
      e.msg = "invalid literal/length code", n.mode = K;
      break;
     }
     n.extra = 15 & ge, n.mode = z;

    case z:
     if (n.extra) {
      for (Ce = n.extra; ce < Ce; ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      n.length += ae & (1 << n.extra) - 1, ae >>>= n.extra, ce -= n.extra, n.back += n.extra;
     }
     n.was = n.length, n.mode = H;

    case H:
     for (;ge = (ke = n.distcode[ae & (1 << n.distbits) - 1]) >>> 16 & 255, ye = 65535 & ke, 
     !((me = ke >>> 24) <= ce); ) {
      if (0 === se) break e;
      se--, ae += ee[ne++] << ce, ce += 8;
     }
     if (0 == (240 & ge)) {
      for (ve = me, _e = ge, Ae = ye; ge = (ke = n.distcode[Ae + ((ae & (1 << ve + _e) - 1) >> ve)]) >>> 16 & 255, 
      ye = 65535 & ke, !(ve + (me = ke >>> 24) <= ce); ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      ae >>>= ve, ce -= ve, n.back += ve;
     }
     if (ae >>>= me, ce -= me, n.back += me, 64 & ge) {
      e.msg = "invalid distance code", n.mode = K;
      break;
     }
     n.offset = ye, n.extra = 15 & ge, n.mode = Y;

    case Y:
     if (n.extra) {
      for (Ce = n.extra; ce < Ce; ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      n.offset += ae & (1 << n.extra) - 1, ae >>>= n.extra, ce -= n.extra, n.back += n.extra;
     }
     if (n.offset > n.dmax) {
      e.msg = "invalid distance too far back", n.mode = K;
      break;
     }
     n.mode = q;

    case q:
     if (0 === oe) break e;
     if (de = ue - oe, n.offset > de) {
      if ((de = n.offset - de) > n.whave && n.sane) {
       e.msg = "invalid distance too far back", n.mode = K;
       break;
      }
      de > n.wnext ? (de -= n.wnext, pe = n.wsize - de) : pe = n.wnext - de, de > n.length && (de = n.length), 
      he = n.window;
     } else he = te, pe = ie - n.offset, de = n.length;
     de > oe && (de = oe), oe -= de, n.length -= de;
     do {
      te[ie++] = he[pe++];
     } while (--de);
     0 === n.length && (n.mode = V);
     break;

    case J:
     if (0 === oe) break e;
     te[ie++] = n.length, oe--, n.mode = V;
     break;

    case G:
     if (n.wrap) {
      for (;ce < 32; ) {
       if (0 === se) break e;
       se--, ae |= ee[ne++] << ce, ce += 8;
      }
      if (ue -= oe, e.total_out += ue, n.total += ue, ue && (e.adler = n.check = n.flags ? s(n.check, te, ue, ie - ue) : i(n.check, te, ue, ie - ue)), 
      ue = oe, (n.flags ? ae : re(ae)) !== n.check) {
       e.msg = "incorrect data check", n.mode = K;
       break;
      }
      ae = 0, ce = 0;
     }
     n.mode = X;

    case X:
     if (n.wrap && n.flags) {
      for (;ce < 32; ) {
       if (0 === se) break e;
       se--, ae += ee[ne++] << ce, ce += 8;
      }
      if (ae !== (4294967295 & n.total)) {
       e.msg = "incorrect length check", n.mode = K;
       break;
      }
      ae = 0, ce = 0;
     }
     n.mode = W;

    case W:
     xe = m;
     break e;

    case K:
     xe = v;
     break e;

    case $:
     return _;

    case Z:
    default:
     return y;
    }
    return e.next_out = ie, e.avail_out = oe, e.next_in = ne, e.avail_in = se, n.hold = ae, 
    n.bits = ce, (n.wsize || ue !== e.avail_out && n.mode < K && (n.mode < G || t !== f)) && function(e, t, n, i) {
     var s, o = e.state;
     return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), 
     i >= o.wsize ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((s = o.wsize - o.wnext) > i && (s = i), 
     r.arraySet(o.window, t, n - i, s, o.wnext), (i -= s) ? (r.arraySet(o.window, t, n - i, i, 0), 
     o.wnext = i, o.whave = o.wsize) : (o.wnext += s, o.wnext === o.wsize && (o.wnext = 0), 
     o.whave < o.wsize && (o.whave += s))), 0;
    }(e, e.output, e.next_out, ue - e.avail_out) ? (n.mode = $, _) : (le -= e.avail_in, 
    ue -= e.avail_out, e.total_in += le, e.total_out += ue, n.total += ue, n.wrap && ue && (e.adler = n.check = n.flags ? s(n.check, te, ue, e.next_out - ue) : i(n.check, te, ue, e.next_out - ue)), 
    e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === O ? 128 : 0) + (n.mode === L || n.mode === R ? 256 : 0), 
    (0 === le && 0 === ue || t === f) && xe === h && (xe = A), xe);
   }, n.inflateEnd = function(e) {
    if (!e || !e.state) return y;
    var t = e.state;
    return t.window && (t.window = null), e.state = null, h;
   }, n.inflateGetHeader = function(e, t) {
    var n;
    return e && e.state ? 0 == (2 & (n = e.state).wrap) ? y : (n.head = t, t.done = !1, 
    h) : y;
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
   var r = e("../utils/common"), i = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ], s = [ 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78 ], o = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0 ], a = [ 16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64 ];
   t.exports = function(e, t, n, c, l, u, f, d) {
    var p, h, m, g, y, v, _, A, b, x = d.bits, w = 0, C = 0, k = 0, E = 0, B = 0, T = 0, I = 0, S = 0, M = 0, N = 0, O = null, D = 0, F = new r.Buf16(16), R = new r.Buf16(16), Q = null, j = 0;
    for (w = 0; w <= 15; w++) F[w] = 0;
    for (C = 0; C < c; C++) F[t[n + C]]++;
    for (B = x, E = 15; E >= 1 && 0 === F[E]; E--) ;
    if (B > E && (B = E), 0 === E) return l[u++] = 20971520, l[u++] = 20971520, d.bits = 1, 
    0;
    for (k = 1; k < E && 0 === F[k]; k++) ;
    for (B < k && (B = k), S = 1, w = 1; w <= 15; w++) if (S <<= 1, (S -= F[w]) < 0) return -1;
    if (S > 0 && (0 === e || 1 !== E)) return -1;
    for (R[1] = 0, w = 1; w < 15; w++) R[w + 1] = R[w] + F[w];
    for (C = 0; C < c; C++) 0 !== t[n + C] && (f[R[t[n + C]]++] = C);
    if (0 === e ? (O = Q = f, v = 19) : 1 === e ? (O = i, D -= 257, Q = s, j -= 257, 
    v = 256) : (O = o, Q = a, v = -1), N = 0, C = 0, w = k, y = u, T = B, I = 0, m = -1, 
    g = (M = 1 << B) - 1, 1 === e && M > 852 || 2 === e && M > 592) return 1;
    for (;;) {
     0, _ = w - I, f[C] < v ? (A = 0, b = f[C]) : f[C] > v ? (A = Q[j + f[C]], b = O[D + f[C]]) : (A = 96, 
     b = 0), p = 1 << w - I, k = h = 1 << T;
     do {
      l[y + (N >> I) + (h -= p)] = _ << 24 | A << 16 | b | 0;
     } while (0 !== h);
     for (p = 1 << w - 1; N & p; ) p >>= 1;
     if (0 !== p ? (N &= p - 1, N += p) : N = 0, C++, 0 == --F[w]) {
      if (w === E) break;
      w = t[n + f[C]];
     }
     if (w > B && (N & g) !== m) {
      for (0 === I && (I = B), y += k, S = 1 << (T = w - I); T + I < E && !((S -= F[T + I]) <= 0); ) T++, 
      S <<= 1;
      if (M += 1 << T, 1 === e && M > 852 || 2 === e && M > 592) return 1;
      l[m = N & g] = B << 24 | T << 16 | y - u | 0;
     }
    }
    return 0 !== N && (l[y + N] = w - I << 24 | 64 << 16 | 0), d.bits = B, 0;
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
   var r = e("../utils/common"), i = 4, s = 0, o = 1, a = 2;
   function c(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
   }
   var l = 0, u = 1, f = 2, d = 29, p = 256, h = p + 1 + d, m = 30, g = 19, y = 2 * h + 1, v = 15, _ = 16, A = 7, b = 256, x = 16, w = 17, C = 18, k = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ], E = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ], B = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ], T = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], I = new Array(2 * (h + 2));
   c(I);
   var S = new Array(2 * m);
   c(S);
   var M = new Array(512);
   c(M);
   var N = new Array(256);
   c(N);
   var O = new Array(d);
   c(O);
   var D = new Array(m);
   c(D);
   var F, R, Q, j = function(e, t, n, r, i) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, 
    this.max_length = i, this.has_stree = e && e.length;
   }, P = function(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
   };
   function U(e) {
    return e < 256 ? M[e] : M[256 + (e >>> 7)];
   }
   function L(e, t) {
    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
   }
   function V(e, t, n) {
    e.bi_valid > _ - n ? (e.bi_buf |= t << e.bi_valid & 65535, L(e, e.bi_buf), e.bi_buf = t >> _ - e.bi_valid, 
    e.bi_valid += n - _) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
   }
   function z(e, t, n) {
    V(e, n[2 * t], n[2 * t + 1]);
   }
   function H(e, t) {
    var n = 0;
    do {
     n |= 1 & e, e >>>= 1, n <<= 1;
    } while (--t > 0);
    return n >>> 1;
   }
   function Y(e, t, n) {
    var r, i, s = new Array(v + 1), o = 0;
    for (r = 1; r <= v; r++) s[r] = o = o + n[r - 1] << 1;
    for (i = 0; i <= t; i++) {
     var a = e[2 * i + 1];
     0 !== a && (e[2 * i] = H(s[a]++, a));
    }
   }
   function q(e) {
    var t;
    for (t = 0; t < h; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < m; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < g; t++) e.bl_tree[2 * t] = 0;
    e.dyn_ltree[2 * b] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
   }
   function J(e) {
    e.bi_valid > 8 ? L(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), 
    e.bi_buf = 0, e.bi_valid = 0;
   }
   function G(e, t, n, r) {
    var i = 2 * t, s = 2 * n;
    return e[i] < e[s] || e[i] === e[s] && r[t] <= r[n];
   }
   function X(e, t, n) {
    for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && G(t, e.heap[i + 1], e.heap[i], e.depth) && i++, 
    !G(t, r, e.heap[i], e.depth)); ) e.heap[n] = e.heap[i], n = i, i <<= 1;
    e.heap[n] = r;
   }
   function W(e, t, n) {
    var r, i, s, o, a = 0;
    if (0 !== e.last_lit) do {
     r = e.pending_buf[e.d_buf + 2 * a] << 8 | e.pending_buf[e.d_buf + 2 * a + 1], i = e.pending_buf[e.l_buf + a], 
     a++, 0 === r ? z(e, i, t) : (z(e, (s = N[i]) + p + 1, t), 0 !== (o = k[s]) && V(e, i -= O[s], o), 
     z(e, s = U(--r), n), 0 !== (o = E[s]) && V(e, r -= D[s], o));
    } while (a < e.last_lit);
    z(e, b, t);
   }
   function K(e, t) {
    var n, r, i, s = t.dyn_tree, o = t.stat_desc.static_tree, a = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
    for (e.heap_len = 0, e.heap_max = y, n = 0; n < c; n++) 0 !== s[2 * n] ? (e.heap[++e.heap_len] = l = n, 
    e.depth[n] = 0) : s[2 * n + 1] = 0;
    for (;e.heap_len < 2; ) s[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, 
    e.depth[i] = 0, e.opt_len--, a && (e.static_len -= o[2 * i + 1]);
    for (t.max_code = l, n = e.heap_len >> 1; n >= 1; n--) X(e, s, n);
    i = c;
    do {
     n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], X(e, s, 1), r = e.heap[1], e.heap[--e.heap_max] = n, 
     e.heap[--e.heap_max] = r, s[2 * i] = s[2 * n] + s[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, 
     s[2 * n + 1] = s[2 * r + 1] = i, e.heap[1] = i++, X(e, s, 1);
    } while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1], function(e, t) {
     var n, r, i, s, o, a, c = t.dyn_tree, l = t.max_code, u = t.stat_desc.static_tree, f = t.stat_desc.has_stree, d = t.stat_desc.extra_bits, p = t.stat_desc.extra_base, h = t.stat_desc.max_length, m = 0;
     for (s = 0; s <= v; s++) e.bl_count[s] = 0;
     for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < y; n++) (s = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && (s = h, 
     m++), c[2 * r + 1] = s, r > l || (e.bl_count[s]++, o = 0, r >= p && (o = d[r - p]), 
     a = c[2 * r], e.opt_len += a * (s + o), f && (e.static_len += a * (u[2 * r + 1] + o)));
     if (0 !== m) {
      do {
       for (s = h - 1; 0 === e.bl_count[s]; ) s--;
       e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[h]--, m -= 2;
      } while (m > 0);
      for (s = h; 0 !== s; s--) for (r = e.bl_count[s]; 0 !== r; ) (i = e.heap[--n]) > l || (c[2 * i + 1] !== s && (e.opt_len += (s - c[2 * i + 1]) * c[2 * i], 
      c[2 * i + 1] = s), r--);
     }
    }(e, t), Y(s, l, e.bl_count);
   }
   function $(e, t, n) {
    var r, i, s = -1, o = t[1], a = 0, c = 7, l = 4;
    for (0 === o && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, 
    o = t[2 * (r + 1) + 1], ++a < c && i === o || (a < l ? e.bl_tree[2 * i] += a : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, 
    e.bl_tree[2 * x]++) : a <= 10 ? e.bl_tree[2 * w]++ : e.bl_tree[2 * C]++, a = 0, 
    s = i, 0 === o ? (c = 138, l = 3) : i === o ? (c = 6, l = 3) : (c = 7, l = 4));
   }
   function Z(e, t, n) {
    var r, i, s = -1, o = t[1], a = 0, c = 7, l = 4;
    for (0 === o && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], 
    !(++a < c && i === o)) {
     if (a < l) do {
      z(e, i, e.bl_tree);
     } while (0 != --a); else 0 !== i ? (i !== s && (z(e, i, e.bl_tree), a--), z(e, x, e.bl_tree), 
     V(e, a - 3, 2)) : a <= 10 ? (z(e, w, e.bl_tree), V(e, a - 3, 3)) : (z(e, C, e.bl_tree), 
     V(e, a - 11, 7));
     a = 0, s = i, 0 === o ? (c = 138, l = 3) : i === o ? (c = 6, l = 3) : (c = 7, l = 4);
    }
   }
   var ee = !1;
   function te(e, t, n, i) {
    V(e, (l << 1) + (i ? 1 : 0), 3), function(e, t, n, i) {
     J(e), i && (L(e, n), L(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), 
     e.pending += n;
    }(e, t, n, !0);
   }
   n._tr_init = function(e) {
    ee || (function() {
     var e, t, n, r, i, s = new Array(v + 1);
     for (n = 0, r = 0; r < d - 1; r++) for (O[r] = n, e = 0; e < 1 << k[r]; e++) N[n++] = r;
     for (N[n - 1] = r, i = 0, r = 0; r < 16; r++) for (D[r] = i, e = 0; e < 1 << E[r]; e++) M[i++] = r;
     for (i >>= 7; r < m; r++) for (D[r] = i << 7, e = 0; e < 1 << E[r] - 7; e++) M[256 + i++] = r;
     for (t = 0; t <= v; t++) s[t] = 0;
     for (e = 0; e <= 143; ) I[2 * e + 1] = 8, e++, s[8]++;
     for (;e <= 255; ) I[2 * e + 1] = 9, e++, s[9]++;
     for (;e <= 279; ) I[2 * e + 1] = 7, e++, s[7]++;
     for (;e <= 287; ) I[2 * e + 1] = 8, e++, s[8]++;
     for (Y(I, h + 1, s), e = 0; e < m; e++) S[2 * e + 1] = 5, S[2 * e] = H(e, 5);
     F = new j(I, k, p + 1, h, v), R = new j(S, E, 0, m, v), Q = new j(new Array(0), B, 0, g, A);
    }(), ee = !0), e.l_desc = new P(e.dyn_ltree, F), e.d_desc = new P(e.dyn_dtree, R), 
    e.bl_desc = new P(e.bl_tree, Q), e.bi_buf = 0, e.bi_valid = 0, q(e);
   }, n._tr_stored_block = te, n._tr_flush_block = function(e, t, n, r) {
    var c, l, d = 0;
    e.level > 0 ? (e.strm.data_type === a && (e.strm.data_type = function(e) {
     var t, n = 4093624447;
     for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return s;
     if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return o;
     for (t = 32; t < p; t++) if (0 !== e.dyn_ltree[2 * t]) return o;
     return s;
    }(e)), K(e, e.l_desc), K(e, e.d_desc), d = function(e) {
     var t;
     for ($(e, e.dyn_ltree, e.l_desc.max_code), $(e, e.dyn_dtree, e.d_desc.max_code), 
     K(e, e.bl_desc), t = g - 1; t >= 3 && 0 === e.bl_tree[2 * T[t] + 1]; t--) ;
     return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
    }(e), c = e.opt_len + 3 + 7 >>> 3, (l = e.static_len + 3 + 7 >>> 3) <= c && (c = l)) : c = l = n + 5, 
    n + 4 <= c && -1 !== t ? te(e, t, n, r) : e.strategy === i || l === c ? (V(e, (u << 1) + (r ? 1 : 0), 3), 
    W(e, I, S)) : (V(e, (f << 1) + (r ? 1 : 0), 3), function(e, t, n, r) {
     var i;
     for (V(e, t - 257, 5), V(e, n - 1, 5), V(e, r - 4, 4), i = 0; i < r; i++) V(e, e.bl_tree[2 * T[i] + 1], 3);
     Z(e, e.dyn_ltree, t - 1), Z(e, e.dyn_dtree, n - 1);
    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, d + 1), W(e, e.dyn_ltree, e.dyn_dtree)), 
    q(e), r && J(e);
   }, n._tr_tally = function(e, t, n) {
    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, 
    e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, 
    t--, e.dyn_ltree[2 * (N[n] + p + 1)]++, e.dyn_dtree[2 * U(t)]++), e.last_lit === e.lit_bufsize - 1;
   }, n._tr_align = function(e) {
    V(e, u << 1, 3), z(e, b, I), function(e) {
     16 === e.bi_valid ? (L(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, 
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
});

var $jscomp = $jscomp || {};

$jscomp.scope = {}, $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
 if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
 e != Array.prototype && e != Object.prototype && (e[t] = n.value);
}, $jscomp.getGlobal = function(e) {
 return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", 
$jscomp.initSymbol = function() {
 $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(e) {
 return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
}, $jscomp.initSymbolIterator = function() {
 $jscomp.initSymbol();
 var e = $jscomp.global.Symbol.iterator;
 e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
  configurable: !0,
  writable: !0,
  value: function() {
   return $jscomp.arrayIterator(this);
  }
 }), $jscomp.initSymbolIterator = function() {};
}, $jscomp.arrayIterator = function(e) {
 var t = 0;
 return $jscomp.iteratorPrototype(function() {
  return t < e.length ? {
   done: !1,
   value: e[t++]
  } : {
   done: !0
  };
 });
}, $jscomp.iteratorPrototype = function(e) {
 return $jscomp.initSymbolIterator(), (e = {
  next: e
 })[$jscomp.global.Symbol.iterator] = function() {
  return this;
 }, e;
}, $jscomp.iteratorFromArray = function(e, t) {
 $jscomp.initSymbolIterator(), e instanceof String && (e += "");
 var n = 0, r = {
  next: function() {
   if (n < e.length) {
    var i = n++;
    return {
     value: t(i, e[i]),
     done: !1
    };
   }
   return r.next = function() {
    return {
     done: !0,
     value: void 0
    };
   }, r.next();
  }
 };
 return r[Symbol.iterator] = function() {
  return r;
 }, r;
}, $jscomp.polyfill = function(e, t, n, r) {
 if (t) {
  for (n = $jscomp.global, e = e.split("."), r = 0; r < e.length - 1; r++) {
   var i = e[r];
   i in n || (n[i] = {}), n = n[i];
  }
  (t = t(r = n[e = e[e.length - 1]])) != r && null != t && $jscomp.defineProperty(n, e, {
   configurable: !0,
   writable: !0,
   value: t
  });
 }
}, $jscomp.polyfill("Array.prototype.keys", function(e) {
 return e || function() {
  return $jscomp.iteratorFromArray(this, function(e) {
   return e;
  });
 };
}, "es6-impl", "es3"), $jscomp.findInternal = function(e, t, n) {
 e instanceof String && (e = String(e));
 for (var r = e.length, i = 0; i < r; i++) {
  var s = e[i];
  if (t.call(n, s, i, e)) return {
   i: i,
   v: s
  };
 }
 return {
  i: -1,
  v: void 0
 };
}, $jscomp.polyfill("Array.prototype.find", function(e) {
 return e || function(e, t) {
  return $jscomp.findInternal(this, e, t).v;
 };
}, "es6-impl", "es3");

var xml2abc_VERSION = 104, vertaal;

!function() {
 function e(e, t) {
  return Array(e + 1).join(t);
 }
 function t(e, t) {
  for (var n = []; e; ) n.push(t), --e;
  return n;
 }
 function n(e, t) {
  for (var n = 0, r = {}; n < e.length; ++n) r[e[n]] = t[n];
  return r;
 }
 function r(e, t) {
  var n = e.split(/%[ds]/);
  return n.length > t.length && t.push(""), t.map(function(e, t) {
   return n[t] + e;
  }).join("");
 }
 function i(e, t) {
  B.info(r(e, t));
 }
 function s(e, t) {
  return -1 !== e.indexOf(t, e.length - t.length);
 }
 function o(e) {
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
 function c(e) {
  this.reset(), this.ixp = e, this.divs = this.mdur = this.ixm = 0;
 }
 function l(e, t) {
  this.tijd = 0, this.dur = e, this.fact = null, this.tup = [ "" ], this.tupabc = "", 
  this.grace = this.beam = 0, this.before = [], this.after = "", this.ns = t ? [ t ] : [], 
  this.lyrs = {}, this.pos = 0, this.tab = null, this.ntdec = "";
 }
 function u(e) {
  this.tijd = 0, this.str = e, this.pos = 0;
 }
 function f() {}
 function d(e) {
  this.maxtime = this.tijd = 0, this.gMaten = [], this.gLyrics = [], this.vnums = {}, 
  this.cnt = new f(), this.vceCnt = 1, this.lastnote = null, this.bpl = e.b, this.cpl = e.n, 
  this.repbra = 0, this.nvlt = e.v;
 }
 function p(e, t, n, r) {
  this.fnmext = e, this.outlist = [], this.infolist = [], this.title = "T:Title", 
  this.key = "none", this.clefs = {}, this.mtr = "none", this.tempo = 0, this.tempo_units = [ 1, 4 ], 
  this.pad = t, this.X = n + 1, this.denL = r.d, this.volpan = r.m, this.cmpL = [], 
  this.scale = "", this.tstep = r.t, this.stemless = 0, this.rightmargin = this.leftmargin = this.pagewidth = "", 
  this.shiftStem = r.s, 4 == r.p.length && (this.scale = "" != r.p[0] ? parseFloat(r.p[0]) : "", 
  this.pagewidth = "" != r.p[1] ? parseFloat(r.p[1]) : "", this.leftmargin = "" != r.p[2] ? parseFloat(r.p[2]) : "", 
  this.rightmargin = "" != r.p[3] ? parseFloat(r.p[3]) : "");
 }
 function h(e, t) {
  if (!e.join("")) return [ "", 0 ];
  for (var n = [], r = 0; r < e.length; ++r) {
   var i = e[r];
   "" == i ? i = t ? "_" : "*" : s(i, "_") && !s(i, "\\_") ? (i = i.replace("_", ""), 
   t = 1) : t = 0, n.push(i);
  }
  return [ n.join(" "), t ];
 }
 function m(e, t) {
  for (var n, r = e, i = t; t; ) n = e % t, e = t, t = n;
  return [ r / e, i / e ];
 }
 function g(e, t, n) {
  return 0 == e.dur ? "" : (t = (r = m(n * e.dur, 4 * t))[0], n = r[1], e.fact && (t = (r = m(t * (r = e.fact[0]), n * (e = e.fact[1])))[0], 
  n = r[1]), 64 < n && ((e = t / n) - (r = Math.floor(e)) < .1 * e && (t = r, n = 1), 
  i("denominator too small: %d/%d rounded to %d/%d", [ t, n, (r = m(Math.round(64 * t / n) || 1, 64))[0], r[1] ]), 
  t = r[0], n = r[1]), 1 == t ? 1 == n ? "" : 2 == n ? "/" : "/" + n : 1 == n ? "" + t : t + "/" + n);
  var r;
 }
 function y(e) {
  if (!(r = e.match(/([_^]*)([A-Ga-g])([',]*)/))) return -1;
  e = r[1];
  var t, n = r[2], r = r[3];
  return t = n.toUpperCase(), n = 60 + [ 0, 2, 4, 5, 7, 9, 11 ]["CDEFGAB".indexOf(t)] + (t != n ? 12 : 0), 
  e && (n += ("^" == e[0] ? 1 : -1) * e.length), r && (n += ("'" == r[0] ? 12 : -12) * r.length), 
  n;
 }
 function v(e, t, n) {
  var i, s, o = 0, a = t[e];
  -1 < (s = a.tup.indexOf("start")) && a.tup.splice(s, 1);
  var c = e;
  for (n = [ a.fact[0] / n[0], a.fact[1] / n[1] ]; e < t.length; ) {
   if (!((a = t[e]) instanceof u || a.grace)) {
    if (-1 < a.tup.indexOf("start") ? (e = (s = v(e, t, n))[0], o += s = s[1]) : a.fact && (o += 1), 
    -1 < (s = a.tup.indexOf("stop"))) {
     a.tup.splice(s, 1);
     break;
    }
    if (!a.fact) {
     e = i;
     break;
    }
    i = e;
   }
   e += 1;
  }
  return i = "3,2,3" == (i = [ n[0], n[1], o ]).toString() ? "(3" : r("(%d:%d:%d", i), 
  t[c].tupabc = i + t[c].tupabc, [ e, o ];
 }
 function _(e) {
  e = e.filter(function(e) {
   return e instanceof l;
  });
  for (var t = 0; t < e.length - 1; ) {
   var n = e[t], r = e[t + 1];
   !n.fact && !r.fact && 0 < n.dur && r.beam && (3 * n.dur == r.dur ? (r.dur = 2 * r.dur / 3, 
   n.dur *= 2, n.after = "<" + n.after, t += 1) : 3 * r.dur == n.dur && (n.dur = 2 * n.dur / 3, 
   r.dur *= 2, n.after = ">" + n.after, t += 1)), t += 1;
  }
 }
 function A(e, t, n, r, i) {
  for (r = 0; r < e.length; ) (n = e[r]) instanceof l && n.fact && !n.grace && (r = (n = v(r, e, [ 1, 1 ]))[0]), 
  r += 1;
  r = [];
  for (var o, a = 0; a < e.length; ++a) {
   if ((n = e[a]) instanceof l) {
    var c = g(n, t, i), u = 1 < n.ns.length;
    o = (o = n.ns.filter(function(e) {
     return s(e, "-");
    })).map(function(e) {
     return e.slice(0, -1);
    });
    var f = "";
    u && o.length == n.ns.length && (n.ns = o, f = "-"), o = n.tupabc + n.before.join(""), 
    u && (o += "["), o += n.ns.join(""), u && (o += "]" + f), s(o, "-") && (o = o.slice(0, -1), 
    f = "-"), o += c + f, o += n.after, n = n.beam;
   } else n.str instanceof Array && (n.str = n.str[0]), o = n.str, n = 1;
   n ? r.push(o) : r.push(" " + o);
  }
  for (r = r.join(""); 0 <= r.indexOf("!ped!!ped!"); ) r = r.replace(/!ped!!ped!/g, "!ped!");
  for (;0 <= r.indexOf("!ped-up!!ped-up!"); ) r = r.replace(/!ped-up!!ped-up!/g, "!ped-up!");
  for (;0 <= r.indexOf("!8va(!!8va)!"); ) r = r.replace(/!8va\(!!8va\)!/g, "");
  return r;
 }
 function b(e, t) {
  e.map(function(e, t) {
   e.pos = t;
  }), e.sort(function(e, t) {
   return e.tijd - t.tijd || e.pos - t.pos;
  });
  for (var n = 0, r = [], s = [], o = 0; o < e.length; ++o) {
   var a = e[o];
   if (a.tijd > n && (r.push(new l(a.tijd - n, "x")), s.push(r.length - 1)), a instanceof u) a.tijd < n && (a.tijd = n), 
   r.push(a), n = a.tijd; else {
    if (a.tijd < n) {
     if ("z" == a.ns[0]) continue;
     var c = r[r.length - 1];
     if (!(c.tijd <= a.tijd)) {
      i("overlapping notes in one voice! part %d, measure %d, note %s discarded", [ t.ixp + 1, t.ixm + 1, a instanceof l ? a.ns : a.str ]);
      continue;
     }
     if ("z" == c.ns[0]) c.dur = a.tijd - c.tijd, 0 == c.dur && r.pop(), i("overlap in part %d, measure %d: rest shortened", [ t.ixp + 1, t.ixm + 1 ]); else {
      if (c.ns = c.ns.concat(a.ns), i("overlap in part %d, measure %d: added chord", [ t.ixp + 1, t.ixm + 1 ]), 
      a.dur = a.tijd + a.dur - n, 0 >= a.dur) continue;
      a.tijd = n;
     }
    }
    if (r.push(a), a instanceof l) if ("x" == (n = a.ns[0]) || "z" == n) s.push(r.length - 1); else if (s.length) {
     if (a.beam && !a.grace) for (n = 0; n < s.length; ++n) r[s[n]].beam = a.beam;
     s = [];
    }
    n = a.tijd + a.dur;
   }
  }
  return 0 == n && i("empty measure in part %d, measure %d, it should contain at least a rest to advance the time!", [ t.ixp + 1, t.ixm + 1 ]), 
  r;
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
   var o, a, c;
   for (t = (c = e[e.length - 1])[0], o = c[1], a = c[2], c = c[3], o = "yes" == o || n, 
   s.push("brace" == t ? "{" : "["), n = 0; n < e.length - 1; ++n) w(e[n], [ a, c ], o, r, i, s), 
   o && s.push("|");
   o && s.splice(-1, 1), s.push("brace" == t ? "}" : "]");
  }
 }
 function C(e) {
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
 function k(t, n) {
  var r = t;
  return 4 < n && (r = t.toLowerCase()), 5 < n && (r += e(n - 5, "'")), 4 > n && (r += e(4 - n, ",")), 
  r;
 }
 function E(e) {
  this.slurBuf = {}, this.dirStk = {}, this.ingrace = 0, this.msc = new d(e), this.unfold = e.u, 
  this.ctf = e.c, this.gStfMap = [], this.midiMap = [], this.drumInst = {}, this.drumNotes = {}, 
  this.instMid = [], this.midDflt = [ -1, -1, -1, -91 ], this.msralts = {}, this.curalts = {}, 
  this.stfMap = {}, this.vce2stf = {}, this.clefMap = {}, this.curClef = {}, this.stemDir = {}, 
  this.clefOct = {}, this.curStf = {}, this.nolbrk = e.x, this.doPageFmt = 1 == e.p.length, 
  this.tstep = e.t, this.dirtov1 = e.v1, this.ped = !e.noped, this.wstems = e.stm, 
  this.pedVce = null, this.repeat_str = {}, this.tabVceMap = {}, this.koppen = {}, 
  this.note_alts = [ "=C ^C =D ^D =E =F ^F =G ^G =A ^A =B".split(" "), "^B _D ^^C _E _F ^E _G ^^F _A ^^G _B _C".split(" "), "__D ^^B __E __F ^^D __G ^^E __A _/A __B __C ^^A".split(" ") ], 
  this.step_map = {
   C: 0,
   D: 2,
   E: 4,
   F: 5,
   G: 7,
   A: 9,
   B: 11
  };
 }
 var B, T = Math.pow(2, 53), I = {
  "ornaments>trill-mark": "T",
  "ornaments>mordent": "M",
  "ornaments>inverted-mordent": "P",
  "ornaments>turn": "!turn!",
  "ornaments>inverted-turn": "!invertedturn!",
  "technical>up-bow": "u",
  "technical>down-bow": "v",
  "technical>harmonic": "!open!",
  "technical>open-string": "!open!",
  "technical>stopped": "!plus!",
  "technical>snap-pizzicato": "!snap!",
  "technical>thumb-position": "!thumb!",
  "articulations>accent": "!>!",
  "articulations>strong-accent": "!^!",
  "articulations>staccato": ".",
  "articulations>staccatissimo": "!wedge!",
  "articulations>scoop": "!slide!",
  fermata: "!fermata!",
  arpeggiate: "!arpeggio!",
  "articulations>tenuto": "!tenuto!",
  "articulations>spiccato": "!wedge!",
  "articulations>breath-mark": "!breath!",
  "articulations>detached-legato": "!tenuto!."
 }, S = {
  p: "!p!",
  pp: "!pp!",
  ppp: "!ppp!",
  pppp: "!pppp!",
  f: "!f!",
  ff: "!ff!",
  fff: "!fff!",
  ffff: "!ffff!",
  mp: "!mp!",
  mf: "!mf!",
  sfz: "!sfz!"
 }, M = '%%beginsvg\n<defs>,<text id="x" x="-3" y="0">&#xe263;</text>,<text id="x-" x="-3" y="0">&#xe263;</text>,<text id="x+" x="-3" y="0">&#xe263;</text>,<text id="normal" x="-3.7" y="0">&#xe0a3;</text>,<text id="normal-" x="-3.7" y="0">&#xe0a3;</text>,<text id="normal+" x="-3.7" y="0">&#xe0a4;</text>,<g id="circle-x"><text x="-3" y="0">&#xe263;</text><circle r="4" class="stroke"></circle></g>,<g id="circle-x-"><text x="-3" y="0">&#xe263;</text><circle r="4" class="stroke"></circle></g>,<path id="triangle" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"></path>,<path id="triangle-" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"></path>,<path id="triangle+" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="fill:#000"></path>,<path id="square" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"></path>,<path id="square-" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"></path>,<path id="square+" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="fill:#000"></path>,<path id="diamond" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"></path>,<path id="diamond-" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"></path>,<path id="diamond+" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="fill:#000"></path>,</defs>\n%%endsvg'.split(","), N = '%%beginsvg\n,<style type="text/css">\n,.bf {font-family:sans-serif; font-size:7px}\n,</style>\n,<defs>\n,<rect id="clr" x="-3" y="-1" width="6" height="5" fill="white"></rect>\n,<rect id="clr2" x="-3" y="-1" width="11" height="5" fill="white"></rect>\n'.split(",");
 c.prototype.reset = function() {
  this.lline = this.attr = "", this.rline = "|", this.lnum = "";
 }, f.prototype.inc = function(e, t) {
  this.counters[e][t] = (this.counters[e][t] || 0) + 1;
 }, f.prototype.clear = function(e) {
  var r = t((e = Object.keys(e)).length, 0);
  this.counters = {
   note: n(e, r),
   nopr: n(e, r),
   nopt: n(e, r)
  };
 }, f.prototype.getv = function(e, t) {
  return this.counters[e][t];
 }, f.prototype.prcnt = function(e) {
  for (var t in this.counters.note) 0 != this.getv("nopr", t) && i("part %d, voice %d has %d skipped non printable notes", [ e, t, this.getv("nopr", t) ]), 
  0 != this.getv("nopt", t) && i("part %d, voice %d has %d notes without pitch", [ e, t, this.getv("nopt", t) ]), 
  0 == this.getv("note", t) && i("part %d, skipped empty voice %d", [ e, t ]);
 }, d.prototype.initVoices = function(e) {
  for (var t in this.vtimes = {}, this.voices = {}, this.lyrics = {}, this.vnums) this.vtimes[t] = 0, 
  this.voices[t] = [], this.lyrics[t] = [];
  e && this.cnt.clear(this.vnums);
 }, d.prototype.incTime = function(e) {
  this.tijd += e, 0 > this.tijd && (this.tijd = 0), this.tijd > this.maxtime && (this.maxtime = this.tijd);
 }, d.prototype.appendElemCv = function(e, t) {
  for (var n in e) this.appendElem(n, t);
 }, d.prototype.insertElem = function(e, t) {
  var n = new u(t);
  n.tijd = 0, this.voices[e].unshift(n);
 }, d.prototype.appendObj = function(e, t, n) {
  t.tijd = this.tijd, this.voices[e].push(t), this.incTime(n), this.tijd > this.vtimes[e] && (this.vtimes[e] = this.tijd);
 }, d.prototype.appendElemT = function(e, t, n) {
  (t = new u(t)).tijd = n, this.voices[e].push(t);
 }, d.prototype.appendElem = function(e, t, n) {
  this.appendObj(e, new u(t), 0), n && this.cnt.inc("note", e);
 }, d.prototype.appendNote = function(e, t, n) {
  t.ns.push(t.ntdec + n), this.appendObj(e, t, parseInt(t.dur)), this.lastnote = t, 
  "z" != n && "x" != n && (this.cnt.inc("note", e), t.grace || this.lyrics[e].push(t.lyrs));
 }, d.prototype.getLastRec = function(e) {
  return this.gMaten.length ? (e = this.gMaten[this.gMaten.length - 1][e])[e.length - 1] : null;
 }, d.prototype.getLastMelis = function(e, t) {
  if (this.gLyrics.length) {
   var n = this.gLyrics[this.gLyrics.length - 1][e];
   if (t in n) return n[t][1];
  }
  return 0;
 }, d.prototype.addChord = function(e, t) {
  for (var n = 0; n < e.before.length; n++) {
   var r = e.before[n];
   0 > this.lastnote.before.indexOf(r) && this.lastnote.before.push(r);
  }
  this.lastnote.ns.push(e.ntdec + t);
 }, d.prototype.addBar = function(e, t) {
  for (var n in t.mdur && this.maxtime > t.mdur && i("measure %d in part %d longer than metre", [ t.ixm + 1, t.ixp + 1 ]), 
  this.tijd = this.maxtime, this.vnums) {
   if (t.lline || t.lnum) if (s = this.getLastRec(n)) {
    var r = s.str;
    t.lline && (r = (r + t.lline).replace(/:\|:/g, "::").replace(/\|\|/g, "|")), 3 == this.nvlt ? t.ixp + parseInt(n) == Math.min.apply(null, o(this.vnums)) && (r += t.lnum) : 4 == this.nvlt ? parseInt(n) == Math.min.apply(null, o(this.vnums)) && (r += t.lnum) : t.lnum && (r += t.lnum, 
    this.repbra = 1), s.str = r;
   } else t.lline && this.insertElem(n, "|:");
   e && (s = this.getLastRec(n)) && (s.str += e), t.attr && this.insertElem(n, "" + t.attr), 
   this.appendElem(n, " " + t.rline), this.voices[n] = b(this.voices[n], t);
   r = {};
   for (var s, a = (s = this.lyrics[n]).reduce(function(e, t) {
    return e.concat(o(t));
   }, []), c = Math.max.apply(null, a.concat([ 0 ])); 0 < c; --c) {
    a = s.map(function(e) {
     return e[c] || "";
    });
    var l = this.getLastMelis(n, c);
    r[c] = h(a, l);
   }
   this.lyrics[n] = r, _(this.voices[n]);
  }
  this.gMaten.push(this.voices), this.gLyrics.push(this.lyrics), this.tijd = this.maxtime = 0, 
  this.initVoices();
 }, d.prototype.outVoices = function(e, n) {
  var r, i, s, c, f, d, p, h, m;
  for (h in f = {}, p = Math.min.apply(null, o(this.vnums) || [ 1 ]), this.vnums) if (0 != this.cnt.getv("note", h)) {
   if (B.denL) d = B.denL; else {
    var y, v;
    d = h, m = this.gMaten, c = e, r = 0, i = T;
    for (var _ = [ 4, 8, 16 ]; _.length; ) {
     var b = _.shift(), x = 0;
     for (v = 0; v < m.length; ++v) {
      var w = m[v][d];
      for (y = 0; y < w.length; ++y) {
       var C = w[y];
       C instanceof u || 0 == C.dur || (x += g(C, c, b).length);
      }
     }
     x < i && (r = b, i = x);
    }
    d = r;
   }
   for (B.cmpL.push(d), y = [], v = {}, m = 0; m < this.gMaten.length; ++m) {
    if (c = this.gMaten[m][h], y.push(A(c, e, m, n, d)), c = void 0, _ = this.gLyrics, 
    0 != m) for (c in r = this.gMaten[m][h], i = _[m][h], _ = _[m - 1][h]) if (b = _[c][1], 
    !(c in i) && b) {
     for (b = r, x = [], w = 0; w < b.length; ++w) if ((C = b[w]) instanceof l && !C.grace) {
      if ("z" == C.ns[0] || "x" == C.ns[0]) break;
      x.push("_");
     }
     (b = x.join(" ")) && (i[c] = [ b, 0 ]);
    }
    for (s in r = this.gLyrics[m][h]) if (c = (c = r[s])[0], s in v) {
     for (;v[s].length < m; ) v[s].push("");
     v[s].push(c);
    } else v[s] = t(m, "").concat([ c ]);
   }
   for (s in v) c = v[s], d = y.length - c.length, v[s] = c.concat(t(d, ""));
   for (B.add("V:" + this.vceCnt), this.repbra && (1 == this.nvlt && 1 < this.vceCnt && B.add("I:repbra 0"), 
   2 == this.nvlt && parseInt(h) > p && B.add("I:repbra 0")), 0 < this.cpl ? this.bpl = 0 : 0 == this.bpl && (this.cpl = 100), 
   d = 0; y.length; ) {
    for (m = 1, c = y[0]; m < y.length && !(0 < this.cpl && c.length + y[m].length >= this.cpl) && !(0 < this.bpl && m >= this.bpl); ) c += y[m], 
    m += 1;
    for (d += m, B.add(c + " %" + d), y.splice(0, m), r = a(v, 1), i = 0; i < r.length; ++i) s = (c = r[i])[0], 
    c = c[1], B.add("w: " + c.slice(0, m).join("|") + "|"), c.splice(0, m);
   }
   f[h] = this.vceCnt, this.vceCnt += 1;
  }
  return this.gMaten = [], this.gLyrics = [], this.cnt.prcnt(n + 1), f;
 }, p.prototype.add = function(e) {
  this.outlist.push(e + "\n");
 }, p.prototype.info = function(e, t) {
  this.infolist.push((void 0 === t || t ? "-- " : "") + e);
 }, p.prototype.mkHeader = function(e, t, n, s, o) {
  var c, l, u, f, d, p, h, m = [], g = [];
  for (f = e.slice(), h = 0; h < t.length; ++h) {
   c = t[h];
   try {
    w(c, [ "", "" ], "", e, m, g);
   } catch (e) {
    i("lousy musicxml: error in part-list", []);
   }
  }
  for (t = g.join(" "), e = {}, h = 0; h < f.length; ++h) l = f[h], u = (c = m[h])[1], 
  c = c[2], 0 != l.length && (l = l[0][0], u = u.replace(/\n/g, "\\n").replace(/\.:/g, ".").replace(/^:|:$/g, ""), 
  c = c.replace(/\n/g, "\\n").replace(/\.:/g, ".").replace(/^:|:$/g, ""), e[l] = (u ? 'nm="' + u + '"' : "") + (c ? ' snm="' + c + '"' : ""));
  for (m = [ r("X:%d\n%s\n", [ this.X, this.title ]) ], "" !== this.scale && m.push("%%scale " + this.scale + "\n"), 
  "" !== this.pagewidth && m.push("%%pagewidth " + this.pagewidth + "cm\n"), "" !== this.leftmargin && m.push("%%leftmargin " + this.leftmargin + "cm\n"), 
  "" !== this.rightmargin && m.push("%%rightmargin " + this.rightmargin + "cm\n"), 
  t && 1 < g.length && m.push("%%score " + t + "\n"), f = this.tempo ? r("Q:%d/%d=%s\n", [ this.tempo_units[0], this.tempo_units[1], this.tempo ]) : "", 
  g = [], h = 0; h < this.cmpL.length; ++h) g[c = this.cmpL[h]] = (g[c] || 0) + 1;
  for (g = (g = a(g))[g.length - 1][0], g = this.denL ? this.denL : g, m.push(r("L:1/%d\n%sM:%s\n", [ g, f, this.mtr ])), 
  m.push(r("I:linebreak $\nK:%s\n", [ this.key ])), this.stemless && m.push("U:s=!stemless!\n"), 
  f = Object.keys(s).sort(), h = 0; h < f.length; ++h) m = m.concat(s[f[h]]);
  for (p in this.dojef = 0, this.clefs) {
   h = (c = n[p - 1])[0], t = c[1], u = c[2], l = c[3], f = c.slice(4), c = this.clefs[p], 
   f.length && 0 > c.indexOf("perc") && (c = (c + " map=perc").trim()), m.push(r("V:%d %s %s\n", [ p, c, e[p] || "" ])), 
   p in s && (m.push(r("%%voicemap tab%d\n", [ p ])), m.push("K:none\nM:none\n%%clef none\n%%staffscale 1.6\n%%flatbeams true\n%%stemdir down\n")), 
   -1 < c.indexOf("perc") && m.push("K:none\n"), 1 < this.volpan ? (0 < h && h != p && m.push("%%MIDI channel " + h + "\n"), 
   0 < t && m.push("%%MIDI program " + (t - 1) + "\n"), 0 <= u && m.push("%%MIDI control 7 " + u + "\n"), 
   0 <= l && m.push("%%MIDI control 10 " + l + "\n")) : 0 < this.volpan && (f.length && 0 < h && m.push("%%MIDI channel " + h + "\n"), 
   0 < t && m.push("%%MIDI program " + (t - 1) + "\n"));
   for (h = 0; h < f.length; ++h) c = f[h].nt, u = f[h].step, t = f[h].midi, (l = f[h].nhd) || (l = "normal"), 
   (y(c) != t || c != u) && (0 < this.volpan && m.push("%%MIDI drummap " + c + " " + t + "\n"), 
   m.push("I:percmap " + c + " " + u + " " + t + " " + l + "\n"), this.dojef = this.tstep);
   g != this.cmpL[p - 1] && m.push("L:1/" + this.cmpL[p - 1] + "\n");
  }
  if (this.outlist = m.concat(this.outlist), (n = Object.keys(o).sort()).length) {
   d = [];
   var v = this.shiftStem ? '<g id="kop%s" class="bf"><use xlink:href="#clr"></use><text x="-2" y="3">%s</text></g>\n'.replace("-2", "-5") : '<g id="kop%s" class="bf"><use xlink:href="#clr"></use><text x="-2" y="3">%s</text></g>\n', _ = this.shiftStem ? '<g id="kop%s" class="bf"><use xlink:href="#clr2"></use><text x="-2" y="3">%s</text></g>\n'.replace("-2", "-5") : '<g id="kop%s" class="bf"><use xlink:href="#clr2"></use><text x="-2" y="3">%s</text></g>\n';
   s = this.shiftStem ? N.map(function(e) {
    return e.replace("-3", "-6");
   }) : N, n.forEach(function(e) {
    d.push(1 < e.length ? r(_, [ e, e ]) : r(v, [ e, e ]));
   }), this.outlist = s.concat(d, "</defs>\n%%endsvg\n", this.outlist);
  }
 }, p.prototype.writeall = function() {
  var e = B.outlist.join("");
  return this.dojef && (e = function(e) {
   var t, n, r, i = {
    diamond: 1,
    triangle: 1,
    square: 1,
    normal: 1
   }, s = M, o = "default", a = {
    default: []
   };
   for (e = e.split("\n"), t = 0; t < e.length; ++t) 0 <= (n = e[t]).indexOf("I:percmap") && ((r = (n = n.split(" ").map(function(e) {
    return e.trim();
   }))[4]) in i && (r = r + "+," + r), n = "%%map perc" + o + " " + n[1] + " print=" + n[2] + " midi=" + n[3] + " heads=" + r, 
   a[o].push(n)), 0 <= n.indexOf("V:") && (r = n.match(/V:\s*(\S+)/)) && ((o = r[1]) in a || (a[o] = []));
   for (i = Object.keys(a).sort(), t = 0; t < i.length; ++t) s = s.concat(a[i[t]]);
   for (t = 0; t < e.length; ++t) 0 <= (n = e[t]).indexOf("I:percmap") || (0 <= n.indexOf("V:") || 0 <= n.indexOf("K:") ? ((r = n.match(/V:\s*(\S+)/)) && (o = r[1]), 
   0 == a[o].length && (o = "default"), s.push(n), 0 <= n.indexOf("perc") && -1 == n.indexOf("map=") && (n += " map=perc"), 
   0 <= n.indexOf("map=perc") && 0 < a[o].length && s.push("%%voicemap perc" + o), 
   0 <= n.indexOf("map=off") && s.push("%%voicemap")) : s.push(n));
   return s.join("\n");
  }(e)), [ e, this.infolist.join("\n") ];
 }, E.prototype.matchSlur = function(e, t, n, r, s, o) {
  if (-1 != [ "start", "stop" ].indexOf(e)) if (t || (t = "1"), t in this.slurBuf) {
   var a = (u = this.slurBuf[t])[0], c = u[1], l = u[2], u = u[3];
   e != a ? (n != c || "start" != a || u && o || (l.before.unshift("("), r.after += ")"), 
   delete this.slurBuf[t]) : (i("double slur numbers %s-%s in part %d, measure %d, voice %d note %s, first discarded", [ e, t, this.msr.ixp + 1, this.msr.ixm + 1, n, r.ns ]), 
   this.slurBuf[t] = [ e, n, r, s ]);
  } else this.slurBuf[t] = [ e, n, r, s ];
 }, E.prototype.doNotations = function(t, n, i) {
  for (var s = Object.keys(I).sort(), o = 0; o < s.length; ++o) {
   var a = s[o], c = I[a];
   n.find(a).length && t.before.push(c);
  }
  if ((o = n.find("ornaments>tremolo")).length && (s = "start" == (a = o.attr("type")) ? "-" : "", 
  "single" != a && (t.fact = null), "stop" != a && (o = e(parseInt(o.text()), "/"), 
  t.before.unshift("!" + o + s + "!"))), s = n.find("technical>fingering"), i || s.each(function() {
   t.before.push("!" + $(this).text() + "!");
  }), (s = n.find("technical>string")).length && i && (this.tstep ? (i = n.find("technical>fret")).length && (t.tab = [ s.eq(0).text(), i.eq(0).text() ]) : s.each(function() {
   var e = "!" + $(this).text() + "!";
   0 > t.ntdec.indexOf(e) && (t.ntdec += e);
  })), (i = n.find("ornaments>wavy-line")).length) switch (i.attr("type")) {
  case "start":
   t.before.unshift("!trill(!");
   break;

  case "stop":
   t.before.unshift("!trill)!");
  }
  0 == (i = n.find("glissando")).length && (i = n.find("slide")), i.length && (n = "wavy" == i.attr("line-type") ? "~" : "-", 
  "start" == i.attr("type") ? t.before.unshift(r("!%s(!", [ n ])) : "stop" == i.attr("type") && t.before.unshift(r("!%s)!", [ n ])));
 }, E.prototype.tabnote = function(e, t, n, r, s) {
  var o, a, c, l, u;
  for (11 < (l = this.step_map[t] + parseInt(e || "0")) && (n += 1, l -= 12), 0 > l && (--n, 
  l += 12), e = s.tab[0], t = s.tab[1], u = 0; 4 > u && (o = this.note_alts[u % 3][l], 
  c = n, -1 < [ "^B", "^^B" ].indexOf(o) && --c, -1 < [ "_C", "__C" ].indexOf(o) && (c += 1), 
  (-1 < o.indexOf("/") || 3 == u) && (c = 9), o = k(o, c), c = (a = this.tabmap[[ r, o ]] || [ "", "" ])[0], 
  a = a[1], c); ++u) {
   if (e == c) return o;
   3 == u && (i("rejected: voice %d note %s string %s fret %s remains: string %s fret %s", [ r, o, e, t, c, a ]), 
   s.tab = [ c, a ]);
  }
  return this.tabmap[[ r, o ]] = s.tab, o;
 }, E.prototype.ntAbc = function(e, t, n, r, s, o) {
  t += this.clefOct[this.curStf[r]] || 0;
  var a = n.find("accidental").text(), c = n.find("pitch>alter").text();
  if (s.tab) return this.tabnote(c, e, t, r, s);
  if (o && this.tstep && i("no string notation found for note %s in voice %d", [ s = [ "__", "_", "", "^", "^^" ][parseInt(c || "0") + 2] + k(e, t), r ]), 
  t = k(e, t), !c && this.msralts[e] && (c = 0), s = t + "#" + r, !c && s in this.curalts && (c = 0), 
  "" === a && "" === c) return t;
  if ("" != a) c = {
   "double-flat": -2,
   "flat-flat": -2,
   flat: -1,
   natural: 0,
   sharp: 1,
   "sharp-sharp": 2,
   "double-sharp": 2
  }[a]; else {
   if (c = parseFloat(c), s in this.curalts) {
    if (c == this.curalts[s]) return t;
   } else if (c == (this.msralts[e] || 0)) return t;
   if (n.find("tie").add(n.find("notations>tied")).get().some(function(e) {
    return "stop" == e.getAttribute("type");
   })) return t;
   i("accidental %d added in part %d, measure %d, voice %d note %s", [ c, this.msr.ixp + 1, this.msr.ixm + 1, r + 1, t ]);
  }
  return this.curalts[s] = c, [ "__", "_", "=", "^", "^^" ][c + 2] + t;
 }, E.prototype.doNote = function(t) {
  var n = new l(0, null), i = parseInt(t.find("voice").text() || "1");
  this.isSib && (i += 100 * (t.find("staff").text() || 1));
  var s = 0 < t.find("chord").length, o = t.find("pitch>step").text() || t.find("unpitched>display-step").text(), a = t.find("pitch>octave").text() || t.find("unpitched>display-octave").text(), c = 0 < t.find("rest").length, u = t.find("time-modification>actual-notes").text();
  if (u) {
   var f = t.find("time-modification>normal-notes").text();
   n.fact = [ parseInt(u), parseInt(f) ];
  }
  if (n.tup = t.find("notations>tuplet").map(function() {
   return $(this).attr("type");
  }).get(), f = t.find("duration").text(), u = t.find("grace"), n.grace = 0 < u.length, 
  n.before = [ "" ], n.after = "", n.grace && !this.ingrace && (this.ingrace = 1, 
  n.before = [ "{" ], "yes" == u.attr("slash") && n.before.push("/")), (u = !n.grace && this.ingrace) && (this.ingrace = 0, 
  this.msc.lastnote.after += "}"), f && !n.grace || (f = 0), !c && "no" == t.attr("print-object")) {
   if (s) return;
   c = 1;
  }
  n.dur = parseInt(f), c || o && a || (this.msc.cnt.inc("nopt", i), a = 5, o = "E");
  f = 0 == (this.curClef && this.curClef[this.curStf[i]] || "").indexOf("tab");
  (d = t.find("notations")).length && this.doNotations(n, d, f), d = t.find("stem"), 
  !c && d.length && "none" == d.text() && (!f || i in this.hasStems || this.tstep) && (n.before.push("s"), 
  B.stemless = 1), (d = t.find("accidental")).length && "yes" == d.attr("parentheses") && (n.ntdec += "!courtesy!"), 
  c = c ? "no" == t.attr("print-object") || f ? "x" : "z" : this.ntAbc(o, parseInt(a), t, i, n, f), 
  t.find("unpitched").length && (f = this.curClef[this.curStf[i]], o = function(t, n, r, i) {
   var s;
   return s = 0, 0 <= r.indexOf("stafflines=1") && (s += 4), !i && 0 <= r.indexOf("bass") && (s += 12), 
   s && (t = (r = "CDEFGAB".split(""))[(s = r.indexOf(t) + s) % 7], n += Math.floor(s / 7)), 
   4 < n && (t = t.toLowerCase()), 5 < n && (t += e(n - 5, "'")), 4 > n && (t += e(4 - n, ",")), 
   t;
  }(o, parseInt(a), f, this.tstep), a = (a = t.find("instrument")).length ? a.attr("id") : "dummyId", 
  a = this.drumInst[a] || y(c), "x" == (d = (f = t.find("notehead")).text().replace(" ", "-")) && (c = "^" + c.replace(/\^/g, "").replace(/_/g, "")), 
  "circle-x" != d && "diamond" != d && "triangle" != d || (c = "_" + c.replace(/\^/g, "").replace(/_/g, "")), 
  "yes" == f.attr("filled") && (d += "+"), "no" == f.attr("filled") && (d += "-"), 
  this.drumNotes[i + ";" + c] = [ o, a, d ]), (o = t.find("tie").add(t.find("notations>tied")).get()).some(function(e) {
   return "start" == e.getAttribute("type");
  }) && (c += "-"), o = t.find("beam").map(function() {
   return $(this).text();
  }).get(), n.beam = -1 < o.indexOf("continue") || -1 < o.indexOf("end") || n.grace, 
  o = t.find("lyric");
  for (a = f = 0; a < o.length; ++a) {
   var d = $(o[a]), p = parseInt((d.attr("number") || "1").replace(/^.*verse/, ""));
   0 == p ? p = f + 1 : f = p, n.lyrs[p] = C(d);
  }
  for (o = t.find("stem").text(), !this.wstems || "up" != o && "down" != o || o == this.stemDir[i] || (this.stemDir[i] = o, 
  this.msc.appendElem(i, r("[I:stemdir %s]", [ o ]))), s ? this.msc.addChord(n, c) : (s = parseInt(t.find("staff").text() || "1"), 
  this.curStf[i] != s && (o = s - this.curStf[i], this.curStf[i] = s, this.msc.appendElem(i, "[I:staff " + (0 < o ? "+" : "") + o + "]")), 
  this.msc.appendNote(i, n, c)), o = t.find("notations>slur"), a = 0; a < o.length; ++a) t = $(o[a]), 
  this.matchSlur(t.attr("type"), t.attr("number"), i, this.msc.lastnote, n.grace, u);
 }, E.prototype.doAttr = function(e) {
  var i, s, o, a, c, l, u, f, d, p, h, m;
  i = {
   C1: "alto1",
   C2: "alto2",
   C3: "alto",
   C4: "tenor",
   F4: "bass",
   F3: "bass3",
   G2: "treble",
   TAB: "tab",
   percussion: "perc"
  }, (s = e.find("divisions").text()) && (this.msr.divs = parseInt(s)), s = parseInt(e.find("transpose>chromatic").text() || "0"), 
  o = e.find("key>fifths").first().text(), a = 0 == this.msc.tijd && 0 == this.msr.ixm, 
  o && (c = function(e, r) {
   var i, s;
   return s = {
    maj: 8,
    ion: 8,
    m: 11,
    min: 11,
    aeo: 11,
    mix: 9,
    dor: 10,
    phr: 12,
    lyd: 7,
    loc: 13,
    non: 8
   }, r = r.slice(0, 3).toLowerCase(), s = "Fb Cb Gb Db Ab Eb Bb F C G D A E B F# C# G# D# A# E# B#".split(" ")[s[r] + e] + (8 != s[r] ? r : ""), 
   i = "FCGDAEB".split(""), [ s, i = 0 <= e ? n(i.slice(0, e), t(e, 1)) : n(i.slice(e), t(-e, -1)) ];
  }(parseInt(o), e.find("key>mode").first().text() || "major"), o = c[0], this.msralts = c[1], 
  a && !s && "none" == B.key ? B.key = o : o == B.key && a || (this.msr.attr += "[K:" + o + "]")), 
  (o = e.find("time>beats").text()) && (l = o + "/" + (c = e.find("time>beat-type").text()), 
  a ? B.mtr = l : this.msr.attr += "[M:" + l + "]", this.msr.mdur = this.msr.divs * parseInt(o) * 4 / parseInt(c));
  var g = this;
  for (e.find("measure-style").each(function() {
   var e, t, n, i, s, o, a;
   e = parseInt($(this).attr("number") || "1"), t = g.stfMap[e], $(this).find("measure-repeat").each(function() {
    "start" == (n = $(this).attr("type")) ? (g.repeat_str[e] = [ g.msr.ixm, $(this).text() ], 
    t.forEach(function(t) {
     g.msc.insertElem(t, g.repeat_str[e]);
    })) : "stop" == n && (i = g.repeat_str[e][0], o = g.repeat_str[e][1], s = g.msr.ixm - i, 
    o ? (a = o + " ", s /= parseInt(o)) : a = "", g.repeat_str[e][0] = r("[I:repeat %s%d]", [ a, s ]), 
    delete g.repeat_str[e]);
   });
  }), (o = e.find("transpose>octave-change").text() || "") && (s += 12 * parseInt(o)), 
  l = e.find("clef"), c = 0; c < l.length; c++) {
   if (u = $(l[c]), o = parseInt(u.attr("number") || "1"), d = i[(f = u.find("sign").text()) + (d = "percussion" != f && "TAB" != f && u.find("line").text() || "")] || "", 
   d += {
    "-2": "-15",
    "-1": "-8",
    1: "+8",
    2: "+15"
   }[u = u.find("clef-octave-change").text() || "0"] || "", this.clefOct[o] = -parseInt(u), 
   s && (d += " transpose=" + s), (p = e.find("staff-details")).length && (p.attr("number") || 1) == o) {
    (u = p.find("staff-lines").text()) && (d += " stafflines=" + (f = "3" == u && "TAB" == f ? "|||" : u), 
    this.stafflines = parseInt(u));
    var y = [];
    p.find("staff-tuning").each(function() {
     y.push($(this).find("tuning-step").text() + $(this).find("tuning-octave").text());
    }), y.length && (d += r(" strings=%s", [ y.join(",") ])), (f = p.find("capo").text()) && (d += r(" capo=%s", [ f ]));
   }
   if (this.curClef[o] = d, a) this.clefMap[o] = d; else for (u = this.stfMap[o], m = 0; m < u.length; ++m) p = u[m], 
   o != this.curStf[p] && (h = o - this.curStf[p], this.curStf[p] = o, f = 0 < h ? "+" : "", 
   this.msc.appendElem(p, "[I:staff " + f + h + "]")), this.msc.appendElem(p, "[K:" + d + "]");
  }
 }, E.prototype.findVoice = function(e, t) {
  var n, r, i, s;
  if (i = t.eq(e), n = parseInt(i.find("staff").text() || "1"), r = (r = this.stfMap[n]).length ? r[0] : 1, 
  this.dirtov1) return {
   sn: n,
   v: r,
   v1: r
  };
  for (s = e + 1; s < t.length; ++s) {
   if ("note" == (i = t.eq(s)).prop("nodeName")) return n = parseInt(i.find("staff").text() || "1"), 
   i = parseInt(i.find("voice").text() || "1"), this.isSib && (i += 100 * n), {
    sn: n = this.vce2stf[i],
    v: i,
    v1: r
   };
   if ("backup" == i.prop("nodeName")) break;
  }
  return {
   sn: n,
   v: r,
   v1: r
  };
 }, E.prototype.doDirection = function(e, t, n) {
  function s(e, t, n, r, i) {
   t && (n = 0 <= t.indexOf("!8v") ? e.stfMap[i] : [ n ]).forEach(function(n) {
    null != r ? e.msc.appendElemT(n, t.replace("(", ")").replace("ped", "ped-up"), r) : e.msc.appendElem(n, t);
   });
  }
  function o(e, t, n, r) {
   var o, a, l;
   if (l = {
    down: "!8va(!",
    up: "!8vb(!",
    crescendo: "!<(!",
    diminuendo: "!>(!",
    start: "!ped!"
   }, u = c.attr("type") || "", o = t + (c.attr("number") || "1"), u in l) l = l[u], 
   o in e.dirStk ? (a = e.dirStk[o], delete e.dirStk[o], "stop" == a.type ? s(e, l, n, a.tijd, r) : (i("%s direction %s has no stop in part %d, measure %d, voice %d", [ t, a.type, e.msr.ixp + 1, e.msr.ixm + 1, n + 1 ]), 
   e.dirStk[o] = {
    type: u,
    vs: n
   })) : e.dirStk[o] = {
    type: u,
    vs: n
   }; else {
    if ("stop" != u) throw "wrong direction type";
    o in e.dirStk ? (a = e.dirStk[o], delete e.dirStk[o], u = a.type, n = a.vs, "stop" == u ? (i("%s direction %s has double stop in part %d, measure %d, voice %d", [ t, u, e.msr.ixp + 1, e.msr.ixm + 1, n + 1 ]), 
    l = "") : l = l[a.type].replace("(", ")").replace("ped", "ped-up")) : (e.dirStk[o] = {
     type: "stop",
     tijd: e.msc.tijd
    }, l = "");
   }
   s(e, l, n, null, r);
  }
  var a, c, l, u, f, d, p, h, g, y, v, _, A = "";
  a = e.attr("placement"), n = (f = this.findVoice(t, n)).sn, t = f.v, f = f.v1;
  var b = "", x = {
   dacapo: "D.C.",
   dalsegno: "D.S.",
   tocoda: "dacoda",
   fine: "fine",
   coda: "O",
   segno: "S"
  };
  if ((c = e.find("sound")).length) {
   if ((g = c.find("midi-instrument")).length) {
    for (v in l = c.find("midi-instrument>midi-program").text(), y = c.find("midi-instrument>midi-channel").text(), 
    this.vceInst) this.vceInst[v] == g.attr("id") && (t = v);
    (v = (l ? l - 1 : y) + "") && 0 < B.volpan && this.msc.appendElem(t, "[I:MIDI= " + (l ? "program" : "channel") + " " + v + "]");
   }
   for (h in (l = c.attr("tempo")) && (l = parseFloat(l).toFixed(0), _ = [ 1, 4 ]), 
   x) if (c.attr(h)) {
    b = x[h];
    break;
   }
  }
  for (v = e.children("direction-type"), x = 0; x < v.length; ++x) {
   h = {
    whole: [ 1, 1 ],
    half: [ 1, 2 ],
    quarter: [ 1, 4 ],
    eighth: [ 1, 8 ]
   }, (g = (e = $(v[x])).find("metronome")).length && (_ = (c = g.find("beat-unit").text() || "") in h ? h[c] : h.quarter, 
   g.find("beat-unit-dot").length && (_ = m(3 * _[0], 2 * _[1])), (h = g.find("per-minute").text().match(/[.\d]+/)) && (l = h[0])), 
   (c = e.find("wedge")).length && o(this, "wedge", t), 0 == (h = e.find("words")).length && (h = e.find("rehearsal"));
   for (g = 0; g < h.length; ++g) {
    if (b) {
     this.msc.appendElem(t, r("!%s!", [ b ]), 1);
     break;
    }
    d = "below" == a ? "_" : "^", y = $(h[g]), 0 > parseFloat(y.attr("default-y") || "0") && (d = "_"), 
    A += y.text().replace(/"/g, '\\"').replace(/\n/g, "\\n");
   }
   for (p in A = A.trim(), S) h = S[p], e.find("dynamics>" + p).length && this.msc.appendElem(t, h, 1);
   e.find("coda").length && this.msc.appendElem(t, "O", 1), e.find("segno").length && this.msc.appendElem(t, "S", 1), 
   (c = e.find("octave-shift")).length && o(this, "octave-shift", t, n), (c = e.find("pedal")).length && this.ped && (this.pedVce || (this.pedVce = t), 
   o(this, "pedal", this.pedVce)), "diatonic fretting" == e.find("other-direction").text() && (this.diafret = 1);
  }
  l && (l = parseFloat(l).toFixed(0), 0 == this.msc.tijd && 0 == this.msr.ixm ? (B.tempo = l, 
  B.tempo_units = _) : this.msc.appendElem(f, r("[Q:%d/%d=%s]", [ _[0], _[1], l ]))), 
  A && this.msc.appendElem(t, '"' + d + A + '"', 1);
 }, E.prototype.doHarmony = function(e, t, n) {
  var r, i, s, o, a, c, l;
  n = this.findVoice(t, n).v, r = {
   major: "",
   minor: "m",
   augmented: "+",
   diminished: "dim",
   dominant: "7",
   "half-diminished": "m7b5"
  }, t = {
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
  }, o = e.find("root>root-step", "").text(), a = s[e.find("root>root-alter").text()] || "", 
  c = "", (l = e.find("kind").text()) in r ? l = r[l] : -1 < l.indexOf("-") ? (l = (r = l.split("-"))[0], 
  r = r[1], 0 == (l = (t[l] || "") + (i[r] || "")).indexOf("sus") && (c = l, l = "")) : "none" == l && (l = e.find("kind").attr("text")), 
  i = e.find("degree");
  for (t = 0; t < i.length; ++t) l += (s[(r = $(i[t])).find("degree-alter").text()] || "") + r.find("degree-value").text();
  l = l.replace("79", "9").replace("713", "13").replace("maj6", "6"), e = e.find("bass>bass-step").text() + (s[e.find("bass>bass-alter").text()] || ""), 
  this.msc.appendElem(n, '"' + o + a + l + c + (e && "/" + e) + '"', 1);
 }, E.prototype.doBarline = function(e) {
  var t = e.find("repeat"), n = 0;
  return t.length && (n = t.attr("direction")), this.unfold ? n ? "forward" == n ? 1 : 2 : 0 : ("right" == (e.attr("location") || "right") && ("light-light" == (t = e.find("bar-style").text()) ? this.msr.rline = "||" : "light-heavy" == t && (this.msr.rline = "|]")), 
  n && ("forward" == n ? this.msr.lline = ":" : this.msr.rline = ":|"), (e = e.find("ending")).length && ("start" == e.attr("type") ? (e = (e.attr("number") || "1").replace(/\./g, "").replace(/ /g, ""), 
  /^[\d,]+$/.test(e) || (e = '"' + e.trim() + '"'), this.msr.lnum = e) : "|" == this.msr.rline && (this.msr.rline = "||")), 
  0);
 }, E.prototype.doPrint = function(e) {
  if ("yes" == e.attr("new-system") || "yes" == e.attr("new-page")) return this.nolbrk ? "" : "$";
 }, E.prototype.doPartList = function(e) {
  var t, n, i, s, o, a, c, l, u, f;
  for (s = e.find("part-list>score-part"), t = 0; t < s.length; ++t) {
   for (n = s[t], o = {}, a = $(n).find("midi-instrument"), n = 0; n < a.length; ++n) {
    for (c = $(a[n]), u = [ "midi-channel", "midi-program", "volume", "pan" ], l = [], 
    i = 0; i < u.length; ++i) f = u[i], l.push(c.find(f).text() || this.midDflt[i]);
    -90 <= (i = 1 * l[3]) && 90 >= i && (i = (i + 90) / 180 * 127), o[c.attr("id")] = [ parseInt(l[0]), parseInt(l[1]), 1.27 * parseFloat(l[2]), i ], 
    (l = c.find("midi-unpitched").text()) && (this.drumInst[c.attr("id")] = l - 1);
   }
   this.instMid.push(o);
  }
  return function e(t, n, r) {
   var i, s, o, a;
   if (0 == t.length) return [ [], [] ];
   if ("part-group" == (i = t.shift())[0].nodeName) {
    if (s = i.attr("number"), "start" == (o = i.attr("type"))) {
     for (a in o = [], {
      "group-symbol": 0,
      "group-barline": 0,
      "group-name": 0,
      "group-abbreviation": 0
     }) o.push(i.find(a).text() || "");
     return n[s] = o, r.push(s), t = (a = e(t, n, r))[0], n = (a = e(i = a[1], n, r))[0], 
     r = a[1], [ [ t ].concat(n), r ];
    }
    return r = r.pop(), t.length && "stop" == t[0].attr("type") && s != r && (a = n[r], 
    n[r] = n[s], n[s] = a), [ [ n = n[s] ], t ];
   }
   return n = (a = e(t, n, r))[0], t = a[1], [ [ [ "name_tuple", i.find("part-name").text() || "", i.find("part-abbreviation").text() || "" ] ].concat(n), t ];
  }(l = function(e) {
   function t(e) {
    return e = r('<part-group number="%d" type="%s"></part-group>', [ e, "stop" ]), 
    e = new window.DOMParser().parseFromString(e, "text/xml").firstChild, $(e);
   }
   var n, i, s, o, a, c, l;
   for (n = [], i = [], c = e.children(), a = 0; a < c.length; a++) "part-group" == (e = $(c[a]))[0].nodeName ? (s = e.attr("number"), 
   o = e.attr("type"), l = i.indexOf(s), "start" == o ? -1 < l ? (n.push(t(s)), n.push(e)) : (n.push(e), 
   i.push(s)) : -1 < l && (i.splice(l, 1), n.push(e))) : n.push(e);
   for (a = i.length - 1; 0 <= a; --a) s = i[a], n.push(t(s));
   return n;
  }(e = e.find("part-list")), {}, [])[0];
 }, E.prototype.mkTitle = function(e) {
  var t, n, r, s, o, a, c, l = [], u = [], f = [];
  for (t = e.find("work>work-title").text().trim(), n = e.find("movement-title").text().trim(), 
  r = e.find("identification>creator"), s = 0; s < r.length; ++s) a = (o = $(r[s])).text(), 
  o = o.attr("type"), a && (a = a.split("\n").map(function(e) {
   return e.trim();
  }), "composer" == o ? l.push.apply(l, a) : "lyricist" != o && "transcriber" != o || u.push.apply(u, a));
  for (r = e.find("identification>rights"), s = 0; s < r.length; ++s) (a = $(r[s]).text()) && (a = a.split("\n").map(function(e) {
   return e.trim();
  }), u.push.apply(u, a));
  for (r = e.find("credit"), s = 0; s < r.length; ++s) {
   for (a = "", o = $(r[s]).find("credit-words"), c = 0; c < o.length; ++c) a += $(o[c]).text();
   f.push(a.replace(/\s*[\r\n]\s*/g, " "));
  }
  f = function(e) {
   function r(e) {
    return e && -1 < i.indexOf(e);
   }
   var i, s, o = [];
   for (s = 0; s < f.length; ++s) i = f[s], 6 > e && (i && -1 < t.indexOf(i) || i && -1 < n.indexOf(i)) || 5 > e && (i && -1 < l.indexOf(i) || i && -1 < u.indexOf(i)) || 4 > e && (t && -1 < i.indexOf(t) || n && -1 < i.indexOf(n)) || 3 > e && (l.some(r) || u.some(r)) || 2 > e && /^[\d\W]*$/.test(i) || o.push(i);
   return 0 == e && t + n && (o = ""), o;
  }(this.ctf), t && (t = "T:" + t.replace(/\n/g, "\nT:") + "\n"), n && (t += "T:" + n.replace(/\n/g, "\nT:") + "\n"), 
  f.length && (t += f.map(function(e) {
   return "T:" + e;
  }).join("\n") + "\n"), l.length && (t += l.map(function(e) {
   return "C:" + e;
  }).join("\n") + "\n"), u.length && (t += u.map(function(e) {
   return "Z:" + e;
  }).join("\n") + "\n"), t && (B.title = t.substr(0, t.length - 1)), (this.isSib = 0 <= e.find("identification>encoding>software").text().indexOf("Sibelius")) && i("Sibelius MusicXMl is unreliable", []);
 }, E.prototype.doDefaults = function(e) {
  var t, n, r, i;
  this.doPageFmt && ((t = e.find("defaults")).length && (n = (e = t.find("scaling>millimeters").text()) / (n = t.find("scaling>tenths").text()) / 10, 
  e = t.find("page-layout>page-width").text() * n, t = (r = t.find("page-layout>page-margins").first()).find("left-margin").text(), 
  r = r.find("right-margin").text(), i = 10 * n / .2117, !B.scale && i && (B.scale = i.toFixed(2)), 
  !B.pagewidth && e && (B.pagewidth = e.toFixed(2)), B.leftmargin || "" == t || (B.leftmargin = (t * n).toFixed(2)), 
  B.rightmargin || "" == r || (B.rightmargin = (r * n).toFixed(2))));
 }, E.prototype.locStaffMap = function(e, t) {
  var n = {};
  this.vceInst = {}, this.msc.vnums = {}, this.hasStems = {}, this.stfMap = {}, this.clefMap = {};
  for (var r = e.find("measure>note"), i = 0; i < r.length; i++) {
   var s = $(r[i]), o = parseInt(s.find("voice").text() || "1");
   this.isSib && (o += 100 * (s.find("staff").text() || 1)), this.msc.vnums[o] = 1;
   var a = parseInt(s.find("staff").text() || "1");
   if (this.stfMap[a] = [], o in n) {
    var c = n[o];
    c[a] = (c[a] || 0) + 1;
   } else (c = {})[a] = 1, n[o] = c;
   (c = s.find("instrument")).length && (this.vceInst[o] = $(c).attr("id")), c = s.find("stem"), 
   0 != s.find("rest").length || 0 != c.length && "none" == c.text() || (this.hasStems[o] = 1);
  }
  for (o in n) {
   for (a in r = [], i = n[o]) r.push([ i[a], a ]);
   r.sort(function(e, t) {
    return t[0] - e[0];
   }), r = r[0][1], this.stfMap[r].push(o), this.vce2stf[o] = r, this.curStf[o] = r;
  }
 }, E.prototype.addStaffMap = function(e) {
  var t, n, r, i, s, o, a, c = [], l = Object.keys(this.stfMap).sort();
  for (n = 0; n < l.length; ++n) {
   for (s = l[n], i = this.stfMap[s], o = [], a = [], t = 0; t < i.length; ++t) (r = i[t]) in e && (o.push(e[r]), 
   a.push(void 0 == this.hasStems[r]));
   if (o.length) for ((c.push(o), i = s in this.clefMap ? this.clefMap[s] : "treble", 
   t = 0); t < o.length; ++t) r = o[t], s = "", 0 == i.indexOf("tab") && (a[t] && 0 > i.indexOf("nostems") && (s = " nostems"), 
   this.diafret && 0 > i.indexOf("diafret") && (s += " diafret")), B.clefs[r] = i + s;
  }
  this.gStfMap.push(c);
 }, E.prototype.addMidiMap = function(e, t) {
  var n, i = this.instMid[e];
  n = (p = Object.keys(i)).length ? i[p[0]] : this.midDflt;
  var s, o, a, c = [], l = this;
  for (s in t) a = (p = Object.keys(this.drumNotes).sort().filter(function(e) {
   return e.split(";")[0] == s;
  })).map(function(e) {
   return {
    nt: e.split(";")[1],
    step: l.drumNotes[e][0],
    midi: l.drumNotes[e][1],
    nhd: l.drumNotes[e][2]
   };
  }), o = t[s], (p = this.vceInst[s] || "") in i ? c.push([ o, i[p].concat(a) ]) : c.push([ o, n.concat(a) ]);
  c.sort(function(e, t) {
   return e[0] - t[0];
  }), c.forEach(function(e) {
   l.midiMap.push(e[1]);
  }), n = "E G B d f a c' e'".split(" ");
  var u, f, d = "0 1- 1 1+ 2 3 3 4 4 5 6 6+ 7 8- 8 8+ 9 10 10 11 11 12 13 13+ 14".split(" "), p = Object.keys(this.tabmap).sort();
  for (i = 0; i < p.length; ++i) c = (o = p[i]).match(/(\d+),(.*)/), s = c[1], f = c[2], 
  a = this.tabmap[o][0], u = this.tabmap[o][1], this.diafret && (u = d[parseInt(u)]), 
  o = t[s], a = this.stafflines - parseInt(a), (c = this.tabVceMap[o] || []).push(r("%%map tab%d %s print=%s heads=kop%s\n", [ o, f, n[a], u ])), 
  this.tabVceMap[o] = c, this.koppen[u] = 1;
 }, E.prototype.parse = function(e) {
  var t = {}, n = $(e);
  this.mkTitle(n), this.doDefaults(n), e = this.doPartList(n);
  for (var s = n.find("part"), o = 0; o < s.length; ++o) {
   var a = s.eq(o), l = a.find("measure");
   this.locStaffMap(a, l), this.drumNotes = {}, this.clefOct = {}, this.curClef = {}, 
   this.stemDir = {}, this.tabmap = {}, this.diafret = 0, this.stafflines = 5, this.msc.initVoices(1);
   var u = a = 0;
   for (this.msr = new c(o); this.msr.ixm < l.length; ) {
    var f = l.eq(this.msr.ixm), d = 0, p = "";
    this.msr.reset(), this.curalts = {};
    for (var h = f.children(), m = 0; m < h.length; m++) switch (n = h.eq(m), n[0].nodeName) {
    case "note":
     this.doNote(n);
     break;

    case "attributes":
     this.doAttr(n);
     break;

    case "direction":
     this.doDirection(n, m, h);
     break;

    case "sound":
     this.doDirection(f, m, h);
     break;

    case "harmony":
     this.doHarmony(n, m, h);
     break;

    case "barline":
     d = this.doBarline(n);
     break;

    case "backup":
     n = parseInt(n.find("duration").text()), this.msc.incTime(-n);
     break;

    case "forward":
     n = parseInt(n.find("duration").text()), this.msc.incTime(n);
     break;

    case "print":
     p = this.doPrint(n);
    }
    this.msc.addBar(p, this.msr), 1 == d ? (u = this.msr.ixm, this.msr.ixm += 1) : 2 == d ? 1 > a ? (this.msr.ixm = u, 
    a += 1) : (a = 0, this.msr.ixm += 1) : this.msr.ixm += 1;
   }
   for (var g in this.repeat_str) (l = this.repeat_str[g])[0] = r("[I:repeat %s %d]", [ l[1], 1 ]);
   for (g in l = this.msc.outVoices(this.msr.divs, o), this.addStaffMap(l), this.addMidiMap(o, l), 
   l) t[g] = l[g];
  }
  Object.keys(t).length ? B.mkHeader(this.gStfMap, e, this.midiMap, this.tabVceMap, this.koppen) : i("nothing written, %s has no notes ...", [ B.fnmext ]);
 }, vertaal = function(e, t) {
  var n, r = {
   u: 0,
   b: 0,
   n: 0,
   c: 0,
   v: 0,
   d: 0,
   m: 0,
   x: 0,
   t: 0,
   v1: 0,
   noped: 0,
   stm: 0,
   p: "f",
   s: 0
  };
  for (n in t) r[n] = t[n];
  r.p = r.p ? r.p.split(",") : [], B = new p(".abc", "", 0, r), r = new E(r);
  try {
   r.parse(e);
  } catch (e) {
   i("** exception occurred: %s", [ e ]);
  }
  return B.writeall();
 };
}(), function(e) {
 "use strict";
 function t(e, t) {
  var n = (65535 & e) + (65535 & t);
  return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
 }
 function n(e, n, r, i, s, o) {
  return t(function(e, t) {
   return e << t | e >>> 32 - t;
  }(t(t(n, e), t(i, o)), s), r);
 }
 function r(e, t, r, i, s, o, a) {
  return n(t & r | ~t & i, e, t, s, o, a);
 }
 function i(e, t, r, i, s, o, a) {
  return n(t & i | r & ~i, e, t, s, o, a);
 }
 function s(e, t, r, i, s, o, a) {
  return n(t ^ r ^ i, e, t, s, o, a);
 }
 function o(e, t, r, i, s, o, a) {
  return n(r ^ (t | ~i), e, t, s, o, a);
 }
 function a(e, n) {
  e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
  var a, c, l, u, f, d = 1732584193, p = -271733879, h = -1732584194, m = 271733878;
  for (a = 0; a < e.length; a += 16) c = d, l = p, u = h, f = m, p = o(p = o(p = o(p = o(p = s(p = s(p = s(p = s(p = i(p = i(p = i(p = i(p = r(p = r(p = r(p = r(p, h = r(h, m = r(m, d = r(d, p, h, m, e[a], 7, -680876936), p, h, e[a + 1], 12, -389564586), d, p, e[a + 2], 17, 606105819), m, d, e[a + 3], 22, -1044525330), h = r(h, m = r(m, d = r(d, p, h, m, e[a + 4], 7, -176418897), p, h, e[a + 5], 12, 1200080426), d, p, e[a + 6], 17, -1473231341), m, d, e[a + 7], 22, -45705983), h = r(h, m = r(m, d = r(d, p, h, m, e[a + 8], 7, 1770035416), p, h, e[a + 9], 12, -1958414417), d, p, e[a + 10], 17, -42063), m, d, e[a + 11], 22, -1990404162), h = r(h, m = r(m, d = r(d, p, h, m, e[a + 12], 7, 1804603682), p, h, e[a + 13], 12, -40341101), d, p, e[a + 14], 17, -1502002290), m, d, e[a + 15], 22, 1236535329), h = i(h, m = i(m, d = i(d, p, h, m, e[a + 1], 5, -165796510), p, h, e[a + 6], 9, -1069501632), d, p, e[a + 11], 14, 643717713), m, d, e[a], 20, -373897302), h = i(h, m = i(m, d = i(d, p, h, m, e[a + 5], 5, -701558691), p, h, e[a + 10], 9, 38016083), d, p, e[a + 15], 14, -660478335), m, d, e[a + 4], 20, -405537848), h = i(h, m = i(m, d = i(d, p, h, m, e[a + 9], 5, 568446438), p, h, e[a + 14], 9, -1019803690), d, p, e[a + 3], 14, -187363961), m, d, e[a + 8], 20, 1163531501), h = i(h, m = i(m, d = i(d, p, h, m, e[a + 13], 5, -1444681467), p, h, e[a + 2], 9, -51403784), d, p, e[a + 7], 14, 1735328473), m, d, e[a + 12], 20, -1926607734), h = s(h, m = s(m, d = s(d, p, h, m, e[a + 5], 4, -378558), p, h, e[a + 8], 11, -2022574463), d, p, e[a + 11], 16, 1839030562), m, d, e[a + 14], 23, -35309556), h = s(h, m = s(m, d = s(d, p, h, m, e[a + 1], 4, -1530992060), p, h, e[a + 4], 11, 1272893353), d, p, e[a + 7], 16, -155497632), m, d, e[a + 10], 23, -1094730640), h = s(h, m = s(m, d = s(d, p, h, m, e[a + 13], 4, 681279174), p, h, e[a], 11, -358537222), d, p, e[a + 3], 16, -722521979), m, d, e[a + 6], 23, 76029189), h = s(h, m = s(m, d = s(d, p, h, m, e[a + 9], 4, -640364487), p, h, e[a + 12], 11, -421815835), d, p, e[a + 15], 16, 530742520), m, d, e[a + 2], 23, -995338651), h = o(h, m = o(m, d = o(d, p, h, m, e[a], 6, -198630844), p, h, e[a + 7], 10, 1126891415), d, p, e[a + 14], 15, -1416354905), m, d, e[a + 5], 21, -57434055), h = o(h, m = o(m, d = o(d, p, h, m, e[a + 12], 6, 1700485571), p, h, e[a + 3], 10, -1894986606), d, p, e[a + 10], 15, -1051523), m, d, e[a + 1], 21, -2054922799), h = o(h, m = o(m, d = o(d, p, h, m, e[a + 8], 6, 1873313359), p, h, e[a + 15], 10, -30611744), d, p, e[a + 6], 15, -1560198380), m, d, e[a + 13], 21, 1309151649), h = o(h, m = o(m, d = o(d, p, h, m, e[a + 4], 6, -145523070), p, h, e[a + 11], 10, -1120210379), d, p, e[a + 2], 15, 718787259), m, d, e[a + 9], 21, -343485551), 
  d = t(d, c), p = t(p, l), h = t(h, u), m = t(m, f);
  return [ d, p, h, m ];
 }
 function c(e) {
  var t, n = "";
  for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
  return n;
 }
 function l(e) {
  var t, n = [];
  for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
  for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
  return n;
 }
 function u(e) {
  var t, n, r = "0123456789abcdef", i = "";
  for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
  return i;
 }
 function f(e) {
  return unescape(encodeURIComponent(e));
 }
 function d(e) {
  return function(e) {
   return c(a(l(e), 8 * e.length));
  }(f(e));
 }
 function p(e, t) {
  return function(e, t) {
   var n, r, i = l(e), s = [], o = [];
   for (s[15] = o[15] = void 0, i.length > 16 && (i = a(i, 8 * e.length)), n = 0; 16 > n; n += 1) s[n] = 909522486 ^ i[n], 
   o[n] = 1549556828 ^ i[n];
   return r = a(s.concat(l(t)), 512 + 8 * t.length), c(a(o.concat(r), 640));
  }(f(e), f(t));
 }
 function h(e, t, n) {
  return t ? n ? p(t, e) : function(e, t) {
   return u(p(e, t));
  }(t, e) : n ? d(e) : function(e) {
   return u(d(e));
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
  return t >= 0 && 7 >= t && o[e] ? o[e][t] : Array(t + 1).join(e);
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
  var o, a, c, l, u, f, d, p = 1, h = e.length, m = "", g = [], y = !0, v = "";
  for (a = 0; h > a; a++) if ("string" === (m = n(e[a]))) g[g.length] = e[a]; else if ("array" === m) {
   if ((l = e[a])[2]) for (o = s[p], c = 0; c < l[2].length; c++) {
    if (!o.hasOwnProperty(l[2][c])) throw new Error(t('[sprintf] property "%s" does not exist', l[2][c]));
    o = o[l[2][c]];
   } else o = l[1] ? s[l[1]] : s[p++];
   if (i.not_type.test(l[8]) && i.not_primitive.test(l[8]) && "function" == n(o) && (o = o()), 
   i.numeric_arg.test(l[8]) && "number" != n(o) && isNaN(o)) throw new TypeError(t("[sprintf] expecting number but found %s", n(o)));
   switch (i.number.test(l[8]) && (y = o >= 0), l[8]) {
   case "b":
    o = parseInt(o, 10).toString(2);
    break;

   case "c":
    o = String.fromCharCode(parseInt(o, 10));
    break;

   case "d":
   case "i":
    o = parseInt(o, 10);
    break;

   case "j":
    o = JSON.stringify(o, null, l[6] ? parseInt(l[6]) : 0);
    break;

   case "e":
    o = l[7] ? parseFloat(o).toExponential(l[7]) : parseFloat(o).toExponential();
    break;

   case "f":
    o = l[7] ? parseFloat(o).toFixed(l[7]) : parseFloat(o);
    break;

   case "g":
    o = l[7] ? parseFloat(o).toPrecision(l[7]) : parseFloat(o);
    break;

   case "o":
    o = o.toString(8);
    break;

   case "s":
    o = String(o), o = l[7] ? o.substring(0, l[7]) : o;
    break;

   case "t":
    o = String(!!o), o = l[7] ? o.substring(0, l[7]) : o;
    break;

   case "T":
    o = n(o), o = l[7] ? o.substring(0, l[7]) : o;
    break;

   case "u":
    o = parseInt(o, 10) >>> 0;
    break;

   case "v":
    o = o.valueOf(), o = l[7] ? o.substring(0, l[7]) : o;
    break;

   case "x":
    o = parseInt(o, 10).toString(16);
    break;

   case "X":
    o = parseInt(o, 10).toString(16).toUpperCase();
   }
   i.json.test(l[8]) ? g[g.length] = o : (!i.number.test(l[8]) || y && !l[3] ? v = "" : (v = y ? "+" : "-", 
   o = o.toString().replace(i.sign, "")), f = l[4] ? "0" === l[4] ? "0" : l[4].charAt(1) : " ", 
   d = l[6] - (v + o).length, u = l[6] && d > 0 ? r(f, d) : "", g[g.length] = l[5] ? v + o + u : "0" === f ? v + u + o : u + v + o);
  }
  return g.join("");
 }, t.cache = {}, t.parse = function(e) {
  for (var t = e, n = [], r = [], s = 0; t; ) {
   if (null !== (n = i.text.exec(t))) r[r.length] = n[0]; else if (null !== (n = i.modulo.exec(t))) r[r.length] = "%"; else {
    if (null === (n = i.placeholder.exec(t))) throw new SyntaxError("[sprintf] unexpected placeholder");
    if (n[2]) {
     s |= 1;
     var o = [], a = n[2], c = [];
     if (null === (c = i.key.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
     for (o[o.length] = c[1]; "" !== (a = a.substring(c[0].length)); ) if (null !== (c = i.key_access.exec(a))) o[o.length] = c[1]; else {
      if (null === (c = i.index_access.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
      o[o.length] = c[1];
     }
     n[2] = o;
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
 }, o = {
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
 var e, t, n, r, i, s, o = "undefined", a = "object", c = "Shockwave Flash", l = "application/x-shockwave-flash", u = "SWFObjectExprInst", f = "onreadystatechange", d = window, p = document, h = navigator, m = !1, g = [ function() {
  m ? function() {
   var e = p.getElementsByTagName("body")[0], t = Q(a);
   t.setAttribute("type", l);
   var n = e.appendChild(t);
   if (n) {
    var r = 0;
    !function() {
     if (typeof n.GetVariable != o) {
      var i = n.GetVariable("$version");
      i && (i = i.split(" ")[1].split(","), w.pv = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]);
     } else if (r < 10) return r++, void setTimeout(arguments.callee, 10);
     e.removeChild(t), n = null, B();
    }();
   } else B();
  }() : B();
 } ], y = [], v = [], _ = [], A = !1, b = !1, x = !0, w = function() {
  var e = typeof p.getElementById != o && typeof p.getElementsByTagName != o && typeof p.createElement != o, t = h.userAgent.toLowerCase(), n = h.platform.toLowerCase(), r = /win/.test(n || t), i = /mac/.test(n || t), s = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")), u = !1, f = [ 0, 0, 0 ], g = null;
  if (typeof h.plugins != o && typeof h.plugins[c] == a) !(g = h.plugins[c].description) || typeof h.mimeTypes != o && h.mimeTypes[l] && !h.mimeTypes[l].enabledPlugin || (m = !0, 
  u = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), f[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), 
  f[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), f[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof d.ActiveXObject != o) try {
   var y = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
   y && (g = y.GetVariable("$version")) && (u = !0, g = g.split(" ")[1].split(","), 
   f = [ parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10) ]);
  } catch (e) {}
  return {
   w3: e,
   pv: f,
   wk: s,
   ie: u,
   win: r,
   mac: i
  };
 }();
 w.w3 && ((typeof p.readyState != o && "complete" == p.readyState || typeof p.readyState == o && (p.getElementsByTagName("body")[0] || p.body)) && C(), 
 A || (typeof p.addEventListener != o && p.addEventListener("DOMContentLoaded", C, !1), 
 w.ie && w.win && (p.attachEvent(f, function() {
  "complete" == p.readyState && (p.detachEvent(f, arguments.callee), C());
 }), d == top && function() {
  if (!A) {
   try {
    p.documentElement.doScroll("left");
   } catch (e) {
    return void setTimeout(arguments.callee, 0);
   }
   C();
  }
 }()), w.wk && function() {
  A || (/loaded|complete/.test(p.readyState) ? C() : setTimeout(arguments.callee, 0));
 }(), E(C)));
 function C() {
  if (!A) {
   try {
    var e = p.getElementsByTagName("body")[0].appendChild(Q("span"));
    e.parentNode.removeChild(e);
   } catch (e) {
    return;
   }
   A = !0;
   for (var t = g.length, n = 0; n < t; n++) g[n]();
  }
 }
 function k(e) {
  A ? e() : g[g.length] = e;
 }
 function E(e) {
  if (typeof d.addEventListener != o) d.addEventListener("load", e, !1); else if (typeof p.addEventListener != o) p.addEventListener("load", e, !1); else if (typeof d.attachEvent != o) !function(e, t, n) {
   e.attachEvent(t, n), _[_.length] = [ e, t, n ];
  }(d, "onload", e); else if ("function" == typeof d.onload) {
   var t = d.onload;
   d.onload = function() {
    t(), e();
   };
  } else d.onload = e;
 }
 function B() {
  var e = y.length;
  if (e > 0) for (var t = 0; t < e; t++) {
   var n = y[t].id, r = y[t].callbackFn, i = {
    success: !1,
    id: n
   };
   if (w.pv[0] > 0) {
    var s = R(n);
    if (s) if (!j(y[t].swfVersion) || w.wk && w.wk < 312) if (y[t].expressInstall && I()) {
     var a = {};
     a.data = y[t].expressInstall, a.width = s.getAttribute("width") || "0", a.height = s.getAttribute("height") || "0", 
     s.getAttribute("class") && (a.styleclass = s.getAttribute("class")), s.getAttribute("align") && (a.align = s.getAttribute("align"));
     for (var c = {}, l = s.getElementsByTagName("param"), u = l.length, f = 0; f < u; f++) "movie" != l[f].getAttribute("name").toLowerCase() && (c[l[f].getAttribute("name")] = l[f].getAttribute("value"));
     S(a, c, n, r);
    } else M(s), r && r(i); else U(n, !0), r && (i.success = !0, i.ref = T(n), r(i));
   } else if (U(n, !0), r) {
    var d = T(n);
    d && typeof d.SetVariable != o && (i.success = !0, i.ref = d), r(i);
   }
  }
 }
 function T(e) {
  var t = null, n = R(e);
  if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != o) t = n; else {
   var r = n.getElementsByTagName(a)[0];
   r && (t = r);
  }
  return t;
 }
 function I() {
  return !b && j("6.0.65") && (w.win || w.mac) && !(w.wk && w.wk < 312);
 }
 function S(i, s, a, c) {
  b = !0, n = c || null, r = {
   success: !1,
   id: a
  };
  var l = R(a);
  if (l) {
   "OBJECT" == l.nodeName ? (e = N(l), t = null) : (e = l, t = a), i.id = u, (typeof i.width == o || !/%$/.test(i.width) && parseInt(i.width, 10) < 310) && (i.width = "310"), 
   (typeof i.height == o || !/%$/.test(i.height) && parseInt(i.height, 10) < 137) && (i.height = "137"), 
   p.title = p.title.slice(0, 47) + " - Flash Player Installation";
   var f = w.ie && w.win ? "ActiveX" : "PlugIn", h = "MMredirectURL=" + d.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + p.title;
   if (typeof s.flashvars != o ? s.flashvars += "&" + h : s.flashvars = h, w.ie && w.win && 4 != l.readyState) {
    var m = Q("div");
    a += "SWFObjectNew", m.setAttribute("id", a), l.parentNode.insertBefore(m, l), l.style.display = "none", 
    function() {
     4 == l.readyState ? l.parentNode.removeChild(l) : setTimeout(arguments.callee, 10);
    }();
   }
   O(i, s, a);
  }
 }
 function M(e) {
  if (w.ie && w.win && 4 != e.readyState) {
   var t = Q("div");
   e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(N(e), t), e.style.display = "none", 
   function() {
    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
   }();
  } else e.parentNode.replaceChild(N(e), e);
 }
 function N(e) {
  var t = Q("div");
  if (w.win && w.ie) t.innerHTML = e.innerHTML; else {
   var n = e.getElementsByTagName(a)[0];
   if (n) {
    var r = n.childNodes;
    if (r) for (var i = r.length, s = 0; s < i; s++) 1 == r[s].nodeType && "PARAM" == r[s].nodeName || 8 == r[s].nodeType || t.appendChild(r[s].cloneNode(!0));
   }
  }
  return t;
 }
 function O(e, t, n) {
  var r, i = R(n);
  if (w.wk && w.wk < 312) return r;
  if (i) if (typeof e.id == o && (e.id = n), w.ie && w.win) {
   var s = "";
   for (var c in e) e[c] != Object.prototype[c] && ("data" == c.toLowerCase() ? t.movie = e[c] : "styleclass" == c.toLowerCase() ? s += ' class="' + e[c] + '"' : "classid" != c.toLowerCase() && (s += " " + c + '="' + e[c] + '"'));
   var u = "";
   for (var f in t) t[f] != Object.prototype[f] && (u += '<param name="' + f + '" value="' + t[f] + '" />');
   i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + u + "</object>", 
   v[v.length] = e.id, r = R(e.id);
  } else {
   var d = Q(a);
   for (var p in d.setAttribute("type", l), e) e[p] != Object.prototype[p] && ("styleclass" == p.toLowerCase() ? d.setAttribute("class", e[p]) : "classid" != p.toLowerCase() && d.setAttribute(p, e[p]));
   for (var h in t) t[h] != Object.prototype[h] && "movie" != h.toLowerCase() && D(d, h, t[h]);
   i.parentNode.replaceChild(d, i), r = d;
  }
  return r;
 }
 function D(e, t, n) {
  var r = Q("param");
  r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r);
 }
 function F(e) {
  var t = R(e);
  t && "OBJECT" == t.nodeName && (w.ie && w.win ? (t.style.display = "none", function() {
   4 == t.readyState ? function(e) {
    var t = R(e);
    if (t) {
     for (var n in t) "function" == typeof t[n] && (t[n] = null);
     t.parentNode.removeChild(t);
    }
   }(e) : setTimeout(arguments.callee, 10);
  }()) : t.parentNode.removeChild(t));
 }
 function R(e) {
  var t = null;
  try {
   t = p.getElementById(e);
  } catch (e) {}
  return t;
 }
 function Q(e) {
  return p.createElement(e);
 }
 function j(e) {
  var t = w.pv, n = e.split(".");
  return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, 
  t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2];
 }
 function P(e, t, n, r) {
  if (!w.ie || !w.mac) {
   var c = p.getElementsByTagName("head")[0];
   if (c) {
    var l = n && "string" == typeof n ? n : "screen";
    if (r && (i = null, s = null), !i || s != l) {
     var u = Q("style");
     u.setAttribute("type", "text/css"), u.setAttribute("media", l), i = c.appendChild(u), 
     w.ie && w.win && typeof p.styleSheets != o && p.styleSheets.length > 0 && (i = p.styleSheets[p.styleSheets.length - 1]), 
     s = l;
    }
    w.ie && w.win ? i && typeof i.addRule == a && i.addRule(e, t) : i && typeof p.createTextNode != o && i.appendChild(p.createTextNode(e + " {" + t + "}"));
   }
  }
 }
 function U(e, t) {
  if (x) {
   var n = t ? "visible" : "hidden";
   A && R(e) ? R(e).style.visibility = n : P("#" + e, "visibility:" + n);
  }
 }
 function L(e) {
  return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != o ? encodeURIComponent(e) : e;
 }
 w.ie && w.win && window.attachEvent("onunload", function() {
  for (var e = _.length, t = 0; t < e; t++) _[t][0].detachEvent(_[t][1], _[t][2]);
  for (var n = v.length, r = 0; r < n; r++) F(v[r]);
  for (var i in w) w[i] = null;
  for (var s in w = null, swfobject) swfobject[s] = null;
  swfobject = null;
 });
 return {
  registerObject: function(e, t, n, r) {
   if (w.w3 && e && t) {
    var i = {};
    i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, y[y.length] = i, 
    U(e, !1);
   } else r && r({
    success: !1,
    id: e
   });
  },
  getObjectById: function(e) {
   if (w.w3) return T(e);
  },
  embedSWF: function(e, t, n, r, i, s, c, l, u, f) {
   var d = {
    success: !1,
    id: t
   };
   w.w3 && !(w.wk && w.wk < 312) && e && t && n && r && i ? (U(t, !1), k(function() {
    n += "", r += "";
    var p = {};
    if (u && typeof u === a) for (var h in u) p[h] = u[h];
    p.data = e, p.width = n, p.height = r;
    var m = {};
    if (l && typeof l === a) for (var g in l) m[g] = l[g];
    if (c && typeof c === a) for (var y in c) typeof m.flashvars != o ? m.flashvars += "&" + y + "=" + c[y] : m.flashvars = y + "=" + c[y];
    if (j(i)) {
     var v = O(p, m, t);
     p.id == t && U(t, !0), d.success = !0, d.ref = v;
    } else {
     if (s && I()) return p.data = s, void S(p, m, t, f);
     U(t, !0);
    }
    f && f(d);
   })) : f && f(d);
  },
  switchOffAutoHideShow: function() {
   x = !1;
  },
  ua: w,
  getFlashPlayerVersion: function() {
   return {
    major: w.pv[0],
    minor: w.pv[1],
    release: w.pv[2]
   };
  },
  hasFlashPlayerVersion: j,
  createSWF: function(e, t, n) {
   return w.w3 ? O(e, t, n) : void 0;
  },
  showExpressInstall: function(e, t, n, r) {
   w.w3 && I() && S(e, t, n, r);
  },
  removeSWF: function(e) {
   w.w3 && F(e);
  },
  createCSS: function(e, t, n, r) {
   w.w3 && P(e, t, n, r);
  },
  addDomLoadEvent: k,
  addLoadEvent: E,
  getQueryParamValue: function(e) {
   var t = p.location.search || p.location.hash;
   if (t) {
    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return L(t);
    for (var n = t.split("&"), r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return L(n[r].substring(n[r].indexOf("=") + 1));
   }
   return "";
  },
  expressInstallCallback: function() {
   if (b) {
    var i = R(u);
    i && e && (i.parentNode.replaceChild(e, i), t && (U(t, !0), w.ie && w.win && (e.style.display = "block")), 
    n && n(r)), b = !1;
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
  function i(o, a) {
   if (!n[o]) {
    if (!t[o]) {
     var c = "function" == typeof require && require;
     if (!a && c) return c(o, !0);
     if (s) return s(o, !0);
     var l = new Error("Cannot find module '" + o + "'");
     throw l.code = "MODULE_NOT_FOUND", l;
    }
    var u = n[o] = {
     exports: {}
    };
    t[o][0].call(u.exports, function(e) {
     var n = t[o][1][e];
     return i(n || e);
    }, u, u.exports, e, t, n, r);
   }
   return n[o].exports;
  }
  for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
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
    var o = r.apply(this, arguments);
    return e.addEventListener(n, o, s), {
     destroy: function() {
      e.removeEventListener(n, o, s);
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
     if (r && t) for (var s = 0, o = r.length; o > s; s++) r[s].fn !== t && r[s].fn._ !== t && i.push(r[s]);
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
   var s = r(e("./clipboard-action")), o = r(e("tiny-emitter")), a = r(e("good-listener")), c = function(e) {
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
     this.listener = a.default(e, "click", function(e) {
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
   }(o.default);
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
   var o = new XMLHttpRequest();
   o.open("POST", e.serviceUrl + "/post/"), o.setRequestHeader("Content-Type", "application/json; charset=utf-8");
   var a = {
    postId: t,
    surveyResult: JSON.stringify(n)
   };
   i && (a.clientId = i), s && (a.isPartialCompleted = !0);
   var c = JSON.stringify(a);
   o.setRequestHeader("Content-Length", c.length.toString());
   o.onload = function() {
    r(200 == o.status, o.response);
   }, o.send(c);
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
   for (var o = 0; o < r.length; o++) {
    var a = null, c = (l = r[o]).indexOf(e.typeSymbol);
    c > -1 && (a = l.substring(c + 1), l = l.substring(0, c));
    var l = this.getPropertyName(l), u = new t(l);
    a && (u.type = a), this.properties.push(u);
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
   var o = this.findProperty(e, t);
   o && (o.className = n, o.defaultValue = r, o.onGetValue = i, o.onSetValue = s);
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
   var r = u.metaData.getProperties(n);
   if (r) {
    this.description = "The list of available properties are: ";
    for (var i = 0; i < r.length; i++) i > 0 && (this.description += ", "), this.description += r[i].name;
    this.description += ".";
   }
  }
  return __extends(t, e), t;
 }(i);
 e.JsonUnknownPropertyError = s;
 var o = function(e) {
  function t(t, n, r) {
   e.call(this, n, r), this.baseClassName = t, this.type = n, this.message = r, this.description = "The following types are available: ";
   for (var i = u.metaData.getChildrenClasses(t, !0), s = 0; s < i.length; s++) s > 0 && (this.description += ", "), 
   this.description += "'" + i[s].name + "'";
   this.description += ".";
  }
  return __extends(t, e), t;
 }(i);
 e.JsonMissingTypeErrorBase = o;
 var a = function(e) {
  function t(t, n) {
   e.call(this, n, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + t + "'."), 
   this.propertyName = t, this.baseClassName = n;
  }
  return __extends(t, e), t;
 }(o);
 e.JsonMissingTypeError = a;
 var c = function(e) {
  function t(t, n) {
   e.call(this, n, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + t + "'."), 
   this.propertyName = t, this.baseClassName = n;
  }
  return __extends(t, e), t;
 }(o);
 e.JsonIncorrectTypeError = c;
 var l = function(e) {
  function t(t, n) {
   e.call(this, "requiredproperty", "The property '" + t + "' is required in class '" + n + "'."), 
   this.propertyName = t, this.className = n;
  }
  return __extends(t, e), t;
 }(i);
 e.JsonRequiredPropertyError = l;
 var u = function() {
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
     var o = this.findProperty(r, i);
     o ? this.valueToObj(t[i], n, i, o) : this.addNewError(new s(i.toString(), n.getType()), t);
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
    var o = e.metaData.getRequiredProperties(i);
    if (o) for (var u = 0; u < o.length; u++) if (!n[o[u]]) {
     s = new l(o[u], i);
     break;
    }
   } else r.baseClassName && (s = i ? new c(r.name, r.baseClassName) : new a(r.name, r.baseClassName));
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
 e.JsonObject = u;
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
 var o = function(n) {
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
 e.AnswerCountValidator = o, e.JsonObject.metaData.addClass("surveyvalidator", [ "text" ]), 
 e.JsonObject.metaData.addClass("numericvalidator", [ "minValue:number", "maxValue:number" ], function() {
  return new i();
 }, "surveyvalidator"), e.JsonObject.metaData.addClass("textvalidator", [ "minLength:number" ], function() {
  return new s();
 }, "surveyvalidator"), e.JsonObject.metaData.addClass("answercountvalidator", [ "minCount:number", "maxCount:number" ], function() {
  return new o();
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
   var o = this;
   this.koValue.subscribe(function(e) {
    o.isValueUpdating, o.value = e;
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
 let t, n, r, i, s, o, a, c, l = [], u = [], f = "", d = !1, p = 1, h = {}, m = [], g = void 0, y = "", v = "noname.abc", _ = [], A = 0, b = [], x = !1, w = [], C = 0, k = [], E = [], B = {}, T = {}, I = [], S = !1, M = {}, N = {}, O = [], D = 0, F = !1, R = [], Q = !1, j = !1, P = "../../corpora", U = "./abcde_help.html", L = "../image", V = "../lib/media", z = 5, H = /\s/g, Y = /</g, q = />/g, J = /[><]/g, G = /([,;\.])/, X = /&/g, W = /.*([<>])[^<>]+$/, K = /^% abcDidactyl v([\d\.]+)$/, Z = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x,;\.]+)$/, ee = /^% abcDidactyl END$/, te = /^% Authority: ([^\(]+)(\s+\((\d\d\d\d)\))?$/, ne = /^% Transcriber: (.*)$/, re = /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/, ie = /^% (.*)$/, se = 300, oe = 4e3, ae = "abcde", ce = "abc_source", le = "source", ue = "abcde_prefs", fe = "abcde_controls", de = "abcde_metadata", pe = "abcde_keypad", he = "abcde_rendering", me = "abcde_target", ge = "abcde_error", ye = .1, ve = 3, _e = .3, Ae = 90, be = 89, xe = 13, we = 8, Ce = 9, ke = 37, Ee = 39, Be = "%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11", Te = "%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";
 function Ie() {
  g && clearInterval(g), l = [], u = [], y = "", d = !1, v = "noname.abc", n = void 0, 
  i = "", _ = [], s = void 0, b = [], x = !1, w = [], o = void 0, C = 0, k = [], E = [], 
  B = {}, T = {}, I = [], S = !1, M = {}, N = {}, O = [], D = 0, a = void 0, c = void 0, 
  R = [];
 }
 function Se(e) {
  let t, n = M[e], r = [];
  for (t in n) n.hasOwnProperty(t) && r.push(t);
  return r.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), r;
 }
 function Me(e, t) {
  if (!e) return console.log("MISSING fingers have no hands."), "";
  if ("x" === e) return e;
  let n = t, r = [], i = e.split("");
  for (let e = 0; e < i.length; e++) {
   let t = i[e];
   "<" === t || ">" === t ? n = t : t.match(/\d/) ? r.push(n + t) : r.push(t);
  }
  return r.join("");
 }
 function Ne() {
  return "undefined" != typeof Storage;
 }
 function Oe(e, n) {
  y || (y = md5(i));
  let r = e + "_" + n + "_" + y;
  return t.experiment_id && (r = t.experiment_id + "_" + r), r;
 }
 function De(e) {
  if (!Ne()) return {};
  let t = {
   sequence: ""
  }, n = Oe("sequence", e), r = localStorage.getItem(n) || "";
  r.match(/[^x&@]/) && (t.sequence = r), n = Oe("authority", e);
  let i = localStorage.getItem(n) || "";
  t.authority = i, n = Oe("authority_year", e);
  let s = localStorage.getItem(n) || "";
  t.authority_year = s, n = Oe("transcriber", e);
  let o = localStorage.getItem(n) || "";
  t.transcriber = o, n = Oe("comments", e);
  let a = localStorage.getItem(n) || "";
  return t.comments = a, t;
 }
 function Fe(e) {
  let t = document.getElementById(e);
  return t.value ? t.value : "";
 }
 function Re(e) {
  let t = new Date(), n = t.getFullYear() + "-" + sprintf("%02d", t.getMonth() + 1) + "-" + sprintf("%02d", t.getDate()) + " " + sprintf("%02d", t.getHours()) + ":" + sprintf("%02d", t.getMinutes()) + ":" + sprintf("%02d", t.getSeconds()), r = "", i = "";
  return (e || Ve("include_pii")) && (r = Fe("authority"), i = Fe("transcriber")), 
  {
   sequence: On(),
   authority: r,
   authority_year: Fe("authority_year"),
   transcriber: i,
   transcription_date: n,
   comments: Fe("comments")
  };
 }
 function Qe(e, t) {
  let n = document.getElementById(e).value, r = Oe(e, t);
  localStorage.setItem(r, n);
 }
 function je(e) {
  let t = document.getElementsByName(e);
  for (let e = 0; e < t.length; e++) {
   let n = t[e];
   if (n.checked) return n.id;
  }
 }
 function Pe(e) {
  let t = "";
  if ("preset_preference" === e || "output" === e || "keypad" === e || "restore" == e) t = je(e); else {
   t = document.getElementById(e).value;
  }
  h[e] = t, localStorage.setItem(e, t);
 }
 function Ue() {
  let e = document.getElementById("sequence_spinner");
  return e ? e.value : (alert("Sequence DOM element has gone missing."), "1");
 }
 function Le() {
  if (!Ne()) return void clearInterval(g);
  if (!document.getElementById("sequence_spinner")) return void clearInterval(g);
  let e = Ue(), t = Oe("sequence", e), n = On();
  localStorage.setItem(t, n), Qe("authority", e), Qe("authority_year", e), Qe("transcriber", e), 
  Qe("comments", e);
 }
 function Ve(e) {
  if (t && t[e]) return t[e];
  if ("preset" === e) return "";
  if ("measure_number_interval" === e) {
   return document.getElementById(e).value;
  }
  let n = je(e);
  return n || "";
 }
 function ze() {
  let e = {};
  return e.authority = Fe("default_authority"), e.authority_year = Fe("default_authority_year"), 
  e.transcriber = Fe("default_transcriber"), e.sequence = "x", e.comments = "", e;
 }
 function He(e) {
  let t, n = e.split("\n"), r = !1, i = {}, s = [], o = "";
  for (let e = 0; e < n.length; e++) {
   let a = n[e];
   if (!o && (t = K.exec(a)) && t[1]) o = t[1], r = !0; else if (r) if ((t = Z.exec(a)) && t[1] && t[2]) i = {
    sequence: t[2],
    comments: ""
   }, s.push(i); else {
    if (t = ee.exec(a)) break;
    if ((t = te.exec(a)) && t[1]) {
     i.authority = t[1], t[2] && (i.authority_year = t[3]);
     continue;
    }
    if ((t = ne.exec(a)) && t[1]) {
     i.transcriber = t[1];
     continue;
    }
    if ((t = re.exec(a)) && t[1]) {
     i.transcription_date = t[1];
     continue;
    }
    (t = ie.exec(a)) && t[1] && (i.comments += t[1] + "\n");
   }
  }
  return s;
 }
 function Ye() {
  let e = document.getElementById("sequence_spinner");
  e.min = 1, e.max = m.length || 1;
  let t = function() {
   let e = Ve("preset");
   if (e) return e;
   let t = 1;
   return "last" === (e = Ve("preset_preference")) && (t = m.length || 1), t;
  }();
  e.value = t;
 }
 function qe(e) {
  if (e) {
   let t = e - 1;
   return parseInt(e) <= m.length ? m[t] : ze();
  }
  return function() {
   let e = Ve("preset");
   if (e) return m[e - 1];
   return (e = Ve("preset_preference")) && "none" !== e ? "first" === e ? m[0] : "last" === e ? m[m.length - 1] : "" : ze();
  }();
 }
 function Je(e, t) {
  let n = document.getElementsByName(e);
  for (let e = 0; e < n.length; e++) {
   let r = n[e];
   r.id === t && (r.checked = !0);
  }
 }
 function Ge(e, t) {
  let n = document.getElementById(e);
  n.value = void 0 !== t ? t : "";
 }
 function Xe(e) {
  Ge("authority", e.authority), Ge("authority_year", e.authority_year), Ge("transcriber", e.transcriber), 
  Ge("comments", e.comments);
 }
 function We(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return !0;
  return !1;
 }
 function Ke(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return n;
  return null;
 }
 function $e(e, t) {
  if (!e) return;
  console.log("Setting fingers: ", e);
  let n, r, i, s = {}, o = e.split("@");
  for (n = 0; n < o.length; n++) {
   let e = nn(n);
   s = [];
   let a = o[n].split("&");
   for (r = 0; r < a.length; r++) {
    let e = st(a[r]);
    s = s.concat(e);
   }
   let c = Se(n);
   for (let r = 0; r < c.length; r++) {
    let o = c[r], a = M[n][o];
    a.sort(Qt);
    for (let n = 0; n < a.length; n++) {
     let r = a[n], o = r.pitches.length;
     if (r.grace) {
      let n = "";
      r[t] = "";
      for (let a = 0; a < o; a++) (i = s.shift()) || (console.log(t + " MISSING for grace note:"), 
      Ot(t + " grace note", r)), e = Bn(i = Me(i, e), e), n += i;
      "fingering" === t ? r.set_fingering(n) : "preset_fingering" === t && r.set_preset_fingering(n);
     }
    }
    let l = Ht(a), u = zt(l), f = [], d = [], p = null;
    for (let n = 0; n < u.length; n++) {
     let r = u[n];
     for (let n = 0; n < l[r].length; n++) {
      if ((p = l[r][n]).grace) continue;
      We(d, p) || (f.push(""), d.push(p));
      let o = Ke(d, p);
      (i = s.shift()) || (console.log(t + " MISSING for note:"), Ot(t + " pit note", p)), 
      e = Bn(i = Me(i, e), e), f[o] += i;
     }
    }
    for (let e = 0; e < f.length; e++) i = f[e], console.log("FingerING " + i), p = d[e], 
    "fingering" === t ? p.set_fingering(i) : "preset_fingering" === t && p.set_preset_fingering(i);
   }
  }
 }
 function Ze(e, t) {
  let n = t.sequence, r = t.sequence, i = !0, s = Ve("preset_preference");
  s && "none" !== s || (i = !1, n = "");
  let o = !1;
  if (e && e.sequence && e.sequence !== n) {
   let t = Ve("restore");
   (o = "always" === t || "never" !== t && confirm("You have previously entered data for this piece (or suggestion). Do you want to restore them?")) && (n = e.sequence);
  }
  o ? Xe(e) : i && Xe(t), $e(r, "preset_fingering"), $e(n, "fingering"), g = setInterval(function() {
   Le();
  }, oe);
 }
 function et() {
  let e = Ue();
  Ze(De(e), qe(e)), function() {
   let e = Fe("authority"), t = Fe("default_authority");
   !e && t && Ge("authority", t);
   let n = Fe("authority_year"), r = Fe("default_authority_year");
   !n && r && Ge("authority_year", r);
   let i = Fe("transcriber"), s = Fe("default_transcriber");
   !i && s && Ge("transcriber", s);
  }();
 }
 function tt(e) {
  return Tn();
 }
 function nt() {
  let e = window.prompt("Please enter a fingering string for the current piece.", "");
  null !== e && ($e(e, "fingering"), Zt());
 }
 function rt() {
  if (!i) return;
  if (confirm("All changes you have made to this fingering sequence will be discarded, and the initial sequence will be restored. Are you sure you want to proceed?")) {
   Ze(void 0, qe(Ue())), Zt(), bn(o = E[0][0][0]);
  }
 }
 function it(e) {
  return function e(t, n) {
   if (null == t) return n;
   for (let r = 0; r < t.length; r++) t[r] instanceof Array ? e(t[r], n) : t[r] && n.push(t[r]);
   return n;
  }(e, []).join("");
 }
 function st(e, t = 0) {
  if (!e) return [];
  console.log("abcdf string: " + e);
  let n = function(e, t = 0, n = !1) {
   let r = [];
   if (n) for (let n = 0; n < e[t].length; n++) for (let i = 0; i < e[t][n].length; i++) {
    let s = e[t][n][i];
    if (s instanceof Array) {
     let e = it(s);
     r.push(e);
    }
   } else for (let n = 0; n < e[t].length; n++) {
    let i = e[t][n];
    if (i instanceof Array) {
     let e = it(i);
     r.push(e);
    }
   }
   return r;
  }(AbcdfRaw_Parser.parse(e), t, X.exec(e));
  return n = n.filter(function(e) {
   return "&" != e && "@" != e;
  });
 }
 function ot() {
  window.open(U, "_blank").focus();
 }
 function at(e) {
  pn();
  let t = document.getElementById("prefs_modal_wrapper"), n = document.getElementById("prefs_modal_window");
  t.className = "overlay";
  let r = n.offsetHeight - document.documentElement.clientHeight;
  r > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - r + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ct(e) {
  pn();
  let t = document.getElementById("metadata_modal_wrapper"), n = document.getElementById("metadata_modal_window");
  t.className = "overlay";
  let r = n.offsetHeight - document.documentElement.clientHeight;
  r > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - r + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function lt(e) {
  document.getElementById("metadata_modal_wrapper").className = "", Le(), bt(), dn(), 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ut() {
  p > _e && (p -= ye, Zt());
 }
 function ft() {
  p < ve && (p += ye, Zt());
 }
 function dt(e) {
  Pe("preset_preference"), Pe("output"), Pe("restore"), Pe("keypad"), Pe("measure_number_interval"), 
  Pe("default_authority"), Pe("default_authority_year"), Pe("default_transcriber"), 
  document.getElementById("prefs_modal_wrapper").className = "", i && (Zt(), bn(o)), 
  bt(), dn(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function pt(e) {
  let t = e.slice(0, 100);
  if (-1 == t.indexOf("<?xml")) return !1;
  let n = t.match(/encoding="([^"]+)"/), r = "utf-8";
  return n && 2 == n.length && (r = n[1]), r;
 }
 function ht(e) {
  let t = $.parseXML(e), n = vertaal(t, {}), r = n[0], i = n[1];
  return i && console.log("xml2abc ERROR: " + i), r || alert("Unable to open MusicXML file: " + i), 
  r;
 }
 function mt(e) {
  let t = e.split(".");
  return t[t.length - 1];
 }
 function gt(e) {
  let t = mt(e), n = 'The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.', r = function(e, t) {
   let n = new XMLHttpRequest();
   return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest()).open(e, t) : n = null, 
   n;
  }("GET", e);
  r ? ("mxl" === t && (r.responseType = "arraybuffer"), r.onload = function() {
   console.log("File has been retrieved.");
   let n = "";
   if ("mxl" === t) {
    if (!(n = function(e) {
     let t = "";
     try {
      let n = new JSZip(e);
      $.each(n.files, function(e, n) {
       t = n.asText();
      });
     } catch (e) {
      return alert("Could not open compressed MusicXML file: " + e.message), "";
     }
     return "UTF-8" !== pt(t) ? (alert("Input mxl is not UTF-8 encoded. Cannot open."), 
     "") : t = ht(t);
    }(r.response))) return;
   } else {
    let e = pt(n = r.responseText);
    if (e) {
     if (!/^utf/i.test(e)) return void alert("Input xml is not UTF-8 encoded. Cannot open.");
     n = ht(n);
    }
   }
   n && (f = e, document.getElementById(ce).value = n, hn());
  }, r.onerror = function() {
   alert(n);
  }, r.send()) : alert(n);
 }
 function yt() {
  let e = P + "/clementi/11.abc";
  if (f) e = f; else {
   let t = Ve("default_url");
   t && (e = t);
  }
  let t = window.prompt("Please enter URL to open.", e);
  t && gt(t);
 }
 function vt() {
  let e = document.getElementById("file_input").files;
  if (!e.length) return void alert("Please select a valid abc file.");
  let t = e[0];
  if ("mxl" === mt(t.name)) return void function(e) {
   let t = new FileReader(), n = "";
   t.onload = function(e) {
    try {
     let t = new JSZip(e.target.result);
     $.each(t.files, function(e, t) {
      n = t.asText();
     });
    } catch (e) {
     return void alert("Could not open compressed MusicXML file: " + e.message);
    }
    "UTF-8" === pt(n) ? (n = ht(n), document.getElementById(ce).value = n, hn()) : alert("Input xml is not UTF-8 encoded. Cannot open.");
   }, t.readAsArrayBuffer(e);
  }(t);
  let n = !1, r = new FileReader();
  r.onload = function(e) {
   let i = pt(r.result), s = new FileReader();
   i ? n = !0 : i = "UTF-8", s.onload = function(e) {
    let t = "";
    t = n ? ht(s.result) : e.target.result, document.getElementById(ce).value = t, hn();
   }, s.readAsText(t, i);
  }, r.readAsText(t, "UTF-8");
 }
 function _t() {
  Q = !Q;
 }
 function At(e, t) {
  let n = e.children;
  for (let e = 0; e < n.length; e++) n[e].style.display = t;
 }
 function bt() {
  let e = document.getElementById(pe), t = document.getElementById("number_div"), n = document.getElementById("symbol_div");
  if ("show" === Ve("keypad")) e.style.display = "block", t.style.display = "block", 
  n.style.display = "block", At(t, "inline"), At(n, "inline"); else {
   At(n, "none"), At(t, "none");
   let r = Ve("qualtrics"), i = Ve("submit_button_id");
   if (r) {
    document.getElementById("q_next").style.display = "inline";
    let e = document.getElementById("q_back");
    e && (e.style.display = "inline");
   } else if (i) {
    document.getElementById(i).style.display = "inline";
   } else t.style.display = "block", n.style.display = "block", e.style.display = "none";
  }
 }
 function xt(e) {
  let t = e.keyCode || e.which;
  t = String.fromCharCode(t);
  /[0-9]/.test(t) || (e.returnValue = !1, e.preventDefault && e.preventDefault());
 }
 function wt(e, t, n, r, i, s) {
  let o = document.createElement("input");
  o.type = "text", o.class = r, o.id = t, i && (o.onkeypress = i), "year" === r && (o.size = "4");
  let a = document.createElement("label");
  a.htmlFor = t, a.appendChild(document.createTextNode(n)), e.appendChild(a), e.appendChild(o), 
  s && e.appendChild(document.createElement("br"));
 }
 function Ct(e, t, n) {
  let r = document.createElement("label");
  r.class = n;
  let i = document.createTextNode(t);
  r.appendChild(i), e.appendChild(r);
 }
 function kt(e, t, n, r, i, s, o) {
  let a = document.createElement("div");
  a.class = "radio_div", Ct(e, t, "prompt");
  for (let e = 0; e < r.length; e++) {
   let t = document.createElement("input");
   t.type = "radio", t.id = r[e], t.id === s && (t.checked = !0), t.name = n, a.appendChild(t), 
   Ct(a, i[e], "radio_label");
   let o = document.createElement("span");
   o.innerHTML = "&nbsp;&nbsp", a.appendChild(o);
  }
  return e.appendChild(a), o && e.appendChild(document.createElement("br")), a;
 }
 function Et() {
  let e = document.getElementById(de), t = document.createElement("div");
  t.id = "metadata_modal_wrapper", e.appendChild(t);
  let n = document.createElement("div");
  n.id = "metadata_modal_window", t.appendChild(n);
  let r = document.createElement("div");
  r.style.textAlign = "right";
  let i = document.createElement("a");
  i.id = "metadata_modal_close", i.href = "#", i.innerHTML = "Close <b>X</b>", r.appendChild(i), 
  i.addEventListener("click", lt, !1), n.appendChild(r), wt(n, "authority", "Authority", "name", void 0, !1), 
  wt(n, "authority_year", "Year", "year", xt, !0), wt(n, "transcriber", "Transcriber", "name", void 0, !0), 
  function(e, t, n, r, i, s) {
   let o = document.createElement("textarea");
   o.class = r, o.id = t, o.rows = i, o.cols = s;
   let a = document.createElement("label");
   a.htmlFor = t, a.appendChild(document.createTextNode(n)), e.appendChild(a), e.appendChild(o);
  }(n, "comments", "Comments", "comments", 10, 50);
 }
 function Bt() {
  let e = document.getElementById(ue), n = document.createElement("div");
  n.id = "prefs_modal_wrapper", e.appendChild(n);
  let r = document.createElement("div");
  r.id = "prefs_modal_window", n.appendChild(r);
  let i = document.createElement("div");
  i.style.textAlign = "right";
  let s = document.createElement("a");
  s.id = "prefs_modal_close", s.href = "#", s.innerHTML = "Close <b>X</b>", i.appendChild(s), 
  s.addEventListener("click", dt, !1), r.appendChild(i);
  let o = document.createElement("h3");
  o.innerText = "Preferences", r.appendChild(o);
  let a = "restore", c = [ "always", "never", "ask" ], l = [ "Always", "Never", "Ask" ];
  t && t[a] || kt(r, "Restore Data", a, c, l, "ask", !0), a = "output", t && t[a] || kt(r, "Output", a, c = [ "append", "replace" ], l = [ "Append", "Replace" ], "append", !0), 
  a = "preset_preference", t && t[a] || kt(r, "Preset", a, c = [ "first", "last", "none" ], l = [ "First", "Last", "None" ], "first", !0), 
  a = "keypad", c = [ "show", "hide" ], l = [ "Show", "Hide" ];
  let u = "hide";
  "ontouchstart" in window && (u = "show"), kt(r, "Keypad", a, c, l, u, !0), function(e, t, n, r, i, s, o, a) {
   let c = document.createElement("div");
   c.class = "spinner_div", Ct(c, t, "prompt");
   let l = document.createElement("input");
   l.id = n, l.min = r, l.max = i, l.size = s, l.type = "number", l.value = o, c.appendChild(l), 
   e.appendChild(c), a && e.appendChild(document.createElement("br"));
  }(r, "Measure Number Interval", "measure_number_interval", 0, 20, 2, 5, !0), wt(r, "default_authority", "Default Authority", "name", void 0, !0), 
  wt(r, "default_authority_year", "Year", "year", xt, !0), wt(r, "default_transcriber", "Transcriber Name", "name", void 0, !0);
 }
 function Tt(e, t, n) {
  let r = document.createElement("input");
  r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, r.onclick = function() {
   ln(n);
  }, e.appendChild(r);
 }
 function It(e) {
  let t = Ve("qualtrics"), n = xn(i), r = "abcDF_" + n, s = "abcD_" + n, o = On();
  Qualtrics.SurveyEngine.setEmbeddedData(r, o);
  let a = Fn();
  Qualtrics.SurveyEngine.setEmbeddedData(s, a), Le(), "q_next" === e ? (Ie(), Zt(), 
  function() {
   let e = document.getElementById(ae);
   for (;e.firstChild; ) e.removeChild(e.firstChild);
   e.remove(), j = !1, g && clearInterval(g);
  }(), d = !1, t.enableNextButton(), t.enablePreviousButton(), t.clickNextButton()) : (t.enableNextButton(), 
  t.enablePreviousButton(), t.clickPreviousButton());
 }
 function St(e, t, n) {
  let r = document.createElement("input");
  r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, r.onclick = function() {
   It(t);
  }, e.appendChild(r);
 }
 function Mt(t, n, r, i) {
  let s = document.createElement("input");
  s.id = n, s.class = "keypad_button", s.type = "image", s.src = L + "/" + r, s.alt = i, 
  s.onclick = function() {
   !function(t) {
    let n = Ce;
    switch (t) {
    case "previous":
     n = ke;
     break;

    case "next":
     n = Ee;
     break;

    case "backspace":
     n = we;
     break;

    case "pencil":
     n = xe;
     break;

    case "undo":
     n = Ae;
     break;

    case "redo":
     n = be;
    }
    let r = en(n);
    r && e.preventDefault();
   }(n);
  }, t.appendChild(s);
 }
 function Nt() {
  let e = document.getElementById(pe), t = document.createElement("number_div");
  t.id = "number_div";
  let n = document.createElement("symbol_div");
  n.id = "symbol_div", e.appendChild(n), e.appendChild(document.createElement("br")), 
  e.appendChild(t), Mt(t, "undo", "action-undo.svg", "undo"), Mt(t, "redo", "action-redo.svg", "redo"), 
  Tt(t, "one", "1"), Tt(t, "two", "2"), Tt(t, "three", "3"), Tt(t, "four", "4"), Tt(t, "five", "5"), 
  Tt(t, "toggle", "T"), Mt(t, "previous", "arrow-circle-left.svg", "<-"), Mt(t, "next", "arrow-circle-right.svg", "->"), 
  Ve("qualtrics") && (Ve("qualtrics_back") && St(t, "q_back", "BACK"), St(t, "q_next", "NEXT"));
  let r = Ve("submit_button_id");
  if (r) {
   let e = Ve("submit_button_label");
   e || (e = "NEXT"), function(e, t, n) {
    let r = document.createElement("input");
    r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, e.appendChild(r);
   }(t, r, e);
  }
  Mt(n, "pencil", "target.svg", "..."), Tt(n, "hyphen", "-"), Tt(n, "slash", "/"), 
  Tt(n, "open_paren", "("), Tt(n, "close_paren", ")"), Tt(n, "short_phrase", ","), 
  Tt(n, "medium_phrase", ";"), Tt(n, "long_phrase", "."), Mt(n, "backspace", "delete.svg", "<]");
 }
 function Ot(e, t) {
  console.log(e + " Line: " + t.line + " Start: " + t.start + " Time: " + t.time + " String: " + t.string + " Size: " + t.size + " Pitch: " + t.pitches.join(",") + " Voice: " + t.voice + " Staff: " + t.staff + " Grace: " + t.grace);
 }
 function Dt(e, n) {
  if ("note" != e[n.type] && "grace" != e[n.type]) return {};
  if (this.fingering = "", this.preset_fingering = "", this.prior_note = null, this.next_note = null, 
  this.line = -1, this.grace = !1, this.size = 0, this.pitches = [], this.start = n.istart, 
  this.end = -1, this.starts = [], this.stops = [], this.phrase_break = "", this.preset_phrase_break = "", 
  "note" === e[n.type]) {
   this.size = n.notes.length;
   for (let e = 0; e < this.size; e++) this.pitches.push(n.notes[e].pit);
   this.pitches.sort(function(e, t) {
    return parseInt(e) - parseInt(t);
   }), this.end = n.iend;
  } else {
   this.grace = !0, this.size = 1;
   let e = n.extra;
   if (!e.notes) return alert("Who turned off the notes?!"), {};
   for (;;) {
    if (e.notes.length > 1 && alert('Chords not supported in a grace "note."'), this.starts.push(e.istart), 
    this.stops.push(e.iend), this.pitches.push(e.notes[0].pit), !e.next) {
     this.end = e.iend + 1;
     break;
    }
    e = e.next, this.size++;
   }
  }
  return this.string = i.substring(this.start, this.end), this.time = n.time, this.voice = n.v, 
  this.staff = n.st, this.prior_fingerings = [], this.undone_fingerings = [], this.locked = !1, 
  this.init = function() {
   this.fingering = "";
   for (let e = 0; e < this.size; e++) this.fingering += "x";
   this.phrase_break = "";
  }, this.preset_init = function() {
   this.preset_fingering = "";
   for (let e = 0; e < this.size; e++) this.preset_fingering += "x";
   this.preset_phrase_break = "";
  }, this.init(), this.set_fingering = function(e) {
   if (this.locked) this.fingering = this.preset_fingering; else {
    if (function() {
     for (let e = 0; e < k.length; e++) k[e].undone_fingerings = [];
     l = [];
    }(), "x" != this.fingering && this.prior_fingerings.push(this.fingering), e) {
     let t = G.exec(e);
     t ? (this.phrase_break = t[1], this.fingering = e.replace(G, "")) : this.fingering = e;
    } else this.init();
    u.push(this);
   }
  }, this.set_preset_fingering = function(e) {
   if (e) {
    t.preset_lock && (/x/.test(e) || (this.locked = !0));
    let n = G.exec(e);
    n ? (this.preset_phrase_break = n[1], this.preset_fingering = e.replace(G, "")) : this.preset_fingering = e;
   } else this.preset_init();
  }, this.get_pitch_fingering = function(e) {
   let t = function(e) {
    if (F) return 0 == e.staff ? "<" : ">";
    return nn(e.staff);
   }(this);
   if (!e.fingering.strike) return "x";
   let n = e.fingering.strike.hand || t, r = n + e.fingering.strike.digit;
   return e.fingering.release && (r += "-" + (n = e.fingering.release.hand || t) + e.fingering.release.digit), 
   r;
  }, this.get_fingering_from_score_fingering = function(e) {
   let t, n, r = "", i = [];
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
   let t = "", n = 0;
   for (;n < this.size; ) {
    let r = e.shift(), i = this.get_fingering_from_score_fingering(r);
    if (r.segmenter && (this.phrase_break = r.segmenter || ""), t += i, n++, 0 === e.length) break;
   }
   if (n === this.size) return this.set_fingering(t), !0;
   for (;n < this.size; n++) t += "x";
   return this.set_fingering(t), !1;
  }, this.undo_fingering_change = function() {
   this.prior_fingerings.length > 0 && (this.undone_fingerings.push(this.fingering), 
   this.fingering = this.prior_fingerings.pop()), l.push(this);
  }, this.redo_fingering_change = function() {
   this.undone_fingerings.length > 0 && (this.fingering && this.prior_fingerings.push(this.fingering), 
   this.fingering = this.undone_fingerings.pop()), u.push(this);
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
 function Ft(e) {
  let t = e;
  if (S) for (;!(t in T); ) t--; else for (;!(t in B); ) t--;
  return t;
 }
 function Rt() {
  this.read_file = function(e) {
   return "";
  }, this.errmsg = function(e, t, n) {
   document.getElementById(ge).innerHTML += e + "<br/>\n";
  }, this.img_out = function(e) {
   let t = /<svg /;
   e.match(t) && (e = e.replace(t, '<svg id="line_' + C + '" '), C++), r += e;
  }, this.anno_start = function(e, t, n, r, i, o, a) {
   O.push([ t, n ]);
   let c = t;
   "grace" === e && (c = Ft(t)), !S && c in B && (B[c].line = C), s.out_svg('<g class="e_' + c + '">\n');
  }, this.anno_stop = function(e, t, n, r, i, o, a) {
   let c = t;
   "grace" === e && (c = Ft(t)), s.out_svg("</g>\n"), "note" !== e && "grace" !== e || (s.out_svg('<rect class="abcr _' + c + '" x="'), 
   s.out_sxsy(r, '" y="', i), s.out_svg('" width="' + o.toFixed(2) + '" height="' + a.toFixed(2) + '"/>\n'));
  }, this.get_abcmodel = function(e, t, n) {
   if (S) return;
   console.log(n);
   for (let e = 0; e < t.length; e++) {
    console.log("Voice: " + e);
    let n = t[e].st;
    N[e] = n;
   }
   let r = e;
   for (;r; ) {
    let e = new Dt(n, r);
    e.start && (k.push(e), B[e.start] = e, e.staff in M || (M[e.staff] = {}), e.time in M[e.staff] || (M[e.staff][e.time] = []), 
    M[e.staff][e.time].push(e)), r = r.ts_next;
   }
  }, this.page_format = !1, this.imagesize = function() {
   let e = 8.5;
   return 1 !== p && (e *= p), 'width="' + e + 'in"';
  }();
 }
 function Qt(e, t) {
  let n = parseInt(e.time) - parseInt(t.time);
  return 0 !== n ? n : e.grace && !t.grace ? -1 : t.grace && !e.grace ? 1 : e.pitches[e.pitches.length - 1] < t.pitches[0] ? -1 : e.pitches[0] > t.pitches[t.pitches.length - 1] ? 1 : e.voice < t.voice ? (console.log("NOTES SORTED BY VOICE!"), 
  -1) : 1;
 }
 function jt(e) {
  let t = "$1";
  return e.match(q) && (t = "$1"), e.match(Y) && (t = "$2"), t;
 }
 function Pt(e) {
  let t = "^";
  return /^</.test(e) && (t = "_"), t;
 }
 function Ut(e) {
  let t = jt("<"), n = jt(">"), r = e.replace(/[\)\(]/g, ""), i = st(r), s = "";
  for (let e = 0; e < i.length; e++) i[e] = i[e].replace(Y, t), i[e] = i[e].replace(q, n), 
  s += i[e];
  return s += '"', s = '"' + Pt(r) + s;
 }
 function Lt(e, t, n) {
  let r = !1, i = jt("<"), s = jt(">"), o = [];
  for (let t = 0; t < e.length; t++) {
   let a = "", c = "x";
   if (e[t] && "x" !== e[t]) r = !0, c = e[t]; else {
    if (!n) break;
    if (!e[t] || e[t] && "x" === e[t]) continue;
   }
   if (c.match(/^\(/)) a = Ut(c); else {
    a = '"' + Pt(c) + (c = (c = c.replace(Y, i)).replace(q, s)) + '"';
   }
   a = a.replace(G, ""), o.unshift(a);
  }
  let a = "";
  return r && (a = o.join("")), a;
 }
 function Vt(e) {
  let t = e.fingering;
  return "x" === t ? "" : Lt(st(t = t.replace(H, "")), e.staff, !1);
 }
 function zt(e) {
  let t = [];
  for (let n in e) e.hasOwnProperty(n) && t.push(n);
  return t.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), t;
 }
 function Ht(e) {
  let t = [], n = {};
  for (let r = 0; r < e.length; r++) {
   let i = e[r];
   if (!i.grace) for (let e = 0; e < i.pitches.length; e++) {
    let r = i.pitches[e];
    t.push(r), r in n || (n[r] = []), n[r].push(i);
   }
  }
  for (let e = 0; e < n.length; e++) n[e].sort(Qt);
  return n;
 }
 function Yt(e) {
  let t = Ht(e), n = zt(t), r = [];
  for (let e = 0; e < n.length; e++) {
   let i = n[e];
   for (let e = 0; e < t[i].length; e++) {
    let n = t[i][e], s = st(n.fingering);
    for (let e = 0; e < n.pitches.length; e++) {
     n.pitches[e] === parseInt(i) && ("x" !== s[e] ? r.push(s[e]) : r.push(""));
    }
   }
  }
  return r;
 }
 function qt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) e[n].grace && t++;
  return t;
 }
 function Jt(e) {
  if (e.size > 1 && console.log("BIGGIE"), e.grace) return Vt(e);
  let t = M[e.staff][e.time], n = qt(t);
  if (t.length - n < 2) return Vt(e);
  t.sort(Qt);
  let r = 0, i = t[0];
  for (;i.grace; ) i = t[++r];
  return e !== i ? "" : Lt(Yt(t), e.staff, !0);
 }
 function Gt(e) {
  return e.starts[0] - e.start;
 }
 function Xt(e) {
  let t = function(e) {
   let t = Gt(e);
   return e.string.substring(0, t);
  }(e), n = function(e) {
   let t = [], n = e.starts, r = e.stops, i = e.string;
   i = i.substring(Gt(e));
   let s = [], o = [];
   for (let e = 0; e < n.length; e++) s.push(n[e] - n[0]), o.push(r[e] - n[0]);
   for (let e = 0; e < s.length; e++) {
    let n = i.substring(s[e], o[e]);
    t.push(n);
   }
   return t;
  }(e), r = [];
  e.fingering && (r = st(e.fingering));
  for (let e = 0; e < n.length; e++) {
   if (r[e]) {
    let n = r[e];
    "x" !== (n = n.replace(J, "")) && (t += "!" + n + "!");
   }
   t += n[e];
  }
  return t += "}";
 }
 function Wt(e) {
  if (e.fingering) return !0;
  let t = M[e.staff][e.time];
  for (let e = 0; e < t.length; e++) if (!t[e].grace && t[e].fingering) return !0;
  return !1;
 }
 function Kt(e) {
  let t = "";
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
 function $t() {
  let e = "";
  if (function() {
   if (void 0 !== a) return a;
   a = !1;
   let e = !1, t = !1, n = i.split("\n");
   for (let r = 0; r < n.length; r++) {
    let i = n[r];
    if (i.match(/^%%setfont-1/) && (e = !0), i.match(/^%%setfont-2/) && (t = !0), e && t) {
     a = !0;
     break;
    }
   }
   return a;
  }() || (e += Be + "\n", function() {
   if (void 0 !== n) return n;
   n = !1;
   for (let e = 0; e < I.length; e++) {
    let t = I[e];
    if (B[t].grace) {
     n = !0;
     break;
    }
   }
   return n;
  }() && (e += Te + "\n")), !function() {
   if (void 0 !== c) return c;
   c = !1;
   let e = i.split("\n");
   for (let t = 0; t < e.length; t++) if (e[t].match(/^%%measurenb\s+\d+/)) {
    c = !0;
    break;
   }
   return c;
  }()) {
   let t = Ve("measure_number_interval");
   t && (e += "%%measurenb " + t + "\n");
  }
  T = {};
  let t = 0;
  for (let n = 0; n < I.length; n++) {
   let r = I[n], s = B[r], o = "", a = parseInt(s.start), c = parseInt(s.end);
   e += o = i.substring(t, a), s.grace ? (s.fingered_start = e.length, e += Xt(s)) : (e += Kt(s), 
   Wt(s) && (e += Jt(s)), s.fingered_start = e.length, e += s.string), t = c, T[s.fingered_start] = s;
  }
  return e += i.substring(t);
 }
 function Zt() {
  d = !0, D++, console.log("RERENDERING NUMBER " + D);
  let e = new Date().getTime(), t = document.getElementById(me), n = document.getElementById(ge), i = new Rt();
  s = new Abc(i);
  let o = $t(), a = new Date().getTime(), c = a - e;
  console.log("MY LAG: " + c), document.getElementById(ce).value = o, e = new Date().getTime(), 
  r = "", s.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  C = 0, n.innerHTML = "", O = [];
  try {
   s.tosvg(v, document.getElementById(ce).value);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   t.innerHTML = r;
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
  setTimeout(function() {
   let e, t = document.getElementsByClassName("abcr"), n = t.length;
   for (;--n >= 0; ) (e = t[n]).onclick = function() {
    mn(this);
   }, e.ondblclick = function() {
    yn(this);
   };
  }, 300), c = (a = new Date().getTime()) - e, console.log("LIB LAG: " + c), bt();
 }
 function en(e) {
  if (console.log(String.fromCharCode(e) + " --\x3e " + e), e === we) {
   sn();
   let e = on();
   e.length > 0 && e[0] ? (o.set_fingering(""), o.phrase_break = "", Zt()) : o.prior_note && ((o = o.prior_note).set_fingering(""), 
   Zt()), bn(o);
  } else if (e == Ce || e == Ee) cn(), w = [], o.next_note && (o = o.next_note); else if (e == ke) cn(), 
  w = [], o.prior_note && (o = o.prior_note); else if (e == xe) gn(); else if (e == Ae) !function() {
   sn();
   let e = u.pop();
   e && (e.undo_fingering_change(), o = e, Zt(), bn(o));
  }(); else {
   if (e != be) return !1;
   !function() {
    sn();
    let e = l.pop();
    e && (e.redo_fingering_change(), o = e.next_note ? e.next_note : e, Zt(), bn(o));
   }();
  }
  return bn(o), !0;
 }
 function tn(e) {
  let t = en(e.keyCode);
  return t && e.preventDefault(), t;
 }
 function nn(e) {
  return 0 == e ? ">" : "<";
 }
 function rn(e) {
  let t = e.upper.score_fingerings;
  for (;t.length > 0; ) o.update_from_score_fingerings(t) && o.next_note && (o = o.next_note);
  x && (o = o.prior_note);
 }
 function sn() {
  x = !1, b = [], w = [], Zt(), bn(o);
 }
 function on() {
  let e = [], t = o.get_fingering().split("");
  for (let n = 0; n < t.length; n++) {
   let r = t[n];
   "x" === r ? e.push("") : e.push(r);
  }
  return e;
 }
 function an() {
  let e = on();
  for (;e.length; ) {
   let t = e.pop();
   t && b.unshift(t);
  }
 }
 function cn() {
  let e = !1;
  w.length > 0 && (Array.prototype.unshift.apply(b, w), function() {
   for (let e = 0; e < w.length; e++) if ("(" === w[e]) return !0;
   return !1;
  }() || (e = !0)), w = [];
  for (let e = b.length - 1; e >= 0 && /[\-\/\(]/.test(b[e]); e--) w.unshift(b.pop());
  if (0 === b.length) return;
  if (/[\-\/]/.test(b[0]) && (e = !0), x) {
   let e = on();
   ")" === e[e.length - 1] ? e.pop() : (alert("Something wonky with parentheses."), 
   sn()), Array.prototype.unshift.apply(b, e), x = !1;
  }
  e ? o.prior_note ? (o = o.prior_note, an()) : b.pop() : o.fingering && o.fingering.match(/x/) && an();
  let t = b.join(""), n = 1;
  for (;;) try {
   let e = Abcdf_Parser.parse(t);
   x = !1, 2 === n && (x = !0), rn(e);
   break;
  } catch (e) {
   if (1 === n ? b.push(")") : 2 === n ? (b.pop(), b.pop(), 0) : 3 === n && (n = 0), 
   0 == b.length) break;
   t = b.join(""), n++;
  }
  b = [], Zt(), bn(o);
 }
 function ln(e) {
  clearTimeout(A);
  let t = !1;
  return /[\(\)\/\-1-5]/.test(e) && (b.push(e), t = !0), "t" !== e && "T" !== e || (cn(), 
  F ? (F = !1, d && (document.body.style.backgroundColor = "white")) : (F = !0, d && (document.body.style.backgroundColor = "black")), 
  bn(o), t = !0), "," !== e && ";" !== e && "." !== e || (cn(), function(e) {
   o.phrase_break = e;
  }(e), Zt(), t = !0), A = setTimeout(cn, se), console.log("Done " + A), t;
 }
 function un(e) {
  var t;
  return ln((t = e, null == t.which ? String.fromCharCode(t.keyCode) : 0 != t.which && 0 != t.charCode ? String.fromCharCode(t.which) : null).toLowerCase());
 }
 function fn(e, t) {
  let n = [], r = [];
  r.push("% abcDidactyl v6");
  let i, s = He(e), o = e.split("\n"), a = "", c = !1;
  for (let e = 0; e < o.length; e++) {
   let t = o[e];
   a ? c ? n.push(t) : (i = ee.exec(t)) && (c = !0) : (i = K.exec(t)) && i[1] ? a = i[1] : n.push(t);
  }
  let l, u, f, d, p, h = Ue(), m = Re(t);
  if ("replace" === Ve("output")) {
   s[h - 1] = m;
  } else s.push(m);
  for (let e = 0; e < s.length; e++) {
   let t = e + 1;
   try {
    Abcdf_Parser.parse(s[e].sequence);
   } catch (e) {
    alert("Bad abcDF parse of fingering string: " + e.message);
   }
   l = "% abcD fingering " + t + ": " + s[e].sequence, r.push(l), s[e].authority && (u = "% Authority: " + s[e].authority, 
   s[e].authority_year && (u += " (" + s[e].authority_year + ")"), r.push(u)), s[e].transcriber && (f = "% Transcriber: " + s[e].transcriber, 
   r.push(f)), s[e].transcription_date && (d = "% Transcription date: " + s[e].transcription_date, 
   r.push(d)), p = s[e].comments.split("\n");
   for (let e = 0; e < p.length; e++) (e !== p.length - 1 || p[e]) && r.push("% " + p[e]);
  }
  return r.push("% abcDidactyl END"), r.join("\n") + "\n" + n.join("\n");
 }
 function dn() {
  document.body.addEventListener("keydown", tn), document.body.addEventListener("keypress", un);
 }
 function pn() {
  document.body.removeEventListener("keydown", tn), document.body.removeEventListener("keypress", un);
 }
 function hn() {
  if (function() {
   if (j) return;
   let e = document.getElementById(ae);
   e.align = "center";
   let t = document.getElementById(ce);
   t || ((t = document.createElement("div")).id = ce, t.style.display = "none", e.appendChild(t)), 
   t.class = le;
   let n = document.createElement(ue);
   n.id = ue, e.appendChild(n);
   let r = document.createElement(fe);
   r.id = fe, e.appendChild(r);
   let i = document.createElement(de);
   i.id = de, e.appendChild(i);
   let s = document.createElement(he);
   s.id = he, e.appendChild(s);
   let o = document.createElement(me);
   o.id = me, s.appendChild(o);
   let a = document.createElement(ge);
   a.id = ge, s.appendChild(a);
   for (let e = 0; e < 7; e++) s.appendChild(document.createElement("br"));
   let c = document.createElement(pe);
   c.id = pe, e.appendChild(c);
  }(), Ie(), function() {
   if (j) return;
   Bt(), Et();
   let e = L + "/download_36_x4.png", n = document.getElementById(fe), r = document.createElement("table"), i = document.createElement("tbody"), s = document.createElement("tr");
   n.appendChild(r), r.appendChild(i), r.style.backgroundColor = "LightGray", r.align = "center", 
   i.appendChild(s);
   let o = document.createElement("p");
   o.setAttribute("id", "downloadify");
   let a = document.createElement("td");
   a.appendChild(o), s.appendChild(a);
   let c = document.createElement("input");
   c.id = "sequence_spinner", c.min = "1", c.max = "999", c.size = 3, c.type = "number", 
   c.alt = "fingering_number", c.value = 1, c.onchange = Sn, Ct(a = document.createElement("td"), "Suggestion", "sequence_prompt"), 
   a.appendChild(c), s.appendChild(a), t.preset_select || (a.style.display = "none"), 
   t.preset && (c.value = t.preset);
   let l = document.createElement("input");
   l.type = "image", l.src = L + "/eye.svg", l.width = "36", l.alt = "View", l.onclick = Nn, 
   (a = document.createElement("td")).appendChild(l), s.appendChild(a), t.hide_view && (a.style.display = "none");
   let u = document.createElement("input");
   u.type = "image", u.src = L + "/print.svg", u.width = "36", u.alt = "Print...", 
   u.onclick = In, (a = document.createElement("td")).appendChild(u), s.appendChild(a), 
   t.hide_print && (a.style.display = "none"), a = document.createElement("td");
   let f = document.createElement("input");
   f.type = "checkbox", f.value = "annotated", f.checked = Q, f.id = "view_annotated", 
   f.onclick = _t;
   let d = document.createElement("label");
   d.htmlFor = "view_annotated", d.appendChild(document.createTextNode("Annotated")), 
   a.appendChild(f), t.hide_annotated && (a.style.display = "none"), a.appendChild(d), 
   s.appendChild(a), t.hide_annotated && (a.style.display = "none");
   let p = document.createElement("input");
   p.type = "image", p.src = L + "/reload.svg", p.width = "36", p.alt = "reset", p.onclick = rt, 
   (a = document.createElement("td")).appendChild(p), s.appendChild(a), t.hide_reset && (a.style.display = "none");
   let h = document.createElement("input");
   h.id = "copy_fingerings_button", h.type = "image", h.src = L + "/clipboard.svg", 
   h.width = "36", h.alt = "copy", (a = document.createElement("td")).appendChild(h), 
   s.appendChild(a), t.hide_copy ? h.style.display = "none" : new Clipboard("#copy_fingerings_button", {
    text: tt
   });
   let m = document.createElement("input");
   m.type = "image", m.src = L + "/paperclip.svg", m.width = "36", m.alt = "paste", 
   m.onclick = nt, (a = document.createElement("td")).appendChild(m), s.appendChild(a), 
   t.hide_paste && (m.style.display = "none");
   let g = document.createElement("input");
   g.type = "image", g.src = L + "/globe.svg", g.width = "36", g.alt = "URL", g.onclick = yt, 
   (a = document.createElement("td")).appendChild(g), s.appendChild(a), t.url_input || (g.style.display = "none");
   let y = document.createElement("input");
   y.setAttribute("type", "file"), y.setAttribute("accept", "text/vnd.abc"), y.onchange = vt, 
   y.setAttribute("id", "file_input"), (a = document.createElement("td")).appendChild(y), 
   s.appendChild(a), t.file_input || (y.style.display = "none");
   let _ = document.createElement("input");
   _.type = "image", _.src = L + "/tags.svg", _.alt = "Metadata...", _.width = "36", 
   _.onclick = ct, (a = document.createElement("td")).appendChild(_), s.appendChild(a), 
   t.hide_metadata && (_.style.display = "none");
   let A = document.createElement("input");
   A.type = "image", A.src = L + "/zoom-out.svg", A.alt = "Zoom In", A.width = "36", 
   A.onclick = ut, (a = document.createElement("td")).appendChild(A), s.appendChild(a);
   let b = document.createElement("input");
   b.type = "image", b.src = L + "/zoom-in.svg", b.alt = "Zoom In", b.width = "36", 
   b.onclick = ft, (a = document.createElement("td")).appendChild(b), s.appendChild(a);
   let x = document.createElement("input");
   x.type = "image", x.src = L + "/cog.svg", x.alt = "Preferences...", x.width = "36", 
   x.onclick = at, (a = document.createElement("td")).appendChild(x), s.appendChild(a), 
   t.hide_prefs && (x.style.display = "none");
   let w = document.createElement("input");
   w.type = "image", w.src = L + "/info.svg", w.alt = "Help", w.width = "36", w.onclick = ot, 
   (a = document.createElement("td")).appendChild(w), s.appendChild(a), Downloadify.create("downloadify", {
    filename: function() {
     return v;
    },
    data: Mn,
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
    swf: V + "/downloadify.swf",
    downloadImage: e,
    width: "36",
    height: "36",
    append: !1
   }), Nt(), j = !0;
  }(), function() {
   Je("preset_preference", localStorage.getItem("preset_preference")), Je("output", localStorage.getItem("output")), 
   Je("restore", localStorage.getItem("restore")), Je("keypad", localStorage.getItem("keypad"));
   let e = localStorage.getItem("measure_number_interval");
   void 0 !== e && "" !== e || (e = z), Ge("measure_number_interval", e), Ge("default_authority", localStorage.getItem("default_authority")), 
   Ge("default_authority_year", localStorage.getItem("default_authority_year")), Ge("default_transcriber", localStorage.getItem("default_transcriber"));
  }(), !(i = document.getElementById(ce).value)) {
   let e = Ve("default_url");
   e && (gt(e), i = document.getElementById(ce).value);
  }
  d = !0, i && (_ = i.split(""), m = He(i), Ye(), vn(), bn(o = E[0][0][0]), dn()), 
  bt(), $(function() {
   FastClick.attach(document.body);
  });
 }
 function mn(e) {
  console.log("Processing note click....");
  let t = e.getAttribute("class");
  console.log("Click " + t);
  let n = t.split("_")[1];
  if (n in T) {
   let e = T[n];
   Ot("process_note_click", e), bn(e), o = e;
  }
 }
 function gn() {
  sn();
  let e = "";
  o.preset_fingering && (e += "Preset (recommended) fingering: " + o.get_preset_fingering() + "\n\n"), 
  e += "Please enter a fingering string for the selected note.";
  let t = o.fingering, n = window.prompt(e, t);
  try {
   if (null === n) return;
   n = (n = n.replace(X, "")).replace(H, ""), rn(Abcdf_Parser.parse(n)), Zt(), bn(o);
  } catch (e) {
   alert("Bad abcDF parse of fingering string: " + e.message + e.stack);
  }
 }
 function yn(e) {
  console.log("Processing note double-click...."), mn(e), gn();
 }
 function vn() {
  let e = new Rt(), t = document.getElementById(me), n = document.getElementById(ge);
  t.align = "center", s = new abc2svg.Abc(e), r = "", s.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  n.innerHTML = "", O = [];
  try {
   i && s.tosvg(v, i);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   i && (t.innerHTML = r, function() {
    let e, t, n, r, i;
    for (let r = 0; r < k.length; r++) t = (e = k[r]).line, n = e.staff, t in E || (E[t] = [], 
    E[t][0] = [], E[t][1] = []), E[t][n].push(e);
    for (t = 0; t < E.length; t++) for (n = 0; n < 2; n++) E[t][n].sort(Qt);
    for (n = 0; n < 2; n++) for (t = 0; t < E.length; t++) {
     let e = E[t][n];
     for (let t = 0; t < e.length; t++) r = e[t], i ? (i.next_note = r, r.prior_note = i, 
     i = r) : (i = r, r.prior_note = void 0);
    }
    r.next_note = void 0;
   }(), function() {
    let e;
    for (e in B) B.hasOwnProperty(e) && I.push(e);
    I.sort(function(e, t) {
     return parseInt(e) - parseInt(t);
    });
   }(), S = !0, C = 0, et(), Zt());
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
 }
 function _n(e, t) {
  let n, r = document.getElementsByClassName(e), i = r.length;
  for (;--i >= 0; ) (n = r[i]).setAttribute("color", t);
 }
 function An(e) {
  let t, n = R.length;
  for (t = 0; t < n; t++) _n(R[t], e);
 }
 function bn(e) {
  let t = e.fingered_start;
  0 != R.length && (An("black"), R = []), R.push("e_" + t), F ? 0 === e.staff ? An("dodgerblue") : An("red") : 1 === e.staff ? An("dodgerblue") : An("red");
  let n = "line_" + e.line, r = document.getElementById(n);
  if (!function(e) {
   let t = $(e), n = $(window), r = document.getElementById(pe), i = n.scrollTop(), s = i + n.height() - r.offsetHeight, o = t.offset().top;
   return o + t.height() <= s && o >= i;
  }(r)) {
   r.scrollIntoView(!1);
   let e = document.getElementById(pe), t = document.body.scrollTop;
   window.scrollTo(0, t + e.offsetHeight);
  }
 }
 function xn(e) {
  e || (e = i);
  let t = e.split("\n");
  for (let e = 0; e < t.length; e++) {
   let n = t[e];
   if (/^\s*X:/.test(n)) {
    let e = n.split(":");
    return 2 != e.length ? "" : e[1].trim();
   }
  }
  return "";
 }
 function wn(e) {
  let t = [];
  e.fingering && (t = st(e.fingering));
  let n = e.fingering || "";
  for (let r = t.length; r < e.size; r++) n += "x";
  return n += e.phrase_break;
 }
 function Cn(e) {
  if (e.grace) return wn(e);
  let t = M[e.staff][e.time], n = qt(t);
  if (t.length - n < 2) return wn(e);
  t.sort(Qt);
  let r = 0, i = t[0];
  for (;i.grace; ) i = t[++r];
  if (e !== i) return "";
  let s = Yt(t), o = "";
  for (let e = 0; e < s.length; e++) s[e] ? o += s[e] : o += "x";
  return o;
 }
 function kn(e, t) {
  let n = [], r = t, i = e.split("");
  for (let e = 0; e < i.length; e++) {
   let t = i[e];
   t.match(J) ? t !== r && (n.push(t), r = t) : n.push(t);
  }
  return n.join("");
 }
 function En(e, t) {
  let n = E[t][e], r = "";
  for (let e = 0; e < n.length; e++) {
   r += Cn(n[e]);
  }
  return r;
 }
 function Bn(e, t) {
  let n = W.exec(e);
  return n && n[1] ? n[1] : t;
 }
 function Tn() {
  let e, t = "", n = "", r = nn(0), i = nn(1);
  for (let e = 0; e < E.length; e++) {
   let s = En(0, e);
   if (s && (r = Bn(s = kn(s, r), r), t += s, e < E.length - 1 && (t += "&")), E[e][1]) {
    let t = En(1, e);
    t && (i = Bn(t = kn(t, i), i), n += t, e < E.length - 1 && (n += "&"));
   }
  }
  return e = t + "@" + n;
 }
 function In() {
  console.log("Print that score.");
  let e = window.open("", "print_window");
  e.document.write(r), e.document.close(), e.focus(), e.print(), e.close();
 }
 function Sn() {
  document.getElementById(ce).value = i, Ie(), i = document.getElementById(ce).value, 
  _ = i.split(""), vn(), bn(o = E[0][0][0]), dn();
 }
 function Mn() {
  let e, t;
  return t = fn(Q ? e = $t() : i, !0);
 }
 function Nn() {
  let e = Mn();
  window.open().document.write("<pre>" + e + "</pre>");
 }
 function On() {
  return Tn();
 }
 function Dn(e) {
  let t = function(e) {
   try {
    Abcdf_Parser.parse(e);
   } catch (e) {
    return "Bad abcDF parse of string: " + e.message + e.stack;
   }
   let t = 0, n = Ve("validate");
   if ("complete" === n) t = e.split("x").length - 1; else if ("none" === n) t = 0; else if ("auto" === n) return "Validation of autofill is not yet implemented.";
   return 1 === t ? "One note is missing a fingering annotation." : t > 1 ? t + " notes are missing fingering annotations." : "";
  }(e);
  return !t || (alert(t), !1);
 }
 function Fn() {
  let e = Q;
  Q = !1;
  let t = Mn();
  return Q = e, t;
 }
 return this.renderUI = function(e) {
  !function(e) {
   t || (t = e).experiment_id || (t.experiment_id = "");
  }(e), hn();
  let n = Ve("qualtrics");
  n && (n.disableNextButton(), n.disablePreviousButton());
 }, this.getXValue = xn, this.getAuthority = function() {
  return Ve("include_pii") ? Fe("authority") : "";
 }, this.getAuthorityYear = function() {
  return Fe("authority_year");
 }, this.getTranscriber = function() {
  return Ve("include_pii") ? Fe("transcriber") : "";
 }, this.getComments = function() {
  return Fe("comments");
 }, this.getEnteredCollection = On, this.getEnteredAbcDF = On, this.getEnteredAbcD = Fn, 
 this.getValidatedCollection = function() {
  let e = Tn();
  return Dn(e) ? e : "";
 }, this.getValidatedAbcD = function() {
  if (Dn(Tn())) {
   let e = Mn();
   return /^\s*X:/m.test(e) ? /^% abcDidactyl/m.test(e) ? e : (alert("File is not valid abcD."), 
   "") : (alert("File is not valid abc."), "");
  }
  return "";
 }, this.setEnteredCollection = function(e) {
  o = E[0][0][0];
  let t = Ue(), n = Re(!0);
  n.sequence = e, Ze(De(t), n), Zt(), bn(o);
 }, this.handleKeys = dn, this.unhandleKeys = pn, this.stopAutoSaving = function() {
  g && clearInterval(g);
 }, this;
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
 }(function(o, a) {
  function c(e, t) {
   return (null === e || typeof e in x) && e === t;
  }
  function l(t, n) {
   var r;
   return function() {
    r || (r = b.a.setTimeout(function() {
     r = e, t();
    }, n));
   };
  }
  function u(e, t) {
   var n;
   return function() {
    clearTimeout(n), n = b.a.setTimeout(e, t);
   };
  }
  function f(e, t) {
   t && t !== w ? "beforeChange" === t ? this.Kb(e) : this.Ha(e, t) : this.Lb(e);
  }
  function d(e, t) {
   null !== t && t.k && t.k();
  }
  function p(e, t) {
   var n = this.Hc, r = n[T];
   r.R || (this.lb && this.Ma[t] ? (n.Pb(t, e, this.Ma[t]), this.Ma[t] = null, --this.lb) : r.r[t] || n.Pb(t, e, r.s ? {
    ia: e
   } : n.uc(e)));
  }
  function h(e, t, n, r) {
   b.d[e] = {
    init: function(e, i, s, o, a) {
     var c, l;
     return b.m(function() {
      var s = b.a.c(i()), o = !n != !s, u = !l;
      (u || t || o !== c) && (u && b.va.Aa() && (l = b.a.ua(b.f.childNodes(e), !0)), o ? (u || b.f.da(e, b.a.ua(l)), 
      b.eb(r ? r(a, s) : a, e)) : b.f.xa(e), c = o);
     }, null, {
      i: e
     }), {
      controlsDescendantBindings: !0
     };
    }
   }, b.h.ta[e] = !1, b.f.Z[e] = !0;
  }
  var m, g, y, v, _, A, b = void 0 !== o ? o : {};
  b.b = function(e, t) {
   for (var n = e.split("."), r = b, i = 0; i < n.length - 1; i++) r = r[n[i]];
   r[n[n.length - 1]] = t;
  }, b.G = function(e, t, n) {
   e[t] = n;
  }, b.version = "3.4.0", b.b("version", b.version), b.options = {
   deferUpdates: !1,
   useOnlyNativeEvents: !1
  }, b.a = function() {
   function o(e, t) {
    for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
   }
   function a(e, t) {
    if (t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
   }
   function c(e, t) {
    return e.__proto__ = t, e;
   }
   function l(e, t, n, r) {
    var i = e[t].match(g) || [];
    b.a.q(n.match(g), function(e) {
     b.a.pa(i, e, r);
    }), e[t] = i.join(" ");
   }
   var u = {
    __proto__: []
   } instanceof Array, f = "function" == typeof Symbol, d = {}, p = {};
   d[r && /Firefox\/2/i.test(r.userAgent) ? "KeyboardEvent" : "UIEvents"] = [ "keyup", "keydown", "keypress" ], 
   d.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), 
   o(d, function(e, t) {
    if (t.length) for (var n = 0, r = t.length; n < r; n++) p[t[n]] = e;
   });
   var h = {
    propertychange: !0
   }, m = n && function() {
    for (var t = 3, r = n.createElement("div"), i = r.getElementsByTagName("i"); r.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e", 
    i[0]; ) ;
    return 4 < t ? t : e;
   }(), g = /\S+/g;
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
     var n = b.a.o(e, t);
     0 < n ? e.splice(n, 1) : 0 === n && e.shift();
    },
    Tb: function(e) {
     for (var t = [], n = 0, r = (e = e || []).length; n < r; n++) 0 > b.a.o(t, e[n]) && t.push(e[n]);
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
     var r = b.a.o(b.a.zb(e), t);
     0 > r ? n && e.push(t) : n || e.splice(r, 1);
    },
    ka: u,
    extend: a,
    Xa: c,
    Ya: u ? c : a,
    D: o,
    Ca: function(e, t) {
     if (!e) return e;
     var n, r = {};
     for (n in e) e.hasOwnProperty(n) && (r[n] = t(e[n], n, e));
     return r;
    },
    ob: function(e) {
     for (;e.firstChild; ) b.removeNode(e.firstChild);
    },
    jc: function(e) {
     for (var t = ((e = b.a.V(e))[0] && e[0].ownerDocument || n).createElement("div"), r = 0, i = e.length; r < i; r++) t.appendChild(b.$(e[r]));
     return t;
    },
    ua: function(e, t) {
     for (var n = 0, r = e.length, i = []; n < r; n++) {
      var s = e[n].cloneNode(!0);
      i.push(t ? b.$(s) : s);
     }
     return i;
    },
    da: function(e, t) {
     if (b.a.ob(e), t) for (var n = 0, r = t.length; n < r; n++) e.appendChild(t[n]);
    },
    qc: function(e, t) {
     var n = e.nodeType ? [ e ] : e;
     if (0 < n.length) {
      for (var r = n[0], i = r.parentNode, s = 0, o = t.length; s < o; s++) i.insertBefore(t[s], r);
      for (s = 0, o = n.length; s < o; s++) b.removeNode(n[s]);
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
     return b.a.Mc(e, e.ownerDocument.documentElement);
    },
    Qb: function(e) {
     return !!b.a.Sb(e, b.a.nb);
    },
    A: function(e) {
     return e && e.tagName && e.tagName.toLowerCase();
    },
    Wb: function(e) {
     return b.onError ? function() {
      try {
       return e.apply(this, arguments);
      } catch (e) {
       throw b.onError && b.onError(e), e;
      }
     } : e;
    },
    setTimeout: function(e, t) {
     return setTimeout(b.a.Wb(e), t);
    },
    $b: function(e) {
     setTimeout(function() {
      throw b.onError && b.onError(e), e;
     }, 0);
    },
    p: function(e, t, n) {
     var r = b.a.Wb(n);
     if (n = m && h[t], b.options.useOnlyNativeEvents || n || !i) if (n || "function" != typeof e.addEventListener) {
      if (void 0 === e.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
      var s = function(t) {
       r.call(e, t);
      }, o = "on" + t;
      e.attachEvent(o, s), b.a.F.oa(e, function() {
       e.detachEvent(o, s);
      });
     } else e.addEventListener(t, r, !1); else i(e).bind(t, r);
    },
    Da: function(e, r) {
     if (!e || !e.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
     var s;
     if (s = !("input" !== b.a.A(e) || !e.type || "click" != r.toLowerCase()) && ("checkbox" == (s = e.type) || "radio" == s), 
     b.options.useOnlyNativeEvents || !i || s) if ("function" == typeof n.createEvent) {
      if ("function" != typeof e.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
      (s = n.createEvent(p[r] || "HTMLEvents")).initEvent(r, !0, !0, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), 
      e.dispatchEvent(s);
     } else if (s && e.click) e.click(); else {
      if (void 0 === e.fireEvent) throw Error("Browser doesn't support triggering events");
      e.fireEvent("on" + r);
     } else i(e).trigger(r);
    },
    c: function(e) {
     return b.H(e) ? e() : e;
    },
    zb: function(e) {
     return b.H(e) ? e.t() : e;
    },
    bb: function(e, t, n) {
     var r;
     t && ("object" == typeof e.classList ? (r = e.classList[n ? "add" : "remove"], b.a.q(t.match(g), function(t) {
      r.call(e.classList, t);
     })) : "string" == typeof e.className.baseVal ? l(e.className, "baseVal", t, n) : l(e, "className", t, n));
    },
    Za: function(t, n) {
     var r = b.a.c(n);
     null !== r && r !== e || (r = "");
     var i = b.f.firstChild(t);
     !i || 3 != i.nodeType || b.f.nextSibling(i) ? b.f.da(t, [ t.ownerDocument.createTextNode(r) ]) : i.data = r, 
     b.a.Rc(t);
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
     e = b.a.c(e), t = b.a.c(t);
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
     for (var n = b.a.V(e.getElementsByTagName("input")).concat(b.a.V(e.getElementsByTagName("textarea"))), r = "string" == typeof t ? function(e) {
      return e.name === t;
     } : function(e) {
      return t.test(e.name);
     }, i = [], s = n.length - 1; 0 <= s; s--) r(n[s]) && i.push(n[s]);
     return i;
    },
    ed: function(e) {
     return "string" == typeof e && (e = b.a.$a(e)) ? s && s.parse ? s.parse(e) : new Function("return " + e)() : null;
    },
    Eb: function(e, t, n) {
     if (!s || !s.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
     return s.stringify(b.a.c(e), t, n);
    },
    fd: function(e, t, r) {
     var i = (r = r || {}).params || {}, s = r.includeFields || this.cc, a = e;
     if ("object" == typeof e && "form" === b.a.A(e)) {
      a = e.action;
      for (var c = s.length - 1; 0 <= c; c--) for (var l = b.a.ec(e, s[c]), u = l.length - 1; 0 <= u; u--) i[l[u].name] = l[u].value;
     }
     t = b.a.c(t);
     var f = n.createElement("form");
     for (var d in f.style.display = "none", f.action = a, f.method = "post", t) (e = n.createElement("input")).type = "hidden", 
     e.name = d, e.value = b.a.Eb(b.a.c(t[d])), f.appendChild(e);
     o(i, function(e, t) {
      var r = n.createElement("input");
      r.type = "hidden", r.name = e, r.value = t, f.appendChild(r);
     }), n.body.appendChild(f), r.submitter ? r.submitter(f) : f.submit(), setTimeout(function() {
      f.parentNode.removeChild(f);
     }, 0);
    }
   };
  }(), b.b("utils", b.a), b.b("utils.arrayForEach", b.a.q), b.b("utils.arrayFirst", b.a.Sb), 
  b.b("utils.arrayFilter", b.a.Ka), b.b("utils.arrayGetDistinctValues", b.a.Tb), b.b("utils.arrayIndexOf", b.a.o), 
  b.b("utils.arrayMap", b.a.fb), b.b("utils.arrayPushAll", b.a.ra), b.b("utils.arrayRemoveItem", b.a.La), 
  b.b("utils.extend", b.a.extend), b.b("utils.fieldsIncludedWithJsonPost", b.a.cc), 
  b.b("utils.getFormFields", b.a.ec), b.b("utils.peekObservable", b.a.zb), b.b("utils.postJson", b.a.fd), 
  b.b("utils.parseJson", b.a.ed), b.b("utils.registerEventHandler", b.a.p), b.b("utils.stringifyJson", b.a.Eb), 
  b.b("utils.range", b.a.hd), b.b("utils.toggleDomNodeCssClass", b.a.bb), b.b("utils.triggerEvent", b.a.Da), 
  b.b("utils.unwrapObservable", b.a.c), b.b("utils.objectForEach", b.a.D), b.b("utils.addOrRemoveItem", b.a.pa), 
  b.b("utils.setTextContent", b.a.Za), b.b("unwrap", b.a.c), Function.prototype.bind || (Function.prototype.bind = function(e) {
   var t = this;
   if (1 === arguments.length) return function() {
    return t.apply(e, arguments);
   };
   var n = Array.prototype.slice.call(arguments, 1);
   return function() {
    var r = n.slice(0);
    return r.push.apply(r, arguments), t.apply(e, r);
   };
  }), b.a.e = new function() {
   function t(t, s) {
    var o = t[r];
    if (!o || "null" === o || !i[o]) {
     if (!s) return e;
     o = t[r] = "ko" + n++, i[o] = {};
    }
    return i[o];
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
  }(), b.b("utils.domData", b.a.e), b.b("utils.domData.clear", b.a.e.clear), b.a.F = new function() {
   function t(t, n) {
    var i = b.a.e.get(t, r);
    return i === e && n && (i = [], b.a.e.set(t, r, i)), i;
   }
   function n(e) {
    if (r = t(e, !1)) for (var r = r.slice(0), i = 0; i < r.length; i++) r[i](e);
    if (b.a.e.clear(e), b.a.F.cleanExternalData(e), o[e.nodeType]) for (r = e.firstChild; e = r; ) r = e.nextSibling, 
    8 === e.nodeType && n(e);
   }
   var r = b.a.e.I(), s = {
    1: !0,
    8: !0,
    9: !0
   }, o = {
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
     s && (b.a.La(s, i), 0 == s.length && b.a.e.set(n, r, e));
    },
    $: function(e) {
     if (s[e.nodeType] && (n(e), o[e.nodeType])) {
      var t = [];
      b.a.ra(t, e.getElementsByTagName("*"));
      for (var r = 0, i = t.length; r < i; r++) n(t[r]);
     }
     return e;
    },
    removeNode: function(e) {
     b.$(e), e.parentNode && e.parentNode.removeChild(e);
    },
    cleanExternalData: function(e) {
     i && "function" == typeof i.cleanData && i.cleanData([ e ]);
    }
   };
  }(), b.$ = b.a.F.$, b.removeNode = b.a.F.removeNode, b.b("cleanNode", b.$), b.b("removeNode", b.removeNode), 
  b.b("utils.domNodeDisposal", b.a.F), b.b("utils.domNodeDisposal.addDisposeCallback", b.a.F.oa), 
  b.b("utils.domNodeDisposal.removeDisposeCallback", b.a.F.pc), m = [ 0, "", "" ], 
  _ = {
   thead: g = [ 1, "<table>", "</table>" ],
   tbody: g,
   tfoot: g,
   tr: [ 2, "<table><tbody>", "</tbody></table>" ],
   td: y = [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
   th: y,
   option: v = [ 1, "<select multiple='multiple'>", "</select>" ],
   optgroup: v
  }, A = 8 >= b.a.C, b.a.ma = function(e, r) {
   var s;
   if (i) {
    if (i.parseHTML) s = i.parseHTML(e, r) || []; else if ((s = i.clean([ e ], r)) && s[0]) {
     for (var o = s[0]; o.parentNode && 11 !== o.parentNode.nodeType; ) o = o.parentNode;
     o.parentNode && o.parentNode.removeChild(o);
    }
   } else {
    (s = r) || (s = n), o = s.parentWindow || s.defaultView || t;
    var a, c = b.a.$a(e).toLowerCase(), l = s.createElement("div");
    for (a = (c = c.match(/^<([a-z]+)[ >]/)) && _[c[1]] || m, c = a[0], a = "ignored<div>" + a[1] + e + a[2] + "</div>", 
    "function" == typeof o.innerShiv ? l.appendChild(o.innerShiv(a)) : (A && s.appendChild(l), 
    l.innerHTML = a, A && l.parentNode.removeChild(l)); c--; ) l = l.lastChild;
    s = b.a.V(l.lastChild.childNodes);
   }
   return s;
  }, b.a.Cb = function(t, n) {
   if (b.a.ob(t), null !== (n = b.a.c(n)) && n !== e) if ("string" != typeof n && (n = n.toString()), 
   i) i(t).html(n); else for (var r = b.a.ma(n, t.ownerDocument), s = 0; s < r.length; s++) t.appendChild(r[s]);
  }, b.b("utils.parseHtmlFragment", b.a.ma), b.b("utils.setHtml", b.a.Cb), b.M = function() {
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
      if (t) if (8 == t.nodeType) null != (r = b.M.lc(t.nodeValue)) && n.push({
       Lc: t,
       cd: r
      }); else if (1 == t.nodeType) for (var r = 0, i = t.childNodes, s = i.length; r < s; r++) e(i[r], n);
     }(e, n);
     for (var r = 0, i = n.length; r < i; r++) {
      var s = n[r].Lc, o = [ s ];
      t && b.a.ra(o, t), b.M.xc(n[r].cd, o), s.nodeValue = "", s.parentNode && s.parentNode.removeChild(s);
     }
    },
    lc: function(e) {
     return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null;
    }
   };
  }(), b.b("memoization", b.M), b.b("memoization.memoize", b.M.wb), b.b("memoization.unmemoize", b.M.xc), 
  b.b("memoization.parseMemoText", b.M.lc), b.b("memoization.unmemoizeDomNodeAndDescendants", b.M.yc), 
  b.Y = function() {
   function e() {
    if (s) for (var e, t = s, n = 0; a < s; ) if (e = i[a++]) {
     if (a > t) {
      if (5e3 <= ++n) {
       a = s, b.a.$b(Error("'Too much recursion' after processing " + n + " task groups."));
       break;
      }
      t = s;
     }
     try {
      e();
     } catch (e) {
      b.a.$b(e);
     }
    }
   }
   function r() {
    e(), a = s = i.length = 0;
   }
   var i = [], s = 0, o = 1, a = 0;
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
     return s || b.Y.scheduler(r), i[s++] = e, o++;
    },
    cancel: function(e) {
     (e -= o - s) >= a && e < s && (i[e] = null);
    },
    resetForTesting: function() {
     var e = s - a;
     return a = s = i.length = 0, e;
    },
    md: e
   };
  }(), b.b("tasks", b.Y), b.b("tasks.schedule", b.Y.Wa), b.b("tasks.runEarly", b.Y.md), 
  b.ya = {
   throttle: function(e, t) {
    e.throttleEvaluation = t;
    var n = null;
    return b.B({
     read: e,
     write: function(r) {
      clearTimeout(n), n = b.a.setTimeout(function() {
       e(r);
      }, t);
     }
    });
   },
   rateLimit: function(e, t) {
    var n, r, i;
    "number" == typeof t ? n = t : (n = t.timeout, r = t.method), e.cb = !1, i = "notifyWhenChangesStop" == r ? u : l, 
    e.Ta(function(e) {
     return i(e, n);
    });
   },
   deferred: function(t, n) {
    if (!0 !== n) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
    t.cb || (t.cb = !0, t.Ta(function(n) {
     var r;
     return function() {
      b.Y.cancel(r), r = b.Y.Wa(n), t.notifySubscribers(e, "dirty");
     };
    }));
   },
   notify: function(e, t) {
    e.equalityComparer = "always" == t ? null : c;
   }
  };
  var x = {
   undefined: 1,
   boolean: 1,
   number: 1,
   string: 1
  };
  b.b("extenders", b.ya), b.vc = function(e, t, n) {
   this.ia = e, this.gb = t, this.Kc = n, this.R = !1, b.G(this, "dispose", this.k);
  }, b.vc.prototype.k = function() {
   this.R = !0, this.Kc();
  }, b.J = function() {
   b.a.Ya(this, C), C.rb(this);
  };
  var w = "change", C = {
   rb: function(e) {
    e.K = {}, e.Nb = 1;
   },
   X: function(e, t, n) {
    var r = this;
    n = n || w;
    var i = new b.vc(r, t ? e.bind(t) : e, function() {
     b.a.La(r.K[n], i), r.Ia && r.Ia(n);
    });
    return r.sa && r.sa(n), r.K[n] || (r.K[n] = []), r.K[n].push(i), i;
   },
   notifySubscribers: function(e, t) {
    if ((t = t || w) === w && this.zc(), this.Pa(t)) try {
     b.l.Ub();
     for (var n, r = this.K[t].slice(0), i = 0; n = r[i]; ++i) n.R || n.gb(e);
    } finally {
     b.l.end();
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
    var t, n, r, i = this, s = b.H(i);
    i.Ha || (i.Ha = i.notifySubscribers, i.notifySubscribers = f);
    var o = e(function() {
     i.Mb = !1, s && r === i && (r = i()), t = !1, i.tb(n, r) && i.Ha(n = r);
    });
    i.Lb = function(e) {
     i.Mb = t = !0, r = e, o();
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
    return b.a.D(this.K, function(e, n) {
     "dirty" !== e && (t += n.length);
    }), t;
   },
   tb: function(e, t) {
    return !this.equalityComparer || !this.equalityComparer(e, t);
   },
   extend: function(e) {
    var t = this;
    return e && b.a.D(e, function(e, n) {
     var r = b.ya[e];
     "function" == typeof r && (t = r(t, n) || t);
    }), t;
   }
  };
  b.G(C, "subscribe", C.X), b.G(C, "extend", C.extend), b.G(C, "getSubscriptionsCount", C.Sc), 
  b.a.ka && b.a.Xa(C, Function.prototype), b.J.fn = C, b.hc = function(e) {
   return null != e && "function" == typeof e.X && "function" == typeof e.notifySubscribers;
  }, b.b("subscribable", b.J), b.b("isSubscribable", b.hc), b.va = b.l = function() {
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
      if (!b.hc(e)) throw Error("Only subscribable things can act as dependencies");
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
  }(), b.b("computedContext", b.va), b.b("computedContext.getDependenciesCount", b.va.Aa), 
  b.b("computedContext.isInitial", b.va.Sa), b.b("ignoreDependencies", b.qd = b.l.w);
  var k = b.a.Yb("_latestValue");
  b.N = function(e) {
   function t() {
    return 0 < arguments.length ? (t.tb(t[k], arguments[0]) && (t.ga(), t[k] = arguments[0], 
    t.fa()), this) : (b.l.oc(t), t[k]);
   }
   return t[k] = e, b.a.ka || b.a.extend(t, b.J.fn), b.J.fn.rb(t), b.a.Ya(t, E), b.options.deferUpdates && b.ya.deferred(t, !0), 
   t;
  };
  var E = {
   equalityComparer: c,
   t: function() {
    return this[k];
   },
   fa: function() {
    this.notifySubscribers(this[k]);
   },
   ga: function() {
    this.notifySubscribers(this[k], "beforeChange");
   }
  };
  b.a.ka && b.a.Xa(E, b.J.fn);
  var B = b.N.gd = "__ko_proto__";
  E[B] = b.N, b.Oa = function(t, n) {
   return null !== t && t !== e && t[B] !== e && (t[B] === n || b.Oa(t[B], n));
  }, b.H = function(e) {
   return b.Oa(e, b.N);
  }, b.Ba = function(e) {
   return !!("function" == typeof e && e[B] === b.N || "function" == typeof e && e[B] === b.B && e.Vc);
  }, b.b("observable", b.N), b.b("isObservable", b.H), b.b("isWriteableObservable", b.Ba), 
  b.b("isWritableObservable", b.Ba), b.b("observable.fn", E), b.G(E, "peek", E.t), 
  b.G(E, "valueHasMutated", E.fa), b.G(E, "valueWillMutate", E.ga), b.la = function(e) {
   if ("object" != typeof (e = e || []) || !("length" in e)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
   return e = b.N(e), b.a.Ya(e, b.la.fn), e.extend({
    trackArrayChanges: !0
   });
  }, b.la.fn = {
   remove: function(e) {
    for (var t = this.t(), n = [], r = "function" != typeof e || b.H(e) ? function(t) {
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
     return 0 <= b.a.o(t, e);
    }) : [];
   },
   destroy: function(e) {
    var t = this.t(), n = "function" != typeof e || b.H(e) ? function(t) {
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
     return 0 <= b.a.o(t, e);
    }) : [];
   },
   indexOf: function(e) {
    var t = this();
    return b.a.o(t, e);
   },
   replace: function(e, t) {
    var n = this.indexOf(e);
    0 <= n && (this.ga(), this.t()[n] = t, this.fa());
   }
  }, b.a.ka && b.a.Xa(b.la.fn, b.N.fn), b.a.q("pop push reverse shift sort splice unshift".split(" "), function(e) {
   b.la.fn[e] = function() {
    var t = this.t();
    this.ga(), this.Vb(t, e, arguments);
    var n = t[e].apply(t, arguments);
    return this.fa(), n === t ? this : n;
   };
  }), b.a.q([ "slice" ], function(e) {
   b.la.fn[e] = function() {
    var t = this();
    return t[e].apply(t, arguments);
   };
  }), b.b("observableArray", b.la), b.ya.trackArrayChanges = function(e, t) {
   function n() {
    if (!i) {
     i = !0;
     var t = e.notifySubscribers;
     e.notifySubscribers = function(e, n) {
      return n && n !== w || ++o, t.apply(this, arguments);
     };
     var n = [].concat(e.t() || []);
     s = null, r = e.X(function(t) {
      var r;
      t = [].concat(t || []), e.Pa("arrayChange") && ((!s || 1 < o) && (s = b.a.ib(n, t, e.hb)), 
      r = s), n = t, s = null, o = 0, r && r.length && e.notifySubscribers(r, "arrayChange");
     });
    }
   }
   if (e.hb = {}, t && "object" == typeof t && b.a.extend(e.hb, t), e.hb.sparse = !0, 
   !e.Vb) {
    var r, i = !1, s = null, o = 0, a = e.sa, c = e.Ia;
    e.sa = function(t) {
     a && a.call(e, t), "arrayChange" === t && n();
    }, e.Ia = function(t) {
     c && c.call(e, t), "arrayChange" !== t || e.Pa("arrayChange") || (r.k(), i = !1);
    }, e.Vb = function(e, t, n) {
     function r(e, t, n) {
      return a[a.length] = {
       status: e,
       value: t,
       index: n
      };
     }
     if (i && !o) {
      var a = [], c = e.length, l = n.length, u = 0;
      switch (t) {
      case "push":
       u = c;

      case "unshift":
       for (t = 0; t < l; t++) r("added", n[t], u + t);
       break;

      case "pop":
       u = c - 1;

      case "shift":
       c && r("deleted", e[u], u);
       break;

      case "splice":
       t = Math.min(Math.max(0, 0 > n[0] ? c + n[0] : n[0]), c), c = 1 === l ? c : Math.min(t + (n[1] || 0), c), 
       l = t + l - 2, u = Math.max(c, l);
       for (var f = [], d = [], p = 2; t < u; ++t, ++p) t < c && d.push(r("deleted", e[t], t)), 
       t < l && f.push(r("added", n[p], t));
       b.a.dc(d, f);
       break;

      default:
       return;
      }
      s = a;
     }
    };
   }
  };
  var T = b.a.Yb("_state");
  b.m = b.B = function(t, n, r) {
   function i() {
    if (0 < arguments.length) {
     if ("function" != typeof s) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
     return s.apply(o.pb, arguments), this;
    }
    return b.l.oc(i), (o.S || o.s && i.Qa()) && i.aa(), o.T;
   }
   if ("object" == typeof t ? r = t : (r = r || {}, t && (r.read = t)), "function" != typeof r.read) throw Error("Pass a function that returns the value of the ko.computed");
   var s = r.write, o = {
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
   return i[T] = o, i.Vc = "function" == typeof s, b.a.ka || b.a.extend(i, b.J.fn), 
   b.J.fn.rb(i), b.a.Ya(i, I), r.pure ? (o.Va = !0, o.s = !0, b.a.extend(i, S)) : r.deferEvaluation && b.a.extend(i, M), 
   b.options.deferUpdates && b.ya.deferred(i, !0), o.i && (o.Fb = !0, o.i.nodeType || (o.i = null)), 
   o.s || r.deferEvaluation || i.aa(), o.i && i.ba() && b.a.F.oa(o.i, o.mb = function() {
    i.k();
   }), i;
  };
  var I = {
   equalityComparer: c,
   Aa: function() {
    return this[T].L;
   },
   Pb: function(e, t, n) {
    if (this[T].Va && t === this) throw Error("A 'pure' computed must not be called recursively");
    this[T].r[e] = n, n.Ga = this[T].L++, n.na = t.Na();
   },
   Qa: function() {
    var e, t, n = this[T].r;
    for (e in n) if (n.hasOwnProperty(e) && (t = n[e]).ia.Uc(t.na)) return !0;
   },
   bd: function() {
    this.Fa && !this[T].Ra && this.Fa();
   },
   ba: function() {
    return this[T].S || 0 < this[T].L;
   },
   ld: function() {
    this.Mb || this.ac();
   },
   uc: function(e) {
    if (e.cb && !this[T].i) {
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
    t && 0 <= t ? (clearTimeout(this[T].bc), this[T].bc = b.a.setTimeout(function() {
     e.aa(!0);
    }, t)) : e.Fa ? e.Fa() : e.aa(!0);
   },
   aa: function(e) {
    var t = this[T], n = t.wa;
    if (!t.Ra && !t.R) {
     if (t.i && !b.a.nb(t.i) || n && n()) {
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
    var n = this[T], r = n.Va ? e : !n.L, i = {
     Hc: this,
     Ma: n.r,
     lb: n.L
    };
    b.l.Ub({
     Gc: i,
     gb: p,
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
     b.l.end(), t.lb && !e.s && b.a.D(t.Ma, d), e.S = !1;
    }
   },
   t: function() {
    var e = this[T];
    return (e.S && !e.L || e.s && this.Qa()) && this.aa(), e.T;
   },
   Ta: function(e) {
    b.J.fn.Ta.call(this, e), this.Fa = function() {
     this.Kb(this[T].T), this[T].S = !0, this.Lb(this);
    };
   },
   k: function() {
    var e = this[T];
    !e.s && e.r && b.a.D(e.r, function(e, t) {
     t.k && t.k();
    }), e.i && e.mb && b.a.F.pc(e.i, e.mb), e.r = null, e.L = 0, e.R = !0, e.S = !1, 
    e.s = !1, e.i = null;
   }
  }, S = {
   sa: function(e) {
    var t = this, n = t[T];
    if (!n.R && n.s && "change" == e) {
     if (n.s = !1, n.S || t.Qa()) n.r = null, n.L = 0, n.S = !0, t.aa(); else {
      var r = [];
      b.a.D(n.r, function(e, t) {
       r[t.Ga] = e;
      }), b.a.q(r, function(e, r) {
       var i = n.r[e], s = t.uc(i.ia);
       s.Ga = r, s.na = i.na, n.r[e] = s;
      });
     }
     n.R || t.notifySubscribers(n.T, "awake");
    }
   },
   Ia: function(t) {
    var n = this[T];
    n.R || "change" != t || this.Pa("change") || (b.a.D(n.r, function(e, t) {
     t.k && (n.r[e] = {
      ia: t.ia,
      Ga: t.Ga,
      na: t.na
     }, t.k());
    }), n.s = !0, this.notifySubscribers(e, "asleep"));
   },
   Na: function() {
    var e = this[T];
    return e.s && (e.S || this.Qa()) && this.aa(), b.J.fn.Na.call(this);
   }
  }, M = {
   sa: function(e) {
    "change" != e && "beforeChange" != e || this.t();
   }
  };
  b.a.ka && b.a.Xa(I, b.J.fn);
  var N = b.N.gd;
  b.m[N] = b.N, I[N] = b.m, b.Xc = function(e) {
   return b.Oa(e, b.m);
  }, b.Yc = function(e) {
   return b.Oa(e, b.m) && e[T] && e[T].Va;
  }, b.b("computed", b.m), b.b("dependentObservable", b.m), b.b("isComputed", b.Xc), 
  b.b("isPureComputed", b.Yc), b.b("computed.fn", I), b.G(I, "peek", I.t), b.G(I, "dispose", I.k), 
  b.G(I, "isActive", I.ba), b.G(I, "getDependenciesCount", I.Aa), b.nc = function(e, t) {
   return "function" == typeof e ? b.m(e, t, {
    pure: !0
   }) : ((e = b.a.extend({}, e)).pure = !0, b.m(e, t));
  }, b.b("pureComputed", b.nc), function() {
   function t(r, i, s) {
    if (s = s || new n(), "object" != typeof (r = i(r)) || null === r || r === e || r instanceof RegExp || r instanceof Date || r instanceof String || r instanceof Number || r instanceof Boolean) return r;
    var o = r instanceof Array ? [] : {};
    return s.save(r, o), function(e, t) {
     if (e instanceof Array) {
      for (var n = 0; n < e.length; n++) t(n);
      "function" == typeof e.toJSON && t("toJSON");
     } else for (n in e) t(n);
    }(r, function(n) {
     var a = i(r[n]);
     switch (typeof a) {
     case "boolean":
     case "number":
     case "string":
     case "function":
      o[n] = a;
      break;

     case "object":
     case "undefined":
      var c = s.get(a);
      o[n] = c !== e ? c : t(a, i, s);
     }
    }), o;
   }
   function n() {
    this.keys = [], this.Ib = [];
   }
   b.wc = function(e) {
    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
    return t(e, function(e) {
     for (var t = 0; b.H(e) && 10 > t; t++) e = e();
     return e;
    });
   }, b.toJSON = function(e, t, n) {
    return e = b.wc(e), b.a.Eb(e, t, n);
   }, n.prototype = {
    save: function(e, t) {
     var n = b.a.o(this.keys, e);
     0 <= n ? this.Ib[n] = t : (this.keys.push(e), this.Ib.push(t));
    },
    get: function(t) {
     return 0 <= (t = b.a.o(this.keys, t)) ? this.Ib[t] : e;
    }
   };
  }(), b.b("toJS", b.wc), b.b("toJSON", b.toJSON), b.j = {
   u: function(t) {
    switch (b.a.A(t)) {
    case "option":
     return !0 === t.__ko__hasDomDataOptionValue__ ? b.a.e.get(t, b.d.options.xb) : 7 >= b.a.C ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;

    case "select":
     return 0 <= t.selectedIndex ? b.j.u(t.options[t.selectedIndex]) : e;

    default:
     return t.value;
    }
   },
   ha: function(t, n, r) {
    switch (b.a.A(t)) {
    case "option":
     switch (typeof n) {
     case "string":
      b.a.e.set(t, b.d.options.xb, e), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__, 
      t.value = n;
      break;

     default:
      b.a.e.set(t, b.d.options.xb, n), t.__ko__hasDomDataOptionValue__ = !0, t.value = "number" == typeof n ? n : "";
     }
     break;

    case "select":
     "" !== n && null !== n || (n = e);
     for (var i, s = -1, o = 0, a = t.options.length; o < a; ++o) if ((i = b.j.u(t.options[o])) == n || "" == i && n === e) {
      s = o;
      break;
     }
     (r || 0 <= s || n === e && 1 < t.size) && (t.selectedIndex = s);
     break;

    default:
     null !== n && n !== e || (n = ""), t.value = n;
    }
   }
  }, b.b("selectExtensions", b.j), b.b("selectExtensions.readValue", b.j.u), b.b("selectExtensions.writeValue", b.j.ha), 
  b.h = function() {
   function e(e) {
    123 === (e = b.a.$a(e)).charCodeAt(0) && (e = e.slice(1, -1));
    var t, n = [], o = e.match(r), a = [], c = 0;
    if (o) {
     o.push(",");
     for (var l, u = 0; l = o[u]; ++u) {
      var f = l.charCodeAt(0);
      if (44 === f) {
       if (0 >= c) {
        n.push(t && a.length ? {
         key: t,
         value: a.join("")
        } : {
         unknown: t || a.join("")
        }), t = c = 0, a = [];
        continue;
       }
      } else if (58 === f) {
       if (!c && !t && 1 === a.length) {
        t = a.pop();
        continue;
       }
      } else 47 === f && u && 1 < l.length ? (f = o[u - 1].match(i)) && !s[f[0]] && ((o = (e = e.substr(e.indexOf(l) + 1)).match(r)).push(","), 
      u = -1, l = "/") : 40 === f || 123 === f || 91 === f ? ++c : 41 === f || 125 === f || 93 === f ? --c : t || a.length || 34 !== f && 39 !== f || (l = l.slice(1, -1));
      a.push(l);
     }
    }
    return n;
   }
   var t = [ "true", "false", "null", "undefined" ], n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, r = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), i = /[\])"'A-Za-z0-9_$]+$/, s = {
    in: 1,
    return: 1,
    typeof: 1
   }, o = {};
   return {
    ta: [],
    ea: o,
    yb: e,
    Ua: function(r, i) {
     function s(e, r) {
      var i;
      if (!u) {
       var f = b.getBindingHandler(e);
       if (f && f.preprocess && !(r = f.preprocess(r, e, s))) return;
       (f = o[e]) && (i = r, i = !(0 <= b.a.o(t, i)) && (null !== (f = i.match(n)) && (f[1] ? "Object(" + f[1] + ")" + f[2] : i)), 
       f = i), f && c.push("'" + e + "':function(_z){" + i + "=_z}");
      }
      l && (r = "function(){return " + r + " }"), a.push("'" + e + "':" + r);
     }
     var a = [], c = [], l = (i = i || {}).valueAccessors, u = i.bindingParams, f = "string" == typeof r ? e(r) : r;
     return b.a.q(f, function(e) {
      s(e.key || e.unknown, e.value);
     }), c.length && s("_ko_property_writers", "{" + c.join(",") + " }"), a.join(",");
    },
    ad: function(e, t) {
     for (var n = 0; n < e.length; n++) if (e[n].key == t) return !0;
     return !1;
    },
    Ea: function(e, t, n, r, i) {
     e && b.H(e) ? !b.Ba(e) || i && e.t() === r || e(r) : (e = t.get("_ko_property_writers")) && e[n] && e[n](r);
    }
   };
  }(), b.b("expressionRewriting", b.h), b.b("expressionRewriting.bindingRewriteValidators", b.h.ta), 
  b.b("expressionRewriting.parseObjectLiteral", b.h.yb), b.b("expressionRewriting.preProcessBindings", b.h.Ua), 
  b.b("expressionRewriting._twoWayBindings", b.h.ea), b.b("jsonExpressionRewriting", b.h), 
  b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", b.h.Ua), function() {
   function e(e) {
    return 8 == e.nodeType && o.test(s ? e.text : e.nodeValue);
   }
   function t(e) {
    return 8 == e.nodeType && a.test(s ? e.text : e.nodeValue);
   }
   function r(n, r) {
    for (var i = n, s = 1, o = []; i = i.nextSibling; ) {
     if (t(i) && 0 == --s) return o;
     o.push(i), e(i) && s++;
    }
    if (!r) throw Error("Cannot find closing comment tag to match: " + n.nodeValue);
    return null;
   }
   function i(e, t) {
    var n = r(e, t);
    return n ? 0 < n.length ? n[n.length - 1].nextSibling : e.nextSibling : null;
   }
   var s = n && "\x3c!--test--\x3e" === n.createComment("test").text, o = s ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, a = s ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, c = {
    ul: !0,
    ol: !0
   };
   b.f = {
    Z: {},
    childNodes: function(t) {
     return e(t) ? r(t) : t.childNodes;
    },
    xa: function(t) {
     if (e(t)) for (var n = 0, r = (t = b.f.childNodes(t)).length; n < r; n++) b.removeNode(t[n]); else b.a.ob(t);
    },
    da: function(t, n) {
     if (e(t)) {
      b.f.xa(t);
      for (var r = t.nextSibling, i = 0, s = n.length; i < s; i++) r.parentNode.insertBefore(n[i], r);
     } else b.a.da(t, n);
    },
    mc: function(t, n) {
     e(t) ? t.parentNode.insertBefore(n, t.nextSibling) : t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
    },
    gc: function(t, n, r) {
     r ? e(t) ? t.parentNode.insertBefore(n, r.nextSibling) : r.nextSibling ? t.insertBefore(n, r.nextSibling) : t.appendChild(n) : b.f.mc(t, n);
    },
    firstChild: function(n) {
     return e(n) ? !n.nextSibling || t(n.nextSibling) ? null : n.nextSibling : n.firstChild;
    },
    nextSibling: function(n) {
     return e(n) && (n = i(n)), n.nextSibling && t(n.nextSibling) ? null : n.nextSibling;
    },
    Tc: e,
    pd: function(e) {
     return (e = (s ? e.text : e.nodeValue).match(o)) ? e[1] : null;
    },
    kc: function(n) {
     if (c[b.a.A(n)]) {
      var r = n.firstChild;
      if (r) do {
       if (1 === r.nodeType) {
        var s, o = null;
        if (s = r.firstChild) do {
         if (o) o.push(s); else if (e(s)) {
          var a = i(s, !0);
          a ? s = a : o = [ s ];
         } else t(s) && (o = [ s ]);
        } while (s = s.nextSibling);
        if (s = o) for (o = r.nextSibling, a = 0; a < s.length; a++) o ? n.insertBefore(s[a], o) : n.appendChild(s[a]);
       }
      } while (r = r.nextSibling);
     }
    }
   };
  }(), b.b("virtualElements", b.f), b.b("virtualElements.allowedBindings", b.f.Z), 
  b.b("virtualElements.emptyNode", b.f.xa), b.b("virtualElements.insertAfter", b.f.gc), 
  b.b("virtualElements.prepend", b.f.mc), b.b("virtualElements.setDomNodeChildren", b.f.da), 
  b.Q = function() {
   this.Fc = {};
  }, b.a.extend(b.Q.prototype, {
   nodeHasBindings: function(e) {
    switch (e.nodeType) {
    case 1:
     return null != e.getAttribute("data-bind") || b.g.getComponentNameForNode(e);

    case 8:
     return b.f.Tc(e);

    default:
     return !1;
    }
   },
   getBindings: function(e, t) {
    var n = (n = this.getBindingsString(e, t)) ? this.parseBindingsString(n, t, e) : null;
    return b.g.Ob(n, e, t, !1);
   },
   getBindingAccessors: function(e, t) {
    var n = (n = this.getBindingsString(e, t)) ? this.parseBindingsString(n, t, e, {
     valueAccessors: !0
    }) : null;
    return b.g.Ob(n, e, t, !0);
   },
   getBindingsString: function(e) {
    switch (e.nodeType) {
    case 1:
     return e.getAttribute("data-bind");

    case 8:
     return b.f.pd(e);

    default:
     return null;
    }
   },
   parseBindingsString: function(e, t, n, r) {
    try {
     var i, s = this.Fc, o = e + (r && r.valueAccessors || "");
     if (!(i = s[o])) {
      var a, c = "with($context){with($data||{}){return{" + b.h.Ua(e, r) + "}}}";
      a = new Function("$context", "$element", c), i = s[o] = a;
     }
     return i(t, n);
    } catch (t) {
     throw t.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + t.message, 
     t;
    }
   }
  }), b.Q.instance = new b.Q(), b.b("bindingProvider", b.Q), function() {
   function n(e) {
    return function() {
     return e;
    };
   }
   function r(e) {
    return e();
   }
   function s(e) {
    return b.a.Ca(b.l.w(e), function(t, n) {
     return function() {
      return e()[n];
     };
    });
   }
   function o(e, t, r) {
    return "function" == typeof e ? s(e.bind(null, t, r)) : b.a.Ca(e, n);
   }
   function a(e, t) {
    return s(this.getBindings.bind(this, e, t));
   }
   function c(e, t, n) {
    var r, i = b.f.firstChild(t), s = b.Q.instance, o = s.preprocessNode;
    if (o) {
     for (;r = i; ) i = b.f.nextSibling(r), o.call(s, r);
     i = b.f.firstChild(t);
    }
    for (;r = i; ) i = b.f.nextSibling(r), l(e, r, n);
   }
   function l(e, t, n) {
    var r = !0, i = 1 === t.nodeType;
    i && b.f.kc(t), (i && n || b.Q.instance.nodeHasBindings(t)) && (r = u(t, null, e, n).shouldBindDescendants), 
    r && !d[b.a.A(t)] && c(e, t, !i);
   }
   function u(t, n, i, s) {
    var o, c, l = b.a.e.get(t, p);
    if (!n) {
     if (l) throw Error("You cannot apply bindings multiple times to the same element.");
     b.a.e.set(t, p, !0);
    }
    if (!l && s && b.tc(t, i), n && "function" != typeof n) o = n; else {
     var u = b.Q.instance, f = u.getBindingAccessors || a, d = b.B(function() {
      return (o = n ? n(i, t) : f.call(u, t, i)) && i.P && i.P(), o;
     }, null, {
      i: t
     });
     o && d.ba() || (d = null);
    }
    if (o) {
     var h = d ? function(e) {
      return function() {
       return r(d()[e]);
      };
     } : function(e) {
      return o[e];
     }, m = function() {
      return b.a.Ca(d ? d() : o, r);
     };
     m.get = function(e) {
      return o[e] && r(h(e));
     }, m.has = function(e) {
      return e in o;
     }, s = function(e) {
      var t = [], n = {}, r = [];
      return b.a.D(e, function i(s) {
       if (!n[s]) {
        var o = b.getBindingHandler(s);
        o && (o.after && (r.push(s), b.a.q(o.after, function(t) {
         if (e[t]) {
          if (-1 !== b.a.o(r, t)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + r.join(", "));
          i(t);
         }
        }), r.length--), t.push({
         key: s,
         fc: o
        })), n[s] = !0;
       }
      }), t;
     }(o), b.a.q(s, function(n) {
      var r = n.fc.init, s = n.fc.update, a = n.key;
      if (8 === t.nodeType && !b.f.Z[a]) throw Error("The binding '" + a + "' cannot be used with virtual elements");
      try {
       "function" == typeof r && b.l.w(function() {
        var n = r(t, h(a), m, i.$data, i);
        if (n && n.controlsDescendantBindings) {
         if (c !== e) throw Error("Multiple bindings (" + c + " and " + a + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
         c = a;
        }
       }), "function" == typeof s && b.B(function() {
        s(t, h(a), m, i.$data, i);
       }, null, {
        i: t
       });
      } catch (e) {
       throw e.message = 'Unable to process binding "' + a + ": " + o[a] + '"\nMessage: ' + e.message, 
       e;
      }
     });
    }
    return {
     shouldBindDescendants: c === e
    };
   }
   function f(e) {
    return e && e instanceof b.U ? e : new b.U(e);
   }
   b.d = {};
   var d = {
    script: !0,
    textarea: !0,
    template: !0
   };
   b.getBindingHandler = function(e) {
    return b.d[e];
   }, b.U = function(t, n, r, i) {
    var s, o = this, a = "function" == typeof t && !b.H(t), c = b.B(function() {
     var e = a ? t() : t, s = b.a.c(e);
     return n ? (n.P && n.P(), b.a.extend(o, n), c && (o.P = c)) : (o.$parents = [], 
     o.$root = s, o.ko = b), o.$rawData = e, o.$data = s, r && (o[r] = s), i && i(o, n, s), 
     o.$data;
    }, null, {
     wa: function() {
      return s && !b.a.Qb(s);
     },
     i: !0
    });
    c.ba() && (o.P = c, c.equalityComparer = null, s = [], c.Ac = function(t) {
     s.push(t), b.a.F.oa(t, function(t) {
      b.a.La(s, t), s.length || (c.k(), o.P = c = e);
     });
    });
   }, b.U.prototype.createChildContext = function(e, t, n) {
    return new b.U(e, this, t, function(e, t) {
     e.$parentContext = t, e.$parent = t.$data, e.$parents = (t.$parents || []).slice(0), 
     e.$parents.unshift(e.$parent), n && n(e);
    });
   }, b.U.prototype.extend = function(e) {
    return new b.U(this.P || this.$data, this, null, function(t, n) {
     t.$rawData = n.$rawData, b.a.extend(t, "function" == typeof e ? e() : e);
    });
   };
   var p = b.a.e.I(), h = b.a.e.I();
   b.tc = function(e, t) {
    if (2 != arguments.length) return b.a.e.get(e, h);
    b.a.e.set(e, h, t), t.P && t.P.Ac(e);
   }, b.Ja = function(e, t, n) {
    return 1 === e.nodeType && b.f.kc(e), u(e, t, f(n), !0);
   }, b.Dc = function(e, t, n) {
    return n = f(n), b.Ja(e, o(t, n, e), n);
   }, b.eb = function(e, t) {
    1 !== t.nodeType && 8 !== t.nodeType || c(f(e), t, !0);
   }, b.Rb = function(e, n) {
    if (!i && t.jQuery && (i = t.jQuery), n && 1 !== n.nodeType && 8 !== n.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
    n = n || t.document.body, l(f(e), n, !0);
   }, b.kb = function(t) {
    switch (t.nodeType) {
    case 1:
    case 8:
     var n = b.tc(t);
     if (n) return n;
     if (t.parentNode) return b.kb(t.parentNode);
    }
    return e;
   }, b.Jc = function(t) {
    return (t = b.kb(t)) ? t.$data : e;
   }, b.b("bindingHandlers", b.d), b.b("applyBindings", b.Rb), b.b("applyBindingsToDescendants", b.eb), 
   b.b("applyBindingAccessorsToNode", b.Ja), b.b("applyBindingsToNode", b.Dc), b.b("contextFor", b.kb), 
   b.b("dataFor", b.Jc);
  }(), function(e) {
   function t(t, r) {
    var o, a = i.hasOwnProperty(t) ? i[t] : e;
    a ? a.X(r) : ((a = i[t] = new b.J()).X(r), n(t, function(e, n) {
     var r = !(!n || !n.synchronous);
     s[t] = {
      definition: e,
      Zc: r
     }, delete i[t], o || r ? a.notifySubscribers(e) : b.Y.Wa(function() {
      a.notifySubscribers(e);
     });
    }), o = !0);
   }
   function n(e, t) {
    r("getConfig", [ e ], function(n) {
     n ? r("loadComponent", [ e, n ], function(e) {
      t(e, n);
     }) : t(null, null);
    });
   }
   function r(t, n, i, s) {
    s || (s = b.g.loaders.slice(0));
    var o = s.shift();
    if (o) {
     var a = o[t];
     if (a) {
      var c = !1;
      if (a.apply(o, n.concat(function(e) {
       c ? i(null) : null !== e ? i(e) : r(t, n, i, s);
      })) !== e && (c = !0, !o.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
     } else r(t, n, i, s);
    } else i(null);
   }
   var i = {}, s = {};
   b.g = {
    get: function(n, r) {
     var i = s.hasOwnProperty(n) ? s[n] : e;
     i ? i.Zc ? b.l.w(function() {
      r(i.definition);
     }) : b.Y.Wa(function() {
      r(i.definition);
     }) : t(n, r);
    },
    Xb: function(e) {
     delete s[e];
    },
    Jb: r
   }, b.g.loaders = [], b.b("components", b.g), b.b("components.get", b.g.get), b.b("components.clearCachedDefinition", b.g.Xb);
  }(), function() {
   function e(e, t, n, r) {
    function i() {
     0 == --a && r(o);
    }
    var o = {}, a = 2, c = n.template;
    n = n.viewModel, c ? s(t, c, function(t) {
     b.g.Jb("loadTemplate", [ e, t ], function(e) {
      o.template = e, i();
     });
    }) : i(), n ? s(t, n, function(t) {
     b.g.Jb("loadViewModel", [ e, t ], function(e) {
      o[l] = e, i();
     });
    }) : i();
   }
   function r(e) {
    switch (b.a.A(e)) {
    case "script":
     return b.a.ma(e.text);

    case "textarea":
     return b.a.ma(e.value);

    case "template":
     if (i(e.content)) return b.a.ua(e.content.childNodes);
    }
    return b.a.ua(e.childNodes);
   }
   function i(e) {
    return t.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType;
   }
   function s(e, n, r) {
    "string" == typeof n.require ? a || t.require ? (a || t.require)([ n.require ], r) : e("Uses require, but no AMD loader is present") : r(n);
   }
   function o(e) {
    return function(t) {
     throw Error("Component '" + e + "': " + t);
    };
   }
   var c = {};
   b.g.register = function(e, t) {
    if (!t) throw Error("Invalid configuration for " + e);
    if (b.g.ub(e)) throw Error("Component " + e + " is already registered");
    c[e] = t;
   }, b.g.ub = function(e) {
    return c.hasOwnProperty(e);
   }, b.g.od = function(e) {
    delete c[e], b.g.Xb(e);
   }, b.g.Zb = {
    getConfig: function(e, t) {
     t(c.hasOwnProperty(e) ? c[e] : null);
    },
    loadComponent: function(t, n, r) {
     var i = o(t);
     s(i, n, function(n) {
      e(t, i, n, r);
     });
    },
    loadTemplate: function(e, s, a) {
     if (e = o(e), "string" == typeof s) a(b.a.ma(s)); else if (s instanceof Array) a(s); else if (i(s)) a(b.a.V(s.childNodes)); else if (s.element) if (s = s.element, 
     t.HTMLElement ? s instanceof HTMLElement : s && s.tagName && 1 === s.nodeType) a(r(s)); else if ("string" == typeof s) {
      var c = n.getElementById(s);
      c ? a(r(c)) : e("Cannot find element with ID " + s);
     } else e("Unknown element type: " + s); else e("Unknown template value: " + s);
    },
    loadViewModel: function(e, t, n) {
     !function e(t, n, r) {
      if ("function" == typeof n) r(function(e) {
       return new n(e);
      }); else if ("function" == typeof n[l]) r(n[l]); else if ("instance" in n) {
       var i = n.instance;
       r(function() {
        return i;
       });
      } else "viewModel" in n ? e(t, n.viewModel, r) : t("Unknown viewModel value: " + n);
     }(o(e), t, n);
    }
   };
   var l = "createViewModel";
   b.b("components.register", b.g.register), b.b("components.isRegistered", b.g.ub), 
   b.b("components.unregister", b.g.od), b.b("components.defaultLoader", b.g.Zb), b.g.loaders.push(b.g.Zb), 
   b.g.Bc = c;
  }(), function() {
   function e(e, n) {
    if (r = e.getAttribute("params")) {
     var r = t.parseBindingsString(r, n, e, {
      valueAccessors: !0,
      bindingParams: !0
     }), i = (r = b.a.Ca(r, function(t) {
      return b.m(t, null, {
       i: e
      });
     }), b.a.Ca(r, function(t) {
      var n = t.t();
      return t.ba() ? b.m({
       read: function() {
        return b.a.c(t());
       },
       write: b.Ba(n) && function(e) {
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
   b.g.getComponentNameForNode = function(e) {
    var t = b.a.A(e);
    if (b.g.ub(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= b.a.C && e.tagName === t)) return t;
   }, b.g.Ob = function(t, n, r, i) {
    if (1 === n.nodeType) {
     var s = b.g.getComponentNameForNode(n);
     if (s) {
      if ((t = t || {}).component) throw Error('Cannot use the "component" binding on a custom element matching a component');
      var o = {
       name: s,
       params: e(n, r)
      };
      t.component = i ? function() {
       return o;
      } : o;
     }
    }
    return t;
   };
   var t = new b.Q();
   9 > b.a.C && (b.g.register = function(e) {
    return function(t) {
     return n.createElement(t), e.apply(this, arguments);
    };
   }(b.g.register), n.createDocumentFragment = function(e) {
    return function() {
     var t, n = e(), r = b.g.Bc;
     for (t in r) r.hasOwnProperty(t) && n.createElement(t);
     return n;
    };
   }(n.createDocumentFragment));
  }(), function(e) {
   var t = 0;
   b.d.component = {
    init: function(e, n, r, i, s) {
     function o() {
      var e = a && a.dispose;
      "function" == typeof e && e.call(a), c = a = null;
     }
     var a, c, l = b.a.V(b.f.childNodes(e));
     return b.a.F.oa(e, o), b.m(function() {
      var r, i, u = b.a.c(n());
      if ("string" == typeof u ? r = u : (r = b.a.c(u.name), i = b.a.c(u.params)), !r) throw Error("No component name specified");
      var f = c = ++t;
      b.g.get(r, function(t) {
       if (c === f) {
        if (o(), !t) throw Error("Unknown component '" + r + "'");
        !function(e, t, n) {
         if (!(t = t.template)) throw Error("Component '" + e + "' has no template");
         e = b.a.ua(t), b.f.da(n, e);
        }(r, t, e);
        var n = function(e, t, n, r) {
         var i = e.createViewModel;
         return i ? i.call(e, r, {
          element: t,
          templateNodes: n
         }) : r;
        }(t, e, l, i);
        t = s.createChildContext(n, void 0, function(e) {
         e.$component = n, e.$componentTemplateNodes = l;
        }), a = n, b.eb(t, e);
       }
      });
     }, null, {
      i: e
     }), {
      controlsDescendantBindings: !0
     };
    }
   }, b.f.Z.component = !0;
  }();
  var O = {
   class: "className",
   for: "htmlFor"
  };
  b.d.attr = {
   update: function(t, n) {
    var r = b.a.c(n()) || {};
    b.a.D(r, function(n, r) {
     var i = !1 === (r = b.a.c(r)) || null === r || r === e;
     i && t.removeAttribute(n), 8 >= b.a.C && n in O ? (n = O[n], i ? t.removeAttribute(n) : t[n] = r) : i || t.setAttribute(n, r.toString()), 
     "name" === n && b.a.rc(t, i ? "" : r.toString());
    });
   }
  }, b.d.checked = {
   after: [ "value", "attr" ],
   init: function(t, n, r) {
    function i() {
     var e = t.checked, i = d ? s() : e;
     if (!b.va.Sa() && (!a || e)) {
      var o = b.l.w(n);
      if (l) {
       var c = u ? o.t() : o;
       f !== i ? (e && (b.a.pa(c, i, !0), b.a.pa(c, f, !1)), f = i) : b.a.pa(c, i, e), 
       u && b.Ba(o) && o(c);
      } else b.h.Ea(o, r, "checked", i, !0);
     }
    }
    var s = b.nc(function() {
     return r.has("checkedValue") ? b.a.c(r.get("checkedValue")) : r.has("value") ? b.a.c(r.get("value")) : t.value;
    }), o = "checkbox" == t.type, a = "radio" == t.type;
    if (o || a) {
     var c = n(), l = o && b.a.c(c) instanceof Array, u = !(l && c.push && c.splice), f = l ? s() : e, d = a || l;
     a && !t.name && b.d.uniqueName.init(t, function() {
      return !0;
     }), b.m(i, null, {
      i: t
     }), b.a.p(t, "click", i), b.m(function() {
      var e = b.a.c(n());
      t.checked = l ? 0 <= b.a.o(e, s()) : o ? e : s() === e;
     }, null, {
      i: t
     }), c = e;
    }
   }
  }, b.h.ea.checked = !0, b.d.checkedValue = {
   update: function(e, t) {
    e.value = b.a.c(t());
   }
  }, b.d.css = {
   update: function(e, t) {
    var n = b.a.c(t());
    null !== n && "object" == typeof n ? b.a.D(n, function(t, n) {
     n = b.a.c(n), b.a.bb(e, t, n);
    }) : (n = b.a.$a(String(n || "")), b.a.bb(e, e.__ko__cssValue, !1), e.__ko__cssValue = n, 
    b.a.bb(e, n, !0));
   }
  }, b.d.enable = {
   update: function(e, t) {
    var n = b.a.c(t());
    n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled = !0);
   }
  }, b.d.disable = {
   update: function(e, t) {
    b.d.enable.update(e, function() {
     return !b.a.c(t());
    });
   }
  }, b.d.event = {
   init: function(e, t, n, r, i) {
    var s = t() || {};
    b.a.D(s, function(s) {
     "string" == typeof s && b.a.p(e, s, function(e) {
      var o, a = t()[s];
      if (a) {
       try {
        var c = b.a.V(arguments);
        r = i.$data, c.unshift(r), o = a.apply(r, c);
       } finally {
        !0 !== o && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
       }
       !1 === n.get(s + "Bubble") && (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation());
      }
     });
    });
   }
  }, b.d.foreach = {
   ic: function(e) {
    return function() {
     var t = e(), n = b.a.zb(t);
     return n && "number" != typeof n.length ? (b.a.c(t), {
      foreach: n.data,
      as: n.as,
      includeDestroyed: n.includeDestroyed,
      afterAdd: n.afterAdd,
      beforeRemove: n.beforeRemove,
      afterRender: n.afterRender,
      beforeMove: n.beforeMove,
      afterMove: n.afterMove,
      templateEngine: b.W.sb
     }) : {
      foreach: t,
      templateEngine: b.W.sb
     };
    };
   },
   init: function(e, t) {
    return b.d.template.init(e, b.d.foreach.ic(t));
   },
   update: function(e, t, n, r, i) {
    return b.d.template.update(e, b.d.foreach.ic(t), n, r, i);
   }
  }, b.h.ta.foreach = !1, b.f.Z.foreach = !0, b.d.hasfocus = {
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
     i = t(), b.h.Ea(i, n, "hasfocus", r, !0), e.__ko_hasfocusLastValue = r, e.__ko_hasfocusUpdating = !1;
    }
    var i = r.bind(null, !0), s = r.bind(null, !1);
    b.a.p(e, "focus", i), b.a.p(e, "focusin", i), b.a.p(e, "blur", s), b.a.p(e, "focusout", s);
   },
   update: function(e, t) {
    var n = !!b.a.c(t());
    e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(), 
    !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), b.l.w(b.a.Da, null, [ e, n ? "focusin" : "focusout" ]));
   }
  }, b.h.ea.hasfocus = !0, b.d.hasFocus = b.d.hasfocus, b.h.ea.hasFocus = !0, b.d.html = {
   init: function() {
    return {
     controlsDescendantBindings: !0
    };
   },
   update: function(e, t) {
    b.a.Cb(e, t());
   }
  }, h("if"), h("ifnot", !1, !0), h("with", !0, !1, function(e, t) {
   return e.createChildContext(t);
  });
  var D = {};
  b.d.options = {
   init: function(e) {
    if ("select" !== b.a.A(e)) throw Error("options binding applies only to SELECT elements");
    for (;0 < e.length; ) e.remove(0);
    return {
     controlsDescendantBindings: !0
    };
   },
   update: function(t, n, r) {
    function i() {
     return b.a.Ka(t.options, function(e) {
      return e.selected;
     });
    }
    function s(e, t, n) {
     var r = typeof t;
     return "function" == r ? t(e) : "string" == r ? e[t] : n;
    }
    function o(e, n) {
     if (h && u) b.j.ha(t, b.a.c(r.get("value")), !0); else if (p.length) {
      var i = 0 <= b.a.o(p, b.j.u(n[0]));
      b.a.sc(n[0], i), h && !i && b.l.w(b.a.Da, null, [ t, "change" ]);
     }
    }
    var a = t.multiple, c = 0 != t.length && a ? t.scrollTop : null, l = b.a.c(n()), u = r.get("valueAllowUnset") && r.has("value"), f = r.get("optionsIncludeDestroyed");
    n = {};
    var d, p = [];
    u || (a ? p = b.a.fb(i(), b.j.u) : 0 <= t.selectedIndex && p.push(b.j.u(t.options[t.selectedIndex]))), 
    l && (void 0 === l.length && (l = [ l ]), d = b.a.Ka(l, function(t) {
     return f || t === e || null === t || !b.a.c(t._destroy);
    }), r.has("optionsCaption") && null !== (l = b.a.c(r.get("optionsCaption"))) && l !== e && d.unshift(D));
    var h = !1;
    n.beforeRemove = function(e) {
     t.removeChild(e);
    }, l = o, r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (l = function(t, n) {
     o(0, n), b.l.w(r.get("optionsAfterRender"), null, [ n[0], t !== D ? t : e ]);
    }), b.a.Bb(t, d, function(n, i, o) {
     return o.length && (p = !u && o[0].selected ? [ b.j.u(o[0]) ] : [], h = !0), i = t.ownerDocument.createElement("option"), 
     n === D ? (b.a.Za(i, r.get("optionsCaption")), b.j.ha(i, e)) : (o = s(n, r.get("optionsValue"), n), 
     b.j.ha(i, b.a.c(o)), n = s(n, r.get("optionsText"), o), b.a.Za(i, n)), [ i ];
    }, n, l), b.l.w(function() {
     u ? b.j.ha(t, b.a.c(r.get("value")), !0) : (a ? p.length && i().length < p.length : p.length && 0 <= t.selectedIndex ? b.j.u(t.options[t.selectedIndex]) !== p[0] : p.length || 0 <= t.selectedIndex) && b.a.Da(t, "change");
    }), b.a.Nc(t), c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c);
   }
  }, b.d.options.xb = b.a.e.I(), b.d.selectedOptions = {
   after: [ "options", "foreach" ],
   init: function(e, t, n) {
    b.a.p(e, "change", function() {
     var r = t(), i = [];
     b.a.q(e.getElementsByTagName("option"), function(e) {
      e.selected && i.push(b.j.u(e));
     }), b.h.Ea(r, n, "selectedOptions", i);
    });
   },
   update: function(e, t) {
    if ("select" != b.a.A(e)) throw Error("values binding applies only to SELECT elements");
    var n = b.a.c(t()), r = e.scrollTop;
    n && "number" == typeof n.length && b.a.q(e.getElementsByTagName("option"), function(e) {
     var t = 0 <= b.a.o(n, b.j.u(e));
     e.selected != t && b.a.sc(e, t);
    }), e.scrollTop = r;
   }
  }, b.h.ea.selectedOptions = !0, b.d.style = {
   update: function(t, n) {
    var r = b.a.c(n() || {});
    b.a.D(r, function(n, r) {
     null !== (r = b.a.c(r)) && r !== e && !1 !== r || (r = ""), t.style[n] = r;
    });
   }
  }, b.d.submit = {
   init: function(e, t, n, r, i) {
    if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
    b.a.p(e, "submit", function(n) {
     var r, s = t();
     try {
      r = s.call(i.$data, e);
     } finally {
      !0 !== r && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
     }
    });
   }
  }, b.d.text = {
   init: function() {
    return {
     controlsDescendantBindings: !0
    };
   },
   update: function(e, t) {
    b.a.Za(e, t());
   }
  }, b.f.Z.text = !0, function() {
   if (t && t.navigator) var n = function(e) {
    if (e) return parseFloat(e[1]);
   }, r = t.opera && t.opera.version && parseInt(t.opera.version()), i = t.navigator.userAgent, s = n(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), o = n(i.match(/Firefox\/([^ ]*)/));
   if (10 > b.a.C) var a = b.a.e.I(), c = b.a.e.I(), l = function(e) {
    var t = this.activeElement;
    (t = t && b.a.e.get(t, c)) && t(e);
   }, u = function(e, t) {
    var n = e.ownerDocument;
    b.a.e.get(n, a) || (b.a.e.set(n, a, !0), b.a.p(n, "selectionchange", l)), b.a.e.set(e, c, t);
   };
   b.d.textInput = {
    init: function(t, n, i) {
     function a(e, n) {
      b.a.p(t, e, n);
     }
     function c() {
      f || (d = t.value, f = b.a.setTimeout(l, 4));
     }
     function l() {
      clearTimeout(f), d = f = e;
      var r = t.value;
      p !== r && (p = r, b.h.Ea(n(), i, "textInput", r));
     }
     var f, d, p = t.value, h = 9 == b.a.C ? c : l;
     10 > b.a.C ? (a("propertychange", function(e) {
      "value" === e.propertyName && h(e);
     }), 8 == b.a.C && (a("keyup", l), a("keydown", l)), 8 <= b.a.C && (u(t, h), a("dragend", c))) : (a("input", l), 
     5 > s && "textarea" === b.a.A(t) ? (a("keydown", c), a("paste", c), a("cut", c)) : 11 > r ? a("keydown", c) : 4 > o && (a("DOMAutoComplete", l), 
     a("dragdrop", l), a("drop", l))), a("change", l), b.m(function r() {
      var i = b.a.c(n());
      null !== i && i !== e || (i = ""), d !== e && i === d ? b.a.setTimeout(r, 4) : t.value !== i && (p = i, 
      t.value = i);
     }, null, {
      i: t
     });
    }
   }, b.h.ea.textInput = !0, b.d.textinput = {
    preprocess: function(e, t, n) {
     n("textInput", e);
    }
   };
  }(), b.d.uniqueName = {
   init: function(e, t) {
    if (t()) {
     var n = "ko_unique_" + ++b.d.uniqueName.Ic;
     b.a.rc(e, n);
    }
   }
  }, b.d.uniqueName.Ic = 0, b.d.value = {
   after: [ "options", "foreach" ],
   init: function(e, t, n) {
    if ("input" != e.tagName.toLowerCase() || "checkbox" != e.type && "radio" != e.type) {
     var r = [ "change" ], i = n.get("valueUpdate"), s = !1, o = null;
     i && ("string" == typeof i && (i = [ i ]), b.a.ra(r, i), r = b.a.Tb(r));
     var a = function() {
      o = null, s = !1;
      var r = t(), i = b.j.u(e);
      b.h.Ea(r, n, "value", i);
     };
     !b.a.C || "input" != e.tagName.toLowerCase() || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != b.a.o(r, "propertychange") || (b.a.p(e, "propertychange", function() {
      s = !0;
     }), b.a.p(e, "focus", function() {
      s = !1;
     }), b.a.p(e, "blur", function() {
      s && a();
     })), b.a.q(r, function(t) {
      var n = a;
      b.a.nd(t, "after") && (n = function() {
       o = b.j.u(e), b.a.setTimeout(a, 0);
      }, t = t.substring(5)), b.a.p(e, t, n);
     });
     var c = function() {
      var r = b.a.c(t()), i = b.j.u(e);
      if (null !== o && r === o) b.a.setTimeout(c, 0); else if (r !== i) if ("select" === b.a.A(e)) {
       var s = n.get("valueAllowUnset");
       (i = function() {
        b.j.ha(e, r, s);
       })(), s || r === b.j.u(e) ? b.a.setTimeout(i, 0) : b.l.w(b.a.Da, null, [ e, "change" ]);
      } else b.j.ha(e, r);
     };
     b.m(c, null, {
      i: e
     });
    } else b.Ja(e, {
     checkedValue: t
    });
   },
   update: function() {}
  }, b.h.ea.value = !0, b.d.visible = {
   update: function(e, t) {
    var n = b.a.c(t()), r = "none" != e.style.display;
    n && !r ? e.style.display = "" : !n && r && (e.style.display = "none");
   }
  }, function(e) {
   b.d[e] = {
    init: function(t, n, r, i, s) {
     return b.d.event.init.call(this, t, function() {
      var t = {};
      return t[e] = n(), t;
     }, r, i, s);
    }
   };
  }("click"), b.O = function() {}, b.O.prototype.renderTemplateSource = function() {
   throw Error("Override renderTemplateSource");
  }, b.O.prototype.createJavaScriptEvaluatorBlock = function() {
   throw Error("Override createJavaScriptEvaluatorBlock");
  }, b.O.prototype.makeTemplateSource = function(e, t) {
   if ("string" == typeof e) {
    var r = (t = t || n).getElementById(e);
    if (!r) throw Error("Cannot find template with ID " + e);
    return new b.v.n(r);
   }
   if (1 == e.nodeType || 8 == e.nodeType) return new b.v.qa(e);
   throw Error("Unknown template type: " + e);
  }, b.O.prototype.renderTemplate = function(e, t, n, r) {
   return e = this.makeTemplateSource(e, r), this.renderTemplateSource(e, t, n, r);
  }, b.O.prototype.isTemplateRewritten = function(e, t) {
   return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten");
  }, b.O.prototype.rewriteTemplate = function(e, t, n) {
   t = t((e = this.makeTemplateSource(e, n)).text()), e.text(t), e.data("isRewritten", !0);
  }, b.b("templateEngine", b.O), b.Gb = function() {
   function e(e, t, n, r) {
    e = b.h.yb(e);
    for (var i = b.h.ta, s = 0; s < e.length; s++) {
     var o = e[s].key;
     if (i.hasOwnProperty(o)) {
      var a = i[o];
      if ("function" == typeof a) {
       if (o = a(e[s].value)) throw Error(o);
      } else if (!a) throw Error("This template engine does not support the '" + o + "' binding within its templates");
     }
    }
    return n = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + b.h.Ua(e, {
     valueAccessors: !0
    }) + " } })()},'" + n.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(n) + t;
   }
   var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
   return {
    Oc: function(e, t, n) {
     t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
      return b.Gb.dd(e, t);
     }, n);
    },
    dd: function(r, i) {
     return r.replace(t, function(t, n, r, s, o) {
      return e(o, n, r, i);
     }).replace(n, function(t, n) {
      return e(n, "\x3c!-- ko --\x3e", "#comment", i);
     });
    },
    Ec: function(e, t) {
     return b.M.wb(function(n, r) {
      var i = n.nextSibling;
      i && i.nodeName.toLowerCase() === t && b.Ja(i, e, r);
     });
    }
   };
  }(), b.b("__tr_ambtns", b.Gb.Ec), function() {
   b.v = {}, b.v.n = function(e) {
    if (this.n = e) {
     var t = b.a.A(e);
     this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4;
    }
   }, b.v.n.prototype.text = function() {
    var e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
    if (0 == arguments.length) return this.n[e];
    var t = arguments[0];
    "innerHTML" === e ? b.a.Cb(this.n, t) : this.n[e] = t;
   };
   var t = b.a.e.I() + "_";
   b.v.n.prototype.data = function(e) {
    if (1 === arguments.length) return b.a.e.get(this.n, t + e);
    b.a.e.set(this.n, t + e, arguments[1]);
   };
   var n = b.a.e.I();
   b.v.n.prototype.nodes = function() {
    var t = this.n;
    if (0 == arguments.length) return (b.a.e.get(t, n) || {}).jb || (3 === this.ab ? t.content : 4 === this.ab ? t : e);
    b.a.e.set(t, n, {
     jb: arguments[0]
    });
   }, b.v.qa = function(e) {
    this.n = e;
   }, b.v.qa.prototype = new b.v.n(), b.v.qa.prototype.text = function() {
    if (0 == arguments.length) {
     var t = b.a.e.get(this.n, n) || {};
     return t.Hb === e && t.jb && (t.Hb = t.jb.innerHTML), t.Hb;
    }
    b.a.e.set(this.n, n, {
     Hb: arguments[0]
    });
   }, b.b("templateSources", b.v), b.b("templateSources.domElement", b.v.n), b.b("templateSources.anonymousTemplate", b.v.qa);
  }(), function() {
   function t(e, t, n) {
    var r;
    for (t = b.f.nextSibling(t); e && (r = e) !== t; ) n(r, e = b.f.nextSibling(r));
   }
   function n(e, n) {
    if (e.length) {
     var r = e[0], i = e[e.length - 1], s = r.parentNode, o = b.Q.instance, a = o.preprocessNode;
     if (a) {
      if (t(r, i, function(e, t) {
       var n = e.previousSibling, s = a.call(o, e);
       s && (e === r && (r = s[0] || t), e === i && (i = s[s.length - 1] || n));
      }), e.length = 0, !r) return;
      r === i ? e.push(r) : (e.push(r, i), b.a.za(e, s));
     }
     t(r, i, function(e) {
      1 !== e.nodeType && 8 !== e.nodeType || b.Rb(n, e);
     }), t(r, i, function(e) {
      1 !== e.nodeType && 8 !== e.nodeType || b.M.yc(e, [ n ]);
     }), b.a.za(e, s);
    }
   }
   function r(e) {
    return e.nodeType ? e : 0 < e.length ? e[0] : null;
   }
   function i(e, t, i, s, a) {
    a = a || {};
    var c = (e && r(e) || i || {}).ownerDocument, l = a.templateEngine || o;
    if (b.Gb.Oc(i, l, c), "number" != typeof (i = l.renderTemplate(i, s, a, c)).length || 0 < i.length && "number" != typeof i[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
    switch (c = !1, t) {
    case "replaceChildren":
     b.f.da(e, i), c = !0;
     break;

    case "replaceNode":
     b.a.qc(e, i), c = !0;
     break;

    case "ignoreTargetNode":
     break;

    default:
     throw Error("Unknown renderMode: " + t);
    }
    return c && (n(i, s), a.afterRender && b.l.w(a.afterRender, null, [ i, s.$data ])), 
    i;
   }
   function s(e, t, n) {
    return b.H(e) ? e() : "function" == typeof e ? e(t, n) : e;
   }
   var o;
   b.Db = function(t) {
    if (t != e && !(t instanceof b.O)) throw Error("templateEngine must inherit from ko.templateEngine");
    o = t;
   }, b.Ab = function(t, n, a, c, l) {
    if (((a = a || {}).templateEngine || o) == e) throw Error("Set a template engine before calling renderTemplate");
    if (l = l || "replaceChildren", c) {
     var u = r(c);
     return b.B(function() {
      var e = n && n instanceof b.U ? n : new b.U(b.a.c(n)), o = s(t, e.$data, e);
      e = i(c, l, o, e, a), "replaceNode" == l && (u = r(c = e));
     }, null, {
      wa: function() {
       return !u || !b.a.nb(u);
      },
      i: u && "replaceNode" == l ? u.parentNode : u
     });
    }
    return b.M.wb(function(e) {
     b.Ab(t, n, a, e, "replaceNode");
    });
   }, b.kd = function(t, r, o, a, c) {
    function l(e, t) {
     n(t, f), o.afterRender && o.afterRender(t, e), f = null;
    }
    function u(e, n) {
     return f = c.createChildContext(e, o.as, function(e) {
      e.$index = n;
     }), i(null, "ignoreTargetNode", s(t, e, f), f, o);
    }
    var f;
    return b.B(function() {
     var t = b.a.c(r) || [];
     void 0 === t.length && (t = [ t ]), t = b.a.Ka(t, function(t) {
      return o.includeDestroyed || t === e || null === t || !b.a.c(t._destroy);
     }), b.l.w(b.a.Bb, null, [ a, t, u, o, l ]);
    }, null, {
     i: a
    });
   };
   var a = b.a.e.I();
   b.d.template = {
    init: function(e, t) {
     var n = b.a.c(t());
     if ("string" == typeof n || n.name) b.f.xa(e); else {
      if ("nodes" in n) {
       if (n = n.nodes || [], b.H(n)) throw Error('The "nodes" option must be a plain, non-observable array.');
      } else n = b.f.childNodes(e);
      n = b.a.jc(n), new b.v.qa(e).nodes(n);
     }
     return {
      controlsDescendantBindings: !0
     };
    },
    update: function(t, n, r, i, s) {
     var o, c = n();
     r = !0, i = null, "string" == typeof (n = b.a.c(c)) ? n = {} : (c = n.name, "if" in n && (r = b.a.c(n.if)), 
     r && "ifnot" in n && (r = !b.a.c(n.ifnot)), o = b.a.c(n.data)), "foreach" in n ? i = b.kd(c || t, r && n.foreach || [], n, t, s) : r ? (s = "data" in n ? s.createChildContext(o, n.as) : s, 
     i = b.Ab(c || t, s, n, t)) : b.f.xa(t), s = i, (o = b.a.e.get(t, a)) && "function" == typeof o.k && o.k(), 
     b.a.e.set(t, a, s && s.ba() ? s : e);
    }
   }, b.h.ta.template = function(e) {
    return 1 == (e = b.h.yb(e)).length && e[0].unknown || b.h.ad(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
   }, b.f.Z.template = !0;
  }(), b.b("setTemplateEngine", b.Db), b.b("renderTemplate", b.Ab), b.a.dc = function(e, t, n) {
   var r, i, s, o, a;
   if (e.length && t.length) for (r = i = 0; (!n || r < n) && (o = e[i]); ++i) {
    for (s = 0; a = t[s]; ++s) if (o.value === a.value) {
     o.moved = a.index, a.moved = o.index, t.splice(s, 1), r = s = 0;
     break;
    }
    r += s;
   }
  }, b.a.ib = function() {
   function e(e, t, n, r, i) {
    var s, o, a, c, l, u = Math.min, f = Math.max, d = [], p = e.length, h = t.length, m = h - p || 1, g = p + h + 1;
    for (s = 0; s <= p; s++) for (c = a, d.push(a = []), l = u(h, s + m), o = f(0, s - 1); o <= l; o++) a[o] = o ? s ? e[s - 1] === t[o - 1] ? c[o - 1] : u(c[o] || g, a[o - 1] || g) + 1 : o + 1 : s + 1;
    for (u = [], f = [], m = [], s = p, o = h; s || o; ) h = d[s][o] - 1, o && h === d[s][o - 1] ? f.push(u[u.length] = {
     status: n,
     value: t[--o],
     index: o
    }) : s && h === d[s - 1][o] ? m.push(u[u.length] = {
     status: r,
     value: e[--s],
     index: s
    }) : (--o, --s, i.sparse || u.push({
     status: "retained",
     value: t[o]
    }));
    return b.a.dc(m, f, !i.dontLimitMoves && 10 * p), u.reverse();
   }
   return function(t, n, r) {
    return r = "boolean" == typeof r ? {
     dontLimitMoves: r
    } : r || {}, t = t || [], n = n || [], t.length < n.length ? e(t, n, "added", "deleted", r) : e(n, t, "deleted", "added", r);
   };
  }(), b.b("utils.compareArrays", b.a.ib), function() {
   function t(t, n, r, i, s) {
    var o = [], a = b.B(function() {
     var e = n(r, s, b.a.za(o, t)) || [];
     0 < o.length && (b.a.qc(o, e), i && b.l.w(i, null, [ r, e, s ])), o.length = 0, 
     b.a.ra(o, e);
    }, null, {
     i: t,
     wa: function() {
      return !b.a.Qb(o);
     }
    });
    return {
     ca: o,
     B: a.ba() ? a : e
    };
   }
   var n = b.a.e.I(), r = b.a.e.I();
   b.a.Bb = function(i, s, o, a, c) {
    function l(e, t) {
     x = p[t], v !== t && (k[e] = x), x.qb(v++), b.a.za(x.ca, i), g.push(x), A.push(x);
    }
    function u(e, t) {
     if (e) for (var n = 0, r = t.length; n < r; n++) t[n] && b.a.q(t[n].ca, function(r) {
      e(r, n, t[n].ja);
     });
    }
    s = s || [], a = a || {};
    var f, d = b.a.e.get(i, n) === e, p = b.a.e.get(i, n) || [], h = b.a.fb(p, function(e) {
     return e.ja;
    }), m = b.a.ib(h, s, a.dontLimitMoves), g = [], y = 0, v = 0, _ = [], A = [];
    s = [];
    for (var x, w, C, k = [], E = (h = [], 0); w = m[E]; E++) switch (C = w.moved, w.status) {
    case "deleted":
     C === e && ((x = p[y]).B && (x.B.k(), x.B = e), b.a.za(x.ca, i).length && (a.beforeRemove && (g.push(x), 
     A.push(x), x.ja === r ? x = null : s[E] = x), x && _.push.apply(_, x.ca))), y++;
     break;

    case "retained":
     l(E, y++);
     break;

    case "added":
     C !== e ? l(E, C) : (x = {
      ja: w.value,
      qb: b.N(v++)
     }, g.push(x), A.push(x), d || (h[E] = x));
    }
    for (b.a.e.set(i, n, g), u(a.beforeMove, k), b.a.q(_, a.beforeRemove ? b.$ : b.removeNode), 
    E = 0, d = b.f.firstChild(i); x = A[E]; E++) {
     for (x.ca || b.a.extend(x, t(i, o, x.ja, c, x.qb)), y = 0; m = x.ca[y]; d = m.nextSibling, 
     f = m, y++) m !== d && b.f.gc(i, m, f);
     !x.Wc && c && (c(x.ja, x.ca, x.qb), x.Wc = !0);
    }
    for (u(a.beforeRemove, s), E = 0; E < s.length; ++E) s[E] && (s[E].ja = r);
    u(a.afterMove, k), u(a.afterAdd, h);
   };
  }(), b.b("utils.setDomNodeChildrenFromArrayMapping", b.a.Bb), b.W = function() {
   this.allowTemplateRewriting = !1;
  }, b.W.prototype = new b.O(), b.W.prototype.renderTemplateSource = function(e, t, n, r) {
   return (t = 9 > b.a.C || !e.nodes ? null : e.nodes()) ? b.a.V(t.cloneNode(!0).childNodes) : (e = e.text(), 
   b.a.ma(e, r));
  }, b.W.sb = new b.W(), b.Db(b.W.sb), b.b("nativeTemplateEngine", b.W), function() {
   b.vb = function() {
    var e = this.$c = function() {
     if (!i || !i.tmpl) return 0;
     try {
      if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
     } catch (e) {}
     return 1;
    }();
    this.renderTemplateSource = function(t, r, s, o) {
     if (o = o || n, s = s || {}, 2 > e) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
     var a = t.data("precompiled");
     return a || (a = t.text() || "", a = i.template(null, "{{ko_with $item.koBindingContext}}" + a + "{{/ko_with}}"), 
     t.data("precompiled", a)), t = [ r.$data ], r = i.extend({
      koBindingContext: r
     }, s.templateOptions), (r = i.tmpl(a, t, r)).appendTo(o.createElement("div")), i.fragments = {}, 
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
   }, b.vb.prototype = new b.O();
   var e = new b.vb();
   0 < e.$c && b.Db(e), b.b("jqueryTmplTemplateEngine", b.vb);
  }();
 });
}();