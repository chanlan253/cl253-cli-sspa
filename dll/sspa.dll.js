var sspaDll=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=196)}({196:function(t,n,e){t.exports=e},197:function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"BOOTSTRAPPING",(function(){return O})),e.d(n,"LOADING_SOURCE_CODE",(function(){return b})),e.d(n,"LOAD_ERROR",(function(){return C})),e.d(n,"MOUNTED",(function(){return S})),e.d(n,"MOUNTING",(function(){return T})),e.d(n,"NOT_BOOTSTRAPPED",(function(){return E})),e.d(n,"NOT_LOADED",(function(){return y})),e.d(n,"NOT_MOUNTED",(function(){return P})),e.d(n,"SKIP_BECAUSE_BROKEN",(function(){return D})),e.d(n,"UNMOUNTING",(function(){return N})),e.d(n,"UPDATING",(function(){return A})),e.d(n,"addErrorHandler",(function(){return v})),e.d(n,"checkActivityFunctions",(function(){return Mt})),e.d(n,"declareChildApplication",(function(){return _t})),e.d(n,"ensureJQuerySupport",(function(){return Ot})),e.d(n,"getAppNames",(function(){return Dt})),e.d(n,"getAppStatus",(function(){return Rt})),e.d(n,"getMountedApps",(function(){return Ct})),e.d(n,"mountRootParcel",(function(){return ot})),e.d(n,"navigateToUrl",(function(){return pt})),e.d(n,"registerApplication",(function(){return xt})),e.d(n,"removeErrorHandler",(function(){return g})),e.d(n,"setBootstrapMaxTime",(function(){return q})),e.d(n,"setMountMaxTime",(function(){return F})),e.d(n,"setUnloadMaxTime",(function(){return K})),e.d(n,"setUnmountMaxTime",(function(){return W})),e.d(n,"start",(function(){return Kt})),e.d(n,"triggerAppChange",(function(){return qt})),e.d(n,"unloadApplication",(function(){return Gt})),e.d(n,"unloadChildApplication",(function(){return It}));var r=Object.freeze({__proto__:null,get start(){return Kt},get ensureJQuerySupport(){return Ot},get setBootstrapMaxTime(){return q},get setMountMaxTime(){return F},get setUnmountMaxTime(){return W},get setUnloadMaxTime(){return K},get registerApplication(){return xt},get getMountedApps(){return Ct},get getAppStatus(){return Rt},get unloadApplication(){return Gt},get checkActivityFunctions(){return Mt},get getAppNames(){return Dt},get declareChildApplication(){return _t},get unloadChildApplication(){return It},get navigateToUrl(){return pt},get triggerAppChange(){return qt},get addErrorHandler(){return v},get removeErrorHandler(){return g},get mountRootParcel(){return ot},get NOT_LOADED(){return y},get LOADING_SOURCE_CODE(){return b},get NOT_BOOTSTRAPPED(){return E},get BOOTSTRAPPING(){return O},get NOT_MOUNTED(){return P},get MOUNTING(){return T},get UPDATING(){return A},get LOAD_ERROR(){return C},get MOUNTED(){return S},get UNMOUNTING(){return N},get SKIP_BECAUSE_BROKEN(){return D}}),o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).CustomEvent,i=function(){try{var t=new o("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(e,!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t,n,e){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function m(t){var n="function"==typeof Map?new Map:void 0;return(m=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return p(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}var d=[];function h(t,n){var e=w(t,n);d.length?d.forEach((function(t){return t(e)})):setTimeout((function(){throw e}))}function v(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");d.push(t)}function g(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");var n=!1;return d=d.filter((function(e){var r=e===t;return n=n||r,!r})),n}function w(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}e=t}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=Error(o+JSON.stringify(t))}catch(n){e=t}}e.appName=n.name,e.appOrParcelName=n.name;try{e.name=n.name}catch(t){}return e}var y="NOT_LOADED",b="LOADING_SOURCE_CODE",E="NOT_BOOTSTRAPPED",O="BOOTSTRAPPING",P="NOT_MOUNTED",T="MOUNTING",S="MOUNTED",A="UPDATING",N="UNMOUNTING",j="UNLOADING",C="LOAD_ERROR",D="SKIP_BECAUSE_BROKEN";function R(t){return t.status===S}function _(t){return!R(t)}function x(t){return t.status!==y&&t.status!==b&&t.status!==C}function M(t){return!x(t)}function U(t){try{return t.activeWhen(window.location)}catch(n){h(n,t),t.status=D}}function I(t){try{return!t.activeWhen(window.location)}catch(n){h(n,t),t.status=D}}function G(t){return t!==D&&(!t||t.status!==D)}function L(t){return t.status!==C||(new Date).getTime()-t.loadErrorTime>=200}function B(t){return t.name}var k={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function q(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("bootstrap max time must be a positive integer number of milliseconds");k.bootstrap={millis:t,dieOnTimeout:n}}function F(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("mount max time must be a positive integer number of milliseconds");k.mount={millis:t,dieOnTimeout:n}}function W(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unmount max time must be a positive integer number of milliseconds");k.unmount={millis:t,dieOnTimeout:n}}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unload max time must be a positive integer number of milliseconds");k.unload={millis:t,dieOnTimeout:n}}function H(t,n,e){var r=1e3;return new Promise((function(o,i){var u=!1,a=!1;function c(t){if(!u)if(!0===t)a=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!a){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout((function(){return c(o+1)}),r)}}t.then((function(t){u=!0,o(t)})).catch((function(t){u=!0,i(t)})),setTimeout((function(){return c(1)}),r),setTimeout((function(){return c(!0)}),e.millis)}))}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s({},k,{},t)}function J(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function Q(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!J(n,(function(t){return"function"!=typeof t}))));var n}function V(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise((function(r,o){!function i(u){var a=t[u](e);z(a)?a.then((function(){u===t.length-1?r():i(u+1)})).catch(o):o("".concat(n," at index ").concat(u," did not return a promise"))}(0)}))}}function z(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function X(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then((function(){return t.status!==E?t:(t.status=O,H(t.bootstrap(at(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then((function(){return t.status=P,t})).catch((function(e){if(t.status=D,n)throw w(e,t);return h(e,t),t})))}))}function Y(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then((function(){if(t.status!==S)return t;t.status=N;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n){var o=w(r,t);throw t.status=D,o}h(r,t),t.status=D}))})).then((function(){return t}));function r(){return H(t.unmount(at(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then((function(){t.status=P})).catch((function(e){if(n){var r=w(e,t);throw t.status=D,r}h(e,t),t.status=D}))}}))}var Z=!1,tt=!1;function nt(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then((function(){return t.status!==P?t:(Z||(window.dispatchEvent(new i("single-spa:before-first-mount")),Z=!0),H(t.mount(at(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then((function(){return t.status=S,tt||(window.dispatchEvent(new i("single-spa:first-mount")),tt=!0),t})).catch((function(e){return t.status=S,Y(t).then(r,r);function r(){if(n){var r=w(e,t);throw t.status=D,r}return h(e,t),t.status=D,t}})))}))}var et=0,rt={parcels:{}};function ot(){return it.apply(rt,arguments)}function it(t,n){var e=this;if(!t||"object"!==u(t)&&"function"!=typeof t)throw Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw Error("Parcel name must be a string, if provided");if("object"!==u(n))throw Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var r,o=et++,i="function"==typeof t,a=i?t:function(){return Promise.resolve(t)},c={id:o,parcels:{},status:i?b:E,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==S)throw Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return Y(c,!0).then((function(t){return c.parentName&&delete e.parcels[c.id],t})).then((function(t){return l(t),t})).catch((function(t){throw c.status=D,f(t),t}))}};e.parcels[o]=c;var s=a();if(!s||"function"!=typeof s.then)throw Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var l,f,p=(s=s.then((function(t){if(!t)throw Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(o);if(!Q(t.bootstrap))throw Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!Q(t.mount))throw Error("Parcel ".concat(n," must have a valid mount function"));if(!Q(t.unmount))throw Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!Q(t.update))throw Error("Parcel ".concat(n," provided an invalid update function"));var e=V(t.bootstrap),i=V(t.mount),u=V(t.unmount);c.status=E,c.name=n,c.bootstrap=e,c.mount=i,c.unmount=u,c.timeouts=$(t.timeouts),t.update&&(c.update=V(t.update),r.update=function(t){return c.customProps=t,ut(function(t){return Promise.resolve().then((function(){if(t.status!==S)throw Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=A,H(t.update(at(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then((function(){return t.status=S,t})).catch((function(n){var e=w(n,t);throw t.status=D,e}))}))}(c))})}))).then((function(){return X(c,!0)})),m=p.then((function(){return nt(c,!0)})),d=new Promise((function(t,n){l=t,f=n}));return r={mount:function(){return ut(Promise.resolve().then((function(){if(c.status!==P)throw Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[o]=c,nt(c)})))},unmount:function(){return ut(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:ut(s),bootstrapPromise:ut(p),mountPromise:ut(m),unmountPromise:ut(d)}}function ut(t){return t.then((function(){return null}))}function at(t){var n=s({},t.customProps,{name:t.name,mountParcel:it.bind(t),singleSpa:r});return t.unmountThisParcel&&(n.unmountSelf=t.unmountThisParcel),n}var ct=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,l(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(n,m(Error)),n}();function st(t){return Promise.resolve().then((function(){return t.status!==y&&t.status!==C?t:(t.status=b,Promise.resolve().then((function(){var e=t.loadImpl(at(t));if(!z(e))throw new ct("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then((function(e){var r;return t.loadErrorTime=null,"object"!==u(n=e)&&(r="does not export anything"),Q(n.bootstrap)||(r="does not export a bootstrap function or array of functions"),Q(n.mount)||(r="does not export a mount function or array of functions"),Q(n.unmount)||(r="does not export an unmount function or array of functions"),r?(console.error("The loading function for single-spa application '".concat(t.name,"' resolved with the following, which does not have bootstrap, mount, and unmount functions"),n),h(r,t),t.status=D,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=s({},t.devtools.overlays,{},n.devtools.overlays)),t.status=E,t.bootstrap=V(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=V(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=V(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=V(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=$(n.timeouts),t)}))})).catch((function(n){return h(n,t),n instanceof ct?t.status=D:(t.status=C,t.loadErrorTime=(new Date).getTime()),t})));var n}))}var lt={hashchange:[],popstate:[]},ft=["hashchange","popstate"];function pt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault()}var r=bt(window.location.href),o=bt(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=n}else!function(t,n){return n===t||n==="/"+t}(o.path+"?"+o.query,r.path+"?"+r.query)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor}function mt(t){var n=this;if(t){var e=t[0].type;ft.indexOf(e)>=0&&lt[e].forEach((function(e){e.apply(n,t)}))}}function dt(){Ft([],arguments)}window.addEventListener("hashchange",dt),window.addEventListener("popstate",dt);var ht=window.addEventListener,vt=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&ft.indexOf(t)>=0)||J(lt[t],(function(t){return t===n})))return ht.apply(this,arguments);lt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&ft.indexOf(t)>=0))return vt.apply(this,arguments);lt[t]=lt[t].filter((function(t){return t!==n}))};var gt=window.history.pushState;window.history.pushState=function(t){var n=gt.apply(this,arguments);return dt(yt(t)),n};var wt=window.history.replaceState;function yt(t){try{return new PopStateEvent("popstate",{state:t})}catch(e){var n=document.createEvent("PopStateEvent");return n.initPopStateEvent("popstate",!1,!1,t),n}}function bt(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,(function(t,e,o){e&&(r[n.q.name][e]=o)})),r}window.history.replaceState=function(t){var n=wt.apply(this,arguments);return dt(yt(t)),n},window.singleSpaNavigate=pt;var Et=!1;function Ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!Et){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return Pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return Pt.call(this,e,window.removeEventListener,t,n,arguments)},Et=!0}}function Pt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){ft.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var Tt={};function St(t){return Promise.resolve().then((function(){var n=Tt[t.name];return n?t.status===y?(At(t,n),t):t.status===j?n.promise.then((function(){return t})):t.status!==P?t:(t.status=j,H(t.unload(at(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then((function(){return At(t,n),t})).catch((function(e){return function(t,n,e){delete Tt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,h(e,t),t.status=D,n.reject(e)}(t,n,e),t}))):t}))}function At(t,n){delete Tt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=y,n.resolve()}function Nt(t,n,e,r){Tt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(Tt[t.name],"promise",{get:n})}var jt=[];function Ct(){return jt.filter(R).map(B)}function Dt(){return jt.map(B)}function Rt(t){var n=J(jt,(function(n){return n.name===t}));return n?n.status:null}function _t(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),xt(t,n,e)}function xt(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw Error("The first argument must be a non-empty string 'appName'");if(-1!==Dt().indexOf(t))throw Error("There is already an app declared with name ".concat(t));if("object"!==u(o)||Array.isArray(o))throw Error("customProps must be an object");if(!n)throw Error("The application or loading function is required");if(r="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw Error("The activeWhen argument must be a function");jt.push({loadErrorTime:null,name:t,loadImpl:r,activeWhen:e,status:y,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:o}),Ot(),Ft()}function Mt(t){for(var n=[],e=0;e<jt.length;e++)jt[e].activeWhen(t)&&n.push(jt[e].name);return n}function Ut(){return jt.filter(G).filter(L).filter(M).filter(U)}function It(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),Gt(t,n)}function Gt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error("unloadApplication requires a string 'appName'");var e=J(jt,(function(n){return n.name===t}));if(!e)throw Error("Could not unload application '".concat(t,"' because no such application has been registered"));var r,o=function(t){return Tt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){Nt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,Lt(e,o.resolve,o.reject)):r=new Promise((function(t,n){Nt(e,(function(){return r}),t,n),Lt(e,t,n)})),r}function Lt(t,n,e){Y(t).then(St).then((function(){n(),setTimeout((function(){Ft()}))})).catch(e)}var Bt=!1,kt=[];function qt(){return Ft()}function Ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Bt)return new Promise((function(t,e){kt.push({resolve:t,reject:e,eventArguments:n})}));Bt=!0;var e=!0;return Wt?Promise.resolve().then((function(){window.dispatchEvent(new i("single-spa:before-routing-event",u()));var n=Object.keys(Tt).map((function(t){return Tt[t].app})).filter(_).map(St),a=jt.filter(G).filter(R).filter(I).map(Y).map((function(t){return t.then(St)})).concat(n);a.length>0&&(e=!1);var c=Promise.all(a),s=Ut(),l=s.map((function(t){return st(t).then(X).then((function(t){return c.then((function(){return nt(t)}))}))}));l.length>0&&(e=!1);var f=jt.filter(G).filter(_).filter(x).filter(U).filter((function(t){return s.indexOf(t)<0})).map((function(t){return X(t).then((function(){return c})).then((function(){return nt(t)}))}));return f.length>0&&(e=!1),c.catch((function(t){throw o(),t})).then((function(){return o(),Promise.all(l.concat(f)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then((function(){return r(!1)}))}))})):Promise.resolve().then((function(){var t=Ut().map(st);return t.length>0&&(e=!1),Promise.all(t).then(r).catch((function(t){throw o(),t}))}));function r(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=Ct();n&&o(),t.forEach((function(t){return t.resolve(r)}));try{var a=e?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new i(a,u())),window.dispatchEvent(new i("single-spa:routing-event",u()))}catch(t){setTimeout((function(){throw t}))}if(Bt=!1,kt.length>0){var c=kt;kt=[],Ft(c)}return r}function o(){t.forEach((function(t){mt(t.eventArguments)})),mt(n)}function u(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var Wt=!1;function Kt(){Wt=!0,Ft()}setTimeout((function(){Wt||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"))}),5e3);var Ht={getRawAppData:function(){return[].concat(jt)},reroute:Ft,NOT_LOADED:y,toLoadPromise:st,toBootstrapPromise:X,unregisterApplication:function(t){if(!jt.find((function(n){return n.name===t})))throw Error("Cannot unregister application '".concat(t,"' because no such application has been registered"));return Gt(t).then((function(){var n=jt.findIndex((function(n){return n.name===t}));jt.splice(n,1)}))}};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ht)}.call(this,e(20))},198:function(t,n,e){var r,o,i;o=[n],void 0===(i="function"==typeof(r=function(t){"use strict";function n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(l){if("object"!==r(l))throw new Error("single-spa-react requires a configuration object");var f=function(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(o,!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(o).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}({},i,{},l);if(!f.React)throw new Error("single-spa-react must be passed opts.React");if(!f.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!f.rootComponent&&!f.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");!o&&f.React.createContext&&(t.SingleSpaContext=o=f.React.createContext());var p={bootstrap:u.bind(null,f),mount:a.bind(null,f),unmount:c.bind(null,f)};return f.parcelCanUpdate&&(p.update=s.bind(null,f)),p},t.SingleSpaContext=void 0;var o=null;t.SingleSpaContext=o;var i={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElementGetter:null,parcelCanUpdate:!0};function u(t,n){return t.rootComponent?Promise.resolve():t.loadRootComponent(n).then((function(n){t.rootComponent=n}))}function a(t,n){return new Promise((function(e,r){!t.suppressComponentDidCatchWarning&&function(t){if(!(t&&"string"==typeof t.version&&t.version.indexOf(".")>=0))return!1;var n=t.version.slice(0,t.version.indexOf("."));try{return Number(n)>=16}catch(t){return!1}}(t.React)&&(t.rootComponent.prototype?t.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application")));var i=function(t,n){return(n=n&&n.customProps?n.customProps:n).domElement?function(){return n.domElement}:n.domElementGetter?n.domElementGetter:t.domElementGetter?t.domElementGetter:function(t){var n=t.appName||t.name;if(!n)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var e="single-spa-application:".concat(n);return function(){var t=document.getElementById(e);return t||((t=document.createElement("div")).id=e,document.body.appendChild(t)),t}}(n)}(t,n);if("function"!=typeof i)throw new Error("single-spa-react: the domElementGetter for react application '".concat(n.appName||n.name,"' is not a function"));var u=t.React.createElement(t.rootComponent,n),a=o?t.React.createElement(o.Provider,{value:n},u):u,c=function(t,n){var e=t();if(!e)throw new Error("single-spa-react: domElementGetter function for application '".concat(n.appName||n.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return e}(i,n);l({elementToRender:a,domElement:c,whenFinished:function(){e(this)},opts:t}),t.domElement=c}))}function c(t,n){return Promise.resolve().then((function(){t.ReactDOM.unmountComponentAtNode(t.domElement)}))}function s(t,n){return new Promise((function(e,r){var i=t.React.createElement(t.rootComponent,n);l({elementToRender:o?t.React.createElement(o.Provider,{value:n},i):i,domElement:t.domElement,whenFinished:function(){e(this)},opts:t})}))}function l(t){var n=t.opts,e=t.elementToRender,r=t.domElement,o=t.whenFinished;return"createRoot"===n.renderType?n.ReactDOM.createRoot(r).render(e,o):"createBlockingRoot"===n.renderType?n.ReactDOM.createBlockingRoot(r).render(e,o):"hydrate"===n.renderType?n.ReactDOM.hydrate(e,r,o):n.ReactDOM.render(e,r,o)}})?r.apply(n,o):r)||(t.exports=i)},20:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e}});