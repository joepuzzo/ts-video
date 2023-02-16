function dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tr={},hd={get exports(){return tr},set exports(e){tr=e}},_l={},w={},pd={get exports(){return w},set exports(e){w=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),md=Symbol.for("react.portal"),vd=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),kd=Symbol.for("react.memo"),Td=Symbol.for("react.lazy"),xa=Symbol.iterator;function Dd(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var Hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vu=Object.assign,Qu={};function xn(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||Hu}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=xn.prototype;function Ei(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||Hu}var Pi=Ei.prototype=new Ju;Pi.constructor=Ei;Vu(Pi,xn.prototype);Pi.isPureReactComponent=!0;var Ea=Array.isArray,Ku=Object.prototype.hasOwnProperty,Bi={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ku.call(t,r)&&!Xu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:wr,type:e,key:o,ref:i,props:l,_owner:Bi.current}}function xd(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function Ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pa=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):t.toString(36)}function Jr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wr:case md:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+ql(i,0):r,Ea(l)?(n="",e!=null&&(n=e.replace(Pa,"$&/")+"/"),Jr(l,t,n,"",function(c){return c})):l!=null&&(Oi(l)&&(l=xd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Pa,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ea(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+ql(o,u);i+=Jr(o,t,n,s,l)}else if(s=Dd(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+ql(o,u++),i+=Jr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Pr(e,t,n){if(e==null)return e;var r=[],l=0;return Jr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Pd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Kr={transition:null},Bd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:Bi};L.Children={map:Pr,forEach:function(e,t,n){Pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pr(e,function(){t++}),t},toArray:function(e){return Pr(e,function(t){return t})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=xn;L.Fragment=vd;L.Profiler=yd;L.PureComponent=Ei;L.StrictMode=gd;L.Suspense=Cd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Ku.call(t,s)&&!Xu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:wr,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sd,_context:e},e.Consumer=e};L.createElement=Yu;L.createFactory=function(e){var t=Yu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Nd,render:e}};L.isValidElement=Oi;L.lazy=function(e){return{$$typeof:Td,_payload:{_status:-1,_result:e},_init:Pd}};L.memo=function(e,t){return{$$typeof:kd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(pd);const Ri=fd(w),Po=dd({__proto__:null,default:Ri},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=w,Rd=Symbol.for("react.element"),_d=Symbol.for("react.fragment"),Ld=Object.prototype.hasOwnProperty,Ud=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zd={key:!0,ref:!0,__self:!0,__source:!0};function Gu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ld.call(t,r)&&!zd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rd,type:e,key:o,ref:i,props:l,_owner:Ud.current}}_l.Fragment=_d;_l.jsx=Gu;_l.jsxs=Gu;(function(e){e.exports=_l})(hd);const Ht=tr.Fragment,a=tr.jsx,y=tr.jsxs;var Bo={},ol={},Fd={get exports(){return ol},set exports(e){ol=e}},ke={},Oo={},Md={get exports(){return Oo},set exports(e){Oo=e}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,R){var _=x.length;x.push(R);e:for(;0<_;){var Q=_-1>>>1,Z=x[Q];if(0<l(Z,R))x[Q]=R,x[_]=Z,_=Q;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var R=x[0],_=x.pop();if(_!==R){x[0]=_;e:for(var Q=0,Z=x.length,xr=Z>>>1;Q<xr;){var kt=2*(Q+1)-1,Zl=x[kt],Tt=kt+1,Er=x[Tt];if(0>l(Zl,_))Tt<Z&&0>l(Er,Zl)?(x[Q]=Er,x[Tt]=_,Q=Tt):(x[Q]=Zl,x[kt]=_,Q=kt);else if(Tt<Z&&0>l(Er,_))x[Q]=Er,x[Tt]=_,Q=Tt;else break e}}return R}function l(x,R){var _=x.sortIndex-R.sortIndex;return _!==0?_:x.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],c=[],p=1,v=null,m=3,C=!1,k=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(x){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=x)r(c),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(c)}}function g(x){if(S=!1,h(x),!k)if(n(s)!==null)k=!0,Yl(D);else{var R=n(c);R!==null&&Gl(g,R.startTime-x)}}function D(x,R){k=!1,S&&(S=!1,f(B),B=-1),C=!0;var _=m;try{for(h(R),v=n(s);v!==null&&(!(v.expirationTime>R)||x&&!Re());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,m=v.priorityLevel;var Z=Q(v.expirationTime<=R);R=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===n(s)&&r(s),h(R)}else r(s);v=n(s)}if(v!==null)var xr=!0;else{var kt=n(c);kt!==null&&Gl(g,kt.startTime-R),xr=!1}return xr}finally{v=null,m=_,C=!1}}var E=!1,P=null,B=-1,V=5,U=-1;function Re(){return!(e.unstable_now()-U<V)}function _n(){if(P!==null){var x=e.unstable_now();U=x;var R=!0;try{R=P(!0,x)}finally{R?Ln():(E=!1,P=null)}}else E=!1}var Ln;if(typeof d=="function")Ln=function(){d(_n)};else if(typeof MessageChannel<"u"){var Da=new MessageChannel,cd=Da.port2;Da.port1.onmessage=_n,Ln=function(){cd.postMessage(null)}}else Ln=function(){O(_n,0)};function Yl(x){P=x,E||(E=!0,Ln())}function Gl(x,R){B=O(function(){x(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){k||C||(k=!0,Yl(D))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var _=m;m=R;try{return x()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,R){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var _=m;m=x;try{return R()}finally{m=_}},e.unstable_scheduleCallback=function(x,R,_){var Q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Q+_:Q):_=Q,x){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,x={id:p++,callback:R,priorityLevel:x,startTime:_,expirationTime:Z,sortIndex:-1},_>Q?(x.sortIndex=_,t(c,x),n(s)===null&&x===n(c)&&(S?(f(B),B=-1):S=!0,Gl(g,_-Q))):(x.sortIndex=Z,t(s,x),k||C||(k=!0,Yl(D))),x},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(x){var R=m;return function(){var _=m;m=R;try{return x.apply(this,arguments)}finally{m=_}}}})(Zu);(function(e){e.exports=Zu})(Md);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=w,Ce=Oo;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var es=new Set,nr={};function Vt(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(nr[e]=t,e=0;e<t.length;e++)es.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ba={},Oa={};function Id(e){return Ro.call(Oa,e)?!0:Ro.call(Ba,e)?!1:bd.test(e)?Oa[e]=!0:(Ba[e]=!0,!1)}function $d(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||$d(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var _i=/[\-:]([a-z])/g;function Li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_i,Li);re[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_i,Li);re[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_i,Li);re[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ui(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,l,r)&&(n=null),r||l===null?Id(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),zi=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),ts=Symbol.for("react.provider"),ns=Symbol.for("react.context"),Fi=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Uo=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),rs=Symbol.for("react.offscreen"),Ra=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,eo;function jn(e){if(eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eo=t&&t[1]||""}return`
`+eo+e}var to=!1;function no(e,t){if(!e||to)return"";to=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{to=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function jd(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=no(e.type,!1),e;case 11:return e=no(e.type.render,!1),e;case 1:return e=no(e.type,!0),e;default:return""}}function zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case _o:return"Profiler";case zi:return"StrictMode";case Lo:return"Suspense";case Uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ns:return(e.displayName||"Context")+".Consumer";case ts:return(e._context.displayName||"Context")+".Provider";case Fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:zo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return zo(e(t))}catch{}}return null}function Wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zo(t);case 8:return t===zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ls(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hd(e){var t=ls(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=Hd(e))}function os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ls(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _a(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function is(e,t){t=t.checked,t!=null&&Ui(e,"checked",t,!1)}function Mo(e,t){is(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bo(e,t.type,n):t.hasOwnProperty("defaultValue")&&bo(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bo(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Wn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function as(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,ss=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function ds(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(Qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function jo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,pn=null,mn=null;function Fa(e){if(e=kr(e)){if(typeof Ho!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ml(t),Ho(e.stateNode,e.type,t))}}function fs(e){pn?mn?mn.push(e):mn=[e]:pn=e}function hs(){if(pn){var e=pn,t=mn;if(mn=pn=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function ps(e,t){return e(t)}function ms(){}var ro=!1;function vs(e,t,n){if(ro)return e(t,n);ro=!0;try{return ps(e,t,n)}finally{ro=!1,(pn!==null||mn!==null)&&(ms(),hs())}}function lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Vo=!1;if(Xe)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Vo=!1}function Jd(e,t,n,r,l,o,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Jn=!1,al=null,ul=!1,Qo=null,Kd={onError:function(e){Jn=!0,al=e}};function Xd(e,t,n,r,l,o,i,u,s){Jn=!1,al=null,Jd.apply(Kd,arguments)}function Yd(e,t,n,r,l,o,i,u,s){if(Xd.apply(this,arguments),Jn){if(Jn){var c=al;Jn=!1,al=null}else throw Error(N(198));ul||(ul=!0,Qo=c)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ma(e){if(Qt(e)!==e)throw Error(N(188))}function Gd(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ma(l),e;if(o===r)return Ma(l),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function ys(e){return e=Gd(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var ws=Ce.unstable_scheduleCallback,ba=Ce.unstable_cancelCallback,Zd=Ce.unstable_shouldYield,qd=Ce.unstable_requestPaint,J=Ce.unstable_now,ef=Ce.unstable_getCurrentPriorityLevel,Ii=Ce.unstable_ImmediatePriority,Ns=Ce.unstable_UserBlockingPriority,sl=Ce.unstable_NormalPriority,tf=Ce.unstable_LowPriority,Cs=Ce.unstable_IdlePriority,Ll=null,je=null;function nf(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:of,rf=Math.log,lf=Math.LN2;function of(e){return e>>>=0,e===0?32:31-(rf(e)/lf|0)|0}var _r=64,Lr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=Hn(u):(o&=i,o!==0&&(r=Hn(o)))}else i=n&~l,i!==0?r=Hn(i):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Fe(o),u=1<<i,s=l[i];s===-1?(!(u&n)||u&r)&&(l[i]=af(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ks(){var e=_r;return _r<<=1,!(_r&4194240)&&(_r=64),e}function lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function $i(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ds,Ai,xs,Es,Ps,Ko=!1,Ur=[],ut=null,st=null,ct=null,or=new Map,ir=new Map,rt=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ia(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function Fn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=kr(t),t!==null&&Ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function df(e,t,n,r,l){switch(t){case"focusin":return ut=Fn(ut,e,t,n,r,l),!0;case"dragenter":return st=Fn(st,e,t,n,r,l),!0;case"mouseover":return ct=Fn(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return or.set(o,Fn(or.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ir.set(o,Fn(ir.get(o)||null,e,t,n,r,l)),!0}return!1}function Bs(e){var t=Ut(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=gs(n),t!==null){e.blockedOn=t,Ps(e.priority,function(){xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wo=r,n.target.dispatchEvent(r),Wo=null}else return t=kr(n),t!==null&&Ai(t),e.blockedOn=n,!1;t.shift()}return!0}function $a(e,t,n){Xr(e)&&n.delete(t)}function ff(){Ko=!1,ut!==null&&Xr(ut)&&(ut=null),st!==null&&Xr(st)&&(st=null),ct!==null&&Xr(ct)&&(ct=null),or.forEach($a),ir.forEach($a)}function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,ff)))}function ar(e){function t(l){return Mn(l,e)}if(0<Ur.length){Mn(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Mn(ut,e),st!==null&&Mn(st,e),ct!==null&&Mn(ct,e),or.forEach(t),ir.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Bs(n),n.blockedOn===null&&rt.shift()}var vn=qe.ReactCurrentBatchConfig,dl=!0;function hf(e,t,n,r){var l=F,o=vn.transition;vn.transition=null;try{F=1,ji(e,t,n,r)}finally{F=l,vn.transition=o}}function pf(e,t,n,r){var l=F,o=vn.transition;vn.transition=null;try{F=4,ji(e,t,n,r)}finally{F=l,vn.transition=o}}function ji(e,t,n,r){if(dl){var l=Xo(e,t,n,r);if(l===null)mo(e,t,r,fl,n),Ia(e,r);else if(df(l,e,t,n,r))r.stopPropagation();else if(Ia(e,r),t&4&&-1<cf.indexOf(e)){for(;l!==null;){var o=kr(l);if(o!==null&&Ds(o),o=Xo(e,t,n,r),o===null&&mo(e,t,r,fl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else mo(e,t,r,null,n)}}var fl=null;function Xo(e,t,n,r){if(fl=null,e=bi(r),e=Ut(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function Os(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case Ii:return 1;case Ns:return 4;case sl:case tf:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var ot=null,Wi=null,Yr=null;function Rs(){if(Yr)return Yr;var e,t=Wi,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Yr=l.slice(e,1<r?1-r:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function Aa(){return!1}function Te(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zr:Aa,this.isPropagationStopped=Aa,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Te(En),Cr=W({},En,{view:0,detail:0}),mf=Te(Cr),oo,io,bn,Ul=W({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(oo=e.screenX-bn.screenX,io=e.screenY-bn.screenY):io=oo=0,bn=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:io}}),ja=Te(Ul),vf=W({},Ul,{dataTransfer:0}),gf=Te(vf),yf=W({},Cr,{relatedTarget:0}),ao=Te(yf),Sf=W({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=Te(Sf),Nf=W({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=Te(Nf),kf=W({},En,{data:0}),Wa=Te(kf),Tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xf[e])?!!t[e]:!1}function Vi(){return Ef}var Pf=W({},Cr,{key:function(e){if(e.key){var t=Tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=Te(Pf),Of=W({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ha=Te(Of),Rf=W({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),_f=Te(Rf),Lf=W({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uf=Te(Lf),zf=W({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ff=Te(zf),Mf=[9,13,27,32],Qi=Xe&&"CompositionEvent"in window,Kn=null;Xe&&"documentMode"in document&&(Kn=document.documentMode);var bf=Xe&&"TextEvent"in window&&!Kn,_s=Xe&&(!Qi||Kn&&8<Kn&&11>=Kn),Va=String.fromCharCode(32),Qa=!1;function Ls(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function If(e,t){switch(e){case"compositionend":return Us(t);case"keypress":return t.which!==32?null:(Qa=!0,Va);case"textInput":return e=t.data,e===Va&&Qa?null:e;default:return null}}function $f(e,t){if(nn)return e==="compositionend"||!Qi&&Ls(e,t)?(e=Rs(),Yr=Wi=ot=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _s&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function zs(e,t,n,r){fs(r),t=hl(t,"onChange"),0<t.length&&(n=new Hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,ur=null;function jf(e){Qs(e,0)}function zl(e){var t=on(e);if(os(t))return e}function Wf(e,t){if(e==="change")return t}var Fs=!1;if(Xe){var uo;if(Xe){var so="oninput"in document;if(!so){var Ka=document.createElement("div");Ka.setAttribute("oninput","return;"),so=typeof Ka.oninput=="function"}uo=so}else uo=!1;Fs=uo&&(!document.documentMode||9<document.documentMode)}function Xa(){Xn&&(Xn.detachEvent("onpropertychange",Ms),ur=Xn=null)}function Ms(e){if(e.propertyName==="value"&&zl(ur)){var t=[];zs(t,ur,e,bi(e)),vs(jf,t)}}function Hf(e,t,n){e==="focusin"?(Xa(),Xn=t,ur=n,Xn.attachEvent("onpropertychange",Ms)):e==="focusout"&&Xa()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(ur)}function Qf(e,t){if(e==="click")return zl(t)}function Jf(e,t){if(e==="input"||e==="change")return zl(t)}function Kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:Kf;function sr(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ro.call(t,l)||!be(e[l],t[l]))return!1}return!0}function Ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ga(e,t){var n=Ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ya(n)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Is(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function Ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xf(e){var t=Is(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bs(n.ownerDocument.documentElement,n)){if(r!==null&&Ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ga(n,o);var i=Ga(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yf=Xe&&"documentMode"in document&&11>=document.documentMode,rn=null,Yo=null,Yn=null,Go=!1;function Za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||rn==null||rn!==il(r)||(r=rn,"selectionStart"in r&&Ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yn&&sr(Yn,r)||(Yn=r,r=hl(Yo,"onSelect"),0<r.length&&(t=new Hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},co={},$s={};Xe&&($s=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Fl(e){if(co[e])return co[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $s)return co[e]=t[n];return e}var As=Fl("animationend"),js=Fl("animationiteration"),Ws=Fl("animationstart"),Hs=Fl("transitionend"),Vs=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Vs.set(e,t),Vt(t,[e])}for(var fo=0;fo<qa.length;fo++){var ho=qa[fo],Gf=ho.toLowerCase(),Zf=ho[0].toUpperCase()+ho.slice(1);St(Gf,"on"+Zf)}St(As,"onAnimationEnd");St(js,"onAnimationIteration");St(Ws,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Hs,"onTransitionEnd");Sn("onMouseEnter",["mouseout","mouseover"]);Sn("onMouseLeave",["mouseout","mouseover"]);Sn("onPointerEnter",["pointerout","pointerover"]);Sn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yd(r,t,void 0,e),e.currentTarget=null}function Qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;eu(l,u,c),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;eu(l,u,c),o=s}}}if(ul)throw e=Qo,ul=!1,Qo=null,e}function b(e,t){var n=t[ni];n===void 0&&(n=t[ni]=new Set);var r=e+"__bubble";n.has(r)||(Js(t,e,2,!1),n.add(r))}function po(e,t,n){var r=0;t&&(r|=4),Js(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Mr]){e[Mr]=!0,es.forEach(function(n){n!=="selectionchange"&&(qf.has(n)||po(n,!1,e),po(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,po("selectionchange",!1,t))}}function Js(e,t,n,r){switch(Os(t)){case 1:var l=hf;break;case 4:l=pf;break;default:l=ji}n=l.bind(null,t,n,e),l=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function mo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Ut(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}vs(function(){var c=o,p=bi(n),v=[];e:{var m=Vs.get(e);if(m!==void 0){var C=Hi,k=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":C=Bf;break;case"focusin":k="focus",C=ao;break;case"focusout":k="blur",C=ao;break;case"beforeblur":case"afterblur":C=ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=_f;break;case As:case js:case Ws:C=wf;break;case Hs:C=Uf;break;case"scroll":C=mf;break;case"wheel":C=Ff;break;case"copy":case"cut":case"paste":C=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ha}var S=(t&4)!==0,O=!S&&e==="scroll",f=S?m!==null?m+"Capture":null:m;S=[];for(var d=c,h;d!==null;){h=d;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,f!==null&&(g=lr(d,f),g!=null&&S.push(dr(d,g,h)))),O)break;d=d.return}0<S.length&&(m=new C(m,k,null,n,p),v.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",m&&n!==Wo&&(k=n.relatedTarget||n.fromElement)&&(Ut(k)||k[Ye]))break e;if((C||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,C?(k=n.relatedTarget||n.toElement,C=c,k=k?Ut(k):null,k!==null&&(O=Qt(k),k!==O||k.tag!==5&&k.tag!==6)&&(k=null)):(C=null,k=c),C!==k)){if(S=ja,g="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ha,g="onPointerLeave",f="onPointerEnter",d="pointer"),O=C==null?m:on(C),h=k==null?m:on(k),m=new S(g,d+"leave",C,n,p),m.target=O,m.relatedTarget=h,g=null,Ut(p)===c&&(S=new S(f,d+"enter",k,n,p),S.target=h,S.relatedTarget=O,g=S),O=g,C&&k)t:{for(S=C,f=k,d=0,h=S;h;h=Xt(h))d++;for(h=0,g=f;g;g=Xt(g))h++;for(;0<d-h;)S=Xt(S),d--;for(;0<h-d;)f=Xt(f),h--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break t;S=Xt(S),f=Xt(f)}S=null}else S=null;C!==null&&tu(v,m,C,S,!1),k!==null&&O!==null&&tu(v,O,k,S,!0)}}e:{if(m=c?on(c):window,C=m.nodeName&&m.nodeName.toLowerCase(),C==="select"||C==="input"&&m.type==="file")var D=Wf;else if(Ja(m))if(Fs)D=Jf;else{D=Vf;var E=Hf}else(C=m.nodeName)&&C.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=Qf);if(D&&(D=D(e,c))){zs(v,D,n,p);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&bo(m,"number",m.value)}switch(E=c?on(c):window,e){case"focusin":(Ja(E)||E.contentEditable==="true")&&(rn=E,Yo=c,Yn=null);break;case"focusout":Yn=Yo=rn=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,Za(v,n,p);break;case"selectionchange":if(Yf)break;case"keydown":case"keyup":Za(v,n,p)}var P;if(Qi)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else nn?Ls(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(_s&&n.locale!=="ko"&&(nn||B!=="onCompositionStart"?B==="onCompositionEnd"&&nn&&(P=Rs()):(ot=p,Wi="value"in ot?ot.value:ot.textContent,nn=!0)),E=hl(c,B),0<E.length&&(B=new Wa(B,e,null,n,p),v.push({event:B,listeners:E}),P?B.data=P:(P=Us(n),P!==null&&(B.data=P)))),(P=bf?If(e,n):$f(e,n))&&(c=hl(c,"onBeforeInput"),0<c.length&&(p=new Wa("onBeforeInput","beforeinput",null,n,p),v.push({event:p,listeners:c}),p.data=P))}Qs(v,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=lr(e,n),o!=null&&r.unshift(dr(e,o,l)),o=lr(e,t),o!=null&&r.push(dr(e,o,l))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=lr(n,o),s!=null&&i.unshift(dr(n,s,u))):l||(s=lr(n,o),s!=null&&i.push(dr(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var eh=/\r\n?/g,th=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(eh,`
`).replace(th,"")}function br(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(N(425))}function pl(){}var Zo=null,qo=null;function ei(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ti=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(lh)}:ti;function lh(e){setTimeout(function(){throw e})}function vo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ar(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Pn,fr="__reactProps$"+Pn,Ye="__reactContainer$"+Pn,ni="__reactEvents$"+Pn,oh="__reactListeners$"+Pn,ih="__reactHandles$"+Pn;function Ut(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[Ae])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ml(e){return e[fr]||null}var ri=[],an=-1;function wt(e){return{current:e}}function I(e){0>an||(e.current=ri[an],ri[an]=null,an--)}function M(e,t){an++,ri[an]=e.current,e.current=t}var yt={},ue=wt(yt),ve=wt(!1),It=yt;function wn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function ml(){I(ve),I(ue)}function ou(e,t,n){if(ue.current!==yt)throw Error(N(168));M(ue,t),M(ve,n)}function Ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,Wd(e)||"Unknown",l));return W({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,It=ue.current,M(ue,e),M(ve,ve.current),!0}function iu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Ks(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,I(ve),I(ue),M(ue,e)):I(ve),M(ve,n)}var Ve=null,bl=!1,go=!1;function Xs(e){Ve===null?Ve=[e]:Ve.push(e)}function ah(e){bl=!0,Xs(e)}function Nt(){if(!go&&Ve!==null){go=!0;var e=0,t=F;try{var n=Ve;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,bl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),ws(Ii,Nt),l}finally{F=t,go=!1}}return null}var un=[],sn=0,gl=null,yl=0,De=[],xe=0,$t=null,Qe=1,Je="";function _t(e,t){un[sn++]=yl,un[sn++]=gl,gl=e,yl=t}function Ys(e,t,n){De[xe++]=Qe,De[xe++]=Je,De[xe++]=$t,$t=e;var r=Qe;e=Je;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var o=32-Fe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Qe=1<<32-Fe(t)+l|n<<l|r,Je=o+e}else Qe=1<<o|n<<l|r,Je=e}function Ki(e){e.return!==null&&(_t(e,1),Ys(e,1,0))}function Xi(e){for(;e===gl;)gl=un[--sn],un[sn]=null,yl=un[--sn],un[sn]=null;for(;e===$t;)$t=De[--xe],De[xe]=null,Je=De[--xe],De[xe]=null,Qe=De[--xe],De[xe]=null}var Ne=null,we=null,$=!1,ze=null;function Gs(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function au(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,we=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:Qe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,we=null,!0):!1;default:return!1}}function li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oi(e){if($){var t=we;if(t){var n=t;if(!au(e,t)){if(li(e))throw Error(N(418));t=dt(n.nextSibling);var r=Ne;t&&au(e,t)?Gs(r,n):(e.flags=e.flags&-4097|2,$=!1,Ne=e)}}else{if(li(e))throw Error(N(418));e.flags=e.flags&-4097|2,$=!1,Ne=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Ir(e){if(e!==Ne)return!1;if(!$)return uu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ei(e.type,e.memoizedProps)),t&&(t=we)){if(li(e))throw Zs(),Error(N(418));for(;t;)Gs(e,t),t=dt(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Ne?dt(e.stateNode.nextSibling):null;return!0}function Zs(){for(var e=we;e;)e=dt(e.nextSibling)}function Nn(){we=Ne=null,$=!1}function Yi(e){ze===null?ze=[e]:ze.push(e)}var uh=qe.ReactCurrentBatchConfig;function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sl=wt(null),wl=null,cn=null,Gi=null;function Zi(){Gi=cn=wl=null}function qi(e){var t=Sl.current;I(Sl),e._currentValue=t}function ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){wl=e,Gi=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Gi!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(wl===null)throw Error(N(308));cn=e,wl.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var zt=null;function ea(e){zt===null?zt=[e]:zt.push(e)}function qs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ea(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,ea(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Nl(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==i&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=s))}if(o!==null){var v=l.baseState;i=0,p=c=s=null,u=o;do{var m=u.lane,C=u.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,S=u;switch(m=t,C=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){v=k.call(C,v,m);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,m=typeof k=="function"?k.call(C,v,m):k,m==null)break e;v=W({},v,m);break e;case 2:nt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else C={eventTime:C,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=C,s=v):p=p.next=C,i|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(p===null&&(s=v),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);jt|=i,e.lanes=i,e.memoizedState=v}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var tc=new qu.Component().refs;function ai(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Il={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=pt(e),o=Ke(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=pt(e),o=Ke(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=pt(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Me(t,e,r,n),Zr(t,e,r))}};function du(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(l,o):!0}function nc(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(l=ge(t)?It:ue.current,r=t.contextTypes,o=(r=r!=null)?wn(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Il.enqueueReplaceState(t,t.state,null)}function ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=tc,ta(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Be(o):(o=ge(t)?It:ue.current,l.context=wn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ai(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Il.enqueueReplaceState(l,l.state,null),Nl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;u===tc&&(u=l.refs={}),i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function $r(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function rc(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,d,h,g){return d===null||d.tag!==6?(d=To(h,f.mode,g),d.return=f,d):(d=l(d,h),d.return=f,d)}function s(f,d,h,g){var D=h.type;return D===tn?p(f,d,h.props.children,g,h.key):d!==null&&(d.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===tt&&hu(D)===d.type)?(g=l(d,h.props),g.ref=In(f,d,h),g.return=f,g):(g=ll(h.type,h.key,h.props,null,f.mode,g),g.ref=In(f,d,h),g.return=f,g)}function c(f,d,h,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Do(h,f.mode,g),d.return=f,d):(d=l(d,h.children||[]),d.return=f,d)}function p(f,d,h,g,D){return d===null||d.tag!==7?(d=bt(h,f.mode,g,D),d.return=f,d):(d=l(d,h),d.return=f,d)}function v(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=To(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Br:return h=ll(d.type,d.key,d.props,null,f.mode,h),h.ref=In(f,null,d),h.return=f,h;case en:return d=Do(d,f.mode,h),d.return=f,d;case tt:var g=d._init;return v(f,g(d._payload),h)}if(Wn(d)||Un(d))return d=bt(d,f.mode,h,null),d.return=f,d;$r(f,d)}return null}function m(f,d,h,g){var D=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return D!==null?null:u(f,d,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Br:return h.key===D?s(f,d,h,g):null;case en:return h.key===D?c(f,d,h,g):null;case tt:return D=h._init,m(f,d,D(h._payload),g)}if(Wn(h)||Un(h))return D!==null?null:p(f,d,h,g,null);$r(f,h)}return null}function C(f,d,h,g,D){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(h)||null,u(d,f,""+g,D);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Br:return f=f.get(g.key===null?h:g.key)||null,s(d,f,g,D);case en:return f=f.get(g.key===null?h:g.key)||null,c(d,f,g,D);case tt:var E=g._init;return C(f,d,h,E(g._payload),D)}if(Wn(g)||Un(g))return f=f.get(h)||null,p(d,f,g,D,null);$r(d,g)}return null}function k(f,d,h,g){for(var D=null,E=null,P=d,B=d=0,V=null;P!==null&&B<h.length;B++){P.index>B?(V=P,P=null):V=P.sibling;var U=m(f,P,h[B],g);if(U===null){P===null&&(P=V);break}e&&P&&U.alternate===null&&t(f,P),d=o(U,d,B),E===null?D=U:E.sibling=U,E=U,P=V}if(B===h.length)return n(f,P),$&&_t(f,B),D;if(P===null){for(;B<h.length;B++)P=v(f,h[B],g),P!==null&&(d=o(P,d,B),E===null?D=P:E.sibling=P,E=P);return $&&_t(f,B),D}for(P=r(f,P);B<h.length;B++)V=C(P,f,B,h[B],g),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?B:V.key),d=o(V,d,B),E===null?D=V:E.sibling=V,E=V);return e&&P.forEach(function(Re){return t(f,Re)}),$&&_t(f,B),D}function S(f,d,h,g){var D=Un(h);if(typeof D!="function")throw Error(N(150));if(h=D.call(h),h==null)throw Error(N(151));for(var E=D=null,P=d,B=d=0,V=null,U=h.next();P!==null&&!U.done;B++,U=h.next()){P.index>B?(V=P,P=null):V=P.sibling;var Re=m(f,P,U.value,g);if(Re===null){P===null&&(P=V);break}e&&P&&Re.alternate===null&&t(f,P),d=o(Re,d,B),E===null?D=Re:E.sibling=Re,E=Re,P=V}if(U.done)return n(f,P),$&&_t(f,B),D;if(P===null){for(;!U.done;B++,U=h.next())U=v(f,U.value,g),U!==null&&(d=o(U,d,B),E===null?D=U:E.sibling=U,E=U);return $&&_t(f,B),D}for(P=r(f,P);!U.done;B++,U=h.next())U=C(P,f,B,U.value,g),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?B:U.key),d=o(U,d,B),E===null?D=U:E.sibling=U,E=U);return e&&P.forEach(function(_n){return t(f,_n)}),$&&_t(f,B),D}function O(f,d,h,g){if(typeof h=="object"&&h!==null&&h.type===tn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Br:e:{for(var D=h.key,E=d;E!==null;){if(E.key===D){if(D=h.type,D===tn){if(E.tag===7){n(f,E.sibling),d=l(E,h.props.children),d.return=f,f=d;break e}}else if(E.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===tt&&hu(D)===E.type){n(f,E.sibling),d=l(E,h.props),d.ref=In(f,E,h),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===tn?(d=bt(h.props.children,f.mode,g,h.key),d.return=f,f=d):(g=ll(h.type,h.key,h.props,null,f.mode,g),g.ref=In(f,d,h),g.return=f,f=g)}return i(f);case en:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=l(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Do(h,f.mode,g),d.return=f,f=d}return i(f);case tt:return E=h._init,O(f,d,E(h._payload),g)}if(Wn(h))return k(f,d,h,g);if(Un(h))return S(f,d,h,g);$r(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,h),d.return=f,f=d):(n(f,d),d=To(h,f.mode,g),d.return=f,f=d),i(f)):n(f,d)}return O}var Cn=rc(!0),lc=rc(!1),Tr={},We=wt(Tr),hr=wt(Tr),pr=wt(Tr);function Ft(e){if(e===Tr)throw Error(N(174));return e}function na(e,t){switch(M(pr,t),M(hr,e),M(We,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}I(We),M(We,t)}function kn(){I(We),I(hr),I(pr)}function oc(e){Ft(pr.current);var t=Ft(We.current),n=$o(t,e.type);t!==n&&(M(hr,e),M(We,n))}function ra(e){hr.current===e&&(I(We),I(hr))}var A=wt(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function la(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var qr=qe.ReactCurrentDispatcher,So=qe.ReactCurrentBatchConfig,At=0,j=null,Y=null,q=null,kl=!1,Gn=!1,mr=0,sh=0;function le(){throw Error(N(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,l,o){if(At=o,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?hh:ph,e=n(r,l),Gn){o=0;do{if(Gn=!1,mr=0,25<=o)throw Error(N(301));o+=1,q=Y=null,t.updateQueue=null,qr.current=mh,e=n(r,l)}while(Gn)}if(qr.current=Tl,t=Y!==null&&Y.next!==null,At=0,q=Y=j=null,kl=!1,t)throw Error(N(300));return e}function aa(){var e=mr!==0;return mr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?j.memoizedState=q=e:q=q.next=e,q}function Oe(){if(Y===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?j.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(N(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?j.memoizedState=q=e:q=q.next=e}return q}function vr(e,t){return typeof t=="function"?t(e):t}function wo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,c=o;do{var p=c.lane;if((At&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=v,i=r):s=s.next=v,j.lanes|=p,jt|=p}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=u,be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,j.lanes|=o,jt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function No(e){var t=Oe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);be(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ic(){}function ac(e,t){var n=j,r=Oe(),l=t(),o=!be(r.memoizedState,l);if(o&&(r.memoizedState=l,me=!0),r=r.queue,ua(cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,gr(9,sc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(N(349));At&30||uc(n,t,l)}return l}function uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sc(e,t,n,r){t.value=n,t.getSnapshot=r,dc(t)&&fc(e)}function cc(e,t,n){return n(function(){dc(t)&&fc(e)})}function dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function fc(e){var t=Ge(e,1);t!==null&&Me(t,e,1,-1)}function pu(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=fh.bind(null,j,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hc(){return Oe().memoizedState}function el(e,t,n,r){var l=$e();j.flags|=e,l.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(Y!==null){var i=Y.memoizedState;if(o=i.destroy,r!==null&&oa(r,i.deps)){l.memoizedState=gr(t,n,o,r);return}}j.flags|=e,l.memoizedState=gr(1|t,n,o,r)}function mu(e,t){return el(8390656,8,e,t)}function ua(e,t){return $l(2048,8,e,t)}function pc(e,t){return $l(4,2,e,t)}function mc(e,t){return $l(4,4,e,t)}function vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gc(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,vc.bind(null,t,e),n)}function sa(){}function yc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wc(e,t,n){return At&21?(be(n,t)||(n=ks(),j.lanes|=n,jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function ch(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{F=n,So.transition=r}}function Nc(){return Oe().memoizedState}function dh(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cc(e))kc(t,n);else if(n=qs(e,t,n,r),n!==null){var l=ce();Me(n,e,r,l),Tc(n,t,r)}}function fh(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cc(e))kc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,be(u,i)){var s=t.interleaved;s===null?(l.next=l,ea(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=qs(e,t,l,r),n!==null&&(l=ce(),Me(n,e,r,l),Tc(n,t,r))}}function Cc(e){var t=e.alternate;return e===j||t!==null&&t===j}function kc(e,t){Gn=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}var Tl={readContext:Be,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},hh={readContext:Be,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,el(4194308,4,vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dh.bind(null,j,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:sa,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=ch.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=j,l=$e();if($){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ee===null)throw Error(N(349));At&30||uc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,mu(cc.bind(null,r,o,e),[e]),r.flags|=2048,gr(9,sc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$e(),t=ee.identifierPrefix;if($){var n=Je,r=Qe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ph={readContext:Be,useCallback:yc,useContext:Be,useEffect:ua,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:Sc,useReducer:wo,useRef:hc,useState:function(){return wo(vr)},useDebugValue:sa,useDeferredValue:function(e){var t=Oe();return wc(t,Y.memoizedState,e)},useTransition:function(){var e=wo(vr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:ic,useSyncExternalStore:ac,useId:Nc,unstable_isNewReconciler:!1},mh={readContext:Be,useCallback:yc,useContext:Be,useEffect:ua,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:Sc,useReducer:No,useRef:hc,useState:function(){return No(vr)},useDebugValue:sa,useDeferredValue:function(e){var t=Oe();return Y===null?t.memoizedState=e:wc(t,Y.memoizedState,e)},useTransition:function(){var e=No(vr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:ic,useSyncExternalStore:ac,useId:Nc,unstable_isNewReconciler:!1};function Tn(e,t){try{var n="",r=t;do n+=jd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function si(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vh=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xl||(xl=!0,Si=r),si(e,t)},n}function xc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){si(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){si(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vh;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Oh.bind(null,e,t,n),t.then(e,e))}function gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var gh=qe.ReactCurrentOwner,me=!1;function se(e,t,n,r){t.child=e===null?lc(t,null,n,r):Cn(t,e.child,n,r)}function Su(e,t,n,r,l){n=n.render;var o=t.ref;return gn(t,l),r=ia(e,t,n,r,o,l),n=aa(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&n&&Ki(t),t.flags|=1,se(e,t,r,l),t.child)}function wu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ga(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ec(e,t,o,r,l)):(e=ll(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ec(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return ci(e,t,n,r,l)}function Pc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(fn,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(fn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(fn,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(fn,Se),Se|=r;return se(e,t,l,n),t.child}function Bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ci(e,t,n,r,l){var o=ge(n)?It:ue.current;return o=wn(t,o),gn(t,l),n=ia(e,t,n,r,o,l),r=aa(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&r&&Ki(t),t.flags|=1,se(e,t,n,l),t.child)}function Nu(e,t,n,r,l){if(ge(n)){var o=!0;vl(t)}else o=!1;if(gn(t,l),t.stateNode===null)tl(e,t),nc(t,n,r),ui(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=ge(n)?It:ue.current,c=wn(t,c));var p=n.getDerivedStateFromProps,v=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&fu(t,i,r,c),nt=!1;var m=t.memoizedState;i.state=m,Nl(t,r,i,l),s=t.memoizedState,u!==r||m!==s||ve.current||nt?(typeof p=="function"&&(ai(t,n,p,r),s=t.memoizedState),(u=nt||du(t,n,u,r,m,s,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ec(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Le(t.type,u),i.props=c,v=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=ge(n)?It:ue.current,s=wn(t,s));var C=n.getDerivedStateFromProps;(p=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==s)&&fu(t,i,r,s),nt=!1,m=t.memoizedState,i.state=m,Nl(t,r,i,l);var k=t.memoizedState;u!==v||m!==k||ve.current||nt?(typeof C=="function"&&(ai(t,n,C,r),k=t.memoizedState),(c=nt||du(t,n,c,r,m,k,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return di(e,t,n,r,o,l)}function di(e,t,n,r,l,o){Bc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&iu(t,n,!1),Ze(e,t,o);r=t.stateNode,gh.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Cn(t,e.child,null,o),t.child=Cn(t,null,u,o)):se(e,t,u,o),t.memoizedState=r.state,l&&iu(t,n,!0),t.child}function Oc(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),na(e,t.containerInfo)}function Cu(e,t,n,r,l){return Nn(),Yi(l),t.flags|=256,se(e,t,n,r),t.child}var fi={dehydrated:null,treeContext:null,retryLane:0};function hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rc(e,t,n){var r=t.pendingProps,l=A.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(A,l&1),e===null)return oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Wl(i,r,0,null),e=bt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hi(n),t.memoizedState=fi,e):ca(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return yh(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=mt(u,o):(o=bt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?hi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=fi,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ca(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Yi(r),Cn(t,e.child,null,n),e=ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yh(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Co(Error(N(422))),Ar(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Wl({mode:"visible",children:r.children},l,0,null),o=bt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Cn(t,e.child,null,i),t.child.memoizedState=hi(i),t.memoizedState=fi,o);if(!(t.mode&1))return Ar(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(N(419)),r=Co(o,r,void 0),Ar(e,t,i,r)}if(u=(i&e.childLanes)!==0,me||u){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Me(r,e,l,-1))}return va(),r=Co(Error(N(421))),Ar(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Rh.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,we=dt(l.nextSibling),Ne=t,$=!0,ze=null,e!==null&&(De[xe++]=Qe,De[xe++]=Je,De[xe++]=$t,Qe=e.id,Je=e.overflow,$t=t),t=ca(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ii(e.return,t,n)}function ko(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function _c(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ko(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ko(t,!0,n,null,o);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sh(e,t,n){switch(t.tag){case 3:Oc(t),Nn();break;case 5:oc(t);break;case 1:ge(t.type)&&vl(t);break;case 4:na(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(Sl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Rc(e,t,n):(M(A,A.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);M(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _c(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Pc(e,t,n)}return Ze(e,t,n)}var Lc,pi,Uc,zc;Lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pi=function(){};Uc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(We.current);var o=null;switch(n){case"input":l=Fo(e,l),r=Fo(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=Io(e,l),r=Io(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}Ao(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(nr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(nr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&b("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function $n(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wh(e,t,n){var r=t.pendingProps;switch(Xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&ml(),oe(t),null;case 3:return r=t.stateNode,kn(),I(ve),I(ue),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Ci(ze),ze=null))),pi(e,t),oe(t),null;case 5:ra(t);var l=Ft(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=Ft(We.current),Ir(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[fr]=o,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(l=0;l<Vn.length;l++)b(Vn[l],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":_a(r,o),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},b("invalid",r);break;case"textarea":Ua(r,o),b("invalid",r)}Ao(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&br(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&br(r.textContent,u,e),l=["children",""+u]):nr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&b("scroll",r)}switch(n){case"input":Or(r),La(r,o,!0);break;case"textarea":Or(r),za(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=pl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ae]=t,e[fr]=r,Lc(e,t,!1,!1),t.stateNode=e;e:{switch(i=jo(n,r),n){case"dialog":b("cancel",e),b("close",e),l=r;break;case"iframe":case"object":case"embed":b("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vn.length;l++)b(Vn[l],e);l=r;break;case"source":b("error",e),l=r;break;case"img":case"image":case"link":b("error",e),b("load",e),l=r;break;case"details":b("toggle",e),l=r;break;case"input":_a(e,r),l=Fo(e,r),b("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),b("invalid",e);break;case"textarea":Ua(e,r),l=Io(e,r),b("invalid",e);break;default:l=r}Ao(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?ds(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ss(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&rr(e,s):typeof s=="number"&&rr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(nr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&b("scroll",e):s!=null&&Ui(e,o,s,i))}switch(n){case"input":Or(e),La(e,r,!1);break;case"textarea":Or(e),za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ft(pr.current),Ft(We.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return oe(t),null;case 13:if(I(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&we!==null&&t.mode&1&&!(t.flags&128))Zs(),Nn(),t.flags|=98560,o=!1;else if(o=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Ae]=t}else Nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else ze!==null&&(Ci(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):va())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return kn(),pi(e,t),e===null&&cr(t.stateNode.containerInfo),oe(t),null;case 10:return qi(t.type._context),oe(t),null;case 17:return ge(t.type)&&ml(),oe(t),null;case 19:if(I(A),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)$n(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Cl(e),i!==null){for(t.flags|=128,$n(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Dn&&(t.flags|=128,r=!0,$n(o,!1),t.lanes=4194304)}else{if(!r)if(e=Cl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!$)return oe(t),null}else 2*J()-o.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,$n(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=A.current,M(A,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Nh(e,t){switch(Xi(t),t.tag){case 1:return ge(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),I(ve),I(ue),la(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ra(t),null;case 13:if(I(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(A),null;case 4:return kn(),null;case 10:return qi(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var jr=!1,ae=!1,Ch=typeof WeakSet=="function"?WeakSet:Set,T=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function mi(e,t,n){try{n()}catch(r){H(e,t,r)}}var Tu=!1;function kh(e,t){if(Zo=dl,e=Is(),Ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,c=0,p=0,v=e,m=null;t:for(;;){for(var C;v!==n||l!==0&&v.nodeType!==3||(u=i+l),v!==o||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(C=v.firstChild)!==null;)m=v,v=C;for(;;){if(v===e)break t;if(m===n&&++c===l&&(u=i),m===o&&++p===r&&(s=i),(C=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=C}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(qo={focusedElem:e,selectionRange:n},dl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,O=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Le(t.type,S),O);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=Tu,Tu=!1,k}function Zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&mi(t,n,o)}l=l.next}while(l!==r)}}function Al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fc(e){var t=e.alternate;t!==null&&(e.alternate=null,Fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[fr],delete t[ni],delete t[oh],delete t[ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}function yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}var te=null,Ue=!1;function et(e,t,n){for(n=n.child;n!==null;)bc(e,t,n),n=n.sibling}function bc(e,t,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:ae||dn(n,t);case 6:var r=te,l=Ue;te=null,et(e,t,n),te=r,Ue=l,te!==null&&(Ue?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ue?(e=te,n=n.stateNode,e.nodeType===8?vo(e.parentNode,n):e.nodeType===1&&vo(e,n),ar(e)):vo(te,n.stateNode));break;case 4:r=te,l=Ue,te=n.stateNode.containerInfo,Ue=!0,et(e,t,n),te=r,Ue=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&mi(n,t,i),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!ae&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){H(n,t,u)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,et(e,t,n),ae=r):et(e,t,n);break;default:et(e,t,n)}}function xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ch),t.forEach(function(r){var l=_h.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:te=u.stateNode,Ue=!1;break e;case 3:te=u.stateNode.containerInfo,Ue=!0;break e;case 4:te=u.stateNode.containerInfo,Ue=!0;break e}u=u.return}if(te===null)throw Error(N(160));bc(o,i,l),te=null,Ue=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Ie(e),r&4){try{Zn(3,e,e.return),Al(3,e)}catch(S){H(e,e.return,S)}try{Zn(5,e,e.return)}catch(S){H(e,e.return,S)}}break;case 1:_e(t,e),Ie(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(_e(t,e),Ie(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var l=e.stateNode;try{rr(l,"")}catch(S){H(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&is(l,o),jo(u,i);var c=jo(u,o);for(i=0;i<s.length;i+=2){var p=s[i],v=s[i+1];p==="style"?ds(l,v):p==="dangerouslySetInnerHTML"?ss(l,v):p==="children"?rr(l,v):Ui(l,p,v,c)}switch(u){case"input":Mo(l,o);break;case"textarea":as(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?hn(l,!!o.multiple,C,!1):m!==!!o.multiple&&(o.defaultValue!=null?hn(l,!!o.multiple,o.defaultValue,!0):hn(l,!!o.multiple,o.multiple?[]:"",!1))}l[fr]=o}catch(S){H(e,e.return,S)}}break;case 6:if(_e(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){H(e,e.return,S)}}break;case 3:if(_e(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(S){H(e,e.return,S)}break;case 4:_e(t,e),Ie(e);break;case 13:_e(t,e),Ie(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ha=J())),r&4&&xu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||p,_e(t,e),ae=c):_e(t,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(v=T=p;T!==null;){switch(m=T,C=m.child,m.tag){case 0:case 11:case 14:case 15:Zn(4,m,m.return);break;case 1:dn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){H(r,n,S)}}break;case 5:dn(m,m.return);break;case 22:if(m.memoizedState!==null){Pu(v);continue}}C!==null?(C.return=m,T=C):Pu(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{l=v.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=cs("display",i))}catch(S){H(e,e.return,S)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(S){H(e,e.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:_e(t,e),Ie(e),r&4&&xu(e);break;case 21:break;default:_e(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(rr(l,""),r.flags&=-33);var o=Du(e);yi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Du(e);gi(e,u,i);break;default:throw Error(N(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e,t,n){T=e,$c(e)}function $c(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||jr;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||ae;u=jr;var c=ae;if(jr=i,(ae=s)&&!c)for(T=l;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?Bu(l):s!==null?(s.return=i,T=s):Bu(l);for(;o!==null;)T=o,$c(o),o=o.sibling;T=l,jr=u,ae=c}Eu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Eu(e)}}function Eu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cu(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&ar(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ae||t.flags&512&&vi(t)}catch(m){H(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Pu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Bu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Al(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){H(t,l,s)}}var o=t.return;try{vi(t)}catch(s){H(t,o,s)}break;case 5:var i=t.return;try{vi(t)}catch(s){H(t,i,s)}}}catch(s){H(t,t.return,s)}if(t===e){T=null;break}var u=t.sibling;if(u!==null){u.return=t.return,T=u;break}T=t.return}}var Dh=Math.ceil,Dl=qe.ReactCurrentDispatcher,da=qe.ReactCurrentOwner,Pe=qe.ReactCurrentBatchConfig,z=0,ee=null,K=null,ne=0,Se=0,fn=wt(0),G=0,yr=null,jt=0,jl=0,fa=0,qn=null,pe=null,ha=0,Dn=1/0,He=null,xl=!1,Si=null,ht=null,Wr=!1,it=null,El=0,er=0,wi=null,nl=-1,rl=0;function ce(){return z&6?J():nl!==-1?nl:nl=J()}function pt(e){return e.mode&1?z&2&&ne!==0?ne&-ne:uh.transition!==null?(rl===0&&(rl=ks()),rl):(e=F,e!==0||(e=window.event,e=e===void 0?16:Os(e.type)),e):1}function Me(e,t,n,r){if(50<er)throw er=0,wi=null,Error(N(185));Nr(e,n,r),(!(z&2)||e!==ee)&&(e===ee&&(!(z&2)&&(jl|=n),G===4&&lt(e,ne)),ye(e,r),n===1&&z===0&&!(t.mode&1)&&(Dn=J()+500,bl&&Nt()))}function ye(e,t){var n=e.callbackNode;uf(e,t);var r=cl(e,e===ee?ne:0);if(r===0)n!==null&&ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ba(n),t===1)e.tag===0?ah(Ou.bind(null,e)):Xs(Ou.bind(null,e)),rh(function(){!(z&6)&&Nt()}),n=null;else{switch(Ts(r)){case 1:n=Ii;break;case 4:n=Ns;break;case 16:n=sl;break;case 536870912:n=Cs;break;default:n=sl}n=Kc(n,Ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ac(e,t){if(nl=-1,rl=0,z&6)throw Error(N(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=cl(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pl(e,r);else{t=r;var l=z;z|=2;var o=Wc();(ee!==e||ne!==t)&&(He=null,Dn=J()+500,Mt(e,t));do try{Ph();break}catch(u){jc(e,u)}while(1);Zi(),Dl.current=o,z=l,K!==null?t=0:(ee=null,ne=0,t=G)}if(t!==0){if(t===2&&(l=Jo(e),l!==0&&(r=l,t=Ni(e,l))),t===1)throw n=yr,Mt(e,0),lt(e,r),ye(e,J()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!xh(l)&&(t=Pl(e,r),t===2&&(o=Jo(e),o!==0&&(r=o,t=Ni(e,o))),t===1))throw n=yr,Mt(e,0),lt(e,r),ye(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Lt(e,pe,He);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=ha+500-J(),10<t)){if(cl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ti(Lt.bind(null,e,pe,He),t);break}Lt(e,pe,He);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Fe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dh(r/1960))-r,10<r){e.timeoutHandle=ti(Lt.bind(null,e,pe,He),r);break}Lt(e,pe,He);break;case 5:Lt(e,pe,He);break;default:throw Error(N(329))}}}return ye(e,J()),e.callbackNode===n?Ac.bind(null,e):null}function Ni(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ci(t)),e}function Ci(e){pe===null?pe=e:pe.push.apply(pe,e)}function xh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~fa,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if(z&6)throw Error(N(327));yn();var t=cl(e,0);if(!(t&1))return ye(e,J()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var r=Jo(e);r!==0&&(t=r,n=Ni(e,r))}if(n===1)throw n=yr,Mt(e,0),lt(e,t),ye(e,J()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,pe,He),ye(e,J()),null}function pa(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Dn=J()+500,bl&&Nt())}}function Wt(e){it!==null&&it.tag===0&&!(z&6)&&yn();var t=z;z|=1;var n=Pe.transition,r=F;try{if(Pe.transition=null,F=1,e)return e()}finally{F=r,Pe.transition=n,z=t,!(z&6)&&Nt()}}function ma(){Se=fn.current,I(fn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nh(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:kn(),I(ve),I(ue),la();break;case 5:ra(r);break;case 4:kn();break;case 13:I(A);break;case 19:I(A);break;case 10:qi(r.type._context);break;case 22:case 23:ma()}n=n.return}if(ee=e,K=e=mt(e.current,null),ne=Se=t,G=0,yr=null,fa=jl=jt=0,pe=qn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}zt=null}return e}function jc(e,t){do{var n=K;try{if(Zi(),qr.current=Tl,kl){for(var r=j.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}kl=!1}if(At=0,q=Y=j=null,Gn=!1,mr=0,da.current=null,n===null||n.return===null){G=1,yr=t,K=null;break}e:{var o=e,i=n.return,u=n,s=t;if(t=ne,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=u,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var C=gu(i);if(C!==null){C.flags&=-257,yu(C,i,u,o,t),C.mode&1&&vu(o,c,t),t=C,s=c;var k=t.updateQueue;if(k===null){var S=new Set;S.add(s),t.updateQueue=S}else k.add(s);break e}else{if(!(t&1)){vu(o,c,t),va();break e}s=Error(N(426))}}else if($&&u.mode&1){var O=gu(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),yu(O,i,u,o,t),Yi(Tn(s,u));break e}}o=s=Tn(s,u),G!==4&&(G=2),qn===null?qn=[o]:qn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Dc(o,s,t);su(o,f);break e;case 1:u=s;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ht===null||!ht.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=xc(o,u,t);su(o,g);break e}}o=o.return}while(o!==null)}Vc(n)}catch(D){t=D,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function Wc(){var e=Dl.current;return Dl.current=Tl,e===null?Tl:e}function va(){(G===0||G===3||G===2)&&(G=4),ee===null||!(jt&268435455)&&!(jl&268435455)||lt(ee,ne)}function Pl(e,t){var n=z;z|=2;var r=Wc();(ee!==e||ne!==t)&&(He=null,Mt(e,t));do try{Eh();break}catch(l){jc(e,l)}while(1);if(Zi(),z=n,Dl.current=r,K!==null)throw Error(N(261));return ee=null,ne=0,G}function Eh(){for(;K!==null;)Hc(K)}function Ph(){for(;K!==null&&!Zd();)Hc(K)}function Hc(e){var t=Jc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Vc(e):K=t,da.current=null}function Vc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nh(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(n=wh(n,t,Se),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);G===0&&(G=5)}function Lt(e,t,n){var r=F,l=Pe.transition;try{Pe.transition=null,F=1,Bh(e,t,n,r)}finally{Pe.transition=l,F=r}return null}function Bh(e,t,n,r){do yn();while(it!==null);if(z&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sf(e,o),e===ee&&(K=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wr||(Wr=!0,Kc(sl,function(){return yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=F;F=1;var u=z;z|=4,da.current=null,kh(e,n),Ic(n,e),Xf(qo),dl=!!Zo,qo=Zo=null,e.current=n,Th(n),qd(),z=u,F=i,Pe.transition=o}else e.current=n;if(Wr&&(Wr=!1,it=e,El=l),o=e.pendingLanes,o===0&&(ht=null),nf(n.stateNode),ye(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(xl)throw xl=!1,e=Si,Si=null,e;return El&1&&e.tag!==0&&yn(),o=e.pendingLanes,o&1?e===wi?er++:(er=0,wi=e):er=0,Nt(),null}function yn(){if(it!==null){var e=Ts(El),t=Pe.transition,n=F;try{if(Pe.transition=null,F=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,El=0,z&6)throw Error(N(331));var l=z;for(z|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(T=c;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Zn(8,p,o)}var v=p.child;if(v!==null)v.return=p,T=v;else for(;T!==null;){p=T;var m=p.sibling,C=p.return;if(Fc(p),p===c){T=null;break}if(m!==null){m.return=C,T=m;break}T=C}}}var k=o.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){i=T;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,T=h;else e:for(i=d;T!==null;){if(u=T,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Al(9,u)}}catch(D){H(u,u.return,D)}if(u===i){T=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,T=g;break e}T=u.return}}if(z=l,Nt(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{F=n,Pe.transition=t}}return!1}function Ru(e,t,n){t=Tn(n,t),t=Dc(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(Nr(e,1,t),ye(e,t))}function H(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=Tn(n,e),e=xc(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(Nr(t,1,e),ye(t,e));break}}t=t.return}}function Oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(G===4||G===3&&(ne&130023424)===ne&&500>J()-ha?Mt(e,0):fa|=n),ye(e,t)}function Qc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=ce();e=Ge(e,t),e!==null&&(Nr(e,t,n),ye(e,n))}function Rh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qc(e,n)}function _h(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Qc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Sh(e,t,n);me=!!(e.flags&131072)}else me=!1,$&&t.flags&1048576&&Ys(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;tl(e,t),e=t.pendingProps;var l=wn(t,ue.current);gn(t,n),l=ia(null,t,r,e,l,n);var o=aa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,vl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ta(t),l.updater=Il,t.stateNode=l,l._reactInternals=t,ui(t,r,e,n),t=di(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ki(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(tl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Uh(r),e=Le(r,e),l){case 0:t=ci(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=Su(null,t,r,e,n);break e;case 14:t=wu(null,t,r,Le(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Nu(e,t,r,l,n);case 3:e:{if(Oc(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ec(e,t),Nl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Tn(Error(N(423)),t),t=Cu(e,t,r,n,l);break e}else if(r!==l){l=Tn(Error(N(424)),t),t=Cu(e,t,r,n,l);break e}else for(we=dt(t.stateNode.containerInfo.firstChild),Ne=t,$=!0,ze=null,n=lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===l){t=Ze(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return oc(t),e===null&&oi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ei(r,l)?i=null:o!==null&&ei(r,o)&&(t.flags|=32),Bc(e,t),se(e,t,i,n),t.child;case 6:return e===null&&oi(t),null;case 13:return Rc(e,t,n);case 4:return na(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Su(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,M(Sl,r._currentValue),r._currentValue=i,o!==null)if(be(o.value,i)){if(o.children===l.children&&!ve.current){t=Ze(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ke(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ii(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(N(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ii(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,gn(t,n),l=Be(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),wu(e,t,r,l,n);case 15:return Ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),tl(e,t),t.tag=1,ge(r)?(e=!0,vl(t)):e=!1,gn(t,n),nc(t,r,l),ui(t,r,l,n),di(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 22:return Pc(e,t,n)}throw Error(N(156,t.tag))};function Kc(e,t){return ws(e,t)}function Lh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Lh(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uh(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fi)return 11;if(e===Mi)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ll(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ga(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case tn:return bt(n.children,l,o,t);case zi:i=8,l|=8;break;case _o:return e=Ee(12,n,t,l|2),e.elementType=_o,e.lanes=o,e;case Lo:return e=Ee(13,n,t,l),e.elementType=Lo,e.lanes=o,e;case Uo:return e=Ee(19,n,t,l),e.elementType=Uo,e.lanes=o,e;case rs:return Wl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ts:i=10;break e;case ns:i=9;break e;case Fi:i=11;break e;case Mi:i=14;break e;case tt:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function bt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=rs,e.lanes=n,e.stateNode={isHidden:!1},e}function To(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Do(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zh(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,l,o,i,u,s){return e=new zh(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ta(o),e}function Fh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xc(e){if(!e)return yt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ge(n))return Ks(e,n,t)}return t}function Yc(e,t,n,r,l,o,i,u,s){return e=ya(n,r,!0,e,l,o,i,u,s),e.context=Xc(null),n=e.current,r=ce(),l=pt(n),o=Ke(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,Nr(e,l,r),ye(e,r),e}function Hl(e,t,n,r){var l=t.current,o=ce(),i=pt(l);return n=Xc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,i),e!==null&&(Me(e,l,i,o),Zr(e,l,i)),i}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Mh(){return null}var Gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Vl.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Hl(e,t,null,null)};Vl.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Hl(null,e,null,null)}),t[Ye]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Es();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Bs(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function bh(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Bl(i);o.call(c)}}var i=Yc(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=i,e[Ye]=i.current,cr(e.nodeType===8?e.parentNode:e),Wt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Bl(s);u.call(c)}}var s=ya(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=s,e[Ye]=s.current,cr(e.nodeType===8?e.parentNode:e),Wt(function(){Hl(t,s,n,r)}),s}function Jl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=Bl(i);u.call(s)}}Hl(t,i,e,l)}else i=bh(n,t,e,l,r);return Bl(i)}Ds=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&($i(t,n|1),ye(t,J()),!(z&6)&&(Dn=J()+500,Nt()))}break;case 13:Wt(function(){var r=Ge(e,1);if(r!==null){var l=ce();Me(r,e,1,l)}}),Sa(e,1)}};Ai=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ce();Me(t,e,134217728,n)}Sa(e,134217728)}};xs=function(e){if(e.tag===13){var t=pt(e),n=Ge(e,t);if(n!==null){var r=ce();Me(n,e,t,r)}Sa(e,t)}};Es=function(){return F};Ps=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ho=function(e,t,n){switch(t){case"input":if(Mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ml(r);if(!l)throw Error(N(90));os(r),Mo(r,l)}}}break;case"textarea":as(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};ps=pa;ms=Wt;var Ih={usingClientEntryPoint:!1,Events:[kr,on,Ml,fs,hs,pa]},An={findFiberByHostInstance:Ut,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$h={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ys(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Mh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Ll=Hr.inject($h),je=Hr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ih;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(t))throw Error(N(200));return Fh(e,t,null,n)};ke.createRoot=function(e,t){if(!Na(e))throw Error(N(299));var n=!1,r="",l=Gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,cr(e.nodeType===8?e.parentNode:e),new wa(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=ys(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Wt(e)};ke.hydrate=function(e,t,n){if(!Ql(t))throw Error(N(200));return Jl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Na(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Gc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Yc(t,null,e,1,n??null,l,!1,o,i),e[Ye]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vl(t)};ke.render=function(e,t,n){if(!Ql(t))throw Error(N(200));return Jl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(N(40));return e._reactRootContainer?(Wt(function(){Jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=pa;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Jl(e,t,n,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ke})(Fd);var Uu=ol;Bo.createRoot=Uu.createRoot,Bo.hydrateRoot=Uu.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const zu="popstate";function Ah(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:i,hash:u}=r.location;return ki("",{pathname:o,search:i,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Ol(l)}return Wh(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jh(){return Math.random().toString(36).substr(2,8)}function Fu(e,t){return{usr:e.state,key:e.key,idx:t}}function ki(e,t,n,r){return n===void 0&&(n=null),Sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bn(t):t,{state:n,key:t&&t.key||r||jh()})}function Ol(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wh(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,u=at.Pop,s=null,c=p();c==null&&(c=0,i.replaceState(Sr({},i.state,{idx:c}),""));function p(){return(i.state||{idx:null}).idx}function v(){u=at.Pop;let O=p(),f=O==null?null:O-c;c=O,s&&s({action:u,location:S.location,delta:f})}function m(O,f){u=at.Push;let d=ki(S.location,O,f);n&&n(d,O),c=p()+1;let h=Fu(d,c),g=S.createHref(d);try{i.pushState(h,"",g)}catch{l.location.assign(g)}o&&s&&s({action:u,location:S.location,delta:1})}function C(O,f){u=at.Replace;let d=ki(S.location,O,f);n&&n(d,O),c=p();let h=Fu(d,c),g=S.createHref(d);i.replaceState(h,"",g),o&&s&&s({action:u,location:S.location,delta:0})}function k(O){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof O=="string"?O:Ol(O);return X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let S={get action(){return u},get location(){return e(l,i)},listen(O){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(zu,v),s=O,()=>{l.removeEventListener(zu,v),s=null}},createHref(O){return t(l,O)},createURL:k,encodeLocation(O){let f=k(O);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:C,go(O){return i.go(O)}};return S}var Mu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mu||(Mu={}));function Hh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bn(t):t,l=ed(r.pathname||"/",n);if(l==null)return null;let o=Zc(e);Vh(o);let i=null;for(let u=0;i==null&&u<o.length;++u)i=ep(o[u],rp(l));return i}function Zc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,i,u)=>{let s={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=vt([r,s.relativePath]),p=n.concat(s);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zc(o.children,t,p,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Zh(c,o.index),routesMeta:p})};return e.forEach((o,i)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,i);else for(let s of qc(o.path))l(o,i,s)}),t}function qc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=qc(r.join("/")),u=[];return u.push(...i.map(s=>s===""?o:[o,s].join("/"))),l&&u.push(...i),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function Vh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qh=/^:\w+$/,Jh=3,Kh=2,Xh=1,Yh=10,Gh=-2,bu=e=>e==="*";function Zh(e,t){let n=e.split("/"),r=n.length;return n.some(bu)&&(r+=Gh),t&&(r+=Kh),n.filter(l=>!bu(l)).reduce((l,o)=>l+(Qh.test(o)?Jh:o===""?Xh:Yh),r)}function qh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function ep(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let i=0;i<n.length;++i){let u=n[i],s=i===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",p=tp({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},c);if(!p)return null;Object.assign(r,p.params);let v=u.route;o.push({params:r,pathname:vt([l,p.pathname]),pathnameBase:ap(vt([l,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(l=vt([l,p.pathnameBase]))}return o}function tp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=np(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((c,p,v)=>{if(p==="*"){let m=u[v]||"";i=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return c[p]=lp(u[v]||"",p),c},{}),pathname:o,pathnameBase:i,pattern:e}}function np(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function rp(e){try{return decodeURI(e)}catch(t){return Ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lp(e,t){try{return decodeURIComponent(e)}catch(n){return Ca(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ed(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function op(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Bn(e):e;return{pathname:n?n.startsWith("/")?n:ip(n,t):t,search:up(r),hash:sp(l)}}function ip(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function xo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function td(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nd(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Bn(e):(l=Sr({},e),X(!l.pathname||!l.pathname.includes("?"),xo("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),xo("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),xo("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,u;if(r||i==null)u=n;else{let v=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),v-=1;l.pathname=m.join("/")}u=v>=0?t[v]:"/"}let s=op(l,u),c=i&&i!=="/"&&i.endsWith("/"),p=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||p)&&(s.pathname+="/"),s}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),ap=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),up=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dp=["post","put","patch","delete"];[...dp];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}function fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const hp=typeof Object.is=="function"?Object.is:fp,{useState:pp,useEffect:mp,useLayoutEffect:vp,useDebugValue:gp}=Po;function yp(e,t,n){const r=t(),[{inst:l},o]=pp({inst:{value:r,getSnapshot:t}});return vp(()=>{l.value=r,l.getSnapshot=t,Eo(l)&&o({inst:l})},[e,r,t]),mp(()=>(Eo(l)&&o({inst:l}),e(()=>{Eo(l)&&o({inst:l})})),[e]),gp(r),r}function Eo(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!hp(n,r)}catch{return!0}}function Sp(e,t,n){return t()}const wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Np=!wp,Cp=Np?Sp:yp;"useSyncExternalStore"in Po&&(e=>e.useSyncExternalStore)(Po);const rd=w.createContext(null),ka=w.createContext(null),Kl=w.createContext(null),Xl=w.createContext(null),On=w.createContext({outlet:null,matches:[]}),ld=w.createContext(null);function kp(e,t){let{relative:n}=t===void 0?{}:t;Rn()||X(!1);let{basename:r,navigator:l}=w.useContext(Kl),{hash:o,pathname:i,search:u}=id(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:vt([r,i])),l.createHref({pathname:s,search:u,hash:o})}function Rn(){return w.useContext(Xl)!=null}function Dr(){return Rn()||X(!1),w.useContext(Xl).location}function od(){Rn()||X(!1);let{basename:e,navigator:t}=w.useContext(Kl),{matches:n}=w.useContext(On),{pathname:r}=Dr(),l=JSON.stringify(td(n).map(u=>u.pathnameBase)),o=w.useRef(!1);return w.useEffect(()=>{o.current=!0}),w.useCallback(function(u,s){if(s===void 0&&(s={}),!o.current)return;if(typeof u=="number"){t.go(u);return}let c=nd(u,JSON.parse(l),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:vt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,l,r])}function id(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(On),{pathname:l}=Dr(),o=JSON.stringify(td(r).map(i=>i.pathnameBase));return w.useMemo(()=>nd(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function Tp(e,t){Rn()||X(!1);let{navigator:n}=w.useContext(Kl),r=w.useContext(ka),{matches:l}=w.useContext(On),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let s=Dr(),c;if(t){var p;let S=typeof t=="string"?Bn(t):t;u==="/"||(p=S.pathname)!=null&&p.startsWith(u)||X(!1),c=S}else c=s;let v=c.pathname||"/",m=u==="/"?v:v.slice(u.length)||"/",C=Hh(e,{pathname:m}),k=Pp(C&&C.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:vt([u,n.encodeLocation?n.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:vt([u,n.encodeLocation?n.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,r||void 0);return t&&k?w.createElement(Xl.Provider,{value:{location:Ti({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:at.Pop}},k):k}function Dp(){let e=_p(),t=cp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,o)}class xp extends w.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(On.Provider,{value:this.props.routeContext},w.createElement(ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ep(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(rd);return l&&l.static&&l.staticContext&&n.route.errorElement&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(On.Provider,{value:t},r)}function Pp(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,l=n==null?void 0:n.errors;if(l!=null){let o=r.findIndex(i=>i.route.id&&(l==null?void 0:l[i.route.id]));o>=0||X(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,i,u)=>{let s=i.route.id?l==null?void 0:l[i.route.id]:null,c=n?i.route.errorElement||w.createElement(Dp,null):null,p=t.concat(r.slice(0,u+1)),v=()=>w.createElement(Ep,{match:i,routeContext:{outlet:o,matches:p}},s?c:i.route.element!==void 0?i.route.element:o);return n&&(i.route.errorElement||u===0)?w.createElement(xp,{location:n.location,component:c,error:s,children:v(),routeContext:{outlet:null,matches:p}}):v()},null)}var Iu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Iu||(Iu={}));var Rl;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Rl||(Rl={}));function Bp(e){let t=w.useContext(ka);return t||X(!1),t}function Op(e){let t=w.useContext(On);return t||X(!1),t}function Rp(e){let t=Op(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function _p(){var e;let t=w.useContext(ld),n=Bp(Rl.UseRouteError),r=Rp(Rl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Lp(e){let{to:t,replace:n,state:r,relative:l}=e;Rn()||X(!1);let o=w.useContext(ka),i=od();return w.useEffect(()=>{o&&o.navigation.state!=="idle"||i(t,{replace:n,state:r,relative:l})}),null}function ie(e){X(!1)}function Up(e){let{basename:t="/",children:n=null,location:r,navigationType:l=at.Pop,navigator:o,static:i=!1}=e;Rn()&&X(!1);let u=t.replace(/^\/*/,"/"),s=w.useMemo(()=>({basename:u,navigator:o,static:i}),[u,o,i]);typeof r=="string"&&(r=Bn(r));let{pathname:c="/",search:p="",hash:v="",state:m=null,key:C="default"}=r,k=w.useMemo(()=>{let S=ed(c,u);return S==null?null:{pathname:S,search:p,hash:v,state:m,key:C}},[u,c,p,v,m,C]);return k==null?null:w.createElement(Kl.Provider,{value:s},w.createElement(Xl.Provider,{children:n,value:{location:k,navigationType:l}}))}function ad(e){let{children:t,location:n}=e,r=w.useContext(rd),l=r&&!t?r.router.routes:Di(t);return Tp(l,n)}var $u;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})($u||($u={}));new Promise(()=>{});function Di(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){n.push.apply(n,Di(r.props.children,t));return}r.type!==ie&&X(!1),!r.props.index||!r.props.children||X(!1);let o=[...t,l],i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=Di(r.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}function zp(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Fp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mp(e,t){return e.button===0&&(!t||t==="_self")&&!Fp(e)}const bp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ip(e){let{basename:t,children:n,window:r}=e,l=w.useRef();l.current==null&&(l.current=Ah({window:r,v5Compat:!0}));let o=l.current,[i,u]=w.useState({action:o.action,location:o.location});return w.useLayoutEffect(()=>o.listen(u),[o]),w.createElement(Up,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o})}const $p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dt=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:u,target:s,to:c,preventScrollReset:p}=t,v=zp(t,bp),m,C=!1;if($p&&typeof c=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){m=c;let f=new URL(window.location.href),d=c.startsWith("//")?new URL(f.protocol+c):new URL(c);d.origin===f.origin?c=d.pathname+d.search+d.hash:C=!0}let k=kp(c,{relative:l}),S=Ap(c,{replace:i,state:u,target:s,preventScrollReset:p,relative:l});function O(f){r&&r(f),f.defaultPrevented||S(f)}return w.createElement("a",xi({},v,{href:m||k,onClick:C||o?r:O,ref:n,target:s}))});var Au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Au||(Au={}));var ju;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ju||(ju={}));function Ap(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:i}=t===void 0?{}:t,u=od(),s=Dr(),c=id(e,{relative:i});return w.useCallback(p=>{if(Mp(p,n)){p.preventDefault();let v=r!==void 0?r:Ol(s)===Ol(c);u(e,{replace:v,state:l,preventScrollReset:o,relative:i})}},[s,u,c,r,l,n,e,o,i])}function jp({firstName:e,lastName:t,dateOfBirth:n}){return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"})]})}),a("tbody",{children:y("tr",{children:[a("td",{children:"TypeScript"}),a("td",{children:e}),a("td",{children:t}),a("td",{children:n.toDateString()})]})})]})}function Wp({firstName:e,lastName:t,dateOfBirth:n}){return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"})]})}),a("tbody",{children:y("tr",{children:[a("td",{children:"JavaScript"}),a("td",{children:e}),a("td",{children:t}),a("td",{children:n.toDateString()})]})})]})}const Hp=`// User.tsx
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
`,Vp=`// User.jsx
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
`,Qp=`// User.tsx
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
`,ud=Ri.createContext(),Jp=({children:e})=>{const[t,n]=w.useState({visited:{}}),[r,l]=w.useState(!1),i={...t,visit:u=>{n(s=>{const c={...s};return c.visited[u]=!0,c})},lineNumbers:r,setLineNumbers:l};return a(ud.Provider,{value:i,children:e})},Ta=()=>w.useContext(ud),Jt=e=>{const{visit:t,visited:n}=Ta(),r=!n[e];return w.useEffect(()=>{t(e)},[]),{firstTime:r}},Wu=e=>e.replace(/\n/g,"").replace(/\s+/g,"");function de({input1:e,input2:t}){const{lineNumbers:n}=Ta();if(w.useEffect(()=>{Prism.highlightAll()},[e,t,n]),!t)return a("div",{children:a("pre",{className:"language-jsx",children:a("code",{className:"language-jsx",children:e})})});const r=n?"line-numbers":"",l=e.split(/\r\n|\r|\n/).length+2,o=t.split(/\r\n|\r|\n/).length+2;return console.log("LINES",l),e=`// Number of lines: ${l}
// Number of characters: ${Wu(e).length}

`+e,t=`// Number of lines: ${o}
// Number of characters: ${Wu(t).length}

`+t,y("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",width:"100%"},children:[a("pre",{className:`language-tsx ${r}`,style:{flex:"1",minWidth:"600px"},children:a("code",{className:`language-tsx ${r}`,children:e})}),a("pre",{className:`language-tsx ${r}`,style:{flex:"1",minWidth:"600px"},children:a("code",{className:`language-tsx ${r}`,children:t})})]})}function Kp(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}}const Xp={popover:{position:"absolute",width:900,transform:"translate(-450px, -100%)"}},Yp=({children:e,coords:t,updateTooltipCoords:n,tooltipRef:r,title:l})=>{const o=Kp(n,100);return w.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]),a("div",{style:{...Xp.popover,...t},className:"ant-popover ant-popover-placement-top",ref:r,children:y("div",{className:"ant-popover-content",children:[a("div",{className:"ant-popover-arrow"}),a("div",{className:"ant-popover-inner",role:"tooltip",children:a("div",{children:a("div",{className:"ant-popover-inner-content",children:e})})})]})})},Gp=({children:e})=>{const t=document.getElementById("portal-root"),n=document.createElement("div");return w.useEffect(()=>(t.appendChild(n),()=>t.removeChild(n)),[n,t]),ol.createPortal(e,n)};function Zp(e,t,n){w.useEffect(()=>{function r(l){t.current&&!t.current.contains(l.target)&&n&&!n.current.contains(l.target)&&e()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t,n])}const sd=({ifoRef:e,...t})=>a("div",{className:"info",ref:e,...t,children:a("small",{className:"infoIcon",children:"i"})}),Ct=({children:e,title:t,openOnMount:n})=>{const[r,l]=w.useState(!1),[o,i]=w.useState({}),u=w.useRef(),s=w.useRef(),c=w.useRef(0);Zp(()=>l(!1),s,u);const p=v=>{const m=v.getBoundingClientRect();i({left:m.x+m.width/2-c.current,top:m.y+window.scrollY-10})};return w.useEffect(()=>{n&&(c.current=5,p(u.current),l(!0))},[]),y("div",{className:"ml-1",children:[a(sd,{ifoRef:u,onClick:v=>{c.current=0,p(v.target),l(!r)}}),r&&a(Gp,{children:a(Yp,{coords:o,tooltipRef:s,title:t,updateTooltipCoords:()=>p(btnRef.current.buttonNode),children:a("div",{children:e})})})]})},qp=()=>y("div",{className:"flex",children:[a("h3",{children:"Reminder"}),a(Ct,{title:"Info",children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[y("li",{children:["ReactElement - ",a("code",{children:"interface ReactElement<P, T>"}),a("br",{}),"A ReactElement is an object with ",a("code",{children:"type: T"}),", ",a("code",{children:"props: P"}),", and key ",a("code",{children:"key: string | number | null"})," attributes."]}),y("li",{children:["JSX.Element - ",a("code",{children:"extends React.ReactElement<any, any>"}),a("br",{}),"A more generic version of ReactElement where props and type are of type ",a("code",{children:"any"})]}),y("li",{children:["ReactNode - ",a("code",{children:"ReactNode = ReactElement | ReactFragment | boolean | null | undefined ...;"}),a("br",{}),"A ReactNode is a ReactElement, a ReactFragment, a string, a number, an array of ReactNodes, null, undefined, or a boolean."]}),y("li",{children:["FC - ",a("code",{children:"type FC<P> = FunctionalComponent<P>"}),a("br",{}),'A type to describe a react functional component that was originally added to "Provides an explicit return type"',a("br",{}),"However, recently it is of many opinions to NOT use it anymore, see ",a("a",{href:"https://github.com/facebook/create-react-app/pull/8177",children:"here"})," where it was removed from create react app.",a("br",{}),a(de,{input1:`const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ } // Without FC             
const Component2: FC<ComponentProps> = (props) => { /*...*/ }          // With FC                 
const Component3 = (props: ComponentProps): => { /*...*/ }             // Today with type inference`})]})]})})})]});function Kt({newSyntax:e,setNewSyntax:t}){const n=w.useRef();return w.useEffect(()=>{const r=()=>{window.pageYOffset>470?n.current.classList.add("sticky"):n.current.classList.remove("sticky")};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},[]),y("div",{style:{display:"flex",width:"100%"},ref:n,children:[a("h2",{style:{width:"100%"},children:"JavaScript"}),y("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[a("div",{style:{position:"absolute",left:"0px",display:"flex",alignItems:"center"},children:a(qp,{})}),a("h2",{children:"TypeScript"}),y("div",{style:{position:"absolute",right:"0px",display:"flex",alignItems:"center"},children:[a("strong",{children:"Verbose"}),y("label",{className:"switch",children:[a("input",{type:"checkbox",checked:e,onChange:r=>t(r.target.checked)}),a("span",{className:"slider round"})]}),a("strong",{children:"Simple"})]})]})]})}function em(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(Wp,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),a(jp,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),a("br",{}),a(de,{input1:Vp,input2:e?Hp:Qp})]})}const Vr=({children:e})=>a("td",{className:"td-class",children:e});function tm({firstName:e,lastName:t,dateOfBirth:n}){return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"})]})}),a("tbody",{children:y("tr",{children:[a(Vr,{children:"TypeScript"}),a(Vr,{children:e}),a(Vr,{children:t}),a(Vr,{children:n.toDateString()})]})})]})}const Qr=({children:e})=>a("td",{className:"td-class",children:e});function nm({firstName:e,lastName:t,dateOfBirth:n}){return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"})]})}),a("tbody",{children:y("tr",{children:[a(Qr,{children:"JavaScript"}),a(Qr,{children:e}),a(Qr,{children:t}),a(Qr,{children:n.toDateString()})]})})]})}const rm=`// User.tsx
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
`,lm=`// User.jsx
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
`,om=`// User.tsx
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
`;function im(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(nm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),a(tm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),a("br",{}),a(de,{input1:lm,input2:e?rm:om})]})}const Yt=({children:e})=>a("td",{className:"td-class",children:e}),am=e=>e+1;function um({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=w.useState(0),o=()=>{l(i=>am(i))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"})]})}),a("tbody",{children:y("tr",{children:[a(Yt,{children:"TypeScript"}),a(Yt,{children:e}),a(Yt,{children:t}),a(Yt,{children:n.toDateString()}),a(Yt,{children:r}),a(Yt,{children:a("button",{onClick:o,children:"Add One"})})]})})]})}const Gt=({children:e})=>a("td",{className:"td-class",children:e}),sm=e=>e+1;function cm({firstName:e,lastName:t,dateOfBirth:n}){const[r,l]=w.useState(0),o=()=>{l(i=>sm(i))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"})]})}),a("tbody",{children:y("tr",{children:[a(Gt,{children:"JavaScript"}),a(Gt,{children:e}),a(Gt,{children:t}),a(Gt,{children:n.toDateString()}),a(Gt,{children:r}),a(Gt,{children:a("button",{onClick:o,children:"Add One"})})]})})]})}const dm=`// User.tsx
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
`,fm=`// User.jsx
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
`,hm=`// User.tsx
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
`;function pm(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(cm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),a(um,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01")}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`,input2:`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}),a("br",{}),a(de,{input1:fm,input2:e?dm:hm})]})}const Zt=({children:e})=>a("td",{className:"td-class",children:e}),mm=e=>e+1;function vm({firstName:e,lastName:t,dateOfBirth:n,Button:r}){const[l,o]=w.useState(0),i=()=>{o(u=>mm(u))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"})]})}),a("tbody",{children:y("tr",{children:[a(Zt,{children:"TypeScript"}),a(Zt,{children:e}),a(Zt,{children:t}),a(Zt,{children:n.toDateString()}),a(Zt,{children:l}),a(Zt,{children:a(r,{onClick:i})})]})})]})}const qt=({children:e})=>a("td",{className:"td-class",children:e}),gm=e=>e+1;function ym({firstName:e,lastName:t,dateOfBirth:n,Button:r}){const[l,o]=w.useState(0),i=()=>{o(u=>gm(u))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"})]})}),a("tbody",{children:y("tr",{children:[a(qt,{children:"JavaScript"}),a(qt,{children:e}),a(qt,{children:t}),a(qt,{children:n.toDateString()}),a(qt,{children:l}),a(qt,{children:a(r,{onClick:i})})]})})]})}const Sm=`// User.tsx
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
`,wm=`// User.jsx
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
`,Nm=`// User.tsx
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
`,Cm=({onClick:e})=>a("button",{onClick:e,style:{backgroundColor:"blue"},children:"Add One"}),km=({onClick:e})=>a("button",{onClick:e,style:{backgroundColor:"red"},children:"Add One"});function Tm(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(ym,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),Button:Cm}),a(vm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),Button:km}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`import User from "./User";

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
`}),a("br",{}),a(de,{input1:wm,input2:e?Sm:Nm})]})}const xt=({children:e})=>a("td",{className:"td-class",children:e}),Dm=e=>e+1;function xm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=w.useState(0),u=()=>{i(s=>Dm(s))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"}),a("th",{children:"Thing"})]})}),a("tbody",{children:y("tr",{children:[a(xt,{children:"TypeScript"}),a(xt,{children:e}),a(xt,{children:t}),a(xt,{children:n.toDateString()}),a(xt,{children:o}),a(xt,{children:a(l,{onClick:u})}),a(xt,{children:r})]})})]})}const Et=({children:e})=>a("td",{className:"td-class",children:e}),Em=e=>e+1;function Pm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l}){const[o,i]=w.useState(0),u=()=>{i(s=>Em(s))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"}),a("th",{children:"Thing"})]})}),a("tbody",{children:y("tr",{children:[a(Et,{children:"JavaScript"}),a(Et,{children:e}),a(Et,{children:t}),a(Et,{children:n.toDateString()}),a(Et,{children:o}),a(Et,{children:a(l,{onClick:u})}),a(Et,{children:r})]})})]})}const Bm=`// User.tsx
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
`,Om=`// User.jsx
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
`,Rm=`// User.tsx
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
`,_m=({onClick:e})=>a("button",{onClick:e,style:{backgroundColor:"blue"},children:"Add One"}),Lm=({onClick:e})=>a("button",{onClick:e,style:{backgroundColor:"red"},children:"Add One"});function Um(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(Pm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:_m}),a(xm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:Lm}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`import User from "./User";

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
`}),a("br",{}),a(de,{input1:Om,input2:e?Bm:Rm})]})}const Pt=({children:e,color:t})=>a("td",{className:"td-class",style:{color:t},children:e}),zm=e=>e+1;function Fm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,s]=w.useState(0),c=()=>{s(p=>zm(p))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"}),a("th",{children:"Thing"})]})}),a("tbody",{children:y("tr",{children:[a(Pt,{color:i,children:"TypeScript"}),a(Pt,{children:e}),a(Pt,{children:t}),a(Pt,{children:n.toDateString()}),a(Pt,{children:u}),a(Pt,{children:a(l,{onClick:c,disabled:o,color:i})}),a(Pt,{children:r})]})})]})}const Bt=({children:e,color:t})=>a("td",{className:"td-class",style:{color:t},children:e}),Mm=e=>e+1;function bm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,s]=w.useState(0),c=()=>{s(p=>Mm(p))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"}),a("th",{children:"Thing"})]})}),a("tbody",{children:y("tr",{children:[a(Bt,{color:i,children:"TypeScript"}),a(Bt,{children:e}),a(Bt,{children:t}),a(Bt,{children:n.toDateString()}),a(Bt,{children:u}),a(Bt,{children:a(l,{onClick:c,disabled:o,color:i})}),a(Bt,{children:r})]})})]})}const Im=`// User.tsx
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
`,$m=`// User.jsx
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
`,Am=`// User.tsx
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
`,jm=({onClick:e,color:t,disabled:n})=>a("button",{onClick:e,style:{backgroundColor:"blue",color:t},disabled:n,children:"Add One"}),Wm=({onClick:e,color:t,disabled:n})=>a("button",{onClick:e,style:{backgroundColor:"red",color:t},disabled:n,children:"Add One"});function Hm(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(bm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:2,Button:jm,disabled:!0,color:"green"}),a(Fm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:"Hello",Button:Wm,disabled:!0,color:"green"}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`import User from "./User";

const BlueButton = ({ onClick, color, disabled }) => {
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

const RedButton = ({ onClick, color, disabled }: ButtonProps) => {
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

const RedButton: FC<ButtonProps> = ({ onClick, color, disabled }): JSX.Element => {
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
`}),a("br",{}),a(de,{input1:$m,input2:e?Im:Am})]})}const Ot=({children:e,color:t})=>a("td",{className:"td-class",style:{color:t},children:e}),Vm=e=>e+1;function Qm({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,s]=w.useState(0),c=()=>{s(p=>Vm(p))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"}),a("th",{children:"Thing"})]})}),a("tbody",{children:y("tr",{children:[a(Ot,{color:i,children:"TypeScript"}),a(Ot,{children:e}),a(Ot,{children:t}),a(Ot,{children:n.toDateString()}),a(Ot,{children:u}),a(Ot,{children:a(l,{onClick:c,disabled:o,color:i})}),a(Ot,{children:r})]})})]})}const Rt=({children:e,color:t})=>a("td",{className:"td-class",style:{color:t},children:e}),Jm=e=>e+1;function Km({firstName:e,lastName:t,dateOfBirth:n,thing:r,Button:l,disabled:o,color:i}){const[u,s]=w.useState(0),c=()=>{s(p=>Jm(p))};return y("table",{children:[a("thead",{children:y("tr",{children:[a("th",{children:"Written With"}),a("th",{children:"First Name"}),a("th",{children:"Last Name"}),a("th",{children:"Date of Birth"}),a("th",{children:"Count"}),a("th",{children:"Action"}),a("th",{children:"Thing"})]})}),a("tbody",{children:y("tr",{children:[a(Rt,{color:i,children:"TypeScript"}),a(Rt,{children:e}),a(Rt,{children:t}),a(Rt,{children:n.toDateString()}),a(Rt,{children:u}),a(Rt,{children:a(l,{onClick:c,disabled:o,color:i})}),a(Rt,{children:r})]})})]})}const Xm=`// User.tsx
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
`,Ym=`// User.jsx
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
`,Gm=`// User.tsx
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
`,Zm=({onClick:e,color:t,disabled:n})=>a("button",{onClick:e,style:{backgroundColor:"blue",color:t},disabled:n,children:"Add One"}),qm=({onClick:e,color:t,disabled:n})=>a("button",{onClick:e,style:{backgroundColor:"red",color:t},disabled:n,children:"Add One"}),ev=({a:e,b:t})=>a("strong",{children:e+t}),tv=({a:e,b:t})=>a("strong",{children:e-t});function nv(){const[e,t]=w.useState(!1);return y(Ht,{children:[a(Km,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:a(ev,{a:24,b:4}),Button:Zm,disabled:!0,color:"green"}),a(Qm,{firstName:"Robot",lastName:"JS",dateOfBirth:new Date("2022-01-01"),thing:a(tv,{a:24,b:4}),Button:qm,disabled:!0,color:"green"}),a(Kt,{newSyntax:e,setNewSyntax:t}),a(de,{input1:`import User from "./User";

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

const BlueButton = ({ onClick, color, disabled }) => {
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
  thing={<Sum a={24} b={4} />} 
  Button={BlueButton} 
  disabled 
  color="green"/>
`,input2:e?`import User, { ButtonProps } from "./User";

interface MathProps {
  a: number, 
  b: number
}

const Sum = ({ a, b }: MathProps) => {
  return (
    <strong>{a + b}</strong>
  )
} 

const Difference = ({ a, b }: MathProps) => {
  return (
    <strong>{a - b}</strong>
  )
} 

// Note: this uses inline type definition
const Product = ({ a, b }: { a: number, b: number}) => {
  return (
    <strong>{a * b}</strong>
  )
} 

const RedButton = ({ onClick, color, disabled }: ButtonProps) => {
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
  thing={<Difference a={24} b={4} />} 
  Button={RedButton} 
  disabled 
  color="green"/>
`:`import { FC } from "react";
import User, { ButtonProps } from "./User";

interface MathProps {
  a: number, 
  b: number
}

const Sum: FC<MathProps> = ({ a, b }) => {
  return (
    <strong>{a + b}</strong>
  )
} 

const Difference: FC<MathProps> = ({ a, b }) => {
  return (
    <strong>{a - b}</strong>
  )
} 

// Note: this uses inline type definition
const Product: FC<{ a: number, b: number}> = ({ a, b }) => { 
  return (
    <strong>{a * b}</strong>
  )
} 

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
  thing={<Difference a={24} b={4} />} 
  Button={RedButton}
  disabled 
  color="green"/>
`}),a("br",{}),a(de,{input1:Ym,input2:e?Xm:Gm})]})}const rv=()=>{const{firstTime:e}=Jt("v1");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[a("li",{children:"Create a user component that shows firstName, lastName, and dateOfBirth. First name and last name are strings, date is a JS date object."}),y("li",{children:["The key difference between the two is that we needed to define ",a("code",{children:"UserProps"})," in the Typescript code"]}),y("li",{children:['Also, take note of the switch toggle "verbose" vs "simple". This will show you two different variations of how things may be typed in the wild. Specifically in this example, note how we have a return type of ',a("code",{children:"ReactNode"})," in verbose but not in simple.",a("br",{}),y("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[y("div",{children:[a("strong",{children:"Note: "}),"Click on the"]}),"Reminder ",a(sd,{}),"icon below at any time to help remind yourself how the react types work."]})]})]})})})},lv=()=>{const{firstTime:e}=Jt("v2");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[y("li",{children:["We want to style every ",a("code",{children:"td"}),"(table data) item in our table."]}),y("li",{children:["We could do this by adding ",a("code",{children:'className="td-class"'})," to every ",a("code",{children:"td"})," line."]}),y("li",{children:["A better way is to, create a reusable table data component that adds a class to the ",a("code",{children:"td"})," element."]}),y("li",{children:["Note in the TypeScript code we needed to define ",a("code",{children:"TableDataProps"})]})]})})})},ov=()=>{const{firstTime:e}=Jt("v3");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[a("li",{children:'We want to add a count and "Add One" button action that will increment the count column.'}),y("li",{children:["Note how we added an ",a("code",{children:"addOne"})," helper function outside of the component."]}),a("li",{children:'Also toggle the "verbose" vs "simple" toggle and see how many of the things we write can use type inference.'}),y("li",{children:["Specifically see how the ",a("code",{children:"useState"})," code becomes identical to the pure JS code!"]})]})})})},iv=()=>{const{firstTime:e}=Jt("v4");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[y("li",{children:["Previously we always rendered a simple hard coded button in the action column. Now, we want the ability for the developer to pass in their own ",a("code",{children:"Button"})," component."]}),y("li",{children:["First, note the difference between the JS and TS. In the JS file we just defined our ",a("code",{children:"BlueButton"})," and walla, however for the RedButton in the TS file, we needed to import the ",a("code",{children:"ButtonProps"})," that were defined from the ",a("code",{children:"User.tsx"})," file."]}),y("li",{children:['Next, note the difference between the "verbose" and "simple" implementations. By using type inference and no longer making use of the ',a("code",{children:"FX"})," type, we can greatly simplify the typescript code."]})]})})})},av=()=>{const{firstTime:e}=Jt("v5");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[y("li",{children:["Previously we allowed the user to pass a ",a("code",{children:"Button"})," to the ",a("code",{children:"User"})," component. Now, we want to allow them to pass some ",a("code",{children:"thing"}),"."]}),a("li",{children:"The difference this time, is that we are going to allow the user to pass any object that can be rendered in react."}),y("li",{children:["Key thing to note is the difference between using ",a("code",{children:"thing: ReactNode;"})," and ",a("code",{children:"Button: ComponentType<ButtonProps>;"})," located in ",a("code",{children:"UserPops"})]})]})})})},uv=()=>{const{firstTime:e}=Jt("v6");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[y("li",{children:["Now we want the user to be able to pass ",a("code",{children:"color"})," and ",a("code",{children:"disabled"})," properties to the user object. In order to achieve this, we must first add the new properties to our ",a("code",{children:"UserProps"}),". Take note how these are optional fields and use the ",a("code",{children:"?"})," syntax."]}),y("li",{children:["Another thing to note here is how instead of defining our own ButtonProps from scratch we made use of defining a new type that combined all ",a("code",{children:"ButtonHTMLAttributes"})," properties with our color property."]}),y("li",{children:["Finally, note how we want to pass color and disabled down to our ",a("code",{children:"Button"})," and also have it be an optional field on our ",a("code",{children:"TableData"}),"So we need to make sure we update both types."]})]})})})},sv=()=>{const{firstTime:e}=Jt("v7");return a(Ct,{title:"Info",openOnMount:e,children:a("div",{children:y("ul",{style:{paddingLeft:0,textAlign:"left",gap:"20px"},children:[a("li",{children:"In this example we show you can use an interface in multiple places and in multiple ways."}),y("li",{children:["Note how in the TypeScript example we define ",a("code",{children:"Sum"})," and ",a("code",{children:"Difference"})," using an interface, however we use an inline type definition for the ",a("code",{children:"Product"})," component."]})]})})})},cv=()=>y(ad,{children:[a(ie,{path:"v1",element:a(rv,{})}),a(ie,{path:"v2",element:a(lv,{})}),a(ie,{path:"v3",element:a(ov,{})}),a(ie,{path:"v4",element:a(iv,{})}),a(ie,{path:"v5",element:a(av,{})}),a(ie,{path:"v6",element:a(uv,{})}),a(ie,{path:"v7",element:a(sv,{})})]});function dv(){w.useState(0);const e=Dr().pathname.replace("/",""),{lineNumbers:t,setLineNumbers:n}=Ta();return y("div",{className:"App",children:[y("nav",{children:[a(Dt,{to:"v1",children:"V1"}),a(Dt,{to:"v2",children:"V2"}),a(Dt,{to:"v3",children:"V3"}),a(Dt,{to:"v4",children:"V4"}),a(Dt,{to:"v5",children:"V5"}),a(Dt,{to:"v6",children:"V6"}),a(Dt,{to:"v7",children:"V7"}),y("div",{style:{position:"absolute",right:"30px",display:"flex",alignItems:"center"},children:[a("strong",{children:"Show Line Numbers"}),y("label",{className:"switch",children:[a("input",{type:"checkbox",checked:t,onChange:r=>n(r.target.checked)}),a("span",{className:"slider round"})]})]})]}),y("main",{children:[y("div",{className:"flex",children:[y("h1",{children:["Why Not Typescript ",e]}),a(cv,{})]}),y(ad,{children:[a(ie,{path:"/",element:a(Lp,{to:"v1"})}),a(ie,{path:"v1",element:a(em,{})}),a(ie,{path:"v2",element:a(im,{})}),a(ie,{path:"v3",element:a(pm,{})}),a(ie,{path:"v4",element:a(Tm,{})}),a(ie,{path:"v5",element:a(Um,{})}),a(ie,{path:"v6",element:a(Hm,{})}),a(ie,{path:"v7",element:a(nv,{})})]})]})]})}Bo.createRoot(document.getElementById("root")).render(a(Ri.StrictMode,{children:a(Jp,{children:y(Ip,{basename:"/ts-video",children:[a("div",{id:"portal-root"}),a(dv,{})]})})}));
