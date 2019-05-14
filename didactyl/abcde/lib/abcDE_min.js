/* abcDE_min.js v6.0.98 */
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
 let t, n, i, r, l, o, a, s, c = [], u = [], d = "", f = !1, p = 1, g = {}, h = [], m = void 0, _ = "", y = "noname.abc", b = 0, v = [], E = !1, k = [], w = 0, C = [], x = [], I = {}, B = {}, T = [], D = !1, S = {}, A = {}, q = [], N = 0, L = !1, F = [], P = !1, M = !1, H = "../../corpora", z = "./abcde_help.html", R = "../image", O = "../lib/media", V = 5, X = /\s/g, G = /</g, U = />/g, j = /[><]/g, Y = /([,;\.])/, K = /&/g, Z = /.*([<>])[^<>]+$/, W = /^% abcDidactyl v([\d\.]+)$/, J = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x,;\.]+)$/, Q = /^% abcDidactyl END$/, ee = /^% Authority: ([^\(]+)(\s+\((\d\d\d\d)\))?$/, te = /^% Transcriber: (.*)$/, ne = /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/, ie = /^% (.*)$/, re = 300, le = 4e3, oe = "abcde", ae = "abc_source", se = "source", ce = "abcde_prefs", ue = "abcde_controls", de = "abcde_metadata", fe = "abcde_keypad", pe = "abcde_rendering", ge = "abcde_target", he = "abcde_error", me = .1, _e = 3, ye = .3, be = 90, ve = 89, Ee = 13, ke = 8, we = 9, Ce = 37, xe = 39, Ie = "%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11", Be = "%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";
 function Te() {
  m && clearInterval(m), c = [], u = [], _ = "", f = !1, y = "noname.abc", n = void 0, 
  r = "", l = void 0, v = [], E = !1, k = [], o = void 0, w = 0, C = [], x = [], I = {}, 
  B = {}, T = [], D = !1, S = {}, A = {}, q = [], N = 0, a = void 0, s = void 0, F = [];
 }
 function De(e) {
  let t, n = S[e], i = [];
  for (t in n) n.hasOwnProperty(t) && i.push(t);
  return i.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), i;
 }
 function Se(e, t) {
  if (!e) return console.log("MISSING fingers have no hands."), "";
  if ("x" === e) return e;
  let n = t, i = [], r = e.split("");
  for (let e = 0; e < r.length; e++) {
   let t = r[e];
   "<" === t || ">" === t ? n = t : t.match(/\d/) ? i.push(n + t) : i.push(t);
  }
  return i.join("");
 }
 function Ae() {
  return "undefined" != typeof Storage;
 }
 function qe(e, n) {
  _ || (_ = md5(r));
  let i = e + "_" + n + "_" + _;
  return t.experiment_id && (i = t.experiment_id + "_" + i), i;
 }
 function Ne(e) {
  if (!Ae()) return {};
  let t = {
   sequence: ""
  }, n = qe("sequence", e), i = localStorage.getItem(n) || "";
  i.match(/[^x&@]/) && (t.sequence = i), n = qe("authority", e);
  let r = localStorage.getItem(n) || "";
  t.authority = r, n = qe("authority_year", e);
  let l = localStorage.getItem(n) || "";
  t.authority_year = l, n = qe("transcriber", e);
  let o = localStorage.getItem(n) || "";
  t.transcriber = o, n = qe("comments", e);
  let a = localStorage.getItem(n) || "";
  return t.comments = a, t;
 }
 function Le(e) {
  let t = document.getElementById(e);
  return t.value ? t.value : "";
 }
 function Fe(e) {
  let t = new Date(), n = t.getFullYear() + "-" + sprintf("%02d", t.getMonth() + 1) + "-" + sprintf("%02d", t.getDate()) + " " + sprintf("%02d", t.getHours()) + ":" + sprintf("%02d", t.getMinutes()) + ":" + sprintf("%02d", t.getSeconds()), i = "", r = "";
  return (e || $e("include_pii")) && (i = Le("authority"), r = Le("transcriber")), 
  {
   sequence: Sn(),
   authority: i,
   authority_year: Le("authority_year"),
   transcriber: r,
   transcription_date: n,
   comments: Le("comments")
  };
 }
 function Pe(e, t) {
  let n = document.getElementById(e).value, i = qe(e, t);
  localStorage.setItem(i, n);
 }
 function Me(e) {
  let t = document.getElementsByName(e);
  for (let e = 0; e < t.length; e++) {
   let n = t[e];
   if (n.checked) return n.id;
  }
 }
 function He(e) {
  let t = "";
  if ("preset_preference" === e || "output" === e || "keypad" === e || "restore" == e) t = Me(e); else {
   t = document.getElementById(e).value;
  }
  g[e] = t, localStorage.setItem(e, t);
 }
 function ze() {
  let e = document.getElementById("sequence_spinner");
  return e ? e.value : (alert("Sequence DOM element has gone missing."), "1");
 }
 function Re() {
  if (!Ae()) return void clearInterval(m);
  if (!document.getElementById("sequence_spinner")) return void clearInterval(m);
  let e = ze(), t = qe("sequence", e), n = Sn();
  localStorage.setItem(t, n), Pe("authority", e), Pe("authority_year", e), Pe("transcriber", e), 
  Pe("comments", e);
 }
 function $e(e) {
  if (t && t[e]) return t[e];
  if ("preset" === e) return "";
  if ("measure_number_interval" === e) {
   return document.getElementById(e).value;
  }
  let n = Me(e);
  return n || "";
 }
 function Oe() {
  let e = {};
  return e.authority = Le("default_authority"), e.authority_year = Le("default_authority_year"), 
  e.transcriber = Le("default_transcriber"), e.sequence = "x", e.comments = "", e;
 }
 function Ve(e) {
  let t, n = e.split("\n"), i = !1, r = {}, l = [], o = "";
  for (let e = 0; e < n.length; e++) {
   let a = n[e];
   if (!o && (t = W.exec(a)) && t[1]) o = t[1], i = !0; else if (i) if ((t = J.exec(a)) && t[1] && t[2]) r = {
    sequence: t[2],
    comments: ""
   }, l.push(r); else {
    if (t = Q.exec(a)) break;
    if ((t = ee.exec(a)) && t[1]) {
     r.authority = t[1], t[2] && (r.authority_year = t[3]);
     continue;
    }
    if ((t = te.exec(a)) && t[1]) {
     r.transcriber = t[1];
     continue;
    }
    if ((t = ne.exec(a)) && t[1]) {
     r.transcription_date = t[1];
     continue;
    }
    (t = ie.exec(a)) && t[1] && (r.comments += t[1] + "\n");
   }
  }
  return l;
 }
 function Xe() {
  let e = document.getElementById("sequence_spinner");
  e.min = 1, e.max = h.length || 1;
  let t = function() {
   let e = $e("preset");
   if (e) return e;
   let t = 1;
   return "last" === (e = $e("preset_preference")) && (t = h.length || 1), t;
  }();
  e.value = t;
 }
 function Ge(e) {
  if (e) {
   let t = e - 1;
   return parseInt(e) <= h.length ? h[t] : Oe();
  }
  return function() {
   let e = $e("preset");
   if (e) return h[e - 1];
   return (e = $e("preset_preference")) && "none" !== e ? "first" === e ? h[0] : "last" === e ? h[h.length - 1] : "" : Oe();
  }();
 }
 function Ue(e, t) {
  let n = document.getElementsByName(e);
  for (let e = 0; e < n.length; e++) {
   let i = n[e];
   i.id === t && (i.checked = !0);
  }
 }
 function je(e, t) {
  let n = document.getElementById(e);
  n.value = void 0 !== t ? t : "";
 }
 function Ye(e) {
  je("authority", e.authority), je("authority_year", e.authority_year), je("transcriber", e.transcriber), 
  je("comments", e.comments);
 }
 function Ke(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return !0;
  return !1;
 }
 function Ze(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return n;
  return null;
 }
 function We(e, t) {
  if (!e) return;
  console.log("Setting fingers: ", e);
  let n, i, r, l = {}, o = e.split("@");
  for (n = 0; n < o.length; n++) {
   let e = Qt(n);
   l = [];
   let a = o[n].split("&");
   for (i = 0; i < a.length; i++) {
    let e = rt(a[i]);
    l = l.concat(e);
   }
   let s = De(n);
   for (let i = 0; i < s.length; i++) {
    let o = s[i], a = S[n][o];
    a.sort(Ft);
    let c = 0;
    for (;a[c].grace; ) {
     let n = "";
     a[c][t] = "";
     for (let i = 0; i < a[c].size; i++) (r = l.shift()) || (console.log(t + " MISSING for grace note:"), 
     qt(t + " grace note", a[c])), e = Cn(r = Se(r, e), e), n += r;
     "fingering" === t ? a[c].set_fingering(n) : "preset_fingering" === t && a[c].set_preset_fingering(n), 
     c++;
    }
    let u = Ot(a), d = $t(u), f = [], p = [], g = null;
    for (let n = 0; n < d.length; n++) {
     let i = d[n];
     for (let n = 0; n < u[i].length; n++) {
      if ((g = u[i][n]).grace) continue;
      Ke(p, g) || (f.push(""), p.push(g));
      let o = Ze(p, g);
      (r = l.shift()) || (console.log(t + " MISSING for note:"), qt(t + " pit note", g)), 
      e = Cn(r = Se(r, e), e), f[o] += r;
     }
    }
    for (let e = 0; e < f.length; e++) r = f[e], console.log("FingerING " + r), g = p[e], 
    "fingering" === t ? g.set_fingering(r) : "preset_fingering" === t && g.set_preset_fingering(r);
   }
  }
 }
 function Je(e, t) {
  let n = t.sequence, i = t.sequence, r = !0, l = $e("preset_preference");
  l && "none" !== l || (r = !1, n = "");
  let o = !1;
  if (e && e.sequence && e.sequence !== n) {
   let t = $e("restore");
   (o = "always" === t || "never" !== t && confirm("You have previously entered data for this piece (or suggestion). Do you want to restore them?")) && (n = e.sequence);
  }
  o ? Ye(e) : r && Ye(t), We(i, "preset_fingering"), We(n, "fingering"), m = setInterval(function() {
   Re();
  }, le);
 }
 function Qe() {
  let e = ze();
  Je(Ne(e), Ge(e)), function() {
   let e = Le("authority"), t = Le("default_authority");
   !e && t && je("authority", t);
   let n = Le("authority_year"), i = Le("default_authority_year");
   !n && i && je("authority_year", i);
   let r = Le("transcriber"), l = Le("default_transcriber");
   !r && l && je("transcriber", l);
  }();
 }
 function et(e) {
  return xn();
 }
 function tt() {
  let e = window.prompt("Please enter a fingering string for the current piece.", "");
  null !== e && (We(e, "fingering"), Zt());
 }
 function nt() {
  if (!r) return;
  if (confirm("All changes you have made to this fingering sequence will be discarded, and the initial sequence will be restored. Are you sure you want to proceed?")) {
   Je(void 0, Ge(ze())), Zt(), yn(o = x[0][0][0]);
  }
 }
 function it(e) {
  return function e(t, n) {
   if (null == t) return n;
   for (let i = 0; i < t.length; i++) t[i] instanceof Array ? e(t[i], n) : t[i] && n.push(t[i]);
   return n;
  }(e, []).join("");
 }
 function rt(e, t = 0) {
  if (!e) return [];
  console.log("abcdf string: " + e);
  let n = function(e, t = 0, n = !1) {
   let i = [];
   if (n) for (let n = 0; n < e[t].length; n++) for (let r = 0; r < e[t][n].length; r++) {
    let l = e[t][n][r];
    if (l instanceof Array) {
     let e = it(l);
     i.push(e);
    }
   } else for (let n = 0; n < e[t].length; n++) {
    let r = e[t][n];
    if (r instanceof Array) {
     let e = it(r);
     i.push(e);
    }
   }
   return i;
  }(AbcdfRaw_Parser.parse(e), t, K.exec(line));
  return n = n.filter(function(e) {
   return "&" != e && "@" != e;
  });
 }
 function lt() {
  window.open(z, "_blank").focus();
 }
 function ot(e) {
  un();
  let t = document.getElementById("prefs_modal_wrapper"), n = document.getElementById("prefs_modal_window");
  t.className = "overlay";
  let i = n.offsetHeight - document.documentElement.clientHeight;
  i > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - i + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function at(e) {
  un();
  let t = document.getElementById("metadata_modal_wrapper"), n = document.getElementById("metadata_modal_window");
  t.className = "overlay";
  let i = n.offsetHeight - document.documentElement.clientHeight;
  i > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - i + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function st(e) {
  document.getElementById("metadata_modal_wrapper").className = "", Re(), vt(), cn(), 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ct() {
  p > ye && (p -= me, Zt());
 }
 function ut() {
  p < _e && (p += me, Zt());
 }
 function dt(e) {
  He("preset_preference"), He("output"), He("restore"), He("keypad"), He("measure_number_interval"), 
  He("default_authority"), He("default_authority_year"), He("default_transcriber"), 
  document.getElementById("prefs_modal_wrapper").className = "", r && (Zt(), yn(o)), 
  vt(), cn(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ft(e) {
  let t = e.slice(0, 100);
  if (-1 == t.indexOf("<?xml")) return !1;
  let n = t.match(/encoding="([^"]+)"/), i = "utf-8";
  return n && 2 == n.length && (i = n[1]), i;
 }
 function pt(e) {
  let t = $.parseXML(e), n = vertaal(t, {}), i = n[0], r = n[1];
  return r && console.log("xml2abc ERROR: " + r), i || alert("Unable to open MusicXML file: " + r), 
  i;
 }
 function gt(e) {
  let t = e.split(".");
  return t[t.length - 1];
 }
 function ht(e) {
  let t = gt(e), n = 'The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.', i = function(e, t) {
   let n = new XMLHttpRequest();
   return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest()).open(e, t) : n = null, 
   n;
  }("GET", e);
  i ? ("mxl" === t && (i.responseType = "arraybuffer"), i.onload = function() {
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
     return "UTF-8" !== ft(t) ? (alert("Input mxl is not UTF-8 encoded. Cannot open."), 
     "") : t = pt(t);
    }(i.response))) return;
   } else {
    let e = ft(n = i.responseText);
    if (e) {
     if (!/^utf/i.test(e)) return void alert("Input xml is not UTF-8 encoded. Cannot open.");
     n = pt(n);
    }
   }
   n && (d = e, document.getElementById(ae).value = n, dn());
  }, i.onerror = function() {
   alert(n);
  }, i.send()) : alert(n);
 }
 function mt() {
  let e = H + "/clementi/11.abc";
  if (d) e = d; else {
   let t = $e("default_url");
   t && (e = t);
  }
  let t = window.prompt("Please enter URL to open.", e);
  t && ht(t);
 }
 function _t() {
  let e = document.getElementById("file_input").files;
  if (!e.length) return void alert("Please select a valid abc file.");
  let t = e[0];
  if ("mxl" === gt(t.name)) return void function(e) {
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
    "UTF-8" === ft(n) ? (n = pt(n), document.getElementById(ae).value = n, dn()) : alert("Input xml is not UTF-8 encoded. Cannot open.");
   }, t.readAsArrayBuffer(e);
  }(t);
  let n = !1, i = new FileReader();
  i.onload = function(e) {
   let r = ft(i.result), l = new FileReader();
   r ? n = !0 : r = "UTF-8", l.onload = function(e) {
    let t = "";
    t = n ? pt(l.result) : e.target.result, document.getElementById(ae).value = t, dn();
   }, l.readAsText(t, r);
  }, i.readAsText(t, "UTF-8");
 }
 function yt() {
  P = !P;
 }
 function bt(e, t) {
  let n = e.children;
  for (let e = 0; e < n.length; e++) n[e].style.display = t;
 }
 function vt() {
  let e = document.getElementById(fe), t = document.getElementById("number_div"), n = document.getElementById("symbol_div");
  if ("show" === $e("keypad")) e.style.display = "block", t.style.display = "block", 
  n.style.display = "block", bt(t, "inline"), bt(n, "inline"); else {
   bt(n, "none"), bt(t, "none");
   let i = $e("qualtrics"), r = $e("submit_button_id");
   if (i) {
    document.getElementById("q_next").style.display = "inline";
    let e = document.getElementById("q_back");
    e && (e.style.display = "inline");
   } else if (r) {
    document.getElementById(r).style.display = "inline";
   } else t.style.display = "block", n.style.display = "block", e.style.display = "none";
  }
 }
 function Et(e) {
  let t = e.keyCode || e.which;
  t = String.fromCharCode(t);
  /[0-9]/.test(t) || (e.returnValue = !1, e.preventDefault && e.preventDefault());
 }
 function kt(e, t, n, i, r, l) {
  let o = document.createElement("input");
  o.type = "text", o.class = i, o.id = t, r && (o.onkeypress = r), "year" === i && (o.size = "4");
  let a = document.createElement("label");
  a.htmlFor = t, a.appendChild(document.createTextNode(n)), e.appendChild(a), e.appendChild(o), 
  l && e.appendChild(document.createElement("br"));
 }
 function wt(e, t, n) {
  let i = document.createElement("label");
  i.class = n;
  let r = document.createTextNode(t);
  i.appendChild(r), e.appendChild(i);
 }
 function Ct(e, t, n, i, r, l, o) {
  let a = document.createElement("div");
  a.class = "radio_div", wt(e, t, "prompt");
  for (let e = 0; e < i.length; e++) {
   let t = document.createElement("input");
   t.type = "radio", t.id = i[e], t.id === l && (t.checked = !0), t.name = n, a.appendChild(t), 
   wt(a, r[e], "radio_label");
   let o = document.createElement("span");
   o.innerHTML = "&nbsp;&nbsp", a.appendChild(o);
  }
  return e.appendChild(a), o && e.appendChild(document.createElement("br")), a;
 }
 function xt() {
  let e = document.getElementById(de), t = document.createElement("div");
  t.id = "metadata_modal_wrapper", e.appendChild(t);
  let n = document.createElement("div");
  n.id = "metadata_modal_window", t.appendChild(n);
  let i = document.createElement("div");
  i.style.textAlign = "right";
  let r = document.createElement("a");
  r.id = "metadata_modal_close", r.href = "#", r.innerHTML = "Close <b>X</b>", i.appendChild(r), 
  r.addEventListener("click", st, !1), n.appendChild(i), kt(n, "authority", "Authority", "name", void 0, !1), 
  kt(n, "authority_year", "Year", "year", Et, !0), kt(n, "transcriber", "Transcriber", "name", void 0, !0), 
  function(e, t, n, i, r, l) {
   let o = document.createElement("textarea");
   o.class = i, o.id = t, o.rows = r, o.cols = l;
   let a = document.createElement("label");
   a.htmlFor = t, a.appendChild(document.createTextNode(n)), e.appendChild(a), e.appendChild(o);
  }(n, "comments", "Comments", "comments", 10, 50);
 }
 function It() {
  let e = document.getElementById(ce), n = document.createElement("div");
  n.id = "prefs_modal_wrapper", e.appendChild(n);
  let i = document.createElement("div");
  i.id = "prefs_modal_window", n.appendChild(i);
  let r = document.createElement("div");
  r.style.textAlign = "right";
  let l = document.createElement("a");
  l.id = "prefs_modal_close", l.href = "#", l.innerHTML = "Close <b>X</b>", r.appendChild(l), 
  l.addEventListener("click", dt, !1), i.appendChild(r);
  let o = document.createElement("h3");
  o.innerText = "Preferences", i.appendChild(o);
  let a = "restore", s = [ "always", "never", "ask" ], c = [ "Always", "Never", "Ask" ];
  t && t[a] || Ct(i, "Restore Data", a, s, c, "ask", !0), a = "output", t && t[a] || Ct(i, "Output", a, s = [ "append", "replace" ], c = [ "Append", "Replace" ], "append", !0), 
  a = "preset_preference", t && t[a] || Ct(i, "Preset", a, s = [ "first", "last", "none" ], c = [ "First", "Last", "None" ], "first", !0), 
  a = "keypad", s = [ "show", "hide" ], c = [ "Show", "Hide" ];
  let u = "hide";
  "ontouchstart" in window && (u = "show"), Ct(i, "Keypad", a, s, c, u, !0), function(e, t, n, i, r, l, o, a) {
   let s = document.createElement("div");
   s.class = "spinner_div", wt(s, t, "prompt");
   let c = document.createElement("input");
   c.id = n, c.min = i, c.max = r, c.size = l, c.type = "number", c.value = o, s.appendChild(c), 
   e.appendChild(s), a && e.appendChild(document.createElement("br"));
  }(i, "Measure Number Interval", "measure_number_interval", 0, 20, 2, 5, !0), kt(i, "default_authority", "Default Authority", "name", void 0, !0), 
  kt(i, "default_authority_year", "Year", "year", Et, !0), kt(i, "default_transcriber", "Transcriber Name", "name", void 0, !0);
 }
 function Bt(e, t, n) {
  let i = document.createElement("input");
  i.type = "button", i.class = "keypad-button", i.id = t, i.value = n, i.onclick = function() {
   on(n);
  }, e.appendChild(i);
 }
 function Tt(e) {
  let t = $e("qualtrics"), n = bn(r), i = "abcDF_" + n, l = "abcD_" + n, o = Sn();
  Qualtrics.SurveyEngine.setEmbeddedData(i, o);
  let a = qn();
  Qualtrics.SurveyEngine.setEmbeddedData(l, a), Re(), "q_next" === e ? (Te(), Zt(), 
  function() {
   let e = document.getElementById(oe);
   for (;e.firstChild; ) e.removeChild(e.firstChild);
   e.remove(), M = !1, m && clearInterval(m);
  }(), f = !1, t.enableNextButton(), t.enablePreviousButton(), t.clickNextButton()) : (t.enableNextButton(), 
  t.enablePreviousButton(), t.clickPreviousButton());
 }
 function Dt(e, t, n) {
  let i = document.createElement("input");
  i.type = "button", i.class = "keypad-button", i.id = t, i.value = n, i.onclick = function() {
   Tt(t);
  }, e.appendChild(i);
 }
 function St(t, n, i, r) {
  let l = document.createElement("input");
  l.id = n, l.class = "keypad_button", l.type = "image", l.src = R + "/" + i, l.alt = r, 
  l.onclick = function() {
   !function(t) {
    let n = we;
    switch (t) {
    case "previous":
     n = Ce;
     break;

    case "next":
     n = xe;
     break;

    case "backspace":
     n = ke;
     break;

    case "pencil":
     n = Ee;
     break;

    case "undo":
     n = be;
     break;

    case "redo":
     n = ve;
    }
    let i = Wt(n);
    i && e.preventDefault();
   }(n);
  }, t.appendChild(l);
 }
 function At() {
  let e = document.getElementById(fe), t = document.createElement("number_div");
  t.id = "number_div";
  let n = document.createElement("symbol_div");
  n.id = "symbol_div", e.appendChild(n), e.appendChild(document.createElement("br")), 
  e.appendChild(t), St(t, "undo", "action-undo.svg", "undo"), St(t, "redo", "action-redo.svg", "redo"), 
  Bt(t, "one", "1"), Bt(t, "two", "2"), Bt(t, "three", "3"), Bt(t, "four", "4"), Bt(t, "five", "5"), 
  Bt(t, "toggle", "T"), St(t, "previous", "arrow-circle-left.svg", "<-"), St(t, "next", "arrow-circle-right.svg", "->"), 
  $e("qualtrics") && ($e("qualtrics_back") && Dt(t, "q_back", "BACK"), Dt(t, "q_next", "NEXT"));
  let i = $e("submit_button_id");
  if (i) {
   let e = $e("submit_button_label");
   e || (e = "NEXT"), function(e, t, n) {
    let i = document.createElement("input");
    i.type = "button", i.class = "keypad-button", i.id = t, i.value = n, e.appendChild(i);
   }(t, i, e);
  }
  St(n, "pencil", "target.svg", "..."), Bt(n, "hyphen", "-"), Bt(n, "slash", "/"), 
  Bt(n, "open_paren", "("), Bt(n, "close_paren", ")"), Bt(n, "short_phrase", ","), 
  Bt(n, "medium_phrase", ";"), Bt(n, "long_phrase", "."), St(n, "backspace", "delete.svg", "<]");
 }
 function qt(e, t) {
  console.log(e + " Line: " + t.line + " Start: " + t.start + " Time: " + t.time + " String: " + t.string + " Size: " + t.size + " Pitch: " + t.pitches.join(",") + " Voice: " + t.voice + " Staff: " + t.staff + " Grace: " + t.grace);
 }
 function Nt(e, n) {
  if ("note" != e[n.type] && "grace" != e[n.type]) return {};
  if (this.fingering = "", this.preset_fingering = "", this.prior_note = null, this.next_note = null, 
  this.line = -1, this.grace = !1, this.anno_start = n.istart, this.size = 0, this.pitches = [], 
  this.start = -1, this.end = -1, this.starts = [], this.stops = [], this.phrase_break = "", 
  this.preset_phrase_break = "", "note" === e[n.type]) {
   this.size = n.notes.length;
   for (let e = 0; e < this.size; e++) this.pitches.push(n.notes[e].pit);
   this.pitches.sort(function(e, t) {
    return parseInt(e) - parseInt(t);
   }), this.start = n.istart, this.end = n.iend;
  } else {
   this.grace = !0, this.start = n.extra.istart, this.size = 1;
   let e = n.extra;
   if (!e.notes) return alert("Who turned off the notes?!"), {};
   for (;;) {
    if (e.notes.length > 1 && alert('Chords not supported in a grace "note."'), this.starts.push(e.istart), 
    this.stops.push(e.iend), this.pitches.push(e.notes[0].pit), !e.next) {
     this.end = e.iend;
     break;
    }
    e = e.next, this.size++;
   }
  }
  return this.istart = n.istart, this.time = n.time, this.string = r.substring(this.start, this.end), 
  this.voice = n.v, this.staff = n.st, this.prior_fingerings = [], this.undone_fingerings = [], 
  this.locked = !1, this.init = function() {
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
     for (let e = 0; e < C.length; e++) C[e].undone_fingerings = [];
     c = [];
    }(), "x" != this.fingering && this.prior_fingerings.push(this.fingering), e) {
     let t = Y.exec(e);
     t ? (this.phrase_break = t[1], this.fingering = e.replace(Y, "")) : this.fingering = e;
    } else this.init();
    u.push(this);
   }
  }, this.set_preset_fingering = function(e) {
   if (e) {
    t.preset_lock && (/x/.test(e) || (this.locked = !0));
    let n = Y.exec(e);
    n ? (this.preset_phrase_break = n[1], this.preset_fingering = e.replace(Y, "")) : this.preset_fingering = e;
   } else this.preset_init();
  }, this.get_pitch_fingering = function(e) {
   let t = function(e) {
    if (L) return 0 == e.staff ? "<" : ">";
    return Qt(e.staff);
   }(this);
   if (!e.fingering.strike) return "x";
   let n = e.fingering.strike.hand || t, i = n + e.fingering.strike.digit;
   return e.fingering.release && (i += "-" + (n = e.fingering.release.hand || t) + e.fingering.release.digit), 
   i;
  }, this.get_fingering_from_score_fingering = function(e) {
   let t, n, i = "", r = [];
   if (e.first.ornaments) {
    for (r = e.first.ornaments, i += "(", n = 0; n < r.length; n++) t = r[n], i += this.get_pitch_fingering(t);
    i += ")";
   } else i += this.get_pitch_fingering(e.first);
   if (e.last && e.last.ornaments) {
    for (r = e.last.ornaments, i += "(", n = 0; n < r.length; n++) t = e.last.ornaments[n], 
    i += "/" + this.get_pitch_fingering(t);
    i += ")";
   } else e.last && (i += "/" + this.get_pitch_fingering(e.last));
   return i;
  }, this.update_from_score_fingerings = function(e) {
   this.init();
   let t = "", n = 0;
   for (;n < this.size; ) {
    let i = e.shift(), r = this.get_fingering_from_score_fingering(i);
    if (i.segmenter && (this.phrase_break = i.segmenter || ""), t += r, n++, 0 === e.length) break;
   }
   if (n === this.size) return this.set_fingering(t), !0;
   for (;n < this.size; n++) t += "x";
   return this.set_fingering(t), !1;
  }, this.undo_fingering_change = function() {
   this.prior_fingerings.length > 0 && (this.undone_fingerings.push(this.fingering), 
   this.fingering = this.prior_fingerings.pop()), c.push(this);
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
  this.read_file = function(e) {
   return "";
  }, this.errmsg = function(e, t, n) {
   let i = document.getElementById(he);
   i.innerHTML += t ? '<b onclick="gotoabc(' + t + "," + n + ')" style="cursor: pointer; display: inline-block">' + e + "</b><br/>\n" : e + "<br/>\n";
  }, this.img_out = function(e) {
   let t = /<svg /;
   e.match(t) && (e = e.replace(t, '<svg id="line_' + w + '" '), w++), i += e;
  }, this.anno_start = function(e, t, n, i, r, o, a) {
   !D && t in I ? I[t].line = w : "grace" === e && console.log(e + " ANNO_START start: " + t + " stop: " + n), 
   q.push([ t, n ]), l.out_svg('<g class="e_' + t + '">\n');
  }, this.anno_stop = function(e, t, n, i, r, o, a) {
   "grace" === e && console.log(e + " ANNO_STOP start: " + t + " stop: " + n), l.out_svg("</g>\n"), 
   l.out_svg('<rect class="abcr _' + t + '" x="'), l.out_sxsy(i, '" y="', r), l.out_svg('" width="' + o.toFixed(2) + '" height="' + a.toFixed(2) + '"/>\n');
  }, this.get_abcmodel = function(e, t, n) {
   if (D) return;
   console.log(n);
   for (let e = 0; e < t.length; e++) {
    console.log("Voice: " + e);
    let n = t[e].st;
    A[e] = n;
   }
   let i = e;
   for (;i; ) {
    let e = new Nt(n, i);
    e.istart && (C.push(e), I[e.istart] = e, e.staff in S || (S[e.staff] = {}), e.time in S[e.staff] || (S[e.staff][e.time] = []), 
    S[e.staff][e.time].push(e)), i = i.ts_next;
   }
  }, this.page_format = !1, this.imagesize = function() {
   let e = 8.5;
   return 1 !== p && (e *= p), 'width="' + e + 'in"';
  }();
 }
 function Ft(e, t) {
  let n = parseInt(e.time) - parseInt(t.time);
  return 0 !== n ? n : e.grace && !t.grace ? -1 : t.grace && !e.grace ? 1 : e.pitches[e.pitches.length - 1] < t.pitches[0] ? -1 : e.pitches[0] > t.pitches[t.pitches.length - 1] ? 1 : e.voice < t.voice ? (console.log("NOTES SORTED BY VOICE!"), 
  -1) : 1;
 }
 function Pt(e) {
  let t = "$1";
  return e.match(U) && (t = "$1"), e.match(G) && (t = "$2"), t;
 }
 function Mt(e) {
  let t = "^";
  return /^</.test(e) && (t = "_"), t;
 }
 function Ht(e) {
  let t = Pt("<"), n = Pt(">"), i = e.replace(/[\)\(]/g, ""), r = rt(i), l = "";
  for (let e = 0; e < r.length; e++) r[e] = r[e].replace(G, t), r[e] = r[e].replace(U, n), 
  l += r[e];
  return l += '"', l = '"' + Mt(i) + l;
 }
 function zt(e, t, n) {
  let i = !1, r = Pt("<"), l = Pt(">"), o = [];
  for (let t = 0; t < e.length; t++) {
   let a = "", s = "x";
   if (e[t] && "x" !== e[t]) i = !0, s = e[t]; else {
    if (!n) break;
    if (!e[t] || e[t] && "x" === e[t]) continue;
   }
   if (s.match(/^\(/)) a = Ht(s); else {
    a = '"' + Mt(s) + (s = (s = s.replace(G, r)).replace(U, l)) + '"';
   }
   a = a.replace(Y, ""), o.unshift(a);
  }
  let a = "";
  return i && (a = o.join("")), a;
 }
 function Rt(e) {
  let t = e.fingering;
  return "x" === t ? "" : zt(rt(t = t.replace(X, "")), e.staff, !1);
 }
 function $t(e) {
  let t = [];
  for (let n in e) e.hasOwnProperty(n) && t.push(n);
  return t.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), t;
 }
 function Ot(e) {
  let t = [], n = {};
  for (let i = 0; i < e.length; i++) {
   let r = e[i];
   if (!r.grace) for (let e = 0; e < r.pitches.length; e++) {
    let i = r.pitches[e];
    t.push(i), i in n || (n[i] = []), n[i].push(r);
   }
  }
  for (let e = 0; e < n.length; e++) n[e].sort(Ft);
  return n;
 }
 function Vt(e) {
  let t = Ot(e), n = $t(t), i = [];
  for (let e = 0; e < n.length; e++) {
   let r = n[e];
   for (let e = 0; e < t[r].length; e++) {
    let n = t[r][e], l = rt(n.fingering);
    for (let e = 0; e < n.pitches.length; e++) {
     n.pitches[e] === parseInt(r) && ("x" !== l[e] ? i.push(l[e]) : i.push(""));
    }
   }
  }
  return i;
 }
 function Xt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) e[n].grace && t++;
  return t;
 }
 function Gt(e) {
  if (e.size > 1 && console.log("BIGGIE"), e.grace) return Rt(e);
  let t = S[e.staff][e.time], n = Xt(t);
  if (t.length - n < 2) return Rt(e);
  t.sort(Ft);
  let i = 0, r = t[0];
  for (;r.grace; ) r = t[++i];
  return e !== r ? "" : zt(Vt(t), e.staff, !0);
 }
 function Ut(e) {
  let t = "{", n = function(e) {
   let t = [], n = e.string, i = e.starts, r = e.stops, l = [], o = [];
   for (let e = 0; e < i.length; e++) l.push(i[e] - i[0]), o.push(r[e] - i[0]);
   for (let e = 0; e < l.length; e++) {
    let i = n.substring(l[e], o[e]);
    t.push(i);
   }
   return t;
  }(e), i = [];
  e.fingering && (i = rt(e.fingering));
  for (let e = 0; e < n.length; e++) {
   if (i[e]) {
    let n = i[e];
    "x" !== (n = n.replace(j, "")) && (t += "!" + n + "!");
   }
   t += n[e];
  }
  return t += "}";
 }
 function jt(e) {
  if (e.fingering) return !0;
  let t = S[e.staff][e.time];
  for (let e = 0; e < t.length; e++) if (!t[e].grace && t[e].fingering) return !0;
  return !1;
 }
 function Yt(e) {
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
 function Kt() {
  let e = "";
  if (function() {
   if (void 0 !== a) return a;
   a = !1;
   let e = !1, t = !1, n = r.split("\n");
   for (let i = 0; i < n.length; i++) {
    let r = n[i];
    if (r.match(/^%%setfont-1/) && (e = !0), r.match(/^%%setfont-2/) && (t = !0), e && t) {
     a = !0;
     break;
    }
   }
   return a;
  }() || (e += Ie + "\n", function() {
   if (void 0 !== n) return n;
   n = !1;
   for (let e = 0; e < T.length; e++) {
    let t = T[e];
    if (I[t].grace) {
     n = !0;
     break;
    }
   }
   return n;
  }() && (e += Be + "\n")), !function() {
   if (void 0 !== s) return s;
   s = !1;
   let e = r.split("\n");
   for (let t = 0; t < e.length; t++) if (e[t].match(/^%%measurenb\s+\d+/)) {
    s = !0;
    break;
   }
   return s;
  }()) {
   let t = $e("measure_number_interval");
   t && (e += "%%measurenb " + t + "\n");
  }
  let t = 0;
  for (let n = 0; n < T.length; n++) {
   let i = T[n], l = I[i], o = "";
   if (l.grace) {
    if (o = r.substring(parseInt(t), parseInt(l.start - 1)), t = l.end + 1, e += o, 
    l.fingered_start = e.length + l.anno_start - l.start + 1, l.fingering && "x" !== l.fingering) {
     let e = rt(l.fingering);
     l.fingered_start += 3 * e.length;
    }
    e += Ut(l);
   } else {
    let n = parseInt(l.start), i = parseInt(l.end);
    o = r.substring(parseInt(t), n), e += o += Yt(l), t = i, jt(l) && (e += Gt(l)), 
    l.fingered_start = e.length, e += l.string;
   }
   B[l.fingered_start] = l;
  }
  return e += r.substring(t);
 }
 function Zt() {
  f = !0, N++, console.log("RERENDERING NUMBER " + N);
  let e = new Date().getTime(), t = document.getElementById(ge), n = document.getElementById(he), r = new Lt();
  l = new Abc(r);
  let o = Kt(), a = new Date().getTime(), s = a - e;
  console.log("MY LAG: " + s), document.getElementById(ae).value = o, e = new Date().getTime(), 
  i = "", l.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  w = 0, n.innerHTML = "", q = [];
  try {
   l.tosvg(y, document.getElementById(ae).value);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   t.innerHTML = i;
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
  setTimeout(function() {
   let e, t = document.getElementsByClassName("abcr"), n = t.length;
   for (;--n >= 0; ) (e = t[n]).onclick = function() {
    fn(this);
   }, e.ondblclick = function() {
    gn(this);
   };
  }, 300), s = (a = new Date().getTime()) - e, console.log("LIB LAG: " + s), vt();
 }
 function Wt(e) {
  if (console.log(String.fromCharCode(e) + " --\x3e " + e), e === ke) {
   tn();
   let e = nn();
   e.length > 0 && e[0] ? (o.set_fingering(""), o.phrase_break = "", Zt()) : o.prior_note && ((o = o.prior_note).set_fingering(""), 
   Zt()), yn(o);
  } else if (e == we || e == xe) ln(), k = [], o.next_note && (o = o.next_note); else if (e == Ce) ln(), 
  k = [], o.prior_note && (o = o.prior_note); else if (e == Ee) pn(); else if (e == be) !function() {
   tn();
   let e = u.pop();
   e && (e.undo_fingering_change(), o = e, Zt(), yn(o));
  }(); else {
   if (e != ve) return !1;
   !function() {
    tn();
    let e = c.pop();
    e && (e.redo_fingering_change(), o = e.next_note ? e.next_note : e, Zt(), yn(o));
   }();
  }
  return yn(o), !0;
 }
 function Jt(e) {
  let t = Wt(e.keyCode);
  return t && e.preventDefault(), t;
 }
 function Qt(e) {
  return 0 == e ? ">" : "<";
 }
 function en(e) {
  let t = e.upper.score_fingerings;
  for (;t.length > 0; ) o.update_from_score_fingerings(t) && o.next_note && (o = o.next_note);
  E && (o = o.prior_note);
 }
 function tn() {
  E = !1, v = [], k = [], Zt(), yn(o);
 }
 function nn() {
  let e = [], t = o.get_fingering().split("");
  for (let n = 0; n < t.length; n++) {
   let i = t[n];
   "x" === i ? e.push("") : e.push(i);
  }
  return e;
 }
 function rn() {
  let e = nn();
  for (;e.length; ) {
   let t = e.pop();
   t && v.unshift(t);
  }
 }
 function ln() {
  let e = !1;
  k.length > 0 && (Array.prototype.unshift.apply(v, k), function() {
   for (let e = 0; e < k.length; e++) if ("(" === k[e]) return !0;
   return !1;
  }() || (e = !0)), k = [];
  for (let e = v.length - 1; e >= 0 && /[\-\/\(]/.test(v[e]); e--) k.unshift(v.pop());
  if (0 === v.length) return;
  if (/[\-\/]/.test(v[0]) && (e = !0), E) {
   let e = nn();
   ")" === e[e.length - 1] ? e.pop() : (alert("Something wonky with parentheses."), 
   tn()), Array.prototype.unshift.apply(v, e), E = !1;
  }
  e ? o.prior_note ? (o = o.prior_note, rn()) : v.pop() : o.fingering && o.fingering.match(/x/) && rn();
  let t = v.join(""), n = 1;
  for (;;) try {
   let e = Abcdf_Parser.parse(t);
   E = !1, 2 === n && (E = !0), en(e);
   break;
  } catch (e) {
   if (1 === n ? v.push(")") : 2 === n ? (v.pop(), v.pop(), 0) : 3 === n && (n = 0), 
   0 == v.length) break;
   t = v.join(""), n++;
  }
  v = [], Zt(), yn(o);
 }
 function on(e) {
  clearTimeout(b);
  let t = !1;
  return /[\(\)\/\-1-5]/.test(e) && (v.push(e), t = !0), "t" !== e && "T" !== e || (ln(), 
  L ? (L = !1, f && (document.body.style.backgroundColor = "white")) : (L = !0, f && (document.body.style.backgroundColor = "black")), 
  yn(o), t = !0), "," !== e && ";" !== e && "." !== e || (ln(), function(e) {
   o.phrase_break = e;
  }(e), Zt(), t = !0), b = setTimeout(ln, re), console.log("Done " + b), t;
 }
 function an(e) {
  var t;
  return on((t = e, null == t.which ? String.fromCharCode(t.keyCode) : 0 != t.which && 0 != t.charCode ? String.fromCharCode(t.which) : null).toLowerCase());
 }
 function sn(e, t) {
  let n = [], i = [];
  i.push("% abcDidactyl v6");
  let r, l = Ve(e), o = e.split("\n"), a = "", s = !1;
  for (let e = 0; e < o.length; e++) {
   let t = o[e];
   a ? s ? n.push(t) : (r = Q.exec(t)) && (s = !0) : (r = W.exec(t)) && r[1] ? a = r[1] : n.push(t);
  }
  let c, u, d, f, p, g = ze(), h = Fe(t);
  if ("replace" === $e("output")) {
   l[g - 1] = h;
  } else l.push(h);
  for (let e = 0; e < l.length; e++) {
   let t = e + 1;
   try {
    Abcdf_Parser.parse(l[e].sequence);
   } catch (e) {
    alert("Bad abcDF parse of fingering string: " + e.message);
   }
   c = "% abcD fingering " + t + ": " + l[e].sequence, i.push(c), l[e].authority && (u = "% Authority: " + l[e].authority, 
   l[e].authority_year && (u += " (" + l[e].authority_year + ")"), i.push(u)), l[e].transcriber && (d = "% Transcriber: " + l[e].transcriber, 
   i.push(d)), l[e].transcription_date && (f = "% Transcription date: " + l[e].transcription_date, 
   i.push(f)), p = l[e].comments.split("\n");
   for (let e = 0; e < p.length; e++) (e !== p.length - 1 || p[e]) && i.push("% " + p[e]);
  }
  return i.push("% abcDidactyl END"), i.join("\n") + "\n" + n.join("\n");
 }
 function cn() {
  document.body.addEventListener("keydown", Jt), document.body.addEventListener("keypress", an);
 }
 function un() {
  document.body.removeEventListener("keydown", Jt), document.body.removeEventListener("keypress", an);
 }
 function dn() {
  if (function() {
   if (M) return;
   let e = document.getElementById(oe);
   e.align = "center";
   let t = document.getElementById(ae);
   t || ((t = document.createElement("div")).id = ae, t.style.display = "none", e.appendChild(t)), 
   t.class = se;
   let n = document.createElement(ce);
   n.id = ce, e.appendChild(n);
   let i = document.createElement(ue);
   i.id = ue, e.appendChild(i);
   let r = document.createElement(de);
   r.id = de, e.appendChild(r);
   let l = document.createElement(pe);
   l.id = pe, e.appendChild(l);
   let o = document.createElement(ge);
   o.id = ge, l.appendChild(o);
   let a = document.createElement(he);
   a.id = he, l.appendChild(a);
   for (let e = 0; e < 7; e++) l.appendChild(document.createElement("br"));
   let s = document.createElement(fe);
   s.id = fe, e.appendChild(s);
  }(), Te(), function() {
   if (M) return;
   It(), xt();
   let e = R + "/download_36_x4.png", n = document.getElementById(ue), i = document.createElement("table"), r = document.createElement("tbody"), l = document.createElement("tr");
   n.appendChild(i), i.appendChild(r), i.style.backgroundColor = "LightGray", i.align = "center", 
   r.appendChild(l);
   let o = document.createElement("p");
   o.setAttribute("id", "downloadify");
   let a = document.createElement("td");
   a.appendChild(o), l.appendChild(a);
   let s = document.createElement("input");
   s.id = "sequence_spinner", s.min = "1", s.max = "999", s.size = 3, s.type = "number", 
   s.alt = "fingering_number", s.value = 1, s.onchange = Bn, wt(a = document.createElement("td"), "Suggestion", "sequence_prompt"), 
   a.appendChild(s), l.appendChild(a), t.preset_select || (a.style.display = "none"), 
   t.preset && (s.value = t.preset);
   let c = document.createElement("input");
   c.type = "image", c.src = R + "/eye.svg", c.width = "36", c.alt = "View", c.onclick = Dn, 
   (a = document.createElement("td")).appendChild(c), l.appendChild(a), t.hide_view && (a.style.display = "none");
   let u = document.createElement("input");
   u.type = "image", u.src = R + "/print.svg", u.width = "36", u.alt = "Print...", 
   u.onclick = In, (a = document.createElement("td")).appendChild(u), l.appendChild(a), 
   t.hide_print && (a.style.display = "none"), a = document.createElement("td");
   let d = document.createElement("input");
   d.type = "checkbox", d.value = "annotated", d.checked = P, d.id = "view_annotated", 
   d.onclick = yt;
   let f = document.createElement("label");
   f.htmlFor = "view_annotated", f.appendChild(document.createTextNode("Annotated")), 
   a.appendChild(d), t.hide_annotated && (a.style.display = "none"), a.appendChild(f), 
   l.appendChild(a), t.hide_annotated && (a.style.display = "none");
   let p = document.createElement("input");
   p.type = "image", p.src = R + "/reload.svg", p.width = "36", p.alt = "reset", p.onclick = nt, 
   (a = document.createElement("td")).appendChild(p), l.appendChild(a), t.hide_reset && (a.style.display = "none");
   let g = document.createElement("input");
   g.id = "copy_fingerings_button", g.type = "image", g.src = R + "/clipboard.svg", 
   g.width = "36", g.alt = "copy", (a = document.createElement("td")).appendChild(g), 
   l.appendChild(a), t.hide_copy ? g.style.display = "none" : new Clipboard("#copy_fingerings_button", {
    text: et
   });
   let h = document.createElement("input");
   h.type = "image", h.src = R + "/paperclip.svg", h.width = "36", h.alt = "paste", 
   h.onclick = tt, (a = document.createElement("td")).appendChild(h), l.appendChild(a), 
   t.hide_paste && (h.style.display = "none");
   let m = document.createElement("input");
   m.type = "image", m.src = R + "/globe.svg", m.width = "36", m.alt = "URL", m.onclick = mt, 
   (a = document.createElement("td")).appendChild(m), l.appendChild(a), t.url_input || (m.style.display = "none");
   let _ = document.createElement("input");
   _.setAttribute("type", "file"), _.setAttribute("accept", "text/vnd.abc"), _.onchange = _t, 
   _.setAttribute("id", "file_input"), (a = document.createElement("td")).appendChild(_), 
   l.appendChild(a), t.file_input || (_.style.display = "none");
   let b = document.createElement("input");
   b.type = "image", b.src = R + "/tags.svg", b.alt = "Metadata...", b.width = "36", 
   b.onclick = at, (a = document.createElement("td")).appendChild(b), l.appendChild(a), 
   t.hide_metadata && (b.style.display = "none");
   let v = document.createElement("input");
   v.type = "image", v.src = R + "/zoom-out.svg", v.alt = "Zoom In", v.width = "36", 
   v.onclick = ct, (a = document.createElement("td")).appendChild(v), l.appendChild(a);
   let E = document.createElement("input");
   E.type = "image", E.src = R + "/zoom-in.svg", E.alt = "Zoom In", E.width = "36", 
   E.onclick = ut, (a = document.createElement("td")).appendChild(E), l.appendChild(a);
   let k = document.createElement("input");
   k.type = "image", k.src = R + "/cog.svg", k.alt = "Preferences...", k.width = "36", 
   k.onclick = ot, (a = document.createElement("td")).appendChild(k), l.appendChild(a), 
   t.hide_prefs && (k.style.display = "none");
   let w = document.createElement("input");
   w.type = "image", w.src = R + "/info.svg", w.alt = "Help", w.width = "36", w.onclick = lt, 
   (a = document.createElement("td")).appendChild(w), l.appendChild(a), Downloadify.create("downloadify", {
    filename: function() {
     return y;
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
  }(), function() {
   Ue("preset_preference", localStorage.getItem("preset_preference")), Ue("output", localStorage.getItem("output")), 
   Ue("restore", localStorage.getItem("restore")), Ue("keypad", localStorage.getItem("keypad"));
   let e = localStorage.getItem("measure_number_interval");
   void 0 !== e && "" !== e || (e = V), je("measure_number_interval", e), je("default_authority", localStorage.getItem("default_authority")), 
   je("default_authority_year", localStorage.getItem("default_authority_year")), je("default_transcriber", localStorage.getItem("default_transcriber"));
  }(), !(r = document.getElementById(ae).value)) {
   let e = $e("default_url");
   e && (ht(e), r = document.getElementById(ae).value);
  }
  f = !0, r && (h = Ve(r), Xe(), hn(), yn(o = x[0][0][0]), cn()), vt(), $(function() {
   FastClick.attach(document.body);
  });
 }
 function fn(e) {
  console.log("Processing note click....");
  let t = e.getAttribute("class");
  console.log("Click " + t);
  let n = t.split("_")[1];
  if (n in B) {
   let e = B[n];
   qt("process_note_click", e), yn(e), o = e;
  }
 }
 function pn() {
  tn();
  let e = "";
  o.preset_fingering && (e += "Preset (recommended) fingering: " + o.get_preset_fingering() + "\n\n"), 
  e += "Please enter a fingering string for the selected note.";
  let t = o.fingering, n = window.prompt(e, t);
  try {
   if (null === n) return;
   n = (n = n.replace(K, "")).replace(X, ""), en(Abcdf_Parser.parse(n)), Zt(), yn(o);
  } catch (e) {
   alert("Bad abcDF parse of fingering string: " + e.message + e.stack);
  }
 }
 function gn(e) {
  console.log("Processing note double-click...."), fn(e), pn();
 }
 function hn() {
  let e = new Lt(), t = document.getElementById(ge), n = document.getElementById(he);
  t.align = "center", l = new Abc(e), i = "", l.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  n.innerHTML = "", q = [];
  try {
   r && l.tosvg(y, r);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   r && (t.innerHTML = i, function() {
    let e, t, n, i, r;
    for (let i = 0; i < C.length; i++) t = (e = C[i]).line, n = e.staff, t in x || (x[t] = [], 
    x[t][0] = [], x[t][1] = []), x[t][n].push(e);
    for (t = 0; t < x.length; t++) for (n = 0; n < 2; n++) x[t][n].sort(Ft);
    for (n = 0; n < 2; n++) for (t = 0; t < x.length; t++) {
     let e = x[t][n];
     for (let t = 0; t < e.length; t++) i = e[t], r ? (r.next_note = i, i.prior_note = r, 
     r = i) : (r = i, i.prior_note = void 0);
    }
    i.next_note = void 0;
   }(), function() {
    let e;
    for (e in I) I.hasOwnProperty(e) && T.push(e);
    T.sort(function(e, t) {
     return parseInt(e) - parseInt(t);
    });
   }(), D = !0, w = 0, Qe(), Zt());
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
 }
 function mn(e, t) {
  let n, i = document.getElementsByClassName(e), r = i.length;
  for (;--r >= 0; ) (n = i[r]).setAttribute("color", t);
 }
 function _n(e) {
  let t, n = F.length;
  for (t = 0; t < n; t++) mn(F[t], e);
 }
 function yn(e) {
  let t = e.fingered_start;
  0 != F.length && (_n("black"), F = []), F.push("e_" + t), L ? 0 === e.staff ? _n("dodgerblue") : _n("red") : 1 === e.staff ? _n("dodgerblue") : _n("red");
  let n = "line_" + e.line, i = document.getElementById(n);
  if (!function(e) {
   let t = $(e), n = $(window), i = document.getElementById(fe), r = n.scrollTop(), l = r + n.height() - i.offsetHeight, o = t.offset().top;
   return o + t.height() <= l && o >= r;
  }(i)) {
   i.scrollIntoView(!1);
   let e = document.getElementById(fe), t = document.body.scrollTop;
   window.scrollTo(0, t + e.offsetHeight);
  }
 }
 function bn(e) {
  e || (e = r);
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
 function vn(e) {
  let t = [];
  e.fingering && (t = rt(e.fingering));
  let n = e.fingering || "";
  for (let i = t.length; i < e.size; i++) n += "x";
  return n += e.phrase_break;
 }
 function En(e) {
  if (e.grace) return vn(e);
  let t = S[e.staff][e.time], n = Xt(t);
  if (t.length - n < 2) return vn(e);
  t.sort(Ft);
  let i = 0, r = t[0];
  for (;r.grace; ) r = t[++i];
  if (e !== r) return "";
  let l = Vt(t), o = "";
  for (let e = 0; e < l.length; e++) l[e] ? o += l[e] : o += "x";
  return o;
 }
 function kn(e, t) {
  let n = [], i = t, r = e.split("");
  for (let e = 0; e < r.length; e++) {
   let t = r[e];
   t.match(j) ? t !== i && (n.push(t), i = t) : n.push(t);
  }
  return n.join("");
 }
 function wn(e, t) {
  let n = x[t][e], i = "";
  for (let e = 0; e < n.length; e++) {
   i += En(n[e]);
  }
  return i;
 }
 function Cn(e, t) {
  let n = Z.exec(e);
  return n && n[1] ? n[1] : t;
 }
 function xn() {
  let e, t = "", n = "", i = Qt(0), r = Qt(1);
  for (let e = 0; e < x.length; e++) {
   let l = wn(0, e);
   if (l && (i = Cn(l = kn(l, i), i), t += l, e < x.length - 1 && (t += "&")), x[e][1]) {
    let t = wn(1, e);
    t && (r = Cn(t = kn(t, r), r), n += t, e < x.length - 1 && (n += "&"));
   }
  }
  return e = t + "@" + n;
 }
 function In() {
  console.log("Print that score.");
  let e = window.open("", "print_window");
  e.document.write(i), e.document.close(), e.focus(), e.print(), e.close();
 }
 function Bn() {
  document.getElementById(ae).value = r, Te(), r = document.getElementById(ae).value, 
  hn(), yn(o = x[0][0][0]), cn();
 }
 function Tn() {
  let e, t;
  return t = sn(P ? e = Kt() : r, !0);
 }
 function Dn() {
  let e = Tn();
  window.open().document.write("<pre>" + e + "</pre>");
 }
 function Sn() {
  return xn();
 }
 function An(e) {
  let t = function(e) {
   try {
    Abcdf_Parser.parse(e);
   } catch (e) {
    return "Bad abcDF parse of string: " + e.message + e.stack;
   }
   let t = 0, n = $e("validate");
   if ("complete" === n) t = e.split("x").length - 1; else if ("none" === n) t = 0; else if ("auto" === n) return "Validation of autofill is not yet implemented.";
   return 1 === t ? "One note is missing a fingering annotation." : t > 1 ? t + " notes are missing fingering annotations." : "";
  }(e);
  return !t || (alert(t), !1);
 }
 function qn() {
  let e = P;
  P = !1;
  let t = Tn();
  return P = e, t;
 }
 return this.renderUI = function(e) {
  !function(e) {
   t || (t = e).experiment_id || (t.experiment_id = "");
  }(e), dn();
  let n = $e("qualtrics");
  n && (n.disableNextButton(), n.disablePreviousButton());
 }, this.getXValue = bn, this.getAuthority = function() {
  return $e("include_pii") ? Le("authority") : "";
 }, this.getAuthorityYear = function() {
  return Le("authority_year");
 }, this.getTranscriber = function() {
  return $e("include_pii") ? Le("transcriber") : "";
 }, this.getComments = function() {
  return Le("comments");
 }, this.getEnteredCollection = Sn, this.getEnteredAbcDF = Sn, this.getEnteredAbcD = qn, 
 this.getValidatedCollection = function() {
  let e = xn();
  return An(e) ? e : "";
 }, this.getValidatedAbcD = function() {
  if (An(xn())) {
   let e = Tn();
   return /^\s*X:/m.test(e) ? /^% abcDidactyl/m.test(e) ? e : (alert("File is not valid abcD."), 
   "") : (alert("File is not valid abc."), "");
  }
  return "";
 }, this.setEnteredCollection = function(e) {
  o = x[0][0][0];
  let t = ze(), n = Fe(!0);
  n.sequence = e, Je(Ne(t), n), Zt(), yn(o);
 }, this.handleKeys = cn, this.unhandleKeys = un, this.stopAutoSaving = function() {
  m && clearInterval(m);
 }, this;
}