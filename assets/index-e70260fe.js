var Uy=Object.defineProperty;var Oy=(t,e,n)=>e in t?Uy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var li=(t,e,n)=>(Oy(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ny(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L_={exports:{}},Eu={},D_={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),Iy=Symbol.for("react.portal"),Fy=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),zy=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Gy=Symbol.for("react.suspense"),Wy=Symbol.for("react.memo"),Xy=Symbol.for("react.lazy"),Oh=Symbol.iterator;function jy(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var U_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,N_={};function oo(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||U_}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I_(){}I_.prototype=oo.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||U_}var xd=yd.prototype=new I_;xd.constructor=yd;O_(xd,oo.prototype);xd.isPureReactComponent=!0;var Nh=Array.isArray,F_=Object.prototype.hasOwnProperty,Sd={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function z_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F_.call(e,i)&&!B_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:Sd.current}}function qy(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function $y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ih=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$y(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case Iy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ju(o,0):i,Nh(r)?(n="",t!=null&&(n=t.replace(Ih,"$&/")+"/"),Ml(r,e,n,"",function(u){return u})):r!=null&&(Ed(r)&&(r=qy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ih,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Nh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ju(s,a);o+=Ml(s,e,n,l,r)}else if(l=jy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ju(s,a++),o+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Tl={transition:null},Ky={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Sd};Be.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=oo;Be.Fragment=Fy;Be.Profiler=zy;Be.PureComponent=yd;Be.StrictMode=By;Be.Suspense=Gy;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=O_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F_.call(e,l)&&!B_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:Vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ky,_context:t},t.Consumer=t};Be.createElement=z_;Be.createFactory=function(t){var e=z_.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:Hy,render:t}};Be.isValidElement=Ed;Be.lazy=function(t){return{$$typeof:Xy,_payload:{_status:-1,_result:t},_init:Yy}};Be.memo=function(t,e){return{$$typeof:Wy,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return jt.current.useCallback(t,e)};Be.useContext=function(t){return jt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return jt.current.useEffect(t,e)};Be.useId=function(){return jt.current.useId()};Be.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return jt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};Be.useRef=function(t){return jt.current.useRef(t)};Be.useState=function(t){return jt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return jt.current.useTransition()};Be.version="18.2.0";D_.exports=Be;var wt=D_.exports;const ms=Ny(wt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=wt,Qy=Symbol.for("react.element"),Jy=Symbol.for("react.fragment"),ex=Object.prototype.hasOwnProperty,tx=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nx={key:!0,ref:!0,__self:!0,__source:!0};function k_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ex.call(e,i)&&!nx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qy,type:t,key:s,ref:o,props:r,_owner:tx.current}}Eu.Fragment=Jy;Eu.jsx=k_;Eu.jsxs=k_;L_.exports=Eu;var On=L_.exports,lf={},V_={exports:{}},mn={},H_={exports:{}},G_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,V){var B=P.length;P.push(V);e:for(;0<B;){var U=B-1>>>1,I=P[U];if(0<r(I,V))P[U]=V,P[B]=I,B=U;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var V=P[0],B=P.pop();if(B!==V){P[0]=B;e:for(var U=0,I=P.length,se=I>>>1;U<se;){var ie=2*(U+1)-1,ce=P[ie],me=ie+1,Me=P[me];if(0>r(ce,B))me<I&&0>r(Me,ce)?(P[U]=Me,P[me]=B,U=me):(P[U]=ce,P[ie]=B,U=ie);else if(me<I&&0>r(Me,B))P[U]=Me,P[me]=B,U=me;else break e}}return V}function r(P,V){var B=P.sortIndex-V.sortIndex;return B!==0?B:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,y=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=P)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function x(P){if(v=!1,_(P),!y)if(n(l)!==null)y=!0,K(M);else{var V=n(u);V!==null&&q(x,V.startTime-P)}}function M(P,V){y=!1,v&&(v=!1,c(L),L=-1),m=!0;var B=d;try{for(_(V),h=n(l);h!==null&&(!(h.expirationTime>V)||P&&!Y());){var U=h.callback;if(typeof U=="function"){h.callback=null,d=h.priorityLevel;var I=U(h.expirationTime<=V);V=t.unstable_now(),typeof I=="function"?h.callback=I:h===n(l)&&i(l),_(V)}else i(l);h=n(l)}if(h!==null)var se=!0;else{var ie=n(u);ie!==null&&q(x,ie.startTime-V),se=!1}return se}finally{h=null,d=B,m=!1}}var R=!1,b=null,L=-1,S=5,w=-1;function Y(){return!(t.unstable_now()-w<S)}function Q(){if(b!==null){var P=t.unstable_now();w=P;var V=!0;try{V=b(!0,P)}finally{V?F():(R=!1,b=null)}}else R=!1}var F;if(typeof g=="function")F=function(){g(Q)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=Q,F=function(){W.postMessage(null)}}else F=function(){p(Q,0)};function K(P){b=P,R||(R=!0,F())}function q(P,V){L=p(function(){P(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,K(M))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return P()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=d;d=P;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(P,V,B){var U=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?U+B:U):B=U,P){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=B+I,P={id:f++,callback:V,priorityLevel:P,startTime:B,expirationTime:I,sortIndex:-1},B>U?(P.sortIndex=B,e(u,P),n(l)===null&&P===n(u)&&(v?(c(L),L=-1):v=!0,q(x,B-U))):(P.sortIndex=I,e(l,P),y||m||(y=!0,K(M))),P},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(P){var V=d;return function(){var B=d;d=V;try{return P.apply(this,arguments)}finally{d=B}}}})(G_);H_.exports=G_;var ix=H_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=wt,pn=ix;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X_=new Set,Xo={};function jr(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Xo[t]=e,t=0;t<e.length;t++)X_.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},Bh={};function sx(t){return uf.call(Bh,t)?!0:uf.call(Fh,t)?!1:rx.test(t)?Bh[t]=!0:(Fh[t]=!0,!1)}function ox(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ax(t,e,n,i){if(e===null||typeof e>"u"||ox(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Md=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Md,Td);Lt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Md,Td);Lt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Md,Td);Lt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,i){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ax(e,n,r,i)&&(n=null),i||r===null?sx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),$_=Symbol.for("react.offscreen"),zh=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,ec;function Co(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function lx(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case cf:return"Profiler";case Ad:return"StrictMode";case ff:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q_:return(t.displayName||"Context")+".Consumer";case j_:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function ux(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cx(t){var e=Y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fa(t){t._valueTracker||(t._valueTracker=cx(t))}function K_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Y_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pf(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z_(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function mf(t,e){Z_(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(Po(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Q_(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fx=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){fx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var dx=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ef=null,Os=null,Ns=null;function Wh(t){if(t=va(t)){if(typeof Ef!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=bu(e),Ef(t.stateNode,t.type,e))}}function ig(t){Os?Ns?Ns.push(t):Ns=[t]:Os=t}function rg(){if(Os){var t=Os,e=Ns;if(Ns=Os=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function sg(t,e){return t(e)}function og(){}var ic=!1;function ag(t,e,n){if(ic)return t(e,n);ic=!0;try{return sg(t,e,n)}finally{ic=!1,(Os!==null||Ns!==null)&&(og(),rg())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var i=bu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var Mf=!1;if(Ri)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Mf=!1}function hx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var No=!1,Hl=null,Gl=!1,Tf=null,px={onError:function(t){No=!0,Hl=t}};function mx(t,e,n,i,r,s,o,a,l){No=!1,Hl=null,hx.apply(px,arguments)}function _x(t,e,n,i,r,s,o,a,l){if(mx.apply(this,arguments),No){if(No){var u=Hl;No=!1,Hl=null}else throw Error(Z(198));Gl||(Gl=!0,Tf=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(qr(t)!==t)throw Error(Z(188))}function gx(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xh(r),t;if(s===i)return Xh(r),e;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function ug(t){return t=gx(t),t!==null?cg(t):null}function cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cg(t);if(e!==null)return e;t=t.sibling}return null}var fg=pn.unstable_scheduleCallback,jh=pn.unstable_cancelCallback,vx=pn.unstable_shouldYield,yx=pn.unstable_requestPaint,ct=pn.unstable_now,xx=pn.unstable_getCurrentPriorityLevel,Pd=pn.unstable_ImmediatePriority,dg=pn.unstable_UserBlockingPriority,Wl=pn.unstable_NormalPriority,Sx=pn.unstable_LowPriority,hg=pn.unstable_IdlePriority,Mu=null,ei=null;function Ex(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:wx,Mx=Math.log,Tx=Math.LN2;function wx(t){return t>>>=0,t===0?32:31-(Mx(t)/Tx|0)|0}var za=64,ka=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=n&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ax(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function Rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var je=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _g,Dd,gg,vg,yg,Af=!1,Va=[],Yi=null,Ki=null,Zi=null,$o=new Map,Yo=new Map,Hi=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Px(t,e,n,i,r){switch(e){case"focusin":return Yi=yo(Yi,t,e,n,i,r),!0;case"dragenter":return Ki=yo(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=yo(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,yo($o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,yo(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function xg(t){var e=br(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,yg(t.priority,function(){gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Sf=i,n.target.dispatchEvent(i),Sf=null}else return e=va(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){wl(t)&&n.delete(e)}function Lx(){Af=!1,Yi!==null&&wl(Yi)&&(Yi=null),Ki!==null&&wl(Ki)&&(Ki=null),Zi!==null&&wl(Zi)&&(Zi=null),$o.forEach($h),Yo.forEach($h)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Lx)))}function Ko(t){function e(r){return xo(r,t)}if(0<Va.length){xo(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&xo(Yi,t),Ki!==null&&xo(Ki,t),Zi!==null&&xo(Zi,t),$o.forEach(e),Yo.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&Hi.shift()}var Is=Ui.ReactCurrentBatchConfig,jl=!0;function Dx(t,e,n,i){var r=je,s=Is.transition;Is.transition=null;try{je=1,Ud(t,e,n,i)}finally{je=r,Is.transition=s}}function Ux(t,e,n,i){var r=je,s=Is.transition;Is.transition=null;try{je=4,Ud(t,e,n,i)}finally{je=r,Is.transition=s}}function Ud(t,e,n,i){if(jl){var r=bf(t,e,n,i);if(r===null)pc(t,e,i,ql,n),qh(t,i);else if(Px(r,t,e,n,i))i.stopPropagation();else if(qh(t,i),e&4&&-1<Cx.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&_g(s),s=bf(t,e,n,i),s===null&&pc(t,e,i,ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pc(t,e,i,null,n)}}var ql=null;function bf(t,e,n,i){if(ql=null,t=Cd(i),t=br(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xx()){case Pd:return 1;case dg:return 4;case Wl:case Sx:return 16;case hg:return 536870912;default:return 16}default:return 16}}var Wi=null,Od=null,Al=null;function Eg(){if(Al)return Al;var t,e=Od,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Al=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function Yh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:Yh,this.isPropagationStopped=Yh,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=_n(ao),ga=st({},ao,{view:0,detail:0}),Ox=_n(ga),sc,oc,So,Tu=st({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(sc=t.screenX-So.screenX,oc=t.screenY-So.screenY):oc=sc=0,So=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Kh=_n(Tu),Nx=st({},Tu,{dataTransfer:0}),Ix=_n(Nx),Fx=st({},ga,{relatedTarget:0}),ac=_n(Fx),Bx=st({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=_n(Bx),kx=st({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=_n(kx),Hx=st({},ao,{data:0}),Zh=_n(Hx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xx[t])?!!e[t]:!1}function Id(){return jx}var qx=st({},ga,{key:function(t){if(t.key){var e=Gx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Id,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=_n(qx),Yx=st({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=_n(Yx),Kx=st({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Id}),Zx=_n(Kx),Qx=st({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=_n(Qx),eS=st({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=_n(eS),nS=[9,13,27,32],Fd=Ri&&"CompositionEvent"in window,Io=null;Ri&&"documentMode"in document&&(Io=document.documentMode);var iS=Ri&&"TextEvent"in window&&!Io,Mg=Ri&&(!Fd||Io&&8<Io&&11>=Io),Jh=String.fromCharCode(32),ep=!1;function Tg(t,e){switch(t){case"keyup":return nS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function rS(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(ep=!0,Jh);case"textInput":return t=e.data,t===Jh&&ep?null:t;default:return null}}function sS(t,e){if(ys)return t==="compositionend"||!Fd&&Tg(t,e)?(t=Eg(),Al=Od=Wi=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mg&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function Ag(t,e,n,i){ig(i),e=$l(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,Zo=null;function aS(t){Fg(t,0)}function wu(t){var e=Es(t);if(K_(e))return t}function lS(t,e){if(t==="change")return e}var bg=!1;if(Ri){var lc;if(Ri){var uc="oninput"in document;if(!uc){var np=document.createElement("div");np.setAttribute("oninput","return;"),uc=typeof np.oninput=="function"}lc=uc}else lc=!1;bg=lc&&(!document.documentMode||9<document.documentMode)}function ip(){Fo&&(Fo.detachEvent("onpropertychange",Rg),Zo=Fo=null)}function Rg(t){if(t.propertyName==="value"&&wu(Zo)){var e=[];Ag(e,Zo,t,Cd(t)),ag(aS,e)}}function uS(t,e,n){t==="focusin"?(ip(),Fo=e,Zo=n,Fo.attachEvent("onpropertychange",Rg)):t==="focusout"&&ip()}function cS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wu(Zo)}function fS(t,e){if(t==="click")return wu(e)}function dS(t,e){if(t==="input"||t==="change")return wu(e)}function hS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:hS;function Qo(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uf.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pg(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pS(t){var e=Pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(i!==null&&Bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var o=sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mS=Ri&&"documentMode"in document&&11>=document.documentMode,xs=null,Rf=null,Bo=null,Cf=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||xs==null||xs!==Vl(i)||(i=xs,"selectionStart"in i&&Bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&Qo(Bo,i)||(Bo=i,i=$l(Rf,"onSelect"),0<i.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},cc={},Lg={};Ri&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Au(t){if(cc[t])return cc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lg)return cc[t]=e[n];return t}var Dg=Au("animationend"),Ug=Au("animationiteration"),Og=Au("animationstart"),Ng=Au("transitionend"),Ig=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Ig.set(t,e),jr(e,[t])}for(var fc=0;fc<ap.length;fc++){var dc=ap[fc],_S=dc.toLowerCase(),gS=dc[0].toUpperCase()+dc.slice(1);dr(_S,"on"+gS)}dr(Dg,"onAnimationEnd");dr(Ug,"onAnimationIteration");dr(Og,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Ng,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_x(i,e,void 0,t),t.currentTarget=null}function Fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,u),s=l}}}if(Gl)throw t=Tf,Gl=!1,Tf=null,t}function Ze(t,e){var n=e[Of];n===void 0&&(n=e[Of]=new Set);var i=t+"__bubble";n.has(i)||(Bg(e,t,2,!1),n.add(i))}function hc(t,e,n){var i=0;e&&(i|=4),Bg(n,t,i,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[Wa]){t[Wa]=!0,X_.forEach(function(n){n!=="selectionchange"&&(vS.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,hc("selectionchange",!1,e))}}function Bg(t,e,n,i){switch(Sg(e)){case 1:var r=Dx;break;case 4:r=Ux;break;default:r=Ud}n=r.bind(null,e,n,t),r=void 0,!Mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ag(function(){var u=s,f=Cd(n),h=[];e:{var d=Ig.get(t);if(d!==void 0){var m=Nd,y=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":m=$x;break;case"focusin":y="focus",m=ac;break;case"focusout":y="blur",m=ac;break;case"beforeblur":case"afterblur":m=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Zx;break;case Dg:case Ug:case Og:m=zx;break;case Ng:m=Jx;break;case"scroll":m=Ox;break;case"wheel":m=tS;break;case"copy":case"cut":case"paste":m=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qh}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,c!==null&&(x=qo(g,c),x!=null&&v.push(ea(g,x,_)))),p)break;g=g.return}0<v.length&&(d=new m(d,y,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Sf&&(y=n.relatedTarget||n.fromElement)&&(br(y)||y[Ci]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?br(y):null,y!==null&&(p=qr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=Kh,x="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qh,x="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?d:Es(m),_=y==null?d:Es(y),d=new v(x,g+"leave",m,n,f),d.target=p,d.relatedTarget=_,x=null,br(f)===u&&(v=new v(c,g+"enter",y,n,f),v.target=_,v.relatedTarget=p,x=v),p=x,m&&y)t:{for(v=m,c=y,g=0,_=v;_;_=Zr(_))g++;for(_=0,x=c;x;x=Zr(x))_++;for(;0<g-_;)v=Zr(v),g--;for(;0<_-g;)c=Zr(c),_--;for(;g--;){if(v===c||c!==null&&v===c.alternate)break t;v=Zr(v),c=Zr(c)}v=null}else v=null;m!==null&&up(h,d,m,v,!1),y!==null&&p!==null&&up(h,p,y,v,!0)}}e:{if(d=u?Es(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var M=lS;else if(tp(d))if(bg)M=dS;else{M=cS;var R=uS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=fS);if(M&&(M=M(t,u))){Ag(h,M,n,f);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&_f(d,"number",d.value)}switch(R=u?Es(u):window,t){case"focusin":(tp(R)||R.contentEditable==="true")&&(xs=R,Rf=u,Bo=null);break;case"focusout":Bo=Rf=xs=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,op(h,n,f);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":op(h,n,f)}var b;if(Fd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ys?Tg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Mg&&n.locale!=="ko"&&(ys||L!=="onCompositionStart"?L==="onCompositionEnd"&&ys&&(b=Eg()):(Wi=f,Od="value"in Wi?Wi.value:Wi.textContent,ys=!0)),R=$l(u,L),0<R.length&&(L=new Zh(L,t,null,n,f),h.push({event:L,listeners:R}),b?L.data=b:(b=wg(n),b!==null&&(L.data=b)))),(b=iS?rS(t,n):sS(t,n))&&(u=$l(u,"onBeforeInput"),0<u.length&&(f=new Zh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=b))}Fg(h,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qo(t,n),s!=null&&i.unshift(ea(t,s,r)),s=qo(t,e),s!=null&&i.push(ea(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=qo(n,s),l!=null&&o.unshift(ea(n,l,a))):r||(l=qo(n,s),l!=null&&o.push(ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(xS,"")}function Xa(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(Z(425))}function Yl(){}var Pf=null,Lf=null;function Df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(MS)}:Uf;function MS(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ko(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ko(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+lo,ta="__reactProps$"+lo,Ci="__reactContainer$"+lo,Of="__reactEvents$"+lo,TS="__reactListeners$"+lo,wS="__reactHandles$"+lo;function br(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[Qn])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[Qn]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function bu(t){return t[ta]||null}var Nf=[],Ms=-1;function hr(t){return{current:t}}function Je(t){0>Ms||(t.current=Nf[Ms],Nf[Ms]=null,Ms--)}function Ke(t,e){Ms++,Nf[Ms]=t.current,t.current=e}var lr={},zt=hr(lr),en=hr(!1),Br=lr;function Xs(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Kl(){Je(en),Je(zt)}function hp(t,e,n){if(zt.current!==lr)throw Error(Z(168));Ke(zt,e),Ke(en,n)}function zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,ux(t)||"Unknown",r));return st({},n,i)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Br=zt.current,Ke(zt,t),Ke(en,en.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=zg(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,Je(en),Je(zt),Ke(zt,t)):Je(en),Ke(en,n)}var gi=null,Ru=!1,_c=!1;function kg(t){gi===null?gi=[t]:gi.push(t)}function AS(t){Ru=!0,kg(t)}function pr(){if(!_c&&gi!==null){_c=!0;var t=0,e=je;try{var n=gi;for(je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Ru=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),fg(Pd,pr),r}finally{je=e,_c=!1}}return null}var Ts=[],ws=0,Ql=null,Jl=0,vn=[],yn=0,zr=null,Si=1,Ei="";function Er(t,e){Ts[ws++]=Jl,Ts[ws++]=Ql,Ql=t,Jl=e}function Vg(t,e,n){vn[yn++]=Si,vn[yn++]=Ei,vn[yn++]=zr,zr=t;var i=Si;t=Ei;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Vn(e)+r|n<<r|i,Ei=s+t}else Si=1<<s|n<<r|i,Ei=t}function zd(t){t.return!==null&&(Er(t,1),Vg(t,1,0))}function kd(t){for(;t===Ql;)Ql=Ts[--ws],Ts[ws]=null,Jl=Ts[--ws],Ts[ws]=null;for(;t===zr;)zr=vn[--yn],vn[yn]=null,Ei=vn[--yn],vn[yn]=null,Si=vn[--yn],vn[yn]=null}var fn=null,cn=null,et=!1,Fn=null;function Hg(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(et){var e=cn;if(e){var n=e;if(!mp(t,e)){if(If(t))throw Error(Z(418));e=Qi(n.nextSibling);var i=fn;e&&mp(t,e)?Hg(i,n):(t.flags=t.flags&-4097|2,et=!1,fn=t)}}else{if(If(t))throw Error(Z(418));t.flags=t.flags&-4097|2,et=!1,fn=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function ja(t){if(t!==fn)return!1;if(!et)return _p(t),et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Df(t.type,t.memoizedProps)),e&&(e=cn)){if(If(t))throw Gg(),Error(Z(418));for(;e;)Hg(t,e),e=Qi(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?Qi(t.stateNode.nextSibling):null;return!0}function Gg(){for(var t=cn;t;)t=Qi(t.nextSibling)}function js(){cn=fn=null,et=!1}function Vd(t){Fn===null?Fn=[t]:Fn.push(t)}var bS=Ui.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var eu=hr(null),tu=null,As=null,Hd=null;function Gd(){Hd=As=tu=null}function Wd(t){var e=eu.current;Je(eu),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){tu=t,Hd=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(tu===null)throw Error(Z(308));As=t,tu.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Rr=null;function Xd(t){Rr===null?Rr=[t]:Rr.push(t)}function Wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ld(t,n)}}function gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=st({},h,d);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=h}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var jg=new W_.Component().refs;function zf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=tr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Hn(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=tr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Hn(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=tr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Hn(e,t,i,n),Rl(e,t,i))}};function yp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,i)||!Qo(r,s):!0}function qg(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?Br:zt.current,i=e.contextTypes,s=(i=i!=null)?Xs(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=jg,jd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?Br:zt.current,r.context=Xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cu.enqueueReplaceState(r,r.state,null),nu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===jg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sp(t){var e=t._init;return e(t._payload)}function $g(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=nr(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,x){return g===null||g.tag!==6?(g=Mc(_,c.mode,x),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,x){var M=_.type;return M===vs?f(c,g,_.props.children,x,_.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ki&&Sp(M)===g.type)?(x=r(g,_.props),x.ref=Eo(c,g,_),x.return=c,x):(x=Ol(_.type,_.key,_.props,null,c.mode,x),x.ref=Eo(c,g,_),x.return=c,x)}function u(c,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Tc(_,c.mode,x),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,x,M){return g===null||g.tag!==7?(g=Lr(_,c.mode,x,M),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Mc(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ia:return _=Ol(g.type,g.key,g.props,null,c.mode,_),_.ref=Eo(c,null,g),_.return=c,_;case gs:return g=Tc(g,c.mode,_),g.return=c,g;case ki:var x=g._init;return h(c,x(g._payload),_)}if(Po(g)||go(g))return g=Lr(g,c.mode,_,null),g.return=c,g;qa(c,g)}return null}function d(c,g,_,x){var M=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:a(c,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ia:return _.key===M?l(c,g,_,x):null;case gs:return _.key===M?u(c,g,_,x):null;case ki:return M=_._init,d(c,g,M(_._payload),x)}if(Po(_)||go(_))return M!==null?null:f(c,g,_,x,null);qa(c,_)}return null}function m(c,g,_,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(_)||null,a(g,c,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ia:return c=c.get(x.key===null?_:x.key)||null,l(g,c,x,M);case gs:return c=c.get(x.key===null?_:x.key)||null,u(g,c,x,M);case ki:var R=x._init;return m(c,g,_,R(x._payload),M)}if(Po(x)||go(x))return c=c.get(_)||null,f(g,c,x,M,null);qa(g,x)}return null}function y(c,g,_,x){for(var M=null,R=null,b=g,L=g=0,S=null;b!==null&&L<_.length;L++){b.index>L?(S=b,b=null):S=b.sibling;var w=d(c,b,_[L],x);if(w===null){b===null&&(b=S);break}t&&b&&w.alternate===null&&e(c,b),g=s(w,g,L),R===null?M=w:R.sibling=w,R=w,b=S}if(L===_.length)return n(c,b),et&&Er(c,L),M;if(b===null){for(;L<_.length;L++)b=h(c,_[L],x),b!==null&&(g=s(b,g,L),R===null?M=b:R.sibling=b,R=b);return et&&Er(c,L),M}for(b=i(c,b);L<_.length;L++)S=m(b,c,L,_[L],x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?L:S.key),g=s(S,g,L),R===null?M=S:R.sibling=S,R=S);return t&&b.forEach(function(Y){return e(c,Y)}),et&&Er(c,L),M}function v(c,g,_,x){var M=go(_);if(typeof M!="function")throw Error(Z(150));if(_=M.call(_),_==null)throw Error(Z(151));for(var R=M=null,b=g,L=g=0,S=null,w=_.next();b!==null&&!w.done;L++,w=_.next()){b.index>L?(S=b,b=null):S=b.sibling;var Y=d(c,b,w.value,x);if(Y===null){b===null&&(b=S);break}t&&b&&Y.alternate===null&&e(c,b),g=s(Y,g,L),R===null?M=Y:R.sibling=Y,R=Y,b=S}if(w.done)return n(c,b),et&&Er(c,L),M;if(b===null){for(;!w.done;L++,w=_.next())w=h(c,w.value,x),w!==null&&(g=s(w,g,L),R===null?M=w:R.sibling=w,R=w);return et&&Er(c,L),M}for(b=i(c,b);!w.done;L++,w=_.next())w=m(b,c,L,w.value,x),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?L:w.key),g=s(w,g,L),R===null?M=w:R.sibling=w,R=w);return t&&b.forEach(function(Q){return e(c,Q)}),et&&Er(c,L),M}function p(c,g,_,x){if(typeof _=="object"&&_!==null&&_.type===vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ia:e:{for(var M=_.key,R=g;R!==null;){if(R.key===M){if(M=_.type,M===vs){if(R.tag===7){n(c,R.sibling),g=r(R,_.props.children),g.return=c,c=g;break e}}else if(R.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ki&&Sp(M)===R.type){n(c,R.sibling),g=r(R,_.props),g.ref=Eo(c,R,_),g.return=c,c=g;break e}n(c,R);break}else e(c,R);R=R.sibling}_.type===vs?(g=Lr(_.props.children,c.mode,x,_.key),g.return=c,c=g):(x=Ol(_.type,_.key,_.props,null,c.mode,x),x.ref=Eo(c,g,_),x.return=c,c=x)}return o(c);case gs:e:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Tc(_,c.mode,x),g.return=c,c=g}return o(c);case ki:return R=_._init,p(c,g,R(_._payload),x)}if(Po(_))return y(c,g,_,x);if(go(_))return v(c,g,_,x);qa(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Mc(_,c.mode,x),g.return=c,c=g),o(c)):n(c,g)}return p}var qs=$g(!0),Yg=$g(!1),ya={},ti=hr(ya),na=hr(ya),ia=hr(ya);function Cr(t){if(t===ya)throw Error(Z(174));return t}function qd(t,e){switch(Ke(ia,e),Ke(na,t),Ke(ti,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}Je(ti),Ke(ti,e)}function $s(){Je(ti),Je(na),Je(ia)}function Kg(t){Cr(ia.current);var e=Cr(ti.current),n=vf(e,t.type);e!==n&&(Ke(na,t),Ke(ti,n))}function $d(t){na.current===t&&(Je(ti),Je(na))}var it=hr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function Yd(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Cl=Ui.ReactCurrentDispatcher,vc=Ui.ReactCurrentBatchConfig,kr=0,rt=null,pt=null,Et=null,ru=!1,zo=!1,ra=0,RS=0;function Ot(){throw Error(Z(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Zd(t,e,n,i,r,s){if(kr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?DS:US,t=n(i,r),zo){s=0;do{if(zo=!1,ra=0,25<=s)throw Error(Z(301));s+=1,Et=pt=null,e.updateQueue=null,Cl.current=OS,t=n(i,r)}while(zo)}if(Cl.current=su,e=pt!==null&&pt.next!==null,kr=0,Et=pt=rt=null,ru=!1,e)throw Error(Z(300));return t}function Qd(){var t=ra!==0;return ra=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?rt.memoizedState=Et=t:Et=Et.next=t,Et}function bn(){if(pt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=Et===null?rt.memoizedState:Et.next;if(e!==null)Et=e,pt=t;else{if(t===null)throw Error(Z(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?rt.memoizedState=Et=t:Et=Et.next=t}return Et}function sa(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=bn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((kr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,rt.lanes|=f,Vr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=bn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Zg(){}function Qg(t,e){var n=rt,i=bn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,Jd(tv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,oa(9,ev.bind(null,n,i,r,e),void 0,null),Tt===null)throw Error(Z(349));kr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ev(t,e,n,i){e.value=n,e.getSnapshot=i,nv(e)&&iv(t)}function tv(t,e,n){return n(function(){nv(e)&&iv(t)})}function nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function iv(t){var e=Pi(t,1);e!==null&&Hn(e,t,1,-1)}function Ep(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=LS.bind(null,rt,t),[e.memoizedState,t]}function oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function rv(){return bn().memoizedState}function Pl(t,e,n,i){var r=Kn();rt.flags|=t,r.memoizedState=oa(1|e,n,void 0,i===void 0?null:i)}function Pu(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,i!==null&&Kd(i,o.deps)){r.memoizedState=oa(e,n,s,i);return}}rt.flags|=t,r.memoizedState=oa(1|e,n,s,i)}function Mp(t,e){return Pl(8390656,8,t,e)}function Jd(t,e){return Pu(2048,8,t,e)}function sv(t,e){return Pu(4,2,t,e)}function ov(t,e){return Pu(4,4,t,e)}function av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lv(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4,4,av.bind(null,e,t),n)}function eh(){}function uv(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cv(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fv(t,e,n){return kr&21?(Xn(n,e)||(n=pg(),rt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function CS(t,e){var n=je;je=n!==0&&4>n?n:4,t(!0);var i=vc.transition;vc.transition={};try{t(!1),e()}finally{je=n,vc.transition=i}}function dv(){return bn().memoizedState}function PS(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))pv(e,n);else if(n=Wg(t,e,n,i),n!==null){var r=Xt();Hn(n,t,i,r),mv(n,e,i)}}function LS(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))pv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wg(t,e,r,i),n!==null&&(r=Xt(),Hn(n,t,i,r),mv(n,e,i))}}function hv(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function pv(t,e){zo=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ld(t,n)}}var su={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},DS={readContext:An,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=PS.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:eh,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=CS.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=Kn();if(et){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Tt===null)throw Error(Z(349));kr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mp(tv.bind(null,i,s,t),[t]),i.flags|=2048,oa(9,ev.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Tt.identifierPrefix;if(et){var n=Ei,i=Si;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},US={readContext:An,useCallback:uv,useContext:An,useEffect:Jd,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:cv,useReducer:yc,useRef:rv,useState:function(){return yc(sa)},useDebugValue:eh,useDeferredValue:function(t){var e=bn();return fv(e,pt.memoizedState,t)},useTransition:function(){var t=yc(sa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Qg,useId:dv,unstable_isNewReconciler:!1},OS={readContext:An,useCallback:uv,useContext:An,useEffect:Jd,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:cv,useReducer:xc,useRef:rv,useState:function(){return xc(sa)},useDebugValue:eh,useDeferredValue:function(t){var e=bn();return pt===null?e.memoizedState=t:fv(e,pt.memoizedState,t)},useTransition:function(){var t=xc(sa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Qg,useId:dv,unstable_isNewReconciler:!1};function Ys(t,e){try{var n="",i=e;do n+=lx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NS=typeof WeakMap=="function"?WeakMap:Map;function _v(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){au||(au=!0,Zf=i),Vf(t,e)},n}function gv(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new NS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var IS=Ui.ReactCurrentOwner,Zt=!1;function Gt(t,e,n,i){e.child=t===null?Yg(e,null,n,i):qs(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=Zd(t,e,n,i,s,r),n=Qd(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(et&&n&&zd(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vv(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Hf(t,e,n,i,r)}function yv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Rs,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Rs,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ke(Rs,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ke(Rs,un),un|=i;return Gt(t,e,r,n),e.child}function xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hf(t,e,n,i,r){var s=tn(n)?Br:zt.current;return s=Xs(e,s),Fs(e,r),n=Zd(t,e,n,i,s,r),i=Qd(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(et&&i&&zd(e),e.flags|=1,Gt(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(tn(n)){var s=!0;Zl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Ll(t,e),qg(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=tn(n)?Br:zt.current,u=Xs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&xp(e,o,i,u),Vi=!1;var d=e.memoizedState;o.state=d,nu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||en.current||Vi?(typeof f=="function"&&(zf(e,n,f,i),l=e.memoizedState),(a=Vi||yp(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?Br:zt.current,l=Xs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&xp(e,o,i,l),Vi=!1,d=e.memoizedState,o.state=d,nu(e,i,o,r);var y=e.memoizedState;a!==h||d!==y||en.current||Vi?(typeof m=="function"&&(zf(e,n,m,i),y=e.memoizedState),(u=Vi||yp(e,n,u,i,d,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Gf(t,e,n,i,s,r)}function Gf(t,e,n,i,r,s){xv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,n,!1),Li(t,e,s);i=e.stateNode,IS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),qd(t,e.containerInfo)}function Pp(t,e,n,i,r){return js(),Vd(r),e.flags|=256,Gt(t,e,n,i),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ev(t,e,n){var i=e.pendingProps,r=it.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(it,r&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uu(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xf(n),e.memoizedState=Wf,t):th(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function th(t,e){return e=Uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,i){return i!==null&&Vd(i),qs(e,t.child,null,n),t=th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Sc(Error(Z(422))),$a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uu({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return $a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=Sc(s,i,void 0),$a(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Hn(i,t,r,-1))}return ah(),i=Sc(Error(Z(421))),$a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=KS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Qi(r.nextSibling),fn=e,et=!0,Fn=null,t!==null&&(vn[yn++]=Si,vn[yn++]=Ei,vn[yn++]=zr,Si=t.id,Ei=t.overflow,zr=e),e=th(e,i.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bf(t.return,e,n)}function Ec(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=it.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(it,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ec(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&iu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ec(e,!0,n,null,s);break;case"together":Ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BS(t,e,n){switch(e.tag){case 3:Sv(e),js();break;case 5:Kg(e);break;case 1:tn(e.type)&&Zl(e);break;case 4:qd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(eu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?Ev(t,e,n):(Ke(it,it.current&1),t=Li(t,e,n),t!==null?t.sibling:null);Ke(it,it.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,yv(t,e,n)}return Li(t,e,n)}var Tv,jf,wv,Av;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(ti.current);var s=null;switch(n){case"input":r=pf(t,r),i=pf(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=gf(t,r),i=gf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yl)}yf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Av=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zS(t,e,n){var i=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return tn(e.type)&&Kl(),Nt(e),null;case 3:return i=e.stateNode,$s(),Je(en),Je(zt),Yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(ed(Fn),Fn=null))),jf(t,e),Nt(e),null;case 5:$d(e);var r=Cr(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Nt(e),null}if(t=Cr(ti.current),ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[ta]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)Ze(Do[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":kh(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":Hh(i,s),Ze("invalid",i)}yf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(n){case"input":Fa(i),Vh(i,s,!0);break;case"textarea":Fa(i),Gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[ta]=i,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)Ze(Do[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":kh(t,i),r=pf(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":Hh(t,i),r=gf(t,i),Ze("invalid",t);break;default:r=i}yf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(t,l):typeof l=="number"&&jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",t):l!=null&&wd(t,s,l,o))}switch(n){case"input":Fa(t),Vh(t,i,!1);break;case"textarea":Fa(t),Gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)Av(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=Cr(ia.current),Cr(ti.current),ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Nt(e),null;case 13:if(Je(it),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(et&&cn!==null&&e.mode&1&&!(e.flags&128))Gg(),js(),e.flags|=98560,s=!1;else if(s=ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[Qn]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Fn!==null&&(ed(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?mt===0&&(mt=3):ah())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return $s(),jf(t,e),t===null&&Jo(e.stateNode.containerInfo),Nt(e),null;case 10:return Wd(e.type._context),Nt(e),null;case 17:return tn(e.type)&&Kl(),Nt(e),null;case 19:if(Je(it),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(it,it.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>Ks&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=iu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!et)return Nt(e),null}else 2*ct()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=it.current,Ke(it,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function kS(t,e){switch(kd(e),e.tag){case 1:return tn(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Je(en),Je(zt),Yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(Je(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Je(it),null;case 4:return $s(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Ya=!1,Bt=!1,VS=typeof WeakSet=="function"?WeakSet:Set,fe=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){lt(t,e,i)}else n.current=null}function qf(t,e,n){try{n()}catch(i){lt(t,e,i)}}var Dp=!1;function HS(t,e){if(Pf=jl,t=Pg(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:t,selectionRange:n},jl=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,p=y.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:Nn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(x){lt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return y=Dp,Dp=!1,y}function ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qf(e,n,s)}r=r.next}while(r!==i)}}function Lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[ta],delete e[Of],delete e[TS],delete e[wS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rv(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function Kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var bt=null,In=!1;function Ni(t,e,n){for(n=n.child;n!==null;)Cv(t,e,n),n=n.sibling}function Cv(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:Bt||bs(n,e);case 6:var i=bt,r=In;bt=null,Ni(t,e,n),bt=i,In=r,bt!==null&&(In?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(In?(t=bt,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),Ko(t)):mc(bt,n.stateNode));break;case 4:i=bt,r=In,bt=n.stateNode.containerInfo,In=!0,Ni(t,e,n),bt=i,In=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qf(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Bt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){lt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ni(t,e,n),Bt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VS),e.forEach(function(i){var r=ZS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,In=!1;break e;case 3:bt=a.stateNode.containerInfo,In=!0;break e;case 4:bt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(bt===null)throw Error(Z(160));Cv(s,o,r),bt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Yn(t),i&4){try{ko(3,t,t.return),Lu(3,t)}catch(v){lt(t,t.return,v)}try{ko(5,t,t.return)}catch(v){lt(t,t.return,v)}}break;case 1:Cn(e,t),Yn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(Cn(e,t),Yn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{jo(r,"")}catch(v){lt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z_(r,s),xf(a,o);var u=xf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?ng(r,h):f==="dangerouslySetInnerHTML"?eg(r,h):f==="children"?jo(r,h):wd(r,f,h,u)}switch(a){case"input":mf(r,s);break;case"textarea":Q_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Us(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[ta]=s}catch(v){lt(t,t.return,v)}}break;case 6:if(Cn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){lt(t,t.return,v)}}break;case 3:if(Cn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(v){lt(t,t.return,v)}break;case 4:Cn(e,t),Yn(t);break;case 13:Cn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rh=ct())),i&4&&Op(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||f,Cn(e,t),Bt=u):Cn(e,t),Yn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(fe=t,f=t.child;f!==null;){for(h=fe=f;fe!==null;){switch(d=fe,m=d.child,d.tag){case 0:case 11:case 14:case 15:ko(4,d,d.return);break;case 1:bs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){lt(i,n,v)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){Ip(h);continue}}m!==null?(m.return=d,fe=m):Ip(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tg("display",o))}catch(v){lt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){lt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),Yn(t),i&4&&Op(t);break;case 21:break;default:Cn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rv(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var s=Up(t);Kf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Up(t);Yf(t,a,o);break;default:throw Error(Z(161))}}catch(l){lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GS(t,e,n){fe=t,Lv(t)}function Lv(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ya;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=Ya;var u=Bt;if(Ya=o,(Bt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,fe=l):Fp(r);for(;s!==null;)fe=s,Lv(s),s=s.sibling;fe=r,Ya=a,Bt=u}Np(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Np(t)}}function Np(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ko(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Bt||e.flags&512&&$f(e)}catch(d){lt(e,e.return,d)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Ip(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Fp(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lu(4,e)}catch(l){lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var s=e.return;try{$f(e)}catch(l){lt(e,s,l)}break;case 5:var o=e.return;try{$f(e)}catch(l){lt(e,o,l)}}}catch(l){lt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var WS=Math.ceil,ou=Ui.ReactCurrentDispatcher,nh=Ui.ReactCurrentOwner,wn=Ui.ReactCurrentBatchConfig,Ve=0,Tt=null,ht=null,Ct=0,un=0,Rs=hr(0),mt=0,aa=null,Vr=0,Du=0,ih=0,Vo=null,Yt=null,rh=0,Ks=1/0,_i=null,au=!1,Zf=null,er=null,Ka=!1,Xi=null,lu=0,Ho=0,Qf=null,Dl=-1,Ul=0;function Xt(){return Ve&6?ct():Dl!==-1?Dl:Dl=ct()}function tr(t){return t.mode&1?Ve&2&&Ct!==0?Ct&-Ct:bS.transition!==null?(Ul===0&&(Ul=pg()),Ul):(t=je,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function Hn(t,e,n,i){if(50<Ho)throw Ho=0,Qf=null,Error(Z(185));_a(t,n,i),(!(Ve&2)||t!==Tt)&&(t===Tt&&(!(Ve&2)&&(Du|=n),mt===4&&Gi(t,Ct)),nn(t,i),n===1&&Ve===0&&!(e.mode&1)&&(Ks=ct()+500,Ru&&pr()))}function nn(t,e){var n=t.callbackNode;bx(t,e);var i=Xl(t,t===Tt?Ct:0);if(i===0)n!==null&&jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jh(n),e===1)t.tag===0?AS(Bp.bind(null,t)):kg(Bp.bind(null,t)),ES(function(){!(Ve&6)&&pr()}),n=null;else{switch(mg(i)){case 1:n=Pd;break;case 4:n=dg;break;case 16:n=Wl;break;case 536870912:n=hg;break;default:n=Wl}n=zv(n,Dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dv(t,e){if(Dl=-1,Ul=0,Ve&6)throw Error(Z(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Xl(t,t===Tt?Ct:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uu(t,i);else{e=i;var r=Ve;Ve|=2;var s=Ov();(Tt!==t||Ct!==e)&&(_i=null,Ks=ct()+500,Pr(t,e));do try{qS();break}catch(a){Uv(t,a)}while(1);Gd(),ou.current=s,Ve=r,ht!==null?e=0:(Tt=null,Ct=0,e=mt)}if(e!==0){if(e===2&&(r=wf(t),r!==0&&(i=r,e=Jf(t,r))),e===1)throw n=aa,Pr(t,0),Gi(t,i),nn(t,ct()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!XS(r)&&(e=uu(t,i),e===2&&(s=wf(t),s!==0&&(i=s,e=Jf(t,s))),e===1))throw n=aa,Pr(t,0),Gi(t,i),nn(t,ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Mr(t,Yt,_i);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=rh+500-ct(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uf(Mr.bind(null,t,Yt,_i),e);break}Mr(t,Yt,_i);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WS(i/1960))-i,10<i){t.timeoutHandle=Uf(Mr.bind(null,t,Yt,_i),i);break}Mr(t,Yt,_i);break;case 5:Mr(t,Yt,_i);break;default:throw Error(Z(329))}}}return nn(t,ct()),t.callbackNode===n?Dv.bind(null,t):null}function Jf(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=uu(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&ed(e)),t}function ed(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function XS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~ih,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function Bp(t){if(Ve&6)throw Error(Z(327));Bs();var e=Xl(t,0);if(!(e&1))return nn(t,ct()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var i=wf(t);i!==0&&(e=i,n=Jf(t,i))}if(n===1)throw n=aa,Pr(t,0),Gi(t,e),nn(t,ct()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,Yt,_i),nn(t,ct()),null}function sh(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(Ks=ct()+500,Ru&&pr())}}function Hr(t){Xi!==null&&Xi.tag===0&&!(Ve&6)&&Bs();var e=Ve;Ve|=1;var n=wn.transition,i=je;try{if(wn.transition=null,je=1,t)return t()}finally{je=i,wn.transition=n,Ve=e,!(Ve&6)&&pr()}}function oh(){un=Rs.current,Je(Rs)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SS(n)),ht!==null)for(n=ht.return;n!==null;){var i=n;switch(kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:$s(),Je(en),Je(zt),Yd();break;case 5:$d(i);break;case 4:$s();break;case 13:Je(it);break;case 19:Je(it);break;case 10:Wd(i.type._context);break;case 22:case 23:oh()}n=n.return}if(Tt=t,ht=t=nr(t.current,null),Ct=un=e,mt=0,aa=null,ih=Du=Vr=0,Yt=Vo=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Rr=null}return t}function Uv(t,e){do{var n=ht;try{if(Gd(),Cl.current=su,ru){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ru=!1}if(kr=0,Et=pt=rt=null,zo=!1,ra=0,nh.current=null,n===null||n.return===null){mt=1,aa=e,ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=wp(o);if(m!==null){m.flags&=-257,Ap(m,o,a,s,e),m.mode&1&&Tp(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Tp(s,u,e),ah();break e}l=Error(Z(426))}}else if(et&&a.mode&1){var p=wp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ap(p,o,a,s,e),Vd(Ys(l,a));break e}}s=l=Ys(l,a),mt!==4&&(mt=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=_v(s,l,e);gp(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(er===null||!er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=gv(s,a,e);gp(s,x);break e}}s=s.return}while(s!==null)}Iv(n)}catch(M){e=M,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(1)}function Ov(){var t=ou.current;return ou.current=su,t===null?su:t}function ah(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||!(Vr&268435455)&&!(Du&268435455)||Gi(Tt,Ct)}function uu(t,e){var n=Ve;Ve|=2;var i=Ov();(Tt!==t||Ct!==e)&&(_i=null,Pr(t,e));do try{jS();break}catch(r){Uv(t,r)}while(1);if(Gd(),Ve=n,ou.current=i,ht!==null)throw Error(Z(261));return Tt=null,Ct=0,mt}function jS(){for(;ht!==null;)Nv(ht)}function qS(){for(;ht!==null&&!vx();)Nv(ht)}function Nv(t){var e=Bv(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?Iv(t):ht=e,nh.current=null}function Iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mt=6,ht=null;return}}else if(n=zS(n,e,un),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);mt===0&&(mt=5)}function Mr(t,e,n){var i=je,r=wn.transition;try{wn.transition=null,je=1,$S(t,e,n,i)}finally{wn.transition=r,je=i}return null}function $S(t,e,n,i){do Bs();while(Xi!==null);if(Ve&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rx(t,s),t===Tt&&(ht=Tt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,zv(Wl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=je;je=1;var a=Ve;Ve|=4,nh.current=null,HS(t,n),Pv(n,t),pS(Lf),jl=!!Pf,Lf=Pf=null,t.current=n,GS(n),yx(),Ve=a,je=o,wn.transition=s}else t.current=n;if(Ka&&(Ka=!1,Xi=t,lu=r),s=t.pendingLanes,s===0&&(er=null),Ex(n.stateNode),nn(t,ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,t=Zf,Zf=null,t;return lu&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===Qf?Ho++:(Ho=0,Qf=t):Ho=0,pr(),null}function Bs(){if(Xi!==null){var t=mg(lu),e=wn.transition,n=je;try{if(wn.transition=null,je=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,lu=0,Ve&6)throw Error(Z(331));var r=Ve;for(Ve|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var f=fe;switch(f.tag){case 0:case 11:case 15:ko(8,f,s)}var h=f.child;if(h!==null)h.return=f,fe=h;else for(;fe!==null;){f=fe;var d=f.sibling,m=f.return;if(bv(f),f===u){fe=null;break}if(d!==null){d.return=m,fe=d;break}fe=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,fe=c;break e}fe=s.return}}var g=t.current;for(fe=g;fe!==null;){o=fe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,fe=_;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lu(9,a)}}catch(M){lt(a,a.return,M)}if(a===o){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(Ve=r,pr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Mu,t)}catch{}i=!0}return i}finally{je=n,wn.transition=e}}return!1}function zp(t,e,n){e=Ys(n,e),e=_v(t,e,1),t=Ji(t,e,1),e=Xt(),t!==null&&(_a(t,1,e),nn(t,e))}function lt(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Ys(n,t),t=gv(e,t,1),e=Ji(e,t,1),t=Xt(),e!==null&&(_a(e,1,t),nn(e,t));break}}e=e.return}}function YS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(Ct&n)===n&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>ct()-rh?Pr(t,0):ih|=n),nn(t,e)}function Fv(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=Xt();t=Pi(t,e),t!==null&&(_a(t,e,n),nn(t,n))}function KS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fv(t,n)}function ZS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),Fv(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,BS(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,et&&e.flags&1048576&&Vg(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=Xs(e,zt.current);Fs(e,n),r=Zd(null,e,i,t,r,n);var s=Qd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jd(e),r.updater=Cu,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=Gf(null,e,i,!0,s,n)):(e.tag=0,et&&s&&zd(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JS(i),t=Nn(i,t),r){case 0:e=Hf(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Rp(null,e,i,Nn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Hf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Cp(t,e,i,r,n);case 3:e:{if(Sv(e),t===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xg(t,e),nu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(Z(423)),e),e=Pp(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(Z(424)),e),e=Pp(t,e,i,n,r);break e}else for(cn=Qi(e.stateNode.containerInfo.firstChild),fn=e,et=!0,Fn=null,n=Yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Li(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Kg(e),t===null&&Ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Df(i,r)?o=null:s!==null&&Df(i,s)&&(e.flags|=32),xv(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return Ev(t,e,n);case 4:return qd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),bp(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ke(eu,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!en.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=An(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Rp(t,e,i,r,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ll(t,e),e.tag=1,tn(i)?(t=!0,Zl(e)):t=!1,Fs(e,n),qg(e,i,r),kf(e,i,r,n),Gf(null,e,i,!0,t,n);case 19:return Mv(t,e,n);case 22:return yv(t,e,n)}throw Error(Z(156,e.tag))};function zv(t,e){return fg(t,e)}function QS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new QS(t,e,n,i)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JS(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Rd)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Lr(n.children,r,s,e);case Ad:o=8,r|=8;break;case cf:return t=Tn(12,n,e,r|2),t.elementType=cf,t.lanes=s,t;case ff:return t=Tn(13,n,e,r),t.elementType=ff,t.lanes=s,t;case df:return t=Tn(19,n,e,r),t.elementType=df,t.lanes=s,t;case $_:return Uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j_:o=10;break e;case q_:o=9;break e;case bd:o=11;break e;case Rd:o=14;break e;case ki:o=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Uu(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=$_,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uh(t,e,n,i,r,s,o,a,l){return t=new eE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),t}function tE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function kv(t){if(!t)return lr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(tn(n))return zg(t,n,e)}return e}function Vv(t,e,n,i,r,s,o,a,l){return t=uh(n,i,!0,t,r,s,o,a,l),t.context=kv(null),n=t.current,i=Xt(),r=tr(n),s=wi(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,_a(t,r,i),nn(t,i),t}function Ou(t,e,n,i){var r=e.current,s=Xt(),o=tr(r);return n=kv(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,o),t!==null&&(Hn(t,r,o,s),Rl(t,r,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ch(t,e){kp(t,e),(t=t.alternate)&&kp(t,e)}function nE(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function fh(t){this._internalRoot=t}Nu.prototype.render=fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Ou(t,e,null,null)};Nu.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){Ou(null,t,null,null)}),e[Ci]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&xg(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function iE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cu(o);s.call(u)}}var o=Vv(e,i,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=o,t[Ci]=o.current,Jo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=cu(l);a.call(u)}}var l=uh(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=l,t[Ci]=l.current,Jo(t.nodeType===8?t.parentNode:t),Hr(function(){Ou(e,l,n,i)}),l}function Fu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cu(o);a.call(l)}}Ou(e,o,t,r)}else o=iE(n,e,t,r,i);return cu(o)}_g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(Ld(e,n|1),nn(e,ct()),!(Ve&6)&&(Ks=ct()+500,pr()))}break;case 13:Hr(function(){var i=Pi(t,1);if(i!==null){var r=Xt();Hn(i,t,1,r)}}),ch(t,1)}};Dd=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=Xt();Hn(e,t,134217728,n)}ch(t,134217728)}};gg=function(t){if(t.tag===13){var e=tr(t),n=Pi(t,e);if(n!==null){var i=Xt();Hn(n,t,e,i)}ch(t,e)}};vg=function(){return je};yg=function(t,e){var n=je;try{return je=t,e()}finally{je=n}};Ef=function(t,e,n){switch(e){case"input":if(mf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bu(i);if(!r)throw Error(Z(90));K_(i),mf(i,r)}}}break;case"textarea":Q_(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};sg=sh;og=Hr;var rE={usingClientEntryPoint:!1,Events:[va,Es,bu,ig,rg,sh]},To={findFiberByHostInstance:br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sE={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||nE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Mu=Za.inject(sE),ei=Za}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error(Z(200));return tE(t,e,null,n)};mn.createRoot=function(t,e){if(!dh(t))throw Error(Z(299));var n=!1,i="",r=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uh(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Jo(t.nodeType===8?t.parentNode:t),new fh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Hr(t)};mn.hydrate=function(t,e,n){if(!Iu(e))throw Error(Z(200));return Fu(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!dh(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,Jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nu(e)};mn.render=function(t,e,n){if(!Iu(e))throw Error(Z(200));return Fu(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(Z(40));return t._reactRootContainer?(Hr(function(){Fu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};mn.unstable_batchedUpdates=sh;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Iu(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return Fu(t,e,n,!1,i)};mn.version="18.2.0-next-9e3b772b8-20220608";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),V_.exports=mn;var Wv=V_.exports,Hp=Wv;lf.createRoot=Hp.createRoot,lf.hydrateRoot=Hp.hydrateRoot;function He(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error(typeof t=="number"?"[MobX] minified error nr: "+t+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+t)}var oE={};function hh(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:oE}var Xv=Object.assign,fu=Object.getOwnPropertyDescriptor,ni=Object.defineProperty,Bu=Object.prototype,td=[];Object.freeze(td);var jv={};Object.freeze(jv);var aE=typeof Proxy<"u",lE=Object.toString();function qv(){aE||He("Proxy not available")}function $v(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}var Cs=function(){};function jn(t){return typeof t=="function"}function Gr(t){var e=typeof t;switch(e){case"string":case"symbol":case"number":return!0}return!1}function zu(t){return t!==null&&typeof t=="object"}function Di(t){if(!zu(t))return!1;var e=Object.getPrototypeOf(t);if(e==null)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n.toString()===lE}function Yv(t){var e=t==null?void 0:t.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function xa(t,e,n){ni(t,e,{enumerable:!1,writable:!0,configurable:!0,value:n})}function Kv(t,e,n){ni(t,e,{enumerable:!1,writable:!1,configurable:!0,value:n})}function $r(t,e){var n="isMobX"+t;return e.prototype[n]=!0,function(i){return zu(i)&&i[n]===!0}}function uo(t){return t instanceof Map}function Sa(t){return t instanceof Set}var Zv=typeof Object.getOwnPropertySymbols<"u";function uE(t){var e=Object.keys(t);if(!Zv)return e;var n=Object.getOwnPropertySymbols(t);return n.length?[].concat(e,n.filter(function(i){return Bu.propertyIsEnumerable.call(t,i)})):e}var Zs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Zv?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames;function Qv(t){return t===null?null:typeof t=="object"?""+t:t}function Ai(t,e){return Bu.hasOwnProperty.call(t,e)}var cE=Object.getOwnPropertyDescriptors||function(e){var n={};return Zs(e).forEach(function(i){n[i]=fu(e,i)}),n};function Gp(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,hE(i.key),i)}}function ph(t,e,n){return e&&Gp(t.prototype,e),n&&Gp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qs(){return Qs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qs.apply(this,arguments)}function Jv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,nd(t,e)}function nd(t,e){return nd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},nd(t,e)}function wc(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fE(t,e){if(t){if(typeof t=="string")return Wp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wp(t,e)}}function Wp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ps(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=fE(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dE(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hE(t){var e=dE(t,"string");return typeof e=="symbol"?e:String(e)}var Jn=Symbol("mobx-stored-annotations");function ii(t){function e(n,i){Ea(n,i,t)}return Object.assign(e,t)}function Ea(t,e,n){Ai(t,Jn)||xa(t,Jn,Qs({},t[Jn])),EE(n)||(t[Jn][e]=n)}function pE(t){return Ai(t,Jn)||xa(t,Jn,Qs({},t[Jn])),t[Jn]}var we=Symbol("mobx administration"),Ma=function(){function t(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=We.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var e=t.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(i){return i()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(i){return i()})},e.reportObserved=function(){return y0(this)},e.reportChanged=function(){Qt(),x0(this),te.stateVersion=te.stateVersion<Number.MAX_SAFE_INTEGER?te.stateVersion+1:Number.MIN_SAFE_INTEGER,Jt()},e.toString=function(){return this.name_},t}(),mh=$r("Atom",Ma);function _h(t,e,n){e===void 0&&(e=Cs),n===void 0&&(n=Cs);var i=new Ma(t);return e!==Cs&&SM(i,e),n!==Cs&&b0(i,n),i}function mE(t,e){return t===e}function _E(t,e){return Sh(t,e)}function gE(t,e){return Sh(t,e,1)}function vE(t,e){return Object.is?Object.is(t,e):t===e?t!==0||1/t===1/e:t!==t&&e!==e}var du={identity:mE,structural:_E,default:vE,shallow:gE};function Js(t,e,n){return U0(t)?t:Array.isArray(t)?Mt.array(t,{name:n}):Di(t)?Mt.object(t,void 0,{name:n}):uo(t)?Mt.map(t,{name:n}):Sa(t)?Mt.set(t,{name:n}):typeof t=="function"&&!vh(t)&&!_u(t)?Yv(t)?ca(t):ua(n,t):t}function yE(t,e,n){if(t==null||fa(t)||Wu(t)||Yr(t)||fo(t))return t;if(Array.isArray(t))return Mt.array(t,{name:n,deep:!1});if(Di(t))return Mt.object(t,void 0,{name:n,deep:!1});if(uo(t))return Mt.map(t,{name:n,deep:!1});if(Sa(t))return Mt.set(t,{name:n,deep:!1})}function ku(t){return t}function xE(t,e){return Sh(t,e)?e:t}var SE="override";function EE(t){return t.annotationType_===SE}function Ta(t,e){return{annotationType_:t,options_:e,make_:ME,extend_:TE}}function ME(t,e,n,i){var r;if((r=this.options_)!=null&&r.bound)return this.extend_(t,e,n,!1)===null?0:1;if(i===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if(vh(n.value))return 1;var s=e0(t,this,e,n,!1);return ni(i,e,s),2}function TE(t,e,n,i){var r=e0(t,this,e,n);return t.defineProperty_(e,r,i)}function wE(t,e,n,i){e.annotationType_,i.value}function e0(t,e,n,i,r){var s,o,a,l,u,f,h;r===void 0&&(r=te.safeDescriptors),wE(t,e,n,i);var d=i.value;if((s=e.options_)!=null&&s.bound){var m;d=d.bind((m=t.proxy_)!=null?m:t.target_)}return{value:eo((o=(a=e.options_)==null?void 0:a.name)!=null?o:n.toString(),d,(l=(u=e.options_)==null?void 0:u.autoAction)!=null?l:!1,(f=e.options_)!=null&&f.bound?(h=t.proxy_)!=null?h:t.target_:void 0),configurable:r?t.isPlainObject_:!0,enumerable:!1,writable:!r}}function t0(t,e){return{annotationType_:t,options_:e,make_:AE,extend_:bE}}function AE(t,e,n,i){var r;if(i===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if((r=this.options_)!=null&&r.bound&&(!Ai(t.target_,e)||!_u(t.target_[e]))&&this.extend_(t,e,n,!1)===null)return 0;if(_u(n.value))return 1;var s=n0(t,this,e,n,!1,!1);return ni(i,e,s),2}function bE(t,e,n,i){var r,s=n0(t,this,e,n,(r=this.options_)==null?void 0:r.bound);return t.defineProperty_(e,s,i)}function RE(t,e,n,i){e.annotationType_,i.value}function n0(t,e,n,i,r,s){s===void 0&&(s=te.safeDescriptors),RE(t,e,n,i);var o=i.value;if(_u(o)||(o=ca(o)),r){var a;o=o.bind((a=t.proxy_)!=null?a:t.target_),o.isMobXFlow=!0}return{value:o,configurable:s?t.isPlainObject_:!0,enumerable:!1,writable:!s}}function gh(t,e){return{annotationType_:t,options_:e,make_:CE,extend_:PE}}function CE(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function PE(t,e,n,i){return LE(t,this,e,n),t.defineComputedProperty_(e,Qs({},this.options_,{get:n.get,set:n.set}),i)}function LE(t,e,n,i){e.annotationType_,i.get}function Vu(t,e){return{annotationType_:t,options_:e,make_:DE,extend_:UE}}function DE(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function UE(t,e,n,i){var r,s;return OE(t,this),t.defineObservableProperty_(e,n.value,(r=(s=this.options_)==null?void 0:s.enhancer)!=null?r:Js,i)}function OE(t,e,n,i){e.annotationType_}var NE="true",IE=i0();function i0(t){return{annotationType_:NE,options_:t,make_:FE,extend_:BE}}function FE(t,e,n,i){var r,s;if(n.get)return Hu.make_(t,e,n,i);if(n.set){var o=eo(e.toString(),n.set);return i===t.target_?t.defineProperty_(e,{configurable:te.safeDescriptors?t.isPlainObject_:!0,set:o})===null?0:2:(ni(i,e,{configurable:!0,set:o}),2)}if(i!==t.target_&&typeof n.value=="function"){var a;if(Yv(n.value)){var l,u=(l=this.options_)!=null&&l.autoBind?ca.bound:ca;return u.make_(t,e,n,i)}var f=(a=this.options_)!=null&&a.autoBind?ua.bound:ua;return f.make_(t,e,n,i)}var h=((r=this.options_)==null?void 0:r.deep)===!1?Mt.ref:Mt;if(typeof n.value=="function"&&(s=this.options_)!=null&&s.autoBind){var d;n.value=n.value.bind((d=t.proxy_)!=null?d:t.target_)}return h.make_(t,e,n,i)}function BE(t,e,n,i){var r,s;if(n.get)return Hu.extend_(t,e,n,i);if(n.set)return t.defineProperty_(e,{configurable:te.safeDescriptors?t.isPlainObject_:!0,set:eo(e.toString(),n.set)},i);if(typeof n.value=="function"&&(r=this.options_)!=null&&r.autoBind){var o;n.value=n.value.bind((o=t.proxy_)!=null?o:t.target_)}var a=((s=this.options_)==null?void 0:s.deep)===!1?Mt.ref:Mt;return a.extend_(t,e,n,i)}var zE="observable",kE="observable.ref",VE="observable.shallow",HE="observable.struct",r0={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(r0);function Qa(t){return t||r0}var s0=Vu(zE),GE=Vu(kE,{enhancer:ku}),WE=Vu(VE,{enhancer:yE}),XE=Vu(HE,{enhancer:xE}),o0=ii(s0);function Ja(t){return t.deep===!0?Js:t.deep===!1?ku:qE(t.defaultDecorator)}function jE(t){var e;return t?(e=t.defaultDecorator)!=null?e:i0(t):void 0}function qE(t){var e,n;return t&&(e=(n=t.options_)==null?void 0:n.enhancer)!=null?e:Js}function a0(t,e,n){if(Gr(e)){Ea(t,e,s0);return}return U0(t)?t:Di(t)?Mt.object(t,e,n):Array.isArray(t)?Mt.array(t,e):uo(t)?Mt.map(t,e):Sa(t)?Mt.set(t,e):typeof t=="object"&&t!==null?t:Mt.box(t,e)}Xv(a0,o0);var $E={box:function(e,n){var i=Qa(n);return new zs(e,Ja(i),i.name,!0,i.equals)},array:function(e,n){var i=Qa(n);return(te.useProxies===!1||i.proxy===!1?XM:IM)(e,Ja(i),i.name)},map:function(e,n){var i=Qa(n);return new B0(e,Ja(i),i.name)},set:function(e,n){var i=Qa(n);return new V0(e,Ja(i),i.name)},object:function(e,n,i){return P0(te.useProxies===!1||(i==null?void 0:i.proxy)===!1?Ca({},i):DM({},i),e,n)},ref:ii(GE),shallow:ii(WE),deep:o0,struct:ii(XE)},Mt=Xv(a0,$E),l0="computed",YE="computed.struct",u0=gh(l0),KE=gh(YE,{equals:du.structural}),Hu=function(e,n){if(Gr(n))return Ea(e,n,u0);if(Di(e))return ii(gh(l0,e));var i=Di(n)?n:{};return i.get=e,i.name||(i.name=e.name||""),new la(i)};Object.assign(Hu,u0);Hu.struct=ii(KE);var Xp,jp,hu=0,ZE=1,QE=(Xp=(jp=fu(function(){},"name"))==null?void 0:jp.configurable)!=null?Xp:!1,qp={value:"action",configurable:!0,writable:!1,enumerable:!1};function eo(t,e,n,i){n===void 0&&(n=!1);function r(){return JE(t,n,e,i||this,arguments)}return r.isMobxAction=!0,QE&&(qp.value=t,ni(r,"name",qp)),r}function JE(t,e,n,i,r){var s=eM(t,e);try{return n.apply(i,r)}catch(o){throw s.error_=o,o}finally{tM(s)}}function eM(t,e,n,i){var r=!1,s=0,o=te.trackingDerivation,a=!e||!o;Qt();var l=te.allowStateChanges;a&&(co(),l=wa(!0));var u=ks(!0),f={runAsAction_:a,prevDerivation_:o,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:r,startTime_:s,actionId_:ZE++,parentActionId_:hu};return hu=f.actionId_,f}function tM(t){hu!==t.actionId_&&He(30),hu=t.parentActionId_,t.error_!==void 0&&(te.suppressReactionErrors=!0),Aa(t.prevAllowStateChanges_),rr(t.prevAllowStateReads_),Jt(),t.runAsAction_&&ir(t.prevDerivation_),te.suppressReactionErrors=!1}function c0(t,e){var n=wa(t);try{return e()}finally{Aa(n)}}function wa(t){var e=te.allowStateChanges;return te.allowStateChanges=t,e}function Aa(t){te.allowStateChanges=t}var f0;f0=Symbol.toPrimitive;var zs=function(t){Jv(e,t);function e(i,r,s,o,a){var l;return s===void 0&&(s="ObservableValue"),a===void 0&&(a=du.default),l=t.call(this,s)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=r,l.name_=s,l.equals=a,l.value_=r(i,void 0,s),l}var n=e.prototype;return n.dehanceValue=function(r){return this.dehancer!==void 0?this.dehancer(r):r},n.set=function(r){this.value_,r=this.prepareNewValue_(r),r!==te.UNCHANGED&&this.setNewValue_(r)},n.prepareNewValue_=function(r){if(En(this)){var s=Mn(this,{object:this,type:ri,newValue:r});if(!s)return te.UNCHANGED;r=s.newValue}return r=this.enhancer(r,this.value_,this.name_),this.equals(this.value_,r)?te.UNCHANGED:r},n.setNewValue_=function(r){var s=this.value_;this.value_=r,this.reportChanged(),Gn(this)&&Wn(this,{type:ri,object:this,newValue:r,oldValue:s})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(r){return ba(this,r)},n.observe_=function(r,s){return s&&r({observableKind:"value",debugObjectName:this.name_,object:this,type:ri,newValue:this.value_,oldValue:void 0}),Ra(this,r)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return Qv(this.get())},n[f0]=function(){return this.valueOf()},e}(Ma),d0;d0=Symbol.toPrimitive;var la=function(){function t(n){this.dependenciesState_=We.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=We.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new pu(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Dr.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||He(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=eo("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?du.structural:du.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var e=t.prototype;return e.onBecomeStale_=function(){oM(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(i){return i()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(i){return i()})},e.get=function(){if(this.isComputing_&&He(32,this.name_,this.derivation),te.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)id(this)&&(this.warnAboutUntrackedRead_(),Qt(),this.value_=this.computeValue_(!1),Jt());else if(y0(this),id(this)){var i=te.trackingContext;this.keepAlive_&&!i&&(te.trackingContext=this),this.trackAndCompute()&&sM(this),te.trackingContext=i}var r=this.value_;if(Nl(r))throw r.cause;return r},e.set=function(i){if(this.setter_){this.isRunningSetter_&&He(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,i)}finally{this.isRunningSetter_=!1}}else He(34,this.name_)},e.trackAndCompute=function(){var i=this.value_,r=this.dependenciesState_===We.NOT_TRACKING_,s=this.computeValue_(!0),o=r||Nl(i)||Nl(s)||!this.equals_(i,s);return o&&(this.value_=s),o},e.computeValue_=function(i){this.isComputing_=!0;var r=wa(!1),s;if(i)s=h0(this,this.derivation,this.scope_);else if(te.disableErrorBoundaries===!0)s=this.derivation.call(this.scope_);else try{s=this.derivation.call(this.scope_)}catch(o){s=new pu(o)}return Aa(r),this.isComputing_=!1,s},e.suspend_=function(){this.keepAlive_||(rd(this),this.value_=void 0)},e.observe_=function(i,r){var s=this,o=!0,a=void 0;return _M(function(){var l=s.get();if(!o||r){var u=co();i({observableKind:"computed",debugObjectName:s.name_,type:ri,object:s,newValue:l,oldValue:a}),ir(u)}o=!1,a=l})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return Qv(this.get())},e[d0]=function(){return this.valueOf()},t}(),Gu=$r("ComputedValue",la),We;(function(t){t[t.NOT_TRACKING_=-1]="NOT_TRACKING_",t[t.UP_TO_DATE_=0]="UP_TO_DATE_",t[t.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",t[t.STALE_=2]="STALE_"})(We||(We={}));var Dr;(function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK"})(Dr||(Dr={}));var pu=function(e){this.cause=void 0,this.cause=e};function Nl(t){return t instanceof pu}function id(t){switch(t.dependenciesState_){case We.UP_TO_DATE_:return!1;case We.NOT_TRACKING_:case We.STALE_:return!0;case We.POSSIBLY_STALE_:{for(var e=ks(!0),n=co(),i=t.observing_,r=i.length,s=0;s<r;s++){var o=i[s];if(Gu(o)){if(te.disableErrorBoundaries)o.get();else try{o.get()}catch{return ir(n),rr(e),!0}if(t.dependenciesState_===We.STALE_)return ir(n),rr(e),!0}}return m0(t),ir(n),rr(e),!1}}}function h0(t,e,n){var i=ks(!0);m0(t),t.newObserving_=new Array(t.observing_.length+100),t.unboundDepsCount_=0,t.runId_=++te.runId;var r=te.trackingDerivation;te.trackingDerivation=t,te.inBatch++;var s;if(te.disableErrorBoundaries===!0)s=e.call(n);else try{s=e.call(n)}catch(o){s=new pu(o)}return te.inBatch--,te.trackingDerivation=r,nM(t),rr(i),s}function nM(t){for(var e=t.observing_,n=t.observing_=t.newObserving_,i=We.UP_TO_DATE_,r=0,s=t.unboundDepsCount_,o=0;o<s;o++){var a=n[o];a.diffValue_===0&&(a.diffValue_=1,r!==o&&(n[r]=a),r++),a.dependenciesState_>i&&(i=a.dependenciesState_)}for(n.length=r,t.newObserving_=null,s=e.length;s--;){var l=e[s];l.diffValue_===0&&g0(l,t),l.diffValue_=0}for(;r--;){var u=n[r];u.diffValue_===1&&(u.diffValue_=0,rM(u,t))}i!==We.UP_TO_DATE_&&(t.dependenciesState_=i,t.onBecomeStale_())}function rd(t){var e=t.observing_;t.observing_=[];for(var n=e.length;n--;)g0(e[n],t);t.dependenciesState_=We.NOT_TRACKING_}function p0(t){var e=co();try{return t()}finally{ir(e)}}function co(){var t=te.trackingDerivation;return te.trackingDerivation=null,t}function ir(t){te.trackingDerivation=t}function ks(t){var e=te.allowStateReads;return te.allowStateReads=t,e}function rr(t){te.allowStateReads=t}function m0(t){if(t.dependenciesState_!==We.UP_TO_DATE_){t.dependenciesState_=We.UP_TO_DATE_;for(var e=t.observing_,n=e.length;n--;)e[n].lowestObserverState_=We.UP_TO_DATE_}}var Il=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},Fl=!0,_0=!1,te=function(){var t=hh();return t.__mobxInstanceCount>0&&!t.__mobxGlobals&&(Fl=!1),t.__mobxGlobals&&t.__mobxGlobals.version!==new Il().version&&(Fl=!1),Fl?t.__mobxGlobals?(t.__mobxInstanceCount+=1,t.__mobxGlobals.UNCHANGED||(t.__mobxGlobals.UNCHANGED={}),t.__mobxGlobals):(t.__mobxInstanceCount=1,t.__mobxGlobals=new Il):(setTimeout(function(){_0||He(35)},1),new Il)}();function iM(){if((te.pendingReactions.length||te.inBatch||te.isRunningReactions)&&He(36),_0=!0,Fl){var t=hh();--t.__mobxInstanceCount===0&&(t.__mobxGlobals=void 0),te=new Il}}function rM(t,e){t.observers_.add(e),t.lowestObserverState_>e.dependenciesState_&&(t.lowestObserverState_=e.dependenciesState_)}function g0(t,e){t.observers_.delete(e),t.observers_.size===0&&v0(t)}function v0(t){t.isPendingUnobservation_===!1&&(t.isPendingUnobservation_=!0,te.pendingUnobservations.push(t))}function Qt(){te.inBatch++}function Jt(){if(--te.inBatch===0){S0();for(var t=te.pendingUnobservations,e=0;e<t.length;e++){var n=t[e];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof la&&n.suspend_())}te.pendingUnobservations=[]}}function y0(t){var e=te.trackingDerivation;return e!==null?(e.runId_!==t.lastAccessedBy_&&(t.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=t,!t.isBeingObserved_&&te.trackingContext&&(t.isBeingObserved_=!0,t.onBO())),t.isBeingObserved_):(t.observers_.size===0&&te.inBatch>0&&v0(t),!1)}function x0(t){t.lowestObserverState_!==We.STALE_&&(t.lowestObserverState_=We.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===We.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=We.STALE_}))}function sM(t){t.lowestObserverState_!==We.STALE_&&(t.lowestObserverState_=We.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===We.POSSIBLY_STALE_?e.dependenciesState_=We.STALE_:e.dependenciesState_===We.UP_TO_DATE_&&(t.lowestObserverState_=We.UP_TO_DATE_)}))}function oM(t){t.lowestObserverState_===We.UP_TO_DATE_&&(t.lowestObserverState_=We.POSSIBLY_STALE_,t.observers_.forEach(function(e){e.dependenciesState_===We.UP_TO_DATE_&&(e.dependenciesState_=We.POSSIBLY_STALE_,e.onBecomeStale_())}))}var to=function(){function t(n,i,r,s){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=We.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Dr.NONE,this.name_=n,this.onInvalidate_=i,this.errorHandler_=r,this.requiresObservable_=s}var e=t.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,te.pendingReactions.push(this),S0())},e.isScheduled=function(){return this.isScheduled_},e.runReaction_=function(){if(!this.isDisposed_){Qt(),this.isScheduled_=!1;var i=te.trackingContext;if(te.trackingContext=this,id(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(r){this.reportExceptionInDerivation_(r)}}te.trackingContext=i,Jt()}},e.track=function(i){if(!this.isDisposed_){Qt(),this.isRunning_=!0;var r=te.trackingContext;te.trackingContext=this;var s=h0(this,i,void 0);te.trackingContext=r,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&rd(this),Nl(s)&&this.reportExceptionInDerivation_(s.cause),Jt()}},e.reportExceptionInDerivation_=function(i){var r=this;if(this.errorHandler_){this.errorHandler_(i,this);return}if(te.disableErrorBoundaries)throw i;var s="[mobx] uncaught error in '"+this+"'";te.suppressReactionErrors||console.error(s,i),te.globalReactionErrorHandlers.forEach(function(o){return o(i,r)})},e.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(Qt(),rd(this),Jt()))},e.getDisposer_=function(){var i=this.dispose.bind(this);return i[we]=this,i},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(i){i===void 0&&(i=!1),CM(this,i)},t}(),aM=100,sd=function(e){return e()};function S0(){te.inBatch>0||te.isRunningReactions||sd(lM)}function lM(){te.isRunningReactions=!0;for(var t=te.pendingReactions,e=0;t.length>0;){++e===aM&&(console.error("[mobx] cycle in reaction: "+t[0]),t.splice(0));for(var n=t.splice(0),i=0,r=n.length;i<r;i++)n[i].runReaction_()}te.isRunningReactions=!1}var mu=$r("Reaction",to);function uM(t){var e=sd;sd=function(i){return t(function(){return e(i)})}}function Go(){return!1}function cM(t){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var E0="action",fM="action.bound",M0="autoAction",dM="autoAction.bound",hM="<unnamed action>",T0=Ta(E0),pM=Ta(fM,{bound:!0}),w0=Ta(M0,{autoAction:!0}),mM=Ta(dM,{autoAction:!0,bound:!0});function A0(t){var e=function(i,r){if(jn(i))return eo(i.name||hM,i,t);if(jn(r))return eo(i,r,t);if(Gr(r))return Ea(i,r,t?w0:T0);if(Gr(i))return ii(Ta(t?M0:E0,{name:i,autoAction:t}))};return e}var Ls=A0(!1);Object.assign(Ls,T0);var ua=A0(!0);Object.assign(ua,w0);Ls.bound=ii(pM);ua.bound=ii(mM);function vh(t){return jn(t)&&t.isMobxAction===!0}function _M(t,e){var n,i;e===void 0&&(e=jv);var r=(n=(i=e)==null?void 0:i.name)!=null?n:"Autorun",s=!e.scheduler&&!e.delay,o;if(s)o=new to(r,function(){this.track(u)},e.onError,e.requiresObservable);else{var a=vM(e),l=!1;o=new to(r,function(){l||(l=!0,a(function(){l=!1,o.isDisposed_||o.track(u)}))},e.onError,e.requiresObservable)}function u(){t(o)}return o.schedule_(),o.getDisposer_()}var gM=function(e){return e()};function vM(t){return t.scheduler?t.scheduler:t.delay?function(e){return setTimeout(e,t.delay)}:gM}var yM="onBO",xM="onBUO";function SM(t,e,n){return R0(yM,t,e,n)}function b0(t,e,n){return R0(xM,t,e,n)}function R0(t,e,n,i){var r=typeof i=="function"?ur(e,n):ur(e),s=jn(i)?i:n,o=t+"L";return r[o]?r[o].add(s):r[o]=new Set([s]),function(){var a=r[o];a&&(a.delete(s),a.size===0&&delete r[o])}}var EM="never",el="always",MM="observed";function C0(t){t.isolateGlobalState===!0&&iM();var e=t.useProxies,n=t.enforceActions;if(e!==void 0&&(te.useProxies=e===el?!0:e===EM?!1:typeof Proxy<"u"),e==="ifavailable"&&(te.verifyProxies=!0),n!==void 0){var i=n===el?el:n===MM;te.enforceActions=i,te.allowStateChanges=!(i===!0||i===el)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(r){r in t&&(te[r]=!!t[r])}),te.allowStateReads=!te.observableRequiresReaction,t.reactionScheduler&&uM(t.reactionScheduler)}function P0(t,e,n,i){var r=cE(e),s=Ca(t,i)[we];Qt();try{Zs(r).forEach(function(o){s.extend_(o,r[o],n&&o in n?n[o]:!0)})}finally{Jt()}return t}function TM(t,e){return L0(ur(t,e))}function L0(t){var e={name:t.name_};return t.observing_&&t.observing_.length>0&&(e.dependencies=wM(t.observing_).map(L0)),e}function wM(t){return Array.from(new Set(t))}var AM=0;function D0(){this.message="FLOW_CANCELLED"}D0.prototype=Object.create(Error.prototype);var $p=t0("flow"),bM=t0("flow.bound",{bound:!0}),ca=Object.assign(function(e,n){if(Gr(n))return Ea(e,n,$p);var i=e,r=i.name||"<unnamed flow>",s=function(){var a=this,l=arguments,u=++AM,f=Ls(r+" - runid: "+u+" - init",i).apply(a,l),h,d=void 0,m=new Promise(function(y,v){var p=0;h=v;function c(x){d=void 0;var M;try{M=Ls(r+" - runid: "+u+" - yield "+p++,f.next).call(f,x)}catch(R){return v(R)}_(M)}function g(x){d=void 0;var M;try{M=Ls(r+" - runid: "+u+" - yield "+p++,f.throw).call(f,x)}catch(R){return v(R)}_(M)}function _(x){if(jn(x==null?void 0:x.then)){x.then(_,v);return}return x.done?y(x.value):(d=Promise.resolve(x.value),d.then(c,g))}c(void 0)});return m.cancel=Ls(r+" - runid: "+u+" - cancel",function(){try{d&&Yp(d);var y=f.return(void 0),v=Promise.resolve(y.value);v.then(Cs,Cs),Yp(v),h(new D0)}catch(p){h(p)}}),m};return s.isMobXFlow=!0,s},$p);ca.bound=ii(bM);function Yp(t){jn(t.cancel)&&t.cancel()}function _u(t){return(t==null?void 0:t.isMobXFlow)===!0}function RM(t,e){return t?e!==void 0?fa(t)?t[we].values_.has(e):!1:fa(t)||!!t[we]||mh(t)||mu(t)||Gu(t):!1}function U0(t){return RM(t)}function CM(){He("trace() is not available in production builds");for(var t=!1,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];typeof n[n.length-1]=="boolean"&&(t=n.pop());var r=PM(n);if(!r)return He("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");r.isTracing_===Dr.NONE&&console.log("[mobx.trace] '"+r.name_+"' tracing enabled"),r.isTracing_=t?Dr.BREAK:Dr.LOG}function PM(t){switch(t.length){case 0:return te.trackingDerivation;case 1:return ur(t[0]);case 2:return ur(t[0],t[1])}}function vi(t,e){e===void 0&&(e=void 0),Qt();try{return t.apply(e)}finally{Jt()}}function Qr(t){return t[we]}var LM={has:function(e,n){return Qr(e).has_(n)},get:function(e,n){return Qr(e).get_(n)},set:function(e,n,i){var r;return Gr(n)?(r=Qr(e).set_(n,i,!0))!=null?r:!0:!1},deleteProperty:function(e,n){var i;return Gr(n)?(i=Qr(e).delete_(n,!0))!=null?i:!0:!1},defineProperty:function(e,n,i){var r;return(r=Qr(e).defineProperty_(n,i))!=null?r:!0},ownKeys:function(e){return Qr(e).ownKeys_()},preventExtensions:function(e){He(13)}};function DM(t,e){var n,i;return qv(),t=Ca(t,e),(i=(n=t[we]).proxy_)!=null?i:n.proxy_=new Proxy(t,LM)}function En(t){return t.interceptors_!==void 0&&t.interceptors_.length>0}function ba(t,e){var n=t.interceptors_||(t.interceptors_=[]);return n.push(e),$v(function(){var i=n.indexOf(e);i!==-1&&n.splice(i,1)})}function Mn(t,e){var n=co();try{for(var i=[].concat(t.interceptors_||[]),r=0,s=i.length;r<s&&(e=i[r](e),e&&!e.type&&He(14),!!e);r++);return e}finally{ir(n)}}function Gn(t){return t.changeListeners_!==void 0&&t.changeListeners_.length>0}function Ra(t,e){var n=t.changeListeners_||(t.changeListeners_=[]);return n.push(e),$v(function(){var i=n.indexOf(e);i!==-1&&n.splice(i,1)})}function Wn(t,e){var n=co(),i=t.changeListeners_;if(i){i=i.slice();for(var r=0,s=i.length;r<s;r++)i[r](e);ir(n)}}function UM(t,e,n){var i=Ca(t,n)[we];Qt();try{var r;(r=e)!=null||(e=pE(t)),Zs(e).forEach(function(s){return i.make_(s,e[s])})}finally{Jt()}return t}var Ac=Symbol("mobx-keys");function O0(t,e,n){if(Di(t))return P0(t,t,e,n);var i=Ca(t,n)[we];if(!t[Ac]){var r=Object.getPrototypeOf(t),s=new Set([].concat(Zs(t),Zs(r)));s.delete("constructor"),s.delete(we),xa(r,Ac,s)}Qt();try{t[Ac].forEach(function(o){return i.make_(o,e&&o in e?e[o]:!0)})}finally{Jt()}return t}var Kp="splice",ri="update",OM=1e4,NM={get:function(e,n){var i=e[we];return n===we?i:n==="length"?i.getArrayLength_():typeof n=="string"&&!isNaN(n)?i.get_(parseInt(n)):Ai(gu,n)?gu[n]:e[n]},set:function(e,n,i){var r=e[we];return n==="length"&&r.setArrayLength_(i),typeof n=="symbol"||isNaN(n)?e[n]=i:r.set_(parseInt(n),i),!0},preventExtensions:function(){He(15)}},yh=function(){function t(n,i,r,s){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=r,this.legacyMode_=s,this.atom_=new Ma(n),this.enhancer_=function(o,a){return i(o,a,"ObservableArray[..]")}}var e=t.prototype;return e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.dehanceValues_=function(i){return this.dehancer!==void 0&&i.length>0?i.map(this.dehancer):i},e.intercept_=function(i){return ba(this,i)},e.observe_=function(i,r){return r===void 0&&(r=!1),r&&i({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),Ra(this,i)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(i){(typeof i!="number"||isNaN(i)||i<0)&&He("Out of range: "+i);var r=this.values_.length;if(i!==r)if(i>r){for(var s=new Array(i-r),o=0;o<i-r;o++)s[o]=void 0;this.spliceWithArray_(r,0,s)}else this.spliceWithArray_(i,r-i)},e.updateArrayLength_=function(i,r){i!==this.lastKnownLength_&&He(16),this.lastKnownLength_+=r,this.legacyMode_&&r>0&&X0(i+r+1)},e.spliceWithArray_=function(i,r,s){var o=this;this.atom_;var a=this.values_.length;if(i===void 0?i=0:i>a?i=a:i<0&&(i=Math.max(0,a+i)),arguments.length===1?r=a-i:r==null?r=0:r=Math.max(0,Math.min(r,a-i)),s===void 0&&(s=td),En(this)){var l=Mn(this,{object:this.proxy_,type:Kp,index:i,removedCount:r,added:s});if(!l)return td;r=l.removedCount,s=l.added}if(s=s.length===0?s:s.map(function(h){return o.enhancer_(h,void 0)}),this.legacyMode_){var u=s.length-r;this.updateArrayLength_(a,u)}var f=this.spliceItemsIntoValues_(i,r,s);return(r!==0||s.length!==0)&&this.notifyArraySplice_(i,s,f),this.dehanceValues_(f)},e.spliceItemsIntoValues_=function(i,r,s){if(s.length<OM){var o;return(o=this.values_).splice.apply(o,[i,r].concat(s))}else{var a=this.values_.slice(i,i+r),l=this.values_.slice(i+r);this.values_.length+=s.length-r;for(var u=0;u<s.length;u++)this.values_[i+u]=s[u];for(var f=0;f<l.length;f++)this.values_[i+s.length+f]=l[f];return a}},e.notifyArrayChildUpdate_=function(i,r,s){var o=!this.owned_&&Go(),a=Gn(this),l=a||o?{observableKind:"array",object:this.proxy_,type:ri,debugObjectName:this.atom_.name_,index:i,newValue:r,oldValue:s}:null;this.atom_.reportChanged(),a&&Wn(this,l)},e.notifyArraySplice_=function(i,r,s){var o=!this.owned_&&Go(),a=Gn(this),l=a||o?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Kp,index:i,removed:s,added:r,removedCount:s.length,addedCount:r.length}:null;this.atom_.reportChanged(),a&&Wn(this,l)},e.get_=function(i){if(this.legacyMode_&&i>=this.values_.length){console.warn("[mobx] Out of bounds read: "+i);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[i])},e.set_=function(i,r){var s=this.values_;if(this.legacyMode_&&i>s.length&&He(17,i,s.length),i<s.length){this.atom_;var o=s[i];if(En(this)){var a=Mn(this,{type:ri,object:this.proxy_,index:i,newValue:r});if(!a)return;r=a.newValue}r=this.enhancer_(r,o);var l=r!==o;l&&(s[i]=r,this.notifyArrayChildUpdate_(i,r,o))}else{for(var u=new Array(i+1-s.length),f=0;f<u.length-1;f++)u[f]=void 0;u[u.length-1]=r,this.spliceWithArray_(s.length,0,u)}},t}();function IM(t,e,n,i){n===void 0&&(n="ObservableArray"),i===void 0&&(i=!1),qv();var r=new yh(n,e,i,!1);Kv(r.values_,we,r);var s=new Proxy(r.values_,NM);if(r.proxy_=s,t&&t.length){var o=wa(!0);r.spliceWithArray_(0,0,t),Aa(o)}return s}var gu={clear:function(){return this.splice(0)},replace:function(e){var n=this[we];return n.spliceWithArray_(0,n.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];var o=this[we];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray_(e);case 2:return o.spliceWithArray_(e,n)}return o.spliceWithArray_(e,n,r)},spliceWithArray:function(e,n,i){return this[we].spliceWithArray_(e,n,i)},push:function(){for(var e=this[we],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,i),e.values_.length},pop:function(){return this.splice(Math.max(this[we].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[we],n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.spliceWithArray_(0,0,i),e.values_.length},reverse:function(){return te.trackingDerivation&&He(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){te.trackingDerivation&&He(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var n=this[we],i=n.dehanceValues_(n.values_).indexOf(e);return i>-1?(this.splice(i,1),!0):!1}};vt("concat",Oi);vt("flat",Oi);vt("includes",Oi);vt("indexOf",Oi);vt("join",Oi);vt("lastIndexOf",Oi);vt("slice",Oi);vt("toString",Oi);vt("toLocaleString",Oi);vt("every",mr);vt("filter",mr);vt("find",mr);vt("findIndex",mr);vt("flatMap",mr);vt("forEach",mr);vt("map",mr);vt("some",mr);vt("reduce",N0);vt("reduceRight",N0);function vt(t,e){typeof Array.prototype[t]=="function"&&(gu[t]=e(t))}function Oi(t){return function(){var e=this[we];e.atom_.reportObserved();var n=e.dehanceValues_(e.values_);return n[t].apply(n,arguments)}}function mr(t){return function(e,n){var i=this,r=this[we];r.atom_.reportObserved();var s=r.dehanceValues_(r.values_);return s[t](function(o,a){return e.call(n,o,a,i)})}}function N0(t){return function(){var e=this,n=this[we];n.atom_.reportObserved();var i=n.dehanceValues_(n.values_),r=arguments[0];return arguments[0]=function(s,o,a){return r(s,o,a,e)},i[t].apply(i,arguments)}}var FM=$r("ObservableArrayAdministration",yh);function Wu(t){return zu(t)&&FM(t[we])}var I0,F0,BM={},ji="add",vu="delete";I0=Symbol.iterator;F0=Symbol.toStringTag;var B0=function(){function t(n,i,r){var s=this;i===void 0&&(i=Js),r===void 0&&(r="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[we]=BM,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=i,this.name_=r,jn(Map)||He(18),this.keysAtom_=_h("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,c0(!0,function(){s.merge(n)})}var e=t.prototype;return e.has_=function(i){return this.data_.has(i)},e.has=function(i){var r=this;if(!te.trackingDerivation)return this.has_(i);var s=this.hasMap_.get(i);if(!s){var o=s=new zs(this.has_(i),ku,"ObservableMap.key?",!1);this.hasMap_.set(i,o),b0(o,function(){return r.hasMap_.delete(i)})}return s.get()},e.set=function(i,r){var s=this.has_(i);if(En(this)){var o=Mn(this,{type:s?ri:ji,object:this,newValue:r,name:i});if(!o)return this;r=o.newValue}return s?this.updateValue_(i,r):this.addValue_(i,r),this},e.delete=function(i){var r=this;if(this.keysAtom_,En(this)){var s=Mn(this,{type:vu,object:this,name:i});if(!s)return!1}if(this.has_(i)){var o=Go(),a=Gn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:vu,object:this,oldValue:this.data_.get(i).value_,name:i}:null;return vi(function(){var u;r.keysAtom_.reportChanged(),(u=r.hasMap_.get(i))==null||u.setNewValue_(!1);var f=r.data_.get(i);f.setNewValue_(void 0),r.data_.delete(i)}),a&&Wn(this,l),!0}return!1},e.updateValue_=function(i,r){var s=this.data_.get(i);if(r=s.prepareNewValue_(r),r!==te.UNCHANGED){var o=Go(),a=Gn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:ri,object:this,oldValue:s.value_,name:i,newValue:r}:null;s.setNewValue_(r),a&&Wn(this,l)}},e.addValue_=function(i,r){var s=this;this.keysAtom_,vi(function(){var u,f=new zs(r,s.enhancer_,"ObservableMap.key",!1);s.data_.set(i,f),r=f.value_,(u=s.hasMap_.get(i))==null||u.setNewValue_(!0),s.keysAtom_.reportChanged()});var o=Go(),a=Gn(this),l=a||o?{observableKind:"map",debugObjectName:this.name_,type:ji,object:this,name:i,newValue:r}:null;a&&Wn(this,l)},e.get=function(i){return this.has(i)?this.dehanceValue_(this.data_.get(i).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var i=this,r=this.keys();return da({next:function(){var o=r.next(),a=o.done,l=o.value;return{done:a,value:a?void 0:i.get(l)}}})},e.entries=function(){var i=this,r=this.keys();return da({next:function(){var o=r.next(),a=o.done,l=o.value;return{done:a,value:a?void 0:[l,i.get(l)]}}})},e[I0]=function(){return this.entries()},e.forEach=function(i,r){for(var s=Ps(this),o;!(o=s()).done;){var a=o.value,l=a[0],u=a[1];i.call(r,u,l,this)}},e.merge=function(i){var r=this;return Yr(i)&&(i=new Map(i)),vi(function(){Di(i)?uE(i).forEach(function(s){return r.set(s,i[s])}):Array.isArray(i)?i.forEach(function(s){var o=s[0],a=s[1];return r.set(o,a)}):uo(i)?(i.constructor!==Map&&He(19,i),i.forEach(function(s,o){return r.set(o,s)})):i!=null&&He(20,i)}),this},e.clear=function(){var i=this;vi(function(){p0(function(){for(var r=Ps(i.keys()),s;!(s=r()).done;){var o=s.value;i.delete(o)}})})},e.replace=function(i){var r=this;return vi(function(){for(var s=zM(i),o=new Map,a=!1,l=Ps(r.data_.keys()),u;!(u=l()).done;){var f=u.value;if(!s.has(f)){var h=r.delete(f);if(h)a=!0;else{var d=r.data_.get(f);o.set(f,d)}}}for(var m=Ps(s.entries()),y;!(y=m()).done;){var v=y.value,p=v[0],c=v[1],g=r.data_.has(p);if(r.set(p,c),r.data_.has(p)){var _=r.data_.get(p);o.set(p,_),g||(a=!0)}}if(!a)if(r.data_.size!==o.size)r.keysAtom_.reportChanged();else for(var x=r.data_.keys(),M=o.keys(),R=x.next(),b=M.next();!R.done;){if(R.value!==b.value){r.keysAtom_.reportChanged();break}R=x.next(),b=M.next()}r.data_=o}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(i,r){return Ra(this,i)},e.intercept_=function(i){return ba(this,i)},ph(t,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:F0,get:function(){return"Map"}}]),t}(),Yr=$r("ObservableMap",B0);function zM(t){if(uo(t)||Yr(t))return t;if(Array.isArray(t))return new Map(t);if(Di(t)){var e=new Map;for(var n in t)e.set(n,t[n]);return e}else return He(21,t)}var z0,k0,kM={};z0=Symbol.iterator;k0=Symbol.toStringTag;var V0=function(){function t(n,i,r){i===void 0&&(i=Js),r===void 0&&(r="ObservableSet"),this.name_=void 0,this[we]=kM,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=r,jn(Set)||He(22),this.atom_=_h(this.name_),this.enhancer_=function(s,o){return i(s,o,r)},n&&this.replace(n)}var e=t.prototype;return e.dehanceValue_=function(i){return this.dehancer!==void 0?this.dehancer(i):i},e.clear=function(){var i=this;vi(function(){p0(function(){for(var r=Ps(i.data_.values()),s;!(s=r()).done;){var o=s.value;i.delete(o)}})})},e.forEach=function(i,r){for(var s=Ps(this),o;!(o=s()).done;){var a=o.value;i.call(r,a,a,this)}},e.add=function(i){var r=this;if(this.atom_,En(this)){var s=Mn(this,{type:ji,object:this,newValue:i});if(!s)return this}if(!this.has(i)){vi(function(){r.data_.add(r.enhancer_(i,void 0)),r.atom_.reportChanged()});var o=!1,a=Gn(this),l=a||o?{observableKind:"set",debugObjectName:this.name_,type:ji,object:this,newValue:i}:null;a&&Wn(this,l)}return this},e.delete=function(i){var r=this;if(En(this)){var s=Mn(this,{type:vu,object:this,oldValue:i});if(!s)return!1}if(this.has(i)){var o=!1,a=Gn(this),l=a||o?{observableKind:"set",debugObjectName:this.name_,type:vu,object:this,oldValue:i}:null;return vi(function(){r.atom_.reportChanged(),r.data_.delete(i)}),a&&Wn(this,l),!0}return!1},e.has=function(i){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(i))},e.entries=function(){var i=0,r=Array.from(this.keys()),s=Array.from(this.values());return da({next:function(){var a=i;return i+=1,a<s.length?{value:[r[a],s[a]],done:!1}:{done:!0}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var i=this,r=0,s=Array.from(this.data_.values());return da({next:function(){return r<s.length?{value:i.dehanceValue_(s[r++]),done:!1}:{done:!0}}})},e.replace=function(i){var r=this;return fo(i)&&(i=new Set(i)),vi(function(){Array.isArray(i)?(r.clear(),i.forEach(function(s){return r.add(s)})):Sa(i)?(r.clear(),i.forEach(function(s){return r.add(s)})):i!=null&&He("Cannot initialize set from "+i)}),this},e.observe_=function(i,r){return Ra(this,i)},e.intercept_=function(i){return ba(this,i)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[z0]=function(){return this.values()},ph(t,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:k0,get:function(){return"Set"}}]),t}(),fo=$r("ObservableSet",V0),Zp=Object.create(null),Qp="remove",H0=function(){function t(n,i,r,s){i===void 0&&(i=new Map),s===void 0&&(s=IE),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=i,this.name_=r,this.defaultAnnotation_=s,this.keysAtom_=new Ma("ObservableObject.keys"),this.isPlainObject_=Di(this.target_)}var e=t.prototype;return e.getObservablePropValue_=function(i){return this.values_.get(i).get()},e.setObservablePropValue_=function(i,r){var s=this.values_.get(i);if(s instanceof la)return s.set(r),!0;if(En(this)){var o=Mn(this,{type:ri,object:this.proxy_||this.target_,name:i,newValue:r});if(!o)return null;r=o.newValue}if(r=s.prepareNewValue_(r),r!==te.UNCHANGED){var a=Gn(this),l=!1,u=a||l?{type:ri,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:s.value_,name:i,newValue:r}:null;s.setNewValue_(r),a&&Wn(this,u)}return!0},e.get_=function(i){return te.trackingDerivation&&!Ai(this.target_,i)&&this.has_(i),this.target_[i]},e.set_=function(i,r,s){return s===void 0&&(s=!1),Ai(this.target_,i)?this.values_.has(i)?this.setObservablePropValue_(i,r):s?Reflect.set(this.target_,i,r):(this.target_[i]=r,!0):this.extend_(i,{value:r,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,s)},e.has_=function(i){if(!te.trackingDerivation)return i in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var r=this.pendingKeys_.get(i);return r||(r=new zs(i in this.target_,ku,"ObservableObject.key?",!1),this.pendingKeys_.set(i,r)),r.get()},e.make_=function(i,r){if(r===!0&&(r=this.defaultAnnotation_),r!==!1){if(!(i in this.target_)){var s;if((s=this.target_[Jn])!=null&&s[i])return;He(1,r.annotationType_,this.name_+"."+i.toString())}for(var o=this.target_;o&&o!==Bu;){var a=fu(o,i);if(a){var l=r.make_(this,i,a,o);if(l===0)return;if(l===1)break}o=Object.getPrototypeOf(o)}em(this,r,i)}},e.extend_=function(i,r,s,o){if(o===void 0&&(o=!1),s===!0&&(s=this.defaultAnnotation_),s===!1)return this.defineProperty_(i,r,o);var a=s.extend_(this,i,r,o);return a&&em(this,s,i),a},e.defineProperty_=function(i,r,s){s===void 0&&(s=!1);try{Qt();var o=this.delete_(i);if(!o)return o;if(En(this)){var a=Mn(this,{object:this.proxy_||this.target_,name:i,type:ji,newValue:r.value});if(!a)return null;var l=a.newValue;r.value!==l&&(r=Qs({},r,{value:l}))}if(s){if(!Reflect.defineProperty(this.target_,i,r))return!1}else ni(this.target_,i,r);this.notifyPropertyAddition_(i,r.value)}finally{Jt()}return!0},e.defineObservableProperty_=function(i,r,s,o){o===void 0&&(o=!1);try{Qt();var a=this.delete_(i);if(!a)return a;if(En(this)){var l=Mn(this,{object:this.proxy_||this.target_,name:i,type:ji,newValue:r});if(!l)return null;r=l.newValue}var u=Jp(i),f={configurable:te.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(o){if(!Reflect.defineProperty(this.target_,i,f))return!1}else ni(this.target_,i,f);var h=new zs(r,s,"ObservableObject.key",!1);this.values_.set(i,h),this.notifyPropertyAddition_(i,h.value_)}finally{Jt()}return!0},e.defineComputedProperty_=function(i,r,s){s===void 0&&(s=!1);try{Qt();var o=this.delete_(i);if(!o)return o;if(En(this)){var a=Mn(this,{object:this.proxy_||this.target_,name:i,type:ji,newValue:void 0});if(!a)return null}r.name||(r.name="ObservableObject.key"),r.context=this.proxy_||this.target_;var l=Jp(i),u={configurable:te.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(s){if(!Reflect.defineProperty(this.target_,i,u))return!1}else ni(this.target_,i,u);this.values_.set(i,new la(r)),this.notifyPropertyAddition_(i,void 0)}finally{Jt()}return!0},e.delete_=function(i,r){if(r===void 0&&(r=!1),!Ai(this.target_,i))return!0;if(En(this)){var s=Mn(this,{object:this.proxy_||this.target_,name:i,type:Qp});if(!s)return null}try{var o,a;Qt();var l=Gn(this),u=!1,f=this.values_.get(i),h=void 0;if(!f&&(l||u)){var d;h=(d=fu(this.target_,i))==null?void 0:d.value}if(r){if(!Reflect.deleteProperty(this.target_,i))return!1}else delete this.target_[i];if(f&&(this.values_.delete(i),f instanceof zs&&(h=f.value_),x0(f)),this.keysAtom_.reportChanged(),(o=this.pendingKeys_)==null||(a=o.get(i))==null||a.set(i in this.target_),l||u){var m={type:Qp,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:h,name:i};l&&Wn(this,m)}}finally{Jt()}return!0},e.observe_=function(i,r){return Ra(this,i)},e.intercept_=function(i){return ba(this,i)},e.notifyPropertyAddition_=function(i,r){var s,o,a=Gn(this),l=!1;if(a||l){var u=a||l?{type:ji,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:i,newValue:r}:null;a&&Wn(this,u)}(s=this.pendingKeys_)==null||(o=s.get(i))==null||o.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),Zs(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},t}();function Ca(t,e){var n;if(Ai(t,we))return t;var i=(n=e==null?void 0:e.name)!=null?n:"ObservableObject",r=new H0(t,new Map,String(i),jE(e));return xa(t,we,r),t}var VM=$r("ObservableObjectAdministration",H0);function Jp(t){return Zp[t]||(Zp[t]={get:function(){return this[we].getObservablePropValue_(t)},set:function(n){return this[we].setObservablePropValue_(t,n)}})}function fa(t){return zu(t)?VM(t[we]):!1}function em(t,e,n){var i;(i=t.target_[Jn])==null||delete i[n]}var HM=W0(0),bc=0,G0=function(){};function GM(t,e){Object.setPrototypeOf?Object.setPrototypeOf(t.prototype,e):t.prototype.__proto__!==void 0?t.prototype.__proto__=e:t.prototype=e}GM(G0,Array.prototype);var xh=function(t,e,n){Jv(i,t);function i(s,o,a,l){var u;a===void 0&&(a="ObservableArray"),l===void 0&&(l=!1),u=t.call(this)||this;var f=new yh(a,o,l,!0);if(f.proxy_=wc(u),Kv(wc(u),we,f),s&&s.length){var h=wa(!0);u.spliceWithArray(0,0,s),Aa(h)}return Object.defineProperty(wc(u),"0",HM),u}var r=i.prototype;return r.concat=function(){this[we].atom_.reportObserved();for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return Array.prototype.concat.apply(this.slice(),a.map(function(u){return Wu(u)?u.slice():u}))},r[n]=function(){var s=this,o=0;return da({next:function(){return o<s.length?{value:s[o++],done:!1}:{done:!0,value:void 0}}})},ph(i,[{key:"length",get:function(){return this[we].getArrayLength_()},set:function(o){this[we].setArrayLength_(o)}},{key:e,get:function(){return"Array"}}]),i}(G0,Symbol.toStringTag,Symbol.iterator);Object.entries(gu).forEach(function(t){var e=t[0],n=t[1];e!=="concat"&&xa(xh.prototype,e,n)});function W0(t){return{enumerable:!1,configurable:!0,get:function(){return this[we].get_(t)},set:function(n){this[we].set_(t,n)}}}function WM(t){ni(xh.prototype,""+t,W0(t))}function X0(t){if(t>bc){for(var e=bc;e<t+100;e++)WM(e);bc=t}}X0(1e3);function XM(t,e,n){return new xh(t,e,n)}function ur(t,e){if(typeof t=="object"&&t!==null){if(Wu(t))return e!==void 0&&He(23),t[we].atom_;if(fo(t))return t.atom_;if(Yr(t)){if(e===void 0)return t.keysAtom_;var n=t.data_.get(e)||t.hasMap_.get(e);return n||He(25,e,od(t)),n}if(fa(t)){if(!e)return He(26);var i=t[we].values_.get(e);return i||He(27,e,od(t)),i}if(mh(t)||Gu(t)||mu(t))return t}else if(jn(t)&&mu(t[we]))return t[we];He(28)}function j0(t,e){if(t||He(29),e!==void 0)return j0(ur(t,e));if(mh(t)||Gu(t)||mu(t)||Yr(t)||fo(t))return t;if(t[we])return t[we];He(24,t)}function od(t,e){var n;if(e!==void 0)n=ur(t,e);else{if(vh(t))return t.name;fa(t)||Yr(t)||fo(t)?n=j0(t):n=ur(t)}return n.name_}var tm=Bu.toString;function Sh(t,e,n){return n===void 0&&(n=-1),ad(t,e,n)}function ad(t,e,n,i,r){if(t===e)return t!==0||1/t===1/e;if(t==null||e==null)return!1;if(t!==t)return e!==e;var s=typeof t;if(s!=="function"&&s!=="object"&&typeof e!="object")return!1;var o=tm.call(t);if(o!==tm.call(e))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:+t==0?1/+t===1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(t)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":n>=0&&n++;break}t=nm(t),e=nm(e);var a=o==="[object Array]";if(!a){if(typeof t!="object"||typeof e!="object")return!1;var l=t.constructor,u=e.constructor;if(l!==u&&!(jn(l)&&l instanceof l&&jn(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}if(n===0)return!1;n<0&&(n=-1),i=i||[],r=r||[];for(var f=i.length;f--;)if(i[f]===t)return r[f]===e;if(i.push(t),r.push(e),a){if(f=t.length,f!==e.length)return!1;for(;f--;)if(!ad(t[f],e[f],n-1,i,r))return!1}else{var h=Object.keys(t),d;if(f=h.length,Object.keys(e).length!==f)return!1;for(;f--;)if(d=h[f],!(Ai(e,d)&&ad(t[d],e[d],n-1,i,r)))return!1}return i.pop(),r.pop(),!0}function nm(t){return Wu(t)?t.slice():uo(t)||Yr(t)||Sa(t)||fo(t)?Array.from(t.entries()):t}function da(t){return t[Symbol.iterator]=jM,t}function jM(){return this}["Symbol","Map","Set"].forEach(function(t){var e=hh();typeof e[t]>"u"&&He("MobX requires global '"+t+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:cM,extras:{getDebugName:od},$mobx:we});if(!wt.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!UM)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function qM(t){t()}function $M(t){t||(t=qM),C0({reactionScheduler:t})}function YM(t){return TM(t)}var KM=1e4,ZM=1e4,QM=function(){function t(e){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(i){i===void 0&&(i=KM),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var r=Date.now();n.registrations.forEach(function(s,o){r-s.registeredAt>=i&&(n.finalize(s.value),n.registrations.delete(o))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(t.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,n,i){this.registrations.set(i,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(t.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(t.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,ZM))}}),t}(),JM=typeof FinalizationRegistry<"u"?FinalizationRegistry:QM,ld=new JM(function(t){var e;(e=t.reaction)===null||e===void 0||e.dispose(),t.reaction=null}),im=globalThis&&globalThis.__read||function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s};function rm(t){return"observer".concat(t)}var eT=function(){function t(){}return t}();function tT(){return new eT}function nT(t,e){e===void 0&&(e="observed");var n=im(ms.useState(tT),1),i=n[0],r=im(ms.useState(),2),s=r[1],o=function(){return s([])},a=ms.useRef(null);a.current||(a.current={reaction:null,mounted:!1,changedBeforeMount:!1});var l=a.current;l.reaction||(l.reaction=new to(rm(e),function(){l.mounted?o():l.changedBeforeMount=!0}),ld.register(i,l,l)),ms.useDebugValue(l.reaction,YM),ms.useEffect(function(){return ld.unregister(l),l.mounted=!0,l.reaction?l.changedBeforeMount&&(l.changedBeforeMount=!1,o()):(l.reaction=new to(rm(e),function(){o()}),o()),function(){l.reaction.dispose(),l.reaction=null,l.mounted=!1,l.changedBeforeMount=!1}},[]);var u,f;if(l.reaction.track(function(){try{u=t()}catch(h){f=h}}),f)throw f;return u}var q0=typeof Symbol=="function"&&Symbol.for,sm=q0?Symbol.for("react.forward_ref"):typeof wt.forwardRef=="function"&&wt.forwardRef(function(t){return null}).$$typeof,om=q0?Symbol.for("react.memo"):typeof wt.memo=="function"&&wt.memo(function(t){return null}).$$typeof;function iT(t,e){var n;if(om&&t.$$typeof===om)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var i=(n=e==null?void 0:e.forwardRef)!==null&&n!==void 0?n:!1,r=t,s=t.displayName||t.name;if(sm&&t.$$typeof===sm&&(i=!0,r=t.render,typeof r!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var o=function(a,l){return nT(function(){return r(a,l)},s)};return s!==""&&(o.displayName=s),t.contextTypes&&(o.contextTypes=t.contextTypes),i&&(o=wt.forwardRef(o)),o=wt.memo(o),sT(t,o),o}var rT={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function sT(t,e){Object.keys(t).forEach(function(n){rT[n]||Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}globalThis&&globalThis.__read;var Rc;$M(Wv.unstable_batchedUpdates);Rc=ld.finalizeAllImmediately;var am=0;function oT(t){if(typeof Symbol=="function")return Symbol(t);var e="__$mobx-react "+t+" ("+am+")";return am++,e}var Cc={};function cr(t){return Cc[t]||(Cc[t]=oT(t)),Cc[t]}function $0(t,e){if(lm(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(var r=0;r<n.length;r++)if(!Object.hasOwnProperty.call(e,n[r])||!lm(t[n[r]],e[n[r]]))return!1;return!0}function lm(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function yi(t,e,n){Object.hasOwnProperty.call(t,e)?t[e]=n:Object.defineProperty(t,e,{enumerable:!1,configurable:!0,writable:!0,value:n})}var um=cr("patchMixins"),Y0=cr("patchedDefinition");function aT(t,e){var n=t[um]=t[um]||{},i=n[e]=n[e]||{};return i.locks=i.locks||0,i.methods=i.methods||[],i}function cm(t,e){for(var n=this,i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];e.locks++;try{var o;return t!=null&&(o=t.apply(this,r)),o}finally{e.locks--,e.locks===0&&e.methods.forEach(function(a){a.apply(n,r)})}}function fm(t,e){var n=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];cm.call.apply(cm,[this,t,e].concat(s))};return n}function dm(t,e,n){var i=aT(t,e);i.methods.indexOf(n)<0&&i.methods.push(n);var r=Object.getOwnPropertyDescriptor(t,e);if(!(r&&r[Y0])){var s=t[e],o=K0(t,e,r?r.enumerable:void 0,i,s);Object.defineProperty(t,e,o)}}function K0(t,e,n,i,r){var s,o=fm(r,i);return s={},s[Y0]=!0,s.get=function(){return o},s.set=function(l){if(this===t)o=fm(l,i);else{var u=K0(this,e,n,i,l);Object.defineProperty(this,e,u)}},s.configurable=!0,s.enumerable=n,s}var Vs=we||"$mobx",hm=cr("isMobXReactObserver"),ud=cr("isUnmounted"),yu=cr("skipRender"),Bl=cr("isForcingUpdate");function lT(t){var e=t.prototype;if(t[hm]){var n=zl(e);console.warn("The provided component class ("+n+`)
                has already been declared as an observer component.`)}else t[hm]=!0;if(e.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(t.__proto__!==wt.PureComponent){if(!e.shouldComponentUpdate)e.shouldComponentUpdate=pm;else if(e.shouldComponentUpdate!==pm)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}Pc(e,"props"),Pc(e,"state"),t.contextType&&Pc(e,"context");var i=e.render;if(typeof i!="function"){var r=zl(e);throw new Error("[mobx-react] class component ("+r+") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")}return e.render=function(){return this.render=uT.call(this,i),this.render()},dm(e,"componentDidMount",function(){this[ud]=!1,this.render[Vs]||wt.Component.prototype.forceUpdate.call(this)}),dm(e,"componentWillUnmount",function(){var s=this.render[Vs];if(s)s.dispose(),this.render[Vs]=null;else{var o=zl(this);console.warn("The reactive render of an observer class component ("+o+`)
                was overridden after MobX attached. This may result in a memory leak if the
                overridden reactive render was not properly disposed.`)}this[ud]=!0}),t}function zl(t){return t.displayName||t.name||t.constructor&&(t.constructor.displayName||t.constructor.name)||"<component>"}function uT(t){var e=this;yi(this,yu,!1),yi(this,Bl,!1);var n=zl(this),i=t.bind(this),r=!1,s=function(){var l=new to(n+".render()",function(){if(!r&&(r=!0,e[ud]!==!0)){var u=!0;try{yi(e,Bl,!0),e[yu]||wt.Component.prototype.forceUpdate.call(e),u=!1}finally{yi(e,Bl,!1),u&&(l.dispose(),e.render[Vs]=null)}}});return l.reactComponent=e,l};function o(){var a;r=!1;var l=(a=o[Vs])!=null?a:o[Vs]=s(),u=void 0,f=void 0;if(l.track(function(){try{f=c0(!1,i)}catch(h){u=h}}),u)throw u;return f}return o}function pm(t,e){return this.state!==e?!0:!$0(this.props,t)}function Pc(t,e){var n=cr("reactProp_"+e+"_valueHolder"),i=cr("reactProp_"+e+"_atomHolder");function r(){return this[i]||yi(this,i,_h("reactive "+e)),this[i]}Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){var o=!1;return ks&&rr&&(o=ks(!0)),r.call(this).reportObserved(),ks&&rr&&rr(o),this[n]},set:function(o){!this[Bl]&&!$0(this[n],o)?(yi(this,n,o),yi(this,yu,!0),r.call(this).reportChanged(),yi(this,yu,!1)):yi(this,n,o)}})}function cT(t){return t.isMobxInjector===!0&&console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"),Object.prototype.isPrototypeOf.call(wt.Component,t)||Object.prototype.isPrototypeOf.call(wt.PureComponent,t)?lT(t):iT(t)}if(!wt.Component)throw new Error("mobx-react requires React to be available");if(!Mt)throw new Error("mobx-react requires mobx to be available");const fT=cT(({state:t})=>{const e=wt.useRef(null);return wt.useEffect(()=>{e.current.appendChild(t.render.domElement)},[]),On.jsxs(On.Fragment,{children:[On.jsx("div",{ref:e}),On.jsx("h1",{children:"Vite + React"}),On.jsxs("div",{className:"card",children:[On.jsxs("button",{onClick:()=>t.render.invalidate(),children:["render count is ",t.count]}),On.jsxs("p",{children:["Edit ",On.jsx("code",{children:"src/App.jsx"})," and save to test HMR"]})]}),On.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="154",dT=0,mm=1,hT=2,Z0=1,pT=2,mi=3,fr=0,rn=1,xi=2,sr=0,Hs=1,_m=2,gm=3,vm=4,mT=5,_s=100,_T=101,gT=102,ym=103,xm=104,vT=200,yT=201,xT=202,ST=203,Q0=204,J0=205,ET=206,MT=207,TT=208,wT=209,AT=210,bT=0,RT=1,CT=2,cd=3,PT=4,LT=5,DT=6,UT=7,ey=0,OT=1,NT=2,bi=0,IT=1,FT=2,BT=3,zT=4,kT=5,ty=300,no=301,io=302,fd=303,dd=304,Xu=306,hd=1e3,zn=1001,pd=1002,Wt=1003,Sm=1004,Lc=1005,xn=1006,VT=1007,ha=1008,or=1009,HT=1010,GT=1011,Mh=1012,ny=1013,qi=1014,$i=1015,pa=1016,iy=1017,ry=1018,Ur=1020,WT=1021,kn=1023,XT=1024,jT=1025,Or=1026,ro=1027,qT=1028,sy=1029,$T=1030,oy=1031,ay=1033,Dc=33776,Uc=33777,Oc=33778,Nc=33779,Em=35840,Mm=35841,Tm=35842,wm=35843,YT=36196,Am=37492,bm=37496,Rm=37808,Cm=37809,Pm=37810,Lm=37811,Dm=37812,Um=37813,Om=37814,Nm=37815,Im=37816,Fm=37817,Bm=37818,zm=37819,km=37820,Vm=37821,Ic=36492,KT=36283,Hm=36284,Gm=36285,Wm=36286,ly=3e3,Nr=3001,ZT=3200,QT=3201,JT=0,ew=1,Ir="",De="srgb",oi="srgb-linear",uy="display-p3",Fc=7680,tw=519,nw=512,iw=513,rw=514,sw=515,ow=516,aw=517,lw=518,uw=519,Xm=35044,jm="300 es",md=1035,Mi=2e3,xu=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,_d=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function cw(t,e){return(t%e+e)%e}function zc(t,e,n){return(1-n)*t+n*e}function qm(t){return(t&t-1)===0&&t!==0}function gd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function tl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],y=i[8],v=r[0],p=r[3],c=r[6],g=r[1],_=r[4],x=r[7],M=r[2],R=r[5],b=r[8];return s[0]=o*v+a*g+l*M,s[3]=o*p+a*_+l*R,s[6]=o*c+a*x+l*b,s[1]=u*v+f*g+h*M,s[4]=u*p+f*_+h*R,s[7]=u*c+f*x+h*b,s[2]=d*v+m*g+y*M,s[5]=d*p+m*_+y*R,s[8]=d*c+m*x+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,y=n*h+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kc.makeScale(e,n)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new Oe;function cy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const $m={};function Wo(t){t in $m||($m[t]=!0,console.warn(t))}function Gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const fw=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),dw=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function hw(t){return t.convertSRGBToLinear().applyMatrix3(dw)}function pw(t){return t.applyMatrix3(fw).convertLinearToSRGB()}const mw={[oi]:t=>t,[De]:t=>t.convertSRGBToLinear(),[uy]:hw},_w={[oi]:t=>t,[De]:t=>t.convertLinearToSRGB(),[uy]:pw},Pn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return oi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mw[e],r=_w[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Jr;class fy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=Su("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gs(n[i]/255)*255):n[i]=Gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gw=0;class dy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=Pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hc(r[o].image)):s.push(Hc(r[o]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vw=0;class dn extends ho{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=zn,r=zn,s=xn,o=ha,a=kn,l=or,u=dn.DEFAULT_ANISOTROPY,f=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Pa(),this.name="",this.source=new dy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Nr?De:Ir),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Nr:ly}set encoding(e){Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?De:Ir}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ty;dn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],y=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(y+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(m+1)/2,M=(c+1)/2,R=(f+d)/4,b=(h+v)/4,L=(y+p)/4;return _>x&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=b/i):x>M?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=L/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-y)*(p-y)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-y)/g,this.y=(h-v)/g,this.z=(d-f)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wr extends ho{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?De:Ir),this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hy extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yw extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=y,e[n+3]=v;return}if(h!==v||l!==d||u!==m||f!==y){let p=1-a;const c=l*d+u*m+f*y+h*v,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const M=Math.sqrt(_),R=Math.atan2(M,c*g);p=Math.sin(p*R)/M,a=Math.sin(a*R)/M}const x=a*g;if(l=l*p+d*x,u=u*p+m*x,f=f*p+y*x,h=h*p+v*x,p===1-a){const M=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=M,u*=M,f*=M,h*=M}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+f*h+l*m-u*d,e[n+1]=l*y+f*d+u*h-a*m,e[n+2]=u*y+f*m+a*d-l*h,e[n+3]=f*y-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*y,this._y=u*m*h-d*f*y,this._z=u*f*y+d*m*h,this._w=u*f*h-d*m*y;break;case"YXZ":this._x=d*f*h+u*m*y,this._y=u*m*h-d*f*y,this._z=u*f*y-d*m*h,this._w=u*f*h+d*m*y;break;case"ZXY":this._x=d*f*h-u*m*y,this._y=u*m*h+d*f*y,this._z=u*f*y+d*m*h,this._w=u*f*h-d*m*y;break;case"ZYX":this._x=d*f*h-u*m*y,this._y=u*m*h+d*f*y,this._z=u*f*y-d*m*h,this._w=u*f*h+d*m*y;break;case"YZX":this._x=d*f*h+u*m*y,this._y=u*m*h+d*f*y,this._z=u*f*y-d*m*h,this._w=u*f*h-d*m*y;break;case"XZY":this._x=d*f*h-u*m*y,this._y=u*m*h-d*f*y,this._z=u*f*y+d*m*h,this._w=u*f*h+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,f=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+f*-a-h*-o,this.y=f*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new z,Ym=new La;class Da{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox),es.applyMatrix4(e.matrixWorld),this.union(es);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ci.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ci)}else r.boundingBox===null&&r.computeBoundingBox(),es.copy(r.boundingBox),es.applyMatrix4(e.matrixWorld),this.union(es)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),nl.subVectors(this.max,wo),ts.subVectors(e.a,wo),ns.subVectors(e.b,wo),is.subVectors(e.c,wo),Ii.subVectors(ns,ts),Fi.subVectors(is,ns),vr.subVectors(ts,is);let n=[0,-Ii.z,Ii.y,0,-Fi.z,Fi.y,0,-vr.z,vr.y,Ii.z,0,-Ii.x,Fi.z,0,-Fi.x,vr.z,0,-vr.x,-Ii.y,Ii.x,0,-Fi.y,Fi.x,0,-vr.y,vr.x,0];return!Wc(n,ts,ns,is,nl)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,ts,ns,is,nl))?!1:(il.crossVectors(Ii,Fi),n=[il.x,il.y,il.z],Wc(n,ts,ns,is,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new z,new z,new z,new z,new z,new z,new z,new z],ci=new z,es=new Da,ts=new z,ns=new z,is=new z,Ii=new z,Fi=new z,vr=new z,wo=new z,nl=new z,il=new z,yr=new z;function Wc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=n.dot(yr),f=i.dot(yr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const xw=new Da,Ao=new z,Xc=new z;class Th{constructor(e=new z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Xc)),this.expandByPoint(Ao.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new z,jc=new z,rl=new z,Bi=new z,qc=new z,sl=new z,$c=new z;class Sw{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jc.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(jc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=Bi.dot(this.direction),l=-Bi.dot(rl),u=Bi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,y;if(f>0)if(h=o*l-a,d=o*a-l,y=s*f,h>=0)if(d>=-y)if(d<=y){const v=1/f;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jc).addScaledVector(rl,d),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),sl.subVectors(i,e),$c.crossVectors(qc,sl);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(Bi,sl));if(l<0)return null;const u=a*this.direction.dot(qc.cross(Bi));if(u<0||l+u>o)return null;const f=-a*Bi.dot($c);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,y,v,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,y,v,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,y,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=y,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,y=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+y*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=y+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,y=u*f,v=u*h;n[0]=d+v*a,n[4]=y*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-y,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,y=u*f,v=u*h;n[0]=d-v*a,n[4]=-o*h,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,y=a*f,v=a*h;n[0]=l*f,n[4]=y*u-m,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=m*u-y,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,y=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=y*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+y,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*u,y=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=o*f,n[9]=m*h-y,n[2]=y*h-m,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ew,e,Mw)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),zi.crossVectors(i,an),zi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),zi.crossVectors(i,an)),zi.normalize(),ol.crossVectors(an,zi),r[0]=zi.x,r[4]=ol.x,r[8]=an.x,r[1]=zi.y,r[5]=ol.y,r[9]=an.y,r[2]=zi.z,r[6]=ol.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],y=i[2],v=i[6],p=i[10],c=i[14],g=i[3],_=i[7],x=i[11],M=i[15],R=r[0],b=r[4],L=r[8],S=r[12],w=r[1],Y=r[5],Q=r[9],F=r[13],H=r[2],W=r[6],K=r[10],q=r[14],P=r[3],V=r[7],B=r[11],U=r[15];return s[0]=o*R+a*w+l*H+u*P,s[4]=o*b+a*Y+l*W+u*V,s[8]=o*L+a*Q+l*K+u*B,s[12]=o*S+a*F+l*q+u*U,s[1]=f*R+h*w+d*H+m*P,s[5]=f*b+h*Y+d*W+m*V,s[9]=f*L+h*Q+d*K+m*B,s[13]=f*S+h*F+d*q+m*U,s[2]=y*R+v*w+p*H+c*P,s[6]=y*b+v*Y+p*W+c*V,s[10]=y*L+v*Q+p*K+c*B,s[14]=y*S+v*F+p*q+c*U,s[3]=g*R+_*w+x*H+M*P,s[7]=g*b+_*Y+x*W+M*V,s[11]=g*L+_*Q+x*K+M*B,s[15]=g*S+_*F+x*q+M*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],y=e[3],v=e[7],p=e[11],c=e[15];return y*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+v*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],y=e[12],v=e[13],p=e[14],c=e[15],g=h*p*u-v*d*u+v*l*m-a*p*m-h*l*c+a*d*c,_=y*d*u-f*p*u-y*l*m+o*p*m+f*l*c-o*d*c,x=f*v*u-y*h*u+y*a*m-o*v*m-f*a*c+o*h*c,M=y*h*l-f*v*l-y*a*d+o*v*d+f*a*p-o*h*p,R=n*g+i*_+r*x+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=g*b,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*c-i*d*c)*b,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*b,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*b,e[4]=_*b,e[5]=(f*p*s-y*d*s+y*r*m-n*p*m-f*r*c+n*d*c)*b,e[6]=(y*l*s-o*p*s-y*r*u+n*p*u+o*r*c-n*l*c)*b,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*b,e[8]=x*b,e[9]=(y*h*s-f*v*s-y*i*m+n*v*m+f*i*c-n*h*c)*b,e[10]=(o*v*s-y*a*s+y*i*u-n*v*u-o*i*c+n*a*c)*b,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*b,e[12]=M*b,e[13]=(f*v*r-y*h*r+y*i*d-n*v*d-f*i*p+n*h*p)*b,e[14]=(y*a*r-o*v*r-y*i*l+n*v*l+o*i*p-n*a*p)*b,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,y=s*h,v=o*f,p=o*h,c=a*h,g=l*u,_=l*f,x=l*h,M=i.x,R=i.y,b=i.z;return r[0]=(1-(v+c))*M,r[1]=(m+x)*M,r[2]=(y-_)*M,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(d+c))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(y+_)*b,r[9]=(p-g)*b,r[10]=(1-(d+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,f=1/o,h=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,y;if(a===Mi)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===xu)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let y,v;if(a===Mi)y=(o+s)*h,v=-2*h;else if(a===xu)y=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new z,Ln=new Pt,Ew=new z(0,0,0),Mw=new z(1,1,1),zi=new z,ol=new z,an=new z,Km=new Pt,Zm=new La;class ju{constructor(e=0,n=0,i=0,r=ju.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ju.DEFAULT_ORDER="XYZ";class py{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tw=0;const Qm=new z,ss=new La,di=new Pt,al=new z,bo=new z,ww=new z,Aw=new La,Jm=new z(1,0,0),e_=new z(0,1,0),t_=new z(0,0,1),bw={type:"added"},n_={type:"removed"};class hn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new z,n=new ju,i=new La,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Oe}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new py,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,n){return Qm.copy(e).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(bo,al,this.up):di.lookAt(al,bo,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(di),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(n_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Aw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new z(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new z,hi=new z,Yc=new z,pi=new z,os=new z,as=new z,i_=new z,Kc=new z,Zc=new z,Qc=new z;let ll=!1;class Bn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),hi.subVectors(i,n),Yc.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(hi),l=Dn.dot(Yc),u=hi.dot(hi),f=hi.dot(Yc),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-a*f)*d,y=(o*f-a*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,s,o,a,l){return ll===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ll=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi),l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),hi.subVectors(e,n),Dn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Dn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ll===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ll=!0),Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),Kc.subVectors(e,i);const l=os.dot(Kc),u=as.dot(Kc);if(l<=0&&u<=0)return n.copy(i);Zc.subVectors(e,r);const f=os.dot(Zc),h=as.dot(Zc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(os,o);Qc.subVectors(e,s);const m=os.dot(Qc),y=as.dot(Qc);if(y>=0&&m<=y)return n.copy(s);const v=m*u-l*y;if(v<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(as,a);const p=f*y-m*h;if(p<=0&&h-f>=0&&m-y>=0)return i_.subVectors(s,r),a=(h-f)/(h-f+(m-y)),n.copy(r).addScaledVector(i_,a);const c=1/(p+v+d);return o=v*c,a=d*c,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rw=0;class qu extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Hs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q0,this.blendDst=J0,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fc,this.stencilZFail=Fc,this.stencilZPass=Fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const my={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Pn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Pn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Pn.workingColorSpace){if(e=cw(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Jc(o,s,e+1/3),this.g=Jc(o,s,e),this.b=Jc(o,s,e-1/3)}return Pn.toWorkingColorSpace(this,r),this}setStyle(e,n=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=De){const i=my[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return Pn.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pn.workingColorSpace){Pn.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Pn.workingColorSpace){return Pn.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=De){Pn.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==De?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Un),Un.h+=e,Un.s+=n,Un.l+=i,this.setHSL(Un.h,Un.s,Un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Un),e.getHSL(ul);const i=zc(Un.h,ul.h,n),r=zc(Un.s,ul.s,n),s=zc(Un.l,ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Qe;Qe.NAMES=my;class wh extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new z,cl=new $e;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xm,this.updateRange={offset:0,count:-1},this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix3(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix4(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyNormalMatrix(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.transformDirection(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=tl(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=tl(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=tl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=tl(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _y extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gy extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fr extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Cw=0;const gn=new Pt,ef=new hn,ls=new z,ln=new Da,Ro=new Da,St=new z;class Kr extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cy(e)?gy:_y)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Th);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(ln.min,Ro.min),ln.expandByPoint(St),St.addVectors(ln.max,Ro.max),ln.expandByPoint(St)):(ln.expandByPoint(Ro.min),ln.expandByPoint(Ro.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)St.fromBufferAttribute(a,u),l&&(ls.fromBufferAttribute(e,u),St.add(ls)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new z,f[w]=new z;const h=new z,d=new z,m=new z,y=new $e,v=new $e,p=new $e,c=new z,g=new z;function _(w,Y,Q){h.fromArray(r,w*3),d.fromArray(r,Y*3),m.fromArray(r,Q*3),y.fromArray(o,w*2),v.fromArray(o,Y*2),p.fromArray(o,Q*2),d.sub(h),m.sub(h),v.sub(y),p.sub(y);const F=1/(v.x*p.y-p.x*v.y);isFinite(F)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(F),g.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(F),u[w].add(c),u[Y].add(c),u[Q].add(c),f[w].add(g),f[Y].add(g),f[Q].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,Y=x.length;w<Y;++w){const Q=x[w],F=Q.start,H=Q.count;for(let W=F,K=F+H;W<K;W+=3)_(i[W+0],i[W+1],i[W+2])}const M=new z,R=new z,b=new z,L=new z;function S(w){b.fromArray(s,w*3),L.copy(b);const Y=u[w];M.copy(Y),M.sub(b.multiplyScalar(b.dot(Y))).normalize(),R.crossVectors(L,Y);const F=R.dot(f[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=F}for(let w=0,Y=x.length;w<Y;++w){const Q=x[w],F=Q.start,H=Q.count;for(let W=F,K=F+H;W<K;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,f=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,y=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)d[y++]=u[m++]}return new si(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new Pt,xr=new Sw,fl=new Th,s_=new z,us=new z,cs=new z,fs=new z,tf=new z,dl=new z,hl=new $e,pl=new $e,ml=new $e,o_=new z,a_=new z,l_=new z,_l=new z,gl=new z;class Ti extends hn{constructor(e=new Kr,n=new wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(tf.fromBufferAttribute(h,e),o?dl.addScaledVector(tf,f):dl.addScaledVector(tf.sub(n),f))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(fl.containsPoint(xr.origin)===!1&&(xr.intersectSphere(fl,s_)===null||xr.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(s).invert(),xr.copy(e.ray).applyMatrix4(r_),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const p=d[y],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,M=_;x<M;x+=3){const R=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);r=vl(this,c,e,i,u,f,h,R,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=y,c=v;p<c;p+=3){const g=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);r=vl(this,o,e,i,u,f,h,g,_,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const p=d[y],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,M=_;x<M;x+=3){const R=x,b=x+1,L=x+2;r=vl(this,c,e,i,u,f,h,R,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=y,c=v;p<c;p+=3){const g=p,_=p+1,x=p+2;r=vl(this,o,e,i,u,f,h,g,_,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Pw(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;gl.copy(a),gl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(gl);return u<n.near||u>n.far?null:{distance:u,point:gl.clone(),object:t}}function vl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,us),t.getVertexPosition(l,cs),t.getVertexPosition(u,fs);const f=Pw(t,e,n,i,us,cs,fs,_l);if(f){r&&(hl.fromBufferAttribute(r,a),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,u),f.uv=Bn.getInterpolation(_l,us,cs,fs,hl,pl,ml,new $e)),s&&(hl.fromBufferAttribute(s,a),pl.fromBufferAttribute(s,l),ml.fromBufferAttribute(s,u),f.uv1=Bn.getInterpolation(_l,us,cs,fs,hl,pl,ml,new $e),f.uv2=f.uv1),o&&(o_.fromBufferAttribute(o,a),a_.fromBufferAttribute(o,l),l_.fromBufferAttribute(o,u),f.normal=Bn.getInterpolation(_l,us,cs,fs,o_,a_,l_,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new z,materialIndex:0};Bn.getNormal(us,cs,fs,h.normal),f.face=h}return f}class po extends Kr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fr(u,3)),this.setAttribute("normal",new Fr(f,3)),this.setAttribute("uv",new Fr(h,2));function y(v,p,c,g,_,x,M,R,b,L,S){const w=x/b,Y=M/L,Q=x/2,F=M/2,H=R/2,W=b+1,K=L+1;let q=0,P=0;const V=new z;for(let B=0;B<K;B++){const U=B*Y-F;for(let I=0;I<W;I++){const se=I*w-Q;V[v]=se*g,V[p]=U*_,V[c]=H,u.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[c]=R>0?1:-1,f.push(V.x,V.y,V.z),h.push(I/b),h.push(1-B/L),q+=1}}for(let B=0;B<L;B++)for(let U=0;U<b;U++){const I=d+U+W*B,se=d+U+W*(B+1),ie=d+(U+1)+W*(B+1),ce=d+(U+1)+W*B;l.push(I,se,ce),l.push(se,ie,ce),P+=6}a.addGroup(m,P,S),m+=P,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vy(t){return t.getRenderTarget()===null?t.outputColorSpace:oi}const Dw={clone:so,merge:Ht};var Uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uw,this.fragmentShader=Ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yy extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends yy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ds=-90,hs=1;class Nw extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Sn(ds,hs,e,n);r.layers=this.layers,this.add(r);const s=new Sn(ds,hs,e,n);s.layers=this.layers,this.add(s);const o=new Sn(ds,hs,e,n);o.layers=this.layers,this.add(o);const a=new Sn(ds,hs,e,n);a.layers=this.layers,this.add(a);const l=new Sn(ds,hs,e,n);l.layers=this.layers,this.add(l);const u=new Sn(ds,hs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=bi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class xy extends dn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iw extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?De:Ir),this.texture=new xy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new po(5,5,5),s=new Xr({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:sr});s.uniforms.tEquirect.value=n;const o=new Ti(r,s),a=n.minFilter;return n.minFilter===ha&&(n.minFilter=xn),new Nw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const nf=new z,Fw=new z,Bw=new Oe;class Tr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nf.subVectors(i,n).cross(Fw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bw.getNormalMatrix(e),r=this.coplanarPoint(nf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Th,yl=new z;class Sy{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],y=r[9],v=r[10],p=r[11],c=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,p-m,x-c).normalize(),i[1].setComponents(l+s,d+u,p+m,x+c).normalize(),i[2].setComponents(l+o,d+f,p+y,x+g).normalize(),i[3].setComponents(l-o,d-f,p-y,x-g).normalize(),i[4].setComponents(l-a,d-h,p-v,x-_).normalize(),n===Mi)i[5].setComponents(l+a,d+h,p+v,x+_).normalize();else if(n===xu)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ey(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,m=f.updateRange;t.bindBuffer(h,u),m.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:o,remove:a,update:l}}class Ah extends Kr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],y=[],v=[],p=[];for(let c=0;c<f;c++){const g=c*d-o;for(let _=0;_<u;_++){const x=_*h-s;y.push(x,-g,0),v.push(0,0,1),p.push(_/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,x=g+u*(c+1),M=g+1+u*(c+1),R=g+1+u*c;m.push(_,x,R),m.push(x,M,R)}this.setIndex(m),this.setAttribute("position",new Fr(y,3)),this.setAttribute("normal",new Fr(v,3)),this.setAttribute("uv",new Fr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.width,e.height,e.widthSegments,e.heightSegments)}}var kw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$w=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_A=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,FA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BA=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,VA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,WA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XA=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,jA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,JA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,X1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:kw,alphahash_pars_fragment:Vw,alphamap_fragment:Hw,alphamap_pars_fragment:Gw,alphatest_fragment:Ww,alphatest_pars_fragment:Xw,aomap_fragment:jw,aomap_pars_fragment:qw,begin_vertex:$w,beginnormal_vertex:Yw,bsdfs:Kw,iridescence_fragment:Zw,bumpmap_pars_fragment:Qw,clipping_planes_fragment:Jw,clipping_planes_pars_fragment:eA,clipping_planes_pars_vertex:tA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:rA,color_pars_vertex:sA,color_vertex:oA,common:aA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:uA,displacementmap_pars_vertex:cA,displacementmap_vertex:fA,emissivemap_fragment:dA,emissivemap_pars_fragment:hA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:_A,envmap_common_pars_fragment:gA,envmap_pars_fragment:vA,envmap_pars_vertex:yA,envmap_physical_pars_fragment:LA,envmap_vertex:xA,fog_vertex:SA,fog_pars_vertex:EA,fog_fragment:MA,fog_pars_fragment:TA,gradientmap_pars_fragment:wA,lightmap_fragment:AA,lightmap_pars_fragment:bA,lights_lambert_fragment:RA,lights_lambert_pars_fragment:CA,lights_pars_begin:PA,lights_toon_fragment:DA,lights_toon_pars_fragment:UA,lights_phong_fragment:OA,lights_phong_pars_fragment:NA,lights_physical_fragment:IA,lights_physical_pars_fragment:FA,lights_fragment_begin:BA,lights_fragment_maps:zA,lights_fragment_end:kA,logdepthbuf_fragment:VA,logdepthbuf_pars_fragment:HA,logdepthbuf_pars_vertex:GA,logdepthbuf_vertex:WA,map_fragment:XA,map_pars_fragment:jA,map_particle_fragment:qA,map_particle_pars_fragment:$A,metalnessmap_fragment:YA,metalnessmap_pars_fragment:KA,morphcolor_vertex:ZA,morphnormal_vertex:QA,morphtarget_pars_vertex:JA,morphtarget_vertex:e1,normal_fragment_begin:t1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:c1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:_1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:x1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:M1,skinning_pars_vertex:T1,skinning_vertex:w1,skinnormal_vertex:A1,specularmap_fragment:b1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:P1,transmission_fragment:L1,transmission_pars_fragment:D1,uv_pars_fragment:U1,uv_pars_vertex:O1,uv_vertex:N1,worldpos_vertex:I1,background_vert:F1,background_frag:B1,backgroundCube_vert:z1,backgroundCube_frag:k1,cube_vert:V1,cube_frag:H1,depth_vert:G1,depth_frag:W1,distanceRGBA_vert:X1,distanceRGBA_frag:j1,equirect_vert:q1,equirect_frag:$1,linedashed_vert:Y1,linedashed_frag:K1,meshbasic_vert:Z1,meshbasic_frag:Q1,meshlambert_vert:J1,meshlambert_frag:eb,meshmatcap_vert:tb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:rb,meshphong_vert:sb,meshphong_frag:ob,meshphysical_vert:ab,meshphysical_frag:lb,meshtoon_vert:ub,meshtoon_frag:cb,points_vert:fb,points_frag:db,shadow_vert:hb,shadow_frag:pb,sprite_vert:mb,sprite_frag:_b},re={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Zn={basic:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ht([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ht([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ht([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ht([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ht([re.lights,re.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Zn.physical={uniforms:Ht([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const xl={r:0,b:0,g:0};function gb(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function y(p,c){let g=!1,_=c.isScene===!0?c.background:null;switch(_&&_.isTexture&&(_=(c.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),g=!0),t.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),g=!0;break}(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Xu)?(f===void 0&&(f=new Ti(new po(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:so(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=_.colorSpace!==De,(h!==_||d!==_.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=_,d=_.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Ti(new Ah(2,2),new Xr({name:"BackgroundMaterial",uniforms:so(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_.colorSpace!==De,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(xl,vy(t)),i.buffers.color.setClear(xl.r,xl.g,xl.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:y}}function vb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function h(H,W,K,q,P){let V=!1;if(o){const B=v(q,K,W);u!==B&&(u=B,m(u.object)),V=c(H,q,K,P),V&&g(H,q,K,P)}else{const B=W.wireframe===!0;(u.geometry!==q.id||u.program!==K.id||u.wireframe!==B)&&(u.geometry=q.id,u.program=K.id,u.wireframe=B,V=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(V||f)&&(f=!1,L(H,W,K,q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function y(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function v(H,W,K){const q=K.wireframe===!0;let P=a[H.id];P===void 0&&(P={},a[H.id]=P);let V=P[W.id];V===void 0&&(V={},P[W.id]=V);let B=V[q];return B===void 0&&(B=p(d()),V[q]=B),B}function p(H){const W=[],K=[],q=[];for(let P=0;P<r;P++)W[P]=0,K[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:q,object:H,attributes:{},index:null}}function c(H,W,K,q){const P=u.attributes,V=W.attributes;let B=0;const U=K.getAttributes();for(const I in U)if(U[I].location>=0){const ie=P[I];let ce=V[I];if(ce===void 0&&(I==="instanceMatrix"&&H.instanceMatrix&&(ce=H.instanceMatrix),I==="instanceColor"&&H.instanceColor&&(ce=H.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;B++}return u.attributesNum!==B||u.index!==q}function g(H,W,K,q){const P={},V=W.attributes;let B=0;const U=K.getAttributes();for(const I in U)if(U[I].location>=0){let ie=V[I];ie===void 0&&(I==="instanceMatrix"&&H.instanceMatrix&&(ie=H.instanceMatrix),I==="instanceColor"&&H.instanceColor&&(ie=H.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),P[I]=ce,B++}u.attributes=P,u.attributesNum=B,u.index=q}function _(){const H=u.newAttributes;for(let W=0,K=H.length;W<K;W++)H[W]=0}function x(H){M(H,0)}function M(H,W){const K=u.newAttributes,q=u.enabledAttributes,P=u.attributeDivisors;K[H]=1,q[H]===0&&(t.enableVertexAttribArray(H),q[H]=1),P[H]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,W),P[H]=W)}function R(){const H=u.newAttributes,W=u.enabledAttributes;for(let K=0,q=W.length;K<q;K++)W[K]!==H[K]&&(t.disableVertexAttribArray(K),W[K]=0)}function b(H,W,K,q,P,V,B){B===!0?t.vertexAttribIPointer(H,W,K,P,V):t.vertexAttribPointer(H,W,K,q,P,V)}function L(H,W,K,q){if(i.isWebGL2===!1&&(H.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const P=q.attributes,V=K.getAttributes(),B=W.defaultAttributeValues;for(const U in V){const I=V[U];if(I.location>=0){let se=P[U];if(se===void 0&&(U==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),U==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){const ie=se.normalized,ce=se.itemSize,me=n.get(se);if(me===void 0)continue;const Me=me.buffer,Se=me.type,Xe=me.bytesPerElement,$t=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||se.gpuType===ny);if(se.isInterleavedBufferAttribute){const Fe=se.data,O=Fe.stride,Dt=se.offset;if(Fe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<I.locationSize;Ee++)M(I.location+Ee,Fe.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Ee=0;Ee<I.locationSize;Ee++)x(I.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ee=0;Ee<I.locationSize;Ee++)b(I.location+Ee,ce/I.locationSize,Se,ie,O*Xe,(Dt+ce/I.locationSize*Ee)*Xe,$t)}else{if(se.isInstancedBufferAttribute){for(let Fe=0;Fe<I.locationSize;Fe++)M(I.location+Fe,se.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<I.locationSize;Fe++)x(I.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Fe=0;Fe<I.locationSize;Fe++)b(I.location+Fe,ce/I.locationSize,Se,ie,ce*Xe,ce/I.locationSize*Fe*Xe,$t)}}else if(B!==void 0){const ie=B[U];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(I.location,ie);break;case 3:t.vertexAttrib3fv(I.location,ie);break;case 4:t.vertexAttrib4fv(I.location,ie);break;default:t.vertexAttrib1fv(I.location,ie)}}}}R()}function S(){Q();for(const H in a){const W=a[H];for(const K in W){const q=W[K];for(const P in q)y(q[P].object),delete q[P];delete W[K]}delete a[H]}}function w(H){if(a[H.id]===void 0)return;const W=a[H.id];for(const K in W){const q=W[K];for(const P in q)y(q[P].object),delete q[P];delete W[K]}delete a[H.id]}function Y(H){for(const W in a){const K=a[W];if(K[H.id]===void 0)continue;const q=K[H.id];for(const P in q)y(q[P].object),delete q[P];delete K[H.id]}}function Q(){F(),f=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:_,enableAttribute:x,disableUnusedAttributes:R}}function yb(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function xb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,x=o||e.has("OES_texture_float"),M=_&&x,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:R}}function Sb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Tr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const y=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||y===null||y.length===0||s&&!p)s?f(null):u();else{const g=s?0:i,_=g*4;let x=c.clippingState||null;l.value=x,x=f(y,d,_,m);for(let M=0;M!==_;++M)x[M]=n[M];c.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,y){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,y!==!0||p===null){const c=m+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let _=0,x=m;_!==v;++_,x+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Eb(t){let e=new WeakMap;function n(o,a){return a===fd?o.mapping=no:a===dd&&(o.mapping=io),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fd||a===dd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Iw(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Mb extends yy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,u_=[.125,.215,.35,.446,.526,.582],Ar=20,rf=new Mb,c_=new Qe;let sf=null;const wr=(1+Math.sqrt(5))/2,ps=1/wr,f_=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,wr,ps),new z(0,wr,-ps),new z(ps,0,wr),new z(-ps,0,wr),new z(wr,ps,0),new z(-wr,ps,0)];class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){sf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:pa,format:kn,colorSpace:oi,depthBuffer:!1},r=h_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tb(s)),this._blurMaterial=wb(s,e,n)}return r}_compileMaterial(e){const n=new Ti(this._lodPlanes[0],e);this._renderer.compile(n,rf)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(c_),f.toneMapping=bi,f.autoClear=!1;const m=new wh({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new Ti(new po,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(c_),v=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Sl(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=f_[(r-1)%f_.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ti(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ar-1),v=s/y,p=isFinite(s)?1+Math.floor(f*v):Ar;p>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ar}`);const c=[];let g=0;for(let b=0;b<Ar;++b){const L=b/v,S=Math.exp(-L*L/2);c.push(S),b===0?g+=S:b<p&&(g+=2*S)}for(let b=0;b<c.length;b++)c[b]=c[b]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;const x=this._sizeLods[r],M=3*x*(r>_-Ds?r-_+Ds:0),R=4*(this._cubeSize-x);Sl(n,M,R,3*x,2*x),l.setRenderTarget(n),l.render(h,rf)}}function Tb(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+u_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=u_[o-t+Ds-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,y=6,v=3,p=2,c=1,g=new Float32Array(v*y*m),_=new Float32Array(p*y*m),x=new Float32Array(c*y*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,L=R>2?0:-1,S=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];g.set(S,v*y*R),_.set(d,p*y*R);const w=[R,R,R,R,R,R];x.set(w,c*y*R)}const M=new Kr;M.setAttribute("position",new si(g,v)),M.setAttribute("uv",new si(_,p)),M.setAttribute("faceIndex",new si(x,c)),e.push(M),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function h_(t,e,n){const i=new Wr(t,e,n);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wb(t,e,n){const i=new Float32Array(Ar),r=new z(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function p_(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function m_(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ab(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fd||l===dd,f=l===no||l===io;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new d_(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new d_(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rb(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const v=d.morphAttributes[y];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const y in m){const v=m[y];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,y=h.attributes.position;let v=0;if(m!==null){const g=m.array;v=m.version;for(let _=0,x=g.length;_<x;_+=3){const M=g[_+0],R=g[_+1],b=g[_+2];d.push(M,R,R,b,b,M)}}else{const g=y.array;v=y.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const M=_+0,R=_+1,b=_+2;d.push(M,R,R,b,b,M)}}const p=new(cy(d)?gy:_y)(d,1);p.version=v;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Cb(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function h(d,m,y){if(y===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,d*l,y),n.update(m,s,y)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function Pb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Lb(t,e){return t[0]-e[0]}function Db(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ub(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=y!==void 0?y.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let W=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",W)};var m=W;p!==void 0&&p.texture.dispose();const _=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),M===!0&&(S=3);let w=f.attributes.position.count*S,Y=1;w>e.maxTextureSize&&(Y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Q=new Float32Array(w*Y*4*v),F=new hy(Q,w,Y,v);F.type=$i,F.needsUpdate=!0;const H=S*4;for(let K=0;K<v;K++){const q=R[K],P=b[K],V=L[K],B=w*Y*4*K;for(let U=0;U<q.count;U++){const I=U*H;_===!0&&(o.fromBufferAttribute(q,U),Q[B+I+0]=o.x,Q[B+I+1]=o.y,Q[B+I+2]=o.z,Q[B+I+3]=0),x===!0&&(o.fromBufferAttribute(P,U),Q[B+I+4]=o.x,Q[B+I+5]=o.y,Q[B+I+6]=o.z,Q[B+I+7]=0),M===!0&&(o.fromBufferAttribute(V,U),Q[B+I+8]=o.x,Q[B+I+9]=o.y,Q[B+I+10]=o.z,Q[B+I+11]=V.itemSize===4?o.w:1)}}p={count:v,texture:F,size:new $e(w,Y)},s.set(f,p),f.addEventListener("dispose",W)}let c=0;for(let _=0;_<d.length;_++)c+=d[_];const g=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==y){v=[];for(let x=0;x<y;x++)v[x]=[x,0];i[f.id]=v}for(let x=0;x<y;x++){const M=v[x];M[0]=x,M[1]=d[x]}v.sort(Db);for(let x=0;x<8;x++)x<y&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Lb);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const M=a[x],R=M[0],b=M[1];R!==Number.MAX_SAFE_INTEGER&&b?(p&&f.getAttribute("morphTarget"+x)!==p[R]&&f.setAttribute("morphTarget"+x,p[R]),c&&f.getAttribute("morphNormal"+x)!==c[R]&&f.setAttribute("morphNormal"+x,c[R]),r[x]=b,g+=b):(p&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),c&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const _=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Ob(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const My=new dn,Ty=new hy,wy=new yw,Ay=new xy,__=[],g_=[],v_=new Float32Array(16),y_=new Float32Array(9),x_=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=__[r];if(s===void 0&&(s=new Float32Array(r),__[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $u(t,e){let n=g_[e];n===void 0&&(n=new Int32Array(e),g_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),gt(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),gt(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),gt(n,e)}}function zb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),gt(n,e)}else{if(_t(n,i))return;x_.set(i),t.uniformMatrix2fv(this.addr,!1,x_),gt(n,i)}}function kb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),gt(n,e)}else{if(_t(n,i))return;y_.set(i),t.uniformMatrix3fv(this.addr,!1,y_),gt(n,i)}}function Vb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),gt(n,e)}else{if(_t(n,i))return;v_.set(i),t.uniformMatrix4fv(this.addr,!1,v_),gt(n,i)}}function Hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),gt(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),gt(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),gt(n,e)}}function jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),gt(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),gt(n,e)}}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),gt(n,e)}}function Kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||My,r)}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wy,r)}function Qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ay,r)}function Jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ty,r)}function eR(t){switch(t){case 5126:return Nb;case 35664:return Ib;case 35665:return Fb;case 35666:return Bb;case 35674:return zb;case 35675:return kb;case 35676:return Vb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return jb;case 36294:return qb;case 36295:return $b;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Jb}}function tR(t,e){t.uniform1fv(this.addr,e)}function nR(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function iR(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function rR(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function sR(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oR(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aR(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lR(t,e){t.uniform1iv(this.addr,e)}function uR(t,e){t.uniform2iv(this.addr,e)}function cR(t,e){t.uniform3iv(this.addr,e)}function fR(t,e){t.uniform4iv(this.addr,e)}function dR(t,e){t.uniform1uiv(this.addr,e)}function hR(t,e){t.uniform2uiv(this.addr,e)}function pR(t,e){t.uniform3uiv(this.addr,e)}function mR(t,e){t.uniform4uiv(this.addr,e)}function _R(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||My,s[o])}function gR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||wy,s[o])}function vR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ay,s[o])}function yR(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ty,s[o])}function xR(t){switch(t){case 5126:return tR;case 35664:return nR;case 35665:return iR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return aR;case 5124:case 35670:return lR;case 35667:case 35671:return uR;case 35668:case 35672:return cR;case 35669:case 35673:return fR;case 5125:return dR;case 36294:return hR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return _R;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return yR}}class SR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=eR(n.type)}}class ER{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=xR(n.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const of=/(\w+)(\])?(\[|\.)?/g;function S_(t,e){t.seq.push(e),t.map[e.id]=e}function TR(t,e,n){const i=t.name,r=i.length;for(of.lastIndex=0;;){const s=of.exec(i),o=of.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){S_(n,u===void 0?new SR(a,t,e):new ER(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new MR(a),S_(n,h)),n=h}}}class kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);TR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function E_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let wR=0;function AR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bR(t){switch(t){case oi:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function M_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+AR(t.getShaderSource(e),o)}else return r}function RR(t,e){const n=bR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function CR(t,e){let n;switch(e){case IT:n="Linear";break;case FT:n="Reinhard";break;case BT:n="OptimizedCineon";break;case zT:n="ACESFilmic";break;case kT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Uo).join(`
`)}function LR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Uo(t){return t!==""}function T_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(t){return t.replace(UR,NR)}const OR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NR(t,e){let n=Le[e];if(n===void 0){const i=OR.get(e);if(i!==void 0)n=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(t){return t.replace(IR,FR)}function FR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function b_(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function zR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function VR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ey:e="ENVMAP_BLENDING_MULTIPLY";break;case OT:e="ENVMAP_BLENDING_MIX";break;case NT:e="ENVMAP_BLENDING_ADD";break}return e}function HR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=BR(n),u=zR(n),f=kR(n),h=VR(n),d=HR(n),m=n.isWebGL2?"":PR(n),y=LR(s),v=r.createProgram();let p,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Uo).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Uo).join(`
`),c.length>0&&(c+=`
`)):(p=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),c=[m,b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Le.tonemapping_pars_fragment:"",n.toneMapping!==bi?CR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,RR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),o=vd(o),o=T_(o,n),o=w_(o,n),a=vd(a),a=T_(a,n),a=w_(a,n),o=A_(o),a=A_(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+p+o,x=g+c+a,M=E_(r,r.VERTEX_SHADER,_),R=E_(r,r.FRAGMENT_SHADER,x);if(r.attachShader(v,M),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(v).trim(),w=r.getShaderInfoLog(M).trim(),Y=r.getShaderInfoLog(R).trim();let Q=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,R);else{const H=M_(r,M,"vertex"),W=M_(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+H+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||Y==="")&&(F=!1);F&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:w,prefix:p},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(M),r.deleteShader(R);let b;this.getUniforms=function(){return b===void 0&&(b=new kl(r,v)),b};let L;return this.getAttributes=function(){return L===void 0&&(L=DR(r,v)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=R,this}let WR=0;class XR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jR(e),n.set(e,i)),i}}class jR{constructor(e){this.id=WR++,this.code=e,this.usedTimes=0}}function qR(t,e,n,i,r,s,o){const a=new py,l=new XR,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,w,Y,Q,F){const H=Q.fog,W=F.geometry,K=S.isMeshStandardMaterial?Q.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),P=q&&q.mapping===Xu?q.image.height:null,V=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,U=B!==void 0?B.length:0;let I=0;W.morphAttributes.position!==void 0&&(I=1),W.morphAttributes.normal!==void 0&&(I=2),W.morphAttributes.color!==void 0&&(I=3);let se,ie,ce,me;if(V){const qn=Zn[V];se=qn.vertexShader,ie=qn.fragmentShader}else se=S.vertexShader,ie=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const Me=t.getRenderTarget(),Se=F.isInstancedMesh===!0,Xe=!!S.map,$t=!!S.matcap,Fe=!!q,O=!!S.aoMap,Dt=!!S.lightMap,Ee=!!S.bumpMap,Ce=!!S.normalMap,be=!!S.displacementMap,tt=!!S.emissiveMap,ze=!!S.metalnessMap,Ue=!!S.roughnessMap,qe=S.anisotropy>0,At=S.clearcoat>0,Ut=S.iridescence>0,A=S.sheen>0,E=S.transmission>0,X=qe&&!!S.anisotropyMap,J=At&&!!S.clearcoatMap,ee=At&&!!S.clearcoatNormalMap,ae=At&&!!S.clearcoatRoughnessMap,_e=Ut&&!!S.iridescenceMap,le=Ut&&!!S.iridescenceThicknessMap,$=A&&!!S.sheenColorMap,ge=A&&!!S.sheenRoughnessMap,ve=!!S.specularMap,xe=!!S.specularColorMap,he=!!S.specularIntensityMap,pe=E&&!!S.transmissionMap,Ne=E&&!!S.thicknessMap,Ye=!!S.gradientMap,C=!!S.alphaMap,oe=S.alphaTest>0,k=!!S.alphaHash,ne=!!S.extensions,ue=!!W.attributes.uv1,Ge=!!W.attributes.uv2,nt=!!W.attributes.uv3;return{isWebGL2:f,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:ie,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Se,instancingColor:Se&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:oi,map:Xe,matcap:$t,envMap:Fe,envMapMode:Fe&&q.mapping,envMapCubeUVHeight:P,aoMap:O,lightMap:Dt,bumpMap:Ee,normalMap:Ce,displacementMap:d&&be,emissiveMap:tt,normalMapObjectSpace:Ce&&S.normalMapType===ew,normalMapTangentSpace:Ce&&S.normalMapType===JT,metalnessMap:ze,roughnessMap:Ue,anisotropy:qe,anisotropyMap:X,clearcoat:At,clearcoatMap:J,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,iridescence:Ut,iridescenceMap:_e,iridescenceThicknessMap:le,sheen:A,sheenColorMap:$,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:xe,specularIntensityMap:he,transmission:E,transmissionMap:pe,thicknessMap:Ne,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===Hs,alphaMap:C,alphaTest:oe,alphaHash:k,combine:S.combine,mapUv:Xe&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:Dt&&v(S.lightMap.channel),bumpMapUv:Ee&&v(S.bumpMap.channel),normalMapUv:Ce&&v(S.normalMap.channel),displacementMapUv:be&&v(S.displacementMap.channel),emissiveMapUv:tt&&v(S.emissiveMap.channel),metalnessMapUv:ze&&v(S.metalnessMap.channel),roughnessMapUv:Ue&&v(S.roughnessMap.channel),anisotropyMapUv:X&&v(S.anisotropyMap.channel),clearcoatMapUv:J&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(S.sheenRoughnessMap.channel),specularMapUv:ve&&v(S.specularMap.channel),specularColorMapUv:xe&&v(S.specularColorMap.channel),specularIntensityMapUv:he&&v(S.specularIntensityMap.channel),transmissionMapUv:pe&&v(S.transmissionMap.channel),thicknessMapUv:Ne&&v(S.thicknessMap.channel),alphaMapUv:C&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ce||qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Ge,vertexUv3s:nt,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Xe||C),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:I,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:bi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xi,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)w.push(Y),w.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(g(w,S),_(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function g(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function x(S){const w=y[S.type];let Y;if(w){const Q=Zn[w];Y=Dw.clone(Q.uniforms)}else Y=S.uniforms;return Y}function M(S,w){let Y;for(let Q=0,F=u.length;Q<F;Q++){const H=u[Q];if(H.cacheKey===w){Y=H,++Y.usedTimes;break}}return Y===void 0&&(Y=new GR(t,w,S,s),u.push(Y)),Y}function R(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:x,acquireProgram:M,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:L}}function $R(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function YR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function R_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function C_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,y,v,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:y,renderOrder:h.renderOrder,z:v,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=y,c.renderOrder=h.renderOrder,c.z=v,c.group=p),e++,c}function a(h,d,m,y,v,p){const c=o(h,d,m,y,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,y,v,p){const c=o(h,d,m,y,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||YR),i.length>1&&i.sort(d||R_),r.length>1&&r.sort(d||R_)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function KR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new C_,t.set(i,[o])):r>=s.length?(o=new C_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function QR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JR=0;function eC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tC(t,e){const n=new ZR,i=QR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new z);const s=new z,o=new Pt,a=new Pt;function l(f,h){let d=0,m=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let v=0,p=0,c=0,g=0,_=0,x=0,M=0,R=0,b=0,L=0;f.sort(eC);const S=h===!0?Math.PI:1;for(let Y=0,Q=f.length;Y<Q;Y++){const F=f[Y],H=F.color,W=F.intensity,K=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=H.r*W*S,m+=H.g*W*S,y+=H.b*W*S;else if(F.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(F.sh.coefficients[P],W);else if(F.isDirectionalLight){const P=n.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity*S),F.castShadow){const V=F.shadow,B=i.get(F);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.directionalShadow[v]=B,r.directionalShadowMap[v]=q,r.directionalShadowMatrix[v]=F.shadow.matrix,x++}r.directional[v]=P,v++}else if(F.isSpotLight){const P=n.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(H).multiplyScalar(W*S),P.distance=K,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,r.spot[c]=P;const V=F.shadow;if(F.map&&(r.spotLightMap[b]=F.map,b++,V.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[c]=V.matrix,F.castShadow){const B=i.get(F);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.spotShadow[c]=B,r.spotShadowMap[c]=q,R++}c++}else if(F.isRectAreaLight){const P=n.get(F);P.color.copy(H).multiplyScalar(W),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),r.rectArea[g]=P,g++}else if(F.isPointLight){const P=n.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity*S),P.distance=F.distance,P.decay=F.decay,F.castShadow){const V=F.shadow,B=i.get(F);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,r.pointShadow[p]=B,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=F.shadow.matrix,M++}r.point[p]=P,p++}else if(F.isHemisphereLight){const P=n.get(F);P.skyColor.copy(F.color).multiplyScalar(W*S),P.groundColor.copy(F.groundColor).multiplyScalar(W*S),r.hemi[_]=P,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=y;const w=r.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==c||w.rectAreaLength!==g||w.hemiLength!==_||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==R||w.numSpotMaps!==b)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=g,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=R+b-L,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=L,w.directionalLength=v,w.pointLength=p,w.spotLength=c,w.rectAreaLength=g,w.hemiLength=_,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=R,w.numSpotMaps=b,r.version=JR++)}function u(f,h){let d=0,m=0,y=0,v=0,p=0;const c=h.matrixWorldInverse;for(let g=0,_=f.length;g<_;g++){const x=f[g];if(x.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(c),d++}else if(x.isSpotLight){const M=r.spot[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(c),y++}else if(x.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),a.identity(),o.copy(x.matrixWorld),o.premultiply(c),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),m++}else if(x.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function P_(t,e){const n=new tC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function nC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new P_(t,e),n.set(s,[l])):o>=a.length?(l=new P_(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class iC extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rC extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aC(t,e,n){let i=new Sy;const r=new $e,s=new $e,o=new Rt,a=new iC({depthPacking:QT}),l=new rC,u={},f=n.maxTextureSize,h={[fr]:rn,[rn]:fr,[xi]:xi},d=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:sC,fragmentShader:oC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new Kr;y.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ti(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let c=this.type;this.render=function(M,R,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(sr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=c!==mi&&this.type===mi,F=c===mi&&this.type!==mi;for(let H=0,W=M.length;H<W;H++){const K=M[H],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const P=q.getFrameExtents();if(r.multiply(P),s.copy(q.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/P.x),r.x=s.x*P.x,q.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/P.y),r.y=s.y*P.y,q.mapSize.y=s.y)),q.map===null||Q===!0||F===!0){const B=this.type!==mi?{minFilter:Wt,magFilter:Wt}:{};q.map!==null&&q.map.dispose(),q.map=new Wr(r.x,r.y,B),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const V=q.getViewportCount();for(let B=0;B<V;B++){const U=q.getViewport(B);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),Y.viewport(o),q.updateMatrices(K,B),i=q.getFrustum(),x(R,b,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===mi&&g(q,b),q.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(L,S,w)};function g(M,R){const b=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Wr(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(R,null,b,d,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(R,null,b,m,v,null)}function _(M,R,b,L){let S=null;const w=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)S=w;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=S.uuid,Q=R.uuid;let F=u[Y];F===void 0&&(F={},u[Y]=F);let H=F[Q];H===void 0&&(H=S.clone(),F[Q]=H),S=H}if(S.visible=R.visible,S.wireframe=R.wireframe,L===mi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=t.properties.get(S);Y.light=b}return S}function x(M,R,b,L,S){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===mi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const Q=e.update(M),F=M.material;if(Array.isArray(F)){const H=Q.groups;for(let W=0,K=H.length;W<K;W++){const q=H[W],P=F[q.materialIndex];if(P&&P.visible){const V=_(M,P,L,S);t.renderBufferDirect(b,null,Q,V,M,q)}}}else if(F.visible){const H=_(M,F,L,S);t.renderBufferDirect(b,null,Q,H,M,null)}}const Y=M.children;for(let Q=0,F=Y.length;Q<F;Q++)x(Y[Q],R,b,L,S)}}function lC(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const oe=new Rt;let k=null;const ne=new Rt(0,0,0,0);return{setMask:function(ue){k!==ue&&!C&&(t.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){C=ue},setClear:function(ue,Ge,nt,yt,qn){qn===!0&&(ue*=yt,Ge*=yt,nt*=yt),oe.set(ue,Ge,nt,yt),ne.equals(oe)===!1&&(t.clearColor(ue,Ge,nt,yt),ne.copy(oe))},reset:function(){C=!1,k=null,ne.set(-1,0,0,0)}}}function s(){let C=!1,oe=null,k=null,ne=null;return{setTest:function(ue){ue?Me(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!C&&(t.depthMask(ue),oe=ue)},setFunc:function(ue){if(k!==ue){switch(ue){case bT:t.depthFunc(t.NEVER);break;case RT:t.depthFunc(t.ALWAYS);break;case CT:t.depthFunc(t.LESS);break;case cd:t.depthFunc(t.LEQUAL);break;case PT:t.depthFunc(t.EQUAL);break;case LT:t.depthFunc(t.GEQUAL);break;case DT:t.depthFunc(t.GREATER);break;case UT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=ue}},setLocked:function(ue){C=ue},setClear:function(ue){ne!==ue&&(t.clearDepth(ue),ne=ue)},reset:function(){C=!1,oe=null,k=null,ne=null}}}function o(){let C=!1,oe=null,k=null,ne=null,ue=null,Ge=null,nt=null,yt=null,qn=null;return{setTest:function(ot){C||(ot?Me(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!C&&(t.stencilMask(ot),oe=ot)},setFunc:function(ot,$n,kt){(k!==ot||ne!==$n||ue!==kt)&&(t.stencilFunc(ot,$n,kt),k=ot,ne=$n,ue=kt)},setOp:function(ot,$n,kt){(Ge!==ot||nt!==$n||yt!==kt)&&(t.stencilOp(ot,$n,kt),Ge=ot,nt=$n,yt=kt)},setLocked:function(ot){C=ot},setClear:function(ot){qn!==ot&&(t.clearStencil(ot),qn=ot)},reset:function(){C=!1,oe=null,k=null,ne=null,ue=null,Ge=null,nt=null,yt=null,qn=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},m={},y=new WeakMap,v=[],p=null,c=!1,g=null,_=null,x=null,M=null,R=null,b=null,L=null,S=!1,w=null,Y=null,Q=null,F=null,H=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(P)[1]),K=q>=1):P.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),K=q>=2);let V=null,B={};const U=t.getParameter(t.SCISSOR_BOX),I=t.getParameter(t.VIEWPORT),se=new Rt().fromArray(U),ie=new Rt().fromArray(I);function ce(C,oe,k,ne){const ue=new Uint8Array(4),Ge=t.createTexture();t.bindTexture(C,Ge),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<k;nt++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Ge}const me={};me[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(t.DEPTH_TEST),l.setFunc(cd),be(!1),tt(mm),Me(t.CULL_FACE),Ee(sr);function Me(C){d[C]!==!0&&(t.enable(C),d[C]=!0)}function Se(C){d[C]!==!1&&(t.disable(C),d[C]=!1)}function Xe(C,oe){return m[C]!==oe?(t.bindFramebuffer(C,oe),m[C]=oe,i&&(C===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),C===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function $t(C,oe){let k=v,ne=!1;if(C)if(k=y.get(oe),k===void 0&&(k=[],y.set(oe,k)),C.isWebGLMultipleRenderTargets){const ue=C.texture;if(k.length!==ue.length||k[0]!==t.COLOR_ATTACHMENT0){for(let Ge=0,nt=ue.length;Ge<nt;Ge++)k[Ge]=t.COLOR_ATTACHMENT0+Ge;k.length=ue.length,ne=!0}}else k[0]!==t.COLOR_ATTACHMENT0&&(k[0]=t.COLOR_ATTACHMENT0,ne=!0);else k[0]!==t.BACK&&(k[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Fe(C){return p!==C?(t.useProgram(C),p=C,!0):!1}const O={[_s]:t.FUNC_ADD,[_T]:t.FUNC_SUBTRACT,[gT]:t.FUNC_REVERSE_SUBTRACT};if(i)O[ym]=t.MIN,O[xm]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(O[ym]=C.MIN_EXT,O[xm]=C.MAX_EXT)}const Dt={[vT]:t.ZERO,[yT]:t.ONE,[xT]:t.SRC_COLOR,[Q0]:t.SRC_ALPHA,[AT]:t.SRC_ALPHA_SATURATE,[TT]:t.DST_COLOR,[ET]:t.DST_ALPHA,[ST]:t.ONE_MINUS_SRC_COLOR,[J0]:t.ONE_MINUS_SRC_ALPHA,[wT]:t.ONE_MINUS_DST_COLOR,[MT]:t.ONE_MINUS_DST_ALPHA};function Ee(C,oe,k,ne,ue,Ge,nt,yt){if(C===sr){c===!0&&(Se(t.BLEND),c=!1);return}if(c===!1&&(Me(t.BLEND),c=!0),C!==mT){if(C!==g||yt!==S){if((_!==_s||R!==_s)&&(t.blendEquation(t.FUNC_ADD),_=_s,R=_s),yt)switch(C){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _m:t.blendFunc(t.ONE,t.ONE);break;case gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _m:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,M=null,b=null,L=null,g=C,S=yt}return}ue=ue||oe,Ge=Ge||k,nt=nt||ne,(oe!==_||ue!==R)&&(t.blendEquationSeparate(O[oe],O[ue]),_=oe,R=ue),(k!==x||ne!==M||Ge!==b||nt!==L)&&(t.blendFuncSeparate(Dt[k],Dt[ne],Dt[Ge],Dt[nt]),x=k,M=ne,b=Ge,L=nt),g=C,S=!1}function Ce(C,oe){C.side===xi?Se(t.CULL_FACE):Me(t.CULL_FACE);let k=C.side===rn;oe&&(k=!k),be(k),C.blending===Hs&&C.transparent===!1?Ee(sr):Ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ne=C.stencilWrite;u.setTest(ne),ne&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(C){w!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),w=C)}function tt(C){C!==dT?(Me(t.CULL_FACE),C!==Y&&(C===mm?t.cullFace(t.BACK):C===hT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),Y=C}function ze(C){C!==Q&&(K&&t.lineWidth(C),Q=C)}function Ue(C,oe,k){C?(Me(t.POLYGON_OFFSET_FILL),(F!==oe||H!==k)&&(t.polygonOffset(oe,k),F=oe,H=k)):Se(t.POLYGON_OFFSET_FILL)}function qe(C){C?Me(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function At(C){C===void 0&&(C=t.TEXTURE0+W-1),V!==C&&(t.activeTexture(C),V=C)}function Ut(C,oe,k){k===void 0&&(V===null?k=t.TEXTURE0+W-1:k=V);let ne=B[k];ne===void 0&&(ne={type:void 0,texture:void 0},B[k]=ne),(ne.type!==C||ne.texture!==oe)&&(V!==k&&(t.activeTexture(k),V=k),t.bindTexture(C,oe||me[C]),ne.type=C,ne.texture=oe)}function A(){const C=B[V];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(C){se.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function he(C){ie.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function pe(C,oe){let k=h.get(oe);k===void 0&&(k=new WeakMap,h.set(oe,k));let ne=k.get(C);ne===void 0&&(ne=t.getUniformBlockIndex(oe,C.name),k.set(C,ne))}function Ne(C,oe){const ne=h.get(oe).get(C);f.get(oe)!==ne&&(t.uniformBlockBinding(oe,ne,C.__bindingPointIndex),f.set(oe,ne))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},V=null,B={},m={},y=new WeakMap,v=[],p=null,c=!1,g=null,_=null,x=null,M=null,R=null,b=null,L=null,S=!1,w=null,Y=null,Q=null,F=null,H=null,se.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:Se,bindFramebuffer:Xe,drawBuffers:$t,useProgram:Fe,setBlending:Ee,setMaterial:Ce,setFlipSided:be,setCullFace:tt,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:qe,activeTexture:At,bindTexture:Ut,unbindTexture:A,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:ge,texImage3D:ve,updateUBOMapping:pe,uniformBlockBinding:Ne,texStorage2D:le,texStorage3D:$,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:_e,scissor:xe,viewport:he,reset:Ye}}function uC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return c?new OffscreenCanvas(A,E):Su("canvas")}function _(A,E,X,J){let ee=1;if((A.width>J||A.height>J)&&(ee=J/Math.max(A.width,A.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=E?gd:Math.floor,_e=ae(ee*A.width),le=ae(ee*A.height);v===void 0&&(v=g(_e,le));const $=X?g(_e,le):v;return $.width=_e,$.height=le,$.getContext("2d").drawImage(A,0,0,_e,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+le+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return qm(A.width)&&qm(A.height)}function M(A){return a?!1:A.wrapS!==zn||A.wrapT!==zn||A.minFilter!==Wt&&A.minFilter!==xn}function R(A,E){return A.generateMipmaps&&E&&A.minFilter!==Wt&&A.minFilter!==xn}function b(A){t.generateMipmap(A)}function L(A,E,X,J,ee=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=E;return E===t.RED&&(X===t.FLOAT&&(ae=t.R32F),X===t.HALF_FLOAT&&(ae=t.R16F),X===t.UNSIGNED_BYTE&&(ae=t.R8)),E===t.RG&&(X===t.FLOAT&&(ae=t.RG32F),X===t.HALF_FLOAT&&(ae=t.RG16F),X===t.UNSIGNED_BYTE&&(ae=t.RG8)),E===t.RGBA&&(X===t.FLOAT&&(ae=t.RGBA32F),X===t.HALF_FLOAT&&(ae=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ae=J===De&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(A,E,X){return R(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===Wt||A===Sm||A===Lc?t.NEAREST:t.LINEAR}function Y(A){const E=A.target;E.removeEventListener("dispose",Y),F(E),E.isVideoTexture&&y.delete(E)}function Q(A){const E=A.target;E.removeEventListener("dispose",Q),W(E)}function F(A){const E=i.get(A);if(E.__webglInit===void 0)return;const X=A.source,J=p.get(X);if(J){const ee=J[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&H(A),Object.keys(J).length===0&&p.delete(X)}i.remove(A)}function H(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const X=A.source,J=p.get(X);delete J[E.__cacheKey],o.memory.textures--}function W(A){const E=A.texture,X=i.get(A),J=i.get(E);if(J.__webglTexture!==void 0&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer(X.__webglFramebuffer[ee]),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ee=0;ee<X.__webglColorRenderbuffer.length;ee++)X.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[ee]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,ae=E.length;ee<ae;ee++){const _e=i.get(E[ee]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(A)}let K=0;function q(){K=0}function P(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function V(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){const X=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(X,A,E);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+E)}function U(A,E){const X=i.get(A);if(A.version>0&&X.__version!==A.version){Xe(X,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+E)}function I(A,E){const X=i.get(A);if(A.version>0&&X.__version!==A.version){Xe(X,A,E);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+E)}function se(A,E){const X=i.get(A);if(A.version>0&&X.__version!==A.version){$t(X,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+E)}const ie={[hd]:t.REPEAT,[zn]:t.CLAMP_TO_EDGE,[pd]:t.MIRRORED_REPEAT},ce={[Wt]:t.NEAREST,[Sm]:t.NEAREST_MIPMAP_NEAREST,[Lc]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[VT]:t.LINEAR_MIPMAP_NEAREST,[ha]:t.LINEAR_MIPMAP_LINEAR},me={[nw]:t.NEVER,[uw]:t.ALWAYS,[iw]:t.LESS,[sw]:t.LEQUAL,[rw]:t.EQUAL,[lw]:t.GEQUAL,[ow]:t.GREATER,[aw]:t.NOTEQUAL};function Me(A,E,X){if(X?(t.texParameteri(A,t.TEXTURE_WRAP_S,ie[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ie[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ie[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ce[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ce[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==zn||E.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Wt||E.minFilter!==Lc&&E.minFilter!==ha||E.type===$i&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Se(A,E){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",Y));const J=E.source;let ee=p.get(J);ee===void 0&&(ee={},p.set(J,ee));const ae=V(E);if(ae!==A.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[ae].usedTimes++;const _e=ee[A.__cacheKey];_e!==void 0&&(ee[A.__cacheKey].usedTimes--,_e.usedTimes===0&&H(E)),A.__cacheKey=ae,A.__webglTexture=ee[ae].texture}return X}function Xe(A,E,X){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const ee=Se(A,E),ae=E.source;n.bindTexture(J,A.__webglTexture,t.TEXTURE0+X);const _e=i.get(ae);if(ae.version!==_e.__version||ee===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=M(E)&&x(E.image)===!1;let $=_(E.image,le,!1,f);$=Ut(E,$);const ge=x($)||a,ve=s.convert(E.format,E.colorSpace);let xe=s.convert(E.type),he=L(E.internalFormat,ve,xe,E.colorSpace);Me(J,E,ge);let pe;const Ne=E.mipmaps,Ye=a&&E.isVideoTexture!==!0,C=_e.__version===void 0||ee===!0,oe=S(E,$,ge);if(E.isDepthTexture)he=t.DEPTH_COMPONENT,a?E.type===$i?he=t.DEPTH_COMPONENT32F:E.type===qi?he=t.DEPTH_COMPONENT24:E.type===Ur?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:E.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Or&&he===t.DEPTH_COMPONENT&&E.type!==Mh&&E.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=qi,xe=s.convert(E.type)),E.format===ro&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ur,xe=s.convert(E.type))),C&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,he,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,he,$.width,$.height,0,ve,xe,null));else if(E.isDataTexture)if(Ne.length>0&&ge){Ye&&C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Ne[0].width,Ne[0].height);for(let k=0,ne=Ne.length;k<ne;k++)pe=Ne[k],Ye?n.texSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,xe,pe.data):n.texImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,ve,xe,pe.data);E.generateMipmaps=!1}else Ye?(C&&n.texStorage2D(t.TEXTURE_2D,oe,he,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,ve,xe,$.data)):n.texImage2D(t.TEXTURE_2D,0,he,$.width,$.height,0,ve,xe,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,he,Ne[0].width,Ne[0].height,$.depth);for(let k=0,ne=Ne.length;k<ne;k++)pe=Ne[k],E.format!==kn?ve!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,$.depth,ve,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,he,pe.width,pe.height,$.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,pe.width,pe.height,$.depth,ve,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,he,pe.width,pe.height,$.depth,0,ve,xe,pe.data)}else{Ye&&C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Ne[0].width,Ne[0].height);for(let k=0,ne=Ne.length;k<ne;k++)pe=Ne[k],E.format!==kn?ve!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,k,0,0,pe.width,pe.height,ve,xe,pe.data):n.texImage2D(t.TEXTURE_2D,k,he,pe.width,pe.height,0,ve,xe,pe.data)}else if(E.isDataArrayTexture)Ye?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,he,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ve,xe,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,ve,xe,$.data);else if(E.isData3DTexture)Ye?(C&&n.texStorage3D(t.TEXTURE_3D,oe,he,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ve,xe,$.data)):n.texImage3D(t.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,ve,xe,$.data);else if(E.isFramebufferTexture){if(C)if(Ye)n.texStorage2D(t.TEXTURE_2D,oe,he,$.width,$.height);else{let k=$.width,ne=$.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,he,k,ne,0,ve,xe,null),k>>=1,ne>>=1}}else if(Ne.length>0&&ge){Ye&&C&&n.texStorage2D(t.TEXTURE_2D,oe,he,Ne[0].width,Ne[0].height);for(let k=0,ne=Ne.length;k<ne;k++)pe=Ne[k],Ye?n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve,xe,pe):n.texImage2D(t.TEXTURE_2D,k,he,ve,xe,pe);E.generateMipmaps=!1}else Ye?(C&&n.texStorage2D(t.TEXTURE_2D,oe,he,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,xe,$)):n.texImage2D(t.TEXTURE_2D,0,he,ve,xe,$);R(E,ge)&&b(J),_e.__version=ae.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function $t(A,E,X){if(E.image.length!==6)return;const J=Se(A,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+X);const ae=i.get(ee);if(ee.version!==ae.__version||J===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,$=[];for(let k=0;k<6;k++)!_e&&!le?$[k]=_(E.image[k],!1,!0,u):$[k]=le?E.image[k].image:E.image[k],$[k]=Ut(E,$[k]);const ge=$[0],ve=x(ge)||a,xe=s.convert(E.format,E.colorSpace),he=s.convert(E.type),pe=L(E.internalFormat,xe,he,E.colorSpace),Ne=a&&E.isVideoTexture!==!0,Ye=ae.__version===void 0||J===!0;let C=S(E,ge,ve);Me(t.TEXTURE_CUBE_MAP,E,ve);let oe;if(_e){Ne&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,C,pe,ge.width,ge.height);for(let k=0;k<6;k++){oe=$[k].mipmaps;for(let ne=0;ne<oe.length;ne++){const ue=oe[ne];E.format!==kn?xe!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,ue.width,ue.height,xe,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,ue.width,ue.height,xe,he,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,pe,ue.width,ue.height,0,xe,he,ue.data)}}}else{oe=E.mipmaps,Ne&&Ye&&(oe.length>0&&C++,n.texStorage2D(t.TEXTURE_CUBE_MAP,C,pe,$[0].width,$[0].height));for(let k=0;k<6;k++)if(le){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,$[k].width,$[k].height,xe,he,$[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,pe,$[k].width,$[k].height,0,xe,he,$[k].data);for(let ne=0;ne<oe.length;ne++){const Ge=oe[ne].image[k].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,Ge.width,Ge.height,xe,he,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,pe,Ge.width,Ge.height,0,xe,he,Ge.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,xe,he,$[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,pe,xe,he,$[k]);for(let ne=0;ne<oe.length;ne++){const ue=oe[ne];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,xe,he,ue.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,pe,xe,he,ue.image[k])}}}R(E,ve)&&b(t.TEXTURE_CUBE_MAP),ae.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Fe(A,E,X,J,ee){const ae=s.convert(X.format,X.colorSpace),_e=s.convert(X.type),le=L(X.internalFormat,ae,_e,X.colorSpace);i.get(E).__hasExternalTextures||(ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,le,E.width,E.height,E.depth,0,ae,_e,null):n.texImage2D(ee,0,le,E.width,E.height,0,ae,_e,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),qe(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,0,Ue(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(A,E,X){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let J=t.DEPTH_COMPONENT16;if(X||qe(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===$i?J=t.DEPTH_COMPONENT32F:ee.type===qi&&(J=t.DEPTH_COMPONENT24));const ae=Ue(E);qe(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,J,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,J,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const J=Ue(E);X&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,E.width,E.height):qe(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const J=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<J.length;ee++){const ae=J[ee],_e=s.convert(ae.format,ae.colorSpace),le=s.convert(ae.type),$=L(ae.internalFormat,_e,le,ae.colorSpace),ge=Ue(E);X&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,$,E.width,E.height):qe(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,$,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,$,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,ee=Ue(E);if(E.depthTexture.format===Or)qe(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===ro)qe(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const E=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Dt(E.__webglFramebuffer,A)}else if(X){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=t.createRenderbuffer(),O(E.__webglDepthbuffer[J],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),O(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,E,X){const J=i.get(A);E!==void 0&&Fe(J.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),X!==void 0&&Ee(A)}function be(A){const E=A.texture,X=i.get(A),J=i.get(E);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,_e=x(A)||a;if(ee){X.__webglFramebuffer=[];for(let le=0;le<6;le++)X.__webglFramebuffer[le]=t.createFramebuffer()}else{if(X.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const le=A.texture;for(let $=0,ge=le.length;$<ge;$++){const ve=i.get(le[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&qe(A)===!1){const le=ae?E:[E];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<le.length;$++){const ge=le[$];X.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[$]);const ve=s.convert(ge.format,ge.colorSpace),xe=s.convert(ge.type),he=L(ge.internalFormat,ve,xe,ge.colorSpace,A.isXRRenderTarget===!0),pe=Ue(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,X.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),O(X.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Me(t.TEXTURE_CUBE_MAP,E,_e);for(let le=0;le<6;le++)Fe(X.__webglFramebuffer[le],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le);R(E,_e)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const le=A.texture;for(let $=0,ge=le.length;$<ge;$++){const ve=le[$],xe=i.get(ve);n.bindTexture(t.TEXTURE_2D,xe.__webglTexture),Me(t.TEXTURE_2D,ve,_e),Fe(X.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D),R(ve,_e)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,J.__webglTexture),Me(le,E,_e),Fe(X.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,le),R(E,_e)&&b(le),n.unbindTexture()}A.depthBuffer&&Ee(A)}function tt(A){const E=x(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,ee=X.length;J<ee;J++){const ae=X[J];if(R(ae,E)){const _e=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ae).__webglTexture;n.bindTexture(_e,le),b(_e),n.unbindTexture()}}}function ze(A){if(a&&A.samples>0&&qe(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,J=A.height;let ee=t.COLOR_BUFFER_BIT;const ae=[],_e=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){ae.push(t.COLOR_ATTACHMENT0+ge),A.depthBuffer&&ae.push(_e);const ve=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),$&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ge]),ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),$){const xe=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,X,J,0,0,X,J,ee,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,le.__webglColorRenderbuffer[ge]);const ve=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ue(A){return Math.min(h,A.samples)}function qe(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(A){const E=o.render.frame;y.get(A)!==E&&(y.set(A,E),A.update())}function Ut(A,E){const X=A.colorSpace,J=A.format,ee=A.type;return A.isCompressedTexture===!0||A.format===md||X!==oi&&X!==Ir&&(X===De?a===!1?e.has("EXT_sRGB")===!0&&J===kn?(A.format=md,A.minFilter=xn,A.generateMipmaps=!1):E=fy.sRGBToLinear(E):(J!==kn||ee!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=se,this.rebindTextures=Ce,this.setupRenderTarget=be,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=qe}function cC(t,e,n){const i=n.isWebGL2;function r(s,o=Ir){let a;if(s===or)return t.UNSIGNED_BYTE;if(s===iy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===ry)return t.UNSIGNED_SHORT_5_5_5_1;if(s===HT)return t.BYTE;if(s===GT)return t.SHORT;if(s===Mh)return t.UNSIGNED_SHORT;if(s===ny)return t.INT;if(s===qi)return t.UNSIGNED_INT;if(s===$i)return t.FLOAT;if(s===pa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===WT)return t.ALPHA;if(s===kn)return t.RGBA;if(s===XT)return t.LUMINANCE;if(s===jT)return t.LUMINANCE_ALPHA;if(s===Or)return t.DEPTH_COMPONENT;if(s===ro)return t.DEPTH_STENCIL;if(s===md)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qT)return t.RED;if(s===sy)return t.RED_INTEGER;if(s===$T)return t.RG;if(s===oy)return t.RG_INTEGER;if(s===ay)return t.RGBA_INTEGER;if(s===Dc||s===Uc||s===Oc||s===Nc)if(o===De)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Dc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Dc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Em||s===Mm||s===Tm||s===wm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Em)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===YT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Am||s===bm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Am)return o===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rm||s===Cm||s===Pm||s===Lm||s===Dm||s===Um||s===Om||s===Nm||s===Im||s===Fm||s===Bm||s===zm||s===km||s===Vm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Um)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Om)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Im)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===km)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vm)return o===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ic)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ic)return o===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===KT||s===Hm||s===Gm||s===Wm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ic)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Hm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class fC extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dC={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,y=.005;u.inputState.pinching&&d>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class hC extends dn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:Or,f!==Or&&f!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Or&&(i=qi),i===void 0&&f===ro&&(i=Ur),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pC extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,y=null;const v=n.getContextAttributes();let p=null,c=null;const g=[],_=[],x=new Sn;x.layers.enable(1),x.viewport=new Rt;const M=new Sn;M.layers.enable(2),M.viewport=new Rt;const R=[x,M],b=new fC;b.layers.enable(1),b.layers.enable(2);let L=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let I=g[U];return I===void 0&&(I=new af,g[U]=I),I.getTargetRaySpace()},this.getControllerGrip=function(U){let I=g[U];return I===void 0&&(I=new af,g[U]=I),I.getGripSpace()},this.getHand=function(U){let I=g[U];return I===void 0&&(I=new af,g[U]=I),I.getHandSpace()};function w(U){const I=_.indexOf(U.inputSource);if(I===-1)return;const se=g[I];se!==void 0&&(se.update(U.inputSource,U.frame,u||o),se.dispatchEvent({type:U.type,data:U.inputSource}))}function Y(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Q);for(let U=0;U<g.length;U++){const I=_[U];I!==null&&(_[U]=null,g[U].disconnect(I))}L=null,S=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,c=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,I),r.updateRenderState({baseLayer:m}),c=new Wr(m.framebufferWidth,m.framebufferHeight,{format:kn,type:or,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let I=null,se=null,ie=null;v.depth&&(ie=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,I=v.stencil?ro:Or,se=v.stencil?Ur:qi);const ce={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),c=new Wr(d.textureWidth,d.textureHeight,{format:kn,type:or,depthTexture:new hC(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const me=e.properties.get(c);me.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(U){for(let I=0;I<U.removed.length;I++){const se=U.removed[I],ie=_.indexOf(se);ie>=0&&(_[ie]=null,g[ie].disconnect(se))}for(let I=0;I<U.added.length;I++){const se=U.added[I];let ie=_.indexOf(se);if(ie===-1){for(let me=0;me<g.length;me++)if(me>=_.length){_.push(se),ie=me;break}else if(_[me]===null){_[me]=se,ie=me;break}if(ie===-1)break}const ce=g[ie];ce&&ce.connect(se)}}const F=new z,H=new z;function W(U,I,se){F.setFromMatrixPosition(I.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);const ie=F.distanceTo(H),ce=I.projectionMatrix.elements,me=se.projectionMatrix.elements,Me=ce[14]/(ce[10]-1),Se=ce[14]/(ce[10]+1),Xe=(ce[9]+1)/ce[5],$t=(ce[9]-1)/ce[5],Fe=(ce[8]-1)/ce[0],O=(me[8]+1)/me[0],Dt=Me*Fe,Ee=Me*O,Ce=ie/(-Fe+O),be=Ce*-Fe;I.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(be),U.translateZ(Ce),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const tt=Me+Ce,ze=Se+Ce,Ue=Dt-be,qe=Ee+(ie-be),At=Xe*Se/ze*tt,Ut=$t*Se/ze*tt;U.projectionMatrix.makePerspective(Ue,qe,At,Ut,tt,ze),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function K(U,I){I===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(I.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;b.near=M.near=x.near=U.near,b.far=M.far=x.far=U.far,(L!==b.near||S!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,S=b.far);const I=U.parent,se=b.cameras;K(b,I);for(let ie=0;ie<se.length;ie++)K(se[ie],I);se.length===2?W(b,x,M):b.projectionMatrix.copy(x.projectionMatrix),q(U,b,I)};function q(U,I,se){se===null?U.matrix.copy(I.matrixWorld):(U.matrix.copy(se.matrixWorld),U.matrix.invert(),U.matrix.multiply(I.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const ie=U.children;for(let ce=0,me=ie.length;ce<me;ce++)ie[ce].updateMatrixWorld(!0);U.projectionMatrix.copy(I.projectionMatrix),U.projectionMatrixInverse.copy(I.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=_d*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let P=null;function V(U,I){if(f=I.getViewerPose(u||o),y=I,f!==null){const se=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ie=!1;se.length!==b.cameras.length&&(b.cameras.length=0,ie=!0);for(let ce=0;ce<se.length;ce++){const me=se[ce];let Me=null;if(m!==null)Me=m.getViewport(me);else{const Xe=h.getViewSubImage(d,me);Me=Xe.viewport,ce===0&&(e.setRenderTargetTextures(c,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(c))}let Se=R[ce];Se===void 0&&(Se=new Sn,Se.layers.enable(ce),Se.viewport=new Rt,R[ce]=Se),Se.matrix.fromArray(me.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(me.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Me.x,Me.y,Me.width,Me.height),ce===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ie===!0&&b.cameras.push(Se)}}for(let se=0;se<g.length;se++){const ie=_[se],ce=g[se];ie!==null&&ce!==void 0&&ce.update(ie,I,u||o)}P&&P(U,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),y=null}const B=new Ey;B.setAnimationLoop(V),this.setAnimationLoop=function(U){P=U},this.dispose=function(){}}}function mC(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,vy(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,_,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,x)):c.isMeshMatcapMaterial?(s(p,c),y(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,_):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===rn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===rn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const _=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*_,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=_*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===rn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _C(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function u(g,_){let x=r[g.id];x===void 0&&(y(g),x=f(g),r[g.id]=x,g.addEventListener("dispose",p));const M=_.program;i.updateUBOMapping(g,M);const R=e.render.frame;s[g.id]!==R&&(d(g),s[g.id]=R)}function f(g){const _=h();g.__bindingPointIndex=_;const x=t.createBuffer(),M=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],x=g.uniforms,M=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,b=x.length;R<b;R++){const L=x[R];if(m(L,R,M)===!0){const S=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Q=0;Q<w.length;Q++){const F=w[Q],H=v(F);typeof F=="number"?(L.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,S+Y,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=F.elements[0],L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=F.elements[0],L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=F.elements[0]):(F.toArray(L.__data,Y),Y+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,x){const M=g.value;if(x[_]===void 0){if(typeof M=="number")x[_]=M;else{const R=Array.isArray(M)?M:[M],b=[];for(let L=0;L<R.length;L++)b.push(R[L].clone());x[_]=b}return!0}else if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const R=Array.isArray(x[_])?x[_]:[x[_]],b=Array.isArray(M)?M:[M];for(let L=0;L<R.length;L++){const S=R[L];if(S.equals(b[L])===!1)return S.copy(b[L]),!0}}return!1}function y(g){const _=g.uniforms;let x=0;const M=16;let R=0;for(let b=0,L=_.length;b<L;b++){const S=_[b],w={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,F=Y.length;Q<F;Q++){const H=Y[Q],W=v(H);w.boundary+=W.boundary,w.storage+=W.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,b>0){R=x%M;const Q=M-R;R!==0&&Q-w.boundary<0&&(x+=M-R,S.__offset=x)}x+=w.storage}return R=x%M,R>0&&(x+=M-R),g.__size=x,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function gC(){const t=Su("canvas");return t.style.display="block",t}class by{constructor(e={}){const{canvas:n=gC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),y=new Int32Array(4);let v=null,p=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let x=!1,M=0,R=0,b=null,L=-1,S=null;const w=new Rt,Y=new Rt;let Q=null;const F=new Qe(0);let H=0,W=n.width,K=n.height,q=1,P=null,V=null;const B=new Rt(0,0,W,K),U=new Rt(0,0,W,K);let I=!1;const se=new Sy;let ie=!1,ce=!1,me=null;const Me=new Pt,Se=new $e,Xe=new z,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return b===null?q:1}let O=i;function Dt(T,N){for(let G=0;G<T.length;G++){const D=T[G],j=n.getContext(D,N);if(j!==null)return j}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",ne,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),O=Dt(N,T),O===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Ce,be,tt,ze,Ue,qe,At,Ut,A,E,X,J,ee,ae,_e,le,$,ge,ve,xe,he,pe,Ne;function Ye(){Ee=new bb(O),Ce=new xb(O,Ee,e),Ee.init(Ce),he=new cC(O,Ee,Ce),be=new lC(O,Ee,Ce),tt=new Pb(O),ze=new $R,Ue=new uC(O,Ee,be,ze,Ce,he,tt),qe=new Eb(_),At=new Ab(_),Ut=new zw(O,Ce),pe=new vb(O,Ee,Ut,Ce),A=new Rb(O,Ut,tt,pe),E=new Ob(O,A,Ut,tt),ge=new Ub(O,Ce,Ue),_e=new Sb(ze),X=new qR(_,qe,At,Ee,Ce,pe,_e),J=new mC(_,ze),ee=new KR,ae=new nC(Ee,Ce),$=new gb(_,qe,At,be,E,d,l),le=new aC(_,E,Ce),Ne=new _C(O,tt,Ce,be),ve=new yb(O,Ee,tt,Ce),xe=new Cb(O,Ee,tt,Ce),tt.programs=X.programs,_.capabilities=Ce,_.extensions=Ee,_.properties=ze,_.renderLists=ee,_.shadowMap=le,_.state=be,_.info=tt}Ye();const C=new pC(_,O);this.xr=C,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(W,K,!1))},this.getSize=function(T){return T.set(W,K)},this.setSize=function(T,N,G=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,K=N,n.width=Math.floor(T*q),n.height=Math.floor(N*q),G===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*q,K*q).floor()},this.setDrawingBufferSize=function(T,N,G){W=T,K=N,q=G,n.width=Math.floor(T*G),n.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,N,G,D){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,N,G,D),be.viewport(w.copy(B).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,N,G,D){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,N,G,D),be.scissor(Y.copy(U).multiplyScalar(q).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){be.setScissorTest(I=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(T=!0,N=!0,G=!0){let D=0;if(T){let j=!1;if(b!==null){const de=b.texture.format;j=de===ay||de===oy||de===sy}if(j){const de=b.texture.type,ye=de===or||de===qi||de===Mh||de===Ur||de===iy||de===ry,Te=$.getClearColor(),Ae=$.getClearAlpha(),Ie=Te.r,Re=Te.g,Pe=Te.b;ye?(m[0]=Ie,m[1]=Re,m[2]=Pe,m[3]=Ae,O.clearBufferuiv(O.COLOR,0,m)):(y[0]=Ie,y[1]=Re,y[2]=Pe,y[3]=Ae,O.clearBufferiv(O.COLOR,0,y))}else D|=O.COLOR_BUFFER_BIT}N&&(D|=O.DEPTH_BUFFER_BIT),G&&(D|=O.STENCIL_BUFFER_BIT),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),ae.dispose(),ze.dispose(),qe.dispose(),At.dispose(),E.dispose(),pe.dispose(),Ne.dispose(),X.dispose(),C.dispose(),C.removeEventListener("sessionstart",ot),C.removeEventListener("sessionend",$n),me&&(me.dispose(),me=null),kt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=tt.autoReset,N=le.enabled,G=le.autoUpdate,D=le.needsUpdate,j=le.type;Ye(),tt.autoReset=T,le.enabled=N,le.autoUpdate=G,le.needsUpdate=D,le.type=j}function ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const N=T.target;N.removeEventListener("dispose",ue),Ge(N)}function Ge(T){nt(T),ze.remove(T)}function nt(T){const N=ze.get(T).programs;N!==void 0&&(N.forEach(function(G){X.releaseProgram(G)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,D,j,de){N===null&&(N=$t);const ye=j.isMesh&&j.matrixWorld.determinant()<0,Te=Cy(T,N,G,D,j);be.setMaterial(D,ye);let Ae=G.index,Ie=1;D.wireframe===!0&&(Ae=A.getWireframeAttribute(G),Ie=2);const Re=G.drawRange,Pe=G.attributes.position;let at=Re.start*Ie,ut=(Re.start+Re.count)*Ie;de!==null&&(at=Math.max(at,de.start*Ie),ut=Math.min(ut,(de.start+de.count)*Ie)),Ae!==null?(at=Math.max(at,0),ut=Math.min(ut,Ae.count)):Pe!=null&&(at=Math.max(at,0),ut=Math.min(ut,Pe.count));const Rn=ut-at;if(Rn<0||Rn===1/0)return;pe.setup(j,D,Te,G,Ae);let ai,ft=ve;if(Ae!==null&&(ai=Ut.get(Ae),ft=xe,ft.setIndex(ai)),j.isMesh)D.wireframe===!0?(be.setLineWidth(D.wireframeLinewidth*Fe()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(j.isLine){let ke=D.linewidth;ke===void 0&&(ke=1),be.setLineWidth(ke*Fe()),j.isLineSegments?ft.setMode(O.LINES):j.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else j.isPoints?ft.setMode(O.POINTS):j.isSprite&&ft.setMode(O.TRIANGLES);if(j.isInstancedMesh)ft.renderInstances(at,Rn,j.count);else if(G.isInstancedBufferGeometry){const ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yu=Math.min(G.instanceCount,ke);ft.renderInstances(at,Rn,Yu)}else ft.render(at,Rn)},this.compile=function(T,N){function G(D,j,de){D.transparent===!0&&D.side===xi&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,Oa(D,j,de),D.side=fr,D.needsUpdate=!0,Oa(D,j,de),D.side=xi):Oa(D,j,de)}p=ae.get(T),p.init(),g.push(p),T.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(_.useLegacyLights),T.traverse(function(D){const j=D.material;if(j)if(Array.isArray(j))for(let de=0;de<j.length;de++){const ye=j[de];G(ye,T,D)}else G(j,T,D)}),g.pop(),p=null};let yt=null;function qn(T){yt&&yt(T)}function ot(){kt.stop()}function $n(){kt.start()}const kt=new Ey;kt.setAnimationLoop(qn),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(T){yt=T,C.setAnimationLoop(T),T===null?kt.stop():kt.start()},C.addEventListener("sessionstart",ot),C.addEventListener("sessionend",$n),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(N),N=C.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,N,b),p=ae.get(T,g.length),p.init(),g.push(p),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),se.setFromProjectionMatrix(Me),ce=this.localClippingEnabled,ie=_e.init(this.clippingPlanes,ce),v=ee.get(T,c.length),v.init(),c.push(v),Rh(T,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(P,V),this.info.render.frame++,ie===!0&&_e.beginShadows();const G=p.state.shadowsArray;if(le.render(G,T,N),ie===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(v,T),p.setupLights(_.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let j=0,de=D.length;j<de;j++){const ye=D[j];Ch(v,T,ye,ye.viewport)}}else Ch(v,T,N);b!==null&&(Ue.updateMultisampleRenderTarget(b),Ue.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,N),pe.resetDefaultState(),L=-1,S=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Rh(T,N,G,D){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||se.intersectsSprite(T)){D&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const ye=E.update(T),Te=T.material;Te.visible&&v.push(T,ye,Te,G,Xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||se.intersectsObject(T))){const ye=E.update(T),Te=T.material;if(D&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Xe.copy(ye.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(Te)){const Ae=ye.groups;for(let Ie=0,Re=Ae.length;Ie<Re;Ie++){const Pe=Ae[Ie],at=Te[Pe.materialIndex];at&&at.visible&&v.push(T,ye,at,G,Xe.z,Pe)}}else Te.visible&&v.push(T,ye,Te,G,Xe.z,null)}}const de=T.children;for(let ye=0,Te=de.length;ye<Te;ye++)Rh(de[ye],N,G,D)}function Ch(T,N,G,D){const j=T.opaque,de=T.transmissive,ye=T.transparent;p.setupLightsView(G),ie===!0&&_e.setGlobalState(_.clippingPlanes,G),de.length>0&&Ry(j,de,N,G),D&&be.viewport(w.copy(D)),j.length>0&&Ua(j,N,G),de.length>0&&Ua(de,N,G),ye.length>0&&Ua(ye,N,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ry(T,N,G,D){const j=Ce.isWebGL2;me===null&&(me=new Wr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?pa:or,minFilter:ha,samples:j?4:0})),_.getDrawingBufferSize(Se),j?me.setSize(Se.x,Se.y):me.setSize(gd(Se.x),gd(Se.y));const de=_.getRenderTarget();_.setRenderTarget(me),_.getClearColor(F),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear();const ye=_.toneMapping;_.toneMapping=bi,Ua(T,G,D),Ue.updateMultisampleRenderTarget(me),Ue.updateRenderTargetMipmap(me);let Te=!1;for(let Ae=0,Ie=N.length;Ae<Ie;Ae++){const Re=N[Ae],Pe=Re.object,at=Re.geometry,ut=Re.material,Rn=Re.group;if(ut.side===xi&&Pe.layers.test(D.layers)){const ai=ut.side;ut.side=rn,ut.needsUpdate=!0,Ph(Pe,G,D,at,ut,Rn),ut.side=ai,ut.needsUpdate=!0,Te=!0}}Te===!0&&(Ue.updateMultisampleRenderTarget(me),Ue.updateRenderTargetMipmap(me)),_.setRenderTarget(de),_.setClearColor(F,H),_.toneMapping=ye}function Ua(T,N,G){const D=N.isScene===!0?N.overrideMaterial:null;for(let j=0,de=T.length;j<de;j++){const ye=T[j],Te=ye.object,Ae=ye.geometry,Ie=D===null?ye.material:D,Re=ye.group;Te.layers.test(G.layers)&&Ph(Te,N,G,Ae,Ie,Re)}}function Ph(T,N,G,D,j,de){T.onBeforeRender(_,N,G,D,j,de),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(_,N,G,D,T,de),j.transparent===!0&&j.side===xi&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,_.renderBufferDirect(G,N,D,j,T,de),j.side=fr,j.needsUpdate=!0,_.renderBufferDirect(G,N,D,j,T,de),j.side=xi):_.renderBufferDirect(G,N,D,j,T,de),T.onAfterRender(_,N,G,D,j,de)}function Oa(T,N,G){N.isScene!==!0&&(N=$t);const D=ze.get(T),j=p.state.lights,de=p.state.shadowsArray,ye=j.state.version,Te=X.getParameters(T,j.state,de,N,G),Ae=X.getProgramCacheKey(Te);let Ie=D.programs;D.environment=T.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(T.isMeshStandardMaterial?At:qe).get(T.envMap||D.environment),Ie===void 0&&(T.addEventListener("dispose",ue),Ie=new Map,D.programs=Ie);let Re=Ie.get(Ae);if(Re!==void 0){if(D.currentProgram===Re&&D.lightsStateVersion===ye)return Lh(T,Te),Re}else Te.uniforms=X.getUniforms(T),T.onBuild(G,Te,_),T.onBeforeCompile(Te,_),Re=X.acquireProgram(Te,Ae),Ie.set(Ae,Re),D.uniforms=Te.uniforms;const Pe=D.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=_e.uniform),Lh(T,Te),D.needsLights=Ly(T),D.lightsStateVersion=ye,D.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const at=Re.getUniforms(),ut=kl.seqWithValue(at.seq,Pe);return D.currentProgram=Re,D.uniformsList=ut,Re}function Lh(T,N){const G=ze.get(T);G.outputColorSpace=N.outputColorSpace,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Cy(T,N,G,D,j){N.isScene!==!0&&(N=$t),Ue.resetTextureUnits();const de=N.fog,ye=D.isMeshStandardMaterial?N.environment:null,Te=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:oi,Ae=(D.isMeshStandardMaterial?At:qe).get(D.envMap||ye),Ie=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Pe=!!G.morphAttributes.position,at=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color,Rn=D.toneMapped?_.toneMapping:bi,ai=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=ai!==void 0?ai.length:0,ke=ze.get(D),Yu=p.state.lights;if(ie===!0&&(ce===!0||T!==S)){const sn=T===S&&D.id===L;_e.setState(D,T,sn)}let xt=!1;D.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Yu.state.version||ke.outputColorSpace!==Te||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ae||D.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==_e.numPlanes||ke.numIntersection!==_e.numIntersection)||ke.vertexAlphas!==Ie||ke.vertexTangents!==Re||ke.morphTargets!==Pe||ke.morphNormals!==at||ke.morphColors!==ut||ke.toneMapping!==Rn||Ce.isWebGL2===!0&&ke.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,ke.__version=D.version);let _r=ke.currentProgram;xt===!0&&(_r=Oa(D,N,j));let Dh=!1,_o=!1,Ku=!1;const Vt=_r.getUniforms(),gr=ke.uniforms;if(be.useProgram(_r.program)&&(Dh=!0,_o=!0,Ku=!0),D.id!==L&&(L=D.id,_o=!0),Dh||S!==T){if(Vt.setValue(O,"projectionMatrix",T.projectionMatrix),Ce.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,_o=!0,Ku=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const sn=Vt.map.cameraPosition;sn!==void 0&&sn.setValue(O,Xe.setFromMatrixPosition(T.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||j.isSkinnedMesh)&&Vt.setValue(O,"viewMatrix",T.matrixWorldInverse)}if(j.isSkinnedMesh){Vt.setOptional(O,j,"bindMatrix"),Vt.setOptional(O,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(Ce.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Vt.setValue(O,"boneTexture",sn.boneTexture,Ue),Vt.setValue(O,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zu=G.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0&&Ce.isWebGL2===!0)&&ge.update(j,G,_r),(_o||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,Vt.setValue(O,"receiveShadow",j.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(gr.envMap.value=Ae,gr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),_o&&(Vt.setValue(O,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Py(gr,Ku),de&&D.fog===!0&&J.refreshFogUniforms(gr,de),J.refreshMaterialUniforms(gr,D,q,K,me),kl.upload(O,ke.uniformsList,gr,Ue)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(kl.upload(O,ke.uniformsList,gr,Ue),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Vt.setValue(O,"center",j.center),Vt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(O,"normalMatrix",j.normalMatrix),Vt.setValue(O,"modelMatrix",j.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const sn=D.uniformsGroups;for(let Qu=0,Dy=sn.length;Qu<Dy;Qu++)if(Ce.isWebGL2){const Uh=sn[Qu];Ne.update(Uh,_r),Ne.bind(Uh,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function Py(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Ly(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,N,G){ze.get(T.texture).__webglTexture=N,ze.get(T.depthTexture).__webglTexture=G;const D=ze.get(T);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const G=ze.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){b=T,M=N,R=G;let D=!0,j=null,de=!1,ye=!1;if(T){const Ae=ze.get(T);Ae.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(O.FRAMEBUFFER,null),D=!1):Ae.__webglFramebuffer===void 0?Ue.setupRenderTarget(T):Ae.__hasExternalTextures&&Ue.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Re=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(j=Re[N],de=!0):Ce.isWebGL2&&T.samples>0&&Ue.useMultisampledRTT(T)===!1?j=ze.get(T).__webglMultisampledFramebuffer:j=Re,w.copy(T.viewport),Y.copy(T.scissor),Q=T.scissorTest}else w.copy(B).multiplyScalar(q).floor(),Y.copy(U).multiplyScalar(q).floor(),Q=I;if(be.bindFramebuffer(O.FRAMEBUFFER,j)&&Ce.drawBuffers&&D&&be.drawBuffers(T,j),be.viewport(w),be.scissor(Y),be.setScissorTest(Q),de){const Ae=ze.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,G)}else if(ye){const Ae=ze.get(T.texture),Ie=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Ie)}L=-1},this.readRenderTargetPixels=function(T,N,G,D,j,de,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){be.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ae=T.texture,Ie=Ae.format,Re=Ae.type;if(Ie!==kn&&he.convert(Ie)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===pa&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Re!==or&&he.convert(Re)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===$i&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-D&&G>=0&&G<=T.height-j&&O.readPixels(N,G,D,j,he.convert(Ie),he.convert(Re),de)}finally{const Ae=b!==null?ze.get(b).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,N,G=0){const D=Math.pow(2,-G),j=Math.floor(N.image.width*D),de=Math.floor(N.image.height*D);Ue.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,T.x,T.y,j,de),be.unbindTexture()},this.copyTextureToTexture=function(T,N,G,D=0){const j=N.image.width,de=N.image.height,ye=he.convert(G.format),Te=he.convert(G.type);Ue.setTexture2D(G,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,D,T.x,T.y,j,de,ye,Te,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,D,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,D,T.x,T.y,ye,Te,N.image),D===0&&G.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G,D,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ae=he.convert(D.format),Ie=he.convert(D.type);let Re;if(D.isData3DTexture)Ue.setTexture3D(D,0),Re=O.TEXTURE_3D;else if(D.isDataArrayTexture)Ue.setTexture2DArray(D,0),Re=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Pe=O.getParameter(O.UNPACK_ROW_LENGTH),at=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ut=O.getParameter(O.UNPACK_SKIP_PIXELS),Rn=O.getParameter(O.UNPACK_SKIP_ROWS),ai=O.getParameter(O.UNPACK_SKIP_IMAGES),ft=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Re,j,N.x,N.y,N.z,de,ye,Te,Ae,Ie,ft.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Re,j,N.x,N.y,N.z,de,ye,Te,Ae,ft.data)):O.texSubImage3D(Re,j,N.x,N.y,N.z,de,ye,Te,Ae,Ie,ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ai),j===0&&D.generateMipmaps&&O.generateMipmap(Re),be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){M=0,R=0,b=null,be.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Nr:ly}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?De:oi}}class vC extends by{}vC.prototype.isWebGL1Renderer=!0;class yC extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);class xC{constructor(e){li(this,"root");li(this,"renderer");li(this,"scene");li(this,"camera");li(this,"renderIsQueued");li(this,"theCube");this.root=e,this.renderIsQueued=!1,this.scene=new yC,this.camera=new Sn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new by,this.renderer.setSize(640,480);const n=new po(1,1,1),i=new wh({color:65280});this.theCube=new Ti(n,i),this.scene.add(this.theCube),this.camera.position.z=5,O0(this,{root:!1,renderer:!1,domElement:!1,_queueRender:!1,theCube:!1}),this._queueRender()}get domElement(){return this.renderer.domElement}_queueRender(){requestAnimationFrame(()=>this.render())}invalidate(){this.renderIsQueued||(this._queueRender(),this.renderIsQueued=!0)}render(){this.renderer.render(this.scene,this.camera),this.root.count++,this.renderIsQueued=!1,this.theCube.rotation.x+=.01,this.theCube.rotation.y+=.01}tick(){this.count++}}class SC{constructor(){li(this,"count",0);li(this,"render");this.render=new xC(this),O0(this,{render:!1})}tick(){this.count++,this.render.render()}}C0({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!0,observableRequiresReaction:!0});const EC=new SC;lf.createRoot(document.getElementById("root")).render(On.jsx(ms.StrictMode,{children:On.jsx(fT,{state:EC})}));
