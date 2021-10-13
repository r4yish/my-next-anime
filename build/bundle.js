var app=function(){"use strict";function t(){}function e(t){return t()}function r(){return Object.create(null)}function n(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,a=!1;function c(t,e,r,n){for(;t<e;){const o=t+(e-t>>1);r(o)<=n?t=o+1:e=o}return t}function l(t,e){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,r=new Int32Array(e.length+1),n=new Int32Array(e.length);r[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=c(1,o+1,(t=>e[r[t]].claim_order),e[t].claim_order)-1;n[t]=r[s]+1;const i=s+1;r[i]=t,o=Math.max(i,o)}const s=[],i=[];let a=e.length-1;for(let t=r[o]+1;0!=t;t=n[t-1]){for(s.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);s.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,r=0;e<i.length;e++){for(;r<s.length&&i[e].claim_order>=s[r].claim_order;)r++;const n=r<s.length?s[r]:null;t.insertBefore(i[e],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function u(t,e,r){a&&!r?l(t,e):(e.parentNode!==t||r&&e.nextSibling!==r)&&t.insertBefore(e,r||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function y(){return p(" ")}function m(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function b(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function g(t){return""===t?null:+t}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function x(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function _(t){i=t}function E(){if(!i)throw new Error("Function called outside component initialization");return i}const A=[],P=[],k=[],$=[],B=Promise.resolve();let T=!1;function U(t){k.push(t)}let j=!1;const O=new Set;function q(){if(!j){j=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];_(e),R(e.$$)}for(_(null),A.length=0;P.length;)P.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(A.length);for(;$.length;)$.pop()();T=!1,j=!1,O.clear()}}function R(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const S=new Set;let D;function L(t,e){t&&t.i&&(S.delete(t),t.i(e))}function I(t,e){const r=e.token={};function o(t,o,s,i){if(e.token!==r)return;e.resolved=i;let a=e.ctx;void 0!==s&&(a=a.slice(),a[s]=i);const c=t&&(e.current=t)(a);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,r)=>{r!==o&&t&&(D={r:0,c:[],p:D},function(t,e,r,n){if(t&&t.o){if(S.has(t))return;S.add(t),D.c.push((()=>{S.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}(t,1,1,(()=>{e.blocks[r]===t&&(e.blocks[r]=null)})),D.r||n(D.c),D=D.p)})):e.block.d(1),c.c(),L(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[o]=c),l&&q()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const r=E();if(t.then((t=>{_(r),o(e.then,1,e.value,t),_(null)}),(t=>{if(_(r),o(e.catch,2,e.error,t),_(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var s}function M(t,e){-1===t.$$.dirty[0]&&(A.push(t),T||(T=!0,B.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(s,c,l,u,d,f,p=[-1]){const y=i;_(s);const m=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:d,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(y?y.$$.context:c.context||[]),callbacks:r(),dirty:p,skip_bound:!1};let b=!1;if(m.ctx=l?l(s,c.props||{},((t,e,...r)=>{const n=r.length?r[0]:e;return m.ctx&&d(m.ctx[t],m.ctx[t]=n)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](n),b&&M(s,t)),e})):[],m.update(),b=!0,n(m.before_update),m.fragment=!!u&&u(m.ctx),c.target){if(c.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();c.intro&&L(s.$$.fragment),function(t,r,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(r,s),i||U((()=>{const r=c.map(e).filter(o);l?l.push(...r):n(r),t.$$.on_mount=[]})),u.forEach(U)}(s,c.target,c.anchor,c.customElement),a=!1,q()}_(y)}var F=new class{constructor(t="https://api.jikan.moe",e=3){this.setBaseURL(t,e)}getBaseURL(){return this.baseURL}setBaseURL(t,e){e&&(this.v=e),this.baseURL=new URL(`/v${this.v}`,t)}set version(t){this.v=t,this.baseURL.pathname=`/v${t}`}get version(){return this.v}},N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var H,G=(function(t,e){var r="undefined"!=typeof self?self:N,n=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();!function(t){!function(e){var r="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in t,i="ArrayBuffer"in t;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i&&o&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=l(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[l(t)]},d.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},d.prototype.set=function(t,e){this.map[l(t)]=u(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),h(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),h(t)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),g.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function x(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},b.call(v.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var t=new x(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];x.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new x(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function E(t,r){return new Promise((function(n,s){var i=new v(t,r);if(i.signal&&i.signal.aborted)return s(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new x(o,r))},a.onerror=function(){s(new TypeError("Network request failed"))},a.ontimeout=function(){s(new TypeError("Network request failed"))},a.onabort=function(){s(new e.DOMException("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),i.signal&&(i.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",c)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}E.polyfill=!0,t.fetch||(t.fetch=E,t.Headers=d,t.Request=v,t.Response=x),e.Headers=d,e.Request=v,e.Response=x,e.fetch=E,Object.defineProperty(e,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var o=n;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e}(H={exports:{}},H.exports),H.exports);var z=class{async send(t,e){var r=await G(this.urlBuilder(t,e)),n=await r.json();return 200!==r.status?Promise.reject(new Error(n.error)):Promise.resolve(n)}urlBuilder(t,e){var r=new URL(F.getBaseURL());return r.pathname+="/"+t.filter((t=>t)).join("/"),e&&Object.entries(e).forEach((([t,e])=>r.searchParams.append(t,e))),r.href}};var V=new class{constructor(){this.settings=F,this.request=new z}loadAnime(t,e,r){return this.request.send(["anime",t,e,r])}loadManga(t,e){return this.request.send(["manga",t,e])}loadPerson(t,e){return this.request.send(["person",t,e])}loadCharacter(t,e){return this.request.send(["character",t,e])}search(t,e,r=null,n={},o=null){return e.length<3?Promise.reject(new Error(`The given query must be of minimum 3 letters! Given query '${e}' has only ${e.length} letters.`)):(n.q=e,r&&(n.page=r),o&&(n.limit=o),this.request.send(["search",t],n))}loadSeason(t,e){return this.request.send(["season",t,e])}loadSeasonArchive(){return this.request.send(["season","archive"])}loadSeasonLater(){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["season","later"])}loadSchedule(t){return this.request.send(["schedule",t])}loadTop(t,e,r){return this.request.send(["top",t,e,r])}loadGenre(t,e,r){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["genre",t,e,r])}loadProducer(t,e){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["producer",t,e])}loadMagazine(t,e){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["magazine",t,e])}loadUser(t,e,r){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["user",t,e,r])}loadClub(t){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["club",t])}loadClubMembers(t,e){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["club",t,"members",e])}loadMeta(t,e,r){return this.request.send(["meta","requests",t,e,r])}loadStatus(){return this.request.send(["meta","status"])}raw(t,e){return Array.isArray(t)?this.request.send(t,e):Promise.reject(new Error(`The given parameter should be an array like [anime, 1] but given was ${t}`))}};function X(t,e,r){const n=t.slice();return n[12]=e[r],n}function J(t,e,r){const n=t.slice();return n[15]=e[r],n}function K(t){let e,r,n=t[18].message+"";return{c(){e=f("p"),r=p(n),x(e,"color","red")},m(t,n){u(t,e,n),l(e,r)},p(t,e){8&e&&n!==(n=t[18].message+"")&&v(r,n)},d(t){t&&h(e)}}}function W(t){let e,r,n,o,s,i,a,c,m,g,w,x,_,E,A,P,k,$,B,T,U,j,O,q,R,S,D,L=t[2].title+"",I=t[2].score+"",M=t[2].episodes+"",C=new Date(t[2].airing_start).toLocaleDateString()+"",F=t[2].genres,N=[];for(let e=0;e<F.length;e+=1)N[e]=Y(J(t,F,e));let H=t[2].producers,G=[];for(let e=0;e<H.length;e+=1)G[e]=Q(X(t,H,e));return{c(){e=f("img"),n=y(),o=f("div"),s=p(L),i=y(),a=f("div"),c=p("⭐ "),m=p(I),g=y(),w=f("div");for(let t=0;t<N.length;t+=1)N[t].c();x=y(),_=f("div"),E=p("EP : "),A=p(M),P=y(),k=f("div"),$=p("Air Date : "),B=p(C),T=y(),U=f("div"),j=p("Studio :\n\t\t\t\t\t");for(let t=0;t<G.length;t+=1)G[t].c();O=y(),q=f("div"),R=f("a"),S=p("MAL link"),b(e,"class","max-h-screen-md"),e.src!==(r=t[2].image_url)&&b(e,"src",r),b(e,"alt","cover"),b(o,"class","text-3xl my-4 text-green-200"),b(a,"class","my-4 text-2xl"),b(w,"class","my-4 "),b(_,"class","my-4"),b(U,"class","my-4 "),b(R,"href",D=t[2].url),b(q,"class","text-xl text-white")},m(t,r){u(t,e,r),u(t,n,r),u(t,o,r),l(o,s),u(t,i,r),u(t,a,r),l(a,c),l(a,m),u(t,g,r),u(t,w,r);for(let t=0;t<N.length;t+=1)N[t].m(w,null);u(t,x,r),u(t,_,r),l(_,E),l(_,A),u(t,P,r),u(t,k,r),l(k,$),l(k,B),u(t,T,r),u(t,U,r),l(U,j);for(let t=0;t<G.length;t+=1)G[t].m(U,null);u(t,O,r),u(t,q,r),l(q,R),l(R,S)},p(t,n){if(4&n&&e.src!==(r=t[2].image_url)&&b(e,"src",r),4&n&&L!==(L=t[2].title+"")&&v(s,L),4&n&&I!==(I=t[2].score+"")&&v(m,I),4&n){let e;for(F=t[2].genres,e=0;e<F.length;e+=1){const r=J(t,F,e);N[e]?N[e].p(r,n):(N[e]=Y(r),N[e].c(),N[e].m(w,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=F.length}if(4&n&&M!==(M=t[2].episodes+"")&&v(A,M),4&n&&C!==(C=new Date(t[2].airing_start).toLocaleDateString()+"")&&v(B,C),4&n){let e;for(H=t[2].producers,e=0;e<H.length;e+=1){const r=X(t,H,e);G[e]?G[e].p(r,n):(G[e]=Q(r),G[e].c(),G[e].m(U,null))}for(;e<G.length;e+=1)G[e].d(1);G.length=H.length}4&n&&D!==(D=t[2].url)&&b(R,"href",D)},d(t){t&&h(e),t&&h(n),t&&h(o),t&&h(i),t&&h(a),t&&h(g),t&&h(w),d(N,t),t&&h(x),t&&h(_),t&&h(P),t&&h(k),t&&h(T),t&&h(U),d(G,t),t&&h(O),t&&h(q)}}}function Y(t){let e,r=t[15].name+", ";return{c(){e=p(r)},m(t,r){u(t,e,r)},p(t,n){4&n&&r!==(r=t[15].name+", ")&&v(e,r)},d(t){t&&h(e)}}}function Q(t){let e,r=t[12].name+", ";return{c(){e=p(r)},m(t,r){u(t,e,r)},p(t,n){4&n&&r!==(r=t[12].name+", ")&&v(e,r)},d(t){t&&h(e)}}}function Z(e){let r;return{c(){r=f("div"),r.textContent="Loading"},m(t,e){u(t,r,e)},p:t,d(t){t&&h(r)}}}function tt(e){let r,o,s,i,a,c,d,v,_,E,A,P,k,$,B,T,U,j,O,q,R={ctx:e,current:null,token:null,hasCatch:!0,pending:Z,then:W,catch:K,value:11,error:18};return I(a=e[3],R),{c(){r=y(),o=f("main"),s=f("div"),i=f("div"),R.block.c(),c=y(),d=f("div"),v=f("button"),v.textContent="Random",_=y(),E=f("div"),A=f("input"),P=p("\n\t\t\t\tNSFW"),k=y(),$=f("div"),B=p("Minimum Rating\n\t\t\t\t"),T=f("input"),U=y(),j=f("div"),j.textContent="☕ Support me",b(i,"class","text-xl p-6"),b(v,"class","p-2 border-none bg-blue-800"),b(A,"class","appearance-none border-transparent w-4 h-4 bg-green-300 checked:bg-red-700 checked:border-transparent transition-all"),x(A,"transition-duration","600ms"),b(A,"type","checkbox"),b(T,"type","number"),b(T,"min","0"),b(T,"max","9"),b(T,"class","text-black p-2"),b($,"class",""),b(j,"class","bg-blue-800 p-4"),b(d,"class","absolute bottom-0 left-0 bg-gray-900 w-screen flex flex-row gap-x-5 sm:gap-x-20 items-center justify-around flex-nowrap"),b(s,"class","h-screen"),b(o,"class","text-white bg-gray-800")},m(t,n){u(t,r,n),u(t,o,n),l(o,s),l(s,i),R.block.m(i,R.anchor=null),R.mount=()=>i,R.anchor=null,l(s,c),l(s,d),l(d,v),l(d,_),l(d,E),l(E,A),A.checked=e[0],l(E,P),l(d,k),l(d,$),l($,B),l($,T),w(T,e[1]),l(d,U),l(d,j),O||(q=[m(v,"click",e[5]),m(A,"change",e[6]),m(T,"input",e[7])],O=!0)},p(t,[r]){e=t,R.ctx=e,8&r&&a!==(a=e[3])&&I(a,R)||function(t,e,r){const n=e.slice(),{resolved:o}=t;t.current===t.then&&(n[t.value]=o),t.current===t.catch&&(n[t.error]=o),t.block.p(n,r)}(R,e,r),1&r&&(A.checked=e[0]),2&r&&g(T.value)!==e[1]&&w(T,e[1])},i:t,o:t,d(t){t&&h(r),t&&h(o),R.block.d(),R.token=null,R=null,O=!1,n(q)}}}function et(t,e,r){var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,s){function i(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,a)}c((n=n.apply(t,e||[])).next())}))};const o=t=>t[Math.floor(Math.random()*t.length)];let s=!1,i=7;const a=()=>n(void 0,void 0,void 0,(function*(){let t=o(["fall","spring","winter","summer"]),e=(new Date).getFullYear(),r=Math.floor(Math.random()*(e-2017)+2016);return yield V.loadSeason(r,t)}));var c;const l=()=>n(void 0,void 0,void 0,(function*(){for(var t=yield a(),e=0;;){if(r(2,c=o(t.anime)),c.r18===s&&c.score>=i)break;(e+=1)>=100&&(t=yield a(),e=0)}}));let u=l();return[s,i,c,u,l,()=>{r(3,u=l())},function(){s=this.checked,r(0,s)},function(){i=g(this.value),r(1,i)}]}return new class extends class{$destroy(){!function(t,e){const r=t.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,et,tt,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map