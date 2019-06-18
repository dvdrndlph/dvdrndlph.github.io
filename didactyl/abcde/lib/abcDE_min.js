/* abcDE_min.js v6.0.106 */
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
 let t, n, i, r, l, o, a, s, c = [], u = [], d = "", f = !1, p = 1, g = {}, h = [], m = void 0, _ = "", y = "noname.abc", b = [], v = 0, E = [], k = !1, w = [], C = 0, x = [], I = [], B = {}, T = {}, D = [], S = !1, A = {}, q = {}, N = [], L = 0, F = !1, M = [], P = !1, H = !1, z = "../../corpora", R = "./abcde_help.html", V = "../image", X = "../lib/media", G = 5, U = /\s/g, O = /</g, j = />/g, Y = /[><]/g, K = /([,;\.])/, Z = /&/g, W = /.*([<>])[^<>]+$/, J = /^% abcDidactyl v([\d\.]+)$/, Q = /^% abcD fingering (\d+): ([<>1-5\-\/\(\)@&x,;\.]+)$/, ee = /^% abcDidactyl END$/, te = /^% Authority: ([^\(]+)(\s+\((\d\d\d\d)\))?$/, ne = /^% Transcriber: (.*)$/, ie = /^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/, re = /^% (.*)$/, le = 300, oe = 4e3, ae = "abcde", se = "abc_source", ce = "source", ue = "abcde_prefs", de = "abcde_controls", fe = "abcde_metadata", pe = "abcde_keypad", ge = "abcde_rendering", he = "abcde_target", me = "abcde_error", _e = .1, ye = 3, be = .3, ve = 90, Ee = 89, ke = 13, we = 8, Ce = 9, xe = 37, Ie = 39, Be = "%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11", Te = "%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";
 function De() {
  m && clearInterval(m), c = [], u = [], _ = "", f = !1, y = "noname.abc", n = void 0, 
  r = "", b = [], l = void 0, E = [], k = !1, w = [], o = void 0, C = 0, x = [], I = [], 
  B = {}, T = {}, D = [], S = !1, A = {}, q = {}, N = [], L = 0, a = void 0, s = void 0, 
  M = [];
 }
 function Se(e) {
  let t, n = A[e], i = [];
  for (t in n) n.hasOwnProperty(t) && i.push(t);
  return i.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), i;
 }
 function Ae(e, t) {
  if (!e) return console.log("MISSING fingers have no hands."), "";
  if ("x" === e) return e;
  let n = t, i = [], r = e.split("");
  for (let e = 0; e < r.length; e++) {
   let t = r[e];
   "<" === t || ">" === t ? n = t : t.match(/\d/) ? i.push(n + t) : i.push(t);
  }
  return i.join("");
 }
 function qe() {
  return "undefined" != typeof Storage;
 }
 function Ne(e, n) {
  _ || (_ = md5(r));
  let i = e + "_" + n + "_" + _;
  return t.experiment_id && (i = t.experiment_id + "_" + i), i;
 }
 function Le(e) {
  if (!qe()) return {};
  let t = {
   sequence: ""
  }, n = Ne("sequence", e), i = localStorage.getItem(n) || "";
  i.match(/[^x&@]/) && (t.sequence = i), n = Ne("authority", e);
  let r = localStorage.getItem(n) || "";
  t.authority = r, n = Ne("authority_year", e);
  let l = localStorage.getItem(n) || "";
  t.authority_year = l, n = Ne("transcriber", e);
  let o = localStorage.getItem(n) || "";
  t.transcriber = o, n = Ne("comments", e);
  let a = localStorage.getItem(n) || "";
  return t.comments = a, t;
 }
 function Fe(e) {
  let t = document.getElementById(e);
  return t.value ? t.value : "";
 }
 function Me(e) {
  let t = new Date(), n = t.getFullYear() + "-" + sprintf("%02d", t.getMonth() + 1) + "-" + sprintf("%02d", t.getDate()) + " " + sprintf("%02d", t.getHours()) + ":" + sprintf("%02d", t.getMinutes()) + ":" + sprintf("%02d", t.getSeconds()), i = "", r = "";
  return (e || Ve("include_pii")) && (i = Fe("authority"), r = Fe("transcriber")), 
  {
   sequence: Nn(),
   authority: i,
   authority_year: Fe("authority_year"),
   transcriber: r,
   transcription_date: n,
   comments: Fe("comments")
  };
 }
 function Pe(e, t) {
  let n = document.getElementById(e).value, i = Ne(e, t);
  localStorage.setItem(i, n);
 }
 function He(e) {
  let t = document.getElementsByName(e);
  for (let e = 0; e < t.length; e++) {
   let n = t[e];
   if (n.checked) return n.id;
  }
 }
 function ze(e) {
  let t = "";
  if ("preset_preference" === e || "output" === e || "keypad" === e || "restore" == e) t = He(e); else {
   t = document.getElementById(e).value;
  }
  g[e] = t, localStorage.setItem(e, t);
 }
 function Re() {
  let e = document.getElementById("sequence_spinner");
  return e ? e.value : (alert("Sequence DOM element has gone missing."), "1");
 }
 function $e() {
  if (!qe()) return void clearInterval(m);
  if (!document.getElementById("sequence_spinner")) return void clearInterval(m);
  let e = Re(), t = Ne("sequence", e), n = Nn();
  localStorage.setItem(t, n), Pe("authority", e), Pe("authority_year", e), Pe("transcriber", e), 
  Pe("comments", e);
 }
 function Ve(e) {
  if (t && t[e]) return t[e];
  if ("preset" === e) return "";
  if ("measure_number_interval" === e) {
   return document.getElementById(e).value;
  }
  let n = He(e);
  return n || "";
 }
 function Xe() {
  let e = {};
  return e.authority = Fe("default_authority"), e.authority_year = Fe("default_authority_year"), 
  e.transcriber = Fe("default_transcriber"), e.sequence = "x", e.comments = "", e;
 }
 function Ge(e) {
  let t, n = e.split("\n"), i = !1, r = {}, l = [], o = "";
  for (let e = 0; e < n.length; e++) {
   let a = n[e];
   if (!o && (t = J.exec(a)) && t[1]) o = t[1], i = !0; else if (i) if ((t = Q.exec(a)) && t[1] && t[2]) r = {
    sequence: t[2],
    comments: ""
   }, l.push(r); else {
    if (t = ee.exec(a)) break;
    if ((t = te.exec(a)) && t[1]) {
     r.authority = t[1], t[2] && (r.authority_year = t[3]);
     continue;
    }
    if ((t = ne.exec(a)) && t[1]) {
     r.transcriber = t[1];
     continue;
    }
    if ((t = ie.exec(a)) && t[1]) {
     r.transcription_date = t[1];
     continue;
    }
    (t = re.exec(a)) && t[1] && (r.comments += t[1] + "\n");
   }
  }
  return l;
 }
 function Ue() {
  let e = document.getElementById("sequence_spinner");
  e.min = 1, e.max = h.length || 1;
  let t = function() {
   let e = Ve("preset");
   if (e) return e;
   let t = 1;
   return "last" === (e = Ve("preset_preference")) && (t = h.length || 1), t;
  }();
  e.value = t;
 }
 function Oe(e) {
  if (e) {
   let t = e - 1;
   return parseInt(e) <= h.length ? h[t] : Xe();
  }
  return function() {
   let e = Ve("preset");
   if (e) return h[e - 1];
   return (e = Ve("preset_preference")) && "none" !== e ? "first" === e ? h[0] : "last" === e ? h[h.length - 1] : "" : Xe();
  }();
 }
 function je(e, t) {
  let n = document.getElementsByName(e);
  for (let e = 0; e < n.length; e++) {
   let i = n[e];
   i.id === t && (i.checked = !0);
  }
 }
 function Ye(e, t) {
  let n = document.getElementById(e);
  n.value = void 0 !== t ? t : "";
 }
 function Ke(e) {
  Ye("authority", e.authority), Ye("authority_year", e.authority_year), Ye("transcriber", e.transcriber), 
  Ye("comments", e.comments);
 }
 function Ze(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return !0;
  return !1;
 }
 function We(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return n;
  return null;
 }
 function Je(e, t) {
  if (!e) return;
  console.log("Setting fingers: ", e);
  let n, i, r, l = {}, o = e.split("@");
  for (n = 0; n < o.length; n++) {
   let e = nn(n);
   l = [];
   let a = o[n].split("&");
   for (i = 0; i < a.length; i++) {
    let e = lt(a[i]);
    l = l.concat(e);
   }
   let s = Se(n);
   for (let i = 0; i < s.length; i++) {
    let o = s[i], a = A[n][o];
    a.sort(Pt);
    for (let n = 0; n < a.length; n++) {
     let i = a[n], o = i.pitches.length;
     if (i.grace) {
      let n = "";
      i[t] = "";
      for (let a = 0; a < o; a++) (r = l.shift()) || (console.log(t + " MISSING for grace note:"), 
      Nt(t + " grace note", i)), e = Bn(r = Ae(r, e), e), n += r;
      "fingering" === t ? i.set_fingering(n) : "preset_fingering" === t && i.set_preset_fingering(n);
     }
    }
    let c = Gt(a), u = Xt(c), d = [], f = [], p = null;
    for (let n = 0; n < u.length; n++) {
     let i = u[n];
     for (let n = 0; n < c[i].length; n++) {
      if ((p = c[i][n]).grace) continue;
      Ze(f, p) || (d.push(""), f.push(p));
      let o = We(f, p);
      (r = l.shift()) || (console.log(t + " MISSING for note:"), Nt(t + " pit note", p)), 
      e = Bn(r = Ae(r, e), e), d[o] += r;
     }
    }
    for (let e = 0; e < d.length; e++) r = d[e], console.log("FingerING " + r), p = f[e], 
    "fingering" === t ? p.set_fingering(r) : "preset_fingering" === t && p.set_preset_fingering(r);
   }
  }
 }
 function Qe(e, t) {
  let n = t.sequence, i = t.sequence, r = !0, l = Ve("preset_preference");
  l && "none" !== l || (r = !1, n = "");
  let o = !1;
  if (e && e.sequence && e.sequence !== n) {
   let t = Ve("restore");
   (o = "always" === t || "never" !== t && confirm("You have previously entered data for this piece (or suggestion). Do you want to restore them?")) && (n = e.sequence);
  }
  o ? Ke(e) : r && Ke(t), Je(i, "preset_fingering"), Je(n, "fingering"), m = setInterval(function() {
   $e();
  }, oe);
 }
 function et() {
  let e = Re();
  Qe(Le(e), Oe(e)), function() {
   let e = Fe("authority"), t = Fe("default_authority");
   !e && t && Ye("authority", t);
   let n = Fe("authority_year"), i = Fe("default_authority_year");
   !n && i && Ye("authority_year", i);
   let r = Fe("transcriber"), l = Fe("default_transcriber");
   !r && l && Ye("transcriber", l);
  }();
 }
 function tt(e) {
  return Tn();
 }
 function nt() {
  let e = window.prompt("Please enter a fingering string for the current piece.", "");
  null !== e && (Je(e, "fingering"), Qt());
 }
 function it() {
  if (!r) return;
  if (confirm("All changes you have made to this fingering sequence will be discarded, and the initial sequence will be restored. Are you sure you want to proceed?")) {
   Qe(void 0, Oe(Re())), Qt(), En(o = I[0][0][0]);
  }
 }
 function rt(e) {
  return function e(t, n) {
   if (null == t) return n;
   for (let i = 0; i < t.length; i++) t[i] instanceof Array ? e(t[i], n) : t[i] && n.push(t[i]);
   return n;
  }(e, []).join("");
 }
 function lt(e, t = 0) {
  if (!e) return [];
  console.log("abcdf string: " + e);
  let n = function(e, t = 0, n = !1) {
   let i = [];
   if (n) for (let n = 0; n < e[t].length; n++) for (let r = 0; r < e[t][n].length; r++) {
    let l = e[t][n][r];
    if (l instanceof Array) {
     let e = rt(l);
     i.push(e);
    }
   } else for (let n = 0; n < e[t].length; n++) {
    let r = e[t][n];
    if (r instanceof Array) {
     let e = rt(r);
     i.push(e);
    }
   }
   return i;
  }(AbcdfRaw_Parser.parse(e), t, Z.exec(e));
  return n = n.filter(function(e) {
   return "&" != e && "@" != e;
  });
 }
 function ot() {
  window.open(R, "_blank").focus();
 }
 function at(e) {
  pn();
  let t = document.getElementById("prefs_modal_wrapper"), n = document.getElementById("prefs_modal_window");
  t.className = "overlay";
  let i = n.offsetHeight - document.documentElement.clientHeight;
  i > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - i + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function st(e) {
  pn();
  let t = document.getElementById("metadata_modal_wrapper"), n = document.getElementById("metadata_modal_window");
  t.className = "overlay";
  let i = n.offsetHeight - document.documentElement.clientHeight;
  i > 0 && (n.style.maxHeight = parseInt(window.getComputedStyle(n).height) - i + "px"), 
  n.style.marginTop = -n.offsetHeight / 2 + "px", n.style.marginLeft = -n.offsetWidth / 2 + "px", 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ct(e) {
  document.getElementById("metadata_modal_wrapper").className = "", $e(), Et(), fn(), 
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function ut() {
  p > be && (p -= _e, Qt());
 }
 function dt() {
  p < ye && (p += _e, Qt());
 }
 function ft(e) {
  ze("preset_preference"), ze("output"), ze("restore"), ze("keypad"), ze("measure_number_interval"), 
  ze("default_authority"), ze("default_authority_year"), ze("default_transcriber"), 
  document.getElementById("prefs_modal_wrapper").className = "", r && (Qt(), En(o)), 
  Et(), fn(), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
 }
 function pt(e) {
  let t = e.slice(0, 100);
  if (-1 == t.indexOf("<?xml")) return !1;
  let n = t.match(/encoding="([^"]+)"/), i = "utf-8";
  return n && 2 == n.length && (i = n[1]), i;
 }
 function gt(e) {
  let t = $.parseXML(e), n = vertaal(t, {}), i = n[0], r = n[1];
  return r && console.log("xml2abc ERROR: " + r), i || alert("Unable to open MusicXML file: " + r), 
  i;
 }
 function ht(e) {
  let t = e.split(".");
  return t[t.length - 1];
 }
 function mt(e) {
  let t = ht(e), n = 'The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.', i = function(e, t) {
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
     return "UTF-8" !== pt(t) ? (alert("Input mxl is not UTF-8 encoded. Cannot open."), 
     "") : t = gt(t);
    }(i.response))) return;
   } else {
    let e = pt(n = i.responseText);
    if (e) {
     if (!/^utf/i.test(e)) return void alert("Input xml is not UTF-8 encoded. Cannot open.");
     n = gt(n);
    }
   }
   n && (d = e, document.getElementById(se).value = n, gn());
  }, i.onerror = function() {
   alert(n);
  }, i.send()) : alert(n);
 }
 function _t() {
  let e = z + "/clementi/11.abc";
  if (d) e = d; else {
   let t = Ve("default_url");
   t && (e = t);
  }
  let t = window.prompt("Please enter URL to open.", e);
  t && mt(t);
 }
 function yt() {
  let e = document.getElementById("file_input").files;
  if (!e.length) return void alert("Please select a valid abc file.");
  let t = e[0];
  if ("mxl" === ht(t.name)) return void function(e) {
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
    "UTF-8" === pt(n) ? (n = gt(n), document.getElementById(se).value = n, gn()) : alert("Input xml is not UTF-8 encoded. Cannot open.");
   }, t.readAsArrayBuffer(e);
  }(t);
  let n = !1, i = new FileReader();
  i.onload = function(e) {
   let r = pt(i.result), l = new FileReader();
   r ? n = !0 : r = "UTF-8", l.onload = function(e) {
    let t = "";
    t = n ? gt(l.result) : e.target.result, document.getElementById(se).value = t, gn();
   }, l.readAsText(t, r);
  }, i.readAsText(t, "UTF-8");
 }
 function bt() {
  P = !P;
 }
 function vt(e, t) {
  let n = e.children;
  for (let e = 0; e < n.length; e++) n[e].style.display = t;
 }
 function Et() {
  let e = document.getElementById(pe), t = document.getElementById("number_div"), n = document.getElementById("symbol_div");
  if ("show" === Ve("keypad")) e.style.display = "block", t.style.display = "block", 
  n.style.display = "block", vt(t, "inline"), vt(n, "inline"); else {
   vt(n, "none"), vt(t, "none");
   let i = Ve("qualtrics"), r = Ve("submit_button_id");
   if (i) {
    document.getElementById("q_next").style.display = "inline";
    let e = document.getElementById("q_back");
    e && (e.style.display = "inline");
   } else if (r) {
    document.getElementById(r).style.display = "inline";
   } else t.style.display = "block", n.style.display = "block", e.style.display = "none";
  }
 }
 function kt(e) {
  let t = e.keyCode || e.which;
  t = String.fromCharCode(t);
  /[0-9]/.test(t) || (e.returnValue = !1, e.preventDefault && e.preventDefault());
 }
 function wt(e, t, n, i, r, l) {
  let o = document.createElement("input");
  o.type = "text", o.class = i, o.id = t, r && (o.onkeypress = r), "year" === i && (o.size = "4");
  let a = document.createElement("label");
  a.htmlFor = t, a.appendChild(document.createTextNode(n)), e.appendChild(a), e.appendChild(o), 
  l && e.appendChild(document.createElement("br"));
 }
 function Ct(e, t, n) {
  let i = document.createElement("label");
  i.class = n;
  let r = document.createTextNode(t);
  i.appendChild(r), e.appendChild(i);
 }
 function xt(e, t, n, i, r, l, o) {
  let a = document.createElement("div");
  a.class = "radio_div", Ct(e, t, "prompt");
  for (let e = 0; e < i.length; e++) {
   let t = document.createElement("input");
   t.type = "radio", t.id = i[e], t.id === l && (t.checked = !0), t.name = n, a.appendChild(t), 
   Ct(a, r[e], "radio_label");
   let o = document.createElement("span");
   o.innerHTML = "&nbsp;&nbsp", a.appendChild(o);
  }
  return e.appendChild(a), o && e.appendChild(document.createElement("br")), a;
 }
 function It() {
  let e = document.getElementById(fe), t = document.createElement("div");
  t.id = "metadata_modal_wrapper", e.appendChild(t);
  let n = document.createElement("div");
  n.id = "metadata_modal_window", t.appendChild(n);
  let i = document.createElement("div");
  i.style.textAlign = "right";
  let r = document.createElement("a");
  r.id = "metadata_modal_close", r.href = "#", r.innerHTML = "Close <b>X</b>", i.appendChild(r), 
  r.addEventListener("click", ct, !1), n.appendChild(i), wt(n, "authority", "Authority", "name", void 0, !1), 
  wt(n, "authority_year", "Year", "year", kt, !0), wt(n, "transcriber", "Transcriber", "name", void 0, !0), 
  function(e, t, n, i, r, l) {
   let o = document.createElement("textarea");
   o.class = i, o.id = t, o.rows = r, o.cols = l;
   let a = document.createElement("label");
   a.htmlFor = t, a.appendChild(document.createTextNode(n)), e.appendChild(a), e.appendChild(o);
  }(n, "comments", "Comments", "comments", 10, 50);
 }
 function Bt() {
  let e = document.getElementById(ue), n = document.createElement("div");
  n.id = "prefs_modal_wrapper", e.appendChild(n);
  let i = document.createElement("div");
  i.id = "prefs_modal_window", n.appendChild(i);
  let r = document.createElement("div");
  r.style.textAlign = "right";
  let l = document.createElement("a");
  l.id = "prefs_modal_close", l.href = "#", l.innerHTML = "Close <b>X</b>", r.appendChild(l), 
  l.addEventListener("click", ft, !1), i.appendChild(r);
  let o = document.createElement("h3");
  o.innerText = "Preferences", i.appendChild(o);
  let a = "restore", s = [ "always", "never", "ask" ], c = [ "Always", "Never", "Ask" ];
  t && t[a] || xt(i, "Restore Data", a, s, c, "ask", !0), a = "output", t && t[a] || xt(i, "Output", a, s = [ "append", "replace" ], c = [ "Append", "Replace" ], "append", !0), 
  a = "preset_preference", t && t[a] || xt(i, "Preset", a, s = [ "first", "last", "none" ], c = [ "First", "Last", "None" ], "first", !0), 
  a = "keypad", s = [ "show", "hide" ], c = [ "Show", "Hide" ];
  let u = "hide";
  "ontouchstart" in window && (u = "show"), xt(i, "Keypad", a, s, c, u, !0), function(e, t, n, i, r, l, o, a) {
   let s = document.createElement("div");
   s.class = "spinner_div", Ct(s, t, "prompt");
   let c = document.createElement("input");
   c.id = n, c.min = i, c.max = r, c.size = l, c.type = "number", c.value = o, s.appendChild(c), 
   e.appendChild(s), a && e.appendChild(document.createElement("br"));
  }(i, "Measure Number Interval", "measure_number_interval", 0, 20, 2, 5, !0), wt(i, "default_authority", "Default Authority", "name", void 0, !0), 
  wt(i, "default_authority_year", "Year", "year", kt, !0), wt(i, "default_transcriber", "Transcriber Name", "name", void 0, !0);
 }
 function Tt(e, t, n) {
  let i = document.createElement("input");
  i.type = "button", i.class = "keypad-button", i.id = t, i.value = n, i.onclick = function() {
   cn(n);
  }, e.appendChild(i);
 }
 function Dt(e) {
  let t = Ve("qualtrics"), n = kn(r), i = "abcDF_" + n, l = "abcD_" + n, o = Nn();
  Qualtrics.SurveyEngine.setEmbeddedData(i, o);
  let a = Fn();
  Qualtrics.SurveyEngine.setEmbeddedData(l, a), $e(), "q_next" === e ? (De(), Qt(), 
  function() {
   let e = document.getElementById(ae);
   for (;e.firstChild; ) e.removeChild(e.firstChild);
   e.remove(), H = !1, m && clearInterval(m);
  }(), f = !1, t.enableNextButton(), t.enablePreviousButton(), t.clickNextButton()) : (t.enableNextButton(), 
  t.enablePreviousButton(), t.clickPreviousButton());
 }
 function St(e, t, n) {
  let i = document.createElement("input");
  i.type = "button", i.class = "keypad-button", i.id = t, i.value = n, i.onclick = function() {
   Dt(t);
  }, e.appendChild(i);
 }
 function At(t, n, i, r) {
  let l = document.createElement("input");
  l.id = n, l.class = "keypad_button", l.type = "image", l.src = V + "/" + i, l.alt = r, 
  l.onclick = function() {
   !function(t) {
    let n = Ce;
    switch (t) {
    case "previous":
     n = xe;
     break;

    case "next":
     n = Ie;
     break;

    case "backspace":
     n = we;
     break;

    case "pencil":
     n = ke;
     break;

    case "undo":
     n = ve;
     break;

    case "redo":
     n = Ee;
    }
    let i = en(n);
    i && e.preventDefault();
   }(n);
  }, t.appendChild(l);
 }
 function qt() {
  let e = document.getElementById(pe), t = document.createElement("number_div");
  t.id = "number_div";
  let n = document.createElement("symbol_div");
  n.id = "symbol_div", e.appendChild(n), e.appendChild(document.createElement("br")), 
  e.appendChild(t), At(t, "undo", "action-undo.svg", "undo"), At(t, "redo", "action-redo.svg", "redo"), 
  Tt(t, "one", "1"), Tt(t, "two", "2"), Tt(t, "three", "3"), Tt(t, "four", "4"), Tt(t, "five", "5"), 
  Tt(t, "toggle", "T"), At(t, "previous", "arrow-circle-left.svg", "<-"), At(t, "next", "arrow-circle-right.svg", "->"), 
  Ve("qualtrics") && (Ve("qualtrics_back") && St(t, "q_back", "BACK"), St(t, "q_next", "NEXT"));
  let i = Ve("submit_button_id");
  if (i) {
   let e = Ve("submit_button_label");
   e || (e = "NEXT"), function(e, t, n) {
    let i = document.createElement("input");
    i.type = "button", i.class = "keypad-button", i.id = t, i.value = n, e.appendChild(i);
   }(t, i, e);
  }
  At(n, "pencil", "target.svg", "..."), Tt(n, "hyphen", "-"), Tt(n, "slash", "/"), 
  Tt(n, "open_paren", "("), Tt(n, "close_paren", ")"), Tt(n, "short_phrase", ","), 
  Tt(n, "medium_phrase", ";"), Tt(n, "long_phrase", "."), At(n, "backspace", "delete.svg", "<]");
 }
 function Nt(e, t) {
  console.log(e + " Line: " + t.line + " Start: " + t.start + " Time: " + t.time + " String: " + t.string + " Size: " + t.size + " Pitch: " + t.pitches.join(",") + " Voice: " + t.voice + " Staff: " + t.staff + " Grace: " + t.grace);
 }
 function Lt(e, n) {
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
  return this.string = r.substring(this.start, this.end), this.time = n.time, this.voice = n.v, 
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
     for (let e = 0; e < x.length; e++) x[e].undone_fingerings = [];
     c = [];
    }(), "x" != this.fingering && this.prior_fingerings.push(this.fingering), e) {
     let t = K.exec(e);
     t ? (this.phrase_break = t[1], this.fingering = e.replace(K, "")) : this.fingering = e;
    } else this.init();
    u.push(this);
   }
  }, this.set_preset_fingering = function(e) {
   if (e) {
    t.preset_lock && (/x/.test(e) || (this.locked = !0));
    let n = K.exec(e);
    n ? (this.preset_phrase_break = n[1], this.preset_fingering = e.replace(K, "")) : this.preset_fingering = e;
   } else this.preset_init();
  }, this.get_pitch_fingering = function(e) {
   let t = function(e) {
    if (F) return 0 == e.staff ? "<" : ">";
    return nn(e.staff);
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
 function Ft(e) {
  let t = e;
  if (S) for (;!(t in T); ) t--; else for (;!(t in B); ) t--;
  return t;
 }
 function Mt() {
  this.read_file = function(e) {
   return "";
  }, this.errmsg = function(e, t, n) {
   document.getElementById(me).innerHTML += e + "<br/>\n";
  }, this.img_out = function(e) {
   let t = /<svg /;
   e.match(t) && (e = e.replace(t, '<svg id="line_' + C + '" '), C++), i += e;
  }, this.anno_start = function(e, t, n, i, r, o, a) {
   N.push([ t, n ]);
   let s = t;
   "grace" === e && (s = Ft(t)), !S && s in B && (B[s].line = C), l.out_svg('<g class="e_' + s + '">\n');
  }, this.anno_stop = function(e, t, n, i, r, o, a) {
   let s = t;
   "grace" === e && (s = Ft(t)), l.out_svg("</g>\n"), "note" !== e && "grace" !== e || (l.out_svg('<rect class="abcr _' + s + '" x="'), 
   l.out_sxsy(i, '" y="', r), l.out_svg('" width="' + o.toFixed(2) + '" height="' + a.toFixed(2) + '"/>\n'));
  }, this.get_abcmodel = function(e, t, n) {
   if (S) return;
   console.log(n);
   for (let e = 0; e < t.length; e++) {
    console.log("Voice: " + e);
    let n = t[e].st;
    q[e] = n;
   }
   let i = e;
   for (;i; ) {
    let e = new Lt(n, i);
    e.start && (x.push(e), B[e.start] = e, e.staff in A || (A[e.staff] = {}), e.time in A[e.staff] || (A[e.staff][e.time] = []), 
    A[e.staff][e.time].push(e)), i = i.ts_next;
   }
  }, this.page_format = !1, this.imagesize = function() {
   let e = 8.5;
   return 1 !== p && (e *= p), 'width="' + e + 'in"';
  }();
 }
 function Pt(e, t) {
  let n = parseInt(e.time) - parseInt(t.time);
  return 0 !== n ? n : e.grace && !t.grace ? -1 : t.grace && !e.grace ? 1 : e.pitches[e.pitches.length - 1] < t.pitches[0] ? -1 : e.pitches[0] > t.pitches[t.pitches.length - 1] ? 1 : e.voice < t.voice ? (console.log("NOTES SORTED BY VOICE!"), 
  -1) : 1;
 }
 function Ht(e) {
  let t = "$1";
  return e.match(j) && (t = "$1"), e.match(O) && (t = "$2"), t;
 }
 function zt(e) {
  let t = "^";
  return /^</.test(e) && (t = "_"), t;
 }
 function Rt(e) {
  let t = Ht("<"), n = Ht(">"), i = e.replace(/[\)\(]/g, ""), r = lt(i), l = "";
  for (let e = 0; e < r.length; e++) r[e] = r[e].replace(O, t), r[e] = r[e].replace(j, n), 
  l += r[e];
  return l += '"', l = '"' + zt(i) + l;
 }
 function $t(e, t, n) {
  let i = !1, r = Ht("<"), l = Ht(">"), o = [];
  for (let t = 0; t < e.length; t++) {
   let a = "", s = "x";
   if (e[t] && "x" !== e[t]) i = !0, s = e[t]; else {
    if (!n) break;
    if (!e[t] || e[t] && "x" === e[t]) continue;
   }
   if (s.match(/^\(/)) a = Rt(s); else {
    a = '"' + zt(s) + (s = (s = s.replace(O, r)).replace(j, l)) + '"';
   }
   a = a.replace(K, ""), o.unshift(a);
  }
  let a = "";
  return i && (a = o.join("")), a;
 }
 function Vt(e) {
  let t = e.fingering;
  return "x" === t ? "" : $t(lt(t = t.replace(U, "")), e.staff, !1);
 }
 function Xt(e) {
  let t = [];
  for (let n in e) e.hasOwnProperty(n) && t.push(n);
  return t.sort(function(e, t) {
   return parseInt(e) - parseInt(t);
  }), t;
 }
 function Gt(e) {
  let t = [], n = {};
  for (let i = 0; i < e.length; i++) {
   let r = e[i];
   if (!r.grace) for (let e = 0; e < r.pitches.length; e++) {
    let i = r.pitches[e];
    t.push(i), i in n || (n[i] = []), n[i].push(r);
   }
  }
  for (let e = 0; e < n.length; e++) n[e].sort(Pt);
  return n;
 }
 function Ut(e) {
  let t = Gt(e), n = Xt(t), i = [];
  for (let e = 0; e < n.length; e++) {
   let r = n[e];
   for (let e = 0; e < t[r].length; e++) {
    let n = t[r][e], l = lt(n.fingering);
    for (let e = 0; e < n.pitches.length; e++) {
     n.pitches[e] === parseInt(r) && ("x" !== l[e] ? i.push(l[e]) : i.push(""));
    }
   }
  }
  return i;
 }
 function Ot(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) e[n].grace && t++;
  return t;
 }
 function jt(e) {
  if (e.size > 1 && console.log("BIGGIE"), e.grace) return Vt(e);
  let t = A[e.staff][e.time], n = Ot(t);
  if (t.length - n < 2) return Vt(e);
  t.sort(Pt);
  let i = 0, r = t[0];
  for (;r.grace; ) r = t[++i];
  return e !== r ? "" : $t(Ut(t), e.staff, !0);
 }
 function Yt(e) {
  return e.starts[0] - e.start;
 }
 function Kt(e) {
  let t = function(e) {
   let t = Yt(e);
   return e.string.substring(0, t);
  }(e), n = function(e) {
   let t = [], n = e.starts, i = e.stops, r = e.string;
   r = r.substring(Yt(e));
   let l = [], o = [];
   for (let e = 0; e < n.length; e++) l.push(n[e] - n[0]), o.push(i[e] - n[0]);
   for (let e = 0; e < l.length; e++) {
    let n = r.substring(l[e], o[e]);
    t.push(n);
   }
   return t;
  }(e), i = [];
  e.fingering && (i = lt(e.fingering));
  for (let e = 0; e < n.length; e++) {
   if (i[e]) {
    let n = i[e];
    "x" !== (n = n.replace(Y, "")) && (t += "!" + n + "!");
   }
   t += n[e];
  }
  return t += "}";
 }
 function Zt(e) {
  if (e.fingering) return !0;
  let t = A[e.staff][e.time];
  for (let e = 0; e < t.length; e++) if (!t[e].grace && t[e].fingering) return !0;
  return !1;
 }
 function Wt(e) {
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
 function Jt() {
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
  }() || (e += Be + "\n", function() {
   if (void 0 !== n) return n;
   n = !1;
   for (let e = 0; e < D.length; e++) {
    let t = D[e];
    if (B[t].grace) {
     n = !0;
     break;
    }
   }
   return n;
  }() && (e += Te + "\n")), !function() {
   if (void 0 !== s) return s;
   s = !1;
   let e = r.split("\n");
   for (let t = 0; t < e.length; t++) if (e[t].match(/^%%measurenb\s+\d+/)) {
    s = !0;
    break;
   }
   return s;
  }()) {
   let t = Ve("measure_number_interval");
   t && (e += "%%measurenb " + t + "\n");
  }
  T = {};
  let t = 0;
  for (let n = 0; n < D.length; n++) {
   let i = D[n], l = B[i], o = "", a = parseInt(l.start), s = parseInt(l.end);
   e += o = r.substring(t, a), l.grace ? (l.fingered_start = e.length, e += Kt(l)) : (e += Wt(l), 
   Zt(l) && (e += jt(l)), l.fingered_start = e.length, e += l.string), t = s, T[l.fingered_start] = l;
  }
  return e += r.substring(t);
 }
 function Qt() {
  f = !0, L++, console.log("RERENDERING NUMBER " + L);
  let e = new Date().getTime(), t = document.getElementById(he), n = document.getElementById(me), r = new Mt();
  l = new Abc(r);
  let o = Jt(), a = new Date().getTime(), s = a - e;
  console.log("MY LAG: " + s), document.getElementById(se).value = o, e = new Date().getTime(), 
  i = "", l.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  C = 0, n.innerHTML = "", N = [];
  try {
   l.tosvg(y, document.getElementById(se).value);
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
    hn(this);
   }, e.ondblclick = function() {
    _n(this);
   };
  }, 300), s = (a = new Date().getTime()) - e, console.log("LIB LAG: " + s), Et();
 }
 function en(e) {
  if (console.log(String.fromCharCode(e) + " --\x3e " + e), e === we) {
   ln();
   let e = on();
   e.length > 0 && e[0] ? (o.set_fingering(""), o.phrase_break = "", Qt()) : o.prior_note && ((o = o.prior_note).set_fingering(""), 
   Qt()), En(o);
  } else if (e == Ce || e == Ie) sn(), w = [], o.next_note && (o = o.next_note); else if (e == xe) sn(), 
  w = [], o.prior_note && (o = o.prior_note); else if (e == ke) mn(); else if (e == ve) !function() {
   ln();
   let e = u.pop();
   e && (e.undo_fingering_change(), o = e, Qt(), En(o));
  }(); else {
   if (e != Ee) return !1;
   !function() {
    ln();
    let e = c.pop();
    e && (e.redo_fingering_change(), o = e.next_note ? e.next_note : e, Qt(), En(o));
   }();
  }
  return En(o), !0;
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
  k && (o = o.prior_note);
 }
 function ln() {
  k = !1, E = [], w = [], Qt(), En(o);
 }
 function on() {
  let e = [], t = o.get_fingering().split("");
  for (let n = 0; n < t.length; n++) {
   let i = t[n];
   "x" === i ? e.push("") : e.push(i);
  }
  return e;
 }
 function an() {
  let e = on();
  for (;e.length; ) {
   let t = e.pop();
   t && E.unshift(t);
  }
 }
 function sn() {
  let e = !1;
  w.length > 0 && (Array.prototype.unshift.apply(E, w), function() {
   for (let e = 0; e < w.length; e++) if ("(" === w[e]) return !0;
   return !1;
  }() || (e = !0)), w = [];
  for (let e = E.length - 1; e >= 0 && /[\-\/\(]/.test(E[e]); e--) w.unshift(E.pop());
  if (0 === E.length) return;
  if (/[\-\/]/.test(E[0]) && (e = !0), k) {
   let e = on();
   ")" === e[e.length - 1] ? e.pop() : (alert("Something wonky with parentheses."), 
   ln()), Array.prototype.unshift.apply(E, e), k = !1;
  }
  e ? o.prior_note ? (o = o.prior_note, an()) : E.pop() : o.fingering && o.fingering.match(/x/) && an();
  let t = E.join(""), n = 1;
  for (;;) try {
   let e = Abcdf_Parser.parse(t);
   k = !1, 2 === n && (k = !0), rn(e);
   break;
  } catch (e) {
   if (1 === n ? E.push(")") : 2 === n ? (E.pop(), E.pop(), 0) : 3 === n && (n = 0), 
   0 == E.length) break;
   t = E.join(""), n++;
  }
  E = [], Qt(), En(o);
 }
 function cn(e) {
  clearTimeout(v);
  let t = !1;
  return /[\(\)\/\-1-5]/.test(e) && (E.push(e), t = !0), "t" !== e && "T" !== e || (sn(), 
  F ? (F = !1, f && (document.body.style.backgroundColor = "white")) : (F = !0, f && (document.body.style.backgroundColor = "black")), 
  En(o), t = !0), "," !== e && ";" !== e && "." !== e || (sn(), function(e) {
   o.phrase_break = e;
  }(e), Qt(), t = !0), v = setTimeout(sn, le), console.log("Done " + v), t;
 }
 function un(e) {
  var t;
  return cn((t = e, null == t.which ? String.fromCharCode(t.keyCode) : 0 != t.which && 0 != t.charCode ? String.fromCharCode(t.which) : null).toLowerCase());
 }
 function dn(e, t) {
  let n = [], i = [];
  i.push("% abcDidactyl v6");
  let r, l = Ge(e), o = e.split("\n"), a = "", s = !1;
  for (let e = 0; e < o.length; e++) {
   let t = o[e];
   a ? s ? n.push(t) : (r = ee.exec(t)) && (s = !0) : (r = J.exec(t)) && r[1] ? a = r[1] : n.push(t);
  }
  let c, u, d, f, p, g = Re(), h = Me(t);
  if ("replace" === Ve("output")) {
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
 function fn() {
  document.body.addEventListener("keydown", tn), document.body.addEventListener("keypress", un);
 }
 function pn() {
  document.body.removeEventListener("keydown", tn), document.body.removeEventListener("keypress", un);
 }
 function gn() {
  if (function() {
   if (H) return;
   let e = document.getElementById(ae);
   e.align = "center";
   let t = document.getElementById(se);
   t || ((t = document.createElement("div")).id = se, t.style.display = "none", e.appendChild(t)), 
   t.class = ce;
   let n = document.createElement(ue);
   n.id = ue, e.appendChild(n);
   let i = document.createElement(de);
   i.id = de, e.appendChild(i);
   let r = document.createElement(fe);
   r.id = fe, e.appendChild(r);
   let l = document.createElement(ge);
   l.id = ge, e.appendChild(l);
   let o = document.createElement(he);
   o.id = he, l.appendChild(o);
   let a = document.createElement(me);
   a.id = me, l.appendChild(a);
   for (let e = 0; e < 7; e++) l.appendChild(document.createElement("br"));
   let s = document.createElement(pe);
   s.id = pe, e.appendChild(s);
  }(), De(), function() {
   if (H) return;
   Bt(), It();
   let e = V + "/download_36_x4.png", n = document.getElementById(de), i = document.createElement("table"), r = document.createElement("tbody"), l = document.createElement("tr");
   n.appendChild(i), i.appendChild(r), i.style.backgroundColor = "LightGray", i.align = "center", 
   r.appendChild(l);
   let o = document.createElement("p");
   o.setAttribute("id", "downloadify");
   let a = document.createElement("td");
   a.appendChild(o), l.appendChild(a);
   let s = document.createElement("input");
   s.id = "sequence_spinner", s.min = "1", s.max = "999", s.size = 3, s.type = "number", 
   s.alt = "fingering_number", s.value = 1, s.onchange = Sn, Ct(a = document.createElement("td"), "Suggestion", "sequence_prompt"), 
   a.appendChild(s), l.appendChild(a), t.preset_select || (a.style.display = "none"), 
   t.preset && (s.value = t.preset);
   let c = document.createElement("input");
   c.type = "image", c.src = V + "/eye.svg", c.width = "36", c.alt = "View", c.onclick = qn, 
   (a = document.createElement("td")).appendChild(c), l.appendChild(a), t.hide_view && (a.style.display = "none");
   let u = document.createElement("input");
   u.type = "image", u.src = V + "/print.svg", u.width = "36", u.alt = "Print...", 
   u.onclick = Dn, (a = document.createElement("td")).appendChild(u), l.appendChild(a), 
   t.hide_print && (a.style.display = "none"), a = document.createElement("td");
   let d = document.createElement("input");
   d.type = "checkbox", d.value = "annotated", d.checked = P, d.id = "view_annotated", 
   d.onclick = bt;
   let f = document.createElement("label");
   f.htmlFor = "view_annotated", f.appendChild(document.createTextNode("Annotated")), 
   a.appendChild(d), t.hide_annotated && (a.style.display = "none"), a.appendChild(f), 
   l.appendChild(a), t.hide_annotated && (a.style.display = "none");
   let p = document.createElement("input");
   p.type = "image", p.src = V + "/reload.svg", p.width = "36", p.alt = "reset", p.onclick = it, 
   (a = document.createElement("td")).appendChild(p), l.appendChild(a), t.hide_reset && (a.style.display = "none");
   let g = document.createElement("input");
   g.id = "copy_fingerings_button", g.type = "image", g.src = V + "/clipboard.svg", 
   g.width = "36", g.alt = "copy", (a = document.createElement("td")).appendChild(g), 
   l.appendChild(a), t.hide_copy ? g.style.display = "none" : new Clipboard("#copy_fingerings_button", {
    text: tt
   });
   let h = document.createElement("input");
   h.type = "image", h.src = V + "/paperclip.svg", h.width = "36", h.alt = "paste", 
   h.onclick = nt, (a = document.createElement("td")).appendChild(h), l.appendChild(a), 
   t.hide_paste && (h.style.display = "none");
   let m = document.createElement("input");
   m.type = "image", m.src = V + "/globe.svg", m.width = "36", m.alt = "URL", m.onclick = _t, 
   (a = document.createElement("td")).appendChild(m), l.appendChild(a), t.url_input || (m.style.display = "none");
   let _ = document.createElement("input");
   _.setAttribute("type", "file"), _.setAttribute("accept", "text/vnd.abc"), _.onchange = yt, 
   _.setAttribute("id", "file_input"), (a = document.createElement("td")).appendChild(_), 
   l.appendChild(a), t.file_input || (_.style.display = "none");
   let b = document.createElement("input");
   b.type = "image", b.src = V + "/tags.svg", b.alt = "Metadata...", b.width = "36", 
   b.onclick = st, (a = document.createElement("td")).appendChild(b), l.appendChild(a), 
   t.hide_metadata && (b.style.display = "none");
   let v = document.createElement("input");
   v.type = "image", v.src = V + "/zoom-out.svg", v.alt = "Zoom In", v.width = "36", 
   v.onclick = ut, (a = document.createElement("td")).appendChild(v), l.appendChild(a);
   let E = document.createElement("input");
   E.type = "image", E.src = V + "/zoom-in.svg", E.alt = "Zoom In", E.width = "36", 
   E.onclick = dt, (a = document.createElement("td")).appendChild(E), l.appendChild(a);
   let k = document.createElement("input");
   k.type = "image", k.src = V + "/cog.svg", k.alt = "Preferences...", k.width = "36", 
   k.onclick = at, (a = document.createElement("td")).appendChild(k), l.appendChild(a), 
   t.hide_prefs && (k.style.display = "none");
   let w = document.createElement("input");
   w.type = "image", w.src = V + "/info.svg", w.alt = "Help", w.width = "36", w.onclick = ot, 
   (a = document.createElement("td")).appendChild(w), l.appendChild(a), Downloadify.create("downloadify", {
    filename: function() {
     return y;
    },
    data: An,
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
    swf: X + "/downloadify.swf",
    downloadImage: e,
    width: "36",
    height: "36",
    append: !1
   }), qt(), H = !0;
  }(), function() {
   je("preset_preference", localStorage.getItem("preset_preference")), je("output", localStorage.getItem("output")), 
   je("restore", localStorage.getItem("restore")), je("keypad", localStorage.getItem("keypad"));
   let e = localStorage.getItem("measure_number_interval");
   void 0 !== e && "" !== e || (e = G), Ye("measure_number_interval", e), Ye("default_authority", localStorage.getItem("default_authority")), 
   Ye("default_authority_year", localStorage.getItem("default_authority_year")), Ye("default_transcriber", localStorage.getItem("default_transcriber"));
  }(), !(r = document.getElementById(se).value)) {
   let e = Ve("default_url");
   e && (mt(e), r = document.getElementById(se).value);
  }
  f = !0, r && (b = r.split(""), h = Ge(r), Ue(), yn(), En(o = I[0][0][0]), fn()), 
  Et(), $(function() {
   FastClick.attach(document.body);
  });
 }
 function hn(e) {
  console.log("Processing note click....");
  let t = e.getAttribute("class");
  console.log("Click " + t);
  let n = t.split("_")[1];
  if (n in T) {
   let e = T[n];
   Nt("process_note_click", e), En(e), o = e;
  }
 }
 function mn() {
  ln();
  let e = "";
  o.preset_fingering && (e += "Preset (recommended) fingering: " + o.get_preset_fingering() + "\n\n"), 
  e += "Please enter a fingering string for the selected note.";
  let t = o.fingering, n = window.prompt(e, t);
  try {
   if (null === n) return;
   n = (n = n.replace(Z, "")).replace(U, ""), rn(Abcdf_Parser.parse(n)), Qt(), En(o);
  } catch (e) {
   alert("Bad abcDF parse of fingering string: " + e.message + e.stack);
  }
 }
 function _n(e) {
  console.log("Processing note double-click...."), hn(e), mn();
 }
 function yn() {
  let e = new Mt(), t = document.getElementById(he), n = document.getElementById(me);
  t.align = "center", l = new abc2svg.Abc(e), i = "", l.tosvg("edit", '%%bgcolor white\n%%beginsvg\n<style type="text/css">\n\trect.abcr {fill:#a08000; fill-opacity:0}\n\trect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'), 
  n.innerHTML = "", N = [];
  try {
   r && l.tosvg(y, r);
  } catch (e) {
   return void alert(e.message + "\nabc2svg tosvg bug - stack:\n" + e.stack);
  }
  try {
   r && (t.innerHTML = i, function() {
    let e, t, n, i, r;
    for (let i = 0; i < x.length; i++) t = (e = x[i]).line, n = e.staff, t in I || (I[t] = [], 
    I[t][0] = [], I[t][1] = []), I[t][n].push(e);
    for (t = 0; t < I.length; t++) for (n = 0; n < 2; n++) I[t][n].sort(Pt);
    for (n = 0; n < 2; n++) for (t = 0; t < I.length; t++) {
     let e = I[t][n];
     for (let t = 0; t < e.length; t++) i = e[t], r ? (r.next_note = i, i.prior_note = r, 
     r = i) : (r = i, i.prior_note = void 0);
    }
    i.next_note = void 0;
   }(), function() {
    let e;
    for (e in B) B.hasOwnProperty(e) && D.push(e);
    D.sort(function(e, t) {
     return parseInt(e) - parseInt(t);
    });
   }(), S = !0, C = 0, et(), Qt());
  } catch (e) {
   return void alert(e.message + "\nabc2svg image bug - abort:\n" + e.stack);
  }
 }
 function bn(e, t) {
  let n, i = document.getElementsByClassName(e), r = i.length;
  for (;--r >= 0; ) (n = i[r]).setAttribute("color", t);
 }
 function vn(e) {
  let t, n = M.length;
  for (t = 0; t < n; t++) bn(M[t], e);
 }
 function En(e) {
  let t = e.fingered_start;
  0 != M.length && (vn("black"), M = []), M.push("e_" + t), F ? 0 === e.staff ? vn("dodgerblue") : vn("red") : 1 === e.staff ? vn("dodgerblue") : vn("red");
  let n = "line_" + e.line, i = document.getElementById(n);
  if (!function(e) {
   let t = $(e), n = $(window), i = document.getElementById(pe), r = n.scrollTop(), l = r + n.height() - i.offsetHeight, o = t.offset().top;
   return o + t.height() <= l && o >= r;
  }(i)) {
   i.scrollIntoView(!1);
   let e = document.getElementById(pe), t = document.body.scrollTop;
   window.scrollTo(0, t + e.offsetHeight);
  }
 }
 function kn(e) {
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
 function wn(e) {
  let t = [];
  e.fingering && (t = lt(e.fingering));
  let n = e.fingering || "";
  for (let i = t.length; i < e.size; i++) n += "x";
  return n += e.phrase_break;
 }
 function Cn(e) {
  if (e.grace) return wn(e);
  let t = A[e.staff][e.time], n = Ot(t);
  if (t.length - n < 2) return wn(e);
  t.sort(Pt);
  let i = 0, r = t[0];
  for (;r.grace; ) r = t[++i];
  if (e !== r) return "";
  let l = Ut(t), o = "";
  for (let e = 0; e < l.length; e++) l[e] ? o += l[e] : o += "x";
  return o;
 }
 function xn(e, t) {
  let n = [], i = t, r = e.split("");
  for (let e = 0; e < r.length; e++) {
   let t = r[e];
   t.match(Y) ? t !== i && (n.push(t), i = t) : n.push(t);
  }
  return n.join("");
 }
 function In(e, t) {
  let n = I[t][e], i = "";
  for (let e = 0; e < n.length; e++) {
   i += Cn(n[e]);
  }
  return i;
 }
 function Bn(e, t) {
  let n = W.exec(e);
  return n && n[1] ? n[1] : t;
 }
 function Tn() {
  let e, t = "", n = "", i = nn(0), r = nn(1);
  for (let e = 0; e < I.length; e++) {
   let l = In(0, e);
   if (l && (i = Bn(l = xn(l, i), i), t += l, e < I.length - 1 && (t += "&")), I[e][1]) {
    let t = In(1, e);
    t && (r = Bn(t = xn(t, r), r), n += t, e < I.length - 1 && (n += "&"));
   }
  }
  return e = t + "@" + n;
 }
 function Dn() {
  console.log("Print that score.");
  let e = window.open("", "print_window");
  e.document.write(i), e.document.close(), e.focus(), e.print(), e.close();
 }
 function Sn() {
  document.getElementById(se).value = r, De(), r = document.getElementById(se).value, 
  b = r.split(""), yn(), En(o = I[0][0][0]), fn();
 }
 function An() {
  let e, t;
  return t = dn(P ? e = Jt() : r, !0);
 }
 function qn() {
  let e = An();
  window.open().document.write("<pre>" + e + "</pre>");
 }
 function Nn() {
  return Tn();
 }
 function Ln(e) {
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
  let e = P;
  P = !1;
  let t = An();
  return P = e, t;
 }
 return this.renderUI = function(e) {
  !function(e) {
   t || (t = e).experiment_id || (t.experiment_id = "");
  }(e), gn();
  let n = Ve("qualtrics");
  n && (n.disableNextButton(), n.disablePreviousButton());
 }, this.getXValue = kn, this.getAuthority = function() {
  return Ve("include_pii") ? Fe("authority") : "";
 }, this.getAuthorityYear = function() {
  return Fe("authority_year");
 }, this.getTranscriber = function() {
  return Ve("include_pii") ? Fe("transcriber") : "";
 }, this.getComments = function() {
  return Fe("comments");
 }, this.getEnteredCollection = Nn, this.getEnteredAbcDF = Nn, this.getEnteredAbcD = Fn, 
 this.getValidatedCollection = function() {
  let e = Tn();
  return Ln(e) ? e : "";
 }, this.getValidatedAbcD = function() {
  if (Ln(Tn())) {
   let e = An();
   return /^\s*X:/m.test(e) ? /^% abcDidactyl/m.test(e) ? e : (alert("File is not valid abcD."), 
   "") : (alert("File is not valid abc."), "");
  }
  return "";
 }, this.setEnteredCollection = function(e) {
  o = I[0][0][0];
  let t = Re(), n = Me(!0);
  n.sequence = e, Qe(Le(t), n), Qt(), En(o);
 }, this.handleKeys = fn, this.unhandleKeys = pn, this.stopAutoSaving = function() {
  m && clearInterval(m);
 }, this;
}