!function(e){function n(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=p.p+""+e+"."+w+".hot-update.js",n.appendChild(t)}function t(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var n=new XMLHttpRequest,t=p.p+""+w+".hot-update.json";n.open("GET",t,!0),n.timeout=1e4,n.send(null)}catch(r){return e(r)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)e(new Error("Manifest request to "+t+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)e(new Error("Manifest request to "+t+" failed."));else{try{var r=JSON.parse(n.responseText)}catch(o){return void e(o)}e(null,r)}}}function r(e){function n(e,n){"ready"===_&&i("prepare"),I++,p.e(e,function(){function t(){I--,"prepare"===_&&(E[e]||s(e),0===I&&0===H&&d())}try{n.call(null,r)}finally{t()}})}var t=D[e];if(!t)return p;var r=function(n){return t.hot.active?D[n]?(D[n].parents.indexOf(e)<0&&D[n].parents.push(e),t.children.indexOf(n)<0&&t.children.push(n)):m=[e]:(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),m=[]),p(n)};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&(h?Object.defineProperty(r,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(n){p[e]=n}}}(o)):r[o]=p[o]);return h?Object.defineProperty(r,"e",{enumerable:!0,value:n}):r.e=n,r}function o(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,t){if("undefined"==typeof e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t;else n._acceptedDependencies[e]=t},decline:function(e){if("undefined"==typeof e)n._selfDeclined=!0;else if("number"==typeof e)n._declinedDependencies[e]=!0;else for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:a,apply:f,status:function(e){return e?void x.push(e):_},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var n=x.indexOf(e);n>=0&&x.splice(n,1)},data:j[e]};return n}function i(e){_=e;for(var n=0;n<x.length;n++)x[n].call(null,e)}function c(e){var n=+e+""===e;return n?+e:e}function a(e,n){if("idle"!==_)throw new Error("check() is only allowed in idle status");"function"==typeof e?(O=!1,n=e):(O=e,n=n||function(e){if(e)throw e}),i("check"),t(function(e,t){if(e)return n(e);if(!t)return i("idle"),void n(null,null);X={},Z={},E={};for(var r=0;r<t.c.length;r++)Z[t.c[r]]=!0;g=t.h,i("prepare"),y=n,b={};var o=1;s(o),"prepare"===_&&0===I&&0===H&&d()})}function l(e,n){if(Z[e]&&X[e]){X[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(b[t]=n[t]);0===--H&&0===I&&d()}}function s(e){Z[e]?(X[e]=!0,H++,n(e)):E[e]=!0}function d(){i("ready");var e=y;if(y=null,e)if(O)f(O,e);else{var n=[];for(var t in b)Object.prototype.hasOwnProperty.call(b,t)&&n.push(c(t));e(null,n)}}function f(n,t){function r(e){for(var n=[e],t={},r=n.slice();r.length>0;){var i=r.pop(),e=D[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var c=0;c<e.parents.length;c++){var a=e.parents[c],l=D[a];if(l.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+a);n.indexOf(a)>=0||(l.hot._acceptedDependencies[i]?(t[a]||(t[a]=[]),o(t[a],[i])):(delete t[a],n.push(a),r.push(a)))}}}return[n,t]}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}if("ready"!==_)throw new Error("apply() is only allowed in ready status");"function"==typeof n?(t=n,n={}):n&&"object"==typeof n?t=t||function(e){if(e)throw e}:(n={},t=t||function(e){if(e)throw e});var a={},l=[],s={};for(var d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var f=c(d),u=r(f);if(!u){if(n.ignoreUnaccepted)continue;return i("abort"),t(new Error("Aborted because "+f+" is not accepted"))}if(u instanceof Error)return i("abort"),t(u);s[f]=b[f],o(l,u[0]);for(var f in u[1])Object.prototype.hasOwnProperty.call(u[1],f)&&(a[f]||(a[f]=[]),o(a[f],u[1][f]))}for(var h=[],v=0;v<l.length;v++){var f=l[v];D[f]&&D[f].hot._selfAccepted&&h.push({module:f,errorHandler:D[f].hot._selfAccepted})}i("dispose");for(var y=l.slice();y.length>0;){var f=y.pop(),O=D[f];if(O){for(var x={},H=O.hot._disposeHandlers,I=0;I<H.length;I++){var E=H[I];E(x)}j[f]=x,O.hot.active=!1,delete D[f];for(var I=0;I<O.children.length;I++){var X=D[O.children[I]];if(X){var Z=X.parents.indexOf(f);Z>=0&&X.parents.splice(Z,1)}}}}for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f))for(var O=D[f],J=a[f],I=0;I<J.length;I++){var N=J[I],Z=O.children.indexOf(N);Z>=0&&O.children.splice(Z,1)}i("apply"),w=g;for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(e[f]=s[f]);var M=null;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){for(var O=D[f],J=a[f],V=[],v=0;v<J.length;v++){var N=J[v],E=O.hot._acceptedDependencies[N];V.indexOf(E)>=0||V.push(E)}for(var v=0;v<V.length;v++){var E=V[v];try{E(a)}catch(W){M||(M=W)}}}for(var v=0;v<h.length;v++){var P=h[v],f=P.module;m=[f];try{p(f)}catch(W){if("function"==typeof P.errorHandler)try{P.errorHandler(W)}catch(W){M||(M=W)}else M||(M=W)}}return M?(i("fail"),t(M)):(i("idle"),void t(null,l))}function p(n){if(D[n])return D[n].exports;var t=D[n]={exports:{},id:n,loaded:!1,hot:o(n),parents:m,children:[]};return e[n].call(t.exports,t,t.exports,r(n)),t.loaded=!0,t.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){l(e,n),u&&u(e,n)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(v){}var y,b,g,O=!0,w="410497d6eb7e47a82c8e",j={},m=[],x=[],_="idle",H=0,I=0,E={},X={},Z={},D={};return p.m=e,p.c=D,p.p="",p.h=function(){return w},r(0)(0)}([function(module,exports){eval("'use strict';\n\ndocument.getElementById('test3').addEventListener('click', function (e) {\n	console.log('e: ' + e + ' es ');\n	funcTest('fuck');\n});//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy92aWV3cy93ZWJwYWNrMi9pbmRleC5qcz8zNjMxIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0MycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IHtcclxuXHRjb25zb2xlLmxvZyggJ2U6ICcgKyBlICsgJyBlcyAnIClcclxuXHRmdW5jVGVzdCgnZnVjaycpXHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogdmlld3Mvd2VicGFjazIvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==")}]);