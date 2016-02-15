/* abcDE_min.js v5.0.83 */
function AbcDE(){"use strict";function e(){Yt&&clearInterval(Yt),$t=[],Gt=[],Zt="",Wt="noname.abc",Pt=void 0,Ht="",Rt=void 0,Kt=[],Ut=!1,Qt=!1,en=[],zt=void 0,tn=0,nn=[],rn=[],an={},on={},cn=[],sn=!1,ln={},un={},dn=[],fn=0,Ot=void 0,gn=[]}function t(e){var t,n=ln[e],r=[];for(t in n)n.hasOwnProperty(t)&&r.push(t);return r.sort(function(e,t){return parseInt(e)-parseInt(t)}),r}function n(e,t){if(!e)return console.log("MISSING fingers have no hands."),"";if("x"===e)return e;for(var n=t,r=[],i=e.split(""),a=0;a<i.length;a++){var o=i[a];"<"===o||">"===o?n=o:o.match(/\d/)?r.push(n+o):r.push(o)}return r.join("")}function r(){return"undefined"==typeof Storage?!1:!0}function i(e,t){Zt||(Zt=md5(Ht));var n=e+"_"+t+"_"+Zt;return n}function a(e){if(!r())return{};var t={sequence:""},n=i("sequence",e),a=localStorage.getItem(n)||"";a.match(/[^x&@]/)&&(t.sequence=a),n=i("authority",e);var o=localStorage.getItem(n)||"";t.authority=o,n=i("authority_year",e);var c=localStorage.getItem(n)||"";t.authority_year=c,n=i("transcriber",e);var s=localStorage.getItem(n)||"";t.transcriber=s,n=i("comments",e);var l=localStorage.getItem(n)||"";return t.comments=l,t}function o(e){var t=document.getElementById(e);return t.value?t.value:""}function c(){var e=new Date,t=e.getFullYear()+"-"+sprintf("%02d",e.getMonth()+1)+"-"+sprintf("%02d",e.getDate())+" "+sprintf("%02d",e.getHours())+":"+sprintf("%02d",e.getMinutes())+":"+sprintf("%02d",e.getSeconds()),n={sequence:Dt(),authority:o("authority"),authority_year:o("authority_year"),transcriber:o("transcriber"),transcription_date:t,comments:o("comments")};return n}function s(e,t){var n=document.getElementById(e),r=n.value,a=i(e,t);localStorage.setItem(a,r)}function l(e){for(var t=document.getElementsByName(e),n=0;n<t.length;n++){var r=t[n];if(r.checked)return r.id}}function u(e){var t="";if("preset"===e||"output"===e||"keypad"===e||"restore"==e)t=l(e);else{var n=document.getElementById(e);t=n.value}Vt[e]=t,localStorage.setItem(e,t)}function d(){var e=document.getElementById("sequence_spinner");return e?e.value:(alert("Sequence DOM element has gone missing."),"1")}function f(){if(!r())return void clearInterval(Yt);var e=document.getElementById("sequence_spinner");if(!e)return void clearInterval(Yt);var t=d(),n=i("sequence",t),a=Dt();localStorage.setItem(n,a),s("authority",t),s("authority_year",t),s("transcriber",t),s("comments",t)}function p(e){if(Ft&&Ft[e])return Ft[e];var t=l(e);return t?t:""}function g(){var e=p("preset"),t=1;return"last"===e&&(t=jt.length||1),t}function h(e){for(var t,n=e.split("\n"),r=!1,i={},a=[],o="",c=0;c<n.length;c++){var s=n[c];if(!o&&(t=An.exec(s),t&&t[1]))o=t[1],r=!0;else if(r)if(t=Sn.exec(s),t&&t[1]&&t[2])i={sequence:t[2],comments:""},a.push(i);else{if(t=qn.exec(s))break;if(t=Nn.exec(s),t&&t[1]){i.authority=t[1],t[2]&&(i.authority_year=t[2]);continue}if(t=Ln.exec(s),t&&t[1]){i.transcriber=t[1];continue}if(t=Fn.exec(s),t&&t[1]){i.transcription_date=t[1];continue}t=Pn.exec(s),t&&t[1]&&(i.comments+=t[1]+"\n")}}return a}function v(){var e=document.getElementById("sequence_spinner");e.min=1,e.max=jt.length||1;var t=g();e.value=t}function m(){var e=p("preset");return e&&"none"!==e?"first"===e?jt[0]:"last"===e?jt[jt.length-1]:"":""}function y(e){if(e){var t=e-1;return parseInt(e)<=jt.length?jt[t]:""}return m()}function b(e,t){for(var n=document.getElementsByName(e),r=0;r<n.length;r++){var i=n[r];i.id===t&&(i.checked=!0)}}function _(e,t){var n=document.getElementById(e);t?n.value=t:n.value=""}function E(){b("preset",localStorage.getItem("preset")),b("output",localStorage.getItem("output")),b("restore",localStorage.getItem("restore")),b("keypad",localStorage.getItem("keypad")),_("default_authority",localStorage.getItem("default_authority")),_("default_authority_year",localStorage.getItem("default_authority_year")),_("default_transcriber",localStorage.getItem("default_transcriber"))}function C(e){_("authority",e.authority),_("authority_year",e.authority_year),_("transcriber",e.transcriber),_("comments",e.comments)}function w(e,r){if(e){console.log("Setting fingers: ",e);var i,a,o,c={},s=e.split("@");for(i=0;i<s.length;i++){var l=He(i);c=[];var u=s[i].split("&");for(a=0;a<u.length;a++){var d=u[a];c=c.concat(B(In,d))}for(var f=t(i),p=0;p<f.length;p++){var g=f[p],h=ln[i][g];if(h.sort(fe),h[0].grace){h[0][r]="";for(var v=0;v<h[0].size;v++)o=c.shift(),o||(console.log("Preset fingering MISSING for note:"),ce("preset grace note",h[0])),o=n(o,l),l=Ct(o,l),h[0][r]+=o}var m=Ee(h),y=_e(m);for(v=0;v<y.length;v++)for(var b=y[v],_=0;_<m[b].length;_++){var E=m[b][_];E[r]=""}for(v=0;v<y.length;v++)for(var b=y[v],_=0;_<m[b].length;_++){var E=m[b][_];E.grace||(E[r]||(E[r]=""),o=c.shift(),o||(console.log("Preset fingering MISSING for note:"),ce("preset pit note",E)),o=n(o,l),l=Ct(o,l),E[r]+=o)}}}}}function I(e,t){var n=t.sequence,r=t.sequence,i=!0,a=p("preset");a&&"none"!==a||(i=!1,n="");var o=!1;if(e&&e.sequence&&e.sequence!==n){var c=p("restore");o="always"===c?!0:"never"===c?!1:confirm("You have previously entered data for this piece. Do you want to restore them?"),o&&(n=e.sequence)}o?C(e):i&&C(t),w(n,"fingering"),w(r,"preset_fingering"),Yt=setInterval(function(){f()},Hn)}function k(){var e=d(),t=a(e),n=y(e);I(t,n)}function x(){if(Ht){var e=confirm("All changes you have made to this fingering sequence will be discarded, and the initial sequence will be restored. Are you sure you want to proceed?");if(e){var t=d(),n=y(t);I(void 0,n),Se(),zt=rn[0][0][0],vt(zt)}}}function B(e,t){if(!t)return[];for(var n,r=[],i=0,a=0;null!=(n=e.exec(t));){a=e.lastIndex;var o;o=i===a?t.substr(i):t.substr(i,a-i),r.push(o),i=e.lastIndex}var c=t.substr(i);if(c){var s="";r.length>0&&(s=r.pop()),s+=c,r.push(s)}return r}function T(){var e=window.open(_n,"_blank");e.focus()}function D(e){nt();var t=document.getElementById("modal_wrapper"),n=document.getElementById("modal_window");t.className="overlay";var r=n.offsetHeight-document.documentElement.clientHeight;r>0&&(n.style.maxHeight=parseInt(window.getComputedStyle(n).height)-r+"px"),n.style.marginTop=-n.offsetHeight/2+"px",n.style.marginLeft=-n.offsetWidth/2+"px",e.preventDefault?e.preventDefault():e.returnValue=!1}function A(){Xt>Jn&&(Xt-=Zn,Se())}function S(){Wn>Xt&&(Xt+=Zn,Se())}function q(e){u("preset"),u("output"),u("restore"),u("keypad"),u("default_authority"),u("default_authority_year"),u("default_transcriber");var t=document.getElementById("modal_wrapper");t.className="",V(),tt(),e.preventDefault?e.preventDefault():e.returnValue=!1}function N(e){var t=e.slice(0,100);if(-1==t.indexOf("<?xml"))return!1;var n=t.match(/encoding="([^"]+)"/),r="utf-8";return n&&2==n.length&&(r=n[1]),r}function L(e){var t={},n=$.parseXML(e),r=vertaal(n,t),i=r[0],a=r[1];return a&&console.log("xml2abc ERROR: "+a),i||alert("Unable to open MusicXML file: "+a),i}function F(e,t){var n=new XMLHttpRequest;return"withCredentials"in n?n.open(e,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest,n.open(e,t)):n=null,n}function P(e){var t=e.split(".");return t[t.length-1]}function M(e){var t="";try{var n=new JSZip(e);$.each(n.files,function(e,n){t=n.asText()})}catch(r){return alert("Could not open compressed MusicXML file: "+r.message),""}var i=N(t);return"UTF-8"!==i?(alert("Input mxl is not UTF-8 encoded. Cannot open."),""):t=L(t)}function H(e){var t=P(e),n='The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.',r=F("GET",e);return r?("mxl"===t&&(r.responseType="arraybuffer"),r.onload=function(){console.log("File has been retrieved.");var e="";if("mxl"===t){if(e=M(r.response),!e)return}else{e=r.responseText;var n=N(e);if(n){if(!/^utf/i.test(n))return void alert("Input xml is not UTF-8 encoded. Cannot open.");e=L(e)}}e&&(document.getElementById(zn).value=e,it())},r.onerror=function(){alert(n)},void r.send()):void alert(n)}function R(){var e="Please enter URL for file to open.",t=yn+"/abc/OpenWTC/pf02.abc",n=window.prompt(e,t);null!==n&&H(n)}function z(e){var t=new FileReader,n="";t.onload=function(e){try{var t=new JSZip(e.target.result);$.each(t.files,function(e,t){n=t.asText()})}catch(e){return void alert("Could not open compressed MusicXML file: "+e.message)}var r=N(n);return"UTF-8"!==r?void alert("Input xml is not UTF-8 encoded. Cannot open."):(n=L(n),document.getElementById(zn).value=n,it(),void 0)},t.readAsArrayBuffer(e)}function O(){var e=document.getElementById("file_input"),t=e.files;if(!t.length)return void alert("Please select a valid abc file.");var n=t[0],r=P(n.name);if("mxl"===r)return void z(n);var i=!1,a=new FileReader;a.onload=function(e){var t=N(a.result),r=new FileReader;t?i=!0:t="UTF-8",r.onload=function(e){var t="";t=i?L(r.result):e.target.result,document.getElementById(zn).value=t,it()},r.readAsText(n,t)},a.readAsText(n,"UTF-8")}function G(){hn=hn?!1:!0}function U(){vn?(vn=!1,tt()):(vn=!0,nt()),j()}function X(e,t){for(var n=e.children,r=0;r<n.length;r++)n[r].style.display=t}function V(){var e=document.getElementById(Xn),t=document.getElementById("number_div"),n=document.getElementById("symbol_div"),r=p("keypad");if("show"===r)e.style.display="block",t.style.display="block",n.style.display="block",X(t,"inline"),X(n,"inline");else{X(n,"none"),X(t,"none");var i=p("qualtrics");if(i){var a=document.getElementById("q_next");a.style.display="inline";var o=document.getElementById("q_back");o.style.display="inline"}else t.style.display="block",n.style.display="block",e.style.display="none"}}function j(){var e=document.getElementById(Un);vn?e.style.display="block":e.style.display="none"}function Y(e){var t=e.keyCode||e.which;t=String.fromCharCode(t);var n=/[0-9]/;n.test(t)||(e.returnValue=!1,e.preventDefault&&e.preventDefault())}function Z(e,t,n,r,i,a){var o=document.createElement("input");o.type="text",o["class"]=r,o.id=t,i&&(o.onkeypress=i),"year"===r&&(o.size="4");var c=document.createElement("label");c.htmlFor=t,c.appendChild(document.createTextNode(n)),e.appendChild(c),e.appendChild(o),a&&e.appendChild(document.createElement("br"))}function W(e,t,n,r,i){var a=document.createElement("textarea");a["class"]=r,a.id=t,a.rows=i;var o=document.createElement("label");o.htmlFor=t,o.appendChild(document.createTextNode(n)),e.appendChild(o),e.appendChild(a)}function J(e,t,n){var r=document.createElement("label");r["class"]=n;var i=document.createTextNode(t);r.appendChild(i),e.appendChild(r)}function K(e,t,n,r,i,a,o){var c=document.createElement("div");c["class"]="radio_div",J(e,t,"prompt");for(var s=0;s<r.length;s++){var l=document.createElement("input");l.type="radio",l.id=r[s],l.id===a&&(l.checked=!0),l.name=n,c.appendChild(l),J(c,i[s],"radio_label");var u=document.createElement("span");u.innerHTML="&nbsp;&nbsp",c.appendChild(u)}e.appendChild(c),o&&e.appendChild(document.createElement("br"))}function Q(){var e=document.getElementById($n),t=document.createElement("div");t.id="modal_wrapper",e.appendChild(t);var n=document.createElement("div");n.id="modal_window",t.appendChild(n);var r=document.createElement("div");r.style.textAlign="right";var i=document.createElement("a");i.id="modal_close",i.href="#",i.innerHTML="Close <b>X</b>",r.appendChild(i),i.addEventListener("click",q,!1),n.appendChild(r);var a=document.createElement("h3");a.innerText="Preferences",n.appendChild(a);var o="restore",c=["always","never","ask"],s=["Always","Never","Ask"];K(n,"Restore Data",o,c,s,"ask",!0);var o="output",c=["append","replace"],s=["Append","Replace"];K(n,"Output",o,c,s,"append",!0),o="preset";var c=["first","last","none"],s=["First","Last","None"];K(n,"Preset",o,c,s,"first",!0),o="keypad";var c=["show","hide"],s=["Show","Hide"],l="hide",u="ontouchstart"in window;u&&(l="show"),K(n,"Keypad",o,c,s,l,!0),Z(n,"default_authority","Default Authority","name",void 0,!0),Z(n,"default_authority_year","Year","year",Y,!0),Z(n,"default_transcriber","Transcriber Name","name",void 0,!0)}function ee(e,t,n){var r=document.createElement("input");r.type="button",r["class"]="keypad-button",r.id=t,r.value=n,r.onclick=function(){Ye(n)},e.appendChild(r)}function te(e){var t=p("qualtrics"),n=mt(Ht),r="abcDF_"+n,i="abcD_"+n,a=Dt();Qualtrics.SurveyEngine.setEmbeddedData(r,a);var o=Nt();Qualtrics.SurveyEngine.setEmbeddedData(i,o),f();for(var c=document.getElementById(Rn);c.firstChild;)c.removeChild(c.firstChild);c.remove(),mn=!1,Yt&&clearInterval(Yt),t.enableNextButton(),t.enablePreviousButton(),"q_next"===e?t.clickNextButton():t.clickPreviousButton()}function ne(e,t,n){var r=document.createElement("input");r.type="button",r["class"]="keypad-button",r.id=t,r.value=n,r.onclick=function(){te(t)},e.appendChild(r)}function re(e,t,n,r){var i=document.createElement("input");i.id=t,i["class"]="keypad_button",i.type="image",i.src=En+"/"+n,i.alt=r,i.onclick=function(){Fe(t)},e.appendChild(i)}function ie(){var e=document.getElementById(Xn),t=document.createElement("number_div");t.id="number_div";var n=document.createElement("symbol_div");n.id="symbol_div",e.appendChild(n),e.appendChild(document.createElement("br")),e.appendChild(t),re(t,"undo","action-undo.svg","undo"),re(t,"redo","action-redo.svg","redo"),ee(t,"one","1"),ee(t,"two","2"),ee(t,"three","3"),ee(t,"four","4"),ee(t,"five","5"),re(t,"pencil","target.svg","...");var r=p("qualtrics");r&&(ne(t,"q_back","BACK"),ne(t,"q_next","NEXT")),re(n,"previous","arrow-circle-left.svg","<-"),re(n,"next","arrow-circle-right.svg","->"),ee(n,"comma",","),ee(n,"slash","/"),ee(n,"open_paren","("),ee(n,"close_paren",")"),ee(n,"toggle","T"),re(n,"backspace","delete.svg","<]")}function ae(){var e=document.getElementById(Un);e["class"]="right_aligned",e.align="center",Z(e,"authority","Authority","name",void 0,!1),Z(e,"authority_year","Year","year",Y,!0),Z(e,"transcriber","Transcriber","name",void 0,!0),W(e,"comments","Comments","comments",5,!0)}function oe(){if(!mn){Q(),ae(),j();var e=En+"/download_36_x4.png",t="36",n=document.getElementById(Gn),r=document.createElement("table"),i=document.createElement("tbody"),a=document.createElement("tr");n.appendChild(r),r.appendChild(i),r.style.backgroundColor="LightGray",r.align="center",i.appendChild(a);var o=document.createElement("p");o.setAttribute("id","downloadify");var c=document.createElement("td");c.appendChild(o),a.appendChild(c);var s=document.createElement("input");s.id="sequence_spinner",s.min="1",s.max="999",s.size=3,s.type="number",s.alt="fingering_number",s.value=1,s.onchange=kt,c=document.createElement("td"),J(c,"Sequence","sequence_prompt"),c.appendChild(s),a.appendChild(c),Ft.preset_select||(c.style.display="none");var l=document.createElement("input");l.type="image",l.src=En+"/eye.svg",l.width=t,l.alt="View",l.onclick=xt,c=document.createElement("td"),c.appendChild(l),a.appendChild(c);var u=document.createElement("input");u.type="image",u.src=En+"/print.svg",u.width=t,u.alt="Print...",u.onclick=It;var c=document.createElement("td");c.appendChild(u),a.appendChild(c),c=document.createElement("td");var d=document.createElement("input");d.type="checkbox",d.value="annotated",d.checked=hn,d.id="view_annotated",d.onclick=G;var f=document.createElement("label");f.htmlFor="view_annotated",f.appendChild(document.createTextNode("Annotated")),c.appendChild(d),c.appendChild(f),a.appendChild(c);var p=document.createElement("input");p.type="image",p.src=En+"/reload.svg",p.width=t,p.alt="reset",p.onclick=x,c=document.createElement("td"),c.appendChild(p),a.appendChild(c);var g=document.createElement("input");g.type="image",g.src=En+"/globe.svg",g.width=t,g.alt="URL",g.onclick=R,c=document.createElement("td"),c.appendChild(g),a.appendChild(c),Ft.url_input||(g.style.visibility="hidden");var h=document.createElement("input");h.setAttribute("type","file"),h.setAttribute("accept","text/vnd.abc"),h.onchange=O,h.setAttribute("id","file_input"),c=document.createElement("td"),c.appendChild(h),a.appendChild(c),Ft.file_input||(h.style.visibility="hidden"),c=document.createElement("td"),d=document.createElement("input"),d.type="checkbox",d.value="comment",d.checked=vn,d.id="show_metadata",d.onclick=U,f=document.createElement("label"),f.htmlFor="show_metadata",f.appendChild(document.createTextNode("Comment")),c.appendChild(d),c.appendChild(f),a.appendChild(c);var v=document.createElement("input");v.type="image",v.src=En+"/zoom-out.svg",v.alt="Zoom In",v.width=t,v.onclick=A,c=document.createElement("td"),c.appendChild(v),a.appendChild(c);var m=document.createElement("input");m.type="image",m.src=En+"/zoom-in.svg",m.alt="Zoom In",m.width=t,m.onclick=S,c=document.createElement("td"),c.appendChild(m),a.appendChild(c);var y=document.createElement("input");y.type="image",y.src=En+"/cog.svg",y.alt="Preferences...",y.width=t,y.onclick=D,c=document.createElement("td"),c.appendChild(y),a.appendChild(c);var b=document.createElement("input");b.type="image",b.src=En+"/info.svg",b.alt="Help",b.width=t,b.onclick=T,c=document.createElement("td"),c.appendChild(b),a.appendChild(c),Downloadify.create("downloadify",{filename:function(){return Wt},data:function(){var e=Ae(),t=et(e);return t},onComplete:function(){alert("Your file has been saved.")},onCancel:function(){alert("File save has been cancelled.")},onError:function(){alert("File save failed!")},transparent:!1,swf:Cn+"/downloadify.swf",downloadImage:e,width:t,height:t,append:!1}),ie(),mn=!0}}function ce(e,t){console.log(e+" Line: "+t.line+" Start: "+t.start+" Time: "+t.time+" String: "+t.string+" Size: "+t.size+" Pitch: "+t.pitches.join(",")+" Voice: "+t.voice+" Staff: "+t.staff+" Grace: "+t.grace)}function se(){for(var e=0;e<nn.length;e++){var t=nn[e];t.undone_fingerings=[]}$t=[]}function le(e,t){if("note"!=e[t.type]&&"grace"!=e[t.type])return{};if(this.line=-1,this.grace=!1,this.anno_start=t.istart,this.size=0,this.pitches=[],this.start=-1,this.end=-1,this.starts=[],this.stops=[],"note"===e[t.type]){this.size=t.notes.length;for(var n=0;n<this.size;n++)this.pitches.push(t.notes[n].pit);this.pitches.sort(function(e,t){return parseInt(e)-parseInt(t)}),this.start=t.istart,this.end=t.iend}else{this.grace=!0,this.start=t.extra.istart,this.size=1;var r=t.extra;if(!r.notes)return alert("Who turned off the notes?!"),{};for(;;){if(r.notes.length>1&&alert('Chords not supported in a grace "note."'),this.starts.push(r.istart),this.stops.push(r.iend),this.pitches.push(r.notes[0].pit),!r.next){this.end=r.iend;break}r=r.next,this.size++}}return this.istart=t.istart,this.time=t.time,this.string=Ht.substring(this.start,this.end),this.voice=t.v,this.staff=t.st,this.prior_fingerings=[],this.undone_fingerings=[],this.set_fingering=function(e){se(),this.fingering&&this.prior_fingerings.push(this.fingering),this.fingering=e,Gt.push(this)},this.undo_fingering_change=function(){this.prior_fingerings.length>0&&(this.undone_fingerings.push(this.fingering),this.fingering=this.prior_fingerings.pop()),$t.push(this)},this.redo_fingering_change=function(){this.undone_fingerings.length>0&&(this.fingering&&this.prior_fingerings.push(this.fingering),this.fingering=this.undone_fingerings.pop()),Gt.push(this)},this.get_fingering=function(){return this.fingering?this.fingering:void 0},this}function ue(){var e=8.5;1!==Xt&&(e*=Xt);var t='width="'+e+'in"';return t}function de(){this.read_file=function(e){return""},this.errmsg=function(e,t,n){var r=document.getElementById(Yn);t?r.innerHTML+='<b onclick="gotoabc('+t+","+n+')" style="cursor: pointer; display: inline-block">'+e+"</b><br/>\n":r.innerHTML+=e+"<br/>\n"},this.img_out=function(e){var t=/<svg /;e.match(t)&&tn++,Mt+=e},this.anno_start=function(e,t,n,r,i,a,o){!sn&&t in an?an[t].line=tn:"grace"===e&&console.log(e+" ANNO_START start: "+t+" stop: "+n),dn.push([t,n]),Rt.out_svg('<g class="e_'+t+'">\n')},this.anno_stop=function(e,t,n,r,i,a,o){"grace"===e&&console.log(e+" ANNO_STOP start: "+t+" stop: "+n),Rt.out_svg("</g>\n"),Rt.out_svg('<rect class="abcr _'+t+'" x="'),Rt.out_sxsy(r,'" y="',i),Rt.out_svg('" width="'+a.toFixed(2)+'" height="'+o.toFixed(2)+'"/>\n')},this.get_abcmodel=function(e,t,n){if(!sn){console.log(n);for(var r=0;r<t.length;r++){console.log("Voice: "+r);var i=t[r].st;un[r]=i}for(var a=e;a;){var o=new le(n,a);o.istart&&(nn.push(o),an[o.istart]=o,o.staff in ln||(ln[o.staff]={}),o.time in ln[o.staff]||(ln[o.staff][o.time]=[]),ln[o.staff][o.time].push(o)),a=a.ts_next}}},this.page_format=!1,this.imagesize=ue()}function fe(e,t){var n=parseInt(e.time)-parseInt(t.time);return 0!==n?n:(e.grace&&t.grace&&alert("Conflicting grace notes."),e.grace?-1:t.grace?1:e.pitches[e.pitches.length-1]<t.pitches[0]?-1:e.pitches[0]>t.pitches[t.pitches.length-1]?1:e.voice<t.voice?(console.log("NOTES SORTED BY VOICE!"),-1):1)}function pe(){for(var e,t,n,r=0;r<nn.length;r++)e=nn[r],t=e.line,n=e.staff,t in rn||(rn[t]=[],rn[t][0]=[],rn[t][1]=[]),rn[t][n].push(e);for(t=0;t<rn.length;t++)for(n=0;2>n;n++){var i=rn[t][n];i.sort(fe)}var a,o;for(n=0;2>n;n++)for(t=0;t<rn.length;t++){var i=rn[t][n];for(r=0;r<i.length;r++)a=i[r],o?(o.next_note=a,a.prior_note=o,o=a):(o=a,a.prior_note=void 0)}a.next_note=void 0}function ge(){var e;for(e in an)an.hasOwnProperty(e)&&cn.push(e);cn.sort(function(e,t){return parseInt(e)-parseInt(t)})}function he(e){var t="$1";return e.match(Bn)&&(t="$1"),e.match(xn)&&(t="$2"),t}function ve(e){var t="^";return/^</.test(e)&&(t="_"),t}function me(e,t){for(var n=he("<"),r=he(">"),i=e.replace(/[\)\(]/g,""),a=B(wn,i),o="",c=0;c<a.length;c++)a[c]=a[c].replace(xn,n),a[c]=a[c].replace(Bn,r),o+=a[c];o+='"';var s=ve(i);return o='"'+s+o}function ye(e,t,n){for(var r=!1,i=he("<"),a=he(">"),o=[],c=0;c<e.length;c++){var s="",l="x";if(e[c]&&"x"!==e[c])r=!0,l=e[c];else{if(!n)break;if(!e[c]||e[c]&&"x"===e[c])continue}if(l.match(/^\(/))s=me(l,t);else{var u=ve(l);l=l.replace(xn,i),l=l.replace(Bn,a),s='"'+u+l+'"'}o.unshift(s)}var d="";return r&&(d=o.join("")),d}function be(e){var t=e.fingering;if("x"===t)return"";t=t.replace(kn,"");var n=B(wn,t),r=ye(n,e.staff,!1);return r}function _e(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t.sort(function(e,t){return parseInt(e)-parseInt(t)}),t}function Ee(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r];if(!i.grace)for(var a=0;a<i.pitches.length;a++){var o=i.pitches[a];t.push(o),o in n||(n[o]=[]),n[o].push(i)}}for(r=0;r<n.length;r++)n[r].sort(fe);return n}function Ce(e){for(var t=Ee(e),n=_e(t),r=[],i=0;i<n.length;i++)for(var a=n[i],o=0;o<t[a].length;o++)for(var c=t[a][o],s=c.fingering,l=B(wn,s),u=0;u<c.pitches.length;u++){var d=c.pitches[u];d===parseInt(a)&&("x"!==l[u]?r.push(l[u]):r.push(""))}return r}function we(e){for(var t=0,n=0;n<e.length;n++)e[n].grace&&t++;return t}function Ie(e){if(e.size>1&&console.log("BIGGIE"),e.grace)return be(e);var t=ln[e.staff][e.time],n=we(t),r=t.length-n;if(2>r)return be(e);t.sort(fe);var i=t[0];if(t[0].grace&&(i=t[1]),e!==i)return"";var a=Ce(t);return ye(a,e.staff,!0)}function ke(e){for(var t=[],n=e.string,r=e.starts,i=e.stops,a=[],o=[],c=0;c<r.length;c++)a.push(r[c]-r[0]),o.push(i[c]-r[0]);for(var s=0;s<a.length;s++){var l=n.substring(a[s],o[s]);t.push(l)}return t}function xe(e){var t="{",n=ke(e),r=[];e.fingering&&(r=B(wn,e.fingering));for(var i=0;i<n.length;i++){if(r[i]){var a=r[i];a=a.replace(Tn,""),t+="!"+a+"!"}t+=n[i]}return t+="}"}function Be(e){if(e.fingering)return!0;for(var t=ln[e.staff][e.time],n=0;n<t.length;n++)if(!t[n].grace&&t[n].fingering)return!0;return!1}function Te(){if(void 0!==Ot)return Ot;Ot=!1;for(var e=!1,t=!1,n=Ht.split("\n"),r=0;r<n.length;r++){var i=n[r];if(i.match(/^%%setfont-1/)&&(e=!0),i.match(/^%%setfont-2/)&&(t=!0),e&&t){Ot=!0;break}}return Ot}function De(){if(void 0!==Pt)return Pt;Pt=!1;for(var e=0;e<cn.length;e++){var t=cn[e],n=an[t];if(n.grace){Pt=!0;break}}return Pt}function Ae(){var e="";Te()||(e+=ar+"\n",De()&&(e+=or+"\n"));for(var t=0,n=0;n<cn.length;n++){var r=cn[n],i=an[r],a="";if(i.grace){if(a=Ht.substring(parseInt(t),parseInt(i.start-1)),t=i.end+1,e+=a,i.fingered_start=e.length+i.anno_start-i.start+1,i.fingering&&"x"!==i.fingering){var o=B(wn,i.fingering);i.fingered_start+=3*o.length}e+=xe(i)}else{var c=parseInt(i.start),s=parseInt(i.end);a=Ht.substring(parseInt(t),c),e+=a,t=s,Be(i)&&(e+=Ie(i)),i.fingered_start=e.length,e+=i.string}on[i.fingered_start]=i}return e+=Ht.substring(t)}function Se(){fn++,console.log("RERENDERING NUMBER "+fn);var e=(new Date).getTime(),t=document.getElementById(jn),n=document.getElementById(Yn),r=new de;Rt=new Abc(r);var i=Ae(),a=(new Date).getTime(),o=a-e;console.log("MY LAG: "+o),document.getElementById(zn).value=i,e=(new Date).getTime(),Mt="",Rt.tosvg("edit",'%%bgcolor white\n%%beginsvg\n<style type="text/css">\n	rect.abcr {fill:#a08000; fill-opacity:0}\n	rect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'),tn=0,n.innerHTML="",dn=[];try{Rt.tosvg(Wt,document.getElementById(zn).value)}catch(c){return void alert(c.message+"\nabc2svg tosvg bug - stack:\n"+c.stack)}try{t.innerHTML=Mt}catch(c){return void alert(c.message+"\nabc2svg image bug - abort:\n"+c.stack)}setTimeout(function(){for(var e,t=document.getElementsByClassName("abcr"),n=t.length;--n>=0;)e=t[n],e.onclick=function(){ct(this)},e.ondblclick=function(){ft(this)}},300),a=(new Date).getTime(),o=a-e,console.log("LIB LAG: "+o),V()}function qe(e){return null==e.which?String.fromCharCode(e.keyCode):0!=e.which&&0!=e.charCode?String.fromCharCode(e.which):null}function Ne(e){if(console.log(String.fromCharCode(e)+" --> "+e),e===tr){Ge();var t=Ue();t.length>0&&t[0]?(zt.set_fingering(""),Se()):zt.prior_note&&(zt=zt.prior_note,zt.set_fingering(""),Se()),vt(zt)}else if(e==nr||e==ir)je(),en=[],zt.next_note&&(zt=zt.next_note);else if(e==rr)je(),en=[],zt.prior_note&&(zt=zt.prior_note);else if(e==er)dt();else if(e==Kn)lt();else{if(e!=Qn)return!1;ut()}return vt(zt),!0}function Le(e){var t=e.keyCode,n=Ne(t);return n&&e.preventDefault(),n}function Fe(e){var t=nr;switch(e){case"previous":t=rr;break;case"next":t=ir;break;case"backspace":t=tr;break;case"pencil":t=er;break;case"undo":t=Kn;break;case"redo":t=Qn}return Ne(t)}function Pe(){pn?(pn=!1,document.body.style.backgroundColor="white"):(pn=!0,document.body.style.backgroundColor="black"),vt(zt)}function Me(e){return pn?0==e.staff?"<":">":He(e.staff)}function He(e){return 0==e?">":"<"}function Re(e,t){var n=Me(t),r=e.fingering.strike.hand||n,i=r+e.fingering.strike.digit;return e.fingering.release&&(r=e.fingering.release.hand||n,i+=","+r+e.fingering.release.digit),i}function ze(e,t){var n,r,i="",a=[];if(e.first.ornaments){for(a=e.first.ornaments[0],i+="(",r=0;r<a.length;r++)n=a[r],i+=Re(n,t);i+=")"}else i+=Re(e.first,t);if(e.last&&e.last.ornaments){for(a=e.last.ornaments[0],i+="(",r=0;r<a.length;r++)n=e.last.ornaments[r],i+="/"+Re(n,t);i+=")"}else e.last&&(i+="/"+Re(e.last,t));return i}function Oe(e){for(var t="",n=0;n<zt.size;){var r=e.shift(),i=ze(r,zt);if(t+=i,n++,0===e.length)break}if(n===zt.size)return zt.set_fingering(t),!0;for(;n<zt.size;n++)t+="x";return zt.set_fingering(t),!1}function $e(e){for(var t=e.upper.score_fingerings;t.length>0;)Oe(t)&&zt.next_note&&(zt=zt.next_note);Qt&&(zt=zt.prior_note)}function Ge(){Qt=!1,Kt=[],en=[],Se(),vt(zt)}function Ue(){for(var e=zt.fingering.split(""),t=[],n=0;n<e.length;n++){var r=e[n];"x"===r?t.push(""):t.push(r)}return t}function Xe(){for(var e=Ue();e.length;){var t=e.pop();t&&Kt.unshift(t)}}function Ve(){for(var e=0;e<en.length;e++)if("("===en[e])return!0;return!1}function je(){var e=!1;en.length>0&&(Array.prototype.unshift.apply(Kt,en),Ve()||(e=!0)),en=[];for(var t=Kt.length-1;t>=0&&/[,\/\(]/.test(Kt[t]);t--)en.unshift(Kt.pop());if(0!==Kt.length){if(/[,\/]/.test(Kt[0])&&(e=!0),Qt){var n=Ue();")"===n[n.length-1]?n.pop():(alert("Something wonky with parentheses."),Ge()),Array.prototype.unshift.apply(Kt,n),Qt=!1}e?zt.prior_note?(zt=zt.prior_note,Xe()):Kt.pop():zt.fingering&&zt.fingering.match(/x/)&&Xe();for(var r=Kt.join(""),i=0,a=1;;)try{var o=Abcdf_Parser.parse(r);Qt=!1,2===a&&(Qt=!0),$e(o);break}catch(c){if(1===a?Kt.push(")"):2===a?(Kt.pop(),Kt.pop(),i++):3===a&&(a=0),0==Kt.length)break;r=Kt.join(""),a++}Kt=[],Se(),vt(zt)}}function Ye(e){clearTimeout(Jt);var t=!1;return/[\(\)\/,1-5]/.test(e)&&(Kt.push(e),t=!0),("t"===e||"T"===e)&&(je(),Pe(),t=!0),Jt=setTimeout(je,Mn),console.log("Done "+Jt),t}function Ze(e){var t=qe(e).toLowerCase();return Ye(t)}function We(e){Ft||(Ft=e)}function Je(){return 5}function Ke(){var e="% abcDidactyl v"+Je();return e}function Qe(e){var t="% abcD fingering "+e+": ";return t}function et(e){var t=[],n=[];n.push(Ke());for(var r,i=h(e),a=e.split("\n"),o="",s=!1,l=0;l<a.length;l++){var u=a[l];o?s?t.push(u):(r=qn.exec(u),r&&(s=!0)):(r=An.exec(u),r&&r[1]?o=r[1]:t.push(u))}var f=d(),g=c();if("replace"===p("output")){var v=f-1;i[v]=g}else i.push(g);for(var m,y,b,_,E,l=0;l<i.length;l++){var C=l+1;try{Abcdf_Parser.parse(i[l].sequence)}catch(w){alert("Bad abcDF parse of fingering string: "+w.message+w.stack)}m=Qe(C)+i[l].sequence,n.push(m),i[l].authority&&(y="% Authority: "+i[l].authority,i[l].authority_year&&(y+=" ("+i[l].authority_year+")"),n.push(y)),i[l].transcriber&&(b="% Transcriber: "+i[l].transcriber,n.push(b)),i[l].transcription_date&&(_="% Transcription date: "+i[l].transcription_date,n.push(_));for(var E=i[l].comments.split("\n"),I=0;I<E.length;I++)(I!==E.length-1||E[I])&&n.push("% "+E[I])}n.push("% abcDidactyl END");var k=n.join("\n"),x=t.join("\n");return k+"\n"+x}function tt(){document.body.addEventListener("keydown",Le),document.body.addEventListener("keypress",Ze)}function nt(){document.body.removeEventListener("keydown",Le),document.body.removeEventListener("keypress",Ze)}function rt(){if(!mn){var e=document.getElementById(Rn);e.align="center";var t=document.getElementById(zn);t||(t=document.createElement("div"),t.id=zn,t.style.display="none",e.appendChild(t)),t["class"]=On;var n=document.createElement($n);n.id=$n,e.appendChild(n);var r=document.createElement(Gn);r.id=Gn,e.appendChild(r);var i=document.createElement(Un);i.id=Un,e.appendChild(i);var a=document.createElement(Vn);a.id=Vn,e.appendChild(a);var o=document.createElement(jn);o.id=jn,a.appendChild(o);var c=document.createElement(Yn);c.id=Yn,a.appendChild(c);for(var s=0;7>s;s++)a.appendChild(document.createElement("br"));var l=document.createElement(Xn);l.id=Xn,e.appendChild(l)}}function it(){rt(),e(),oe(),E(),Ht=document.getElementById(zn).value,Ht&&(jt=h(Ht),v(),pt(),zt=rn[0][0][0],vt(zt),tt()),V()}function at(e){Ut||(We(e),it());var t=p("qualtrics");t&&(t.disableNextButton(),t.disablePreviousButton())}function ot(){e(),Ht=document.getElementById(zn).value,pt(),zt=rn[0][0][0],vt(zt),tt()}function ct(e){console.log("Processing note click....");var t=e.getAttribute("class");console.log("Click "+t);var n=t.split("_"),r=n[1];if(r in on){var i=on[r];ce("process_note_click",i),vt(i),zt=i}}function st(e){zt=rn[0][0][0];var t=d(),n=c();n.sequence=e;var r=a(t);I(r,n),Se(),vt(zt)}function lt(){Ge();var e=Gt.pop();e&&(e.undo_fingering_change(),zt=e,Se(),vt(zt))}function ut(){Ge();var e=$t.pop();e&&(e.redo_fingering_change(),zt=e.next_note?e.next_note:e,Se(),vt(zt))}function dt(){Ge();var e="";zt.preset_fingering&&(e+="Preset (recommended) fingering: "+zt.preset_fingering+"\n\n"),e+="Please enter a fingering string for the selected note.";var t=zt.fingering,n=window.prompt(e,t);try{if(null===n)return;var r=Abcdf_Parser.parse(n);$e(r),Se(),vt(zt)}catch(i){alert("Bad abcDF parse of fingering string: "+i.message+i.stack)}}function ft(e){console.log("Processing note double-click...."),ct(e),dt()}function pt(){var e=new de,t=document.getElementById(jn),n=document.getElementById(Yn);t.align="center",Rt=new Abc(e),Mt="",Rt.tosvg("edit",'%%bgcolor white\n%%beginsvg\n<style type="text/css">\n	rect.abcr {fill:#a08000; fill-opacity:0}\n	rect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'),n.innerHTML="",dn=[];try{Ht&&Rt.tosvg(Wt,Ht)}catch(r){return void alert(r.message+"\nabc2svg tosvg bug - stack:\n"+r.stack)}try{Ht&&(t.innerHTML=Mt,pe(),ge(),sn=!0,tn=0,k(),Se())}catch(r){return void alert(r.message+"\nabc2svg image bug - abort:\n"+r.stack)}}function gt(e,t){for(var n,r=document.getElementsByClassName(e),i=r.length;--i>=0;)n=r[i],n.setAttribute("color",t);
}function ht(e){var t,n=gn.length;for(t=0;n>t;t++)gt(gn[t],e)}function vt(e){var t=e.fingered_start;console.log("HIGHLIGHT note at "+t),0!=gn.length&&(ht("black"),gn=[]),gn.push("e_"+t),ht(pn?"blue":"red")}function mt(e){for(var t=e.split("\n"),n=0;n<t.length;n++){var r=t[n];if(/^\s*X:/.test(r)){var i=r.split(":");if(2!=i.length)return"";var a=i[1].trim();return a}}return""}function yt(e,t){var n=[];if(e.fingering)n=B(wn,e.fingering);else if(t)return"";if(t&&n.length!=e.size)return"";for(var r=e.fingering||"",i=n.length;i<e.size;i++)r+="x";return r}function bt(e,t){if(e.grace)return yt(e,t);var n=ln[e.staff][e.time],r=we(n),i=n.length-r;if(2>i)return yt(e,t);n.sort(fe);var a=n[0];if(n[0].grace&&(a=n[1]),e!==a)return"";for(var o=Ce(n),c="",s=0;s<o.length;s++)c+=o[s]?o[s]:"x";return c}function _t(e,t){for(var n=[],r=t,i=e.split(""),a=0;a<i.length;a++){var o=i[a];o.match(Tn)?o!==r&&(n.push(o),r=o):n.push(o)}return n.join("")}function Et(e,t,n){for(var r=rn[t][e],i="",a=0;a<r.length;a++){var o=r[a],c=bt(o,!1);i+=c}return i}function Ct(e,t){var n=Dn.exec(e);return n&&n[1]?n[1]:t}function wt(){for(var e="",t="",n=He(0),r=He(1),i=0;i<rn.length;i++){var a=Et(0,i);if(a&&(a=_t(a,n),n=Ct(a,n),e+=a,i<rn.length-1&&(e+="&")),rn[i][1]){var o=Et(1,i);o&&(o=_t(o,r),r=Ct(o,r),t+=o,i<rn.length-1&&(t+="&"))}}var c=e+"@"+t;return c}function It(){console.log("Print that score.");var e=window.open("","print_window");e.document.write(Mt),e.document.close(),e.focus(),e.print(),e.close()}function kt(){var e=document.getElementById(zn);e.value=Ht,ot()}function xt(){var e,t;hn?(e=Ae(),t=et(e)):t=et(Ht),window.open("data:text/vnd.abc;charset=utf-8,"+encodeURI(t),"view_window")}function Bt(){return p("include_pii")?o("authority"):""}function Tt(){return o("comments")}function Dt(){return wt()}function At(e){try{Abcdf_Parser.parse(e)}catch(t){return"Bad abcDF parse of fingering string: "+t.message+t.stack}var n=0,r=p("validate");if("complete"===r)n=e.split("x").length-1;else if("none"===r)n=0;else if("auto"===r)return"Validation of autofill is not yet implemented.";return 1===n?"One note is missing a fingering annotation.":n+" notes are missing fingering annotations."}function St(e){var t=At(e);return t?(alert(t),!1):!0}function qt(){var e=wt();return St(e)?e:""}function Nt(){return et(Ht)}function Lt(){var e=wt();if(St(e)){var t=et();return/^\s*X:/g.test(t)?/^% abcDidactyl/.test(t)?t:(alert("File is not valid abcD."),""):(alert("File is not valid abc."),"")}return""}var Ft,Pt,Mt,Ht,Rt,zt,Ot,$t=[],Gt=[],Ut=!1,Xt=1,Vt={},jt=[],Yt=void 0,Zt="",Wt="noname.abc",Jt=0,Kt=[],Qt=!1,en=[],tn=0,nn=[],rn=[],an={},on={},cn=[],sn=!1,ln={},un={},dn=[],fn=0,pn=!1,gn=[],hn=!0,vn=!1,mn=!1,yn="https://dvdrndlph.github.io/didactyl",bn=yn+"/abcde",_n=bn+"/view/abcde_help.html",En=bn+"/image",Cn=bn+"/lib/media",wn=/\(([<>]\d)+\)|[<>]\d,[<>]\d\/[<>]\d,[<>]\d|[<>]\d\/[<>]\d,[<>]\d|[<>]\d,[<>]\d\/[<>]\d|[<>]\d,[<>]\d|[<>]\d\/[<>]\d|[<>]\d|x/g,In=/\(([<>]?\d)+\)|[<>]?\d,[<>]?\d\/[<>]?\d,[<>]?\d|[<>]?\d\/[<>]?\d,[<>]?\d|[<>]?\d,[<>]?\d\/[<>]?\d|[<>]?\d,[<>]?\d|[<>]?\d\/[<>]?\d|[<>]?\d|x/g,kn=/\s/g,xn=/</g,Bn=/>/g,Tn=/[><]/g,Dn=/.*([<>])[^<>]+$/,An=/^% abcDidactyl v([\d\.]+)$/,Sn=/^% abcD fingering (\d+): ([<>1-5,\/\(\)@&x]+)$/,qn=/^% abcDidactyl END$/,Nn=/^% Authority: (.*)\s+\((\d\d\d\d)\)$/,Ln=/^% Transcriber: (.*)$/,Fn=/^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/,Pn=/^% (.*)$/,Mn=300,Hn=4e3,Rn="abcde",zn="abc_source",On="source",$n="abcde_prefs",Gn="abcde_controls",Un="abcde_metadata",Xn="abcde_keypad",Vn="abcde_rendering",jn="abcde_target",Yn="abcde_error",Zn=.1,Wn=3,Jn=.3,Kn=90,Qn=89,er=13,tr=8,nr=9,rr=37,ir=39,ar="%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11",or="%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";return AbcDE.prototype.renderUI=at,AbcDE.prototype.getXValue=mt,AbcDE.prototype.getAuthority=Bt,AbcDE.prototype.getComments=Tt,AbcDE.prototype.getEnteredCollection=Dt,AbcDE.prototype.getEnteredAbcD=Nt,AbcDE.prototype.getValidatedCollection=qt,AbcDE.prototype.getValidatedAbcD=Lt,AbcDE.prototype.setEnteredCollection=st,this}
//# sourceMappingURL=http://nlp.cs.uic.edu/didactyl/abcde/lib