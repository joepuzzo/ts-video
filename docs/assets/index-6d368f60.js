function ud(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qn={},cd={get exports(){return qn},set exports(e){qn=e}},Ol={},w={},dd={get exports(){return w},set exports(e){w=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),fd=Symbol.for("react.portal"),pd=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),wd=Symbol.for("react.memo"),kd=Symbol.for("react.lazy"),Ta=Symbol.iterator;function Nd(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Vu={};function kn(e,t,n){this.props=e,this.context=t,this.refs=Vu,this.updater=n||Au}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hu(){}Hu.prototype=kn.prototype;function Di(e,t,n){this.props=e,this.context=t,this.refs=Vu,this.updater=n||Au}var xi=Di.prototype=new Hu;xi.constructor=Di;Wu(xi,kn.prototype);xi.isPureReactComponent=!0;var Da=Array.isArray,Qu=Object.prototype.hasOwnProperty,Ei={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Qu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:gr,type:e,key:o,ref:i,props:l,_owner:Ei.current}}function Cd(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pi(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function Td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xa=/\/+/g;function Gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Td(""+e.key):t.toString(36)}function Qr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case gr:case fd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Gl(i,0):r,Da(l)?(n="",e!=null&&(n=e.replace(xa,"$&/")+"/"),Qr(l,t,n,"",function(c){return c})):l!=null&&(Pi(l)&&(l=Cd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(xa,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Da(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Gl(o,a);i+=Qr(o,t,n,s,l)}else if(s=Nd(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Gl(o,a++),i+=Qr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function xr(e,t,n){if(e==null)return e;var r=[],l=0;return Qr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Dd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Jr={transition:null},xd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:Ei};L.Children={map:xr,forEach:function(e,t,n){xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xr(e,function(){t++}),t},toArray:function(e){return xr(e,function(t){return t})||[]},only:function(e){if(!Pi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=kn;L.Fragment=pd;L.Profiler=md;L.PureComponent=Di;L.StrictMode=hd;L.Suspense=Sd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ei.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Qu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:gr,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};L.createElement=Ku;L.createFactory=function(e){var t=Ku.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:gd,render:e}};L.isValidElement=Pi;L.lazy=function(e){return{$$typeof:kd,_payload:{_status:-1,_result:e},_init:Dd}};L.memo=function(e,t){return{$$typeof:wd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(dd);const Ri=sd(w),xo=ud({__proto__:null,default:Ri},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=w,Pd=Symbol.for("react.element"),Rd=Symbol.for("react.fragment"),Od=Object.prototype.hasOwnProperty,Bd=Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_d={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Od.call(t,r)&&!_d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Pd,type:e,key:o,ref:i,props:l,_owner:Bd.current}}Ol.Fragment=Rd;Ol.jsx=bu;Ol.jsxs=bu;(function(e){e.exports=Ol})(cd);const Nn=qn.Fragment,u=qn.jsx,k=qn.jsxs;var Eo={},rl={},Ld={get exports(){return rl},set exports(e){rl=e}},Ce={},Po={},Ud={get exports(){return Po},set exports(e){Po=e}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,B){var _=x.length;x.push(B);e:for(;0<_;){var J=_-1>>>1,Z=x[J];if(0<l(Z,B))x[J]=B,x[_]=Z,_=J;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var B=x[0],_=x.pop();if(_!==B){x[0]=_;e:for(var J=0,Z=x.length,Tr=Z>>>1;J<Tr;){var Nt=2*(J+1)-1,Yl=x[Nt],Ct=Nt+1,Dr=x[Ct];if(0>l(Yl,_))Ct<Z&&0>l(Dr,Yl)?(x[J]=Dr,x[Ct]=_,J=Ct):(x[J]=Yl,x[Nt]=_,J=Nt);else if(Ct<Z&&0>l(Dr,_))x[J]=Dr,x[Ct]=_,J=Ct;else break e}}return B}function l(x,B){var _=x.sortIndex-B.sortIndex;return _!==0?_:x.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,v=null,m=3,N=!1,C=!1,g=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(x){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=x)r(c),B.sortIndex=B.expirationTime,t(s,B);else break;B=n(c)}}function y(x){if(g=!1,p(x),!C)if(n(s)!==null)C=!0,bl(D);else{var B=n(c);B!==null&&Xl(y,B.startTime-x)}}function D(x,B){C=!1,g&&(g=!1,f(R),R=-1),N=!0;var _=m;try{for(p(B),v=n(s);v!==null&&(!(v.expirationTime>B)||x&&!Be());){var J=v.callback;if(typeof J=="function"){v.callback=null,m=v.priorityLevel;var Z=J(v.expirationTime<=B);B=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===n(s)&&r(s),p(B)}else r(s);v=n(s)}if(v!==null)var Tr=!0;else{var Nt=n(c);Nt!==null&&Xl(y,Nt.startTime-B),Tr=!1}return Tr}finally{v=null,m=_,N=!1}}var E=!1,P=null,R=-1,Q=5,U=-1;function Be(){return!(e.unstable_now()-U<Q)}function On(){if(P!==null){var x=e.unstable_now();U=x;var B=!0;try{B=P(!0,x)}finally{B?Bn():(E=!1,P=null)}}else E=!1}var Bn;if(typeof d=="function")Bn=function(){d(On)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,ad=Ca.port2;Ca.port1.onmessage=On,Bn=function(){ad.postMessage(null)}}else Bn=function(){O(On,0)};function bl(x){P=x,E||(E=!0,Bn())}function Xl(x,B){R=O(function(){x(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){C||N||(C=!0,bl(D))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var _=m;m=B;try{return x()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,B){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var _=m;m=x;try{return B()}finally{m=_}},e.unstable_scheduleCallback=function(x,B,_){var J=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?J+_:J):_=J,x){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,x={id:h++,callback:B,priorityLevel:x,startTime:_,expirationTime:Z,sortIndex:-1},_>J?(x.sortIndex=_,t(c,x),n(s)===null&&x===n(c)&&(g?(f(R),R=-1):g=!0,Xl(y,_-J))):(x.sortIndex=Z,t(s,x),C||N||(C=!0,bl(D))),x},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(x){var B=m;return function(){var _=m;m=B;try{return x.apply(this,arguments)}finally{m=_}}}})(Xu);(function(e){e.exports=Xu})(Ud);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=w,ke=Po;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gu=new Set,er={};function $t(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(er[e]=t,e=0;e<t.length;e++)Gu.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ea={},Pa={};function Fd(e){return Ro.call(Pa,e)?!0:Ro.call(Ea,e)?!1:zd.test(e)?Pa[e]=!0:(Ea[e]=!0,!1)}function Md(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Id(e,t,n,r){if(t===null||typeof t>"u"||Md(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oi=/[\-:]([a-z])/g;function Bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oi,Bi);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oi,Bi);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oi,Bi);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function _i(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Id(t,n,l,r)&&(n=null),r||l===null?Fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Li=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),Zu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),Ui=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),_o=Symbol.for("react.suspense_list"),zi=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),es=Symbol.for("react.offscreen"),Ra=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Zl;function $n(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var ql=!1;function eo(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function jd(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function Lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Xt:return"Portal";case Oo:return"Profiler";case Li:return"StrictMode";case Bo:return"Suspense";case _o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qu:return(e.displayName||"Context")+".Consumer";case Zu:return(e._context.displayName||"Context")+".Provider";case Ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zi:return t=e.displayName||null,t!==null?t:Lo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return Lo(e(t))}catch{}}return null}function $d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lo(t);case 8:return t===Li?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ad(e){var t=ts(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Ad(e))}function ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ts(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rs(e,t){t=t.checked,t!=null&&_i(e,"checked",t,!1)}function zo(e,t){rs(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ba(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fo(e,t,n){(t!=="number"||ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _a(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(An(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function ls(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function La(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function os(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?os(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,is=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function as(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=as(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(e,t){if(t){if(Vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,sn=null,cn=null;function Ua(e){if(e=kr(e)){if(typeof Wo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=zl(t),Wo(e.stateNode,e.type,t))}}function ss(e){sn?cn?cn.push(e):cn=[e]:sn=e}function cs(){if(sn){var e=sn,t=cn;if(cn=sn=null,Ua(e),t)for(e=0;e<t.length;e++)Ua(t[e])}}function ds(e,t){return e(t)}function fs(){}var to=!1;function ps(e,t,n){if(to)return e(t,n);to=!0;try{return ds(e,t,n)}finally{to=!1,(sn!==null||cn!==null)&&(fs(),cs())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Vo=!1;if(Xe)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Vo=!1}function Hd(e,t,n,r,l,o,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Qn=!1,ol=null,il=!1,Ho=null,Qd={onError:function(e){Qn=!0,ol=e}};function Jd(e,t,n,r,l,o,i,a,s){Qn=!1,ol=null,Hd.apply(Qd,arguments)}function Kd(e,t,n,r,l,o,i,a,s){if(Jd.apply(this,arguments),Qn){if(Qn){var c=ol;Qn=!1,ol=null}else throw Error(S(198));il||(il=!0,Ho=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function za(e){if(At(e)!==e)throw Error(S(188))}function bd(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return za(l),e;if(o===r)return za(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ms(e){return e=bd(e),e!==null?vs(e):null}function vs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vs(e);if(t!==null)return t;e=e.sibling}return null}var ys=ke.unstable_scheduleCallback,Fa=ke.unstable_cancelCallback,Xd=ke.unstable_shouldYield,Yd=ke.unstable_requestPaint,K=ke.unstable_now,Gd=ke.unstable_getCurrentPriorityLevel,Mi=ke.unstable_ImmediatePriority,gs=ke.unstable_UserBlockingPriority,al=ke.unstable_NormalPriority,Zd=ke.unstable_LowPriority,Ss=ke.unstable_IdlePriority,Bl=null,We=null;function qd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:nf,ef=Math.log,tf=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var Or=64,Br=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Wn(a):(o&=i,o!==0&&(r=Wn(o)))}else i=n&~l,i!==0?r=Wn(i):o!==0&&(r=Wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Fe(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=rf(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ws(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function of(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Ii(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function ks(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ns,ji,Cs,Ts,Ds,Jo=!1,_r=[],ut=null,st=null,ct=null,rr=new Map,lr=new Map,rt=[],af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function Un(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=kr(t),t!==null&&ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uf(e,t,n,r,l){switch(t){case"focusin":return ut=Un(ut,e,t,n,r,l),!0;case"dragenter":return st=Un(st,e,t,n,r,l),!0;case"mouseover":return ct=Un(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return rr.set(o,Un(rr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,lr.set(o,Un(lr.get(o)||null,e,t,n,r,l)),!0}return!1}function xs(e){var t=Ot(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=hs(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Cs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ko(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ao=r,n.target.dispatchEvent(r),Ao=null}else return t=kr(n),t!==null&&ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Ia(e,t,n){Kr(e)&&n.delete(t)}function sf(){Jo=!1,ut!==null&&Kr(ut)&&(ut=null),st!==null&&Kr(st)&&(st=null),ct!==null&&Kr(ct)&&(ct=null),rr.forEach(Ia),lr.forEach(Ia)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,sf)))}function or(e){function t(l){return zn(l,e)}if(0<_r.length){zn(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&zn(ut,e),st!==null&&zn(st,e),ct!==null&&zn(ct,e),rr.forEach(t),lr.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)xs(n),n.blockedOn===null&&rt.shift()}var dn=qe.ReactCurrentBatchConfig,sl=!0;function cf(e,t,n,r){var l=F,o=dn.transition;dn.transition=null;try{F=1,$i(e,t,n,r)}finally{F=l,dn.transition=o}}function df(e,t,n,r){var l=F,o=dn.transition;dn.transition=null;try{F=4,$i(e,t,n,r)}finally{F=l,dn.transition=o}}function $i(e,t,n,r){if(sl){var l=Ko(e,t,n,r);if(l===null)po(e,t,r,cl,n),Ma(e,r);else if(uf(l,e,t,n,r))r.stopPropagation();else if(Ma(e,r),t&4&&-1<af.indexOf(e)){for(;l!==null;){var o=kr(l);if(o!==null&&Ns(o),o=Ko(e,t,n,r),o===null&&po(e,t,r,cl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var cl=null;function Ko(e,t,n,r){if(cl=null,e=Fi(r),e=Ot(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function Es(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gd()){case Mi:return 1;case gs:return 4;case al:case Zd:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var ot=null,Ai=null,br=null;function Ps(){if(br)return br;var e,t=Ai,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return br=l.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function ja(){return!1}function Te(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Lr:ja,this.isPropagationStopped=ja,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Te(Cn),wr=V({},Cn,{view:0,detail:0}),ff=Te(wr),ro,lo,Fn,_l=V({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(ro=e.screenX-Fn.screenX,lo=e.screenY-Fn.screenY):lo=ro=0,Fn=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),$a=Te(_l),pf=V({},_l,{dataTransfer:0}),hf=Te(pf),mf=V({},wr,{relatedTarget:0}),oo=Te(mf),vf=V({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=Te(vf),gf=V({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=Te(gf),wf=V({},Cn,{data:0}),Aa=Te(wf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function Vi(){return Tf}var Df=V({},wr,{key:function(e){if(e.key){var t=kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=Te(Df),Ef=V({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=Te(Ef),Pf=V({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),Rf=Te(Pf),Of=V({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=Te(Of),_f=V({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=Te(_f),Uf=[9,13,27,32],Hi=Xe&&"CompositionEvent"in window,Jn=null;Xe&&"documentMode"in document&&(Jn=document.documentMode);var zf=Xe&&"TextEvent"in window&&!Jn,Rs=Xe&&(!Hi||Jn&&8<Jn&&11>=Jn),Va=String.fromCharCode(32),Ha=!1;function Os(e,t){switch(e){case"keyup":return Uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Ff(e,t){switch(e){case"compositionend":return Bs(t);case"keypress":return t.which!==32?null:(Ha=!0,Va);case"textInput":return e=t.data,e===Va&&Ha?null:e;default:return null}}function Mf(e,t){if(Gt)return e==="compositionend"||!Hi&&Os(e,t)?(e=Ps(),br=Ai=ot=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rs&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function _s(e,t,n,r){ss(r),t=dl(t,"onChange"),0<t.length&&(n=new Wi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,ir=null;function jf(e){Vs(e,0)}function Ll(e){var t=en(e);if(ns(t))return e}function $f(e,t){if(e==="change")return t}var Ls=!1;if(Xe){var io;if(Xe){var ao="oninput"in document;if(!ao){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),ao=typeof Ja.oninput=="function"}io=ao}else io=!1;Ls=io&&(!document.documentMode||9<document.documentMode)}function Ka(){Kn&&(Kn.detachEvent("onpropertychange",Us),ir=Kn=null)}function Us(e){if(e.propertyName==="value"&&Ll(ir)){var t=[];_s(t,ir,e,Fi(e)),ps(jf,t)}}function Af(e,t,n){e==="focusin"?(Ka(),Kn=t,ir=n,Kn.attachEvent("onpropertychange",Us)):e==="focusout"&&Ka()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(ir)}function Vf(e,t){if(e==="click")return Ll(t)}function Hf(e,t){if(e==="input"||e==="change")return Ll(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Qf;function ar(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ro.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,t){var n=ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fs(){for(var e=window,t=ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function Qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jf(e){var t=Fs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zs(n.ownerDocument.documentElement,n)){if(r!==null&&Qi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Xa(n,o);var i=Xa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=Xe&&"documentMode"in document&&11>=document.documentMode,Zt=null,bo=null,bn=null,Xo=!1;function Ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xo||Zt==null||Zt!==ll(r)||(r=Zt,"selectionStart"in r&&Qi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&ar(bn,r)||(bn=r,r=dl(bo,"onSelect"),0<r.length&&(t=new Wi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},uo={},Ms={};Xe&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Ul(e){if(uo[e])return uo[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ms)return uo[e]=t[n];return e}var Is=Ul("animationend"),js=Ul("animationiteration"),$s=Ul("animationstart"),As=Ul("transitionend"),Ws=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Ws.set(e,t),$t(t,[e])}for(var so=0;so<Ga.length;so++){var co=Ga[so],bf=co.toLowerCase(),Xf=co[0].toUpperCase()+co.slice(1);St(bf,"on"+Xf)}St(Is,"onAnimationEnd");St(js,"onAnimationIteration");St($s,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(As,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function Za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kd(r,t,void 0,e),e.currentTarget=null}function Vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;Za(l,a,c),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;Za(l,a,c),o=s}}}if(il)throw e=Ho,il=!1,Ho=null,e}function I(e,t){var n=t[ei];n===void 0&&(n=t[ei]=new Set);var r=e+"__bubble";n.has(r)||(Hs(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),Hs(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[zr]){e[zr]=!0,Gu.forEach(function(n){n!=="selectionchange"&&(Yf.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,fo("selectionchange",!1,t))}}function Hs(e,t,n,r){switch(Es(t)){case 1:var l=cf;break;case 4:l=df;break;default:l=$i}n=l.bind(null,t,n,e),l=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function po(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Ot(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}ps(function(){var c=o,h=Fi(n),v=[];e:{var m=Ws.get(e);if(m!==void 0){var N=Wi,C=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":N=xf;break;case"focusin":C="focus",N=oo;break;case"focusout":C="blur",N=oo;break;case"beforeblur":case"afterblur":N=oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Rf;break;case Is:case js:case $s:N=yf;break;case As:N=Bf;break;case"scroll":N=ff;break;case"wheel":N=Lf;break;case"copy":case"cut":case"paste":N=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Wa}var g=(t&4)!==0,O=!g&&e==="scroll",f=g?m!==null?m+"Capture":null:m;g=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=nr(d,f),y!=null&&g.push(sr(d,y,p)))),O)break;d=d.return}0<g.length&&(m=new N(m,C,null,n,h),v.push({event:m,listeners:g}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",m&&n!==Ao&&(C=n.relatedTarget||n.fromElement)&&(Ot(C)||C[Ye]))break e;if((N||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,N?(C=n.relatedTarget||n.toElement,N=c,C=C?Ot(C):null,C!==null&&(O=At(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(N=null,C=c),N!==C)){if(g=$a,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Wa,y="onPointerLeave",f="onPointerEnter",d="pointer"),O=N==null?m:en(N),p=C==null?m:en(C),m=new g(y,d+"leave",N,n,h),m.target=O,m.relatedTarget=p,y=null,Ot(h)===c&&(g=new g(f,d+"enter",C,n,h),g.target=p,g.relatedTarget=O,y=g),O=y,N&&C)t:{for(g=N,f=C,d=0,p=g;p;p=Vt(p))d++;for(p=0,y=f;y;y=Vt(y))p++;for(;0<d-p;)g=Vt(g),d--;for(;0<p-d;)f=Vt(f),p--;for(;d--;){if(g===f||f!==null&&g===f.alternate)break t;g=Vt(g),f=Vt(f)}g=null}else g=null;N!==null&&qa(v,m,N,g,!1),C!==null&&O!==null&&qa(v,O,C,g,!0)}}e:{if(m=c?en(c):window,N=m.nodeName&&m.nodeName.toLowerCase(),N==="select"||N==="input"&&m.type==="file")var D=$f;else if(Qa(m))if(Ls)D=Hf;else{D=Wf;var E=Af}else(N=m.nodeName)&&N.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=Vf);if(D&&(D=D(e,c))){_s(v,D,n,h);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Fo(m,"number",m.value)}switch(E=c?en(c):window,e){case"focusin":(Qa(E)||E.contentEditable==="true")&&(Zt=E,bo=c,bn=null);break;case"focusout":bn=bo=Zt=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,Ya(v,n,h);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":Ya(v,n,h)}var P;if(Hi)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Gt?Os(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Rs&&n.locale!=="ko"&&(Gt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Gt&&(P=Ps()):(ot=h,Ai="value"in ot?ot.value:ot.textContent,Gt=!0)),E=dl(c,R),0<E.length&&(R=new Aa(R,e,null,n,h),v.push({event:R,listeners:E}),P?R.data=P:(P=Bs(n),P!==null&&(R.data=P)))),(P=zf?Ff(e,n):Mf(e,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(h=new Aa("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:c}),h.data=P))}Vs(v,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=nr(e,n),o!=null&&r.unshift(sr(e,o,l)),o=nr(e,t),o!=null&&r.push(sr(e,o,l))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=nr(n,o),s!=null&&i.unshift(sr(n,s,a))):l||(s=nr(n,o),s!=null&&i.push(sr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Gf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Zf,"")}function Fr(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(S(425))}function fl(){}var Yo=null,Go=null;function Zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qo=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(tp)}:qo;function tp(e){setTimeout(function(){throw e})}function ho(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);or(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Tn,cr="__reactProps$"+Tn,Ye="__reactContainer$"+Tn,ei="__reactEvents$"+Tn,np="__reactListeners$"+Tn,rp="__reactHandles$"+Tn;function Ot(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[Ae])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function zl(e){return e[cr]||null}var ti=[],tn=-1;function wt(e){return{current:e}}function j(e){0>tn||(e.current=ti[tn],ti[tn]=null,tn--)}function M(e,t){tn++,ti[tn]=e.current,e.current=t}var gt={},ae=wt(gt),me=wt(!1),zt=gt;function mn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function pl(){j(me),j(ae)}function ru(e,t,n){if(ae.current!==gt)throw Error(S(168));M(ae,t),M(me,n)}function Qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,$d(e)||"Unknown",l));return V({},n,r)}function hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,zt=ae.current,M(ae,e),M(me,me.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Qs(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,j(me),j(ae),M(ae,e)):j(me),M(me,n)}var Qe=null,Fl=!1,mo=!1;function Js(e){Qe===null?Qe=[e]:Qe.push(e)}function lp(e){Fl=!0,Js(e)}function kt(){if(!mo&&Qe!==null){mo=!0;var e=0,t=F;try{var n=Qe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,Fl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),ys(Mi,kt),l}finally{F=t,mo=!1}}return null}var nn=[],rn=0,ml=null,vl=0,De=[],xe=0,Ft=null,Je=1,Ke="";function Pt(e,t){nn[rn++]=vl,nn[rn++]=ml,ml=e,vl=t}function Ks(e,t,n){De[xe++]=Je,De[xe++]=Ke,De[xe++]=Ft,Ft=e;var r=Je;e=Ke;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var o=32-Fe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Je=1<<32-Fe(t)+l|n<<l|r,Ke=o+e}else Je=1<<o|n<<l|r,Ke=e}function Ji(e){e.return!==null&&(Pt(e,1),Ks(e,1,0))}function Ki(e){for(;e===ml;)ml=nn[--rn],nn[rn]=null,vl=nn[--rn],nn[rn]=null;for(;e===Ft;)Ft=De[--xe],De[xe]=null,Ke=De[--xe],De[xe]=null,Je=De[--xe],De[xe]=null}var we=null,Se=null,$=!1,ze=null;function bs(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,Se=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Je,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,Se=null,!0):!1;default:return!1}}function ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ri(e){if($){var t=Se;if(t){var n=t;if(!ou(e,t)){if(ni(e))throw Error(S(418));t=dt(n.nextSibling);var r=we;t&&ou(e,t)?bs(r,n):(e.flags=e.flags&-4097|2,$=!1,we=e)}}else{if(ni(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,we=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Mr(e){if(e!==we)return!1;if(!$)return iu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zo(e.type,e.memoizedProps)),t&&(t=Se)){if(ni(e))throw Xs(),Error(S(418));for(;t;)bs(e,t),t=dt(t.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=we?dt(e.stateNode.nextSibling):null;return!0}function Xs(){for(var e=Se;e;)e=dt(e.nextSibling)}function vn(){Se=we=null,$=!1}function bi(e){ze===null?ze=[e]:ze.push(e)}var op=qe.ReactCurrentBatchConfig;function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yl=wt(null),gl=null,ln=null,Xi=null;function Yi(){Xi=ln=gl=null}function Gi(e){var t=yl.current;j(yl),e._currentValue=t}function li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){gl=e,Xi=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Xi!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(gl===null)throw Error(S(308));ln=e,gl.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Bt=null;function Zi(e){Bt===null?Bt=[e]:Bt.push(e)}function Ys(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Zi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,Zi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ii(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sl(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var v=l.baseState;i=0,h=c=s=null,a=o;do{var m=a.lane,N=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:N,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,g=a;switch(m=t,N=n,g.tag){case 1:if(C=g.payload,typeof C=="function"){v=C.call(N,v,m);break e}v=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=g.payload,m=typeof C=="function"?C.call(N,v,m):C,m==null)break e;v=V({},v,m);break e;case 2:nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else N={eventTime:N,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=N,s=v):h=h.next=N,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(h===null&&(s=v),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);It|=i,e.lanes=i,e.memoizedState=v}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Zs=new Yu.Component().refs;function oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ml={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ht(e),o=be(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Yr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ht(e),o=be(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Yr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ht(e),l=be(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Me(t,e,r,n),Yr(t,e,r))}};function su(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(l,o):!0}function qs(e,t,n){var r=!1,l=gt,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(l=ve(t)?zt:ae.current,r=t.contextTypes,o=(r=r!=null)?mn(e,l):gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ml.enqueueReplaceState(t,t.state,null)}function ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Zs,qi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Re(o):(o=ve(t)?zt:ae.current,l.context=mn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ml.enqueueReplaceState(l,l.state,null),Sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;a===Zs&&(a=l.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function du(e){var t=e._init;return t(e._payload)}function ec(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,y){return d===null||d.tag!==6?(d=No(p,f.mode,y),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,y){var D=p.type;return D===Yt?h(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===tt&&du(D)===d.type)?(y=l(d,p.props),y.ref=Mn(f,d,p),y.return=f,y):(y=nl(p.type,p.key,p.props,null,f.mode,y),y.ref=Mn(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Co(p,f.mode,y),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,y,D){return d===null||d.tag!==7?(d=Ut(p,f.mode,y,D),d.return=f,d):(d=l(d,p),d.return=f,d)}function v(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=No(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Er:return p=nl(d.type,d.key,d.props,null,f.mode,p),p.ref=Mn(f,null,d),p.return=f,p;case Xt:return d=Co(d,f.mode,p),d.return=f,d;case tt:var y=d._init;return v(f,y(d._payload),p)}if(An(d)||_n(d))return d=Ut(d,f.mode,p,null),d.return=f,d;Ir(f,d)}return null}function m(f,d,p,y){var D=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return D!==null?null:a(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return p.key===D?s(f,d,p,y):null;case Xt:return p.key===D?c(f,d,p,y):null;case tt:return D=p._init,m(f,d,D(p._payload),y)}if(An(p)||_n(p))return D!==null?null:h(f,d,p,y,null);Ir(f,p)}return null}function N(f,d,p,y,D){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(d,f,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Er:return f=f.get(y.key===null?p:y.key)||null,s(d,f,y,D);case Xt:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,D);case tt:var E=y._init;return N(f,d,p,E(y._payload),D)}if(An(y)||_n(y))return f=f.get(p)||null,h(d,f,y,D,null);Ir(d,y)}return null}function C(f,d,p,y){for(var D=null,E=null,P=d,R=d=0,Q=null;P!==null&&R<p.length;R++){P.index>R?(Q=P,P=null):Q=P.sibling;var U=m(f,P,p[R],y);if(U===null){P===null&&(P=Q);break}e&&P&&U.alternate===null&&t(f,P),d=o(U,d,R),E===null?D=U:E.sibling=U,E=U,P=Q}if(R===p.length)return n(f,P),$&&Pt(f,R),D;if(P===null){for(;R<p.length;R++)P=v(f,p[R],y),P!==null&&(d=o(P,d,R),E===null?D=P:E.sibling=P,E=P);return $&&Pt(f,R),D}for(P=r(f,P);R<p.length;R++)Q=N(P,f,R,p[R],y),Q!==null&&(e&&Q.alternate!==null&&P.delete(Q.key===null?R:Q.key),d=o(Q,d,R),E===null?D=Q:E.sibling=Q,E=Q);return e&&P.forEach(function(Be){return t(f,Be)}),$&&Pt(f,R),D}function g(f,d,p,y){var D=_n(p);if(typeof D!="function")throw Error(S(150));if(p=D.call(p),p==null)throw Error(S(151));for(var E=D=null,P=d,R=d=0,Q=null,U=p.next();P!==null&&!U.done;R++,U=p.next()){P.index>R?(Q=P,P=null):Q=P.sibling;var Be=m(f,P,U.value,y);if(Be===null){P===null&&(P=Q);break}e&&P&&Be.alternate===null&&t(f,P),d=o(Be,d,R),E===null?D=Be:E.sibling=Be,E=Be,P=Q}if(U.done)return n(f,P),$&&Pt(f,R),D;if(P===null){for(;!U.done;R++,U=p.next())U=v(f,U.value,y),U!==null&&(d=o(U,d,R),E===null?D=U:E.sibling=U,E=U);return $&&Pt(f,R),D}for(P=r(f,P);!U.done;R++,U=p.next())U=N(P,f,R,U.value,y),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?R:U.key),d=o(U,d,R),E===null?D=U:E.sibling=U,E=U);return e&&P.forEach(function(On){return t(f,On)}),$&&Pt(f,R),D}function O(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:e:{for(var D=p.key,E=d;E!==null;){if(E.key===D){if(D=p.type,D===Yt){if(E.tag===7){n(f,E.sibling),d=l(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===tt&&du(D)===E.type){n(f,E.sibling),d=l(E,p.props),d.ref=Mn(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Yt?(d=Ut(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=nl(p.type,p.key,p.props,null,f.mode,y),y.ref=Mn(f,d,p),y.return=f,f=y)}return i(f);case Xt:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Co(p,f.mode,y),d.return=f,f=d}return i(f);case tt:return E=p._init,O(f,d,E(p._payload),y)}if(An(p))return C(f,d,p,y);if(_n(p))return g(f,d,p,y);Ir(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=No(p,f.mode,y),d.return=f,f=d),i(f)):n(f,d)}return O}var yn=ec(!0),tc=ec(!1),Nr={},Ve=wt(Nr),dr=wt(Nr),fr=wt(Nr);function _t(e){if(e===Nr)throw Error(S(174));return e}function ea(e,t){switch(M(fr,t),M(dr,e),M(Ve,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}j(Ve),M(Ve,t)}function gn(){j(Ve),j(dr),j(fr)}function nc(e){_t(fr.current);var t=_t(Ve.current),n=Io(t,e.type);t!==n&&(M(dr,e),M(Ve,n))}function ta(e){dr.current===e&&(j(Ve),j(dr))}var A=wt(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=[];function na(){for(var e=0;e<vo.length;e++)vo[e]._workInProgressVersionPrimary=null;vo.length=0}var Gr=qe.ReactCurrentDispatcher,yo=qe.ReactCurrentBatchConfig,Mt=0,W=null,Y=null,q=null,kl=!1,Xn=!1,pr=0,ip=0;function le(){throw Error(S(321))}function ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function la(e,t,n,r,l,o){if(Mt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?cp:dp,e=n(r,l),Xn){o=0;do{if(Xn=!1,pr=0,25<=o)throw Error(S(301));o+=1,q=Y=null,t.updateQueue=null,Gr.current=fp,e=n(r,l)}while(Xn)}if(Gr.current=Nl,t=Y!==null&&Y.next!==null,Mt=0,q=Y=W=null,kl=!1,t)throw Error(S(300));return e}function oa(){var e=pr!==0;return pr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function Oe(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?W.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(S(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function hr(e,t){return typeof t=="function"?t(e):t}function go(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,c=o;do{var h=c.lane;if((Mt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=v,i=r):s=s.next=v,W.lanes|=h,It|=h}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=a,Ie(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,It|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ie(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rc(){}function lc(e,t){var n=W,r=Oe(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,he=!0),r=r.queue,ia(ac.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,mr(9,ic.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(S(349));Mt&30||oc(n,t,l)}return l}function oc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,r){t.value=n,t.getSnapshot=r,uc(t)&&sc(e)}function ac(e,t,n){return n(function(){uc(t)&&sc(e)})}function uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function sc(e){var t=Ge(e,1);t!==null&&Me(t,e,1,-1)}function fu(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,W,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cc(){return Oe().memoizedState}function Zr(e,t,n,r){var l=$e();W.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(Y!==null){var i=Y.memoizedState;if(o=i.destroy,r!==null&&ra(r,i.deps)){l.memoizedState=mr(t,n,o,r);return}}W.flags|=e,l.memoizedState=mr(1|t,n,o,r)}function pu(e,t){return Zr(8390656,8,e,t)}function ia(e,t){return Il(2048,8,e,t)}function dc(e,t){return Il(4,2,e,t)}function fc(e,t){return Il(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,pc.bind(null,t,e),n)}function aa(){}function mc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yc(e,t,n){return Mt&21?(Ie(n,t)||(n=ws(),W.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function ap(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=yo.transition;yo.transition={};try{e(!1),t()}finally{F=n,yo.transition=r}}function gc(){return Oe().memoizedState}function up(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sc(e))wc(t,n);else if(n=Ys(e,t,n,r),n!==null){var l=se();Me(n,e,r,l),kc(n,t,r)}}function sp(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))wc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ie(a,i)){var s=t.interleaved;s===null?(l.next=l,Zi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ys(e,t,l,r),n!==null&&(l=se(),Me(n,e,r,l),kc(n,t,r))}}function Sc(e){var t=e.alternate;return e===W||t!==null&&t===W}function wc(e,t){Xn=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ii(e,n)}}var Nl={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},cp={readContext:Re,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=up.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:aa,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=ap.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=$e();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ee===null)throw Error(S(349));Mt&30||oc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,pu(ac.bind(null,r,o,e),[e]),r.flags|=2048,mr(9,ic.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$e(),t=ee.identifierPrefix;if($){var n=Ke,r=Je;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dp={readContext:Re,useCallback:mc,useContext:Re,useEffect:ia,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:vc,useReducer:go,useRef:cc,useState:function(){return go(hr)},useDebugValue:aa,useDeferredValue:function(e){var t=Oe();return yc(t,Y.memoizedState,e)},useTransition:function(){var e=go(hr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:lc,useId:gc,unstable_isNewReconciler:!1},fp={readContext:Re,useCallback:mc,useContext:Re,useEffect:ia,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:vc,useReducer:So,useRef:cc,useState:function(){return So(hr)},useDebugValue:aa,useDeferredValue:function(e){var t=Oe();return Y===null?t.memoizedState=e:yc(t,Y.memoizedState,e)},useTransition:function(){var e=So(hr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:lc,useId:gc,unstable_isNewReconciler:!1};function Sn(e,t){try{var n="",r=t;do n+=jd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,n){n=be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Tl||(Tl=!0,yi=r),ai(e,t)},n}function Cc(e,t,n){n=be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ai(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ai(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ep.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=be(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var hp=qe.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?tc(t,null,n,r):yn(t,e.child,n,r)}function yu(e,t,n,r,l){n=n.render;var o=t.ref;return fn(t,l),r=la(e,t,n,r,o,l),n=oa(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&n&&Ji(t),t.flags|=1,ue(e,t,r,l),t.child)}function gu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ma(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tc(e,t,o,r,l)):(e=nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(i,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(ar(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return ui(e,t,n,r,l)}function Dc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(an,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(an,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(an,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(an,ge),ge|=r;return ue(e,t,l,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,n,r,l){var o=ve(n)?zt:ae.current;return o=mn(t,o),fn(t,l),n=la(e,t,n,r,o,l),r=oa(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&r&&Ji(t),t.flags|=1,ue(e,t,n,l),t.child)}function Su(e,t,n,r,l){if(ve(n)){var o=!0;hl(t)}else o=!1;if(fn(t,l),t.stateNode===null)qr(e,t),qs(t,n,r),ii(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=ve(n)?zt:ae.current,c=mn(t,c));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&cu(t,i,r,c),nt=!1;var m=t.memoizedState;i.state=m,Sl(t,r,i,l),s=t.memoizedState,a!==r||m!==s||me.current||nt?(typeof h=="function"&&(oi(t,n,h,r),s=t.memoizedState),(a=nt||su(t,n,a,r,m,s,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Gs(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Le(t.type,a),i.props=c,v=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=ve(n)?zt:ae.current,s=mn(t,s));var N=n.getDerivedStateFromProps;(h=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||m!==s)&&cu(t,i,r,s),nt=!1,m=t.memoizedState,i.state=m,Sl(t,r,i,l);var C=t.memoizedState;a!==v||m!==C||me.current||nt?(typeof N=="function"&&(oi(t,n,N,r),C=t.memoizedState),(c=nt||su(t,n,c,r,m,C,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),i.props=r,i.state=C,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return si(e,t,n,r,o,l)}function si(e,t,n,r,l,o){xc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&lu(t,n,!1),Ze(e,t,o);r=t.stateNode,hp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,a,o)):ue(e,t,a,o),t.memoizedState=r.state,l&&lu(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),ea(e,t.containerInfo)}function wu(e,t,n,r,l){return vn(),bi(l),t.flags|=256,ue(e,t,n,r),t.child}var ci={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,n){var r=t.pendingProps,l=A.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(A,l&1),e===null)return ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Al(i,r,0,null),e=Ut(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=di(n),t.memoizedState=ci,e):ua(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return mp(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=mt(a,o):(o=Ut(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?di(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ci,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=Al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jr(e,t,n,r){return r!==null&&bi(r),yn(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(S(422))),jr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Al({mode:"visible",children:r.children},l,0,null),o=Ut(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,i),t.child.memoizedState=di(i),t.memoizedState=ci,o);if(!(t.mode&1))return jr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=wo(o,r,void 0),jr(e,t,i,r)}if(a=(i&e.childLanes)!==0,he||a){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Me(r,e,l,-1))}return ha(),r=wo(Error(S(421))),jr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Pp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=dt(l.nextSibling),we=t,$=!0,ze=null,e!==null&&(De[xe++]=Je,De[xe++]=Ke,De[xe++]=Ft,Je=e.id,Ke=e.overflow,Ft=t),t=ua(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),li(e.return,t,n)}function ko(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Rc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ko(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ko(t,!0,n,null,o);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t,n){switch(t.tag){case 3:Ec(t),vn();break;case 5:nc(t);break;case 1:ve(t.type)&&hl(t);break;case 4:ea(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(yl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Pc(e,t,n):(M(A,A.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);M(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Dc(e,t,n)}return Ze(e,t,n)}var Oc,fi,Bc,_c;Oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fi=function(){};Bc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,_t(Ve.current);var o=null;switch(n){case"input":l=Uo(e,l),r=Uo(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=Mo(e,l),r=Mo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fl)}jo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&I("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};_c=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yp(e,t,n){var r=t.pendingProps;switch(Ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&pl(),oe(t),null;case 3:return r=t.stateNode,gn(),j(me),j(ae),na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(wi(ze),ze=null))),fi(e,t),oe(t),null;case 5:ta(t);var l=_t(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Bc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=_t(Ve.current),Mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[cr]=o,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<Vn.length;l++)I(Vn[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Oa(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":_a(r,o),I("invalid",r)}jo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Fr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Fr(r.textContent,a,e),l=["children",""+a]):er.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&I("scroll",r)}switch(n){case"input":Pr(r),Ba(r,o,!0);break;case"textarea":Pr(r),La(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=os(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ae]=t,e[cr]=r,Oc(e,t,!1,!1),t.stateNode=e;e:{switch(i=$o(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vn.length;l++)I(Vn[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Oa(e,r),l=Uo(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":_a(e,r),l=Mo(e,r),I("invalid",e);break;default:l=r}jo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?us(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&is(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&tr(e,s):typeof s=="number"&&tr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(er.hasOwnProperty(o)?s!=null&&o==="onScroll"&&I("scroll",e):s!=null&&_i(e,o,s,i))}switch(n){case"input":Pr(e),Ba(e,r,!1);break;case"textarea":Pr(e),La(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=_t(fr.current),_t(Ve.current),Mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return oe(t),null;case 13:if(j(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Se!==null&&t.mode&1&&!(t.flags&128))Xs(),vn(),t.flags|=98560,o=!1;else if(o=Mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ae]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else ze!==null&&(wi(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):ha())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return gn(),fi(e,t),e===null&&ur(t.stateNode.containerInfo),oe(t),null;case 10:return Gi(t.type._context),oe(t),null;case 17:return ve(t.type)&&pl(),oe(t),null;case 19:if(j(A),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)In(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=wl(e),i!==null){for(t.flags|=128,In(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>wn&&(t.flags|=128,r=!0,In(o,!1),t.lanes=4194304)}else{if(!r)if(e=wl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!$)return oe(t),null}else 2*K()-o.renderingStartTime>wn&&n!==1073741824&&(t.flags|=128,r=!0,In(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=A.current,M(A,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function gp(e,t){switch(Ki(t),t.tag){case 1:return ve(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),j(me),j(ae),na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ta(t),null;case 13:if(j(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(A),null;case 4:return gn(),null;case 10:return Gi(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var $r=!1,ie=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,T=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function pi(e,t,n){try{n()}catch(r){H(e,t,r)}}var Nu=!1;function wp(e,t){if(Yo=sl,e=Fs(),Qi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,v=e,m=null;t:for(;;){for(var N;v!==n||l!==0&&v.nodeType!==3||(a=i+l),v!==o||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(N=v.firstChild)!==null;)m=v,v=N;for(;;){if(v===e)break t;if(m===n&&++c===l&&(a=i),m===o&&++h===r&&(s=i),(N=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=N}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Go={focusedElem:e,selectionRange:n},sl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var g=C.memoizedProps,O=C.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:Le(t.type,g),O);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return C=Nu,Nu=!1,C}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&pi(t,n,o)}l=l.next}while(l!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lc(e){var t=e.alternate;t!==null&&(e.alternate=null,Lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[cr],delete t[ei],delete t[np],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function Cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fl));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}var te=null,Ue=!1;function et(e,t,n){for(n=n.child;n!==null;)zc(e,t,n),n=n.sibling}function zc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:ie||on(n,t);case 6:var r=te,l=Ue;te=null,et(e,t,n),te=r,Ue=l,te!==null&&(Ue?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ue?(e=te,n=n.stateNode,e.nodeType===8?ho(e.parentNode,n):e.nodeType===1&&ho(e,n),or(e)):ho(te,n.stateNode));break;case 4:r=te,l=Ue,te=n.stateNode.containerInfo,Ue=!0,et(e,t,n),te=r,Ue=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&pi(n,t,i),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!ie&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,et(e,t,n),ie=r):et(e,t,n);break;default:et(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sp),t.forEach(function(r){var l=Rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Ue=!1;break e;case 3:te=a.stateNode.containerInfo,Ue=!0;break e;case 4:te=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(te===null)throw Error(S(160));zc(o,i,l),te=null,Ue=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),je(e),r&4){try{Yn(3,e,e.return),jl(3,e)}catch(g){H(e,e.return,g)}try{Yn(5,e,e.return)}catch(g){H(e,e.return,g)}}break;case 1:_e(t,e),je(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(_e(t,e),je(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var l=e.stateNode;try{tr(l,"")}catch(g){H(e,e.return,g)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&rs(l,o),$o(a,i);var c=$o(a,o);for(i=0;i<s.length;i+=2){var h=s[i],v=s[i+1];h==="style"?us(l,v):h==="dangerouslySetInnerHTML"?is(l,v):h==="children"?tr(l,v):_i(l,h,v,c)}switch(a){case"input":zo(l,o);break;case"textarea":ls(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?un(l,!!o.multiple,N,!1):m!==!!o.multiple&&(o.defaultValue!=null?un(l,!!o.multiple,o.defaultValue,!0):un(l,!!o.multiple,o.multiple?[]:"",!1))}l[cr]=o}catch(g){H(e,e.return,g)}}break;case 6:if(_e(t,e),je(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(g){H(e,e.return,g)}}break;case 3:if(_e(t,e),je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(g){H(e,e.return,g)}break;case 4:_e(t,e),je(e);break;case 13:_e(t,e),je(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(da=K())),r&4&&Tu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||h,_e(t,e),ie=c):_e(t,e),je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(v=T=h;T!==null;){switch(m=T,N=m.child,m.tag){case 0:case 11:case 14:case 15:Yn(4,m,m.return);break;case 1:on(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(g){H(r,n,g)}}break;case 5:on(m,m.return);break;case 22:if(m.memoizedState!==null){xu(v);continue}}N!==null?(N.return=m,T=N):xu(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=as("display",i))}catch(g){H(e,e.return,g)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(g){H(e,e.return,g)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:_e(t,e),je(e),r&4&&Tu(e);break;case 21:break;default:_e(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(tr(l,""),r.flags&=-33);var o=Cu(e);vi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Cu(e);mi(e,a,i);break;default:throw Error(S(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,n){T=e,Mc(e)}function Mc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||$r;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=$r;var c=ie;if($r=i,(ie=s)&&!c)for(T=l;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?Eu(l):s!==null?(s.return=i,T=s):Eu(l);for(;o!==null;)T=o,Mc(o),o=o.sibling;T=l,$r=a,ie=c}Du(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Du(e)}}function Du(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uu(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&or(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||t.flags&512&&hi(t)}catch(m){H(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function xu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Eu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){H(t,l,s)}}var o=t.return;try{hi(t)}catch(s){H(t,o,s)}break;case 5:var i=t.return;try{hi(t)}catch(s){H(t,i,s)}}}catch(s){H(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Np=Math.ceil,Cl=qe.ReactCurrentDispatcher,sa=qe.ReactCurrentOwner,Pe=qe.ReactCurrentBatchConfig,z=0,ee=null,b=null,ne=0,ge=0,an=wt(0),G=0,vr=null,It=0,$l=0,ca=0,Gn=null,pe=null,da=0,wn=1/0,He=null,Tl=!1,yi=null,pt=null,Ar=!1,it=null,Dl=0,Zn=0,gi=null,el=-1,tl=0;function se(){return z&6?K():el!==-1?el:el=K()}function ht(e){return e.mode&1?z&2&&ne!==0?ne&-ne:op.transition!==null?(tl===0&&(tl=ws()),tl):(e=F,e!==0||(e=window.event,e=e===void 0?16:Es(e.type)),e):1}function Me(e,t,n,r){if(50<Zn)throw Zn=0,gi=null,Error(S(185));Sr(e,n,r),(!(z&2)||e!==ee)&&(e===ee&&(!(z&2)&&($l|=n),G===4&&lt(e,ne)),ye(e,r),n===1&&z===0&&!(t.mode&1)&&(wn=K()+500,Fl&&kt()))}function ye(e,t){var n=e.callbackNode;lf(e,t);var r=ul(e,e===ee?ne:0);if(r===0)n!==null&&Fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fa(n),t===1)e.tag===0?lp(Pu.bind(null,e)):Js(Pu.bind(null,e)),ep(function(){!(z&6)&&kt()}),n=null;else{switch(ks(r)){case 1:n=Mi;break;case 4:n=gs;break;case 16:n=al;break;case 536870912:n=Ss;break;default:n=al}n=Qc(n,Ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ic(e,t){if(el=-1,tl=0,z&6)throw Error(S(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=ul(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var l=z;z|=2;var o=$c();(ee!==e||ne!==t)&&(He=null,wn=K()+500,Lt(e,t));do try{Dp();break}catch(a){jc(e,a)}while(1);Yi(),Cl.current=o,z=l,b!==null?t=0:(ee=null,ne=0,t=G)}if(t!==0){if(t===2&&(l=Qo(e),l!==0&&(r=l,t=Si(e,l))),t===1)throw n=vr,Lt(e,0),lt(e,r),ye(e,K()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cp(l)&&(t=xl(e,r),t===2&&(o=Qo(e),o!==0&&(r=o,t=Si(e,o))),t===1))throw n=vr,Lt(e,0),lt(e,r),ye(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Rt(e,pe,He);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=da+500-K(),10<t)){if(ul(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=qo(Rt.bind(null,e,pe,He),t);break}Rt(e,pe,He);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Fe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=qo(Rt.bind(null,e,pe,He),r);break}Rt(e,pe,He);break;case 5:Rt(e,pe,He);break;default:throw Error(S(329))}}}return ye(e,K()),e.callbackNode===n?Ic.bind(null,e):null}function Si(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=xl(e,t),e!==2&&(t=pe,pe=n,t!==null&&wi(t)),e}function wi(e){pe===null?pe=e:pe.push.apply(pe,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~ca,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if(z&6)throw Error(S(327));pn();var t=ul(e,0);if(!(t&1))return ye(e,K()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Qo(e);r!==0&&(t=r,n=Si(e,r))}if(n===1)throw n=vr,Lt(e,0),lt(e,t),ye(e,K()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,pe,He),ye(e,K()),null}function fa(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(wn=K()+500,Fl&&kt())}}function jt(e){it!==null&&it.tag===0&&!(z&6)&&pn();var t=z;z|=1;var n=Pe.transition,r=F;try{if(Pe.transition=null,F=1,e)return e()}finally{F=r,Pe.transition=n,z=t,!(z&6)&&kt()}}function pa(){ge=an.current,j(an)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qf(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:gn(),j(me),j(ae),na();break;case 5:ta(r);break;case 4:gn();break;case 13:j(A);break;case 19:j(A);break;case 10:Gi(r.type._context);break;case 22:case 23:pa()}n=n.return}if(ee=e,b=e=mt(e.current,null),ne=ge=t,G=0,vr=null,ca=$l=It=0,pe=Gn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Bt=null}return e}function jc(e,t){do{var n=b;try{if(Yi(),Gr.current=Nl,kl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}kl=!1}if(Mt=0,q=Y=W=null,Xn=!1,pr=0,sa.current=null,n===null||n.return===null){G=1,vr=t,b=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var N=mu(i);if(N!==null){N.flags&=-257,vu(N,i,a,o,t),N.mode&1&&hu(o,c,t),t=N,s=c;var C=t.updateQueue;if(C===null){var g=new Set;g.add(s),t.updateQueue=g}else C.add(s);break e}else{if(!(t&1)){hu(o,c,t),ha();break e}s=Error(S(426))}}else if($&&a.mode&1){var O=mu(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),vu(O,i,a,o,t),bi(Sn(s,a));break e}}o=s=Sn(s,a),G!==4&&(G=2),Gn===null?Gn=[o]:Gn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Nc(o,s,t);au(o,f);break e;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Cc(o,a,t);au(o,y);break e}}o=o.return}while(o!==null)}Wc(n)}catch(D){t=D,b===n&&n!==null&&(b=n=n.return);continue}break}while(1)}function $c(){var e=Cl.current;return Cl.current=Nl,e===null?Nl:e}function ha(){(G===0||G===3||G===2)&&(G=4),ee===null||!(It&268435455)&&!($l&268435455)||lt(ee,ne)}function xl(e,t){var n=z;z|=2;var r=$c();(ee!==e||ne!==t)&&(He=null,Lt(e,t));do try{Tp();break}catch(l){jc(e,l)}while(1);if(Yi(),z=n,Cl.current=r,b!==null)throw Error(S(261));return ee=null,ne=0,G}function Tp(){for(;b!==null;)Ac(b)}function Dp(){for(;b!==null&&!Xd();)Ac(b)}function Ac(e){var t=Hc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Wc(e):b=t,sa.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,b=null;return}}else if(n=yp(n,t,ge),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);G===0&&(G=5)}function Rt(e,t,n){var r=F,l=Pe.transition;try{Pe.transition=null,F=1,xp(e,t,n,r)}finally{Pe.transition=l,F=r}return null}function xp(e,t,n,r){do pn();while(it!==null);if(z&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(of(e,o),e===ee&&(b=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ar||(Ar=!0,Qc(al,function(){return pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=F;F=1;var a=z;z|=4,sa.current=null,wp(e,n),Fc(n,e),Jf(Go),sl=!!Yo,Go=Yo=null,e.current=n,kp(n),Yd(),z=a,F=i,Pe.transition=o}else e.current=n;if(Ar&&(Ar=!1,it=e,Dl=l),o=e.pendingLanes,o===0&&(pt=null),qd(n.stateNode),ye(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Tl)throw Tl=!1,e=yi,yi=null,e;return Dl&1&&e.tag!==0&&pn(),o=e.pendingLanes,o&1?e===gi?Zn++:(Zn=0,gi=e):Zn=0,kt(),null}function pn(){if(it!==null){var e=ks(Dl),t=Pe.transition,n=F;try{if(Pe.transition=null,F=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,Dl=0,z&6)throw Error(S(331));var l=z;for(z|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(T=c;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Yn(8,h,o)}var v=h.child;if(v!==null)v.return=h,T=v;else for(;T!==null;){h=T;var m=h.sibling,N=h.return;if(Lc(h),h===c){T=null;break}if(m!==null){m.return=N,T=m;break}T=N}}}var C=o.alternate;if(C!==null){var g=C.child;if(g!==null){C.child=null;do{var O=g.sibling;g.sibling=null,g=O}while(g!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(D){H(a,a.return,D)}if(a===i){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(z=l,kt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Bl,e)}catch{}r=!0}return r}finally{F=n,Pe.transition=t}}return!1}function Ru(e,t,n){t=Sn(n,t),t=Nc(e,t,1),e=ft(e,t,1),t=se(),e!==null&&(Sr(e,1,t),ye(e,t))}function H(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=Sn(n,e),e=Cc(t,e,1),t=ft(t,e,1),e=se(),t!==null&&(Sr(t,1,e),ye(t,e));break}}t=t.return}}function Ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(G===4||G===3&&(ne&130023424)===ne&&500>K()-da?Lt(e,0):ca|=n),ye(e,t)}function Vc(e,t){t===0&&(e.mode&1?(t=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):t=1);var n=se();e=Ge(e,t),e!==null&&(Sr(e,t,n),ye(e,n))}function Pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function Rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,vp(e,t,n);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&Ks(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var l=mn(t,ae.current);fn(t,n),l=la(null,t,r,e,l,n);var o=oa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,hl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qi(t),l.updater=Ml,t.stateNode=l,l._reactInternals=t,ii(t,r,e,n),t=si(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ji(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Bp(r),e=Le(r,e),l){case 0:t=ui(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=gu(null,t,r,Le(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ui(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Su(e,t,r,l,n);case 3:e:{if(Ec(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Gs(e,t),Sl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Sn(Error(S(423)),t),t=wu(e,t,r,n,l);break e}else if(r!==l){l=Sn(Error(S(424)),t),t=wu(e,t,r,n,l);break e}else for(Se=dt(t.stateNode.containerInfo.firstChild),we=t,$=!0,ze=null,n=tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=Ze(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return nc(t),e===null&&ri(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Zo(r,l)?i=null:o!==null&&Zo(r,o)&&(t.flags|=32),xc(e,t),ue(e,t,i,n),t.child;case 6:return e===null&&ri(t),null;case 13:return Pc(e,t,n);case 4:return ea(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),yu(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,M(yl,r._currentValue),r._currentValue=i,o!==null)if(Ie(o.value,i)){if(o.children===l.children&&!me.current){t=Ze(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=be(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),li(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),li(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,fn(t,n),l=Re(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),gu(e,t,r,l,n);case 15:return Tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),qr(e,t),t.tag=1,ve(r)?(e=!0,hl(t)):e=!1,fn(t,n),qs(t,r,l),ii(t,r,l,n),si(null,t,r,!0,e,n);case 19:return Rc(e,t,n);case 22:return Dc(e,t,n)}throw Error(S(156,t.tag))};function Qc(e,t){return ys(e,t)}function Op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Op(e,t,n,r)}function ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bp(e){if(typeof e=="function")return ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ui)return 11;if(e===zi)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ma(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Yt:return Ut(n.children,l,o,t);case Li:i=8,l|=8;break;case Oo:return e=Ee(12,n,t,l|2),e.elementType=Oo,e.lanes=o,e;case Bo:return e=Ee(13,n,t,l),e.elementType=Bo,e.lanes=o,e;case _o:return e=Ee(19,n,t,l),e.elementType=_o,e.lanes=o,e;case es:return Al(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zu:i=10;break e;case qu:i=9;break e;case Ui:i=11;break e;case zi:i=14;break e;case tt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ut(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Al(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=es,e.lanes=n,e.stateNode={isHidden:!1},e}function No(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,l,o,i,a,s){return e=new _p(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qi(o),e}function Lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jc(e){if(!e)return gt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ve(n))return Qs(e,n,t)}return t}function Kc(e,t,n,r,l,o,i,a,s){return e=va(n,r,!0,e,l,o,i,a,s),e.context=Jc(null),n=e.current,r=se(),l=ht(n),o=be(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,Sr(e,l,r),ye(e,r),e}function Wl(e,t,n,r){var l=t.current,o=se(),i=ht(l);return n=Jc(n),t.context===null?t.context=n:t.pendingContext=n,t=be(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,i),e!==null&&(Me(e,l,i,o),Yr(e,l,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ya(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Up(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ga(e){this._internalRoot=e}Vl.prototype.render=ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Wl(e,t,null,null)};Vl.prototype.unmount=ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){Wl(null,e,null,null)}),t[Ye]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ts();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&xs(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function zp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=El(i);o.call(c)}}var i=Kc(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=i,e[Ye]=i.current,ur(e.nodeType===8?e.parentNode:e),jt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=El(s);a.call(c)}}var s=va(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=s,e[Ye]=s.current,ur(e.nodeType===8?e.parentNode:e),jt(function(){Wl(t,s,n,r)}),s}function Ql(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=El(i);a.call(s)}}Wl(t,i,e,l)}else i=zp(n,t,e,l,r);return El(i)}Ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Ii(t,n|1),ye(t,K()),!(z&6)&&(wn=K()+500,kt()))}break;case 13:jt(function(){var r=Ge(e,1);if(r!==null){var l=se();Me(r,e,1,l)}}),ya(e,1)}};ji=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=se();Me(t,e,134217728,n)}ya(e,134217728)}};Cs=function(e){if(e.tag===13){var t=ht(e),n=Ge(e,t);if(n!==null){var r=se();Me(n,e,t,r)}ya(e,t)}};Ts=function(){return F};Ds=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Wo=function(e,t,n){switch(t){case"input":if(zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=zl(r);if(!l)throw Error(S(90));ns(r),zo(r,l)}}}break;case"textarea":ls(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};ds=fa;fs=jt;var Fp={usingClientEntryPoint:!1,Events:[kr,en,zl,ss,cs,fa]},jn={findFiberByHostInstance:Ot,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mp={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ms(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Bl=Wr.inject(Mp),We=Wr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(S(200));return Lp(e,t,null,n)};Ce.createRoot=function(e,t){if(!Sa(e))throw Error(S(299));var n=!1,r="",l=bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,ur(e.nodeType===8?e.parentNode:e),new ga(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ms(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return jt(e)};Ce.hydrate=function(e,t,n){if(!Hl(t))throw Error(S(200));return Ql(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Sa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=bc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Kc(t,null,e,1,n??null,l,!1,o,i),e[Ye]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vl(t)};Ce.render=function(e,t,n){if(!Hl(t))throw Error(S(200));return Ql(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(S(40));return e._reactRootContainer?(jt(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Ce.unstable_batchedUpdates=fa;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ql(e,t,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ce})(Ld);var _u=rl;Eo.createRoot=_u.createRoot,Eo.hydrateRoot=_u.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const Lu="popstate";function Ip(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:i,hash:a}=r.location;return ki("",{pathname:o,search:i,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Pl(l)}return $p(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jp(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function ki(e,t,n,r){return n===void 0&&(n=null),yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dn(t):t,{state:n,key:t&&t.key||r||jp()})}function Pl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $p(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,a=at.Pop,s=null,c=h();c==null&&(c=0,i.replaceState(yr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function v(){a=at.Pop;let O=h(),f=O==null?null:O-c;c=O,s&&s({action:a,location:g.location,delta:f})}function m(O,f){a=at.Push;let d=ki(g.location,O,f);n&&n(d,O),c=h()+1;let p=Uu(d,c),y=g.createHref(d);try{i.pushState(p,"",y)}catch{l.location.assign(y)}o&&s&&s({action:a,location:g.location,delta:1})}function N(O,f){a=at.Replace;let d=ki(g.location,O,f);n&&n(d,O),c=h();let p=Uu(d,c),y=g.createHref(d);i.replaceState(p,"",y),o&&s&&s({action:a,location:g.location,delta:0})}function C(O){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof O=="string"?O:Pl(O);return X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let g={get action(){return a},get location(){return e(l,i)},listen(O){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Lu,v),s=O,()=>{l.removeEventListener(Lu,v),s=null}},createHref(O){return t(l,O)},createURL:C,encodeLocation(O){let f=C(O);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:N,go(O){return i.go(O)}};return g}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function Ap(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Dn(t):t,l=Gc(r.pathname||"/",n);if(l==null)return null;let o=Xc(e);Wp(o);let i=null;for(let a=0;i==null&&a<o.length;++a)i=Gp(o[a],eh(l));return i}function Xc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,i,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Xc(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Xp(c,o.index),routesMeta:h})};return e.forEach((o,i)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,i);else for(let s of Yc(o.path))l(o,i,s)}),t}function Yc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=Yc(r.join("/")),a=[];return a.push(...i.map(s=>s===""?o:[o,s].join("/"))),l&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Wp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vp=/^:\w+$/,Hp=3,Qp=2,Jp=1,Kp=10,bp=-2,Fu=e=>e==="*";function Xp(e,t){let n=e.split("/"),r=n.length;return n.some(Fu)&&(r+=bp),t&&(r+=Qp),n.filter(l=>!Fu(l)).reduce((l,o)=>l+(Vp.test(o)?Hp:o===""?Jp:Kp),r)}function Yp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Gp(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",h=Zp({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let v=a.route;o.push({params:r,pathname:vt([l,h.pathname]),pathnameBase:lh(vt([l,h.pathnameBase])),route:v}),h.pathnameBase!=="/"&&(l=vt([l,h.pathnameBase]))}return o}function Zp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=qp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,v)=>{if(h==="*"){let m=a[v]||"";i=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=th(a[v]||"",h),c},{}),pathname:o,pathnameBase:i,pattern:e}}function qp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function eh(e){try{return decodeURI(e)}catch(t){return wa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function th(e,t){try{return decodeURIComponent(e)}catch(n){return wa(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Dn(e):e;return{pathname:n?n.startsWith("/")?n:rh(n,t):t,search:oh(r),hash:ih(l)}}function rh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function To(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Dn(e):(l=yr({},e),X(!l.pathname||!l.pathname.includes("?"),To("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),To("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),To("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,a;if(r||i==null)a=n;else{let v=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),v-=1;l.pathname=m.join("/")}a=v>=0?t[v]:"/"}let s=nh(l,a),c=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),lh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ih=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ah(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uh=["post","put","patch","delete"];[...uh];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(this,arguments)}function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const ch=typeof Object.is=="function"?Object.is:sh,{useState:dh,useEffect:fh,useLayoutEffect:ph,useDebugValue:hh}=xo;function mh(e,t,n){const r=t(),[{inst:l},o]=dh({inst:{value:r,getSnapshot:t}});return ph(()=>{l.value=r,l.getSnapshot=t,Do(l)&&o({inst:l})},[e,r,t]),fh(()=>(Do(l)&&o({inst:l}),e(()=>{Do(l)&&o({inst:l})})),[e]),hh(r),r}function Do(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!ch(n,r)}catch{return!0}}function vh(e,t,n){return t()}const yh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gh=!yh,Sh=gh?vh:mh;"useSyncExternalStore"in xo&&(e=>e.useSyncExternalStore)(xo);const ed=w.createContext(null),ka=w.createContext(null),Jl=w.createContext(null),Kl=w.createContext(null),xn=w.createContext({outlet:null,matches:[]}),td=w.createContext(null);function wh(e,t){let{relative:n}=t===void 0?{}:t;En()||X(!1);let{basename:r,navigator:l}=w.useContext(Jl),{hash:o,pathname:i,search:a}=rd(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:vt([r,i])),l.createHref({pathname:s,search:a,hash:o})}function En(){return w.useContext(Kl)!=null}function Cr(){return En()||X(!1),w.useContext(Kl).location}function nd(){En()||X(!1);let{basename:e,navigator:t}=w.useContext(Jl),{matches:n}=w.useContext(xn),{pathname:r}=Cr(),l=JSON.stringify(Zc(n).map(a=>a.pathnameBase)),o=w.useRef(!1);return w.useEffect(()=>{o.current=!0}),w.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let c=qc(a,JSON.parse(l),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:vt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,l,r])}function rd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(xn),{pathname:l}=Cr(),o=JSON.stringify(Zc(r).map(i=>i.pathnameBase));return w.useMemo(()=>qc(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function kh(e,t){En()||X(!1);let{navigator:n}=w.useContext(Jl),r=w.useContext(ka),{matches:l}=w.useContext(xn),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=Cr(),c;if(t){var h;let g=typeof t=="string"?Dn(t):t;a==="/"||(h=g.pathname)!=null&&h.startsWith(a)||X(!1),c=g}else c=s;let v=c.pathname||"/",m=a==="/"?v:v.slice(a.length)||"/",N=Ap(e,{pathname:m}),C=Dh(N&&N.map(g=>Object.assign({},g,{params:Object.assign({},i,g.params),pathname:vt([a,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:vt([a,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),l,r||void 0);return t&&C?w.createElement(Kl.Provider,{value:{location:Ni({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:at.Pop}},C):C}function Nh(){let e=Rh(),t=ah(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,o)}class Ch extends w.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(xn.Provider,{value:this.props.routeContext},w.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Th(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(ed);return l&&l.static&&l.staticContext&&n.route.errorElement&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(xn.Provider,{value:t},r)}function Dh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,l=n==null?void 0:n.errors;if(l!=null){let o=r.findIndex(i=>i.route.id&&(l==null?void 0:l[i.route.id]));o>=0||X(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,i,a)=>{let s=i.route.id?l==null?void 0:l[i.route.id]:null,c=n?i.route.errorElement||w.createElement(Nh,null):null,h=t.concat(r.slice(0,a+1)),v=()=>w.createElement(Th,{match:i,routeContext:{outlet:o,matches:h}},s?c:i.route.element!==void 0?i.route.element:o);return n&&(i.route.errorElement||a===0)?w.createElement(Ch,{location:n.location,component:c,error:s,children:v(),routeContext:{outlet:null,matches:h}}):v()},null)}var Mu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Mu||(Mu={}));var Rl;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Rl||(Rl={}));function xh(e){let t=w.useContext(ka);return t||X(!1),t}function Eh(e){let t=w.useContext(xn);return t||X(!1),t}function Ph(e){let t=Eh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Rh(){var e;let t=w.useContext(td),n=xh(Rl.UseRouteError),r=Ph(Rl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Oh(e){let{to:t,replace:n,state:r,relative:l}=e;En()||X(!1);let o=w.useContext(ka),i=nd();return w.useEffect(()=>{o&&o.navigation.state!=="idle"||i(t,{replace:n,state:r,relative:l})}),null}function fe(e){X(!1)}function Bh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=at.Pop,navigator:o,static:i=!1}=e;En()&&X(!1);let a=t.replace(/^\/*/,"/"),s=w.useMemo(()=>({basename:a,navigator:o,static:i}),[a,o,i]);typeof r=="string"&&(r=Dn(r));let{pathname:c="/",search:h="",hash:v="",state:m=null,key:N="default"}=r,C=w.useMemo(()=>{let g=Gc(c,a);return g==null?null:{pathname:g,search:h,hash:v,state:m,key:N}},[a,c,h,v,m,N]);return C==null?null:w.createElement(Jl.Provider,{value:s},w.createElement(Kl.Provider,{children:n,value:{location:C,navigationType:l}}))}function ld(e){let{children:t,location:n}=e,r=w.useContext(ed),l=r&&!t?r.router.routes:Ci(t);return kh(l,n)}var Iu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Iu||(Iu={}));new Promise(()=>{});function Ci(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){n.push.apply(n,Ci(r.props.children,t));return}r.type!==fe&&X(!1),!r.props.index||!r.props.children||X(!1);let o=[...t,l],i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=Ci(r.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}function _h(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Lh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uh(e,t){return e.button===0&&(!t||t==="_self")&&!Lh(e)}const zh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Fh(e){let{basename:t,children:n,window:r}=e,l=w.useRef();l.current==null&&(l.current=Ip({window:r,v5Compat:!0}));let o=l.current,[i,a]=w.useState({action:o.action,location:o.location});return w.useLayoutEffect(()=>o.listen(a),[o]),w.createElement(Bh,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o})}const Mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ht=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:a,target:s,to:c,preventScrollReset:h}=t,v=_h(t,zh),m,N=!1;if(Mh&&typeof c=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){m=c;let f=new URL(window.location.href),d=c.startsWith("//")?new URL(f.protocol+c):new URL(c);d.origin===f.origin?c=d.pathname+d.search+d.hash:N=!0}let C=wh(c,{relative:l}),g=Ih(c,{replace:i,state:a,target:s,preventScrollReset:h,relative:l});function O(f){r&&r(f),f.defaultPrevented||g(f)}return w.createElement("a",Ti({},v,{href:m||C,onClick:N||o?r:O,ref:n,target:s}))});var ju;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ju||(ju={}));var $u;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($u||($u={}));function Ih(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:i}=t===void 0?{}:t,a=nd(),s=Cr(),c=rd(e,{relative:i});return w.useCallback(h=>{if(Uh(h,n)){h.preventDefault();let v=r!==void 0?r:Pl(s)===Pl(c);a(e,{replace:v,state:l,preventScrollReset:o,relative:i})}},[s,a,c,r,l,n,e,o,i])}function jh({firstName:e,lastName:t,dateOfBirth:n}){return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:k("tr",{children:[u("td",{children:"TypeScript"}),u("td",{children:e}),u("td",{children:t}),u("td",{children:n.toDateString()})]})})]})}function $h({firstName:e,lastName:t,dateOfBirth:n}){return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:k("tr",{children:[u("td",{children:"JavaScript"}),u("td",{children:e}),u("td",{children:t}),u("td",{children:n.toDateString()})]})})]})}const Ah=`// User.tsx
import React from "react";

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
`,Wh=`// User.jsx
import React from "react";

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
`,Vh=`// User.tsx
import React, { ReactNode } from "react";

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
`,od=Ri.createContext(),Hh=({children:e})=>{const[t,n]=w.useState({visited:{}}),[r,l]=w.useState(!1),i={...t,visit:a=>{n(s=>{const c={...s};return c.visited[a]=!0,c})},lineNumbers:r,setLineNumbers:l};return u(od.Provider,{value:i,children:e})},Na=()=>w.useContext(od),Pn=e=>{const{visit:t,visited:n}=Na(),r=!n[e];return w.useEffect(()=>{t(e)},[]),{firstTime:r}};function Ne({input1:e,input2:t}){const{lineNumbers:n}=Na();if(w.useEffect(()=>{Prism.highlightAll()},[e,t,n]),!t)return u("div",{children:u("pre",{className:"language-jsx",children:u("code",{className:"language-jsx",children:e})})});const r=n?"line-numbers":"";return k("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",width:"100%"},children:[u("pre",{className:`language-jsx ${r}`,style:{flex:"1",minWidth:"600px"},children:u("code",{className:`language-jsx ${r}`,children:e})}),u("pre",{className:`language-jsx ${r}`,style:{flex:"1",minWidth:"600px"},children:u("code",{className:`language-jsx ${r}`,children:t})})]})}function Qh(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}}const Jh={popover:{position:"absolute",width:900,transform:"translate(-450px, -100%)"}},Kh=({children:e,coords:t,updateTooltipCoords:n,tooltipRef:r,title:l})=>{const o=Qh(n,100);return w.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]),u("div",{style:{...Jh.popover,...t},className:"ant-popover ant-popover-placement-top",ref:r,children:k("div",{className:"ant-popover-content",children:[u("div",{className:"ant-popover-arrow"}),u("div",{className:"ant-popover-inner",role:"tooltip",children:u("div",{children:u("div",{className:"ant-popover-inner-content",children:e})})})]})})},bh=({children:e})=>{const t=document.getElementById("portal-root"),n=document.createElement("div");return w.useEffect(()=>(t.appendChild(n),()=>t.removeChild(n)),[n,t]),rl.createPortal(e,n)};function Xh(e,t,n){w.useEffect(()=>{function r(l){t.current&&!t.current.contains(l.target)&&n&&!n.current.contains(l.target)&&e()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t,n])}const id=({ifoRef:e,...t})=>u("div",{className:"info",ref:e,...t,children:u("small",{className:"infoIcon",children:"i"})}),Wt=({children:e,title:t,openOnMount:n})=>{const[r,l]=w.useState(!1),[o,i]=w.useState({}),a=w.useRef(),s=w.useRef(),c=w.useRef(0);Xh(()=>l(!1),s,a);const h=v=>{const m=v.getBoundingClientRect();i({left:m.x+m.width/2-c.current,top:m.y+window.scrollY-10})};return w.useEffect(()=>{n&&(c.current=5,h(a.current),l(!0))},[]),k("div",{className:"ml-1",children:[u(id,{ifoRef:a,onClick:v=>{c.current=0,h(v.target),l(!r)}}),r&&u(bh,{children:u(Kh,{coords:o,tooltipRef:s,title:t,updateTooltipCoords:()=>h(btnRef.current.buttonNode),children:u("div",{children:e})})})]})},Yh=()=>k("div",{className:"flex",children:[u("h3",{children:"Reminder"}),u(Wt,{title:"Info",children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[k("li",{children:["ReactElement - ",u("code",{children:"interface ReactElement<P, T>"}),u("br",{}),"A ReactElement is an object with ",u("code",{children:"type: T"}),", ",u("code",{children:"props: P"}),", and key ",u("code",{children:"key: string | number | null"})," attributes."]}),k("li",{children:["JSX.Element - ",u("code",{children:"extends React.ReactElement<any, any>"}),u("br",{}),"A more generic version of ReactElement where props and type are of type ",u("code",{children:"any"})]}),k("li",{children:["ReactNode - ",u("code",{children:"ReactNode = ReactElement | ReactFragment | boolean | null | undefined ...;"}),u("br",{}),"A ReactNode is a ReactElement, a ReactFragment, a string, a number, an array of ReactNodes, null, undefined, or a boolean."]}),k("li",{children:["FC - ",u("code",{children:"type FC<P> = FunctionalComponent<P>"}),u("br",{}),'A type to describe a react functional component that was originally added to "Provides an explicit return type"',u("br",{}),"However, recently it is of many opinions to NOT use it anymore, see ",u("a",{href:"https://github.com/facebook/create-react-app/pull/8177",children:"here"})," where it was removed from create react app.",u("br",{}),u(Ne,{input1:`const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ } // Without FC             
const Component2: FC<ComponentProps> = (props) => { /*...*/ }          // With FC                 
const Component3 = (props: ComponentProps): => { /*...*/ }             // Today with type inference`})]})]})})})]});function Rn({newSyntax:e,setNewSyntax:t}){const n=w.useRef();return w.useEffect(()=>{const r=()=>{window.pageYOffset>470?n.current.classList.add("sticky"):n.current.classList.remove("sticky")};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},[]),k("div",{style:{display:"flex",width:"100%"},ref:n,children:[u("h2",{style:{width:"100%"},children:"JavaScript"}),k("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[u("div",{style:{position:"absolute",left:"0px",display:"flex",alignItems:"center"},children:u(Yh,{})}),u("h2",{children:"TypeScript"}),k("div",{style:{position:"absolute",right:"0px",display:"flex",alignItems:"center"},children:[u("strong",{children:"Verbose"}),k("label",{className:"switch",children:[u("input",{type:"checkbox",checked:e,onChange:r=>t(r.target.checked)}),u("span",{className:"slider round"})]}),u("strong",{children:"Simple"})]})]})]})}function Gh(){const[e,t]=w.useState(!1);return k(Nn,{children:[u($h,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(jh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Rn,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),u("br",{}),u(Ne,{input1:Wh,input2:e?Ah:Vh})]})}const Vr=({children:e})=>u("td",{className:"td-class",children:e});function Zh({firstName:e,lastName:t,dateOfBirth:n}){return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:k("tr",{children:[u(Vr,{children:"TypeScript"}),u(Vr,{children:e}),u(Vr,{children:t}),u(Vr,{children:n.toDateString()})]})})]})}const Hr=({children:e})=>u("td",{className:"td-class",children:e});function qh({firstName:e,lastName:t,dateOfBirth:n}){return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:k("tr",{children:[u(Hr,{children:"JavaScript"}),u(Hr,{children:e}),u(Hr,{children:t}),u(Hr,{children:n.toDateString()})]})})]})}const em=`// User.tsx
import React, { ReactNode } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
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
`,tm=`// User.jsx
import React from "react";

const TableData = ({ children }) => {
  return <td className="td-class">{children}</td>;
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
`,nm=`// User.tsx
import React, { FC, ReactNode } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td className="td-class">{children}</td>;
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
`;function rm(){const[e,t]=w.useState(!1);return k(Nn,{children:[u(qh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Zh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Rn,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),u("br",{}),u(Ne,{input1:tm,input2:e?em:nm})]})}const Qt=({children:e})=>u("td",{className:"td-class",children:e}),lm=e=>e+1;function om({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=w.useState(0),o=()=>{l(i=>lm(i))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"})]})}),u("tbody",{children:k("tr",{children:[u(Qt,{children:"TypeScript"}),u(Qt,{children:e}),u(Qt,{children:t}),u(Qt,{children:n.toDateString()}),u(Qt,{children:r}),u(Qt,{children:u("button",{onClick:o,children:"Add One"})})]})})]})}const Jt=({children:e})=>u("td",{className:"td-class",children:e}),im=e=>e+1;function am({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=w.useState(0),o=()=>{l(i=>im(i))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"})]})}),u("tbody",{children:k("tr",{children:[u(Jt,{children:"JavaScript"}),u(Jt,{children:e}),u(Jt,{children:t}),u(Jt,{children:n.toDateString()}),u(Jt,{children:r}),u(Jt,{children:u("button",{onClick:o,children:"Add One"})})]})})]})}const um=`// User.tsx
import React, { ReactNode, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
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
`,sm=`// User.jsx
import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td className="td-class">{children}</td>;
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
`,cm=`// User.tsx
import React, { FC, ReactNode, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td className="td-class">{children}</td>;
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
`;function dm(){const[e,t]=w.useState(!1);return k(Nn,{children:[u(am,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(om,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Rn,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),u("br",{}),u(Ne,{input1:sm,input2:e?um:cm})]})}const Kt=({children:e})=>u("td",{className:"td-class",children:e}),fm=e=>e+1;function pm({firstName:e,lastName:t,dateOfBirth:n,Button:r}){const[l,o]=w.useState(0),i=()=>{o(a=>fm(a))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"})]})}),u("tbody",{children:k("tr",{children:[u(Kt,{children:"TypeScript"}),u(Kt,{children:e}),u(Kt,{children:t}),u(Kt,{children:n.toDateString()}),u(Kt,{children:l}),u(Kt,{children:u(r,{onClick:i})})]})})]})}const bt=({children:e})=>u("td",{className:"td-class",children:e}),hm=e=>e+1;function mm({firstName:e,lastName:t,dateOfBirth:n,Button:r}){const[l,o]=w.useState(0),i=()=>{o(a=>hm(a))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"})]})}),u("tbody",{children:k("tr",{children:[u(bt,{children:"JavaScript"}),u(bt,{children:e}),u(bt,{children:t}),u(bt,{children:n.toDateString()}),u(bt,{children:l}),u(bt,{children:u(r,{onClick:i})})]})})]})}const vm=`// User.tsx
import React, { ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  Button: ComponentType<ButtonProps>;
}

function User({ firstName, lastName, dateOfBirth, Button }: UserProps) {

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
            <Button onClick={increment} />
          </TableData> 
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,ym=`// User.jsx
import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td className="td-class">{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

function User({ firstName, lastName, dateOfBirth, Button }) {

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
            <Button onClick={increment} />
          </TableData> 
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,gm=`// User.tsx
import React, { FC, ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td className="td-class">{children}</td>;
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
  Button: ComponentType<ButtonProps>;
}

function User({ firstName, lastName, dateOfBirth, Button }: UserProps): ReactNode {

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
            <Button onClick={increment} />
          </TableData> 
        </tr>
      </tbody>
    </table>
  );
}

export default User;
`,Sm=({onClick:e})=>u("button",{onClick:e,style:{backgroundColor:"blue"},children:"Add One"}),wm=({onClick:e})=>u("button",{onClick:e,style:{backgroundColor:"red"},children:"Add One"});function km(){const[e,t]=w.useState(!1);return k(Nn,{children:[u(mm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),Button:Sm}),u(pm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),Button:wm}),u(Rn,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`import User from "./User";

const BlueButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  Button={BlueButton} />
`,input2:e?`import User, { ButtonProps } from "./User";

const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  Button={RedButton} />
`:`import { FC } from "react";
import User, { ButtonProps } from "./User";

const RedButton: FC<ButtonProps> = ({ onClick }): JSX.Element => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  Button={RedButton} />
`}),u("br",{}),u(Ne,{input1:ym,input2:e?vm:gm})]})}const Tt=({children:e})=>u("td",{className:"td-class",children:e}),Nm=e=>e+1;function Cm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=w.useState(0),a=()=>{i(s=>Nm(s))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:k("tr",{children:[u(Tt,{children:"TypeScript"}),u(Tt,{children:e}),u(Tt,{children:t}),u(Tt,{children:n.toDateString()}),u(Tt,{children:o}),u(Tt,{children:u(l,{onClick:a})}),u(Tt,{children:r})]})})]})}const Dt=({children:e})=>u("td",{className:"td-class",children:e}),Tm=e=>e+1;function Dm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=w.useState(0),a=()=>{i(s=>Tm(s))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:k("tr",{children:[u(Dt,{children:"JavaScript"}),u(Dt,{children:e}),u(Dt,{children:t}),u(Dt,{children:n.toDateString()}),u(Dt,{children:o}),u(Dt,{children:u(l,{onClick:a})}),u(Dt,{children:r})]})})]})}const xm=`// User.tsx
import React, { ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
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
`,Em=`// User.jsx
import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td className="td-class">{children}</td>;
};

const addOne = (v) => {
  return v + 1;
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
`,Pm=`// User.tsx
import React, { FC, ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }): JSX.Element => {
  return <td className="td-class">{children}</td>;
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
`,Rm=({onClick:e})=>u("button",{onClick:e,style:{backgroundColor:"blue"},children:"Add One"}),Om=({onClick:e})=>u("button",{onClick:e,style:{backgroundColor:"red"},children:"Add One"});function Bm(){const[e,t]=w.useState(!1);return k(Nn,{children:[u(Dm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:Rm}),u(Cm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:Om}),u(Rn,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`import User from "./User";

const BlueButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={2}
  Button={BlueButton} />
`,input2:e?`import User, { ButtonProps } from "./User";

const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton} />
`:`import { FC } from "react";
import User, { ButtonProps } from "./User";

const RedButton: FC<ButtonProps> = ({ onClick }): JSX.Element => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton} />
`}),u("br",{}),u(Ne,{input1:Em,input2:e?xm:Pm})]})}const xt=({children:e,color:t})=>u("td",{className:"td-class",style:{color:t},children:e}),_m=e=>e+1;function Lm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[a,s]=w.useState(0),c=()=>{s(h=>_m(h))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:k("tr",{children:[u(xt,{color:i,children:"TypeScript"}),u(xt,{children:e}),u(xt,{children:t}),u(xt,{children:n.toDateString()}),u(xt,{children:a}),u(xt,{children:u(l,{onClick:c,disabled:o,color:i})}),u(xt,{children:r})]})})]})}const Et=({children:e,color:t})=>u("td",{className:"td-class",style:{color:t},children:e}),Um=e=>e+1;function zm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[a,s]=w.useState(0),c=()=>{s(h=>Um(h))};return k("table",{children:[u("thead",{children:k("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:k("tr",{children:[u(Et,{color:i,children:"TypeScript"}),u(Et,{children:e}),u(Et,{children:t}),u(Et,{children:n.toDateString()}),u(Et,{children:a}),u(Et,{children:u(l,{onClick:c,disabled:o,color:i})}),u(Et,{children:r})]})})]})}const Fm=`// User.tsx
import React, { ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
  color?: string;
}

const TableData = ({ children, color }: TableDataProps) => {
  return <td className="td-class" style={{ color }}>{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

// Note: we use "type" and we use "&" so we can combine two types
export type ButtonProps = { 
  color?: string;                     // Note: ? means optional
} & ButtonHTMLAttributes<HTMLButtonElement>; 

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
  disabled?: boolean;                 // Note: ? means optional
  color?: string;                     // Note: ? means optional
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
          <TableData color={color}>TypeScript</TableData>
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
`,Mm=`// User.jsx
import React, { useState } from "react";

const TableData = ({ children, color }) => {
  return <td className="td-class" style={{ color }}>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
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
          <TableData color={color}>TypeScript</TableData>
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
`,Im=`// User.tsx
import React, { FC, ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
  color?: string;
}

const TableData: FC<TableDataProps> = ({ children, color }): JSX.Element => {
  return <td className="td-class" style={{ color }}>{children}</td>;
};

const addOne = (v: number): number => {
  return v + 1;
}

// Note: we use "type" and we use "&" so we can combine two types
export type ButtonProps = { 
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; 

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
  disabled?: boolean;                 // Note: ? means optional
  color?: string;                     // Note: ? means optional
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }: UserProps): ReactNode {

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
          <TableData color={color}>TypeScript</TableData>
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
`,jm=({onClick:e,color:t,disabled:n})=>u("button",{onClick:e,style:{backgroundColor:"blue",color:t},disabled:n,children:"Add One"}),$m=({onClick:e,color:t,disabled:n})=>u("button",{onClick:e,style:{backgroundColor:"red",color:t},disabled:n,children:"Add One"});function Am(){const[e,t]=w.useState(!1);return k(Nn,{children:[u(zm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:jm,disabled:!0,color:"green"}),u(Lm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:$m,disabled:!0,color:"green"}),u(Rn,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`import User from "./User";

const BlueButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'blue', color }} 
      disabled={disabled}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={2}
  Button={BlueButton} 
  disabled 
  color="green"/>
`,input2:e?`import User, { ButtonProps } from "./User";

const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'red', color }} 
      disabled={disabled}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton} 
  disabled 
  color="green"/>
`:`import { FC } from "react";
import User, { ButtonProps } from "./User";

const RedButton: FC<ButtonProps> = ({ onClick, color, disabled  }): JSX.Element => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'red', color }} 
      disabled={disabled}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton}
  disabled 
  color="green"/>
`}),u("br",{}),u(Ne,{input1:Mm,input2:e?Fm:Im})]})}const Wm=()=>{const{firstTime:e}=Pn("v1");return u(Wt,{title:"Info",openOnMount:e,children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[u("li",{children:"Create a user component that shows firstName, lastName, and dateOfBirth. First name and last name are strings, date is a JS date object."}),k("li",{children:["The key difference between the two is that we needed to define ",u("code",{children:"UserProps"})," in the Typescript code"]}),k("li",{children:['Also, take note of the switch toggle "verbose" vs "simple". This will show you two different variations of how things may be typed in the wild. Specifically in this example, note how we have a return type of ',u("code",{children:"ReactNode"})," in verbose but not in simple.",u("br",{}),k("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[k("div",{children:[u("strong",{children:"Note: "}),"Click on the"]}),"Reminder ",u(id,{}),"icon below at any time to help remind yourself how the react types work."]})]})]})})})},Vm=()=>{const{firstTime:e}=Pn("v2");return u(Wt,{title:"Info",openOnMount:e,children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[k("li",{children:["We want to style every ",u("code",{children:"td"}),"(table data) item in our table."]}),k("li",{children:["We could do this by adding ",u("code",{children:'className="td-class"'})," to every ",u("code",{children:"td"})," line."]}),k("li",{children:["A better way is to, create a reusable table data component that adds a class to the ",u("code",{children:"td"})," element."]}),k("li",{children:["Note in the TypeScript code we needed to define ",u("code",{children:"TableDataProps"})]})]})})})},Hm=()=>{const{firstTime:e}=Pn("v3");return u(Wt,{title:"Info",openOnMount:e,children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[u("li",{children:'We want to add a count and "Add One" button action that will increment the count column.'}),k("li",{children:["Note how we added an ",u("code",{children:"addOne"})," helper function outside of the component."]}),u("li",{children:'Also toggle the "verbose" vs "simple" toggle and see how many of the things we write can use type inference.'}),k("li",{children:["Specifically see how the ",u("code",{children:"useState"})," code becomes identical to the pure JS code!"]})]})})})},Qm=()=>{const{firstTime:e}=Pn("v4");return u(Wt,{title:"Info",openOnMount:e,children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[k("li",{children:["Previously we always rendered a simple hard coded button in the action column. Now, we want the ability for the developer to pass in their own ",u("code",{children:"Button"})," component."]}),k("li",{children:["First, note the difference between the JS and TS. In the JS file we just defined our ",u("code",{children:"BlueButton"})," and walla, however for the RedButton in the TS file, we needed to import the ",u("code",{children:"ButtonProps"})," that were defined from the ",u("code",{children:"User.tsx"})," file."]}),k("li",{children:['Next, note the difference between the "verbose" and "simple" implementations. By using type inference and no longer making use of the ',u("code",{children:"FX"})," type, we can greatly simplify the typescript code."]})]})})})},Jm=()=>{const{firstTime:e}=Pn("v5");return u(Wt,{title:"Info",openOnMount:e,children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[k("li",{children:["Previously we allowed the user to pass a ",u("code",{children:"Button"})," to the ",u("code",{children:"User"})," component. Now, we want to allow them to pass some ",u("code",{children:"thing"}),"."]}),u("li",{children:"The difference this time, is that we are going to allow the user to pass any object that can be rendered in react."}),k("li",{children:["Key thing to note is the difference between using ",u("code",{children:"thing: ReactNode;"})," and ",u("code",{children:"Button: ComponentType<ButtonProps>;"})," located in ",u("code",{children:"UserPops"})]})]})})})},Km=()=>{const{firstTime:e}=Pn("v5");return u(Wt,{title:"Info",openOnMount:e,children:u("div",{children:k("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[k("li",{children:["Now we want the user to be able to pass ",u("code",{children:"color"})," and ",u("code",{children:"disabled"})," properties to the user object. In order to achieve this, we must first add the new properties to our ",u("code",{children:"UserProps"}),". Take note how these are optional fields and use the ",u("code",{children:"?"})," syntax."]}),k("li",{children:["Another thing to note here is how instead of defining our own ButtonProps from scratch we made use of defining a new type that combined all ",u("code",{children:"ButtonHTMLAttributes"})," properties with our color property."]}),k("li",{children:["Finally, note how we want to pass color and disabled down to our ",u("code",{children:"Button"})," and also have it be an optional field on our ",u("code",{children:"TableData"}),"So we need to make sure we update both types."]})]})})})},bm=()=>k(ld,{children:[u(fe,{path:"v1",element:u(Wm,{})}),u(fe,{path:"v2",element:u(Vm,{})}),u(fe,{path:"v3",element:u(Hm,{})}),u(fe,{path:"v4",element:u(Qm,{})}),u(fe,{path:"v5",element:u(Jm,{})}),u(fe,{path:"v6",element:u(Km,{})})]});function Xm(){w.useState(0);const e=Cr().pathname.replace("/",""),{lineNumbers:t,setLineNumbers:n}=Na();return k("div",{className:"App",children:[k("nav",{children:[u(Ht,{to:"v1",children:"V1"}),u(Ht,{to:"v2",children:"V2"}),u(Ht,{to:"v3",children:"V3"}),u(Ht,{to:"v4",children:"V4"}),u(Ht,{to:"v5",children:"V5"}),u(Ht,{to:"v6",children:"V6"}),k("div",{style:{position:"absolute",right:"30px",display:"flex",alignItems:"center"},children:[u("strong",{children:"Show Line Numbers"}),k("label",{className:"switch",children:[u("input",{type:"checkbox",checked:t,onChange:r=>n(r.target.checked)}),u("span",{className:"slider round"})]})]})]}),k("main",{children:[k("div",{className:"flex",children:[k("h1",{children:["Why Not Typescript ",e]}),u(bm,{})]}),k(ld,{children:[u(fe,{path:"/",element:u(Oh,{to:"v1"})}),u(fe,{path:"v1",element:u(Gh,{})}),u(fe,{path:"v2",element:u(rm,{})}),u(fe,{path:"v3",element:u(dm,{})}),u(fe,{path:"v4",element:u(km,{})}),u(fe,{path:"v5",element:u(Bm,{})}),u(fe,{path:"v6",element:u(Am,{})})]})]})]})}Eo.createRoot(document.getElementById("root")).render(u(Ri.StrictMode,{children:u(Hh,{children:k(Fh,{basename:"/ts-video",children:[u("div",{id:"portal-root"}),u(Xm,{})]})})}));
