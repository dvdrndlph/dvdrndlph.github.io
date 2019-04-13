/* abcDE_min.js v6.0.73 */
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
 var t, n, r, i, a, o, s, c, l = [], u = [], d = "", f = !1, p = 1, g = {}, h = [], m = void 0, v = "", _ = "noname.abc", y = 0, b = [], E = !1, w = [], k = 0, C = [], x = [], I = {}, B = {}, T = [], D = !1, S = {}, A = {}, q = [], N = 0, L = !1, F = [], P = !1, M = !1, H = "../../corpora", z = "./abcde_help.html", R = "../image", O = "../lib/media", V = 5, X = /\s/g, G = /</g, U = />/g, j = /[><]/g, Y = /([,;\.])/, K = /&/g, Z = /.*([<>])[^<>]+$/, W = /^% abcDidactyl v([\d\.]+)$/, J = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x,;\.]+)$/, Q = /^% abcDidactyl END$/, ee = /^% Authority: (.*)\s+\((\d\d\d\d)\)$/, te = /^% Transcriber: (.*)$/, ne = /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/, re = /^% (.*)$/, ie = 300, ae = 4e3, oe = "abcde", se = "abc_source", ce = "source", le = "abcde_prefs", ue = "abcde_controls", de = "abcde_metadata", fe = "abcde_keypad", pe = "abcde_rendering", ge = "abcde_target", he = "abcde_error", me = .1, ve = 3, _e = .3, ye = 90, be = 89, Ee = 13, we = 8, ke = 9, Ce = 37, xe = 39, Ie = "%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11", Be = "%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";
 function Te() {
  m && clearInterval(m), l = [], u = [], v = "", f = !1, _ = "noname.abc", n = void 0, 
  i = "", a = void 0, b = [], E = !1, w = [], o = void 0, k = 0, C = [], x = [], I = {}, 
  B = {}, T = [], D = !1, S = {}, A = {}, q = [], N = 0, s = void 0, c = void 0, F = [];
 }
 function De(e) {
  var t, n = S[e], r = [];
  for (t in n) n.hasOwnProperty(t) && r.push(t);
  return r.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), r;
 }
 function Se(e, t) {
  if (!e) return console.log("MISSING fingers have no hands."), "";
  if ("x" === e) return e;
  for (var n = t, r = [], i = e.split(""), a = 0; a < i.length; a++) {
   var o = i[a];
   "<" === o || ">" === o ? n = o : o.match(/\d/) ? r.push(n + o) : r.push(o);
  }
  return r.join("");
 }
 function Ae() {
  return "undefined" != typeof Storage;
 }
 function qe(e, n) {
  v || (v = md5(i));
  var r = e + "_" + n + "_" + v;
  return t.experiment_id && (r = t.experiment_id + "_" + r), r;
 }
 function Ne(e) {
  if (!Ae()) return {};
  var t = {
   sequence: ""
  }, n = qe("sequence", e), r = localStorage.getItem(n) || "";
  r.match(/[^x&@]/) && (t.sequence = r), n = qe("authority", e);
  var i = localStorage.getItem(n) || "";
  t.authority = i, n = qe("authority_year", e);
  var a = localStorage.getItem(n) || "";
  t.authority_year = a, n = qe("transcriber", e);
  var o = localStorage.getItem(n) || "";
  t.transcriber = o, n = qe("comments", e);
  var s = localStorage.getItem(n) || "";
  return t.comments = s, t;
 }
 function Le(e) {
  var t = document.getElementById(e);
  return t.value ? t.value : "";
 }
 function Fe(e) {
  var t = new Date(), n = t.getFullYear() + "-" + sprintf("%02d", t.getMonth() + 1) + "-" + sprintf("%02d", t.getDate()) + " " + sprintf("%02d", t.getHours()) + ":" + sprintf("%02d", t.getMinutes()) + ":" + sprintf("%02d", t.getSeconds()), r = "", i = "";
  return (e || $e("include_pii")) && (r = Le("authority"), i = Le("transcriber")), 
  {
   sequence: Sn(),
   authority: r,
   authority_year: Le("authority_year"),
   transcriber: i,
   transcription_date: n,
   comments: Le("comments")
  };
 }
 function Pe(e, t) {
  var n = document.getElementById(e).value, r = qe(e, t);
  localStorage.setItem(r, n);
 }
 function Me(e) {
  for (var t = document.getElementsByName(e), n = 0; n < t.length; n++) {
   var r = t[n];
   if (r.checked) return r.id;
  }
 }
 function He(e) {
  var t = "";
  "preset" === e || "output" === e || "keypad" === e || "restore" == e ? t = Me(e) : t = document.getElementById(e).value;
  g[e] = t, localStorage.setItem(e, t);
 }
 function ze() {
  var e = document.getElementById("sequence_spinner");
  return e ? e.value : (alert("Sequence DOM element has gone missing."), "1");
 }
 function Re() {
  if (Ae()) if (document.getElementById("sequence_spinner")) {
   var e = ze(), t = qe("sequence", e), n = Sn();
   localStorage.setItem(t, n), Pe("authority", e), Pe("authority_year", e), Pe("transcriber", e), 
   Pe("comments", e);
  } else clearInterval(m); else clearInterval(m);
 }
 function $e(e) {
  if (t && t[e]) return t[e];
  if ("measure_number_interval" === e) return document.getElementById(e).value;
  var n = Me(e);
  return n || "";
 }
 function Oe() {
  var e = {};
  return e.authority = Le("default_authority"), e.authority_year = Le("default_authority_year"), 
  e.transcriber = Le("default_transcriber"), e.sequence = "x", e.comments = "", e;
 }
 function Ve(e) {
  for (var t, n = e.split("\n"), r = !1, i = {}, a = [], o = "", s = 0; s < n.length; s++) {
   var c = n[s];
   if (!o && (t = W.exec(c)) && t[1]) o = t[1], r = !0; else if (r) if ((t = J.exec(c)) && t[1] && t[2]) i = {
    sequence: t[2],
    comments: ""
   }, a.push(i); else {
    if (t = Q.exec(c)) break;
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
  return a;
 }
 function Xe() {
  var e = document.getElementById("sequence_spinner");
  e.min = 1, e.max = h.length || 1;
  var t, n = (t = 1, "last" === $e("preset") && (t = h.length || 1), t);
  e.value = n;
 }
 function Ge(e) {
  if (e) {
   var t = e - 1;
   return parseInt(e) <= h.length ? h[t] : Oe();
  }
  return (n = $e("preset")) && "none" !== n ? "first" === n ? h[0] : "last" === n ? h[h.length - 1] : "" : Oe();
  var n;
 }
 function Ue(e, t) {
  for (var n = document.getElementsByName(e), r = 0; r < n.length; r++) {
   var i = n[r];
   i.id === t && (i.checked = !0);
  }
 }
 function je(e, t) {
  var n = document.getElementById(e);
  n.value = void 0 !== t ? t : "";
 }
 function Ye(e) {
  je("authority", e.authority), je("authority_year", e.authority_year), je("transcriber", e.transcriber), 
  je("comments", e.comments);
 }
 function Ke(e, t) {
  for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
  return !1;
 }
 function Ze(e, t) {
  for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
  return null;
 }
 function We(e, t) {
  if (e) {
   console.log("Setting fingers: ", e);
   var n, r, i, a = {}, o = e.split("@");
   for (n = 0; n < o.length; n++) {
    var s = Qt(n);
    a = [];
    var c = o[n].split("&");
    for (r = 0; r < c.length; r++) {
     var l = it(c[r]);
     a = a.concat(l);
    }
    for (var u = De(n), d = 0; d < u.length; d++) {
     var f = u[d], p = S[n][f];
     p.sort(Ft);
     for (var g = 0; p[g].grace; ) {
      var h = "";
      p[g][t] = "";
      for (var m = 0; m < p[g].size; m++) (i = a.shift()) || (console.log(t + " MISSING for grace note:"), 
      qt(t + " grace note", p[g])), s = Cn(i = Se(i, s), s), h += i;
      "fingering" === t ? p[g].set_fingering(h) : "preset_fingering" === t && p[g].set_preset_fingering(h), 
      g++;
     }
     var v = Ot(p), _ = $t(v), y = [], b = [], E = null;
     for (m = 0; m < _.length; m++) for (var w = _[m], k = 0; k < v[w].length; k++) if (!(E = v[w][k]).grace) {
      Ke(b, E) || (y.push(""), b.push(E));
      var C = Ze(b, E);
      (i = a.shift()) || (console.log(t + " MISSING for note:"), qt(t + " pit note", E)), 
      s = Cn(i = Se(i, s), s), y[C] += i;
     }
     for (m = 0; m < y.length; m++) i = y[m], console.log("FingerING " + i), E = b[m], 
     "fingering" === t ? E.set_fingering(i) : "preset_fingering" === t && E.set_preset_fingering(i);
    }
   }
  }
 }
 function Je(e, t) {
  var n = t.sequence, r = t.sequence, i = !0, a = $e("preset");
  a && "none" !== a || (i = !1, n = "");
  var o = !1;
  if (e && e.sequence && e.sequence !== n) {
   var s = $e("restore");
   (o = "always" === s || "never" !== s && confirm("You have previously entered data for this piece (or sequence). Do you want to restore them?")) && (n = e.sequence);
  }
  o ? Ye(e) : i && Ye(t), We(n, "fingering"), We(r, "preset_fingering"), m = setInterval(function() {
   Re();
  }, ae);
 }
 function Qe() {
  var e = ze();
  Je(Ne(e), Ge(e)), function() {
   var e = Le("authority"), t = Le("default_authority");
   !e && t && je("authority", t);
   var n = Le("authority_year"), r = Le("default_authority_year");
   !n && r && je("authority_year", r);
   var i = Le("transcriber"), a = Le("default_transcriber");
   !i && a && je("transcriber", a);
  }();
 }
 function et(e) {
  return xn();
 }
 function tt() {
  var e = window.prompt("Please enter a fingering string for the current piece.", "");
  null !== e && (We(e, "fingering"), Zt());
 }
 function nt() {
  i && (confirm("All changes you have made to this fingering sequence will be discarded, and the initial sequence will be restored. Are you sure you want to proceed?") && (Je(void 0, Ge(ze())), 
  Zt(), _n(o = x[0][0][0])));
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
    for (var i = 0; i < e[t].length; i++) for (var a = 0; a < e[t][i].length; a++) if ((s = e[t][i][a]) instanceof Array) {
     var o = rt(s);
     r.push(o);
    }
   } else for (a = 0; a < e[t].length; a++) {
    var s;
    (s = e[t][a]) instanceof Array && (o = rt(s), r.push(o));
   }
   return r;
  }(AbcdfRaw_Parser.parse(e), t, K.exec(line));
  return n = n.filter(function(e) {
   return "&" != e && "@" != e;
  });
 }
 function at() {
  window.open(z, "_blank").focus();
 }
 function ot(e) {
  un();
  var t = document.getElementById("prefs_modal_wrapper"), n = document.getElementById("prefs_modal_window");
  t.className = "overlay";
  var r = n.offsetHeight - document.documentElement.clientHeight;
  r > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - r + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function st(e) {
  un();
  var t = document.getElementById("metadata_modal_wrapper"), n = document.getElementById("metadata_modal_window");
  t.className = "overlay";
  var r = n.offsetHeight - document.documentElement.clientHeight;
  r > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - r + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ct(e) {
  document.getElementById("metadata_modal_wrapper").className = "", Re(), bt(), ln(), 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function lt() {
  p > _e && (p -= me, Zt());
 }
 function ut() {
  p < ve && (p += me, Zt());
 }
 function dt(e) {
  He("preset"), He("output"), He("restore"), He("keypad"), He("measure_number_interval"), 
  He("default_authority"), He("default_authority_year"), He("default_transcriber"), 
  document.getElementById("prefs_modal_wrapper").className = "", i && (Zt(), _n(o)), 
  bt(), ln(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ft(e) {
  var t = e.slice(0, 100);
  if (-1 == t.indexOf("<?xml")) return !1;
  var n = t.match(/encoding="([^"]+)"/), r = "utf-8";
  return n && 2 == n.length && (r = n[1]), r;
 }
 function pt(e) {
  var t = $.parseXML(e), n = vertaal(t, {}), r = n[0], i = n[1];
  return i && console.log("xml2abc ERROR: " + i), r || alert("Unable to open MusicXML file: " + i), 
  r;
 }
 function gt(e) {
  var t = e.split(".");
  return t[t.length - 1];
 }
 function ht(e) {
  var t = gt(e), n = 'The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.', r = function(e, t) {
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
     return "UTF-8" !== ft(t) ? (alert("Input mxl is not UTF-8 encoded. Cannot open."), 
     "") : t = pt(t);
    }(r.response))) return;
   } else {
    var i = ft(n = r.responseText);
    if (i) {
     if (!/^utf/i.test(i)) return void alert("Input xml is not UTF-8 encoded. Cannot open.");
     n = pt(n);
    }
   }
   n && (d = e, document.getElementById(se).value = n, dn());
  }, r.onerror = function() {
   alert(n);
  }, r.send()) : alert(n);
 }
 function mt() {
  var e = H + "/clementi/11.abc";
  if (d) e = d; else {
   var t = $e("default_url");
   t && (e = t);
  }
  var n = window.prompt("Please enter URL to open.", e);
  n && ht(n);
 }
 function vt() {
  var e = document.getElementById("file_input").files;
  if (e.length) {
   var t = e[0];
   if ("mxl" !== gt(t.name)) {
    var n = !1, r = new FileReader();
    r.onload = function(e) {
     var i = ft(r.result), a = new FileReader();
     i ? n = !0 : i = "UTF-8", a.onload = function(e) {
      var t = "";
      t = n ? pt(a.result) : e.target.result, document.getElementById(se).value = t, dn();
     }, a.readAsText(t, i);
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
     "UTF-8" === ft(n) ? (n = pt(n), document.getElementById(se).value = n, dn()) : alert("Input xml is not UTF-8 encoded. Cannot open.");
    }, t.readAsArrayBuffer(e);
   }(t);
  } else alert("Please select a valid abc file.");
 }
 function _t() {
  P = !P;
 }
 function yt(e, t) {
  for (var n = e.children, r = 0; r < n.length; r++) n[r].style.display = t;
 }
 function bt() {
  var e = document.getElementById(fe), t = document.getElementById("number_div"), n = document.getElementById("symbol_div");
  if ("show" === $e("keypad")) e.style.display = "block", t.style.display = "block", 
  n.style.display = "block", yt(t, "inline"), yt(n, "inline"); else {
   yt(n, "none"), yt(t, "none");
   var r = $e("qualtrics"), i = $e("submit_button_id");
   if (r) {
    document.getElementById("q_next").style.display = "inline";
    var a = document.getElementById("q_back");
    a && (a.style.display = "inline");
   } else if (i) {
    document.getElementById(i).style.display = "inline";
   } else t.style.display = "block", n.style.display = "block", e.style.display = "none";
  }
 }
 function Et(e) {
  var t = e.keyCode || e.which;
  t = String.fromCharCode(t);
  /[0-9]/.test(t) || (e.returnValue = !1, e.preventDefault && e.preventDefault());
 }
 function wt(e, t, n, r, i, a) {
  var o = document.createElement("input");
  o.type = "text", o.class = r, o.id = t, i && (o.onkeypress = i), "year" === r && (o.size = "4");
  var s = document.createElement("label");
  s.htmlFor = t, s.appendChild(document.createTextNode(n)), e.appendChild(s), e.appendChild(o), 
  a && e.appendChild(document.createElement("br"));
 }
 function kt(e, t, n) {
  var r = document.createElement("label");
  r.class = n;
  var i = document.createTextNode(t);
  r.appendChild(i), e.appendChild(r);
 }
 function Ct(e, t, n, r, i, a, o) {
  var s = document.createElement("div");
  s.class = "radio_div", kt(e, t, "prompt");
  for (var c = 0; c < r.length; c++) {
   var l = document.createElement("input");
   l.type = "radio", l.id = r[c], l.id === a && (l.checked = !0), l.name = n, s.appendChild(l), 
   kt(s, i[c], "radio_label");
   var u = document.createElement("span");
   u.innerHTML = "&nbsp;&nbsp", s.appendChild(u);
  }
  return e.appendChild(s), o && e.appendChild(document.createElement("br")), s;
 }
 function xt() {
  var e = document.getElementById(de), t = document.createElement("div");
  t.id = "metadata_modal_wrapper", e.appendChild(t);
  var n = document.createElement("div");
  n.id = "metadata_modal_window", t.appendChild(n);
  var r = document.createElement("div");
  r.style.textAlign = "right";
  var i = document.createElement("a");
  i.id = "metadata_modal_close", i.href = "#", i.innerHTML = "Close <b>X</b>", r.appendChild(i), 
  i.addEventListener("click", ct, !1), n.appendChild(r), wt(n, "authority", "Authority", "name", void 0, !1), 
  wt(n, "authority_year", "Year", "year", Et, !0), wt(n, "transcriber", "Transcriber", "name", void 0, !0), 
  function(e, t, n, r, i, a) {
   var o = document.createElement("textarea");
   o.class = r, o.id = t, o.rows = i, o.cols = a;
   var s = document.createElement("label");
   s.htmlFor = t, s.appendChild(document.createTextNode(n)), e.appendChild(s), e.appendChild(o);
  }(n, "comments", "Comments", "comments", 10, 50);
 }
 function It() {
  var e = document.getElementById(le), n = document.createElement("div");
  n.id = "prefs_modal_wrapper", e.appendChild(n);
  var r = document.createElement("div");
  r.id = "prefs_modal_window", n.appendChild(r);
  var i = document.createElement("div");
  i.style.textAlign = "right";
  var a = document.createElement("a");
  a.id = "prefs_modal_close", a.href = "#", a.innerHTML = "Close <b>X</b>", i.appendChild(a), 
  a.addEventListener("click", dt, !1), r.appendChild(i);
  var o = document.createElement("h3");
  o.innerText = "Preferences", r.appendChild(o);
  var s = "restore", c = [ "always", "never", "ask" ], l = [ "Always", "Never", "Ask" ];
  t && t[s] || Ct(r, "Restore Data", s, c, l, "ask", !0), s = "output", t && t[s] || Ct(r, "Output", s, c = [ "append", "replace" ], l = [ "Append", "Replace" ], "append", !0), 
  s = "preset", t && t[s] || Ct(r, "Preset", s, c = [ "first", "last", "none" ], l = [ "First", "Last", "None" ], "first", !0), 
  s = "keypad", c = [ "show", "hide" ], l = [ "Show", "Hide" ];
  var u = "hide";
  "ontouchstart" in window && (u = "show"), Ct(r, "Keypad", s, c, l, u, !0), function(e, t, n, r, i, a, o, s) {
   var c = document.createElement("div");
   c.class = "spinner_div", kt(c, t, "prompt");
   var l = document.createElement("input");
   l.id = n, l.min = r, l.max = i, l.size = a, l.type = "number", l.value = o, c.appendChild(l), 
   e.appendChild(c), s && e.appendChild(document.createElement("br"));
  }(r, "Measure Number Interval", "measure_number_interval", 0, 20, 2, 5, !0), wt(r, "default_authority", "Default Authority", "name", void 0, !0), 
  wt(r, "default_authority_year", "Year", "year", Et, !0), wt(r, "default_transcriber", "Transcriber Name", "name", void 0, !0);
 }
 function Bt(e, t, n) {
  var r = document.createElement("input");
  r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, r.onclick = function() {
   on(n);
  }, e.appendChild(r);
 }
 function Tt(e) {
  var t = $e("qualtrics"), n = yn(i), r = "abcDF_" + n, a = "abcD_" + n, o = Sn();
  Qualtrics.SurveyEngine.setEmbeddedData(r, o);
  var s = qn();
  Qualtrics.SurveyEngine.setEmbeddedData(a, s), Re(), "q_next" === e ? (Te(), Zt(), 
  function() {
   for (var e = document.getElementById(oe); e.firstChild; ) e.removeChild(e.firstChild);
   e.remove(), M = !1, m && clearInterval(m);
  }(), f = !1, t.enableNextButton(), t.enablePreviousButton(), t.clickNextButton()) : (t.enableNextButton(), 
  t.enablePreviousButton(), t.clickPreviousButton());
 }
 function Dt(e, t, n) {
  var r = document.createElement("input");
  r.type = "button", r.class = "keypad-button", r.id = t, r.value = n, r.onclick = function() {
   Tt(t);
  }, e.appendChild(r);
 }
 function St(t, n, r, i) {
  var a = document.createElement("input");
  a.id = n, a.class = "keypad_button", a.type = "image", a.src = R + "/" + r, a.alt = i, 
  a.onclick = function() {
   !function(t) {
    var n = ke;
    switch (t) {
    case "previous":
     n = Ce;
     break;

    case "next":
     n = xe;
     break;

    case "backspace":
     n = we;
     break;

    case "pencil":
     n = Ee;
     break;

    case "undo":
     n = ye;
     break;

    case "redo":
     n = be;
    }
    var r = Wt(n);
    r && e.preventDefault();
   }(n);
  }, t.appendChild(a);
 }
 function At() {
  var e = document.getElementById(fe), t = document.createElement("number_div");
  t.id = "number_div";
  var n = document.createElement("symbol_div");
  n.id = "symbol_div", e.appendChild(n), e.appendChild(document.createElement("br")), 
  e.appendChild(t), St(t, "undo", "action-undo.svg", "undo"), St(t, "redo", "action-redo.svg", "redo"), 
  Bt(t, "one", "1"), Bt(t, "two", "2"), Bt(t, "three", "3"), Bt(t, "four", "4"), Bt(t, "five", "5"), 
  Bt(t, "toggle", "T"), St(t, "previous", "arrow-circle-left.svg", "<-"), St(t, "next", "arrow-circle-right.svg", "->"), 
  $e("qualtrics") && ($e("qualtrics_back") && Dt(t, "q_back", "BACK"), Dt(t, "q_next", "NEXT"));
  var r, i, a, o, s = $e("submit_button_id");
  if (s) {
   var c = $e("submit_button_label");
   c || (c = "NEXT"), r = t, i = s, a = c, (o = document.createElement("input")).type = "button", 
   o.class = "keypad-button", o.id = i, o.value = a, r.appendChild(o);
  }
  St(n, "pencil", "target.svg", "..."), Bt(n, "hyphen", "-"), Bt(n, "slash", "/"), 
  Bt(n, "open_paren", "("), Bt(n, "close_paren", ")"), Bt(n, "short_phrase", ","), 
  Bt(n, "medium_phrase", ";"), Bt(n, "long_phrase", "."), St(n, "backspace", "delete.svg", "<]");
 }
 function qt(e, t) {
  console.log(e + " Line: " + t.line + " Start: " + t.start + " Time: " + t.time + " String: " + t.string + " Size: " + t.size + " Pitch: " + t.pitches.join(",") + " Voice: " + t.voice + " Staff: " + t.staff + " Grace: " + t.grace);
 }
 function Nt(e, t) {
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
    for (var e = 0; e < C.length; e++) C[e].undone_fingerings = [];
    l = [];
   }(), "x" != this.fingering && this.prior_fingerings.push(this.fingering), e) {
    var t = Y.exec(e);
    t ? (this.phrase_break = t[1], this.fingering = e.replace(Y, "")) : this.fingering = e;
   } else this.init();
   u.push(this);
  }, this.set_preset_fingering = function(e) {
   if (e) {
    var t = Y.exec(e);
    t ? (this.preset_phrase_break = t[1], this.preset_fingering = e.replace(Y, "")) : this.preset_fingering = e;
   } else this.preset_init();
  }, this.get_pitch_fingering = function(e) {
   var t = function(e) {
    if (L) return 0 == e.staff ? "<" : ">";
    return Qt(e.staff);
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
 function Lt() {
  var e;
  this.read_file = function(e) {
   return "";
  }, this.errmsg = function(e, t, n) {
   var r = document.getElementById(he);
   r.innerHTML += t ? '<b onclick="gotoabc(' + t + "," + n + ')" style="cursor: pointer; display: inline-block">' + e + "</b><br/>\n" : e + "<br/>\n";
  }, this.img_out = function(e) {
   var t = /<svg /;
   e.match(t) && (e = e.replace(t, '<svg id="line_' + k + '" '), k++), r += e;
  }, this.anno_start = function(e, t, n, r, i, o, s) {
   !D && t in I ? I[t].line = k : "grace" === e && console.log(e + " ANNO_START start: " + t + " stop: " + n), 
   q.push([ t, n ]), a.out_svg('<g class="e_' + t + '">\n');
  }, this.anno_stop = function(e, t, n, r, i, o, s) {
   "grace" === e && console.log(e + " ANNO_STOP start: " + t + " stop: " + n), a.out_svg("</g>\n"), 
   a.out_svg('<rect class="abcr _' + t + '" x="'), a.out_sxsy(r, '" y="', i), a.out_svg('" width="' + o.toFixed(2) + '" height="' + s.toFixed(2) + '"/>\n');
  }, this.get_abcmodel = function(e, t, n) {
   if (!D) {
    console.log(n);
    for (var r = 0; r < t.length; r++) {
     console.log("Voice: " + r);
     var i = t[r].st;
     A[r] = i;
    }
    for (var a = e; a; ) {
     var o = new Nt(n, a);
     o.istart && (C.push(o), I[o.istart] = o, o.staff in S || (S[o.staff] = {}), o.time in S[o.staff] || (S[o.staff][o.time] = []), 
     S[o.staff][o.time].push(o)), a = a.ts_next;
    }
   }
  }, this.page_format = !1, this.imagesize = (e = 8.5, 1 !== p && (e *= p), 'width="' + e + 'in"');
 }
 function Ft(e, t) {
  var n = parseInt(e.time) - parseInt(t.time);
  return 0 !== n ? n : e.grace && !t.grace ? -1 : t.grace && !e.grace ? 1 : e.pitches[e.pitches.length - 1] < t.pitches[0] ? -1 : e.pitches[0] > t.pitches[t.pitches.length - 1] ? 1 : e.voice < t.voice ? (console.log("NOTES SORTED BY VOICE!"), 
  -1) : 1;
 }
 function Pt(e) {
  var t = "$1";
  return e.match(U) && (t = "$1"), e.match(G) && (t = "$2"), t;
 }
 function Mt(e) {
  var t = "^";
  return /^</.test(e) && (t = "_"), t;
 }
 function Ht(e) {
  for (var t = Pt("<"), n = Pt(">"), r = e.replace(/[\)\(]/g, ""), i = it(r), a = "", o = 0; o < i.length; o++) i[o] = i[o].replace(G, t), 
  i[o] = i[o].replace(U, n), a += i[o];
  return a += '"', a = '"' + Mt(r) + a;
 }
 function zt(e, t, n) {
  for (var r = !1, i = Pt("<"), a = Pt(">"), o = [], s = 0; s < e.length; s++) {
   var c = "", l = "x";
   if (e[s] && "x" !== e[s]) r = !0, l = e[s]; else {
    if (!n) break;
    if (!e[s] || e[s] && "x" === e[s]) continue;
   }
   if (l.match(/^\(/)) c = Ht(l); else c = '"' + Mt(l) + (l = (l = l.replace(G, i)).replace(U, a)) + '"';
   c = c.replace(Y, ""), o.unshift(c);
  }
  var u = "";
  return r && (u = o.join("")), u;
 }
 function Rt(e) {
  var t = e.fingering;
  return "x" === t ? "" : zt(it(t = t.replace(X, "")), e.staff, !1);
 }
 function $t(e) {
  var t = [];
  for (var n in e) e.hasOwnProperty(n) && t.push(n);
  return t.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), t;
 }
 function Ot(e) {
  for (var t = [], n = {}, r = 0; r < e.length; r++) {
   var i = e[r];
   if (!i.grace) for (var a = 0; a < i.pitches.length; a++) {
    var o = i.pitches[a];
    t.push(o), o in n || (n[o] = []), n[o].push(i);
   }
  }
  for (r = 0; r < n.length; r++) n[r].sort(Ft);
  return n;
 }
 function Vt(e) {
  for (var t = Ot(e), n = $t(t), r = [], i = 0; i < n.length; i++) for (var a = n[i], o = 0; o < t[a].length; o++) for (var s = t[a][o], c = it(s.fingering), l = 0; l < s.pitches.length; l++) {
   s.pitches[l] === parseInt(a) && ("x" !== c[l] ? r.push(c[l]) : r.push(""));
  }
  return r;
 }
 function Xt(e) {
  for (var t = 0, n = 0; n < e.length; n++) e[n].grace && t++;
  return t;
 }
 function Gt(e) {
  if (e.size > 1 && console.log("BIGGIE"), e.grace) return Rt(e);
  var t = S[e.staff][e.time], n = Xt(t);
  if (t.length - n < 2) return Rt(e);
  t.sort(Ft);
  for (var r = 0, i = t[0]; i.grace; ) i = t[++r];
  return e !== i ? "" : zt(Vt(t), e.staff, !0);
 }
 function Ut(e) {
  var t = "{", n = function(e) {
   for (var t = [], n = e.string, r = e.starts, i = e.stops, a = [], o = [], s = 0; s < r.length; s++) a.push(r[s] - r[0]), 
   o.push(i[s] - r[0]);
   for (var c = 0; c < a.length; c++) {
    var l = n.substring(a[c], o[c]);
    t.push(l);
   }
   return t;
  }(e), r = [];
  e.fingering && (r = it(e.fingering));
  for (var i = 0; i < n.length; i++) {
   if (r[i]) {
    var a = r[i];
    "x" !== (a = a.replace(j, "")) && (t += "!" + a + "!");
   }
   t += n[i];
  }
  return t += "}";
 }
 function jt(e) {
  if (e.fingering) return !0;
  for (var t = S[e.staff][e.time], n = 0; n < t.length; n++) if (!t[n].grace && t[n].fingering) return !0;
  return !1;
 }
 function Yt(e) {
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
 function Kt() {
  var e = "";
  if (function() {
   if (void 0 !== s) return s;
   s = !1;
   for (var e = !1, t = !1, n = i.split("\n"), r = 0; r < n.length; r++) {
    var a = n[r];
    if (a.match(/^%%setfont-1/) && (e = !0), a.match(/^%%setfont-2/) && (t = !0), e && t) {
     s = !0;
     break;
    }
   }
   return s;
  }() || (e += Ie + "\n", function() {
   if (void 0 !== n) return n;
   n = !1;
   for (var e = 0; e < T.length; e++) {
    var t = T[e];
    if (I[t].grace) {
     n = !0;
     break;
    }
   }
   return n;
  }() && (e += Be + "\n")), !function() {
   if (void 0 !== c) return c;
   c = !1;
   for (var e = i.split("\n"), t = 0; t < e.length; t++) if (e[t].match(/^%%measurenb\s+\d+/)) {
    c = !0;
    break;
   }
   return c;
  }()) {
   var t = $e("measure_number_interval");
   t && (e += "%%measurenb " + t + "\n");
  }
  for (var r = 0, a = 0; a < T.length; a++) {
   var o = T[a], l = I[o], u = "";
   if (l.grace) {
    if (u = i.substring(parseInt(r), parseInt(l.start - 1)), r = l.end + 1, e += u, 
    l.fingered_start = e.length + l.anno_start - l.start + 1, l.fingering && "x" !== l.fingering) {
     var d = it(l.fingering);
     l.fingered_start += 3 * d.length;
    }
    e += Ut(l);
   } else {
    var f = parseInt(l.start), p = parseInt(l.end);
    u = i.substring(parseInt(r), f), e += u += Yt(l), r = p, jt(l) && (e += Gt(l)), 
    l.fingered_start = e.length, e += l.string;
   }
   B[l.fingered_start] = l;
  }
  return e += i.substring(r);
 }
 function Zt() {
  f = !0, N++, console.log("RERENDERING NUMBER " + N);
  var e = new Date().getTime(), t = document.getElementById(ge), n = document.getElementById(he), i = new Lt();
  a = new Abc(i);
  var o = Kt(), s = new Date().getTime(), c = s - e;
  console.log("MY LAG: " + c), document.getElementById(se).value = o, e = new Date().getTime(), 
  r = "", a.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  k = 0, n.innerHTML = "", q = [];
  try {
   a.tosvg(_, document.getElementById(se).value);
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
    fn(this);
   }, e.ondblclick = function() {
    gn(this);
   };
  }, 300), c = (s = new Date().getTime()) - e, console.log("LIB LAG: " + c), bt();
 }
 function Wt(e) {
  if (console.log(String.fromCharCode(e) + " --\x3e " + e), e === we) {
   tn();
   var t = nn();
   t.length > 0 && t[0] ? (o.set_fingering(""), o.phrase_break = "", Zt()) : o.prior_note && ((o = o.prior_note).set_fingering(""), 
   Zt()), _n(o);
  } else if (e == ke || e == xe) an(), w = [], o.next_note && (o = o.next_note); else if (e == Ce) an(), 
  w = [], o.prior_note && (o = o.prior_note); else if (e == Ee) pn(); else if (e == ye) !function() {
   tn();
   var e = u.pop();
   e && (e.undo_fingering_change(), o = e, Zt(), _n(o));
  }(); else {
   if (e != be) return !1;
   !function() {
    tn();
    var e = l.pop();
    e && (e.redo_fingering_change(), o = e.next_note ? e.next_note : e, Zt(), _n(o));
   }();
  }
  return _n(o), !0;
 }
 function Jt(e) {
  var t = Wt(e.keyCode);
  return t && e.preventDefault(), t;
 }
 function Qt(e) {
  return 0 == e ? ">" : "<";
 }
 function en(e) {
  for (var t = e.upper.score_fingerings; t.length > 0; ) o.update_from_score_fingerings(t) && o.next_note && (o = o.next_note);
  E && (o = o.prior_note);
 }
 function tn() {
  E = !1, b = [], w = [], Zt(), _n(o);
 }
 function nn() {
  for (var e = [], t = o.get_fingering().split(""), n = 0; n < t.length; n++) {
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
 function an() {
  var e = !1;
  w.length > 0 && (Array.prototype.unshift.apply(b, w), function() {
   for (var e = 0; e < w.length; e++) if ("(" === w[e]) return !0;
   return !1;
  }() || (e = !0)), w = [];
  for (var t = b.length - 1; t >= 0 && /[\-\/\(]/.test(b[t]); t--) w.unshift(b.pop());
  if (0 !== b.length) {
   if (/[\-\/]/.test(b[0]) && (e = !0), E) {
    var n = nn();
    ")" === n[n.length - 1] ? n.pop() : (alert("Something wonky with parentheses."), 
    tn()), Array.prototype.unshift.apply(b, n), E = !1;
   }
   e ? o.prior_note ? (o = o.prior_note, rn()) : b.pop() : o.fingering && o.fingering.match(/x/) && rn();
   for (var r = b.join(""), i = 1; ;) try {
    var a = Abcdf_Parser.parse(r);
    E = !1, 2 === i && (E = !0), en(a);
    break;
   } catch (e) {
    if (1 === i ? b.push(")") : 2 === i ? (b.pop(), b.pop(), 0) : 3 === i && (i = 0), 
    0 == b.length) break;
    r = b.join(""), i++;
   }
   b = [], Zt(), _n(o);
  }
 }
 function on(e) {
  clearTimeout(y);
  var t = !1;
  return /[\(\)\/\-1-5]/.test(e) && (b.push(e), t = !0), "t" !== e && "T" !== e || (an(), 
  L ? (L = !1, f && (document.body.style.backgroundColor = "white")) : (L = !0, f && (document.body.style.backgroundColor = "black")), 
  _n(o), t = !0), "," !== e && ";" !== e && "." !== e || (an(), function(e) {
   o.phrase_break = e;
  }(e), Zt(), t = !0), y = setTimeout(an, ie), console.log("Done " + y), t;
 }
 function sn(e) {
  var t;
  return on((t = e, null == t.which ? String.fromCharCode(t.keyCode) : 0 != t.which && 0 != t.charCode ? String.fromCharCode(t.which) : null).toLowerCase());
 }
 function cn(e, t) {
  var n = [], r = [];
  r.push("% abcDidactyl v6");
  for (var i, a = Ve(e), o = e.split("\n"), s = "", c = !1, l = 0; l < o.length; l++) {
   var u = o[l];
   s ? c ? n.push(u) : (i = Q.exec(u)) && (c = !0) : (i = W.exec(u)) && i[1] ? s = i[1] : n.push(u);
  }
  var d, f, p, g, h, m = ze(), v = Fe(t);
  "replace" === $e("output") ? a[m - 1] = v : a.push(v);
  for (l = 0; l < a.length; l++) {
   var _ = l + 1;
   try {
    Abcdf_Parser.parse(a[l].sequence);
   } catch (e) {
    alert("Bad abcDF parse of fingering string: " + e.message);
   }
   d = "% abcD fingering " + _ + ": " + a[l].sequence, r.push(d), a[l].authority && (f = "% Authority: " + a[l].authority, 
   a[l].authority_year && (f += " (" + a[l].authority_year + ")"), r.push(f)), a[l].transcriber && (p = "% Transcriber: " + a[l].transcriber, 
   r.push(p)), a[l].transcription_date && (g = "% Transcription date: " + a[l].transcription_date, 
   r.push(g)), h = a[l].comments.split("\n");
   for (var y = 0; y < h.length; y++) (y !== h.length - 1 || h[y]) && r.push("% " + h[y]);
  }
  return r.push("% abcDidactyl END"), r.join("\n") + "\n" + n.join("\n");
 }
 function ln() {
  document.body.addEventListener("keydown", Jt), document.body.addEventListener("keypress", sn);
 }
 function un() {
  document.body.removeEventListener("keydown", Jt), document.body.removeEventListener("keypress", sn);
 }
 function dn() {
  if (function() {
   if (!M) {
    var e = document.getElementById(oe);
    e.align = "center";
    var t = document.getElementById(se);
    t || ((t = document.createElement("div")).id = se, t.style.display = "none", e.appendChild(t)), 
    t.class = ce;
    var n = document.createElement(le);
    n.id = le, e.appendChild(n);
    var r = document.createElement(ue);
    r.id = ue, e.appendChild(r);
    var i = document.createElement(de);
    i.id = de, e.appendChild(i);
    var a = document.createElement(pe);
    a.id = pe, e.appendChild(a);
    var o = document.createElement(ge);
    o.id = ge, a.appendChild(o);
    var s = document.createElement(he);
    s.id = he, a.appendChild(s);
    for (var c = 0; c < 7; c++) a.appendChild(document.createElement("br"));
    var l = document.createElement(fe);
    l.id = fe, e.appendChild(l);
   }
  }(), Te(), function() {
   if (!M) {
    It(), xt();
    var e = R + "/download_36_x4.png", n = document.getElementById(ue), r = document.createElement("table"), i = document.createElement("tbody"), a = document.createElement("tr");
    n.appendChild(r), r.appendChild(i), r.style.backgroundColor = "LightGray", r.align = "center", 
    i.appendChild(a);
    var o = document.createElement("p");
    o.setAttribute("id", "downloadify"), (l = document.createElement("td")).appendChild(o), 
    a.appendChild(l);
    var s = document.createElement("input");
    s.id = "sequence_spinner", s.min = "1", s.max = "999", s.size = 3, s.type = "number", 
    s.alt = "fingering_number", s.value = 1, s.onchange = Bn, kt(l = document.createElement("td"), "Suggestion", "sequence_prompt"), 
    l.appendChild(s), a.appendChild(l), t.preset_select || (l.style.display = "none"), 
    t.sequence && (s.value = t.sequence);
    var c = document.createElement("input");
    c.type = "image", c.src = R + "/eye.svg", c.width = "36", c.alt = "View", c.onclick = Dn, 
    (l = document.createElement("td")).appendChild(c), a.appendChild(l), t.hide_view && (l.style.display = "none");
    var l, u = document.createElement("input");
    u.type = "image", u.src = R + "/print.svg", u.width = "36", u.alt = "Print...", 
    u.onclick = In, (l = document.createElement("td")).appendChild(u), a.appendChild(l), 
    t.hide_print && (l.style.display = "none"), l = document.createElement("td");
    var d = document.createElement("input");
    d.type = "checkbox", d.value = "annotated", d.checked = P, d.id = "view_annotated", 
    d.onclick = _t;
    var f = document.createElement("label");
    f.htmlFor = "view_annotated", f.appendChild(document.createTextNode("Annotated")), 
    l.appendChild(d), t.hide_annotated && (l.style.display = "none"), l.appendChild(f), 
    a.appendChild(l), t.hide_annotated && (l.style.display = "none");
    var p = document.createElement("input");
    p.type = "image", p.src = R + "/reload.svg", p.width = "36", p.alt = "reset", p.onclick = nt, 
    (l = document.createElement("td")).appendChild(p), a.appendChild(l), t.hide_reset && (l.style.display = "none");
    var g = document.createElement("input");
    g.id = "copy_fingerings_button", g.type = "image", g.src = R + "/clipboard.svg", 
    g.width = "36", g.alt = "copy", (l = document.createElement("td")).appendChild(g), 
    a.appendChild(l), t.hide_copy ? g.style.display = "none" : new Clipboard("#copy_fingerings_button", {
     text: et
    });
    var h = document.createElement("input");
    h.type = "image", h.src = R + "/paperclip.svg", h.width = "36", h.alt = "paste", 
    h.onclick = tt, (l = document.createElement("td")).appendChild(h), a.appendChild(l), 
    t.hide_paste && (h.style.display = "none");
    var m = document.createElement("input");
    m.type = "image", m.src = R + "/globe.svg", m.width = "36", m.alt = "URL", m.onclick = mt, 
    (l = document.createElement("td")).appendChild(m), a.appendChild(l), t.url_input || (m.style.display = "none");
    var v = document.createElement("input");
    v.setAttribute("type", "file"), v.setAttribute("accept", "text/vnd.abc"), v.onchange = vt, 
    v.setAttribute("id", "file_input"), (l = document.createElement("td")).appendChild(v), 
    a.appendChild(l), t.file_input || (v.style.display = "none");
    var y = document.createElement("input");
    y.type = "image", y.src = R + "/tags.svg", y.alt = "Metadata...", y.width = "36", 
    y.onclick = st, (l = document.createElement("td")).appendChild(y), a.appendChild(l), 
    t.hide_metadata && (y.style.display = "none");
    var b = document.createElement("input");
    b.type = "image", b.src = R + "/zoom-out.svg", b.alt = "Zoom In", b.width = "36", 
    b.onclick = lt, (l = document.createElement("td")).appendChild(b), a.appendChild(l);
    var E = document.createElement("input");
    E.type = "image", E.src = R + "/zoom-in.svg", E.alt = "Zoom In", E.width = "36", 
    E.onclick = ut, (l = document.createElement("td")).appendChild(E), a.appendChild(l);
    var w = document.createElement("input");
    w.type = "image", w.src = R + "/cog.svg", w.alt = "Preferences...", w.width = "36", 
    w.onclick = ot, (l = document.createElement("td")).appendChild(w), a.appendChild(l), 
    t.hide_prefs && (w.style.display = "none");
    var k = document.createElement("input");
    k.type = "image", k.src = R + "/info.svg", k.alt = "Help", k.width = "36", k.onclick = at, 
    (l = document.createElement("td")).appendChild(k), a.appendChild(l), Downloadify.create("downloadify", {
     filename: function() {
      return _;
     },
     data: Tn,
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
     swf: O + "/downloadify.swf",
     downloadImage: e,
     width: "36",
     height: "36",
     append: !1
    }), At(), M = !0;
   }
  }(), function() {
   Ue("preset", localStorage.getItem("preset")), Ue("output", localStorage.getItem("output")), 
   Ue("restore", localStorage.getItem("restore")), Ue("keypad", localStorage.getItem("keypad"));
   var e = localStorage.getItem("measure_number_interval");
   void 0 !== e && "" !== e || (e = V), je("measure_number_interval", e), je("default_authority", localStorage.getItem("default_authority")), 
   je("default_authority_year", localStorage.getItem("default_authority_year")), je("default_transcriber", localStorage.getItem("default_transcriber"));
  }(), !(i = document.getElementById(se).value)) {
   var e = $e("default_url");
   e && (ht(e), i = document.getElementById(se).value);
  }
  f = !0, i && (h = Ve(i), Xe(), hn(), _n(o = x[0][0][0]), ln()), bt(), $(function() {
   FastClick.attach(document.body);
  });
 }
 function fn(e) {
  console.log("Processing note click....");
  var t = e.getAttribute("class");
  console.log("Click " + t);
  var n = t.split("_")[1];
  if (n in B) {
   var r = B[n];
   qt("process_note_click", r), _n(r), o = r;
  }
 }
 function pn() {
  tn();
  var e = "";
  o.preset_fingering && (e += "Preset (recommended) fingering: " + o.get_preset_fingering() + "\n\n"), 
  e += "Please enter a fingering string for the selected note.";
  var t = o.fingering, n = window.prompt(e, t);
  try {
   if (null === n) return;
   n = (n = n.replace(K, "")).replace(X, ""), en(Abcdf_Parser.parse(n)), Zt(), _n(o);
  } catch (e) {
   alert("Bad abcDF parse of fingering string: " + e.message + e.stack);
  }
 }
 function gn(e) {
  console.log("Processing note double-click...."), fn(e), pn();
 }
 function hn() {
  var e = new Lt(), t = document.getElementById(ge), n = document.getElementById(he);
  t.align = "center", a = new Abc(e), r = "", a.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  n.innerHTML = "", q = [];
  try {
   i && a.tosvg(_, i);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   i && (t.innerHTML = r, function() {
    for (var e, t, n, r, i, a = 0; a < C.length; a++) t = (e = C[a]).line, n = e.staff, 
    t in x || (x[t] = [], x[t][0] = [], x[t][1] = []), x[t][n].push(e);
    for (t = 0; t < x.length; t++) for (n = 0; n < 2; n++) (o = x[t][n]).sort(Ft);
    for (n = 0; n < 2; n++) for (t = 0; t < x.length; t++) {
     var o = x[t][n];
     for (a = 0; a < o.length; a++) r = o[a], i ? (i.next_note = r, r.prior_note = i, 
     i = r) : (i = r, r.prior_note = void 0);
    }
    r.next_note = void 0;
   }(), function() {
    var e;
    for (e in I) I.hasOwnProperty(e) && T.push(e);
    T.sort(function(e, t) {
     return parseInt(e) - parseInt(t);
    });
   }(), D = !0, k = 0, Qe(), Zt());
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
 }
 function mn(e, t) {
  for (var n = document.getElementsByClassName(e), r = n.length; --r >= 0; ) n[r].setAttribute("color", t);
 }
 function vn(e) {
  var t, n = F.length;
  for (t = 0; t < n; t++) mn(F[t], e);
 }
 function _n(e) {
  var t = e.fingered_start;
  0 != F.length && (vn("black"), F = []), F.push("e_" + t), L ? 0 === e.staff ? vn("dodgerblue") : vn("red") : 1 === e.staff ? vn("dodgerblue") : vn("red");
  var n = "line_" + e.line, r = document.getElementById(n);
  if (!function(e) {
   var t = $(e), n = $(window), r = document.getElementById(fe), i = n.scrollTop(), a = i + n.height() - r.offsetHeight, o = t.offset().top;
   return o + t.height() <= a && o >= i;
  }(r)) {
   r.scrollIntoView(!1);
   var i = document.getElementById(fe), a = document.body.scrollTop;
   window.scrollTo(0, a + i.offsetHeight);
  }
 }
 function yn(e) {
  e || (e = i);
  for (var t = e.split("\n"), n = 0; n < t.length; n++) {
   var r = t[n];
   if (/^\s*X:/.test(r)) {
    var a = r.split(":");
    return 2 != a.length ? "" : a[1].trim();
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
 function En(e) {
  if (e.grace) return bn(e);
  var t = S[e.staff][e.time], n = Xt(t);
  if (t.length - n < 2) return bn(e);
  t.sort(Ft);
  for (var r = 0, i = t[0]; i.grace; ) i = t[++r];
  if (e !== i) return "";
  var a = Vt(t), o = "";
  for (r = 0; r < a.length; r++) a[r] ? o += a[r] : o += "x";
  return o;
 }
 function wn(e, t) {
  for (var n = [], r = t, i = e.split(""), a = 0; a < i.length; a++) {
   var o = i[a];
   o.match(j) ? o !== r && (n.push(o), r = o) : n.push(o);
  }
  return n.join("");
 }
 function kn(e, t) {
  for (var n = x[t][e], r = "", i = 0; i < n.length; i++) {
   r += En(n[i]);
  }
  return r;
 }
 function Cn(e, t) {
  let n = Z.exec(e);
  return n && n[1] ? n[1] : t;
 }
 function xn() {
  for (var e = "", t = "", n = Qt(0), r = Qt(1), i = 0; i < x.length; i++) {
   var a = kn(0, i);
   if (a && (n = Cn(a = wn(a, n), n), e += a, i < x.length - 1 && (e += "&")), x[i][1]) {
    var o = kn(1, i);
    o && (r = Cn(o = wn(o, r), r), t += o, i < x.length - 1 && (t += "&"));
   }
  }
  return e + "@" + t;
 }
 function In() {
  console.log("Print that score.");
  var e = window.open("", "print_window");
  e.document.write(r), e.document.close(), e.focus(), e.print(), e.close();
 }
 function Bn() {
  document.getElementById(se).value = i, Te(), i = document.getElementById(se).value, 
  hn(), _n(o = x[0][0][0]), ln();
 }
 function Tn() {
  return cn(P ? Kt() : i, !0);
 }
 function Dn() {
  var e = Tn();
  window.open().document.write("<pre>" + e + "</pre>");
 }
 function Sn() {
  return xn();
 }
 function An(e) {
  var t = function(e) {
   try {
    Abcdf_Parser.parse(e);
   } catch (e) {
    return "Bad abcDF parse of string: " + e.message + e.stack;
   }
   var t = 0, n = $e("validate");
   if ("complete" === n) t = e.split("x").length - 1; else if ("none" === n) t = 0; else if ("auto" === n) return "Validation of autofill is not yet implemented.";
   return 1 === t ? "One note is missing a fingering annotation." : t > 1 ? t + " notes are missing fingering annotations." : "";
  }(e);
  return !t || (alert(t), !1);
 }
 function qn() {
  var e = P;
  P = !1;
  var t = Tn();
  return P = e, t;
 }
 return this.renderUI = function(e) {
  !function(e) {
   t || (t = e).experiment_id || (t.experiment_id = "");
  }(e), dn();
  var n = $e("qualtrics");
  n && (n.disableNextButton(), n.disablePreviousButton());
 }, this.getXValue = yn, this.getAuthority = function() {
  return $e("include_pii") ? Le("authority") : "";
 }, this.getAuthorityYear = function() {
  return Le("authority_year");
 }, this.getTranscriber = function() {
  return $e("include_pii") ? Le("transcriber") : "";
 }, this.getComments = function() {
  return Le("comments");
 }, this.getEnteredCollection = Sn, this.getEnteredAbcDF = Sn, this.getEnteredAbcD = qn, 
 this.getValidatedCollection = function() {
  var e = xn();
  return An(e) ? e : "";
 }, this.getValidatedAbcD = function() {
  if (An(xn())) {
   var e = Tn();
   return /^\s*X:/m.test(e) ? /^% abcDidactyl/m.test(e) ? e : (alert("File is not valid abcD."), 
   "") : (alert("File is not valid abc."), "");
  }
  return "";
 }, this.setEnteredCollection = function(e) {
  o = x[0][0][0];
  var t = ze(), n = Fe(!0);
  n.sequence = e, Je(Ne(t), n), Zt(), _n(o);
 }, this.handleKeys = ln, this.unhandleKeys = un, this;
}