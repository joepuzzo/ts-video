function ud(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gn={},cd={get exports(){return Gn},set exports(e){Gn=e}},Pl={},w={},dd={get exports(){return w},set exports(e){w=e}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),fd=Symbol.for("react.portal"),pd=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),gd=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),wd=Symbol.for("react.memo"),kd=Symbol.for("react.lazy"),Ta=Symbol.iterator;function Nd(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Vu={};function wn(e,t,n){this.props=e,this.context=t,this.refs=Vu,this.updater=n||Au}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hu(){}Hu.prototype=wn.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=Vu,this.updater=n||Au}var Di=xi.prototype=new Hu;Di.constructor=xi;Wu(Di,wn.prototype);Di.isPureReactComponent=!0;var Ea=Array.isArray,Qu=Object.prototype.hasOwnProperty,Pi={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Qu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:mr,type:e,key:o,ref:i,props:l,_owner:Pi.current}}function Cd(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function Td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xa=/\/+/g;function Zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Td(""+e.key):t.toString(36)}function Vr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case mr:case fd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Zl(i,0):r,Ea(l)?(n="",e!=null&&(n=e.replace(xa,"$&/")+"/"),Vr(l,t,n,"",function(c){return c})):l!=null&&(Ri(l)&&(l=Cd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(xa,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ea(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Zl(o,a);i+=Vr(o,t,n,s,l)}else if(s=Nd(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Zl(o,a++),i+=Vr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Tr(e,t,n){if(e==null)return e;var r=[],l=0;return Vr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Ed(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Hr={transition:null},xd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:Pi};B.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!Ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=wn;B.Fragment=pd;B.Profiler=md;B.PureComponent=xi;B.StrictMode=hd;B.Suspense=Sd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Pi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Qu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:mr,type:e.type,key:l,ref:o,props:r,_owner:i}};B.createContext=function(e){return e={$$typeof:gd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};B.createElement=Ku;B.createFactory=function(e){var t=Ku.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:yd,render:e}};B.isValidElement=Ri;B.lazy=function(e){return{$$typeof:kd,_payload:{_status:-1,_result:e},_init:Ed}};B.memo=function(e,t){return{$$typeof:wd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return ce.current.useCallback(e,t)};B.useContext=function(e){return ce.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};B.useEffect=function(e,t){return ce.current.useEffect(e,t)};B.useId=function(){return ce.current.useId()};B.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ce.current.useMemo(e,t)};B.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};B.useRef=function(e){return ce.current.useRef(e)};B.useState=function(e){return ce.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return ce.current.useTransition()};B.version="18.2.0";(function(e){e.exports=B})(dd);const Oi=sd(w),Do=ud({__proto__:null,default:Oi},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=w,Pd=Symbol.for("react.element"),Rd=Symbol.for("react.fragment"),Od=Object.prototype.hasOwnProperty,_d=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ld={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Od.call(t,r)&&!Ld.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Pd,type:e,key:o,ref:i,props:l,_owner:_d.current}}Pl.Fragment=Rd;Pl.jsx=Yu;Pl.jsxs=Yu;(function(e){e.exports=Pl})(cd);const kn=Gn.Fragment,u=Gn.jsx,C=Gn.jsxs;var Po={},tl={},Bd={get exports(){return tl},set exports(e){tl=e}},Ce={},Ro={},zd={get exports(){return Ro},set exports(e){Ro=e}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,_){var L=x.length;x.push(_);e:for(;0<L;){var J=L-1>>>1,b=x[J];if(0<l(b,_))x[J]=_,x[L]=b,L=J;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var _=x[0],L=x.pop();if(L!==_){x[0]=L;e:for(var J=0,b=x.length,Nr=b>>>1;J<Nr;){var Nt=2*(J+1)-1,Gl=x[Nt],Ct=Nt+1,Cr=x[Ct];if(0>l(Gl,L))Ct<b&&0>l(Cr,Gl)?(x[J]=Cr,x[Ct]=L,J=Ct):(x[J]=Gl,x[Nt]=L,J=Nt);else if(Ct<b&&0>l(Cr,L))x[J]=Cr,x[Ct]=L,J=Ct;else break e}}return _}function l(x,_){var L=x.sortIndex-_.sortIndex;return L!==0?L:x.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,v=null,m=3,k=!1,N=!1,y=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(x){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=x)r(c),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(c)}}function g(x){if(y=!1,p(x),!N)if(n(s)!==null)N=!0,Yl(E);else{var _=n(c);_!==null&&Xl(g,_.startTime-x)}}function E(x,_){N=!1,y&&(y=!1,f(R),R=-1),k=!0;var L=m;try{for(p(_),v=n(s);v!==null&&(!(v.expirationTime>_)||x&&!_e());){var J=v.callback;if(typeof J=="function"){v.callback=null,m=v.priorityLevel;var b=J(v.expirationTime<=_);_=e.unstable_now(),typeof b=="function"?v.callback=b:v===n(s)&&r(s),p(_)}else r(s);v=n(s)}if(v!==null)var Nr=!0;else{var Nt=n(c);Nt!==null&&Xl(g,Nt.startTime-_),Nr=!1}return Nr}finally{v=null,m=L,k=!1}}var D=!1,P=null,R=-1,Q=5,z=-1;function _e(){return!(e.unstable_now()-z<Q)}function Dn(){if(P!==null){var x=e.unstable_now();z=x;var _=!0;try{_=P(!0,x)}finally{_?Pn():(D=!1,P=null)}}else D=!1}var Pn;if(typeof d=="function")Pn=function(){d(Dn)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,ad=Ca.port2;Ca.port1.onmessage=Dn,Pn=function(){ad.postMessage(null)}}else Pn=function(){O(Dn,0)};function Yl(x){P=x,D||(D=!0,Pn())}function Xl(x,_){R=O(function(){x(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){N||k||(N=!0,Yl(E))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var L=m;m=_;try{return x()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,_){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=m;m=x;try{return _()}finally{m=L}},e.unstable_scheduleCallback=function(x,_,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,x){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=L+b,x={id:h++,callback:_,priorityLevel:x,startTime:L,expirationTime:b,sortIndex:-1},L>J?(x.sortIndex=L,t(c,x),n(s)===null&&x===n(c)&&(y?(f(R),R=-1):y=!0,Xl(g,L-J))):(x.sortIndex=b,t(s,x),N||k||(N=!0,Yl(E))),x},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(x){var _=m;return function(){var L=m;m=_;try{return x.apply(this,arguments)}finally{m=L}}}})(Xu);(function(e){e.exports=Xu})(zd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=w,ke=Ro;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zu=new Set,Zn={};function It(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)Zu.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Pa={};function Fd(e){return Oo.call(Pa,e)?!0:Oo.call(Da,e)?!1:Ud.test(e)?Pa[e]=!0:(Da[e]=!0,!1)}function Md(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Id(e,t,n,r){if(t===null||typeof t>"u"||Md(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var _i=/[\-:]([a-z])/g;function Li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_i,Li);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_i,Li);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_i,Li);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bi(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Id(t,n,l,r)&&(n=null),r||l===null?Fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Gu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),zi=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),bu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),Ui=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),es=Symbol.for("react.offscreen"),Ra=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,bl;function Mn(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var ql=!1;function eo(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function jd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Yt:return"Portal";case _o:return"Profiler";case zi:return"StrictMode";case Lo:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qu:return(e.displayName||"Context")+".Consumer";case bu:return(e._context.displayName||"Context")+".Provider";case Ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fi:return t=e.displayName||null,t!==null?t:zo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return zo(e(t))}catch{}}return null}function $d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zo(t);case 8:return t===zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ad(e){var t=ts(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Ad(e))}function ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ts(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rs(e,t){t=t.checked,t!=null&&Bi(e,"checked",t,!1)}function Fo(e,t){rs(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(In(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function ls(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function os(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?os(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,is=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function as(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=as(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,t){if(t){if(Vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,un=null,sn=null;function za(e){if(e=yr(e)){if(typeof Vo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Bl(t),Vo(e.stateNode,e.type,t))}}function ss(e){un?sn?sn.push(e):sn=[e]:un=e}function cs(){if(un){var e=un,t=sn;if(sn=un=null,za(e),t)for(e=0;e<t.length;e++)za(t[e])}}function ds(e,t){return e(t)}function fs(){}var to=!1;function ps(e,t,n){if(to)return e(t,n);to=!0;try{return ds(e,t,n)}finally{to=!1,(un!==null||sn!==null)&&(fs(),cs())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ho=!1;if(Xe)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ho=!1}function Hd(e,t,n,r,l,o,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Wn=!1,rl=null,ll=!1,Qo=null,Qd={onError:function(e){Wn=!0,rl=e}};function Jd(e,t,n,r,l,o,i,a,s){Wn=!1,rl=null,Hd.apply(Qd,arguments)}function Kd(e,t,n,r,l,o,i,a,s){if(Jd.apply(this,arguments),Wn){if(Wn){var c=rl;Wn=!1,rl=null}else throw Error(S(198));ll||(ll=!0,Qo=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(jt(e)!==e)throw Error(S(188))}function Yd(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ua(l),e;if(o===r)return Ua(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ms(e){return e=Yd(e),e!==null?vs(e):null}function vs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vs(e);if(t!==null)return t;e=e.sibling}return null}var gs=ke.unstable_scheduleCallback,Fa=ke.unstable_cancelCallback,Xd=ke.unstable_shouldYield,Gd=ke.unstable_requestPaint,K=ke.unstable_now,Zd=ke.unstable_getCurrentPriorityLevel,Ii=ke.unstable_ImmediatePriority,ys=ke.unstable_UserBlockingPriority,ol=ke.unstable_NormalPriority,bd=ke.unstable_LowPriority,Ss=ke.unstable_IdlePriority,Rl=null,We=null;function qd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:nf,ef=Math.log,tf=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var Pr=64,Rr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=jn(a):(o&=i,o!==0&&(r=jn(o)))}else i=n&~l,i!==0?r=jn(i):o!==0&&(r=jn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Fe(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=rf(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ws(){var e=Pr;return Pr<<=1,!(Pr&4194240)&&(Pr=64),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function of(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ji(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function ks(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ns,$i,Cs,Ts,Es,Ko=!1,Or=[],ut=null,st=null,ct=null,er=new Map,tr=new Map,rt=[],af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function _n(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=yr(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uf(e,t,n,r,l){switch(t){case"focusin":return ut=_n(ut,e,t,n,r,l),!0;case"dragenter":return st=_n(st,e,t,n,r,l),!0;case"mouseover":return ct=_n(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return er.set(o,_n(er.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,tr.set(o,_n(tr.get(o)||null,e,t,n,r,l)),!0}return!1}function xs(e){var t=Pt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=hs(n),t!==null){e.blockedOn=t,Es(e.priority,function(){Cs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wo=r,n.target.dispatchEvent(r),Wo=null}else return t=yr(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function Ia(e,t,n){Qr(e)&&n.delete(t)}function sf(){Ko=!1,ut!==null&&Qr(ut)&&(ut=null),st!==null&&Qr(st)&&(st=null),ct!==null&&Qr(ct)&&(ct=null),er.forEach(Ia),tr.forEach(Ia)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,sf)))}function nr(e){function t(l){return Ln(l,e)}if(0<Or.length){Ln(Or[0],e);for(var n=1;n<Or.length;n++){var r=Or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Ln(ut,e),st!==null&&Ln(st,e),ct!==null&&Ln(ct,e),er.forEach(t),tr.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)xs(n),n.blockedOn===null&&rt.shift()}var cn=qe.ReactCurrentBatchConfig,al=!0;function cf(e,t,n,r){var l=F,o=cn.transition;cn.transition=null;try{F=1,Ai(e,t,n,r)}finally{F=l,cn.transition=o}}function df(e,t,n,r){var l=F,o=cn.transition;cn.transition=null;try{F=4,Ai(e,t,n,r)}finally{F=l,cn.transition=o}}function Ai(e,t,n,r){if(al){var l=Yo(e,t,n,r);if(l===null)po(e,t,r,ul,n),Ma(e,r);else if(uf(l,e,t,n,r))r.stopPropagation();else if(Ma(e,r),t&4&&-1<af.indexOf(e)){for(;l!==null;){var o=yr(l);if(o!==null&&Ns(o),o=Yo(e,t,n,r),o===null&&po(e,t,r,ul,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var ul=null;function Yo(e,t,n,r){if(ul=null,e=Mi(r),e=Pt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case Ii:return 1;case ys:return 4;case ol:case bd:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var ot=null,Wi=null,Jr=null;function Ps(){if(Jr)return Jr;var e,t=Wi,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Jr=l.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function ja(){return!1}function Te(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:ja,this.isPropagationStopped=ja,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Te(Nn),gr=V({},Nn,{view:0,detail:0}),ff=Te(gr),ro,lo,Bn,Ol=V({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ro=e.screenX-Bn.screenX,lo=e.screenY-Bn.screenY):lo=ro=0,Bn=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),$a=Te(Ol),pf=V({},Ol,{dataTransfer:0}),hf=Te(pf),mf=V({},gr,{relatedTarget:0}),oo=Te(mf),vf=V({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),gf=Te(vf),yf=V({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=Te(yf),wf=V({},Nn,{data:0}),Aa=Te(wf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function Hi(){return Tf}var Ef=V({},gr,{key:function(e){if(e.key){var t=kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=Te(Ef),Df=V({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=Te(Df),Pf=V({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Rf=Te(Pf),Of=V({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=Te(Of),Lf=V({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Te(Lf),zf=[9,13,27,32],Qi=Xe&&"CompositionEvent"in window,Vn=null;Xe&&"documentMode"in document&&(Vn=document.documentMode);var Uf=Xe&&"TextEvent"in window&&!Vn,Rs=Xe&&(!Qi||Vn&&8<Vn&&11>=Vn),Va=String.fromCharCode(32),Ha=!1;function Os(e,t){switch(e){case"keyup":return zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Ff(e,t){switch(e){case"compositionend":return _s(t);case"keypress":return t.which!==32?null:(Ha=!0,Va);case"textInput":return e=t.data,e===Va&&Ha?null:e;default:return null}}function Mf(e,t){if(Gt)return e==="compositionend"||!Qi&&Os(e,t)?(e=Ps(),Jr=Wi=ot=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rs&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function Ls(e,t,n,r){ss(r),t=sl(t,"onChange"),0<t.length&&(n=new Vi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,rr=null;function jf(e){Vs(e,0)}function _l(e){var t=qt(e);if(ns(t))return e}function $f(e,t){if(e==="change")return t}var Bs=!1;if(Xe){var io;if(Xe){var ao="oninput"in document;if(!ao){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),ao=typeof Ja.oninput=="function"}io=ao}else io=!1;Bs=io&&(!document.documentMode||9<document.documentMode)}function Ka(){Hn&&(Hn.detachEvent("onpropertychange",zs),rr=Hn=null)}function zs(e){if(e.propertyName==="value"&&_l(rr)){var t=[];Ls(t,rr,e,Mi(e)),ps(jf,t)}}function Af(e,t,n){e==="focusin"?(Ka(),Hn=t,rr=n,Hn.attachEvent("onpropertychange",zs)):e==="focusout"&&Ka()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(rr)}function Vf(e,t){if(e==="click")return _l(t)}function Hf(e,t){if(e==="input"||e==="change")return _l(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Qf;function lr(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Oo.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function Ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,t){var n=Ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ya(n)}}function Us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fs(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function Ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jf(e){var t=Fs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Us(n.ownerDocument.documentElement,n)){if(r!==null&&Ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Xa(n,o);var i=Xa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=Xe&&"documentMode"in document&&11>=document.documentMode,Zt=null,Xo=null,Qn=null,Go=!1;function Ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||Zt==null||Zt!==nl(r)||(r=Zt,"selectionStart"in r&&Ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&lr(Qn,r)||(Qn=r,r=sl(Xo,"onSelect"),0<r.length&&(t=new Vi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},uo={},Ms={};Xe&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function Ll(e){if(uo[e])return uo[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ms)return uo[e]=t[n];return e}var Is=Ll("animationend"),js=Ll("animationiteration"),$s=Ll("animationstart"),As=Ll("transitionend"),Ws=new Map,Za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Ws.set(e,t),It(t,[e])}for(var so=0;so<Za.length;so++){var co=Za[so],Yf=co.toLowerCase(),Xf=co[0].toUpperCase()+co.slice(1);St(Yf,"on"+Xf)}St(Is,"onAnimationEnd");St(js,"onAnimationIteration");St($s,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(As,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kd(r,t,void 0,e),e.currentTarget=null}function Vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;ba(l,a,c),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;ba(l,a,c),o=s}}}if(ll)throw e=Qo,ll=!1,Qo=null,e}function I(e,t){var n=t[ti];n===void 0&&(n=t[ti]=new Set);var r=e+"__bubble";n.has(r)||(Hs(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),Hs(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Br]){e[Br]=!0,Zu.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,fo("selectionchange",!1,t))}}function Hs(e,t,n,r){switch(Ds(t)){case 1:var l=cf;break;case 4:l=df;break;default:l=Ai}n=l.bind(null,t,n,e),l=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function po(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Pt(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}ps(function(){var c=o,h=Mi(n),v=[];e:{var m=Ws.get(e);if(m!==void 0){var k=Vi,N=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":k=xf;break;case"focusin":N="focus",k=oo;break;case"focusout":N="blur",k=oo;break;case"beforeblur":case"afterblur":k=oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Rf;break;case Is:case js:case $s:k=gf;break;case As:k=_f;break;case"scroll":k=ff;break;case"wheel":k=Bf;break;case"copy":case"cut":case"paste":k=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Wa}var y=(t&4)!==0,O=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var d=c,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=qn(d,f),g!=null&&y.push(ir(d,g,p)))),O)break;d=d.return}0<y.length&&(m=new k(m,N,null,n,h),v.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Wo&&(N=n.relatedTarget||n.fromElement)&&(Pt(N)||N[Ge]))break e;if((k||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=c,N=N?Pt(N):null,N!==null&&(O=jt(N),N!==O||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=c),k!==N)){if(y=$a,g="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wa,g="onPointerLeave",f="onPointerEnter",d="pointer"),O=k==null?m:qt(k),p=N==null?m:qt(N),m=new y(g,d+"leave",k,n,h),m.target=O,m.relatedTarget=p,g=null,Pt(h)===c&&(y=new y(f,d+"enter",N,n,h),y.target=p,y.relatedTarget=O,g=y),O=g,k&&N)t:{for(y=k,f=N,d=0,p=y;p;p=$t(p))d++;for(p=0,g=f;g;g=$t(g))p++;for(;0<d-p;)y=$t(y),d--;for(;0<p-d;)f=$t(f),p--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=$t(y),f=$t(f)}y=null}else y=null;k!==null&&qa(v,m,k,y,!1),N!==null&&O!==null&&qa(v,O,N,y,!0)}}e:{if(m=c?qt(c):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var E=$f;else if(Qa(m))if(Bs)E=Hf;else{E=Wf;var D=Af}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Vf);if(E&&(E=E(e,c))){Ls(v,E,n,h);break e}D&&D(e,m,c),e==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&Mo(m,"number",m.value)}switch(D=c?qt(c):window,e){case"focusin":(Qa(D)||D.contentEditable==="true")&&(Zt=D,Xo=c,Qn=null);break;case"focusout":Qn=Xo=Zt=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,Ga(v,n,h);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":Ga(v,n,h)}var P;if(Qi)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Gt?Os(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Rs&&n.locale!=="ko"&&(Gt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Gt&&(P=Ps()):(ot=h,Wi="value"in ot?ot.value:ot.textContent,Gt=!0)),D=sl(c,R),0<D.length&&(R=new Aa(R,e,null,n,h),v.push({event:R,listeners:D}),P?R.data=P:(P=_s(n),P!==null&&(R.data=P)))),(P=Uf?Ff(e,n):Mf(e,n))&&(c=sl(c,"onBeforeInput"),0<c.length&&(h=new Aa("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:c}),h.data=P))}Vs(v,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=qn(e,n),o!=null&&r.unshift(ir(e,o,l)),o=qn(e,t),o!=null&&r.push(ir(e,o,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=qn(n,o),s!=null&&i.unshift(ir(n,s,a))):l||(s=qn(n,o),s!=null&&i.push(ir(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Zf=/\r\n?/g,bf=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(bf,"")}function zr(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(S(425))}function cl(){}var Zo=null,bo=null;function qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(tp)}:ei;function tp(e){setTimeout(function(){throw e})}function ho(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);nr(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Cn,ar="__reactProps$"+Cn,Ge="__reactContainer$"+Cn,ti="__reactEvents$"+Cn,np="__reactListeners$"+Cn,rp="__reactHandles$"+Cn;function Pt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[Ae])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[Ae]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Bl(e){return e[ar]||null}var ni=[],en=-1;function wt(e){return{current:e}}function j(e){0>en||(e.current=ni[en],ni[en]=null,en--)}function M(e,t){en++,ni[en]=e.current,e.current=t}var yt={},ae=wt(yt),me=wt(!1),Bt=yt;function hn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function dl(){j(me),j(ae)}function ru(e,t,n){if(ae.current!==yt)throw Error(S(168));M(ae,t),M(me,n)}function Qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,$d(e)||"Unknown",l));return V({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Bt=ae.current,M(ae,e),M(me,me.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Qs(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,j(me),j(ae),M(ae,e)):j(me),M(me,n)}var Qe=null,zl=!1,mo=!1;function Js(e){Qe===null?Qe=[e]:Qe.push(e)}function lp(e){zl=!0,Js(e)}function kt(){if(!mo&&Qe!==null){mo=!0;var e=0,t=F;try{var n=Qe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,zl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),gs(Ii,kt),l}finally{F=t,mo=!1}}return null}var tn=[],nn=0,pl=null,hl=0,Ee=[],xe=0,zt=null,Je=1,Ke="";function xt(e,t){tn[nn++]=hl,tn[nn++]=pl,pl=e,hl=t}function Ks(e,t,n){Ee[xe++]=Je,Ee[xe++]=Ke,Ee[xe++]=zt,zt=e;var r=Je;e=Ke;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var o=32-Fe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Je=1<<32-Fe(t)+l|n<<l|r,Ke=o+e}else Je=1<<o|n<<l|r,Ke=e}function Ki(e){e.return!==null&&(xt(e,1),Ks(e,1,0))}function Yi(e){for(;e===pl;)pl=tn[--nn],tn[nn]=null,hl=tn[--nn],tn[nn]=null;for(;e===zt;)zt=Ee[--xe],Ee[xe]=null,Ke=Ee[--xe],Ee[xe]=null,Je=Ee[--xe],Ee[xe]=null}var we=null,Se=null,$=!1,Ue=null;function Ys(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,Se=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Je,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,Se=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if($){var t=Se;if(t){var n=t;if(!ou(e,t)){if(ri(e))throw Error(S(418));t=dt(n.nextSibling);var r=we;t&&ou(e,t)?Ys(r,n):(e.flags=e.flags&-4097|2,$=!1,we=e)}}else{if(ri(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,we=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Ur(e){if(e!==we)return!1;if(!$)return iu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qo(e.type,e.memoizedProps)),t&&(t=Se)){if(ri(e))throw Xs(),Error(S(418));for(;t;)Ys(e,t),t=dt(t.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=we?dt(e.stateNode.nextSibling):null;return!0}function Xs(){for(var e=Se;e;)e=dt(e.nextSibling)}function mn(){Se=we=null,$=!1}function Xi(e){Ue===null?Ue=[e]:Ue.push(e)}var op=qe.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ml=wt(null),vl=null,rn=null,Gi=null;function Zi(){Gi=rn=vl=null}function bi(e){var t=ml.current;j(ml),e._currentValue=t}function oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){vl=e,Gi=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Gi!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(vl===null)throw Error(S(308));rn=e,vl.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Rt=null;function qi(e){Rt===null?Rt=[e]:Rt.push(e)}function Gs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,qi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,qi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ji(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var v=l.baseState;i=0,h=c=s=null,a=o;do{var m=a.lane,k=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=e,y=a;switch(m=t,k=n,y.tag){case 1:if(N=y.payload,typeof N=="function"){v=N.call(k,v,m);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=y.payload,m=typeof N=="function"?N.call(k,v,m):N,m==null)break e;v=V({},v,m);break e;case 2:nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=k,s=v):h=h.next=k,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(h===null&&(s=v),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=v}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var bs=new Gu.Component().refs;function ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ul={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ht(e),o=Ye(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Yr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ht(e),o=Ye(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Yr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ht(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Me(t,e,r,n),Yr(t,e,r))}};function su(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(l,o):!0}function qs(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(l=ve(t)?Bt:ae.current,r=t.contextTypes,o=(r=r!=null)?hn(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ul.enqueueReplaceState(t,t.state,null)}function ai(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=bs,ea(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Re(o):(o=ve(t)?Bt:ae.current,l.context=hn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ii(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ul.enqueueReplaceState(l,l.state,null),gl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;a===bs&&(a=l.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function du(e){var t=e._init;return t(e._payload)}function ec(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,g){return d===null||d.tag!==6?(d=No(p,f.mode,g),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,g){var E=p.type;return E===Xt?h(f,d,p.props.children,g,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tt&&du(E)===d.type)?(g=l(d,p.props),g.ref=zn(f,d,p),g.return=f,g):(g=el(p.type,p.key,p.props,null,f.mode,g),g.ref=zn(f,d,p),g.return=f,g)}function c(f,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Co(p,f.mode,g),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,g,E){return d===null||d.tag!==7?(d=Lt(p,f.mode,g,E),d.return=f,d):(d=l(d,p),d.return=f,d)}function v(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=No(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Er:return p=el(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,null,d),p.return=f,p;case Yt:return d=Co(d,f.mode,p),d.return=f,d;case tt:var g=d._init;return v(f,g(d._payload),p)}if(In(d)||Rn(d))return d=Lt(d,f.mode,p,null),d.return=f,d;Fr(f,d)}return null}function m(f,d,p,g){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return p.key===E?s(f,d,p,g):null;case Yt:return p.key===E?c(f,d,p,g):null;case tt:return E=p._init,m(f,d,E(p._payload),g)}if(In(p)||Rn(p))return E!==null?null:h(f,d,p,g,null);Fr(f,p)}return null}function k(f,d,p,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,a(d,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return f=f.get(g.key===null?p:g.key)||null,s(d,f,g,E);case Yt:return f=f.get(g.key===null?p:g.key)||null,c(d,f,g,E);case tt:var D=g._init;return k(f,d,p,D(g._payload),E)}if(In(g)||Rn(g))return f=f.get(p)||null,h(d,f,g,E,null);Fr(d,g)}return null}function N(f,d,p,g){for(var E=null,D=null,P=d,R=d=0,Q=null;P!==null&&R<p.length;R++){P.index>R?(Q=P,P=null):Q=P.sibling;var z=m(f,P,p[R],g);if(z===null){P===null&&(P=Q);break}e&&P&&z.alternate===null&&t(f,P),d=o(z,d,R),D===null?E=z:D.sibling=z,D=z,P=Q}if(R===p.length)return n(f,P),$&&xt(f,R),E;if(P===null){for(;R<p.length;R++)P=v(f,p[R],g),P!==null&&(d=o(P,d,R),D===null?E=P:D.sibling=P,D=P);return $&&xt(f,R),E}for(P=r(f,P);R<p.length;R++)Q=k(P,f,R,p[R],g),Q!==null&&(e&&Q.alternate!==null&&P.delete(Q.key===null?R:Q.key),d=o(Q,d,R),D===null?E=Q:D.sibling=Q,D=Q);return e&&P.forEach(function(_e){return t(f,_e)}),$&&xt(f,R),E}function y(f,d,p,g){var E=Rn(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var D=E=null,P=d,R=d=0,Q=null,z=p.next();P!==null&&!z.done;R++,z=p.next()){P.index>R?(Q=P,P=null):Q=P.sibling;var _e=m(f,P,z.value,g);if(_e===null){P===null&&(P=Q);break}e&&P&&_e.alternate===null&&t(f,P),d=o(_e,d,R),D===null?E=_e:D.sibling=_e,D=_e,P=Q}if(z.done)return n(f,P),$&&xt(f,R),E;if(P===null){for(;!z.done;R++,z=p.next())z=v(f,z.value,g),z!==null&&(d=o(z,d,R),D===null?E=z:D.sibling=z,D=z);return $&&xt(f,R),E}for(P=r(f,P);!z.done;R++,z=p.next())z=k(P,f,R,z.value,g),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?R:z.key),d=o(z,d,R),D===null?E=z:D.sibling=z,D=z);return e&&P.forEach(function(Dn){return t(f,Dn)}),$&&xt(f,R),E}function O(f,d,p,g){if(typeof p=="object"&&p!==null&&p.type===Xt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:e:{for(var E=p.key,D=d;D!==null;){if(D.key===E){if(E=p.type,E===Xt){if(D.tag===7){n(f,D.sibling),d=l(D,p.props.children),d.return=f,f=d;break e}}else if(D.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tt&&du(E)===D.type){n(f,D.sibling),d=l(D,p.props),d.ref=zn(f,D,p),d.return=f,f=d;break e}n(f,D);break}else t(f,D);D=D.sibling}p.type===Xt?(d=Lt(p.props.children,f.mode,g,p.key),d.return=f,f=d):(g=el(p.type,p.key,p.props,null,f.mode,g),g.ref=zn(f,d,p),g.return=f,f=g)}return i(f);case Yt:e:{for(D=p.key;d!==null;){if(d.key===D)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Co(p,f.mode,g),d.return=f,f=d}return i(f);case tt:return D=p._init,O(f,d,D(p._payload),g)}if(In(p))return N(f,d,p,g);if(Rn(p))return y(f,d,p,g);Fr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=No(p,f.mode,g),d.return=f,f=d),i(f)):n(f,d)}return O}var vn=ec(!0),tc=ec(!1),Sr={},Ve=wt(Sr),ur=wt(Sr),sr=wt(Sr);function Ot(e){if(e===Sr)throw Error(S(174));return e}function ta(e,t){switch(M(sr,t),M(ur,e),M(Ve,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jo(t,e)}j(Ve),M(Ve,t)}function gn(){j(Ve),j(ur),j(sr)}function nc(e){Ot(sr.current);var t=Ot(Ve.current),n=jo(t,e.type);t!==n&&(M(ur,e),M(Ve,n))}function na(e){ur.current===e&&(j(Ve),j(ur))}var A=wt(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=[];function ra(){for(var e=0;e<vo.length;e++)vo[e]._workInProgressVersionPrimary=null;vo.length=0}var Xr=qe.ReactCurrentDispatcher,go=qe.ReactCurrentBatchConfig,Ut=0,W=null,G=null,q=null,Sl=!1,Jn=!1,cr=0,ip=0;function le(){throw Error(S(321))}function la(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function oa(e,t,n,r,l,o){if(Ut=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xr.current=e===null||e.memoizedState===null?cp:dp,e=n(r,l),Jn){o=0;do{if(Jn=!1,cr=0,25<=o)throw Error(S(301));o+=1,q=G=null,t.updateQueue=null,Xr.current=fp,e=n(r,l)}while(Jn)}if(Xr.current=wl,t=G!==null&&G.next!==null,Ut=0,q=G=W=null,Sl=!1,t)throw Error(S(300));return e}function ia(){var e=cr!==0;return cr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function Oe(){if(G===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?W.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(S(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function dr(e,t){return typeof t=="function"?t(e):t}function yo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,c=o;do{var h=c.lane;if((Ut&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=v,i=r):s=s.next=v,W.lanes|=h,Ft|=h}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=a,Ie(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ie(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rc(){}function lc(e,t){var n=W,r=Oe(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,he=!0),r=r.queue,aa(ac.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,fr(9,ic.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(S(349));Ut&30||oc(n,t,l)}return l}function oc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,r){t.value=n,t.getSnapshot=r,uc(t)&&sc(e)}function ac(e,t,n){return n(function(){uc(t)&&sc(e)})}function uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function sc(e){var t=Ze(e,1);t!==null&&Me(t,e,1,-1)}function fu(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,W,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cc(){return Oe().memoizedState}function Gr(e,t,n,r){var l=$e();W.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function Fl(e,t,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&la(r,i.deps)){l.memoizedState=fr(t,n,o,r);return}}W.flags|=e,l.memoizedState=fr(1|t,n,o,r)}function pu(e,t){return Gr(8390656,8,e,t)}function aa(e,t){return Fl(2048,8,e,t)}function dc(e,t){return Fl(4,2,e,t)}function fc(e,t){return Fl(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4,4,pc.bind(null,t,e),n)}function ua(){}function mc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gc(e,t,n){return Ut&21?(Ie(n,t)||(n=ws(),W.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function ap(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=go.transition;go.transition={};try{e(!1),t()}finally{F=n,go.transition=r}}function yc(){return Oe().memoizedState}function up(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sc(e))wc(t,n);else if(n=Gs(e,t,n,r),n!==null){var l=se();Me(n,e,r,l),kc(n,t,r)}}function sp(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))wc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ie(a,i)){var s=t.interleaved;s===null?(l.next=l,qi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Gs(e,t,l,r),n!==null&&(l=se(),Me(n,e,r,l),kc(n,t,r))}}function Sc(e){var t=e.alternate;return e===W||t!==null&&t===W}function wc(e,t){Jn=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ji(e,n)}}var wl={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},cp={readContext:Re,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gr(4194308,4,pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=up.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:fu,useDebugValue:ua,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=fu(!1),t=e[0];return e=ap.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=$e();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ee===null)throw Error(S(349));Ut&30||oc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,pu(ac.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,ic.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$e(),t=ee.identifierPrefix;if($){var n=Ke,r=Je;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dp={readContext:Re,useCallback:mc,useContext:Re,useEffect:aa,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:vc,useReducer:yo,useRef:cc,useState:function(){return yo(dr)},useDebugValue:ua,useDeferredValue:function(e){var t=Oe();return gc(t,G.memoizedState,e)},useTransition:function(){var e=yo(dr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:lc,useId:yc,unstable_isNewReconciler:!1},fp={readContext:Re,useCallback:mc,useContext:Re,useEffect:aa,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:vc,useReducer:So,useRef:cc,useState:function(){return So(dr)},useDebugValue:ua,useDeferredValue:function(e){var t=Oe();return G===null?t.memoizedState=e:gc(t,G.memoizedState,e)},useTransition:function(){var e=So(dr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:lc,useId:yc,unstable_isNewReconciler:!1};function yn(e,t){try{var n="",r=t;do n+=jd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ui(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,yi=r),ui(e,t)},n}function Cc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ui(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ui(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Dp.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var hp=qe.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?tc(t,null,n,r):vn(t,e.child,n,r)}function gu(e,t,n,r,l){n=n.render;var o=t.ref;return dn(t,l),r=oa(e,t,n,r,o,l),n=ia(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,be(e,t,l)):($&&n&&Ki(t),t.flags|=1,ue(e,t,r,l),t.child)}function yu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!va(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tc(e,t,o,r,l)):(e=el(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(i,r)&&e.ref===t.ref)return be(e,t,l)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,be(e,t,l)}return si(e,t,n,r,l)}function Ec(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(on,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(on,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(on,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(on,ye),ye|=r;return ue(e,t,l,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function si(e,t,n,r,l){var o=ve(n)?Bt:ae.current;return o=hn(t,o),dn(t,l),n=oa(e,t,n,r,o,l),r=ia(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,be(e,t,l)):($&&r&&Ki(t),t.flags|=1,ue(e,t,n,l),t.child)}function Su(e,t,n,r,l){if(ve(n)){var o=!0;fl(t)}else o=!1;if(dn(t,l),t.stateNode===null)Zr(e,t),qs(t,n,r),ai(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=ve(n)?Bt:ae.current,c=hn(t,c));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&cu(t,i,r,c),nt=!1;var m=t.memoizedState;i.state=m,gl(t,r,i,l),s=t.memoizedState,a!==r||m!==s||me.current||nt?(typeof h=="function"&&(ii(t,n,h,r),s=t.memoizedState),(a=nt||su(t,n,a,r,m,s,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Zs(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Be(t.type,a),i.props=c,v=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=ve(n)?Bt:ae.current,s=hn(t,s));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||m!==s)&&cu(t,i,r,s),nt=!1,m=t.memoizedState,i.state=m,gl(t,r,i,l);var N=t.memoizedState;a!==v||m!==N||me.current||nt?(typeof k=="function"&&(ii(t,n,k,r),N=t.memoizedState),(c=nt||su(t,n,c,r,m,N,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ci(e,t,n,r,o,l)}function ci(e,t,n,r,l,o){xc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&lu(t,n,!1),be(e,t,o);r=t.stateNode,hp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,o),t.child=vn(t,null,a,o)):ue(e,t,a,o),t.memoizedState=r.state,l&&lu(t,n,!0),t.child}function Dc(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),ta(e,t.containerInfo)}function wu(e,t,n,r,l){return mn(),Xi(l),t.flags|=256,ue(e,t,n,r),t.child}var di={dehydrated:null,treeContext:null,retryLane:0};function fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,n){var r=t.pendingProps,l=A.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(A,l&1),e===null)return li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=jl(i,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fi(n),t.memoizedState=di,e):sa(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return mp(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=mt(a,o):(o=Lt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?fi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=di,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sa(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&Xi(r),vn(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(S(422))),Mr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=jl({mode:"visible",children:r.children},l,0,null),o=Lt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vn(t,e.child,null,i),t.child.memoizedState=fi(i),t.memoizedState=di,o);if(!(t.mode&1))return Mr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=wo(o,r,void 0),Mr(e,t,i,r)}if(a=(i&e.childLanes)!==0,he||a){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ze(e,l),Me(r,e,l,-1))}return ma(),r=wo(Error(S(421))),Mr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Pp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=dt(l.nextSibling),we=t,$=!0,Ue=null,e!==null&&(Ee[xe++]=Je,Ee[xe++]=Ke,Ee[xe++]=zt,Je=e.id,Ke=e.overflow,zt=t),t=sa(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oi(e.return,t,n)}function ko(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Rc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ko(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ko(t,!0,n,null,o);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function be(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t,n){switch(t.tag){case 3:Dc(t),mn();break;case 5:nc(t);break;case 1:ve(t.type)&&fl(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(ml,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Pc(e,t,n):(M(A,A.current&1),e=be(e,t,n),e!==null?e.sibling:null);M(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Ec(e,t,n)}return be(e,t,n)}var Oc,pi,_c,Lc;Oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pi=function(){};_c=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ot(Ve.current);var o=null;switch(n){case"input":l=Uo(e,l),r=Uo(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=Io(e,l),r=Io(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}$o(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&I("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Un(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(Yi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&dl(),oe(t),null;case 3:return r=t.stateNode,gn(),j(me),j(ae),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(ki(Ue),Ue=null))),pi(e,t),oe(t),null;case 5:na(t);var l=Ot(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)_c(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Ot(Ve.current),Ur(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[ar]=o,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<$n.length;l++)I($n[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Oa(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":La(r,o),I("invalid",r)}$o(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,a,e),l=["children",""+a]):Zn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&I("scroll",r)}switch(n){case"input":xr(r),_a(r,o,!0);break;case"textarea":xr(r),Ba(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=os(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ae]=t,e[ar]=r,Oc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ao(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<$n.length;l++)I($n[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Oa(e,r),l=Uo(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":La(e,r),l=Io(e,r),I("invalid",e);break;default:l=r}$o(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?us(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&is(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bn(e,s):typeof s=="number"&&bn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&I("scroll",e):s!=null&&Bi(e,o,s,i))}switch(n){case"input":xr(e),_a(e,r,!1);break;case"textarea":xr(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?an(e,!!r.multiple,o,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ot(sr.current),Ot(Ve.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return oe(t),null;case 13:if(j(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Se!==null&&t.mode&1&&!(t.flags&128))Xs(),mn(),t.flags|=98560,o=!1;else if(o=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ae]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Ue!==null&&(ki(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?Z===0&&(Z=3):ma())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return gn(),pi(e,t),e===null&&or(t.stateNode.containerInfo),oe(t),null;case 10:return bi(t.type._context),oe(t),null;case 17:return ve(t.type)&&dl(),oe(t),null;case 19:if(j(A),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Un(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=yl(e),i!==null){for(t.flags|=128,Un(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>Sn&&(t.flags|=128,r=!0,Un(o,!1),t.lanes=4194304)}else{if(!r)if(e=yl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Un(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!$)return oe(t),null}else 2*K()-o.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Un(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=A.current,M(A,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function yp(e,t){switch(Yi(t),t.tag){case 1:return ve(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),j(me),j(ae),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(j(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(A),null;case 4:return gn(),null;case 10:return bi(t.type._context),null;case 22:case 23:return ha(),null;case 24:return null;default:return null}}var Ir=!1,ie=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,T=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function hi(e,t,n){try{n()}catch(r){H(e,t,r)}}var Nu=!1;function wp(e,t){if(Zo=al,e=Fs(),Ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,v=e,m=null;t:for(;;){for(var k;v!==n||l!==0&&v.nodeType!==3||(a=i+l),v!==o||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(k=v.firstChild)!==null;)m=v,v=k;for(;;){if(v===e)break t;if(m===n&&++c===l&&(a=i),m===o&&++h===r&&(s=i),(k=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bo={focusedElem:e,selectionRange:n},al=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var y=N.memoizedProps,O=N.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Be(t.type,y),O);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return N=Nu,Nu=!1,N}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&hi(t,n,o)}l=l.next}while(l!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[ar],delete t[ti],delete t[np],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zc(e){return e.tag===5||e.tag===3||e.tag===4}function Cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}var te=null,ze=!1;function et(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:ie||ln(n,t);case 6:var r=te,l=ze;te=null,et(e,t,n),te=r,ze=l,te!==null&&(ze?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(ze?(e=te,n=n.stateNode,e.nodeType===8?ho(e.parentNode,n):e.nodeType===1&&ho(e,n),nr(e)):ho(te,n.stateNode));break;case 4:r=te,l=ze,te=n.stateNode.containerInfo,ze=!0,et(e,t,n),te=r,ze=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&hi(n,t,i),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!ie&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,et(e,t,n),ie=r):et(e,t,n);break;default:et(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sp),t.forEach(function(r){var l=Rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,ze=!1;break e;case 3:te=a.stateNode.containerInfo,ze=!0;break e;case 4:te=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(te===null)throw Error(S(160));Uc(o,i,l),te=null,ze=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),je(e),r&4){try{Kn(3,e,e.return),Ml(3,e)}catch(y){H(e,e.return,y)}try{Kn(5,e,e.return)}catch(y){H(e,e.return,y)}}break;case 1:Le(t,e),je(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Le(t,e),je(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var l=e.stateNode;try{bn(l,"")}catch(y){H(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&rs(l,o),Ao(a,i);var c=Ao(a,o);for(i=0;i<s.length;i+=2){var h=s[i],v=s[i+1];h==="style"?us(l,v):h==="dangerouslySetInnerHTML"?is(l,v):h==="children"?bn(l,v):Bi(l,h,v,c)}switch(a){case"input":Fo(l,o);break;case"textarea":ls(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?an(l,!!o.multiple,k,!1):m!==!!o.multiple&&(o.defaultValue!=null?an(l,!!o.multiple,o.defaultValue,!0):an(l,!!o.multiple,o.multiple?[]:"",!1))}l[ar]=o}catch(y){H(e,e.return,y)}}break;case 6:if(Le(t,e),je(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){H(e,e.return,y)}}break;case 3:if(Le(t,e),je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(y){H(e,e.return,y)}break;case 4:Le(t,e),je(e);break;case 13:Le(t,e),je(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(fa=K())),r&4&&Tu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||h,Le(t,e),ie=c):Le(t,e),je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(v=T=h;T!==null;){switch(m=T,k=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:ln(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(y){H(r,n,y)}}break;case 5:ln(m,m.return);break;case 22:if(m.memoizedState!==null){xu(v);continue}}k!==null?(k.return=m,T=k):xu(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=as("display",i))}catch(y){H(e,e.return,y)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(y){H(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Le(t,e),je(e),r&4&&Tu(e);break;case 21:break;default:Le(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(bn(l,""),r.flags&=-33);var o=Cu(e);gi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Cu(e);vi(e,a,i);break;default:throw Error(S(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,n){T=e,Mc(e)}function Mc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Ir;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=Ir;var c=ie;if(Ir=i,(ie=s)&&!c)for(T=l;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?Du(l):s!==null?(s.return=i,T=s):Du(l);for(;o!==null;)T=o,Mc(o),o=o.sibling;T=l,Ir=a,ie=c}Eu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Eu(e)}}function Eu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uu(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&nr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||t.flags&512&&mi(t)}catch(m){H(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function xu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Du(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){H(t,l,s)}}var o=t.return;try{mi(t)}catch(s){H(t,o,s)}break;case 5:var i=t.return;try{mi(t)}catch(s){H(t,i,s)}}}catch(s){H(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Np=Math.ceil,kl=qe.ReactCurrentDispatcher,ca=qe.ReactCurrentOwner,Pe=qe.ReactCurrentBatchConfig,U=0,ee=null,Y=null,ne=0,ye=0,on=wt(0),Z=0,pr=null,Ft=0,Il=0,da=0,Yn=null,pe=null,fa=0,Sn=1/0,He=null,Nl=!1,yi=null,pt=null,jr=!1,it=null,Cl=0,Xn=0,Si=null,br=-1,qr=0;function se(){return U&6?K():br!==-1?br:br=K()}function ht(e){return e.mode&1?U&2&&ne!==0?ne&-ne:op.transition!==null?(qr===0&&(qr=ws()),qr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function Me(e,t,n,r){if(50<Xn)throw Xn=0,Si=null,Error(S(185));vr(e,n,r),(!(U&2)||e!==ee)&&(e===ee&&(!(U&2)&&(Il|=n),Z===4&&lt(e,ne)),ge(e,r),n===1&&U===0&&!(t.mode&1)&&(Sn=K()+500,zl&&kt()))}function ge(e,t){var n=e.callbackNode;lf(e,t);var r=il(e,e===ee?ne:0);if(r===0)n!==null&&Fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fa(n),t===1)e.tag===0?lp(Pu.bind(null,e)):Js(Pu.bind(null,e)),ep(function(){!(U&6)&&kt()}),n=null;else{switch(ks(r)){case 1:n=Ii;break;case 4:n=ys;break;case 16:n=ol;break;case 536870912:n=Ss;break;default:n=ol}n=Qc(n,Ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ic(e,t){if(br=-1,qr=0,U&6)throw Error(S(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=il(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var l=U;U|=2;var o=$c();(ee!==e||ne!==t)&&(He=null,Sn=K()+500,_t(e,t));do try{Ep();break}catch(a){jc(e,a)}while(1);Zi(),kl.current=o,U=l,Y!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=Jo(e),l!==0&&(r=l,t=wi(e,l))),t===1)throw n=pr,_t(e,0),lt(e,r),ge(e,K()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cp(l)&&(t=Tl(e,r),t===2&&(o=Jo(e),o!==0&&(r=o,t=wi(e,o))),t===1))throw n=pr,_t(e,0),lt(e,r),ge(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Dt(e,pe,He);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=fa+500-K(),10<t)){if(il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ei(Dt.bind(null,e,pe,He),t);break}Dt(e,pe,He);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Fe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=ei(Dt.bind(null,e,pe,He),r);break}Dt(e,pe,He);break;case 5:Dt(e,pe,He);break;default:throw Error(S(329))}}}return ge(e,K()),e.callbackNode===n?Ic.bind(null,e):null}function wi(e,t){var n=Yn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=pe,pe=n,t!==null&&ki(t)),e}function ki(e){pe===null?pe=e:pe.push.apply(pe,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~da,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if(U&6)throw Error(S(327));fn();var t=il(e,0);if(!(t&1))return ge(e,K()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=Jo(e);r!==0&&(t=r,n=wi(e,r))}if(n===1)throw n=pr,_t(e,0),lt(e,t),ge(e,K()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,pe,He),ge(e,K()),null}function pa(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Sn=K()+500,zl&&kt())}}function Mt(e){it!==null&&it.tag===0&&!(U&6)&&fn();var t=U;U|=1;var n=Pe.transition,r=F;try{if(Pe.transition=null,F=1,e)return e()}finally{F=r,Pe.transition=n,U=t,!(U&6)&&kt()}}function ha(){ye=on.current,j(on)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Yi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:gn(),j(me),j(ae),ra();break;case 5:na(r);break;case 4:gn();break;case 13:j(A);break;case 19:j(A);break;case 10:bi(r.type._context);break;case 22:case 23:ha()}n=n.return}if(ee=e,Y=e=mt(e.current,null),ne=ye=t,Z=0,pr=null,da=Il=Ft=0,pe=Yn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Rt=null}return e}function jc(e,t){do{var n=Y;try{if(Zi(),Xr.current=wl,Sl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(Ut=0,q=G=W=null,Jn=!1,cr=0,ca.current=null,n===null||n.return===null){Z=1,pr=t,Y=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=mu(i);if(k!==null){k.flags&=-257,vu(k,i,a,o,t),k.mode&1&&hu(o,c,t),t=k,s=c;var N=t.updateQueue;if(N===null){var y=new Set;y.add(s),t.updateQueue=y}else N.add(s);break e}else{if(!(t&1)){hu(o,c,t),ma();break e}s=Error(S(426))}}else if($&&a.mode&1){var O=mu(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),vu(O,i,a,o,t),Xi(yn(s,a));break e}}o=s=yn(s,a),Z!==4&&(Z=2),Yn===null?Yn=[o]:Yn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Nc(o,s,t);au(o,f);break e;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Cc(o,a,t);au(o,g);break e}}o=o.return}while(o!==null)}Wc(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function $c(){var e=kl.current;return kl.current=wl,e===null?wl:e}function ma(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Ft&268435455)&&!(Il&268435455)||lt(ee,ne)}function Tl(e,t){var n=U;U|=2;var r=$c();(ee!==e||ne!==t)&&(He=null,_t(e,t));do try{Tp();break}catch(l){jc(e,l)}while(1);if(Zi(),U=n,kl.current=r,Y!==null)throw Error(S(261));return ee=null,ne=0,Z}function Tp(){for(;Y!==null;)Ac(Y)}function Ep(){for(;Y!==null&&!Xd();)Ac(Y)}function Ac(e){var t=Hc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Wc(e):Y=t,ca.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=gp(n,t,ye),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Dt(e,t,n){var r=F,l=Pe.transition;try{Pe.transition=null,F=1,xp(e,t,n,r)}finally{Pe.transition=l,F=r}return null}function xp(e,t,n,r){do fn();while(it!==null);if(U&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(of(e,o),e===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,Qc(ol,function(){return fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=F;F=1;var a=U;U|=4,ca.current=null,wp(e,n),Fc(n,e),Jf(bo),al=!!Zo,bo=Zo=null,e.current=n,kp(n),Gd(),U=a,F=i,Pe.transition=o}else e.current=n;if(jr&&(jr=!1,it=e,Cl=l),o=e.pendingLanes,o===0&&(pt=null),qd(n.stateNode),ge(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Nl)throw Nl=!1,e=yi,yi=null,e;return Cl&1&&e.tag!==0&&fn(),o=e.pendingLanes,o&1?e===Si?Xn++:(Xn=0,Si=e):Xn=0,kt(),null}function fn(){if(it!==null){var e=ks(Cl),t=Pe.transition,n=F;try{if(Pe.transition=null,F=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,Cl=0,U&6)throw Error(S(331));var l=U;for(U|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(T=c;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Kn(8,h,o)}var v=h.child;if(v!==null)v.return=h,T=v;else for(;T!==null;){h=T;var m=h.sibling,k=h.return;if(Bc(h),h===c){T=null;break}if(m!==null){m.return=k,T=m;break}T=k}}}var N=o.alternate;if(N!==null){var y=N.child;if(y!==null){N.child=null;do{var O=y.sibling;y.sibling=null,y=O}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(E){H(a,a.return,E)}if(a===i){T=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break e}T=a.return}}if(U=l,kt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Rl,e)}catch{}r=!0}return r}finally{F=n,Pe.transition=t}}return!1}function Ru(e,t,n){t=yn(n,t),t=Nc(e,t,1),e=ft(e,t,1),t=se(),e!==null&&(vr(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=yn(n,e),e=Cc(t,e,1),t=ft(t,e,1),e=se(),t!==null&&(vr(t,1,e),ge(t,e));break}}t=t.return}}function Dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>K()-fa?_t(e,0):da|=n),ge(e,t)}function Vc(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=se();e=Ze(e,t),e!==null&&(vr(e,t,n),ge(e,n))}function Pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function Rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,vp(e,t,n);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&Ks(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zr(e,t),e=t.pendingProps;var l=hn(t,ae.current);dn(t,n),l=oa(null,t,r,e,l,n);var o=ia();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,fl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ea(t),l.updater=Ul,t.stateNode=l,l._reactInternals=t,ai(t,r,e,n),t=ci(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ki(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_p(r),e=Be(r,e),l){case 0:t=si(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=gu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),si(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Su(e,t,r,l,n);case 3:e:{if(Dc(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Zs(e,t),gl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=yn(Error(S(423)),t),t=wu(e,t,r,n,l);break e}else if(r!==l){l=yn(Error(S(424)),t),t=wu(e,t,r,n,l);break e}else for(Se=dt(t.stateNode.containerInfo.firstChild),we=t,$=!0,Ue=null,n=tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=be(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return nc(t),e===null&&li(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,qo(r,l)?i=null:o!==null&&qo(r,o)&&(t.flags|=32),xc(e,t),ue(e,t,i,n),t.child;case 6:return e===null&&li(t),null;case 13:return Pc(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),gu(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,M(ml,r._currentValue),r._currentValue=i,o!==null)if(Ie(o.value,i)){if(o.children===l.children&&!me.current){t=be(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ye(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),oi(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),oi(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,dn(t,n),l=Re(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Be(r,t.pendingProps),l=Be(r.type,l),yu(e,t,r,l,n);case 15:return Tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Zr(e,t),t.tag=1,ve(r)?(e=!0,fl(t)):e=!1,dn(t,n),qs(t,r,l),ai(t,r,l,n),ci(null,t,r,!0,e,n);case 19:return Rc(e,t,n);case 22:return Ec(e,t,n)}throw Error(S(156,t.tag))};function Qc(e,t){return gs(e,t)}function Op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Op(e,t,n,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _p(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ui)return 11;if(e===Fi)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")va(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return Lt(n.children,l,o,t);case zi:i=8,l|=8;break;case _o:return e=De(12,n,t,l|2),e.elementType=_o,e.lanes=o,e;case Lo:return e=De(13,n,t,l),e.elementType=Lo,e.lanes=o,e;case Bo:return e=De(19,n,t,l),e.elementType=Bo,e.lanes=o,e;case es:return jl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bu:i=10;break e;case qu:i=9;break e;case Ui:i=11;break e;case Fi:i=14;break e;case tt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=De(22,e,r,t),e.elementType=es,e.lanes=n,e.stateNode={isHidden:!1},e}function No(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ga(e,t,n,r,l,o,i,a,s){return e=new Lp(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(o),e}function Bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jc(e){if(!e)return yt;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ve(n))return Qs(e,n,t)}return t}function Kc(e,t,n,r,l,o,i,a,s){return e=ga(n,r,!0,e,l,o,i,a,s),e.context=Jc(null),n=e.current,r=se(),l=ht(n),o=Ye(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,vr(e,l,r),ge(e,r),e}function $l(e,t,n,r){var l=t.current,o=se(),i=ht(l);return n=Jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,i),e!==null&&(Me(e,l,i,o),Yr(e,l,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ya(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function zp(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sa(e){this._internalRoot=e}Al.prototype.render=Sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));$l(e,t,null,null)};Al.prototype.unmount=Sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){$l(null,e,null,null)}),t[Ge]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ts();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&xs(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function Up(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=El(i);o.call(c)}}var i=Kc(t,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=i,e[Ge]=i.current,or(e.nodeType===8?e.parentNode:e),Mt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=El(s);a.call(c)}}var s=ga(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=s,e[Ge]=s.current,or(e.nodeType===8?e.parentNode:e),Mt(function(){$l(t,s,n,r)}),s}function Vl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=El(i);a.call(s)}}$l(t,i,e,l)}else i=Up(n,t,e,l,r);return El(i)}Ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ji(t,n|1),ge(t,K()),!(U&6)&&(Sn=K()+500,kt()))}break;case 13:Mt(function(){var r=Ze(e,1);if(r!==null){var l=se();Me(r,e,1,l)}}),ya(e,1)}};$i=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=se();Me(t,e,134217728,n)}ya(e,134217728)}};Cs=function(e){if(e.tag===13){var t=ht(e),n=Ze(e,t);if(n!==null){var r=se();Me(n,e,t,r)}ya(e,t)}};Ts=function(){return F};Es=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Vo=function(e,t,n){switch(t){case"input":if(Fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Bl(r);if(!l)throw Error(S(90));ns(r),Fo(r,l)}}}break;case"textarea":ls(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};ds=pa;fs=Mt;var Fp={usingClientEntryPoint:!1,Events:[yr,qt,Bl,ss,cs,pa]},Fn={findFiberByHostInstance:Pt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ms(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{Rl=$r.inject(Mp),We=$r}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(S(200));return Bp(e,t,null,n)};Ce.createRoot=function(e,t){if(!wa(e))throw Error(S(299));var n=!1,r="",l=Yc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ga(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,or(e.nodeType===8?e.parentNode:e),new Sa(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ms(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Mt(e)};Ce.hydrate=function(e,t,n){if(!Wl(t))throw Error(S(200));return Vl(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Yc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Kc(t,null,e,1,n??null,l,!1,o,i),e[Ge]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Al(t)};Ce.render=function(e,t,n){if(!Wl(t))throw Error(S(200));return Vl(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(S(40));return e._reactRootContainer?(Mt(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};Ce.unstable_batchedUpdates=pa;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Vl(e,t,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ce})(Bd);var Lu=tl;Po.createRoot=Lu.createRoot,Po.hydrateRoot=Lu.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const Bu="popstate";function Ip(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:i,hash:a}=r.location;return Ni("",{pathname:o,search:i,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:xl(l)}return $p(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jp(){return Math.random().toString(36).substr(2,8)}function zu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ni(e,t,n,r){return n===void 0&&(n=null),hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tn(t):t,{state:n,key:t&&t.key||r||jp()})}function xl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $p(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,a=at.Pop,s=null,c=h();c==null&&(c=0,i.replaceState(hr({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function v(){a=at.Pop;let O=h(),f=O==null?null:O-c;c=O,s&&s({action:a,location:y.location,delta:f})}function m(O,f){a=at.Push;let d=Ni(y.location,O,f);n&&n(d,O),c=h()+1;let p=zu(d,c),g=y.createHref(d);try{i.pushState(p,"",g)}catch{l.location.assign(g)}o&&s&&s({action:a,location:y.location,delta:1})}function k(O,f){a=at.Replace;let d=Ni(y.location,O,f);n&&n(d,O),c=h();let p=zu(d,c),g=y.createHref(d);i.replaceState(p,"",g),o&&s&&s({action:a,location:y.location,delta:0})}function N(O){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof O=="string"?O:xl(O);return X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let y={get action(){return a},get location(){return e(l,i)},listen(O){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Bu,v),s=O,()=>{l.removeEventListener(Bu,v),s=null}},createHref(O){return t(l,O)},createURL:N,encodeLocation(O){let f=N(O);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:k,go(O){return i.go(O)}};return y}var Uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uu||(Uu={}));function Ap(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Tn(t):t,l=Zc(r.pathname||"/",n);if(l==null)return null;let o=Xc(e);Wp(o);let i=null;for(let a=0;i==null&&a<o.length;++a)i=Zp(o[a],eh(l));return i}function Xc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,i,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Xc(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Xp(c,o.index),routesMeta:h})};return e.forEach((o,i)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,i);else for(let s of Gc(o.path))l(o,i,s)}),t}function Gc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=Gc(r.join("/")),a=[];return a.push(...i.map(s=>s===""?o:[o,s].join("/"))),l&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Wp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vp=/^:\w+$/,Hp=3,Qp=2,Jp=1,Kp=10,Yp=-2,Fu=e=>e==="*";function Xp(e,t){let n=e.split("/"),r=n.length;return n.some(Fu)&&(r+=Yp),t&&(r+=Qp),n.filter(l=>!Fu(l)).reduce((l,o)=>l+(Vp.test(o)?Hp:o===""?Jp:Kp),r)}function Gp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Zp(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",h=bp({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let v=a.route;o.push({params:r,pathname:vt([l,h.pathname]),pathnameBase:lh(vt([l,h.pathnameBase])),route:v}),h.pathnameBase!=="/"&&(l=vt([l,h.pathnameBase]))}return o}function bp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=qp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,v)=>{if(h==="*"){let m=a[v]||"";i=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=th(a[v]||"",h),c},{}),pathname:o,pathnameBase:i,pattern:e}}function qp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ka(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function eh(e){try{return decodeURI(e)}catch(t){return ka(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function th(e,t){try{return decodeURIComponent(e)}catch(n){return ka(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Zc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ka(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Tn(e):e;return{pathname:n?n.startsWith("/")?n:rh(n,t):t,search:oh(r),hash:ih(l)}}function rh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function To(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Tn(e):(l=hr({},e),X(!l.pathname||!l.pathname.includes("?"),To("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),To("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),To("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,a;if(r||i==null)a=n;else{let v=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),v-=1;l.pathname=m.join("/")}a=v>=0?t[v]:"/"}let s=nh(l,a),c=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),lh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ih=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ah(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uh=["post","put","patch","delete"];[...uh];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const ch=typeof Object.is=="function"?Object.is:sh,{useState:dh,useEffect:fh,useLayoutEffect:ph,useDebugValue:hh}=Do;function mh(e,t,n){const r=t(),[{inst:l},o]=dh({inst:{value:r,getSnapshot:t}});return ph(()=>{l.value=r,l.getSnapshot=t,Eo(l)&&o({inst:l})},[e,r,t]),fh(()=>(Eo(l)&&o({inst:l}),e(()=>{Eo(l)&&o({inst:l})})),[e]),hh(r),r}function Eo(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!ch(n,r)}catch{return!0}}function vh(e,t,n){return t()}const gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yh=!gh,Sh=yh?vh:mh;"useSyncExternalStore"in Do&&(e=>e.useSyncExternalStore)(Do);const ed=w.createContext(null),Na=w.createContext(null),Hl=w.createContext(null),Ql=w.createContext(null),En=w.createContext({outlet:null,matches:[]}),td=w.createContext(null);function wh(e,t){let{relative:n}=t===void 0?{}:t;xn()||X(!1);let{basename:r,navigator:l}=w.useContext(Hl),{hash:o,pathname:i,search:a}=rd(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:vt([r,i])),l.createHref({pathname:s,search:a,hash:o})}function xn(){return w.useContext(Ql)!=null}function wr(){return xn()||X(!1),w.useContext(Ql).location}function nd(){xn()||X(!1);let{basename:e,navigator:t}=w.useContext(Hl),{matches:n}=w.useContext(En),{pathname:r}=wr(),l=JSON.stringify(bc(n).map(a=>a.pathnameBase)),o=w.useRef(!1);return w.useEffect(()=>{o.current=!0}),w.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let c=qc(a,JSON.parse(l),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:vt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,l,r])}function rd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(En),{pathname:l}=wr(),o=JSON.stringify(bc(r).map(i=>i.pathnameBase));return w.useMemo(()=>qc(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function kh(e,t){xn()||X(!1);let{navigator:n}=w.useContext(Hl),r=w.useContext(Na),{matches:l}=w.useContext(En),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=wr(),c;if(t){var h;let y=typeof t=="string"?Tn(t):t;a==="/"||(h=y.pathname)!=null&&h.startsWith(a)||X(!1),c=y}else c=s;let v=c.pathname||"/",m=a==="/"?v:v.slice(a.length)||"/",k=Ap(e,{pathname:m}),N=Eh(k&&k.map(y=>Object.assign({},y,{params:Object.assign({},i,y.params),pathname:vt([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:vt([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,r||void 0);return t&&N?w.createElement(Ql.Provider,{value:{location:Ci({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:at.Pop}},N):N}function Nh(){let e=Rh(),t=ah(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,o)}class Ch extends w.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(En.Provider,{value:this.props.routeContext},w.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Th(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(ed);return l&&l.static&&l.staticContext&&n.route.errorElement&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(En.Provider,{value:t},r)}function Eh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,l=n==null?void 0:n.errors;if(l!=null){let o=r.findIndex(i=>i.route.id&&(l==null?void 0:l[i.route.id]));o>=0||X(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,i,a)=>{let s=i.route.id?l==null?void 0:l[i.route.id]:null,c=n?i.route.errorElement||w.createElement(Nh,null):null,h=t.concat(r.slice(0,a+1)),v=()=>w.createElement(Th,{match:i,routeContext:{outlet:o,matches:h}},s?c:i.route.element!==void 0?i.route.element:o);return n&&(i.route.errorElement||a===0)?w.createElement(Ch,{location:n.location,component:c,error:s,children:v(),routeContext:{outlet:null,matches:h}}):v()},null)}var Mu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Mu||(Mu={}));var Dl;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Dl||(Dl={}));function xh(e){let t=w.useContext(Na);return t||X(!1),t}function Dh(e){let t=w.useContext(En);return t||X(!1),t}function Ph(e){let t=Dh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Rh(){var e;let t=w.useContext(td),n=xh(Dl.UseRouteError),r=Ph(Dl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Oh(e){let{to:t,replace:n,state:r,relative:l}=e;xn()||X(!1);let o=w.useContext(Na),i=nd();return w.useEffect(()=>{o&&o.navigation.state!=="idle"||i(t,{replace:n,state:r,relative:l})}),null}function fe(e){X(!1)}function _h(e){let{basename:t="/",children:n=null,location:r,navigationType:l=at.Pop,navigator:o,static:i=!1}=e;xn()&&X(!1);let a=t.replace(/^\/*/,"/"),s=w.useMemo(()=>({basename:a,navigator:o,static:i}),[a,o,i]);typeof r=="string"&&(r=Tn(r));let{pathname:c="/",search:h="",hash:v="",state:m=null,key:k="default"}=r,N=w.useMemo(()=>{let y=Zc(c,a);return y==null?null:{pathname:y,search:h,hash:v,state:m,key:k}},[a,c,h,v,m,k]);return N==null?null:w.createElement(Hl.Provider,{value:s},w.createElement(Ql.Provider,{children:n,value:{location:N,navigationType:l}}))}function ld(e){let{children:t,location:n}=e,r=w.useContext(ed),l=r&&!t?r.router.routes:Ti(t);return kh(l,n)}var Iu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Iu||(Iu={}));new Promise(()=>{});function Ti(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){n.push.apply(n,Ti(r.props.children,t));return}r.type!==fe&&X(!1),!r.props.index||!r.props.children||X(!1);let o=[...t,l],i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=Ti(r.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}function Lh(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zh(e,t){return e.button===0&&(!t||t==="_self")&&!Bh(e)}const Uh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Fh(e){let{basename:t,children:n,window:r}=e,l=w.useRef();l.current==null&&(l.current=Ip({window:r,v5Compat:!0}));let o=l.current,[i,a]=w.useState({action:o.action,location:o.location});return w.useLayoutEffect(()=>o.listen(a),[o]),w.createElement(_h,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o})}const Mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",At=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:a,target:s,to:c,preventScrollReset:h}=t,v=Lh(t,Uh),m,k=!1;if(Mh&&typeof c=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){m=c;let f=new URL(window.location.href),d=c.startsWith("//")?new URL(f.protocol+c):new URL(c);d.origin===f.origin?c=d.pathname+d.search+d.hash:k=!0}let N=wh(c,{relative:l}),y=Ih(c,{replace:i,state:a,target:s,preventScrollReset:h,relative:l});function O(f){r&&r(f),f.defaultPrevented||y(f)}return w.createElement("a",Ei({},v,{href:m||N,onClick:k||o?r:O,ref:n,target:s}))});var ju;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ju||(ju={}));var $u;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($u||($u={}));function Ih(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:i}=t===void 0?{}:t,a=nd(),s=wr(),c=rd(e,{relative:i});return w.useCallback(h=>{if(zh(h,n)){h.preventDefault();let v=r!==void 0?r:xl(s)===xl(c);a(e,{replace:v,state:l,preventScrollReset:o,relative:i})}},[s,a,c,r,l,n,e,o,i])}function jh({firstName:e,lastName:t,dateOfBirth:n}){return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:C("tr",{children:[u("td",{children:"TypeScript"}),u("td",{children:e}),u("td",{children:t}),u("td",{children:n.toDateString()})]})})]})}function $h({firstName:e,lastName:t,dateOfBirth:n}){return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:C("tr",{children:[u("td",{children:"JavaScript"}),u("td",{children:e}),u("td",{children:t}),u("td",{children:n.toDateString()})]})})]})}const Ah=`import React from "react";

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
`,Wh=`import React from "react";

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
`,Vh=`import React, { ReactNode } from "react";

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
`;function Ne({input1:e,input2:t}){return w.useEffect(()=>{Prism.highlightAll()},[e,t]),t?C("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[u("pre",{className:"language-jsx",style:{flex:"1",minWidth:"600px"},children:u("code",{className:"language-jsx",children:e})}),u("pre",{className:"language-jsx",style:{flex:"1",minWidth:"600px"},children:u("code",{className:"language-jsx",children:t})})]}):u("div",{children:u("pre",{className:"language-jsx",children:u("code",{className:"language-jsx",children:e})})})}function Hh(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}}const Qh={popover:{position:"absolute",width:900,transform:"translate(-450px, -100%)"}},Jh=({children:e,coords:t,updateTooltipCoords:n,tooltipRef:r,title:l})=>{const o=Hh(n,100);return w.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]),u("div",{style:{...Qh.popover,...t},className:"ant-popover ant-popover-placement-top",ref:r,children:C("div",{className:"ant-popover-content",children:[u("div",{className:"ant-popover-arrow"}),u("div",{className:"ant-popover-inner",role:"tooltip",children:u("div",{children:u("div",{className:"ant-popover-inner-content",children:e})})})]})})},Kh=({children:e})=>{const t=document.getElementById("portal-root"),n=document.createElement("div");return w.useEffect(()=>(t.appendChild(n),()=>t.removeChild(n)),[n,t]),tl.createPortal(e,n)};function Yh(e,t,n){w.useEffect(()=>{function r(l){t.current&&!t.current.contains(l.target)&&n&&!n.current.contains(l.target)&&e()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t,n])}const od=({ifoRef:e,...t})=>u("div",{className:"info",ref:e,...t,children:u("small",{className:"infoIcon",children:"i"})}),kr=({children:e,title:t,openOnMount:n})=>{const[r,l]=w.useState(!1),[o,i]=w.useState({}),a=w.useRef(),s=w.useRef(),c=w.useRef(0);Yh(()=>l(!1),s,a);const h=v=>{const m=v.getBoundingClientRect();i({left:m.x+m.width/2-c.current,top:m.y+window.scrollY-10})};return w.useEffect(()=>{n&&(c.current=5,h(a.current),l(!0))},[]),C("div",{className:"ml-1",children:[u(od,{ifoRef:a,onClick:v=>{c.current=0,h(v.target),l(!r)}}),r&&u(Kh,{children:u(Jh,{coords:o,tooltipRef:s,title:t,updateTooltipCoords:()=>h(btnRef.current.buttonNode),children:u("div",{children:e})})})]})},Xh=()=>C("div",{className:"flex",children:[u("h3",{children:"Reminder"}),u(kr,{title:"Info",children:u("div",{children:C("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[C("li",{children:["ReactElement - ",u("code",{children:"interface ReactElement<P, T>"}),u("br",{}),"A ReactElement is an object with ",u("code",{children:"type: T"}),", ",u("code",{children:"props: P"}),", and key ",u("code",{children:"key: string | number | null"})," attributes."]}),C("li",{children:["JSX.Element - ",u("code",{children:"extends React.ReactElement<any, any>"}),u("br",{}),"A more generic version of ReactElement where props and type are of type ",u("code",{children:"any"})]}),C("li",{children:["ReactNode - ",u("code",{children:"ReactNode = ReactElement | ReactFragment | boolean | null | undefined ...;"}),u("br",{}),"A ReactNode is a ReactElement, a ReactFragment, a string, a number, an array of ReactNodes, null, undefined, or a boolean."]}),C("li",{children:["FC - ",u("code",{children:"type FC<P> = FunctionalComponent<P>"}),u("br",{}),'A type to describe a react functional component that was originally added to "Provides an explicit return type"',u("br",{}),"However, recently it is of many opinions to NOT use it anymore, see ",u("a",{href:"https://github.com/facebook/create-react-app/pull/8177",children:"here"})," where it was removed from create react app.",u("br",{}),u(Ne,{input1:`const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ } // Without FC             
const Component2: FC<ComponentProps> = (props) => { /*...*/ }          // With FC                 
const Component3 = (props: ComponentProps): => { /*...*/ }             // Today with type inference`})]})]})})})]});function Jl({newSyntax:e,setNewSyntax:t}){const n=w.useRef();return w.useEffect(()=>{const r=()=>{window.pageYOffset>470?n.current.classList.add("sticky"):n.current.classList.remove("sticky")};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},[]),C("div",{style:{display:"flex",width:"100%"},ref:n,children:[u("h2",{style:{width:"100%"},children:"JavaScript"}),C("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[u("div",{style:{position:"absolute",left:"0px",display:"flex",alignItems:"center"},children:u(Xh,{})}),u("h2",{children:"TypeScript"}),C("div",{style:{position:"absolute",right:"0px",display:"flex",alignItems:"center"},children:[u("strong",{children:"Verbose"}),C("label",{className:"switch",children:[u("input",{type:"checkbox",checked:e,onChange:r=>t(r.target.checked)}),u("span",{className:"slider round"})]}),u("strong",{children:"Simple"})]})]})]})}function Gh(){const[e,t]=w.useState(!1);return C(kn,{children:[u($h,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(jh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Jl,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),u("br",{}),u(Ne,{input1:Wh,input2:e?Ah:Vh})]})}const Ar=({children:e})=>u("td",{className:"td-class",children:e});function Zh({firstName:e,lastName:t,dateOfBirth:n}){return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:C("tr",{children:[u(Ar,{children:"TypeScript"}),u(Ar,{children:e}),u(Ar,{children:t}),u(Ar,{children:n.toDateString()})]})})]})}const Wr=({children:e})=>u("td",{className:"td-class",children:e});function bh({firstName:e,lastName:t,dateOfBirth:n}){return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"})]})}),u("tbody",{children:C("tr",{children:[u(Wr,{children:"JavaScript"}),u(Wr,{children:e}),u(Wr,{children:t}),u(Wr,{children:n.toDateString()})]})})]})}const qh=`import React, { ReactNode } from "react";

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
`,em=`import React from "react";

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
`,tm=`import React, { FC, ReactNode } from "react";

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
`;function nm(){const[e,t]=w.useState(!1);return C(kn,{children:[u(bh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Zh,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Jl,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),u("br",{}),u(Ne,{input1:em,input2:e?qh:tm})]})}const Wt=({children:e})=>u("td",{className:"td-class",children:e}),rm=e=>e+1;function lm({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=w.useState(0),o=()=>{l(i=>rm(i))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"})]})}),u("tbody",{children:C("tr",{children:[u(Wt,{children:"TypeScript"}),u(Wt,{children:e}),u(Wt,{children:t}),u(Wt,{children:n.toDateString()}),u(Wt,{children:r}),u(Wt,{children:u("button",{onClick:o,children:"Add One"})})]})})]})}const Vt=({children:e})=>u("td",{className:"td-class",children:e}),om=e=>e+1;function im({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=w.useState(0),o=()=>{l(i=>om(i))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"})]})}),u("tbody",{children:C("tr",{children:[u(Vt,{children:"JavaScript"}),u(Vt,{children:e}),u(Vt,{children:t}),u(Vt,{children:n.toDateString()}),u(Vt,{children:r}),u(Vt,{children:u("button",{onClick:o,children:"Add One"})})]})})]})}const am=`import React, { ReactNode, useState } from "react";

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
`,um=`import React, { useState } from "react";

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
`,sm=`import React, { FC, ReactNode, useState } from "react";

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
`;function cm(){const[e,t]=w.useState(!1);return C(kn,{children:[u(im,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(lm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),u(Jl,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),u("br",{}),u(Ne,{input1:um,input2:e?am:sm})]})}const Tt=({children:e})=>u("td",{className:"td-class",children:e}),dm=e=>e+1;function fm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=w.useState(0),a=()=>{i(s=>dm(s))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:C("tr",{children:[u(Tt,{children:"TypeScript"}),u(Tt,{children:e}),u(Tt,{children:t}),u(Tt,{children:n.toDateString()}),u(Tt,{children:o}),u(Tt,{children:u(l,{onClick:a})}),u(Tt,{children:r})]})})]})}const Et=({children:e})=>u("td",{className:"td-class",children:e}),pm=e=>e+1;function hm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=w.useState(0),a=()=>{i(s=>pm(s))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"Written With"}),u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:C("tr",{children:[u(Et,{children:"JavaScript"}),u(Et,{children:e}),u(Et,{children:t}),u(Et,{children:n.toDateString()}),u(Et,{children:o}),u(Et,{children:u(l,{onClick:a})}),u(Et,{children:r})]})})]})}const mm=`import React, { ReactNode, ComponentType, MouseEventHandler, useState } from "react";

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
`,vm=`import React, { useState } from "react";

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
`,gm=`import React, { FC, ReactNode, ComponentType, MouseEventHandler, useState } from "react";

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
`,ym=({onClick:e})=>u("button",{onClick:e,style:{backgroundColor:"blue"},children:"Add One"}),Sm=({onClick:e})=>u("button",{onClick:e,style:{backgroundColor:"red"},children:"Add One"});function wm(){const[e,t]=w.useState(!1);return C(kn,{children:[u(hm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:ym}),u(fm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:Sm}),u(Jl,{newSyntax:e,setNewSyntax:t}),u(Ne,{input1:`import User from "./User";

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
`}),u("br",{}),u(Ne,{input1:vm,input2:e?mm:gm})]})}const Ht=({children:e})=>u("td",{className:"td-class",children:e}),km=e=>e+1,Nm=({color:e,...t})=>u("button",{style:{backgroundColor:"red",color:e},...t,children:"Add One"});function Cm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[a,s]=w.useState(0),c=()=>{s(h=>km(h))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:C("tr",{children:[u(Ht,{children:e}),u(Ht,{children:t}),u(Ht,{children:n.toDateString()}),u(Ht,{children:a}),u(Ht,{children:u(l,{onClick:c,disabled:o,color:i})}),u(Ht,{children:r})]})})]})}const Qt=({children:e})=>u("td",{className:"td-class",children:e}),Tm=e=>e+1,Em=({color:e,...t})=>u("button",{style:{backgroundColor:"blue",color:e},...t,children:"Add One"});function xm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[a,s]=w.useState(0),c=()=>{s(h=>Tm(h))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:C("tr",{children:[u(Qt,{children:e}),u(Qt,{children:t}),u(Qt,{children:n.toDateString()}),u(Qt,{children:a}),u(Qt,{children:u(l,{onClick:c,disabled:o,color:i})}),u(Qt,{children:r})]})})]})}const Dm=`import React, { ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
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
`,Pm=`import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td className="td-class">{children}</td>;
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
`;function Rm(){return C(kn,{children:[u(xm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:Em,disabled:!0}),u(Cm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:Nm,color:"black"}),u(Ne,{input1:`<User 
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
`}),u("br",{}),u(Ne,{input1:Pm,input2:Dm})]})}const Jt=({children:e})=>u("td",{className:"td-class",children:e}),Om=e=>e+1,_m=({color:e,...t})=>u("button",{style:{backgroundColor:"red",color:e},...t,children:"Add One"});function Lm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[a,s]=w.useState(0),c=()=>{s(h=>Om(h))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:C("tr",{children:[u(Jt,{children:e}),u(Jt,{children:t}),u(Jt,{children:n.toDateString()}),u(Jt,{children:a}),u(Jt,{children:u(l,{onClick:c,disabled:o,color:i})}),u(Jt,{children:r})]})})]})}const Kt=({children:e})=>u("td",{className:"td-class",children:e}),Bm=e=>e+1,zm=({color:e,...t})=>u("button",{style:{backgroundColor:"blue",color:e},...t,children:"Add One"});function Um({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[a,s]=w.useState(0),c=()=>{s(h=>Bm(h))};return C("table",{children:[u("thead",{children:C("tr",{children:[u("th",{children:"First Name"}),u("th",{children:"Last Name"}),u("th",{children:"Date of Birth"}),u("th",{children:"Count"}),u("th",{children:"Action"}),u("th",{children:"Thing"})]})}),u("tbody",{children:C("tr",{children:[u(Kt,{children:e}),u(Kt,{children:t}),u(Kt,{children:n.toDateString()}),u(Kt,{children:a}),u(Kt,{children:u(l,{onClick:c,disabled:o,color:i})}),u(Kt,{children:r})]})})]})}const Fm=`import React, { ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
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
`,Mm=`import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td className="td-class">{children}</td>;
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
`,Im=({a:e,b:t})=>u("strong",{children:e+t}),jm=({a:e,b:t})=>u("strong",{children:e-t});function $m(){return C(kn,{children:[u(Um,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:u(Im,{a:24,b:4}),Button:zm,disabled:!0}),u(Lm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:u(jm,{a:24,b:4}),Button:_m,color:"black"}),u(Ne,{input1:`
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
`}),u("br",{}),u(Ne,{input1:Mm,input2:Fm})]})}const id=Oi.createContext(),Am=({children:e})=>{const[t,n]=w.useState({visited:{}}),l={...t,visit:o=>{n(i=>{const a={...i};return a.visited[o]=!0,a})}};return u(id.Provider,{value:l,children:e})},Wm=()=>w.useContext(id),Kl=e=>{const{visit:t,visited:n}=Wm(),r=!n[e];return w.useEffect(()=>{t(e)},[]),{firstTime:r}},xo=()=>{const{firstTime:e}=Kl("v1");return u(kr,{title:"Info",openOnMount:e,children:u("div",{children:C("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[u("li",{children:"Create a user component that shows firstName, lastName, and dateOfBirth. First name and last name are strings, date is a JS date object."}),C("li",{children:["The key difference between the two is that we needed to define ",u("code",{children:"UserProps"})," in the Typescript code"]}),C("li",{children:['Also, take note of the switch toggle "verbose" vs "simple". This will show you two different variations of things might be typed in the wild. Specifically in this example, note how we have a return type of ',u("code",{children:"ReactNode"})," in verbose but not in simple.",u("br",{}),C("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[C("div",{children:[u("strong",{children:"Note: "}),"Click on the"]}),"Reminder ",u(od,{}),"icon below at any time to help remind yourself how the react types work."]})]})]})})})},Vm=()=>{const{firstTime:e}=Kl("v2");return u(kr,{title:"Info",openOnMount:e,children:u("div",{children:C("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[C("li",{children:["We want to style every ",u("code",{children:"td"}),"(table data) item in our table."]}),C("li",{children:["We could do this by adding ",u("code",{children:'className="td-class"'})," to every ",u("code",{children:"td"})," line."]}),C("li",{children:["A better way is to, create a reusable table data component that adds a class to the ",u("code",{children:"td"})," element."]}),C("li",{children:["Note in the TypeScript code we needed to define ",u("code",{children:"TableDataProps"})]})]})})})},Hm=()=>{const{firstTime:e}=Kl("v3");return u(kr,{title:"Info",openOnMount:e,children:u("div",{children:C("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[u("li",{children:'We want to add a count and "Add One" button action that will increment the count column.'}),C("li",{children:["Note how we added an ",u("code",{children:"addOne"})," helper function outside of the component."]}),u("li",{children:'Also toggle the "verbose" vs "simple" toggle and see how many of the things we write can use type inference.'}),C("li",{children:["Specifically see how the ",u("code",{children:"useState"})," code becomes identical to the pure JS code!"]})]})})})},Qm=()=>{const{firstTime:e}=Kl("v4");return u(kr,{title:"Info",openOnMount:e,children:u("div",{children:u("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:C("li",{children:["Previously we always rendered a simple hard coded button in the action column. Now, we want the ability for the developer to pass in their own ",u("code",{children:"Button"})," component."]})})})})},Jm=()=>C(ld,{children:[u(fe,{path:"v1",element:u(xo,{})}),u(fe,{path:"v2",element:u(Vm,{})}),u(fe,{path:"v3",element:u(Hm,{})}),u(fe,{path:"v4",element:u(Qm,{})}),u(fe,{path:"v5",element:u(xo,{})}),u(fe,{path:"v6",element:u(xo,{})})]});function Km(){w.useState(0);const e=wr().pathname.replace("/","");return C("div",{className:"App",children:[C("nav",{children:[u(At,{to:"v1",children:"V1"}),u(At,{to:"v2",children:"V2"}),u(At,{to:"v3",children:"V3"}),u(At,{to:"v4",children:"V4"}),u(At,{to:"v5",children:"V5"}),u(At,{to:"v6",children:"V6"})]}),C("main",{children:[C("div",{className:"flex",children:[C("h1",{children:["Why Not Typescript ",e]}),u(Jm,{})]}),C(ld,{children:[u(fe,{path:"/",element:u(Oh,{to:"v1"})}),u(fe,{path:"v1",element:u(Gh,{})}),u(fe,{path:"v2",element:u(nm,{})}),u(fe,{path:"v3",element:u(cm,{})}),u(fe,{path:"v4",element:u(wm,{})}),u(fe,{path:"v5",element:u(Rm,{})}),u(fe,{path:"v6",element:u($m,{})})]})]})]})}Po.createRoot(document.getElementById("root")).render(u(Oi.StrictMode,{children:u(Am,{children:C(Fh,{basename:"/ts-video",children:[u("div",{id:"portal-root"}),u(Km,{})]})})}));
