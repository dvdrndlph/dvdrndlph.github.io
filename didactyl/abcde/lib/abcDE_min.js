/* abcDE_min.js v5.0.67 */
function AbcDE(){"use strict";function e(){zt&&clearInterval(zt),Ot="",$t="noname.abc",At=void 0,qt="",Nt=void 0,Ut=[],Pt=!1,Xt=!1,Vt=[],Lt=void 0,jt=0,Yt=[],Zt=[],Wt={},Jt={},Kt=[],Qt=!1,en={},tn={},nn=[],rn=0,Ft=void 0,on=[]}function t(e){var t,n=en[e],r=[];for(t in n)n.hasOwnProperty(t)&&r.push(t);return r.sort(function(e,t){return parseInt(e)-parseInt(t)}),r}function n(e,t){if(!e)return console.log("MISSING fingers have no hands."),"";if("x"===e)return e;for(var n=t,r=[],a=e.split(""),i=0;i<a.length;i++){var o=a[i];"<"===o||">"===o?n=o:o.match(/\d/)?r.push(n+o):r.push(o)}return r.join("")}function r(){return"undefined"==typeof Storage?!1:!0}function a(e,t){Ot||(Ot=md5(qt));var n=e+"_"+t+"_"+Ot;return n}function i(e){if(!r())return{};var t={sequence:""},n=a("sequence",e),i=localStorage.getItem(n)||"";i.match(/[^x&@]/)&&(t.sequence=i),n=a("authority",e);var o=localStorage.getItem(n)||"";t.authority=o,n=a("authority_year",e);var c=localStorage.getItem(n)||"";t.authority_year=c,n=a("transcriber",e);var l=localStorage.getItem(n)||"";t.transcriber=l,n=a("comments",e);var s=localStorage.getItem(n)||"";return t.comments=s,t}function o(e){var t=document.getElementById(e);return t.value?t.value:""}function c(){var e=new Date,t=e.getFullYear()+"-"+sprintf("%02d",e.getMonth()+1)+"-"+sprintf("%02d",e.getDate())+" "+sprintf("%02d",e.getHours())+":"+sprintf("%02d",e.getMinutes())+":"+sprintf("%02d",e.getSeconds()),n={sequence:wt(),authority:o("authority"),authority_year:o("authority_year"),transcriber:o("transcriber"),transcription_date:t,comments:o("comments")};return n}function l(e,t){var n=document.getElementById(e),r=n.value,i=a(e,t);localStorage.setItem(i,r)}function s(e){for(var t=document.getElementsByName(e),n=0;n<t.length;n++){var r=t[n];if(r.checked)return r.id}}function u(e){var t="";if("preset"===e||"output"===e||"keypad"===e||"restore"==e)t=s(e);else{var n=document.getElementById(e);t=n.value}Ht[e]=t,localStorage.setItem(e,t)}function d(){var e=document.getElementById("sequence_spinner");return e?e.value:(alert("Sequence DOM element has gone missing."),"1")}function f(){if(!r())return void clearInterval(zt);var e=document.getElementById("sequence_spinner");if(!e)return void clearInterval(zt);var t=d(),n=a("sequence",t),i=wt();localStorage.setItem(n,i),l("authority",t),l("authority_year",t),l("transcriber",t),l("comments",t)}function p(e){if(Tt&&Tt[e])return Tt[e];var t=s(e);return t?t:""}function g(){var e=p("preset"),t=1;return"last"===e&&(t=Rt.length||1),t}function v(e){for(var t,n=e.split("\n"),r=!1,a={},i=[],o="",c=0;c<n.length;c++){var l=n[c];if(!o&&(t=Cn.exec(l),t&&t[1]))o=t[1],r=!0;else if(r)if(t=wn.exec(l),t&&t[1]&&t[2])a={sequence:t[2],comments:""},i.push(a);else{if(t=In.exec(l))break;if(t=kn.exec(l),t&&t[1]){a.authority=t[1],t[2]&&(a.authority_year=t[2]);continue}if(t=xn.exec(l),t&&t[1]){a.transcriber=t[1];continue}if(t=Bn.exec(l),t&&t[1]){a.transcription_date=t[1];continue}t=Dn.exec(l),t&&t[1]&&(a.comments+=t[1]+"\n")}}return i}function m(){var e=document.getElementById("sequence_spinner");e.min=1,e.max=Rt.length||1;var t=g();e.value=t}function h(){var e=p("preset");return e&&"none"!==e?"first"===e?Rt[0]:"last"===e?Rt[Rt.length-1]:"":""}function y(e){if(e){var t=e-1;return parseInt(e)<=Rt.length?Rt[t]:""}return h()}function b(e,t){for(var n=document.getElementsByName(e),r=0;r<n.length;r++){var a=n[r];a.id===t&&(a.checked=!0)}}function E(e,t){var n=document.getElementById(e);t?n.value=t:n.value=""}function _(){b("preset",localStorage.getItem("preset")),b("output",localStorage.getItem("output")),b("restore",localStorage.getItem("restore")),b("keypad",localStorage.getItem("keypad")),E("default_authority",localStorage.getItem("default_authority")),E("default_authority_year",localStorage.getItem("default_authority_year")),E("default_transcriber",localStorage.getItem("default_transcriber"))}function C(e){E("authority",e.authority),E("authority_year",e.authority_year),E("transcriber",e.transcriber),E("comments",e.comments)}function w(){var e=d(),t=i(e),n=y(e);I(t,n)}function I(e,r){var a=r.sequence,i=!0,o=p("preset");o&&"none"!==o||(i=!1,a="");var c=!1;if(e.sequence&&e.sequence!==a){var l=p("restore");c="always"===l?!0:"never"===l?!1:confirm("You have previously entered data for this piece. Do you want to restore them?"),c&&(a=e.sequence)}if(c?C(e):i&&C(r),a){console.log("Presetting fingers: ",a);var s,u,d,g={},v=a.split("@");for(s=0;s<v.length;s++){var m=Fe(s);g=[];var h=v[s].split("&");for(u=0;u<h.length;u++){var y=h[u];g=g.concat(k(mn,y))}for(var b=t(s),E=0;E<b.length;E++){var _=b[E],w=en[s][_];if(w.sort(se),w[0].grace){w[0].fingering="";for(var I=0;I<w[0].size;I++)d=g.shift(),d||(console.log("Preset fingering MISSING for note:"),ie("preset grace note",w[0])),d=n(d,m),m=mt(d,m),w[0].fingering+=d}var x=ye(w),B=he(x);for(I=0;I<B.length;I++)for(var D=B[I],T=0;T<x[D].length;T++){var A=x[D][T];A.fingering=""}for(I=0;I<B.length;I++)for(var D=B[I],T=0;T<x[D].length;T++){var A=x[D][T];A.grace||(A.fingering||(A.fingering=""),d=g.shift(),d||(console.log("Preset fingering MISSING for note:"),ie("preset pit note",A)),d=n(d,m),m=mt(d,m),A.fingering+=d)}}}}zt=setInterval(function(){f()},An)}function k(e,t){if(!t)return[];for(var n,r=[],a=0,i=0;null!=(n=e.exec(t));){i=e.lastIndex;var o;o=a===i?t.substr(a):t.substr(a,i-a),r.push(o),a=e.lastIndex}var c=t.substr(a);if(c){var l="";r.length>0&&(l=r.pop()),l+=c,r.push(l)}return r}function x(){var e=window.open(fn,"_blank");e.focus()}function B(e){Ke();var t=document.getElementById("modal_wrapper"),n=document.getElementById("modal_window");t.className="overlay";var r=n.offsetHeight-document.documentElement.clientHeight;r>0&&(n.style.maxHeight=parseInt(window.getComputedStyle(n).height)-r+"px"),n.style.marginTop=-n.offsetHeight/2+"px",n.style.marginLeft=-n.offsetWidth/2+"px",e.preventDefault?e.preventDefault():e.returnValue=!1}function D(){Mt>Gn&&(Mt-=On,De())}function T(){$n>Mt&&(Mt+=On,De())}function A(e){u("preset"),u("output"),u("restore"),u("keypad"),u("default_authority"),u("default_authority_year"),u("default_transcriber");var t=document.getElementById("modal_wrapper");t.className="",U(),Je(),e.preventDefault?e.preventDefault():e.returnValue=!1}function S(e){var t=e.slice(0,100);if(-1==t.indexOf("<?xml"))return!1;var n=t.match(/encoding="([^"]+)"/),r="utf-8";return n&&2==n.length&&(r=n[1]),r}function q(e){var t={},n=$.parseXML(e),r=vertaal(n,t),a=r[0],i=r[1];return i&&console.log("xml2abc ERROR: "+i),a||alert("Unable to open MusicXML file: "+i),a}function N(e,t){var n=new XMLHttpRequest;return"withCredentials"in n?n.open(e,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest,n.open(e,t)):n=null,n}function L(e){var t=e.split(".");return t[t.length-1]}function F(e){var t="";try{var n=new JSZip(e);$.each(n.files,function(e,n){t=n.asText()})}catch(r){return alert("Could not open compressed MusicXML file: "+r.message),""}var a=S(t);return"UTF-8"!==a?(alert("Input mxl is not UTF-8 encoded. Cannot open."),""):t=q(t)}function P(e){var t=L(e),n='The server hosting file does not allow access from this domain. Please download the file outside abcDE and then "Choose file" to work with it.',r=N("GET",e);return r?("mxl"===t&&(r.responseType="arraybuffer"),r.onload=function(){console.log("File has been retrieved.");var e="";if("mxl"===t){if(e=F(r.response),!e)return}else{e=r.responseText;var n=S(e);if(n){if(!/^utf/i.test(n))return void alert("Input xml is not UTF-8 encoded. Cannot open.");e=q(e)}}e&&(document.getElementById(qn).value=e,et())},r.onerror=function(){alert(n)},void r.send()):void alert(n)}function M(){var e="Please enter URL for abc file to open.",t=un+"/abc/OpenWTC/pf02.abc",n=window.prompt(e,t);null!==n&&P(n)}function H(e){var t=new FileReader,n="";t.onload=function(e){try{var t=new JSZip(e.target.result);$.each(t.files,function(e,t){n=t.asText()})}catch(e){return void alert("Could not open compressed MusicXML file: "+e.message)}var r=S(n);return"UTF-8"!==r?void alert("Input xml is not UTF-8 encoded. Cannot open."):(n=q(n),document.getElementById(qn).value=n,et(),void 0)},t.readAsArrayBuffer(e)}function R(){var e=document.getElementById("file_input"),t=e.files;if(!t.length)return void alert("Please select a valid abc file.");var n=t[0],r=L(n.name);if("mxl"===r)return void H(n);var a=!1,i=new FileReader;i.onload=function(e){var t=S(i.result),r=new FileReader;t?a=!0:t="UTF-8",r.onload=function(e){var t="";t=a?q(r.result):e.target.result,document.getElementById(qn).value=t,et()},r.readAsText(n,t)},i.readAsText(n,"UTF-8")}function z(){cn=cn?!1:!0}function O(){ln?(ln=!1,Je()):(ln=!0,Ke()),X()}function G(e,t){for(var n=e.children,r=0;r<n.length;r++)n[r].style.display=t}function U(){var e=document.getElementById(Mn),t=p("keypad");if("show"===t)G(e,"block"),e.style.display="block";else{G(e,"none");var n=p("qualtrics");if(n){var r=document.getElementById("q_next");r.style.display="block";var a=document.getElementById("q_back");a.style.display="block"}else e.style.display="none"}}function X(){var e=document.getElementById(Pn);ln?e.style.display="block":e.style.display="none"}function V(e){var t=e.keyCode||e.which;t=String.fromCharCode(t);var n=/[0-9]/;n.test(t)||(e.returnValue=!1,e.preventDefault&&e.preventDefault())}function j(e,t,n,r,a,i){var o=document.createElement("input");o.type="text",o["class"]=r,o.id=t,a&&(o.onkeypress=a),"year"===r&&(o.size="4");var c=document.createElement("label");c.htmlFor=t,c.appendChild(document.createTextNode(n)),e.appendChild(c),e.appendChild(o),i&&e.appendChild(document.createElement("br"))}function Y(e,t,n,r,a){var i=document.createElement("textarea");i["class"]=r,i.id=t,i.rows=a;var o=document.createElement("label");o.htmlFor=t,o.appendChild(document.createTextNode(n)),e.appendChild(o),e.appendChild(i)}function Z(e,t,n){var r=document.createElement("label");r["class"]=n;var a=document.createTextNode(t);r.appendChild(a),e.appendChild(r)}function W(e,t,n,r,a,i,o){var c=document.createElement("div");c["class"]="radio_div",Z(e,t,"prompt");for(var l=0;l<r.length;l++){var s=document.createElement("input");s.type="radio",s.id=r[l],s.id===i&&(s.checked=!0),s.name=n,c.appendChild(s),Z(c,a[l],"radio_label");var u=document.createElement("span");u.innerHTML="&nbsp;&nbsp",c.appendChild(u)}e.appendChild(c),o&&e.appendChild(document.createElement("br"))}function J(){var e=document.getElementById(Ln),t=document.createElement("div");t.id="modal_wrapper",e.appendChild(t);var n=document.createElement("div");n.id="modal_window",t.appendChild(n);var r=document.createElement("div");r.style.textAlign="right";var a=document.createElement("a");a.id="modal_close",a.href="#",a.innerHTML="Close <b>X</b>",r.appendChild(a),a.addEventListener("click",A,!1),n.appendChild(r);var i=document.createElement("h3");i.innerText="Preferences",n.appendChild(i);var o="restore",c=["always","never","ask"],l=["Always","Never","Ask"];W(n,"Restore Data",o,c,l,"ask",!0);var o="output",c=["append","replace"],l=["Append","Replace"];W(n,"Output",o,c,l,"append",!0),o="preset";var c=["first","last","none"],l=["First","Last","None"];W(n,"Preset",o,c,l,"first",!0),o="keypad";var c=["show","hide"],l=["Show","Hide"],s="hide",u="ontouchstart"in window;u&&(s="show"),W(n,"Keypad",o,c,l,s,!0),j(n,"default_authority","Default Authority","name",void 0,!0),j(n,"default_authority_year","Year","year",V,!0),j(n,"default_transcriber","Transcriber Name","name",void 0,!0)}function K(e,t,n){var r=document.createElement("input");r.type="button",r["class"]="keypad-button",r.id=t,r.value=n,r.onclick=function(){Ue(n)},e.appendChild(r)}function Q(e){var t=p("qualtrics"),n=dt(qt),r="abcDF_"+n,a="abcD_"+n,i=wt();Qualtrics.SurveyEngine.setEmbeddedData(r,i);var o=Bt();Qualtrics.SurveyEngine.setEmbeddedData(a,o),f();for(var c=document.getElementById(Sn);c.firstChild;)c.removeChild(c.firstChild);c.remove(),sn=!1,zt&&clearInterval(zt),t.enableNextButton(),t.enablePreviousButton(),"q_next"===e?t.clickNextButton():t.clickPreviousButton()}function ee(e,t,n){var r=document.createElement("input");r.type="button",r["class"]="keypad-button",r.id=t,r.value=n,r.onclick=function(){Q(t)},e.appendChild(r)}function te(e,t,n,r){var a=document.createElement("input");a.id=t,a["class"]="keypad_button",a.type="image",a.src=pn+"/"+n,a.alt=r,a.onclick=function(){qe(t)},e.appendChild(a)}function ne(){var e=document.getElementById(Mn),t=document.createElement("number_div"),n=document.createElement("symbol_div");e.appendChild(n),e.appendChild(document.createElement("br")),e.appendChild(t),K(t,"one","1"),K(t,"two","2"),K(t,"three","3"),K(t,"four","4"),K(t,"five","5"),te(t,"pencil","target.svg","...");var r=p("qualtrics");r&&(ee(t,"q_back","BACK"),ee(t,"q_next","NEXT")),te(n,"previous","arrow-circle-left.svg","<-"),te(n,"next","arrow-circle-right.svg","->"),K(n,"comma",","),K(n,"slash","/"),K(n,"open_paren","("),K(n,"close_paren",")"),K(n,"toggle","T"),te(n,"backspace","delete.svg","<]")}function re(){var e=document.getElementById(Pn);e["class"]="right_aligned",e.align="center",j(e,"authority","Authority","name",void 0,!1),j(e,"authority_year","Year","year",V,!0),j(e,"transcriber","Transcriber","name",void 0,!0),Y(e,"comments","Comments","comments",5,!0)}function ae(){if(!sn){J(),re(),X();var e=pn+"/download_36_x4.png",t="36",n=document.getElementById(Fn),r=document.createElement("table"),a=document.createElement("tbody"),i=document.createElement("tr");n.appendChild(r),r.appendChild(a),r.style.backgroundColor="LightGray",r.align="center",a.appendChild(i);var o=document.createElement("p");o.setAttribute("id","downloadify");var c=document.createElement("td");c.appendChild(o),i.appendChild(c);var l=document.createElement("input");l.id="sequence_spinner",l.min="1",l.max="999",l.size=3,l.type="number",l.alt="fingering_number",l.value=1,l.onchange=bt,c=document.createElement("td"),Z(c,"Sequence","sequence_prompt"),c.appendChild(l),i.appendChild(c),Tt.preset_select||(c.style.display="none");var s=document.createElement("input");s.type="image",s.src=pn+"/eye.svg",s.width=t,s.alt="View",s.onclick=Et,c=document.createElement("td"),c.appendChild(s),i.appendChild(c);var u=document.createElement("input");u.type="image",u.src=pn+"/print.svg",u.width=t,u.alt="Print...",u.onclick=yt;var c=document.createElement("td");c.appendChild(u),i.appendChild(c),c=document.createElement("td");var d=document.createElement("input");d.type="checkbox",d.value="annotated",d.checked=cn,d.id="view_annotated",d.onclick=z;var f=document.createElement("label");f.htmlFor="view_annotated",f.appendChild(document.createTextNode("Annotated")),c.appendChild(d),c.appendChild(f),i.appendChild(c);var p=document.createElement("input");p.type="image",p.src=pn+"/globe.svg",p.width=t,p.alt="URL",p.onclick=M,c=document.createElement("td"),c.appendChild(p),i.appendChild(c),Tt.url_input||(p.style.visibility="hidden");var g=document.createElement("input");g.setAttribute("type","file"),g.setAttribute("accept","text/vnd.abc"),g.onchange=R,g.setAttribute("id","file_input"),c=document.createElement("td"),c.appendChild(g),i.appendChild(c),Tt.file_input||(g.style.visibility="hidden"),c=document.createElement("td"),d=document.createElement("input"),d.type="checkbox",d.value="comment",d.checked=ln,d.id="show_metadata",d.onclick=O,f=document.createElement("label"),f.htmlFor="show_metadata",f.appendChild(document.createTextNode("Comment")),c.appendChild(d),c.appendChild(f),i.appendChild(c);var v=document.createElement("input");v.type="image",v.src=pn+"/zoom-out.svg",v.alt="Zoom In",v.width=t,v.onclick=D,c=document.createElement("td"),c.appendChild(v),i.appendChild(c);var m=document.createElement("input");m.type="image",m.src=pn+"/zoom-in.svg",m.alt="Zoom In",m.width=t,m.onclick=T,c=document.createElement("td"),c.appendChild(m),i.appendChild(c);var h=document.createElement("input");h.type="image",h.src=pn+"/cog.svg",h.alt="Preferences...",h.width=t,h.onclick=B,c=document.createElement("td"),c.appendChild(h),i.appendChild(c);var y=document.createElement("input");y.type="image",y.src=pn+"/info.svg",y.alt="Help",y.width=t,y.onclick=x,c=document.createElement("td"),c.appendChild(y),i.appendChild(c),Downloadify.create("downloadify",{filename:function(){return $t},data:function(){var e=Be(),t=We(e);return t},onComplete:function(){alert("Your file has been saved.")},onCancel:function(){alert("File save has been cancelled.")},onError:function(){alert("File save failed!")},transparent:!1,swf:gn+"/downloadify.swf",downloadImage:e,width:t,height:t,append:!1}),ne(),sn=!0}}function ie(e,t){console.log(e+" Line: "+t.line+" Start: "+t.start+" Time: "+t.time+" String: "+t.string+" Size: "+t.size+" Pitch: "+t.pitches.join(",")+" Voice: "+t.voice+" Staff: "+t.staff+" Grace: "+t.grace)}function oe(e,t){if("note"!=e[t.type]&&"grace"!=e[t.type])return{};var n={};n.line=-1,n.grace=!1,n.anno_start=t.istart;var r=0,a=[];if("note"===e[t.type]){r=t.notes.length;for(var i=0;r>i;i++)a.push(t.notes[i].pit);a.sort(function(e,t){return parseInt(e)-parseInt(t)}),n.start=t.istart,n.end=t.iend}else{var o=[],c=[];n.grace=!0,n.start=t.extra.istart,r=1;var l=t.extra;if(!l.notes)return alert("Who turned off the notes?!"),{};for(;;){if(l.notes.length>1&&alert('Chords not supported in a grace "note."'),o.push(l.istart),c.push(l.iend),a.push(l.notes[0].pit),!l.next){n.end=l.iend;break}l=l.next,r++}n.starts=o,n.stops=c}return n.time=t.time,n.size=r,n.pitches=a,n.string=qt.substring(n.start,n.end),n.voice=t.v,n.staff=t.st,Yt.push(n),Wt[t.istart]=n,n.staff in en||(en[n.staff]={}),n.time in en[n.staff]||(en[n.staff][n.time]=[]),en[n.staff][n.time].push(n),n}function ce(){var e=8.5;1!==Mt&&(e*=Mt);var t='width="'+e+'in"';return t}function le(){this.read_file=function(e){return""},this.errmsg=function(e,t,n){var r=document.getElementById(zn);t?r.innerHTML+='<b onclick="gotoabc('+t+","+n+')" style="cursor: pointer; display: inline-block">'+e+"</b><br/>\n":r.innerHTML+=e+"<br/>\n"},this.img_out=function(e){var t=/<svg /;e.match(t)&&jt++,St+=e},this.anno_start=function(e,t,n,r,a,i,o){!Qt&&t in Wt?Wt[t].line=jt:"grace"===e&&console.log(e+" ANNO_START start: "+t+" stop: "+n),nn.push([t,n]),Nt.out_svg('<g class="e_'+t+'">\n')},this.anno_stop=function(e,t,n,r,a,i,o){"grace"===e&&console.log(e+" ANNO_STOP start: "+t+" stop: "+n),Nt.out_svg("</g>\n"),Nt.out_svg('<rect class="abcr _'+t+'" x="'),Nt.out_sxsy(r,'" y="',a),Nt.out_svg('" width="'+i.toFixed(2)+'" height="'+o.toFixed(2)+'"/>\n')},this.get_abcmodel=function(e,t,n){if(!Qt){console.log(n);for(var r=0;r<t.length;r++){console.log("Voice: "+r);var a=t[r].st;tn[r]=a}for(var i=e;i;)oe(n,i),i=i.ts_next}},this.page_format=!1,this.imagesize=ce()}function se(e,t){var n=parseInt(e.time)-parseInt(t.time);return 0!==n?n:(e.grace&&t.grace&&alert("Conflicting grace notes."),e.grace?-1:t.grace?1:e.pitches[e.pitches.length-1]<t.pitches[0]?-1:e.pitches[0]>t.pitches[t.pitches.length-1]?1:e.voice<t.voice?(console.log("NOTES SORTED BY VOICE!"),-1):1)}function ue(){for(var e,t,n,r=0;r<Yt.length;r++)e=Yt[r],t=e.line,n=e.staff,t in Zt||(Zt[t]=[],Zt[t][0]=[],Zt[t][1]=[]),Zt[t][n].push(e);for(t=0;t<Zt.length;t++)for(n=0;2>n;n++){var a=Zt[t][n];a.sort(se)}var i,o;for(n=0;2>n;n++)for(t=0;t<Zt.length;t++){var a=Zt[t][n];for(r=0;r<a.length;r++)i=a[r],o?(o.next_note=i,i.prior_note=o,o=i):(o=i,i.prior_note=void 0)}i.next_note=void 0}function de(){var e;for(e in Wt)Wt.hasOwnProperty(e)&&Kt.push(e);Kt.sort(function(e,t){return parseInt(e)-parseInt(t)})}function fe(e){var t="$1";return e.match(bn)&&(t="$1"),e.match(yn)&&(t="$2"),t}function pe(e,t){for(var n=fe("<"),r=fe(">"),a=e.replace(/[\)\(]/g,""),i=k(vn,a),o=ge(t),c='"'+o,l=0;l<i.length;l++)i[l]=i[l].replace(yn,n),i[l]=i[l].replace(bn,r),c+=i[l];return c+='"'}function ge(e){var t="^";return 1==e&&(t="_"),t}function ve(e,t,n){for(var r=!1,a=fe("<"),i=fe(">"),o=[],c=0;c<e.length;c++){var l="",s="x";if(e[c]&&"x"!==e[c])r=!0,s=e[c];else if(!n)break;if(s.match(/^\(/))l=pe(s,t);else{s=s.replace(yn,a),s=s.replace(bn,i);var u=ge(t);l='"'+u+s+'"'}o.unshift(l)}var d="";return r&&(d=o.join("")),d}function me(e){var t=e.fingering;if("x"===t)return"";t=t.replace(hn,"");var n=k(vn,t),r=ve(n,e.staff,!1);return r}function he(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t.sort(function(e,t){return parseInt(e)-parseInt(t)}),t}function ye(e){for(var t=[],n={},r=0;r<e.length;r++){var a=e[r];if(!a.grace)for(var i=0;i<a.pitches.length;i++){var o=a.pitches[i];t.push(o),o in n||(n[o]=[]),n[o].push(a)}}for(r=0;r<n.length;r++)n[r].sort(se);return n}function be(e){for(var t=ye(e),n=he(t),r=[],a=0;a<n.length;a++)for(var i=n[a],o=0;o<t[i].length;o++)for(var c=t[i][o],l=c.fingering,s=k(vn,l),u=0;u<c.pitches.length;u++){var d=c.pitches[u];d===parseInt(i)&&("x"!==s[u]?r.push(s[u]):r.push(""))}return r}function Ee(e){for(var t=0,n=0;n<e.length;n++)e[n].grace&&t++;return t}function _e(e){if(e.size>1&&console.log("BIGGIE"),e.grace)return me(e);var t=en[e.staff][e.time],n=Ee(t),r=t.length-n;if(2>r)return me(e);t.sort(se);var a=t[0];if(t[0].grace&&(a=t[1]),e!==a)return"";var i=be(t);return ve(i,e.staff,!0)}function Ce(e){for(var t=[],n=e.string,r=e.starts,a=e.stops,i=[],o=[],c=0;c<r.length;c++)i.push(r[c]-r[0]),o.push(a[c]-r[0]);for(var l=0;l<i.length;l++){var s=n.substring(i[l],o[l]);t.push(s)}return t}function we(e){var t="{",n=Ce(e),r=[];e.fingering&&(r=k(vn,e.fingering));for(var a=0;a<n.length;a++){if(r[a]){var i=r[a];i=i.replace(En,""),t+="!"+i+"!"}t+=n[a]}return t+="}"}function Ie(e){if(e.fingering)return!0;for(var t=en[e.staff][e.time],n=0;n<t.length;n++)if(!t[n].grace&&t[n].fingering)return!0;return!1}function ke(){if(void 0!==Ft)return Ft;Ft=!1;for(var e=!1,t=!1,n=qt.split("\n"),r=0;r<n.length;r++){var a=n[r];if(a.match(/^%%setfont-1/)&&(e=!0),a.match(/^%%setfont-2/)&&(t=!0),e&&t){Ft=!0;break}}return Ft}function xe(){if(void 0!==At)return At;At=!1;for(var e=0;e<Kt.length;e++){var t=Kt[e],n=Wt[t];if(n.grace){At=!0;break}}return At}function Be(){var e="";ke()||(e+=Zn+"\n",xe()&&(e+=Wn+"\n"));for(var t=0,n=0;n<Kt.length;n++){var r=Kt[n],a=Wt[r],i="";if(a.grace){if(i=qt.substring(parseInt(t),parseInt(a.start-1)),t=a.end+1,e+=i,a.fingered_start=e.length+a.anno_start-a.start+1,a.fingering&&"x"!==a.fingering){var o=k(vn,a.fingering);a.fingered_start+=3*o.length}e+=we(a)}else{var c=parseInt(a.start),l=parseInt(a.end);i=qt.substring(parseInt(t),c),e+=i,t=l,Ie(a)&&(e+=_e(a)),a.fingered_start=e.length,e+=a.string}Jt[a.fingered_start]=a}return e+=qt.substring(t)}function De(){rn++,console.log("RERENDERING NUMBER "+rn);var e=(new Date).getTime(),t=document.getElementById(Rn),n=document.getElementById(zn),r=new le;Nt=new Abc(r);var a=Be(),i=(new Date).getTime(),o=i-e;console.log("MY LAG: "+o),document.getElementById(qn).value=a,e=(new Date).getTime(),St="",Nt.tosvg("edit",'%%bgcolor white\n%%beginsvg\n<style type="text/css">\n	rect.abcr {fill:#a08000; fill-opacity:0}\n	rect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'),jt=0,n.innerHTML="",nn=[];try{Nt.tosvg($t,document.getElementById(qn).value)}catch(c){return void alert(c.message+"\nabc2svg tosvg bug - stack:\n"+c.stack)}try{t.innerHTML=St}catch(c){return void alert(c.message+"\nabc2svg image bug - abort:\n"+c.stack)}setTimeout(function(){for(var e,t=document.getElementsByClassName("abcr"),n=t.length;--n>=0;)e=t[n],e.onclick=function(){rt(this)},e.ondblclick=function(){ot(this)}},300),i=(new Date).getTime(),o=i-e,console.log("LIB LAG: "+o),U()}function Te(e){return null==e.which?String.fromCharCode(e.keyCode):0!=e.which&&0!=e.charCode?String.fromCharCode(e.which):null}function Ae(e){if(console.log(String.fromCharCode(e)+" --> "+e),e===Xn){ze(),Vt=[];var t=Oe();t.length>0?(Lt.fingering="",De()):Lt.prior_note&&(Lt=Lt.prior_note),ut(Lt)}else if(e==Vn||e==Yn)Ge(),Vt=[],Lt.next_note&&(Lt=Lt.next_note);else if(e==jn)Ge(),Vt=[],Lt.prior_note&&(Lt=Lt.prior_note);else{if(e!=Un)return!1;it()}return ut(Lt),!0}function Se(e){var t=e.keyCode,n=Ae(t);return n&&e.preventDefault(),n}function qe(e){var t=Vn;switch(e){case"previous":t=jn;break;case"next":t=Yn;break;case"backspace":t=Xn;break;case"pencil":t=Un}return Ae(t)}function Ne(){an?(an=!1,document.body.style.backgroundColor="white"):(an=!0,document.body.style.backgroundColor="black"),ut(Lt)}function Le(e){return an?0==e.staff?"<":">":Fe(e.staff)}function Fe(e){return 0==e?">":"<"}function Pe(e,t){var n=Le(t),r=e.fingering.strike.hand||n,a=r+e.fingering.strike.digit;return e.fingering.release&&(r=e.fingering.release.hand||n,a+=","+r+e.fingering.release.digit),a}function Me(e,t){var n,r,a="",i=[];if(e.first.ornaments){for(i=e.first.ornaments[0],a+="(",r=0;r<i.length;r++)n=i[r],a+=Pe(n,t);a+=")"}else a+=Pe(e.first,t);if(e.last&&e.last.ornaments){for(i=e.last.ornaments[0],a+="(",r=0;r<i.length;r++)n=e.last.ornaments[r],a+="/"+Pe(n,t);a+=")"}else e.last&&(a+="/"+Pe(e.last,t));return a}function He(e){Lt.fingering="";for(var t=0;t<Lt.size;){var n=e.shift(),r=Me(n,Lt);if(Lt.fingering+=r,t++,0===e.length)break}if(t===Lt.size)return!0;for(;t<Lt.size;t++)Lt.fingering+="x";return!1}function Re(e){for(var t=e.upper.score_fingerings;t.length>0;)He(t)&&Lt.next_note&&(Lt=Lt.next_note);Xt&&(Lt=Lt.prior_note)}function ze(){Xt=!1,Ut=[],Vt=[],De(),ut(Lt)}function Oe(){for(var e=Lt.fingering.split(""),t=[],n=0;n<e.length;n++){var r=e[n];"x"===r?t.push(""):t.push(r)}return t}function $e(){for(var e=Oe();e.length;){var t=e.pop();t&&Ut.unshift(t)}}function Ge(){var e=!1;Vt.length>0&&(Array.prototype.unshift.apply(Ut,Vt),e=!0),Vt=[];for(var t=Ut.length-1;t>=0&&/[,\/\(]/.test(Ut[t]);t--)Vt.unshift(Ut.pop());if(0!==Ut.length){if(/[,\/]/.test(Ut[0])&&(e=!0),Xt){var n=Oe();")"===n[n.length-1]?n.pop():(alert("Something wonky with parentheses."),ze()),Array.prototype.unshift.apply(Ut,n),Xt=!1}e?Lt.prior_note?(Lt=Lt.prior_note,$e()):Ut.pop():Lt.fingering.match(/x/)&&$e();for(var r=Ut.join(""),a=0,i=1;;)try{var o=Abcdf_Parser.parse(r);Xt=!1,2===i&&(Xt=!0),Re(o);break}catch(c){if(1===i?Ut.push(")"):2===i?(Ut.pop(),Ut.pop(),a++):3===i&&(i=0),0==Ut.length)break;r=Ut.join(""),i++}Ut=[],De(),ut(Lt)}}function Ue(e){clearTimeout(Gt);var t=!1;return/[\(\)\/,1-5]/.test(e)&&(Ut.push(e),t=!0),("t"===e||"T"===e)&&(Ge(),Ne(),t=!0),Gt=setTimeout(Ge,Tn),console.log("Done "+Gt),t}function Xe(e){var t=Te(e).toLowerCase();return Ue(t)}function Ve(e){Tt||(Tt=e)}function je(){return 5}function Ye(){var e="% abcDidactyl v"+je();return e}function Ze(e){var t="% abcD fingering "+e+": ";return t}function We(e){var t=[],n=[];n.push(Ye());for(var r,a=v(e),i=e.split("\n"),o="",l=!1,s=0;s<i.length;s++){var u=i[s];o?l?t.push(u):(r=In.exec(u),r&&(l=!0)):(r=Cn.exec(u),r&&r[1]?o=r[1]:t.push(u))}var f=d(),g=c();if("replace"===p("output")){var m=f-1;a[m]=g}else a.push(g);for(var h,y,b,E,_,s=0;s<a.length;s++){var C=s+1;try{Abcdf_Parser.parse(a[s].sequence)}catch(w){alert("Bad abcDF parse of fingering string: "+w.message+w.stack)}h=Ze(C)+a[s].sequence,n.push(h),a[s].authority&&(y="% Authority: "+a[s].authority,a[s].authority_year&&(y+=" ("+a[s].authority_year+")"),n.push(y)),a[s].transcriber&&(b="% Transcriber: "+a[s].transcriber,n.push(b)),a[s].transcription_date&&(E="% Transcription date: "+a[s].transcription_date,n.push(E));for(var _=a[s].comments.split("\n"),I=0;I<_.length;I++)(I!==_.length-1||_[I])&&n.push("% "+_[I])}n.push("% abcDidactyl END");var k=n.join("\n"),x=t.join("\n");return k+"\n"+x}function Je(){document.body.addEventListener("keydown",Se),document.body.addEventListener("keypress",Xe)}function Ke(){document.body.removeEventListener("keydown",Se),document.body.removeEventListener("keypress",Xe)}function Qe(){if(!sn){var e=document.getElementById(Sn);e.align="center";var t=document.getElementById(qn);t||(t=document.createElement("div"),t.id=qn,t.style.display="none",e.appendChild(t)),t["class"]=Nn;var n=document.createElement(Ln);n.id=Ln,e.appendChild(n);var r=document.createElement(Fn);r.id=Fn,e.appendChild(r);var a=document.createElement(Pn);a.id=Pn,e.appendChild(a);var i=document.createElement(Hn);i.id=Hn,e.appendChild(i);var o=document.createElement(Rn);o.id=Rn,i.appendChild(o);var c=document.createElement(zn);c.id=zn,i.appendChild(c);for(var l=0;7>l;l++)i.appendChild(document.createElement("br"));var s=document.createElement(Mn);s.id=Mn,e.appendChild(s)}}function et(){Qe(),e(),ae(),_(),qt=document.getElementById(qn).value,qt&&(Rt=v(qt),m(),ct(),Lt=Zt[0][0][0],ut(Lt),Je()),U()}function tt(e){Pt||(Ve(e),et());var t=p("qualtrics");t&&(t.disableNextButton(),t.disablePreviousButton())}function nt(){e(),qt=document.getElementById(qn).value,ct(),Lt=Zt[0][0][0],ut(Lt),Je()}function rt(e){console.log("Processing note click....");var t=e.getAttribute("class");console.log("Click "+t);var n=t.split("_"),r=n[1];if(r in Jt){var a=Jt[r];ie("process_note_click",a),ut(a),Lt=a}}function at(e){Lt=Zt[0][0][0];var t=d(),n=c();n.sequence=e;var r=i(t);I(r,n),De(),ut(Lt)}function it(){ze();var e="Please enter abcD fingering string for the selected note.",t=Lt.fingering,n=window.prompt(e,t);try{if(null===n)return;var r=Abcdf_Parser.parse(n);Re(r),De(),ut(Lt)}catch(a){alert("Bad abcDF parse of fingering string: "+a.message+a.stack)}}function ot(e){console.log("Processing note double-click...."),rt(e),it()}function ct(){var e=new le,t=document.getElementById(Rn),n=document.getElementById(zn);t.align="center",Nt=new Abc(e),St="",Nt.tosvg("edit",'%%bgcolor white\n%%beginsvg\n<style type="text/css">\n	rect.abcr {fill:#a08000; fill-opacity:0}\n	rect.abcr:hover {fill-opacity:0.3}\n</style>\n%%endsvg\n'),n.innerHTML="",nn=[];try{qt&&Nt.tosvg($t,qt)}catch(r){return void alert(r.message+"\nabc2svg tosvg bug - stack:\n"+r.stack)}try{qt&&(t.innerHTML=St,ue(),de(),Qt=!0,jt=0,w(),De())}catch(r){return void alert(r.message+"\nabc2svg image bug - abort:\n"+r.stack)}}function lt(e,t){for(var n,r=document.getElementsByClassName(e),a=r.length;--a>=0;)n=r[a],n.setAttribute("color",t)}function st(e){var t,n=on.length;for(t=0;n>t;t++)lt(on[t],e)}function ut(e){var t=e.fingered_start;console.log("HIGHLIGHT note at "+t),0!=on.length&&(st("black"),on=[]),on.push("e_"+t),st(an?"blue":"red")}function dt(e){for(var t=e.split("\n"),n=0;n<t.length;n++){var r=t[n];if(/^\s*X:/.test(r)){var a=r.split(":");if(2!=a.length)return"";var i=a[1].trim();return i}}return""}function ft(e,t){var n=[];if(e.fingering)n=k(vn,e.fingering);else if(t)return"";if(t&&n.length!=e.size)return"";for(var r=e.fingering||"",a=n.length;a<e.size;a++)r+="x";return r}function pt(e,t){if(e.grace)return ft(e,t);var n=en[e.staff][e.time],r=Ee(n),a=n.length-r;if(2>a)return ft(e,t);n.sort(se);var i=n[0];if(n[0].grace&&(i=n[1]),e!==i)return"";for(var o=be(n),c="",l=0;l<o.length;l++)c+=o[l]?o[l]:"x";return c}function gt(e,t){for(var n=[],r=t,a=e.split(""),i=0;i<a.length;i++){var o=a[i];o.match(En)?o!==r&&(n.push(o),r=o):n.push(o)}return n.join("")}function vt(e,t,n){for(var r=Zt[t][e],a="",i=0;i<r.length;i++){var o=r[i],c=pt(o,!1);a+=c}return a}function mt(e,t){var n=_n.exec(e);return n&&n[1]?n[1]:t}function ht(){for(var e="",t="",n=Fe(0),r=Fe(1),a=0;a<Zt.length;a++){var i=vt(0,a);if(i&&(i=gt(i,n),n=mt(i,n),e+=i,a<Zt.length-1&&(e+="&")),Zt[a][1]){var o=vt(1,a);o&&(o=gt(o,r),r=mt(o,r),t+=o,a<Zt.length-1&&(t+="&"))}}var c=e+"@"+t;return c}function yt(){console.log("Print that score.");var e=window.open("","print_window");e.document.write(St),e.document.close(),e.focus(),e.print(),e.close()}function bt(){var e=document.getElementById(qn);e.value=qt,nt()}function Et(){var e,t;cn?(e=Be(),t=We(e)):t=We(qt),window.open("data:text/vnd.abc;charset=utf-8,"+encodeURI(t),"view_window")}function _t(){return p("include_pii")?o("authority"):""}function Ct(){return o("comments")}function wt(){return ht()}function It(e){try{Abcdf_Parser.parse(e)}catch(t){return"Bad abcDF parse of fingering string: "+t.message+t.stack}var n=0,r=p("validate");if("complete"===r)n=e.split("x").length-1;else if("none"===r)n=0;else if("auto"===r)return"Validation of autofill is not yet implemented.";return 1===n?"One note is missing a fingering annotation.":n+" notes are missing fingering annotations."}function kt(e){var t=It(e);return t?(alert(t),!1):!0;
}function xt(){var e=ht();return kt(e)?e:""}function Bt(){return We()}function Dt(){var e=ht();if(kt(e)){var t=We();return/^\s*X:/g.test(t)?/^% abcDidactyl/.test(t)?t:(alert("File is not valid abcD."),""):(alert("File is not valid abc."),"")}return""}var Tt,At,St,qt,Nt,Lt,Ft,Pt=!1,Mt=1,Ht={},Rt=[],zt=void 0,Ot="",$t="noname.abc",Gt=0,Ut=[],Xt=!1,Vt=[],jt=0,Yt=[],Zt=[],Wt={},Jt={},Kt=[],Qt=!1,en={},tn={},nn=[],rn=0,an=!1,on=[],cn=!0,ln=!1,sn=!1,un="https://dvdrndlph.github.io/didactyl",dn=un+"/abcde",fn=dn+"/view/abcde_help.html",pn=dn+"/image",gn=dn+"/lib/media",vn=/\(([<>]\d)+\)|[<>]\d,[<>]\d\/[<>]\d,[<>]\d|[<>]\d\/[<>]\d,[<>]\d|[<>]\d,[<>]\d\/[<>]\d|[<>]\d,[<>]\d|[<>]\d\/[<>]\d|[<>]\d|x/g,mn=/\(([<>]?\d)+\)|[<>]?\d,[<>]?\d\/[<>]?\d,[<>]?\d|[<>]?\d\/[<>]?\d,[<>]?\d|[<>]?\d,[<>]?\d\/[<>]?\d|[<>]?\d,[<>]?\d|[<>]?\d\/[<>]?\d|[<>]?\d|x/g,hn=/\s/g,yn=/</g,bn=/>/g,En=/[><]/g,_n=/.*([<>])[^<>]+$/,Cn=/^% abcDidactyl v([\d\.]+)$/,wn=/^% abcD fingering (\d+): ([<>1-5,\/\(\)@&x]+)$/,In=/^% abcDidactyl END$/,kn=/^% Authority: (.*)\s+\((\d\d\d\d)\)$/,xn=/^% Transcriber: (.*)$/,Bn=/^% Transcription date: ((\d\d\d\d\-[01]\d\-[0-3]\d)\s?([0-2]\d:[0-5]\d:[0-5]\d)?)$/,Dn=/^% (.*)$/,Tn=300,An=4e3,Sn="abcde",qn="abc_source",Nn="source",Ln="abcde_prefs",Fn="abcde_controls",Pn="abcde_metadata",Mn="abcde_keypad",Hn="abcde_rendering",Rn="abcde_target",zn="abcde_error",On=.1,$n=3,Gn=.3,Un=13,Xn=8,Vn=9,jn=37,Yn=39,Zn="%%setfont-1 Bookman 11\n%%setfont-2 Helvetica-Bold 11",Wn="%%deco 1 3 fng 8 1 1 1\n%%deco 2 3 fng 8 1 1 2\n%%deco 3 3 fng 8 1 1 3\n%%deco 4 3 fng 8 1 1 4\n%%deco 5 3 fng 8 1 1 5";return AbcDE.prototype.renderUI=tt,AbcDE.prototype.getXValue=dt,AbcDE.prototype.getAuthority=_t,AbcDE.prototype.getComments=Ct,AbcDE.prototype.getEnteredCollection=wt,AbcDE.prototype.getEnteredAbcD=Bt,AbcDE.prototype.getValidatedCollection=xt,AbcDE.prototype.getValidatedAbcD=Dt,AbcDE.prototype.setEnteredCollection=at,this}
//# sourceMappingURL=http://nlp.cs.uic.edu/didactyl/abcde/lib