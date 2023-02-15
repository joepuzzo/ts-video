function nd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gn={},ld={get exports(){return Gn},set exports(e){Gn=e}},xl={},C={},od={get exports(){return C},set exports(e){C=e}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),id=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),hd=Symbol.for("react.memo"),md=Symbol.for("react.lazy"),wu=Symbol.iterator;function vd(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var Ma={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ia=Object.assign,ja={};function wn(e,t,n){this.props=e,this.context=t,this.refs=ja,this.updater=n||Ma}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $a(){}$a.prototype=wn.prototype;function Ni(e,t,n){this.props=e,this.context=t,this.refs=ja,this.updater=n||Ma}var Ei=Ni.prototype=new $a;Ei.constructor=Ni;Ia(Ei,wn.prototype);Ei.isPureReactComponent=!0;var ku=Array.isArray,Aa=Object.prototype.hasOwnProperty,Ti={current:null},Wa={key:!0,ref:!0,__self:!0,__source:!0};function Va(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Aa.call(t,r)&&!Wa.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:mr,type:e,key:o,ref:i,props:l,_owner:Ti.current}}function gd(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Di(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function yd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cu=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yd(""+e.key):t.toString(36)}function Wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case mr:case id:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Xl(i,0):r,ku(l)?(n="",e!=null&&(n=e.replace(Cu,"$&/")+"/"),Wr(l,t,n,"",function(c){return c})):l!=null&&(Di(l)&&(l=gd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Cu,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ku(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+Xl(o,u);i+=Wr(o,t,n,a,l)}else if(a=vd(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+Xl(o,u++),i+=Wr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Nr(e,t,n){if(e==null)return e;var r=[],l=0;return Wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Sd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Vr={transition:null},wd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:Ti};B.Children={map:Nr,forEach:function(e,t,n){Nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nr(e,function(){t++}),t},toArray:function(e){return Nr(e,function(t){return t})||[]},only:function(e){if(!Di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=wn;B.Fragment=ud;B.Profiler=sd;B.PureComponent=Ni;B.StrictMode=ad;B.Suspense=pd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ia({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ti.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Aa.call(t,a)&&!Wa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:mr,type:e.type,key:l,ref:o,props:r,_owner:i}};B.createContext=function(e){return e={$$typeof:dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cd,_context:e},e.Consumer=e};B.createElement=Va;B.createFactory=function(e){var t=Va.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:fd,render:e}};B.isValidElement=Di;B.lazy=function(e){return{$$typeof:md,_payload:{_status:-1,_result:e},_init:Sd}};B.memo=function(e,t){return{$$typeof:hd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return ce.current.useCallback(e,t)};B.useContext=function(e){return ce.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};B.useEffect=function(e,t){return ce.current.useEffect(e,t)};B.useId=function(){return ce.current.useId()};B.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ce.current.useMemo(e,t)};B.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};B.useRef=function(e){return ce.current.useRef(e)};B.useState=function(e){return ce.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return ce.current.useTransition()};B.version="18.2.0";(function(e){e.exports=B})(od);const Ha=rd(C),Eo=nd({__proto__:null,default:Ha},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=C,Cd=Symbol.for("react.element"),Nd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Td=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function Qa(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ed.call(t,r)&&!Dd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Cd,type:e,key:o,ref:i,props:l,_owner:Td.current}}xl.Fragment=Nd;xl.jsx=Qa;xl.jsxs=Qa;(function(e){e.exports=xl})(ld);const kn=Gn.Fragment,s=Gn.jsx,D=Gn.jsxs;var To={},el={},xd={get exports(){return el},set exports(e){el=e}},Ce={},Do={},Pd={get exports(){return Do},set exports(e){Do=e}},Ja={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var L=T.length;T.push(O);e:for(;0<L;){var J=L-1>>>1,q=T[J];if(0<l(q,O))T[J]=O,T[L]=q,L=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],L=T.pop();if(L!==O){T[0]=L;e:for(var J=0,q=T.length,kr=q>>>1;J<kr;){var Ct=2*(J+1)-1,Yl=T[Ct],Nt=Ct+1,Cr=T[Nt];if(0>l(Yl,L))Nt<q&&0>l(Cr,Yl)?(T[J]=Cr,T[Nt]=L,J=Nt):(T[J]=Yl,T[Ct]=L,J=Ct);else if(Nt<q&&0>l(Cr,L))T[J]=Cr,T[Nt]=L,J=Nt;else break e}}return O}function l(T,O){var L=T.sortIndex-O.sortIndex;return L!==0?L:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],c=[],h=1,v=null,m=3,w=!1,k=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=T)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function g(T){if(y=!1,p(T),!k)if(n(a)!==null)k=!0,Jl(E);else{var O=n(c);O!==null&&Kl(g,O.startTime-T)}}function E(T,O){k=!1,y&&(y=!1,f(R),R=-1),w=!0;var L=m;try{for(p(O),v=n(a);v!==null&&(!(v.expirationTime>O)||T&&!_e());){var J=v.callback;if(typeof J=="function"){v.callback=null,m=v.priorityLevel;var q=J(v.expirationTime<=O);O=e.unstable_now(),typeof q=="function"?v.callback=q:v===n(a)&&r(a),p(O)}else r(a);v=n(a)}if(v!==null)var kr=!0;else{var Ct=n(c);Ct!==null&&Kl(g,Ct.startTime-O),kr=!1}return kr}finally{v=null,m=L,w=!1}}var x=!1,P=null,R=-1,Q=5,z=-1;function _e(){return!(e.unstable_now()-z<Q)}function xn(){if(P!==null){var T=e.unstable_now();z=T;var O=!0;try{O=P(!0,T)}finally{O?Pn():(x=!1,P=null)}}else x=!1}var Pn;if(typeof d=="function")Pn=function(){d(xn)};else if(typeof MessageChannel<"u"){var Su=new MessageChannel,td=Su.port2;Su.port1.onmessage=xn,Pn=function(){td.postMessage(null)}}else Pn=function(){_(xn,0)};function Jl(T){P=T,x||(x=!0,Pn())}function Kl(T,O){R=_(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Jl(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var L=m;m=O;try{return T()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=m;m=T;try{return O()}finally{m=L}},e.unstable_scheduleCallback=function(T,O,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=L+q,T={id:h++,callback:O,priorityLevel:T,startTime:L,expirationTime:q,sortIndex:-1},L>J?(T.sortIndex=L,t(c,T),n(a)===null&&T===n(c)&&(y?(f(R),R=-1):y=!0,Kl(g,L-J))):(T.sortIndex=q,t(a,T),k||w||(k=!0,Jl(E))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var O=m;return function(){var L=m;m=O;try{return T.apply(this,arguments)}finally{m=L}}}})(Ja);(function(e){e.exports=Ja})(Pd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=C,we=Do;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ya=new Set,Zn={};function It(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)Ya.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nu={},Eu={};function _d(e){return xo.call(Eu,e)?!0:xo.call(Nu,e)?!1:Rd.test(e)?Eu[e]=!0:(Nu[e]=!0,!1)}function Od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,t,n,r){if(t===null||typeof t>"u"||Od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var xi=/[\-:]([a-z])/g;function Pi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xi,Pi);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xi,Pi);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xi,Pi);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ri(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ld(t,n,l,r)&&(n=null),r||l===null?_d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),_i=Symbol.for("react.strict_mode"),Po=Symbol.for("react.profiler"),Xa=Symbol.for("react.provider"),Ga=Symbol.for("react.context"),Oi=Symbol.for("react.forward_ref"),Ro=Symbol.for("react.suspense"),_o=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Za=Symbol.for("react.offscreen"),Tu=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Gl;function Mn(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Zl=!1;function ql(e,t){if(!e||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function Bd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Yt:return"Portal";case Po:return"Profiler";case _i:return"StrictMode";case Ro:return"Suspense";case _o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ga:return(e.displayName||"Context")+".Consumer";case Xa:return(e._context.displayName||"Context")+".Provider";case Oi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Li:return t=e.displayName||null,t!==null?t:Oo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return Oo(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oo(t);case 8:return t===_i?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ud(e){var t=qa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=Ud(e))}function ba(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Du(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function es(e,t){t=t.checked,t!=null&&Ri(e,"checked",t,!1)}function Bo(e,t){es(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&zo(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zo(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(In(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function ts(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ns(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ns(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,rs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fd=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function ls(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function os(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ls(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Md=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(e,t){if(t){if(Md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function Bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $o=null,an=null,sn=null;function _u(e){if(e=yr(e)){if(typeof $o!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ll(t),$o(e.stateNode,e.type,t))}}function is(e){an?sn?sn.push(e):sn=[e]:an=e}function us(){if(an){var e=an,t=sn;if(sn=an=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function as(e,t){return e(t)}function ss(){}var bl=!1;function cs(e,t,n){if(bl)return e(t,n);bl=!0;try{return as(e,t,n)}finally{bl=!1,(an!==null||sn!==null)&&(ss(),us())}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ao=!1;if(Ye)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Ao=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Ao=!1}function Id(e,t,n,r,l,o,i,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Wn=!1,nl=null,rl=!1,Wo=null,jd={onError:function(e){Wn=!0,nl=e}};function $d(e,t,n,r,l,o,i,u,a){Wn=!1,nl=null,Id.apply(jd,arguments)}function Ad(e,t,n,r,l,o,i,u,a){if($d.apply(this,arguments),Wn){if(Wn){var c=nl;Wn=!1,nl=null}else throw Error(S(198));rl||(rl=!0,Wo=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ds(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if(jt(e)!==e)throw Error(S(188))}function Wd(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ou(l),e;if(o===r)return Ou(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function fs(e){return e=Wd(e),e!==null?ps(e):null}function ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ps(e);if(t!==null)return t;e=e.sibling}return null}var hs=we.unstable_scheduleCallback,Lu=we.unstable_cancelCallback,Vd=we.unstable_shouldYield,Hd=we.unstable_requestPaint,K=we.unstable_now,Qd=we.unstable_getCurrentPriorityLevel,zi=we.unstable_ImmediatePriority,ms=we.unstable_UserBlockingPriority,ll=we.unstable_NormalPriority,Jd=we.unstable_LowPriority,vs=we.unstable_IdlePriority,Pl=null,Ae=null;function Kd(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Pl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Gd,Yd=Math.log,Xd=Math.LN2;function Gd(e){return e>>>=0,e===0?32:31-(Yd(e)/Xd|0)|0}var xr=64,Pr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=jn(u):(o&=i,o!==0&&(r=jn(o)))}else i=n&~l,i!==0?r=jn(i):o!==0&&(r=jn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function Zd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ue(o),u=1<<i,a=l[i];a===-1?(!(u&n)||u&r)&&(l[i]=Zd(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function Vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gs(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Ui(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function ys(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ss,Fi,ws,ks,Cs,Ho=!1,Rr=[],at=null,st=null,ct=null,er=new Map,tr=new Map,rt=[],ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bu(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function On(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=yr(t),t!==null&&Fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function tf(e,t,n,r,l){switch(t){case"focusin":return at=On(at,e,t,n,r,l),!0;case"dragenter":return st=On(st,e,t,n,r,l),!0;case"mouseover":return ct=On(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return er.set(o,On(er.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,tr.set(o,On(tr.get(o)||null,e,t,n,r,l)),!0}return!1}function Ns(e){var t=Pt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=ds(n),t!==null){e.blockedOn=t,Cs(e.priority,function(){ws(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=yr(n),t!==null&&Fi(t),e.blockedOn=n,!1;t.shift()}return!0}function zu(e,t,n){Hr(e)&&n.delete(t)}function nf(){Ho=!1,at!==null&&Hr(at)&&(at=null),st!==null&&Hr(st)&&(st=null),ct!==null&&Hr(ct)&&(ct=null),er.forEach(zu),tr.forEach(zu)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Ho||(Ho=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,nf)))}function nr(e){function t(l){return Ln(l,e)}if(0<Rr.length){Ln(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&Ln(at,e),st!==null&&Ln(st,e),ct!==null&&Ln(ct,e),er.forEach(t),tr.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Ns(n),n.blockedOn===null&&rt.shift()}var cn=qe.ReactCurrentBatchConfig,il=!0;function rf(e,t,n,r){var l=F,o=cn.transition;cn.transition=null;try{F=1,Mi(e,t,n,r)}finally{F=l,cn.transition=o}}function lf(e,t,n,r){var l=F,o=cn.transition;cn.transition=null;try{F=4,Mi(e,t,n,r)}finally{F=l,cn.transition=o}}function Mi(e,t,n,r){if(il){var l=Qo(e,t,n,r);if(l===null)co(e,t,r,ul,n),Bu(e,r);else if(tf(l,e,t,n,r))r.stopPropagation();else if(Bu(e,r),t&4&&-1<ef.indexOf(e)){for(;l!==null;){var o=yr(l);if(o!==null&&Ss(o),o=Qo(e,t,n,r),o===null&&co(e,t,r,ul,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else co(e,t,r,null,n)}}var ul=null;function Qo(e,t,n,r){if(ul=null,e=Bi(r),e=Pt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ds(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function Es(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qd()){case zi:return 1;case ms:return 4;case ll:case Jd:return 16;case vs:return 536870912;default:return 16}default:return 16}}var ot=null,Ii=null,Qr=null;function Ts(){if(Qr)return Qr;var e,t=Ii,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Qr=l.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Uu(){return!1}function Ne(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:Uu,this.isPropagationStopped=Uu,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=Ne(Cn),gr=V({},Cn,{view:0,detail:0}),of=Ne(gr),to,no,Bn,Rl=V({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(to=e.screenX-Bn.screenX,no=e.screenY-Bn.screenY):no=to=0,Bn=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Fu=Ne(Rl),uf=V({},Rl,{dataTransfer:0}),af=Ne(uf),sf=V({},gr,{relatedTarget:0}),ro=Ne(sf),cf=V({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),df=Ne(cf),ff=V({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pf=Ne(ff),hf=V({},Cn,{data:0}),Mu=Ne(hf),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gf[e])?!!t[e]:!1}function $i(){return yf}var Sf=V({},gr,{key:function(e){if(e.key){var t=mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wf=Ne(Sf),kf=V({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ne(kf),Cf=V({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),Nf=Ne(Cf),Ef=V({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tf=Ne(Ef),Df=V({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=Ne(Df),Pf=[9,13,27,32],Ai=Ye&&"CompositionEvent"in window,Vn=null;Ye&&"documentMode"in document&&(Vn=document.documentMode);var Rf=Ye&&"TextEvent"in window&&!Vn,Ds=Ye&&(!Ai||Vn&&8<Vn&&11>=Vn),ju=String.fromCharCode(32),$u=!1;function xs(e,t){switch(e){case"keyup":return Pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function _f(e,t){switch(e){case"compositionend":return Ps(t);case"keypress":return t.which!==32?null:($u=!0,ju);case"textInput":return e=t.data,e===ju&&$u?null:e;default:return null}}function Of(e,t){if(Gt)return e==="compositionend"||!Ai&&xs(e,t)?(e=Ts(),Qr=Ii=ot=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ds&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function Rs(e,t,n,r){is(r),t=al(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,rr=null;function Bf(e){$s(e,0)}function _l(e){var t=bt(e);if(ba(t))return e}function zf(e,t){if(e==="change")return t}var _s=!1;if(Ye){var lo;if(Ye){var oo="oninput"in document;if(!oo){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),oo=typeof Wu.oninput=="function"}lo=oo}else lo=!1;_s=lo&&(!document.documentMode||9<document.documentMode)}function Vu(){Hn&&(Hn.detachEvent("onpropertychange",Os),rr=Hn=null)}function Os(e){if(e.propertyName==="value"&&_l(rr)){var t=[];Rs(t,rr,e,Bi(e)),cs(Bf,t)}}function Uf(e,t,n){e==="focusin"?(Vu(),Hn=t,rr=n,Hn.attachEvent("onpropertychange",Os)):e==="focusout"&&Vu()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(rr)}function Mf(e,t){if(e==="click")return _l(t)}function If(e,t){if(e==="input"||e==="change")return _l(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:jf;function lr(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!xo.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function Ls(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ls(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bs(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $f(e){var t=Bs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ls(n.ownerDocument.documentElement,n)){if(r!==null&&Wi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Qu(n,o);var i=Qu(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=Ye&&"documentMode"in document&&11>=document.documentMode,Zt=null,Jo=null,Qn=null,Ko=!1;function Ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||Zt==null||Zt!==tl(r)||(r=Zt,"selectionStart"in r&&Wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&lr(Qn,r)||(Qn=r,r=al(Jo,"onSelect"),0<r.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},io={},zs={};Ye&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Ol(e){if(io[e])return io[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zs)return io[e]=t[n];return e}var Us=Ol("animationend"),Fs=Ol("animationiteration"),Ms=Ol("animationstart"),Is=Ol("transitionend"),js=new Map,Ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){js.set(e,t),It(t,[e])}for(var uo=0;uo<Ku.length;uo++){var ao=Ku[uo],Wf=ao.toLowerCase(),Vf=ao[0].toUpperCase()+ao.slice(1);St(Wf,"on"+Vf)}St(Us,"onAnimationEnd");St(Fs,"onAnimationIteration");St(Ms,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Is,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function Yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ad(r,t,void 0,e),e.currentTarget=null}function $s(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==o&&l.isPropagationStopped())break e;Yu(l,u,c),o=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,c=u.currentTarget,u=u.listener,a!==o&&l.isPropagationStopped())break e;Yu(l,u,c),o=a}}}if(rl)throw e=Wo,rl=!1,Wo=null,e}function I(e,t){var n=t[qo];n===void 0&&(n=t[qo]=new Set);var r=e+"__bubble";n.has(r)||(As(t,e,2,!1),n.add(r))}function so(e,t,n){var r=0;t&&(r|=4),As(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Lr]){e[Lr]=!0,Ya.forEach(function(n){n!=="selectionchange"&&(Hf.has(n)||so(n,!1,e),so(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,so("selectionchange",!1,t))}}function As(e,t,n,r){switch(Es(t)){case 1:var l=rf;break;case 4:l=lf;break;default:l=Mi}n=l.bind(null,t,n,e),l=void 0,!Ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function co(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Pt(u),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}u=u.parentNode}}r=r.return}cs(function(){var c=o,h=Bi(n),v=[];e:{var m=js.get(e);if(m!==void 0){var w=ji,k=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":w=wf;break;case"focusin":k="focus",w=ro;break;case"focusout":k="blur",w=ro;break;case"beforeblur":case"afterblur":w=ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Nf;break;case Us:case Fs:case Ms:w=df;break;case Is:w=Tf;break;case"scroll":w=of;break;case"wheel":w=xf;break;case"copy":case"cut":case"paste":w=pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Iu}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var d=c,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=bn(d,f),g!=null&&y.push(ir(d,g,p)))),_)break;d=d.return}0<y.length&&(m=new w(m,k,null,n,h),v.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==jo&&(k=n.relatedTarget||n.fromElement)&&(Pt(k)||k[Xe]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?Pt(k):null,k!==null&&(_=jt(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(y=Fu,g="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Iu,g="onPointerLeave",f="onPointerEnter",d="pointer"),_=w==null?m:bt(w),p=k==null?m:bt(k),m=new y(g,d+"leave",w,n,h),m.target=_,m.relatedTarget=p,g=null,Pt(h)===c&&(y=new y(f,d+"enter",k,n,h),y.target=p,y.relatedTarget=_,g=y),_=g,w&&k)t:{for(y=w,f=k,d=0,p=y;p;p=$t(p))d++;for(p=0,g=f;g;g=$t(g))p++;for(;0<d-p;)y=$t(y),d--;for(;0<p-d;)f=$t(f),p--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=$t(y),f=$t(f)}y=null}else y=null;w!==null&&Xu(v,m,w,y,!1),k!==null&&_!==null&&Xu(v,_,k,y,!0)}}e:{if(m=c?bt(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=zf;else if(Au(m))if(_s)E=If;else{E=Ff;var x=Uf}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Mf);if(E&&(E=E(e,c))){Rs(v,E,n,h);break e}x&&x(e,m,c),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&zo(m,"number",m.value)}switch(x=c?bt(c):window,e){case"focusin":(Au(x)||x.contentEditable==="true")&&(Zt=x,Jo=c,Qn=null);break;case"focusout":Qn=Jo=Zt=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,Ju(v,n,h);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":Ju(v,n,h)}var P;if(Ai)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Gt?xs(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ds&&n.locale!=="ko"&&(Gt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Gt&&(P=Ts()):(ot=h,Ii="value"in ot?ot.value:ot.textContent,Gt=!0)),x=al(c,R),0<x.length&&(R=new Mu(R,e,null,n,h),v.push({event:R,listeners:x}),P?R.data=P:(P=Ps(n),P!==null&&(R.data=P)))),(P=Rf?_f(e,n):Of(e,n))&&(c=al(c,"onBeforeInput"),0<c.length&&(h=new Mu("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:c}),h.data=P))}$s(v,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function al(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=bn(e,n),o!=null&&r.unshift(ir(e,o,l)),o=bn(e,t),o!=null&&r.push(ir(e,o,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=bn(n,o),a!=null&&i.unshift(ir(n,a,u))):l||(a=bn(n,o),a!=null&&i.push(ir(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Qf=/\r\n?/g,Jf=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Jf,"")}function Br(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(S(425))}function sl(){}var Yo=null,Xo=null;function Go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Kf=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(Xf)}:Zo;function Xf(e){setTimeout(function(){throw e})}function fo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);nr(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Nn,ur="__reactProps$"+Nn,Xe="__reactContainer$"+Nn,qo="__reactEvents$"+Nn,Gf="__reactListeners$"+Nn,Zf="__reactHandles$"+Nn;function Pt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qu(e);e!==null;){if(n=e[$e])return n;e=qu(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[$e]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ll(e){return e[ur]||null}var bo=[],en=-1;function wt(e){return{current:e}}function j(e){0>en||(e.current=bo[en],bo[en]=null,en--)}function M(e,t){en++,bo[en]=e.current,e.current=t}var yt={},ue=wt(yt),he=wt(!1),Bt=yt;function hn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function cl(){j(he),j(ue)}function bu(e,t,n){if(ue.current!==yt)throw Error(S(168));M(ue,t),M(he,n)}function Ws(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,zd(e)||"Unknown",l));return V({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Bt=ue.current,M(ue,e),M(he,he.current),!0}function ea(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ws(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,j(he),j(ue),M(ue,e)):j(he),M(he,n)}var He=null,Bl=!1,po=!1;function Vs(e){He===null?He=[e]:He.push(e)}function qf(e){Bl=!0,Vs(e)}function kt(){if(!po&&He!==null){po=!0;var e=0,t=F;try{var n=He;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,Bl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),hs(zi,kt),l}finally{F=t,po=!1}}return null}var tn=[],nn=0,fl=null,pl=0,Ee=[],Te=0,zt=null,Qe=1,Je="";function Dt(e,t){tn[nn++]=pl,tn[nn++]=fl,fl=e,pl=t}function Hs(e,t,n){Ee[Te++]=Qe,Ee[Te++]=Je,Ee[Te++]=zt,zt=e;var r=Qe;e=Je;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var o=32-Ue(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Qe=1<<32-Ue(t)+l|n<<l|r,Je=o+e}else Qe=1<<o|n<<l|r,Je=e}function Vi(e){e.return!==null&&(Dt(e,1),Hs(e,1,0))}function Hi(e){for(;e===fl;)fl=tn[--nn],tn[nn]=null,pl=tn[--nn],tn[nn]=null;for(;e===zt;)zt=Ee[--Te],Ee[Te]=null,Je=Ee[--Te],Ee[Te]=null,Qe=Ee[--Te],Ee[Te]=null}var Se=null,ye=null,$=!1,ze=null;function Qs(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ye=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Qe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,ye=null,!0):!1;default:return!1}}function ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ti(e){if($){var t=ye;if(t){var n=t;if(!ta(e,t)){if(ei(e))throw Error(S(418));t=dt(n.nextSibling);var r=Se;t&&ta(e,t)?Qs(r,n):(e.flags=e.flags&-4097|2,$=!1,Se=e)}}else{if(ei(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Se=e}}}function na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function zr(e){if(e!==Se)return!1;if(!$)return na(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Go(e.type,e.memoizedProps)),t&&(t=ye)){if(ei(e))throw Js(),Error(S(418));for(;t;)Qs(e,t),t=dt(t.nextSibling)}if(na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=Se?dt(e.stateNode.nextSibling):null;return!0}function Js(){for(var e=ye;e;)e=dt(e.nextSibling)}function mn(){ye=Se=null,$=!1}function Qi(e){ze===null?ze=[e]:ze.push(e)}var bf=qe.ReactCurrentBatchConfig;function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hl=wt(null),ml=null,rn=null,Ji=null;function Ki(){Ji=rn=ml=null}function Yi(e){var t=hl.current;j(hl),e._currentValue=t}function ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ml=e,Ji=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Ji!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ml===null)throw Error(S(308));rn=e,ml.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Rt=null;function Xi(e){Rt===null?Rt=[e]:Rt.push(e)}function Ks(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Xi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Gi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,Xi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ui(e,n)}}function ra(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==i&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=a))}if(o!==null){var v=l.baseState;i=0,h=c=a=null,u=o;do{var m=u.lane,w=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,y=u;switch(m=t,w=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){v=k.call(w,v,m);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,m=typeof k=="function"?k.call(w,v,m):k,m==null)break e;v=V({},v,m);break e;case 2:nt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else w={eventTime:w,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=w,a=v):h=h.next=w,i|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(h===null&&(a=v),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=v}}function la(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Xs=new Ka.Component().refs;function ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ht(e),o=Ke(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Fe(t,e,l,r),Kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ht(e),o=Ke(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Fe(t,e,l,r),Kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ht(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Fe(t,e,r,n),Kr(t,e,r))}};function oa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(l,o):!0}function Gs(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(l=me(t)?Bt:ue.current,r=t.contextTypes,o=(r=r!=null)?hn(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function li(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Xs,Gi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Pe(o):(o=me(t)?Bt:ue.current,l.context=hn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ri(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;u===Xs&&(u=l.refs={}),i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ua(e){var t=e._init;return t(e._payload)}function Zs(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,d,p,g){return d===null||d.tag!==6?(d=wo(p,f.mode,g),d.return=f,d):(d=l(d,p),d.return=f,d)}function a(f,d,p,g){var E=p.type;return E===Xt?h(f,d,p.props.children,g,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tt&&ua(E)===d.type)?(g=l(d,p.props),g.ref=zn(f,d,p),g.return=f,g):(g=br(p.type,p.key,p.props,null,f.mode,g),g.ref=zn(f,d,p),g.return=f,g)}function c(f,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ko(p,f.mode,g),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,g,E){return d===null||d.tag!==7?(d=Lt(p,f.mode,g,E),d.return=f,d):(d=l(d,p),d.return=f,d)}function v(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wo(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Er:return p=br(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,null,d),p.return=f,p;case Yt:return d=ko(d,f.mode,p),d.return=f,d;case tt:var g=d._init;return v(f,g(d._payload),p)}if(In(d)||Rn(d))return d=Lt(d,f.mode,p,null),d.return=f,d;Ur(f,d)}return null}function m(f,d,p,g){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:u(f,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return p.key===E?a(f,d,p,g):null;case Yt:return p.key===E?c(f,d,p,g):null;case tt:return E=p._init,m(f,d,E(p._payload),g)}if(In(p)||Rn(p))return E!==null?null:h(f,d,p,g,null);Ur(f,p)}return null}function w(f,d,p,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,u(d,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return f=f.get(g.key===null?p:g.key)||null,a(d,f,g,E);case Yt:return f=f.get(g.key===null?p:g.key)||null,c(d,f,g,E);case tt:var x=g._init;return w(f,d,p,x(g._payload),E)}if(In(g)||Rn(g))return f=f.get(p)||null,h(d,f,g,E,null);Ur(d,g)}return null}function k(f,d,p,g){for(var E=null,x=null,P=d,R=d=0,Q=null;P!==null&&R<p.length;R++){P.index>R?(Q=P,P=null):Q=P.sibling;var z=m(f,P,p[R],g);if(z===null){P===null&&(P=Q);break}e&&P&&z.alternate===null&&t(f,P),d=o(z,d,R),x===null?E=z:x.sibling=z,x=z,P=Q}if(R===p.length)return n(f,P),$&&Dt(f,R),E;if(P===null){for(;R<p.length;R++)P=v(f,p[R],g),P!==null&&(d=o(P,d,R),x===null?E=P:x.sibling=P,x=P);return $&&Dt(f,R),E}for(P=r(f,P);R<p.length;R++)Q=w(P,f,R,p[R],g),Q!==null&&(e&&Q.alternate!==null&&P.delete(Q.key===null?R:Q.key),d=o(Q,d,R),x===null?E=Q:x.sibling=Q,x=Q);return e&&P.forEach(function(_e){return t(f,_e)}),$&&Dt(f,R),E}function y(f,d,p,g){var E=Rn(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var x=E=null,P=d,R=d=0,Q=null,z=p.next();P!==null&&!z.done;R++,z=p.next()){P.index>R?(Q=P,P=null):Q=P.sibling;var _e=m(f,P,z.value,g);if(_e===null){P===null&&(P=Q);break}e&&P&&_e.alternate===null&&t(f,P),d=o(_e,d,R),x===null?E=_e:x.sibling=_e,x=_e,P=Q}if(z.done)return n(f,P),$&&Dt(f,R),E;if(P===null){for(;!z.done;R++,z=p.next())z=v(f,z.value,g),z!==null&&(d=o(z,d,R),x===null?E=z:x.sibling=z,x=z);return $&&Dt(f,R),E}for(P=r(f,P);!z.done;R++,z=p.next())z=w(P,f,R,z.value,g),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?R:z.key),d=o(z,d,R),x===null?E=z:x.sibling=z,x=z);return e&&P.forEach(function(xn){return t(f,xn)}),$&&Dt(f,R),E}function _(f,d,p,g){if(typeof p=="object"&&p!==null&&p.type===Xt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:e:{for(var E=p.key,x=d;x!==null;){if(x.key===E){if(E=p.type,E===Xt){if(x.tag===7){n(f,x.sibling),d=l(x,p.props.children),d.return=f,f=d;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tt&&ua(E)===x.type){n(f,x.sibling),d=l(x,p.props),d.ref=zn(f,x,p),d.return=f,f=d;break e}n(f,x);break}else t(f,x);x=x.sibling}p.type===Xt?(d=Lt(p.props.children,f.mode,g,p.key),d.return=f,f=d):(g=br(p.type,p.key,p.props,null,f.mode,g),g.ref=zn(f,d,p),g.return=f,f=g)}return i(f);case Yt:e:{for(x=p.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ko(p,f.mode,g),d.return=f,f=d}return i(f);case tt:return x=p._init,_(f,d,x(p._payload),g)}if(In(p))return k(f,d,p,g);if(Rn(p))return y(f,d,p,g);Ur(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=wo(p,f.mode,g),d.return=f,f=d),i(f)):n(f,d)}return _}var vn=Zs(!0),qs=Zs(!1),Sr={},We=wt(Sr),ar=wt(Sr),sr=wt(Sr);function _t(e){if(e===Sr)throw Error(S(174));return e}function Zi(e,t){switch(M(sr,t),M(ar,e),M(We,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fo(t,e)}j(We),M(We,t)}function gn(){j(We),j(ar),j(sr)}function bs(e){_t(sr.current);var t=_t(We.current),n=Fo(t,e.type);t!==n&&(M(ar,e),M(We,n))}function qi(e){ar.current===e&&(j(We),j(ar))}var A=wt(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function bi(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var Yr=qe.ReactCurrentDispatcher,mo=qe.ReactCurrentBatchConfig,Ut=0,W=null,G=null,b=null,yl=!1,Jn=!1,cr=0,ep=0;function le(){throw Error(S(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function tu(e,t,n,r,l,o){if(Ut=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?lp:op,e=n(r,l),Jn){o=0;do{if(Jn=!1,cr=0,25<=o)throw Error(S(301));o+=1,b=G=null,t.updateQueue=null,Yr.current=ip,e=n(r,l)}while(Jn)}if(Yr.current=Sl,t=G!==null&&G.next!==null,Ut=0,b=G=W=null,yl=!1,t)throw Error(S(300));return e}function nu(){var e=cr!==0;return cr=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?W.memoizedState=b=e:b=b.next=e,b}function Re(){if(G===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=b===null?W.memoizedState:b.next;if(t!==null)b=t,G=e;else{if(e===null)throw Error(S(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},b===null?W.memoizedState=b=e:b=b.next=e}return b}function dr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,a=null,c=o;do{var h=c.lane;if((Ut&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=v,i=r):a=a.next=v,W.lanes|=h,Ft|=h}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=u,Me(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function go(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Me(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ec(){}function tc(e,t){var n=W,r=Re(),l=t(),o=!Me(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,ru(lc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,fr(9,rc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(S(349));Ut&30||nc(n,t,l)}return l}function nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rc(e,t,n,r){t.value=n,t.getSnapshot=r,oc(t)&&ic(e)}function lc(e,t,n){return n(function(){oc(t)&&ic(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function ic(e){var t=Ge(e,1);t!==null&&Fe(t,e,1,-1)}function aa(e){var t=je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=rp.bind(null,W,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function uc(){return Re().memoizedState}function Xr(e,t,n,r){var l=je();W.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function Ul(e,t,n,r){var l=Re();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&eu(r,i.deps)){l.memoizedState=fr(t,n,o,r);return}}W.flags|=e,l.memoizedState=fr(1|t,n,o,r)}function sa(e,t){return Xr(8390656,8,e,t)}function ru(e,t){return Ul(2048,8,e,t)}function ac(e,t){return Ul(4,2,e,t)}function sc(e,t){return Ul(4,4,e,t)}function cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dc(e,t,n){return n=n!=null?n.concat([e]):null,Ul(4,4,cc.bind(null,t,e),n)}function lu(){}function fc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hc(e,t,n){return Ut&21?(Me(n,t)||(n=gs(),W.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function tp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=mo.transition;mo.transition={};try{e(!1),t()}finally{F=n,mo.transition=r}}function mc(){return Re().memoizedState}function np(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vc(e))gc(t,n);else if(n=Ks(e,t,n,r),n!==null){var l=se();Fe(n,e,r,l),yc(n,t,r)}}function rp(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vc(e))gc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,Me(u,i)){var a=t.interleaved;a===null?(l.next=l,Xi(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Ks(e,t,l,r),n!==null&&(l=se(),Fe(n,e,r,l),yc(n,t,r))}}function vc(e){var t=e.alternate;return e===W||t!==null&&t===W}function gc(e,t){Jn=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ui(e,n)}}var Sl={readContext:Pe,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},lp={readContext:Pe,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,cc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=np.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:aa,useDebugValue:lu,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=aa(!1),t=e[0];return e=tp.bind(null,e[1]),je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=je();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ee===null)throw Error(S(349));Ut&30||nc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,sa(lc.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,rc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=je(),t=ee.identifierPrefix;if($){var n=Je,r=Qe;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ep++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:Pe,useCallback:fc,useContext:Pe,useEffect:ru,useImperativeHandle:dc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:pc,useReducer:vo,useRef:uc,useState:function(){return vo(dr)},useDebugValue:lu,useDeferredValue:function(e){var t=Re();return hc(t,G.memoizedState,e)},useTransition:function(){var e=vo(dr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:mc,unstable_isNewReconciler:!1},ip={readContext:Pe,useCallback:fc,useContext:Pe,useEffect:ru,useImperativeHandle:dc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:pc,useReducer:go,useRef:uc,useState:function(){return go(dr)},useDebugValue:lu,useDeferredValue:function(e){var t=Re();return G===null?t.memoizedState=e:hc(t,G.memoizedState,e)},useTransition:function(){var e=go(dr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:mc,unstable_isNewReconciler:!1};function yn(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Sc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,mi=r),oi(e,t)},n}function wc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){oi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oi(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ca(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new up;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=kp.bind(null,e,t,n),t.then(e,e))}function da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var ap=qe.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?qs(t,null,n,r):vn(t,e.child,n,r)}function pa(e,t,n,r,l){n=n.render;var o=t.ref;return dn(t,l),r=tu(e,t,n,r,o,l),n=nu(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&n&&Vi(t),t.flags|=1,ae(e,t,r,l),t.child)}function ha(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,kc(e,t,o,r,l)):(e=br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(i,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return ii(e,t,n,r,l)}function Cc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(on,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(on,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(on,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(on,ge),ge|=r;return ae(e,t,l,n),t.child}function Nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,l){var o=me(n)?Bt:ue.current;return o=hn(t,o),dn(t,l),n=tu(e,t,n,r,o,l),r=nu(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&r&&Vi(t),t.flags|=1,ae(e,t,n,l),t.child)}function ma(e,t,n,r,l){if(me(n)){var o=!0;dl(t)}else o=!1;if(dn(t,l),t.stateNode===null)Gr(e,t),Gs(t,n,r),li(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=me(n)?Bt:ue.current,c=hn(t,c));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==c)&&ia(t,i,r,c),nt=!1;var m=t.memoizedState;i.state=m,vl(t,r,i,l),a=t.memoizedState,u!==r||m!==a||he.current||nt?(typeof h=="function"&&(ri(t,n,h,r),a=t.memoizedState),(u=nt||oa(t,n,u,r,m,a,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ys(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Le(t.type,u),i.props=c,v=t.pendingProps,m=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Pe(a):(a=me(n)?Bt:ue.current,a=hn(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==a)&&ia(t,i,r,a),nt=!1,m=t.memoizedState,i.state=m,vl(t,r,i,l);var k=t.memoizedState;u!==v||m!==k||he.current||nt?(typeof w=="function"&&(ri(t,n,w,r),k=t.memoizedState),(c=nt||oa(t,n,c,r,m,k,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ui(e,t,n,r,o,l)}function ui(e,t,n,r,l,o){Nc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ea(t,n,!1),Ze(e,t,o);r=t.stateNode,ap.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,o),t.child=vn(t,null,u,o)):ae(e,t,u,o),t.memoizedState=r.state,l&&ea(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),Zi(e,t.containerInfo)}function va(e,t,n,r,l){return mn(),Qi(l),t.flags|=256,ae(e,t,n,r),t.child}var ai={dehydrated:null,treeContext:null,retryLane:0};function si(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var r=t.pendingProps,l=A.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(A,l&1),e===null)return ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Il(i,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=si(n),t.memoizedState=ai,e):ou(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return sp(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=mt(u,o):(o=Lt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?si(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ai,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ou(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&Qi(r),vn(t,e.child,null,n),e=ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=yo(Error(S(422))),Fr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Il({mode:"visible",children:r.children},l,0,null),o=Lt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vn(t,e.child,null,i),t.child.memoizedState=si(i),t.memoizedState=ai,o);if(!(t.mode&1))return Fr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(S(419)),r=yo(o,r,void 0),Fr(e,t,i,r)}if(u=(i&e.childLanes)!==0,pe||u){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Fe(r,e,l,-1))}return du(),r=yo(Error(S(421))),Fr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ye=dt(l.nextSibling),Se=t,$=!0,ze=null,e!==null&&(Ee[Te++]=Qe,Ee[Te++]=Je,Ee[Te++]=zt,Qe=e.id,Je=e.overflow,zt=t),t=ou(t,r.children),t.flags|=4096,t)}function ga(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ni(e.return,t,n)}function So(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Dc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ga(e,n,t);else if(e.tag===19)ga(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),So(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}So(t,!0,n,null,o);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cp(e,t,n){switch(t.tag){case 3:Ec(t),mn();break;case 5:bs(t);break;case 1:me(t.type)&&dl(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Tc(e,t,n):(M(A,A.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);M(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Cc(e,t,n)}return Ze(e,t,n)}var xc,ci,Pc,Rc;xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ci=function(){};Pc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,_t(We.current);var o=null;switch(n){case"input":l=Lo(e,l),r=Lo(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=Uo(e,l),r=Uo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=sl)}Mo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),o||u===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Un(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dp(e,t,n){var r=t.pendingProps;switch(Hi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&cl(),oe(t),null;case 3:return r=t.stateNode,gn(),j(he),j(ue),bi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(yi(ze),ze=null))),ci(e,t),oe(t),null;case 5:qi(t);var l=_t(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=_t(We.current),zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[ur]=o,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<$n.length;l++)I($n[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Du(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":Pu(r,o),I("invalid",r)}Mo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,u,e),l=["children",""+u]):Zn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&I("scroll",r)}switch(n){case"input":Tr(r),xu(r,o,!0);break;case"textarea":Tr(r),Ru(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ns(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$e]=t,e[ur]=r,xc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Io(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<$n.length;l++)I($n[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Du(e,r),l=Lo(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":Pu(e,r),l=Uo(e,r),I("invalid",e);break;default:l=r}Mo(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?os(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rs(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qn(e,a):typeof a=="number"&&qn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&I("scroll",e):a!=null&&Ri(e,o,a,i))}switch(n){case"input":Tr(e),xu(e,r,!1);break;case"textarea":Tr(e),Ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=_t(sr.current),_t(We.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return oe(t),null;case 13:if(j(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ye!==null&&t.mode&1&&!(t.flags&128))Js(),mn(),t.flags|=98560,o=!1;else if(o=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[$e]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else ze!==null&&(yi(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?Z===0&&(Z=3):du())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return gn(),ci(e,t),e===null&&or(t.stateNode.containerInfo),oe(t),null;case 10:return Yi(t.type._context),oe(t),null;case 17:return me(t.type)&&cl(),oe(t),null;case 19:if(j(A),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Un(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=gl(e),i!==null){for(t.flags|=128,Un(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>Sn&&(t.flags|=128,r=!0,Un(o,!1),t.lanes=4194304)}else{if(!r)if(e=gl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Un(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!$)return oe(t),null}else 2*K()-o.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Un(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=A.current,M(A,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function fp(e,t){switch(Hi(t),t.tag){case 1:return me(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),j(he),j(ue),bi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qi(t),null;case 13:if(j(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(A),null;case 4:return gn(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Mr=!1,ie=!1,pp=typeof WeakSet=="function"?WeakSet:Set,N=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function di(e,t,n){try{n()}catch(r){H(e,t,r)}}var ya=!1;function hp(e,t){if(Yo=il,e=Bs(),Wi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,c=0,h=0,v=e,m=null;t:for(;;){for(var w;v!==n||l!==0&&v.nodeType!==3||(u=i+l),v!==o||r!==0&&v.nodeType!==3||(a=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(w=v.firstChild)!==null;)m=v,v=w;for(;;){if(v===e)break t;if(m===n&&++c===l&&(u=i),m===o&&++h===r&&(a=i),(w=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=w}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xo={focusedElem:e,selectionRange:n},il=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,_=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Le(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return k=ya,ya=!1,k}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&di(t,n,o)}l=l.next}while(l!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _c(e){var t=e.alternate;t!==null&&(e.alternate=null,_c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[ur],delete t[qo],delete t[Gf],delete t[Zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function Sa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sl));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}var te=null,Be=!1;function be(e,t,n){for(n=n.child;n!==null;)Lc(e,t,n),n=n.sibling}function Lc(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:ie||ln(n,t);case 6:var r=te,l=Be;te=null,be(e,t,n),te=r,Be=l,te!==null&&(Be?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Be?(e=te,n=n.stateNode,e.nodeType===8?fo(e.parentNode,n):e.nodeType===1&&fo(e,n),nr(e)):fo(te,n.stateNode));break;case 4:r=te,l=Be,te=n.stateNode.containerInfo,Be=!0,be(e,t,n),te=r,Be=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&di(n,t,i),l=l.next}while(l!==r)}be(e,t,n);break;case 1:if(!ie&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){H(n,t,u)}be(e,t,n);break;case 21:be(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,be(e,t,n),ie=r):be(e,t,n);break;default:be(e,t,n)}}function wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pp),t.forEach(function(r){var l=Np.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:te=u.stateNode,Be=!1;break e;case 3:te=u.stateNode.containerInfo,Be=!0;break e;case 4:te=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(te===null)throw Error(S(160));Lc(o,i,l),te=null,Be=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bc(t,e),t=t.sibling}function Bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ie(e),r&4){try{Kn(3,e,e.return),Fl(3,e)}catch(y){H(e,e.return,y)}try{Kn(5,e,e.return)}catch(y){H(e,e.return,y)}}break;case 1:Oe(t,e),Ie(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Oe(t,e),Ie(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(y){H(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&es(l,o),Io(u,i);var c=Io(u,o);for(i=0;i<a.length;i+=2){var h=a[i],v=a[i+1];h==="style"?os(l,v):h==="dangerouslySetInnerHTML"?rs(l,v):h==="children"?qn(l,v):Ri(l,h,v,c)}switch(u){case"input":Bo(l,o);break;case"textarea":ts(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?un(l,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?un(l,!!o.multiple,o.defaultValue,!0):un(l,!!o.multiple,o.multiple?[]:"",!1))}l[ur]=o}catch(y){H(e,e.return,y)}}break;case 6:if(Oe(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){H(e,e.return,y)}}break;case 3:if(Oe(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(y){H(e,e.return,y)}break;case 4:Oe(t,e),Ie(e);break;case 13:Oe(t,e),Ie(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(au=K())),r&4&&wa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||h,Oe(t,e),ie=c):Oe(t,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(v=N=h;N!==null;){switch(m=N,w=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:ln(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){H(r,n,y)}}break;case 5:ln(m,m.return);break;case 22:if(m.memoizedState!==null){Ca(v);continue}}w!==null?(w.return=m,N=w):Ca(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,a=v.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ls("display",i))}catch(y){H(e,e.return,y)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(y){H(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Oe(t,e),Ie(e),r&4&&wa(e);break;case 21:break;default:Oe(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qn(l,""),r.flags&=-33);var o=Sa(e);hi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Sa(e);pi(e,u,i);break;default:throw Error(S(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mp(e,t,n){N=e,zc(e)}function zc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Mr;if(!i){var u=l.alternate,a=u!==null&&u.memoizedState!==null||ie;u=Mr;var c=ie;if(Mr=i,(ie=a)&&!c)for(N=l;N!==null;)i=N,a=i.child,i.tag===22&&i.memoizedState!==null?Na(l):a!==null?(a.return=i,N=a):Na(l);for(;o!==null;)N=o,zc(o),o=o.sibling;N=l,Mr=u,ie=c}ka(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):ka(e)}}function ka(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&la(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}la(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&nr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||t.flags&512&&fi(t)}catch(m){H(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ca(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Na(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(a){H(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){H(t,l,a)}}var o=t.return;try{fi(t)}catch(a){H(t,o,a)}break;case 5:var i=t.return;try{fi(t)}catch(a){H(t,i,a)}}}catch(a){H(t,t.return,a)}if(t===e){N=null;break}var u=t.sibling;if(u!==null){u.return=t.return,N=u;break}N=t.return}}var vp=Math.ceil,wl=qe.ReactCurrentDispatcher,iu=qe.ReactCurrentOwner,xe=qe.ReactCurrentBatchConfig,U=0,ee=null,Y=null,ne=0,ge=0,on=wt(0),Z=0,pr=null,Ft=0,Ml=0,uu=0,Yn=null,fe=null,au=0,Sn=1/0,Ve=null,kl=!1,mi=null,pt=null,Ir=!1,it=null,Cl=0,Xn=0,vi=null,Zr=-1,qr=0;function se(){return U&6?K():Zr!==-1?Zr:Zr=K()}function ht(e){return e.mode&1?U&2&&ne!==0?ne&-ne:bf.transition!==null?(qr===0&&(qr=gs()),qr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Es(e.type)),e):1}function Fe(e,t,n,r){if(50<Xn)throw Xn=0,vi=null,Error(S(185));vr(e,n,r),(!(U&2)||e!==ee)&&(e===ee&&(!(U&2)&&(Ml|=n),Z===4&&lt(e,ne)),ve(e,r),n===1&&U===0&&!(t.mode&1)&&(Sn=K()+500,Bl&&kt()))}function ve(e,t){var n=e.callbackNode;qd(e,t);var r=ol(e,e===ee?ne:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?qf(Ea.bind(null,e)):Vs(Ea.bind(null,e)),Yf(function(){!(U&6)&&kt()}),n=null;else{switch(ys(r)){case 1:n=zi;break;case 4:n=ms;break;case 16:n=ll;break;case 536870912:n=vs;break;default:n=ll}n=Wc(n,Uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uc(e,t){if(Zr=-1,qr=0,U&6)throw Error(S(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=ol(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var l=U;U|=2;var o=Mc();(ee!==e||ne!==t)&&(Ve=null,Sn=K()+500,Ot(e,t));do try{Sp();break}catch(u){Fc(e,u)}while(1);Ki(),wl.current=o,U=l,Y!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=Vo(e),l!==0&&(r=l,t=gi(e,l))),t===1)throw n=pr,Ot(e,0),lt(e,r),ve(e,K()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!gp(l)&&(t=Nl(e,r),t===2&&(o=Vo(e),o!==0&&(r=o,t=gi(e,o))),t===1))throw n=pr,Ot(e,0),lt(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:xt(e,fe,Ve);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=au+500-K(),10<t)){if(ol(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Zo(xt.bind(null,e,fe,Ve),t);break}xt(e,fe,Ve);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ue(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,10<r){e.timeoutHandle=Zo(xt.bind(null,e,fe,Ve),r);break}xt(e,fe,Ve);break;case 5:xt(e,fe,Ve);break;default:throw Error(S(329))}}}return ve(e,K()),e.callbackNode===n?Uc.bind(null,e):null}function gi(e,t){var n=Yn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=fe,fe=n,t!==null&&yi(t)),e}function yi(e){fe===null?fe=e:fe.push.apply(fe,e)}function gp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Me(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~uu,t&=~Ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Ea(e){if(U&6)throw Error(S(327));fn();var t=ol(e,0);if(!(t&1))return ve(e,K()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Vo(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=pr,Ot(e,0),lt(e,t),ve(e,K()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,fe,Ve),ve(e,K()),null}function su(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Sn=K()+500,Bl&&kt())}}function Mt(e){it!==null&&it.tag===0&&!(U&6)&&fn();var t=U;U|=1;var n=xe.transition,r=F;try{if(xe.transition=null,F=1,e)return e()}finally{F=r,xe.transition=n,U=t,!(U&6)&&kt()}}function cu(){ge=on.current,j(on)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Hi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:gn(),j(he),j(ue),bi();break;case 5:qi(r);break;case 4:gn();break;case 13:j(A);break;case 19:j(A);break;case 10:Yi(r.type._context);break;case 22:case 23:cu()}n=n.return}if(ee=e,Y=e=mt(e.current,null),ne=ge=t,Z=0,pr=null,uu=Ml=Ft=0,fe=Yn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Rt=null}return e}function Fc(e,t){do{var n=Y;try{if(Ki(),Yr.current=Sl,yl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}yl=!1}if(Ut=0,b=G=W=null,Jn=!1,cr=0,iu.current=null,n===null||n.return===null){Z=1,pr=t,Y=null;break}e:{var o=e,i=n.return,u=n,a=t;if(t=ne,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=u,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=da(i);if(w!==null){w.flags&=-257,fa(w,i,u,o,t),w.mode&1&&ca(o,c,t),t=w,a=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(a),t.updateQueue=y}else k.add(a);break e}else{if(!(t&1)){ca(o,c,t),du();break e}a=Error(S(426))}}else if($&&u.mode&1){var _=da(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fa(_,i,u,o,t),Qi(yn(a,u));break e}}o=a=yn(a,u),Z!==4&&(Z=2),Yn===null?Yn=[o]:Yn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Sc(o,a,t);ra(o,f);break e;case 1:u=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=wc(o,u,t);ra(o,g);break e}}o=o.return}while(o!==null)}jc(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Mc(){var e=wl.current;return wl.current=Sl,e===null?Sl:e}function du(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Ft&268435455)&&!(Ml&268435455)||lt(ee,ne)}function Nl(e,t){var n=U;U|=2;var r=Mc();(ee!==e||ne!==t)&&(Ve=null,Ot(e,t));do try{yp();break}catch(l){Fc(e,l)}while(1);if(Ki(),U=n,wl.current=r,Y!==null)throw Error(S(261));return ee=null,ne=0,Z}function yp(){for(;Y!==null;)Ic(Y)}function Sp(){for(;Y!==null&&!Vd();)Ic(Y)}function Ic(e){var t=Ac(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?jc(e):Y=t,iu.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=dp(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function xt(e,t,n){var r=F,l=xe.transition;try{xe.transition=null,F=1,wp(e,t,n,r)}finally{xe.transition=l,F=r}return null}function wp(e,t,n,r){do fn();while(it!==null);if(U&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(bd(e,o),e===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Wc(ll,function(){return fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xe.transition,xe.transition=null;var i=F;F=1;var u=U;U|=4,iu.current=null,hp(e,n),Bc(n,e),$f(Xo),il=!!Yo,Xo=Yo=null,e.current=n,mp(n),Hd(),U=u,F=i,xe.transition=o}else e.current=n;if(Ir&&(Ir=!1,it=e,Cl=l),o=e.pendingLanes,o===0&&(pt=null),Kd(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(kl)throw kl=!1,e=mi,mi=null,e;return Cl&1&&e.tag!==0&&fn(),o=e.pendingLanes,o&1?e===vi?Xn++:(Xn=0,vi=e):Xn=0,kt(),null}function fn(){if(it!==null){var e=ys(Cl),t=xe.transition,n=F;try{if(xe.transition=null,F=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,Cl=0,U&6)throw Error(S(331));var l=U;for(U|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Kn(8,h,o)}var v=h.child;if(v!==null)v.return=h,N=v;else for(;N!==null;){h=N;var m=h.sibling,w=h.return;if(_c(h),h===c){N=null;break}if(m!==null){m.return=w,N=m;break}N=w}}}var k=o.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){i=N;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,N=p;else e:for(i=d;N!==null;){if(u=N,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Fl(9,u)}}catch(E){H(u,u.return,E)}if(u===i){N=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,N=g;break e}N=u.return}}if(U=l,kt(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Pl,e)}catch{}r=!0}return r}finally{F=n,xe.transition=t}}return!1}function Ta(e,t,n){t=yn(n,t),t=Sc(e,t,1),e=ft(e,t,1),t=se(),e!==null&&(vr(e,1,t),ve(e,t))}function H(e,t,n){if(e.tag===3)Ta(e,e,n);else for(;t!==null;){if(t.tag===3){Ta(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=yn(n,e),e=wc(t,e,1),t=ft(t,e,1),e=se(),t!==null&&(vr(t,1,e),ve(t,e));break}}t=t.return}}function kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>K()-au?Ot(e,0):uu|=n),ve(e,t)}function $c(e,t){t===0&&(e.mode&1?(t=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):t=1);var n=se();e=Ge(e,t),e!==null&&(vr(e,t,n),ve(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$c(e,n)}function Np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),$c(e,n)}var Ac;Ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,cp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,$&&t.flags&1048576&&Hs(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gr(e,t),e=t.pendingProps;var l=hn(t,ue.current);dn(t,n),l=tu(null,t,r,e,l,n);var o=nu();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,dl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Gi(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,li(t,r,e,n),t=ui(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Vi(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tp(r),e=Le(r,e),l){case 0:t=ii(null,t,r,e,n);break e;case 1:t=ma(null,t,r,e,n);break e;case 11:t=pa(null,t,r,e,n);break e;case 14:t=ha(null,t,r,Le(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ii(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ma(e,t,r,l,n);case 3:e:{if(Ec(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Ys(e,t),vl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=yn(Error(S(423)),t),t=va(e,t,r,n,l);break e}else if(r!==l){l=yn(Error(S(424)),t),t=va(e,t,r,n,l);break e}else for(ye=dt(t.stateNode.containerInfo.firstChild),Se=t,$=!0,ze=null,n=qs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=Ze(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return bs(t),e===null&&ti(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Go(r,l)?i=null:o!==null&&Go(r,o)&&(t.flags|=32),Nc(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&ti(t),null;case 13:return Tc(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),pa(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,M(hl,r._currentValue),r._currentValue=i,o!==null)if(Me(o.value,i)){if(o.children===l.children&&!he.current){t=Ze(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ke(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ni(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ni(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,dn(t,n),l=Pe(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),ha(e,t,r,l,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Gr(e,t),t.tag=1,me(r)?(e=!0,dl(t)):e=!1,dn(t,n),Gs(t,r,l),li(t,r,l,n),ui(null,t,r,!0,e,n);case 19:return Dc(e,t,n);case 22:return Cc(e,t,n)}throw Error(S(156,t.tag))};function Wc(e,t){return hs(e,t)}function Ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Ep(e,t,n,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oi)return 11;if(e===Li)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function br(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")fu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return Lt(n.children,l,o,t);case _i:i=8,l|=8;break;case Po:return e=De(12,n,t,l|2),e.elementType=Po,e.lanes=o,e;case Ro:return e=De(13,n,t,l),e.elementType=Ro,e.lanes=o,e;case _o:return e=De(19,n,t,l),e.elementType=_o,e.lanes=o,e;case Za:return Il(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xa:i=10;break e;case Ga:i=9;break e;case Oi:i=11;break e;case Li:i=14;break e;case tt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Il(e,t,n,r){return e=De(22,e,r,t),e.elementType=Za,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,l,o,i,u,a){return e=new Dp(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gi(o),e}function xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vc(e){if(!e)return yt;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(me(n))return Ws(e,n,t)}return t}function Hc(e,t,n,r,l,o,i,u,a){return e=pu(n,r,!0,e,l,o,i,u,a),e.context=Vc(null),n=e.current,r=se(),l=ht(n),o=Ke(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,vr(e,l,r),ve(e,r),e}function jl(e,t,n,r){var l=t.current,o=se(),i=ht(l);return n=Vc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,i),e!==null&&(Fe(e,l,i,o),Kr(e,l,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Da(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){Da(e,t),(e=e.alternate)&&Da(e,t)}function Pp(){return null}var Qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}$l.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));jl(e,t,null,null)};$l.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){jl(null,e,null,null)}),t[Xe]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=ks();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Ns(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xa(){}function Rp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=El(i);o.call(c)}}var i=Hc(t,r,e,0,null,!1,!1,"",xa);return e._reactRootContainer=i,e[Xe]=i.current,or(e.nodeType===8?e.parentNode:e),Mt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=El(a);u.call(c)}}var a=pu(e,0,!1,null,null,!1,!1,"",xa);return e._reactRootContainer=a,e[Xe]=a.current,or(e.nodeType===8?e.parentNode:e),Mt(function(){jl(t,a,n,r)}),a}function Wl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var a=El(i);u.call(a)}}jl(t,i,e,l)}else i=Rp(n,t,e,l,r);return El(i)}Ss=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Ui(t,n|1),ve(t,K()),!(U&6)&&(Sn=K()+500,kt()))}break;case 13:Mt(function(){var r=Ge(e,1);if(r!==null){var l=se();Fe(r,e,1,l)}}),hu(e,1)}};Fi=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=se();Fe(t,e,134217728,n)}hu(e,134217728)}};ws=function(e){if(e.tag===13){var t=ht(e),n=Ge(e,t);if(n!==null){var r=se();Fe(n,e,t,r)}hu(e,t)}};ks=function(){return F};Cs=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};$o=function(e,t,n){switch(t){case"input":if(Bo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ll(r);if(!l)throw Error(S(90));ba(r),Bo(r,l)}}}break;case"textarea":ts(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};as=su;ss=Mt;var _p={usingClientEntryPoint:!1,Events:[yr,bt,Ll,is,us,su]},Fn={findFiberByHostInstance:Pt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Op={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fs(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||Pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{Pl=jr.inject(Op),Ae=jr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_p;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(S(200));return xp(e,t,null,n)};Ce.createRoot=function(e,t){if(!vu(e))throw Error(S(299));var n=!1,r="",l=Qc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,l),e[Xe]=t.current,or(e.nodeType===8?e.parentNode:e),new mu(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=fs(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Mt(e)};Ce.hydrate=function(e,t,n){if(!Al(t))throw Error(S(200));return Wl(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Qc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Hc(t,null,e,1,n??null,l,!1,o,i),e[Xe]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)};Ce.render=function(e,t,n){if(!Al(t))throw Error(S(200));return Wl(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Al(e))throw Error(S(40));return e._reactRootContainer?(Mt(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ce.unstable_batchedUpdates=su;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Wl(e,t,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ce})(xd);var Pa=el;To.createRoot=Pa.createRoot,To.hydrateRoot=Pa.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hr.apply(this,arguments)}var ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ut||(ut={}));const Ra="popstate";function Lp(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:i,hash:u}=r.location;return Si("",{pathname:o,search:i,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Tl(l)}return zp(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bp(){return Math.random().toString(36).substr(2,8)}function _a(e,t){return{usr:e.state,key:e.key,idx:t}}function Si(e,t,n,r){return n===void 0&&(n=null),hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?En(t):t,{state:n,key:t&&t.key||r||Bp()})}function Tl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function En(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,u=ut.Pop,a=null,c=h();c==null&&(c=0,i.replaceState(hr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function v(){u=ut.Pop;let _=h(),f=_==null?null:_-c;c=_,a&&a({action:u,location:y.location,delta:f})}function m(_,f){u=ut.Push;let d=Si(y.location,_,f);n&&n(d,_),c=h()+1;let p=_a(d,c),g=y.createHref(d);try{i.pushState(p,"",g)}catch{l.location.assign(g)}o&&a&&a({action:u,location:y.location,delta:1})}function w(_,f){u=ut.Replace;let d=Si(y.location,_,f);n&&n(d,_),c=h();let p=_a(d,c),g=y.createHref(d);i.replaceState(p,"",g),o&&a&&a({action:u,location:y.location,delta:0})}function k(_){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof _=="string"?_:Tl(_);return X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let y={get action(){return u},get location(){return e(l,i)},listen(_){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Ra,v),a=_,()=>{l.removeEventListener(Ra,v),a=null}},createHref(_){return t(l,_)},createURL:k,encodeLocation(_){let f=k(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:w,go(_){return i.go(_)}};return y}var Oa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oa||(Oa={}));function Up(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?En(t):t,l=Yc(r.pathname||"/",n);if(l==null)return null;let o=Jc(e);Fp(o);let i=null;for(let u=0;i==null&&u<o.length;++u)i=Qp(o[u],Yp(l));return i}function Jc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,i,u)=>{let a={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(X(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=vt([r,a.relativePath]),h=n.concat(a);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jc(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Vp(c,o.index),routesMeta:h})};return e.forEach((o,i)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,i);else for(let a of Kc(o.path))l(o,i,a)}),t}function Kc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=Kc(r.join("/")),u=[];return u.push(...i.map(a=>a===""?o:[o,a].join("/"))),l&&u.push(...i),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function Fp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Hp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mp=/^:\w+$/,Ip=3,jp=2,$p=1,Ap=10,Wp=-2,La=e=>e==="*";function Vp(e,t){let n=e.split("/"),r=n.length;return n.some(La)&&(r+=Wp),t&&(r+=jp),n.filter(l=>!La(l)).reduce((l,o)=>l+(Mp.test(o)?Ip:o===""?$p:Ap),r)}function Hp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Qp(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let i=0;i<n.length;++i){let u=n[i],a=i===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",h=Jp({path:u.relativePath,caseSensitive:u.caseSensitive,end:a},c);if(!h)return null;Object.assign(r,h.params);let v=u.route;o.push({params:r,pathname:vt([l,h.pathname]),pathnameBase:qp(vt([l,h.pathnameBase])),route:v}),h.pathnameBase!=="/"&&(l=vt([l,h.pathnameBase]))}return o}function Jp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((c,h,v)=>{if(h==="*"){let m=u[v]||"";i=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=Xp(u[v]||"",h),c},{}),pathname:o,pathnameBase:i,pattern:e}}function Kp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Yp(e){try{return decodeURI(e)}catch(t){return gu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xp(e,t){try{return decodeURIComponent(e)}catch(n){return gu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Yc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function gu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?En(e):e;return{pathname:n?n.startsWith("/")?n:Zp(n,t):t,search:bp(r),hash:eh(l)}}function Zp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Co(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=En(e):(l=hr({},e),X(!l.pathname||!l.pathname.includes("?"),Co("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),Co("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),Co("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,u;if(r||i==null)u=n;else{let v=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),v-=1;l.pathname=m.join("/")}u=v>=0?t[v]:"/"}let a=Gp(l,u),c=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),qp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function th(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nh=["post","put","patch","delete"];[...nh];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const lh=typeof Object.is=="function"?Object.is:rh,{useState:oh,useEffect:ih,useLayoutEffect:uh,useDebugValue:ah}=Eo;function sh(e,t,n){const r=t(),[{inst:l},o]=oh({inst:{value:r,getSnapshot:t}});return uh(()=>{l.value=r,l.getSnapshot=t,No(l)&&o({inst:l})},[e,r,t]),ih(()=>(No(l)&&o({inst:l}),e(()=>{No(l)&&o({inst:l})})),[e]),ah(r),r}function No(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!lh(n,r)}catch{return!0}}function ch(e,t,n){return t()}const dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fh=!dh,ph=fh?ch:sh;"useSyncExternalStore"in Eo&&(e=>e.useSyncExternalStore)(Eo);const Zc=C.createContext(null),yu=C.createContext(null),Vl=C.createContext(null),Hl=C.createContext(null),Tn=C.createContext({outlet:null,matches:[]}),qc=C.createContext(null);function hh(e,t){let{relative:n}=t===void 0?{}:t;Dn()||X(!1);let{basename:r,navigator:l}=C.useContext(Vl),{hash:o,pathname:i,search:u}=ed(e,{relative:n}),a=i;return r!=="/"&&(a=i==="/"?r:vt([r,i])),l.createHref({pathname:a,search:u,hash:o})}function Dn(){return C.useContext(Hl)!=null}function wr(){return Dn()||X(!1),C.useContext(Hl).location}function bc(){Dn()||X(!1);let{basename:e,navigator:t}=C.useContext(Vl),{matches:n}=C.useContext(Tn),{pathname:r}=wr(),l=JSON.stringify(Xc(n).map(u=>u.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(u,a){if(a===void 0&&(a={}),!o.current)return;if(typeof u=="number"){t.go(u);return}let c=Gc(u,JSON.parse(l),r,a.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:vt([e,c.pathname])),(a.replace?t.replace:t.push)(c,a.state,a)},[e,t,l,r])}function ed(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Tn),{pathname:l}=wr(),o=JSON.stringify(Xc(r).map(i=>i.pathnameBase));return C.useMemo(()=>Gc(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function mh(e,t){Dn()||X(!1);let{navigator:n}=C.useContext(Vl),r=C.useContext(yu),{matches:l}=C.useContext(Tn),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let a=wr(),c;if(t){var h;let y=typeof t=="string"?En(t):t;u==="/"||(h=y.pathname)!=null&&h.startsWith(u)||X(!1),c=y}else c=a;let v=c.pathname||"/",m=u==="/"?v:v.slice(u.length)||"/",w=Up(e,{pathname:m}),k=Sh(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},i,y.params),pathname:vt([u,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:vt([u,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,r||void 0);return t&&k?C.createElement(Hl.Provider,{value:{location:wi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ut.Pop}},k):k}function vh(){let e=Nh(),t=th(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:l},n):null,o)}class gh extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Tn.Provider,{value:this.props.routeContext},C.createElement(qc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yh(e){let{routeContext:t,match:n,children:r}=e,l=C.useContext(Zc);return l&&l.static&&l.staticContext&&n.route.errorElement&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Tn.Provider,{value:t},r)}function Sh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,l=n==null?void 0:n.errors;if(l!=null){let o=r.findIndex(i=>i.route.id&&(l==null?void 0:l[i.route.id]));o>=0||X(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,i,u)=>{let a=i.route.id?l==null?void 0:l[i.route.id]:null,c=n?i.route.errorElement||C.createElement(vh,null):null,h=t.concat(r.slice(0,u+1)),v=()=>C.createElement(yh,{match:i,routeContext:{outlet:o,matches:h}},a?c:i.route.element!==void 0?i.route.element:o);return n&&(i.route.errorElement||u===0)?C.createElement(gh,{location:n.location,component:c,error:a,children:v(),routeContext:{outlet:null,matches:h}}):v()},null)}var Ba;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Ba||(Ba={}));var Dl;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Dl||(Dl={}));function wh(e){let t=C.useContext(yu);return t||X(!1),t}function kh(e){let t=C.useContext(Tn);return t||X(!1),t}function Ch(e){let t=kh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Nh(){var e;let t=C.useContext(qc),n=wh(Dl.UseRouteError),r=Ch(Dl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Eh(e){let{to:t,replace:n,state:r,relative:l}=e;Dn()||X(!1);let o=C.useContext(yu),i=bc();return C.useEffect(()=>{o&&o.navigation.state!=="idle"||i(t,{replace:n,state:r,relative:l})}),null}function et(e){X(!1)}function Th(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ut.Pop,navigator:o,static:i=!1}=e;Dn()&&X(!1);let u=t.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:u,navigator:o,static:i}),[u,o,i]);typeof r=="string"&&(r=En(r));let{pathname:c="/",search:h="",hash:v="",state:m=null,key:w="default"}=r,k=C.useMemo(()=>{let y=Yc(c,u);return y==null?null:{pathname:y,search:h,hash:v,state:m,key:w}},[u,c,h,v,m,w]);return k==null?null:C.createElement(Vl.Provider,{value:a},C.createElement(Hl.Provider,{children:n,value:{location:k,navigationType:l}}))}function Dh(e){let{children:t,location:n}=e,r=C.useContext(Zc),l=r&&!t?r.router.routes:ki(t);return mh(l,n)}var za;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(za||(za={}));new Promise(()=>{});function ki(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,l)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,ki(r.props.children,t));return}r.type!==et&&X(!1),!r.props.index||!r.props.children||X(!1);let o=[...t,l],i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=ki(r.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}function xh(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Ph(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rh(e,t){return e.button===0&&(!t||t==="_self")&&!Ph(e)}const _h=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Oh(e){let{basename:t,children:n,window:r}=e,l=C.useRef();l.current==null&&(l.current=Lp({window:r,v5Compat:!0}));let o=l.current,[i,u]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(u),[o]),C.createElement(Th,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o})}const Lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",At=C.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:u,target:a,to:c,preventScrollReset:h}=t,v=xh(t,_h),m,w=!1;if(Lh&&typeof c=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){m=c;let f=new URL(window.location.href),d=c.startsWith("//")?new URL(f.protocol+c):new URL(c);d.origin===f.origin?c=d.pathname+d.search+d.hash:w=!0}let k=hh(c,{relative:l}),y=Bh(c,{replace:i,state:u,target:a,preventScrollReset:h,relative:l});function _(f){r&&r(f),f.defaultPrevented||y(f)}return C.createElement("a",Ci({},v,{href:m||k,onClick:w||o?r:_,ref:n,target:a}))});var Ua;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ua||(Ua={}));var Fa;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fa||(Fa={}));function Bh(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:i}=t===void 0?{}:t,u=bc(),a=wr(),c=ed(e,{relative:i});return C.useCallback(h=>{if(Rh(h,n)){h.preventDefault();let v=r!==void 0?r:Tl(a)===Tl(c);u(e,{replace:v,state:l,preventScrollReset:o,relative:i})}},[a,u,c,r,l,n,e,o,i])}function zh({firstName:e,lastName:t,dateOfBirth:n}){return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"})]})}),s("tbody",{children:D("tr",{children:[s("td",{children:"TypeScript"}),s("td",{children:e}),s("td",{children:t}),s("td",{children:n.toDateString()})]})})]})}function Uh({firstName:e,lastName:t,dateOfBirth:n}){return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"})]})}),s("tbody",{children:D("tr",{children:[s("td",{children:"JavaScript"}),s("td",{children:e}),s("td",{children:t}),s("td",{children:n.toDateString()})]})})]})}const Fh=`import React from "react";

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TypeScript</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{dateOfBirth.toDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,Mh=`import React from "react";

function User({ firstName, lastName, dateOfBirth }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JavaScript</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{dateOfBirth.toDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,Ih=`import React, { ReactNode } from "react";

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps): ReactNode {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TypeScript</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{dateOfBirth.toDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`;function ke({input1:e,input2:t}){return C.useEffect(()=>{Prism.highlightAll()},[e,t]),t?D("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[s("pre",{className:"language-jsx",style:{flex:"1",minWidth:"600px"},children:s("code",{className:"language-jsx",children:e})}),s("pre",{className:"language-jsx",style:{flex:"1",minWidth:"600px"},children:s("code",{className:"language-jsx",children:t})})]}):s("div",{children:s("pre",{className:"language-jsx",children:s("code",{className:"language-jsx",children:e})})})}function jh(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}}const $h={popover:{position:"absolute",width:900,transform:"translate(-450px, -100%)"}},Ah=({children:e,coords:t,updateTooltipCoords:n,tooltipRef:r,title:l})=>{const o=jh(n,100);return C.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]),s("div",{style:{...$h.popover,...t},className:"ant-popover ant-popover-placement-top",ref:r,children:D("div",{className:"ant-popover-content",children:[s("div",{className:"ant-popover-arrow"}),s("div",{className:"ant-popover-inner",role:"tooltip",children:s("div",{children:s("div",{className:"ant-popover-inner-content",children:e})})})]})})},Wh=({children:e})=>{const t=document.getElementById("portal-root"),n=document.createElement("div");return C.useEffect(()=>(t.appendChild(n),()=>t.removeChild(n)),[n,t]),el.createPortal(e,n)};function Vh(e,t,n){C.useEffect(()=>{function r(l){t.current&&!t.current.contains(l.target)&&n&&!n.current.contains(l.target)&&e()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t,n])}const Hh=({ifoRef:e,...t})=>s("div",{className:"info",ref:e,...t,children:s("small",{className:"infoIcon",children:"i"})}),Qh=({children:e,title:t})=>{const[n,r]=C.useState(!1),[l,o]=C.useState({}),i=C.useRef(),u=C.useRef();Vh(()=>r(!1),u,i);const a=c=>{const h=c.getBoundingClientRect();o({left:h.x+h.width/2,top:h.y+window.scrollY-10})};return D("div",{className:"ml-1",children:[s(Hh,{ifoRef:i,onClick:c=>{a(c.target),r(!n)}}),n&&s(Wh,{children:s(Ah,{coords:l,tooltipRef:u,title:t,updateTooltipCoords:()=>a(btnRef.current.buttonNode),children:s("div",{children:e})})})]})},Jh=()=>D("div",{className:"flex",children:[s("h3",{children:"Reminder"}),s(Qh,{title:"Info",children:s("div",{children:D("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[D("li",{children:["ReactElement - ",s("code",{children:"interface ReactElement<P, T>"}),s("br",{}),"A ReactElement is an object with ",s("code",{children:"type: T"}),", ",s("code",{children:"props: P"}),", and key ",s("code",{children:"key: string | number | null"})," attributes."]}),D("li",{children:["JSX.Element - ",s("code",{children:"extends React.ReactElement<any, any>"}),s("br",{}),"A more generic version of ReactElement where props and type are of type ",s("code",{children:"any"})]}),D("li",{children:["ReactNode - ",s("code",{children:"ReactNode = ReactElement | ReactFragment | boolean | null | undefined ...;"}),s("br",{}),"A ReactNode is a ReactElement, a ReactFragment, a string, a number, an array of ReactNodes, null, undefined, or a boolean."]}),D("li",{children:["FC - ",s("code",{children:"type FC<P> = FunctionalComponent<P>"}),s("br",{}),'A type to describe a react functional component that was originally added to "Provides an explicit return type"',s("br",{}),"However, recently it is of many opinions to NOT use it anymore, see ",s("a",{href:"https://github.com/facebook/create-react-app/pull/8177",children:"here"})," where it was removed from create react app.",s("br",{}),s(ke,{input1:`const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ } // Without FC             
const Component2: FC<ComponentProps> = (props) => { /*...*/ }          // With FC                 
const Component3 = (props: ComponentProps): => { /*...*/ }             // Today with type inference`})]})]})})})]});function Ql({newSyntax:e,setNewSyntax:t}){const n=C.useRef();return C.useEffect(()=>{const r=()=>{window.pageYOffset>470?(console.log(window.pageYOffset),n.current.classList.add("sticky")):n.current.classList.remove("sticky")};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},[]),D("div",{style:{display:"flex",width:"100%"},ref:n,children:[s("h2",{style:{width:"100%"},children:"JavaScript"}),D("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[s("div",{style:{position:"absolute",left:"0px",display:"flex",alignItems:"center"},children:s(Jh,{})}),s("h2",{children:"TypeScript"}),D("div",{style:{position:"absolute",right:"0px",display:"flex",alignItems:"center"},children:[s("strong",{children:"Verbose"}),D("label",{className:"switch",children:[s("input",{type:"checkbox",checked:e,onChange:r=>t(r.target.checked)}),s("span",{className:"slider round"})]}),s("strong",{children:"Simple"})]})]})]})}function Kh(){const[e,t]=C.useState(!1);return D(kn,{children:[s(Uh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),s(zh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),s(Ql,{newSyntax:e,setNewSyntax:t}),s(ke,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),s("br",{}),s(ke,{input1:Mh,input2:e?Fh:Ih})]})}const $r=({children:e})=>s("td",{children:e});function Yh({firstName:e,lastName:t,dateOfBirth:n}){return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"})]})}),s("tbody",{children:D("tr",{children:[s($r,{children:"TypeScript"}),s($r,{children:e}),s($r,{children:t}),s($r,{children:n.toDateString()})]})})]})}const Ar=({children:e})=>s("td",{children:e});function Xh({firstName:e,lastName:t,dateOfBirth:n}){return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"})]})}),s("tbody",{children:D("tr",{children:[s(Ar,{children:"JavaScript"}),s(Ar,{children:e}),s(Ar,{children:t}),s(Ar,{children:n.toDateString()})]})})]})}const Gh=`import React, { ReactNode } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,Zh=`import React from "react";

const TableData = ({ children }) => {
  return <td>{children}</td>;
};

function User({ firstName, lastName, dateOfBirth }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>JavaScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,qh=`import React, { FC, ReactNode } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td>{children}</td>;
};

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps): ReactNode {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`;function bh(){const[e,t]=C.useState(!1);return D(kn,{children:[s(Xh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),s(Yh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),s(Ql,{newSyntax:e,setNewSyntax:t}),s(ke,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),s("br",{}),s(ke,{input1:Zh,input2:e?Gh:qh})]})}const Wt=({children:e})=>s("td",{children:e}),em=e=>e+1;function tm({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=C.useState(0),o=()=>{l(i=>em(i))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"})]})}),s("tbody",{children:D("tr",{children:[s(Wt,{children:"TypeScript"}),s(Wt,{children:e}),s(Wt,{children:t}),s(Wt,{children:n.toDateString()}),s(Wt,{children:r}),s(Wt,{children:s("button",{onClick:o,children:"Add One"})})]})})]})}const Vt=({children:e})=>s("td",{children:e}),nm=e=>e+1;function rm({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=C.useState(0),o=()=>{l(i=>nm(i))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"})]})}),s("tbody",{children:D("tr",{children:[s(Vt,{children:"JavaScript"}),s(Vt,{children:e}),s(Vt,{children:t}),s(Vt,{children:n.toDateString()}),s(Vt,{children:r}),s(Vt,{children:s("button",{onClick:o,children:"Add One"})})]})})]})}const lm=`import React, { ReactNode, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps) {

  // Note: Look mom ... no types ...
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <button onClick={increment}>
              Add One
            </button>
          </TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,om=`import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

function User({ firstName, lastName, dateOfBirth }) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>JavaScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <button onClick={increment}>
              Add One
            </button>
          </TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,im=`import React, { FC, ReactNode, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td>{children}</td>;
};

const addOne = (v: number): number => {
  return v + 1;
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps): ReactNode {

  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount( (prevCount: number) => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <button onClick={increment}>
              Add One
            </button>
          </TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`;function um(){const[e,t]=C.useState(!1);return D(kn,{children:[s(rm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),s(tm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),s(Ql,{newSyntax:e,setNewSyntax:t}),s(ke,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),s("br",{}),s(ke,{input1:om,input2:e?lm:im})]})}const Et=({children:e})=>s("td",{children:e}),am=e=>e+1,sm=({onClick:e})=>s("button",{onClick:e,style:{backgroundColor:"red"},children:"Add One"});function cm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=C.useState(0),u=()=>{i(a=>am(a))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"}),s("th",{children:"Thing"})]})}),s("tbody",{children:D("tr",{children:[s(Et,{children:"TypeScript"}),s(Et,{children:e}),s(Et,{children:t}),s(Et,{children:n.toDateString()}),s(Et,{children:o}),s(Et,{children:s(l,{onClick:u})}),s(Et,{children:r})]})})]})}const Tt=({children:e})=>s("td",{children:e}),dm=e=>e+1,fm=({onClick:e})=>s("button",{onClick:e,style:{backgroundColor:"blue"},children:"Add One"});function pm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=C.useState(0),u=()=>{i(a=>dm(a))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"Written With"}),s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"}),s("th",{children:"Thing"})]})}),s("tbody",{children:D("tr",{children:[s(Tt,{children:"JavaScript"}),s(Tt,{children:e}),s(Tt,{children:t}),s(Tt,{children:n.toDateString()}),s(Tt,{children:o}),s(Tt,{children:s(l,{onClick:u})}),s(Tt,{children:r})]})})]})}const hm=`import React, { ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
}

export const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button }: UserProps) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
        <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,mm=`import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

export const BlueButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue'}}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button }) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>JavaScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,vm=`import React, { FC, ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td>{children}</td>;
};

const addOne = (v: number): number => {
  return v + 1;
}

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
}

export const RedButton: FC<ButtonProps> = ({ onClick }): JSX.Element => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button }: UserProps): ReactNode {

  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount( (prevCount: number) => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`;function gm(){const[e,t]=C.useState(!1);return D(kn,{children:[s(pm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:fm}),s(cm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:sm}),s(Ql,{newSyntax:e,setNewSyntax:t}),s(ke,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={2}
  Button={BlueButton} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton} />
`}),s("br",{}),s(ke,{input1:mm,input2:e?hm:vm})]})}const Ht=({children:e})=>s("td",{children:e}),ym=e=>e+1,Sm=({color:e,...t})=>s("button",{style:{backgroundColor:"red",color:e},...t,children:"Add One"});function wm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,a]=C.useState(0),c=()=>{a(h=>ym(h))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"}),s("th",{children:"Thing"})]})}),s("tbody",{children:D("tr",{children:[s(Ht,{children:e}),s(Ht,{children:t}),s(Ht,{children:n.toDateString()}),s(Ht,{children:u}),s(Ht,{children:s(l,{onClick:c,disabled:o,color:i})}),s(Ht,{children:r})]})})]})}const Qt=({children:e})=>s("td",{children:e}),km=e=>e+1,Cm=({color:e,...t})=>s("button",{style:{backgroundColor:"blue",color:e},...t,children:"Add One"});function Nm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,a]=C.useState(0),c=()=>{a(h=>km(h))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"}),s("th",{children:"Thing"})]})}),s("tbody",{children:D("tr",{children:[s(Qt,{children:e}),s(Qt,{children:t}),s(Qt,{children:n.toDateString()}),s(Qt,{children:u}),s(Qt,{children:s(l,{onClick:c,disabled:o,color:i})}),s(Qt,{children:r})]})})]})}const Em=`import React, { ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

// Note: we use "type" and we use "&" so we can combine two types
type ButtonProps = { 
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; 

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>; 
  disabled?: boolean;                 // Note: ? means optional
  color: string;
}

export const RedButton = ({ color, ...rest }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: 'red', color }} {...rest}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }: UserProps) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} disabled={disabled} color={color} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,Tm=`import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

export const BlueButton = ({ color, ...rest }) => {
  return (
    <button style={{ backgroundColor: 'blue', color }} {...rest}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} disabled={disabled} color={color} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`;function Dm(){return D(kn,{children:[s(Nm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:Cm,disabled:!0}),s(wm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:Sm,color:"black"}),s(ke,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={2}
  Button={BlueButton} 
  disabled />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton}  
  color="black" 
  />
`}),s("br",{}),s(ke,{input1:Tm,input2:Em})]})}const Jt=({children:e})=>s("td",{children:e}),xm=e=>e+1,Pm=({color:e,...t})=>s("button",{style:{backgroundColor:"red",color:e},...t,children:"Add One"});function Rm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,a]=C.useState(0),c=()=>{a(h=>xm(h))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"}),s("th",{children:"Thing"})]})}),s("tbody",{children:D("tr",{children:[s(Jt,{children:e}),s(Jt,{children:t}),s(Jt,{children:n.toDateString()}),s(Jt,{children:u}),s(Jt,{children:s(l,{onClick:c,disabled:o,color:i})}),s(Jt,{children:r})]})})]})}const Kt=({children:e})=>s("td",{children:e}),_m=e=>e+1,Om=({color:e,...t})=>s("button",{style:{backgroundColor:"blue",color:e},...t,children:"Add One"});function Lm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,a]=C.useState(0),c=()=>{a(h=>_m(h))};return D("table",{children:[s("thead",{children:D("tr",{children:[s("th",{children:"First Name"}),s("th",{children:"Last Name"}),s("th",{children:"Date of Birth"}),s("th",{children:"Count"}),s("th",{children:"Action"}),s("th",{children:"Thing"})]})}),s("tbody",{children:D("tr",{children:[s(Kt,{children:e}),s(Kt,{children:t}),s(Kt,{children:n.toDateString()}),s(Kt,{children:u}),s(Kt,{children:s(l,{onClick:c,disabled:o,color:i})}),s(Kt,{children:r})]})})]})}const Bm=`import React, { ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

type ButtonProps = { 
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; 

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>; 
  disabled?: boolean;                
  color: string;
}

export const RedButton = ({ color, ...rest }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: 'red', color }} {...rest}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }: UserProps) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} disabled={disabled} color={color} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,zm=`import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

export const BlueButton = ({ color, ...rest }) => {
  return (
    <button style={{ backgroundColor: 'blue', color }} {...rest}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} disabled={disabled} color={color} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,Um=({a:e,b:t})=>s("strong",{children:e+t}),Fm=({a:e,b:t})=>s("strong",{children:e-t});function Mm(){return D(kn,{children:[s(Lm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:s(Um,{a:24,b:4}),Button:Om,disabled:!0}),s(Rm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:s(Fm,{a:24,b:4}),Button:Pm,color:"black"}),s(ke,{input1:`
const Sum = ({ a, b }) => {
  return (
    <strong>{a + b}</strong>
  )
} 

const Difference = ({ a, b }) => {
  return (
    <strong>{a - b}</strong>
  )
} 

const Product = ({ a, b }) => {
  return (
    <strong>{a * b}</strong>
  )
} 

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={<Sum a={24} b={4} />} 
  Button={BlueButton} 
  disabled />
`,input2:`// Note: in line type definition
const Sum = ({ a, b }: { a: number, b: number }) => {
  return (
    <strong>{a + b}</strong>
  )
} 

// Note: interface definition
interface MathProps {
  a: number, 
  b: number
}

const Difference = ({ a, b }: MathProps) => {
  return (
    <strong>{a - b}</strong>
  )
} 

const Product = ({ a, b }: MathProps) => {
  return (
    <strong>{a * b}</strong>
  )
} 

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing={<Difference a={24} b={4} />} 
  Button={RedButton}  
  color="black" 
  />
`}),s("br",{}),s(ke,{input1:zm,input2:Bm})]})}function Im(){C.useState(0);const e=wr().pathname.replace("/","");return D("div",{className:"App",children:[D("nav",{children:[s(At,{to:"v1",children:"V1"}),s(At,{to:"v2",children:"V2"}),s(At,{to:"v3",children:"V3"}),s(At,{to:"v4",children:"V4"}),s(At,{to:"v5",children:"V5"}),s(At,{to:"v6",children:"V6"})]}),D("main",{children:[D("h1",{children:["Why Not Typescript ",e]}),D(Dh,{children:[s(et,{path:"/",element:s(Eh,{to:"v1"})}),s(et,{path:"v1",element:s(Kh,{})}),s(et,{path:"v2",element:s(bh,{})}),s(et,{path:"v3",element:s(um,{})}),s(et,{path:"v4",element:s(gm,{})}),s(et,{path:"v5",element:s(Dm,{})}),s(et,{path:"v6",element:s(Mm,{})})]})]})]})}To.createRoot(document.getElementById("root")).render(s(Ha.StrictMode,{children:D(Oh,{children:[s("div",{id:"portal-root"}),s(Im,{})]})}));
