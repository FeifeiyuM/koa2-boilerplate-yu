!function(e){function n(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=p.p+""+e+"."+w+".hot-update.js",n.appendChild(r)}function r(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var n=new XMLHttpRequest,r=p.p+""+w+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(t){return e(t)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)e(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)e(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(o){return void e(o)}e(null,t)}}}function t(e){function n(e,n){"ready"===_&&i("prepare"),E++,p.e(e,function(){function r(){E--,"prepare"===_&&(D[e]||s(e),0===E&&0===H&&d())}try{n.call(null,t)}finally{r()}})}var r=I[e];if(!r)return p;var t=function(n){return r.hot.active?I[n]?(I[n].parents.indexOf(e)<0&&I[n].parents.push(e),r.children.indexOf(n)<0&&r.children.push(n)):x=[e]:(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),x=[]),p(n)};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&(h?Object.defineProperty(t,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(n){p[e]=n}}}(o)):t[o]=p[o]);return h?Object.defineProperty(t,"e",{enumerable:!0,value:n}):t.e=n,t}function o(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,r){if("undefined"==typeof e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r;else n._acceptedDependencies[e]=r},decline:function(e){if("undefined"==typeof e)n._selfDeclined=!0;else if("number"==typeof e)n._declinedDependencies[e]=!0;else for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:f,status:function(e){return e?void j.push(e):_},addStatusHandler:function(e){j.push(e)},removeStatusHandler:function(e){var n=j.indexOf(e);n>=0&&j.splice(n,1)},data:m[e]};return n}function i(e){_=e;for(var n=0;n<j.length;n++)j[n].call(null,e)}function c(e){var n=+e+""===e;return n?+e:e}function a(e,n){if("idle"!==_)throw new Error("check() is only allowed in idle status");"function"==typeof e?(O=!1,n=e):(O=e,n=n||function(e){if(e)throw e}),i("check"),r(function(e,r){if(e)return n(e);if(!r)return i("idle"),void n(null,null);G={},W={},D={};for(var t=0;t<r.c.length;t++)W[r.c[t]]=!0;g=r.h,i("prepare"),y=n,b={};var o=1;s(o),"prepare"===_&&0===E&&0===H&&d()})}function l(e,n){if(W[e]&&G[e]){G[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(b[r]=n[r]);0===--H&&0===E&&d()}}function s(e){W[e]?(G[e]=!0,H++,n(e)):D[e]=!0}function d(){i("ready");var e=y;if(y=null,e)if(O)f(O,e);else{var n=[];for(var r in b)Object.prototype.hasOwnProperty.call(b,r)&&n.push(c(r));e(null,n)}}function f(n,r){function t(e){for(var n=[e],r={},t=n.slice();t.length>0;){var i=t.pop(),e=I[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var c=0;c<e.parents.length;c++){var a=e.parents[c],l=I[a];if(l.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+a);n.indexOf(a)>=0||(l.hot._acceptedDependencies[i]?(r[a]||(r[a]=[]),o(r[a],[i])):(delete r[a],n.push(a),t.push(a)))}}}return[n,r]}function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==_)throw new Error("apply() is only allowed in ready status");"function"==typeof n?(r=n,n={}):n&&"object"==typeof n?r=r||function(e){if(e)throw e}:(n={},r=r||function(e){if(e)throw e});var a={},l=[],s={};for(var d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var f=c(d),u=t(f);if(!u){if(n.ignoreUnaccepted)continue;return i("abort"),r(new Error("Aborted because "+f+" is not accepted"))}if(u instanceof Error)return i("abort"),r(u);s[f]=b[f],o(l,u[0]);for(var f in u[1])Object.prototype.hasOwnProperty.call(u[1],f)&&(a[f]||(a[f]=[]),o(a[f],u[1][f]))}for(var h=[],v=0;v<l.length;v++){var f=l[v];I[f]&&I[f].hot._selfAccepted&&h.push({module:f,errorHandler:I[f].hot._selfAccepted})}i("dispose");for(var y=l.slice();y.length>0;){var f=y.pop(),O=I[f];if(O){for(var j={},H=O.hot._disposeHandlers,E=0;E<H.length;E++){var D=H[E];D(j)}m[f]=j,O.hot.active=!1,delete I[f];for(var E=0;E<O.children.length;E++){var G=I[O.children[E]];if(G){var W=G.parents.indexOf(f);W>=0&&G.parents.splice(W,1)}}}}for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f))for(var O=I[f],N=a[f],E=0;E<N.length;E++){var V=N[E],W=O.children.indexOf(V);W>=0&&O.children.splice(W,1)}i("apply"),w=g;for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(e[f]=s[f]);var A=null;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){for(var O=I[f],N=a[f],J=[],v=0;v<N.length;v++){var V=N[v],D=O.hot._acceptedDependencies[V];J.indexOf(D)>=0||J.push(D)}for(var v=0;v<J.length;v++){var D=J[v];try{D(a)}catch(P){A||(A=P)}}}for(var v=0;v<h.length;v++){var X=h[v],f=X.module;x=[f];try{p(f)}catch(P){if("function"==typeof X.errorHandler)try{X.errorHandler(P)}catch(P){A||(A=P)}else A||(A=P)}}return A?(i("fail"),r(A)):(i("idle"),void r(null,l))}function p(n){if(I[n])return I[n].exports;var r=I[n]={exports:{},id:n,loaded:!1,hot:o(n),parents:x,children:[]};return e[n].call(r.exports,r,r.exports,t(n)),r.loaded=!0,r.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){l(e,n),u&&u(e,n)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(v){}var y,b,g,O=!0,w="ea9ec28cb6311d310ddd",m={},x=[],j=[],_="idle",H=0,E=0,D={},G={},W={},I={};return p.m=e,p.c=I,p.p="",p.h=function(){return w},t(0)(0)}([function(module,exports){eval("'use strict';\n\ndocument.getElementById('test3').addEventListener('click', function (e) {\n	console.log('e: ' + e + ' es ');\n	funcTest('fuck');\n});//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy92aWV3cy93ZWJwYWNrL2luZGV4LmpzPzgzOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4ge1xyXG5cdGNvbnNvbGUubG9nKCAnZTogJyArIGUgKyAnIGVzICcgKVxyXG5cdGZ1bmNUZXN0KCdmdWNrJylcclxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB2aWV3cy93ZWJwYWNrL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=")}]);